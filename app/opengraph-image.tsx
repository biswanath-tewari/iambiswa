import { ImageResponse } from "next/og";
import { Logo } from "@/lib/logo";

export const alt = "Biswanath Tewari, React Native and web developer in Bengaluru";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0B0F1A",
          color: "#E8ECF4",
        }}
      >
        <Logo size={120} radius={26} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, letterSpacing: -2 }}>
            Biswanath&nbsp;<span style={{ color: "#7B93FF" }}>Tewari</span>
          </div>
          <div style={{ fontSize: 36, color: "#98A2B6", marginTop: 16 }}>
            React Native &amp; web developer · Bengaluru
          </div>
        </div>
      </div>
    ),
    size,
  );
}
