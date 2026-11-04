// MHF4U 5.6 — Chapter 5 Review (NEW lesson): graphs of the six functions, sinusoids, equations and models
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, rootsT, hard, plane } from "./lib.mjs";
import { TG, PI } from "./trigfig.mjs";

export const TITLE = "5.6 Chapter 5 Review";
export const ID = "6d4f0005-0001-4001-8001-000000000506";

const S = String.raw;
const lab = (x, y, label, color = "blue") => ({ x, y, label, color });
const V = { xmin: -0.5, xmax: 7, ymin: -3, ymax: 3 };
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 5 Review — Trigonometric Functions",
    overview: S`This page pulls the chapter together before the test: each lesson's key idea on one screen, multi-step examples that combine several skills, mixed practice, a readiness checklist and a hard level. Sketch each graph before looking at the figure.`,
    goals: [
      "recall the key idea and common mistake of each lesson;",
      "sketch sine, cosine, tangent and the reciprocal functions;",
      "read and write sinusoidal equations;",
      "solve linear and quadratic trigonometric equations;",
      "solve model problems with rates of change.",
    ],
    curriculum: "B2.1–B2.7, B3.4, D1.4, D1.8 (whole chapter)",
    prior: [
      [S`Asymptotes of \(\tan x\)?`, S`\(x=\frac\pi2+n\pi\).`],
      [S`Period of \(\sin3x\)?`, S`\(\frac{2\pi}3\).`],
      [S`\(\sin x=-1\) on \([0,2\pi]\)?`, S`\(\frac{3\pi}2\).`],
    ],
    words: [
      ["Period", "2π/|k|", ""],
      ["Amplitude", "|a|", ""],
      ["Phase shift", "d, after factoring k", ""],
      ["Reference angle", "acute angle for |ratio|", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Example", "Watch out"], [
    ["5.1 sin, cos, tan", "five key points; tan has asymptotes", "tan has period π", "tan does not have an amplitude"],
    ["5.2 Reciprocals", "zeros → asymptotes; ±1 fixed", "\\(\\csc x\\ge1\\) or \\(\\le-1\\)", "reciprocal ≠ inverse"],
    ["5.3 Sinusoids", "a, k, d, c", "\\(2\\sin(3(x-\\frac\\pi6))+1\\)", "factor k first"],
    ["5.4 Equations", "isolate, reference angle, CAST", "\\(2\\sin x=1\\): \\(\\frac\\pi6,\\frac{5\\pi}6\\)", "do not divide by a ratio"],
    ["5.5 Models", "axis, amplitude, period; rates", "\\(3\\sin\\frac\\pi6t+5\\)", "use radians"],
  ])),

  section("📌 Explore", S`<p>Use the solver to check your work on the equations below.</p>`),

  widget("ibTrigEq", { init: [1, -0.35] }),

  section("📌 The big picture", keyIdea(S`A trigonometric function repeats forever, so equations have many solutions, models describe cycles, and rates of change themselves rise and fall. Start every problem by identifying the period and the axis.`)),

  examples([
    ["A full sketch", S`Sketch \(y=-3\cos\left(2\left(x-\dfrac\pi4\right)\right)+1\) and state its key features.`,
      [S`Amplitude 3, reflected; period \(\pi\); shift \(\frac\pi4\) right; axis \(y=1\).`, S`Range \([-2,4]\). Min at \(x=\frac\pi4\), max at \(x=\frac{3\pi}4\).`],
      S`min \(\left(\frac\pi4,-2\right)\), max \(\left(\frac{3\pi}4,4\right)\)`,
      plane(TG([[(x) => -3 * Math.cos(2 * (x - PI / 4)) + 1, "violet"]], { xmin: -1, xmax: 7, ymin: -3, ymax: 5 }, [lab(PI / 4, -2, "(π/4, −2)"), lab((3 * PI) / 4, 4, "(3π/4, 4)", "red")]))],
    ["A reciprocal", S`State the asymptotes and range of \(y=\sec\left(x-\dfrac\pi4\right)\).`,
      [S`\(\cos\left(x-\frac\pi4\right)=0\) when \(x-\frac\pi4=\frac\pi2+n\pi\).`, S`\(x=\frac{3\pi}4+n\pi\). Range unchanged.`],
      S`\(x=\frac{3\pi}4+n\pi\); \(|y|\ge1\)`],
    ["An equation", S`Solve \(2\cos^2x+3\cos x+1=0\) on \([0,2\pi]\).`,
      [S`\((2\cos x+1)(\cos x+1)=0\).`, S`\(\cos x=-\frac12\): \(\frac{2\pi}3,\ \frac{4\pi}3\). \(\cos x=-1\): \(\pi\).`],
      S`\(x=\frac{2\pi}3,\ \pi,\ \frac{4\pi}3\)`,
      plane(TG([[(x) => 2 * Math.cos(x) ** 2 + 3 * Math.cos(x) + 1, "violet"]], V, [lab(PI, 0, "π")]))],
    ["An equation from features", S`A wave has max 10 at \(x=1\) and the next min \(-2\) at \(x=4\). Write a cosine equation.`,
      [S`Axis 4; amplitude 6; half period 3, so period 6 and \(k=\frac\pi3\).`, S`Shift \(d=1\).`],
      S`\(y=6\cos\left(\frac\pi3(x-1)\right)+4\)`,
      plane(TG([[(x) => 6 * Math.cos((PI / 3) * (x - 1)) + 4, "violet"]], { xmin: -1, xmax: 13, ymin: -3, ymax: 11 }, [lab(1, 10, "(1, 10)"), lab(4, -2, "(4, −2)", "red")]))],
    ["A model", S`A wheel has \(h(t)=-10\cos\left(\dfrac\pi{20}t\right)+12\). Find when \(h=17\) first, and the average rate on \([0,10]\).`,
      [S`\(\cos\frac\pi{20}t=-\frac12\Rightarrow\frac\pi{20}t=\frac{2\pi}3\Rightarrow t=\frac{40}3\approx13.3\).`, S`\(h(0)=2\), \(h(10)=12\): rate \(1\) m/s.`],
      S`\(t\approx13.3\) s; \(1\) m/s`],
  ]),

  practice([
    q("sinusoid", S`Find the period of \(y=3\sin\left(\dfrac{x}{2}\right)\) (2 decimals).`, num(12.57, 0.01),
      "2π/k.", [S`\(4\pi\).`], S`\(12.57\)`),
    q("reciprocal", S`How many asymptotes does \(y=\csc x\) have on \((0,2\pi)\)?`, num(1),
      "Only π is inside.", [S`\(x=\pi\).`], S`\(1\)`),
    q("equation", S`Solve \(\sqrt2\sin x+1=0\) on \([0,2\pi]\). Enter decimals (2 places).`, rootsT(0.01, 3.93, 5.5),
      "sin x = −√2/2.", [S`\(\frac{5\pi}4,\ \frac{7\pi}4\).`], S`\(x=3.93,\ 5.50\)`),
    q("value", S`Find the minimum of \(y=2\cos x-5\).`, num(-7),
      "c − |a|.", [S`\(-5-2\).`], S`\(-7\)`),
    q("model", S`A spring has \(y=4\sin(2t)\). Find the greatest rate of change.`, num(8),
      "|a|k.", [S`\(4\times2\).`], S`\(8\)`),
  ]),

  ...hard([
    ["An identity first", S`Solve \(\cos2x=3\sin x+2\) on \([0,2\pi]\).`,
      [S`\(1-2\sin^2x=3\sin x+2\Rightarrow2\sin^2x+3\sin x+1=0\).`, S`\((2\sin x+1)(\sin x+1)=0\): \(\sin x=-\frac12\) or \(\sin x=-1\).`],
      S`\(x=\frac{7\pi}6,\ \frac{3\pi}2,\ \frac{11\pi}6\)`,
      plane(TG([[(x) => Math.cos(2 * x), "violet"], [(x) => 3 * Math.sin(x) + 2, "green"]], { xmin: -0.5, xmax: 7, ymin: -2, ymax: 5 }))],
    ["Time and rate", S`A tide has high 9 m at \(t=3\) h, low 1 m at \(t=9\) h. Write \(d(t)\), find when it first falls to 7 m, and estimate the rate then.`,
      [S`Axis 5, amplitude 4, period 12: \(d=4\cos\left(\frac\pi6(t-3)\right)+5\).`, S`\(\cos\left(\frac\pi6(t-3)\right)=\frac12\Rightarrow\frac\pi6(t-3)=\frac\pi3\Rightarrow t=5\).`, S`Rate at \(t=5\): \(-4\cdot\frac\pi6\sin\frac\pi3\approx-1.81\) m/h.`],
      S`\(t=5\); about \(-1.81\) m/h`,
      plane(TG([[(t) => 4 * Math.cos((PI / 6) * (t - 3)) + 5, "violet"]], { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, [lab(5, 7, "(5, 7)")], { step: { x: 3, y: 1 }, xlabel: "t (h)" }))],
  ], [
    q("hard", S`How many solutions does \(\tan2x=1\) have on \([0,2\pi)\)?`, num(4),
      "Period π/2.", [S`Two full periods of \(\tan\) per \(\pi\), so 4.`], S`\(4\)`),
    q("hard", S`\(y=a\sin(kx)+c\) has max 7, min \(-1\) and period \(\dfrac\pi2\). Find \(a+k+c\).`, num(11),
      "a = 4, k = 4, c = 3.", [S`\(4+4+3\).`], S`\(11\)`),
    q("hard", S`Solve \(\sin x\cos x=\dfrac14\) on \(\left[0,\dfrac\pi2\right]\). Enter decimals (2 places).`, rootsT(0.01, 0.26, 1.31),
      "½ sin 2x = ¼.", [S`\(\sin2x=\frac12\): \(2x=\frac\pi6,\frac{5\pi}6\).`], S`\(x=0.26,\ 1.31\)`),
  ]),

  section("✅ Ready for the test?", S`<ul>
    <li>I can sketch all six trigonometric functions in radians, with asymptotes and key points.</li>
    <li>I can state amplitude, period, phase shift and axis, and write an equation from a graph.</li>
    <li>I can solve linear and quadratic equations, and equations with multiple angles or identities.</li>
    <li>I can build a model from a story and interpret it.</li>
    <li>I can find average rates and estimate instantaneous rates on a wave.</li>
  </ul>`),

  wrapUp({
    qas: [
      ["What should I check first on a graph?", "The period and the axis; then the amplitude and the shift."],
      ["What is the most common error?", "Forgetting to factor k, or using 2π/k incorrectly."],
      ["How can I avoid missing solutions?", "Sketch a graph, or count intersections before you start."],
      ["How do I check an equation from a graph?", "Substitute a max, a min and an axis point."],
      ["What comes next?", "Exponential and logarithmic functions, in chapter 6."],
    ],
    summary: [
      "sin, cos: period 2π; tan, cot: period π; reciprocals have asymptotes at the zeros.",
      "y = a sin(k(x − d)) + c.",
      "Isolate, reference angle, CAST.",
      "Models: axis, amplitude, period; rates: secants and short intervals.",
    ],
    next: "Chapter 6 introduces logarithms.",
  }),
];
