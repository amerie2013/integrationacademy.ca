// MCF3M 1.1 — Relations and Functions: five representations, the vertical-line test, deciding from an equation,
// functions in context.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, txt, hard, plane, fig, tv } from "../lib.mjs";
import { mapDoc } from "../figs.mjs";
const S = String.raw;

export const TITLE = "1.1 Relations and Functions";

const side = (h, k, c = "violet") => [{ f: (x) => k + Math.sqrt(x - h), a: h, color: c }, { f: (x) => k - Math.sqrt(x - h), a: h, color: c }];

export const blocks = () => [
  intro({
    icon: "🔗",
    title: "Relations and Functions",
    overview: S`A <b>relation</b> is any set of ordered pairs \((x,\,y)\) that connects two quantities. A <b>function</b> is a special relation: every input \(x\) has <b>exactly one</b> output \(y\). Functions are the language of the whole course, because quadratic, sinusoidal and exponential models all predict one value for each input. This lesson shows how to recognise a function in a table, a mapping diagram, a list of points, a graph and an equation.`,
    goals: [
      "explain the difference between a relation and a function;",
      "decide whether a table, a mapping diagram or a set of ordered pairs is a function;",
      "use the vertical-line test on a graph and explain why it works;",
      "decide from an equation whether \\(y\\) is a function of \\(x\\) by solving for \\(y\\);",
      "decide which quantity should be the input in a real situation.",
    ],
    curriculum: "A2.1 (explain the meaning of the term function and distinguish a function from a relation that is not a function, using tables of values, mapping diagrams, graphs, function machines and equations, including the vertical-line test)",
    prior: [
      [S`What are the coordinates of the point 3 units right of the origin and 2 units down?`, S`\((3,\,-2)\).`],
      [S`If \(y=2x-5\), what is \(y\) when \(x=4\)?`, S`\(y=2(4)-5=3\).`],
      [S`Which numbers square to \(9\)?`, S`Both \(3\) and \(-3\), because \(3^2=9\) and \((-3)^2=9\).`],
    ],
    words: [
      ["Relation", "a set of ordered pairs (x, y)", "\\(\\{(1,2),(1,5),(3,4)\\}\\)"],
      ["Function", "a relation in which each x has exactly one y", "\\(\\{(1,2),(2,5),(3,5)\\}\\)"],
      ["Domain", "the set of all inputs (first coordinates)", "\\(\\{1,2,3\\}\\)"],
      ["Range", "the set of all outputs (second coordinates)", "\\(\\{2,5\\}\\)"],
      ["Vertical-line test", "a graph is a function if no vertical line meets it more than once", "a parabola passes; a circle fails"],
    ],
  }),

  section("📌 What makes a relation a function?", S`
  <p>Think of a function as a machine: you put in one value of \(x\) and exactly one value of \(y\) comes out. If the same input could give two different outputs, the machine would be unpredictable, and the relation is <b>not</b> a function.</p>
  ${keyIdea(S`A relation is a <b>function</b> when no \(x\)-value is paired with two different \(y\)-values. Repeated \(y\)-values are allowed: two different inputs may share an output.`)}
  ${table(["Representation", "How to test it", "Not a function if…"], [
    ["Ordered pairs / table", "look down the x-values", "an x-value repeats with a different y"],
    ["Mapping diagram", "count the arrows leaving each x", "some x has two or more arrows"],
    ["Graph", "slide a vertical line across", "a vertical line meets the graph twice"],
    ["Equation", "solve for y", "one x gives two y-values (for example ±)"],
  ])}
  <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
  ${fig(mapDoc([[-2, 4], [-1, 1], [1, 1], [2, 4]]), "A function: each x has one arrow (two x's may share a y).")}
  ${fig(mapDoc([[4, -2], [1, -1], [1, 1], [4, 2]]), "Not a function: x = 1 and x = 4 each have two arrows.")}
  </div>`),

  section("📌 The vertical-line test", S`
  <p>On a graph, every point directly above or below a given \(x\) lies on one vertical line. If a vertical line meets the graph at two points, those two points have the same \(x\) and different \(y\), so the relation is not a function.</p>
  <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x - 1, color: "violet" }], vlines: [{ x: 1.5, color: "red", dash: true }], points: [{ x: 1.5, y: 1.25, label: "one point", color: "red" }] }, "y = x² − 1: every vertical line meets it once — a function.")}
  ${plane({ view: { xmin: -2, xmax: 6, ymin: -4, ymax: 4 }, curves: side(0, 0), vlines: [{ x: 3, color: "red", dash: true }], points: [{ x: 3, y: Math.sqrt(3), label: "(3, 1.73)", color: "red" }, { x: 3, y: -Math.sqrt(3), label: "(3, −1.73)", color: "red" }] }, "x = y²: the line x = 3 meets it twice — not a function.")}
  </div>
  ${watchOut([
    "A horizontal line meeting a graph twice does NOT matter: y = x² has f(−2) = f(2) = 4 and is still a function.",
    "Test with every vertical line, not just one: a graph can pass at x = 0 and fail at x = 3.",
    "A single isolated point is still part of the relation; check it too.",
    "x = 5 (a vertical line) is a relation but not a function: the input 5 has infinitely many outputs.",
  ])}`),

  widget("relationTest", {}),

  examples([
    ["Ordered pairs and a mapping diagram", S`Decide whether each relation is a function, and state its domain and range.<br>(a) \(A=\{(-3,\,5),\,(-1,\,2),\,(0,\,2),\,(4,\,7)\}\) &nbsp; (b) \(B=\{(2,\,1),\,(5,\,3),\,(2,\,-4),\,(6,\,0)\}\)`,
      [S`<b>Rule.</b> A relation is a function when no first coordinate (\(x\)) appears with two different second coordinates (\(y\)). So the test is: list the \(x\)-values and look for a repeat.`,
        S`<b>Relation A.</b> The \(x\)-values are \(-3,\,-1,\,0,\,4\). None repeats, so each input has exactly one output. The two pairs \((-1,\,2)\) and \((0,\,2)\) share the output \(2\), but that is allowed: different inputs may give the same output.`,
        S`<b>Domain and range of A.</b> Domain = set of inputs = \(\{-3,\,-1,\,0,\,4\}\). Range = set of outputs, each listed once = \(\{2,\,5,\,7\}\).`,
        S`<b>Relation B.</b> The \(x\)-value \(2\) appears twice: \((2,\,1)\) and \((2,\,-4)\). One input has two outputs, so B is <b>not</b> a function. In the mapping diagram, \(2\) has two arrows leaving it.`,
        S`<b>Domain and range of B.</b> A relation still has a domain and range: domain \(\{2,\,5,\,6\}\), range \(\{-4,\,0,\,1,\,3\}\).`,
        S`<b>Check.</b> In the diagram for B, count the arrows from each \(x\): \(2\to\) two arrows, \(5\to\) one, \(6\to\) one. Any count above one confirms "not a function" ✓`],
      S`A is a function (D = {−3, −1, 0, 4}, R = {2, 5, 7}); B is not a function because x = 2 has two outputs (D = {2, 5, 6}, R = {−4, 0, 1, 3}).`,
      fig(mapDoc([[2, 1], [5, 3], [2, -4], [6, 0]]), "Relation B: the input 2 has two arrows.")],

    ["A table of values", S`A tutor records the number of lessons \(x\) taught on each day and the hours \(y\) worked:` + tv([[2, 3], [3, 4.5], [1, 1.5], [3, 5], [4, 6]], "lessons x", "hours y") + S`Is \(y\) a function of \(x\)? Explain using the table and the graph of the points.`,
      [S`<b>Goal.</b> \(y\) is a function of \(x\) only if every value of \(x\) in the table has one value of \(y\).`,
        S`<b>Scan the inputs.</b> The \(x\)-values are \(2,\,3,\,1,\,3,\,4\). The value \(x=3\) appears twice.`,
        S`<b>Compare their outputs.</b> For \(x=3\) the table gives \(y=4.5\) on one day and \(y=5\) on another. The same input has two different outputs.`,
        S`<b>Conclusion from the rule.</b> Because \(x=3\) is paired with two outputs, \(y\) is <b>not</b> a function of \(x\). (A repeated \(x\) with the <i>same</i> \(y\) would just be the same point twice.)`,
        S`<b>Check with the graph.</b> Plot the five points. The vertical line \(x=3\) passes through \((3,\,4.5)\) and \((3,\,5)\), two points, so the graph fails the vertical-line test ✓`,
        S`<b>Why it makes sense.</b> Lessons can have different lengths, so knowing the number of lessons does not determine the hours exactly.`],
      S`Not a function: the input x = 3 has two outputs, 4.5 and 5 (the line x = 3 meets two plotted points).`,
      plane({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 7 }, vlines: [{ x: 3, color: "red", dash: true }], points: [{ x: 1, y: 1.5, label: "(1, 1.5)" }, { x: 2, y: 3, label: "(2, 3)" }, { x: 3, y: 4.5, label: "(3, 4.5)", color: "red" }, { x: 3, y: 5, label: "(3, 5)", color: "red" }, { x: 4, y: 6, label: "(4, 6)" }], xlabel: "lessons", ylabel: "hours" })],

    ["Vertical-line test on three graphs", S`Use the vertical-line test to decide which graphs are functions: (a) the parabola \(y=-(x-1)^2+4\); (b) the circle \(x^2+y^2=9\); (c) the sideways parabola \(x=(y-1)^2-2\).`,
      [S`<b>Rule.</b> If some vertical line \(x=c\) meets a graph twice, the input \(c\) has two outputs, so the graph is not a function. If every vertical line meets it at most once, it is a function.`,
        S`<b>(a) Parabola opening down.</b> For each \(x\) the formula computes exactly one value \(-(x-1)^2+4\). Every vertical line therefore crosses it once. For example \(x=3\) gives only \(y=-(2)^2+4=0\). It <b>is</b> a function.`,
        S`<b>(b) Circle.</b> The line \(x=0\) meets the circle at \((0,\,3)\) and \((0,\,-3)\), because \(0^2+3^2=9\) and \(0^2+(-3)^2=9\). Two outputs for one input: <b>not</b> a function.`,
        S`<b>(c) Sideways parabola.</b> The line \(x=2\) needs \((y-1)^2=4\), so \(y-1=2\) or \(y-1=-2\), giving \(y=3\) or \(y=-1\). Two points, \((2,\,3)\) and \((2,\,-1)\): <b>not</b> a function.`,
        S`<b>Check the points.</b> \((2,\,3)\): \((3-1)^2-2=2\) ✓. \((2,\,-1)\): \((-1-1)^2-2=2\) ✓. Both really lie on the curve, so the test is valid.`],
      S`Only (a) is a function; the circle and the sideways parabola each fail at some vertical line (x = 0 and x = 2).`,
      plane({ view: { xmin: -4, xmax: 5, ymin: -4, ymax: 5 }, curves: [{ f: (x) => -((x - 1) ** 2) + 4, color: "violet" }, { f: (x) => Math.sqrt(Math.max(0, 9 - x * x)), a: -3, b: 3, color: "blue" }, { f: (x) => -Math.sqrt(Math.max(0, 9 - x * x)), a: -3, b: 3, color: "blue" }, ...side(-2, 1, "green")], vlines: [{ x: 2, color: "red", dash: true }], points: [{ x: 2, y: 3, label: "(2, 3)", color: "green" }, { x: 2, y: -1, label: "(2, −1)", color: "green" }] })],

    ["Deciding from an equation", S`Decide whether \(y\) is a function of \(x\): (a) \(y=x^2-3x\); (b) \(x=y^2+1\).`,
      [S`<b>Plan.</b> Solve the equation for \(y\). If some \(x\) produces two values of \(y\), it is not a function.`,
        S`<b>(a)</b> \(y=x^2-3x\) is already solved for \(y\). Substituting any \(x\) and following the order of operations gives one number. For example \(x=4\): \(y=4^2-3(4)=16-12=4\). There is no choice of sign anywhere, so (a) <b>is</b> a function.`,
        S`<b>(b) Solve for \(y\).</b> \(x=y^2+1\Rightarrow y^2=x-1\Rightarrow y=\pm\sqrt{x-1}\). The \(\pm\) means two outputs whenever \(x-1>0\).`,
        S`<b>Test one input.</b> Let \(x=5\): \(y^2=4\), so \(y=2\) or \(y=-2\). The points \((5,\,2)\) and \((5,\,-2)\) both satisfy \(x=y^2+1\), since \(2^2+1=5\) and \((-2)^2+1=5\). So (b) is <b>not</b> a function.`,
        S`<b>Check on the graph.</b> The graph of (b) is a parabola opening right; the line \(x=5\) cuts it twice ✓. The graph of (a) opens up and passes the test ✓`],
      S`(a) is a function; (b) is not, because x = 5 gives y = 2 and y = −2.`,
      plane({ view: { xmin: -2, xmax: 7, ymin: -4, ymax: 5 }, curves: [{ f: (x) => x * x - 3 * x, color: "violet" }, ...side(1, 0, "blue")], vlines: [{ x: 5, color: "red", dash: true }], points: [{ x: 5, y: 2, label: "(5, 2)", color: "blue" }, { x: 5, y: -2, label: "(5, −2)", color: "blue" }, { x: 4, y: 4, label: "(4, 4)", color: "violet" }] })],

    ["Which way round? A thrown ball", S`A ball is thrown upward. Its height is \(h=-5t^2+20t+1\) metres after \(t\) seconds. (a) Is \(h\) a function of \(t\)? (b) Is \(t\) a function of \(h\)? Use \(h=16\) to explain.`,
      [S`<b>(a) Input \(t\), output \(h\).</b> At each instant the ball is at exactly one height, and the formula gives one value for each \(t\). So \(h\) <b>is</b> a function of \(t\). For example \(t=1\): \(h=-5+20+1=16\).`,
        S`<b>(b) Input \(h\), output \(t\).</b> Ask when the height is \(16\) m: \(-5t^2+20t+1=16\Rightarrow -5t^2+20t-15=0\Rightarrow t^2-4t+3=0\).`,
        S`<b>Solve.</b> \(t^2-4t+3=(t-1)(t-3)=0\), so \(t=1\) or \(t=3\). Check \(t=3\): \(h=-5(9)+60+1=16\) ✓`,
        S`<b>Conclusion.</b> The height \(16\) m happens at two times, going up at \(t=1\) and coming down at \(t=3\). One input (\(h=16\)) has two outputs, so \(t\) is <b>not</b> a function of \(h\).`,
        S`<b>Graph check.</b> On the \(h\)–\(t\) graph, the horizontal line \(h=16\) meets the curve twice. That does not affect (a) (vertical lines meet once), but it is exactly the vertical-line failure when the axes are swapped ✓`],
      S`(a) yes: one height at each time; (b) no: h = 16 m occurs at t = 1 s and t = 3 s.`,
      plane({ view: { xmin: 0, xmax: 4.5, ymin: 0, ymax: 24 }, curves: [{ f: (t) => -5 * t * t + 20 * t + 1, a: 0, b: 4.05, color: "violet" }], lines: [{ m: 0, b: 16, color: "blue", dash: true }], points: [{ x: 1, y: 16, label: "(1, 16)", color: "amber" }, { x: 3, y: 16, label: "(3, 16)", color: "amber" }], step: { x: 1, y: 4 }, xlabel: "t (s)", ylabel: "h (m)" })],
  ]),

  practice([
    q("pairs", S`Is \(\{(0,\,4),\,(1,\,4),\,(2,\,4),\,(3,\,4)\}\) a function?`, choice(["Yes", "No"], 0), "Look for a repeated x-value, not a repeated y-value.", [S`The x-values \(0,1,2,3\) are all different, so each input has one output. Sharing the output \(4\) is allowed.`], S`Yes`),
    q("pairs", S`How many elements are in the range of \(\{(-2,\,3),\,(0,\,1),\,(2,\,3),\,(4,\,-1)\}\)?`, num(3), "List each output once.", [S`Range \(=\{-1,\,1,\,3\}\): three values.`], S`\(3\)`),
    q("equation", S`For \(x=y^2-4\), which \(y\)-values go with \(x=12\)?`, choice(["4 and −4", "4 only", "8 and −8", "140"], 0), "Solve y² = x + 4.", [S`\(y^2=16\Rightarrow y=\pm4\).`], S`\(\pm4\)`),
    q("graph", S`Which relation is <b>not</b> a function?`, choice(["y = 3x² − 2", "y = −4x + 1", "x² + y² = 25", "y = 7"], 2), "Which graph is cut twice by a vertical line?", [S`The circle \(x^2+y^2=25\) meets \(x=0\) at \(y=\pm5\).`], S`\(x^2+y^2=25\)`),
    q("context", S`Is a person's age a function of their height? Type yes or no.`, txt("no", "No", "NO"), "Can two people of the same height have different ages?", [S`Two people who are both 160 cm tall can be 14 and 40. One input, two outputs.`], S`no`),
  ]),

  ...hard([
    ["Make it a function", S`The relation \(R=\{(1,\,5),\,(k,\,2),\,(4,\,-1),\,(7,\,2)\}\) must be a function. Which values of \(k\) are <b>not</b> allowed? Then find the value of \(k\) that also makes the range have exactly two elements, if it exists.`,
      [S`<b>Function condition.</b> \(k\) must not equal an existing input that already has a different output. The inputs in use are \(1,\,4,\,7\) with outputs \(5,\,-1,\,2\).`,
        S`<b>Test each.</b> If \(k=1\): \((1,\,5)\) and \((1,\,2)\) clash, not allowed. If \(k=4\): \((4,\,-1)\) and \((4,\,2)\) clash, not allowed. If \(k=7\): \((7,\,2)\) appears twice, the same point, which is allowed.`,
        S`<b>Range.</b> The outputs are \(5,\,2,\,-1,\,2\), so the range is \(\{-1,\,2,\,5\}\) for every allowed \(k\): always three elements. No value of \(k\) gives exactly two.`],
      S`k ≠ 1 and k ≠ 4 (k = 7 is allowed); the range always has 3 elements, so no k gives exactly two`],
    ["Where does the test fail?", S`For the relation \(x=(y-2)^2-1\), find every input \(x\) that has exactly one output, and the outputs for \(x=8\).`,
      [S`<b>Solve for \(y\).</b> \((y-2)^2=x+1\Rightarrow y=2\pm\sqrt{x+1}\).`,
        S`<b>Count the outputs.</b> If \(x+1>0\) there are two values (\(\pm\) a positive root). If \(x+1=0\) the root is \(0\) and there is one value. If \(x+1<0\) there is none.`,
        S`<b>Exactly one output:</b> only \(x=-1\), giving \(y=2\) (the vertex \((-1,\,2)\)).`,
        S`<b>\(x=8\):</b> \(y=2\pm\sqrt9=2\pm3\), so \(y=5\) or \(y=-1\). Check: \((5-2)^2-1=8\) ✓ and \((-1-2)^2-1=8\) ✓`],
      S`only x = −1 has a single output (y = 2); x = 8 gives y = 5 and y = −1`,
      plane({ view: { xmin: -2, xmax: 10, ymin: -3, ymax: 7 }, curves: side(-1, 2), vlines: [{ x: 8, color: "red", dash: true }], points: [{ x: -1, y: 2, label: "(−1, 2)", color: "amber" }, { x: 8, y: 5, label: "(8, 5)", color: "red" }, { x: 8, y: -1, label: "(8, −1)", color: "red" }] })],
  ], [
    q("hard", S`How many outputs does \(x=9\) have in the relation \(x^2+y^2=100\)?`, num(2), "Solve y² = 100 − 81.", [S`\(y^2=19\Rightarrow y=\pm\sqrt{19}\): two outputs.`], S`\(2\)`),
    q("hard", S`\(\{(3,\,a),\,(a,\,6),\,(5,\,1)\}\) is a function for every value of \(a\) except two. Enter the sum of those two values.`, num(8), "The input a could equal 3 or 5.", [S`If \(a=3\): \((3,\,3)\) and \((3,\,6)\) clash. If \(a=5\): \((5,\,6)\) and \((5,\,1)\) clash. Any other \(a\) is fine.`, S`Sum \(=3+5=8\).`], S`\(8\)`),
    q("hard", S`For \(x=y^2-6y\), enter the smallest input \(x\) that has exactly one output.`, num(-9), "Complete the square: x = (y − 3)² − 9.", [S`\(x=(y-3)^2-9\), so only the vertex input \(x=-9\) gives one \(y\) (\(y=3\)).`], S`\(-9\)`),
    q("hard", S`For the relation \(x^2+(y-1)^2=25\), enter the larger output when \(x=3\).`, num(5), "(y − 1)² = 16.", [S`\((y-1)^2=25-9=16\Rightarrow y-1=\pm4\Rightarrow y=5\) or \(y=-3\).`], S`\(5\)`),
    q("hard", S`How many of these are functions: \(y=x^2-1\), \(x=y^2\), \(y=-4\), \(x=-4\), \(y=\sqrt{x}\)?`, num(3), "Solve each for y.", [S`Functions: \(y=x^2-1\), \(y=-4\), \(y=\sqrt x\). Not functions: \(x=y^2\) (gives \(\pm\)) and \(x=-4\) (vertical line).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Can a function have two inputs with the same output?", "Yes. y = x² gives 4 for both x = 2 and x = −2, and it is still a function."],
      ["Why does the vertical-line test work?", "All points on one vertical line share the same x; meeting the graph twice means one x has two y-values."],
      ["How do I test an equation?", "Solve for y. A ± sign (or two solutions for y) for some x means it is not a function."],
      ["Is a vertical line a function?", "No. x = 5 pairs the input 5 with every y-value."],
      ["Does the choice of input matter?", "Yes. Height is a function of time for a thrown ball, but time is not a function of height."],
    ],
    summary: [
      "A function gives exactly one output for each input.",
      "Repeated x with different y ⇒ not a function; repeated y is fine.",
      "Vertical-line test for graphs; solve for y for equations.",
      "Domain = all inputs, range = all outputs.",
    ],
    next: "1.2 introduces function notation f(x), a compact way to name a function and evaluate it.",
  }),
];
