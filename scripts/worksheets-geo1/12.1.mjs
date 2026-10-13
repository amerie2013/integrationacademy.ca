import { fig, diceGrid, probTree, outcomeBoxes } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "12.1",
  title: "Probability and Sample Spaces",
  intro: "The <b>sample space</b> $S$ is the set of all possible outcomes of an experiment; an <b>event</b> $E$ is any subset of those outcomes. For equally likely outcomes, $P(E)=\\dfrac{n(E)}{n(S)}$ — the count of favorable outcomes over the total count. Two techniques make counting outcomes manageable: listing/organizing the full sample space (a grid for two dice, a tree for sequential flips), and the <b>complement rule</b> $P(E')=1-P(E)$, which is often far faster than counting the event directly — especially for \"at least one\" questions. All probability answers in this course should be exact fractions in lowest terms.",
  examples: [
    ["Example 1: Single die",
      "A fair six-sided die is rolled. Find $P(\\text{rolling a }4)$.",
      "Sample space: $S=\\{1,2,3,4,5,6\\}$, so $n(S)=6$. Only one outcome is favorable.<br>" +
      "$P(4)=\\dfrac{1}{6}$.<br>" +
      "<b>Answer:</b> $\\dfrac{1}{6}$."],

    ["Example 2: Event with multiple outcomes",
      "A fair die is rolled. Find $P(\\text{even})$.",
      fig(outcomeBoxes(6, [], [2, 4, 6]), "Favorable outcomes {2,4,6} highlighted out of the full sample space {1,...,6}.") +
      "Favorable outcomes: $\\{2,4,6\\}$, so $n(E)=3$; $n(S)=6$.<br>" +
      "$P(\\text{even})=\\dfrac{3}{6}=\\dfrac{1}{2}$ (always reduce to lowest terms).<br>" +
      "<b>Answer:</b> $\\dfrac{1}{2}$."],

    ["Example 3: Marbles",
      "A bag has $5$ red, $3$ blue, and $2$ green marbles. One is drawn at random. Find $P(\\text{green})$.",
      "$n(S)=5+3+2=10$ total marbles; $n(E)=2$ green.<br>" +
      "$P(\\text{green})=\\dfrac{2}{10}=\\dfrac{1}{5}$.<br>" +
      "<b>Answer:</b> $\\dfrac{1}{5}$."],

    ["Example 4: Complement rule",
      "Same bag ($5$ red, $3$ blue, $2$ green). Find $P(\\text{not red})$ using the complement.",
      "$P(\\text{red})=\\dfrac{5}{10}=\\dfrac12$.<br>" +
      "$P(\\text{not red})=1-P(\\text{red})=1-\\dfrac12=\\dfrac12$.<br>" +
      "<i>Check directly:</i> not red means blue or green: $\\dfrac{3+2}{10}=\\dfrac{5}{10}=\\dfrac12$. ✓<br>" +
      "<b>Answer:</b> $\\dfrac12$."],

    ["Example 5: Two coins — sample space tree",
      "Two fair coins are flipped. Find $P(\\text{exactly one head})$.",
      fig(probTree("H", "T", "H", "T", "H", "T"), "The tree shows all 4 equally likely outcomes: HH, HT, TH, TT.") +
      "$S=\\{HH,HT,TH,TT\\}$, so $n(S)=4$. \"Exactly one head\" matches $HT$ and $TH$: $n(E)=2$.<br>" +
      "$P(\\text{exactly one head})=\\dfrac{2}{4}=\\dfrac12$.<br>" +
      "<b>Answer:</b> $\\dfrac12$."],

    ["Example 6: Spinner",
      "A spinner is numbered $1$ through $8$, all equally likely. Find $P(\\text{greater than }5)$.",
      "Favorable: $\\{6,7,8\\}$, so $n(E)=3$; $n(S)=8$.<br>" +
      "$P=\\dfrac{3}{8}$ (already in lowest terms).<br>" +
      "<b>Answer:</b> $\\dfrac{3}{8}$."],

    ["Example 7: Standard deck of cards",
      "One card is drawn from a standard $52$-card deck. Find $P(\\text{heart})$.",
      "There are $13$ hearts in a deck of $52$ cards.<br>" +
      "$P(\\text{heart})=\\dfrac{13}{52}=\\dfrac14$ (divide by the GCF, $13$).<br>" +
      "<b>Answer:</b> $\\dfrac14$."],

    ["Example 8: Complement with a jar",
      "A jar has $6$ yellow and $9$ purple marbles. Find $P(\\text{not yellow})$.",
      "$n(S)=6+9=15$. $P(\\text{yellow})=\\dfrac{6}{15}=\\dfrac{2}{5}$.<br>" +
      "$P(\\text{not yellow})=1-\\dfrac25=\\dfrac35$.<br>" +
      "<b>Answer:</b> $\\dfrac35$."],

    ["Example 9: Three coins",
      "Three fair coins are flipped. Find $P(\\text{all three match})$.",
      "$S$ has $2^3=8$ equally likely outcomes: $HHH,HHT,HTH,HTT,THH,THT,TTH,TTT$.<br>" +
      "\"All match\" means $HHH$ or $TTT$: $n(E)=2$.<br>" +
      "$P=\\dfrac{2}{8}=\\dfrac14$.<br>" +
      "<b>Answer:</b> $\\dfrac14$."],

    ["Example 10: Two dice — sample space grid",
      "Two fair dice are rolled. Find $P(\\text{sum}=7)$.",
      fig(diceGrid(), "All 36 equally likely ordered pairs from rolling two dice.") +
      "$n(S)=6\\times6=36$. Sum of $7$: $(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)$ — exactly $6$ outcomes.<br>" +
      "$P(\\text{sum}=7)=\\dfrac{6}{36}=\\dfrac16$.<br>" +
      "<b>Answer:</b> $\\dfrac16$. <i>(Sum of $7$ is the single most likely sum on two dice.)</i>"],

    ["Example 11: \"At least one\" — complement with two dice",
      "Two fair dice are rolled. Find $P(\\text{at least one }6)$.",
      "Counting \"at least one $6$\" directly is messy — use the complement: \"no $6$ on either die.\"<br>" +
      "Each die has $5$ non-$6$ outcomes, so $n(\\text{no }6)=5\\times5=25$ out of $36$.<br>" +
      "$P(\\text{no }6)=\\dfrac{25}{36}$, so $P(\\text{at least one }6)=1-\\dfrac{25}{36}=\\dfrac{11}{36}$.<br>" +
      "<b>Answer:</b> $\\dfrac{11}{36}$."],
  ],
  questions: [
    ["Problem 1: Die", "Fair die. Find $P(\\text{odd})$.", "$\\dfrac12$"],
    ["Problem 2: Die", "Fair die. Find $P(\\text{at least }5)$.", "$\\dfrac13$"],
    ["Problem 3: Marbles", "Bag: $4$ red, $6$ blue. Find $P(\\text{red})$.", "$\\dfrac25$"],
    ["Problem 4: Complement", "Bag: $4$ red, $6$ blue. Find $P(\\text{not blue})$.", "$\\dfrac25$"],
    ["Problem 5: Coins", "Two fair coins. Find $P(\\text{two heads})$.", "$\\dfrac14$"],
    ["Problem 6: Spinner", "Spinner $1$–$10$. Find $P(\\text{multiple of }3)$.", "$\\dfrac{3}{10}$"],
    ["Problem 7: Cards", "Find $P(\\text{ace})$ from a $52$-card deck.", "$\\dfrac{1}{13}$"],
    ["Problem 8: Sample space", "List the sample space $S$ for one flip of a fair coin.", "$\\{H,T\\}$"],
    ["Problem 9: Range", "What is the range of possible probability values?", "$0$ to $1$, inclusive"],
    ["Problem 10: Certain event", "Find $P(\\text{die shows }1\\text{ through }6)$.", "$1$"],
    ["Problem 11: Impossible event", "Find $P(\\text{die shows }7)$.", "$0$"],
    ["Problem 12: Three coins", "Three fair coins. Find $P(\\text{exactly two heads})$.", "$\\dfrac38$"],
    ["Problem 13: Complement", "$P(E)=0.35$. Find $P(E')$.", "$0.65$"],
    ["Problem 14: Two dice", "Two fair dice. Find $P(\\text{sum}=8)$.", "$\\dfrac{5}{36}$"],
    ["Problem 15: Challenge", "Two fair dice are rolled. Find $P(\\text{sum is a prime number})$ — remember $2,3,5,7,11$ are the possible prime sums.", "$\\dfrac{5}{12}$"],
  ],
};
