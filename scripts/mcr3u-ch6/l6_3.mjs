// MCR3U 6.3 — Interpreting Sinusoidal Graphs: Ferris wheels, bicycle wheels and other turning objects; relating
// radius, centre height and time per turn to amplitude, axis and period; domain and range in context
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "6.3 Interpreting Sinusoidal Graphs";
export const ID = "5c3e0001-0001-4001-8001-000000000603";
const S = String.raw;
const r = (d) => (d * Math.PI) / 180;
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
const wheel = (t) => 11 - 9 * Math.cos(r(9 * t));
const th = (Math.acos(-0.3) * 180) / Math.PI, t1 = th / 6, t2 = (360 - th) / 6;

export const blocks = () => [
  intro({
    icon: "🎡",
    title: "Interpreting Sinusoidal Graphs",
    overview: S`When something turns at a steady rate — a Ferris wheel, a bicycle wheel, a windmill — the height of a point on it is a sinusoidal function of time. Every feature of the graph has a physical meaning: the axis is the height of the centre, the amplitude is the radius, and the period is the time for one turn. In this lesson you will read these graphs and connect them to the situations they describe.`,
    goals: [
      "identify maximum, minimum, axis, amplitude and period from a real graph;",
      "connect each property to the physical situation;",
      "find the times when a maximum, minimum or axis value occurs;",
      "state reasonable domain and range restrictions for a context;",
      "compare two situations from their graphs.",
    ],
    curriculum: "D3.2 (identify periodic and sinusoidal functions, including those that arise from real-world applications involving periodic phenomena, given various representations, and explain any restrictions that the context places on the domain and range), D3.4 (pose and solve problems based on applications involving a sinusoidal function by using a given graph)",
    prior: [
      ["A wheel has diameter 18 m. What is its radius?", "9 m."],
      ["Max 20, min 2: what is the axis?", "y = 11."],
      ["What is the circumference of a circle with diameter 66 cm?", "about 207.3 cm."],
    ],
    words: [
      ["Axis (centre height)", "the height of the hub of the wheel", ""],
      ["Amplitude (radius)", "how far the point moves above and below the hub", ""],
      ["Period (time per turn)", "time for one complete revolution", ""],
      ["Restricted domain", "only the times that make sense, e.g. the length of the ride", ""],
    ],
  }),

  section("📌 A wheel and its graph", S`
  ${plane({ view: { xmin: 0, xmax: 80, ymin: 0, ymax: 22 }, curves: [{ f: wheel, color: "violet" }], lines: [{ m: 0, b: 11, color: "green", dash: true, label: "hub 11 m" }], points: [{ x: 0, y: 2, label: "board" }, { x: 20, y: 20, label: "top" }, { x: 40, y: 2, label: "bottom" }], step: { x: 5, y: 2 } }, "radius 9 m, hub 11 m, one turn every 40 s")}
  ${table(["On the wheel", "On the graph"], [["height of the hub", "axis: \\(\\frac{\\max+\\min}2\\)"], ["radius", "amplitude: \\(\\frac{\\max-\\min}2\\)"], ["time for one turn", "period"], ["boarding height", "minimum (if riders board at the bottom)"]])}
  ${keyIdea("Start from the situation: max = hub + radius, min = hub − radius. A quarter turn after the bottom the rider is level with the hub, half a turn later at the top.")}`),

  section("📌 Explore", S`<p>Change the wheel and watch the graph. Which slider changes the axis, which the amplitude, and which the period?</p>`),

  widget("wheelLab", { init: [10, 12, 60] }),

  section("📌 Watch out", watchOut([
    "The amplitude is the radius, not the diameter.",
    "The period is a time (or a distance), not a height.",
    "Riders are level with the hub twice in each turn.",
    "Only times during the ride make sense — restrict the domain.",
  ])),

  examples([
    ["Reading the wheel", "Use the graph in the box above. State the maximum, minimum, axis, amplitude and period, and what each means.",
      ["Max 20 m (top), min 2 m (boarding).", "Axis h = 11 m (hub), amplitude 9 m (radius), period 40 s (one turn)."],
      "radius 9 m, hub 11 m, 40 s per turn"],
    ["Times at the top", "When is the rider at the top during the first 80 s?",
      ["The top is half a turn after boarding.", "Then every 40 s."],
      S`\(t=20\) s and \(t=60\) s`],
    ["Domain and range in context", "The ride lasts exactly three turns. State the domain and range of the height function.",
      [S`Three turns: \(0\le t\le120\) s.`, S`Heights from 2 m to 20 m.`],
      S`domain \(0\le t\le120\); range \(2\le h\le20\)`],
    ["Level with the hub", "At what times in the first turn is the rider level with the hub, and how high are they then?",
      ["A quarter and three quarters of a turn after boarding."],
      S`\(t=10\) s and \(t=30\) s, at 11 m`],
    ["A pebble in a tire", "A bicycle wheel has diameter 66 cm. A pebble is stuck in the tread. Describe the graph of the pebble's height against the distance the bike travels.",
      [S`Max 66 cm, min 0 cm: axis 33 cm, amplitude 33 cm.`, S`One cycle per turn: period = circumference \(=66\pi\approx207.3\) cm.`],
      S`axis 33 cm, amplitude 33 cm, period \(\approx${f(66 * Math.PI, 1)}\) cm`,
      plane({ view: { xmin: 0, xmax: 450, ymin: 0, ymax: 75 }, curves: [{ f: (x) => 33 - 33 * Math.cos((2 * Math.PI * x) / (66 * Math.PI)), color: "violet" }], lines: [{ m: 0, b: 33, color: "green", dash: true }], step: { x: 50, y: 10 }, xlabel: "distance (cm)", ylabel: "height (cm)" })],
  ]),

  practice([
    q("radius", "A Ferris wheel graph has a maximum of 25 m and a minimum of 3 m. What is the radius of the wheel?", num(11),
      "Amplitude.", [S`\(\frac{25-3}2\).`], S`\(11\) m`),
    q("hub", "For the same wheel (max 25 m, min 3 m), how high is the hub?", num(14),
      "Axis.", [S`\(\frac{25+3}2\).`], S`\(14\) m`),
    q("period", "On a height–time graph, consecutive maximums are at t = 15 s and t = 75 s. How long does one turn take?", num(60),
      "Peak to peak.", [S`\(75-15\).`], S`\(60\) s`),
    q("meaning", "A height–time graph for a wheel has period 30 s. What does this mean?", choice(["the wheel makes one turn every 30 s", "the wheel is 30 m tall", "the ride lasts 30 s", "the rider is at the top for 30 s"], 0),
      "Period = time for one cycle.", ["One cycle of the graph is one turn."], "one turn every 30 s"),
    q("min", "A wheel has radius 8 m and its hub is 10 m above the ground. What is the lowest height of a rider?", num(2),
      "hub − radius.", [S`\(10-8\).`], S`\(2\) m`),
  ]),

  ...hard([
    ["Two wheels", "Riders board two wheels at the bottom at t = 0. Wheel A: radius 8 m, hub 10 m, 32 s per turn. Wheel B: radius 6 m, hub 9 m, 24 s per turn. Who is higher at t = 16 s?",
      [S`A: 16 s is half a turn — at the top, 18 m.`, S`B: 16 s is \(\tfrac23\) of a turn: \(9-6\cos240^\circ=9+3=12\) m.`],
      "A is higher (18 m vs 12 m)",
      plane({ view: { xmin: 0, xmax: 48, ymin: 0, ymax: 20 }, curves: [{ f: (t) => 10 - 8 * Math.cos(r(11.25 * t)), color: "violet" }, { f: (t) => 9 - 6 * Math.cos(r(15 * t)), color: "amber" }], points: [{ x: 16, y: 18, label: "A" }, { x: 16, y: 12, label: "B" }], step: { x: 4, y: 2 } })],
    ["How long above 15 m?", S`A wheel has radius 10 m, hub 12 m and turns once every 60 s; the rider's height is \(h=12-10\cos(6t)^\circ\). For how long in each turn is the rider above 15 m?`,
      [S`\(12-10\cos(6t)\ge15\Rightarrow\cos(6t)\le-0.3\).`, S`\(6t\) between \(${f(th, 2)}^\circ\) and \(${f(360 - th, 2)}^\circ\): \(t\) from \(${f(t1)}\) to \(${f(t2)}\) s.`],
      S`\(\approx${f(t2 - t1)}\) s per turn`],
  ], [
    q("hard", "A bicycle wheel has diameter 70 cm. What is the period of the graph of a pebble's height against distance travelled (cm, 2 decimals)?", num(70 * Math.PI, 0.01),
      "Circumference.", [S`\(70\pi\).`], S`\(\approx${f(70 * Math.PI)}\) cm`),
    q("hard", "A wheel's rider graph has axis 9 m and amplitude 7 m. What is the lowest height?", num(2),
      "axis − amplitude.", [S`\(9-7\).`], S`\(2\) m`),
    q("hard", "What fraction of each turn does a rider spend above the hub? Enter a decimal.", num(0.5),
      "Symmetry.", ["Half the circle is above the hub."], S`\(0.5\)`),
  ]),

  wrapUp({
    qas: [
      ["Why does the graph start at the minimum?", "Riders usually board at the bottom of the wheel."],
      ["How do I get the radius from a graph?", "Amplitude = (max − min)/2."],
      ["What if the wheel turns faster?", "The period gets shorter; the axis and amplitude stay the same."],
      ["Why restrict the domain?", "The model only describes the ride while it is happening."],
      ["Is a bike pebble's graph in time or distance?", "Either works; against distance, the period is the circumference."],
    ],
    summary: [
      "Axis = hub height; amplitude = radius.",
      "Period = time (or distance) per turn.",
      "Max = hub + radius; min = hub − radius.",
      "Restrict domain and range to the context.",
    ],
    next: "6.4 studies how a, k, d and c transform sine and cosine graphs.",
  }),
];
