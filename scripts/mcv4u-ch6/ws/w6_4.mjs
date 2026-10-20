// MCV4U Worksheet 6.4 — Applications of Vector Addition (teacher edition)
import { svgT } from "./figT.mjs";
import { vdoc, pol, brg } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const plus = (p, q) => [p[0] + q[0], p[1] + q[1]];
const EXAMPLES = [
  { title: "Perpendicular forces", q: S`Forces of 45 N and 60 N act at right angles. Find the resultant.`,
    steps: [S`$\sqrt{45^2+60^2}=75$ N.`, S`Angle with the 45 N force: $\tan^{-1}\frac{60}{45}\approx53.13^\circ$.`], ans: "75 N at 53.13° to the 45 N force" },
  { title: "Forces at 40°", q: S`Forces of 120 N and 80 N act at $40^\circ$ to each other. Find the resultant.`,
    fig: VF({ view: { xmin: -0.5, xmax: 20, ymin: -0.8, ymax: 6.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [12, 0], vl: "F₁", label: "120 N", off: 16 }, { from: [12, 0], to: plus([12, 0], pol(8, 40)), vl: "F₂", label: "80 N", color: "blue", off: 16 }, { from: [0, 0], to: plus([12, 0], pol(8, 40)), color: "red", vl: "R", off: -16 }], arcs: [{ at: [12, 0], r: 1.4, a: 0, b: 40, label: "40°", color: "green" }], segs: [{ pts: [[12, 0], [14.5, 0]], dash: true }] }, 5.4),
    steps: [S`Triangle angle $140^\circ$: $|\vec R|^2=14\,400+6400-19\,200\cos140^\circ\approx35\,508$, $|\vec R|\approx188.4$ N.`, S`$\sin\alpha=\frac{80\sin140^\circ}{188.4}$, $\alpha\approx15.84^\circ$.`], ans: "about 188.4 N at 15.84° to the 120 N force" },
  { title: "An equilibrant", q: S`Forces of 30 N east and 30 N north act on a ring. What single force keeps it still?`,
    steps: [S`Resultant $\sqrt{30^2+30^2}\approx42.43$ N toward the northeast ($045^\circ$).`, S`The equilibrant is opposite.`], ans: "42.43 N on a bearing of 225° (southwest)" },
  { title: "A side wind", q: S`A plane heads $270^\circ$ at 350 km/h. A 40 km/h wind blows from the north. Find the ground velocity.`,
    fig: VF({ view: { xmin: -4.2, xmax: 0.8, ymin: -1.2, ymax: 1.4 }, north: [0.5, -0.6, 1.6], arrows: [{ from: [0, 0], to: [-3.5, 0], vl: "a", label: "350 km/h", off: -16 }, { from: [-3.5, 0], to: [-3.5, -0.4], color: "blue", label: "40", off: -14 }, { from: [0, 0], to: [-3.5, -0.4], color: "red", vl: "g", off: 16 }] }, 5),
    steps: [S`A north wind blows south: perpendicular to the heading. $|\vec g|=\sqrt{350^2+40^2}\approx352.3$ km/h.`, S`Drift $\tan^{-1}\frac{40}{350}\approx6.52^\circ$ to the south of west.`], ans: "about 352.3 km/h on a track of 263.5°" },
  { title: "Aiming upstream", q: S`A boat moves at 6 m/s in still water. The current is 2.5 m/s and the river is 120 m wide. How should it aim to land straight across, and how long does it take?`,
    steps: [S`Upstream part cancels the current: $6\sin\theta=2.5$, $\theta\approx24.62^\circ$ upstream.`, S`Across speed $\sqrt{36-6.25}\approx5.45$ m/s; time $120\div5.45$.`], ans: "about 24.6° upstream; about 22.0 s" },
  { title: "Two ropes on a sled", q: S`Two ropes pull a sled with 150 N each, at $20^\circ$ on either side of the forward direction. Find the resultant.`,
    fig: VF({ view: { xmin: -0.5, xmax: 7.5, ymin: -2.2, ymax: 2.2 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: pol(4, 20), vl: "T", label: "150 N" }, { from: [0, 0], to: pol(4, -20), vl: "T", label: "150 N", color: "blue", off: -16 }, { from: [0, 0], to: [7.52, 0], color: "red", label: "281.9 N", off: -12 }] }, 5),
    steps: [S`Sideways parts cancel; forward parts add: $2\times150\cos20^\circ$.`], ans: "about 281.9 N straight ahead" },
  { title: "A symmetric hanging weight", q: S`A 500 N weight hangs from two ropes, each at $40^\circ$ to the horizontal. Find the tension in each.`,
    steps: [S`Each rope holds half the weight vertically: $2T\sin40^\circ=500$.`], ans: "about 388.9 N" },
  { title: "Three equal forces", q: S`Forces of 10 N act at $0^\circ$, $120^\circ$ and $240^\circ$. Find the resultant.`,
    fig: VF({ view: { xmin: -2.4, xmax: 2.4, ymin: -2.4, ymax: 2.4 }, grid: false, arrows: [{ from: [0, 0], to: [2, 0], label: "10 N" }, { from: [0, 0], to: pol(2, 120), color: "blue", label: "10 N" }, { from: [0, 0], to: pol(2, 240), color: "green", label: "10 N", off: -16 }] }, 3.6),
    steps: [S`Tip to tail they form an equilateral triangle that closes up.`], ans: "0 N: the forces are in equilibrium" },
  { title: "Holding a course", q: S`A pilot wants a track of $090^\circ$ at an airspeed of 400 km/h. A 60 km/h wind blows from the south. Find the heading and ground speed.`,
    steps: [S`The wind pushes north, so aim south of east: $400\sin\theta=60$, $\theta\approx8.63^\circ$.`, S`Ground speed $\sqrt{400^2-60^2}\approx395.5$ km/h.`], ans: "heading about 098.6°, ground speed about 395.5 km/h" },
];

