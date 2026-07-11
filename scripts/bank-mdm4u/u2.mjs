// MDM4U Unit 2 — Probability: question bank.
// 60 per topic: 20 easy / 20 medium / 20 hard (hard = genuinely hard, in scope).
// Fractions via multiple_choice / fill_blank; numeric only for counts / clean decimals.
import { mc, ms, tf, num, fill } from "./helpers.mjs";

// ── 2.1 Introduction to Probability ──────────────────────────
function g21() {
  const q = [];
  // EASY
  q.push(mc("easy", "A fair coin is flipped. $P(\\text{head})=$", ["$\\tfrac12$", "$1$", "$0$", "$\\tfrac14$"], 0));
  q.push(mc("easy", "A die is rolled. $P(\\text{a }3)=$", ["$\\tfrac16$", "$\\tfrac13$", "$\\tfrac12$", "$3$"], 0));
  q.push(mc("easy", "One card is drawn. $P(\\text{red})=$", ["$\\tfrac12$", "$\\tfrac14$", "$\\tfrac{1}{13}$", "$\\tfrac{1}{26}$"], 0));
  q.push(mc("easy", "A die is rolled. $P(\\text{even})=$", ["$\\tfrac12$", "$\\tfrac13$", "$\\tfrac16$", "$\\tfrac23$"], 0));
  q.push(mc("easy", "A bag has 3 red and 2 blue. $P(\\text{red})=$", ["$\\tfrac35$", "$\\tfrac25$", "$\\tfrac13$", "$\\tfrac12$"], 0));
  q.push(mc("easy", "Which is a valid probability?", ["$0.7$", "$-0.2$", "$1.4$", "$2$"], 0));
  q.push(mc("easy", "One card is drawn. $P(\\text{a face card})=$", ["$\\tfrac{3}{13}$", "$\\tfrac{1}{13}$", "$\\tfrac14$", "$\\tfrac{4}{13}$"], 0));
  q.push(mc("easy", "A die is rolled. $P(\\text{not a }6)=$", ["$\\tfrac56$", "$\\tfrac16$", "$\\tfrac12$", "$0$"], 0));
  q.push(ms("easy", "Which are valid probabilities?", ["$0$", "$\\tfrac34$", "$1$", "$1.2$"], [0, 1, 2]));
  q.push(ms("easy", "Which events are certain ($P=1$)?", ["rolling $\\le6$ on a die", "a coin lands H or T", "rolling a $7$ on a die", "drawing the number $13$ card of hearts... no"], [0, 1]));
  q.push(tf("easy", "A probability is always between $0$ and $1$.", true));
  q.push(tf("easy", "$P(\\text{impossible event})=0$.", true));
  q.push(tf("easy", "$P(\\text{certain event})=1$.", true));
  q.push(tf("easy", "$P(A)+P(\\text{not }A)=1$.", true));
  q.push(num("easy", "How many equally likely outcomes for one die?", 6, 0));
  q.push(num("easy", "How many outcomes when two dice are rolled?", 36, 0));
  q.push(num("easy", "$P(\\text{heads})$ as a percent (e.g. type $50$)?", 50, 0));
  q.push(fill("easy", "$P(\\text{rolling a }4)$ on a die $=$ ___ (a fraction).", ["1/6"]));
  q.push(fill("easy", "$P(\\text{a spade})$ from a deck $=$ ___.", ["1/4", "13/52"]));
  q.push(fill("easy", "$P(\\text{tails on a fair coin})=$ ___.", ["1/2", "0.5"]));
  // MEDIUM
  q.push(mc("medium", "Two dice. $P(\\text{sum}=7)=$", ["$\\tfrac16$", "$\\tfrac{1}{12}$", "$\\tfrac{7}{36}$", "$\\tfrac19$"], 0));
  q.push(mc("medium", "Two dice. $P(\\text{sum}=8)=$", ["$\\tfrac{5}{36}$", "$\\tfrac16$", "$\\tfrac18$", "$\\tfrac19$"], 0));
  q.push(mc("medium", "Two dice. $P(\\text{a double})=$", ["$\\tfrac16$", "$\\tfrac{1}{36}$", "$\\tfrac{1}{12}$", "$\\tfrac13$"], 0));
  q.push(mc("medium", "A spinner has 8 equal sectors, 3 marked win. $P(\\text{win})=$", ["$\\tfrac38$", "$\\tfrac58$", "$\\tfrac13$", "$\\tfrac18$"], 0));
  q.push(mc("medium", "$P(\\text{a heart or the ace of spades})=$", ["$\\tfrac{7}{26}$", "$\\tfrac14$", "$\\tfrac{1}{13}$", "$\\tfrac{1}{4}$"], 0));
  q.push(mc("medium", "Classify: a forecaster's 70\\% chance of rain.", ["subjective", "theoretical", "experimental", "impossible"], 0));
  q.push(mc("medium", "45 heads occur in 100 flips. Experimental $P(\\text{head})=$", ["$0.45$", "$0.5$", "$45$", "$0.55$"], 0));
  q.push(mc("medium", "Three coins. $P(\\text{exactly 2 heads})=$", ["$\\tfrac38$", "$\\tfrac14$", "$\\tfrac12$", "$\\tfrac18$"], 0));
  q.push(mc("medium", "Three coins. $P(\\text{all heads})=$", ["$\\tfrac18$", "$\\tfrac14$", "$\\tfrac38$", "$\\tfrac12$"], 0));
  q.push(ms("medium", "Which equal $P(\\text{sum}=7)$ with two dice?", ["$\\tfrac{6}{36}$", "$\\tfrac16$", "$6$ of $36$ outcomes", "$\\tfrac{7}{36}$"], [0, 1, 2]));
  q.push(ms("medium", "Which are theoretical probabilities?", ["$P(\\text{ace})=\\tfrac{1}{13}$", "counting equally likely outcomes", "a 70\\% opinion of rain", "measuring 45 of 100 flips"], [0, 1]));
  q.push(tf("medium", "Two dice have 36 equally likely outcomes.", true));
  q.push(tf("medium", "With two dice, $P(\\text{sum}=2)=P(\\text{sum}=12)$.", true));
  q.push(tf("medium", "With two dice, a sum of $7$ is the most likely.", true));
  q.push(num("medium", "How many of 36 two-dice outcomes give a sum of $5$?", 4, 0));
  q.push(num("medium", "How many two-dice outcomes give a sum of $7$?", 6, 0));
  q.push(num("medium", "Experimental probability as a percent: 63 of 150 trials (nearest whole)?", 42, 0));
  q.push(fill("medium", "$P(\\text{sum}=6$ with two dice$)=$ ___.", ["5/36"]));
  q.push(fill("medium", "$P(\\text{a red king})=$ ___.", ["2/52", "1/26"]));
  q.push(fill("medium", "$P(\\text{at least one head in 2 coins})=$ ___.", ["3/4", "0.75"]));
  // HARD
  q.push(mc("hard", "Three coins. $P(\\text{at least one head})=$", ["$\\tfrac78$", "$\\tfrac18$", "$\\tfrac38$", "$\\tfrac34$"], 0));
  q.push(mc("hard", "Two dice. $P(\\text{sum is a multiple of }3)=$", ["$\\tfrac13$", "$\\tfrac14$", "$\\tfrac{5}{12}$", "$\\tfrac16$"], 0));
  q.push(mc("hard", "Two dice. $P(\\text{sum}\\ge10)=$", ["$\\tfrac16$", "$\\tfrac14$", "$\\tfrac{1}{12}$", "$\\tfrac{5}{36}$"], 0));
  q.push(mc("hard", "Two dice. $P(\\text{product is even})=$", ["$\\tfrac34$", "$\\tfrac12$", "$\\tfrac14$", "$\\tfrac23$"], 0));
  q.push(mc("hard", "Three dice. $P(\\text{all different})=$", ["$\\tfrac59$", "$\\tfrac12$", "$\\tfrac23$", "$\\tfrac16$"], 0));
  q.push(mc("hard", "Two dice. $P(\\text{at least one }6)=$", ["$\\tfrac{11}{36}$", "$\\tfrac16$", "$\\tfrac13$", "$\\tfrac{1}{6}$"], 0));
  q.push(mc("hard", "Four coins. $P(\\text{exactly 2 heads})=$", ["$\\tfrac38$", "$\\tfrac14$", "$\\tfrac12$", "$\\tfrac{1}{16}$"], 0));
  q.push(mc("hard", "A number is chosen from $1$--$20$. $P(\\text{prime})=$", ["$\\tfrac25$", "$\\tfrac12$", "$\\tfrac{3}{10}$", "$\\tfrac{7}{20}$"], 0));
  q.push(mc("hard", "Three coins. $P(\\text{more heads than tails})=$", ["$\\tfrac12$", "$\\tfrac38$", "$\\tfrac14$", "$\\tfrac78$"], 0));
  q.push(mc("hard", "Two dice. $P(\\text{sum}=7\\text{ or }11)=$", ["$\\tfrac29$", "$\\tfrac16$", "$\\tfrac14$", "$\\tfrac19$"], 0));
  q.push(ms("hard", "Which equal $P(\\text{sum}\\ge10)$ with two dice?", ["$\\tfrac16$", "$\\tfrac{6}{36}$", "$6$ favourable of $36$", "$\\tfrac{5}{36}$"], [0, 1, 2]));
  q.push(tf("hard", "For three dice, $P(\\text{all different})=\\tfrac59$.", true));
  q.push(tf("hard", "$P(\\text{product of two dice is even})=\\tfrac34$.", true));
  q.push(num("hard", "How many of the 36 two-dice outcomes have a sum that is a multiple of $3$?", 12, 0));
  q.push(num("hard", "How many of the 36 outcomes have at least one $6$?", 11, 0));
  q.push(num("hard", "Three dice: how many of 216 outcomes are all different?", 120, 0));
  q.push(num("hard", "From $1$--$20$, how many numbers are prime?", 8, 0));
  q.push(fill("hard", "$P(\\text{sum}\\ge10$ with two dice$)=$ ___.", ["1/6", "6/36"]));
  q.push(fill("hard", "$P(\\text{product of two dice is odd})=$ ___.", ["1/4"]));
  q.push(fill("hard", "$P(\\text{a number from }1\\text{--}20\\text{ is a multiple of }3)=$ ___.", ["3/10", "6/20"]));
  return q;
}

