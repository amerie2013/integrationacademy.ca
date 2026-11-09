// Rate Race — missions, flight plans and scoring (no React, so a Node script
// can verify every mission). The student programs a delivery drone with a
// distance–time rule d = mt + b. Every play draws new numbers, nothing is
// previewed before launch, and each mission starts with a "think" question,
// so the only way to win is to reason about rate of change and initial value.

import { niceNumber, parseRule, short, type Rule } from "./linearRule";

export type Mover = { name: string; m: number; b: number; color: string; label: string };

export type Goal =
  | { kind: "at"; t: number; d: number; text: string }
  | { kind: "meet"; who: number; t: number; text: string };

export type Landmark = { d: number; name: string };

export type Mission = {
  levelId: string;
  tier: Tier;
  title: string;
  skill: string;
  hard?: boolean;
  story: string;
  goals: Goal[];
  tMax: number;
  dMax: number;
  landmarks: Landmark[];
  others: Mover[];
  maxRules: number;
  /** Levels 1–2: fill in d = [ ]t + [ ] instead of typing the whole rule. */
  fillIn?: boolean;
  log?: [number, number][];
  think: { q: string; answer: number; unit: string; hint: string };
  hint: string;
  solution: string[];
};

export type Tier = 0 | 1 | 2;
export type LevelDef = { id: string; title: string; skill: string; hard?: boolean; make: (rnd: () => number, tier: Tier) => Mission };

/** Bronze -> Silver -> Gold: harder numbers and less help at each step. */
export const TIERS = [
  { name: "Bronze", color: "#d08b4f", think: true, hintCost: 0 as number | null, batteries: 3, mult: 1, numbers: "Whole-number speeds" },
  { name: "Silver", color: "#cbd5e1", think: true, hintCost: 50 as number | null, batteries: 3, mult: 1.5, numbers: "Decimal speeds · hints cost 50" },
  { name: "Gold", color: "#fbbf24", think: false, hintCost: null as number | null, batteries: 2, mult: 2, numbers: "Fraction speeds · no help · 2 batteries" },
];

export const TOL = 0.25; // metres
export const BATTERIES = 3;

/* ------------------------------------------------------------------ */
/* Random numbers                                                      */
/* ------------------------------------------------------------------ */

export function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const int = (r: () => number, lo: number, hi: number) => lo + Math.floor(r() * (hi - lo + 1));
const pick = <T,>(r: () => number, a: T[]) => a[Math.floor(r() * a.length)];
const niceMax = (v: number) => Math.max(20, Math.ceil((v * 1.12) / 10) * 10);

/* ------------------------------------------------------------------ */
/* Flight plan                                                         */
/* ------------------------------------------------------------------ */

export type Plan = { rules: Rule[]; pos: (t: number) => number };
export type PlanCheck = { ok: true; plan: Plan } | { ok: false; error: string };

export function buildPlan(ms: Mission, rules: Rule[]): PlanCheck {
  if (rules.length === 0) return { ok: false, error: "Write a flight rule first." };
  if (rules.length > ms.maxRules)
    return { ok: false, error: `This mission allows ${ms.maxRules} rule${ms.maxRules === 1 ? "" : "s"}.` };
  if (rules.length > 1 && rules.some((r) => !r.hasDomain))
    return { ok: false, error: "With more than one rule, give each a time window, like d = 6t {0 <= t <= 4}." };

  const eps = 1e-9;
  const pickRule = (t: number) => rules.find((r) => t >= r.lo - eps && t <= r.hi + eps);
  for (let i = 0; i <= 400; i++) {
    const t = (ms.tMax * i) / 400;
    if (!pickRule(t)) return { ok: false, error: `Nothing tells the drone where to be at t = ${short(t)} s.` };
  }
  const cuts = new Set<number>();
  for (const r of rules) for (const c of [r.lo, r.hi]) if (c > eps && c < ms.tMax - eps) cuts.add(c);
  for (const c of cuts) {
    const ends = rules.filter((r) => c >= r.lo - eps && c <= r.hi + eps).map((r) => r.m * c + r.b);
    const lo = Math.min(...ends), hi = Math.max(...ends);
    if (hi - lo > 0.05)
      return { ok: false, error: `At t = ${short(c)} s your rules jump from ${short(lo)} m to ${short(hi)} m. Drones can't teleport.` };
  }
  return { ok: true, plan: { rules, pos: (t: number) => { const r = pickRule(t)!; return r.m * t + r.b; } } };
}

