// 5.3 Sinusoidal Functions — 20 hard questions
import { mc, num, tf, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const P = Math.PI;
const V = (ymin, ymax, xmax = 7, xmin = -0.5) => ({ xmin, xmax, ymin, ymax });

export const TOPIC = "5.3 Sinusoidal Functions";
export const Q = [
  mc(S`A sinusoid has a maximum at $\left(\frac\pi4,5\right)$ and the next minimum at $\left(\frac{3\pi}4,-1\right)$. Which equation fits?`, S`$y=3\cos\left(2\left(x-\frac\pi4\right)\right)+2$`, [S`$y=3\cos\left(x-\frac\pi4\right)+2$`, S`$y=6\cos\left(2\left(x-\frac\pi4\right)\right)-1$`, S`$y=3\sin\left(2\left(x-\frac\pi4\right)\right)+2$`], "c = 2, a = 3; max to min is π/2, so the period is π and k = 2; cosine starts at the max."),
  mc(S`Write $y=3\cos\left(2\left(x-\frac\pi4\right)\right)+2$ as a sine function.`, S`$y=3\sin2x+2$`, [S`$y=3\sin\left(2x-\frac\pi4\right)+2$`, S`$y=-3\sin2x+2$`, S`$y=3\sin\left(2x+\frac\pi2\right)+2$`], "cos(2x − π/2) = sin 2x."),
  mc(S`A sinusoid has a minimum at $(2,-7)$ and the next maximum at $(5,1)$. Which equation fits?`, S`$y=-4\cos\left(\frac\pi3(x-2)\right)-3$`, [S`$y=4\cos\left(\frac\pi3(x-2)\right)-3$`, S`$y=-4\cos\left(\frac\pi6(x-2)\right)-3$`, S`$y=-8\cos\left(\frac\pi3(x-2)\right)-3$`], "c = −3, a = 4; min to max is 3, so the period is 6 and k = π/3; −cos starts at a min."),
  num(S`For $y=-4\cos\left(\frac\pi3(x-2)\right)-3$, find $y$ at $x=3.5$.`, -3, "π/3(1.5) = π/2 and cos(π/2) = 0, so y = −3 (the axis)."),
  ms(S`Select every equation whose graph is the same as $y=\cos x$.`, [S`$y=\sin\left(x+\frac\pi2\right)$`, S`$y=-\cos(x+\pi)$`, S`$y=\cos(x-2\pi)$`, S`$y=\sin\left(x-\frac\pi2\right)$`, S`$y=-\sin\left(x-\frac\pi2\right)$`], [0, 1, 2, 4], "sin(x − π/2) = −cos x, so its negative is cos x; the others follow from shifts of π/2, π and 2π."),
  num(S`For $y=3\sin(4x-\pi)+1$, find the smallest $x>0$ where $y$ is a maximum (three decimals).`, (3 * P) / 8, "4x − π = π/2 gives x = 3π/8 ≈ 1.178.", null, 0.002),
  num(S`For $y=2\cos\left(\frac x2+\frac\pi4\right)$, find the phase shift as a signed number (three decimals; left is negative).`, -P / 2, "x/2 + π/4 = (1/2)(x + π/2): shift π/2 left.", null, 0.002),
  mc(S`How many maximum points does $y=\sin5x$ have on $[0,2\pi]$?`, "5", ["2", "10", "1"], "Period 2π/5, so five full cycles, each with one max."),
  tf(S`The graphs of $y=\sin(2x)$ and $y=\sin\left(2\left(x+\pi\right)\right)$ are identical.`, true, "The period of sin 2x is π, so shifting by π moves the graph exactly one full period onto itself."),
  tf(S`If $a<0$ in $y=a\cos x+c$, the curve has a maximum at $x=0$.`, false, "a cos 0 = a < 0 is the lowest value, so x = 0 is a minimum."),
  mc(S`Which value of $c$ makes $y=2\sin x+c$ touch the $x$-axis without crossing it?`, "2 or −2", ["0", "1", "4"], "The curve touches y = 0 when its min (c − 2) or max (c + 2) is 0."),
  num(S`The graph of $y=a\sin(kx)$ passes through $\left(\frac\pi6,3\right)$ at its first maximum. If $a=3$, find $k$.`, 3, "The first max of sin kx is at kx = π/2, so k(π/6) = π/2 and k = 3."),
  mc("The graph shows a sinusoid. Which equation fits?", S`$y=2\sin\left(\frac\pi2x\right)+3$`, [S`$y=2\sin(2x)+3$`, S`$y=3\sin\left(\frac\pi2x\right)+2$`, S`$y=2\cos\left(\frac\pi2x\right)+3$`], "Axis 3, amplitude 2, period 4 (k = π/2), rising through the axis at x = 0.", planeDoc(TG([[(x) => 2 * Math.sin((P / 2) * x) + 3, "violet"]], V(0, 6, 9), [], { step: { x: 1, y: 1 }, xlabel: "x" }))),
  mc("The graph shows a sinusoid. What is its phase shift as a cosine (smallest positive)?", S`$\frac\pi3$`, [S`$\frac\pi6$`, S`$\frac{2\pi}3$`, "0"], "Its first maximum is at x = π/3.", planeDoc(TG([[(x) => Math.cos(x - P / 3), "green"]], V(-2, 2), [{ x: P / 3, y: 1, label: "max" }]))),
  mc("The graph shows two sinusoids. The violet one is the green one after which transformation?", "horizontal compression by 1/2", ["vertical stretch by 2", "shift right π", "reflection in the x-axis"], "Same height; the violet one completes two cycles in 2π.", planeDoc(TG([[Math.sin, "green"], [(x) => Math.sin(2 * x), "violet"]], V(-2, 2)))),
  mc("The graph shows y = a cos(k(x − d)) + c. What is c?", "−1", ["1", "2", "−3"], "Max 1 and min −3 give c = (1 + (−3))/2 = −1.", planeDoc(TG([[(x) => 2 * Math.cos(x) - 1, "violet"]], V(-4, 2)))),
  num(S`Find the total number of $x$ in $[0,2\pi]$ where $3\sin2x+1=4$.`, 2, "sin 2x = 1 once per period π: x = π/4 and 5π/4."),
  num(S`For $y=a\cos x+c$ with maximum $10$ and minimum $4$, find $a\cdot c$ if $a>0$.`, 21, "a = 3, c = 7, product 21."),
  mc(S`If $y=\sin x$ is stretched horizontally by 2 and then shifted right $\frac\pi2$, which equation results?`, S`$y=\sin\left(\frac12\left(x-\frac\pi2\right)\right)$`, [S`$y=\sin\left(2\left(x-\frac\pi2\right)\right)$`, S`$y=\sin\left(\frac12x-\frac\pi2\right)$`, S`$y=2\sin\left(x-\frac\pi2\right)$`], "A horizontal stretch by 2 is k = 1/2; the shift goes inside as (x − π/2), after factoring."),
  tf(S`$y=\sin\left(\frac12x-\frac\pi2\right)$ has phase shift $\frac\pi2$ right.`, false, "Factor: (1/2)(x − π), so the shift is π right."),
];
