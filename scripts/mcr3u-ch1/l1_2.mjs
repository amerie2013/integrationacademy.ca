// MCR3U 1.2 — Function Notation: evaluating, substituting expressions, solving f(x) = v, reading graphs, contexts
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
const S = String.raw;

export const TITLE = "1.2 Function Notation";
export const ID = "5c3e0001-0001-4001-8001-000000000102";

export const blocks = () => [
  intro({
    icon: "🏷️",
    title: "Function Notation",
    overview: String.raw`Writing \(f(x)\) instead of \(y\) names the function and shows the input. \(f(3)\) means "the output when the input is 3". In this lesson you will evaluate functions at numbers and at expressions, solve \(f(x)=v\) for the input, read values from a graph, and use function notation to answer questions about real situations.`,
    goals: [
      "read and write function notation;",
      "evaluate f(a) for numbers and for expressions such as f(a + 1);",
      "solve f(x) = v algebraically and from a graph;",
      "combine values such as f(4) − f(1);",
      "interpret function notation in a context.",
    ],
    curriculum: "A1.2 (represent linear and quadratic functions using function notation, given their equations, tables of values, or graphs, and substitute into and evaluate functions)",
    prior: [
      [String.raw`Evaluate \(2x^2-x\) when \(x=-3\).`, String.raw`\(2(9)+3=21\).`],
      [String.raw`Expand \((a+2)^2\).`, String.raw`\(a^2+4a+4\).`],
      [String.raw`Solve \(x^2-x-6=0\).`, String.raw`\((x-3)(x+2)=0\): \(x=3\) or \(x=-2\).`],
    ],
    words: [
      ["Function notation", "\\(f(x)\\) — the output of \\(f\\) at input \\(x\\)", "\\(f(x)=x^2+1\\)"],
      ["Evaluate", "replace x by a value and simplify", "\\(f(2)=5\\)"],
      ["Argument", "whatever is inside the brackets", "in \\(f(a+1)\\) it is \\(a+1\\)"],
      ["Solve f(x) = v", "find every input whose output is v", "\\(x^2+1=10\\Rightarrow x=\\pm3\\)"],
    ],
  }),

  section("📌 Reading the notation", String.raw`
  <p>\(f(x)=x^2-4x+1\) is read "\(f\) of \(x\) equals …". The letter \(f\) is the name; \(x\) is the input. The brackets do <strong>not</strong> mean multiplication.</p>
  ${table(["You see", "It means", "Example with f(x) = x² − 4x + 1"], [
    ["\\(f(5)\\)", "output when the input is 5", "\\(25-20+1=6\\)"],
    ["\\(f(5)=6\\)", "the point \\((5,6)\\) is on the graph", ""],
    ["\\(f(x)=6\\)", "which inputs give 6?", "\\(x^2-4x-5=0\\Rightarrow x=5\\text{ or }x=-1\\)"],
    ["\\(f(2a)\\)", "replace every x by \\(2a\\)", "\\(4a^2-8a+1\\)"],
  ])}
  ${keyIdea(String.raw`\(f(\text{input})=\text{output}\). <em>Evaluating</em> goes from input to output; <em>solving</em> goes from output back to input, and may give several inputs (or none).`)}`),

  section("📌 Explore", String.raw`<p>Move the input slider to evaluate \(f\) at a number; move the target slider to solve \(f(x)=v\). Watch how one input always gives one output, but one output may come from two inputs.</p>`),

  widget("notationLab", { init: [1, -2, -3] }),

  section("📌 Substituting an expression", String.raw`
  <p>When the input is an expression, put it in brackets <em>everywhere</em> \(x\) appears, then simplify.</p>
  <p>\(g(x)=3x^2-x\): \(\ g(a-2)=3(a-2)^2-(a-2)=3(a^2-4a+4)-a+2=3a^2-13a+14\).</p>
  ${watchOut([
    "f(a + 1) is not f(a) + 1. Substitute the whole expression.",
    "Square the bracket: f(−3) for x² means (−3)² = 9, not −9.",
    "f(x) = 0 asks for the zeros (x-intercepts); f(0) is the y-intercept.",
    "2f(x) doubles the output; f(2x) doubles the input — different things.",
  ])}`),

  examples([
    ["Evaluating", S`For \(f(x)=3x^2-2x+5\), find \(f(-2)\) and \(f(0)\).`,
      [S`<b>Meaning.</b> \(f(-2)\) means "replace every \(x\) in the rule by \(-2\)". Use brackets, so that the sign is squared along with the number.`,
        S`<b>Substitute</b> \(x=-2\): \(f(-2)=3(-2)^2-2(-2)+5\).`,
        S`<b>Powers first.</b> \((-2)^2=4\), so the first term is \(3\times4=12\). The second term is \(-2(-2)=+4\).`,
        S`<b>Add.</b> \(f(-2)=12+4+5=21\).`,
        S`<b>Substitute</b> \(x=0\): \(f(0)=3(0)^2-2(0)+5=5\). Only the constant survives, and it is always the y-intercept.`,
        S`<b>Check on the graph.</b> The parabola passes through \((-2,21)\) and \((0,5)\) ✓`],
      S`\(f(-2)=21\), \(f(0)=5\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 26 }, curves: [{ f: (x) => 3 * x * x - 2 * x + 5, color: "violet" }], points: [{ x: -2, y: 21, label: "(−2, 21)", color: "amber" }, { x: 0, y: 5, label: "(0, 5)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Substituting expressions", S`For \(g(x)=2x-7\), find \(g(a+3)\) and \(g(3x)\).`,
      [S`<b>Meaning.</b> The rule says "double the input, then subtract 7". The input can be a whole expression, so we put it in brackets.`,
        S`<b>First input.</b> \(g(a+3)=2(a+3)-7\).`,
        S`<b>Simplify.</b> Expand: \(2a+6-7\). Collect: \(2a-1\).`,
        S`<b>Second input.</b> \(g(3x)=2(3x)-7=6x-7\). This is not \(3g(x)\), which would be \(6x-21\).`,
        S`<b>Check with numbers.</b> Take \(a=1\): \(g(4)=8-7=1\), and \(2a-1=1\) ✓. Take \(x=2\): \(g(6)=12-7=5\), and \(6x-7=5\) ✓. Both points lie on the graph of \(g\).`],
      S`\(g(a+3)=2a-1\), \(g(3x)=6x-7\)`,
      plane({ view: { xmin: -1, xmax: 8, ymin: -8, ymax: 8 }, lines: [{ m: 2, b: -7, color: "violet" }], points: [{ x: 4, y: 1, label: "(4, 1)", color: "amber" }, { x: 6, y: 5, label: "(6, 5)", color: "amber" }], step: { x: 1, y: 2 } }, "y = g(x) = 2x − 7")],
    ["Solving f(x) = v", S`For \(f(x)=x^2-4x\), solve \(f(x)=12\).`,
      [S`<b>Meaning.</b> Here the output is given, and we want the inputs that produce it. On a graph, these are the x-values where the curve is at height 12.`,
        S`<b>Set up.</b> \(x^2-4x=12\). A quadratic needs one side equal to 0: \(x^2-4x-12=0\).`,
        S`<b>Factor.</b> We need two numbers with product \(-12\) and sum \(-4\): these are \(-6\) and \(2\). So \((x-6)(x+2)=0\).`,
        S`<b>Zero product.</b> \(x-6=0\) gives \(x=6\), and \(x+2=0\) gives \(x=-2\).`,
        S`<b>Check.</b> \(f(6)=36-24=12\) ✓ and \(f(-2)=4+8=12\) ✓. The dashed line \(y=12\) meets the parabola at exactly these two points.`],
      S`\(x=6\) or \(x=-2\)`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -6, ymax: 14 }, curves: [{ f: (x) => x * x - 4 * x }], lines: [{ m: 0, b: 12, color: "amber", dash: true }], points: [{ x: -2, y: 12, label: "(−2, 12)" }, { x: 6, y: 12, label: "(6, 12)" }], step: { x: 1, y: 2 } })],
    ["Reading a graph", S`The graph shows \(y=f(x)\). Find \(f(3)\) and solve \(f(x)=3\).`,
      [S`<b>Two different questions.</b> \(f(3)\) gives the input and asks for the output. \(f(x)=3\) gives the output and asks for the inputs.`,
        S`<b>Find \(f(3)\).</b> Go to \(x=3\) on the x-axis and move vertically to the curve. The curve is on the axis there, at \((3,0)\), so \(f(3)=0\).`,
        S`<b>Solve \(f(x)=3\).</b> Draw the horizontal line at height 3 (dashed). It meets the curve at \((0,3)\) and \((2,3)\), so \(x=0\) or \(x=2\).`,
        S`<b>Why two answers?</b> The curve rises and then falls, so most heights below the top are reached twice. This is fine for a function: two inputs may share one output.`,
        S`<b>Check with the rule.</b> The curve is \(f(x)=-(x-1)^2+4\). Then \(f(3)=-4+4=0\) ✓, \(f(0)=-1+4=3\) ✓, \(f(2)=-1+4=3\) ✓`],
      S`\(f(3)=0\); \(f(x)=3\) at \(x=0\) or \(x=2\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 5 }, curves: [{ f: (x) => -((x - 1) ** 2) + 4 }], lines: [{ m: 0, b: 3, color: "amber", dash: true }], points: [{ x: 3, y: 0, label: "(3, 0)" }, { x: 0, y: 3, label: "(0, 3)" }, { x: 2, y: 3, label: "(2, 3)" }], step: { x: 1, y: 1 } })],
    ["In context", S`A phone plan costs \(C(m)=25+0.1m\) dollars for \(m\) minutes. Find and explain \(C(150)\). For how many minutes is the bill 52 dollars?`,
      [S`<b>Read the rule.</b> 25 is the fixed monthly fee, and each minute adds 0.10 dollars. The input is minutes and the output is dollars.`,
        S`<b>Evaluate.</b> \(C(150)=25+0.1(150)=25+15=40\). In words: 150 minutes cost 40 dollars.`,
        S`<b>Reverse question.</b> A bill of 52 means \(C(m)=52\): \(25+0.1m=52\).`,
        S`<b>Solve.</b> Subtract 25: \(0.1m=27\). Divide by 0.1: \(m=270\).`,
        S`<b>Check.</b> \(C(270)=25+27=52\) ✓. The graph is a line starting at \((0,25)\), which is the fee with no minutes used, and it passes through both answer points.`],
      S`\(C(150)=40\) dollars; the bill is 52 dollars for 270 minutes`,
      plane({ view: { xmin: 0, xmax: 320, ymin: 0, ymax: 70 }, lines: [{ m: 0.1, b: 25, color: "violet" }], points: [{ x: 0, y: 25, label: "(0, 25)" }, { x: 150, y: 40, label: "(150, 40)", color: "amber" }, { x: 270, y: 52, label: "(270, 52)", color: "amber" }], step: { x: 40, y: 10 }, xlabel: "m (min)", ylabel: "C" })],
  ]),

  practice([
    q("evaluate", String.raw`For \(f(x)=-2x^2+3x-1\), find \(f(-1)\).`, num(-6),
      "Square first: (−1)² = 1.", [String.raw`\(-2(1)+3(-1)-1=-2-3-1\).`], String.raw`\(-6\)`),
    q("substitute", String.raw`For \(h(x)=5-3x\), find \(h(2a)\).`, expr("5-6*a"),
      "Replace x by 2a.", [String.raw`\(5-3(2a)\).`], String.raw`\(h(2a)=5-6a\)`),
    q("solve", String.raw`For \(f(x)=x^2+2x\), solve \(f(x)=15\). Enter the positive solution.`, num(3),
      "Move 15 across and factor.", [String.raw`\(x^2+2x-15=0\Rightarrow(x+5)(x-3)=0\).`], String.raw`\(3\)`),
    q("combine", String.raw`For \(p(n)=n^2-n\), find \(p(4)-p(2)\).`, num(10),
      "Evaluate each value first.", [String.raw`\(p(4)=12\), \(p(2)=2\).`], String.raw`\(10\)`),
    q("context", String.raw`A rental costs \(R(d)=40+0.25d\) dollars for \(d\) km. Solve \(R(d)=95\).`, num(220),
      "Subtract 40, then divide.", [String.raw`\(0.25d=55\).`], String.raw`\(220\)`),
  ]),

  ...hard([
    ["A difference of outputs", String.raw`For \(f(x)=x^2-3x\), simplify \(f(x+2)-f(x)\). What does it tell you about the outputs?`,
      [String.raw`\(f(x+2)=(x+2)^2-3(x+2)=x^2+4x+4-3x-6=x^2+x-2\).`, String.raw`\(f(x+2)-f(x)=x^2+x-2-(x^2-3x)=4x-2\).`, String.raw`The change over 2 units of input is not constant — it grows with \(x\), as expected for a quadratic.`],
      String.raw`\(f(x+2)-f(x)=4x-2\)`],
    ["Finding a function from two values", String.raw`A linear function \(f(x)=ax+b\) has \(f(2)=7\) and \(f(-1)=-8\). Find \(f\), then find \(f(f(1))\).`,
      [String.raw`\(2a+b=7\) and \(-a+b=-8\). Subtract: \(3a=15\), so \(a=5\) and \(b=-3\).`, String.raw`\(f(1)=5-3=2\), so \(f(f(1))=f(2)=7\).`],
      String.raw`\(f(x)=5x-3\); \(f(f(1))=7\)`],
  ], [
    q("hard", String.raw`For \(g(x)=2x^2-x\), simplify \(g(x+1)-g(x)\).`, expr("4*x+1"),
      "Expand g(x + 1) carefully first.", [String.raw`\(g(x+1)=2x^2+4x+2-x-1=2x^2+3x+1\).`, String.raw`Subtract \(2x^2-x\).`], String.raw`\(4x+1\)`),
    q("hard", String.raw`\(f(x)=ax+b\) with \(f(1)=4\) and \(f(3)=14\). Find \(f(-2)\).`, num(-11),
      "Find a and b first.", [String.raw`\(2a=10\Rightarrow a=5\), \(b=-1\).`, String.raw`\(f(-2)=-10-1\).`], String.raw`\(-11\)`),
    q("hard", String.raw`For \(f(x)=x^2-6x+11\), what is the smallest possible value of \(f(x)\)?`, num(2),
      "Complete the square.", [String.raw`\(f(x)=(x-3)^2+2\); the square is never negative.`], String.raw`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why not just write y?", "f(x) names the function and the input at the same time, so f(2) and g(2) can be compared in one line."],
      ["Is f(x) = 0 the same as f(0)?", "No. f(0) is an output (the y-intercept); f(x) = 0 asks for inputs (the x-intercepts)."],
      ["Can f(x) = 7 have no solution?", "Yes — if 7 is not in the range. For f(x) = x² + 9, no input gives 7."],
      ["What does f(a + h) mean?", "Replace x by the whole expression a + h. It is used to measure change between two inputs."],
      ["Do I have to call it f?", "No. Any letter works: C(m) for cost, h(t) for height. Choose letters that remind you of the context."],
    ],
    summary: [
      "f(a) = the output at input a; the point (a, f(a)) is on the graph.",
      "Substitute expressions in brackets, then simplify.",
      "Solve f(x) = v by setting the formula equal to v.",
      "Read f(a) vertically from a graph; solve f(x) = v horizontally.",
    ],
    next: "1.3 meets the five parent functions that the rest of the chapter transforms.",
  }),
];
