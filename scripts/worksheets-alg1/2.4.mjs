const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "2.4",
  title: "General (Standard) Form",
  intro: "Standard form Ax + By = C keeps x and y together with integer coefficients — ideal for reading both intercepts. This worksheet practises intercepts, converting, and slope from standard form.",
  lesson: [
    ["Standard form", R`$Ax + By = C$ with integer $A, B, C$ (and $A \ge 0$ by convention).`],
    ["Finding intercepts", R`$x$-intercept: set $y = 0$, giving $x = \dfrac{C}{A}$. $y$-intercept: set $x = 0$, giving $y = \dfrac{C}{B}$.`],
    ["Slope from standard form", R`Solve for $y$, or use the shortcut $m = -\dfrac{A}{B}$.`],
  ],
  examples: [
    ["Example 1: Both intercepts", R`Find the intercepts of $3x + 2y = 12$.`, R`$y = 0$: $x = 4$ → $(4, 0)$. $x = 0$: $y = 6$ → $(0, 6)$.`],
    ["Example 2: Graph via intercepts", R`Find the intercepts of $2x - y = 4$.`, R`$y = 0$: $x = 2$ → $(2, 0)$. $x = 0$: $y = -4$ → $(0, -4)$.`],
    ["Example 3: Slope-intercept → standard", R`Write $y = 2x - 3$ in standard form.`, R`Move $2x$ over: $-2x + y = -3$. Make $A \ge 0$: $2x - y = 3$.`],
    ["Example 4: Clear fractions", R`Write $y = \dfrac{2}{3}x + 4$ in standard form.`, R`Multiply by $3$: $3y = 2x + 12$, so $-2x + 3y = 12$, i.e. $2x - 3y = -12$.`],
    ["Example 5: Slope from standard form", R`Find the slope of $6x + 3y = 9$.`, R`$m = -\dfrac{A}{B} = -\dfrac{6}{3} = -2$.`],
    ["Example 6: Horizontal and vertical", R`Write $y = -1$ and $x = 4$ in standard style.`, R`$0x + y = -1$ and $x + 0y = 4$.`],
  ],
  questions: [
    ["Problem 1", R`Find the intercepts of $4x + 3y = 24$.`, R`$(6, 0)$ and $(0, 8)$`],
    ["Problem 2", R`Find the $x$-intercept of $5x - 2y = 20$.`, R`$x = 4$`],
    ["Problem 3", R`Write $y = -3x + 5$ in standard form.`, R`$3x + y = 5$`],
    ["Problem 4", R`Write $y = -\dfrac{1}{2}x + 3$ in standard form (integers).`, R`$x + 2y = 6$`],
    ["Problem 5", R`Find the slope of $6x + 3y = 9$.`, R`$-2$`],
    ["Problem 6", R`Find the slope of $2x - 5y = 10$.`, R`$\dfrac{2}{5}$`],
    ["Problem 7", R`Find the $y$-intercept of $3x + 2y = 12$.`, R`$(0, 6)$`],
    ["Problem 8", R`Write $y = 4x - 1$ in standard form.`, R`$4x - y = 1$`],
    ["Problem 9", R`Find the $x$-intercept of $x + 2y = 6$.`, R`$x = 6$`],
    ["Problem 10", R`Is $x = 4$ a vertical or horizontal line?`, R`Vertical`],
    ["Problem 11", R`In $2x - 3y = -12$, what is the constant $C$?`, R`$-12$`],
    ["Problem 12", R`Write the standard form of the line through $(3, 0)$ and $(0, 6)$.`, R`$2x + y = 6$`],
  ],
};
