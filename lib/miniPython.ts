// A small, safe Python-subset interpreter for lesson code explorers. Runs entirely in the browser
// (no eval) and yields one event per executed line so a widget can step through a program.
//
// Supported: int/float/str/bool/None/list values; = and += -= *= /= //= %=; arithmetic + - * / // % **;
// comparisons (chained, e.g. 0 < x <= 5); and / or / not; if / elif / else; while; for x in range(...)
// and for x in <list>; break / continue / pass; def f(params): ... return; print(..., sep=, end=);
// builtins abs round int float str len min max sum range; list literals, indexing, .append().
// Errors are reported like Python (NameError, ZeroDivisionError, SyntaxError…) with a line number.

export type PyVal = number | PyFloat | string | boolean | null | PyVal[] | PyFunc;
export class PyFloat { v: number; constructor(v: number) { this.v = v; } }
type PyFunc = { kind: "func"; name: string; params: string[]; body: Stmt[] };

export class PyError extends Error {
  kind: string; line: number;
  constructor(kind: string, message: string, line: number) { super(`${kind}: ${message}`); this.kind = kind; this.line = line; }
}

// ---------------------------------------------------------------- tokens
type Tok = { t: "num" | "str" | "name" | "op" | "kw"; v: string; float?: boolean };
const KW = new Set(["if", "elif", "else", "while", "for", "in", "def", "return", "and", "or", "not", "True", "False", "None", "break", "continue", "pass"]);

function tokenize(src: string, line: number): Tok[] {
  const out: Tok[] = [];
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === " " || c === "\t") { i++; continue; }
    if (c === "#") break;
    const num = /^(\d+\.\d*|\.\d+|\d+)([eE][+-]?\d+)?/.exec(src.slice(i));
    if (num) { out.push({ t: "num", v: num[0], float: /[.eE]/.test(num[0]) }); i += num[0].length; continue; }
    if (c === '"' || c === "'") {
      let j = i + 1, s = "";
      while (j < src.length && src[j] !== c) { if (src[j] === "\\" && j + 1 < src.length) { j++; s += src[j] === "n" ? "\n" : src[j]; } else s += src[j]; j++; }
      if (j >= src.length) throw new PyError("SyntaxError", "unterminated string", line);
      out.push({ t: "str", v: s }); i = j + 1; continue;
    }
    const nm = /^[A-Za-z_]\w*/.exec(src.slice(i));
    if (nm) { out.push({ t: KW.has(nm[0]) ? "kw" : "name", v: nm[0] }); i += nm[0].length; continue; }
    const op = /^(\*\*=|\/\/=|\*\*|\/\/|==|!=|<=|>=|\+=|-=|\*=|\/=|%=|[-+*/%<>=(),:\[\].])/.exec(src.slice(i));
    if (op) { out.push({ t: "op", v: op[0] }); i += op[0].length; continue; }
    throw new PyError("SyntaxError", `invalid character '${c}'`, line);
  }
  return out;
}

// ---------------------------------------------------------------- AST
type Expr =
  | { k: "num"; v: number; float: boolean } | { k: "str"; v: string } | { k: "const"; v: PyVal }
  | { k: "name"; v: string } | { k: "list"; items: Expr[] } | { k: "index"; obj: Expr; idx: Expr }
  | { k: "bin"; op: string; a: Expr; b: Expr } | { k: "un"; op: string; a: Expr }
  | { k: "cmp"; ops: string[]; items: Expr[] } | { k: "bool"; op: "and" | "or"; a: Expr; b: Expr }
  | { k: "call"; fn: Expr; args: Expr[]; kw: Record<string, Expr> } | { k: "attr"; obj: Expr; name: string };
type Stmt = { line: number } & (
  | { k: "expr"; e: Expr } | { k: "assign"; target: Expr; op: string; e: Expr }
  | { k: "if"; branches: { cond: Expr | null; body: Stmt[] }[] } | { k: "while"; cond: Expr; body: Stmt[] }
  | { k: "for"; v: string; iter: Expr; body: Stmt[] } | { k: "def"; name: string; params: string[]; body: Stmt[] }
  | { k: "return"; e: Expr | null } | { k: "break" } | { k: "continue" } | { k: "pass" });

