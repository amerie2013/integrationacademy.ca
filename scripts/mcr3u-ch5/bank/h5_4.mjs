// 5.4 The Sine Law and the Ambiguous Case — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { triD, sin, cos, asin, rd } from "./fig.mjs";

const S = String.raw;
// Q1–2: A = 31°, a = 8, b = 13
const B1 = asin((13 * sin(31)) / 8), C1 = 180 - 31 - B1, C2 = 180 - 31 - (180 - B1);
const c1 = (8 * sin(C1)) / sin(31), c2 = (8 * sin(C2)) / sin(31);
// Q6: A = 40°, a = 7, b = 10
const h6 = 10 * sin(40), diff6 = 2 * Math.sqrt(49 - h6 * h6);
// Q7–9: fire
const BF = (15 * sin(40)) / sin(80), AF = (15 * sin(60)) / sin(80);
// Q12
const a12 = (12 * sin(40)) / sin(65), area12 = 0.5 * a12 * 12 * sin(75);
// Q16 figure: A = 28°, b = 16, a = 9
const Cx = 16 * cos(28), Cy = 16 * sin(28), dx = Math.sqrt(81 - Cy * Cy);
// Q17 river
const AT = (80 * sin(120)) / sin(25), w17 = AT * sin(35);
// Q18 mountain
const BP = (1000 * sin(22)) / sin(13), h18 = BP * sin(35);
// Q19 AAS
const c19 = (15 * sin(69)) / sin(48), b19 = 15, a19 = (15 * sin(63)) / sin(48);

export const TOPIC = "5.4 The Sine Law and the Ambiguous Case";
export const Q = [
  num(S`$\angle A=31^\circ$, $a=8$, $b=13$. Two triangles are possible. Find the LONGER possible value of $c$ (2 decimals).`, rd(Math.max(c1, c2)), "Acute B gives the larger C and the longer c.", null, 0.01),
  num(S`$\angle A=31^\circ$, $a=8$, $b=13$. Find the SHORTER possible value of $c$ (2 decimals).`, rd(Math.min(c1, c2)), "Use B₂ = 180° − B₁.", null, 0.01),
  num(S`$\angle A=31^\circ$ and $b=13$. What is the smallest whole-number value of $a$ that gives two triangles?`, 7, "h = 13 sin 31° ≈ 6.70."),
  num(S`$\angle A=31^\circ$ and $b=13$. How many whole-number values of $a$ give two triangles?`, 6, "a = 7, 8, …, 12."),
  num(S`$\angle A=45^\circ$, $b=10\sqrt2$ and $a=10$. Find $\angle B$.`, 90, "h = 10√2 sin 45° = 10 = a: one right triangle."),
  num(S`$\angle A=40^\circ$, $a=7$, $b=10$. Find the difference between the two possible values of $c$ (2 decimals).`, rd(diff6), "The two vertices B are 2√(a² − h²) apart.", null, 0.01),
  num("Fire towers A and B are 15 km apart. From A the fire makes a 40° angle with AB; from B it makes 60° with BA. How far is the fire from B (2 decimals)?", rd(BF), "Angle at fire 80°; BF is opposite the 40° angle.", null, 0.01),
  num("For the same towers, how far is the fire from A (2 decimals)?", rd(AF), "AF is opposite the 60° angle.", null, 0.01),
  num("For the same towers, how far is the fire from the straight line AB (2 decimals)?", rd(AF * sin(40)), "AF sin 40°.", null, 0.01),
  tf("If ∠A is obtuse and a > b, exactly one triangle exists.", true, "Side a is then long enough, and only one position works."),
  mc(S`$\angle A=150^\circ$ and $b=10$. For which values of $a$ is there a triangle?`, S`$a>10$`, [S`$a\ge5$`, S`$5<a<10$`, S`$a=5$`], "Obtuse A: a must be the longest side."),
  num(S`$\angle A=40^\circ$, $\angle B=75^\circ$, $c=12$. Find the area of the triangle (2 decimals).`, rd(area12), "a = 12 sin 40° / sin 65°; area = ½ac sin B.", null, 0.01),
  num(S`$\angle A=52^\circ$, $a=10$, $b=12.5$. Find the obtuse value of ∠B (1 decimal).`, rd(180 - asin((12.5 * sin(52)) / 10), 1), "h ≈ 9.85 < 10 < 12.5, so two triangles.", null, 0.05),
  num(S`The ratio $\frac a{\sin A}$ equals the diameter of the circle through A, B and C. Find that circle's radius when $a=10$ and $\angle A=30^\circ$.`, 10, "Diameter 10/½ = 20."),
  num(S`$\angle A=35^\circ$ and $a=6$. What is the largest whole-number value of $b$ for which at least one triangle exists?`, 10, "Need b sin 35° ≤ 6, so b ≤ 10.46."),
  num(S`For the data in the figure ($\angle A=28^\circ$, $b=16$, $a=9$), find the obtuse value of ∠B (1 decimal).`, rd(180 - asin((16 * sin(28)) / 9), 1), "180° − sin⁻¹(16 sin 28° / 9).",
    triD([[0, 0], [Cx + dx, 0], [Cx, Cy]], ["A 28°", "B₁", "C"], { extra: [{ pts: [[Cx, Cy], [Cx - dx, 0]], color: "red" }], marks: [[Cx - dx, 0, "B₂"], [Cx / 2 - 1, Cy / 2 + 0.6, "16"]] }), 0.05),
  num("A and B are 80 m apart on a straight riverbank. A tree T on the far bank gives ∠TAB = 35° and ∠TBA = 120°. Find the width of the river (1 decimal).", rd(w17, 1), "∠T = 25°; AT = 80 sin 120° / sin 25°; width = AT sin 35°.",
    triD([[0, 0], [80, 0], [AT * cos(35), w17]], ["A 35°", "B", "T"], { extra: [{ pts: [[-10, 0], [AT * cos(35) + 20, 0]], color: "green" }, { pts: [[-10, w17], [AT * cos(35) + 20, w17]], color: "green" }] }), 0.05),
  num("From A the angle of elevation of a peak is 22°. After walking 1000 m straight toward it to B, the angle is 35°. Find the height of the peak (nearest metre).", Math.round(h18), "∠P = 13°; BP = 1000 sin 22° / sin 13°; height = BP sin 35°.",
    triD([[0, 0], [1000, 0], [1000 + h18 / Math.tan((35 * Math.PI) / 180), h18]], ["A 22°", "B 35°", "peak"], { extra: [{ pts: [[1000 + h18 / Math.tan((35 * Math.PI) / 180), 0], [1000 + h18 / Math.tan((35 * Math.PI) / 180), h18]], color: "gray" }] }), 0.5),
  num("Find side c (opposite C) to 2 decimals.", rd(c19), "∠C = 69°; c = 15 sin 69° / sin 48°.",
    triD([[0, 0], [c19, 0], [b19 * cos(63), b19 * sin(63)]], ["A 63°", "B 48°", "C"], { marks: [[b19 * cos(63) / 2 - 1.2, b19 * sin(63) / 2, "15"], [(c19 + b19 * cos(63)) / 2 + 0.8, b19 * sin(63) / 2, `${rd(a19, 1)}`]] }), 0.01),
  num(S`$\angle A=40^\circ$, $a=8$, $b=11$. Two triangles are possible. What is the SUM of the two possible values of ∠C?`, 100, "C₁ = 140° − B₁ and C₂ = B₁ − 40°."),
];
