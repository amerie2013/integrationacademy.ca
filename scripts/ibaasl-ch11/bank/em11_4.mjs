// 11.4 The Cosine Rule and the Area of a Triangle — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { figDoc, triSAS } from "../figs11.mjs";

const S = String.raw;
const r = (d) => (d * Math.PI) / 180, g = (x) => (x * 180) / Math.PI, d2 = (v) => Math.round(v * 100) / 100;
const side = (a, b, C) => Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(r(C)));
const ang = (a, b, c) => g(Math.acos((a * a + b * b - c * c) / (2 * a * b)));
const area = (a, b, C) => 0.5 * a * b * Math.sin(r(C));

export const E = [
  mc("The cosine rule for side c is:", S`$c^2=a^2+b^2-2ab\cos C$`, [S`$c^2=a^2+b^2+2ab\cos C$`, S`$c=a+b-2ab\cos C$`, S`$c^2=a^2+b^2-2ab\sin C$`], "Pythagoras with a correction."),
  mc("The area of a triangle with sides a, b and included angle C is:", S`$\frac12ab\sin C$`, [S`$ab\sin C$`, S`$\frac12ab\cos C$`, S`$\frac12ab$`], "Height b sin C."),
  num(S`$a=3$, $b=5$, $C=60^\circ$. Find $c^2$.`, 19, "9 + 25 − 15."),
  num(S`$a=4$, $b=4$, $C=60^\circ$. Find $c$.`, 4, "Equilateral."),
  num(S`$a=6$, $b=8$, $C=90^\circ$. Find $c$.`, 10, "Pythagoras."),
  num(S`Find the area of a triangle with sides 8 and 5 and included angle 30°.`, 10, "½ × 8 × 5 × ½."),
  num(S`Find the area of a triangle with sides 6 and 6 and included angle 90°.`, 18, "½ × 36."),
  num(S`$a=9$, $b=7$, $C=40^\circ$. Find $c$ (2 d.p.).`, d2(side(9, 7, 40)), "Cosine rule.", null, 0.01),
  num(S`Find the area of a triangle with sides 10 and 12 and included angle 47° (2 d.p.).`, d2(area(10, 12, 47)), "½ab sin C.", null, 0.01),
  num(S`Sides 7, 8 and 9. Find the angle opposite 9 (2 d.p.).`, d2(ang(7, 8, 9)), "cos C = (49 + 64 − 81)/112.", null, 0.01),
  tf("The cosine rule can find an angle when all three sides are known.", true, "Rearranged form."),
  tf("When C = 90°, the cosine rule becomes Pythagoras' theorem.", true, "cos 90° = 0."),
  tf("If C is obtuse then cos C > 0.", false, "Obtuse angles have negative cosine."),
  fill("The angle between two known sides is called the ___ angle.", ["included", "Included"], "SAS."),
  ms("Which situations need the cosine rule? Select all.", ["two sides and the included angle", "three sides", "two angles and a side", "a side and its opposite angle"], [0, 1], "The others use the sine rule."),
  mc("For the triangle shown, c² equals:", S`$64+25-80\cos52^\circ$`, [S`$64+25+80\cos52^\circ$`, S`$64+25-40\cos52^\circ$`, S`$8+5-80\cos52^\circ$`], "2ab = 80.", figDoc({ items: triSAS(8, 5, 52, { sides: ["c", "8", "5"], angles: [[2, "52°"]] }).items })),
  mc("The shaded triangle shown has area:", S`$\frac12(9)(6)\sin70^\circ$`, [S`$\frac12(9)(6)\cos70^\circ$`, S`$(9)(6)\sin70^\circ$`, S`$\frac12(9)(6)$`], "Included angle 70°.", figDoc({ items: triSAS(9, 6, 70, { sides: ["", "9", "6"], angles: [[2, "70°"]], fill: "green" }).items })),
  num(S`Find the area of an equilateral triangle of side 10 (2 d.p.).`, d2(area(10, 10, 60)), "½ × 100 × sin 60°.", null, 0.01),
  mc("In a triangle with sides 5, 6 and 10, the largest angle is:", "obtuse", ["acute", "a right angle", "60°"], "25 + 36 < 100."),
  num(S`$a=8$, $b=15$, $c=17$. Find C.`, 90, "cos C = 0: 64 + 225 = 289."),
];

