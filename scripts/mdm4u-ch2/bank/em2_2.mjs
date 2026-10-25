// 2.2 Experimental vs Theoretical Probability — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3 } from "./pk.mjs";
import { barsSvg, lineSvg, tableSvg } from "../../mdm4u/figs.mjs";

export const E = [
  p3("A coin was tossed 50 times and landed heads 28 times. What is the experimental probability of heads?", 28 / 50, "28 ÷ 50."),
  p3("A die was rolled 60 times and showed a 3 eleven times. What is the experimental probability of a 3?", 11 / 60, "11 ÷ 60."),
  p3("A player scored on 18 of 45 shots. Estimate the probability she scores on her next shot.", 18 / 45, "18 ÷ 45."),
  p3("In 200 spins a spinner landed on blue 54 times. What is the experimental probability of not blue?", 146 / 200, "(200 − 54) ÷ 200."),
  p3("What is the theoretical probability of rolling an even number on a die?", 0.5, "3 of 6."),
  num("A coin is tossed 400 times. About how many heads do you expect?", 200, "400 × 1/2."),
  num("A die is rolled 120 times. About how many 6s do you expect?", 20, "120 × 1/6."),
  num("In a sample of 50 students, 12 have a part-time job. Estimate the number with a job in a school of 900.", 216, "12/50 × 900."),
  p3("The table shows 100 rolls of a die. What is the experimental probability of rolling a 1?", 0.14, "14 ÷ 100.", tableSvg([["face", "1", "2", "3", "4", "5", "6"], ["frequency", "14", "19", "15", "17", "16", "19"]], { rowHead: true })),
  p3("The bar chart shows the colours of 80 cars passing a school. What is the experimental probability that a car is white?", 28 / 80, "28 of 80.", barsSvg([28, 20, 18, 14], { labels: ["white", "black", "grey", "red"], top: true, ylabel: "cars" })),
  mc("Which gives the most reliable estimate of a probability?", "an experiment with 1000 trials", ["an experiment with 10 trials", "an experiment with 50 trials", "a single trial"], "More trials, more reliable."),
  mc("A probability found by actually doing an experiment is called…", "experimental probability", ["theoretical probability", "subjective probability", "odds"], "Relative frequency."),
  mc("A doctor estimates a 90% chance of recovery from experience. This is…", "subjective probability", ["theoretical probability", "experimental probability from a simulation", "odds"], "A judgement."),
  tf("Experimental probability always equals theoretical probability.", false, "It varies from experiment to experiment."),
  tf("As the number of trials increases, experimental probability tends to get closer to theoretical probability.", true, "Law of large numbers."),
  tf("After 5 heads in a row, a fair coin is more likely to land tails.", false, "Tosses are independent."),
  ms("Which devices could simulate an event with probability 1/2? Select all.", ["a coin", "a die: even = success", "a random digit 0–9: 0–4 = success", "a die: 6 = success", "a spinner with 3 equal sectors"], [0, 1, 2], "Each gives 1/2."),
  num("The relative frequencies of three outcomes are 0.3, 0.45 and x. What is x?", 0.25, "They add to 1.", null, 0.001),
  p3("A bag has an unknown mix of marbles. In 40 draws with replacement, 15 were red. Estimate P(red).", 15 / 40, "15 ÷ 40."),
  num("A survey of 60 shoppers found 9 paid cash. Estimate how many of 2400 shoppers pay cash.", 360, "9/60 × 2400."),
];

export const M = [
  p3("Two dice were rolled 180 times and doubles came up 36 times. What is the difference between the experimental and theoretical probability of doubles?", 36 / 180 - 1 / 6, "0.2 − 0.167."),
  p3("A thumbtack landed point-up 117 times in 300 drops. Estimate the probability that it lands point-down.", 183 / 300, "(300 − 117) ÷ 300."),
  p3("Use the table of 250 tosses of two coins: what is the experimental probability of exactly one head?", 128 / 250, "128 ÷ 250.", tableSvg([["heads", "0", "1", "2"], ["frequency", "60", "128", "62"]], { rowHead: true })),
  num("Use the table of 250 tosses of two coins: how many times would you expect exactly one head in theory?", 125, "250 × 1/2.", tableSvg([["heads", "0", "1", "2"], ["frequency", "60", "128", "62"]], { rowHead: true })),
  num("A factory finds 7 defective items in a sample of 350. How many defective items do you expect in 12 000?", 240, "7/350 = 0.02; × 12 000."),
  num("To simulate an event with probability 0.35 using two-digit random numbers 00–99, how many of the numbers should count as a success?", 35, "35 of 100."),
  num("A simulation uses random digits 0–9. Digits 0–6 represent a made shot. What probability is being modelled?", 0.7, "7 of 10.", null, 0.001),
  p3("In 500 simulated families of 3 children, 191 had exactly 2 girls. What is the theoretical probability? ", 3 / 8, "3 of 8 equally likely outcomes."),
  p3("A die was rolled 600 times: the 6 appeared 132 times. What is the experimental probability of a 6?", 132 / 600, "132 ÷ 600."),
  mc("A die was rolled 600 times and 6 came up 132 times. What is the best conclusion?", "the die may be biased toward 6; more trials would help", ["the die is definitely fair", "the die is definitely biased", "the next roll will not be a 6"], "Expected 100; 132 is well above."),
  mc("The graph shows the running relative frequency of heads. What does it suggest?", "the coin may be biased toward heads", ["the coin is fair", "the coin always lands heads", "the experiment had too many trials"], "It settles near 0.65, not 0.5.", lineSvg([0.8, 0.7, 0.67, 0.66, 0.64, 0.65, 0.65], { p: 0.5, xs: [10, 20, 50, 100, 200, 500, 1000], xlabel: "tosses", ylabel: "rel. freq. of heads" })),
  tf("A simulation of 10 trials gives a reliable estimate of a probability.", false, "Too few trials."),
  tf("Relative frequencies of all outcomes of an experiment add to 1.", true, "They are fractions of the same total."),
  ms("Which spreadsheet formulas could simulate one roll of a die? Select all.", ["=RANDBETWEEN(1,6)", "=INT(6*RAND())+1", "=RAND()", "=ROUND(6*RAND(),0)", "=6*RAND()"], [0, 1], "RAND() alone gives decimals; ROUND gives 0–6 unevenly."),
  num("A basketball player has made 72% of free throws. In 50 attempts, how many would you expect her to make?", 36, "0.72 × 50."),
  p3("A spinner landed on A 34 times, B 51 times and C 35 times. What is the experimental P(not B)?", 69 / 120, "(34 + 35) ÷ 120."),
  num("A coin landed heads 44 times in 100 tosses. By how many heads does this differ from the expected number?", 6, "50 − 44."),
  num("Two students' experiments: one 20 trials with 7 successes, one 800 trials with 196 successes. What is the larger experiment's estimate? (3 decimals)", 0.245, "196 ÷ 800.", null, 0.0015),
  num("The relative frequency of an event after 400 trials is 0.315. How many successes were there?", 126, "0.315 × 400."),
  p3("Use the bar chart of 240 spins: what is the experimental probability of green?", 90 / 240, "90 ÷ 240.", barsSvg([70, 80, 90], { labels: ["red", "blue", "green"], top: true, ylabel: "frequency" })),
];
