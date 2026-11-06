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
    ["Reading the wheel", "A Ferris wheel rider's height is h = 11 − 9cos(9t)°, shown in the graph. State the maximum, minimum, axis, amplitude and period, and what each means.",
      [S`<b>Maximum and minimum.</b> The graph peaks at 20 m and bottoms at 2 m. These are the top of the wheel and the boarding height.`,
        S`<b>Axis.</b> \(h=\frac{20+2}2=11\) m. This is the height of the hub.`,
        S`<b>Amplitude.</b> \(\frac{20-2}2=9\) m. This is the radius of the wheel.`,
        S`<b>Period.</b> Minimums at \(t=0\) and \(t=40\) give 40 s, the time for one turn.`,
        S`<b>Check.</b> Hub + radius \(=20\) ✓ and hub − radius \(=2\) ✓`],
      "max 20 m (top), min 2 m (boarding), axis 11 m (hub), amplitude 9 m (radius), period 40 s (one turn)",
      plane({ view: { xmin: 0, xmax: 90, ymin: 0, ymax: 24 }, curves: [{ f: wheel, a: 0, color: "violet" }], lines: [{ m: 0, b: 11, color: "green", dash: true }], points: [{ x: 0, y: 2, label: "(0, 2)" }, { x: 20, y: 20, label: "(20, 20)", color: "amber" }, { x: 40, y: 2, label: "(40, 2)" }], step: { x: 10, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Times at the top", "For the same wheel (period 40 s, boarding at t = 0), when is the rider at the top during the first 80 s?",
      [S`<b>First time.</b> The rider boards at the bottom. The top is half a turn later: \(\frac{40}2=20\) s.`,
        S`<b>Repeat.</b> The top comes again every period: \(20+40=60\) s.`,
        S`<b>Stop.</b> The next, \(100\) s, is past 80 s.`,
        S`<b>Check.</b> \(h(20)=11-9\cos180^\circ=11+9=20\) ✓. \(h(60)=11-9\cos540^\circ=20\) ✓`],
      S`\(t=20\) s and \(t=60\) s`,
      plane({ view: { xmin: 0, xmax: 90, ymin: 0, ymax: 24 }, curves: [{ f: wheel, a: 0, color: "violet" }], lines: [{ m: 0, b: 20, color: "amber", dash: true }], points: [{ x: 20, y: 20, label: "(20, 20)", color: "amber" }, { x: 60, y: 20, label: "(60, 20)", color: "amber" }], step: { x: 10, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Domain and range in context", "The ride lasts exactly three turns. State the domain and range of the height function.",
      [S`<b>Domain.</b> It covers the time of the ride. Three turns take \(3\times40=120\) s, so \(0\le t\le120\).`,
        S`<b>Range.</b> It covers the heights reached. Every turn goes from 2 m up to 20 m, so \(2\le h\le20\).`,
        S`<b>Why not all real numbers?</b> The rule works for any \(t\), but the ride does not exist before boarding or after it ends.`,
        S`<b>Check on the graph.</b> The curve is drawn only from \(t=0\) to \(t=120\), and shows three full cycles ✓`],
      S`domain \(0\le t\le120\); range \(2\le h\le20\)`,
      plane({ view: { xmin: 0, xmax: 130, ymin: 0, ymax: 24 }, curves: [{ f: wheel, a: 0, b: 120, color: "violet" }], points: [{ x: 0, y: 2, label: "(0, 2)" }, { x: 120, y: 2, label: "(120, 2)", color: "amber" }], step: { x: 20, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Level with the hub", "At what times in the first turn is the rider level with the hub, and how high are they then?",
      [S`<b>Meaning.</b> Level with the hub means the height is on the axis, \(h=11\) m.`,
        S`<b>Where on the wheel?</b> Starting at the bottom, the rider reaches hub height after a quarter of a turn and again after three quarters of a turn.`,
        S`<b>Times.</b> \(\frac14(40)=10\) s and \(\frac34(40)=30\) s.`,
        S`<b>Check.</b> \(h(10)=11-9\cos90^\circ=11\) ✓. \(h(30)=11-9\cos270^\circ=11\) ✓`],
      S`\(t=10\) s and \(t=30\) s, at 11 m`,
      plane({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 24 }, curves: [{ f: wheel, a: 0, color: "violet" }], lines: [{ m: 0, b: 11, color: "green", dash: true }], points: [{ x: 10, y: 11, label: "(10, 11)", color: "amber" }, { x: 30, y: 11, label: "(30, 11)", color: "amber" }], step: { x: 5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["A pebble in a tire", "A bicycle wheel has diameter 66 cm. A pebble is stuck in the tread. Describe the graph of the pebble's height against the distance the bike travels.",
      [S`<b>Extremes.</b> The pebble touches the ground (0 cm) and reaches the top of the wheel (66 cm).`,
        S`<b>Axis and amplitude.</b> Axis \(\frac{66+0}2=33\) cm, at the axle. Amplitude \(\frac{66-0}2=33\) cm, the radius.`,
        S`<b>Period.</b> The independent variable is distance, not time. One full turn moves the bike one circumference: \(66\pi\approx${f(66 * Math.PI, 1)}\) cm.`,
        S`<b>Sense check.</b> The graph starts at 0 and returns to 0 at each circumference, as the figure shows ✓`],
      S`axis 33 cm, amplitude 33 cm, period \(\approx${f(66 * Math.PI, 1)}\) cm`,
      plane({ view: { xmin: 0, xmax: 450, ymin: 0, ymax: 75 }, curves: [{ f: (x) => 33 - 33 * Math.cos((2 * Math.PI * x) / (66 * Math.PI)), color: "violet" }], lines: [{ m: 0, b: 33, color: "green", dash: true }], points: [{ x: 66 * Math.PI, y: 0, label: "(207.3, 0)", color: "amber" }, { x: 33 * Math.PI, y: 66, label: "(103.7, 66)" }], step: { x: 50, y: 10 }, xlabel: "distance (cm)", ylabel: "height (cm)" })],
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
