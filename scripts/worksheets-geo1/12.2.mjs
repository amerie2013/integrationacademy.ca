import { fig, probTree, outcomeBoxes } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "12.2",
  title: "Independent and Dependent Events",
  intro: "Two events are <b>independent</b> if the outcome of one has no effect on the probability of the other (a coin flip doesn't change a die roll) — then $P(A\\text{ and }B)=P(A)\\cdot P(B)$, using the <i>same</i> probability for $B$ regardless of $A$. Two events are <b>dependent</b> if one outcome changes the probability of the next — the classic signal is drawing <b>without replacement</b>, where removing an item changes the totals for the next draw. This worksheet practises multiplying along both types of chains, recognizing which type a situation is, and extending to three or more sequential events.",
  examples: [
    ["Example 1: Independent events — coin and die",
      "A coin is flipped and a die is rolled. Find $P(\\text{heads and a }6)$.",
      fig(probTree("Coin", "—", "Die", "—", "Die", "—"), "Independent events: the coin's outcome doesn't change the die's probabilities on either branch.") +
      "The coin and die don't affect each other, so multiply the individual probabilities directly:<br>" +
      "$P(\\text{heads})\\times P(6)=\\dfrac12\\times\\dfrac16=\\dfrac{1}{12}$.<br>" +
      "<b>Answer:</b> $\\dfrac{1}{12}$."],

    ["Example 2: Dependent — cards without replacement",
      "Two cards are drawn from a $52$-card deck without replacement. Find $P(\\text{both are aces})$.",
      fig(probTree("Ace", "Not ace", "Ace", "Not ace", "Ace", "Not ace"), "Second-draw probabilities depend on whether an ace was already removed — a dependent chain.") +
      "<b>First draw:</b> $4$ aces out of $52$ cards: $P(\\text{ace}_1)=\\dfrac{4}{52}$.<br>" +
      "<b>Second draw</b> (one ace already removed, one fewer card total): $P(\\text{ace}_2\\mid\\text{ace}_1)=\\dfrac{3}{51}$.<br>" +
      "Multiply along the chain: $P(\\text{both aces})=\\dfrac{4}{52}\\times\\dfrac{3}{51}=\\dfrac{12}{2652}=\\dfrac{1}{221}$.<br>" +
      "<b>Answer:</b> $\\dfrac{1}{221}$."],

    ["Example 3: Marbles — dependent (without replacement)",
      "A bag has $4$ red and $6$ blue marbles. Two are drawn without replacement. Find $P(\\text{both blue})$.",
      "<b>First draw:</b> $\\dfrac{6}{10}$.<br>" +
      "<b>Second draw</b> (one blue removed — now $5$ blue out of $9$ total): $\\dfrac{5}{9}$.<br>" +
      "$P(\\text{both blue})=\\dfrac{6}{10}\\times\\dfrac{5}{9}=\\dfrac{30}{90}=\\dfrac13$.<br>" +
      "<b>Answer:</b> $\\dfrac13$."],

    ["Example 4: Same bag — with replacement (independent)",
      "Same bag ($4$ red, $6$ blue), but each marble is put back before the next draw. Find $P(\\text{both blue})$.",
      "With replacement, the bag resets, so both draws use the same probability — this makes the events <b>independent</b>:<br>" +
      "$P(\\text{both blue})=\\dfrac{6}{10}\\times\\dfrac{6}{10}=\\dfrac{36}{100}=\\dfrac{9}{25}$.<br>" +
      "<b>Answer:</b> $\\dfrac{9}{25}$. <i>Compare to Example 3 ($\\tfrac13\\approx0.333$) vs. here ($\\tfrac{9}{25}=0.36$) — replacing slightly raises the probability, since the pool never shrinks.</i>"],

    ["Example 5: Identify independent vs. dependent",
      "State whether each is independent or dependent, with a one-sentence reason: (a) rolling a die twice; (b) drawing two cards without replacement; (c) drawing two cards with replacement.",
      "<b>(a) Independent</b> — the first roll doesn't change the die or its probabilities for the second roll.<br>" +
      "<b>(b) Dependent</b> — removing the first card changes both the count of remaining cards and possibly the count of the target card.<br>" +
      "<b>(c) Independent</b> — replacing the card resets the deck to its original state before the second draw.<br>" +
      "<b>Answer:</b> (a) independent, (b) dependent, (c) independent."],

    ["Example 6: Two dice — independent",
      "Two fair dice are rolled. Find $P(\\text{both show }1)$.",
      fig(outcomeBoxes(6, [], [1]) + '<div style="text-align:center;font-size:16px;font-weight:700;color:#475569;margin:2px 0">&times;</div>' + outcomeBoxes(6, [], [1]),
        "Each die independently favors outcome 1; multiply the two separate probabilities.") +
      "Each die is unaffected by the other:<br>" +
      "$P(1\\text{ and }1)=\\dfrac16\\times\\dfrac16=\\dfrac{1}{36}$.<br>" +
      "<b>Answer:</b> $\\dfrac{1}{36}$."],

    ["Example 7: Cards — different ranks, without replacement",
      "Two cards are drawn without replacement. Find $P(\\text{king, then queen})$.",
      "<b>First draw</b> (king): $\\dfrac{4}{52}$.<br>" +
      "<b>Second draw</b> (queen — total cards drop to $51$, but queens are untouched since a king was removed, not a queen): $\\dfrac{4}{51}$.<br>" +
      "$P(\\text{king then queen})=\\dfrac{4}{52}\\times\\dfrac{4}{51}=\\dfrac{16}{2652}=\\dfrac{4}{663}$.<br>" +
      "<b>Answer:</b> $\\dfrac{4}{663}$."],

    ["Example 8: Coins — heads then tails",
      "Two fair coins are flipped in order. Find $P(\\text{heads then tails})$.",
      "Independent flips: $\\dfrac12\\times\\dfrac12=\\dfrac14$.<br>" +
      "<b>Answer:</b> $\\dfrac14$. <i>Note this is different from \"exactly one head\" (Lesson 12.1), which also counts tails-then-heads.</i>"],

    ["Example 9: Marbles — three colors, without replacement",
      "A bag has $3$ green and $5$ yellow marbles. Two are drawn without replacement. Find $P(\\text{both green})$.",
      "<b>First draw:</b> $3$ green out of $8$ total: $\\dfrac{3}{8}$.<br>" +
      "<b>Second draw</b> (one green removed — now $2$ green out of $7$ total): $\\dfrac{2}{7}$.<br>" +
      "Multiply along the chain: $\\dfrac{3}{8}\\times\\dfrac{2}{7}=\\dfrac{6}{56}=\\dfrac{3}{28}$.<br>" +
      "<b>Answer:</b> $\\dfrac{3}{28}$."],

    ["Example 10: Three-stage dependent chain",
      "Three cards are drawn from a $52$-card deck without replacement. Find $P(\\text{all three are aces})$.",
      "Chain three dependent draws, each removing one ace and one card from the totals:<br>" +
      "$P=\\dfrac{4}{52}\\times\\dfrac{3}{51}\\times\\dfrac{2}{50}$.<br>" +
      "Numerator: $4\\times3\\times2=24$. Denominator: $52\\times51\\times50=132{,}600$.<br>" +
      "$P=\\dfrac{24}{132{,}600}$. Divide both by $24$: $\\dfrac{1}{5525}$.<br>" +
      "<b>Answer:</b> $\\dfrac{1}{5525}$."],

    ["Example 11: Word problem — quality control (independence assumption)",
      "A factory's defect rate is $2\\%$ ($P(\\text{defective})=0.02$). Two items are chosen at random from a very large batch. Find $P(\\text{both are defective})$.",
      "Because the batch is very large, removing one item barely changes the defect rate for the next — the events are treated as (approximately) independent, so $P(\\text{defective})=0.02=\\dfrac{1}{50}$ for each pick.<br>" +
      "$P(\\text{both defective})=\\dfrac{1}{50}\\times\\dfrac{1}{50}=\\dfrac{1}{2500}$.<br>" +
      "<b>Answer:</b> $\\dfrac{1}{2500}$ (or $0.0004$)."],
  ],
  questions: [
    ["Problem 1: Independent", "A coin is flipped and a die is rolled. Find $P(\\text{tails and even})$.", "$\\dfrac14$"],
    ["Problem 2: With replacement", "Bag: $5$ red, $5$ blue. With replacement, find $P(\\text{both red})$.", "$\\dfrac14$"],
    ["Problem 3: Without replacement", "Same bag. Without replacement, find $P(\\text{both red})$.", "$\\dfrac29$"],
    ["Problem 4: Identify", "Two rolls of a die: independent or dependent?", "Independent"],
    ["Problem 5: Cards", "Without replacement, find $P(\\text{two hearts})$.", "$\\dfrac{1}{17}$"],
    ["Problem 6: Dice", "Two dice rolled. Find $P(\\text{both even})$.", "$\\dfrac14$"],
    ["Problem 7: Marbles", "$2$ red, $8$ blue. Without replacement, find $P(\\text{both red})$.", "$\\dfrac{1}{45}$"],
    ["Problem 8: With replacement", "$2$ red, $8$ blue. With replacement, find $P(\\text{both red})$.", "$\\dfrac{1}{25}$"],
    ["Problem 9: Coins", "Three fair coins. Find $P(HHH)$.", "$\\dfrac18$"],
    ["Problem 10: Tree diagram", "Why is a tree diagram useful for sequential (multi-stage) events?", "It organizes every branching outcome and its probability, making them easy to multiply and add"],
    ["Problem 11: Cards", "Without replacement, find $P(\\text{ace then king})$.", "$\\dfrac{4}{663}$"],
    ["Problem 12: Signal words", "The phrase \"without replacement\" usually signals which type of events?", "Dependent"],
    ["Problem 13: Multiply rule", "Independent events: $P(A)=\\dfrac13$, $P(B)=\\dfrac12$. Find $P(A\\text{ and }B)$.", "$\\dfrac16$"],
    ["Problem 14: Three-stage", "Three marbles are drawn without replacement from a bag of $3$ red and $5$ blue. Find $P(\\text{all three red})$.", "$\\dfrac{1}{56}$"],
    ["Problem 15: Challenge", "A bag has $6$ white and $4$ black balls. Three balls are drawn without replacement. Find $P(\\text{exactly the order white, white, black})$, as a fraction in lowest terms.", "$\\dfrac{1}{6}$"],
  ],
};
