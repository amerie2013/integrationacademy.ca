// MCV4U 4.1 — Instantaneous Rates of Change of Sinusoidal Functions (NEW lesson): estimating slopes of sin and cos
// numerically, the graph of the slopes, the two key limits sin h / h → 1 and (cos h − 1)/h → 0, and rates in models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "4.1 Instantaneous Rates of Change of Sinusoidal Functions";
export const ID = "6d4fc004-0001-4001-8001-000000000401";

const S = String.raw;
const PI = Math.PI;
export const blocks = () => [
  intro({
    icon: "🌊",
    title: "Instantaneous Rates of Change of Sinusoidal Functions",
    overview: S`Tides, daylight hours, sound waves and swinging pendulums all follow sine and cosine curves. To understand how fast such a quantity changes, we need the slope of \(y=\sin x\) (in radians) at every point. Using difference quotients with small \(h\) we can estimate those slopes, plot them, and discover a surprise: the slopes of the sine curve lie exactly on the cosine curve. Two limits make this exact: \(\dfrac{\sin h}{h}\to1\) and \(\dfrac{\cos h-1}{h}\to0\) as \(h\to0\).`,
    goals: [
      "estimate instantaneous rates of change of sin x and cos x with difference quotients;",
      "sketch the graph of the slopes of y = sin x and recognize it;",
      "evaluate the limits of sin h / h and (cos h − 1)/h numerically;",
      "explain why radian measure matters for these slopes;",
      "estimate rates of change in sinusoidal models.",
    ],
    curriculum: "A2.4 (determine, through investigation, the graph of the instantaneous rate of change of a sinusoidal function and connect it to the derivative)",
    prior: [
      [S`What is \(\sin\frac\pi6\)?`, S`\(\frac12\).`],
      [S`What is the difference quotient for \(f\) at \(a\)?`, S`\(\frac{f(a+h)-f(a)}{h}\).`],
      [S`Where does \(y=\sin x\) have its maximum on \([0,2\pi]\)?`, S`At \(x=\frac\pi2\).`],
    ],
    words: [
      ["Radian", "the angle that cuts an arc equal to the radius", "\\(\\pi\\) rad = 180°"],
      ["Sinusoidal function", "a transformed sine or cosine curve", "\\(y=3\\sin(2x)+1\\)"],
      ["Difference quotient", "\\(\\frac{f(a+h)-f(a)}{h}\\)", "slope of a secant"],
      ["Key limit", "\\(\\lim_{h\\to0}\\frac{\\sin h}{h}=1\\)", "h in radians"],
    ],
  }),

  section("📌 Slopes of the sine curve", S`
  ${table(["x", "0", "π/2", "π", "3π/2", "2π"], [
    ["\\(\\sin x\\)", "0", "1", "0", "−1", "0"],
    ["slope of \\(\\sin x\\)", "1", "0", "−1", "0", "1"],
    ["\\(\\cos x\\)", "1", "0", "−1", "0", "1"],
  ])}
  ${plane({ view: { xmin: -0.3, xmax: 6.6, ymin: -1.5, ymax: 1.5 }, curves: [{ f: Math.sin, a: 0, b: 2 * PI, color: "violet" }, { f: Math.cos, a: 0, b: 2 * PI, color: "blue" }], points: [{ x: 0, y: 1, color: "blue" }, { x: PI / 2, y: 0, color: "blue" }, { x: PI, y: -1, color: "blue" }, { x: 1.5 * PI, y: 0, color: "blue" }, { x: 2 * PI, y: 1, color: "blue" }], step: { x: 0.5, y: 0.5 } }, "y = sin x (violet) and its slopes (blue dots), which lie on y = cos x (blue).")}
  ${keyIdea(S`Measured in radians, the instantaneous rate of change of \(\sin x\) at any \(x\) equals \(\cos x\). It is largest (1) where the sine curve crosses its midline going up, 0 at its peaks and troughs, and \(-1\) where it crosses going down.`)}`),

  section("📌 Explore", S`<p>Slide the tangent along \(y=\sin x\). Each time, the slope is recorded as a blue point at the same \(x\). Before you reach the end, predict the shape the blue points will make.</p>`),

  widget("sineSlopeLab", { init: { x: 0.5, trace: true } }),

  section("📌 Estimating with difference quotients", S`
  <p>Choose a small \(h\) such as 0.001 and compute \(\frac{f(a+h)-f(a)}{h}\) with the calculator in <strong>radian mode</strong>. A centred quotient \(\frac{f(a+h)-f(a-h)}{2h}\) is even more accurate.</p>
  ${watchOut([
    "Set the calculator to radians: in degrees the slopes come out about 57 times too small.",
    "Use a small h, but not so small that rounding wipes out the digits (0.001 works well).",
    "The slope of sin x is not sin x: at x = 0 the curve is at 0 but rising with slope 1.",
    "sin h / h → 1 only when h is in radians.",
    "A peak or trough has slope 0, not 1.",
  ])}`),

  examples([
    ["A difference quotient", S`Estimate the instantaneous rate of change of \(y=\sin x\) at \(x=\frac\pi6\) using \(h=0.001\).`,
      [S`\(\frac{\sin(\frac\pi6+0.001)-\sin\frac\pi6}{0.001}=\frac{0.5008658-0.5}{0.001}\).`, S`Compare: \(\cos\frac\pi6=\frac{\sqrt3}{2}\approx0.8660\).`],
      S`about 0.8658, very close to \(\cos\frac\pi6\approx0.8660\)`],
    ["The slope at key points", S`Use the shape of \(y=\sin x\) to state its slope at \(x=0,\ \frac\pi2,\ \pi\).`,
      [S`At 0 the curve crosses its midline going up as steeply as it ever does: slope 1.`, S`At \(\frac\pi2\) it is at its peak: slope 0. At \(\pi\) it crosses going down: slope \(-1\).`],
      S`\(1,\ 0,\ -1\) — the values of \(\cos x\) at those points`,
      plane({ view: { xmin: -0.5, xmax: 3.8, ymin: -1.6, ymax: 1.6 }, curves: [{ f: Math.sin, color: "violet" }, { f: (x) => x, a: -0.5, b: 1, color: "green" }, { f: () => 1, a: 0.8, b: 2.4, color: "green" }, { f: (x) => -(x - PI), a: 2.6, b: 3.8, color: "green" }], points: [{ x: 0, y: 0, label: "slope 1", color: "red" }, { x: PI / 2, y: 1, label: "slope 0", color: "red" }, { x: PI, y: 0, label: "slope −1", color: "red" }], step: { x: 0.5, y: 0.5 } })],
    ["The key limit", S`Evaluate \(\dfrac{\sin h}{h}\) for \(h=0.1,\ 0.01,\ 0.001\) (radians) and state the limit.`,
      [S`\(0.998334\), \(0.999983\), \(0.9999998\).`, S`Near 0 the graph of \(y=\sin x\) is almost the line \(y=x\).`],
      S`\(\lim_{h\to0}\frac{\sin h}{h}=1\)`,
      plane({ view: { xmin: -1.5, xmax: 1.5, ymin: -1.5, ymax: 1.5 }, curves: [{ f: Math.sin, color: "violet" }, { f: (x) => x, color: "green" }], step: { x: 0.5, y: 0.5 } })],
    ["The slope of cosine", S`Estimate the slope of \(y=\cos x\) at \(x=\frac\pi3\) with \(h=0.001\), and compare it with \(\sin\frac\pi3\).`,
      [S`\(\frac{\cos(\frac\pi3+0.001)-0.5}{0.001}\approx\frac{0.4991337-0.5}{0.001}\approx-0.8663\).`, S`\(\sin\frac\pi3\approx0.8660\).`],
      S`about \(-0.866=-\sin\frac\pi3\): the slopes of cosine follow \(-\sin x\)`,
      plane({ view: { xmin: -0.3, xmax: 6.6, ymin: -1.5, ymax: 1.5 }, curves: [{ f: Math.cos, a: 0, b: 2 * PI, color: "violet" }, { f: (x) => -Math.sin(x), a: 0, b: 2 * PI, color: "blue" }, { f: (x) => 0.5 - 0.866 * (x - PI / 3), a: 0.4, b: 1.7, color: "green" }], points: [{ x: PI / 3, y: 0.5, label: "(π/3, 0.5)", color: "red" }], step: { x: 0.5, y: 0.5 } })],
    ["A tide", S`The water depth in a harbour is \(d(t)=3\sin\left(\frac{\pi}{6}t\right)+5\) m, \(t\) hours after midnight. Find the average rate of change from \(t=0\) to \(t=3\), and estimate the instantaneous rate at \(t=0\).`,
      [S`Average: \(\frac{d(3)-d(0)}{3}=\frac{8-5}{3}=1\) m/h.`, S`Instantaneous: \(\frac{d(0.001)-d(0)}{0.001}\approx\frac{5.0015708-5}{0.001}\approx1.571\) m/h.`],
      S`average 1 m/h; at midnight the tide rises at about 1.57 m/h`,
      plane({ view: { xmin: 0, xmax: 24, ymin: 0, ymax: 9 }, curves: [{ f: (t) => 3 * Math.sin((PI / 6) * t) + 5, a: 0, b: 24, color: "violet" }, { f: (t) => 5 + t, a: 0, b: 3, color: "amber" }, { f: (t) => 5 + (PI / 2) * t, a: 0, b: 2.3, color: "green" }], points: [{ x: 0, y: 5, label: "(0, 5)", color: "red" }, { x: 3, y: 8, label: "(3, 8)", color: "amber" }], step: { x: 2, y: 1 } })],
  ]),

  practice([
    q("slope", S`What is the slope of the tangent to \(y=\sin x\) at \(x=0\)?`, num(1),
      "Steepest point, rising.", [S`\(\cos0=1\).`], S`\(1\)`),
    q("slope", S`What is the slope of the tangent to \(y=\sin x\) at \(x=\pi\)?`, num(-1),
      "Crossing the midline going down.", [S`\(\cos\pi=-1\).`], S`\(-1\)`),
    q("estimate", S`Estimate the slope of \(y=\sin x\) at \(x=1\) (radians) to 3 decimals.`, num(0.54, 0.002),
      "Compare with cos 1.", [S`\(\cos1\approx0.540\).`], S`\(0.540\)`),
    q("slope", S`What is the slope of \(y=\cos x\) at \(x=0\)?`, num(0),
      "The cosine curve peaks at 0.", [S`\(-\sin0=0\).`], S`\(0\)`),
    q("pattern", S`The slopes of \(y=\sin x\) (radians) lie on which curve?`, choice([S`\(y=\cos x\)`, S`\(y=-\cos x\)`, S`\(y=\sin x\)`, S`\(y=-\sin x\)`], 0),
      "Check x = 0 and x = π/2.", ["Slope 1 at 0, 0 at π/2."], S`\(y=\cos x\)`),
  ]),

  ...hard([
    ["Why the slope is cos x", S`Use \(\sin(x+h)=\sin x\cos h+\cos x\sin h\) and the limits \(\frac{\sin h}{h}\to1\), \(\frac{\cos h-1}{h}\to0\) to show that the slope of \(\sin x\) is \(\cos x\).`,
      [S`\(\frac{\sin(x+h)-\sin x}{h}=\frac{\sin x\cos h+\cos x\sin h-\sin x}{h}\).`, S`\(=\sin x\cdot\frac{\cos h-1}{h}+\cos x\cdot\frac{\sin h}{h}\).`, S`As \(h\to0\): \(\sin x\cdot0+\cos x\cdot1=\cos x\).`],
      S`\(\displaystyle\lim_{h\to0}\frac{\sin(x+h)-\sin x}{h}=\cos x\)`,
      plane({ view: { xmin: -1, xmax: 1, ymin: -0.6, ymax: 0.6 }, curves: [{ f: (h) => (Math.abs(h) < 1e-6 ? 0 : (Math.cos(h) - 1) / h), color: "violet" }], points: [{ x: 0, y: 0, label: "→ 0", color: "red", open: true }], step: { x: 0.25, y: 0.2 } })],
    ["Where is the slope ½?", S`Find all \(x\) in \([0,2\pi]\) where the tangent to \(y=\sin x\) has slope \(\frac12\).`,
      [S`The slope is \(\cos x\), so solve \(\cos x=\frac12\).`, S`\(x=\frac\pi3\) or \(x=\frac{5\pi}3\).`],
      S`\(x=\frac\pi3\approx1.05\) and \(x=\frac{5\pi}{3}\approx5.24\)`,
      plane({ view: { xmin: -0.3, xmax: 6.6, ymin: -1.5, ymax: 1.5 }, curves: [{ f: Math.sin, a: 0, b: 2 * PI, color: "violet" }, { f: (x) => Math.sin(PI / 3) + 0.5 * (x - PI / 3), a: 0.2, b: 1.9, color: "green" }, { f: (x) => Math.sin((5 * PI) / 3) + 0.5 * (x - (5 * PI) / 3), a: 4.4, b: 6.1, color: "green" }], points: [{ x: PI / 3, y: Math.sin(PI / 3), color: "red" }, { x: (5 * PI) / 3, y: Math.sin((5 * PI) / 3), color: "red" }], step: { x: 0.5, y: 0.5 } })],
  ], [
    q("hard", S`Find the average rate of change of \(y=\sin x\) on \(\left[0,\frac\pi2\right]\) (4 decimals).`, num(0.6366, 0.0005),
      "(sin(π/2) − sin 0)/(π/2).", [S`\(\frac{1}{\pi/2}=\frac2\pi\).`], S`\(0.6366\)`),
    q("hard", S`Estimate the slope of \(y=2\sin x\) at \(x=0\).`, num(2),
      "Doubling the heights doubles the slopes.", [S`\(2\cos0\).`], S`\(2\)`),
    q("hard", S`How many points in \([0,2\pi)\) have a horizontal tangent on \(y=\sin x\)?`, num(2),
      "cos x = 0.", [S`\(\frac\pi2\) and \(\frac{3\pi}2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why must x be in radians?", "In radians sin h ≈ h for small h, which makes the slope at 0 equal to 1. In degrees the slope at 0 is π/180 ≈ 0.0175, and every formula picks up that factor."],
      ["How small should h be?", "Small enough to be accurate, not so small that rounding errors dominate; 0.001 or a centred quotient works well."],
      ["Where is a sine curve steepest?", "Where it crosses its midline — halfway between a peak and a trough."],
      ["Why is the slope 0 at a peak?", "The curve stops rising and starts falling there; the tangent is horizontal."],
      ["What comes next?", "4.2 states the exact rules: (sin x)′ = cos x and (cos x)′ = −sin x."],
    ],
    summary: [
      "Slopes of sin x (radians) lie on cos x.",
      "Slopes of cos x lie on −sin x.",
      "sin h / h → 1 and (cos h − 1)/h → 0.",
      "Steepest at the midline, flat at peaks.",
    ],
    next: "4.2 proves and uses the derivatives of sine and cosine.",
  }),
];
