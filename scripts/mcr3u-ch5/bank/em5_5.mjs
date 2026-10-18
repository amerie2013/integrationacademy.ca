// 5.5 The Cosine Law — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { triD, sasD, cos, sin, acos, asin, lawC, angC, rd } from "./fig.mjs";

const S = String.raw;
/** triangle from three sides: a opposite A … placed with c on the x-axis */
const sss = (a, b, c, labels = ["A", "B", "C"]) => { const A = angC(a, b, c); return triD([[0, 0], [c, 0], [b * cos(A), b * sin(A)]], labels, { marks: [[c / 2, 0, String(c)], [(c + b * cos(A)) / 2 + 0.4, (b * sin(A)) / 2, String(a)], [(b * cos(A)) / 2 - 0.6, (b * sin(A)) / 2, String(b)]] }); };
const a13 = lawC(8, 11, 57), B13 = asin((8 * sin(57)) / a13);
const C14 = angC(70, 40, 55);
const nav = lawC(12, 8, 145);

export const E = [
  num(S`$b=3$, $c=4$, $\angle A=90^\circ$. Find $a$.`, 5, "cos 90° = 0: a² = 9 + 16."),
  num(S`$b=5$, $c=8$, $\angle A=60^\circ$. Find $a$.`, 7, "25 + 64 − 80(½) = 49."),
  num(S`$b=6$, $c=6$, $\angle A=60^\circ$. Find $a$.`, 6, "36 + 36 − 36 = 36 (equilateral)."),
  num(S`$b=7$, $c=9$, $\angle A=40^\circ$. Find $a$ to 2 decimals.`, rd(lawC(7, 9, 40)), "a² = 49 + 81 − 126 cos 40°.", null, 0.01),
  num("A triangle has sides 7, 8 and 13. Find its largest angle.", 120, "cos θ = (49 + 64 − 169)/112 = −½."),
  num("A triangle has sides 5, 7 and 8. Find the angle opposite the side 7.", 60, "cos θ = (25 + 64 − 49)/80 = ½."),
  mc("Which formula finds ∠A from three sides?", S`$\cos A=\frac{b^2+c^2-a^2}{2bc}$`, [S`$\cos A=\frac{a^2+b^2-c^2}{2ab}$`, S`$\cos A=\frac{b^2+c^2+a^2}{2bc}$`, S`$\sin A=\frac{a}{b}$`], "The side opposite A is subtracted."),
  mc("You know two sides and the angle between them. Which law finds the third side?", "the cosine law", ["the sine law", "the Pythagorean theorem only", "neither"], "SAS → cosine law."),
  tf("When ∠A = 90°, the cosine law becomes the Pythagorean theorem.", true, "The term 2bc cos 90° is 0."),
  tf("The cosine law can give two different triangles for the same SAS data.", false, "SAS fixes the triangle."),
  num(S`For $a=6$, $b=5$, $c=4$, evaluate $\frac{b^2+c^2-a^2}{2bc}$.`, 0.125, "(25 + 16 − 36)/40."),
  num(S`$\cos A=-0.2$. Find $A$ to 1 decimal.`, rd(acos(-0.2), 1), "cos⁻¹(−0.2) is obtuse.", null, 0.05),
  mc(S`If $b^2+c^2<a^2$, then ∠A is`, "obtuse", ["acute", "right", "impossible to tell"], "cos A < 0."),
  num(S`$b=10$, $c=12$, $\angle A=25^\circ$. Find $a$ to 2 decimals.`, rd(lawC(10, 12, 25)), "a² = 100 + 144 − 240 cos 25°.", null, 0.01),
  num("Two sides of a triangle are 8 and 5 with a 120° angle between them. Find the third side to 2 decimals.", rd(Math.sqrt(129)), "64 + 25 + 40 = 129.", null, 0.01),
  num("Each side of a triangle is 6. Use the cosine law to find one angle.", 60, "cos θ = (36 + 36 − 36)/72 = ½."),
  num("A triangle has sides 9, 10 and 11. Find the angle opposite 9 to 1 decimal.", rd(angC(9, 10, 11), 1), "cos θ = (100 + 121 − 81)/220.", null, 0.05),
  mc("A triangle has sides 4, 5 and 6. Which angle is largest?", "the angle opposite 6", ["the angle opposite 4", "the angle opposite 5", "they are equal"], "The largest angle faces the longest side."),
  num("Find side a (opposite the 70° angle) to 2 decimals.", rd(lawC(6, 9, 70)), "a² = 36 + 81 − 108 cos 70°.", sasD(6, 9, 70, ["A 70°", "B", "C"], { marks: [[4.5, 0, "9"], [1, 3, "6"], [5, 3.5, "a"]] }), 0.01),
  num("Find the angle opposite the side 9 (1 decimal).", rd(angC(9, 5, 6), 1), "cos θ = (25 + 36 − 81)/60.", sss(9, 5, 6), 0.05),
];

