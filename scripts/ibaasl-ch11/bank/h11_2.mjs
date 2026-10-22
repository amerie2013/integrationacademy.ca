// 11.2 Right-Angled Triangle Trigonometry — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, rightT, elevation, polygon } from "../figs11.mjs";

const S = String.raw;
const r = (d) => (d * Math.PI) / 180, g = (x) => (x * 180) / Math.PI, t = (d) => Math.tan(r(d)), d2 = (v) => Math.round(v * 100) / 100;
const two = (d, a1, a2) => (d * t(a1) * t(a2)) / (t(a2) - t(a1)); // tower height from two elevations a1 (far) < a2 (near), d apart

export const TOPIC = "11.2 Right-Angled Triangle Trigonometry";
export const Q = [
  num(S`From two points 45 m apart on a straight line towards a tower, the angles of elevation are 19° and 34°. Find the height (2 d.p.).`, d2(two(45, 19, 34)), "h = d tan a tan b/(tan b − tan a).", figDoc({ items: [{ seg: [[-45, 0], [two(45, 19, 34) / t(34), 0]], color: "gray" }, { poly: [[-45, 0], [two(45, 19, 34) / t(34), 0], [two(45, 19, 34) / t(34), two(45, 19, 34)]], fill: "none", color: "violet" }, { seg: [[0, 0], [two(45, 19, 34) / t(34), two(45, 19, 34)]], color: "blue" }, { arc: [[10, 0], [-45, 0], [two(45, 19, 34) / t(34), two(45, 19, 34)]], label: "19°" }, { arc: [[50, 0], [0, 0], [two(45, 19, 34) / t(34), two(45, 19, 34)]], label: "34°" }, { dim: [[-45, 0], [0, 0]], label: "45 m", off: 5 }] }), 0.01),
  num(S`A flagpole stands on a building. From 50 m away the angles of elevation of its bottom and top are 40° and 45°. Find the flagpole's length (2 d.p.).`, d2(50 - 50 * t(40)), "50 tan 45° − 50 tan 40°.", null, 0.01),
  num(S`From the top of a 30 m building, the angle of elevation of a taller building's top is 25° and the angle of depression of its base is 35°. Find the taller building's height (2 d.p.).`, d2(30 + (30 / t(35)) * t(25)), "Distance 30/tan 35°; extra height = distance × tan 25°.", figDoc({ items: [{ seg: [[0, 0], [42.84, 0]], color: "gray" }, { seg: [[0, 0], [0, 30]], color: "ink", width: 3 }, { seg: [[42.84, 0], [42.84, 49.98]], color: "ink", width: 3 }, { seg: [[0, 30], [42.84, 49.98]], color: "blue" }, { seg: [[0, 30], [42.84, 0]], color: "red" }, { seg: [[0, 30], [42.84, 30]], color: "gray", dash: true }, { text: "30 m", at: [-6, 15], bold: true }] }), 0.01),
  num(S`A ladder of length 8 m leans against a wall at 70° to the ground. Its foot slides out so the angle becomes 55°. How far does the top slide down (2 d.p.)?`, d2(8 * Math.sin(r(70)) - 8 * Math.sin(r(55))), "8 sin 70° − 8 sin 55°.", null, 0.01),
  num(S`A regular pentagon has side 10. Find the distance from its centre to a vertex (2 d.p.).`, d2(5 / Math.sin(r(36))), "Half-side 5, central half-angle 36°.", null, 0.01),
  num(S`An observer 1.6 m tall sees the top of a tree at 28° and, after walking 12 m closer, at 46°. Find the tree's height (2 d.p.).`, d2(two(12, 28, 46) + 1.6), "Height above eye level + 1.6.", null, 0.01),
  mc(S`Exact value of $\frac{\sin60^\circ}{\cos60^\circ}-\tan30^\circ$:`, S`$\frac{2\sqrt3}{3}$`, [S`$\frac{\sqrt3}{3}$`, S`$\sqrt3$`, "0"], "√3 − √3/3."),
  mc("In the diagram, AB = 10 and angle A = 30°. The exact length BC is:", "5", [S`$5\sqrt3$`, S`$10\sqrt3$`, S`$\frac{10}{\sqrt3}$`], "Opposite 30° = ½ hyp.", figDoc({ items: polygon([[0, 0], [8.66, 0], [8.66, 5]], { sides: ["", "BC", "AB = 10"], names: ["A", "C", "B"], rightAt: [1], angles: [[0, "30°"]] }) })),
  num(S`A rhombus has side 10 and an interior angle of 64°. Find the length of the longer diagonal (2 d.p.).`, d2(20 * Math.cos(r(32))), "2 × 10 cos 32°.", null, 0.01),
  num(S`A conical tent has slant height 4 m and makes an angle of 58° with the ground. Find its height (2 d.p.).`, d2(4 * Math.sin(r(58))), "4 sin 58°.", null, 0.01),
  ms(S`For an acute angle θ with $\sin\theta=\frac{8}{17}$, which are correct? Select all.`, [S`$\cos\theta=\frac{15}{17}$`, S`$\tan\theta=\frac{8}{15}$`, S`$\sin(90^\circ-\theta)=\frac{15}{17}$`, S`$\tan\theta=\frac{15}{8}$`], [0, 1, 2], "8-15-17 triangle."),
  tf(S`$\tan\theta$ increases without bound as θ approaches 90°.`, true, "adj → 0."),
  num(S`A plane flying at 3000 m sees a landmark at an angle of depression of 12°. One minute later it is 28°. Find the plane's speed in km/h (nearest whole).`, Math.round((3000 / t(12) - 3000 / t(28)) * 60 / 1000), "Horizontal distance covered in 1 min × 60.", null, 1),
  num(S`The angle of elevation of the top of a cliff from a boat is 24°. After rowing 100 m directly towards the cliff it is 39°. Find the cliff's height (2 d.p.).`, d2(two(100, 24, 39)), "Two-angle formula.", figDoc({ items: elevation(two(100, 24, 39) / t(39), two(100, 24, 39), { ld: "x", angle: "39°" }) }), 0.01),
  mc("A right triangle has hypotenuse 2 and one angle 60°. Its area is:", S`$\frac{\sqrt3}{2}$`, [S`$\sqrt3$`, "1", S`$2\sqrt3$`], "Legs 1 and √3: ½ × 1 × √3."),
  num(S`A 2 m pole casts a 3.5 m shadow at the same time a tower casts a 42 m shadow. Find the sun's elevation angle (2 d.p.).`, d2(g(Math.atan(2 / 3.5))), "tan⁻¹(2/3.5).", null, 0.01),
  num(S`For the same sun, find the tower's height.`, 24, "42 × 2/3.5."),
  mc("A wheelchair ramp must rise 0.6 m with an angle of at most 5°. The minimum horizontal length is about:", "6.86 m", ["6.88 m", "0.05 m", "7.00 m"], "0.6/tan 5°."),
  num(S`In right triangle PQR, angle Q = 90°, PQ = 7 and angle R = 23°. Find PR (2 d.p.).`, d2(7 / Math.sin(r(23))), "PQ opposite R: PR = 7/sin 23°.", figDoc({ items: polygon([[0, 0], [16.49, 0], [16.49, 7]], { sides: ["", "7", "PR"], names: ["R", "Q", "P"], rightAt: [1], angles: [[0, "23°"]] }) }), 0.01),
  num(S`A hexagonal nut has distance across the flats 24 mm. Find its distance across the corners (2 d.p.).`, d2(24 / Math.cos(r(30))), "24/cos 30°.", null, 0.01),
];
