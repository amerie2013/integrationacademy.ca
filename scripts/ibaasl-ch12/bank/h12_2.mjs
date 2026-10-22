// 12.2 The Unit Circle and Exact Values — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, unitPoint } from "../figs12.mjs";

const S = String.raw;
const PI = Math.PI;

export const TOPIC = "12.2 The Unit Circle and Exact Values";
export const Q = [
  num(S`$\tan\theta=\frac{33}{56}$ and $\sin\theta<0$. Find $\cos\theta$ (4 d.p.).`, -56 / 65, "Quadrant 3; 33-56-65.", figDoc({ items: unitPoint(PI + Math.atan(33 / 56), { label: "θ" }) }), 0.0001),
  num(S`$\sin\theta=-\frac{2}{3}$ and $\tan\theta>0$. Find $\cos\theta$ (4 d.p.).`, -Math.sqrt(5) / 3, "Quadrant 3.", null, 0.0001),
  num(S`Evaluate exactly $\sin^2\frac{2\pi}{3}+\cos^2\frac{5\pi}{4}$ (decimal).`, 1.25, "¾ + ½.", null, 0.001),
  num(S`Evaluate $\tan\frac{7\pi}{6}\cdot\tan\frac{5\pi}{3}$.`, -1, "(√3/3)(−√3)."),
  num(S`A point on the unit circle in quadrant 4 has x-coordinate 0.28. Find its y-coordinate.`, -0.96, "√(1 − 0.0784).", figDoc({ items: unitPoint(2 * PI - Math.acos(0.28), { label: "θ" }) }), 0.001),
  num(S`For the point above, find the angle in $[0,2\pi]$ (3 d.p.).`, Math.round((2 * PI - Math.acos(0.28)) * 1000) / 1000, "2π − cos⁻¹ 0.28.", null, 0.001),
  mc(S`If $\cos\alpha=k$ with α acute, then $\cos(\pi+\alpha)$ equals:`, S`$-k$`, [S`$k$`, S`$\sqrt{1-k^2}$`, S`$-\sqrt{1-k^2}$`], "Half-turn negates both coordinates."),
  mc(S`If $\sin\alpha=k$ with α acute, then $\cos\left(\frac{\pi}{2}+\alpha\right)$ equals:`, S`$-k$`, [S`$k$`, S`$\sqrt{1-k^2}$`, S`$-\sqrt{1-k^2}$`], "Rotate the point a quarter turn: (−sin α, cos α)."),
  num(S`How many θ in $[-\pi,3\pi]$ satisfy $\sin\theta=\frac{\sqrt3}{2}$?`, 4, "Two per turn, two turns."),
  ms(S`Which are true for every θ? Select all.`, [S`$\sin(-\theta)=-\sin\theta$`, S`$\cos(\pi-\theta)=-\cos\theta$`, S`$\tan(\pi+\theta)=\tan\theta$`, S`$\sin(\pi+\theta)=\sin\theta$`], [0, 1, 2], "sin(π + θ) = −sin θ."),
  tf(S`$\cos\theta=\sin\left(\frac{\pi}{2}-\theta\right)$ for every θ.`, true, "Complementary angles."),
  num(S`The line $y=\sqrt3x$ meets the unit circle in quadrant 3 at angle θ. Find θ (3 d.p.).`, Math.round(((4 * PI) / 3) * 1000) / 1000, "tan θ = √3 in quadrant 3: 4π/3.", null, 0.001),
  num(S`Evaluate $\cos\frac{\pi}{6}+\cos\frac{5\pi}{6}+\cos\frac{7\pi}{6}+\cos\frac{11\pi}{6}$.`, 0, "Symmetric pairs cancel."),
  mc("The diagram shows angle θ with sin θ = −5/13 in quadrant 3. Then tan θ is:", S`$\frac{5}{12}$`, [S`$-\frac{5}{12}$`, S`$\frac{12}{5}$`, S`$-\frac{12}{13}$`], "cos = −12/13.", figDoc({ items: unitPoint(PI + Math.asin(5 / 13), { label: "θ" }) })),
  num(S`Given $\cos\theta=\frac{1}{3}$ and θ in quadrant 4, find $\sin\theta+\tan\theta$ (3 d.p.).`, Math.round((-Math.sqrt(8) / 3 - Math.sqrt(8)) * 1000) / 1000, "sin = −2√2/3, tan = −2√2.", null, 0.001),
  num(S`Find the exact value of $\sin\frac{\pi}{3}\cos\frac{2\pi}{3}-\cos\frac{\pi}{3}\sin\frac{2\pi}{3}$ (4 d.p.).`, -Math.sqrt(3) / 2, "(√3/2)(−½) − (½)(√3/2).", null, 0.0001),
  mc(S`Which angle has the same sine as $\frac{2\pi}{7}$?`, S`$\frac{5\pi}{7}$`, [S`$\frac{9\pi}{7}$`, S`$-\frac{2\pi}{7}$`, S`$\frac{12\pi}{7}$`], "π − 2π/7."),
  num(S`Find the sum of all θ in $[0,2\pi]$ with $\cos\theta=-0.3$ (3 d.p.).`, Math.round(2 * PI * 1000) / 1000, "θ and 2π − θ sum to 2π.", null, 0.001),
  num(S`A point P on the unit circle has coordinates $(a,\ 2a)$ with $a<0$. Find $\sin\theta$ (4 d.p.).`, -2 / Math.sqrt(5), "5a² = 1.", figDoc({ items: unitPoint(PI + Math.atan(2), { label: "θ" }) }), 0.0001),
  tf(S`For every θ, $|\sin\theta|\le1$ and $|\cos\theta|\le1$.`, true, "Coordinates on a unit circle."),
];
