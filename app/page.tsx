"use client";

import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { FunctionGraph } from "../components/FunctionGraph";
import { Math as Tex } from "../components/Math";

const COURSES = [
  { code: "MPM1D", name: "Grade 9 Principles of Mathematics", tag: "Grade 9" },
  { code: "MPM2D", name: "Grade 10 Principles of Mathematics", tag: "Grade 10" },
  { code: "MCR3U", name: "Functions", tag: "Grade 11" },
  { code: "MHF4U", name: "Advanced Functions", tag: "Grade 12" },
  { code: "MCV4U", name: "Calculus & Vectors", tag: "Grade 12" },
  { code: "MDM4U", name: "Data Management", tag: "Grade 12" },
  { code: "MATH1A", name: "First-Year Calculus", tag: "University" },
  { code: "MATH1B", name: "Linear Algebra", tag: "University" },
];

const CHIPS = [
  { t: "\\int_a^b f(x)\\,dx", top: "12%", left: "4%", d: "0s" },
  { t: "\\frac{dy}{dx}", top: "26%", left: "70%", d: "1.2s" },
  { t: "\\lim_{x\\to 0}", top: "62%", left: "8%", d: "0.6s" },
  { t: "\\sum_{n=1}^{\\infty}", top: "72%", left: "64%", d: "1.8s" },
  { t: "\\sqrt{b^2-4ac}", top: "44%", left: "82%", d: "0.9s" },
  { t: "e^{i\\pi}+1=0", top: "84%", left: "30%", d: "1.5s" },
];

const EXPLORE = [
  {
    href: "/courses",
    badge: "Learn",
    title: "Courses",
    desc: "Interactive lessons, auto-graded quizzes, and assignments — Grade 9 to university.",
    cta: "Browse courses",
    glyph: "∫",
  },
  {
    href: "/articles",
    badge: "Read",
    title: "Articles",
    desc: "Deep-dives, study strategies, and the big ideas behind the math you're learning.",
    cta: "Read articles",
    glyph: "✎",
  },
  {
    href: "/games",
    badge: "Play",
    title: "Math Games",
    desc: "High-school math, gamified. Beat the clock, climb streaks, and have fun getting sharper.",
    cta: "Play now",
    glyph: "◆",
  },
];

