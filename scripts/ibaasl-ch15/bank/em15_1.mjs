// 15.1 The Assessment Criteria and Choosing a Topic — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { probDoc } from "../figs15.mjs";

const S = String.raw;

export const E = [
  mc("How many assessment criteria is the exploration marked against?", "5", ["3", "4", "6"], "A to E."),
  mc("Criterion A assesses:", "presentation", ["use of mathematics", "reflection", "personal engagement"], "Organisation and coherence."),
  mc("Criterion E assesses:", "use of mathematics", ["presentation", "reflection", "mathematical communication"], "The mathematics itself."),
  mc("Which criterion rewards an original angle or your own data?", "C Personal engagement", ["A Presentation", "B Mathematical communication", "E Use of mathematics"], "Ownership of the work."),
  mc("Criterion D is worth:", "3 marks", ["4 marks", "6 marks", "2 marks"], "Reflection is out of 3."),
  num("What is the maximum mark for criterion B?", 4, "Mathematical communication."),
  num("What is the maximum mark for criterion E?", 6, "Use of mathematics."),
  num("What is the total of the maximum marks for criteria C and D?", 6, "3 + 3."),
  num("What is the maximum total mark for the exploration?", 20, "4 + 4 + 3 + 3 + 6."),
  num("What percentage of the final SL grade is the exploration worth?", 20, "Internal assessment weighting."),
  tf("The exploration should answer a question chosen by the student.", true, "It is an independent investigation."),
  tf("A summary of the history of a famous theorem makes a strong exploration.", false, "It is a report, with little personal engagement or use of mathematics."),
  tf("Criteria A–D together are worth more marks than criterion E.", true, "14 versus 6."),
  fill("The specific question an exploration answers is called the research ___.", ["question", "Question"], "Research question."),
  ms("Which are among the five criteria? Select all.", ["Presentation", "Reflection", "Creativity", "Personal engagement"], [0, 1, 3], "Creativity is not a criterion."),
  mc("The bar chart shows a draft's marks. Its total is:", "14", ["12", "15", "16"], "3 + 3 + 2 + 2 + 4.", probDoc(["A", "B", "C", "D", "E"], [3, 3, 2, 2, 4], { xlab: "criterion", ylab: "marks" })),
  mc("For the draft shown, which criterion has the most marks still available?", "E", ["A", "C", "D"], "E: 6 − 3 = 3.", probDoc(["A", "B", "C", "D", "E"], [4, 3, 2, 2, 3], { xlab: "criterion", ylab: "marks" })),
  num("A draft scores A 4, B 4, C 3, D 3, E 6. What is its total?", 20, "Full marks."),
  mc("Which is a research question rather than a broad topic?", "Does the decay of a bouncing ball's height fit a geometric sequence?", ["Sport", "Patterns in nature", "Mathematics and music"], "Specific and testable."),
  num("What is the recommended maximum length of the exploration in pages?", 20, "12–20 pages."),
];

export const M = [
  num("A draft scores A 3, B 2, C 2, D 2, E 3. Find the total.", 12, "Add the marks."),
  num("For a draft of A 3, B 2, C 2, D 2, E 3, how many marks are still available?", 8, "20 − 12."),
  num("Criterion E is what percentage of the exploration mark?", 30, "6/20."),
  num("Criteria A and B together are what percentage of the exploration mark?", 40, "8/20."),
  num("If the exploration is 20% of the final grade, what percentage of the final grade is criterion D?", 3, "3/20 of 20%."),
  num("A student gains 2 marks in C and 1 in D after revising a draft that scored 11. What is the new total?", 14, "11 + 3."),
  mc("Which topic is most suitable for an SL exploration?", "modelling the depth of water in a local harbour with a sinusoidal function", ["a proof of the four colour theorem", "the life of Gauss", "why maths matters"], "Focused, SL-level, own data possible."),
  mc("A student's question needs mathematics far beyond SL. The most likely effect is:", "low marks in E because understanding cannot be shown", ["high marks in C", "full marks in A", "no effect"], "E rewards understanding at SL level."),
  mc("Which feature most clearly shows personal engagement?", "collecting your own data to answer a question you chose", ["using a textbook example", "copying a published model", "using long words"], "Ownership."),
  tf("Choosing a question that is too broad usually makes the exploration harder to keep coherent.", true, "Criterion A suffers."),
  tf("Reflection should appear only in the final paragraph.", false, "It should appear throughout."),
  num("A draft scores 4 in A and B, 1 in C and D and 6 in E. Find the total.", 16, "4 + 4 + 1 + 1 + 6."),
  num("How many marks are available in total across criteria A, B and C?", 11, "4 + 4 + 3."),
  num("A draft gains 4 marks out of the 6 available in E. What fraction of E is that (as a decimal, 3 d.p.)?", 0.667, "4/6.", null, 0.001),
  ms("Which make a research question stronger? Select all.", ["it names the mathematics to be used", "it can be answered in 12–20 pages", "it relies on your own data or choices", "it covers as many topics as possible"], [0, 1, 2], "Breadth weakens focus."),
  mc("The chart compares two drafts. Draft 2 improved most in:", "D", ["A", "B", "E"], "D rose from 1 to 3.", probDoc(["A1", "A2", "D1", "D2", "E1", "E2"], [3, 3, 1, 3, 4, 5], { xlab: "criterion (draft)", ylab: "marks" })),
  mc("The chart shows maximum marks. The two criteria with equal maximums of 3 are:", "C and D", ["A and B", "D and E", "B and C"], "C and D are each out of 3.", probDoc(["A", "B", "C", "D", "E"], [4, 4, 3, 3, 6], { xlab: "criterion", ylab: "max marks" })),
  num("A school allows 10 weeks. A student spends 30% of the time choosing and researching a topic. How many weeks is that?", 3, "0.3 × 10."),
  num("An exploration of 16 pages spends 2 pages on the introduction and 2 on the conclusion. How many pages are left for the mathematics and reflection?", 12, "16 − 4."),
  num("A draft is 9 pages and should be at least 12. How many more pages are needed at minimum?", 3, "12 − 9."),
];
