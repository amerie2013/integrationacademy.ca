// Reads a typed linear rule such as "d = 4t + 6", "d - 4 = 2(t - 3)",
// "3t + d = 12" or "d = 24 {4 < t < 7}" into slope, intercept and an optional
// domain restriction. Linear-only on purpose: anything with t², td or 1/t is
// rejected with a message a Grade 9 student can act on.
//
// The variable letters are configurable (default t → d) so the same reader
// works for any context.

export type Rule = {
  m: number;
  b: number;
  lo: number; // -Infinity when unrestricted
  hi: number; // +Infinity when unrestricted
  hasDomain: boolean;
};

export type RuleParse = { ok: true; rule: Rule } | { ok: false; error: string };
export type Vars = { x: string; y: string }; // x = independent, y = dependent

type Lin = { x: number; y: number; c: number };
const isConst = (l: Lin) => Math.abs(l.x) < 1e-12 && Math.abs(l.y) < 1e-12;
const add = (a: Lin, b: Lin, s = 1): Lin => ({ x: a.x + s * b.x, y: a.y + s * b.y, c: a.c + s * b.c });
const scale = (a: Lin, k: number): Lin => ({ x: a.x * k, y: a.y * k, c: a.c * k });

class NotLinear extends Error {}

function tokenize(src: string, v: Vars): string[] {
  const out: string[] = [];
  let i = 0;
  while (i < src.length) {
    const ch = src[i];
    if (/\s/.test(ch)) { i++; continue; }
    const num = /^(\d+\.?\d*|\.\d+)/.exec(src.slice(i));
    if (num) { out.push(num[1]); i += num[1].length; continue; }
    if (ch === v.x) { out.push("X"); i++; continue; }
    if (ch === v.y) { out.push("Y"); i++; continue; }
    if ("+-*/^()".includes(ch)) { out.push(ch); i++; continue; }
    if (/[a-z]/i.test(ch)) throw new Error(`Use only ${v.y} and ${v.x} — I don't know what “${ch}” is.`);
    throw new Error(`I don't understand “${ch}”.`);
  }
  return out;
}

function parseSide(tokens: string[], v: Vars): Lin {
  let p = 0;
  const peek = () => tokens[p];
  const next = () => tokens[p++];

  const expr = (): Lin => {
    let r = term();
    while (peek() === "+" || peek() === "-") {
      const op = next();
      r = add(r, term(), op === "+" ? 1 : -1);
    }
    return r;
  };
  const term = (): Lin => {
    let r = unary();
    for (;;) {
      const t = peek();
      if (t === "*" || t === "/") {
        next();
        const q = unary();
        r = t === "*" ? mul(r, q) : div(r, q);
      } else if (t !== undefined && (/^[\d.]/.test(t) || t === "X" || t === "Y" || t === "(")) {
        // implicit multiplication, same precedence as * so 1/2t = (1/2)t
        r = mul(r, unary());
      } else break;
    }
    return r;
  };
  const unary = (): Lin => {
    if (peek() === "-") { next(); return scale(unary(), -1); }
    if (peek() === "+") { next(); return unary(); }
    return power();
  };
  const power = (): Lin => {
    const base = primary();
    if (peek() !== "^") return base;
    next();
    const e = unary();
    if (!isConst(e)) throw new NotLinear();
    if (isConst(base)) return { x: 0, y: 0, c: Math.pow(base.c, e.c) };
    if (e.c === 1) return base;
    throw new NotLinear();
  };
  const primary = (): Lin => {
    const t = next();
    if (t === undefined) throw new Error("The rule ends too early.");
    if (t === "X") return { x: 1, y: 0, c: 0 };
    if (t === "Y") return { x: 0, y: 1, c: 0 };
    if (t === "(") {
      const r = expr();
      if (next() !== ")") throw new Error("A bracket is not closed.");
      return r;
    }
    if (/^[\d.]/.test(t)) return { x: 0, y: 0, c: parseFloat(t) };
    throw new Error(`Unexpected “${t}”.`);
  };
  const mul = (a: Lin, b: Lin): Lin => {
    if (isConst(a)) return scale(b, a.c);
    if (isConst(b)) return scale(a, b.c);
    throw new NotLinear();
  };
  const div = (a: Lin, b: Lin): Lin => {
    if (!isConst(b)) throw new NotLinear();
    if (b.c === 0) throw new Error("Division by zero.");
    return scale(a, 1 / b.c);
  };

  const r = expr();
  if (p < tokens.length) throw new Error(`Unexpected “${tokens[p] === "X" ? v.x : tokens[p] === "Y" ? v.y : tokens[p]}”.`);
  return r;
}

