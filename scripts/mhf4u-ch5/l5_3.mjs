// MHF4U 5.3 — Sinusoidal Functions: y = a sin(k(x − d)) + c and y = a cos(k(x − d)) + c in radians, features,
// sketching, and equations from graphs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { TG, PI } from "./trigfig.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "5.3 Sinusoidal Functions";
export const ID = "a38fe526-5194-4ce5-9578-94944bcdaf6a";

const S = String.raw;
const lab = (x, y, label, color = "blue") => ({ x, y, label, color });
const G = (f, view, points = [], extra = {}) => plane(TG([[f, "violet"]], view, points, extra));
export const blocks = () => [
  intro({
    icon: "🎚️",
    title: "Sinusoidal Functions",
    overview: S`Every sinusoid is a sine or cosine wave that has been stretched and shifted: \(y=a\sin(k(x-d))+c\). Each parameter controls one feature. \(a\) sets the amplitude, \(k\) sets the period through \(\frac{2\pi}k\), \(d\) slides the wave sideways, and \(c\) moves the axis up or down. Reading the parameters from an equation, or from a graph, is the core skill of this lesson.`,
    goals: [
      "state amplitude, period, phase shift and vertical shift from an equation;",
      "factor out \\(k\\) before reading the phase shift;",
      "sketch one cycle using key points;",
      "find an equation from a graph or from given features;",
      "write one wave using either sine or cosine.",
    ],
    curriculum: "B2.4 (determine amplitude, period, phase shift), B2.5 (sketch transformed graphs), B2.6 (equations from graphs)",
    prior: [
      [S`Period of \(\sin x\)?`, S`\(2\pi\).`],
      [S`Max of \(2\sin x+1\)?`, S`\(3\).`],
      [S`Factor \(2x-\pi\).`, S`\(2\left(x-\frac\pi2\right)\).`],
    ],
    words: [
      ["Amplitude", "\\(|a|\\)", "half of max − min"],
      ["Period", "\\(\\frac{2\\pi}{|k|}\\)", ""],
      ["Phase shift", "horizontal shift d", "right if d > 0"],
      ["Axis of the curve", "\\(y=c\\)", "halfway between max and min"],
    ],
  }),

  section("📌 What each parameter does", S`
  ${table(["Parameter", "Effect", "For y = 3 sin(2(x − π/4)) + 1"], [
    ["|a|", "amplitude", "3"],
    ["2π/|k|", "period", "π"],
    ["d", "phase shift", "π/4 right"],
    ["c", "axis y = c", "y = 1"],
    ["c ± |a|", "max, min", "4, −2"],
  ])}
  ${G((x) => 3 * Math.sin(2 * (x - PI / 4)) + 1, { xmin: -3.5, xmax: 7, ymin: -3, ymax: 5 }, [lab(PI / 4, 1, "start (π/4, 1)")])}
  ${keyIdea(S`Always factor first. \(y=\sin(2x+\pi)\) is \(y=\sin\left(2\left(x+\frac\pi2\right)\right)\): the phase shift is \(\frac\pi2\) left, not \(\pi\) left.`)}`),

  section("📌 Explore", S`<p>Move one slider at a time: \(a\) changes the height, \(b\) (this page's \(k\)) squeezes the wave, \(c\) (this page's \(d\)) slides it, and \(d\) (this page's \(c\)) lifts it. Try to match \(y=1.5\sin(3x)-1\).</p>`),

  widget("ibSinusoid", { init: [1.5, 3, 0, -1, 0] }),

  section("📌 Sketching one cycle", S`
  <p>Start at \(x=d\) and mark the points at each quarter period. For sine the pattern of heights is axis, max, axis, min, axis. For cosine it is max, axis, min, axis, max. If \(a\lt0\), the pattern is reflected.</p>
  ${watchOut([
    "Period is 2π/k, not k. A bigger k makes the wave narrower.",
    "Factor out k before reading d.",
    "In y = sin(x − π/3), the shift is to the RIGHT.",
    "c does not change amplitude; a does not change the axis.",
    "There are infinitely many equations for one wave.",
  ])}`),

  examples([
    ["Reading the features", S`State the amplitude, period, phase shift and range of \(y=-2\cos\left(\dfrac12x\right)+3\).`,
      [S`<b>Form.</b> \(y=a\cos(k(x-d))+c\), with \(a=-2\), \(k=\frac12\), \(d=0\), \(c=3\).`,
        S`<b>Amplitude.</b> \(|a|=2\). The negative sign reflects the curve, so it starts at a minimum.`,
        S`<b>Period.</b> \(\dfrac{2\pi}{k}=\dfrac{2\pi}{1/2}=4\pi\).`,
        S`<b>Axis and range.</b> The axis is \(y=3\), so \(3-2\le y\le3+2\).`,
        S`<b>Check.</b> \(x=0\): \(-2+3=1\), the minimum. \(x=2\pi\): \(-2\cos\pi+3=5\), the maximum ✓`],
      S`amplitude 2, period \(4\pi\), no shift, range \([1,5]\)`,
      G((x) => -2 * Math.cos(x / 2) + 3, { xmin: -1, xmax: 13, ymin: -1, ymax: 6 }, [lab(0, 1, "(0, 1)"), lab(2 * PI, 5, "(2π, 5)")])],
    ["Factoring first", S`Find the phase shift of \(y=\sin(2x-\pi)\).`,
      [S`<b>Rule.</b> The shift is read from the form \(k(x-d)\), so \(k\) must be factored out.`,
        S`<b>Factor.</b> \(2x-\pi=2\left(x-\frac\pi2\right)\), so \(d=\frac\pi2\).`,
        S`<b>Common error.</b> The shift is not \(\pi\). The \(\pi\) is divided by \(k\).`,
        S`<b>Check.</b> The cycle starts where the inside is 0: \(2x-\pi=0\) gives \(x=\frac\pi2\) ✓`],
      S`\(\frac\pi2\) right`,
      plane(TG([[Math.sin, "gray"], [(x) => Math.sin(2 * x - PI), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))],
    ["Key points", S`List the key points of one cycle of \(y=3\sin\left(x-\dfrac\pi2\right)+1\).`,
      [S`<b>Features.</b> Amplitude 3, axis \(y=1\), period \(2\pi\), shift \(\frac\pi2\) right.`,
        S`<b>Step.</b> A quarter period is \(\frac\pi2\), starting at \(x=\frac\pi2\).`,
        S`<b>Table.</b> ${tv(["\\(x\\)", "\\(\\frac\\pi2\\)", "\\(\\pi\\)", "\\(\\frac{3\\pi}2\\)", "\\(2\\pi\\)", "\\(\\frac{5\\pi}2\\)"], ["position", "axis", "max", "axis", "min", "axis"], ["\\(y\\)", "\\(1\\)", "\\(4\\)", "\\(1\\)", "\\(-2\\)", "\\(1\\)"])}`,
        S`<b>Check.</b> \(x=\pi\): \(3\sin\frac\pi2+1=4\) ✓`],
      S`max \((\pi,4)\), min \((2\pi,-2)\)`,
      G((x) => 3 * Math.sin(x - PI / 2) + 1, { xmin: 0, xmax: 9, ymin: -3, ymax: 5 }, [lab(PI, 4, "(π, 4)"), lab(2 * PI, -2, "(2π, −2)", "red")])],
    ["An equation from a graph", S`A sinusoid has a maximum at \(\left(\dfrac\pi4,5\right)\) and the next minimum at \(\left(\dfrac{3\pi}4,1\right)\). Write an equation using cosine.`,
      [S`<b>Axis.</b> Halfway between the extremes: \(c=\frac{5+1}2=3\).`,
        S`<b>Amplitude.</b> \(a=\frac{5-1}2=2\).`,
        S`<b>Period.</b> Max to next min is half a period: \(\frac{3\pi}4-\frac\pi4=\frac\pi2\). So the period is \(\pi\) and \(k=\frac{2\pi}\pi=2\).`,
        S`<b>Shift.</b> Cosine starts at a max, so \(d=\frac\pi4\).`,
        S`<b>Check.</b> \(x=\frac{3\pi}4\): \(2\cos\left(2\cdot\frac\pi2\right)+3=2\cos\pi+3=1\) ✓`],
      S`\(y=2\cos\left(2\left(x-\frac\pi4\right)\right)+3\)`,
      G((x) => 2 * Math.cos(2 * (x - PI / 4)) + 3, { xmin: -1, xmax: 5, ymin: 0, ymax: 6 }, [lab(PI / 4, 5, "max"), lab((3 * PI) / 4, 1, "min", "red")])],
    ["A period without π", S`A wave has amplitude 4, period 12 and axis \(y=7\), and starts at the axis going up at \(x=0\). Write an equation.`,
      [S`<b>k.</b> \(k=\dfrac{2\pi}{\text{period}}=\dfrac{2\pi}{12}=\dfrac\pi6\).`,
        S`<b>Which curve.</b> Sine starts at the axis going up, so no shift is needed.`,
        S`<b>Assemble.</b> \(a=4\), \(c=7\): \(y=4\sin\left(\frac\pi6x\right)+7\).`,
        S`<b>Check.</b> A quarter period later, \(x=3\): \(4\sin\frac\pi2+7=11\), which is the max ✓`],
      S`\(y=4\sin\left(\frac\pi6x\right)+7\)`,
      G((x) => 4 * Math.sin((PI / 6) * x) + 7, { xmin: 0, xmax: 24, ymin: 0, ymax: 12 }, [lab(3, 11, "(3, 11)")], { step: { x: 3, y: 2 } })],
  ]),

  practice([
    q("amplitude", S`What is the amplitude of \(y=-5\sin3x+2\)?`, num(5),
      "|a|.", [S`\(5\).`], S`\(5\)`),
    q("period", S`Find the period of \(y=\cos\left(\dfrac\pi4x\right)\).`, num(8),
      "2π/k.", [S`\(\frac{2\pi}{\pi/4}=8\).`], S`\(8\)`),
    q("shift", S`What is the phase shift of \(y=\sin(3x+\pi)\)?`, choice([S`\(\frac\pi3\) left`, S`\(\pi\) left`, S`\(\frac\pi3\) right`, S`\(\pi\) right`], 0),
      "Factor out 3.", [S`\(3\left(x+\frac\pi3\right)\).`], S`\(\frac\pi3\) left`),
    q("maximum", S`What is the maximum of \(y=4\cos2x-1\)?`, num(3),
      "c + |a|.", [S`\(-1+4\).`], S`\(3\)`),
    q("axis", S`A wave has max 9 and min 1. What is \(c\)?`, num(5),
      "Average them.", [S`\(\frac{9+1}2\).`], S`\(5\)`),
  ]),

  ...hard([
    ["Two equations for one wave", S`Write \(y=2\sin\left(x+\dfrac\pi6\right)\) as a cosine function.`,
      [S`The sine's maximum is where \(x+\frac\pi6=\frac\pi2\): \(x=\frac\pi3\).`, S`A cosine with its max at \(x=\frac\pi3\) is \(2\cos\left(x-\frac\pi3\right)\).`, S`Check at \(x=0\): \(2\sin\frac\pi6=1\) and \(2\cos\frac\pi3=1\).`],
      S`\(y=2\cos\left(x-\frac\pi3\right)\)`,
      G((x) => 2 * Math.sin(x + PI / 6), { xmin: -6.5, xmax: 6.5, ymin: -3, ymax: 3 }, [lab(PI / 3, 2, "(π/3, 2)")])],
    ["Features from conditions", S`\(y=a\sin(kx)+c\), with \(a,k>0\), has period \(\dfrac{2\pi}3\), range \([-1,7]\). Find \(a\), \(k\), \(c\) and the first positive \(x\) where \(y=7\).`,
      [S`\(k=3\); \(c=3\); \(a=4\).`, S`Max where \(3x=\frac\pi2\): \(x=\frac\pi6\).`],
      S`\(y=4\sin3x+3\); \(x=\frac\pi6\)`,
      G((x) => 4 * Math.sin(3 * x) + 3, { xmin: -1, xmax: 4.5, ymin: -2, ymax: 8 }, [lab(PI / 6, 7, "(π/6, 7)")])],
  ], [
    q("hard", S`A sinusoid has max at \(x=2\) and the next min at \(x=5\). Find \(k\) (3 decimals).`, num(1.047, 0.002),
      "Half a period is 3.", [S`Period 6; \(k=\frac{2\pi}6=\frac\pi3\).`], S`\(1.047\)`),
    q("hard", S`Evaluate \(y=3\cos\left(2\left(x-\dfrac\pi3\right)\right)+1\) at \(x=\dfrac\pi3\).`, num(4),
      "cos 0 = 1.", [S`\(3+1\).`], S`\(4\)`),
    q("hard", S`How many maxima does \(y=\sin4x\) have on \([0,2\pi]\)?`, num(4),
      "Period π/2.", [S`\(\frac{2\pi}{\pi/2}=4\) cycles.`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is k not the period?", "k counts cycles per 2π. The period is the length of one cycle, 2π/k."],
      ["Which should I use, sine or cosine?", "Use whichever matches a clear point: cosine starts at a max, and sine starts at the axis going up."],
      ["Why factor out k?", "The form sin(k(x − d)) shows d directly: x must equal d to start the cycle."],
      ["What if a is negative?", "The wave is reflected in its axis: a max becomes a min."],
      ["How do I check an equation?", "Substitute a max, a min and an axis point."],
    ],
    summary: [
      "y = a sin(k(x − d)) + c.",
      "Amplitude |a|, period 2π/|k|, phase shift d, axis y = c.",
      "Max and min: c ± |a|.",
      "Factor k before you read d.",
    ],
    next: "5.4 solves trigonometric equations.",
  }),
];
