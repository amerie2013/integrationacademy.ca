// MDM4U Worksheet 4.4 — The Normal Approximation to the Binomial (teacher edition)
import { svgT, barsSvg, normalSvg } from "./figT.mjs";
import { r3, bin, binLE, tphi } from "../../mdm4u/count.mjs";

const S = String.raw;
const P = (z) => tphi(z);
const zz = (v) => Math.round(v * 100) / 100;
const approx = (n, p, lo, hi) => { const m = n * p, s = Math.sqrt(n * p * (1 - p)); return r3(P(zz((hi + 0.5 - m) / s)) - P(zz((lo - 0.5 - m) / s)), 4); };

const EXAMPLES = [
  { title: "Shape", q: "Compare binomial histograms with p = 0.2 for n = 5 and n = 50.", fig: svgT(barsSvg(Array.from({ length: 21 }, (_, x) => bin(50, 0.2, x)), { labels: Array.from({ length: 21 }, (_, x) => (x % 5 ? "" : x)), histogram: true, bw: 14, fmt: (v) => v.toFixed(2) }), 5), steps: ["n = 5: skewed right.", "n = 50: nearly symmetric bell centred at 10."], ans: "approaches normal as n grows" },
  { title: "Conditions", q: "Can N(np, npq) approximate (a) n = 40, p = 0.1 (b) n = 200, p = 0.03 (c) n = 60, p = 0.5?", steps: ["(a) np = 4 < 5: no. (b) np = 6, nq = 194: yes. (c) yes."], ans: "no, yes, yes" },
  { title: "Parameters", q: "n = 200, p = 0.03: find μ and σ.", steps: [S`$\mu=6$; $\sigma=\sqrt{5.82}$.`], ans: `6; ${r3(Math.sqrt(5.82), 3)}` },
  { title: "Continuity correction table", q: "Rewrite with a continuity correction: X ≤ 8, X < 8, X ≥ 8, X = 8, 5 ≤ X ≤ 8.", steps: ["X < 8.5; X < 7.5; X > 7.5; 7.5 < X < 8.5; 4.5 < X < 8.5."], ans: "see steps" },
  { title: "At most", q: "A coin is tossed 100 times. Approximate P(at most 45 heads).", steps: [S`$\mu=50$, $\sigma=5$; $z=\frac{45.5-50}5=-0.9$.`], ans: `${P(-0.9)} (exact ${r3(binLE(100, 0.5, 45), 4)})` },
  { title: "At least", q: "8% of reservations are cancelled. With 10 reservations, find P(at least 4 cancel) exactly. Why not use the normal approximation?", steps: [S`Exact: $1-P(X\le3)$.`, "np = 0.8 < 5, so the normal approximation is poor."], ans: `${r3(1 - binLE(10, 0.08, 3), 4)}` },
  { title: "Exactly", q: "A die is rolled 180 times. Approximate P(exactly 30 sixes).", steps: [S`$\mu=30$, $\sigma=5$; $29.5<X<30.5$: $z=\pm0.1$.`], ans: `${r3(P(0.1) - P(-0.1), 4)} (exact ${r3(bin(180, 1 / 6, 30), 4)})` },
  { title: "Between", q: "40% of students bike to school. In a sample of 150, approximate P(between 55 and 65 inclusive bike).", fig: svgT(normalSvg({ mu: 60, s: 6, shade: [[54.5, 65.5, "blue"]] }), 4.2), steps: [S`$\mu=60$, $\sigma=6$; $54.5<X<65.5$: $z=\pm0.92$.`], ans: `${approx(150, 0.4, 55, 65)}` },
  { title: "Hypergeometric link", q: "A sample of 50 is chosen from 10 000 people, 30% of whom wear glasses. Which models can approximate the number wearing glasses?", steps: ["Hypergeometric (exact) ≈ binomial (n = 50, p = 0.3) ≈ normal N(15, 10.5)."], ans: "binomial and normal" },
];

