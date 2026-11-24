// MCV4U 1.3 — Limits: notation, numerical and graphical limits, one-sided limits, limits at a removable
// discontinuity, infinite limits, limits at infinity, and limits of sequences ((1 + 1/n)^n, Fibonacci ratios)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

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
      [S`<b>Try substitution first.</b> At \(x=3\): \(\frac{9-9}{3-3}=\frac00\). This is <em>indeterminate</em>: it tells us nothing yet, so we must simplify.`,
        S`<b>Factor.</b> \(x^2-9=(x-3)(x+3)\), a difference of squares.`,
        S`<b>Cancel.</b> For \(x\ne3\), \(\dfrac{(x-3)(x+3)}{x-3}=x+3\). A limit only uses values <em>near</em> 3, never at 3, so cancelling is allowed.`,
        S`<b>Evaluate.</b> \(\displaystyle\lim_{x\to3}(x+3)=6\).`,
        S`<b>Check with a table.</b> ${tv(["\\(x\\)", "2.9", "2.99", "3", "3.01", "3.1"], ["\\(\\frac{x^2-9}{x-3}\\)", "5.9", "5.99", "not defined", "6.01", "6.1"])} Both sides approach 6 ✓. The graph is the line \(y=x+3\) with a hole at \((3,6)\).`],
      S`\(6\)`,
      plane({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 10 }, curves: [{ f: (x) => x + 3, a: -1, b: 2.95, color: "violet", label: "y = (x² − 9)/(x − 3)" }, { f: (x) => x + 3, a: 3.05, b: 6, color: "violet" }], points: [{ x: 3, y: 6, label: "hole (3, 6)", color: "amber", open: true }], step: { x: 1, y: 1 } })],
    ["One-sided limits", S`\(f(x)=x^2\) for \(x\lt2\) and \(f(x)=x+1\) for \(x\ge2\). Find the one-sided limits at 2. Does \(\displaystyle\lim_{x\to2}f(x)\) exist?`,
      [S`<b>Rule.</b> \(\lim_{x\to a}f(x)\) exists only when the left-hand and right-hand limits both exist and are equal.`,
        S`<b>Left of 2.</b> For \(x\lt2\) the formula is \(x^2\), so \(\displaystyle\lim_{x\to2^-}f(x)=2^2=4\).`,
        S`<b>Right of 2.</b> For \(x\ge2\) the formula is \(x+1\), so \(\displaystyle\lim_{x\to2^+}f(x)=2+1=3\).`,
        S`<b>Compare.</b> \(4\ne3\): the two pieces approach different heights. The graph has a jump at \(x=2\).`,
        S`<b>Check with values.</b> \(f(1.99)=3.9601\) is near 4; \(f(2.01)=3.01\) is near 3 ✓. Note that \(f(2)=3\) exists, but a function value is not the same as a limit.`],
      S`left 4, right 3: the limit does not exist`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x * x, a: -1, b: 1.98, color: "violet", label: "y = x²" }, { f: (x) => x + 1, a: 2, b: 4, color: "green", label: "y = x + 1" }], points: [{ x: 2, y: 4, label: "(2, 4) open", color: "amber", open: true }, { x: 2, y: 3, label: "(2, 3)", color: "red" }], step: { x: 1, y: 1 } })],
    ["An infinite limit", S`Describe \(\displaystyle\lim_{x\to0}\dfrac1{x^2}\).`,
      [S`<b>Substitution fails.</b> \(\frac10\) is not a number, but unlike \(\frac00\) it signals that the values blow up. We look at the signs and sizes.`,
        S`<b>Table from both sides.</b> ${tv(["\\(x\\)", "±0.5", "±0.1", "±0.01", "±0.001"], ["\\(\\frac1{x^2}\\)", "4", "100", "10 000", "1 000 000"])}`,
        S`<b>Reason.</b> \(x^2\) is positive and tiny when \(x\) is near 0, and dividing 1 by a tiny positive number gives a huge positive number. Halving \(x\) makes \(\frac1{x^2}\) four times bigger.`,
        S`<b>Conclusion.</b> The values grow without bound from both sides. We write \(\lim_{x\to0}\frac1{x^2}=\infty\). This is a way of saying <em>how</em> the limit fails to exist; \(\infty\) is not a number.`,
        S`<b>Graph.</b> The line \(x=0\) is a vertical asymptote, and both branches rise along it ✓`],
      S`\(\lim_{x\to0}\frac1{x^2}=\infty\): does not exist; vertical asymptote \(x=0\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 1 / (x * x), a: -3, b: -0.31, color: "violet" }, { f: (x) => 1 / (x * x), a: 0.31, b: 3, color: "violet", label: "y = 1/x²" }], points: [{ x: 0.5, y: 4, label: "(0.5, 4)", color: "red" }, { x: -0.5, y: 4, color: "red" }], step: { x: 1, y: 1 } })],
    ["A limit at infinity", S`Find \(\displaystyle\lim_{x\to\infty}\dfrac{2x+1}{x-3}\).`,
      [S`<b>Idea.</b> For huge \(x\), the \(+1\) and \(-3\) barely matter, so the fraction should behave like \(\frac{2x}{x}=2\). To make this precise, divide every term by the highest power of \(x\) in the denominator.`,
        S`<b>Divide by \(x\).</b> \(\dfrac{2x+1}{x-3}=\dfrac{2+\frac1x}{1-\frac3x}\).`,
        S`<b>Use \(\frac{c}{x}\to0\).</b> As \(x\to\infty\), \(\frac1x\to0\) and \(\frac3x\to0\), so the expression approaches \(\dfrac{2+0}{1-0}=2\).`,
        S`<b>Check with values.</b> ${tv(["\\(x\\)", "10", "100", "1000"], ["\\(\\frac{2x+1}{x-3}\\)", "3", "2.0722…", "2.0070…"])} The values approach 2 from above ✓`,
        S`<b>Graph.</b> The line \(y=2\) is a horizontal asymptote. (There is also a vertical asymptote at \(x=3\), where the denominator is 0.)`],
      S`\(2\): the horizontal asymptote \(y=2\)`,
      plane({ view: { xmin: -6, xmax: 20, ymin: -6, ymax: 10 }, curves: [{ f: (x) => (2 * x + 1) / (x - 3), a: -6, b: 2.3, color: "violet" }, { f: (x) => (2 * x + 1) / (x - 3), a: 3.8, b: 20, color: "violet", label: "y = (2x + 1)/(x − 3)" }], lines: [{ m: 0, b: 2, color: "red", dash: true, label: "y = 2", lx: 16 }], vlines: [{ x: 3, color: "red", dash: true, label: "x = 3" }], step: { x: 2, y: 2 } })],
    ["The limit of a sequence", S`Estimate the limit of \(t_n=\left(1+\frac1n\right)^n\).`,
      [S`<b>Why it is interesting.</b> Two effects compete: the base \(1+\frac1n\) shrinks toward 1 (which would pull the power toward 1), while the exponent \(n\) grows (which would push it up). Neither wins outright.`,
        S`<b>Compute terms.</b> ${tv(["\\(n\\)", "1", "10", "100", "1000", "10 000"], ["\\(t_n\\)", "2", "2.5937", "2.7048", "2.7169", "2.7181"])}`,
        S`<b>Read the trend.</b> The terms increase, but by less each time: the gains are 0.59, 0.11, 0.012, 0.0012. They level off near 2.718.`,
        S`<b>Name the limit.</b> This limit is the number \(e\approx2.71828\), the base of natural logarithms (chapter 5).`,
        S`<b>Check.</b> \(t_{10\,000}\approx2.7181\) differs from \(e\) by about 0.0001 ✓. The graph shows the dots approaching the dashed line \(y=e\).`],
      S`the terms approach \(e\approx2.718\)`,
      plane({ view: { xmin: 0, xmax: 21, ymin: 1.8, ymax: 2.9 }, points: Array.from({ length: 20 }, (_, i) => ({ x: i + 1, y: (1 + 1 / (i + 1)) ** (i + 1), color: "blue" })), lines: [{ m: 0, b: Math.E, color: "red", dash: true, label: "y = e ≈ 2.718", lx: 14 }], step: { x: 2, y: 0.1 }, xlabel: "n", ylabel: "tₙ" }, "tₙ = (1 + 1/n)ⁿ for n = 1 to 20")],
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
