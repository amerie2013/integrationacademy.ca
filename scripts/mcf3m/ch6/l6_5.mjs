// MCF3M 6.5 — Sinusoidal Models: Ferris wheels, tides, daylight and springs over time; reading max/min/period/axis;
// predicting with a given model; how the graph changes when conditions vary; solving problems from graphs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "../lib.mjs";
import { SG, sd, cd, P } from "./sfig.mjs";
import { tv } from "../lib.mjs";
const S = String.raw;

export const TITLE = "6.5 Sinusoidal Models";
const wheel = (r, hub, T) => (t) => hub - r * cd((360 * t) / T);
const tide = (t) => 3 * sd(30 * (t - 1)) + 5.5;
const day = (n) => 3.4 * sd((360 / 365) * (n - 80)) + 12.1;
const spring = (t) => 6 * sd(120 * t) + 40;
const r2 = (v) => Math.round(v * 100) / 100;

export const blocks = () => [
  intro({
    icon: "🎡",
    title: "Sinusoidal Models",
    overview: S`A <b>sinusoidal</b> function is any wave with the smooth shape of a sine curve. Ferris-wheel heights, tides, hours of daylight and a bouncing spring all follow such waves over time. To use a model you read four things — maximum, minimum, period and starting position — and then predict: the height at a given time, or the times when a level is reached. You also need to say how the wave changes when the situation changes: a bigger wheel, a faster turn, a higher tide.`,
    goals: [
      "identify sinusoidal and non-sinusoidal periodic situations;",
      "sketch a height–time graph for a turning wheel from its radius, hub height and period;",
      "read max, min, axis, amplitude and period from a model, a table or a graph;",
      "predict values and solve for times using a given model;",
      "describe how the graph changes when the conditions change.",
    ],
    curriculum: "C3.1 (collect data that can be modelled as a sinusoidal function), C3.2 (identify periodic and sinusoidal functions in real-world applications), C3.5 (predict the effects on a model when the conditions are varied), C3.6 (pose and solve problems using a given graph or a sine model)",
    prior: [
      [S`A wave has max \(26\) and min \(2\). Find its axis and amplitude.`, S`\(y=14\); \(12\).`],
      [S`Find \(8\sin(-90^\circ)+10\).`, S`\(2\).`],
      [S`Solve \(\sin\theta=0.5\) for \(0^\circ\le\theta\le360^\circ\).`, S`\(30^\circ\), \(150^\circ\).`],
    ],
    words: [
      ["Sinusoidal function", "a periodic function with the shape of a sine wave", "tide depth"],
      ["Period (in time)", "time for one cycle", "80 s per turn"],
      ["Maximum / minimum", "the highest / lowest value of the quantity", "26 m / 2 m"],
      ["Axis", "the middle level, (max + min)/2", "the hub height"],
      ["Amplitude", "(max − min)/2", "the wheel's radius"],
    ],
  }),

  section("📌 Building a model from a situation", S`
  <p>A Ferris wheel of radius \(12\) m has its hub \(14\) m above the ground and turns once every \(80\) s. A rider boards at the bottom. Every quarter-turn (\(20\) s) we know the height exactly:</p>
  ${tv([[0, 2], [20, 14], [40, 26], [60, 14], [80, 2], [100, 14], [120, 26]], "t (s)", "h (m)")}
  ${SG([{ f: wheel(12, 14, 80), color: "violet" }], { base: false, view: { xmin: 0, xmax: 160, ymin: 0, ymax: 28 }, step: { x: 20, y: 4 }, lines: [{ m: 0, b: 14, color: "green", dash: true, label: "axis: hub 14 m" }], xlabel: "t (s)", ylabel: "h (m)", cap: "Two turns of the wheel" })}
  ${table(["Feature of the situation", "Feature of the graph"], [["radius", "amplitude"], ["hub height", "axis"], ["hub + radius / hub − radius", "maximum / minimum"], ["time for one turn", "period"], ["where the rider boards", "starting point of the graph"]])}
  ${keyIdea(S`Change the situation, change one feature: a bigger radius stretches the wave vertically, a higher hub moves it up, a faster wheel squeezes it horizontally (shorter period), and a different boarding point shifts it sideways.`)}`),

  widget("wheelLab", { init: [12, 14, 80] }),

  section("⚠️ Common errors", S`
  ${watchOut([
    "The period is a TIME (seconds, hours, days), read along the horizontal axis.",
    "Amplitude = radius, axis = hub height — not the other way round.",
    "A rider boarding at the bottom starts at the minimum, not on the axis.",
    "Faster turning means a SHORTER period.",
    "Not every repeating pattern is sinusoidal: it needs the smooth sine shape.",
  ])}`),

  examples([
    ["Sketch a Ferris-wheel model", S`For the wheel above (radius \(12\) m, hub \(14\) m, \(80\) s per turn, boarding at the bottom), state the max, min, axis, amplitude and period, and find the height at \(t=30\) s.`,
      [S`<b>Max and min.</b> \(14+12=26\) m and \(14-12=2\) m.`,
        S`<b>Axis, amplitude, period.</b> \(h=14\), \(12\) m, \(80\) s.`,
        S`<b>Angle turned at \(t=30\).</b> \(\frac{30}{80}\times360^\circ=135^\circ\) past the bottom.`,
        S`<b>Height.</b> The rider is \(12\cos45^\circ\approx8.49\) m above the hub: \(14+8.49\approx22.49\) m. On the graph, \(30\) s lies between \((20,14)\) and \((40,26)\) ✓`],
      S`max 26 m, min 2 m, axis h = 14, amplitude 12 m, period 80 s; h(30) ≈ 22.49 m`,
      SG([{ f: wheel(12, 14, 80), color: "violet" }], { base: false, view: { xmin: 0, xmax: 160, ymin: 0, ymax: 28 }, step: { x: 20, y: 4 }, points: [P(30, 22.49, "(30, 22.49)", "red"), P(40, 26), P(80, 2)], xlabel: "t (s)", ylabel: "h (m)" })],

    ["Changing the conditions", S`The wheel is replaced by one with radius \(15\) m and hub \(17\) m (boarding still \(2\) m up) that turns once every \(60\) s. Describe how the graph changes and sketch both.`,
      [S`<b>Amplitude.</b> \(12\to15\): the wave is taller.`,
        S`<b>Axis and max.</b> Axis \(14\to17\); max \(26\to32\) m; min stays \(2\) m.`,
        S`<b>Period.</b> \(80\to60\) s: the cycles are narrower — \(4\) turns in \(240\) s instead of \(3\).`,
        S`<b>Check.</b> New top reached at \(t=30\) s (half a turn) ✓`],
      S`taller (amplitude 15), axis 17, max 32 m, period 60 s`,
      SG([{ f: wheel(12, 14, 80), color: "gray" }, { f: wheel(15, 17, 60), color: "violet" }], { base: false, view: { xmin: 0, xmax: 160, ymin: 0, ymax: 34 }, step: { x: 20, y: 4 }, points: [P(30, 32, "(30, 32)")], xlabel: "t (s)", ylabel: "h (m)", cap: "gray: old wheel · violet: new wheel" })],

    ["A tide model", S`The depth of water in a harbour is \(d(t)=3\sin(30(t-1))+5.5\) metres, \(t\) hours after midnight. Find the max and min depths, the period, the depth at 6:00 a.m., and the first time the depth is \(4\) m.`,
      [S`<b>Max/min.</b> \(5.5\pm3\): \(8.5\) m and \(2.5\) m.`,
        S`<b>Period.</b> One cycle when \(30t\) increases by \(360\): \(\frac{360}{30}=12\) h.`,
        S`<b>At \(t=6\).</b> \(3\sin150^\circ+5.5=1.5+5.5=7\) m.`,
        S`<b>Depth \(4\).</b> \(\sin(30(t-1))=-0.5\Rightarrow30(t-1)=210\Rightarrow t=8\): 8:00 a.m. (the earlier angle \(-30\) gives \(t=0\), which is midnight — check: \(d(0)=3\sin(-30^\circ)+5.5=4\) ✓, so midnight is the very first time and 8:00 a.m. the next).`],
      S`max 8.5 m, min 2.5 m, period 12 h; d(6) = 7 m; depth 4 m at midnight and again at 8:00 a.m.`,
      SG([{ f: tide, color: "violet" }], { base: false, view: { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, step: { x: 2, y: 1 }, lines: [{ m: 0, b: 4, color: "green", dash: true, label: "d = 4" }], points: [P(6, 7, "(6, 7)"), P(8, 4, "(8, 4)", "red")], xlabel: "t (h)", ylabel: "d (m)" })],

    ["Hours of daylight", S`In one Canadian city the hours of daylight on day \(n\) of the year are modelled by the graph shown (longest day \(n=172\), \(15.5\) h; shortest day \(n=355\), \(8.7\) h). Find the amplitude, the axis and the period, and explain what each means.`,
      [S`<b>Amplitude.</b> \(\frac{15.5-8.7}2=3.4\) h: daylight varies \(3.4\) h above and below the average.`,
        S`<b>Axis.</b> \(\frac{15.5+8.7}2=12.1\) h: the average day length.`,
        S`<b>Period.</b> \(365\) days: the pattern repeats each year.`,
        S`<b>Check.</b> \(355-172=183\) days ≈ half a period ✓`],
      S`amplitude 3.4 h, axis 12.1 h, period 365 days`,
      SG([{ f: day, color: "violet" }], { base: false, view: { xmin: 0, xmax: 365, ymin: 6, ymax: 18 }, step: { x: 30, y: 2 }, lines: [{ m: 0, b: 12.1, color: "green", dash: true, label: "12.1 h" }], points: [P(172, 15.5, "(172, 15.5)"), P(355, 8.7, "(355, 8.7)", "red")], xlabel: "day", ylabel: "hours" })],

    ["A spring", S`A weight on a spring bobs so that its height above the floor is \(h(t)=6\sin(120t)+40\) cm after \(t\) seconds. Find the highest and lowest points, the period, and the height at \(t=4\) s.`,
      [S`<b>Highest/lowest.</b> \(40+6=46\) cm and \(40-6=34\) cm.`,
        S`<b>Period.</b> \(\frac{360}{120}=3\) s.`,
        S`<b>At \(t=4\).</b> \(120(4)=480^\circ\), and \(\sin480^\circ=\sin120^\circ\approx0.866\): \(h\approx6(0.866)+40\approx45.20\) cm.`,
        S`<b>Check with the period.</b> \(h(4)=h(1)\) since \(4-3=1\): \(6\sin120^\circ+40\approx45.20\) ✓`],
      S`max 46 cm, min 34 cm, period 3 s, h(4) ≈ 45.20 cm`,
      SG([{ f: spring, color: "violet" }], { base: false, view: { xmin: 0, xmax: 6, ymin: 30, ymax: 50 }, step: { x: 0.5, y: 2 }, points: [P(4, r2(spring(4)), "(4, 45.20)", "red"), P(0.75, 46)], xlabel: "t (s)", ylabel: "h (cm)" })],
  ]),

  practice([
    q("max", S`A Ferris wheel has radius \(9\) m and hub \(11\) m. Find the maximum height.`, num(20), "hub + radius.", [S`\(11+9=20\) m.`], S`\(20\)`),
    q("min", S`For the same wheel, find the minimum height.`, num(2), "hub − radius.", [S`\(11-9=2\) m.`], S`\(2\)`),
    q("half", S`A wheel turns once every \(45\) s. How many seconds from the bottom to the top?`, num(22.5, 0.001), "Half a period.", [S`\(22.5\) s.`], S`\(22.5\)`),
    q("eval", S`\(d(t)=2\sin(30t)+4\). Find \(d(3)\).`, num(6), "sin 90° = 1.", [S`\(2(1)+4=6\).`], S`\(6\)`),
    q("change", S`A Ferris wheel speeds up. Which feature of the height graph changes?`, choice(["the period gets shorter", "the amplitude gets larger", "the axis moves up", "the minimum moves down"], 0), "Speed affects time per turn.", [S`Less time per turn: shorter period.`], S`the period gets shorter`),
  ]),

  ...hard([
    ["Two wheels", S`Wheel A: radius \(10\) m, hub \(12\) m, \(60\) s per turn. Wheel B: radius \(7\) m, hub \(9\) m, \(40\) s per turn. Riders board both at the bottom at \(t=0\). Who is higher at \(t=15\) s?`,
      [S`<b>Wheel A.</b> \(\frac{15}{60}\) turn \(=90^\circ\): level with the hub, \(12\) m.`,
        S`<b>Wheel B.</b> \(\frac{15}{40}\) turn \(=135^\circ\) past the bottom: \(9+7\cos45^\circ\approx13.95\) m.`,
        S`<b>Compare.</b> \(13.95>12\): the rider on wheel B is higher by about \(1.95\) m.`],
      S`B (≈ 13.95 m vs 12 m)`,
      SG([{ f: wheel(10, 12, 60), color: "violet" }, { f: wheel(7, 9, 40), color: "green" }], { base: false, view: { xmin: 0, xmax: 120, ymin: 0, ymax: 24 }, step: { x: 15, y: 4 }, vlines: [{ x: 15, color: "red", dash: true, label: "t = 15" }], xlabel: "t (s)", ylabel: "h (m)", cap: "violet: wheel A · green: wheel B" })],
    ["Safe harbour times", S`A boat needs at least \(7\) m of water. With \(d(t)=3\sin(30(t-1))+5.5\), when can it use the harbour in the first \(12\) hours, and for how long?`,
      [S`<b>Boundary.</b> \(3\sin(30(t-1))+5.5=7\Rightarrow\sin(30(t-1))=0.5\).`,
        S`<b>Angles.</b> \(30(t-1)=30\) or \(150\Rightarrow t=2\) or \(t=6\).`,
        S`<b>Interval.</b> Deeper between them (high tide at \(t=4\)): 2:00 a.m. to 6:00 a.m., \(4\) hours.`],
      S`2:00 a.m. – 6:00 a.m. (4 h)`,
      SG([{ f: tide, color: "violet" }], { base: false, view: { xmin: 0, xmax: 12, ymin: 0, ymax: 10 }, step: { x: 1, y: 1 }, lines: [{ m: 0, b: 7, color: "green", dash: true, label: "d = 7" }], points: [P(2, 7, "(2, 7)"), P(6, 7, "(6, 7)")], xlabel: "t (h)", ylabel: "d (m)" })],
  ], [
    q("hard", S`For \(h(t)=6\sin(120t)+40\), find \(h(5)\) (two decimals).`, num(r2(spring(5)), 0.011), "600° − 360° = 240°.", [S`\(6\sin240^\circ+40\approx34.80\).`], S`\(34.80\)`),
    q("hard", S`Daylight ranges from \(8.7\) h to \(15.5\) h. Find the amplitude.`, num(3.4, 0.001), "(15.5 − 8.7)/2.", [S`\(3.4\) h.`], S`\(3.4\)`),
    q("hard", S`Radius \(12\) m, hub \(14\) m, \(80\) s per turn, boarding at the bottom. Find the height at \(t=70\) s (two decimals).`, num(r2(wheel(12, 14, 80)(70)), 0.011), "315° past the bottom.", [S`\(14-12\cos315^\circ\approx5.51\) m.`], S`\(5.51\)`),
    q("hard", S`High tide is at 3:00 and the period is \(12.4\) h. Enter the time of the next high tide in hours after midnight.`, num(15.4, 0.001), "3 + 12.4.", [S`\(15.4\) h (3:24 p.m.).`], S`\(15.4\)`),
    q("hard", S`A wheel turns at \(3\) revolutions per minute. Find its period in seconds.`, num(20), "60 ÷ 3.", [S`\(20\) s.`], S`\(20\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I build a Ferris-wheel graph?", "Max = hub + radius, min = hub − radius, period = time per turn; plot quarter-turn points."],
      ["What does each parameter mean in context?", "Amplitude = radius (or half the range), axis = average level, period = time for one cycle."],
      ["How do I predict with a model?", "Substitute t; for large t, subtract whole periods first."],
      ["How do I find when a level is reached?", "Set the model equal to the level, solve for the angle, then for t; check with the graph."],
      ["What happens when the wheel is faster or bigger?", "Faster: shorter period. Bigger radius: larger amplitude. Higher hub: higher axis."],
    ],
    summary: [
      "Sinusoidal = smooth sine-shaped periodic graph.",
      "Read max, min, axis, amplitude, period.",
      "Predict by substitution or by using the period.",
      "Changing conditions changes one feature of the graph.",
    ],
    next: "6.6 reviews the whole chapter.",
  }),
];
