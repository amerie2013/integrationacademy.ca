// Equation Sprint — exact-fraction equation engine (no React, so a Node script
// can verify it). Students solve by choosing moves ("−3", "÷5", "−2x",
// "expand") that are applied to both sides of a balance. Generators make
// equations for three tiers that match MTH1W: Bronze (one- and two-step),
// Silver (x on both sides, brackets), Gold (fractions and decimals).

/* ------------------------------------------------------------------ */
/* Exact fractions                                                     */
/* ------------------------------------------------------------------ */

export type Q = { n: number; d: number };
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : Math.abs(a));
export function q(n: number, d = 1): Q {
  if (d === 0) throw new Error("Division by zero");
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d) || 1;
  return { n: n / g, d: d / g };
}
export const add = (a: Q, b: Q) => q(a.n * b.d + b.n * a.d, a.d * b.d);
export const sub = (a: Q, b: Q) => q(a.n * b.d - b.n * a.d, a.d * b.d);
export const mul = (a: Q, b: Q) => q(a.n * b.n, a.d * b.d);
export const div = (a: Q, b: Q) => q(a.n * b.d, a.d * b.n);
export const isZero = (a: Q) => a.n === 0;
export const isOne = (a: Q) => a.n === 1 && a.d === 1;
export const eqQ = (a: Q, b: Q) => a.n === b.n && a.d === b.d;
export const num = (a: Q) => a.n / a.d;
const ZERO = q(0), ONE = q(1);

/** "2.5" → 5/2, "3/4" → 3/4, "-7" → −7. Returns null if it isn't a number. */
export function parseQ(src: string): Q | null {
  const s = src.trim();
  let m = /^(-?\d+)\/(\d+)$/.exec(s);
  if (m) return +m[2] === 0 ? null : q(+m[1], +m[2]);
  m = /^(-?)(\d*)\.(\d+)$/.exec(s);
  if (m) {
    const d = 10 ** m[3].length;
    return q((m[1] ? -1 : 1) * (Number(m[2] || "0") * d + Number(m[3])), d);
  }
  m = /^-?\d+$/.exec(s);
  if (m) return q(Number(s));
  return null;
}

/* ------------------------------------------------------------------ */
/* Equations                                                           */
/* ------------------------------------------------------------------ */

/** One side: k(bx·x + bc) + x·x + c. The bracket is kept until expanded or divided away. */
export type Side = { br: { k: Q; x: Q; c: Q } | null; x: Q; c: Q };
export type Mode = "frac" | "dec";
export type Equation = { L: Side; R: Side; mode: Mode };

export const lin = (x: Q, c: Q): Side => ({ br: null, x, c });
const clone = (s: Side): Side => ({ br: s.br ? { ...s.br } : null, x: s.x, c: s.c });

export function evalSide(s: Side, xv: Q): Q {
  let v = add(mul(s.x, xv), s.c);
  if (s.br) v = add(v, mul(s.br.k, add(mul(s.br.x, xv), s.br.c)));
  return v;
}

/** Coefficient of x after expanding (used for hints and the scale). */
export function totalX(s: Side): Q { return s.br ? add(s.x, mul(s.br.k, s.br.x)) : s.x; }

/* ---------- formatting ---------- */

function isTerminating(d: number) { while (d % 2 === 0) d /= 2; while (d % 5 === 0) d /= 5; return d === 1; }
export function fmtQ(a: Q, mode: Mode = "frac"): string {
  const sign = a.n < 0 ? "−" : "";
  const n = Math.abs(a.n);
  if (a.d === 1) return `${sign}${n}`;
  if (mode === "dec" && isTerminating(a.d)) return `${sign}${String(n / a.d)}`;
  return `${sign}${n}/${a.d}`;
}
function fmtX(c: Q, mode: Mode): string {
  const sign = c.n < 0 ? "−" : "";
  const n = Math.abs(c.n);
  if (c.d === 1) return `${sign}${n === 1 ? "" : n}x`;
  if (mode === "dec" && isTerminating(c.d)) return `${sign}${String(n / c.d)}x`;
  return `${sign}${n === 1 ? "" : n}x/${c.d}`;
}
/** Join signed terms: ["3x", "−4"] → "3x − 4". */
function joinTerms(terms: string[]): string {
  if (!terms.length) return "0";
  return terms.map((t, i) => (i === 0 ? t : t.startsWith("−") ? ` − ${t.slice(1)}` : ` + ${t}`)).join("");
}
function linTerms(x: Q, c: Q, mode: Mode): string[] {
  const t: string[] = [];
  if (!isZero(x)) t.push(fmtX(x, mode));
  if (!isZero(c)) t.push(fmtQ(c, mode));
  return t;
}
export function fmtSide(s: Side, mode: Mode): string {
  const t: string[] = [];
  if (s.br) {
    const k = s.br.k;
    const ks = isOne(k) ? "" : k.n === -1 && k.d === 1 ? "−" : k.d === 1 ? fmtQ(k, mode) : `(${fmtQ(k, mode)})`;
    t.push(`${ks}(${joinTerms(linTerms(s.br.x, s.br.c, mode))})`);
  }
  t.push(...linTerms(s.x, s.c, mode));
  return joinTerms(t);
}
export const fmtEq = (e: Equation) => `${fmtSide(e.L, e.mode)} = ${fmtSide(e.R, e.mode)}`;

