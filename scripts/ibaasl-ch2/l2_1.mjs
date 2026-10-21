// IB AA SL 2.1 — What Is a Function?: relations, mapping diagrams, the vertical line test, functions as models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { fig } from "../ibaasl-ch1/figs.mjs";
import { mapDoc } from "../mcr3u-ch1/bank/fig.mjs";

export const TITLE = "2.1 What Is a Function?";
export const ID = "34a103db-e88e-4fab-9ba5-068390e0101f";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🔗",
    title: "What Is a Function?",
    overview: S`A relation pairs inputs with outputs. A function is a special relation: every input has exactly one output. Functions are the language of modelling — the cost of a taxi ride depends on the distance, the height of a ball depends on the time. In this lesson you will decide whether a relation given as pairs, a table, a mapping diagram, a graph or an equation is a function, and describe the type of mapping.`,
    goals: [
      "define a relation and a function using inputs and outputs;",
      "decide whether a set of pairs, a table or a mapping diagram is a function;",
      "classify mappings as one-to-one, many-to-one or one-to-many;",
      "use the vertical line test on a graph;",
      "decide whether an equation defines y as a function of x, and use a function as a model.",
    ],
    curriculum: "SL 2.2 (the concept of a function, domain, range and graph; a function as a mathematical model)",
    prior: [
      [S`Find \(y\) when \(x=-3\) for \(y=4-2x\).`, S`\(y=10\).`],
      [S`Solve \(y^2=9\).`, S`\(y=3\) or \(y=-3\).`],
      [S`Make \(y\) the subject of \(x^2+y=9\).`, S`\(y=9-x^2\).`],
    ],
    words: [
      ["Relation", "any set of input–output pairs", "\\(\\{(1,4),(1,6)\\}\\)"],
      ["Function", "a relation in which every input has exactly one output", "\\(y=2x+1\\)"],
      ["One-to-one", "different inputs always give different outputs", "\\(y=2x+1\\)"],
      ["Many-to-one", "different inputs can share an output (still a function)", "\\(y=x^2\\)"],
      ["Vertical line test", "a graph is a function if no vertical line meets it more than once", "a circle fails"],
    ],
  }),

  section("📌 Mapping diagrams", S`
  <p>A mapping diagram draws an arrow from each input to its output. It is a function when every input has <strong>exactly one</strong> arrow leaving it.</p>
  ${fig(mapDoc([[1, 3], [2, 5], [3, 7], [4, 9]]), "One-to-one: every input has one output and no output is shared")}
  ${fig(mapDoc([[-2, 4], [-1, 1], [1, 1], [2, 4]]), "Many-to-one (squaring): still a function — two inputs may share an output")}
  ${fig(mapDoc([[4, -2], [4, 2], [9, -3], [9, 3]]), "One-to-many: the input 4 has two outputs, so this is NOT a function")}
  ${table(["Type", "Arrows", "Function?"], [["one-to-one", "one out of each input, one into each output", "yes"], ["many-to-one", "one out of each input, outputs may be shared", "yes"], ["one-to-many", "some input has two or more arrows", "no"]])}`),

  section("📌 The vertical line test", S`
  <p>On a graph the input is \(x\) and the output is \(y\). If a vertical line \(x=c\) meets the graph twice, the input \(c\) has two outputs.</p>
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.sqrt(16 - x * x), a: -4, b: 4, color: "violet" }, { f: (x) => -Math.sqrt(16 - x * x), a: -4, b: 4, color: "violet" }], vlines: [{ x: 2, color: "red", dash: true }], points: [P(2, Math.sqrt(12), "(2, 3.46)", "red"), P(2, -Math.sqrt(12), "(2, −3.46)", "red")] }, "The circle x² + y² = 16 fails: x = 2 meets it twice")}
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -3, ymax: 8 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 2, color: "blue" }], vlines: [{ x: 2, color: "red", dash: true }], points: [P(2, 2, "(2, 2)", "red")] }, "y = x² − 2 passes: every vertical line meets it at most once")}
  ${keyIdea(S`A relation is a function when every input in its domain has exactly one output. Sharing outputs is allowed; splitting an input is not.`)}
  ${watchOut([
    "Many-to-one is still a function; only one-to-many fails.",
    "A vertical line that misses the graph is fine: that x is simply not in the domain.",
    "Solving for y with a square root (y = ±…) usually signals two outputs: not a function.",
    "In a table, look for a repeated x with different y-values.",
  ])}`),

  section("📌 Explore", S`<p>Pick a relation and slide the vertical line across it. Count how many times the line meets the graph at each position.</p>`),

  widget("functionTest", { init: "circle" }),

  examples([
    ["Level 1 · Ordered pairs", S`Is \(\{(1,4),(2,7),(3,4),(5,0)\}\) a function? Describe the mapping.`,
      [S`The inputs \(1, 2, 3, 5\) each appear once.`, S`The output 4 is shared by inputs 1 and 3.`],
      "a function; many-to-one",
      fig(mapDoc([[1, 4], [2, 7], [3, 4], [5, 0]]))],
    ["Level 1 · A table", S`Does the table \(x: 2, 3, 3, 5\); \(y: 1, 4, 6, 8\) show a function?`,
      [S`The input 3 appears twice, with outputs 4 and 6.`],
      "not a function"],
    ["Level 2 · Two graphs", S`Which of \(y^2=x+4\) and \(y=\sqrt{x+4}\) is a function?`,
      [S`\(y^2=x+4\) gives \(y=\pm\sqrt{x+4}\): for \(x=0\), \(y=2\) or \(-2\).`, S`\(y=\sqrt{x+4}\) takes only the non-negative root: one output for each \(x\ge-4\).`],
      S`only \(y=\sqrt{x+4}\)`,
      plane({ view: { xmin: -5, xmax: 6, ymin: -4, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.sqrt(x + 4), a: -4, color: "blue" }, { f: (x) => -Math.sqrt(x + 4), a: -4, color: "amber" }], points: [P(0, 2, "(0, 2)"), P(0, -2, "(0, −2)", "amber")] }, "Blue: y = √(x + 4). Blue and amber together: y² = x + 4")],
    ["Level 2 · From an equation", S`Decide whether each equation defines \(y\) as a function of \(x\): (a) \(x^2+y=9\) (b) \(x+y^2=9\).`,
      [S`(a) \(y=9-x^2\): one value of \(y\) for each \(x\) — a function.`, S`(b) \(y=\pm\sqrt{9-x}\): for \(x=5\), \(y=\pm2\) — not a function.`],
      "(a) yes (b) no"],
    ["Level 3 · A function as a model", S`A taxi charges 3.50 plus 1.80 per km, so \(C=3.5+1.8d\). Is \(C\) a function of \(d\)? Is \(d\) a function of \(C\)? Find \(d\) when \(C=21.50\).`,
      [S`Each distance gives one cost, so \(C\) is a function of \(d\).`, S`The graph is a straight line with positive gradient (one-to-one), so each cost comes from one distance: \(d\) is a function of \(C\) too.`, S`\(21.5=3.5+1.8d\Rightarrow d=10\) km.`],
      "both; d = 10 km",
      plane({ view: { xmin: -1, xmax: 14, ymin: -2, ymax: 30 }, step: { x: 1, y: 5 }, curves: [{ f: (d) => 3.5 + 1.8 * d, a: 0, color: "violet" }], points: [P(10, 21.5, "(10, 21.5)"), P(0, 3.5, "(0, 3.5)", "green")], xlabel: "d (km)", ylabel: "C" })],
  ]),

  practice([
    q("Level 1 · pairs", S`Is \(\{(2,3),(4,3),(6,5)\}\) a function?`, choice(["yes, many-to-one", "yes, one-to-one", "no, one-to-many", "no, it has repeated outputs"], 0),
      "Check whether any input repeats.", ["Each input appears once; output 3 is shared."], "yes, many-to-one"),
    q("Level 1 · graphs", "Which relation is NOT a function of x?", choice(["x = 4", "y = 4", "y = 4x", "y = x² + 4"], 0),
      "Think about the vertical line test.", ["x = 4 is itself a vertical line: one input, infinitely many outputs."], "x = 4"),
    q("Level 2 · vertical line", S`How many points does the line \(x=2\) share with \(x^2+y^2=13\)?`, num(2),
      "Substitute x = 2.", [S`\(y^2=9\Rightarrow y=\pm3\).`], S`\(2\)`),
    q("Level 2 · mapping type", S`What type of mapping is \(y=x^2\)?`, choice(["many-to-one", "one-to-one", "one-to-many", "not a mapping"], 0),
      "Try x = 2 and x = −2.", [S`Both give \(y=4\).`], "many-to-one"),
    q("Level 2 · outputs", S`For \(y=4-2x\), find \(y\) when \(x=-3\).`, num(10),
      "Substitute.", [S`\(4+6\).`], S`\(10\)`),
  ]),

  ...hard([
    ["When does a set stay a function?", S`For which values of \(k\) is \(\{(1,5),(3,5),(k,7),(k^2,9)\}\) NOT a function?`,
      [S`A conflict happens when an input repeats with a different output.`, S`\(k=1\) or \(k=3\): the input \(k\) already maps to 5. \(k^2=1\) or \(k^2=3\): the input \(k^2\) already maps to 5, so \(k=\pm1\) or \(k=\pm\sqrt3\).`, S`\(k^2=k\) (\(k=0\) or \(1\)): one input would map to both 7 and 9.`],
      S`\(k\in\{0,\ \pm1,\ 3,\ \pm\sqrt3\}\)`],
    ["Splitting a circle", S`The circle \(x^2+y^2=25\) is not a function. Write it as two functions and state the domain and range of each.`,
      [S`\(y^2=25-x^2\Rightarrow y=\sqrt{25-x^2}\) or \(y=-\sqrt{25-x^2}\).`, S`Both need \(25-x^2\ge0\): domain \(-5\le x\le5\).`, S`Upper half: range \(0\le y\le5\). Lower half: range \(-5\le y\le0\).`],
      S`\(y=\pm\sqrt{25-x^2}\), domain \([-5,5]\), ranges \([0,5]\) and \([-5,0]\)`,
      plane({ view: { xmin: -7, xmax: 7, ymin: -7, ymax: 7 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => Math.sqrt(25 - x * x), a: -5, b: 5, color: "blue" }, { f: (x) => -Math.sqrt(25 - x * x), a: -5, b: 5, color: "red" }] }, "Blue: upper half. Red: lower half")],
  ], [
    q("Level 3 · touching once", S`For how many values of \(x\) does the vertical line meet \(x^2+y^2=25\) exactly once?`, num(2),
      "Where is there only one y?", [S`Only at \(x=\pm5\), where \(y=0\).`], S`\(2\)`),
    q("Level 3 · domain edge", S`For the relation \(y^2=x-1\), what is the smallest \(x\) for which a point exists?`, num(1),
      "y² cannot be negative.", [S`\(x-1\ge0\).`], S`\(1\)`),
    q("Level 3 · horizontal line", S`The function \(y=3\) (a horizontal line) is:`, choice(["many-to-one", "one-to-one", "one-to-many", "not a function"], 0),
      "Every input gives the same output.", ["All inputs share the output 3."], "many-to-one"),
  ]),

  wrapUp({
    qas: [
      ["Is a vertical line ever a function?", "No. x = c gives one input infinitely many outputs."],
      ["Why is many-to-one allowed?", "A function only needs each input to be unambiguous. Two students can have the same height; each student still has one height."],
      ["Can I use the vertical line test on a table?", "Use the same idea: look for a repeated x with different y-values."],
      ["What makes a function a good model?", "Each input situation (time, distance) must produce one predictable output."],
      ["What is the horizontal line test?", "It checks one-to-one: if no horizontal line meets the graph twice, the function has an inverse (2.6)."],
    ],
    summary: [
      "Function: every input has exactly one output.",
      "One-to-one and many-to-one are functions; one-to-many is not.",
      "Vertical line test on graphs; repeated inputs in tables and pairs.",
      "y = ±√… usually means not a function.",
    ],
    next: "2.2 introduces function notation f(x) and how to evaluate and solve with it.",
  }),
];
