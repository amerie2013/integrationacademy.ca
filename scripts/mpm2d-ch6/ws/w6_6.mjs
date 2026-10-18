// MPM2D Worksheet 6.6 — Solving Right Triangles & Applications (teacher edition)
import { sceneT, rtA, rtT } from "./figT.mjs";

const g = (a, b) => ({ seg: [[a, 0], [b, 0]], color: "gray" });
// angle of elevation sketch: observer at the left, object at the right (not to scale)
const elev = (lD, lA, lH) => sceneT([g(-0.5, 10.8), { seg: [[10, 0], [10, 6]], color: "green", width: 5 }, { seg: [[0, 0], [10, 6]], color: "red" }, { arc: [[10, 0], [0, 0], [10, 6]], label: lA, color: "amber" }, { right: [[0, 0], [10, 0], [10, 6]] }, { text: lD, at: [5, -0.7] }, { text: lH, at: [10.9, 3], bold: true, color: "green" }, { text: "not to scale", at: [5, 6.8], size: 11, color: "gray" }], 5.5, 380);
// angle of depression sketch: observer on top at the left
const dep = (lH, lA, lD) => sceneT([g(-0.5, 10.8), { seg: [[0, 0], [0, 5]], color: "green", width: 5 }, { seg: [[0, 5], [10.5, 5]], color: "gray", dash: true }, { seg: [[0, 5], [10, 0]], color: "red" }, { arc: [[10.5, 5], [0, 5], [10, 0]], label: lA, color: "amber" }, { right: [[0, 5], [0, 0], [10, 0]] }, { dot: [10, 0], color: "blue", r: 5 }, { text: lH, at: [-0.9, 2.5], bold: true, color: "green" }, { text: lD, at: [5, -0.7] }, { text: "not to scale", at: [5, 5.8], size: 11, color: "gray" }], 5.5, 380);

