import { CONTACT_EMAIL } from "../config";

export function Footer() {
  return (
    <footer className="w-full border-t border-app-border flex flex-wrap gap-3.5 items-center justify-between text-sm text-app-text-subtle mt-12 md:mt-24 py-7 px-7 md:px-14">
      <div className="flex flex-col gap-1">
        <span className="text-app-text-muted">
          Made with <span className="text-reading-low">&hearts;</span>
        </span>
        <span className="text-app-text-subtle text-xs">For monitoring only &mdash; do not use for medical decisions.</span>
      </div>
      <a href={`mailto:${CONTACT_EMAIL}`} className="text-app-text font-semibold no-underline hover:text-brand transition-colors">
        {CONTACT_EMAIL}
      </a>
    </footer>
  );
}
