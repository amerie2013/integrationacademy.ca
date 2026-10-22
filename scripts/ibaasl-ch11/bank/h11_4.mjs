// 11.4 The Cosine Rule and the Area of a Triangle — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, triSAS, tri } from "../figs11.mjs";

const S = String.raw;
const r = (d) => (d * Math.PI) / 180, g = (x) => (x * 180) / Math.PI, d2 = (v) => Math.round(v * 100) / 100;
const side = (a, b, C) => Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(r(C)));
const ang = (a, b, c) => g(Math.acos((a * a + b * b - c * c) / (2 * a * b)));
const area = (a, b, C) => 0.5 * a * b * Math.sin(r(C));

export const TOPIC = "11.4 The Cosine Rule and the Area of a Triangle";
export const Q = [
  num(S`A quadrilateral ABCD has AB = 9, BC = 12, angle ABC = 95°, CD = 8 and angle ACD = 40°. Find AC (2 d.p.).`, d2(side(9, 12, 95)), "Cosine rule in ABC.", figDoc({ items: tri([0, 0], [9, 0], [9 + 12 * Math.cos(r(85)), 12 * Math.sin(r(85))], { sides: ["9", "12", "AC"], names: ["A", "B", "C"], angles: [[1, "95°"]] }) }), 0.01),
  num(S`For the same quadrilateral, find its total area (2 d.p.).`, d2(area(9, 12, 95) + area(side(9, 12, 95), 8, 40)), "Area ABC + area ACD.", null, 0.01),
  num(S`$a=x+1$, $b=x+2$, $c=x+4$ and the angle opposite c is 120°. Find x (2 d.p.).`, d2((-1 + Math.sqrt(73)) / 4), "(x+4)² = (x+1)² + (x+2)² + (x+1)(x+2) ⇒ 2x² + x − 9 = 0.", null, 0.01),
  num(S`The sides of a triangle are 4, 5 and 6. Show that the largest angle is twice the smallest by finding the largest angle (2 d.p.).`, d2(ang(4, 5, 6)), "cos C = 1/8; smallest has cos = 3/4 and 2(3/4)² − 1 = 1/8.", null, 0.01),
  num(S`Find the area of the triangle with vertices $(0,0)$, $(8,0)$ and $(3,6)$ using two sides and the included angle at the origin (2 d.p.).`, 24, "½ × 8 × √45 × sin θ = ½ × 8 × 6."),
  num(S`Two ships leave port at the same time: one at 18 km/h on 040°, the other at 24 km/h on 115°. How far apart are they after 2 hours (2 d.p.)?`, d2(side(36, 48, 75)), "Angle between paths 75°.", figDoc({ items: triSAS(48, 36, 75, { sides: ["d", "48 km", "36 km"], names: ["A", "B", "O"], angles: [[2, "75°"]] }).items }), 0.01),
  num(S`A triangle has two sides 10 and 14. Its area is 35. Find both possible lengths of the third side (give the larger, 2 d.p.).`, d2(side(10, 14, 150)), "sin C = ½: C = 30° or 150°.", null, 0.01),
  mc("For the same triangle (sides 10, 14, area 35), the smaller possible third side is about:", "7.32", ["23.18", "17.20", "4.00"], "C = 30°: √(100 + 196 − 280 cos 30°)."),
  ms("A triangle has sides 7, 24 and 25. Which are correct? Select all.", ["it is right-angled", "its area is 84", "the largest angle is 90°", "it is obtuse"], [0, 1, 2], "49 + 576 = 625."),
  tf(S`For any triangle, $a^2+b^2>c^2$ exactly when angle C is acute.`, true, "−2ab cos C < 0 iff cos C > 0."),
  num(S`A regular octagon has side 6. Find the length of its shortest diagonal (2 d.p.).`, d2(side(6, 6, 135)), "Interior angle 135°.", null, 0.01),
  num(S`A kite ABCD has AB = AD = 10, CB = CD = 17 and diagonal AC = 21. Find angle BAD (2 d.p.).`, d2(2 * ang(10, 21, 17)), "Angle BAC from triangle ABC, then double.", figDoc({ items: tri([0, 0], [21 * 0 + 10 * Math.cos(r(ang(10, 21, 17))), -10 * Math.sin(r(ang(10, 21, 17)))], [21, 0], { sides: ["10", "17", "21"], names: ["A", "B", "C"] }) }), 0.01),
  num(S`For the kite, find its area (2 d.p.).`, d2(2 * area(10, 21, ang(10, 21, 17))), "Twice triangle ABC.", null, 0.01),
  mc("A surveyor measures sides 50 m and 80 m and the angle between them as 64°. The area of the plot is about:", "1797.6 m²", ["2000 m²", "3595.2 m²", "876.7 m²"], "½(50)(80) sin 64°."),
  num(S`In triangle ABC, $a=12$, $b=10$, $C=50^\circ$. Find angle A (2 d.p.).`, d2(ang(10, side(12, 10, 50), 12)), "Find c, then use the cosine rule for A.", null, 0.01),
  num(S`A triangle with sides 8, 8 and $x$ has area 16. Find the larger possible value of $x$ (2 d.p.).`, d2(side(8, 8, 150)), "½(64) sin θ = 16 ⇒ θ = 30° or 150°.", null, 0.01),
  num(S`Points P(1,2), Q(7,4), R(3,9). Find angle PQR (2 d.p.).`, d2(ang(Math.hypot(6, 2), Math.hypot(4, 5), Math.hypot(2, 7))), "Find the three side lengths.", figDoc({ items: tri([1, 2], [7, 4], [3, 9], { names: ["P", "Q", "R"], angles: [[1, "?"]] }) }), 0.01),
  mc(S`If $\cos C=-\frac{1}{4}$ and $a=b=4$, then $c^2$ is:`, "40", ["24", "28", "36"], "16 + 16 + 8."),
  num(S`A triangle has sides 13, 14 and 15. Find its area.`, 84, "Find an angle with the cosine rule, then ½ab sin C."),
  num(S`For the 13-14-15 triangle, find the height onto the side of length 14.`, 12, "Area = ½ × 14 × h."),
];