/** Short reading of one rule, shown under the input. */
export function readRule(r: Rule): string {
  const when = r.hasDomain
    ? isFinite(r.lo) && isFinite(r.hi) ? `${niceNumber(r.lo)}–${niceNumber(r.hi)} s: `
      : isFinite(r.lo) ? `after ${niceNumber(r.lo)} s: ` : `until ${niceNumber(r.hi)} s: `
    : "";
  if (Math.abs(r.m) < 1e-12) return `${when}waits at ${short(r.b)} m`;
  const t0 = r.hasDomain && isFinite(r.lo) ? r.lo : 0;
  return `${when}${niceNumber(Math.abs(r.m))} m/s ${r.m > 0 ? "up" : "down"}, starts at ${short(r.m * t0 + r.b)} m`;
}

/* ------------------------------------------------------------------ */
/* Scoring                                                             */
/* ------------------------------------------------------------------ */

export type GoalResult = { ok: boolean; t: number; target: number; got: number; gap: number };

export const moverPos = (m: Mover, t: number) => m.m * t + m.b;
export const goalTarget = (ms: Mission, g: Goal) => (g.kind === "at" ? g.d : moverPos(ms.others[g.who], g.t));

export function scoreGoals(ms: Mission, plan: Plan): GoalResult[] {
  return ms.goals.map((g) => {
    const target = goalTarget(ms, g);
    const got = plan.pos(g.t);
    return { ok: Math.abs(got - target) <= TOL, t: g.t, target, got, gap: got - target };
  });
}

export type Attempt = { error: string } | { plan: Plan; results: GoalResult[]; won: boolean };

export function attempt(ms: Mission, inputs: string[]): Attempt {
  const parsed = inputs.filter((s) => s.trim()).map((s) => parseRule(s));
  const bad = parsed.find((p) => !p.ok);
  if (bad && !bad.ok) return { error: bad.error || "Write a flight rule first." };
  const plan = buildPlan(ms, parsed.map((p) => (p as { ok: true; rule: Rule }).rule));
  if (!plan.ok) return { error: plan.error };
  const results = scoreGoals(ms, plan.plan);
  return { plan: plan.plan, results, won: results.every((r) => r.ok) };
}

/** Mid-flight question: three choices for the drone's position at time tq. */
export function midChoices(plan: Plan, tq: number, rnd: () => number): { tq: number; answer: number; options: number[] } {
  const answer = Math.round(plan.pos(tq) * 100) / 100;
  const r = plan.rules[0];
  const pool = [answer + r.m, answer - r.m, r.m * tq, answer + 2 * Math.sign(r.m || 1) * Math.max(1, Math.abs(r.m)), answer + 5, answer - 5]
    .map((v) => Math.round(v * 100) / 100)
    .filter((v, i, a) => Math.abs(v - answer) > 0.4 && v >= 0 && a.indexOf(v) === i);
  const wrong: number[] = [];
  while (wrong.length < 2 && pool.length) wrong.push(pool.splice(Math.floor(rnd() * pool.length), 1)[0]);
  while (wrong.length < 2) wrong.push(answer + 3 * (wrong.length + 1));
  const options = [answer, ...wrong].sort(() => rnd() - 0.5);
  return { tq, answer, options };
}

/* ------------------------------------------------------------------ */
/* Levels (each makes a fresh mission from a random source)            */
/* ------------------------------------------------------------------ */

