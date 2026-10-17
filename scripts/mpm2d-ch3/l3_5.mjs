// MPM2D 3.5 — Special Products (self-study format): difference of squares, perfect-square trinomials,
// common factor first, recognizing the patterns, mental-math applications
import { plane } from "../mth1w-ch4/figs4.mjs";
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, choice, fexpr } from "./lib.mjs";

export const TITLE = "3.5 Special Products";

export const blocks = () => [
  intro({
    icon: "⭐",
    title: "Special Products",
    overview: String.raw`Two patterns from 3.1 — the product of a sum and a difference, and the square of a binomial — appear so often that it pays to recognize them instantly. A difference of squares \(a^2-b^2\) factors as \((a-b)(a+b)\); a perfect-square trinomial \(a^2\pm2ab+b^2\) factors as \((a\pm b)^2\). In this lesson you will spot both patterns, factor them (taking out a common factor first), see why a sum of squares does not factor, and use the patterns for quick mental arithmetic.`,
    goals: [
      "recognize and factor a difference of squares;",
      "recognize and factor a perfect-square trinomial;",
      "take out a common factor before using a pattern;",
      "explain why a² + b² does not factor over the real numbers;",
      "use the patterns for mental calculation.",
    ],
    curriculum: "QR3 (factor polynomial expressions involving differences of squares and perfect-square trinomials)",
    prior: [
      [String.raw`Expand \((x+6)(x-6)\).`, String.raw`\(x^2-36\).`],
      [String.raw`Expand \((x-5)^2\).`, String.raw`\(x^2-10x+25\).`],
      [String.raw`Is \(49x^2\) a perfect square?`, String.raw`Yes: \((7x)^2\).`],
    ],
    words: [
      ["Perfect square", "a square of an integer or a term", "\\(25\\), \\(9x^2\\)"],
      ["Difference of squares", "\\(a^2-b^2\\)", "\\(x^2-49\\)"],
      ["Perfect-square trinomial", "\\(a^2\\pm2ab+b^2\\)", "\\(x^2+6x+9\\)"],
      ["Sum of squares", "\\(a^2+b^2\\) — does not factor", ""],
    ],
  }),

  section("📌 The two patterns", String.raw`
  ${table(["Pattern", "Factored form", "How to spot it"], [
    ["\\(a^2-b^2\\)", "\\((a-b)(a+b)\\)", "two perfect squares with a minus between"],
    ["\\(a^2+2ab+b^2\\)", "\\((a+b)^2\\)", "first and last terms are squares; middle = \\(2\\times\\) the product of the square roots"],
    ["\\(a^2-2ab+b^2\\)", "\\((a-b)^2\\)", "the same, with a minus in the middle"],
  ])}
  ${keyIdea(String.raw`Always ask first: is there a common factor? Then: two terms → difference of squares? Three terms → perfect square? If the pattern fails, use 3.3 or 3.4.`)}`),

  section("📌 Explore", String.raw`<p>The area diagrams show why the patterns work. For a difference of squares, the L-shaped region left after removing the small square can be rearranged into a rectangle. For a perfect square, the four pieces of a square give the three terms.</p>`),

  widget("specialPatterns", { init: "diff" }),

  section("📌 Careful", String.raw`
  ${watchOut([
    "x² + 25 is a sum of squares — it does not factor (over the real numbers).",
    "Check the middle term: x² + 10x + 16 is not a perfect square (2 × x × 4 = 8x).",
    "Both terms must be perfect squares: x² − 8 is not a difference of squares of integers.",
    "Take out the common factor first: 2x² − 50 = 2(x² − 25).",
  ])}`),

  examples([
    ["Difference of squares", String.raw`Factor \(x^2-49\).`,
      [String.raw`\(x^2=(x)^2\) and \(49=7^2\), with a minus between.`, String.raw`\((x-7)(x+7)\). Check: \(x^2+7x-7x-49\) ✓`],
      String.raw`\((x-7)(x+7)\)`,
      plane({ view: { xmin: -10, xmax: 10, ymin: -55, ymax: 30 }, curves: [{ f: (x) => x * x - 49, color: "violet" }], points: [{ x: -7, y: 0, label: "(−7, 0)", color: "red" }, { x: 7, y: 0, label: "(7, 0)", color: "red" }], step: { x: 2, y: 10 } }, "y = x² − 49 has zeros −7 and 7, one from each factor.")],
    ["With coefficients and two variables", String.raw`Factor \(16x^2-81y^2\).`,
      [String.raw`\(16x^2=(4x)^2\), \(81y^2=(9y)^2\).`],
      String.raw`\((4x-9y)(4x+9y)\)`],
    ["Perfect-square trinomial", String.raw`Factor \(9x^2+30x+25\).`,
      [String.raw`\(9x^2=(3x)^2\), \(25=5^2\).`, String.raw`Middle term: \(2\times3x\times5=30x\) ✓ — a perfect square.`],
      String.raw`\((3x+5)^2\)`],
    ["Common factor first", String.raw`Factor fully: \(3x^2-24x+48\).`,
      [String.raw`GCF 3: \(3(x^2-8x+16)\).`, String.raw`\(x^2-8x+16\): \(2\times x\times4=8x\), so it is \((x-4)^2\).`],
      String.raw`\(3(x-4)^2\)`],
    ["Mental math", String.raw`Use the patterns to calculate \(41\times39\) and \(98^2\) without a calculator.`,
      [String.raw`\(41\times39=(40+1)(40-1)=1600-1=1599\).`, String.raw`\(98^2=(100-2)^2=10\,000-400+4=9604\).`],
      String.raw`\(1599\) and \(9604\)`],
  ]),

  practice([
    q("difference", String.raw`Factor \(x^2-64\).`, fexpr("(x-8)(x+8)"),
      "64 = 8².", [String.raw`\(a=x\), \(b=8\).`], String.raw`\(x^2-64=(x-8)(x+8)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("difference", String.raw`Factor \(25x^2-4\).`, fexpr("(5x-2)(5x+2)"),
      "25x² = (5x)².", [String.raw`\(a=5x\), \(b=2\).`], String.raw`\(25x^2-4=(5x-2)(5x+2)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("perfect square", String.raw`Factor \(x^2+12x+36\).`, fexpr("(x+6)^2"),
      "36 = 6² and 2·x·6 = 12x.", [String.raw`A perfect square: \((x+6)^2\).`], String.raw`\(x^2+12x+36=(x+6)^2\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("perfect square", String.raw`Factor \(4x^2-20x+25\).`, fexpr("(2x-5)^2"),
      "4x² = (2x)², 25 = 5², and 2·2x·5 = 20x.", [String.raw`Minus in the middle: \((2x-5)^2\).`], String.raw`\(4x^2-20x+25=(2x-5)^2\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("pattern", "Which expression does NOT factor over the integers?", choice(["x² + 9", "x² − 9", "x² + 6x + 9", "x² − 6x + 9"], 0),
      "Look for the sum of squares.", ["x² + 9 is a sum of squares."], "x² + 9"),
  ]),

  wrapUp({
    qas: [
      ["Why doesn't a sum of squares factor?", "(a + b)(a − b) gives a minus, and (a ± b)² always has a middle term. No product of real binomials gives a² + b² alone."],
      ["How do I check a perfect-square trinomial?", "The first and last terms must be perfect squares (and the last positive), and the middle term must be twice the product of their square roots."],
      ["Can I factor these with 3.3 or 3.4 instead?", "Yes — x² − 49 is x² + 0x − 49 with numbers 7 and −7. The patterns are just faster."],
      ["Is (x − 4)² fully factored?", "Yes. It means (x − 4)(x − 4); neither factor can be factored further."],
      ["Where do the patterns help outside factoring?", "Mental arithmetic (41 × 39, 98²), simplifying expressions, and in Chapter 5 completing the square."],
    ],
    summary: [
      "a² − b² = (a − b)(a + b).",
      "a² ± 2ab + b² = (a ± b)².",
      "Common factor first; check the middle term for perfect squares.",
      "a² + b² does not factor over the real numbers.",
    ],
    next: "3.6 reviews the whole chapter and how to choose a factoring strategy.",
  }),
];
