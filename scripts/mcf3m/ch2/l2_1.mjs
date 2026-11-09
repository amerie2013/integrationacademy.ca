// MCF3M 2.1 — Expanding and Simplifying Quadratic Expressions: distributive law, binomial products with the area
// model, special products, simplifying combinations, and a picture-frame context.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane, fig } from "../lib.mjs";
import { areaBox } from "../figs.mjs";
const S = String.raw;

export const TITLE = "2.1 Expanding and Simplifying Quadratic Expressions";

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Expanding and Simplifying Quadratic Expressions",
    overview: S`To <b>expand</b> means to remove brackets by multiplying, and to <b>simplify</b> means to collect like terms so that the result is in standard form \(ax^2+bx+c\). Every expansion is the distributive law used carefully: each term in one bracket multiplies each term in the other. An area model (a rectangle cut into pieces) keeps track of every product, and the special products \((a\pm b)^2\) and \((a+b)(a-b)\) give short-cuts. In this chapter, expanding is the reverse of factoring, so it is the base for everything that follows.`,
    goals: [
      "expand a monomial times a binomial and a binomial times a binomial;",
      "use an area model to organise the four products of two binomials;",
      "expand perfect squares \\((a\\pm b)^2\\) and differences of squares \\((a+b)(a-b)\\);",
      "simplify expressions that combine several products, paying attention to signs;",
      "write a quadratic expression for a real situation (such as a picture frame) and simplify it.",
    ],
    curriculum: "A1.2 (represent situations using quadratic expressions in one variable, and expand and simplify quadratic expressions in one variable)",
    prior: [
      [S`Simplify \(3x-5+2x+8\).`, S`\(5x+3\): collect the \(x\)-terms and the constants.`],
      [S`Simplify \(x\cdot x\) and \((-2x)(3x)\).`, S`\(x^2\) and \(-6x^2\).`],
      [S`Expand \(-4(x-3)\).`, S`\(-4x+12\): the \(-4\) multiplies both terms.`],
    ],
    words: [
      ["Expand", "multiply out the brackets", "\\(2(x+5)=2x+10\\)"],
      ["Like terms", "terms with the same variable part", "\\(3x^2\\) and \\(-x^2\\)"],
      ["Standard form", "\\(ax^2+bx+c\\), descending powers", "\\(2x^2-5x+3\\)"],
      ["Binomial", "an expression with two terms", "\\(x-4\\)"],
      ["Area model", "a rectangle whose side lengths are the factors and whose area is the product", "\\((x+2)(x+3)\\)"],
    ],
  }),

  section("📌 The distributive law and the area model", S`
  <p>For two binomials, every term of the first multiplies every term of the second, so there are <b>four</b> products. Drawing the factors as the sides of a rectangle shows all four pieces at once; the expansion is the total area.</p>
  ${fig(areaBox(["x", "+5"], ["x", "+3"], [["x²", "5x"], ["3x", "15"]], "(x + 3)(x + 5)"), "(x + 3)(x + 5) = x² + 5x + 3x + 15 = x² + 8x + 15")}
  ${table(["Product", "Pattern", "Example"], [
    ["monomial × binomial", "\\(a(b+c)=ab+ac\\)", "\\(2x(x-4)=2x^2-8x\\)"],
    ["binomial × binomial", "\\((a+b)(c+d)=ac+ad+bc+bd\\)", "\\((x+2)(x-7)=x^2-5x-14\\)"],
    ["perfect square", "\\((a+b)^2=a^2+2ab+b^2\\)", "\\((x+6)^2=x^2+12x+36\\)"],
    ["perfect square", "\\((a-b)^2=a^2-2ab+b^2\\)", "\\((2x-1)^2=4x^2-4x+1\\)"],
    ["difference of squares", "\\((a+b)(a-b)=a^2-b^2\\)", "\\((x+9)(x-9)=x^2-81\\)"],
  ])}
  ${keyIdea(S`Two expressions are <b>equivalent</b> if they give the same value for every \(x\). A quick check of any expansion: substitute a number (such as \(x=2\)) into both forms; the two results must match. Their graphs are the same curve.`)}`),

  widget("areaModel", { init: [2, -3, 1, 4] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "(x + 4)² is NOT x² + 16: the middle term 2(4)x = 8x is missing.",
    "A minus sign in front of a bracket changes EVERY sign inside: −(x − 3)(x + 2) = −(x² − x − 6) = −x² + x + 6.",
    "Expand first, then multiply by any number in front: 3(x + 1)² = 3(x² + 2x + 1), not (3x + 3)².",
    "x · x = x², but x + x = 2x; keep powers and coefficients apart.",
    "Collect like terms only: 2x² and 2x cannot be added.",
  ])}`),

  examples([
    ["Monomials times binomials", S`Expand and simplify \(3x(2x-5)-4(x-7)\).`,
      [S`<b>Rule.</b> The distributive law \(a(b+c)=ab+ac\): the term outside multiplies each term inside. Treat \(-4\) as one number, sign included.`,
        S`<b>First product.</b> \(3x\cdot2x=6x^2\) and \(3x\cdot(-5)=-15x\), so \(3x(2x-5)=6x^2-15x\).`,
        S`<b>Second product.</b> \(-4\cdot x=-4x\) and \(-4\cdot(-7)=+28\), so \(-4(x-7)=-4x+28\).`,
        S`<b>Collect like terms.</b> \(6x^2-15x-4x+28=6x^2-19x+28\).`,
        S`<b>Check with \(x=2\).</b> Original: \(3(2)(4-5)-4(2-7)=-6+20=14\). Simplified: \(6(4)-19(2)+28=24-38+28=14\) ✓`],
      S`\(6x^2-19x+28\)`,
      fig(areaBox(["2x", "−5"], ["3x"], [["6x²", "−15x"]], "3x(2x − 5)"), "The area model for the first product.")],

    ["Two binomials with an area model", S`Expand \((2x+3)(x-4)\).`,
      [S`<b>Plan.</b> Each of the two terms of \(2x+3\) multiplies each of the two terms of \(x-4\): four products. Place them in a \(2\times2\) area model.`,
        S`<b>The four products.</b> \(2x\cdot x=2x^2\); \(2x\cdot(-4)=-8x\); \(3\cdot x=3x\); \(3\cdot(-4)=-12\).`,
        S`<b>Collect.</b> The two middle products are like terms: \(-8x+3x=-5x\). So \((2x+3)(x-4)=2x^2-5x-12\).`,
        S`<b>Check with \(x=1\).</b> Original: \((5)(-3)=-15\). Expanded: \(2-5-12=-15\) ✓`,
        S`<b>Check with the graph.</b> Both forms are zero at \(x=4\) and at \(x=-\tfrac32\), where a bracket is zero; the graph of \(y=2x^2-5x-12\) crosses the axis there ✓`],
      S`\(2x^2-5x-12\)`,
      fig(areaBox(["x", "−4"], ["2x", "+3"], [["2x²", "−8x"], ["3x", "−12"]], "(2x + 3)(x − 4)"), "Four products; the middle two combine to −5x.")],

    ["A perfect square", S`Expand \((3x-2)^2\) and explain why the answer has three terms.`,
      [S`<b>Meaning.</b> \((3x-2)^2=(3x-2)(3x-2)\): a binomial times itself.`,
        S`<b>Area model.</b> Products: \(9x^2\), \(-6x\), \(-6x\), \(+4\). The two middle products are equal, because the factors are the same.`,
        S`<b>Collect.</b> \(9x^2-12x+4\).`,
        S`<b>Pattern.</b> \((a-b)^2=a^2-2ab+b^2\) with \(a=3x\), \(b=2\): \(9x^2-2(3x)(2)+4\) gives the same result.`,
        S`<b>Why three terms?</b> The two middle products are like terms and combine into one. A common error, \((3x)^2-2^2=9x^2-4\), forgets them. Check at \(x=1\): \((1)^2=1\) and \(9-12+4=1\) ✓, while \(9-4=5\) ✗`],
      S`\(9x^2-12x+4\)`,
      fig(areaBox(["3x", "−2"], ["3x", "−2"], [["9x²", "−6x"], ["−6x", "+4"]], "(3x − 2)²"), "The two −6x pieces are the middle term −12x.")],

    ["Simplify a combination", S`Expand and simplify \(2(x+3)^2-(x-1)(x+1)\).`,
      [S`<b>Order of operations.</b> Expand each product first; multiply by the \(2\) and apply the minus sign afterwards.`,
        S`<b>First part.</b> \((x+3)^2=x^2+6x+9\), so \(2(x+3)^2=2x^2+12x+18\).`,
        S`<b>Second part.</b> \((x-1)(x+1)=x^2-1\) (difference of squares). The minus sign in front changes both signs: \(-(x^2-1)=-x^2+1\).`,
        S`<b>Collect.</b> \(2x^2+12x+18-x^2+1=x^2+12x+19\).`,
        S`<b>Check with \(x=0\).</b> Original: \(2(9)-(-1)(1)=18+1=19\). Simplified: \(19\) ✓. With \(x=-1\): original \(2(4)-0=8\); simplified \(1-12+19=8\) ✓`],
      S`\(x^2+12x+19\)`,
      plane({ view: { xmin: -12, xmax: 2, ymin: -20, ymax: 25 }, curves: [{ f: (x) => x * x + 12 * x + 19, color: "violet" }], points: [{ x: 0, y: 19, label: "(0, 19)", color: "amber" }, { x: -1, y: 8, label: "(−1, 8)", color: "amber" }], step: { x: 1, y: 5 } })],

    ["A picture frame", S`A \(30\) cm by \(20\) cm photo has a frame of width \(x\) cm all around it. Write and simplify an expression for (a) the total area and (b) the area of the frame alone. Find the frame area when \(x=3\).`,
      [S`<b>Model.</b> The frame adds \(x\) on each side, so the outer dimensions are \(30+2x\) by \(20+2x\).`,
        S`<b>(a) Total area.</b> \((30+2x)(20+2x)=600+60x+40x+4x^2=4x^2+100x+600\).`,
        S`<b>(b) Frame area.</b> Total minus photo: \(4x^2+100x+600-600=4x^2+100x\).`,
        S`<b>At \(x=3\).</b> \(4(9)+100(3)=36+300=336\) cm².`,
        S`<b>Check directly.</b> Outer \(36\times26=936\); photo \(600\); frame \(936-600=336\) cm² ✓`],
      S`(a) \(4x^2+100x+600\); (b) \(4x^2+100x\); 336 cm² when x = 3`,
      fig(areaBox(["30", "+2x"], ["20", "+2x"], [["600", "40x"], ["60x", "4x²"]], "(30 + 2x)(20 + 2x)"), "The photo is the 600 piece; the frame is everything else.")],
  ]),

  practice([
    q("expand", S`Expand and simplify \(-2x(x-6)+5x\).`, expr("-2*x^2+17*x"), "Distribute −2x, then collect.", [S`\(-2x^2+12x+5x=-2x^2+17x\).`], S`\(-2x^2+17x\)`),
    q("binomials", S`Expand \((x-7)(x+2)\).`, expr("x^2-5*x-14"), "Four products.", [S`\(x^2+2x-7x-14\).`], S`\(x^2-5x-14\)`),
    q("binomials", S`Expand \((4x+1)(2x-3)\).`, expr("8*x^2-10*x-3"), "8x² − 12x + 2x − 3.", [S`\(8x^2-12x+2x-3=8x^2-10x-3\).`], S`\(8x^2-10x-3\)`),
    q("square", S`Expand \((x+8)^2\).`, expr("x^2+16*x+64"), "a² + 2ab + b².", [S`\(x^2+2(8)x+64\).`], S`\(x^2+16x+64\)`),
    q("context", S`A square garden of side \(x\) m gets a path \(1\) m wide on every side. Write the total area of garden and path in standard form.`, expr("x^2+4*x+4"), "Outer side x + 2.", [S`\((x+2)^2=x^2+4x+4\).`], S`\(x^2+4x+4\)`),
  ]),

  ...hard([
    ["A short-cut for arithmetic", S`Show that \((x+5)^2-(x-5)^2=20x\), and use it to evaluate \(105^2-95^2\) without a calculator.`,
      [S`<b>Expand both.</b> \((x+5)^2=x^2+10x+25\) and \((x-5)^2=x^2-10x+25\).`,
        S`<b>Subtract.</b> \(x^2+10x+25-x^2+10x-25=20x\).`,
        S`<b>Choose \(x=100\).</b> \(105^2-95^2=(100+5)^2-(100-5)^2=20(100)=2000\).`,
        S`<b>Check.</b> \(11025-9025=2000\) ✓`],
      S`20x; 105² − 95² = 2000`],
    ["Choose the constant", S`Find \(k\) so that \((2x+k)(x-3)\) has no \(x\)-term, and give the resulting expression.`,
      [S`<b>Expand with \(k\).</b> \(2x^2-6x+kx-3k=2x^2+(k-6)x-3k\).`,
        S`<b>No \(x\)-term:</b> \(k-6=0\Rightarrow k=6\).`,
        S`<b>Result:</b> \(2x^2-18\). Check: \((2x+6)(x-3)=2x^2-6x+6x-18\) ✓`],
      S`k = 6, giving 2x² − 18`,
      fig(areaBox(["x", "−3"], ["2x", "+k"], [["2x²", "−6x"], ["kx", "−3k"]], "(2x + k)(x − 3)"), "The x-terms −6x and kx must cancel.")],
  ], [
    q("hard", S`Expand and simplify \(3(2x-1)^2-2(3x+2)(3x-2)\).`, expr("-6*x^2-12*x+11"), "Expand each product before multiplying by the constant.", [S`\(3(4x^2-4x+1)=12x^2-12x+3\); \(2(9x^2-4)=18x^2-8\).`, S`\(12x^2-12x+3-18x^2+8=-6x^2-12x+11\).`], S`\(-6x^2-12x+11\)`),
    q("hard", S`\((ax+3)^2=16x^2+bx+9\). If \(a>0\), enter \(b\).`, num(24), "a² = 16.", [S`\(a=4\); \(b=2(4)(3)=24\).`], S`\(24\)`),
    q("hard", S`A rectangle is \((x+5)\) by \((x-2)\); a square of side \((x-3)\) is cut out of it. Enter the remaining area in standard form.`, expr("9*x-19"), "Subtract the two areas.", [S`\(x^2+3x-10-(x^2-6x+9)=9x-19\).`], S`\(9x-19\)`),
    q("hard", S`Find \(k\) if \((x+k)(x-4)=x^2+2x-24\).`, num(6), "Compare the x-terms or constants.", [S`\(-4k=-24\Rightarrow k=6\); check: \(k-4=2\) ✓`], S`\(6\)`),
    q("hard", S`A photo \(12\) by \(8\) cm has a frame of width \(x\). The frame area is \(4x^2+40x\). Enter \(x\) if the frame area is \(44\) cm².`, num(1), "4x² + 40x = 44 ⇒ x² + 10x − 11 = 0.", [S`\((x+11)(x-1)=0\); \(x>0\Rightarrow x=1\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["How many products are there in (a + b)(c + d)?", "Four: every term of the first times every term of the second."],
      ["Why is (x + 4)² not x² + 16?", "Squaring a binomial gives the middle term 2ab = 8x; check x = 1: 25 ≠ 17."],
      ["What happens to a minus sign in front of a product?", "Expand the product in brackets first, then change every sign."],
      ["How can I check an expansion?", "Substitute a value such as x = 2 into both forms; the results must match."],
      ["Why learn expanding before factoring?", "Factoring undoes expanding, so knowing the patterns forwards makes them easy to reverse."],
    ],
    summary: [
      "Distribute every term: (a + b)(c + d) = ac + ad + bc + bd.",
      "(a ± b)² = a² ± 2ab + b²; (a + b)(a − b) = a² − b².",
      "Expand products first, then multiply by constants and collect like terms.",
      "Check by substituting a value.",
    ],
    next: "2.2 reverses the distributive law: taking out a common factor.",
  }),
];
