const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "6.3",
  title: "Scatter Plots, Lines of Best Fit, and Residuals",
  intro: "A scatter plot shows how two variables relate; a line of best fit predicts, and residuals measure how far off each prediction is. This worksheet practises all three.",
  lesson: [
    ["Correlation", "A scatter plot shows the relationship: positive (up to the right), negative (down), or none."],
    ["Line of best fit", "A line passing as close as possible to the points; substitute an $x$-value to predict $y$."],
    ["Residuals", R`A residual is $\text{actual} - \text{predicted}$. Positive → the point is above the line. A good fit has small, randomly scattered residuals.`],
  ],
  examples: [
    ["Example 1: Positive correlation", R`Points trend upward left to right. Correlation?`, R`Positive.`],
    ["Example 2: Negative correlation", R`Points trend downward. Correlation?`, R`Negative.`],
    ["Example 3: Predict", R`Best-fit line $y = 2x + 1$. Predict $y$ at $x = 5$.`, R`$2(5) + 1 = 11$.`],
    ["Example 4: Residual (above)", R`Actual $y = 13$, predicted $11$. Residual?`, R`$13 - 11 = +2$.`],
    ["Example 5: Residual (below)", R`Actual $y = 9$, predicted $11$. Residual?`, R`$9 - 11 = -2$.`],
    ["Example 6: Zero residual", R`What does a residual of $0$ mean?`, R`The point lies exactly on the line.`],
  ],
  questions: [
    ["Problem 1", R`Points scattered with no trend. Correlation?`, R`None`],
    ["Problem 2", R`As $x$ increases, $y$ decreases. Correlation?`, R`Negative`],
    ["Problem 3", R`Best-fit $y = 3x - 2$. Predict at $x = 4$.`, R`$10$`],
    ["Problem 4", R`Actual $12$, predicted $10$. Residual?`, R`$+2$`],
    ["Problem 5", R`Actual $7$, predicted $10$. Residual?`, R`$-3$`],
    ["Problem 6", R`A residual is actual minus what?`, R`Predicted`],
    ["Problem 7", R`A positive residual means the point is ___ the line.`, R`Above`],
    ["Problem 8", R`Best-fit $y = -x + 8$. Predict at $x = 3$.`, R`$5$`],
    ["Problem 9", R`Small, random residuals indicate a ___ fit.`, R`Good`],
    ["Problem 10", R`Residual $= 0$ means the point is ___ the line.`, R`On`],
    ["Problem 11", R`A strong upward trend is which correlation?`, R`Positive`],
    ["Problem 12", R`Best-fit $y = 0.5x + 2$. Predict at $x = 10$.`, R`$7$`],
  ],
};