const isInt = (v: number) => Math.abs(v - Math.round(v)) < 1e-9;
const BUS = "#f59e0b";
const ROBOT = "#c084fc";

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
/** Number for a typed answer: 2.5 → "2.5", 7/3 → "7/3", −3/4 → "-3/4" (ASCII so the parser and students can type it). */
const fr = (v: number) => (isInt(v * 2) ? String(v) : niceNumber(v).replace("−", "-")); // halves as decimals (Silver), thirds/quarters as fractions (Gold)

/**
 * A speed for the tier. Bronze: whole number. Silver: a half (2.5). Gold: a
 * fraction with denominator 3 or 4 (7/3). q is the denominator; times are then
 * chosen as multiples of q so every position stays a whole number.
 */
function rate(r: () => number, tier: Tier, lo: number, hi: number): { v: number; q: number } {
  if (tier === 0) return { v: int(r, lo, hi), q: 1 };
  if (tier === 1) return { v: int(r, lo, hi - 1) + 0.5, q: 2 };
  for (;;) {
    const q = pick(r, [3, 4]);
    const p = int(r, lo * q + 1, hi * q - 1);
    if (gcd(p, q) === 1) return { v: p / q, q };
  }
}
/** A time in [lo, hi] that is a multiple of q (falls back to q or 2q). */
function timeFor(r: () => number, q: number, lo: number, hi: number): number {
  const ok: number[] = [];
  for (let t = lo; t <= hi; t++) if (t % q === 0) ok.push(t);
  if (ok.length) return pick(r, ok);
  return q >= lo ? q : 2 * q;
}

const base = (id: string, tier: Tier) => {
  const L = LEVELS.find((l) => l.id === id)!;
  return { levelId: id, tier, title: L.title, skill: L.skill, hard: L.hard };
};

