// Parameterized EQAO question generators. Each template randomizes its numbers
// (and its figure) every time it runs, so a student gets fresh questions on each
// attempt — an effectively unlimited practice bank. Answers are computed, so
// auto-grading via lib/quiz.ts stays correct.
import type { QKind } from "./quiz";
import type { Difficulty, Figure, Strand } from "./eqao";
import { angleTriangle, bars, box, boxPlot, circle, coord, cylinder, ladder, lShape, lineGraph, numberLine, parallelLines, rect, rightTriangle, scatter, scatterLabeled, spinner, trapezoidFig, triangle, twoLines } from "./eqaoFigures";

export type Generated = {
  id: string;
  templateId: string;
  strand: Strand;
  difficulty: Difficulty;
  kind: QKind;
  prompt: string;
  figure: Figure;
  choices?: any;
  answer: any;
  tolerance?: number | null;
  points: number;
  feedback?: string | null;
};

type Built = Omit<Generated, "id" | "strand" | "difficulty" | "templateId">;
type Template = { id: string; strand: Strand; difficulty: Difficulty; build: (r: Rng) => Built };

// ── seeded RNG + helpers ─────────────────────────────────────
type Rng = () => number;
function mulberry32(seed: number): Rng {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const ri = (r: Rng, min: number, max: number) => min + Math.floor(r() * (max - min + 1));
const pick = <T,>(r: Rng, a: T[]) => a[Math.floor(r() * a.length)];
function shuffle<T>(r: Rng, a: T[]): T[] {
  const x = [...a];
  for (let i = x.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [x[i], x[j]] = [x[j], x[i]]; }
  return x;
}

const L = ["a", "b", "c", "d"];
function num(prompt: string, answer: number, tolerance = 0, figure: Figure = null, feedback?: string): Built {
  return { kind: "numeric", prompt, figure, answer, tolerance, points: 1, feedback };
}
function mc(r: Rng, prompt: string, correct: string, distractors: string[], figure: Figure = null, feedback?: string): Built {
  const order = shuffle(r, [{ t: correct, ok: true }, ...distractors.map((t) => ({ t, ok: false }))]);
  const choices = order.map((o, i) => ({ id: L[i], text: o.t }));
  return { kind: "multiple_choice", prompt, figure, choices, answer: L[order.findIndex((o) => o.ok)], points: 1, feedback };
}
function ms(r: Rng, prompt: string, correct: string[], distractors: string[], figure: Figure = null, feedback?: string): Built {
  const order = shuffle(r, [...correct.map((t) => ({ t, ok: true })), ...distractors.map((t) => ({ t, ok: false }))]);
  const choices = order.map((o, i) => ({ id: L[i], text: o.t }));
  const answer = order.map((o, i) => ({ id: L[i], ok: o.ok })).filter((x) => x.ok).map((x) => x.id);
  return { kind: "multiple_select", prompt, figure, choices, answer, points: 1, feedback };
}
const eqStr = (m: number, b: number) => `$y = ${m}x ${b >= 0 ? `+ ${b}` : `- ${Math.abs(b)}`}$`;
// Random, NON-ordered data whose mean is a clean integer (but not obvious).
function meanData(r: Rng, count: number): { vals: number[]; mean: number } {
  const vals = Array.from({ length: count }, () => ri(r, 8, 45));
  let sum = vals.reduce((a, b) => a + b, 0);
  const rem = sum % count;
  if (rem) { const idx = vals.findIndex((v) => v - rem >= 1); vals[idx] -= rem; sum -= rem; }
  return { vals, mean: sum / count };
}

const round1 = (n: number) => Math.round(n * 10) / 10;
const TRIPLES: [number, number, number][] = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [7, 24, 25], [20, 21, 29]];
const NAMES = ["Amir", "Bea", "Cam", "Dana"];

