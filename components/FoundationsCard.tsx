"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabase";
import { summarize, type Attempt } from "../lib/foundationsStats";

// Dashboard card for the arithmetic games: streak + this week's rounds, and a
// nudge toward the skill that needs the most work.

export function FoundationsCard() {
  const [attempts, setAttempts] = useState<Attempt[] | null>(null);

  useEffect(() => {
    (async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) return;
      const since = new Date(Date.now() - 90 * 864e5).toISOString();
      const { data } = await supabase
        .from("game_attempts")
        .select("game, level, score, correct, total, avg_ms, missed, played_at")
        .eq("student_id", session.user.id)
        .gte("played_at", since)
        .order("played_at", { ascending: false })
        .limit(500);
      setAttempts((data ?? []) as Attempt[]);
    })();
  }, []);

  if (attempts === null) return null;

  const s = summarize(attempts);
  const played = s.perGame.filter((g) => g.latest && g.latest.total);
  const unplayed = s.perGame.find((g) => g.plays === 0);
  const weakest = [...played].sort((a, b) => a.latest!.correct / a.latest!.total - b.latest!.correct / b.latest!.total)[0];
  const next = attempts.length === 0 ? null : weakest && weakest.latest!.correct / weakest.latest!.total < 0.85 ? weakest : unplayed ?? weakest;

  return (
    <section style={{ marginBottom: 28 }}>
      <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: 18, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
        <div style={{ display: "flex", gap: 26, alignItems: "center", flexWrap: "wrap" }}>
          {attempts.length > 0 ? (
            <>
              <div>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }}>{s.streak}</div>
                <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>day streak</div>
              </div>
              <div>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }}>{s.weekRounds}</div>
                <div style={{ fontSize: 12, color: "#64748b", fontWeight: 600 }}>rounds this week</div>
              </div>
              <div style={{ color: "#475569", fontSize: 14, maxWidth: 340 }}>
                {next ? <>Next up: <Link href={`/games/${next.id}`} style={{ color: "#1b7a44", fontWeight: 700 }}>{next.skill} — {next.title}</Link></> : "Nice work on your arithmetic basics."}
              </div>
            </>
          ) : (
            <div>
              <strong style={{ color: "#0f172a" }}>Arithmetic games</strong>
              <div style={{ color: "#475569", fontSize: 14 }}>Faster adding, subtracting, times tables and integers make every other topic easier. Start with a 3-minute Skill Check.</div>
            </div>
          )}
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {attempts.length > 0 && (
            <Link href="/games/my-stats" style={{ background: "#fff", color: "#1b7a44", border: "1px solid #bfe3cd", padding: "10px 18px", borderRadius: 10, textDecoration: "none", fontWeight: 700, whiteSpace: "nowrap" }}>My stats</Link>
          )}
          <Link href={attempts.length > 0 ? "/games?tab=foundations" : "/games/skill-check"} style={{ background: "#1b7a44", color: "#fff", padding: "10px 20px", borderRadius: 10, textDecoration: "none", fontWeight: 700, whiteSpace: "nowrap" }}>
            {attempts.length > 0 ? "Play" : "Start the Skill Check"}
          </Link>
        </div>
      </div>
    </section>
  );
}
