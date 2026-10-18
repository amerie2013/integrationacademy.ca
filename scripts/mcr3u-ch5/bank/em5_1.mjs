// 5.1 Trigonometric Ratios and Special Angles — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { triD, rightD, sin, cos, tan, acos, atan, rd } from "./fig.mjs";

const S = String.raw;

export const E = [
  num("A right triangle has sides 3, 4 and 5. Angle A is opposite the side 3. Find sin A.", 0.6, "opp/hyp = 3/5."),
  num("In the same 3–4–5 triangle, find cos A.", 0.8, "adj/hyp = 4/5."),
  mc(S`What is $\tan45^\circ$?`, S`$1$`, [S`$\sqrt2$`, S`$\frac1{\sqrt2}$`, S`$0$`], "Legs are equal in the 45°–45°–90° triangle."),
  mc(S`What is $\sin30^\circ$?`, S`$\frac12$`, [S`$\frac{\sqrt3}2$`, S`$\frac1{\sqrt2}$`, S`$\sqrt3$`], "Opposite 1, hypotenuse 2."),
  mc(S`What is $\cos45^\circ$?`, S`$\frac1{\sqrt2}$`, [S`$\frac12$`, S`$1$`, S`$\frac{\sqrt3}2$`], "Adjacent 1, hypotenuse √2."),
  mc(S`What is $\tan30^\circ$?`, S`$\frac1{\sqrt3}$`, [S`$\sqrt3$`, S`$\frac12$`, S`$\frac{\sqrt3}2$`], "Opposite 1, adjacent √3."),
  num(S`Evaluate $\sin90^\circ$.`, 1, "On the unit circle, 90° is the point (0, 1)."),
  num(S`Evaluate $\cos90^\circ$.`, 0, "The x-coordinate of (0, 1)."),
  tf(S`$\sin30^\circ=\cos60^\circ$.`, true, "Both equal ½: the side opposite 30° is adjacent to 60°."),
  tf(S`$\tan60^\circ=2\tan30^\circ$.`, false, "√3 is not 2/√3."),
  num("A right triangle has hypotenuse 10 and a 30° angle. How long is the side opposite 30°?", 5, "10 sin 30° = 5."),
  num(S`θ is acute and $\tan\theta=1$. Find θ in degrees.`, 45, "tan 45° = 1."),
  num(S`θ is acute and $\sin\theta=0.5$. Find θ in degrees.`, 30, "sin 30° = ½."),
  mc("Which ratio is adjacent ÷ hypotenuse?", "cosine", ["sine", "tangent", "cotangent"], "CAH."),
  num("A 45°–45°–90° triangle has legs 6. Find the hypotenuse to 2 decimals.", rd(6 * Math.SQRT2), "6√2.", null, 0.01),
  num("A post's shadow is exactly as long as the post. What is the sun's angle of elevation (degrees)?", 45, "tan θ = 1."),
  num(S`θ is acute and $\cos\theta=0.75$. Find θ to 1 decimal.`, rd(acos(0.75), 1), "cos⁻¹ 0.75.", null, 0.05),
  num("The side adjacent to a 35° angle in a right triangle is 12. Find the opposite side to 2 decimals.", rd(12 * tan(35)), "12 tan 35°.", null, 0.01),
  num("Find tan A in the figure.", 0.75, "opp/adj = 6/8.", rightD(8, 6, ["A", "", ""], [[4, 0, "8"], [8, 3, "6"]])),
  num("Find x to 2 decimals. The hypotenuse is 9 and the angle at A is 40°; x is opposite A.", rd(9 * sin(40)), "9 sin 40°.", triD([[0, 0], [9 * cos(40), 0], [9 * cos(40), 9 * sin(40)]], ["A 40°", "", ""], { marks: [[3, 3.6, "9"], [9 * cos(40), 9 * sin(40) / 2, "x"]] }), 0.01),
];

