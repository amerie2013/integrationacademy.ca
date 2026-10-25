// 2.7 Tree Diagrams & Probability Tables — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3 } from "./pk.mjs";
import { treeSvg, tableSvg } from "../../mdm4u/figs.mjs";

const tree = (p, q, r, names = ["A", "A′", "B", "B′"]) => treeSvg([
  { t: names[0], p: String(p), c: [{ t: names[2], p: String(q) }, { t: names[3], p: String(Math.round((1 - q) * 100) / 100) }] },
  { t: names[1], p: String(Math.round((1 - p) * 100) / 100), c: [{ t: names[2], p: String(r) }, { t: names[3], p: String(Math.round((1 - r) * 100) / 100) }] },
], { heads: ["stage 1", "stage 2"] });

export const E = [
  num("In a tree, P(A) = 0.6 and P(B | A) = 0.5. What is the probability of the path A then B?", 0.3, "Multiply.", null, 0.001),
  num("Branches leaving one point are 0.25, 0.35 and x. Find x.", 0.4, "They add to 1.", null, 0.001),
  num("The four end probabilities of a tree are 0.12, 0.28, 0.18 and x. Find x.", 0.42, "They add to 1.", null, 0.001),
  num("Use the tree: what is P(A and B)?", 0.6 * 0.3, "0.6 × 0.3.", tree(0.6, 0.3, 0.5)),
  num("Use the tree: what is P(B)?", 0.6 * 0.3 + 0.4 * 0.5, "Add both paths ending in B.", tree(0.6, 0.3, 0.5)),
  p3("A coin is tossed twice. Using a tree, what is P(exactly one head)?", 0.5, "HT + TH."),
  p3("A bag has 2 red and 3 green balls. Two are drawn with replacement. What is P(both green)?", 9 / 25, "3/5 × 3/5."),
  p3("A bag has 2 red and 3 green balls. Two are drawn without replacement. What is P(both green)?", (3 / 5) * (2 / 4), "3/5 × 2/4."),
  p3("A bag has 2 red and 3 green balls. Two are drawn without replacement. What is P(one of each)?", 2 * (2 / 5) * (3 / 4), "RG + GR."),
  num("In a probability table the row totals are 0.3 and x. Find x.", 0.7, "Row totals add to 1.", null, 0.001),
  num("Use the probability table: what is P(B)?", 0.15 + 0.35, "The column total.", tableSvg([["", "B", "B′", "total"], ["A", "0.15", "0.25", "0.4"], ["A′", "0.35", "0.25", "0.6"], ["total", "", "", "1"]], { rowHead: true })),
  mc("In a tree diagram, how do you find the probability of one complete path?", "multiply the branch probabilities along it", ["add the branch probabilities", "use the last branch only", "divide by the number of branches"], "Multiply along."),
  mc("How do you find the probability of an event made of several paths?", "add the path probabilities", ["multiply the path probabilities", "use the longest path", "count the paths"], "Add across."),
  tf("Second-stage branches can have different probabilities on different first-stage branches.", true, "They are conditional."),
  tf("The end probabilities of a complete tree add to 1.", true, "They cover every outcome."),
  ms("A die is rolled; if it shows 6 a coin is tossed, otherwise not. Which are outcomes? Select all.", ["6 then H", "6 then T", "1", "1 then H", "5"], [0, 1, 2, 4], "Only a 6 leads to a coin."),
  p3("Rain has probability 0.2. A bus is late with probability 0.5 in rain and 0.1 otherwise. What is P(rain and late)?", 0.2 * 0.5, "0.2 × 0.5."),
  p3("Rain has probability 0.2. A bus is late with probability 0.5 in rain and 0.1 otherwise. What is P(late)?", 0.2 * 0.5 + 0.8 * 0.1, "0.1 + 0.08."),
  p3("Three coins are tossed. Using a tree, what is P(HTH)?", 1 / 8, "(1/2)³."),
  p3("A spinner (P(red) = 0.4) is spun twice. What is P(red then not red)?", 0.4 * 0.6, "0.4 × 0.6."),
];

