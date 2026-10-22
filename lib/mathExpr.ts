// Tiny, dependency-free math expression compiler.
// Supports + - * / ^, parentheses, unary minus, variables (e.g. x, a, t),
// constants (pi, e), and common functions. Compiles to RPN once, then
// evaluates fast for each point. No eval(), so it's safe for authored input.

type Token =
  | { t: "num"; v: number }
  | { t: "var"; v: string }
  | { t: "op"; v: string }
  | { t: "func"; v: string }
  | { t: "lparen" }
  | { t: "rparen" };

const FUNCS: Record<string, (x: number) => number> = {
  // trigonometric (radians)
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  sec: (x) => 1 / Math.cos(x),
  csc: (x) => 1 / Math.sin(x),
  cot: (x) => 1 / Math.tan(x),
  // inverse trigonometric
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
  asec: (x) => Math.acos(1 / x),
  acsc: (x) => Math.asin(1 / x),
  acot: (x) => Math.atan(1 / x),
  // hyperbolic
  sinh: Math.sinh,
  cosh: Math.cosh,
  tanh: Math.tanh,
  sech: (x) => 1 / Math.cosh(x),
  csch: (x) => 1 / Math.sinh(x),
  coth: (x) => 1 / Math.tanh(x),
  // inverse hyperbolic
  asinh: Math.asinh,
  acosh: Math.acosh,
  atanh: Math.atanh,
  asech: (x) => Math.acosh(1 / x),
  acsch: (x) => Math.asinh(1 / x),
  acoth: (x) => Math.atanh(1 / x),
  // "arc"-prefixed aliases (MathLive's virtual keyboard emits these)
  arcsin: Math.asin,
  arccos: Math.acos,
  arctan: Math.atan,
  arcsec: (x) => Math.acos(1 / x),
  arccsc: (x) => Math.asin(1 / x),
  arccot: (x) => Math.atan(1 / x),
  // exponential & logarithmic
  exp: Math.exp,
  ln: Math.log,
  log: (x) => Math.log10(x), // base-10; use ln for natural log
  // roots, powers, rounding
  sqrt: Math.sqrt,
  cbrt: Math.cbrt,
  abs: Math.abs,
  sign: Math.sign,
  floor: Math.floor,
  ceil: Math.ceil,
  round: Math.round,
  trunc: Math.trunc,
};

const CONSTS: Record<string, number> = { pi: Math.PI, e: Math.E };

const PREC: Record<string, number> = { "+": 2, "-": 2, "*": 3, "/": 3, "^": 4, neg: 5 };
const RIGHT = new Set(["^", "neg"]);

function tokenize(src: string): Token[] {
  const tokens: Token[] = [];
  const re = /\s*([0-9]*\.?[0-9]+|[a-zA-Z_][a-zA-Z0-9_]*|[+\-*/^()])/g;
  let m: RegExpExecArray | null;
  let last: Token | null = null;
  while ((m = re.exec(src))) {
    const s = m[1];
    if (/^[0-9.]/.test(s)) {
      last = { t: "num", v: parseFloat(s) };
    } else if (/^[a-zA-Z_]/.test(s)) {
      last = s in FUNCS ? { t: "func", v: s } : { t: "var", v: s };
    } else if (s === "(") {
      last = { t: "lparen" };
    } else if (s === ")") {
      last = { t: "rparen" };
    } else {
      // operator — detect unary minus
      if (
        s === "-" &&
        (last === null || last.t === "op" || last.t === "lparen")
      ) {
        last = { t: "op", v: "neg" };
      } else {
        last = { t: "op", v: s };
      }
    }
    tokens.push(last);
  }
  return tokens;
}

