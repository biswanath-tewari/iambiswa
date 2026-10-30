import { EMAIL, links } from "./data";

/** Canonical origin. Keep in sync with the primary domain in Vercel (www should redirect here). */
export const SITE_URL = "https://iambiswa.in";

export const PERSON = {
  name: "Biswanath Tewari",
  shortName: "Biswa",
  alternateNames: ["Biswa", "Biswa Tewari", "Biswanath", "iambiswa"],
  jobTitle: "React Native Developer · AVP at Kotak Mahindra Bank",
  description:
    "Biswanath Tewari (Biswa) is a React Native and mobile app developer in Bengaluru with 5+ years of experience. He builds Kotak811 at Kotak Mahindra Bank, owning its Fixed Deposit module, and previously led mobile teams at GeekyAnts.",
  email: EMAIL,
  x: "@iambiswaaa",
  sameAs: links.filter((l) => l.href.startsWith("http")).map((l) => l.href),
} as const;

export const KEYWORDS = [
  "Biswanath Tewari",
  "Biswa",
  "Biswa Tewari",
  "Biswanath",
  "iambiswa",
  "React Native developer",
  "React Native developer Bengaluru",
  "React Native developer India",
  "mobile app developer Bengaluru",
  "mobile developer",
  "Kotak811 developer",
  "Kotak Mahindra Bank",
  "GeekyAnts",
  "React developer",
  "Next.js developer",
  "fintech mobile developer",
];

/** Shared social-card fields. Nested pages must repeat them because Next.js replaces, not merges, openGraph/twitter. */
export const OG_IMAGE = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Biswanath Tewari, React Native and mobile app developer in Bengaluru",
};
export const OG_BASE = { type: "profile" as const, siteName: "Biswanath Tewari", locale: "en_IN", images: [OG_IMAGE] };
export const TWITTER_BASE = { card: "summary_large_image" as const, creator: "@iambiswaaa", images: [OG_IMAGE.url] };
