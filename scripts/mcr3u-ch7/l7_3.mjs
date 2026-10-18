// MCR3U 7.3 — Creating Rules for Sequences: recursive and explicit rules, finite differences for sequences that are
// neither arithmetic nor geometric, the disc-moving puzzle 2ⁿ − 1, function notation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "7.3 Creating Rules for Sequences";
export const ID = "5c3e0001-0001-4001-8001-000000000703";
const S = String.raw;
const pts = (g, n) => Array.from({ length: n }, (_, i) => ({ x: i + 1, y: g(i + 1) }));

export const blocks = () => [
  intro({
    icon: "🧱",
    title: "Creating Rules for Sequences",
    overview: S`Many sequences are neither arithmetic nor geometric: square numbers, triangular numbers, or the number of moves needed to solve a puzzle. You can still describe them with rules. A <strong>recursive</strong> rule says how to get each term from the one before; an <strong>explicit</strong> rule gives \(t_n\) directly from \(n\). Finite differences help you find explicit rules: constant second differences mean a quadratic rule.`,
    goals: [
      "generate terms from a recursive formula;",
      "write a recursive formula for a given sequence;",
      "use first and second differences to classify a sequence;",
      "find an explicit (quadratic) rule when second differences are constant;",
      "connect recursive and explicit rules in problems.",
    ],
    curriculum: "C1.2 (determine and describe a recursive procedure for generating a sequence, given the initial terms, and determine relationships between explicit and recursive representations), C1.4 (represent a sequence using a recursion formula, function notation or the formula for the nth term), C3.1 (identify sequences as arithmetic, geometric or neither)",
    prior: [
      ["Find the differences of 1, 4, 9, 16.", "3, 5, 7."],
      [S`Evaluate \(n^2+1\) for \(n=4\).`, "17."],
      [S`Evaluate \(2^5-1\).`, "31."],
    ],
    words: [
      ["Recursive formula", "first term(s) plus a rule using earlier terms", "\\(t_1=1,\\ t_n=2t_{n-1}+1\\)"],
      ["Explicit formula", "a rule in terms of n only", "\\(t_n=2^n-1\\)"],
      ["First differences", "\\(t_{n+1}-t_n\\)", ""],
      ["Second differences", "differences of the first differences", ""],
    ],
  }),

  section("📌 Classifying with differences and ratios", S`
  ${table(["Pattern in the terms", "Type", "Explicit rule looks like"], [["first differences constant", "arithmetic (linear)", "\\(dn+b\\)"], ["second differences constant", "quadratic", "\\(an^2+bn+c\\)"], ["ratios constant", "geometric", "\\(ar^{n-1}\\)"], ["none of these", "other", "look for a recursive rule"]])}
  ${plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 40 }, points: pts((n) => n * n + 1, 6), curves: [{ f: (x) => x * x + 1, a: 0.5, b: 6.2, color: "gray" }], step: { x: 1, y: 5 }, xlabel: "n", ylabel: "tₙ" }, "2, 5, 10, 17, 26, 37: second differences are all 2, so tₙ = n² + 1")}
  ${keyIdea(S`If the second differences are a constant \(2a\), the explicit rule is quadratic with leading coefficient \(a\). Then use two terms to find the rest.`)}`),

  section("📌 Explore", S`<p>Choose p and q in \(t_n=p\,t_{n-1}+q\). When is the sequence arithmetic? Geometric? Neither? Try \(t_1=1\), \(p=2\), \(q=1\).</p>`),

  widget("recursiveLab", { init: [1, 2, 1] }),

  section("📌 Watch out", watchOut([
    "A recursive formula needs a starting term — without it the sequence is not defined.",
    "To use a recursive rule for t₁₀₀ you must build every term before it; an explicit rule is faster.",
    "Check differences carefully, including signs.",
    "Test your explicit rule on at least two terms you did not use to build it.",
  ])),

  examples([
    ["Terms from a recursive rule", S`List the first four terms: \(t_1=2\), \(t_n=3t_{n-1}-1\).`,
      [S`\(t_2=3(2)-1=5\), \(t_3=14\), \(t_4=41\).`],
      "2, 5, 14, 41"],
    ["A quadratic sequence", "Find an explicit rule for 2, 5, 10, 17, 26, …",
      ["First differences 3, 5, 7, 9; second differences 2: quadratic with leading coefficient 1.", S`\(t_n-n^2\) gives 1, 1, 1, …`],
      S`\(t_n=n^2+1\)`],
    ["Writing a recursive rule", "Write a recursive formula for 4, 9, 19, 39, …",
      [S`Each term is double the previous plus 1: \(9=2(4)+1\), \(19=2(9)+1\).`],
      S`\(t_1=4,\ t_n=2t_{n-1}+1\)`],
    ["The disc puzzle", "To move a stack of n discs between pegs (never putting a larger disc on a smaller one), move n − 1 discs, then the largest, then n − 1 again. Write a recursive rule and an explicit rule for the minimum number of moves.",
      [S`\(M_1=1\), \(M_n=2M_{n-1}+1\): 1, 3, 7, 15, …`, S`Each is one less than a power of 2: \(M_n=2^n-1\).`],
      S`\(M_{10}=1023\) moves`,
      plane({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 140 }, points: pts((n) => 2 ** n - 1, 7), step: { x: 1, y: 20 }, xlabel: "discs", ylabel: "moves" })],
    ["Function notation", S`For \(f(n)=n^2-3n\), list \(f(1)\) to \(f(5)\) and classify the sequence.`,
      [S`\(-2,-2,0,4,10\); first differences \(0,2,4,6\); second differences 2.`],
      "quadratic (neither arithmetic nor geometric)"],
  ]),

  practice([
    q("recursive", S`\(t_1=5\), \(t_n=t_{n-1}-4\). Find \(t_4\).`, num(-7),
      "Subtract 4 three times.", [S`\(5,1,-3,-7\).`], S`\(-7\)`),
    q("recursive", S`\(t_1=1\), \(t_n=2t_{n-1}+3\). Find \(t_4\).`, num(29),
      "Build term by term.", [S`\(1,5,13,29\).`], S`\(29\)`),
    q("classify", "Classify 1, 4, 9, 16, 25, …", choice(["neither arithmetic nor geometric", "arithmetic", "geometric", "both"], 0),
      "Check differences and ratios.", ["Differences 3, 5, 7, 9; ratios not constant."], "neither"),
    q("function", S`For \(f(n)=3n^2-1\), find \(f(5)\).`, num(74),
      "Substitute.", [S`\(75-1\).`], S`\(74\)`),
    q("pattern", "Find the next term: 3, 4, 7, 12, 19, …", num(28),
      "First differences 1, 3, 5, 7, …", [S`Next difference 9: \(19+9\).`], S`\(28\)`),
  ]),

  ...hard([
    ["Building a quadratic rule", "Find an explicit rule for 3, 8, 15, 24, 35, … and use it to find t₂₀.",
      ["Second differences are 2, so the rule is n² + bn + c.", S`\(t_n-n^2\) gives 2, 4, 6, 8, …\(=2n\): \(t_n=n^2+2n\).`],
      S`\(t_{20}=440\)`],
    ["Triangular numbers", "Dots are arranged in triangles: 1, 3, 6, 10, … Write a recursive rule, an explicit rule, and find the 50th triangular number.",
      [S`Each new row adds n dots: \(t_1=1\), \(t_n=t_{n-1}+n\).`, S`Two copies form an n by (n + 1) rectangle: \(t_n=\frac{n(n+1)}2\).`],
      S`\(t_{50}=1275\)`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 25 }, points: pts((n) => (n * (n + 1)) / 2, 6), step: { x: 1, y: 5 }, xlabel: "n", ylabel: "dots" })],
  ], [
    q("hard", S`\(t_1=2\), \(t_n=(t_{n-1})^2-1\). Find \(t_4\).`, num(63),
      "Square, then subtract 1.", [S`\(2,3,8,63\).`], S`\(63\)`),
    q("hard", "Find t₁₀ for 2, 6, 12, 20, 30, …", num(110),
      "Second differences 2; try n(n + 1).", [S`\(t_n=n(n+1)\).`], S`\(110\)`),
    q("hard", "What is the minimum number of moves for the disc puzzle with 7 discs?", num(127),
      "2ⁿ − 1.", [S`\(2^7-1\).`], S`\(127\)`),
  ]),

  wrapUp({
    qas: [
      ["Recursive or explicit — which is better?", "Recursive rules describe how terms grow; explicit rules jump straight to any term."],
      ["What do constant second differences tell me?", "The explicit rule is quadratic, with leading coefficient half the second difference."],
      ["Can a sequence be both arithmetic and geometric?", "Only a constant sequence like 5, 5, 5, … (d = 0, r = 1)."],
      ["How do I find a recursive rule?", "Compare each term with the one before: add? multiply? multiply and add?"],
      ["How do I check an explicit rule?", "Substitute n = 1, 2, 3 and compare with the terms."],
    ],
    summary: [
      "Recursive: start + rule from earlier terms.",
      "Explicit: tₙ from n directly.",
      "Constant 2nd differences → quadratic.",
      "tₙ = 2tₙ₋₁ + 1 with t₁ = 1 gives 2ⁿ − 1.",
    ],
    next: "7.4 looks at sequences where each term depends on the two before it.",
  }),
];
