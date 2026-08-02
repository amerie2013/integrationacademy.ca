const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "2.3",
  title: "Point-Slope Form",
  intro: "Point-slope form writes a line straight from one point and a slope. This worksheet practises building lines and simplifying them into slope-intercept form.",
  lesson: [
    ["The template", R`Point-slope form is $y - y_1 = m(x - x_1)$, where $(x_1, y_1)$ is any point on the line and $m$ is the slope.`],
    ["Mind the signs", R`Subtracting a negative flips it: a point $(-2, 5)$ gives $y - 5 = m(x + 2)$.`],
    ["From two points", R`Find $m = \dfrac{y_2 - y_1}{x_2 - x_1}$ first, then use either point. Distribute and solve for $y$ to reach $y = mx + b$.`],
  ],
  examples: [
    ["Example 1: From a point and a slope", R`Write the line with slope $4$ through $(1, 2)$.`, R`$y - 2 = 4(x - 1)$.`],
    ["Example 2: A negative coordinate", R`Write the line with slope $-3$ through $(-2, 5)$.`, R`Subtracting $-2$ gives $+2$: $y - 5 = -3(x + 2)$.`],
    ["Example 3: Simplify to slope-intercept", R`Simplify $y - 2 = 4(x - 1)$.`, R`Distribute: $y - 2 = 4x - 4$. Add $2$: $y = 4x - 2$.`],
    ["Example 4: From two points", R`Write the line through $(1, 4)$ and $(3, 10)$.`, R`$m = \dfrac{10 - 4}{3 - 1} = 3$, so $y - 4 = 3(x - 1)$, i.e. $y = 3x + 1$.`],
    ["Example 5: Simplify with a fraction", R`Slope $\dfrac{1}{2}$ through $(4, 1)$; simplify.`, R`$y - 1 = \dfrac{1}{2}(x - 4) \Rightarrow y = \dfrac{1}{2}x - 2 + 1 = \dfrac{1}{2}x - 1$.`],
    ["Example 6: Horizontal and vertical", R`Write the horizontal and vertical lines through $(4, -1)$.`, R`Horizontal: $y = -1$. Vertical: $x = 4$.`],
  ],
  questions: [
    ["Problem 1", R`Write point-slope form for slope $5$ through $(1, 3)$.`, R`$y - 3 = 5(x - 1)$`],
    ["Problem 2", R`Write point-slope form for slope $-2$ through $(3, -4)$.`, R`$y + 4 = -2(x - 3)$`],
    ["Problem 3", R`Simplify $y - 3 = 5(x - 1)$.`, R`$y = 5x - 2$`],
    ["Problem 4", R`Find the slope through $(2, 3)$ and $(6, 11)$.`, R`$2$`],
    ["Problem 5", R`Write point-slope form through $(2, 3)$ and $(6, 11)$ using $(2, 3)$.`, R`$y - 3 = 2(x - 2)$`],
    ["Problem 6", R`Simplify $y - 3 = 2(x - 2)$.`, R`$y = 2x - 1$`],
    ["Problem 7", R`Slope $\dfrac{1}{3}$ through $(3, 2)$; simplify.`, R`$y = \dfrac{1}{3}x + 1$`],
    ["Problem 8", R`Write the line with slope $0$ through $(5, 7)$.`, R`$y = 7$`],
    ["Problem 9", R`Which point does $y - 1 = 2(x + 3)$ pass through?`, R`$(-3, 1)$`],
    ["Problem 10", R`Simplify $y + 2 = 3(x - 1)$.`, R`$y = 3x - 5$`],
    ["Problem 11", R`Slope $-1$ through $(0, 4)$; simplify.`, R`$y = -x + 4$`],
    ["Problem 12", R`Find the slope through $(-1, -2)$ and $(3, 6)$.`, R`$2$`],
  ],
};
