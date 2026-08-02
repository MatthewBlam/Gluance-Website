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
  hooks/useTheme.ts   dark by default, with a persisted manual override
  components/         Header, Hero, DemoVideo, Features, CallToAction, Footer, …
public/               demo video, brand assets, robots.txt, sitemap.xml
```
