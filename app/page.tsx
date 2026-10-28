"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { FunctionGraph } from "../components/FunctionGraph";
import { Math as Tex } from "../components/Math";
import { PLAN_PRICES, TAX_LABEL, TRIAL_DAYS } from "../lib/subscription";

type Course = { id: string; code: string; name: string; tag: string };

// Published courses, grouped so a Grade 9 family isn't greeted by "university" first.
const COURSE_GROUPS: { key: string; label: string; sub: string; courses: Course[] }[] = [
  {
    key: "ontario",
    label: "Ontario High School (Grades 9–12)",
    sub: "Every course follows the Ontario curriculum, unit by unit.",
    courses: [
      { id: "fef1dc8e-c6f7-4632-baa1-7eb940130557", code: "MTH1W", name: "Grade 9 Mathematics", tag: "Grade 9" },
      { id: "86e723b3-29a3-4df7-8575-ce33cf9a1930", code: "MTH1W", name: "Mathématiques, 9e année", tag: "Grade 9 · Français" },
      { id: "ff375ff3-820d-4b59-9822-4b615aa0df97", code: "MPM2D", name: "Principles of Mathematics", tag: "Grade 10" },
      { id: "8a413a21-8f80-49ff-9bde-e76e61eff33b", code: "MFM2P", name: "Foundations of Mathematics", tag: "Grade 10" },
      { id: "4819065e-1703-478f-adb7-8226825be6aa", code: "MCR3U", name: "Functions", tag: "Grade 11" },
      { id: "9b5d2c58-858e-4609-a021-005c72bde403", code: "MCF3M", name: "Functions and Applications", tag: "Grade 11" },
      { id: "1b2e9821-f357-4b7d-b865-976693727d9a", code: "MBF3C", name: "Foundations for College Mathematics", tag: "Grade 11" },
      { id: "7d3e0ca4-1c49-47d4-84f2-9c41c09dd49d", code: "MHF4U", name: "Advanced Functions", tag: "Grade 12" },
      { id: "26a9a4f5-7b5f-495d-901e-6359746e199b", code: "MHF4U", name: "Fonctions avancées", tag: "Grade 12 · Français" },
      { id: "88ea0686-581a-4236-b4df-8059c8f1d214", code: "MCV4U", name: "Calculus and Vectors", tag: "Grade 12" },
      { id: "5906c8e7-bea7-4501-9ef6-6378d6fb3350", code: "MDM4U", name: "Mathematics of Data Management", tag: "Grade 12" },
      { id: "40a531ee-d2e5-4b0c-a191-2ea59b271111", code: "MAP4C", name: "Foundations for College Mathematics", tag: "Grade 12" },
      { id: "4fffca58-e9f9-4918-9e5f-3849cf224f3b", code: "MCT4C", name: "Mathematics for College Technology", tag: "Grade 12" },
    ],
  },
  {
    key: "advanced",
    label: "University & Advanced",
    sub: "Exam prep for AP and IB, and certification prep for future math teachers.",
    courses: [
      { id: "7032f89e-430d-4ab4-b3f7-7b457c8352b4", code: "APCALCAB", name: "AP® Calculus AB Exam Preparation", tag: "AP" },
      { id: "f635431f-3244-45c3-9c4a-39a33fd209b9", code: "IBAASL", name: "Mathematics: Analysis & Approaches SL", tag: "IB Diploma" },
      { id: "8a8d0e91-8390-4032-8eca-f51b2b2c200b", code: "FTCE", name: "FTCE Mathematics 6–12", tag: "Certification" },
    ],
  },
  {
    key: "florida",
    label: "Florida (B.E.S.T.)",
    sub: "Courses built to Florida's B.E.S.T. standards.",
    courses: [
      { id: "1a583d2f-864b-418f-84db-73568f6a0720", code: "ALG1", name: "Algebra 1", tag: "Grade 9" },
      { id: "0203cf68-41b1-4912-938a-8ba0cf7a4081", code: "GEO1", name: "Geometry", tag: "Grade 10" },
    ],
  },
];

const CHIPS = [
  { t: "\\int_a^b f(x)\\,dx", top: "12%", left: "4%", d: "0s" },
  { t: "\\frac{dy}{dx}", top: "26%", left: "70%", d: "1.2s" },
  { t: "\\lim_{x\\to 0}", top: "62%", left: "8%", d: "0.6s" },
  { t: "\\sum_{n=1}^{\\infty}", top: "72%", left: "64%", d: "1.8s" },
  { t: "\\sqrt{b^2-4ac}", top: "44%", left: "82%", d: "0.9s" },
  { t: "e^{i\\pi}+1=0", top: "84%", left: "30%", d: "1.5s" },
];

