/**
 * Every externally-facing string and URL for the site lives here.
 * Bump VERSION on a new release and all four download links follow.
 */

export const SITE_URL = "https://gluance.com";

export const APP_NAME = "Gluance";
export const VERSION = "1.0.0";

export const GITHUB_URL = "https://github.com/MatthewBlam/Gluance";

/**
 * The .dmg itself, so a click starts the download instead of landing on GitHub.
 * The filename must match the asset attached to the release exactly — GitHub 404s
 * otherwise — so check it after every build if the naming ever changes.
 */
export const DOWNLOAD_URL = `${GITHUB_URL}/releases/download/v${VERSION}/${APP_NAME}-${VERSION}-arm64.dmg`;
export const AUTHOR_NAME = "Matthew Blam";
export const AUTHOR_URL = "https://github.com/MatthewBlam";
export const CONTACT_EMAIL = "mrblam@calpoly.edu";

export const MIN_MACOS = "macOS 12+";
export const REQUIREMENTS = `${MIN_MACOS} · Apple Silicon`;

export const DESCRIPTION =
  "Gluance is a free, open-source macOS app for real-time Dexcom CGM readings — a menu bar readout and an always-on-top widget. Credentials stay Keychain-encrypted.";
