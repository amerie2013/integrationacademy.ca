// 12.6 Transformations and Periodic Models — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI, r3 = (v) => Math.round(v * 1000) / 1000;
const g = (f, ymin, ymax, xmax = 2 * PI, sx = PI / 2, sy = 1) => planeDoc({ view: { xmin: 0, xmax, ymin, ymax }, curves: [{ f }], step: { x: sx, y: sy } });

export const E = [
  mc(S`The amplitude of $y=4\sin x$ is:`, "4", ["1", S`$2\pi$`, "8"], "|a|."),
  mc(S`The period of $y=\cos3x$ is:`, S`$\frac{2\pi}{3}$`, [S`$3\pi$`, S`$6\pi$`, S`$\frac{\pi}{3}$`], "2π/b."),
  mc(S`The principal axis of $y=\sin x+6$ is:`, S`$y=6$`, [S`$y=0$`, S`$y=1$`, S`$x=6$`], "Vertical shift d."),
  mc(S`$y=\sin\left(x-\frac{\pi}{3}\right)$ is $y=\sin x$ translated:`, S`right by $\frac{\pi}{3}$`, [S`left by $\frac{\pi}{3}$`, S`up by $\frac{\pi}{3}$`, S`down by $\frac{\pi}{3}$`], "x − c moves right by c."),
  mc(S`$y=-\cos x$ is $y=\cos x$:`, "reflected in the x-axis", ["reflected in the y-axis", "translated right π", "stretched by 2"], "All y-values change sign."),
  num(S`Find the amplitude of $y=-7\cos x$.`, 7, "Amplitude is |a|."),
  num(S`Find the period of $y=\sin5x$ (3 d.p.).`, r3((2 * PI) / 5), "2π/5.", null, 0.001),
  num(S`Find the maximum value of $y=2\cos x+9$.`, 11, "9 + 2."),
  num(S`Find the minimum value of $y=8\sin x-3$.`, -11, "−3 − 8."),
  num(S`Find the period of $y=\tan2x$ (3 d.p.).`, r3(PI / 2), "π/b for tangent.", null, 0.001),
  tf(S`$y=\sin2x$ has period $4\pi$.`, false, "2π/2 = π."),
  tf(S`The amplitude of $y=-3\sin x$ is $-3$.`, false, "Amplitude is positive: 3."),
  tf(S`$y=\cos x+2$ has range $1\le y\le3$.`, true, "Shift [−1, 1] up 2."),
  fill(S`In $y=a\sin(b(x-c))+d$, the vertical translation is given by ___.`, ["d"], "Principal axis y = d."),
  ms("Which functions have amplitude 2? Select all.", [S`$y=2\sin x$`, S`$y=-2\cos x$`, S`$y=\sin2x$`, S`$y=2\cos3x+1$`], [0, 1, 3], "sin 2x has amplitude 1."),
  mc("The graph shown is y = a sin x. The amplitude is:", "2", ["1", "4", "π"], "Peaks at ±2.", g((x) => 2 * Math.sin(x), -2.5, 2.5)),
  mc("The graph shown is y = cos x + d. The principal axis is:", S`$y=1$`, [S`$y=0$`, S`$y=2$`, S`$y=-1$`], "Midway between 2 and 0.", g((x) => Math.cos(x) + 1, -0.5, 2.5)),
  num(S`Find the period of $y=\cos\frac{x}{4}$ (3 d.p.).`, r3(8 * PI), "2π ÷ ¼.", null, 0.001),
  mc(S`$y=\sin x$ stretched vertically by factor 3 is:`, S`$y=3\sin x$`, [S`$y=\sin3x$`, S`$y=\sin x+3$`, S`$y=\sin\frac{x}{3}$`], "Multiply the output."),
  mc(S`$y=\cos x$ translated up 4 units is:`, S`$y=\cos x+4$`, [S`$y=\cos(x+4)$`, S`$y=4\cos x$`, S`$y=\cos(x-4)$`], "Add to the output."),
];

