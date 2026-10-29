"use client";

import { useEffect, useState } from "react";
import TabBar, { type Tab } from "./TabBar";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Hobbies from "./Hobbies";
import Contact from "./Contact";

const TABS: Tab[] = ["home", "portfolio", "hobbies", "contact"];

function fromHash(): Tab {
  const h = window.location.hash.slice(1) as Tab;
  return TABS.includes(h) ? h : "home";
}

export default function Site() {
  const [tab, setTab] = useState<Tab>("home");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTab(fromHash());
    let current = fromHash();
    const show = (next: Tab) => {
      if (next === current) return;
      current = next;
      setTab(next);
      setAnimate(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    const onHash = () => show(fromHash());
    // Handle in-page tab links directly; some browsers update the URL without firing hashchange.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.('a[href^="#"]');
      const id = a?.getAttribute("href")?.slice(1) as Tab | undefined;
      if (!id || !TABS.includes(id)) return;
      e.preventDefault();
      if (window.location.hash !== `#${id}`) history.pushState(null, "", `#${id}`);
      show(id);
    };
    window.addEventListener("hashchange", onHash);
    window.addEventListener("popstate", onHash);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("hashchange", onHash);
      window.removeEventListener("popstate", onHash);
      document.removeEventListener("click", onClick);
    };
  }, []);

  const viewClass = `view${animate ? " enter" : ""}`;

  return (
    <>
      <header className="top">
        <div className="wrap">
          <a className="logo" href="#home">
            Biswanath <span>Tewari</span>
          </a>
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

      <main className="wrap">
        <div key={tab} className={viewClass}>
          {tab === "home" && <Home />}
          {tab === "portfolio" && <Portfolio />}
          {tab === "hobbies" && <Hobbies />}
          {tab === "contact" && <Contact />}
        </div>
      </main>

      <footer className="site">
        <div className="wrap">Designed &amp; built by Biswa · Bengaluru</div>
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
