const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "3.3",
  title: "Solving Systems by Elimination",
  intro: "Elimination adds or subtracts equations to cancel one variable. This worksheet practises straight elimination and the scale-first technique.",
  lesson: [
    ["The idea", R`Line up both equations as $Ax + By = C$, then add or subtract so one variable cancels.`],
    ["Add or subtract?", "Opposite coefficients (like $+3y$ and $-3y$) → add. Equal coefficients → subtract."],
    ["Scale first when needed", "Multiply one or both equations so a variable's coefficients match or become opposite, then eliminate."],
  ],
  examples: [
    ["Example 1: Add to cancel", R`Solve $x + y = 10$ and $x - y = 4$.`, R`Add: $2x = 14 \Rightarrow x = 7$, then $y = 3$. Solution $(7, 3)$.`],
    ["Example 2: Subtract to cancel", R`Solve $2x + 3y = 13$ and $2x + y = 7$.`, R`Subtract: $2y = 6 \Rightarrow y = 3$, then $x = 2$. Solution $(2, 3)$.`],
    ["Example 3: Scale one equation", R`Solve $3x + 2y = 16$ and $2x - y = 6$.`, R`Multiply the second by $2$: $4x - 2y = 12$. Add: $7x = 28 \Rightarrow x = 4$, $y = 2$. Solution $(4, 2)$.`],
    ["Example 4: Scale both", R`Solve $2x + 3y = 7$ and $3x + 2y = 8$.`, R`$\times 3$ and $\times 2$: $6x + 9y = 21$, $6x + 4y = 16$. Subtract: $5y = 5 \Rightarrow y = 1$, $x = 2$.`],
    ["Example 5: Multiply then add", R`Solve $x + 2y = 11$ and $3x - y = 5$.`, R`$\times 2$ the second: $6x - 2y = 10$. Add to the first: $7x = 21 \Rightarrow x = 3$, $y = 4$.`],
    ["Example 6: A negative solution", R`Solve $5x + 2y = 1$ and $2x + 3y = 7$.`, R`$\times 3$ and $\times 2$: $15x + 6y = 3$, $4x + 6y = 14$. Subtract: $11x = -11 \Rightarrow x = -1$, $y = 3$.`],
  ],
  questions: [
    ["Problem 1", R`Solve $x + y = 8$ and $x - y = 2$.`, R`$(5, 3)$`],
    ["Problem 2", R`Solve $2x + y = 7$ and $x - y = 2$.`, R`$(3, 1)$`],
    ["Problem 3", R`Solve $3x + 2y = 12$ and $x - 2y = -4$.`, R`$(2, 3)$`],
    ["Problem 4", R`Solve $x + 3y = 9$ and $x + y = 5$.`, R`$(3, 2)$`],
    ["Problem 5", R`Solve $4x - y = 9$ and $2x + y = 3$.`, R`$(2, -1)$`],
    ["Problem 6", R`Solve $3x + 2y = 7$ and $3x + 4y = 17$.`, R`$(-1, 5)$`],
    ["Problem 7", R`To eliminate $x$ from $x + 2y = 11$ and $3x - y = 5$, multiply the first by what?`, R`$-3$`],
    ["Problem 8", R`Solve $5x + 3y = 1$ and $5x + y = -3$.`, R`$(-1, 2)$`],
    ["Problem 9", R`Solve $x - 3y = -5$ and $x + y = 3$.`, R`$(1, 2)$`],
    ["Problem 10", R`Solve $3x + y = 10$ and $-x + y = 2$.`, R`$(2, 4)$`],
    ["Problem 11", R`If coefficients are opposite ($+3y$ and $-3y$), add or subtract?`, R`Add`],
    ["Problem 12", R`Solve $2x + 5y = 1$ and $2x + 3y = 7$.`, R`$(8, -3)$`],
  ],
};
