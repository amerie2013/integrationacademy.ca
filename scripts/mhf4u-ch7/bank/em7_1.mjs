// 7.1 Equivalent Forms of Exponential Equations — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const E = [
  num(S`Write $128$ as a power of $2$. Enter the exponent.`, 7, "2⁷ = 128."),
  num(S`Write $\frac1{49}$ as a power of $7$. Enter the exponent.`, -2, "49 = 7², and a reciprocal gives a negative exponent."),
  num(S`Write $\sqrt{5}$ as a power of $5$. Enter the exponent (decimal).`, 0.5, "A square root is the power 1/2.", null, 0.001),
  num(S`Write $1$ as a power of $6$. Enter the exponent.`, 0, "b⁰ = 1."),
  mc(S`Which is equal to $9^x$?`, S`$3^{2x}$`, [S`$3^{x+2}$`, S`$3^{x^2}$`, S`$3^{x/2}$`], "(3²)ˣ = 3²ˣ."),
  mc(S`Which is equal to $2^{x+4}$?`, S`$16\cdot2^x$`, [S`$8\cdot2^x$`, S`$2^x+16$`, S`$2^{4x}$`], "2ˣ⁺⁴ = 2ˣ·2⁴."),
  num(S`Solve $3^x=81$.`, 4, "81 = 3⁴."),
  num(S`Solve $2^{x+1}=32$.`, 4, "32 = 2⁵, so x + 1 = 5."),
  num(S`Solve $10^{x}=0.001$.`, -3, "0.001 = 10⁻³."),
  num(S`Solve $5^{2x}=625$.`, 2, "625 = 5⁴, so 2x = 4."),
  num(S`Solve $4^x=2$ (decimal).`, 0.5, "4^(1/2) = 2.", null, 0.001),
  num(S`Solve $6^{x-3}=1$.`, 3, "1 = 6⁰, so x − 3 = 0."),
  tf(S`$8^x=2^{3x}$ for every $x$.`, true, "(2³)ˣ = 2³ˣ."),
  tf(S`$4^{x+1}=2^{2x+1}$ for every $x$.`, false, "4ˣ⁺¹ = 2²⁽ˣ⁺¹⁾ = 2²ˣ⁺²."),
  tf(S`If $7^a=7^b$, then $a=b$.`, true, "y = 7ˣ is one-to-one."),
  fill(S`$\frac1{8}=2^{\,\square}$. The exponent is ____.`, ["-3", "−3"], "8 = 2³."),
  fill(S`To solve $9^x=27$, write both sides as powers of ____.`, ["3"], "9 = 3², 27 = 3³."),
  mc(S`Which base would you use to solve $4^x=8$?`, "2", ["4", "8", "10"], "Both 4 and 8 are powers of 2: 2x = 3."),
  mc("The graph shows y = 2ˣ and the line y = 16. Where do they meet?", "x = 4", ["x = 8", "x = 16", "x = 2"], "2⁴ = 16.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 20 }, lines: [{ m: 0, b: 16, color: "blue", dash: true }], curves: [{ f: (x) => 2 ** x, color: "violet" }], step: { x: 1, y: 2 } })),
  mc("The graph shows y = 3ˣ. Use it to solve 3ˣ = 1/3.", "x = −1", ["x = 1", "x = 0", "x = 1/3"], "3⁻¹ = 1/3.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 9 }, curves: [{ f: (x) => 3 ** x, color: "violet" }], points: [{ x: -1, y: 1 / 3, label: "(−1, 1/3)", color: "amber" }], step: { x: 1, y: 1 } })),
];

export const M = [
  num(S`Solve $8^{x}=4^{x+2}$.`, 4, "2³ˣ = 2²ˣ⁺⁴."),
  num(S`Solve $27^{x-1}=9^{x}$.`, 3, "3x − 3 = 2x."),
  num(S`Solve $\left(\frac15\right)^x=125$.`, -3, "5⁻ˣ = 5³."),
  num(S`Solve $4^{2x-1}=\frac1{16}$ (decimal).`, -0.5, "4²ˣ⁻¹ = 4⁻², so 2x − 1 = −2.", null, 0.001),
  num(S`Solve $9^{x}=\sqrt3$ (decimal).`, 0.25, "3²ˣ = 3^(1/2).", null, 0.001),
  num(S`Solve $2^{3x}\cdot2^{x}=2^{12}$.`, 3, "Add exponents: 4x = 12."),
  num(S`Solve $\dfrac{5^{4x}}{5^{x}}=5^{9}$.`, 3, "Subtract exponents: 3x = 9."),
  num(S`Solve $100^{x}=1000^{x-1}$.`, 3, "10²ˣ = 10³ˣ⁻³."),
  num(S`Solve $2^{x}+2^{x}=64$.`, 5, "2·2ˣ = 2ˣ⁺¹ = 2⁶."),
  num(S`Solve $3^{x+1}-3^{x}=54$.`, 3, "3ˣ(3 − 1) = 54, so 3ˣ = 27."),
  mc(S`Write $\dfrac{8^{x}}{4}$ as a power of $2$.`, S`$2^{3x-2}$`, [S`$2^{3x+2}$`, S`$2^{x-2}$`, S`$2^{2x}$`], "2³ˣ ÷ 2²."),
  mc(S`Write $\sqrt[3]{25^{x}}$ as a power of $5$.`, S`$5^{2x/3}$`, [S`$5^{3x/2}$`, S`$5^{2x+3}$`, S`$5^{x/3}$`], "(5²ˣ)^(1/3)."),
  mc(S`$2^{x+5}=k\cdot2^x$ for every $x$. Find $k$.`, "32", ["5", "10", "25"], "2ˣ⁺⁵ = 2ˣ·2⁵."),
  ms(S`Select every expression equal to $16^x$.`, [S`$2^{4x}$`, S`$4^{2x}$`, S`$(2^x)^4$`, S`$4^{x+2}$`], [0, 1, 2], "16 = 2⁴ = 4²."),
  tf(S`The equation $2^x+2^x=2^6$ can be solved by writing $x+x=6$.`, false, "A sum of powers is not one power: 2·2ˣ = 2ˣ⁺¹, so x = 5."),
  tf(S`$\left(\tfrac14\right)^{x}=2^{-2x}$ for every $x$.`, true, "1/4 = 2⁻²."),
  fill(S`Solve $49^{x}=7^{x+6}$. $x=$ ____`, ["6"], "2x = x + 6."),
  mc("The graphs of y = 2ˣ⁺² and y = 4·2ˣ are drawn. What do you notice?", "they are the same curve", ["they are parallel", "they cross once", "they never meet"], "2ˣ⁺² = 2ˣ·4.", planeDoc({ view: { xmin: -4, xmax: 2.5, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 2 ** (x + 2), color: "violet" }], points: [{ x: 0, y: 4, label: "(0, 4)", color: "amber" }, { x: -2, y: 1, label: "(−2, 1)", color: "blue" }], step: { x: 1, y: 2 } })),
  mc("The graph shows y = 4ˣ and y = 8. Solve 4ˣ = 8 exactly.", "x = 3/2", ["x = 2", "x = 4/3", "x = 1"], "2²ˣ = 2³.", planeDoc({ view: { xmin: -1, xmax: 2.5, ymin: -1, ymax: 20 }, lines: [{ m: 0, b: 8, color: "blue", dash: true }], curves: [{ f: (x) => 4 ** x, color: "violet" }], points: [{ x: 1.5, y: 8, label: "(1.5, 8)", color: "amber" }], step: { x: 0.5, y: 2 } })),
  num(S`Solve $3^{x^2}=3^{4}\cdot3^{x+2}$. Enter the larger root.`, 3, "x² = x + 6, so (x − 3)(x + 2) = 0."),
];
