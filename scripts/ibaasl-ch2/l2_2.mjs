// IB AA SL 2.2 — Function Notation: evaluating f(a), substituting expressions, solving f(x) = k, reading graphs, models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane } from "./lib.mjs";
import { fig } from "../ibaasl-ch1/figs.mjs";
import { mapDoc } from "../mcr3u-ch1/bank/fig.mjs";

export const TITLE = "2.2 Function Notation";
export const ID = "1baa0002-0001-4001-8001-000000000202";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🏷️",
    title: "Function Notation",
    overview: S`Writing \(f(x)=3x^2-5\) instead of \(y=3x^2-5\) names the function and shows the input. \(f(2)\) then means "the output when the input is 2". In this lesson you will evaluate functions at numbers and at expressions, read values from graphs, solve equations such as \(f(x)=k\), and interpret function notation in models.`,
    goals: [
      "read and use the notation \\(f(x)\\), \\(f:x\\mapsto\\dots\\);",
      "evaluate \\(f(a)\\) for numbers and for expressions such as \\(f(a-2)\\) or \\(f(2x)\\);",
      "read \\(f(a)\\) and solve \\(f(x)=k\\) from a graph;",
      "solve \\(f(x)=k\\) algebraically;",
      "interpret function notation in a real context.",
    ],
    curriculum: "SL 2.2 (function notation, e.g. f(x), v(t), C(n); the concept of a function as a mathematical model)",
    prior: [
      [S`Evaluate \(3(2)^2-5\).`, S`\(7\).`],
      [S`Expand \((a-2)^2\).`, S`\(a^2-4a+4\).`],
      [S`Solve \(x^2-6=10\).`, S`\(x=\pm4\).`],
    ],
    words: [
      ["\\(f(x)\\)", "the output of the function \\(f\\) for input \\(x\\)", "\\(f(x)=2x+1\\)"],
      ["\\(f(a)\\)", "replace every \\(x\\) by \\(a\\)", "\\(f(3)=7\\)"],
      ["\\(f:x\\mapsto\\dots\\)", "another way to write a function", "\\(f:x\\mapsto2x+1\\)"],
      ["Solve \\(f(x)=k\\)", "find the inputs that give output \\(k\\)", "\\(2x+1=9\\Rightarrow x=4\\)"],
      ["Model notation", "letters chosen for meaning", "\\(h(t)\\): height at time \\(t\\)"],
    ],
  }),

  section("📌 Input in, output out", S`
  <p>Think of \(f\) as a machine: put \(x\) in, get \(f(x)\) out. For \(f(x)=3x^2-5\):</p>
  ${table(["input x", "−1", "0", "2", "a", "2t"], [["output f(x)", "−2", "−5", "7", S`\(3a^2-5\)`, S`\(12t^2-5\)`]])}
  ${fig(mapDoc([[-1, -2], [0, -5], [2, 7], [3, 22]]), "f(x) = 3x² − 5 as a mapping: each input has exactly one output")}
  <p>On a graph, \(f(a)\) is the height of the curve above \(x=a\); solving \(f(x)=k\) means finding where the horizontal line \(y=k\) meets the curve.</p>
  ${plane({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 2 * x - 3, color: "violet" }], lines: [{ m: 0, b: 0, color: "green", dash: true }], vlines: [{ x: 1, color: "blue", dash: true }], points: [P(1, -4, "f(1) = −4"), P(-1, 0, "(−1, 0)", "green"), P(3, 0, "(3, 0)", "green")] }, "y = f(x) = x² − 2x − 3: f(1) = −4, and f(x) = 0 at x = −1 and x = 3")}
  ${keyIdea(S`\(f(a)\) is a value (an output). \(f(x)=k\) is an equation to solve for the input. Do not confuse "find \(f(4)\)" with "find \(x\) when \(f(x)=4\)".`)}`),

  section("📌 Substituting expressions", S`
  <p>To find \(f(\text{something})\), replace every \(x\) by that something <strong>in brackets</strong>. For \(f(x)=x^2+4x\):</p>
  <p style="text-align:center">\(f(a-2)=(a-2)^2+4(a-2)=a^2-4a+4+4a-8=a^2-4\).</p>
  ${watchOut([
    "Use brackets when substituting: f(−3) for x² gives (−3)² = 9, not −9.",
    "f(2x) is not 2f(x): for f(x) = x², f(2x) = 4x² but 2f(x) = 2x².",
    "f(x + 1) is not f(x) + 1.",
    "f(x) = k can have several solutions — or none.",
  ])}`),

  section("📌 Explore", S`<p>Move the input \(a\) to read \(f(a)\) off the curve; move the output \(k\) to see every solution of \(f(x)=k\). Try a value of \(a\) outside the domain of \(\sqrt{x+4}\).</p>`),

  widget("fnNotation", { init: "quad" }),

  examples([
    ["Level 1 · Evaluating", S`For \(f(x)=3x^2-5\), find \(f(2)\), \(f(-1)\) and \(f(0)\).`,
      [S`\(f(2)=3(4)-5=7\).`, S`\(f(-1)=3(1)-5=-2\).`, S`\(f(0)=-5\).`],
      S`\(7, -2, -5\)`],
    ["Level 1 · Reading a graph", S`The graph shows \(y=f(x)\) where \(f(x)=x^2-2x-3\). Find \(f(-2)\) from the graph and solve \(f(x)=-3\).`,
      [S`Above \(x=-2\) the curve is at height 5: \(f(-2)=5\) (check: \(4+4-3=5\)).`, S`\(y=-3\) meets the curve at \(x=0\) and \(x=2\) (check: \(x^2-2x=0\)).`],
      S`\(f(-2)=5\); \(x=0\) or \(x=2\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 2 * x - 3, color: "violet" }], lines: [{ m: 0, b: -3, color: "green", dash: true }], points: [P(-2, 5, "(−2, 5)"), P(0, -3, "(0, −3)", "green"), P(2, -3, "(2, −3)", "green")] })],
    ["Level 2 · An expression as input", S`For \(f(x)=x^2+4x\), find and simplify \(f(a-2)\).`,
      [S`\(f(a-2)=(a-2)^2+4(a-2)\).`, S`\(=a^2-4a+4+4a-8=a^2-4\).`],
      S`\(a^2-4\)`],
    ["Level 2 · Solving f(x) = k", S`Solve (a) \(f(x)=9\) for \(f(x)=2x-7\); (b) \(g(x)=10\) for \(g(x)=x^2-6\).`,
      [S`(a) \(2x-7=9\Rightarrow x=8\).`, S`(b) \(x^2=16\Rightarrow x=\pm4\).`],
      S`(a) \(x=8\) (b) \(x=\pm4\)`],
    ["Level 3 · A model", S`A ball's height is \(h(t)=30t-5t^2\) metres after \(t\) seconds. Find \(h(2)\) and explain it, then solve \(h(t)=25\).`,
      [S`\(h(2)=60-20=40\): after 2 s the ball is 40 m high.`, S`\(30t-5t^2=25\Rightarrow t^2-6t+5=0\Rightarrow(t-1)(t-5)=0\).`, S`The ball is 25 m high at \(t=1\) s (going up) and \(t=5\) s (coming down).`],
      S`\(h(2)=40\); \(t=1\) or \(5\)`,
      plane({ view: { xmin: -0.5, xmax: 7, ymin: -5, ymax: 50 }, step: { x: 1, y: 5 }, curves: [{ f: (t) => 30 * t - 5 * t * t, a: 0, b: 6, color: "violet" }], lines: [{ m: 0, b: 25, color: "green", dash: true }], points: [P(2, 40, "(2, 40)"), P(1, 25, "(1, 25)", "green"), P(5, 25, "(5, 25)", "green")], xlabel: "t", ylabel: "h" })],
  ]),

  practice([
    q("Level 1 · evaluate", S`For \(f(x)=5-2x\), find \(f(4)\).`, num(-3),
      "Replace x by 4.", [S`\(5-8\).`], S`\(-3\)`),
    q("Level 1 · evaluate", S`For \(g(x)=x^3-x\), find \(g(-2)\).`, num(-6),
      "Bracket the −2.", [S`\(-8-(-2)\).`], S`\(-6\)`),
    q("Level 2 · solve", S`For \(f(x)=4x+1\), solve \(f(x)=-11\).`, num(-3),
      "4x + 1 = −11.", [S`\(4x=-12\).`], S`\(-3\)`),
    q("Level 2 · combine", S`For \(f(x)=x^2\), find \(f(3)-f(-1)\).`, num(8),
      "Evaluate each first.", [S`\(9-1\).`], S`\(8\)`),
    q("Level 2 · fraction", S`For \(f(x)=\dfrac{10}{x+1}\), find \(f(4)\).`, num(2),
      "10/(4 + 1).", [S`\(\frac{10}{5}\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Find the rule", S`\(f(x)=ax+b\), \(f(2)=7\) and \(f(5)=16\). Find \(a\) and \(b\), then solve \(f(x)=x\).`,
      [S`\(2a+b=7\) and \(5a+b=16\): subtracting, \(3a=9\), so \(a=3\) and \(b=1\).`, S`\(f(x)=x\Rightarrow3x+1=x\Rightarrow x=-0.5\).`, S`Geometrically: \(y=3x+1\) meets \(y=x\) at \((-0.5,-0.5)\).`],
      S`\(f(x)=3x+1\); \(x=-0.5\)`,
      plane({ view: { xmin: -3, xmax: 6, ymin: -3, ymax: 18 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => 3 * x + 1, color: "violet" }, { f: (x) => x, color: "gray" }], points: [P(2, 7, "(2, 7)"), P(5, 16, "(5, 16)"), P(-0.5, -0.5, "(−0.5, −0.5)", "red")] })],
    ["Equal outputs", S`For \(f(x)=x^2-3x\), solve \(f(x)=f(1)\), and show that \(f(3-x)=f(x)\) for every \(x\).`,
      [S`\(f(1)=-2\): \(x^2-3x+2=0\Rightarrow(x-1)(x-2)=0\), so \(x=1\) or \(2\).`, S`\(f(3-x)=(3-x)^2-3(3-x)=9-6x+x^2-9+3x=x^2-3x=f(x)\).`, S`So the graph is symmetric about \(x=1.5\), which is why 1 and 2 give the same output.`],
      S`\(x=1\) or \(2\); \(f(3-x)\equiv f(x)\)`],
  ], [
    q("Level 3 · unknown coefficient", S`\(f(x)=x^2+kx+1\) and \(f(2)=11\). Find \(k\).`, num(3),
      "Substitute x = 2.", [S`\(4+2k+1=11\).`], S`\(3\)`),
    q("Level 3 · ratio of outputs", S`For \(f(x)=2^x\), find \(f(5)\div f(2)\).`, num(8),
      "32 ÷ 4.", [S`\(2^5\div2^2=2^3\).`], S`\(8\)`),
    q("Level 3 · solve", S`For \(f(x)=\dfrac{x+3}{x-2}\), solve \(f(x)=2\).`, num(7),
      "Multiply both sides by (x − 2).", [S`\(x+3=2x-4\).`], S`\(7\)`),
  ]),

  wrapUp({
    qas: [
      ["Why use f(x) instead of y?", "It names the function (useful when there are several) and shows the input directly, e.g. f(3)."],
      ["Is f(x) multiplication?", "No — f(x) means 'f of x', the output for input x."],
      ["How do I find f(x + h)?", "Replace each x by (x + h) in brackets and expand."],
      ["What if f(x) = k has no solution?", "Then k is not in the range of f: the line y = k misses the graph."],
      ["Can the input letter change?", "Yes: f(t) = 3t² − 5 is the same function as f(x) = 3x² − 5."],
    ],
    summary: [
      "f(a): replace every x by a (in brackets).",
      "f(x) = k: solve for the input(s).",
      "On a graph: f(a) is a height; f(x) = k is where y = k meets the curve.",
      "f(2x), 2f(x), f(x + 1) and f(x) + 1 are all different.",
    ],
    next: "2.3 sketches graphs of functions and identifies their key features.",
  }),
];
