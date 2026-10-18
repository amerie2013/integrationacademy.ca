// MCR3U Worksheet 5.6 — Trigonometry in Three Dimensions (teacher edition)
import { boxT, wireT, polyT, sin, cos, tan, atan, acos, lawC, f } from "./trigT.mjs";

const S = String.raw;
// Example 2: tower across a river
const e2AC = (120 * sin(72)) / sin(53), e2h = e2AC * tan(26);
// Example 3: perpendicular observers
const e3h = 50 * tan(30), e3B = e3h / tan(20), e3AB = Math.hypot(50, e3B);
// Example 5: cliff and two boats
const e5a = 95 / tan(19), e5b = 95 / tan(13), e5d = lawC(e5a, e5b, 48);
// Example 9: drone
const e9AD = (500 * sin(65)) / sin(75), e9h = e9AD * tan(18);
// Problems
const p5 = (80 * sin(58)) / sin(60), p6 = p5 * tan(24);
const p9BC = (250 * sin(48)) / sin(65), p9h = p9BC * tan(15);
const p10h = 120 / Math.sqrt(1 / tan(40) ** 2 + 1 / tan(30) ** 2);
const p12 = lawC(500 / tan(35), 500 / tan(22), 120);

const tower = (AC, al, h, labels = ["A", "B", "C", "T"], AB = 120) => wireT([
  { pts: [[0, 0, 0], [AB, 0, 0], [AC * cos(al), AC * sin(al), 0], [0, 0, 0]], color: "green" },
  { pts: [[AC * cos(al), AC * sin(al), 0], [AC * cos(al), AC * sin(al), h]], color: "blue" },
  { pts: [[0, 0, 0], [AC * cos(al), AC * sin(al), h]], color: "red" },
], [[0, 0, 0, labels[0]], [AB, 0, 0, labels[1]], [AC * cos(al), AC * sin(al), 0, labels[2]], [AC * cos(al), AC * sin(al), h, labels[3]]], { cap: "ground triangle (green), vertical triangle (red/blue)" });

