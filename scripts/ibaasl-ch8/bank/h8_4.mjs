// 8.4 Tree Diagrams — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { treeDoc } from "../figs8.mjs";

const S = String.raw;

export const TOPIC = "8.4 Tree Diagrams";
export const Q = [
  num("A bag has n blue and 3 yellow balls. Two are taken without replacement and P(both yellow) = 1/12. Find n.", 6, S`$\frac{3\cdot2}{(n+3)(n+2)}=\frac{1}{12}\Rightarrow(n+3)(n+2)=72$.`),
  num("A bag has 5 green and n pink counters. Two are taken with replacement and P(both green) = 0.25. Find n.", 5, S`$\left(\frac{5}{5+n}\right)^2=0.25$.`),
  num("P(a component works) = 0.95, independently. How many components are needed so that P(at least one works) > 0.9999?", 4, "1 − 0.05ⁿ > 0.9999 ⇒ 0.05ⁿ < 0.0001; 0.05³ = 0.000125, 0.05⁴ = 0.00000625."),
  num("A and B play a game in which A wins each round with probability 0.6. The first to win two rounds wins the match. Find P(A wins the match).", 0.648, "AA + ABA + BAA = 0.36 + 2(0.6)(0.4)(0.6).", treeDoc([["A", "0.6"], ["B", "0.4"]], [[["A", "0.6"], ["B", "0.4"]], [["A", "0.6"], ["B", "0.4"]]], { highlight: ["00"] }), 0.001),
  num("A factory has machines X (60% of output) and Y (40%). 3% of X's items and 5% of Y's are defective. Find P(defective).", 0.038, "0.018 + 0.02.", treeDoc([["X", "0.6"], ["Y", "0.4"]], [[["D", "0.03"], ["D′", "0.97"]], [["D", "0.05"], ["D′", "0.95"]]], { highlight: ["00", "10"] }), 0.0001),
  num("For the factory (X 60%, 3% defective; Y 40%, 5% defective), find P(made by Y | defective) (3 d.p.).", 0.526, "0.02 ÷ 0.038.", null, 0.001),
  num("Three cards are drawn without replacement from a standard pack. Find P(all three are red) (3 d.p.).", 0.118, S`$\frac{26}{52}\cdot\frac{25}{51}\cdot\frac{24}{50}$.`, null, 0.001),
  num("A bag has 4 red, 3 blue and 2 green marbles. Two are taken without replacement. Find P(both the same colour) (3 d.p.).", 0.278, S`$\frac{12+6+2}{72}=\frac{20}{72}$.`, null, 0.001),
  mc("A bag has 4 red, 3 blue and 2 green marbles. Two are taken without replacement. Given they are the same colour, find P(both red).", S`$\frac35$`, [S`$\frac{12}{72}$`, S`$\frac{4}{9}$`, S`$\frac{3}{10}$`], "12 of the 20 same-colour ordered pairs."),
  num("P(it is windy) = 0.4. If windy, P(ferry sails) = 0.55; if not, 0.98. Given the ferry sailed, find P(it was windy) (3 d.p.).", 0.272, "0.22 ÷ (0.22 + 0.588).", treeDoc([["W", "0.4"], ["W′", "0.6"]], [[["S", "0.55"], ["S′", "0.45"]], [["S", "0.98"], ["S′", "0.02"]]], { highlight: ["00", "10"] }), 0.001),
  num("Ana and Ben take turns to throw a ball at a target, Ana first; Ana hits with probability 0.3 and Ben with 0.4. The first to hit wins. Find P(Ana wins on her second throw).", 0.126, "Miss, miss, hit: 0.7 × 0.6 × 0.3.", treeDoc([["hit", "0.3"], ["miss", "0.7"]], [[], [["hit", "0.4"], ["miss", "0.6"]]], { ends: false }), 0.001),
  num("In the same game (Ana 0.3, Ben 0.4, Ana first), find P(Ana wins), given that the game continues until someone hits (3 d.p.).", 0.517, "0.3 / (1 − 0.42) = 0.3/0.58 (geometric series).", null, 0.001),
  mc("A bag has 3 red and 2 white balls. Balls are taken one at a time without replacement until a white ball appears. Find P(exactly three draws are needed).", S`$\frac15$`, [S`$\frac{3}{10}$`, S`$\frac{1}{10}$`, S`$\frac{2}{5}$`], S`$\frac35\cdot\frac24\cdot\frac23$.`),
  tf("Drawing two balls without replacement gives the same P(both red) as drawing two at once.", true, "Taking two at once is the same as two draws without replacement."),
  num("A biased coin has P(H) = p. It is tossed twice and P(exactly one head) = 0.42. Find p, given p > 0.5.", 0.7, "2p(1 − p) = 0.42 ⇒ p² − p + 0.21 = 0 ⇒ p = 0.7 or 0.3.", null, 0.001),
  ms(S`A bag has 5 red and 5 blue balls; two are drawn without replacement. Which are true? Select all.`, [S`$P(RR)=\frac29$`, S`$P(\text{one of each})=\frac59$`, S`$P(R_2)=\frac12$`, S`$P(RR)=\frac14$`], [0, 1, 2], "With replacement P(RR) would be 1/4."),
  num("P(Tom passes his driving test at any attempt) = 0.6, independently. Find P(he passes within his first three attempts).", 0.936, "1 − 0.4³.", null, 0.001),
  num("A spinner lands on 1, 2 or 3 with probabilities 0.5, 0.3 and 0.2. It is spun twice. Find P(the total is 4).", 0.29, "(1,3), (3,1), (2,2): 0.1 + 0.1 + 0.09.", treeDoc([["1", "0.5"], ["2", "0.3"], ["3", "0.2"]], [[["1", "0.5"], ["2", "0.3"], ["3", "0.2"]], [["1", "0.5"], ["2", "0.3"], ["3", "0.2"]], [["1", "0.5"], ["2", "0.3"], ["3", "0.2"]]], { highlight: ["02", "11", "20"] }), 0.001),
  num("A survey shows 30% of students cycle. Of cyclists, 80% are on time; of the rest, 65% are on time. Find P(a late student cycles) (3 d.p.).", 0.197, "0.06 ÷ (0.06 + 0.245).", null, 0.001),
  mc("Two dice are rolled repeatedly until a double appears. Find P(the first double appears on the third roll).", S`$\frac{25}{216}$`, [S`$\frac{1}{216}$`, S`$\frac{5}{36}$`, S`$\frac{1}{18}$`], S`$\left(\frac56\right)^2\cdot\frac16$.`),
];
