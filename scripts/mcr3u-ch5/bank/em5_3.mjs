// 5.3 Reciprocal Ratios and Trigonometric Identities — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { armD, rightD, sin, cos, tan, rd } from "./fig.mjs";

const S = String.raw;

export const E = [
  num(S`Evaluate $\csc30^\circ$.`, 2, "1 ÷ ½."),
  num(S`Evaluate $\sec0^\circ$.`, 1, "1 ÷ cos 0°."),
  mc(S`What is $\cot45^\circ$?`, S`$1$`, [S`$0$`, S`$\sqrt2$`, "undefined"], "1 ÷ tan 45°."),
  mc(S`What is $\sec45^\circ$?`, S`$\sqrt2$`, [S`$\frac1{\sqrt2}$`, S`$2$`, S`$1$`], "1 ÷ (1/√2)."),
  mc(S`What is $\csc60^\circ$?`, S`$\frac2{\sqrt3}$`, [S`$\frac{\sqrt3}2$`, S`$2$`, S`$\sqrt3$`], "1 ÷ (√3/2)."),
  mc(S`What is $\cot60^\circ$?`, S`$\frac1{\sqrt3}$`, [S`$\sqrt3$`, S`$2$`, S`$\frac12$`], "1 ÷ √3."),
  mc(S`Which equals $\csc\theta$?`, S`$\frac1{\sin\theta}$`, [S`$\frac1{\cos\theta}$`, S`$\sin^{-1}\theta$`, S`$\frac1{\tan\theta}$`], "Cosecant is the reciprocal of sine."),
  mc(S`In a right triangle, $\sec\theta$ equals which ratio?`, "hyp/adj", ["adj/hyp", "hyp/opp", "opp/adj"], "Reciprocal of adj/hyp."),
  num("A right triangle has sides 5, 12 and 13, with ∠A opposite 5. Find csc A.", 2.6, "13/5."),
  num("In the same 5–12–13 triangle, find sec A to 4 decimals.", rd(13 / 12, 4), "13/12.", null, 0.0001),
  num("In the same 5–12–13 triangle, find cot A.", 2.4, "12/5."),
  num(S`Evaluate $\sec70^\circ$ to 4 decimals.`, rd(1 / cos(70), 4), "1 ÷ cos 70°.", null, 0.0001),
  num(S`Evaluate $\csc25^\circ$ to 4 decimals.`, rd(1 / sin(25), 4), "1 ÷ sin 25°.", null, 0.0001),
  num(S`Evaluate $\cot55^\circ$ to 4 decimals.`, rd(1 / tan(55), 4), "1 ÷ tan 55°.", null, 0.0001),
  tf(S`$\tan\theta=\frac{\sin\theta}{\cos\theta}$ is an identity.`, true, "It holds wherever cos θ ≠ 0."),
  tf(S`$\csc\theta$ means the same as $\sin^{-1}\theta$.`, false, "sin⁻¹ is an inverse (gives an angle); csc is a reciprocal."),
  num(S`$\sin\theta=0.25$. Find $\csc\theta$.`, 4, "1 ÷ 0.25."),
  mc(S`For every angle, $\sin^2\theta+\cos^2\theta=$`, S`$1$`, [S`$0$`, S`$2$`, S`$\tan^2\theta$`], "The Pythagorean identity."),
  num("Find csc A for the triangle shown (A at the left).", 2.125, "hyp/opp = 17/8.", rightD(15, 8, ["A", "", ""], [[7.5, 0, "15"], [15, 4, "8"], [7, 5, "17"]])),
  num("The point shown is on the terminal arm of θ. Find sec θ to 4 decimals.", rd(-5 / 3, 4), "r = 5; r/x = 5/(−3).", armD(-3, 4, "(−3, 4)"), 0.0001),
];

