// 7.1 Scatter Diagrams and Correlation — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";
import { pts } from "./st.mjs";

const S = String.raw;

export const E = [
  mc("As the number of hours of daylight increases, heating costs decrease. The correlation is:", "negative", ["positive", "zero", "perfect"], "One rises as the other falls."),
  mc("Height and shoe size of adults are:", "positively correlated", ["negatively correlated", "not correlated", "perfectly correlated"], "Taller people tend to have bigger feet."),
  mc("In a study of revision time and exam mark, the explanatory variable is:", "revision time", ["exam mark", "both", "neither"], "Revision may explain the mark."),
  mc("On a scatter diagram the explanatory variable goes on the:", "horizontal axis", ["vertical axis", "either axis", "diagonal"], "x-axis."),
  tf("A scatter diagram shows bivariate data.", true, "Two variables per individual."),
  tf("If two variables are strongly correlated, one must cause the other.", false, "Correlation is not causation."),
  fill("A third variable that affects both variables in a correlation is called a ___ variable.", ["lurking", "Lurking", "confounding"], "It can create a misleading correlation."),
  num("Find the mean x-value of (2, 5), (4, 9), (9, 13).", 5, "15 ÷ 3."),
  num("Find the mean y-value of (2, 5), (4, 9), (9, 13).", 9, "27 ÷ 3."),
  num("Find the mean x-value of (1, 8), (3, 6), (4, 5), (8, 1).", 4, "16 ÷ 4."),
  num("Find the mean y-value of (1, 8), (3, 6), (4, 5), (8, 1).", 5, "20 ÷ 4."),
  mc("Describe the correlation in the scatter diagram shown.", "strong positive linear correlation", ["strong negative linear correlation", "no correlation", "a non-linear relationship"], "Points rise along a line.", planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 22 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [3, 4, 7, 8, 9, 12, 14, 15, 17, 20]), step: { x: 1, y: 2 } })),
  mc("What kind of correlation does this scatter diagram show?", "no correlation", ["strong positive correlation", "strong negative correlation", "perfect correlation"], "No pattern.", planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 11 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [6, 2, 8, 4, 9, 1, 5, 7, 3, 6]), step: { x: 1, y: 1 } })),
  mc("A point far from the general pattern of a scatter diagram is called:", "an outlier", ["the mean point", "a lurking variable", "the median"], "It does not fit the trend."),
  mc("Which pair is most likely to show negative correlation?", "speed of a car and time for a fixed journey", ["age of a child and height", "hours worked and pay", "temperature and ice-cream sales"], "Faster means less time."),
  tf("The mean point always lies on a line of best fit.", true, "Lines of best fit pass through (x̄, ȳ)."),
  mc("A curved pattern on a scatter diagram suggests the relationship is:", "non-linear", ["linear", "non-existent", "negative"], "It does not follow a straight line."),
  num("The mean point of (3, 4), (5, 8), (a, 12) has x̄ = 6. Find a.", 10, "3 + 5 + a = 18."),
  mc("Ice-cream sales and drownings are positively correlated. The most likely lurking variable is:", "hot weather", ["the price of ice cream", "swimming lessons", "the day of the week"], "Heat increases both."),
  mc("'Strong' in 'strong positive correlation' describes:", "how closely the points follow a line", ["how steep the line is", "how many points there are", "the size of the values"], "Strength is about scatter, not slope."),
];

export const M = [
  num("Find the mean x-value of (12, 40), (15, 46), (18, 50), (23, 58), (27, 66).", 19, "95 ÷ 5."),
  num("Find the mean y-value of (12, 40), (15, 46), (18, 50), (23, 58), (27, 66).", 52, "260 ÷ 5."),
  num("The mean point of (2, a), (5, 11), (8, 15) is (5, 12). Find a.", 10, "a + 26 = 36."),
  num("Four points have mean point (6, 20). Three are (3, 14), (5, 19), (7, 21). Find the x-coordinate of the fourth.", 9, "Total x = 24."),
  num("For the same four points (mean (6, 20)), find the y-coordinate of the fourth point.", 26, "Total y = 80; 80 − 54."),
  ms("Which are likely to show positive correlation? Select all.", ["hours of practice and piano grade", "age of a car and its value", "arm length and leg length", "outside temperature and heating use"], [0, 2], "The others are negative."),
  mc("A scatter diagram of stopping distance against speed curves upward. A correct description is:", "a strong positive non-linear relationship", ["a strong positive linear correlation", "no relationship", "a negative relationship"], "Increasing, but curved."),
  mc("The scatter diagram shows:", "weak negative correlation", ["strong negative correlation", "weak positive correlation", "no correlation"], "A loose downward cloud.", planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 11 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [8, 6, 9, 5, 7, 4, 8, 3, 6, 4]), step: { x: 1, y: 1 } })),
  num("The scatter diagram shows 8 points and the mean point (marked). What is ȳ?", 7, "Read the marked point.", planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 13 }, points: [...pts([1, 2, 4, 5, 6, 7, 9, 10], [3, 4, 5, 7, 8, 8, 10, 11]), P(5.5, 7, "mean ", "amber")], step: { x: 1, y: 1 } })),
  tf("An outlier can make a correlation look weaker than it really is.", true, "It pulls points away from the trend."),
  mc("In towns, the number of doctors and the number of deaths are positively correlated. The best explanation is:", "both increase with population size", ["doctors cause deaths", "deaths cause more doctors to move in", "the data are wrong"], "Population is a lurking variable."),
  mc("Which statement about correlation is true?", "it measures association, not cause", ["it proves cause when strong", "it only applies to positive data", "it requires a curved pattern"], "Association only."),
  num("Five points have x̄ = 10. Four of the x-values are 6, 9, 11, 13. Find the fifth.", 11, "Total 50; 50 − 39."),
  mc("A researcher plots age (x) against reaction time (y) for adults. Older adults tend to react more slowly. The correlation is:", "positive", ["negative", "zero", "impossible to tell"], "Both increase together."),
  ms("Which should you check before describing a correlation? Select all.", ["whether the pattern is linear", "outliers", "the context", "the colour of the points"], [0, 1, 2], "Colour is irrelevant."),
  num("The mean point of a data set is (8, 15). Each x is increased by 2. What is the new x̄?", 10, "Every x shifts by 2."),
  mc("Points lying exactly on a downward straight line show:", "perfect negative linear correlation", ["perfect positive correlation", "no correlation", "weak negative correlation"], "All on a line."),
  num("Find the mean y-value of (1, 2.5), (2, 3.5), (3, 6), (4, 8).", 5, "20 ÷ 4."),
  mc("Which scatter diagram description is best for points forming a U shape?", "strong non-linear relationship", ["no relationship", "strong positive linear correlation", "weak negative correlation"], "There is a clear relationship, just not linear."),
  num("Three points (1, 4), (3, 8) and (k, 12) have mean point (4, 8). Find k.", 8, "4 + k = 12."),
];
