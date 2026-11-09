// 7.2 Zero and Negative Exponents — 20 hard questions
import { mc, ms, num, tf, stripSvg, rep, eDoc, P, n4 } from "./ek.mjs";
const S = String.raw;

export const TOPIC = "7.2 Zero and Negative Exponents";
export const Q = [
  num(S`Evaluate $\frac{2^{-3}\times4^{2}}{8^{-1}}$.`, 16, "2⁻³ × 2⁴ × 2³ = 2⁴.", stripSvg([{ label: "exponents of 2", items: ["−3", "+4", "+3", "=", "4"] }])),
  num(S`Evaluate $\left(3^{-1}-6^{-1}\right)^{-2}$.`, 36, "(1/6)⁻² = 36."),
  num(S`Evaluate $\frac{5^{-2}+5^{-1}}{5^{-3}}$.`, 30, "(1/25 + 1/5) × 125 = 5 + 25."),
  n4(S`Evaluate $\left(\frac{2}{5}\right)^{-2}\times\left(\frac{5}{2}\right)^{-3}$ (decimal).`, 0.4, "(5/2)² × (2/5)³ = 2/5."),
  mc(S`Simplify $\left(\frac{2x^{-3}y^{2}}{x^{2}y^{-1}}\right)^{-2}$.`, S`$\frac{x^{10}}{4y^{6}}$`, [S`$\frac{4x^{10}}{y^{6}}$`, S`$\frac{x^{2}}{4y^{6}}$`, S`$4x^{10}y^{6}$`], "Inside: 2x⁻⁵y³; then to the −2."),
  num(S`Find $n$: $\frac{1}{27}\times9^{n}=3^{5}$.`, 4, "3^(2n − 3) = 3⁵."),
  num(S`Find $n$: $\left(\frac{1}{2}\right)^{n}=64$.`, -6, "2^(−n) = 2⁶."),
  ms(S`Select every TRUE statement.`, [S`$0.5^{-1}=2$`, S`$(-1)^{-3}=-1$`, S`$2^{-1}+2^{-1}=2^{-2}$`, S`$10^{-2}=0.01$`], [0, 1, 3], "2⁻¹ + 2⁻¹ = 1."),
  tf(S`$\left(a^{-1}+b^{-1}\right)^{-1}=a+b$ for all non-zero $a,\ b$.`, false, "Try a = b = 2: (1)⁻¹ = 1 ≠ 4."),
  n4("The graph of y = 4ˣ is shown. Enter y at x = −1.5 (decimal).", 0.125, "4^(−3/2) = 1/8.", eDoc([(x) => 4 ** x], { view: { xmin: -2, xmax: 1.5, ymin: -0.5, ymax: 8 }, step: { x: 0.5, y: 1 }, points: [P(-1.5, 0.125, "(−1.5, ?)")] })),
  num(S`Evaluate $\frac{(-2)^{-3}\times(-2)^{6}}{(-2)^{0}}$.`, -8, "(−2)³."),
  num(S`Evaluate $\frac{10^{-2}\times10^{5}}{10^{-1}\times10^{2}}$.`, 100, "10^(3 − 1)."),
  mc("The diagram compares 3⁻² and −3². Which is correct?", "3⁻² = 1/9 and −3² = −9", ["both equal −9", "both equal 1/9", "3⁻² = −9 and −3² = 1/9"], "Negative exponent vs negative sign.", stripSvg([{ label: "3⁻²", items: ["1/9"], color: "green" }, { label: "−3²", items: ["−9"], color: "red" }])),
  num(S`Evaluate $2^{-2}\times12+3^{0}\times5^{-1}\times10$.`, 5, "3 + 2."),
  n4(S`Evaluate $\frac{(0.5)^{-2}}{(0.25)^{-1}}$.`, 1, "4 ÷ 4."),
  num(S`If $2^{a}=\frac18$ and $3^{b}=9$, find $a+b$.`, -1, "a = −3, b = 2."),
  mc(S`Simplify $\frac{(a^{2}b^{-1})^{-3}}{(a^{-1}b)^{2}}$.`, S`$\frac{b}{a^{4}}$`, [S`$\frac{b^{5}}{a^{4}}$`, S`$a^{4}b$`, S`$\frac{1}{a^{4}b}$`], "a⁻⁶b³ ÷ a⁻²b² = a⁻⁴b."),
  num(S`Evaluate $\left(\frac{3}{4}\right)^{-2}\times\left(\frac{3}{2}\right)^{2}\times4^{-1}$.`, 1, "16/9 × 9/4 × 1/4."),
  num(S`The value of $k^{-2}$ is $\frac{1}{49}$ and $k>0$. Enter $k$.`, 7, "k² = 49.", stripSvg([{ label: "k⁻² = 1/49", items: ["1", "/", "k", "k"] }])),
  num(S`Evaluate $\frac{1}{2^{-3}}+\frac{1}{3^{-2}}$.`, 17, "8 + 9."),
];
