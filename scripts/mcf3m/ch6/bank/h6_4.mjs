// 6.4 Horizontal Translations of the Sine Function — 20 hard questions
import { mc, ms, num, tf, sd, P, n2, asd, wave } from "./sk.mjs";
const S = String.raw;

export const TOPIC = "6.4 Horizontal Translations of the Sine Function";
export const Q = [
  n2(S`Solve $\sin(x-25^\circ)=0.3$: enter the larger solution in $0^\circ\le x\le360^\circ$ (two decimals).`, 25 + 180 - asd(0.3), "x − 25 = 180 − 17.46."),
  n2(S`Solve $2\sin(x+40^\circ)=-1$: enter the smaller solution in $0^\circ\le x\le360^\circ$.`, 170, "x + 40 = 210 or 330 → 170 or 290."),
  num(S`A wave has min $(75,\,-6)$ and the next max $(255,\,2)$. For $y=a\sin(x-d)+c$ with $a>0$, enter $d$.`, 165, "Max of sin at 90 → 255: d = 165."),
  num(S`For that wave, enter $a\cdot c$.`, -8, "a = 4, c = −2."),
  mc("Which equation matches the graph shown?", S`$y=-3\sin(x-30^\circ)+1$`, [S`$y=3\sin(x-30^\circ)+1$`, S`$y=-3\sin(x+30^\circ)+1$`, S`$y=3\sin(x-120^\circ)-1$`], "Min (120, −2), max (300, 4).", wave(-3, 30, 1, { xmax: 420, points: [P(120, -2, null, "red"), P(300, 4)] })),
  num("For the graph shown, enter y at x = 210°.", 1, "−3 sin 180° + 1.", wave(-3, 30, 1, { xmax: 420, points: [P(210, 1, "(210, ?)")] })),
  n2(S`A rider boards at the bottom: $h=12\sin(x-90^\circ)+14$. Enter $h$ after $x=250^\circ$.`, 12 * sd(160) + 14, "12 sin 160° + 14.", wave(12, 90, 14, { ymin: 0, ymax: 28, sy: 4, xlabel: "x (°)", ylabel: "h (m)", points: [P(0, 2), P(180, 26)] })),
  num(S`For that rider, enter the angle in $0^\circ\le x\le360^\circ$ where the height is first $20$ m.`, 120, "sin(x − 90) = 0.5 → x − 90 = 30."),
  ms(S`Select every equation that has the same graph as $y=\sin(x-60^\circ)$.`, [S`$y=\sin(x+300^\circ)$`, S`$y=-\sin(x+120^\circ)$`, S`$y=\sin(x-420^\circ)$`, S`$y=\sin(x+60^\circ)$`], [0, 1, 2], "Shifts differ by 360°, or a 180° shift with a reflection."),
  tf(S`For any $d$, $y=\sin(x-d)$ and $y=\sin(x-d-180^\circ)$ are reflections of each other in the $x$-axis.`, true, "sin(θ − 180°) = −sin θ."),
  n2(S`$y=\sin(x-d)$ passes through $(100,\,1)$ with $0^\circ\le d<360^\circ$. Enter $d$.`, 10, "100 − d = 90."),
  num(S`$y=a\sin(x-d)+c$ has max $(50,\,9)$ and min $(230,\,-3)$, $a>0$. Enter $a+c+d$.`, -31, "a = 6, c = 3, d = −40."),
  mc(S`Two riders on the same wheel are a quarter turn apart. If one has $h=8\sin(x-90^\circ)+10$, the other could be …`, S`$h=8\sin x+10$`, [S`$h=8\sin(x-90^\circ)+18$`, S`$h=2\sin(x-90^\circ)+10$`, S`$h=8\sin(x-90^\circ)+2$`], "Shifted 90°."),
  n2(S`Find the total length of $x$-intervals in $0^\circ\le x\le360^\circ$ where $\sin(x-45^\circ)>0$.`, 180, "Half of each cycle."),
  num(S`How many solutions does $\sin(x+15^\circ)=0.99$ have for $0^\circ\le x\le720^\circ$?`, 4, "Two per cycle."),
  n2(S`Solve $4\sin(x-70^\circ)+1=-1$: enter the larger solution in $0^\circ\le x\le360^\circ$.`, 280, "sin(x − 70°) = −0.5: x − 70 = −30 or 210, so x = 40° or 280°."),
  mc("The graph shows y = sin(x − d) + c. Which values?", "d = −30°, c = 2", ["d = 30°, c = 2", "d = −30°, c = −2", "d = 60°, c = 2"], "Max (60, 3).", wave(1, -30, 2, { xmin: -90, xmax: 360, ymin: 0, ymax: 4, points: [P(60, 3)] })),
  num(S`Find the smallest positive $x$ where $y=2\sin(x-120^\circ)$ reaches its minimum.`, 30, "x − 120 = −90."),
  n2(S`Two waves: $y=\sin x$ and $y=\sin(x-90^\circ)$. Find the first positive $x$ where they are equal.`, 135, "Midway: sin 135° = sin 45°."),
  tf(S`$y=3\sin(x-90^\circ)+3$ never goes below $0$.`, true, "Min 3 − 3 = 0."),
];
