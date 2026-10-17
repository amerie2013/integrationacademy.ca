// Chapter 6 assignments (homework): 10 questions each — Knowledge 1-3, Thinking 4-5, Communication 6-7, Application 8-10.
// [[key|caption]] in a line is replaced by a figure (uploaded SVG) when published. Titles match the existing rows.
import { boxPlotDoc, dotPlotDoc, histogramDoc, barChartDoc, scatterDoc } from "../figs6.mjs";
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";

export const ASSIGNMENTS = [
  { code: "6.1", title: "Assignment 6.1 — Big Data & Its Implications", figs: {
      bars: barChartDoc({ bars: [["Mon", 310], ["Tue", 318], ["Wed", 325]], base: 300, top: 330, step: 5, ylabel: "riders" }) }, lines: [
    "Knowledge & Understanding",
    "1. Classify each variable as categorical, discrete or continuous: (a) a pet's mass (b) the number of pets (c) the type of pet.",
    "2. Name the sampling method: (a) every 15th ticket holder (b) a random sample from each grade (c) asking your friends.",
    "3. What is the difference between a population and a sample? Give an example of each.",
    "Thinking",
    String.raw`4. A random sample of \(90\) of the \(2700\) students in a district finds that \(36\) bike to school. Estimate the number of students in the district who bike.`,
    "5. The graph shows bus riders on three days. How many times as tall does Wednesday's bar look compared with Monday's? What is the actual ratio? [[bars|Bar graph for question 5]]",
    "Communication",
    "6. Explain why an online poll on a news website is not a reliable way to measure public opinion.",
    "7. Describe one benefit and one risk of a city using phone location data to plan new roads.",
    "Application",
    String.raw`8. A school has \(450\) Grade 9s, \(400\) Grade 10s and \(350\) Grade 11s. Plan a stratified sample of \(48\) students.`,
    "9. Rewrite the question “Don't you agree that the cafeteria food is overpriced?” so that it is neutral.",
    String.raw`10. Biologists tag \(40\) turtles in a pond. Later they catch \(50\) turtles, \(8\) of which are tagged. Estimate the turtle population and state one assumption.`,
  ] },
  { code: "6.2", title: "Assignment 6.2 — One-Variable Data & Statistics", figs: {
      dots: dotPlotDoc({ data: [2, 3, 3, 4, 4, 4, 5, 5, 6, 7, 15], lo: 0, hi: 16, step: 1, label: "hours" }),
      box: boxPlotDoc({ five: [18, 26, 31, 37, 52], lo: 15, hi: 55, step: 5, showValues: true, label: "age" }) }, lines: [
    "Knowledge & Understanding",
    String.raw`1. Find the mean, median, mode and range of \(12, 17, 9, 14, 17, 21, 15\).`,
    String.raw`2. Find the five-number summary and IQR of \(4, 9, 11, 13, 15, 18, 20, 24\).`,
    "3. Read the median, Q1, Q3 and IQR from the box plot. [[box|Box plot for question 3]]",
    "Thinking",
    "4. The dot plot shows hours of volunteering. Find the mean and median, test 15 for being an outlier, and decide which measure of centre is better. [[dots|Dot plot for question 4]]",
    String.raw`5. Five numbers have a mean of \(20\). Four of them are \(14, 18, 25, 22\). Find the fifth.`,
    "Communication",
    "6. Explain why the median is usually reported for house prices rather than the mean.",
    "7. Explain what the box and each whisker of a box plot represent.",
    "Application",
    String.raw`8. A frequency table of family sizes: \(2\) people: \(5\) families, \(3\): \(8\), \(4\): \(9\), \(5\): \(3\). Find the mean and median family size.`,
    String.raw`9. Two runners' times (s) over five races: A: \(12.1, 12.4, 12.3, 12.2, 12.5\); B: \(11.8, 12.9, 12.0, 13.1, 11.7\). Compare their centres and spreads. Who is more consistent?`,
    "10. Collect a set of at least 10 measurements of your own (for example, the time to get to school each day). Find the five-number summary, draw a box plot and write two sentences describing the data.",
  ] },
  { code: "6.3", title: "Assignment 6.3 — Scatter Plots & Correlation", figs: {
      sc: scatterDoc({ pts: [[2, 30], [3, 34], [4, 41], [5, 43], [6, 50], [7, 52], [8, 60], [9, 61], [10, 68]], view: { xmin: 0, xmax: 12, ymin: 0, ymax: 80 }, step: { x: 1, y: 10 }, xlabel: "hours worked", ylabel: "earnings ($)" }),
      trip: planeDoc({ view: { xmin: 0, xmax: 70, ymin: 0, ymax: 30 }, segs: [{ pts: [[0, 0], [20, 15], [30, 15], [45, 27], [70, 0]] }], step: { x: 10, y: 5 }, xlabel: "time (min)", ylabel: "km from home" }) }, lines: [
    "Knowledge & Understanding",
    "1. State the type of correlation you would expect between (a) outdoor temperature and hot-chocolate sales (b) height and arm span (c) shoe size and favourite colour.",
    "2. Identify the independent and dependent variables in question 1(b).",
    String.raw`3. A line of best fit is \(y=3.5x+12\). Predict \(y\) when \(x=6\).`,
    "Thinking",
    "4. Describe the correlation in the scatter plot, draw a line of best fit and find its equation. Use it to predict earnings for 7.5 hours. [[sc|Scatter plot for question 4]]",
    "5. Describe the trip on the graph and find the speed on each moving part in km/h. [[trip|Distance–time graph for question 5]]",
    "Communication",
    "6. Explain the difference between interpolation and extrapolation, and why extrapolation is riskier.",
    "7. Students who play a musical instrument tend to have higher marks. Explain why this does not prove that music causes higher marks.",
    "Application",
    String.raw`8. A line of best fit passes through \((10, 85)\) and \((50, 45)\). Find its equation.`,
    String.raw`9. Using the equation from question 8 (data from \(x=10\) to \(50\)), predict \(y\) at \(x=30\) and at \(x=100\). Comment on each prediction.`,
    "10. Design an investigation into whether the number of hours slept is related to reaction time. State the variables, how you would collect the data and how you would analyse it.",
  ] },
  { code: "6.4", title: "Assignment 6.4 — The Mathematical Modelling Process", figs: {
      cool: scatterDoc({ pts: [[0, 88], [4, 66], [8, 51], [12, 41], [16, 34], [20, 30]], view: { xmin: 0, xmax: 30, ymin: 0, ymax: 100 }, step: { x: 4, y: 10 }, xlabel: "time (min)", ylabel: "T (°C)" }),
      hist: histogramDoc({ bins: [[0, 2, 3], [2, 4, 7], [4, 6, 12], [6, 8, 6], [8, 10, 2]], xlabel: "hours of homework per week" }) }, lines: [
    "Knowledge & Understanding",
    "1. List the six stages of the mathematical modelling process in order.",
    String.raw`2. Decide whether each pattern is linear or exponential: (a) \(5, 9, 13, 17\) (b) \(5, 10, 20, 40\) (c) \(64, 32, 16, 8\).`,
    String.raw`3. Evaluate \(P=1500(1.04)^t\) for \(t=5\) (nearest whole number).`,
    "Thinking",
    "4. The data show a cooling drink in a 22 °C room. Explain why a linear model is not suitable and suggest a better type of model. [[cool|Cooling data for question 4]]",
    String.raw`5. A phone plan costs \(36\) dollars for \(300\) MB and \(48\) dollars for \(700\) MB. Assuming a linear model, find the cost per MB and the fixed fee.`,
    "Communication",
    "6. Explain why assumptions must be stated as part of a modelling answer. Give an example of an assumption that could make a model fail.",
    "7. Use the histogram to estimate the mean hours of homework, and explain why your answer is an estimate. [[hist|Histogram for question 7]]",
    "Application",
    String.raw`8. A town of \(18\,000\) people grows by \(3\%\) per year. Write a model and predict the population in \(8\) years.`,
    String.raw`9. A school club sells \(300\) bracelets at \(5\) dollars each; each \(0.50\)-dollar increase loses \(20\) sales. Find the price that gives the most revenue.`,
    "10. Estimate how much money a student could save in a year by bringing lunch from home instead of buying it. Show every stage of the modelling process, including your assumptions.",
  ] },
];
