// MCR3U 3.2 — Converting Between Forms: expanding, factoring, the axis x = −b/(2a), equations from a vertex or zeros and a point
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "3.2 Converting Between Forms";
export const ID = "5c3e0001-0001-4001-8001-000000000312";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔄",
    title: "Converting Between Forms",
    overview: S`In 3.1 you read different features from different forms. Often the question asks for a feature the given form hides: the zeros of a function in vertex form, or the vertex of a function in standard form. In this lesson you will expand to reach standard form, factor to reach factored form, use the axis \(x=-\frac{b}{2a}\) to reach vertex form, and build an equation in the most useful form from a vertex or the zeros and one more point.`,
    goals: [
      "expand vertex form and factored form into standard form;",
      "factor standard form (common factor first) to find the zeros;",
      "find the vertex from factored form by averaging the zeros;",
      "explain and use the axis formula \\(x=-\\frac{b}{2a}\\) to write standard form in vertex form;",
      "write the equation of a parabola from its vertex and a point, or its zeros and a point, in all three forms.",
    ],
    curriculum: "A1.2 (represent quadratic functions using function notation, from equations, tables and graphs), A2.2 (determine the maximum or minimum of a quadratic function)",
    prior: [
      [S`Expand \((x+6)^2\).`, S`\(x^2+12x+36\).`],
      [S`Factor \(x^2+3x-10\).`, S`\((x+5)(x-2)\).`],
      [S`Factor \(4x^2-20x\).`, S`\(4x(x-5)\).`],
    ],
    words: [
      ["Expand", "multiply out the brackets and collect like terms", "\\((x-2)^2=x^2-4x+4\\)"],
      ["Factor", "write as a product; take out a common factor first", "\\(2x^2-8=2(x-2)(x+2)\\)"],
      ["Axis formula", "the axis of \\(ax^2+bx+c\\) is \\(x=-\\frac{b}{2a}\\)", "\\(x^2+4x-7\\): \\(x=-2\\)"],
      ["Leading coefficient", "the value of \\(a\\); the same in all three forms", "\\(a=-3\\)"],
    ],
  }),

  section("📌 The routes between the forms", S`
  ${table(["From → to", "Method"], [
    ["vertex → standard", "expand the square, distribute a, add k"],
    ["factored → standard", "multiply the two brackets, then distribute a"],
    ["standard → factored", "common factor first, then factor the trinomial (only if it has real zeros)"],
    ["factored → vertex", "average the zeros for h, substitute to get k"],
    ["standard → vertex", "axis h = −b/(2a), substitute to get k (3.4 shows a second way: completing the square)"],
  ])}
  ${keyIdea(S`The leading coefficient \(a\) never changes when you convert. If your new form has a different \(a\), something went wrong.`)}`),

  section("📌 Why the axis is \\(x=-\\frac{b}{2a}\\)", S`
  <p>Find where \(f(x)=ax^2+bx+c\) has height \(c\): \(ax^2+bx+c=c\Rightarrow x(ax+b)=0\Rightarrow x=0\) or \(x=-\frac{b}{a}\). Two points at the same height are mirror images across the axis, so the axis is halfway between them:</p>
  <p style="text-align:center">\(h=\dfrac{0+\left(-\frac{b}{a}\right)}{2}=-\dfrac{b}{2a}\).</p>
  ${plane({ view: { xmin: -6, xmax: 2, ymin: -7, ymax: 4 }, curves: [{ f: (x) => x * x + 4 * x - 2, color: "violet" }], lines: [{ m: 0, b: -2, color: "green", dash: true }], vlines: [{ x: -2, color: "gray", dash: true }], points: [{ x: 0, y: -2, label: "(0, −2)", color: "green" }, { x: -4, y: -2, label: "(−4, −2)", color: "green" }, { x: -2, y: -6, label: "(−2, −6)", color: "blue" }], step: { x: 1, y: 1 } }, "y = x² + 4x − 2 has height −2 at x = 0 and x = −4, so its axis is x = −2")}
  <p>This works even when the parabola has no zeros, so it is the quickest way from standard form to the vertex.</p>`),

  section("📌 Explore", S`<p>Set \(a\), \(h\) and \(k\). In <em>vertex → standard</em> mode the explorer expands step by step and tells you whether a factored form exists. Switch to <em>standard → vertex</em> to see the axis formula bring you back.</p>`),

  widget("formConverter", { init: [2, -1, -8] }),

  section("📌 Building an equation in the right form", S`
  <p>Choose the form that uses the facts you are given, then use one more point to find \(a\).</p>
  <p><strong>Zeros and a point.</strong> Zeros \(-3\) and \(2\), through \((1,-8)\): \(f(x)=a(x+3)(x-2)\), so \(a(4)(-1)=-8\) and \(a=2\).</p>
  ${plane({ view: { xmin: -5, xmax: 4, ymin: -14, ymax: 8 }, curves: [{ f: (x) => 2 * (x + 3) * (x - 2), color: "violet" }], points: [{ x: -3, y: 0, label: "(−3, 0)" }, { x: 2, y: 0, label: "(2, 0)" }, { x: 1, y: -8, label: "(1, −8)", color: "green" }], step: { x: 1, y: 2 } }, "f(x) = 2(x + 3)(x − 2)")}
  <p><strong>Vertex and a point.</strong> Start from \(f(x)=a(x-h)^2+k\) and substitute the point (Example 5).</p>
  ${watchOut([
    "Expand the square before multiplying by a: −3(x + 1)² + 5 is −3(x² + 2x + 1) + 5, not (−3x − 3)² + 5.",
    "Take out a common factor first: 3x² − 12x − 36 = 3(x² − 4x − 12) is much easier to factor.",
    "In x = −b/(2a), keep the signs: for −2x² + 8x, h = −8/(−4) = 2.",
    "After finding h, you still need k: substitute h into the original equation.",
  ])}`),

  examples([
    ["Vertex → standard", S`Write \(f(x)=-3(x+1)^2+5\) in standard form.`,
      [S`<b>Plan.</b> Standard form has no brackets, so we expand. Order of operations: square first, then multiply by \(a\), then add \(k\).`,
        S`<b>Expand the square.</b> \((x+1)^2=x^2+2x+1\). The middle term \(2x\) is easy to forget.`,
        S`<b>Distribute \(-3\).</b> \(-3(x^2+2x+1)=-3x^2-6x-3\).`,
        S`<b>Add 5.</b> \(-3x^2-6x-3+5=-3x^2-6x+2\).`,
        S`<b>Check.</b> Both forms must give the same y-intercept: \(f(0)=-3(1)+5=2\) ✓, which is \(c=2\). The axis formula gives \(-\frac b{2a}=-\frac{-6}{-6}=-1\), which matches the vertex ✓`],
      S`\(f(x)=-3x^2-6x+2\)`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -8, ymax: 7 }, curves: [{ f: (x) => -3 * (x + 1) ** 2 + 5, color: "violet" }], points: [{ x: -1, y: 5, label: "(−1, 5)", color: "blue" }, { x: 0, y: 2, label: "(0, 2)", color: "green" }], step: { x: 1, y: 1 } })],
    ["Factored → standard and vertex", S`Write \(f(x)=2(x+5)(x-1)\) in standard form and in vertex form.`,
      [S`<b>Multiply the brackets.</b> \((x+5)(x-1)=x^2-x+5x-5=x^2+4x-5\).`,
        S`<b>Distribute the 2.</b> \(2x^2+8x-10\). This is standard form.`,
        S`<b>Find the axis from the zeros.</b> The zeros are \(-5\) and 1, so the axis is \(x=\frac{-5+1}2=-2\).`,
        S`<b>Find \(k\).</b> \(f(-2)=2(3)(-3)=-18\). So the vertex is \((-2,-18)\), and the vertex form is \(2(x+2)^2-18\). The value \(a=2\) is the same in all forms.`,
        S`<b>Check.</b> Expand: \(2(x^2+4x+4)-18=2x^2+8x+8-18=2x^2+8x-10\) ✓`],
      S`\(2x^2+8x-10=2(x+2)^2-18\)`,
      plane({ view: { xmin: -7, xmax: 3, ymin: -20, ymax: 6 }, curves: [{ f: (x) => 2 * (x + 5) * (x - 1), color: "violet" }], vlines: [{ x: -2, color: "gray", dash: true }], points: [{ x: -5, y: 0, label: "(−5, 0)" }, { x: 1, y: 0, label: "(1, 0)" }, { x: -2, y: -18, label: "(−2, −18)", color: "blue" }, { x: 0, y: -10, label: "(0, −10)", color: "green" }], step: { x: 1, y: 2 } })],
    ["Standard → factored → vertex", S`Find the zeros and the vertex of \(f(x)=3x^2-12x-36\).`,
      [S`<b>Common factor first.</b> Every coefficient is divisible by 3: \(f(x)=3(x^2-4x-12)\).`,
        S`<b>Factor the trinomial.</b> Product \(-12\), sum \(-4\): the numbers are \(-6\) and \(2\). So \(f(x)=3(x-6)(x+2)\), and the zeros are 6 and \(-2\).`,
        S`<b>Axis.</b> \(x=\frac{6+(-2)}2=2\).`,
        S`<b>Vertex.</b> \(f(2)=3(-4)(4)=-48\). So the vertex is \((2,-48)\), and \(f(x)=3(x-2)^2-48\).`,
        S`<b>Check.</b> \(3(x^2-4x+4)-48=3x^2-12x+12-48=3x^2-12x-36\) ✓`],
      S`zeros \(-2\) and 6; vertex \((2,-48)\)`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -52, ymax: 12 }, curves: [{ f: (x) => 3 * x * x - 12 * x - 36, color: "violet" }], vlines: [{ x: 2, color: "gray", dash: true }], points: [{ x: -2, y: 0, label: "(−2, 0)" }, { x: 6, y: 0, label: "(6, 0)" }, { x: 2, y: -48, label: "(2, −48)", color: "blue" }, { x: 0, y: -36, label: "(0, −36)", color: "green" }], step: { x: 1, y: 8 } })],
    ["Standard → vertex with the axis formula", S`Write \(f(x)=2x^2+6x-1\) in vertex form.`,
      [S`<b>Why not factor?</b> No pair of integers works here, so we find the vertex directly. Points at equal height are symmetric: \(f(0)=f(-3)=-1\), so the axis is midway at \(x=-1.5\).`,
        S`<b>The formula agrees.</b> \(h=-\frac b{2a}=-\frac64=-1.5\).`,
        S`<b>Find \(k\).</b> \(k=f(-1.5)=2(2.25)+6(-1.5)-1=4.5-9-1=-5.5\).`,
        S`<b>Write it.</b> \(f(x)=2(x+1.5)^2-5.5\), with the same \(a=2\).`,
        S`<b>Check.</b> \(2(x^2+3x+2.25)-5.5=2x^2+6x+4.5-5.5=2x^2+6x-1\) ✓`],
      S`\(f(x)=2(x+1.5)^2-5.5\)`,
      plane({ view: { xmin: -5, xmax: 2, ymin: -7, ymax: 5 }, curves: [{ f: (x) => 2 * x * x + 6 * x - 1, color: "violet" }], lines: [{ m: 0, b: -1, color: "green", dash: true }], vlines: [{ x: -1.5, color: "gray", dash: true }], points: [{ x: 0, y: -1, label: "(0, −1)", color: "green" }, { x: -3, y: -1, label: "(−3, −1)", color: "green" }, { x: -1.5, y: -5.5, label: "(−1.5, −5.5)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Vertex and a point → all three forms", S`A parabola has vertex \((3,8)\) and passes through \((5,0)\). Write it in vertex, factored and standard form.`,
      [S`<b>Vertex form.</b> \(f(x)=a(x-3)^2+8\). Substitute \((5,0)\): \(0=4a+8\), so \(a=-2\).`,
        S`<b>Zeros.</b> \((5,0)\) is one zero, 2 units right of the axis \(x=3\). By symmetry, the other zero is 2 units left: \(x=1\).`,
        S`<b>Factored form.</b> \(f(x)=-2(x-1)(x-5)\), with the same \(a\).`,
        S`<b>Standard form.</b> \((x-1)(x-5)=x^2-6x+5\). Multiply by \(-2\): \(-2x^2+12x-10\).`,
        S`<b>Check.</b> All forms must give the same y-intercept. Vertex form: \(-2(9)+8=-10\). Factored form: \(-2(-1)(-5)=-10\). Standard form: \(c=-10\) ✓`],
      S`\(-2(x-3)^2+8=-2(x-1)(x-5)=-2x^2+12x-10\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -12, ymax: 10 }, curves: [{ f: (x) => -2 * (x - 3) ** 2 + 8, color: "violet" }], points: [{ x: 3, y: 8, label: "(3, 8)", color: "blue" }, { x: 5, y: 0, label: "(5, 0)", color: "green" }, { x: 1, y: 0, label: "(1, 0)" }, { x: 0, y: -10, label: "(0, −10)" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("vertex → standard", S`Write \(f(x)=(x-4)^2+1\) in standard form. What is the constant term \(c\)?`, num(17),
      "Expand the square first.", [S`\(x^2-8x+16+1\).`], S`\(17\)`),
    q("factored → standard", S`Write \(f(x)=2(x+4)(x-1)\) in standard form. What is \(b\)?`, num(6),
      "Multiply the brackets, then distribute 2.", [S`\(2(x^2+3x-4)=2x^2+6x-8\).`], S`\(6\)`),
    q("axis formula", S`Use \(x=-\frac{b}{2a}\) to find the axis of \(f(x)=3x^2-18x+4\). Enter the x-value.`, num(3),
      "b = −18, a = 3.", [S`\(-\frac{-18}{6}\).`], S`\(x=3\)`),
    q("vertex", S`Find the y-coordinate of the vertex of \(f(x)=x^2+10x+21\).`, num(-4),
      "Axis first, then substitute.", [S`\(h=-5\); \(25-50+21\).`], S`\(-4\)`),
    q("factor", S`Which is the factored form of \(x^2-2x-15\)?`, choice(["(x − 5)(x + 3)", "(x + 5)(x − 3)", "(x − 15)(x + 1)", "(x − 5)(x − 3)"], 0),
      "Two numbers with product −15 and sum −2.", [S`\(-5\) and \(3\).`], S`\((x-5)(x+3)\)`),
  ]),

  ...hard([
    ["Choose b and c", S`Find \(b\) and \(c\) so that \(f(x)=2x^2+bx+c\) has vertex \((-3,4)\). Then explain why it has no zeros.`,
      [S`The vertex form must be \(f(x)=2(x+3)^2+4\) (same \(a\)).`, S`Expand: \(2(x^2+6x+9)+4=2x^2+12x+22\), so \(b=12\), \(c=22\).`, S`It opens up and its lowest value is 4, so \(f(x)\ge4>0\) for every \(x\).`],
      S`\(b=12\), \(c=22\); minimum 4, so no zeros`,
      plane({ view: { xmin: -7, xmax: 1, ymin: -1, ymax: 14 }, curves: [{ f: (x) => 2 * (x + 3) ** 2 + 4, color: "violet" }], vlines: [{ x: -3, color: "gray", dash: true }], points: [{ x: -3, y: 4, label: "(−3, 4)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Zeros and a point → all three forms", S`A parabola has zeros \(-4\) and \(6\) and passes through \((2,-12)\). Write it in factored, standard and vertex form.`,
      [S`\(f(x)=a(x+4)(x-6)\); \(a(6)(-4)=-24a=-12\Rightarrow a=\tfrac12\).`, S`Standard: \(\tfrac12(x^2-2x-24)=\tfrac12x^2-x-12\).`, S`Axis \(x=1\); \(f(1)=\tfrac12(5)(-5)=-12.5\), so \(f(x)=\tfrac12(x-1)^2-12.5\).`],
      S`\(\tfrac12(x+4)(x-6)=\tfrac12x^2-x-12=\tfrac12(x-1)^2-12.5\)`],
  ], [
    q("hard", S`\(f(x)=-(x-2)^2+k\) has y-intercept 5. Find \(k\).`, num(9),
      "Substitute x = 0.", [S`\(-4+k=5\).`], S`\(9\)`),
    q("hard", S`\(f(x)=x^2+bx+c\) has vertex \((4,-1)\). Find \(c\).`, num(15),
      "Write the vertex form with a = 1 and expand.", [S`\((x-4)^2-1=x^2-8x+15\).`], S`\(15\)`),
    q("hard", S`The axis of \(f(x)=5x^2+bx-3\) is \(x=-0.8\). Find \(b\).`, num(8),
      "Set −b/(2a) equal to −0.8.", [S`\(-\frac{b}{10}=-0.8\).`], S`\(8\)`),
  ]),

  wrapUp({
    qas: [
      ["Do I always have to convert?", "No. Convert only when the form you have hides the feature you need."],
      ["Why take out a common factor first?", "It leaves a simpler trinomial (often with a = 1), and it keeps a visible in the factored form."],
      ["What if standard form will not factor?", "Use x = −b/(2a) for the vertex. The zeros may still exist; 3.5 finds them with the quadratic formula."],
      ["How can I check a conversion?", "Compare the y-intercepts (substitute x = 0 into both forms) and check that a is the same."],
      ["Which point should I use to find a?", "Any point on the parabola other than the zeros or the vertex you already used."],
    ],
    summary: [
      "Vertex or factored → standard: expand, then distribute a.",
      "Standard → factored: common factor, then factor the trinomial.",
      "Axis: average of the zeros, or x = −b/(2a); then substitute for k.",
      "Given the vertex or the zeros, start in that form and use one point to find a.",
    ],
    next: "3.3 recognises quadratics from tables of values and finds their equations from data.",
  }),
];
