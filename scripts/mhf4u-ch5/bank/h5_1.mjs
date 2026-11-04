// 5.1 Graphs of Sine, Cosine and Tangent — 20 hard questions
import { mc, num, tf, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const V = { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 };
const W = { xmin: -6.8, xmax: 6.8, ymin: -2, ymax: 2 };
const tan = (x) => (Math.abs(Math.cos(x)) < 0.06 ? NaN : Math.tan(x));

export const TOPIC = "5.1 Graphs of Sine, Cosine and Tangent";
export const Q = [
  mc(S`For $0\le x\le2\pi$, where is $\cos x>\sin x$?`, S`$0\le x<\frac\pi4$ or $\frac{5\pi}4<x\le2\pi$`, [S`$\frac\pi4<x<\frac{5\pi}4$`, S`$0\le x<\frac\pi2$`, S`$\pi<x\le2\pi$`], "Crossings where tan x = 1 (π/4, 5π/4); test x = 0: cos 0 = 1 > sin 0 = 0."),
  ms(S`Select all $x$ in $[0,2\pi]$ with $|\sin x|=|\cos x|$.`, [S`$\frac\pi4$`, S`$\frac{3\pi}4$`, S`$\frac{5\pi}4$`, S`$\frac{7\pi}4$`, S`$\frac\pi2$`], [0, 1, 2, 3], "|tan x| = 1 gives one angle in each quadrant."),
  num(S`How many solutions does $\sin x=\cos x$ have in $-2\pi\le x\le2\pi$?`, 4, "tan x = 1 at π/4 + nπ: −7π/4, −3π/4, π/4, 5π/4."),
  num(S`How many points do $y=\tan x$ and $y=\sin x$ share for $-2\pi\le x\le2\pi$?`, 5, "tan x = sin x means sin x(1/cos x − 1) = 0: sin x = 0 or cos x = 1, i.e. x = 0, ±π, ±2π."),
  mc(S`Which describes $y=\tan x$ on $\left(-\frac\pi2,\frac\pi2\right)$?`, "increasing everywhere", ["decreasing everywhere", "increasing then decreasing", "constant"], "On each branch tan x rises from −∞ to +∞."),
  tf(S`$\sin(x+\pi)=\sin x$ for every $x$.`, false, "A half-turn gives sin(x + π) = −sin x; e.g. x = π/2 gives −1, not 1."),
  tf(S`The graph of $y=\cos x$ is the graph of $y=\sin x$ reflected in the $y$-axis.`, false, "Reflecting sin x in the y-axis gives sin(−x) = −sin x, which is not cos x."),
  mc(S`The graph of $y=-\sin x$ is the same as which graph?`, S`$y=\sin(x+\pi)$`, [S`$y=\sin(-x+\pi)$`, S`$y=\cos(x+\pi)$`, S`$y=\sin\left(x+\frac\pi2\right)$`], "sin(x + π) = −sin x (half-turn)."),
  num(S`Find the average of $\sin x$ over the points $x=0,\frac\pi2,\pi,\frac{3\pi}2$.`, 0, "0 + 1 + 0 + (−1) = 0, so the average is 0: the curve is balanced about its axis."),
  num(S`The line $y=k$ meets $y=\sin x$ exactly once in $[0,2\pi)$. If $k>0$, find $k$.`, 1, "A horizontal line meets one cycle twice unless it touches only at the max (k = 1) or min."),
  mc("The graph shows y = cos x on [−2π, 2π]. How many maximum points are shown?", "3", ["2", "4", "1"], "Maximums at x = −2π, 0, 2π.", planeDoc(TG([[Math.cos, "green"]], W))),
  mc("The graph shows y = tan x. Which statement is true?", "It is increasing on every branch.", ["It has period 2π.", "Its range is [−1, 1].", "It has a zero at x = π/2."], "Each branch rises from −∞ to ∞; period π; zeros at nπ.", planeDoc(TG([[tan, "red"]], { xmin: -3.5, xmax: 6.8, ymin: -4, ymax: 4 }))),
  mc("The graph shows y = sin x and y = cos x. At the crossing in Q3, what is the y-value?", S`$-\frac{\sqrt2}2$`, [S`$\frac{\sqrt2}2$`, "−1", "0"], "They cross at 5π/4, where both equal −√2/2.", planeDoc(TG([[Math.sin, "violet"], [Math.cos, "green"]], V))),
  mc("The graph shows y = sin x and the line y = −0.5. Which are the solutions in [0, 2π]?", S`$\frac{7\pi}6,\ \frac{11\pi}6$`, [S`$\frac{5\pi}6,\ \frac{7\pi}6$`, S`$\frac{4\pi}3,\ \frac{5\pi}3$`, S`$\frac\pi6,\ \frac{5\pi}6$`], "Reference π/6, sine negative in Q3 and Q4.", planeDoc(TG([[Math.sin, "violet"], [() => -0.5, "blue"]], V))),
  num(S`Find the smallest positive $x$ with $\sin x=\sin\frac{2\pi}5$ and $x\ne\frac{2\pi}5$. Give $x$ to three decimals.`, (3 * Math.PI) / 5, "sin(π − x) = sin x: π − 2π/5 = 3π/5 ≈ 1.885.", null, 0.002),
  num(S`For $0\le x\le2\pi$, find the total length of the intervals where $\tan x>1$ (to two decimals).`, Math.PI / 2, "On each branch tan x > 1 from π/4 + nπ to π/2 + nπ: two intervals of length π/4.", null, 0.01),
  mc(S`Which function has period $\pi$?`, S`$y=|\sin x|$`, [S`$y=\sin x$`, S`$y=\cos x$`, S`$y=\sin x+\cos x$`], "|sin(x + π)| = |−sin x| = |sin x|."),
  tf("Every horizontal line meets the graph of y = tan x infinitely often.", true, "The range of tan x is all reals and it repeats every π."),
  mc(S`If $\cos a=0.2$, which must also equal $0.2$?`, S`$\cos(2\pi-a)$`, [S`$\cos(\pi-a)$`, S`$\cos(\pi+a)$`, S`$\sin(\pi-a)$`], "2π − a reflects a in the x-axis, so the x-coordinate is unchanged."),
  num(S`How many solutions does $\sin x=\frac x{10}$ have for $x\ge0$? (Hint: compare the line with the range of sine.)`, 4, "After x = 10 the line is above 1, so look only in [0, 10]: x = 0, one crossing near 2.85 in (0, π), and two in (2π, 3π) near 7.07 and 8.42."),
];
