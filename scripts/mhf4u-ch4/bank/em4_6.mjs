// 4.6 Proving Trigonometric Identities — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;

export const E = [
  mc(S`Which equals $\tan x$?`, S`$\frac{\sin x}{\cos x}$`, [S`$\frac{\cos x}{\sin x}$`, S`$\sin x\cos x$`, S`$\frac1{\sin x}$`], "Quotient identity."),
  mc(S`Which equals $\cot x$?`, S`$\frac{\cos x}{\sin x}$`, [S`$\frac{\sin x}{\cos x}$`, S`$\frac1{\cos x}$`, S`$\sin x\cos x$`], "Quotient identity."),
  mc(S`Which equals $\sec x$?`, S`$\frac1{\cos x}$`, [S`$\frac1{\sin x}$`, S`$\frac1{\tan x}$`, S`$\cos x$`], "Reciprocal."),
  mc(S`Which equals $\csc x$?`, S`$\frac1{\sin x}$`, [S`$\frac1{\cos x}$`, S`$\frac1{\tan x}$`, S`$\sin x$`], "Reciprocal."),
  mc(S`Which equals $1-\sin^2x$?`, S`$\cos^2x$`, [S`$\sin^2x$`, S`$\tan^2x$`, "1"], "Pythagorean."),
  mc(S`Which equals $1-\cos^2x$?`, S`$\sin^2x$`, [S`$\cos^2x$`, S`$\cot^2x$`, "0"], "Pythagorean."),
  mc(S`Which equals $1+\tan^2x$?`, S`$\sec^2x$`, [S`$\csc^2x$`, S`$\cot^2x$`, "1"], "Pythagorean."),
  mc(S`Which equals $1+\cot^2x$?`, S`$\csc^2x$`, [S`$\sec^2x$`, S`$\tan^2x$`, "1"], "Pythagorean."),
  mc(S`Simplify $\sin x\csc x$.`, "1", [S`$\sin^2x$`, "0", S`$\cos x$`], "Reciprocals."),
  mc(S`Simplify $\cos x\sec x$.`, "1", [S`$\cos^2x$`, "0", S`$\sin x$`], "Reciprocals."),
  mc(S`Simplify $\tan x\cos x$.`, S`$\sin x$`, [S`$\cos x$`, S`$\tan^2x$`, "1"], "Quotient identity."),
  mc(S`Simplify $\cot x\sin x$.`, S`$\cos x$`, [S`$\sin x$`, S`$\cot^2x$`, "1"], "Quotient identity."),
  num(S`Evaluate $\sin^2x+\cos^2x$ when $x=2.7$.`, 1, "An identity holds for every x."),
  tf("An identity is true for all values where both sides are defined.", true, "Definition."),
  tf("One value where both sides agree proves an identity.", false, "It is only evidence."),
  tf("One value where both sides disagree disproves an identity.", true, "A counterexample."),
  tf("In a proof you may move terms across the equals sign.", false, "Work on each side separately."),
  fill("A value that shows a claim is false is called a ___.", ["counterexample", "counter example"], "One is enough."),
  mc("Both sides of an equation are graphed and they are the same curve. What does this show?", "the claim is plausible, but it is not proved", ["the claim is proved", "the claim is false", "nothing at all"], "A graph is evidence.", planeDoc(TG([[Math.sin, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("The two sides of a claimed identity are graphed in different colours. What can you conclude?", "the claim is false", ["the claim is true", "the claim is an identity at x = 0 only", "nothing"], "Different curves disprove it.", planeDoc(TG([[(x) => Math.sin(2 * x), "violet"], [(x) => 2 * Math.sin(x), "green"]], { xmin: -6.5, xmax: 6.5, ymin: -3, ymax: 3 }))),
];

export const M = [
  mc(S`Simplify $\dfrac{\sin^2x}{1-\cos x}$.`, S`$1+\cos x$`, [S`$1-\cos x$`, S`$\sin x$`, S`$\cos x$`], "(1 − cos x)(1 + cos x)/(1 − cos x)."),
  mc(S`Simplify $\dfrac{\cos^2x}{1+\sin x}$.`, S`$1-\sin x$`, [S`$1+\sin x$`, S`$\cos x$`, S`$\sin x$`], "(1 − sin x)(1 + sin x)/(1 + sin x)."),
  mc(S`Simplify $\sec^2x-\tan^2x$.`, "1", ["0", S`$\sec x$`, S`$2\tan^2x$`], "Pythagorean."),
  mc(S`Simplify $\csc^2x-1$.`, S`$\cot^2x$`, [S`$\tan^2x$`, S`$\sec^2x$`, "1"], "Pythagorean."),
  mc(S`Simplify $\sin^2x\cot^2x$.`, S`$\cos^2x$`, [S`$\sin^2x$`, "1", S`$\tan^2x$`], "cos²x/sin²x · sin²x."),
  mc(S`Simplify $\tan x+\cot x$.`, S`$\sec x\csc x$`, ["1", S`$\sin x\cos x$`, S`$\sec x+\csc x$`], "(sin²x + cos²x)/(sin x cos x)."),
  mc(S`Simplify $\dfrac{\sec x}{\csc x}$.`, S`$\tan x$`, [S`$\cot x$`, S`$\sin x$`, "1"], "(1/cos x)(sin x)."),
  mc(S`Simplify $\dfrac{1}{1-\sin x}+\dfrac{1}{1+\sin x}$.`, S`$2\sec^2x$`, [S`$2\csc^2x$`, S`$\sec^2x$`, "2"], "2/(1 − sin²x)."),
  mc(S`Simplify $\cos^4x-\sin^4x$.`, S`$\cos2x$`, ["1", S`$\sin2x$`, S`$\cos^2x$`], "Difference of squares."),
  mc(S`Simplify $(1+\tan^2x)\cos^2x$.`, "1", [S`$\sin^2x$`, S`$\sec^2x$`, S`$\tan^2x$`], "sec²x cos²x."),
  mc(S`Simplify $\dfrac{\sin2x}{\sin x}$.`, S`$2\cos x$`, [S`$2\sin x$`, "2", S`$\cos x$`], "2 sin x cos x / sin x."),
  mc(S`Simplify $\dfrac{1-\cos2x}{2}$.`, S`$\sin^2x$`, [S`$\cos^2x$`, S`$\sin x$`, "1"], "2 sin²x / 2."),
  mc(S`Simplify $\sin x\cos y+\cos x\sin y$ when $y=\frac\pi2-x$.`, "1", ["0", S`$\sin2x$`, S`$\cos2x$`], "sin(x + y) = sin(π/2)."),
  mc(S`Which value shows that $\cos2x=2\cos x$ is false?`, S`$x=0$`, ["there is no such value", "the claim is true for every x", "the claim is true for every x except 0"], "1 ≠ 2."),
  mc(S`Which value shows that $\sin x+\cos x=1$ is not an identity?`, S`$x=\frac\pi4$`, [S`$x=0$`, S`$x=\frac\pi2$`, S`$x=2\pi$`], "√2 ≠ 1.", planeDoc(TG([[(x) => Math.sin(x) + Math.cos(x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  num(S`Evaluate $\tan^2x-\sec^2x$ for any $x$ where it is defined.`, -1, "1 + tan²x = sec²x."),
  num(S`Evaluate $\dfrac{\sin^2x}{1+\cos x}+\cos x$ for any allowed $x$.`, 1, "1 − cos x + cos x."),
  num(S`Evaluate $(\sin x+\cos x)^2+(\sin x-\cos x)^2$.`, 2, "Middle terms cancel."),
  mc("Which equation does this graph support?", S`$\sin^2x=\frac{1-\cos2x}2$`, [S`$\sin^2x=\sin2x$`, S`$\sin^2x=\cos2x$`, S`$\sin^2x=1$`], "The curve is sin²x.", planeDoc(TG([[(x) => Math.sin(x) ** 2, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -1, ymax: 2 }))),
  tf(S`$\dfrac{1}{\cos x}-\cos x=\sin x\tan x$ wherever both sides are defined.`, true, "(1 − cos²x)/cos x."),
];