// ── 2.2 Counting & Probability ───────────────────────────────
function g22() {
  const q = [];
  // EASY
  q.push(mc("easy", "For equally likely outcomes, $P(A)=$", ["$\\dfrac{n(A)}{n(S)}$", "$n(A)\\,n(S)$", "$\\dfrac{n(S)}{n(A)}$", "$n(A)-n(S)$"], 0));
  q.push(mc("easy", "3 marbles from 5 (2 red, 3 blue): $P(\\text{a chosen single marble is red})=$", ["$\\tfrac25$", "$\\tfrac35$", "$\\tfrac13$", "$\\tfrac12$"], 0));
  q.push(mc("easy", "$P(\\text{drawing the ace of spades})=$", ["$\\tfrac{1}{52}$", "$\\tfrac{1}{13}$", "$\\tfrac14$", "$\\tfrac{1}{26}$"], 0));
  q.push(mc("easy", "Choose 1 of 10 tickets. $P(\\text{a specific ticket})=$", ["$\\tfrac{1}{10}$", "$\\tfrac{1}{5}$", "$10$", "$1$"], 0));
  q.push(mc("easy", "The number of 5-card hands is:", ["$\\binom{52}{5}$", "$_{52}P_5$", "$52^5$", "$5!$"], 0));
  q.push(mc("easy", "For an 'at least one' probability, a fast method is:", ["$1-P(\\text{none})$", "$P(\\text{all})$", "$0$", "add every case always"], 0));
  q.push(ms("easy", "Which count unordered selections?", ["$\\binom{n}{r}$", "combinations", "$_nP_r$", "committees"], [0, 1, 3]));
  q.push(ms("easy", "Which give $P(A)$ for equally likely outcomes?", ["$\\dfrac{n(A)}{n(S)}$", "favourable over total", "$\\dfrac{n(S)}{n(A)}$", "count $A$ divided by count $S$"], [0, 1, 3]));
  q.push(tf("easy", "$P(\\text{at least one})=1-P(\\text{none})$.", true));
  q.push(tf("easy", "For a fair draw, probability is favourable outcomes over total outcomes.", true));
  q.push(tf("easy", "There are $\\binom{52}{5}$ five-card hands.", true));
  q.push(num("easy", "How many 5-card hands are all hearts ($\\binom{13}{5}$)?", 1287, 0));
  q.push(num("easy", "How many ways to choose 2 of 5 people ($\\binom{5}{2}$)?", 10, 0));
  q.push(num("easy", "$\\binom{52}{5}=$ (type the number).", 2598960, 0));
  q.push(fill("easy", "$P(\\text{a drawn card is a heart})=$ ___.", ["1/4", "13/52"]));
  q.push(fill("easy", "$P(\\text{choosing 1 specific student of 20})=$ ___.", ["1/20"]));
  q.push(mc("easy", "$P(\\text{a 5-card hand is all spades})=$", ["$\\dfrac{\\binom{13}{5}}{\\binom{52}{5}}$", "$\\dfrac{13}{52}$", "$\\binom{13}{5}$", "$\\tfrac14$"], 0));
  q.push(num("easy", "How many committees of 3 from 9 ($\\binom{9}{3}$)?", 84, 0));
  q.push(tf("easy", "Both the favourable count and the total count can use combinations.", true));
  q.push(fill("easy", "$\\binom{13}{5}=$ ___.", ["1287"]));
  // MEDIUM
  q.push(mc("medium", "A committee of 3 from 5 men and 4 women. $P(\\text{all women})=$", ["$\\tfrac{1}{21}$", "$\\tfrac{4}{9}$", "$\\tfrac{1}{9}$", "$\\tfrac{1}{14}$"], 0));
  q.push(mc("medium", "5 people sit in a row at random. $P(\\text{two specific are adjacent})=$", ["$\\tfrac25$", "$\\tfrac15$", "$\\tfrac12$", "$\\tfrac{2}{15}$"], 0));
  q.push(mc("medium", "3 people each pick a digit $0$--$9$. $P(\\text{all different})=$", ["$0.72$", "$0.3$", "$0.9$", "$0.5$"], 0));
  q.push(mc("medium", "Draw 4 from 8 boys, 4 girls. $P(\\text{exactly 2 girls})=$", ["$\\tfrac{56}{165}$", "$\\tfrac13$", "$\\tfrac{2}{11}$", "$\\tfrac12$"], 0));
  q.push(mc("medium", "The letters of BANANA are arranged at random. $P(\\text{starts with B})=$", ["$\\tfrac16$", "$\\tfrac13$", "$\\tfrac12$", "$\\tfrac{1}{60}$"], 0));
  q.push(mc("medium", "$P(\\text{a committee of 3 from 4M, 5W is all men})=$", ["$\\tfrac{1}{21}$", "$\\tfrac{4}{9}$", "$\\tfrac{1}{14}$", "$\\tfrac13$"], 0));
  q.push(ms("medium", "Which count $P(\\text{all women})$ for 3 from 5M, 4W?", ["$\\dfrac{\\binom{4}{3}}{\\binom{9}{3}}$", "$\\tfrac{4}{84}$", "$\\tfrac{1}{21}$", "$\\tfrac{4}{9}$"], [0, 1, 2]));
  q.push(ms("medium", "For 'two specific adjacent among 5 in a row', which count it?", ["$\\dfrac{4!\\,2!}{5!}$", "$\\tfrac{48}{120}$", "$\\tfrac25$", "$\\tfrac15$"], [0, 1, 2]));
  q.push(tf("medium", "$P(\\text{all women, 3 from 5M 4W})=\\tfrac{1}{21}$.", true));
  q.push(tf("medium", "The probability two specific of 5 people sit together in a row is $\\tfrac25$.", true));
  q.push(tf("medium", "$P(\\text{3 random digits all different})=0.72$.", true));
  q.push(num("medium", "Draw 3 from 7 red, 3 green: how many hands have exactly 1 green ($\\binom{3}{1}\\binom{7}{2}$)?", 63, 0));
  q.push(num("medium", "$\\binom{10}{3}$ (total draws of 3 from 10)?", 120, 0));
  q.push(num("medium", "3 people pick a day of the week; number of all-different outcomes ($7\\cdot6\\cdot5$)?", 210, 0));
  q.push(fill("medium", "$P(\\text{exactly 1 green, draw 3 from 7R 3G})=$ ___.", ["21/40", "63/120"]));
  q.push(fill("medium", "$P(\\text{3 random digits all different})=$ ___.", ["0.72", "18/25"]));
  q.push(mc("medium", "Choose 4 from 5 seniors and 4 juniors. $P(\\text{exactly 2 of each})=$", ["$\\tfrac{10}{21}$", "$\\tfrac12$", "$\\tfrac{5}{14}$", "$\\tfrac{1}{3}$"], 0));
  q.push(num("medium", "$\\binom{5}{2}\\binom{4}{2}$ (2 seniors, 2 juniors)?", 60, 0));
  q.push(tf("medium", "$P(\\text{2 seniors and 2 juniors, choosing 4 from 5S 4J})=\\tfrac{10}{21}$.", true));
  q.push(fill("medium", "$P(\\text{a 5-card hand is all hearts})=$ ___ (as $\\tfrac{a}{b}$ with the two binomials).", ["1287/2598960"]));
  // HARD
  q.push(mc("hard", "$P(\\text{a 5-card hand has at least one ace})\\approx$", ["$0.341$", "$0.077$", "$0.5$", "$0.659$"], 0));
  q.push(mc("hard", "8 people are seated at random at a round table. $P(\\text{two specific sit together})=$", ["$\\tfrac27$", "$\\tfrac14$", "$\\tfrac17$", "$\\tfrac12$"], 0));
  q.push(mc("hard", "$P(\\text{a 5-card hand is a full house})\\approx$", ["$0.00144$", "$0.0475$", "$0.021$", "$0.0002$"], 0));
  q.push(mc("hard", "Draw 5 from 6 red and 4 blue. $P(\\text{exactly 3 red})=$", ["$\\tfrac{10}{21}$", "$\\tfrac{1}{2}$", "$\\tfrac{5}{14}$", "$\\tfrac{3}{7}$"], 0));
  q.push(mc("hard", "The letters of LEVEL are arranged at random. $P(\\text{starts with V})=$", ["$\\tfrac15$", "$\\tfrac13$", "$\\tfrac16$", "$\\tfrac12$"], 0));
  q.push(mc("hard", "$P(\\text{a 5-card hand is 3 aces and 2 kings})=$", ["$\\dfrac{\\binom{4}{3}\\binom{4}{2}}{\\binom{52}{5}}$", "$\\dfrac{\\binom{8}{5}}{\\binom{52}{5}}$", "$\\dfrac{1}{\\binom{52}{5}}$", "$\\dfrac{\\binom{4}{3}}{\\binom{52}{5}}$"], 0));
  q.push(num("hard", "$\\binom{48}{5}$ (5-card hands with no ace)?", 1712304, 0));
  q.push(num("hard", "For 8 at a round table, $\\dfrac{6!\\,2!}{7!}$ as a fraction reduces to $\\tfrac{a}{7}$; find $a$.", 2, 0));
  q.push(num("hard", "Draw 5 from 6R 4B: number of ways with exactly 3 red ($\\binom{6}{3}\\binom{4}{2}$)?", 120, 0));
  q.push(num("hard", "$\\binom{10}{5}$ (total draws of 5 from 10)?", 252, 0));
  q.push(mc("hard", "$P(\\text{a 5-card hand has at least one king})=1-\\dfrac{\\binom{48}{5}}{\\binom{52}{5}}\\approx$", ["$0.341$", "$0.077$", "$0.25$", "$0.5$"], 0));
  q.push(num("hard", "Exactly-3-red-of-5 from 6R4B has $\\binom{6}{3}\\binom{4}{2}=120$ favourable of $\\binom{10}{5}=252$; the probability is $\\tfrac{10}{k}$. Find $k$.", 21, 0));
  q.push(tf("hard", "$P(\\text{at least one ace in 5 cards})\\approx0.341$.", true));
  q.push(tf("hard", "$P(\\text{two specific of 8 sit together at a round table})=\\tfrac27$.", true));
  q.push(ms("hard", "Which equal $P(\\text{exactly 3 red, draw 5 from 6R 4B})$?", ["$\\dfrac{\\binom{6}{3}\\binom{4}{2}}{\\binom{10}{5}}$", "$\\tfrac{120}{252}$", "$\\tfrac{10}{21}$", "$\\tfrac12$"], [0, 1, 2]));
  q.push(mc("hard", "$P(\\text{a 5-card hand is exactly one pair})\\approx$", ["$0.42$", "$0.048$", "$0.021$", "$0.5$"], 0));
  q.push(num("hard", "One-pair 5-card hands number $1\\,098\\,240$; expressed over $2\\,598\\,960$ this is about $0.42$. Type the probability as a percent (nearest whole).", 42, 0));
  q.push(fill("hard", "$P(\\text{two specific of 8 at a round table sit together})=$ ___.", ["2/7"]));
  q.push(mc("hard", "3 people each choose 1 of 12 months. $P(\\text{all different})=$", ["$\\tfrac{55}{72}$", "$\\tfrac12$", "$\\tfrac{1}{12}$", "$\\tfrac{5}{8}$"], 0));
  q.push(num("hard", "3 people each pick 1 of 12 months: number of all-different outcomes ($12\\cdot11\\cdot10$)?", 1320, 0));
  return q;
}

