// IB AA SL 1.7 — Chapter 1 Review: sigma notation, arithmetic and geometric sequences and series, finance, binomial theorem, proof
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard } from "./lib.mjs";
import { fig, seqDoc, barsDoc, moneyDoc, pascalDoc } from "./figs.mjs";

export const TITLE = "1.7 Chapter 1 Review";
export const ID = "1baa0001-0001-4001-8001-000000000107";
const S = String.raw;
const partial = (terms) => { let s = 0; return terms.map((t) => Math.round((s += t) * 1e4) / 1e4); };

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 1 Review",
    overview: S`This review connects the whole chapter. The summary table lists each skill and the tool for it; the examples combine two or more skills the way exam questions do; the practice and hard-level questions are exam style, from short Paper 1 items to multi-step Paper 2 problems.`,
    goals: [
      "choose between arithmetic and geometric models and their formulas;",
      "use sigma notation and the sum formulas, including the sum to infinity;",
      "solve compound interest and depreciation problems;",
      "expand binomials and find specific terms;",
      "prove simple statements and disprove false ones.",
    ],
    curriculum: "SL 1.2, 1.3, 1.4, 1.6, 1.8, 1.9 (sequences and series, financial applications, proof, sum to infinity, binomial theorem)",
    prior: [
      ["How do you test for an arithmetic sequence?", "The differences between consecutive terms are all equal."],
      [S`When does \(S_\infty\) exist?`, S`For a geometric series with \(|r|<1\).`],
      ["What is the general term of (a + b)ⁿ?", S`\(\binom nr a^{n-r}b^r\).`],
    ],
    words: [
      ["1.1", "patterns, recursive rules, sigma notation", ""],
      ["1.2–1.3", "arithmetic and geometric sequences and series", ""],
      ["1.4", "compound interest and depreciation", ""],
      ["1.5", "the binomial theorem", ""],
      ["1.6", "proof and counterexamples", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Question", "Tool"], [
    ["Is it arithmetic or geometric?", "equal differences → arithmetic (add d); equal ratios → geometric (multiply by r)"],
    ["A single term", S`\(u_n=u_1+(n-1)d\) or \(u_n=u_1r^{n-1}\)`],
    ["A sum", S`\(S_n=\frac n2\big(2u_1+(n-1)d\big)\) or \(S_n=\dfrac{u_1(1-r^n)}{1-r}\)`],
    ["The sum of infinitely many terms", S`\(S_\infty=\dfrac{u_1}{1-r}\), only if \(|r|<1\)`],
    ["Money growing or shrinking", S`\(FV=PV\left(1+\frac{r}{100k}\right)^{kn}\), \(V=V_0\left(1-\frac{r}{100}\right)^n\)`],
    ["A power of a binomial", S`\(\binom nr a^{n-r}b^r\); find \(r\) from the power of \(x\)`],
    ["Is it always true?", "prove it with algebra (LHS → RHS); disprove it with one counterexample"],
  ])}
  ${fig(seqDoc([2, 4, 6, 8, 10, 12], { color: "blue", label: "none", extra: [2, 4, 8, 16, 32, 64].map((y, i) => ({ x: i + 1, y, color: "violet" })) }), "Blue: arithmetic 2, 4, 6, … (a line). Violet: geometric 2, 4, 8, … (a curve that pulls away)")}
  ${keyIdea("Most exam questions need two steps: first set up the right sequence (find u₁ and d or r from the information), then apply the right formula.")}`),

  section("📌 Explore", S`<p>Use the explorer to check partial sums from the examples, and to see which geometric series settle on a sum to infinity.</p>`),

  widget("seriesLab", { init: ["ari", 6, 9] }),

  examples([
    ["Level 1 · Term and sum", S`For \(6, 15, 24, \dots\) find \(u_{30}\) and \(S_{30}\).`,
      [S`Arithmetic with \(d=9\): \(u_{30}=6+29(9)=267\).`, S`\(S_{30}=\frac{30}{2}(6+267)=15(273)=4095\).`],
      S`\(u_{30}=267\), \(S_{30}=4095\)`],
    ["Level 2 · Find the ratio", S`A geometric series has \(u_1=2\) and \(S_5=242\). Find \(r\) (given \(r\) is a positive integer).`,
      [S`\(\dfrac{2(r^5-1)}{r-1}=242\Rightarrow\dfrac{r^5-1}{r-1}=121\Rightarrow1+r+r^2+r^3+r^4=121\).`, S`Try \(r=3\): \(1+3+9+27+81=121\) ✓.`],
      S`\(r=3\)`,
      fig(barsDoc(partial([2, 6, 18, 54, 162]), { xlab: "n", title: "Partial sums of 2 + 6 + 18 + …" }), "S₅ = 242")],
    ["Level 2 · An investment", S`6000 is invested at 4.2% per year compounded monthly. Find the value after 8 years.`,
      [S`Monthly multiplier \(1+\frac{4.2}{1200}=1.0035\); months \(=96\).`, S`\(FV=6000(1.0035)^{96}\approx8391.11\).`],
      S`\(8391.11\)`,
      fig(moneyDoc([Array.from({ length: 9 }, (_, t) => Math.round(6000 * 1.0035 ** (12 * t) * 100) / 100)], { years: 8 }))],
    ["Level 2 · A binomial coefficient", S`Find the coefficient of \(x^5\) in \((x-2)^8\).`,
      [S`General term \(\binom8r x^{8-r}(-2)^r\); \(8-r=5\Rightarrow r=3\).`, S`\(\binom83(-2)^3=56(-8)=-448\).`],
      S`\(-448\)`,
      fig(pascalDoc(8, [[8, 3]]), "Row 8, r = 3: 56")],
    ["Level 3 · When does it converge?", S`For which values of \(x\) does \(1+(2x-1)+(2x-1)^2+\dots\) have a sum to infinity? Find the sum when \(x=0.25\).`,
      [S`Geometric with \(r=2x-1\): need \(|2x-1|<1\), i.e. \(-1<2x-1<1\), so \(0<x<1\).`, S`At \(x=0.25\): \(r=-0.5\), \(S_\infty=\dfrac{1}{1-(-0.5)}=\dfrac{1}{1.5}=\dfrac23\).`],
      S`\(0<x<1\); \(S_\infty=\tfrac23\)`],
  ]),

  practice([
    q("Level 1 · sigma", S`Evaluate \(\displaystyle\sum_{k=1}^{8}(5k-2)\).`, num(164),
      "5Σk − 2·8.", [S`\(5(36)-16\).`], S`\(164\)`),
    q("Level 1 · geometric term", S`\(u_1=4\) and \(r=-3\). Find \(u_5\).`, num(324),
      "4(−3)⁴.", [S`\(4(81)\).`], S`\(324\)`),
    q("Level 2 · sum changes sign", S`An arithmetic series has \(u_1=40\) and \(d=-3\). Find the least \(n\) for which \(S_n<0\).`, num(28),
      "Sₙ = n(83 − 3n)/2.", [S`\(83-3n<0\Rightarrow n>27.67\).`], S`\(28\)`),
    q("Level 2 · depreciation", S`A truck worth 45 000 depreciates by 18% per year. Find its value after 3 years (2 d.p.).`, num(24811.56, 0.01),
      "45000 × 0.82³.", [S`\(45000(0.551368)\).`], S`\(24811.56\)`),
    q("Level 2 · binomial", S`Find the coefficient of \(x^3\) in \((1-2x)^6\).`, num(-160),
      "C(6, 3)(−2)³.", [S`\(20(-8)\).`], S`\(-160\)`),
  ]),

  ...hard([
    ["An arithmetic series meets a geometric one", S`An arithmetic series has \(u_{10}=31\) and \(S_{10}=175\). Find \(u_1\) and \(d\). Then find the first term of \(3, 6, 12, \dots\) that is larger than \(S_{10}\).`,
      [S`\(S_{10}=\frac{10}{2}(u_1+31)=175\Rightarrow u_1+31=35\Rightarrow u_1=4\).`, S`\(u_{10}=4+9d=31\Rightarrow d=3\).`, S`\(3(2)^{n-1}>175\Rightarrow2^{n-1}>58.3\Rightarrow n-1=6\): the 7th term, 192.`],
      S`\(u_1=4\), \(d=3\); 192 (the 7th term)`],
    ["Two salary offers", S`Offer A starts at 40 000 and rises by 2000 each year. Offer B starts at 38 000 and rises by 5% each year. Which pays more in total over 10 years, and by how much?`,
      [S`A is arithmetic: \(S_{10}=\frac{10}{2}\big(2(40000)+9(2000)\big)=5(98000)=490000\).`, S`B is geometric: \(S_{10}=\dfrac{38000(1.05^{10}-1)}{0.05}\approx477959.92\).`, S`A pays about 12 040.08 more over 10 years (although B's later salaries grow faster).`],
      S`A, by about 12 040`,
      fig(moneyDoc([Array.from({ length: 10 }, (_, t) => 40000 + 2000 * t), Array.from({ length: 10 }, (_, t) => Math.round(38000 * 1.05 ** t))], { years: 9, labels: ["A ", "B "], colors: ["blue", "green"], ylabel: "salary" }), "Yearly salaries: A (blue) stays ahead for 10 years, but B (green) is catching up")],
  ], [
    q("Level 3 · sum to infinity", S`Find the sum to infinity of \(18-12+8-\dots\)`, num(10.8, 0.001),
      "r = −2/3.", [S`\(\frac{18}{1+\frac23}=\frac{18}{5/3}\).`], S`\(10.8\)`),
    q("Level 3 · constant term", S`Find the term independent of \(x\) in \(\left(3x+\dfrac1{x^2}\right)^6\).`, num(1215),
      "Power of x: 6 − r − 2r.", [S`\(6-3r=0\Rightarrow r=2\); \(\binom62 3^4=15(81)\).`], S`\(1215\)`),
    q("Level 3 · proof idea", S`\((k+1)^2-k^2=2k+1\). Find the smallest positive integer \(k\) for which \((k+1)^2-k^2>50\).`, num(25),
      "2k + 1 > 50.", [S`\(k>24.5\).`], S`\(25\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I start a long sequences question?", "Write down what you know as u₁, d (or r), n, uₙ, Sₙ, then pick the formula with exactly one unknown."],
      ["When is a GDC table useful?", "For 'first term greater than' or 'least n' questions on Paper 2: list uₙ or Sₙ and read off n."],
      ["How do I avoid sign errors in binomial questions?", "Bracket the whole second term, e.g. (−2)ʳ, and evaluate the powers before multiplying."],
      ["What marks do proofs earn?", "Method marks for a correct algebraic representation and each valid step, and a final mark for a clear conclusion."],
      ["What should I revise first?", "Setting up u₁, d and r from words — most lost marks come from the set-up, not the formulas."],
    ],
    summary: [
      "Arithmetic: add d; geometric: multiply by r; check differences or ratios.",
      "Sum formulas for both; S∞ = u₁/(1 − r) only when |r| < 1.",
      "Finance: multipliers 1 + r/(100k) and 1 − r/100; round time up.",
      "Binomial: C(n, r)aⁿ⁻ʳbʳ; proof: algebra for all cases, one counterexample to disprove.",
    ],
    next: "Chapter 2 introduces functions: notation, graphs, domain and range, composite and inverse functions.",
  }),
];