export const LEVELS: LevelDef[] = [
  {
    id: "first-delivery", title: "First Delivery", skill: "Slope = speed",
    make: (r, tier) => {
      const { v: s, q } = rate(r, tier, tier === 2 ? 1 : 2, tier === 0 ? 6 : tier === 1 ? 8 : 4);
      const T = tier === 0 ? int(r, 2, 5) : timeFor(r, q, 2, 8), D = s * T, tMax = T + 3;
      return {
        ...base("first-delivery", tier),
        story: `Reach the Bakery (${D} m) at exactly ${T} s.`,
        goals: [
          { kind: "at", t: 0, d: 0, text: "Start at 0 m" },
          { kind: "at", t: T, d: D, text: `Bakery: ${D} m at ${T} s` },
        ],
        tMax, dMax: niceMax(s * tMax),
        landmarks: [{ d: 0, name: "Depot" }, { d: D, name: "Bakery" }],
        others: [], maxRules: 1, fillIn: true,
        think: { q: "How fast must the drone fly?", answer: s, unit: "m/s", hint: `Distance ÷ time = ${D} ÷ ${T}` },
        hint: `Speed = ${D} ÷ ${T} = ${fr(s)}. It starts at 0, so d = ${fr(s)}t + 0.`,
        solution: [`d = ${fr(s)}t`],
      };
    },
  },
  {
    id: "rooftop", title: "Rooftop Launch", skill: "b = starting point",
    make: (r, tier) => {
      const b = tier === 0 ? pick(r, [4, 6, 8, 10, 12]) : tier === 1 ? int(r, 5, 20) : int(r, 3, 15);
      const { v: s, q } = rate(r, tier, tier === 2 ? 1 : 2, tier === 0 ? 6 : tier === 1 ? 8 : 4);
      const T = tier === 0 ? int(r, 3, 6) : timeFor(r, q, 3, 8), D = b + s * T, tMax = T + 3;
      return {
        ...base("rooftop", tier),
        story: `Launch from the Rooftop (${b} m). Reach the Café (${D} m) at ${T} s.`,
        goals: [
          { kind: "at", t: 0, d: b, text: `Start at ${b} m` },
          { kind: "at", t: T, d: D, text: `Café: ${D} m at ${T} s` },
        ],
        tMax, dMax: niceMax(b + s * tMax),
        landmarks: [{ d: 0, name: "Depot" }, { d: b, name: "Rooftop" }, { d: D, name: "Café" }],
        others: [], maxRules: 1, fillIn: true,
        think: { q: "How fast must the drone fly?", answer: s, unit: "m/s", hint: `It only flies ${D} − ${b} = ${D - b} m, in ${T} s.` },
        hint: `(${D} − ${b}) ÷ ${T} = ${fr(s)} m/s, starting at ${b}: d = ${fr(s)}t + ${b}.`,
        solution: [`d = ${fr(s)}t + ${b}`],
      };
    },
  },
  {
    id: "flight-log", title: "Copy the Flight", skill: "Rule from a table",
    make: (r, tier) => {
      const { v: s, q } = rate(r, tier, tier === 2 ? 1 : 2, tier === 0 ? 5 : tier === 1 ? 6 : 3);
      const b = tier === 0 ? int(r, 2, 9) : tier === 1 ? int(r, 3, 20) : int(r, 2, 12);
      const dt = tier === 0 ? pick(r, [1, 2]) : q;
      const t1 = tier === 0 ? int(r, 1, 2) : q;
      const ts = [t1, t1 + dt, t1 + 2 * dt];
      const log = ts.map((t) => [t, s * t + b] as [number, number]);
      const tMax = ts[2] + 3;
      return {
        ...base("flight-log", tier),
        story: "Copy yesterday's flight. Type the rule yourself.",
        goals: log.map(([t, d]) => ({ kind: "at" as const, t, d, text: `${d} m at ${t} s` })),
        log, tMax, dMax: niceMax(s * tMax + b),
        landmarks: [{ d: 0, name: "Depot" }],
        others: [], maxRules: 1,
        think: { q: "What speed does the log show?", answer: s, unit: "m/s", hint: `Change in d ÷ change in t: (${log[1][1]} − ${log[0][1]}) ÷ ${dt}` },
        hint: `${fr(s)} m/s. Go back to t = 0: ${log[0][1]} − ${fr(s)} × ${t1} = ${b}. So d = ${fr(s)}t + ${b}.`,
        solution: [`d = ${fr(s)}t + ${b}`],
      };
    },
  },
  {
    id: "return", title: "Heading Home", skill: "Negative slope",
    make: (r, tier) => {
      const { v: s, q } = rate(r, tier, tier === 2 ? 1 : 3, tier === 2 ? 4 : 8);
      const T = tier === 0 ? int(r, 4, 7) : timeFor(r, q, 4, 9), D = s * T;
      return {
        ...base("return", tier),
        story: `Fly home from the Library (${D} m). Land at the Depot at ${T} s.`,
        goals: [
          { kind: "at", t: 0, d: D, text: `Start at ${D} m` },
          { kind: "at", t: T, d: 0, text: `Depot: 0 m at ${T} s` },
        ],
        tMax: T, dMax: niceMax(D),
        landmarks: [{ d: 0, name: "Depot" }, { d: D, name: "Library" }],
        others: [], maxRules: 1,
        think: { q: "Rate of change of d? (going down is negative)", answer: -s, unit: "m/s", hint: `d drops ${D} m in ${T} s.` },
        hint: `${D} m down in ${T} s → ${fr(-s)} m/s. Start at ${D}: d = ${fr(-s)}t + ${D}.`,
        solution: [`d = ${fr(-s)}t + ${D}`],
      };
    },
  },
  {
    id: "catch-bus", title: "Catch the Bus", skill: "Where lines meet",
    make: (r, tier) => {
      for (;;) {
        const v = int(r, 1, 3);
        const { v: dlt, q } = rate(r, tier, 1, 3);
        const u = v + dlt, t = tier === 0 ? int(r, 3, 6) : timeFor(r, q, 3, 8);
        const a = dlt * t, S = u * t, tMax = t + 3;
        if (a < 3) continue;
        return {
          ...base("catch-bus", tier),
          story: `The bus has a ${a} m head start. Catch it at Stop B (${S} m).`,
          goals: [
            { kind: "at", t: 0, d: 0, text: "Start at 0 m" },
            { kind: "meet", who: 0, t, text: `Meet the bus at Stop B (${S} m)` },
          ],
          tMax, dMax: niceMax(Math.max(u * tMax, v * tMax + a)),
          landmarks: [{ d: 0, name: "Depot" }, { d: a, name: "Stop A" }, { d: S, name: "Stop B" }],
          others: [{ name: "Bus", m: v, b: a, color: BUS, label: `d = ${v}t + ${a}` }],
          maxRules: 1,
          think: { q: `When does the bus reach Stop B (${S} m)?`, answer: t, unit: "s", hint: `Solve ${v}t + ${a} = ${S}` },
          hint: `The bus is at ${S} m when t = ${t}. You fly ${S} m in ${t} s: d = ${fr(u)}t.`,
          solution: [`d = ${fr(u)}t`],
        };
      }
    },
  },
  {
    id: "meet-robot", title: "Meet the Robot", skill: "Two rules",
    make: (r, tier) => {
      const rr = int(r, 2, 4), b = pick(r, tier === 0 ? [0, 2, 4, 5, 6, 8] : [0, 3, 5, 7, 9, 11, 12]);
      const { v: u, q } = rate(r, tier, tier === 2 ? 1 : 2, tier === 0 ? 5 : tier === 1 ? 6 : 4);
      const T = tier === 0 ? int(r, 3, 6) : timeFor(r, q, 3, 8);
      const P = b + u * T, R = P + rr * T, tMax = T + 3;
      return {
        ...base("meet-robot", tier),
        story: `Start at the Corner (${b} m). Meet the robot at exactly ${T} s.`,
        goals: [
          { kind: "at", t: 0, d: b, text: `Start at ${b} m` },
          { kind: "meet", who: 0, t: T, text: `Meet the robot at ${T} s` },
        ],
        tMax, dMax: niceMax(Math.max(R, b + u * tMax)),
        landmarks: [{ d: 0, name: "Depot" }, { d: b, name: "Corner" }, { d: R, name: "Warehouse" }],
        others: [{ name: "Robot", m: -rr, b: R, color: ROBOT, label: `d = −${rr}t + ${R}` }],
        maxRules: 1,
        think: { q: `Where is the robot at t = ${T}?`, answer: P, unit: "m", hint: `−${rr}(${T}) + ${R}` },
        hint: `Robot at ${P} m. You go from ${b} m to ${P} m in ${T} s: ${fr(u)} m/s. d = ${fr(u)}t + ${b}.`,
        solution: [`d = ${fr(u)}t + ${b}`],
      };
    },
  },
  {
    id: "round-trip", title: "Round Trip", skill: "Piecewise rules", hard: true,
    make: (r, tier) => {
      for (;;) {
        const { v: s1, q } = rate(r, tier, tier === 2 ? 1 : 3, tier === 2 ? 4 : 6);
        const T1 = tier === 0 ? int(r, 2, 4) : timeFor(r, q, 2, 8), D = s1 * T1, W = int(r, 2, 3);
        if (D < 6) continue;
        // return speed: whole (Bronze), halves (Silver), thirds/quarters allowed (Gold)
        const ok = [2, 3, 4, 5, 6].filter((k) => {
          const sp = D / k;
          if (tier === 0) return isInt(sp);
          if (tier === 1) return isInt(sp * 2);
          return [1, 2, 3, 4].some((den) => isInt(sp * den));
        });
        const pref = tier === 0 ? ok : ok.filter((k) => !isInt(D / k));
        const list = pref.length ? pref : ok;
        if (!list.length) continue;
        const T3 = pick(r, list), k = D / T3, w = T1 + W, end = w + T3;
        return {
          ...base("round-trip", tier),
          story: `Pharmacy (${D} m) at ${T1} s. Wait until ${w} s. Home by ${end} s.`,
          goals: [
            { kind: "at", t: 0, d: 0, text: "Start at 0 m" },
            { kind: "at", t: T1, d: D, text: `Pharmacy: ${D} m at ${T1} s` },
            { kind: "at", t: w, d: D, text: `Still there at ${w} s` },
            { kind: "at", t: end, d: 0, text: `Home: 0 m at ${end} s` },
          ],
          tMax: end, dMax: niceMax(D),
          landmarks: [{ d: 0, name: "Depot" }, { d: D, name: "Pharmacy" }],
          others: [], maxRules: 3,
          think: { q: "How fast on the way home?", answer: k, unit: "m/s", hint: `${D} m in ${end} − ${w} = ${T3} s` },
          hint: `Three rules: d = ${fr(s1)}t {0 <= t <= ${T1}}, d = ${D} {${T1} <= t <= ${w}}, d − ${D} = −${fr(k)}(t − ${w}) {${w} <= t <= ${end}}.`,
          solution: [`d = ${fr(s1)}t {0 <= t <= ${T1}}`, `d = ${D} {${T1} <= t <= ${w}}`, `d - ${D} = -${fr(k)}(t - ${w}) {${w} <= t <= ${end}}`],
        };
      }
    },
  },
  {
    id: "overtake", title: "Overtake", skill: "Comparing rates", hard: true,
    make: (r, tier) => {
      for (;;) {
        const v = int(r, 2, 3);
        const { v: dlt, q } = rate(r, tier, 2, 4);
        // Gold: the delay and the later check are whole multiples of the fraction's denominator
        const w = tier === 2 ? q : int(r, 1, 3), gap = tier === 2 ? q : 2;
        const u = v + dlt;
        const ts = [4, 5, 6, 7, 8, 9, 10, 11, 12].filter((t) => {
          const a = t * dlt - u * w;
          return t > w + 1 && a >= 4 && isInt(a) && isInt(u * (t + gap - w)) && (tier === 2 || t <= 9);
        });
        if (!ts.length) continue;
        const t = pick(r, ts), a = t * dlt - u * w, H = v * t + a, tc = t + gap, dc = u * (tc - w);
        return {
          ...base("overtake", tier),
          story: `Stuck at the Depot for ${w} s. Then pass the bus at the Hospital (${H} m).`,
          goals: [
            { kind: "at", t: w, d: 0, text: `Still at 0 m at ${w} s` },
            { kind: "meet", who: 0, t, text: `Pass the bus at the Hospital (${H} m)` },
            { kind: "at", t: tc, d: dc, text: `Same speed after: ${dc} m at ${tc} s` },
          ],
          tMax: tc, dMax: niceMax(dc),
          landmarks: [{ d: 0, name: "Depot" }, { d: a, name: "Stop A" }, { d: H, name: "Hospital" }],
          others: [{ name: "Bus", m: v, b: a, color: BUS, label: `d = ${v}t + ${a}` }],
          maxRules: 2,
          think: { q: `When does the bus reach the Hospital (${H} m)?`, answer: t, unit: "s", hint: `Solve ${v}t + ${a} = ${H}` },
          hint: `You fly ${H} m between t = ${w} and t = ${t}: ${fr(u)} m/s. d = 0 {0 <= t <= ${w}} and d = ${fr(u)}(t − ${w}) {t >= ${w}}.`,
          solution: [`d = 0 {0 <= t <= ${w}}`, `d = ${fr(u)}(t - ${w}) {t >= ${w}}`],
        };
      }
    },
  },
];
