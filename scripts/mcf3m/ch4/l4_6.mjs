// MCF3M 4.6 — Chapter 4 Review: converting forms, completing the square, quadratic formula, discriminant, max/min.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, expr, rootsT, hard, plane } from "../lib.mjs";
const S = String.raw;

export const TITLE = "4.6 Chapter 4 Review";

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 4 Review",
    overview: S`Chapter 4 completed the toolkit for quadratics. Vertex form and standard form are linked by expanding and by completing the square; completing the square on the general equation gives the quadratic formula; the discriminant \(b^2-4ac\) counts the roots; and the vertex gives the best value in maximum and minimum problems. This review mixes these skills and asks you to choose the best method.`,
    goals: [
      "convert between vertex and standard form;",
      "complete the square, including a ≠ 1;",
      "solve any quadratic equation with the formula;",
      "use the discriminant to count roots and find parameters;",
      "solve maximum and minimum problems.",
    ],
    curriculum: "A1.6–A1.8, A2.7, A2.8, A2.10, A2.11, A3.3 (chapter 4 review)",
    prior: [
      [S`Expand \(2(x-1)^2+3\).`, S`\(2x^2-4x+5\).`],
      [S`Discriminant of \(x^2+x+1\)?`, S`\(-3\): no real roots.`],
      [S`Axis of \(y=3x^2-12x\)?`, S`\(x=2\).`],
    ],
    words: [
      ["Vertex form", "\\(a(x-h)^2+k\\)", "vertex (h, k)"],
      ["Completing the square", "add and subtract (b/2)²", "\\(x^2+6x=(x+3)^2-9\\)"],
      ["Quadratic formula", "\\(x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\)", "always works"],
      ["Discriminant", "\\(b^2-4ac\\)", "number of roots"],
      ["Optimal value", "max or min at the vertex", "largest revenue"],
    ],
  }),

  section("📌 Choosing a method", S`
  ${table(["Task", "Best method"], [
    ["Find the vertex from standard form", "complete the square (or partial factoring)"],
    ["Solve when it factors", "factoring"],
    ["Solve when it does not factor / need decimals", "quadratic formula"],
    ["How many roots?", "discriminant"],
    ["Best value in a context", "vertex (complete the square or average the zeros)"],
  ])}
  ${keyIdea(S`All the methods agree: for \(y=x^2-4x+1\), completing the square gives \((x-2)^2-3\), the formula gives \(2\pm\sqrt3\), the discriminant \(12>0\) says two roots, and the vertex \((2,\,-3)\) is the minimum.`)}`),

  widget("formulaLab", { init: [1, -4, 1] }),

  examples([
    ["Standard to vertex form and sketch", S`Write \(y=2x^2+12x+13\) in vertex form; state the vertex, range and number of \(x\)-intercepts.`,
      [S`<b>Complete the square.</b> \(2(x^2+6x+9-9)+13=2(x+3)^2-18+13=2(x+3)^2-5\).`,
        S`<b>Features.</b> Vertex \((-3,\,-5)\); opens up; range \(y\ge-5\).`,
        S`<b>Intercepts.</b> Minimum below the axis and opens up: two. Check with \(D=144-104=40>0\) ✓`,
        S`<b>Check.</b> \(y(0)=2(9)-5=13\) ✓`],
      S`\(y=2(x+3)^2-5\); vertex (−3, −5); y ≥ −5; two x-intercepts`,
      plane({ view: { xmin: -7, xmax: 1, ymin: -6, ymax: 14 }, curves: [{ f: (x) => 2 * x * x + 12 * x + 13, color: "violet" }], points: [{ x: -3, y: -5, label: "(−3, −5)", color: "amber" }, { x: 0, y: 13, label: "(0, 13)", color: "blue" }], step: { x: 1, y: 2 } })],

    ["Formula with exact roots", S`Solve \(x^2-6x+4=0\) exactly and to two decimals.`,
      [S`<b>Discriminant.</b> \(36-16=20\).`,
        S`<b>Formula.</b> \(x=\frac{6\pm\sqrt{20}}2=3\pm\sqrt5\).`,
        S`<b>Decimals.</b> \(\approx5.24\) and \(\approx0.76\).`,
        S`<b>Check by completing the square.</b> \((x-3)^2=5\) ✓`],
      S`\(x=3\pm\sqrt5\approx5.24,\ 0.76\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x * x - 6 * x + 4, color: "violet" }], points: [{ x: 3 + Math.sqrt(5), y: 0, label: "(5.24, 0)", color: "amber" }, { x: 3 - Math.sqrt(5), y: 0, label: "(0.76, 0)", color: "amber" }, { x: 3, y: -5, label: "(3, −5)", color: "blue" }], step: { x: 1, y: 1 } })],

    ["Discriminant with a parameter", S`For which values of \(k\) does \(x^2-2kx+9=0\) have no real roots?`,
      [S`<b>Discriminant.</b> \(D=4k^2-36\).`,
        S`<b>No roots.</b> \(4k^2-36<0\Rightarrow k^2<9\Rightarrow-3<k<3\).`,
        S`<b>Check \(k=0\).</b> \(x^2+9=0\): no real roots ✓. \(k=3\): \((x-3)^2\), one root.`],
      S`−3 < k < 3`,
      plane({ view: { xmin: -5, xmax: 7, ymin: -2, ymax: 14 }, curves: [{ f: (x) => x * x + 9, color: "red" }, { f: (x) => x * x - 6 * x + 9, color: "violet" }], points: [{ x: 3, y: 0, label: "k = 3: (3, 0)", color: "violet" }], step: { x: 1, y: 2 } })],

    ["Maximum revenue", S`A bakery sells \(240\) loaves a day at \(5\) dollars. Each \(0.25\)-dollar increase loses \(8\) sales. Find the price that maximizes revenue.`,
      [S`<b>Model.</b> \(R=(5+0.25x)(240-8x)\).`,
        S`<b>Zeros.</b> \(x=-20\) and \(x=30\); vertex \(x=5\).`,
        S`<b>Optimum.</b> Price \(5+1.25=6.25\) dollars; \(200\) loaves; revenue \(1250\) dollars.`,
        S`<b>Check.</b> Current revenue \(5\times240=1200<1250\) ✓`],
      S`6.25 dollars (revenue 1250 dollars)`,
      plane({ view: { xmin: -21, xmax: 31, ymin: -50, ymax: 1400 }, curves: [{ f: (x) => (5 + 0.25 * x) * (240 - 8 * x), a: -20, b: 30, color: "violet" }], points: [{ x: 5, y: 1250, label: "(5, 1250)", color: "amber" }, { x: 0, y: 1200, label: "(0, 1200)", color: "blue" }], step: { x: 5, y: 200 } })],

    ["Can it reach the target?", S`A rocket's height is \(h(t)=-4.9t^2+39.2t\). Can it reach \(80\) m? Find its maximum.`,
      [S`<b>Discriminant.</b> \(-4.9t^2+39.2t-80=0\): \(D=39.2^2-4(4.9)(80)=1536.64-1568=-31.36<0\). No.`,
        S`<b>Maximum.</b> Zeros \(0\) and \(8\): vertex \(t=4\), \(h=-78.4+156.8=78.4\) m.`,
        S`<b>Consistent.</b> \(78.4<80\) ✓`],
      S`no; maximum 78.4 m at 4 s`,
      plane({ view: { xmin: -0.3, xmax: 8.5, ymin: -2, ymax: 90 }, curves: [{ f: (t) => -4.9 * t * t + 39.2 * t, a: 0, b: 8, color: "violet" }], lines: [{ m: 0, b: 80, color: "red", dash: true }], points: [{ x: 4, y: 78.4, label: "(4, 78.4)", color: "amber" }], step: { x: 1, y: 10 }, xlabel: "t (s)", ylabel: "h (m)" })],
  ]),

  practice([
    q("expand", S`Write \(y=-(x+2)^2+7\) in standard form.`, expr("-x^2-4*x+3"), "−(x² + 4x + 4) + 7.", [S`\(-x^2-4x+3\).`], S`\(-x^2-4x+3\)`),
    q("cts", S`Write \(y=x^2+12x+40\) in vertex form.`, expr("(x+6)^2+4", false), "Add and subtract 36.", [S`\((x+6)^2+4\).`], S`\((x+6)^2+4\)`),
    q("formula", S`Solve \(2x^2+3x-4=0\). Enter both roots to two decimals.`, rootsT(0.01, (-3 + Math.sqrt(41)) / 4, (-3 - Math.sqrt(41)) / 4), "D = 9 + 32.", [S`\(x=\frac{-3\pm\sqrt{41}}4\).`], S`\(0.85,\ -2.35\)`),
    q("disc", S`How many real roots does \(5x^2-4x+1=0\) have?`, num(0), "D = 16 − 20.", [S`\(D=-4\).`], S`\(0\)`),
    q("max", S`Enter the maximum value of \(y=-2x^2+16x-20\).`, num(12), "Vertex x = 4.", [S`\(-32+64-20=12\).`], S`\(12\)`),
  ]),

  ...hard([
    ["Design a parabola", S`Find \(b\) so that \(y=x^2+bx+5\) has its minimum value equal to \(1\), with \(b<0\).`,
      [S`<b>Complete the square.</b> \(y=\left(x+\frac b2\right)^2+5-\frac{b^2}4\).`,
        S`<b>Minimum.</b> \(5-\frac{b^2}4=1\Rightarrow b^2=16\Rightarrow b=-4\).`,
        S`<b>Check.</b> \(x^2-4x+5=(x-2)^2+1\) ✓`],
      S`b = −4`],
    ["Combine the tools", S`For \(y=-3x^2+12x+k\): find \(k\) so that the maximum is \(20\), then find the zeros exactly.`,
      [S`<b>Vertex.</b> Axis \(x=2\): \(y=-12+24+k=12+k=20\Rightarrow k=8\).`,
        S`<b>Zeros.</b> \(-3x^2+12x+8=0\): \(D=144+96=240\); \(x=\frac{-12\pm\sqrt{240}}{-6}=2\mp\frac{2\sqrt{15}}3\).`,
        S`<b>Decimals.</b> \(\approx4.58\) and \(\approx-0.58\).`],
      S`k = 8; zeros 2 ± (2√15)/3 ≈ 4.58, −0.58`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -6, ymax: 22 }, curves: [{ f: (x) => -3 * x * x + 12 * x + 8, color: "violet" }], points: [{ x: 2, y: 20, label: "(2, 20)", color: "amber" }, { x: 2 + (2 * Math.sqrt(15)) / 3, y: 0, label: "(4.58, 0)", color: "blue" }, { x: 2 - (2 * Math.sqrt(15)) / 3, y: 0, label: "(−0.58, 0)", color: "blue" }], step: { x: 1, y: 4 } })],
  ], [
    q("hard", S`Write \(y=\tfrac14x^2-2x+1\) in vertex form and enter the minimum value.`, num(-3), "¼(x − 4)² − 4 + 1.", [S`\(\tfrac14(x^2-8x+16)-4+1\).`], S`\(-3\)`),
    q("hard", S`Enter the smallest integer \(k\) for which \(kx^2+4x+1=0\) has no real roots.`, num(5), "16 − 4k < 0.", [S`\(k>4\).`], S`\(5\)`),
    q("hard", S`\(h(t)=-5t^2+24t+1\). Enter the landing time to two decimals.`, num((24 + Math.sqrt(596)) / 10, 0.01), "D = 576 + 20.", [S`\(t=\frac{-24-\sqrt{596}}{-10}\approx4.84\).`], S`\(\approx4.84\)`),
    q("hard", S`A rectangle has perimeter \(50\) cm. Enter the maximum area (cm²).`, num(156.25, 1e-9), "x(25 − x).", [S`\(x=12.5\): \(156.25\).`], S`\(156.25\)`),
    q("hard", S`The roots of \(2x^2+bx-3=0\) are equal in size and opposite in sign. Enter \(b\).`, num(0), "Axis at x = 0.", [S`Symmetric roots \(\Rightarrow\) axis \(x=0\Rightarrow b=0\).`], S`\(0\)`),
  ]),

  wrapUp({
    qas: [
      ["How are vertex and standard form connected?", "Expand vertex form; complete the square on standard form."],
      ["Where does the quadratic formula come from?", "Completing the square on ax² + bx + c = 0."],
      ["What does the discriminant tell me?", "The number of real roots (and whether it factors)."],
      ["How do I find a maximum revenue?", "Model R = (price)(quantity) and find the vertex."],
      ["Which method is best?", "Factor if easy; otherwise use the formula; use D to count; vertex for optimum."],
    ],
    summary: [
      "Vertex ↔ standard: expand / complete the square.",
      "Formula: x = (−b ± √(b² − 4ac)) / 2a.",
      "D > 0, = 0, < 0: two, one, no roots.",
      "Optimum at the vertex.",
    ],
    next: "Chapter 5 turns to trigonometry of acute triangles.",
  }),
];
