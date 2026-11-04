// 7.4 Solving Logarithmic Equations — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const TOPIC = "7.4 Solving Logarithmic Equations";
export const Q = [
  num(S`Solve $(\log x)^2-\log x-2=0$. Enter the larger root.`, 100, "(u − 2)(u + 1) = 0 ⇒ x = 100 or 0.1."),
  num(S`Solve $(\log x)^2-\log x-2=0$. Enter the smaller root (decimal).`, 0.1, "log x = −1.", null, 0.0001),
  num(S`Solve $(\log_2x)^2=\log_2\left(x^3\right)$. Enter the larger root.`, 8, "u² = 3u ⇒ u = 0 or 3."),
  num(S`Solve $\log_3x+\log_{27}x=4$.`, 27, "(1 + 1/3) log₃ x = 4 ⇒ log₃ x = 3."),
  num(S`Solve $\log_2x+\log_4x+\log_{16}x=7$.`, 16, "(1 + 1/2 + 1/4) log₂ x = 7 ⇒ log₂ x = 4."),
  num(S`Solve $\log_x 8+\log_x 2=4$ ($x>0$, $x\ne1$).`, 2, "log_x 16 = 4 ⇒ x⁴ = 16."),
  num(S`Solve $\log(x^2-15x)=2$. Enter the positive root.`, 20, "x² − 15x − 100 = 0 ⇒ (x − 20)(x + 5) = 0; both make x² − 15x = 100 > 0."),
  num(S`Solve $\log_2(x+1)+\log_2(x+3)=3$.`, 1, "x² + 4x + 3 = 8 ⇒ (x + 5)(x − 1) = 0."),
  num(S`Solve $\log_3(x+1)-\log_3(x-1)=\log_3 x$.`, 1 + Math.SQRT2, "x + 1 = x(x − 1) ⇒ x² − 2x − 1 = 0 ⇒ x = 1 + √2.", null, 0.001),
  num(S`Solve $2\log(x-1)=\log(x+5)$.`, 4, "x² − 2x + 1 = x + 5 ⇒ x² − 3x − 4 = 0 ⇒ x = 4 (reject −1)."),
  num(S`Solve $\log_2(\log_3 x)=1$.`, 9, "log₃ x = 2."),
  num(S`Solve $\log_5(2^x+1)=1$.`, 2, "2ˣ + 1 = 5."),
  mc(S`$\log(x-a)+\log x=\log 2a^2$ has exactly one solution for $a>0$. It is…`, S`$x=2a$`, [S`$x=-a$`, S`$x=a$`, S`$x=a^2$`], "x² − ax − 2a² = 0 ⇒ (x − 2a)(x + a) = 0."),
  mc(S`Why is $x=-2$ rejected in $\log_3x+\log_3(x+5)=\log_3 6$, even though it satisfies $x(x+5)=6$?`, S`$\log_3(-2)$ does not exist`, [S`it makes $x+5$ negative`, S`$-2$ is not a power of $3$`, S`the product law only works for integers`], "Arguments must be positive in the ORIGINAL equation."),
  ms(S`Select every value that solves $\log_2|x|=3$.`, ["8", "−8", "3", "1/8"], [0, 1], "|x| = 8."),
  tf(S`$\log(x^2)=2\log x$ for every $x\ne0$.`, false, "For x < 0 the left side exists but log x does not; log(x²) = 2 log|x|."),
  mc("The graph shows y = (log x)² − log x − 2. Where are its zeros?", "x = 0.1 and x = 100", ["x = −1 and x = 2", "x = 1 and x = 100", "x = 10 only"], "log x = −1 or 2.", planeDoc({ view: { xmin: -5, xmax: 120, ymin: -3, ymax: 3 }, curves: [{ f: (x) => L(x) ** 2 - L(x) - 2, a: 0.05, color: "violet" }], step: { x: 10, y: 0.5 } })),
  mc("The graph shows y = log₂(x + 1) + log₂(x + 3) and y = 3. Read the solution.", "x = 1", ["x = −5", "x = 3", "x = 2"], "(x + 1)(x + 3) = 8; reject −5.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -3, ymax: 6 }, curves: [{ f: (x) => Math.log2(x + 1) + Math.log2(x + 3), a: -0.99, color: "violet" }], lines: [{ m: 0, b: 3, color: "blue", dash: true }], vlines: [{ x: -1, color: "red", dash: true }], step: { x: 1, y: 1 } })),
  mc("The graphs of y = log₃(x + 1) − log₃(x − 1) and y = log₃ x are shown. Their intersection is at about…", "x ≈ 2.41", ["x ≈ 1.41", "x = 3", "x ≈ 0.41"], "x = 1 + √2.", planeDoc({ view: { xmin: 0, xmax: 6, ymin: -1, ymax: 3 }, curves: [{ f: (x) => Math.log((x + 1) / (x - 1)) / Math.log(3), a: 1.02, color: "violet" }, { f: (x) => Math.log(x) / Math.log(3), a: 0.05, color: "blue" }], step: { x: 1, y: 0.5 } })),
  mc("The graph shows y = log(x² − 15x) and y = 2. How many solutions are there?", "two", ["one", "none", "four"], "x = 20 and x = −5 both give x² − 15x = 100.", planeDoc({ view: { xmin: -15, xmax: 30, ymin: -1, ymax: 3 }, curves: [{ f: (x) => L(x * x - 15 * x), b: -0.01, color: "violet" }, { f: (x) => L(x * x - 15 * x), a: 15.01, color: "violet" }], lines: [{ m: 0, b: 2, color: "blue", dash: true }], step: { x: 5, y: 0.5 } })),
];
