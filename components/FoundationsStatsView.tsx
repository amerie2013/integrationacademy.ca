"use client";

import { useMemo } from "react";
import Link from "next/link";
import { SiteHeader } from "./SiteHeader";
import { FOUNDATION_GAMES, summarize, type Attempt } from "../lib/foundationsStats";

export function FoundationsStatsView({ loading, signedIn, attempts }: { loading: boolean; signedIn: boolean; attempts: Attempt[] }) {
  const s = useMemo(() => summarize(attempts), [attempts]);
  const titleOf = (id: string) => FOUNDATION_GAMES.find((g) => g.id === id)?.title ?? id;

  return (
    <main style={{ minHeight: "100vh", background: "#f8fafc" }}>
      <SiteHeader />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px 64px" }}>
        <Link href="/games?tab=foundations" style={{ color: "#64748b", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>← Foundations games</Link>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: 32, fontWeight: 700, margin: "10px 0 4px" }}>My Foundations stats</h1>
        <p style={{ color: "#64748b", fontSize: 14.5, margin: "0 0 22px" }}>Your arithmetic practice over the last 90 days.</p>

        {loading && <div style={{ color: "#64748b" }}>Loading…</div>}

        {!loading && !signedIn && (
          <div style={box}>
            <strong>Sign in to see your stats.</strong>
            <p style={{ color: "#64748b", margin: "6px 0 14px" }}>Your rounds are saved to your account when you&apos;re signed in.</p>
            <Link href="/login" style={primary}>Sign in</Link>
          </div>
        )}

        {!loading && signedIn && attempts.length === 0 && (
          <div style={box}>
            <strong>No rounds yet.</strong>
            <p style={{ color: "#64748b", margin: "6px 0 14px" }}>Play any Foundations game — your stats start filling in after the first round.</p>
            <Link href="/games/skill-check" style={primary}>Take the Skill Check</Link>
            <Link href="/games?tab=foundations" style={{ ...primary, background: "#fff", color: "#1b7a44", border: "1px solid #bfe3cd", marginLeft: 10 }}>Browse games</Link>
          </div>
        )}

        {!loading && signedIn && attempts.length > 0 && (
          <>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 22 }}>
              <Tile label="Day streak" value={s.streak} sub={s.streak > 0 ? "days in a row" : "play today to start one"} />
              <Tile label="Rounds played" value={s.rounds} sub={`${s.weekRounds} this week`} />
              <Tile label="Days practised" value={s.daysActive30} sub="last 30 days" />
              {s.skillCheck && <Tile label="Skill Check" value={`${s.skillCheck.correct}/${s.skillCheck.total}`} sub={new Date(s.skillCheck.played_at).toLocaleDateString()} />}
            </div>

            <h2 style={h2}>Your skills</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))", gap: 14, marginBottom: 26 }}>
              {s.perGame.map((g) => {
                const lv = g.latest?.level ?? 0;
                const acc = g.latest && g.latest.total ? Math.round((g.latest.correct / g.latest.total) * 100) : null;
                return (
                  <div key={g.id} style={{ ...box, padding: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
                      <div style={{ fontWeight: 800, fontSize: 16, color: "#0f172a" }}>{g.skill}</div>
                      <Link href={`/games/${g.id}`} style={{ color: "#1b7a44", fontWeight: 800, fontSize: 13, textDecoration: "none" }}>Play →</Link>
                    </div>
                    <div style={{ fontSize: 12.5, color: "#64748b", marginBottom: 10 }}>{g.title}</div>
                    {g.plays === 0 ? (
                      <div style={{ color: "#94a3b8", fontSize: 14, padding: "10px 0 4px" }}>Not played yet</div>
                    ) : (
                      <>
                        <div style={{ fontSize: 13, color: "#334155", fontWeight: 700, marginBottom: 4 }}>
                          Level {lv} of {g.levels.length} · {g.levels[lv - 1]}
                        </div>
                        <div style={{ height: 8, background: "#e2e8f0", borderRadius: 99, overflow: "hidden", marginBottom: 12 }}>
                          <div style={{ width: `${(lv / g.levels.length) * 100}%`, height: "100%", background: "#1b7a44" }} />
                        </div>
                        <div style={{ display: "flex", gap: 18, alignItems: "flex-end", justifyContent: "space-between" }}>
                          <div style={{ display: "flex", gap: 16 }}>
                            <Mini label="Last round" value={acc === null ? "—" : `${acc}%`} />
                            <Mini label="Per answer" value={g.avgSec === null ? "—" : `${g.avgSec}s`} />
                            <Mini label="Rounds" value={String(g.plays)} />
                          </div>
                          <Spark points={g.trend} />
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>

            <h2 style={h2}>Worth another look</h2>
            <div style={box}>
              {s.topMissed.length === 0 ? (
                <span style={{ color: "#64748b", fontSize: 14 }}>No misses recorded in the last 30 days — nice.</span>
              ) : (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.topMissed.map((m) => (
                    <span key={`${m.game}|${m.q}=${m.a}`} title={titleOf(m.game)} style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 13.5, background: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: "5px 10px" }}>
                      {m.q} = {m.a.replace(/-/g, "−")}{m.n > 1 ? ` ×${m.n}` : ""}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </main>
  );
}

function Tile({ label, value, sub }: { label: string; value: string | number; sub?: string }) {
  return (
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "14px 18px", flex: "1 1 150px" }}>
      <div style={{ fontSize: 12, fontWeight: 700, color: "#64748b", textTransform: "uppercase", letterSpacing: ".04em" }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", marginTop: 2 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: "#94a3b8" }}>{sub}</div>}
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div style={{ fontSize: 17, fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }}>{value}</div>
      <div style={{ fontSize: 11, color: "#64748b", fontWeight: 600 }}>{label}</div>
    </div>
  );
}

/** Accuracy over the last rounds, oldest → newest. */
function Spark({ points }: { points: number[] }) {
  if (points.length < 2) return <span style={{ fontSize: 11, color: "#94a3b8" }}>trend after 2 rounds</span>;
  const w = 84, h = 32;
  const step = w / (points.length - 1);
  const d = points.map((p, i) => `${i === 0 ? "M" : "L"}${(i * step).toFixed(1)},${(h - (p / 100) * (h - 4) - 2).toFixed(1)}`).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} role="img" aria-label={`Accuracy over your last ${points.length} rounds, from ${points[0]}% to ${points[points.length - 1]}%`}>
      <path d={d} fill="none" stroke="#1b7a44" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

const box: React.CSSProperties = { background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 18 };
const h2: React.CSSProperties = { fontSize: 18, fontWeight: 800, margin: "0 0 10px", color: "#0f172a" };
const primary: React.CSSProperties = { display: "inline-block", background: "#1b7a44", color: "#fff", padding: "10px 20px", borderRadius: 10, textDecoration: "none", fontWeight: 700 };
