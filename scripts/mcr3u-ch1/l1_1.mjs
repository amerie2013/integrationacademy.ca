// MCR3U 1.1 — Relations and Functions: representations, the vertical-line test, one-to-one vs many-to-one
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "1.1 Relations and Functions";
export const ID = "1dd83ca5-843e-4d6c-a8dd-cf2a2147f35c";

const sideways = (h, k) => [{ f: (x) => k + Math.sqrt(x - h), a: h, color: "violet" }, { f: (x) => k - Math.sqrt(x - h), a: h, color: "violet" }];

export const blocks = () => [
  intro({
    icon: "🔗",
    title: "Relations and Functions",
    overview: String.raw`A <strong>relation</strong> pairs inputs with outputs. A <strong>function</strong> is a special relation: every input has <em>exactly one</em> output. In this lesson you will test relations given as sets of ordered pairs, mapping diagrams, graphs, equations and descriptions, and you will learn why "one output per input" is the rule that makes a relation useful for prediction.`,
    goals: [
      "explain the difference between a relation and a function;",
      "test a set of ordered pairs or a mapping diagram for the function property;",
      "apply the vertical-line test to a graph;",
      "decide algebraically whether an equation defines y as a function of x;",
      "classify a function as one-to-one or many-to-one.",
    ],
    curriculum: "A1.1 (explain the meaning of the term function and distinguish a function from a relation that is not a function, using tables of values, mapping diagrams, graphs, function machines and equations; one-to-one and many-to-one mappings; the vertical-line test)",
    prior: [
      [String.raw`What is the y-value of \(y=2x-5\) when \(x=4\)?`, String.raw`\(2(4)-5=3\).`],
      [String.raw`Solve \(y^2=16\).`, String.raw`\(y=4\) or \(y=-4\) — two answers.`],
      [String.raw`Which variable is usually the input?`, String.raw`\(x\), the independent variable; \(y\) is the output.`],
    ],
    words: [
      ["Relation", "any set of ordered pairs \\((x,y)\\)", "\\(\\{(1,2),(1,5)\\}\\)"],
      ["Function", "a relation in which each \\(x\\) has exactly one \\(y\\)", "\\(y=x^2\\)"],
      ["Domain", "the set of all inputs (x-values)", "\\(\\{1,2,3\\}\\)"],
      ["Range", "the set of all outputs (y-values)", "\\(\\{4,9\\}\\)"],
      ["Vertical-line test", "a graph is a function if no vertical line meets it more than once", ""],
      ["One-to-one / many-to-one", "different inputs give different outputs / some inputs share an output", "\\(y=2x\\) / \\(y=x^2\\)"],
    ],
  }),

  section("📌 Five ways to show a relation", String.raw`
  <p>The same idea can be shown in several ways. Each representation below shows a <em>function</em>: every input has one output.</p>
  ${table(["Representation", "Example", "How to test it"], [
    ["Ordered pairs", "\\(\\{(0,3),(1,5),(2,7)\\}\\)", "no x-value is repeated with a different y"],
    ["Mapping diagram", "arrows from each x to its y", "exactly one arrow leaves each x"],
    ["Graph", "points or a curve on a grid", "vertical-line test"],
    ["Equation", "\\(y=2x+3\\)", "solve for y — one value for each x?"],
    ["Words", "each student → their age", "can one input have two outputs?"],
  ])}
  ${keyIdea(String.raw`A relation is a function when <strong>each input has exactly one output</strong>. Two inputs may share an output (many-to-one is fine); one input may never have two outputs.`)}`),

  section("📌 Explore: the vertical-line test", String.raw`<p>A vertical line is the set of points with one fixed x-value. If it hits the graph twice, that x-value has two y-values. Slide the line, then switch between the relations. For the point sets, look at the mapping diagram too.</p>`),

  widget("relationTest", { start: "side" }),

  section("📌 Equations that are not functions", String.raw`
  <p>To test an equation, solve for \(y\). If a square root (or anything else) produces a \(\pm\), some x-values have two outputs.</p>
  <p>For \(x=(y-1)^2\): \(y-1=\pm\sqrt{x}\), so \(y=1\pm\sqrt{x}\). At \(x=4\) we get \(y=3\) <em>and</em> \(y=-1\). The graph is a parabola lying on its side, and the vertical line \(x=4\) crosses it twice.</p>
  ${plane({ view: { xmin: -2, xmax: 8, ymin: -4, ymax: 6 }, curves: sideways(0, 1), vlines: [{ x: 4, color: "amber", dash: true, label: "x = 4" }], points: [{ x: 4, y: 3, label: "(4, 3)" }, { x: 4, y: -1, label: "(4, −1)" }], step: { x: 1, y: 1 } }, "x = (y − 1)²: one input, two outputs — not a function")}
  ${watchOut([
    "A repeated y-value is allowed; a repeated x-value with different y-values is not.",
    "The test uses <em>vertical</em> lines. A horizontal line hitting twice only tells you the function is many-to-one.",
    "A vertical line itself (x = 3) is a relation but not a function.",
    "Check the whole graph, not just the part near the origin.",
  ])}`),

  examples([
    ["Ordered pairs", String.raw`Is \(\{(2,5),(3,-1),(4,5),(7,0)\}\) a function? State its domain and range.`,
      [String.raw`The x-values \(2,3,4,7\) are all different, so each input has one output.`, String.raw`Two inputs (2 and 4) share the output 5 — allowed.`],
      String.raw`a many-to-one function; domain \(\{2,3,4,7\}\), range \(\{-1,0,5\}\)`],
    ["Mapping diagram", String.raw`A mapping diagram has arrows \(-1\to4\), \(0\to2\), \(0\to6\), \(3\to-5\). Is it a function?`,
      [String.raw`Two arrows leave the input \(0\) (to 2 and to 6).`],
      "not a function: the input 0 has two outputs"],
    ["Vertical-line test", String.raw`Use the vertical-line test on \(x=(y+2)^2-3\).`,
      [String.raw`Solve: \(y=-2\pm\sqrt{x+3}\). The vertex of the sideways parabola is \((-3,-2)\).`, String.raw`The line \(x=1\) meets it at \(y=-2+2=0\) and \(y=-2-2=-4\).`],
      "not a function — the line x = 1 meets the graph twice",
      plane({ view: { xmin: -4, xmax: 6, ymin: -7, ymax: 3 }, curves: sideways(-3, -2), vlines: [{ x: 1, color: "amber", dash: true }], points: [{ x: 1, y: 0, label: "(1, 0)" }, { x: 1, y: -4, label: "(1, −4)" }], step: { x: 1, y: 1 } })],
    ["Testing equations", String.raw`Which equation defines \(y\) as a function of \(x\): (a) \(2x-3y=6\); (b) \(x^2+y^2=36\)?`,
      [String.raw`(a) \(y=\frac{2x-6}{3}\): one value of \(y\) for each \(x\).`, String.raw`(b) \(y=\pm\sqrt{36-x^2}\): at \(x=0\), \(y=6\) or \(y=-6\).`],
      "(a) is a function; (b), a circle, is not"],
    ["Relations in words", "Is “each person → their birthday” a function? Is “each birthday → a person born that day”?",
      ["Each person has exactly one birthday, so the first relation is a function (many people share a birthday: many-to-one).", "One birthday can belong to many people, so the reverse relation has inputs with several outputs."],
      "the first is a function; the reverse is not"],
  ]),

  practice([
    q("ordered pairs", String.raw`Is \(\{(-3,4),(-1,4),(0,2),(5,-1)\}\) a function?`, choice(["yes, many-to-one", "yes, one-to-one", "no"], 0),
      "Look for a repeated x-value.", [String.raw`All x-values differ; \(-3\) and \(-1\) share the output 4.`], "yes, many-to-one"),
    q("vertical line", String.raw`How many times does the line \(x=2\) meet the graph of \(x=y^2+1\)?`, num(2),
      "Substitute x = 2 and solve for y.", [String.raw`\(y^2=1\), so \(y=1\) or \(y=-1\).`], String.raw`\(2\)`),
    q("equations", "Which relation is NOT a function?", choice([String.raw`\(y=3x-1\)`, String.raw`\(y=x^2+5\)`, String.raw`\(x=|y|\)`, String.raw`\(y=\sqrt{x}\)`], 2),
      "Solve each for y.", [String.raw`\(x=|y|\) gives \(y=\pm x\): at \(x=2\), \(y=2\) or \(-2\).`], String.raw`\(x=|y|\)`),
    q("circle", String.raw`For \(x^2+y^2=50\), find the positive y-value when \(x=1\).`, num(7),
      "Substitute x = 1.", [String.raw`\(y^2=49\), so \(y=\pm7\).`], String.raw`\(7\)`),
    q("classify", String.raw`Is \(y=x^2\) one-to-one or many-to-one?`, choice(["many-to-one", "one-to-one", "not a function"], 0),
      "Try x = 3 and x = −3.", [String.raw`\(f(3)=f(-3)=9\): two inputs share an output.`], "many-to-one"),
  ]),

  ...hard([
    ["Counting intersections", String.raw`For which values of \(k\) does the vertical line \(x=k\) meet the relation \(x=y^2-6y+5\) exactly once, twice, or never?`,
      [String.raw`Complete the square in \(y\): \(x=(y-3)^2-4\). This is a sideways parabola with vertex \((-4,3)\), opening right.`, String.raw`If \(k>-4\): \((y-3)^2=k+4>0\) has two solutions.`, String.raw`If \(k=-4\): one solution, \(y=3\). If \(k<-4\): none.`],
      String.raw`once for \(k=-4\), twice for \(k>-4\), never for \(k<-4\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -2, ymax: 8 }, curves: sideways(-4, 3), vlines: [{ x: -4, color: "green", dash: true }, { x: 1, color: "amber", dash: true }], points: [{ x: -4, y: 3, label: "(−4, 3)" }], step: { x: 1, y: 1 } })],
    ["A relation with a parameter", String.raw`For which values of \(a\) is \(\{(1,a),(3,5),(a,2),(4,7)\}\) a function?`,
      [String.raw`Trouble only happens if the input \(a\) equals another input: \(a=1\), \(3\) or \(4\).`, String.raw`\(a=1\): pairs \((1,1)\) and \((1,2)\) — two outputs. \(a=3\): \((3,5)\) and \((3,2)\). \(a=4\): \((4,2)\) and \((4,7)\).`, String.raw`Any other value of \(a\) gives four different inputs.`],
      String.raw`every real \(a\) except \(1\), \(3\) and \(4\)`],
  ], [
    q("hard", String.raw`For \(x=y^2-4y\), find the largest y-value when \(x=5\).`, num(5),
      "Rearrange to y² − 4y − 5 = 0.", [String.raw`\((y-5)(y+1)=0\), so \(y=5\) or \(y=-1\).`], String.raw`\(5\)`),
    q("hard", String.raw`The line \(x=k\) meets \(x=(y+2)^2+3\) exactly once. Find \(k\).`, num(3),
      "Where is the vertex of the sideways parabola?", [String.raw`Vertex \((3,-2)\); only \(x=3\) gives one y-value.`], String.raw`\(3\)`),
    q("hard", String.raw`How many integers \(m\) from \(-5\) to \(5\) make \(\{(2,7),(m,1),(5,m),(0,4)\}\) a function?`, num(8),
      "Which values of m repeat an input with a different output?", [String.raw`\(m=2\): \((2,7),(2,1)\). \(m=5\): \((5,1),(5,5)\). \(m=0\): \((0,1),(0,4)\).`, String.raw`11 integers minus these 3.`], String.raw`\(8\)`),
  ]),

  wrapUp({
    qas: [
      ["Why do mathematicians care whether a relation is a function?", "A function lets you predict: give an input, get one definite output. Formulas, graphs on calculators and computer code all rely on that."],
      ["Is a horizontal line a function?", "Yes — y = 4 gives one output (4) for every input. It is many-to-one."],
      ["Can a function have two x-intercepts?", "Yes. The test is about one output per input; two inputs can both give y = 0."],
      ["Why does a circle fail the test?", "Solving x² + y² = r² gives y = ±√(r² − x²): one input, two outputs."],
      ["How do I test a relation given in words?", "Ask: could one input have two different outputs? If yes, it is not a function."],
    ],
    summary: [
      "A function gives each input exactly one output.",
      "Ordered pairs / mapping: no input repeated with a different output.",
      "Graph: the vertical-line test.",
      "Equation: solve for y; a ± means not a function.",
      "One-to-one: different inputs, different outputs; many-to-one: some outputs shared.",
    ],
    next: "1.2 introduces function notation f(x) for evaluating and solving.",
  }),
];
