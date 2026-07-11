"use client";

import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";
import { STRANDS } from "../../lib/eqao";
import { templateCount } from "../../lib/eqaoGen";

export default function EqaoHome() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />
      <div style={{ maxWidth: 920, margin: "0 auto", padding: "40px 24px" }}>
        <p style={{ color: "#1b7a44", fontWeight: 800, letterSpacing: 0.6, textTransform: "uppercase", fontSize: 13, margin: 0 }}>
          Grade 9 · MTH1W
        </p>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 38, fontWeight: 700, margin: "6px 0 10px" }}>
          EQAO Assessment of Mathematics — Prep
        </h1>
        <p style={{ color: "#475569", fontSize: 17, lineHeight: 1.6, maxWidth: 680 }}>
          Practise the way the real assessment works: figure-rich questions across the five strands,
          with an on-screen calculator and formula sheet — exactly the tools you get on test day.
        </p>

        {/* strand practice */}
        <h2 style={sectionH}>Practise by strand</h2>
        <div style={grid}>
          {STRANDS.map((s) => (
            <Link key={s.id} href={`/eqao/practice/${s.id}`} style={cardLink}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
                <span style={iconBadge}>{s.icon}</span>
                <span style={{ fontWeight: 800, fontSize: 17, color: "#0f172a" }}>{s.label}</span>
              </div>
              <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.5, margin: "0 0 12px" }}>{s.blurb}</p>
              <span style={{ fontSize: 13, fontWeight: 700, color: "#1b7a44" }}>
                {templateCount(s.id)} question types · fresh numbers each try →
              </span>
            </Link>
          ))}
        </div>

        {/* Phase 2 — full simulation */}
        <h2 style={sectionH}>Full simulated assessment</h2>
        <Link href="/eqao/exam" style={{ ...cardLink, background: "linear-gradient(180deg,#f0fbf4,#ffffff)", borderColor: "#bfe3cd" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: 17, color: "#0f172a", marginBottom: 4 }}>
                Two-session adaptive mock test →
              </div>
              <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.5, margin: 0, maxWidth: 560 }}>
                Sessions A &amp; B, two adaptive stages each, a timer, calculator &amp; formula sheet, and a
                Level&nbsp;1–4 score report — a faithful run-through of the real EQAO platform.
              </p>
            </div>
            <span style={{ background: "#1b7a44", color: "#fff", fontWeight: 700, fontSize: 12, padding: "6px 12px", borderRadius: 999, whiteSpace: "nowrap" }}>
              Start mock test
            </span>
          </div>
        </Link>
      </div>
    </main>
  );
}

const sectionH: React.CSSProperties = { fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: "36px 0 14px" };
const grid: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 };
const cardLink: React.CSSProperties = { display: "block", background: "#fff", border: "1px solid #e2e8f0", borderRadius: 16, padding: 18, textDecoration: "none" };
const iconBadge: React.CSSProperties = { display: "inline-flex", alignItems: "center", justifyContent: "center", width: 34, height: 34, borderRadius: 9, background: "#e7f6ec", color: "#1b7a44", fontWeight: 800, fontSize: 17 };
