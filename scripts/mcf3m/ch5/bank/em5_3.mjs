// 5.3 The Sine Law — 20 easy + 20 medium (values computed)
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { n2, sin, cos, asin, side, sasD } from "./trig.mjs";
const S = String.raw;
const tri = (A, B, c) => { const C = 180 - A - B; return sasD(side(c, C, B), c, A); };

export const E = [
  mc(S`Which is the sine law?`, S`$\frac a{\sin A}=\frac b{\sin B}=\frac c{\sin C}$`, [S`$a^2=b^2+c^2-2bc\cos A$`, S`$\frac{\sin a}A=\frac{\sin b}B$`, S`$a\sin A=b\sin B$`], "Each side over the sine of its opposite angle."),
  mc(S`Which information allows the sine law to find a side?`, "two angles and a side", ["three sides", "two sides and the contained angle", "one side only"], "Need a complete pair."),
  num(S`$A=40^\circ$, $B=75^\circ$. Enter $C$.`, 65, "180 − 40 − 75."),
  n2(S`$A=30^\circ$, $B=70^\circ$, $a=8$. Find $b$.`, side(8, 30, 70), "b = 8 sin 70°/sin 30°."),
  n2(S`$A=50^\circ$, $B=60^\circ$, $a=10$. Find $b$.`, side(10, 50, 60), "Sine law."),
  n2(S`$B=45^\circ$, $C=80^\circ$, $b=12$. Find $c$.`, side(12, 45, 80), "Sine law."),
  n2(S`$A=55^\circ$, $C=65^\circ$, $a=14$. Find $c$.`, side(14, 55, 65), "Sine law."),
  n2(S`$a=10$, $b=8$, $A=70^\circ$. Find $B$.`, asin((8 * sin(70)) / 10), "sin B = 8 sin 70°/10."),
  n2(S`$a=12$, $c=9$, $A=80^\circ$. Find $C$.`, asin((9 * sin(80)) / 12), "sin C = 9 sin 80°/12."),
  n2(S`Find $\frac a{\sin A}$ if $a=6$ and $A=30^\circ$.`, 12, "6/0.5."),
  tf("In any triangle, the largest side is opposite the largest angle.", true, "Sine is increasing on 0°–90° (acute case)."),
  tf("The sine law can find the third side when you know three sides.", false, "Use the cosine law."),
  fill("In the sine law, side a is paired with angle ____.", ["A"], "Opposite."),
  mc("In the triangle shown, which pair is complete?", "side a and angle A", ["side a and angle B", "side b and angle A", "none"], "a is opposite A.", tri(50, 60, 8)),
  n2("The triangle shown has A = 50°, B = 60°, c = 8. Find a.", side(8, 70, 50), "C = 70°; a = 8 sin 50°/sin 70°.", tri(50, 60, 8)),
  num(S`In an equilateral triangle with side $5$, enter $\frac{5}{\sin60^\circ}$ (two decimals).`, Math.round((5 / sin(60)) * 100) / 100, "Same for all three pairs.", null, 0.011),
  n2(S`$A=62^\circ$, $B=58^\circ$, $c=20$. Find $a$.`, side(20, 60, 62), "C = 60°."),
  mc(S`If $\frac{x}{\sin40^\circ}=\frac{12}{\sin70^\circ}$, then $x=$ …`, S`$\frac{12\sin40^\circ}{\sin70^\circ}$`, [S`$\frac{12\sin70^\circ}{\sin40^\circ}$`, S`$12\sin40^\circ\sin70^\circ$`, S`$\frac{\sin40^\circ}{12\sin70^\circ}$`], "Multiply both sides by sin 40°."),
  num(S`Angles of a triangle are $x$, $2x$ and $3x$. Enter $x$.`, 30, "6x = 180."),
  n2(S`$A=35^\circ$, $B=85^\circ$, $b=15$. Find $a$.`, side(15, 85, 35), "Sine law."),
];

