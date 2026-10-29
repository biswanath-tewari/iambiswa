import Image from "next/image";
import hero from "@/assets/biswa-hero.webp";
import { rv } from "@/lib/rv";

const ticker = ["React Native", "Strength training", "Next.js", "Badminton", "Masai Mara", "Swimming", "AI builds", "Long rides"];

export default function Home() {
  return (
    <>
      <div className="hero">
        <div>
          <div className="status rv" style={rv(0)}>
            <i />
            AVP at Kotak Mahindra Bank · Bengaluru
          </div>
          <h1 className="rv" style={rv(1)}>
            Hi, I&apos;m Biswa.
            <br />I{" "}
            <span className="rot">
              <span>ship apps.</span>
              <span>lift heavy.</span>
              <span>chase trails.</span>
            </span>
          </h1>
          <p className="lede rv" style={rv(2)}>
            I&apos;m a software developer with 5+ years in the React ecosystem, building mobile and web apps and using AI to
            ship them fast. Away from the keyboard I&apos;m deep into fitness and the research behind it, and I&apos;m
            usually planning the next trip.
          </p>
          <div className="ctas rv" style={rv(3)}>
            <a className="btn primary" href="#portfolio">See my work</a>
            <a className="btn" href="#hobbies">Life outside code</a>
          </div>
        </div>
        <div className="portrait rv" style={rv(2)}>
          <div className="blob" />
          <figure className="photo">
            <Image
              src={hero}
              alt="Biswa at night by a lake, with a glowing Love Passion Karma sign behind him"
              placeholder="blur"
              priority
              sizes="(max-width: 820px) 280px, 340px"
            />
          </figure>
          <div className="badge b1"><b>5+ yrs</b>React &amp; RN</div>
          <div className="badge b2"><b>Gym</b>most mornings</div>
        </div>
      </div>

      <section>
        <div className="about">
          <div className="rv" style={rv(4)}>
            <span className="label">Work</span>
            <h3>Builder</h3>
            <p>React Native, React and Next.js. I take ideas from design to the App Store and the web.</p>
          </div>
          <div className="rv" style={rv(5)}>
            <span className="label">Method</span>
            <h3>Ships fast</h3>
            <p>AI-assisted workflow: spec, prototype, harden, release. I share the process in public.</p>
          </div>
          <div className="rv" style={rv(6)}>
            <span className="label">Life</span>
            <h3>Fitness nerd</h3>
            <p>Training, nutrition and the studies behind them, plus badminton, swimming, rides and travel.</p>
          </div>
        </div>
      </section>

      <section className="marquee rv" style={rv(7)} aria-hidden="true">
        <div>
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} style={{ display: "contents" }}>
              <span>{t}</span>
              <em>✦</em>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
