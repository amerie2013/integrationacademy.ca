// 4.2 Trigonometric Ratios and Special Angles — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, ARM } from "../trigfig.mjs";
const S = String.raw;

export const TOPIC = "4.2 Trigonometric Ratios and Special Angles";
export const Q = [
  num(S`Evaluate $\sec^2\frac{5\pi}6-\tan^2\frac{5\pi}6$.`, 1, "4/3 − 1/3."),
  num(S`Evaluate $\csc^2\frac{3\pi}4+\cot\frac{5\pi}4$.`, 3, "2 + 1."),
  num(S`Evaluate $\sin\frac{4\pi}3\cos\frac{5\pi}6+\cos\frac{4\pi}3\sin\frac{5\pi}6$ (2 decimals).`, 0.5, "(−√3/2)(−√3/2) + (−1/2)(1/2) = 3/4 − 1/4.", null, 0.001),
  num(S`Evaluate $\frac{\tan\frac{7\pi}4}{\sec\frac{2\pi}3}$.`, 0.5, "(−1)/(−2).", null, 0.001),
  mc(S`$\tan\theta=-\frac{8}{15}$ and $\sin\theta>0$. What is $\sec\theta$?`, S`$-\frac{17}{15}$`, [S`$\frac{17}{15}$`, S`$-\frac{17}8$`, S`$\frac{15}{17}$`], "Q2: x = −15, y = 8, r = 17."),
  mc(S`$\csc\theta=-\frac{25}{7}$ and $\cos\theta>0$. What is $\cot\theta$?`, S`$-\frac{24}7$`, [S`$\frac{24}7$`, S`$-\frac7{24}$`, S`$\frac{24}{25}$`], "Q4: y = −7, r = 25, x = 24."),
  mc(S`$\sec\theta=\sqrt5$ and $\sin\theta\lt0$. What is $\tan\theta$?`, "−2", ["2", S`$-\frac12$`, S`$\frac12$`], "Q4: x = 1, r = √5, y = −2."),
  mc(S`Find all $\theta$ in $[0,2\pi)$ with $2\sin\theta+\sqrt3=0$.`, S`$\frac{4\pi}3,\ \frac{5\pi}3$`, [S`$\frac\pi3,\ \frac{2\pi}3$`, S`$\frac{7\pi}6,\ \frac{11\pi}6$`, S`$\frac{5\pi}6,\ \frac{7\pi}6$`], "sin θ = −√3/2."),
  mc(S`Find all $\theta$ in $[0,2\pi)$ with $\sec\theta=2$.`, S`$\frac\pi3,\ \frac{5\pi}3$`, [S`$\frac\pi6,\ \frac{11\pi}6$`, S`$\frac{2\pi}3,\ \frac{4\pi}3$`, S`$\frac\pi3$`], "cos θ = 1/2."),
  mc(S`Find all $\theta$ in $[0,2\pi)$ with $\cot\theta=\sqrt3$.`, S`$\frac\pi6,\ \frac{7\pi}6$`, [S`$\frac\pi3,\ \frac{4\pi}3$`, S`$\frac\pi6,\ \frac{5\pi}6$`, S`$\frac{5\pi}6,\ \frac{11\pi}6$`], "tan θ = √3/3."),
  num(S`How many $\theta$ in $[0,4\pi)$ satisfy $\sin\theta=\frac{\sqrt2}2$?`, 4, "Two per turn."),
  num(S`What is $\tan\frac{37\pi}4$?`, 1, "37π/4 − 8π = 5π/4."),
  num(S`What is $\cos\frac{41\pi}6$, to 4 decimals?`, -0.866, "41π/6 − 6π = 5π/6.", null, 0.001),
  mc("The terminal arm passes through the marked point. Find csc θ + cot θ.", "−2", [S`$-\frac12$`, S`$\frac12$`, "2"], "r = 5: csc θ = −5/4 and cot θ = −3/4.", planeDoc(ARM(3, -4, "(3, −4)"))),
  mc("The marked point has y-coordinate −1/2 on the unit circle, in Q3. What is tan θ?", S`$\frac{\sqrt3}3$`, [S`$-\frac{\sqrt3}3$`, S`$\sqrt3$`, "1"], "θ = 7π/6.", planeDoc(UC(210, "θ"))),
  mc("Two points on the unit circle are marked. What is the sum of their angles in [0, 2π)?", S`$2\pi$`, [S`$\pi$`, S`$\frac{3\pi}2$`, S`$3\pi$`], "π/3 and 5π/3.", planeDoc(UC(60, "A", [{ x: 0.5, y: -Math.sqrt(3) / 2, label: "B", color: "blue" }]))),
  mc("A wheel of radius 2 m has a marked rim point at angle π/6 above the centre's level. How high above the centre is it?", "1 m", ["2 m", S`$\sqrt3$ m`, "0.5 m"], "2 sin(π/6).", planeDoc({ ...ARM(Math.sqrt(3), 1, "P") })),
  tf(S`If $\sin\theta=\cos\theta$, then $\theta$ must be $\frac\pi4$.`, false, "5π/4 also works."),
  tf(S`For every angle where both are defined, $\sin\theta\csc\theta=1$.`, true, "Reciprocals multiply to 1."),
  num(S`$\sin\theta=-\frac{\sqrt3}2$ and $\tan\theta\lt0$. What is $\cos\theta$, as a decimal?`, 0.5, "Q4: cos θ = 1/2.", null, 0.001),
];
