// Line Launcher — engine, equation parser and level data.
// Pure TypeScript (no React) so the physics can be checked from a Node script.
//
// The student types straight lines; a marble falls under gravity, slides along
// them, and must pass through every target. The line equations are parsed by a
// small linear-only parser so slope-intercept, point-slope and standard form
// all work, with optional domain restrictions written as {2 < x < 7}.

export type Pt = { x: number; y: number };
export type View = { xMin: number; xMax: number; yMin: number; yMax: number };

export type Ramp = {
  m: number;
  b: number;
  lo: number; // domain lower bound (-Infinity when none)
  hi: number; // domain upper bound (+Infinity when none)
  hasDomain: boolean;
};

export type ParseResult = { ok: true; ramp: Ramp } | { ok: false; error: string };

export type Level = {
  id: string;
  title: string;
  skill: string;
  brief: string;
  hint: string;
  marble: Pt;
  targets: Pt[];
  view: View;
  maxLines: number;
  allowDomain: boolean;
  rule?: "parallel" | "perpendicular";
  /** Reference answer (used by the checker script, shown after a win). */
  solution: string[];
};

/* ------------------------------------------------------------------ */
/* Linear equation parser                                              */
/* ------------------------------------------------------------------ */

// A linear form  cx·x + cy·y + c
type Lin = { x: number; y: number; c: number };
const isConst = (l: Lin) => Math.abs(l.x) < 1e-12 && Math.abs(l.y) < 1e-12;
const add = (a: Lin, b: Lin, s = 1): Lin => ({ x: a.x + s * b.x, y: a.y + s * b.y, c: a.c + s * b.c });
const scale = (a: Lin, k: number): Lin => ({ x: a.x * k, y: a.y * k, c: a.c * k });

class NotLinear extends Error {}

function tokenize(src: string): string[] {
  const out: string[] = [];
  const re = /\s*(\d+\.?\d*|\.\d+|[xy]|[-+*/^()=])/gy;
  let i = 0;
  while (i < src.length) {
    if (/\s/.test(src[i])) { i++; continue; }
    re.lastIndex = i;
    const m = re.exec(src);
    if (!m) throw new Error(`I don't understand “${src[i]}”.`);
    out.push(m[1]);
    i = re.lastIndex;
  }
  return out;
}

function parseLinearSide(tokens: string[]): Lin {
  let p = 0;
  const peek = () => tokens[p];
  const next = () => tokens[p++];

  function expr(): Lin {
    let v = term();
    while (peek() === "+" || peek() === "-") {
      const op = next();
      v = add(v, term(), op === "+" ? 1 : -1);
    }
    return v;
  }
  function term(): Lin {
    let v = unary();
    for (;;) {
      const t = peek();
      if (t === "*" || t === "/") {
        next();
        const r = unary();
        v = t === "*" ? mul(v, r) : div(v, r);
      } else if (t !== undefined && (/^[\d.]/.test(t) || t === "x" || t === "y" || t === "(")) {
        // implicit multiplication: 2x, 3(x - 1), (1/2)x — same precedence as *, so 1/2x = (1/2)x
        v = mul(v, unary());
      } else break;
    }
    return v;
  }
  function unary(): Lin {
    if (peek() === "-") { next(); return scale(unary(), -1); }
    if (peek() === "+") { next(); return unary(); }
    return power();
  }
  function power(): Lin {
    const base = primary();
    if (peek() === "^") {
      next();
      const e = unary();
      if (!isConst(e)) throw new NotLinear();
      if (isConst(base)) return { x: 0, y: 0, c: Math.pow(base.c, e.c) };
      if (e.c === 1) return base;
      throw new NotLinear();
    }
    return base;
  }
  function primary(): Lin {
    const t = next();
    if (t === undefined) throw new Error("The equation ends too early.");
    if (t === "x") return { x: 1, y: 0, c: 0 };
    if (t === "y") return { x: 0, y: 1, c: 0 };
    if (t === "(") {
      const v = expr();
      if (next() !== ")") throw new Error("A bracket is not closed.");
      return v;
    }
    if (/^[\d.]/.test(t)) return { x: 0, y: 0, c: parseFloat(t) };
    throw new Error(`Unexpected “${t}”.`);
  }
  function mul(a: Lin, b: Lin): Lin {
    if (isConst(a)) return scale(b, a.c);
    if (isConst(b)) return scale(a, b.c);
    throw new NotLinear();
  }
  function div(a: Lin, b: Lin): Lin {
    if (!isConst(b)) throw new NotLinear();
    if (b.c === 0) throw new Error("Division by zero.");
    return scale(a, 1 / b.c);
  }

  const v = expr();
  if (p < tokens.length) throw new Error(`Unexpected “${tokens[p]}”.`);
  return v;
}

