import { CART_LEVELS, CHANGE_LEVELS, DIVIDE_LEVELS, FACT_LEVEL_NAMES, SIGN_LEVELS } from "./foundations";

export type Attempt = {
  game: string;
  level: number;
  score: number;
  correct: number;
  total: number;
  avg_ms: number | null;
  missed: { q: string; a: string }[] | null;
  played_at: string;
};

export const FOUNDATION_GAMES: { id: string; skill: string; title: string; levels: string[] }[] = [
  { id: "cart-rush", skill: "Adding", title: "Cart Rush", levels: CART_LEVELS.map((l) => l.name) },
  { id: "change-up", skill: "Subtracting", title: "Change Up", levels: CHANGE_LEVELS.map((l) => l.name) },
  { id: "fact-heat", skill: "Multiplying", title: "Fact Heat", levels: FACT_LEVEL_NAMES.map((l) => l.name) },
  { id: "split-the-bill", skill: "Dividing", title: "Split the Bill", levels: DIVIDE_LEVELS.map((l) => l.name) },
  { id: "sign-flip", skill: "Integers", title: "Sign Flip", levels: SIGN_LEVELS.map((l) => l.name) },
];

const dayKey = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

/** Consecutive days with at least one round, counting back from today (or yesterday). */
export function dayStreak(attempts: Pick<Attempt, "played_at">[]): number {
  const days = new Set(attempts.map((a) => dayKey(new Date(a.played_at))));
  const d = new Date();
  if (!days.has(dayKey(d))) d.setDate(d.getDate() - 1);
  let n = 0;
  while (days.has(dayKey(d))) { n++; d.setDate(d.getDate() - 1); }
  return n;
}

export function summarize(attempts: Attempt[]) {
  const sorted = [...attempts].sort((a, b) => b.played_at.localeCompare(a.played_at)); // newest first
  const games = sorted.filter((a) => a.game !== "skill-check");
  const weekAgo = Date.now() - 7 * 864e5;
  const monthAgo = Date.now() - 30 * 864e5;

  const perGame = FOUNDATION_GAMES.map((g) => {
    const rows = games.filter((a) => a.game === g.id);
    const latest = rows[0];
    const recent = rows.slice(0, 12).reverse(); // oldest → newest for the trend line
    const timed = rows.filter((r) => r.avg_ms);
    return {
      ...g,
      plays: rows.length,
      latest,
      bestScore: rows.reduce((m, r) => Math.max(m, r.score), 0),
      trend: recent.map((r) => (r.total ? Math.round((r.correct / r.total) * 100) : 0)),
      avgSec: timed.length ? Math.round(timed.slice(0, 5).reduce((s, r) => s + (r.avg_ms as number), 0) / Math.min(5, timed.length) / 100) / 10 : null,
    };
  });

  const miss: Record<string, { q: string; a: string; n: number; game: string }> = {};
  games.filter((a) => new Date(a.played_at).getTime() >= monthAgo).forEach((a) =>
    (a.missed ?? []).forEach((m) => { const k = `${a.game}|${m.q}=${m.a}`; (miss[k] ??= { ...m, n: 0, game: a.game }).n++; }),
  );

  return {
    perGame,
    streak: dayStreak(attempts),
    rounds: games.length,
    weekRounds: games.filter((a) => new Date(a.played_at).getTime() >= weekAgo).length,
    daysActive30: new Set(games.filter((a) => new Date(a.played_at).getTime() >= monthAgo).map((a) => dayKey(new Date(a.played_at)))).size,
    skillCheck: sorted.find((a) => a.game === "skill-check") ?? null,
    topMissed: Object.values(miss).sort((x, y) => y.n - x.n).slice(0, 10),
  };
}
