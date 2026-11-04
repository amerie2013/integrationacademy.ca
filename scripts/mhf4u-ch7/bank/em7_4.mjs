// 7.4 Solving Logarithmic Equations — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const E = [
  num(S`Solve $\log_2x=6$.`, 64, "x = 2⁶."),
  num(S`Solve $\log_5x=-1$ (decimal).`, 0.2, "x = 5⁻¹.", null, 0.0001),
  num(S`Solve $\log x=2.5$ to the nearest whole number.`, 10 ** 2.5, "x = 10^2.5 ≈ 316.", null, 0.6),
  num(S`Solve $\log_3(x-4)=2$.`, 13, "x − 4 = 9."),
  num(S`Solve $\log_4(2x)=3$.`, 32, "2x = 64."),
  num(S`Solve $\log(x+1)=1$.`, 9, "x + 1 = 10."),
  num(S`Solve $\log_7(3x+1)=\log_7 22$.`, 7, "3x + 1 = 22."),
  num(S`Solve $\log(5x-2)=\log(3x+6)$.`, 4, "5x − 2 = 3x + 6."),
  num(S`Solve $\log_x 49=2$ ($x>0$).`, 7, "x² = 49, and the base must be positive."),
  num(S`Solve $\log_2 x+\log_2 4=5$.`, 8, "log₂ 4x = 5 ⇒ 4x = 32."),
  mc(S`What is the first step to solve $\log_3(x+2)=4$?`, S`rewrite as $x+2=3^4$`, [S`write $x+2=4$`, S`divide both sides by $\log 3$`, S`write $x+2=4^3$`], "log_b A = c ⇔ A = b^c."),
  mc(S`For which $x$ is $\log(x-6)$ defined?`, S`$x>6$`, [S`$x\ge6$`, S`$x<6$`, S`every real $x$`], "The argument must be positive."),
  tf(S`$\log x=-2$ has no solution because a logarithm cannot be negative.`, false, "x = 10⁻² = 0.01. The argument, not the log, must be positive."),
  tf(S`If $\log_5A=\log_5B$ then $A=B$.`, true, "log₅ is one-to-one."),
  tf(S`$\log(x-3)=\log(2x)$ has the solution $x=-3$.`, false, "x = −3 gives log(−6), which does not exist; there is no solution."),
  fill(S`$\log_6 x=2$ means $x=$ ____.`, ["36"], "6² = 36."),
  fill(S`A root that satisfies the algebra but not the original equation is called ____.`, ["extraneous", "an extraneous root", "extraneous root"], "It must be rejected."),
  mc(S`Solve $\log_2(x+3)=\log_2(2x-1)$.`, S`$x=4$`, [S`$x=2$`, S`$x=-4$`, S`no solution`], "x + 3 = 2x − 1."),
  mc("The graph shows y = log₂(x − 1) and y = 3. Where do they meet?", "x = 9", ["x = 4", "x = 8", "x = 7"], "x − 1 = 2³.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: -2, ymax: 4.5 }, curves: [{ f: (x) => Math.log2(x - 1), a: 1.01, color: "violet" }], lines: [{ m: 0, b: 3, color: "blue", dash: true }], vlines: [{ x: 1, color: "red", dash: true }], step: { x: 1, y: 1 } })),
  mc("The graph shows y = log x and y = −1. Read the solution of log x = −1.", "x = 0.1", ["x = −10", "x = −0.1", "x = 10"], "x = 10⁻¹.", planeDoc({ view: { xmin: -0.2, xmax: 2, ymin: -2, ymax: 0.6 }, curves: [{ f: (x) => L(x), a: 0.005, color: "violet" }], lines: [{ m: 0, b: -1, color: "blue", dash: true }], points: [{ x: 0.1, y: -1, label: "(0.1, −1)", color: "amber" }], step: { x: 0.2, y: 0.5 } })),
];

