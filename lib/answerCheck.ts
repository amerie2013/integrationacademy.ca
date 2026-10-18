// Answer checking for lesson practice widgets. Students type answers the way
// they would on paper: "-7", "3/4", "-1 1/2", "0.375", "2.5 x 10^4", "2.5e4",
// "35%", "3:5". Numeric answers compare by value (with a tolerance), so every
// equivalent form counts; text answers compare after normalising case/spaces.

export type AnswerSpec =
  // form "fraction": typed as a fraction (or mixed number / integer when the value is whole)
  // form "sci": typed in scientific notation, a × 10^n with 1 ≤ |a| < 10
  | { kind: "number"; value: number; tol?: number; percent?: boolean; form?: "fraction" | "sci" }
  | { kind: "text"; accept: string[] }
  | { kind: "choice"; options: string[]; correct: number }
  | { kind: "ratio"; value: [number, number]; lowest?: boolean } // equivalent ratios count; lowest: must be in simplest form
  // an algebraic expression, e.g. "6x^2-3x+4"; any equivalent expression counts. simplified: no brackets
  // (unless the answer has them) and no more terms than the answer. A leading "y =" is ignored.
  // factored: must be written as a product — one term, at least as many bracket factors as the answer, and the
  // answer's leading common factor (e.g. the 2 in 2(x+1)(x+2)) taken out.
  | { kind: "expr"; value: string; simplified?: boolean; factored?: boolean }
  // the roots of an equation, typed in any order: "-3, 5", "x = -3 or x = 5", "±4". An empty value means
  // there are no real roots ("none", "no real roots"). tol allows rounded answers (e.g. 0.01).
  | { kind: "roots"; value: number[]; tol?: number };

const MINUS = /[−–—]/g; // typographic minus / dashes -> "-"

/** Parse a typed number. Returns null when it isn't one. */
export function parseNumber(raw: string): number | null {
  let s = raw.trim().replace(MINUS, "-").replace(/,/g, "").replace(/\s+/g, " ");
  if (!s) return null;
  let scale = 1;
  if (s.endsWith("%")) { s = s.slice(0, -1).trim(); scale = 0.01; }
  // scientific notation: 2.5 x 10^4, 2.5*10^-3, 2.5×10^(−3), 2.5e4
  const sci = s.match(/^(-?\d*\.?\d+)\s*(?:[x×*·]\s*10\s*\^\s*\(?\s*(-?\d+)\s*\)?|e(-?\d+))$/i);
  if (sci) return Number(sci[1]) * 10 ** Number(sci[2] ?? sci[3]) * scale;
  const pow = s.match(/^10\s*\^\s*\(?\s*(-?\d+)\s*\)?$/);
  if (pow) return 10 ** Number(pow[1]) * scale;
  // mixed number: -1 1/2
  const mixed = s.match(/^(-?)(\d+)\s+(\d+)\s*\/\s*(\d+)$/);
  if (mixed) {
    const v = Number(mixed[2]) + Number(mixed[3]) / Number(mixed[4]);
    return (mixed[1] ? -v : v) * scale;
  }
  // fraction: -3/4, 3/-4, (-3)/4
  const fr = s.replace(/[()]/g, "").match(/^(-?\d*\.?\d+)\s*\/\s*(-?\d*\.?\d+)$/);
  if (fr) {
    const d = Number(fr[2]);
    return d === 0 ? null : (Number(fr[1]) / d) * scale;
  }
  if (/^-?\d*\.?\d+$/.test(s)) return Number(s) * scale;
  return null;
}

const norm = (s: string) => s.trim().toLowerCase().replace(MINUS, "-").replace(/\s+/g, " ").replace(/[.]$/, "");

export function checkAnswer(spec: AnswerSpec, raw: string | number): boolean {
  if (spec.kind === "choice") return Number(raw) === spec.correct;
  const s = String(raw);
  if (spec.kind === "text") return spec.accept.some((a) => norm(a) === norm(s) || norm(a).replace(/ /g, "") === norm(s).replace(/ /g, ""));
  if (spec.kind === "ratio") {
    const r = parseRatio(s);
    if (!r || !sameRatio(r, spec.value)) return false;
    return !(spec.lowest && notLowest(r[0], r[1]));
  }
  if (spec.kind === "expr") return sameExpr(spec.value, s) && !(spec.simplified && notSimplified(spec.value, s)) && !(spec.factored && notFactored(spec.value, s));
  if (spec.kind === "roots") return rootsMatch(spec, s) === "all";
  let v = parseNumber(s.replace(/^\s*[a-zA-Z]\s*=\s*/, "")); // "x = 4" counts as 4
  if (v === null) return false;
  // "35" for a percent question means 35%.
  if (spec.percent && !s.trim().endsWith("%")) v = v / 100;
  const tol = spec.tol ?? Math.max(1e-9, Math.abs(spec.value) * 1e-9);
  if (Math.abs(v - spec.value) > tol) return false;
  return !wrongForm(spec, s);
}

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : Math.abs(a));
const notLowest = (a: number, b: number) => !Number.isInteger(a) || !Number.isInteger(b) || gcd(a, b) !== 1;
function parseRatio(raw: string): [number, number] | null {
  const m = raw.replace(MINUS, "-").match(/^\s*(-?\d*\.?\d+)\s*(?::|to|\/)\s*(-?\d*\.?\d+)\s*$/i);
  return m ? [Number(m[1]), Number(m[2])] : null;
}
const sameRatio = ([a, b]: [number, number], [c, d]: [number, number]) => b !== 0 && Math.abs(a / b - c / d) < 1e-9;

