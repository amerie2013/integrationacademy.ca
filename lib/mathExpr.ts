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
