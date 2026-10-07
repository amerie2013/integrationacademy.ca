import { SiteHeader } from "../../components/SiteHeader";
import { GamesHub } from "./GamesHub";

export const metadata = {
  title: "Math Games — Integration Academy",
  description: "High-school math, gamified. Sharpen your arithmetic basics, then take on Grade 9+ challenges.",
};

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
            Practice that doesn't feel like practice. Quick, replayable challenges — build your
            arithmetic basics, then take on high-school math. Score points, chase streaks, beat your best.
          </p>
        </div>
      </section>

      <GamesHub />
    </main>
  );
}
