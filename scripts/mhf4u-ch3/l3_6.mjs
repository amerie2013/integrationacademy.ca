// MHF4U 3.6 — Chapter 3 Review (NEW lesson): reciprocals of linear and quadratic functions, (ax + b)/(cx + d),
// rational equations and inequalities, and rational models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane, rat } from "./lib.mjs";

export const TITLE = "3.6 Chapter 3 Review";
export const ID = "6d4f0003-0001-4001-8001-000000000306";

const S = String.raw;
const V = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 3 Review — Rational Functions",
    overview: S`This page pulls the chapter together before the test: each lesson's key idea on one screen, multi-step examples that combine several skills, mixed practice, a readiness checklist and a hard level. Sketch each graph before you look at the figure, and use the explorer to check inequalities.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "sketch reciprocals of linear and quadratic functions;",
      "analyse (ax + b)/(cx + d) completely;",
      "solve rational equations and inequalities;",
      "solve problems with rational models.",
    ],
    curriculum: "C2.1–C2.3, C3.5–C3.7, C4.1, C4.2, D1.9 (whole chapter)",
    prior: [
      [S`VA of \(\frac1{x+4}\)?`, S`\(x=-4\).`],
      [S`Turning point of \(\frac1{x^2+2}\)?`, S`\(\left(0,\tfrac12\right)\).`],
      [S`HA of \(\frac{3x+1}{x-2}\)?`, S`\(y=3\).`],
    ],
    words: [
      ["Vertical asymptote", "zero of the denominator (no common factor)", ""],
      ["Horizontal asymptote", "y = 0 for 1/f; y = a/c for (ax + b)/(cx + d)", ""],
      ["Extraneous root", "fails a restriction", ""],
      ["Critical values", "zeros of numerator and denominator", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["3.1 1/(kx + c)", "zero → VA; f = ±1 → invariant points", "\\(\\frac1{x-3}\\): VA 3, (4, 1)", "no x-intercept"],
    ["3.2 1/quadratic", "0, 1 or 2 VAs; vertex (h, k) → (h, 1/k)", "\\(\\frac1{x^2-4}\\): max (0, −¼)", "1/k, not k"],
    ["3.3 (ax + b)/(cx + d)", "VA −d/c, HA a/c", "\\(\\frac{x+2}{x-1}\\): x = 1, y = 1", "common factor → hole"],
    ["3.4 Equations, inequalities", "clear denominators / one fraction + sign chart", "\\(\\frac{x-4}{x+2}\\ge0\\)", "exclude denominator zeros"],
    ["3.5 Models", "asymptotes in context; rates of change", "\\(8+\\frac{500}x\\)", "average cost ≠ total cost"],
  ])),

  section("📌 Explore", S`<p>Use the rational solver to check the inequality examples and hard-level problems.</p>`),

  widget("rationalSolver", { init: { a: 1, b: 2, c: 1, d: -3, k: 2, op: "≤" } }),

  section("📌 The big picture", keyIdea(S`Every rational function in this chapter is built from a denominator that can be 0. Its zeros give vertical asymptotes (and critical values that are never included); the behaviour for large \(|x|\) gives the horizontal asymptote; and the sign of numerator and denominator on each interval solves inequalities.`)),

  examples([
    ["Reciprocal of a line", S`Sketch \(g(x)=\dfrac1{3x-6}\), showing the asymptotes and invariant points.`,
      [S`VA \(x=2\); HA \(y=0\).`, S`\(3x-6=1\Rightarrow x=\tfrac73\); \(3x-6=-1\Rightarrow x=\tfrac53\).`],
      S`VA \(x=2\); invariant points \(\left(\tfrac73,1\right)\), \(\left(\tfrac53,-1\right)\)`,
      plane({ view: V, curves: [{ f: (x) => 3 * x - 6, color: "blue" }, ...rat((x) => 1 / (3 * x - 6), [2], V)], vlines: [{ x: 2, color: "red", dash: true }], points: [{ x: 7 / 3, y: 1, color: "green" }, { x: 5 / 3, y: -1, color: "green" }], step: { x: 1, y: 1 } })],
    ["Reciprocal of a quadratic", S`Find the asymptotes and turning point of \(g(x)=\dfrac1{x^2-x-2}\).`,
      [S`\((x-2)(x+1)\): VAs \(x=-1\), \(x=2\).`, S`Vertex of \(f\) at \(x=\tfrac12\): \(f=-\tfrac94\) → max \(\left(\tfrac12,-\tfrac49\right)\).`],
      S`VAs \(x=-1, 2\); local max \(\left(0.5,-0.\overline{4}\right)\)`,
      plane({ view: { xmin: -4, xmax: 5, ymin: -3, ymax: 3 }, curves: rat((x) => 1 / (x * x - x - 2), [-1, 2], { xmin: -4, xmax: 5 }), vlines: [{ x: -1, color: "red", dash: true }, { x: 2, color: "red", dash: true }], points: [{ x: 0.5, y: -4 / 9, label: "(0.5, −0.44)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["A full analysis", S`Analyse \(f(x)=\dfrac{2x-3}{x+1}\).`,
      [S`VA \(x=-1\); HA \(y=2\).`, S`x-intercept \(1.5\); y-intercept \(-3\).`],
      S`VA \(x=-1\), HA \(y=2\), \((1.5,0)\), \((0,-3)\)`,
      plane({ view: { xmin: -8, xmax: 8, ymin: -8, ymax: 10 }, curves: rat((x) => (2 * x - 3) / (x + 1), [-1], { xmin: -8, xmax: 8 }), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [{ x: 1.5, y: 0, color: "blue" }, { x: 0, y: -3, color: "green" }], step: { x: 1, y: 2 } })],
    ["An inequality", S`Solve \(\dfrac{x+2}{x-3}\le2\).`,
      [S`\(\dfrac{x+2-2(x-3)}{x-3}\le0\Rightarrow\dfrac{8-x}{x-3}\le0\Rightarrow\dfrac{x-8}{x-3}\ge0\).`, S`Critical values 3 (excluded) and 8 (included): +, −, +.`],
      S`\(x\lt3\) or \(x\ge8\)`,
      plane({ view: { xmin: -4, xmax: 12, ymin: -8, ymax: 10 }, curves: [...rat((x) => (x + 2) / (x - 3), [3], { xmin: -4, xmax: 12 }), { f: () => 2, color: "green" }], vlines: [{ x: 3, color: "red", dash: true }], points: [{ x: 8, y: 2, label: "(8, 2)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Average cost below a target", S`\(A(x)=\dfrac{1200+15x}{x}\). For how many items is the average cost below $20?`,
      [S`\(1200+15x\lt20x\) (with \(x>0\)) \(\Rightarrow1200\lt5x\Rightarrow x>240\).`],
      S`more than 240 items`],
  ]),

  practice([
    q("asymptote", S`Find the vertical asymptote of \(y=\dfrac1{5-x}\). Give the x-value.`, num(5),
      "5 − x = 0.", [S`\(x=5\).`], S`\(5\)`),
    q("maximum", S`What is the maximum value of \(y=\dfrac1{x^2+4}\)?`, num(0.25, 0.0001),
      "Smallest denominator 4.", [S`\(\frac14\).`], S`\(0.25\)`),
    q("horizontal asymptote", S`Find the horizontal asymptote of \(y=\dfrac{5x+1}{x-2}\).`, num(5),
      "a/c.", [S`\(\frac51\).`], S`\(5\)`),
    q("equation", S`Solve \(\dfrac6{x-1}=3\).`, num(3),
      "6 = 3(x − 1).", [S`\(x-1=2\).`], S`\(3\)`),
    q("inequality", S`Solve \(\dfrac{x+1}{x-2}>0\).`, choice([S`\(x\lt-1\) or \(x>2\)`, S`\(-1\lt x\lt2\)`, S`\(x>2\)`, S`\(x>-1\)`], 0),
      "Critical values −1 and 2.", ["Signs +, −, +."], S`\(x\lt-1\) or \(x>2\)`),
  ]),

  section("📌 Am I ready for the test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["3.1", "I can sketch y = 1/(kx + c) with asymptotes and invariant points."],
      ["3.2", "I can sketch the reciprocal of a quadratic with 0, 1 or 2 asymptotes."],
      ["3.3", "I can find the asymptotes, intercepts and holes of (ax + b)/(cx + d)."],
      ["3.4", "I can solve rational equations (rejecting extraneous roots) and inequalities with sign charts."],
      ["3.5", "I can build and interpret rational models and their rates of change."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["Find the function, then solve", S`\(f(x)=\dfrac{ax+1}{x+b}\) has VA \(x=-2\) and passes through \(\left(2,\tfrac34\right)\). Find \(f\), then solve \(f(x)\lt\tfrac12\).`,
      [S`\(b=2\); \(\frac{2a+1}{4}=\frac34\Rightarrow a=1\): \(f(x)=\frac{x+1}{x+2}\).`, S`\(\frac{x+1}{x+2}-\frac12\lt0\Rightarrow\frac{2x+2-x-2}{2(x+2)}\lt0\Rightarrow\frac{x}{x+2}\lt0\).`, S`Critical values \(-2\), \(0\): signs +, −, +.`],
      S`\(f(x)=\dfrac{x+1}{x+2}\); \(-2\lt x\lt0\)`,
      plane({ view: V, curves: [...rat((x) => (x + 1) / (x + 2), [-2], V), { f: () => 0.5, color: "green" }], vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: 2, y: 0.75, label: "(2, ¾)", color: "blue" }, { x: 0, y: 0.5, label: "(0, ½)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["A family of reciprocals", S`For \(g(x)=\dfrac1{x^2-4x+k}\): for which \(k\) is there exactly one vertical asymptote? State the range when \(k=5\).`,
      [S`One VA when \(x^2-4x+k\) has a double zero: discriminant \(16-4k=0\Rightarrow k=4\).`, S`\(k=5\): \((x-2)^2+1\ge1\Rightarrow0\lt g\le1\).`],
      S`\(k=4\); range \(0\lt y\le1\)`],
  ], [
    q("hard", S`How many vertical asymptotes does \(y=\dfrac1{x^2+2x-8}\) have?`, num(2),
      "Factor.", [S`\((x+4)(x-2)\).`], S`\(2\)`),
    q("hard", S`Solve \(\dfrac{x^2}{x-1}=\dfrac1{x-1}\).`, num(-1),
      "Watch the restriction.", [S`\(x^2=1\Rightarrow x=\pm1\), but \(x\ne1\).`], S`\(-1\)`),
    q("hard", S`How many integers satisfy \(\dfrac{x-3}{x+1}\le0\)?`, num(4),
      "−1 < x ≤ 3.", [S`\(0,1,2,3\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed practice and the hard level without notes, then revisit the explorer for each mistake."],
      ["What are the most common mistakes?", "Including a denominator zero in an inequality, forgetting restrictions, using b/d instead of a/c for the horizontal asymptote, and multiplying an inequality by a variable expression."],
      ["How much work should I show?", "State restrictions, show the single-fraction form and a sign chart, and label asymptotes and intercepts on sketches."],
      ["What is the fastest way to sketch a rational function?", "Asymptotes first (dashed), then intercepts, then one test point in each region."],
      ["How does this lead to Chapter 4?", "Chapter 4 switches to trigonometry in radians; rational expressions return in identities like tan x = sin x / cos x."],
    ],
    summary: [
      "Zeros of the denominator → asymptotes / excluded values.",
      "HA: 0 for 1/f, a/c for (ax + b)/(cx + d).",
      "Equations: clear denominators; inequalities: sign chart.",
      "Models: read asymptotes and rates in context.",
    ],
    next: "Write the Chapter 3 test. Chapter 4 begins trigonometry in radians.",
  }),
];
