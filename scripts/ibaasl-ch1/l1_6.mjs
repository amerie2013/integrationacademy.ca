// IB AA SL 1.6 — Proof: LHS → RHS identities, odd/even and consecutive-integer proofs, counterexamples
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, dotsDoc, planeDoc, seqDoc, barsDoc } from "./figs.mjs";

export const TITLE = "1.6 Proof";
export const ID = "0a25303e-b72a-4873-8572-416389d0a1fe";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Proof",
    overview: S`Checking a statement for a few numbers can make it look true, but that is not a proof: it might fail for the next number. A proof is a chain of correct steps showing a statement holds in every case. In this lesson you will prove identities by working from one side to the other, prove facts about odd, even and consecutive integers with algebra, and disprove a false statement with a single counterexample.`,
    goals: [
      "explain the difference between an equation and an identity (\\(\\equiv\\));",
      "prove an identity by transforming the left-hand side into the right-hand side;",
      "represent even, odd and consecutive integers algebraically (\\(2n\\), \\(2n+1\\), \\(n, n+1\\));",
      "write a short deductive proof of a statement about integers;",
      "disprove a statement with a counterexample.",
    ],
    curriculum: "SL 1.6 (simple deductive proof, numerical and algebraic; how to lay out a LHS to RHS proof; the symbols and notation for equality and identity)",
    prior: [
      [S`Expand \((x+3)^2\).`, S`\(x^2+6x+9\).`],
      [S`Factorise \(x^2-9\).`, S`\((x-3)(x+3)\).`],
      [S`Is \(2\times\text{(any integer)}\) always even?`, "Yes: it has a factor of 2."],
    ],
    words: [
      ["Identity \\(\\equiv\\)", "true for every value of the variable", "\\((x+1)^2\\equiv x^2+2x+1\\)"],
      ["Equation \\(=\\)", "true only for some values", "\\(x^2=4\\) only for \\(x=\\pm2\\)"],
      ["Deductive proof", "a chain of steps, each following from the last", "LHS = … = RHS"],
      ["Counterexample", "one case where a statement fails", "\\(n=40\\) for \\(n^2+n+41\\)"],
      ["Even / odd", "\\(2n\\) / \\(2n+1\\) for an integer \\(n\\)", "\\(14=2(7)\\), \\(15=2(7)+1\\)"],
    ],
  }),

  section("📌 Equations, identities and examples", S`
  <p>\(x^2=4\) is an <strong>equation</strong>: it is true only for \(x=\pm2\). \((x+3)^2-(x-3)^2\equiv12x\) is an <strong>identity</strong>: it is true for every \(x\). Graphing both sides of an identity gives the same graph.</p>
  ${fig(planeDoc({ view: { xmin: -4, xmax: 4, ymin: -50, ymax: 50 }, step: { x: 1, y: 10 }, curves: [{ f: (x) => (x + 3) ** 2 - (x - 3) ** 2, color: "violet" }, { f: (x) => 12 * x, color: "blue" }], points: [P(2, 24, "(2, 24)", "violet")] }), "y = (x + 3)² − (x − 3)² and y = 12x lie on top of each other: one line")}
  <p>A graph or a table of values <em>suggests</em> an identity but does not prove it. The proof is the algebra.</p>
  ${keyIdea(S`To prove an identity, start with one side (usually the more complicated one) and transform it step by step into the other side. Never start by assuming the statement is true.`)}`),

  section("📌 Proofs about integers", S`
  ${table(["Number", "Algebraic form (n an integer)"], [
    ["any even number", S`\(2n\)`],
    ["any odd number", S`\(2n+1\)`],
    ["consecutive integers", S`\(n,\ n+1,\ n+2\)`],
    ["consecutive odd numbers", S`\(2n-1,\ 2n+1\)`],
    ["a multiple of k", S`\(kn\)`],
  ])}
  <p>The sum of the first \(n\) odd numbers is always a square. The picture shows why: each odd number is an L-shape that wraps around the previous square.</p>
  ${fig(dotsDoc([1, 4, 9, 16], "sq"), "1, 1 + 3, 1 + 3 + 5, 1 + 3 + 5 + 7 make squares of side 1, 2, 3, 4")}
  ${watchOut([
    "Use different letters for numbers that are not related: two odd numbers are 2m + 1 and 2n + 1, not both 2n + 1.",
    "Checking examples is not a proof, but one counterexample IS a complete disproof.",
    "Write the conclusion in words at the end: '… which is a multiple of 3.'",
    "Don't work on both sides at once and meet in the middle without saying so — go LHS → RHS.",
  ])}`),

  section("📌 Explore", S`<p>Test each conjecture for many values of \(n\). Some survive every test you try (they still need a proof); some break at a surprising place.</p>`),

  widget("conjectureLab", { init: "odd" }),

  examples([
    ["Level 1 · Proving an identity", S`Prove that \((x+3)^2-(x-3)^2\equiv12x\).`,
      [S`LHS \(=(x^2+6x+9)-(x^2-6x+9)\).`, S`\(=x^2+6x+9-x^2+6x-9\).`, S`\(=12x=\) RHS.`],
      "LHS ≡ RHS, so the identity is proved"],
    ["Level 1 · A counterexample", S`Show that the statement "\(n^2+n+41\) is prime for every positive integer \(n\)" is false.`,
      [S`It is prime for \(n=1, 2, \dots, 39\) — but examples are not a proof.`, S`Try \(n=40\): \(1600+40+41=1681=41^2\).`, S`1681 is not prime, so the statement is false.`],
      S`counterexample \(n=40\)`,
      fig(seqDoc([43, 47, 53, 61, 71, 83], { color: "green", label: "all" }), "The first six values are all prime — yet the pattern breaks at n = 40")],
    ["Level 2 · Odd plus odd", S`Prove that the sum of two odd numbers is even.`,
      [S`Let the odd numbers be \(2m+1\) and \(2n+1\), where \(m, n\) are integers.`, S`Sum \(=2m+2n+2=2(m+n+1)\).`, S`\(m+n+1\) is an integer, so the sum is a multiple of 2: it is even.`],
      "the sum is 2(m + n + 1), which is even"],
    ["Level 2 · Consecutive integers", S`Prove that the sum of any three consecutive integers is divisible by 3.`,
      [S`Let the integers be \(n-1\), \(n\), \(n+1\).`, S`Sum \(=3n\).`, S`\(3n\) is a multiple of 3 for every integer \(n\).`],
      "the sum is 3n, divisible by 3",
      fig(barsDoc([6, 9, 12, 15, 18, 21], { start: 2, color: "#1d4ed8", xlab: "middle integer n", title: "(n − 1) + n + (n + 1) for n = 2 to 7" }), "Every total is 3 times the middle number")],
    ["Level 3 · Squares of consecutive odd numbers", S`Prove that the difference between the squares of two consecutive odd numbers is a multiple of 8.`,
      [S`Let the numbers be \(2n-1\) and \(2n+1\).`, S`\((2n+1)^2-(2n-1)^2=(4n^2+4n+1)-(4n^2-4n+1)=8n\).`, S`\(8n\) is a multiple of 8 for every integer \(n\). (Check: \(7^2-5^2=24=8\cdot3\).)`],
      "the difference is 8n"],
  ]),

  practice([
    q("Level 1 · counterexample", "Which number is a counterexample to 'every prime number is odd'?", choice(["2", "9", "1", "15"], 0),
      "A counterexample must be prime and even.", ["2 is prime and even."], "2"),
    q("Level 1 · notation", S`What does the symbol \(\equiv\) mean in \(2(x+1)\equiv2x+2\)?`, choice(["equal for every value of x", "equal for exactly one value of x", "approximately equal", "not equal"], 0),
      "Identity versus equation.", ["An identity holds for all x."], "equal for every x"),
    q("Level 2 · identity", S`\((x+a)^2-x^2\equiv6x+9\). Find \(a\).`, num(3),
      "Expand: 2ax + a².", [S`\(2a=6\) and \(a^2=9\).`], S`\(3\)`),
    q("Level 2 · first failure", S`For which smallest positive integer \(n\) is "\(2^n>n^2\)" false?`, num(2),
      "Try n = 1, 2, 3.", [S`\(n=1\): \(2>1\) true; \(n=2\): \(4>4\) false.`], S`\(2\)`),
    q("Level 2 · divisibility", S`For every integer \(n\), \((2n+1)^2-1=4n(n+1)\). Which number always divides it?`, choice(["8", "3", "5", "16"], 0),
      "One of n and n + 1 is even.", [S`\(n(n+1)\) is even, so \(4n(n+1)\) is a multiple of 8.`], "8"),
  ]),

  ...hard([
    ["A longer identity", S`Prove that \((2x-1)(x+3)-(x-2)^2\equiv x^2+9x-7\).`,
      [S`LHS \(=(2x^2+6x-x-3)-(x^2-4x+4)\).`, S`\(=2x^2+5x-3-x^2+4x-4\).`, S`\(=x^2+9x-7=\) RHS.`],
      "LHS ≡ RHS",
      fig(planeDoc({ view: { xmin: -11, xmax: 3, ymin: -30, ymax: 20 }, step: { x: 1, y: 5 }, curves: [{ f: (x) => (2 * x - 1) * (x + 3) - (x - 2) ** 2, color: "violet" }], points: [P(0, -7, "(0, −7)"), P(1, 3, "(1, 3)")] }), "Both sides give this one parabola")],
    ["Odd numbers make squares", S`Use the arithmetic series formula to prove that \(1+3+5+\dots+(2n-1)=n^2\).`,
      [S`The terms form an arithmetic series with \(u_1=1\), \(u_n=2n-1\) and \(n\) terms.`, S`\(S_n=\frac n2(u_1+u_n)=\frac n2(1+2n-1)\).`, S`\(=\frac n2(2n)=n^2\).`],
      S`\(S_n=n^2\) for every \(n\)`],
  ], [
    q("Level 3 · excluded value", S`\(\dfrac{x^2-9}{x+3}=x-3\) for every \(x\) except one value. Which?`, num(-3),
      "Division by zero.", [S`At \(x=-3\) the left side is undefined.`], S`\(-3\)`),
    q("Level 3 · matching coefficients", S`\(a(x+2)^2+b\equiv3x^2+12x+5\). Find \(b\).`, num(-7),
      "Compare the x² terms first.", [S`\(a=3\): \(3x^2+12x+12+b\), so \(12+b=5\).`], S`\(-7\)`),
    q("Level 3 · first counterexample", S`Find the smallest positive integer \(n\) for which \(n^2-n+11\) is not prime.`, num(11),
      "Test n = 1, 2, 3, … carefully.", [S`\(n=1\) to \(10\) give 11, 13, 17, 23, 31, 41, 53, 67, 83, 101 (all prime); \(n=11\) gives 121.`], S`\(11\)`),
  ]),

  wrapUp({
    qas: [
      ["How many examples prove a statement?", "None. Examples can only suggest; a proof must cover every case. But one counterexample is enough to disprove."],
      ["Which side should I start from?", "The more complicated side, so you can simplify it into the other."],
      ["Why do I need different letters for two odd numbers?", "Using 2n + 1 for both would force them to be the same number."],
      ["Do I need to state when an identity fails?", "Yes, if it involves division: (x² − 9)/(x + 3) ≡ x − 3 only for x ≠ −3."],
      ["Where does proof appear in IB exams?", "Short 'show that' and 'prove that' parts on both papers, often 2–4 marks."],
    ],
    summary: [
      "≡ means true for every value; = in an equation is true for some values.",
      "Prove identities LHS → RHS, one clear step at a time.",
      "Even 2n, odd 2n + 1, consecutive n, n + 1, n + 2.",
      "One counterexample disproves a statement.",
    ],
    next: "1.7 reviews the whole chapter with mixed exam-style questions.",
  }),
];
