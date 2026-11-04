// 4.2 Trigonometric Ratios and Special Angles — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, ARM } from "../trigfig.mjs";
const S = String.raw;

export const E = [
  mc(S`What is $\sin\frac\pi6$?`, S`$\frac12$`, [S`$\frac{\sqrt3}2$`, S`$\frac{\sqrt2}2$`, "1"], "Special value."),
  mc(S`What is $\cos\frac\pi3$?`, S`$\frac12$`, [S`$\frac{\sqrt3}2$`, S`$\frac{\sqrt2}2$`, "0"], "Special value."),
  mc(S`What is $\tan\frac\pi4$?`, "1", ["0", S`$\sqrt3$`, S`$\frac{\sqrt3}3$`], "Equal legs."),
  mc(S`What is $\sin\frac\pi3$?`, S`$\frac{\sqrt3}2$`, [S`$\frac12$`, S`$\frac{\sqrt2}2$`, S`$\sqrt3$`], "Special value."),
  mc(S`What is $\tan\frac\pi6$?`, S`$\frac{\sqrt3}3$`, [S`$\sqrt3$`, "1", S`$\frac12$`], "(1/2) ÷ (√3/2)."),
  num(S`Evaluate $\cos0$.`, 1, "Point (1, 0)."),
  num(S`Evaluate $\sin\frac\pi2$.`, 1, "Point (0, 1)."),
  num(S`Evaluate $\cos\pi$.`, -1, "Point (−1, 0)."),
  num(S`Evaluate $\sin\pi$.`, 0, "Point (−1, 0)."),
  num(S`Evaluate $\sin\frac{3\pi}2$.`, -1, "Point (0, −1)."),
  mc("In which quadrant is cosine positive and sine negative?", "Q4", ["Q1", "Q2", "Q3"], "CAST."),
  mc("Which ratio is positive in Q3?", "tan", ["sin", "cos", "csc"], "CAST."),
  mc(S`What is the reference angle of $\frac{3\pi}4$?`, S`$\frac\pi4$`, [S`$\frac{3\pi}4$`, S`$\frac\pi2$`, S`$\frac\pi3$`], "π − 3π/4."),
  mc(S`What is the reference angle of $\frac{7\pi}6$?`, S`$\frac\pi6$`, [S`$\frac\pi3$`, S`$\frac{5\pi}6$`, S`$\frac\pi4$`], "7π/6 − π."),
  mc(S`Which is the reciprocal of $\sin\theta$?`, S`$\csc\theta$`, [S`$\sec\theta$`, S`$\cot\theta$`, S`$\sin^{-1}\theta$`], "csc = 1/sin."),
  mc(S`Which is the reciprocal of $\cos\theta$?`, S`$\sec\theta$`, [S`$\csc\theta$`, S`$\cot\theta$`, S`$\tan\theta$`], "sec = 1/cos."),
  fill("On the unit circle, the x-coordinate of the point at angle θ is ___ θ.", ["cos", "cosine"], "(cos θ, sin θ)."),
  tf(S`$\tan\frac\pi2$ is not defined.`, true, "cos(π/2) = 0."),
  mc("What is sin θ for the marked point?", S`$\frac12$`, [S`$-\frac12$`, S`$\frac{\sqrt3}2$`, S`$-\frac{\sqrt3}2$`], "y-coordinate at 150°.", planeDoc(UC(150, "θ"))),
  mc("What is cos θ for the marked point?", S`$-\frac{\sqrt2}2$`, [S`$\frac{\sqrt2}2$`, S`$\frac12$`, S`$-\frac12$`], "x-coordinate at 225°.", planeDoc(UC(225, "θ"))),
];

export const M = [
  mc(S`Find $\sin\frac{5\pi}6$.`, S`$\frac12$`, [S`$-\frac12$`, S`$\frac{\sqrt3}2$`, S`$-\frac{\sqrt3}2$`], "Q2, positive."),
  mc(S`Find $\cos\frac{2\pi}3$.`, S`$-\frac12$`, [S`$\frac12$`, S`$-\frac{\sqrt3}2$`, S`$\frac{\sqrt3}2$`], "Q2, negative."),
  mc(S`Find $\tan\frac{4\pi}3$.`, S`$\sqrt3$`, [S`$-\sqrt3$`, S`$\frac{\sqrt3}3$`, "1"], "Q3, positive."),
  mc(S`Find $\sin\frac{7\pi}4$.`, S`$-\frac{\sqrt2}2$`, [S`$\frac{\sqrt2}2$`, S`$-\frac12$`, "−1"], "Q4, negative."),
  mc(S`Find $\cos\frac{11\pi}6$.`, S`$\frac{\sqrt3}2$`, [S`$-\frac{\sqrt3}2$`, S`$\frac12$`, S`$-\frac12$`], "Q4, positive."),
  num(S`Evaluate $\csc\frac{5\pi}6$.`, 2, "1/(1/2)."),
  num(S`Evaluate $\sec\frac{5\pi}3$.`, 2, "1/(1/2)."),
  num(S`Evaluate $\cot\frac{3\pi}4$.`, -1, "1/(−1)."),
  num(S`Evaluate $\sec\pi$.`, -1, "1/(−1)."),
  num(S`Evaluate $\csc\frac{7\pi}6$.`, -2, "1/(−1/2)."),
  num(S`Evaluate $\sin\frac\pi6+\cos\frac\pi3$.`, 1, "1/2 + 1/2."),
  num(S`Evaluate $2\cos^2\frac\pi4$.`, 1, "2(1/2)."),
  num(S`Evaluate $\tan^2\frac\pi3$.`, 3, "(√3)²."),
  num(S`Evaluate $\sin^2\frac{2\pi}3$ (2 decimals).`, 0.75, "3/4.", null, 0.001),
  mc("The terminal arm passes through (−3, −4). What is sin θ?", S`$-\frac45$`, [S`$\frac45$`, S`$-\frac35$`, S`$\frac34$`], "y/r with r = 5.", planeDoc(ARM(-3, -4, "(−3, −4)"))),
  mc("The terminal arm passes through (12, −5). What is cos θ?", S`$\frac{12}{13}$`, [S`$-\frac{12}{13}$`, S`$\frac5{13}$`, S`$-\frac5{12}$`], "x/r with r = 13.", planeDoc(ARM(12, -5, "(12, −5)"))),
  mc(S`$\sin\theta=\frac35$ in Q2. What is $\cos\theta$?`, S`$-\frac45$`, [S`$\frac45$`, S`$-\frac35$`, S`$\frac34$`], "x is negative in Q2."),
  mc(S`$\cos\theta=-\frac5{13}$ in Q3. What is $\tan\theta$?`, S`$\frac{12}5$`, [S`$-\frac{12}5$`, S`$\frac5{12}$`, S`$-\frac{12}{13}$`], "(−12)/(−5)."),
  mc(S`How many $\theta$ in $[0,2\pi)$ satisfy $\cos\theta=\frac12$?`, "2", ["1", "3", "4"], "Q1 and Q4."),
  tf(S`$\csc\theta$ can equal $\frac12$.`, false, "|csc θ| ≥ 1."),
];
