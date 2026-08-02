const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "2.6",
  title: "Parallel and Perpendicular Lines on the Coordinate Plane",
  intro: "Slope alone tells whether two lines are parallel or perpendicular. This worksheet practises comparing slopes and writing equations that meet those conditions.",
  lesson: [
    ["Parallel", R`Parallel lines have <b>equal slopes</b>: $m_1 = m_2$ (with different intercepts).`],
    ["Perpendicular", R`Perpendicular slopes are <b>negative reciprocals</b>: $m_1 \cdot m_2 = -1$, so $m_2 = -\dfrac{1}{m_1}$ (flip and negate).`],
    ["A special case", "A horizontal line (slope $0$) is perpendicular to a vertical line (undefined slope)."],
  ],
  examples: [
    ["Example 1: Are they parallel?", R`Are $y = 2x + 1$ and $y = 2x - 4$ parallel?`, R`Both have slope $2$, so yes — parallel.`],
    ["Example 2: Perpendicular slope", R`What slope is perpendicular to $m = 3$?`, R`Flip and negate: $-\dfrac{1}{3}$.`],
    ["Example 3: Parallel through a point", R`Write the line parallel to $y = 2x + 1$ through $(0, 5)$.`, R`Same slope $2$, $y$-intercept $5$: $y = 2x + 5$.`],
    ["Example 4: Perpendicular through a point", R`Write the line perpendicular to $y = \dfrac{1}{2}x$ through $(2, 3)$.`, R`Perpendicular slope $-2$: $y - 3 = -2(x - 2) \Rightarrow y = -2x + 7$.`],
    ["Example 5: Classify", R`Are $y = -3x + 2$ and $y = \dfrac{1}{3}x - 4$ parallel, perpendicular, or neither?`, R`Slopes $-3$ and $\dfrac{1}{3}$; product $-1$, so perpendicular.`],
    ["Example 6: Find the coefficient", R`For what $k$ is $y = kx + 1$ parallel to $y = 5x - 2$?`, R`Parallel means equal slopes: $k = 5$.`],
  ],
  questions: [
    ["Problem 1", R`What slope is parallel to $m = -5$?`, R`$-5$`],
    ["Problem 2", R`What slope is perpendicular to $m = 2$?`, R`$-\dfrac{1}{2}$`],
    ["Problem 3", R`Are $y = 2x + 3$ and $y = 2x - 9$ parallel, perpendicular, or neither?`, R`Parallel`],
    ["Problem 4", R`Are $y = -3x + 2$ and $y = \dfrac{1}{3}x - 4$ ...?`, R`Perpendicular`],
    ["Problem 5", R`Write the line parallel to $y = 4x - 1$ through $(0, -2)$.`, R`$y = 4x - 2$`],
    ["Problem 6", R`Write the line perpendicular to $y = \dfrac{1}{4}x + 5$ through $(0, 1)$.`, R`$y = -4x + 1$`],
    ["Problem 7", R`What slope is perpendicular to $m = -\dfrac{2}{3}$?`, R`$\dfrac{3}{2}$`],
    ["Problem 8", R`For what $k$ is $y = kx$ perpendicular to $y = 2x$?`, R`$k = -\dfrac{1}{2}$`],
    ["Problem 9", R`Perpendicular slopes multiply to what?`, R`$-1$`],
    ["Problem 10", R`What slope is perpendicular to a vertical line?`, R`$0$ (horizontal)`],
    ["Problem 11", R`Write the line parallel to $y = -x + 4$ through the origin.`, R`$y = -x$`],
    ["Problem 12", R`Are $y = 2x + 3$ and $y = -\dfrac{1}{2}x + 1$ ...?`, R`Perpendicular`],
  ],
};