const PROBLEMS = [
  { level: 1, q: S`Find the resultant of 9 N and 40 N at right angles.`, recap: "Pythagoras.", ans: "41 N" },
  { level: 1, q: S`A single 25 N force acts east. Describe its equilibrant.`, recap: "Opposite direction.", ans: "25 N west" },
  { level: 1, q: S`A boat heads straight across a river at 3 m/s; the current is 4 m/s. Find its speed relative to the shore.`, recap: "Perpendicular velocities.", ans: "5 m/s" },
  { level: 2, q: S`Forces of 70 N and 50 N act at $60^\circ$ to each other. Find the magnitude of the resultant.`, recap: "Triangle angle 120°.", ans: "about 104.4 N" },
  { level: 2, q: S`A plane heads $000^\circ$ at 250 km/h; a 50 km/h wind blows from the east. Find the ground speed and track.`, recap: "The wind pushes west.", ans: "about 255.0 km/h on a track of 348.7°" },
  { level: 2, q: S`A swimmer crosses a 150 m river at 1.5 m/s (aimed straight across); the current is 0.9 m/s. Find the time and how far downstream she lands.`, recap: "Time from the across speed.", ans: "100 s; 90 m downstream" },
  { level: 2, q: S`Two ropes pull with 200 N each at $30^\circ$ on either side of a line. Find the resultant.`, recap: "Forward parts add.", ans: "about 346.4 N along the line" },
  { level: 2, q: S`A 60 N sign hangs from two cables, each at $45^\circ$ to the horizontal. Find each tension.`, recap: "2T sin 45° = 60.", ans: "about 42.43 N" },
  { level: 3, space: 5, q: S`A pilot wants a track of $180^\circ$ at an airspeed of 220 km/h; a 40 km/h wind blows from the east. Find the heading and ground speed.`, recap: "The wind pushes west; aim east of south.", ans: "heading about 169.5°, ground speed about 216.3 km/h" },
  { level: 3, space: 5, q: S`Forces of 4 N, 5 N and 6 N are in equilibrium. Find the angle between the 4 N and 5 N forces.`, recap: "They form a closed 4-5-6 triangle.", ans: "about 97.2° (the triangle angle is 82.8°)" },
  { level: 3, space: 5, q: S`A 250 N weight hangs from two ropes at $35^\circ$ and $55^\circ$ to the horizontal. Find the tensions. What is special about the ropes?`, recap: "The ropes meet at 90°.", ans: "about 143.4 N (35° rope) and 204.8 N (55° rope); the ropes are perpendicular, so the tensions are 250 sin 35° and 250 cos 35°" },
  { level: 3, space: 5, q: S`A plane heads $045^\circ$ at 300 km/h for 2 h; a 50 km/h wind blows from $315^\circ$. Find the track and the distance travelled.`, recap: "The wind is perpendicular to the heading.", ans: "track about 054.5°, about 608.3 km" },
  { level: 3, space: 5, q: S`Explain why the equilibrant of two forces can never be larger than the sum of their magnitudes, and when it equals it.`, recap: "Triangle inequality.", ans: "|R| ≤ |F1| + |F2|, with equality when the forces point the same way; the equilibrant has the same size as R" },
];

export const WS = {
  code: "6.4",
  title: "Applications of Vector Addition",
  bigideas: S`Whatever the setting — forces, aircraft in wind, boats in a current, cables holding a weight — the actual effect is the vector sum. The resultant replaces all the vectors; the equilibrant is its opposite. Ground velocity = air velocity + wind velocity, and wind is named by where it blows from. For an object at rest the forces add to $\vec 0$: tip to tail they close a polygon.`,
  goals: ["Find resultants and equilibrants.", "Use heading, airspeed and wind.", "Find the heading for a required track.", "Solve river and cable problems."],
  curriculum: "C2.2",
  vocab: [["Resultant", "sum of the vectors"], ["Equilibrant", "opposite of the resultant"], ["Heading", "where the craft points"], ["Track", "where it actually goes"]],
  hook: S`Why does a small plane flying "north" in a strong west wind end up east of its destination?`,
  concepts: [
    ["1. Forces", S`Resultant and equilibrant of two forces:
${VF({ view: { xmin: -3.2, xmax: 4.4, ymin: -3.4, ymax: 3.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 0], vl: "F₁", off: 16 }, { from: [0, 0], to: pol(3, 75), vl: "F₂", color: "blue", off: -16 }, { from: [0, 0], to: plus([4, 0], pol(3, 75)), color: "red", vl: "R", off: 16 }, { from: [0, 0], to: plus([-4, 0], pol(3, 255)), color: "green", vl: "E", off: 16 }] }, 4.2)}`],
    ["2. Navigation", S`Ground velocity $=$ air velocity $+$ wind velocity; a wind from $\beta$ blows toward $\beta\pm180^\circ$.`],
    ["3. Equilibrium", S`Forces at rest add to $\vec 0$: horizontal parts cancel, vertical parts cancel.`],
  ],
  tips: ["Draw tip to tail.", "Wind from = blowing toward the opposite way.", "Heading is not track.", "Fastest crossing: aim straight across.", "Equilibrant = −resultant."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