// ── 2.3 Odds & the Complement ────────────────────────────────
function g23() {
  const q = [];
  // EASY
  q.push(mc("easy", "Odds in favour $a:b$ give $P=$", ["$\\dfrac{a}{a+b}$", "$\\dfrac{a}{b}$", "$\\dfrac{b}{a+b}$", "$a-b$"], 0));
  q.push(mc("easy", "Odds in favour $3:2$. $P=$", ["$\\tfrac35$", "$\\tfrac32$", "$\\tfrac25$", "$\\tfrac23$"], 0));
  q.push(mc("easy", "If $P(A)=\\tfrac14$, the odds in favour are:", ["$1:3$", "$3:1$", "$1:4$", "$4:1$"], 0));
  q.push(mc("easy", "$P(A')=$", ["$1-P(A)$", "$P(A)$", "$1$", "$0$"], 0));
  q.push(mc("easy", "If $P(A)=0.3$, then $P(A')=$", ["$0.7$", "$0.3$", "$1.3$", "$0$"], 0));
  q.push(mc("easy", "Odds against of $5:1$ give $P(\\text{win})=$", ["$\\tfrac16$", "$\\tfrac56$", "$\\tfrac15$", "$5$"], 0));
  q.push(ms("easy", "Which convert odds $2:3$ in favour correctly?", ["$P=\\tfrac25$", "$P(\\text{not})=\\tfrac35$", "$P=\\tfrac23$", "odds against $=3:2$"], [0, 1, 3]));
  q.push(ms("easy", "Which equal $P(A')$?", ["$1-P(A)$", "the complement", "$P(A)$", "$1$ minus $P(A)$"], [0, 1, 3]));
  q.push(tf("easy", "$P(A)+P(A')=1$.", true));
  q.push(tf("easy", "Odds in favour $1:1$ mean $P=\\tfrac12$.", true));
  q.push(tf("easy", "Odds against $=b:a$ when odds in favour are $a:b$.", true));
  q.push(num("easy", "If odds in favour are $7:3$, $P$ as a percent (favourable over total)?", 70, 0));
  q.push(num("easy", "If $P(A)=0.4$, then $P(A')$ as a decimal?", 0.6, 0));
  q.push(fill("easy", "Odds in favour $3:2$ give $P=$ ___.", ["3/5", "0.6"]));
  q.push(fill("easy", "If $P=\\tfrac15$, the odds against are ___.", ["4:1", "4 to 1"]));
  q.push(mc("easy", "$P(\\text{at least one head in 3 coins})=1-P(\\text{no heads})=$", ["$\\tfrac78$", "$\\tfrac18$", "$\\tfrac12$", "$\\tfrac38$"], 0));
  q.push(num("easy", "If $P(A)=0.25$, $P(A')$?", 0.75, 0));
  q.push(tf("easy", "'At least one' is often easiest via the complement.", true));
  q.push(mc("easy", "Odds in favour $9:11$. $P=$", ["$\\tfrac{9}{20}$", "$\\tfrac{11}{20}$", "$\\tfrac{9}{11}$", "$\\tfrac{20}{9}$"], 0));
  q.push(fill("easy", "If $P=\\tfrac29$, the odds in favour are ___.", ["2:7", "2 to 7"]));
  // MEDIUM
  q.push(mc("medium", "Two dice. $P(\\text{at least one }6)=1-\\left(\\tfrac56\\right)^2=$", ["$\\tfrac{11}{36}$", "$\\tfrac16$", "$\\tfrac{25}{36}$", "$\\tfrac13$"], 0));
  q.push(mc("medium", "Odds against a horse are $5:1$. Implied $P(\\text{win})=$", ["$\\tfrac16$", "$\\tfrac56$", "$5$", "$\\tfrac15$"], 0));
  q.push(mc("medium", "Which is more likely: odds $4:3$ in favour, or $P=0.55$?", ["odds $4:3$", "$P=0.55$", "equal", "cannot tell"], 0));
  q.push(mc("medium", "$P(\\text{at least one tail in 4 coins})=$", ["$\\tfrac{15}{16}$", "$\\tfrac{1}{16}$", "$\\tfrac12$", "$\\tfrac14$"], 0));
  q.push(mc("medium", "Odds against rolling a prime on a die are:", ["$1:1$", "$1:2$", "$2:1$", "$3:1$"], 0));
  q.push(mc("medium", "A team's odds against winning are $7:2$. $P(\\text{win})=$", ["$\\tfrac29$", "$\\tfrac79$", "$\\tfrac27$", "$\\tfrac72$"], 0));
  q.push(ms("medium", "Which equal $P(\\text{at least one }6$ in two dice$)$?", ["$1-\\left(\\tfrac56\\right)^2$", "$\\tfrac{11}{36}$", "$1-\\tfrac{25}{36}$", "$\\tfrac16$"], [0, 1, 2]));
  q.push(ms("medium", "Which correctly use the complement?", ["$P(\\ge1)=1-P(0)$", "$P(A')=1-P(A)$", "$P(\\ge1)=P(\\text{all})$", "at least one $=1-$ none"], [0, 1, 3]));
  q.push(tf("medium", "$P(\\text{at least one }6$ in two dice$)=\\tfrac{11}{36}$.", true));
  q.push(tf("medium", "Odds $4:3$ in favour is about $0.571$, which beats $P=0.55$.", true));
  q.push(tf("medium", "Odds against of $7:2$ mean $P(\\text{win})=\\tfrac29$.", true));
  q.push(num("medium", "$P(\\text{no }6$ in three dice$)=\\left(\\tfrac56\\right)^3$; the denominator (as $\\tfrac{125}{k}$) is:", 216, 0));
  q.push(num("medium", "$P(\\text{at least one }6$ in three dice$)=\\tfrac{k}{216}$; find $k$.", 91, 0));
  q.push(fill("medium", "$P(\\text{at least one tail in 4 coins})=$ ___.", ["15/16"]));
  q.push(fill("medium", "Odds against a team are $7:2$; $P(\\text{win})=$ ___.", ["2/9"]));
  q.push(mc("medium", "Two cards drawn without replacement. $P(\\text{at least one ace})=$", ["$1-\\tfrac{48}{52}\\cdot\\tfrac{47}{51}$", "$\\tfrac{4}{52}\\cdot\\tfrac{3}{51}$", "$\\tfrac{8}{52}$", "$\\tfrac{1}{221}$"], 0));
  q.push(num("medium", "$P(\\text{no }6$ in two dice$)=\\tfrac{25}{36}$; so $P(\\text{at least one }6)=\\tfrac{k}{36}$, $k=$", 11, 0));
  q.push(tf("medium", "The complement of 'at least one' is 'none'.", true));
  q.push(fill("medium", "$P(\\text{at least one }6$ in three dice$)=$ ___.", ["91/216"]));
  q.push(mc("medium", "From 20 items with 3 defective, draw 4. $P(\\text{at least one defective})=$", ["$1-\\dfrac{\\binom{17}{4}}{\\binom{20}{4}}$", "$\\dfrac{3}{20}$", "$\\dfrac{\\binom{3}{1}}{\\binom{20}{4}}$", "$\\tfrac14$"], 0));
  // HARD
  q.push(mc("hard", "Each round, odds against winning are $7:3$ (independent). $P(\\text{win at least once in 3 rounds})=$", ["$\\tfrac{657}{1000}$", "$\\tfrac{343}{1000}$", "$\\tfrac{9}{10}$", "$\\tfrac{27}{1000}$"], 0));
  q.push(mc("hard", "From 20 items (3 defective), draw 4. $P(\\text{at least one defective})\\approx$", ["$0.509$", "$0.15$", "$0.05$", "$0.491$"], 0));
  q.push(mc("hard", "A fair coin is tossed 5 times. $P(\\text{at least one head})=$", ["$\\tfrac{31}{32}$", "$\\tfrac{1}{32}$", "$\\tfrac{5}{32}$", "$\\tfrac12$"], 0));
  q.push(mc("hard", "$P(\\text{at least one 6 in four dice})=$", ["$1-\\left(\\tfrac56\\right)^4$", "$\\tfrac46$", "$\\tfrac{4}{36}$", "$\\left(\\tfrac16\\right)^4$"], 0));
  q.push(mc("hard", "Two cards without replacement. $P(\\text{at least one ace})\\approx$", ["$0.149$", "$0.077$", "$0.0045$", "$0.5$"], 0));
  q.push(num("hard", "$P(\\text{win at least once in 3 rounds})=1-(0.7)^3=\\tfrac{k}{1000}$; find $k$.", 657, 0));
  q.push(num("hard", "$P(\\text{at least one head in 5 coins})=\\tfrac{k}{32}$; find $k$.", 31, 0));
  q.push(num("hard", "$\\binom{17}{4}$ (choose 4 non-defective from 17)?", 2380, 0));
  q.push(num("hard", "$\\binom{20}{4}$?", 4845, 0));
  q.push(mc("hard", "$P(\\text{at least one 6 in four dice})\\approx$", ["$0.518$", "$0.667$", "$0.482$", "$0.132$"], 0));
  q.push(num("hard", "$P(\\text{at least one 6 in four dice})=\\tfrac{k}{1296}$; find $k$.", 671, 0));
  q.push(tf("hard", "$P(\\text{win at least once in 3 rounds, }p=0.3)=1-0.343=0.657$.", true));
  q.push(tf("hard", "$P(\\text{at least one defective, 4 of 20 with 3 defective})\\approx0.509$.", true));
  q.push(ms("hard", "Which equal $P(\\text{at least one head in 5 tosses})$?", ["$1-\\left(\\tfrac12\\right)^5$", "$\\tfrac{31}{32}$", "$1-\\tfrac{1}{32}$", "$\\tfrac{5}{32}$"], [0, 1, 2]));
  q.push(mc("hard", "A 6-sided die is rolled until you compute $P(\\text{no 6 in 5 rolls})$. This equals:", ["$\\left(\\tfrac56\\right)^5$", "$\\left(\\tfrac16\\right)^5$", "$\\tfrac56\\cdot5$", "$\\tfrac{5}{6}$"], 0));
  q.push(num("hard", "$P(\\text{no 6 in 5 rolls})=\\tfrac{3125}{k}$; find $k$ ($=6^5$).", 7776, 0));
  q.push(fill("hard", "$P(\\text{win at least once in 3 rounds, odds against }7:3)=$ ___.", ["657/1000", "0.657"]));
  q.push(mc("hard", "A spinner wins with $P=0.2$. $P(\\text{at least one win in 4 spins})=$", ["$1-0.8^4$", "$0.8$", "$0.2\\cdot4$", "$0.2^4$"], 0));
  q.push(num("hard", "$P(\\text{at least one win in 4 spins, }p=0.2)$ as a decimal to 3 places ($1-0.8^4$)?", 0.590, 0.001));
  q.push(tf("hard", "$P(\\text{at least one})$ and $P(\\text{none})$ are complements that sum to $1$.", true));
  return q;
}

