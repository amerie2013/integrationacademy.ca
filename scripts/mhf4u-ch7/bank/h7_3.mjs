// 7.3 Product and Quotient Laws of Logarithms — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const TOPIC = "7.3 Product and Quotient Laws of Logarithms";
export const Q = [
  num(S`Evaluate $\log_2 3+\log_2 12-\log_2 9$.`, 2, "3 × 12 ÷ 9 = 4."),
  num(S`Evaluate $\tfrac12\log_3 81+\log_3 6-\log_3 2$.`, 3, "2 + log₃ 3 = 3."),
  num(S`Evaluate $\log 2+\log 5+\log 20+\log 50$.`, 4, "2 × 5 × 20 × 50 = 10 000."),
  num(S`Evaluate $\log_2\tfrac21+\log_2\tfrac32+\log_2\tfrac43+\cdots+\log_2\tfrac{32}{31}$.`, 5, "The product telescopes to 32."),
  num(S`If $\log_bx=2$, $\log_by=3$ and $\log_bz=5$, evaluate $\log_b\dfrac{x^3y^2}{z}$.`, 7, "3(2) + 2(3) − 5."),
  num(S`If $\log_bx=2$ and $\log_by=3$, evaluate $\log_b\sqrt{x^5y}$.`, 6.5, "½(5·2 + 3) = 6.5.", null, 0.001),
  num(S`If $\log_b 2=0.43$ and $\log_b 5=1$, find $\log_b 20$.`, 1.86, "2(0.43) + 1.", null, 0.001),
  num(S`Simplify $\log_3(x^2-16)-\log_3(x-4)$ and evaluate it at $x=77$.`, 4, "log₃(x + 4) = log₃ 81."),
  num(S`Find $k$ if $\log k=2\log3+\log4-\log6$.`, 6, "k = 9 × 4 ÷ 6."),
  num(S`Find $k$ if $\log_2k=3+\log_25$.`, 40, "log₂ 8 + log₂ 5 = log₂ 40."),
  mc(S`If $\log_b2=p$ and $\log_b3=q$, then $\log_b\dfrac{b^2}{12}=$ …`, S`$2-2p-q$`, [S`$2+2p+q$`, S`$\frac{2}{2p+q}$`, S`$2-p-q$`], "log_b b² − (2p + q)."),
  mc(S`$\log_b(x^2-y^2)$ can be written as…`, S`$\log_b(x-y)+\log_b(x+y)$`, [S`$2\log_bx-2\log_by$`, S`$\log_bx^2-\log_by^2$`, S`$\frac{\log_bx^2}{\log_by^2}$`], "Factor the difference of squares first (x > y > 0)."),
  ms(S`Select every true statement for $x,y>0$.`, [S`$\log(xy)-\log x=\log y$`, S`$\log x^2+\log\frac1x=\log x$`, S`$\log(x+y)-\log y=\log x$`, S`$\log_xy\cdot\log_yx=1$`], [0, 1, 3], "The third has no law; the last is change of base (x, y ≠ 1)."),
  tf(S`$\log_2 x+\log_4 x=\log_8 x^3\cdot\dfrac32$ for every $x>0$.`, true, "Left = (3/2) log₂ x; right = (3/2)(log₂ x) since log₈ x³ = log₂ x."),
  tf(S`$\log(2\cdot10^{k})=k+\log2$ for every integer $k$.`, true, "Product law."),
  mc("The graph shows y = log x and y = log x + log 5. The second is the same as…", "y = log(5x)", ["y = log(x + 5)", "y = 5 log x", "y = log x⁵"], "Product law.", planeDoc({ view: { xmin: -0.5, xmax: 10, ymin: -1.5, ymax: 2 }, curves: [{ f: (x) => L(x), a: 0.03, color: "gray" }, { f: (x) => L(x) + L(5), a: 0.01, color: "violet" }], step: { x: 1, y: 0.5 } })),
  mc("Using the marked points on y = log₂ x, what is log₂ 3 + log₂ (16/3)?", "4", ["3", "5", "about 6.2"], "log₂(3 × 16/3) = log₂ 16.", planeDoc({ view: { xmin: -1, xmax: 18, ymin: -2, ymax: 5 }, curves: [{ f: (x) => Math.log2(x), a: 0.05, color: "violet" }], points: [{ x: 3, y: Math.log2(3), label: "(3, 1.58)", color: "amber" }, { x: 16 / 3, y: Math.log2(16 / 3), label: "(5.33, 2.42)", color: "amber" }, { x: 16, y: 4, label: "(16, 4)", color: "blue" }], step: { x: 2, y: 1 } })),
  mc("The graph shows y = log(x² − 1) − log(x + 1) for x > 1. It matches…", "y = log(x − 1)", ["y = log(x + 1)", "y = 2 log x", "y = log(x² − x)"], "(x² − 1)/(x + 1) = x − 1.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: -2, ymax: 1.5 }, curves: [{ f: (x) => L(x - 1), a: 1.01, color: "violet" }], vlines: [{ x: 1, color: "red", dash: true }], step: { x: 1, y: 0.5 } })),
  mc("The graph of y = log(10x²) is shown for x > 0. Which expansion gives it?", "1 + 2 log x", ["2 + log x", "10 + 2 log x", "2 log(10x)"], "log 10 + log x².", planeDoc({ view: { xmin: -0.5, xmax: 6, ymin: -2, ymax: 3 }, curves: [{ f: (x) => 1 + 2 * L(x), a: 0.05, color: "violet" }], points: [{ x: 1, y: 1, label: "(1, 1)", color: "amber" }], step: { x: 1, y: 0.5 } })),
  num(S`$\log 2\approx0.30103$. How many digits does $2^{100}\cdot5^{98}$ have?`, 99, "2¹⁰⁰·5⁹⁸ = 2²·10⁹⁸ = 4 × 10⁹⁸; its log is 98 + log 4 ≈ 98.60, so it has 99 digits."),
];
