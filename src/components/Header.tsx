import { DownloadButton } from "./DownloadButton";
import { ThemeToggle } from "./ThemeToggle";
import { APP_NAME } from "../config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-20 flex items-center justify-between bg-page/80 backdrop-blur-lg py-5 px-7 md:px-14">
      <a href="/" className="inline-flex items-center" aria-label={`${APP_NAME} home`}>
        <img src="/app-logo.svg" width={60} height={60} alt={`${APP_NAME} logo`} className="block" />
      </a>
      <div className="flex items-center gap-3 md:gap-5">
        <ThemeToggle />
        <DownloadButton variant="invert" shape="pill">
          Download
        </DownloadButton>
      </div>
    </header>
  );
}
