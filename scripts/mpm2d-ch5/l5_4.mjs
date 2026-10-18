// MPM2D 5.4 — The Discriminant & the Number of Roots (self-study format): D > 0, D = 0, D < 0 (non-real roots),
// rational vs irrational, connection to the vertex and the x-intercepts, and finding k for a given number of roots
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "5.4 The Discriminant & the Number of Roots";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔍",
    title: "The Discriminant and the Number of Roots",
    overview: S`The expression under the square root in the quadratic formula, \(D=b^2-4ac\), is called the <strong>discriminant</strong>. Its sign tells you how many real roots an equation has — and how many times the parabola meets the x-axis — before you solve anything. In this lesson you will use the discriminant to classify roots as two real, one real (double) or non-real, connect each case to the graph, and find a missing coefficient that gives a required number of roots.`,
    goals: [
      "calculate the discriminant b² − 4ac;",
      "use its sign to state the number of real roots and x-intercepts;",
      "explain what non-real roots mean on a graph;",
      "tell rational roots from irrational roots;",
      "find the value of k that gives two, one or no real roots.",
    ],
    curriculum: "QR3 (determine the nature of the roots — two distinct real, one real, no real (non-real) roots — and relate them to the number of zeros of y = ax² + bx + c)",
    prior: [
      [S`\((-6)^2-4(1)(9)=\)?`, S`\(36-36=0\).`],
      [S`Is \(\sqrt{-16}\) a real number?`, S`No.`],
      [S`How many x-intercepts can a parabola have?`, S`\(0\), \(1\) or \(2\).`],
    ],
    words: [
      ["Discriminant", "\\(D=b^2-4ac\\)", "\\(x^2-4x+1\\): \\(D=12\\)"],
      ["Two distinct real roots", "\\(D>0\\)", ""],
      ["One real (double) root", "\\(D=0\\)", ""],
      ["Non-real roots", "\\(D\\lt0\\): no real number works", ""],
    ],
  }),

  section("📌 Three cases", S`
  ${table(["D = b² − 4ac", "Roots", "Graph of y = ax² + bx + c"], [
    ["\\(D>0\\)", "two distinct real roots", "crosses the x-axis twice"],
    ["\\(D=0\\)", "one real root (a double root)", "vertex on the x-axis"],
    ["\\(D\\lt0\\)", "no real roots (non-real roots)", "does not meet the x-axis"],
  ])}
  ${plane({ view: { xmin: -5, xmax: 9, ymin: -6, ymax: 10 }, curves: [{ f: (x) => (x + 1) ** 2 - 4, color: "green" }, { f: (x) => (x - 3) ** 2, color: "amber" }, { f: (x) => (x - 6) ** 2 + 3, color: "red" }], points: [{ x: -3, y: 0, color: "green" }, { x: 1, y: 0, color: "green" }, { x: 3, y: 0, label: "D = 0", color: "amber" }, { x: 6, y: 3, label: "D < 0", color: "red" }, { x: -1, y: -4, label: "D > 0", color: "green" }], step: { x: 1, y: 2 } }, "Same shape, three positions: two zeros (D > 0), one zero (D = 0), no zeros (D < 0).")}
  ${keyIdea(S`Compute \(D=b^2-4ac\) from standard form. \(D>0\): two real roots (rational if \(D\) is a perfect square, irrational otherwise). \(D=0\): one real root \(x=-\frac{b}{2a}\). \(D\lt0\): no real roots — the square root of a negative number is not real, so the roots are called <strong>non-real</strong>.`)}`),

  section("📌 Explore", S`<p>Move \(c\) up and down and watch the dot on the number line cross \(D=0\) exactly when the vertex touches the x-axis.</p>`),

  widget("discriminantLab", { init: [1, -4, 1] }),

  section("📌 Using D", S`
  <p>The discriminant answers “how many?” — it does not give the roots themselves. It is quick to compute, so use it to decide whether solving is worth trying, whether factoring will work (perfect-square \(D\)), and to find unknown coefficients.</p>
  ${watchOut([
    "Use standard form: rearrange to = 0 before reading a, b, c.",
    "Square b with brackets: b = −7 gives b² = 49.",
    "−4ac with a negative a or c becomes +: a = 2, c = −3 gives −4(2)(−3) = +24.",
    "D < 0 does not mean the roots are negative numbers — it means there are no real roots.",
    "For ‘one root’ set D = 0; for ‘two roots’ D > 0; for ‘no real roots’ D < 0.",
  ])}`),

  examples([
    ["Two roots", S`How many real roots does \(3x^2-5x+2=0\) have? Are they rational?`,
      [S`\(D=(-5)^2-4(3)(2)=25-24=1\).`, S`\(D>0\): two real roots. \(1\) is a perfect square, so they are rational.`, S`(Indeed \((3x-2)(x-1)=0\).)`],
      S`two rational roots`],
    ["One root", S`Find the number of roots of \(4x^2+12x+9=0\).`,
      [S`\(D=144-4(4)(9)=144-144=0\).`, S`One real root: \(x=-\frac{12}{8}=-\frac32\).`],
      S`one real root, \(x=-\tfrac32\)`,
      plane({ view: { xmin: -4, xmax: 1, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 4 * x * x + 12 * x + 9, color: "violet" }], points: [{ x: -1.5, y: 0, label: "(−1.5, 0)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["No real roots", S`Show that \(2x^2-3x+4=0\) has no real roots.`,
      [S`\(D=9-4(2)(4)=9-32=-23\).`, S`\(D\lt0\), so \(\sqrt D\) is not real: the roots are non-real.`, S`The parabola \(y=2x^2-3x+4\) opens up and its vertex is above the x-axis.`],
      S`\(D=-23\lt0\): no real roots`,
      plane({ view: { xmin: -2, xmax: 3, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 2 * x * x - 3 * x + 4, color: "violet" }], points: [{ x: 0.75, y: 2.875, label: "vertex above the axis", color: "red" }], step: { x: 1, y: 2 } })],
    ["Find k for one root", S`For what values of \(k\) does \(x^2+kx+16=0\) have exactly one root?`,
      [S`One root means \(D=0\): \(k^2-4(1)(16)=0\).`, S`\(k^2=64\Rightarrow k=\pm8\).`, S`Check \(k=8\): \(x^2+8x+16=(x+4)^2\).`],
      S`\(k=8\) or \(k=-8\)`],
    ["Find k for two roots", S`For what values of \(k\) does \(2x^2-4x+k=0\) have two real roots?`,
      [S`Two roots means \(D>0\): \(16-8k>0\).`, S`\(16>8k\Rightarrow k\lt2\).`],
      S`\(k\lt2\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -4, ymax: 8 }, curves: [{ f: (x) => 2 * x * x - 4 * x + 2, color: "amber" }, { f: (x) => 2 * x * x - 4 * x - 2, color: "green" }, { f: (x) => 2 * x * x - 4 * x + 5, color: "red" }], points: [{ x: 1, y: 0, label: "k = 2", color: "amber" }, { x: 1, y: -4, label: "k = −2", color: "green" }, { x: 1, y: 3, label: "k = 5", color: "red" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("compute D", S`Find the discriminant of \(x^2-7x+5=0\).`, num(29),
      "b² − 4ac with b = −7.", [S`\(49-20=29\).`], S`\(29\)`),
    q("count", S`How many real roots does \(5x^2+2x+1=0\) have?`, choice(["none", "one", "two", "cannot tell"], 0),
      "Find D.", [S`\(D=4-20=-16\lt0\).`], "none"),
    q("count", S`How many x-intercepts does \(y=9x^2-6x+1\) have?`, num(1),
      "Find D.", [S`\(D=36-36=0\).`], S`\(1\)`),
    q("nature", S`The roots of \(x^2+3x-5=0\) are…`, choice(["two irrational real roots", "two rational real roots", "one real root", "non-real"], 0),
      "Is D a perfect square?", [S`\(D=9+20=29\), positive but not a perfect square.`], "two irrational roots"),
    q("find k", S`Find the positive value of \(k\) for which \(x^2-kx+25=0\) has exactly one root.`, num(10),
      "Set D = 0.", [S`\(k^2-100=0\Rightarrow k=\pm10\).`], S`\(k=10\)`),
  ]),

  wrapUp({
    qas: [
      ["What does the discriminant tell me?", "How many real roots the equation has (and how many x-intercepts the parabola has): two if D > 0, one if D = 0, none if D < 0."],
      ["What are non-real roots?", "When D < 0, the formula needs the square root of a negative number. No real number squared is negative, so the roots are not real numbers. On the graph, the parabola never meets the x-axis."],
      ["How do I know whether an equation factors?", "With integer a, b, c it factors over the integers exactly when D is a perfect square (0, 1, 4, 9, 16, …)."],
      ["How is D connected to the vertex?", "If the parabola opens up, D > 0 means the vertex is below the x-axis, D = 0 on it, and D < 0 above it. (Reverse ‘above’ and ‘below’ when it opens down.)"],
      ["Why use D instead of just solving?", "It is one quick calculation, and it is the main tool for questions with an unknown coefficient — like ‘find k so the line is tangent’ in 5.6."],
    ],
    summary: [
      "D = b² − 4ac (standard form first).",
      "D > 0: two real roots; D = 0: one; D < 0: none (non-real).",
      "Perfect-square D → rational roots → it factors.",
      "Unknown k: set D = 0, D > 0 or D < 0 and solve.",
    ],
    next: "5.5 uses all the solving methods on real problems — heights, areas and revenue.",
  }),
];
