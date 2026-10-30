import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Hobbies from "@/components/Hobbies";
import Portfolio from "@/components/Portfolio";
import { View } from "@/components/Site";

const pages = {
  portfolio: { title: "Portfolio", Content: Portfolio },
  hobbies: { title: "Hobbies", Content: Hobbies },
  contact: { title: "Contact", Content: Contact },
};

type Params = { params: Promise<{ tab: keyof typeof pages }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(pages).map((tab) => ({ tab }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { tab } = await params;
  return { title: pages[tab].title };
}

export default async function Page({ params }: Params) {
  const { Content } = pages[(await params).tab];
  return (
    <View>
      <Content />
    </View>
  );
}
