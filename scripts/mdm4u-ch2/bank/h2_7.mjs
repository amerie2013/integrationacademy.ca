// 2.7 Tree Diagrams & Probability Tables — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3 } from "./pk.mjs";
import { treeSvg, tableSvg, barsSvg } from "../../mdm4u/figs.mjs";

const screen = (prev, sens, fp) => ({ pos: prev * sens + (1 - prev) * fp, ppv: (prev * sens) / (prev * sens + (1 - prev) * fp) });

export const TOPIC = "2.7 Tree Diagrams & Probability Tables";
export const Q = [
  p3("0.5% of a population has a condition. A test is positive for 99% of people with it and 2% of people without it. What is P(condition | positive)?", screen(0.005, 0.99, 0.02).ppv, "0.00495 ÷ (0.00495 + 0.0199)."),
  p3("Same test: what is P(no condition | negative)?", (0.995 * 0.98) / (0.995 * 0.98 + 0.005 * 0.01), "True negatives ÷ all negatives."),
  p3("In a best-of-five series, A wins each game with probability 0.55. What is P(A wins in exactly 4 games)?", 3 * 0.55 ** 3 * 0.45, "A wins 2 of the first 3, then game 4: 3 × 0.55³ × 0.45."),
  p3("In a best-of-five series, A wins each game with probability 0.55. What is P(the series goes to 5 games)?", 6 * 0.55 ** 2 * 0.45 ** 2, "2–2 after 4 games: 6 orders."),
  p3("Urn 1 has 2 red and 3 white; urn 2 has 4 red and 1 white. A coin chooses the urn and one ball is drawn. Given that it is red, what is P(urn 2)?", (0.5 * 0.8) / (0.5 * 0.4 + 0.5 * 0.8), "0.4 ÷ 0.6."),
  p3("A ball is moved from urn 1 (2 red, 3 white) into urn 2 (4 red, 1 white) at random; then a ball is drawn from urn 2. What is P(the drawn ball is red)?", 0.4 * (5 / 6) + 0.6 * (4 / 6), "Red moved: 5/6; white moved: 4/6."),
  p3("Players take turns rolling a die, A first; the first to roll a 6 wins. What is P(A wins within her first two turns)?", 1 / 6 + (5 / 6) ** 2 * (1 / 6), "6 on turn 1, or miss, miss, 6."),
  p3("A box has 3 good and 2 faulty bulbs. Bulbs are tested without replacement until both faulty ones are found. What is P(this takes exactly 4 tests)?", 3 * (2 / 5) * (3 / 4) * (2 / 3) * (1 / 2), "Exactly one faulty in the first 3 (3 positions), then the faulty one on test 4."),
  p3("Three machines make 45%, 35% and 20% of the parts with defect rates 2%, 3% and 6%. Given a defective part, what is P(machine 3)?", (0.2 * 0.06) / (0.45 * 0.02 + 0.35 * 0.03 + 0.2 * 0.06), "0.012 ÷ 0.0315."),
  p3("A multiple-choice question has 5 options. 70% of students know the answer; the others guess. Given a correct answer, what is P(the student guessed)?", (0.3 * 0.2) / (0.7 + 0.3 * 0.2), "0.06 ÷ 0.76."),
  p3("Use the tree: what is P(A | B′)?", (0.3 * 0.6) / (0.3 * 0.6 + 0.7 * 0.25), "0.18 ÷ (0.18 + 0.175).", treeSvg([{ t: "A", p: "0.3", c: [{ t: "B", p: "0.4" }, { t: "B′", p: "0.6" }] }, { t: "A′", p: "0.7", c: [{ t: "B", p: "0.75" }, { t: "B′", p: "0.25" }] }], { heads: ["1", "2"] })),
  num("Use the probability table: find the missing value x so that A and B are independent.", 0.12, "P(A)P(B) = 0.4 × 0.3.", tableSvg([["", "B", "B′", "total"], ["A", "x", "", "0.4"], ["A′", "", "", "0.6"], ["total", "0.3", "0.7", "1"]], { rowHead: true }), 0.001),
  p3("Use the bar chart (true and false positives of a screening program per 10 000 people): what is P(condition | positive)?", 95 / (95 + 495), "95 ÷ 590.", barsSvg([95, 495], { labels: ["true +", "false +"], top: true, ylabel: "people per 10 000" })),
  p3("Use the table built from a tree: given that a student passed, what is P(they attended the review)?", 0.36 / (0.36 + 0.28), "0.36 ÷ 0.64.", tableSvg([["", "pass", "fail", "total"], ["review", "0.36", "0.04", "0.4"], ["no review", "0.28", "0.32", "0.6"], ["total", "0.64", "0.36", "1"]], { rowHead: true })),
  mc("A rare disease (0.1%) has a test with 99% sensitivity and 1% false positives. Approximately what fraction of positive results are true positives?", "about 9%", ["about 99%", "about 50%", "about 1%"], "0.00099 ÷ (0.00099 + 0.00999) ≈ 0.09."),
  ms("For a two-stage tree with P(A) = 0.4, P(B | A) = 0.5, P(B | A′) = 0.25, which are correct? Select all.", ["P(B) = 0.35", "P(A | B) = 4/7", "P(A ∩ B′) = 0.2", "A and B are independent", "P(A′ ∩ B′) = 0.45"], [0, 1, 2, 4], "P(B) = 0.2 + 0.15; P(B | A) ≠ P(B)."),
  tf("If P(B | A) = P(B | A′), then A and B are independent.", true, "P(B) equals that common value, so P(B | A) = P(B)."),
  tf("A positive result from a 95%-accurate test always means at least a 95% chance of having the condition.", false, "It depends on how common the condition is."),
  p3("A gambler plays until he wins once or loses 3 times in a row; each game is won with probability 0.4. What is P(he loses 3 in a row before winning)?", 0.6 ** 3, "He stops at the first win; losing three straight means the first three games are losses."),
  p3("40% of a company's employees work remotely. Remote workers rate satisfaction 'high' 70% of the time; others 50%. What is P(high)?", 0.4 * 0.7 + 0.6 * 0.5, "0.28 + 0.3."),
];
