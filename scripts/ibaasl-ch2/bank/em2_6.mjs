// 2.6 Inverse Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const YX = { f: (x) => x, color: "gray" };

export const E = [
  num(S`$f(x)=x+3$. Find $f^{-1}(10)$.`, 7, "The inverse subtracts 3."),
  num(S`$f(x)=6x$. Find $f^{-1}(42)$.`, 7, "The inverse divides by 6."),
  num(S`$f(x)=x-5$. Find $f^{-1}(0)$.`, 5, "The inverse adds 5."),
  num(S`$f(x)=2x+4$. Find $f^{-1}(10)$.`, 3, "2x + 4 = 10."),
  mc(S`$f^{-1}(x)$ means:`, "the inverse function of f", [S`$\frac{1}{f(x)}$`, S`$-f(x)$`, S`$f(-x)$`], "The −1 is notation, not a power."),
  tf(S`$f^{-1}(x)=\frac{1}{f(x)}$.`, false, "The inverse undoes f; it is not a reciprocal."),
  mc(S`The graph of $f^{-1}$ is the reflection of the graph of $f$ in:`, S`the line $y=x$`, ["the x-axis", "the y-axis", "the origin"], "Inputs and outputs swap."),
  num(S`If $f(3)=8$, find $f^{-1}(8)$.`, 3, "The inverse sends 8 back to 3."),
  tf(S`$y=x^2$ with domain all real numbers has an inverse function.`, false, "It is many-to-one."),
  fill("To have an inverse, a function must be one-to-___.", ["one", "One"], "Each output must come from exactly one input."),
  num(S`$f(x)=\frac x3$. Find $f^{-1}(5)$.`, 15, "The inverse multiplies by 3."),
  num(S`Reflect the point $(2,7)$ in the line $y=x$. What is the x-coordinate of the image?`, 7, "(2, 7) → (7, 2)."),
  num(S`The line shows $y=f(x)$, passing through $(1,4)$. Find $f^{-1}(4)$.`, 1, "f(1) = 4.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 8 }, curves: [{ f: (x) => 3 * x + 1, color: "violet" }], points: [P(1, 4)] })),
  num(S`The graphs show $f$ (violet) and $f^{-1}$ (green); $(3,1)$ lies on $f^{-1}$. Find $f(1)$.`, 3, "(3, 1) on f⁻¹ means (1, 3) on f.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, curves: [{ f: (x) => 2 * x + 1, color: "violet" }, { f: (x) => (x - 1) / 2, color: "green" }, YX], points: [P(3, 1, null, "green"), P(1, 3)] })),
  num(S`$f(x)=x^3$. Find $f^{-1}(8)$.`, 2, "∛8."),
  mc(S`The inverse of $f(x)=x-9$ is:`, S`$x+9$`, [S`$9-x$`, S`$\frac{1}{x-9}$`, S`$-x-9$`], "Undo subtracting 9."),
  tf(S`The domain of $f^{-1}$ is the range of $f$.`, true, "Inputs and outputs swap."),
  num(S`$f(x)=10-x$ is its own inverse. Find $f^{-1}(4)$.`, 6, "f(4) = 6."),
  mc("Which function is its own inverse?", S`$y=\frac1x$`, [S`$y=x^2$`, S`$y=2x$`, S`$y=x+1$`], "1/(1/x) = x."),
  num(S`$f(x)=4x-1$. Find $f^{-1}(-1)$.`, 0, "4x − 1 = −1."),
];

export const M = [
  mx(S`Find $f^{-1}(x)$ for $f(x)=3x+6$.`, "(x-6)/3", "x = 3y + 6."),
  mx(S`Find $f^{-1}(x)$ for $f(x)=\frac{x+2}{5}$.`, "5*x-2", "x = (y + 2)/5."),
  num(S`$f(x)=x^3-1$. Find $f^{-1}(26)$.`, 3, "x³ = 27."),
  num(S`$f(x)=\sqrt{x+7}$. Find $f^{-1}(3)$.`, 2, "x + 7 = 9."),
  num(S`$f(x)=\frac{1}{x-2}$. Find $f^{-1}(0.5)$.`, 4, "x − 2 = 2."),
  mc(S`The inverse of $f(x)=\frac{1}{x+1}$ is:`, S`$\frac1x-1$`, [S`$x+1$`, S`$\frac{1}{x-1}$`, S`$\frac1x+1$`], "x = 1/(y + 1) ⇒ y = 1/x − 1."),
  tf(S`$f(f^{-1}(x))=x$ for every $x$ in the domain of $f^{-1}$.`, true, "f undoes f⁻¹."),
  num(S`$f(x)=(x-1)^2$, $x\ge1$. Find $f^{-1}(9)$.`, 4, "x − 1 = 3 (positive root)."),
  num(S`$f(x)=x^2+5$, $x\ge0$. What is the smallest value in the domain of $f^{-1}$?`, 5, "The range of f is y ≥ 5."),
  num(S`The restricted parabola $f$ passes through $(2,5)$ (shown with its inverse). Find $f^{-1}(5)$.`, 2, "(2, 5) on f ⇔ (5, 2) on f⁻¹.", planeDoc({ view: { xmin: -1, xmax: 8, ymin: -1, ymax: 8 }, curves: [{ f: (x) => x * x + 1, a: 0, color: "violet" }, { f: (x) => Math.sqrt(x - 1), a: 1, color: "green" }, YX], points: [P(2, 5), P(5, 2, null, "green")] })),
  num(S`The graph of $y=x^2-2x$ and the line $y=3$ are shown. How many inputs give the output 3?`, 2, "x = −1 and x = 3, so f is not one-to-one.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x - 2 * x, color: "violet" }], lines: [{ m: 0, b: 3, color: "red", dash: true }] })),
  ms("Which functions are one-to-one on their natural domains? Select all.", [S`$y=2x-7$`, S`$y=x^3$`, S`$y=x^2$`, S`$y=\sqrt x$`], [0, 1, 3], "x² is many-to-one."),
  num(S`$f(x)=5-2x$. Find $f^{-1}(1)$.`, 2, "5 − 2x = 1."),
  num(S`$f(x)=\frac{2x+1}{x-4}$. Find $f^{-1}(3)$.`, 13, "2x + 1 = 3x − 12."),
  tf("The graphs of a function and its inverse always meet.", false, "e.g. f(x) = x + 1 and f⁻¹(x) = x − 1 are parallel."),
  num(S`$f(x)=2x-6$ meets the graph of $f^{-1}$ on $y=x$. Find $x$.`, 6, "2x − 6 = x."),
  mc(S`On which domain is $f(x)=(x-3)^2$ one-to-one?`, S`$x\ge3$`, [S`$x\ge0$`, S`$-3\le x\le3$`, S`all real numbers`], "Keep one side of the vertex x = 3."),
  num(S`$f(x)=\frac{x}{x+1}$ has inverse $\frac{x}{1-x}$. Find $f^{-1}(0.5)$.`, 1, "0.5/0.5."),
  num(S`$f(x)=\sqrt{x-2}$, $x\ge2$. What is the smallest value in the range of $f^{-1}$?`, 2, "The range of f⁻¹ is the domain of f."),
  num(S`$f(x)=7-x^3$. Find $f^{-1}(-1)$.`, 2, "x³ = 8."),
];