const h19 = 40 * tan(50);
export const M = [
  num(S`Evaluate exactly: $\sin^2 45^\circ+\cos^2 45^\circ$.`, 1, "½ + ½."),
  mc(S`Evaluate $2\sin60^\circ\cos60^\circ$.`, S`$\frac{\sqrt3}2$`, [S`$\sqrt3$`, S`$\frac12$`, S`$1$`], "2 · (√3/2) · ½."),
  num(S`Evaluate $\tan^2 60^\circ-1$.`, 2, "3 − 1."),
  mc(S`Evaluate $\dfrac{\sin45^\circ}{\cos30^\circ}$.`, S`$\frac{\sqrt2}{\sqrt3}$`, [S`$\frac{\sqrt3}{\sqrt2}$`, S`$1$`, S`$\frac12$`], "(1/√2) ÷ (√3/2) = 2/(√2·√3) = √2/√3."),
  num("A 7 m ladder makes a 65° angle with the ground. How high up the wall does it reach (2 decimals)?", rd(7 * sin(65)), "7 sin 65°.", null, 0.01),
  num("From the top of a 120 m tower, a car is 250 m away horizontally. Find the angle of depression (1 decimal).", rd(atan(120 / 250), 1), "tan θ = 120/250.", null, 0.05),
  num("A guy wire runs from the top of a 15 m pole to the ground, making 55° with the ground. How long is the wire (2 decimals)?", rd(15 / sin(55)), "15 / sin 55°.", null, 0.01),
  num("A right triangle has legs 9 and 14. Find its smaller acute angle (1 decimal).", rd(atan(9 / 14), 1), "Opposite the shorter leg: tan⁻¹(9/14).", null, 0.05),
  mc("What is the exact height of an equilateral triangle with side 10?", S`$5\sqrt3$`, [S`$10\sqrt3$`, S`$5\sqrt2$`, S`$\frac{10}{\sqrt3}$`], "10 sin 60°."),
  num("A 45°–45°–90° triangle has hypotenuse 8. Find its area.", 16, "Legs 4√2; ½(4√2)²."),
  tf(S`For every acute angle θ, $\sin\theta=\cos(90^\circ-\theta)$.`, true, "The two acute angles of a right triangle share sides."),
  ms("Which of these equal ½? Select all.", [S`$\sin30^\circ$`, S`$\cos60^\circ$`, S`$\tan30^\circ$`, S`$\cos30^\circ\tan30^\circ$`, S`$\sin45^\circ$`], [0, 1, 3], "cos 30° · tan 30° = (√3/2)(1/√3) = ½."),
  num("A ramp rises 0.9 m over a horizontal distance of 10 m. Find its angle with the ground (1 decimal).", rd(atan(0.09), 1), "tan⁻¹ 0.09.", null, 0.05),
  num("A plane climbs at 12° to the ground. After 2 km along its path, what is its altitude (nearest metre)?", Math.round(2000 * sin(12)), "2000 sin 12°.", null, 0.5),
  num("A kite string is 120 m long at 38° to the ground. Find the kite's height (1 decimal).", rd(120 * sin(38), 1), "120 sin 38°.", null, 0.05),
  num("An isosceles triangle has equal sides 12 and a 40° apex angle. Find the base (2 decimals).", rd(2 * 12 * sin(20)), "Half the base is 12 sin 20°.", null, 0.01),
  num("A 30°–60°–90° triangle has shortest side 4. Find its perimeter to 2 decimals.", rd(12 + 4 * Math.sqrt(3)), "4 + 4√3 + 8.", null, 0.01),
  mc("A 30°–60°–90° triangle has hypotenuse 2k. How long is the side opposite 60°?", S`$k\sqrt3$`, [S`$k$`, S`$2k\sqrt3$`, S`$\frac{k}{\sqrt3}$`], "Scale 1 : √3 : 2 by k."),
  num("From a point 40 m from a building, the angle of elevation of the roof is 50°. Find the building's height (2 decimals).", rd(h19), "40 tan 50°.", rightD(40, h19, ["50°", "", "roof"], [[20, 0, "40 m"]]), 0.01),
  num("Find θ to 1 decimal.", rd(atan(7 / 11), 1), "tan θ = 7/11.", rightD(11, 7, ["θ", "", ""], [[5.5, 0, "11"], [11, 3.5, "7"]]), 0.05),
];
