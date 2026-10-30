import Image from "next/image";
import healthcare from "@/src/assets/healthcare.webp";
import milaap from "@/src/assets/milaap.webp";
import { rv } from "@/lib/rv";

export default function Projects() {
  return (
    <section>
      <div className="head rv" style={rv(3)}>
        <div>
          <span className="label">Selected work</span>
          <h2>Projects</h2>
        </div>
      </div>
      <div className="projects">
        <div className="proj rv" style={rv(4)}>
          <div className="felt" aria-hidden="true">
            <span className="pc">A<i>♠</i></span>
            <span className="pc r">K<i>♥</i></span>
            <span className="pc r">Q<i>♦</i></span>
            <span className="pc">J<i>♣</i></span>
          </div>
          <span className="label">Mobile · Online poker · Baazi Games</span>
          <h3>PokerBaazi / PokerBoss</h3>
          <p>
            PokerBaazi was India&apos;s biggest online poker platform, with 30 lakh+ players. I was the lead on PokerBoss,
            its international version, heading a team of 11 mobile developers. I built the custom theming system with
            gradient borders, production-grade game animations sped up by a custom Babel plugin, and the CI/CD pipeline,
            and set the team&apos;s code-quality standards.
          </p>
          <p className="pnote">PokerBaazi&apos;s Indian service shut down in Aug 2025 after the ban on real-money gaming.</p>
        </div>

        <div className="proj rv" style={rv(5)}>
          <Image
            className="pimg"
            src={healthcare}
            alt="Two phone screens from the healthcare app showing care tasks, vitals, virtual visits and messaging"
            placeholder="blur"
            sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 260px"
          />
          <span className="label">Mobile · Healthcare · iOS &amp; Android</span>
          <h3>Home care for medically complex kids</h3>
          <p>
            A HIPAA-minded app that brings care home for medically complex children and their caretakers: appointment
            booking, medical records, and chat and video calls with providers. I built it from scratch with two other
            developers and owned the video calling and chat, both on Twilio, with calls that stay live when the app is
            minimized or the phone is locked. The app also has Okta sign-in, biometric auth, SSL pinning and an encrypted
            MMKV store. We shipped every planned feature on schedule.
          </p>
          <div className="plinks">
            <a
              href="https://geekyants.com/case-studies/empowering-medically-complex-children-and-their-caretakers-with-accessible-quality-healthcare"
              target="_blank"
              rel="noopener"
            >
              Read the case study ↗
            </a>
          </div>
        </div>

        <div className="proj rv" style={rv(6)}>
          <Image
            className="pimg"
            src={milaap}
            alt="Milaap app icon"
            placeholder="blur"
            sizes="(max-width: 520px) 100vw, (max-width: 900px) 50vw, 260px"
          />
          <span className="label">Mobile · Crowdfunding · Client engagement</span>
          <h3>Milaap</h3>
          <p>
            Milaap is India&apos;s free crowdfunding app for medical and social causes, with 660K+ fundraisers and ₹2,000
            Cr+ raised. I was embedded with their mobile team through GeekyAnts, joined when morale was low, and helped get
            the app moving again. The team threw me a send-off call when the engagement ended.
          </p>
          <div className="plinks">
            <a href="https://milaap.org/" target="_blank" rel="noopener">milaap.org ↗</a>
            <a href="https://apps.apple.com/app/id1571562098" target="_blank" rel="noopener">App Store ↗</a>
          </div>
        </div>

        <div className="proj rv" style={rv(7)}>
          <div className="fb" role="img" aria-label="Finance Bro logo">
            <svg className="fb-bg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <path d="M270 10 C 370 0, 430 90, 400 170 C 380 220, 310 220, 280 190 C 250 160, 200 150, 210 90 C 216 45, 230 14, 270 10 Z" fill="#D9CFFF" />
              <path d="M-50 210 C 0 160, 90 170, 110 230 C 125 290, 50 330, 0 320 C -50 310, -80 250, -50 210 Z" fill="#E7FF9E" />
              <path d="M60 60 q 12 -14 24 0 t 24 0" fill="none" stroke="#B5A6FF" strokeWidth="3" strokeLinecap="round" />
              <circle cx="330" cy="250" r="5" fill="#0E0B1F" />
            </svg>
            <div className="fb-mark">
              <div className="fb-bro">bro</div>
              <span className="fb-pill">finance</span>
              <svg className="fb-star" viewBox="0 0 64 64" aria-hidden="true">
                <path d="M32 2 l 8 22 l 22 8 l -22 8 l -8 22 l -8 -22 l -22 -8 l 22 -8 z" fill="#6B47FF" stroke="#FFFFFF" strokeWidth="4" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <span className="label">Side project · iOS · In progress</span>
          <h3>Finance Bro</h3>
          <p>
            A private, on-device expense tracker for Indian bank SMS. An iOS Shortcuts automation hands each bank SMS to a
            custom App Intent, which parses the amount and merchant, files it under a category, and warns me before I cross
            my monthly budget. Nothing leaves the phone: no bank logins, ads or analytics.
          </p>
          <div className="tags">
            {["Expo", "App Intents", "SQLite", "Swift"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
          <p className="pnote">Repo is private while I build v1.</p>
        </div>
      </div>
    </section>
  );
}