function parseDomain(src: string): { lo: number; hi: number } {
  const s = src.replace(/\s+/g, "").replace(/≤/g, "<=").replace(/≥/g, ">=");
  const num = String.raw`(-?\d*\.?\d+(?:/\d+)?)`;
  const val = (t: string) => {
    const [a, b] = t.split("/");
    return b === undefined ? parseFloat(a) : parseFloat(a) / parseFloat(b);
  };
  let m = new RegExp(`^${num}<=?x<=?${num}$`).exec(s);
  if (m) return { lo: val(m[1]), hi: val(m[2]) };
  m = new RegExp(`^${num}>=?x>=?${num}$`).exec(s);
  if (m) return { lo: val(m[2]), hi: val(m[1]) };
  m = new RegExp(`^x>=?${num}$`).exec(s);
  if (m) return { lo: val(m[1]), hi: Infinity };
  m = new RegExp(`^x<=?${num}$`).exec(s);
  if (m) return { lo: -Infinity, hi: val(m[1]) };
  m = new RegExp(`^${num}<=?x$`).exec(s);
  if (m) return { lo: val(m[1]), hi: Infinity };
  m = new RegExp(`^${num}>=?x$`).exec(s);
  if (m) return { lo: -Infinity, hi: val(m[1]) };
  throw new Error("Write a restriction like {2 < x < 7}, {x > 3} or {x < 5}.");
}

export function parseRamp(input: string): ParseResult {
  let src = input.trim().replace(/[−–]/g, "-").replace(/·|×/g, "*");
  if (!src) return { ok: false, error: "" };
  let lo = -Infinity, hi = Infinity, hasDomain = false;
  const brace = /\{([^}]*)\}\s*$/.exec(src);
  if (brace) {
    try {
      ({ lo, hi } = parseDomain(brace[1]));
    } catch (e) {
      return { ok: false, error: (e as Error).message };
    }
    if (!(lo < hi)) return { ok: false, error: "The restriction is empty — the left number must be smaller." };
    hasDomain = true;
    src = src.slice(0, brace.index).trim();
  }
  if (src.includes("{") || src.includes("}")) return { ok: false, error: "Put the restriction at the end, like y = 2x + 1 {0 < x < 4}." };

  const sides = src.split("=");
  if (sides.length === 1) sides.unshift("y"); // allow "2x + 3" to mean y = 2x + 3
  if (sides.length !== 2) return { ok: false, error: "Use exactly one “=” sign." };
  try {
    const L = parseLinearSide(tokenize(sides[0]));
    const R = parseLinearSide(tokenize(sides[1]));
    const d = add(L, R, -1); // d.x·x + d.y·y + d.c = 0
    if (Math.abs(d.y) < 1e-12) {
      if (Math.abs(d.x) < 1e-12) return { ok: false, error: "That isn't a line — there is no x or y left." };
      return { ok: false, error: "That is a vertical line (x = number). Ramps need a y in them." };
    }
    const m = -d.x / d.y;
    const b = -d.c / d.y;
    if (!isFinite(m) || !isFinite(b)) return { ok: false, error: "That line can't be drawn." };
    return { ok: true, ramp: { m, b, lo, hi, hasDomain } };
  } catch (e) {
    if (e instanceof NotLinear) return { ok: false, error: "Only straight lines here — no x², xy or 1/x." };
    return { ok: false, error: (e as Error).message };
  }
}

/* ------------------------------------------------------------------ */
/* Pretty-printing                                                     */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* Physics                                                             */
/* ------------------------------------------------------------------ */

export const MARBLE_R = 0.3;
export const TARGET_R = 0.25;
const HIT_TOL = 0.3; // how close the marble's contact point must pass to a target
const G = 9.8;

export type Seg = { x1: number; y1: number; x2: number; y2: number };

export function rampToSeg(r: Ramp, view: View): Seg | null {
  const pad = 2;
  const x1 = Math.max(r.lo, view.xMin - pad);
  const x2 = Math.min(r.hi, view.xMax + pad);
  if (!(x1 < x2)) return null;
  return { x1, y1: r.m * x1 + r.b, x2, y2: r.m * x2 + r.b };
}

export type SimState = {
  p: Pt;
  v: Pt;
  t: number;
  hit: boolean[];
  still: number; // seconds spent almost motionless
  done: null | "won" | "out" | "stuck" | "timeout";
  trail: Pt[];
};

export function initSim(level: Level): SimState {
  return {
    p: { ...level.marble },
    v: { x: 0, y: 0 },
    t: 0,
    hit: level.targets.map(() => false),
    still: 0,
    done: null,
    trail: [{ ...level.marble }],
  };
}

