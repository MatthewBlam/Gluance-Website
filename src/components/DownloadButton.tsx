import { AppleIcon } from "./AppleIcon";
import { DOWNLOAD_URL } from "../config";

type DownloadButtonProps = {
  /** "brand" is the green hero CTA; "invert" is the dark pill used in the header and closing CTA. */
  variant: "brand" | "invert";
  /** "pill" is the compact header shape; "block" is the larger rounded rectangle. */
  shape?: "pill" | "block";
  children: React.ReactNode;
};

const VARIANTS = {
  brand: "bg-brand text-on-brand hover:bg-brand-hover",
  invert: "bg-app-text text-page hover:opacity-90",
} as const;

const SHAPES = {
  pill: "gap-2 text-sm px-4 py-2.5 rounded-3xl",
  block: "gap-3 text-base py-3.5 px-5 rounded-xl",
} as const;

// No target="_blank": GitHub serves the asset with Content-Disposition: attachment, so
// the browser downloads it without navigating. A new tab would just flash open and close.
export function DownloadButton({ variant, shape = "block", children }: DownloadButtonProps) {
  return (
    <a
      href={DOWNLOAD_URL}
      rel="noopener"
      className={`select-none inline-flex items-center no-underline font-semibold transition-all duration-150 ${VARIANTS[variant]} ${SHAPES[shape]}`}>
      <AppleIcon size={shape === "pill" ? 14 : 17} />
      <span>{children}</span>
    </a>
  );
}
