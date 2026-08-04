const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "5.4",
  title: "Percentiles & Position",
  intro: "Percentiles, quartiles, the five-number summary, and z-scores — the measures of relative position within a data set.",
  lesson: [
    ["Percentiles & quartiles", R`The $p$th percentile is the value below which $p\%$ of the data falls. $Q_1$ is the $25$th, the median $Q_2$ the $50$th, and $Q_3$ the $75$th percentile.`],
    ["Five-number summary", R`Minimum, $Q_1$, median, $Q_3$, maximum — the basis of a box plot. Outliers are often flagged beyond $Q_1-1.5\cdot\text{IQR}$ or $Q_3+1.5\cdot\text{IQR}$.`],
    ["z-scores", R`A <b>z-score</b> $=\dfrac{\text{value}-\text{mean}}{\text{SD}}$ gives position in standard-deviation units: positive above the mean, negative below.`],
  ],
  examples: [
    ["Example 1: Median percentile", R`The median corresponds to which percentile?`, R`The $50$th.`],
    ["Example 2: Five-number summary", R`Give the five-number summary of $2,4,6,8,10,12$.`, R`Min $2$, $Q_1=4$, median $\tfrac{6+8}{2}=7$, $Q_3=10$, max $12$.`],
    ["Example 3: z-score", R`A value of $80$ has mean $70$ and SD $5$. Find its z-score.`, R`$\dfrac{80-70}{5}=2$.`],
    ["Example 4: Interpret a percentile", R`If a score is at the $85$th percentile, what percent scored below it?`, R`$85\%$.`],
    ["Example 5: Q3", R`$Q_3$ is which percentile?`, R`The $75$th.`],
  ],
  questions: [
    ["Problem 1", R`$Q_1$ is which percentile?`, R`$25$th`],
    ["Problem 2", R`The median is which percentile?`, R`$50$th`],
    ["Problem 3", R`z-score of $90$ with mean $80$, SD $10$?`, R`$1$`],
    ["Problem 4", R`$Q_3$ corresponds to which percentile?`, R`$75$th`],
    ["Problem 5", R`z-score of $60$ with mean $70$, SD $5$?`, R`$-2$`],
    ["Problem 6", R`The $90$th percentile means ___ % scored below.`, R`$90$`],
    ["Problem 7", R`How many values are in a five-number summary?`, R`$5$`],
    ["Problem 8", R`z-score of a value equal to the mean?`, R`$0$`],
  ],
};
