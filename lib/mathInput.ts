// Bridge between the MathLive math-field and our own expression parser
// (lib/mathExpr). The math-field round-trips through ASCII-math, which is close
// to our syntax but uses |x| for absolute value and implicit multiplication
// (e.g. "2x", "ax"). This module normalises that back into the explicit form
// the parser expects: "2*x", "a*x", "abs(x)".

// Functions our parser understands (kept in sync with lib/mathExpr FUNCS).
// Kept in sync with lib/mathExpr FUNCS. All names are letters only and ≤6 chars
// so the greedy splitter below (which scans up to 6-letter runs) finds them.
const FUNCS = new Set([
  "sin", "cos", "tan", "sec", "csc", "cot",
  "asin", "acos", "atan", "asec", "acsc", "acot",
  "arcsin", "arccos", "arctan", "arcsec", "arccsc", "arccot",
  "sinh", "cosh", "tanh", "sech", "csch", "coth",
  "asinh", "acosh", "atanh", "asech", "acsch", "acoth",
  "exp", "ln", "log", "sqrt", "cbrt",
  "abs", "sign", "floor", "ceil", "round", "trunc",
]);
const CONSTS = new Set(["pi"]); // "e" is a single letter, handled as a variable

type Tk =
  | { type: "num" | "name" | "op" | "lp" | "rp" | "comma" | "eq" | "other"; v: string }
  | { type: "func" | "const"; v: string };

// Split a run of letters greedily into known functions/constants and otherwise
// single-letter variables, so "ax" -> a, x and "pisin" -> pi, sin.
function splitLetters(run: string): Tk[] {
  const out: Tk[] = [];
  let i = 0;
  while (i < run.length) {
    let matched = "";
    for (let len = Math.min(6, run.length - i); len >= 2; len--) {
      const w = run.slice(i, i + len);
      if (FUNCS.has(w) || CONSTS.has(w)) { matched = w; break; }
    }
    if (matched) {
      out.push({ type: FUNCS.has(matched) ? "func" : "const", v: matched });
      i += matched.length;
    } else {
      out.push({ type: "name", v: run[i] });
      i += 1;
    }
  }
  return out;
}

function tokenize(s: string): Tk[] {
  const out: Tk[] = [];
  let i = 0;
  while (i < s.length) {
    const c = s[i];
    if (/\s/.test(c)) { i++; continue; }
    if (/[0-9.]/.test(c)) {
      let j = i + 1;
      while (j < s.length && /[0-9.]/.test(s[j])) j++;
      out.push({ type: "num", v: s.slice(i, j) }); i = j; continue;
    }
    if (/[a-zA-Z]/.test(c)) {
      let j = i + 1;
      while (j < s.length && /[a-zA-Z]/.test(s[j])) j++;
      out.push(...splitLetters(s.slice(i, j))); i = j; continue;
    }
    if (c === "(") out.push({ type: "lp", v: c });
    else if (c === ")") out.push({ type: "rp", v: c });
    else if (c === ",") out.push({ type: "comma", v: c });
    else if (c === "=") out.push({ type: "eq", v: c });
    else if ("+-*/^".includes(c)) out.push({ type: "op", v: c });
    else out.push({ type: "other", v: c });
    i++;
  }
  return out;
}

const isValueEnd = (t: Tk) => t.type === "num" || t.type === "name" || t.type === "const" || t.type === "rp";
const isValueStart = (t: Tk) => t.type === "num" || t.type === "name" || t.type === "const" || t.type === "func" || t.type === "lp";

/** Convert the math-field's ASCII-math output into our parser's syntax. */
export function asciiToExpr(input: string): string {
  if (!input) return "";
  let s = input;
  // Normalise unicode operators MathLive may emit.
  s = s.replace(/[·⋅×∗*]/g, "*").replace(/÷/g, "/").replace(/[−–—]/g, "-");
  // Absolute-value bars |...| -> abs(...). Repeat for multiple pairs.
  let prev: string;
  do { prev = s; s = s.replace(/\|([^|]*)\|/, "abs($1)"); } while (s !== prev);
  // Braces are only ever grouping here.
  s = s.replace(/[{[]/g, "(").replace(/[}\]]/g, ")");

  const tks = tokenize(s);
  let out = "";
  for (let k = 0; k < tks.length; k++) {
    const t = tks[k];
    if (k > 0 && isValueEnd(tks[k - 1]) && isValueStart(t)) out += "*";
    out += t.v;
  }
  return out;
}
