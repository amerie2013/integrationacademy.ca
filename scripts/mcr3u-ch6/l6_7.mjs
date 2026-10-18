// MCR3U 6.7 — Solving Problems with Sinusoidal Models: building models from descriptions and data, evaluating,
// changing conditions, and finding when a model is above or below a level
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.7 Solving Problems with Sinusoidal Models";
export const ID = "0fc2cffa-ef9d-44a4-9f91-57005caa3fe0";
const S = String.raw;
const r = (d) => (d * Math.PI) / 180, dg = (x) => (x * 180) / Math.PI;
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
const wheel = (t) => -12 * Math.cos(r(4.5 * t)) + 14;
const tide = (t) => 3.9 * Math.cos(r(28.8 * (t - 3))) + 5.3;
const day = (t) => 3.1 * Math.sin(r((360 / 365) * (t - 81))) + 12.2;
const spring = (t) => 10 * Math.cos(r(225 * t)) + 15;
const warmW = (2 * dg(Math.acos(0.625)) * 365) / 360;
const tideW = (2 * dg(Math.acos((7 - 5.3) / 3.9))) / 28.8;

export const blocks = () => [
  intro({
    icon: "🌊",
    title: "Solving Problems with Sinusoidal Models",
    overview: S`A sinusoidal model turns a repeating situation into an equation you can calculate with. From a description (a Ferris wheel, a tide, hours of daylight) you find the maximum, minimum, period and a starting point, and write \(y=a\sin(k(x-d))+c\) or a cosine version. Then you can predict values, see how the model changes when the situation changes, and find when the quantity is above or below a level.`,
    goals: [
      "write a sinusoidal model from a verbal description;",
      "use a model to predict a value at a given time;",
      "explain how a change in the situation changes a, k, d or c;",
      "find the times when a model is above or below a given level;",
      "judge how well a model fits data.",
    ],
    curriculum: "D3.1 (collect data that can be modelled as a sinusoidal function, through investigation with and without technology, from primary sources or secondary sources, and graph the data), D3.3 (predict the effects on a mathematical model of an application involving periodic phenomena when the conditions in the application are varied), D3.4 (pose and solve problems based on applications involving a sinusoidal function by using a given graph or a graph generated with technology from its equation)",
    prior: [
      ["A period of 80 s gives what k?", "360/80 = 4.5."],
      [S`Solve \(\cos\theta=-0.5\) for \(0^\circ\le\theta\le360^\circ\).`, "120° and 240°."],
      [S`What is \(-12\cos0^\circ+14\)?`, "2."],
    ],
    words: [
      ["Model", "an equation that describes a real situation", ""],
      ["Time variable", "t — measured in seconds, hours or days; the angle is kt", ""],
      ["Threshold", "a level such as a safe depth or a temperature", ""],
      ["Fit", "how closely the model matches the data", ""],
    ],
  }),

  section("📌 From a description to a model", S`
  ${table(["Description", "Parameter"], [["highest and lowest values", "\\(a=\\frac{\\max-\\min}2\\), \\(c=\\frac{\\max+\\min}2\\)"], ["time for one cycle", "\\(k=\\frac{360}{\\text{period}}\\)"], ["time of a maximum", "cosine with d = that time"], ["starts at the minimum (e.g. boarding)", "\\(y=-a\\cos(kt)+c\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 160, ymin: 0, ymax: 28 }, curves: [{ f: wheel, color: "violet" }], lines: [{ m: 0, b: 20, color: "amber", dash: true, label: "20 m" }], points: [{ x: 26.67, y: 20, label: "26.7 s" }, { x: 53.33, y: 20, label: "53.3 s" }], step: { x: 20, y: 4 }, xlabel: "t (s)", ylabel: "h (m)" }, "h = −12 cos(4.5t) + 14: above 20 m between 26.7 s and 53.3 s of each turn")}
  ${keyIdea("To answer 'when is it above a level?', set the model equal to the level, solve for the angle kt in one cycle, then convert to time. The time between the two solutions is how long it stays above.")}`),

  section("📌 Explore", S`<p>Fit the curve to the data, then move the level line. The readout lists the time intervals when the model is above that level.</p>`),

  widget("modelLab", { dataset: "daylight" }),

  section("📌 Watch out", watchOut([
    "Use degrees: k = 360 ÷ period.",
    "If the cycle starts at the bottom, use −a cos — a common source of errors.",
    "Check units: hours, days or seconds must match the period.",
    "There are usually two times per cycle at a given level.",
  ])),

  examples([
    ["A Ferris wheel model", "A wheel of radius 12 m has its hub 14 m above the ground and turns once every 80 s. Riders board at the bottom. Write a model and find the height at t = 50 s.",
      [S`\(a=12\), \(c=14\), \(k=\frac{360}{80}=4.5\); boarding at the bottom: \(h=-12\cos(4.5t)+14\).`, S`\(h(50)=-12\cos225^\circ+14\).`],
      S`\(\approx${f(wheel(50))}\) m`],
    ["A tide model", "High tide is 9.2 m at 3:00 and the next low tide is 1.4 m at 9:15. Write a model and find the depth at noon.",
      [S`\(a=3.9\), \(c=5.3\); half a period is 6.25 h, so the period is 12.5 h and \(k=28.8\).`, S`Cosine from the high tide: \(d=3\). At noon, \(t=12\).`],
      S`\(D=3.9\cos(28.8(t-3))+5.3\); \(D(12)\approx${f(tide(12))}\) m`,
      plane({ view: { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, curves: [{ f: tide, color: "violet" }], points: [{ x: 3, y: 9.2, label: "3:00, 9.2" }, { x: 9.25, y: 1.4, label: "9:15, 1.4" }, { x: 12, y: tide(12), label: "noon" }], step: { x: 2, y: 1 }, xlabel: "t (h)", ylabel: "depth (m)" })],
    ["Daylight", S`A city has the most daylight, 15.3 h, on day 172 and the least, 9.1 h, half a year later. A model is \(L=3.1\sin\left(\frac{360}{365}(t-81)\right)+12.2\). Predict the daylight on day 100.`,
      [S`Angle \(\frac{360}{365}(19)\approx18.74^\circ\).`, S`\(L=3.1\sin18.74^\circ+12.2\).`],
      S`\(\approx${f(day(100))}\) h`],
    ["Changing the conditions", "The wheel in Example 1 is sped up to one turn every 40 s, and its hub is raised 1 m. What changes in the model?",
      [S`Period 40 s: \(k=9\). Hub 15 m: \(c=15\). Radius unchanged: \(a\) stays.`],
      S`\(h=-12\cos(9t)+15\)`],
    ["Above a level", "In Example 1, for how long during each turn is the rider above 20 m?",
      [S`\(-12\cos(4.5t)+14\ge20\Rightarrow\cos(4.5t)\le-0.5\).`, S`\(4.5t\) from 120° to 240°: \(t\) from 26.67 s to 53.33 s.`],
      S`\(\approx26.67\) s per turn`],
  ]),

  practice([
    q("max", S`For \(y=5\sin(30t)+7\), what is the maximum value?`, num(12),
      "c + a.", [S`\(7+5\).`], S`\(12\)`),
    q("period", S`For the model \(T=3\cos(15t)+4\) with t in hours, what is the period in hours?`, num(24),
      "360 ÷ k.", [S`\(360\div15\).`], S`\(24\) h`),
    q("evaluate", S`Evaluate \(h(t)=-4\cos(90t)+6\) at \(t=1\).`, num(6),
      "cos 90° = 0.", [S`\(-4(0)+6\).`], S`\(6\)`),
    q("evaluate", S`Evaluate \(h(t)=-4\cos(90t)+6\) at \(t=2\).`, num(10),
      "cos 180° = −1.", [S`\(-4(-1)+6\).`], S`\(10\)`),
    q("conditions", "A Ferris wheel model is h = −a cos(kt) + c. If the whole wheel is raised 2 m, which parameter changes?", choice(["c", "a", "k", "none"], 0),
      "The hub moves up.", ["c increases by 2."], "c"),
  ]),

  ...hard([
    ["A spring", "A mass on a spring moves between 5 cm and 25 cm above a table, completing a cycle every 1.6 s. It is released at the top at t = 0. Write a model and find the height at t = 1 s.",
      [S`\(a=10\), \(c=15\), \(k=\frac{360}{1.6}=225\); starts at the max: cosine.`, S`\(h(1)=10\cos225^\circ+15\).`],
      S`\(h=10\cos(225t)+15\); \(h(1)\approx${f(spring(1))}\) cm`,
      plane({ view: { xmin: 0, xmax: 3.2, ymin: 0, ymax: 28 }, curves: [{ f: spring, color: "violet" }], points: [{ x: 1, y: spring(1), label: "t = 1" }], step: { x: 0.4, y: 5 }, xlabel: "t (s)", ylabel: "h (cm)" })],
    ["Warm days", S`A city's daily high temperature is modelled by \(T=16\cos\left(\frac{360}{365}(t-196)\right)+10\) (°C, t in days). For how many days a year is the high at least 20°C?`,
      [S`\(16\cos\theta+10\ge20\Rightarrow\cos\theta\ge0.625\Rightarrow|\theta|\le${f(dg(Math.acos(0.625)))}^\circ\).`, S`In days: \(2\times${f(dg(Math.acos(0.625)))}\times\frac{365}{360}\).`],
      S`\(\approx${f(warmW, 1)}\) days`],
  ], [
    q("hard", "A Ferris wheel has radius 15 m, hub 17 m and turns once every 90 s; riders board at the bottom. Find the height at t = 30 s.", num(-15 * Math.cos(r(120)) + 17, 0.01),
      "h = −15 cos(4t) + 17.", [S`\(-15\cos120^\circ+17\).`], S`\(24.5\) m`),
    q("hard", "For the tide model in Example 2, for how many hours per cycle is the depth at least 7 m (2 decimals)?", num(tideW, 0.01),
      "Solve 3.9 cos θ + 5.3 ≥ 7, then divide by 28.8.", [S`\(\cos\theta\ge0.4359\).`], S`\(\approx${f(tideW)}\) h`),
    q("hard", "A pendulum's position repeats every 1.2 s. How many complete swings (cycles) does it make in one minute?", num(50),
      "60 ÷ 1.2.", [S`\(50\).`], S`\(50\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I choose sine or cosine?", "Use cosine when you know when a max (or min) happens; sine when you know when it crosses the axis going up."],
      ["How do I handle real times like 9:15?", "Convert to hours after a starting time: 9:15 is 9.25."],
      ["Why are there two times at a level?", "The graph crosses each level once going up and once going down in every cycle."],
      ["What does a poor fit mean?", "The data may not be perfectly sinusoidal, or a parameter needs adjusting."],
      ["Can I use the model far in the future?", "Only if the situation keeps repeating the same way."],
    ],
    summary: [
      "a, c from max/min; k = 360/period.",
      "Start: max → cosine; bottom → −cos.",
      "Solve for the angle, then convert to time.",
      "Changing conditions changes specific parameters.",
    ],
    next: "6.8 reviews the chapter.",
  }),
];
