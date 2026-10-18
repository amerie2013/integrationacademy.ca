// MCR3U 7.8 — Chapter 7 Review: arithmetic and geometric sequences, recursive rules, two-term recursions, series,
// Pascal's triangle and binomial expansions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "7.8 Chapter 7 Review";
export const ID = "5c3e0001-0001-4001-8001-000000000708";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 7 Review",
    overview: S`This review connects the chapter: arithmetic and geometric sequences, recursive and explicit rules, sequences built from two previous terms, arithmetic and geometric series, and Pascal's triangle with binomial expansions. The examples combine skills; the practice and hard-level problems are at chapter-test level.`,
    goals: [
      "classify a sequence and write its general term;",
      "move between recursive and explicit rules;",
      "work with Fibonacci-type sequences;",
      "choose and apply the right series formula;",
      "expand binomials and find a single coefficient.",
    ],
    curriculum: "C1 (representing sequences) and C3 (solving problems involving sequences and series)",
    prior: [
      ["Is 2, 6, 18, … arithmetic or geometric?", "Geometric, r = 3."],
      ["Find t₁₀ of 4, 7, 10, …", "31."],
      ["What is row 4 of Pascal's triangle?", "1, 4, 6, 4, 1."],
    ],
    words: [
      ["7.1–7.2", "arithmetic and geometric sequences", ""],
      ["7.3–7.4", "recursive rules; two-term rules", ""],
      ["7.5–7.6", "arithmetic and geometric series", ""],
      ["7.7", "Pascal's triangle and binomials", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Topic", "Key fact"], [["Arithmetic", "\\(t_n=a+(n-1)d\\); \\(S_n=\\frac n2(a+t_n)\\)"], ["Geometric", "\\(t_n=ar^{n-1}\\); \\(S_n=\\frac{a(r^n-1)}{r-1}\\)"], ["Recursive", "\\(t_1\\) given, \\(t_n\\) from earlier terms"], ["Two-term", "\\(t_n=t_{n-1}+t_{n-2}\\): ratios → 1.618"], ["Binomial", "row n of Pascal's triangle gives \\((a+b)^n\\)"]])}
  ${keyIdea("First decide what you have: a single term (sequence) or a total (series)? A constant difference or a constant ratio? Then pick the matching formula, and count the terms if you need n.")}`),

  section("📌 Explore", S`<p>Use the explorer to check the recursive sequences in the examples and problems below.</p>`),

  widget("recursiveLab", { init: [3, 1, 4] }),

  examples([
    ["Classify and write", "Classify each sequence and give its general term: (a) 12, 7, 2, −3, … (b) 12, 6, 3, 1.5, …",
      [S`(a) \(d=-5\): \(t_n=17-5n\).`, S`(b) \(r=\frac12\): \(t_n=12\left(\frac12\right)^{n-1}\).`],
      "arithmetic; geometric"],
    ["Recursive and explicit", S`A sequence has \(t_1=7\) and \(t_n=t_{n-1}-3\). Write its explicit rule and find which term is −80.`,
      [S`\(t_n=10-3n\).`, S`\(10-3n=-80\Rightarrow n=30\).`],
      S`\(t_n=10-3n\); the 30th term`],
    ["A two-term rule", S`\(t_1=4\), \(t_2=-1\), \(t_n=t_{n-1}+t_{n-2}\). Find \(t_7\).`,
      ["4, −1, 3, 2, 5, 7, 12."],
      S`\(t_7=12\)`],
    ["Both series", "Find (a) 6 + 10 + 14 + … + 98 and (b) 6 + 12 + 24 + … + 1536.",
      [S`(a) \(n=24\): \(12(6+98)=1248\).`, S`(b) \(2^{n-1}=256\Rightarrow n=9\): \(6(2^9-1)=3066\).`],
      "1248 and 3066",
      plane({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 3200 }, points: Array.from({ length: 9 }, (_, i) => ({ x: i + 1, y: 6 * (2 ** (i + 1) - 1), color: "violet" })).concat(Array.from({ length: 9 }, (_, i) => ({ x: i + 1, y: (i + 1) * (6 + 2 * i) , color: "blue" }))), step: { x: 1, y: 400 }, xlabel: "n", ylabel: "Sₙ" }, "geometric partial sums (violet) overtake arithmetic ones (blue)")],
    ["A binomial term", S`Find the term containing \(x^3\) in \((x-2)^6\).`,
      [S`Row 6: 1, 6, 15, 20, 15, 6, 1. The \(x^3\) term: \(20x^3(-2)^3\).`],
      S`\(-160x^3\)`],
  ]),

  practice([
    q("arithmetic", S`Find \(t_{25}\) for \(-8,-5,-2,\ldots\)`, num(64),
      "a + 24d.", [S`\(-8+72\).`], S`\(64\)`),
    q("geometric", S`Find \(t_7\) for \(1, -2, 4,\ldots\)`, num(64),
      "(−2)⁶.", [S`\(64\)`], S`\(64\)`),
    q("arithmetic series", S`Find \(S_{30}\) for \(1+4+7+\cdots\)`, num(1335),
      "15(2 + 87).", [S`\(15\cdot89\).`], S`\(1335\)`),
    q("geometric series", S`Find \(S_7\) for \(1+3+9+\cdots\)`, num(1093),
      "(3⁷ − 1)/2.", [S`\(2186\div2\).`], S`\(1093\)`),
    q("classify", "Classify 1, 3, 6, 10, 15, …", choice(["neither arithmetic nor geometric", "arithmetic", "geometric", "Fibonacci"], 0),
      "Differences 2, 3, 4, 5.", ["Second differences are constant."], "neither"),
  ]),

  ...hard([
    ["Arithmetic meets geometric", "The first three terms of an arithmetic sequence are 2, 2 + d, 2 + 2d. If the 1st, 2nd and 5th terms form a geometric sequence and d ≠ 0, find d.",
      [S`\((2+d)^2=2(2+4d)\Rightarrow4+4d+d^2=4+8d\).`, S`\(d^2=4d\Rightarrow d=4\).`],
      S`\(d=4\): 2, 6, 18 is geometric`],
    ["Expansion with two variables", S`Expand \((x^2+2y)^3\).`,
      [S`Row 3: \((x^2)^3+3(x^2)^2(2y)+3(x^2)(2y)^2+(2y)^3\).`],
      S`\(x^6+6x^4y+12x^2y^2+8y^3\)`],
  ], [
    q("hard", "How many terms of 50 + 46 + 42 + … must be added for the sum to first become negative?", num(27),
      "Sₙ = n(52 − 2n) < 0.", [S`\(52-2n<0\Rightarrow n>26\): at \(n=26\) the sum is exactly 0, so 27 terms are needed.`], S`\(27\)`),
    q("hard", S`A geometric series has \(a=5\) and \(S_4=200\) with \(r>0\). Find \(r\).`, num(3),
      "5(1 + r + r² + r³) = 200.", [S`\(1+r+r^2+r^3=40\Rightarrow r=3\).`], S`\(3\)`),
    q("hard", S`Find the coefficient of \(x^2\) in \((1+3x)^5\).`, num(90),
      "Row 5, term 10(3x)².", [S`\(10\cdot9\).`], S`\(90\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the most common error?", "Using the last term instead of the number of terms for n."],
      ["How do I tell a sequence question from a series question?", "'Find the 20th term' is a sequence; 'find the sum of 20 terms' is a series."],
      ["When should I use a recursive rule?", "When each term naturally depends on earlier ones, such as puzzles or growth step by step."],
      ["How do I check a binomial expansion?", "The exponents in each term add to n; substitute x = 1 to check the sum of the coefficients."],
      ["How should I study?", "Redo each lesson's hard-level problems, then check with the explorers."],
    ],
    summary: [
      "Arithmetic: +d; geometric: ×r.",
      "Count terms before summing.",
      "Recursive ↔ explicit.",
      "Pascal's row n ↔ (a + b)ⁿ.",
    ],
    next: "Chapter 8 applies sequences and series to financial mathematics.",
  }),
];
