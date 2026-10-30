import type { StaticImageData } from "next/image";

import sergeyLinkedin from "@/src/assets/shots/sergey-linkedin.webp";
import saurabhLinkedin from "@/src/assets/shots/saurabh-linkedin.webp";
import milaapSendoff from "@/src/assets/shots/milaap-sendoff.webp";
import metrogharComplete from "@/src/assets/shots/metroghar-complete.webp";
import gluestackShoutout from "@/src/assets/shots/gluestack-shoutout.webp";
import kudosYashraj from "@/src/assets/shots/kudos-yashraj.webp";
import kudosSarulatha from "@/src/assets/shots/kudos-sarulatha.webp";
import kudosPokerboss from "@/src/assets/shots/kudos-pokerboss.webp";
import sergeyCake from "@/src/assets/shots/sergey-cake.webp";
import kenya from "@/src/assets/kenya.webp";
import bike from "@/src/assets/bike.webp";
import badminton from "@/src/assets/badminton.webp";
import swim from "@/src/assets/swim.webp";

export const EMAIL = "iambiswanathtewari@gmail.com";

export type Job = {
  title: string;
  sub?: string;
  dates: string;
  company: string;
  points: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    title: "Associate Vice President",
    sub: "SDE 2",
    dates: "Apr 2025 – Present",
    company: "Kotak Mahindra Bank · Full-time · Hybrid",
    points: [
      "Building Kotak811, the world's 3rd most downloaded banking app, for 1 crore (10M) monthly active users",
      "Own the Fixed Deposit (FD) module end to end",
      "My work on FD goals drove a 10% increase in annual FD bookings",
    ],
    tags: ["React Native", "React.js", "Fintech", "10M MAU"],
  },
  {
    title: "Senior Software Engineer I",
    dates: "Jul 2023 – Apr 2025",
    company: "GeekyAnts · Remote",
    points: [
      "Team lead for 11 mobile developers building PokerBoss, the international version of Baazi Games' PokerBaazi",
      "Set up CI/CD with GitHub Actions",
      "Replaced react-native-asset with an in-house asset pipeline built for the project",
      "Wrote a custom Babel plugin that sped up animations",
      "Built a custom theming system with gradient borders and layered backgrounds",
      "Wrote the team's coding conventions, introduced gpt-lint, and owned code review",
    ],
    tags: ["React Native", "TypeScript", "MobX", "Reanimated", "NativeBase", "GitHub Actions"],
  },
  {
    title: "Software Engineer III",
    dates: "Jul 2022 – Jun 2023",
    company: "GeekyAnts · Bengaluru",
    points: [
      "Built the UI for Metroghar, four apps in one, on a tight timeline",
      "Built the video calling and chat system with Twilio for a healthcare app for medically complex children, developed from scratch by a team of three",
      "Early adopter of gluestack-ui in beta, feeding fixes back to the library team",
    ],
    tags: ["React Native", "gluestack-ui"],
  },
  {
    title: "Software Engineer",
    dates: "Oct 2021 – Jul 2022",
    company: "GeekyAnts · Bengaluru",
    points: ["Embedded with Milaap's team to get their app moving again"],
    tags: ["React Native", "React.js"],
  },
  {
    title: "Software Engineer · Apprentice",
    dates: "Jul 2021 – Oct 2021",
    company: "GeekyAnts · Bengaluru",
    points: [
      "Joined as a fresher and worked on Beanstox, the investing app from Kevin O'Leary (Mr. Wonderful of Shark Tank)",
    ],
    tags: ["React Native", "React.js"],
  },
];

export const quotes = [
  {
    text: "Although his formal role was senior developer, he naturally became the team's technical lead.",
    name: "Sergey Morkovkin",
    role: "System Architect, Baazi Games · managed Biswa",
  },
  {
    text: "Biswanath takes ownership of his work and consistently delivers solid results.",
    name: "Saurabh Sahu",
    role: "CTO, GeekyAnts",
  },
  {
    text: "Since Biswa joined their team, they all were motivated to work.",
    name: "GeekyAnts Slack",
    role: "relaying feedback from Milaap's product manager",
  },
];

export type Shot = { img: StaticImageData; alt: string; caption: string };

