// MCR3U 6.1 — Periodic Functions and Their Properties: cycle, period, amplitude, axis; reading graphs and tables;
// predicting future values by extrapolating
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";

export const TITLE = "6.1 Periodic Functions and Their Properties";
export const ID = "de1a3d15-2246-4adc-b169-4a3858e4f351";
const S = String.raw;
const r = (d) => (d * Math.PI) / 180;
const zig = (t) => [2, 5, 8, 5][((t % 4) + 4) % 4];

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Periodic Functions and Their Properties",
    overview: S`Tides, heartbeats, the seasons and a turning wheel all repeat. A function whose values repeat at regular intervals is <strong>periodic</strong>. In this lesson you will recognise periodic behaviour in graphs, tables and descriptions, read its <strong>period</strong>, <strong>axis</strong> and <strong>amplitude</strong>, and use the repeating pattern to predict values far into the future.`,
    goals: [
      "decide whether a graph, table or situation is periodic;",
      "identify one cycle and measure the period;",
      "find the axis and amplitude from the maximum and minimum;",
      "predict future values using the period;",
      "explain what each property means in context.",
    ],
    curriculum: "D2.1 (describe key properties of periodic functions arising from real-world applications, given numeric or graphical representations), D2.2 (predict, by extrapolating, the future behaviour of a relationship modelled using a numeric or graphical representation of a periodic function)",
    prior: [
      ["What is the average of 3 and 11?", "7."],
      ["What is the remainder when 23 is divided by 4?", "3."],
      ["Half the distance from −2 to 8 is …", "5."],
    ],
    words: [
      ["Cycle", "one complete repeat of the pattern", ""],
      ["Period", "the horizontal length of one cycle", ""],
      ["Axis", "the horizontal line halfway between the max and min: \\(y=\\frac{\\max+\\min}2\\)", ""],
      ["Amplitude", "the vertical distance from the axis to a max: \\(\\frac{\\max-\\min}2\\)", ""],
    ],
  }),

  section("📌 Reading the properties", S`
  ${plane({ view: { xmin: 0, xmax: 24, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 4 * Math.sin(r(45 * x)) + 5, color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true, label: "axis y = 5" }], points: [{ x: 2, y: 9, label: "max 9" }, { x: 6, y: 1, label: "min 1" }, { x: 10, y: 9, label: "next max" }], step: { x: 2, y: 1 } }, "period = 10 − 2 = 8; amplitude = (9 − 1)/2 = 4")}
  ${table(["Property", "How to find it"], [["Period", "distance between two consecutive maximums (or any two matching points)"], ["Axis", "\\(y=\\frac{\\max+\\min}2\\)"], ["Amplitude", "\\(\\frac{\\max-\\min}2\\) — always positive"], ["Range", "\\(\\min\\le y\\le\\max\\)"]])}
  ${keyIdea(S`If a function has period \(p\), then \(f(x+p)=f(x)\) for every \(x\). To predict a far-away value, subtract whole periods until you land inside a cycle you know.`)}`),

  section("📌 Explore", S`<p>Choose a situation. Slide the shaded window along the graph: if the value one period later always matches, the function is periodic.</p>`),

  widget("periodicReader", { shape: "tide" }),

  section("📌 Watch out", watchOut([
    "Amplitude is half of (max − min), not the max itself.",
    "Measure the period horizontally (in time or angle), never vertically.",
    "Something that goes up and down is not periodic unless the pattern repeats exactly.",
    "Keep units: a period in seconds, an amplitude in metres, and so on.",
  ])),

  examples([
    ["Periodic or not?", "Which are periodic? (a) the height of a swinging pendulum bob, (b) the average monthly temperature over many years, (c) the height of a thrown ball.",
      [S`<b>Definition.</b> A function is periodic if its values repeat in the same pattern over equal intervals.`,
        S`<b>(a) Pendulum.</b> The bob rises and falls in the same way on every swing, so the pattern repeats. It is periodic (ignoring slow friction losses).`,
        S`<b>(b) Temperature.</b> January to December gives a similar pattern each year, with a period of 12 months. It is periodic.`,
        S`<b>(c) Thrown ball.</b> It goes up once and comes down once, and then the motion ends. Nothing repeats, so it is not periodic.`,
        S`<b>Check on the graph.</b> The figure shows the shape of (a) and (b) repeating, and (c) as a single arch.`],
      "(a) and (b) are periodic; (c) is not",
      plane({ view: { xmin: 0, xmax: 24, ymin: -2, ymax: 12 }, curves: [{ f: (x) => 3 + 3 * Math.sin(r(30 * x)), color: "violet" }, { f: (x) => -0.5 * x * (x - 12), a: 0, b: 12, color: "red" }], step: { x: 2, y: 2 } }, "violet repeats (periodic); red is one arch (not periodic)")],
    ["Properties from a graph", "The graph has maximums at x = 2 and x = 10 and minimums at x = 6 and x = 14. State the period, axis, amplitude and range.",
      [S`<b>Read the extremes.</b> From the graph, the maximum value is 9 and the minimum value is 1.`,
        S`<b>Period.</b> It is the horizontal distance for one full cycle. From one maximum to the next: \(10-2=8\).`,
        S`<b>Axis.</b> It is the horizontal line halfway between the extremes: \(y=\frac{9+1}2=5\).`,
        S`<b>Amplitude.</b> It is the distance from the axis to a maximum: \(\frac{9-1}2=4\).`,
        S`<b>Range and check.</b> The values run from 1 to 9. Check: \(5+4=9\) and \(5-4=1\) ✓`],
      S`period 8, axis \(y=5\), amplitude 4, range \(1\le y\le9\)`,
      plane({ view: { xmin: -1, xmax: 17, ymin: 0, ymax: 10 }, curves: [{ f: (x) => 5 + 4 * Math.sin(r(45 * x)), color: "violet" }], lines: [{ m: 0, b: 5, color: "green", dash: true }], points: [{ x: 2, y: 9, label: "(2, 9)", color: "amber" }, { x: 10, y: 9, label: "(10, 9)", color: "amber" }, { x: 6, y: 1, label: "(6, 1)" }, { x: 14, y: 1, label: "(14, 1)" }], step: { x: 1, y: 1 } })],
    ["Properties from a table", S`A sprinkler head's height (cm) every second: \(t=0,1,\ldots,8\) gives \(2,5,8,5,2,5,8,5,2\). Find the period, axis and amplitude.`,
      [S`<b>Organize the data.</b> ${tv(["\\(t\\) (s)", "0", "1", "2", "3", "4", "5", "6", "7", "8"], ["\\(h\\) (cm)", "2", "5", "8", "5", "2", "5", "8", "5", "2"])}`,
        S`<b>Period.</b> The block \(2,5,8,5\) repeats, and it returns to 2 at \(t=4\). So the period is 4 s.`,
        S`<b>Extremes.</b> Max 8, min 2.`,
        S`<b>Axis.</b> \(h=\frac{8+2}2=5\) cm.`,
        S`<b>Amplitude.</b> \(\frac{8-2}2=3\) cm. Check: \(5\pm3\) gives 8 and 2 ✓`],
      "period 4 s, axis 5 cm, amplitude 3 cm",
      plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 10 }, segs: [{ pts: Array.from({ length: 9 }, (_, t) => [t, zig(t)]), color: "violet" }], points: Array.from({ length: 9 }, (_, t) => ({ x: t, y: zig(t) })), lines: [{ m: 0, b: 5, color: "green", dash: true }], step: { x: 1, y: 1 } })],
    ["Predicting by extrapolating", "For the sprinkler (period 4 s; heights 2, 5, 8, 5 at t = 0, 1, 2, 3), find the height at t = 23 s and at t = 42 s.",
      [S`<b>Idea.</b> A periodic function repeats, so removing whole periods does not change the value: \(f(t+4)=f(t)\).`,
        S`<b>\(t=23\).</b> Divide by the period: \(23=5\times4+3\). After 5 full cycles, 3 s remain, so \(f(23)=f(3)=5\).`,
        S`<b>\(t=42\).</b> \(42=10\times4+2\), so \(f(42)=f(2)=8\).`,
        S`<b>Check by counting.</b> Heights at \(t=20,21,22,23\) are \(2,5,8,5\), since 20 is a multiple of 4 ✓`],
      "5 cm and 8 cm",
      plane({ view: { xmin: 18, xmax: 26, ymin: 0, ymax: 10 }, segs: [{ pts: Array.from({ length: 9 }, (_, i) => [18 + i, zig(18 + i)]), color: "violet" }], points: [{ x: 20, y: 2, label: "(20, 2)" }, { x: 23, y: 5, label: "(23, 5)", color: "amber" }], step: { x: 1, y: 1 } }, "The pattern near t = 23.")],
    ["Counting cycles", "A windshield wiper sweeps out and back every 1.5 s. How many complete cycles does it make in one minute?",
      [S`<b>Identify the period.</b> One cycle is out and back, so the period is 1.5 s.`,
        S`<b>Match the units.</b> One minute is 60 s.`,
        S`<b>Divide.</b> Number of cycles \(=\frac{\text{total time}}{\text{period}}=\frac{60}{1.5}=40\).`,
        S`<b>Check.</b> \(40\times1.5=60\) s ✓. The wiper makes 40 cycles per minute, so its frequency is the reciprocal of its period in minutes.`],
      "40 cycles",
      plane({ view: { xmin: 0, xmax: 6.5, ymin: -1.5, ymax: 1.5 }, curves: [{ f: (t) => Math.sin((2 * Math.PI * t) / 1.5), color: "violet" }], points: [{ x: 0, y: 0, label: "(0, 0)" }, { x: 1.5, y: 0, label: "(1.5, 0)", color: "amber" }, { x: 3, y: 0, label: "(3, 0)", color: "amber" }], step: { x: 0.5, y: 0.5 }, xlabel: "t (s)", ylabel: "position" })],
  ]),

  practice([
    q("amplitude", "A periodic graph has a maximum of 14 and a minimum of 2. What is its amplitude?", num(6),
      "Half of max − min.", [S`\(\frac{14-2}2\).`], S`\(6\)`),
    q("axis", "For the same graph (max 14, min 2), what is the equation of the axis? Enter the y-value.", num(8),
      "Average of max and min.", [S`\(\frac{14+2}2\).`], S`\(y=8\)`),
    q("period", "Consecutive peaks of a periodic graph occur at t = 3 and t = 11. What is the period?", num(8),
      "Peak to peak.", [S`\(11-3\).`], S`\(8\)`),
    q("predict", S`A function has period 6 and \(f(2)=7\). Find \(f(26)\).`, num(7),
      "26 − 2 is a multiple of 6.", [S`\(26=2+4\times6\).`], S`\(7\)`),
    q("recognise", "Which is periodic?", choice(["the fraction of the moon that is lit, night by night", "your height from age 1 to 18", "a savings balance earning interest", "the temperature of cooling coffee"], 0),
      "Look for a pattern that repeats exactly.", ["The lunar cycle repeats about every 29.5 days."], "the lit fraction of the moon"),
  ]),

  ...hard([
    ["Using the period both ways", S`A periodic function has period 10, \(f(3)=4\) and \(f(7)=-2\). Find \(f(43)\) and \(f(-3)\).`,
      [S`\(43=3+4\times10\Rightarrow f(43)=4\).`, S`\(-3=7-10\Rightarrow f(-3)=f(7)=-2\).`],
      S`\(f(43)=4\), \(f(-3)=-2\)`],
    ["When does it happen?", "A rider's height (m) on a wheel, every 5 s from boarding, is 2, 9, 16, 9, 2, 9, 16, … At what times in the first minute is the rider at the top?",
      [S`The pattern 2, 9, 16, 9 repeats every 4 readings: period 20 s.`, S`Top at \(t=10\), then every 20 s.`],
      S`\(t=10,\ 30,\ 50\) s`,
      plane({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 18 }, curves: [{ f: (t) => 9 - 7 * Math.cos(r(18 * t)), color: "violet" }], points: [10, 30, 50].map((t) => ({ x: t, y: 16, label: `${t} s` })), step: { x: 5, y: 2 } })],
  ], [
    q("hard", "A heart beats with a period of 0.8 s. How many beats is that per minute?", num(75),
      "60 ÷ period.", [S`\(60\div0.8\).`], S`\(75\)`),
    q("hard", S`A function has period 12 and \(f(5)=9\). Find \(f(89)\).`, num(9),
      "89 − 5 = 84 = 7 × 12.", ["Seven whole periods."], S`\(9\)`),
    q("hard", "A periodic graph has a maximum of 7 and an amplitude of 5. What is its minimum?", num(-3),
      "max − 2 × amplitude.", [S`\(7-10\).`], S`\(-3\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I find the period from a graph?", "Measure the horizontal distance between two consecutive maximums (or any two points that start the same pattern)."],
      ["Why is amplitude half of max − min?", "It measures from the axis (the middle) up to a maximum, which is half the full height."],
      ["Can a periodic graph have sharp corners?", "Yes — a sawtooth or a pulse is periodic. Smooth ones like a wheel's are called sinusoidal."],
      ["How do I predict f(x) far away?", "Subtract whole periods from x until you reach a value you know."],
      ["Is every oscillation periodic?", "No — a bouncing spring that slows down never repeats exactly."],
    ],
    summary: [
      "Periodic: f(x + p) = f(x).",
      "Period: length of one cycle.",
      "Axis = (max + min)/2; amplitude = (max − min)/2.",
      "Predict by removing whole periods.",
    ],
    next: "6.2 builds the graphs of y = sin x and y = cos x from the unit circle.",
  }),
];