const SUB = 1 / 600;

/** Advance the simulation by `dt` seconds (mutates and returns `s`). */
export function stepSim(s: SimState, segs: Seg[], level: Level, dt: number): SimState {
  if (s.done) return s;
  const steps = Math.max(1, Math.round(dt / SUB));
  for (let k = 0; k < steps && !s.done; k++) {
    s.v.y -= G * SUB;
    s.p.x += s.v.x * SUB;
    s.p.y += s.v.y * SUB;

    // resolve contacts (two passes handle corners where two ramps meet)
    let contact: Pt | null = null;
    for (let pass = 0; pass < 2; pass++) {
      for (const sg of segs) {
        const ex = sg.x2 - sg.x1, ey = sg.y2 - sg.y1;
        const len2 = ex * ex + ey * ey;
        let u = ((s.p.x - sg.x1) * ex + (s.p.y - sg.y1) * ey) / len2;
        u = Math.max(0, Math.min(1, u));
        const cx = sg.x1 + u * ex, cy = sg.y1 + u * ey;
        const dx = s.p.x - cx, dy = s.p.y - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < MARBLE_R && dist > 1e-9) {
          const nx = dx / dist, ny = dy / dist;
          s.p.x = cx + nx * MARBLE_R;
          s.p.y = cy + ny * MARBLE_R;
          contact = { x: cx, y: cy };
          const vn = s.v.x * nx + s.v.y * ny;
          if (vn < 0) { s.v.x -= vn * nx; s.v.y -= vn * ny; } // no bounce, keep sliding
        }
      }
    }

    s.t += SUB;
    level.targets.forEach((tg, i) => {
      if (s.hit[i]) return;
      // Rolling: the point touching the ramp must pass over the target.
      // Falling: the target must be inside the marble.
      if (contact ? Math.hypot(contact.x - tg.x, contact.y - tg.y) < HIT_TOL : Math.hypot(s.p.x - tg.x, s.p.y - tg.y) < MARBLE_R)
        s.hit[i] = true;
    });

    const speed = Math.hypot(s.v.x, s.v.y);
    s.still = speed < 0.05 ? s.still + SUB : 0;

    const vw = level.view;
    if (s.hit.every(Boolean)) s.done = "won";
    else if (s.p.y < vw.yMin - 2 || s.p.x < vw.xMin - 3 || s.p.x > vw.xMax + 3) s.done = "out";
    else if (s.still > 1.2) s.done = "stuck";
    else if (s.t > 20) s.done = "timeout";
  }
  const last = s.trail[s.trail.length - 1];
  if (Math.hypot(last.x - s.p.x, last.y - s.p.y) > 0.08) s.trail.push({ ...s.p });
  return s;
}

/** Check level rules (line count, domains, parallel/perpendicular). Returns an error or null. */
export function checkRules(level: Level, ramps: Ramp[]): string | null {
  if (ramps.length === 0) return "Type at least one line first.";
  if (ramps.length > level.maxLines)
    return `This level allows ${level.maxLines} line${level.maxLines === 1 ? "" : "s"}. Remove one.`;
  if (!level.allowDomain && ramps.some((r) => r.hasDomain))
    return "No restrictions on this level — use full lines.";
  if (level.rule) {
    if (ramps.length !== 2) return `Use exactly two ${level.rule} lines.`;
    const [a, b] = ramps;
    if (level.rule === "parallel" && Math.abs(a.m - b.m) > 1e-9)
      return `Your slopes are ${niceNumber(a.m)} and ${niceNumber(b.m)}. Parallel lines need equal slopes.`;
    if (level.rule === "perpendicular" && Math.abs(a.m * b.m + 1) > 1e-9)
      return `Your slopes are ${niceNumber(a.m)} and ${niceNumber(b.m)}. Perpendicular slopes multiply to −1.`;
  }
  return null;
}

/** Run a whole attempt without animation (used by the checker script). */
export function runToEnd(level: Level, ramps: Ramp[]): SimState {
  const segs = ramps.map((r) => rampToSeg(r, level.view)).filter((s): s is Seg => !!s);
  const s = initSim(level);
  while (!s.done) stepSim(s, segs, level, 1 / 60);
  return s;
}

/* ------------------------------------------------------------------ */
/* Levels                                                              */
/* ------------------------------------------------------------------ */

const V: View = { xMin: 0, xMax: 14, yMin: 0, yMax: 14 };

