"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import before from "@/src/assets/before.webp";
import after from "@/src/assets/after.webp";
import { rv } from "@/lib/rv";

export default function BeforeAfter() {
  const [x, setX] = useState(50);
  return (
    <div className="ba rv" style={rv(1, { ["--x" as string]: `${x}%` } as CSSProperties)}>
      <div className="side before">
        <Image src={before} alt="Biswa before his transformation, mirror selfie" placeholder="blur" sizes="(max-width: 820px) 100vw, 520px" />
      </div>
      <div className="side after">
        <Image src={after} alt="Biswa after his transformation, in a pool" placeholder="blur" sizes="(max-width: 820px) 100vw, 520px" />
      </div>
      <span className="tagL">Before</span>
      <span className="tagR">After</span>
      <div className="bar" />
      <input
        type="range"
        min={0}
        max={100}
        value={x}
        onChange={(e) => setX(Number(e.target.value))}
        aria-label="Drag to compare before and after"
      />
    </div>
  );
}