/* ---------- moves ---------- */

export type Move =
  | { op: "add"; x: Q; c: Q; label: string }
  | { op: "mul"; k: Q; label: string }
  | { op: "expand"; label: string };

/** "+3", "−2x", "-x", "×4", "*4", "÷0.5", "/3/4", "expand". */
export function parseMove(raw: string, mode: Mode = "frac"): { ok: true; move: Move } | { ok: false; error: string } {
  const s = raw.trim().toLowerCase().replace(/[−–]/g, "-").replace(/×/g, "*").replace(/÷/g, "/").replace(/\s+/g, "");
  if (!s) return { ok: false, error: "" };
  if (["expand", "exp", "e"].includes(s)) return { ok: true, move: { op: "expand", label: "expand" } };
  const m = /^([+\-*/])(.+)$/.exec(s);
  if (!m) return { ok: false, error: "Start with + − × or ÷, like −3 or ÷5." };
  const [, op, rest] = m;
  // x terms: x, 2x, 0.5x, (1/3)x, x/3, 2x/3
  let hasX = false, v: Q | null = null, body = rest;
  let xm = /^(\d*)x\/(\d+)$/.exec(rest);
  if (xm) { hasX = true; v = +xm[2] === 0 ? null : q(xm[1] === "" ? 1 : +xm[1], +xm[2]); }
  else if ((xm = /^\(?([^()x]*)\)?x$/.exec(rest))) { hasX = true; body = xm[1]; v = body === "" ? ONE : parseQ(body); }
  else v = parseQ(rest.replace(/^\((.*)\)$/, "$1"));
  if (!v) return { ok: false, error: `“${body || op}” isn't a number I can use.` };
  if (op === "*" || op === "/") {
    if (hasX) return { ok: false, error: "Multiply or divide by a number, not by x." };
    if (isZero(v)) return { ok: false, error: op === "/" ? "You can't divide by 0." : "Multiplying by 0 wipes out the equation." };
    const k = op === "*" ? v : div(ONE, v);
    return { ok: true, move: { op: "mul", k, label: `${op === "*" ? "×" : "÷"} ${fmtQ(v, mode)}` } };
  }
  const sign = op === "+" ? ONE : q(-1);
  const amt = mul(v, sign);
  if (isZero(amt)) return { ok: false, error: "Adding 0 does nothing." };
  const shown = hasX ? fmtX(v, mode) : fmtQ(v, mode);
  return {
    ok: true,
    move: { op: "add", x: hasX ? amt : ZERO, c: hasX ? ZERO : amt, label: `${op === "+" ? "+" : "−"} ${shown}` },
  };
}

export function applyToSide(s0: Side, mv: Move): Side {
  const s = clone(s0);
  if (mv.op === "add") { s.x = add(s.x, mv.x); s.c = add(s.c, mv.c); return s; }
  if (mv.op === "mul") {
    s.x = mul(s.x, mv.k); s.c = mul(s.c, mv.k);
    if (s.br) {
      s.br.k = mul(s.br.k, mv.k);
      if (isOne(s.br.k)) { s.x = add(s.x, s.br.x); s.c = add(s.c, s.br.c); s.br = null; }
    }
    return s;
  }
  if (s.br) {
    s.x = add(s.x, mul(s.br.k, s.br.x));
    s.c = add(s.c, mul(s.br.k, s.br.c));
    s.br = null;
  }
  return s;
}

