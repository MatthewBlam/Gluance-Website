const FEATURES = [
  {
    title: "Runs locally",
    body: "No web app, no servers. Gluance talks to the Dexcom Share API straight from your Mac.",
  },
  {
    title: "Keychain-encrypted",
    body: "Your Dexcom credentials are sealed at rest by macOS. Never stored in plain text.",
  },
  {
    title: "Always in view",
    body: "A menu bar reading and an always-on-top widget with an optional sparkline. Your numbers, always in view.",
  },
];

export function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {FEATURES.map((feature) => (
        <div key={feature.title} className="bg-card border border-app-border rounded-2xl p-6 text-center md:text-left">
          <h3 className="text-lg font-bold m-0 mb-2">{feature.title}</h3>
          <p className="text-sm leading-relaxed text-app-text-muted m-0">{feature.body}</p>
        </div>
      ))}
    </div>
  );
}