// ── 2.4 Mutually Exclusive Events & the Additive Rule ────────
function g24() {
  const q = [];
  // EASY
  q.push(mc("easy", "For mutually exclusive $A,B$: $P(A\\cup B)=$", ["$P(A)+P(B)$", "$P(A)P(B)$", "$P(A)+P(B)-P(A\\cap B)$", "$P(A)-P(B)$"], 0));
  q.push(mc("easy", "A die. $P(2\\text{ or }5)=$", ["$\\tfrac13$", "$\\tfrac16$", "$\\tfrac12$", "$\\tfrac23$"], 0));
  q.push(mc("easy", "Mutually exclusive events have $P(A\\cap B)=$", ["$0$", "$1$", "$P(A)P(B)$", "$\\tfrac12$"], 0));
  q.push(mc("easy", "The general additive rule is $P(A\\cup B)=$", ["$P(A)+P(B)-P(A\\cap B)$", "$P(A)+P(B)$", "$P(A)P(B)$", "$P(A)-P(B)$"], 0));
  q.push(mc("easy", "A die. $P(1\\text{ or }4)=$", ["$\\tfrac13$", "$\\tfrac16$", "$\\tfrac12$", "$\\tfrac23$"], 0));
  q.push(mc("easy", "Are 'rolling a 2' and 'rolling a 5' mutually exclusive?", ["yes", "no", "sometimes", "only on even rolls"], 0));
  q.push(ms("easy", "Which pairs of events are mutually exclusive?", ["'roll a 2' and 'roll a 5'", "'heads' and 'tails' on one flip", "'even' and 'prime' on a die", "'red card' and 'face card'"], [0, 1]));
  q.push(ms("easy", "Which equal $P(2\\text{ or }5)$ on a die?", ["$\\tfrac16+\\tfrac16$", "$\\tfrac13$", "$\\tfrac{2}{6}$", "$\\tfrac{1}{36}$"], [0, 1, 2]));
  q.push(tf("easy", "Mutually exclusive events cannot both occur.", true));
  q.push(tf("easy", "For mutually exclusive events, add the probabilities.", true));
  q.push(tf("easy", "'Even' and 'odd' on one die are mutually exclusive.", true));
  q.push(num("easy", "$P(1\\text{ or }2\\text{ or }3)$ on a die times $6$ equals:", 3, 0));
  q.push(fill("easy", "$P(2\\text{ or }5)$ on a die $=$ ___.", ["1/3", "2/6"]));
  q.push(fill("easy", "For ME events, $P(A\\cup B)=P(A)+$ ___.", ["P(B)"]));
  q.push(mc("easy", "$P(A)=0.3,\\ P(B)=0.4$, mutually exclusive. $P(A\\cup B)=$", ["$0.7$", "$0.12$", "$0.1$", "$1$"], 0));
  q.push(num("easy", "If $P(A)=0.5$ and $P(B)=0.2$ are ME, $P(A\\cup B)$ as a decimal?", 0.7, 0));
  q.push(tf("easy", "If two events overlap, you must subtract $P(A\\cap B)$.", true));
  q.push(mc("easy", "A die. $P(\\text{even or }5)=$", ["$\\tfrac23$", "$\\tfrac12$", "$\\tfrac16$", "$\\tfrac13$"], 0));
  q.push(fill("easy", "$P(A)=0.3,P(B)=0.4$ (ME): $P(A\\cup B)=$ ___.", ["0.7"]));
  q.push(tf("easy", "A Venn diagram helps organize overlapping events.", true));
  // MEDIUM
  q.push(mc("medium", "One card. $P(\\text{king or heart})=$", ["$\\tfrac{4}{13}$", "$\\tfrac{17}{52}$", "$\\tfrac{4}{52}$", "$\\tfrac12$"], 0));
  q.push(mc("medium", "One card. $P(\\text{queen or diamond})=$", ["$\\tfrac{4}{13}$", "$\\tfrac{17}{52}$", "$\\tfrac{1}{13}$", "$\\tfrac14$"], 0));
  q.push(mc("medium", "Two dice. $P(\\text{sum }7\\text{ or }11)=$", ["$\\tfrac29$", "$\\tfrac16$", "$\\tfrac{7}{36}$", "$\\tfrac14$"], 0));
  q.push(mc("medium", "In a class of 30: 18 like math, 12 like art, 6 both. $P(\\text{math or art})=$", ["$\\tfrac45$", "$1$", "$\\tfrac{30}{30}$", "$\\tfrac{24}{36}$"], 0));
  q.push(mc("medium", "From above, $P(\\text{neither})=$", ["$\\tfrac15$", "$\\tfrac45$", "$\\tfrac{6}{30}$", "$0$"], 0));
  q.push(mc("medium", "One card. $P(\\text{face card or spade})=$", ["$\\tfrac{11}{26}$", "$\\tfrac{25}{52}$", "$\\tfrac{12}{52}$", "$\\tfrac{1}{2}$"], 0));
  q.push(ms("medium", "Which equal $P(\\text{king or heart})$?", ["$\\tfrac{4}{52}+\\tfrac{13}{52}-\\tfrac{1}{52}$", "$\\tfrac{16}{52}$", "$\\tfrac{4}{13}$", "$\\tfrac{17}{52}$"], [0, 1, 2]));
  q.push(ms("medium", "Which are NOT mutually exclusive?", ["'king' and 'heart'", "'even' and 'prime' on a die", "'2' and '5' on a die", "'face card' and 'spade'"], [0, 1, 3]));
  q.push(tf("medium", "$P(\\text{king or heart})=\\tfrac{4}{13}$.", true));
  q.push(tf("medium", "'King' and 'heart' are mutually exclusive.", false, "The king of hearts is both."));
  q.push(tf("medium", "$P(\\text{sum }7\\text{ or }11)=\\tfrac29$.", true));
  q.push(num("medium", "In a class of 25: 14 soccer, 10 basketball, 5 both. How many play soccer or basketball?", 19, 0));
  q.push(num("medium", "From that class of 25, how many play neither?", 6, 0));
  q.push(fill("medium", "$P(\\text{king or heart})=$ ___.", ["4/13", "16/52"]));
  q.push(fill("medium", "$P(\\text{face card or spade})=$ ___.", ["11/26", "22/52"]));
  q.push(mc("medium", "$P(A)=0.5,\\ P(B)=0.5,\\ P(A\\cup B)=0.8$. $P(A\\cap B)=$", ["$0.2$", "$0.25$", "$0.3$", "$0$"], 0));
  q.push(num("medium", "$P(A)=0.5,P(B)=0.5,P(A\\cup B)=0.8$. $P(A\\cap B)$ as a decimal?", 0.2, 0));
  q.push(tf("medium", "$P(A\\cup B)=P(A)+P(B)-P(A\\cap B)$ always holds.", true));
  q.push(fill("medium", "Class of 30 (18 math, 12 art, 6 both): $P(\\text{math or art})=$ ___.", ["4/5", "24/30", "0.8"]));
  q.push(mc("medium", "A die. $P(\\text{odd or greater than }4)=$", ["$\\tfrac23$", "$\\tfrac12$", "$\\tfrac56$", "$\\tfrac13$"], 0));
  // HARD
  q.push(mc("hard", "One card. $P(\\text{a spade, a king, or a queen})=$", ["$\\tfrac{19}{52}$", "$\\tfrac{21}{52}$", "$\\tfrac{5}{13}$", "$\\tfrac{1}{4}$"], 0));
  q.push(mc("hard", "Two dice. $P(\\text{a double or sum }6)=$", ["$\\tfrac{5}{18}$", "$\\tfrac{11}{36}$", "$\\tfrac{1}{6}$", "$\\tfrac{1}{3}$"], 0));
  q.push(mc("hard", "Of 200 people: 120 own a car, 90 a bike, 40 both. $P(\\text{car or bike})=$", ["$\\tfrac{17}{20}$", "$\\tfrac{21}{20}$", "$\\tfrac{3}{4}$", "$\\tfrac{4}{5}$"], 0));
  q.push(mc("hard", "From above, $P(\\text{car only})=$", ["$\\tfrac25$", "$\\tfrac{3}{5}$", "$\\tfrac{120}{200}$", "$\\tfrac{1}{5}$"], 0));
  q.push(mc("hard", "One card. $P(\\text{a red card or a face card})=$", ["$\\tfrac{8}{13}$", "$\\tfrac12$", "$\\tfrac{7}{13}$", "$\\tfrac{9}{13}$"], 0));
  q.push(mc("hard", "Two dice. $P(\\text{sum}\\le4\\text{ or sum}\\ge11)=$", ["$\\tfrac14$", "$\\tfrac16$", "$\\tfrac29$", "$\\tfrac{5}{36}$"], 0));
  q.push(num("hard", "$P(\\text{spade, king, or queen})=\\tfrac{k}{52}$; find $k$ (inclusion-exclusion).", 19, 0));
  q.push(num("hard", "$P(\\text{a double or sum }6)=\\tfrac{k}{36}$; find $k$.", 10, 0));
  q.push(num("hard", "Of 200: 120 car, 90 bike, 40 both. How many own a car or a bike?", 170, 0));
  q.push(num("hard", "From those 200, how many own a car only?", 80, 0));
  q.push(mc("hard", "Three events with pairwise overlaps but no triple overlap: $P(A\\cup B\\cup C)=$", ["$\\sum P-\\sum P(\\text{pairs})$", "$\\sum P$", "$\\prod P$", "$\\sum P+\\sum P(\\text{pairs})$"], 0));
  q.push(tf("hard", "$P(\\text{spade, king, or queen})=\\tfrac{19}{52}$ (subtract the spade-king and spade-queen overlaps).", true));
  q.push(tf("hard", "$P(\\text{a double or sum }6)=\\tfrac{10}{36}=\\tfrac{5}{18}$.", true));
  q.push(ms("hard", "For $P(\\text{spade or king or queen})$, which overlaps are subtracted?", ["spade $\\cap$ king", "spade $\\cap$ queen", "king $\\cap$ queen", "the triple overlap"], [0, 1]));
  q.push(mc("hard", "Survey of 100: 60 like tea, 50 coffee, 30 both. $P(\\text{exactly one drink})=$", ["$\\tfrac{1}{2}$", "$\\tfrac{8}{10}$", "$\\tfrac{3}{10}$", "$\\tfrac{9}{10}$"], 0));
  q.push(num("hard", "Survey of 100 (60 tea, 50 coffee, 30 both): how many like exactly one drink?", 50, 0));
  q.push(fill("hard", "$P(\\text{a double or a sum of }6)=$ ___.", ["5/18", "10/36"]));
  q.push(mc("hard", "One card. $P(\\text{a red card or a king})=$", ["$\\tfrac{7}{13}$", "$\\tfrac12$", "$\\tfrac{8}{13}$", "$\\tfrac{15}{26}$"], 0));
  q.push(num("hard", "$P(\\text{a red card or a king})=\\tfrac{k}{52}$; find $k$ ($26+4-2$).", 28, 0));
  q.push(tf("hard", "For $P(\\text{red or king})$, subtract the two red kings once: $\\tfrac{28}{52}=\\tfrac{7}{13}$.", true));
  return q;
}

