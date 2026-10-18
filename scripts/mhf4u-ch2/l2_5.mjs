// MHF4U 2.5 — Solving Polynomial Inequalities Graphically (NEW): inequality and interval notation, reading
// f(x) > 0 and f(x) > g(x) from graphs, approximate boundaries from technology, and applications
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "2.5 Solving Polynomial Inequalities Graphically";
export const ID = "6d4f0002-0001-4001-8001-000000000205";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Solving Polynomial Inequalities Graphically",
    overview: S`An inequality such as \(f(x)>0\) asks: for which \(x\) is the graph <em>above</em> the x-axis? And \(f(x)\le g(x)\) asks where the graph of \(f\) is on or below the graph of \(g\). The boundaries of the solution are the x-intercepts (or the intersection points), and the answer is a set of intervals. A graph — drawn by hand from factored form or by technology — shows the solution at a glance, even when the boundaries are not nice numbers.`,
    goals: [
      "write solutions in inequality and interval notation;",
      "solve f(x) > 0, f(x) ≥ 0, f(x) < 0 and f(x) ≤ 0 from a graph;",
      "solve f(x) > g(x) by comparing two graphs;",
      "use approximate intersection points from technology;",
      "solve problems involving polynomial inequalities.",
    ],
    curriculum: "C4.1 (explain the difference between the solution to an equation and to an inequality), C4.2 (determine solutions of polynomial inequalities by graphing, using technology, and interpret them in context)",
    prior: [
      [S`Where is \(y=x^2-4\) below the x-axis?`, S`\(-2\lt x\lt2\).`],
      [S`Write \(-1\le x\lt3\) in interval notation.`, S`\([-1,3)\).`],
      [S`Zeros of \((x+1)(x-2)(x-5)\)?`, S`\(-1, 2, 5\).`],
    ],
    words: [
      ["Interval notation", "( ) excludes an endpoint, [ ] includes it", "\\([2,5)\\)"],
      ["Union \\(\\cup\\)", "joins separate intervals", "\\((-\\infty,-1)\\cup(2,\\infty)\\)"],
      ["Strict inequality", "\\(\\lt\\) or \\(>\\): boundaries excluded", ""],
      ["Non-strict inequality", "\\(\\le\\) or \\(\\ge\\): boundaries included", ""],
    ],
  }),

  section("📌 Reading the graph", S`
  ${plane({ view: { xmin: -3, xmax: 4, ymin: -12, ymax: 12 }, curves: [{ f: (x) => (x + 2) * (x - 1) * (x - 3), color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }, { x: 3, y: 0, label: "3", color: "red" }], step: { x: 1, y: 2 } }, "f(x) = (x + 2)(x − 1)(x − 3): above the axis on (−2, 1) and (3, ∞); below on (−∞, −2) and (1, 3).")}
  ${table(["Inequality", "Look for…", "Boundaries"], [
    ["f(x) > 0", "graph above the x-axis", "excluded ( )"],
    ["f(x) ≥ 0", "on or above the x-axis", "included [ ]"],
    ["f(x) < 0", "graph below the x-axis", "excluded ( )"],
    ["f(x) > g(x)", "graph of f above graph of g", "intersection x-values"],
  ])}
  ${keyIdea(S`An equation has a few solutions (points); an inequality usually has infinitely many (intervals). Find the boundary x-values first, then read which intervals satisfy the inequality. \(\infty\) always gets a round bracket.`)}`),

  section("📌 Explore", S`<p>Set the cubic and the line \(y=g(x)\). Choose the inequality: the shaded bands are the x-values that satisfy it, and the solution is written in interval notation. Set the line to \(y=0\) to compare with the x-axis.</p>`),

  widget("inequalityGraph", { init: { cs: [1, 0, -4, 0], m: 0, b: 0, op: "≥" } }),

  section("📌 Inequalities from technology", S`
  <p>When the boundaries are not integers, use the zero or intersection feature of a graphing tool and round sensibly (usually to 2 decimal places). Rearranging \(f(x)>g(x)\) as \(f(x)-g(x)>0\) gives one graph to read instead of two.</p>
  ${watchOut([
    "Use ( ) for < and >, [ ] for ≤ and ≥ — and always ( ) next to ±∞.",
    "f(x) > g(x) is about which graph is HIGHER, not about the sign of either graph.",
    "Don't forget the outer intervals that run to −∞ or ∞.",
    "Rounded boundaries are approximate: write ≈.",
    "In context, restrict to the values that make sense (e.g. lengths > 0).",
  ])}`),

  examples([
    ["Above the axis", S`Use the graph of \(f(x)=(x+2)(x-1)(x-3)\) to solve \(f(x)>0\).`,
      [S`Zeros \(-2, 1, 3\). The graph is above the axis between \(-2\) and \(1\), and to the right of \(3\).`, S`Strict inequality: zeros excluded.`],
      S`\(x\in(-2,1)\cup(3,\infty)\)`],
    ["On or below the axis", S`Solve \(x^4-5x^2+4\le0\) from its graph.`,
      [S`\(x^4-5x^2+4=(x^2-1)(x^2-4)\): zeros \(\pm1,\pm2\).`, S`The W-shaped graph dips below the axis on \((-2,-1)\) and \((1,2)\); include the zeros.`],
      S`\(x\in[-2,-1]\cup[1,2]\)`,
      plane({ view: { xmin: -2.7, xmax: 2.7, ymin: -3, ymax: 6 }, curves: [{ f: (x) => x ** 4 - 5 * x * x + 4, color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: -1, y: 0, label: "−1", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }, { x: 2, y: 0, label: "2", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Comparing two graphs", S`Solve \(x^3\ge4x\) graphically.`,
      [S`The cubic \(y=x^3\) and the line \(y=4x\) meet where \(x^3=4x\): \(x=-2, 0, 2\).`, S`The cubic is on or above the line for \(-2\le x\le0\) and for \(x\ge2\).`],
      S`\(x\in[-2,0]\cup[2,\infty)\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -12, ymax: 12 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => 4 * x, color: "green" }], points: [{ x: -2, y: -8, label: "(−2, −8)", color: "red" }, { x: 0, y: 0, color: "red" }, { x: 2, y: 8, label: "(2, 8)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Boundaries from technology", S`Solve \(x^3-3x+1\lt0\). Round boundaries to 2 decimal places.`,
      [S`No rational candidate works (\(\pm1\) give \(-1\) and \(3\)), so use the zero feature: \(x\approx-1.88\), \(0.35\), \(1.53\).`, S`Degree 3, \(a>0\): negative to the left of the first zero and between the second and third.`],
      S`\(x\lt-1.88\) or \(0.35\lt x\lt1.53\) (approximately)`,
      plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 5 }, curves: [{ f: (x) => x ** 3 - 3 * x + 1, color: "violet" }], points: [{ x: -1.879, y: 0, label: "≈ −1.88", color: "red" }, { x: 0.347, y: 0, label: "≈ 0.35", color: "red" }, { x: 1.532, y: 0, label: "≈ 1.53", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["When is there a profit?", S`A company's profit is \(P(x)=-x^3+12x^2-20x\) thousand dollars for \(x\) hundred items (\(x\ge0\)). When is \(P(x)>0\)?`,
      [S`\(P(x)=-x(x^2-12x+20)=-x(x-2)(x-10)\): zeros \(0, 2, 10\).`, S`The graph is above the axis between \(2\) and \(10\) (and negative just after \(0\)).`],
      S`profit for \(200\lt\) items \(\lt1000\), i.e. \(2\lt x\lt10\)`,
      plane({ view: { xmin: -0.5, xmax: 11, ymin: -20, ymax: 110 }, curves: [{ f: (x) => -(x ** 3) + 12 * x * x - 20 * x, color: "violet", a: 0, b: 10.8 }], points: [{ x: 2, y: 0, label: "2", color: "red" }, { x: 10, y: 0, label: "10", color: "red" }], step: { x: 1, y: 10 } })],
  ]),

  practice([
    q("read a graph", S`Solve \((x+3)(x-1)(x-4)\lt0\).`, choice([S`\(x\lt-3\) or \(1\lt x\lt4\)`, S`\(-3\lt x\lt1\) or \(x>4\)`, S`\(1\lt x\lt4\)`, S`\(x\lt4\)`], 0),
      "Cubic with a > 0: starts below the axis.", [S`Signs: −, +, −, +.`], S`\(x\lt-3\) or \(1\lt x\lt4\)`),
    q("notation", S`Write \(-2\le x\lt5\) in interval notation.`, choice([S`\([-2,5)\)`, S`\((-2,5]\)`, S`\([-2,5]\)`, S`\((-2,5)\)`], 0),
      "Square bracket = included.", ["−2 included, 5 excluded."], S`\([-2,5)\)`),
    q("count intervals", S`How many separate intervals make up the solution of \(x^4-10x^2+9>0\)?`, num(3),
      "Zeros ±1 and ±3; W shape.", [S`\((x^2-1)(x^2-9)>0\): \(x\lt-3\), \(-1\lt x\lt1\), \(x>3\).`], S`\(3\)`),
    q("largest integer", S`What is the largest integer that satisfies \(x^3\lt8\)?`, num(1),
      "x³ < 8 ⇔ x < 2.", [S`\(x\lt2\), so \(1\).`], S`\(1\)`),
    q("technology", S`The smallest positive zero of \(x^3-3x+1\) is about? (2 decimals)`, num(0.35, 0.01),
      "Use the zero feature or test values.", [S`\(f(0.3)\approx0.13\), \(f(0.4)\approx-0.14\): about \(0.35\).`], S`\(\approx0.35\)`),
  ]),

  ...hard([
    ["Graphically and algebraically", S`Solve \(x^3-2x^2>x-2\).`,
      [S`Rearrange: \(x^3-2x^2-x+2>0\). Group: \(x^2(x-2)-(x-2)=(x-2)(x-1)(x+1)\).`, S`Zeros \(-1, 1, 2\); the cubic (a > 0) is above the axis on \((-1,1)\) and \((2,\infty)\).`],
      S`\(x\in(-1,1)\cup(2,\infty)\)`,
      plane({ view: { xmin: -2, xmax: 3, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 2 * x * x, color: "violet" }, { f: (x) => x - 2, color: "green" }], points: [{ x: -1, y: -3, label: "(−1, −3)", color: "red" }, { x: 1, y: -1, label: "(1, −1)", color: "red" }, { x: 2, y: 0, label: "(2, 0)", color: "red" }], step: { x: 1, y: 1 } })],
    ["A box with enough volume", S`An open box is made from a 20 cm square sheet by cutting squares of side \(x\) from the corners: \(V(x)=x(20-2x)^2\). For which \(x\) is \(V\ge512\) cm³?`,
      [S`\(4x(10-x)^2=512\Rightarrow x(10-x)^2=128\Rightarrow x^3-20x^2+100x-128=0\).`, S`\(x=2\) works: \((x-2)(x^2-18x+64)=0\Rightarrow x=9\pm\sqrt{17}\approx4.88\) or \(13.12\).`, S`Domain \(0\lt x\lt10\); the graph is on or above 512 between \(2\) and \(4.88\).`],
      S`\(2\le x\le9-\sqrt{17}\approx4.88\)`,
      plane({ view: { xmin: -0.3, xmax: 10.3, ymin: -20, ymax: 640 }, curves: [{ f: (x) => x * (20 - 2 * x) ** 2, color: "violet", a: 0, b: 10 }, { f: () => 512, color: "green" }], points: [{ x: 2, y: 512, label: "(2, 512)", color: "red" }, { x: 9 - Math.sqrt(17), y: 512, label: "(4.88, 512)", color: "red" }], step: { x: 1, y: 100 } })],
  ], [
    q("hard", S`How many integers satisfy \(x^4-5x^2+4\le0\)?`, num(4),
      "Use the W-shaped graph.", [S`\([-2,-1]\cup[1,2]\): \(-2,-1,1,2\).`], S`\(4\)`),
    q("hard", S`What is the smallest integer that satisfies \(x^3-x^2-4x+4>0\)?`, num(-1),
      "Group to factor.", [S`\((x-1)(x-2)(x+2)>0\): \(-2\lt x\lt1\) or \(x>2\).`], S`\(-1\)`),
    q("hard", S`Solve \(x^3\le x\).`, choice([S`\((-\infty,-1]\cup[0,1]\)`, S`\([-1,0]\cup[1,\infty)\)`, S`\([-1,1]\)`, S`\((-\infty,1]\)`], 0),
      "Compare y = x³ with y = x.", [S`\(x(x-1)(x+1)\le0\).`], S`\((-\infty,-1]\cup[0,1]\)`),
  ]),

  wrapUp({
    qas: [
      ["How is solving an inequality different from solving an equation?", "An equation asks where f(x) = 0 (points); an inequality asks where f(x) is positive or negative (intervals between those points)."],
      ["Why are the x-intercepts so important?", "A continuous graph can only change sign by passing through the x-axis, so the intervals between intercepts each have one sign."],
      ["How do I handle f(x) > g(x)?", "Find where the graphs meet, then see which graph is on top in each interval — or graph f − g and compare with 0."],
      ["What if the graph touches the axis?", "At a touching (even-order) zero the sign doesn't change; with ≥ or ≤ the touching point is still included."],
      ["How accurate should approximate boundaries be?", "Usually two decimal places, written with ≈, unless the context needs more."],
    ],
    summary: [
      "f(x) > 0: above the axis; f(x) < 0: below.",
      "Boundaries: zeros or intersections.",
      "( ) strict, [ ] included, ( ) at ±∞.",
      "Rearrange to one side for one graph.",
    ],
    next: "2.6 solves factorable inequalities exactly with sign charts.",
  }),
];
