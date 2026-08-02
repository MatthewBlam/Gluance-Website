import { DownloadButton } from "./DownloadButton";

export function CallToAction() {
  return (
    <div className="w-full mx-auto rounded-3xl border border-app-border bg-card py-16 px-7 text-center">
      <h2 className="font-bold tracking-tight text-2xl md:text-4xl m-0">
        Open source.
        <br className="md:hidden" /> Built for the community.
      </h2>
      <p className="text-base leading-relaxed text-app-text-muted mt-2 mb-8">Completely free. Not affiliated with Dexcom, Inc.</p>
      <DownloadButton variant="invert">Download for macOS</DownloadButton>
    </div>
  );
}