/** True when the typed form is not the one the question asked for (fraction / scientific notation). */
export function wrongForm(spec: AnswerSpec, raw: string): boolean {
  if (spec.kind !== "number" || !spec.form) return false;
  if (spec.form === "sci") {
    const m = raw.trim().replace(MINUS, "-").match(/^(-?\d*\.?\d+)\s*(?:[x×*·]\s*10\s*\^|e)/i);
    return !m || Math.abs(Number(m[1])) < 1 || Math.abs(Number(m[1])) >= 10;
  }
  if (Number.isInteger(spec.value) && /^\s*-?\d+\s*$/.test(raw)) return false;
  return !raw.includes("/");
}

const NO_ROOTS = /^(none|no( real)? (roots?|solutions?|zeros?)|no solution|ø|∅)$/;

/** Parse a typed list of roots. null = unreadable; [] = "no real roots". */
export function parseRoots(raw: string): number[] | null {
  if (!norm(raw)) return null;
  const s = norm(raw).replace(/[{}]/g, " ").trim();
  if (!s || NO_ROOTS.test(s)) return []; // "{ }" is the empty set
  const out: number[] = [];
  for (let part of s.split(/\s*(?:,|;|\bor\b|\band\b)\s*/)) {
    part = part.replace(/^[a-z]\s*=\s*/, "").trim();
    if (!part) continue;
    const pm = part.match(/^(?:\+\/-|±)\s*(.+)$/);
    const v = parseNumber(pm ? pm[1] : part);
    if (v === null) return null;
    out.push(v);
    if (pm && v !== 0) out.push(-v);
  }
  return out.length ? out : null;
}

/** "all" = exactly the roots; "some" = only correct roots but at least one missing; "no" otherwise. */
export function rootsMatch(spec: { value: number[]; tol?: number }, raw: string): "all" | "some" | "no" {
  const got = parseRoots(raw);
  if (got === null) return "no";
  const tol = spec.tol ?? 1e-6;
  const want = [...new Set(spec.value.map((v) => Math.round(v / 1e-9) * 1e-9))];
  if (want.length === 0) return got.length === 0 ? "all" : "no";
  if (got.length === 0) return "no";
  if (!got.every((g) => want.some((w) => Math.abs(g - w) <= tol))) return "no";
  return want.every((w) => got.some((g) => Math.abs(g - w) <= tol)) ? "all" : "some";
}

/** Right value, wrong form — lets the UI say so instead of "not yet". */
export function rightValueWrongForm(spec: AnswerSpec, raw: string): boolean {
  if (spec.kind === "roots") return rootsMatch(spec, raw) === "some";
  if (spec.kind === "ratio") {
    const r = parseRatio(raw);
    return !!spec.lowest && !!r && sameRatio(r, spec.value) && notLowest(r[0], r[1]);
  }
  if (spec.kind === "expr") return sameExpr(spec.value, raw) && ((!!spec.simplified && notSimplified(spec.value, raw)) || (!!spec.factored && notFactored(spec.value, raw)));
  if (spec.kind !== "number" || !spec.form || !wrongForm(spec, raw)) return false;
  const v = parseNumber(raw);
  return v !== null && Math.abs(v - spec.value) <= Math.max(1e-6, Math.abs(spec.value) * 1e-6);
}

// ---------- algebraic expressions ----------
// A small recursive-descent parser (no eval): numbers, one-letter variables, + - * / ^, brackets,
// implicit multiplication ("3x", "2(x+1)", "xy"). Two expressions are equivalent when they agree at
// several fixed non-integer points — enough to tell polynomials and rational expressions apart here.

type Ev = (v: Record<string, number>) => number;

