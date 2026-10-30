import { ImageResponse } from "next/og";
import { Logo } from "@/lib/logo";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  // iOS rounds the corners itself, so the square stays square.
  return new ImageResponse(<Logo size={180} radius={0} />, size);
}
