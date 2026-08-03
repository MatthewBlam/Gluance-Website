# Gluance - website

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
  hooks/useTheme.ts   dark by default, with a persisted manual override
  components/         Header, Hero, DemoVideo, Features, CallToAction, Footer, …
public/               demo video, brand assets, robots.txt, sitemap.xml
```

## Releases

Bump `VERSION` in `src/config.ts`; every download link and the JSON-LD follow.

The buttons point straight at the `.dmg` so a click downloads instead of opening
GitHub. That couples `DOWNLOAD_URL` to the attached asset's filename — if the build
ever stops producing `Gluance-<VERSION>-arm64.dmg`, the buttons 404 silently. Check
after each release:

```sh
curl -sIL https://github.com/MatthewBlam/Gluance/releases/download/v1.0.0/Gluance-1.0.0-arm64.dmg \
  | grep -E '^HTTP/|content-disposition'
```

Download counts from GitHub:

```sh
curl -s https://api.github.com/repos/MatthewBlam/Gluance/releases \
  | jq '.[] | {tag: .tag_name, assets: [.assets[] | {name, downloads: .download_count}]}'
```
