"use client";

import { useRef, useState } from "react";
import { EMAIL } from "@/lib/data";
import { rv } from "@/lib/rv";

export default function CopyEmail() {
  const [label, setLabel] = useState("Copy email");
  const code = useRef<HTMLElement>(null);

  function selectText() {
    if (!code.current) return;
    const range = document.createRange();
    range.selectNodeContents(code.current);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    setLabel("Press ⌘C");
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setLabel("Copied");
      setTimeout(() => setLabel("Copy email"), 1500);
    } catch {
      selectText();
    }
  }

  return (
    <div className="mail rv" style={rv(9)}>
      <code ref={code}>{EMAIL}</code>
      <button className="btn primary" type="button" onClick={copy}>
        {label}
      </button>
    </div>
  );
}
