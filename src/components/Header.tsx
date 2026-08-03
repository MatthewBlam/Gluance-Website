import { DownloadButton } from "./DownloadButton";
import { ThemeToggle } from "./ThemeToggle";
import { APP_NAME } from "../config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-20 flex items-center justify-between gap-2 bg-page/80 backdrop-blur-lg py-5 px-5 md:px-14">
      {/*
        translate-y nudge, not a layout fix: `items-center` centers the line box, but
        Bitcount reserves descent (34 ascent / 14 descent) that uppercase never uses,
        so the caps' ink sits 0.05em above the box center. Expressed in em so it holds
        at both the mobile and desktop sizes.
      */}
      <a
        href="/"
        className="font-wordmark uppercase text-lg md:text-[40px] font-medium text-brand no-underline translate-y-[0.05em]"
        aria-label={`${APP_NAME} home`}>
        {APP_NAME}
      </a>
      <div className="flex items-center gap-1 md:gap-5 shrink-0">
        <ThemeToggle />
        <DownloadButton variant="invert" shape="pill">
          Download
        </DownloadButton>
      </div>
    </header>
  );
}