// ── templates ────────────────────────────────────────────────
const TEMPLATES: Template[] = [
  // NUMBER
  { id: "n_power", strand: "number", difficulty: "easy", build: (r) => { const a = ri(r, 2, 6), b = ri(r, 2, 3); return num(`Evaluate $${a}^{${b}}$.`, a ** b, 0, null, `$${a}^{${b}} = ${a ** b}$.`); } },
  { id: "n_numberline", strand: "number", difficulty: "easy", build: (r) => { const v = ri(r, 1, 4) + 0.5; return num("Point $P$ is shown on the number line. What value does $P$ represent?", v, 0.01, numberLine(v, 0, 6), `$P$ is halfway between ${Math.floor(v)} and ${Math.ceil(v)}.`); } },
  { id: "n_percent", strand: "number", difficulty: "medium", build: (r) => { const p = pick(r, [10, 20, 25, 50]), w = pick(r, [40, 60, 80, 120, 200]); return num(`What is ${p}% of ${w}?`, (w * p) / 100, 0, null, `${p}% of ${w} is ${(w * p) / 100}.`); } },
  { id: "n_ratio", strand: "number", difficulty: "medium", build: (r) => { const a = ri(r, 2, 4), b = ri(r, 2, 5), k = ri(r, 2, 6); return num(`A recipe mixes flour and sugar in the ratio ${a}:${b}. With ${a * k} cups of flour, how many cups of sugar are needed?`, b * k, 0, null, `Scale factor ${k}, so sugar $= ${b}\\times${k} = ${b * k}$.`); } },
  { id: "n_unitrate", strand: "number", difficulty: "hard", build: (r) => { const n = pick(r, [200, 250, 400, 500]), unit = pick(r, [0.5, 0.8, 1, 1.2]); const price = ((unit * n) / 100).toFixed(2); return num(`A ${n} g item costs ${price} dollars. What is the unit cost, in cents per gram?`, unit, 0.01, null, `${price} dollars $= ${Number(price) * 100}$ cents; $\\div ${n}$ g $= ${unit}$.`); } },

  // ALGEBRA
  { id: "a_solve", strand: "algebra", difficulty: "easy", build: (r) => { const a = ri(r, 2, 6), x = ri(r, 1, 9), b = ri(r, 1, 9); return num(`Solve for $x$: $${a}x + ${b} = ${a * x + b}$.`, x, 0, null, `$${a}x = ${a * x}$, so $x = ${x}$.`); } },
  { id: "a_eval", strand: "algebra", difficulty: "easy", build: (r) => { const a = ri(r, 1, 3), b = ri(r, 1, 5); const v = pick(r, [-3, -2, -1, 1, 2, 3]); return num(`Evaluate $${a}x^2 + ${b}x$ when $x = ${v}$.`, a * v * v + b * v, 0, null, `$${a}(${v})^2 + ${b}(${v}) = ${a * v * v + b * v}$.`); } },
  { id: "a_slope_graph", strand: "algebra", difficulty: "medium", build: (r) => { const m = ri(r, 1, 3), b = ri(r, 0, 2); const xe = Math.min(8, (8 - b) / m); return num("What is the rate of change (slope) of the line shown?", m, 0, coord({ line: [[0, b], [xe, m * xe + b]], pts: [[1, m + b], [2, 2 * m + b]] }), `Between $(1, ${m + b})$ and $(2, ${2 * m + b})$ the rise is ${m}, run is $1$.`); } },
  { id: "a_slope_pts", strand: "algebra", difficulty: "medium", build: (r) => { const m = ri(r, 1, 4), x1 = ri(r, 0, 2), dx = ri(r, 1, 3), y1 = ri(r, 1, 5); const x2 = x1 + dx, y2 = y1 + m * dx; return num(`A line passes through $(${x1}, ${y1})$ and $(${x2}, ${y2})$. What is its slope?`, m, 0, null, `$\\dfrac{${y2} - ${y1}}{${x2} - ${x1}} = ${m}$.`); } },
  { id: "a_eqn_graph", strand: "algebra", difficulty: "hard", build: (r) => { const m = ri(r, 1, 3), b = ri(r, 1, 3); const xe = Math.min(8, (8 - b) / m); return mc(r, "Which equation represents the line shown?", `$y = ${m}x + ${b}$`, [`$y = ${m + 1}x + ${b}$`, `$y = ${m}x + ${b + 1}$`, `$y = ${m}x - ${b}$`], coord({ line: [[0, b], [xe, m * xe + b]], pts: [[0, b], [1, m + b]] }), `Slope ${m}, $y$-intercept ${b}.`); } },

  // DATA
  { id: "d_bar_max", strand: "data", difficulty: "easy", build: (r) => { const vals = shuffle(r, [3, 5, 2, 6, 4, 7, 8]).slice(0, 4); const max = Math.max(...vals); const who = NAMES[vals.indexOf(max)]; return mc(r, "The bar graph shows books read by four students. Who read the most?", who, NAMES.filter((n) => n !== who), bars(vals, NAMES), `${who}'s bar is tallest at ${max}.`); } },
  { id: "d_bar_diff", strand: "data", difficulty: "medium", build: (r) => { const vals = shuffle(r, [3, 5, 2, 6, 4, 7, 1, 8]).slice(0, 4); const mx = Math.max(...vals), mn = Math.min(...vals); return num(`Using the bar graph, how many more books did ${NAMES[vals.indexOf(mx)]} read than ${NAMES[vals.indexOf(mn)]}?`, mx - mn, 0, bars(vals, NAMES), `$${mx} - ${mn} = ${mx - mn}$.`); } },
  { id: "d_mean", strand: "data", difficulty: "medium", build: (r) => { const { vals, mean } = meanData(r, 5); return num(`Find the mean of the data set: $${vals.join(", ")}$.`, mean, 0, null, `Sum $= ${mean * 5}$, $\\div 5 = ${mean}$.`); } },
  { id: "d_scatter", strand: "data", difficulty: "medium", build: (r) => { const pos = r() > 0.5; const pts: [number, number][] = pos ? [[40, 30], [70, 50], [100, 70], [140, 85], [175, 100]] : [[40, 105], [70, 85], [100, 65], [140, 45], [175, 25]]; const line: [[number, number], [number, number]] = pos ? [[30, 20], [185, 105]] : [[30, 110], [185, 20]]; return mc(r, "What type of correlation does the scatter plot show?", pos ? "Positive" : "Negative", [pos ? "Negative" : "Positive", "No correlation", "Constant"], scatter(pts, line), pos ? "As $x$ increases, $y$ increases." : "As $x$ increases, $y$ decreases."); } },

  // GEOMETRY & MEASUREMENT
  { id: "g_tri_area", strand: "geometry_measurement", difficulty: "easy", build: (r) => { const b = pick(r, [4, 6, 8, 10, 12]), h = pick(r, [3, 4, 5, 6, 8]); return num("Find the area of the triangle, in square units.", (b * h) / 2, 0, triangle(`b = ${b}`, `h = ${h}`), `$A = \\dfrac{${b}\\times${h}}{2} = ${(b * h) / 2}$.`); } },
  { id: "g_box_vol", strand: "geometry_measurement", difficulty: "easy", build: (r) => { const l = ri(r, 2, 6), w = ri(r, 2, 6), h = ri(r, 2, 6); return num("Find the volume of the rectangular prism, in cubic units.", l * w * h, 0, box(l, w, h), `$V = ${l}\\times${w}\\times${h} = ${l * w * h}$.`); } },
  { id: "g_hyp", strand: "geometry_measurement", difficulty: "medium", build: (r) => { const [a, b, c] = pick(r, TRIPLES); const flip = r() > 0.5; return num("Find the length of the hypotenuse, in units.", c, 0, rightTriangle(String(flip ? a : b), String(flip ? b : a)), `$\\sqrt{${a}^2 + ${b}^2} = ${c}$.`); } },
  { id: "g_rect_perim", strand: "geometry_measurement", difficulty: "easy", build: (r) => { const l = ri(r, 3, 12), w = ri(r, 2, 10); return num(`A rectangle is ${l} by ${w}. What is its perimeter, in units?`, 2 * (l + w), 0, rect(`${l}`, `${w}`), `$P = 2(${l} + ${w}) = ${2 * (l + w)}$.`); } },
  { id: "g_cyl_vol", strand: "geometry_measurement", difficulty: "hard", build: (r) => { const rad = ri(r, 2, 5), h = ri(r, 3, 10); const v = round1(Math.PI * rad * rad * h); return num("Find the volume of the cylinder to one decimal place. (Use $\\pi \\approx 3.14159$.)", v, 0.5, cylinder(rad, h), `$V = \\pi r^2 h = \\pi(${rad}^2)(${h}) \\approx ${v}$.`); } },

  // FINANCIAL LITERACY
  { id: "f_discount", strand: "financial_literacy", difficulty: "easy", build: (r) => { const price = pick(r, [40, 60, 80, 120, 200]), pct = pick(r, [10, 20, 25, 50]); return num(`A ${price} dollar item is on sale for ${pct}% off. What is the sale price, in dollars?`, price * (1 - pct / 100), 0, null, `${price} $\\times ${(100 - pct) / 100} = ${price * (1 - pct / 100)}$.`); } },
  { id: "f_interest", strand: "financial_literacy", difficulty: "medium", build: (r) => { const P = pick(r, [200, 500, 800, 1000]), rate = pick(r, [2, 3, 4, 5]), t = ri(r, 1, 4); return num(`You invest ${P} dollars at ${rate}% simple interest per year for ${t} year(s). How much interest do you earn, in dollars?`, (P * rate * t) / 100, 0, null, `$I = Prt = ${P}\\times${rate / 100}\\times${t} = ${(P * rate * t) / 100}$.`); } },
  { id: "f_total", strand: "financial_literacy", difficulty: "easy", build: (r) => { const fee = pick(r, [3, 4, 5]), per = pick(r, [2, 3]), units = ri(r, 3, 9); return num(`A taxi charges ${fee} dollars plus ${per} dollars per km. What is the cost of a ${units} km trip, in dollars?`, fee + per * units, 0, null, `${fee} $+ ${per}\\times${units} = ${fee + per * units}$.`); } },
  { id: "f_breakeven", strand: "financial_literacy", difficulty: "hard", build: (r) => { const v0 = ri(r, 3, 8), perA = ri(r, 4, 6), perB = ri(r, 1, 3), mA = ri(r, 5, 15); const mB = mA + (perA - perB) * v0; return num(`Plan A costs ${mA} dollars/month + ${perA} dollars/visit. Plan B costs ${mB} dollars/month + ${perB} dollars/visit. After how many visits per month do they cost the same?`, v0, 0, null, `$${mA} + ${perA}v = ${mB} + ${perB}v \\Rightarrow v = ${v0}$.`); } },

  // ── additional / harder templates ──────────────────────────
  // NUMBER
  { id: "n_exp_law", strand: "number", difficulty: "hard", build: (r) => { const a = ri(r, 2, 4), p = ri(r, 2, 3), q = ri(r, 2, 3); return num(`Evaluate $${a}^{${p}} \\times ${a}^{${q}}$.`, a ** (p + q), 0, null, `Add the exponents: $${a}^{${p + q}} = ${a ** (p + q)}$.`); } },
  { id: "n_pct_increase", strand: "number", difficulty: "hard", build: (r) => { const x0 = pick(r, [20, 40, 50, 80]), pct = pick(r, [10, 20, 25, 50]); const x1 = x0 * (1 + pct / 100); return num(`A price increases from ${x0} dollars to ${x1} dollars. What is the percent increase?`, pct, 0, null, `$\\dfrac{${x1 - x0}}{${x0}}\\times100 = ${pct}\\%$.`); } },
  { id: "n_speed", strand: "number", difficulty: "medium", build: (r) => { const h = ri(r, 2, 5), s = pick(r, [40, 50, 60, 80]); return num(`A car travels ${s * h} km in ${h} hours. What is its average speed, in km/h?`, s, 0, null, `$${s * h}\\div${h} = ${s}$.`); } },
  { id: "n_product", strand: "number", difficulty: "medium", build: (r) => { const a = pick(r, [-6, -5, -4, -3, -2, 2, 3, 4, 5, 6]), b = pick(r, [-6, -5, -4, -3, -2, 2, 3, 4, 5, 6]); return num(`Evaluate $(${a})(${b})$.`, a * b, 0, null, `$(${a})(${b}) = ${a * b}$.`); } },
  { id: "n_scale", strand: "number", difficulty: "hard", build: (r) => { const N = pick(r, [50, 100, 200]), cm = ri(r, 4, 30); return num(`A 1:${N} scale model measures ${cm} cm. What is the real length, in metres?`, (N * cm) / 100, 0.01, null, `$${N}\\times${cm} = ${N * cm}$ cm $= ${(N * cm) / 100}$ m.`); } },

  // ALGEBRA
  { id: "a_brackets", strand: "algebra", difficulty: "hard", build: (r) => { const a = ri(r, 2, 4), x = ri(r, 1, 6), b = ri(r, 1, 5); return num(`Solve for $x$: $${a}(x + ${b}) = ${a * (x + b)}$.`, x, 0, null, `Divide by ${a}: $x + ${b} = ${x + b}$, so $x = ${x}$.`); } },
  { id: "a_both_sides", strand: "algebra", difficulty: "hard", build: (r) => { const x = ri(r, 1, 6), a = ri(r, 3, 6), c = ri(r, 1, a - 1), b = ri(r, 1, 6); const d = (a - c) * x + b; return num(`Solve for $x$: $${a}x + ${b} = ${c}x + ${d}$.`, x, 0, null, `$${a - c}x = ${d - b}$, so $x = ${x}$.`); } },
  { id: "a_yint", strand: "algebra", difficulty: "medium", build: (r) => { const m = ri(r, 1, 3), b = ri(r, 1, 6); const xe = Math.min(8, (8 - b) / m); return num("What is the $y$-intercept of the line shown?", b, 0, coord({ line: [[0, b], [xe, m * xe + b]], pts: [[0, b]] }), `The line crosses the $y$-axis at ${b}.`); } },
  { id: "a_simplify", strand: "algebra", difficulty: "medium", build: (r) => { const a = ri(r, 3, 6), b = ri(r, 1, a - 1), c = ri(r, 1, 6), d = ri(r, 1, 6); return mc(r, `Simplify $${a}x + ${c} - ${b}x + ${d}$.`, `$${a - b}x + ${c + d}$`, [`$${a + b}x + ${c + d}$`, `$${a - b}x + ${c - d}$`, `$${a - b}x - ${c + d}$`], null, `Combine like terms: $(${a}-${b})x + (${c}+${d})$.`); } },
  { id: "a_pattern", strand: "algebra", difficulty: "medium", build: (r) => { const s = ri(r, 1, 6), k = ri(r, 2, 5); return num(`A pattern starts at ${s} and increases by ${k} each step: ${s}, ${s + k}, ${s + 2 * k}, ... What is the 10th term?`, s + 9 * k, 0, null, `$${s} + 9\\times${k} = ${s + 9 * k}$.`); } },

  // DATA
  { id: "d_median", strand: "data", difficulty: "medium", build: (r) => { const set = shuffle(r, [2, 4, 5, 7, 8, 9, 11, 13, 15]).slice(0, 5); const med = [...set].sort((a, b) => a - b)[2]; return num(`Find the median of: $${set.join(", ")}$.`, med, 0, null, `Sorted, the middle value is ${med}.`); } },
  { id: "d_range", strand: "data", difficulty: "easy", build: (r) => { const set = shuffle(r, [3, 5, 8, 11, 14, 17, 20, 6]).slice(0, 5); return num(`Find the range of: $${set.join(", ")}$.`, Math.max(...set) - Math.min(...set), 0, null, `$${Math.max(...set)} - ${Math.min(...set)}$.`); } },
  { id: "d_total", strand: "data", difficulty: "easy", build: (r) => { const vals = shuffle(r, [3, 5, 2, 6, 4, 7, 8]).slice(0, 4); return num("Using the bar graph, how many books were read in total?", vals.reduce((a, b) => a + b, 0), 0, bars(vals, NAMES), "Add the four bars."); } },
  { id: "d_predict", strand: "data", difficulty: "hard", build: (r) => { const m = ri(r, 2, 6), b = ri(r, 5, 20), x = ri(r, 2, 8); return num(`A line of best fit is $y = ${m}x + ${b}$, where $x$ is hours studied and $y$ is the test score. Predict the score for ${x} hours.`, m * x + b, 0, null, `$${m}\\times${x} + ${b} = ${m * x + b}$.`); } },
  { id: "d_prob", strand: "data", difficulty: "medium", build: (r) => { const t = pick(r, [10, 20, 25, 50]), red = ri(r, 1, t - 1); return num(`A bag has ${red} red marbles out of ${t} total. What is the probability of drawing red, as a decimal?`, red / t, 0.01, null, `$${red}\\div${t} = ${red / t}$.`); } },

  // GEOMETRY & MEASUREMENT
  { id: "g_circle_area", strand: "geometry_measurement", difficulty: "medium", build: (r) => { const rad = ri(r, 2, 7); const v = round1(Math.PI * rad * rad); return num(`Find the area of a circle with radius ${rad}, to one decimal place. (Use $\\pi \\approx 3.14159$.)`, v, 0.3, circle(`r = ${rad}`), `$\\pi r^2 = \\pi(${rad}^2) \\approx ${v}$.`); } },
  { id: "g_circle_circ", strand: "geometry_measurement", difficulty: "medium", build: (r) => { const rad = ri(r, 2, 9); const v = round1(2 * Math.PI * rad); return num(`Find the circumference of a circle with radius ${rad}, to one decimal place. (Use $\\pi \\approx 3.14159$.)`, v, 0.3, circle(`r = ${rad}`), `$2\\pi r \\approx ${v}$.`); } },
  { id: "g_sa_box", strand: "geometry_measurement", difficulty: "hard", build: (r) => { const l = ri(r, 2, 6), w = ri(r, 2, 6), h = ri(r, 2, 6); const sa = 2 * (l * w + l * h + w * h); return num("Find the surface area of the rectangular prism, in square units.", sa, 0, box(l, w, h), `$2(lw+lh+wh) = ${sa}$.`); } },
  { id: "g_trapezoid", strand: "geometry_measurement", difficulty: "hard", build: (r) => { const a = ri(r, 2, 8), b = a + ri(r, 2, 6), h = ri(r, 2, 8); const area = ((a + b) * h) / 2; return num(`A trapezoid has parallel sides ${a} and ${b}, and height ${h}. Find its area, in square units.`, area, 0.01, trapezoidFig(`${a}`, `${b}`, `${h}`), `$\\dfrac{(${a}+${b})}{2}\\times${h} = ${area}$.`); } },
  { id: "g_pyth_leg", strand: "geometry_measurement", difficulty: "hard", build: (r) => { const [a, b, c] = pick(r, TRIPLES); return num(`A ${c} m ladder leans against a wall with its base ${a} m from the wall. How high up the wall does it reach, in metres?`, b, 0, ladder(`${a} m`, `${c} m`), `$\\sqrt{${c}^2 - ${a}^2} = ${b}$ m.`); } },

  // FINANCIAL LITERACY
  { id: "f_tax", strand: "financial_literacy", difficulty: "easy", build: (r) => { const p = pick(r, [20, 40, 50, 100, 120]); const total = Math.round(p * 1.13 * 100) / 100; return num(`An item costs ${p} dollars before tax. What is the total including 13% HST, in dollars?`, total, 0.01, null, `$${p}\\times1.13 = ${total}$.`); } },
  { id: "f_tip", strand: "financial_literacy", difficulty: "easy", build: (r) => { const bill = pick(r, [20, 40, 50, 60, 80]), pct = pick(r, [15, 20]); return num(`A restaurant bill is ${bill} dollars. How much is a ${pct}% tip, in dollars?`, (bill * pct) / 100, 0.01, null, `$${bill}\\times${pct / 100} = ${(bill * pct) / 100}$.`); } },
  { id: "f_amount", strand: "financial_literacy", difficulty: "hard", build: (r) => { const P = pick(r, [200, 500, 800, 1000]), rate = pick(r, [2, 4, 5]), t = ri(r, 2, 5); const A = P * (1 + (rate * t) / 100); return num(`You invest ${P} dollars at ${rate}% simple interest for ${t} years. What is the total amount (principal + interest), in dollars?`, A, 0.01, null, `$A = P(1+rt) = ${A}$.`); } },
  { id: "f_budget", strand: "financial_literacy", difficulty: "medium", build: (r) => { const income = pick(r, [400, 600, 800, 1000]); const e1 = pick(r, [120, 150, 200]), e2 = pick(r, [80, 100, 120]), e3 = pick(r, [50, 60, 90]); return num(`Monthly income is ${income} dollars. Expenses are ${e1}, ${e2}, and ${e3} dollars. How much is left to save, in dollars?`, income - e1 - e2 - e3, 0, null, `$${income} - ${e1} - ${e2} - ${e3} = ${income - e1 - e2 - e3}$.`); } },
  { id: "f_bestbuy", strand: "financial_literacy", difficulty: "medium", build: (r) => { const sizeA = pick(r, [2, 4, 5]), sizeB = pick(r, [3, 6, 8]); const uA = pick(r, [1.5, 2, 2.5, 3]); const uB = uA + pick(r, [-0.5, -0.25, 0.25, 0.5]); const priceA = (sizeA * uA).toFixed(2), priceB = (sizeB * uB).toFixed(2); const aCheaper = uA < uB; const A = `Option A (${sizeA} kg for ${priceA} dollars)`, B = `Option B (${sizeB} kg for ${priceB} dollars)`; return mc(r, `Which is the better buy? A: ${sizeA} kg for ${priceA} dollars. B: ${sizeB} kg for ${priceB} dollars.`, aCheaper ? A : B, [aCheaper ? B : A, "They cost the same", "Cannot be determined"], null, "Compare the unit (per-kg) prices."); } },

  // ── figure-rich / multi-step templates ─────────────────────
  { id: "n_numberline_neg", strand: "number", difficulty: "medium", build: (r) => { const v = ri(r, -4, 3) + 0.5; return num("Point $P$ is shown on the number line. What value does $P$ represent?", v, 0.01, numberLine(v, -5, 5), `$P$ is halfway between ${Math.floor(v)} and ${Math.ceil(v)}.`); } },
  { id: "a_distance_time", strand: "algebra", difficulty: "hard", build: (r) => { const t = ri(r, 2, 5), v = pick(r, [10, 15, 20, 30]); const d = v * t; return num(`The distance-time graph shows a cyclist who travels ${d} km in the first ${t} hours, then rests. What is the cyclist's speed during the first part, in km/h?`, v, 0, lineGraph([[0, 0], [110, 110], [190, 110]], "time (h)", "dist (km)"), `Speed $= ${d}\\div${t} = ${v}$ km/h.`); } },
  { id: "a_linear_predict", strand: "algebra", difficulty: "hard", build: (r) => { const m = ri(r, 2, 3), b = ri(r, 1, 3), X = ri(r, 5, 8); const xe = Math.min(8, (8 - b) / m); return num(`The graph shows a linear relation. Using the line, what is the value of $y$ when $x = ${X}$?`, m * X + b, 0, coord({ line: [[0, b], [xe, m * xe + b]], pts: [[0, b], [1, m + b]] }), `The line is $y = ${m}x + ${b}$, so $y = ${m}(${X}) + ${b} = ${m * X + b}$.`); } },
  { id: "d_spinner", strand: "data", difficulty: "medium", build: (r) => { const sectors = pick(r, [4, 5, 8, 10]), shaded = ri(r, 1, sectors - 1); return num(`A spinner has ${sectors} equal sections, ${shaded} of them shaded. What is the probability of landing on a shaded section, as a decimal?`, shaded / sectors, 0.01, spinner(sectors, shaded), `$${shaded}\\div${sectors} = ${shaded / sectors}$.`); } },
  { id: "d_bar_mean", strand: "data", difficulty: "medium", build: (r) => { const { vals, mean } = meanData(r, 4); return num("The bar graph shows four students' scores. What is the mean score?", mean, 0, bars(vals, NAMES), `Sum $= ${4 * mean}$, $\\div 4 = ${mean}$.`); } },
  { id: "g_composite_area", strand: "geometry_measurement", difficulty: "hard", build: (r) => { const A = ri(r, 6, 12), B = ri(r, 6, 12), c = ri(r, 2, A - 3), d = ri(r, 2, B - 3); return num(`An L-shape is made by removing a ${c} by ${d} rectangle from the corner of a ${A} by ${B} rectangle. Find its area, in square units.`, A * B - c * d, 0, lShape(`${A}`, `${B}`), `$${A}\\times${B} - ${c}\\times${d} = ${A * B - c * d}$.`); } },
  { id: "g_rect_diag", strand: "geometry_measurement", difficulty: "hard", build: (r) => { const [a, b, c] = pick(r, TRIPLES); return num(`Find the length of the diagonal of a ${a} by ${b} rectangle.`, c, 0, rect(`${a}`, `${b}`, true), `$\\sqrt{${a}^2 + ${b}^2} = ${c}$.`); } },
  { id: "g_triangle_angle", strand: "geometry_measurement", difficulty: "medium", build: (r) => { const a1 = ri(r, 30, 80), a2 = ri(r, 30, 150 - a1); return num("Find the measure of the missing angle in the triangle, in degrees.", 180 - a1 - a2, 0, angleTriangle(`${a1}°`, `${a2}°`), `$180 - ${a1} - ${a2} = ${180 - a1 - a2}$.`); } },
  { id: "f_expense_bar", strand: "financial_literacy", difficulty: "medium", build: (r) => { const income = pick(r, [800, 1000, 1200]); const e = [pick(r, [250, 300, 350]), pick(r, [120, 150, 200]), pick(r, [50, 70, 90]), pick(r, [60, 80, 100])]; const sum = e.reduce((a, b) => a + b, 0); return num(`The bar graph shows monthly expenses. If the monthly income is ${income} dollars, how much is left to save, in dollars?`, income - sum, 0, bars(e, ["Rent", "Food", "Phone", "Fun"]), `$${income} - ${sum} = ${income - sum}$.`); } },
  { id: "f_plan_graph", strand: "financial_literacy", difficulty: "hard", build: (r) => { const v0 = ri(r, 3, 6), perA = ri(r, 4, 6), perB = ri(r, 1, 3), feeA = ri(r, 0, 8); const feeB = feeA + (perA - perB) * v0; const maxV = 8; const costA = (v: number) => feeA + perA * v, costB = (v: number) => feeB + perB * v; const maxC = Math.max(costA(maxV), costB(maxV)); const sx = 190 / maxV, sy = 120 / maxC; const A: [number, number][] = [[0, costA(0) * sy], [maxV * sx, costA(maxV) * sy]]; const B: [number, number][] = [[0, costB(0) * sy], [maxV * sx, costB(maxV) * sy]]; const cross: [number, number] = [v0 * sx, costA(v0) * sy]; return num(`Two plans are graphed. Plan A costs ${feeA} dollars + ${perA} dollars/visit; Plan B costs ${feeB} dollars + ${perB} dollars/visit. After how many visits do they cost the same?`, v0, 0, twoLines(A, B, cross), `Equal at ${v0} visits (the red point).`); } },

  // ── EQAO REASONING TIER (tricky / multi-step) ──────────────
  // NUMBER
  { id: "n_scinot", strand: "number", difficulty: "hard", build: (r) => { const a = ri(r, 3, 9), b = ri(r, 4, 9), p = ri(r, 1, 5), q = ri(r, 1, 4); const c = a * b, m = c / 10, e = p + q + 1; return mc(r, `Evaluate and write in scientific notation: $(${a}\\times10^{${p}})(${b}\\times10^{${q}})$.`, `$${m}\\times10^{${e}}$`, [`$${c}\\times10^{${p + q}}$`, `$${m}\\times10^{${p + q}}$`, `$${m}\\times10^{${e + 1}}$`], null, `$${a}\\times${b}=${c}=${m}\\times10^1$; add exponents and normalize.`); } },
  { id: "n_sets", strand: "number", difficulty: "hard", build: (r) => { const frac = pick(r, ["\\tfrac{1}{2}", "\\tfrac{3}{4}", "-\\tfrac{2}{3}"]); const ints = `${ri(r, -6, -1)},\\ ${ri(r, 1, 9)}`; return ms(r, `Which TWO sets include ALL of these numbers: $${ints},\\ ${frac}$?`, ["Rational numbers", "Real numbers"], ["Integers", "Irrational numbers"], null, "A fraction is rational and real, but not an integer and not irrational."); } },
  { id: "n_density", strand: "number", difficulty: "hard", build: (r) => mc(r, "On a number line from 0 to 40, how does the density of ALL the positive integers compare with the density of the multiples of 5?", "The integers are more densely packed — more values lie in the same interval.", ["The multiples of 5 are more densely packed.", "They have exactly the same density.", "Neither set has a measurable density."], null, "Between any two whole numbers there are more integers than multiples of 5.") },

  // ALGEBRA — coding, transformation, graph-reasoning
  { id: "a_code_sale", strand: "algebra", difficulty: "medium", build: (r) => mc(r, "A program finds the sale price after a discount. itemPrice is the original price and discountRate is the percent off. Which line of code is correct?", "salePrice = itemPrice - (itemPrice * discountRate / 100)", ["salePrice = itemPrice * (discountRate / 100)", "salePrice = itemPrice - (discountRate / 100)", "salePrice = itemPrice + (itemPrice * discountRate / 100)"], null, "Subtract the discount AMOUNT (a percent of the price), not the rate itself.") },
  { id: "a_code_avg", strand: "algebra", difficulty: "medium", build: (r) => mc(r, "Which line of code correctly computes the average of three numbers a, b and c?", "avg = (a + b + c) / 3", ["avg = a + b + c / 3", "avg = (a + b + c) / 2", "avg = a + (b + c) / 3"], null, "Brackets first, so the whole sum is divided by 3.") },
  { id: "a_code_trace", strand: "algebra", difficulty: "hard", build: (r) => { const n = ri(r, 4, 9); return num(`A program runs: result = 0; then for i from 1 to ${n} it does result = result + (2 × i − 1); then it outputs result. What is the output?`, n * n, 0, null, `Adding the first ${n} odd numbers gives $${n}^2 = ${n * n}$.`); } },
  { id: "a_transform", strand: "algebra", difficulty: "hard", build: (r) => { const m = ri(r, 2, 4), b = ri(r, 1, 6), k = ri(r, 1, 5); return mc(r, `A line is $y = ${m}x + ${b}$. Its slope is doubled and its $y$-intercept is decreased by ${k}. What is the new equation?`, eqStr(2 * m, b - k), [eqStr(m, b - k), eqStr(2 * m, b + k), eqStr(2 * m, b - 2 * k)], null, `Slope $\\to ${2 * m}$, intercept $\\to ${b - k}$.`); } },
  { id: "a_graph_true", strand: "algebra", difficulty: "hard", build: (r) => { const feeA = ri(r, 8, 30), perA = ri(r, 5, 9), perB = ri(r, 2, 4), v = ri(r, 3, 7); const feeB = feeA + (perA - perB) * v; const maxV = 10; const cA = (d: number) => feeA + perA * d, cB = (d: number) => feeB + perB * d; const maxC = Math.max(cA(maxV), cB(maxV)); const sx = 190 / maxV, sy = 120 / maxC; const A: [number, number][] = [[0, cA(0) * sy], [maxV * sx, cA(maxV) * sy]]; const B: [number, number][] = [[0, cB(0) * sy], [maxV * sx, cB(maxV) * sy]]; const cross: [number, number] = [v * sx, cA(v) * sy]; return mc(r, `Plan A costs ${feeA} dollars + ${perA} dollars/day. Plan B costs ${feeB} dollars + ${perB} dollars/day. Which statement is TRUE?`, `For rentals longer than ${v} days, Plan B costs less than Plan A.`, [`For rentals longer than ${v} days, Plan A costs less than Plan B.`, "Plan B has the lower starting cost.", "The two plans never cost the same."], twoLines(A, B, cross), `They are equal at ${v} days; after that A grows faster.`); } },
  { id: "a_rate_compare", strand: "algebra", difficulty: "hard", build: (r) => { const N = ri(r, 2, 4), mB = ri(r, 1, 2), mA = N * mB; const maxV = 8; const maxC = mA * maxV; const sx = 190 / maxV, sy = 120 / maxC; const A: [number, number][] = [[0, 0], [maxV * sx, mA * maxV * sy]]; const B: [number, number][] = [[0, 0], [maxV * sx, mB * maxV * sy]]; return mc(r, "Two lines through the origin are shown. Which statement is TRUE?", `The rate of change of Graph A is ${N} times that of Graph B.`, [`The rate of change of Graph B is ${N} times that of Graph A.`, `The rate of change of Graph A is ${N + 1} times that of Graph B.`, "Both graphs have the same rate of change."], twoLines(A, B, [0, 0]), `Slope of A is ${mA}, slope of B is ${mB}.`); } },

  // DATA — outlier, box plot, trend
  { id: "d_outlier", strand: "data", difficulty: "hard", build: (r) => { const cluster: [number, number][] = [[20, 22], [55, 40], [90, 58], [125, 76], [160, 94]]; const xs = [40, 78, 116, 150]; const onLine = (x: number) => 0.5 * x + 12; const out = ri(r, 0, 3); const labeled = xs.map((x, i) => ({ x, y: i === out ? onLine(x) + (r() > 0.5 ? 48 : -42) : onLine(x), l: ["A", "B", "C", "D"][i] })); const choices = ["A", "B", "C", "D"].map((L2) => ({ id: L2.toLowerCase(), text: `Point ${L2}` })); return { kind: "multiple_choice", prompt: "Which labelled point is an outlier (does not fit the trend of the other data)?", figure: scatterLabeled(cluster, labeled), choices, answer: ["a", "b", "c", "d"][out], points: 1, feedback: "The outlier sits far from the line the other points follow." }; } },
  { id: "d_boxplot", strand: "data", difficulty: "medium", build: (r) => { const min = ri(r, 1, 4), q1 = min + ri(r, 2, 4), med = q1 + ri(r, 2, 4), q3 = med + ri(r, 2, 4), max = q3 + ri(r, 2, 4); const which = pick(r, ["median", "range", "interquartile range (IQR)"]); const ans = which === "median" ? med : which === "range" ? max - min : q3 - q1; return num(`From the box plot shown, what is the ${which}?`, ans, 0, boxPlot(min, q1, med, q3, max), which === "median" ? "The median is the line inside the box." : which === "range" ? "Range $=$ max $-$ min." : "IQR $= Q_3 - Q_1$."); } },
  { id: "d_trend", strand: "data", difficulty: "medium", build: (r) => { const start = ri(r, 6, 14), step = ri(r, 3, 8); const vals = [start, start + step, start + 2 * step, start + 3 * step]; const next = start + 4 * step; const sy = 110 / next; const pts: [number, number][] = vals.map((v, i) => [10 + i * 48, v * sy]); return num(`A value grows by the same amount each year: ${vals.join(", ")}. If the trend continues, what is the next value?`, next, 0, lineGraph(pts, "year", "value"), `Each year adds ${step}: next $= ${next}$.`); } },

  // GEOMETRY — exact radical
  { id: "g_exact_hyp", strand: "geometry_measurement", difficulty: "hard", build: (r) => { const [a, b] = pick(r, [[2, 3], [2, 5], [3, 5], [1, 4], [4, 5], [2, 6], [3, 7], [5, 6]]); const s = a * a + b * b; return mc(r, "Find the EXACT length of the hypotenuse, as a radical.", `$\\sqrt{${s}}$`, [`$${a + b}$`, `$\\sqrt{${a * b}}$`, `$${s}$`], rightTriangle(`${a}`, `${b}`), `$\\sqrt{${a}^2 + ${b}^2} = \\sqrt{${s}}$.`); } },

  // FINANCIAL — multi-step plan comparison
  { id: "f_payment", strand: "financial_literacy", difficulty: "hard", build: (r) => { const price = pick(r, [600, 800, 1000]); const downPct = pick(r, [25, 50]); const m1 = pick(r, [25, 30, 40]), months1 = pick(r, [12, 24]); const m2 = pick(r, [18, 20, 22, 25]), months2 = pick(r, [24, 36]); const totA = (price * downPct) / 100 + m1 * months1; let totB = m2 * months2; if (totB === totA) totB += 24; const diff = Math.abs(totA - totB); const bLess = totB < totA; return mc(r, `A bike costs ${price} dollars. Option A: ${downPct}% down payment plus ${m1} dollars/month for ${months1} months. Option B: no down payment and ${m2} dollars/month for ${months2} months. Which statement is correct?`, `Option ${bLess ? "B" : "A"} costs ${diff} dollars less than Option ${bLess ? "A" : "B"}.`, [`Option ${bLess ? "A" : "B"} costs ${diff} dollars less than Option ${bLess ? "B" : "A"}.`, "Both options cost the same in total.", `Option ${bLess ? "B" : "A"} costs ${diff + 50} dollars less than Option ${bLess ? "A" : "B"}.`], null, `Total A $= ${totA}$, total B $= ${totB}$.`); } },
  // ── from EQAO prep resources (tricky / multi-step) ─────────
  { id: "f_commission", strand: "financial_literacy", difficulty: "hard", build: (r) => { const sales = pick(r, [400, 500, 800, 1000, 1500]); const pct = pick(r, [5, 8, 10, 12]); const earned = (sales * pct) / 100; return num(`A salesperson earns ${pct}% commission on their sales. This week they earned ${earned} dollars. What were their total sales, in dollars?`, sales, 0, null, `Sales $= ${earned} \\div ${pct / 100} = ${sales}$.`); } },
  { id: "f_tips_budget", strand: "financial_literacy", difficulty: "hard", build: (r) => { const aTip = pick(r, [20, 25, 30]), aT = ri(r, 10, 16), jTip = pick(r, [18, 22, 28]), jT = ri(r, 10, 16), hotel = pick(r, [120, 150, 200]), car = pick(r, [80, 100, 120]); const left = aTip * aT + jTip * jT - hotel - car; return num(`Alfredo earns an average tip of ${aTip} dollars per table and served ${aT} tables. Jody earns ${jTip} dollars per table and served ${jT} tables. They then pay ${hotel} dollars for a hotel and ${car} dollars for a car. How much of their combined tips is left over, in dollars?`, left, 0, null, `$(${aTip}\\times${aT}) + (${jTip}\\times${jT}) - ${hotel} - ${car} = ${left}$.`); } },
  { id: "a_poly_perim", strand: "algebra", difficulty: "hard", build: (r) => { const a = ri(r, 3, 7), c = ri(r, 1, a - 1), b = ri(r, 4, 9), d = ri(r, 1, b - 1); return mc(r, `The total perimeter of two shapes is $(${a}x + ${b})$. One shape has perimeter $(${c}x + ${d})$. Which expression is the perimeter of the other shape?`, `$${a - c}x + ${b - d}$`, [`$${a + c}x + ${b + d}$`, `$${a - c}x + ${b + d}$`, `$${a - c}x - ${b - d}$`], null, `Subtract: $(${a}x+${b}) - (${c}x+${d}) = ${a - c}x + ${b - d}$.`); } },
  { id: "g_optimization", strand: "geometry_measurement", difficulty: "hard", build: (r) => { const P = pick(r, [16, 20, 24, 28, 32, 40]); const area = (P / 4) ** 2; return num(`A rectangle has a perimeter of ${P} units. What is the maximum possible area, in square units?`, area, 0, null, `Maximum is a square of side ${P / 4}: $${P / 4}^2 = ${area}$.`); } },
  { id: "a_linear_system", strand: "algebra", difficulty: "hard", build: (r) => { const m1 = ri(r, 2, 4); let m2 = ri(r, -3, 1); if (m2 === m1) m2 = m1 - 1; const x0 = ri(r, 1, 6), b1 = ri(r, 1, 6); const b2 = (m1 - m2) * x0 + b1; const rhs = `${m2}x ${b2 >= 0 ? `+ ${b2}` : `- ${Math.abs(b2)}`}`; return num(`Solve the linear system: $y = ${m1}x + ${b1}$ and $y = ${rhs}$. What is the value of $x$ at the intersection?`, x0, 0, null, `Set equal: $${m1}x + ${b1} = ${rhs}$, so $x = ${x0}$.`); } },
  { id: "g_parallel_angle", strand: "geometry_measurement", difficulty: "medium", build: (r) => { const x = ri(r, 40, 140); const rel = pick(r, [["alternate", x], ["corresponding", x], ["co-interior (same-side)", 180 - x]] as [string, number][]); return num(`The two lines are parallel. One angle measures ${x}°. Find the size of its ${rel[0]} angle, in degrees.`, rel[1], 0, parallelLines(`${x}°`), rel[0].startsWith("co") ? `Co-interior angles add to $180°$: $180 - ${x} = ${rel[1]}$.` : `${rel[0][0].toUpperCase() + rel[0].slice(1)} angles are equal: ${rel[1]}°.`); } },
  // ── remaining EQAO prep topics ─────────────────────────────
  { id: "a_distribute", strand: "algebra", difficulty: "medium", build: (r) => { const a = ri(r, 2, 5), b = ri(r, 2, 6), c = ri(r, 2, 9); return mc(r, `Expand: $${a}(${b}x + ${c})$.`, `$${a * b}x + ${a * c}$`, [`$${a * b}x + ${c}$`, `$${b}x + ${a * c}$`, `$${a * b}x - ${a * c}$`], null, `Distribute the ${a}: $${a * b}x + ${a * c}$.`); } },
  { id: "a_expand_binomial", strand: "algebra", difficulty: "hard", build: (r) => { const p = ri(r, 1, 6); let q = ri(r, 1, 6); if (p === 2 && q === 2) q = 3; return mc(r, `Expand: $(x + ${p})(x + ${q})$.`, `$x^2 + ${p + q}x + ${p * q}$`, [`$x^2 + ${p * q}x + ${p + q}$`, `$x^2 + ${p + q}x + ${p + q}$`, `$x^2 + ${p * q}$`], null, `FOIL: $x^2 + (${p}+${q})x + ${p}\\times${q}$.`); } },
  { id: "a_linear_vs", strand: "algebra", difficulty: "medium", build: (r) => { const nonlin = pick(r, [`$y = x^2 + ${ri(r, 1, 5)}$`, `$y = ${ri(r, 2, 4)}^x$`, `$y = \\dfrac{${ri(r, 4, 9)}}{x}$`]); const m1 = ri(r, 2, 5), m2 = ri(r, 1, 4), b1 = ri(r, 1, 6); return mc(r, "Which of the following relations is NON-linear?", nonlin, [`$y = ${m1}x + ${b1}$`, `$y = -${m2}x + ${ri(r, 1, 6)}$`, `$y = \\tfrac12 x - ${ri(r, 1, 5)}$`], null, "A non-linear relation has a variable exponent, a power of $x$, or $x$ in a denominator."); } },
  { id: "a_perp_slope", strand: "algebra", difficulty: "hard", build: (r) => { const m = ri(r, 2, 6); return mc(r, `A line has a slope of ${m}. What is the slope of a line perpendicular to it?`, `$-\\dfrac{1}{${m}}$`, [`$\\dfrac{1}{${m}}$`, `$${m}$`, `$-${m}$`], null, "Perpendicular slopes are negative reciprocals."); } },
  { id: "g_polygon_angles", strand: "geometry_measurement", difficulty: "medium", build: (r) => { const n = pick(r, [5, 6, 8, 10, 12]); return num(`What is the sum of the interior angles of a ${n}-sided polygon, in degrees?`, (n - 2) * 180, 0, null, `$(n-2)\\times180 = (${n}-2)\\times180 = ${(n - 2) * 180}$.`); } },
];