export const M = [
  num(S`Solve $\log_3x+\log_3(x-8)=2$.`, 9, "x² − 8x − 9 = 0 ⇒ x = 9 (reject −1)."),
  num(S`Solve $\log x+\log(x+15)=2$.`, 5, "x² + 15x − 100 = 0 ⇒ (x + 20)(x − 5) = 0."),
  num(S`Solve $\log_2(x+4)+\log_2(x-2)=4$.`, 4, "x² + 2x − 8 = 16 ⇒ x² + 2x − 24 = 0 ⇒ x = 4."),
  num(S`Solve $\log_5(3x)-\log_5(x-2)=1$.`, 5, "3x = 5(x − 2) ⇒ x = 5."),
  num(S`Solve $\log(x+9)-\log x=1$.`, 1, "x + 9 = 10x."),
  num(S`Solve $\log_2(5x+2)-\log_2(x-1)=3$.`, 10 / 3, "5x + 2 = 8x − 8 ⇒ x = 10/3.", null, 0.001),
  num(S`Solve $2\log_3x=\log_3(2x+3)$.`, 3, "x² = 2x + 3 ⇒ x = 3 (reject −1)."),
  num(S`Solve $\log_4x+\log_4(x+12)=3$.`, 4, "x² + 12x − 64 = 0 ⇒ (x + 16)(x − 4) = 0."),
  num(S`Solve $\log_6(x+1)+\log_6(x+2)=1$.`, 1, "x² + 3x + 2 = 6 ⇒ (x + 4)(x − 1) = 0."),
  num(S`Solve $\log(2x)=2\log x-\log 5$.`, 10, "2x = x²/5 ⇒ x = 10 (x = 0 is not allowed)."),
  mc(S`$\log x+\log(x-1)=\log 6$. Which is the solution set?`, S`$\{3\}$`, [S`$\{3,-2\}$`, S`$\{-2\}$`, S`$\{2,3\}$`], "x² − x − 6 = 0; reject −2."),
  mc(S`Which equation is equivalent to $\log_2x+\log_2(x-2)=3$ (with $x>2$)?`, S`$x^2-2x=8$`, [S`$2x-2=8$`, S`$x^2-2x=3$`, S`$x^2-2x=6$`], "x(x − 2) = 2³."),
  ms(S`Select every equation whose solution set includes $x=4$.`, [S`$\log_2 x=2$`, S`$\log x+\log(x-3)=\log4$`, S`$\log_4(x+12)=2$`, S`$2\log x=\log 16$`], [0, 1, 2, 3], "Check each: 2² = 4; 4·1 = 4; 16 = 4²; x² = 16 with x > 0."),
  tf(S`$\log(x-2)+\log(x-3)=\log 2$ has two solutions.`, false, "x² − 5x + 4 = 0 gives 1 and 4; x = 1 is extraneous."),
  tf(S`$\log_3(x^2)=4$ has two solutions.`, true, "x² = 81 ⇒ x = ±9; both make x² positive."),
  fill(S`$\log_2x-\log_2 3=4$ gives $x=$ ____.`, ["48"], "x/3 = 16."),
  fill(S`Solving $\log x+\log(x-21)=2$ gives $x^2-21x-100=0$. The solution is $x=$ ____.`, ["25"], "(x − 25)(x + 4) = 0; reject −4."),
  mc("The graph shows y = log₂ x + log₂(x − 2) and y = 3. Read the solution.", "x = 4", ["x = 3", "x = −2", "x = 8"], "x(x − 2) = 8.", planeDoc({ view: { xmin: 1, xmax: 8, ymin: -2, ymax: 6 }, curves: [{ f: (x) => Math.log2(x) + Math.log2(x - 2), a: 2.01, color: "violet" }], lines: [{ m: 0, b: 3, color: "blue", dash: true }], step: { x: 1, y: 1 } })),
  mc("The graph shows y = 2 log x and y = log(x + 2). How many solutions does 2 log x = log(x + 2) have?", "one", ["two", "none", "infinitely many"], "x² = x + 2 gives 2 and −1; only x = 2 works.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -2, ymax: 1.5 }, curves: [{ f: (x) => 2 * L(x), a: 0.05, color: "violet" }, { f: (x) => L(x + 2), a: -1.95, color: "blue" }], step: { x: 1, y: 0.5 } })),
  num(S`Solve $\log_3(x-4)=2-\log_3(x+4)$.`, 5, "x² − 16 = 9 ⇒ x = 5 (reject −5)."),
];
