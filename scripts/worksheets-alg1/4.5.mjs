const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "4.5",
  title: "Special Polynomial Products",
  intro: "Two patterns — difference of squares and perfect square trinomials — appear constantly. Recognizing them speeds up expanding now and factoring later.",
  lesson: [
    ["Difference of squares", R`$(a + b)(a - b) = a^2 - b^2$ — the middle terms cancel.`],
    ["Perfect square trinomials", R`$(a + b)^2 = a^2 + 2ab + b^2$ and $(a - b)^2 = a^2 - 2ab + b^2$.`],
    ["Recognize the pattern", "Same two terms with opposite signs → difference of squares. A squared binomial → the double-product middle term."],
  ],
  examples: [
    ["Example 1: Difference of squares", R`Expand $(x + 6)(x - 6)$.`, R`$x^2 - 36$.`],
    ["Example 2: Square of a sum", R`Expand $(x + 3)^2$.`, R`$x^2 + 2(3)x + 9 = x^2 + 6x + 9$.`],
    ["Example 3: Square of a difference", R`Expand $(x - 5)^2$.`, R`$x^2 - 2(5)x + 25 = x^2 - 10x + 25$.`],
    ["Example 4: Coefficient in front", R`Expand $(2x + 3)(2x - 3)$.`, R`$(2x)^2 - 3^2 = 4x^2 - 9$.`],
    ["Example 5: Squared binomial with coefficient", R`Expand $(3x - 1)^2$.`, R`$9x^2 - 2(3x)(1) + 1 = 9x^2 - 6x + 1$.`],
    ["Example 6: Square of a sum", R`Expand $(x + 4)^2$.`, R`$x^2 + 8x + 16$.`],
  ],
  questions: [
    ["Problem 1", R`Expand $(x + 8)(x - 8)$.`, R`$x^2 - 64$`],
    ["Problem 2", R`Expand $(x + 2)^2$.`, R`$x^2 + 4x + 4$`],
    ["Problem 3", R`Expand $(x - 7)^2$.`, R`$x^2 - 14x + 49$`],
    ["Problem 4", R`Expand $(3x + 2)(3x - 2)$.`, R`$9x^2 - 4$`],
    ["Problem 5", R`Expand $(2x + 5)^2$.`, R`$4x^2 + 20x + 25$`],
    ["Problem 6", R`Expand $(x - 1)^2$.`, R`$x^2 - 2x + 1$`],
    ["Problem 7", R`Expand $(5x + 1)(5x - 1)$.`, R`$25x^2 - 1$`],
    ["Problem 8", R`Expand $(4x - 3)^2$.`, R`$16x^2 - 24x + 9$`],
    ["Problem 9", R`Expand $(x + 10)(x - 10)$.`, R`$x^2 - 100$`],
    ["Problem 10", R`Expand $(a + b)^2$.`, R`$a^2 + 2ab + b^2$`],
    ["Problem 11", R`Expand $(2x - 7)(2x + 7)$.`, R`$4x^2 - 49$`],
    ["Problem 12", R`Expand $(x + 9)^2$.`, R`$x^2 + 18x + 81$`],
  ],
};
