// MHF4U 3.3 — Rational Functions of the Form (ax + b)/(cx + d): vertical asymptote x = −d/c, horizontal asymptote
// y = a/c, intercepts, holes, transformations of 1/x, and equations from features
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";

export const TITLE = "3.3 Rational Functions of the Form (ax + b)/(cx + d)";
export const ID = "ca90549b-bef4-485c-944d-874b3f2122c6";

const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
export const blocks = () => [
  intro({
    icon: "📐",
    title: "Rational Functions of the Form (ax + b)/(cx + d)",
    overview: S`A rational function \(f(x)=\dfrac{ax+b}{cx+d}\) is a quotient of two linear functions. Its graph is a transformed hyperbola: a vertical asymptote where the denominator is 0, and a horizontal asymptote \(y=\frac ac\) because, for large \(|x|\), the ratio of the leading terms takes over. The numerator gives the x-intercept. If numerator and denominator share a factor, the graph is a horizontal line with a single missing point — a <strong>hole</strong>.`,
    goals: [
      "find the vertical and horizontal asymptotes of \\(\\frac{ax+b}{cx+d}\\);",
      "find the intercepts and state the domain and range;",
      "recognize a hole when the numerator and denominator share a factor;",
      "write \\(\\frac{ax+b}{cx+d}\\) as a transformation of \\(\\frac1x\\);",
      "determine an equation from given features.",
    ],
    curriculum: "C2.2 (determine key features of rational functions of the form (ax + b)/(cx + d)), C2.3 (sketch the graph)",
    prior: [
      [S`Zero of \(2x-6\)?`, S`\(3\).`],
      [S`For large \(x\), what is \(\frac{3x+1}{x}\) close to?`, S`\(3\).`],
      [S`Asymptotes of \(y=\frac1x\)?`, S`\(x=0\) and \(y=0\).`],
    ],
    words: [
      ["Rational function", "a quotient of polynomials", "\\(\\frac{2x+1}{x-3}\\)"],
      ["Horizontal asymptote", "\\(y=\\frac ac\\) for \\(\\frac{ax+b}{cx+d}\\)", ""],
      ["Hole", "a single missing point where a common factor cancels", ""],
      ["Branch", "one connected piece of the graph", "two branches here"],
    ],
  }),

  section("📌 Reading the features", S`
  ${table(["Feature", "How to find it", "For (2x − 4)/(x + 1)"], [
    ["vertical asymptote", "cx + d = 0", "x = −1"],
    ["horizontal asymptote", "y = a/c", "y = 2"],
    ["x-intercept", "ax + b = 0", "x = 2"],
    ["y-intercept", "f(0) = b/d", "y = −4"],
    ["domain / range", "x ≠ −d/c, y ≠ a/c", "x ≠ −1, y ≠ 2"],
  ])}
  ${plane({ view: V, curves: rat((x) => (2 * x - 4) / (x + 1), [-1], V), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "blue" }, { x: 0, y: -4, label: "(0, −4)", color: "green" }], step: { x: 1, y: 1 } }, "y = (2x − 4)/(x + 1): asymptotes x = −1 and y = 2.")}
  ${keyIdea(S`Divide to see the transformation: \(\dfrac{2x-4}{x+1}=2-\dfrac{6}{x+1}\): the graph of \(\frac1x\) stretched by 6, reflected in the x-axis, shifted 1 left and 2 up. If \(ad-bc=0\), the fraction simplifies to a constant and the graph is a line with a hole.`)}`),

  section("📌 Explore", S`<p>Change \(a\), \(b\), \(c\), \(d\). The dashed asymptotes move with \(-\frac dc\) and \(\frac ac\); try \(a=2\), \(b=4\), \(c=1\), \(d=2\) to see a hole.</p>`),

  widget("rationalLinear", { init: { a: 1, b: 3, c: 1, d: -2 } }),

  section("📌 Holes and transformations", S`
  <p>\(\dfrac{3x+6}{x+2}=\dfrac{3(x+2)}{x+2}=3\) for \(x\ne-2\): a horizontal line with an open circle at \((-2,3)\). There is no asymptote at \(x=-2\) because the factor cancels.</p>
  ${watchOut([
    "The horizontal asymptote uses the LEADING coefficients a and c, not b and d.",
    "In (2x + 1)/(4 − x), the leading coefficient of the denominator is −1: HA y = −2.",
    "Check for a common factor before drawing a vertical asymptote.",
    "The graph can cross a horizontal asymptote for other rational functions, but never for (ax + b)/(cx + d).",
    "The y-intercept is b/d, which needs d ≠ 0.",
  ])}`),

  examples([
    ["All the features", S`Sketch \(f(x)=\dfrac{x+2}{x-1}\).`,
      [S`VA \(x=1\); HA \(y=\frac11=1\).`, S`x-intercept \(-2\); y-intercept \(\frac{2}{-1}=-2\).`],
      S`VA \(x=1\), HA \(y=1\), intercepts \((-2,0)\), \((0,-2)\)`,
      plane({ view: V, curves: rat((x) => (x + 2) / (x - 1), [1], V), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "blue" }, { x: 0, y: -2, label: "(0, −2)", color: "green" }], step: { x: 1, y: 1 } })],
    ["A stretched horizontal asymptote", S`Find the asymptotes and intercepts of \(f(x)=\dfrac{3x-6}{x+2}\).`,
      [S`VA \(x=-2\); HA \(y=3\).`, S`x-intercept \(2\); y-intercept \(-3\).`],
      S`VA \(x=-2\), HA \(y=3\), \((2,0)\), \((0,-3)\)`,
      plane({ view: { xmin: -10, xmax: 8, ymin: -8, ymax: 12 }, curves: rat((x) => (3 * x - 6) / (x + 2), [-2], { xmin: -10, xmax: 8 }), vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "blue" }, { x: 0, y: -3, label: "(0, −3)", color: "green" }], step: { x: 2, y: 2 } })],
    ["Negative c", S`Find the asymptotes of \(f(x)=\dfrac{2x+1}{4-x}\).`,
      [S`\(4-x=0\Rightarrow x=4\). Leading coefficients \(2\) and \(-1\): HA \(y=-2\).`, S`x-intercept \(-\frac12\); y-intercept \(\frac14\).`],
      S`VA \(x=4\), HA \(y=-2\)`,
      plane({ view: { xmin: -6, xmax: 12, ymin: -10, ymax: 6 }, curves: rat((x) => (2 * x + 1) / (4 - x), [4], { xmin: -6, xmax: 12 }), vlines: [{ x: 4, color: "red", dash: true }], lines: [{ m: 0, b: -2, color: "red", dash: true }], points: [{ x: -0.5, y: 0, color: "blue" }, { x: 0, y: 0.25, color: "green" }], step: { x: 2, y: 2 } })],
    ["A hole", S`Describe the graph of \(f(x)=\dfrac{2x-4}{x-2}\).`,
      [S`\(\frac{2(x-2)}{x-2}=2\) for \(x\ne2\).`],
      S`the line \(y=2\) with a hole at \((2,2)\)`],
    ["Equation from features", S`Write a function of the form \(\dfrac{ax+b}{cx+d}\) with VA \(x=-3\), HA \(y=2\) and x-intercept \(1\).`,
      [S`Denominator \(x+3\); HA 2 means \(a=2c=2\).`, S`Numerator zero at \(1\): \(2(x-1)=2x-2\).`],
      S`\(f(x)=\dfrac{2x-2}{x+3}\)`,
      plane({ view: { xmin: -10, xmax: 6, ymin: -8, ymax: 12 }, curves: rat((x) => (2 * x - 2) / (x + 3), [-3], { xmin: -10, xmax: 6 }), vlines: [{ x: -3, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "blue" }], step: { x: 2, y: 2 } })],
  ]),

  practice([
    q("vertical asymptote", S`Find the vertical asymptote of \(y=\dfrac{x+5}{2x-6}\). Give the x-value.`, num(3),
      "2x − 6 = 0.", [S`\(x=3\).`], S`\(3\)`),
    q("horizontal asymptote", S`Find the horizontal asymptote of \(y=\dfrac{4x-1}{2x+3}\). Give the y-value.`, num(2),
      "a/c.", [S`\(\frac42\).`], S`\(2\)`),
    q("x-intercept", S`Find the x-intercept of \(y=\dfrac{3x+12}{x-1}\).`, num(-4),
      "Numerator = 0.", [S`\(3x=-12\).`], S`\(-4\)`),
    q("y-intercept", S`Find the y-intercept of \(y=\dfrac{x-6}{x+2}\).`, num(-3),
      "b/d.", [S`\(\frac{-6}{2}\).`], S`\(-3\)`),
    q("hole", S`Which function has a hole rather than a vertical asymptote?`, choice([S`\(\dfrac{3x+6}{x+2}\)`, S`\(\dfrac{3x+6}{x-2}\)`, S`\(\dfrac{x+6}{x+2}\)`, S`\(\dfrac{3x}{x+2}\)`], 0),
      "Look for a common factor.", [S`\(3x+6=3(x+2)\).`], S`\(\frac{3x+6}{x+2}\)`),
  ]),

  ...hard([
    ["Three conditions", S`\(f(x)=\dfrac{ax+b}{x+d}\) has VA \(x=2\), HA \(y=-3\) and passes through \((1,5)\). Find \(a\), \(b\), \(d\).`,
      [S`VA \(x=2\Rightarrow d=-2\). HA \(y=\frac a1=-3\Rightarrow a=-3\).`, S`At \(x=1\): \(\frac{-3+b}{-1}=5\Rightarrow b=-2\).`],
      S`\(f(x)=\dfrac{-3x-2}{x-2}\)`,
      plane({ view: { xmin: -6, xmax: 8, ymin: -14, ymax: 8 }, curves: rat((x) => (-3 * x - 2) / (x - 2), [2], { xmin: -6, xmax: 8 }), vlines: [{ x: 2, color: "red", dash: true }], lines: [{ m: 0, b: -3, color: "red", dash: true }], points: [{ x: 1, y: 5, label: "(1, 5)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["As a transformation of 1/x", S`Show that \(\dfrac{2x+3}{x-1}=2+\dfrac5{x-1}\), and describe the graph as a transformation of \(y=\frac1x\).`,
      [S`\(2(x-1)+5=2x+3\), so \(\frac{2x+3}{x-1}=\frac{2(x-1)+5}{x-1}=2+\frac5{x-1}\).`, S`Vertical stretch by 5, translation 1 right and 2 up.`],
      S`stretch 5, right 1, up 2: asymptotes \(x=1\), \(y=2\)`],
  ], [
    q("hard", S`Find the horizontal asymptote of \(y=\dfrac{6-2x}{3x+1}\) (4 decimals).`, num(-0.6667, 0.0005),
      "Leading coefficients −2 and 3.", [S`\(-\frac23\).`], S`\(-0.6667\)`),
    q("hard", S`For \(f(x)=\dfrac{x+1}{x-3}\), find \(x\) so that \(f(x)=3\).`, num(5),
      "Cross-multiply.", [S`\(x+1=3x-9\Rightarrow x=5\).`], S`\(5\)`),
    q("hard", S`How many intercepts (x and y together) does \(y=\dfrac{x-4}{x+4}\) have?`, num(2),
      "One x-intercept and one y-intercept.", [S`\((4,0)\) and \((0,-1)\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is the horizontal asymptote a/c?", "For large |x|, b and d are tiny compared with ax and cx, so (ax + b)/(cx + d) ≈ ax/cx = a/c."],
      ["Can the graph cross its horizontal asymptote?", "Not for (ax + b)/(cx + d): f(x) = a/c leads to ad = bc, which only happens in the hole case."],
      ["What makes a hole?", "A common factor in numerator and denominator: it cancels, leaving a missing point instead of an asymptote."],
      ["How do the branches sit?", "The sign of ad − bc decides: negative → decreasing branches, positive → increasing branches."],
      ["Why rewrite as a + k/(x − h)?", "It shows the stretch k and the translations h and a directly, so the graph is a transformed y = 1/x."],
    ],
    summary: [
      "VA: cx + d = 0. HA: y = a/c.",
      "x-intercept: ax + b = 0; y-intercept: b/d.",
      "Common factor → hole.",
      "a + k/(x − h) is a transformed 1/x.",
    ],
    next: "3.4 solves rational equations and inequalities.",
  }),
];
