// MPM2D 3.3 — Factoring Simple Trinomials (x² + bx + c) (self-study format): sum and product, sign patterns,
// common factor first, trinomials that do not factor, factors and the zeros of the graph
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, choice, fexpr } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "3.3 Factoring Simple Trinomials (x² + bx + c)";

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Factoring Simple Trinomials (x² + bx + c)",
    overview: String.raw`When you expand \((x+3)(x+5)\) you get \(x^2+8x+15\): the \(8\) is \(3+5\) and the \(15\) is \(3\times5\). Factoring a trinomial whose leading coefficient is \(1\) means running that backwards — find two numbers that multiply to the constant and add to the middle coefficient. In this lesson you will use sum and product, handle every sign pattern, take out a common factor first, recognize trinomials that do not factor, and see how the factors give the zeros of a parabola.`,
    goals: [
      "explain why x² + bx + c = (x + m)(x + n) needs mn = c and m + n = b;",
      "factor x² + bx + c for every sign pattern;",
      "take out a common factor before factoring a trinomial;",
      "recognize a trinomial that does not factor over the integers;",
      "connect the factors to the zeros of y = x² + bx + c.",
    ],
    curriculum: "QR3 (factor trinomials of the form x² + bx + c, using a variety of tools and strategies)",
    prior: [
      [String.raw`Expand \((x+2)(x+6)\).`, String.raw`\(x^2+8x+12\).`],
      [String.raw`Two numbers with product \(-10\) and sum \(3\)?`, String.raw`\(5\) and \(-2\).`],
      [String.raw`Factor \(3x^2-6x\).`, String.raw`\(3x(x-2)\).`],
    ],
    words: [
      ["Trinomial", "a polynomial with three terms", "\\(x^2+7x+10\\)"],
      ["Leading coefficient", "the coefficient of \\(x^2\\)", ""],
      ["Constant term", "the term without \\(x\\)", ""],
      ["Zero", "an \\(x\\)-value that makes the expression 0", ""],
    ],
  }),

  section("📌 Sum and product", String.raw`
  <p>\((x+m)(x+n)=x^2+nx+mx+mn=x^2+(m+n)x+mn\). So to factor \(x^2+bx+c\), look for \(m\) and \(n\) with</p>
  ${keyIdea(String.raw`\(m\times n=c\) (product) and \(m+n=b\) (sum). Then \(x^2+bx+c=(x+m)(x+n)\). List factor pairs of \(c\) and check their sums.`)}
  ${table(["c", "b", "Signs of m and n", "Example"], [
    ["positive", "positive", "both positive", "\\(x^2+7x+12=(x+3)(x+4)\\)"],
    ["positive", "negative", "both negative", "\\(x^2-7x+12=(x-3)(x-4)\\)"],
    ["negative", "either", "opposite signs; the larger size has the sign of b", "\\(x^2+x-12=(x+4)(x-3)\\)"],
  ])}`),

  section("📌 Explore", String.raw`<p>Choose \(b\) and \(c\). The table lists every integer factor pair of \(c\) and its sum; the matching pair is highlighted. The graph shows where \(y=x^2+bx+c\) crosses the \(x\)-axis — at the numbers with the opposite signs.</p>`),

  widget("trinomialFinder", { init: [-2, -8] }),

  section("📌 Before and after", String.raw`
  <p><strong>Common factor first.</strong> If every term shares a factor, take it out; what remains is often a simple trinomial. <strong>Not every trinomial factors.</strong> If no integer pair works, say so: \(x^2+3x+5\) does not factor over the integers.</p>
  ${watchOut([
    "Check the sum and the product — one alone is not enough.",
    "With c negative, the two numbers have opposite signs.",
    "Expand your answer to check: it should give back the trinomial.",
    "Forgetting the common factor in the final answer: 3(x − 5)(x + 3), not (x − 5)(x + 3).",
  ])}`),

  examples([
    ["Both positive", String.raw`Factor \(x^2+9x+20\).`,
      [String.raw`Pairs of 20: \(1,20\); \(2,10\); \(4,5\). Sum 9: \(4\) and \(5\).`, String.raw`Check: \((x+4)(x+5)=x^2+9x+20\) ✓`],
      String.raw`\((x+4)(x+5)\)`],
    ["Both negative", String.raw`Factor \(x^2-11x+24\).`,
      [String.raw`Product \(+24\), sum \(-11\): both negative.`, String.raw`\(-3\times-8=24\) and \(-3+(-8)=-11\).`],
      String.raw`\((x-3)(x-8)\)`],
    ["Opposite signs", String.raw`Factor \(x^2+2x-35\).`,
      [String.raw`Product \(-35\): opposite signs. Sum \(+2\): the larger number is positive.`, String.raw`\(7\times(-5)=-35\), \(7+(-5)=2\).`],
      String.raw`\((x+7)(x-5)\)`],
    ["Common factor first", String.raw`Factor \(3x^2-6x-45\) fully.`,
      [String.raw`GCF 3: \(3(x^2-2x-15)\).`, String.raw`Product \(-15\), sum \(-2\): \(-5\) and \(3\).`, String.raw`\(3(x-5)(x+3)\).`],
      String.raw`\(3(x-5)(x+3)\)`],
    ["Factors and zeros", String.raw`Factor \(y=x^2-2x-8\) and find where its graph crosses the \(x\)-axis.`,
      [String.raw`Product \(-8\), sum \(-2\): \(-4\) and \(2\). \(y=(x-4)(x+2)\).`, String.raw`\(y=0\) when \(x-4=0\) or \(x+2=0\): \(x=4\) or \(x=-2\).`],
      String.raw`\(y=(x-4)(x+2)\); zeros \(4\) and \(-2\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -10, ymax: 8 }, curves: [{ f: (x) => x * x - 2 * x - 8, color: "violet" }], points: [{ x: 4, y: 0, label: "(4, 0)", color: "red" }, { x: -2, y: 0, label: "(−2, 0)", color: "red" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("factor", String.raw`Factor \(x^2+8x+15\).`, fexpr("(x+3)(x+5)"),
      "Product 15, sum 8.", [String.raw`\(3\times5=15\), \(3+5=8\).`], String.raw`\(x^2+8x+15=(x+3)(x+5)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("factor", String.raw`Factor \(x^2-9x+14\).`, fexpr("(x-2)(x-7)"),
      "Product +14, sum −9: both negative.", [String.raw`\(-2\times-7=14\), \(-2-7=-9\).`], String.raw`\(x^2-9x+14=(x-2)(x-7)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("factor", String.raw`Factor \(x^2+x-12\).`, fexpr("(x+4)(x-3)"),
      "Product −12, sum +1.", [String.raw`\(4\times(-3)=-12\), \(4-3=1\).`], String.raw`\(x^2+x-12=(x+4)(x-3)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("fully", String.raw`Factor fully: \(2x^2+10x-28\).`, fexpr("2(x+7)(x-2)"),
      "Take out 2 first.", [String.raw`\(2(x^2+5x-14)\); \(7\times(-2)=-14\), \(7-2=5\).`], String.raw`\(2x^2+10x-28=2(x+7)(x-2)\)`, { placeholder: "a product, like (x+a)(x-b)" }),
    q("does it factor?", "Which trinomial does NOT factor over the integers?", choice(["x² + 4x + 6", "x² + 5x + 6", "x² − 5x + 6", "x² + x − 6"], 0),
      "Look for a pair with product 6 and the right sum.", ["Pairs of 6 sum to 5, 7, −5, −7 — never 4."], "x² + 4x + 6"),
  ]),

  wrapUp({
    qas: [
      ["Why must the numbers multiply to c and add to b?", "Expanding (x + m)(x + n) gives x² + (m + n)x + mn. Matching that to x² + bx + c forces m + n = b and mn = c."],
      ["Does the order of the brackets matter?", "No. (x + 4)(x − 3) and (x − 3)(x + 4) are the same product."],
      ["How do I find the pair quickly?", "Start with the sign pattern, then list factor pairs of c from the outside in (1 × c, 2 × …) until the sum matches."],
      ["What does 'does not factor over the integers' mean?", "No integer pair works. The parabola may still cross the x-axis, but at values that are not whole numbers (you will find them in Chapter 5)."],
      ["Why are the zeros the opposites of the numbers in the brackets?", "A product is zero only when a factor is zero: x + 2 = 0 gives x = −2."],
    ],
    summary: [
      "x² + bx + c = (x + m)(x + n) with mn = c and m + n = b.",
      "Use the sign pattern to narrow the search.",
      "Take out a common factor first and keep it in the answer.",
      "The factors give the zeros of the parabola.",
    ],
    next: "3.4 factors trinomials whose leading coefficient is not 1.",
  }),
];
