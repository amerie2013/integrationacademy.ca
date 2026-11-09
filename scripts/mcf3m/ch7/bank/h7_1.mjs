// 7.1 The Laws of Exponents — 20 hard questions
import { mc, ms, num, tf, stripSvg, rep } from "./ek.mjs";
const S = String.raw;

export const TOPIC = "7.1 The Laws of Exponents";
export const Q = [
  num(S`Evaluate $\frac{(2^5)^2\times2^3}{(2^3)^4}$.`, 2, "2^(10 + 3 − 12)."),
  num(S`Evaluate $\frac{9^3\times27^2}{3^{10}}$.`, 9, "3⁶ × 3⁶ ÷ 3¹⁰.", stripSvg([{ label: "9³ = 3⁶", items: rep("3", 6) }, { label: "27² = 3⁶", items: rep("3", 6), color: "green" }, { label: "÷ 3¹⁰", items: rep("3", 10), color: "gray" }])),
  num(S`Evaluate $\frac{4^6\times8^2}{16^4}$.`, 4, "2¹² × 2⁶ ÷ 2¹⁶."),
  num(S`$25^4\times125=5^n$. Enter $n$.`, 11, "5⁸ × 5³."),
  num(S`$\frac{(3x^2y)^3(2xy^4)^2}{6x^5y^8}=kx^ay^b$. Enter $k$.`, 18, "27 × 4 ÷ 6."),
  num(S`For that same expression, enter $a+b$.`, 6, "x^(6 + 2 − 5) = x³ and y^(3 + 8 − 8) = y³, so a + b = 6."),
  mc(S`Simplify $\frac{(-2a^3b^2)^4}{(4a^5b^3)^2}$.`, S`$a^2b^2$`, [S`$-a^2b^2$`, S`$\frac{a^2b^2}{2}$`, S`$4a^2b^2$`], "16a¹²b⁸ ÷ 16a¹⁰b⁶."),
  mc("The diagram shows (x²)³ · x⁴ ÷ x⁵. Which power is the result?", S`$x^5$`, [S`$x^{4}$`, S`$x^{6}$`, S`$x^{9}$`], "6 + 4 − 5.", stripSvg([{ label: "(x²)³ · x⁴", items: rep("x", 10), colors: [...rep("gray", 5), ...rep("violet", 5)] }, { label: "÷ x⁵", items: rep("x", 5), color: "gray" }])),
  num(S`Evaluate $(-1)^{101}+(-1)^{100}+(-1)^{99}$.`, -1, "−1 + 1 − 1."),
  ms(S`Select every TRUE statement.`, [S`$2^{10}>10^3$`, S`$(2^3)^2=2^{3^2}$`, S`$3^{20}=9^{10}$`, S`$5^3\times2^3=10^3$`], [0, 2, 3], "2^(3²) = 2⁹."),
  tf(S`$2^{30}>4^{14}$.`, true, "4¹⁴ = 2²⁸."),
  num(S`Find $n$: $8^{n}=2^{21}$.`, 7, "3n = 21."),
  num(S`Find $n$: $\frac{3^{n}\times3^{4}}{3^{2}}=3^{9}$.`, 7, "n + 2 = 9."),
  num(S`Evaluate $\frac{12^4}{4^4\times3^3}$.`, 3, "3⁴ ÷ 3³."),
  mc("The strip diagram groups the factors of 2 in 8 × 4². Which single power is it?", S`$2^7$`, [S`$2^{5}$`, S`$2^{6}$`, S`$8^{3}$`], "2³ × 2⁴.", stripSvg([{ label: "8 = 2³", items: rep("2", 3) }, { label: "4² = 2⁴", items: rep("2", 4), color: "green" }])),
  num(S`Evaluate $\frac{(0.2)^5\times5^5}{(0.5)^2}$.`, 4, "1 ÷ 0.25."),
  num(S`If $x^{3k}\cdot x^{k}=x^{24}$, find $k$.`, 6, "4k = 24."),
  num(S`Evaluate $\left(\frac{3}{2}\right)^4\times\left(\frac{2}{3}\right)^2$.`, 2.25, "(3/2)².", stripSvg([{ label: "(3/2)⁴", items: rep("3/2", 4), colors: [...rep("gray", 2), ...rep("violet", 2)] }, { label: "(2/3)²", items: rep("2/3", 2), color: "gray" }])),
  num(S`Evaluate $\frac{10^{6}}{2^{6}\times5^{4}}$.`, 25, "5⁶ ÷ 5⁴."),
  num(S`How many zeros are at the end of $2^{8}\times5^{6}$?`, 6, "10⁶ × 2²."),
];
