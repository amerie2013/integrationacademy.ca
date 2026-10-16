// MTH1W 2.3 — Simplifying Expressions (self-study format): distributive property, monomial × polynomial,
// expand and simplify, common factoring
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, expr } from "./lib.mjs";
import { area, rect } from "./figs.mjs";

export const TITLE = "2.3 Simplifying Expressions";

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Simplifying Expressions",
    overview: String.raw`The <strong>distributive property</strong> \(a(b+c)=ab+ac\) is the tool that removes brackets. In this lesson you will see it as the area of a rectangle, multiply monomials using the exponent laws from Chapter 1, multiply a monomial by a polynomial, and then <strong>expand and simplify</strong> longer expressions with several brackets. Finally you will run the property backwards to <strong>factor</strong> out a common factor.`,
    goals: [
      "explain the distributive property with an area model;",
      String.raw`multiply monomials, such as \((-3x^2y)(4xy^3)\), using the product law;`,
      "multiply a monomial by a polynomial, paying attention to every sign;",
      "expand and simplify expressions with two or more brackets, and evaluate before and after to check;",
      "factor out the greatest common factor of a polynomial, and write area and perimeter expressions for shapes.",
    ],
    curriculum: "C1.3, C1.4 (simplify expressions by expanding and collecting like terms)",
    book: "Nelson Principles of Mathematics 9, §2.5 Multiplying a Polynomial by a Monomial; §2.6 Simplifying Polynomial Expressions",
    prior: [
      [String.raw`Simplify \(x^3\times x^4\).`, String.raw`\(x^7\) — same base, add the exponents.`],
      [String.raw`Evaluate \(-4\times(-6)\).`, String.raw`\(24\).`],
      [String.raw`Simplify \(5y-2y^2+3y\).`, String.raw`\(-2y^2+8y\).`],
    ],
    words: [
      ["Distributive property", "multiply the outside factor by every term inside", "\\(3(x-4)=3x-12\\)"],
      ["Expand", "remove brackets by multiplying", "\\(2x(x+5)=2x^2+10x\\)"],
      ["Simplify", "expand, then collect like terms", "\\(2(x+1)+3x=5x+2\\)"],
      ["Factor", "write as a product; the reverse of expanding", "\\(6x+9=3(2x+3)\\)"],
      ["Greatest common factor (GCF)", "the largest monomial that divides every term", "GCF of \\(8x^3\\) and \\(12x^2\\) is \\(4x^2\\)"],
    ],
  }),

  section("📌 The distributive property as area", String.raw`
  <p>A rectangle \(4\) wide and \(x+3\) long can be split into two rectangles: \(4\times x\) and \(4\times3\). The total area is the same either way:</p>
  ${area("4", ["x", "3"], ["4x", "12"], "4(x + 3) = 4x + 12: the outside factor multiplies every part.")}
  <p>The same works with more terms and with negatives. A negative part has negative area in the model:</p>
  ${area("−2x", ["3x", "−5"], ["−6x²", "10x"], "−2x(3x − 5) = −6x² + 10x: the sign of every product follows the integer rules.")}
  ${keyIdea(String.raw`\(a(b+c+d)=ab+ac+ad\). Multiply the outside term by <strong>every</strong> term inside, and decide each sign with the integer rules.`)}`),

  section("📌 Multiplying monomials", String.raw`
  <p>Multiply the coefficients; for each variable, use the product law \(x^m\times x^n=x^{m+n}\).</p>
  ${table(["Product", "Coefficients", "Variables", "Result"], [
    ["\\((5x^3)(2x^4)\\)", "\\(5\\times2=10\\)", "\\(x^{3+4}\\)", "\\(10x^7\\)"],
    ["\\((-3a^2b)(4ab^3)\\)", "\\(-3\\times4=-12\\)", "\\(a^{2+1}b^{1+3}\\)", "\\(-12a^3b^4\\)"],
    ["\\((-2m)^3\\)", "\\((-2)^3=-8\\)", "\\(m^3\\)", "\\(-8m^3\\)"],
  ])}`),

  section("📌 Monomial × polynomial, then expand and simplify", String.raw`
  <p>The explorer below multiplies a monomial by a trinomial. Change the powers and signs and watch each cell of the area model.</p>`),

  widget("distributiveArea", { init: { a: -2, m: 2, b: 3, p: 2, c: -4, q: 1, d: 5 } }),

  section("📌 Expanding several brackets", String.raw`
  <p>To simplify an expression with several brackets: (1) expand each bracket; (2) collect like terms.</p>
  <p>\(3(2x^2-x+4)-2(x^2+5x-1)=6x^2-3x+12-2x^2-10x+2=4x^2-13x+14\)</p>
  <p>Notice that the \(-2\) multiplies <em>every</em> term of the second bracket, so \(-1\) becomes \(+2\).</p>
  <p><strong>Check by substitution.</strong> At \(x=1\): before, \(3(5)-2(5)=5\); after, \(4-13+14=5\) ✓. The values agree, as equivalent expressions must.</p>
  ${watchOut([
    String.raw`<strong>Distribute to every term:</strong> \(4(x+3)\neq4x+3\).`,
    String.raw`<strong>A minus sign in front of a bracket</strong> is a factor of \(-1\): \(5-(2x-3)=5-2x+3=8-2x\).`,
    String.raw`<strong>BEDMAS still applies:</strong> in \(15-10(x-4)\), do not subtract \(15-10\) first; the \(10\) belongs to the bracket: \(15-10x+40=55-10x\).`,
    String.raw`<strong>Add exponents when multiplying</strong> (\(x\cdot x^2=x^3\)), but never when adding (\(x+x^2\) stays as it is).`,
  ])}`),

  section("📌 Factoring out the GCF", String.raw`
  <p>Factoring runs the distributive property backwards. Find the GCF of the coefficients and the lowest power of each common variable:</p>
  <p>\(12x^3-18x^2+6x\): GCF of \(12, 18, 6\) is \(6\); lowest power of \(x\) is \(x^1\). So \(12x^3-18x^2+6x=6x(2x^2-3x+1)\).</p>
  ${area("6x", ["2x²", "−3x", "1"], ["12x³", "−18x²", "6x"], "Factoring: find the side lengths of a rectangle whose area pieces are known.")}
  <p>Always check by expanding: \(6x(2x^2-3x+1)=12x^3-18x^2+6x\) ✓. Note the \(1\): when a term <em>is</em> the GCF, a \(1\) is left inside.</p>`),

  examples([
    ["Monomial times monomial", String.raw`Simplify \((-4x^2y^3)(-\tfrac12xy^2)(3y)\).`,
      [String.raw`Coefficients: \((-4)(-\tfrac12)(3)=6\).`, String.raw`\(x\): \(x^{2+1}=x^3\). \(y\): \(y^{3+2+1}=y^6\).`],
      String.raw`\(6x^3y^6\)`],
    ["Monomial times polynomial", String.raw`Expand \(-3a^2(2a^3-5a+4)\).`,
      [String.raw`\(-3a^2\times2a^3=-6a^5\).`, String.raw`\(-3a^2\times(-5a)=+15a^3\).`, String.raw`\(-3a^2\times4=-12a^2\).`],
      String.raw`\(-6a^5+15a^3-12a^2\)`,
      area("−3a²", ["2a³", "−5a", "4"], ["−6a⁵", "15a³", "−12a²"], "Each cell is the product of its row and column labels.")],
    ["Expand and simplify", String.raw`Simplify \(2x(x^2-3x+1)-x^2(4x-5)+7x\).`,
      [String.raw`First bracket: \(2x^3-6x^2+2x\).`, String.raw`Second: \(-x^2(4x-5)=-4x^3+5x^2\).`, String.raw`Collect: \(x^3\): \(2-4=-2\); \(x^2\): \(-6+5=-1\); \(x\): \(2+7=9\).`, String.raw`Check \(x=2\): before \(4(-1)-4(3)+14=-2\); after \(-16-4+18=-2\) ✓`],
      String.raw`\(-2x^3-x^2+9x\)`],
    ["Factoring out the GCF", String.raw`Factor \(15m^4n^2-25m^3n^3+5m^2n\) completely.`,
      [String.raw`GCF of \(15, 25, 5\) is \(5\); lowest powers: \(m^2\) and \(n^1\). GCF \(=5m^2n\).`, String.raw`Divide each term: \(\tfrac{15m^4n^2}{5m^2n}=3m^2n\), \(\tfrac{-25m^3n^3}{5m^2n}=-5mn^2\), \(\tfrac{5m^2n}{5m^2n}=1\).`, String.raw`Check by expanding.`],
      String.raw`\(5m^2n(3m^2n-5mn^2+1)\)`],
    ["A picture frame", String.raw`A rectangular frame is \(3x+6\) cm long and \(2x\) cm wide on the outside. The opening for the picture is \(3x\) cm by \(2x-4\) cm. (a) Write a simplified expression for the area of the wood. (b) Evaluate it for \(x=8\).`,
      [String.raw`Outside area: \(2x(3x+6)=6x^2+12x\).`, String.raw`Opening: \(3x(2x-4)=6x^2-12x\).`, String.raw`Wood \(=(6x^2+12x)-(6x^2-12x)=24x\).`, String.raw`(b) \(24(8)=192\) cm². Check: outside \(16\times30=480\), opening \(24\times12=288\), difference \(192\) ✓`],
      String.raw`(a) \(24x\) cm²; (b) \(192\) cm²`,
      rect("3x + 6", "2x", "The opening is 3x by 2x − 4; the wood is the shaded border.", { inner: { pad: 18, label: "3x by 2x − 4" }, w: 260, h: 130 })],
  ]),

  practice([
    q("monomials", String.raw`Simplify \((2p^3q)(-5pq^4)\).`, expr("-10p^4q^5"),
      "Multiply the coefficients; add the exponents of each variable.", [String.raw`\(2\times(-5)=-10\).`, String.raw`\(p^{3+1}q^{1+4}=p^4q^5\).`], String.raw`\(-10p^4q^5\)`),
    q("distribute", String.raw`Expand \(4x^2(3x^2-x+6)\).`, expr("12x^4-4x^3+24x^2"),
      String.raw`Multiply \(4x^2\) by each of the three terms.`, [String.raw`\(4x^2\cdot3x^2=12x^4\).`, String.raw`\(4x^2\cdot(-x)=-4x^3\).`, String.raw`\(4x^2\cdot6=24x^2\).`], String.raw`\(12x^4-4x^3+24x^2\)`),
    q("expand and simplify", String.raw`Simplify \(5(2y-3)-3(4y-7)\).`, expr("-2y+6"),
      String.raw`The \(-3\) multiplies both terms in the second bracket.`, [String.raw`\(10y-15-12y+21\).`, String.raw`\(-2y+6\).`], String.raw`\(-2y+6\)`),
    q("two brackets with powers", String.raw`Simplify \(3k(k^2-2k)-k^2(k-6)\).`, expr("2k^3"),
      "Expand both, then collect. Some terms cancel.", [String.raw`\(3k^3-6k^2-k^3+6k^2\).`, String.raw`\(k^3\): \(3-1=2\); \(k^2\): \(-6+6=0\).`], String.raw`\(2k^3\)`),
    q("factor", String.raw`Factor \(14a^3-21a^2+7a\) completely.`, expr("7a(2a^2-3a+1)", false),
      String.raw`GCF of \(14, 21, 7\) and the lowest power of \(a\).`, [String.raw`GCF \(=7a\).`, String.raw`\(14a^3\div7a=2a^2\), \(-21a^2\div7a=-3a\), \(7a\div7a=1\).`], String.raw`\(7a(2a^2-3a+1)\)`, { placeholder: "a product, like 3x(x - 2)" }),
  ]),

  wrapUp({
    qas: [
      [String.raw`Why is \(4(x+3)\) not \(4x+3\)?`, String.raw`The area model shows it: a \(4\) by \((x+3)\) rectangle is made of a \(4\) by \(x\) piece <em>and</em> a \(4\) by \(3\) piece, so the area is \(4x+12\). Test at \(x=1\): \(4(4)=16\), and \(4x+12=16\), but \(4x+3=7\).`],
      [String.raw`When I multiply \(x^2\) by \(x^3\), do I multiply the exponents?`, String.raw`No — add them: \(x^2\cdot x^3=x\cdot x\cdot x\cdot x\cdot x=x^5\). You multiply exponents only for a power of a power: \((x^2)^3=x^6\).`],
      [String.raw`In \(15-10(x-4)\), why can't I do \(15-10\) first?`, String.raw`Multiplication comes before subtraction. The \(10\) is multiplying the bracket, so expand first: \(15-10x+40=55-10x\). Doing \(15-10=5\) first would give \(5x-20\), which is wrong (try \(x=0\): \(55\) vs \(-20\)).`],
      ["How do I know I have factored completely?", "The terms left inside the bracket must have no common factor other than 1 — check the coefficients and each variable. Then expand your answer to make sure you get back the original."],
      ["How can I check an expand-and-simplify answer quickly?", String.raw`Substitute a small value such as \(x=2\) into the original and into your answer. If they differ, there is a mistake. (Avoid \(0\) and \(1\): they can hide errors in exponents.)`],
    ],
    summary: [
      String.raw`\(a(b+c)=ab+ac\): multiply the outside term by every inside term, with the integer sign rules.`,
      "Monomial × monomial: multiply coefficients, add exponents of the same variable.",
      "Expand and simplify: expand every bracket first, then collect like terms; check by substitution.",
      "Factoring takes out the GCF: the reverse of expanding.",
    ],
    next: "2.4 uses expressions to build equations, and solves them with inverse operations and the balance model.",
  }),
];
