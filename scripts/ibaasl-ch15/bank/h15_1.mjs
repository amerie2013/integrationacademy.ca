// 15.1 The Assessment Criteria and Choosing a Topic — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { probDoc, binom } from "../figs15.mjs";

const S = String.raw;
const k10 = Array.from({ length: 11 }, (_, i) => i);

export const TOPIC = "15.1 The Assessment Criteria and Choosing a Topic";
export const Q = [
  num("The chart shows a draft's marks. If the student raises each criterion by 1 (without exceeding its maximum), what is the new total?", 16, "The draft totals 11; each of the five criteria rises by 1: 11 + 5.", probDoc(["A", "B", "C", "D", "E"], [3, 2, 1, 2, 3], { xlab: "criterion", ylab: "marks" })),
  num("A draft scores 12. The student can either gain 2 marks in E or 1 mark in each of A, C and D. What is the larger possible new total?", 15, "Option 2 gives 12 + 3."),
  num("Criterion E carries 30% of the exploration mark and the exploration 20% of the grade. What percentage of the final grade is criterion E?", 6, "0.3 × 20."),
  num("A student's marks are A 4, B 3, C 2, D 1, E 5. By how many marks does E exceed the combined C and D?", 2, "5 − 3."),
  num("Two drafts score 11 and 17. By what percentage did the score increase (1 d.p.)?", 54.5, "(17 − 11)/11 × 100.", null, 0.05),
  mc("A student studies free throws. Which question gives the richest SL mathematics?", "Does my free-throw success follow B(10, p), and how does p change after practice?", ["How many free throws did I make?", "Who is the best free-throw shooter ever?", "What is basketball?"], "Binomial modelling and comparison."),
  mc("A topic is 'the Fibonacci sequence in sunflowers'. The best way to strengthen personal engagement is to:", "count spirals on real sunflowers and test the claim", ["copy diagrams from a website", "list famous people who studied it", "explain the history of Fibonacci"], "Own data and own testing."),
  tf("A short exploration with correct mathematics but no reflection can still score 3 in criterion D.", false, "D needs reflection to score at all."),
  ms("A student models their savings with a geometric series. Which would raise criterion C? Select all.", ["using their own bank deposits as data", "asking their own 'what if' about changing rates", "testing the model against their real balance", "copying a textbook savings example"], [0, 1, 2], "Personal, independent choices."),
  num("The chart shows a student's free-throw data, modelled by B(10, 0.7). Find the model's probability of exactly 7 baskets (4 d.p.).", Math.round(binom(10, 0.7, 7) * 10000) / 10000, "C(10, 7)(0.7)⁷(0.3)³.", probDoc(k10, k10.map((x) => binom(10, 0.7, x)), { hi: [7], labels: false, xlab: "baskets in 10" }), 0.0001),
  num("For the B(10, 0.7) model, how many baskets per set are expected on average?", 7, "np."),
  num("A research question uses three techniques: regression (1 lesson), logarithms (2 lessons) and calculus (3 lessons). What fraction of these lessons is calculus (2 d.p.)?", 0.5, "3/6.", null, 0.01),
  mc("Which plan best balances the criteria?", "aim and context (A, C), developed mathematics with defined notation (B, E), reflection after each result (D)", ["pages of calculations only", "a long history section", "conclusions without working"], "Every criterion has a place."),
  num("A draft scores A 2, B 2, C 2, D 2, E 2. If E rises to 5 and nothing else changes, what is the total?", 13, "8 + 5."),
  tf("Two explorations on the same topic can score very differently.", true, "The criteria reward how the topic is handled."),
  num("The chart shows the time a student spent on each stage (weeks). What fraction of the time went on the mathematics (2 d.p.)?", 0.4, "4 of 10 weeks.", probDoc(["topic", "data", "maths", "draft", "revise"], [1, 2, 4, 2, 1], { xlab: "stage", ylab: "weeks" }), 0.01),
  num("A student plans 14 pages. If the mathematics should be at least 60% of the pages, what is the minimum number of mathematics pages (round up)?", 9, "0.6 × 14 = 8.4 → 9."),
  mc("A question about 'the mathematics of origami' could be narrowed to:", "which fold pattern gives the largest-volume box from a square sheet?", ["the history of origami", "origami in Japanese culture", "why origami is fun"], "Optimisation with calculus."),
  num("The chart shows max marks. What is the ratio of E's maximum to D's maximum?", 2, "6 : 3.", probDoc(["A", "B", "C", "D", "E"], [4, 4, 3, 3, 6], { xlab: "criterion", ylab: "max marks" })),
  num("A teacher's feedback raises a draft from 13 to 18. How many marks short of full marks is the new draft?", 2, "20 − 18."),
];
