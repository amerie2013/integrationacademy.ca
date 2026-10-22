// 11.3 The Sine Rule — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { figDoc, tri } from "../figs11.mjs";

const S = String.raw;
const r = (d) => (d * Math.PI) / 180, g = (x) => (x * 180) / Math.PI, sn = (d) => Math.sin(r(d)), d2 = (v) => Math.round(v * 100) / 100;
const triAc = (A, b, c, sides, angles = []) => tri([0, 0], [c, 0], [b * Math.cos(r(A)), b * Math.sin(r(A))], { sides, names: ["A", "B", "C"], angles });

export const E = [
  mc("The sine rule states:", S`$\frac{a}{\sin A}=\frac{b}{\sin B}=\frac{c}{\sin C}$`, [S`$a\sin A=b\sin B$`, S`$\frac{\sin A}{b}=\frac{\sin B}{a}$`, S`$a^2=b^2+c^2$`], "Each side over the sine of its opposite angle."),
  mc("In triangle ABC, side a is:", "opposite angle A", ["next to angle A", "the longest side", "between B and C angles only if right-angled"], "Lower-case side opposite capital angle."),
  num(S`$A=30^\circ$, $B=90^\circ$, $a=5$. Find $b$.`, 10, "b = 5 sin 90°/sin 30°."),
  num(S`$\frac{a}{\sin A}=18$ and $B=30^\circ$. Find $b$.`, 9, "18 sin 30°."),
  num(S`$A=50^\circ$, $B=60^\circ$. Find $C$.`, 70, "Angle sum."),
  num(S`$A=40^\circ$, $B=75^\circ$, $a=8$. Find $b$ (2 d.p.).`, d2((8 * sn(75)) / sn(40)), "8 sin 75°/sin 40°.", null, 0.01),
  num(S`$B=35^\circ$, $C=100^\circ$, $b=6$. Find $c$ (2 d.p.).`, d2((6 * sn(100)) / sn(35)), "6 sin 100°/sin 35°.", null, 0.01),
  num(S`$a=10$, $b=8$, $A=70^\circ$. Find $\sin B$ (4 d.p.).`, Math.round(((8 * sn(70)) / 10) * 1e4) / 1e4, "8 sin 70°/10.", null, 0.0001),
  num(S`If $\sin B=0.7$ and B is acute, find B (2 d.p.).`, d2(g(Math.asin(0.7))), "sin⁻¹ 0.7.", null, 0.01),
  num(S`If $\sin B=0.7$ and B is obtuse, find B (2 d.p.).`, d2(180 - g(Math.asin(0.7))), "180° − sin⁻¹ 0.7.", null, 0.01),
  tf("The sine rule needs a side and its opposite angle.", true, "Otherwise no ratio is known."),
  tf("Two angles and a side always determine exactly one triangle.", true, "AAS/ASA."),
  tf(S`If $\sin B=1.2$, there are two triangles.`, false, "No triangle: sin ≤ 1."),
  fill("When SSA data fits two triangles it is called the ___ case.", ["ambiguous", "Ambiguous"], "Two possibilities."),
  ms(S`Which data could give two triangles? Select all.`, ["two sides and a non-included angle", "three angles", "two angles and a side", "SSA with the shorter side opposite an acute angle"], [0, 3], "SSA."),
  mc("In the triangle shown, which equation finds b?", S`$\frac{b}{\sin62^\circ}=\frac{11}{\sin45^\circ}$`, [S`$\frac{b}{\sin45^\circ}=\frac{11}{\sin62^\circ}$`, S`$b=11\sin62^\circ$`, S`$\frac{11}{b}=\sin45^\circ$`], "b is opposite 62°.", figDoc({ items: triAc(45, (11 * sn(62)) / sn(45), (11 * sn(73)) / sn(45), ["c", "a = 11", "b"], [[0, "45°"], [1, "62°"]]) })),
  num(S`For the triangle shown, find b (2 d.p.).`, d2((11 * sn(62)) / sn(45)), "11 sin 62°/sin 45°.", null, 0.01),
  mc(S`$\sin x=\sin y$ with $0<x,y<180^\circ$ and $x\ne y$ means:`, S`$x+y=180^\circ$`, [S`$x=-y$`, S`$x-y=90^\circ$`, S`$x+y=90^\circ$`], "Sine is symmetric about 90°."),
  num(S`$C=90^\circ$, $c=20$, $A=30^\circ$. Find $a$ with the sine rule.`, 10, "20 sin 30°."),
  mc("A triangle has A = 120°. How many obtuse angles can it have?", "one", ["two", "three", "none"], "Angles sum to 180°.", figDoc({ items: triAc(120, 6, 8, ["", "", ""], [[0, "120°"]]) })),
];