export const LEVELS: Level[] = [
  {
    id: "downhill",
    title: "Downhill",
    skill: "Slope from a graph",
    brief: "The targets sit on one straight line. Find its slope and y-intercept, then type y = mx + b.",
    hint: "From one target to the next: how far down (rise) and how far right (run)? Slope = rise ÷ run. Then extend the line back to x = 0 to read b.",
    marble: { x: 1, y: 13 },
    targets: [{ x: 4, y: 9 }, { x: 7, y: 6 }, { x: 10, y: 3 }],
    view: V,
    maxLines: 1,
    allowDomain: false,
    solution: ["y = -x + 13"],
  },
  {
    id: "gentle",
    title: "Gentle Slope",
    skill: "Fractional slope",
    brief: "A shallower ramp this time. The slope is a fraction.",
    hint: "Between (2, 10) and (6, 8) the line drops 2 while moving 4 to the right. Simplify −2/4. You can type it as -1/2x or -0.5x.",
    marble: { x: 1, y: 13 },
    targets: [{ x: 2, y: 10 }, { x: 6, y: 8 }, { x: 10, y: 6 }],
    view: V,
    maxLines: 1,
    allowDomain: false,
    solution: ["y = -1/2x + 11"],
  },
  {
    id: "uphill-left",
    title: "Roll Left",
    skill: "Positive slope",
    brief: "The marble starts on the right. A line that rises to the right sends it rolling left.",
    hint: "Positive slope: up 2 for every 3 to the right. Use (3, 4) and (6, 6) to check, then solve 4 = (2/3)(3) + b.",
    marble: { x: 13, y: 13 },
    targets: [{ x: 12, y: 10 }, { x: 9, y: 8 }, { x: 6, y: 6 }, { x: 3, y: 4 }],
    view: V,
    maxLines: 1,
    allowDomain: false,
    solution: ["y = 2/3x + 2"],
  },
  {
    id: "two-points",
    title: "Between the Grid Lines",
    skill: "Equation from two points",
    brief: "The y-intercept is not on a grid line. Use two targets to find m, then substitute to find b.",
    hint: "m = (8 − 11) ÷ (6 − 2) = −3/4. Substitute (2, 11): 11 = (−3/4)(2) + b, so b = 12.5.",
    marble: { x: 1, y: 13.5 },
    targets: [{ x: 2, y: 11 }, { x: 6, y: 8 }, { x: 10, y: 5 }],
    view: V,
    maxLines: 1,
    allowDomain: false,
    solution: ["y = -3/4x + 12.5"],
  },
  {
    id: "two-ramps",
    title: "Two Ramps",
    skill: "Restricting a line",
    brief: "One line can't reach all four targets. Build a steep ramp, cut it short with a restriction, and land the marble on a second, gentler ramp.",
    hint: "Steep ramp: slope −1 through (3, 11). End it with {x < 7}. Gentle ramp: slope −1/2 through (10, 4) and (12, 3).",
    marble: { x: 2, y: 13.5 },
    targets: [{ x: 3, y: 11 }, { x: 6, y: 8 }, { x: 10, y: 4 }, { x: 12, y: 3 }],
    view: V,
    maxLines: 2,
    allowDomain: true,
    solution: ["y = -x + 14 {x < 7}", "y = -1/2x + 9"],
  },
  {
    id: "parallel",
    title: "Parallel Drop",
    skill: "Parallel lines",
    brief: "Two ramps that must be parallel. The marble runs off the first and drops onto the second.",
    hint: "Parallel lines have the same slope. Both ramps here have slope −1/2 — only b changes. Stop the top ramp right after (4, 11) with {x < 4}, or the marble flies too far.",
    marble: { x: 1, y: 13.8 },
    targets: [{ x: 2, y: 12 }, { x: 4, y: 11 }, { x: 10, y: 4 }, { x: 12, y: 3 }],
    view: V,
    maxLines: 2,
    allowDomain: true,
    rule: "parallel",
    solution: ["y = -1/2x + 13 {x < 4}", "y = -1/2x + 9"],
  },
  {
    id: "perpendicular",
    title: "Switchback",
    skill: "Perpendicular lines",
    brief: "Hard. The marble rolls left down one ramp, then must turn back to the right. The two ramps must be perpendicular.",
    hint: "First ramp has slope 1 and passes through (10, 10). Perpendicular slope = negative reciprocal = −1. The second ramp passes through (6, 3).",
    marble: { x: 12.5, y: 13.5 },
    targets: [{ x: 10, y: 10 }, { x: 7, y: 7 }, { x: 6, y: 3 }, { x: 8, y: 1 }],
    view: V,
    maxLines: 2,
    allowDomain: true,
    rule: "perpendicular",
    solution: ["y = x {x > 5}", "y = -x + 9"],
  },
];
