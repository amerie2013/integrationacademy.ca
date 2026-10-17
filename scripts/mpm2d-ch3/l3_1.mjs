// MPM2D 3.1 — Expanding & Multiplying Polynomials (self-study format): the distributive property, the area
// model for binomials, squares of binomials, sum × difference, simplifying multi-step expressions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, q, expr } from "./lib.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";

export const TITLE = "3.1 Expanding & Multiplying Polynomials";

/** HTML area model: row and column labels, cell contents (LaTeX) */
export const areaModel = (rows, cols, cells, caption = "") => `<div style="text-align:center;margin:12px 0;">
<table style="border-collapse:separate;border-spacing:4px;margin:0 auto;font-size:17px;">
<tr><td></td>${cols.map((c) => `<td style="color:#be123c;font-weight:700;padding:4px 18px;">\\(${c}\\)</td>`).join("")}</tr>
${rows.map((r, i) => `<tr><td style="color:#1e40af;font-weight:700;padding:4px 10px;">\\(${r}\\)</td>${cells[i].map((c) => `<td style="background:${/^-/.test(c) ? "#ffe4e6" : "#dbeafe"};border:1px solid #cbd5e1;border-radius:8px;padding:14px 18px;">\\(${c}\\)</td>`).join("")}</tr>`).join("")}
</table>${caption ? `<div style="font-size:13px;color:#64748b;margin-top:4px;">${caption}</div>` : ""}</div>`;

