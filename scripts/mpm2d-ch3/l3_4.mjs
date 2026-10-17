// MPM2D 3.4 — Factoring Complex Trinomials (ax² + bx + c) (self-study format): decomposition (split the middle
// term using a·c), sign patterns, common factor first, two-variable trinomials, checking by expanding
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, fexpr } from "./lib.mjs";
import { areaModel } from "./l3_1.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "3.4 Factoring Complex Trinomials (ax² + bx + c)";

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Factoring Complex Trinomials (ax² + bx + c)",
    overview: String.raw`When the coefficient of \(x^2\) is not \(1\), guessing two brackets becomes slow. Decomposition turns the job into steps you already know: find two numbers whose product is \(a\cdot c\) and whose sum is \(b\), use them to split the middle term into two terms, then factor the four terms by grouping (3.2). In this lesson you will use decomposition for every sign pattern, take out a common factor first, and factor trinomials in two variables.`,
    goals: [
      "explain why decomposition uses the product a·c and the sum b;",
      "factor ax² + bx + c by decomposition and grouping;",
      "handle positive and negative values of a·c and b;",
      "take out a common factor first;",
      "factor trinomials with two variables and check by expanding.",
    ],
    curriculum: "QR3 (factor trinomials of the form ax² + bx + c, using a variety of tools and strategies)",
    prior: [
      [String.raw`Factor by grouping: \(2x^2+6x+x+3\).`, String.raw`\(2x(x+3)+1(x+3)=(x+3)(2x+1)\).`],
      [String.raw`Two numbers with product \(-24\) and sum \(5\)?`, String.raw`\(8\) and \(-3\).`],
      [String.raw`Expand \((2x+1)(x+3)\).`, String.raw`\(2x^2+7x+3\).`],
    ],
    words: [
      ["Complex trinomial", "\\(ax^2+bx+c\\) with \\(a\\ne1\\)", "\\(3x^2+10x+8\\)"],
      ["Decomposition", "splitting the middle term into two terms", ""],
      ["Product a·c", "first coefficient times last", ""],
      ["Grouping", "factor pairs of terms to find a common bracket", ""],
    ],
  }),

  section("📌 Why a·c?", String.raw`
  <p>Expand \((2x+1)(x+3)\) with an area model: the two \(x\)-terms are \(6x\) and \(x\). Their coefficients \(6\) and \(1\) multiply to \(6=2\times3=a\cdot c\) and add to \(7=b\). That is always true, so we can work backwards.</p>
  ${areaModel(["2x", "+1"], ["x", "+3"], [["2x^2", "6x"], ["x", "3"]], "2x² + 6x + x + 3: the middle-term pieces 6x and x multiply to 6 = a·c and add to 7 = b.")}
  ${keyIdea(String.raw`<strong>Decomposition:</strong> (1) take out any common factor; (2) find two numbers with product \(a\cdot c\) and sum \(b\); (3) split \(bx\) into those two terms; (4) factor by grouping; (5) check by expanding.`)}`),

  section("📌 Explore", String.raw`<p>Set \(a\), \(b\) and \(c\). The explorer follows the five steps — or tells you when no integer pair exists.</p>`),

  widget("decompositionLab", { init: [6, 7, -3] }),

  section("📌 Tips", String.raw`
  ${watchOut([
    "Use a·c, not just c.",
    "Either order of the two split terms works; choose the one whose pairs group easily.",
    "When the second pair starts with a minus, take out a negative factor so the brackets match.",
    "Keep the common factor from step 1 in the final answer.",
  ])}`),

  examples([
    ["a·c and b positive", String.raw`Factor \(3x^2+10x+8\).`,
      [String.raw`\(a\cdot c=24\); product 24, sum 10: \(4\) and \(6\).`, String.raw`\(3x^2+4x+6x+8=x(3x+4)+2(3x+4)\).`, String.raw`Check: \((3x+4)(x+2)=3x^2+6x+4x+8\) ✓`],
      String.raw`\((3x+4)(x+2)\)`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -2, ymax: 10 }, curves: [{ f: (x) => 3 * x * x + 10 * x + 8, color: "violet" }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "red" }, { x: -4 / 3, y: 0, label: "(−4/3, 0)", color: "red" }], step: { x: 1, y: 2 } }, "y = 3x² + 10x + 8 is zero where 3x + 4 = 0 or x + 2 = 0.")],
    ["b negative", String.raw`Factor \(2x^2-9x+4\).`,
      [String.raw`\(a\cdot c=8\); product 8, sum \(-9\): \(-1\) and \(-8\).`, String.raw`\(2x^2-x-8x+4=x(2x-1)-4(2x-1)\).`],
      String.raw`\((2x-1)(x-4)\)`],
    ["a·c negative", String.raw`Factor \(6x^2+x-12\).`,
      [String.raw`\(a\cdot c=-72\); product \(-72\), sum \(1\): \(9\) and \(-8\).`, String.raw`\(6x^2+9x-8x-12=3x(2x+3)-4(2x+3)\).`],
      String.raw`\((2x+3)(3x-4)\)`],
    ["Common factor first", String.raw`Factor fully: \(12x^2-2x-4\).`,
      [String.raw`GCF 2: \(2(6x^2-x-2)\).`, String.raw`\(a\cdot c=-12\), sum \(-1\): \(-4\) and \(3\). \(6x^2-4x+3x-2=2x(3x-2)+1(3x-2)\).`, String.raw`\(2(3x-2)(2x+1)\).`],
      String.raw`\(2(3x-2)(2x+1)\)`],
    ["Two variables", String.raw`Factor \(4x^2+4xy-15y^2\).`,
      [String.raw`\(a\cdot c=-60\), sum \(4\): \(10\) and \(-6\).`, String.raw`\(4x^2+10xy-6xy-15y^2=2x(2x+5y)-3y(2x+5y)\).`],
      String.raw`\((2x+5y)(2x-3y)\)`],
  ]),

  practice([
    q("factor", String.raw`Factor \(2x^2+7x+3\).`, fexpr("(2x+1)(x+3)"),
      "a·c = 6, sum 7.", [String.raw`\(2x^2+x+6x+3=x(2x+1)+3(2x+1)\).`], String.raw`\(2x^2+7x+3=(2x+1)(x+3)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("factor", String.raw`Factor \(3x^2-7x+2\).`, fexpr("(3x-1)(x-2)"),
      "a·c = 6, sum −7.", [String.raw`\(3x^2-x-6x+2=x(3x-1)-2(3x-1)\).`], String.raw`\(3x^2-7x+2=(3x-1)(x-2)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("factor", String.raw`Factor \(5x^2+13x-6\).`, fexpr("(5x-2)(x+3)"),
      "a·c = −30, sum 13.", [String.raw`\(15\) and \(-2\): \(5x^2+15x-2x-6=5x(x+3)-2(x+3)\).`], String.raw`\(5x^2+13x-6=(5x-2)(x+3)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("factor", String.raw`Factor \(4x^2-8x-5\).`, fexpr("(2x+1)(2x-5)"),
      "a·c = −20, sum −8.", [String.raw`\(-10\) and \(2\): \(4x^2-10x+2x-5=2x(2x-5)+1(2x-5)\).`], String.raw`\(4x^2-8x-5=(2x+1)(2x-5)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("fully", String.raw`Factor fully: \(6x^2+15x+9\).`, fexpr("3(2x+3)(x+1)"),
      "Common factor 3 first.", [String.raw`\(3(2x^2+5x+3)\); \(a\cdot c=6\), sum 5: 2 and 3.`], String.raw`\(6x^2+15x+9=3(2x+3)(x+1)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
  ]),

  wrapUp({
    qas: [
      ["Why does decomposition work?", "Splitting the middle term does not change the value, and choosing the pair with product a·c makes the two groups share a bracket."],
      ["Can I use guess and check instead?", "Yes, if you check by expanding. Decomposition is a systematic method that always finds the factors when they exist."],
      ["What if no pair has product a·c and sum b?", "Then the trinomial does not factor over the integers."],
      ["Why take out the common factor first?", "It makes a·c smaller and the search easier, and the answer is not fully factored without it."],
      ["Does the order of the split terms matter?", "No — both orders lead to the same brackets, though one may group more neatly."],
    ],
    summary: [
      "Common factor first.",
      "Find two numbers: product a·c, sum b.",
      "Split the middle term and factor by grouping.",
      "Check by expanding; trinomials in two variables work the same way.",
    ],
    next: "3.5 recognizes special products that factor at a glance.",
  }),
];
