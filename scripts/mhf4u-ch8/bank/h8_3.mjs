// 8.3 Composite Functions — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "8.3 Composite Functions";
export const Q = [
  num(S`$f(x)=x^2-4$, $g(x)=x+2$. Solve $f(g(x))=12$. Enter the positive root.`, 2, "(x + 2)² = 16 ⇒ x = 2 or −6."),
  num(S`$f(x)=2x+1$. Find $f(f(f(1)))$.`, 15, "3, 7, 15."),
  num(S`$f(x)=\frac{1}{1-x}$. Find $f(f(f(5)))$.`, 5, "f(5) = −1/4, f(−1/4) = 4/5, f(4/5) = 5."),
  num(S`$f(x)=ax+3$ and $f(f(x))=4x+9$ with $a>0$. Find $a$.`, 2, "a²x + 3a + 3 ⇒ a² = 4, 3a + 3 = 9."),
  num(S`$f(g(x))=6x-1$ and $f(x)=2x+3$. Find $g(5)$.`, 13, "2g(x) + 3 = 6x − 1 ⇒ g(x) = 3x − 2."),
  num(S`$f(x)=\sqrt{x}$ and $g(x)=16-x^2$. Find the largest value of $f(g(x))$.`, 4, "Largest at x = 0: √16."),
  num(S`A circle's radius is $r(t)=4+0.5t$ cm. Find the area at $t=6$ s (one decimal).`, Math.PI * 49, "r = 7, A = 49π.", null, 0.1),
  num(S`Euros $E(c)=0.7c$ for $c$ dollars; dollars with tax $c(p)=1.13p$. Find $E(c(200))$.`, 158.2, "0.7 × 226.", null, 0.01),
  mx(S`$f(x)=\dfrac{x-4}{3}$ is the inverse of $g(x)=$ ? (enter $g(x)$)`, "3*x+4", "Solve y = (x − 4)/3 for x."),
  mc(S`The domain of $f(g(x))$ for $f(x)=\log x$ and $g(x)=x^2-2x-3$ is…`, S`$x<-1$ or $x>3$`, [S`$-1<x<3$`, S`$x>3$`, S`all real $x$`], "(x − 3)(x + 1) > 0."),
  mc(S`$f(x)=\frac1x$ and $g(x)=\frac{1}{x-1}$. The domain of $f(g(x))$ is…`, S`$x\ne1$`, [S`$x\ne0,1$`, S`$x\ne0$`, S`all real $x$`], "f(g(x)) = x − 1, but the inner g needs x ≠ 1; g(x) is never 0."),
  mc(S`If $f$ and $g$ are both odd, then $f\circ g$ is…`, "odd", ["even", "neither", "constant"], "f(g(−x)) = f(−g(x)) = −f(g(x))."),
  ms(S`Select every true statement.`, [S`$\log_2(2^x)=x$ for all real $x$`, S`$2^{\log_2x}=x$ for all real $x$`, S`$(\sqrt x)^2=x$ for $x\ge0$`, S`$\sqrt{x^2}=x$ for all real $x$`], [0, 2], "2^(log₂ x) needs x > 0; √(x²) = |x|."),
  tf(S`If $f(g(x))=x$ and $g(f(x))=x$ for every $x$ in their domains, then $f$ and $g$ are inverses.`, true, "That is the composition test for inverses."),
  tf(S`$\sin(x^2)$ and $(\sin x)^2$ are the same function.`, false, "Different order of composition."),
  num(S`$f(x)=x^2$, $g(x)=x-3$. How many solutions does $f(g(x))=g(f(x))$ have?`, 1, "(x − 3)² = x² − 3 ⇒ −6x + 9 = −3 ⇒ x = 2."),
  mc("The graphs of f (violet) and g (blue) are shown. Find f(g(0)).", "3", ["0", "1", "2"], "g(0) = −1, then f(−1) = 3.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -2, ymax: 5 }, curves: [{ f: (x) => x * x + 2, color: "violet" }], lines: [{ m: 1, b: -1, color: "blue" }], points: [{ x: 0, y: -1, label: "(0, −1)", color: "blue" }, { x: -1, y: 3, label: "(−1, 3)", color: "violet" }], step: { x: 1, y: 1 } })),
  mc("The graph shows y = log(9 − x²). Its domain is…", "−3 < x < 3", ["x > 9", "−9 < x < 9", "x ≥ 0"], "9 − x² > 0.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 1.5 }, curves: [{ f: (x) => Math.log10(9 - x * x), a: -2.999, b: 2.999, color: "violet" }], step: { x: 1, y: 0.5 } })),
  mc("The graph shows y = (x + 1)² − 2 = f(g(x)). Which solves f(g(x)) = 7?", "x = 2 or x = −4", ["x = 3 or x = −3", "x = 2 only", "x = 7"], "(x + 1)² = 9.", planeDoc({ view: { xmin: -6, xmax: 4, ymin: -3, ymax: 10 }, curves: [{ f: (x) => (x + 1) ** 2 - 2, color: "violet" }], lines: [{ m: 0, b: 7, color: "blue", dash: true }], step: { x: 1, y: 1 } })),
  mc("The graph shows a function f and the line y = x. Which graph would f(f⁻¹(x)) give?", "the line y = x (on the domain of f⁻¹)", ["a parabola", "the graph of f", "a horizontal line"], "A function and its inverse undo each other.", planeDoc({ view: { xmin: -3, xmax: 8, ymin: -3, ymax: 8 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], step: { x: 1, y: 1 } })),
];
