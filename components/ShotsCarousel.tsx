"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { shots } from "@/lib/data";
import { rv } from "@/lib/rv";

export default function ShotsCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLButtonElement | null)[]>([]);
  const [cur, setCur] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const n = shots.length;

  const go = useCallback(
    (i: number) => {
      const t = track.current;
      const c = cards.current[Math.max(0, Math.min(n - 1, i))];
      if (t && c) t.scrollTo({ left: c.offsetLeft - t.offsetLeft, behavior: "smooth" });
    },
    [n],
  );

  const sync = useCallback(() => {
    const t = track.current;
    if (!t || !t.clientWidth) return;
    let best = 0;
    let bd = Infinity;
    cards.current.forEach((c, i) => {
      if (!c) return;
      const d = Math.abs(c.offsetLeft - t.offsetLeft - t.scrollLeft);
      if (d < bd) {
        bd = d;
        best = i;
      }
    });
    if (t.scrollLeft + t.clientWidth >= t.scrollWidth - 4) best = n - 1;
    setCur(best);
  }, [n]);

  useEffect(() => {
    const t = track.current;
    if (!t) return;
    let timer: ReturnType<typeof setTimeout>;
    const onScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(sync, 60);
    };
    t.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", sync);
    sync();
    return () => {
      t.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", sync);
      clearTimeout(timer);
    };
  }, [sync]);

  // Lightbox keyboard controls
  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") setOpen((o) => ((o ?? 0) + 1) % n);
      if (e.key === "ArrowLeft") setOpen((o) => ((o ?? 0) - 1 + n) % n);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, n]);

  function close() {
    if (open !== null) go(open);
    setOpen(null);
  }

  const shown = open !== null ? shots[open] : null;

  return (
    <div className="car rv" style={rv(12)}>
      <div
        className="shots"
        ref={track}
        tabIndex={0}
        aria-label="Screenshots of feedback"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            go(cur + 1);
          }
          if (e.key === "ArrowLeft") {
            e.preventDefault();
            go(cur - 1);
          }
        }}
      >
        {shots.map((s, i) => (
          <button
            key={s.caption}
            type="button"
            className="shot"
            ref={(el) => {
              cards.current[i] = el;
            }}
            onClick={() => setOpen(i)}
          >
            <span className="frame">
              <Image src={s.img} alt={s.alt} placeholder="blur" sizes="(max-width: 700px) 82vw, 560px" />
            </span>
            <span>{s.caption}</span>
          </button>
        ))}
      </div>

      <div className="carbar">
        <div className="dots">
          {shots.map((s, i) => (
            <button
              key={s.caption}
              type="button"
              aria-label={`Screenshot ${i + 1}`}
              aria-current={i === cur ? "true" : "false"}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <div className="arrows">
          <span>
            {cur + 1} / {n}
          </span>
          <button type="button" className="arw" aria-label="Previous screenshot" disabled={cur === 0} onClick={() => go(cur - 1)}>
            ←
          </button>
          <button type="button" className="arw" aria-label="Next screenshot" disabled={cur === n - 1} onClick={() => go(cur + 1)}>
            →
          </button>
        </div>
      </div>

      {shown &&
        createPortal(
        <div className="lb" onClick={close}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={shown.img.src} alt={shown.alt} onClick={(e) => e.stopPropagation()} />
          <button type="button" aria-label="Close" onClick={close}>
            ×
          </button>
          <button
            type="button"
            className="nav p"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open! - 1 + n) % n);
            }}
          >
            ←
          </button>
          <button
            type="button"
            className="nav n"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((open! + 1) % n);
            }}
          >
            →
          </button>
        </div>,
          document.body,
        )}
    </div>
  );
}
