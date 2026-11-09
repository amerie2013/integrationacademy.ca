// 6.4 Horizontal Translations of the Sine Function — 20 easy + 20 medium
import { mc, ms, num, tf, fill, sd, P, n2, wave } from "./sk.mjs";
const S = String.raw;

export const E = [
  mc(S`$y=\sin(x-35^\circ)$ is $y=\sin x$ moved …`, "35° right", ["35° left", "35 up", "35 down"], "x − d: right."),
  mc(S`$y=\sin(x+80^\circ)$ is $y=\sin x$ moved …`, "80° left", ["80° right", "80 up", "80 down"], "x + d: left."),
  num(S`Write $y=\sin(x+25^\circ)$ as $y=\sin(x-d)$. Enter $d$.`, -25, "x + 25 = x − (−25)."),
  num(S`Enter the $x$-coordinate of the maximum of $y=\sin(x-50^\circ)$ in $0^\circ\le x\le360^\circ$.`, 140, "90 + 50."),
  num(S`Enter the $x$-coordinate of the minimum of $y=\sin(x-50^\circ)$ in $0^\circ\le x\le360^\circ$.`, 320, "270 + 50."),
  num(S`Enter the $x$-coordinate of the maximum of $y=\sin(x+20^\circ)$ in $0^\circ\le x\le360^\circ$.`, 70, "90 − 20."),
  num(S`Enter the first positive zero of $y=\sin(x-100^\circ)$.`, 100, "0 + 100."),
  num(S`Enter the amplitude of $y=6\sin(x-15^\circ)+2$.`, 6, "|a|."),
  num(S`The axis of $y=6\sin(x-15^\circ)+2$ is $y=k$. Enter $k$.`, 2, "c."),
  num(S`Enter the period of $y=\sin(x-75^\circ)$ in degrees.`, 360, "d doesn't change it."),
  tf(S`The phase shift changes the amplitude.`, false, "Only position changes."),
  tf(S`$y=\sin(x-360^\circ)$ has the same graph as $y=\sin x$.`, true, "One full period."),
  fill(S`Under $y=a\sin(x-d)+c$, the point $(x,\,y)$ maps to $(x+\square,\ ay+c)$. The missing letter is ____.`, ["d"], "Add d to x."),
  mc("The graph shown is y = sin(x − d). What is d?", "45°", ["−45°", "90°", "135°"], "Max moved from 90° to 135°.", wave(1, 45, 0, { xmax: 450, sy: 0.5, points: [P(135, 1)] })),
  num("The graph shown is y = sin(x − d) with its max at x = 30°. Enter d.", -60, "30 − 90.", wave(1, -60, 0, { xmin: -90, xmax: 360, sy: 0.5, points: [P(30, 1)] })),
  num(S`The point $(90,\,1)$ on $y=\sin x$ maps to which $x$ on $y=\sin(x-40^\circ)$?`, 130, "90 + 40."),
  num(S`Enter $y$ at $x=40^\circ$ for $y=\sin(x-40^\circ)$.`, 0, "sin 0° = 0."),
  num(S`Enter the maximum value of $y=2\sin(x-65^\circ)-3$.`, -1, "−3 + 2."),
  mc(S`Which equation moves $y=\sin x$ $70^\circ$ left?`, S`$y=\sin(x+70^\circ)$`, [S`$y=\sin(x-70^\circ)$`, S`$y=\sin x+70$`, S`$y=\sin x-70$`], "Plus inside: left."),
  num(S`Enter $y$ at $x=120^\circ$ for $y=\sin(x-30^\circ)$.`, 1, "sin 90°."),
];

