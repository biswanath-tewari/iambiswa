import type { CSSProperties } from "react";

/** Stagger index for the rise-in animation used when a tab opens. */
export function rv(i: number, extra?: CSSProperties): CSSProperties {
  return { ["--i" as string]: i, ...extra } as CSSProperties;
}
