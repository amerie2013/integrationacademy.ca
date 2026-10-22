// IB AA SL 13.6 — Kinematics and Accumulating Change: displacement, velocity and acceleration with trigonometric and exponential models; displacement versus distance; net change from a rate of change
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { fig, areaDoc } from "./figs13.mjs";

export const TITLE = "13.6 Kinematics and Accumulating Change";
export const ID = "1baa0013-0001-4001-8001-000000001306";
const S = String.raw;
const PI = Math.PI;
const P = (x, y, label, color = "red") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🚀",
    title: "Kinematics and Accumulating Change",
    overview: S`Oscillating objects — a mass on a spring, a piston, a pendulum — move with sine and cosine displacements, so their velocities and accelerations come from the derivatives in 13.2. Going the other way, integrating a velocity gives displacement, and integrating any rate of change (a flow, a growth rate) gives the net change. This lesson brings those ideas together for trigonometric and exponential models.`,
    goals: [
      "find velocity and acceleration from a displacement function by differentiating;",
      "find displacement from velocity (and velocity from acceleration) using a boundary condition;",
      "distinguish displacement from distance travelled;",
      "find when a particle is at rest or changes direction;",
      "find the net change of a quantity from its rate of change.",
    ],
    curriculum: "SL 5.9 (kinematics: s, v, a; displacement and distance), SL 5.11 (definite integrals as accumulated change)",
    prior: [
      [S`Differentiate \(4\sin2t\).`, S`\(8\cos2t\).`],
      [S`Evaluate \(\int_0^\pi\sin t\,dt\).`, S`\(2\).`],
      [S`What is the difference between displacement and distance?`, "Displacement is signed change in position; distance is total path length."],
    ],
    words: [
      ["Velocity", S`\(v=\frac{ds}{dt}\)`, ""],
      ["Acceleration", S`\(a=\frac{dv}{dt}=\frac{d^2s}{dt^2}\)`, ""],
      ["Displacement", S`\(\int_{t_1}^{t_2}v\,dt\)`, ""],
      ["Distance", S`\(\int_{t_1}^{t_2}|v|\,dt\)`, ""],
      ["Net change", S`\(Q(b)-Q(a)=\int_a^bQ'(t)\,dt\)`, ""],
    ],
  }),

  section("📌 Oscillating motion", S`
  <p>A mass on a spring has displacement \(s=4\sin2t\) cm. Then \(v=8\cos2t\) and \(a=-16\sin2t=-4s\): the acceleration always points back towards the centre. The mass is at rest (\(v=0\)) at the turning points \(t=\frac{\pi}{4},\frac{3\pi}{4},\dots\)</p>
  ${plane({ view: { xmin: 0, xmax: PI, ymin: -17, ymax: 17 }, step: { x: PI / 4, y: 4 }, curves: [{ f: (t) => 4 * Math.sin(2 * t), color: "violet" }, { f: (t) => 8 * Math.cos(2 * t), color: "green" }, { f: (t) => -16 * Math.sin(2 * t), color: "amber" }], points: [P(PI / 4, 4, "at rest")] }, "s = 4 sin 2t (violet), v = 8 cos 2t (green), a = −16 sin 2t (amber)")}
  ${table(["Given", "To find", "Operation"], [["s(t)", "v(t), a(t)", "differentiate"], ["a(t) and v(0)", "v(t)", "integrate, then use v(0)"], ["v(t) and s(0)", "s(t)", "integrate, then use s(0)"], ["v(t)", "distance", S`\(\int|v|\,dt\), split where \(v=0\)`]])}
  <p>For \(v=2\sin t\) on \([0,2\pi]\): the displacement is \(\int_0^{2\pi}2\sin t\,dt=0\) — the particle ends where it started — but the distance is \(4+4=8\).</p>
  ${fig(areaDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -2.5, ymax: 2.5 }, step: { x: PI / 2, y: 0.5 }, curves: [{ f: (t) => 2 * Math.sin(t), color: "violet" }] }, [{ f: (t) => 2 * Math.sin(t), a: 0, b: PI, color: "green" }, { f: (t) => 2 * Math.sin(t), a: PI, b: 2 * PI, color: "red" }]), "v = 2 sin t: displacement 4 − 4 = 0, distance 4 + 4 = 8")}
  ${keyIdea("Differentiate to go s → v → a; integrate (with a boundary condition) to go back. Distance needs |v|.")}`),

  section("📌 Accumulating change", S`
  <p>If a quantity Q changes at rate \(Q'(t)\), the change between \(t=a\) and \(t=b\) is \(\int_a^bQ'(t)\,dt\). Water flows into a reservoir at \(r(t)=50+20\sin\frac{\pi t}{12}\) L/h. In the first 12 hours the volume added is \(\int_0^{12}r\,dt=600+\frac{480}{\pi}\approx752.8\) L.</p>
  ${fig(areaDoc({ view: { xmin: 0, xmax: 24, ymin: 0, ymax: 80 }, step: { x: 2, y: 10 }, curves: [{ f: (t) => 50 + 20 * Math.sin((PI * t) / 12), color: "violet" }] }, [{ f: (t) => 50 + 20 * Math.sin((PI * t) / 12), a: 0, b: 12, color: "blue" }]), "the shaded area under the flow rate is the 752.8 L added in 12 hours")}
  ${plane({ view: { xmin: 0, xmax: 24, ymin: 0, ymax: 1300 }, step: { x: 2, y: 200 }, curves: [{ f: (t) => 50 * t + (240 / PI) * (1 - Math.cos((PI * t) / 12)), color: "green" }], points: [P(12, 600 + 480 / PI, "(12, 752.8)")] }, "the accumulated volume V(t) = 50t + (240/π)(1 − cos(πt/12)) rises fastest at t = 6")}
  ${watchOut([
    "A definite integral of v gives displacement, not distance, unless v never changes sign.",
    "Find the zeros of v first — they are where the particle turns.",
    "Use the boundary condition to find C before evaluating anything else.",
    "Keep units: L/h integrated over hours gives litres.",
  ])}`),

  section("📌 Explore", S`<p>Choose a rate and move the end time. Compare the net change (signed) with the total (absolute value).</p>`),

  widget("ibAccumulate", { init: [0, 4] }),

  examples([
    ["Level 1 · Differentiate", S`For \(s=4\sin2t\), find v and a at \(t=\frac{\pi}{6}\).`,
      [S`\(v=8\cos2t=8\cdot\frac12\); \(a=-16\sin2t=-16\cdot\frac{\sqrt3}{2}\).`],
      S`\(v=4\), \(a=-8\sqrt3\approx-13.86\)`],
    ["Level 1 · Integrate", S`\(v=3\cos t\) and \(s(0)=2\). Find \(s(t)\).`,
      [S`\(s=3\sin t+C\); \(s(0)=C=2\).`],
      S`\(s=3\sin t+2\)`],
    ["Level 2 · At rest", S`When, for \(0<t<7\), is a particle with \(v=e^{-t}\sin t\) at rest?`,
      [S`\(e^{-t}>0\), so \(v=0\iff\sin t=0\).`],
      S`\(t=\pi,\ 2\pi\)`],
    ["Level 2 · Displacement and distance", S`For \(v=2\cos t+1\) on \([0,2\pi]\), find the displacement.`,
      [S`\(\int_0^{2\pi}(2\cos t+1)dt=[2\sin t+t]_0^{2\pi}=2\pi\).`],
      S`\(2\pi\approx6.283\)`],
    ["Level 3 · Distance", S`For the same particle, find the total distance travelled on \([0,2\pi]\).`,
      [S`\(v=0\) when \(\cos t=-\frac12\): \(t=\frac{2\pi}{3},\frac{4\pi}{3}\); v < 0 between them.`, S`Backward part: \(\left|[2\sin t+t]_{2\pi/3}^{4\pi/3}\right|=2\sqrt3-\frac{2\pi}{3}\approx1.370\).`, S`Distance \(=2\pi+2\left(2\sqrt3-\frac{2\pi}{3}\right)\approx9.023\).`],
      S`\(\approx9.023\)`,
      fig(areaDoc({ view: { xmin: 0, xmax: 2 * PI, ymin: -1.5, ymax: 3.5 }, step: { x: PI / 3, y: 0.5 }, curves: [{ f: (t) => 2 * Math.cos(t) + 1, color: "violet" }], points: [P((2 * PI) / 3, 0, "2π/3"), P((4 * PI) / 3, 0, "4π/3")] }, [{ f: (t) => Math.max(0, 2 * Math.cos(t) + 1), a: 0, b: 2 * PI, color: "green" }, { f: (t) => Math.min(0, 2 * Math.cos(t) + 1), a: 0, b: 2 * PI, color: "red" }]), "v = 2 cos t + 1: green areas forward, red area backward")],
  ]),

  practice([
    q("Level 1 · velocity", S`\(s=5\cos t\). Find v at \(t=\frac{\pi}{2}\).`, num(-5),
      "v = −5 sin t.", [S`\(-5\cdot1\).`], S`\(-5\)`),
    q("Level 1 · acceleration", S`\(v=6\sin3t\). Find a at \(t=0\).`, num(18),
      "a = 18 cos 3t.", [S`\(18\cos0\).`], S`\(18\)`),
    q("Level 2 · displacement", S`\(v=\cos t\). Find the displacement from \(t=0\) to \(t=\frac{\pi}{2}\).`, num(1),
      "[sin t].", [S`\(1-0\).`], S`\(1\)`),
    q("Level 2 · shifted", S`\(v=\sin t-0.5\). Find the displacement on \([0,\pi]\) (3 d.p.).`, num(2 - PI / 2, 0.001),
      "[−cos t − 0.5t].", [S`\(2-\frac{\pi}{2}\).`], S`\(\approx0.429\)`),
    q("Level 2 · turning", S`A particle with \(v=4\cos2t\) first changes direction at:`, choice([S`\(t=\frac{\pi}{4}\)`, S`\(t=\frac{\pi}{2}\)`, S`\(t=\pi\)`, S`\(t=\frac{\pi}{8}\)`], 0),
      "cos 2t = 0 and changes sign.", [S`\(2t=\frac{\pi}{2}\).`], S`\(t=\frac{\pi}{4}\)`),
  ]),

  ...hard([
    ["Growth from a rate", S`A town's population grows at \(P'(t)=200e^{0.05t}\) people per year, with \(P(0)=10\,000\). Find \(P(10)\).`,
      [S`\(P(10)-P(0)=\int_0^{10}200e^{0.05t}dt=\left[4000e^{0.05t}\right]_0^{10}=4000(e^{0.5}-1)\).`, S`\(\approx2594.9\), so \(P(10)\approx12\,595\).`],
      S`\(P(10)\approx12\,595\)`,
      fig(areaDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 400 }, step: { x: 1, y: 50 }, curves: [{ f: (t) => 200 * Math.exp(0.05 * t), color: "violet" }] }, [{ f: (t) => 200 * Math.exp(0.05 * t), a: 0, b: 10, color: "green" }]), "the area under P′(t) from 0 to 10 is the growth, about 2595 people")],
    ["Velocity from acceleration", S`A particle has \(a=-9\cos3t\) and \(v(0)=0\), \(s(0)=1\). Find \(s(t)\) and the greatest distance from the origin.`,
      [S`\(v=-3\sin3t+C\), \(v(0)=0\Rightarrow C=0\).`, S`\(s=\cos3t+D\), \(s(0)=1\Rightarrow D=0\).`, S`\(s=\cos3t\) oscillates between −1 and 1.`],
      S`\(s=\cos3t\); greatest distance 1`,
      plane({ view: { xmin: 0, xmax: 2 * PI / 3 * 2, ymin: -3.5, ymax: 3.5 }, step: { x: PI / 6, y: 1 }, curves: [{ f: (t) => Math.cos(3 * t), color: "violet" }, { f: (t) => -3 * Math.sin(3 * t), color: "green" }] }, "s = cos 3t (violet) and v = −3 sin 3t (green)")],
  ], [
    q("Level 3 · maximum speed", S`\(s=t-\sin t\) for \(0\le t\le2\pi\). Find the maximum speed.`, num(2),
      "v = 1 − cos t.", [S`Largest at \(t=\pi\): \(1-(-1)\).`], S`\(2\)`),
    q("Level 3 · from acceleration", S`\(a=-4\sin2t\) and \(v(0)=2\). Find \(v\left(\frac{\pi}{3}\right)\).`, num(-1),
      "v = 2 cos 2t + C, C = 0.", [S`\(2\cos\frac{2\pi}{3}\).`], S`\(-1\)`),
    q("Level 3 · distance", S`\(v=4\sin t\). Find the distance travelled on \(\left[0,\frac{3\pi}{2}\right]\).`, num(12),
      "Split at π.", [S`\(8+4\).`], S`\(12\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I get v from s?", "Differentiate: v = ds/dt; then a = dv/dt."],
      ["How do I get s from v?", "Integrate and use a known position to find C."],
      ["When is a particle at rest?", "When v = 0; it changes direction if v also changes sign."],
      ["Why can displacement be zero when distance is not?", "Forward and backward motions cancel in ∫ v dt but add in ∫ |v| dt."],
      ["What does ∫ of a rate give?", "The net change of the quantity over that interval."],
    ],
    summary: [
      "s → v → a by differentiating.",
      "Integrate back with boundary conditions.",
      "Distance = ∫ |v| dt; split at v = 0.",
      "∫ rate dt = net change.",
    ],
    next: "13.7 reviews the whole chapter.",
  }),
];