function toRPN(tokens: Token[]): Token[] {
  const out: Token[] = [];
  const stack: Token[] = [];
  for (const tk of tokens) {
    if (tk.t === "num" || tk.t === "var") {
      out.push(tk);
    } else if (tk.t === "func") {
      stack.push(tk);
    } else if (tk.t === "op") {
      while (stack.length) {
        const top = stack[stack.length - 1];
        if (top.t === "func") {
          out.push(stack.pop()!);
        } else if (
          top.t === "op" &&
          (PREC[top.v] > PREC[tk.v] ||
            (PREC[top.v] === PREC[tk.v] && !RIGHT.has(tk.v)))
        ) {
          out.push(stack.pop()!);
        } else break;
      }
      stack.push(tk);
    } else if (tk.t === "lparen") {
      stack.push(tk);
    } else if (tk.t === "rparen") {
      while (stack.length && stack[stack.length - 1].t !== "lparen") {
        out.push(stack.pop()!);
      }
      stack.pop(); // remove lparen
      if (stack.length && stack[stack.length - 1].t === "func") {
        out.push(stack.pop()!);
      }
    }
  }
  while (stack.length) out.push(stack.pop()!);
  return out;
}

export type CompiledExpr = (vars: Record<string, number>) => number;

/** Compile an expression string into a fast evaluator. Throws on parse errors. */
export function compileExpr(src: string): CompiledExpr {
  const rpn = toRPN(tokenize(src));
  return (vars: Record<string, number>) => {
    const st: number[] = [];
    for (const tk of rpn) {
      if (tk.t === "num") st.push(tk.v);
      else if (tk.t === "var") st.push(tk.v in CONSTS ? CONSTS[tk.v] : (vars[tk.v] ?? NaN));
      else if (tk.t === "func") st.push(FUNCS[tk.v](st.pop()!));
      else if (tk.t === "op") {
        if (tk.v === "neg") st.push(-st.pop()!);
        else {
          const b = st.pop()!;
          const a = st.pop()!;
          st.push(
            tk.v === "+" ? a + b : tk.v === "-" ? a - b : tk.v === "*" ? a * b : tk.v === "/" ? a / b : Math.pow(a, b),
          );
        }
      }
    }
    return st.length === 1 ? st[0] : NaN;
  };
}

/** Safe compile that never throws — returns a constant-NaN evaluator on error. */
export function safeCompile(src: string): CompiledExpr {
  try {
    const fn = compileExpr(src);
    // smoke-test
    fn({ x: 1, a: 1, t: 0 });
    return fn;
  } catch {
    return () => NaN;
  }
}

// Index of the "}" matching the "{" at `open`, or -1.
function matchBrace(s: string, open: number): number {
  let d = 0;
  for (let i = open; i < s.length; i++) {
    if (s[i] === "{") d++;
    else if (s[i] === "}" && --d === 0) return i;
  }
  return -1;
}

// Split on `sep` outside (), {} nesting.
function splitTop(s: string, sep: string): string[] {
  const parts: string[] = [];
  let d = 0, from = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "(" || c === "{") d++;
    else if (c === ")" || c === "}") d--;
    else if (c === sep && d === 0) { parts.push(s.slice(from, i)); from = i + 1; }
  }
  parts.push(s.slice(from));
  return parts;
}

/** A condition like "x<0", "0<=x<2" or "x=3" (chained comparisons allowed). */
function compileCondition(src: string): CompiledExpr {
  const pieces = src.replace(/≤/g, "<=").replace(/≥/g, ">=").split(/(<=|>=|==|<|>|=)/);
  const operands = pieces.filter((_, i) => i % 2 === 0).map((p) => safeCompile(p));
  const ops = pieces.filter((_, i) => i % 2 === 1);
  if (ops.length === 0) return () => NaN;
  return (vars) => {
    let left = operands[0](vars);
    for (let i = 0; i < ops.length; i++) {
      const right = operands[i + 1](vars);
      const op = ops[i];
      const ok = op === "<" ? left < right : op === "<=" ? left <= right : op === ">" ? left > right : op === ">=" ? left >= right : Math.abs(left - right) < 1e-9;
      if (!ok) return 0;
      left = right;
    }
    return 1;
  };
}

