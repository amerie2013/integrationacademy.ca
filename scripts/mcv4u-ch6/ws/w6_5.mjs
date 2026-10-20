// MCV4U Worksheet 6.5 — Resolution of Vectors Into Rectangular Components (teacher edition)
import { svgT, gridT } from "./figT.mjs";
import { vdoc, pol, brg } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const RAD = Math.PI / 180;
const EXAMPLES = [
  { title: "Two components", q: S`Resolve a 75 N force at $50^\circ$ above the horizontal.`,
    fig: VF({ view: { xmin: -0.6, xmax: 7.6, ymin: -0.8, ymax: 6.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.821, 0], color: "blue", label: "48.21 N", off: 14 }, { from: [4.821, 0], to: [4.821, 5.745], color: "red", label: "57.45 N", off: 12 }, { from: [0, 0], to: [4.821, 5.745], vl: "F", label: "75 N", off: -16 }], arcs: [{ at: [0, 0], r: 1.2, a: 0, b: 50, label: "50°" }] }, 4.4),
    steps: [S`Horizontal $75\cos50^\circ\approx48.21$ N.`, S`Vertical $75\sin50^\circ\approx57.45$ N.`], ans: "48.21 N horizontally, 57.45 N vertically" },
  { title: "From a bearing", q: S`A plane flies at 180 km/h on a bearing of $210^\circ$. Find its east and north components.`,
    steps: [S`East: $180\sin210^\circ=-90$ (90 km/h west).`, S`North: $180\cos210^\circ\approx-155.88$ (155.88 km/h south).`], ans: "90 km/h west and 155.88 km/h south" },
  { title: "From components", q: S`A vector has components $(-8,15)$. Find its magnitude and its angle from the positive x-axis.`,
    fig: VF({ view: { xmin: -9.5, xmax: 2, ymin: -1, ymax: 16.5 }, step: 1, arrows: [{ from: [0, 0], to: [-8, 15], vl: "v", off: 16 }], segs: [{ pts: [[0, 0], [-8, 0], [-8, 15]], dash: true }], texts: [{ x: -4, y: -0.6, t: "−8" }, { x: -8.8, y: 7.5, t: "15" }] }, 3.6),
    steps: [S`$|\vec v|=\sqrt{64+225}=17$.`, S`Reference angle $\tan^{-1}\frac{15}8\approx61.93^\circ$; in quadrant II the angle is $180^\circ-61.93^\circ$.`], ans: "17, at about 118.07°" },
  { title: "On a steep ramp", q: S`A 120 N box rests on a $35^\circ$ ramp. Resolve its weight along and perpendicular to the ramp.`,
    steps: [S`Along: $120\sin35^\circ\approx68.83$ N.`, S`Into the ramp: $120\cos35^\circ\approx98.30$ N.`], ans: "68.83 N down the slope, 98.30 N into the ramp" },
  { title: "Adding by components", q: S`Find the resultant of 50 N at $30^\circ$ and 70 N at $135^\circ$.`,
    fig: VF({ view: { xmin: -5.6, xmax: 4.8, ymin: -0.8, ymax: 7.8 }, grid: false, arrows: [{ from: [0, 0], to: pol(5, 30), vl: "a", label: "50 N", off: 16 }, { from: [0, 0], to: pol(7, 135), vl: "b", label: "70 N", color: "blue", off: -16 }, { from: [0, 0], to: [-0.62, 7.45], color: "red", vl: "R", off: 16 }] }, 4.4),
    steps: [S`x: $50\cos30^\circ+70\cos135^\circ\approx43.30-49.50=-6.20$.`, S`y: $25+49.50=74.50$.`, S`$|\vec R|\approx74.76$ N; angle $180^\circ-\tan^{-1}\frac{74.50}{6.20}$.`], ans: "about 74.76 N at 94.76°" },
  { title: "Pushing a mower", q: S`A mower is pushed with 90 N along a handle $40^\circ$ below the horizontal. Find the forward and downward components.`,
    steps: [S`Forward $90\cos40^\circ\approx68.94$ N.`, S`Downward $90\sin40^\circ\approx57.85$ N.`], ans: "68.94 N forward, 57.85 N downward" },
  { title: "Working back to the force", q: S`A rope at $65^\circ$ to the horizontal must lift with a vertical component of 200 N. What tension is needed?`,
    steps: [S`$T\sin65^\circ=200$.`], ans: "about 220.7 N" },
  { title: "A wind's components", q: S`A 30 km/h wind blows from $240^\circ$. Find its east and north components.`,
    steps: [S`It blows toward $060^\circ$.`, S`East $30\sin60^\circ\approx25.98$; north $30\cos60^\circ=15$.`], ans: "25.98 km/h east, 15 km/h north" },
  { title: "Holding a cart", q: S`What force parallel to a $12^\circ$ ramp holds a 300 N cart still (ignore friction)?`,
    fig: VF({ view: { xmin: -0.5, xmax: 9, ymin: -1.6, ymax: 3.4 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [8.8, 0], [8.8, 8.8 * Math.tan(12 * RAD)]], fill: "#f1f5f9", stroke: "gray" }], arrows: [{ from: [5, 1.36], to: [5, -1.36], vl: "W", label: "300 N", off: -16 }, { from: [5, 1.36], to: pol(0.75, 12, [5, 1.36]), color: "green", label: "62.4 N", off: -14 }], arcs: [{ at: [0, 0], r: 1.6, a: 0, b: 12, label: "12°" }] }, 5),
    steps: [S`It must balance the weight's component down the slope: $300\sin12^\circ$.`], ans: "about 62.37 N up the ramp" },
];

