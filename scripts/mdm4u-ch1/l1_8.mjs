// MDM4U 1.8 — The Binomial Theorem: (a + b)ⁿ from Pascal's triangle, the general term t(k+1) = nCk a^(n−k) b^k,
// expansions with coefficients and negative terms, finding a specific term or coefficient, the constant term,
// and the connection to counting (each term counts choices of a or b from n factors)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, pascalSvg, tilesSvg, barsSvg } from "./lib.mjs";
import { C, t, n, binTerm } from "../mdm4u/count.mjs";

export const TITLE = "1.8 The Binomial Theorem";
export const ID = "2ecda942-8a50-45a6-bedc-acffd5319adc";
const S = String.raw;

// (2x − 3)^5, term containing x^2  → k = 3
const ex3 = binTerm(2, -3, 5, 3);
// (x^2 + 2/x)^6 constant term: x^(2(6−k)) x^(−k) → 12 − 3k = 0 → k = 4
const ex5 = C(6, 4) * 2 ** 4;

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "The Binomial Theorem",
    overview: S`Expanding \((a+b)^n\) by repeated multiplication is slow. The <strong>binomial theorem</strong> gives every term at once: \[(a+b)^n=\binom n0a^n+\binom n1a^{n-1}b+\binom n2a^{n-2}b^2+\cdots+\binom nnb^n=\sum_{k=0}^{n}\binom nk a^{n-k}b^k.\] The coefficients are row \(n\) of Pascal's triangle, the powers of \(a\) fall from \(n\) to 0 while the powers of \(b\) rise from 0 to \(n\), and the general term is \(t_{k+1}=\binom nk a^{n-k}b^k\).`,
    goals: [
      "expand (a + b)ⁿ using Pascal's triangle or combinations;",
      "expand binomials with coefficients and negative terms;",
      "find a particular term with t(k+1) = nCk a^(n−k) b^k;",
      "find the coefficient of a given power and the constant term;",
      "explain why the coefficients are combinations.",
    ],
    curriculum: "A2.4 extension (connections between combinations, Pascal's triangle and the terms of the expansion of (a + b)ⁿ)",
    prior: [
      ["Expand (x + 3)².", "x² + 6x + 9."],
      ["Write row 4 of Pascal's triangle.", "1 4 6 4 1."],
      ["Evaluate (−2)³ and (−2)⁴.", "−8 and 16."],
    ],
    words: [
      ["Binomial", "a polynomial with two terms", "2x − 3"],
      ["Binomial coefficient", "nCk, the coefficient of a^(n−k) b^k", "₅C₂ = 10"],
      ["General term", "t(k+1) = nCk a^(n−k) b^k", "the 3rd term uses k = 2"],
      ["Constant term", "the term with no variable (x⁰)", "in (x + 1/x)⁴ it is 6"],
    ],
  }),

  section("📌 Why the coefficients are combinations", S`
  <p>\((a+b)^4=(a+b)(a+b)(a+b)(a+b)\). Each term of the product picks \(a\) or \(b\) from every bracket. A term \(a^2b^2\) appears once for every way of choosing which 2 of the 4 brackets give \(b\):</p>
  ${fig(tilesSvg(["a", "b", "a", "b"], { colors: { a: "blue", b: "red" }, caption: "one of the \\(\\binom42=6\\) ways to get \\(a^2b^2\\): b from brackets 2 and 4" }))}
  \[(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4\]
  ${fig(pascalSvg(7, { hl: [[4, 0], [4, 1], [4, 2], [4, 3], [4, 4]] }), "row 4: 1 4 6 4 1 are the coefficients of \\((a+b)^4\\)")}
  ${keyIdea(S`The coefficient of \(a^{n-k}b^k\) counts the ways to choose the \(k\) brackets that contribute \(b\): \(\binom nk\).`)}`),

  section("📌 Using the theorem", S`
  ${table(["Feature of (a + b)ⁿ", "Rule"], [["number of terms", "n + 1"], ["coefficients", "row n of Pascal's triangle: \\(\\binom n0,\\ldots,\\binom nn\\)"], ["powers", "a: n, n − 1, …, 0; b: 0, 1, …, n; each term's powers add to n"], ["general term", "\\(t_{k+1}=\\binom nk a^{n-k}b^k\\)"], ["negative b", "signs alternate when b is negative"]])}
  <p>For \((2x-1)^5\) use \(a=2x\), \(b=-1\): the size of each coefficient includes powers of 2 and the signs alternate. The bars show the coefficients:</p>
  ${fig(barsSvg([0, 1, 2, 3, 4, 5].map((k) => Math.abs(binTerm(2, -1, 5, k))), { labels: ["x⁵", "x⁴", "x³", "x²", "x", "1"], top: [0, 1, 2, 3, 4, 5].map((k) => binTerm(2, -1, 5, k)), hl: [1, 3, 5], xlabel: "term", ylabel: "|coefficient|" }), "\\((2x-1)^5=32x^5-80x^4+80x^3-40x^2+10x-1\\); red bars are negative")}
  ${keyIdea(S`Always put the whole first term in brackets: \((2x)^{3}=8x^3\), not \(2x^3\). Put a negative second term in brackets too: \((-1)^k\).`)}`),

  section("📌 Explore", S`<p>Set \(a\), \(b\) and the power \(n\). The chips show row \(n\) of Pascal's triangle; move the term slider to see how one term is built.</p>`),

  widget("binomialExpand", { init: [2, -1, 5] }),

  section("📌 Watch out", watchOut([
    "The (k + 1)th term uses k, not k + 1: the 4th term has k = 3.",
    "Raise the whole term to the power: (3x)² = 9x², and (−2)³ = −8.",
    "In (a − b)ⁿ the signs alternate, starting with +.",
    "For “the coefficient of xᵐ”, first find which k gives xᵐ, then compute that term's number part.",
  ])),

  examples([
    ["Expand", "Expand \\((x+2)^5\\).",
      [S`Row 5: 1 5 10 10 5 1.`, S`\(x^5+5x^4(2)+10x^3(4)+10x^2(8)+5x(16)+32\).`],
      "x⁵ + 10x⁴ + 40x³ + 80x² + 80x + 32"],
    ["Negative second term", "Expand \\((3y-1)^4\\).",
      [S`\(a=3y,\ b=-1\); row 4: 1 4 6 4 1.`, S`\((3y)^4+4(3y)^3(-1)+6(3y)^2(1)+4(3y)(-1)+1\).`, S`\(81y^4-108y^3+54y^2-12y+1\).`],
      "81y⁴ − 108y³ + 54y² − 12y + 1"],
    ["A specific term", "Find the term containing \\(x^2\\) in \\((2x-3)^5\\).",
      [S`\(t_{k+1}=\binom5k(2x)^{5-k}(-3)^k\). We need \(5-k=2\), so \(k=3\).`, S`\(\binom53(2x)^2(-3)^3=10(4x^2)(-27)\).`],
      `${ex3}x²`],
    ["Sum of coefficients", "Without expanding, find the sum of the coefficients of \\((x+1)^{9}\\) and of \\((2x-1)^{9}\\).",
      [S`Substitute \(x=1\): the sum of the coefficients of a polynomial is its value at 1.`, S`\((1+1)^9=512\); \((2-1)^9=1\).`],
      "512 and 1"],
    ["The constant term", "Find the constant term in \\(\\left(x^2+\\dfrac2x\\right)^6\\).",
      [S`\(t_{k+1}=\binom6k(x^2)^{6-k}\left(\frac2x\right)^k=\binom6k2^kx^{12-2k-k}\).`, S`Constant: \(12-3k=0\Rightarrow k=4\).`, S`\(\binom64 2^4=15\times16=240\).`],
      `${ex5}`],
  ]),

  practice([
    q("terms", "How many terms are in the expansion of (a + b)¹²?", num(13), "n + 1.", [S`\(12+1\).`], "13"),
    q("coefficient", "What is the coefficient of a³b² in (a + b)⁵?", num(10), "₅C₂.", [S`\(\binom52\).`], "10"),
    q("term", "Find the coefficient of x³ in (x + 2)⁶.", num(binTerm(1, 2, 6, 3)), "k = 3: ₆C₃ x³ 2³.", [S`\(20\times8\).`], "160"),
    q("sign", "Find the coefficient of x⁴ in (x − 3)⁵.", num(binTerm(1, -3, 5, 1)), "k = 1: ₅C₁ x⁴ (−3).", [S`\(5(-3)\).`], "-15"),
    q("first terms", "The first two terms of (1 + 2x)¹⁰ are 1 + … Which is the second term?", choice(["20x", "10x", "2x", "45x²"], 0), "₁₀C₁(2x).", [S`\(10\times2x\).`], "20x"),
  ]),

  ...hard([
    ["Working backwards", "In the expansion of \\((1+kx)^8\\), the coefficient of \\(x^2\\) is 252. Find \\(k>0\\).",
      [S`Coefficient of \(x^2\): \(\binom82k^2=28k^2\).`, S`\(28k^2=252\Rightarrow k^2=9\Rightarrow k=3\).`],
      "k = 3"],
    ["Two binomials", "Find the coefficient of \\(x^3\\) in \\((1+x)(1-2x)^5\\).",
      [S`\((1-2x)^5=1-10x+40x^2-80x^3+\cdots\)`, S`\(x^3\) comes from \(1\cdot(-80x^3)\) and \(x\cdot40x^2\).`, S`\(-80+40=-40\).`],
      `${binTerm(1, -2, 5, 3) + binTerm(1, -2, 5, 2)}`],
  ], [
    q("hard", "Find the constant term in (x − 1/x)⁸.", num(70), "x^(8−k) x^(−k): 8 − 2k = 0.", [S`\(k=4\): \(\binom84(-1)^4\).`], "70"),
    q("hard", "Find the coefficient of x⁵ in (2x + 1)⁷.", num(binTerm(2, 1, 7, 2)), "k = 2: ₇C₂ (2x)⁵.", [S`\(21\times32\).`], "672"),
    q("hard", "Use the binomial theorem to evaluate 1.01⁵ to 4 decimal places (expand (1 + 0.01)⁵, first 3 terms).", num(1.051, 0.0001), "1 + 5(0.01) + 10(0.0001).", [S`\(1+0.05+0.001=1.051\) (the next terms are below 0.00001).`], "1.0510"),
  ]),

  wrapUp({
    qas: [
      ["Where do the binomial coefficients come from?", "From choosing which k of the n brackets give the second term: nCk ways."],
      ["How do I find the 5th term?", "Use k = 4: t₅ = nC4 a^(n−4) b⁴."],
      ["What happens with a negative second term?", "(−b)ᵏ is positive for even k and negative for odd k, so the signs alternate."],
      ["How do I find a constant term?", "Write the power of x in the general term in terms of k, set it to 0, solve for k."],
      ["Why does substituting x = 1 give the sum of the coefficients?", "Every power of x becomes 1, leaving only the coefficients."],
    ],
    summary: [
      "(a + b)ⁿ = Σ nCk a^(n−k) b^k, k = 0 to n.",
      "n + 1 terms; powers add to n.",
      "t(k+1) = nCk a^(n−k) b^k.",
      "Bracket whole terms; signs alternate for negative b.",
    ],
    next: "1.9 reviews the whole counting chapter.",
  }),
];
