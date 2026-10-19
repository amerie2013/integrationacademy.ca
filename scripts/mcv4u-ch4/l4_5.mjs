// MCV4U 4.5 — Chapter 4 Review (NEW lesson): slopes of sinusoids, derivatives of sin and cos, the chain rule for
// sinusoids and applications, with multi-step examples, mixed practice, a readiness checklist and a hard level
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "4.5 Chapter 4 Review";
export const ID = "6d4fc004-0001-4001-8001-000000000405";

const S = String.raw;
const PI = Math.PI;
const tr = (t) => 100 * Math.sin(t) * (1 + Math.cos(t));
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 4 Review — Derivatives of Sinusoidal Functions",
    overview: S`This page pulls the chapter together before the test. Everything rests on two facts — \((\sin x)'=\cos x\) and \((\cos x)'=-\sin x\), in radians — combined with the product, quotient and chain rules. With them you can find tangents, extrema and inflection points of trigonometric functions, and the velocity, acceleration and fastest change of periodic models. Each example below mixes several skills.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "differentiate trigonometric functions with every rule;",
      "find tangents, extrema and inflection points of trigonometric functions;",
      "analyze periodic motion and models;",
      "solve optimization problems with angles.",
    ],
    curriculum: "A2.4, A3.3–A3.5, B2 (whole chapter)",
    prior: [
      [S`\((\cos x)'\)?`, S`\(-\sin x\).`],
      [S`\((\sin 4x)'\)?`, S`\(4\cos4x\).`],
      [S`\((\tan x)'\)?`, S`\(\sec^2x\).`],
    ],
    words: [
      ["Radian measure", "required for these derivatives", ""],
      ["Derivative cycle", "sin → cos → −sin → −cos", "period 4"],
      ["Chain rule", "\\((\\sin g)'=g'\\cos g\\)", ""],
      ["SHM", "\\(a=-\\omega^2 s\\)", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["4.1 Rates of change", "slopes of sin x lie on cos x", "slope at π/2 is 0", "calculator in radians"],
    ["4.2 sin and cos", "(sin x)′ = cos x, (cos x)′ = −sin x", "(x sin x)′ = sin x + x cos x", "minus sign for cosine"],
    ["4.3 Chain rule", "(A sin(kx + c) + d)′ = Ak cos(kx + c)", "(sin² x)′ = sin 2x", "sin² x ≠ sin(x²)"],
    ["4.4 Applications", "v = s′, a = s″; a = −ω² s", "max speed Aω", "ω = 2π/period"],
  ])),

  section("📌 Explore", S`<p>Use the sinusoid explorer to check the chain-rule derivatives below: set \(A\), \(k\), \(c\) and \(d\) to match a function and compare the tangent slope with your answer.</p>`),

  widget("sinusoidRuleLab", { init: { A: -1.5, k: 2, c: 0.5, d: 1, x: 1, fn: "cos" } }),

  section("📌 The big picture", keyIdea(S`Treat sine and cosine like any other functions: the two basic derivatives plus the product, quotient and chain rules handle everything. Then use the usual tools — critical numbers, sign charts, the second derivative — on the result.`)),

  examples([
    ["A horizontal tangent", S`Find the tangent to \(y=2\sin x-\cos(2x)\) at \(x=\frac\pi2\).`,
      [S`\(y\left(\frac\pi2\right)=2-\cos\pi=3\).`, S`\(y'=2\cos x+2\sin(2x)\); \(y'\left(\frac\pi2\right)=0+0=0\).`],
      S`\(y=3\), a horizontal tangent (a maximum of the curve)`,
      plane({ view: { xmin: -0.5, xmax: 6.8, ymin: -3.5, ymax: 3.5 }, curves: [{ f: (x) => 2 * Math.sin(x) - Math.cos(2 * x), color: "violet" }, { f: () => 3, a: 0.8, b: 2.4, color: "green" }], points: [{ x: PI / 2, y: 3, label: "(π/2, 3)", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["A second derivative", S`For \(f(x)=x\sin x\), find \(f''(x)\) and \(f''(\pi)\).`,
      [S`\(f'=\sin x+x\cos x\).`, S`\(f''=\cos x+\cos x-x\sin x=2\cos x-x\sin x\).`],
      S`\(f''(x)=2\cos x-x\sin x\); \(f''(\pi)=-2\)`],
    ["Absolute extrema", S`Find the absolute extrema of \(f(x)=x-2\sin x\) on \([0,2\pi]\).`,
      [S`\(f'(x)=1-2\cos x=0\Rightarrow x=\frac\pi3,\ \frac{5\pi}3\).`, S`\(f(0)=0\), \(f\left(\frac\pi3\right)=\frac\pi3-\sqrt3\approx-0.685\), \(f\left(\frac{5\pi}3\right)=\frac{5\pi}3+\sqrt3\approx6.968\), \(f(2\pi)\approx6.283\).`],
      S`absolute minimum \(\approx-0.685\) at \(\frac\pi3\); absolute maximum \(\approx6.968\) at \(\frac{5\pi}3\)`,
      plane({ view: { xmin: -0.3, xmax: 7.6, ymin: -1.5, ymax: 8 }, curves: [{ f: (x) => x - 2 * Math.sin(x), a: 0, b: 2 * PI, color: "violet" }], points: [{ x: PI / 3, y: PI / 3 - Math.sqrt(3), label: "min", color: "blue" }, { x: (5 * PI) / 3, y: (5 * PI) / 3 + Math.sqrt(3), label: "max", color: "red" }, { x: 2 * PI, y: 2 * PI, label: "(2π, 6.28)", color: "amber" }], step: { x: 0.5, y: 1 } })],
    ["Inflection points", S`Show that \(f(x)=x+\cos x\) is increasing, and find its inflection points on \([0,2\pi]\).`,
      [S`\(f'(x)=1-\sin x\ge0\): increasing (flat only where \(\sin x=1\)).`, S`\(f''(x)=-\cos x\): changes sign at \(\frac\pi2\) and \(\frac{3\pi}2\).`],
      S`increasing everywhere; inflection points \(\left(\frac\pi2,\frac\pi2\right)\) and \(\left(\frac{3\pi}2,\frac{3\pi}2\right)\)`,
      plane({ view: { xmin: -0.3, xmax: 6.7, ymin: -0.5, ymax: 7.5 }, curves: [{ f: (x) => x + Math.cos(x), a: 0, b: 2 * PI, color: "violet" }, { f: (x) => x, a: 0, b: 2 * PI, color: "gray" }], points: [{ x: PI / 2, y: PI / 2, label: "inflection", color: "violet" }, { x: (3 * PI) / 2, y: (3 * PI) / 2, label: "inflection", color: "violet" }], step: { x: 0.5, y: 1 } })],
    ["A tide", S`The tide height is \(h(t)=1.5\cos\left(\frac\pi6t\right)+4\) m, \(t\) hours after high tide. How fast is the water falling 2 hours after high tide?`,
      [S`\(h'(t)=-1.5\cdot\frac\pi6\sin\left(\frac\pi6t\right)=-\frac\pi4\sin\left(\frac\pi6t\right)\).`, S`\(h'(2)=-\frac\pi4\cdot\frac{\sqrt3}2\approx-0.680\) m/h.`],
      S`falling at about 0.68 m per hour`],
  ]),

  practice([
    q("chain", S`For \(y=\sin(4x)\), find \(y'(0)\).`, num(4),
      "4 cos 4x.", [S`\(4\).`], S`\(4\)`),
    q("power", S`For \(f(x)=\cos^2x\), find \(f'\!\left(\frac\pi4\right)\).`, num(-1),
      "−2 cos x sin x = −sin 2x.", [S`\(-\sin\frac\pi2\).`], S`\(-1\)`),
    q("tangent", S`Find the slope of \(y=\tan x\) at \(x=0\).`, num(1),
      "sec² x.", [S`\(\sec^20=1\).`], S`\(1\)`),
    q("motion", S`For \(s(t)=6\cos(2t)\), find the maximum speed.`, num(12),
      "|Aω|.", [S`\(6\times2\).`], S`\(12\)`),
    q("cycle", S`What is the 7th derivative of \(\cos x\)?`, choice([S`\(\sin x\)`, S`\(-\sin x\)`, S`\(\cos x\)`, S`\(-\cos x\)`], 0),
      "7 = 4 + 3: three steps from cos x.", [S`\(\cos\to-\sin\to-\cos\to\sin\).`], S`\(\sin x\)`),
  ]),

  section("📌 Am I ready for the test?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["4.1", "I can estimate and describe the slopes of sine and cosine graphs."],
      ["4.2", "I can differentiate sin x, cos x and tan x with the sum, product and quotient rules."],
      ["4.3", "I can use the chain rule for sin(g(x)), cos(g(x)) and powers of sine and cosine."],
      ["4.4", "I can solve motion, rate and optimization problems with sinusoidal models."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["A quotient that simplifies", S`Show that \(\dfrac{d}{dx}\,\dfrac{\sin x}{1+\cos x}=\dfrac{1}{1+\cos x}\), and find the slope at \(x=0\).`,
      [S`Quotient rule: \(\frac{\cos x(1+\cos x)-\sin x(-\sin x)}{(1+\cos x)^2}=\frac{\cos x+\cos^2x+\sin^2x}{(1+\cos x)^2}\).`, S`\(=\frac{1+\cos x}{(1+\cos x)^2}=\frac1{1+\cos x}\). At 0: \(\frac12\).`],
      S`derivative \(\frac1{1+\cos x}\); slope \(\frac12\) at \(x=0\)`,
      plane({ view: { xmin: -2.8, xmax: 2.8, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.sin(x) / (1 + Math.cos(x)), a: -2.8, b: 2.8, color: "violet" }, { f: (x) => 0.5 * x, a: -1.5, b: 1.5, color: "green" }], points: [{ x: 0, y: 0, label: "slope ½", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["The best trough", S`A trough has a 10 cm base and two 10 cm sides, each tilted outward at angle \(\theta\) from the vertical. Find \(\theta\) that maximizes the cross-sectional area.`,
      [S`Height \(10\cos\theta\), each side overhang \(10\sin\theta\): \(A=10\cdot10\cos\theta+10\sin\theta\cdot10\cos\theta\).`, S`\(A=100\cos\theta(1+\sin\theta)\); \(A'=100(-\sin\theta-\sin^2\theta+\cos^2\theta)=100(1-\sin\theta-2\sin^2\theta)=0\).`, S`\((1-2\sin\theta)(1+\sin\theta)=0\Rightarrow\sin\theta=\frac12\), \(\theta=\frac\pi6\); \(A=100\cdot\frac{\sqrt3}2\cdot\frac32\approx129.9\) cm².`],
      S`\(\theta=\frac\pi6\) (30°), area about 129.9 cm²`,
      plane({ view: { xmin: 0, xmax: 1.65, ymin: 0, ymax: 140 }, curves: [{ f: (t) => 100 * Math.cos(t) * (1 + Math.sin(t)), a: 0, b: PI / 2, color: "violet" }], points: [{ x: PI / 6, y: 129.9, label: "(π/6, 129.9)", color: "red" }], step: { x: 0.25, y: 20 }, xlabel: "θ (rad)", ylabel: "A (cm²)" })],
  ], [
    q("hard", S`For \(y=\sin^3x\), find \(y'\!\left(\frac\pi6\right)\) (4 decimals).`, num(0.6495, 0.0005),
      "3 sin² x cos x.", [S`\(3\cdot\frac14\cdot\frac{\sqrt3}2\).`], S`\(0.6495\)`),
    q("hard", S`How many horizontal tangents does \(y=x+\sin(2x)\) have on \([0,\pi]\)?`, num(2),
      "1 + 2 cos 2x = 0.", [S`\(2x=\frac{2\pi}3,\frac{4\pi}3\).`], S`\(2\)`),
    q("hard", S`For \(s(t)=2\sin(3t)\), what is the greatest size of the acceleration?`, num(18),
      "a = −18 sin(3t).", [S`\(A\omega^2=2\cdot9\).`], S`\(18\)`),
  ]),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed practice and hard level without notes, then check each derivative with the explorers."],
      ["What are the most common mistakes?", "Dropping the minus sign of (cos x)′, forgetting the inner derivative, confusing sin² x with sin(x²), and working in degrees."],
      ["How do I find exact values?", "Use the special angles: sin(π/6) = ½, cos(π/6) = √3/2, sin(π/4) = cos(π/4) = √2/2."],
      ["How do I check an answer?", "Graph the function and estimate the tangent slope; or evaluate a difference quotient with h = 0.001."],
      ["How does this lead to Chapter 5?", "Chapter 5 finds the derivatives of exponential and logarithmic functions — the other key growth models."],
    ],
    summary: [
      "(sin x)′ = cos x, (cos x)′ = −sin x.",
      "Chain rule for every inner function.",
      "Use calculus tools on the result.",
      "Models: max rate |Aω|, a = −ω² s.",
    ],
    next: "Write the Chapter 4 test. Chapter 5 differentiates exponential functions.",
  }),
];