// ── 2.5 Independent & Dependent Events ───────────────────────
function g25() {
  const q = [];
  // EASY
  q.push(mc("easy", "For independent $A,B$: $P(A\\cap B)=$", ["$P(A)P(B)$", "$P(A)+P(B)$", "$P(A)-P(B)$", "$0$"], 0));
  q.push(mc("easy", "A coin and a die. $P(\\text{head and a }6)=$", ["$\\tfrac{1}{12}$", "$\\tfrac16$", "$\\tfrac12$", "$\\tfrac{1}{36}$"], 0));
  q.push(mc("easy", "$P(\\text{two heads in a row})=$", ["$\\tfrac14$", "$\\tfrac12$", "$\\tfrac18$", "$1$"], 0));
  q.push(mc("easy", "Drawing without replacement makes events:", ["dependent", "independent", "mutually exclusive", "impossible"], 0));
  q.push(mc("easy", "Two dice. $P(\\text{both show }6)=$", ["$\\tfrac{1}{36}$", "$\\tfrac16$", "$\\tfrac{1}{12}$", "$\\tfrac13$"], 0));
  q.push(mc("easy", "$P(\\text{head, then a }3\\text{ on a die})=$", ["$\\tfrac{1}{12}$", "$\\tfrac16$", "$\\tfrac12$", "$\\tfrac{1}{8}$"], 0));
  q.push(ms("easy", "Which pairs of events are independent?", ["two separate coin flips", "two dice", "drawing 2 cards without replacement", "a coin and a die"], [0, 1, 3]));
  q.push(ms("easy", "Which equal $P(\\text{HH})$ for two coins?", ["$\\tfrac12\\cdot\\tfrac12$", "$\\tfrac14$", "$\\tfrac12+\\tfrac12$", "$0.25$"], [0, 1, 3]));
  q.push(tf("easy", "Independent events multiply for 'and'.", true));
  q.push(tf("easy", "Drawing with replacement keeps trials independent.", true));
  q.push(tf("easy", "$P(\\text{3 heads in a row})=\\tfrac18$.", true));
  q.push(num("easy", "$P(\\text{HHH})$ for three coins is $\\tfrac{1}{k}$; find $k$.", 8, 0));
  q.push(num("easy", "$P(\\text{a }6\\text{ then a }6)$ on two dice is $\\tfrac{1}{k}$; find $k$.", 36, 0));
  q.push(fill("easy", "$P(\\text{head and a }6)=$ ___.", ["1/12"]));
  q.push(fill("easy", "$P(\\text{two heads})=$ ___.", ["1/4", "0.25"]));
  q.push(mc("easy", "A spinner wins with $P=0.2$. $P(\\text{win twice in a row})=$", ["$0.04$", "$0.4$", "$0.2$", "$0.02$"], 0));
  q.push(num("easy", "$P(\\text{win twice}),\\ p=0.2$, as a decimal?", 0.04, 0));
  q.push(tf("easy", "Independent and mutually exclusive mean the same thing.", false, "They are different concepts."));
  q.push(mc("easy", "Two components each work with $P=0.9$. $P(\\text{both work})=$", ["$0.81$", "$0.9$", "$1.8$", "$0.18$"], 0));
  q.push(fill("easy", "$P(\\text{both components work}),\\ p=0.9$ each $=$ ___.", ["0.81"]));
  // MEDIUM
  q.push(mc("medium", "Draw 2 cards without replacement. $P(\\text{two aces})=$", ["$\\tfrac{1}{221}$", "$\\tfrac{1}{169}$", "$\\tfrac{1}{16}$", "$\\tfrac{4}{52}$"], 0));
  q.push(mc("medium", "From 5 red, 3 blue, draw 2 without replacement. $P(\\text{both red})=$", ["$\\tfrac{5}{14}$", "$\\tfrac{25}{64}$", "$\\tfrac14$", "$\\tfrac{1}{2}$"], 0));
  q.push(mc("medium", "Same bag, WITH replacement. $P(\\text{both red})=$", ["$\\tfrac{25}{64}$", "$\\tfrac{5}{14}$", "$\\tfrac{1}{4}$", "$\\tfrac{5}{8}$"], 0));
  q.push(mc("medium", "Bag of 4 red, 6 blue; draw 2 without replacement. $P(\\text{one of each})=$", ["$\\tfrac{8}{15}$", "$\\tfrac{24}{100}$", "$\\tfrac12$", "$\\tfrac{2}{5}$"], 0));
  q.push(mc("medium", "$P(\\text{at least one }6\\text{ in 3 rolls})=$", ["$\\tfrac{91}{216}$", "$\\tfrac12$", "$\\tfrac{125}{216}$", "$\\tfrac36$"], 0));
  q.push(mc("medium", "Two components each work with $P=0.9$. $P(\\text{at least one works})=$", ["$0.99$", "$0.81$", "$0.9$", "$1.8$"], 0));
  q.push(ms("medium", "Which equal $P(\\text{two aces, no replacement})$?", ["$\\tfrac{4}{52}\\cdot\\tfrac{3}{51}$", "$\\tfrac{1}{221}$", "$\\tfrac{12}{2652}$", "$\\left(\\tfrac{4}{52}\\right)^2$"], [0, 1, 2]));
  q.push(ms("medium", "Which situations are dependent?", ["draw 2 cards without replacement", "pick 2 marbles without replacement", "two dice", "two coins"], [0, 1]));
  q.push(tf("medium", "Without replacement, the second draw's probability changes.", true));
  q.push(tf("medium", "$P(\\text{both red, WITHOUT replacement, 5R 3B})=\\tfrac{5}{14}$.", true));
  q.push(tf("medium", "$P(\\text{both red, WITH replacement, 5R 3B})=\\tfrac{25}{64}$.", true));
  q.push(num("medium", "$P(\\text{two aces, no replacement})=\\tfrac{1}{k}$; find $k$.", 221, 0));
  q.push(num("medium", "$P(\\text{at least one }6\\text{ in 3 rolls})=\\tfrac{k}{216}$; find $k$.", 91, 0));
  q.push(fill("medium", "$P(\\text{both red, no replacement, 5R 3B})=$ ___.", ["5/14"]));
  q.push(fill("medium", "$P(\\text{one of each, 4R 6B, draw 2})=$ ___.", ["8/15"]));
  q.push(mc("medium", "On one die, are 'even' and 'greater than 3' independent?", ["no", "yes", "they are ME", "cannot tell"], 0));
  q.push(num("medium", "$P(\\text{both work}),\\ p=0.9$ each, then $P(\\text{at least one})$ as a decimal?", 0.99, 0));
  q.push(tf("medium", "'Even' and '$>3$' on a die are independent.", false, "$P(\\text{both})=\\tfrac13\\ne\\tfrac14$."));
  q.push(fill("medium", "$P(\\text{both red, WITH replacement, 5R 3B})=$ ___.", ["25/64"]));
  q.push(mc("medium", "Draw 3 cards without replacement. $P(\\text{all aces})=$", ["$\\tfrac{1}{5525}$", "$\\tfrac{1}{221}$", "$\\tfrac{1}{64}$", "$\\tfrac{1}{132600}$"], 0));
  // HARD
  q.push(mc("hard", "A test has 3 four-option questions, all guessed. $P(\\text{all correct})=$", ["$\\tfrac{1}{64}$", "$\\tfrac{1}{12}$", "$\\tfrac{3}{4}$", "$\\tfrac{1}{16}$"], 0));
  q.push(mc("hard", "Same test. $P(\\text{none correct})=$", ["$\\tfrac{27}{64}$", "$\\tfrac{1}{64}$", "$\\tfrac{3}{4}$", "$\\tfrac{9}{16}$"], 0));
  q.push(mc("hard", "Same test. $P(\\text{at least one correct})=$", ["$\\tfrac{37}{64}$", "$\\tfrac{27}{64}$", "$\\tfrac{1}{64}$", "$\\tfrac{3}{4}$"], 0));
  q.push(mc("hard", "A jar of 2 green, 8 red; draw 2 without replacement. $P(\\text{at least one green})=$", ["$\\tfrac{17}{45}$", "$\\tfrac{1}{15}$", "$\\tfrac{7}{15}$", "$\\tfrac{2}{5}$"], 0));
  q.push(mc("hard", "On one die, are 'prime' and 'odd' independent?", ["no", "yes", "they are ME", "always"], 0));
  q.push(mc("hard", "$P(\\text{3 aces in a row, no replacement})=$", ["$\\tfrac{1}{5525}$", "$\\tfrac{1}{221}$", "$\\tfrac{1}{55}$", "$\\tfrac{1}{132600}$"], 0));
  q.push(num("hard", "Guessing 3 four-option questions: $P(\\text{all correct})=\\tfrac{1}{k}$; find $k$.", 64, 0));
  q.push(num("hard", "Same test: $P(\\text{none correct})=\\tfrac{27}{k}$; find $k$.", 64, 0));
  q.push(num("hard", "Jar of 2G 8R, draw 2: $P(\\text{at least one green})=\\tfrac{17}{k}$; find $k$.", 45, 0));
  q.push(num("hard", "$P(\\text{3 aces in a row, no replacement})=\\tfrac{1}{k}$; find $k$.", 5525, 0));
  q.push(tf("hard", "For guessing 3 four-option questions, $P(\\text{at least one correct})=\\tfrac{37}{64}$.", true));
  q.push(tf("hard", "'Prime' and 'odd' on a die are NOT independent ($P(\\text{both})=\\tfrac13\\ne\\tfrac14$).", true));
  q.push(ms("hard", "Which equal $P(\\text{at least one correct, 3 four-option Qs})$?", ["$1-\\left(\\tfrac34\\right)^3$", "$\\tfrac{37}{64}$", "$1-\\tfrac{27}{64}$", "$\\tfrac{1}{64}$"], [0, 1, 2]));
  q.push(mc("hard", "A machine has 4 independent parts, each working with $P=0.95$. $P(\\text{all work})\\approx$", ["$0.815$", "$0.95$", "$0.19$", "$0.05$"], 0));
  q.push(num("hard", "$P(\\text{4 parts all work}),\\ p=0.95$, to 3 decimals?", 0.815, 0.002));
  q.push(mc("hard", "Draw 3 from 10 (4 defective) without replacement. $P(\\text{no defective})=$", ["$\\tfrac{1}{6}$", "$\\tfrac{1}{2}$", "$\\tfrac{1}{3}$", "$\\tfrac{2}{5}$"], 0));
  q.push(num("hard", "Draw 3 from 10 (4 defective): $P(\\text{no defective})=\\tfrac{1}{k}$; find $k$ ($\\binom{6}{3}/\\binom{10}{3}$).", 6, 0));
  q.push(fill("hard", "Guessing 3 four-option Qs: $P(\\text{at least one correct})=$ ___.", ["37/64"]));
  q.push(mc("hard", "Two dice. $P(\\text{at least one 6})$, treating dice as independent, $=$", ["$\\tfrac{11}{36}$", "$\\tfrac{1}{3}$", "$\\tfrac{1}{6}$", "$\\tfrac{25}{36}$"], 0));
  q.push(num("hard", "$P(\\text{at least one green, 2G 8R, draw 2})=\\tfrac{k}{45}$; find $k$.", 17, 0));
  return q;
}