const EXAMPLES = [
  { title: "Diagonal of a box", q: "A box is 12 cm by 5 cm by 4 cm. Find the space diagonal and its angle with the base.",
    fig: boxT(12, 5, 4, [{ pts: [[0, 0, 0], [12, 5, 0]], color: "amber" }, { pts: [[0, 0, 0], [12, 5, 4]], color: "red" }], [[0, 0, 0, "A"], [12, 5, 4, "G"]]),
    steps: [S`Base diagonal $\sqrt{144+25}=13$.`, S`Space diagonal $\sqrt{13^2+4^2}=\sqrt{185}$; angle $\tan^{-1}\frac4{13}$.`], ans: S`$\approx${f(Math.sqrt(185))}$ cm, $\approx${f(atan(4 / 13), 1)}^\circ$` },
  { title: "A tower across a river", q: "A and B are 120 m apart on one bank. The base C of a tower on the far bank gives ∠CAB = 55° and ∠CBA = 72°. From A the angle of elevation of the top is 26°. Find the height.",
    fig: tower(e2AC, 55, e2h),
    steps: [S`$\angle C=53^\circ$; $AC=\frac{120\sin72^\circ}{\sin53^\circ}\approx${f(e2AC, 1)}$ m.`, S`$h=AC\tan26^\circ$.`], ans: S`$\approx${f(e2h, 1)}$ m` },
  { title: "Perpendicular directions", q: "Observer A is 50 m due south of a mast and sees its top at 30°. Observer B, due east of the mast, sees the top at 20°. How far apart are A and B?",
    steps: [S`$h=50\tan30^\circ\approx${f(e3h)}$ m; B is $\frac h{\tan20^\circ}\approx${f(e3B)}$ m from the mast.`, S`South ⟂ east: $AB=\sqrt{50^2+${f(e3B)}^2}$.`], ans: S`$\approx${f(e3AB, 1)}$ m` },
  { title: "Square pyramid", q: "A square pyramid has base side 8 m and height 9 m. Find a slant edge and the angle it makes with the base.",
    fig: wireT([{ pts: [[0, 0, 0], [8, 0, 0], [8, 8, 0], [0, 8, 0], [0, 0, 0]], color: "gray" }, ...[[0, 0], [8, 0], [8, 8], [0, 8]].map(([x, y]) => ({ pts: [[x, y, 0], [4, 4, 9]] })), { pts: [[4, 4, 0], [4, 4, 9]], color: "red" }, { pts: [[0, 0, 0], [4, 4, 0]], color: "amber" }], [[4, 4, 9, "apex"]]),
    steps: [S`Half-diagonal $4\sqrt2\approx${f(4 * Math.SQRT2)}$.`, S`Edge $\sqrt{32+81}=\sqrt{113}$; angle $\tan^{-1}\frac9{4\sqrt2}$.`], ans: S`$\approx${f(Math.sqrt(113))}$ m, $\approx${f(atan(9 / (4 * Math.SQRT2)), 1)}^\circ$` },
  { title: "Boats from a cliff", q: "From the top of a 95 m cliff, two boats are seen at angles of depression 19° and 13°. Seen from above, the lines from the cliff base to the boats form a 48° angle. How far apart are the boats?",
    steps: [S`Ground distances $\frac{95}{\tan19^\circ}\approx${f(e5a, 1)}$ and $\frac{95}{\tan13^\circ}\approx${f(e5b, 1)}$ m.`, S`Cosine law with $48^\circ$.`], ans: S`$\approx${f(e5d, 0)}$ m` },
  { title: "Diagonal and edge of a cube", q: "Find the angle between a space diagonal of a cube and one of the edges meeting it.",
    steps: [S`For edge 1: diagonal $\sqrt3$, and the edge is the adjacent side of a right triangle: $\cos\theta=\frac1{\sqrt3}$.`], ans: S`$\approx${f(acos(1 / Math.sqrt(3)), 1)}^\circ$` },
  { title: "Up a slope", q: "A trail climbs a hillside inclined at 9°. How much height is gained in 2.4 km along the trail?", steps: [S`$2.4\sin9^\circ$ km.`], ans: S`$\approx${f(2400 * sin(9), 0)}$ m` },
  { title: "A flagpole on a roof", q: "From a point 40 m from a building, the angle of elevation of the base of a flagpole on its roof is 32° and of the top is 38°. How long is the pole?", steps: [S`Pole $=40\tan38^\circ-40\tan32^\circ$.`], ans: S`$\approx${f(40 * (tan(38) - tan(32)))}$ m` },
  { title: "A hovering drone", q: "Observers A and B are 500 m apart. A drone hovers above point D on the ground with ∠DAB = 40° and ∠DBA = 65°. From A the drone's elevation is 18°. Find its height.",
    steps: [S`$\angle D=75^\circ$; $AD=\frac{500\sin65^\circ}{\sin75^\circ}\approx${f(e9AD, 1)}$ m.`, S`$h=AD\tan18^\circ$.`], ans: S`$\approx${f(e9h, 1)}$ m` },
];

