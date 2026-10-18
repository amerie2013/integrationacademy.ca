// MCR3U 1.9 — Chapter 1 Review: functions, notation, parents, domain/range, inverses, transformations
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, expr, hard, plane } from "./lib.mjs";

export const TITLE = "1.9 Chapter 1 Review";
export const ID = "5c3e0001-0001-4001-8001-000000000109";

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 1 Review",
    overview: String.raw`This review pulls the chapter together. Work through the summary table, then the mixed examples, which each combine ideas from two or more lessons. Finish with the checked practice and the hard-level problems — they are at chapter-test level.`,
    goals: [
      "decide whether a relation is a function and use function notation;",
      "state domains and ranges, including restrictions and contexts;",
      "find and graph inverses, restricting the domain when needed;",
      "graph y = af(k(x − d)) + c for the five parents;",
      "solve multi-step problems that mix these skills.",
    ],
    curriculum: "A1.1–A1.9 (characteristics of functions: representing functions, domain and range, inverses, transformations of f(x) = x, x², √x, 1/x)",
    prior: [
      ["Which test tells you a graph is a function?", "The vertical-line test."],
      [String.raw`What is the mapping rule for \(y=af(k(x-d))+c\)?`, String.raw`\((x,y)\to\left(\frac xk+d,\ ay+c\right)\).`],
      [String.raw`How do you find \(f^{-1}\) algebraically?`, "Swap x and y, then solve for y."],
    ],
    words: [
      ["1.1–1.2", "function, vertical-line test, f(a), solving f(x) = v", ""],
      ["1.3–1.4", "parents, domain and range, restrictions", ""],
      ["1.5", "inverse, reflection in y = x", ""],
      ["1.6–1.8", "a, k, d, c and the mapping rule", ""],
    ],
  }),

  section("📌 The chapter on one page", String.raw`
  ${table(["Skill", "Key fact", "Quick check"], [
    ["Function?", "one output per input", "vertical-line test"],
    ["\\(f(a)\\)", "substitute a for every x", "point \\((a,f(a))\\) is on the graph"],
    ["Domain", "roots: inside \\(\\ge0\\); denominators \\(\\ne0\\); context", "shadow on the x-axis"],
    ["Range", "vertex / starting point / asymptote", "shadow on the y-axis"],
    ["Inverse", "swap x and y; reflect in \\(y=x\\)", "\\(f(f^{-1}(x))=x\\)"],
    ["Transformations", "\\((x,y)\\to(\\frac xk+d,\\ ay+c)\\)", "substitute an image point"],
  ])}
  ${keyIdea("Most chapter-test questions combine two ideas: a transformation and its domain/range, an inverse and a restriction, or a context and function notation.")}`),

  section("📌 Explore", String.raw`<p>Use the explorer to check your sketches in the examples and the hard-level problems.</p>`),

  widget("funcTransform", { parent: "recip", show: ["a", "k", "d", "c"], init: { a: 2, k: 1, d: -2, c: 1 } }),

  examples([
    ["Function and notation", String.raw`\(g(x)=\frac{12}{x-1}\). Is \(g\) a function? Find \(g(5)\) and solve \(g(x)=-4\).`,
      [String.raw`Each \(x\ne1\) gives one output: a function.`, String.raw`\(g(5)=\frac{12}{4}=3\).`, String.raw`\(\frac{12}{x-1}=-4\Rightarrow x-1=-3\Rightarrow x=-2\).`],
      String.raw`\(g(5)=3\); \(x=-2\)`],
    ["Domain and range from a transformation", String.raw`State the domain and range of \(y=-3\sqrt{x+2}+5\) and sketch it.`,
      [String.raw`Start point \((-2,5)\); \(a=-3\) reflects downward.`, String.raw`\((1,1)\to(-1,2)\), \((4,2)\to(2,-1)\).`],
      String.raw`domain \(x\ge-2\), range \(y\le5\)`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -5, ymax: 7 }, curves: [{ f: (x) => -3 * Math.sqrt(x + 2) + 5, a: -2, color: "green" }], points: [{ x: -2, y: 5, label: "(−2, 5)" }, { x: -1, y: 2, label: "(−1, 2)" }, { x: 2, y: -1, label: "(2, −1)" }], step: { x: 1, y: 1 } })],
    ["Inverse with a restriction", String.raw`\(f(x)=(x+4)^2-3\) for \(x\ge-4\). Find \(f^{-1}\), its domain and range.`,
      [String.raw`Swap: \(x=(y+4)^2-3\Rightarrow y=-4+\sqrt{x+3}\) (positive root since \(y\ge-4\)).`, String.raw`Domain of \(f^{-1}\) = range of \(f\): \(x\ge-3\); range \(y\ge-4\).`],
      String.raw`\(f^{-1}(x)=-4+\sqrt{x+3}\), domain \(x\ge-3\), range \(y\ge-4\)`],
    ["Equation from a graph", "A parabola has vertex (3, −2) and passes through (5, 6). Describe it as a transformation of y = x² and write its equation.",
      [String.raw`\(y=a(x-3)^2-2\); \(6=4a-2\Rightarrow a=2\).`, "Vertical stretch by 2, then 3 right and 2 down."],
      String.raw`\(y=2(x-3)^2-2\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: -3, ymax: 9 }, curves: [{ f: (x) => 2 * (x - 3) ** 2 - 2, color: "blue" }], points: [{ x: 3, y: -2, label: "(3, −2)" }, { x: 5, y: 6, label: "(5, 6)" }], step: { x: 1, y: 1 } })],
    ["A context", String.raw`A pool drains so that the water depth is \(D(t)=0.002(t-30)^2\) metres after \(t\) minutes, until it is empty. Find a sensible domain and range, \(D(10)\), and when the depth is 0.2 m.`,
      [String.raw`Empty when \(D=0\): \(t=30\). Domain \(0\le t\le30\); \(D(0)=0.002(900)=1.8\), so range \(0\le D\le1.8\).`, String.raw`\(D(10)=0.002(400)=0.8\).`, String.raw`\(0.002(t-30)^2=0.2\Rightarrow(t-30)^2=100\Rightarrow t=20\) (\(t=40\) is outside the domain).`],
      String.raw`domain \(0\le t\le30\), range \(0\le D\le1.8\); \(D(10)=0.8\); \(t=20\) min`],
  ]),

  practice([
    q("function test", String.raw`How many of these are functions: \(y=x^2-1\), \(x^2+y^2=4\), \(y=\sqrt x\), \(x=y^2\)?`, num(2),
      "Solve each for y.", [String.raw`The circle and \(x=y^2\) give \(\pm\).`], String.raw`\(2\)`),
    q("notation", String.raw`For \(f(x)=2x^2-3x\), find \(f(-2)\).`, num(14),
      "Square first.", [String.raw`\(8+6\).`], String.raw`\(14\)`),
    q("domain", String.raw`What is the excluded value of \(y=\frac{4}{2x+5}\)?`, num(-2.5),
      "Denominator = 0.", [String.raw`\(2x+5=0\).`], String.raw`\(-2.5\)`),
    q("inverse", String.raw`Find \(f^{-1}(x)\) for \(f(x)=5x-2\).`, expr("(x+2)/5"),
      "Add 2, then divide by 5.", [String.raw`Swap: \(x=5y-2\Rightarrow y=\frac{x+2}{5}\).`], String.raw`\(f^{-1}(x)=\frac{x+2}{5}\)`),
    q("transformation", String.raw`Which equation is \(y=|x|\) stretched vertically by 2, then translated 1 left and 3 down?`, choice([String.raw`\(y=2|x+1|-3\)`, String.raw`\(y=2|x-1|-3\)`, String.raw`\(y=|2x+1|-3\)`, String.raw`\(y=2|x+1|+3\)`], 0),
      "Left 1 means x + 1.", [String.raw`\(a=2\), \(d=-1\), \(c=-3\).`], String.raw`\(y=2|x+1|-3\)`),
  ]),

  ...hard([
    ["Transformation, inverse and domain together", String.raw`\(g(x)=\tfrac12(x-2)^2+1\) for \(x\le2\). (a) Describe \(g\) as a transformation of \(y=x^2\). (b) Find \(g^{-1}\). (c) Where do \(g\) and \(g^{-1}\) meet?`,
      [String.raw`(a) Vertical compression by \(\tfrac12\), then 2 right and 1 up (left half of the parabola).`, String.raw`(b) Swap: \(x=\tfrac12(y-2)^2+1\Rightarrow(y-2)^2=2(x-1)\Rightarrow y=2-\sqrt{2(x-1)}\) (minus, since \(y\le2\)).`, String.raw`(c) A common point \((p,q)\) needs \(g(p)=q\) and \(g(q)=p\). Subtracting gives \(p=q\) or \(p+q=2\); since \(p,q\ge1\) (the range of \(g\)) and \(g(1)=1.5\ne1\), the second is impossible, so the point is on \(y=x\).`, String.raw`Solve \(\tfrac12(x-2)^2+1=x\Rightarrow x^2-6x+6=0\Rightarrow x=3-\sqrt3\approx1.27\) (the root \(3+\sqrt3\) is outside \(x\le2\)).`],
      String.raw`\(g^{-1}(x)=2-\sqrt{2(x-1)}\); they meet on \(y=x\) at \(x=3-\sqrt3\approx1.27\)`],
    ["Reading parameters from two graphs", String.raw`The graph of \(y=f(x)\) has a vertex at \((1,4)\) and an x-intercept at \(3\). Find the vertex and x-intercepts of \(y=-2f(3x)+8\).`,
      [String.raw`Mapping \((x,y)\to\left(\tfrac x3,\ -2y+8\right)\).`, String.raw`Vertex \((1,4)\to\left(\tfrac13,\ 0\right)\).`, String.raw`The new x-intercepts need \(-2y+8=0\Rightarrow y=4\): the only original point with \(y=4\) is the vertex, so the image touches the x-axis once, at \(x=\tfrac13\).`],
      String.raw`vertex \(\left(\tfrac13,0\right)\); one x-intercept, \(\tfrac13\)`],
  ], [
    q("hard", String.raw`\(f(x)=\sqrt{x}\). The graph of \(y=a\sqrt{x-d}+c\) starts at \((-1,2)\) and passes through \((8,-4)\). Find \(a\).`, num(-2),
      "d and c come from the starting point.", [String.raw`\(-4=a\sqrt9+2\Rightarrow3a=-6\).`], String.raw`\(-2\)`),
    q("hard", String.raw`\(f\) has range \(y\ge-3\). What is the smallest value in the range of \(y=4f(2x-1)+5\)?`, num(-7),
      "Only a and c affect the range.", [String.raw`\(4(-3)+5\).`], String.raw`\(-7\)`),
    q("hard", String.raw`\(h(t)=-5(t-2)^2+45\) is a ball's height (m). For how many seconds is the ball at least 25 m high?`, num(4),
      "Solve h(t) = 25 and find the time between the two answers.", [String.raw`\((t-2)^2=4\Rightarrow t=0\) or \(t=4\).`], String.raw`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["What should I memorise?", "The five parents' key points, the mapping rule, and the root/denominator restrictions. Everything else can be derived."],
      ["How do I avoid sign mistakes with d?", "Factor k, then set the inside bracket to zero: that x-value is d."],
      ["When is an inverse not a function?", "When f is not one-to-one, e.g. a whole parabola. Restrict to one side of the vertex."],
      ["What makes a domain 'sensible' in a context?", "Values that can really happen: time from start to finish, non-negative lengths, whole numbers of items."],
      ["How should I study for the test?", "Redo the hard-level problems from each lesson without looking, then check with the explorers."],
    ],
    summary: [
      "Functions: one output per input; notation f(a).",
      "Domain/range: restrictions from roots, denominators and context.",
      "Inverses: swap, reflect in y = x, restrict if needed.",
      "Transformations: (x, y) → (x/k + d, ay + c).",
    ],
    next: "Chapter 2 works with equivalent algebraic expressions.",
  }),
];
