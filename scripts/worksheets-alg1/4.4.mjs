const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "4.4",
  title: "Multiplying and Dividing Polynomials",
  intro: "Multiplying uses the distributive property (FOIL for two binomials); dividing by a monomial splits the fraction term by term. This worksheet practises both.",
  lesson: [
    ["Monomial × polynomial", R`Distribute: $a(b + c) = ab + ac$.`],
    ["Binomial × binomial (FOIL)", R`$(x + a)(x + b) = x^2 + (a + b)x + ab$.`],
    ["Divide by a monomial", R`Split the fraction: $\dfrac{ax^2 + bx}{x} = ax + b$.`],
  ],
  examples: [
    ["Example 1: Distribute", R`Expand $3x(2x + 5)$.`, R`$6x^2 + 15x$.`],
    ["Example 2: FOIL", R`Expand $(x + 2)(x + 3)$.`, R`$x^2 + 3x + 2x + 6 = x^2 + 5x + 6$.`],
    ["Example 3: With a negative", R`Expand $(x - 4)(x + 5)$.`, R`$x^2 + 5x - 4x - 20 = x^2 + x - 20$.`],
    ["Example 4: Leading coefficients", R`Expand $(2x + 1)(3x - 2)$.`, R`$6x^2 - 4x + 3x - 2 = 6x^2 - x - 2$.`],
    ["Example 5: Divide", R`Simplify $\dfrac{6x^2 + 9x}{3x}$.`, R`$\dfrac{6x^2}{3x} + \dfrac{9x}{3x} = 2x + 3$.`],
    ["Example 6: Difference of squares", R`Expand $(x + 5)(x - 5)$.`, R`$x^2 - 25$.`],
  ],
  questions: [
    ["Problem 1", R`Expand $2x(x + 4)$.`, R`$2x^2 + 8x$`],
    ["Problem 2", R`Expand $(x + 1)(x + 6)$.`, R`$x^2 + 7x + 6$`],
    ["Problem 3", R`Expand $(x - 3)(x + 2)$.`, R`$x^2 - x - 6$`],
    ["Problem 4", R`Expand $(2x + 3)(x + 4)$.`, R`$2x^2 + 11x + 12$`],
    ["Problem 5", R`Expand $(3x - 1)(2x + 5)$.`, R`$6x^2 + 13x - 5$`],
    ["Problem 6", R`Simplify $\dfrac{8x^2 + 4x}{4x}$.`, R`$2x + 1$`],
    ["Problem 7", R`Expand $(x + 7)(x - 7)$.`, R`$x^2 - 49$`],
    ["Problem 8", R`Expand $-2x(3x - 4)$.`, R`$-6x^2 + 8x$`],
    ["Problem 9", R`Expand $(x - 2)(x - 5)$.`, R`$x^2 - 7x + 10$`],
    ["Problem 10", R`Simplify $\dfrac{10x^3 - 5x^2}{5x^2}$.`, R`$2x - 1$`],
    ["Problem 11", R`Expand $(x + 4)^2$.`, R`$x^2 + 8x + 16$`],
    ["Problem 12", R`Expand $(2x - 3)(2x + 3)$.`, R`$4x^2 - 9$`],
  ],
};
