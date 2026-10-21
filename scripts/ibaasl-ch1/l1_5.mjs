// IB AA SL 1.5 — The Binomial Theorem: Pascal's triangle, nCr, expanding (a + b)^n, a specific term, unknown n or k
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard } from "./lib.mjs";
import { fig, pascalDoc, barsDoc } from "./figs.mjs";

export const TITLE = "1.5 The Binomial Theorem";
export const ID = "e378089f-aaea-42e2-bdbf-d7db4327b93e";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔺",
    title: "The Binomial Theorem",
    overview: S`Expanding \((x+2)^4\) by multiplying four brackets is slow and error-prone. The coefficients follow a pattern — Pascal's triangle — and the binomial theorem turns that pattern into a formula. In this lesson you will expand powers of a binomial, find one specific term without writing out the whole expansion, and work backwards to an unknown power or coefficient.`,
    goals: [
      "build Pascal's triangle and read the coefficients of \\((a+b)^n\\);",
      "evaluate \\(\\binom nr={}^nC_r=\\dfrac{n!}{r!(n-r)!}\\);",
      "expand \\((a+b)^n\\) for whole-number \\(n\\), including negative and fractional terms;",
      "use the general term \\(\\binom nr a^{n-r}b^r\\) to find a specific term or the constant term;",
      "find an unknown \\(n\\) or coefficient from a given term.",
    ],
    curriculum: "SL 1.9 (the binomial theorem: expansion of (a + b)ⁿ, n ∈ ℕ; use of Pascal's triangle and ⁿCᵣ)",
    prior: [
      [S`Expand \((x+2)^2\).`, S`\(x^2+4x+4\).`],
      [S`Evaluate \(5!\).`, S`\(120\).`],
      [S`Simplify \((2x)^3\).`, S`\(8x^3\).`],
    ],
    words: [
      ["Binomial", "an expression with two terms", "\\(2x-3\\)"],
      ["Factorial \\(n!\\)", "\\(n(n-1)(n-2)\\cdots1\\), with \\(0!=1\\)", "\\(4!=24\\)"],
      ["\\(\\binom nr\\) or \\({}^nC_r\\)", "the number of ways to choose \\(r\\) items from \\(n\\)", "\\(\\binom73=35\\)"],
      ["Pascal's triangle", "each entry is the sum of the two entries above it", "row 4: 1 4 6 4 1"],
      ["General term", "\\(\\binom nr a^{n-r}b^r\\), the \\((r+1)\\)th term", "\\(r=0,1,\\dots,n\\)"],
    ],
  }),

  section("📌 Pascal's triangle", S`
  <p>Expanding \((a+b)^n\) for \(n=0,1,2,3,\dots\) gives coefficients that form Pascal's triangle. Each entry is the sum of the two entries above it, and every row is symmetric.</p>
  ${fig(pascalDoc(6, [[3, 1], [3, 2], [4, 2]]), "Rows 0 to 6. The highlighted entries show 3 + 3 = 6")}
  ${table(["n", "expansion of (a + b)ⁿ"], [
    ["2", S`\(a^2+2ab+b^2\)`],
    ["3", S`\(a^3+3a^2b+3ab^2+b^3\)`],
    ["4", S`\(a^4+4a^3b+6a^2b^2+4ab^3+b^4\)`],
  ])}
  <p>In each term the powers of \(a\) and \(b\) add up to \(n\): the power of \(a\) falls by 1 while the power of \(b\) rises by 1.</p>`),

  section("📌 The binomial theorem", S`
  <p style="text-align:center">\((a+b)^n=\displaystyle\sum_{r=0}^{n}\binom nr a^{n-r}b^{r}=a^n+\binom n1a^{n-1}b+\binom n2a^{n-2}b^2+\dots+b^n\), where \(\binom nr=\dfrac{n!}{r!(n-r)!}\).</p>
  ${fig(barsDoc([1, 6, 15, 20, 15, 6, 1], { start: 0, color: "#6d28d9", xlab: "r", title: "The coefficients of (a + b)⁶ = row 6" }), "The coefficients rise to a peak in the middle and are symmetric")}
  ${keyIdea(S`Treat \(a\) and \(b\) as whole brackets: in \((2x-3)^6\), \(a=2x\) and \(b=-3\), so every term includes powers of 2 and of \(-3\) as well as \(\binom 6r\).`)}
  ${watchOut([
    "Put the whole of each term in brackets: (2x)³ = 8x³, not 2x³.",
    "A negative b makes every odd-r term negative.",
    "The term containing bʳ is the (r + 1)th term, because r starts at 0.",
    "For a 'constant term' or 'term in xᵏ', write the power of x in the general term and solve for r first.",
  ])}`),

  section("📌 Explore", S`<p>Choose \(n\), \(a\) and \(b\) to expand \((ax+b)^n\). Move \(r\) to pick out one term: its Pascal coefficient is shown in red, and the readout builds the term from \(\binom nr\), \((ax)^{n-r}\) and \(b^r\).</p>`),

  widget("binomialLab", { init: [5, 2, 2, -1] }),

  examples([
    ["Level 1 · A full expansion", S`Expand \((x+2)^4\).`,
      [S`Row 4: \(1, 4, 6, 4, 1\).`, S`\(x^4+4x^3(2)+6x^2(2)^2+4x(2)^3+2^4\).`, S`\(=x^4+8x^3+24x^2+32x+16\).`],
      S`\(x^4+8x^3+24x^2+32x+16\)`,
      fig(pascalDoc(4, [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]]), "Row 4 gives 1, 4, 6, 4, 1")],
    ["Level 1 · Evaluating nCr", S`Evaluate \(\binom73\) and check it in Pascal's triangle.`,
      [S`\(\binom73=\dfrac{7!}{3!\,4!}=\dfrac{7\cdot6\cdot5}{3\cdot2\cdot1}=35\).`, S`Row 7 is \(1, 7, 21, 35, 35, 21, 7, 1\); the entry with \(r=3\) is 35.`],
      S`\(35\)`],
    ["Level 2 · One specific term", S`Find the term in \(x^3\) in the expansion of \((2x-3)^6\).`,
      [S`General term: \(\binom6r(2x)^{6-r}(-3)^r\). We need \(6-r=3\), so \(r=3\).`, S`\(\binom63(2x)^3(-3)^3=20\cdot8x^3\cdot(-27)\).`, S`\(=-4320x^3\).`],
      S`\(-4320x^3\)`],
    ["Level 2 · Two variables", S`Expand \((a-2b)^5\).`,
      [S`Row 5: \(1, 5, 10, 10, 5, 1\), with \(b\) replaced by \(-2b\).`, S`\(a^5+5a^4(-2b)+10a^3(4b^2)+10a^2(-8b^3)+5a(16b^4)+(-32b^5)\).`, S`\(=a^5-10a^4b+40a^3b^2-80a^2b^3+80ab^4-32b^5\).`],
      S`\(a^5-10a^4b+40a^3b^2-80a^2b^3+80ab^4-32b^5\)`],
    ["Level 3 · The constant term", S`Find the constant term in the expansion of \(\left(x^2+\dfrac2x\right)^6\).`,
      [S`General term: \(\binom6r(x^2)^{6-r}\left(\frac2x\right)^r=\binom6r2^rx^{12-2r-r}=\binom6r2^rx^{12-3r}\).`, S`Constant: \(12-3r=0\Rightarrow r=4\).`, S`\(\binom64 2^4=15\cdot16=240\).`],
      S`\(240\)`,
      fig(barsDoc([12, 9, 6, 3, 0, -3, -6], { start: 0, color: "#0e7490", xlab: "r", title: "Power of x in each term: 12 − 3r" }), "Only the term with r = 4 has power 0")],
  ]),

  practice([
    q("Level 1 · nCr", S`Evaluate \(\binom52\).`, num(10),
      "5!/(2!3!).", [S`\(\frac{5\cdot4}{2}\).`], S`\(10\)`),
    q("Level 1 · a coefficient", S`Find the coefficient of \(x^2\) in \((x+3)^5\).`, num(270),
      "x² needs r = 3.", [S`\(\binom53 3^3=10(27)\).`], S`\(270\)`),
    q("Level 2 · a coefficient", S`Find the coefficient of \(x^4\) in \((1+2x)^7\).`, num(560),
      "Term: C(7, 4)(2x)⁴.", [S`\(35(16)\).`], S`\(560\)`),
    q("Level 2 · negative term", S`Find the coefficient of \(x^2\) in \((2x-1)^5\).`, num(-40),
      "(2x)² needs r = 3.", [S`\(\binom53(2)^2(-1)^3=10(4)(-1)\).`], S`\(-40\)`),
    q("Level 2 · number of terms", S`How many terms are in the expansion of \((a+b)^9\)?`, num(10),
      "r runs from 0 to n.", [S`\(9+1\).`], S`\(10\)`),
  ]),

  ...hard([
    ["Find the power", S`The coefficient of \(x^2\) in the expansion of \((1+3x)^n\) is 252. Find \(n\).`,
      [S`The \(x^2\) term is \(\binom n2(3x)^2=9\binom n2x^2\), so \(9\binom n2=252\Rightarrow\binom n2=28\).`, S`\(\frac{n(n-1)}{2}=28\Rightarrow n^2-n-56=0\Rightarrow(n-8)(n+7)=0\).`, S`\(n\) is a positive whole number, so \(n=8\).`],
      S`\(n=8\)`,
      fig(pascalDoc(8, [[8, 2]]), "In row 8, the entry for r = 2 is 28")],
    ["An approximation", S`Use the first three terms of the expansion of \((1-x)^8\) to estimate \(0.98^8\), and compare with the calculator value.`,
      [S`\((1-x)^8=1-8x+28x^2-\dots\)`, S`With \(x=0.02\): \(1-0.16+28(0.0004)=0.8512\).`, S`Calculator: \(0.98^8\approx0.85076\). The later terms are tiny because powers of 0.02 shrink fast.`],
      S`\(\approx0.8512\) (actual 0.85076)`],
  ], [
    q("Level 3 · constant term", S`Find the constant term in \(\left(x-\dfrac3x\right)^6\).`, num(-540),
      "General term C(6, r)xⁿ⁻ʳ(−3/x)ʳ: power 6 − 2r.", [S`\(r=3\): \(\binom63(-3)^3=20(-27)\).`], S`\(-540\)`),
    q("Level 3 · a product", S`Find the coefficient of \(x^3\) in \((2+x)(1+x)^5\).`, num(30),
      "2 × (x³ coefficient) + 1 × (x² coefficient).", [S`\(2\binom53+\binom52=20+10\).`], S`\(30\)`),
    q("Level 3 · unknown coefficient", S`The coefficient of \(x^2\) in \((1+kx)^6\) is 135 and \(k>0\). Find \(k\).`, num(3),
      "C(6, 2)k² = 135.", [S`\(15k^2=135\Rightarrow k^2=9\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Pascal's triangle or the formula?", "Pascal's triangle is quick for small n; for a single term, or n above about 6, use the general term."],
      ["Why is 0! = 1?", "It makes C(n, 0) = C(n, n) = 1 work in the formula, matching the 1s at the ends of every row."],
      ["What does 'ascending powers of x' mean?", "Write the terms starting with the constant, then x, x², and so on."],
      ["Can I use the GDC for nCr?", "Yes on Paper 2 (the nCr function). On Paper 1, cancel the factorials by hand."],
      ["Does the theorem work for negative or fractional n?", "Not in this course: AA SL uses whole-number n only."],
    ],
    summary: [
      "(a + b)ⁿ = Σ from r = 0 to n of C(n, r) aⁿ⁻ʳ bʳ.",
      "C(n, r) = n! / (r!(n − r)!), the rth entry of row n of Pascal's triangle.",
      "Put whole terms in brackets and keep the signs of b.",
      "For a specific term, find r from the power of x first.",
    ],
    next: "1.6 shows how to prove a statement is always true — and how a single counterexample disproves one.",
  }),
];
