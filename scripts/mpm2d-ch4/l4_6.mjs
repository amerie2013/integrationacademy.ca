// MPM2D 4.6 — Standard Form & Converting Between Forms (self-study format): expanding vertex and factored form,
// completing the square (no fractions), partial factoring for sketching, choosing the best form
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "4.6 Standard Form & Converting Between Forms";

export const blocks = () => [
  intro({
    icon: "🔄",
    title: "Standard Form & Converting Between Forms",
    overview: String.raw`The same parabola can be written three ways: standard form \(y=ax^2+bx+c\) shows the \(y\)-intercept, vertex form \(y=a(x-h)^2+k\) shows the vertex, and factored form \(y=a(x-r)(x-s)\) shows the zeros. In this lesson you will expand vertex and factored form into standard form, complete the square to turn standard form into vertex form, use partial factoring to sketch a parabola, and choose the form that answers a question most directly.`,
    goals: [
      "expand vertex form and factored form into standard form;",
      "complete the square to write y = ax² + bx + c in vertex form (no fractions);",
      "use partial factoring and symmetry to find the vertex;",
      "choose the most useful form for a question;",
      "check that two forms describe the same parabola.",
    ],
    curriculum: "QR3 (express y = ax² + bx + c in the form y = a(x − h)² + k by completing the square in situations involving no fractions; sketch using a variety of methods, including partial factoring)",
    prior: [
      [String.raw`Expand \((x-3)^2\).`, String.raw`\(x^2-6x+9\).`],
      [String.raw`Is \(x^2+10x+25\) a perfect square?`, String.raw`Yes: \((x+5)^2\).`],
      [String.raw`Factor \(x^2-4x\).`, String.raw`\(x(x-4)\).`],
    ],
    words: [
      ["Standard form", "\\(y=ax^2+bx+c\\)", ""],
      ["Vertex form", "\\(y=a(x-h)^2+k\\)", ""],
      ["Completing the square", "adding and subtracting \\((\\tfrac b2)^2\\) to make a perfect square", ""],
      ["Partial factoring", "\\(y=x(ax+b)+c\\)", ""],
    ],
  }),

  section("📌 Three forms, three pieces of information", String.raw`
  ${table(["Form", "Shows directly", "Get there by"], [
    ["standard \\(ax^2+bx+c\\)", "y-intercept \\(c\\)", "expanding vertex or factored form"],
    ["vertex \\(a(x-h)^2+k\\)", "vertex \\((h,k)\\), optimal value", "completing the square"],
    ["factored \\(a(x-r)(x-s)\\)", "zeros \\(r\\), \\(s\\)", "factoring (Chapter 3)"],
  ])}
  ${keyIdea(String.raw`<strong>Completing the square</strong> (for \(y=x^2+bx+c\)): add and subtract \(\left(\frac b2\right)^2\): \(y=\left(x^2+bx+\left(\tfrac b2\right)^2\right)-\left(\tfrac b2\right)^2+c=\left(x+\tfrac b2\right)^2+c-\left(\tfrac b2\right)^2\). If \(a\ne1\), factor \(a\) out of the first two terms first.`)}`),

  section("📌 Explore", String.raw`<p>The area diagram shows the missing corner that turns \(x^2+bx\) into a perfect square. Change \(a\), \(b\) and \(c\) and follow the four steps.</p>`),

  widget("completeSquare", { init: [1, -2, 3] }),

  section("📌 Partial factoring", String.raw`
  <p>For \(y=x^2-4x+7\), write \(y=x(x-4)+7\). When \(x=0\) or \(x=4\), the product is \(0\) and \(y=7\). Those two points are mirror images, so the axis is \(x=2\) and the vertex is \((2,\ 4-8+7)=(2,3)\) — no zeros needed.</p>
  ${plane({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 9 }, curves: [{ f: (x) => x * x - 4 * x + 7, color: "violet" }], points: [{ x: 0, y: 7, label: "(0, 7)", color: "green" }, { x: 4, y: 7, label: "(4, 7)", color: "green" }, { x: 2, y: 3, label: "(2, 3)", color: "blue" }], step: { x: 1, y: 1 } })}
  ${watchOut([
    "Add and subtract the same number — you are not allowed to change the value.",
    "If a ≠ 1, the number you subtract is multiplied by a when it leaves the bracket.",
    "Half of b, then square it: for x² − 10x, add 25.",
    "Check by expanding the vertex form back to standard form.",
  ])}`),

  examples([
    ["Vertex form to standard form", String.raw`Write \(y=2(x-3)^2+1\) in standard form.`,
      [String.raw`\(2(x^2-6x+9)+1=2x^2-12x+18+1\).`],
      String.raw`\(y=2x^2-12x+19\)`],
    ["Factored form to standard form", String.raw`Write \(y=-(x+2)(x-5)\) in standard form.`,
      [String.raw`\((x+2)(x-5)=x^2-3x-10\).`, String.raw`\(-(x^2-3x-10)=-x^2+3x+10\).`],
      String.raw`\(y=-x^2+3x+10\)`],
    ["Completing the square", String.raw`Write \(y=x^2+6x+2\) in vertex form and state the vertex.`,
      [String.raw`Half of 6 is 3; \(3^2=9\): \(y=(x^2+6x+9)-9+2\).`, String.raw`\(y=(x+3)^2-7\).`],
      String.raw`\(y=(x+3)^2-7\); vertex \((-3,-7)\)`,
      plane({ view: { xmin: -7, xmax: 2, ymin: -8, ymax: 4 }, curves: [{ f: (x) => x * x + 6 * x + 2, color: "violet" }], points: [{ x: -3, y: -7, label: "(−3, −7)", color: "blue" }, { x: 0, y: 2, label: "(0, 2)", color: "green" }], step: { x: 1, y: 1 } })],
    ["Completing the square with a ≠ 1", String.raw`Write \(y=2x^2-8x+5\) in vertex form.`,
      [String.raw`Factor 2 from the first two terms: \(y=2(x^2-4x)+5\).`, String.raw`Add and subtract 4 inside: \(y=2(x^2-4x+4-4)+5=2(x-2)^2-8+5\).`],
      String.raw`\(y=2(x-2)^2-3\); vertex \((2,-3)\)`],
    ["Partial factoring", String.raw`Use partial factoring to find the vertex of \(y=-x^2+6x+1\).`,
      [String.raw`\(y=-x(x-6)+1\): at \(x=0\) and \(x=6\), \(y=1\).`, String.raw`Axis \(x=3\); \(y=-9+18+1=10\).`],
      String.raw`vertex \((3,10)\), a maximum`],
  ]),

  practice([
    q("expand", String.raw`Write \(y=(x-4)^2+3\) in standard form. What is the constant term \(c\)?`, num(19),
      "Expand the square.", [String.raw`\(x^2-8x+16+3\).`], String.raw`\(19\)`),
    q("complete the square", String.raw`Complete the square for \(y=x^2-10x+20\). What is the \(y\)-coordinate of the vertex?`, num(-5),
      "Half of −10 is −5; add and subtract 25.", [String.raw`\((x-5)^2-25+20\).`], String.raw`\(-5\)`),
    q("complete the square", String.raw`What is the \(x\)-coordinate of the vertex of \(y=x^2+8x+11\)?`, num(-4),
      "Complete the square or use −b/(2a).", [String.raw`\((x+4)^2-5\).`], String.raw`\(-4\)`),
    q("a ≠ 1", String.raw`Write \(y=3x^2+12x+5\) in vertex form. What is the \(y\)-coordinate of the vertex?`, num(-7),
      "Factor 3 from the first two terms.", [String.raw`\(3(x^2+4x+4-4)+5=3(x+2)^2-12+5\).`], String.raw`\(-7\)`),
    q("best form", "Which form shows the zeros of a parabola directly?", choice(["factored form", "vertex form", "standard form", "none of them"], 0),
      "Which form has brackets equal to zero?", [String.raw`\(y=a(x-r)(x-s)\).`], "factored form"),
  ]),

  wrapUp({
    qas: [
      ["Why does completing the square add and subtract the same number?", "Adding (b/2)² creates a perfect square; subtracting it keeps the expression equal to the original."],
      ["What if b is odd?", "Then b/2 is a fraction. In this course we complete the square only when there are no fractions; −b/(2a) still gives the vertex."],
      ["How is partial factoring different from factoring?", "It only factors the x-terms, giving two points with the same y-value. It works even when the parabola has no zeros."],
      ["Can every quadratic be written in all three forms?", "Every quadratic has a standard and a vertex form; only those with zeros have a factored form."],
      ["Which form should I use in a word problem?", "Maximum/minimum → vertex form; when it hits the ground → factored form; starting value → standard form."],
    ],
    summary: [
      "Expand vertex or factored form to get standard form.",
      "Complete the square: add and subtract (b/2)²; factor out a first.",
      "Partial factoring: two points with equal y give the axis.",
      "Choose the form that answers the question.",
    ],
    next: "4.7 compares quadratic growth with exponential growth and explains zero and negative exponents.",
  }),
];
