const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "1.1",
  title: "Multi-Step Equations in One Variable",
  intro: "A linear equation is solved by undoing the operations around the variable until it stands alone. This worksheet practises multi-step equations — combining like terms, variables on both sides, distributing brackets, and clearing fractions.",
  lesson: [
    ["The golden rule", "Whatever you do to one side of an equation, do to the other, keeping it balanced. Solve by <b>undoing</b> operations in reverse order until the variable is alone."],
    ["A plan for multi-step equations", "1) <b>Distribute</b> to clear brackets. 2) <b>Combine like terms</b> on each side. 3) <b>Collect the variable</b> on one side by adding or subtracting the same term. 4) <b>Undo</b> with inverse operations, then <b>check</b> by substituting back."],
    ["Clearing fractions", R`Multiply <b>every</b> term by the common denominator to turn a fractional equation into a whole-number one, then solve as usual. For $\dfrac{x}{2}+\dfrac{x}{3}=5$, multiply by $6$.`],
  ],
  examples: [
    ["Example 1: Combine like terms", R`Solve $4x + 3 - x = 18$.`, R`Combine: $3x + 3 = 18$. Subtract $3$: $3x = 15$. Divide by $3$: $x = 5$.<br>Check: $4(5)+3-5 = 18$. ✓`],
    ["Example 2: Variable on both sides", R`Solve $7x - 4 = 3x + 12$.`, R`Subtract $3x$: $4x - 4 = 12$. Add $4$: $4x = 16$. Divide by $4$: $x = 4$.`],
    ["Example 3: Distribute a bracket", R`Solve $3(x - 2) = 15$.`, R`Distribute: $3x - 6 = 15$. Add $6$: $3x = 21$. Divide by $3$: $x = 7$.`],
    ["Example 4: Brackets on both sides", R`Solve $2(x + 3) = 4(x - 1)$.`, R`Distribute: $2x + 6 = 4x - 4$. Subtract $2x$: $6 = 2x - 4$. Add $4$: $10 = 2x$, so $x = 5$.`],
    ["Example 5: Clear the fractions", R`Solve $\dfrac{x}{2} + \dfrac{x}{3} = 5$.`, R`Multiply every term by $6$: $3x + 2x = 30$. Combine: $5x = 30$, so $x = 6$.`],
    ["Example 6: No solution", R`Solve $2(x + 1) = 2x + 5$.`, R`Distribute: $2x + 2 = 2x + 5$. Subtract $2x$: $2 = 5$ — false. There is <b>no solution</b>.`],
  ],
  questions: [
    ["Problem 1", R`Solve $5x + 2 = 17$.`, R`$x = 3$`],
    ["Problem 2", R`Solve $3x - 7 = 2x + 1$.`, R`$x = 8$`],
    ["Problem 3", R`Solve $2(x + 4) = 22$.`, R`$x = 7$`],
    ["Problem 4", R`Solve $6x - 3 = 2x + 9$.`, R`$x = 3$`],
    ["Problem 5", R`Solve $4(x - 1) = 2(x + 3)$.`, R`$x = 5$`],
    ["Problem 6", R`Solve $\dfrac{x}{4} + 2 = 5$.`, R`$x = 12$`],
    ["Problem 7", R`Solve $\dfrac{2x}{3} = 8$.`, R`$x = 12$`],
    ["Problem 8", R`Solve $5 - 2x = 3x - 10$.`, R`$x = 3$`],
    ["Problem 9", R`Solve $3(2x - 1) = 9$.`, R`$x = 2$`],
    ["Problem 10", R`Solve $\dfrac{x}{2} - \dfrac{x}{5} = 3$.`, R`$x = 10$`],
    ["Problem 11", R`How many solutions has $4x + 5 = 4x - 2$?`, R`None (it gives $5 = -2$).`],
    ["Problem 12", R`How many solutions has $2(x + 3) = 2x + 6$?`, R`Infinitely many (an identity).`],
  ],
};