export default function HomePage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <style>{CSS}</style>
      <SiteHeader />

      {/* ── HERO (dark, high-tech) ── */}
      <section className="ia-hero">
        <div className="ia-hero-grid" />
        <div className="ia-hero-glow ia-glow-a" />
        <div className="ia-hero-glow ia-glow-b" />
        {CHIPS.map((c, i) => (
          <span key={i} className="ia-chip" style={{ top: c.top, left: c.left, animationDelay: c.d }}>
            <Tex expr={c.t} />
          </span>
        ))}

        <div className="ia-hero-inner">
          <div>
            <span className="ia-eyebrow">
              <span className="ia-dot" /> Grade 9–12 · College · University
            </span>
            <h1 className="ia-title">
              Math <span className="ia-grad">Simplified</span>,
              <br />
              Success <span className="ia-grad">Amplified</span>.
            </h1>
            <p className="ia-sub">
              A next-generation math platform — interactive lessons, live graphs you can
              actually play with, auto-graded quizzes, narrated slideshows, and games that
              make practice fun.
            </p>
            <div className="ia-cta-row">
              <Link href="/login" className="ia-btn ia-btn-primary">Get started →</Link>
              <Link href="/courses" className="ia-btn ia-btn-ghost">Browse courses</Link>
            </div>
            <div className="ia-trust">
              <span>⚡ Live interactive graphs</span>
              <span>🔊 Narrated lessons</span>
              <span>🎮 Math games</span>
            </div>
          </div>

          <div className="ia-hero-art">
            <div className="ia-logo-halo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-mark.png" alt="Integration Academy" width={96} height={76} style={{ display: "block", objectFit: "contain" }} />
            </div>
            <div className="ia-glass">
              <FunctionGraph
                fn={(x, a) => a * Math.sin(x)}
                label="y = a · sin(x)"
                paramName="a"
                paramMin={-3}
                paramMax={3}
                paramInit={1}
                yMin={-4}
                yMax={4}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPLORE: Courses · Articles · Games ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 28px 24px" }}>
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 32, fontWeight: 700, margin: "0 0 6px" }}>
          Three ways to get better at math
        </h2>
        <p style={{ color: "#475569", fontSize: 16, margin: "0 0 28px" }}>
          Learn it, read about it, then play with it.
        </p>
        <div className="ia-explore">
          {EXPLORE.map((e) => (
            <Link key={e.href} href={e.href} className="ia-xcard">
              <div className="ia-xglyph">{e.glyph}</div>
              <span className="ia-xbadge">{e.badge}</span>
              <h3 className="ia-xtitle">{e.title}</h3>
              <p className="ia-xdesc">{e.desc}</p>
              <span className="ia-xcta">{e.cta} →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FORMULA STRIP ── */}
      <section className="ia-formula">
        <div style={{ fontSize: 22 }}>
          <Tex expr="\frac{d}{dx}\left[\int_a^x f(t)\,dt\right] = f(x)" block />
        </div>
        <p style={{ color: "#9fe7bd", fontWeight: 600, marginTop: 10 }}>
          Beautiful math typesetting built in — write LaTeX, students see clean equations.
        </p>
      </section>

      {/* ── COURSES ── */}
      <section id="courses" style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 28px" }}>
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 34, fontWeight: 700, margin: "0 0 8px" }}>
          Courses
        </h2>
        <p style={{ color: "#475569", fontSize: 16, margin: "0 0 32px" }}>
          Aligned to the Ontario curriculum and first-year university math.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
          {COURSES.map((c) => (
            <div key={c.code} className="ia-course">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <span style={{ fontFamily: "JetBrains Mono, monospace", fontWeight: 700, color: "var(--brand-dark)", fontSize: 14 }}>
                  {c.code}
                </span>
                <span style={{ fontSize: 12, fontWeight: 700, color: "var(--brand-dark)", background: "#e7f6ec", padding: "3px 9px", borderRadius: 999 }}>
                  {c.tag}
                </span>
              </div>
              <div style={{ fontWeight: 700, fontSize: 16, color: "#0f172a" }}>{c.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <SiteFooter />
    </main>
  );
}

const CSS = `
.ia-hero{position:relative;overflow:hidden;background:radial-gradient(1200px 600px at 70% -10%,#0d3a23 0%,#07150d 55%,#040d08 100%);color:#e7f6ec;}
.ia-hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(52,210,127,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(52,210,127,.07) 1px,transparent 1px);background-size:42px 42px;mask-image:radial-gradient(900px 500px at 60% 10%,#000 30%,transparent 80%);}
.ia-hero-glow{position:absolute;border-radius:50%;filter:blur(90px);opacity:.5;pointer-events:none;}
.ia-glow-a{width:420px;height:420px;background:#1f8a4c;top:-120px;right:-60px;}
.ia-glow-b{width:360px;height:360px;background:#0d5c30;bottom:-160px;left:-80px;animation:iafloat 9s ease-in-out infinite;}
.ia-chip{position:absolute;color:rgba(159,231,189,.30);font-size:20px;animation:iafloat 7s ease-in-out infinite;pointer-events:none;user-select:none;z-index:1;}
.ia-hero-inner{position:relative;z-index:2;max-width:1100px;margin:0 auto;padding:84px 28px 76px;display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center;}
.ia-eyebrow{display:inline-flex;align-items:center;gap:9px;background:rgba(52,210,127,.10);border:1px solid rgba(52,210,127,.30);color:#9fe7bd;font-weight:700;font-size:13px;padding:6px 14px;border-radius:999px;margin-bottom:22px;}
.ia-dot{width:8px;height:8px;border-radius:50%;background:#34d27f;box-shadow:0 0 0 0 rgba(52,210,127,.7);animation:iapulse 2s infinite;}
.ia-title{font-family:Fraunces,serif;font-size:clamp(38px,5.4vw,60px);line-height:1.04;font-weight:700;margin:0 0 18px;color:#f0fff6;}
.ia-grad{background:linear-gradient(90deg,#34d27f,#7ef0ad);-webkit-background-clip:text;background-clip:text;color:transparent;}
.ia-sub{font-size:18px;color:#bfe9cf;line-height:1.6;margin:0 0 30px;max-width:520px;}
.ia-cta-row{display:flex;gap:14px;flex-wrap:wrap;}
.ia-btn{padding:14px 28px;border-radius:12px;text-decoration:none;font-weight:700;font-size:16px;display:inline-block;transition:transform .15s ease,box-shadow .15s ease;}
.ia-btn-primary{background:linear-gradient(135deg,#1f8a4c,#34d27f);color:#04130a;box-shadow:0 10px 30px rgba(52,210,127,.35);}
.ia-btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 40px rgba(52,210,127,.5);}
.ia-btn-ghost{background:rgba(255,255,255,.06);color:#e7f6ec;border:1px solid rgba(159,231,189,.3);}
.ia-btn-ghost:hover{background:rgba(255,255,255,.12);}
.ia-trust{display:flex;gap:18px;flex-wrap:wrap;margin-top:26px;color:#8fd6ab;font-size:13px;font-weight:600;}
.ia-hero-art{position:relative;}
.ia-logo-halo{position:absolute;top:-64px;left:50%;transform:translateX(-50%);z-index:3;background:#fff;border-radius:18px;padding:12px 16px;box-shadow:0 10px 34px rgba(52,210,127,.45),0 0 0 1px rgba(159,231,189,.4);animation:iafloat 6s ease-in-out infinite;}
.ia-glass{background:rgba(255,255,255,.06);border:1px solid rgba(159,231,189,.22);border-radius:20px;padding:14px;backdrop-filter:blur(8px);box-shadow:0 24px 60px rgba(0,0,0,.45);}
.ia-explore{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;}
.ia-xcard{position:relative;overflow:hidden;display:block;text-decoration:none;color:inherit;background:#fff;border:1px solid var(--border);border-radius:18px;padding:24px;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;}
.ia-xcard:hover{transform:translateY(-4px);box-shadow:0 18px 44px rgba(13,92,48,.16);border-color:#9fe7bd;}
.ia-xglyph{position:absolute;top:-10px;right:6px;font-size:96px;line-height:1;color:#eef7f1;font-family:Fraunces,serif;pointer-events:none;}
.ia-xbadge{position:relative;display:inline-block;font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#0d5c30;background:#e7f6ec;padding:4px 10px;border-radius:999px;}
.ia-xtitle{position:relative;font-family:Fraunces,serif;font-size:24px;font-weight:700;margin:14px 0 6px;}
.ia-xdesc{position:relative;color:#475569;font-size:15px;line-height:1.55;margin:0 0 16px;}
.ia-xcta{position:relative;font-weight:800;color:var(--brand-dark);}
.ia-formula{background:linear-gradient(135deg,#07150d,#0d3a23);color:#e7f6ec;padding:30px 28px;text-align:center;}
.ia-course{background:#fff;border:1px solid var(--border);border-radius:14px;padding:20px;box-shadow:0 1px 3px rgba(15,23,42,.06);transition:transform .15s ease,box-shadow .15s ease;}
.ia-course:hover{transform:translateY(-3px);box-shadow:0 12px 30px rgba(13,92,48,.12);}
@keyframes iafloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-14px);}}
@keyframes iapulse{0%{box-shadow:0 0 0 0 rgba(52,210,127,.7);}70%{box-shadow:0 0 0 9px rgba(52,210,127,0);}100%{box-shadow:0 0 0 0 rgba(52,210,127,0);}}
.ia-logo-halo,.ia-glow-b,.ia-chip{will-change:transform;}
@media (max-width:860px){.ia-hero-inner{grid-template-columns:1fr;gap:60px;}.ia-hero-art{margin-top:40px;}.ia-explore{grid-template-columns:1fr;}.ia-chip{display:none;}}
@media (prefers-reduced-motion:reduce){.ia-chip,.ia-glow-b,.ia-logo-halo,.ia-dot{animation:none;}}
`;
