// MHF4U 1.2 — Characteristics of Polynomial Functions: degree, leading coefficient, end behaviour, turning points,
// zeros, finite differences (nth differences = a·n!), and even/odd symmetry
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "1.2 Characteristics of Polynomial Functions";
export const ID = "61194a0a-05a6-4b94-a3ce-0d11562c8c1d";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔎",
    title: "Characteristics of Polynomial Functions",
    overview: S`A polynomial's equation tells you a lot about its graph before you plot a single point. The degree \(n\) limits the number of zeros (at most \(n\)) and turning points (at most \(n-1\)); the leading coefficient sets the end behaviour; a table of values with equal steps has constant \(n\)th differences equal to \(a\cdot n!\); and even or odd symmetry can be tested algebraically. In this lesson you will read all of these features and use them to identify, describe and sketch polynomial functions.`,
    goals: [
      "state the maximum number of zeros and turning points from the degree;",
      "use the degree and leading coefficient to describe end behaviour;",
      "use finite differences to find the degree and leading coefficient from a table;",
      "test whether a polynomial function is even, odd or neither;",
      "deduce the least possible degree and the sign of a from a graph.",
    ],
    curriculum: "C1.2, C1.3, C1.9 (compare representations using finite differences; describe key features; determine and compare properties of even and odd polynomial functions)",
    prior: [
      [S`End behaviour of \(y=-2x^4\)?`, S`Down at both ends.`],
      [S`\(4!=\)?`, S`\(24\).`],
      [S`Is \(y=x^2\) even or odd?`, S`Even.`],
    ],
    words: [
      ["Turning point", "where the graph changes from increasing to decreasing, or the reverse", ""],
      ["Local maximum / minimum", "a turning point higher / lower than nearby points", ""],
      ["Finite differences", "differences of successive y-values for equal x-steps", ""],
      ["Even function", "\\(f(-x)=f(x)\\): symmetric about the y-axis", ""],
      ["Odd function", "\\(f(-x)=-f(x)\\): symmetric about the origin", ""],
    ],
  }),

  section("📌 What the degree tells you", S`
  ${table(["Degree n", "Zeros (x-intercepts)", "Turning points", "Constant differences"], [
    ["1 (linear)", "exactly 1", "0", "first: \\(a\\)"],
    ["2 (quadratic)", "0 to 2", "1", "second: \\(2a\\)"],
    ["3 (cubic)", "1 to 3", "0 or 2", "third: \\(6a\\)"],
    ["4 (quartic)", "0 to 4", "1 or 3", "fourth: \\(24a\\)"],
    ["5 (quintic)", "1 to 5", "0, 2 or 4", "fifth: \\(120a\\)"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -6, ymax: 8 }, curves: [{ f: (x) => 0.25 * (x + 3) * (x + 1) * (x - 1) * (x - 3), color: "violet" }], points: [{ x: -3, y: 0, label: "", color: "red" }, { x: -1, y: 0, color: "red" }, { x: 1, y: 0, color: "red" }, { x: 3, y: 0, color: "red" }, { x: 0, y: 2.25, label: "local max", color: "blue" }, { x: 2.236, y: -4, label: "local min", color: "blue" }, { x: -2.236, y: -4, color: "blue" }], step: { x: 1, y: 2 } }, "A quartic with the most it can have: 4 zeros and 3 turning points.")}
  ${keyIdea(S`Degree \(n\): at most \(n\) zeros and at most \(n-1\) turning points. Odd degree: at least one zero, and the number of turning points is even. Even degree: the number of turning points is odd. For equally spaced x-values, the \(n\)th differences are constant and equal to \(a\cdot n!\) (times \(\Delta x^n\) if the step is not 1).`)}`),

  section("📌 Explore", S`<p>Choose cubic or quartic and change the coefficients. Watch the count of zeros and turning points, and check that the last row of the difference table stays constant at \(a\cdot n!\).</p>`),

  widget("polyFeatures", { init: [1, 0, -4, 0, 0] }),

  section("📌 Even and odd", S`
  <p>Replace \(x\) by \(-x\). If every term is unchanged, the function is <strong>even</strong> (all powers even, including constants). If every term changes sign, it is <strong>odd</strong> (all powers odd, no constant). A mixture is <strong>neither</strong>.</p>
  ${watchOut([
    "“At most n − 1 turning points” — a cubic can have none (y = x³).",
    "Finite differences need equal steps in x.",
    "A constant term breaks oddness: x³ + 1 is neither even nor odd.",
    "Even/odd is about symmetry of the whole graph, not about the degree alone: x⁴ + x is neither.",
    "The least possible degree from a graph is (turning points) + 1, and it must match the end behaviour.",
  ])}`),

  examples([
    ["Read the features", S`For \(f(x)=-2x^4+3x^3-x+5\), give the degree, leading coefficient, end behaviour, the maximum numbers of zeros and turning points, and the y-intercept.`,
      [S`Degree 4, \(a=-2\): even degree, negative: down at both ends.`, S`At most 4 zeros and 3 turning points; y-intercept \(f(0)=5\).`],
      S`degree 4; \(a=-2\); \(y\to-\infty\) at both ends; ≤ 4 zeros, ≤ 3 turning points; y-intercept 5`],
    ["Degree from a table", S`Find the degree and leading coefficient of the polynomial with values \(f(0)=0\), \(f(1)=1\), \(f(2)=14\), \(f(3)=51\), \(f(4)=124\), \(f(5)=245\).`,
      [S`First differences: \(1, 13, 37, 73, 121\). Second: \(12, 24, 36, 48\). Third: \(12, 12, 12\).`, S`Constant third differences: degree 3, and \(6a=12\Rightarrow a=2\).`],
      S`degree 3, \(a=2\) (in fact \(f(x)=2x^3-x\))`,
      plane({ view: { xmin: -0.5, xmax: 5.5, ymin: -10, ymax: 260 }, curves: [{ f: (x) => 2 * x ** 3 - x, color: "violet", a: -0.5, b: 5.2 }], points: [[0, 0], [1, 1], [2, 14], [3, 51], [4, 124], [5, 245]].map(([x, y]) => ({ x, y, color: "red" })), step: { x: 1, y: 50 } })],
    ["Even, odd or neither", S`Classify \(f(x)=x^4-3x^2\), \(g(x)=x^3+2x\) and \(h(x)=x^3+1\).`,
      [S`\(f(-x)=x^4-3x^2=f(x)\): even.`, S`\(g(-x)=-x^3-2x=-g(x)\): odd.`, S`\(h(-x)=-x^3+1\), which is neither \(h(x)\) nor \(-h(x)\): neither.`],
      S`even, odd, neither`,
      plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x ** 4 - 3 * x * x, color: "blue" }, { f: (x) => x ** 3 + 2 * x, color: "green" }], step: { x: 1, y: 1 } })],
    ["From a description", S`A polynomial has degree 5, a negative leading coefficient and 4 turning points. Describe its end behaviour and sketch a possible graph.`,
      [S`Odd degree, \(a\lt0\): rises to the left (Q2) and falls to the right (Q4).`, S`4 turning points is the maximum for degree 5, so the graph wiggles: down, up, down, up, down.`],
      S`Q2 → Q4 with 4 turning points (one possibility below)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -0.3 * (x + 2.5) * (x + 1.2) * x * (x - 1.3) * (x - 2.4), color: "violet" }], step: { x: 1, y: 1 } })],
    ["Least degree from a graph", S`The graph shown has 3 turning points and rises at both ends. What is the least possible degree, and the sign of the leading coefficient?`,
      [S`3 turning points need degree at least 4.`, S`Both ends up: even degree, positive leading coefficient. Degree 4 fits.`],
      S`least degree 4; \(a>0\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -6, ymax: 8 }, curves: [{ f: (x) => 0.2 * (x + 3) * (x + 1) * (x - 1) * (x - 3) + 1, color: "violet" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("turning points", S`What is the maximum number of turning points of a degree-5 polynomial?`, num(4),
      "n − 1.", [S`\(5-1=4\).`], S`\(4\)`),
    q("differences", S`A quartic's fourth differences (x-step 1) are all \(48\). Find the leading coefficient.`, num(2),
      "Δ⁴ = 24a.", [S`\(24a=48\).`], S`\(2\)`),
    q("symmetry", S`Is \(f(x)=x^5-4x\) even, odd or neither?`, choice(["odd", "even", "neither", "both"], 0),
      "Find f(−x).", [S`\(f(-x)=-x^5+4x=-f(x)\).`], "odd"),
    q("least degree", S`A graph has 3 turning points. What is the least possible degree?`, num(4),
      "Turning points + 1.", [S`\(3+1=4\).`], S`\(4\)`),
    q("intercept", S`Find the y-intercept of \(f(x)=3x^4-x+7\).`, num(7),
      "f(0).", [S`All terms with x vanish.`], S`\(7\)`),
  ]),

  ...hard([
    ["Leading coefficient from differences", S`A polynomial's values for \(x=0,1,2,3,4,5\) are \(4, 1, -14, -53, -128, -251\). Find its degree and leading coefficient.`,
      [S`First differences: \(-3,-15,-39,-75,-123\).`, S`Second: \(-12,-24,-36,-48\). Third: \(-12,-12,-12\).`, S`Degree 3 with \(6a=-12\Rightarrow a=-2\).`],
      S`degree 3, \(a=-2\)`],
    ["Odd functions pass through the origin", S`Prove that the graph of every odd polynomial function passes through \((0,0)\), and decide whether every odd function must have at least one other zero.`,
      [S`Odd means \(f(-x)=-f(x)\) for every \(x\). At \(x=0\): \(f(0)=-f(0)\), so \(2f(0)=0\) and \(f(0)=0\).`, S`Other zeros are not guaranteed: \(f(x)=x^3+x=x(x^2+1)\) is odd and has only the zero 0.`],
      S`always through the origin; not necessarily any other zero`,
      plane({ view: { xmin: -2, xmax: 2, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 3 + x, color: "green" }], points: [{ x: 0, y: 0, label: "(0, 0)" }], step: { x: 1, y: 1 } })],
  ], [
    q("hard", S`A quartic has fourth differences of \(72\) (x-step 1). Find \(a\).`, num(3),
      "24a.", [S`\(72\div24\).`], S`\(3\)`),
    q("hard", S`An even quartic has a positive leading coefficient and \(f(0)=-1\). What is the least number of x-intercepts it can have?`, num(2),
      "It starts below the axis at x = 0 and both ends go up.", [S`It must cross once on each side of the y-axis (by symmetry).`], S`\(2\)`),
    q("hard", S`For \(f(x)=-x^3+4x^2+1\), what are the third differences of a table with x-step 1?`, num(-6),
      "6a.", [S`\(6(-1)\).`], S`\(-6\)`),
  ]),

  wrapUp({
    qas: [
      ["Why can a polynomial of degree n have at most n zeros?", "Each zero r gives a factor (x − r); a polynomial of degree n cannot have more than n such factors."],
      ["Why at most n − 1 turning points?", "Between two turning points the graph must turn once; the shape of a degree-n polynomial allows at most n − 1 turns (in calculus, the derivative has degree n − 1)."],
      ["Where does a·n! come from?", "Taking differences lowers the degree by one each time and multiplies the leading coefficient by the degree: a → na → n(n−1)a → … → n!·a."],
      ["Can a polynomial be both even and odd?", "Only f(x) = 0. Any other polynomial has a term that is either unchanged or flipped, not both."],
      ["How do I find the least degree from a graph?", "Count turning points and add 1, then check the end behaviour (ends the same way → even degree; opposite → odd) and adjust if needed."],
    ],
    summary: [
      "Degree n: ≤ n zeros, ≤ n − 1 turning points.",
      "nth differences are constant: a·n!.",
      "Even: f(−x) = f(x); odd: f(−x) = −f(x).",
      "End behaviour from the degree and the sign of a.",
    ],
    next: "1.3 uses factored form to find zeros, their order, and sketch polynomial graphs.",
  }),
];
