// MHF4U 3.2 — Reciprocal of a Quadratic Function (NEW): y = 1/f(x) with two, one or no zeros of f; vertical
// asymptotes, the turning point from the vertex, domain and range, and sketching from the parabola
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";

export const TITLE = "3.2 Reciprocal of a Quadratic Function";
export const ID = "6d4f0003-0001-4001-8001-000000000302";

const S = String.raw;
const V = { xmin: -5, xmax: 5, ymin: -3, ymax: 3 };
export const blocks = () => [
  intro({
    icon: "🌉",
    title: "Reciprocal of a Quadratic Function",
    overview: S`A parabola can cross the x-axis twice, touch it once, or miss it. Its reciprocal \(y=\dfrac1{f(x)}\) changes shape in each case: every zero of \(f\) becomes a vertical asymptote, and the vertex of the parabola becomes a turning point of the reciprocal with y-value \(\frac1{k}\). Far from the zeros the parabola is huge, so its reciprocal approaches the horizontal asymptote \(y=0\).`,
    goals: [
      "find vertical asymptotes from the zeros of a quadratic;",
      "find the turning point of \\(\\frac1{f(x)}\\) from the vertex of \\(f\\);",
      "recognize the three shapes: two, one or no vertical asymptotes;",
      "state domain, range and intervals of increase/decrease;",
      "sketch \\(\\frac1{f(x)}\\) from the graph of \\(f\\).",
    ],
    curriculum: "C2.1 (key features of reciprocals of quadratic functions), C2.3 (sketch the graph of the reciprocal of a quadratic using the original)",
    prior: [
      [S`Zeros of \(x^2-x-6\)?`, S`\((x-3)(x+2)\): \(3\) and \(-2\).`],
      [S`Vertex of \(y=(x-1)^2-4\)?`, S`\((1,-4)\).`],
      [S`Discriminant of \(x^2+2x+5\)?`, S`\(-16\): no real zeros.`],
    ],
    words: [
      ["Turning point", "a local maximum or minimum", "from the vertex of f"],
      ["Double zero", "a zero of order 2: one asymptote, branches on the same side", "\\(\\frac1{(x-1)^2}\\)"],
      ["Bounded", "range limited above and below", "\\(0\\lt y\\le1\\)"],
      ["Symmetry", "1/f has the same axis of symmetry as the parabola", ""],
    ],
  }),

  section("📌 Three shapes", S`
  ${table(["Zeros of f", "Vertical asymptotes", "Shape of 1/f", "Example"], [
    ["two", "two", "three branches; middle one has a max or min", "\\(\\frac1{x^2-4}\\)"],
    ["one (double)", "one", "two branches on the same side of y = 0", "\\(\\frac1{(x-1)^2}\\)"],
    ["none", "none", "one smooth hump, bounded", "\\(\\frac1{x^2+1}\\)"],
  ])}
  ${plane({ view: V, curves: [{ f: (x) => x * x - 1, color: "blue" }, ...rat((x) => 1 / (x * x - 1), [-1, 1], V)], vlines: [{ x: -1, color: "red", dash: true }, { x: 1, color: "red", dash: true }], points: [{ x: 0, y: -1, label: "(0, −1): vertex and turning point", color: "amber" }], step: { x: 1, y: 1 } }, "f(x) = x² − 1 (blue) and 1/f (violet): asymptotes x = ±1; the vertex (0, −1) is invariant.")}
  ${keyIdea(S`If the vertex of \(f\) is \((h,k)\) with \(k\ne0\), then \(\frac1f\) has a turning point at \(\left(h,\tfrac1k\right)\) — a maximum where \(f\) has a minimum (and vice versa). The horizontal asymptote is always \(y=0\).`)}`),

  section("📌 Explore", S`<p>Move the vertex of the parabola up and down. Watch the number of vertical asymptotes change from two, to one, to none, and follow the amber turning point.</p>`),

  widget("reciprocalQuadratic", { init: { a: 1, h: 1, k: -2 } }),

  section("📌 Increasing and decreasing", S`
  <p>Where \(f\) increases, \(\frac1f\) decreases, and vice versa — interval by interval, with the asymptotes and the vertex as the boundaries.</p>
  ${watchOut([
    "Factor first: the asymptotes are the zeros of the quadratic, not its coefficients.",
    "The turning point's y-value is 1/k, not k.",
    "No zeros does not mean no graph: 1/(x² + 1) is a single hump.",
    "With a double zero, both branches are on the same side of the x-axis.",
    "The range of 1/(x² + c) for c > 0 is 0 < y ≤ 1/c — include the maximum.",
  ])}`),

  examples([
    ["Two vertical asymptotes", S`Sketch \(g(x)=\dfrac1{x^2-4}\).`,
      [S`\(x^2-4=(x-2)(x+2)\): VAs \(x=\pm2\); HA \(y=0\).`, S`Vertex of \(f\): \((0,-4)\) → turning point \(\left(0,-\tfrac14\right)\), a maximum.`, S`\(f>0\) for \(|x|>2\), so \(g>0\) there; \(g\lt0\) between.`],
      S`three branches; local max \(\left(0,-\tfrac14\right)\)`,
      plane({ view: V, curves: rat((x) => 1 / (x * x - 4), [-2, 2], V), vlines: [{ x: -2, color: "red", dash: true }, { x: 2, color: "red", dash: true }], points: [{ x: 0, y: -0.25, label: "(0, −¼)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["No vertical asymptote", S`Describe \(g(x)=\dfrac1{x^2+1}\).`,
      [S`\(x^2+1\ge1\) has no zeros: no VA.`, S`Vertex \((0,1)\) → maximum \((0,1)\). As \(|x|\) grows, \(g\to0\).`],
      S`domain \(\mathbb R\), range \(0\lt y\le1\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -0.5, ymax: 1.5 }, curves: [{ f: (x) => 1 / (x * x + 1), color: "violet" }], points: [{ x: 0, y: 1, label: "(0, 1)", color: "amber" }], step: { x: 1, y: 0.5 } })],
    ["A double zero", S`Describe \(g(x)=\dfrac1{(x-1)^2}\).`,
      [S`One VA \(x=1\); \((x-1)^2>0\) elsewhere, so \(g>0\).`, S`Increasing for \(x\lt1\), decreasing for \(x>1\).`],
      S`VA \(x=1\), HA \(y=0\); range \(y>0\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 5 }, curves: rat((x) => 1 / (x - 1) ** 2, [1], { xmin: -3, xmax: 5 }), vlines: [{ x: 1, color: "red", dash: true }], step: { x: 1, y: 1 } })],
    ["Factor, then find the turning point", S`Find the asymptotes and turning point of \(g(x)=\dfrac1{x^2-2x-3}\).`,
      [S`\(x^2-2x-3=(x-3)(x+1)\): VAs \(x=-1\), \(x=3\).`, S`Vertex of \(f\): \(x=1\), \(f(1)=-4\) → \(g\) has a local max \(\left(1,-\tfrac14\right)\).`],
      S`VAs \(x=-1, 3\); local max \(\left(1,-\tfrac14\right)\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 3 }, curves: rat((x) => 1 / ((x - 3) * (x + 1)), [-1, 3], { xmin: -4, xmax: 6 }), vlines: [{ x: -1, color: "red", dash: true }, { x: 3, color: "red", dash: true }], points: [{ x: 1, y: -0.25, label: "(1, −¼)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["A negative reciprocal", S`State the range of \(g(x)=-\dfrac1{x^2+4}\).`,
      [S`\(x^2+4\ge4\Rightarrow0\lt\frac1{x^2+4}\le\frac14\).`, S`Multiplying by \(-1\) reverses it.`],
      S`\(-\tfrac14\le y\lt0\); minimum \(\left(0,-\tfrac14\right)\)`],
  ]),

  practice([
    q("asymptotes", S`How many vertical asymptotes does \(y=\dfrac1{x^2-9}\) have?`, num(2),
      "Zeros of x² − 9.", [S`\(x=\pm3\).`], S`\(2\)`),
    q("maximum", S`What is the maximum value of \(y=\dfrac1{x^2+2}\)?`, num(0.5, 0.0001),
      "The smallest denominator is 2.", [S`\(\frac12\) at \(x=0\).`], S`\(0.5\)`),
    q("y-intercept", S`Find the y-intercept of \(y=\dfrac1{x^2-x-6}\) (4 decimals).`, num(-0.1667, 0.0005),
      "Substitute x = 0.", [S`\(\frac1{-6}\).`], S`\(-0.1667\)`),
    q("shape", S`Which describes the graph of \(y=\dfrac1{x^2+5}\)?`, choice(["no vertical asymptotes; one hump", "two vertical asymptotes", "one vertical asymptote", "a vertical asymptote at x = −5"], 0),
      "x² + 5 is never 0.", ["Always positive."], "no vertical asymptotes"),
    q("turning point", S`At what x-value is the turning point of \(y=\dfrac1{x^2-6x+5}\)?`, num(3),
      "Same x as the vertex of the parabola.", [S`\(x=-\frac{b}{2a}=3\).`], S`\(3\)`),
  ]),

  ...hard([
    ["Build from the asymptotes", S`\(g(x)=\dfrac1{x^2+bx+c}\) has vertical asymptotes \(x=-1\) and \(x=4\). Find \(b\), \(c\) and the turning point.`,
      [S`\((x+1)(x-4)=x^2-3x-4\): \(b=-3\), \(c=-4\).`, S`Vertex of \(f\) at \(x=1.5\): \(f(1.5)=2.25-4.5-4=-6.25\).`, S`Turning point \(\left(1.5,\ \frac1{-6.25}\right)=(1.5,-0.16)\), a local maximum.`],
      S`\(b=-3\), \(c=-4\); local max \((1.5,-0.16)\)`,
      plane({ view: { xmin: -3, xmax: 6, ymin: -2, ymax: 2 }, curves: rat((x) => 1 / (x * x - 3 * x - 4), [-1, 4], { xmin: -3, xmax: 6 }), vlines: [{ x: -1, color: "red", dash: true }, { x: 4, color: "red", dash: true }], points: [{ x: 1.5, y: -0.16, label: "(1.5, −0.16)", color: "amber" }], step: { x: 1, y: 0.5 } })],
    ["How many asymptotes?", S`For which \(k\) does \(y=\dfrac1{x^2+k}\) have no, one, or two vertical asymptotes? State the range when \(k=4\).`,
      [S`\(x^2=-k\): no solution for \(k>0\), one (\(x=0\)) for \(k=0\), two for \(k\lt0\).`, S`\(k=4\): \(x^2+4\ge4\), so \(0\lt y\le\frac14\).`],
      S`none for \(k>0\); one for \(k=0\); two for \(k\lt0\); range \(0\lt y\le\tfrac14\)`],
  ], [
    q("hard", S`What is the maximum value of \(y=\dfrac1{x^2-4x+8}\)?`, num(0.25, 0.0001),
      "Complete the square.", [S`\((x-2)^2+4\ge4\).`], S`\(0.25\)`),
    q("hard", S`How many vertical asymptotes does \(y=\dfrac1{x^2+6x+9}\) have?`, num(1),
      "Perfect square.", [S`\((x+3)^2\): one, at \(x=-3\).`], S`\(1\)`),
    q("hard", S`Find the y-value of the turning point of \(y=\dfrac1{2x^2-8x+3}\).`, num(-0.2, 0.0001),
      "Vertex of the parabola at x = 2.", [S`\(f(2)=8-16+3=-5\Rightarrow\frac1{-5}\).`], S`\(-0.2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does the vertex become a turning point?", "Where f reaches its smallest positive (or largest negative) value, 1/f reaches its largest (or smallest) value — the extreme flips."],
      ["Why are both branches positive for 1/(x − 1)²?", "A square is never negative, so the reciprocal is positive everywhere it is defined."],
      ["Can the reciprocal of a quadratic cross the x-axis?", "No: 1/f is never 0."],
      ["How do I find the range?", "Use the vertex value k: the reciprocal's turning value is 1/k, and y = 0 is never reached."],
      ["What stays the same as for a linear reciprocal?", "Zeros → asymptotes, f = ±1 → invariant points, same sign, opposite increasing/decreasing behaviour."],
    ],
    summary: [
      "Zeros of f → vertical asymptotes (0, 1 or 2).",
      "Vertex (h, k) → turning point (h, 1/k).",
      "y = 0 is the horizontal asymptote.",
      "Same symmetry axis as the parabola.",
    ],
    next: "3.3 studies rational functions y = (ax + b)/(cx + d).",
  }),
];
