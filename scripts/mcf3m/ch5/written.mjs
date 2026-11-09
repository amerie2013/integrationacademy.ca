// MCF3M chapter 5 written-response questions (Part C of printed tests), each with a figure and a marking guide.
import { triD, sasD, rightD, sin, cos, tan, asin, acos, atan } from "../figs.mjs";
import { lesson } from "../plan.mjs";
const S = String.raw;
const W = (code, difficulty, points, prompt, feedback, fig) => ({ topic: lesson(code).full, difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const f = (v) => v.toFixed(2);
const f1 = (v) => v.toFixed(1);
const L = (b, c, A) => Math.sqrt(b * b + c * c - 2 * b * c * cos(A));
const Ang = (a, b, c) => acos((b * b + c * c - a * a) / (2 * b * c));
const side = (k, ak, ax) => (k * sin(ax)) / sin(ak);

// 5.1
const q1h = 18 * tan(41), q1hyp = 18 / cos(41);
const q2ang = atan(1.1 / 3.6), q2len = Math.hypot(1.1, 3.6);
// 5.2
const q3x1 = 65 / tan(17), q3x2 = 65 / tan(29);
const q4h = 60 / (1 / tan(24) - 1 / tan(37));
// 5.3
const q5C = 180 - 49 - 66, q5a = side(22, q5C, 49), q5b = side(22, q5C, 66);
const q6AT = side(150, 180 - 58 - 69, 69), q6w = q6AT * sin(58);
// 5.4
const q7a = L(14, 19, 63);
const q8C = Ang(12, 7, 9), q8A = Ang(7, 9, 12), q8B = 180 - q8C - q8A;
// 5.5
const q9c = L(240, 310, 71), q9B = asin((240 * sin(71)) / q9c);
const q10C = Ang(15, 11, 13), q10area = 0.5 * 11 * 13 * sin(q10C);

export const WRITTEN = [
  W("5.1", "medium", 4, S`From a point $18$ m from the base of a tree, the angle of elevation to the top is $41^\circ$. (a) Find the tree's height. (b) Find the line-of-sight distance to the top. (c) Check with the Pythagorean theorem.`,
    S`(a) $h=18\tan41^\circ\approx${f(q1h)}$ m. (b) $d=\frac{18}{\cos41^\circ}\approx${f(q1hyp)}$ m. (c) $18^2+${f(q1h)}^2\approx${f(q1hyp)}^2$. [2, 1, 1.]`,
    rightD(18, q1h, ["41°", "", "top"], [[9, -1.2, "18 m"]])),
  W("5.1", "hard", 5, S`A ramp must rise $1.1$ m over a run of $3.6$ m. (a) Find its angle with the ground. (b) Find the ramp length. (c) Code allows at most $4.8^\circ$; does this ramp comply? If not, find the run needed.`,
    S`(a) $\tan^{-1}\frac{1.1}{3.6}\approx${f(q2ang)}^\circ$. (b) $\sqrt{1.1^2+3.6^2}\approx${f(q2len)}$ m. (c) no; run $=\frac{1.1}{\tan4.8^\circ}\approx${f(1.1 / tan(4.8))}$ m. [2, 1, 2.]`,
    rightD(3.6, 1.1, ["θ", "", ""], [[1.8, -0.35, "3.6 m"], [3.85, 0.55, "1.1 m"]])),
  W("5.2", "medium", 4, S`From the top of a $65$ m lighthouse, two boats due west are at depressions of $17^\circ$ and $29^\circ$. (a) Find each boat's distance from the base. (b) Find the distance between the boats.`,
    S`(a) $${f(q3x1)}$ m and $${f(q3x2)}$ m ($65/\tan$). (b) $${f(q3x1 - q3x2)}$ m. [2, 2.]`,
    triD([[0, 65], [0, 0], [q3x1, 0]], ["top", "base", ""], { open: true, extra: [{ pts: [[0, 65], [q3x2, 0]], color: "violet" }, { pts: [[0, 65], [q3x1, 0]], color: "violet" }] })),
  W("5.2", "hard", 5, S`Walking $60$ m directly toward a building changes the elevation of its top from $24^\circ$ to $37^\circ$. (a) Write two equations for the height $h$ and the closer distance $x$. (b) Solve for $h$. (c) Find $x$.`,
    S`(a) $h=x\tan37^\circ$, $h=(x+60)\tan24^\circ$. (b) $h=\frac{60}{1/\tan24^\circ-1/\tan37^\circ}\approx${f(q4h)}$ m. (c) $x\approx${f(q4h / tan(37))}$ m. [2, 2, 1.]`,
    triD([[-(q4h / tan(24)), 0], [0, 0], [0, q4h]], ["", "base", "top"], { open: true, extra: [{ pts: [[-(q4h / tan(37)), 0], [0, q4h]], color: "violet" }] })),
  W("5.3", "medium", 4, S`In $\triangle ABC$, $A=49^\circ$, $B=66^\circ$ and $c=22$. (a) Find $C$. (b) Find $a$ and $b$. (c) Check the side order.`,
    S`(a) $C=${q5C}^\circ$. (b) $a=\frac{22\sin49^\circ}{\sin${q5C}^\circ}\approx${f(q5a)}$, $b\approx${f(q5b)}$. (c) $b>c>a$ matches $B>C>A$. [1, 2, 1.]`,
    sasD(q5b, 22, 49, ["A", "B", "C"])),
  W("5.3", "hard", 5, S`To measure a canyon's width, points $A$ and $B$ are $150$ m apart on one rim. A rock $T$ on the far rim gives $\angle A=58^\circ$ and $\angle B=69^\circ$. (a) Find $\angle T$. (b) Find $AT$. (c) Find the canyon's width (distance from $T$ to line $AB$).`,
    S`(a) $53^\circ$. (b) $AT=\frac{150\sin69^\circ}{\sin53^\circ}\approx${f(q6AT)}$ m. (c) $AT\sin58^\circ\approx${f(q6w)}$ m. [1, 2, 2.]`,
    sasD(q6AT, 150, 58, ["A", "B", "T"])),
  W("5.4", "medium", 4, S`Two roads leave a town at an angle of $63^\circ$. A car is $14$ km along one road and a truck is $19$ km along the other. (a) Find the distance between them. (b) Explain why the sine law cannot start this problem.`,
    S`(a) $\sqrt{14^2+19^2-2(14)(19)\cos63^\circ}\approx${f(q7a)}$ km. (b) No side–opposite-angle pair is known (SAS). [3, 1.]`,
    sasD(14, 19, 63, ["town", "car", "truck"])),
  W("5.4", "hard", 5, S`A triangle has sides $7$, $9$ and $12$. (a) Find the largest angle. (b) Find the other two angles. (c) Classify the triangle as acute or obtuse and justify using the sides alone.`,
    S`(a) opposite $12$: $\cos C=\frac{49+81-144}{126}$, $C\approx${f(q8C)}^\circ$. (b) $A\approx${f(q8A)}^\circ$, $B\approx${f(q8B)}^\circ$. (c) obtuse: $12^2=144>7^2+9^2=130$. [2, 2, 1.]`,
    sasD(9, 7, q8C, ["C", "", ""])),
  W("5.5", "medium", 4, S`A surveyor at $P$ measures $PA=240$ m, $PB=310$ m and $\angle APB=71^\circ$. (a) Find $AB$. (b) Find $\angle B$. (c) Find $\angle A$.`,
    S`(a) cosine law: $AB\approx${f(q9c)}$ m. (b) sine law (opposite the smaller side, so acute): $B\approx${f(q9B)}^\circ$. (c) $A\approx${f(180 - 71 - q9B)}^\circ$. [2, 2, 1.]`,
    sasD(240, 310, 71, ["P", "A", "B"])),
  W("5.5", "hard", 5, S`A triangular lot has sides $11$ m, $13$ m and $15$ m. (a) Find the angle between the $11$ m and $13$ m sides. (b) Find the area. (c) A fence runs from that corner to the $15$ m side at right angles; find its length.`,
    S`(a) $\cos C=\frac{121+169-225}{286}$, $C\approx${f(q10C)}^\circ$. (b) $\tfrac12(11)(13)\sin C\approx${f(q10area)}$ m². (c) $\frac{2(\text{area})}{15}\approx${f((2 * q10area) / 15)}$ m. [2, 2, 1.]`,
    sasD(11, 13, q10C, ["C", "", ""])),
];
