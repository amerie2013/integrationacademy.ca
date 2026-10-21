// IB AA SL 4.1 — The Reciprocal Function: y = k/x, asymptotes, domain and range, symmetry and self-inverse, inverse variation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "4.1 The Reciprocal Function";
export const ID = "1baa0004-0001-4001-8001-000000000401";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
/** a hyperbola y = f(x) drawn as two branches either side of the vertical asymptote x = h */
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const AX = [{ x: 0, color: "red", dash: true }];
const HZ = (k) => [{ m: 0, b: k, color: "red", dash: true }];

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "The Reciprocal Function",
    overview: S`The reciprocal function \(f(x)=\frac1x\) turns every number into its reciprocal. Its graph, a hyperbola, never meets either axis: the axes are asymptotes, lines the curve approaches but never reaches. In this lesson you will sketch \(y=\frac kx\), state its domain and range, see why it is its own inverse, and use it to model quantities that vary inversely, where doubling one halves the other.`,
    goals: [
      "sketch \\(y=\\frac kx\\) for positive and negative \\(k\\) and label its asymptotes;",
      "state the domain and range of the reciprocal function;",
      "describe the behaviour of \\(\\frac1x\\) as \\(x\\) approaches 0 and as \\(x\\) becomes large;",
      "show that \\(f(x)=\\frac kx\\) is self-inverse and symmetric in \\(y=x\\) and \\(y=-x\\);",
      "model inverse variation \\(xy=k\\) and find the constant from data.",
    ],
    curriculum: "SL 2.8 (the reciprocal function f(x) = 1/x, x ≠ 0: its graph and self-inverse nature; vertical and horizontal asymptotes)",
    prior: [
      [S`Find the reciprocal of \(\frac25\) and of \(-4\).`, S`\(\frac52\) and \(-\frac14\).`],
      [S`Find \(f^{-1}(x)\) for \(f(x)=3x\).`, S`\(\frac x3\).`],
      [S`What does reflecting a graph in \(y=x\) do to a point \((a,b)\)?`, S`It sends it to \((b,a)\).`],
    ],
    words: [
      ["Reciprocal function", "\\(f(x)=\\frac1x\\), \\(x\\ne0\\)", "\\(f(4)=0.25\\)"],
      ["Hyperbola", "the two-branch graph of \\(y=\\frac kx\\)", "branches in quadrants 1 and 3"],
      ["Asymptote", "a line the graph approaches but never meets", "\\(x=0\\), \\(y=0\\)"],
      ["Self-inverse", "\\(f^{-1}=f\\); the graph is symmetric in \\(y=x\\)", "\\(\\frac1{1/x}=x\\)"],
      ["Inverse variation", "\\(y=\\frac kx\\), i.e. \\(xy=k\\) is constant", "speed × time = distance"],
    ],
  }),

  section("📌 The graph of y = 1/x", S`
  <p>Plot a few points: \(x=\frac12,1,2,4\) give \(y=2,1,\frac12,\frac14\). As \(x\) grows, \(\frac1x\) shrinks towards 0 but never reaches it; as \(x\) approaches 0 from the right, \(\frac1x\) grows without bound. Negative \(x\) give negative \(y\), so the second branch sits in the third quadrant.</p>
  ${table(["x", "−4", "−1", "−0.5", "0.5", "1", "4"], [["1/x", "−0.25", "−1", "−2", "2", "1", "0.25"]])}
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 }, curves: hyp((x) => 1 / x, 0, -6, 6), vlines: AX, lines: HZ(0), points: [P(1, 1, "(1, 1)"), P(-1, -1, "(−1, −1)"), P(0.5, 2, "(0.5, 2)", "green"), P(4, 0.25, "(4, 0.25)", "green")] }, "y = 1/x: asymptotes x = 0 and y = 0 (dashed)")}
  ${keyIdea(S`For \(f(x)=\frac1x\): domain \(x\ne0\), range \(y\ne0\). Vertical asymptote \(x=0\), horizontal asymptote \(y=0\). As \(x\to\pm\infty\), \(y\to0\); as \(x\to0\), \(|y|\to\infty\).`)}`),

  section("📌 y = k/x, symmetry and inverse variation", S`
  <p>Multiplying by \(k\) stretches the hyperbola vertically. For \(k>0\) the branches lie in quadrants 1 and 3; for \(k<0\) they flip into quadrants 2 and 4. Every point \((x,y)\) on \(y=\frac kx\) satisfies \(xy=k\): the rectangle from the origin to the point always has the same area \(|k|\).</p>
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 }, curves: [...hyp((x) => 4 / x, 0, -6, 6), ...hyp((x) => -2 / x, 0, -6, 6, "green")], vlines: AX, lines: HZ(0), points: [P(2, 2, "(2, 2)"), P(1, -2, "(1, −2)", "green")] }, "y = 4/x (violet, quadrants 1 and 3) and y = −2/x (green, quadrants 2 and 4)")}
  <p>Swapping \(x\) and \(y\) in \(y=\frac kx\) gives \(x=\frac ky\), which rearranges to \(y=\frac kx\) again: the function is <em>self-inverse</em>, so its graph is symmetric in the line \(y=x\) (and also in \(y=-x\)).</p>
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, step: { x: 1, y: 1 }, curves: [...hyp((x) => 3 / x, 0, -6, 6), { f: (x) => x, color: "gray" }, { f: (x) => -x, color: "gray" }], points: [P(1, 3, "(1, 3)"), P(3, 1, "(3, 1)", "green"), P(Math.sqrt(3), Math.sqrt(3), "(√3, √3)", "amber")] }, "y = 3/x: (1, 3) and (3, 1) are mirror images in y = x")}
  ${plane({ view: { xmin: -0.5, xmax: 13, ymin: -0.5, ymax: 13 }, step: { x: 1, y: 1 }, curves: [{ f: (t) => 12 / t, a: 0.9, b: 13, color: "violet" }], points: [P(2, 6, "(2, 6)"), P(4, 3, "(4, 3)"), P(6, 2, "(6, 2)")], xlabel: "workers", ylabel: "days" }, "Inverse variation: 12 worker-days of work — double the workers, half the days")}
  ${watchOut([
    "0 is not in the domain: never substitute x = 0 into 1/x.",
    "The curve gets closer and closer to an asymptote but never touches or crosses it.",
    "k < 0 moves the branches to quadrants 2 and 4; it does not move the asymptotes.",
    "In a model, only the branch with sensible (usually positive) values is used.",
  ])}`),

  section("📌 Explore", S`<p>Change \(k\) and move the point. The amber rectangle keeps the same area \(|k|\); switch to the lines of symmetry to see the reflected point land on the curve.</p>`),

  widget("ibReciprocal", { init: [6, 2] }),

  examples([
    ["Level 1 · Values and the graph", S`For \(f(x)=\frac6x\), find \(f(3)\), \(f(-2)\) and \(f(0.5)\), and state the domain and range.`,
      [S`\(f(3)=2\), \(f(-2)=-3\), \(f(0.5)=12\).`, S`Domain \(x\ne0\); range \(y\ne0\).`],
      S`\(2,\ -3,\ 12\); \(x\ne0\), \(y\ne0\)`,
      plane({ view: { xmin: -7, xmax: 7, ymin: -7, ymax: 13 }, step: { x: 1, y: 2 }, curves: hyp((x) => 6 / x, 0, -7, 7), vlines: AX, lines: HZ(0), points: [P(3, 2, "(3, 2)"), P(-2, -3, "(−2, −3)"), P(0.5, 12, "(0.5, 12)", "green")] })],
    ["Level 1 · Which quadrants?", S`Sketch \(y=-\frac5x\) and state which quadrants its branches lie in.`,
      [S`\(k=-5<0\): positive \(x\) give negative \(y\).`, S`Points \((1,-5)\), \((5,-1)\), \((-1,5)\), \((-5,1)\).`],
      "quadrants 2 and 4",
      plane({ view: { xmin: -7, xmax: 7, ymin: -7, ymax: 7 }, step: { x: 1, y: 1 }, curves: hyp((x) => -5 / x, 0, -7, 7), vlines: AX, lines: HZ(0), points: [P(1, -5, "(1, −5)"), P(-5, 1, "(−5, 1)")] })],
    ["Level 2 · Finding k", S`The graph of \(y=\frac kx\) passes through \((-4,2.5)\). Find \(k\) and the value of \(y\) when \(x=5\).`,
      [S`\(k=xy=(-4)(2.5)=-10\).`, S`\(y=\frac{-10}{5}=-2\).`],
      S`\(k=-10\); \(y=-2\)`],
    ["Level 2 · Self-inverse", S`Show that \(f(x)=\frac8x\) is self-inverse, and find the points where its graph meets \(y=x\).`,
      [S`Swap: \(x=\frac8y\Rightarrow y=\frac8x\), so \(f^{-1}=f\).`, S`\(\frac8x=x\Rightarrow x^2=8\Rightarrow x=\pm2\sqrt2\).`],
      S`\((2\sqrt2,2\sqrt2)\) and \((-2\sqrt2,-2\sqrt2)\)`],
    ["Level 3 · Inverse variation", S`The time \(t\) hours for a journey varies inversely with the speed \(v\) km/h. At 60 km/h it takes 2.5 h. Find the model, the time at 75 km/h, and the speed needed to finish in 1.5 h.`,
      [S`\(t=\frac kv\) with \(k=60\times2.5=150\) (the distance).`, S`\(t=\frac{150}{75}=2\) h.`, S`\(1.5=\frac{150}{v}\Rightarrow v=100\) km/h.`],
      S`\(t=\frac{150}{v}\); 2 h; 100 km/h`,
      plane({ view: { xmin: -5, xmax: 130, ymin: -0.3, ymax: 6 }, step: { x: 10, y: 0.5 }, curves: [{ f: (v) => 150 / v, a: 25, b: 130, color: "violet" }], points: [P(60, 2.5, "(60, 2.5)"), P(75, 2, "(75, 2)", "green"), P(100, 1.5, "(100, 1.5)", "amber")], xlabel: "v", ylabel: "t" })],
  ]),

  practice([
    q("Level 1 · evaluate", S`For \(f(x)=\frac{12}{x}\), find \(f(-3)\).`, num(-4),
      "Divide 12 by −3.", [S`\(\frac{12}{-3}=-4\).`], S`\(-4\)`),
    q("Level 1 · asymptote", S`What is the horizontal asymptote of \(y=\frac{7}{x}\)? Give the value of \(y\).`, num(0),
      "What does 7/x approach for large x?", [S`\(\frac7x\to0\).`], S`\(y=0\)`),
    q("Level 2 · find k", S`\(y=\frac kx\) passes through \((3,-6)\). Find \(k\).`, num(-18),
      "k = xy.", [S`\(3\times(-6)\).`], S`\(-18\)`),
    q("Level 2 · quadrants", S`The branches of \(y=-\frac{3}{x}\) lie in quadrants:`, choice(["2 and 4", "1 and 3", "1 and 2", "3 and 4"], 0),
      "Try x = 1.", [S`\(x=1\) gives \(y=-3\): quadrant 4.`], "2 and 4"),
    q("Level 2 · inverse variation", S`\(y\) varies inversely with \(x\), and \(y=9\) when \(x=4\). Find \(y\) when \(x=12\).`, num(3),
      "xy is constant.", [S`\(k=36\); \(\frac{36}{12}\).`], S`\(3\)`),
  ]),

  ...hard([
    ["Meeting a line", S`Find where \(y=\frac4x\) meets the line \(y=x+3\).`,
      [S`\(\frac4x=x+3\Rightarrow x^2+3x-4=0\).`, S`\((x+4)(x-1)=0\Rightarrow x=-4\) or \(1\).`, S`Points \((1,4)\) and \((-4,-1)\).`],
      S`\((1,4)\) and \((-4,-1)\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 7 }, step: { x: 1, y: 1 }, curves: [...hyp((x) => 4 / x, 0, -6, 6), { f: (x) => x + 3, color: "blue" }], vlines: AX, lines: HZ(0), points: [P(1, 4, "(1, 4)", "red"), P(-4, -1, "(−4, −1)", "red")] }, "The line cuts each branch once")],
    ["A tangent line", S`For which values of \(c\) is the line \(y=-x+c\) a tangent to \(y=\frac9x\)?`,
      [S`\(\frac9x=-x+c\Rightarrow x^2-cx+9=0\).`, S`Tangent: \(\Delta=c^2-36=0\Rightarrow c=\pm6\).`, S`Contact points \((3,3)\) and \((-3,-3)\), on the line of symmetry \(y=x\).`],
      S`\(c=\pm6\)`],
  ], [
    q("Level 3 · rectangle", S`A rectangle with one corner at the origin and the opposite corner on \(y=\frac{20}{x}\) has width 8. Find its height.`, num(2.5, 0.001),
      "Height = 20/width.", [S`\(\frac{20}{8}\).`], S`\(2.5\)`),
    q("Level 3 · on y = x", S`Find the positive x-coordinate where \(y=\frac{18}{x}\) meets \(y=2x\).`, num(3),
      "18/x = 2x.", [S`\(x^2=9\).`], S`\(3\)`),
    q("Level 3 · pressure", S`At constant temperature, pressure varies inversely with volume. A gas has pressure 150 kPa at 4 L. Find the volume (L) at 240 kPa.`, num(2.5, 0.001),
      "PV is constant.", [S`\(PV=600\); \(\frac{600}{240}\).`], S`\(2.5\) L`),
  ]),

  wrapUp({
    qas: [
      ["Why is x = 0 not allowed?", "Division by zero has no value, so 1/x does not exist at x = 0; the y-axis becomes an asymptote."],
      ["Can the graph cross an asymptote?", "Not for y = k/x: the values get as close as you like to 0 but never equal 0."],
      ["What does k change?", "Its size stretches the curve away from the origin; its sign chooses the quadrants."],
      ["Why is k/x self-inverse?", "Swapping x and y in y = k/x and rearranging gives y = k/x again, so the graph is its own reflection in y = x."],
      ["How do I recognise inverse variation?", "The product of the two quantities is constant: doubling one halves the other."],
    ],
    summary: [
      "y = k/x: hyperbola with asymptotes x = 0 and y = 0.",
      "Domain x ≠ 0, range y ≠ 0.",
      "k > 0: quadrants 1 and 3; k < 0: quadrants 2 and 4.",
      "Self-inverse: symmetric in y = x (and y = −x).",
      "Inverse variation: xy = k.",
    ],
    next: "4.2 moves and stretches the reciprocal graph to y = a/(x − h) + k.",
  }),
];
