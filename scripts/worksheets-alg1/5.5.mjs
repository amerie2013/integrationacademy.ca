const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "5.5",
  title: "Solving Quadratics by Factoring and Square Roots",
  intro: "Two clean methods solve many quadratics: the zero product property after factoring, and the square-root method for x² = k. This worksheet practises both.",
  lesson: [
    ["Zero product property", R`If $(x - p)(x - q) = 0$ then $x = p$ or $x = q$.`],
    ["Solve by factoring", "Move everything to one side so it equals $0$, factor, then set each factor to zero."],
    ["Square root method", R`For $x^2 = k$ with $k \ge 0$, $x = \pm\sqrt{k}$.`],
  ],
  examples: [
    ["Example 1: Already factored", R`Solve $(x - 2)(x + 5) = 0$.`, R`$x = 2$ or $x = -5$.`],
    ["Example 2: Factor first", R`Solve $x^2 - 7x + 12 = 0$.`, R`$(x - 3)(x - 4) = 0 \Rightarrow x = 3$ or $x = 4$.`],
    ["Example 3: Opposite signs", R`Solve $x^2 + 2x - 8 = 0$.`, R`$(x + 4)(x - 2) = 0 \Rightarrow x = -4$ or $x = 2$.`],
    ["Example 4: Square root", R`Solve $x^2 = 49$.`, R`$x = \pm 7$.`],
    ["Example 5: Irrational roots", R`Solve $x^2 - 5 = 0$.`, R`$x^2 = 5 \Rightarrow x = \pm\sqrt{5}$.`],
    ["Example 6: Clear a coefficient", R`Solve $2x^2 - 8 = 0$.`, R`$x^2 = 4 \Rightarrow x = \pm 2$.`],
  ],
  questions: [
    ["Problem 1", R`Solve $(x - 3)(x + 1) = 0$.`, R`$x = 3$ or $x = -1$`],
    ["Problem 2", R`Solve $x^2 - 9 = 0$.`, R`$x = \pm 3$`],
    ["Problem 3", R`Solve $x^2 + 5x + 6 = 0$.`, R`$x = -2$ or $x = -3$`],
    ["Problem 4", R`Solve $x^2 - 4x = 0$.`, R`$x = 0$ or $x = 4$`],
    ["Problem 5", R`Solve $x^2 = 36$.`, R`$x = \pm 6$`],
    ["Problem 6", R`Solve $x^2 - 6x + 8 = 0$.`, R`$x = 2$ or $x = 4$`],
    ["Problem 7", R`Solve $x^2 - 11 = 0$.`, R`$x = \pm\sqrt{11}$`],
    ["Problem 8", R`Solve $3x^2 = 27$.`, R`$x = \pm 3$`],
    ["Problem 9", R`Solve $x^2 + x - 12 = 0$.`, R`$x = 3$ or $x = -4$`],
    ["Problem 10", R`Solve $(2x - 1)(x + 4) = 0$.`, R`$x = \dfrac{1}{2}$ or $x = -4$`],
    ["Problem 11", R`Solve $x^2 - 2x - 15 = 0$.`, R`$x = 5$ or $x = -3$`],
    ["Problem 12", R`Solve $x^2 = 0$.`, R`$x = 0$`],
  ],
};
