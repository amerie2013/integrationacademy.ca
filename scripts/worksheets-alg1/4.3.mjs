const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "4.3",
  title: "Adding and Subtracting Polynomials",
  intro: "Adding polynomials combines like terms; subtracting means distributing a minus sign first. This worksheet drills both, plus degree and leading coefficient.",
  lesson: [
    ["Terms and degree", R`A polynomial is a sum of terms $ax^n$. Like terms share the same variable and exponent; the degree is the highest exponent.`],
    ["Add", "Combine like terms — nothing else changes."],
    ["Subtract", "Distribute the minus sign to every term of the second polynomial, then combine like terms."],
  ],
  examples: [
    ["Example 1: Add", R`Simplify $(3x^2 + 2x) + (x^2 + 5x)$.`, R`$4x^2 + 7x$.`],
    ["Example 2: Add three-term", R`Simplify $(5x^2 - x + 2) + (2x^2 + 4x - 6)$.`, R`$7x^2 + 3x - 4$.`],
    ["Example 3: Subtract", R`Simplify $(4x^2 + 3x) - (x^2 + x)$.`, R`$3x^2 + 2x$.`],
    ["Example 4: Distribute the minus", R`Simplify $(6x^2 - 2x + 1) - (2x^2 - 5x + 4)$.`, R`$6x^2 - 2x + 1 - 2x^2 + 5x - 4 = 4x^2 + 3x - 3$.`],
    ["Example 5: Collect like terms", R`Simplify $3x^2 + 5x - x^2 + 2x$.`, R`$2x^2 + 7x$.`],
    ["Example 6: Degree", R`State the degree of $4x^3 - 2x + 7$.`, R`$3$.`],
  ],
  questions: [
    ["Problem 1", R`Simplify $(2x^2 + x) + (3x^2 + 4x)$.`, R`$5x^2 + 5x$`],
    ["Problem 2", R`Simplify $(x^2 - 3x + 2) + (2x^2 + 3x - 5)$.`, R`$3x^2 - 3$`],
    ["Problem 3", R`Simplify $(5x^2 + 2x) - (2x^2 + x)$.`, R`$3x^2 + x$`],
    ["Problem 4", R`Simplify $(7x - 3) - (2x + 4)$.`, R`$5x - 7$`],
    ["Problem 5", R`Simplify $4x + 3x^2 - 2x + x^2$.`, R`$4x^2 + 2x$`],
    ["Problem 6", R`State the degree of $6x^4 - x^2 + 1$.`, R`$4$`],
    ["Problem 7", R`Simplify $(x^2 + x + 1) + (x^2 - x - 1)$.`, R`$2x^2$`],
    ["Problem 8", R`Simplify $(3x^2 - 4x + 5) - (x^2 - 4x + 2)$.`, R`$2x^2 + 3$`],
    ["Problem 9", R`State the leading coefficient of $-5x^3 + 2x$.`, R`$-5$`],
    ["Problem 10", R`Simplify $(2x^3 + x) + (x^3 - x)$.`, R`$3x^3$`],
    ["Problem 11", R`Simplify $(8x^2 - 3) - (3x^2 - 3)$.`, R`$5x^2$`],
    ["Problem 12", R`Simplify $10x - 4x + x$.`, R`$7x$`],
  ],
};
