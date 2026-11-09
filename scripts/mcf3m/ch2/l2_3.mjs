// MCF3M 2.3 — Factoring Simple Trinomials x² + bx + c: product/sum search, sign patterns, GCF first,
// connection to x-intercepts, and an area context.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, fexpr, hard, plane, fig } from "../lib.mjs";
import { areaBox } from "../figs.mjs";
const S = String.raw;

export const TITLE = "2.3 Factoring Simple Trinomials";

export const blocks = () => [
  intro({
    icon: "🔍",
    title: "Factoring Simple Trinomials",
    overview: S`Expanding \((x+r)(x+s)\) gives \(x^2+(r+s)x+rs\): the middle coefficient is the <b>sum</b> of the two numbers and the constant is their <b>product</b>. So to factor a trinomial \(x^2+bx+c\), search for two integers that multiply to \(c\) and add to \(b\). The signs of \(b\) and \(c\) tell you the signs of the two numbers before you start. When the leading coefficient is not 1 but is a common factor, take it out first.`,
    goals: [
      "explain why \\(x^2+bx+c=(x+r)(x+s)\\) needs \\(rs=c\\) and \\(r+s=b\\);",
      "use the signs of \\(b\\) and \\(c\\) to predict the signs of \\(r\\) and \\(s\\);",
      "factor trinomials \\(x^2+bx+c\\), and recognise ones that do not factor over the integers;",
      "take out a common factor first, then factor the remaining trinomial;",
      "connect the factors to the \\(x\\)-intercepts of \\(y=x^2+bx+c\\).",
    ],
    curriculum: "A1.3 (factor quadratic expressions in one variable by selecting and applying an appropriate strategy), A1.5 (connection between factors and x-intercepts)",
    prior: [
      [S`Expand \((x+3)(x-5)\).`, S`\(x^2-2x-15\).`],
      [S`Which two integers multiply to \(12\) and add to \(-7\)?`, S`\(-3\) and \(-4\).`],
      [S`Factor out the GCF of \(3x^2-9x\).`, S`\(3x(x-3)\).`],
    ],
    words: [
      ["Trinomial", "a polynomial with three terms", "\\(x^2-x-12\\)"],
      ["Simple trinomial", "leading coefficient 1", "\\(x^2+bx+c\\)"],
      ["Product–sum pair", "r and s with rs = c and r + s = b", "\\(c=-12,\\ b=-1:\\ -4,\\ 3\\)"],
      ["Not factorable", "no integer pair works", "\\(x^2+x+1\\)"],
      ["Zero of a factor", "x-value making a factor zero", "\\(x-4=0\\Rightarrow x=4\\)"],
    ],
  }),

  section("📌 Product and sum", S`
  <p>In \((x+r)(x+s)=x^2+rx+sx+rs\), the middle terms \(rx+sx\) combine to \((r+s)x\). Read backwards: for \(x^2+bx+c\), find \(r,s\) with \(r\cdot s=c\) and \(r+s=b\).</p>
  ${fig(areaBox(["x", "+r"], ["x", "+s"], [["x²", "rx"], ["sx", "rs"]], "(x + r)(x + s)"), "The constant is rs; the two middle pieces add to (r + s)x.")}
  ${table(["Sign of c", "Sign of b", "Signs of r and s", "Example"], [
    ["+", "+", "both +", "\\(x^2+9x+20=(x+4)(x+5)\\)"],
    ["+", "−", "both −", "\\(x^2-9x+20=(x-4)(x-5)\\)"],
    ["−", "+", "opposite; larger is +", "\\(x^2+x-20=(x+5)(x-4)\\)"],
    ["−", "−", "opposite; larger is −", "\\(x^2-x-20=(x-5)(x+4)\\)"],
  ])}
  ${keyIdea(S`List the factor pairs of \(c\) systematically, from \(1\times c\) upward, and stop when a pair has the right sum. If no pair works, the trinomial does not factor over the integers.`)}`),

  widget("trinomialFinder", { init: [-3, -28] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Check the SUM as well as the product: x² + 10x + 24 is (x + 4)(x + 6), not (x + 3)(x + 8).",
    "With c negative, the two numbers have opposite signs.",
    "Take out a common factor first: 3x² − 3x − 36 = 3(x² − x − 12) = 3(x − 4)(x + 3).",
    "A leading −1 should be factored out: −x² + 5x + 6 = −(x² − 5x − 6).",
    "(x − 2)(x + 7) and (x + 7)(x − 2) are the same; order does not matter.",
  ])}`),

  examples([
    ["Both numbers positive", S`Factor \(x^2+11x+28\).`,
      [S`<b>Targets.</b> Product \(c=28\), sum \(b=11\). Both are positive, so both numbers are positive.`,
        S`<b>Factor pairs of 28.</b> \(1\times28\) (sum \(29\)), \(2\times14\) (sum \(16\)), \(4\times7\) (sum \(11\)) ✓`,
        S`<b>Write the factors.</b> \(x^2+11x+28=(x+4)(x+7)\).`,
        S`<b>Check by expanding.</b> \(x^2+7x+4x+28=x^2+11x+28\) ✓`,
        S`<b>Graph check.</b> The factors are zero at \(x=-4\) and \(x=-7\); the parabola \(y=x^2+11x+28\) crosses the \(x\)-axis exactly there ✓`],
      S`\((x+4)(x+7)\)`,
      plane({ view: { xmin: -9, xmax: 0, ymin: -3, ymax: 6 }, curves: [{ f: (x) => x * x + 11 * x + 28, color: "violet" }], points: [{ x: -4, y: 0, label: "(−4, 0)", color: "amber" }, { x: -7, y: 0, label: "(−7, 0)", color: "amber" }], step: { x: 1, y: 1 } })],

    ["Both numbers negative", S`Factor \(x^2-13x+36\).`,
      [S`<b>Signs.</b> \(c=36>0\) so the numbers have the same sign; \(b=-13<0\) so both are negative.`,
        S`<b>Pairs of 36 (negative).</b> \(-1,-36\) (sum \(-37\)); \(-2,-18\) (\(-20\)); \(-3,-12\) (\(-15\)); \(-4,-9\) (\(-13\)) ✓`,
        S`<b>Factors.</b> \((x-4)(x-9)\).`,
        S`<b>Check.</b> \(x^2-9x-4x+36=x^2-13x+36\) ✓`,
        S`<b>Graph check.</b> Zeros at \(x=4\) and \(x=9\); the vertex is midway at \(x=6.5\) ✓`],
      S`\((x-4)(x-9)\)`,
      plane({ view: { xmin: 2, xmax: 11, ymin: -8, ymax: 6 }, curves: [{ f: (x) => x * x - 13 * x + 36, color: "violet" }], points: [{ x: 4, y: 0, label: "(4, 0)", color: "amber" }, { x: 9, y: 0, label: "(9, 0)", color: "amber" }, { x: 6.5, y: -6.25, label: "(6.5, −6.25)", color: "blue" }], step: { x: 1, y: 1 } })],

    ["Opposite signs", S`Factor \(x^2-3x-40\).`,
      [S`<b>Signs.</b> \(c=-40<0\): one positive and one negative number. \(b=-3<0\): the negative number has the larger size.`,
        S`<b>Pairs of 40 with difference 3.</b> \(1,40\); \(2,20\); \(4,10\); \(5,8\) — the last differ by \(3\).`,
        S`<b>Assign signs.</b> Larger size negative: \(-8\) and \(+5\). Check: \(-8\times5=-40\), \(-8+5=-3\) ✓`,
        S`<b>Factors.</b> \((x-8)(x+5)\).`,
        S`<b>Graph check.</b> Zeros at \(x=8\) and \(x=-5\) ✓; \(y\)-intercept \(-40\) ✓`],
      S`\((x-8)(x+5)\)`,
      plane({ view: { xmin: -7, xmax: 10, ymin: -45, ymax: 15 }, curves: [{ f: (x) => x * x - 3 * x - 40, color: "violet" }], points: [{ x: 8, y: 0, label: "(8, 0)", color: "amber" }, { x: -5, y: 0, label: "(−5, 0)", color: "amber" }, { x: 0, y: -40, label: "(0, −40)", color: "blue" }], step: { x: 1, y: 5 } })],

    ["Common factor first", S`Factor fully: \(2x^2+6x-56\).`,
      [S`<b>GCF.</b> \(2\) divides every term: \(2x^2+6x-56=2(x^2+3x-28)\).`,
        S`<b>Trinomial.</b> Product \(-28\), sum \(3\): opposite signs, larger positive. Pairs: \(4,7\) differ by \(3\), so \(+7\) and \(-4\).`,
        S`<b>Fully factored.</b> \(2(x+7)(x-4)\).`,
        S`<b>Check.</b> \(2(x^2-4x+7x-28)=2(x^2+3x-28)=2x^2+6x-56\) ✓`,
        S`<b>Why first?</b> Without the GCF the search would need pairs for \(2\times(-56)\); taking out \(2\) keeps the numbers small.`],
      S`\(2(x+7)(x-4)\)`,
      plane({ view: { xmin: -9, xmax: 6, ymin: -65, ymax: 20 }, curves: [{ f: (x) => 2 * x * x + 6 * x - 56, color: "violet" }], points: [{ x: -7, y: 0, label: "(−7, 0)", color: "amber" }, { x: 4, y: 0, label: "(4, 0)", color: "amber" }], step: { x: 1, y: 10 } })],

    ["Dimensions from an area", S`A rectangle has area \(x^2+9x+18\) square units, and both side lengths are binomials \(x+r\). Find the dimensions, then evaluate them when \(x=4\).`,
      [S`<b>Factor.</b> Product \(18\), sum \(9\): pairs \(1,18\); \(2,9\); \(3,6\) — sum \(9\) ✓`,
        S`<b>Dimensions.</b> \(x^2+9x+18=(x+3)(x+6)\): the sides are \(x+3\) and \(x+6\).`,
        S`<b>At \(x=4\).</b> Sides \(7\) and \(10\); area \(70\).`,
        S`<b>Check.</b> \(4^2+9(4)+18=16+36+18=70\) ✓`],
      S`\((x+3)\) by \((x+6)\); 7 by 10 when x = 4`,
      fig(areaBox(["x", "+6"], ["x", "+3"], [["x²", "6x"], ["3x", "18"]], "x² + 9x + 18"), "6x + 3x = 9x and 3 × 6 = 18.")],
  ]),

  practice([
    q("positive", S`Factor \(x^2+12x+35\).`, fexpr("(x+5)*(x+7)"), "Product 35, sum 12.", [S`\(5\times7=35\), \(5+7=12\).`], S`\((x+5)(x+7)\)`),
    q("negative", S`Factor \(x^2-10x+21\).`, fexpr("(x-3)*(x-7)"), "Both negative.", [S`\(-3\times-7=21\), sum \(-10\).`], S`\((x-3)(x-7)\)`),
    q("mixed", S`Factor \(x^2+4x-45\).`, fexpr("(x+9)*(x-5)"), "Opposite signs, larger positive.", [S`\(9\times(-5)=-45\), \(9-5=4\).`], S`\((x+9)(x-5)\)`),
    q("gcf", S`Factor fully: \(3x^2-12x-63\).`, fexpr("3*(x-7)*(x+3)"), "Take out 3 first.", [S`\(3(x^2-4x-21)=3(x-7)(x+3)\).`], S`\(3(x-7)(x+3)\)`),
    q("which", S`Which trinomial does NOT factor over the integers?`, choice(["x² + 5x + 7", "x² + 8x + 7", "x² − 6x + 8", "x² + x − 6"], 0), "Look for a pair with product 7 and sum 5.", [S`Pairs of \(7\): \(1,7\) only (sum \(8\)). No pair sums to \(5\).`], S`\(x^2+5x+7\)`),
  ]),

  ...hard([
    ["A leading −1", S`Factor fully: \(-x^2+2x+48\).`,
      [S`<b>Take out \(-1\).</b> \(-(x^2-2x-48)\).`,
        S`<b>Factor the trinomial.</b> Product \(-48\), sum \(-2\): \(-8\) and \(6\).`,
        S`<b>Result.</b> \(-(x-8)(x+6)\).`,
        S`<b>Check.</b> \(-(x^2+6x-8x-48)=-(x^2-2x-48)=-x^2+2x+48\) ✓. The parabola opens down with zeros \(8\) and \(-6\).`],
      S`−(x − 8)(x + 6)`,
      plane({ view: { xmin: -8, xmax: 10, ymin: -15, ymax: 55 }, curves: [{ f: (x) => -x * x + 2 * x + 48, color: "violet" }], points: [{ x: 8, y: 0, label: "(8, 0)", color: "amber" }, { x: -6, y: 0, label: "(−6, 0)", color: "amber" }], step: { x: 2, y: 10 } })],
    ["Which values of b?", S`Find every integer \(b\) for which \(x^2+bx+12\) can be factored over the integers.`,
      [S`<b>Pairs of 12.</b> \((1,12),(2,6),(3,4)\) and their negatives.`,
        S`<b>Sums.</b> \(13,\,8,\,7\) and \(-13,\,-8,\,-7\).`,
        S`<b>Answer.</b> \(b\in\{\pm7,\,\pm8,\,\pm13\}\). Example: \(b=-8\) gives \((x-2)(x-6)\).`],
      S`b = ±7, ±8, ±13`],
  ], [
    q("hard", S`Factor fully: \(-x^2-x+30\).`, fexpr("-(x+6)*(x-5)"), "Take out −1.", [S`\(-(x^2+x-30)=-(x+6)(x-5)\).`], S`\(-(x+6)(x-5)\)`),
    q("hard", S`Factor fully: \(5x^2-5x-100\).`, fexpr("5*(x-5)*(x+4)"), "GCF 5.", [S`\(5(x^2-x-20)=5(x-5)(x+4)\).`], S`\(5(x-5)(x+4)\)`),
    q("hard", S`How many integers \(b\) make \(x^2+bx-18\) factorable over the integers?`, num(6), "Pairs of −18.", [S`\((1,-18),(-1,18),(2,-9),(-2,9),(3,-6),(-3,6)\): sums \(-17,17,-7,7,-3,3\).`], S`\(6\)`),
    q("hard", S`Factor \(x^4-13x^2+36\) as a product of two trinomial-type factors in \(x^2\).`, fexpr("(x^2-4)*(x^2-9)"), "Let u = x².", [S`\(u^2-13u+36=(u-4)(u-9)\).`], S`\((x^2-4)(x^2-9)\)`),
    q("hard", S`A rectangle's area is \(x^2+2x-35\) and one side is \(x+7\). Enter the other side when \(x=10\).`, num(5), "Factor the area.", [S`\((x+7)(x-5)\); at \(x=10\): \(5\).`], S`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["What two numbers am I looking for in x² + bx + c?", "Two integers with product c and sum b."],
      ["How do the signs help?", "c > 0: same signs (the sign of b). c < 0: opposite signs, the larger one has the sign of b."],
      ["What if the leading coefficient is 3?", "If 3 divides every term, take it out first; otherwise use the method of lesson 2.4."],
      ["How can I tell it does not factor?", "No factor pair of c has sum b."],
      ["What do the factors tell me about the graph?", "Each factor x − r gives an x-intercept at x = r."],
    ],
    summary: [
      "x² + bx + c = (x + r)(x + s) with rs = c, r + s = b.",
      "Use the sign pattern before searching.",
      "Common factor first, including −1.",
      "Factors ↔ x-intercepts of the parabola.",
    ],
    next: "2.4 factors trinomials ax² + bx + c with a ≠ 1.",
  }),
];