export function applyMove(e: Equation, mv: Move): { ok: true; eq: Equation } | { ok: false; error: string } {
  if (mv.op === "expand" && !e.L.br && !e.R.br) return { ok: false, error: "There are no brackets to expand." };
  const L = applyToSide(e.L, mv), R = applyToSide(e.R, mv);
  return { ok: true, eq: { L, R, mode: e.mode } };
}

/** If the equation reads x = number (either way round), returns the number. */
export function solvedValue(e: Equation): Q | null {
  const isX = (s: Side) => !s.br && isOne(s.x) && isZero(s.c);
  const isNum = (s: Side) => !s.br && isZero(s.x);
  if (isX(e.L) && isNum(e.R)) return e.R.c;
  if (isX(e.R) && isNum(e.L)) return e.L.c;
  return null;
}

/** A sensible next move (used for hints and to set the par move count). */
export function nextMove(e: Equation): string | null {
  if (solvedValue(e) !== null) return null;
  const mode = e.mode;
  const br = e.L.br ? e.L : e.R.br ? e.R : null;
  if (br && br.br) {
    const other = br === e.L ? e.R : e.L;
    // k(...) = number with nothing else on that side: divide by k first
    if (isZero(br.x) && isZero(br.c) && isZero(other.x) && !other.br) return `/${fmtQ(br.br.k, mode).replace("−", "-")}`;
    return "expand";
  }
  const lx = e.L.x, rx = e.R.x;
  // x on both sides: remove x from the side with the smaller coefficient
  if (!isZero(lx) && !isZero(rx)) {
    const take = num(lx) >= num(rx) ? rx : lx;
    const t = fmtX(take, mode).replace("−", "");
    return `${take.n > 0 ? "-" : "+"}${t}`;
  }
  const S = !isZero(lx) ? e.L : e.R;
  if (!isZero(S.c)) return `${S.c.n > 0 ? "-" : "+"}${fmtQ(q(Math.abs(S.c.n), S.c.d), mode)}`;
  const k = div(ONE, S.x); // multiply by 1/coefficient
  if (k.d === 1) return `*${fmtQ(k, mode).replace("−", "-")}`;
  return `/${fmtQ(S.x, mode).replace("−", "-")}`;
}

/** Number of moves the hint strategy needs (par). */
export function parMoves(e: Equation): number {
  let cur = e;
  for (let i = 0; i < 12; i++) {
    const mvS = nextMove(cur);
    if (mvS === null) return i;
    const p = parseMove(mvS, cur.mode);
    if (!p.ok) return i + 1;
    const r = applyMove(cur, p.move);
    if (!r.ok) return i + 1;
    cur = r.eq;
  }
  return 12;
}

/* ------------------------------------------------------------------ */
/* Generators                                                          */
/* ------------------------------------------------------------------ */

export type Tier = 0 | 1 | 2;
export type Problem = { eq: Equation; x: Q; par: number; kind: string };

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
const nz = (r: () => number, lo: number, hi: number) => { for (;;) { const v = int(r, lo, hi); if (v !== 0) return v; } };
const signed = (r: () => number, lo: number, hi: number) => (r() < 0.5 ? -1 : 1) * int(r, lo, hi);

function build(L: Side, R: Side, x: Q, kind: string, mode: Mode = "frac"): Problem {
  const eq = { L, R, mode };
  if (!eqQ(evalSide(L, x), evalSide(R, x))) throw new Error("generator produced an unbalanced equation: " + kind);
  return { eq, x, par: parMoves(eq), kind };
}

function bronze(r: () => number): Problem {
  const x = nz(r, -9, 9), X = q(x);
  const roll = r();
  if (roll < 0.2) {
    const b = signed(r, 1, 15);
    return build(lin(ONE, q(b)), lin(ZERO, q(x + b)), X, "x + b = c");
  }
  if (roll < 0.4) {
    const a = signed(r, 2, 9);
    return build(lin(q(a), ZERO), lin(ZERO, q(a * x)), X, "ax = c");
  }
  const a = signed(r, 2, 9), b = signed(r, 1, 12);
  if (r() < 0.25) return build(lin(ZERO, q(a * x + b)), lin(q(a), q(b)), X, "c = ax + b");
  return build(lin(q(a), q(b)), lin(ZERO, q(a * x + b)), X, "ax + b = c");
}

