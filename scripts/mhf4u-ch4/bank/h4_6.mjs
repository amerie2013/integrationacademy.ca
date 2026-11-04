// 4.6 Proving Trigonometric Identities — 20 hard questions
import { mc, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;

export const TOPIC = "4.6 Proving Trigonometric Identities";
export const Q = [
  mc(S`What is the first useful step to prove $\dfrac{\cos x}{1-\sin x}=\dfrac{1+\sin x}{\cos x}$?`, S`multiply the left side by $\frac{1+\sin x}{1+\sin x}$`, ["cross-multiply and treat the result as proved", "square both sides", "subtract the right side from both sides"], "A conjugate gives 1 − sin²x = cos²x."),
  mc(S`Simplify $\dfrac{\sin x}{1+\cos x}+\dfrac{1+\cos x}{\sin x}$.`, S`$2\csc x$`, [S`$2\sec x$`, S`$\csc x$`, "2"], "(2 + 2 cos x)/(sin x(1 + cos x))."),
  mc(S`Simplify $\dfrac{\tan x-\sin x}{\tan x\sin x}$.`, S`$\dfrac{1-\cos x}{\sin x}$`, [S`$\dfrac{1+\cos x}{\sin x}$`, S`$\cos x$`, S`$\sec x$`], "Divide through by tan x sin x: csc x − cot x."),
  mc(S`Simplify $\dfrac{1-\tan^2x}{1+\tan^2x}$.`, S`$\cos2x$`, [S`$\sin2x$`, "1", S`$\sec^2x$`], "cos²x − sin²x."),
  mc(S`Simplify $\dfrac{\sin x+\sin2x}{1+\cos x+\cos2x}$.`, S`$\tan x$`, [S`$\cot x$`, S`$\sin x$`, "1"], "sin x(1 + 2cos x)/(cos x(1 + 2cos x))."),
  mc(S`Simplify $\dfrac{\cos2x}{\sin x+\cos x}$.`, S`$\cos x-\sin x$`, [S`$\cos x+\sin x$`, "1", S`$\sin x-\cos x$`], "A difference of squares."),
  mc(S`Simplify $\sin^4x-\cos^4x+1$.`, S`$2\sin^2x$`, [S`$2\cos^2x$`, "1", "2"], "sin²x − cos²x + 1."),
  mc(S`Simplify $\dfrac{\sin(x+y)+\sin(x-y)}{\cos(x+y)+\cos(x-y)}$.`, S`$\tan x$`, [S`$\tan y$`, S`$\cot x$`, "1"], "2 sin x cos y / (2 cos x cos y)."),
  mc(S`Simplify $\dfrac{\cos(x-y)}{\cos x\cos y}$.`, S`$1+\tan x\tan y$`, [S`$1-\tan x\tan y$`, S`$\tan x+\tan y$`, S`$\cot x\cot y$`], "Divide each term."),
  mc(S`Simplify $\sec^4x-\sec^2x$.`, S`$\tan^2x\sec^2x$`, [S`$\tan^4x$`, S`$\sec^2x$`, "1"], "sec²x(sec²x − 1)."),
  num(S`$\dfrac{\sin3x}{\sin x}+\dfrac{\cos3x}{\cos x}=A\cos2x$. Find $A$.`, 4, "sin 4x / (sin x cos x) = 4 cos 2x."),
  num(S`$\cos^6x+\sin^6x+3\sin^2x\cos^2x$ is a constant. Find it.`, 1, "(sin²x + cos²x)³."),
  num(S`$\tan^2x\csc^2x-\tan^2x$ is a constant. Find it.`, 1, "tan²x(csc²x − 1) = tan²x cot²x."),
  mc(S`At which value is $\dfrac{1-\cos x}{\sin x}=\tan\frac x2$ not defined?`, S`$x=0$`, [S`$x=\frac\pi2$`, S`$x=\frac\pi3$`, S`$x=\frac\pi4$`], "sin 0 = 0."),
  mc(S`What restriction does $\tan x\cot x=1$ need?`, S`$x\ne\frac{n\pi}2$`, [S`$x\ne n\pi$ only`, S`$x\ne\frac\pi2+n\pi$ only`, "no restriction"], "tan and cot must both exist."),
  mc("The curves show LS and RS of a claim. What is true?", S`$\sin x\cos x$ is half of $\sin2x$, so the two sides differ`, ["the claim sin x cos x = sin 2x is an identity", "they agree everywhere", "they differ only at x = 0"], "Heights 1/2 and 1.", planeDoc(TG([[(x) => Math.sin(x) * Math.cos(x), "violet"], [(x) => Math.sin(2 * x), "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("The graph shows one curve. Which claim could be true for it?", S`$\cos^2x-\sin^2x=\cos2x$`, [S`$\cos^2x-\sin^2x=1$`, S`$\cos^2x-\sin^2x=\sin2x$`, S`$\cos^2x-\sin^2x=\cos x$`], "Height 1 and period π, starting at 1.", planeDoc(TG([[(x) => Math.cos(x) ** 2 - Math.sin(x) ** 2, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("The graph shows a curve with no breaks at the zeros of sin x. What is wrong with claiming that y = (sin²x)/(sin x) is identical to y = sin x?", S`the left side is not defined where $\sin x=0$`, ["the curves differ everywhere", "the right side has holes", "nothing is wrong"], "Equal only where the denominator is nonzero.", planeDoc(TG([[Math.sin, "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  tf(S`$\dfrac{1}{1+\tan^2x}+\dfrac{1}{1+\cot^2x}=1$ wherever defined.`, true, "cos²x + sin²x."),
  tf(S`$\sqrt{1-\sin^2x}=\cos x$ for every $x$.`, false, "The left side is |cos x|: try x = π.", planeDoc(TG([[(x) => Math.abs(Math.cos(x)), "violet"], [Math.cos, "green"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
];
