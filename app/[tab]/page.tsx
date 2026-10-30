import type { Metadata } from "next";
import Contact from "@/src/tabs/Contact";
import Hobbies from "@/src/tabs/Hobbies";
import Portfolio from "@/src/tabs/Portfolio";
import { View } from "@/src/components/Site";
import { JsonLd, profilePageLd } from "@/lib/jsonld";
import { OG_BASE, TWITTER_BASE } from "@/lib/site";

const pages = {
  portfolio: {
    title: "Portfolio · React Native Developer",
    description:
      "Experience and projects of Biswanath Tewari, React Native developer: Kotak811 at Kotak Mahindra Bank (10M monthly users), PokerBoss team lead at GeekyAnts, healthcare and Milaap apps, plus recommendations.",
    Content: Portfolio,
  },
  hobbies: {
    title: "Fitness & Hobbies",
    description:
      "Biswa off the clock: a 23 kg fitness transformation, evidence-based training and nutrition notes, his daily supplement stack, rides, badminton, swimming and travel.",
    Content: Hobbies,
  },
  contact: {
    title: "Contact",
    description:
      "Get in touch with Biswanath Tewari, React Native and mobile developer in Bengaluru. LinkedIn, GitHub, X, Instagram, résumé and email.",
    Content: Contact,
  },
};

type Params = { params: Promise<{ tab: keyof typeof pages }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pages).map((tab) => ({ tab }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { tab } = await params;
  const { title, description } = pages[tab];
  return {
    title,
    description,
    alternates: { canonical: `/${tab}` },
    openGraph: { ...OG_BASE, title: `${title} · Biswanath Tewari`, description, url: `/${tab}` },
    twitter: { ...TWITTER_BASE, title: `${title} · Biswanath Tewari`, description },
  };
}

export default async function Page({ params }: Params) {
  const { tab } = await params;
  const { Content, title } = pages[tab];
  return (
    <View>
      <JsonLd data={profilePageLd(`/${tab}`, `${title} · Biswanath Tewari`)} />
      <Content />
    </View>
  );
}
