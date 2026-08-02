const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "3.1",
  title: "Solving Systems by Graphing",
  intro: "A system's solution is the point where two lines cross. This worksheet practises solving systems by graphing and recognizing the no-solution and infinite-solution cases.",
  lesson: [
    ["A system and its solution", R`A system is two equations that must both hold. Its solution is the point $(x, y)$ where the two lines intersect.`],
    ["Solve by graphing", "Graph each line (slope-intercept form makes this quick), then read off the intersection and check it in both equations."],
    ["Special cases", "Parallel lines (same slope) never meet → no solution. The same line drawn twice → infinitely many solutions."],
  ],
  examples: [
    ["Example 1: Read the intersection", R`Solve $y = x + 1$ and $y = -x + 5$.`, R`Set equal: $x + 1 = -x + 5 \Rightarrow 2x = 4 \Rightarrow x = 2$, $y = 3$. Solution $(2, 3)$.`],
    ["Example 2: Both through the region", R`Solve $y = 2x$ and $y = x + 3$.`, R`$2x = x + 3 \Rightarrow x = 3$, $y = 6$. Solution $(3, 6)$.`],
    ["Example 3: Crossing below the axis", R`Solve $y = x - 2$ and $y = -x + 4$.`, R`$x - 2 = -x + 4 \Rightarrow 2x = 6 \Rightarrow x = 3$, $y = 1$. Solution $(3, 1)$.`],
    ["Example 4: Parallel — no solution", R`Solve $y = x + 1$ and $y = x - 2$.`, R`Same slope $1$, different intercepts — the lines are parallel and never cross. <b>No solution</b>.`],
    ["Example 5: Same line — infinite", R`Solve $y = 2x + 1$ and $2y = 4x + 2$.`, R`Divide the second by $2$: $y = 2x + 1$ — identical, so both lines coincide. <b>Infinitely many</b> solutions.`],
    ["Example 6: A fractional slope", R`Solve $y = \dfrac{1}{2}x + 1$ and $y = -x + 4$.`, R`$\dfrac{1}{2}x + 1 = -x + 4 \Rightarrow \dfrac{3}{2}x = 3 \Rightarrow x = 2$, $y = 2$. Solution $(2, 2)$.`],
  ],
  questions: [
    ["Problem 1", R`Solve $y = x - 2$ and $y = -2x + 7$.`, R`$(3, 1)$`],
    ["Problem 2", R`Solve $y = 3x$ and $y = x + 4$.`, R`$(2, 6)$`],
    ["Problem 3", R`Solve $y = -x + 6$ and $y = x + 2$.`, R`$(2, 4)$`],
    ["Problem 4", R`How many solutions has $y = 2x + 3$, $y = 2x - 1$?`, R`None (parallel)`],
    ["Problem 5", R`Solve $y = \dfrac{1}{2}x + 1$ and $y = -x + 4$.`, R`$(2, 2)$`],
    ["Problem 6", R`Solve $y = x$ and $y = -x + 6$.`, R`$(3, 3)$`],
    ["Problem 7", R`Solve $y = 4 - x$ and $y = x - 2$.`, R`$(3, 1)$`],
    ["Problem 8", R`Solve $y = 2x - 1$ and $y = x + 2$.`, R`$(3, 5)$`],
    ["Problem 9", R`How many solutions has $y = x + 5$, $y = x + 5$?`, R`Infinitely many`],
    ["Problem 10", R`Solve $y = -2x + 8$ and $y = x - 1$.`, R`$(3, 2)$`],
    ["Problem 11", R`Solve $y = 3x - 4$ and $y = -x + 8$.`, R`$(3, 5)$`],
    ["Problem 12", R`Solve $y = x$ and $y = 2x - 3$.`, R`$(3, 3)$`],
  ],
};
