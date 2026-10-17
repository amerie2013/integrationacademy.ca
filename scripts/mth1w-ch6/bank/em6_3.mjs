// 6.3 Scatter Plots & Correlation — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterDoc, planeDoc } from "./fig.mjs";

export const E = [
  mc(`As hours of practice increase, free-throw percentage tends to increase. This is a…`, "positive correlation", ["negative correlation", "no correlation", "proof of causation"], "Both increase together."),
  mc(`As a car gets older, its value tends to decrease. This is a…`, "negative correlation", ["positive correlation", "no correlation", "causation proved by the graph"], "One increases, the other decreases."),
  mc(`A person's phone number and their height show…`, "no correlation", ["positive correlation", "negative correlation", "strong correlation"], "They are unrelated."),
  mc(`On a scatter plot, the independent variable goes on the…`, "horizontal axis", ["vertical axis", "title", "legend"], "x-axis."),
  mc(`Describe the correlation shown.`, "strong positive", ["strong negative", "weak negative", "none"], "Points rise in a tight band.", scatterDoc({ pts: [[1, 2], [2, 3.2], [3, 3.8], [4, 5.1], [5, 6], [6, 6.8], [7, 8.1]], view: { xmin: 0, xmax: 8, ymin: 0, ymax: 10 }, step: { x: 1, y: 2 } })),
  tf(`A line of best fit must pass through every data point.`, false, "It follows the trend through the middle of the points."),
  num(`A line of best fit is y = 2x + 5. Predict y when x = 10.`, 25, "2(10) + 5."),
  num(`Find the slope of a line of best fit through (0, 10) and (5, 35).`, 5, "25 ÷ 5."),
  mc(`Predicting a value inside the range of the data is called…`, "interpolation", ["extrapolation", "correlation", "causation"], "Inter = between."),
  mc(`Predicting a value outside the range of the data is called…`, "extrapolation", ["interpolation", "a census", "a lurking variable"], "Extra = beyond."),
  tf(`Extrapolation is generally less reliable than interpolation.`, true, "The trend may change outside the data."),
  tf(`A strong correlation proves that one variable causes the other.`, false, "Correlation does not prove causation."),
  mc(`A hidden variable that affects both variables in a correlation is called a…`, "lurking variable", ["dependent variable", "outlier", "line of best fit"], "e.g. temperature for ice cream and sunburns."),
  num(`A walker travels 1200 m in 15 minutes. What is the speed in m/min?`, 80, "1200 ÷ 15."),
  mc(`On a distance–time graph, a horizontal segment means the person is…`, "stopped", ["moving quickly", "returning home", "speeding up"], "Distance does not change."),
  mc(`On a distance-from-home graph, a falling segment means the person is…`, "moving back toward home", ["moving away from home", "stopped", "at home"], "Distance from home decreases."),
  num(`Read the graph: how far from home is the person after 20 minutes (km)?`, 4, "The graph is flat at 4 km from 10 to 30 min.", planeDoc({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 6 }, segs: [{ pts: [[0, 0], [10, 4], [30, 4], [50, 0]] }], step: { x: 10, y: 1 }, xlabel: "time (min)", ylabel: "km" })),
  num(`A line of best fit is y = −3x + 60. Predict y at x = 12.`, 24, "−36 + 60."),
  mc(`Which pair is most likely to show a negative correlation?`, "hours of TV watched and hours of sleep", ["height and arm span", "age of a child and shoe size", "temperature and ice-cream sales"], "More TV often means less sleep."),
  tf(`About half the points should be above the line of best fit and half below.`, true, "That balance is the goal when drawing it by eye."),
];

export const M = [
  num(`A line of best fit passes through (2, 18) and (10, 58). Find its y-intercept.`, 8, "m = 40/8 = 5; 18 = 10 + b."),
  num(`Using y = 5x + 8 (x = hours, data from 1 to 12), predict y at x = 7.5.`, 45.5, "37.5 + 8."),
  num(`Using y = 5x + 8, for what x is y = 63?`, 11, "5x = 55."),
  mc(`The prediction at x = 30 using y = 5x + 8 (data from 1 to 12) is…`, "an extrapolation and less reliable", ["an interpolation and very reliable", "impossible to calculate", "a lurking variable"], "30 is far outside 1–12."),
  num(`Find the slope of the line of best fit drawn on the graph.`, -2, "It passes through (0, 20) and (5, 10).", scatterDoc({ pts: [[1, 18.5], [2, 15.5], [3, 14.5], [4, 11.5], [5, 10.5], [6, 7.5], [7, 6.5]], view: { xmin: 0, xmax: 9, ymin: 0, ymax: 22 }, step: { x: 1, y: 2 }, line: { m: -2, b: 20 } })),
  ms(`Which statements about correlation are true? Select all.`, ["r near 1 means a strong positive correlation", "r near 0 means little or no linear correlation", "r near −1 means a strong negative correlation", "r = 0.9 proves causation"], [0, 1, 2], "r measures strength and direction, not cause."),
  mc(`Students who own more books tend to have higher marks. Which is a possible lurking variable?`, "how much the family values and supports reading", ["the colour of the books", "the student's height", "the day of the week"], "A home environment can affect both."),
  num(`A cyclist rides 12 km in 40 minutes. What is the speed in km/h?`, 18, "12 ÷ (40/60)."),
  num(`A distance–time graph falls from 9 km to 0 km between t = 30 min and t = 45 min. What is the speed in km/h?`, 36, "9 km in 0.25 h."),
  tf(`Two students can draw slightly different lines of best fit for the same data.`, true, "Drawing by eye varies."),
  mc(`The scatter plot of speed and stopping distance curves upward. The best model is…`, "a curve, not a straight line", ["a horizontal line", "a line through the origin only", "no model at all"], "The relationship is non-linear."),
  num(`A line of best fit for temperature T (°C) and drink sales S is S = 8T − 40. Predict sales at 25 °C.`, 160, "200 − 40."),
  num(`In S = 8T − 40, by how many drinks do sales rise for each extra degree?`, 8, "The slope is the rate."),
  mc(`For S = 8T − 40, the prediction at T = 2 °C is −24 drinks. This shows…`, "extrapolation can give impossible results", ["the line is wrong everywhere", "sales are negative in winter", "there is no correlation"], "The model only works in the data range."),
  num(`Read the graph: during which minute range is the person stopped? Give the length of the stop in minutes.`, 15, "Flat from 20 to 35 min.", planeDoc({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 2400 }, segs: [{ pts: [[0, 0], [20, 1600], [35, 1600], [45, 2400], [60, 2400]] }], step: { x: 10, y: 400 }, xlabel: "time (min)", ylabel: "m" })),
  num(`In that graph, find the speed from 35 to 45 minutes in m/min.`, 80, "800 m in 10 min."),
  ms(`Which situations are probably correlation without causation? Select all.`, ["ice-cream sales and drownings", "number of firefighters at a fire and damage", "hours studied and marks", "pushing harder on a gas pedal and speed"], [0, 1], "Temperature and fire size are lurking variables."),
  mc(`To show that a new fertilizer causes taller plants, the best method is…`, "a controlled experiment comparing plants with and without fertilizer", ["a survey of gardeners", "a scatter plot of any two variables", "asking the fertilizer company"], "Experiments test causation."),
  num(`A line of best fit has slope 1.5 and passes through (4, 20). Find y at x = 10.`, 29, "20 + 1.5 × 6."),
  tf(`If the points form a tight band falling from left to right, the correlation is strong and negative.`, true, "Tight = strong; falling = negative."),
];
