// MCR3U 7.6 — Geometric Series: derivation of S_n = a(rⁿ − 1)/(r − 1), counting terms, alternating series,
// applications (calling trees, bouncing balls), solving for n and r
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "7.6 Geometric Series";
export const ID = "c6448ceb-b97d-4a04-9314-88192c36f27e";
const S = String.raw;
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
const ball = 10 + (2 * 7.5 * (1 - 0.75 ** 5)) / 0.25;

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Geometric Series",
    overview: S`A <strong>geometric series</strong> is the sum of a geometric sequence. Multiply the sum \(S_n=a+ar+\cdots+ar^{n-1}\) by \(r\) and subtract: almost every term cancels, leaving \(rS_n-S_n=ar^n-a\). So \(S_n=\frac{a(r^n-1)}{r-1}\) for \(r\ne1\). In this lesson you will use this formula, count terms first, handle negative ratios, and solve problems about calling trees, bouncing balls and growth.`,
    goals: [
      "derive S_n = a(rⁿ − 1)/(r − 1) by multiplying and subtracting;",
      "find the sum of a given number of terms;",
      "count the terms of a finite geometric series before summing;",
      "work with alternating (r < 0) and shrinking (0 < r < 1) series;",
      "solve problems, including finding n or r.",
    ],
    curriculum: "C3.3 (determine the formula for the sum of a geometric series, through investigation using a variety of tools and strategies, and apply the formula to calculate the sum of a given number of consecutive terms), C3.4 (solve problems involving geometric sequences and series, including those arising from real-world applications)",
    prior: [
      [S`Evaluate \(2^{10}\).`, "1024."],
      [S`Which term of 2, 6, 18, … is 4374?`, "the 8th."],
      [S`Evaluate \((-3)^4\).`, "81."],
    ],
    words: [
      ["Geometric series", "\\(a+ar+ar^2+\\cdots+ar^{n-1}\\)", ""],
      ["Sum formula", "\\(S_n=\\frac{a(r^n-1)}{r-1},\\ r\\ne1\\)", ""],
      ["Equivalent form", "\\(S_n=\\frac{a(1-r^n)}{1-r}\\) (handy when 0 < r < 1)", ""],
      ["Last-term form", "\\(S_n=\\frac{r\\,t_n-a}{r-1}\\)", ""],
    ],
  }),

  section("📌 Why the formula works", S`
  ${table(["Line", "Expression"], [["\\(S_n\\)", "\\(a+ar+ar^2+\\cdots+ar^{n-1}\\)"], ["\\(rS_n\\)", "\\(ar+ar^2+\\cdots+ar^{n-1}+ar^n\\)"], ["subtract", "\\(rS_n-S_n=ar^n-a\\)"], ["solve", "\\(S_n=\\frac{a(r^n-1)}{r-1}\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 9 }, points: Array.from({ length: 8 }, (_, i) => ({ x: i + 1, y: 8 * (1 - 0.5 ** (i + 1)) })), lines: [{ m: 0, b: 8, color: "amber", dash: true, label: "8" }], step: { x: 1, y: 1 }, xlabel: "n", ylabel: "Sₙ" }, "partial sums of 4 + 2 + 1 + 0.5 + … creep up toward 8")}
  ${keyIdea(S`When \(0<r<1\) the terms shrink, so the partial sums level off near \(\frac a{1-r}\). When \(r>1\) the sums grow very fast.`)}`),

  section("📌 Explore", S`<p>Change r. Compare the partial sums for r = 2, r = 0.5 and r = −0.5.</p>`),

  widget("geoSums", { init: [4, 0.5] }),

  section("📌 Watch out", watchOut([
    "n is the number of terms — find it before summing.",
    "Brackets matter: (−2)ⁿ, not −2ⁿ.",
    "The formula fails when r = 1 (divide by 0) — then S_n = n·a.",
    "Use the 'smaller power' form a(1 − rⁿ)/(1 − r) to avoid sign errors when r < 1.",
  ])),

  examples([
    ["A growing series", S`Find \(S_6\) for \(3+6+12+\cdots\)`,
      [S`<b>Identify.</b> \(a=3\), \(r=2\), \(n=6\).`,
        S`<b>Formula.</b> \(S_n=\frac{a(r^n-1)}{r-1}\). This comes from subtracting \(rS_n\) from \(S_n\), which cancels the middle terms.`,
        S`<b>Substitute.</b> \(S_6=\frac{3(2^6-1)}{2-1}=3(63)\).`,
        S`<b>Evaluate.</b> \(189\).`,
        S`<b>Check by adding.</b> \(3+6+12+24+48+96=189\) ✓`],
      "189",
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 210 }, points: [1, 2, 3, 4, 5].map((n) => ({ x: n, y: 3 * (2 ** n - 1) })).concat([{ x: 6, y: 189, label: "(6, 189)", color: "amber" }]), step: { x: 1, y: 20 }, xlabel: "n", ylabel: "Sₙ" })],
    ["A shrinking series", S`Find \(S_8\) for \(128+64+32+\cdots\)`,
      [S`<b>Identify.</b> \(a=128\), \(r=0.5\), \(n=8\). Since \(r<1\), the form \(\frac{a(1-r^n)}{1-r}\) avoids negative signs.`,
        S`<b>Substitute.</b> \(S_8=\frac{128\left(1-0.5^8\right)}{1-0.5}\).`,
        S`<b>Simplify.</b> Dividing by \(0.5\) doubles: \(256\left(1-\frac1{256}\right)\).`,
        S`<b>Evaluate.</b> \(256-1=255\).`,
        S`<b>Check by adding.</b> \(128+64+32+16+8+4+2+1=255\) ✓. The sum creeps toward 256, as the graph shows.`],
      "255",
      plane({ view: { xmin: 0, xmax: 10, ymin: 100, ymax: 270 }, points: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({ x: n, y: 256 * (1 - 0.5 ** n), label: n === 8 ? "(8, 255)" : undefined, color: n === 8 ? "amber" : "blue" })), lines: [{ m: 0, b: 256, color: "gray", dash: true }], step: { x: 1, y: 20 }, xlabel: "n", ylabel: "Sₙ" })],
    ["Count first", "Find 2 + 6 + 18 + … + 4374.",
      [S`<b>Identify.</b> \(a=2\), \(r=3\). The last term is given, so find \(n\) first.`,
        S`<b>Find \(n\).</b> \(2(3)^{n-1}=4374\), so \(3^{n-1}=2187=3^7\). Then \(n-1=7\) and \(n=8\).`,
        S`<b>Sum.</b> \(S_8=\frac{2(3^8-1)}{3-1}=\frac{2(6560)}2=6560\).`,
        S`<b>Check.</b> \(S_8=\frac{rt_8-a}{r-1}=\frac{3(4374)-2}2=\frac{13\,120}2=6560\) ✓`],
      "6560",
      plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 7000 }, points: [1, 2, 3, 4, 5, 6, 7].map((n) => ({ x: n, y: 3 ** n - 1 })).concat([{ x: 8, y: 6560, label: "(8, 6560)", color: "amber" }]), step: { x: 1, y: 1000 }, xlabel: "n", ylabel: "Sₙ" })],
    ["A calling tree", "A coach calls 3 players; each of them calls 3 more, and so on for 5 levels (the coach is level 1). How many people are on the tree?",
      [S`<b>Model.</b> Each level has 3 times as many people as the one above: \(1,3,9,27,81\).`,
        S`<b>Identify.</b> \(a=1\), \(r=3\), \(n=5\).`,
        S`<b>Sum.</b> \(S_5=\frac{1(3^5-1)}{3-1}=\frac{242}2=121\).`,
        S`<b>Check by adding.</b> \(1+3+9+27+81=121\) ✓`],
      "121 people",
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 130 }, points: [1, 2, 3, 4, 5].map((n) => ({ x: n, y: (3 ** n - 1) / 2, label: String((3 ** n - 1) / 2) })), step: { x: 1, y: 20 }, xlabel: "levels", ylabel: "people so far" })],
    ["An alternating series", S`Find \(5-10+20-\cdots\) to 8 terms.`,
      [S`<b>Identify.</b> \(a=5\), \(r=\frac{-10}5=-2\), \(n=8\).`,
        S`<b>Substitute.</b> Use brackets for the negative ratio: \(S_8=\frac{5\left((-2)^8-1\right)}{-2-1}\).`,
        S`<b>Evaluate the power.</b> \((-2)^8=256\), an even power, so positive.`,
        S`<b>Finish.</b> \(\frac{5(255)}{-3}=\frac{1275}{-3}=-425\).`,
        S`<b>Check by pairs.</b> \((5-10)+(20-40)+(80-160)+(320-640)=-5-20-80-320=-425\) ✓`],
      S`\(-425\)`,
      plane({ view: { xmin: 0, xmax: 9, ymin: -500, ymax: 300 }, points: [1, 2, 3, 4, 5, 6, 7].map((n) => ({ x: n, y: (5 * ((-2) ** n - 1)) / -3 })).concat([{ x: 8, y: -425, label: "(8, −425)", color: "amber" }]), step: { x: 1, y: 100 }, xlabel: "n", ylabel: "Sₙ" })],
  ]),

  practice([
    q("sum", S`Find \(S_5\) for \(1+4+16+\cdots\)`, num(341),
      "(4⁵ − 1)/3.", [S`\(1023\div3\).`], S`\(341\)`),
    q("alternating", S`Find \(S_6\) for \(2-6+18-\cdots\)`, num(-364),
      "r = −3.", [S`\(\frac{2(729-1)}{-4}\).`], S`\(-364\)`),
    q("powers of 2", S`Find \(1+2+4+\cdots+512\).`, num(1023),
      "10 terms.", [S`\(2^{10}-1\).`], S`\(1023\)`),
    q("shrinking", S`Find \(81+27+9+3\).`, num(120),
      "Add, or use the formula.", [S`\(\frac{81(1-(1/3)^4)}{2/3}\).`], S`\(120\)`),
    q("formula", "Which formula gives the sum of n terms of a geometric series (r ≠ 1)?", choice([S`\(S_n=\frac{a(r^n-1)}{r-1}\)`, S`\(S_n=\frac n2(a+t_n)\)`, S`\(S_n=ar^{n-1}\)`, S`\(S_n=\frac{a(r-1)}{r^n-1}\)`], 0),
      "Multiply by r and subtract.", ["Derivation above."], S`\(\frac{a(r^n-1)}{r-1}\)`),
  ]),

  ...hard([
    ["Total distance of a bouncing ball", "A ball is dropped from 10 m and each bounce reaches 75% of the previous height. How far has it travelled when it hits the ground for the 6th time?",
      [S`Down 10 m, then up and down each bounce: \(10+2(7.5+5.625+\cdots)\), 5 bounces.`, S`\(10+2\cdot\frac{7.5(1-0.75^5)}{0.25}\).`],
      S`\(\approx${f(ball)}\) m`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 11 }, segs: [{ pts: [[0, 10], [1, 0], [1.5, 7.5], [2, 0], [2.5, 5.625], [3, 0], [3.5, 4.219], [4, 0], [4.5, 3.164], [5, 0], [5.5, 2.373], [6, 0]], color: "violet" }], step: { x: 1, y: 1 }, xlabel: "bounce", ylabel: "height (m)" })],
    ["Reaching a total", "How many terms of 3 + 6 + 12 + … are needed for the sum to reach at least 3000?",
      [S`\(3(2^n-1)\ge3000\Rightarrow2^n\ge1001\).`, S`\(2^9=512\), \(2^{10}=1024\).`],
      S`\(n=10\)`],
  ], [
    q("hard", S`How many terms of \(1+3+9+\cdots\) add to 3280?`, num(8),
      "(3ⁿ − 1)/2 = 3280.", [S`\(3^n=6561=3^8\).`], S`\(8\)`),
    q("hard", S`A geometric series with \(r>0\) has \(t_1=6\) and \(S_3=78\). Find \(r\).`, num(3),
      "6(1 + r + r²) = 78.", [S`\(r^2+r-12=0\).`], S`\(3\)`),
    q("hard", "The partial sums of 8 + 4 + 2 + 1 + … approach what value?", num(16),
      "a/(1 − r).", [S`\(\frac8{1-\frac12}\).`], S`\(16\)`),
  ]),

  wrapUp({
    qas: [
      ["Why multiply by r?", "It shifts every term one place, so subtracting cancels all but the first and the last."],
      ["Which form of the formula should I use?", "a(rⁿ − 1)/(r − 1) for r > 1; a(1 − rⁿ)/(1 − r) for r < 1 — they are equal."],
      ["What if r = 1?", "Every term is a, so Sₙ = n·a."],
      ["How do I find n?", "Solve tₙ = last term first, or solve Sₙ = total with powers."],
      ["Do shrinking series have a limit?", "Yes: when |r| < 1 the partial sums approach a/(1 − r)."],
    ],
    summary: [
      "Sₙ = a(rⁿ − 1)/(r − 1), r ≠ 1.",
      "Count the terms first.",
      "Bracket negative ratios.",
      "|r| < 1: sums level off near a/(1 − r).",
    ],
    next: "7.7 explores Pascal's triangle and binomial expansions.",
  }),
];
