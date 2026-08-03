import { APP_NAME, AUTHOR_NAME, AUTHOR_URL, DESCRIPTION, DOWNLOAD_URL, MIN_MACOS, VERSION } from "../config";

const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: APP_NAME,
  operatingSystem: MIN_MACOS,
  applicationCategory: "HealthApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description: DESCRIPTION,
  downloadUrl: DOWNLOAD_URL,
  softwareVersion: VERSION,
  author: {
    "@type": "Person",
    name: AUTHOR_NAME,
    url: AUTHOR_URL,
  },
  license: "https://opensource.org/licenses/MIT",
  isAccessibleForFree: true,
};

export function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }} />;
}
