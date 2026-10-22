// 8.4 Tree Diagrams — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { treeDoc } from "../figs8.mjs";

const S = String.raw;
const T = (p, q) => treeDoc([["A", p], ["A′", q]], [[["B", "0.4"], ["B′", "0.6"]], [["B", "0.7"], ["B′", "0.3"]]]);

export const E = [
  mc("On a tree diagram, to find the probability of a path you:", "multiply the probabilities along it", ["add the probabilities along it", "subtract them", "take the largest"], "And → multiply."),
  mc("To combine the probabilities of two different paths you:", "add them", ["multiply them", "divide them", "subtract them"], "Or → add."),
  mc("The probabilities on branches leaving one point must:", "add to 1", ["multiply to 1", "be equal", "add to 0.5"], "One of them must happen."),
  num("A first-stage branch has probability 0.45. What is the probability on the other branch?", 0.55, "1 − 0.45.", null, 0.001),
  num("A coin is biased with P(H) = 0.8. It is tossed twice. Find P(HH).", 0.64, "0.8 × 0.8.", null, 0.001),
  num("For the same coin (P(H) = 0.8), find P(TT).", 0.04, "0.2 × 0.2.", null, 0.001),
  num("Using the tree diagram, find P(A and B).", 0.2, "0.5 × 0.4.", T("0.5", "0.5"), 0.001),
  num("Using the same tree (P(A) = 0.5), find P(A′ and B).", 0.35, "0.5 × 0.7.", null, 0.001),
  num("Using the same tree (P(A) = 0.5), find P(B).", 0.55, "0.2 + 0.35.", null, 0.001),
  tf("When objects are taken without replacement, the second-stage probabilities change.", true, "There is one fewer object."),
  fill("Taking an object and putting it back before the next draw is called sampling ___ replacement.", ["with", "With"], "With replacement: probabilities stay the same."),
  mc("A bag has 3 green and 7 yellow balls. One is taken and replaced, then another taken. Find P(both green).", S`$\frac{9}{100}$`, [S`$\frac{6}{90}$`, S`$\frac{3}{10}$`, S`$\frac{6}{100}$`], S`$\frac{3}{10}\times\frac{3}{10}$.`),
  mc("A bag has 3 green and 7 yellow balls. Two are taken without replacement. Find P(both green).", S`$\frac{6}{90}$`, [S`$\frac{9}{100}$`, S`$\frac{3}{10}$`, S`$\frac{9}{90}$`], S`$\frac{3}{10}\times\frac29$.`, treeDoc([["G", "3/10"], ["Y", "7/10"]], [[["G", "2/9"], ["Y", "7/9"]], [["G", "3/9"], ["Y", "6/9"]]], { highlight: ["00"] })),
  num("A fair coin is tossed three times. Find P(three heads).", 0.125, S`$\left(\frac12\right)^3$.`, null, 0.001),
  num("P(Lena wins a game) = 0.6, independently each game. Find P(she wins both of two games).", 0.36, "0.6².", null, 0.001),
  num("P(a light is red when Jo arrives) = 0.4, independently on two days. Find P(red on neither day).", 0.36, "0.6 × 0.6.", null, 0.001),
  mc("How many end points does a tree diagram for tossing a coin three times have?", "8", ["6", "3", "9"], "2 × 2 × 2."),
  mc("A spinner shows A with probability 0.3 and B otherwise. It is spun twice. Which branch probability is missing?", "0.7", ["0.3", "0.09", "0.21"], "Each pair sums to 1.", treeDoc([["A", "0.3"], ["B", "?"]], [[["A", "0.3"], ["B", "0.7"]], [["A", "0.3"], ["B", "0.7"]]], { ends: false })),
  num("The spinner (P(A) = 0.3) is spun twice. Find P(one A and one B).", 0.42, "AB + BA = 2 × 0.3 × 0.7.", null, 0.001),
  num(S`"At least one" can be found as 1 − P(none). If P(none) = 0.216, find P(at least one).`, 0.784, "1 − 0.216.", null, 0.001),
];

