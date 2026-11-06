// 8.3 Composite Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const E = [
  num(S`$f(x)=x+2$, $g(x)=4x$. Find $f(g(3))$.`, 14, "g(3) = 12."),
  num(S`$f(x)=x+2$, $g(x)=4x$. Find $g(f(3))$.`, 20, "f(3) = 5."),
  num(S`$f(x)=x^2$, $g(x)=x-6$. Find $f(g(2))$.`, 16, "g(2) = −4."),
  num(S`$f(x)=x^2$, $g(x)=x-6$. Find $g(f(2))$.`, -2, "f(2) = 4."),
  num(S`$f(x)=2^x$, $g(x)=x+1$. Find $f(g(2))$.`, 8, "g(2) = 3."),
  num(S`$f(x)=\sqrt x$, $g(x)=x+7$. Find $f(g(9))$.`, 4, "g(9) = 16."),
  num(S`$f(x)=3x-1$. Find $f(f(2))$.`, 14, "f(2) = 5, f(5) = 14."),
  mx(S`$f(x)=2x+3$, $g(x)=x^2$. Find $f(g(x))$.`, "2*x^2+3", "Replace x in f by x²."),
  mx(S`$f(x)=2x+3$, $g(x)=x^2$. Find $g(f(x))$ expanded.`, "4*x^2+12*x+9", "(2x + 3)²."),
  mx(S`$f(x)=x-5$, $g(x)=3x$. Find $f(g(x))$.`, "3*x-5", "f(3x)."),
  mc(S`In $f(g(x))$, which function is applied first?`, S`$g$`, [S`$f$`, "both at once", "it depends on x"], "Inside out."),
  mc(S`$h(x)=(x+4)^3=f(g(x))$. Which pair works?`, S`$g(x)=x+4,\ f(x)=x^3$`, [S`$g(x)=x^3,\ f(x)=x+4$`, S`$g(x)=x,\ f(x)=(x+4)^3$`, S`$g(x)=4,\ f(x)=x^3$`], "Inner = calculated first."),
  mc(S`$h(x)=\sqrt{x-1}=f(g(x))$. Which is $f$?`, S`$\sqrt x$`, [S`$x-1$`, S`$\sqrt{x}-1$`, S`$x^2$`], "Outer = applied last."),
  tf(S`$f(g(x))=g(f(x))$ for all functions.`, false, "Usually different."),
  tf(S`$(f\circ g)(x)$ means $f(g(x))$.`, true, "Notation."),
  tf(S`If $f(x)=x+3$ and $g(x)=x-3$, then $f(g(x))=x$.`, true, "They are inverses."),
  fill(S`$f(x)=10x$, $g(x)=x+1$. $f(g(x))=$ ____ (simplified).`, ["10x+10", "10(x+1)", "10*x+10"], "10(x + 1)."),
  fill(S`$\log(2^x)$ and $2^{\log_2 x}$ both simplify to ____.`, ["x"], "Inverse functions undo each other."),
  mc("Use the graphs: f is blue, g is gray. Find f(g(1)).", "4", ["3", "1", "2"], "g(1) = 2, then f(2) = 4.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, lines: [{ m: 1, b: 1, color: "gray" }, { m: 2, b: 0, color: "blue" }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "gray" }, { x: 2, y: 4, label: "(2, 4)", color: "blue" }], step: { x: 1, y: 1 } })),
  mc("The graph of f is shown. Find f(f(0)).", "1", ["0", "3", "2"], "f(0) = 3, f(3) = 1.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => 3 - (2 * x) / 3, a: 0, b: 4.5, color: "violet" }], points: [{ x: 0, y: 3, label: "(0, 3)", color: "amber" }, { x: 3, y: 1, label: "(3, 1)", color: "amber" }], step: { x: 1, y: 1 } })),
];

export const M = [
  num(S`$f(x)=x^2-1$, $g(x)=2x+3$. Find $f(g(-1))$.`, 0, "g(−1) = 1."),
  num(S`$f(x)=\frac1x$, $g(x)=x-2$. Find $f(g(6))$.`, 0.25, "g(6) = 4.", null, 0.001),
  num(S`$f(x)=\log x$, $g(x)=x^2+99$. Find $f(g(1))$.`, 2, "g(1) = 100."),
  num(S`$f(x)=x^2+2x$, $g(x)=x-1$. Find $f(g(x))$ at $x=4$.`, 15, "g(4) = 3, f(3) = 15."),
  num(S`$f(x)=2x-5$. Solve $f(f(x))=7$.`, 5.5, "f(f(x)) = 2(2x − 5) − 5 = 4x − 15 = 7 ⇒ x = 5.5.", null, 0.001),
  num(S`$d(t)=50t$ km and $F(d)=0.08d$ L. How many litres are used in $2.5$ h?`, 10, "d = 125, F = 10."),
  mx(S`$f(x)=x^2+1$, $g(x)=x-3$. Find $f(g(x))$ expanded.`, "x^2-6*x+10", "(x − 3)² + 1."),
  mx(S`$f(x)=\frac x2+4$, $g(x)=2x-8$. Find $f(g(x))$.`, "x", "They are inverses."),
  mc(S`Domain of $f(g(x))$ for $f(x)=\sqrt x$ and $g(x)=x+5$?`, S`$x\ge-5$`, [S`$x\ge0$`, S`$x\ge5$`, S`all real $x$`], "x + 5 ≥ 0."),
  mc(S`Domain of $g(f(x))$ for $f(x)=\sqrt x$ and $g(x)=x^2$?`, S`$x\ge0$`, [S`all real $x$`, S`$x>0$`, S`$x\le0$`], "The inner √x needs x ≥ 0 even though the result is x."),
  mc(S`Domain of $\log(x-8)$ as $f(g(x))$?`, S`$x>8$`, [S`$x\ge8$`, S`$x>0$`, S`$x\ne8$`], "x − 8 > 0."),
  mc(S`$h(x)=5^{x^2}$. Which decomposition is correct?`, S`$g(x)=x^2,\ f(x)=5^x$`, [S`$g(x)=5^x,\ f(x)=x^2$`, S`$g(x)=5x,\ f(x)=x^2$`, S`$g(x)=x,\ f(x)=5^x$`], "x² is calculated first."),
  ms(S`Select every pair of inverse functions.`, [S`$2x+6$ and $\frac x2-3$`, S`$x^3$ and $\sqrt[3]x$`, S`$10^x$ and $\log x$`, S`$x+1$ and $x-2$`], [0, 1, 2], "Check f(g(x)) = x."),
  tf(S`For $f(x)=\sqrt x$, $f(f(16))=2$.`, true, "√16 = 4, √4 = 2."),
  tf(S`The domain of $f\circ g$ is always the domain of $g$.`, false, "Outputs of g must also be in the domain of f."),
  fill(S`$f(x)=x+1$ and $f(g(x))=3x$. Then $g(x)=$ ____.`, ["3x-1", "3*x-1"], "g(x) + 1 = 3x."),
  num(S`$f(x)=x^2$, $g(x)=x+2$. Solve $f(g(x))=25$. Enter the positive root.`, 3, "(x + 2)² = 25 ⇒ x = 3 or −7."),
  mc("Use the graphs: f is violet, g is blue. Find g(f(4)).", "3", ["1", "4", "6"], "f(4) = 2, then g(2) = 3.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 6 }, curves: [{ f: Math.sqrt, a: 0, color: "violet" }], lines: [{ m: 1, b: 1, color: "blue" }], points: [{ x: 4, y: 2, label: "(4, 2)", color: "violet" }, { x: 2, y: 3, label: "(2, 3)", color: "blue" }], step: { x: 1, y: 1 } })),
  mc("The graph shows y = √(9 − x²). It is f(g(x)) for which f and g?", "f(x) = √x, g(x) = 9 − x²", ["f(x) = 9 − x², g(x) = √x", "f(x) = x², g(x) = √(9 − x)", "f(x) = √x, g(x) = 9 − x"], "The radicand is computed first.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(Math.max(0, 9 - x * x)), a: -3, b: 3, color: "violet" }], step: { x: 1, y: 1 } })),
  num(S`$f(x)=3^x$, $g(x)=\log_3x$. Find $f(g(7))$.`, 7, "Inverses."),
];
