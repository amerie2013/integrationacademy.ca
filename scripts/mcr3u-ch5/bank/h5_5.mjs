// 5.5 The Cosine Law — 20 hard questions (new topic)
import { mc, num, tf } from "./kit.mjs";
import { triD, cos, sin, lawC, angC, rd } from "./fig.mjs";
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const C13 = angC(15, 13, 14);
const pA = angC(16, 9, 13); // parallelogram angle facing the 16 diagonal
const AC14 = Math.sqrt(91), D15 = angC(AC14, 4, 7);
const ship = lawC(18, 25, 120);
const tri18 = { A: angC(8, 11, 15), B: angC(11, 8, 15) };

export const TOPIC = "5.5 The Cosine Law";
export const Q = [
  num("A triangle has sides 13, 14 and 15. Use the cosine law to find one angle, then find the area.", 84, "cos C = (169 + 196 − 225)/364 for the angle between 13 and 14; area = ½(13)(14) sin C = 84.", null, 0.05),
  num("A parallelogram has sides 9 and 13 and one diagonal 16. Find the other diagonal (2 decimals).", rd(Math.sqrt(244)), "Find an angle from the 16 diagonal, then use its supplement; or d₁² + d₂² = 2(9² + 13²).",
    triD([[0, 0], [13, 0], [13 + 9 * cos(180 - pA), 9 * sin(pA)], [9 * cos(180 - pA), 9 * sin(pA)]], ["", "", "", ""], { extra: [{ pts: [[0, 0], [13 + 9 * cos(180 - pA), 9 * sin(pA)]], color: "red" }, { pts: [[13, 0], [9 * cos(180 - pA), 9 * sin(pA)]], color: "amber" }], marks: [[6.5, 0, "13"], [9 * cos(180 - pA) / 2 - 0.7, 9 * sin(pA) / 2, "9"], [8, 4.4, "16"]] }), 0.01),
  num("A rhombus has side 10 and an angle of 50°. Find its longer diagonal (2 decimals).", rd(lawC(10, 10, 130)), "The longer diagonal faces 130°.", null, 0.01),
  num("A triangle has sides x, x + 1 and x + 2, and its largest angle is 120°. Find x.", 1.5, "(x + 2)² = x² + (x + 1)² + x(x + 1) → 2x² − x − 3 = 0."),
  num("Two ships leave port. One sails at 16 km/h on a course 20° east of north; the other at 22 km/h on a course 50° east of south. How far apart are they after 1.5 h (1 decimal)?", rd(lawC(24, 33, 110), 1), "Sides 24 and 33; angle between the courses 180° − 20° − 50° = 110°.", null, 0.05),
  num(S`$a=8$, $b=5$, $\angle C=60^\circ$. Find $c$.`, 7, "64 + 25 − 40 = 49."),
  num("Two runners stand on a circular track of radius 50 m. The angle between their radii is 72°. How far apart are they in a straight line (2 decimals)?", rd(lawC(50, 50, 72)), "SAS with two radii.",
    planeDoc({ bare: true, view: { xmin: -60, xmax: 60, ymin: -60, ymax: 60 }, step: { x: 20, y: 20 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, 2500 - x * x)), a: -50, b: 50, color: "gray" }, { f: (x) => -Math.sqrt(Math.max(0, 2500 - x * x)), a: -50, b: 50, color: "gray" }], segs: [{ pts: [[50, 0], [0, 0], [50 * cos(72), 50 * sin(72)]], color: "blue" }, { pts: [[50, 0], [50 * cos(72), 50 * sin(72)]], color: "red" }], points: [{ x: 0, y: 0, label: "72°" }, { x: 50, y: 0, label: "runner 1" }, { x: 50 * cos(72), y: 50 * sin(72), label: "runner 2" }] }), 0.01),
  num("A triangle has sides 5 and 7, and the angle opposite the side 7 is 60°. Find the third side.", 8, "49 = 25 + c² − 5c → c² − 5c − 24 = 0."),
  num(S`A triangle has $a=12$, $b=9$, $c=15$. Find $\angle A$ to 1 decimal.`, rd(angC(12, 9, 15), 1), "cos A = (81 + 225 − 144)/270 = 0.6.", null, 0.05),
  tf(S`If $a^2=b^2+c^2+bc$, then $\angle A=120^\circ$.`, true, "Compare with a² = b² + c² − 2bc cos A: cos A = −½."),
  mc("A triangle has two sides of length 5 and a third side x. For which x is the angle between the two equal sides obtuse?", S`$5\sqrt2<x<10$`, [S`$0<x<5\sqrt2$`, S`$x>5$`, S`$x=5\sqrt2$`], "Obtuse when x² > 50; a triangle needs x < 10."),
  num("A baseball diamond is a square with sides 27.4 m. The pitcher's mound is 18.4 m from home plate along the diagonal. How far is the mound from first base (2 decimals)?", rd(lawC(27.4, 18.4, 45)), "The diagonal makes 45° with the first-base line.", null, 0.01),
  num("A triangle has sides 6, 10 and 14. Find its largest angle.", 120, "cos θ = (36 + 100 − 196)/120 = −½."),
  num("Quadrilateral ABCD has AB = 5, BC = 6 and ∠B = 120°. Find diagonal AC (2 decimals).", rd(AC14), "25 + 36 + 30 = 91.", null, 0.01),
  num("In the same quadrilateral, CD = 4 and DA = 7. Find ∠D (1 decimal).", rd(D15, 1), "cos D = (16 + 49 − 91)/56.", null, 0.05),
  num("A tunnel will join A and B. From a point C, CA = 420 m, CB = 380 m and ∠ACB = 68°. How long is the tunnel (nearest metre)?", Math.round(lawC(420, 380, 68)), "SAS at C.", triD([[0, 0], [420, 0], [380 * cos(68), 380 * sin(68)]], ["C 68°", "A", "B"], { marks: [[210, 0, "420 m"], [380 * cos(68) / 2 - 30, 380 * sin(68) / 2, "380 m"]] }), 0.5),
  num("A ship sails 18 km east, then turns 60° to the left and sails 25 km. How far is it from its start (2 decimals)?", rd(ship), "Interior angle 120°: 324 + 625 + 450.", triD([[0, 0], [18, 0], [18 + 25 * cos(60), 25 * sin(60)]], ["start", "turn", "ship"], { marks: [[9, 0, "18 km"]] }), 0.01),
  num("Find the middle-sized angle of the triangle shown (1 decimal).", rd(tri18.B, 1), "It faces the middle side, 11.", triD([[0, 0], [15, 0], [8 * cos(tri18.A), 8 * sin(tri18.A)]], ["A", "B", "C"], { marks: [[7.5, 0, "15"], [4 * cos(tri18.A) - 0.6, 4 * sin(tri18.A), "8"], [(15 + 8 * cos(tri18.A)) / 2 + 0.5, 4 * sin(tri18.A), "11"]] }), 0.05),
  num("The sides of a triangle are 13, 14 and 15. Find the angle between the sides 13 and 14 (1 decimal).", rd(C13, 1), "It faces the side 15.", null, 0.05),
  num("A triangle has sides 2, 3 and 4. Find the cosine of its largest angle.", -0.25, "(4 + 9 − 16)/12."),
];
