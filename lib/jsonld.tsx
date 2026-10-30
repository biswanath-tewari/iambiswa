import { PERSON, SITE_URL } from "./site";

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

/** Structured data that tells Google who this site is about. Rendered once in the root layout. */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: PERSON.name,
      alternateName: PERSON.alternateNames,
      givenName: "Biswanath",
      familyName: "Tewari",
      url: SITE_URL,
      image: `${SITE_URL}/opengraph-image`,
      email: `mailto:${PERSON.email}`,
      jobTitle: PERSON.jobTitle,
      description: PERSON.description,
      worksFor: {
        "@type": "Organization",
        name: "Kotak Mahindra Bank",
        url: "https://www.kotak.com",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "React Native Developer",
        occupationLocation: { "@type": "City", name: "Bengaluru" },
        skills: "React Native, React, Next.js, TypeScript, mobile app development, fintech",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
      knowsAbout: [
        "React Native",
        "React",
        "Next.js",
        "TypeScript",
        "Mobile app development",
        "iOS",
        "Android",
        "Fintech",
        "Expo",
        "Fitness and nutrition",
      ],
      sameAs: PERSON.sameAs,
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: SITE_URL,
      name: PERSON.name,
      alternateName: ["iambiswa", "Biswa"],
      inLanguage: "en-IN",
      publisher: { "@id": personId },
      about: { "@id": personId },
    },
  ],
};

export function profilePageLd(path: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${SITE_URL}${path}`,
    name,
    isPartOf: { "@id": websiteId },
    mainEntity: { "@id": personId },
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here: the data is static and authored in this repo.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
