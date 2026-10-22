// IB AA SL 12.7 — Chapter 12 Review: radians and sectors, unit circle exact values, identities, trigonometric equations, graphs and sinusoidal models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard, plane } from "./lib.mjs";
import { fig, sector, unitPoint } from "./figs12.mjs";

export const TITLE = "12.7 Chapter 12 Review";
export const ID = "1baa0012-0001-4001-8001-000000001207";
const S = String.raw;
const PI = Math.PI;
const P = (x, y, label, color = "red") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 12 Review",
    overview: S`This review connects the chapter: radian measure, arcs and sectors, the unit circle and exact values, identities, trigonometric equations, and the graphs and models of periodic functions. The examples combine these as exam questions do.`,
    goals: [
      "work with radians, arcs, sectors and segments;",
      "find exact values with the unit circle;",
      "use the Pythagorean and double angle identities;",
      "solve trigonometric equations on an interval;",
      "sketch and model with sinusoidal functions.",
    ],
    curriculum: "SL 3.4–3.8 (circular functions)",
    prior: [
      [S`Convert \(\frac{5\pi}{6}\) to degrees.`, "150°."],
      [S`\(\cos\frac{4\pi}{3}\)?`, S`\(-\frac12\).`],
      [S`Period of \(y=\sin3x\)?`, S`\(\frac{2\pi}{3}\).`],
    ],
    words: [
      ["12.1", "radians, s = rθ, A = ½r²θ", ""],
      ["12.2", "unit circle, CAST, exact values", ""],
      ["12.3", "identities", ""],
      ["12.4", "equations", ""],
      ["12.5–12.6", "graphs and models", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Topic", "Key fact"], [
    ["radians", S`\(\pi=180^\circ\); \(s=r\theta\), \(A=\frac12r^2\theta\)`],
    ["unit circle", S`\((\cos\theta,\sin\theta)\); CAST; reference angles`],
    ["identities", S`\(\sin^2+\cos^2=1\); \(\sin2\theta=2\sin\theta\cos\theta\); \(\cos2\theta=1-2\sin^2\theta\)`],
    ["equations", "principal value, symmetry, period"],
    ["graphs/models", S`\(y=a\sin(b(x-c))+d\): amplitude, period \(\frac{2\pi}{b}\), shift, axis`],
  ])}
  ${fig({ items: sector(10, 0.8, { lr: "r = 10", lth: "0.8", segment: true }) }, "Example 1: a segment with r = 10, θ = 0.8")}
  ${keyIdea("Most chapter-12 problems reduce to the unit circle: values, signs and symmetry all come from it.")}`),

  section("📌 Explore", S`<p>Use the explorer to check the equation example.</p>`),

  widget("ibTrigEq", { init: [0, -0.6] }),

  examples([
    ["Level 1 · Segment", S`Find the area of the segment with radius 10 and angle 0.8 rad.`,
      [S`\(\frac12(100)(0.8-\sin0.8)\).`],
      S`\(\approx${(50 * (0.8 - Math.sin(0.8))).toFixed(2)}\)`],
    ["Level 2 · Exact values", S`Given \(\cos\theta=-\frac{7}{25}\) with θ in quadrant 3, find \(\sin\theta\) and \(\sin2\theta\).`,
      [S`\(\sin\theta=-\frac{24}{25}\).`, S`\(\sin2\theta=2\left(-\frac{24}{25}\right)\left(-\frac7{25}\right)=\frac{336}{625}\).`],
      S`\(-\frac{24}{25}\); \(\frac{336}{625}\)`,
      fig({ items: unitPoint(PI + Math.acos(7 / 25), { label: "θ" }) })],
    ["Level 2 · Equation", S`Solve \(\sin x=-0.6\) for \(0\le x\le2\pi\).`,
      [S`Reference \(\sin^{-1}0.6\approx0.6435\); quadrants 3 and 4.`],
      S`\(\approx3.785,\ 5.640\)`],
    ["Level 2 · Identity equation", S`Solve \(\cos2x=\cos x\) for \(0\le x\le2\pi\).`,
      [S`\(2\cos^2x-\cos x-1=0\Rightarrow(2\cos x+1)(\cos x-1)=0\).`],
      S`\(0,\ \frac{2\pi}{3},\ \frac{4\pi}{3},\ 2\pi\)`],
    ["Level 3 · Model", "A buoy bobs between 1.2 m and 3.8 m above the sea floor, reaching the top every 6 s, first at t = 1. Write a model and find when it is first at 3 m.",
      [S`\(h=1.3\cos\left(\frac{\pi}{3}(t-1)\right)+2.5\).`, S`\(\cos\left(\frac{\pi}{3}(t-1)\right)=\frac{0.5}{1.3}\Rightarrow t=1\pm\frac{3}{\pi}(1.176)\); first positive: \(t\approx${(1 - (3 / PI) * Math.acos(0.5 / 1.3) + 6 > 0 && 1 - (3 / PI) * Math.acos(0.5 / 1.3) > 0 ? (1 - (3 / PI) * Math.acos(0.5 / 1.3)).toFixed(2) : (1 + (3 / PI) * Math.acos(0.5 / 1.3)).toFixed(2))}\).`],
      S`first at \(t\approx${(1 - (3 / PI) * Math.acos(0.5 / 1.3)) > 0 ? (1 - (3 / PI) * Math.acos(0.5 / 1.3)).toFixed(2) : (1 + (3 / PI) * Math.acos(0.5 / 1.3)).toFixed(2)}\) s`,
      plane({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 4.5 }, step: { x: 1, y: 0.5 }, curves: [{ f: (t) => 1.3 * Math.cos((PI / 3) * (t - 1)) + 2.5, color: "violet" }], lines: [{ m: 0, b: 3, color: "amber", dash: true }], points: [P(1, 3.8, "top (1, 3.8)")], xlabel: "t (s)", ylabel: "h (m)" }, "The buoy model")],
  ]),

  practice([
    q("Level 1 · arc", S`Find the arc length for radius 8 and angle \(\frac{3\pi}{4}\) (2 d.p.).`, num(6 * PI, 0.01),
      "rθ.", [S`\(6\pi\).`], S`\(\approx18.85\)`),
    q("Level 1 · exact", S`Find \(\sin\frac{7\pi}{6}\) (decimal).`, num(-0.5, 0.001),
      "Quadrant 3.", ["−½."], S`\(-\frac12\)`),
    q("Level 2 · identity", S`If \(\sin x=0.8\), find \(\cos2x\).`, num(-0.28, 0.001),
      "1 − 2(0.64).", ["−0.28."], S`\(-0.28\)`),
    q("Level 2 · count", S`How many solutions has \(\tan2x=1\) in \([0,2\pi]\)?`, num(4),
      "u = 2x ∈ [0, 4π].", ["4."], S`\(4\)`),
    q("Level 2 · period", S`Find the period of \(y=7\cos\left(\frac{2x}{5}\right)\) (3 d.p.).`, num(5 * PI, 0.001),
      "2π ÷ 2/5.", [S`\(5\pi\).`], S`\(\approx15.708\)`),
  ]),

  ...hard([
    ["Sector and triangle", S`A sector OAB has radius 9 and angle θ. Its area is 54. Find θ, the arc length and the area of triangle OAB.`,
      [S`\(54=\frac12(81)\theta\Rightarrow\theta=\frac43\).`, S`Arc \(=12\).`, S`Triangle \(\frac12(81)\sin\frac43\approx${(40.5 * Math.sin(4 / 3)).toFixed(2)}\).`],
      S`\(\theta=\frac43\), arc 12, triangle \(\approx${(40.5 * Math.sin(4 / 3)).toFixed(2)}\)`,
      fig({ items: sector(9, 4 / 3, { lr: "r = 9", lth: "θ", ls: "" }) })],
    ["Quadratic in sine", S`Solve \(2\cos^2x=3\sin x+3\) for \(0\le x\le2\pi\).`,
      [S`\(2(1-\sin^2x)=3\sin x+3\Rightarrow2\sin^2x+3\sin x+1=0\).`, S`\((2\sin x+1)(\sin x+1)=0\): \(\sin x=-\frac12\) or \(-1\).`],
      S`\(\frac{7\pi}{6},\ \frac{3\pi}{2},\ \frac{11\pi}{6}\)`,
      plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -6.5, ymax: 3 }, step: { x: PI / 2, y: 1 }, curves: [{ f: (x) => 2 * Math.cos(x) ** 2 - 3 * Math.sin(x) - 3, color: "violet" }], points: [P((7 * PI) / 6, 0, "7π/6"), P((3 * PI) / 2, 0, "3π/2"), P((11 * PI) / 6, 0, "11π/6")] }, "Three zeros in [0, 2π]")],
  ], [
    q("Level 3 · exact", S`Find \(\cos^2\frac{5\pi}{12}-\sin^2\frac{5\pi}{12}\) exactly (decimal, 4 d.p.).`, num(-Math.sqrt(3) / 2, 0.0001),
      "cos(5π/6).", [S`\(-\frac{\sqrt3}{2}\).`], S`\(-\frac{\sqrt3}{2}\)`),
    q("Level 3 · model", S`\(h(t)=20-15\cos\left(\frac{\pi t}{10}\right)\). Find the maximum height and the time it is first reached.`, num(10),
      "cos = −1 at πt/10 = π.", ["Max 35 at t = 10."], S`\(t=10\)`),
    q("Level 3 · sector", S`A sector has perimeter 20 and radius 5. Find its area.`, num(25),
      "θ = 2.", [S`\(\frac12(25)(2)\).`], S`\(25\)`),
  ]),

  wrapUp({
    qas: [
      ["What must be in radians?", "θ in s = rθ and A = ½r²θ, and x in calculus and most graphs."],
      ["How do I get exact values?", "Reference angle + exact table + CAST sign."],
      ["Which identity for cos 2x?", "The form matching the rest of the equation."],
      ["How do I find all solutions?", "Principal value, symmetry, then periods within the interval."],
      ["How do I build a model?", "a and d from max/min, b from the period, c from the time of a max (cos)."],
    ],
    summary: [
      "π = 180°; s = rθ; A = ½r²θ.",
      "Unit circle gives values and signs.",
      "sin² + cos² = 1; double angle identities.",
      "y = a sin(b(x − c)) + d models periodic data.",
    ],
    next: "Chapter 13 studies more calculus: derivatives and integrals of trigonometric functions.",
  }),
];
