import { DownloadButton } from "./DownloadButton";
import { ThemeToggle } from "./ThemeToggle";
import { APP_NAME } from "../config";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-20 flex items-center justify-between gap-2 bg-page/80 backdrop-blur-lg py-5 px-5 md:px-14">
      {/*
        The logo file carries its own padding, so the gap here is smaller than it
        looks — `alt` is empty because the wordmark next to it already says the name,
        and the link's aria-label covers the accessible name.
      */}
      <a href="/" className="inline-flex items-center gap-2.5 no-underline" aria-label={`${APP_NAME} home`}>
        {/*
          drop-shadow (not box-shadow) traces the SVG's alpha silhouette, which here
          is the rounded-square plate — the outermost opaque shape. Applied on the
          element rather than inside the file so it follows the theme token and
          doesn't leak into the favicon and touch icon built from the same source.
        */}
        <img src="/app-logo.svg" width={60} height={60} alt="" className="block w-12 h-12 md:w-15 md:h-15 drop-shadow-sm" />
        {/*
          Positive tracking: the dot-matrix glyphs run together at the tight setting
          Inter wanted. Hidden under 360px — the caps are wide enough that the header
          only has ~110px for the mark and name there, and they need ~127px. The
          link's aria-label still supplies the name.
        */}
        {/*
          translate-y nudge, not a layout fix: `items-center` centers the line box, but
          Bitcount reserves descent (34 ascent / 14 descent) that uppercase never uses,
          so the caps' ink sits 0.05em above the box center. Expressed in em so it holds
          at both the mobile and desktop sizes.
        */}
        <span className="font-wordmark uppercase text-lg md:text-[40px] font-medium text-brand translate-y-[0.05em] max-[359px]:hidden">{APP_NAME}</span>
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