const PROBLEMS = [
  { level: 1, q: S`Resolve 40 N at $60^\circ$ above the horizontal.`, recap: "40 cos 60°, 40 sin 60°.", ans: "20 N and about 34.64 N" },
  { level: 1, q: S`Find the magnitude of a vector with components 5 and 12.`, recap: "Pythagoras.", ans: "13" },
  { level: 1, q: S`Give the components of 100 N at $0^\circ$.`, recap: "All horizontal.", ans: "(100, 0)" },
  { level: 2, q: S`Find the east and north components of 250 km/h on a bearing of $040^\circ$.`, recap: "East uses sin of the bearing.", ans: "about 160.70 east, 191.51 north" },
  { level: 2, q: S`Resolve a 60 N weight on a $25^\circ$ ramp along and into the ramp.`, recap: S`$W\sin\alpha$ and $W\cos\alpha$.`, ans: "about 25.36 N and 54.38 N" },
  { level: 2, q: S`Add 24 N at $0^\circ$ and 10 N at $90^\circ$ using components.`, recap: "Pythagoras and tan⁻¹.", ans: "26 N at about 22.62°" },
  { level: 2, q: S`Find the magnitude and angle (from the positive x-axis) of the vector with components $(-7,-24)$.`, recap: "Quadrant III.", ans: "25, at about 253.74°" },
  { level: 2, q: S`Draw a vector of length 6 at $150^\circ$ on the grid with its components, and give them.`, recap: "6 cos 150°, 6 sin 150°.", ans: "about (−5.20, 3)", fig: gridT({ xmin: -7, xmax: 2, ymin: -1, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Find the resultant of 15 N at $20^\circ$, 25 N at $110^\circ$ and 10 N at $250^\circ$.`, recap: "Add x parts and y parts.", ans: "about 19.34 N at 83.7° (components 2.12, 19.23)" },
  { level: 3, space: 5, q: S`An 80 N box is held still on a $30^\circ$ ramp by a force parallel to the ramp. Find that force and the force pressing the box into the ramp.`, recap: S`Along: $W\sin\alpha$; into: $W\cos\alpha$.`, ans: "40 N and about 69.28 N" },
  { level: 3, space: 5, q: S`A child pulls a wagon with a 50 N force whose horizontal component is 40 N. Find the angle of the handle and the vertical component.`, recap: "cos θ = 40/50.", ans: "about 36.87°; 30 N" },
  { level: 3, space: 5, q: S`A boat moves at 12 km/h on a bearing of $300^\circ$ through water that flows east at 4 km/h. Use components to find its true velocity.`, recap: "Add east and north parts.", ans: "about 8.77 km/h on a bearing of 313.2°" },
  { level: 3, space: 5, q: S`Show that the ramp components $W\sin\alpha$ and $W\cos\alpha$ always rebuild the weight $W$.`, recap: "Pythagoras with sin² + cos² = 1.", ans: S`$\sqrt{W^2\sin^2\alpha+W^2\cos^2\alpha}=W$` },
];

export const WS = {
  code: "6.5",
  title: "Resolution of Vectors Into Rectangular Components",
  bigideas: S`Any vector is the sum of two perpendicular vectors, its rectangular components. At angle $\theta$ from the horizontal these are $|\vec v|\cos\theta$ and $|\vec v|\sin\theta$; from a true bearing $\beta$, east $|\vec v|\sin\beta$ and north $|\vec v|\cos\beta$. To add many vectors, add their components and rebuild with $\sqrt{x^2+y^2}$ and $\tan^{-1}\frac yx$ (checking the quadrant). On a ramp at angle $\alpha$, a weight splits into $W\sin\alpha$ along the slope and $W\cos\alpha$ into it.`,
  goals: ["Resolve vectors into components.", "Use bearings with components.", "Resolve weights on ramps.", "Add vectors by components."],
  curriculum: "C1.3, C2.2",
  vocab: [["Resolve", "split into perpendicular parts"], ["Components", "$|\\vec v|\\cos\\theta,\\ |\\vec v|\\sin\\theta$"], ["Ramp", "$W\\sin\\alpha$ along"], ["Rebuild", "$\\sqrt{x^2+y^2}$"]],
  hook: S`Why is it easier to pull a heavy suitcase with the handle low rather than straight up?`,
  concepts: [
    ["1. Components", S`A vector and its two components:
${VF({ view: { xmin: -0.6, xmax: 6, ymin: -0.8, ymax: 4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4.6, 0], color: "blue", label: "|v| cos θ", off: 14 }, { from: [4.6, 0], to: [4.6, 3.2], color: "red", label: "|v| sin θ", off: 12 }, { from: [0, 0], to: [4.6, 3.2], vl: "v", off: -16 }], arcs: [{ at: [0, 0], r: 1.1, a: 0, b: 34.8, label: "θ" }] }, 4.2)}`],
    ["2. Bearings", S`From a bearing $\beta$: east $=|\vec v|\sin\beta$, north $=|\vec v|\cos\beta$.`],
    ["3. Ramps", S`The angle between the weight and the perpendicular to the ramp equals the ramp angle.`],
  ],
  tips: ["cos with the adjacent side.", "Bearings: east uses sin.", "Signs show left/down.", "Check the quadrant after tan⁻¹.", "Add components, then rebuild."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
