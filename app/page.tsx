import type { Metadata } from "next";
import Home from "@/src/tabs/Home";
import { View } from "@/src/components/Site";
import { JsonLd, profilePageLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <View>
      <JsonLd data={profilePageLd("/", "Biswanath Tewari · React Native & Mobile App Developer")} />
      <Home />
    </View>
  );
}
