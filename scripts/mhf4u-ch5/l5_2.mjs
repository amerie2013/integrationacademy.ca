// MHF4U 5.2 — Graphs of Reciprocal Trigonometric Functions: csc x, sec x and cot x sketched from sin, cos and tan
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { PI } from "./trigfig.mjs";

export const TITLE = "5.2 Graphs of Reciprocal Trigonometric Functions";
export const ID = "4b9c719d-17fc-4060-bd0e-2f0c9277c2c8";

const S = String.raw;
const lab = (x, y, label, color = "blue") => ({ x, y, label, color });
/** curve pieces of 1/g on [a, b] split at the asymptotes `poles` */
const pieces = (f, poles, a, b, color = "violet") => { const cuts = [a, ...poles.filter((p) => p > a && p < b).sort((u, v) => u - v), b]; return cuts.slice(0, -1).map((l, i) => ({ f, a: i === 0 ? l : l + 0.03, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.03, color })); };
const mult = (s, off, a, b) => { const out = []; for (let n = -8; n <= 8; n++) { const x = off + n * s; if (x > a && x < b) out.push(x); } return out; };
const fig = (f, base, poles, view, points = []) => plane({ view, curves: [...(base ? [{ f: base, color: "green" }] : []), ...pieces(f, poles, view.xmin, view.xmax)], vlines: poles.filter((x) => x > view.xmin && x < view.xmax).map((x) => ({ x, color: "red", dash: true })), points, step: { x: 1, y: 1 }, xlabel: "x (rad)" });
const V = { xmin: -6.5, xmax: 6.5, ymin: -5, ymax: 5 };
const csc = (x) => 1 / Math.sin(x), sec = (x) => 1 / Math.cos(x), cot = (x) => 1 / Math.tan(x);
export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Graphs of Reciprocal Trigonometric Functions",
    overview: S`You sketched reciprocals of lines and parabolas in chapter 3. The same reasoning works here. Wherever \(\sin x=0\), \(\csc x=\frac1{\sin x}\) has a vertical asymptote. Wherever \(\sin x=\pm1\), the two graphs touch, and those points stay fixed. Each hump of the sine wave becomes a U-shaped branch of the cosecant.`,
    goals: [
      "sketch \\(\\csc x\\), \\(\\sec x\\) and \\(\\cot x\\) from their reciprocals;",
      "state period, domain, range and asymptotes;",
      "find the turning points of csc and sec;",
      "give intervals of increase and decrease;",
      "use the graphs to solve simple equations.",
    ],
    curriculum: "B2.3 (sketch and describe the graphs of the reciprocal trigonometric functions)",
    prior: [
      [S`Where is \(\sin x=0\) on \([0,2\pi]\)?`, S`\(0,\ \pi,\ 2\pi\).`],
      [S`\(\sec\frac\pi3\)?`, S`\(2\).`],
      [S`What happens to \(\frac1y\) when \(y\) is near 0?`, S`It grows without bound.`],
    ],
    words: [
      ["Cosecant", "\\(\\csc x=\\frac1{\\sin x}\\)", ""],
      ["Secant", "\\(\\sec x=\\frac1{\\cos x}\\)", ""],
      ["Cotangent", "\\(\\cot x=\\frac{\\cos x}{\\sin x}\\)", ""],
      ["Invariant point", "where the function equals ±1", ""],
    ],
  }),

  section("📌 The three graphs", S`
  ${table(["Feature", "y = csc x", "y = sec x", "y = cot x"], [
    ["period", "2π", "2π", "π"],
    ["asymptotes", "x = nπ", "x = π/2 + nπ", "x = nπ"],
    ["range", "|y| ≥ 1", "|y| ≥ 1", "all real numbers"],
    ["zeros", "none", "none", "x = π/2 + nπ"],
    ["symmetry", "odd", "even", "odd"],
  ])}
  ${fig(csc, Math.sin, mult(PI, 0, -6.5, 6.5), V)}
  ${keyIdea(S`To sketch \(\csc x\): (1) draw \(\sin x\) lightly; (2) draw asymptotes at its zeros; (3) mark the points where \(\sin x=\pm1\); (4) draw a U-shaped branch from each of those points, opening away from the axis.`)}`),

  section("📌 Explore", S`<p>Use the explorer to review sin, cos and tan. For each, imagine flipping the y-values: a value of 0.5 becomes 2, and a value of 0 becomes an asymptote.</p>`),

  widget("ibTrigGraph", { init: 0 }),

  section("📌 Secant and cotangent", S`
  ${fig(sec, Math.cos, mult(PI, PI / 2, -6.5, 6.5), V)}
  ${fig(cot, null, mult(PI, 0, -6.5, 6.5), V)}
  ${watchOut([
    "csc and sec never take values strictly between −1 and 1.",
    "cot x has asymptotes where tan x = 0, and zeros where tan x has asymptotes.",
    "A maximum of sine is a minimum of cosecant, on the same branch.",
    "State increase and decrease separately on each branch.",
    "Reciprocal is not inverse: csc x is not sin⁻¹x.",
  ])}`),

  examples([
    ["Cosecant from sine", S`List the asymptotes and turning points of \(y=\csc x\) on \([0,2\pi]\).`,
      [S`Asymptotes where \(\sin x=0\): \(x=0,\ \pi,\ 2\pi\).`, S`\(\sin\frac\pi2=1\) gives a local min \(\left(\frac\pi2,1\right)\).`, S`\(\sin\frac{3\pi}2=-1\) gives a local max \(\left(\frac{3\pi}2,-1\right)\).`],
      S`asymptotes \(0,\pi,2\pi\); \(\left(\frac\pi2,1\right)\), \(\left(\frac{3\pi}2,-1\right)\)`,
      fig(csc, Math.sin, [0, PI, 2 * PI], { xmin: -0.5, xmax: 7, ymin: -5, ymax: 5 }, [lab(PI / 2, 1, "(π/2, 1)"), lab((3 * PI) / 2, -1, "(3π/2, −1)")])],
    ["Secant from cosine", S`State the domain and range of \(y=\sec x\).`,
      [S`\(\cos x=0\) at \(x=\frac\pi2+n\pi\): these are excluded.`, S`\(|\cos x|\le1\) gives \(|\sec x|\ge1\).`],
      S`\(x\ne\frac\pi2+n\pi\); \(y\le-1\) or \(y\ge1\)`,
      fig(sec, Math.cos, mult(PI, PI / 2, -6.5, 6.5), V, [lab(0, 1, "(0, 1)")])],
    ["Cotangent", S`State the zeros and asymptotes of \(y=\cot x\) on \((0,\pi)\) and describe its behaviour.`,
      [S`Asymptotes at \(0\) and \(\pi\).`, S`Zero where \(\cos x=0\): \(x=\frac\pi2\).`, S`\(\cot x\) decreases on the whole interval.`],
      S`zero \(\frac\pi2\); decreasing on \((0,\pi)\)`,
      fig(cot, null, [0, PI], { xmin: -0.5, xmax: 3.6, ymin: -5, ymax: 5 }, [lab(PI / 2, 0, "π/2")])],
    ["Increase and decrease", S`On \(\left(0,\pi\right)\), where does \(y=\csc x\) decrease and increase?`,
      [S`\(\sin x\) rises on \(\left(0,\frac\pi2\right)\), so \(\csc x\) falls there.`, S`\(\sin x\) falls on \(\left(\frac\pi2,\pi\right)\), so \(\csc x\) rises there.`],
      S`decreasing on \(\left(0,\frac\pi2\right)\); increasing on \(\left(\frac\pi2,\pi\right)\)`],
    ["A vertical stretch", S`Describe \(y=2\sec x\) and state its range.`,
      [S`Stretch \(\sec x\) vertically by 2.`, S`\(|\sec x|\ge1\) becomes \(|y|\ge2\). The asymptotes do not move.`],
      S`\(y\le-2\) or \(y\ge2\)`,
      fig((x) => 2 / Math.cos(x), (x) => 2 * Math.cos(x), mult(PI, PI / 2, -6.5, 6.5), { xmin: -6.5, xmax: 6.5, ymin: -6, ymax: 6 })],
  ]),

  practice([
    q("period", S`What is the period of \(y=\cot x\)? (2 decimals)`, num(3.14, 0.01),
      "Same as tangent.", [S`\(\pi\).`], S`\(3.14\)`),
    q("asymptotes", S`How many asymptotes does \(y=\sec x\) have on \([0,2\pi]\)?`, num(2),
      "Where cos x = 0.", [S`\(\frac\pi2,\ \frac{3\pi}2\).`], S`\(2\)`),
    q("value", S`What is the local minimum value of \(y=\csc x\) on \((0,\pi)\)?`, num(1),
      "Where sin x is largest.", [S`\(\csc\frac\pi2=1\).`], S`\(1\)`),
    q("range", S`Which value is NOT in the range of \(y=\sec x\)?`, choice([S`\(0.5\)`, S`\(1\)`, S`\(-1\)`, S`\(2\)`], 0),
      "|sec x| ≥ 1.", [S`\(0.5\) is between \(-1\) and \(1\).`], S`\(0.5\)`),
    q("zeros", S`How many zeros does \(y=\csc x\) have?`, num(0),
      "The numerator is 1.", [S`It is never 0.`], S`\(0\)`),
  ]),

  ...hard([
    ["A horizontal compression", S`State the period, asymptotes on \([0,2\pi]\), and range of \(y=\csc2x\).`,
      [S`Period \(\frac{2\pi}2=\pi\).`, S`\(\sin2x=0\) at \(x=\frac{n\pi}2\): \(0,\ \frac\pi2,\ \pi,\ \frac{3\pi}2,\ 2\pi\).`, S`The range is unchanged: \(|y|\ge1\).`],
      S`period \(\pi\); five asymptotes; \(|y|\ge1\)`,
      fig((x) => 1 / Math.sin(2 * x), (x) => Math.sin(2 * x), mult(PI / 2, 0, -0.5, 6.5), { xmin: -0.5, xmax: 6.5, ymin: -5, ymax: 5 })],
    ["Solving with a reciprocal", S`Solve \(\sec x=2\) on \([0,2\pi]\), and show the solutions on the graph.`,
      [S`\(\cos x=\frac12\).`, S`\(x=\frac\pi3\) in Q1 and \(x=\frac{5\pi}3\) in Q4.`],
      S`\(x=\frac\pi3,\ \frac{5\pi}3\)`,
      plane({ view: { xmin: -0.5, xmax: 7, ymin: -5, ymax: 5 }, curves: [...pieces(sec, [PI / 2, (3 * PI) / 2], -0.5, 7), { f: () => 2, color: "green" }], points: [lab(PI / 3, 2, "π/3"), lab((5 * PI) / 3, 2, "5π/3")], step: { x: 1, y: 1 }, xlabel: "x (rad)" })],
  ], [
    q("hard", S`How many solutions does \(\csc x=3\) have on \([0,4\pi]\)?`, num(4),
      "Two per full cycle.", [S`\(\sin x=\frac13\) twice per cycle.`], S`\(4\)`),
    q("hard", S`What is the period of \(y=\sec3x\)? (2 decimals)`, num(2.09, 0.01),
      "2π/3.", [S`\(\frac{2\pi}3\).`], S`\(2.09\)`),
    q("hard", S`Evaluate \(\csc^2\dfrac\pi4-\cot^2\dfrac\pi4\).`, num(1),
      "Pythagorean identity.", [S`\(2-1\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["Why are there no zeros for csc and sec?", "The reciprocal of a number can never be 0."],
      ["Why are the branches U-shaped?", "As sine rises to 1 and falls away, its reciprocal falls to 1 and rises away."],
      ["Do the periods change?", "No: a reciprocal repeats whenever the original does."],
      ["What about cot x?", "It is the reciprocal of tan x, so it has zeros at tan's asymptotes and asymptotes at tan's zeros."],
      ["How do I enter csc on a calculator?", "As 1/sin(x), in radian mode."],
    ],
    summary: [
      "Zeros of the original become asymptotes.",
      "Points with value ±1 are invariant.",
      "csc x and sec x: period 2π, range |y| ≥ 1.",
      "cot x: period π, range all reals.",
    ],
    next: "5.3 transforms sine and cosine in radians.",
  }),
];
