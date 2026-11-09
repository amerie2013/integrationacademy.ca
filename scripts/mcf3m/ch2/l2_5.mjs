// MCF3M 2.5 — Factoring Special Quadratics: difference of squares, perfect-square trinomials, GCF first,
// recognising the patterns, and geometric contexts.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, fexpr, hard, plane, fig } from "../lib.mjs";
import { areaBox } from "../figs.mjs";
const S = String.raw;

export const TITLE = "2.5 Factoring Special Quadratics";

export const blocks = () => [
  intro({
    icon: "✨",
    title: "Factoring Special Quadratics",
    overview: S`Two patterns from expanding appear so often that it pays to recognise them on sight. A <b>difference of squares</b> \(a^2-b^2\) factors as \((a-b)(a+b)\), and a <b>perfect square trinomial</b> \(a^2\pm2ab+b^2\) factors as \((a\pm b)^2\). Spotting them saves time, and they have special graphs: a difference of squares \(x^2-k^2\) has zeros \(\pm k\) placed symmetrically about the \(y\)-axis, and a perfect square touches the \(x\)-axis at a single point.`,
    goals: [
      "recognise and factor a difference of squares, including \\(4x^2-25\\);",
      "recognise and factor a perfect square trinomial, including \\(9x^2+24x+16\\);",
      "take out a common factor first, then apply a pattern;",
      "explain why \\(x^2+k^2\\) does not factor over the real numbers;",
      "connect each pattern to the shape of its graph and use it in a context.",
    ],
    curriculum: "A1.3 (factor differences of squares, e.g. 4x² − 25, and perfect square trinomials, e.g. 9x² + 24x + 16, by selecting and applying an appropriate strategy)",
    prior: [
      [S`Expand \((x-6)(x+6)\).`, S`\(x^2-36\): the middle terms cancel.`],
      [S`Expand \((2x+5)^2\).`, S`\(4x^2+20x+25\).`],
      [S`Is \(49x^2\) a perfect square?`, S`Yes: \((7x)^2\).`],
    ],
    words: [
      ["Perfect square", "a term equal to something squared", "\\(25x^2=(5x)^2\\)"],
      ["Difference of squares", "\\(a^2-b^2=(a-b)(a+b)\\)", "\\(x^2-49=(x-7)(x+7)\\)"],
      ["Perfect square trinomial", "\\(a^2\\pm2ab+b^2=(a\\pm b)^2\\)", "\\(x^2-10x+25=(x-5)^2\\)"],
      ["Sum of squares", "\\(a^2+b^2\\) — does not factor over ℝ", "\\(x^2+9\\)"],
      ["Double root", "a zero from a repeated factor", "\\((x-5)^2=0\\Rightarrow x=5\\)"],
    ],
  }),

  section("📌 The two patterns", S`
  ${table(["Pattern", "Test", "Factored form", "Example"], [
    ["Difference of squares", "two terms, both perfect squares, minus between them", "\\((a-b)(a+b)\\)", "\\(4x^2-25=(2x-5)(2x+5)\\)"],
    ["Perfect square (+)", "first and last are squares; middle = +2ab", "\\((a+b)^2\\)", "\\(9x^2+24x+16=(3x+4)^2\\)"],
    ["Perfect square (−)", "first and last are squares; middle = −2ab", "\\((a-b)^2\\)", "\\(x^2-14x+49=(x-7)^2\\)"],
  ])}
  <div style="display:flex;flex-wrap:wrap;gap:12px;justify-content:center;">
  ${fig(areaBox(["2x", "+5"], ["2x", "−5"], [["4x²", "10x"], ["−10x", "−25"]], "(2x − 5)(2x + 5)"), "The middle cells cancel: only 4x² − 25 is left.")}
  ${fig(areaBox(["3x", "+4"], ["3x", "+4"], [["9x²", "12x"], ["12x", "16"]], "(3x + 4)²"), "Two equal middle cells: 2(12x) = 24x.")}
  </div>
  ${keyIdea(S`To test a perfect square trinomial, take the square roots of the first and last terms, \(a\) and \(b\), and check that the middle term is exactly \(2ab\). If it is not, use the general method of 2.3 or 2.4.`)}`),

  widget("specialPatterns", { init: "square" }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "x² + 25 is a SUM of squares; it does not factor as (x + 5)(x − 5) (that gives x² − 25).",
    "x² + 6x + 16 is not a perfect square: √16 = 4 but 2(4)x = 8x ≠ 6x.",
    "Take out a common factor first: 3x² − 27 = 3(x² − 9) = 3(x − 3)(x + 3).",
    "(x − 4)² is NOT x² − 16; a perfect square has a middle term.",
    "Both terms must be squares: x² − 8 does not factor over the integers.",
  ])}`),

  examples([
    ["Difference of squares", S`Factor \(16x^2-81\).`,
      [S`<b>Recognise.</b> Two terms with a minus sign; \(16x^2=(4x)^2\) and \(81=9^2\). It is \(a^2-b^2\) with \(a=4x\), \(b=9\).`,
        S`<b>Apply.</b> \(a^2-b^2=(a-b)(a+b)\), so \(16x^2-81=(4x-9)(4x+9)\).`,
        S`<b>Why it works.</b> Expanding, the middle products \(+36x\) and \(-36x\) cancel: \(16x^2+36x-36x-81\) ✓`,
        S`<b>Graph check.</b> Zeros at \(x=\tfrac94\) and \(x=-\tfrac94\), symmetric about the \(y\)-axis because there is no \(x\)-term ✓`],
      S`\((4x-9)(4x+9)\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -90, ymax: 30 }, curves: [{ f: (x) => 16 * x * x - 81, color: "violet" }], points: [{ x: 2.25, y: 0, label: "(2.25, 0)", color: "amber" }, { x: -2.25, y: 0, label: "(−2.25, 0)", color: "amber" }, { x: 0, y: -81, label: "(0, −81)", color: "blue" }], step: { x: 1, y: 15 } })],

    ["Perfect square trinomial", S`Factor \(25x^2-30x+9\).`,
      [S`<b>Test the ends.</b> \(25x^2=(5x)^2\) and \(9=3^2\), so \(a=5x\), \(b=3\).`,
        S`<b>Test the middle.</b> \(2ab=2(5x)(3)=30x\); the middle term is \(-30x\), so the pattern is \((a-b)^2\).`,
        S`<b>Factor.</b> \(25x^2-30x+9=(5x-3)^2\).`,
        S`<b>Check.</b> \((5x-3)(5x-3)=25x^2-15x-15x+9\) ✓`,
        S`<b>Graph.</b> One zero, \(x=\tfrac35\): the parabola touches the axis at its vertex \((0.6,\,0)\) ✓`],
      S`\((5x-3)^2\)`,
      plane({ view: { xmin: -0.5, xmax: 1.7, ymin: -1, ymax: 12 }, curves: [{ f: (x) => 25 * x * x - 30 * x + 9, color: "violet" }], points: [{ x: 0.6, y: 0, label: "(0.6, 0)", color: "amber" }, { x: 0, y: 9, label: "(0, 9)", color: "blue" }], step: { x: 0.5, y: 2 } })],

    ["Common factor, then a pattern", S`Factor fully: \(2x^3-50x\) and \(-3x^2+24x-48\).`,
      [S`<b>First.</b> GCF \(2x\): \(2x(x^2-25)\). The bracket is a difference of squares: \(2x(x-5)(x+5)\).`,
        S`<b>Second.</b> GCF \(-3\): \(-3(x^2-8x+16)\). Ends \(x^2\), \(16=4^2\); middle \(2(x)(4)=8x\) ✓: \(-3(x-4)^2\).`,
        S`<b>Check the first at \(x=1\).</b> \(2-50=-48\) and \(2(1)(-4)(6)=-48\) ✓`,
        S`<b>Check the second at \(x=0\).</b> \(-48\) and \(-3(16)=-48\) ✓`],
      S`\(2x(x-5)(x+5)\); \(-3(x-4)^2\)`,
      plane({ view: { xmin: -1, xmax: 8, ymin: -50, ymax: 5 }, curves: [{ f: (x) => -3 * x * x + 24 * x - 48, color: "violet" }], points: [{ x: 4, y: 0, label: "(4, 0)", color: "amber" }, { x: 0, y: -48, label: "(0, −48)", color: "blue" }], step: { x: 1, y: 10 } })],

    ["Which pattern, if any?", S`Decide which expressions are special and factor them: (a) \(x^2+16\); (b) \(x^2+8x+16\); (c) \(x^2+10x+16\); (d) \(9-x^2\).`,
      [S`<b>(a)</b> A sum of squares: \(x^2+16>0\) for every \(x\), so it has no zeros and cannot have real linear factors. Not factorable.`,
        S`<b>(b)</b> \(\sqrt{16}=4\), \(2(4)x=8x\) ✓: \((x+4)^2\).`,
        S`<b>(c)</b> \(2(4)x=8x\ne10x\): not a perfect square, but product \(16\), sum \(10\) gives \(2\) and \(8\): \((x+2)(x+8)\).`,
        S`<b>(d)</b> \(9-x^2=3^2-x^2=(3-x)(3+x)\).`,
        S`<b>Graph check for (a).</b> The parabola \(y=x^2+16\) lies entirely above the axis, so there is no zero and no factor \(x-r\) ✓`],
      S`(a) not factorable; (b) \((x+4)^2\); (c) \((x+2)(x+8)\); (d) \((3-x)(3+x)\)`,
      plane({ view: { xmin: -10, xmax: 3, ymin: -12, ymax: 30 }, curves: [{ f: (x) => x * x + 16, color: "red" }, { f: (x) => x * x + 8 * x + 16, color: "violet" }, { f: (x) => x * x + 10 * x + 16, color: "blue" }], points: [{ x: -4, y: 0, label: "(−4, 0)", color: "violet" }, { x: -2, y: 0, label: "(−2, 0)", color: "blue" }, { x: -8, y: 0, label: "(−8, 0)", color: "blue" }], step: { x: 1, y: 4 } })],

    ["A square border", S`A square tile of side \(x\) cm has a square hole of side \(4\) cm cut from its centre. Write the remaining area, factor it, and find the area when \(x=10\) in two ways.`,
      [S`<b>Model.</b> Remaining area \(=x^2-16\).`,
        S`<b>Factor.</b> Difference of squares: \(x^2-16=(x-4)(x+4)\).`,
        S`<b>Evaluate both ways at \(x=10\).</b> \(100-16=84\) and \((6)(14)=84\) cm² ✓`,
        S`<b>Meaning.</b> The leftover border can be cut and rearranged into a rectangle \((x-4)\) by \((x+4)\).`,
        S`<b>Arithmetic short-cut.</b> The same pattern gives \(46\times54=(50-4)(50+4)=2500-16=2484\).`],
      S`\(x^2-16=(x-4)(x+4)\); 84 cm² at x = 10`,
      fig(areaBox(["x", "+4"], ["x", "−4"], [["x²", "4x"], ["−4x", "−16"]], "(x − 4)(x + 4) = x² − 16"), "The cells ±4x cancel.")],
  ]),

  practice([
    q("dos", S`Factor \(x^2-121\).`, fexpr("(x-11)*(x+11)"), "121 = 11².", [S`\((x-11)(x+11)\).`], S`\((x-11)(x+11)\)`),
    q("dos", S`Factor \(9x^2-49\).`, fexpr("(3*x-7)*(3*x+7)"), "(3x)² − 7².", [S`\((3x-7)(3x+7)\).`], S`\((3x-7)(3x+7)\)`),
    q("pst", S`Factor \(x^2+18x+81\).`, fexpr("(x+9)^2"), "√81 = 9; 2·9 = 18.", [S`\((x+9)^2\).`], S`\((x+9)^2\)`),
    q("pst", S`Factor \(4x^2-28x+49\).`, fexpr("(2*x-7)^2"), "(2x)² − 2(2x)(7) + 7².", [S`\((2x-7)^2\).`], S`\((2x-7)^2\)`),
    q("which", S`Which expression can NOT be factored over the integers?`, choice(["x² + 36", "x² − 36", "x² − 12x + 36", "36 − x²"], 0), "A sum of squares.", [S`\(x^2+36\) is a sum of squares.`], S`\(x^2+36\)`),
  ]),

  ...hard([
    ["Twice the pattern", S`Factor fully: \(x^4-81\).`,
      [S`<b>First difference.</b> \(x^4-81=(x^2)^2-9^2=(x^2-9)(x^2+9)\).`,
        S`<b>Again.</b> \(x^2-9=(x-3)(x+3)\); \(x^2+9\) is a sum of squares and stops.`,
        S`<b>Result.</b> \((x-3)(x+3)(x^2+9)\). Check at \(x=1\): \(1-81=-80\) and \((-2)(4)(10)=-80\) ✓`],
      S`(x − 3)(x + 3)(x² + 9)`],
    ["Make it a perfect square", S`Find all values of \(k\) that make \(9x^2+kx+25\) a perfect square trinomial, and factor each.`,
      [S`<b>Ends.</b> \(9x^2=(3x)^2\), \(25=5^2\).`,
        S`<b>Middle.</b> \(k=\pm2(3)(5)=\pm30\).`,
        S`<b>Factors.</b> \(k=30\): \((3x+5)^2\); \(k=-30\): \((3x-5)^2\).`],
      S`k = ±30`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -2, ymax: 30 }, curves: [{ f: (x) => 9 * x * x + 30 * x + 25, color: "violet" }, { f: (x) => 9 * x * x - 30 * x + 25, color: "blue" }], points: [{ x: -5 / 3, y: 0, label: "(−1.67, 0)", color: "violet" }, { x: 5 / 3, y: 0, label: "(1.67, 0)", color: "blue" }], step: { x: 1, y: 5 } })],
  ], [
    q("hard", S`Factor fully: \(5x^2-80\).`, fexpr("5*(x-4)*(x+4)"), "GCF 5.", [S`\(5(x^2-16)=5(x-4)(x+4)\).`], S`\(5(x-4)(x+4)\)`),
    q("hard", S`Factor fully: \(-2x^2-20x-50\).`, fexpr("-2*(x+5)^2"), "GCF −2.", [S`\(-2(x^2+10x+25)=-2(x+5)^2\).`], S`\(-2(x+5)^2\)`),
    q("hard", S`Evaluate \(73^2-27^2\) by factoring.`, num(4600), "(73 − 27)(73 + 27).", [S`\(46\times100=4600\).`], S`\(4600\)`),
    q("hard", S`Factor \((x+3)^2-16\).`, fexpr("(x-1)*(x+7)"), "a = x + 3, b = 4.", [S`\((x+3-4)(x+3+4)=(x-1)(x+7)\).`], S`\((x-1)(x+7)\)`),
    q("hard", S`\(x^2-12x+c\) is a perfect square. Enter \(c\).`, num(36), "(x − 6)².", [S`\(c=6^2=36\).`], S`\(36\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I recognise a difference of squares?", "Two terms, both perfect squares, with a minus sign between them."],
      ["How do I test for a perfect square trinomial?", "Take roots a and b of the end terms; the middle must be ±2ab."],
      ["Does x² + 49 factor?", "Not over the real numbers: it is a sum of squares and is never zero."],
      ["What does a perfect square look like on a graph?", "The parabola touches the x-axis at one point (a double root)."],
      ["What comes first, the GCF or the pattern?", "The GCF; then look for a pattern inside the bracket."],
    ],
    summary: [
      "a² − b² = (a − b)(a + b).",
      "a² ± 2ab + b² = (a ± b)².",
      "Sums of squares do not factor over ℝ.",
      "GCF first, then the pattern; check by expanding.",
    ],
    next: "2.6 reviews every factoring strategy in the chapter.",
  }),
];
