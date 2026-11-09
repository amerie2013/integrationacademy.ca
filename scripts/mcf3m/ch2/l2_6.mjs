// MCF3M 2.6 — Chapter 2 Review: expanding, common factoring, simple and complex trinomials, special patterns,
// choosing a strategy.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, expr, fexpr, hard, plane, fig } from "../lib.mjs";
import { areaBox } from "../figs.mjs";
const S = String.raw;

export const TITLE = "2.6 Chapter 2 Review";

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 2 Review",
    overview: S`Chapter 2 built the algebra of quadratic expressions: expanding products into standard form, and reversing the process by factoring. The hardest part of factoring is choosing the method, so this review practises a decision path — common factor first, then count the terms, then look for a pattern before searching for a product–sum pair. Every answer can be checked by expanding, and every factor shows a zero of the graph.`,
    goals: [
      "expand and simplify products, including special products;",
      "choose an efficient factoring strategy for any quadratic expression;",
      "factor fully, with a common factor first;",
      "check factorisations by expanding and by the zeros of the graph;",
      "use expanding and factoring in context.",
    ],
    curriculum: "A1.2, A1.3 (chapter 2 review)",
    prior: [
      [S`Expand \((2x-3)(x+4)\).`, S`\(2x^2+5x-12\).`],
      [S`Factor \(x^2-x-30\).`, S`\((x-6)(x+5)\).`],
      [S`Factor \(36x^2-1\).`, S`\((6x-1)(6x+1)\).`],
    ],
    words: [
      ["GCF", "greatest common factor — always first", "\\(4x^2-8x=4x(x-2)\\)"],
      ["x² + bx + c", "product c, sum b", "\\((x+r)(x+s)\\)"],
      ["ax² + bx + c", "product ac, sum b, then group", "\\(6x^2+x-2\\)"],
      ["Difference of squares", "\\(a^2-b^2=(a-b)(a+b)\\)", "\\(x^2-64\\)"],
      ["Perfect square trinomial", "\\(a^2\\pm2ab+b^2=(a\\pm b)^2\\)", "\\(x^2+6x+9\\)"],
    ],
  }),

  section("📌 A factoring decision path", S`
  ${table(["Step", "Ask", "If yes"], [
    ["1", "Is there a common factor (including −1)?", "take it out"],
    ["2", "Two terms, both squares, minus between?", "difference of squares"],
    ["3", "Three terms, ends are squares, middle = ±2ab?", "perfect square trinomial"],
    ["4", "Three terms with a = 1?", "product c, sum b"],
    ["5", "Three terms with a ≠ 1?", "product ac, sum b, split and group"],
    ["6", "Four terms?", "group in pairs"],
    ["7", "Check", "expand back; look again for a factor in each bracket"],
  ])}
  ${keyIdea(S`A fully factored quadratic shows its zeros. \(2x^2-2x-24=2(x-4)(x+3)\) is zero at \(x=4\) and \(x=-3\); those are the \(x\)-intercepts of \(y=2x^2-2x-24\).`)}`),

  widget("decompositionLab", { init: [4, -4, -15] }),

  examples([
    ["Expand and simplify", S`Expand and simplify \((x-3)(2x+5)-(x-4)^2\).`,
      [S`<b>First product.</b> \(2x^2+5x-6x-15=2x^2-x-15\).`,
        S`<b>Second product.</b> \((x-4)^2=x^2-8x+16\); the minus sign in front changes every sign: \(-x^2+8x-16\).`,
        S`<b>Collect.</b> \(2x^2-x-15-x^2+8x-16=x^2+7x-31\).`,
        S`<b>Check with \(x=0\).</b> \((-3)(5)-16=-31\) ✓. With \(x=1\): \((-2)(7)-9=-23\) and \(1+7-31=-23\) ✓`],
      S`\(x^2+7x-31\)`,
      fig(areaBox(["2x", "+5"], ["x", "−3"], [["2x²", "5x"], ["−6x", "−15"]], "(x − 3)(2x + 5)"), "The first product in an area model.")],

    ["Choose the method (1)", S`Factor fully: \(3x^2-48\).`,
      [S`<b>Step 1, common factor.</b> \(3(x^2-16)\).`,
        S`<b>Step 2, pattern.</b> \(x^2-16\) is a difference of squares: \((x-4)(x+4)\).`,
        S`<b>Fully factored.</b> \(3(x-4)(x+4)\).`,
        S`<b>Check.</b> \(3(x^2-16)=3x^2-48\) ✓. Zeros \(\pm4\) ✓`],
      S`\(3(x-4)(x+4)\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -50, ymax: 30 }, curves: [{ f: (x) => 3 * x * x - 48, color: "violet" }], points: [{ x: 4, y: 0, label: "(4, 0)", color: "amber" }, { x: -4, y: 0, label: "(−4, 0)", color: "amber" }], step: { x: 1, y: 10 } })],

    ["Choose the method (2)", S`Factor fully: \(4x^2+4x-15\).`,
      [S`<b>Common factor?</b> None. Not a pattern (\(15\) is not a square and there is a minus).`,
        S`<b>Decomposition.</b> \(ac=-60\), \(b=4\): \(10\) and \(-6\).`,
        S`<b>Split and group.</b> \(4x^2+10x-6x-15=2x(2x+5)-3(2x+5)=(2x+5)(2x-3)\).`,
        S`<b>Check.</b> \(4x^2-6x+10x-15\) ✓. Zeros \(-2.5\) and \(1.5\) ✓`],
      S`\((2x+5)(2x-3)\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -18, ymax: 10 }, curves: [{ f: (x) => 4 * x * x + 4 * x - 15, color: "violet" }], points: [{ x: -2.5, y: 0, label: "(−2.5, 0)", color: "amber" }, { x: 1.5, y: 0, label: "(1.5, 0)", color: "amber" }], step: { x: 1, y: 4 } })],

    ["Choose the method (3)", S`Factor fully: \(-x^2+14x-49\).`,
      [S`<b>Common factor.</b> \(-1\): \(-(x^2-14x+49)\).`,
        S`<b>Pattern?</b> \(49=7^2\); \(2(x)(7)=14x\) ✓, so a perfect square: \(x^2-14x+49=(x-7)^2\).`,
        S`<b>Result.</b> \(-(x-7)^2\).`,
        S`<b>Graph.</b> Opens down and touches the axis only at \(x=7\) ✓`],
      S`\(-(x-7)^2\)`,
      plane({ view: { xmin: 2, xmax: 12, ymin: -25, ymax: 4 }, curves: [{ f: (x) => -((x - 7) ** 2), color: "violet" }], points: [{ x: 7, y: 0, label: "(7, 0)", color: "amber" }], step: { x: 1, y: 5 } })],

    ["Factoring in context", S`A company's profit (thousands of dollars) is \(P(x)=-2x^2+28x-80\) for \(x\) thousand items. Factor fully and find the break-even quantities.`,
      [S`<b>Common factor.</b> \(-2(x^2-14x+40)\).`,
        S`<b>Trinomial.</b> Product \(40\), sum \(-14\): \(-4\) and \(-10\). So \(P(x)=-2(x-4)(x-10)\).`,
        S`<b>Break-even.</b> \(P=0\) at \(x=4\) and \(x=10\): \(4000\) and \(10\,000\) items.`,
        S`<b>Check.</b> \(P(4)=-32+112-80=0\) ✓. Between the zeros the profit is positive, with the most at \(x=7\): \(P(7)=-98+196-80=18\) ✓`],
      S`\(-2(x-4)(x-10)\); break-even at 4000 and 10 000 items`,
      plane({ view: { xmin: 0, xmax: 14, ymin: -25, ymax: 22 }, curves: [{ f: (x) => -2 * x * x + 28 * x - 80, color: "violet" }], points: [{ x: 4, y: 0, label: "(4, 0)", color: "amber" }, { x: 10, y: 0, label: "(10, 0)", color: "amber" }, { x: 7, y: 18, label: "(7, 18)", color: "blue" }], step: { x: 1, y: 5 } })],
  ]),

  practice([
    q("expand", S`Expand and simplify \((3x+1)^2-(x+1)(x-1)\).`, expr("8*x^2+6*x+2"), "9x² + 6x + 1 − (x² − 1).", [S`\(9x^2+6x+1-x^2+1=8x^2+6x+2\).`], S`\(8x^2+6x+2\)`),
    q("factor", S`Factor fully: \(x^2+2x-63\).`, fexpr("(x+9)*(x-7)"), "Product −63, sum 2.", [S`\((x+9)(x-7)\).`], S`\((x+9)(x-7)\)`),
    q("factor", S`Factor fully: \(6x^2+7x+2\).`, fexpr("(2*x+1)*(3*x+2)"), "ac = 12, b = 7.", [S`\(3\) and \(4\): \(6x^2+3x+4x+2\).`], S`\((2x+1)(3x+2)\)`),
    q("factor", S`Factor fully: \(2x^2-72\).`, fexpr("2*(x-6)*(x+6)"), "GCF then difference of squares.", [S`\(2(x^2-36)\).`], S`\(2(x-6)(x+6)\)`),
    q("method", S`Which method should be used first on \(10x^2-15x\)?`, choice(["common factor", "difference of squares", "decomposition", "perfect square"], 0), "Look for a GCF.", [S`\(5x(2x-3)\).`], S`common factor`),
  ]),

  ...hard([
    ["Factor in stages", S`Factor fully: \(x^4-10x^2+9\).`,
      [S`<b>Substitute \(u=x^2\).</b> \(u^2-10u+9=(u-1)(u-9)\).`,
        S`<b>Back to \(x\).</b> \((x^2-1)(x^2-9)\).`,
        S`<b>Differences of squares.</b> \((x-1)(x+1)(x-3)(x+3)\). Check at \(x=2\): \(16-40+9=-15\); \((1)(3)(-1)(5)=-15\) ✓`],
      S`(x − 1)(x + 1)(x − 3)(x + 3)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -18, ymax: 12 }, curves: [{ f: (x) => x ** 4 - 10 * x * x + 9, color: "violet" }], points: [-3, -1, 1, 3].map((x) => ({ x, y: 0, label: `(${x}, 0)`.replace("-", "−"), color: "amber" })), step: { x: 1, y: 3 } })],
    ["An unknown coefficient", S`\(kx^2-20x+25\) is a perfect square trinomial. Find \(k\) and factor it.`,
      [S`<b>Ends.</b> \(25=5^2\); the middle \(-20x=-2(\sqrt{k}\,x)(5)\Rightarrow\sqrt k=2\Rightarrow k=4\).`,
        S`<b>Factor.</b> \(4x^2-20x+25=(2x-5)^2\). Check: \(4x^2-10x-10x+25\) ✓`],
      S`k = 4: (2x − 5)²`],
  ], [
    q("hard", S`Factor fully: \(3x^3-12x^2-63x\).`, fexpr("3*x*(x-7)*(x+3)"), "GCF 3x.", [S`\(3x(x^2-4x-21)=3x(x-7)(x+3)\).`], S`\(3x(x-7)(x+3)\)`),
    q("hard", S`Factor fully: \(12x^2-27\).`, fexpr("3*(2*x-3)*(2*x+3)"), "GCF 3.", [S`\(3(4x^2-9)\).`], S`\(3(2x-3)(2x+3)\)`),
    q("hard", S`Factor \((2x-1)^2-(x+3)^2\).`, fexpr("(x-4)*(3*x+2)"), "Difference of squares with a = 2x − 1, b = x + 3.", [S`\((2x-1-x-3)(2x-1+x+3)=(x-4)(3x+2)\).`], S`\((x-4)(3x+2)\)`),
    q("hard", S`Factor fully: \(-8x^2+2x+3\).`, fexpr("-(2*x+1)*(4*x-3)"), "Take out −1; ac = −24, b = −2.", [S`\(-(8x^2-2x-3)\): \(-6\) and \(4\): \(-(4x-3)(2x+1)\).`], S`\(-(2x+1)(4x-3)\)`),
    q("hard", S`The area of a rectangle is \(6x^2+11x-10\) and its width is \(2x+5\). Enter its length when \(x=3\).`, num(7), "Factor the area.", [S`\((2x+5)(3x-2)\); at \(x=3\): \(3(3)-2=7\).`], S`\(7\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the first step in every factoring problem?", "Look for a common factor (including −1)."],
      ["How do I tell decomposition from the simple method?", "If a = 1 use product c; if a ≠ 1 use product ac and group."],
      ["When is a trinomial a perfect square?", "When the ends are squares a², b² and the middle is ±2ab."],
      ["How do I know I've factored fully?", "No bracket has a common factor or a pattern left."],
      ["How can a graph check my factoring?", "Each factor's zero must be an x-intercept of the graph."],
    ],
    summary: [
      "Expand: every term times every term; collect like terms.",
      "Factor: GCF → pattern → product–sum → decomposition/grouping.",
      "Check by expanding and by zeros.",
      "Factored form gives the x-intercepts.",
    ],
    next: "Chapter 3 uses factored form to solve quadratic equations and to graph parabolas.",
  }),
];