export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Expanding & Multiplying Polynomials",
    overview: String.raw`Factoring — the main skill of this chapter — is expanding in reverse, so expanding must be quick and accurate first. In this lesson you will multiply a monomial by a polynomial, multiply two binomials with an area model, recognize the square of a binomial and the product of a sum and a difference, and simplify expressions that combine several products.`,
    goals: [
      "expand a monomial times a polynomial using the distributive property;",
      "multiply two binomials using an area model and by distributing;",
      "expand the square of a binomial and the product of a sum and a difference;",
      "expand and simplify expressions with several products;",
      "write area expressions for rectangles and squares.",
    ],
    curriculum: "QR3 (expand and simplify second-degree polynomial expressions, using a variety of tools and strategies)",
    prior: [
      [String.raw`\(3(x-4)=\)?`, String.raw`\(3x-12\).`],
      [String.raw`\(x\cdot x=\)?`, String.raw`\(x^2\).`],
      [String.raw`Simplify \(5x-2x+7\).`, String.raw`\(3x+7\).`],
    ],
    words: [
      ["Polynomial", "a sum of terms such as \\(3x^2-5x+2\\)", ""],
      ["Binomial", "a polynomial with two terms", "\\(2x-5\\)"],
      ["Expand", "multiply out the brackets", ""],
      ["Like terms", "same variable and exponent", "\\(4x\\), \\(-7x\\)"],
    ],
  }),

  section("📌 Multiply every term by every term", String.raw`
  <p>The distributive property says \(a(b+c)=ab+ac\). For two binomials, each term of the first multiplies each term of the second — four products. An area model keeps track of them:</p>
  ${areaModel(["2x", "+3"], ["x", "-4"], [["2x^2", "-8x"], ["3x", "-12"]], "(2x + 3)(x − 4): add the four areas, then collect like terms.")}
  ${keyIdea(String.raw`\((2x+3)(x-4)=2x^2-8x+3x-12=2x^2-5x-12\). Four products, then collect the like terms in the middle.`)}`),

  section("📌 Explore", String.raw`<p>Change the two binomials. The four cells are the four products; blue cells are positive, red cells negative. The graph of the product crosses the \(x\)-axis where either bracket is zero — a first look at why factoring will matter.</p>`),

  widget("areaModel", { init: [2, 3, 1, -4] }),

  section("📌 Patterns worth knowing", String.raw`
  <ul>
    <li><strong>Square of a binomial:</strong> \((a+b)^2=a^2+2ab+b^2\) and \((a-b)^2=a^2-2ab+b^2\).</li>
    <li><strong>Sum times difference:</strong> \((a+b)(a-b)=a^2-b^2\) — the middle terms cancel.</li>
  </ul>
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -3, ymax: 10 }, curves: [{ f: (x) => (x + 1) ** 2, color: "violet" }, { f: (x) => x * x + 1, color: "gray" }], step: { x: 1, y: 1 } }, "y = (x + 1)² (violet) is not y = x² + 1 (grey): the middle term 2x matters.")}
  ${watchOut([
    "(a + b)² ≠ a² + b²: write the bracket twice and expand.",
    "Multiply the signs too: (+3)(−4) = −12.",
    "A minus sign in front of brackets changes every sign inside.",
    "Expand completely before collecting like terms.",
  ])}`),

  examples([
    ["Monomial times polynomial", String.raw`Expand and simplify \(3x(2x-5)-2(x^2-4x)\).`,
      [String.raw`\(3x(2x-5)=6x^2-15x\).`, String.raw`\(-2(x^2-4x)=-2x^2+8x\) (the minus changes both signs).`, String.raw`\(6x^2-15x-2x^2+8x=4x^2-7x\).`],
      String.raw`\(4x^2-7x\)`],
    ["Two binomials", String.raw`Expand \((3x-1)(x+5)\).`,
      [String.raw`Four products: \(3x^2+15x-x-5\).`, String.raw`Collect: \(3x^2+14x-5\).`],
      String.raw`\(3x^2+14x-5\)`,
      areaModel(["3x", "-1"], ["x", "+5"], [["3x^2", "15x"], ["-x", "-5"]])],
    ["Square of a binomial", String.raw`Expand \((3x-2)^2\).`,
      [String.raw`\((3x-2)(3x-2)=9x^2-6x-6x+4\).`, String.raw`\(=9x^2-12x+4\). The middle term is \(2\times3x\times(-2)\).`],
      String.raw`\(9x^2-12x+4\) — not \(9x^2+4\)`],
    ["Sum times difference", String.raw`Expand \((5x+4)(5x-4)\).`,
      [String.raw`\(25x^2-20x+20x-16\).`, String.raw`The middle terms cancel: \(25x^2-16\).`],
      String.raw`\(25x^2-16\)`],
    ["Several products", String.raw`Expand and simplify \(2(x+3)^2-(x-1)(x+5)\).`,
      [String.raw`\(2(x^2+6x+9)=2x^2+12x+18\).`, String.raw`\((x-1)(x+5)=x^2+4x-5\); subtract the whole product: \(-x^2-4x+5\).`, String.raw`\(2x^2+12x+18-x^2-4x+5=x^2+8x+23\).`],
      String.raw`\(x^2+8x+23\)`],
  ]),

  practice([
    q("expand", String.raw`Expand \(4x(x-3)\).`, expr("4x^2-12x"),
      "Multiply 4x by each term.", [String.raw`\(4x\cdot x-4x\cdot3\).`], String.raw`\(4x^2-12x\)`),
    q("binomials", String.raw`Expand and simplify \((x+5)(x-2)\).`, expr("x^2+3x-10"),
      "Four products, then collect.", [String.raw`\(x^2-2x+5x-10\).`], String.raw`\(x^2+3x-10\)`),
    q("square", String.raw`Expand \((2x-1)^2\).`, expr("4x^2-4x+1"),
      "Write the bracket twice.", [String.raw`\(4x^2-2x-2x+1\).`], String.raw`\(4x^2-4x+1\)`),
    q("sum × difference", String.raw`Expand \((3x+2)(3x-2)\).`, expr("9x^2-4"),
      "The middle terms cancel.", [String.raw`\(9x^2-6x+6x-4\).`], String.raw`\(9x^2-4\)`),
    q("area", String.raw`A rectangle is \(2x+1\) long and \(x+3\) wide. Write its area as a simplified polynomial.`, expr("2x^2+7x+3"),
      "Area = length × width.", [String.raw`\(2x^2+6x+x+3\).`], String.raw`\(2x^2+7x+3\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is (a + b)² not a² + b²?", "Because (a + b)² = (a + b)(a + b) has four products. The two middle ones, ab and ab, add to 2ab. On an area model, a² + b² misses two rectangles."],
      ["Do I have to draw the area model every time?", "No. It is a tool for organizing the four products. Once you can do them reliably in your head (first, outer, inner, last), drop it."],
      ["What happens with a minus sign in front of brackets?", "It multiplies every term inside by −1. Put the product in brackets first, expand it, then subtract."],
      ["Why do the middle terms cancel in (a + b)(a − b)?", "You get +ab and −ab, which add to zero. That is why the answer is a difference of two squares."],
      ["How does expanding help with factoring?", "Factoring undoes expanding. Recognizing the patterns of products here makes it much easier to reverse them in 3.2–3.5."],
    ],
    summary: [
      "Multiply every term of one polynomial by every term of the other.",
      "Collect like terms after expanding.",
      "(a ± b)² = a² ± 2ab + b²; (a + b)(a − b) = a² − b².",
      "Check signs carefully, especially after a minus in front of brackets.",
    ],
    next: "3.2 reverses the distributive property: common factoring and factoring by grouping.",
  }),
];
