"use client";

import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

export const TABS = ["home", "portfolio", "hobbies", "contact"] as const;
export type Tab = (typeof TABS)[number];

export const tabHref = (id: Tab) => (id === "home" ? "/" : `/${id}`);

export function tabFromPath(path: string): Tab {
  const id = path.split("/")[1] as Tab;
  return TABS.includes(id) ? id : "home";
}

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
        <Link
          key={it.id}
          href={tabHref(it.id)}
          scroll={false}
          aria-current={active === it.id ? "page" : undefined}
        >
          {it.icon && <span className="ic">{it.icon}</span>}
          {it.label}
        </Link>
      ))}
    </nav>
  );
}
