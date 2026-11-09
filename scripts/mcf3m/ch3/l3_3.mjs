// MCF3M 3.3 — Solving Quadratic Equations by Factoring: zero-product property, rearranging, common factors,
// a ≠ 1, special patterns, checking against the graph.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, roots, hard, plane } from "../lib.mjs";
const S = String.raw;

export const TITLE = "3.3 Solving Quadratic Equations by Factoring";

export const blocks = () => [
  intro({
    icon: "✂️",
    title: "Solving Quadratic Equations by Factoring",
    overview: S`If the product of two numbers is zero, at least one of them must be zero. This <b>zero-product property</b> turns a factored quadratic equation into two simple linear equations: \((x-4)(2x+1)=0\) means \(x-4=0\) or \(2x+1=0\). To use it, first rearrange the equation so that one side is zero, then factor the other side completely. The roots you find are exactly the \(x\)-intercepts of the graph, and they give exact answers where a graph only gives estimates.`,
    goals: [
      "state and explain the zero-product property;",
      "rearrange a quadratic equation into the form \\(ax^2+bx+c=0\\);",
      "solve by factoring with common factors, trinomials (a = 1 and a ≠ 1) and special patterns;",
      "verify roots by substitution and by the graph;",
      "avoid the common error of dividing both sides by \\(x\\).",
    ],
    curriculum: "A1.4 (solve quadratic equations by selecting and applying a factoring strategy), A1.5 (connect the factors to the x-intercepts), A1.8 (determine the real roots of quadratic equations such as 100x² = 115x + 35)",
    prior: [
      [S`Factor \(x^2-x-20\).`, S`\((x-5)(x+4)\).`],
      [S`Solve \(3x+5=0\).`, S`\(x=-\tfrac53\).`],
      [S`If \(ab=0\) and \(a=7\), what is \(b\)?`, S`\(b=0\).`],
    ],
    words: [
      ["Zero-product property", "if ab = 0 then a = 0 or b = 0", "\\((x-2)(x+5)=0\\Rightarrow x=2\\) or \\(-5\\)"],
      ["Standard form of an equation", "ax² + bx + c = 0", "\\(x^2-3x-10=0\\)"],
      ["Root", "a value that makes the equation true", "\\(x=5\\)"],
      ["Extraneous", "a 'solution' that does not satisfy the original equation", "lost or extra roots from dividing"],
      ["Verify", "substitute into the original equation", "\\(5^2-3(5)-10=0\\) ✓"],
    ],
  }),

  section("📌 The zero-product method", S`
  ${table(["Step", "Example: \\(2x^2=x+15\\)"], [
    ["1. Rearrange so one side is 0", "\\(2x^2-x-15=0\\)"],
    ["2. Factor completely", "\\((2x+5)(x-3)=0\\)"],
    ["3. Set each factor to 0", "\\(2x+5=0\\) or \\(x-3=0\\)"],
    ["4. Solve each linear equation", "\\(x=-\\tfrac52\\) or \\(x=3\\)"],
    ["5. Verify", "\\(2(9)=18=3+15\\) ✓; \\(2(6.25)=12.5=-2.5+15\\) ✓"],
  ])}
  ${keyIdea(S`The zero-product property only works for a product equal to <b>zero</b>. From \((x-1)(x-2)=6\) you cannot conclude \(x-1=6\); expand, move the \(6\) across, and factor again: \(x^2-3x-4=0\Rightarrow(x-4)(x+1)=0\).`)}
  ${plane({ view: { xmin: -4, xmax: 5, ymin: -17, ymax: 8 }, curves: [{ f: (x) => 2 * x * x - x - 15, color: "violet" }], points: [{ x: -2.5, y: 0, label: "(−2.5, 0)", color: "amber" }, { x: 3, y: 0, label: "(3, 0)", color: "amber" }], step: { x: 1, y: 3 } }, "The roots of 2x² − x − 15 = 0 are the x-intercepts of y = 2x² − x − 15.")}`),

  widget("zeroProduct", { init: [2, -5, 3] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "Never divide both sides by x: x² = 5x becomes x(x − 5) = 0, giving x = 0 AND x = 5.",
    "Set each factor to zero, not each term: (x − 3)(x + 4) = 0 gives x = 3 or x = −4.",
    "A constant factor such as 3 in 3(x − 2)(x + 1) = 0 can never be zero; it gives no root.",
    "A factor 2x + 7 = 0 gives x = −7/2, not −7.",
    "Move every term to one side first; check the answers in the ORIGINAL equation.",
  ])}`),

  examples([
    ["A common factor", S`Solve \(3x^2=12x\).`,
      [S`<b>Rearrange.</b> \(3x^2-12x=0\). (Do not divide by \(x\): that would lose a root.)`,
        S`<b>Factor.</b> GCF \(3x\): \(3x(x-4)=0\).`,
        S`<b>Zero-product.</b> \(3x=0\Rightarrow x=0\), or \(x-4=0\Rightarrow x=4\).`,
        S`<b>Verify.</b> \(x=0\): \(0=0\) ✓. \(x=4\): \(3(16)=48=12(4)\) ✓`,
        S`<b>Graph check.</b> \(y=3x^2-12x\) crosses the axis at \(0\) and \(4\) ✓`],
      S`\(x=0\) or \(x=4\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -14, ymax: 8 }, curves: [{ f: (x) => 3 * x * x - 12 * x, color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)", color: "amber" }, { x: 4, y: 0, label: "(4, 0)", color: "amber" }], step: { x: 1, y: 2 } })],

    ["Rearrange a trinomial", S`Solve \(x^2+40=13x\).`,
      [S`<b>Rearrange.</b> \(x^2-13x+40=0\).`,
        S`<b>Factor.</b> Product \(40\), sum \(-13\): \(-5\) and \(-8\). \((x-5)(x-8)=0\).`,
        S`<b>Solve.</b> \(x=5\) or \(x=8\).`,
        S`<b>Verify.</b> \(25+40=65=13(5)\) ✓; \(64+40=104=13(8)\) ✓`],
      S`\(x=5\) or \(x=8\)`,
      plane({ view: { xmin: 2, xmax: 11, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x * x - 13 * x + 40, color: "violet" }], points: [{ x: 5, y: 0, label: "(5, 0)", color: "amber" }, { x: 8, y: 0, label: "(8, 0)", color: "amber" }], step: { x: 1, y: 1 } })],

    ["Leading coefficient not 1", S`Solve \(100x^2=115x+35\).`,
      [S`<b>Rearrange.</b> \(100x^2-115x-35=0\).`,
        S`<b>Common factor.</b> \(5(20x^2-23x-7)=0\). The factor \(5\) is never zero, so solve \(20x^2-23x-7=0\).`,
        S`<b>Decomposition.</b> \(ac=-140\), \(b=-23\): \(-28\) and \(5\). \(20x^2-28x+5x-7=4x(5x-7)+1(5x-7)=(5x-7)(4x+1)\).`,
        S`<b>Solve.</b> \(5x-7=0\Rightarrow x=\tfrac75=1.4\); \(4x+1=0\Rightarrow x=-\tfrac14\).`,
        S`<b>Verify \(x=1.4\).</b> \(100(1.96)=196\) and \(115(1.4)+35=161+35=196\) ✓`],
      S`\(x=1.4\) or \(x=-0.25\)`,
      plane({ view: { xmin: -1, xmax: 2, ymin: -70, ymax: 40 }, curves: [{ f: (x) => 100 * x * x - 115 * x - 35, color: "violet" }], points: [{ x: 1.4, y: 0, label: "(1.4, 0)", color: "amber" }, { x: -0.25, y: 0, label: "(−0.25, 0)", color: "amber" }], step: { x: 0.5, y: 10 } })],

    ["A product equal to a number", S`Solve \((x+2)(x-3)=14\).`,
      [S`<b>Warning.</b> The right side is \(14\), not \(0\), so the zero-product property does not apply yet.`,
        S`<b>Expand and rearrange.</b> \(x^2-x-6=14\Rightarrow x^2-x-20=0\).`,
        S`<b>Factor and solve.</b> \((x-5)(x+4)=0\Rightarrow x=5\) or \(x=-4\).`,
        S`<b>Verify.</b> \((7)(2)=14\) ✓; \((-2)(-7)=14\) ✓`,
        S`<b>Graph view.</b> \(y=(x+2)(x-3)\) meets the line \(y=14\) at \(x=-4\) and \(x=5\).`],
      S`\(x=5\) or \(x=-4\)`,
      plane({ view: { xmin: -6, xmax: 7, ymin: -8, ymax: 20 }, curves: [{ f: (x) => (x + 2) * (x - 3), color: "violet" }], lines: [{ m: 0, b: 14, color: "green", dash: true }], points: [{ x: 5, y: 14, label: "(5, 14)", color: "amber" }, { x: -4, y: 14, label: "(−4, 14)", color: "amber" }], step: { x: 1, y: 2 } })],

    ["Special patterns", S`Solve (a) \(9x^2-49=0\) and (b) \(4x^2+20x+25=0\).`,
      [S`<b>(a) Difference of squares.</b> \((3x-7)(3x+7)=0\Rightarrow x=\pm\tfrac73\).`,
        S`<b>(b) Perfect square.</b> \((2x+5)^2=0\Rightarrow2x+5=0\Rightarrow x=-\tfrac52\) (a double root).`,
        S`<b>Verify (a).</b> \(9\cdot\tfrac{49}9-49=0\) ✓. <b>(b)</b> \(4(6.25)-50+25=0\) ✓`,
        S`<b>Graph meaning.</b> (a) crosses the axis at \(\pm2.33\); (b) touches it once at \(-2.5\).`],
      S`(a) \(x=\pm\tfrac73\); (b) \(x=-\tfrac52\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -50, ymax: 30 }, curves: [{ f: (x) => 9 * x * x - 49, color: "violet" }, { f: (x) => (2 * x + 5) ** 2, color: "blue" }], points: [{ x: 7 / 3, y: 0, label: "(2.33, 0)", color: "violet" }, { x: -7 / 3, y: 0, label: "(−2.33, 0)", color: "violet" }, { x: -2.5, y: 0, label: "(−2.5, 0)", color: "blue" }], step: { x: 1, y: 10 } })],
  ]),

  practice([
    q("gcf", S`Solve \(5x^2+20x=0\).`, roots(0, -4), "GCF 5x.", [S`\(5x(x+4)=0\).`], S`\(x=0,\ -4\)`),
    q("trinomial", S`Solve \(x^2-2x=35\).`, roots(7, -5), "Rearrange first.", [S`\(x^2-2x-35=(x-7)(x+5)=0\).`], S`\(x=7,\ -5\)`),
    q("complex", S`Solve \(3x^2+5x-2=0\).`, roots(1 / 3, -2), "ac = −6: 6 and −1.", [S`\((3x-1)(x+2)=0\).`], S`\(x=\tfrac13,\ -2\)`),
    q("special", S`Solve \(x^2-14x+49=0\).`, roots(7), "A perfect square.", [S`\((x-7)^2=0\).`], S`\(x=7\)`),
    q("product", S`Solve \(x(x+3)=10\).`, roots(2, -5), "Expand and move 10.", [S`\(x^2+3x-10=(x+5)(x-2)=0\).`], S`\(x=2,\ -5\)`),
  ]),

  ...hard([
    ["Clear fractions first", S`Solve \(\tfrac12x^2-\tfrac32x=5\).`,
      [S`<b>Multiply by 2.</b> \(x^2-3x=10\Rightarrow x^2-3x-10=0\).`,
        S`<b>Factor.</b> \((x-5)(x+2)=0\Rightarrow x=5\) or \(x=-2\).`,
        S`<b>Verify.</b> \(\tfrac12(25)-\tfrac32(5)=12.5-7.5=5\) ✓; \(\tfrac12(4)+3=5\) ✓`],
      S`x = 5 or x = −2`],
    ["A disguised quadratic", S`Solve \((x-1)^2-5(x-1)+6=0\).`,
      [S`<b>Substitute</b> \(u=x-1\): \(u^2-5u+6=0\Rightarrow(u-2)(u-3)=0\).`,
        S`<b>Back-substitute.</b> \(x-1=2\Rightarrow x=3\); \(x-1=3\Rightarrow x=4\).`,
        S`<b>Verify.</b> \(x=3\): \(4-10+6=0\) ✓; \(x=4\): \(9-15+6=0\) ✓`],
      S`x = 3 or x = 4`,
      plane({ view: { xmin: 1, xmax: 6, ymin: -1, ymax: 4 }, curves: [{ f: (x) => (x - 1) ** 2 - 5 * (x - 1) + 6, color: "violet" }], points: [{ x: 3, y: 0, label: "(3, 0)", color: "amber" }, { x: 4, y: 0, label: "(4, 0)", color: "amber" }], step: { x: 1, y: 1 } })],
  ], [
    q("hard", S`Solve \(6x^2=7x+20\).`, roots(2.5, -4 / 3), "ac = −120: −15 and 8.", [S`\(6x^2-7x-20=(2x-5)(3x+4)=0\).`], S`\(x=\tfrac52,\ -\tfrac43\)`),
    q("hard", S`Solve \((2x-1)(x+3)=x+13\).`, roots(2, -4), "Expand: 2x² + 5x − 3 = x + 13.", [S`\(2x^2+4x-16=0\Rightarrow2(x^2+2x-8)=0\Rightarrow2(x+4)(x-2)=0\).`, S`Check \(x=2\): \((3)(5)=15=2+13\) ✓`], S`\(x=2,\ -4\)`),
    q("hard", S`Solve \(x^4-13x^2+36=0\). How many real roots are there?`, num(4), "u = x².", [S`\((x^2-4)(x^2-9)=0\Rightarrow x=\pm2,\ \pm3\).`], S`\(4\)`),
    q("hard", S`One root of \(x^2+kx-24=0\) is \(x=4\). Enter the other root.`, num(-6), "Substitute x = 4 to find k.", [S`\(16+4k-24=0\Rightarrow k=2\).`, S`\(x^2+2x-24=(x+6)(x-4)\).`], S`\(-6\)`),
    q("hard", S`Solve \(\tfrac13x^2=x+6\).`, roots(6, -3), "Multiply by 3.", [S`\(x^2-3x-18=(x-6)(x+3)=0\).`], S`\(x=6,\ -3\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the zero-product property?", "If a product is zero, at least one factor is zero."],
      ["Why must one side be zero?", "The property only applies to a product equal to zero."],
      ["Why not divide by x?", "Dividing loses the root x = 0; factor out x instead."],
      ["What do the roots mean on the graph?", "They are the x-intercepts of y = ax² + bx + c."],
      ["When is factoring not the best method?", "When the quadratic doesn't factor nicely over the integers — use the quadratic formula (chapter 4)."],
    ],
    summary: [
      "Rearrange to ax² + bx + c = 0.",
      "Factor completely; set each variable factor to zero.",
      "Solve the linear equations; verify in the original equation.",
      "Roots = x-intercepts.",
    ],
    next: "3.4 uses factoring to solve real problems modelled by quadratic equations.",
  }),
];
