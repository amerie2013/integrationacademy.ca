// MTH1W 2.2 — Equivalent Expressions (self-study format): polynomials, like terms, adding and subtracting
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, expr, choice } from "./lib.mjs";
import { tiles, tileLegend, polygon } from "./figs.mjs";

export const TITLE = "2.2 Equivalent Expressions";

export const blocks = () => [
  intro({
    icon: "🟦",
    title: "Equivalent Expressions",
    overview: String.raw`Two expressions are <strong>equivalent</strong> if they give the same value for <em>every</em> value of the variable — like \(3x+2x\) and \(5x\). In this lesson you will name the parts of a polynomial, model polynomials with algebra tiles, combine <strong>like terms</strong>, and add and subtract polynomials. You will also learn a quick test that proves two expressions are <em>not</em> equivalent.`,
    goals: [
      "classify a polynomial by its number of terms and find its degree;",
      "identify like terms, including terms with two variables;",
      "model and simplify polynomials with algebra tiles and the zero principle;",
      "add and subtract polynomials, including subtracting a polynomial by adding its opposite;",
      "test whether two expressions are equivalent by substitution, and use a counter-example to show they are not.",
    ],
    curriculum: "C1.3 (equivalent expressions), C1.4 (simplify and verify)",
    book: "Nelson Principles of Mathematics 9, §2.4 Modelling and Simplifying Polynomials",
    prior: [
      [String.raw`Evaluate \(-7+3-(-5)\).`, String.raw`\(1\). Subtracting \(-5\) adds \(5\).`],
      [String.raw`What is the coefficient in \(-x^2\)?`, String.raw`\(-1\).`],
      [String.raw`Evaluate \(2x^2-x\) at \(x=-3\).`, String.raw`\(2(9)-(-3)=21\).`],
    ],
    words: [
      ["Polynomial", "one term or a sum of terms with whole-number exponents on the variables", "\\(3x^2-5x+1\\)"],
      ["Monomial / binomial / trinomial", "a polynomial with 1 / 2 / 3 terms", "\\(-4ab\\) / \\(x+7\\) / \\(x^2+x-2\\)"],
      ["Degree of a term", "the sum of the exponents of its variables", "\\(5x^2y^3\\) has degree \\(5\\)"],
      ["Degree of a polynomial", "the highest degree of any of its terms", "\\(x^4-3x+2\\): degree \\(4\\)"],
      ["Like terms", "terms with exactly the same variables raised to the same exponents", "\\(3xy^2\\) and \\(-xy^2\\)"],
      ["Equivalent expressions", "expressions equal for every value of the variable(s)", "\\(2(x+1)\\) and \\(2x+2\\)"],
    ],
  }),

  section("📌 Polynomials: terms and degree", String.raw`
  <p>A <strong>polynomial</strong> is a sum of terms in which every variable has a whole-number exponent. \(\frac{3}{x}\) and \(\sqrt{x}\) are <em>not</em> polynomial terms.</p>
  ${table(["Polynomial", "Number of terms", "Name", "Degree of each term", "Degree"], [
    ["\\(-8a^3\\)", "1", "monomial", "3", "3"],
    ["\\(6m-11\\)", "2", "binomial", "1, 0", "1"],
    ["\\(x^2y-4xy+y^3\\)", "3", "trinomial", "3, 2, 3", "3"],
    ["\\(2p^4-p^2q^3+7pq-1\\)", "4", "polynomial", "4, 5, 2, 0", "5"],
  ])}
  <p>We usually write a polynomial in one variable in <strong>descending order</strong> of exponents: \(4-x+3x^2\) becomes \(3x^2-x+4\).</p>`),

  section("📌 Algebra tiles and like terms", String.raw`
  ${tileLegend("Algebra tiles: the x² tile is x by x, the x tile is x by 1, the unit tile is 1 by 1. Red tiles are negative.")}
  <p>Tiles of the same shape are <strong>like terms</strong> — they can be combined. A positive tile and a negative tile of the same shape make a <strong>zero pair</strong> and can be removed (the <em>zero principle</em>).</p>
  ${tiles([{ label: "model", x2: 3, x: -4, c: 2 }, { label: "", x2: -1, x: 1, c: -5 }], "3x² − 4x + 2 − x² + x − 5: one x² zero pair, one x zero pair and two unit zero pairs.", [{ row: 0, kind: "x2", n: 1 }, { row: 1, kind: "x2", n: 1 }, { row: 0, kind: "x", n: 1 }, { row: 1, kind: "x", n: 1 }, { row: 0, kind: "c", n: 2 }, { row: 1, kind: "c", n: 2 }])}
  <p>What is left: two \(x^2\) tiles, three negative \(x\) tiles and three negative unit tiles, so \(3x^2-4x+2-x^2+x-5=2x^2-3x-3\).</p>
  ${keyIdea(String.raw`To combine like terms, add their <strong>coefficients</strong> and keep the variable part: \(5xy^2-8xy^2=-3xy^2\). The exponents never change when you add or subtract.`)}
  ${watchOut([
    String.raw`\(x^2\) and \(x\) are <strong>not</strong> like terms: \(3x^2+2x\) cannot be simplified (an \(x^2\) tile and an \(x\) tile are different shapes).`,
    String.raw`\(x^2y\) and \(xy^2\) are not like terms either — the exponents sit on different variables.`,
    String.raw`Adding like terms never changes exponents: \(4x^2+3x^2=7x^2\), not \(7x^4\).`,
  ])}`),

  section("📌 Adding and subtracting polynomials", String.raw`
  <p><strong>Adding:</strong> remove the brackets and collect like terms.</p>
  <p>\((2x^2-5x+3)+(x^2+7x-8)=3x^2+2x-5\)</p>
  <p><strong>Subtracting:</strong> subtracting a polynomial means adding its <strong>opposite</strong> — change the sign of <em>every</em> term in the second bracket, then collect:</p>
  <p>\((2x^2-5x+3)-(x^2+7x-8)=2x^2-5x+3-x^2-7x+8=x^2-12x+11\)</p>
  <p>With tiles, the opposite of a polynomial is the same tiles with every colour flipped. Use the explorer to add and subtract; watch the zero pairs disappear.</p>`),

  widget("algebraTiles", { initP: [2, -3, 4], initQ: [-1, 5, -6] }),

  section("📌 Testing for equivalence", String.raw`
  <p>Substitute the same value into both expressions.</p>
  <ul>
    <li>If the values are <strong>different</strong> for even one value, the expressions are <strong>not equivalent</strong> — that value is a <em>counter-example</em>.</li>
    <li>If the values are the same, that is evidence, but not proof: \(x^2\) and \(2x\) agree at \(x=2\) but not at \(x=3\). To <strong>prove</strong> equivalence, simplify one expression into the other.</li>
  </ul>
  ${table(["Expressions", "Test x = 3", "Conclusion"], [
    ["\\(4x-(x-5)\\) and \\(3x+5\\)", "\\(12-(-2)=14\\) and \\(14\\)", "agree; simplifying proves it: \\(4x-x+5=3x+5\\)"],
    ["\\((x+1)^2\\) and \\(x^2+1\\)", "\\(16\\) and \\(10\\)", "<strong>not</strong> equivalent"],
  ])}
  <p>Choose test values carefully: \(0\) and \(1\) often hide differences (\(x^2\) and \(x\) agree at both!). A value like \(3\) or \(-2\) is safer.</p>`),

  examples([
    ["Classifying a polynomial", String.raw`For \(5a^2b-3ab+2b^3-7\): how many terms does it have, what is the degree of each term, and what is the degree of the polynomial?`,
      [String.raw`Four terms: \(5a^2b,\ -3ab,\ 2b^3,\ -7\).`, String.raw`Degrees: \(5a^2b\) has \(2+1=3\); \(-3ab\) has \(1+1=2\); \(2b^3\) has \(3\); \(-7\) has \(0\).`, String.raw`The highest is \(3\).`],
      String.raw`a polynomial with \(4\) terms, degree \(3\)`],
    ["Simplifying with tiles", String.raw`Use algebra tiles to simplify \(-2x^2+6x-1+4x^2-3x-4\).`,
      [String.raw`Zero pairs: two \(x^2\) pairs and three \(x\) pairs. The units are all negative, so they have no zero pairs.`, String.raw`Left: \(2\) positive \(x^2\), \(3\) positive \(x\), \(5\) negative units.`, String.raw`Check by coefficients: \((-2+4)x^2+(6-3)x+(-1-4)\).`],
      String.raw`\(2x^2+3x-5\)`,
      tiles([{ label: "", x2: -2, x: 6, c: -1 }, { label: "", x2: 4, x: -3, c: -4 }], "Two x² zero pairs and three x zero pairs are struck out; the five unit tiles are all negative.", [{ row: 0, kind: "x2", n: 2 }, { row: 1, kind: "x2", n: 2 }, { row: 0, kind: "x", n: 3 }, { row: 1, kind: "x", n: 3 }])],
    ["Like terms with fractions and two variables", String.raw`Simplify \(\tfrac23m+\tfrac14n-\tfrac16m-\tfrac58n\).`,
      [String.raw`\(m\)-terms: \(\tfrac46m-\tfrac16m=\tfrac36m=\tfrac12m\).`, String.raw`\(n\)-terms: \(\tfrac28n-\tfrac58n=-\tfrac38n\).`],
      String.raw`\(\tfrac12m-\tfrac38n\)`],
    ["Subtracting polynomials", String.raw`Simplify \((4x^2-3xy+2y^2)-(-x^2+5xy-6y^2)\).`,
      [String.raw`Add the opposite of every term in the second bracket: \(4x^2-3xy+2y^2+x^2-5xy+6y^2\).`, String.raw`\(x^2\): \(4+1=5\); \(xy\): \(-3-5=-8\); \(y^2\): \(2+6=8\).`, String.raw`Check with \(x=1,\ y=1\): original \((4-3+2)-(-1+5-6)=3-(-2)=5\); answer \(5-8+8=5\) ✓`],
      String.raw`\(5x^2-8xy+8y^2\)`],
    ["Perimeter as a polynomial", String.raw`A triangle has sides \(3x-4\), \(2x+9\) and \(x+5\) (in cm). (a) Write a simplified expression for the perimeter. (b) Find the perimeter when \(x=4.5\). (c) For which values of \(x\) does the triangle exist? (Every side must be positive.)`,
      [String.raw`(a) \((3x-4)+(2x+9)+(x+5)=6x+10\).`, String.raw`(b) \(6(4.5)+10=27+10=37\) cm.`, String.raw`(c) \(3x-4>0\) needs \(x>\tfrac43\); the other two sides are positive whenever \(x>\tfrac43\). (A full test would also check each side is shorter than the sum of the other two.)`],
      String.raw`(a) \(6x+10\); (b) \(37\) cm; (c) \(x>\tfrac43\)`,
      polygon([[0, 160], [240, 160], [90, 20]], ["3x − 4", "2x + 9", "x + 5"], "Side lengths in centimetres.")],
  ]),

  practice([
    q("degree", String.raw`What is the degree of \(4x^3y-x^2y^2+9xy^4\)?`, num(5),
      "Add the exponents in each term; the polynomial's degree is the largest.", [String.raw`Term degrees: \(3+1=4\), \(2+2=4\), \(1+4=5\).`, "The highest is 5."], String.raw`\(5\)`),
    q("collect like terms", String.raw`Simplify \(7k-3k^2+2-5k+k^2-9\). Write it in descending order.`, expr("-2k^2+2k-7"),
      String.raw`Group the \(k^2\)-terms, the \(k\)-terms and the constants.`, [String.raw`\(k^2\): \(-3+1=-2\).`, String.raw`\(k\): \(7-5=2\).`, String.raw`Constants: \(2-9=-7\).`], String.raw`\(-2k^2+2k-7\)`),
    q("add", String.raw`Simplify \((2a^2-5a+1)+(-6a^2+a+8)\).`, expr("-4a^2-4a+9"),
      "Drop the brackets and collect like terms.", [String.raw`\(a^2\): \(2-6=-4\).`, String.raw`\(a\): \(-5+1=-4\).`, String.raw`Constants: \(1+8=9\).`], String.raw`\(-4a^2-4a+9\)`),
    q("subtract", String.raw`Simplify \((3p^2+2pq-q^2)-(5p^2-4pq+2q^2)\).`, expr("-2p^2+6pq-3q^2"),
      "Change the sign of every term in the second bracket first.", [String.raw`\(3p^2+2pq-q^2-5p^2+4pq-2q^2\).`, String.raw`\(p^2\): \(-2\); \(pq\): \(6\); \(q^2\): \(-3\).`], String.raw`\(-2p^2+6pq-3q^2\)`),
    q("equivalence", String.raw`Which expression is equivalent to \(3-(x-4)\)?`, choice([String.raw`\(7-x\)`, String.raw`\(-1-x\)`, String.raw`\(7+x\)`, String.raw`\(-x-1\)`], 0),
      "The minus sign in front of the bracket changes the sign of both terms inside.", [String.raw`\(3-(x-4)=3-x+4\).`, String.raw`\(=7-x\). Test \(x=2\): \(3-(-2)=5\) and \(7-2=5\) ✓`], String.raw`\(7-x\)`),
  ]),

  wrapUp({
    qas: [
      [String.raw`Why can't I combine \(3x^2\) and \(2x\)?`, String.raw`They are different kinds of quantity — an \(x^2\) tile and an \(x\) tile have different areas. It is like adding \(3\) square metres to \(2\) metres. You can only count tiles of the same shape together.`],
      ["Do I change the sign of only the first term when subtracting a bracket?", String.raw`No — every term. \(-(x^2-3x+5)=-x^2+3x-5\). The bracket is being multiplied by \(-1\).`],
      ["If two expressions agree for one value, are they equivalent?", String.raw`Not necessarily: \(x^2\) and \(4x-4\) both equal \(4\) at \(x=2\), but at \(x=3\) they give \(9\) and \(8\). One disagreement disproves equivalence; to prove it, simplify algebraically.`],
      [String.raw`Is \(\tfrac{x}{2}\) a polynomial term? What about \(\tfrac{2}{x}\)?`, String.raw`\(\tfrac{x}{2}=\tfrac12x\) is a polynomial term (the coefficient is a fraction — that is allowed). \(\tfrac{2}{x}=2x^{-1}\) is not: the exponent on the variable is negative.`],
      ["What is the degree of a constant like 7?", String.raw`\(0\), because \(7=7x^0\). The degree counts exponents on variables only.`],
    ],
    summary: [
      "Monomial, binomial, trinomial: 1, 2, 3 terms. Degree = highest sum of exponents in one term.",
      "Like terms have identical variable parts; combine them by adding coefficients.",
      "To subtract a polynomial, add the opposite of every term.",
      "One counter-example proves two expressions are not equivalent; simplifying proves they are.",
    ],
    next: "2.3 multiplies: the distributive property, a monomial times a polynomial, and expanding and simplifying.",
  }),
];
