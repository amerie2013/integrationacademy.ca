// IB AA SL 5.6 — Kinematics and Rates of Change: displacement, velocity, acceleration; at rest, direction, speeding up; distance travelled; rates of change in context
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "5.6 Kinematics and Rates of Change";
export const ID = "b435db75-786f-46d2-96ba-95f494c62615";
const S = String.raw;
const P = (x, y, label, color = "blue") => ({ x, y, label, color });

export const blocks = () => [
  intro({
    icon: "🏃",
    title: "Kinematics and Rates of Change",
    overview: S`A particle moving along a straight line has a displacement \(s(t)\) from a fixed point. Its velocity is the rate of change of displacement, \(v=\frac{ds}{dt}\), and its acceleration is the rate of change of velocity, \(a=\frac{dv}{dt}\). In this lesson you will find velocity and acceleration, decide when a particle is at rest, which way it is moving and whether it is speeding up, find the total distance travelled, and interpret other rates of change such as marginal cost and the rate of change of a volume.`,
    goals: [
      "find \\(v=\\frac{ds}{dt}\\) and \\(a=\\frac{dv}{dt}=\\frac{d^2s}{dt^2}\\);",
      "find when a particle is at rest and the direction of motion;",
      "decide whether a particle is speeding up or slowing down;",
      "find the total distance travelled, allowing for changes of direction;",
      "interpret derivatives as rates of change in other contexts, with units.",
    ],
    curriculum: "SL 5.9 (kinematics problems involving displacement s, velocity v, acceleration a and total distance travelled) with SL 5.1 (derivative as rate of change)",
    prior: [
      [S`Differentiate \(t^3-6t^2+9t\).`, S`\(3t^2-12t+9\).`],
      [S`Solve \(3t^2-12t+9=0\).`, S`\(t=1\) or \(3\).`],
      [S`What are the units of a rate of change of distance (m) with time (s)?`, "m/s."],
    ],
    words: [
      ["Displacement \\(s\\)", "position relative to a fixed origin O (can be negative)", "\\(s=-3\\) m: 3 m left of O"],
      ["Velocity \\(v\\)", "\\(\\frac{ds}{dt}\\); its sign gives the direction", "\\(v<0\\): moving left"],
      ["Speed", "\\(|v|\\)", "speed 4 m/s"],
      ["Acceleration \\(a\\)", "\\(\\frac{dv}{dt}\\)", "m/s²"],
      ["At rest", "\\(v=0\\)", "an instant where the direction may change"],
    ],
  }),

  section("📌 Displacement, velocity and acceleration", S`
  <p>For \(s=t^3-6t^2+9t\) (metres, \(t\ge0\) seconds): \(v=3t^2-12t+9=3(t-1)(t-3)\) and \(a=6t-12\). The particle is at rest at \(t=1\) and \(t=3\), moves right (\(v>0\)) for \(0\le t<1\) and \(t>3\), and left for \(1<t<3\).</p>
  ${table(["t", "0", "1", "2", "3", "4"], [["s", "0", "4", "2", "0", "4"], ["v", "9", "0", "−3", "0", "9"], ["a", "−12", "−6", "0", "6", "12"]])}
  ${plane({ view: { xmin: -0.2, xmax: 4.5, ymin: -14, ymax: 14 }, step: { x: 0.5, y: 2 }, curves: [{ f: (t) => t ** 3 - 6 * t * t + 9 * t, a: 0, b: 4.4, color: "violet" }, { f: (t) => 3 * t * t - 12 * t + 9, a: 0, b: 4.4, color: "green" }, { f: (t) => 6 * t - 12, a: 0, b: 4.4, color: "red" }], points: [P(1, 4, "(1, 4)"), P(3, 0, "(3, 0)")], xlabel: "t", ylabel: "" }, "s (violet), v (green), a (red): at rest where v = 0, i.e. where s turns")}
  ${keyIdea(S`Speeding up when \(v\) and \(a\) have the same sign; slowing down when they have opposite signs. At \(t=2\): \(v=-3\), \(a=0\); at \(t=2.5\): \(v=-2.25\), \(a=3\) — slowing down.`)}`),

  section("📌 Distance travelled and other rates", S`
  <p>Displacement is net change of position; distance counts every metre. Split the time at the instants of rest and add the sizes of the changes. From \(t=0\) to \(t=4\) above: \(|4-0|+|0-4|+|4-0|=12\) m, although the displacement is only 4 m.</p>
  <svg viewBox="0 0 460 90" width="460" height="90" style="max-width:100%;display:block;margin:10px auto" font-family="Arial, sans-serif"><line x1="40" y1="40" x2="420" y2="40" stroke="#94a3b8" stroke-width="2"/><g font-size="12" fill="#334155" text-anchor="middle"><text x="80" y="60">0</text><text x="160" y="60">1</text><text x="240" y="60">2</text><text x="320" y="60">3</text><text x="400" y="60">4</text><text x="230" y="82">s (m)</text></g><path d="M80,32 L392,32" stroke="#7c3aed" stroke-width="3" marker-end="url(#a1)"/><path d="M400,22 L88,22" stroke="#16a34a" stroke-width="3" marker-end="url(#a2)"/><path d="M80,12 L392,12" stroke="#2563eb" stroke-width="3" marker-end="url(#a3)"/><defs><marker id="a1" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8z" fill="#7c3aed"/></marker><marker id="a2" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8z" fill="#16a34a"/></marker><marker id="a3" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8z" fill="#2563eb"/></marker></defs><g font-size="11" font-weight="700"><text x="425" y="36" fill="#7c3aed">0→1 s</text><text x="40" y="26" fill="#16a34a">1→3 s</text><text x="425" y="16" fill="#2563eb">3→4 s</text></g></svg>
  <p>Any derivative is a rate of change. If \(C(x)\) is the cost of \(x\) items, \(C'(x)\) is the <em>marginal cost</em> — approximately the cost of one more item. If \(V(t)\) is a volume, \(V'(t)\) is the flow rate.</p>
  ${plane({ view: { xmin: -5, xmax: 105, ymin: -50, ymax: 1300 }, step: { x: 10, y: 100 }, curves: [{ f: (x) => 200 + 12 * x - 0.05 * x * x, a: 0, b: 100, color: "violet" }, { f: (x) => 9 * (x - 30) + 515, a: 5, b: 70, color: "red" }], points: [P(30, 515, "(30, 515)")], xlabel: "items", ylabel: "cost" }, "C(x) = 200 + 12x − 0.05x²: the marginal cost at x = 30 is C′(30) = 9 per item")}
  ${plane({ view: { xmin: -0.3, xmax: 5.3, ymin: -20, ymax: 25 }, step: { x: 0.5, y: 5 }, curves: [{ f: (t) => 20 * t - 5 * t * t, a: 0, b: 5, color: "violet" }, { f: (t) => 20 - 10 * t, a: 0, b: 5, color: "green" }], points: [P(2, 20, "top (2, 20)"), P(2, 0, "v = 0", "green")], xlabel: "t", ylabel: "" }, "A ball thrown upwards: s = 20t − 5t² (violet), v = 20 − 10t (green); a = −10 throughout")}
  ${watchOut([
    "s, v and a are signed: negative velocity means moving in the negative direction.",
    "Speeding up depends on v and a together, not on a alone.",
    "Distance ≠ displacement when the particle changes direction: split at v = 0.",
    "Give units: m, m/s, m/s².",
  ])}`),

  section("📌 Explore", S`<p>Choose a motion and drag the time. The dot on the line shows the particle; the readout says whether it is speeding up or slowing down.</p>`),

  widget("ibMotion", { init: [0, 1.5] }),

  examples([
    ["Level 1 · Velocity and acceleration", S`\(s=2t^3-9t^2+12t\) m. Find \(v\) and \(a\) at \(t=3\) s.`,
      [S`\(v=6t^2-18t+12\Rightarrow v(3)=54-54+12=12\) m/s.`, S`\(a=12t-18\Rightarrow a(3)=18\) m/s².`],
      S`\(12\) m/s; \(18\) m/s²`],
    ["Level 1 · At rest", S`For \(s=2t^3-9t^2+12t\), find when the particle is at rest and where it is then.`,
      [S`\(v=6(t-1)(t-2)=0\Rightarrow t=1, 2\).`, S`\(s(1)=5\), \(s(2)=4\).`],
      S`\(t=1\) (at 5 m), \(t=2\) (at 4 m)`,
      plane({ view: { xmin: -0.2, xmax: 3.2, ymin: -1, ymax: 10 }, step: { x: 0.5, y: 1 }, curves: [{ f: (t) => 2 * t ** 3 - 9 * t * t + 12 * t, a: 0, b: 3, color: "violet" }], points: [P(1, 5, "(1, 5)"), P(2, 4, "(2, 4)")], xlabel: "t", ylabel: "s" })],
    ["Level 2 · Speeding up", S`For \(s=2t^3-9t^2+12t\), is the particle speeding up or slowing down at \(t=1.2\)?`,
      [S`\(v(1.2)=8.64-21.6+12=-0.96\).`, S`\(a(1.2)=14.4-18=-3.6\).`, "Same sign: speeding up (moving left)."],
      "speeding up"],
    ["Level 2 · Distance travelled", S`For \(s=2t^3-9t^2+12t\), find the total distance travelled from \(t=0\) to \(t=3\).`,
      [S`Direction changes at \(t=1\) and \(t=2\): \(s(0)=0\), \(s(1)=5\), \(s(2)=4\), \(s(3)=9\).`, S`Distance \(5+1+5=11\) m.`],
      S`\(11\) m`],
    ["Level 3 · Marginal cost", S`The cost of producing \(x\) phones is \(C(x)=5000+80x-0.02x^2\) dollars (\(0\le x\le1500\)). Find \(C'(500)\), interpret it, and compare with the actual cost of the 501st phone.`,
      [S`\(C'(x)=80-0.04x\Rightarrow C'(500)=60\) dollars per phone.`, S`At 500 phones, each extra phone costs about 60 dollars.`, S`\(C(501)-C(500)=80-0.02(501^2-500^2)=80-20.02=59.98\) dollars.`],
      "60 dollars per phone (actual 59.98)"],
  ]),

  practice([
    q("Level 1 · velocity", S`\(s=t^2+4t\). Find \(v\) at \(t=3\).`, num(10),
      "v = 2t + 4.", [S`\(6+4\).`], S`\(10\)`),
    q("Level 1 · acceleration", S`\(v=5t^2-2t\). Find \(a\) at \(t=1\).`, num(8),
      "a = 10t − 2.", [S`\(10-2\).`], S`\(8\)`),
    q("Level 2 · at rest", S`\(s=t^2-10t+3\). When is the particle at rest?`, num(5),
      "v = 2t − 10 = 0.", [S`\(t=5\).`], S`\(t=5\)`),
    q("Level 2 · direction", S`At some instant \(v=-4\) and \(a=3\). The particle is:`, choice(["slowing down", "speeding up", "at rest", "moving at constant speed"], 0),
      "Compare the signs of v and a.", ["Opposite signs."], "slowing down"),
    q("Level 2 · marginal", S`\(C(x)=300+15x-0.1x^2\). Find the marginal cost \(C'(20)\).`, num(11),
      "C′ = 15 − 0.2x.", [S`\(15-4\).`], S`\(11\)`),
  ]),

  ...hard([
    ["A ball thrown upwards", S`A ball's height is \(s=1.5+19.6t-4.9t^2\) m. Find its maximum height, when it lands, and its velocity on landing.`,
      [S`\(v=19.6-9.8t=0\Rightarrow t=2\); \(s(2)=1.5+39.2-19.6=21.1\) m.`, S`\(4.9t^2-19.6t-1.5=0\Rightarrow t=\frac{19.6+\sqrt{384.16+29.4}}{9.8}\approx4.08\) s.`, S`\(v(4.08)\approx19.6-39.96\approx-20.3\) m/s (downwards).`],
      S`21.1 m; 4.08 s; −20.3 m/s`,
      plane({ view: { xmin: -0.2, xmax: 4.4, ymin: -1, ymax: 24 }, step: { x: 0.5, y: 2 }, curves: [{ f: (t) => 1.5 + 19.6 * t - 4.9 * t * t, a: 0, b: 4.075, color: "violet" }], points: [P(2, 21.1, "(2, 21.1)"), P(4.075, 0, "(4.08, 0)")], xlabel: "t", ylabel: "s" })],
    ["Distance with a change of direction", S`A particle has \(v=t^2-6t+8\) m/s and starts at \(s=0\). Given \(s=\frac{t^3}{3}-3t^2+8t\), find the distance travelled in the first 4 s.`,
      [S`\(v=(t-2)(t-4)\): at rest at \(t=2\) and \(4\).`, S`\(s(2)=\frac83-12+16=\frac{20}{3}\); \(s(4)=\frac{64}{3}-48+32=\frac{16}{3}\).`, S`Distance \(\frac{20}{3}+\left(\frac{20}{3}-\frac{16}{3}\right)=8\) m.`],
      S`\(8\) m`],
  ], [
    q("Level 3 · speed", S`\(s=t^3-12t\). Find the speed (m/s) at \(t=1\).`, num(9),
      "v = 3t² − 12.", [S`\(|3-12|\).`], S`\(9\)`),
    q("Level 3 · zero acceleration", S`\(s=t^3-9t^2+15t\). Find the velocity when the acceleration is zero.`, num(-12),
      "a = 6t − 18 = 0 at t = 3.", [S`\(v(3)=27-54+15\).`], S`\(-12\)`),
    q("Level 3 · volume", S`A tank holds \(V=2000-60t+0.5t^2\) litres. At what time (min) does the volume stop decreasing?`, num(60),
      "V′ = −60 + t = 0.", [S`\(t=60\).`], S`\(60\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between velocity and speed?", "Velocity has a sign (direction); speed is its size, |v|."],
      ["How do I know when a particle changes direction?", "When v = 0 and v changes sign."],
      ["When is a particle speeding up?", "When v and a have the same sign (both positive or both negative)."],
      ["Why isn't distance just s(end) − s(start)?", "That is the displacement. If the particle turns back, split the interval at the turning times and add the sizes of each change."],
      ["What does a marginal cost tell me?", "The rate of change of cost: approximately the cost of producing one more item."],
    ],
    summary: [
      "v = ds/dt, a = dv/dt = d²s/dt².",
      "At rest: v = 0; direction from the sign of v.",
      "Speeding up: v and a same sign.",
      "Distance: split at v = 0 and add |changes|.",
      "Every derivative is a rate of change with units.",
    ],
    next: "5.7 reviews differentiation with mixed exam-style questions.",
  }),
];