// ── 2.6 Conditional Probability ──────────────────────────────
function g26() {
  const q = [];
  // EASY
  q.push(mc("easy", "$P(A\\mid B)=$", ["$\\dfrac{P(A\\cap B)}{P(B)}$", "$\\dfrac{P(B)}{P(A)}$", "$P(A)P(B)$", "$P(A)+P(B)$"], 0));
  q.push(mc("easy", "$P(\\text{king}\\mid\\text{face card})=$", ["$\\tfrac13$", "$\\tfrac{1}{13}$", "$\\tfrac14$", "$\\tfrac{4}{52}$"], 0));
  q.push(mc("easy", "$P(\\text{heart}\\mid\\text{red card})=$", ["$\\tfrac12$", "$\\tfrac14$", "$\\tfrac{1}{13}$", "$\\tfrac{13}{52}$"], 0));
  q.push(mc("easy", "Conditional probability restricts to outcomes where:", ["$B$ has occurred", "$A$ is impossible", "nothing is known", "$A$ and $B$ are ME"], 0));
  q.push(mc("easy", "The product rule: $P(A\\cap B)=$", ["$P(B)P(A\\mid B)$", "$P(A)+P(B)$", "$P(A\\mid B)+P(B)$", "$\\dfrac{P(A)}{P(B)}$"], 0));
  q.push(mc("easy", "$P(\\text{queen}\\mid\\text{red card})=$", ["$\\tfrac{1}{13}$", "$\\tfrac{1}{26}$", "$\\tfrac14$", "$\\tfrac{2}{52}$"], 0));
  q.push(ms("easy", "Which express $P(A\\mid B)$?", ["$\\dfrac{P(A\\cap B)}{P(B)}$", "restrict to $B$, then find $A$", "$P(A)P(B)$", "the reduced sample space"], [0, 1, 3]));
  q.push(ms("easy", "Which equal $P(\\text{king}\\mid\\text{face})$?", ["$\\tfrac{4/52}{12/52}$", "$\\tfrac{4}{12}$", "$\\tfrac13$", "$\\tfrac{1}{13}$"], [0, 1, 2]));
  q.push(tf("easy", "$P(A\\mid B)$ uses a reduced sample space (only where $B$ happened).", true));
  q.push(tf("easy", "$P(\\text{heart}\\mid\\text{red})=\\tfrac12$.", true));
  q.push(tf("easy", "$P(A\\cap B)=P(B)\\,P(A\\mid B)$.", true));
  q.push(num("easy", "$P(\\text{king}\\mid\\text{face card})=\\tfrac{1}{k}$; find $k$.", 3, 0));
  q.push(fill("easy", "$P(\\text{heart}\\mid\\text{red card})=$ ___.", ["1/2", "13/26"]));
  q.push(fill("easy", "$P(\\text{queen}\\mid\\text{red card})=$ ___.", ["1/13", "2/26"]));
  q.push(mc("easy", "Two dice. $P(\\text{sum}=8\\mid\\text{first die}=5)=$", ["$\\tfrac16$", "$\\tfrac{5}{36}$", "$\\tfrac12$", "$\\tfrac{1}{3}$"], 0));
  q.push(num("easy", "$P(\\text{heart}\\mid\\text{red})$ times $2$ equals:", 1, 0));
  q.push(tf("easy", "Given the first die is a 5, $P(\\text{sum}=8)=\\tfrac16$.", true));
  q.push(mc("easy", "$P(\\text{spade}\\mid\\text{black card})=$", ["$\\tfrac12$", "$\\tfrac14$", "$\\tfrac{13}{52}$", "$\\tfrac{1}{13}$"], 0));
  q.push(fill("easy", "$P(\\text{spade}\\mid\\text{black})=$ ___.", ["1/2"]));
  q.push(tf("easy", "Conditioning on a red card leaves 26 equally likely cards.", true));
  // MEDIUM
  q.push(mc("medium", "Draw 2 without replacement. $P(\\text{2nd is a spade}\\mid\\text{1st was a spade})=$", ["$\\tfrac{4}{17}$", "$\\tfrac14$", "$\\tfrac{13}{52}$", "$\\tfrac{12}{52}$"], 0));
  q.push(mc("medium", "50 students take French; 30 take French, and 12 of those take Spanish too. $P(\\text{Spanish}\\mid\\text{French})=$", ["$\\tfrac25$", "$\\tfrac{12}{50}$", "$\\tfrac12$", "$\\tfrac{6}{25}$"], 0));
  q.push(mc("medium", "A jar of 4 red, 6 blue. $P(\\text{2nd red}\\mid\\text{1st red})=$", ["$\\tfrac13$", "$\\tfrac{4}{10}$", "$\\tfrac{3}{10}$", "$\\tfrac{1}{2}$"], 0));
  q.push(mc("medium", "$P(\\text{two kings in a row, no replacement})=$", ["$\\tfrac{1}{221}$", "$\\tfrac{1}{169}$", "$\\tfrac{1}{16}$", "$\\tfrac{4}{52}$"], 0));
  q.push(mc("medium", "Two dice. $P(\\text{a double}\\mid\\text{sum is even})=$", ["$\\tfrac13$", "$\\tfrac16$", "$\\tfrac12$", "$\\tfrac{1}{4}$"], 0));
  q.push(mc("medium", "Two-way table: 200 people, 120 own a phone, 90 of those own a laptop. $P(\\text{laptop}\\mid\\text{phone})=$", ["$\\tfrac34$", "$\\tfrac{90}{200}$", "$\\tfrac12$", "$\\tfrac{9}{10}$"], 0));
  q.push(ms("medium", "Which equal $P(\\text{2nd spade}\\mid\\text{1st spade})$ (no replacement)?", ["$\\tfrac{12}{51}$", "$\\tfrac{4}{17}$", "$\\tfrac{13}{52}$", "12 spades of 51 cards"], [0, 1, 3]));
  q.push(ms("medium", "Which use the product rule?", ["$P(K_1\\cap K_2)=P(K_1)P(K_2\\mid K_1)$", "$\\tfrac{4}{52}\\cdot\\tfrac{3}{51}$", "$P(A)P(B\\mid A)$", "$P(A)+P(B)$"], [0, 1, 2]));
  q.push(tf("medium", "$P(\\text{2nd spade}\\mid\\text{1st spade})=\\tfrac{12}{51}=\\tfrac{4}{17}$.", true));
  q.push(tf("medium", "$P(\\text{Spanish}\\mid\\text{French})$ divides Spanish-and-French by all French.", true));
  q.push(tf("medium", "$P(\\text{a double}\\mid\\text{sum even})=\\tfrac13$.", true));
  q.push(num("medium", "$P(\\text{Spanish}\\mid\\text{French})=\\tfrac{12}{30}=\\tfrac{2}{k}$; find $k$.", 5, 0));
  q.push(num("medium", "$P(\\text{laptop}\\mid\\text{phone})=\\tfrac{90}{120}=\\tfrac{3}{k}$; find $k$.", 4, 0));
  q.push(fill("medium", "$P(\\text{2nd spade}\\mid\\text{1st spade})=$ ___.", ["4/17", "12/51"]));
  q.push(fill("medium", "$P(\\text{a double}\\mid\\text{sum is even})=$ ___.", ["1/3", "6/18"]));
  q.push(mc("medium", "From 5 red, 4 green, draw 2 without replacement. $P(\\text{both red})=$", ["$\\tfrac{5}{18}$", "$\\tfrac{25}{81}$", "$\\tfrac{1}{2}$", "$\\tfrac{5}{9}$"], 0));
  q.push(num("medium", "$P(\\text{both red, 5R 4G, no replacement})=\\tfrac{5}{k}$; find $k$.", 18, 0));
  q.push(tf("medium", "Given a laptop owner, the fraction who own phones can differ from $P(\\text{laptop}\\mid\\text{phone})$.", true));
  q.push(fill("medium", "$P(\\text{2nd red}\\mid\\text{1st red}),\\ 4R 6B=$ ___.", ["1/3", "3/9"]));
  q.push(mc("medium", "Two dice. $P(\\text{sum}=6\\mid\\text{first die}=2)=$", ["$\\tfrac16$", "$\\tfrac{5}{36}$", "$\\tfrac{1}{5}$", "$\\tfrac{1}{2}$"], 0));
  // HARD
  q.push(mc("hard", "Two dice. $P(\\text{sum}\\ge10\\mid\\text{at least one }6)=$", ["$\\tfrac{5}{11}$", "$\\tfrac16$", "$\\tfrac{5}{36}$", "$\\tfrac{1}{2}$"], 0));
  q.push(mc("hard", "A two-child family (each B/G equally likely). $P(\\text{both girls}\\mid\\text{at least one girl})=$", ["$\\tfrac13$", "$\\tfrac12$", "$\\tfrac14$", "$\\tfrac23$"], 0));
  q.push(mc("hard", "Same family. $P(\\text{both girls}\\mid\\text{elder is a girl})=$", ["$\\tfrac12$", "$\\tfrac13$", "$\\tfrac14$", "$\\tfrac23$"], 0));
  q.push(mc("hard", "A disease affects 1\\%. A test is 90\\% sensitive with a 5\\% false-positive rate. $P(\\text{disease}\\mid\\text{positive})\\approx$", ["$0.15$", "$0.90$", "$0.05$", "$0.50$"], 0));
  q.push(mc("hard", "A two-child family. $P(\\text{both boys}\\mid\\text{at least one boy})=$", ["$\\tfrac13$", "$\\tfrac12$", "$\\tfrac14$", "$\\tfrac23$"], 0));
  q.push(mc("hard", "Two dice. $P(\\text{a double}\\mid\\text{sum}\\ge8)=$", ["$\\tfrac{4}{15}$", "$\\tfrac13$", "$\\tfrac{1}{6}$", "$\\tfrac{1}{5}$"], 0));
  q.push(num("hard", "Two dice: outcomes with at least one 6 number 11; of these, how many have sum $\\ge10$?", 5, 0));
  q.push(num("hard", "A disease affects 2\\%. Test 95\\% sensitive, 10\\% false positive. Per 1000: sick who test positive $=$ ?", 19, 0));
  q.push(num("hard", "Same test: healthy who test positive (per 1000) $=$ ?", 98, 0));
  q.push(mc("hard", "Using those counts, $P(\\text{sick}\\mid\\text{positive})=\\tfrac{19}{19+98}\\approx$", ["$0.16$", "$0.95$", "$0.02$", "$0.5$"], 0));
  q.push(tf("hard", "$P(\\text{both girls}\\mid\\text{at least one girl})=\\tfrac13$, but $P(\\text{both girls}\\mid\\text{elder is a girl})=\\tfrac12$.", true));
  q.push(tf("hard", "$P(\\text{sum}\\ge10\\mid\\text{at least one }6)=\\tfrac{5}{11}$.", true));
  q.push(ms("hard", "For the two-child problem, which sample spaces are correct?", ["at least one girl: $\\{BG,GB,GG\\}$", "elder a girl: $\\{GB,GG\\}$", "at least one girl: $\\{GG\\}$", "both girls in each: $\\{GG\\}$"], [0, 1, 3]));
  q.push(mc("hard", "Sum $\\ge8$ has 15 outcomes; how many are doubles ($4,4;5,5;6,6$)?", ["$3$", "$4$", "$6$", "$2$"], 0));
  q.push(num("hard", "$P(\\text{a double}\\mid\\text{sum}\\ge8)=\\tfrac{k}{15}$; find $k$.", 3, 0));
  q.push(num("hard", "Of 200 people, 120 own a phone, 90 own a laptop, and 90 of the phone owners own laptops. $P(\\text{phone}\\mid\\text{laptop})=\\tfrac{90}{k}$; find $k$.", 90, 0));
  q.push(fill("hard", "$P(\\text{sum}\\ge10\\mid\\text{at least one }6)=$ ___.", ["5/11"]));
  q.push(mc("hard", "$P(\\text{disease}\\mid\\text{positive})$ is small even when the test is accurate because:", ["the disease is rare", "the test is broken", "positives are impossible", "conditioning does nothing"], 0));
  q.push(num("hard", "Two-child family: $P(\\text{both girls}\\mid\\text{at least one girl})=\\tfrac{1}{k}$; find $k$.", 3, 0));
  q.push(tf("hard", "A rare disease makes $P(\\text{disease}\\mid\\text{positive})$ much smaller than the test's sensitivity.", true));
  return q;
}

