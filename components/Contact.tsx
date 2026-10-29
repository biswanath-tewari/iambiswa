import Image from "next/image";
import avatar from "@/assets/avatar.webp";
import { links } from "@/lib/data";
import { rv } from "@/lib/rv";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  return (
    <div className="links">
      <Image className="avatar rv" style={rv(0)} src={avatar} alt="Biswa" placeholder="blur" width={112} height={112} />
      <h1 className="rv" style={rv(1)}>Let&apos;s connect</h1>
      <p className="rv" style={rv(2)}>Work, collabs, gym talk or travel tips. Pick a place.</p>
      <div className="lt">
        {links.map((l, i) => (
          <a key={l.name} className="rv" style={rv(3 + i)} href={l.href} target="_blank" rel="noopener">
            <span className="g">{l.glyph}</span>
            <span>
              <b>{l.name}</b>
              <small>{l.detail}</small>
            </span>
            <span className="arr">→</span>
          </a>
        ))}
      </div>
      <CopyEmail />
    </div>
  );
}
