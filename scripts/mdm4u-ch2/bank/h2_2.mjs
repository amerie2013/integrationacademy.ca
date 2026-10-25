// 2.2 Experimental vs Theoretical Probability — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3, r3 } from "./pk.mjs";
import { barsSvg, lineSvg, tableSvg } from "../../mdm4u/figs.mjs";

export const TOPIC = "2.2 Experimental vs Theoretical Probability";
export const Q = [
  p3("In 1200 simulated rolls of two dice, a sum of 8 occurred 171 times. By how much does the experimental probability differ from the theoretical probability?", Math.abs(171 / 1200 - 5 / 36), "|0.1425 − 0.1389|."),
  p3("A simulation of 1000 trials estimated P(at least one 6 in four rolls of a die) as 0.512. What is the theoretical value?", 1 - (5 / 6) ** 4, "1 − (5/6)⁴."),
  p3("What is the theoretical probability that a family of 4 children has at least 3 girls (girls and boys equally likely)?", 5 / 16, "4 + 1 of 16."),
  num("A simulation uses two-digit random numbers 00–99 to model a 0.82 probability of a sale. If success is 00 to k, what is k?", 81, "82 numbers: 00–81."),
  num("A die is rolled 900 times. The 6 comes up 182 times. How many more 6s than expected is that?", 32, "Expected 150."),
  p3("Use the table: a spinner was spun 400 times. Which colour's experimental probability differs most from its theoretical value of 0.25, and by how much? Enter the difference.", Math.max(...[118, 96, 104, 82].map((f) => Math.abs(f / 400 - 0.25))), "Largest |f/400 − 0.25|: red 118/400 = 0.295.", tableSvg([["colour", "red", "blue", "green", "yellow"], ["frequency", "118", "96", "104", "82"]], { rowHead: true })),
  p3("Use the graph: the running relative frequency of an event settles near the value shown on the last point. Estimate the theoretical probability.", 0.3, "The long-run value.", lineSvg([0.5, 0.4, 0.33, 0.31, 0.3, 0.302, 0.299], { xs: [10, 20, 50, 100, 500, 1000, 5000], xlabel: "trials", ylabel: "relative frequency" })),
  p3("Use the bar chart: 50 students each tossed a coin 10 times (500 tosses) and recorded the heads; the class total was 274 heads. What is the experimental probability of heads?", 274 / 500, "274 ÷ 500.", barsSvg([4, 8, 14, 12, 12], { labels: ["0–3", "4", "5", "6", "7–10"], top: true, xlabel: "heads in 10 tosses", ylabel: "students" })),
  p3("Use the bar chart of 360 rolls of two dice: what is the difference between the experimental and theoretical probability of a sum of 7?", Math.abs(66 / 360 - 1 / 6), "66/360 − 6/36.", barsSvg([9, 21, 30, 38, 52, 66, 49, 40, 27, 19, 9], { labels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], top: true, xlabel: "sum", ylabel: "frequency" })),
  p3("A simulation of 400 trials estimates P(two people out of 3 share a birthday month) as 0.24. What is the theoretical probability (12 equally likely months)?", 1 - (12 * 11 * 10) / 12 ** 3, "1 − (12·11·10)/12³."),
  num("To estimate a probability within about 0.01, which number of trials is most reasonable: 10, 100, 1000 or 10 000?", 10000, "Variation shrinks as trials grow; thousands are needed."),
  num("A quality inspector finds defect rates of 3%, 5% and 4% in samples of 100, 300 and 200 items. What is the combined experimental defect rate? (3 decimals)", (3 + 15 + 8) / 600, "Total defects ÷ total items = 26/600.", null, 0.0015),
  mc("A student simulates 3 children per family with a die: 1–3 girl, 4–6 boy. 500 trials give 212 families with exactly 1 girl. What is the theoretical probability?", "0.375", ["0.424", "0.333", "0.5"], "3/8."),
  mc("Which simulation correctly models a free-throw shooter who makes 65% of shots?", "two-digit numbers 00–64 = make", ["one digit 0–6 = make", "a coin: heads = make", "a die: 1–4 = make"], "65 of 100 two-digit numbers."),
  ms("Which statements about the law of large numbers are true? Select all.", ["the relative frequency tends to settle as trials increase", "after many trials the counts of heads and tails must be equal", "the difference between counts can grow while the relative frequency settles", "a coin remembers past results", "more trials usually give a better estimate"], [0, 2, 4], "Counts need not match; proportions settle."),
  tf("In 10 000 fair coin tosses, getting exactly 5000 heads is very likely.", false, "Exactly 5000 has probability under 1%; close to 0.5 is likely."),
  tf("If a simulation's estimate differs from the theoretical probability, the simulation must be wrong.", false, "Random variation is expected."),
  p3("A spinner is designed with P(win) = 0.15. In 2000 spins there were 330 wins. Find the experimental probability.", 330 / 2000, "330 ÷ 2000."),
  num("In the spinner experiment above (P(win) = 0.15, 2000 spins), how many wins were expected?", 300, "0.15 × 2000."),
  p3("Theoretical P(three dice show three different numbers) is to be compared with a simulation. Find the theoretical value.", (6 * 5 * 4) / 216, "6·5·4/6³."),
];
