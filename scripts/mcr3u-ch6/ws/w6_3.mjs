// MCR3U Worksheet 6.3 — Interpreting Sinusoidal Graphs (teacher edition)
import { waveT, gridW, cos, f } from "./sinT.mjs";

const S = String.raw;
const w1 = (t) => 17 - 15 * cos(3.6 * t);
const p4 = (t) => 9 - 7 * cos(15 * t);
// paddle under water when sin θ < −1/3: θ from th (Quadrant 3) to 540° − th (Quadrant 4)
const th = 180 + (Math.asin(1 / 3) * 180) / Math.PI;
const underFrac = (540 - 2 * th) / 360;

const EXAMPLES = [
  { title: "Reading a wheel graph", q: "The graph shows a rider's height on a Ferris wheel. State the radius, hub height and time per turn.",
    fig: waveT(w1, { xmin: 0, xmax: 200, ymin: 0, ymax: 36 }, { x: 25, y: 4 }, { axis: 17, xlabel: "t (s)", ylabel: "h (m)", pts: [[50, 32, "(50, 32)"], [100, 2, "(100, 2)"]] }),
    steps: [S`Max 32, min 2: radius $\frac{32-2}2=15$ m, hub $\frac{32+2}2=17$ m.`, "Min to min: 100 s per turn."], ans: "radius 15 m, hub 17 m, 100 s" },
  { title: "Times at the top", q: "When is the rider at the top during the first 200 s?", steps: ["Half a turn after boarding, then every 100 s."], ans: "t = 50 s and 150 s" },
  { title: "Domain and range", q: "The ride lasts four turns. State the domain and range.", steps: [S`Four turns: $0\le t\le400$; heights 2 m to 32 m.`], ans: S`$0\le t\le400$; $2\le h\le32$` },
  { title: "Level with the hub", q: "At what times in the first turn is the rider level with the hub?", steps: ["A quarter and three quarters of a turn."], ans: "t = 25 s and 75 s" },
  { title: "A half-submerged paddle wheel", q: "A paddle wheel of radius 2 m has its centre at the water surface and turns once every 12 s. Describe the graph of a paddle tip's height and how long the tip is under water per turn.",
    steps: [S`Axis $h=0$, amplitude 2: range $-2\le h\le2$.`, "The tip is under water for half of each turn."], ans: "6 s per turn under water" },
  { title: "A wind turbine", q: "A turbine hub is 30 m high and each blade is 20 m long. A blade turns once every 5 s. State the max, min and period of a blade tip's height.", steps: [S`$30\pm20$.`], ans: "max 50 m, min 10 m, period 5 s" },
  { title: "Height against distance", q: "A pebble is stuck in a tire of diameter 60 cm. What is the period of its height graph against distance travelled?", steps: [S`One turn moves the bike one circumference: $60\pi$.`], ans: S`$\approx${f(60 * Math.PI, 1)}$ cm` },
  { title: "Comparing two wheels", q: "Wheel A: radius 10 m, hub 12 m. Wheel B: radius 15 m, hub 17 m. Both take 60 s per turn. How do their graphs differ?",
    fig: waveT([(t) => 12 - 10 * cos(6 * t), (t) => 17 - 15 * cos(6 * t)], { xmin: 0, xmax: 120, ymin: 0, ymax: 34 }, { x: 15, y: 4 }, { xlabel: "t (s)", ylabel: "h (m)" }),
    steps: ["Same period; B has a larger amplitude and a higher axis.", "Both minimums are 2 m."], ans: "same period and minimum; different amplitude and axis" },
  { title: "Engine piston", q: "A piston moves between 2 cm and 12 cm, completing a cycle every 0.05 s. How many cycles per minute?", steps: [S`$60\div0.05$.`], ans: "1200 cycles per minute" },
];

