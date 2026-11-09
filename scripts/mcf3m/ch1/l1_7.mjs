// MCF3M 1.7 — Chapter 1 Review: functions, notation, domain/range, differences, transformations, vertex form.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, roots, hard, plane } from "../lib.mjs";
const S = String.raw;

export const TITLE = "1.7 Chapter 1 Review";

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 1 Review",
    overview: S`This review pulls the chapter together. A function gives one output per input; function notation names it and evaluates it; domain and range describe its inputs and outputs; finite differences recognise a quadratic in a table; and vertex form \(y=a(x-h)^2+k\) shows how the parabola is a transformed \(y=x^2\). The examples mix several of these ideas in one question, as a chapter test will.`,
    goals: [
      "decide whether a relation is a function in any representation;",
      "evaluate and solve with function notation, including in context;",
      "state domains and ranges, with restrictions from a context;",
      "classify relations with finite differences and find \\(a\\);",
      "graph \\(y=a(x-h)^2+k\\) and find its equation from features.",
    ],
    curriculum: "A2.1–A2.6, A1.1, A3.2 (chapter 1 review)",
    prior: [
      [S`Is \(x=y^2\) a function?`, S`No: \(x=4\) gives \(y=\pm2\).`],
      [S`Range of \(y=-(x-1)^2+3\)?`, S`\(\{y\in\mathbb{R}\mid y\le3\}\).`],
      [S`Second difference of \(y=5x^2-x\) (step 1)?`, S`\(2a=10\).`],
    ],
    words: [
      ["Function", "exactly one output per input", "vertical-line test"],
      ["f(a) = b", "the point (a, b) is on the graph", "\\(f(2)=5\\)"],
      ["Domain / range", "inputs / outputs", "\\(D=\\mathbb{R},\\ R:y\\ge k\\)"],
      ["Second difference", "2a for x-steps of 1", "constant ⇒ quadratic"],
      ["Vertex form", "\\(a(x-h)^2+k\\), mapping \\((x,y)\\to(x+h,ay+k)\\)", "vertex \\((h,k)\\)"],
    ],
  }),

  section("📌 Chapter summary", S`
  ${table(["Lesson", "Big idea", "Quick test"], [
    ["1.1 Relations and functions", "one output for each input", "repeated x with different y? vertical line meets twice?"],
    ["1.2 Function notation", "f(a) is the output at a; solve f(x) = k for inputs", "bracket negatives; quadratics may give two inputs"],
    ["1.3 Domain and range", "D = inputs, R = outputs; context restricts both", "vertex gives the boundary of R"],
    ["1.4 Linear vs quadratic", "constant 1st differences ⇒ linear; constant 2nd ⇒ quadratic", "2nd difference = 2a (step 1)"],
    ["1.5 Transformations", "a stretches/reflects, h shifts sideways, k shifts up/down", "(x − h): opposite sign"],
    ["1.6 Vertex form", "(x, y) → (x + h, ay + k); vertex + point ⇒ equation", "step pattern a, 3a, 5a"],
  ])}
  ${keyIdea(S`A parabola has three descriptions that must agree: its <b>table</b> (second differences \(2a\)), its <b>graph</b> (vertex, direction, width) and its <b>equation</b> \(a(x-h)^2+k\). Checking one against another catches most errors.`)}`),

  widget("funcTransform", { parent: "x2", parents: ["x2"], show: ["a", "d", "c"], init: { a: -1, k: 1, d: 2, c: 4 } }),

  examples([
    ["Function test and range together", S`For the relation \(y=-2(x-1)^2+8\): (a) explain why it is a function; (b) state its domain and range; (c) find the inputs with output \(0\).`,
      [S`<b>(a)</b> For each \(x\), the expression gives one value, so every vertical line meets the parabola once: a function.`,
        S`<b>(b)</b> Domain \(\{x\in\mathbb{R}\}\). Since \(a=-2<0\), the vertex \((1,\,8)\) is a maximum: range \(\{y\in\mathbb{R}\mid y\le8\}\).`,
        S`<b>(c)</b> \(-2(x-1)^2+8=0\Rightarrow(x-1)^2=4\Rightarrow x-1=\pm2\Rightarrow x=3\) or \(x=-1\).`,
        S`<b>Check.</b> \(-2(3-1)^2+8=-8+8=0\) ✓ and \(-2(-2)^2+8=0\) ✓. The intercepts are symmetric about \(x=1\) ✓`],
      S`(a) one output per x; (b) D = ℝ, R: y ≤ 8; (c) x = 3, x = −1`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 10 }, curves: [{ f: (x) => -2 * (x - 1) ** 2 + 8, color: "violet" }], points: [{ x: 1, y: 8, label: "(1, 8)", color: "amber" }, { x: 3, y: 0, label: "(3, 0)", color: "blue" }, { x: -1, y: 0, label: "(−1, 0)", color: "blue" }], step: { x: 1, y: 1 } })],

    ["Notation with a transformation", S`\(f(x)=x^2\) and \(g(x)=f(x+3)-5\). Write \(g\) in vertex form, find \(g(-1)\), and solve \(g(x)=11\).`,
      [S`<b>Translate the notation.</b> \(f(x+3)=(x+3)^2\), so \(g(x)=(x+3)^2-5\): \(f\) moved \(3\) left and \(5\) down, vertex \((-3,\,-5)\).`,
        S`<b>Evaluate.</b> \(g(-1)=(-1+3)^2-5=4-5=-1\).`,
        S`<b>Solve.</b> \((x+3)^2-5=11\Rightarrow(x+3)^2=16\Rightarrow x+3=\pm4\Rightarrow x=1\) or \(x=-7\).`,
        S`<b>Check.</b> \(g(1)=16-5=11\) ✓, \(g(-7)=16-5=11\) ✓`],
      S`\(g(x)=(x+3)^2-5\); \(g(-1)=-1\); \(x=1\) or \(x=-7\)`,
      plane({ view: { xmin: -9, xmax: 3, ymin: -6, ymax: 13 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => (x + 3) ** 2 - 5, color: "violet" }], lines: [{ m: 0, b: 11, color: "green", dash: true }], points: [{ x: -3, y: -5, label: "(−3, −5)", color: "amber" }, { x: 1, y: 11, label: "(1, 11)", color: "green" }, { x: -7, y: 11, label: "(−7, 11)", color: "green" }, { x: -1, y: -1, label: "(−1, −1)", color: "blue" }], step: { x: 1, y: 2 } })],

    ["From a table to vertex form", S`A quadratic has the values below. Use differences to find \(a\), use symmetry to find the vertex, and write the equation.<br>\(x:\ 0,\,1,\,2,\,3,\,4,\,5\) &nbsp; \(y:\ 7,\,1,\,-1,\,1,\,7,\,17\)`,
      [S`<b>Differences.</b> First: \(-6,\,-2,\,2,\,6,\,10\). Second: \(4,\,4,\,4,\,4\). So \(2a=4\Rightarrow a=2\).`,
        S`<b>Vertex by symmetry.</b> \(y=1\) at \(x=1\) and \(x=3\), so the axis is \(x=2\) and the vertex is \((2,\,-1)\).`,
        S`<b>Equation.</b> \(y=2(x-2)^2-1\).`,
        S`<b>Check.</b> \(x=5\): \(2(9)-1=17\) ✓; \(x=0\): \(2(4)-1=7\) ✓`],
      S`\(y=2(x-2)^2-1\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -2, ymax: 18 }, curves: [{ f: (x) => 2 * (x - 2) ** 2 - 1, color: "violet" }], points: [{ x: 2, y: -1, label: "(2, −1)", color: "amber" }, { x: 0, y: 7, label: "(0, 7)", color: "blue" }, { x: 5, y: 17, label: "(5, 17)", color: "blue" }], step: { x: 1, y: 2 } })],

    ["Equation from a graph", S`A parabola has \(x\)-intercepts \(-1\) and \(5\) and passes through \((1,\,-8)\). Find its equation in vertex form and its range.`,
      [S`<b>Axis.</b> Midway between the intercepts: \(x=\frac{-1+5}{2}=2\). So \(h=2\).`,
        S`<b>Set up.</b> \(y=a(x-2)^2+k\). Use \((5,\,0)\): \(0=9a+k\). Use \((1,\,-8)\): \(-8=a+k\).`,
        S`<b>Solve.</b> Subtract: \(0-(-8)=9a-a\Rightarrow8=8a\Rightarrow a=1\), then \(k=-9\).`,
        S`<b>Equation and range.</b> \(y=(x-2)^2-9\); opens up with minimum \(-9\): \(R=\{y\in\mathbb{R}\mid y\ge-9\}\).`,
        S`<b>Check.</b> \((-1-2)^2-9=0\) ✓ and \((1-2)^2-9=-8\) ✓`],
      S`\(y=(x-2)^2-9\); range \(y\ge-9\)`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -10, ymax: 8 }, curves: [{ f: (x) => (x - 2) ** 2 - 9, color: "violet" }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "blue" }, { x: 5, y: 0, label: "(5, 0)", color: "blue" }, { x: 1, y: -8, label: "(1, −8)", color: "blue" }, { x: 2, y: -9, label: "(2, −9)", color: "amber" }], step: { x: 1, y: 2 } })],

    ["A model with restrictions", S`A diver's height above the water is \(H(t)=-5(t-0.5)^2+11.25\) metres, \(t\) seconds after leaving the board. (a) How high is the board? (b) When does the diver enter the water? (c) State the domain and range.`,
      [S`<b>(a)</b> At \(t=0\): \(H(0)=-5(0.25)+11.25=-1.25+11.25=10\) m.`,
        S`<b>(b)</b> \(H(t)=0\Rightarrow(t-0.5)^2=2.25\Rightarrow t-0.5=\pm1.5\Rightarrow t=2\) (the root \(t=-1\) is before the dive, so rejected).`,
        S`<b>(c)</b> Domain \(\{t\in\mathbb{R}\mid 0\le t\le2\}\). The maximum \(11.25\) m occurs at \(t=0.5\) (inside the domain), and the lowest height is \(0\) at entry: range \(\{H\in\mathbb{R}\mid 0\le H\le11.25\}\).`,
        S`<b>Check.</b> \(H(2)=-5(2.25)+11.25=0\) ✓`],
      S`(a) 10 m; (b) t = 2 s; (c) D: 0 ≤ t ≤ 2, R: 0 ≤ H ≤ 11.25`,
      plane({ view: { xmin: -0.3, xmax: 2.5, ymin: -1, ymax: 13 }, curves: [{ f: (t) => -5 * (t - 0.5) ** 2 + 11.25, a: 0, b: 2, color: "violet" }], points: [{ x: 0, y: 10, label: "(0, 10)", color: "blue" }, { x: 0.5, y: 11.25, label: "(0.5, 11.25)", color: "amber" }, { x: 2, y: 0, label: "(2, 0)", color: "blue" }], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "H (m)" })],
  ]),

  practice([
    q("function", S`Which relation is a function?`, choice(["{(1, 2), (1, 3)}", "x² + y² = 4", "y = 2(x + 1)² − 3", "x = 7"], 2), "Vertical-line test.", [S`A parabola opening up or down passes the test.`], S`\(y=2(x+1)^2-3\)`),
    q("notation", S`\(f(x)=-x^2+4x\). Find \(f(-3)\).`, num(-21), "Bracket the −3.", [S`\(-9-12=-21\).`], S`\(-21\)`),
    q("range", S`Enter the maximum value of \(y=-\tfrac12(x+4)^2+6\).`, num(6), "a < 0: the vertex is a maximum.", [S`\(k=6\).`], S`\(6\)`),
    q("differences", S`A quadratic table with step 1 has second difference \(10\). Enter \(a\).`, num(5), "2a = 10.", [S`\(a=5\).`], S`\(5\)`),
    q("solve", S`Solve \(3(x-1)^2-12=0\).`, roots(3, -1), "(x − 1)² = 4.", [S`\(x-1=\pm2\).`], S`\(x=3,\ -1\)`),
  ]),

  ...hard([
    ["Two parabolas, one point", S`\(f(x)=(x-1)^2+2\) and \(g(x)=-(x-3)^2+k\). Find \(k\) so that the graphs touch at exactly the point where \(x=2\), and confirm there is no other common point.`,
      [S`<b>Touch at \(x=2\):</b> \(f(2)=1+2=3\), so \(g(2)=-1+k=3\Rightarrow k=4\).`,
        S`<b>Other common points:</b> \((x-1)^2+2=-(x-3)^2+4\Rightarrow x^2-2x+3=-x^2+6x-5\Rightarrow2x^2-8x+8=0\Rightarrow(x-2)^2=0\).`,
        S`<b>Only \(x=2\):</b> a double root, so the graphs touch at \((2,\,3)\) and nowhere else.`],
      S`k = 4; the only common point is (2, 3)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -2, ymax: 8 }, curves: [{ f: (x) => (x - 1) ** 2 + 2, color: "violet" }, { f: (x) => -((x - 3) ** 2) + 4, color: "blue" }], points: [{ x: 2, y: 3, label: "(2, 3)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["A restricted range", S`\(p(x)=2(x-3)^2-5\) is used only for \(1\le x\le6\). Find the range and explain which endpoint gives the largest value.`,
      [S`<b>Vertex inside:</b> \(x=3\) is in \([1,\,6]\), so the minimum is \(-5\).`,
        S`<b>Endpoints:</b> \(p(1)=2(4)-5=3\); \(p(6)=2(9)-5=13\).`,
        S`<b>Range:</b> \(-5\le y\le13\). The endpoint farther from the axis \(x=3\) (\(x=6\), distance 3) gives the larger value.`],
      S`−5 ≤ y ≤ 13; x = 6 is farther from the axis`],
  ], [
    q("hard", S`A parabola has vertex \((4,\,-2)\) and passes through \((6,\,6)\). Enter its \(y\)-intercept.`, num(30), "Find a first.", [S`\(6=4a-2\Rightarrow a=2\).`, S`\(y(0)=2(16)-2=30\).`], S`\(30\)`),
    q("hard", S`\(f(x)=x^2-2\). Solve \(f(x+1)=f(x)+9\).`, num(4), "Expand both sides.", [S`\((x+1)^2-2=x^2-2+9\Rightarrow2x+1=9\Rightarrow x=4\).`], S`\(4\)`),
    q("hard", S`At \(x=0,1,2,3\) a quadratic takes values \(5,\,2,\,1,\,2\). Enter the \(y\)-value of its vertex.`, num(1), "Use symmetry of the table.", [S`Values \(2\) at \(x=1\) and \(x=3\): axis \(x=2\), vertex \((2,\,1)\).`], S`\(1\)`),
    q("hard", S`\(f(x)=-2(x-3)^2+18\). Enter the positive \(x\)-intercept.`, num(6), "Solve f(x) = 0.", [S`\((x-3)^2=9\Rightarrow x=0\) or \(x=6\).`], S`\(6\)`),
    q("hard", S`A parabola has vertex \((1,\,-8)\) and passes through \((3,\,0)\). Enter its \(y\)-intercept.`, num(-6), "Find a first.", [S`\(4a-8=0\Rightarrow a=2\); \(y(0)=2(1)-8=-6\).`], S`\(-6\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the fastest function test?", "Look for one input with two outputs (repeated x, vertical line, ± when solving for y)."],
      ["How do I find the range of a parabola?", "Find the vertex y-value and the direction of opening (and check endpoints on a restricted domain)."],
      ["How do differences connect to the equation?", "Second difference = 2a (step 1), so the table gives the stretch factor."],
      ["What does the mapping rule do?", "(x, y) → (x + h, ay + k) takes every point of y = x² to the transformed graph."],
      ["How many points determine a parabola in vertex form?", "The vertex and one other point."],
    ],
    summary: [
      "Function: one output per input.",
      "f(a), f(x) = k, and their meaning in context.",
      "Domain/range from graphs, equations and contexts.",
      "Vertex form, mapping rule and equation from features.",
    ],
    next: "Chapter 2 develops the algebra of quadratic expressions: expanding and factoring.",
  }),
];
