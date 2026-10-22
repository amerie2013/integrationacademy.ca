// IB AA SL chapter 7 assignments (homework): 12 questions each — Knowledge 1-3, Thinking 4-5, Communication 6-7,
// Application 8-10, Hard Level 11-12. [[key|caption]] in a line is replaced by a figure (uploaded SVG) when published.
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const pts = (xs, ys, color = "violet") => xs.map((x, i) => ({ x, y: ys[i], color }));
const grid = (view, step) => planeDoc({ view, step });

export const ASSIGNMENTS = [
  { code: "7.1", title: "Assignment 7.1 — Scatter Diagrams and Correlation", figs: {
      a: planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 11 }, points: pts([1, 2, 3, 3.5, 4, 5, 6, 6.5, 7, 8, 9, 10], [9.5, 8, 8.5, 7, 7.5, 6, 6.5, 4.5, 5, 4, 2.5, 3]), step: { x: 1, y: 1 } }),
      g: grid({ xmin: 0, xmax: 12, ymin: 0, ymax: 30 }, { x: 1, y: 2 }),
      c: planeDoc({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 13 }, points: [...pts([1, 2, 2.5, 3, 1.5], [2, 3, 1.5, 2.5, 1]), ...pts([9, 10, 11, 10.5, 9.5], [10, 9, 11, 10.5, 11.5], "green")], step: { x: 1, y: 1 } }) }, lines: [
    "Knowledge & Understanding",
    "1. Identify the explanatory and response variables in each study: (a) amount of fertiliser and crop yield; (b) daily temperature and electricity used for air conditioning.",
    "2. Describe the correlation shown. [[a|Scatter diagram for question 2]]",
    "3. Find the mean point of (2, 9), (4, 13), (5, 14), (7, 18), (12, 26).",
    "Thinking",
    "4. Plot the data in question 3 and its mean point on the grid, and draw a line of best fit by eye through the mean point. [[g|Grid for question 4]]",
    "5. Five points have mean point (6, 15). Four of them are (2, 8), (5, 13), (7, 17), (9, 20). Find the fifth point.",
    "Communication",
    "6. Explain the difference between correlation and causation, with an example of a lurking variable.",
    "7. Explain why the scatter diagram shown could give a misleading impression of correlation. [[c|Two clusters]]",
    "Application",
    "8. A researcher finds a strong positive correlation between the number of hours children spend outdoors and their vocabulary scores. Suggest two possible lurking variables.",
    "9. In a data set relating study hours to grades, one student studied 1 hour and scored 98%. Discuss how this point should be treated.",
    "10. Give an example of two variables with a strong relationship that is not linear, and sketch a scatter diagram.",
    "Hard Level",
    "11. Explain why points in the top-right and bottom-left quadrants (about the mean point) support positive correlation, using the sign of (x − x̄)(y − ȳ).",
    "12. Design an investigation to test whether listening to music while studying affects test scores, explaining how you would avoid confusing correlation with causation.",
  ] },
  { code: "7.2", title: "Assignment 7.2 — Pearson's Correlation Coefficient", figs: {
      e: planeDoc({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 22 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [4, 3, 7, 6, 10, 8, 13, 12, 15, 17]), step: { x: 1, y: 2 } }),
      o: planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 14 }, points: [...pts([1, 2, 3, 4, 5, 6, 7, 8, 9], [2.5, 3, 4, 5, 5.5, 6.5, 7, 8, 9]), { x: 11, y: 1.5, color: "red", label: "outlier" }], step: { x: 1, y: 1 } }) }, lines: [
    "Knowledge & Understanding",
    "1. State the range of possible values of r, and describe r = −0.88, r = 0.42 and r = 0.03.",
    "2. Calculate r by hand for (1, 4), (2, 5), (3, 7), (4, 8), (5, 11).",
    "3. Estimate r for the scatter diagram shown, then check with a GDC if the data are x = 1, …, 10 and y = 4, 3, 7, 6, 10, 8, 13, 12, 15, 17. [[e|Scatter diagram for question 3]]",
    "Thinking",
    S`4. For 6 pairs, \(\sum x=33\), \(\sum y=84\), \(\sum xy=520\), \(\sum x^2=211\), \(\sum y^2=1318\). Find \(r\).`,
    "5. Explain what happens to r when (a) every x-value is multiplied by 5, (b) every y-value is increased by 20, (c) every y-value is multiplied by −1.",
    "Communication",
    "6. Explain why r = 0 does not mean that two variables are unrelated, with a sketch.",
    "7. The scatter diagram shows one outlier. Explain its effect on r and how you would report the correlation. [[o|Data with an outlier]]",
    "Application",
    "8. Use a GDC to find r for arm span (cm) 152, 158, 163, 167, 171, 178, 184 and height (cm) 150, 160, 161, 169, 170, 180, 182, and interpret it.",
    "9. A newspaper reports r = 0.85 between the number of coffee shops and house prices across 30 towns, concluding that coffee shops increase house prices. Criticise this.",
    "10. Two data sets have r = 0.65 and r = −0.81. Which shows the stronger linear relationship? Explain.",
    "Hard Level",
    S`11. Show that \(r\) is unchanged when every \(x\) is replaced by \(ax+b\) with \(a>0\).`,
    "12. Construct a data set of five points with r = 1, and another of five points with a perfect relationship but r = 0.",
  ] },
  { code: "7.3", title: "Assignment 7.3 — Lines of Best Fit and Regression", figs: {
      r: planeDoc({ view: { xmin: 0, xmax: 22, ymin: 0, ymax: 60 }, points: pts([2, 4, 6, 8, 10, 12, 14, 16, 18], [12, 17, 20, 26, 30, 33, 39, 42, 47]), step: { x: 2, y: 5 } }),
      w: planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 12 }, points: pts([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [6, 3, 8, 5, 2, 7, 4, 9, 3, 6]), step: { x: 1, y: 1 } }) }, lines: [
    "Knowledge & Understanding",
    S`1. Using \(y=7+3.5x\), predict \(y\) when \(x=4\) and \(x=9\).`,
    S`2. A regression line of \(y\) on \(x\) has gradient 2.4 and the mean point is \((10,30)\). Find its equation.`,
    S`3. For a data set \(S_{xy}=150\), \(S_{xx}=60\), \(\bar x=8\), \(\bar y=35\). Find the regression line of \(y\) on \(x\).`,
    "Thinking",
    "4. The scatter diagram shows study time (x, hours) and test score (y). Use a GDC with x = 2, 4, …, 18 and y = 12, 17, 20, 26, 30, 33, 39, 42, 47 to find the y-on-x line, and interpret its gradient. [[r|Study time and score]]",
    "5. For the data in question 4, predict the score for 11 hours and for 30 hours, and comment on the reliability of each.",
    "Communication",
    "6. Explain the difference between interpolation and extrapolation, and why extrapolation is risky.",
    "7. Explain why a regression line should not be used for the data shown. [[w|Scatter diagram for question 7]]",
    "Application",
    "8. For temperatures 5, 8, 12, 15, 20, 24 °C and hot-chocolate sales 82, 75, 66, 58, 45, 37, find the y-on-x line, predict sales at 18 °C, and interpret the intercept.",
    "9. For the data in question 8, find the x-on-y line and estimate the temperature on a day when 60 hot chocolates are sold.",
    "10. A company models monthly profit (y, thousands) against advertising (x, thousands) by y = 15 + 4.2x, for x from 2 to 12. Interpret both numbers and discuss predicting profit for x = 50.",
    "Hard Level",
    S`11. The regression lines of a data set are \(y=1.5+0.8x\) and \(x=0.5+1.05y\). Find the mean point and \(r\).`,
    S`12. Show that the regression line of \(y\) on \(x\) passes through \((\bar x,\bar y)\) using \(a=\bar y-b\bar x\).`,
  ] },
];
