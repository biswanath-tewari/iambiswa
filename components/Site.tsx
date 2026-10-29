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
    const onHash = () => {
      setTab(fromHash());
      setAnimate(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
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
