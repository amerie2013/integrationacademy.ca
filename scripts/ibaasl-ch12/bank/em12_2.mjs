// 12.2 The Unit Circle and Exact Values — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { figDoc, unitPoint } from "../figs12.mjs";

const S = String.raw;
const PI = Math.PI;

export const E = [
  mc("On the unit circle, the point at angle θ is:", S`$(\cos\theta,\sin\theta)$`, [S`$(\sin\theta,\cos\theta)$`, S`$(\tan\theta,1)$`, S`$(1,\theta)$`], "x = cos, y = sin."),
  mc(S`$\sin\frac{\pi}{2}$ equals:`, "1", ["0", "−1", "½"], "Point (0, 1)."),
  mc(S`$\cos\pi$ equals:`, "−1", ["0", "1", "½"], "Point (−1, 0)."),
  mc(S`$\cos\frac{\pi}{3}$ equals:`, S`$\frac12$`, [S`$\frac{\sqrt3}{2}$`, S`$\frac{\sqrt2}{2}$`, "1"], "Exact value."),
  mc(S`$\tan\frac{\pi}{4}$ equals:`, "1", ["0", S`$\sqrt3$`, S`$\frac{\sqrt3}{3}$`], "sin = cos."),
  num(S`Find $\sin\frac{\pi}{6}$ (decimal).`, 0.5, "Exact value.", null, 0.001),
  num(S`Find $\cos\frac{3\pi}{2}$.`, 0, "Point (0, −1)."),
  num(S`Find $\sin\frac{5\pi}{6}$ (decimal).`, 0.5, "Quadrant 2.", null, 0.001),
  num(S`Find $\cos\frac{2\pi}{3}$ (decimal).`, -0.5, "Quadrant 2.", null, 0.001),
  num(S`Find $\tan\frac{3\pi}{4}$.`, -1, "Quadrant 2."),
  tf("In quadrant 2, sine is positive.", true, "CAST: S."),
  tf("In quadrant 3, cosine is positive.", false, "Only tan is positive."),
  tf(S`$\sin(\theta+2\pi)=\sin\theta$ for all θ.`, true, "Full turn."),
  fill("The acute angle between the terminal arm and the x-axis is called the ___ angle.", ["reference", "Reference"], "Reference angle."),
  ms("In which quadrants is cos θ negative? Select all.", ["2", "3", "1", "4"], [0, 1], "Left half."),
  mc("The point shown is at angle:", S`$\frac{2\pi}{3}$`, [S`$\frac{\pi}{3}$`, S`$\frac{4\pi}{3}$`, S`$\frac{5\pi}{6}$`], "(−½, √3/2).", figDoc({ items: unitPoint((2 * PI) / 3, { label: "?" }) })),
  mc("For the point shown, sin θ is:", "negative", ["positive", "zero", "1"], "Below the x-axis.", figDoc({ items: unitPoint((5 * PI) / 4, { label: "θ" }) })),
  num(S`The reference angle of $\frac{7\pi}{6}$ is $\frac{\pi}{k}$. Find k.`, 6, "7π/6 − π."),
  num(S`Find $\cos2\pi$.`, 1, "Full turn."),
  mc(S`Where is $\tan\theta$ not defined in $[0,2\pi]$?`, S`$\frac{\pi}{2}$ and $\frac{3\pi}{2}$`, [S`$0$ and $\pi$`, S`$\frac{\pi}{4}$ only`, "nowhere"], "cos = 0."),
];

export const M = [
  num(S`Find $\sin\frac{4\pi}{3}$ (4 d.p.).`, -Math.sqrt(3) / 2, "Quadrant 3.", null, 0.0001),
  num(S`Find $\cos\frac{7\pi}{4}$ (4 d.p.).`, Math.SQRT2 / 2, "Quadrant 4.", null, 0.0001),
  num(S`Find $\tan\frac{5\pi}{3}$ (4 d.p.).`, -Math.sqrt(3), "Quadrant 4.", null, 0.0001),
  num(S`Find $\sin\left(-\frac{3\pi}{4}\right)$ (4 d.p.).`, -Math.SQRT2 / 2, "Quadrant 3.", null, 0.0001),
  num(S`Find $\cos\frac{25\pi}{6}$ (4 d.p.).`, Math.sqrt(3) / 2, "Subtract 4π.", null, 0.0001),
  num(S`$\sin\theta=\frac{9}{41}$, θ in quadrant 2. Find $\cos\theta$ (4 d.p.).`, -40 / 41, "9-40-41.", null, 0.0001),
  num(S`$\cos\theta=-\frac{12}{13}$, θ in quadrant 3. Find $\tan\theta$ (4 d.p.).`, 5 / 12, "sin = −5/13.", null, 0.0001),
  num(S`$\tan\theta=-\frac{4}{3}$, θ in quadrant 4. Find $\cos\theta$.`, 0.6, "3-4-5, cos positive.", null, 0.001),
  mc(S`If $\sin\theta<0$ and $\cos\theta<0$, θ is in quadrant:`, "3", ["1", "2", "4"], "Both negative."),
  mc(S`The angles in $[0,2\pi]$ with $\sin\theta=-\frac12$ are:`, S`$\frac{7\pi}6,\frac{11\pi}6$`, [S`$\frac{\pi}6,\frac{5\pi}6$`, S`$\frac{4\pi}3,\frac{5\pi}3$`, S`$\frac{7\pi}6,\frac{5\pi}6$`], "Quadrants 3, 4."),
  mc(S`The angles in $[0,2\pi]$ with $\tan\theta=\frac{\sqrt3}{3}$ are:`, S`$\frac{\pi}6,\frac{7\pi}6$`, [S`$\frac{\pi}3,\frac{4\pi}3$`, S`$\frac{\pi}6,\frac{5\pi}6$`, S`$\frac{\pi}6$ only`], "Period π."),
  tf(S`$\cos(-\theta)=\cos\theta$ for every θ.`, true, "Reflection in the x-axis."),
  tf(S`$\sin(\pi-\theta)=-\sin\theta$.`, false, "It equals sin θ."),
  ms(S`Which equal $-\frac{\sqrt2}{2}$? Select all.`, [S`$\cos\frac{3\pi}{4}$`, S`$\sin\frac{5\pi}{4}$`, S`$\sin\frac{7\pi}{4}$`, S`$\cos\frac{7\pi}{4}$`], [0, 1, 2], "cos 7π/4 is positive."),
  mc("The point shown has coordinates (−0.8, −0.6). Then tan θ is:", "0.75", ["−0.75", "1.33", "−1.33"], "−0.6/−0.8.", figDoc({ items: unitPoint(PI + Math.atan(0.75), { label: "θ" }) })),
  mc("The point shown is at θ with sin θ = 0.6 in quadrant 2. Then cos θ is:", "−0.8", ["0.8", "0.6", "−0.6"], "Pythagoras; negative.", figDoc({ items: unitPoint(PI - Math.asin(0.6), { label: "θ" }) })),
  num(S`Evaluate $\sin\frac{\pi}{4}\cos\frac{\pi}{4}+\sin\frac{\pi}{6}$ (decimal).`, 1, "½ + ½."),
  num(S`How many θ in $[0,2\pi]$ have $\cos\theta=0$?`, 2, "π/2, 3π/2."),
  num(S`If $\sin\alpha=0.25$ (α acute), find $\sin(2\pi-\alpha)$.`, -0.25, "Quadrant 4.", null, 0.001),
  num(S`Find the reference angle (degrees) of 290°.`, 70, "360 − 290."),
];
