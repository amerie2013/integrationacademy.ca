// MDM4U 4.4 — The Normal Approximation to the Binomial: binomial histograms becoming bell-shaped as n grows,
// conditions np ≥ 5 and nq ≥ 5, μ = np and σ = √(npq), the continuity correction, and applications
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, barsSvg, normalSvg } from "./lib.mjs";
import { r3, bin, binLE, tphi, phi } from "../mdm4u/count.mjs";

export const TITLE = "4.4 The Normal Approximation to the Binomial";
export const ID = "3901488c-d77a-4d44-aa88-c3fad0b237a0";
const S = String.raw;
const P = (z) => tphi(z);
const z2 = (v) => Math.round(v * 100) / 100;

// example: 200 reservations, 8% cancel; P(X ≥ 20)
const n1 = 200, p1 = 0.08, mu1 = n1 * p1, s1 = Math.sqrt(n1 * p1 * (1 - p1)), zc1 = z2((19.5 - mu1) / s1);

export const blocks = () => [
  intro({
    icon: "🌉",
    title: "The Normal Approximation to the Binomial",
    overview: S`As the number of trials grows, a binomial histogram becomes bell-shaped. When \(np\ge5\) and \(nq\ge5\), the binomial distribution is well approximated by a normal distribution with \[\mu=np,\qquad\sigma=\sqrt{npq}.\] Because the binomial is discrete and the normal is continuous, we use a <strong>continuity correction</strong>: each integer \(x\) is the bar from \(x-0.5\) to \(x+0.5\). The same idea links the hypergeometric distribution to the normal curve when the population is large.`,
    goals: [
      "describe how binomial histograms change as n increases;",
      "check the conditions np ≥ 5 and nq ≥ 5;",
      "find μ = np and σ = √(npq);",
      "apply the continuity correction to “at most”, “at least”, “exactly” and “between”;",
      "compare the approximation with the exact binomial probability.",
    ],
    curriculum: "B2.7 (make connections between the normal distribution and the binomial and hypergeometric distributions for increasing numbers of trials); B2.8 (solve normal probability problems)",
    prior: [
      ["Binomial n = 50, p = 0.3: E(X)?", "15."],
      ["Evaluate √(50 × 0.3 × 0.7).", "≈ 3.24."],
      ["P(Z < 1.2) from the table?", "0.8849."],
    ],
    words: [
      ["Normal approximation", "use N(np, npq) for a binomial", "n = 100, p = 0.5 → N(50, 25)"],
      ["Continuity correction", "widen each integer to an interval of width 1", "P(X ≤ 20) → P(X < 20.5)"],
      ["Conditions", "np ≥ 5 and nq ≥ 5", "100(0.08) = 8 ✓"],
      ["σ = √(npq)", "standard deviation of a binomial", "√(100·0.5·0.5) = 5"],
    ],
  }),

  section("📌 From bars to a bell", S`
  ${fig(barsSvg([0, 1, 2, 3, 4, 5].map((x) => bin(5, 0.3, x)), { labels: [0, 1, 2, 3, 4, 5], histogram: true, fmt: (v) => v.toFixed(2), xlabel: "n = 5, p = 0.3 (skewed)", ylabel: "P" }), "small n: clearly skewed")}
  ${fig(barsSvg(Array.from({ length: 31 }, (_, x) => bin(60, 0.3, x)), { labels: Array.from({ length: 31 }, (_, x) => (x % 5 ? "" : x)), histogram: true, bw: 12, fmt: (v) => v.toFixed(2), xlabel: "n = 60, p = 0.3 (bell-shaped, centred at 18)", ylabel: "P" }), "large n: nearly normal with μ = 18 and σ ≈ 3.55")}
  ${keyIdea(S`The total area of the bars is 1, just like the area under the normal curve, so areas of bars can be approximated by areas under the curve.`)}`),

  section("📌 The continuity correction", S`
  ${table(["Binomial event", "Normal interval"], [["\\(X\\le k\\)", "\\(X<k+0.5\\)"], ["\\(X<k\\)", "\\(X<k-0.5\\)"], ["\\(X\\ge k\\)", "\\(X>k-0.5\\)"], ["\\(X=k\\)", "\\(k-0.5<X<k+0.5\\)"], ["\\(a\\le X\\le b\\)", "\\(a-0.5<X<b+0.5\\)"]])}
  ${keyIdea(S`Ask “which bars do I want?” and include each whole bar from its left edge to its right edge.`)}`),

  section("📌 Explore", S`<p>Increase n and watch the bars approach the curve. Compare the exact P(X ≤ k) with the normal approximation; see what happens when np or nq is below 5.</p>`),

  widget("normalApprox", { init: [30, 0.4] }),

  section("📌 Watch out", watchOut([
    "Check np ≥ 5 and nq ≥ 5 before approximating.",
    "Use σ = √(npq), not npq.",
    "Never skip the continuity correction for a discrete count.",
    "With technology, the exact binomial is often easy — the approximation is most useful by hand or for very large n.",
  ])),

  examples([
    ["Parameters", "A fair coin is tossed 400 times. Find μ and σ for the number of heads, and check the conditions.",
      [S`\(\mu=400(0.5)=200\), \(\sigma=\sqrt{400(0.5)(0.5)}=10\).`, S`\(np=nq=200\ge5\) ✓.`],
      "μ = 200, σ = 10"],
    ["At most", "For the 400 tosses, approximate P(at most 215 heads).",
      [S`\(P(X<215.5)\): \(z=\frac{215.5-200}{10}=1.55\).`, S`\(P(Z<1.55)=${P(1.55)}\).`],
      `≈ ${P(1.55)}`,
      fig(normalSvg({ mu: 200, s: 10, shade: [[-Infinity, 215.5, "blue"]], marks: [[215.5, "215.5"]] }))],
    ["At least", "8% of hotel reservations are cancelled. With 200 reservations, approximate P(at least 20 cancellations).",
      [S`\(\mu=${mu1}\), \(\sigma=\sqrt{200(0.08)(0.92)}\approx${r3(s1, 2)}\).`, S`\(P(X>19.5)\): \(z\approx${zc1}\); \(1-${P(zc1)}=${r3(1 - P(zc1), 4)}\).`],
      `≈ ${r3(1 - P(zc1), 4)} (exact ${r3(1 - binLE(200, 0.08, 19), 4)})`],
    ["Exactly", "A multiple-choice test has 60 questions with 4 options; a student guesses. Approximate P(exactly 15 correct).",
      [S`\(\mu=15\), \(\sigma=\sqrt{60(0.25)(0.75)}\approx3.35\).`, S`\(P(14.5<X<15.5)\): \(z=\pm0.15\): \(${P(0.15)}-${P(-0.15)}\).`],
      `≈ ${r3(P(0.15) - P(-0.15), 4)} (exact ${r3(bin(60, 0.25, 15), 4)})`],
    ["Between", "A drug works for 70% of patients. In a trial of 150, approximate P(between 100 and 110 inclusive improve).",
      [S`\(\mu=105\), \(\sigma=\sqrt{150(0.7)(0.3)}\approx5.61\).`, S`\(P(99.5<X<110.5)\): \(z\approx\pm0.98\).`, S`\(${P(0.98)}-${P(-0.98)}\).`],
      `≈ ${r3(P(0.98) - P(-0.98), 4)}`],
  ]),

  practice([
    q("mu", "Binomial n = 120, p = 0.25. Find μ.", num(30), "np.", [S`\(30\).`], "30"),
    q("sigma", "Binomial n = 120, p = 0.25. Find σ (2 decimals).", num(r3(Math.sqrt(22.5), 2), 0.01), "√(npq).", [S`\(\sqrt{22.5}\).`], `${r3(Math.sqrt(22.5), 2)}`),
    q("cc", "With the continuity correction, P(X ≥ 40) becomes P(X > ?)", num(39.5), "Include the whole bar for 40.", [S`\(40-0.5\).`], "39.5"),
    q("conditions", "Which binomial can be approximated by a normal distribution?", choice(["n = 50, p = 0.4", "n = 20, p = 0.1", "n = 10, p = 0.5", "n = 40, p = 0.05"], 0), "np and nq at least 5.", ["50(0.4) = 20, 50(0.6) = 30."], "n = 50, p = 0.4"),
    q("approx", "n = 100, p = 0.5. Approximate P(X ≤ 55). (4 decimals)", num(P(1.1), 0.002), "z = (55.5 − 50)/5.", [S`\(P(Z<1.1)\).`], `${P(1.1)}`),
  ]),

  ...hard([
    ["Overbooking", "An airline sells 330 tickets for 315 seats; each passenger shows up with probability 0.94. Approximate P(more passengers show up than there are seats).",
      [S`\(\mu=330(0.94)=310.2\), \(\sigma=\sqrt{330(0.94)(0.06)}\approx${r3(Math.sqrt(330 * 0.94 * 0.06), 2)}\).`, S`\(P(X\ge316)=P(X>315.5)\): \(z\approx${z2((315.5 - 310.2) / Math.sqrt(330 * 0.94 * 0.06))}\).`, S`\(1-${P(z2((315.5 - 310.2) / Math.sqrt(330 * 0.94 * 0.06)))}\).`],
      `≈ ${r3(1 - P(z2((315.5 - 310.2) / Math.sqrt(330 * 0.94 * 0.06))), 4)}`],
    ["Is the coin fair?", "A coin lands heads 290 times in 500 tosses. If the coin were fair, how likely is 290 or more heads? What do you conclude?",
      [S`\(\mu=250\), \(\sigma=\sqrt{125}\approx11.18\).`, S`\(P(X>289.5)\): \(z\approx3.53\): probability about \(${r3(1 - phi(3.53), 4)}\).`, S`Such a result is extremely unlikely for a fair coin, so the coin is probably biased.`],
      "≈ 0.0002: very likely biased",
      fig(normalSvg({ mu: 250, s: Math.sqrt(125), shade: [[289.5, Infinity, "red"]], marks: [[289.5, "289.5"]] }))],
  ], [
    q("hard", "n = 80, p = 0.4. Approximate P(X = 32). (4 decimals)", num(r3(P(0.11) - P(-0.11), 4), 0.003), "μ = 32, σ ≈ 4.38; 31.5 to 32.5.", [S`\(z=\pm0.11\).`], `${r3(P(0.11) - P(-0.11), 4)}`),
    q("hard", "A survey claims 40% support. In a sample of 600, approximate P(fewer than 220 support). (4 decimals)", num(r3(P(z2((219.5 - 240) / Math.sqrt(144))), 4), 0.002), "μ = 240, σ = 12; X < 220 → X < 219.5.", [S`\(z\approx${z2((219.5 - 240) / 12)}\).`], `${r3(P(z2((219.5 - 240) / 12)), 4)}`),
    q("hard", "For which smallest n is the normal approximation allowed when p = 0.04 (np ≥ 5 and nq ≥ 5)?", num(125), "0.04n ≥ 5.", [S`\(n\ge125\).`], "125"),
  ]),

  wrapUp({
    qas: [
      ["Why does the binomial look normal for large n?", "The bars become many and narrow, and their shape smooths into a bell centred at np."],
      ["When is the approximation reasonable?", "When np ≥ 5 and nq ≥ 5."],
      ["Why add or subtract 0.5?", "Each integer value is a bar of width 1; the correction includes the whole bar."],
      ["How do I find the normal parameters?", "μ = np and σ = √(npq)."],
      ["Does it work for hypergeometric distributions?", "Yes, when the population is large and the sample moderate, since then it is nearly binomial."],
    ],
    summary: [
      "Conditions: np ≥ 5, nq ≥ 5.",
      "μ = np, σ = √(npq).",
      "Continuity correction ± 0.5.",
      "Large n: binomial ≈ normal.",
    ],
    next: "4.5 uses the normal distribution to estimate unknown proportions and means: confidence intervals.",
  }),
];
