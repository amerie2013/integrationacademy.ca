// MCR3U chapter 5 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { planeDoc, triD, sasD, rightD, armD, unitD, boxD, towerD, wireD, sin, cos, tan, asin, atan, lawC, angC, rd } from "./bank/fig.mjs";

const T = {
  1: "5.1 Trigonometric Ratios and Special Angles", 2: "5.2 Angles from 0° to 360°", 3: "5.3 Reciprocal Ratios and Trigonometric Identities",
  4: "5.4 The Sine Law and the Ambiguous Case", 5: "5.5 The Cosine Law", 6: "5.6 Trigonometry in Three Dimensions",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
// 4: SSA A = 38°, a = 9, b = 13
const B4 = asin((13 * sin(38)) / 9), C4a = 180 - 38 - B4, C4b = 180 - 38 - (180 - B4);
const Cx = 13 * cos(38), Cy = 13 * sin(38), dx = Math.sqrt(81 - Cy * Cy);
// 6–7 tower
const AC6 = (140 * sin(68)) / sin(57), h6 = AC6 * tan(21);
const cot = (d) => 1 / tan(d), h12 = 80 / Math.sqrt(cot(38) ** 2 + cot(27) ** 2);

export const WRITTEN = [
  W(1, "medium", 4, S`The figure shows a 30°–60°–90° triangle built from half of an equilateral triangle with side 2. (a) Find the missing side exactly. (b) Use the triangle to write exact values of $\sin60^\circ$, $\cos60^\circ$ and $\tan30^\circ$. (c) Evaluate $\sin^2 60^\circ-\cos^2 60^\circ$ exactly.`,
    S`(a) $\sqrt{4-1}=\sqrt3$. (b) $\frac{\sqrt3}2$, $\frac12$, $\frac1{\sqrt3}$. (c) $\frac34-\frac14=\frac12$. [1, 2, 1.]`,
    triD([[0, 0], [1, 0], [1, Math.sqrt(3)]], ["60°", "", "30°"], { marks: [[0.5, 0, "1"], [0.35, 0.95, "2"], [1, 0.85, "?"]] })),
  W(1, "hard", 5, S`From the top of a 36 m building, the angle of elevation of the top of a taller tower is 24° and the angle of depression of its base is 38°. (a) Draw and label a diagram. (b) Find the horizontal distance between the buildings. (c) Find the tower's height. (d) Explain why the angle of depression equals the angle of elevation from the tower's base to the roof.`,
    S`(b) $d=\frac{36}{\tan38^\circ}\approx${rd(36 / tan(38), 1)}$ m. (c) $36+d\tan24^\circ\approx${rd(36 + (36 / tan(38)) * tan(24), 1)}$ m. (d) Alternate angles between parallel horizontal lines. [1, 1, 2, 1.]`,
    triD([[0, 0], [0, 36], [36 / tan(38), 36 + (36 / tan(38)) * tan(24)], [36 / tan(38), 0]], ["", "roof", "top", "base"], { open: true, extra: [{ pts: [[0, 0], [36 / tan(38), 0]], color: "green" }, { pts: [[0, 36], [36 / tan(38), 36]], color: "gray" }, { pts: [[0, 36], [36 / tan(38), 0]], color: "red" }] })),
  W(2, "medium", 4, S`The point $(-8,15)$ is on the terminal arm of θ. (a) Find $r$ and the three primary ratios. (b) Find the related acute angle and θ to 1 decimal. (c) Find the other angle between 0° and 360° with the same sine.`,
    S`(a) $r=17$; $\sin\theta=\frac{15}{17}$, $\cos\theta=-\frac8{17}$, $\tan\theta=-\frac{15}8$. (b) $\beta\approx${rd(atan(15 / 8), 1)}^\circ$, $\theta\approx${rd(180 - atan(15 / 8), 1)}^\circ$. (c) $\beta\approx${rd(atan(15 / 8), 1)}^\circ$. [2, 1, 1.]`,
    armD(-8, 15, "(−8, 15)")),
  W(2, "hard", 5, S`(a) Solve $2\cos^2\theta+3\cos\theta+1=0$ for $0^\circ\le\theta\le360^\circ$. (b) Show the solutions on the unit circle in the figure. (c) Explain why $\sin\theta=1.2$ has no solutions.`,
    S`(a) $(2\cos\theta+1)(\cos\theta+1)=0$: $\cos\theta=-\frac12$ gives $120^\circ,240^\circ$; $\cos\theta=-1$ gives $180^\circ$. (b) Three points on the left half of the circle. (c) On the unit circle $-1\le y\le1$. [3, 1, 1.]`,
    unitD([[120, "120°"], [180, "180°"], [240, "240°"]], { vlines: [{ x: -0.5, color: "amber", dash: true }] })),
  W(3, "medium", 4, S`$\cos\theta=-\frac{20}{29}$ and θ is in Quadrant 3. (a) Sketch θ and label a point on its terminal arm. (b) Find the other five trigonometric ratios. (c) Find θ to 1 decimal.`,
    S`(a) $(-20,-21)$, $r=29$. (b) $\sin\theta=-\frac{21}{29}$, $\tan\theta=\frac{21}{20}$, $\csc\theta=-\frac{29}{21}$, $\sec\theta=-\frac{29}{20}$, $\cot\theta=\frac{20}{21}$. (c) $180^\circ+${rd(atan(21 / 20), 1)}^\circ=${rd(180 + atan(21 / 20), 1)}^\circ$. [1, 2, 1.]`,
    armD(-20, -21, "(−20, −21)")),
  W(3, "hard", 5, S`(a) Prove $\dfrac{\tan\theta}{\sec\theta-1}=\dfrac{\sec\theta+1}{\tan\theta}$. (b) Prove $\sin^2\theta\tan^2\theta=\tan^2\theta-\sin^2\theta$. (c) The right triangle in the figure has hypotenuse 1. Use it to explain why $1+\tan^2\theta=\sec^2\theta$.`,
    S`(a) Cross-multiplied, both sides give $\sec^2\theta-1=\tan^2\theta$; or multiply LS by $\frac{\sec\theta+1}{\sec\theta+1}$. (b) RS $=\frac{\sin^2\theta}{\cos^2\theta}-\sin^2\theta=\frac{\sin^2\theta(1-\cos^2\theta)}{\cos^2\theta}=$ LS. (c) Divide $\sin^2\theta+\cos^2\theta=1$ by $\cos^2\theta$. [2, 2, 1.]`,
    rightD(cos(32), sin(32), ["θ", "", ""], [[cos(32) / 2, 0, "cos θ"], [cos(32), sin(32) / 2, "sin θ"], [0.36, 0.33, "1"]])),
  W(4, "medium", 4, S`In $\triangle ABC$, $\angle A=38^\circ$, $a=9$ and $b=13$. (a) Calculate $h=b\sin A$ and use it to explain how many triangles are possible. (b) Find both possible measures of ∠B. (c) Find both possible measures of ∠C.`,
    S`(a) $h\approx${rd(13 * sin(38))}$; $h<a<b$: two triangles. (b) $B\approx${rd(B4, 1)}^\circ$ or $${rd(180 - B4, 1)}^\circ$. (c) $C\approx${rd(C4a, 1)}^\circ$ or $${rd(C4b, 1)}^\circ$. [1, 2, 1.]`,
    triD([[0, 0], [Cx + dx, 0], [Cx, Cy]], ["A 38°", "B₁", "C"], { extra: [{ pts: [[Cx, Cy], [Cx - dx, 0]], color: "red" }, { pts: [[Cx, Cy], [Cx, 0]], color: "gray" }], marks: [[Cx - dx, 0, "B₂"], [Cx, Cy / 2, "h"]] })),
  W(4, "hard", 5, S`Two lighthouses A and B are 25 km apart on a straight coast. A ship S is seen from A at 41° and from B at 63° to the coastline. (a) Find the distance from A to the ship. (b) Find the shortest distance from the ship to the coast. (c) The ship sails parallel to the coast. Explain why the angle at A changes but the answer to (b) does not.`,
    S`(a) $\angle S=76^\circ$; $AS=\frac{25\sin63^\circ}{\sin76^\circ}\approx${rd((25 * sin(63)) / sin(76))}$ km. (b) $AS\sin41^\circ\approx${rd(((25 * sin(63)) / sin(76)) * sin(41))}$ km. (c) Its perpendicular distance stays constant. [2, 2, 1.]`,
    triD([[0, 0], [25, 0], [((25 * sin(63)) / sin(76)) * cos(41), ((25 * sin(63)) / sin(76)) * sin(41)]], ["A", "B", "S"], { extra: [{ pts: [[((25 * sin(63)) / sin(76)) * cos(41), ((25 * sin(63)) / sin(76)) * sin(41)], [((25 * sin(63)) / sin(76)) * cos(41), 0]], color: "red" }], marks: [[12.5, 0, "25 km"]] })),
  W(5, "medium", 4, S`A triangular garden has sides 9 m, 12 m and 16 m. (a) Without a calculator, decide whether its largest angle is acute, right or obtuse. (b) Find the largest angle. (c) Find the area of the garden.`,
    S`(a) $81+144=225<256$: obtuse. (b) $\cos\theta=\frac{225-256}{216}$: $\theta\approx${rd(angC(16, 9, 12), 1)}^\circ$. (c) $\frac12(9)(12)\sin\theta\approx${rd(0.5 * 9 * 12 * sin(angC(16, 9, 12)), 1)}$ m². [1, 2, 1.]`,
    triD([[0, 0], [16, 0], [12 * cos(angC(9, 12, 16)), 12 * sin(angC(9, 12, 16))]], ["", "", ""], { marks: [[8, 0, "16"], [6 * cos(angC(9, 12, 16)) - 0.6, 6 * sin(angC(9, 12, 16)) + 0.4, "12"], [(16 + 12 * cos(angC(9, 12, 16))) / 2 + 0.6, 6 * sin(angC(9, 12, 16)), "9"]] })),
  W(5, "hard", 5, S`A ship leaves port and sails 40 km. It then turns 50° to the right and sails 65 km. (a) Explain why the angle inside the triangle at the turn is 130°. (b) Find the ship's distance from port. (c) Find the angle at the port between the first leg and the direct line back to the ship. (d) Explain why using the sine law in (c) is safe here.`,
    S`(a) Straight-line angles: $180^\circ-50^\circ$. (b) $d=\sqrt{40^2+65^2-2(40)(65)\cos130^\circ}\approx${rd(lawC(40, 65, 130), 1)}$ km. (c) $\sin\theta=\frac{65\sin130^\circ}{d}$: $\theta\approx${rd(asin((65 * sin(130)) / lawC(40, 65, 130)), 1)}^\circ$. (d) The triangle already has an obtuse angle, so the others are acute. [1, 2, 1, 1.]`,
    triD([[0, 0], [40, 0], [40 + 65 * cos(-50), 65 * sin(-50)]], ["port", "turn", "ship"], { marks: [[20, 0, "40 km"]] })),
  W(6, "medium", 4, S`A and B are 140 m apart on level ground. A point C at the base of a tower gives $\angle CAB=55^\circ$ and $\angle CBA=68^\circ$. From A, the angle of elevation of the top T is 21°. (a) Identify the horizontal and the vertical triangle. (b) Find AC. (c) Find the height CT.`,
    S`(a) ABC on the ground; ACT vertical, right-angled at C. (b) $\angle C=57^\circ$; $AC=\frac{140\sin68^\circ}{\sin57^\circ}\approx${rd(AC6, 1)}$ m. (c) $CT=AC\tan21^\circ\approx${rd(h6, 1)}$ m. [1, 2, 1.]`,
    towerD(140, 55, AC6, h6)),
  W(6, "hard", 5, S`Observer P is due south of a radio mast and sees its top at 38°. Observer Q is due west of the mast and sees its top at 27°. P and Q are 80 m apart. (a) Explain why the triangle PCQ on the ground (C the base of the mast) has a right angle. (b) Write PC and QC in terms of the height h. (c) Find h.`,
    S`(a) South and west are perpendicular. (b) $PC=h\cot38^\circ$, $QC=h\cot27^\circ$. (c) $h^2(\cot^2 38^\circ+\cot^2 27^\circ)=80^2$: $h\approx${rd(h12, 1)}$ m. [1, 2, 2.]`,
    wireD([{ pts: [[0, 0, 0], [0, 0, 60]], color: "blue" }, { pts: [[0, 0, 60], [h12 / tan(38) * 1.6, 0, 0]], color: "red" }, { pts: [[0, 0, 60], [0, -h12 / tan(27) * 1.6, 0]], color: "red" }, { pts: [[h12 / tan(38) * 1.6, 0, 0], [0, 0, 0], [0, -h12 / tan(27) * 1.6, 0]], color: "green" }], [[0, 0, 60, "top"], [0, 0, 0, "C"], [h12 / tan(38) * 1.6, 0, 0, "P"], [0, -h12 / tan(27) * 1.6, 0, "Q"]])),
  W(6, "hard", 4, S`A storage crate is 20 cm by 15 cm by 12 cm. (a) Find the diagonal of the 20 by 15 base. (b) Find the space diagonal. (c) Find the angle the space diagonal makes with the base, and explain which right triangle you used.`,
    S`(a) $25$ cm. (b) $\sqrt{625+144}=\sqrt{769}\approx${rd(Math.sqrt(769))}$ cm. (c) $\tan^{-1}\frac{12}{25}\approx${rd(atan(12 / 25), 1)}^\circ$, using the vertical triangle with legs 25 and 12. [1, 1, 2.]`,
    boxD(20, 15, 12, [{ pts: [[0, 0, 0], [20, 15, 0]], color: "amber" }, { pts: [[0, 0, 0], [20, 15, 12]], color: "red" }, { pts: [[20, 15, 0], [20, 15, 12]], color: "blue" }], [[0, 0, 0, "A"], [20, 15, 12, "G"]])),
];
