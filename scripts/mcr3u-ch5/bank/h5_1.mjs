// 5.1 Trigonometric Ratios and Special Angles — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { triD, rightD, sin, cos, tan, asin, atan, rd } from "./fig.mjs";

const S = String.raw;
const cot = (d) => 1 / tan(d);
const h1 = 60 / (cot(20) - cot(35));
const h4 = 18 + (18 / tan(41)) * tan(32);
const h13 = 10 * tan(50);
const h17a = 50 * tan(25), h17b = 50 * tan(15);
const h18 = 100 / (Math.sqrt(3) + 1);

export const TOPIC = "5.1 Trigonometric Ratios and Special Angles";
export const Q = [
  num("Two points 60 m apart lie on a line toward a tower. The angles of elevation of its top are 20° (far point) and 35° (near point). Find the height (1 decimal).", rd(h1, 1), "h·cot 20° − h·cot 35° = 60.", rightD(60 + h1 * cot(35), h1, ["20°", "", "top"], [[60, 0, "35°"]]), 0.05),
  num(S`Evaluate exactly: $\sin60^\circ\cos30^\circ-\cos60^\circ\sin30^\circ$.`, 0.5, "¾ − ¼."),
  mc(S`Evaluate $\tan30^\circ+\tan60^\circ$.`, S`$\frac4{\sqrt3}$`, [S`$\sqrt3$`, S`$\frac2{\sqrt3}$`, S`$2$`], "1/√3 + √3 = (1 + 3)/√3."),
  num("From a window 18 m above the street, the angle of elevation of the top of the building opposite is 32° and the angle of depression of its base is 41°. Find that building's height (1 decimal).", rd(h4, 1), "Distance 18/tan 41°; add distance × tan 32° to 18.", null, 0.05),
  num("An equilateral triangle has perimeter 18. Find its area to 2 decimals.", rd(9 * Math.sqrt(3)), "Side 6, height 3√3, area 9√3.", null, 0.01),
  num("Find the area of a regular hexagon with side 6 (2 decimals).", rd(54 * Math.sqrt(3)), "Six equilateral triangles of area 9√3.", null, 0.01),
  num(S`θ is acute and $\cos\theta=0.4$. Find $\tan\theta$ (4 decimals).`, rd(Math.sqrt(0.84) / 0.4, 4), "sin θ = √(1 − 0.16).", null, 0.0001),
  num("From the top of a 50 m lighthouse, boats on opposite sides are seen at angles of depression 30° and 45°. How far apart are they (2 decimals)?", rd(50 * Math.sqrt(3) + 50), "50√3 + 50.", null, 0.01),
  tf(S`For every acute angle θ, $\sin\theta<\tan\theta$.`, true, "tan θ = sin θ / cos θ and 0 < cos θ < 1."),
  ms("For θ = 60°, which are true? Select all.", [S`$\sin\theta>\cos\theta$`, S`$\tan\theta>1$`, S`$\sin\theta=2\sin30^\circ$`, S`$\cos\theta=\frac12$`], [0, 1, 3], "2 sin 30° = 1, not √3/2."),
  num("A 4 m ladder reaches 3.6 m up a wall. Find its angle with the ground (1 decimal).", rd(asin(0.9), 1), "sin θ = 0.9.", null, 0.05),
  num("That 4 m ladder slips until its angle with the ground is 50°. How far down the wall did the top slide (2 decimals)?", rd(3.6 - 4 * sin(50)), "3.6 − 4 sin 50°.", null, 0.01),
  num("A tree casts a 10 m shadow when the sun is at 50°. Later its shadow is 16 m. Find the new angle of elevation of the sun (1 decimal).", rd(atan(h13 / 16), 1), "Height 10 tan 50°; then tan⁻¹(height/16).", null, 0.05),
  num(S`θ is acute and $\sin\theta=\cos\theta$. Find θ.`, 45, "tan θ = 1."),
  num("A right triangle has hypotenuse 25 and a 30° angle. Find its area to 2 decimals.", rd(0.5 * 12.5 * 12.5 * Math.sqrt(3)), "Legs 12.5 and 12.5√3.", null, 0.01),
  num("A symmetric roof spans 12 m and each side rises at 28°. Find the length of one rafter (2 decimals).", rd(6 / cos(28)), "Half-span 6 = rafter × cos 28°.", triD([[0, 0], [12, 0], [6, 6 * tan(28)]], ["28°", "28°", ""], { marks: [[6, 0, "12 m"]] }), 0.01),
  num("Two buildings are 50 m apart. From the roof of the shorter one, the angle of depression of the base of the taller one is 25° and the angle of elevation of its top is 15°. How tall is the taller building (2 decimals)?", rd(h17a + h17b), "50 tan 25° + 50 tan 15°.",
    triD([[0, 0], [0, h17a], [50, h17a + h17b], [50, 0]], ["", "roof", "top", "base"], { open: true, extra: [{ pts: [[0, 0], [50, 0]], color: "green" }, { pts: [[0, h17a], [50, h17a]], color: "gray" }, { pts: [[0, h17a], [50, 0]], color: "red" }], marks: [[25, 0, "50 m"]] }), 0.01),
  num("Two observers 100 m apart are on opposite sides of a tower and in line with it. Their angles of elevation are 30° and 45°. Find the height (2 decimals).", rd(h18), "h√3 + h = 100.",
    triD([[0, 0], [h18 * Math.sqrt(3), h18], [h18 * Math.sqrt(3) + h18, 0]], ["30°", "top", "45°"], { extra: [{ pts: [[h18 * Math.sqrt(3), 0], [h18 * Math.sqrt(3), h18]], color: "gray" }], marks: [[50, 0, "100 m"]] }), 0.01),
  num("A right triangle has legs 6 and 8. Use trigonometry to find the altitude from the right angle to the hypotenuse.", 4.8, "Altitude = 6 sin B with tan B = 8/6, i.e. 6 × 0.8.",
    triD([[0, 0], [8, 0], [0, 6]], ["", "", ""], { extra: [{ pts: [[0, 0], [8 * 36 / 100, 6 * 64 / 100]], color: "red" }], marks: [[4, 0, "8"], [0, 3, "6"]] })),
  num(S`Evaluate $\dfrac{1-\tan^2 30^\circ}{1+\tan^2 30^\circ}$.`, 0.5, "(2/3)/(4/3)."),
];
