// IB AA SL 10.6 — Kinematics with Integration: velocity from acceleration and displacement from velocity with initial conditions, displacement ∫v dt, distance ∫|v| dt, changes of direction, velocity–time graphs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { fig, areaDoc } from "./figs10.mjs";

export const TITLE = "10.6 Kinematics with Integration";
export const ID = "1baa0010-0001-4001-8001-000000001006";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });
const v1 = (t) => t * t - 6 * t + 8;

export const blocks = () => [
  intro({
    icon: "🚗",
    title: "Kinematics with Integration",
    overview: S`In chapter 5 you differentiated displacement to get velocity and acceleration. Integration runs the chain backwards: velocity is the integral of acceleration, and displacement is the integral of velocity. In this lesson you will use initial conditions to find \(v(t)\) and \(s(t)\), find displacement as \(\int v\,dt\) and distance as \(\int|v|\,dt\), and read both from velocity–time graphs.`,
    goals: [
      S`find \(v(t)=\int a(t)\,dt\) and \(s(t)=\int v(t)\,dt\) using initial conditions;`,
      S`find displacement \(\int_{t_1}^{t_2}v(t)\,dt\);`,
      S`find total distance \(\int_{t_1}^{t_2}|v(t)|\,dt\) by splitting where \(v=0\);`,
      "interpret areas on a velocity–time graph;",
      "use a GDC for distance when v is awkward.",
    ],
    curriculum: "SL 5.9 (kinematics: displacement, velocity, acceleration; total distance travelled as ∫|v| dt)",
    prior: [
      [S`If \(s(t)=t^3-2t\), find \(v(t)\).`, S`\(3t^2-2\).`],
      [S`Solve \(t^2-6t+8=0\).`, S`\(t=2\) or \(t=4\).`],
      [S`Evaluate \(\int_0^3(2t+1)\,dt\).`, "12."],
    ],
    words: [
      ["Displacement", "change in position (signed)", S`\(\int v\,dt\)`],
      ["Distance", "total length travelled (never negative)", S`\(\int|v|\,dt\)`],
      ["Initial condition", S`a known value at \(t=0\)`, S`\(s(0)=3\)`],
      ["At rest", S`\(v=0\)`, "possible change of direction"],
      ["Speed", S`\(|v|\)`, ""],
    ],
  }),

  section("📌 Integrating back up the chain", S`
  ${table(["Differentiate", "Integrate"], [[S`\(s\to v=\frac{ds}{dt}\to a=\frac{dv}{dt}\)`, S`\(a\to v=\int a\,dt\to s=\int v\,dt\)`]])}
  <p>Each integration brings a constant, found from an initial condition. If \(a(t)=12t-4\), \(v(0)=3\) and \(s(0)=-2\): \(v(t)=6t^2-4t+3\) and \(s(t)=2t^3-2t^2+3t-2\).</p>
  ${plane({ view: { xmin: 0, xmax: 2.5, ymin: -4, ymax: 30 }, step: { x: 0.5, y: 4 }, curves: [{ f: (t) => 2 * t ** 3 - 2 * t * t + 3 * t - 2, a: 0, b: 2.5, color: "violet" }, { f: (t) => 6 * t * t - 4 * t + 3, a: 0, b: 2.5, color: "amber" }, { f: (t) => 12 * t - 4, a: 0, b: 2.5, color: "green" }], points: [P(0, -2, "s(0) = −2"), P(0, 3, "v(0) = 3", "amber")] }, "s (violet), v (amber) and a (green): each is the integral of the next")}
  ${keyIdea("Integrate a to get v, and v to get s. Use the initial conditions to find each constant.")}`),

  section("📌 Displacement versus distance", S`
  <p>Displacement \(\int_{t_1}^{t_2}v\,dt\) is the signed area under the velocity–time graph: time spent moving backwards subtracts. Distance \(\int_{t_1}^{t_2}|v|\,dt\) counts every part as positive, so split the interval where \(v=0\).</p>
  <p>For \(v(t)=t^2-6t+8=(t-2)(t-4)\) on \([0,5]\): the particle moves forwards, backwards on \((2,4)\), then forwards again.</p>
  ${fig(areaDoc({ view: { xmin: -0.3, xmax: 5.5, ymin: -2, ymax: 9 }, step: { x: 1, y: 1 }, curves: [{ f: v1, color: "violet" }], points: [P(2, 0, "t = 2", "red"), P(4, 0, "t = 4", "red")], xlabel: "t", ylabel: "v" }, [{ f: v1, a: 0, b: 2, color: "green" }, { f: v1, a: 2, b: 4, color: "red" }, { f: v1, a: 4, b: 5, color: "green" }]), "Green areas 20/3 and 4/3 forwards; red area 4/3 backwards")}
  ${table(["Interval", S`\(\int v\,dt\)`], [["[0, 2]", S`\(\frac{20}3\)`], ["[2, 4]", S`\(-\frac43\)`], ["[4, 5]", S`\(\frac43\)`]])}
  <p>Displacement \(=\frac{20}3-\frac43+\frac43=\frac{20}3\); distance \(=\frac{20}3+\frac43+\frac43=\frac{28}3\).</p>
  ${fig(areaDoc({ view: { xmin: -0.3, xmax: 6, ymin: -3, ymax: 9 }, step: { x: 1, y: 1 }, curves: [{ f: (t) => 8 * Math.exp(-0.5 * t) - 2, color: "violet" }], points: [P(2 * Math.log(4), 0, "t = 2 ln 4", "red")], xlabel: "t", ylabel: "v" }, [{ f: (t) => 8 * Math.exp(-0.5 * t) - 2, a: 0, b: 2 * Math.log(4), color: "green" }, { f: (t) => 8 * Math.exp(-0.5 * t) - 2, a: 2 * Math.log(4), b: 6, color: "red" }]), "v = 8e^(−0.5t) − 2 changes sign at t = 2 ln 4 ≈ 2.77")}
  ${watchOut([
    "Displacement can be negative or zero; distance cannot.",
    "Find where v = 0 inside the interval before computing distance.",
    "The constant in s(t) is the starting position, not the displacement.",
    "On a GDC, distance = ∫|v| dt — use the absolute-value function.",
  ])}`),

  section("📌 Explore", S`<p>Choose a velocity function and move the end time. Green area adds to displacement and distance; red area subtracts from displacement but adds to distance.</p>`),

  widget("ibVelocity", { init: [1, 5] }),

  examples([
    ["Level 1 · Velocity from acceleration", S`A particle has \(a(t)=4-2t\) and \(v(0)=5\). Find \(v(t)\) and the time it comes to rest (\(t\ge0\)).`,
      [S`\(v=4t-t^2+5\).`, S`\(t^2-4t-5=0\Rightarrow(t-5)(t+1)=0\).`],
      S`\(v(t)=-t^2+4t+5\); at rest at \(t=5\)`],
    ["Level 1 · Displacement", S`\(v(t)=3t^2-2\) m/s. Find the displacement from \(t=1\) to \(t=3\).`,
      [S`\(\left[t^3-2t\right]_1^3=(27-6)-(1-2)\).`],
      S`\(22\) m`],
    ["Level 2 · Position", S`\(v(t)=2t-5\) and \(s(0)=4\). Find \(s(t)\) and the position at \(t=6\).`,
      [S`\(s=t^2-5t+4\).`, S`\(s(6)=36-30+4\).`],
      S`\(s(t)=t^2-5t+4\); \(s(6)=10\)`,
      plane({ view: { xmin: -0.3, xmax: 6.5, ymin: -3, ymax: 12 }, step: { x: 1, y: 1 }, curves: [{ f: (t) => t * t - 5 * t + 4, a: 0, b: 6.5, color: "violet" }], points: [P(0, 4, "(0, 4)"), P(2.5, -2.25, "turns (2.5, −2.25)", "red"), P(6, 10, "(6, 10)")], xlabel: "t", ylabel: "s" }, "Position s(t) = t² − 5t + 4: the particle turns at t = 2.5")],
    ["Level 2 · Distance", S`For \(v(t)=2t-5\), find the distance travelled from \(t=0\) to \(t=6\).`,
      [S`\(v=0\) at \(t=2.5\).`, S`\(\left|\int_0^{2.5}v\,dt\right|=6.25\); \(\int_{2.5}^6v\,dt=12.25\).`],
      S`\(18.5\)`],
    ["Level 3 · Exponential velocity", S`\(v(t)=8e^{-0.5t}-2\). Find the displacement and the distance travelled in the first 6 seconds.`,
      [S`\(s=-16e^{-0.5t}-2t\). Displacement \(\left[-16e^{-0.5t}-2t\right]_0^6=(-16e^{-3}-12)+16\approx3.203\).`, S`\(v=0\) at \(t=2\ln4\approx2.773\); forward part \(\approx6.455\), backward part \(\approx3.251\).`, S`Distance \(\approx6.455+3.251\).`],
      S`\(\approx3.20\); \(\approx9.71\)`],
  ]),

  practice([
    q("Level 1 · displacement", S`\(v(t)=6t\). Find the displacement from \(t=0\) to \(t=2\).`, num(12),
      "[3t²]₀².", [S`\(12\).`], S`\(12\)`),
    q("Level 1 · velocity", S`\(a(t)=6\) and \(v(0)=-4\). Find \(v(3)\).`, num(14),
      "v = 6t − 4.", [S`\(18-4\).`], S`\(14\)`),
    q("Level 2 · position", S`\(v(t)=3t^2-4t\) and \(s(0)=2\). Find \(s(2)\).`, num(2),
      "s = t³ − 2t² + 2.", [S`\(8-8+2\).`], S`\(2\)`),
    q("Level 2 · distance", S`\(v(t)=t-3\). Find the distance from \(t=0\) to \(t=5\).`, num(6.5, 0.001),
      "Split at t = 3.", [S`\(4.5+2\).`], S`\(6.5\)`),
    q("Level 2 · meaning", S`If \(\int_0^{10}v\,dt=0\), then the particle:`, choice(["ends where it started", "never moved", "travelled zero distance", "was always at rest"], 0),
      "Zero displacement.", ["It may have moved forwards and back."], "ends where it started"),
  ]),

  ...hard([
    ["Two particles", S`Particle A has \(v_A=4t\) and particle B has \(v_B=t^2+3\), both starting at the origin. When are they together again, and how far has each travelled?`,
      [S`\(s_A=2t^2\), \(s_B=\frac13t^3+3t\).`, S`\(2t^2=\frac13t^3+3t\Rightarrow t(t^2-6t+9)=0\Rightarrow t=3\).`, S`Both velocities are positive, so each distance equals its displacement: \(s=18\).`],
      S`\(t=3\); 18 each`,
      plane({ view: { xmin: 0, xmax: 4, ymin: -1, ymax: 34 }, step: { x: 0.5, y: 4 }, curves: [{ f: (t) => 2 * t * t, a: 0, b: 4, color: "violet" }, { f: (t) => t ** 3 / 3 + 3 * t, a: 0, b: 4, color: "amber" }], points: [P(3, 18, "(3, 18)", "red")], xlabel: "t", ylabel: "s" }, "Positions of A (violet) and B (amber): they meet again at t = 3")],
    ["From acceleration to distance", S`\(a(t)=2t-6\), \(v(0)=8\). Find the total distance travelled from \(t=0\) to \(t=5\).`,
      [S`\(v=t^2-6t+8=(t-2)(t-4)\).`, S`Pieces: \(\frac{20}3\), \(\frac43\) (backwards), \(\frac43\).`, S`Distance \(\frac{28}3\).`],
      S`\(\frac{28}3\)`],
  ], [
    q("Level 3 · exponential", S`\(v(t)=e^{-t}\). Find the displacement from \(t=0\) to \(t=3\) (3 d.p.).`, num(1 - Math.exp(-3), 0.001),
      "[−e^(−t)]₀³.", [S`\(1-e^{-3}\).`], S`\(\approx0.950\)`),
    q("Level 3 · distance", S`\(v(t)=t^2-4\). Find the distance from \(t=0\) to \(t=3\) (3 d.p.).`, num(16 / 3 + 7 / 3, 0.001),
      "Split at t = 2.", [S`\(\frac{16}3+\frac73\).`], S`\(\frac{23}3\)`),
    q("Level 3 · initial condition", S`\(a(t)=6t+2\), \(v(1)=10\), \(s(0)=0\). Find \(s(2)\).`, num(22, 0.001),
      "v = 3t² + 2t + 5.", [S`\(s=t^3+t^2+5t\); \(s(2)=8+4+10\).`], S`\(22\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I get v from a?", "Integrate and use an initial velocity to find the constant."],
      ["What is the difference between displacement and distance?", "Displacement is signed (∫v dt); distance is ∫|v| dt, always positive."],
      ["How do I find distance by hand?", "Find where v = 0, integrate each piece, and add the absolute values."],
      ["What does the area under a v–t graph mean?", "Above the axis: forward displacement; below: backward."],
      ["What does s(0) tell me?", "The starting position."],
    ],
    summary: [
      "v = ∫a dt, s = ∫v dt (+ initial conditions).",
      "Displacement = ∫v dt; distance = ∫|v| dt.",
      "Split at v = 0 to find distance.",
      "Area under v–t graph = displacement.",
    ],
    next: "10.7 reviews integration with mixed exam-style questions.",
  }),
];
