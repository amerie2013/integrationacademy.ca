// MPM2D 4.8 — Chapter 4 Review (NEW lesson, placed after 4.7)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "4.8 Chapter 4 Review";
export const NEW = { id: "2d1e7c1a-0a17-4d1e-9c17-d1a9f0000408", position: 27 };

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 4 Review — Quadratic Relations",
    overview: String.raw`This page pulls the chapter together before the test: each lesson's key idea on one screen, questions where you choose the most useful form, multi-step problems, mixed practice and a readiness checklist. Work through it after 4.1–4.7 and return to any lesson where you get stuck.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "choose the best form of a quadratic for a question;",
      "solve multi-step problems with parabolas;",
      "check your readiness for the chapter test.",
    ],
    curriculum: "QR1, QR2, QR3 (whole chapter)",
    prior: [
      [String.raw`Vertex of \(y=-(x-2)^2+5\)?`, String.raw`\((2,5)\).`],
      [String.raw`Zeros of \(y=(x+1)(x-4)\)?`, String.raw`\(-1\) and \(4\).`],
      [String.raw`\(3^{-2}=\)?`, String.raw`\(\tfrac19\).`],
    ],
    words: [
      ["Second differences", "constant for quadratics", ""],
      ["Vertex form", "\\(a(x-h)^2+k\\)", ""],
      ["Factored form", "\\(a(x-r)(x-s)\\)", ""],
      ["Standard form", "\\(ax^2+bx+c\\)", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["4.1 Differences", "constant second differences → quadratic; 2nd diff = 2a", "\\(3,5,9,15,23\\)", "equal x-steps only"],
    ["4.2 Features", "vertex, axis \\(x=-\\frac{b}{2a}\\), zeros, y-intercept", "\\(y=x^2-6x+5\\)", "the axis is a line"],
    ["4.3 Transformations", "\\(a\\) stretch/reflect, \\(h\\) right, \\(k\\) up", "\\(y=2(x-3)^2-4\\)", "\\((x+3)\\) is left"],
    ["4.4 Graphing", "vertex, then 1, 4, 9 × a", "\\(y=-2(x+1)^2+8\\)", "steps both sides"],
    ["4.5 Factored form", "zeros r, s; axis halfway", "\\(y=(x-2)(x-6)\\)", "\\((x+4)\\) gives \\(-4\\)"],
    ["4.6 Converting", "expand; complete the square; partial factoring", "\\(x^2+6x+2=(x+3)^2-7\\)", "add and subtract"],
    ["4.7 x² vs 2ˣ", "constant ratio vs constant 2nd differences; \\(b^0=1\\), \\(b^{-n}=\\frac1{b^n}\\)", "\\(2^{-3}=\\frac18\\)", "not negative"],
  ])),

  section("📌 Which form?", keyIdea(String.raw`<strong>Maximum or minimum, vertex, transformations?</strong> vertex form. <strong>Zeros, x-intercepts, when something hits the ground?</strong> factored form. <strong>Starting value, y-intercept?</strong> standard form. If you have the wrong form, convert: expand, factor, or complete the square.`)),

  practice([
    q("form", "A question asks for the maximum height of a ball. Which form gives it directly?", choice(["vertex form", "factored form", "standard form", "a table of values"], 0),
      "The maximum is the vertex.", ["Vertex form shows (h, k)."], "vertex form"),
    q("form", "A question asks when a ball hits the ground (height 0). Which form gives it directly?", choice(["factored form", "vertex form", "standard form", "none"], 0),
      "Height 0 means zeros.", ["Factored form shows the zeros."], "factored form"),
    q("form", String.raw`For \(y=3x^2-7x+4\), which feature can you read without any work?`, choice(["the y-intercept, 4", "the vertex", "the zeros", "the axis of symmetry"], 0),
      "Standard form shows c.", ["At x = 0, y = 4."], "the y-intercept"),
    q("classify", String.raw`A table has constant ratio \(3\) between consecutive \(y\)-values. The relation is…`, choice(["exponential", "quadratic", "linear", "impossible to tell"], 0),
      "Ratio, not difference.", ["Multiplying by 3 each step is exponential."], "exponential"),
    q("transform", String.raw`How is \(y=-\tfrac12(x+4)^2\) related to \(y=x^2\)?`, choice(["reflected, compressed by ½, left 4", "reflected, stretched by 2, right 4", "compressed by ½, left 4, up 4", "reflected, left 4, down ½"], 0),
      "a = −½, h = −4, k = 0.", ["Reflection, compression, translation left 4."], "reflected, compressed, left 4"),
  ]),

  examples([
    ["Every feature from standard form", String.raw`For \(y=x^2-2x-8\), find the zeros, vertex, \(y\)-intercept and range.`,
      [String.raw`<b>Factor to get factored form</b> \(y=a(x-r)(x-s)\). Two numbers that multiply to \(-8\) and add to \(-2\): \(-4\) and \(2\). So \(y=(x-4)(x+2)\).`,
        String.raw`<b>Zeros.</b> \(x-4=0\Rightarrow x=4\); \(x+2=0\Rightarrow x=-2\).`,
        String.raw`<b>Axis.</b> Halfway between the zeros: \(x=\frac{4+(-2)}{2}=1\).`,
        String.raw`<b>Vertex.</b> \(y=1^2-2(1)-8=1-2-8=-9\). Vertex \((1,-9)\); \(a=1>0\), so a minimum.`,
        String.raw`<b>\(y\)-intercept and range.</b> \(c=-8\). The lowest value is \(-9\): \(\{y\in\mathbb R\mid y\ge-9\}\).`,
        String.raw`<b>Check</b> the vertex in factored form: \((1-4)(1+2)=(-3)(3)=-9\) ✓.`],
      String.raw`zeros \(-2\), \(4\); vertex \((1,-9)\); \(y\)-intercept \(-8\); \(y\ge-9\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -10, ymax: 8 }, curves: [{ f: (x) => x * x - 2 * x - 8, color: "violet" }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "red" }, { x: 4, y: 0, label: "(4, 0)", color: "red" }, { x: 1, y: -9, label: "(1, −9)", color: "blue" }, { x: 0, y: -8, label: "(0, −8)", color: "green" }], step: { x: 1, y: 2 } })],
    ["Converting to answer a question", String.raw`A ball's height is \(h=-5t^2+30t+35\). Find the maximum height and when the ball lands.`,
      [String.raw`<b>Choose the forms.</b> The maximum is the vertex, so use <b>vertex form</b>. Landing is \(h=0\), a zero, so use <b>factored form</b>.`,
        String.raw`<b>Vertex form: factor \(-5\) from the \(t\)-terms.</b> \(h=-5(t^2-6t)+35\).`,
        String.raw`<b>Complete the square.</b> Half of \(-6\) is \(-3\), and \((-3)^2=9\): \(h=-5(t^2-6t+9-9)+35=-5(t-3)^2+45+35=-5(t-3)^2+80\).`,
        String.raw`<b>Read the maximum.</b> Vertex \((3,80)\): the maximum height is \(80\) m at \(3\) s.`,
        String.raw`<b>Factored form.</b> \(h=-5(t^2-6t-7)=-5(t-7)(t+1)\). Zeros \(t=7\) and \(t=-1\). Time cannot be negative, so the ball lands at \(t=7\) s.`,
        String.raw`<b>Check:</b> \(-5(7)^2+30(7)+35=-245+210+35=0\) ✓.`],
      String.raw`maximum \(80\) m at \(3\) s; lands at \(7\) s`,
      plane({ view: { xmin: -0.5, xmax: 8, ymin: -5, ymax: 90 }, curves: [{ f: (t) => -5 * t * t + 30 * t + 35, a: 0, b: 7, color: "violet" }], points: [{ x: 3, y: 80, label: "(3, 80)", color: "blue" }, { x: 7, y: 0, label: "(7, 0)", color: "red" }, { x: 0, y: 35, label: "(0, 35)", color: "green" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 1, y: 10 } })],
    ["Equation from a graph", String.raw`A parabola has vertex \((-2,6)\) and passes through \((0,-2)\). Find its equation in vertex and standard form.`,
      [String.raw`<b>Start from vertex form.</b> \[y=a(x-h)^2+k\] The vertex \((-2,6)\) gives \(h=-2\), \(k=6\): \(y=a(x+2)^2+6\).`,
        String.raw`<b>Substitute the point</b> \((0,-2)\): \(-2=a(0+2)^2+6=4a+6\).`,
        String.raw`<b>Solve:</b> subtract 6: \(-8=4a\); divide by 4: \(a=-2\). Vertex form \(y=-2(x+2)^2+6\).`,
        String.raw`<b>Expand to standard form.</b> \((x+2)^2=x^2+4x+4\), so \(y=-2(x^2+4x+4)+6=-2x^2-8x-8+6=-2x^2-8x-2\).`,
        String.raw`<b>Check:</b> at \(x=0\) both forms give \(-2\) ✓, and \(x=-\frac{b}{2a}=-\frac{-8}{2(-2)}=-2\) matches the vertex ✓.`],
      String.raw`\(y=-2(x+2)^2+6=-2x^2-8x-2\)`,
      plane({ view: { xmin: -5, xmax: 2, ymin: -4, ymax: 8 }, curves: [{ f: (x) => -2 * (x + 2) ** 2 + 6, color: "violet" }], points: [{ x: -2, y: 6, label: "(−2, 6)", color: "blue" }, { x: 0, y: -2, label: "(0, −2)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Missing table value and equation", String.raw`A quadratic table has \(x: 0,1,2,3\) and \(y: 5,4,7,14\). Find \(a\), \(b\), \(c\).`,
      [String.raw`<b>Facts.</b> For \(y=ax^2+bx+c\) with \(x\)-steps of 1: second difference \(=2a\), and \(c\) is the \(y\)-value at \(x=0\).`,
        String.raw`<b>Differences.</b> First: \(4-5=-1\), \(7-4=3\), \(14-7=7\). Second: \(3-(-1)=4\), \(7-3=4\).`,
        String.raw`<b>\(a\):</b> \(2a=4\), so \(a=2\). <b>\(c\):</b> \(y=5\) at \(x=0\), so \(c=5\).`,
        String.raw`<b>\(b\):</b> substitute \((1,4)\) into \(y=2x^2+bx+5\): \(4=2+b+5\), so \(b=-3\).`,
        String.raw`<b>Check</b> at \(x=3\): \(2(9)-3(3)+5=18-9+5=14\) ✓.`],
      String.raw`\(y=2x^2-3x+5\)`],
    ["Exponents", String.raw`Evaluate \(\dfrac{3^2\times3^{-4}}{3^{-1}}\).`,
      [String.raw`<b>Rules.</b> \[b^m\times b^n=b^{m+n},\qquad\frac{b^m}{b^n}=b^{m-n},\qquad b^{-n}=\frac1{b^n}\]`,
        String.raw`<b>Numerator (product law):</b> \(3^{2+(-4)}=3^{-2}\).`,
        String.raw`<b>Divide (quotient law):</b> \(\frac{3^{-2}}{3^{-1}}=3^{-2-(-1)}=3^{-1}\).`,
        String.raw`<b>Negative exponent:</b> \(3^{-1}=\frac13\).`,
        String.raw`<b>Check with numbers:</b> \(3^2\times3^{-4}=9\times\frac{1}{81}=\frac19\), and \(\frac19\div\frac13=\frac19\times3=\frac13\) ✓.`],
      String.raw`\(\tfrac13\)`],
  ]),

  section("📌 Mixed review", String.raw`<p>Each question uses one lesson's skill — decide which first.</p>`),

  practice([
    q("differences", String.raw`What is the second difference of \(y=5x^2-x+2\) for \(x=0,1,2,\ldots\)?`, num(10),
      "2a.", [String.raw`\(2(5)=10\).`], String.raw`\(10\)`),
    q("vertex", String.raw`Find the \(y\)-coordinate of the vertex of \(y=x^2+6x+1\).`, num(-8),
      "Axis x = −3.", [String.raw`\(9-18+1=-8\).`], String.raw`\(-8\)`),
    q("zeros", String.raw`Find the larger zero of \(y=(x-3)^2-16\).`, num(7),
      "Isolate the square.", [String.raw`\(x-3=\pm4\).`], String.raw`\(7\)`),
    q("factored form", String.raw`Find the \(y\)-coordinate of the vertex of \(y=-(x+2)(x-4)\).`, num(9),
      "Axis halfway between −2 and 4.", [String.raw`Axis \(x=1\); \(-(3)(-3)=9\).`], String.raw`\(9\)`),
    q("exponents", String.raw`Evaluate \(4^{-1}+4^0\) as a decimal.`, num(1.25),
      "Evaluate each power.", [String.raw`\(0.25+1\).`], String.raw`\(1.25\)`),
  ]),

  section("📌 Am I ready for the test?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["4.1", "I can use first and second differences and fit a curve to data."],
      ["4.2", "I can find the vertex, axis, zeros, y-intercept, maximum or minimum, domain and range."],
      ["4.3", "I can describe transformations and write vertex form from a description or a point."],
      ["4.4", "I can graph from vertex form and find zeros by isolating the square."],
      ["4.5", "I can use factored form to find zeros, axis and vertex, and write equations from zeros."],
      ["4.6", "I can expand, complete the square and use partial factoring."],
      ["4.7", "I can compare y = x² and y = 2ˣ and evaluate zero and negative exponents."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("parabolaFeatures", { init: [-1, 4, 5] }),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed review without notes. For each mistake, return to that lesson's explorer and practice set, then try the Level 3 worksheet problems for your two weakest lessons."],
      ["What are the most common mistakes?", "Sign of h in vertex form, forgetting ± when taking square roots, subtracting the wrong amount when completing the square, and thinking a negative exponent makes a negative number."],
      ["How do I check a vertex?", "Compute it two ways: −b/(2a) from standard form, and from vertex or factored form. Both must agree."],
      ["How much work should I show?", "Write the form you are using, each conversion step, and a final sentence for word problems."],
      ["How does this chapter lead into Chapter 5?", "Chapter 5 solves quadratic equations ax² + bx + c = 0 — finding the zeros you have been reading from graphs and factored forms."],
    ],
    summary: [
      "Constant second differences → quadratic.",
      "Three forms: standard (c), vertex (h, k), factored (r, s).",
      "Convert by expanding, factoring or completing the square.",
      "y = 2ˣ: constant ratio; b⁰ = 1, b⁻ⁿ = 1/bⁿ.",
    ],
    next: "Write the Chapter 4 test. Chapter 5 turns to quadratic equations.",
  }),
];
