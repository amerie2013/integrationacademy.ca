// IB AA SL 1.3 — Arithmetic and Geometric Series: sum formulas, solving for n, the sum to infinity, recurring decimals
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard } from "./lib.mjs";
import { fig, barsDoc, bounceDoc } from "./figs.mjs";

export const TITLE = "1.3 Arithmetic and Geometric Series";
export const ID = "46258e72-8eef-4835-9baf-dcb0834b1d62";
const S = String.raw;
const partial = (terms) => { let s = 0; return terms.map((t) => Math.round((s += t) * 1e6) / 1e6); };

export const blocks = () => [
  intro({
    icon: "➕",
    title: "Arithmetic and Geometric Series",
    overview: S`A series is the sum of the terms of a sequence. Adding 30 terms one by one is slow; the sum formulas do it in one step. In this lesson you will derive and use the sum formulas for arithmetic and geometric series, solve for the number of terms, and see why some infinite geometric series have a finite total.`,
    goals: [
      "use \\(S_n=\\frac n2\\big(2u_1+(n-1)d\\big)=\\frac n2(u_1+u_n)\\) for arithmetic series;",
      "use \\(S_n=\\dfrac{u_1(r^n-1)}{r-1}=\\dfrac{u_1(1-r^n)}{1-r}\\) for geometric series;",
      "find the number of terms needed for a given sum;",
      "decide when an infinite geometric series converges and find \\(S_\\infty=\\dfrac{u_1}{1-r}\\);",
      "write a recurring decimal as a fraction using \\(S_\\infty\\).",
    ],
    curriculum: "SL 1.2 (arithmetic series: sum of a finite series), SL 1.3 (geometric series: sum of a finite series), SL 1.8 (sum of an infinite convergent geometric sequence)",
    prior: [
      [S`Find \(u_{20}\) for \(5, 9, 13, \dots\)`, S`\(5+19(4)=81\).`],
      [S`Evaluate \(2^8-1\).`, S`\(255\).`],
      [S`Solve \(2n^2+n-1176=0\) for \(n>0\).`, S`\(n=24\).`],
    ],
    words: [
      ["Series", "the sum of the terms of a sequence", "\\(5+9+13+\\dots\\)"],
      ["Partial sum \\(S_n\\)", "the sum of the first \\(n\\) terms", "\\(S_3=27\\)"],
      ["Converges", "the partial sums approach a fixed number", "\\(1+\\tfrac12+\\tfrac14+\\dots\\to2\\)"],
      ["Sum to infinity \\(S_\\infty\\)", "the limit of \\(S_n\\) for a convergent geometric series", "\\(S_\\infty=\\dfrac{u_1}{1-r}\\)"],
      ["Diverges", "the partial sums do not approach a fixed number", "\\(1+2+4+\\dots\\)"],
    ],
  }),

  section("📌 Why the arithmetic sum formula works", S`
  <p>Write \(S=1+2+\dots+8\) forwards and backwards and add the columns: every column is \(1+8=9\), there are 8 columns, and each term was counted twice, so \(S=\frac{8\times9}{2}=36\).</p>
  ${fig(barsDoc([1, 2, 3, 4, 5, 6, 7, 8], { color: "#1d4ed8", xlab: "k", title: "1 + 2 + … + 8: pair the first and last bars" }), "First + last = 9, second + second-last = 9, … four pairs of 9 make 36")}
  <p>In general \(S_n=\frac n2(u_1+u_n)\); replacing \(u_n=u_1+(n-1)d\) gives \(S_n=\frac n2\big(2u_1+(n-1)d\big)\).</p>`),

  section("📌 Geometric series and the sum to infinity", S`
  <p>For \(S_n=u_1+u_1r+\dots+u_1r^{n-1}\), multiply by \(r\) and subtract: \(S_n-rS_n=u_1-u_1r^n\), so \(S_n=\dfrac{u_1(1-r^n)}{1-r}\) for \(r\ne1\).</p>
  <p>If \(|r|<1\), then \(r^n\to0\) as \(n\) grows, so the partial sums approach \(S_\infty=\dfrac{u_1}{1-r}\).</p>
  ${fig(barsDoc(partial([8, 4, 2, 1, 0.5, 0.25, 0.125, 0.0625]), { limit: 16, xlab: "n", title: "Partial sums of 8 + 4 + 2 + …" }), "With r = ½ the partial sums climb towards 16 = 8/(1 − ½) but never pass it")}
  ${table(["Series", "Sum of n terms", "Sum to infinity"], [
    ["arithmetic", S`\(\frac n2\big(2u_1+(n-1)d\big)\)`, "none (unless every term is 0)"],
    [S`geometric, \(|r|<1\)`, S`\(\dfrac{u_1(1-r^n)}{1-r}\)`, S`\(\dfrac{u_1}{1-r}\)`],
    [S`geometric, \(|r|\ge1\)`, S`\(\dfrac{u_1(r^n-1)}{r-1}\)`, "none (diverges)"],
  ])}
  ${keyIdea(S`Only a geometric series with \(-1<r<1\) has a sum to infinity. Always state this condition before using \(S_\infty\).`)}
  ${watchOut([
    "Sₙ is a sum; uₙ is a single term. Read the question carefully.",
    "In the arithmetic formula the bracket is 2u₁ + (n − 1)d, not 2(u₁ + (n − 1)d).",
    "For r > 1 the form u₁(rⁿ − 1)/(r − 1) avoids negative signs; both forms are correct.",
    "n is a whole number: if the equation gives a decimal, the question is asking for the first n that passes the target.",
  ])}`),

  section("📌 Explore", S`<p>Watch the partial-sum bars. For a geometric series, slide \(r\) between \(-1\) and \(1\) and the bars settle on the red line \(S_\infty\); push \(|r|\) to 1 or beyond and they never settle.</p>`),

  widget("seriesLab", { init: ["geo", 8, 0.5] }),

  examples([
    ["Level 1 · An arithmetic series", S`Find the sum of the first 20 terms of \(5+9+13+\dots\)`,
      [S`\(u_1=5\), \(d=4\), so \(u_{20}=5+19(4)=81\).`, S`\(S_{20}=\frac{20}{2}(5+81)=10(86)=860\).`],
      S`\(860\)`],
    ["Level 1 · A geometric series", S`Find the sum of the first 8 terms of \(3+6+12+\dots\)`,
      [S`\(u_1=3\), \(r=2\).`, S`\(S_8=\dfrac{3(2^8-1)}{2-1}=3(255)=765\).`],
      S`\(765\)`,
      fig(barsDoc(partial([3, 6, 12, 24, 48, 96, 192, 384]), { xlab: "n", title: "Partial sums Sₙ of 3 + 6 + 12 + …" }))],
    ["Level 2 · Sum to infinity", S`Does \(24+18+13.5+\dots\) have a sum to infinity? If so, find it.`,
      [S`\(r=\frac{18}{24}=0.75\), and \(|0.75|<1\), so yes.`, S`\(S_\infty=\dfrac{24}{1-0.75}=\dfrac{24}{0.25}=96\).`],
      S`\(S_\infty=96\)`,
      fig(barsDoc(partial([24, 18, 13.5, 10.125, 7.59375, 5.6953125]), { limit: 96, xlab: "n", labels: false }), "The partial sums approach 96")],
    ["Level 2 · How many terms?", S`How many terms of \(3+7+11+\dots\) add up to 1176?`,
      [S`\(S_n=\frac n2\big(6+4(n-1)\big)=n(2n+1)\).`, S`\(2n^2+n-1176=0\Rightarrow n=\frac{-1\pm\sqrt{9409}}{4}=\frac{-1\pm97}{4}\).`, S`\(n\) must be positive: \(n=24\).`],
      S`24 terms`],
    ["Level 3 · A recurring decimal", S`Write \(0.\overline{27}=0.272727\dots\) as a fraction in lowest terms.`,
      [S`\(0.\overline{27}=0.27+0.0027+0.000027+\dots\), a geometric series with \(u_1=0.27\), \(r=0.01\).`, S`\(S_\infty=\dfrac{0.27}{1-0.01}=\dfrac{0.27}{0.99}=\dfrac{27}{99}\).`, S`\(\dfrac{27}{99}=\dfrac{3}{11}\).`],
      S`\(\dfrac{3}{11}\)`],
  ]),

  practice([
    q("Level 1 · arithmetic sum", S`Find the sum of the first 10 terms of \(2+5+8+\dots\)`, num(155),
      "u₁₀ = 2 + 9(3).", [S`\(u_{10}=29\); \(5(2+29)\).`], S`\(155\)`),
    q("Level 1 · geometric sum", S`Find the sum of the first 6 terms of \(1+3+9+\dots\)`, num(364),
      "u₁(rⁿ − 1)/(r − 1).", [S`\(\frac{3^6-1}{2}=\frac{728}{2}\).`], S`\(364\)`),
    q("Level 2 · sum to infinity", S`Find the sum to infinity of \(50+10+2+\dots\)`, num(62.5),
      "r = 0.2.", [S`\(\frac{50}{0.8}\).`], S`\(62.5\)`),
    q("Level 2 · find r", S`A geometric series has \(u_1=10\) and \(S_\infty=40\). Find \(r\).`, num(0.75),
      "40 = 10/(1 − r).", [S`\(1-r=0.25\).`], S`\(0.75\)`),
    q("Level 2 · sigma", S`Evaluate \(\displaystyle\sum_{k=1}^{6}2\cdot3^{k-1}\).`, num(728),
      "A geometric series with u₁ = 2, r = 3, n = 6.", [S`\(\frac{2(3^6-1)}{2}\).`], S`\(728\)`),
  ]),

  ...hard([
    ["A bouncing ball", S`A ball is dropped from 10 m. After each bounce it rises to 60% of the height it fell from. Find the total distance it travels before coming to rest.`,
      [S`Down 10 m first. Then each rebound height \(6, 3.6, 2.16, \dots\) is travelled twice (up and down).`, S`Rebound heights: geometric with \(u_1=6\), \(r=0.6\): \(S_\infty=\dfrac{6}{1-0.6}=15\).`, S`Total \(=10+2(15)=40\) m.`],
      S`40 m`,
      fig(bounceDoc(10, 0.6, 4), "Each rebound is 60% of the previous height")],
    ["From Sₙ back to the terms", S`The sum of the first \(n\) terms of a series is \(S_n=3n^2+2n\). Show the series is arithmetic and find \(u_n\).`,
      [S`\(u_1=S_1=5\); \(S_2=16\), so \(u_2=16-5=11\).`, S`In general \(u_n=S_n-S_{n-1}=3n^2+2n-\big(3(n-1)^2+2(n-1)\big)=6n-1\).`, S`\(u_{n+1}-u_n=6\) is constant, so the series is arithmetic with \(d=6\).`],
      S`\(u_n=6n-1\), arithmetic with \(d=6\)`],
  ], [
    q("Level 3 · sum to infinity", S`A geometric series has \(S_\infty=150\) and \(r=0.4\). Find its 4th term.`, num(5.76, 0.001),
      "u₁ = S∞(1 − r).", [S`\(u_1=90\); \(u_4=90(0.4)^3\).`], S`\(5.76\)`),
    q("Level 3 · least n", S`Find the least \(n\) for which \(3+6+12+\dots\) (\(n\) terms) exceeds 1000.`, num(9),
      "3(2ⁿ − 1) > 1000.", [S`\(2^n>334.3\); \(2^8=256\), \(2^9=512\).`], S`\(9\)`),
    q("Level 3 · multiples", S`Find the sum of all multiples of 7 between 100 and 300.`, num(5586),
      "First 105, last 294.", [S`\(n=\frac{294-105}{7}+1=28\); \(14(105+294)\).`], S`\(5586\)`),
  ]),

  wrapUp({
    qas: [
      ["Which arithmetic formula should I use?", "If you know the last term, n/2(u₁ + uₙ) is quickest; otherwise use n/2(2u₁ + (n − 1)d)."],
      ["Why does 1 + ½ + ¼ + … stop growing?", "Each term covers half of the remaining gap to 2, so the total gets closer to 2 but never passes it."],
      ["What if r is negative?", "The partial sums zig-zag above and below S∞, but still converge when −1 < r < 0."],
      ["Can I use a GDC?", "Yes on Paper 2 (sequence and sum functions). On Paper 1 you need the formulas."],
      ["Why can't an arithmetic series have S∞?", "Its terms do not shrink to 0 (unless d = 0 and u₁ = 0), so the total keeps growing in size."],
    ],
    summary: [
      "Arithmetic: Sₙ = n/2(2u₁ + (n − 1)d) = n/2(u₁ + uₙ).",
      "Geometric: Sₙ = u₁(1 − rⁿ)/(1 − r), r ≠ 1.",
      "|r| < 1: S∞ = u₁/(1 − r); otherwise no sum to infinity.",
      "uₙ = Sₙ − Sₙ₋₁ recovers a term from the sums.",
    ],
    next: "1.4 applies geometric sequences and series to money: compound interest, depreciation and growth.",
  }),
];
