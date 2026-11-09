// MCF3M 6.1 — Periodic Functions: cycle, period, maximum/minimum, axis, amplitude; reading periodic graphs,
// predicting values with f(x + p) = f(x), sketching from a description.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { SG, sd, cd, repeat, P } from "./sfig.mjs";
const S = String.raw;

export const TITLE = "6.1 Periodic Functions";
const lock = repeat([[0, 2], [6, 10], [8, 10], [12, 2]], 12, 3);
const pedal = (t) => 28 + 17 * sd(120 * t);
const wheel = (t) => 10 - 8 * cd(9 * t);

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Periodic Functions",
    overview: S`Many things repeat: tides, heartbeats, the height of a Ferris-wheel seat, the length of daylight over a year. A function whose graph repeats the same pattern over and over is called <b>periodic</b>. Once you know one complete <b>cycle</b>, you know the whole graph — and you can predict values far into the future. This lesson builds the vocabulary used for the rest of the chapter: period, maximum, minimum, axis and amplitude.`,
    goals: [
      "decide whether a graph or a situation is periodic;",
      "identify a cycle and state the period;",
      "find the maximum, minimum, equation of the axis and amplitude;",
      "predict values using f(x + period) = f(x);",
      "sketch a periodic graph from a description.",
    ],
    curriculum: "C2.1 (describe key properties of periodic functions arising from real-world applications), C2.2 (predict, by extrapolating, future behaviour of a periodic relationship)",
    prior: [
      [S`Find the mean of \(14\) and \(2\).`, S`\(\frac{14+2}2=8\).`],
      [S`Find half the difference of \(14\) and \(2\).`, S`\(\frac{14-2}2=6\).`],
      [S`What is the remainder when \(50\) is divided by \(8\)?`, S`\(50=6\times8+2\), remainder \(2\).`],
    ],
    words: [
      ["Periodic function", "a function whose graph repeats a pattern at regular intervals", "tides, heartbeats"],
      ["Cycle", "one complete repetition of the pattern", "peak to next peak"],
      ["Period", "the horizontal length of one cycle", "12 h for a tide"],
      ["Axis", "the horizontal line halfway between max and min: y = (max + min)/2", "y = 6"],
      ["Amplitude", "half the distance from max to min: (max − min)/2", "4"],
    ],
  }),

  section("📌 Reading a periodic graph", S`
  <p>The graph shows the water depth in a canal lock that fills for \(6\) minutes, stays full for \(2\) minutes and then drains for \(4\) minutes, over and over.</p>
  ${SG([], { base: false, segs: [lock], view: { xmin: 0, xmax: 36, ymin: 0, ymax: 12 }, step: { x: 4, y: 2 }, lines: [{ m: 0, b: 6, color: "green", dash: true, label: "axis y = 6" }], xlabel: "t (min)", ylabel: "depth (m)", cap: "A periodic graph: every 12 minutes the pattern repeats." })}
  ${table(["Property", "How to find it", "Lock"], [
    ["period", "horizontal distance between matching points", "12 min"],
    ["maximum / minimum", "highest / lowest y-value", "10 m / 2 m"],
    ["equation of the axis", "\\(y=\\frac{\\max+\\min}2\\)", "\\(y=6\\)"],
    ["amplitude", "\\(\\frac{\\max-\\min}2\\)", "4 m"],
  ])}
  ${keyIdea(S`If the period is \(p\), then \(f(x+p)=f(x)\) for every \(x\). To predict a far-off value, subtract whole periods until you land inside the first cycle.`)}`),

  widget("periodicReader", { shape: "pulse" }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "The period is a horizontal length (time), not a height.",
    "Measure the period between MATCHING points (peak to peak, not peak to trough — that is half a period).",
    "Amplitude is half of max − min, not the maximum itself.",
    "The axis is a line: write it as an equation y = …",
    "A pattern that changes size each time (a damped bounce) is not periodic.",
  ])}`),

  examples([
    ["Periodic or not?", S`Decide whether each is periodic: (a) the canal-lock depth shown above; (b) the height of a bouncing ball that loses height each bounce; (c) the time shown on a digital clock's minute digit over an hour.`,
      [S`<b>(a)</b> The same shape repeats every \(12\) min, so it is periodic.`,
        S`<b>(b)</b> Each bounce is lower than the one before, so no single cycle repeats exactly: not periodic.`,
        S`<b>(c)</b> The units-of-minute digit runs \(0,1,\dots,9\) and starts again every \(10\) minutes: periodic with period \(10\) min.`,
        S`<b>Test used.</b> A graph is periodic only if one piece, shifted by a fixed amount, lands exactly on the next piece.`],
      S`(a) periodic; (b) not periodic; (c) periodic, period 10 min`,
      SG([], { base: false, segs: [lock], view: { xmin: 0, xmax: 36, ymin: 0, ymax: 12 }, step: { x: 4, y: 2 }, xlabel: "t (min)", ylabel: "depth (m)" })],

    ["All the properties", S`For the canal lock, state the period, maximum, minimum, equation of the axis and amplitude, and the domain and range for the first hour.`,
      [S`<b>Period.</b> The rises start at \(t=0,12,24\): period \(12\) min.`,
        S`<b>Max and min.</b> Highest depth \(10\) m, lowest \(2\) m.`,
        S`<b>Axis.</b> \(y=\frac{10+2}2=6\).`,
        S`<b>Amplitude.</b> \(\frac{10-2}2=4\) m — the axis is \(4\) m from both the max and the min.`,
        S`<b>Domain and range.</b> \(0\le t\le60\); \(2\le d\le10\).`],
      S`period 12 min, max 10 m, min 2 m, axis y = 6, amplitude 4 m`,
      SG([], { base: false, segs: [lock], view: { xmin: 0, xmax: 36, ymin: 0, ymax: 12 }, step: { x: 4, y: 2 }, lines: [{ m: 0, b: 10, color: "red", dash: true, label: "max 10" }, { m: 0, b: 2, color: "blue", dash: true, label: "min 2" }, { m: 0, b: 6, color: "green", dash: true, label: "axis 6" }], xlabel: "t (min)", ylabel: "depth (m)" })],

    ["Predicting far ahead", S`For the canal lock, find the depth at \(t=50\) min and at \(t=99\) min.`,
      [S`<b>Remove whole periods.</b> \(50=4\times12+2\), so \(d(50)=d(2)\).`,
        S`<b>Read the first cycle.</b> On \(0\le t\le6\) the depth rises \(8\) m in \(6\) min, i.e. \(\frac43\) m/min: \(d(2)=2+\frac43(2)\approx4.67\) m.`,
        S`<b>Second value.</b> \(99=8\times12+3\), so \(d(99)=d(3)=2+\frac43(3)=6\) m.`,
        S`<b>Check.</b> At \(t=3\) the lock is half-way through filling, so it should be on the axis \(y=6\) ✓`],
      S`d(50) ≈ 4.67 m, d(99) = 6 m`,
      SG([], { base: false, segs: [lock], view: { xmin: 0, xmax: 36, ymin: 0, ymax: 12 }, step: { x: 4, y: 2 }, points: [P(2, 4.67, "(2, 4.67)"), P(3, 6, "(3, 6)", "red"), P(14, 4.67, "(14, 4.67)")], xlabel: "t (min)", ylabel: "depth (m)" })],

    ["A bicycle pedal", S`The height of a pedal above the ground is graphed for the first \(6\) s of a ride. Use the graph (peaks at \(t=0.75\) s and \(t=3.75\) s, highest \(45\) cm, lowest \(11\) cm) to find the period, axis and amplitude, and the height at \(t=7.5\) s.`,
      [S`<b>Period.</b> Peak to peak: \(3.75-0.75=3\) s.`,
        S`<b>Axis.</b> \(y=\frac{45+11}2=28\) cm — the height of the crank's centre.`,
        S`<b>Amplitude.</b> \(\frac{45-11}2=17\) cm — the crank's length.`,
        S`<b>Prediction.</b> \(7.5=2\times3+1.5\), so \(h(7.5)=h(1.5)\). At \(t=1.5\) s (half-way between the peak at \(0.75\) and the trough at \(2.25\)) the pedal is on the axis: \(28\) cm.`],
      S`period 3 s, axis y = 28, amplitude 17 cm, h(7.5) = 28 cm`,
      SG([{ f: pedal, color: "violet" }], { base: false, view: { xmin: 0, xmax: 6, ymin: 0, ymax: 50 }, step: { x: 0.75, y: 10 }, lines: [{ m: 0, b: 28, color: "green", dash: true, label: "y = 28" }], points: [P(0.75, 45), P(2.25, 11), P(3.75, 45)], xlabel: "t (s)", ylabel: "h (cm)" })],

    ["Sketch from a description", S`A Ferris wheel has radius \(8\) m and its hub is \(10\) m above the ground. It turns once every \(40\) s, and a rider boards at the bottom at \(t=0\). Sketch two cycles of height vs time and state the height at \(t=20\), \(30\) and \(130\) s.`,
      [S`<b>Key values.</b> Minimum \(10-8=2\) m (bottom), maximum \(10+8=18\) m (top), axis \(y=10\), amplitude \(8\) m, period \(40\) s.`,
        S`<b>Quarter points.</b> A quarter turn takes \(10\) s: \((0,2)\), \((10,10)\), \((20,18)\), \((30,10)\), \((40,2)\), then repeat.`,
        S`<b>Read values.</b> \(h(20)=18\) m (top), \(h(30)=10\) m (level with the hub).`,
        S`<b>Far value.</b> \(130=3\times40+10\Rightarrow h(130)=h(10)=10\) m.`],
      S`min 2 m, max 18 m, period 40 s; h(20) = 18, h(30) = 10, h(130) = 10 m`,
      SG([{ f: wheel, color: "violet" }], { base: false, view: { xmin: 0, xmax: 80, ymin: 0, ymax: 20 }, step: { x: 10, y: 2 }, lines: [{ m: 0, b: 10, color: "green", dash: true, label: "axis y = 10" }], points: [P(0, 2), P(20, 18), P(40, 2), P(60, 18)], xlabel: "t (s)", ylabel: "h (m)" })],
  ]),

  practice([
    q("amp", S`A periodic graph has maximum \(14\) and minimum \(2\). Find the amplitude.`, num(6), "(max − min)/2.", [S`\(\frac{14-2}2=6\).`], S`\(6\)`),
    q("axis", S`A tide goes between \(0.8\) m and \(5.2\) m. Find \(k\) if the axis is \(y=k\).`, num(3, 0.001), "(max + min)/2.", [S`\(\frac{0.8+5.2}2=3\).`], S`\(3\)`),
    q("period", S`Consecutive peaks of a periodic graph occur at \(t=3\) and \(t=11\). Find the period.`, num(8), "Peak to peak.", [S`\(11-3=8\).`], S`\(8\)`),
    q("predict", S`\(f\) is periodic with period \(6\) and \(f(1)=4\). Find \(f(25)\).`, num(4), "25 = 1 + 4(6).", [S`\(f(25)=f(1)=4\).`], S`\(4\)`),
    q("which", S`Which is periodic?`, choice(["the height of a point on a turning wheel", "the height of a bouncing ball that loses energy", "the population of a growing town", "the temperature of cooling coffee"], 0), "Does one cycle repeat exactly?", [S`Only the wheel repeats the same cycle.`], S`the height of a point on a turning wheel`),
  ]),

  ...hard([
    ["Tide timetable", S`High tide of \(4.2\) m occurs at 2:00 a.m., and the next low tide of \(0.6\) m is at 8:15 a.m. Find the amplitude, the axis, the period, and the time of the next high tide.`,
      [S`<b>Amplitude.</b> \(\frac{4.2-0.6}2=1.8\) m.`,
        S`<b>Axis.</b> \(y=\frac{4.2+0.6}2=2.4\).`,
        S`<b>Period.</b> High to low is half a cycle: \(6\) h \(15\) min, so the period is \(12\) h \(30\) min \(=12.5\) h.`,
        S`<b>Next high.</b> 2:00 a.m. \(+12\) h \(30\) min \(=\) 2:30 p.m.`],
      S`amplitude 1.8 m, axis y = 2.4, period 12.5 h, next high 2:30 p.m.`,
      SG([{ f: (t) => 2.4 + 1.8 * cd(28.8 * (t - 2)), color: "violet" }], { base: false, view: { xmin: 0, xmax: 26, ymin: 0, ymax: 5 }, step: { x: 2, y: 1 }, lines: [{ m: 0, b: 2.4, color: "green", dash: true, label: "y = 2.4" }], points: [P(2, 4.2, "2:00"), P(8.25, 0.6, "8:15"), P(14.5, 4.2, "14:30")], xlabel: "t (h)", ylabel: "depth (m)" })],
    ["Counting cycles", S`A lighthouse beam sweeps past a boat every \(7.5\) s. (a) How many times does it pass the boat in \(10\) minutes, if the first pass is at \(t=0\)? (b) If the beam's brightness at the boat is periodic with \(B(2)=40\), find \(B(902)\).`,
      [S`<b>(a)</b> \(600\div7.5=80\) complete periods; passes at \(t=0,7.5,\dots,600\): \(81\) passes.`,
        S`<b>(b)</b> \(902-2=900=120\times7.5\), a whole number of periods.`,
        S`So \(B(902)=B(2)=40\).`],
      S`81 passes; B(902) = 40`],
  ], [
    q("hard", S`Consecutive maximums of a periodic function are at \(x=40\) and \(x=130\). Find the period.`, num(90), "Difference.", [S`\(130-40=90\).`], S`\(90\)`),
    q("hard", S`A function has maximum \(7.4\) and minimum \(-1.2\). Find the amplitude.`, num(4.3, 0.001), "(max − min)/2.", [S`\(\frac{7.4+1.2}2=4.3\).`], S`\(4.3\)`),
    q("hard", S`For the same function, the axis is \(y=k\). Find \(k\).`, num(3.1, 0.001), "(max + min)/2.", [S`\(\frac{7.4-1.2}2=3.1\).`], S`\(3.1\)`),
    q("hard", S`\(f\) has period \(15\) and \(f(4)=-2\). Find \(f(-26)\).`, num(-2), "Add two periods.", [S`\(-26+30=4\), so \(f(-26)=f(4)=-2\).`], S`\(-2\)`),
    q("hard", S`A Ferris wheel takes \(72\) s per turn. How many turns does it make in \(15\) minutes?`, num(12.5, 0.001), "900 ÷ 72.", [S`\(\frac{900}{72}=12.5\).`], S`\(12.5\)`),
  ]),

  wrapUp({
    qas: [
      ["What makes a function periodic?", "One cycle repeats exactly at regular intervals: f(x + p) = f(x)."],
      ["How do I find the period?", "Measure the horizontal distance between two matching points, such as consecutive peaks."],
      ["How do I find the axis?", "y = (max + min)/2."],
      ["How do I find the amplitude?", "(max − min)/2: the distance from the axis to a peak."],
      ["How do I predict a far value?", "Subtract whole periods until x is in the first cycle, then read the graph."],
    ],
    summary: [
      "Periodic: repeats the same cycle.",
      "Period = length of one cycle.",
      "Axis y = (max + min)/2; amplitude = (max − min)/2.",
      "f(x + p) = f(x) predicts far-off values.",
    ],
    next: "6.2 builds the most important periodic function: y = sin x.",
  }),
];