function silver(r: () => number): Problem {
  const x = nz(r, -9, 9), X = q(x);
  const roll = r();
  if (roll < 0.4) {
    let a = 0, c = 0;
    while (a === c || a === 0 || c === 0) { a = signed(r, 1, 9); c = signed(r, 1, 9); }
    const b = signed(r, 1, 12), d = a * x + b - c * x;
    return build(lin(q(a), q(b)), lin(q(c), q(d)), X, "ax + b = cx + d");
  }
  if (roll < 0.6) {
    const k = signed(r, 2, 6), p = nz(r, -9, 9);
    return build({ br: { k: q(k), x: ONE, c: q(p) }, x: ZERO, c: ZERO }, lin(ZERO, q(k * (x + p))), X, "k(x + p) = q");
  }
  if (roll < 0.8) {
    const k = signed(r, 2, 6), p = nz(r, -9, 9), rr = signed(r, 1, 12);
    return build({ br: { k: q(k), x: ONE, c: q(p) }, x: ZERO, c: q(rr) }, lin(ZERO, q(k * (x + p) + rr)), X, "k(x + p) + r = q");
  }
  for (;;) {
    const k = int(r, 2, 5), p = nz(r, -6, 6), a = signed(r, 1, 9);
    if (a === k) continue;
    const b = k * (x + p) - a * x;
    return build(lin(q(a), q(b)), { br: { k: q(k), x: ONE, c: q(p) }, x: ZERO, c: ZERO }, X, "ax + b = k(x + p)");
  }
}

function gold(r: () => number): Problem {
  const roll = r();
  if (roll < 0.3) {
    const d = int(r, 2, 6), m = nz(r, -6, 6), x = d * m, b = signed(r, 1, 9);
    return build(lin(q(1, d), q(b)), lin(ZERO, q(m + b)), q(x), "x/d + b = c");
  }
  if (roll < 0.5) {
    for (;;) {
      const d = int(r, 3, 5), n = int(r, 2, 5);
      if (gcd(n, d) !== 1) continue;
      const m = nz(r, -4, 4), x = d * m, b = signed(r, 1, 9);
      return build(lin(q(n, d), q(b)), lin(ZERO, q(n * m + b)), q(x), "(n/d)x + b = c");
    }
  }
  if (roll < 0.75) {
    const a = pick(r, [q(1, 5), q(1, 4), q(2, 5), q(1, 2), q(3, 4), q(6, 5), q(3, 2), q(5, 2)]);
    const x = q(nz(r, -8, 8));
    const b = q(signed(r, 1, 9), 2);
    return build(lin(a, b), lin(ZERO, add(mul(a, x), b)), x, "decimal ax + b = c", "dec");
  }
  if (roll < 0.9) {
    const pairs: [number, number][] = [[2, 3], [3, 4], [2, 5], [4, 6], [3, 6]];
    const [d1, d2] = pick(r, pairs), L = d1 * d2 / gcd(d1, d2);
    const m = nz(r, -3, 3), x = L * m, b = signed(r, 1, 9);
    const c = x / d1 + b - x / d2;
    return build(lin(q(1, d1), q(b)), lin(q(1, d2), q(c)), q(x), "x/d1 + b = x/d2 + c");
  }
  const a = pick(r, [q(6, 5), q(3, 2), q(5, 4)]), c = pick(r, [q(1, 5), q(1, 2), q(1, 4)]);
  const x = q(nz(r, -5, 5) * 4);
  const b = q(signed(r, 1, 6), 2);
  const d = sub(add(mul(a, x), b), mul(c, x));
  return build(lin(a, b), lin(c, d), x, "decimal x both sides", "dec");
}

export function makeProblem(tier: Tier, r: () => number): Problem {
  return tier === 0 ? bronze(r) : tier === 1 ? silver(r) : gold(r);
}

export const TIERS = [
  { name: "Bronze", color: "#d08b4f", desc: "One- and two-step equations", hintCost: 0 as number | null, mult: 1, twoTap: true },
  { name: "Silver", color: "#cbd5e1", desc: "x on both sides and brackets · hints cost 20", hintCost: 20 as number | null, mult: 1.5, twoTap: false },
  { name: "Gold", color: "#fbbf24", desc: "Fractions and decimals · no hints", hintCost: null as number | null, mult: 2, twoTap: false },
];
export const ROUND_SECONDS = 180; // 3 minutes: Bronze needs two taps per move, so a round needs room
export const UNLOCK_SOLVES = 6; // solve this many in one round to open the next tier
