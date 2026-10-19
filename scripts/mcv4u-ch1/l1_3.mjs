// MCV4U 1.3 — Limits: notation, numerical and graphical limits, one-sided limits, limits at a removable
// discontinuity, infinite limits, limits at infinity, and limits of sequences ((1 + 1/n)^n, Fibonacci ratios)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "1.3 Limits";
export const ID = "e1e6a05f-7871-4aaf-8218-fead1881b090";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Limits",
    overview: S`A <strong>limit</strong> describes the value a function approaches as its input approaches a number — even if the function never reaches it, or is not defined there. We write \(\displaystyle\lim_{x\to a}f(x)=L\). Limits can be read from tables and graphs, approached from one side at a time, can fail to exist, can describe behaviour near a vertical asymptote or far out along the x-axis, and can describe where a sequence of numbers is heading. They are the tool that turns secant slopes into tangent slopes.`,
    goals: [
      "read and estimate limits from tables and graphs;",
      "find one-sided limits and decide whether a limit exists;",
      "evaluate limits at a hole by factoring;",
      "describe infinite limits and limits at infinity;",
      "estimate the limit of a sequence.",
    ],
    curriculum: "A1.4 (recognize graphical and numerical examples of limits and explain the reasoning: a function approaching an asymptote, ratios of successive Fibonacci terms, (1 + 1/n)ⁿ)",
    prior: [
      [S`Factor \(x^2-9\).`, S`\((x-3)(x+3)\).`],
      [S`Horizontal asymptote of \(\frac{2x+1}{x-3}\)?`, S`\(y=2\).`],
      [S`What is \(\frac1{0.001}\)?`, S`\(1000\).`],
    ],
    words: [
      ["Limit", "\\(\\lim_{x\\to a}f(x)=L\\): f(x) gets as close to L as we like for x close to a", ""],
      ["One-sided limits", "\\(x\\to a^-\\) from the left, \\(x\\to a^+\\) from the right", ""],
      ["Does not exist (DNE)", "the two sides disagree, or f grows without bound", ""],
      ["Limit at infinity", "\\(\\lim_{x\\to\\infty}f(x)\\): long-run value (horizontal asymptote)", ""],
    ],
  }),

  section("📌 What a limit says", S`
  ${plane({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 10 }, curves: [{ f: (x) => x + 3, a: -1, b: 2.97, color: "violet" }, { f: (x) => x + 3, a: 3.03, b: 6, color: "violet" }], points: [{ x: 3, y: 6, label: "limit 6 (hole)", color: "red" }], step: { x: 1, y: 1 } }, "y = (x² − 9)/(x − 3) equals x + 3 except at x = 3, where it has no value; the limit as x → 3 is still 6.")}
  ${table(["Situation", "Left limit", "Right limit", "Limit"], [
    ["both sides approach L", "L", "L", "L"],
    ["sides approach different values (jump)", "L₁", "L₂", "does not exist"],
    ["f grows without bound (asymptote)", "±∞", "±∞", "does not exist (write ∞ to describe it)"],
    ["x → ∞", "—", "—", "the horizontal asymptote, if any"],
  ])}
  ${keyIdea(S`\(\displaystyle\lim_{x\to a}f(x)\) exists exactly when both one-sided limits exist and are equal. The value \(f(a)\) itself does not matter for the limit — only the values near \(a\).`)}`),

  section("📌 Explore", S`<p>Switch between the cases. The red points approach \(a\) from the left, the blue points from the right; the table shows their values getting closer to \(a\).</p>`),

  widget("limitExplorer", { init: { kase: "jump" } }),

  section("📌 Limits of sequences", S`
  <p>A sequence also has a limit if its terms settle on a value: \(\left(1+\frac1n\right)^n\) climbs toward \(e\approx2.71828\), and ratios of consecutive Fibonacci numbers approach \(\frac{1+\sqrt5}2\approx1.618\).</p>
  ${watchOut([
    "The limit is about values NEAR a, not AT a: a hole doesn't stop a limit from existing.",
    "Check both sides; one side alone is not the limit.",
    "∞ is not a number: lim = ∞ means the limit does not exist because f grows without bound.",
    "Substituting a and getting 0/0 means 'more work needed' — usually factor and cancel.",
    "A table can mislead if you only use one side or too few values.",
  ])}`),

  examples([
    ["A hole", S`Find \(\displaystyle\lim_{x\to3}\dfrac{x^2-9}{x-3}\).`,
      [S`Direct substitution gives \(\frac00\).`, S`\(\frac{(x-3)(x+3)}{x-3}=x+3\) for \(x\ne3\); as \(x\to3\), \(x+3\to6\).`, S`Table: \(x=2.99\): \(5.99\); \(x=3.01\): \(6.01\).`],
      S`\(6\)`],
    ["One-sided limits", S`\(f(x)=x^2\) for \(x\lt2\) and \(f(x)=x+1\) for \(x\ge2\). Find the one-sided limits at 2. Does \(\displaystyle\lim_{x\to2}f(x)\) exist?`,
      [S`Left: \(x^2\to4\). Right: \(x+1\to3\).`, S`\(4\ne3\).`],
      S`left 4, right 3: the limit does not exist`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x * x, a: -1, b: 1.98, color: "violet" }, { f: (x) => x + 1, a: 2, b: 4, color: "violet" }], points: [{ x: 2, y: 4, label: "(2, 4) open", color: "amber", open: true }, { x: 2, y: 3, label: "(2, 3)", color: "red" }], step: { x: 1, y: 1 } })],
    ["An infinite limit", S`Describe \(\displaystyle\lim_{x\to0}\dfrac1{x^2}\).`,
      [S`\(x=\pm0.1\): 100; \(x=\pm0.01\): 10 000. The values grow without bound from both sides.`],
      S`\(\lim_{x\to0}\frac1{x^2}=\infty\): does not exist; vertical asymptote \(x=0\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 1 / (x * x), a: -3, b: -0.31, color: "violet" }, { f: (x) => 1 / (x * x), a: 0.31, b: 3, color: "violet" }], step: { x: 1, y: 1 } })],
    ["A limit at infinity", S`Find \(\displaystyle\lim_{x\to\infty}\dfrac{2x+1}{x-3}\).`,
      [S`Divide by \(x\): \(\dfrac{2+\frac1x}{1-\frac3x}\to\dfrac{2+0}{1-0}\).`],
      S`\(2\): the horizontal asymptote \(y=2\)`,
      plane({ view: { xmin: -6, xmax: 20, ymin: -6, ymax: 10 }, curves: [{ f: (x) => (2 * x + 1) / (x - 3), a: -6, b: 2.3, color: "violet" }, { f: (x) => (2 * x + 1) / (x - 3), a: 3.8, b: 20, color: "violet" }], lines: [{ m: 0, b: 2, color: "red", dash: true }], vlines: [{ x: 3, color: "red", dash: true }], step: { x: 2, y: 2 } })],
    ["The limit of a sequence", S`Estimate the limit of \(t_n=\left(1+\frac1n\right)^n\).`,
      [S`\(t_1=2\), \(t_{10}\approx2.5937\), \(t_{100}\approx2.7048\), \(t_{1000}\approx2.7169\), \(t_{10\,000}\approx2.7181\).`],
      S`the terms approach \(e\approx2.718\)`,
      plane({ view: { xmin: 0, xmax: 21, ymin: 1.8, ymax: 2.9 }, points: Array.from({ length: 20 }, (_, i) => ({ x: i + 1, y: (1 + 1 / (i + 1)) ** (i + 1), color: "blue" })), lines: [{ m: 0, b: Math.E, color: "red", dash: true }], step: { x: 2, y: 0.1 }, xlabel: "n", ylabel: "tₙ" })],
  ]),

  practice([
    q("substitute", S`Find \(\displaystyle\lim_{x\to2}(x^2+3x)\).`, num(10),
      "A polynomial: substitute.", [S`\(4+6\).`], S`\(10\)`),
    q("hole", S`Find \(\displaystyle\lim_{x\to-1}\dfrac{x^2-1}{x+1}\).`, num(-2),
      "Factor and cancel.", [S`\(x-1\to-2\).`], S`\(-2\)`),
    q("one-sided", S`What is \(\displaystyle\lim_{x\to0}\dfrac{|x|}{x}\)?`, choice(["it does not exist", "0", "1", "−1"], 0),
      "Left gives −1, right gives 1.", ["The sides disagree."], "does not exist"),
    q("at infinity", S`Find \(\displaystyle\lim_{x\to\infty}\dfrac5x\).`, num(0),
      "Huge denominator.", [S`\(\frac5x\to0\).`], S`\(0\)`),
    q("hole", S`Find \(\displaystyle\lim_{x\to4}\dfrac{x-4}{x^2-16}\).`, num(0.125, 0.0001),
      "Factor the denominator.", [S`\(\frac1{x+4}\to\frac18\).`], S`\(0.125\)`),
  ]),

  ...hard([
    ["Fibonacci ratios", S`The Fibonacci sequence is 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, … Estimate the limit of the ratios \(\frac{t_{n+1}}{t_n}\) and find its exact value.`,
      [S`Ratios: 1, 2, 1.5, 1.667, 1.6, 1.625, 1.615, 1.619, 1.618, …`, S`If the ratios approach \(\varphi\), then \(\frac{t_{n+1}}{t_n}=1+\frac{t_{n-1}}{t_n}\) gives \(\varphi=1+\frac1\varphi\Rightarrow\varphi^2-\varphi-1=0\).`, S`\(\varphi=\frac{1+\sqrt5}2\approx1.618\) (positive root).`],
      S`\(\dfrac{1+\sqrt5}{2}\approx1.618\)`,
      plane({ view: { xmin: 0, xmax: 11, ymin: 0.8, ymax: 2.2 }, points: [1, 2, 1.5, 5 / 3, 1.6, 1.625, 13 / 8, 21 / 13, 34 / 21, 55 / 34].map((y, i) => ({ x: i + 1, y, color: "blue" })), lines: [{ m: 0, b: (1 + Math.sqrt(5)) / 2, color: "red", dash: true }], step: { x: 1, y: 0.2 }, xlabel: "n", ylabel: "ratio" })],
    ["Rationalize to find a limit", S`Find \(\displaystyle\lim_{x\to1}\dfrac{\sqrt x-1}{x-1}\).`,
      [S`Substituting gives \(\frac00\). Multiply by \(\frac{\sqrt x+1}{\sqrt x+1}\): \(\dfrac{x-1}{(x-1)(\sqrt x+1)}=\dfrac1{\sqrt x+1}\).`, S`As \(x\to1\): \(\frac12\).`],
      S`\(\tfrac12\)`],
  ], [
    q("hard", S`Find \(\displaystyle\lim_{h\to0}\dfrac{(3+h)^2-9}{h}\).`, num(6),
      "Expand and cancel h.", [S`\(\frac{6h+h^2}{h}=6+h\).`], S`\(6\)`),
    q("hard", S`Find \(\displaystyle\lim_{x\to\infty}\dfrac{3x^2-x}{x^2+4}\).`, num(3),
      "Divide by x².", [S`\(\frac{3-\frac1x}{1+\frac4{x^2}}\to3\).`], S`\(3\)`),
    q("hard", S`Find \(\displaystyle\lim_{x\to9}\dfrac{x-9}{\sqrt x-3}\).`, num(6),
      "x − 9 = (√x − 3)(√x + 3).", [S`\(\sqrt x+3\to6\).`], S`\(6\)`),
  ]),

  wrapUp({
    qas: [
      ["Does the limit depend on f(a)?", "No. The limit describes values near a; f(a) can be different or not exist at all."],
      ["When does a limit not exist?", "When the one-sided limits differ, when f grows without bound, or when f oscillates without settling."],
      ["What does 0/0 tell me?", "Nothing yet — it's an indeterminate form. Simplify (factor, rationalize) and try again."],
      ["How are limits at infinity related to asymptotes?", "If f(x) → L as x → ±∞, then y = L is a horizontal asymptote."],
      ["Why do we need limits for calculus?", "The tangent slope is the limit of secant slopes as h → 0 — exactly a limit of the form 0/0."],
    ],
    summary: [
      "lim x→a f(x): values near a, not at a.",
      "Limit exists ⇔ left = right.",
      "0/0: factor or rationalize.",
      "x → ∞ gives horizontal asymptotes; sequences can have limits too.",
    ],
    next: "1.4 connects limits with continuity and evaluates limits with limit laws.",
  }),
];
