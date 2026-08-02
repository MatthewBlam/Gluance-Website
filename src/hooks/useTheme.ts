import { useCallback, useState } from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function currentTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

function apply(theme: Theme) {
  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
}

/**
 * Dark by default. The OS preference is not consulted — only a choice the visitor
 * made with the header toggle, which is persisted and wins on every later visit.
 * The initial attribute is set by a blocking script in index.html so there's no
 * flash before hydration; this hook only reads what that script decided.
 */
export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  const toggle = useCallback(() => {
    setTheme((previous) => {
      const next: Theme = previous === "dark" ? "light" : "dark";
      apply(next);
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Private browsing or blocked storage — the toggle still works for this session.
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}