export const shots: Shot[] = [
  { img: sergeyLinkedin, alt: "LinkedIn recommendation from Sergey Morkovkin", caption: "LinkedIn · Sergey Morkovkin" },
  { img: saurabhLinkedin, alt: "LinkedIn recommendation from Saurabh Sahu", caption: "LinkedIn · Saurabh Sahu" },
  { img: milaapSendoff, alt: "Slack shout-out about the Milaap team's send-off for Biswanath Tewari", caption: "Slack · Milaap send-off" },
  { img: metrogharComplete, alt: "Slack announcement that Metroghar was completed with zero bugs, with client email", caption: "Slack · Metroghar delivered" },
  { img: gluestackShoutout, alt: "Slack shout-out for using gluestack-ui alpha on Metroghar", caption: "Slack · gluestack-ui shout-out" },
  { img: kudosYashraj, alt: "Kudos from Yashraj Anand for team leadership", caption: "Kudos · team lead" },
  { img: kudosSarulatha, alt: "Kudos from Sarulatha for technical decisions", caption: "Kudos · technical decisions" },
  { img: kudosPokerboss, alt: "Kudos for guidance on the PokerBoss project", caption: "Kudos · PokerBoss" },
  { img: sergeyCake, alt: "Sergey on Slack: I owe you a cake", caption: 'Slack · "I owe you a cake"' },
];

export const researchNotes = [
  {
    title: "180 g of protein a day, anchored to total bodyweight",
    body: "About 2 g/kg. Get Shredded 4.0 says 1.6–1.8 g/kg of lean mass, but newer evidence favours more when you're cutting and building at once.",
  },
  {
    title: "Carbs aren't the enemy. The deficit is what counts.",
    body: "A modest 300–500 kcal below maintenance, with rice and bananas timed around training. If fat loss stalls, I add calories back slowly instead of cutting harder.",
  },
  {
    title: "Heavy week, volume week",
    body: "A 5-day split that alternates 4–6 rep and 8–10 rep weeks to hit both fast- and slow-twitch fibres, with a slow 3-second negative on every lift.",
  },
  {
    title: "Supplements are the last 5%",
    body: "Creatine and whey do the heavy lifting. Fat burners, pre-workouts and pricey isolates don't earn their cost.",
  },
];

export const dailyStack = [
  { name: "Creatine", detail: "3–5 g · any time" },
  { name: "Whey protein", detail: "1–1.5 scoops · post-workout" },
  { name: "Omega-3", detail: "fish oil · with dinner" },
  { name: "Vitamin B12", detail: "with dinner" },
  { name: "Magnesium", detail: "The Stack · at night · sleep & recovery" },
  { name: "Daily Gut Balance", detail: "The Stack · with probiotic · gut health" },
  { name: "Keraglow Men", detail: "after dinner · hair, skin & nails" },
  { name: "Glycine", detail: "at night · sleep" },
];

export const hobbies = [
  { img: kenya, alt: "Biswanath Tewari beside a small safari plane on an airstrip in the Masai Mara, Kenya", icon: "✈", title: "Vacations", text: "Latest: a Kenya trip with friends, with game drives in the Masai Mara." },
  { img: bike, alt: "Biswanath Tewari's motorcycle parked on a country road outside Bengaluru under a stormy sky", icon: "◎", title: "Bike", text: "Weekend rides out of Bengaluru on my Harley, chasing empty roads and moody skies." },
  { img: badminton, alt: "A yellow shuttlecock resting on a badminton racket on an indoor court", icon: "⟋", title: "Badminton", text: "Fast games, quick reflexes, good cardio." },
  { img: swim, alt: "Biswanath Tewari in an outdoor pool, arms out, splashing water", icon: "≈", title: "Swimming", text: "Low-impact conditioning and recovery days." },
];

export const links = [
  { href: "https://www.linkedin.com/in/biswanathtewari/", glyph: "in", name: "LinkedIn", detail: "/in/biswanathtewari · career & recommendations" },
  { href: "https://www.instagram.com/iambiswaaaa/", glyph: "IG", name: "Instagram", detail: "@iambiswaaaa · fitness & travel" },
  { href: "https://x.com/iambiswaaa", glyph: "X", name: "X", detail: "@iambiswaaa · dev notes & quick thoughts" },
  { href: "https://github.com/biswanath-tewari", glyph: "{ }", name: "GitHub", detail: "@biswanath-tewari · code & side projects" },
  { href: "https://flowcv.com/resume/c2jm2dvdqw", glyph: "CV", name: "Résumé", detail: "Experience, skills & education" },
];
