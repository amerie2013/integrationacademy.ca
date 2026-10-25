// 2.1 Introduction to Probability — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3, mcf } from "./pk.mjs";
import { diceGridSvg, spinnerSvg, barsSvg, treeSvg, fullTree } from "../../mdm4u/figs.mjs";

const dice = (pred) => { let c = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (pred(a, b)) c++; return c; };

export const E = [
  mcf("A fair die is rolled. What is P(rolling a 4)?", [1, 6], [[1, 4], [4, 6], [1, 5]], "One of six outcomes."),
  mcf("A fair die is rolled. What is P(an odd number)?", [1, 2], [[1, 3], [2, 3], [1, 6]], "{1, 3, 5}."),
  mcf("A card is drawn from a standard deck. What is P(a queen)?", [1, 13], [[1, 4], [1, 52], [4, 13]], "4 queens."),
  mcf("A card is drawn. What is P(a black card)?", [1, 2], [[1, 4], [1, 3], [2, 13]], "26 black cards."),
  mcf("Two coins are tossed. What is P(two heads)?", [1, 4], [[1, 2], [1, 3], [2, 3]], "HH is one of HH, HT, TH, TT."),
  num("How many outcomes are in the sample space when two dice are rolled?", 36, "6 × 6."),
  num("How many outcomes are in the sample space when three coins are tossed?", 8, "2³."),
  num("P(A) = 0.62. What is P(A′)?", 0.38, "1 − 0.62.", null, 0.001),
  num("A spinner has P(red) = 0.25 and P(blue) = 0.4; green is the only other colour. What is P(green)?", 0.35, "1 − 0.25 − 0.4.", null, 0.001),
  p3("A letter is chosen at random from the word CANADA. What is P(A)?", 3 / 6, "3 A's in 6 letters."),
  p3("Use the grid: what is P(the sum of two dice is 9)?", 4 / 36, "Count the shaded cells.", diceGridSvg((a, b) => a + b === 9)),
  p3("The spinner shown is spun. What is P(red)?", 1 / 4, "The red sector is a quarter of the circle.", spinnerSvg([["red", 0.25, "red"], ["blue", 0.75, "blue"]], { r: 60 })),
  mc("Which value cannot be a probability?", "1.2", ["0", "0.5", "1"], "Probabilities are between 0 and 1."),
  mc("What is the probability of an impossible event?", "0", ["1", "0.5", "−1"], "Impossible = 0."),
  tf("The probabilities of all outcomes of an experiment add to 1.", true, "Exactly one outcome happens."),
  tf("The time it takes to run a race is a discrete outcome.", false, "Time is measured: continuous."),
  tf("When two dice are rolled, a sum of 2 and a sum of 7 are equally likely.", false, "1 way vs 6 ways."),
  ms("Which sample spaces are discrete? Select all.", ["number of heads in 4 tosses", "mass of a newborn", "card drawn from a deck", "number of goals in a game", "time to finish a test"], [0, 2, 3], "Counted, not measured."),
  num("A bag has 3 red, 4 blue and 5 green marbles. How many outcomes are in the sample space for drawing one marble?", 12, "3 + 4 + 5."),
  p3("A bag has 3 red, 4 blue and 5 green marbles. What is P(blue)?", 4 / 12, "4 of 12."),
];

export const M = [
  p3("Two dice are rolled. What is P(a sum of 6)?", 5 / 36, "(1,5), (2,4), (3,3), (4,2), (5,1)."),
  p3("Two dice are rolled. What is P(a sum greater than 9)?", dice((a, b) => a + b > 9) / 36, "Sums 10, 11, 12: 3 + 2 + 1."),
  p3("Two dice are rolled. What is P(doubles)?", 6 / 36, "6 doubles."),
  p3("Two dice are rolled. What is P(the product is odd)?", 9 / 36, "Both dice odd: 3 × 3."),
  p3("Three coins are tossed. What is P(exactly two heads)?", 3 / 8, "HHT, HTH, THH."),
  p3("Three coins are tossed. What is P(at least one tail)?", 7 / 8, "1 − P(HHH)."),
  p3("A card is drawn. What is P(a red face card)?", 6 / 52, "J, Q, K of hearts and diamonds."),
  p3("A card is drawn. What is P(not a spade and not a face card)?", 30 / 52, "Non-spades 39, minus the 9 non-spade face cards."),
  p3("A letter is chosen at random from MISSISSAUGA. What is P(S)?", 4 / 11, "S appears 4 times in 11 letters."),
  num("A biased coin has P(heads) = 2 × P(tails). What is P(heads)? (3 decimals)", 0.667, "2t + t = 1.", null, 0.0015),
  num("A spinner has sectors A, B, C with P(A) = 0.5 and P(B) = P(C). What is P(B)?", 0.25, "2P(B) = 0.5.", null, 0.001),
  p3("Use the bar chart of the sum of two dice: what is P(sum = 5 or sum = 9)?", 8 / 36, "4/36 + 4/36.", barsSvg([1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1].map((k) => k / 36), { labels: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], histogram: true, fmt: (v) => v.toFixed(2), xlabel: "sum", ylabel: "probability" })),
  p3("Use the tree diagram: a coin is tossed and a 3-section spinner (1, 2, 3, equal) is spun. What is P(heads and an odd number)?", 2 / 6, "H1 and H3: 2 of 6.", treeSvg(fullTree([["H", "T"], ["1", "2", "3"]]), { heads: ["coin", "spinner"] })),
  mc("Which event has probability 1/2 when a die is rolled?", "a number greater than 3", ["a 6", "a number less than 3", "a multiple of 3"], "{4, 5, 6}."),
  mc("Two dice are rolled. Which sum is most likely?", "7", ["6", "12", "2"], "Six ways."),
  tf("A spinner with labels 1, 2, 3 always gives P(1) = 1/3.", false, "Only if the sectors are equal."),
  tf("If P(A) = 0.3, then P(A′) = 0.7.", true, "Complement."),
  ms("Two dice are rolled. Which events have probability 1/6? Select all.", ["sum of 7", "doubles", "first die shows 4", "sum of 6", "both dice even"], [0, 1, 2], "Sum 6: 5/36; both even: 9/36."),
  num("A die is rolled 300 times. How many 5s would you expect in theory?", 50, "300 × 1/6."),
  p3("A number is chosen at random from 1 to 30. What is P(it is a multiple of 4)?", 7 / 30, "4, 8, …, 28: 7 numbers."),
];
