// IB AA SL Worksheet 11.5 — Applications: Bearings, Elevation and 3D Angles (teacher edition)
import { svgT } from "./figT.mjs";
import { figDoc, journey, cuboidDiag, pyramid } from "../figs11.mjs";

const S = String.raw;
const rad = (d) => (d * Math.PI) / 180, deg = (r) => (r * 180) / Math.PI;
const T = (items, w = 5.6) => svgT(figDoc({ items }), w);
const trip = (b1, d1, b2, d2) => { const x = d1 * Math.sin(rad(b1)) + d2 * Math.sin(rad(b2)), y = d1 * Math.cos(rad(b1)) + d2 * Math.cos(rad(b2)); let b = deg(Math.atan2(x, y)); if (b < 0) b += 360; return { d: Math.hypot(x, y), b }; };
const f2 = (v) => v.toFixed(2), f1 = (v) => v.toFixed(1);

const EXAMPLES = [
  { title: "Back-bearing", q: "The bearing of Y from X is 228°. Find the bearing of X from Y.",
    steps: [S`$228^\circ-180^\circ$.`], ans: S`$048^\circ$` },
  { title: "Components", q: "A drone flies 350 m on a bearing of 222°. How far south and west of its start is it?",
    steps: [S`South $350\cos42^\circ$; west $350\sin42^\circ$.`], ans: S`$\approx${f1(350 * Math.cos(rad(42)))}$ m S, $\approx${f1(350 * Math.sin(rad(42)))}$ m W` },
  { title: "Right-angled journey", q: "A walker goes 7 km on 015° then 24 km on 105°. Find the distance back.",
    fig: T(journey(15, 7, 105, 24, { l1: "7 km", l2: "24 km" }).items),
    steps: ["Change of direction 90°, so the included angle is 90°.", S`$\sqrt{49+576}$.`], ans: "25 km" },
  { title: "Cosine-rule journey", q: "A boat sails 14 km on 025° then 10 km on 145°. Find the distance back to the start.",
    steps: [S`Included angle $180^\circ-120^\circ=60^\circ$.`, S`$d^2=196+100-280\cos60^\circ=156$.`], ans: S`$\sqrt{156}\approx12.49$ km` },
  { title: "Bearing of the end point", q: "For the boat above, find the bearing of its final position from the start.",
    steps: [S`Angle at O by the sine rule: $\sin O=\frac{10\sin60^\circ}{12.49}$, $O\approx43.9^\circ$.`, S`$25^\circ+43.9^\circ$.`], ans: S`$\approx${f1(trip(25, 14, 145, 10).b)}^\circ$` },
  { title: "Space diagonal angle", q: "A cuboid is 9 × 12 × 5. Find the angle between a space diagonal and the base.",
    fig: T(cuboidDiag(12, 9, 5, { angle: "θ" })),
    steps: [S`Floor diagonal 15; $\tan\theta=\frac5{15}$.`], ans: S`$\approx18.43^\circ$` },
  { title: "Pyramid edge", q: "A square pyramid has base 6 and height 9. Find the angle between a sloping edge and the base.",
    fig: T(pyramid(6, 9, { lb: "6", lh: "h = 9", ls: "" })),
    steps: [S`Half-diagonal $3\sqrt2$; $\tan\theta=\frac9{3\sqrt2}$.`], ans: S`$\approx${f2(deg(Math.atan(9 / (3 * Math.SQRT2))))}^\circ$` },
  { title: "Pyramid face", q: "For the same pyramid, find the angle between a triangular face and the base.",
    steps: [S`Use half the base side: $\tan\phi=\frac93$.`], ans: S`$\approx71.57^\circ$` },
  { title: "Elevation in 3D", q: "A tower 60 m tall stands at the corner of a rectangular field 80 m by 150 m. Find the angle of elevation of the top from the opposite corner.",
    steps: [S`Diagonal $\sqrt{80^2+150^2}=170$.`, S`$\tan\theta=\frac{60}{170}$.`], ans: S`$\approx${f2(deg(Math.atan(60 / 170)))}^\circ$` },
];

