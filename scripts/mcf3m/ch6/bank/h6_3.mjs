// 6.3 Vertical Transformations of the Sine Function — 20 hard questions
import { mc, ms, num, tf, sd, P, n2, asd, wave } from "./sk.mjs";
const S = String.raw;

export const TOPIC = "6.3 Vertical Transformations of the Sine Function";
export const Q = [
  n2(S`Solve $5\sin x+2=4.5$: enter the larger solution in $0^\circ\le x\le360^\circ$.`, 150, "sin x = 0.5."),
  n2(S`Solve $3\sin x-1=0.2$: enter the smaller solution (two decimals).`, asd(0.4), "sin x = 0.4."),
  n2(S`Solve $-2\sin x+4=5.3$: enter the larger solution in $0^\circ\le x\le360^\circ$ (two decimals).`, 360 - asd(0.65), "sin x = −0.65."),
  mc("The graph shown is y = a sin x + c. Which equation?", S`$y=-3\sin x+2$`, [S`$y=3\sin x+2$`, S`$y=-3\sin x-2$`, S`$y=2\sin x-3$`], "Max 5 at 270°, min −1 at 90°.", wave(-3, 0, 2, { points: [P(90, -1, null, "red"), P(270, 5)] })),
  num("For the graph shown (max 5, min −1), enter the y-value at x = 30°.", 0.5, "−3(0.5) + 2.", wave(-3, 0, 2, { points: [P(30, 0.5, "(30, ?)")] }), 0.001),
  num(S`For $y=a\sin x+c$ ($a>0$) the range is $-7\le y\le3$. Enter $a+c$.`, 3, "a = 5, c = −2; a + c is the max."),
  n2(S`A buoy's height is $h=0.6\sin x+1.8$ m. For what fraction of each cycle is it above $2.1$ m? Enter as a decimal.`, 1 / 3, "sin x > 0.5: 120° out of 360°."),
  num(S`For what value of $c$ does $y=3\sin x+c$ just touch the $x$-axis from above?`, 3, "Min c − 3 = 0."),
  num(S`For what value of $a>0$ does $y=a\sin x+5$ have minimum $-1$?`, 6, "5 − a = −1."),
  ms(S`Select every TRUE statement for $y=-4\sin x+1$.`, ["amplitude 4", "max at 270°", "range −3 ≤ y ≤ 5", "y-intercept −3"], [0, 1, 2], "y(0) = 1."),
  tf(S`The graphs of $y=2\sin x+1$ and $y=-2\sin x+1$ intersect at every multiple of $180^\circ$.`, true, "Where sin x = 0, both equal 1."),
  num(S`How many points of intersection do $y=2\sin x+1$ and $y=-2\sin x+1$ have for $0^\circ\le x\le720^\circ$?`, 5, "0, 180, 360, 540, 720."),
  n2(S`A wheel seat has $h=9\sin x+11$ m. Find the angle in $180^\circ\le x\le270^\circ$ where $h=5$ (two decimals).`, 180 + asd(6 / 9), "sin x = −2/3."),
  mc(S`$y=a\sin x+c$ has its maximum at $x=270^\circ$. What must be true?`, S`$a<0$`, [S`$a>0$`, S`$c<0$`, S`$c>0$`], "Reflection."),
  num(S`The wave $y=a\sin x+c$ passes through $(90,\,-1)$ and $(270,\,11)$. Enter $a$.`, -6, "a + c = −1, −a + c = 11."),
  num(S`For the wave through $(90,\,-1)$ and $(270,\,11)$, enter $c$.`, 5, "(−1 + 11)/2."),
  mc("Which graph is shown?", S`$y=0.5\sin x-1$`, [S`$y=2\sin x-1$`, S`$y=-0.5\sin x-1$`, S`$y=0.5\sin x+1$`], "Max −0.5 at 90°.", wave(0.5, 0, -1, { sy: 0.5, ymin: -2, ymax: 0.5, points: [P(90, -0.5)] })),
  n2(S`Find the total length of $x$-values in $0^\circ\le x\le360^\circ$ where $4\sin x+1>3$.`, 120, "sin x > 0.5 on (30°, 150°)."),
  num(S`The equation $2\sin x+c=0$ has exactly one solution in $0^\circ\le x<360^\circ$. Enter the positive $c$ that does this.`, 2, "sin x = −1 only at 270°."),
  mc("The wave shown is a vertical transformation of y = sin x. Which statement is correct?", "it is stretched by 3 and shifted up 1", ["it is shifted right 1", "it is reflected", "its period is 120°"], "Max 4, min −2.", wave(3, 0, 1, { points: [P(90, 4), P(270, -2, null, "red")] })),
];
