// IB AA SL 2.6 — Inverse Functions: finding f⁻¹, reflection in y = x, one-to-one and domain restriction, self-inverse functions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { fig } from "../ibaasl-ch1/figs.mjs";
import { mapDoc } from "../mcr3u-ch1/bank/fig.mjs";

export const TITLE = "2.6 Inverse Functions";
export const ID = "1baa0002-0001-4001-8001-000000000206";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const YX = { f: (x) => x, color: "gray" };

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Inverse Functions",
    overview: S`An inverse function undoes a function: if \(f\) turns 3 into 7, then \(f^{-1}\) turns 7 back into 3. Only one-to-one functions can be undone. In this lesson you will find inverse functions algebraically, sketch them by reflecting in \(y=x\), restrict a domain so that an inverse exists, and recognise functions that are their own inverse.`,
    goals: [
      "explain the inverse function as the function that reverses \\(f\\);",
      "find \\(f^{-1}(x)\\) by swapping \\(x\\) and \\(y\\) and rearranging;",
      "sketch \\(y=f^{-1}(x)\\) as the reflection of \\(y=f(x)\\) in \\(y=x\\);",
      "use the horizontal line test and restrict a domain so that an inverse exists;",
      "use \\(f(f^{-1}(x))=f^{-1}(f(x))=x\\) and identify self-inverse functions.",
    ],
    curriculum: "SL 2.2 (informal concept that an inverse function reverses or undoes the effect of a function; inverse function as a reflection in y = x; notation f⁻¹(x)), SL 2.5 (finding the inverse function f⁻¹(x); f(f⁻¹(x)) = x; domain restriction)",
    prior: [
      [S`Make \(x\) the subject of \(y=4x-7\).`, S`\(x=\frac{y+7}{4}\).`],
      [S`Reflect the point \((2,5)\) in the line \(y=x\).`, S`\((5,2)\).`],
      [S`Solve \((x+2)^2=9\) for \(x\ge-2\).`, S`\(x=1\).`],
    ],
    words: [
      ["Inverse function \\(f^{-1}\\)", "the function that undoes \\(f\\)", "\\(f(3)=7\\Leftrightarrow f^{-1}(7)=3\\)"],
      ["One-to-one", "each output comes from only one input — needed for an inverse", "\\(y=2x+1\\)"],
      ["Horizontal line test", "a function is one-to-one if no horizontal line meets its graph twice", "\\(y=x^2\\) fails"],
      ["Self-inverse", "a function equal to its own inverse", "\\(f(x)=\\frac1x\\)"],
      ["Domain/range swap", "domain of \\(f^{-1}\\) = range of \\(f\\), and vice versa", ""],
    ],
  }),

  section("📌 Undoing a function", S`
  <p>For \(f(x)=2x+1\), the inverse reverses each step in the opposite order: subtract 1, then divide by 2, so \(f^{-1}(x)=\frac{x-1}{2}\). Every input–output pair swaps.</p>
  ${fig(mapDoc([[0, 1], [1, 3], [2, 5], [3, 7]]), "f(x) = 2x + 1. Reversing every arrow gives f⁻¹")}
  ${table(["Step", "Method for y = f(x)", "Example f(x) = 4x − 7"], [
    ["1", "write y = f(x)", S`\(y=4x-7\)`],
    ["2", "swap x and y", S`\(x=4y-7\)`],
    ["3", "make y the subject", S`\(y=\frac{x+7}{4}\)`],
    ["4", "write f⁻¹(x) and check", S`\(f^{-1}(x)=\frac{x+7}{4}\); \(f(f^{-1}(5))=5\)`],
  ])}`),

  section("📌 Reflection in y = x, and one-to-one functions", S`
  <p>Swapping \(x\) and \(y\) reflects every point in the line \(y=x\), so the graph of \(f^{-1}\) is the mirror image of the graph of \(f\).</p>
  ${plane({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 * x + 1, color: "violet" }, { f: (x) => (x - 1) / 2, color: "green" }, YX], points: [P(2, 5, "(2, 5)", "violet"), P(5, 2, "(5, 2)", "green")] }, "f(x) = 2x + 1 (violet) and f⁻¹(x) = (x − 1)/2 (green) are reflections in y = x (grey)")}
  <p>\(y=x^2\) is many-to-one (\(f(-2)=f(2)=4\)), so it has no inverse on \(\mathbb R\). Restricting the domain to \(x\ge0\) makes it one-to-one, with inverse \(\sqrt x\).</p>
  ${plane({ view: { xmin: -3, xmax: 6, ymin: -3, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x, a: -3, b: 0, color: "gray" }, { f: (x) => x * x, a: 0, color: "violet" }, { f: (x) => Math.sqrt(x), a: 0, color: "green" }, YX], lines: [{ m: 0, b: 4, color: "red", dash: true }], points: [P(-2, 4, "(−2, 4)", "red"), P(2, 4, "(2, 4)", "red")] }, "y = 4 meets y = x² twice, so restrict to x ≥ 0 (violet); its inverse is √x (green)")}
  ${keyIdea(S`\(f\) has an inverse only if it is one-to-one (horizontal line test). Then \(f(f^{-1}(x))=x\), \(f^{-1}(f(x))=x\), and the domain and range swap.`)}
  ${watchOut([
    "f⁻¹(x) is not 1/f(x): the −1 means 'inverse', not a power.",
    "State the domain of f⁻¹: it is the range of f.",
    "When the domain is restricted, choose the square-root sign that matches it.",
    "Check your inverse with one value: f(a) = b should give f⁻¹(b) = a.",
  ])}`),

  section("📌 Explore", S`<p>Choose a function and move the point along it. Its mirror image in \(y=x\) traces the inverse (green, dashed). Notice which functions need a restricted domain, and which one is its own inverse.</p>`),

  widget("fnInverse", { init: "lin" }),

  examples([
    ["Level 1 · A linear inverse", S`Find \(f^{-1}(x)\) for \(f(x)=4x-7\) and check that \(f(f^{-1}(5))=5\).`,
      [S`\(x=4y-7\Rightarrow y=\frac{x+7}{4}\).`, S`\(f^{-1}(5)=3\) and \(f(3)=12-7=5\) ✓.`],
      S`\(f^{-1}(x)=\frac{x+7}{4}\)`],
    ["Level 1 · Reading an inverse from a graph", S`The graph of \(y=f(x)\) passes through \((1,3)\), \((2,5)\) and \((4,9)\). Find \(f^{-1}(5)\) and \(f^{-1}(9)\).`,
      [S`\(f(2)=5\), so \(f^{-1}(5)=2\).`, S`\(f(4)=9\), so \(f^{-1}(9)=4\).`],
      S`\(f^{-1}(5)=2\), \(f^{-1}(9)=4\)`,
      plane({ view: { xmin: -1, xmax: 10, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 2 * x + 1, color: "violet" }, { f: (x) => (x - 1) / 2, color: "green" }, YX], points: [P(1, 3, "(1, 3)", "violet"), P(2, 5, "(2, 5)", "violet"), P(4, 9, "(4, 9)", "violet"), P(5, 2, "(5, 2)", "green"), P(9, 4, "(9, 4)", "green")] })],
    ["Level 2 · A rational inverse", S`Find the inverse of \(f(x)=\dfrac{2x+1}{x-3}\), \(x\ne3\), and state its domain.`,
      [S`Swap: \(x=\frac{2y+1}{y-3}\Rightarrow xy-3x=2y+1\).`, S`\(xy-2y=3x+1\Rightarrow y(x-2)=3x+1\).`, S`\(f^{-1}(x)=\frac{3x+1}{x-2}\), \(x\ne2\) (the range of \(f\) is \(y\ne2\)).`],
      S`\(f^{-1}(x)=\frac{3x+1}{x-2}\), \(x\ne2\)`],
    ["Level 2 · Restricting the domain", S`\(f(x)=(x+2)^2-1\), \(x\ge-2\). Find \(f^{-1}(x)\) with its domain and range.`,
      [S`Swap: \(x=(y+2)^2-1\Rightarrow(y+2)^2=x+1\).`, S`\(y\ge-2\) so take the positive root: \(y=-2+\sqrt{x+1}\).`, S`Domain of \(f^{-1}\): \(x\ge-1\) (range of \(f\)); range: \(y\ge-2\).`],
      S`\(f^{-1}(x)=-2+\sqrt{x+1}\), \(x\ge-1\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => (x + 2) ** 2 - 1, a: -2, color: "violet" }, { f: (x) => -2 + Math.sqrt(x + 1), a: -1, color: "green" }, YX], points: [P(-2, -1, "(−2, −1)", "violet"), P(-1, -2, "(−1, −2)", "green")] })],
    ["Level 3 · A self-inverse function", S`Show that \(f(x)=\dfrac{3x-2}{x-3}\) is its own inverse.`,
      [S`\(f(f(x))=\dfrac{3\cdot\frac{3x-2}{x-3}-2}{\frac{3x-2}{x-3}-3}\).`, S`Multiply top and bottom by \(x-3\): \(\dfrac{9x-6-2x+6}{3x-2-3x+9}=\dfrac{7x}{7}=x\).`, S`So \(f\circ f=I\), i.e. \(f^{-1}=f\): its graph is symmetric in \(y=x\).`],
      S`\(f(f(x))=x\), so \(f^{-1}=f\)`,
      plane({ view: { xmin: -5, xmax: 10, ymin: -5, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => (3 * x - 2) / (x - 3), a: -5, b: 2.9, color: "violet" }, { f: (x) => (3 * x - 2) / (x - 3), a: 3.1, b: 10, color: "violet" }, YX], vlines: [{ x: 3, color: "red", dash: true }], lines: [{ m: 0, b: 3, color: "red", dash: true }] }, "The graph is symmetric in y = x")],
  ]),

  practice([
    q("Level 1 · undo", S`\(f(x)=x+9\). Find \(f^{-1}(2)\).`, num(-7),
      "The inverse subtracts 9.", [S`\(2-9\).`], S`\(-7\)`),
    q("Level 1 · undo", S`\(f(x)=5x\). Find \(f^{-1}(30)\).`, num(6),
      "The inverse divides by 5.", [S`\(30\div5\).`], S`\(6\)`),
    q("Level 2 · inverse value", S`\(f(x)=3x-4\). Find \(f^{-1}(11)\).`, num(5),
      "Solve 3x − 4 = 11.", [S`\(3x=15\).`], S`\(5\)`),
    q("Level 2 · cubic", S`\(f(x)=x^3+1\). Find \(f^{-1}(28)\).`, num(3),
      "Solve x³ + 1 = 28.", [S`\(x^3=27\).`], S`\(3\)`),
    q("Level 2 · one-to-one", "Which function has an inverse on all real numbers?", choice(["y = 2x − 5", "y = x²", "y = |x|", "y = x² + 1"], 0),
      "Use the horizontal line test.", ["Only the line is one-to-one."], "y = 2x − 5"),
  ]),

  ...hard([
    ["Inverse of a restricted quadratic", S`\(f(x)=x^2-6x+5\), \(x\ge3\). Find \(f^{-1}(x)\) and its domain, then solve \(f(x)=f^{-1}(x)\).`,
      [S`\(f(x)=(x-3)^2-4\). Swap and solve: \((y-3)^2=x+4\), \(y\ge3\), so \(f^{-1}(x)=3+\sqrt{x+4}\), \(x\ge-4\).`, S`A function and its inverse meet on \(y=x\) here: \(x^2-6x+5=x\Rightarrow x^2-7x+5=0\).`, S`\(x=\frac{7\pm\sqrt{29}}{2}\); only \(x=\frac{7+\sqrt{29}}{2}\approx6.19\) satisfies \(x\ge3\).`],
      S`\(f^{-1}(x)=3+\sqrt{x+4}\), \(x\ge-4\); \(x\approx6.19\)`,
      plane({ view: { xmin: -5, xmax: 10, ymin: -5, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 6 * x + 5, a: 3, color: "violet" }, { f: (x) => 3 + Math.sqrt(x + 4), a: -4, color: "green" }, YX], points: [P(6.19, 6.19, "(6.19, 6.19)", "red"), P(3, -4, "(3, −4)", "violet"), P(-4, 3, "(−4, 3)", "green")] })],
    ["The inverse of a composite", S`\(f(x)=2x+1\) and \(g(x)=x-3\). Find \((f\circ g)^{-1}(x)\) and show that it equals \((g^{-1}\circ f^{-1})(x)\).`,
      [S`\((f\circ g)(x)=2(x-3)+1=2x-5\), so \((f\circ g)^{-1}(x)=\frac{x+5}{2}\).`, S`\(f^{-1}(x)=\frac{x-1}{2}\), \(g^{-1}(x)=x+3\): \(g^{-1}(f^{-1}(x))=\frac{x-1}{2}+3=\frac{x+5}{2}\) ✓.`, S`To undo 'g then f', undo f first, then g — like taking off socks after shoes.`],
      S`\((f\circ g)^{-1}(x)=\frac{x+5}{2}=(g^{-1}\circ f^{-1})(x)\)`],
  ], [
    q("Level 3 · rational inverse value", S`\(f(x)=\dfrac{x+4}{x-2}\). Find \(f^{-1}(3)\).`, num(5),
      "Solve f(x) = 3.", [S`\(x+4=3x-6\).`], S`\(5\)`),
    q("Level 3 · swapped range", S`\(f(x)=\sqrt{x-1}+2\), \(x\ge1\). What is the smallest value in the range of \(f^{-1}\)?`, num(1),
      "The range of f⁻¹ is the domain of f.", [S`Domain of \(f\): \(x\ge1\).`], S`\(1\)`),
    q("Level 3 · meeting point", S`\(f(x)=4-2x\). At what \(x\) do the graphs of \(f\) and \(f^{-1}\) meet? (3 d.p.)`, num(1.333, 0.001),
      "They meet on y = x.", [S`\(4-2x=x\Rightarrow x=\frac43\).`], S`\(1.333\)`),
  ]),

  wrapUp({
    qas: [
      ["Does every function have an inverse?", "Only one-to-one functions. Many-to-one functions need a restricted domain first."],
      ["Why reflect in y = x?", "Finding the inverse swaps every (x, y) to (y, x), which is exactly that reflection."],
      ["How can I check an inverse quickly?", "Pick a value: if f(2) = 5, then your f⁻¹(5) must be 2."],
      ["Do f and f⁻¹ always meet on y = x?", "For increasing functions any meeting point is on y = x; decreasing functions can meet elsewhere too."],
      ["What does self-inverse mean graphically?", "The graph is symmetric in the line y = x, e.g. y = 1/x."],
    ],
    summary: [
      "f⁻¹ undoes f: swap x and y, then make y the subject.",
      "The graph of f⁻¹ is the reflection of f in y = x.",
      "One-to-one is required; restrict the domain if needed.",
      "f(f⁻¹(x)) = f⁻¹(f(x)) = x; domain and range swap.",
    ],
    next: "2.7 reviews the whole chapter with mixed exam-style questions.",
  }),
];
