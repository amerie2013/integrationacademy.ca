// IB AA SL 14.4 — Inverse Normal and Standardisation: finding a boundary from a probability, finding an unknown mean or standard deviation with z, solving for both, symmetric intervals and quality-control problems
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, normalDoc, invPhi } from "./figs14.mjs";

export const TITLE = "14.4 Inverse Normal and Standardisation";
export const ID = "1baa0014-0001-4001-8001-000000001404";
const S = String.raw;
const r = (v, d = 2) => Math.round(v * 10 ** d) / 10 ** d;
const z90 = invPhi(0.9), z95 = invPhi(0.95), z85 = invPhi(0.85), z80 = invPhi(0.8), z10 = invPhi(0.1);
const sBoth = 30 / (z95 - z10), mBoth = 40 - z10 * sBoth;

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Inverse Normal and Standardisation",
    overview: S`So far we found probabilities from values. Often the question runs the other way: what score puts a student in the top 10%? What mean fill keeps underfilled bottles below 1%? The inverse normal function turns a probability into a boundary value. When μ or σ is unknown, standardising — \(z=\frac{x-\mu}{\sigma}\) — turns the information into equations that can be solved.`,
    goals: [
      "find a value x given a probability, using the inverse normal;",
      S`find z-values for a given probability from \(Z\sim N(0,1)\);`,
      "find an unknown mean or standard deviation;",
      "solve simultaneous equations to find both μ and σ;",
      "find symmetric intervals and quality-control limits.",
    ],
    curriculum: "SL 4.9 (inverse normal calculations), SL 4.12 (standardisation; finding an unknown mean or standard deviation)",
    prior: [
      [S`\(X\sim N(60,5^2)\). Find the z-score of 70.`, S`\(2\).`],
      [S`Solve \(\mu+2\sigma=30\), \(\mu-\sigma=18\).`, S`\(\sigma=4\), \(\mu=22\).`],
      [S`If \(P(X>a)=0.1\), what is \(P(X<a)\)?`, S`\(0.9\).`],
    ],
    words: [
      ["Inverse normal", "given the area to the left, return the boundary value", ""],
      ["Left-tail area", S`the probability \(P(X<x)\) that technology expects`, ""],
      ["Critical z-value", S`the z with a given area, e.g. \(P(Z<1.645)=0.95\)`, ""],
      ["Standardising", S`\(x=\mu+z\sigma\)`, ""],
      ["Symmetric interval", S`\(\mu\pm k\) containing a given central probability`, ""],
    ],
  }),

  section("📌 From probability to value", S`
  <p>IQ scores are \(N(100,15^2)\). The score with 90% below it satisfies \(P(X<x)=0.9\): inverse normal gives \(x\approx${r(100 + z90 * 15)}\). Equivalently \(z=${r(z90, 4)}\) and \(x=\mu+z\sigma\).</p>
  ${fig(normalDoc(100, 15, [{ a: -Infinity, b: 100 + z90 * 15, color: "green" }], { lines: [100 + z90 * 15] }), `P(X < x) = 0.9 gives x ≈ ${r(100 + z90 * 15)}`)}
  <p>For an upper tail, convert first: the top 5% of \(N(70,8^2)\) starts where \(P(X<x)=0.95\), so \(x\approx${r(70 + z95 * 8)}\).</p>
  ${fig(normalDoc(70, 8, [{ a: 70 + z95 * 8, b: Infinity, color: "amber" }], { lines: [70 + z95 * 8] }), `Top 5% of N(70, 8²): x ≈ ${r(70 + z95 * 8)}`)}
  ${table(["Area to the left", "z"], [["0.90", r(z90, 4)], ["0.95", r(z95, 4)], ["0.975", r(invPhi(0.975), 4)], ["0.99", r(invPhi(0.99), 4)]])}
  ${keyIdea(S`Inverse normal needs the area to the LEFT. For a right tail, use \(1-p\).`)}`),

  section("📌 Finding μ and σ", S`
  <p>If μ or σ is unknown, use \(z=\frac{x-\mu}{\sigma}\) with z from the standard normal. Example: \(X\sim N(50,\sigma^2)\) and \(P(X<58)=0.85\). Then \(z=${r(z85, 4)}\) and \(\frac{58-50}{\sigma}=${r(z85, 4)}\), so \(\sigma\approx${r(8 / z85, 3)}\).</p>
  ${fig(normalDoc(50, 8 / z85, [{ a: -Infinity, b: 58, color: "green" }], { lines: [58] }), "P(X < 58) = 0.85 fixes σ ≈ 7.72")}
  <p>Two pieces of information give two equations: \(\mu+z_1\sigma=x_1\) and \(\mu+z_2\sigma=x_2\).</p>
  ${fig(normalDoc(mBoth, sBoth, [{ a: -Infinity, b: 40, color: "red" }, { a: 70, b: Infinity, color: "red" }], { lines: [40, 70] }), `P(X < 40) = 0.1 and P(X > 70) = 0.05 give μ ≈ ${r(mBoth)}, σ ≈ ${r(sBoth, 3)}`)}
  ${watchOut([
    "Use the area to the left in the inverse normal.",
    "z is negative for values below the mean — keep the sign.",
    "Write each condition as μ + zσ = x before solving.",
    "Check the answer: does the new distribution give the original probability?",
  ])}`),

  section("📌 Explore", S`<p>Set μ, σ and a probability. Switch between left and right tails and watch the boundary value move.</p>`),

  widget("ibInverseNormal", { init: [100, 15, 0.9, 0] }),

  examples([
    ["Level 1 · Percentile", S`\(X\sim N(100,15^2)\). Find x such that \(P(X<x)=0.9\).`,
      [S`Inverse normal(0.9, 100, 15).`],
      S`\(x\approx${r(100 + z90 * 15)}\)`],
    ["Level 1 · Top 5%", S`Scores are \(N(70,8^2)\). Find the minimum score for the top 5%.`,
      [S`\(P(X<x)=0.95\).`],
      S`\(x\approx${r(70 + z95 * 8)}\)`],
    ["Level 2 · Unknown σ", S`\(X\sim N(50,\sigma^2)\) and \(P(X<58)=0.85\). Find σ.`,
      [S`\(z=${r(z85, 4)}\); \(\sigma=\frac{8}{${r(z85, 4)}}\).`],
      S`\(\sigma\approx${r(8 / z85, 3)}\)`],
    ["Level 2 · Unknown μ", S`\(X\sim N(\mu,4^2)\) and \(P(X>30)=0.2\). Find μ.`,
      [S`\(P(X<30)=0.8\Rightarrow z=${r(z80, 4)}\).`, S`\(\mu=30-${r(z80, 4)}(4)\).`],
      S`\(\mu\approx${r(30 - z80 * 4)}\)`],
    ["Level 3 · Both unknown", S`\(P(X<40)=0.1\) and \(P(X>70)=0.05\) for \(X\sim N(\mu,\sigma^2)\). Find μ and σ.`,
      [S`\(\mu${r(z10, 4)}\sigma=40\) and \(\mu+${r(z95, 4)}\sigma=70\).`, S`Subtract: \(${r(z95 - z10, 4)}\sigma=30\).`],
      S`\(\sigma\approx${r(sBoth, 3)}\), \(\mu\approx${r(mBoth)}\)`],
  ]),

  practice([
    q("Level 1 · critical z", S`Find z with \(P(Z<z)=0.95\) (3 d.p.).`, num(r(z95, 3), 0.001),
      "Inverse normal for N(0, 1).", ["1.645."], S`\(1.645\)`),
    q("Level 1 · median", S`Find z with \(P(Z<z)=0.5\).`, num(0, 0.001),
      "Symmetry.", ["The mean."], S`\(0\)`),
    q("Level 2 · lower value", S`\(X\sim N(60,5^2)\). Find x with \(P(X<x)=0.3\) (2 d.p.).`, num(r(60 + invPhi(0.3) * 5), 0.01),
      "Below the mean.", [S`\(z\approx${r(invPhi(0.3), 4)}\).`], S`\(${r(60 + invPhi(0.3) * 5)}\)`),
    q("Level 2 · quartiles", "The middle 50% of a normal distribution lies within:", choice([S`\(\mu\pm0.674\sigma\)`, S`\(\mu\pm\sigma\)`, S`\(\mu\pm0.5\sigma\)`, S`\(\mu\pm1.15\sigma\)`], 0),
      "P(Z < z) = 0.75.", ["z ≈ 0.674."], S`\(\mu\pm0.674\sigma\)`),
    q("Level 2 · unknown mean", S`\(X\sim N(\mu,3^2)\) and \(P(X<20)=0.75\). Find μ (2 d.p.).`, num(r(20 - invPhi(0.75) * 3), 0.01),
      "z ≈ 0.6745.", [S`\(\mu=20-0.6745(3)\).`], S`\(${r(20 - invPhi(0.75) * 3)}\)`),
  ]),

  ...hard([
    ["A symmetric interval", S`\(X\sim N(30,5^2)\). Find k such that \(P(30-k<X<30+k)=0.8\).`,
      [S`Each tail has area 0.1, so \(P(X<30+k)=0.9\).`, S`\(\frac{k}{5}=${r(z90, 4)}\Rightarrow k=${r(z90 * 5, 3)}\).`],
      S`\(k\approx${r(z90 * 5, 3)}\)`,
      fig(normalDoc(30, 5, [{ a: 30 - z90 * 5, b: 30 + z90 * 5, color: "green" }], { lines: [30 - z90 * 5, 30 + z90 * 5] }), "The central 80% of N(30, 5²)")],
    ["Setting a machine", S`Bottles are filled with volume \(N(\mu,2^2)\) ml. Find the smallest μ so that at most 1% contain less than 500 ml.`,
      [S`\(P(X<500)=0.01\Rightarrow z=${r(invPhi(0.01), 4)}\).`, S`\(\mu=500-(${r(invPhi(0.01), 4)})(2)\).`],
      S`\(\mu\approx${r(500 - invPhi(0.01) * 2)}\) ml`,
      fig(normalDoc(500 - invPhi(0.01) * 2, 2, [{ a: -Infinity, b: 500, color: "red" }], { lines: [500] }), "Only 1% of bottles fall below 500 ml")],
  ], [
    q("Level 3 · both from two percentiles", S`\(P(X<20)=0.3\) and \(P(X<30)=0.8\) for \(X\sim N(\mu,\sigma^2)\). Find σ (3 d.p.).`, num(r(10 / (invPhi(0.8) - invPhi(0.3)), 3), 0.002),
      "Subtract the two equations.", [S`\(\sigma=\frac{10}{${r(invPhi(0.8), 4)}-(${r(invPhi(0.3), 4)})}\).`], S`\(${r(10 / (invPhi(0.8) - invPhi(0.3)), 3)}\)`),
    q("Level 3 · interquartile range", S`Find the interquartile range of \(N(80,10^2)\) (2 d.p.).`, num(r(2 * invPhi(0.75) * 10), 0.01),
      "Q3 − Q1 = 2(0.6745)σ.", [S`\(2(0.6745)(10)\).`], S`\(${r(2 * invPhi(0.75) * 10)}\)`),
    q("Level 3 · grade boundary", S`Marks are \(N(65,12^2)\) and the top 15% get an A. Find the lowest A mark (2 d.p.).`, num(r(65 + z85 * 12), 0.01),
      "P(X < x) = 0.85.", [S`\(65+${r(z85, 4)}(12)\).`], S`\(${r(65 + z85 * 12)}\)`),
  ]),

  wrapUp({
    qas: [
      ["What does the inverse normal give?", "The value x with a given area to its left."],
      ["What about a right-tail probability?", "Use 1 − p as the left area."],
      ["How do I find an unknown σ?", "Find z from the probability, then σ = (x − μ)/z."],
      ["And both μ and σ?", "Write μ + z₁σ = x₁ and μ + z₂σ = x₂ and solve."],
      ["How do I find a symmetric interval?", "Split the leftover probability equally into two tails."],
    ],
    summary: [
      "Inverse normal uses the left area.",
      "x = μ + zσ.",
      "Two conditions → two equations.",
      "Check by recomputing the probability.",
    ],
    next: "14.5 reviews the chapter.",
  }),
];
