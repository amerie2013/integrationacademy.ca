const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "4.1",
  title: "Laws of Exponents & Rational Exponents",
  intro: "The exponent laws let you simplify products, quotients, and powers, and rational exponents connect powers to roots. This worksheet drills all of them.",
  lesson: [
    ["Product, quotient, power", R`$x^a \cdot x^b = x^{a+b}$, $\dfrac{x^a}{x^b} = x^{a-b}$, and $(x^a)^b = x^{ab}$.`],
    ["Zero and negative", R`$x^0 = 1$ (for $x \ne 0$) and $x^{-n} = \dfrac{1}{x^n}$.`],
    ["Rational exponents", R`$x^{1/n} = \sqrt[n]{x}$ and $x^{m/n} = \left(\sqrt[n]{x}\right)^m$.`],
  ],
  examples: [
    ["Example 1: Product", R`Simplify $x^3 \cdot x^5$.`, R`Add exponents: $x^{3+5} = x^8$.`],
    ["Example 2: Quotient", R`Simplify $\dfrac{x^7}{x^2}$.`, R`Subtract exponents: $x^{7-2} = x^5$.`],
    ["Example 3: Power of a power", R`Simplify $(x^2)^4$.`, R`Multiply exponents: $x^{2 \cdot 4} = x^8$.`],
    ["Example 4: Negative exponent", R`Evaluate $2^{-3}$.`, R`$2^{-3} = \dfrac{1}{2^3} = \dfrac{1}{8}$.`],
    ["Example 5: Root as a power", R`Evaluate $27^{1/3}$.`, R`$27^{1/3} = \sqrt[3]{27} = 3$.`],
    ["Example 6: Rational exponent", R`Evaluate $16^{3/4}$.`, R`$\left(\sqrt[4]{16}\right)^3 = 2^3 = 8$.`],
  ],
  questions: [
    ["Problem 1", R`Simplify $x^4 \cdot x^6$.`, R`$x^{10}$`],
    ["Problem 2", R`Simplify $\dfrac{x^9}{x^4}$.`, R`$x^5$`],
    ["Problem 3", R`Simplify $(x^3)^5$.`, R`$x^{15}$`],
    ["Problem 4", R`Evaluate $x^0$ for $x \ne 0$.`, R`$1$`],
    ["Problem 5", R`Evaluate $3^{-2}$.`, R`$\dfrac{1}{9}$`],
    ["Problem 6", R`Simplify $(2x^2)^3$.`, R`$8x^6$`],
    ["Problem 7", R`Evaluate $25^{1/2}$.`, R`$5$`],
    ["Problem 8", R`Evaluate $8^{2/3}$.`, R`$4$`],
    ["Problem 9", R`Simplify $\dfrac{x^5 \cdot x^2}{x^3}$.`, R`$x^4$`],
    ["Problem 10", R`Simplify $x^{-4} \cdot x^7$.`, R`$x^3$`],
    ["Problem 11", R`Write $\sqrt[3]{x}$ with a rational exponent.`, R`$x^{1/3}$`],
    ["Problem 12", R`Evaluate $16^{1/4}$.`, R`$2$`],
  ],
};
