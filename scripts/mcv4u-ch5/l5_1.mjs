// MCV4U 5.1 — Rates of Change and the Number e (NEW lesson): slopes of b^x are proportional to b^x, the slope at 0,
// the base e (slope 1 at 0), e as the limit of (1 + 1/n)^n, (e^x)′ = e^x, and rates in exponential models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.1 Rates of Change and the Number e";
export const ID = "6d4fc005-0001-4001-8001-000000000501";

const S = String.raw;
const E = Math.E;
export const blocks = () => [
  intro({
    icon: "🌱",
    title: "Rates of Change and the Number e",
    overview: S`An exponential function \(y=b^x\) has a remarkable property: its slope at every point is a fixed multiple of its height. Doubling the height doubles the steepness. The multiplier is the slope at \(x=0\) — about 0.693 for \(2^x\) and 1.099 for \(3^x\). Somewhere between 2 and 3 there is a base whose slope at 0 is exactly 1. That base is the number \(e\approx2.71828\), and for it the slope equals the height everywhere: \(\dfrac{d}{dx}e^x=e^x\). The same number appears as the limit of \(\left(1+\frac1n\right)^n\) — the result of compounding interest continuously.`,
    goals: [
      "estimate instantaneous rates of change of exponential functions;",
      "explain why the slope of b^x is proportional to b^x;",
      "describe the number e in two ways;",
      "use the fact that (e^x)′ = e^x;",
      "find tangent lines and rates for exponential functions.",
    ],
    curriculum: "A2.2, A2.3 (determine, through investigation, that the rate of change of an exponential function is proportional to the function; identify e as the base whose rate of change equals the function)",
    prior: [
      [S`What is \(2^0\)?`, S`\(1\).`],
      [S`Simplify \(2^{x+h}\).`, S`\(2^x\cdot2^h\).`],
      [S`Difference quotient of \(f\) at \(x\)?`, S`\(\frac{f(x+h)-f(x)}{h}\).`],
    ],
    words: [
      ["Exponential function", "\\(y=b^x\\), \\(b\\gt0\\), \\(b\\ne1\\)", "\\(2^x\\), \\(e^x\\)"],
      ["The number e", "the base whose slope at 0 is 1", "\\(e\\approx2.71828\\)"],
      ["Natural exponential", "\\(y=e^x\\)", "\\((e^x)'=e^x\\)"],
      ["Proportional rate", "slope \\(=c\\times\\) height", "\\(c=\\) slope at 0"],
    ],
  }),

  section("📌 Slope is proportional to height", S`
  ${table(["Function", "Slope at 0", "Slope at x"], [
    ["\\(2^x\\)", "≈ 0.693", "≈ 0.693 · 2ˣ"],
    ["\\(e^x\\)", "1", "eˣ"],
    ["\\(3^x\\)", "≈ 1.099", "≈ 1.099 · 3ˣ"],
  ])}
  ${plane({ view: { xmin: -2.5, xmax: 2.2, ymin: -0.5, ymax: 8 }, curves: [{ f: (x) => 2 ** x, color: "blue" }, { f: Math.exp, color: "violet" }, { f: (x) => 3 ** x, color: "amber" }, { f: (x) => 1 + x, color: "green", a: -1, b: 1.5 }], points: [{ x: 0, y: 1, label: "(0, 1)", color: "red" }], step: { x: 0.5, y: 1 } }, "y = 2ˣ (blue), y = eˣ (violet) and y = 3ˣ (amber): only eˣ has the tangent y = x + 1 (green) at x = 0.")}
  ${keyIdea(S`For any base \(b\): \(\frac{b^{x+h}-b^x}{h}=b^x\cdot\frac{b^h-1}{h}\), so the slope at \(x\) is \(b^x\) times the slope at 0. The base with slope 1 at 0 is \(e\), and therefore \(\dfrac{d}{dx}e^x=e^x\).`)}`),

  section("📌 Explore", S`<p>Change the base \(b\). The panel shows the slope at 0 and the ratio slope ÷ height at your chosen \(x\) — they are always equal. Find the base that makes the slope at 0 exactly 1, then press the button to check.</p>`),

  widget("expBaseLab", { init: { b: 2, x: 1 } }),

  section("📌 Two ways to meet e", S`
  <p>Geometrically, \(e\) is the base whose graph crosses the y-axis at slope 1. Numerically, \(e=\lim_{n\to\infty}\left(1+\frac1n\right)^n\): one dollar at 100% interest, compounded more and more often, grows to \(e\) dollars in a year.</p>
  ${watchOut([
    "e is a number (≈ 2.718), not a variable.",
    "(eˣ)′ = eˣ, but (2ˣ)′ is not 2ˣ: other bases need a constant factor.",
    "xᵉ and eˣ are different: the first is a power function, the second exponential.",
    "Use enough decimal places for e: 2.718 is not accurate enough for large x.",
    "Exponential functions are always positive and always increasing (for b > 1).",
  ])}`),

  examples([
    ["Slopes of 2ˣ", S`Estimate the slope of \(y=2^x\) at \(x=0\) and at \(x=3\) with \(h=0.001\).`,
      [S`At 0: \(\frac{2^{0.001}-1}{0.001}\approx0.6934\).`, S`At 3: \(2^3\times0.6934\approx5.547\).`],
      S`about 0.693 at 0 and 5.55 at 3 — eight times as steep, because the height is eight times as large`,
      plane({ view: { xmin: -1.5, xmax: 3.6, ymin: -1, ymax: 12 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => 1 + 0.6931 * x, color: "green", a: -1.4, b: 1.5 }, { f: (x) => 8 + 5.545 * (x - 3), color: "green", a: 2.2, b: 3.6 }], points: [{ x: 0, y: 1, label: "slope 0.69", color: "red" }, { x: 3, y: 8, label: "slope 5.55", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["The base 3", S`Estimate the slope of \(y=3^x\) at \(x=0\).`,
      [S`\(\frac{3^{0.001}-1}{0.001}\approx1.0992\).`],
      S`about 1.099 — greater than 1, so the special base lies between 2 and 3`],
    ["Finding e", S`Evaluate \(\left(1+\frac1n\right)^n\) for \(n=10,\ 100,\ 1000,\ 1\,000\,000\).`,
      [S`\(2.59374\), \(2.70481\), \(2.71692\), \(2.71828\).`],
      S`the values approach \(e\approx2.71828\)`,
      plane({ view: { xmin: 0, xmax: 52, ymin: 2, ymax: 2.8 }, points: Array.from({ length: 25 }, (_, i) => ({ x: 2 * (i + 1), y: (1 + 1 / (2 * (i + 1))) ** (2 * (i + 1)), color: "blue" })), lines: [{ m: 0, b: E, color: "red", dash: true }], step: { x: 5, y: 0.1 }, xlabel: "n" })],
    ["A tangent to eˣ", S`Find the tangent to \(y=e^x\) at \(x=1\).`,
      [S`Point \((1,e)\); slope \(e^1=e\).`, S`\(y-e=e(x-1)\Rightarrow y=ex\).`],
      S`\(y=ex\) — it passes through the origin`,
      plane({ view: { xmin: -1.5, xmax: 2, ymin: -1, ymax: 6 }, curves: [{ f: Math.exp, color: "violet" }, { f: (x) => E * x, color: "green", a: -0.3, b: 2 }], points: [{ x: 1, y: E, label: "(1, e)", color: "red" }, { x: 0, y: 0, color: "green" }], step: { x: 0.5, y: 1 } })],
    ["A growing colony", S`A colony has \(N(t)=200\cdot2^t\) cells after \(t\) hours. Estimate its growth rate at \(t=3\).`,
      [S`Slope of \(2^t\) is about \(0.6931\cdot2^t\), so \(N'(t)\approx200\cdot0.6931\cdot2^t\).`, S`At \(t=3\): \(1600\times0.6931\).`],
      S`about 1109 cells per hour`],
  ]),

  practice([
    q("slope", S`What is the slope of \(y=e^x\) at \(x=0\)?`, num(1),
      "Definition of e.", [S`\(e^0=1\).`], S`\(1\)`),
    q("slope", S`What is the slope of \(y=e^x\) at \(x=2\) (2 decimals)?`, num(7.39, 0.01),
      "(eˣ)′ = eˣ.", [S`\(e^2\approx7.389\).`], S`\(7.39\)`),
    q("estimate", S`Estimate the slope of \(y=2^x\) at \(x=0\) (3 decimals).`, num(0.693, 0.002),
      "(2^h − 1)/h with small h.", [S`\(\approx0.693\).`], S`\(0.693\)`),
    q("base", S`Which base has slope exactly 1 at \(x=0\)?`, choice([S`\(e\approx2.718\)`, S`\(2\)`, S`\(3\)`, S`\(10\)`], 0),
      "Between 2 and 3.", ["That is the definition of e."], S`\(e\)`),
    q("limit", S`Evaluate \(\left(1+\frac1{1000}\right)^{1000}\) (4 decimals).`, num(2.7169, 0.0005),
      "Close to e.", [S`\(2.71692\).`], S`\(2.7169\)`),
  ]),

  ...hard([
    ["Why slope is proportional to height", S`Show that the slope of \(y=b^x\) at any \(x\) equals \(b^x\) times its slope at 0.`,
      [S`\(\frac{b^{x+h}-b^x}{h}=\frac{b^x(b^h-1)}{h}=b^x\cdot\frac{b^h-1}{h}\).`, S`As \(h\to0\), \(\frac{b^h-1}{h}\) approaches the slope at 0, a constant \(c_b\).`, S`So the slope is \(c_b\,b^x\); for \(b=e\), \(c_e=1\).`],
      S`\(\frac{d}{dx}b^x=c_b\,b^x\), where \(c_b\) is the slope at 0`],
    ["Slope 5 on eˣ", S`At what point does the tangent to \(y=e^x\) have slope 5? Find the tangent there.`,
      [S`Slope \(=e^x=5\Rightarrow x=\ln5\approx1.609\); point \((\ln5,5)\).`, S`\(y-5=5(x-\ln5)\).`],
      S`\((1.609,5)\); tangent \(y=5x+5-5\ln5\approx5x-3.05\)`,
      plane({ view: { xmin: -1, xmax: 2.5, ymin: -1, ymax: 10 }, curves: [{ f: Math.exp, color: "violet" }, { f: (x) => 5 * x + 5 - 5 * Math.log(5), color: "green", a: 0.8, b: 2.4 }], points: [{ x: Math.log(5), y: 5, label: "(ln 5, 5)", color: "red" }], step: { x: 0.5, y: 1 } })],
  ], [
    q("hard", S`Estimate the slope of \(y=10^x\) at \(x=0\) (4 decimals).`, num(2.3026, 0.001),
      "(10^h − 1)/h.", [S`\(\approx2.3026\).`], S`\(2.3026\)`),
    q("hard", S`The tangent to \(y=e^x\) at \(x=a\) passes through the origin. Find \(a\).`, num(1),
      "Tangent y = eᵃ(x − a) + eᵃ; at x = 0: eᵃ(1 − a) = 0.", [S`\(a=1\).`], S`\(1\)`),
    q("hard", S`For \(y=5^x\), what is the ratio slope ÷ height at every point (4 decimals)?`, num(1.6094, 0.001),
      "The slope at 0.", [S`\(\approx1.6094\).`], S`\(1.6094\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is the slope proportional to the height?", "b^(x+h) = bˣ · bʰ, so every difference quotient is bˣ times the same quotient at 0."],
      ["What exactly is e?", "The base with slope 1 at x = 0; equivalently the limit of (1 + 1/n)ⁿ. It is irrational, about 2.718281828."],
      ["Why is eˣ so useful?", "Its derivative is itself, which makes every growth and decay calculation simpler."],
      ["How are the constants 0.693 and 1.099 related to e?", "They are ln 2 and ln 3 — the natural logarithm, next lesson."],
      ["Does every exponential increase?", "For b > 1, yes; for 0 < b < 1 the slope at 0 is negative and the function decays."],
    ],
    summary: [
      "(bˣ)′ = (slope at 0) · bˣ.",
      "e ≈ 2.718: slope 1 at 0.",
      "(eˣ)′ = eˣ.",
      "e = lim (1 + 1/n)ⁿ.",
    ],
    next: "5.2 introduces the natural logarithm and its derivative.",
  }),
];