class ExprParser {
  i = 0;
  private t: Tok[]; private line: number;
  constructor(t: Tok[], line: number) { this.t = t; this.line = line; }
  peek(v?: string) { const x = this.t[this.i]; return v === undefined ? x : x && x.v === v && (x.t === "op" || x.t === "kw") ? x : undefined; }
  eat(v: string) { if (!this.peek(v)) throw new PyError("SyntaxError", `expected '${v}'`, this.line); return this.t[this.i++]; }
  done() { return this.i >= this.t.length; }
  expr(): Expr { return this.or(); }
  or(): Expr { let a = this.and(); while (this.peek("or")) { this.i++; a = { k: "bool", op: "or", a, b: this.and() }; } return a; }
  and(): Expr { let a = this.not(); while (this.peek("and")) { this.i++; a = { k: "bool", op: "and", a, b: this.not() }; } return a; }
  not(): Expr { if (this.peek("not")) { this.i++; return { k: "un", op: "not", a: this.not() }; } return this.cmp(); }
  cmp(): Expr {
    const first = this.sum();
    const ops: string[] = [], items = [first];
    while (this.peek() && ["<", ">", "<=", ">=", "==", "!="].includes(this.peek()!.v) && this.peek()!.t === "op") { ops.push(this.t[this.i++].v); items.push(this.sum()); }
    return ops.length ? { k: "cmp", ops, items } : first;
  }
  sum(): Expr { let a = this.term(); while (this.peek("+") || this.peek("-")) { const op = this.t[this.i++].v; a = { k: "bin", op, a, b: this.term() }; } return a; }
  term(): Expr { let a = this.unary(); while (this.peek("*") || this.peek("/") || this.peek("//") || this.peek("%")) { const op = this.t[this.i++].v; a = { k: "bin", op, a, b: this.unary() }; } return a; }
  unary(): Expr { if (this.peek("-") || this.peek("+")) { const op = this.t[this.i++].v; return { k: "un", op, a: this.unary() }; } return this.power(); }
  power(): Expr { const a = this.postfix(); if (this.peek("**")) { this.i++; return { k: "bin", op: "**", a, b: this.unary() }; } return a; }
  postfix(): Expr {
    let a = this.atom();
    for (;;) {
      if (this.peek("(")) {
        this.i++;
        const args: Expr[] = [], kw: Record<string, Expr> = {};
        while (!this.peek(")")) {
          const x = this.t[this.i], y = this.t[this.i + 1];
          if (x?.t === "name" && y?.v === "=" && y.t === "op") { this.i += 2; kw[x.v] = this.expr(); } else args.push(this.expr());
          if (!this.peek(")")) this.eat(",");
        }
        this.eat(")");
        a = { k: "call", fn: a, args, kw };
      } else if (this.peek("[")) { this.i++; const idx = this.expr(); this.eat("]"); a = { k: "index", obj: a, idx }; }
      else if (this.peek(".")) { this.i++; const n = this.t[this.i++]; if (!n || n.t !== "name") throw new PyError("SyntaxError", "expected a name after '.'", this.line); a = { k: "attr", obj: a, name: n.v }; }
      else return a;
    }
  }
  atom(): Expr {
    const x = this.t[this.i++];
    if (!x) throw new PyError("SyntaxError", "unexpected end of line", this.line);
    if (x.t === "num") return { k: "num", v: Number(x.v), float: !!x.float };
    if (x.t === "str") return { k: "str", v: x.v };
    if (x.t === "name") return { k: "name", v: x.v };
    if (x.t === "kw" && x.v === "True") return { k: "const", v: true };
    if (x.t === "kw" && x.v === "False") return { k: "const", v: false };
    if (x.t === "kw" && x.v === "None") return { k: "const", v: null };
    if (x.v === "(") { const e = this.expr(); this.eat(")"); return e; }
    if (x.v === "[") { const items: Expr[] = []; while (!this.peek("]")) { items.push(this.expr()); if (!this.peek("]")) this.eat(","); } this.eat("]"); return { k: "list", items }; }
    throw new PyError("SyntaxError", `unexpected '${x.v}'`, this.line);
  }
}

