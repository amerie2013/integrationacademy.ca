// MCF3M 2.4 — Factoring Complex Trinomials ax² + bx + c (a ≠ 1): decomposition (product ac, sum b) with grouping,
// GCF first, negative leading coefficient, x-intercepts, context.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, fexpr, hard, plane, fig } from "../lib.mjs";
import { areaBox } from "../figs.mjs";
const S = String.raw;

export const TITLE = "2.4 Factoring Complex Trinomials";

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Factoring Complex Trinomials",
    overview: S`When the leading coefficient \(a\) is not \(1\) (and not a common factor), as in \(3x^2+13x-10\), the product-and-sum search changes slightly: look for two numbers whose product is \(a\times c\) and whose sum is \(b\). Use them to split the middle term into two pieces, then factor by grouping. This <b>decomposition</b> method always works when the trinomial factors, and it explains why: the four pieces are exactly the four cells of the area model.`,
    goals: [
      "explain why decomposition uses the product \\(ac\\) and the sum \\(b\\);",
      "factor \\(ax^2+bx+c\\) by splitting the middle term and grouping;",
      "take out a common factor (including a negative) before decomposing;",
      "check a factorisation by expanding and by the zeros of the graph;",
      "apply factoring to an area or projectile context.",
    ],
    curriculum: "A1.3 (factor quadratic expressions including those for which a ≠ 1, e.g. 3x² + 13x − 10, by selecting and applying an appropriate strategy)",
    prior: [
      [S`Factor by grouping: \(2x^2+6x+5x+15\).`, S`\(2x(x+3)+5(x+3)=(x+3)(2x+5)\).`],
      [S`Two numbers multiply to \(-30\) and add to \(13\)?`, S`\(15\) and \(-2\).`],
      [S`Expand \((3x-2)(x+5)\).`, S`\(3x^2+13x-10\).`],
    ],
    words: [
      ["Complex trinomial", "a trinomial with leading coefficient a ≠ 1", "\\(6x^2+x-2\\)"],
      ["Product ac", "leading coefficient × constant", "\\(6\\times(-2)=-12\\)"],
      ["Decomposition", "split bx into two terms using the pair", "\\(x=4x-3x\\)"],
      ["Grouping", "factor each pair, then the common bracket", "\\(2x(3x+2)-1(3x+2)\\)"],
      ["Fully factored", "no common factor left in any bracket", "\\(2(2x+1)(x-3)\\)"],
    ],
  }),

  section("📌 Why the product is ac", S`
  <p>Expand \((px+r)(qx+s)=pqx^2+(ps+qr)x+rs\). The two middle pieces \(ps\) and \(qr\) add to \(b\), and their product is \(ps\cdot qr=(pq)(rs)=a\cdot c\). So the middle term always splits into two numbers with <b>product \(ac\)</b> and <b>sum \(b\)</b>.</p>
  ${table(["Step", "For \\(6x^2+x-2\\)"], [
    ["1. Common factor?", "none (6, 1, −2 share nothing)"],
    ["2. Product ac and sum b", "\\(ac=6(-2)=-12\\), \\(b=1\\)"],
    ["3. Find the pair", "\\(4\\) and \\(-3\\): \\(4(-3)=-12\\), \\(4-3=1\\)"],
    ["4. Split the middle term", "\\(6x^2+4x-3x-2\\)"],
    ["5. Group", "\\(2x(3x+2)-1(3x+2)=(3x+2)(2x-1)\\)"],
  ])}
  ${fig(areaBox(["3x", "+2"], ["2x", "−1"], [["6x²", "4x"], ["−3x", "−2"]], "6x² + x − 2 = (2x − 1)(3x + 2)"), "The split pieces 4x and −3x are the two middle cells of the area model.")}
  ${keyIdea(S`Check every factorisation by expanding. It is also good to check the zeros: \((2x-1)(3x+2)=0\) at \(x=\tfrac12\) and \(x=-\tfrac23\); substituting either into \(6x^2+x-2\) must give \(0\).`)}`),

  widget("decompositionLab", { init: [6, 1, -2] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Use the product a·c, not just c: for 3x² + 10x + 8 look for product 24, not 8.",
    "After grouping, the two brackets must match; if they differ only in sign, take out a negative from the second pair.",
    "Take out any common factor first, or the brackets will still contain one: 4x² + 10x + 4 = 2(2x + 1)(x + 2).",
    "Divide carefully when grouping: 6x² − 9x = 3x(2x − 3), not 3x(2x − 9).",
    "(2x − 1)(3x + 2) ≠ (2x + 2)(3x − 1); write the factors from the brackets, not from the pair.",
  ])}`),

  examples([
    ["Decomposition step by step", S`Factor \(3x^2+13x-10\).`,
      [S`<b>Common factor?</b> \(3,\,13,\,-10\) have none.`,
        S`<b>Targets.</b> Product \(ac=3(-10)=-30\); sum \(b=13\). Opposite signs, larger positive: \(15\) and \(-2\) (\(15-2=13\)).`,
        S`<b>Split the middle term.</b> \(3x^2+15x-2x-10\).`,
        S`<b>Group.</b> \(3x(x+5)-2(x+5)=(x+5)(3x-2)\).`,
        S`<b>Check.</b> \((x+5)(3x-2)=3x^2-2x+15x-10=3x^2+13x-10\) ✓. Zeros \(x=-5\) and \(x=\tfrac23\) match the graph ✓`],
      S`\((x+5)(3x-2)\)`,
      plane({ view: { xmin: -7, xmax: 2, ymin: -26, ymax: 10 }, curves: [{ f: (x) => 3 * x * x + 13 * x - 10, color: "violet" }], points: [{ x: -5, y: 0, label: "(−5, 0)", color: "amber" }, { x: 2 / 3, y: 0, label: "(0.67, 0)", color: "amber" }], step: { x: 1, y: 4 } })],

    ["Both pieces negative", S`Factor \(4x^2-17x+15\).`,
      [S`<b>Targets.</b> \(ac=60\), \(b=-17\): both numbers negative. Pairs of \(60\): \(-3,-20\) (sum \(-23\)), \(-4,-15\) (\(-19\)), \(-5,-12\) (\(-17\)) ✓`,
        S`<b>Split.</b> \(4x^2-5x-12x+15\).`,
        S`<b>Group.</b> \(x(4x-5)-3(4x-5)\). Taking out \(-3\) (not \(3\)) makes the brackets match.`,
        S`<b>Factor.</b> \((4x-5)(x-3)\).`,
        S`<b>Check.</b> \(4x^2-12x-5x+15\) ✓. Zeros \(1.25\) and \(3\) ✓`],
      S`\((4x-5)(x-3)\)`,
      fig(areaBox(["x", "−3"], ["4x", "−5"], [["4x²", "−12x"], ["−5x", "+15"]], "4x² − 17x + 15"), "The two middle cells −12x and −5x add to −17x.")],

    ["Common factor first", S`Factor fully: \(12x^2+2x-4\).`,
      [S`<b>GCF.</b> \(2\): \(12x^2+2x-4=2(6x^2+x-2)\).`,
        S`<b>Trinomial.</b> \(ac=-12\), \(b=1\): \(4\) and \(-3\).`,
        S`<b>Split and group.</b> \(6x^2+4x-3x-2=2x(3x+2)-1(3x+2)=(3x+2)(2x-1)\).`,
        S`<b>Fully factored.</b> \(2(3x+2)(2x-1)\).`,
        S`<b>Check at \(x=1\).</b> \(12+2-4=10\) and \(2(5)(1)=10\) ✓`],
      S`\(2(3x+2)(2x-1)\)`,
      plane({ view: { xmin: -2, xmax: 1.5, ymin: -6, ymax: 12 }, curves: [{ f: (x) => 12 * x * x + 2 * x - 4, color: "violet" }], points: [{ x: 0.5, y: 0, label: "(0.5, 0)", color: "amber" }, { x: -2 / 3, y: 0, label: "(−0.67, 0)", color: "amber" }, { x: 1, y: 10, label: "(1, 10)", color: "blue" }], step: { x: 0.5, y: 2 } })],

    ["Negative leading coefficient", S`Factor fully: \(-2x^2+7x+15\).`,
      [S`<b>Take out \(-1\).</b> \(-(2x^2-7x-15)\).`,
        S`<b>Targets.</b> \(ac=-30\), \(b=-7\): \(-10\) and \(3\).`,
        S`<b>Split and group.</b> \(2x^2-10x+3x-15=2x(x-5)+3(x-5)=(x-5)(2x+3)\).`,
        S`<b>Result.</b> \(-(x-5)(2x+3)\).`,
        S`<b>Check.</b> \(-(2x^2+3x-10x-15)=-2x^2+7x+15\) ✓. The parabola opens down with zeros \(5\) and \(-1.5\).`],
      S`\(-(x-5)(2x+3)\)`,
      plane({ view: { xmin: -3, xmax: 7, ymin: -10, ymax: 25 }, curves: [{ f: (x) => -2 * x * x + 7 * x + 15, color: "violet" }], points: [{ x: 5, y: 0, label: "(5, 0)", color: "amber" }, { x: -1.5, y: 0, label: "(−1.5, 0)", color: "amber" }], step: { x: 1, y: 5 } })],

    ["A diving model", S`A diver's height above the water is \(h(t)=-5t^2+5t+10\) m. Factor fully and find when the diver enters the water.`,
      [S`<b>GCF.</b> \(-5\): \(h(t)=-5(t^2-t-2)\).`,
        S`<b>Trinomial.</b> Product \(-2\), sum \(-1\): \(-2\) and \(1\). So \(t^2-t-2=(t-2)(t+1)\).`,
        S`<b>Factored.</b> \(h(t)=-5(t-2)(t+1)\).`,
        S`<b>Zeros.</b> \(t=2\) or \(t=-1\). Time cannot be negative, so the diver enters the water at \(t=2\) s.`,
        S`<b>Check.</b> \(h(2)=-20+10+10=0\) ✓; \(h(0)=10\): the board is \(10\) m high.`],
      S`\(-5(t-2)(t+1)\); enters the water at 2 s`,
      plane({ view: { xmin: -0.3, xmax: 2.5, ymin: -1, ymax: 13 }, curves: [{ f: (t) => -5 * t * t + 5 * t + 10, a: 0, b: 2, color: "violet" }], points: [{ x: 0, y: 10, label: "(0, 10)", color: "blue" }, { x: 2, y: 0, label: "(2, 0)", color: "amber" }], step: { x: 0.5, y: 1 }, xlabel: "t (s)", ylabel: "h (m)" })],
  ]),

  practice([
    q("decomp", S`Factor \(2x^2+11x+12\).`, fexpr("(2*x+3)*(x+4)"), "ac = 24, b = 11: 3 and 8.", [S`\(2x^2+3x+8x+12=x(2x+3)+4(2x+3)\).`], S`\((2x+3)(x+4)\)`),
    q("decomp", S`Factor \(3x^2-7x+2\).`, fexpr("(3*x-1)*(x-2)"), "ac = 6, b = −7.", [S`\(-1,-6\): \(3x^2-x-6x+2=x(3x-1)-2(3x-1)\).`], S`\((3x-1)(x-2)\)`),
    q("decomp", S`Factor \(5x^2+3x-2\).`, fexpr("(5*x-2)*(x+1)"), "ac = −10, b = 3.", [S`\(5,-2\): \(5x^2+5x-2x-2=5x(x+1)-2(x+1)\).`], S`\((5x-2)(x+1)\)`),
    q("gcf", S`Factor fully: \(6x^2-15x-9\).`, fexpr("3*(2*x+1)*(x-3)"), "GCF 3 first.", [S`\(3(2x^2-5x-3)=3(2x+1)(x-3)\).`], S`\(3(2x+1)(x-3)\)`),
    q("pair", S`To factor \(4x^2+4x-15\) by decomposition, which pair splits the middle term?`, choice(["10 and −6", "15 and −1", "5 and −3", "12 and −8"], 0), "Product −60, sum 4.", [S`\(10(-6)=-60\), \(10-6=4\).`], S`\(10\) and \(-6\)`),
  ]),

  ...hard([
    ["Large coefficients", S`Factor \(12x^2-7x-12\).`,
      [S`<b>Targets.</b> \(ac=-144\), \(b=-7\): \(-16\) and \(9\).`,
        S`<b>Split.</b> \(12x^2-16x+9x-12=4x(3x-4)+3(3x-4)=(3x-4)(4x+3)\).`,
        S`<b>Check.</b> \(12x^2+9x-16x-12\) ✓`],
      S`(3x − 4)(4x + 3)`,
      fig(areaBox(["4x", "+3"], ["3x", "−4"], [["12x²", "9x"], ["−16x", "−12"]], "12x² − 7x − 12"), "")],
    ["Find the missing coefficient", S`For which positive integers \(b\) does \(2x^2+bx+6\) factor over the integers?`,
      [S`<b>Product.</b> \(ac=12\). Positive pairs: \((1,12),(2,6),(3,4)\).`,
        S`<b>Sums.</b> \(13,\,8,\,7\).`,
        S`<b>Answer.</b> \(b=7,\,8,\,13\); e.g. \(b=7\): \((2x+3)(x+2)\).`],
      S`b = 7, 8 or 13`],
  ], [
    q("hard", S`Factor \(6x^2-x-15\).`, fexpr("(2*x+3)*(3*x-5)"), "ac = −90, b = −1: −10 and 9.", [S`\(6x^2-10x+9x-15=2x(3x-5)+3(3x-5)\).`], S`\((2x+3)(3x-5)\)`),
    q("hard", S`Factor fully: \(-6x^2-x+2\).`, fexpr("-(3*x+2)*(2*x-1)"), "Take out −1.", [S`\(-(6x^2+x-2)=-(3x+2)(2x-1)\).`], S`\(-(3x+2)(2x-1)\)`),
    q("hard", S`Factor fully: \(8x^2+20x+8\).`, fexpr("4*(2*x+1)*(x+2)"), "GCF 4.", [S`\(4(2x^2+5x+2)=4(2x+1)(x+2)\).`], S`\(4(2x+1)(x+2)\)`),
    q("hard", S`Enter the positive zero of \(10x^2-x-3\).`, num(0.6, 1e-9), "Factor first.", [S`\(ac=-30\): \(-6\) and \(5\): \((5x-3)(2x+1)\).`, S`Positive zero \(x=\tfrac35=0.6\).`], S`\(0.6\)`),
    q("hard", S`How many positive integers \(b\) make \(3x^2+bx+4\) factorable over the integers?`, num(3), "ac = 12.", [S`Sums of positive pairs of \(12\): \(13,\,8,\,7\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Why use the product ac instead of c?", "Because the middle pieces ps and qr multiply to (pq)(rs) = ac."],
      ["What do I do after splitting the middle term?", "Group the four terms in pairs and take out the common bracket."],
      ["What if the brackets don't match?", "Check the signs: take out a negative from the second pair."],
      ["Should I look for a GCF first?", "Always: it keeps the numbers small and makes the answer fully factored."],
      ["How do I check?", "Expand, or substitute a zero of a factor into the trinomial."],
    ],
    summary: [
      "ax² + bx + c: find m, n with mn = ac and m + n = b.",
      "Split bx = mx + nx, then group.",
      "Take out a GCF (or −1) first.",
      "Check by expanding and by the zeros.",
    ],
    next: "2.5 uses special patterns: differences of squares and perfect square trinomials.",
  }),
];