function parseDomain(src: string, v: Vars): { lo: number; hi: number } {
  const s = src.replace(/\s+/g, "").replace(/≤/g, "<=").replace(/≥/g, ">=");
  const n = String.raw`(-?\d*\.?\d+(?:/\d+)?)`;
  const X = v.x;
  const val = (t: string) => {
    const [a, b] = t.split("/");
    return b === undefined ? parseFloat(a) : parseFloat(a) / parseFloat(b);
  };
  const tries: [RegExp, (m: RegExpExecArray) => { lo: number; hi: number }][] = [
    [new RegExp(`^${n}<=?${X}<=?${n}$`), (m) => ({ lo: val(m[1]), hi: val(m[2]) })],
    [new RegExp(`^${n}>=?${X}>=?${n}$`), (m) => ({ lo: val(m[2]), hi: val(m[1]) })],
    [new RegExp(`^${X}>=?${n}$`), (m) => ({ lo: val(m[1]), hi: Infinity })],
    [new RegExp(`^${X}<=?${n}$`), (m) => ({ lo: -Infinity, hi: val(m[1]) })],
    [new RegExp(`^${n}<=?${X}$`), (m) => ({ lo: val(m[1]), hi: Infinity })],
    [new RegExp(`^${n}>=?${X}$`), (m) => ({ lo: -Infinity, hi: val(m[1]) })],
  ];
  for (const [re, f] of tries) {
    const m = re.exec(s);
    if (m) return f(m);
  }
  throw new Error(`Write a time window like {2 < ${X} < 7}, {${X} > 3} or {${X} < 5}.`);
}

export function parseRule(input: string, v: Vars = { x: "t", y: "d" }): RuleParse {
  let src = input.trim().replace(/[−–]/g, "-").replace(/·|×/g, "*");
  if (!src) return { ok: false, error: "" };
  let lo = -Infinity, hi = Infinity, hasDomain = false;
  const brace = /\{([^}]*)\}\s*$/.exec(src);
  if (brace) {
    try {
      ({ lo, hi } = parseDomain(brace[1], v));
    } catch (e) {
      return { ok: false, error: (e as Error).message };
    }
    if (!(lo < hi)) return { ok: false, error: "That window is empty — the left number must be smaller." };
    hasDomain = true;
    src = src.slice(0, brace.index).trim();
  }
  if (src.includes("{") || src.includes("}"))
    return { ok: false, error: `Put the window at the end, like ${v.y} = 3${v.x} {0 < ${v.x} < 4}.` };

  const sides = src.split("=");
  if (sides.length === 1) sides.unshift(v.y);
  if (sides.length !== 2) return { ok: false, error: "Use exactly one “=” sign." };
  try {
    const L = parseSide(tokenize(sides[0], v), v);
    const R = parseSide(tokenize(sides[1], v), v);
    const d = add(L, R, -1); // d.x·x + d.y·y + d.c = 0
    if (Math.abs(d.y) < 1e-12) {
      if (Math.abs(d.x) < 1e-12) return { ok: false, error: `There is no ${v.y} or ${v.x} left — that isn't a rule.` };
      return { ok: false, error: `Write the rule as ${v.y} = … so it gives a position for every time.` };
    }
    const m = -d.x / d.y;
    const b = -d.c / d.y;
    if (!isFinite(m) || !isFinite(b)) return { ok: false, error: "That rule can't be used." };
    return { ok: true, rule: { m, b, lo, hi, hasDomain } };
  } catch (e) {
    if (e instanceof NotLinear) return { ok: false, error: `Only linear rules here — no ${v.x}², ${v.x}${v.y} or 1/${v.x}.` };
    return { ok: false, error: (e as Error).message };
  }
}

function gcd(a: number, b: number): number { return b ? gcd(b, a % b) : a; }

/** 0.5 → "1/2", -0.75 → "−3/4", 2 → "2". Falls back to 2 decimals. */
export function niceNumber(v: number): string {
  const sign = v < 0 ? "−" : "";
  const a = Math.abs(v);
  for (let den = 1; den <= 12; den++) {
    const num = Math.round(a * den);
    if (Math.abs(num / den - a) < 1e-9) {
      const g = gcd(num, den) || 1;
      return den / g === 1 ? `${sign}${num / g}` : `${sign}${num / g}/${den / g}`;
    }
  }
  return `${sign}${a.toFixed(2).replace(/\.?0+$/, "")}`;
}

/** Short decimal for positions: 36 → "36", 22.5 → "22.5", 7.333 → "7.33". */
export function short(v: number): string {
  const r = Math.round(v * 100) / 100;
  return (Object.is(r, -0) ? 0 : r).toString().replace("-", "−");
}
