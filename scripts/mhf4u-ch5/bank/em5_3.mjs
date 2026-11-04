// 5.3 Sinusoidal Functions — 20 easy + 20 medium questions
import { mc, num, tf, fill, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const P = Math.PI;
const V = (ymin, ymax, xmax = 7) => ({ xmin: -0.5, xmax, ymin, ymax });

export const E = [
  num(S`What is the amplitude of $y=4\sin x$?`, 4, "Amplitude = |a| = 4: the curve reaches 4 and −4."),
  num(S`What is the amplitude of $y=-3\cos x$?`, 3, "Amplitude is |a| = |−3| = 3; the negative sign only reflects the curve."),
  mc(S`What is the period of $y=\sin2x$?`, S`$\pi$`, [S`$2\pi$`, S`$4\pi$`, S`$\frac\pi2$`], "Period = 2π/|k| = 2π/2 = π."),
  mc(S`What is the period of $y=\cos\frac x3$?`, S`$6\pi$`, [S`$\frac{2\pi}3$`, S`$3\pi$`, S`$2\pi$`], "Period = 2π/(1/3) = 6π."),
  mc(S`What is the phase shift of $y=\sin\left(x-\frac\pi4\right)$?`, S`$\frac\pi4$ right`, [S`$\frac\pi4$ left`, S`$\frac\pi4$ up`, "none"], "x − d with d = π/4 shifts right by π/4."),
  mc(S`What is the phase shift of $y=\cos\left(x+\frac\pi3\right)$?`, S`$\frac\pi3$ left`, [S`$\frac\pi3$ right`, S`$\frac\pi3$ down`, "none"], "x + π/3 = x − (−π/3): shift left π/3."),
  mc(S`What is the axis of the curve $y=\sin x+5$?`, S`$y=5$`, [S`$y=1$`, S`$y=6$`, S`$x=5$`], "Adding c = 5 moves the middle line from y = 0 to y = 5."),
  num(S`What is the maximum value of $y=2\sin x+3$?`, 5, "Max = c + |a| = 3 + 2 = 5."),
  num(S`What is the minimum value of $y=2\sin x+3$?`, 1, "Min = c − |a| = 3 − 2 = 1."),
  mc(S`What is the range of $y=3\cos x-1$?`, S`$-4\le y\le2$`, [S`$-1\le y\le3$`, S`$-3\le y\le3$`, S`$-2\le y\le4$`], "c − |a| = −4 and c + |a| = 2."),
  tf(S`$y=-\sin x$ is $y=\sin x$ reflected in the $x$-axis.`, true, "a = −1 multiplies every y-value by −1."),
  tf(S`The period of $y=5\sin x$ is $10\pi$.`, false, "a changes the height only; the period is still 2π."),
  tf(S`$y=\sin x+2$ has the same period as $y=\sin x$.`, true, "A vertical shift does not change the period."),
  fill(S`In $y=a\sin(k(x-d))+c$, the period is $2\pi$ divided by $|\square|$. Which letter goes in the box?`, ["k"], "Period = 2π/|k|."),
  fill(S`The middle line $y=c$ of a sinusoid is called the ____ of the curve.`, ["axis", "axis of the curve", "midline"], "It lies halfway between the maximum and minimum."),
  mc(S`Which transformation turns $y=\sin x$ into $y=\sin x-4$?`, "translate down 4", ["translate up 4", "translate right 4", "stretch by 4"], "Subtracting 4 from every y-value moves the graph down 4."),
  mc(S`Which transformation turns $y=\cos x$ into $y=\cos3x$?`, S`horizontal compression by $\frac13$`, ["horizontal stretch by 3", "vertical stretch by 3", "shift right 3"], "k = 3 makes each cycle three times shorter."),
  num(S`For $y=5\cos2x$, find the value at $x=0$.`, 5, "cos 0 = 1, so y = 5."),
  mc("What is the amplitude of the graph shown?", "2", ["4", "1", "3"], "It rises to 3 and falls to −1: amplitude (3 − (−1))/2 = 2.", planeDoc(TG([[(x) => 2 * Math.sin(x) + 1, "violet"]], V(-2, 4)))),
  mc("What is the period of the graph shown?", S`$\pi$`, [S`$2\pi$`, S`$\frac\pi2$`, S`$4\pi$`], "Two neighbouring peaks are π apart.", planeDoc(TG([[(x) => Math.cos(2 * x), "green"]], V(-2, 2)))),
];

export const M = [
  mc(S`What is the phase shift of $y=\sin(2x-\pi)$?`, S`$\frac\pi2$ right`, [S`$\pi$ right`, S`$\frac\pi2$ left`, S`$2\pi$ right`], "Factor: 2x − π = 2(x − π/2)."),
  mc(S`What is the phase shift of $y=\cos(3x+\pi)$?`, S`$\frac\pi3$ left`, [S`$\pi$ left`, S`$\frac\pi3$ right`, S`$3\pi$ left`], "Factor: 3x + π = 3(x + π/3)."),
  num(S`For $y=4\sin\left(\frac\pi2x\right)$, find the period.`, 4, "Period = 2π/(π/2) = 4."),
  num(S`For $y=-2\cos(x)+6$, find the $y$-value at $x=\pi$.`, 8, "cos π = −1, so y = −2(−1) + 6 = 8."),
  mc(S`What is the first maximum (for $x\ge0$) of $y=\sin\left(x-\frac\pi6\right)$?`, S`$\left(\frac{2\pi}3,1\right)$`, [S`$\left(\frac\pi2,1\right)$`, S`$\left(\frac\pi6,1\right)$`, S`$\left(\frac\pi3,1\right)$`], "sin peaks when the inside is π/2: x − π/6 = π/2, so x = 2π/3."),
  mc(S`Which equation has amplitude 3, period $\pi$ and axis $y=2$?`, S`$y=3\sin2x+2$`, [S`$y=2\sin3x+\pi$`, S`$y=3\sin\frac x2+2$`, S`$y=3\sin x+2$`], "a = 3, k = 2π/π = 2, c = 2."),
  mc(S`Which equation has a maximum at $(0,4)$ and a minimum value of $-2$, with period $2\pi$?`, S`$y=3\cos x+1$`, [S`$y=3\sin x+1$`, S`$y=4\cos x-2$`, S`$y=6\cos x+1$`], "Axis (4 + (−2))/2 = 1, amplitude 3, cosine starts at a max."),
  ms(S`Select every transformation in $y=-\frac12\sin(4x)+3$.`, ["reflection in the x-axis", S`vertical compression by $\frac12$`, S`horizontal compression by $\frac14$`, "translation up 3", "translation right 4"], [0, 1, 2, 3], "a = −1/2: reflect and compress; k = 4; c = 3. There is no horizontal shift."),
  ms(S`Select the $x$-values of the five key points of $y=\sin2x$ for one cycle from $0$.`, ["0", S`$\frac\pi4$`, S`$\frac\pi2$`, S`$\frac{3\pi}4$`, S`$\pi$`, S`$2\pi$`], [0, 1, 2, 3, 4], "Period π, so step by π/4 from 0 to π."),
  tf(S`$y=\sin\left(x+\frac\pi2\right)$ and $y=\cos x$ have the same graph.`, true, "Shifting sine left by π/2 gives cosine."),
  tf(S`$y=\sin(2x-\pi)$ is $y=\sin2x$ shifted right by $\pi$.`, false, "2x − π = 2(x − π/2), so the shift is π/2."),
  tf(S`$y=-\cos x$ has a minimum at $x=0$.`, true, "−cos 0 = −1, its lowest value."),
  num(S`A sinusoid has max $9$ and min $-3$. Find its amplitude.`, 6, "(9 − (−3))/2 = 6."),
  num(S`A sinusoid has max $9$ and min $-3$. Find $c$, the axis value.`, 3, "(9 + (−3))/2 = 3."),
  num(S`Two neighbouring maximums of a sinusoid are at $x=1$ and $x=5$. Find $k>0$ to three decimals.`, P / 2, "Period 4, so k = 2π/4 = π/2 ≈ 1.571.", null, 0.002),
  mc("The graph is y = a sin x + c. Find a and c.", S`$a=3,\ c=1$`, [S`$a=4,\ c=1$`, S`$a=3,\ c=-2$`, S`$a=1,\ c=3$`], "Max 4, min −2: c = 1, a = 3; it rises from the axis at 0, so a > 0.", planeDoc(TG([[(x) => 3 * Math.sin(x) + 1, "violet"]], V(-3, 5)))),
  mc("Which equation matches the graph?", S`$y=2\cos\left(x-\frac\pi2\right)$`, [S`$y=2\cos x$`, S`$y=2\cos\left(x+\frac\pi2\right)$`, S`$y=-2\sin x$`], "The first max is at π/2, so the cosine is shifted right π/2 (this equals 2 sin x).", planeDoc(TG([[(x) => 2 * Math.sin(x), "violet"]], V(-3, 3)))),
  mc(S`Which function is equivalent to $y=3\sin\left(x+\frac\pi2\right)$?`, S`$y=3\cos x$`, [S`$y=-3\cos x$`, S`$y=3\sin x$`, S`$y=-3\sin x$`], "sin(x + π/2) = cos x."),
  fill(S`Write the period of $y=7\sin\left(\frac{\pi}{12}t\right)+20$.`, ["24"], "2π/(π/12) = 24."),
  num(S`For $y=2\sin\left(3\left(x-\frac\pi6\right)\right)$, find $y$ at $x=\frac\pi3$.`, 2, "3(π/3 − π/6) = π/2, and 2 sin(π/2) = 2."),
];