/**
 * Compile a piecewise function written Desmos-style, or null if `src` has no
 * braces. Accepts either
 *   y = { x<0: -x, 0<=x<2: x^2, 4 }     branches "condition: expression"; a branch
 *                                        with no condition is the "otherwise" case
 *   y = x^2 { 1<x<=3 }                  an expression restricted to where the
 *                                        condition holds
 * The "y =" is optional. Where no branch applies the value is NaN (a gap).
 */
export function compilePiecewise(src: string): CompiledExpr | null {
  if (!src.includes("{")) return null;
  const s = src.trim().replace(/^y\s*=(?!=)\s*/, "");
  const open = s.indexOf("{");
  if (open < 0) return null;
  const close = matchBrace(s, open);
  if (close < 0) return () => NaN;
  const head = s.slice(0, open).trim();
  const body = s.slice(open + 1, close);
  if (s.slice(close + 1).trim() !== "") return () => NaN;

  if (head === "") {
    const branches = splitTop(body, ",").map((b) => {
      const colon = splitTop(b, ":");
      return colon.length >= 2
        ? { cond: compileCondition(colon[0]), val: safeCompile(colon.slice(1).join(":")) }
        : { cond: null, val: safeCompile(colon[0]) };
    });
    return (vars) => {
      for (const b of branches) {
        if (b.cond === null) return b.val(vars);
        if (b.cond(vars) === 1) return b.val(vars);
      }
      return NaN;
    };
  }
  const val = safeCompile(head), cond = compileCondition(body);
  return (vars) => (cond(vars) === 1 ? val(vars) : NaN);
}

/**
 * Build a readable equation with the current parameter value(s) substituted in,
 * e.g. liveEquation("x^2+k", "k", 2) → "y = x² + 2". Handles negatives (sign
 * resolution), powers (²/³), and multiplication (·). Used by the interactive and
 * animated graph components so students can read the equation change live.
 */
function prettyEquation(expr: string, subs: Array<[string, number]>): string {
  let s = expr;
  for (const [param, value] of subs) {
    if (!param) continue;
    const v = Math.round(value * 10) / 10;
    const vs = Number.isInteger(v) ? String(v) : v.toFixed(1);
    s = s.replace(new RegExp("\\b" + param + "\\b", "g"), v < 0 ? "(" + vs + ")" : vs);
  }
  s = s.replace(/\*\*/g, "^").replace(/\*/g, "·").replace(/\^2\b/g, "²").replace(/\^3\b/g, "³");
  s = s
    .replace(/\+\s*\((-?[\d.]+)\)/g, (_m, n: string) => (n.startsWith("-") ? " − " + n.slice(1) : " + " + n))
    .replace(/-\s*\((-?[\d.]+)\)/g, (_m, n: string) => (n.startsWith("-") ? " + " + n.slice(1) : " − " + n))
    .replace(/\(\s*(-?[\d.]+)\s*\)/g, "$1")
    .replace(/(^|[^\d.])1·/g, "$1")
    .replace(/(^|[^\d.])-1·/g, "$1−")
    .replace(/\+/g, " + ").replace(/(?<![eE^])-(?=\S)/g, " − ")
    .replace(/\(\s*x\s*[+−-]\s*0(?:\.0)?\s*\)/g, "x") // (x − 0) → x
    .replace(/\s*[+−-]\s*0(?:\.0)?(?![\d.])/g, "")    // drop "+ 0" / "− 0" terms
    .replace(/\s+/g, " ").trim();
  return "y = " + s;
}
export function liveEquation(expr: string, param: string, value: number): string {
  return prettyEquation(expr, [[param, value]]);
}
export function liveEquationMulti(expr: string, subs: Array<[string, number]>): string {
  return prettyEquation(expr, subs);
}