export function parse(code: string): Stmt[] {
  const raw = code.replace(/\r/g, "").split("\n").map((s, n) => ({ n: n + 1, text: s.replace(/\t/g, "    ") }));
  const lines = raw.filter((l) => l.text.trim() && !l.text.trim().startsWith("#")).map((l) => ({ n: l.n, ind: l.text.length - l.text.trimStart().length, text: l.text.trim() }));
  let p = 0;
  function block(ind: number): Stmt[] {
    const out: Stmt[] = [];
    while (p < lines.length && lines[p].ind >= ind) {
      const L = lines[p];
      if (L.ind > ind) throw new PyError("IndentationError", "unexpected indent", L.n);
      out.push(stmt());
    }
    return out;
  }
  function body(headerInd: number, n: number): Stmt[] {
    if (p >= lines.length || lines[p].ind <= headerInd) throw new PyError("IndentationError", "expected an indented block", n);
    return block(lines[p].ind);
  }
  function header(text: string, n: number, kw: string) {
    if (!text.endsWith(":")) throw new PyError("SyntaxError", `expected ':' after ${kw}`, n);
    return tokenize(text.slice(kw.length, -1), n);
  }
  function stmt(): Stmt {
    const L = lines[p++], n = L.n, t = L.text;
    const word = /^[A-Za-z_]\w*/.exec(t)?.[0];
    if (word === "if") {
      const branches: { cond: Expr | null; body: Stmt[] }[] = [{ cond: full(header(t, n, "if"), n), body: body(L.ind, n) }];
      while (p < lines.length && lines[p].ind === L.ind && /^(elif\b|else\s*:)/.test(lines[p].text)) {
        const M = lines[p++];
        if (M.text.startsWith("elif")) branches.push({ cond: full(header(M.text, M.n, "elif"), M.n), body: body(M.ind, M.n) });
        else { branches.push({ cond: null, body: body(M.ind, M.n) }); break; }
      }
      return { line: n, k: "if", branches };
    }
    if (word === "elif" || word === "else") throw new PyError("SyntaxError", `'${word}' without a matching 'if'`, n);
    if (word === "while") return { line: n, k: "while", cond: full(header(t, n, "while"), n), body: body(L.ind, n) };
    if (word === "for") {
      const toks = header(t, n, "for");
      if (toks[0]?.t !== "name" || toks[1]?.v !== "in") throw new PyError("SyntaxError", "use: for name in range(...):", n);
      return { line: n, k: "for", v: toks[0].v, iter: full(toks.slice(2), n), body: body(L.ind, n) };
    }
    if (word === "def") {
      const m = /^def\s+([A-Za-z_]\w*)\s*\(([^)]*)\)\s*:$/.exec(t);
      if (!m) throw new PyError("SyntaxError", "use: def name(parameters):", n);
      return { line: n, k: "def", name: m[1], params: m[2].split(",").map((s) => s.trim()).filter(Boolean), body: body(L.ind, n) };
    }
    if (word === "return") { const toks = tokenize(t.slice(6), n); return { line: n, k: "return", e: toks.length ? full(toks, n) : null }; }
    if (t === "break" || t === "continue" || t === "pass") return { line: n, k: t } as Stmt;
    const toks = tokenize(t, n);
    let depth = 0;
    const at = toks.findIndex((x) => {
      if (x.t === "op" && (x.v === "(" || x.v === "[")) depth++;
      if (x.t === "op" && (x.v === ")" || x.v === "]")) depth--;
      return depth === 0 && x.t === "op" && ["=", "+=", "-=", "*=", "/=", "//=", "%=", "**="].includes(x.v);
    });
    if (at > 0) {
      const target = full(toks.slice(0, at), n);
      if (target.k !== "name" && target.k !== "index") throw new PyError("SyntaxError", "cannot assign to this", n);
      return { line: n, k: "assign", target, op: toks[at].v, e: full(toks.slice(at + 1), n) };
    }
    return { line: n, k: "expr", e: full(toks, n) };
  }
  function full(toks: Tok[], n: number): Expr {
    if (!toks.length) throw new PyError("SyntaxError", "missing expression", n);
    const ps = new ExprParser(toks, n);
    const e = ps.expr();
    if (!ps.done()) throw new PyError("SyntaxError", `unexpected '${toks[ps.i].v}'`, n);
    return e;
  }
  return block(0);
}

