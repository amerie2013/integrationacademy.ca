// 6.3 Vertical Transformations of the Sine Function — 20 easy + 20 medium
import { mc, ms, num, tf, fill, sd, P, n2, wave } from "./sk.mjs";
const S = String.raw;

export const E = [
  num(S`Enter the amplitude of $y=7\sin x$.`, 7, "|a|."),
  num(S`Enter the amplitude of $y=-2.5\sin x$.`, 2.5, "|a|.", null, 0.001),
  num(S`The axis of $y=\sin x+6$ is $y=k$. Enter $k$.`, 6, "c."),
  num(S`The axis of $y=4\sin x-5$ is $y=k$. Enter $k$.`, -5, "c."),
  num(S`Enter the maximum value of $y=3\sin x+4$.`, 7, "4 + 3."),
  num(S`Enter the minimum value of $y=3\sin x+4$.`, 1, "4 − 3."),
  num(S`Enter the maximum value of $y=-6\sin x+1$.`, 7, "1 + 6."),
  num(S`Enter $y$ at $x=90^\circ$ for $y=5\sin x-2$.`, 3, "5 − 2."),
  num(S`Enter $y$ at $x=270^\circ$ for $y=5\sin x-2$.`, -7, "−5 − 2."),
  num(S`Enter $y$ at $x=180^\circ$ for $y=-4\sin x+9$.`, 9, "sin 180° = 0."),
  mc(S`What does the negative sign in $y=-\sin x$ do?`, "reflects the wave in the x-axis", ["shifts it down 1", "shifts it left", "halves the period"], "a < 0."),
  mc(S`$y=\sin x+5$ is $y=\sin x$ …`, "shifted up 5", ["shifted right 5", "stretched by 5", "shifted down 5"], "c = 5."),
  tf(S`$y=a\sin x+c$ has period $360^\circ$ for any $a\ne0$ and any $c$.`, true, "a and c change only y-values."),
  tf(S`The amplitude of $y=-8\sin x$ is $-8$.`, false, "It is 8."),
  fill(S`Key points map by $(x,\,y)\to(x,\ \square\,y+c)$. The missing letter is ____.`, ["a"], "Multiply by a."),
  mc("The graph shown is y = a sin x. What is a?", "2", ["−2", "1", "4"], "Peak 2 at 90°.", wave(2, 0, 0, { points: [P(90, 2)] })),
  num("The graph shown is y = sin x + c. Enter c.", -1, "Axis y = −1.", wave(1, 0, -1, { lines: [{ m: 0, b: -1, color: "green", dash: true }] })),
  mc(S`Which has range $-2\le y\le6$?`, S`$y=4\sin x+2$`, [S`$y=2\sin x+4$`, S`$y=6\sin x-2$`, S`$y=8\sin x$`], "Axis 2, amplitude 4."),
  num(S`The point $(90,\,1)$ maps to $(90,\,y)$ on $y=-3\sin x+5$. Enter $y$.`, 2, "−3 + 5."),
  num(S`Enter max − min for $y=4.5\sin x+1$.`, 9, "2 × 4.5."),
];

export const M = [
  mc(S`A sine wave has max $9$ at $90^\circ$ and min $-1$. Its equation is …`, S`$y=5\sin x+4$`, [S`$y=-5\sin x+4$`, S`$y=4\sin x+5$`, S`$y=10\sin x-1$`], "Axis 4, amplitude 5, not reflected."),
  mc(S`A sine wave has min $-8$ at $90^\circ$ and max $2$. Its equation is …`, S`$y=-5\sin x-3$`, [S`$y=5\sin x-3$`, S`$y=-3\sin x+5$`, S`$y=-5\sin x+3$`], "Axis −3, reflected."),
  num(S`$y=a\sin x+c$ has max $12$, min $4$, $a>0$. Enter $a$.`, 4, "(12 − 4)/2."),
  num(S`$y=a\sin x+c$ has max $12$, min $4$. Enter $c$.`, 8, "(12 + 4)/2."),
  num(S`Solve $3\sin x+2=5$ for $0^\circ\le x\le360^\circ$.`, 90, "sin x = 1."),
  num(S`Solve $2\sin x-1=0$: enter the larger solution in $0^\circ\le x\le360^\circ$.`, 150, "sin x = 0.5."),
  num(S`Solve $-4\sin x+3=5$: enter the smaller solution in $0^\circ\le x\le360^\circ$.`, 210, "sin x = −0.5."),
  n2(S`Enter $y$ at $x=60^\circ$ for $y=6\sin x+1$ (two decimals).`, 6 * sd(60) + 1, "6(0.866) + 1."),
  n2(S`Enter $y$ at $x=330^\circ$ for $y=-2\sin x+3$.`, -2 * sd(330) + 3, "−2(−0.5) + 3."),
  ms(S`Select every equation whose graph lies entirely above the $x$-axis.`, [S`$y=2\sin x+3$`, S`$y=3\sin x+2$`, S`$y=-\sin x+1.5$`, S`$y=0.5\sin x+0.4$`], [0, 2], "Need c > |a|."),
  tf(S`$y=-2\sin x+5$ and $y=2\sin x+5$ have the same range.`, true, "Both 3 ≤ y ≤ 7."),
  mc("The graph shown has equation …", S`$y=-2\sin x+1$`, [S`$y=2\sin x+1$`, S`$y=-2\sin x-1$`, S`$y=\sin x+2$`], "Min at 90°, axis 1, amplitude 2.", wave(-2, 0, 1, { points: [P(90, -1, null, "red"), P(270, 3)] })),
  num("For the graph shown (y = 1.5 sin x + 2.5), enter the minimum.", 1, "2.5 − 1.5.", wave(1.5, 0, 2.5, { ymin: 0, ymax: 5 })),
  n2(S`A paddle's height is $h=2.4\sin x+3$ m. Enter the height at $x=225^\circ$.`, 2.4 * sd(225) + 3, "2.4 sin 225° + 3."),
  num(S`For $h=2.4\sin x+3$, what is the lowest height?`, 0.6, "3 − 2.4.", null, 0.001),
  mc(S`Which transformation maps $y=\sin x$ to $y=0.25\sin x-4$?`, "compress vertically by 0.25, then shift down 4", ["shift down 4 then compress by 4", "stretch by 4 then shift up 4", "shift right 4"], "a = 0.25, c = −4."),
  fill(S`For $y=a\sin x+c$, the maximum value is $c+|\square|$. The missing letter is ____.`, ["a"], "Amplitude."),
  num(S`$y=a\sin x+c$ passes through $(90,\,10)$ and $(270,\,2)$. Enter $a$.`, 4, "a + c = 10, −a + c = 2."),
  num(S`For that same wave, enter $c$.`, 6, "Add the equations."),
  num(S`How many solutions does $5\sin x+5=10$ have for $0^\circ\le x\le720^\circ$?`, 2, "sin x = 1 at 90°, 450°."),
];
