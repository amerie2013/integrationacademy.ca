// MCV4U 3.3 — Concavity and the Second Derivative Test: concave up/down from the sign of f″, points of inflection,
// the second derivative test for local extrema, when the test fails, and the point of diminishing returns
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "3.3 Concavity and the Second Derivative Test";
export const ID = "30beed89-884d-4da3-aa7e-afd4f562e33b";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🌙",
    title: "Concavity and the Second Derivative Test",
    overview: S`Two graphs can both rise and still look different: one bends upward like a cup, the other bends downward like a cap. This bending is <strong>concavity</strong>. Where \(f''(x)\gt0\), the slopes \(f'\) are increasing and the graph is <strong>concave up</strong> — it lies above its tangent lines. Where \(f''(x)\lt0\), the graph is <strong>concave down</strong> and lies below its tangents. A point where the concavity changes is a <strong>point of inflection</strong>. Concavity also gives a quick way to classify critical points: the <strong>second derivative test</strong>.`,
    goals: [
      "determine intervals of concavity from the sign of f″;",
      "find points of inflection;",
      "classify critical points with the second derivative test;",
      "recognize when the second derivative test gives no answer;",
      "interpret inflection points in context.",
    ],
    curriculum: "B1.4 (determine, using the second derivative, intervals of concavity and points of inflection; classify critical points with the second derivative test)",
    prior: [
      [S`Find \(f''(x)\) for \(f(x)=x^3-6x^2\).`, S`\(6x-12\).`],
      [S`Where is \(6x-12\) positive?`, S`For \(x\gt2\).`],
      [S`Classify the critical point of \(x^2\) at 0.`, S`A minimum.`],
    ],
    words: [
      ["Concave up", "\\(f''\\gt0\\): slopes increase; graph above its tangents", "a cup"],
      ["Concave down", "\\(f''\\lt0\\): slopes decrease; graph below its tangents", "a cap"],
      ["Point of inflection", "a point on the graph where the concavity changes", ""],
      ["Second derivative test", "\\(f'(c)=0\\): \\(f''(c)\\gt0\\) min, \\(f''(c)\\lt0\\) max", ""],
    ],
  }),

  section("📌 Reading the second derivative", S`
  ${table(["Sign of f″", "Slopes f′", "Shape", "At a critical point"], [
    ["\\(f''\\gt0\\)", "increasing", "concave up ∪", "local minimum"],
    ["\\(f''\\lt0\\)", "decreasing", "concave down ∩", "local maximum"],
    ["\\(f''=0\\)", "—", "possible inflection", "test gives no answer"],
  ])}
  ${plane({ view: { xmin: -1.5, xmax: 5.5, ymin: -30, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 5, a: -1.5, b: 2, color: "amber" }, { f: (x) => x ** 3 - 6 * x * x + 5, a: 2, b: 5.5, color: "blue" }], points: [{ x: 2, y: -11, label: "inflection (2, −11)", color: "violet" }, { x: 0, y: 5, label: "max (0, 5)", color: "red" }, { x: 4, y: -27, label: "min (4, −27)", color: "blue" }], step: { x: 1, y: 5 } }, "f(x) = x³ − 6x² + 5: concave down (amber) for x < 2, concave up (blue) for x > 2.")}
  ${keyIdea(S`Concavity: \(f''\gt0\) on an interval ⇒ concave up; \(f''\lt0\) ⇒ concave down. Inflection points occur where \(f''\) changes sign (usually where \(f''=0\)). Second derivative test: if \(f'(c)=0\) and \(f''(c)\gt0\), \(f\) has a local minimum at \(c\); if \(f''(c)\lt0\), a local maximum; if \(f''(c)=0\), use the first derivative test.`)}`),

  section("📌 Explore", S`<p>Slide the point along the curve. Where the curve is blue (concave up) it sits above the green tangent; where it is amber (concave down) it sits below. Watch the tangent "cross" the curve exactly at the purple inflection points.</p>`),

  widget("concavityLab", { init: { fn: "quartic", x: 1 } }),

  section("📌 Inflection points and the second derivative test", S`
  <p>To find inflection points, solve \(f''(x)=0\), then check that \(f''\) actually changes sign there. For the second derivative test, evaluate \(f''\) at each critical number.</p>
  ${watchOut([
    "f″(c) = 0 does not guarantee an inflection point: f(x) = x⁴ is concave up on both sides of 0.",
    "An inflection point is a point (x, y) on the graph: give both coordinates.",
    "Concavity is about f″, not f′: a decreasing graph can be concave up.",
    "If f″(c) = 0 at a critical number, the second derivative test is inconclusive — go back to the first derivative test.",
    "Concave up does not mean increasing.",
  ])}`),

  examples([
    ["Concavity of a cubic", S`Find the intervals of concavity and the point of inflection of \(f(x)=x^3-6x^2+5\).`,
      [S`\(f'(x)=3x^2-12x\), \(f''(x)=6x-12\).`, S`\(f''\lt0\) for \(x\lt2\), \(f''\gt0\) for \(x\gt2\).`, S`\(f(2)=8-24+5=-11\).`],
      S`concave down on \((-\infty,2)\), concave up on \((2,\infty)\); inflection point \((2,-11)\)`],
    ["Two inflection points", S`Find the intervals of concavity and the inflection points of \(f(x)=x^4-4x^3\).`,
      [S`\(f''(x)=12x^2-24x=12x(x-2)\).`, S`Signs: \(+\) on \((-\infty,0)\), \(-\) on \((0,2)\), \(+\) on \((2,\infty)\).`, S`\(f(0)=0\), \(f(2)=-16\).`],
      S`concave up on \((-\infty,0)\) and \((2,\infty)\), down on \((0,2)\); inflection points \((0,0)\) and \((2,-16)\)`,
      plane({ view: { xmin: -1.5, xmax: 4.5, ymin: -30, ymax: 10 }, curves: [{ f: (x) => x ** 4 - 4 * x ** 3, a: -1.5, b: 0, color: "blue" }, { f: (x) => x ** 4 - 4 * x ** 3, a: 0, b: 2, color: "amber" }, { f: (x) => x ** 4 - 4 * x ** 3, a: 2, b: 4.5, color: "blue" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "violet" }, { x: 2, y: -16, label: "(2, −16)", color: "violet" }, { x: 3, y: -27, label: "min (3, −27)", color: "red" }], step: { x: 1, y: 5 } })],
    ["The second derivative test", S`Classify the critical points of \(f(x)=2x^3+3x^2-36x\).`,
      [S`\(f'(x)=6x^2+6x-36=6(x+3)(x-2)\); \(f''(x)=12x+6\).`, S`\(f''(-3)=-30\lt0\): maximum, \(f(-3)=81\).`, S`\(f''(2)=30\gt0\): minimum, \(f(2)=-44\).`],
      S`local maximum \((-3,81)\); local minimum \((2,-44)\)`,
      plane({ view: { xmin: -6, xmax: 5, ymin: -60, ymax: 100 }, curves: [{ f: (x) => 2 * x ** 3 + 3 * x * x - 36 * x, color: "violet" }], points: [{ x: -3, y: 81, label: "max (−3, 81)", color: "red" }, { x: 2, y: -44, label: "min (2, −44)", color: "blue" }], step: { x: 1, y: 20 } })],
    ["When the test fails", S`For \(f(x)=x^4\) and \(g(x)=x^3\), show that the second derivative test gives no answer at 0, and classify each point.`,
      [S`\(f'(0)=0\), \(f''(x)=12x^2\Rightarrow f''(0)=0\); \(g'(0)=0\), \(g''(x)=6x\Rightarrow g''(0)=0\).`, S`First derivative test: \(f'=4x^3\) goes \(-\to+\): minimum. \(g'=3x^2\ge0\): no sign change.`],
      S`\(x^4\) has a minimum at 0; \(x^3\) has neither (an inflection point)`,
      plane({ view: { xmin: -1.6, xmax: 1.6, ymin: -2, ymax: 3 }, curves: [{ f: (x) => x ** 4, color: "violet" }, { f: (x) => x ** 3, color: "blue" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "red" }], step: { x: 0.5, y: 0.5 } })],
    ["Diminishing returns", S`Total sales after \(t\) months of advertising are \(S(t)=-t^3+12t^2+100\) (units), \(0\le t\le8\). When are sales growing fastest?`,
      [S`Growth rate \(S'(t)=-3t^2+24t\); it is largest where \(S''(t)=-6t+24=0\), \(t=4\).`, S`\(S''\) changes from \(+\) to \(-\): inflection point \((4,228)\), with \(S'(4)=48\).`],
      S`at \(t=4\) months (48 units per month); after that each month adds less — diminishing returns`,
      plane({ view: { xmin: 0, xmax: 8.5, ymin: 80, ymax: 400 }, curves: [{ f: (t) => -(t ** 3) + 12 * t * t + 100, a: 0, b: 8, color: "violet" }, { f: (t) => 228 + 48 * (t - 4), color: "green", a: 2, b: 6 }], points: [{ x: 4, y: 228, label: "inflection (4, 228)", color: "red" }], step: { x: 1, y: 40 } })],
  ]),

  practice([
    q("inflection", S`At what \(x\) does \(f(x)=x^3-9x^2\) have a point of inflection?`, num(3),
      "f″(x) = 6x − 18.", [S`\(6x-18=0\).`], S`\(3\)`),
    q("second derivative", S`For \(f(x)=x^4+2x^3\), find \(f''(1)\).`, num(24),
      "f″(x) = 12x² + 12x.", [S`\(12+12\).`], S`\(24\)`),
    q("concavity", S`Where is \(f(x)=-x^2+5x\) concave down?`, choice(["everywhere", "for x < 2.5 only", "for x > 2.5 only", "nowhere"], 0),
      "f″ is constant.", [S`\(f''(x)=-2\lt0\).`], "everywhere"),
    q("test", S`For \(f(x)=x^3-108x\), the second derivative test at \(x=6\) shows:`, choice(["a local minimum", "a local maximum", "an inflection point", "no conclusion"], 0),
      "f″(x) = 6x.", [S`\(f'(6)=0\), \(f''(6)=36\gt0\).`], "a local minimum"),
    q("inflection", S`At what positive \(x\) does \(f(x)=x^4-24x^2\) have an inflection point?`, num(2),
      "f″(x) = 12x² − 48.", [S`\(x^2=4\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Designing an inflection point", S`Find \(a\) and \(b\) so that \(f(x)=ax^3+bx^2\) has a point of inflection at \((1,4)\).`,
      [S`\(f''(x)=6ax+2b\); \(f''(1)=0\Rightarrow b=-3a\).`, S`\(f(1)=a+b=4\Rightarrow a-3a=4\Rightarrow a=-2\), \(b=6\).`],
      S`\(f(x)=-2x^3+6x^2\)`,
      plane({ view: { xmin: -1, xmax: 3.2, ymin: -3, ymax: 10 }, curves: [{ f: (x) => -2 * x ** 3 + 6 * x * x, a: -1, b: 1, color: "blue" }, { f: (x) => -2 * x ** 3 + 6 * x * x, a: 1, b: 3.2, color: "amber" }], points: [{ x: 1, y: 4, label: "inflection (1, 4)", color: "violet" }, { x: 2, y: 8, label: "max (2, 8)", color: "red" }, { x: 0, y: 0, label: "min (0, 0)", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Every cubic has one inflection point", S`Show that \(f(x)=ax^3+bx^2+cx+d\) (\(a\ne0\)) has exactly one inflection point, at \(x=-\frac{b}{3a}\). Find it for \(f(x)=x^3+6x^2+9x+1\).`,
      [S`\(f''(x)=6ax+2b\) is linear with one zero, \(x=-\frac{b}{3a}\), and it changes sign there.`, S`For the example, \(x=-\frac{6}{3}=-2\); \(f(-2)=-8+24-18+1=-1\).`],
      S`inflection point \((-2,-1)\)`,
      plane({ view: { xmin: -4.5, xmax: 0.8, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x ** 3 + 6 * x * x + 9 * x + 1, color: "violet" }], points: [{ x: -2, y: -1, label: "inflection (−2, −1)", color: "violet" }, { x: -3, y: 1, label: "max (−3, 1)", color: "red" }, { x: -1, y: -3, label: "min (−1, −3)", color: "blue" }], step: { x: 0.5, y: 1 } })],
  ], [
    q("hard", S`For \(f(x)=x+\dfrac2x\), find \(f''(1)\).`, num(4),
      "f′ = 1 − 2x⁻², f″ = 4x⁻³.", [S`\(4\).`], S`\(4\)`),
    q("hard", S`How many inflection points does \(f(x)=x^4-6x^3+12x^2\) have?`, num(2),
      "f″(x) = 12(x − 1)(x − 2).", [S`Sign changes at 1 and 2.`], S`\(2\)`),
    q("hard", S`\(f(x)=x^3+kx^2+1\) has an inflection point at \(x=2\). Find \(k\).`, num(-6),
      "f″(x) = 6x + 2k.", [S`\(12+2k=0\).`], S`\(-6\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does f″ > 0 mean concave up?", "f″ > 0 means the slopes f′ are increasing, so the tangent keeps turning upward — the curve bends like a cup."],
      ["Is every zero of f″ an inflection point?", "No. f″ must change sign. For x⁴, f″(0) = 0 but f″ ≥ 0 on both sides."],
      ["When should I use the second derivative test?", "When f″ is easy to compute and nonzero at the critical number; otherwise use the first derivative test."],
      ["What is the point of diminishing returns?", "The inflection point of a growth curve: the rate of growth is greatest there and then starts to decrease."],
      ["Can a graph be decreasing and concave up?", "Yes: 1/x for x > 0 falls while bending upward."],
    ],
    summary: [
      "f″ > 0: concave up; f″ < 0: concave down.",
      "Inflection: f″ changes sign.",
      "f′(c) = 0 and f″(c) > 0: min; f″(c) < 0: max.",
      "f″(c) = 0: inconclusive.",
    ],
    next: "3.4 sketches simple rational functions.",
  }),
];
