import Image from "next/image";
import { dailyStack, hobbies, researchNotes } from "@/lib/data";
import { rv } from "@/lib/rv";
import BeforeAfter from "./components/BeforeAfter";

export default function Hobbies() {
  return (
    <>
      <section>
        <div className="head rv" style={rv(0)}>
          <div>
            <span className="label" style={{ color: "var(--pulse)" }}>The highlight</span>
            <h2>Fitness lab</h2>
          </div>
        </div>
        <div className="lab">
          <BeforeAfter />
          <div>
            <p className="rv" style={rv(2, { fontSize: 18, color: "var(--muted)" })}>
              Drag the slider to see the change. I treat training like engineering: track the inputs, read the research,
              adjust, repeat.
            </p>
            <div className="stats rv" style={rv(3)}>
              <div><strong>−23 kg</strong><span>weight lost</span></div>
              <div><strong>1 yr</strong><span>timeline</span></div>
              <div><strong>15%</strong><span>body fat now</span></div>
            </div>
            <span className="label rv" style={rv(4)}>Research notes · from my training log</span>
            <div className="notes" style={{ marginTop: 10 }}>
              {researchNotes.map((n, i) => (
                <div key={n.title} className="note rv" style={rv(5 + i)}>
                  <b>{String(i + 1).padStart(2, "0")}</b>
                  <p>
                    {n.title}
                    <small>{n.body}</small>
                  </p>
                </div>
              ))}
            </div>
            <div className="stack-daily rv" style={rv(9)}>
              <span className="label">My daily stack</span>
              <ul>
                {dailyStack.map((s) => (
                  <li key={s.name}>
                    <b>{s.name}</b>
                    <span>{s.detail}</span>
                  </li>
                ))}
              </ul>
              <small>Plus Vitamin D once a week. Not advice, just what works for me.</small>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="head rv" style={rv(9)}>
          <div>
            <span className="label">Beyond the gym</span>
            <h2>What keeps me moving</h2>
          </div>
        </div>
        <div className="hob">
          {hobbies.map((h, i) => (
            <div key={h.title} className="card rv" style={rv(10 + i)}>
              <Image className="cimg" src={h.img} alt={h.alt} placeholder="blur" sizes="(max-width: 900px) 50vw, 250px" />
              <span className="icon">{h.icon}</span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </div>
          ))}
        </div>
        <div className="also rv" style={rv(14)}>
          <span className="label">Also into</span>
          {["F1", "Anime", "Watches", "Fragrances"].map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>
      </section>
    </>
  );
}
