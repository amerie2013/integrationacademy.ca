// 8.1 Sums and Differences of Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const E = [
  num(S`$f(x)=2x+5$ and $g(x)=x-1$. Find $(f+g)(3)$.`, 13, "11 + 2."),
  num(S`$f(x)=x^2$ and $g(x)=3x$. Find $(f-g)(4)$.`, 4, "16 − 12."),
  num(S`$f(x)=x^2+1$ and $g(x)=2x$. Find $(f+g)(-1)$.`, 0, "2 + (−2)."),
  num(S`$f(x)=10-x$ and $g(x)=x^2$. Find $(f-g)(2)$.`, 4, "8 − 4."),
  num(S`$f(x)=2^x$ and $g(x)=x$. Find $(f+g)(3)$.`, 11, "8 + 3."),
  mx(S`$f(x)=3x-2$ and $g(x)=x+7$. Find $(f+g)(x)$.`, "4*x+5", "Add like terms."),
  mx(S`$f(x)=x^2+4x$ and $g(x)=x^2-x$. Find $(f-g)(x)$.`, "5*x", "x² − x² + 4x + x."),
  mx(S`$f(x)=2x^2-3$ and $g(x)=x^2+x+1$. Find $(f+g)(x)$.`, "3*x^2+x-2", "Collect like terms."),
  mc(S`$f(x)=x^2+2x$, $g(x)=x-3$. Which is $(f-g)(x)$?`, S`$x^2+x+3$`, [S`$x^2+x-3$`, S`$x^2+3x-3$`, S`$x^2+3x+3$`], "Bracket g: −(x − 3) = −x + 3."),
  mc(S`What is the domain of $\sqrt x+\sqrt{3-x}$?`, S`$0\le x\le3$`, [S`$x\ge0$`, S`$x\le3$`, S`all real $x$`], "Both roots must exist."),
  mc(S`What is $(f+g)(2)$?`, S`$f(2)+g(2)$`, [S`$f(4)$`, S`$f(2)\cdot g(2)$`, S`$f(g(2))$`], "Add the outputs at the same input."),
  tf(S`$(f-g)(x)=(g-f)(x)$ for all functions $f$ and $g$.`, false, "g − f = −(f − g)."),
  tf(S`The zeros of $f-g$ are where the graphs of $f$ and $g$ cross.`, true, "f(x) − g(x) = 0 ⇔ f(x) = g(x)."),
  tf(S`The sum of two even functions is even.`, true, "f(−x) + g(−x) = f(x) + g(x)."),
  fill(S`Profit $=$ revenue $-$ ____.`, ["cost", "costs"], "P = R − C."),
  fill(S`$R(x)=20x$ and $C(x)=8x+600$. The break-even quantity is ____.`, ["50"], "12x = 600."),
  num(S`$R(x)=40x$ and $C(x)=25x+300$. Find the profit for $x=50$.`, 450, "2000 − 1550."),
  num(S`$f(x)=\sqrt{x}$, $g(x)=\sqrt{9-x}$. Find $(f+g)(0)$.`, 3, "0 + 3."),
  mc("The graphs of f (blue) and g (gray) are shown. What is (f + g)(2)?", "5", ["3", "6", "1"], "f(2) = 4 and g(2) = 1.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 7 }, curves: [{ f: (x) => x * x, color: "blue" }], lines: [{ m: -1, b: 3, color: "gray" }], points: [{ x: 2, y: 4, label: "(2, 4)", color: "blue" }, { x: 2, y: 1, label: "(2, 1)", color: "gray" }], step: { x: 1, y: 1 } })),
  mc("The graphs of y = f(x) and y = g(x) are shown. For which x is (f − g)(x) = 0?", "x = 1 and x = 3", ["x = 0 only", "x = 2 only", "x = 4"], "The graphs cross at x = 1 and x = 3.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x + 4, color: "blue" }], lines: [{ m: 0, b: 1, color: "gray" }], step: { x: 1, y: 1 } })),
];

export const M = [
  num(S`$f(x)=\sqrt{x+5}$ and $g(x)=\sqrt{4-x}$. Find $(f-g)(4)$.`, 3, "3 − 0."),
  num(S`$R(x)=18x$ and $C(x)=0.01x^2+6x+2000$. Find the maximum profit.`, 1600, "P = −0.01x² + 12x − 2000; vertex x = 600; P = 1600."),
  num(S`For $P(x)=-0.01x^2+12x-2000$, at what $x$ is the profit largest?`, 600, "x = −12/(2·(−0.01))."),
  num(S`$f(x)=\log x$ and $g(x)=\log(x^3)$. Find $(f+g)(10)$.`, 4, "1 + 3."),
  num(S`$f(x)=\sin x$ and $g(x)=\cos x$. Find $(f+g)(\pi)$.`, -1, "0 + (−1)."),
  num(S`$h(x)=3^x-x^2$. Find $h(2)$.`, 5, "3² − 2² = 9 − 4."),
  mx(S`$f(x)=x^3-2x$ and $g(x)=-x^3+x^2$. Find $(f+g)(x)$.`, "x^2-2*x", "x³ terms cancel."),
  mx(S`$f(x)=(x+2)^2$ and $g(x)=x^2$. Find $(f-g)(x)$.`, "4*x+4", "x² + 4x + 4 − x²."),
  mc(S`What is the domain of $\sqrt{x-2}+\dfrac1{x-5}$?`, S`$x\ge2,\ x\ne5$`, [S`$x\ge2$`, S`$x\ne5$`, S`$2\le x\le5$`], "Both parts must exist."),
  mc(S`Which function is odd?`, S`$x^3+\sin x$`, [S`$x^2+\cos x$`, S`$x^3+x^2$`, S`$x+1$`], "odd + odd = odd."),
  mc(S`Which function is neither even nor odd?`, S`$x^2+x$`, [S`$x^4+x^2$`, S`$x^5-x$`, S`$\cos x+x^2$`], "even + odd is usually neither."),
  ms(S`Select every true statement about $h(x)=x+\sin x$.`, ["it is odd", "its only zero is x = 0", "it is always within 1 of the line y = x", "it is periodic"], [0, 1, 2], "The line part prevents periodicity."),
  tf(S`For large positive $x$, $2^x-x^3$ is positive.`, true, "Exponentials eventually outgrow powers (from x ≈ 10)."),
  tf(S`The domain of $f+g$ can be larger than the domain of $f$.`, false, "It is the intersection, so it is never larger."),
  fill(S`$P(x)=-2x^2+40x-150$. The break-even quantities are $5$ and ____.`, ["15"], "x² − 20x + 75 = 0."),
  num(S`$R(x)=50x$ and $C(x)=x^2+10x+300$. Find the larger break-even quantity.`, 30, "x² − 40x + 300 = 0 ⇒ 10 or 30."),
  num(S`Find every zero of $\sin x+\sin2x$ on $0<x<\pi$.`, 2 * Math.PI / 3, "sin x(1 + 2cos x) = 0 ⇒ cos x = −1/2.", null, 0.01),
  mc("The graph shows y = f(x) + g(x) built from a line and a parabola. Which pair could it be?", "f(x) = x², g(x) = 2x", ["f(x) = x², g(x) = −2x", "f(x) = 2x², g(x) = x", "f(x) = x², g(x) = 2"], "x² + 2x has zeros 0 and −2.", planeDoc({ view: { xmin: -4, xmax: 2, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x + 2 * x, color: "violet" }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "amber" }, { x: 0, y: 0, label: "(0, 0)", color: "amber" }], step: { x: 1, y: 1 } })),
  mc("The graph shows a profit function. What is the maximum profit?", "about 500", ["about 200", "about 42", "about 358"], "The vertex is near (200, 500).", planeDoc({ view: { xmin: -10, xmax: 420, ymin: -400, ymax: 700 }, curves: [{ f: (x) => -0.02 * x * x + 8 * x - 300, color: "violet" }], step: { x: 50, y: 100 } })),
  num(S`$f(x)=x^2-1$, $g(x)=1-x$. Find the positive zero of $f+g$.`, 1, "x² − x = 0 ⇒ x = 0 or 1."),
];
