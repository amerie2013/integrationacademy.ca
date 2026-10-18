// 5.4 The Sine Law and the Ambiguous Case — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { triD, sin, cos, asin, rd } from "./fig.mjs";

const S = String.raw;
const sl = (a, A, B) => (a * sin(B)) / sin(A); // side opposite B
// figure: SSA with two triangles A = 35°, b = 12, a = 9
const Cx = 12 * cos(35), Cy = 12 * sin(35), dx = Math.sqrt(81 - Cy * Cy);
const two = triD([[0, 0], [Cx + dx, 0], [Cx, Cy]], ["A 35°", "", "C"], { extra: [{ pts: [[Cx, Cy], [Cx - dx, 0]], color: "red" }], marks: [[Cx / 2 - 0.6, Cy / 2 + 0.5, "12"], [Cx + dx / 2 + 0.3, Cy / 2, "9"], [Cx - dx / 2 - 0.6, Cy / 2, "9"]] });
const asa = (A, B, c, lab) => { const b = (c * sin(B)) / sin(180 - A - B); return triD([[0, 0], [c, 0], [b * cos(A), b * sin(A)]], [`A ${A}°`, `B ${B}°`, "C"], { marks: lab }); };

export const E = [
  num(S`$\angle A=40^\circ$, $\angle B=60^\circ$, $a=12$. Find $b$ to 2 decimals.`, rd(sl(12, 40, 60)), "b = 12 sin 60° / sin 40°.", null, 0.01),
  num(S`$\angle A=70^\circ$ and $\angle B=50^\circ$. Find $\angle C$.`, 60, "180° − 120°."),
  num(S`$\angle A=30^\circ$, $\angle B=45^\circ$, $a=5$. Find $b$ to 2 decimals.`, rd(sl(5, 30, 45)), "5 sin 45° / sin 30°.", null, 0.01),
  mc("Which equation is the sine law?", S`$\frac a{\sin A}=\frac b{\sin B}$`, [S`$\frac a{\sin B}=\frac b{\sin A}$`, S`$a\sin A=b\sin B$`, S`$a^2=b^2+c^2$`], "Each side over the sine of its opposite angle."),
  mc("What does ASA mean?", "two angles and the side between them", ["two sides and the angle between them", "two sides and an angle opposite one of them", "three sides"], "Angle–Side–Angle."),
  num(S`$\angle A=30^\circ$, $a=3$, $b=10$. How many triangles are possible?`, 0, "h = 10 sin 30° = 5 > 3."),
  num(S`$\angle A=30^\circ$, $a=5$, $b=10$. How many triangles are possible?`, 1, "a = h: one right triangle."),
  num(S`$\angle A=30^\circ$, $a=7$, $b=10$. How many triangles are possible?`, 2, "5 < 7 < 10."),
  num(S`$\angle A=30^\circ$, $a=12$, $b=10$. How many triangles are possible?`, 1, "a ≥ b."),
  tf("Two angles and any side always determine exactly one triangle.", true, "The third angle is fixed, and the sine law gives each side."),
  tf("The sine law alone can find an angle when only three sides are known.", false, "SSS needs the cosine law first."),
  num(S`$\angle A=42^\circ$ and $b=20$. Find the height $h=b\sin A$ to 2 decimals.`, rd(20 * sin(42)), "20 sin 42°.", null, 0.01),
  num(S`$\sin B=0.9$ and B is acute. Find B to 1 decimal.`, rd(asin(0.9), 1), "sin⁻¹ 0.9.", null, 0.05),
  num(S`$\sin B=0.9$ and B is obtuse. Find B to 1 decimal.`, rd(180 - asin(0.9), 1), "180° − sin⁻¹ 0.9.", null, 0.05),
  num(S`$\angle A=55^\circ$, $\angle B=75^\circ$, $c=30$. Find $a$ to 2 decimals.`, rd((30 * sin(55)) / sin(50)), "C = 50°; a = 30 sin 55° / sin 50°.", null, 0.01),
  mc("Which given information can lead to the ambiguous case?", "SSA", ["ASA", "SAS", "SSS"], "Two sides and a non-contained angle."),
  num(S`$\angle A=100^\circ$, $a=15$, $b=9$. How many triangles are possible?`, 1, "A obtuse and a > b."),
  num(S`$\angle A=100^\circ$, $a=8$, $b=9$. How many triangles are possible?`, 0, "An obtuse A needs a > b."),
  num("Find side a (opposite A) to 2 decimals.", rd((14 * sin(50)) / sin(65)), "C = 65°; a = 14 sin 50° / sin 65°.", asa(50, 65, 14, [[7, 0, "14"]]), 0.01),
  num(S`The figure shows $\angle A=35^\circ$, $b=12$ and $a=9$. How many triangles fit this information?`, 2, "h = 12 sin 35° ≈ 6.88 < 9 < 12.", two),
];

