// IB AA SL chapter 6 assignments (homework): 12 questions each — Knowledge 1-3, Thinking 4-5, Communication 6-7,
// Application 8-10, Hard Level 11-12. [[key|caption]] in a line is replaced by a figure (uploaded SVG) when published.
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;
const bars = (pairs, color = "violet", w = 0.6) => pairs.map(([x, h]) => ({ pts: [[x - w / 2, 0], [x - w / 2, h], [x + w / 2, h], [x + w / 2, 0]], color }));
const histo = (edges, f, color = "violet") => f.map((h, i) => ({ pts: [[edges[i], 0], [edges[i], h], [edges[i + 1], h], [edges[i + 1], 0]], color }));
const box = (mn, q1, q2, q3, mx, y = 1, h = 0.6, color = "violet") => [
  { pts: [[mn, y], [q1, y]], color }, { pts: [[q3, y], [mx, y]], color },
  { pts: [[q1, y - h / 2], [q3, y - h / 2], [q3, y + h / 2], [q1, y + h / 2], [q1, y - h / 2]], color },
  { pts: [[q2, y - h / 2], [q2, y + h / 2]], color: "red" },
];

export const ASSIGNMENTS = [
  { code: "6.1", title: "Assignment 6.1 — Sampling and Data Collection", figs: {
      s: planeDoc({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 420 }, segs: [...bars([[1, 380]], "blue"), ...bars([[2, 300]], "violet"), ...bars([[3, 220]], "green"), ...bars([[4, 100]], "amber")], step: { x: 1, y: 50 } }) }, lines: [
    "Knowledge & Understanding",
    "1. Classify each as discrete or continuous: (a) the number of absences in a term; (b) the volume of water in a bottle; (c) the number of pages in a book; (d) the wingspan of a bird.",
    "2. Explain the difference between a population and a sample, and between a parameter and a statistic.",
    "3. A systematic sample of 45 is taken from a list of 1350. Find the sampling interval and the first four members if the random start is 11.",
    "Thinking",
    "4. A school's year groups have the sizes shown. Find the numbers from each year in a stratified sample of 60. [[s|Year group sizes for question 4]]",
    "5. A stratified sample of 72 contains 27 from a stratum of 450 people. Find the population size and the number from a second stratum of size 320.",
    "Communication",
    "6. Explain why a convenience sample is likely to be biased, with an example.",
    "7. Explain why a larger sample reduces random variation but does not remove bias.",
    "Application",
    "8. A supermarket wants customers' opinions about opening hours. Compare surveying 50 shoppers at 11 am on a Tuesday with a stratified sample by time of visit.",
    "9. In a survey of daily walking distance (km), one response is 140. Discuss how this value should be treated.",
    "10. A factory has three shifts with 120, 90 and 60 workers. Describe how to choose a stratified sample of 36 and find the numbers from each shift.",
    "Hard Level",
    "11. Strata have sizes in the ratio 4 : 7 : 9 and a stratified sample of 50 is required. Find the numbers from each stratum, rounding so that the total is 50, and explain your rounding.",
    "12. A list of 600 houses is ordered so that houses alternate between corner and middle plots every 6 houses. Explain why a systematic sample with k = 12 could be badly biased, and suggest a better method.",
  ] },
  { code: "6.2", title: "Assignment 6.2 — Presenting Data", figs: {
      h: planeDoc({ view: { xmin: -2, xmax: 62, ymin: 0, ymax: 24 }, segs: histo([0, 10, 20, 30, 40, 50, 60], [5, 12, 22, 18, 8, 5]), step: { x: 10, y: 4 } }),
      c: planeDoc({ view: { xmin: 0, xmax: 100, ymin: 0, ymax: 155 }, segs: [{ pts: [[0, 0], [20, 10], [40, 38], [60, 90], [80, 132], [100, 150]], color: "violet" }], step: { x: 10, y: 10 } }),
      b: planeDoc({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 3 }, segs: [...box(5, 18, 26, 33, 50, 2, 0.6, "blue"), ...box(12, 22, 28, 31, 40, 1, 0.6, "green")], step: { x: 5, y: 1 } }) }, lines: [
    "Knowledge & Understanding",
    "1. Find the five-number summary of 14, 22, 9, 31, 17, 25, 12, 19, 28.",
    "2. The histogram shows the times (min) taken by 70 students to travel to school. State the modal class and the number taking at least 40 minutes. [[h|Travel times]]",
    "3. Q1 = 42 and Q3 = 58. Find the fences for outliers and decide whether 15 and 85 are outliers.",
    "Thinking",
    "4. Complete a cumulative frequency table for the histogram in question 2 and use it to estimate the median.",
    "5. The cumulative frequency graph of 150 test scores is shown. Estimate the median, the IQR and the 90th percentile. [[c|Cumulative frequency of test scores]]",
    "Communication",
    "6. Explain why cumulative frequency is plotted at the upper class boundary.",
    "7. Explain what the box and the whiskers of a box plot show.",
    "Application",
    "8. The box plots compare the times (min) two groups spent on homework (A top, B bottom). Compare the groups. [[b|Homework times]]",
    "9. Using the graph in question 5, estimate how many students scored more than 70, and the pass mark if 75% of students passed.",
    "10. Draw a box plot for 6, 9, 11, 12, 14, 15, 17, 18, 21, 40, marking any outlier.",
    "Hard Level",
    "11. A grouped frequency table has frequencies 6, 14, k, 10, 4. The median lies exactly at the upper boundary of the second class. Find k.",
    "12. Explain how two data sets can have the same median and IQR but different shapes, using sketches of histograms.",
  ] },
  { code: "6.3", title: "Assignment 6.3 — Measures of Central Tendency", figs: {
      f: planeDoc({ view: { xmin: -0.8, xmax: 5.8, ymin: 0, ymax: 11 }, segs: bars([[0, 4], [1, 9], [2, 10], [3, 5], [4, 1], [5, 1]]), step: { x: 1, y: 1 } }),
      g: planeDoc({ view: { xmin: 8, xmax: 72, ymin: 0, ymax: 16 }, segs: histo([10, 20, 30, 40, 50, 60, 70], [4, 9, 15, 11, 7, 4]), step: { x: 10, y: 2 } }) }, lines: [
    "Knowledge & Understanding",
    "1. Find the mean, median and mode of 18, 22, 15, 22, 30, 19, 26.",
    "2. The bar chart shows the number of siblings of 30 students. Find the mean, median and mode. [[f|Number of siblings]]",
    "3. The mean of 9, 14, x, 20, 11 is 14. Find x.",
    "Thinking",
    "4. The histogram shows the ages of 50 people at an event. Estimate the mean age and state the modal class. [[g|Ages at an event]]",
    "5. Values 1, 2, 3, 4 have frequencies 6, k, 8, 4 and the mean is 2.4. Find k.",
    "Communication",
    "6. Explain why the mean of grouped data is only an estimate.",
    "7. Explain, with an example, when the median is a better average than the mean.",
    "Application",
    "8. 14 boys have a mean height of 168 cm and 16 girls a mean of 161 cm. Find the mean height of all 30 students.",
    "9. The mean wage of 12 workers is 640 per week. A new worker joins and the mean becomes 650. Find the new worker's wage.",
    "10. House prices in a street (thousands): 210, 225, 230, 240, 245, 250, 990. Which average should an estate agent advertise, and why?",
    "Hard Level",
    "11. The mean of five numbers is 12, their median is 11 and their only mode is 8. The largest number is 20. Find all five numbers.",
    "12. A data set has mean 20. Each value is multiplied by 3 and then 5 is subtracted. Find the new mean and prove your answer in general.",
  ] },
  { code: "6.4", title: "Assignment 6.4 — Measures of Dispersion", figs: {
      d: planeDoc({ view: { xmin: 0, xmax: 16, ymin: 0, ymax: 3 }, points: [[3, 1.4], [6, 1.4], [8, 1.4], [10, 1.4], [13, 1.4], [6, 0.4], [7, 0.4], [8, 0.4], [9, 0.4], [10, 0.4]].map(([x, y], i) => ({ x, y, color: i < 5 ? "blue" : "green" })), step: { x: 1, y: 1 } }),
      b: planeDoc({ view: { xmin: 140, xmax: 200, ymin: 0, ymax: 3 }, segs: [...box(146, 158, 165, 172, 190, 2, 0.6, "blue"), ...box(150, 160, 167, 170, 180, 1, 0.6, "green")], step: { x: 5, y: 1 } }) }, lines: [
    "Knowledge & Understanding",
    "1. Find the range, IQR and standard deviation of 4, 7, 9, 11, 14.",
    "2. Find the variance and standard deviation of the values 1, 2, 3, 4, 5 with frequencies 2, 3, 5, 3, 2.",
    "3. Data have standard deviation 6. State the new standard deviation if every value is (a) increased by 9, (b) multiplied by 2.5.",
    "Thinking",
    "4. The dot plots show two data sets (blue top, green bottom) with the same mean. Calculate both standard deviations and comment. [[d|Two data sets]]",
    S`5. For 15 values, \(\sum x=180\) and \(\sum x^2=2295\). Find the mean and standard deviation.`,
    "Communication",
    "6. Explain why the deviations from the mean are squared when calculating the standard deviation.",
    "7. Explain why adding a constant to every value does not change the standard deviation.",
    "Application",
    "8. The box plots show the heights (cm) of two groups (A top, B bottom). Compare the groups using a measure of centre and a measure of spread. [[b|Heights of two groups]]",
    "9. Exam scores have mean 56 and SD 10. They are scaled by y = 0.8x + 25. Find the new mean and SD, and explain why the scaling might be used.",
    "10. Two machines fill bags of rice: A has mean 2.01 kg and SD 0.02 kg; B has mean 2.00 kg and SD 0.06 kg. Which would you buy for a packing line, and why?",
    "Hard Level",
    "11. The data 3, 7, a, b (with a < b) have mean 6 and variance 5.5. Find a and b.",
    S`12. Prove that \(\frac{\sum(x-\bar x)^2}{n}=\frac{\sum x^2}{n}-\bar x^2\).`,
  ] },
];
