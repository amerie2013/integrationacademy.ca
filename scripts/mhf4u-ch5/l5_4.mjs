// MHF4U 5.4 — Solving Trigonometric Equations: linear and quadratic equations on [0, 2π], multiple angles, and
// equations that need an identity first
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, rootsT, hard, plane, num } from "./lib.mjs";
import { TG, UC, PI } from "./trigfig.mjs";

export const TITLE = "5.4 Solving Trigonometric Equations";
export const ID = "75d7daa2-6531-4114-8241-56336068c80c";

const S = String.raw;
const lab = (x, y, label, color = "blue") => ({ x, y, label, color });
const V = { xmin: -0.5, xmax: 7, ymin: -2, ymax: 2 };
export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Solving Trigonometric Equations",
    overview: S`Because trigonometric functions repeat, an equation such as \(\sin x=\frac12\) has infinitely many solutions, so we state an interval, usually \([0,2\pi]\). The method has three stages: isolate the ratio, find the reference angle, then use CAST to place every solution. Quadratic equations factor just as they do in algebra, and identities can turn a harder equation into one of these.`,
    goals: [
      "solve linear equations on \\([0,2\\pi]\\), exactly and approximately;",
      "solve quadratic equations in a ratio by factoring;",
      "solve equations with multiple angles such as \\(\\sin2x\\);",
      "use identities before solving;",
      "confirm solutions with a graph.",
    ],
    curriculum: "B3.4 (solve linear and quadratic trigonometric equations, with and without graphing technology)",
    prior: [
      [S`Solve \(2u-1=0\).`, S`\(u=\frac12\).`],
      [S`Factor \(2u^2-u-1\).`, S`\((2u+1)(u-1)\).`],
      [S`Quadrants where \(\cos x\lt0\)?`, S`Q2 and Q3.`],
    ],
    words: [
      ["Reference angle", "the acute angle for |ratio|", ""],
      ["Principal value", "the calculator's inverse result", "\\(\\sin^{-1}0.3\\)"],
      ["Multiple angle", "kx with k > 1", "\\(\\sin2x\\)"],
      ["Interval", "the set of x considered", "\\([0,2\\pi]\\)"],
    ],
  }),

  section("📌 Placing the solutions", S`
  ${table(["Quadrant", "Angle from reference α", "Example, α = π/6"], [
    ["Q1", "α", "π/6"],
    ["Q2", "π − α", "5π/6"],
    ["Q3", "π + α", "7π/6"],
    ["Q4", "2π − α", "11π/6"],
  ])}
  ${plane(TG([[Math.sin, "violet"], [() => 0.5, "green"]], V, [lab(PI / 6, 0.5, "π/6"), lab((5 * PI) / 6, 0.5, "5π/6")]), "sin x = 1/2 meets the line twice in one cycle.")}
  ${keyIdea(S`A linear equation has at most two solutions in \([0,2\pi]\). If \(|\sin x|\) or \(|\cos x|\) would have to exceed 1, there are none. For \(\sin kx=c\), solve for \(kx\) on \([0,2k\pi]\), and then divide by \(k\).`)}`),

  section("📌 Explore", S`<p>Choose sin, cos or tan and drag the value of \(k\). Each intersection with the horizontal line is one solution. Watch solutions disappear when \(k\) goes beyond \(\pm1\) for sine and cosine.</p>`),

  widget("ibTrigEq", { init: [0, -0.6] }),

  section("📌 Quadratic equations", S`
  <p>Treat the ratio as a variable: \(2\cos^2x-\cos x-1=0\) is \((2\cos x+1)(\cos x-1)=0\). Solve each factor separately, then collect the solutions in order.</p>
  ${plane(UC(120, "2π/3", [{ x: Math.cos((4 * PI) / 3), y: Math.sin((4 * PI) / 3), label: "4π/3", color: "red" }, { x: 1, y: 0, label: "0", color: "blue" }]), "cos x = −1/2 and cos x = 1 give the solutions on the circle.")}
  ${watchOut([
    "Do not divide both sides by sin x or cos x: you can lose solutions. Factor instead.",
    "For calculator work, use radian mode, and adjust a negative principal value.",
    "With sin 2x = c, list x-values from 0 to 2π; there are usually four.",
    "Check each answer: especially after using identities or squaring.",
    "State both exact values and decimals as asked.",
  ])}`),

  examples([
    ["A special value", S`Solve \(2\cos x+\sqrt3=0\) on \([0,2\pi]\).`,
      [S`<b>Isolate.</b> \(2\cos x=-\sqrt3\), so \(\cos x=-\frac{\sqrt3}2\).`,
        S`<b>Reference angle.</b> \(\cos\frac\pi6=\frac{\sqrt3}2\), so it is \(\frac\pi6\).`,
        S`<b>Quadrants.</b> Cosine is negative in Q2 and Q3: \(\pi-\frac\pi6=\frac{5\pi}6\) and \(\pi+\frac\pi6=\frac{7\pi}6\).`,
        S`<b>Check.</b> \(2\left(-\frac{\sqrt3}2\right)+\sqrt3=0\) at both angles ✓`],
      S`\(x=\frac{5\pi}6,\ \frac{7\pi}6\)`,
      plane(TG([[Math.cos, "violet"], [() => -Math.sqrt(3) / 2, "green"]], V, [lab((5 * PI) / 6, -Math.sqrt(3) / 2, "5π/6"), lab((7 * PI) / 6, -Math.sqrt(3) / 2, "7π/6")]))],
    ["A non-special value", S`Solve \(3\sin x-1=0\) on \([0,2\pi]\), to 2 decimals.`,
      [S`<b>Isolate.</b> \(\sin x=\frac13\).`,
        S`<b>Reference angle.</b> With the calculator in radians, \(\sin^{-1}\frac13\approx0.34\).`,
        S`<b>Quadrants.</b> Sine is positive in Q1 and Q2: \(x\approx0.34\) and \(x\approx\pi-0.34\approx2.80\).`,
        S`<b>Check.</b> \(3\sin2.80-1\approx3(0.335)-1\approx0\) ✓`],
      S`\(x\approx0.34,\ 2.80\)`,
      plane(TG([[Math.sin, "violet"], [() => 1 / 3, "green"]], V, [lab(0.34, 1 / 3, "0.34"), lab(2.8, 1 / 3, "2.80")]))],
    ["Quadratic by factoring", S`Solve \(2\sin^2x-\sin x-1=0\) on \([0,2\pi]\).`,
      [S`<b>Substitute.</b> Let \(u=\sin x\): \(2u^2-u-1=0\).`,
        S`<b>Factor.</b> \((2u+1)(u-1)=0\), so \(\sin x=-\frac12\) or \(\sin x=1\).`,
        S`<b>First.</b> \(\sin x=-\frac12\): reference \(\frac\pi6\), Q3 and Q4: \(x=\frac{7\pi}6,\ \frac{11\pi}6\).`,
        S`<b>Second.</b> \(\sin x=1\): \(x=\frac\pi2\).`,
        S`<b>Check.</b> \(x=\frac{7\pi}6\): \(2\cdot\frac14+\frac12-1=0\) ✓`],
      S`\(x=\frac\pi2,\ \frac{7\pi}6,\ \frac{11\pi}6\)`,
      plane(TG([[(x) => 2 * Math.sin(x) ** 2 - Math.sin(x) - 1, "violet"]], { xmin: -0.5, xmax: 7, ymin: -2, ymax: 2 }, [lab(PI / 2, 0, "π/2"), lab((7 * PI) / 6, 0, "7π/6"), lab((11 * PI) / 6, 0, "11π/6")]))],
    ["A multiple angle", S`Solve \(\sin2x=\dfrac{\sqrt3}2\) on \([0,2\pi]\).`,
      [S`<b>Range of the angle.</b> If \(0\le x\le2\pi\), then \(0\le2x\le4\pi\). So solve for \(2x\) over two turns.`,
        S`<b>One turn.</b> \(2x=\frac\pi3\) or \(\frac{2\pi}3\).`,
        S`<b>Add a turn.</b> \(2x=\frac{7\pi}3\) or \(\frac{8\pi}3\).`,
        S`<b>Divide by 2.</b> \(x=\frac\pi6,\ \frac\pi3,\ \frac{7\pi}6,\ \frac{4\pi}3\).`,
        S`<b>Check.</b> \(y=\sin2x\) has two cycles on \([0,2\pi]\), and the line meets each twice: 4 solutions ✓`],
      S`\(x=\frac\pi6,\ \frac\pi3,\ \frac{7\pi}6,\ \frac{4\pi}3\)`,
      plane(TG([[(x) => Math.sin(2 * x), "violet"], [() => Math.sqrt(3) / 2, "green"]], V, [lab(PI / 6, Math.sqrt(3) / 2, "π/6"), lab(PI / 3, Math.sqrt(3) / 2, "π/3")]))],
    ["Using an identity", S`Solve \(\sin2x=\cos x\) on \([0,2\pi]\).`,
      [S`<b>Identity.</b> \(\sin2x=2\sin x\cos x\), so \(2\sin x\cos x-\cos x=0\).`,
        S`<b>Factor.</b> Do not divide by \(\cos x\), since that loses solutions: \(\cos x(2\sin x-1)=0\).`,
        S`<b>First.</b> \(\cos x=0\): \(x=\frac\pi2,\ \frac{3\pi}2\).`,
        S`<b>Second.</b> \(\sin x=\frac12\): \(x=\frac\pi6,\ \frac{5\pi}6\).`,
        S`<b>Check.</b> \(x=\frac\pi6\): \(\sin\frac\pi3=\frac{\sqrt3}2=\cos\frac\pi6\) ✓`],
      S`\(x=\frac\pi6,\ \frac\pi2,\ \frac{5\pi}6,\ \frac{3\pi}2\)`,
      plane(TG([[(x) => Math.sin(2 * x), "violet"], [Math.cos, "green"]], V, [lab(PI / 6, Math.sqrt(3) / 2, "π/6"), lab(PI / 2, 0, "π/2"), lab((5 * PI) / 6, -Math.sqrt(3) / 2, "5π/6"), lab((3 * PI) / 2, 0, "3π/2")]))],
  ]),

  practice([
    q("linear", S`Solve \(2\sin x-1=0\) on \([0,2\pi]\). Enter the solutions as decimals (2 places), separated by commas.`, rootsT(0.01, 0.52, 2.62),
      "sin x = 1/2.", [S`\(\frac\pi6\) and \(\frac{5\pi}6\).`], S`\(x=0.52,\ 2.62\)`),
    q("linear", S`Solve \(\tan x=1\) on \([0,2\pi]\). Enter decimals (2 places).`, rootsT(0.01, 0.79, 3.93),
      "Q1 and Q3.", [S`\(\frac\pi4\) and \(\frac{5\pi}4\).`], S`\(x=0.79,\ 3.93\)`),
    q("approximate", S`Solve \(5\cos x=2\) on \([0,2\pi]\). Enter decimals (2 places).`, rootsT(0.01, 1.16, 5.12),
      "Q1 and Q4.", [S`\(\cos^{-1}0.4\approx1.16\); \(2\pi-1.16\approx5.12\).`], S`\(x=1.16,\ 5.12\)`),
    q("quadratic", S`Solve \(\cos^2x-1=0\) on \([0,2\pi)\). Enter decimals (2 places).`, rootsT(0.01, 0, 3.14),
      "cos x = ±1.", [S`\(0\) and \(\pi\).`], S`\(x=0,\ 3.14\)`),
    q("count", S`How many solutions does \(\cos3x=0.5\) have on \([0,2\pi]\)?`, num(6),
      "Two per cycle, three cycles.", [S`\(3\times2\).`], S`\(6\)`),
  ]),

  ...hard([
    ["Double angle in cosine", S`Solve \(\cos2x+\sin x=0\) on \([0,2\pi]\).`,
      [S`\(1-2\sin^2x+\sin x=0\Rightarrow2\sin^2x-\sin x-1=0\).`, S`\((2\sin x+1)(\sin x-1)=0\): \(\sin x=-\frac12\) or \(\sin x=1\).`],
      S`\(x=\frac\pi2,\ \frac{7\pi}6,\ \frac{11\pi}6\)`,
      plane(TG([[(x) => Math.cos(2 * x) + Math.sin(x), "violet"]], { xmin: -0.5, xmax: 7, ymin: -2, ymax: 2 }))],
    ["A reciprocal equation", S`Solve \(2\sec^2x-\tan^2x-5=0\) on \([0,2\pi]\), exactly.`,
      [S`\(\sec^2x=1+\tan^2x\): \(2+2\tan^2x-\tan^2x-5=0\Rightarrow\tan^2x=3\).`, S`\(\tan x=\pm\sqrt3\): reference angle \(\frac\pi3\), one solution in each quadrant.`],
      S`\(x=\frac\pi3,\ \frac{2\pi}3,\ \frac{4\pi}3,\ \frac{5\pi}3\)`],
  ], [
    q("hard", S`Solve \(2\sin^2x+\sin x=0\) on \([0,2\pi)\). Enter decimals (2 places).`, rootsT(0.01, 0, 3.14, 3.67, 5.76),
      "Factor out sin x.", [S`\(\sin x=0\): \(0,\pi\). \(\sin x=-\frac12\): \(\frac{7\pi}6,\frac{11\pi}6\).`], S`\(x=0,\ 3.14,\ 3.67,\ 5.76\)`),
    q("hard", S`Solve \(\tan^2x-3\tan x+2=0\) on \([0,\pi)\). Enter decimals (2 places).`, rootsT(0.01, 0.79, 1.11),
      "Factor.", [S`\(\tan x=1\) or \(2\): \(\frac\pi4\) and \(\tan^{-1}2\approx1.11\).`], S`\(x=0.79,\ 1.11\)`),
    q("hard", S`How many solutions does \(\cos2x=\cos x\) have on \([0,2\pi)\)?`, num(3),
      "2cos²x − cos x − 1 = 0.", [S`\(\cos x=1\): \(0\). \(\cos x=-\frac12\): \(\frac{2\pi}3,\frac{4\pi}3\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Why specify an interval?", "A periodic function repeats, so without an interval there are infinitely many solutions."],
      ["Why not divide by cos x?", "cos x may be 0, which is a solution. Dividing loses it. Factoring keeps it."],
      ["How do I find the general solution?", "Add a multiple of the period: x = π/6 + 2nπ, for instance."],
      ["What does my calculator give?", "One principal value. Use CAST to find the others."],
      ["When is there no solution?", "When a value outside [−1, 1] is required of sine or cosine."],
    ],
    summary: [
      "Isolate the ratio, find the reference angle, and apply CAST.",
      "Factor quadratic equations; never divide by a ratio.",
      "For sin kx, list angles over k cycles and then divide by k.",
      "Use identities to get a single ratio.",
    ],
    next: "5.5 applies these skills to models with rates of change.",
  }),
];
