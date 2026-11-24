// MCV4U 2.3 — Velocity, Acceleration, and Second Derivatives: v = s′, a = v′ = s″, at rest, direction, speeding
// up/slowing down, vertical motion under gravity, displacement vs total distance, and higher derivatives
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { chart } from "../mcv4u-ch3/csign.mjs";

export const TITLE = "2.3 Velocity, Acceleration, and Second Derivatives";
export const ID = "cf54e3d1-179e-4d03-8a82-ec494f7a37c3";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🚀",
    title: "Velocity, Acceleration, and Second Derivatives",
    overview: S`If \(s(t)\) is the position of an object moving along a line, its <strong>velocity</strong> is the rate of change of position, \(v(t)=s'(t)\), and its <strong>acceleration</strong> is the rate of change of velocity, \(a(t)=v'(t)=s''(t)\) — the <em>second derivative</em>. The sign of \(v\) tells the direction; the object is at rest when \(v=0\); and it speeds up when \(v\) and \(a\) have the same sign. Derivatives can be taken again and again: \(f'''\), \(f^{(4)}\), and so on.`,
    goals: [
      "find velocity and acceleration from position;",
      "decide when an object is at rest and which way it moves;",
      "decide when an object is speeding up or slowing down;",
      "solve vertical-motion problems;",
      "distinguish displacement from total distance; find higher derivatives.",
    ],
    curriculum: "B2.1 (make connections between the graphical or algebraic representations of derivatives and real-world applications: position, velocity, acceleration), B2.2 (solve problems involving rates of change in motion, including second derivatives)",
    prior: [
      [S`Derivative of \(t^3-6t^2\)?`, S`\(3t^2-12t\).`],
      [S`Solve \(3t^2-12t+9=0\).`, S`\(t=1, 3\).`],
      [S`Units of the rate of change of m/s per s?`, S`m/s².`],
    ],
    words: [
      ["Velocity", "\\(v(t)=s'(t)\\); sign = direction", "m/s"],
      ["Speed", "\\(|v(t)|\\)", ""],
      ["Acceleration", "\\(a(t)=v'(t)=s''(t)\\)", "m/s²"],
      ["Second derivative", "the derivative of the derivative, \\(f''\\) or \\(\\frac{d^2y}{dx^2}\\)", ""],
    ],
  }),

  section("📌 Reading motion", S`
  ${table(["Condition", "Meaning"], [
    ["v > 0 / v < 0", "moving in the positive / negative direction"],
    ["v = 0 and changes sign", "at rest and turning around"],
    ["v and a same sign", "speeding up"],
    ["v and a opposite signs", "slowing down"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 4.5, ymin: -6, ymax: 10 }, curves: [{ f: (t) => t ** 3 - 6 * t * t + 9 * t, a: 0, b: 4.5, color: "violet" }, { f: (t) => 3 * t * t - 12 * t + 9, a: 0, b: 4.5, color: "blue" }, { f: (t) => 6 * t - 12, a: 0, b: 4.5, color: "amber" }], points: [{ x: 1, y: 4, label: "turns (t = 1)", color: "red" }, { x: 3, y: 0, label: "turns (t = 3)", color: "red" }], step: { x: 0.5, y: 2 }, xlabel: "t", ylabel: "" }, "s = t³ − 6t² + 9t (violet), v = s′ (blue), a = s″ (amber).")}
  ${keyIdea(S`Speed increases when velocity and acceleration point the same way. Total distance travelled adds the distances between the turning points; displacement is just \(s(\text{end})-s(\text{start})\).`)}`),

  section("📌 Explore", S`<p>Move the time slider. The dot on the line is the particle; the arrow shows its velocity. Compare the three graphs and the speeding up / slowing down label.</p>`),

  widget("motionLab", { init: { cs: [-1, 4.5, 0, 2], t: 0.5 } }),

  section("📌 Vertical motion", S`
  <p>Near Earth's surface, height is modelled by \(h(t)=-4.9t^2+v_0t+h_0\) (metres, seconds): the velocity is \(v=-9.8t+v_0\) and the acceleration is the constant \(-9.8\) m/s². The top of the flight is where \(v=0\).</p>
  ${watchOut([
    "Velocity can be negative; speed cannot.",
    "At rest means v = 0 — not s = 0.",
    "Speeding up is about the signs of v and a, not the sign of a alone.",
    "Total distance needs the turning points; don't just subtract endpoints.",
    "Units: position m, velocity m/s, acceleration m/s².",
  ])}`),

  examples([
    ["v and a", S`For \(s(t)=t^3-6t^2+9t\) (m, s), find \(v\), \(a\), and when the object is at rest.`,
      [S`<b>Definitions.</b> Velocity is the rate of change of position, \(v=s'(t)\). Acceleration is the rate of change of velocity, \(a=v'(t)=s''(t)\). "At rest" means \(v=0\).`,
        S`<b>Velocity.</b> \(v(t)=3t^2-12t+9=3(t^2-4t+3)=3(t-1)(t-3)\) m/s.`,
        S`<b>Acceleration.</b> \(a(t)=6t-12\) m/s².`,
        S`<b>At rest.</b> \(3(t-1)(t-3)=0\) at \(t=1\) s and \(t=3\) s. Positions: \(s(1)=1-6+9=4\) m and \(s(3)=27-54+27=0\) m.`,
        S`<b>Direction.</b> ${chart({ v: "t", f: "s", from: [0, "0"], cuts: [[1, "1"], [3, "3"]], d: ["v(t)", (t) => 3 * t * t - 12 * t + 9] })} The object moves forward, stops at 4 m, moves back to 0 m, stops, then moves forward again ✓`],
      S`\(v=3(t-1)(t-3)\), \(a=6t-12\); at rest at 1 s and 3 s`,
      plane({ view: { xmin: 0, xmax: 4.5, ymin: -4, ymax: 10 }, curves: [{ f: (t) => t ** 3 - 6 * t * t + 9 * t, a: 0, b: 4.5, color: "violet", label: "s(t) = t³ − 6t² + 9t" }, { f: (t) => 3 * t * t - 12 * t + 9, a: 0, b: 4.5, color: "blue", label: "v(t)" }], points: [{ x: 1, y: 4, label: "rest (1, 4)", color: "red" }, { x: 3, y: 0, label: "rest (3, 0)", color: "red" }], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "s, v" })],
    ["Speeding up or slowing down", S`For the same object, when is it speeding up?`,
      [S`<b>Rule.</b> Speed is \(|v|\). The object speeds up when \(v\) and \(a\) have the <em>same</em> sign (the push is in the direction of motion) and slows down when they have opposite signs.`,
        S`<b>Sign of \(v=3(t-1)(t-3)\).</b> Positive on \((0,1)\), negative on \((1,3)\), positive after 3.`,
        S`<b>Sign of \(a=6t-12\).</b> Negative before 2, positive after 2.`,
        S`<b>Compare.</b> ${tv(["interval", "(0, 1)", "(1, 2)", "(2, 3)", "(3, ∞)"], ["\\(v\\)", "+", "−", "−", "+"], ["\\(a\\)", "−", "−", "+", "+"], ["speed", "decreasing", "increasing", "decreasing", "increasing"])}`,
        S`<b>Check with speeds.</b> \(|v(1.5)|=|3(0.5)(-1.5)|=2.25\) and \(|v(1.9)|=|3(0.9)(-1.1)|=2.97\): faster ✓. \(|v(2.5)|=2.25\): slower again ✓`],
      S`speeding up for \(1\lt t\lt2\) and \(t>3\); slowing down for \(0\lt t\lt1\) and \(2\lt t\lt3\)`,
      plane({ view: { xmin: 0, xmax: 4.2, ymin: -14, ymax: 12 }, curves: [{ f: (t) => 3 * t * t - 12 * t + 9, a: 0, b: 4.2, color: "blue", label: "v(t) = 3t² − 12t + 9" }, { f: (t) => 6 * t - 12, a: 0, b: 4.2, color: "amber", label: "a(t) = 6t − 12" }], points: [{ x: 1, y: 0, color: "red" }, { x: 2, y: 0, color: "red" }, { x: 3, y: 0, color: "red" }], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "v, a" }, "speeding up where the blue and amber graphs are on the same side of the axis")],
    ["A second derivative", S`Find \(f''(x)\) for \(f(x)=x^4-2x^3\).`,
      [S`<b>Meaning.</b> \(f''\) is the derivative of \(f'\): it measures how fast the slope itself is changing.`,
        S`<b>First derivative.</b> \(f'(x)=4x^3-6x^2\).`,
        S`<b>Second derivative.</b> Differentiate again: \(f''(x)=12x^2-12x=12x(x-1)\).`,
        S`<b>Interpret.</b> \(f''\lt0\) on \((0,1)\): the slopes are decreasing there and the graph bends down. Outside \([0,1]\), \(f''\gt0\): it bends up.`,
        S`<b>Check.</b> \(f'(0.25)=0.0625-0.375=-0.3125\) and \(f'(0.75)=1.6875-3.375=-1.6875\): the slope dropped, as \(f''\lt0\) predicts ✓`],
      S`\(f''(x)=12x^2-12x\)`,
      plane({ view: { xmin: -1, xmax: 2, ymin: -3, ymax: 5 }, curves: [{ f: (x) => x ** 4 - 2 * x ** 3, color: "violet", label: "f(x) = x⁴ − 2x³" }, { f: (x) => 12 * x * x - 12 * x, color: "amber", label: "f″(x) = 12x² − 12x" }], step: { x: 0.5, y: 1 } })],
    ["A ball thrown upward", S`A ball's height is \(h(t)=-4.9t^2+19.6t+2\) m. Find its maximum height and its velocity when it hits the ground.`,
      [S`<b>Velocity.</b> \(v(t)=h'(t)=-9.8t+19.6\).`,
        S`<b>Top of the flight.</b> At the top the ball stops rising: \(v=0\Rightarrow t=2\) s. Height \(h(2)=-19.6+39.2+2=21.6\) m.`,
        S`<b>Landing time.</b> Solve \(-4.9t^2+19.6t+2=0\) with the quadratic formula: \(t=\dfrac{19.6+\sqrt{19.6^2+4(4.9)(2)}}{9.8}=\dfrac{19.6+\sqrt{423.36}}{9.8}\approx\dfrac{19.6+20.58}{9.8}\approx4.10\) s (the other root is negative).`,
        S`<b>Impact velocity.</b> \(v(4.10)\approx-9.8(4.10)+19.6\approx-20.6\) m/s. The minus sign means downward.`,
        S`<b>Check with the acceleration.</b> \(a=-9.8\) m/s² throughout, so the velocity drops 9.8 m/s each second: \(19.6\) at the start, \(0\) at \(t=2\), and about \(-20.6\) at \(t\approx4.1\) ✓. It lands faster than it was thrown because it falls 2 m further than it rose.`],
      S`21.6 m; about \(-20.6\) m/s (downward)`,
      plane({ view: { xmin: 0, xmax: 4.5, ymin: -1, ymax: 24 }, curves: [{ f: (t) => -4.9 * t * t + 19.6 * t + 2, a: 0, b: 4.1, color: "violet", label: "h(t) = −4.9t² + 19.6t + 2" }, { f: () => 21.6, a: 1.4, b: 2.6, color: "green", label: "v = 0" }], points: [{ x: 2, y: 21.6, label: "max (2, 21.6)", color: "red" }, { x: 4.1, y: 0, label: "lands t ≈ 4.10", color: "blue" }], step: { x: 0.5, y: 4 }, xlabel: "t (s)", ylabel: "h (m)" })],
    ["Displacement vs distance", S`For \(s(t)=t^2-4t\) m on \([0,5]\) s, find the displacement and the total distance travelled.`,
      [S`<b>Difference.</b> Displacement is final minus initial position. Distance adds up every metre travelled, so if the object turns back we must split the trip at the turning time.`,
        S`<b>Turning time.</b> \(v=2t-4=0\) at \(t=2\). ${chart({ v: "t", f: "s", from: [0, "0"], to: [5, "5"], cuts: [[2, "2"]], d: ["v(t)", (t) => 2 * t - 4] })}`,
        S`<b>Positions.</b> \(s(0)=0\), \(s(2)=4-8=-4\), \(s(5)=25-20=5\).`,
        S`<b>Displacement.</b> \(s(5)-s(0)=5-0=5\) m.`,
        S`<b>Distance.</b> Leg 1: \(|{-4}-0|=4\) m back. Leg 2: \(|5-(-4)|=9\) m forward. Total \(4+9=13\) m. Check: distance ≥ |displacement| ✓, with equality only if the object never turns back.`],
      S`displacement 5 m; distance 13 m`,
      plane({ view: { xmin: -0.3, xmax: 5.5, ymin: -5, ymax: 6 }, curves: [{ f: (t) => t * t - 4 * t, a: 0, b: 5, color: "violet", label: "s(t) = t² − 4t" }], points: [{ x: 0, y: 0, color: "blue" }, { x: 2, y: -4, label: "turns at (2, −4)", color: "red" }, { x: 5, y: 5, label: "(5, 5)", color: "blue" }], step: { x: 1, y: 1 }, xlabel: "t (s)", ylabel: "s (m)" })],
  ]),

  practice([
    q("velocity", S`For \(s(t)=t^3\) m, find \(v(2)\).`, num(12),
      "v = 3t².", [S`\(3(4)\).`], S`\(12\) m/s`),
    q("acceleration", S`For \(s(t)=4t^2-3t\), find \(a(t)\).`, num(8),
      "Differentiate twice.", [S`\(v=8t-3\), \(a=8\).`], S`\(8\) m/s²`),
    q("second derivative", S`Find \(f''(x)\) for \(f(x)=x^5\).`, expr("20*x^3"),
      "5x⁴, then 20x³.", [S`\(20x^3\).`], S`\(20x^3\)`),
    q("at rest", S`When is an object with \(s(t)=t^2-6t\) at rest?`, num(3),
      "v = 0.", [S`\(2t-6=0\).`], S`\(t=3\) s`),
    q("speeding up", S`An object has negative velocity and negative acceleration. It is:`, choice(["speeding up", "slowing down", "at rest", "moving right"], 0),
      "Same signs.", ["Both negative."], "speeding up"),
  ]),

  ...hard([
    ["Total distance with two turns", S`For \(s(t)=2t^3-15t^2+24t\) m, \(t\ge0\), find the total distance travelled in the first 5 s.`,
      [S`\(v=6t^2-30t+24=6(t-1)(t-4)\): turns at \(t=1\) and \(t=4\).`, S`\(s(0)=0\), \(s(1)=11\), \(s(4)=-16\), \(s(5)=-5\).`, S`Distance \(11+27+11=49\) m.`],
      S`49 m`,
      plane({ view: { xmin: -0.2, xmax: 5.3, ymin: -18, ymax: 14 }, curves: [{ f: (t) => 2 * t ** 3 - 15 * t * t + 24 * t, a: 0, b: 5, color: "violet" }], points: [{ x: 1, y: 11, label: "(1, 11)", color: "red" }, { x: 4, y: -16, label: "(4, −16)", color: "red" }, { x: 5, y: -5, label: "(5, −5)", color: "blue" }], step: { x: 1, y: 4 }, xlabel: "t (s)", ylabel: "s (m)" })],
    ["Higher derivatives", S`Find all the derivatives of \(f(x)=x^4-3x^3\) until they become 0. What is true for a polynomial of degree \(n\)?`,
      [S`\(f'=4x^3-9x^2\), \(f''=12x^2-18x\), \(f'''=24x-18\), \(f^{(4)}=24\), \(f^{(5)}=0\).`, S`Each derivative lowers the degree by 1, so the \((n+1)\)th derivative of a degree-\(n\) polynomial is 0.`],
      S`\(f'''=24x-18\), \(f^{(4)}=24\), \(f^{(5)}=0\)`],
  ], [
    q("hard", S`For \(s(t)=t^3-9t^2+24t\), find the speed at \(t=3\).`, num(3),
      "v(3) = 27 − 54 + 24.", [S`\(v=-3\), speed 3.`], S`\(3\) m/s`),
    q("hard", S`For \(s(t)=t^3-3t^2\) (\(t>0\)), find the acceleration when the velocity is 0.`, num(6),
      "v = 3t² − 6t = 0 at t = 2.", [S`\(a=6t-6\).`], S`\(6\) m/s²`),
    q("hard", S`A stone dropped from 20 m has \(h(t)=20-5t^2\). Find its speed when it hits the ground.`, num(20),
      "h = 0 at t = 2.", [S`\(v=-10t=-20\).`], S`\(20\) m/s`),
  ]),

  wrapUp({
    qas: [
      ["What is the difference between velocity and speed?", "Velocity has a sign (direction); speed is its absolute value."],
      ["When does an object change direction?", "When v = 0 and v changes sign."],
      ["How do I know if it is speeding up?", "If v and a have the same sign; slowing down if they have opposite signs."],
      ["What does the second derivative measure in general?", "The rate of change of the slope — for motion, acceleration; for graphs, concavity (chapter 3)."],
      ["Why add distances between turning points?", "Between turns the object moves one way only, so each piece's distance is just |change in s|."],
    ],
    summary: [
      "v = s′, a = v′ = s″.",
      "At rest: v = 0; direction: sign of v.",
      "Speeding up: v and a same sign.",
      "Distance: add |Δs| between turning points.",
    ],
    next: "2.4 differentiates composite functions with the chain rule.",
  }),
];
