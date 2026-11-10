// Undo Machine — two-step equations as a machine (no React, so a Node script
// can verify it). x goes in, the machine does two operations, and a number
// comes out: 3x + 4 = 11 is "×3, then +4, gives 11". To find x the student
// loads undo tiles into the reverse track in the right order (−4 first, then
// ÷3) and runs the machine backwards. A forward check then proves the answer.

import { add, div, eqQ, fmtQ, mul, parseQ, q, rng, sub, type Q } from "./equationSprint";

export { rng, fmtQ, parseQ, eqQ, type Q };

export type OpKind = "+" | "-" | "*" | "/";
export type Op = { k: OpKind; v: Q };
export type Tier = 0 | 1 | 2;

/** A machine: x → ops[0] → ops[1] → out. `text` is the equation the way a textbook writes it. */
export type Machine = { ops: [Op, Op]; out: Q; x: Q; text: string; mode: "frac" | "dec"; kind: string };

export const SYM: Record<OpKind, string> = { "+": "+", "-": "−", "*": "×", "/": "÷" };
export const INVERSE: Record<OpKind, OpKind> = { "+": "-", "-": "+", "*": "/", "/": "*" };
/** "×3", "−4", "÷(−2)": negatives get brackets so "× −3" never reads as "×−3". */
export const opLabel = (o: Op, mode: "frac" | "dec" = "frac") => (o.v.n < 0 ? `${SYM[o.k]}(${fmtQ(o.v, mode)})` : `${SYM[o.k]}${fmtQ(o.v, mode)}`);
/** + (−3) → −3 and − (−3) → +3, so tiles always show a positive amount for adding/subtracting. */
const tidy = (o: Op): Op => ((o.k === "+" || o.k === "-") && o.v.n < 0 ? { k: o.k === "+" ? "-" : "+", v: q(-o.v.n, o.v.d) } : o);
export const inverse = (o: Op): Op => ({ k: INVERSE[o.k], v: o.v });
export const sameOp = (a: Op, b: Op) => a.k === b.k && eqQ(a.v, b.v);

export function apply(v: Q, o: Op): Q {
  if (o.k === "+") return add(v, o.v);
  if (o.k === "-") return sub(v, o.v);
  if (o.k === "*") return mul(v, o.v);
  return div(v, o.v);
}
export const runForward = (m: Machine, x: Q) => apply(apply(x, m.ops[0]), m.ops[1]);
/** The two correct undo tiles, in the order they must be used. */
export const undoOrder = (m: Machine): [Op, Op] => [inverse(m.ops[1]), inverse(m.ops[0])];