// ── 2.7 Tree Diagrams & Probability Tables ───────────────────
function g27() {
  const q = [];
  // EASY
  q.push(mc("easy", "On a tree diagram, along one branch you:", ["multiply", "add", "subtract", "divide"], 0));
  q.push(mc("easy", "Across separate paths to one outcome you:", ["add", "multiply", "subtract", "divide"], 0));
  q.push(mc("easy", "Flip a coin, then roll a die. $P(\\text{head and a }6)=$", ["$\\tfrac{1}{12}$", "$\\tfrac16$", "$\\tfrac12$", "$\\tfrac{1}{36}$"], 0));
  q.push(mc("easy", "Flip a coin, then a coin. $P(\\text{HH})=$", ["$\\tfrac14$", "$\\tfrac12$", "$\\tfrac18$", "$1$"], 0));
  q.push(mc("easy", "$P(\\text{tails then an even die roll})=$", ["$\\tfrac14$", "$\\tfrac12$", "$\\tfrac16$", "$\\tfrac{1}{12}$"], 0));
  q.push(mc("easy", "A tree is used for:", ["multi-stage experiments", "a single die roll", "sorting numbers", "solving equations"], 0));
  q.push(ms("easy", "Which are true of tree diagrams?", ["multiply along a branch", "add across disjoint paths", "branch probabilities sum to 1 at each split", "always multiply everything"], [0, 1, 2]));
  q.push(ms("easy", "Which equal $P(\\text{head and }6)$?", ["$\\tfrac12\\cdot\\tfrac16$", "$\\tfrac{1}{12}$", "$\\tfrac12+\\tfrac16$", "along the branch"], [0, 1, 3]));
  q.push(tf("easy", "Along a single path, probabilities multiply.", true));
  q.push(tf("easy", "The probabilities of all branches from one node sum to $1$.", true));
  q.push(tf("easy", "$P(\\text{HH})=\\tfrac14$.", true));
  q.push(num("easy", "$P(\\text{head and a }6)=\\tfrac{1}{k}$; find $k$.", 12, 0));
  q.push(fill("easy", "$P(\\text{tails and an even roll})=$ ___.", ["1/4", "0.25"]));
  q.push(fill("easy", "$P(\\text{HH})=$ ___.", ["1/4", "0.25"]));
  q.push(mc("easy", "Two draws from 3 red, 2 green WITHOUT replacement. $P(\\text{both red})=$", ["$\\tfrac{3}{10}$", "$\\tfrac{9}{25}$", "$\\tfrac{1}{2}$", "$\\tfrac{3}{5}$"], 0));
  q.push(num("easy", "$P(\\text{both red, 3R 2G, no replacement})=\\tfrac{3}{k}$; find $k$.", 10, 0));
  q.push(tf("easy", "A tree diagram lists every path of a multi-stage experiment.", true));
  q.push(mc("easy", "$P(\\text{H then T})$ on two coins $=$", ["$\\tfrac14$", "$\\tfrac12$", "$\\tfrac18$", "$0$"], 0));
  q.push(fill("easy", "Along a branch: HEADS then a 6 gives probability ___.", ["1/12"]));
  q.push(tf("easy", "To find a total probability, add the probabilities of all paths reaching that outcome.", true));
  // MEDIUM
  q.push(mc("medium", "60\\% of parts are from A (2\\% defective), 40\\% from B (5\\% defective). $P(\\text{defective})=$", ["$0.032$", "$0.07$", "$0.02$", "$0.05$"], 0));
  q.push(mc("medium", "Two draws from 4 red, 3 blue without replacement. $P(\\text{RR})=$", ["$\\tfrac27$", "$\\tfrac{16}{49}$", "$\\tfrac12$", "$\\tfrac47$"], 0));
  q.push(mc("medium", "Same bag (4R 3B). $P(\\text{one of each colour})=$", ["$\\tfrac47$", "$\\tfrac{12}{49}$", "$\\tfrac12$", "$\\tfrac27$"], 0));
  q.push(mc("medium", "3 traffic lights each green with $P=0.4$. $P(\\text{all green})=$", ["$0.064$", "$0.4$", "$0.12$", "$0.216$"], 0));
  q.push(mc("medium", "For those lights, $P(\\text{exactly one green})=$", ["$0.432$", "$0.064$", "$0.288$", "$0.36$"], 0));
  q.push(mc("medium", "70\\% study (90\\% pass), 30\\% don't (40\\% pass). $P(\\text{pass})=$", ["$0.75$", "$0.9$", "$0.65$", "$0.63$"], 0));
  q.push(ms("medium", "Which give $P(\\text{defective})$ for the two-factory setup?", ["$0.6(0.02)+0.4(0.05)$", "$0.032$", "$0.012+0.02$", "$0.02\\cdot0.05$"], [0, 1, 2]));
  q.push(ms("medium", "Which equal $P(\\text{RR})$ for 4R 3B without replacement?", ["$\\tfrac47\\cdot\\tfrac36$", "$\\tfrac27$", "$\\tfrac{12}{42}$", "$\\left(\\tfrac47\\right)^2$"], [0, 1, 2]));
  q.push(tf("medium", "Total probability sums the products along all paths to the outcome.", true));
  q.push(tf("medium", "$P(\\text{defective})=0.032$ for the two-factory setup.", true));
  q.push(tf("medium", "$P(\\text{pass})=0.75$ for the study/no-study model.", true));
  q.push(num("medium", "$P(\\text{defective})=0.6(0.02)+0.4(0.05)$ as a decimal?", 0.032, 0));
  q.push(num("medium", "$P(\\text{pass})=0.7(0.9)+0.3(0.4)$ as a decimal?", 0.75, 0));
  q.push(fill("medium", "$P(\\text{RR, 4R 3B, no replacement})=$ ___.", ["2/7"]));
  q.push(fill("medium", "$P(\\text{one of each, 4R 3B})=$ ___.", ["4/7"]));
  q.push(mc("medium", "3 lights each green with $P=0.5$. $P(\\text{exactly two green})=$", ["$\\tfrac38$", "$\\tfrac18$", "$\\tfrac12$", "$\\tfrac34$"], 0));
  q.push(num("medium", "$P(\\text{exactly two green, 3 lights }p=0.5)=\\tfrac{3}{k}$; find $k$.", 8, 0));
  q.push(tf("medium", "$P(\\text{exactly one green, 3 lights }p=0.4)=3(0.4)(0.6)^2=0.432$.", true));
  q.push(fill("medium", "$P(\\text{defective, two-factory 60/40, 2\\%/5\\%})=$ ___.", ["0.032"]));
  q.push(mc("medium", "Urn 5 white, 3 black; draw 3 without replacement. $P(\\text{all white})=$", ["$\\tfrac{5}{28}$", "$\\tfrac{1}{2}$", "$\\tfrac{15}{28}$", "$\\tfrac{125}{512}$"], 0));
  // HARD
  q.push(mc("hard", "From the two factories (60\\%/40\\%, 2\\%/5\\% defective), $P(\\text{from A}\\mid\\text{defective})=$", ["$\\tfrac38$", "$\\tfrac58$", "$\\tfrac{3}{5}$", "$\\tfrac{2}{5}$"], 0));
  q.push(mc("hard", "For the quiz model (70\\% study, pass 0.9; 30\\% don't, pass 0.4), $P(\\text{studied}\\mid\\text{passed})=$", ["$0.84$", "$0.75$", "$0.63$", "$0.9$"], 0));
  q.push(mc("hard", "Urn 5 white, 3 black; draw 3 without replacement. $P(\\text{exactly 2 white})=$", ["$\\tfrac{15}{28}$", "$\\tfrac{5}{28}$", "$\\tfrac12$", "$\\tfrac{3}{28}$"], 0));
  q.push(mc("hard", "Same urn. $P(\\text{at least one black})=$", ["$\\tfrac{23}{28}$", "$\\tfrac{5}{28}$", "$\\tfrac{15}{28}$", "$\\tfrac{3}{28}$"], 0));
  q.push(mc("hard", "80\\% take a vaccine (5\\% get sick), 20\\% don't (30\\% get sick). $P(\\text{sick})=$", ["$0.10$", "$0.05$", "$0.35$", "$0.15$"], 0));
  q.push(mc("hard", "For that vaccine model, $P(\\text{vaccinated}\\mid\\text{sick})=$", ["$0.4$", "$0.6$", "$0.8$", "$0.05$"], 0));
  q.push(num("hard", "$P(\\text{from A}\\mid\\text{defective})=\\dfrac{0.012}{0.032}=\\tfrac{3}{k}$; find $k$.", 8, 0));
  q.push(num("hard", "$P(\\text{studied}\\mid\\text{passed})=\\dfrac{0.63}{0.75}$ as a decimal?", 0.84, 0));
  q.push(num("hard", "$P(\\text{sick, vaccine model})=0.8(0.05)+0.2(0.30)$ as a decimal?", 0.10, 0.001));
  q.push(num("hard", "Urn 5W 3B, draw 3: $P(\\text{at least one black})=\\tfrac{23}{k}$; find $k$.", 28, 0));
  q.push(tf("hard", "$P(\\text{from A}\\mid\\text{defective})=\\tfrac38$ even though most parts are from A.", true));
  q.push(tf("hard", "$P(\\text{exactly 2 white, urn 5W 3B, draw 3})=\\tfrac{15}{28}$.", true));
  q.push(ms("hard", "Which give $P(\\text{sick})$ for the vaccine model?", ["$0.8(0.05)+0.2(0.30)$", "$0.10$", "$0.04+0.06$", "$0.05\\cdot0.30$"], [0, 1, 2]));
  q.push(mc("hard", "$P(\\text{vaccinated}\\mid\\text{sick})=\\dfrac{0.04}{0.10}=$", ["$0.4$", "$0.6$", "$0.8$", "$0.5$"], 0));
  q.push(num("hard", "Urn 5W 3B, draw 3: $P(\\text{exactly 2 white})=\\tfrac{15}{k}$; find $k$.", 28, 0));
  q.push(fill("hard", "$P(\\text{from A}\\mid\\text{defective, 60/40, 2\\%/5\\%})=$ ___.", ["3/8", "0.375"]));
  q.push(mc("hard", "A bag test: 3 lights each green $p=0.4$; $P(\\text{at least one green})=$", ["$1-0.6^3$", "$0.4^3$", "$0.4\\cdot3$", "$0.6^3$"], 0));
  q.push(num("hard", "$P(\\text{at least one green, 3 lights }p=0.4)$ to 3 decimals ($1-0.6^3$)?", 0.784, 0.001));
  q.push(tf("hard", "Reversing a tree (Bayes) divides one path's probability by the total probability of the outcome.", true));
  q.push(fill("hard", "$P(\\text{sick, vaccine model 80/20, 5\\%/30\\%})=$ ___.", ["0.10", "0.1"]));
  return q;
}

export default [
  { code: "2.1", gen: g21 },
  { code: "2.2", gen: g22 },
  { code: "2.3", gen: g23 },
  { code: "2.4", gen: g24 },
  { code: "2.5", gen: g25 },
  { code: "2.6", gen: g26 },
  { code: "2.7", gen: g27 },
];
