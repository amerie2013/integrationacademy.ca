// MHF4U 5.1 — Graphs of Sine, Cosine and Tangent (NEW): key features in radians, intervals of increase and decrease,
// asymptotes of tangent, and rates of change on the curves
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { TG, PI } from "./trigfig.mjs";

export const TITLE = "5.1 Graphs of Sine, Cosine and Tangent";
export const ID = "6d4f0005-0001-4001-8001-000000000501";

const S = String.raw;
const W = { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 };
const lab = (x, y, label, color = "blue") => ({ x, y, label, color });
const tanPieces = (a, b) => { const out = []; for (let n = -4; n <= 4; n++) { const c = n * PI, l = Math.max(a, c - PI / 2 + 0.02), r = Math.min(b, c + PI / 2 - 0.02); if (l < r) out.push({ f: Math.tan, a: l, b: r, color: "violet" }); } return out; };
const tanFig = (view, points = []) => plane({ view, curves: tanPieces(view.xmin, view.xmax), vlines: [-3, -1, 1, 3].map((k) => k * PI / 2).filter((x) => x > view.xmin && x < view.xmax).map((x) => ({ x, color: "red", dash: true })), points, step: { x: 1, y: 1 }, xlabel: "x (rad)" });
export const blocks = () => [
  intro({
    icon: "🌊",
    title: "Graphs of Sine, Cosine and Tangent",
    overview: S`Unwrap the unit circle along the x-axis and the height of the moving point draws the sine wave. Its x-coordinate draws the cosine wave. Their ratio, tangent, has a very different shape: it repeats every \(\pi\) and has vertical asymptotes wherever cosine is 0. In this lesson the x-axis is in radians, as it will be from now on.`,
    goals: [
      "sketch \\(y=\\sin x\\), \\(y=\\cos x\\) and \\(y=\\tan x\\) in radians;",
      "state period, amplitude, domain, range, intercepts and asymptotes;",
      "give intervals of increase and decrease;",
      "use a graph to count solutions of an equation;",
      "compare average and instantaneous rates of change on the curves.",
    ],
    curriculum: "B2.1 (sketch sin x, cos x and tan x in radians), B2.2 (key properties)",
    prior: [
      [S`\(\sin\frac\pi2\)?`, S`\(1\).`],
      [S`\(\cos\pi\)?`, S`\(-1\).`],
      [S`Why is \(\tan\frac\pi2\) not defined?`, S`\(\cos\frac\pi2=0\).`],
    ],
    words: [
      ["Period", "the length of one full cycle", "\\(2\\pi\\) for sine"],
      ["Amplitude", "half the distance between max and min", "1 for sine"],
      ["Periodic function", "repeats its values at regular intervals", ""],
      ["Asymptote of tan", "where cos x = 0", "\\(x=\\frac\\pi2+n\\pi\\)"],
    ],
  }),

  section("📌 Comparing the three", S`
  ${table(["Feature", "y = sin x", "y = cos x", "y = tan x"], [
    ["period", "2π", "2π", "π"],
    ["amplitude", "1", "1", "none"],
    ["range", "[−1, 1]", "[−1, 1]", "all real numbers"],
    ["zeros", "nπ", "π/2 + nπ", "nπ"],
    ["max", "1 at π/2 + 2nπ", "1 at 2nπ", "none"],
    ["asymptotes", "none", "none", "x = π/2 + nπ"],
  ])}
  ${plane(TG([[Math.sin, "violet"], [Math.cos, "green"]], W, [lab(PI / 2, 1, "π/2"), lab(PI, 0, "π"), lab(2 * PI, 0, "2π")]), "sin x (violet) and cos x (green) on a radian axis.")}
  ${keyIdea(S`Learn five key points for one cycle: \(0,\ \frac\pi2,\ \pi,\ \frac{3\pi}2,\ 2\pi\). Sine goes \(0,1,0,-1,0\). Cosine goes \(1,0,-1,0,1\). Tangent is built from \(\tan x=\frac{\sin x}{\cos x}\).`)}`),

  section("📌 Explore", S`<p>Switch between sin, cos and tan. Read the period, range and zeros from each curve, and see how the zeros of cosine become the asymptotes of tangent.</p>`),

  widget("ibTrigGraph", { init: 2 }),

  section("📌 Tangent", S`
  ${tanFig({ xmin: -6.5, xmax: 6.5, ymin: -5, ymax: 5 })}
  ${watchOut([
    "Tangent's period is π, not 2π.",
    "Tangent increases on each interval, but it is not increasing on its whole domain.",
    "Use radians on the axis: mark π/2 ≈ 1.57, π ≈ 3.14, 2π ≈ 6.28.",
    "Do not join the branches of tangent across an asymptote.",
    "Sine is odd and cosine is even: compare both sides of the y-axis.",
  ])}`),

  examples([
    ["Reading sine", S`For \(y=\sin x\) on \([0,2\pi]\), list the zeros, the maximum and minimum points, and the intervals of increase.`,
      [S`Zeros \(0,\ \pi,\ 2\pi\).`, S`Max \(\left(\frac\pi2,1\right)\), min \(\left(\frac{3\pi}2,-1\right)\).`, S`Increasing before the max and after the min.`],
      S`increasing on \(\left[0,\frac\pi2\right)\) and \(\left(\frac{3\pi}2,2\pi\right]\)`,
      plane(TG([[Math.sin, "violet"]], { xmin: -0.5, xmax: 7, ymin: -2, ymax: 2 }, [lab(PI / 2, 1, "(π/2, 1)"), lab((3 * PI) / 2, -1, "(3π/2, −1)", "red")]))],
    ["Reading cosine", S`For \(y=\cos x\) on \([0,2\pi]\), state where it is decreasing and where \(\cos x\lt0\).`,
      [S`It falls from \(1\) at \(0\) to \(-1\) at \(\pi\).`, S`Below the axis between its zeros \(\frac\pi2\) and \(\frac{3\pi}2\).`],
      S`decreasing on \((0,\pi)\); negative on \(\left(\frac\pi2,\frac{3\pi}2\right)\)`,
      plane(TG([[Math.cos, "green"]], { xmin: -0.5, xmax: 7, ymin: -2, ymax: 2 }, [lab(PI / 2, 0, "π/2"), lab((3 * PI) / 2, 0, "3π/2")]))],
    ["Tangent's asymptotes", S`State the asymptotes and zeros of \(y=\tan x\) on \([-\pi,\pi]\).`,
      [S`Asymptotes where \(\cos x=0\): \(x=\pm\frac\pi2\).`, S`Zeros where \(\sin x=0\): \(x=-\pi,\ 0,\ \pi\).`],
      S`asymptotes \(x=\pm\frac\pi2\); zeros \(-\pi,\ 0,\ \pi\)`,
      tanFig({ xmin: -3.5, xmax: 3.5, ymin: -5, ymax: 5 }, [lab(PI / 4, 1, "(π/4, 1)")])],
    ["Where the curves meet", S`Use the graphs to find where \(\sin x=\cos x\) on \([0,2\pi]\).`,
      [S`They meet where \(\tan x=1\).`, S`\(x=\frac\pi4\) and \(x=\frac\pi4+\pi=\frac{5\pi}4\).`],
      S`\(x=\frac\pi4,\ \frac{5\pi}4\)`,
      plane(TG([[Math.sin, "violet"], [Math.cos, "green"]], { xmin: -0.5, xmax: 7, ymin: -2, ymax: 2 }, [lab(PI / 4, Math.SQRT1_2, "π/4"), lab((5 * PI) / 4, -Math.SQRT1_2, "5π/4")]))],
    ["Average rate of change", S`Find the average rate of change of \(y=\sin x\) on \(\left[0,\frac\pi2\right]\) and on \(\left[\frac\pi2,\pi\right]\).`,
      [S`\(\frac{1-0}{\pi/2}=\frac2\pi\approx0.64\).`, S`\(\frac{0-1}{\pi/2}=-\frac2\pi\approx-0.64\).`],
      S`\(\frac2\pi\) and \(-\frac2\pi\)`],
  ]),

  practice([
    q("period", S`What is the period of \(y=\tan x\)? (2 decimals)`, num(3.14, 0.01),
      "It repeats every π.", [S`\(\pi\approx3.14\).`], S`\(3.14\)`),
    q("max", S`What is the maximum value of \(y=\cos x\)?`, num(1),
      "Read the top of the wave.", [S`\(1\).`], S`\(1\)`),
    q("zeros", S`How many zeros does \(y=\sin x\) have on \([0,2\pi]\)?`, num(3),
      "List them.", [S`\(0,\ \pi,\ 2\pi\).`], S`\(3\)`),
    q("asymptotes", S`How many asymptotes does \(y=\tan x\) have on \([0,2\pi]\)?`, num(2),
      "x = π/2 + nπ.", [S`\(\frac\pi2\) and \(\frac{3\pi}2\).`], S`\(2\)`),
    q("interval", S`On which interval is \(y=\cos x\) increasing?`, choice([S`\((\pi,2\pi)\)`, S`\((0,\pi)\)`, S`\(\left(0,\frac\pi2\right)\)`, S`\(\left(\frac\pi2,\pi\right)\)`], 0),
      "It rises from its min at π.", [S`\((\pi,2\pi)\).`], S`\((\pi,2\pi)\)`),
  ]),

  ...hard([
    ["Counting solutions", S`How many solutions does \(\sin x=0.3\) have on \([-2\pi,2\pi]\)? Explain with the graph, without solving.`,
      [S`The line \(y=0.3\) lies between \(-1\) and \(1\), so it crosses each full cycle twice.`, S`\([-2\pi,2\pi]\) contains two full cycles.`],
      S`\(4\) solutions`,
      plane(TG([[Math.sin, "violet"], [() => 0.3, "green"]], W))],
    ["Slope at a point", S`Estimate the instantaneous rate of change of \(y=\sin x\) at \(x=0\), and of \(y=\tan x\) at \(x=\frac\pi4\), using a short interval.`,
      [S`\(\frac{\sin0.001-\sin0}{0.001}\approx1\).`, S`\(\frac{\tan(\pi/4+0.001)-\tan(\pi/4)}{0.001}\approx2.00\).`],
      S`about \(1\) and about \(2\)`,
      tanFig({ xmin: -1.4, xmax: 1.4, ymin: -3, ymax: 3 }, [lab(PI / 4, 1, "(π/4, 1)")])],
  ], [
    q("hard", S`Find the average rate of change of \(y=\sin x\) on \(\left[0,\frac\pi6\right]\) (3 decimals).`, num(0.955, 0.002),
      "Rise over run.", [S`\(\frac{0.5}{\pi/6}=\frac3\pi\).`], S`\(0.955\)`),
    q("hard", S`Evaluate \(\tan\left(\dfrac{5\pi}4\right)\) using the period of tangent.`, num(1),
      "Subtract π.", [S`\(\tan\frac\pi4\).`], S`\(1\)`),
    q("hard", S`Find the sum of the zeros of \(y=\cos x\) on \([0,2\pi]\) (2 decimals).`, num(6.28, 0.01),
      "π/2 and 3π/2.", [S`\(2\pi\).`], S`\(6.28\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is the amplitude of tangent not defined?", "It has no maximum or minimum: it takes every real value."],
      ["Why does tangent repeat every π?", "Half a turn changes both sine and cosine in sign, so their ratio stays the same."],
      ["How does this connect to the unit circle?", "Sine is the height of the moving point and cosine is its horizontal position."],
      ["Which functions have symmetry?", "Cosine is even; sine and tangent are odd."],
      ["Why are rates of change useful here?", "The slope tells how fast a wave is changing; it is largest at the axis and 0 at the peaks."],
    ],
    summary: [
      "sin and cos: period 2π, amplitude 1, range [−1, 1].",
      "tan: period π, range all reals, asymptotes at x = π/2 + nπ.",
      "Five key points set up one cycle.",
      "The slope of sin x is greatest at its zeros and 0 at its peaks.",
    ],
    next: "5.2 graphs the reciprocal functions csc, sec and cot.",
  }),
];
