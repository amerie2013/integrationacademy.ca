const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "5.1",
  title: "GCF and Factoring by Grouping",
  intro: "Factoring starts by pulling out the greatest common factor; with four terms, grouping does the job. This worksheet practises both foundations.",
  lesson: [
    ["Greatest common factor", R`Factor out the largest common monomial: $6x^2 + 9x = 3x(2x + 3)$.`],
    ["Factoring by grouping", R`With four terms, group in pairs, factor each, then factor out the common binomial: $x^3 + 2x^2 + 3x + 6 = x^2(x + 2) + 3(x + 2) = (x + 2)(x^2 + 3)$.`],
    ["Always check", "Multiply back to confirm you recover the original expression."],
  ],
  examples: [
    ["Example 1: Monomial GCF", R`Factor $6x^2 + 9x$.`, R`GCF $3x$: $3x(2x + 3)$.`],
    ["Example 2: Higher power", R`Factor $10x^3 - 15x^2$.`, R`GCF $5x^2$: $5x^2(2x - 3)$.`],
    ["Example 3: Numeric GCF", R`Factor $4x^2 + 8x + 12$.`, R`GCF $4$: $4(x^2 + 2x + 3)$.`],
    ["Example 4: Grouping", R`Factor $x^3 + 2x^2 + 3x + 6$.`, R`$x^2(x + 2) + 3(x + 2) = (x + 2)(x^2 + 3)$.`],
    ["Example 5: Grouping with a coefficient", R`Factor $2x^3 + 6x^2 + x + 3$.`, R`$2x^2(x + 3) + 1(x + 3) = (x + 3)(2x^2 + 1)$.`],
    ["Example 6: Two variables", R`Factor $xy + 3x + 2y + 6$.`, R`$x(y + 3) + 2(y + 3) = (y + 3)(x + 2)$.`],
  ],
  questions: [
    ["Problem 1", R`Factor $8x + 12$.`, R`$4(2x + 3)$`],
    ["Problem 2", R`Factor $x^2 + 5x$.`, R`$x(x + 5)$`],
    ["Problem 3", R`Factor $6x^3 - 9x$.`, R`$3x(2x^2 - 3)$`],
    ["Problem 4", R`Factor $10x^2 + 15x$.`, R`$5x(2x + 3)$`],
    ["Problem 5", R`Find the GCF of $12x^2$ and $18x$.`, R`$6x$`],
    ["Problem 6", R`Factor $x^3 + x^2 + 2x + 2$.`, R`$(x + 1)(x^2 + 2)$`],
    ["Problem 7", R`Factor $x^3 - 4x^2 + 3x - 12$.`, R`$(x - 4)(x^2 + 3)$`],
    ["Problem 8", R`Factor $3x^2 - 6x$.`, R`$3x(x - 2)$`],
    ["Problem 9", R`Factor $ab + 4a + 2b + 8$.`, R`$(b + 4)(a + 2)$`],
    ["Problem 10", R`Factor $14x^2 + 7x$.`, R`$7x(2x + 1)$`],
    ["Problem 11", R`Factor $2x^3 + 4x^2 + 5x + 10$.`, R`$(x + 2)(2x^2 + 5)$`],
    ["Problem 12", R`Factor completely $5x^2 + 20x + 25$.`, R`$5(x^2 + 4x + 5)$`],
  ],
};
