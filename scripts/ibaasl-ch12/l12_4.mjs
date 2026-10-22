// IB AA SL 12.4 — Solving Trigonometric Equations: equations sin x = k, cos x = k, tan x = k on a given interval, equations with transformed arguments, quadratic equations in sin or cos, using identities, graphical solutions
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "12.4 Solving Trigonometric Equations";
export const ID = "63f004e6-bd64-47b4-9e45-47623d16a335";
const S = String.raw;
const PI = Math.PI;
const P = (x, y, label, color = "red") => ({ x, y, label, color });
const fx = (v) => Math.round(v * 1000) / 1000;

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Solving Trigonometric Equations",
    overview: S`Because sine and cosine repeat, an equation such as \(\sin x=0.4\) has infinitely many solutions. Questions always give an interval, and the task is to find every solution in it. The calculator gives one principal value; symmetry of the unit circle or the graph gives the rest, and the period gives repeats. In this lesson you will solve basic equations, equations with transformed arguments such as \(\cos2x\), quadratic equations in sin or cos, and equations needing identities.`,
    goals: [
      S`find all solutions of \(\sin x=k\), \(\cos x=k\), \(\tan x=k\) in an interval;`,
      S`solve equations such as \(\sin(2x)=k\) by adjusting the interval;`,
      "solve quadratic equations in sin x or cos x;",
      "use identities to rewrite equations in one function;",
      "solve equations graphically with technology.",
    ],
    curriculum: "SL 3.8 (solving trigonometric equations in a finite interval, both graphically and analytically; equations leading to quadratic equations in sin x, cos x or tan x)",
    prior: [
      [S`Solve \(2u^2-u-1=0\).`, S`\(u=1\) or \(u=-\frac12\).`],
      [S`Find all θ in \([0,2\pi]\) with \(\cos\theta=\frac12\).`, S`\(\frac{\pi}{3},\ \frac{5\pi}{3}\).`],
      [S`Write \(\sin2x\) in terms of \(\sin x\) and \(\cos x\).`, S`\(2\sin x\cos x\).`],
    ],
    words: [
      ["Principal value", S`calculator output of \(\sin^{-1}\), \(\cos^{-1}\), \(\tan^{-1}\)`, ""],
      ["Interval", "the domain in which to find solutions", S`\(0\le x\le2\pi\)`],
      ["Symmetry", S`\(\sin(\pi-x)=\sin x\), \(\cos(2\pi-x)=\cos x\)`, ""],
      ["Period", S`\(2\pi\) for sin, cos; \(\pi\) for tan`, ""],
      ["Substitution", S`let \(u=\sin x\) to see a quadratic`, ""],
    ],
  }),

  section("📌 Basic equations", S`
  <p>For \(\sin x=0.4\) on \([0,2\pi]\): the principal value is \(x=\sin^{-1}0.4\approx0.412\). Sine is also positive in quadrant 2, so the second solution is \(\pi-0.412\approx2.730\).</p>
  ${plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: Math.sin, color: "violet" }], lines: [{ m: 0, b: 0.4, color: "amber", dash: true }], points: [P(Math.asin(0.4), 0.4, "0.412"), P(PI - Math.asin(0.4), 0.4, "2.730")] }, "sin x = 0.4 has two solutions in [0, 2π]")}
  ${table(["Equation", "Second solution in [0, 2π]", "Repeat"], [[S`\(\sin x=k\)`, S`\(\pi-p\)`, S`\(+2\pi\)`], [S`\(\cos x=k\)`, S`\(2\pi-p\)`, S`\(+2\pi\)`], [S`\(\tan x=k\)`, S`\(p+\pi\)`, S`\(+\pi\)`]])}
  ${plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: Math.cos, color: "violet" }], lines: [{ m: 0, b: -0.7, color: "amber", dash: true }], points: [P(Math.acos(-0.7), -0.7, fx(Math.acos(-0.7)).toString()), P(2 * PI - Math.acos(-0.7), -0.7, fx(2 * PI - Math.acos(-0.7)).toString())] }, "cos x = −0.7: x ≈ 2.346 or 2π − 2.346 ≈ 3.937")}
  ${keyIdea("Find the principal value, use symmetry for the second value, then add or subtract periods until you leave the interval.")}`),

  section("📌 Transformed arguments and quadratics", S`
  <p>For \(\sin2x=\frac{\sqrt3}{2}\) on \(0\le x\le2\pi\), let \(u=2x\) with \(0\le u\le4\pi\): \(u=\frac{\pi}{3},\frac{2\pi}{3},\frac{7\pi}{3},\frac{8\pi}{3}\), so \(x=\frac{\pi}{6},\frac{\pi}{3},\frac{7\pi}{6},\frac{4\pi}{3}\) — four solutions, because the graph repeats twice as fast.</p>
  ${plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: (x) => Math.sin(2 * x), color: "violet" }], lines: [{ m: 0, b: Math.sqrt(3) / 2, color: "amber", dash: true }], points: [P(PI / 6, 0.866, "π/6"), P(PI / 3, 0.866, "π/3"), P((7 * PI) / 6, 0.866, "7π/6"), P((4 * PI) / 3, 0.866, "4π/3")] }, "sin 2x = √3/2: four solutions in [0, 2π]")}
  <p>For \(2\cos^2x+5\cos x-3=0\): let \(u=\cos x\), \((2u-1)(u+3)=0\). \(\cos x=-3\) is impossible; \(\cos x=\frac12\) gives \(x=\frac{\pi}{3},\frac{5\pi}{3}\).</p>
  ${plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -7, ymax: 5 }, step: { x: PI / 2, y: 1 }, curves: [{ f: (x) => 2 * Math.cos(x) ** 2 + 5 * Math.cos(x) - 3, color: "violet" }], points: [P(PI / 3, 0, "π/3"), P((5 * PI) / 3, 0, "5π/3")] }, "y = 2cos²x + 5cos x − 3 has zeros only where cos x = ½")}
  ${watchOut([
    "Check the calculator mode matches the interval (degrees or radians).",
    S`For \(\sin(bx)=k\), widen the interval to \(b\) times its length before solving.`,
    S`Reject impossible values such as \(\sin x=2\).`,
    S`Do not divide by \(\cos x\) or \(\sin x\): you may lose solutions. Factorise instead.`,
  ])}`),

  section("📌 Explore", S`<p>Choose sin, cos or tan and move the line y = k. Count the solutions in [0, 2π] and see how symmetry gives the second one.</p>`),

  widget("ibTrigEq", { init: [1, -0.35] }),

  examples([
    ["Level 1 · Exact", S`Solve \(2\sin x+\sqrt3=0\) for \(0\le x\le2\pi\).`,
      [S`\(\sin x=-\frac{\sqrt3}{2}\): reference \(\frac{\pi}{3}\), quadrants 3 and 4.`],
      S`\(\frac{4\pi}{3},\ \frac{5\pi}{3}\)`],
    ["Level 1 · Tangent", S`Solve \(\tan x=2.5\) for \(0^\circ\le x\le360^\circ\).`,
      [S`\(x=\tan^{-1}2.5\approx68.2^\circ\); add 180°.`],
      S`\(68.2^\circ,\ 248.2^\circ\)`],
    ["Level 2 · Shifted argument", S`Solve \(\cos\left(x-\frac{\pi}{4}\right)=\frac12\) for \(0\le x\le2\pi\).`,
      [S`Let \(u=x-\frac{\pi}{4}\), \(-\frac{\pi}{4}\le u\le\frac{7\pi}{4}\): \(u=\frac{\pi}{3}\) or \(\frac{5\pi}{3}\).`, S`\(x=u+\frac{\pi}{4}\).`],
      S`\(\frac{7\pi}{12},\ \frac{23\pi}{12}\)`],
    ["Level 2 · Quadratic", S`Solve \(\tan^2x=3\) for \(0\le x\le2\pi\).`,
      [S`\(\tan x=\pm\sqrt3\).`],
      S`\(\frac{\pi}{3},\frac{2\pi}{3},\frac{4\pi}{3},\frac{5\pi}{3}\)`],
    ["Level 3 · Using an identity", S`Solve \(\sin2x=\sin x\) for \(0\le x\le2\pi\).`,
      [S`\(2\sin x\cos x-\sin x=0\Rightarrow\sin x(2\cos x-1)=0\).`, S`\(\sin x=0\): \(0,\pi,2\pi\); \(\cos x=\frac12\): \(\frac{\pi}{3},\frac{5\pi}{3}\).`],
      S`\(0,\frac{\pi}{3},\pi,\frac{5\pi}{3},2\pi\)`,
      plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 1.5 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: (x) => Math.sin(2 * x), color: "violet" }, { f: Math.sin, color: "amber" }], points: [P(0, 0, "0"), P(PI / 3, Math.sin(PI / 3), "π/3"), P(PI, 0, "π"), P((5 * PI) / 3, Math.sin((5 * PI) / 3), "5π/3"), P(2 * PI, 0, "2π")] }, "sin 2x (violet) meets sin x (amber) five times")],
  ]),

  practice([
    q("Level 1 · count", S`How many solutions has \(\cos x=0.3\) in \(0\le x\le2\pi\)?`, num(2),
      "Two per period.", ["2."], S`\(2\)`),
    q("Level 1 · solve", S`Solve \(\sin x=-0.25\), giving the smaller solution in \([0,2\pi]\) (3 d.p.).`, num(PI + Math.asin(0.25), 0.001),
      "Quadrants 3 and 4.", [S`\(\pi+0.253\).`], S`\(\approx3.394\)`),
    q("Level 2 · double argument", S`How many solutions has \(\cos2x=-\frac12\) in \(0\le x\le2\pi\)?`, num(4),
      "u = 2x ∈ [0, 4π].", ["4."], S`\(4\)`),
    q("Level 2 · quadratic", S`Solve \(2\sin^2x=1\) in \([0,\pi]\). The solutions are:`, choice([S`\(\frac{\pi}{4},\frac{3\pi}{4}\)`, S`\(\frac{\pi}{6},\frac{5\pi}{6}\)`, S`\(\frac{\pi}{4}\) only`, S`\(\frac{\pi}{2}\)`], 0),
      "sin x = ±√2/2.", ["Only + in [0, π]."], S`\(\frac{\pi}{4},\frac{3\pi}{4}\)`),
    q("Level 2 · tan", S`Solve \(\tan x=-1\) for \(0\le x\le2\pi\); give the larger solution (3 d.p.).`, num((7 * PI) / 4, 0.001),
      "3π/4 and 7π/4.", [S`\(\frac{7\pi}{4}\).`], S`\(\frac{7\pi}{4}\)`),
  ]),

  ...hard([
    ["A quadratic needing the Pythagorean identity", S`Solve \(2\sin^2x+3\cos x=3\) for \(0\le x\le2\pi\).`,
      [S`\(2(1-\cos^2x)+3\cos x-3=0\Rightarrow2\cos^2x-3\cos x+1=0\).`, S`\((2\cos x-1)(\cos x-1)=0\): \(\cos x=\frac12\) or \(1\).`, S`\(x=0,\frac{\pi}{3},\frac{5\pi}{3},2\pi\).`],
      S`\(0,\ \frac{\pi}{3},\ \frac{5\pi}{3},\ 2\pi\)`,
      plane({ view: { xmin: 0, xmax: 2 * PI, ymin: -6.5, ymax: 1 }, step: { x: PI / 2, y: 1 }, curves: [{ f: (x) => 2 * Math.sin(x) ** 2 + 3 * Math.cos(x) - 3, color: "violet" }], points: [P(0, 0, "0"), P(PI / 3, 0, "π/3"), P((5 * PI) / 3, 0, "5π/3"), P(2 * PI, 0, "2π")] }, "y = 2sin²x + 3cos x − 3 has four zeros in [0, 2π]")],
    ["Technology", S`Solve \(\sin x=\frac{x}{3}\) for \(x>0\) using a GDC.`,
      [S`Graph \(y=\sin x\) and \(y=\frac x3\); the positive intersection is at \(x\approx2.279\).`],
      S`\(x\approx2.279\)`],
  ], [
    q("Level 3 · double angle", S`Solve \(\cos2x+\cos x=0\) in \([0,2\pi]\). How many solutions?`, num(3),
      "2cos²x + cos x − 1 = 0.", [S`\(\cos x=\frac12\) or \(-1\): \(\frac{\pi}{3},\pi,\frac{5\pi}{3}\).`], S`\(3\)`),
    q("Level 3 · largest", S`Solve \(3\tan^2x-1=0\) in \([0,2\pi]\); give the largest solution (3 d.p.).`, num((11 * PI) / 6, 0.001),
      "tan x = ±1/√3.", [S`\(\frac{11\pi}{6}\).`], S`\(\frac{11\pi}{6}\)`),
    q("Level 3 · interval", S`Solve \(\sin\left(2x+\frac{\pi}{6}\right)=1\) for \(0\le x\le\pi\).`, num(PI / 6, 0.001),
      "2x + π/6 = π/2.", [S`\(x=\frac{\pi}{6}\).`], S`\(\frac{\pi}{6}\)`),
  ]),

  wrapUp({
    qas: [
      ["Why are there several solutions?", "Sine and cosine repeat every 2π (tan every π), and each takes most values twice per period."],
      ["How do I find the second solution?", "sin: π − p; cos: 2π − p; tan: p + π."],
      ["What about sin(2x) = k?", "Solve for u = 2x over the doubled interval, then halve."],
      ["How do I handle sin² and cos together?", "Use sin² = 1 − cos² to get a quadratic in cos."],
      ["Why not divide by sin x?", "You would lose the solutions where sin x = 0; factorise instead."],
    ],
    summary: [
      "Principal value + symmetry + period.",
      "Transform the interval for sin(bx + c) = k.",
      "Quadratics: substitute, factorise, reject impossible values.",
      "Identities rewrite equations in one function.",
    ],
    next: "12.5 studies the graphs of sine, cosine and tangent.",
  }),
];
