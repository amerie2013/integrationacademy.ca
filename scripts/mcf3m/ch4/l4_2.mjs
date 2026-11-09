// MCF3M 4.2 — Completing the Square: a = 1, a ≠ 1 (factor a from the x-terms), rational a, sketching from
// standard form with key features, and a max/min context.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane, fig } from "../lib.mjs";
import { areaBox } from "../figs.mjs";
const S = String.raw;

export const TITLE = "4.2 Completing the Square";

export const blocks = () => [
  intro({
    icon: "🟩",
    title: "Completing the Square",
    overview: S`<b>Completing the square</b> rewrites \(y=ax^2+bx+c\) in vertex form \(y=a(x-h)^2+k\) by building a perfect square inside the expression. The key fact is that \(x^2+bx\) becomes a perfect square when you add \(\left(\frac b2\right)^2\): \(x^2+6x+9=(x+3)^2\). To keep the expression equal, whatever is added must also be subtracted. Once in vertex form, the vertex, axis, maximum or minimum, and the range are visible at once, so you can sketch any parabola from its standard form.`,
    goals: [
      "explain why adding \\(\\left(\\frac b2\\right)^2\\) makes \\(x^2+bx\\) a perfect square;",
      "complete the square when \\(a=1\\);",
      "complete the square when \\(a\\ne1\\), including simple rational values such as \\(\\tfrac12\\) and \\(0.75\\);",
      "sketch a parabola from standard form and state its key features;",
      "find a maximum or minimum value in context.",
    ],
    curriculum: "A2.8 (express a quadratic in vertex form given standard form, by completing the square, including cases where b/a is a simple rational number), A2.11 (sketch a quadratic given in standard form by completing the square and identify key features)",
    prior: [
      [S`Factor \(x^2+10x+25\).`, S`\((x+5)^2\).`],
      [S`What is \(\left(\frac{-8}2\right)^2\)?`, S`\(16\).`],
      [S`Vertex of \(y=-(x-1)^2+6\)?`, S`\((1,\,6)\), a maximum.`],
    ],
    words: [
      ["Perfect square trinomial", "\\(x^2+bx+\\left(\\frac b2\\right)^2=\\left(x+\\frac b2\\right)^2\\)", "\\(x^2-8x+16=(x-4)^2\\)"],
      ["Complete the square", "add and subtract \\(\\left(\\frac b2\\right)^2\\)", "\\(x^2+6x=(x+3)^2-9\\)"],
      ["Zero principle", "adding \\(+n-n\\) does not change the value", "\\(+9-9\\)"],
      ["Maximum / minimum value", "the k of the vertex", "\\(y\\le6\\)"],
      ["Optimal value", "the best (largest or smallest) value in a context", "largest area"],
    ],
  }),

  section("📌 Why it is called completing the square", S`
  <p>Picture \(x^2+6x\) as an \(x\)-by-\(x\) square plus a \(6x\) strip split into two \(3x\) strips placed on two sides. One small \(3\times3\) corner is missing; adding it (\(+9\)) completes a square of side \(x+3\).</p>
  ${fig(areaBox(["x", "+3"], ["x", "+3"], [["x²", "3x"], ["3x", "9 (added)"]], "x² + 6x + 9 = (x + 3)²"), "The missing corner is (b/2)² = 9.")}
  ${table(["Step (a = 1)", "\\(y=x^2-10x+18\\)"], [
    ["1. Take half of b and square it", "\\(\\left(\\frac{-10}2\\right)^2=25\\)"],
    ["2. Add and subtract it", "\\(y=x^2-10x+25-25+18\\)"],
    ["3. Write the perfect square", "\\(y=(x-5)^2-7\\)"],
  ])}
  ${keyIdea(S`If \(a\ne1\), first factor \(a\) out of the \(x^2\) and \(x\) terms only: \(y=a\left(x^2+\frac bax\right)+c\). Complete the square inside the bracket, then multiply the subtracted number by \(a\) when you move it out.`)}`),

  widget("completeSquare", { init: [1, -10, 18] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Halve b first, THEN square: for x² − 10x, add 25, not 100.",
    "Keep the sign: x² − 10x + 25 = (x − 5)², not (x + 5)².",
    "With a ≠ 1, the subtracted number must be multiplied by a when it leaves the bracket.",
    "Do not factor a out of the constant c.",
    "Check by expanding your vertex form back to standard form.",
  ])}`),

  examples([
    ["a = 1", S`Write \(y=x^2+8x+5\) in vertex form and state the vertex and range.`,
      [S`<b>Half of \(b\), squared.</b> \(\left(\frac82\right)^2=16\).`,
        S`<b>Add and subtract 16.</b> \(y=x^2+8x+16-16+5\).`,
        S`<b>Perfect square.</b> \(y=(x+4)^2-11\).`,
        S`<b>Features.</b> Vertex \((-4,\,-11)\); opens up; range \(y\ge-11\).`,
        S`<b>Check.</b> \((x+4)^2-11=x^2+8x+16-11=x^2+8x+5\) ✓`],
      S`\(y=(x+4)^2-11\); vertex (−4, −11); range y ≥ −11`,
      plane({ view: { xmin: -9, xmax: 2, ymin: -12, ymax: 8 }, curves: [{ f: (x) => x * x + 8 * x + 5, color: "violet" }], points: [{ x: -4, y: -11, label: "(−4, −11)", color: "amber" }, { x: 0, y: 5, label: "(0, 5)", color: "blue" }], step: { x: 1, y: 2 } })],

    ["a ≠ 1", S`Write \(y=3x^2-12x+7\) in vertex form.`,
      [S`<b>Factor 3 from the \(x\)-terms.</b> \(y=3(x^2-4x)+7\).`,
        S`<b>Complete inside.</b> \(\left(\frac{-4}2\right)^2=4\): \(y=3(x^2-4x+4-4)+7\).`,
        S`<b>Move \(-4\) out (times 3).</b> \(y=3(x-2)^2-12+7=3(x-2)^2-5\).`,
        S`<b>Check.</b> \(3(x^2-4x+4)-5=3x^2-12x+12-5=3x^2-12x+7\) ✓`,
        S`<b>Graph.</b> Vertex \((2,\,-5)\), narrower than \(y=x^2\), \(y\)-intercept \(7\).`],
      S`\(y=3(x-2)^2-5\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -6, ymax: 9 }, curves: [{ f: (x) => 3 * x * x - 12 * x + 7, color: "violet" }], points: [{ x: 2, y: -5, label: "(2, −5)", color: "amber" }, { x: 0, y: 7, label: "(0, 7)", color: "blue" }, { x: 4, y: 7, label: "(4, 7)", color: "blue" }], step: { x: 1, y: 1 } })],

    ["A negative a", S`Write \(y=-2x^2-12x-11\) in vertex form and find its maximum.`,
      [S`<b>Factor \(-2\).</b> \(y=-2(x^2+6x)-11\).`,
        S`<b>Complete.</b> \(9\): \(y=-2(x^2+6x+9-9)-11\).`,
        S`<b>Move \(-9\) out.</b> \(-2(-9)=+18\): \(y=-2(x+3)^2+18-11=-2(x+3)^2+7\).`,
        S`<b>Maximum.</b> \(7\) at \(x=-3\).`,
        S`<b>Check at \(x=0\).</b> \(-2(9)+7=-11\) ✓`],
      S`\(y=-2(x+3)^2+7\); maximum 7`,
      plane({ view: { xmin: -7, xmax: 1, ymin: -12, ymax: 9 }, curves: [{ f: (x) => -2 * x * x - 12 * x - 11, color: "violet" }], points: [{ x: -3, y: 7, label: "(−3, 7)", color: "amber" }, { x: 0, y: -11, label: "(0, −11)", color: "blue" }], step: { x: 1, y: 2 } })],

    ["A rational a", S`Write \(y=\tfrac12x^2+3x+1\) in vertex form.`,
      [S`<b>Factor \(\tfrac12\).</b> \(\tfrac12x^2+3x=\tfrac12(x^2+6x)\), since \(3\div\tfrac12=6\).`,
        S`<b>Complete.</b> \(y=\tfrac12(x^2+6x+9-9)+1\).`,
        S`<b>Move out.</b> \(\tfrac12(-9)=-4.5\): \(y=\tfrac12(x+3)^2-3.5\).`,
        S`<b>Check.</b> \(\tfrac12(x^2+6x+9)-3.5=\tfrac12x^2+3x+4.5-3.5\) ✓`,
        S`<b>Graph.</b> Vertex \((-3,\,-3.5)\), wider than \(y=x^2\).`],
      S`\(y=\tfrac12(x+3)^2-3.5\)`,
      plane({ view: { xmin: -8, xmax: 2, ymin: -5, ymax: 5 }, curves: [{ f: (x) => 0.5 * x * x + 3 * x + 1, color: "violet" }], points: [{ x: -3, y: -3.5, label: "(−3, −3.5)", color: "amber" }, { x: 0, y: 1, label: "(0, 1)", color: "blue" }], step: { x: 1, y: 1 } })],

    ["Sketch from standard form", S`Sketch \(y=x^2-6x+5\): complete the square, then give vertex, axis, intercepts and the intervals where \(y\) is negative.`,
      [S`<b>Vertex form.</b> \(y=(x-3)^2-9+5=(x-3)^2-4\): vertex \((3,\,-4)\), axis \(x=3\).`,
        S`<b>\(x\)-intercepts.</b> \((x-3)^2=4\Rightarrow x=1\) or \(x=5\).`,
        S`<b>\(y\)-intercept.</b> \(5\).`,
        S`<b>Sign.</b> The parabola opens up, so it is below the axis between the zeros: \(y<0\) for \(1<x<5\).`,
        S`<b>Increasing/decreasing.</b> Decreasing for \(x<3\), increasing for \(x>3\).`],
      S`vertex (3, −4); zeros 1, 5; y-int 5; negative on 1 < x < 5`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -5, ymax: 7 }, curves: [{ f: (x) => x * x - 6 * x + 5, color: "violet" }], vlines: [{ x: 3, color: "green", dash: true }], points: [{ x: 3, y: -4, label: "(3, −4)", color: "amber" }, { x: 1, y: 0, label: "(1, 0)", color: "blue" }, { x: 5, y: 0, label: "(5, 0)", color: "blue" }, { x: 0, y: 5, label: "(0, 5)", color: "gray" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("a1", S`Write \(y=x^2-4x+9\) in vertex form.`, expr("(x-2)^2+5", false), "Add and subtract 4.", [S`\((x-2)^2-4+9\).`], S`\((x-2)^2+5\)`),
    q("a1", S`Enter the minimum value of \(y=x^2+10x+30\).`, num(5), "(x + 5)² + 5.", [S`\(30-25=5\).`], S`\(5\)`),
    q("a2", S`Write \(y=2x^2+8x+3\) in vertex form.`, expr("2*(x+2)^2-5", false), "2(x² + 4x + 4 − 4) + 3.", [S`\(2(x+2)^2-8+3\).`], S`\(2(x+2)^2-5\)`),
    q("neg", S`Enter the maximum value of \(y=-x^2+6x+1\).`, num(10), "−(x − 3)² + 10.", [S`\(-(x^2-6x+9)+9+1\).`], S`\(10\)`),
    q("which", S`What number completes the square for \(x^2-14x\)?`, choice(["49", "196", "14", "7"], 0), "(−14/2)².", [S`\((-7)^2=49\).`], S`\(49\)`),
  ]),

  ...hard([
    ["A rational coefficient", S`Write \(y=0.75x^2-3x+5\) in vertex form and state the vertex.`,
      [S`<b>Factor 0.75.</b> \(-3\div0.75=-4\): \(y=0.75(x^2-4x)+5\).`,
        S`<b>Complete.</b> \(y=0.75(x^2-4x+4-4)+5=0.75(x-2)^2-3+5\).`,
        S`<b>Vertex form.</b> \(y=0.75(x-2)^2+2\); vertex \((2,\,2)\).`,
        S`<b>Check at \(x=0\).</b> \(0.75(4)+2=5\) ✓`],
      S`y = 0.75(x − 2)² + 2; vertex (2, 2)`,
      plane({ view: { xmin: -2, xmax: 6, ymin: -1, ymax: 9 }, curves: [{ f: (x) => 0.75 * x * x - 3 * x + 5, color: "violet" }], points: [{ x: 2, y: 2, label: "(2, 2)", color: "amber" }, { x: 0, y: 5, label: "(0, 5)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["An odd b", S`Write \(y=x^2+5x+2\) in vertex form.`,
      [S`<b>Half of 5, squared.</b> \(\left(\frac52\right)^2=\frac{25}4\).`,
        S`<b>Complete.</b> \(y=\left(x+\frac52\right)^2-\frac{25}4+2=\left(x+\frac52\right)^2-\frac{17}4\).`,
        S`<b>Vertex.</b> \((-2.5,\,-4.25)\). Check at \(x=0\): \(6.25-4.25=2\) ✓`],
      S`y = (x + 2.5)² − 4.25`],
  ], [
    q("hard", S`Write \(y=-3x^2+18x-20\) in vertex form.`, expr("-3*(x-3)^2+7", false), "−3(x² − 6x) − 20.", [S`\(-3(x-3)^2+27-20\).`], S`\(-3(x-3)^2+7\)`),
    q("hard", S`Enter the \(y\)-coordinate of the vertex of \(y=\tfrac12x^2-4x+3\).`, num(-5), "½(x − 4)² − 8 + 3.", [S`\(\tfrac12(x^2-8x+16)-8+3\).`], S`\(-5\)`),
    q("hard", S`Enter the \(x\)-coordinate of the vertex of \(y=x^2-7x+1\) (decimal).`, num(3.5, 1e-9), "Half of −7.", [S`\((x-3.5)^2-11.25\).`], S`\(3.5\)`),
    q("hard", S`For which \(c\) does \(y=x^2-12x+c\) have its vertex on the \(x\)-axis?`, num(36), "(x − 6)² + (c − 36).", [S`\(c-36=0\).`], S`\(36\)`),
    q("hard", S`A garden's area is \(A=-2x^2+40x\). Enter the largest possible area.`, num(200), "−2(x − 10)² + 200.", [S`\(-2(x^2-20x+100)+200\).`], S`\(200\)`),
  ]),

  wrapUp({
    qas: [
      ["What number completes the square for x² + bx?", "(b/2)²: half of b, squared."],
      ["Why add AND subtract it?", "So the expression's value does not change (zero principle)."],
      ["What changes when a ≠ 1?", "Factor a from the x-terms first, and multiply the subtracted number by a when moving it out."],
      ["How do I check my vertex form?", "Expand it back into standard form."],
      ["Why is vertex form useful?", "It shows the vertex, max/min value and range immediately."],
    ],
    summary: [
      "x² + bx + (b/2)² = (x + b/2)².",
      "a ≠ 1: y = a(x² + (b/a)x) + c, then complete inside.",
      "Vertex form gives vertex, axis, max/min and range.",
      "Always check by expanding.",
    ],
    next: "4.3 completes the square on ax² + bx + c = 0 in general to obtain the quadratic formula.",
  }),
];