export const M = [
  mc(S`Simplify $\sin\theta\sec\theta$.`, S`$\tan\theta$`, [S`$\cos\theta$`, S`$1$`, S`$\cot\theta$`], "sin θ · 1/cos θ."),
  mc(S`Simplify $\cos\theta\csc\theta$.`, S`$\cot\theta$`, [S`$\tan\theta$`, S`$1$`, S`$\sec\theta$`], "cos θ · 1/sin θ."),
  mc(S`Simplify $\tan\theta\cot\theta$.`, S`$1$`, [S`$\tan^2\theta$`, S`$\sin\theta\cos\theta$`, S`$0$`], "Reciprocals multiply to 1."),
  mc(S`Simplify $\dfrac{1-\cos^2\theta}{\sin\theta}$.`, S`$\sin\theta$`, [S`$\cos\theta$`, S`$1$`, S`$\sin^2\theta$`], "Numerator is sin² θ."),
  mc(S`Simplify $\sec^2\theta-\tan^2\theta$.`, S`$1$`, [S`$0$`, S`$\cos^2\theta$`, S`$\sec\theta$`], "1 + tan² θ = sec² θ."),
  mc(S`Simplify $\dfrac{\sin\theta}{\csc\theta}$.`, S`$\sin^2\theta$`, [S`$1$`, S`$\cos\theta$`, S`$\tan\theta$`], "sin θ ÷ (1/sin θ)."),
  num(S`θ is acute and $\cos\theta=0.6$. Find $\csc\theta$.`, 1.25, "sin θ = 0.8."),
  num(S`θ is acute and $\tan\theta=0.75$. Find $\sec\theta$.`, 1.25, "1 + 0.5625 = 1.5625 = sec² θ."),
  num(S`$\sin\theta=-0.28$ and θ is in Quadrant 4. Find $\cos\theta$.`, 0.96, "√(1 − 0.0784), positive in Q4."),
  num(S`$\cos\theta=-0.8$ and θ is in Quadrant 2. Find $\cot\theta$ to 4 decimals.`, rd(-0.8 / 0.6, 4), "sin θ = 0.6; cot = cos/sin.", null, 0.0001),
  num(S`Evaluate $\sec^2 30^\circ$ to 4 decimals.`, rd(4 / 3, 4), "(2/√3)² = 4/3.", null, 0.0001),
  num(S`Evaluate $\csc^2 45^\circ+\cot^2 45^\circ$.`, 3, "2 + 1."),
  num(S`$\csc\theta=2$ and θ is in Quadrant 2. Find θ.`, 150, "sin θ = ½."),
  num(S`$\cot\theta=1$ and θ is in Quadrant 3. Find θ.`, 225, "tan θ = 1."),
  tf(S`$1+\tan^2\theta=\sec^2\theta$ is an identity.`, true, "Divide sin² θ + cos² θ = 1 by cos² θ."),
  tf(S`$\sin\theta+\cos\theta=1$ for every angle θ.`, false, "At 45° the left side is √2."),
  mc(S`Which angle shows that $(\sin\theta+\cos\theta)^2=1$ is NOT an identity?`, "45°", ["0°", "90°", "180°"], "At 45°: (√2)² = 2."),
  ms("Which are identities? Select all.", [S`$\tan\theta\cos\theta=\sin\theta$`, S`$\sec\theta\sin\theta=\tan\theta$`, S`$\csc\theta\cos\theta=\tan\theta$`, S`$\sin^2\theta=1-\cos^2\theta$`], [0, 1, 3], "csc θ cos θ = cot θ."),
  num("Find cot θ for the triangle shown, to 4 decimals.", rd(24 / 7, 4), "adj/opp = 24/7.", rightD(24, 7, ["θ", "", ""], [[12, 0, "24"], [24, 3.5, "7"]]), 0.0001),
  num("The point shown is on the terminal arm of θ. Find csc θ.", -2.6, "r = 13; r/y = 13/(−5).", armD(12, -5, "(12, −5)")),
];
