import { experience, quotes } from "@/lib/data";
import { rv } from "@/lib/rv";
import Projects from "./components/Projects";
import ShotsCarousel from "./components/ShotsCarousel";

export default function Portfolio() {
  return (
    <>
      <section>
        <div className="head rv" style={rv(0)}>
          <div>
            <span className="label">Career</span>
            <h2>Experience</h2>
          </div>
          <span className="chip">5+ years · Bengaluru</span>
        </div>
        <div className="timeline">
          {experience.map((job, i) => (
            <article key={job.title + job.dates} className="job rv" style={rv(i + 1)}>
              <div className="row">
                <h3>{job.title}</h3>
                <time>{job.dates}</time>
              </div>
              {job.sub && <div className="sub">{job.sub}</div>}
              <div className="co">{job.company}</div>
              <ul>
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="tags">
                {job.tags.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Projects />

      <section>
        <div className="head rv" style={rv(7)}>
          <div>
            <span className="label">Kind words</span>
            <h2>What people say</h2>
          </div>
        </div>
        <div className="quotes">
          {quotes.map((q, i) => (
            <blockquote key={q.name} className="rv" style={rv(8 + i)}>
              <p>{q.text}</p>
              <footer>
                <b>{q.name}</b>
                {q.role}
              </footer>
            </blockquote>
          ))}
        </div>
        <p className="rv" style={rv(11, { margin: "32px 0 16px", color: "var(--muted)" })}>
          <span className="label">The receipts</span> · swipe or use the arrows, tap to enlarge
        </p>
        <ShotsCarousel />
      </section>
    </>
  );
}
