const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "5.3",
  title: "Factoring Trinomials when a ≠ 1",
  intro: "When the leading coefficient isn't 1, the AC method splits the middle term so grouping can finish the job. This worksheet drills it thoroughly.",
  lesson: [
    ["The AC method", R`For $ax^2 + bx + c$, find two numbers with product $ac$ and sum $b$, split the middle term, then factor by grouping.`],
    ["Factor out first", "If all terms share a common factor, pull it out before factoring the trinomial."],
    ["Check", "Multiply the two binomials back to confirm."],
  ],
  examples: [
    ["Example 1", R`Factor $2x^2 + 7x + 3$.`, R`$ac = 6$, split $7 = 6 + 1$: $2x(x + 3) + 1(x + 3) = (x + 3)(2x + 1)$.`],
    ["Example 2", R`Factor $3x^2 + 10x + 8$.`, R`$ac = 24$, split $10 = 6 + 4$: $3x(x + 2) + 4(x + 2) = (x + 2)(3x + 4)$.`],
    ["Example 3", R`Factor $2x^2 - 5x - 3$.`, R`$ac = -6$, split $-5 = -6 + 1$: $2x(x - 3) + 1(x - 3) = (x - 3)(2x + 1)$.`],
    ["Example 4", R`Factor $6x^2 + 11x + 3$.`, R`$ac = 18$, split $11 = 9 + 2$: $3x(2x + 3) + 1(2x + 3) = (2x + 3)(3x + 1)$.`],
    ["Example 5", R`Factor $4x^2 - 4x - 3$.`, R`$ac = -12$, split $-4 = -6 + 2$: $2x(2x - 3) + 1(2x - 3) = (2x - 3)(2x + 1)$.`],
    ["Example 6: GCF first", R`Factor $4x^2 + 10x + 4$.`, R`$= 2(2x^2 + 5x + 2) = 2(2x + 1)(x + 2)$.`],
  ],
  questions: [
    ["Problem 1", R`Factor $2x^2 + 5x + 2$.`, R`$(2x + 1)(x + 2)$`],
    ["Problem 2", R`Factor $3x^2 + 7x + 2$.`, R`$(3x + 1)(x + 2)$`],
    ["Problem 3", R`Factor $2x^2 + 7x + 6$.`, R`$(2x + 3)(x + 2)$`],
    ["Problem 4", R`Factor $5x^2 + 11x + 2$.`, R`$(5x + 1)(x + 2)$`],
    ["Problem 5", R`Factor $2x^2 - x - 6$.`, R`$(x - 2)(2x + 3)$`],
    ["Problem 6", R`Factor $3x^2 - 2x - 8$.`, R`$(x - 2)(3x + 4)$`],
    ["Problem 7", R`Factor $6x^2 + 7x + 2$.`, R`$(3x + 2)(2x + 1)$`],
    ["Problem 8", R`Factor $4x^2 + 8x + 3$.`, R`$(2x + 3)(2x + 1)$`],
    ["Problem 9", R`Factor $2x^2 - 7x + 3$.`, R`$(x - 3)(2x - 1)$`],
    ["Problem 10", R`Factor $3x^2 + 5x - 2$.`, R`$(x + 2)(3x - 1)$`],
    ["Problem 11", R`Factor completely $6x^2 + 15x + 6$.`, R`$3(2x + 1)(x + 2)$`],
    ["Problem 12", R`Factor $4x^2 - 9$.`, R`$(2x - 3)(2x + 3)$`],
  ],
};