const EXAMPLES = [
  { title: "Solve from a side and an angle", q: String.raw`In $\triangle PQR$, $\angle R=90^\circ$, $\angle P=41^\circ$ and the hypotenuse $PQ=20$. Solve the triangle.`,
    fig: rtA(41, { hyp: "20", theta: "41°", names: ["P", "R", "Q"] }),
    steps: [String.raw`$\angle Q=49^\circ$.`, String.raw`$QR=20\sin41^\circ\approx13.1$; $PR=20\cos41^\circ\approx15.1$.`], ans: String.raw`$\angle Q=49^\circ$, $QR\approx13.1$, $PR\approx15.1$` },
  { title: "Solve from two legs", q: String.raw`A right triangle has legs $8$ and $13$. Solve it.`,
    fig: rtT(13, 8, { adj: "13", opp: "8", theta: "θ", other: "β" }),
    steps: [String.raw`$c=\sqrt{233}\approx15.3$.`, String.raw`$\theta=\tan^{-1}\frac8{13}\approx31.6^\circ$; $\beta\approx58.4^\circ$.`], ans: String.raw`$15.3$; $31.6^\circ$, $58.4^\circ$` },
  { title: "Angle of elevation", q: String.raw`From $60$ m away, the angle of elevation to the top of a tower is $28^\circ$. The observer's eyes are $1.7$ m above the ground. How tall is the tower?`,
    fig: elev("60 m", "28°", "h − 1.7"),
    steps: [String.raw`$60\tan28^\circ\approx31.90$ above eye level.`, String.raw`$31.90+1.7\approx33.6$.`], ans: String.raw`about $33.6$ m` },
  { title: "Angle of depression", q: String.raw`From an airplane $120$ m above the sea, the angle of depression to a ship is $9^\circ$. How far away horizontally is the ship?`,
    fig: dep("120 m", "9°", "d"),
    steps: [String.raw`$\tan9^\circ=\frac{120}d\Rightarrow d=\frac{120}{\tan9^\circ}\approx757.7$.`], ans: String.raw`about $758$ m` },
  { title: "Tree on a riverbank", q: String.raw`From $35$ m across a river, the angle of elevation to the top of a tree on the far bank is $42^\circ$ (measured at ground level). How tall is the tree?`,
    steps: [String.raw`$h=35\tan42^\circ\approx31.5$.`], ans: String.raw`about $31.5$ m` },
  { title: "Cliff and boat", q: String.raw`From the top of a $50$ m cliff, the angle of depression to a boat is $18^\circ$. How far is the boat from the cliff?`,
    steps: [String.raw`Alternate angles: the angle at the boat is $18^\circ$.`, String.raw`$d=\frac{50}{\tan18^\circ}\approx153.9$.`], ans: String.raw`about $153.9$ m` },
  { title: "Two sightings", q: String.raw`The angle of elevation to the top of a building is $42^\circ$ from point $A$ and $30^\circ$ from point $B$, $25$ m farther away. Find the height.`,
    fig: sceneT([g(-1, 71), { seg: [[0, 0], [0, 40.2]], color: "green", width: 5 }, { seg: [[44.7, 0], [0, 40.2]], color: "red" }, { seg: [[69.7, 0], [0, 40.2]], color: "blue" }, { arc: [[0, 0], [44.7, 0], [0, 40.2]], label: "42°", color: "red" }, { arc: [[0, 0], [69.7, 0], [0, 40.2]], label: "30°", color: "blue" }, { text: "A", at: [44.7, -3.5], bold: true }, { text: "B", at: [69.7, -3.5], bold: true }, { text: "25 m", at: [57, -3.5] }, { text: "h", at: [-2.5, 20], bold: true, color: "green" }], 6, 420),
    steps: [String.raw`$h=d\tan42^\circ=(d+25)\tan30^\circ$.`, String.raw`$d=\frac{25\tan30^\circ}{\tan42^\circ-\tan30^\circ}\approx44.7$; $h\approx40.2$.`], ans: String.raw`about $40.2$ m` },
  { title: "Two buildings", q: String.raw`From the roof of a $30$ m building, the angle of depression to the base of a taller building is $35^\circ$ and the angle of elevation to its top is $25^\circ$. How tall is the taller building?`,
    fig: sceneT([g(-2, 46), { poly: [[-2, 0], [0, 0], [0, 30], [-2, 30]], fill: "gray", color: "gray" }, { poly: [[42.8, 0], [45.8, 0], [45.8, 50], [42.8, 50]], fill: "gray", color: "gray" }, { seg: [[0, 30], [42.8, 30]], color: "gray", dash: true }, { seg: [[0, 30], [42.8, 0]], color: "red" }, { seg: [[0, 30], [42.8, 50]], color: "blue" }, { arc: [[42.8, 30], [0, 30], [42.8, 0]], label: "35°", color: "red", r: 8 }, { arc: [[42.8, 30], [0, 30], [42.8, 50]], label: "25°", color: "blue", r: 12 }, { text: "30 m", at: [-5, 15] }, { text: "not to scale", at: [22, 54], size: 11, color: "gray" }], 6, 420),
    steps: [String.raw`Distance between: $\frac{30}{\tan35^\circ}\approx42.84$ m.`, String.raw`Above the roof: $42.84\tan25^\circ\approx19.98$; total $\approx50.0$ m.`], ans: String.raw`about $50$ m` },
  { title: "Two boats", q: String.raw`From a $90$ m lighthouse, the angles of depression to two boats in line with it are $30^\circ$ and $18^\circ$. How far apart are the boats?`,
    steps: [String.raw`$\frac{90}{\tan18^\circ}-\frac{90}{\tan30^\circ}\approx277.0-155.9$.`], ans: String.raw`about $121.1$ m` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Solve the right triangle with hypotenuse $12$ and an acute angle of $35^\circ$.`, recap: "Solve (side and angle).", ans: String.raw`other angle $55^\circ$; legs $\approx6.9$ and $9.8$` },
  { level: 1, q: String.raw`From $30$ m away at ground level, the angle of elevation to a treetop is $40^\circ$. How tall is the tree?`, recap: "Elevation.", ans: String.raw`$30\tan40^\circ\approx25.2$ m` },
  { level: 1, q: String.raw`From the top of a $40$ m cliff, the angle of depression to a buoy is $22^\circ$. How far is the buoy from the cliff?`, recap: "Depression.", ans: String.raw`$\frac{40}{\tan22^\circ}\approx99.0$ m` },
  { level: 2, q: String.raw`Solve the right triangle with legs $7$ and $10$.`, recap: "Solve (two legs).", ans: String.raw`$c\approx12.2$; $35.0^\circ$ and $55.0^\circ$`, fig: rtT(10, 7, { adj: "10", opp: "7", theta: "θ", other: "β" }) },
  { level: 2, q: String.raw`A person whose eyes are $1.6$ m high stands $45$ m from a building and sees the top at an angle of elevation of $33^\circ$. Find the building's height.`, recap: "Eye height.", ans: String.raw`$45\tan33^\circ+1.6\approx30.8$ m`, fig: elev("45 m", "33°", "h − 1.6") },
  { level: 2, q: String.raw`A kite string is $80$ m long and the angle of elevation of the kite is $55^\circ$. How high is the kite?`, recap: "Kite.", ans: String.raw`$80\sin55^\circ\approx65.5$ m` },
  { level: 2, q: String.raw`A plane at an altitude of $1500$ m sees a runway at an angle of depression of $20^\circ$. Find the horizontal distance and the line-of-sight distance to the runway.`, recap: "Plane.", ans: String.raw`$\approx4121$ m; $\approx4386$ m`, fig: dep("1500 m", "20°", "d") },
  { level: 2, q: String.raw`A ship's navigator sees the top of a $65$ m lighthouse at an angle of elevation of $4^\circ$. How far is the ship from the lighthouse?`, recap: "Small angle.", ans: String.raw`$\frac{65}{\tan4^\circ}\approx929.6$ m` },
  { level: 3, space: 5.5, q: String.raw`From point $A$ the angle of elevation to the top of a tower is $36^\circ$. From $B$, $30$ m farther away, it is $24^\circ$. Find the tower's height.`, recap: "Two sightings.", ans: String.raw`$d\approx47.5$ m, $h\approx34.5$ m` },
  { level: 3, space: 5, q: String.raw`From the top of a $25$ m building, the angle of elevation to the top of a taller building is $32^\circ$ and the angle of depression to its base is $48^\circ$. How tall is the taller building?`, recap: "Two buildings.", ans: String.raw`distance $\frac{25}{\tan48^\circ}\approx22.5$ m; height $\approx25+22.5\tan32^\circ\approx39.1$ m` },
  { level: 3, space: 5, q: String.raw`Explain why the angle of depression from $A$ to $B$ equals the angle of elevation from $B$ to $A$. Include a diagram.`, recap: "Explain the angles.", ans: "the horizontals at A and B are parallel; the line of sight makes equal alternate angles" },
  { level: 3, space: 5, q: String.raw`From a $100$ m tower, the angles of depression to two cars on a straight road toward the tower are $15^\circ$ and $28^\circ$. How far apart are the cars?`, recap: "Two cars.", ans: String.raw`$\frac{100}{\tan15^\circ}-\frac{100}{\tan28^\circ}\approx373.2-188.1=185.1$ m` },
  { level: 3, space: 5, q: String.raw`A ladder must reach a window $6$ m up a wall, and its angle with the ground must be between $70^\circ$ and $76^\circ$. Find the range of ladder lengths that work.`, recap: "Ladder design.", ans: String.raw`$\frac6{\sin76^\circ}\approx6.18$ m to $\frac6{\sin70^\circ}\approx6.39$ m` },
];

export const WS = {
  code: "6.6",
  title: "Solving Right Triangles & Applications",
  bigideas: String.raw`To solve a right triangle, find every unknown side and angle: use ratios for sides, inverse ratios for angles, the Pythagorean theorem when two sides are known and $90^\circ-\theta$ for the second angle. Angles of elevation and depression are measured from the horizontal; the angle of depression from $A$ to $B$ equals the angle of elevation from $B$ to $A$. In two-triangle problems, find the shared side first or write an equation for each triangle.`,
  goals: ["Solve right triangles.", "Use angles of elevation and depression.", "Include eye height.", "Solve two-triangle problems."],
  curriculum: "T2",
  vocab: [["Angle of elevation", "above the horizontal"], ["Angle of depression", "below the horizontal"], ["Solve a triangle", "find all sides and angles"]],
  hook: String.raw`Ask: a lifeguard on a tall chair sees a swimmer 15° below the horizontal. How far out is the swimmer?`,
  concepts: [
    ["1. Solving", String.raw`Side + angle, or two sides, is enough.
${rtA(32, { hyp: "c", opp: "a", adj: "b", theta: "A" })}`],
    ["2. Elevation and depression", String.raw`From the horizontal; equal by alternate angles.
${dep("h", "θ", "d")}`],
    ["3. Two triangles", String.raw`Shared side first, or one equation per triangle.`],
  ],
  tips: ["Measure from the horizontal.", "Add eye height.", "Draw the diagram first.", "Keep full values for shared sides.", "Check angles add to 180°."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
