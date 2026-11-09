// 5.1 The Primary Trigonometric Ratios — 20 hard questions
import { mc, ms, num, tf } from "../../bank/kit.mjs";
import { n2, sin, cos, tan, asin, acos, atan, rightD, triD } from "./trig.mjs";
const S = String.raw;

export const TOPIC = "5.1 The Primary Trigonometric Ratios";
export const Q = [
  n2(S`An isosceles triangle has equal sides $14$ and base $10$. Find a base angle.`, acos(5 / 14), "Half the base: cos = 5/14.", triD([[0, 0], [10, 0], [5, Math.sqrt(171)]], ["", "", ""], { extra: [{ pts: [[5, Math.sqrt(171)], [5, 0]], color: "red" }] })),
  n2(S`An isosceles triangle has base angles $70^\circ$ and base $12$. Find its height.`, 6 * tan(70), "6 tan 70°."),
  n2(S`A ramp must rise $1.2$ m at most $4.5^\circ$. Find the minimum horizontal run.`, 1.2 / tan(4.5), "1.2 / tan 4.5°."),
  n2(S`A $12$ m flagpole casts a $7$ m shadow. Find the sun's angle of elevation.`, atan(12 / 7), "tan⁻¹(12/7).", rightD(7, 12, ["θ", "", ""], [[3.5, -0.8, "7"], [7.8, 6, "12"]])),
  n2(S`A rectangle is $18$ cm by $11$ cm. Find the angle the diagonal makes with the longer side.`, atan(11 / 18), "tan⁻¹(11/18)."),
  n2(S`A rectangle's diagonal is $25$ cm at $32^\circ$ to the base. Find its area.`, 25 * cos(32) * 25 * sin(32), "Base 25 cos 32°, height 25 sin 32°."),
  n2(S`A regular hexagon has side $6$. Find the distance from the centre to a side (apothem).`, 3 * tan(60), "Join the centre to a side's midpoint: a right triangle with angle 60° at the vertex and half-side 3, so the apothem is 3 tan 60°."),
  n2(S`From a $60$ m cliff, a boat's angle of depression changes from $15^\circ$ to $25^\circ$ as it sails toward the cliff. How far did it sail?`, 60 / tan(15) - 60 / tan(25), "Difference of distances.", triD([[0, 60], [0, 0], [60 / tan(15), 0]], [], { open: true, extra: [{ pts: [[0, 60], [60 / tan(25), 0]], color: "violet" }, { pts: [[0, 60], [60 / tan(15), 0]], color: "violet" }] })),
  n2(S`A plane climbs at $12^\circ$. How far must it fly (along its path) to gain $1000$ m?`, 1000 / sin(12), "1000 / sin 12°."),
  n2(S`A $3$ m ladder must reach at least $2.8$ m up a wall. Find the smallest angle with the ground.`, asin(2.8 / 3), "sin⁻¹(2.8/3)."),
  ms(S`Select every expression equal to $\cos35^\circ$.`, [S`$\sin55^\circ$`, S`$\frac{\text{adj}}{\text{hyp}}$ for $35^\circ$`, S`$\frac1{\sin35^\circ}$`, S`$\frac{\sin35^\circ}{\tan35^\circ}$`], [0, 1, 3], "Co-function and tan = sin/cos."),
  tf(S`For any acute angle, $\sin^2\theta+\cos^2\theta=1$.`, true, "(opp² + adj²)/hyp² = 1."),
  mc("The diagram shows a tower and two angles of elevation from the same point to the top and bottom of a flag on top. Which expression gives the flag's height if the distance is 40 m?", S`$40\tan38^\circ-40\tan30^\circ$`, [S`$40\tan8^\circ$`, S`$40(\tan38^\circ+\tan30^\circ)$`, S`$\frac{40}{\tan38^\circ}$`], "Difference of two heights.", triD([[0, 0], [40, 0], [40, 40 * tan(38)]], ["", "", ""], { extra: [{ pts: [[0, 0], [40, 40 * tan(30)]], color: "violet" }] })),
  n2(S`For that tower (distance $40$ m, angles $38^\circ$ and $30^\circ$), find the flag's height.`, 40 * tan(38) - 40 * tan(30), "Difference."),
  n2(S`A cone has slant height $13$ cm and radius $5$ cm. Find the angle between the slant and the base.`, acos(5 / 13), "cos⁻¹(5/13)."),
  n2(S`A treehouse is reached by a $5$ m rope ladder at $58^\circ$ to the ground. A child climbs $3$ m along it. How high is the child?`, 3 * sin(58), "3 sin 58°."),
  num(S`If $\sin\theta=\frac{8}{17}$, enter $\tan\theta$ (decimal).`, 8 / 15, "Adjacent = 15.", null, 0.001),
  num(S`If $\cos\theta=0.6$ for an acute angle, enter $\tan\theta$ (decimal).`, 4 / 3, "Sides 3-4-5.", null, 0.001),
  n2(S`A $2.5$ m ramp rises $0.35$ m. Find its angle.`, asin(0.35 / 2.5), "sin⁻¹(0.14)."),
  n2(S`Two observers $100$ m apart on the same side of a balloon see it at $50^\circ$ (near) and $30^\circ$ (far). Find the balloon's height.`, 100 / (1 / tan(30) - 1 / tan(50)), "Two equations; subtract."),
];
