"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import TabBar, { TABS, tabFromPath, tabHref, type Tab } from "./TabBar";

/** Header, tab bars and footer. Lives in the root layout so it persists across tab pages. */
export default function Site({ children }: { children: React.ReactNode }) {
  const tab = tabFromPath(usePathname());
  const router = useRouter();

  // Old links used #hash routing (/#portfolio); send them to the real page.
  useEffect(() => {
    const h = window.location.hash.slice(1) as Tab;
    if (TABS.includes(h)) router.replace(tabHref(h), { scroll: false });
  }, [router]);

  return (
    <>
      <header className="top">
        <div className="wrap">
          <Link className="logo" href="/" scroll={false}>
            Biswanath <span>Tewari</span>
          </Link>
          <TabBar
            ariaLabel="Sections"
            active={tab}
            items={[
              { id: "home", label: "Home" },
              { id: "portfolio", label: "Portfolio" },
              { id: "hobbies", label: "Hobbies" },
              { id: "contact", label: "Contact" },
            ]}
          />
        </div>
      </header>

      <main className="wrap">{children}</main>

      <footer className="site">
        <div className="wrap">Designed &amp; built by Biswanath Tewari · Bengaluru</div>
      </footer>

      <div className="bottom">
        <TabBar
          ariaLabel="Sections"
          active={tab}
          items={[
            { id: "home", label: "Home", icon: "⌂" },
            { id: "portfolio", label: "Work", icon: "◧" },
            { id: "hobbies", label: "Hobbies", icon: "♥" },
            { id: "contact", label: "Contact", icon: "@" },
          ]}
        />
      </div>
    </>
  );
}

let navigated = false;

/** Wraps one tab's content. Animates in and jumps to the top on every tab switch, but not on first load. */
export function View({ children }: { children: React.ReactNode }) {
  const [animate] = useState(() => navigated);

  useLayoutEffect(() => {
    if (animate) window.scrollTo({ top: 0, behavior: "instant" });
    navigated = true;
  }, [animate]);

  return <div className={`view${animate ? " enter" : ""}`}>{children}</div>;
}
