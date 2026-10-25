// MDM4U chapter 4 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
// Math uses $…$ delimiters; probabilities are table values (z rounded to 2 decimals).
import { barsSvg, normalSvg, intervalsSvg, tableSvg, lineSvg } from "../mdm4u/figs.mjs";
import { r3, tphi, bin, binLE } from "../mdm4u/count.mjs";

const T = {
  1: "4.1 Continuous Random Variables", 2: "4.2 The Normal Distribution & z-Scores", 3: "4.3 Normal Probabilities & Percentiles",
  4: "4.4 The Normal Approximation to the Binomial", 5: "4.5 Confidence Intervals",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const P = (z) => tphi(z);
const zz = (v) => Math.round(v * 100) / 100;
const f4 = (v) => r3(v, 4);
const mids = [12.5, 17.5, 22.5, 27.5, 32.5], fr = [5, 14, 20, 9, 2], n = 50, mu = mids.reduce((s, m, i) => s + m * fr[i], 0) / n;
const sd = Math.sqrt(mids.reduce((a, m, i) => a + fr[i] * (m - mu) ** 2, 0) / (n - 1));

export const WRITTEN = [
  W(1, "medium", 4, S`The table shows the lengths (cm) of 50 fish. (a) Draw a frequency histogram and polygon. (b) Estimate the mean and standard deviation. (c) Estimate $P(\text{length}\ge25)$ and explain why $P(\text{length}=25)=0$.`,
    S`(a) bars 5, 14, 20, 9, 2; polygon through midpoints. (b) $\bar x\approx${r3(mu, 2)}$, $s\approx${r3(sd, 2)}$. (c) $\frac{11}{50}=0.22$; a single value has no width in a continuous model. [1, 2, 1.]`,
    tableSvg([["length", "10–15", "15–20", "20–25", "25–30", "30–35"], ["frequency", "5", "14", "20", "9", "2"]], { rowHead: true })),
  W(1, "hard", 5, S`(a) Explain the difference between discrete and continuous frequency distributions with one example of each. (b) A student regroups continuous data from 2-unit intervals to 10-unit intervals. Describe what changes in the histogram and the polygon. (c) Explain why statisticians use model curves for continuous variables.`,
    S`(a) counted (e.g. goals) vs measured (e.g. times). (b) fewer, wider bars; smoother but loses detail; the peak's location is less precise. (c) We can only sample and measure approximately; a model gives probabilities for any interval as areas. [2, 2, 1.]`,
    barsSvg([3, 6, 11, 15, 9, 4, 2], { labels: ["0–2", "2–4", "4–6", "6–8", "8–10", "10–12", "12–14"], histogram: true, ylabel: "frequency" })),
  W(2, "medium", 4, S`Test marks are $N(68,\ 8^2)$. (a) Use the 68–95–99.7 rule to find the percent of marks between 52 and 76. (b) Find the z-score of 82. (c) Another test is $N(74,\ 5^2)$. Which is better relative to the class: 82 on the first test or 82 on the second? Justify.`,
    S`(a) $47.5+34=81.5\%$. (b) $1.75$. (c) second: $z=1.6$; first is better ($1.75>1.6$). [1, 1, 2.]`,
    normalSvg({ mu: 68, s: 8, shade: [[52, 76, "green"]], zAxis: true })),
  W(2, "hard", 5, S`In a normal distribution, 16% of values are below 46 and 97.5% are below 70 (use the 68–95–99.7 rule). (a) Find $\mu$ and $\sigma$. (b) Find the value with $z=-0.5$. (c) Explain why the rule gives only approximate answers.`,
    S`(a) $46=\mu-\sigma$, $70=\mu+2\sigma$: $\sigma=8$, $\mu=54$. (b) $50$. (c) The percentages are rounded and the rule applies only to exactly normal data. [3, 1, 1.]`,
    normalSvg({ mu: 54, s: 8, marks: [[46, "16%"], [70, "97.5%"]] })),
  W(3, "medium", 5, S`The mass of a bag of flour is $N(2.5,\ 0.04^2)$ kg. (a) Find $P(\text{mass}<2.45)$. (b) Find $P(2.47<\text{mass}<2.56)$. (c) Find the mass exceeded by only 5% of bags. (d) In a shipment of 2000 bags, how many weigh less than 2.45 kg?`,
    S`(a) $z=-1.25$: $${P(-1.25)}$. (b) $P(1.5)-P(-0.75)=${f4(P(1.5) - P(-0.75))}$. (c) $2.5+1.645(0.04)\approx2.566$ kg. (d) about ${Math.round(2000 * P(-1.25))}. [1, 2, 1, 1.]`,
    normalSvg({ mu: 2.5, s: 0.04, shade: [[2.47, 2.56, "blue"]] })),
  W(3, "hard", 6, S`A company sets a warranty so that it replaces at most 3% of its motors. Motor life is normal with mean 9.5 years. (a) If $\sigma=1.2$ years, what warranty period should it set? (b) An engineer can reduce $\sigma$ to 0.8 years. How long could the warranty then be? (c) With $\sigma=1.2$, what mean life would allow a 7-year warranty with only 1% replaced? (d) Explain which improvement is more realistic.`,
    S`(a) $z\approx-1.88$: $9.5-1.88(1.2)\approx${r3(9.5 - 1.88 * 1.2, 2)}$ years. (b) $9.5-1.88(0.8)\approx${r3(9.5 - 1.88 * 0.8, 2)}$ years. (c) $\mu=7+2.33(1.2)\approx${r3(7 + 2.33 * 1.2, 2)}$ years. (d) Reducing variability (consistent manufacturing) is often easier than raising the mean. [2, 1, 2, 1.]`,
    normalSvg({ mu: 9.5, s: 1.2, shade: [[-Infinity, 9.5 - 1.88 * 1.2, "red"]], marks: [[9.5 - 1.88 * 1.2, "3%"]] })),
  W(4, "medium", 4, S`8% of hotel reservations are cancelled. (a) With 10 reservations, explain why the normal approximation should not be used, and find $P(\text{at least 4 cancel})$ exactly. (b) With 300 reservations, approximate $P(\text{at least 30 cancel})$.`,
    S`(a) $np=0.8<5$; exact $1-P(X\le3)\approx${f4(1 - binLE(10, 0.08, 3))}$. (b) $\mu=24$, $\sigma\approx4.70$; $P(X>29.5)$: $z\approx1.17$: $${f4(1 - P(1.17))}$. [2, 2.]`,
    barsSvg([0, 1, 2, 3, 4].map((x) => bin(10, 0.08, x)), { labels: [0, 1, 2, 3, 4], histogram: true, fmt: (v) => v.toFixed(3), xlabel: "cancellations of 10", ylabel: "P" })),
  W(4, "hard", 5, S`A coin is tossed 400 times and lands heads 228 times. (a) If the coin is fair, find $\mu$ and $\sigma$ of the number of heads. (b) Approximate $P(X\ge228)$. (c) What would you conclude about the coin? (d) Explain the continuity correction you used.`,
    S`(a) $200$, $10$. (b) $P(X>227.5)$: $z=2.75$: $${f4(1 - P(2.75))}$. (c) Very unlikely for a fair coin: probably biased toward heads. (d) The count 228 is the bar from 227.5 to 228.5, so the region starts at 227.5. [1, 2, 1, 1.]`,
    normalSvg({ mu: 200, s: 10, shade: [[227.5, Infinity, "red"]], marks: [[227.5, "227.5"]] })),
  W(4, "hard", 5, S`(a) For $n=20,40,80,160$ and $p=0.1$, describe how the binomial histogram changes. (b) For $n=160$, approximate $P(X\le12)$. (c) Compare with the exact value from technology and comment.`,
    S`(a) from strongly right-skewed (n = 20) toward bell-shaped (n = 160). (b) $\mu=16$, $\sigma=3.79$: $P(X<12.5)$: $z\approx-0.92$: $${P(-0.92)}$. (c) exact $\approx${f4(binLE(160, 0.1, 12))}$: close but not equal because of slight skewness. [2, 2, 1.]`,
    lineSvg([20, 40, 80, 160].map((nn) => Math.max(...Array.from({ length: nn + 1 }, (_, x) => bin(nn, 0.1, x)))), { xs: [20, 40, 80, 160], ymax: 0.35, nt: 7, xlabel: "n", ylabel: "tallest bar" })),
  W(5, "medium", 4, S`In a random sample of 750 Ontario teens, 345 said they had a part-time job. (a) Find a 95% confidence interval for the proportion of all Ontario teens with a part-time job. (b) Interpret it. (c) How would the interval change with a sample of 3000?`,
    S`(a) $\hat p=0.46$; $E=1.96\sqrt{\frac{0.46(0.54)}{750}}\approx${r3(1.96 * Math.sqrt((0.46 * 0.54) / 750), 3)}$; $(${r3(0.46 - 1.96 * Math.sqrt((0.46 * 0.54) / 750), 3)},\ ${r3(0.46 + 1.96 * Math.sqrt((0.46 * 0.54) / 750), 3)})$. (b) We are 95% confident the true proportion is in this range; the method captures it in 95% of samples. (c) about half as wide. [2, 1, 1.]`,
    intervalsSvg([[0.46 - 1.96 * Math.sqrt((0.46 * 0.54) / 750), 0.46 + 1.96 * Math.sqrt((0.46 * 0.54) / 750)], [0.46 - 1.96 * Math.sqrt((0.46 * 0.54) / 3000), 0.46 + 1.96 * Math.sqrt((0.46 * 0.54) / 3000)]], { min: 0.4, max: 0.52, ticks: [0.4, 0.42, 0.44, 0.46, 0.48, 0.5, 0.52] })),
  W(5, "hard", 5, S`A news report says: “45% of voters support the plan; the poll is accurate to within 3.5 percentage points, 19 times out of 20.” (a) Write the confidence interval and level. (b) Estimate the sample size. (c) Can the plan's supporters claim a majority? (d) Name one source of error the margin of error does not include.`,
    S`(a) 41.5% to 48.5%, 95%. (b) $n=\left(\frac{1.96}{0.035}\right)^2(0.45)(0.55)\approx${Math.round((1.96 / 0.035) ** 2 * 0.45 * 0.55)}$. (c) No: 50% is above the whole interval. (d) e.g. non-response or a biased question wording. [1, 2, 1, 1.]`,
    intervalsSvg([[0.415, 0.485]], { truth: 0.5, label: "50%", min: 0.38, max: 0.54, ticks: [0.4, 0.45, 0.5] })),
  W(5, "medium", 4, S`The masses of 64 randomly chosen apples have mean 148 g; the population standard deviation is 16 g. (a) Find a 90% confidence interval for the mean mass. (b) Find a 99% interval. (c) Explain why the 99% interval is wider.`,
    S`(a) $148\pm1.645(2)=(144.71,\ 151.29)$. (b) $148\pm2.576(2)=(142.85,\ 153.15)$. (c) More confidence requires a larger $z^*$, so the interval must be wider. [1, 1, 2.]`,
    normalSvg({ mu: 148, s: 2, shade: [[148 - 3.29, 148 + 3.29, "blue"]] })),
  W(5, "hard", 5, S`A school board wants to estimate the proportion of parents who support a later start time. (a) How many parents must be surveyed for a 95% margin of error of 4 percentage points, with no prior estimate? (b) A pilot survey suggests about 70% support. Recalculate. (c) Explain why the two answers differ. (d) Describe how to choose the sample to avoid bias.`,
    S`(a) $\left(\frac{1.96}{0.04}\right)^2(0.25)=600.25\Rightarrow601$. (b) $\times0.21$: $504.2\Rightarrow505$. (c) $\hat p\hat q$ is largest at 0.5, so 0.5 gives the safest (largest) n. (d) simple random sample from the full parent list; follow up non-respondents. [1, 1, 1, 2.]`,
    barsSvg([601, 505], { labels: ["p̂ = 0.5", "p̂ = 0.7"], top: true, ylabel: "sample size" })),
];