const PROBLEMS = [
  { level: 1, q: "n = 80, p = 0.25. Check the conditions and find μ and σ.", ans: `μ = 20, σ = ${r3(Math.sqrt(15), 3)}` },
  { level: 1, q: "Apply the continuity correction: P(X > 30), P(X ≤ 22), P(X = 17).", ans: "P(X > 30.5), P(X < 22.5), P(16.5 < X < 17.5)" },
  { level: 1, q: "Explain why the continuity correction is needed.", ans: "each integer is a bar of width 1 in the binomial histogram" },
  { level: 2, q: "A fair coin is tossed 64 times. Approximate P(more than 38 heads).", ans: `${r3(1 - P(zz((38.5 - 32) / 4)), 4)}` },
  { level: 2, q: "25% of customers buy a drink. Of 200 customers, approximate P(fewer than 40 buy one).", ans: `${r3(P(zz((39.5 - 50) / Math.sqrt(37.5))), 4)}` },
  { level: 2, q: "A test has 50 four-choice questions. Approximate P(a guesser scores at least 18).", ans: `${r3(1 - P(zz((17.5 - 12.5) / Math.sqrt(9.375))), 4)}` },
  { level: 2, q: "n = 120, p = 0.6. Approximate P(65 ≤ X ≤ 80).", ans: `${approx(120, 0.6, 65, 80)}` },
  { level: 2, q: "Compare the exact and approximate P(X ≤ 12) for n = 30, p = 0.4 (use technology for the exact value).", ans: `exact ${r3(binLE(30, 0.4, 12), 4)}; approx ${r3(P(zz((12.5 - 12) / Math.sqrt(7.2))), 4)}` },
  { level: 3, space: 4.5, q: "An airline sells 210 tickets for 200 seats; P(show) = 0.92. Approximate P(more than 200 show up).", ans: `${r3(1 - P(zz((200.5 - 193.2) / Math.sqrt(210 * 0.92 * 0.08))), 4)}` },
  { level: 3, space: 4.5, q: "A coin lands heads 62 times in 100 tosses. If fair, approximate P(62 or more heads). Is the coin likely fair?", ans: `${r3(1 - P(zz((61.5 - 50) / 5)), 4)}: unlikely to be fair` },
  { level: 3, space: 4.5, q: "Find the smallest n such that the normal approximation is allowed for p = 0.02.", ans: "250" },
  { level: 3, space: 4.5, q: "15% of a large population is left-handed. In a school of 900, approximate the number of left-handers that is exceeded with probability only 5%.", ans: `μ = 135, σ ≈ ${r3(Math.sqrt(114.75), 2)}; 135 + 1.645σ ≈ ${r3(135 + 1.645 * Math.sqrt(114.75), 1)}` },
  { level: 3, space: 5, q: "Explain, using total areas, why the area of a binomial histogram over an interval can be estimated by the area under a normal curve.", ans: "both have total area 1; with many narrow bars the bar tops follow the curve closely" },
];

export const WS = {
  code: "4.4",
  title: "The Normal Approximation to the Binomial",
  bigideas: S`For large $n$ the binomial histogram is bell-shaped. When $np\ge5$ and $nq\ge5$, use $N(np,\ npq)$ with a continuity correction: each integer $x$ is the interval $x-0.5$ to $x+0.5$.`,
  goals: ["Check conditions.", "Find μ = np, σ = √(npq).", "Apply the continuity correction.", "Compare with exact values."],
  curriculum: "B2.7, B2.8",
  vocab: [["Continuity correction", "± 0.5"], ["$\\sqrt{npq}$", "binomial sd"]],
  hook: "Toss a coin 1000 times. Would 530 heads surprise you? How could you decide without computing 1000 binomial terms?",
  concepts: [
    ["1. Shape", "Large n, moderate p: bell-shaped bars."],
    ["2. Parameters", S`$\mu=np$, $\sigma=\sqrt{npq}$; conditions $np,nq\ge5$.`],
    ["3. Correction", S`${svgT(normalSvg({ mu: 10, s: 2, shade: [[-Infinity, 12.5, "blue"]], marks: [[12.5, "12.5"]] }), 3.6)}$P(X\le12)\approx P(X<12.5)$.`],
  ],
  tips: ["Check conditions first.", "σ is a square root.", "Include whole bars.", "Exact with technology when possible.", "Sketch the bars."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
