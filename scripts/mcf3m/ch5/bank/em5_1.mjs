// 5.1 The Primary Trigonometric Ratios — 20 easy + 20 medium (values computed)
import { mc, ms, num, tf, fill } from "../../bank/kit.mjs";
import { n2, sin, cos, tan, asin, acos, atan, rightD } from "./trig.mjs";
const S = String.raw;

export const E = [
  mc(S`In a right triangle, which ratio is $\frac{\text{opposite}}{\text{hypotenuse}}$?`, "sine", ["cosine", "tangent", "none"], "SOH."),
  mc(S`Which ratio is $\frac{\text{adjacent}}{\text{hypotenuse}}$?`, "cosine", ["sine", "tangent", "none"], "CAH."),
  mc(S`Which ratio is $\frac{\text{opposite}}{\text{adjacent}}$?`, "tangent", ["sine", "cosine", "none"], "TOA."),
  num(S`In a $3$-$4$-$5$ right triangle, enter $\sin A$ where $A$ is opposite the side $3$.`, 0.6, "3/5.", null, 1e-9),
  num(S`In a $5$-$12$-$13$ triangle, enter $\tan A$ where $A$ is opposite $12$ (decimal, two places).`, 2.4, "12/5.", null, 0.011),
  n2(S`Evaluate $\sin40^\circ$.`, sin(40), "Calculator in degrees."),
  n2(S`Evaluate $\cos25^\circ$.`, cos(25), "Degree mode."),
  n2(S`Evaluate $\tan55^\circ$.`, tan(55), "Degree mode."),
  n2(S`Find $\theta$ if $\sin\theta=0.5$.`, 30, "sin⁻¹ 0.5."),
  n2(S`Find $\theta$ if $\tan\theta=1$.`, 45, "tan⁻¹ 1."),
  n2(S`Hypotenuse $10$, angle $30^\circ$: find the opposite side.`, 10 * sin(30), "10 sin 30°."),
  n2(S`Hypotenuse $12$, angle $40^\circ$: find the adjacent side.`, 12 * cos(40), "12 cos 40°."),
  n2(S`Adjacent $8$, angle $35^\circ$: find the opposite side.`, 8 * tan(35), "8 tan 35°."),
  n2(S`Opposite $6$, adjacent $9$: find the angle.`, atan(6 / 9), "tan⁻¹(6/9)."),
  tf("The hypotenuse is always the longest side of a right triangle.", true, "It faces the 90° angle."),
  tf(S`$\sin\theta$ can be greater than $1$ in a right triangle.`, false, "opp < hyp."),
  fill("An angle measured up from the horizontal is an angle of ____.", ["elevation"], "Elevation."),
  fill("An angle measured down from the horizontal is an angle of ____.", ["depression"], "Depression."),
  mc("In the triangle shown, which side is opposite angle θ?", "the vertical side", ["the horizontal side", "the slanted side", "none"], "It faces θ.", rightD(8, 6, ["θ", "", ""], [[4, -0.7, "8"], [8.7, 3, "6"]])),
  n2("In the triangle shown, find θ.", atan(6 / 8), "tan θ = 6/8.", rightD(8, 6, ["θ", "", ""], [[4, -0.7, "8"], [8.7, 3, "6"]])),
];

export const M = [
  n2(S`Hypotenuse $25$, angle $62^\circ$: find the opposite side.`, 25 * sin(62), "sin."),
  n2(S`Opposite side $11$ and angle $28^\circ$: find the hypotenuse.`, 11 / sin(28), "11 / sin 28°."),
  n2(S`Adjacent $14$ and angle $50^\circ$: find the hypotenuse.`, 14 / cos(50), "14 / cos 50°."),
  n2(S`Opposite $9$ and angle $33^\circ$: find the adjacent side.`, 9 / tan(33), "9 / tan 33°."),
  n2(S`Adjacent $7$, hypotenuse $16$: find the angle.`, acos(7 / 16), "cos⁻¹(7/16)."),
  n2(S`Opposite $12$, hypotenuse $19$: find the angle.`, asin(12 / 19), "sin⁻¹(12/19)."),
  n2(S`From $70$ m away, the angle of elevation to a cliff top is $26^\circ$. Find the cliff height.`, 70 * tan(26), "70 tan 26°."),
  n2(S`From a $35$ m tower, a dog is at $22^\circ$ depression. How far is the dog from the base?`, 35 / tan(22), "35 / tan 22°."),
  n2(S`A $9$ m ladder makes $68^\circ$ with the ground. How high does it reach?`, 9 * sin(68), "9 sin 68°."),
  n2(S`A road rises $8$ m over a horizontal $150$ m. Find its angle of inclination.`, atan(8 / 150), "tan⁻¹."),
  n2(S`A kite string is $60$ m long and the kite is $45$ m high. Find the string's angle with the ground.`, asin(45 / 60), "sin⁻¹(45/60)."),
  n2(S`A $1.6$ m student's shadow is $2.4$ m long. Find the angle of elevation of the sun.`, atan(1.6 / 2.4), "tan⁻¹(1.6/2.4)."),
  ms(S`Select every TRUE statement for a right triangle with acute angle $A$.`, [S`$\sin A=\cos(90^\circ-A)$`, S`$\tan A=\frac{\sin A}{\cos A}$`, S`$\sin A+\cos A=1$`, S`$\sin A<1$`], [0, 1, 3], "sin A + cos A > 1 in general."),
  tf(S`If $\tan A=1$, the right triangle is isosceles.`, true, "opp = adj."),
  mc("The diagram shows a ramp. Which equation finds its length L?", S`$\sin10^\circ=\frac{0.6}{L}$`, [S`$\cos10^\circ=\frac{0.6}{L}$`, S`$\tan10^\circ=\frac{L}{0.6}$`, S`$\sin10^\circ=\frac{L}{0.6}$`], "Rise is opposite; L is the hypotenuse.", rightD(3.4, 0.6, ["10°", "", ""], [[1.7, -0.3, ""], [3.6, 0.3, "0.6"], [1.4, 0.5, "L"]])),
  n2("Using the ramp diagram (rise 0.6 m at 10°), find L.", 0.6 / sin(10), "0.6 / sin 10°.", rightD(3.4, 0.6, ["10°", "", ""], [[3.6, 0.3, "0.6"], [1.4, 0.5, "L"]])),
  n2(S`Solve: hypotenuse $20$, angle $47^\circ$. Enter the side adjacent to $47^\circ$.`, 20 * cos(47), "20 cos 47°."),
  n2(S`A plane at $1500$ m altitude sees an airport at $9^\circ$ depression. Ground distance?`, 1500 / tan(9), "1500 / tan 9°."),
  fill(S`The other acute angle of a right triangle with a $37^\circ$ angle is ____°.`, ["53"], "90 − 37."),
  n2(S`A slide is $4$ m long at $35^\circ$ to the ground. How high is its top?`, 4 * sin(35), "4 sin 35°."),
];
