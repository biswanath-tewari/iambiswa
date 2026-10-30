import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import Site from "@/src/components/Site";
import { JsonLd, siteGraph } from "@/lib/jsonld";
import { KEYWORDS, PERSON, SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Biswanath Tewari (Biswa) · React Native & Mobile App Developer, Bengaluru",
    template: "%s · Biswanath Tewari",
  },
  description:
    "Biswanath Tewari (Biswa) is a React Native and mobile app developer in Bengaluru with 5+ years of experience. AVP at Kotak Mahindra Bank building Kotak811, ex-GeekyAnts team lead.",
  applicationName: "Biswanath Tewari",
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  keywords: KEYWORDS,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: "Biswanath",
    lastName: "Tewari",
    username: "iambiswa",
    url: SITE_URL,
    siteName: "Biswanath Tewari",
    locale: "en_IN",
    title: "Biswanath Tewari · React Native & Mobile App Developer",
    description: "React Native and mobile app developer in Bengaluru. AVP at Kotak Mahindra Bank, building Kotak811.",
  },
  twitter: {
    card: "summary_large_image",
    creator: PERSON.x,
    title: "Biswanath Tewari · React Native & Mobile App Developer",
    description: "React Native and mobile app developer in Bengaluru. AVP at Kotak Mahindra Bank, building Kotak811.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // Optional: set GOOGLE_SITE_VERIFICATION in Vercel if you verify Search Console with the HTML-tag method.
  verification: process.env.GOOGLE_SITE_VERIFICATION ? { google: process.env.GOOGLE_SITE_VERIFICATION } : undefined,
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EEF1F6" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0F1A" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <JsonLd data={siteGraph} />
        <Site>{children}</Site>
      </body>
    </html>
  );
}