function parseExpr(raw: string): { f: Ev; vars: Set<string> } | null {
  const s = raw.replace(MINUS, "-").replace(/[×·]/g, "*").replace(/÷/g, "/").replace(/\*\*/g, "^").replace(/²/g, "^2").replace(/³/g, "^3");
  const found = s.match(/\d*\.?\d+|[a-zA-Z]|[-+*/^()]|\S/g);
  if (!found) return null;
  const toks: string[] = found;
  let i = 0;
  const vars = new Set<string>();
  const peek = () => toks[i];
  const isAtomStart = (t?: string) => !!t && (/^[\d.]/.test(t) || /^[a-zA-Z]$/.test(t) || t === "(");
  function expr(): Ev {
    let f = term();
    while (peek() === "+" || peek() === "-") {
      const op = toks[i++], a = f, b = term();
      f = op === "+" ? (v) => a(v) + b(v) : (v) => a(v) - b(v);
    }
    return f;
  }
  function term(): Ev {
    let f = unary();
    for (;;) {
      const t = peek();
      if (t === "*" || t === "/") { i++; const a = f, b = unary(); f = t === "*" ? (v) => a(v) * b(v) : (v) => a(v) / b(v); }
      else if (isAtomStart(t)) { const a = f, b = power(); f = (v) => a(v) * b(v); }
      else return f;
    }
  }
  function unary(): Ev {
    if (peek() === "-") { i++; const a = unary(); return (v) => -a(v); }
    if (peek() === "+") { i++; return unary(); }
    return power();
  }
  function power(): Ev {
    const base = atom();
    if (peek() === "^") { i++; const e = unary(); return (v) => Math.pow(base(v), e(v)); }
    return base;
  }
  function atom(): Ev {
    const t = toks[i++];
    if (t === undefined) throw new Error("end");
    if (t === "(") { const f = expr(); if (toks[i++] !== ")") throw new Error(")"); return f; }
    if (/^[\d.]/.test(t)) { const n = Number(t); if (!Number.isFinite(n)) throw new Error("num"); return () => n; }
    if (/^[a-zA-Z]$/.test(t)) { vars.add(t); return (v) => (t in v ? v[t] : NaN); }
    throw new Error("token " + t);
  }
  try {
    const f = expr();
    return i === toks.length ? { f, vars } : null;
  } catch {
    return null;
  }
}

/** Drop a leading "y =" / "x=" so a typed equation compares by its right side. */
const rhs = (s: string) => s.replace(/^\s*[a-zA-Z]\s*=\s*/, "");
const SAMPLES = [0.37, -1.29, 2.18, -0.61, 1.73, 3.07];

export function sameExpr(expected: string, typed: string): boolean {
  const A = parseExpr(rhs(expected)), B = parseExpr(rhs(typed));
  if (!A || !B) return false;
  for (const name of B.vars) if (!A.vars.has(name)) return false;
  const names = [...A.vars];
  for (let k = 0; k < SAMPLES.length; k++) {
    const pt = Object.fromEntries(names.map((n, j) => [n, SAMPLES[(k + j * 2) % SAMPLES.length] + j * 0.11]));
    const a = A.f(pt), b = B.f(pt);
    if (!Number.isFinite(a) || !Number.isFinite(b) || Math.abs(a - b) > 1e-7 * Math.max(1, Math.abs(a))) return false;
  }
  return true;
}

/** Number of top-level + / − terms (a leading sign and signs right after ^ * / ( don't split). */
function termCount(s: string): number {
  const t = rhs(s).replace(MINUS, "-").replace(/\s+/g, "");
  let depth = 0, n = 1;
  for (let k = 0; k < t.length; k++) {
    const ch = t[k];
    if (ch === "(") depth++;
    else if (ch === ")") depth--;
    else if ((ch === "+" || ch === "-") && depth === 0 && k > 0 && !/[\^*/(]/.test(t[k - 1])) n++;
  }
  return n;
}

/** Number of top-level bracket groups, e.g. 2 for "3(x+1)(x-2)" and 1 for "(x+3)^2". */
function bracketGroups(s: string): number {
  const t = rhs(s).replace(/\s+/g, "");
  let depth = 0, n = 0;
  for (const ch of t) { if (ch === "(") { if (depth === 0) n++; depth++; } else if (ch === ")") depth--; }
  return n;
}
/** Leading whole-number factor written in front of the brackets ("-3(x+1)" gives 3), or 1. */
const leadFactor = (s: string) => { const m = rhs(s).replace(MINUS, "-").replace(/\s+/g, "").match(/^-?(\d+)\*?\(/); return m ? Number(m[1]) : 1; };
function notFactored(expected: string, typed: string): boolean {
  if (termCount(typed) > 1 || bracketGroups(typed) < bracketGroups(expected)) return true;
  return leadFactor(expected) > 1 && leadFactor(typed) !== leadFactor(expected);
}

function notSimplified(expected: string, typed: string): boolean {
  if (/[()]/.test(rhs(typed)) && !/[()]/.test(rhs(expected))) return true;
  return termCount(typed) > termCount(expected);
}