const PROBLEMS = [
  { level: 1, q: "The bearing of B from A is 064°. Find the bearing of A from B.", recap: "± 180°.", ans: S`$244^\circ$` },
  { level: 1, q: "A ship sails 40 km on 120°. How far east has it gone?", recap: "Component.", ans: S`$40\sin60^\circ\approx34.64$ km` },
  { level: 1, q: "A cube has side 4. Find its space diagonal.", recap: "3D Pythagoras.", ans: S`$4\sqrt3\approx6.93$` },
  { level: 2, q: "8 km on 070°, then 15 km on 160°. Find the distance back.", recap: "Right angle.", ans: "17 km" },
  { level: 2, q: "11 km on 040°, then 6 km on 120°. Find the distance back.", recap: "Included angle 100°.", ans: S`$\approx${f2(trip(40, 11, 120, 6).d)}$ km` },
  { level: 2, q: "A cuboid is 10 × 4 × 6. Find the angle between a space diagonal and the base.", recap: "Projection.", ans: S`$\tan^{-1}\frac{6}{\sqrt{116}}\approx${f2(deg(Math.atan(6 / Math.sqrt(116))))}^\circ$` },
  { level: 2, q: "A square pyramid has base 10 and sloping edges 13. Find its height.", recap: "Half-diagonal.", ans: S`$\sqrt{169-50}=\sqrt{119}\approx10.91$` },
  { level: 2, q: "Draw north lines and mark the included angle for 6 km on 030° then 9 km on 150°.", recap: "Diagram.", ans: S`included angle $60^\circ$; return $\sqrt{63}\approx7.94$ km`,
    fig: T(journey(30, 6, 150, 9, { l1: "6 km", l2: "9 km", close: false }).items, 5) },
  { level: 3, space: 4, q: "A yacht sails 16 km on 100° then 12 km on 210°. Find the distance and bearing of the start from the yacht.", recap: "Cosine then sine rule.", ans: S`$\approx${f2(trip(100, 16, 210, 12).d)}$ km on $\approx${f1((trip(100, 16, 210, 12).b + 180) % 360)}^\circ$` },
  { level: 3, space: 4, q: "From A, a balloon is due north at elevation 40°; from B, 2 km due east of A, the balloon's elevation is 27°. Find its height.", recap: "Two right triangles + Pythagoras.", ans: (() => { const t = (d) => Math.tan(rad(d)); const h = 2 / Math.sqrt(1 / t(27) ** 2 - 1 / t(40) ** 2); return S`$\approx${f2(h)}$ km`; })() },
  { level: 3, space: 4, q: "A cuboid is 8 × 6 × 4. Find the angle between two space diagonals that meet at the centre (use the cosine rule).", recap: "Triangle of half-diagonals.", ans: (() => { const d = Math.sqrt(116) / 2; return S`$\cos\theta=\frac{2(${(d * d).toFixed(0)})-64}{2(${(d * d).toFixed(0)})}$: $\approx${f2(deg(Math.acos((2 * d * d - 64) / (2 * d * d))))}^\circ$`; })() },
  { level: 3, space: 4, q: "Three towns: B is 30 km from A on 080°; C is 45 km from A on 150°. Find BC.", recap: "Angle at A = 70°.", ans: S`$\approx${f2(Math.sqrt(900 + 2025 - 2700 * Math.cos(rad(70))))}$ km` },
  { level: 3, space: 4, q: "Explain why the angle between a line and a plane uses the line's projection, not any line in the plane.", recap: "Smallest angle.", ans: "the projection gives the smallest angle between the line and any line in the plane" },
];

export const WS = {
  code: "11.5",
  title: "Applications: Bearings, Elevation and 3D Angles",
  bigideas: S`Bearings are three-figure angles clockwise from north. In a two-leg journey draw north lines at each point; the included angle is $180^\circ$ minus the change of direction. Find the return distance with the cosine rule and the angle at the start with the sine rule. In 3D, the angle between a line and a plane is the angle with its projection — find the right-angled triangle.`,
  goals: ["Use bearings.", "Solve two-leg journeys.", "Find 3D angles.", "Solve elevation problems in 3D."],
  curriculum: "SL 3.3",
  vocab: [["Bearing", "clockwise from north"], ["Included angle", "angle at the turning point"], ["Projection", "shadow on the plane"]],
  hook: "A rescue boat must head straight back to port after two legs of a search. Which way should it steer, and how far?",
  concepts: [
    ["1. Journeys", S`${T(journey(50, 6, 170, 8, { l1: "6", l2: "8" }).items, 4.6)} North lines at every point.`],
    ["2. Rules", "Cosine for distance, sine for angle."],
    ["3. 3D angles", "Right triangle with the projection."],
  ],
  tips: ["Three-figure bearings.", "North lines are parallel.", "Back-bearing ± 180°.", "Find the projection.", "Sketch first."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
