const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "5.3",
  title: "Measures of Variability",
  intro: "Range, interquartile range, variance, and standard deviation — the measures of spread, and how to interpret them.",
  lesson: [
    ["Range & IQR", R`Range $=\max-\min$. The <b>interquartile range</b> $\text{IQR}=Q_3-Q_1$ captures the middle $50\%$ and is resistant to outliers.`],
    ["Variance & standard deviation", R`<b>Variance</b> is the average of squared deviations from the mean; <b>standard deviation</b> is $\sqrt{\text{variance}}$, in the original units. A population divides by $n$; a sample divides by $n-1$.`],
    ["Interpreting spread", R`A larger standard deviation means more spread. In a normal distribution, about $68\%$ of values lie within $1$ standard deviation of the mean.`],
  ],
  examples: [
    ["Example 1: Range", R`Find the range of $3,7,2,9,5$.`, R`$9-2=7$.`],
    ["Example 2: IQR", R`Find the IQR of $1,2,3,4,5,6,7,8$.`, R`Lower half median $Q_1=2.5$, upper half median $Q_3=6.5$; IQR $=4$.`],
    ["Example 3: Standard deviation", R`Find the population standard deviation of $2,4,6,8$.`, R`Mean $5$; squared deviations $9,1,1,9$ sum $20$; variance $\tfrac{20}{4}=5$; SD $=\sqrt5\approx 2.24$.`],
    ["Example 4: No spread", R`Find the standard deviation of $5,5,5,5$.`, R`$0$ (no variation).`],
    ["Example 5: Normal rule", R`About what percent of a normal distribution lies within $1$ SD of the mean?`, R`About $68\%$.`],
  ],
  questions: [
    ["Problem 1", R`Range of $4,10,6,2$?`, R`$8$`],
    ["Problem 2", R`$\text{IQR}=Q_3-\ ?$`, R`$Q_1$`],
    ["Problem 3", R`Standard deviation of $3,3,3$?`, R`$0$`],
    ["Problem 4", R`Standard deviation is the square root of ___.`, R`variance`],
    ["Problem 5", R`Range of $15,20,25$?`, R`$10$`],
    ["Problem 6", R`Which is resistant to outliers — range or IQR?`, R`IQR`],
    ["Problem 7", R`A larger standard deviation means ___ spread.`, R`more`],
    ["Problem 8", R`Percent within $1$ SD of the mean (normal)?`, R`$68\%$`],
  ],
};