export const M = [
  p3("Use the tree: what is P(A | B)?", (0.6 * 0.3) / (0.6 * 0.3 + 0.4 * 0.5), "0.18 ÷ 0.38.", tree(0.6, 0.3, 0.5)),
  p3("Use the tree: what is P(A′ | B′)?", (0.4 * 0.5) / (0.6 * 0.7 + 0.4 * 0.5), "0.2 ÷ 0.62.", tree(0.6, 0.3, 0.5)),
  p3("Factory X makes 70% of a product with 4% defective; factory Y makes 30% with 2% defective. What is P(defective)?", 0.7 * 0.04 + 0.3 * 0.02, "0.028 + 0.006."),
  p3("Same factories: given a defective item, what is P(it came from X)?", 0.028 / 0.034, "0.028 ÷ 0.034."),
  p3("A bag has 5 red and 3 blue marbles. Three are drawn without replacement. What is P(all red)?", (5 / 8) * (4 / 7) * (3 / 6), "5/8 × 4/7 × 3/6."),
  p3("A bag has 5 red and 3 blue marbles. Three are drawn without replacement. What is P(exactly one blue)?", 3 * (3 / 8) * (5 / 7) * (4 / 6), "Three positions for the blue."),
  p3("A team wins 60% of home games and 40% of away games; half its games are at home. What is P(win)?", 0.5 * 0.6 + 0.5 * 0.4, "0.3 + 0.2."),
  p3("A team wins 75% of games when its star plays (80% of games) and 40% otherwise. Given that it won, what is P(the star played)?", (0.8 * 0.75) / (0.8 * 0.75 + 0.2 * 0.4), "0.6 ÷ 0.68."),
  num("Use the probability table: what is P(A | B′)?", 0.25 / 0.5, "0.25 ÷ 0.5.", tableSvg([["", "B", "B′", "total"], ["A", "0.15", "0.25", "0.4"], ["A′", "0.35", "0.25", "0.6"], ["total", "0.5", "0.5", "1"]], { rowHead: true }), 0.001),
  num("A probability table has P(A ∩ B) = 0.1, P(A) = 0.4 and P(B) = 0.3. What is P(A′ ∩ B′)?", 0.4, "1 − (0.4 + 0.3 − 0.1).", null, 0.001),
  p3("A player wins each game with probability 0.6 (independent). In a best-of-three match, what is P(she wins 2–0)?", 0.36, "0.6²."),
  p3("A player wins each game with probability 0.6. In a best-of-three match, what is P(she wins the match)?", 0.36 + 2 * 0.6 * 0.4 * 0.6, "2–0 or 2–1."),
  mc("A test is positive for 90% of people with a condition and 5% of people without it. 10% of people have the condition. Which is P(positive)?", "0.135", ["0.9", "0.095", "0.14"], "0.09 + 0.045."),
  mc("For the same test, which is P(condition | positive)?", "about 0.667", ["0.9", "about 0.1", "about 0.95"], "0.09 ÷ 0.135."),
  tf("In a reversed tree problem, P(first stage | second stage) = path probability ÷ total probability of the second-stage result.", true, "Definition of conditional probability."),
  tf("A tree for drawing 2 cards without replacement has the same second-stage probabilities on every branch.", false, "They depend on the first card."),
  ms("A bag has 3 red and 2 blue balls; two are drawn without replacement. Which are correct? Select all.", ["P(RR) = 0.3", "P(BB) = 0.1", "P(RB) = 0.3", "P(same colour) = 0.4", "P(at least one blue) = 0.6"], [0, 1, 2, 3], "RR 3/5 × 2/4 = 0.3; BB 2/5 × 1/4 = 0.1; RB 3/5 × 2/4 = 0.3; same 0.4; at least one blue is 1 − 0.3 = 0.7, not 0.6."),
  p3("A coin is tossed; heads → roll a die, tails → toss the coin again. What is P(a 6 or a second tail)?", 0.5 * (1 / 6) + 0.5 * 0.5, "1/12 + 1/4."),
  num("Use the tree: what is P(exactly one of A, B)? (A and B as labelled)", 0.6 * 0.7 + 0.4 * 0.5, "A then B′, or A′ then B.", tree(0.6, 0.3, 0.5), 0.001),
  p3("Of commuters, 50% drive, 30% take transit, 20% cycle. Late rates: 10%, 20%, 5%. What is P(late)?", 0.05 + 0.06 + 0.01, "Add the three paths."),
];