export const M = [
  num("A bag has 6 red and 4 white counters. Two are taken without replacement. Find P(one of each colour) (3 d.p.).", 0.533, S`$2\times\frac{6}{10}\times\frac49=\frac{48}{90}$.`, null, 0.001),
  num("For the same bag (6 red, 4 white, without replacement), find P(both the same colour) (3 d.p.).", 0.467, S`$\frac{30}{90}+\frac{12}{90}$.`, null, 0.001),
  mc("A bag has 2 orange and 5 black sweets. Two are eaten. Find P(at least one orange).", S`$\frac{11}{21}$`, [S`$\frac{10}{21}$`, S`$\frac{4}{7}$`, S`$\frac{2}{21}$`], S`$1-\frac57\cdot\frac46=1-\frac{20}{42}$.`, treeDoc([["O", "2/7"], ["K", "5/7"]], [[["O", "1/6"], ["K", "5/6"]], [["O", "2/6"], ["K", "4/6"]]], { highlight: ["11"] })),
  num("P(a team wins at home) = 0.65 and P(wins away) = 0.4, independently. Find P(it wins exactly one of a home and an away game).", 0.53, "0.65 × 0.6 + 0.35 × 0.4.", null, 0.001),
  num("P(Kai catches the early bus) = 0.75. If he catches it, P(on time) = 0.95; otherwise 0.6. Find P(on time).", 0.8625, "0.7125 + 0.15.", treeDoc([["E", "0.75"], ["E′", "0.25"]], [[["T", "0.95"], ["T′", "0.05"]], [["T", "0.6"], ["T′", "0.4"]]], { highlight: ["00", "10"] }), 0.0001),
  num("For Kai (early bus 0.75; on time 0.95 or 0.6), find P(early bus | on time) (3 d.p.).", 0.826, "0.7125 ÷ 0.8625.", null, 0.001),
  num("A fair die is rolled three times. Find P(no sixes) (3 d.p.).", 0.579, S`$\left(\frac56\right)^3=\frac{125}{216}$.`, null, 0.001),
  num("A fair die is rolled three times. Find P(at least one six) (3 d.p.).", 0.421, S`$1-\frac{125}{216}$.`, null, 0.001),
  mc("Two cards are drawn without replacement from a standard pack. Find P(both are hearts).", S`$\frac{1}{17}$`, [S`$\frac{1}{16}$`, S`$\frac{1}{4}$`, S`$\frac{3}{52}$`], S`$\frac{13}{52}\times\frac{12}{51}$.`),
  num("A basketball player scores a free throw with probability 0.85, independently. Find P(she scores at least one of two).", 0.9775, "1 − 0.15².", null, 0.0001),
  mc("Using the tree diagram, find P(A′ ∩ B′).", "0.09", ["0.3", "0.21", "0.12"], "0.3 × 0.3.", T("0.7", "0.3")),
  mc("Using the same tree (P(A) = 0.7), find P(A | B).", S`$\frac{0.28}{0.49}=\frac47$`, [S`$0.28$`, S`$\frac{0.21}{0.49}$`, S`$0.4$`], "P(B) = 0.28 + 0.21 = 0.49."),
  num("A box has 5 good and 3 faulty fuses. Two are tested without replacement. Find P(the second is faulty) (3 d.p.).", 0.375, S`$\frac58\cdot\frac37+\frac38\cdot\frac27=\frac{21}{56}$.`, null, 0.001),
  tf("Without replacement, P(second is faulty) equals P(first is faulty).", true, "By symmetry both are 3/8 for the fuse box."),
  num("A spinner lands on 1 with probability 0.25. It is spun until it shows 1, at most three times. Find P(it shows 1 within three spins) (4 d.p.).", 0.5781, "1 − 0.75³ = 1 − 0.421875.", null, 0.0001),
  mc("In a three-stage tree for tossing a fair coin, P(exactly one head) is:", S`$\frac38$`, [S`$\frac18$`, S`$\frac12$`, S`$\frac14$`], "HTT, THT, TTH."),
  num("P(Mia passes the theory test) = 0.8; if she passes, P(passes the practical) = 0.7. Find P(passes both).", 0.56, "0.8 × 0.7.", null, 0.001),
  num("A bag has 3 red, 2 blue and 5 white beads. Two are taken with replacement. Find P(both the same colour).", 0.38, "0.09 + 0.04 + 0.25.", null, 0.001),
  ms("Which are correct about a tree diagram for two events? Select all.", ["second-stage branches can show conditional probabilities", "all end-point probabilities add to 1", "branches from one point add to 1", "you add along a path"], [0, 1, 2], "Multiply along a path."),
  mc("Without replacement from 4 red and 4 blue counters, P(RR) is:", S`$\frac{3}{14}$`, [S`$\frac14$`, S`$\frac{1}{7}$`, S`$\frac{2}{7}$`], S`$\frac48\times\frac37=\frac{12}{56}$.`),
];