// ---------------------------------------------------------------- values
const isNum = (v: PyVal): v is number | PyFloat | boolean => typeof v === "number" || v instanceof PyFloat || typeof v === "boolean";
const nv = (v: PyVal) => (v instanceof PyFloat ? v.v : Number(v));
const isFloat = (v: PyVal) => v instanceof PyFloat;
const mk = (x: number, float: boolean): PyVal => (float ? new PyFloat(x) : x);
export const typeName = (v: PyVal) => (v === null ? "NoneType" : typeof v === "boolean" ? "bool" : typeof v === "number" ? "int" : v instanceof PyFloat ? "float" : typeof v === "string" ? "str" : Array.isArray(v) ? "list" : "function");

function floatRepr(x: number) {
  if (!Number.isFinite(x)) return x > 0 ? "inf" : x < 0 ? "-inf" : "nan";
  if (Number.isInteger(x) && Math.abs(x) < 1e16) return x.toFixed(1);
  let s = String(x);
  if (/e/.test(s)) s = s.replace(/e\+?(-?)(\d)$/, "e$10$2").replace(/e\+/, "e+");
  return s;
}
export function repr(v: PyVal, inList = false): string {
  if (v === null) return "None";
  if (typeof v === "boolean") return v ? "True" : "False";
  if (typeof v === "number") return String(v);
  if (v instanceof PyFloat) return floatRepr(v.v);
  if (typeof v === "string") return inList ? `'${v}'` : v;
  if (Array.isArray(v)) return `[${v.map((x) => repr(x, true)).join(", ")}]`;
  return `<function ${v.name}>`;
}
const truthy = (v: PyVal) => !(v === null || v === false || v === 0 || v === "" || (v instanceof PyFloat && v.v === 0) || (Array.isArray(v) && !v.length));

// ---------------------------------------------------------------- run
export type Frame = { name: string; vars: Map<string, PyVal> };
export type Step = { line: number; vars: [string, string][]; output: string; scope: string };
class Signal { kind: "break" | "continue" | "return"; value: PyVal; constructor(kind: "break" | "continue" | "return", value: PyVal = null) { this.kind = kind; this.value = value; } }