export const M = [
  num(S`$A=36^\circ$, $C=79^\circ$, $b=14$. Find $a$ (2 d.p.).`, d2((14 * sn(36)) / sn(65)), "B = 65°.", null, 0.01),
  num(S`$B=118^\circ$, $C=27^\circ$, $c=9$. Find $b$ (2 d.p.).`, d2((9 * sn(118)) / sn(27)), "9 sin 118°/sin 27°.", null, 0.01),
  num(S`$a=13$, $c=9$, $A=105^\circ$. Find C (2 d.p.).`, d2(g(Math.asin((9 * sn(105)) / 13))), "Acute only.", null, 0.01),
  num(S`$a=7$, $b=11$, $A=29^\circ$. Find the acute value of B (2 d.p.).`, d2(g(Math.asin((11 * sn(29)) / 7))), "sin B = 11 sin 29°/7.", null, 0.01),
  num(S`For $a=7$, $b=11$, $A=29^\circ$, find the obtuse value of B (2 d.p.).`, d2(180 - g(Math.asin((11 * sn(29)) / 7))), "180° − acute value.", null, 0.01),
  mc(S`$A=55^\circ$, $a=6$, $b=9$. Number of triangles:`, "0", ["1", "2", "3"], "b sin A ≈ 7.37 > 6."),
  mc(S`$A=35^\circ$, $a=10$, $b=8$. Number of triangles:`, "1", ["0", "2", "infinitely many"], "a ≥ b."),
  mc(S`$A=25^\circ$, $a=5$, $b=9$. Number of triangles:`, "2", ["0", "1", "3"], "b sin A ≈ 3.80 < 5 < 9."),
  num(S`$A=30^\circ$, $b=18$. Find a so that exactly one (right-angled) triangle exists.`, 9, "a = b sin A."),
  num(S`Two observers 200 m apart see a balloon at angles 48° and 63° from the line joining them (balloon between). Find the distance from the first observer (2 d.p.).`, d2((200 * sn(63)) / sn(69)), "Third angle 69°.", figDoc({ items: triAc(48, (200 * sn(63)) / sn(69), 200, ["200 m", "", "?"], [[0, "48°"], [1, "63°"]]) }), 0.01),
  tf(S`If $a<b$, then $A<B$.`, true, "Larger side opposite larger angle."),
  ms(S`For $A=40^\circ$, $b=12$, which values of a give two triangles? Select all.`, ["8", "10", "12", "13"], [0, 1], "12 sin 40° ≈ 7.71 < a < 12."),
  num(S`$A=48^\circ$, $B=67^\circ$, $c=20$. Find the perimeter (2 d.p.).`, d2(20 + (20 * sn(48)) / sn(65) + (20 * sn(67)) / sn(65)), "C = 65°.", null, 0.01),
  mc("In the diagram, side a swings from C. With a = 6.5, it meets the base at:", "two points", ["one point", "no points", "infinitely many points"], "b sin A ≈ 5.74 < 6.5 < 10.", figDoc({ items: [{ seg: [[0, 0], [13, 0]], color: "gray" }, { seg: [[0, 0], [8.19, 5.74]], color: "green", width: 2.6 }, { circle: [8.19, 5.74, 6.5], color: "red", dash: true }, { text: "A", at: [-0.5, -0.6], bold: true }, { text: "C", at: [8.19, 6.4], bold: true }, { text: "b = 10", at: [3.6, 3.6], bold: true }] })),
  num(S`In triangle PQR, $P=72^\circ$, $p=15$, $q=12$. Find R (2 d.p.).`, d2(180 - 72 - g(Math.asin((12 * sn(72)) / 15))), "Find Q, then R.", null, 0.01),
  num(S`$\frac{a}{\sin A}=\frac{b}{\sin B}=2R$ where R is the circumradius. If $a=10$ and $A=30^\circ$, find R.`, 10, "2R = 20."),
  mc("A surveyor knows two angles and the side between them. The best first step is:", "find the third angle, then use the sine rule", ["use the cosine rule", "use Pythagoras", "find the area first"], "ASA."),
  num(S`$A=65^\circ$, $a=20$, $c=15$. Find B (2 d.p.).`, d2(180 - 65 - g(Math.asin((15 * sn(65)) / 20))), "Find C first (acute).", null, 0.01),
  num(S`Points A and B are 120 m apart on one bank of a river. A tree C on the far bank has angle CAB = 52° and angle CBA = 61°. Find AC (2 d.p.).`, d2((120 * sn(61)) / sn(67)), "Angle C = 67°; AC = 120 sin 61°/sin 67°.", null, 0.01),
  num(S`The angles of a triangle are in the ratio 2 : 3 : 4 and the longest side is 12. Find the shortest side (2 d.p.).`, d2((12 * sn(40)) / sn(80)), "Angles 40°, 60°, 80°.", null, 0.01),
];