const PROBLEMS = [
  { level: 1, q: "A wheel graph has max 32 m and min 4 m. Find the radius.", recap: "Radius.", ans: "14 m" },
  { level: 1, q: "For the same wheel (max 32 m, min 4 m), find the hub height.", recap: "Hub.", ans: "18 m" },
  { level: 1, q: "Maximums occur at t = 12 s and t = 42 s. Find the time per turn.", recap: "Period.", ans: "30 s" },
  { level: 2, q: "Read the radius, hub height and time per turn from the graph.", recap: "Read graph.", ans: "radius 7 m, hub 9 m, 24 s",
    fig: waveT(p4, { xmin: 0, xmax: 72, ymin: 0, ymax: 18 }, { x: 6, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)" }) },
  { level: 2, q: "For the wheel in Problem 4, when is the rider at the top during the first minute?", recap: "Top times.", ans: "t = 12, 36, 60 s" },
  { level: 2, q: "The ride in Problem 4 lasts 5 turns. State the domain and range.", recap: "Domain/range.", ans: S`$0\le t\le120$; $2\le h\le16$` },
  { level: 2, q: "A bicycle wheel has diameter 64 cm. Find the period of a pebble's height graph against distance.", recap: "Circumference.", ans: S`$64\pi\approx${f(64 * Math.PI)}$ cm` },
  { level: 2, q: "A water wheel of radius 3 m has its centre 1 m above the water. What is the lowest point of a paddle relative to the water?", recap: "Below water.", ans: "2 m below the surface" },
  { level: 3, space: 5, q: "For the water wheel in Problem 8, what fraction of each turn is a paddle under water? (Its height is 1 + 3 sin θ.)", recap: "Fraction under.", ans: S`$\sin\theta<-\frac13$: $\theta$ from ${f(th, 1)}° to ${f(540 - th, 1)}°; fraction $\approx${f(underFrac, 3)}$` },
  { level: 3, space: 5, q: S`A wheel has radius 10 m, hub 13 m and turns once every 40 s ($h=13-10\cos(9t)$). For how long per turn is a rider above 18 m?`, recap: "Above a level.", ans: S`$\cos(9t)\le-\frac12$: $9t$ from 120° to 240°, so $\frac{120}{9}\approx13.33$ s` },
  { level: 3, space: 5, q: "Wheel A: radius 9 m, hub 11 m, 36 s per turn. Wheel B: radius 12 m, hub 14 m, 48 s per turn. Riders board both at the bottom at t = 0. Who is higher at t = 12 s?", recap: "Compare.", ans: S`A: $11-9\cos120^\circ=15.5$ m; B: $14-12\cos90^\circ=14$ m; A is higher` },
  { level: 3, space: 4, q: "A wheel is reversed so it turns the other way at the same speed. How does the height–time graph change? Explain.", recap: "Explain.", ans: "it does not change: the rider still rises from the bottom to the top in half a turn" },
  { level: 3, space: 5, q: "Sketch two turns of the height graph for a wheel with radius 5 m, hub 7 m, 20 s per turn, boarding at the bottom.", recap: "Sketch.", ans: "min 2 at t = 0, 20, 40; max 12 at t = 10, 30; axis h = 7",
    fig: gridW({ xmin: 0, xmax: 40, ymin: 0, ymax: 14 }, { x: 5, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)" }) },
];


export const WS = {
  code: "6.3",
  title: "Interpreting Sinusoidal Graphs",
  bigideas: S`For a point on a turning wheel: axis = hub height, amplitude = radius, period = time (or distance) per turn, max = hub + radius, min = hub − radius. Restrict the domain and range to what makes sense in the situation.`,
  goals: ["Read real sinusoidal graphs.", "Connect properties to the situation.", "Find times of max, min and axis values.", "State domain and range in context."],
  curriculum: "D3.2, D3.4",
  vocab: [["Hub", "centre of the wheel = axis"], ["Radius", "= amplitude"], ["Period", "time per turn"]],
  hook: "Show a short video of a Ferris wheel. Pause when a car is at the top; ask how high it is and how long until it is there again.",
  concepts: [
    ["1. The wheel–graph dictionary", S`${waveT((t) => 6 - 4 * cos(9 * t), { xmin: 0, xmax: 80, ymin: 0, ymax: 11 }, { x: 10, y: 1 }, { axis: 6, width: 5.5, xlabel: "t", ylabel: "h" })}Radius 4, hub 6, 40 s per turn.`],
    ["2. Key times", "Bottom at 0, axis at ¼ turn, top at ½ turn, axis at ¾ turn."],
    ["3. Context restrictions", "Times only during the ride; heights between min and max."],
  ],
  tips: ["Radius, not diameter.", "Period is time.", "Two axis crossings per turn.", "Use quarter turns.", "State units."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
