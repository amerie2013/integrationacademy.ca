// MCR3U 3.1 — Properties of Quadratic Functions: three forms, key features, finite differences, equations from data
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "3.1 Properties of Quadratic Functions";
export const ID = "86be9ac3-74ad-4633-a1c5-6d524db9f097";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "⛰️",
    title: "Properties of Quadratic Functions",
    overview: S`A quadratic function can be written in standard form \(f(x)=ax^2+bx+c\), vertex form \(f(x)=a(x-h)^2+k\) or factored form \(f(x)=a(x-r)(x-s)\). Each form shows some features at a glance. In this lesson you will read the vertex, axis, zeros, y-intercept, direction of opening, domain and range from each form, use finite differences to recognise a quadratic, and find the equation from a graph or a table.`,
    goals: [
      "identify the key features of a quadratic function in each of its three forms;",
      "state the domain, range and maximum or minimum value;",
      "use second differences to recognise a quadratic and find a;",
      "move between forms to answer a question;",
      "determine the equation of a quadratic function from a graph or table.",
    ],
    curriculum: "A1.2 (represent quadratic functions using function notation, from equations, tables and graphs), A2.2 (determine the maximum or minimum of a quadratic function)",
    prior: [
      [S`Expand \(-2(x-3)^2+5\).`, S`\(-2x^2+12x-13\).`],
      [S`Factor \(x^2-2x-15\).`, S`\((x-5)(x+3)\).`],
      [S`What is halfway between \(-3\) and \(7\)?`, S`\(2\).`],
    ],
    words: [
      ["Vertex", "the turning point \\((h,k)\\)", "\\((3,-8)\\)"],
      ["Axis of symmetry", "the vertical line \\(x=h\\) through the vertex", "\\(x=3\\)"],
      ["Zeros", "x-values where \\(f(x)=0\\)", "\\(x=1,\\ x=5\\)"],
      ["Second differences", "differences of the first differences; constant for a quadratic", "\\(2a\\) when x steps by 1"],
    ],
  }),

  section("📌 Three forms, three views", S`
  ${table(["Form", "Shows directly", "Example: the same parabola"], [
    ["factored \\(a(x-r)(x-s)\\)", "zeros \\(r\\), \\(s\\); axis \\(x=\\frac{r+s}2\\)", "\\(f(x)=2(x-1)(x-5)\\)"],
    ["vertex \\(a(x-h)^2+k\\)", "vertex \\((h,k)\\); max/min \\(k\\)", "\\(f(x)=2(x-3)^2-8\\)"],
    ["standard \\(ax^2+bx+c\\)", "y-intercept \\(c\\); axis \\(x=-\\frac b{2a}\\)", "\\(f(x)=2x^2-12x+10\\)"],
  ])}
  ${keyIdea(S`In every form, \(a\) tells the direction: \(a>0\) opens up (a minimum), \(a<0\) opens down (a maximum). The domain is always \(\mathbb R\); the range is \(y\ge k\) or \(y\le k\).`)}`),

  section("📌 Explore", S`<p>Move the zeros and \(a\). All three forms update together; the table shows that the second differences are always \(2a\).</p>`),

  widget("quadForms", { init: [1, -1, 3] }),

  section("📌 Finite differences", S`
  <p>For x-values one unit apart, a quadratic has constant <em>second</em> differences equal to \(2a\). A linear function has constant first differences; an exponential has a constant ratio.</p>
  ${table(["x", "0", "1", "2", "3", "4"], [["y", "3", "2", "5", "12", "23"], ["1st diff.", "", "−1", "3", "7", "11"], ["2nd diff.", "", "", "4", "4", "4"]])}
  <p>Second difference 4, so \(2a=4\), \(a=2\). The y-intercept is \(c=3\). Then \(f(1)=2+b+3=2\) gives \(b=-3\): \(f(x)=2x^2-3x+3\).</p>
  ${watchOut([
    "In vertex form the sign inside is opposite: a(x − 3)² has its vertex at x = 3.",
    "The axis is halfway between the zeros — average them.",
    "Second differences equal 2a only when the x-values go up by 1.",
    "A parabola with no zeros has no factored form (over the real numbers).",
  ])}`),

  examples([
    ["Vertex form", S`State the key features of \(f(x)=2(x-3)^2-8\).`,
      [S`Vertex \((3,-8)\), axis \(x=3\), \(a=2>0\): opens up, minimum \(-8\).`, S`y-intercept: \(f(0)=2(9)-8=10\).`, S`Zeros: \((x-3)^2=4\Rightarrow x-3=\pm2\Rightarrow x=1\) or \(x=5\).`],
      S`domain \(\mathbb R\), range \(y\ge-8\); zeros 1 and 5; y-intercept 10`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -9, ymax: 11 }, curves: [{ f: (x) => 2 * (x - 3) ** 2 - 8, color: "violet" }], points: [{ x: 3, y: -8, label: "(3, −8)" }, { x: 1, y: 0, label: "(1, 0)" }, { x: 5, y: 0, label: "(5, 0)" }, { x: 0, y: 10, label: "(0, 10)", color: "green" }], step: { x: 1, y: 2 } })],
    ["Factored form", S`State the key features of \(f(x)=-(x+1)(x-5)\).`,
      [S`Zeros \(-1\) and \(5\); axis \(x=\frac{-1+5}2=2\).`, S`\(f(2)=-(3)(-3)=9\): vertex \((2,9)\), a maximum since \(a=-1\).`, S`\(f(0)=-(1)(-5)=5\).`],
      S`vertex \((2,9)\), max 9, range \(y\le9\), y-intercept 5`],
    ["Standard form", S`Find the zeros and vertex of \(f(x)=x^2-6x+5\).`,
      [S`Factor: \((x-1)(x-5)\): zeros 1 and 5.`, S`Axis \(x=3\); \(f(3)=9-18+5=-4\).`],
      S`zeros 1, 5; vertex \((3,-4)\)`],
    ["From a table", S`Find the quadratic through \((0,3),(1,2),(2,5),(3,12),(4,23)\).`,
      [S`Second differences are 4, so \(a=2\); \(c=f(0)=3\).`, S`\(f(1)=2+b+3=2\Rightarrow b=-3\). Check \(f(4)=32-12+3=23\) ✓.`],
      S`\(f(x)=2x^2-3x+3\)`],
    ["From a graph", "A parabola has zeros −4 and 2 and y-intercept −4. Find its equation.",
      [S`\(f(x)=a(x+4)(x-2)\).`, S`\(f(0)=a(4)(-2)=-8a=-4\Rightarrow a=\tfrac12\).`],
      S`\(f(x)=\tfrac12(x+4)(x-2)\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -6, ymax: 4 }, curves: [{ f: (x) => 0.5 * (x + 4) * (x - 2), color: "violet" }], points: [{ x: -4, y: 0, label: "(−4, 0)" }, { x: 2, y: 0, label: "(2, 0)" }, { x: 0, y: -4, label: "(0, −4)", color: "green" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("vertex form", S`What is the maximum value of \(f(x)=-3(x-2)^2+7\)?`, num(7),
      "a < 0, so the vertex is the top.", [S`Vertex \((2,7)\).`], S`\(7\)`),
    q("factored form", S`What is the axis of symmetry of \(f(x)=(x+6)(x-2)\)? Enter the x-value.`, num(-2),
      "Average the zeros.", [S`\(\frac{-6+2}{2}\).`], S`\(x=-2\)`),
    q("y-intercept", S`Find the y-intercept of \(f(x)=4(x-1)^2-9\).`, num(-5),
      "Evaluate f(0).", [S`\(4(1)-9\).`], S`\(-5\)`),
    q("differences", S`What is the constant second difference of \(f(x)=-3x^2+x\) (x-values 1 apart)?`, num(-6),
      "It equals 2a.", [S`\(2(-3)\).`], S`\(-6\)`),
    q("forms", "Which form shows the zeros directly?", choice(["factored form", "vertex form", "standard form", "none"], 0),
      "Which form has factors equal to 0?", [S`\(a(x-r)(x-s)=0\) at \(r\) and \(s\).`], "factored form"),
  ]),

  ...hard([
    ["All three forms from two facts", S`A parabola has zeros \(-3\) and \(7\) and a maximum value of 10. Write it in factored, vertex and standard form.`,
      [S`Axis \(x=2\); the vertex is \((2,10)\).`, S`\(f(x)=a(x+3)(x-7)\): \(f(2)=a(5)(-5)=-25a=10\Rightarrow a=-0.4\).`, S`Vertex form \(-0.4(x-2)^2+10\); standard form \(-0.4(x^2-4x-21)=-0.4x^2+1.6x+8.4\).`],
      S`\(-0.4(x+3)(x-7)=-0.4(x-2)^2+10=-0.4x^2+1.6x+8.4\)`,
      plane({ view: { xmin: -5, xmax: 9, ymin: -4, ymax: 12 }, curves: [{ f: (x) => -0.4 * (x + 3) * (x - 7), color: "violet" }], points: [{ x: 2, y: 10, label: "(2, 10)" }, { x: -3, y: 0, label: "(−3, 0)" }, { x: 7, y: 0, label: "(7, 0)" }], step: { x: 1, y: 2 } })],
    ["Three points, no zeros", S`A quadratic passes through \((-1,9)\), \((0,4)\) and \((1,3)\). Find it, its vertex, and explain why it has no zeros.`,
      [S`\(c=4\); \(a-b+4=9\) and \(a+b+4=3\). Adding: \(2a+8=12\Rightarrow a=2\), \(b=-3\).`, S`Axis \(x=\frac34\); \(f(\tfrac34)=2(\tfrac9{16})-\tfrac94+4=2.875\).`, S`It opens up and its lowest point is above the x-axis, so it never reaches 0.`],
      S`\(f(x)=2x^2-3x+4\), vertex \((0.75,\ 2.875)\), no zeros`],
  ], [
    q("hard", S`\(f(x)=a(x-1)(x-9)\) passes through \((5,32)\). Find \(a\).`, num(-2),
      "Substitute the point.", [S`\(a(4)(-4)=-16a=32\).`], S`\(-2\)`),
    q("hard", S`A quadratic table uses x-values 2 apart and its second differences are 16. Find \(a\).`, num(2),
      "With step h, the second difference is 2ah².", [S`\(2a(2)^2=8a=16\).`], S`\(2\)`),
    q("hard", S`\(f(x)=x^2+bx+11\) has axis \(x=3\). What is its minimum value?`, num(2),
      "−b/2 = 3 gives b.", [S`\(b=-6\); \(f(3)=9-18+11\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Which form should I use?", "The one that answers the question: zeros → factored, max/min → vertex, y-intercept or a table → standard."],
      ["How can I find the vertex from standard form?", "Use x = −b/(2a), then substitute. Or complete the square (3.2)."],
      ["Why are second differences constant?", "Each first difference grows by the same amount because the slope of a parabola changes at a constant rate."],
      ["Can a quadratic have one zero?", "Yes — when the vertex is on the x-axis, e.g. (x − 4)²."],
      ["Is the domain ever restricted?", "Not for the function itself, but a context (time, length) can restrict it."],
    ],
    summary: [
      "Factored form: zeros; vertex form: vertex; standard form: y-intercept.",
      "a > 0 minimum, a < 0 maximum; range starts at k.",
      "Axis = average of the zeros = −b/(2a).",
      "Second differences = 2a (x-steps of 1).",
    ],
    next: "3.2 finds maximum and minimum values algebraically and uses them to solve optimisation problems.",
  }),
];
