// MCV4U 6.4 — Applications of Vector Addition (NEW lesson): resultant and equilibrant forces, aircraft heading,
// airspeed, wind and ground velocity, river crossings, and tensions in cables holding a weight
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol, brg } from "./vecfig.mjs";

export const TITLE = "6.4 Applications of Vector Addition";
export const ID = "6d4fc006-0001-4001-8001-000000000604";

const S = String.raw;
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
export const blocks = () => [
  intro({
    icon: "✈️",
    title: "Applications of Vector Addition",
    overview: S`A pilot points the aircraft one way, the wind pushes it another, and the plane actually travels along the sum of the two velocities. Two people pulling a sled with ropes produce one combined force. Whenever several vectors act together, their sum — the <strong>resultant</strong> — tells you what really happens; the vector that would cancel it, the <strong>equilibrant</strong>, tells you what is needed to keep things still.`,
    goals: [
      "find the resultant and equilibrant of two forces;",
      "use heading, airspeed and wind to find ground velocity;",
      "find the heading that produces a required track;",
      "solve river-crossing problems;",
      "find tensions in cables that hold an object in equilibrium.",
    ],
    curriculum: "C2.2 (solve problems involving the addition, subtraction, and scalar multiplication of vectors, including problems arising from real-world applications)",
    prior: [
      [S`Angle between bearings \(045^\circ\) and \(090^\circ\)?`, S`\(45^\circ\).`],
      [S`\(\sin^{-1}0.5\)?`, S`\(30^\circ\).`],
      [S`Speed × time?`, S`Distance.`],
    ],
    words: [
      ["Resultant", "the sum of all the vectors acting", "\\(\\vec R=\\vec F_1+\\vec F_2\\)"],
      ["Equilibrant", "the opposite of the resultant", "\\(\\vec E=-\\vec R\\)"],
      ["Heading / airspeed", "where the plane points, and its speed in still air", ""],
      ["Track / ground speed", "where it actually goes, and how fast over the ground", ""],
    ],
  }),

  section("📌 One idea, many settings", S`
  ${table(["Setting", "Vectors added", "Result"], [
    ["forces on an object", "\\(\\vec F_1+\\vec F_2+\\cdots\\)", "resultant force; equilibrant balances it"],
    ["aircraft", "air velocity + wind velocity", "ground velocity (track and ground speed)"],
    ["boat or swimmer", "velocity in still water + current", "velocity relative to the shore"],
    ["hanging object", "tensions + weight", "\\(\\vec 0\\) when it is at rest"],
  ])}
  ${vfig({ view: { xmin: -0.8, xmax: 6.8, ymin: -0.8, ymax: 5.2 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [3, 0], vl: "F₁", label: "30 N", off: -18 }, { from: [0, 0], to: [0, 4], vl: "F₂", label: "40 N", color: "blue", off: 22 }, { from: [0, 0], to: [3, 4], vl: "R", label: "50 N", color: "red", off: 18 }], segs: [{ pts: [[3, 0], [3, 4], [0, 4]], dash: true }] }, "Perpendicular forces of 30 N and 40 N have a resultant of 50 N")}
  ${keyIdea(S`Draw a clear diagram first: tip to tail, with every known length and angle. Wind is named by the direction it blows <strong>from</strong>, so a "west wind" blows toward the east. An object is in equilibrium when the vector sum of all forces on it is \(\vec 0\) — the force vectors placed tip to tail close up into a polygon.`)}`),

  section("📌 Explore", S`<p>In aircraft mode, change the heading, airspeed and wind and read off the track and ground speed. In forces mode, change the angle between two forces: the resultant is largest when they pull together and smallest when they pull apart. The green equilibrant always balances the red resultant.</p>`),

  widget("resultantLab", { init: { mode: "nav" } }),

  section("📌 Setting up the triangle", S`
  <p>Translate each description into an arrow, place the arrows tip to tail, and find the angle inside the triangle from the bearings. Use the cosine law for the unknown side and the sine law for an unknown angle, then convert the angle back into a bearing or a direction.</p>
  ${watchOut([
    "A wind 'from 270°' blows toward 090°.",
    "Heading is where the plane points; track is where it goes — they differ when there is a crosswind.",
    "To cross a river in the least time, aim straight across; to land straight across, aim upstream.",
    "The equilibrant has the same magnitude as the resultant and the opposite direction.",
    "For a hanging object, the tensions' vertical parts must add up to the weight.",
  ])}`),

  examples([
    ["Perpendicular forces", S`Forces of 30 N east and 40 N north act on an object. Find the resultant and the equilibrant.`,
      [S`\(|\vec R|=\sqrt{30^2+40^2}=50\) N.`, S`Angle from the 30 N force: \(\tan^{-1}\frac{40}{30}\approx53.13^\circ\), so \(\vec R\) points N36.87°E (bearing \(036.9^\circ\)).`, S`The equilibrant is 50 N on bearing \(216.9^\circ\).`],
      S`resultant 50 N at bearing \(036.9^\circ\); equilibrant 50 N at bearing \(216.9^\circ\)`],
    ["Forces at 70°", S`Forces of 25 N and 15 N act at \(70^\circ\) to each other. Find the resultant and its angle with the 25 N force.`,
      [S`The triangle angle is \(180^\circ-70^\circ=110^\circ\): \(|\vec R|^2=25^2+15^2-2(25)(15)\cos110^\circ\approx1106.5\), \(|\vec R|\approx33.26\) N.`, S`Sine law: \(\sin\alpha=\frac{15\sin110^\circ}{33.26}\approx0.4238\), \(\alpha\approx25.07^\circ\).`],
      S`about 33.26 N at \(25.07^\circ\) to the 25 N force`,
      vfig({ view: { xmin: -0.6, xmax: 8, ymin: -0.8, ymax: 3.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], vl: "F₁", label: "25 N", off: 18 }, { from: [5, 0], to: plus([5, 0], pol(3, 70)), vl: "F₂", label: "15 N", color: "blue", off: 18 }, { from: [0, 0], to: plus([5, 0], pol(3, 70)), color: "red", vl: "R" }], arcs: [{ at: [5, 0], r: 0.7, a: 0, b: 70, label: "70°", color: "green" }, { at: [0, 0], r: 1.4, a: 0, b: 25.07, label: "25.1°" }], segs: [{ pts: [[5, 0], [6.4, 0]], dash: true }] })],
    ["Wind and ground velocity", S`A plane heads \(045^\circ\) at an airspeed of 500 km/h. A 60 km/h wind blows from the west. Find the ground speed and track.`,
      [S`The wind blows toward \(090^\circ\). Between the heading \(045^\circ\) and the wind direction \(090^\circ\) is \(45^\circ\), so the triangle angle is \(135^\circ\).`, S`\(|\vec g|^2=500^2+60^2-2(500)(60)\cos135^\circ\approx296\,026\), \(|\vec g|\approx544.1\) km/h.`, S`Drift: \(\sin\delta=\frac{60\sin135^\circ}{544.1}\), \(\delta\approx4.47^\circ\), toward the east: track \(045^\circ+4.47^\circ\).`],
      S`about 544 km/h on a track of \(049.5^\circ\)`,
      vfig({ view: { xmin: -0.8, xmax: 6, ymin: -0.7, ymax: 4.6 }, north: [0, 0, 4.3], arrows: [{ from: [0, 0], to: brg(5, 45), vl: "a", label: "500 km/h", off: -18 }, { from: brg(5, 45), to: plus(brg(5, 45), [1.2, 0]), color: "blue", label: "60", off: -14 }, { from: [0, 0], to: plus(brg(5, 45), [1.2, 0]), color: "red", vl: "g", label: "544 km/h", off: 18 }], arcs: [{ at: [0, 0], r: 1.1, a: 45, b: 90, label: "45°" }], texts: [{ x: 4.2, y: -0.35, t: "wind enlarged for clarity", color: "gray", size: 11 }] })],
    ["Crossing a river", S`A swimmer swims at 2 m/s straight across a 60 m wide river with a 1.5 m/s current. Find the resultant velocity, the crossing time, and how far downstream the swimmer lands.`,
      [S`\(\sqrt{2^2+1.5^2}=2.5\) m/s at \(\tan^{-1}\frac{1.5}{2}\approx36.87^\circ\) downstream from straight across.`, S`Only the 2 m/s part crosses the river: \(t=\frac{60}{2}=30\) s.`, S`Downstream drift \(1.5\times30=45\) m.`],
      S`2.5 m/s at \(36.87^\circ\) downstream; 30 s; 45 m downstream`,
      vfig({ view: { xmin: -1.2, xmax: 6, ymin: -0.8, ymax: 7 }, grid: false, axes: false, polys: [{ pts: [[-1.2, 0], [6, 0], [6, 6], [-1.2, 6]], fill: "#e0f2fe" }], arrows: [{ from: [0, 0], to: [0, 6], vl: "s", label: "2 m/s", off: -18 }, { from: [0, 6], to: [4.5, 6], color: "blue", label: "current 1.5 m/s", off: -14 }, { from: [0, 0], to: [4.5, 6], color: "red", label: "2.5 m/s", off: -18 }], texts: [{ x: 2.2, y: -0.5, t: "60 m wide river (not to scale)", color: "gray" }] })],
    ["A hanging sign", S`A 200 N sign hangs from two cables making \(30^\circ\) and \(45^\circ\) with the horizontal. Find the tension in each cable.`,
      [S`Horizontal parts balance: \(T_1\cos30^\circ=T_2\cos45^\circ\), so \(T_2\approx1.2247T_1\).`, S`Vertical parts hold the weight: \(T_1\sin30^\circ+T_2\sin45^\circ=200\Rightarrow T_1(0.5+0.8660)=200\).`],
      S`\(T_1\approx146.4\) N and \(T_2\approx179.3\) N`,
      vfig({ view: { xmin: -4.6, xmax: 4.6, ymin: -3.4, ymax: 3 }, grid: false, axes: false, segs: [{ pts: [[-4.33, 2.5], [0, 0], [3, 3]], color: "gray", w: 1.4 }], polys: [{ pts: [[-1, -0.2], [1, -0.2], [1, -1.2], [-1, -1.2]], fill: "#fde68a", stroke: "amber" }], arrows: [{ from: [0, 0], to: pol(2.4, 150), color: "violet", vl: "T₁" }, { from: [0, 0], to: pol(2.4, 45), color: "blue", vl: "T₂", off: -16 }, { from: [0, -1.2], to: [0, -3.2], color: "red", label: "200 N", off: -24 }], arcs: [{ at: [0, 0], r: 1.2, a: 150, b: 180, label: "30°", lr: 0.6 }, { at: [0, 0], r: 1.2, a: 0, b: 45, label: "45°", lr: 0.6 }] })],
  ]),

  practice([
    q("resultant", S`Find the resultant of forces of 5 N and 12 N at right angles (N).`, num(13),
      "Pythagoras.", [S`\(\sqrt{25+144}\).`], S`\(13\)`),
    q("equilibrant", S`Two 8 N forces act at \(120^\circ\) to each other. Find the magnitude of the equilibrant (N).`, num(8),
      "The force triangle is equilateral.", [S`\(64+64-128\cos60^\circ=64\).`], S`\(8\)`),
    q("boat", S`A boat moves at 4 m/s straight across a river with a 3 m/s current. Find its speed relative to the shore (m/s).`, num(5),
      "Perpendicular velocities.", [S`\(\sqrt{16+9}\).`], S`\(5\)`),
    q("time", S`A river is 80 m wide. A boat heads straight across at 4 m/s in a 3 m/s current. How long does the crossing take (s)?`, num(20),
      "Only the across part matters.", [S`\(80\div4\).`], S`\(20\)`),
    q("equilibrant", S`The equilibrant of a set of forces is:`, choice(["the opposite of the resultant", "the same as the resultant", "the largest force", "always perpendicular to the resultant"], 0),
      "It cancels the resultant.", ["E + R = 0."], "the opposite of the resultant"),
  ]),

  ...hard([
    ["Flying due north in a crosswind", S`A pilot wants a track of \(000^\circ\). The airspeed is 300 km/h and a 50 km/h wind blows from \(270^\circ\). What heading is needed, and what is the ground speed?`,
      [S`The wind pushes east at 50 km/h, so the plane must point west of north by \(\theta\) with \(300\sin\theta=50\): \(\theta=\sin^{-1}\frac16\approx9.59^\circ\).`, S`Heading \(360^\circ-9.59^\circ\approx350.4^\circ\). The ground velocity is the remaining northward part: \(\sqrt{300^2-50^2}\approx295.8\) km/h.`],
      S`heading about \(350.4^\circ\), ground speed about 295.8 km/h`,
      vfig({ view: { xmin: -2.2, xmax: 2.2, ymin: -0.4, ymax: 3.4 }, grid: false, north: [1.7, 0, 1], arrows: [{ from: [0, 0], to: brg(3, 350.41), vl: "a", off: -16 }, { from: brg(3, 350.41), to: [0, 2.958], color: "blue", label: "50", off: -14 }, { from: [0, 0], to: [0, 2.958], color: "red", vl: "g", off: 16 }], texts: [{ x: -0.95, y: 1.2, t: "300 km/h", color: "violet" }, { x: 0.75, y: 0.9, t: "295.8 km/h", color: "red" }], arcs: [{ at: [0, 0], r: 1, a: 90, b: 99.59, label: "9.6°", lr: 0.3 }] })],
    ["Three forces in balance", S`Forces of 5 N, 7 N and 9 N keep an object in equilibrium. Find the angle between the 5 N and 7 N forces.`,
      [S`In equilibrium the three forces form a closed triangle with sides 5, 7, 9. The angle in that triangle opposite the 9: \(\cos\phi=\frac{25+49-81}{70}=-0.1\), \(\phi\approx95.74^\circ\).`, S`The angle between the force vectors themselves is \(180^\circ-\phi\).`],
      S`about \(84.26^\circ\)`,
      vfig({ view: { xmin: -0.6, xmax: 7, ymin: -0.8, ymax: 7.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], vl: "F₁", label: "5 N", off: -18 }, { from: [5, 0], to: plus([5, 0], pol(7, 84.26)), vl: "F₂", label: "7 N", color: "blue", off: -18 }, { from: plus([5, 0], pol(7, 84.26)), to: [0, 0], color: "green", vl: "F₃", label: "9 N" }], arcs: [{ at: [5, 0], r: 0.8, a: 0, b: 84.26, label: "84.3°", color: "red" }], segs: [{ pts: [[5, 0], [6.4, 0]], dash: true }] })],
  ], [
    q("hard", S`A swimmer who swims at 2 m/s wants to land directly across a river with a 1.2 m/s current. At what angle upstream of straight across should they aim (degrees, 2 decimals)?`, num(36.87, 0.01),
      "The upstream part must cancel the current.", [S`\(2\sin\theta=1.2\).`], S`\(36.87^\circ\)`),
    q("hard", S`For the swimmer above (2 m/s, current 1.2 m/s, landing straight across), what is their speed across the river (m/s)?`, num(1.6, 0.001),
      "The remaining part of 2 m/s.", [S`\(\sqrt{4-1.44}\).`], S`\(1.6\)`),
    q("hard", S`A 100 N weight hangs from two ropes, each at \(60^\circ\) to the horizontal. Find the tension in each rope (N, 2 decimals).`, num(57.74, 0.01),
      "Symmetric: each holds half the weight vertically.", [S`\(2T\sin60^\circ=100\).`], S`\(57.74\)`),
  ]),

  wrapUp({
    qas: [
      ["What is the resultant?", "The single vector equal to the sum of all the vectors acting — it has the same effect as all of them together."],
      ["What is the equilibrant?", "The vector that balances the resultant: same magnitude, opposite direction."],
      ["How do heading and track differ?", "Heading is the direction the aircraft points; track is the direction it actually moves over the ground after the wind is added."],
      ["How do I cross a river fastest?", "Aim straight across; the current only affects where you land, not how long it takes."],
      ["How do I find cable tensions?", "Set the sum of the forces to zero: the horizontal parts cancel and the vertical parts add to the weight."],
    ],
    summary: [
      "Resultant = sum; equilibrant = −resultant.",
      "Ground velocity = air velocity + wind.",
      "Wind is named by where it comes from.",
      "Equilibrium: forces form a closed polygon.",
    ],
    next: "6.5 resolves vectors into rectangular components.",
  }),
];
