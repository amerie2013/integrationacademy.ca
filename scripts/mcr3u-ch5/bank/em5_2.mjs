// 5.2 Angles from 0° to 360° — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { armD, unitD, acos, asin, atan, rd } from "./fig.mjs";

const S = String.raw;

export const E = [
  num("What is the related acute angle of 160°?", 20, "180° − 160°."),
  num("What is the related acute angle of 250°?", 70, "250° − 180°."),
  num("What is the related acute angle of 335°?", 25, "360° − 335°."),
  mc("In which quadrant does the terminal arm of 200° lie?", "Quadrant 3", ["Quadrant 2", "Quadrant 4", "Quadrant 1"], "Between 180° and 270°."),
  mc(S`What is the sign of $\sin300^\circ$?`, "negative", ["positive", "zero", "undefined"], "Quadrant 4: only cosine is positive."),
  mc(S`What is $\cos120^\circ$?`, S`$-\frac12$`, [S`$\frac12$`, S`$-\frac{\sqrt3}2$`, S`$\frac{\sqrt3}2$`], "Related 60°, Quadrant 2: cosine negative."),
  mc(S`What is $\tan135^\circ$?`, S`$-1$`, [S`$1$`, S`$-\sqrt3$`, S`$0$`], "Related 45°, Quadrant 2: tangent negative."),
  mc(S`What is $\sin240^\circ$?`, S`$-\frac{\sqrt3}2$`, [S`$\frac{\sqrt3}2$`, S`$-\frac12$`, S`$\frac12$`], "Related 60°, Quadrant 3: sine negative."),
  num("The point (6, 8) is on the terminal arm of θ. Find r.", 10, "√(36 + 64)."),
  num("The point (6, 8) is on the terminal arm of θ. Find cos θ.", 0.6, "x/r = 6/10."),
  num("The point (−3, −4) is on the terminal arm of θ. Find sin θ.", -0.8, "y/r = −4/5."),
  tf(S`$\tan270^\circ$ is undefined.`, true, "At 270°, x = 0."),
  num(S`Evaluate $\cos180^\circ$.`, -1, "The point (−1, 0)."),
  num(S`Evaluate $\sin360^\circ$.`, 0, "Back at (1, 0)."),
  mc("In which quadrant are both sin θ and cos θ negative?", "Quadrant 3", ["Quadrant 2", "Quadrant 4", "Quadrant 1"], "x < 0 and y < 0."),
  num("An angle in Quadrant 4 has related acute angle 40°. What is the angle?", 320, "360° − 40°."),
  num("An angle in Quadrant 2 has related acute angle 15°. What is the angle?", 165, "180° − 15°."),
  tf(S`$\cos100^\circ>0$.`, false, "100° is in Quadrant 2, where cosine is negative."),
  num("The terminal arm passes through the point shown. Find cos θ.", -0.6, "r = 10; x/r = −6/10.", armD(-6, 8, "(−6, 8)")),
  num("The figure shows the two angles with sin θ = ½. One is 30°. Enter the other in degrees.", 150, "180° − 30°.", unitD([[30, "30°"], [150, "?"]], { lines: [{ m: 0, b: 0.5, color: "amber", dash: true }] })),
];

export const M = [
  mc(S`Solve $\sin\theta=\frac12$ for $0^\circ\le\theta\le360^\circ$.`, "30°, 150°", ["30°, 330°", "60°, 120°", "30°, 210°"], "Sine positive in Q1 and Q2."),
  mc(S`Solve $\cos\theta=\frac12$ for $0^\circ\le\theta\le360^\circ$.`, "60°, 300°", ["60°, 120°", "30°, 330°", "60°, 240°"], "Cosine positive in Q1 and Q4."),
  mc(S`Solve $\tan\theta=\sqrt3$ for $0^\circ\le\theta\le360^\circ$.`, "60°, 240°", ["60°, 120°", "60°, 300°", "30°, 210°"], "Tangent positive in Q1 and Q3."),
  num(S`$\sin\theta=0.8$. Give the obtuse solution between 0° and 180°, to 1 decimal.`, rd(180 - asin(0.8), 1), "180° − sin⁻¹ 0.8.", null, 0.05),
  num(S`$\cos\theta=-0.3$. Give the smaller solution between 0° and 360°, to 1 decimal.`, rd(acos(-0.3), 1), "cos⁻¹(−0.3) is in Quadrant 2.", null, 0.05),
  num(S`$\tan\theta=-1.5$. Give the solution in Quadrant 4, to 1 decimal.`, rd(360 - atan(1.5), 1), "360° − tan⁻¹ 1.5.", null, 0.05),
  num("The point (−7, 24) is on the terminal arm of θ. Find θ to 1 decimal.", rd(180 - atan(24 / 7), 1), "Related tan⁻¹(24/7); Quadrant 2.", null, 0.05),
  num("The point (−2, −5) is on the terminal arm of θ. Find θ to 1 decimal.", rd(180 + atan(2.5), 1), "Related tan⁻¹ 2.5; Quadrant 3.", null, 0.05),
  num(S`Evaluate $\sin120^\circ+\cos330^\circ$ to 2 decimals.`, rd(Math.sqrt(3)), "√3/2 + √3/2 = √3.", null, 0.01),
  mc(S`Evaluate $\cos210^\circ\tan225^\circ$.`, S`$-\frac{\sqrt3}2$`, [S`$\frac{\sqrt3}2$`, S`$-\frac12$`, S`$1$`], "(−√3/2)(1)."),
  num(S`$\sin\theta=\frac5{13}$ and θ is in Quadrant 2. Find $\cos\theta$ to 4 decimals.`, rd(-12 / 13, 4), "x = −12.", null, 0.0001),
  num(S`$\cos\theta=\frac35$ and $\sin\theta<0$. Find $\tan\theta$ to 4 decimals.`, rd(-4 / 3, 4), "Quadrant 4: y = −4.", null, 0.0001),
  ms("Which are negative? Select all.", [S`$\sin200^\circ$`, S`$\cos100^\circ$`, S`$\tan300^\circ$`, S`$\cos340^\circ$`, S`$\sin170^\circ$`], [0, 1, 2], "Use CAST for each quadrant."),
  tf(S`$\sin160^\circ=\sin20^\circ$.`, true, "Related angle 20°, sine positive in Q2."),
  tf(S`$\cos160^\circ=\cos20^\circ$.`, false, "cos 160° = −cos 20°."),
  num(S`What is the sum of the two solutions of $\cos\theta=0.2$ between 0° and 360°?`, 360, "They are β and 360° − β."),
  num(S`Find θ between 0° and 360° with $\sin\theta=-1$.`, 270, "The point (0, −1)."),
  mc(S`If $\tan\theta>0$ and $\cos\theta<0$, where is the terminal arm?`, "Quadrant 3", ["Quadrant 2", "Quadrant 4", "Quadrant 1"], "Only tangent positive: Q3."),
  num("Find θ to 1 decimal.", rd(360 - atan(12 / 5), 1), "Related tan⁻¹(12/5); Quadrant 4.", armD(5, -12, "(5, −12)"), 0.05),
  num("Both arms in the figure have the same cosine. What is it, to 4 decimals?", rd(-Math.SQRT1_2, 4), "cos 135° = cos 225° = −1/√2.", unitD([[135, "135°"], [225, "225°"]]), 0.0001),
];
