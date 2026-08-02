const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "3.2",
  title: "Solving Systems by Substitution",
  intro: "Substitution replaces one variable with an equivalent expression, turning a system into a single equation. This worksheet builds fluency and covers the special cases.",
  lesson: [
    ["The idea", "Isolate one variable, substitute its expression into the other equation, solve, then back-substitute to find the second variable."],
    ["Best when a variable is alone", R`If one equation is already "$y = \ldots$", plug that expression in for $y$ in the other equation.`],
    ["Special cases", R`A false statement like $1 = -3$ means no solution; an always-true one like $0 = 0$ means infinitely many.`],
  ],
  examples: [
    ["Example 1: Substitute and solve", R`Solve $y = 2x$ and $x + y = 6$.`, R`$x + 2x = 6 \Rightarrow 3x = 6 \Rightarrow x = 2$, $y = 4$. Solution $(2, 4)$.`],
    ["Example 2: Two \"y =\" equations", R`Solve $y = x + 1$ and $y = -x + 5$.`, R`$x + 1 = -x + 5 \Rightarrow 2x = 4 \Rightarrow x = 2$, $y = 3$. Solution $(2, 3)$.`],
    ["Example 3: Isolate first", R`Solve $x + y = 7$ and $2x - y = 2$.`, R`From the first, $y = 7 - x$. Then $2x - (7 - x) = 2 \Rightarrow 3x - 7 = 2 \Rightarrow x = 3$, $y = 4$.`],
    ["Example 4: Substitute an expression", R`Solve $y = 3x - 4$ and $2x + y = 6$.`, R`$2x + (3x - 4) = 6 \Rightarrow 5x = 10 \Rightarrow x = 2$, $y = 2$. Solution $(2, 2)$.`],
    ["Example 5: No solution", R`Solve $y = 2x + 1$ and $y = 2x - 3$.`, R`$2x + 1 = 2x - 3 \Rightarrow 1 = -3$, false. <b>No solution</b>.`],
    ["Example 6: Infinitely many", R`Solve $y = x + 4$ and $y = x + 4$.`, R`The equations are identical, so every point on the line works. <b>Infinitely many</b>.`],
  ],
  questions: [
    ["Problem 1", R`Solve $y = 3x$ and $x + y = 8$.`, R`$(2, 6)$`],
    ["Problem 2", R`Solve $y = x - 1$ and $y = -2x + 8$.`, R`$(3, 2)$`],
    ["Problem 3", R`Solve $x + y = 10$ and $y = x + 2$.`, R`$(4, 6)$`],
    ["Problem 4", R`Solve $y = 2x - 3$ and $3x - y = 5$.`, R`$(2, 1)$`],
    ["Problem 5", R`How many solutions has $y = x + 4$, $y = x + 4$?`, R`Infinitely many`],
    ["Problem 6", R`Solve $y = -x + 7$ and $2x + y = 9$.`, R`$(2, 5)$`],
    ["Problem 7", R`Solve $y = 4x$ and $x + y = 10$.`, R`$(2, 8)$`],
    ["Problem 8", R`Solve $x + y = 5$ and $x - y = 1$.`, R`$(3, 2)$`],
    ["Problem 9", R`Solve $y = 2x + 1$ and $y = -x + 7$.`, R`$(2, 5)$`],
    ["Problem 10", R`Substituting $y = 3x - 4$ into $2x + y = 6$ gives which equation?`, R`$5x - 4 = 6$`],
    ["Problem 11", R`Solve $y = x$ and $2x + y = 9$.`, R`$(3, 3)$`],
    ["Problem 12", R`Solve $y = 5 - x$ and $y = 2x - 1$.`, R`$(2, 3)$`],
  ],
};
