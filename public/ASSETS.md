# Brand assets

All assets here are real — there are no placeholders left.

| File | Used by | Source |
| --- | --- | --- |
| `app-logo.svg` | nothing on the page — kept as the source the two icons derive from | the Gluance app icon, as supplied |
| `favicon.svg` | browser tab | `app-logo.svg`, cropped to `viewBox="238 238 524 524"` so the ring still reads at 16px |
| `apple-touch-icon.png` | iOS home screen | `app-logo.svg` on a full-bleed opaque white background (iOS ignores transparency and squares off its own corners) |
| `og.png` | Open Graph / Twitter card, 1200×630 | frame from the demo recording |
| `demo-poster.jpg` | `<video poster>` — shown before playback | frame from the demo recording, 1600px wide |
| `demo.mp4` | the hero video | 2048×1330 / 30 fps encode of the master recording — see the README |

The header is a text-only wordmark (Bitcount Prop Single, set in `Header.tsx`), so no
logo image is loaded by the page. `app-logo.svg` stays because `favicon.svg` and
`apple-touch-icon.png` are derived from it — regenerate those from it if the app icon
changes.

## Regenerating

After replacing the demo recording (run from the repo root, against the gitignored
master — not `public/demo.mp4`):

```sh
ffmpeg -y -ss 1 -i gluance_demo.mp4 -frames:v 1 -vf "scale=1600:-2" -q:v 4 public/demo-poster.jpg
ffmpeg -y -ss 1 -i gluance_demo.mp4 -frames:v 1 -vf "scale=1200:-2,crop=1200:630" public/og.png
```

After changing `app-logo.svg`, rebuild the touch icon (macOS). Note that `sips`
rasterizes whatever the SVG contains, so the source needs an opaque background —
see the white `<rect>` in the snippet:

```sh
sips -s format png --resampleHeightWidth 180 180 <opaque-variant>.svg --out public/apple-touch-icon.png
```
