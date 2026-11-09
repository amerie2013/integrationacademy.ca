// 6.2 The Sine Function — 20 hard questions
import { mc, ms, num, tf, sd, cd, P, n2, asd, wave, sDoc } from "./sk.mjs";
const S = String.raw;
const W = (o) => wave(1, 0, 0, { sy: 0.5, ...o });
const circ = (R, ang) => sDoc([], { base: false, view: { xmin: -R * 1.3, xmax: R * 1.3, ymin: -R * 1.3, ymax: R * 1.3 }, step: { x: R / 2, y: R / 2 },
  segs: [{ pts: Array.from({ length: 73 }, (_, i) => [R * cd(i * 5), R * sd(i * 5)]), color: "gray" }, { pts: [[0, 0], [R * cd(ang), R * sd(ang)]], color: "violet" }, { pts: [[R * cd(ang), 0], [R * cd(ang), R * sd(ang)]], color: "red" }] });

export const TOPIC = "6.2 The Sine Function";
export const Q = [
  n2(S`A radius of $25$ cm is rotated $205^\circ$. Enter the $y$-coordinate of its end.`, 25 * sd(205), "25 sin 205° = −25 sin 25°.", circ(25, 205)),
  n2(S`Solve $\sin x=-0.15$: enter the sum of the two solutions in $0^\circ\le x\le360^\circ$.`, 540, "(180 + a) + (360 − a) = 540."),
  num(S`Solve $\sin x=0.5$ for $0^\circ\le x\le720^\circ$. Enter the largest solution.`, 510, "150 + 360."),
  num(S`How many solutions does $\sin x=-0.9$ have for $-360^\circ\le x\le360^\circ$?`, 4, "Two per cycle."),
  n2(S`A marker on a wheel of radius $7$ m starts level with the hub and turns $1000^\circ$. How far above (+) or below (−) the hub is it?`, 7 * sd(1000), "1000 − 720 = 280."),
  n2(S`Enter $\sin x$ if the radius $13$ ends at $(-5,\,-12)$.`, -12 / 13, "y/r."),
  mc(S`If $\sin x=0.6$ and $90^\circ<x<180^\circ$, then $x\approx$ …`, S`$143.13^\circ$`, [S`$36.87^\circ$`, S`$216.87^\circ$`, S`$323.13^\circ$`], "180 − 36.87."),
  ms(S`Select every TRUE statement about $y=\sin x$.`, ["it is periodic with period 360°", "its zeros are 180° apart", "its maximum value is 360", "sin(x + 180°) = −sin x"], [0, 1, 3], "Max value is 1."),
  tf(S`$\sin x=\sin(x+720^\circ)$ for every $x$.`, true, "Two periods."),
  mc("Which marked point on the graph has sin x = sin 20°?", "x = 160°", ["x = 200°", "x = 340°", "x = 110°"], "180 − 20.", W({ points: [P(160, 0.34, "160°"), P(200, -0.34, "200°", "red"), P(340, -0.34, "340°", "red")] })),
  n2(S`Solve $\sin x=0.82$; enter the solution between $360^\circ$ and $540^\circ$.`, 360 + asd(0.82), "Add 360 to the acute solution."),
  n2(S`A $1.2$ m crank turns from horizontal. Find the height of its end above the axle after $125^\circ$.`, 1.2 * sd(125), "1.2 sin 125°.", circ(1.2, 125)),
  num(S`For how many degrees of each turn is $\sin x\ge0.5$?`, 120, "From 30° to 150°."),
  n2(S`Enter $\sin(-765^\circ)$ (two decimals).`, sd(-765), "−765 + 1080 = 315."),
  mc(S`What is the smallest positive $x$ with $\sin x=-\tfrac12$?`, S`$210^\circ$`, [S`$330^\circ$`, S`$150^\circ$`, S`$30^\circ$`], "180 + 30."),
  n2(S`A seat on a wheel of radius $9$ m is at height $-4.5$ m relative to the hub, below and right of it. Find the angle of rotation from the level right position.`, 330, "sin x = −0.5, fourth quadrant."),
  num("The graph shows y = sin x with two marked points at height 0.8. Enter the distance between them (two decimals).", Math.round((180 - 2 * asd(0.8)) * 100) / 100, "(180 − a) − a.", W({ lines: [{ m: 0, b: 0.8, color: "green", dash: true }], points: [P(53.13, 0.8, false), P(126.87, 0.8, false)] }), 0.011),
  tf(S`If $0^\circ<x<90^\circ$, then $\sin x<\sin(x+90^\circ)$ always.`, false, "e.g. x = 60°: sin 60 > sin 150."),
  n2(S`$\sin\theta=\frac{5}{13}$ with $90^\circ<\theta<180^\circ$. Enter $\theta$ (two decimals).`, 180 - asd(5 / 13), "180 − sin⁻¹(5/13)."),
  num(S`How many times does $y=\sin x$ cross the line $y=0.2$ for $0^\circ\le x\le1800^\circ$?`, 10, "Five cycles, two each."),
];
