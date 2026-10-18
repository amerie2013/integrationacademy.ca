// MCR3U 1.8 — Combining Transformations: y = af(k(x − d)) + c, order, factoring k, domain/range, equations from descriptions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "1.8 Combining Transformations";
export const ID = "5c3e0001-0001-4001-8001-000000000108";

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Combining Transformations",
    overview: String.raw`Now all four parameters work together: \(y=af(k(x-d))+c\). In this lesson you will apply them in the right order with the single mapping \((x,y)\to\left(\frac xk+d,\ ay+c\right)\), factor expressions like \(f(2x-6)\) into \(f(2(x-3))\) before reading \(d\), sketch the result from key points, state domain and range, and write an equation from a description or a graph.`,
    goals: [
      "identify a, k, d and c in y = af(k(x − d)) + c (factoring k out first);",
      "apply the mapping (x, y) → (x/k + d, ay + c);",
      "sketch the transformed function and state its domain and range;",
      "write the equation from a list of transformations;",
      "work backwards from the domain and range of f to those of the image.",
    ],
    curriculum: "A1.8–A1.9 (roles of a, k, d and c in y = af(k(x − d)) + c; sketch graphs by applying one or more transformations to f(x) = x, x², √x, 1/x and state the domain and range)",
    prior: [
      [String.raw`Factor \(3x-12\).`, String.raw`\(3(x-4)\).`],
      [String.raw`Under \(y=f(2x)\), where does \((8,1)\) go?`, String.raw`\((4,1)\).`],
      [String.raw`Under \(y=3f(x)-1\), where does \((2,5)\) go?`, String.raw`\((2,14)\).`],
    ],
    words: [
      ["a", "vertical stretch/compression; a < 0 reflects in the x-axis", ""],
      ["k", "horizontal stretch/compression by 1/|k|; k < 0 reflects in the y-axis", ""],
      ["d", "horizontal translation", ""],
      ["c", "vertical translation", ""],
      ["Order", "stretches and reflections first, translations last", ""],
    ],
  }),

  section("📌 One rule for every point", String.raw`
  <p>For \(y=af(k(x-d))+c\), every point \((x,y)\) of \(y=f(x)\) moves to</p>
  <p style="text-align:center;font-size:1.15em;">\(\left(\dfrac xk+d,\ \ ay+c\right)\)</p>
  <p>Inside the bracket the operations act on \(x\) and are <em>undone</em> in reverse (divide by \(k\), add \(d\)); outside they act on \(y\) directly (multiply by \(a\), add \(c\)).</p>
  ${keyIdea(String.raw`Always factor \(k\) out first: \(f(2x-6)=f(2(x-3))\), so \(d=3\), not 6. Then: stretches and reflections, then translations.`)}`),

  section("📌 Explore", String.raw`<p>Every parameter is live. Build one of the examples below, then check the image points in the table against the mapping rule.</p>`),

  widget("funcTransform", { parent: "sqrt", show: ["a", "k", "d", "c"], init: { a: 2, k: -1, d: 1, c: 3 } }),

  section("📌 A full example", String.raw`
  <p>\(y=-(2x+6)^2+5=-\left(2(x+3)\right)^2+5\): \(a=-1\), \(k=2\), \(d=-3\), \(c=5\).</p>
  ${table(["\\(x^2\\): (x, y)", "(−2, 4)", "(−1, 1)", "(0, 0)", "(1, 1)", "(2, 4)"], [["\\(\\left(\\tfrac x2-3,\\ -y+5\\right)\\)", "(−4, 1)", "(−3.5, 4)", "(−3, 5)", "(−2.5, 4)", "(−2, 1)"]])}
  ${plane({ view: { xmin: -7, xmax: 3, ymin: -3, ymax: 7 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => -((2 * x + 6) ** 2) + 5, color: "violet" }], points: [{ x: -3, y: 5, label: "(−3, 5)" }, { x: -4, y: 1, label: "(−4, 1)" }, { x: -2, y: 1, label: "(−2, 1)" }, { x: -3.5, y: 4 }, { x: -2.5, y: 4 }], step: { x: 1, y: 1 } }, "y = −(2x + 6)² + 5: narrower, flipped, vertex (−3, 5)")}
  ${watchOut([
    "f(2x − 6) is NOT a translation of 6: factor first to get 2(x − 3).",
    "Translate last. Stretching after translating moves the vertex to the wrong place.",
    "A reflection in the y-axis (k < 0) flips the domain of √x to the left of d.",
    "Check one image point by substituting it into the final equation.",
  ])}`),

  examples([
    ["Square root with every parameter", String.raw`Sketch \(y=2\sqrt{-(x-1)}+3\) and state the domain and range.`,
      [String.raw`\(a=2\), \(k=-1\), \(d=1\), \(c=3\): \((x,y)\to(-x+1,\ 2y+3)\).`, String.raw`\((0,0)\to(1,3)\), \((1,1)\to(0,5)\), \((4,2)\to(-3,7)\), \((9,3)\to(-8,9)\).`],
      String.raw`domain \(\{x\in\mathbb R\mid x\le1\}\), range \(\{y\in\mathbb R\mid y\ge3\}\)`,
      plane({ view: { xmin: -9, xmax: 3, ymin: -1, ymax: 11 }, curves: [{ f: (x) => 2 * Math.sqrt(-(x - 1)) + 3, b: 1, color: "green" }], points: [{ x: 1, y: 3, label: "(1, 3)" }, { x: 0, y: 5, label: "(0, 5)" }, { x: -3, y: 7, label: "(−3, 7)" }, { x: -8, y: 9, label: "(−8, 9)" }], step: { x: 1, y: 1 } })],
    ["Factoring k first", String.raw`Identify the transformations in \(y=-(2x+6)^2+5\).`,
      [String.raw`Factor: \(2x+6=2(x+3)\), so \(k=2\), \(d=-3\).`, String.raw`\(a=-1\): reflection in the x-axis; \(c=5\).`],
      String.raw`compress horizontally by \(\tfrac12\), reflect in the x-axis, then 3 left and 5 up (see the table above)`],
    ["Absolute value", String.raw`Map the key points of \(|x|\) under \(y=3\left|\tfrac12(x+2)\right|-4\).`,
      [String.raw`\(a=3\), \(k=\tfrac12\), \(d=-2\), \(c=-4\): \((x,y)\to(2x-2,\ 3y-4)\).`, String.raw`\((-2,2)\to(-6,2)\), \((0,0)\to(-2,-4)\), \((2,2)\to(2,2)\).`],
      String.raw`vertex \((-2,-4)\), passing through \((-6,2)\) and \((2,2)\); range \(y\ge-4\)`,
      plane({ view: { xmin: -8, xmax: 4, ymin: -6, ymax: 6 }, curves: [{ f: (x) => 3 * Math.abs(0.5 * (x + 2)) - 4, color: "amber" }], points: [{ x: -2, y: -4, label: "(−2, −4)" }, { x: -6, y: 2, label: "(−6, 2)" }, { x: 2, y: 2, label: "(2, 2)" }], step: { x: 1, y: 1 } })],
    ["Reciprocal", String.raw`Sketch \(y=\frac{-2}{x+1}+3\).`,
      [String.raw`\(a=-2\), \(d=-1\), \(c=3\): asymptotes \(x=-1\), \(y=3\).`, String.raw`\((x,y)\to(x-1,\ -2y+3)\): \((1,1)\to(0,1)\), \((-1,-1)\to(-2,5)\), \((2,\tfrac12)\to(1,2)\).`],
      String.raw`branches in the upper-left and lower-right of the asymptotes; domain \(x\ne-1\), range \(y\ne3\)`,
      plane({ view: { xmin: -7, xmax: 5, ymin: -3, ymax: 9 }, curves: [{ f: (x) => -2 / (x + 1) + 3, color: "red" }], vlines: [{ x: -1, color: "gray", dash: true }], lines: [{ m: 0, b: 3, color: "gray", dash: true }], points: [{ x: 0, y: 1, label: "(0, 1)" }, { x: -2, y: 5, label: "(−2, 5)" }, { x: 1, y: 2 }], step: { x: 1, y: 1 } })],
    ["From a description", String.raw`\(y=\sqrt x\) is compressed horizontally by a factor of \(\tfrac13\), reflected in the x-axis, then translated 4 right and 2 up. Write the equation and give the domain and range.`,
      [String.raw`Compression by \(\tfrac13\) means \(k=3\); reflection in the x-axis means \(a=-1\); \(d=4\), \(c=2\).`, String.raw`\(y=-\sqrt{3(x-4)}+2\).`],
      String.raw`\(y=-\sqrt{3(x-4)}+2\); domain \(x\ge4\), range \(y\le2\)`],
  ]),

  practice([
    q("map x", String.raw`\(y=3f(2(x-1))+4\). What is the x-coordinate of the image of \((6,-2)\)?`, num(4),
      "x/k + d.", [String.raw`\(\frac62+1\).`], String.raw`\(4\)`),
    q("map y", String.raw`\(y=3f(2(x-1))+4\). What is the y-coordinate of the image of \((-4,5)\)?`, num(19),
      "ay + c.", [String.raw`\(3(5)+4\).`], String.raw`\(19\)`),
    q("range", String.raw`The range of \(y=-2\sqrt{x+5}+1\) is \(y\le m\). Find \(m\).`, num(1),
      "a < 0 flips the root downward from its starting point.", [String.raw`Starting point \((-5,1)\).`], String.raw`\(1\)`),
    q("factor k", String.raw`Write \(y=(4x-8)^2\) as \(y=(k(x-d))^2\). What is \(d\)?`, num(2),
      "Factor 4 out of 4x − 8.", [String.raw`\(4x-8=4(x-2)\).`], String.raw`\(2\)`),
    q("order", "In which order should you apply the transformations?", choice(["stretches and reflections, then translations", "translations, then stretches", "any order gives the same graph", "horizontal, then vertical"], 0),
      "Think of the mapping (x/k + d, ay + c).", ["Multiply/divide first, add last."], "stretches and reflections, then translations"),
  ]),

  ...hard([
    ["Rewriting before graphing", String.raw`Graph \(y=-\sqrt{6-2x}+1\) by first writing it as \(y=af(k(x-d))+c\).`,
      [String.raw`\(6-2x=-2(x-3)\), so \(y=-\sqrt{-2(x-3)}+1\): \(a=-1\), \(k=-2\), \(d=3\), \(c=1\).`, String.raw`\((x,y)\to\left(-\tfrac x2+3,\ -y+1\right)\): \((0,0)\to(3,1)\), \((4,2)\to(1,-1)\), \((16,4)\to(-5,-3)\).`, String.raw`Check \((1,-1)\): \(-\sqrt{6-2}+1=-1\) ✓.`],
      String.raw`domain \(x\le3\), range \(y\le1\)`,
      plane({ view: { xmin: -7, xmax: 5, ymin: -5, ymax: 3 }, curves: [{ f: (x) => -Math.sqrt(6 - 2 * x) + 1, b: 3, color: "green" }], points: [{ x: 3, y: 1, label: "(3, 1)" }, { x: 1, y: -1, label: "(1, −1)" }, { x: -5, y: -3, label: "(−5, −3)" }], step: { x: 1, y: 1 } })],
    ["Domain and range without a formula", String.raw`\(f\) has domain \(-2\le x\le6\) and range \(1\le y\le9\). Find the domain and range of \(g(x)=-3f\left(\tfrac12(x+4)\right)-2\).`,
      [String.raw`x-values: \(\frac{x}{1/2}-4=2x-4\): \(-2\to-8\), \(6\to8\).`, String.raw`y-values: \(-3y-2\): \(1\to-5\), \(9\to-29\) (the order reverses).`],
      String.raw`domain \(-8\le x\le8\), range \(-29\le y\le-5\)`],
  ], [
    q("hard", String.raw`\(f\) has domain \(-3\le x\le5\). The domain of \(y=f(2x+6)\) starts at \(x=p\). Find \(p\).`, num(-4.5),
      "Factor: f(2(x + 3)); then x/2 − 3.", [String.raw`\(\frac{-3}{2}-3=-4.5\), \(\frac52-3=-0.5\).`], String.raw`\(-4.5\)`),
    q("hard", String.raw`\(f\) has range \(-1\le y\le4\). What is the largest value in the range of \(g(x)=-2f(x-1)+3\)?`, num(5),
      "Apply −2y + 3 to both ends.", [String.raw`\(-2(-1)+3=5\), \(-2(4)+3=-5\).`], String.raw`\(5\)`),
    q("hard", String.raw`The point \((9,3)\) on \(y=\sqrt x\) maps to which x-coordinate on \(y=-\sqrt{4x-12}+3\)?`, num(5.25),
      "Factor 4x − 12 = 4(x − 3).", [String.raw`\(\frac94+3=5.25\); check \(-\sqrt{21-12}+3=0\).`], String.raw`\(5.25\)`),
  ]),

  wrapUp({
    qas: [
      ["Why must k be factored out?", "d is the horizontal shift of the whole input. In f(2x − 6) the shift is 3, because 2x − 6 = 0 when x = 3."],
      ["Does the order of a and k matter?", "No — one acts on y and the other on x. What matters is doing both before the translations."],
      ["How can I check my sketch?", "Substitute one image point into the equation. If it works, the mapping was right."],
      ["Can different equations give the same graph?", "Yes. For x², (2x)² = 4x²; for |x|, |−x| = |x|. The descriptions differ but the graphs agree."],
      ["What should I state at the end?", "The equation or sketch, key points, and the domain and range (including asymptotes for 1/x)."],
    ],
    summary: [
      "y = af(k(x − d)) + c: (x, y) → (x/k + d, ay + c).",
      "Factor k out of the bracket before reading d.",
      "Stretches and reflections first; translations last.",
      "Domain from x/k + d; range from ay + c.",
    ],
    next: "1.9 reviews the whole chapter.",
  }),
];
