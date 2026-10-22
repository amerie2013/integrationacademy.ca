// 9.3 Logarithms and Their Graphs — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const S = String.raw;
const lb = (b) => (x) => Math.log(x) / Math.log(b);

export const TOPIC = "9.3 Logarithms and Their Graphs";
export const Q = [
  num(S`Evaluate $\log_3(\log_2 512)$.`, 2, "log₂ 512 = 9; log₃ 9 = 2."),
  num(S`Evaluate $\log_{\sqrt2}8$.`, 6, "(√2)⁶ = 8."),
  num(S`Evaluate $\log_{25}\frac{1}{125}$ as a decimal.`, -1.5, "25^(−3/2) = 1/125.", null, 0.001),
  num(S`Solve $\log_x 32=\frac53$.`, 8, "x = 32^(3/5) = 8."),
  num(S`Solve $\log_2(x^2-1)=3$ for $x>0$.`, 3, "x² − 1 = 8."),
  num(S`Solve $\log_5(\log_2 x)=1$.`, 32, "log₂ x = 5."),
  num(S`The graph of $y=\log_b(x-h)$ has asymptote $x=-1$ and passes through $(3,2)$. Find $b$.`, 2, "h = −1; b² = 4.", planeDoc({ view: { xmin: -2, xmax: 9, ymin: -3, ymax: 4 }, curves: [{ f: (x) => lb(2)(x + 1), a: -0.999, b: 9 }], vlines: [{ x: -1, color: "red", dash: true }], points: [P(3, 2, "", "red")], step: { x: 1, y: 1 } })),
  num(S`The graph of $y=a\ln x+k$ passes through $(1,4)$ and $(e^2,10)$. Find $a$.`, 3, "k = 4; 2a + 4 = 10."),
  mc(S`The domain of $f(x)=\ln(x^2-9)$ is:`, S`$x<-3$ or $x>3$`, [S`$-3<x<3$`, S`$x>3$`, S`$x>9$`], "x² > 9."),
  mc(S`The domain of $f(x)=\log(4x-x^2)$ is:`, S`$0<x<4$`, [S`$x<0$ or $x>4$`, S`$x>4$`, S`$x>0$`], "x(4 − x) > 0."),
  mc("The graph shows y = −2 log₃(x − 1). Which statement is correct?", "it decreases and its x-intercept is (2, 0)", ["it increases and its x-intercept is (2, 0)", "its asymptote is x = −1", "its range is y > 0"], "a < 0 flips it; log₃(1) = 0 at x = 2.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: -5, ymax: 5 }, curves: [{ f: (x) => -2 * lb(3)(x - 1), a: 1.001, b: 12 }], vlines: [{ x: 1, color: "red", dash: true }], points: [P(2, 0, "", "green"), P(10, -4, "", "blue")], step: { x: 1, y: 1 } })),
  num(S`Find the inverse of $f(x)=3\cdot2^{x-1}$ and evaluate $f^{-1}(24)$.`, 4, "2^(x−1) = 8 ⇒ x = 4."),
  mc(S`The inverse of $f(x)=\ln(2x+1)$ is:`, S`$\dfrac{e^x-1}{2}$`, [S`$\dfrac{e^x+1}{2}$`, S`$e^{2x+1}$`, S`$2e^x-1$`], "eʸ = 2x + 1."),
  ms(S`For $f(x)=\log_2 x$, which are true? Select all.`, [S`$f(8x)=f(x)+3$`, S`$f(x^2)=2f(x)$ for $x>0$`, S`$f(x+8)=f(x)+3$`, S`$f\left(\frac1x\right)=-f(x)$`], [0, 1, 3], "log₂(x + 8) has no simple split."),
  tf(S`The graphs of $y=\log_2 x$ and $y=\log_{1/2}x$ are reflections in the x-axis.`, true, "log_(1/2) x = −log₂ x."),
  num("Two earthquakes differ by 2.3 on the magnitude scale M = log(A/A₀). How many times larger is the amplitude of the stronger one (nearest whole)?", Math.round(10 ** 2.3), "10^2.3.", null, 1),
  num("Black coffee has pH 5 and a cleaning solution has pH 11. How many times greater is [H⁺] in the coffee?", 1000000, "10^(11 − 5)."),
  mc("The graph of y = log_b x and y = 1 meet at x = 4. Find b.", "4", ["1", "2", "16"], "log_b 4 = 1.", planeDoc({ view: { xmin: -1, xmax: 10, ymin: -3, ymax: 3 }, curves: [{ f: lb(4), a: 0.01, b: 10 }], lines: [{ m: 0, b: 1, color: "amber", dash: true }], points: [P(4, 1, "", "red")], step: { x: 1, y: 1 } })),
  num(S`How many integers $n$ satisfy $1<\log_2 n<5$?`, 29, "2 < n < 32: n = 3, …, 31."),
  mc("The point (a, 3) lies on y = log₂x and (3, b) lies on y = 2ˣ. Find a + b.", "16", ["9", "11", "12"], "a = 8, b = 8.", planeDoc({ view: { xmin: -1, xmax: 10, ymin: -1, ymax: 10 }, curves: [{ f: lb(2), a: 0.01, b: 10 }, { f: (x) => 2 ** x, color: "green" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [P(8, 3, "", "blue"), P(3, 8, "", "green")], step: { x: 1, y: 1 } })),
];
