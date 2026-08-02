const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "6.2",
  title: "Comparing Linear, Quadratic, and Exponential Models",
  intro: "Each model type grows in a signature way. This worksheet practises identifying models from tables and comparing their long-run growth.",
  lesson: [
    ["How each grows", "Linear adds a constant amount each step; quadratic has constant second differences; exponential multiplies by a constant factor."],
    ["From a table", "Constant first differences → linear; constant second differences → quadratic; constant ratios → exponential."],
    ["Long run", "Exponential growth eventually outpaces any linear or quadratic model."],
  ],
  examples: [
    ["Example 1: Linear", R`Values $2, 4, 6, 8$ — which model?`, R`Adds $2$ each step → linear.`],
    ["Example 2: Exponential", R`Values $3, 6, 12, 24$ — which model?`, R`Multiplies by $2$ → exponential.`],
    ["Example 3: Quadratic", R`Values $1, 4, 9, 16$ — which model?`, R`Perfect squares; constant second differences → quadratic.`],
    ["Example 4: Fastest growth", R`Which grows fastest long-term: $2x$, $x^2$, or $2^x$?`, R`$2^x$ — exponential eventually wins.`],
    ["Example 5: Linear from a table", R`Values $5, 8, 11, 14$ — which model?`, R`Adds $3$ each step → linear.`],
    ["Example 6: Exponential from a table", R`Values $2, 6, 18, 54$ — which model?`, R`Multiplies by $3$ → exponential.`],
  ],
  questions: [
    ["Problem 1", R`Values $10, 20, 30, 40$ — which model?`, R`Linear`],
    ["Problem 2", R`Values $2, 8, 32, 128$ — which model?`, R`Exponential`],
    ["Problem 3", R`Values $1, 4, 9, 16$ — which model?`, R`Quadratic`],
    ["Problem 4", R`Constant first differences → which model?`, R`Linear`],
    ["Problem 5", R`Constant ratios → which model?`, R`Exponential`],
    ["Problem 6", R`Constant second differences → which model?`, R`Quadratic`],
    ["Problem 7", R`Values $7, 10, 13, 16$ — which model?`, R`Linear`],
    ["Problem 8", R`Values $3, 9, 27, 81$ — which model?`, R`Exponential`],
    ["Problem 9", R`Which grows faster long-term: $100x$ or $2^x$?`, R`$2^x$`],
    ["Problem 10", R`Values $0, 1, 4, 9$ — which model?`, R`Quadratic`],
    ["Problem 11", R`A model that adds $\$5$ each month is...?`, R`Linear`],
    ["Problem 12", R`A model that multiplies by $1.1$ each year is...?`, R`Exponential`],
  ],
};
