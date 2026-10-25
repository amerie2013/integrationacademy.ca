// 3.2 Expected Value — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { barsSvg, tableSvg, spinnerSvg } from "../../mdm4u/figs.mjs";

const $ = (prompt, v, fb, fig = null) => num(`${prompt} (dollars, 2 decimals)`, Math.round(v * 100) / 100, fb, fig, 0.01);

export const E = [
  num("Find E(X): x = 0, 1, 2 with P = 0.2, 0.5, 0.3.", 1.1, "0 + 0.5 + 0.6.", null, 0.001),
  num("Find E(X): x = 1, 3, 5 with P = 0.5, 0.25, 0.25.", 2.5, "0.5 + 0.75 + 1.25.", null, 0.001),
  num("What is the expected value of one roll of a fair die?", 3.5, "21/6.", null, 0.001),
  num("What is the expected number of heads in one toss of a fair coin?", 0.5, "1 × 1/2.", null, 0.001),
  num("A fair 4-sided die is numbered 1 to 4. What is E(X)?", 2.5, "10/4.", null, 0.001),
  $("A game pays 10 dollars with probability 0.2 and nothing otherwise. What is the expected payout?", 2, "10 × 0.2."),
  $("A game pays 5 dollars if a coin lands heads, 1 dollar if tails. What is the expected payout?", 3, "2.5 + 0.5."),
  num("E(X) = 7. What is E(X + 3)?", 10, "Add 3."),
  num("E(X) = 7. What is E(2X)?", 14, "Double."),
  num("E(X) = 4. What is E(5X − 2)?", 18, "5(4) − 2."),
  num("Read the histogram: find E(X).", 1.9, "0(0.1) + 1(0.3) + 2(0.2) + 3(0.4).", barsSvg([0.1, 0.3, 0.2, 0.4], { labels: [0, 1, 2, 3], histogram: true, top: ["0.1", "0.3", "0.2", "0.4"] }), 0.001),
  $("The spinner pays the amount shown on its sector. What is the expected payout?", 0.5 * 2 + 0.25 * 4 + 0.25 * 8, "1 + 1 + 2.", spinnerSvg([["$2", 0.5, "blue"], ["$4", 0.25, "green"], ["$8", 0.25, "amber"]], { r: 55 })),
  mc("A game has expected net gain 0. It is…", "fair", ["favourable to the player", "favourable to the organizer", "impossible"], "Definition."),
  mc("Expected value is best described as…", "the long-run average outcome", ["the most likely outcome", "the largest outcome", "the middle outcome"], "Average over many trials."),
  tf("The expected value must be one of the possible values of X.", false, "A die's is 3.5."),
  tf("If the expected net gain is negative, the player loses money on average.", true, "In the long run."),
  tf("E(X + c) = E(X) + c.", true, "Adding a constant shifts the mean."),
  ms("Which games are fair? Select all.", ["pay 1, win 2 on heads", "pay 1, win 6 on a die's 6", "pay 2, win 3 on heads", "pay 3, win 6 on heads", "pay 1, win 5 on a die's 6"], [0, 1, 3], "Fair when expected winnings = cost."),
  $("A raffle has 100 tickets and a 50-dollar prize. What is the expected winnings per ticket?", 0.5, "50/100."),
  num("A student's marks are weighted: test 60% (score 80) and project 40% (score 90). What is the weighted mean?", 84, "48 + 36."),
];

export const M = [
  $("A game costs 2 dollars. You roll a die and win 6 dollars on a 6, 3 dollars on a 5, nothing otherwise. Find the expected net gain.", 6 / 6 + 3 / 6 - 2, "1 + 0.5 − 2."),
  $("A raffle sells 250 tickets at 4 dollars for one 500-dollar prize. Find the expected net gain per ticket.", 500 / 250 - 4, "2 − 4."),
  $("An insurer charges 150 dollars per year. It pays 5000 dollars with probability 0.02. Find the insurer's expected profit per policy.", 150 - 100, "150 − 5000(0.02)."),
  num("X takes 2 and 6 with P(6) = p. E(X) = 3. Find p.", 0.25, "2 + 4p = 3.", null, 0.001),
  num("P(X = 0) = 0.4, P(X = 10) = 0.35, P(X = 20) = k. Find E(X).", 8.5, "k = 0.25; 3.5 + 5.", null, 0.001),
  num("Two coins are tossed; X = number of heads. Find E(X).", 1, "0(1/4) + 1(1/2) + 2(1/4)."),
  num("Two dice: X = the sum. Find E(X).", 7, "Symmetric about 7."),
  num("Two dice: X = the larger number. Find E(X). (2 decimals)", 161 / 36, "Σ k(2k − 1)/36.", null, 0.01),
  num("Use the table: find the expected number of TVs per household.", 1.9, "0(0.05) + 1(0.3) + 2(0.4) + 3(0.2) + 4(0.05) = 0.3 + 0.8 + 0.6 + 0.2.", tableSvg([["TVs", "0", "1", "2", "3", "4"], ["P", "0.05", "0.3", "0.4", "0.2", "0.05"]], { rowHead: true }), 0.001),
  $("A spinner pays 1 dollar (60%), 5 dollars (30%) or 20 dollars (10%). What price makes it fair?", 0.6 + 1.5 + 2, "Expected payout."),
  num("A game's winnings X have E(X) = 3. A new version pays 4X − 2. Find its expected payout.", 10, "4(3) − 2."),
  num("Every value of X is increased by 15%. E(X) was 40. Find the new E(X).", 46, "1.15 × 40."),
  mc("A carnival game costs 1 dollar; P(win 5 dollars) = 0.15. The game…", "favours the carnival", ["is fair", "favours the player", "has expected net gain 0"], "Expected winnings 5(0.15) = 0.75 < 1: net −0.25 per game."),
  mc("A die game pays the square of the number rolled. What is the expected payout?", "91/6", ["49/4", "21/6", "36"], "(1 + 4 + 9 + 16 + 25 + 36)/6."),
  tf("Doubling every prize in a game doubles the expected payout.", true, "E(2X) = 2E(X)."),
  tf("Adding a 1-dollar bonus to every prize increases the expected payout by more than 1 dollar.", false, "Exactly 1."),
  ms("X: 1 (0.2), 2 (0.5), 3 (0.3). Which are correct? Select all.", ["E(X) = 2.1", "E(X + 1) = 3.1", "E(3X) = 6.3", "E(X) = 2", "E(X − 2) = 0.1"], [0, 1, 2, 4], "E(X) = 0.2 + 1 + 0.9 = 2.1."),
  num("A store estimates daily sales of 0, 1, 2, 3 computers with probabilities 0.3, 0.4, 0.2, 0.1. How many are expected per 30-day month?", 33, "E = 1.1 per day × 30."),
  $("A lottery ticket costs 2 dollars: P(win 1000) = 0.0005, P(win 10) = 0.02. Find the expected net gain.", 0.5 + 0.2 - 2, "0.5 + 0.2 − 2."),
  num("Read the histogram of goals per game: find E(X).", 0 * 0.2 + 1 * 0.25 + 2 * 0.3 + 3 * 0.15 + 4 * 0.1, "0.25 + 0.6 + 0.45 + 0.4.", barsSvg([0.2, 0.25, 0.3, 0.15, 0.1], { labels: [0, 1, 2, 3, 4], histogram: true, top: ["0.2", "0.25", "0.3", "0.15", "0.1"] }), 0.001),
];