export function* run(code: string, maxSteps = 5000): Generator<Step, { output: string; error?: PyError; vars: [string, string][] }, void> {
  let output = "";
  const globals: Frame = { name: "main", vars: new Map() };
  const stack: Frame[] = [globals];
  let steps = 0, depth = 0;
  const top = () => stack[stack.length - 1];
  const snapshot = (line: number): Step => ({
    line, output, scope: top().name,
    vars: [...top().vars].filter(([, v]) => !(v && typeof v === "object" && !Array.isArray(v) && !(v instanceof PyFloat))).map(([k, v]) => [k, typeof v === "string" ? `"${v}"` : repr(v)]),
  });
  let line = 0;

  const err = (kind: string, msg: string) => new PyError(kind, msg, line);
  function lookup(name: string): PyVal {
    if (top().vars.has(name)) return top().vars.get(name)!;
    if (globals.vars.has(name)) return globals.vars.get(name)!;
    if (BUILTINS.has(name)) return { kind: "func", name, params: [], body: [] };
    throw err("NameError", `name '${name}' is not defined`);
  }
  function arith(op: string, a: PyVal, b: PyVal): PyVal {
    if (op === "+" && typeof a === "string" && typeof b === "string") return a + b;
    if (op === "+" && Array.isArray(a) && Array.isArray(b)) return [...a, ...b];
    if (op === "*" && typeof a === "string" && typeof b === "number") return a.repeat(Math.max(0, b));
    if (!isNum(a) || !isNum(b)) throw err("TypeError", `unsupported operand type(s) for ${op}: '${typeName(a)}' and '${typeName(b)}'`);
    const x = nv(a), y = nv(b), f = isFloat(a) || isFloat(b);
    switch (op) {
      case "+": return mk(x + y, f);
      case "-": return mk(x - y, f);
      case "*": return mk(x * y, f);
      case "/": if (y === 0) throw err("ZeroDivisionError", "division by zero"); return new PyFloat(x / y);
      case "//": if (y === 0) throw err("ZeroDivisionError", "integer division by zero"); return mk(Math.floor(x / y), f);
      case "%": if (y === 0) throw err("ZeroDivisionError", "integer modulo by zero"); return mk(x - y * Math.floor(x / y), f);
      case "**": { const r = Math.pow(x, y); return mk(r, f || y < 0); }
    }
    throw err("SyntaxError", `unknown operator ${op}`);
  }
  function compare(op: string, a: PyVal, b: PyVal): boolean {
    if (op === "==") return isNum(a) && isNum(b) ? nv(a) === nv(b) : repr(a, true) === repr(b, true) && typeName(a) === typeName(b);
    if (op === "!=") return !compare("==", a, b);
    let x: number | string, y: number | string;
    if (isNum(a) && isNum(b)) { x = nv(a); y = nv(b); } else if (typeof a === "string" && typeof b === "string") { x = a; y = b; }
    else throw err("TypeError", `'${op}' not supported between '${typeName(a)}' and '${typeName(b)}'`);
    return op === "<" ? x < y : op === ">" ? x > y : op === "<=" ? x <= y : x >= y;
  }
  function* evalE(e: Expr): Generator<Step, PyVal, void> {
    switch (e.k) {
      case "num": return mk(e.v, e.float);
      case "str": return e.v;
      case "const": return e.v;
      case "name": return lookup(e.v);
      case "list": { const out: PyVal[] = []; for (const x of e.items) out.push(yield* evalE(x)); return out; }
      case "index": {
        const o = yield* evalE(e.obj), i = yield* evalE(e.idx);
        if (!Array.isArray(o) && typeof o !== "string") throw err("TypeError", `'${typeName(o)}' object is not subscriptable`);
        if (typeof i !== "number") throw err("TypeError", "indices must be integers");
        const j = i < 0 ? o.length + i : i;
        if (j < 0 || j >= o.length) throw err("IndexError", "index out of range");
        return o[j];
      }
      case "un": {
        const a = yield* evalE(e.a);
        if (e.op === "not") return !truthy(a);
        if (!isNum(a)) throw err("TypeError", `bad operand type for unary ${e.op}: '${typeName(a)}'`);
        return e.op === "-" ? mk(-nv(a), isFloat(a)) : a;
      }
      case "bin": return arith(e.op, yield* evalE(e.a), yield* evalE(e.b));
      case "bool": { const a = yield* evalE(e.a); if (e.op === "and" ? !truthy(a) : truthy(a)) return a; return yield* evalE(e.b); }
      case "cmp": {
        let left = yield* evalE(e.items[0]);
        for (let k = 0; k < e.ops.length; k++) { const right = yield* evalE(e.items[k + 1]); if (!compare(e.ops[k], left, right)) return false; left = right; }
        return true;
      }
      case "attr": throw err("AttributeError", `use ${e.name}(...) as a method call`);
      case "call": {
        if (e.fn.k === "attr") {
          const obj = yield* evalE(e.fn.obj);
          if (e.fn.name === "append" && Array.isArray(obj)) { if (e.args.length !== 1) throw err("TypeError", "append() takes one argument"); obj.push(yield* evalE(e.args[0])); return null; }
          throw err("AttributeError", `'${typeName(obj)}' object has no attribute '${e.fn.name}'`);
        }
        const f = yield* evalE(e.fn);
        const args: PyVal[] = [];
        for (const a of e.args) args.push(yield* evalE(a));
        const kw: Record<string, PyVal> = {};
        for (const [k, v] of Object.entries(e.kw)) kw[k] = yield* evalE(v);
        if (!f || typeof f !== "object" || Array.isArray(f) || f instanceof PyFloat) throw err("TypeError", `'${typeName(f)}' object is not callable`);
        if (BUILTINS.has(f.name) && !f.body.length) return builtin(f.name, args, kw);
        if (args.length !== f.params.length) throw err("TypeError", `${f.name}() takes ${f.params.length} argument(s) but ${args.length} were given`);
        if (++depth > 60) throw err("RecursionError", "maximum recursion depth exceeded");
        const frame: Frame = { name: f.name, vars: new Map(f.params.map((p, i) => [p, args[i]])) };
        stack.push(frame);
        const saved = line;
        try { yield* execBlock(f.body); }
        catch (s) { if (s instanceof Signal && s.kind === "return") { stack.pop(); depth--; line = saved; return s.value; } stack.pop(); depth--; throw s; }
        stack.pop(); depth--; line = saved;
        return null;
      }
    }
  }
  function builtin(name: string, a: PyVal[], kw: Record<string, PyVal>): PyVal {
    const one = () => { if (a.length !== 1) throw err("TypeError", `${name}() takes 1 argument`); return a[0]; };
    switch (name) {
      case "print": output += a.map((x) => repr(x)).join(kw.sep !== undefined ? String(kw.sep) : " ") + (kw.end !== undefined ? String(kw.end) : "\n"); return null;
      case "abs": { const x = one(); if (!isNum(x)) throw err("TypeError", "bad operand for abs()"); return mk(Math.abs(nv(x)), isFloat(x)); }
      case "round": {
        const x = a[0]; if (!isNum(x)) throw err("TypeError", "round() needs a number");
        const d = a[1] === undefined ? null : nv(a[1]);
        const bank = (v: number) => { const r = Math.round(v); return Math.abs(v % 1) === 0.5 && r % 2 !== 0 ? r - 1 : r; }; // round half to even, like Python
        if (d === null) return bank(nv(x));
        const p = 10 ** d; return new PyFloat(Math.round(nv(x) * p + Number.EPSILON * Math.sign(nv(x))) / p);
      }
      case "int": { const x = one(); if (typeof x === "string") { if (!/^\s*-?\d+\s*$/.test(x)) throw err("ValueError", `invalid literal for int(): '${x}'`); return parseInt(x, 10); } if (!isNum(x)) throw err("TypeError", "int() needs a number"); return Math.trunc(nv(x)); }
      case "float": { const x = one(); if (typeof x === "string") { const v = Number(x); if (!x.trim() || Number.isNaN(v)) throw err("ValueError", `could not convert string to float: '${x}'`); return new PyFloat(v); } if (!isNum(x)) throw err("TypeError", "float() needs a number"); return new PyFloat(nv(x)); }
      case "str": return repr(one());
      case "len": { const x = one(); if (typeof x !== "string" && !Array.isArray(x)) throw err("TypeError", `object of type '${typeName(x)}' has no len()`); return x.length; }
      case "min": case "max": case "sum": {
        const xs = a.length === 1 && Array.isArray(a[0]) ? a[0] : a;
        if (name === "sum") return xs.reduce<PyVal>((s, x) => arith("+", s, x), 0);
        if (!xs.length) throw err("ValueError", `${name}() arg is an empty sequence`);
        return xs.reduce((m, x) => (compare(name === "min" ? "<" : ">", x, m) ? x : m));
      }
      case "range": {
        const ns = a.map((x) => { if (typeof x !== "number") throw err("TypeError", "range() needs integers"); return x; });
        const [start, stop, step] = ns.length === 1 ? [0, ns[0], 1] : [ns[0], ns[1], ns[2] ?? 1];
        if (step === 0) throw err("ValueError", "range() step must not be zero");
        const out: number[] = [];
        for (let v = start; step > 0 ? v < stop : v > stop; v += step) { out.push(v); if (out.length > 100000) throw err("ValueError", "range too large"); }
        return out;
      }
    }
    throw err("NameError", `name '${name}' is not defined`);
  }
  function* tick(l: number) {
    line = l;
    if (++steps > maxSteps) throw err("TimeoutError", `stopped after ${maxSteps} steps — is there an infinite loop?`);
    yield snapshot(l);
  }
  function* execBlock(body: Stmt[]): Generator<Step, void, void> { for (const s of body) yield* exec(s); }
  function* exec(s: Stmt): Generator<Step, void, void> {
    switch (s.k) {
      case "expr": yield* tick(s.line); yield* evalE(s.e); return;
      case "pass": yield* tick(s.line); return;
      case "break": yield* tick(s.line); throw new Signal("break");
      case "continue": yield* tick(s.line); throw new Signal("continue");
      case "return": { yield* tick(s.line); const v = s.e ? yield* evalE(s.e) : null; throw new Signal("return", v); }
      case "def": yield* tick(s.line); top().vars.set(s.name, { kind: "func", name: s.name, params: s.params, body: s.body }); return;
      case "assign": {
        yield* tick(s.line);
        let v = yield* evalE(s.e);
        if (s.op !== "=") { const cur = yield* evalE(s.target); v = arith(s.op.slice(0, -1), cur, v); }
        if (s.target.k === "name") top().vars.set(s.target.v, v);
        else if (s.target.k === "index") {
          const o = yield* evalE(s.target.obj), i = yield* evalE(s.target.idx);
          if (!Array.isArray(o) || typeof i !== "number") throw err("TypeError", "only list items can be assigned");
          const j = i < 0 ? o.length + i : i;
          if (j < 0 || j >= o.length) throw err("IndexError", "list assignment index out of range");
          o[j] = v;
        }
        return;
      }
      case "if": {
        for (const b of s.branches) {
          if (b.cond === null) { yield* execBlock(b.body); return; }
          yield* tick(s.line);
          line = s.line;
          if (truthy(yield* evalE(b.cond))) { yield* execBlock(b.body); return; }
        }
        return;
      }
      case "while":
        for (;;) {
          yield* tick(s.line);
          if (!truthy(yield* evalE(s.cond))) return;
          try { yield* execBlock(s.body); } catch (x) { if (x instanceof Signal && x.kind === "break") return; if (x instanceof Signal && x.kind === "continue") continue; throw x; }
        }
      case "for": {
        yield* tick(s.line);
        const it = yield* evalE(s.iter);
        if (!Array.isArray(it) && typeof it !== "string") throw err("TypeError", `'${typeName(it)}' object is not iterable`);
        for (const v of [...it]) {
          top().vars.set(s.v, v);
          yield* tick(s.line);
          try { yield* execBlock(s.body); } catch (x) { if (x instanceof Signal && x.kind === "break") return; if (x instanceof Signal && x.kind === "continue") continue; throw x; }
        }
        return;
      }
    }
  }

  try {
    const prog = parse(code);
    yield* execBlock(prog);
    return { output, vars: snapshot(0).vars };
  } catch (e) {
    const vars = snapshot(0).vars;
    if (e instanceof PyError) return { output, error: e, vars };
    if (e instanceof Signal) return { output, error: new PyError("SyntaxError", `'${e.kind}' outside a loop or function`, line), vars };
    return { output, error: new PyError("Error", String((e as Error)?.message ?? e), line), vars };
  }
}

const BUILTINS = new Set(["print", "abs", "round", "int", "float", "str", "len", "min", "max", "sum", "range"]);

/** Run to completion; returns the printed output (and the error, if any). */
export function runAll(code: string, maxSteps = 20000): { output: string; error?: PyError; vars: [string, string][]; steps: number } {
  const g = run(code, maxSteps);
  let steps = 0;
  for (;;) { const r = g.next(); if (r.done) return { ...r.value, steps }; steps++; }
}
