// 5.7 Displaying & Describing Distributions — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, pieSvg, stemLeafSvg, lineSvg } from "../../mdm4u/figs.mjs";
import { median } from "../../mdm4u/count.mjs";

const sl = [23, 27, 31, 34, 34, 38, 41, 45, 47, 52];
const sl2 = [105, 112, 118, 121, 121, 126, 133, 137, 140, 144, 151];

export const E = [
  num("Out of 40 students, 14 walk to school. What is the relative frequency? Answer as a decimal.", 0.35, "14/40.", null, 0.001),
  num("Out of 250 people, 60 prefer tea. What is the relative frequency as a percent?", 24, "60/250."),
  num("Frequencies are 4, 9, 6, 1. What is the cumulative frequency of the 3rd class?", 19, "4 + 9 + 6."),
  num("Frequencies are 4, 9, 6, 1. What is the total frequency?", 20, "Add them."),
  num("In a circle graph of 200 responses, what central angle (degrees) represents 50 responses?", 90, "50/200 × 360."),
  num("In a circle graph, a category is 15% of the data. What is its central angle in degrees?", 54, "0.15 × 360."),
  mc("Which display is best for the favourite sports of 120 students?", "bar graph", ["histogram", "stem-and-leaf plot", "box plot"], "Categorical."),
  mc("Which display shows parts of a whole?", "circle graph", ["histogram", "dot plot", "stem-and-leaf plot"], "Sectors."),
  mc("In a histogram, the bars…", "touch, because the intervals are continuous", ["are separated", "show categories", "must all be equal height"], "Numerical intervals."),
  mc("A distribution with a long tail to the right is…", "skewed right", ["skewed left", "symmetric", "uniform"], "Tail names the skew."),
  mc("A distribution with two peaks is…", "bimodal", ["uniform", "skewed", "normal"], "Two modes."),
  tf("In a symmetric distribution, the mean and median are about equal.", true, "Balance."),
  tf("A circle graph can show the distribution of exact heights of students.", false, "Use a histogram."),
  tf("A vertical axis that does not start at zero can exaggerate differences between bars.", true, "Truncated axis."),
  num("Read the stem-and-leaf plot (key 2 | 3 = 23): how many values are there?", sl.length, "Count the leaves.", stemLeafSvg(sl)),
  num("Read the stem-and-leaf plot: what is the median?", median(sl), "Average of the 5th and 6th.", stemLeafSvg(sl), 0.001),
  num("Read the bar graph: how many students chose soccer?", 18, "Bar height.", barsSvg([12, 18, 9, 6], { labels: ["hockey", "soccer", "tennis", "golf"], top: true })),
  num("Read the circle graph: what percent ride the bus?", 45, "Read the legend.", pieSvg([["bus", 45, "blue"], ["walk", 30, "green"], ["car", 25, "amber"]])),
  mc("Which display keeps every original data value?", "stem-and-leaf plot", ["histogram", "box plot", "circle graph"], "Leaves are the digits."),
  mc("A uniform distribution looks like…", "bars of about equal height", ["one tall peak", "a long right tail", "two peaks"], "Flat."),
];

export const M = [
  num("A circle-graph sector of 72° represents 45 people. How many people were surveyed?", 225, "72/360 = 0.2; 45/0.2."),
  num("A survey of 360 people: a sector has central angle 130°. How many people does it represent?", 130, "130/360 of 360."),
  num("Relative frequencies are 0.15, 0.35, 0.3 and x. Find x.", 0.2, "They add to 1.", null, 0.001),
  num("Cumulative frequencies are 5, 12, 26, 33, 35. What is the frequency of the 3rd class?", 14, "26 − 12."),
  num("Cumulative frequencies are 5, 12, 26, 33, 35. In which class (1–5) is the median?", 3, "The 18th value: cumulative passes 18 in class 3."),
  num("Read the cumulative relative frequency graph: estimate the median time (min).", 30, "0.5 is reached at 30.", lineSvg([0, 0.1, 0.3, 0.5, 0.8, 1], { xs: [0, 10, 20, 30, 40, 50], xlabel: "time (min)", ylabel: "cum. rel. freq." })),
  num("Read the stem-and-leaf plot (key 10 | 5 = 105): find the median.", median(sl2), "11 values: the 6th.", stemLeafSvg(sl2)),
  num("Read the stem-and-leaf plot (key 10 | 5 = 105): find the range.", 151 - 105, "151 − 105.", stemLeafSvg(sl2)),
  mc("The histogram shows wait times. Which is most likely true?", "the mean is greater than the median", ["the mean is less than the median", "the mean equals the median", "there is no median"], "Skewed right.", barsSvg([14, 10, 6, 3, 2, 1], { labels: ["0–5", "5–10", "10–15", "15–20", "20–25", "25–30"], histogram: true })),
  mc("Test marks are mostly high with a few very low scores. The distribution is…", "skewed left", ["skewed right", "symmetric", "uniform"], "Tail on the left."),
  mc("A bar graph's vertical axis runs from 95 to 100. Bars are 96 and 99. The 99 bar looks how many times as tall?", "4 times", ["about 1.03 times", "3 times", "2 times"], "(99 − 95)/(96 − 95)."),
  mc("A graph doubles the side of a square icon to show a doubling of sales. The picture exaggerates because…", "the area quadruples", ["squares cannot show data", "the axis is missing", "it is a bar graph"], "Area scales with the square."),
  ms("Which describe a distribution well? Select all.", ["its shape", "its centre", "its spread", "any outliers", "the colour of the graph"], [0, 1, 2, 3], "SOCS."),
  ms("Which displays suit 500 numerical values? Select all.", ["histogram", "box plot", "cumulative frequency graph", "circle graph", "pictograph of each value"], [0, 1, 2], "Summaries of numbers."),
  tf("Using unequal interval widths with bars of equal width can distort a histogram's shape.", true, "Bar area should match frequency."),
  tf("A stem-and-leaf plot works well for 5000 values.", false, "Too many leaves."),
  num("Read the histogram of 40 values: how many values are 20 or more?", 5, "4 + 1.", barsSvg([7, 12, 8, 8, 4, 1], { labels: ["0–5", "5–10", "10–15", "15–20", "20–25", "25–30"], histogram: true, top: true })),
  num("Ages in a club: 12 children (10–20) and 18 adults (30–50) are graphed together. How many modes would the histogram probably show?", 2, "Two groups."),
  num("A frequency table has relative frequency 0.125 for a class with 15 values. How many values in total?", 120, "15/0.125."),
  mc("Which statement about the circle graph is correct?", "car is used by half as many as bus", ["walk is the largest group", "bike is a quarter", "bus is less than a third"], "Car 20% vs bus 40%.", pieSvg([["bus", 40, "blue"], ["car", 20, "amber"], ["walk", 30, "green"], ["bike", 10, "violet"]])),
];
