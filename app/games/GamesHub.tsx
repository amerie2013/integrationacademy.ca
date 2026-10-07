"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Game = { href: string; title: string; tag: string; desc: string; glyph: string; live: boolean };

const FOUNDATIONS: Game[] = [
  { href: "/games/fact-heat", title: "Fact Heat", tag: "Multiplication · 60s", desc: "Cool down the map: every times-table fact starts grey and turns green once you nail it, twice in a row, fast.", glyph: "🔥", live: true },
  { href: "/games/cart-rush", title: "Cart Rush", tag: "Addition · 60s", desc: "Add up prices at a sneaker drop before checkout closes. From sums within 20 up to three-item carts.", glyph: "🛒", live: true },
  { href: "/games/change-up", title: "Change Up", tag: "Subtraction · 60s", desc: "You're on the till — work out the change. Borrowing, big bills, and cents.", glyph: "💵", live: true },
  { href: "/games/split-the-bill", title: "Split the Bill", tag: "Division · 60s", desc: "Share the bill between friends. Division facts, bigger numbers, then remainders.", glyph: "🍕", live: true },
  { href: "/games/sign-flip", title: "Sign Flip", tag: "Integers · 60s", desc: "Add, subtract, multiply and divide positives and negatives — the sign rules that trip everyone up.", glyph: "±", live: true },
];

const CHALLENGES: Game[] = [
  { href: "/games/equation-sprint", title: "Equation Sprint", tag: "Algebra · 60s", desc: "Solve as many linear equations as you can before the clock runs out. Build a streak for bonus points.", glyph: "⚡", live: true },
  { href: "/games/intersection-hunt", title: "Intersection Hunt", tag: "Linear systems · 8 rounds", desc: "Build each line from its slope and y-intercept to match the equations, then click where they cross to solve the system.", glyph: "🎯", live: true },
  { href: "/games/parabola-architect", title: "Parabola Architect", tag: "Quadratics · 90s", desc: "Read a target parabola, then dial in a, h, and k in vertex form until your curve lands on it. Beat the clock.", glyph: "🅿️", live: true },
  { href: "/games/pythagoras-pursuit", title: "Pythagoras Pursuit", tag: "Measurement · 10 rounds", desc: "A right triangle with one side missing — use a² + b² = c² to find it. Whole-number answers, hypotenuse or leg.", glyph: "📐", live: true },
  { href: "/games/zero-hunt", title: "Zero Hunt", tag: "Quadratics · 10 rounds", desc: "Click a parabola's x-intercepts — its zeros. Some touch once, some never cross. Spot 2, 1, or none.", glyph: "🟡", live: true },
  { href: "/games/factor-frenzy", title: "Factor Frenzy", tag: "Quadratics · 60s", desc: "Pick the correct factored form of each trinomial against the clock. Mind the signs and the differences of squares.", glyph: "🧩", live: true },
  { href: "/games/angle-hunt", title: "Angle Hunt", tag: "Geometry · 10 rounds", desc: "Parallel lines cut by a transversal — use corresponding, alternate, and co-interior rules to find the marked angle.", glyph: "∠", live: true },
  { href: "/games/spot-the-outlier", title: "Spot the Outlier", tag: "Data · 10 rounds", desc: "A scatter plot has a clear trend — and one point that breaks it. Click the outlier.", glyph: "📊", live: true },
  { href: "/games/wave-architect", title: "Wave Architect", tag: "Trigonometry · 90s", desc: "Match a target sine wave by setting its amplitude, frequency, and midline in y = a·sin(bx) + c. Beat the clock.", glyph: "🌊", live: true },
  { href: "/games/growth-spurt", title: "Growth Spurt", tag: "Exponentials · 10 rounds", desc: "Exponential growth and decay in the real world — work out the amount after a doubling, tripling, or half-life.", glyph: "🚀", live: true },
  { href: "/games/graph-guess", title: "Graph Guess", tag: "Functions · 10 rounds", desc: "We plot a curve — you pick the equation that made it. Lines, parabolas, roots, and waves.", glyph: "📈", live: true },
  { href: "/games/derivative-duel", title: "Derivative Duel", tag: "Calculus · 8 rounds", desc: "We show a function — you pick its derivative. Power rule, polynomials, and classics like sin, cos, and eˣ.", glyph: "∂", live: true },
];

