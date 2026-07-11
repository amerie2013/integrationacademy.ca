import Link from "next/link";
import { SiteHeader } from "../../components/SiteHeader";

export const metadata = {
  title: "Math Games — Integration Academy",
  description: "High-school math, gamified. Beat the clock, climb streaks, and have fun getting sharper.",
};

const GAMES = [
  {
    href: "/games/equation-sprint",
    title: "Equation Sprint",
    tag: "Algebra · 60s",
    desc: "Solve as many linear equations as you can before the clock runs out. Build a streak for bonus points.",
    glyph: "⚡",
    live: true,
  },
  {
    href: "/games/intersection-hunt",
    title: "Intersection Hunt",
    tag: "Linear systems · 8 rounds",
    desc: "Build each line from its slope and y-intercept to match the equations, then click where they cross to solve the system.",
    glyph: "🎯",
    live: true,
  },
  {
    href: "/games/parabola-architect",
    title: "Parabola Architect",
    tag: "Quadratics · 90s",
    desc: "Read a target parabola, then dial in a, h, and k in vertex form until your curve lands on it. Beat the clock.",
    glyph: "🅿️",
    live: true,
  },
  {
    href: "/games/pythagoras-pursuit",
    title: "Pythagoras Pursuit",
    tag: "Measurement · 10 rounds",
    desc: "A right triangle with one side missing — use a² + b² = c² to find it. Whole-number answers, hypotenuse or leg.",
    glyph: "📐",
    live: true,
  },
  {
    href: "/games/zero-hunt",
    title: "Zero Hunt",
    tag: "Quadratics · 10 rounds",
    desc: "Click a parabola's x-intercepts — its zeros. Some touch once, some never cross. Spot 2, 1, or none.",
    glyph: "🟡",
    live: true,
  },
  {
    href: "/games/factor-frenzy",
    title: "Factor Frenzy",
    tag: "Quadratics · 60s",
    desc: "Pick the correct factored form of each trinomial against the clock. Mind the signs and the differences of squares.",
    glyph: "🧩",
    live: true,
  },
  {
    href: "/games/angle-hunt",
    title: "Angle Hunt",
    tag: "Geometry · 10 rounds",
    desc: "Parallel lines cut by a transversal — use corresponding, alternate, and co-interior rules to find the marked angle.",
    glyph: "∠",
    live: true,
  },
  {
    href: "/games/spot-the-outlier",
    title: "Spot the Outlier",
    tag: "Data · 10 rounds",
    desc: "A scatter plot has a clear trend — and one point that breaks it. Click the outlier.",
    glyph: "📊",
    live: true,
  },
  {
    href: "/games/wave-architect",
    title: "Wave Architect",
    tag: "Trigonometry · 90s",
    desc: "Match a target sine wave by setting its amplitude, frequency, and midline in y = a·sin(bx) + c. Beat the clock.",
    glyph: "🌊",
    live: true,
  },
  {
    href: "/games/growth-spurt",
    title: "Growth Spurt",
    tag: "Exponentials · 10 rounds",
    desc: "Exponential growth and decay in the real world — work out the amount after a doubling, tripling, or half-life.",
    glyph: "🚀",
    live: true,
  },
  {
    href: "/games/graph-guess",
    title: "Graph Guess",
    tag: "Functions · 10 rounds",
    desc: "We plot a curve — you pick the equation that made it. Lines, parabolas, roots, and waves.",
    glyph: "📈",
    live: true,
  },
  {
    href: "/games/derivative-duel",
    title: "Derivative Duel",
    tag: "Calculus · 8 rounds",
    desc: "We show a function — you pick its derivative. Power rule, polynomials, and classics like sin, cos, and eˣ.",
    glyph: "∂",
    live: true,
  },
];

export default function GamesPage() {
  return (
    <main style={{ minHeight: "100vh" }}>
      <SiteHeader />

      <section style={{ position: "relative", overflow: "hidden", background: "radial-gradient(900px 420px at 75% -20%,#0d3a23,#07150d)", color: "#e7f6ec" }}>
        <div style={{ maxWidth: 960, margin: "0 auto", padding: "56px 28px 48px" }}>
          <span style={{ display: "inline-block", fontSize: 12, fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase", color: "#9fe7bd", background: "rgba(52,210,127,.12)", border: "1px solid rgba(52,210,127,.3)", padding: "5px 12px", borderRadius: 999 }}>
            Play
          </span>
          <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 42, fontWeight: 700, margin: "14px 0 10px", color: "#f0fff6" }}>
            Math Games
          </h1>
          <p style={{ color: "#bfe9cf", fontSize: 17, lineHeight: 1.6, margin: 0, maxWidth: 600 }}>
            Practice that doesn't feel like practice. Quick, replayable challenges built for
            high-school math — score points, chase streaks, beat your best.
          </p>
        </div>
      </section>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: "40px 28px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
          {GAMES.map((g) => {
            const inner = (
              <>
                <div style={{ fontSize: 44, marginBottom: 10 }}>{g.glyph}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <h2 style={{ fontFamily: "Fraunces, serif", fontSize: 22, fontWeight: 700, margin: 0, color: "#0f172a" }}>{g.title}</h2>
                  {!g.live && <span style={{ fontSize: 11, fontWeight: 800, color: "#9a5b00", background: "#fff7ed", padding: "2px 8px", borderRadius: 999 }}>SOON</span>}
                </div>
                <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 12, fontWeight: 700, color: "#0d5c30", marginBottom: 10 }}>{g.tag}</div>
                <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.55, margin: "0 0 14px" }}>{g.desc}</p>
                {g.live && <span style={{ fontWeight: 800, color: "#0d5c30" }}>Play →</span>}
              </>
            );
            return g.live ? (
              <Link key={g.title} href={g.href} className="ia-gcard" style={gcard}>{inner}</Link>
            ) : (
              <div key={g.title} style={{ ...gcard, opacity: 0.7, cursor: "default" }}>{inner}</div>
            );
          })}
        </div>
      </div>

      <style>{`.ia-gcard{transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease;}.ia-gcard:hover{transform:translateY(-4px);box-shadow:0 18px 44px rgba(13,92,48,.16);border-color:#9fe7bd;}`}</style>
    </main>
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