export const M = [
  num(S`Enter the $x$-coordinate of the max of $y=-\sin(x-20^\circ)$ in $0^\circ\le x\le360^\circ$.`, 290, "270 + 20 (reflected)."),
  num(S`Enter the min value of $y=-3\sin(x+40^\circ)+5$.`, 2, "5 − 3."),
  mc(S`A wave has max $(160,\,7)$ and min $-1$. Which equation fits ($a>0$)?`, S`$y=4\sin(x-70^\circ)+3$`, [S`$y=4\sin(x+70^\circ)+3$`, S`$y=3\sin(x-70^\circ)+4$`, S`$y=4\sin(x-160^\circ)+3$`], "a = 4, c = 3, d = 160 − 90."),
  num(S`A wave $y=a\sin(x-d)+c$ ($a>0$) has max $(200,\,10)$ and min $2$. Enter $d$.`, 110, "200 − 90."),
  num(S`For that wave, enter $c$.`, 6, "(10 + 2)/2."),
  n2(S`Enter $y$ at $x=0$ for $y=4\sin(x-30^\circ)+1$.`, 4 * sd(-30) + 1, "4(−0.5) + 1."),
  n2(S`Enter $y$ at $x=100^\circ$ for $y=2\sin(x+50^\circ)$.`, 2 * sd(150), "2 sin 150°."),
  num(S`Solve $\sin(x-20^\circ)=1$ for $0^\circ\le x\le360^\circ$.`, 110, "x − 20 = 90."),
  num(S`Solve $\sin(x+30^\circ)=0.5$: enter the smaller positive solution.`, 120, "x + 30 = 30 or 150 → x = 0 or 120; smallest positive 120."),
  ms(S`Select every equation with a maximum at $x=150^\circ$.`, [S`$y=\sin(x-60^\circ)$`, S`$y=\sin(x+300^\circ)$`, S`$y=-\sin(x+120^\circ)$`, S`$y=\sin(x-150^\circ)$`], [0, 1, 2], "Check x − d = 90 (or 270 when reflected)."),
  tf(S`$y=\sin(x+90^\circ)$ has a maximum at $x=0$.`, true, "sin 90° = 1."),
  mc("The graph shown has equation …", S`$y=2\sin(x-60^\circ)+1$`, [S`$y=2\sin(x+60^\circ)+1$`, S`$y=\sin(x-60^\circ)+2$`, S`$y=2\sin(x-150^\circ)+1$`], "Max (150, 3), axis 1.", wave(2, 60, 1, { xmax: 450, points: [P(150, 3)] })),
  num("For the graph shown, enter the x-coordinate of the minimum in 0° ≤ x ≤ 360°.", 330, "270 + 60.", wave(2, 60, 1, { xmax: 450, points: [P(330, -1, null, "red")] })),
  fill(S`For $a>0$, the phase shift is $d=x_{\max}-\square^\circ$. The number is ____.`, ["90"], "Max of sin x is at 90°."),
  num(S`A rider boards at the bottom of a wheel: $h=r\sin(x-d)+\text{hub}$. Enter the smallest positive $d$.`, 90, "Min at x = 0 needs x − d = −90."),
  n2(S`Enter $h$ at $x=60^\circ$ for $h=5\sin(x-90^\circ)+7$.`, 5 * sd(-30) + 7, "5 sin(−30°) + 7."),
  mc(S`Which is the same graph as $y=\sin(x-270^\circ)$?`, S`$y=\sin(x+90^\circ)$`, [S`$y=\sin(x-90^\circ)$`, S`$y=\sin(x+270^\circ)$`, S`$y=-\sin(x+90^\circ)$`], "−270 + 360 = 90 left."),
  num(S`For $y=\sin(x-d)$, the zero at $x=0$ moves to $x=55^\circ$. Enter $d$.`, 55, "Right 55."),
  n2(S`Solve $3\sin(x-10^\circ)+2=3.5$: enter the larger solution in $0^\circ\le x\le360^\circ$.`, 160, "sin(x − 10) = 0.5 → x − 10 = 150."),
  num(S`Enter max − min for $y=-1.5\sin(x-45^\circ)+8$.`, 3, "2 × 1.5."),
];
