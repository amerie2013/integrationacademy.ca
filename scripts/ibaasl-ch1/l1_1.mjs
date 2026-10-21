// IB AA SL 1.1 — Number Patterns and Sigma Notation: patterns to formulas, explicit and recursive rules, sigma notation
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, seqDoc, barsDoc, dotsDoc } from "./figs.mjs";

export const TITLE = "1.1 Number Patterns and Sigma Notation";
export const ID = "7811a365-55aa-470b-aad2-966ebfdc695c";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🔢",
    title: "Number Patterns and Sigma Notation",
    overview: S`A sequence is a list of numbers in a definite order, such as the number of dots in a growing pattern or a bank balance at the end of each year. In this lesson you will describe a sequence by a rule for its \(n\)th term or by a recursive rule that builds each term from the one before, and you will use sigma notation \(\sum\) to write long sums in a short, exact form.`,
    goals: [
      "describe a number pattern with a general term \\(u_n\\) and use it to find any term;",
      "generate terms from a recursive rule such as \\(u_{n+1}=2u_n-3\\);",
      "expand a sum written in sigma notation and count its terms;",
      "write a sum in sigma notation;",
      "use the properties of sigma notation and \\(\\sum_{k=1}^{n}k=\\tfrac{n(n+1)}{2}\\) to evaluate sums.",
    ],
    curriculum: "SL 1.2 (sequences, the general term, sigma notation for sums), SL 1.3 (recursive descriptions of sequences)",
    prior: [
      [S`Evaluate \(3n^2-1\) when \(n=4\).`, S`\(3(16)-1=47\).`],
      [S`What is \(1+2+3+\dots+10\)?`, S`\(55\).`],
      [S`Solve \(2n^2+n=36\) for a positive whole number \(n\).`, S`\(n=4\) (\(32+4=36\)).`],
    ],
    words: [
      ["Sequence", "an ordered list of numbers called terms", "\\(2, 6, 12, 20, \\dots\\)"],
      ["General term \\(u_n\\)", "a formula giving the \\(n\\)th term directly", "\\(u_n=n(n+1)\\)"],
      ["Recursive rule", "a first term and a rule giving each term from the previous one", "\\(u_1=4,\\ u_{n+1}=2u_n-3\\)"],
      ["Series", "the sum of the terms of a sequence", "\\(2+6+12+20\\)"],
      ["Sigma notation", "\\(\\sum_{k=a}^{b} f(k)\\): add \\(f(k)\\) for \\(k=a, a+1, \\dots, b\\)", "\\(\\sum_{k=1}^{4}k^2=30\\)"],
    ],
  }),

  section("📌 From a pattern to a formula", S`
  <p>The dot patterns below grow by a rule. Counting the dots gives the sequence \(2, 6, 12, 20, \dots\). Each pattern is a rectangle \(n\) dots high and \(n+1\) dots wide, so the \(n\)th term is \(u_n=n(n+1)\).</p>
  ${fig(dotsDoc([2, 6, 12, 20], "rect"), "Patterns 1 to 4: 2, 6, 12 and 20 dots, so pattern n has n(n + 1) dots")}
  <p>A <strong>general term</strong> lets you jump straight to any term: pattern 10 has \(u_{10}=10(11)=110\) dots. A <strong>recursive rule</strong> describes the same growth step by step: here \(u_1=2\) and \(u_{n+1}=u_n+2(n+1)\), because each new pattern adds a column and a row.</p>
  ${keyIdea(S`An explicit rule gives \(u_n\) from \(n\); a recursive rule gives \(u_{n+1}\) from \(u_n\) and needs a starting value. Explicit rules are better for far-away terms; recursive rules are natural for step-by-step processes.`)}`),

  section("📌 Recursive sequences on a graph", S`
  <p>Plotting the terms \((n, u_n)\) shows how a sequence behaves. The rule \(u_1=4,\ u_{n+1}=2u_n-3\) doubles and then subtracts 3, so the terms grow faster and faster: \(4, 5, 7, 11, 19, 35\).</p>
  ${fig(seqDoc([4, 5, 7, 11, 19, 35], { color: "violet" }), "Terms of u₁ = 4, uₙ₊₁ = 2uₙ − 3 plotted as points (n, uₙ)")}
  <p>A sequence is defined only for whole numbers \(n=1, 2, 3, \dots\), so its graph is a set of separate points, not a curve.</p>`),

  section("📌 Sigma notation", S`
  <p>The Greek capital letter sigma means "add up". In \(\displaystyle\sum_{k=2}^{6}(3k-1)\), the <em>index</em> \(k\) takes every whole value from the lower limit 2 to the upper limit 6:</p>
  <p style="text-align:center">\(\displaystyle\sum_{k=2}^{6}(3k-1)=5+8+11+14+17=55\).</p>
  ${fig(barsDoc([5, 8, 11, 14, 17], { start: 2, color: "#1d4ed8", xlab: "k" }), "Each bar is one term 3k − 1; the sum is the total height, 55")}
  ${table(["Property", "Example"], [
    [S`\(\sum_{k=a}^{b}1\) has \(b-a+1\) terms`, S`\(\sum_{k=4}^{19}\) has \(16\) terms`],
    [S`\(\sum c\,u_k=c\sum u_k\)`, S`\(\sum_{k=1}^{20}2k=2\sum_{k=1}^{20}k\)`],
    [S`\(\sum (u_k+v_k)=\sum u_k+\sum v_k\)`, S`\(\sum_{k=1}^{n}(2k+5)=2\sum k+\sum 5\)`],
    [S`\(\sum_{k=1}^{n}c=nc\)`, S`\(\sum_{k=1}^{20}5=100\)`],
    [S`\(\sum_{k=1}^{n}k=\tfrac{n(n+1)}{2}\)`, S`\(\sum_{k=1}^{20}k=210\)`],
  ])}
  ${watchOut([
    "Count the terms as upper − lower + 1, not upper − lower.",
    "The index letter does not matter: Σ k² and Σ r² with the same limits are the same sum.",
    "A constant inside the sigma is added once for every term: Σ from k = 1 to 20 of 5 is 100, not 5.",
    "In a recursive rule you must know u₁ (or u₀) before any later term can be found.",
  ])}`),

  section("📌 Explore", S`<p>Choose the type of term and the limits. The bars are the terms; the green line is the running total, so its last point is the value of the sum.</p>`),

  widget("sigmaLab", { init: ["lin", 1, 6] }),

  examples([
    ["Level 1 · Pattern to formula", S`Find the general term of \(3, 8, 15, 24, 35, \dots\) and use it to find \(u_{12}\).`,
      [S`Each term is one less than a square: \(4-1, 9-1, 16-1, 25-1, 36-1\).`, S`The \(n\)th square is \((n+1)^2\), so \(u_n=(n+1)^2-1=n^2+2n\).`, S`\(u_{12}=144+24=168\).`],
      S`\(u_n=n^2+2n\), \(u_{12}=168\)`,
      fig(seqDoc([3, 8, 15, 24, 35], { color: "blue", label: "all" }))],
    ["Level 1 · A recursive rule", S`A sequence has \(u_1=6\) and \(u_{n+1}=\tfrac12u_n+4\). Find \(u_2\) to \(u_5\) and describe what happens.`,
      [S`\(u_2=3+4=7\), \(u_3=3.5+4=7.5\).`, S`\(u_4=3.75+4=7.75\), \(u_5=3.875+4=7.875\).`, S`The gaps halve each time, so the terms get closer and closer to 8.`],
      S`\(7, 7.5, 7.75, 7.875\); the terms approach 8`,
      fig(seqDoc([6, 7, 7.5, 7.75, 7.875, 7.9375], { color: "violet", label: "none", extra: [] }), "The terms rise towards 8 but never reach it")],
    ["Level 2 · Expanding a sum", S`Evaluate \(\displaystyle\sum_{r=0}^{4}(r^2-2r)\).`,
      [S`\(r=0,1,2,3,4\) gives \(0, -1, 0, 3, 8\).`, S`Add: \(0-1+0+3+8=10\).`],
      S`\(10\)`,
      fig(barsDoc([0, -1, 0, 3, 8], { start: 0, color: "#6d28d9", xlab: "r" }))],
    ["Level 2 · Writing a sum in sigma notation", S`Write \(4+9+16+\dots+144\) in sigma notation and state the number of terms.`,
      [S`The terms are \(2^2, 3^2, 4^2, \dots, 12^2\).`, S`So the sum is \(\displaystyle\sum_{k=2}^{12}k^2\), with \(12-2+1=11\) terms.`],
      S`\(\displaystyle\sum_{k=2}^{12}k^2\), 11 terms`],
    ["Level 3 · Using the properties", S`Evaluate \(\displaystyle\sum_{k=1}^{20}(2k+5)\) without listing the terms.`,
      [S`Split: \(\displaystyle 2\sum_{k=1}^{20}k+\sum_{k=1}^{20}5\).`, S`\(\displaystyle\sum_{k=1}^{20}k=\frac{20(21)}{2}=210\) and \(\displaystyle\sum_{k=1}^{20}5=100\).`, S`Total: \(2(210)+100=520\).`],
      S`\(520\)`],
  ]),

  practice([
    q("Level 1 · general term", S`For \(u_n=3n^2-1\), find \(u_4\).`, num(47),
      "Substitute n = 4.", [S`\(3(16)-1\).`], S`\(47\)`),
    q("Level 1 · recursive rule", S`\(u_1=2\) and \(u_{n+1}=3u_n+1\). Find \(u_4\).`, num(67),
      "Build the terms one at a time.", [S`\(2, 7, 22, 67\).`], S`\(67\)`),
    q("Level 2 · expand", S`Evaluate \(\displaystyle\sum_{k=1}^{5}(k^2+1)\).`, num(60),
      "List the five terms.", [S`\(2+5+10+17+26\).`], S`\(60\)`),
    q("Level 2 · counting terms", S`How many terms does \(\displaystyle\sum_{r=4}^{19}(2r-3)\) have?`, num(16),
      "upper − lower + 1.", [S`\(19-4+1\).`], S`\(16\)`),
    q("Level 2 · writing in sigma", "Which expression equals 3 + 6 + 9 + … + 30?", choice(["Σ (k = 1 to 10) of 3k", "Σ (k = 3 to 30) of k", "Σ (k = 1 to 30) of 3k", "Σ (k = 1 to 9) of 3k"], 0),
      "Each term is 3 times its position.", [S`\(3=3(1)\) and \(30=3(10)\).`], S`\(\sum_{k=1}^{10}3k\)`),
  ]),

  ...hard([
    ["Find the number of terms", S`Find \(n\) if \(\displaystyle\sum_{k=1}^{n}(4k-1)=1830\).`,
      [S`\(\displaystyle 4\sum_{k=1}^{n}k-\sum_{k=1}^{n}1=4\cdot\frac{n(n+1)}{2}-n=2n^2+n\).`, S`\(2n^2+n-1830=0\Rightarrow n=\frac{-1\pm\sqrt{1+14640}}{4}=\frac{-1\pm121}{4}\).`, S`\(n\) must be a positive whole number, so \(n=30\).`],
      S`\(n=30\)`],
    ["From recursive to explicit", S`\(u_1=1\) and \(u_{n+1}=u_n+2n\). Find the first five terms, an explicit formula for \(u_n\), and \(u_{50}\).`,
      [S`\(u_2=1+2=3\), \(u_3=3+4=7\), \(u_4=7+6=13\), \(u_5=13+8=21\).`, S`The differences \(2, 4, 6, 8\) grow by 2, so \(u_n\) is quadratic. Try \(u_n=n^2-n+1\): \(1, 3, 7, 13, 21\) ✓.`, S`\(u_{50}=2500-50+1=2451\).`],
      S`\(u_n=n^2-n+1\), \(u_{50}=2451\)`,
      fig(seqDoc([1, 3, 7, 13, 21], { color: "violet", label: "all" }))],
  ], [
    q("Level 3 · split a sum", S`Given \(\displaystyle\sum_{k=1}^{40}k=820\), find \(\displaystyle\sum_{k=11}^{40}k\).`, num(765),
      "Remove the first 10 terms.", [S`\(820-55\).`], S`\(765\)`),
    q("Level 3 · constant terms", S`Find \(n\) if \(\displaystyle\sum_{k=1}^{n}5=85\).`, num(17),
      "A constant is added once per term.", [S`\(5n=85\).`], S`\(17\)`),
    q("Level 3 · recursive", S`\(u_1=10\) and \(u_{n+1}=\tfrac12u_n+3\). Find \(u_4\).`, num(6.5),
      "Three steps.", [S`\(u_2=8\), \(u_3=7\), \(u_4=6.5\).`], S`\(6.5\)`),
  ]),

  wrapUp({
    qas: [
      ["When should I use a recursive rule?", "When each step depends on the previous one (a balance, a population, a process). For a far-away term an explicit rule is faster."],
      ["Does the index have to start at 1?", "No. Any whole-number start works; just count the terms as upper − lower + 1."],
      ["Can I use my GDC for sigma sums?", "Yes, on calculator papers. On non-calculator papers use the properties and Σk = n(n + 1)/2."],
      ["Why are the graphs of sequences dotted?", "A sequence is only defined for whole numbers n, so there is nothing between the points."],
      ["What is the difference between a sequence and a series?", "A sequence is the list of terms; a series is their sum."],
    ],
    summary: [
      "General term uₙ: any term directly; recursive rule: each term from the previous one plus a start value.",
      "Σ from k = a to b adds b − a + 1 terms.",
      "Σ(c·uₖ) = c·Σuₖ, Σ(uₖ + vₖ) = Σuₖ + Σvₖ, Σc = nc.",
      "Σ from k = 1 to n of k = n(n + 1)/2.",
    ],
    next: "1.2 studies the two most important patterns: arithmetic sequences (add d) and geometric sequences (multiply by r).",
  }),
];