export const M = [
  n2(S`$A=48^\circ$, $B=67^\circ$, $c=25$. Find $a$.`, side(25, 65, 48), "C = 65°."),
  n2(S`$A=48^\circ$, $B=67^\circ$, $c=25$. Find $b$.`, side(25, 65, 67), "C = 65°."),
  n2(S`$a=15$, $b=13$, $A=74^\circ$. Find $B$.`, asin((13 * sin(74)) / 15), "Sine law for an angle."),
  n2(S`$a=15$, $b=13$, $A=74^\circ$. Find $C$.`, 106 - asin((13 * sin(74)) / 15), "180 − A − B."),
  n2(S`Baseline $AB=200$ m; $\angle A=65^\circ$, $\angle B=70^\circ$ to a point $P$. Find $AP$.`, side(200, 45, 70), "Angle P = 45°."),
  n2(S`Baseline $AB=200$ m; $\angle A=65^\circ$, $\angle B=70^\circ$. Find the distance from $P$ to line $AB$.`, side(200, 45, 70) * sin(65), "AP sin 65°."),
  n2(S`Two stations $12$ km apart see a fire at $58^\circ$ and $64^\circ$. Distance from the $58^\circ$ station?`, side(12, 58, 64), "Opposite 64°; angle at fire 58°."),
  n2(S`$b=20$, $c=18$, $B=78^\circ$. Find $C$.`, asin((18 * sin(78)) / 20), "sin C = 18 sin 78°/20."),
  n2(S`In isosceles $\triangle$ with $A=B=70^\circ$ and $c=10$, find $a$.`, side(10, 40, 70), "C = 40°."),
  n2(S`$A=56^\circ$, $C=71^\circ$, $b=30$. Find the perimeter.`, 30 + side(30, 53, 56) + side(30, 53, 71), "B = 53°."),
  ms(S`Select every case where the sine law can be used directly.`, ["AAS", "ASA", "SSS", "SAS", "SSA (acute)"], [0, 1, 4], "SSS/SAS need the cosine law."),
  tf(S`$\frac a{\sin A}$ is the same for all three sides of a triangle.`, true, "That is the sine law."),
  mc("Which equation finds angle B in the triangle shown (a = 9, b = 7, A = 75°)?", S`$\sin B=\frac{7\sin75^\circ}{9}$`, [S`$\sin B=\frac{9\sin75^\circ}{7}$`, S`$\cos B=\frac79$`, S`$B=75\cdot\frac79$`], "sin B / b = sin A / a.", tri(75, 48.7, 9)),
  n2("For the triangle shown (a = 9, b = 7, A = 75°), find B.", asin((7 * sin(75)) / 9), "sin⁻¹.", tri(75, 48.7, 9)),
  n2(S`A tree $T$ across a river is sighted from $A$ and $B$, $50$ m apart, at $\angle A=60^\circ$ and $\angle B=75^\circ$. Find $AT$.`, side(50, 45, 75), "Angle T = 45°."),
  n2(S`For that tree, find the river width (distance from $T$ to $AB$).`, side(50, 45, 75) * sin(60), "AT sin 60°."),
  fill(S`If $A=90^\circ$, the sine law gives $\frac a{1}=\frac b{\sin B}$, so $\sin B=\frac b{\square}$. The missing letter is ____.`, ["a"], "sin B = opp/hyp."),
  n2(S`$\frac{a}{\sin A}=18$. Find $a$ if $A=52^\circ$.`, 18 * sin(52), "a = 18 sin 52°."),
  n2(S`Two angles are $63^\circ$ and $59^\circ$, and the side opposite the third angle is $16$. Find the side opposite $63^\circ$.`, side(16, 58, 63), "Third angle 58°."),
  num(S`In a triangle, $a=2b$ and $A=90^\circ$. Enter $B$ (degrees).`, 30, "sin B = b/a = ½."),
];
