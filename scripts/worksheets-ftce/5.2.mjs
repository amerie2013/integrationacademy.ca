const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "5.2",
  title: "Measures of Central Tendency",
  intro: "Mean, median, and mode — how to compute them, when each is appropriate, and estimating the mean from grouped data.",
  lesson: [
    ["Mean, median, mode", R`<b>Mean</b> $=\dfrac{\text{sum}}{\text{count}}$. <b>Median</b> $=$ middle value (average the two middle values if the count is even). <b>Mode</b> $=$ most frequent value (data may be bimodal or have no mode).`],
    ["Choosing a measure", R`The mean is sensitive to outliers; the median is resistant. In a skewed distribution the mean is pulled toward the tail (right-skew: mean $>$ median).`],
    ["Grouped data", R`Estimate the mean of grouped data with class midpoints: $\text{mean}\approx\dfrac{\sum(\text{midpoint}\cdot\text{frequency})}{\sum\text{frequency}}$.`],
  ],
  examples: [
    ["Example 1: Mean", R`Find the mean of $4,8,6,10,12$.`, R`$\dfrac{40}{5}=8$.`],
    ["Example 2: Median (even count)", R`Find the median of $6,20,7,3,18,4,8,14$.`, R`Sorted: $3,4,6,7,8,14,18,20$; middle two $7,8$: median $\dfrac{7+8}{2}=7.5$.`],
    ["Example 3: Mode", R`Find the mode of $2,3,3,5,7$.`, R`$3$ (most frequent).`],
    ["Example 4: Mean", R`Find the mean of $90,85,80$.`, R`$\dfrac{255}{3}=85$.`],
    ["Example 5: Skew", R`In a right-skewed distribution, how do the mean and median compare?`, R`Mean $>$ median (the mean is pulled toward the long right tail).`],
  ],
  questions: [
    ["Problem 1", R`Mean of $2,4,6$?`, R`$4$`],
    ["Problem 2", R`Median of $3,5,9$?`, R`$5$`],
    ["Problem 3", R`Mode of $1,2,2,3,4$?`, R`$2$`],
    ["Problem 4", R`Median of $2,4,6,8$?`, R`$5$`],
    ["Problem 5", R`Mean of $10,20,30,40$?`, R`$25$`],
    ["Problem 6", R`Is the mean affected by outliers?`, R`yes`],
    ["Problem 7", R`Median of $5,5,5,5$?`, R`$5$`],
    ["Problem 8", R`Mean of $7$ and $13$?`, R`$10$`],
  ],
};
