# Gluance — website

Landing page for [Gluance](https://github.com/MatthewBlam/Gluance), a free, open-source
macOS app for real-time glucose readings.

Vite + React + TypeScript + Tailwind CSS v4. Deploys to Vercel.

## Develop

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ locally
```

## Structure

```
index.html            entry: head meta, pre-paint theme script
src/
  config.ts           every external URL and shared string
  index.css           Gluance design tokens (Tailwind v4 @theme) + light/dark
  hooks/useTheme.ts   system-default theme with a persisted manual override
  components/         Header, Hero, DemoVideo, Features, CallToAction, Footer, …
public/               demo video, brand assets, robots.txt, sitemap.xml
```

## Demo video

Two files, and only one of them is in git:

- `gluance_demo.mp4` at the repo root — the master screen recording, 3024×1964 at
  60 fps, ~76 MB. **Gitignored**, and deliberately outside `public/` so it is never
  deployed. Keep your copy here; it is the input to the encode below.
- `public/demo.mp4` — the 2048×1330 / 30 fps encode that actually ships, ~4.9 MB.
  This is what `DemoVideo.tsx` loads.

The hero renders at `max-w-screen-lg`, i.e. 1024 CSS px, so 2048 device px covers a
Retina display exactly — encoding wider only costs bandwidth. 30 fps is plenty for
a UI screen recording. The result is visually indistinguishable from the master at
the size it's displayed, and 15× smaller.

To regenerate after a new recording, drop the new master at the repo root and run:

```sh
ffmpeg -y -i gluance_demo.mp4 -vf "scale=2048:-2,fps=30" \
  -c:v libx264 -crf 28 -preset slow -pix_fmt yuv420p -an \
  -movflags +faststart public/demo.mp4
```

`-movflags +faststart` puts the `moov` atom at the front so playback can begin
before the whole file arrives; `-an` drops the (silent) audio track. Then rebuild
the poster and OG image — see [`public/ASSETS.md`](public/ASSETS.md).