export const M = [
  num(S`$b=14$, $c=9$, $\angle A=133^\circ$. Find $a$ to 2 decimals.`, rd(lawC(14, 9, 133)), "cos 133° < 0, so the last term adds.", null, 0.01),
  num("A triangle has sides 12, 15 and 20. Find its largest angle (1 decimal).", rd(angC(20, 12, 15), 1), "Opposite 20.", null, 0.05),
  num("A triangle has sides 12, 15 and 20. Find its smallest angle (1 decimal).", rd(angC(12, 15, 20), 1), "Opposite 12.", null, 0.05),
  num("Two hikers leave the same point on paths 75° apart. One walks 3 km and the other 5 km. How far apart are they (2 decimals)?", rd(lawC(3, 5, 75)), "SAS with 75°.", null, 0.01),
  num("A golf hole is 380 m from the tee. A drive goes 220 m but 12° off the line to the hole. How far is the ball from the hole (1 decimal)?", rd(lawC(380, 220, 12), 1), "SAS at the tee.", null, 0.05),
  num("A parallelogram has sides 7 and 10 with a 65° angle. Find its longer diagonal (2 decimals).", rd(lawC(7, 10, 115)), "The longer diagonal faces the 115° angle.", null, 0.01),
  num("A parallelogram has sides 7 and 10 with a 65° angle. Find its shorter diagonal (2 decimals).", rd(lawC(7, 10, 65)), "The shorter diagonal faces 65°.", null, 0.01),
  num("A plane flies 300 km, turns 40° to the left and flies 200 km. How far is it from its start (1 decimal)?", rd(lawC(300, 200, 140), 1), "Interior angle 180° − 40° = 140°.", null, 0.05),
  mc("Classify the triangle with sides 6, 7 and 10.", "obtuse", ["acute", "right", "not a triangle"], "36 + 49 = 85 < 100."),
  mc("Classify the triangle with sides 6, 8 and 9.", "acute", ["obtuse", "right", "not a triangle"], "36 + 64 = 100 > 81."),
  tf("In the triangle with sides 7, 24 and 25, the largest angle is 90°.", true, "49 + 576 = 625."),
  num(S`For $a=7$, $b=8$, $c=10$, find $\cos C$ to 4 decimals.`, rd(13 / 112, 4), "(49 + 64 − 100)/112.", null, 0.0001),
  num(S`$b=8$, $c=11$, $\angle A=57^\circ$. Find $\angle B$ to 1 decimal.`, rd(B13, 1), "First a by the cosine law, then the sine law for B (opposite the shorter side).", null, 0.05),
  num("A triangular plot has sides 40 m, 55 m and 70 m. Find its area to the nearest square metre.", Math.round(0.5 * 40 * 55 * sin(C14)), "Angle opposite 70 by the cosine law, then ½ab sin C.", null, 0.5),
  num("Goalposts are 7.3 m apart. A player is 18 m from one post and 21 m from the other. Find the shooting angle (1 decimal).", rd(angC(7.3, 18, 21), 1), "The angle faces the 7.3 m side.", null, 0.05),
  num("A clock's hands are 6 cm and 9 cm long. At 4:00, how far apart are their tips (2 decimals)?", rd(Math.sqrt(171)), "The hands are 120° apart: 36 + 81 + 54.", null, 0.01),
  ms("Which situations need the cosine law first? Select all.", ["SSS", "SAS", "ASA", "SSA"], [0, 1], "ASA and SSA contain a side–opposite-angle pair."),
  num(S`$b=c=10$ and $a=10\sqrt3$. Find $\angle A$.`, 120, "cos A = (100 + 100 − 300)/200 = −½."),
  num("A boat travels 12 km, turns 35° and travels 8 km. How far is it from its start (2 decimals)?", rd(nav), "Interior angle 145°.", triD([[0, 0], [12, 0], [12 + 8 * cos(35), 8 * sin(35)]], ["start", "turn", "boat"], { marks: [[6, 0, "12 km"]] }), 0.01),
  num("Find the angle between the sides 11 and 13 (1 decimal).", rd(angC(17, 11, 13), 1), "It is opposite the side 17.", sss(17, 11, 13), 0.05),
];
