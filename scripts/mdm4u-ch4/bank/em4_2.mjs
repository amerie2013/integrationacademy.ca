// 4.2 The Normal Distribution & z-Scores — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { normalSvg } from "../../mdm4u/figs.mjs";

export const E = [
  num("μ = 40, σ = 5. Find the z-score of 50.", 2, "(50 − 40)/5."),
  num("μ = 40, σ = 5. Find the z-score of 32.", -1.6, "(32 − 40)/5.", null, 0.001),
  num("μ = 100, σ = 15. Find the z-score of 100.", 0, "At the mean."),
  num("μ = 60, σ = 8, z = 1.5. Find x.", 72, "60 + 1.5(8)."),
  num("μ = 60, σ = 8, z = −2. Find x.", 44, "60 − 16."),
  num("About what percent of normal data lie within 1 standard deviation of the mean?", 68, "Empirical rule.", null, 0.5),
  num("About what percent of normal data lie within 3 standard deviations of the mean?", 99.7, "Empirical rule.", null, 0.1),
  num("About what percent of normal data lie above the mean?", 50, "Symmetry."),
  num("N(50, 4²): about what percent of values lie between 46 and 54?", 68, "μ ± σ.", null, 0.5),
  num("N(50, 4²): about what percent of values lie above 58?", 2.5, "Above μ + 2σ.", null, 0.2),
  num("Read the curve: the shaded region is within 2σ of the mean. About what percent is shaded?", 95, "Empirical rule.", normalSvg({ mu: 20, s: 3, shade: [[14, 26, "green"]] }), 0.5),
  num("Read the curve labels: what is the standard deviation?", 6, "Ticks are one σ apart: 36, 42, 48 …", normalSvg({ mu: 48, s: 6 })),
  mc("Which is true of every normal distribution?", "mean = median = mode", ["the mean is 0", "the standard deviation is 1", "it is skewed right"], "Symmetric."),
  mc("A z-score of −1.5 means the value is…", "1.5 standard deviations below the mean", ["1.5 below the mean", "1.5 standard deviations above the mean", "the 15th percentile"], "Negative z: below."),
  tf("A normal curve is symmetric about its mean.", true, "Bell-shaped."),
  tf("Increasing σ makes the normal curve taller and narrower.", false, "Wider and lower."),
  tf("The standard normal distribution has μ = 0 and σ = 1.", true, "Definition."),
  ms("Which are properties of a normal curve? Select all.", ["bell-shaped", "symmetric", "total area 1", "skewed left", "mean equals median"], [0, 1, 2, 4], "Normal curves are symmetric."),
  mc("Which value is more unusual in N(70, 10²)?", "95", ["60", "78", "80"], "z = 2.5 is the largest |z|."),
  num("μ = 12, σ = 0.5. Find the z-score of 13.2.", 2.4, "1.2/0.5.", null, 0.001),
];

export const M = [
  num("N(72, 6²): about what percent of values lie between 66 and 84?", 81.5, "34 + 47.5.", null, 0.5),
  num("N(72, 6²): about what percent of values lie between 60 and 66?", 13.5, "47.5 − 34.", null, 0.5),
  num("N(72, 6²): about what percent of values lie below 54?", 0.15, "Below μ − 3σ.", null, 0.05),
  num("In a normal distribution 50% of values are below 30 and 84% are below 36. Find σ.", 6, "36 = μ + σ."),
  num("In a normal distribution 2.5% of values are above 90 and 50% are below 70. Find σ.", 10, "90 = μ + 2σ."),
  num("Values 44 and 68 have z-scores −1 and 2. Find σ.", 8, "3σ = 24."),
  num("Values 44 and 68 have z-scores −1 and 2. Find μ.", 52, "44 + 8."),
  num("A student scored 85 on a test with μ = 76 and σ = 6. What is the z-score?", 1.5, "9/6.", null, 0.001),
  mc("Ana: 78 in Math (μ = 70, σ = 5). Ben: 81 in Science (μ = 72, σ = 6). Who did better relative to their class?", "Ana (z = 1.6 vs 1.5)", ["Ben (z = 1.5 vs 1.6)", "they did equally well", "cannot compare different subjects"], "Compare z-scores."),
  mc("N(100, 15²). Which interval contains about 95% of values?", "70 to 130", ["85 to 115", "55 to 145", "90 to 110"], "μ ± 2σ."),
  tf("If every value of a normal distribution is increased by 10, the z-score of each value stays the same.", true, "Both x and μ increase by 10."),
  tf("The 68–95–99.7 rule applies exactly to any data set.", false, "Only approximately, for normal data."),
  ms("X ~ N(50, 5²). Which are correct? Select all.", ["P(X > 50) = 0.5", "about 68% between 45 and 55", "about 2.5% below 40", "about 16% above 55", "about 95% between 40 and 55"], [0, 1, 2, 3], "40 to 55 is about 81.5%."),
  num("The curve shows a normal distribution. Use the empirical rule to estimate the shaded percent.", 34, "From μ to μ + σ.", normalSvg({ mu: 100, s: 10, shade: [[100, 110, "blue"]] }), 0.5),
  num("The curve shows N(30, 4²). Estimate the shaded percent (from 22 to 34).", 81.5, "47.5 + 34.", normalSvg({ mu: 30, s: 4, shade: [[22, 34, "green"]] }), 0.5),
  num("A z-score is 0.75 in N(240, 32²). Find x.", 264, "240 + 0.75(32)."),
  num("Heights are N(170, 8²) cm. A height has z = −1.25. Find the height.", 160, "170 − 10."),
  num("In a class of 200 with normally distributed marks, about how many students score more than 2σ above the mean?", 5, "2.5% of 200."),
  num("The mean of a normal distribution is 18 and 99.7% of values lie between 9 and 27. Find σ.", 3, "3σ = 9."),
  mc("Which normal distribution is widest?", "N(10, 5²)", ["N(10, 2²)", "N(50, 1²)", "N(0, 3²)"], "Largest σ."),
];