const PROBLEMS = [
  { level: 1, q: "A cube has edge 5. Find its space diagonal.", recap: "Cube diagonal.", ans: S`$5\sqrt3\approx8.66$` },
  { level: 1, q: "From 35 m away on level ground, the top of a tree is at an elevation of 42°. Find its height.", recap: "Single elevation.", ans: S`$\approx${f(35 * tan(42))}$ m` },
  { level: 1, q: "In a tower problem, which triangle contains the right angle: the ground triangle or the vertical one?", recap: "Where is 90°?", ans: "the vertical one (at the base of the tower)" },
  { level: 2, q: "A box is 10 by 6 by 3. Find its space diagonal.", recap: "Box diagonal.", ans: S`$\sqrt{145}\approx${f(Math.sqrt(145))}$`, fig: boxT(10, 6, 3, [{ pts: [[0, 0, 0], [10, 6, 3]], color: "red" }], [[0, 0, 0, "A"], [10, 6, 3, "G"]]) },
  { level: 2, q: "Ground triangle: AB = 80 m, ∠A = 62°, ∠B = 58°. Find AC.", recap: "Ground sine law.", ans: S`$\angle C=60^\circ$; $\approx${f(p5)}$ m` },
  { level: 2, q: "Continue Problem 5: from A the top of a pole at C is at 24°. Find the pole's height.", recap: "Then tangent.", ans: S`$\approx${f(p6)}$ m` },
  { level: 2, q: "A square-based tent has base side 6 m and slant edges 7 m. How tall is the tent?", recap: "Pyramid height.", ans: S`$\sqrt{49-18}=\sqrt{31}\approx${f(Math.sqrt(31))}$ m` },
  { level: 2, q: "A 45 m building is seen at an elevation of 28°. How far away is the observer?", recap: "Distance.", ans: S`$\approx${f(45 / tan(28), 1)}$ m` },
  { level: 3, space: 5, q: "A and B are 250 m apart. The base C of a tower gives ∠CAB = 48° and ∠CBA = 67°. From B the top is at an elevation of 15°. Find the height.", recap: "Tower from B.", ans: S`$BC=\frac{250\sin48^\circ}{\sin65^\circ}\approx${f(p9BC, 1)}$; $h\approx${f(p9h, 1)}$ m`, fig: tower((250 * sin(67)) / sin(65), 48, p9h, ["A", "B", "C", "T"], 250) },
  { level: 3, space: 5, q: "Observer P is due south of a monument and sees its top at 40°; observer Q is due west and sees it at 30°. P and Q are 120 m apart. Find the height of the monument.", recap: "Unknown h, Pythagoras.", ans: S`$h^2(\cot^2 40^\circ+\cot^2 30^\circ)=120^2$: $h\approx${f(p10h, 1)}$ m` },
  { level: 3, space: 4, q: "A room is 6 m by 4 m by 3 m. Find the angle between the floor and a line from one floor corner to the opposite ceiling corner.", recap: "Angle with floor.", ans: S`$\tan^{-1}\frac3{\sqrt{52}}\approx${f(atan(3 / Math.sqrt(52)), 1)}^\circ$` },
  { level: 3, space: 5, q: "A balloon is 500 m above point G. From A it is at 35° elevation, from B at 22°, and ∠AGB = 120° on the ground. How far apart are A and B?", recap: "Two tangents + cosine law.", ans: S`$AG\approx${f(500 / tan(35), 0)}$, $BG\approx${f(500 / tan(22), 0)}$; $AB\approx${f(p12, 0)}$ m`,
    fig: polyT([[0, 0], [500 / tan(35), 0], [(500 / tan(22)) * cos(120), (500 / tan(22)) * sin(120)]], ["G", "A", "B"], { cap: "top view of the ground" }) },
  { level: 3, space: 4, q: "A square pyramid has base side 12 and slant edges 10. Find its height and the angle between a slant edge and the base.", recap: "Pyramid angle.", ans: S`half-diagonal $6\sqrt2$; $h=\sqrt{28}\approx${f(Math.sqrt(28))}$; angle $\cos^{-1}\frac{6\sqrt2}{10}\approx${f(acos((6 * Math.SQRT2) / 10), 1)}^\circ$` },
];

export const WS = {
  code: "5.6",
  title: "Trigonometry in Three Dimensions",
  bigideas: S`Split a 3-D situation into flat triangles. Vertical objects meet the ground at $90^\circ$, so vertical triangles use the primary ratios; ground triangles are often oblique and need the sine or cosine law. Solve the triangle with enough information first and pass the shared side on.`,
  goals: ["Sketch and label 3-D situations.", "Identify horizontal and vertical triangles.", "Find heights and distances in several steps.", "Find diagonals and angles in boxes and pyramids."],
  curriculum: "D1.7",
  vocab: [["Linking side", "a side shared by two triangles"], ["Space diagonal", "$\\sqrt{l^2+w^2+h^2}$"], ["Horizontal / vertical triangle", "lying on the ground / standing upright"]],
  hook: "Hold a pencil upright on a desk. Ask students to point out every right angle they can see between the pencil and lines drawn on the desk.",
  concepts: [
    ["1. Two planes", S`${boxT(8, 5, 4, [{ pts: [[0, 0, 0], [8, 5, 0]], color: "amber" }, { pts: [[0, 0, 0], [8, 5, 4]], color: "red" }, { pts: [[8, 5, 0], [8, 5, 4]], color: "blue" }], [], { width: 5 })}The amber base diagonal and the blue edge are perpendicular, so the red space diagonal is the hypotenuse of a vertical right triangle.`],
    ["2. Strategy", S`Sketch → list triangles → solve the one with three facts → carry the linking side → finish.`],
    ["3. Which tool?", S`Vertical right triangle: SOH CAH TOA. Ground triangle: sine law (side–angle pair known) or cosine law (SAS, SSS).`],
  ],
  tips: ["Mark right angles at the foot of vertical objects.", "Elevation angles live in vertical planes.", "Don't round the linking side.", "Redraw a flat view of each triangle.", "Check units and reasonableness."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
