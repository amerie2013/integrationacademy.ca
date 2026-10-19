// MCV4U 3.5 — Putting It All Together: a full curve-sketching algorithm (domain, intercepts, symmetry, asymptotes,
// f′ and f″), polynomial and rational sketches, sketches from given conditions, and matching f, f′ and f″
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";

export const TITLE = "3.5 Putting It All Together";
export const ID = "4205bf21-fc6b-4cbe-889f-41ab2828f641";

const S = String.raw;
const VR = { xmin: -5, xmax: 4, ymin: -2, ymax: 8 };
const VS = { xmin: -10, xmax: 6, ymin: -22, ymax: 12 };
export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Putting It All Together",
    overview: S`Each earlier lesson gave one piece of information about a graph. A complete <strong>curve sketch</strong> combines them in a fixed order: the domain and any asymptotes; the intercepts and symmetry; the critical numbers, intervals of increase and decrease and the extrema from \(f'\); the intervals of concavity and the inflection points from \(f''\). Recording everything in one table before drawing makes the sketch accurate and quick, and it works for polynomials and rational functions alike.`,
    goals: [
      "follow a complete curve-sketching algorithm;",
      "organize f′ and f″ information in one table;",
      "sketch polynomial and rational functions accurately;",
      "sketch a graph from given conditions;",
      "match the graphs of f, f′ and f″.",
    ],
    curriculum: "B1.5 (sketch graphs of polynomial and simple rational functions by analysing key features), B1.1 (connect the graphs of f, f′ and f″)",
    prior: [
      [S`Where is \(x^3-12x\) increasing?`, S`\(x\lt-2\) or \(x\gt2\).`],
      [S`Where is \(x^3-6x^2\) concave up?`, S`\(x\gt2\).`],
      [S`Horizontal asymptote of \(\frac{2x}{x-1}\)?`, S`\(y=2\).`],
    ],
    words: [
      ["Curve sketch", "a graph showing every key feature, not just plotted points", ""],
      ["Summary table", "intervals with the signs of f′ and f″ and the shape", ""],
      ["End behaviour", "what f does as \\(x\\to\\pm\\infty\\)", "leading term"],
      ["Symmetry", "even: y-axis; odd: origin", ""],
    ],
  }),

  section("📌 The algorithm", S`
  ${table(["Step", "What to find"], [
    ["1. Domain", "excluded values; vertical asymptotes"],
    ["2. Intercepts, symmetry", "\\(f(0)\\), zeros of f; is f even or odd?"],
    ["3. End behaviour", "leading term, or horizontal/oblique asymptote"],
    ["4. First derivative", "critical numbers, intervals of increase/decrease, extrema"],
    ["5. Second derivative", "intervals of concavity, inflection points"],
    ["6. Sketch", "plot key points, then follow the table"],
  ])}
  ${plane({ view: { xmin: -6, xmax: 4, ymin: -16, ymax: 26 }, curves: [{ f: (x) => x ** 3 + 3 * x * x - 9 * x - 5, color: "violet" }], points: [{ x: -3, y: 22, label: "max (−3, 22)", color: "red" }, { x: 1, y: -10, label: "min (1, −10)", color: "blue" }, { x: -1, y: 6, label: "inflection (−1, 6)", color: "violet" }, { x: 0, y: -5, label: "(0, −5)", color: "amber" }], step: { x: 1, y: 4 } }, "f(x) = x³ + 3x² − 9x − 5 with every key point labelled.")}
  ${keyIdea(S`Gather all the information before drawing. The summary table — intervals across the top, rows for the sign of \(f'\), the sign of \(f''\), and the shape (rising/falling, cup/cap) — tells you exactly how to join the key points.`)}`),

  section("📌 Explore", S`<p>Use the step slider to build the sketch of a quartic one layer at a time: intercepts, then critical points, then the increasing and decreasing pieces, then inflection points, and finally the curve. Change the coefficients and repeat the steps for a new function.</p>`),

  widget("curveSketcher", { init: { cs: [1, -1, -3, 1, 2], step: 0 } }),

  section("📌 Making the sketch convincing", S`
  <p>Label every key point with coordinates, draw asymptotes as dashed lines, and make the concavity visible: cups where \(f''\gt0\), caps where \(f''\lt0\).</p>
  ${watchOut([
    "Plot the key points first; join them only after the table is complete.",
    "Keep the curve smooth through local extrema (horizontal tangents) — no sharp corners unless f′ does not exist.",
    "Check the end behaviour against the leading term.",
    "At an inflection point the curve crosses its tangent.",
    "For rational functions, the graph never touches a vertical asymptote.",
  ])}`),

  examples([
    ["A cubic from start to finish", S`Sketch \(f(x)=x^3+3x^2-9x-5\).`,
      [S`Domain \(\mathbb R\); y-intercept \(-5\); zeros near \(-4.69\), \(-0.49\), \(2.18\); \(f\to\pm\infty\) as \(x\to\pm\infty\).`, S`\(f'(x)=3(x+3)(x-1)\): increasing on \((-\infty,-3)\) and \((1,\infty)\); max \((-3,22)\), min \((1,-10)\).`, S`\(f''(x)=6x+6\): concave down for \(x\lt-1\), up for \(x\gt-1\); inflection \((-1,6)\).`],
      S`see the labelled graph above`],
    ["A quartic with a flat point", S`Sketch \(f(x)=3x^4-4x^3\).`,
      [S`Intercepts: \(3x^3(x-\tfrac43)=0\Rightarrow x=0,\ \tfrac43\).`, S`\(f'(x)=12x^2(x-1)\): decreasing for \(x\lt1\) (no sign change at 0), increasing for \(x\gt1\); minimum \((1,-1)\).`, S`\(f''(x)=12x(3x-2)\): inflection points \((0,0)\) and \(\left(\tfrac23,-\tfrac{16}{27}\right)\).`],
      S`minimum \((1,-1)\); inflection points \((0,0)\), \((0.67,-0.59)\); horizontal tangent but no extremum at 0`,
      plane({ view: { xmin: -1, xmax: 1.8, ymin: -1.5, ymax: 2 }, curves: [{ f: (x) => 3 * x ** 4 - 4 * x ** 3, color: "violet" }], points: [{ x: 1, y: -1, label: "min (1, −1)", color: "blue" }, { x: 0, y: 0, label: "(0, 0)", color: "violet" }, { x: 2 / 3, y: -16 / 27, label: "inflection", color: "violet" }, { x: 4 / 3, y: 0, label: "(4/3, 0)", color: "amber" }], step: { x: 0.25, y: 0.5 } })],
    ["A rational function with a squared denominator", S`Sketch \(f(x)=\dfrac{2x}{(x-1)^2}\).`,
      [S`Vertical asymptote \(x=1\), with \(f\to+\infty\) on both sides (numerator near 2, denominator positive); horizontal asymptote \(y=0\); intercept \((0,0)\).`, S`\(f'(x)=\dfrac{2(x-1)^2-2x\cdot2(x-1)}{(x-1)^4}=\dfrac{-2(x+1)}{(x-1)^3}\): decreasing for \(x\lt-1\), increasing on \((-1,1)\), decreasing for \(x\gt1\).`, S`Local minimum \(\left(-1,-\tfrac12\right)\).`],
      S`minimum \((-1,-0.5)\); vertical asymptote \(x=1\) (up on both sides); horizontal asymptote \(y=0\)`,
      plane({ view: VR, curves: rat((x) => (2 * x) / (x - 1) ** 2, [1], VR), vlines: [{ x: 1, color: "red", dash: true }], points: [{ x: -1, y: -0.5, label: "min (−1, −½)", color: "blue" }, { x: 0, y: 0, label: "(0, 0)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["A sketch from conditions", S`Sketch a function with \(f(0)=2\), \(f'(-2)=f'(1)=0\), \(f'\gt0\) only on \((-2,1)\), \(f''\gt0\) for \(x\lt-\tfrac12\) and \(f''\lt0\) for \(x\gt-\tfrac12\).`,
      [S`Falling, then rising from a minimum at \(x=-2\) to a maximum at \(x=1\), then falling.`, S`Cup shape left of \(-\tfrac12\), cap shape to the right; inflection at \(x=-\tfrac12\).`, S`One function that fits: \(f(x)=-2x^3-3x^2+12x+2\).`],
      S`min at \(x=-2\), max at \(x=1\), inflection at \(x=-0.5\), passing through \((0,2)\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -22, ymax: 14 }, curves: [{ f: (x) => -2 * x ** 3 - 3 * x * x + 12 * x + 2, color: "violet" }], points: [{ x: -2, y: -18, label: "min (−2, −18)", color: "blue" }, { x: 1, y: 9, label: "max (1, 9)", color: "red" }, { x: -0.5, y: -4.5, label: "inflection", color: "violet" }, { x: 0, y: 2, label: "(0, 2)", color: "amber" }], step: { x: 1, y: 4 } })],
    ["Matching f, f′ and f″", S`The graphs A (violet), B (blue) and C (amber) show a function, its derivative and its second derivative. Which is which?`,
      [S`C is a line through the origin — the derivative of a parabola.`, S`B is a parabola, zero at \(x=\pm\sqrt2\), exactly where A has horizontal tangents.`, S`C is zero where B has its vertex, and at A's inflection point.`],
      S`A is \(f\), B is \(f'\), C is \(f''\) (here \(f(x)=x^3-6x\))`,
      plane({ view: { xmin: -3.2, xmax: 3.2, ymin: -8, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 6 * x, color: "violet" }, { f: (x) => 3 * x * x - 6, color: "blue" }, { f: (x) => 6 * x, color: "amber" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("intercept", S`Find the y-intercept of \(f(x)=x^4-3x^3+2x-7\).`, num(-7),
      "Substitute x = 0.", [S`\(f(0)=-7\).`], S`\(-7\)`),
    q("extrema", S`How many local extrema does \(f(x)=x^4-2x^2+5\) have?`, num(3),
      "f′(x) = 4x(x − 1)(x + 1).", [S`Sign changes at \(-1,0,1\).`], S`\(3\)`),
    q("symmetry", S`What symmetry does \(f(x)=x^4-5x^2\) have?`, choice(["symmetric about the y-axis (even)", "symmetric about the origin (odd)", "both", "neither"], 0),
      "Compare f(−x) with f(x).", [S`\(f(-x)=f(x)\).`], "even"),
    q("inflection", S`At what \(x\) does \(f(x)=x^3+6x^2\) have an inflection point?`, num(-2),
      "f″(x) = 6x + 12.", [S`\(6x+12=0\).`], S`\(-2\)`),
    q("end behaviour", S`Describe the end behaviour of \(f(x)=-2x^5+x\).`, choice(["rises to the left, falls to the right", "falls to the left, rises to the right", "rises at both ends", "falls at both ends"], 0),
      "Leading term −2x⁵.", [S`Odd degree, negative leading coefficient.`], "up on the left, down on the right"),
  ]),

  ...hard([
    ["A quartic with a double critical number", S`Sketch \(f(x)=x^4-6x^2+8x\).`,
      [S`\(f'(x)=4x^3-12x+8=4(x-1)^2(x+2)\): decreasing for \(x\lt-2\), increasing for \(x\gt-2\) (no sign change at 1); minimum \((-2,-24)\).`, S`\(f''(x)=12x^2-12\): inflection points \((-1,-13)\) and \((1,3)\).`, S`At \((1,3)\) the tangent is horizontal and the concavity changes: a flat inflection point.`],
      S`one minimum \((-2,-24)\); inflection points \((-1,-13)\) and \((1,3)\), the second with a horizontal tangent`,
      plane({ view: { xmin: -3.5, xmax: 2.5, ymin: -28, ymax: 14 }, curves: [{ f: (x) => x ** 4 - 6 * x * x + 8 * x, color: "violet" }], points: [{ x: -2, y: -24, label: "min (−2, −24)", color: "blue" }, { x: -1, y: -13, label: "inflection", color: "violet" }, { x: 1, y: 3, label: "flat inflection (1, 3)", color: "violet" }], step: { x: 0.5, y: 4 } })],
    ["A rational function with an oblique asymptote", S`Sketch \(f(x)=\dfrac{x^2}{x+3}\).`,
      [S`Divide: \(f(x)=x-3+\dfrac{9}{x+3}\); vertical asymptote \(x=-3\), oblique asymptote \(y=x-3\).`, S`\(f'(x)=1-\dfrac{9}{(x+3)^2}=0\Rightarrow x=0\) or \(x=-6\): minimum \((0,0)\), maximum \((-6,-12)\).`, S`\(f''(x)=\dfrac{18}{(x+3)^3}\): concave down for \(x\lt-3\), up for \(x\gt-3\).`],
      S`max \((-6,-12)\), min \((0,0)\); asymptotes \(x=-3\) and \(y=x-3\)`,
      plane({ view: VS, curves: rat((x) => (x * x) / (x + 3), [-3], VS), vlines: [{ x: -3, color: "red", dash: true }], lines: [{ m: 1, b: -3, color: "red", dash: true }], points: [{ x: 0, y: 0, label: "min (0, 0)", color: "blue" }, { x: -6, y: -12, label: "max (−6, −12)", color: "red" }], step: { x: 1, y: 2 } })],
  ], [
    q("hard", S`How many local extrema does \(f(x)=3x^4-8x^3+6x^2\) have?`, num(1),
      "f′(x) = 12x(x − 1)².", [S`Only \(x=0\) has a sign change.`], S`\(1\)`),
    q("hard", S`How many inflection points does \(f(x)=\dfrac{x}{x^2-4}\) have?`, num(1),
      "f″(x) = 2x(x² + 12)/(x² − 4)³.", [S`The numerator is zero only at 0, and the sign changes there.`], S`\(1\)`),
    q("hard", S`Find the local maximum value of \(f(x)=x^3-3x^2-5\).`, num(-5),
      "f′(x) = 3x(x − 2); + then − at 0.", [S`\(f(0)=-5\).`], S`\(-5\)`),
  ]),

  wrapUp({
    qas: [
      ["Do I always need every step?", "List them all; some will be quick (no asymptotes for a polynomial, no symmetry for most functions), but skipping a step is how features get missed."],
      ["What if I can't find the zeros exactly?", "Estimate them from the table of values or the Intermediate Value Theorem; the critical points matter more for the shape."],
      ["How precise must a sketch be?", "Key points labelled and correctly placed, correct shape between them; it does not need to be to scale."],
      ["How do I tell f, f′ and f″ apart?", "Zeros of each graph line up with horizontal tangents of the graph above it in the chain f → f′ → f″."],
      ["What is a flat inflection point?", "A point with a horizontal tangent where the concavity changes, like x³ at 0 — a critical point that is not an extremum."],
    ],
    summary: [
      "Domain → intercepts → end behaviour → f′ → f″ → sketch.",
      "One summary table for all signs.",
      "Label every key point.",
      "Zeros of f′ ↔ horizontal tangents of f.",
    ],
    next: "3.6 uses maximums and minimums to solve optimization problems.",
  }),
];