/** Undo tiles to choose from: the two right ones plus look-alike traps, shuffled. */
export function tray(m: Machine, tier: Tier, r: () => number): Op[] {
  const [u1, u2] = undoOrder(m);
  const traps: Op[] = [
    m.ops[1], // the original operation instead of its undo (+4 instead of −4)
    m.ops[0],
    { k: u1.k, v: u2.v }, // right operation, wrong number (−3 instead of −4)
    { k: u2.k, v: u1.v },
    { k: u1.k, v: add(u1.v, q(1)) }, // off by one
    { k: u2.k, v: add(u2.v, q(1)) },
  ].map(tidy);
  const n = tier === 0 ? 2 : tier === 1 ? 3 : 4;
  const out: Op[] = [u1, u2];
  for (const t of traps) {
    if (out.length >= 2 + n) break;
    if (t.k === "/" && t.v.n === 0) continue;
    if (!out.some((o) => sameOp(o, t))) out.push(t);
  }
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** Plain-language reason the order matters, shown after a jam. */
export function orderReason(m: Machine): string {
  const [a, b] = m.ops, [u1, u2] = undoOrder(m);
  return `The machine did ${opLabel(a, m.mode)} first, then ${opLabel(b, m.mode)}. Undo the last thing first: ${opLabel(u1, m.mode)}, then ${opLabel(u2, m.mode)}.`;
}

/* ------------------------------------------------------------------ */
/* Generators                                                          */
/* ------------------------------------------------------------------ */

const int = (r: () => number, lo: number, hi: number) => lo + Math.floor(r() * (hi - lo + 1));
const nz = (r: () => number, lo: number, hi: number) => { for (;;) { const v = int(r, lo, hi); if (v !== 0) return v; } };
const pick = <T,>(r: () => number, a: T[]) => a[Math.floor(r() * a.length)];
const s = (n: number) => (n < 0 ? `−${-n}` : `${n}`);
const coefX = (a: number) => (a === 1 ? "x" : a === -1 ? "−x" : `${s(a)}x`);
const plus = (b: number) => (b < 0 ? ` − ${-b}` : ` + ${b}`);

function make(ops: [Op, Op], x: Q, text: string, kind: string, mode: "frac" | "dec" = "frac"): Machine {
  const m: Machine = { ops, x, out: q(0), text, mode, kind };
  m.out = runForward(m, x);
  return m;
}

/** Bronze: ax + b = c and ax − b = c with positive whole numbers. */
function bronze(r: () => number): Machine {
  const a = int(r, 2, 9), x = int(r, 1, 12), b = int(r, 1, 15);
  if (r() < 0.6) {
    const m = make([{ k: "*", v: q(a) }, { k: "+", v: q(b) }], q(x), "", "ax + b = c");
    m.text = `${a}x + ${b} = ${fmtQ(m.out)}`;
    return m;
  }
  const b2 = int(r, 1, Math.max(1, a * x - 1));
  const m = make([{ k: "*", v: q(a) }, { k: "-", v: q(b2) }], q(x), "", "ax − b = c");
  m.text = `${a}x − ${b2} = ${fmtQ(m.out)}`;
  return m;
}

/** Silver: negatives, and x divided by a number. */
function silver(r: () => number): Machine {
  const roll = r();
  if (roll < 0.35) {
    const a = nz(r, -9, 9), x = nz(r, -10, 10), b = nz(r, -15, 15);
    const m = make([{ k: "*", v: q(a) }, { k: b > 0 ? "+" : "-", v: q(Math.abs(b)) }], q(x), "", "ax ± b = c (negatives)");
    m.text = `${coefX(a)}${plus(b)} = ${fmtQ(m.out)}`;
    return m;
  }
  if (roll < 0.7) {
    const a = int(r, 2, 6), x = a * nz(r, -6, 6), b = nz(r, -12, 12);
    const m = make([{ k: "/", v: q(a) }, { k: b > 0 ? "+" : "-", v: q(Math.abs(b)) }], q(x), "", "x/a ± b = c");
    m.text = `x/${a}${plus(b)} = ${fmtQ(m.out)}`;
    return m;
  }
  // b − ax = c  (the machine is ×(−a), then +b)
  const a = int(r, 2, 6), x = nz(r, -8, 8), b = int(r, 3, 20);
  const m = make([{ k: "*", v: q(-a) }, { k: "+", v: q(b) }], q(x), "", "b − ax = c");
  m.text = `${b} − ${a}x = ${fmtQ(m.out)}`;
  return m;
}

/** Gold: the order flips (brackets first), plus decimals. */
function gold(r: () => number): Machine {
  const roll = r();
  if (roll < 0.3) {
    // (x + b)/a = c  → +b first, then ÷a: undo ×a first, then −b
    const a = int(r, 2, 6), c = nz(r, -8, 9), b = nz(r, -9, 9), x = a * c - b;
    const m = make([{ k: b > 0 ? "+" : "-", v: q(Math.abs(b)) }, { k: "/", v: q(a) }], q(x), "", "(x + b)/a = c");
    m.text = `(x${plus(b)})/${a} = ${fmtQ(m.out)}`;
    return m;
  }
  if (roll < 0.6) {
    // a(x − b) = c → −b first, then ×a
    const a = nz(r, -6, 7), b = nz(r, -9, 9), x = nz(r, -9, 12);
    if (Math.abs(a) < 2) return gold(r);
    const m = make([{ k: b > 0 ? "-" : "+", v: q(Math.abs(b)) }, { k: "*", v: q(a) }], q(x), "", "a(x − b) = c");
    m.text = `${s(a)}(x${plus(-b)}) = ${fmtQ(m.out)}`;
    return m;
  }
  if (roll < 0.85) {
    // decimals: 0.5x + 2.5 = c
    const a = pick(r, [q(1, 2), q(1, 4), q(3, 2), q(5, 2), q(6, 5)]);
    const x = q(a.d * nz(r, -6, 6));
    const b = q(nz(r, -9, 9), 2);
    const m = make([{ k: "*", v: a }, { k: b.n > 0 ? "+" : "-", v: q(Math.abs(b.n), b.d) }], x, "", "decimal ax + b = c", "dec");
    m.text = `${fmtQ(a, "dec")}x${b.n < 0 ? " − " : " + "}${fmtQ(q(Math.abs(b.n), b.d), "dec")} = ${fmtQ(m.out, "dec")}`;
    return m;
  }
  // 2x/3 style: ×a then ÷d written as a fraction coefficient
  const d = pick(r, [3, 4, 5]), a = pick(r, [2, 3, 4].filter((n) => n !== d && !(n === 2 && d === 4)));
  const x = d * nz(r, -5, 5), b = nz(r, -9, 9);
  const m = make([{ k: "*", v: q(a, d) }, { k: b > 0 ? "+" : "-", v: q(Math.abs(b)) }], q(x), "", "(a/d)x + b = c");
  m.text = `${a}x/${d}${plus(b)} = ${fmtQ(m.out)}`;
  return m;
}

export function makeMachine(tier: Tier, r: () => number): Machine {
  for (;;) {
    const m = tier === 0 ? bronze(r) : tier === 1 ? silver(r) : gold(r);
    // Skip the rare machines where undoing in the WRONG order also lands on x —
    // they would let the order lesson slip through.
    const [u1, u2] = undoOrder(m);
    if (!eqQ(apply(apply(m.out, u2), u1), m.x)) return m;
  }
}

export const TIERS = [
  { name: "Bronze", color: "#d08b4f", desc: "3x + 4 = 11 · the machine does the arithmetic", typeValues: false, showMe: true, mult: 1 },
  { name: "Silver", color: "#cbd5e1", desc: "Negatives and x/3 · you work out each number", typeValues: true, showMe: true, mult: 1.5 },
  { name: "Gold", color: "#fbbf24", desc: "Brackets flip the order · decimals and fractions", typeValues: true, showMe: false, mult: 2 },
];
export const ROUND_SIZE = 8;
export const FUSES = 3;
