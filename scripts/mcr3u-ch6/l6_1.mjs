// MCR3U 6.1 — Periodic Functions and Their Properties: cycle, period, amplitude, axis; reading graphs and tables;
// predicting future values by extrapolating
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

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
      ["(a) repeats every swing; (b) repeats every 12 months; (c) goes up and comes down once — no repeat."],
      "(a) and (b)"],
    ["Properties from a graph", "Use the graph in the box above to state the period, axis, amplitude and range.",
      [S`Maximums at \(x=2\) and \(x=10\): period 8.`, S`Axis \(y=\frac{9+1}2=5\); amplitude \(\frac{9-1}2=4\).`],
      S`period 8, axis \(y=5\), amplitude 4, range \(1\le y\le9\)`],
    ["Properties from a table", S`A sprinkler head's height (cm) every second: \(t=0,1,\ldots,8\) gives \(2,5,8,5,2,5,8,5,2\).`,
      [S`The values return to 2 every 4 s: period 4 s.`, S`Max 8, min 2: axis \(h=5\), amplitude 3.`],
      "period 4 s, axis 5 cm, amplitude 3 cm",
      plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 10 }, segs: [{ pts: Array.from({ length: 9 }, (_, t) => [t, zig(t)]), color: "violet" }], points: Array.from({ length: 9 }, (_, t) => ({ x: t, y: zig(t) })), step: { x: 1, y: 1 } })],
    ["Predicting by extrapolating", "For the sprinkler, find the height at t = 23 s and at t = 42 s.",
      [S`\(23=5\times4+3\): same as \(t=3\), height 5.`, S`\(42=10\times4+2\): same as \(t=2\), height 8.`],
      "5 cm and 8 cm"],
    ["Counting cycles", "A windshield wiper sweeps out and back every 1.5 s. How many complete cycles does it make in one minute?",
      [S`\(60\div1.5=40\).`],
      "40 cycles"],
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