export function GamesHub() {
  const [tab, setTab] = useState<"foundations" | "challenges">("challenges");

  useEffect(() => {
    try {
      if (new URLSearchParams(window.location.search).get("tab") === "foundations") setTab("foundations");
    } catch {}
  }, []);

  const list = tab === "foundations" ? FOUNDATIONS : CHALLENGES;

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px 28px 64px" }}>
      <div role="tablist" style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        <TabBtn on={tab === "foundations"} onClick={() => setTab("foundations")}>
          Foundations <span style={{ fontSize: 10, fontWeight: 800, background: "#dcfce7", color: "#0d5c30", padding: "2px 7px", borderRadius: 999, marginLeft: 6, letterSpacing: ".04em" }}>NEW</span>
        </TabBtn>
        <TabBtn on={tab === "challenges"} onClick={() => setTab("challenges")}>Grade 9+ challenges</TabBtn>
      </div>

      {tab === "foundations" && (
        <>
          <p style={{ color: "#475569", fontSize: 15.5, lineHeight: 1.6, margin: "0 0 18px", maxWidth: 640 }}>
            Faster arithmetic makes every other topic easier. Each game trains one skill, adjusts to your level, and brings back the questions you miss.
          </p>
          <p style={{ margin: "0 0 14px" }}>
            <Link href="/games/my-stats" style={{ color: "#0d5c30", fontWeight: 800, fontSize: 14.5 }}>See my stats →</Link>
          </p>
          <Link href="/games/skill-check" className="ia-gcard" style={{ ...gcard, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, marginBottom: 20, background: "linear-gradient(135deg,#f0fdf4,#fff)", borderColor: "#9fe7bd" }}>
            <div>
              <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 20, fontWeight: 700, margin: "0 0 4px", color: "#0f172a" }}>Not sure where to start?</h2>
              <p style={{ color: "#475569", fontSize: 14.5, lineHeight: 1.5, margin: 0 }}>Take the 3-minute Skill Check — we&apos;ll set each game to the right level for you.</p>
            </div>
            <span style={{ fontWeight: 800, color: "#0d5c30", whiteSpace: "nowrap" }}>Start →</span>
          </Link>
        </>
      )}

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
        {list.map((g) => (
          <Link key={g.title} href={g.href} className="ia-gcard" style={gcard}>
            <div style={{ fontSize: 44, marginBottom: 10 }}>{g.glyph}</div>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: "0 0 8px", color: "#0f172a" }}>{g.title}</h2>
            <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, fontWeight: 700, color: "#0d5c30", marginBottom: 10 }}>{g.tag}</div>
            <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.55, margin: "0 0 14px" }}>{g.desc}</p>
            <span style={{ fontWeight: 800, color: "#0d5c30" }}>Play →</span>
          </Link>
        ))}
      </div>

      <style>{`.ia-gcard{transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;}.ia-gcard:hover{transform:translateY(-4px);box-shadow:0 18px 44px rgba(13,92,48,.16);border-color:#9fe7bd;}`}</style>
    </div>
  );
}

function TabBtn({ on, onClick, children }: { on: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      role="tab"
      aria-selected={on}
      onClick={onClick}
      style={{ background: on ? "#0d5c30" : "#fff", color: on ? "#fff" : "#334155", border: `1px solid ${on ? "#0d5c30" : "#cbd5e1"}`, borderRadius: 999, padding: "9px 18px", fontWeight: 800, fontSize: 14.5, cursor: "pointer" }}
    >
      {children}
    </button>
  );
}

const gcard: React.CSSProperties = {
  display: "block",
  textDecoration: "none",
  background: "#fff",
  border: "1px solid var(--border)",
  borderRadius: 18,
  padding: 24,
};
