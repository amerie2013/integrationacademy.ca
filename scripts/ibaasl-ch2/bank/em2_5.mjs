// 2.5 Composite Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  num(S`$f(x)=x+2$, $g(x)=5x$. Find $f(g(1))$.`, 7, "g(1) = 5, f(5) = 7."),
  num(S`$f(x)=x+2$, $g(x)=5x$. Find $g(f(1))$.`, 15, "f(1) = 3, g(3) = 15."),
  num(S`$f(x)=x^2$, $g(x)=x+1$. Find $(f\circ g)(2)$.`, 9, "g(2) = 3, f(3) = 9."),
  num(S`$f(x)=x^2$, $g(x)=x+1$. Find $(g\circ f)(2)$.`, 5, "f(2) = 4, g(4) = 5."),
  num(S`$f(x)=3x$. Find $(f\circ f)(2)$.`, 18, "f(2) = 6, f(6) = 18."),
  mc(S`$(f\circ g)(x)$ means:`, S`$f(g(x))$`, [S`$g(f(x))$`, S`$f(x)\cdot g(x)$`, S`$f(x)+g(x)$`], "Apply g first, then f."),
  tf(S`$f\circ g$ always equals $g\circ f$.`, false, "The order usually matters."),
  num(S`$f(x)=x-6$, $g(x)=2x$. Find $f(g(5))$.`, 4, "g(5) = 10, f(10) = 4."),
  num(S`$f(x)=10-x$. Find $f(f(3))$.`, 3, "f(3) = 7, f(7) = 3."),
  mc(S`In $f(g(x))$, which function acts first?`, "g", ["f", "both at once", "it depends on x"], "Work from the inside out."),
  fill(S`In $f(g(x))$, the function $g$ is called the ___ function.`, ["inner", "Inner"], "f is the outer function."),
  num(S`$f(x)=\sqrt x$, $g(x)=x+7$. Find $(f\circ g)(9)$.`, 4, "g(9) = 16, √16 = 4."),
  num(S`The lines show $f(x)=2x$ (violet) and $g(x)=x-1$ (blue). Find $f(g(3))$.`, 4, "g(3) = 2, f(2) = 4.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -3, ymax: 8 }, curves: [{ f: (x) => 2 * x, color: "violet" }, { f: (x) => x - 1, color: "blue" }], points: [P(3, 2, null, "blue"), P(2, 4)] })),
  num(S`The graphs show $f(x)=x+1$ (violet) and $g(x)=x^2$ (blue). Find $f(g(2))$.`, 5, "g(2) = 4, f(4) = 5.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 7 }, curves: [{ f: (x) => x + 1, color: "violet" }, { f: (x) => x * x, color: "blue" }], points: [P(2, 4, null, "blue"), P(4, 5)] })),
  num(S`$f(x)=x+4$, $g(x)=x-4$. Find $(f\circ g)(10)$.`, 10, "g(10) = 6, f(6) = 10."),
  tf(S`$(f\circ f)(x)$ means $f(x)\cdot f(x)$.`, false, "It means f(f(x))."),
  num(S`$f(x)=2x+1$, $g(x)=x^2$. Find $g(f(0))$.`, 1, "f(0) = 1, g(1) = 1."),
  num(S`$f(x)=\frac1x$, $g(x)=x+1$. Find $f(g(1))$.`, 0.5, "g(1) = 2, f(2) = 0.5.", null, 1e-9),
  mc(S`$f(x)=x+3$, $g(x)=4x$. Then $(g\circ f)(x)=$`, S`$4x+12$`, [S`$4x+3$`, S`$x+12$`, S`$4x^2+3$`], "g(x + 3) = 4(x + 3)."),
  num(S`$f(x)=x^2$. Find $(f\circ f)(2)$.`, 16, "f(2) = 4, f(4) = 16."),
];

export const M = [
  mx(S`$f(x)=2x-1$, $g(x)=x+3$. Find $(f\circ g)(x)$.`, "2*x+5", "2(x + 3) − 1."),
  mx(S`$f(x)=2x-1$, $g(x)=x+3$. Find $(g\circ f)(x)$.`, "2*x+2", "(2x − 1) + 3."),
  mx(S`$f(x)=x^2$, $g(x)=x-5$. Find $(f\circ g)(x)$ in expanded form.`, "x^2-10*x+25", "(x − 5)²."),
  num(S`$f(x)=x^2+1$, $g(x)=2x$. Solve $(f\circ g)(x)=37$ for $x>0$.`, 3, "4x² + 1 = 37."),
  num(S`$f(x)=3x-4$. Find $(f\circ f)(2)$.`, 2, "f(2) = 2, f(2) = 2."),
  num(S`$f(x)=x+1$, $g(x)=x^2$. Solve $(f\circ g)(x)=(g\circ f)(x)$.`, 0, "x² + 1 = x² + 2x + 1."),
  tf(S`If $f(x)=x+5$ and $g(x)=x-5$, then $f(g(x))=x$ for every $x$.`, true, "(x − 5) + 5 = x."),
  mc(S`Which decomposition gives $h(x)=(x-7)^5=f(g(x))$?`, S`$g(x)=x-7$, $f(x)=x^5$`, [S`$g(x)=x^5$, $f(x)=x-7$`, S`$g(x)=x$, $f(x)=x-7$`, S`$g(x)=5x$, $f(x)=x-7$`], "Subtract 7 first, then raise to the 5th power."),
  num(S`$f(x)=\frac{1}{x+2}$, $g(x)=x-4$. Which value is excluded from the domain of $f\circ g$?`, 2, "g(x) = −2 when x = 2."),
  num(S`$f(x)=\sqrt x$, $g(x)=x-3$. What is the smallest $x$ in the domain of $f\circ g$?`, 3, "x − 3 ≥ 0."),
  num(S`The graphs show $f(x)=x^2-3$ (violet) and $g(x)=x+1$ (blue). Find $(g\circ f)(2)$.`, 2, "f(2) = 1, g(1) = 2.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x * x - 3, color: "violet" }, { f: (x) => x + 1, color: "blue" }], points: [P(2, 1), P(1, 2, null, "blue")] })),
  num(S`The lines show $f(x)=4-x$ (violet) and $g(x)=2x$ (blue). Find $f(g(1))$.`, 2, "g(1) = 2, f(2) = 2.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -2, ymax: 7 }, curves: [{ f: (x) => 4 - x, color: "violet" }, { f: (x) => 2 * x, color: "blue" }], points: [P(1, 2, null, "blue"), P(2, 2)] })),
  ms(S`Which expressions equal $(f\circ g)(x)$ for $f(x)=x^2$, $g(x)=x+2$? Select all.`, [S`$(x+2)^2$`, S`$x^2+4x+4$`, S`$x^2+2$`, S`$x^2+4$`], [0, 1], "f(x + 2) = (x + 2)²."),
  num(S`$f(x)=2x$, $g(x)=x+3$. Simplify $(f\circ g)(x)-(g\circ f)(x)$.`, 3, "2x + 6 − (2x + 3)."),
  num(S`$f(x)=ax$, $g(x)=x+2$ and $(f\circ g)(1)=12$. Find $a$.`, 4, "3a = 12."),
  num(S`$f(x)=x-2$. Find $f(f(f(10)))$.`, 4, "10 → 8 → 6 → 4."),
  tf(S`$(f\circ g)(x)$ can be evaluated even if $g(x)$ is outside the domain of $f$.`, false, "f cannot accept that input."),
  num(S`$f(x)=x^3$, $g(x)=x+1$. Find $(g\circ f)(-2)$.`, -7, "f(−2) = −8, g(−8) = −7."),
  num(S`$f(x)=5x-3$. Solve $(f\circ f)(x)=2$.`, 0.8, "25x − 18 = 2.", null, 1e-9),
  mc(S`Which decomposition gives $h(x)=\sqrt{x^2+1}=f(g(x))$?`, S`$g(x)=x^2+1$, $f(x)=\sqrt x$`, [S`$g(x)=\sqrt x$, $f(x)=x^2+1$`, S`$g(x)=x^2$, $f(x)=x+1$`, S`$g(x)=x+1$, $f(x)=\sqrt{x^2}$`], "Square and add 1 first, then take the root."),
];
