// MCV4U 3.7 — Chapter 3 Review (NEW lesson): increasing/decreasing, extrema, concavity, rational functions, full
// sketches and optimization, with multi-step examples, mixed practice, a readiness checklist and a hard level
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane, rat } from "./lib.mjs";

export const TITLE = "3.7 Chapter 3 Review";
export const ID = "6d4fc003-0001-4001-8001-000000000307";

const S = String.raw;
const VQ = { xmin: -6, xmax: 6, ymin: -6, ymax: 10 };
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 3 Review — Curve Sketching",
    overview: S`This page pulls the chapter together before the test. The first derivative tells where a graph rises and falls and where it turns; the second derivative tells how it bends; asymptotes and intercepts fix its position; and the same tools find the best value in an optimization problem. Each example below combines several of these ideas — try it before reading the solution, and use the explorer to rebuild sketches step by step.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "find intervals, extrema, concavity and inflection points together;",
      "find absolute extrema on a closed interval;",
      "sketch polynomial and rational functions from their features;",
      "set up and solve optimization problems.",
    ],
    curriculum: "B1.1–B1.5, B2.4, B2.5 (whole chapter)",
    prior: [
      [S`\(f'\gt0\) on an interval means…`, S`\(f\) is increasing there.`],
      [S`\(f''\lt0\) means…`, S`concave down.`],
      [S`Where are the vertical asymptotes of a rational function?`, S`At zeros of the denominator (not cancelled by the numerator).`],
    ],
    words: [
      ["Critical number", "\\(f'(c)=0\\) or \\(f'(c)\\) does not exist", ""],
      ["Inflection point", "where the concavity changes", "\\(f''\\) changes sign"],
      ["Absolute extremum", "largest/smallest value on the domain", "check endpoints"],
      ["Constraint", "the condition linking the variables", "fixed area, volume"],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["3.1 Increasing/decreasing", "sign of f′ on intervals", "x³ − 27x: falls on (−3, 3)", "test f′, not f"],
    ["3.2 Maxima and minima", "first derivative test; endpoints", "x² − 2x on [0, 3]: max 3", "f′(c) = 0 is not enough"],
    ["3.3 Concavity", "sign of f″; second derivative test", "x³: inflection at 0", "f″(c) = 0 is not enough"],
    ["3.4 Rational functions", "asymptotes + f′ + f″", "(x + 2)/(x − 1): x = 1, y = 1", "cut at asymptotes"],
    ["3.5 Full sketches", "one table for all signs", "label every key point", "check end behaviour"],
    ["3.6 Optimization", "one variable, domain, justify", "perimeter 40: 10 × 10", "answer the question asked"],
  ])),

  section("📌 Explore", S`<p>Use the curve sketcher to rebuild sketches step by step: move the step slider from intercepts to the finished curve, and check each layer against your own work.</p>`),

  widget("curveSketcher", { init: { cs: [1, -2, -1, 2, 0], step: 2 } }),

  section("📌 The big picture", keyIdea(S`\(f\) gives the points, \(f'\) gives the direction (rising, falling, turning), \(f''\) gives the bend (cup, cap, inflection). Asymptotes and end behaviour frame the picture. Optimization is the same analysis applied to a function built from a real situation.`)),

  examples([
    ["Intervals, extrema and inflection together", S`For \(f(x)=x^3-9x^2+24x-10\), find the intervals of increase and decrease, the local extrema, the concavity and the inflection point.`,
      [S`\(f'(x)=3x^2-18x+24=3(x-2)(x-4)\): increasing on \((-\infty,2)\) and \((4,\infty)\), decreasing on \((2,4)\).`, S`Local max \((2,10)\), local min \((4,6)\).`, S`\(f''(x)=6x-18\): concave down for \(x\lt3\), up for \(x\gt3\); inflection \((3,8)\).`],
      S`max \((2,10)\), min \((4,6)\), inflection \((3,8)\)`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 16 }, curves: [{ f: (x) => x ** 3 - 9 * x * x + 24 * x - 10, color: "violet" }], points: [{ x: 2, y: 10, label: "max (2, 10)", color: "red" }, { x: 4, y: 6, label: "min (4, 6)", color: "blue" }, { x: 3, y: 8, label: "inflection (3, 8)", color: "violet" }], step: { x: 0.5, y: 2 } })],
    ["Absolute extrema", S`Find the absolute extrema of \(f(x)=x^4-18x^2\) on \([-1,4]\).`,
      [S`\(f'(x)=4x^3-36x=4x(x-3)(x+3)\); critical numbers in the interval: 0 and 3.`, S`\(f(-1)=-17\), \(f(0)=0\), \(f(3)=-81\), \(f(4)=-32\).`],
      S`absolute maximum 0 at \(x=0\); absolute minimum \(-81\) at \(x=3\)`],
    ["A rational sketch", S`Sketch \(f(x)=\dfrac{3x^2}{x^2-4}\).`,
      [S`Vertical asymptotes \(x=\pm2\); horizontal \(y=3\); even; intercept \((0,0)\).`, S`\(f'(x)=\dfrac{6x(x^2-4)-3x^2(2x)}{(x^2-4)^2}=\dfrac{-24x}{(x^2-4)^2}\): increasing for \(x\lt0\), decreasing for \(x\gt0\).`, S`Local maximum \((0,0)\); the outer branches approach \(y=3\) from above.`],
      S`asymptotes \(x=\pm2\), \(y=3\); local maximum \((0,0)\)`,
      plane({ view: VQ, curves: rat((x) => (3 * x * x) / (x * x - 4), [-2, 2], VQ), vlines: [{ x: -2, color: "red", dash: true }, { x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [{ x: 0, y: 0, label: "max (0, 0)", color: "green" }], step: { x: 1, y: 2 } })],
    ["When the second derivative test fails", S`Classify the critical points of \(f(x)=x^4-8x^3+18x^2\) and find its inflection points.`,
      [S`\(f'(x)=4x(x-3)^2\): critical numbers 0 and 3. \(f''(x)=12x^2-48x+36=12(x-1)(x-3)\).`, S`\(f''(0)=36\gt0\): minimum \((0,0)\). \(f''(3)=0\): inconclusive; \(f'\gt0\) on both sides of 3, so no extremum.`, S`\(f''\) changes sign at 1 and 3: inflection points \((1,11)\) and \((3,27)\).`],
      S`minimum \((0,0)\); inflection points \((1,11)\) and \((3,27)\) (the second is flat)`,
      plane({ view: { xmin: -1, xmax: 4.5, ymin: -3, ymax: 40 }, curves: [{ f: (x) => x ** 4 - 8 * x ** 3 + 18 * x * x, color: "violet" }], points: [{ x: 0, y: 0, label: "min (0, 0)", color: "blue" }, { x: 1, y: 11, label: "(1, 11)", color: "violet" }, { x: 3, y: 27, label: "flat inflection (3, 27)", color: "violet" }], step: { x: 0.5, y: 5 } })],
    ["A poster with margins", S`A poster has 6 cm margins at the top and bottom and 4 cm at the sides, around 384 cm² of print. Find the dimensions of the smallest poster.`,
      [S`Print \(x\) wide by \(\tfrac{384}{x}\) high; poster area \(A(x)=(x+8)\left(\tfrac{384}{x}+12\right)=480+12x+\tfrac{3072}{x}\), \(x\gt0\).`, S`\(A'(x)=12-\tfrac{3072}{x^2}=0\Rightarrow x=16\); \(A''\gt0\): minimum.`, S`Print \(16\times24\); poster \(24\times36\), area 864 cm².`],
      S`24 cm wide by 36 cm high`,
      plane({ view: { xmin: 0, xmax: 50, ymin: 600, ymax: 1400 }, curves: [{ f: (x) => 480 + 12 * x + 3072 / x, a: 4, b: 50, color: "violet" }], points: [{ x: 16, y: 864, label: "min (16, 864)", color: "red" }], step: { x: 5, y: 100 } })],
  ]),

  practice([
    q("decreasing", S`\(f(x)=x^2-10x+1\) is decreasing for \(x\lt a\). Find \(a\).`, num(5),
      "f′(x) = 2x − 10.", [S`\(x\lt5\).`], S`\(5\)`),
    q("local min", S`Find the local minimum value of \(f(x)=x^3-3x+1\).`, num(-1),
      "f′ = 3x² − 3: min at x = 1.", [S`\(f(1)=1-3+1\).`], S`\(-1\)`),
    q("inflection", S`At what \(x\) does \(f(x)=2x^3-12x^2\) have an inflection point?`, num(2),
      "f″(x) = 12x − 24.", [S`\(x=2\).`], S`\(2\)`),
    q("asymptote", S`Find the horizontal asymptote of \(f(x)=\dfrac{5x^2+1}{x^2-3}\): \(y=\,?\)`, num(5),
      "Equal degrees.", [S`\(\frac51\).`], S`\(5\)`),
    q("optimization", S`Two positive numbers have product 64. Find the smallest possible sum.`, num(16),
      "S = x + 64/x.", [S`\(x=8\): \(8+8\).`], S`\(16\)`),
  ]),

  section("📌 Am I ready for the test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["3.1", "I can find intervals of increase and decrease from a sign chart of f′."],
      ["3.2", "I can classify critical points and find absolute extrema on a closed interval."],
      ["3.3", "I can find intervals of concavity and inflection points, and use the second derivative test."],
      ["3.4", "I can find the asymptotes of a rational function and sketch it."],
      ["3.5", "I can produce a complete, labelled curve sketch and match f, f′ and f″."],
      ["3.6", "I can set up, solve and justify an optimization problem."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["A cusp and a vertical tangent", S`Sketch \(f(x)=x^{1/3}(x-4)\).`,
      [S`\(f(x)=x^{4/3}-4x^{1/3}\); \(f'(x)=\tfrac43x^{1/3}-\tfrac43x^{-2/3}=\dfrac{4(x-1)}{3x^{2/3}}\): critical numbers 1 (\(f'=0\)) and 0 (\(f'\) does not exist).`, S`\(f'\lt0\) for \(x\lt1\) (except 0), \(f'\gt0\) for \(x\gt1\): minimum \((1,-3)\); at 0 a vertical tangent, no extremum.`, S`\(f''(x)=\tfrac49x^{-2/3}+\tfrac89x^{-5/3}=\dfrac{4(x+2)}{9x^{5/3}}\): sign changes at \(-2\) and 0, inflection points \((-2,\approx7.56)\) and \((0,0)\).`],
      S`minimum \((1,-3)\); inflection points \((-2,7.56)\) and \((0,0)\), the second with a vertical tangent`,
      plane({ view: { xmin: -5, xmax: 6, ymin: -5, ymax: 12 }, curves: [{ f: (x) => Math.cbrt(x) * (x - 4), color: "violet" }], points: [{ x: 1, y: -3, label: "min (1, −3)", color: "blue" }, { x: -2, y: 7.56, label: "inflection (−2, 7.56)", color: "violet" }, { x: 0, y: 0, label: "(0, 0)", color: "violet" }], step: { x: 1, y: 2 } })],
    ["The largest cylinder in a sphere", S`Find the largest volume of a cylinder that fits inside a sphere of radius 6 cm.`,
      [S`With height \(h\) and radius \(r\): \(r^2+\left(\tfrac h2\right)^2=36\), so \(V=\pi r^2h=\pi\left(36h-\tfrac{h^3}{4}\right)\), \(0\le h\le12\).`, S`\(V'(h)=\pi\left(36-\tfrac34h^2\right)=0\Rightarrow h=\sqrt{48}\approx6.93\), \(r^2=24\).`, S`\(V=\pi(24)(6.93)\approx522.4\) cm³; the endpoints give 0.`],
      S`height about 6.93 cm, radius about 4.90 cm, volume about 522.4 cm³`,
      plane({ view: { xmin: 0, xmax: 12.5, ymin: 0, ymax: 600 }, curves: [{ f: (h) => Math.PI * (36 * h - (h ** 3) / 4), a: 0, b: 12, color: "violet" }], points: [{ x: Math.sqrt(48), y: 522.4, label: "max (6.93, 522.4)", color: "red" }], step: { x: 1, y: 100 } })],
  ], [
    q("hard", S`\(f(x)=x^3+ax^2+bx\) has critical numbers \(x=1\) and \(x=3\). Find \(a\).`, num(-6),
      "f′(x) = 3(x − 1)(x − 3) = 3x² − 12x + 9.", [S`\(2a=-12\).`], S`\(-6\)`),
    q("hard", S`Find the minimum value of \(A(x)=x^2+\dfrac{250}{x}\) for \(x\gt0\).`, num(75),
      "2x − 250/x² = 0.", [S`\(x=5\): \(25+50\).`], S`\(75\)`),
    q("hard", S`How many inflection points does \(f(x)=x^4-4x^3+6\) have?`, num(2),
      "f″(x) = 12x(x − 2).", [S`Sign changes at 0 and 2.`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed practice and hard level without notes, then rebuild one full sketch with the explorer and compare."],
      ["What are the most common mistakes?", "Assuming f′(c) = 0 or f″(c) = 0 settles the question, forgetting endpoints, not cutting at asymptotes, and leaving optimization answers as a bare x."],
      ["How much should I show in a sketch question?", "The derivatives, the factored critical and inflection numbers, a summary table, and a labelled graph."],
      ["How do I justify an optimization answer?", "Compare the critical value with the endpoints, or use a derivative test on an open domain."],
      ["How does this lead to Chapter 4?", "Chapter 4 differentiates sine and cosine, and all of these sketching and optimization tools apply to periodic models too."],
    ],
    summary: [
      "f′: direction and turning points.",
      "f″: concavity and inflection.",
      "Asymptotes and end behaviour frame the sketch.",
      "Optimization: model, domain, derivative, justify.",
    ],
    next: "Write the Chapter 3 test. Chapter 4 differentiates sinusoidal functions.",
  }),
];
