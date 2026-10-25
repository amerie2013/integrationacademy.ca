// 2.6 Conditional Probability — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { p3 } from "./pk.mjs";
import { tableSvg, vennSvg, diceGridSvg, barsSvg } from "../../mdm4u/figs.mjs";
import { C } from "../../mdm4u/count.mjs";

const dice = (given, ev) => { let g = 0, b = 0; for (let a = 1; a <= 6; a++) for (let c = 1; c <= 6; c++) if (given(a, c)) { g++; if (ev(a, c)) b++; } return b / g; };
const coins = (n, given, ev) => { let g = 0, b = 0; for (let m = 0; m < 2 ** n; m++) { const x = [...m.toString(2).padStart(n, "0")].map(Number); if (given(x)) { g++; if (ev(x)) b++; } } return b / g; };

export const TOPIC = "2.6 Conditional Probability";
export const Q = [
  p3("A family has 3 children. Given that at least one is a girl, what is P(exactly two girls)?", coins(3, (x) => x.some((v) => v), (x) => x.filter((v) => v).length === 2), "3 of the 7 outcomes with a girl."),
  p3("Four coins are tossed. Given that at least two are heads, what is P(all four are heads)?", coins(4, (x) => x.filter((v) => v).length >= 2, (x) => x.every((v) => v)), "1 of 11."),
  p3("Two dice are rolled. Given that the two numbers are different, what is P(the larger is 6)?", dice((a, b) => a !== b, (a, b) => Math.max(a, b) === 6), "10 of 30."),
  p3("Two dice are rolled. Given that the product is even, what is P(the sum is even)?", dice((a, b) => (a * b) % 2 === 0, (a, b) => (a + b) % 2 === 0), "Both even: 9 of the 27 outcomes with an even product."),
  p3("Five cards are dealt. Given that the hand contains at least one ace, what is P(it contains at least two aces)?", (C(52, 5) - C(48, 5) - 4 * C(48, 4)) / (C(52, 5) - C(48, 5)), "P(≥ 2) ÷ P(≥ 1)."),
  p3("A committee of 3 is chosen from 4 women and 5 men. Given that at least one woman is chosen, what is P(all three are women)?", C(4, 3) / (C(9, 3) - C(5, 3)), "4 ÷ (84 − 10)."),
  num("P(A) = 0.5, P(B) = 0.3, P(A | B) = 0.6. Find P(B | A).", 0.36, "P(A ∩ B) = 0.18; ÷ 0.5.", null, 0.001),
  num("P(A) = 0.4, P(B) = 0.5, P(A | B) = 0.4. Find P(A ∪ B).", 0.7, "P(A ∩ B) = 0.2.", null, 0.001),
  num("P(A ∩ B) = 0.12, P(A | B) = 0.3, P(B | A) = 0.4. Find P(A ∪ B).", 0.4 + 0.3 - 0.12, "P(B) = 0.4, P(A) = 0.3.", null, 0.001),
  p3("Use the Venn diagram (counts of 90 students): given that a student takes French or Spanish, what is P(both)?", 12 / (30 + 12 + 21), "12 of the 63 inside the circles.", vennSvg({ A: "French", B: "Spanish", n: { a: 30, ab: 12, b: 21, out: 27 }, U: "90" })),
  p3("Use the table: given that a randomly chosen patient improved, what is P(they received the new treatment)?", 54 / (54 + 39), "54 ÷ 93.", tableSvg([["", "improved", "no change", "total"], ["new treatment", "54", "26", "80"], ["standard", "39", "41", "80"], ["total", "93", "67", "160"]], { rowHead: true })),
  p3("Use the same table: P(improved | new) − P(improved | standard)?", 54 / 80 - 39 / 80, "0.675 − 0.4875.", tableSvg([["", "improved", "no change", "total"], ["new treatment", "54", "26", "80"], ["standard", "39", "41", "80"], ["total", "93", "67", "160"]], { rowHead: true })),
  p3("Use the grid: two dice are rolled. Given the shaded event (sum is a multiple of 3), what is P(at least one die shows 3 or 6)?", dice((a, b) => (a + b) % 3 === 0, (a, b) => a % 3 === 0 || b % 3 === 0), "Within the 12 shaded cells, count those with a 3 or 6.", diceGridSvg((a, b) => (a + b) % 3 === 0)),
  p3("The bar chart shows the proportion of each grade that walks to school; grades are 30%, 25%, 25% and 20% of the school (Grades 9–12). Given that a student walks, what is P(Grade 9)?", (0.3 * 0.4) / (0.3 * 0.4 + 0.25 * 0.3 + 0.25 * 0.25 + 0.2 * 0.2), "P(G9 ∩ walk) ÷ P(walk).", barsSvg([0.4, 0.3, 0.25, 0.2], { labels: ["Gr 9", "Gr 10", "Gr 11", "Gr 12"], top: true, fmt: (v) => v.toFixed(2), ylabel: "P(walk | grade)" })),
  mc("Which is larger in most populations: P(over 2 m tall | NBA player) or P(NBA player | over 2 m tall)?", "P(over 2 m tall | NBA player)", ["P(NBA player | over 2 m tall)", "they are equal", "it cannot be compared"], "Most NBA players are very tall; few very tall people are NBA players."),
  ms("A and B are events with 0 < P(A), P(B) < 1. Which are always true? Select all.", ["P(A | B) + P(A′ | B) = 1", "P(A | B) + P(A | B′) = 1", "P(A ∩ B) = P(B)P(A | B)", "P(A | B) ≤ 1", "P(A | B) ≥ P(A)"], [0, 2, 3], "Given B, A and A′ split the reduced space."),
  tf("If P(A | B) > P(A), then P(B | A) > P(B).", true, "Both say P(A ∩ B) > P(A)P(B)."),
  tf("Two cards are drawn without replacement. P(2nd is red | 1st is red) equals P(1st is red | 2nd is red).", true, "By symmetry both are 25/51."),
  p3("Three cards are drawn without replacement. Given that the first two are hearts, what is P(the third is a heart)?", 11 / 50, "11 hearts in the remaining 50."),
  p3("A test question has 4 choices. 60% of students know the answer; the rest guess. Given a student answered correctly, what is P(they knew it)?", 0.6 / (0.6 + 0.4 * 0.25), "0.6 ÷ (0.6 + 0.1)."),
];
