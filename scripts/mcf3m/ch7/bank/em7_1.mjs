// 7.1 The Laws of Exponents — 20 easy + 20 medium
import { mc, ms, num, tf, fill, stripSvg, rep } from "./ek.mjs";
const S = String.raw;

export const E = [
  num(S`$6^2\times6^5=6^n$. Enter $n$.`, 7, "2 + 5."),
  num(S`$\frac{8^9}{8^3}=8^n$. Enter $n$.`, 6, "9 − 3."),
  num(S`$(5^4)^2=5^n$. Enter $n$.`, 8, "4 × 2."),
  num(S`Evaluate $2^2\times2^3$.`, 32, "2⁵."),
  num(S`Evaluate $\frac{3^7}{3^5}$.`, 9, "3²."),
  num(S`Evaluate $(2^2)^3$.`, 64, "2⁶."),
  num(S`Evaluate $10^4\div10^2$.`, 100, "10²."),
  num(S`Evaluate $(-1)^{8}\times(-1)^{3}$.`, -1, "(−1)¹¹."),
  num(S`$x^3\cdot x^9=x^n$. Enter $n$.`, 12, "3 + 9."),
  num(S`$\frac{y^{10}}{y^{4}}=y^n$. Enter $n$.`, 6, "10 − 4."),
  num(S`$(m^5)^3=m^n$. Enter $n$.`, 15, "5 × 3."),
  mc(S`$4^3\times4^2$ equals …`, S`$4^5$`, [S`$16^5$`, S`$4^6$`, S`$8^5$`], "Keep the base."),
  mc(S`$(3x)^2$ equals …`, S`$9x^2$`, [S`$3x^2$`, S`$6x^2$`, S`$9x$`], "Square both factors."),
  tf(S`$2^3\times5^2$ can be written as $10^5$.`, false, "Different bases."),
  tf(S`$(a^2)^3=a^6$.`, true, "Multiply exponents."),
  fill(S`When multiplying powers with the same base, you ____ the exponents.`, ["add"], "Product law."),
  mc("The diagram shows the factors of a product. Which single power is it?", S`$7^5$`, [S`$7^6$`, S`$49^5$`, S`$7^{6}\div7$`], "3 + 2 factors of 7.", stripSvg([{ label: "7³", items: rep("7", 3) }, { label: "7²", items: rep("7", 2), color: "green" }])),
  num("The diagram shows (2³)², groups of factors. Enter the total number of factors of 2.", 6, "2 groups of 3.", stripSvg([{ label: "(2³)²", items: rep("2", 6), colors: [...rep("violet", 3), ...rep("green", 3)] }])),
  num(S`Evaluate $\left(\frac13\right)^2\times\left(\frac13\right)^{1}\times27$.`, 1, "(1/3)³ × 27."),
  num(S`Evaluate $(-2)^3$.`, -8, "Odd power of a negative."),
];

export const M = [
  num(S`Evaluate $\frac{5^6\times5^2}{5^5}$.`, 125, "5³."),
  num(S`Evaluate $\frac{(3^3)^2}{3^4}$.`, 9, "3²."),
  num(S`Evaluate $\frac{2^{10}}{(2^2)^4}$.`, 4, "2²."),
  num(S`Evaluate $\frac{(-3)^7}{(-3)^4}$.`, -27, "(−3)³."),
  num(S`$27^2=3^n$. Enter $n$.`, 6, "27 = 3³."),
  num(S`$4^5=2^n$. Enter $n$.`, 10, "4 = 2²."),
  num(S`$(2x^3)^4=kx^n$. Enter $k$.`, 16, "2⁴."),
  num(S`$(2x^3)^4=kx^n$. Enter $n$.`, 12, "3 × 4."),
  num(S`$\frac{12a^9}{3a^4}=ka^n$. Enter $k+n$.`, 9, "4a⁵."),
  mc(S`Simplify $(-3p^2q)^3$.`, S`$-27p^6q^3$`, [S`$-9p^6q^3$`, S`$27p^6q^3$`, S`$-27p^5q^3$`], "Cube each factor."),
  mc(S`Simplify $\frac{(x^4)^2\cdot x}{x^5}$.`, S`$x^4$`, [S`$x^3$`, S`$x^{8}$`, S`$x^{2}$`], "x⁹ ÷ x⁵."),
  ms(S`Select every expression equal to $2^{12}$.`, [S`$(2^4)^3$`, S`$2^6\times2^6$`, S`$4^6$`, S`$2^{15}\div2^{3}$`, S`$8^3$`], [0, 1, 2, 3], "8³ = 2⁹."),
  tf(S`$\left(\frac{2}{5}\right)^3=\frac{8}{125}$.`, true, "Power of a quotient."),
  tf(S`$-3^2=(-3)^2$.`, false, "−9 vs 9."),
  fill(S`$(ab)^n=a^n\,\square^n$. The missing letter is ____.`, ["b"], "Each factor."),
  mc("In the diagram, gray factors cancel. Which power is left?", S`$x^4$`, [S`$x^{3}$`, S`$x^{11}$`, S`$x^{7}$`], "7 − 3.", stripSvg([{ label: "top x⁷", items: rep("x", 7), colors: [...rep("gray", 3), ...rep("violet", 4)] }, { label: "bottom x³", items: rep("x", 3), color: "gray" }])),
  num("From the diagram (top: 10 factors of y, bottom: 4), enter the exponent left.", 6, "10 − 4.", stripSvg([{ label: "top", items: rep("y", 10), colors: [...rep("gray", 4), ...rep("violet", 6)] }, { label: "bottom", items: rep("y", 4), color: "gray" }])),
  num(S`Evaluate $\frac{6^5}{3^5}$.`, 32, "(6/3)⁵ = 2⁵."),
  num(S`Evaluate $(0.5)^3\times2^3$.`, 1, "(0.5 × 2)³."),
  num(S`$\frac{x^a\cdot x^4}{x^2}=x^9$. Enter $a$.`, 7, "a + 4 − 2 = 9."),
];
