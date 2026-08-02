const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "5.2",
  title: "Factoring Trinomials when a = 1",
  intro: "For x² + bx + c, factoring is a search for two numbers that multiply to c and add to b. This worksheet builds that instinct, including the sign rules.",
  lesson: [
    ["The target", R`$x^2 + bx + c = (x + p)(x + q)$ where $p + q = b$ and $pq = c$.`],
    ["Signs", R`If $c > 0$, both numbers share $b$'s sign. If $c < 0$, the numbers have opposite signs.`],
    ["Check", "FOIL the factors to confirm the middle term comes back."],
  ],
  examples: [
    ["Example 1: Both positive", R`Factor $x^2 + 5x + 6$.`, R`$2 + 3 = 5$, $2 \cdot 3 = 6$: $(x + 2)(x + 3)$.`],
    ["Example 2: Both positive", R`Factor $x^2 + 7x + 12$.`, R`$3 + 4 = 7$, $3 \cdot 4 = 12$: $(x + 3)(x + 4)$.`],
    ["Example 3: Both negative", R`Factor $x^2 - 5x + 6$.`, R`$-2$ and $-3$: $(x - 2)(x - 3)$.`],
    ["Example 4: Opposite signs", R`Factor $x^2 + x - 6$.`, R`$+3$ and $-2$: $(x + 3)(x - 2)$.`],
    ["Example 5: Opposite signs", R`Factor $x^2 - x - 12$.`, R`$-4$ and $+3$: $(x - 4)(x + 3)$.`],
    ["Example 6: Difference of squares", R`Factor $x^2 - 9$.`, R`$(x - 3)(x + 3)$.`],
  ],
  questions: [
    ["Problem 1", R`Factor $x^2 + 6x + 8$.`, R`$(x + 2)(x + 4)$`],
    ["Problem 2", R`Factor $x^2 + 8x + 15$.`, R`$(x + 3)(x + 5)$`],
    ["Problem 3", R`Factor $x^2 - 7x + 10$.`, R`$(x - 2)(x - 5)$`],
    ["Problem 4", R`Factor $x^2 + 2x - 8$.`, R`$(x + 4)(x - 2)$`],
    ["Problem 5", R`Factor $x^2 - 3x - 10$.`, R`$(x - 5)(x + 2)$`],
    ["Problem 6", R`Factor $x^2 - 16$.`, R`$(x - 4)(x + 4)$`],
    ["Problem 7", R`Factor $x^2 + 9x + 20$.`, R`$(x + 4)(x + 5)$`],
    ["Problem 8", R`Factor $x^2 - 6x + 9$.`, R`$(x - 3)^2$`],
    ["Problem 9", R`Factor $x^2 + 4x + 4$.`, R`$(x + 2)^2$`],
    ["Problem 10", R`Factor $x^2 - x - 20$.`, R`$(x - 5)(x + 4)$`],
    ["Problem 11", R`Factor $x^2 - 25$.`, R`$(x - 5)(x + 5)$`],
    ["Problem 12", R`Factor $x^2 + 10x + 21$.`, R`$(x + 3)(x + 7)$`],
  ],
};
