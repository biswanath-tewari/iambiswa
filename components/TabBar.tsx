"use client";

import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

export type Tab = "home" | "portfolio" | "hobbies" | "contact";

type Item = { id: Tab; label: string; icon?: string };

export default function TabBar({
  items,
  active,
  className = "tabs",
  ariaLabel,
}: {
  items: Item[];
  active: Tab;
  className?: string;
  ariaLabel?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const ind = useRef<HTMLSpanElement>(null);

  const move = useCallback(() => {
    const el = ref.current;
    const bar = ind.current;
    if (!el || !bar || !el.offsetParent) return;
    const cur = el.querySelector<HTMLAnchorElement>('a[aria-current="page"]');
    if (!cur) return;
    bar.style.left = `${cur.offsetLeft}px`;
    bar.style.width = `${cur.offsetWidth}px`;
  }, []);

  useLayoutEffect(move, [active, move]);

  useEffect(() => {
    window.addEventListener("resize", move);
    document.fonts?.ready.then(move);
    return () => window.removeEventListener("resize", move);
  }, [move]);

  return (
    <nav ref={ref} className={className} aria-label={ariaLabel}>
      <span ref={ind} className="ind" />
      {items.map((it) => (
        <a key={it.id} href={`#${it.id}`} aria-current={active === it.id ? "page" : undefined}>
          {it.icon && <span className="ic">{it.icon}</span>}
          {it.label}
        </a>
      ))}
    </nav>
  );
}
