import { fig, probBars, dataTable } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "12.5",
  title: "Probability Models and Expected Value",
  intro: "A <b>probability model</b> assigns a probability to every outcome in a sample space; it's valid only if every probability is between $0$ and $1$ and they all sum to exactly $1$. <b>Theoretical probability</b> comes from a formula or equally-likely-outcomes assumption; <b>experimental probability</b> comes from actual trial data ($\\dfrac{\\text{occurrences}}{\\text{trials}}$) — the Law of Large Numbers says the experimental value tends to approach the theoretical one as trials increase. <b>Expected value</b>, $E=\\sum(\\text{outcome}\\times\\text{its probability})$, is the long-run average result and is central to deciding whether a game, raffle, or insurance decision favors you or the house — even though it may never equal any single actual outcome.",
  examples: [
    ["Example 1: Checking a valid model",
      "Outcomes $A$, $B$, $C$ have probabilities $0.2$, $0.5$, $0.3$. Is this a valid probability model?",
      fig(probBars(["A", "B", "C"], [0.2, 0.5, 0.3]), "Each bar is between 0 and 1, and together they account for the whole sample space.") +
      "Check two conditions for a valid model: (1) each probability is between $0$ and $1$ — yes for all three; (2) they sum to exactly $1$: $0.2+0.5+0.3=1$. ✓<br>" +
      "<b>Answer:</b> Yes, valid."],

    ["Example 2: Spotting an invalid model",
      "Probabilities $0.4$, $0.4$, $0.4$ are proposed for three outcomes. Valid?",
      fig(probBars(["1", "2", "3"], [0.4, 0.4, 0.4]), "Each individual bar looks fine (between 0 and 1), but the required check is whether they sum to exactly 1.") +
      "Each value is between $0$ and $1$ on its own, but check the sum: $0.4+0.4+0.4=1.2\\neq1$.<br>" +
      "<b>Answer:</b> No — the probabilities must sum to exactly $1$, and $1.2\\neq1$."],

    ["Example 3: Experimental probability",
      "A coin is flipped $80$ times, landing heads $36$ times. Find the experimental $P(\\text{heads})$.",
      "$P_{\\text{exp}}(\\text{heads})=\\dfrac{36}{80}=\\dfrac{9}{20}=0.45$.<br>" +
      "<b>Answer:</b> $0.45$ (or $\\dfrac{9}{20}$)."],

    ["Example 4: Theoretical probability, for comparison",
      "For the same fair coin, what is the theoretical $P(\\text{heads})$?",
      "A fair coin has two equally likely outcomes: $P(\\text{heads})=\\dfrac12=0.5$.<br>" +
      "<b>Answer:</b> $0.5$. <i>Compare to Example 3's $0.45$ — with only $80$ flips, experimental results can still drift from the theoretical value.</i>"],

    ["Example 5: Expected value — two outcomes",
      "A game pays \\$10 with probability $0.3$, and \\$0 otherwise. Find the expected value.",
      "Identify the formula: $E=\\sum(\\text{outcome}\\times\\text{its probability})$, summed over every possible outcome.<br>" +
      "Compute: $E=10(0.3)+0(0.7)=3+0=3$.<br>" +
      "<b>Answer:</b> \\$3 — the long-run average payout per play."],

    ["Example 6: Is the game fair?",
      "A game costs \\$4 to play and has expected payout \\$4. Is it fair?",
      "A game is <b>fair</b> exactly when the expected payout equals the cost to play (expected net gain $=0$).<br>" +
      "$4=4$, so yes.<br>" +
      "<b>Answer:</b> Fair."],

    ["Example 7: Expected net gain (or loss)",
      "A game costs \\$5 to play; it pays \\$20 with probability $0.2$, and \\$0 otherwise. Find the expected net gain.",
      "<b>Step 1 — expected payout:</b> $E(\\text{payout})=20(0.2)+0(0.8)=4$.<br>" +
      "<b>Step 2 — expected net:</b> subtract the cost: $4-5=-1$.<br>" +
      "<b>Answer:</b> expected net $=-1$ (an average loss of \\$1 per play — the game favors the house)."],

    ["Example 8: Law of Large Numbers",
      "As the number of trials increases, what happens to the experimental probability?",
      "It tends to get closer and closer to the theoretical probability — large samples smooth out the random \"noise\" that small samples show (like Example 3's $0.45$ vs. the true $0.5$).<br>" +
      "<b>Answer:</b> it approaches the theoretical probability."],

    ["Example 9: Finding a missing probability",
      "A spinner model has $P(\\text{red})=\\dfrac12$, $P(\\text{blue})=\\dfrac13$, and $P(\\text{green})=x$. Find $x$.",
      "All probabilities must sum to $1$:<br>" +
      "$\\dfrac12+\\dfrac13+x=1$<br>" +
      "Common denominator $6$: $\\dfrac36+\\dfrac26+x=1 \\Rightarrow \\dfrac56+x=1 \\Rightarrow x=\\dfrac16$.<br>" +
      "<b>Answer:</b> $x=\\dfrac16$."],

    ["Example 10: Multi-tier expected value — a raffle",
      "$1000$ raffle tickets are sold. One grand prize of \\$500 is drawn, and $5$ second prizes of \\$50 each are also drawn (all from the same $1000$ tickets, no ticket wins twice). Each ticket costs \\$1. Find the expected winnings per ticket, and whether buying a ticket is a good deal on average.",
      fig(dataTable(["Outcome", "Probability", "Payout"], [["Grand prize", "1/1000", "$500"], ["Second prize (5 of them)", "5/1000", "$50 each"], ["No prize", "994/1000", "$0"]]),
        "Expected value sums each outcome's probability times its payout across every row.") +
      "<b>Grand prize term:</b> $500\\times\\dfrac{1}{1000}=0.50$.<br>" +
      "<b>Second prize term:</b> $50\\times\\dfrac{5}{1000}=50\\times\\dfrac{1}{200}=0.25$.<br>" +
      "<b>All other tickets win \\$0</b>, contributing nothing to the sum.<br>" +
      "$E(\\text{winnings})=0.50+0.25=0.75$, i.e. \\$0.75.<br>" +
      "Expected net $=0.75-1=-0.25$, i.e. a loss of \\$0.25 per ticket.<br>" +
      "<b>Answer:</b> $E=0.75$ dollars; not a good deal on average — every ticket loses \\$0.25 in expectation (typical for raffles, since the organizer keeps a share)."],

    ["Example 11: Expected value in a real decision — is a warranty worth it?",
      "A \\$500 laptop has an $8\\%$ chance of needing a \\$300 repair within a year. An extended warranty covering that repair costs \\$35. Using expected value, decide whether buying the warranty is the better choice on average.",
      "<b>Expected repair cost without the warranty:</b> $E=300(0.08)+0(0.92)=24$.<br>" +
      "<b>Cost with the warranty:</b> a guaranteed \\$35 (assuming it fully covers the repair).<br>" +
      "Since the expected repair cost (\\$24) is less than the warranty (\\$35), skipping the warranty is cheaper <i>on average</i> — by $35-24=11$ dollars.<br>" +
      "<b>Answer:</b> skipping the warranty saves \\$11 in expectation. <i>Caveat: expected value describes the long-run average — someone risk-averse might still prefer the warranty's certainty over the small chance of a \\$300 hit.</i>"],
  ],
  questions: [
    ["Problem 1: Valid model?", "Probabilities $0.1$, $0.6$, $0.3$. Valid?", "Yes"],
    ["Problem 2: Valid model?", "Probabilities $0.5$, $0.5$, $0.2$. Valid?", "No (sum $=1.2$)"],
    ["Problem 3: Experimental", "$50$ trials, event occurs $18$ times. Find the experimental probability.", "$\\dfrac{9}{25}$"],
    ["Problem 4: Theoretical", "Fair die. Find the theoretical $P(6)$.", "$\\dfrac16$"],
    ["Problem 5: Expected value", "A game pays \\$8 with probability $0.25$, else \\$0. Find $E$.", "\\$2"],
    ["Problem 6: Fair game?", "Cost \\$2; expected payout \\$2. Fair?", "Yes"],
    ["Problem 7: Expected net", "Cost \\$3; pays \\$12 with probability $0.2$. Find the expected net.", "$-0.60$ (a loss of \\$0.60)"],
    ["Problem 8: Find $x$", "Model: $0.4$, $0.35$, $x$. Find $x$.", "$0.25$"],
    ["Problem 9: Experimental", "$200$ flips, $108$ heads. Find the experimental $P(\\text{heads})$.", "$0.54$"],
    ["Problem 10: Expected value", "Outcomes \\$1 and \\$5 with probabilities $0.8$ and $0.2$. Find $E$.", "\\$1.80"],
    ["Problem 11: Fair game?", "Cost \\$5; expected payout \\$4. Fair?", "No — favors the house"],
    ["Problem 12: Law of Large Numbers", "As trials increase, experimental probability tends toward what?", "The theoretical probability"],
    ["Problem 13: Model rule", "In a valid probability model, what must all outcome probabilities sum to?", "$1$"],
    ["Problem 14: Raffle", "$500$ tickets sold; $1$ prize of \\$250 and $10$ prizes of \\$10 each. Find the expected winnings per ticket.", "\\$0.70"],
    ["Problem 15: Challenge", "A \\$500 laptop has an $8\\%$ chance of needing a \\$300 repair. An extended warranty costs \\$35. Using expected value, determine whether the warranty is a good deal on average, and by how much.", "Not a good deal on average; skipping it saves \\$11 in expectation"],
  ],
};