export const M = [
  num(S`$a=15$, $b=11$, $C=34^\circ$. Find $c$ (2 d.p.).`, d2(side(15, 11, 34)), "Cosine rule.", null, 0.01),
  num(S`$a=8$, $b=13$, $C=118^\circ$. Find $c$ (2 d.p.).`, d2(side(8, 13, 118)), "cos 118° < 0.", null, 0.01),
  num(S`Sides 6, 10 and 14. Find the largest angle.`, 120, "cos C = (36 + 100 − 196)/120 = −½."),
  num(S`Sides 9, 12 and 16. Find the smallest angle (2 d.p.).`, d2(ang(12, 16, 9)), "Opposite 9.", null, 0.01),
  num(S`Find the area of a triangle with sides 14 and 9 and included angle 125° (2 d.p.).`, d2(area(14, 9, 125)), "½ab sin C.", null, 0.01),
  num(S`Find the area of a triangle with sides 5, 6 and 7 (2 d.p.).`, d2(area(5, 6, ang(5, 6, 7))), "Find an angle first.", null, 0.01),
  num(S`A triangle has area 24, side 8 and included angle 30°. Find the other enclosing side.`, 12, "24 = ½ × 8 × b × ½."),
  num(S`A triangle has sides 7 and 10 and area 21. Find the acute included angle (2 d.p.).`, d2(g(Math.asin(0.6))), "sin C = 0.6.", null, 0.01),
  num(S`A parallelogram has sides 8 and 5 and an angle of 60°. Find its area (2 d.p.).`, d2(40 * Math.sin(r(60))), "ab sin θ.", null, 0.01),
  num(S`For the same parallelogram, find the shorter diagonal.`, 7, "√(64 + 25 − 40)."),
  mc("A triangle has sides 4, 7 and 12. What happens with the cosine rule?", "cos C < −1, so no triangle exists", ["C is 90°", "C is acute", "two triangles"], "4 + 7 < 12 violates the triangle inequality."),
  tf("The area of a triangle with sides 6 and 8 is greatest when the included angle is 90°.", true, "sin C is largest at 90°."),
  ms("For sides 3, 5 and 7, which are correct? Select all.", ["the largest angle is 120°", "the triangle is obtuse", "the smallest angle is opposite 3", "the area is 15"], [0, 1, 2], "Area = ½(3)(5) sin 120° ≈ 6.50."),
  mc("In the triangle shown, angle θ satisfies:", S`$\cos\theta=\frac{10^2+7^2-12^2}{2(10)(7)}$`, [S`$\cos\theta=\frac{12^2+7^2-10^2}{2(12)(7)}$`, S`$\sin\theta=\frac{12}{10}$`, S`$\cos\theta=\frac{10^2+12^2-7^2}{2(10)(12)}$`], "θ is opposite 12.", figDoc({ items: triSAS(10, 7, ang(10, 7, 12), { sides: ["12", "10", "7"], angles: [[2, "θ"]] }).items })),
  mc("The triangle shown has area closest to:", "34.6", ["40.0", "69.3", "20.0"], "½(10)(8) sin 60°.", figDoc({ items: triSAS(10, 8, 60, { sides: ["", "10", "8"], angles: [[2, "60°"]], fill: "green" }).items })),
  num(S`Two sides of a triangle are 9 and 15 with included angle 100°. Find the third side (2 d.p.).`, d2(side(9, 15, 100)), "Cosine rule.", null, 0.01),
  num(S`A triangle has sides x, x and 10 with apex angle 40°. Find x (2 d.p.).`, d2(Math.sqrt(100 / (2 - 2 * Math.cos(r(40))))), "100 = 2x² − 2x² cos 40°.", null, 0.01),
  num(S`Find the area of a regular hexagon of side 4 using six triangles (2 d.p.).`, d2(6 * area(4, 4, 60)), "6 × ½ × 16 × sin 60°.", null, 0.01),
  mc("Given sides 8, 15 and the angle opposite 15, the best first rule is:", "the sine rule", ["the cosine rule", "Pythagoras", "the area formula"], "A side and its opposite angle."),
  num(S`$a=11$, $c=7$, $B=63^\circ$. Find $b$ (2 d.p.).`, d2(side(11, 7, 63)), "SAS with angle B.", null, 0.01),
];
