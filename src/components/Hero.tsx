import { DemoVideo } from "./DemoVideo";
import { DownloadButton } from "./DownloadButton";
import { GITHUB_URL, REQUIREMENTS } from "../config";

export function Hero() {
  return (
    <section className="max-w-screen-xl mx-auto flex flex-col items-center text-center pt-7 md:pt-16 px-7">
      <div className="inline-flex items-center gap-2 text-base text-app-text-muted mb-9">
        <span>Free &amp; open source.</span>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-app-text font-semibold no-underline hover:text-brand transition-colors">
          View on GitHub <span className="text-sm">&rarr;</span>
        </a>
      </div>

      <h1 className="font-bold leading-none tracking-tighter m-0 text-4xl md:text-5xl lg:text-6xl text-balance">
        Real-time
        <br className="md:hidden" /> glucose readings
        <br />
        <span className="text-app-text-muted">right on your Mac.</span>
      </h1>

      <div className="mt-10">
        <DownloadButton variant="brand">Download for macOS</DownloadButton>
        <p className="text-xs text-app-text-subtle mt-3.5">{REQUIREMENTS}</p>
      </div>

      <DemoVideo />
    </section>
  );
}