// Add real student/parent quotes here (with permission). The section stays hidden while empty.
const TESTIMONIALS: { quote: string; who: string }[] = [];

export default function HomePage() {
  const [group, setGroup] = useState(COURSE_GROUPS[0].key);

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
              <span className="ia-dot" /> Ontario Grades 9–12 · AP · IB
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
              <Link href="/pricing" className="ia-btn ia-btn-primary">Start Free Trial →</Link>
              <a href="#courses" className="ia-btn ia-btn-ghost">Browse Courses</a>
            </div>
            <div className="ia-trust">
              <span>{TRIAL_DAYS}-day free trial</span>
              <span>First topic of every course free</span>
              <span>Cancel anytime</span>
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

      {/* ── COURSES ── */}
      <section id="courses" style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 28px 40px", scrollMarginTop: 80 }}>
        <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 34, fontWeight: 700, margin: "0 0 8px" }}>
          Courses
        </h2>
        <p style={{ color: "#475569", fontSize: 16, margin: "0 0 24px" }}>
          Lessons, worksheets, practice questions, and assignments for every unit.
        </p>
        <div className="ia-tabs" role="tablist" aria-label="Course groups">
          {COURSE_GROUPS.map((g) => (
            <button
              key={g.key}
              role="tab"
              id={`tab-${g.key}`}
              aria-selected={group === g.key}
              aria-controls={`panel-${g.key}`}
              className={`ia-tab${group === g.key ? " ia-tab-on" : ""}`}
              onClick={() => setGroup(g.key)}
            >
              {g.label}
            </button>
          ))}
        </div>
        {COURSE_GROUPS.map((g) => (
          <div key={g.key} role="tabpanel" id={`panel-${g.key}`} aria-labelledby={`tab-${g.key}`} hidden={group !== g.key}>
            <p style={{ color: "#64748b", fontSize: 14.5, margin: "0 0 18px" }}>{g.sub}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 16 }}>
              {g.courses.map((c) => (
                <Link key={c.id} href={`/courses/${c.id}`} className="ia-course">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8, marginBottom: 10 }}>
                    <span style={{ fontFamily: "JetBrains Mono, monospace", fontWeight: 700, color: "var(--brand-dark)", fontSize: 14 }}>
                      {c.code}
                    </span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "var(--brand-dark)", background: "#e7f6ec", padding: "3px 9px", borderRadius: 999, whiteSpace: "nowrap" }}>
                      {c.tag}
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "#0f172a" }}>{c.name}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* ── TRUST: instructor + testimonials ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 28px 56px" }}>
        <div className="ia-about">
          <div className="ia-about-mark">PhD</div>
          <div>
            <span className="ia-xbadge">About the instructor</span>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 700, margin: "12px 0 8px", color: "#f0fff6" }}>
              Built by a PhD in Mathematics
            </h2>
            <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: "#bfe9cf", maxWidth: 680 }}>
              Built by a PhD in Mathematics, designed to align perfectly with the Ontario curriculum.
              Every lesson, worksheet, and assignment is written and checked by a mathematician.
            </p>
          </div>
        </div>
        {TESTIMONIALS.length > 0 && (
          <div className="ia-quotes">
            {TESTIMONIALS.map((t) => (
              <figure key={t.who} className="ia-quote">
                <blockquote style={{ margin: 0, fontFamily: "Fraunces, serif", fontSize: 18, lineHeight: 1.5, color: "#0f172a" }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption style={{ marginTop: 12, fontSize: 14, fontWeight: 700, color: "#64748b" }}>{t.who}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ maxWidth: 1100, margin: "0 auto", padding: "8px 28px 72px" }}>
        <div className="ia-price">
          <div style={{ maxWidth: 560 }}>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 30, fontWeight: 700, margin: "0 0 10px" }}>
              Start with a {TRIAL_DAYS}-day free trial
            </h2>
            <p style={{ color: "#334155", fontSize: 16.5, lineHeight: 1.6, margin: "0 0 10px" }}>
              Only {PLAN_PRICES.student_monthly.price}/month for one course after your trial, or{" "}
              {PLAN_PRICES.allaccess_monthly.price}/month for every course. Cancel anytime.
            </p>
            <p style={{ color: "#0d5c30", fontSize: 15, fontWeight: 700, margin: "0 0 22px" }}>
              Not ready yet? The first topic of every course is free with an account — no credit card required.
            </p>
            <div className="ia-cta-row">
              <Link href="/pricing" className="ia-btn ia-btn-primary">Start Free Trial →</Link>
              <Link href="/login?mode=signup" className="ia-btn ia-btn-light">Create a free account</Link>
            </div>
          </div>
          <div className="ia-plans">
            {([
              ["One course", PLAN_PRICES.student_monthly],
              ["All-access", PLAN_PRICES.allaccess_monthly],
              ["School-year pass", PLAN_PRICES.student_annual],
            ] as const).map(([name, p]) => (
              <Link key={name} href="/pricing" className="ia-plan">
                <span style={{ fontWeight: 700, color: "#334155" }}>{name}</span>
                <span>
                  <span style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 700, color: "#0f172a" }}>{p.price}</span>
                  <span style={{ color: "#64748b", fontWeight: 600, fontSize: 14 }}>{p.per}</span>
                </span>
              </Link>
            ))}
            <div style={{ color: "#94a3b8", fontSize: 12.5, fontWeight: 600, textAlign: "right" }}>
              CAD {TAX_LABEL} · <Link href="/pricing" style={{ color: "var(--brand-dark)" }}>All plans →</Link>
            </div>
          </div>
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
.ia-course{display:block;text-decoration:none;color:inherit;background:#fff;border:1px solid var(--border);border-radius:14px;padding:20px;box-shadow:0 1px 3px rgba(15,23,42,.06);transition:transform .15s ease,box-shadow .15s ease;}
.ia-course:hover{transform:translateY(-3px);box-shadow:0 12px 30px rgba(13,92,48,.12);}
.ia-tabs{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:18px;border-bottom:1px solid var(--border);}
.ia-tab{background:none;border:none;border-bottom:3px solid transparent;margin-bottom:-1px;padding:10px 14px;font:inherit;font-weight:700;font-size:15px;color:#64748b;cursor:pointer;}
.ia-tab:hover{color:#0f172a;}
.ia-tab-on{color:var(--brand-dark);border-bottom-color:#1f8a4c;}
.ia-about{display:flex;gap:28px;align-items:center;background:linear-gradient(135deg,#07150d,#0d3a23);border-radius:20px;padding:32px;}
.ia-about-mark{flex:none;width:96px;height:96px;border-radius:50%;display:grid;place-items:center;font-family:Fraunces,serif;font-size:30px;font-weight:700;color:#04130a;background:linear-gradient(135deg,#1f8a4c,#34d27f);box-shadow:0 10px 30px rgba(52,210,127,.35);}
.ia-xbadge{display:inline-block;font-size:12px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#9fe7bd;background:rgba(52,210,127,.12);border:1px solid rgba(52,210,127,.3);padding:4px 10px;border-radius:999px;}
.ia-quotes{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:18px;margin-top:18px;}
.ia-quote{margin:0;background:#fff;border:1px solid var(--border);border-radius:16px;padding:22px;}
.ia-price{display:grid;grid-template-columns:1.2fr .8fr;gap:36px;align-items:center;background:#f3faf6;border:1px solid #bfe3cd;border-radius:20px;padding:36px;}
.ia-btn-light{background:#fff;color:#0f172a;border:1px solid #cbd5e1;}
.ia-btn-light:hover{border-color:#1f8a4c;}
.ia-plans{display:flex;flex-direction:column;gap:10px;}
.ia-plan{display:flex;justify-content:space-between;align-items:baseline;gap:12px;text-decoration:none;background:#fff;border:1px solid var(--border);border-radius:12px;padding:14px 18px;transition:border-color .15s ease;}
.ia-plan:hover{border-color:#1f8a4c;}
@keyframes iafloat{0%,100%{transform:translateY(0);}50%{transform:translateY(-14px);}}
@keyframes iapulse{0%{box-shadow:0 0 0 0 rgba(52,210,127,.7);}70%{box-shadow:0 0 0 9px rgba(52,210,127,0);}100%{box-shadow:0 0 0 0 rgba(52,210,127,0);}}
.ia-logo-halo,.ia-glow-b,.ia-chip{will-change:transform;}
@media (max-width:860px){.ia-hero-inner{grid-template-columns:1fr;gap:60px;}.ia-hero-art{margin-top:40px;}.ia-price{grid-template-columns:1fr;padding:24px;}.ia-about{flex-direction:column;align-items:flex-start;padding:24px;}.ia-chip{display:none;}}
@media (prefers-reduced-motion:reduce){.ia-chip,.ia-glow-b,.ia-logo-halo,.ia-dot{animation:none;}}
`;
