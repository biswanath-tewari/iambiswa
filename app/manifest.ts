import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Biswanath Tewari",
    short_name: "Biswa",
    description: "React Native and mobile app developer in Bengaluru.",
    start_url: "/",
    display: "standalone",
    background_color: "#EEF1F6",
    theme_color: "#2747F5",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
