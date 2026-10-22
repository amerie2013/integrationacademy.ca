// 11.3 The Sine Rule — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, tri } from "../figs11.mjs";

const S = String.raw;
const r = (d) => (d * Math.PI) / 180, g = (x) => (x * 180) / Math.PI, sn = (d) => Math.sin(r(d)), d2 = (v) => Math.round(v * 100) / 100;
const B1 = (A, a, b) => g(Math.asin((b * sn(A)) / a));
const cOf = (A, a, B) => (a * sn(180 - A - B)) / sn(A);
const triAc = (A, b, c, sides, angles = []) => tri([0, 0], [c, 0], [b * Math.cos(r(A)), b * Math.sin(r(A))], { sides, names: ["A", "B", "C"], angles });

export const TOPIC = "11.3 The Sine Rule";
export const Q = [
  num(S`$A=34^\circ$, $a=12$, $b=19$. Find the larger possible value of c (2 d.p.).`, d2(cOf(34, 12, B1(34, 12, 19))), "Use the acute B (larger C).", null, 0.01),
  num(S`For $A=34^\circ$, $a=12$, $b=19$, find the smaller possible value of c (2 d.p.).`, d2(cOf(34, 12, 180 - B1(34, 12, 19))), "Obtuse B.", null, 0.01),
  num(S`For $A=34^\circ$, $a=12$, $b=19$, find the difference between the two possible areas (2 d.p.).`, d2(0.5 * 19 * (cOf(34, 12, B1(34, 12, 19)) - cOf(34, 12, 180 - B1(34, 12, 19))) * sn(34)), "Area = ½bc sin A.", figDoc({ items: [{ seg: [[0, 0], [24, 0]], color: "gray" }, { seg: [[0, 0], [19 * Math.cos(r(34)), 19 * sn(34)]], color: "green", width: 2.6 }, { seg: [[19 * Math.cos(r(34)), 19 * sn(34)], [cOf(34, 12, B1(34, 12, 19)), 0]], color: "red", width: 2.4 }, { seg: [[19 * Math.cos(r(34)), 19 * sn(34)], [cOf(34, 12, 180 - B1(34, 12, 19)), 0]], color: "violet", width: 2.4, dash: true }, { text: "A", at: [-0.8, -0.8], bold: true }, { text: "C", at: [19 * Math.cos(r(34)), 19 * sn(34) + 1.2], bold: true }, { arc: [[5, 0], [0, 0], [10, 6.7]], label: "34°" }] }), 0.01),
  num(S`In triangle ABC, $A=40^\circ$, $b=15$. Find the least integer value of a giving exactly one triangle with $a\ge b$.`, 15, "a ≥ b."),
  num(S`In triangle ABC, $A=40^\circ$, $b=15$. Find the smallest value of a for which any triangle exists (2 d.p.).`, d2(15 * sn(40)), "a = b sin A.", null, 0.01),
  num(S`From a lighthouse L, two ships A and B are observed with angle ALB = 40° and angle LAB = 75°. Ship A is 12 km from L. Find AB (2 d.p.).`, d2((12 * sn(40)) / sn(65)), "Angle B = 65°; AB is opposite L.", null, 0.01),
  num(S`A tree leans 10° from the vertical towards the sun. When the sun's elevation is 42°, its shadow on level ground is 22 m long. Find the tree's length (2 d.p.).`, d2((22 * sn(42)) / sn(38)), "Angle between tree and ground on the shadow side 100°; angle at the top 38°.", null, 0.01),
  mc(S`If $\frac{\sin A}{a}=\frac{1}{8}$, $b=6$, then $\sin B$ is:`, "0.75", ["1.33", "0.5", "48"], "sin B = b/8."),
  ms(S`Which are true for any triangle? Select all.`, [S`$\frac{a}{b}=\frac{\sin A}{\sin B}$`, "the largest side is opposite the largest angle", S`$a\sin B=b\sin A$`, S`$\frac{a}{\sin B}=\frac{b}{\sin A}$`], [0, 1, 2], "The last swaps the pairs."),
  tf(S`If A is obtuse and $a>b$, there is exactly one triangle.`, true, "B must be acute and unique."),
  tf(S`If A is obtuse and $a\le b$, there is no triangle.`, true, "The side opposite the obtuse angle must be the longest."),
  num(S`The angles of a triangle are $x$, $2x$ and $3x$. The side opposite $x$ is 5. Find the side opposite $3x$.`, 10, "x = 30°: 5 sin 90°/sin 30°."),
  num(S`In triangle ABC, $B=2A$, $a=6$ and $b=9$. Find A (2 d.p.).`, d2(g(Math.acos(0.75))), "sin 2A/sin A = 2 cos A = 9/6.", null, 0.01),
  num(S`Two angles of a triangle are 47° and 68°, and the side between them is 25. Find the shortest side (2 d.p.).`, d2((25 * sn(47)) / sn(65)), "Third angle 65°; shortest opposite 47°.", figDoc({ items: triAc(47, (25 * sn(68)) / sn(65), 25, ["25", "", ""], [[0, "47°"], [1, "68°"]]) }), 0.01),
  mc("Given A = 30°, a = 5, b = 12, the number of triangles is:", "0", ["1", "2", "3"], "b sin A = 6 > 5."),
  num(S`A triangle has $a=8$, $A=50^\circ$ and $B=60^\circ$. Find its area (2 d.p.).`, d2(0.5 * 8 * ((8 * sn(60)) / sn(50)) * sn(70)), "Find b, then ½ab sin C.", figDoc({ items: triAc(50, (8 * sn(60)) / sn(50), (8 * sn(70)) / sn(50), ["", "a = 8", "b"], [[0, "50°"], [1, "60°"]]) }), 0.01),
  num(S`From the top of a 50 m tower, the angles of depression of two points due north are 30° and 45°, both points on the same side. Use triangle methods to find their distance apart (2 d.p.).`, d2(50 / Math.tan(r(30)) - 50), "50√3 − 50.", null, 0.01),
  mc("A pendulum of length 1.5 m swings 24° each side of vertical. The straight-line distance between the extreme positions is closest to:", "1.22 m", ["0.61 m", "1.50 m", "0.62 m"], "Isosceles: 2 × 1.5 sin 24°.", figDoc({ items: tri([0, 0], [2 * 1.5 * sn(24), 0], [1.5 * sn(24), 1.5 * Math.cos(r(24))], { sides: ["", "1.5", "1.5"], angles: [[2, "48°"]] }) })),
  num(S`Two forces act at a point; their resultant makes angles of 35° and 50° with them. If the first force is 20 N, find the resultant (2 d.p.) using the triangle of forces.`, d2((20 * sn(95)) / sn(50)), "Triangle angles 35°, 50°, 95°; resultant opposite 95°, first force opposite 50°.", null, 0.01),
  num(S`In triangle PQR, $P=25^\circ$, $p=6$, $q=13$. Find the sum of the two possible values of angle Q.`, 180, "θ + (180° − θ)."),
];