export const M = [
  num(S`$\angle A=38^\circ$, $a=11$, $b=8$. Find $\angle B$ to 1 decimal.`, rd(asin((8 * sin(38)) / 11), 1), "a > b, so B is acute.", null, 0.05),
  num(S`$\angle B=118^\circ$, $b=25$, $c=15$. Find $\angle C$ to 1 decimal.`, rd(asin((15 * sin(118)) / 25), 1), "B is obtuse, so C must be acute.", null, 0.05),
  num(S`$\angle A=27^\circ$, $\angle B=104^\circ$, $a=14$. Find $c$ to 2 decimals.`, rd((14 * sin(49)) / sin(27)), "C = 49°.", null, 0.01),
  num(S`$\angle A=42^\circ$, $a=9$, $b=12$. Find the acute value of ∠B to 1 decimal.`, rd(asin((12 * sin(42)) / 9), 1), "sin B = 12 sin 42° / 9.", null, 0.05),
  num(S`$\angle A=42^\circ$, $a=9$, $b=12$. Find the obtuse value of ∠B to 1 decimal.`, rd(180 - asin((12 * sin(42)) / 9), 1), "180° minus the acute value.", null, 0.05),
  num(S`$\angle A=50^\circ$ and $b=14$. What is the smallest whole-number value of $a$ that gives two triangles?`, 11, "h = 14 sin 50° ≈ 10.72."),
  num(S`$\angle A=25^\circ$, $a=10$, $b=18$. How many triangles are possible?`, 2, "h ≈ 7.61 < 10 < 18."),
  tf("If the sine law gives sin B > 1, no triangle exists.", true, "No angle has a sine greater than 1."),
  tf(S`$\angle A=60^\circ$, $a=9$, $b=9$ gives exactly one triangle.`, true, "a ≥ b: one triangle (here equilateral)."),
  mc("For an acute ∠A, when do two triangles exist?", S`$b\sin A<a<b$`, [S`$a<b\sin A$`, S`$a\ge b$`, S`$a=b\sin A$`], "Side a must be longer than the height but shorter than b."),
  num("Points A and B are 300 m apart. A point C across a valley gives ∠CAB = 41° and ∠CBA = 63°. Find AC to 1 decimal.", rd((300 * sin(63)) / sin(76), 1), "∠C = 76°; AC is opposite B.", null, 0.05),
  num("Two coast-guard posts are 5 km apart. A ship is seen at 72° from the line between them at post 1 and at 66° at post 2. How far is the ship from post 2 (2 decimals)?", rd((5 * sin(72)) / sin(42)), "Angle at ship 42°; the side from post 2 is opposite 72°.", null, 0.01),
  num(S`$\angle A=\angle B=33^\circ$ and $c=20$. Find $a$ to 2 decimals.`, rd((20 * sin(33)) / sin(114)), "C = 114°.", null, 0.01),
  num(S`$\angle A=72^\circ$, $a=20$, $b=17$. Find $\angle B$ to 1 decimal.`, rd(asin((17 * sin(72)) / 20), 1), "sin B = 17 sin 72° / 20.", null, 0.05),
  num(S`$\angle A=24^\circ$, $a=7$, $b=15$. How many triangles are possible?`, 2, "h = 15 sin 24° ≈ 6.10."),
  num(S`$\angle A=24^\circ$, $a=7$, $b=15$. Find the obtuse value of ∠B to 1 decimal.`, rd(180 - asin((15 * sin(24)) / 7), 1), "180° − sin⁻¹(15 sin 24° / 7).", null, 0.05),
  ms("Which give exactly one triangle? Select all.", ["A = 40°, B = 65°, c = 9", "A = 30°, a = 4, b = 8", "A = 30°, a = 6, b = 8", "A = 30°, a = 9, b = 8", "A = 120°, a = 5, b = 8"], [0, 1, 3], "ASA: one; a = h: one; h < a < b: two; a ≥ b: one; obtuse with a < b: none."),
  num("A and B are 60 m apart on a riverbank. A tree T on the far bank gives ∠TAB = 58° and ∠TBA = 80°. Find AT to 1 decimal.", rd((60 * sin(80)) / sin(42), 1), "∠T = 42°; AT is opposite B.", null, 0.05),
  num("Find AC to 2 decimals.", rd((25 * sin(57)) / sin(75)), "∠C = 75°; AC is opposite B.", asa(48, 57, 25, [[12.5, 0, "25"]]), 0.01),
  num(S`Find $b$ to 2 decimals if $a=16$.`, rd((16 * sin(71)) / sin(44)), "b = 16 sin 71° / sin 44°.", asa(44, 71, (16 * sin(65)) / sin(44), [[(16 * sin(71)) / sin(44) * cos(44) / 2 - 1, (16 * sin(71)) / sin(44) * sin(44) / 2, "b"]]), 0.01),
];