export function templateCount(strand: Strand): number {
  return TEMPLATES.filter((t) => t.strand === strand).length;
}

// Phase 2: build one adaptive stage — n questions across ALL strands at a target
// difficulty. `exclude` holds template ids already used elsewhere in the exam, so
// each stage (and Session B) uses DIFFERENT question types, not just new numbers.
export function generateStage(difficulty: Difficulty, n: number, exclude: Set<string> = new Set()): Generated[] {
  let pool = TEMPLATES.filter((t) => t.difficulty === difficulty && !exclude.has(t.id));
  if (pool.length < n) pool = [...pool, ...shuffle(Math.random, TEMPLATES.filter((t) => t.difficulty !== difficulty && !exclude.has(t.id)))];
  if (pool.length === 0) pool = TEMPLATES; // absolute fallback (exam longer than the template library)
  const order = shuffle(Math.random, pool);
  const out: Generated[] = [];
  for (let i = 0; i < n; i++) {
    const t = order[i % order.length]; // repeats only if the exam outgrows the pool
    const seed = (Math.random() * 2 ** 32) | 0;
    out.push({ id: `${t.id}_${seed >>> 0}`, templateId: t.id, strand: t.strand, difficulty: t.difficulty, ...t.build(mulberry32(seed)) });
  }
  return out;
}

// Build a fresh practice set of DISTINCT question types (no template repeats in a
// set), each with newly randomized numbers/figures. Capped at the number of
// templates available for the strand.
export function generateSet(strand: Strand, n = 10): Generated[] {
  const pool = TEMPLATES.filter((t) => t.strand === strand);
  if (pool.length === 0) return [];
  // Build one randomized instance per (distinct) template, then rank so sets
  // lean HARDER and picture-heavy like the real test: hard/medium and figure
  // questions are preferred, with a random tiebreak for variety across attempts.
  const built: Generated[] = pool.map((t) => {
    const seed = (Math.random() * 2 ** 32) | 0;
    return { id: `${t.id}_${seed >>> 0}`, templateId: t.id, strand: t.strand, difficulty: t.difficulty, ...t.build(mulberry32(seed)) };
  });
  const rank = (q: Generated) => (q.figure ? 1.5 : 0) + (q.difficulty === "hard" ? 2 : q.difficulty === "medium" ? 1 : 0) + Math.random() * 1.2;
  built.sort((a, b) => rank(b) - rank(a));
  return built.slice(0, Math.min(n, built.length));
}