export const M = [
  num("A sinusoid has maximum 9 and minimum 1. Find its amplitude.", 4, "(9 − 1)/2."),
  num("A sinusoid has maximum 9 and minimum 1. Find the equation of its principal axis, y = ?", 5, "(9 + 1)/2."),
  mc(S`$y=\sin bx$ has period $\frac{\pi}{3}$. Then b is:`, "6", ["3", S`$\frac13$`, S`$\frac{1}{6}$`], "2π/b = π/3."),
  mc("Which sine function has amplitude 2, period π and principal axis y = −1?", S`$y=2\sin2x-1$`, [S`$y=2\sin\frac{x}{2}-1$`, S`$y=-\sin2x+2$`, S`$y=2\sin x-1$`], "b = 2π/π = 2."),
  num(S`Find the x-value in $[0,\pi]$ where $y=3\cos\left(2\left(x-\frac{\pi}{4}\right)\right)+1$ is maximum (3 d.p.).`, r3(PI / 4), "The cosine peak moves to x = π/4.", null, 0.001),
  num(S`Find the period of $y=4\sin\frac{\pi x}{5}+2$.`, 10, "2π ÷ π/5."),
  num(S`Find the value of $y=-2\cos x+5$ at $x=0$.`, 3, "−2 + 5."),
  mc(S`$y=\sin\left(2x+\frac{\pi}{2}\right)$ is $y=\sin2x$ translated:`, S`left by $\frac{\pi}{4}$`, [S`left by $\frac{\pi}{2}$`, S`right by $\frac{\pi}{4}$`, S`right by $\frac{\pi}{2}$`], "2(x + π/4)."),
  mc("The graph shows y = 3 sin(bx). Its period is:", S`$4\pi$`, [S`$2\pi$`, S`$\pi$`, S`$\frac{\pi}{2}$`], "One cycle over 0 to 4π, so b = ½.", g((x) => 3 * Math.sin(x / 2), -3.5, 3.5, 4 * PI, PI)),
  mc("The graph shows a maximum of 5 at x = 0 and a minimum of −1 at x = π. Its equation is:", S`$y=3\cos x+2$`, [S`$y=3\sin x+2$`, S`$y=2\cos x+3$`, S`$y=5\cos x$`], "Amplitude 3, axis y = 2, cosine starts at a peak.", g((x) => 3 * Math.cos(x) + 2, -2, 6)),
  num(S`Find the maximum value of $y=6-2\sin x$.`, 8, "When sin x = −1."),
  num(S`How many solutions does $2\sin3x+1=0$ have for $0\le x\le2\pi$?`, 6, "sin 3x = −½; 3x covers three turns."),
  tf(S`$y=\cos(x-2\pi)$ is the same function as $y=\cos x$.`, true, "A shift by one period."),
  tf(S`$y=\sin2x$ and $y=2\sin x$ have the same period.`, false, "π and 2π."),
  ms(S`For $y=5\sin(2(x-1))+3$, which are correct? Select all.`, ["amplitude 5", "period π", S`range $-2\le y\le8$`, "shifted left 1"], [0, 1, 2], "It is shifted right 1."),
  num(S`A room temperature is $T=15-8\cos\frac{\pi t}{12}$ °C, t in hours. Find the maximum temperature.`, 23, "When cos = −1."),
  num(S`For $T=15-8\cos\frac{\pi t}{12}$, at what time $0\le t\le24$ is T greatest?`, 12, "πt/12 = π."),
  num("A wheel of radius 20 m has its centre 25 m above the ground and turns once every 6 minutes. Find the greatest height of a seat.", 45, "25 + 20."),
  num(S`For that wheel, $h=25-20\cos\frac{2\pi t}{6}$ with the seat starting at the bottom. Find h at $t=1.5$ min.`, 25, "cos(π/2) = 0."),
  mc(S`$y=\sin x$ stretched horizontally by factor 3 is:`, S`$y=\sin\frac{x}{3}$`, [S`$y=\sin3x$`, S`$y=3\sin x$`, S`$y=\frac{1}{3}\sin x$`], "Replace x with x/3."),
];
