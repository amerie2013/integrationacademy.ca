const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "2.5",
  title: "Converting Between Forms",
  intro: "Slope-intercept, point-slope, and standard form all describe the same line. This worksheet practises switching fluently among them.",
  lesson: [
    ["Three forms of one line", R`Slope-intercept $y = mx + b$, point-slope $y - y_1 = m(x - x_1)$, and standard $Ax + By = C$ all graph the same line.`],
    ["Point-slope → slope-intercept", "Distribute and solve for $y$."],
    ["To and from standard form", R`Slope-intercept → standard: move the $x$-term across and clear fractions. Standard → slope-intercept: solve for $y$ (the slope is $-\dfrac{A}{B}$).`],
  ],
  examples: [
    ["Example 1: Point-slope → slope-intercept", R`Rewrite $y - 5 = 3(x - 2)$.`, R`Distribute: $y - 5 = 3x - 6$. Add $5$: $y = 3x - 1$.`],
    ["Example 2: Slope-intercept → standard", R`Rewrite $y = \dfrac{3}{4}x - 2$ in standard form.`, R`Multiply by $4$: $4y = 3x - 8$, so $3x - 4y = 8$.`],
    ["Example 3: Standard → slope-intercept", R`Rewrite $2x + 5y = 10$; state the slope.`, R`$5y = -2x + 10 \Rightarrow y = -\dfrac{2}{5}x + 2$; slope $-\dfrac{2}{5}$.`],
    ["Example 4: Two points → all three forms", R`Through $(1, 2)$ and $(3, 8)$.`, R`$m = 3$. Point-slope $y - 2 = 3(x - 1)$; slope-intercept $y = 3x - 1$; standard $3x - y = 1$.`],
    ["Example 5: Slope straight from standard", R`Find the slope of $6x + 3y = 9$.`, R`$m = -\dfrac{A}{B} = -2$.`],
    ["Example 6: Slope-intercept → point-slope", R`Write $y = 2x + 1$ in point-slope form using $(0, 1)$.`, R`$y - 1 = 2(x - 0)$.`],
  ],
  questions: [
    ["Problem 1", R`Rewrite $y - 4 = 2(x - 1)$ in slope-intercept form.`, R`$y = 2x + 2$`],
    ["Problem 2", R`Write $y = 2x - 5$ in standard form.`, R`$2x - y = 5$`],
    ["Problem 3", R`Rewrite $3x + 4y = 12$ in slope-intercept form.`, R`$y = -\dfrac{3}{4}x + 3$`],
    ["Problem 4", R`State the slope of $5x - 2y = 8$.`, R`$\dfrac{5}{2}$`],
    ["Problem 5", R`Through $(0, 1)$ and $(2, 5)$, give the standard form.`, R`$2x - y = -1$`],
    ["Problem 6", R`Rewrite $y - 3 = -1(x - 2)$ in slope-intercept form.`, R`$y = -x + 5$`],
    ["Problem 7", R`Write $y = -\dfrac{1}{3}x + 2$ in standard form.`, R`$x + 3y = 6$`],
    ["Problem 8", R`Rewrite $2x - y = 7$ in slope-intercept form.`, R`$y = 2x - 7$`],
    ["Problem 9", R`Write point-slope form for slope $4$ through $(1, 1)$.`, R`$y - 1 = 4(x - 1)$`],
    ["Problem 10", R`Rewrite $4x + 2y = 10$ in slope-intercept form.`, R`$y = -2x + 5$`],
    ["Problem 11", R`Slope-intercept form of the line through $(2, 3)$ and $(4, 7)$.`, R`$y = 2x - 1$`],
    ["Problem 12", R`Write $y = \dfrac{1}{2}x - 3$ in standard form (integers).`, R`$x - 2y = 6$`],
  ],
};
