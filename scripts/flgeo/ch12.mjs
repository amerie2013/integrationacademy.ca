import { L, lessonHtml } from "./_helpers.mjs";

export const ch = {};

// ── 12.1 — Introduction to Probability and Sample Spaces ──
ch["12.1"] = L("12.1", "Introduction to Probability and Sample Spaces (MA.912.DP.1.1)", [
  lessonHtml({
    title: "Introduction to Probability and Sample Spaces",
    emoji: "🎲",
    overview: `Probability measures how likely something is to happen, on a scale from \\(0\\) (impossible) to \\(1\\) (certain). Every probability question starts with the \\(\\textbf{sample space}\\) \\(S\\) — the complete list of every outcome that could possibly occur — and an \\(\\textbf{event}\\) \\(E\\), which is any subset of outcomes we care about. When every outcome is equally likely, probability becomes a simple counting ratio: favorable outcomes divided by total outcomes.`,
    toolkit: [
      `Sample space \\(S\\) = the set of all possible outcomes; an event \\(E\\) is any subset of \\(S\\)`,
      `For equally likely outcomes: \\(P(E) = \\dfrac{n(E)}{n(S)}\\)`,
      `Every probability satisfies \\(0 \\le P(E) \\le 1\\); \\(P(\\text{impossible}) = 0\\) and \\(P(\\text{certain}) = 1\\)`,
      `Complement rule: \\(P(E') = 1 - P(E)\\), where \\(E'\\) is "\\(E\\) does not happen"`,
      `The probabilities of all outcomes in a sample space always add up to \\(1\\)`,
    ],
    examples: [
      {
        h: "Basic probability from a die",
        p: "A fair six-sided die is rolled. Find \\(P(\\text{rolling a } 4)\\).",
        steps: [`Sample space: \\(S = \\{1,2,3,4,5,6\\}\\), so \\(n(S) = 6\\)`, `Only one outcome is favorable: \\(n(E) = 1\\)`, `\\(P(4) = \\dfrac{1}{6}\\)`],
        check: `\\(P(4) = \\dfrac{1}{6}\\).`,
      },
      {
        h: "Counting multiple favorable outcomes",
        p: "A fair six-sided die is rolled. Find \\(P(\\text{rolling an even number})\\).",
        steps: [`Favorable outcomes: \\(\\{2,4,6\\}\\), so \\(n(E) = 3\\)`, `\\(P(\\text{even}) = \\dfrac{3}{6}\\)`, `Simplify: \\(\\dfrac{3}{6} = \\dfrac{1}{2}\\)`],
        check: `\\(P(\\text{even}) = \\dfrac{1}{2}\\).`,
      },
      {
        h: "Probability from a bag of marbles",
        p: "A bag contains 5 red, 3 blue, and 2 green marbles. One marble is drawn at random. Find \\(P(\\text{green})\\).",
        steps: [`Total marbles: \\(n(S) = 5+3+2 = 10\\)`, `Favorable (green): \\(n(E) = 2\\)`, `\\(P(\\text{green}) = \\dfrac{2}{10} = \\dfrac{1}{5}\\)`],
        check: `\\(P(\\text{green}) = \\dfrac{1}{5}\\).`,
      },
      {
        h: "Using the complement rule",
        p: "Using the same bag (5 red, 3 blue, 2 green out of 10), find \\(P(\\text{not red})\\) using the complement rule.",
        steps: [`\\(P(\\text{red}) = \\dfrac{5}{10} = \\dfrac{1}{2}\\)`, `\\(P(\\text{not red}) = 1 - P(\\text{red}) = 1 - \\dfrac{1}{2}\\)`, `\\(P(\\text{not red}) = \\dfrac{1}{2}\\)`],
        check: `\\(P(\\text{not red}) = \\dfrac{1}{2}\\), matching the direct count of \\(\\tfrac{3+2}{10}\\).`,
      },
      {
        h: "Sample space with two coins",
        p: "Two fair coins are flipped. Find \\(P(\\text{exactly one head})\\).",
        steps: [`Sample space: \\(S = \\{HH, HT, TH, TT\\}\\), so \\(n(S)=4\\)`, `Favorable outcomes (exactly one head): \\(\\{HT, TH\\}\\), so \\(n(E) = 2\\)`, `\\(P(\\text{exactly one head}) = \\dfrac{2}{4} = \\dfrac{1}{2}\\)`],
        check: `\\(P = \\dfrac{1}{2}\\).`,
      },
    ],
    practice: [
      { q: "A fair six-sided die is rolled. Find \\(P(\\text{rolling an odd number})\\).", a: `\\(\\{1,3,5\\}\\), so \\(P = \\dfrac{3}{6} = \\dfrac{1}{2}\\)` },
      { q: "A spinner has 8 equal sections numbered 1–8. Find \\(P(\\text{spinning a number greater than } 5)\\).", a: `\\(\\{6,7,8\\}\\), so \\(P = \\dfrac{3}{8}\\)` },
      { q: "One card is drawn from a standard 52-card deck. Find \\(P(\\text{drawing a heart})\\).", a: `13 hearts out of 52: \\(P = \\dfrac{13}{52} = \\dfrac{1}{4}\\)` },
      { q: "A jar has 6 yellow and 9 purple candies. Find \\(P(\\text{not yellow})\\) using the complement rule.", a: `\\(P(\\text{yellow}) = \\dfrac{6}{15} = \\dfrac{2}{5}\\); \\(P(\\text{not yellow}) = 1-\\dfrac{2}{5} = \\dfrac{3}{5}\\)` },
      { q: "Three fair coins are flipped. Find \\(P(\\text{all three land the same})\\).", a: `\\(S\\) has \\(8\\) outcomes; favorable: \\(\\{HHH, TTT\\}\\), so \\(P = \\dfrac{2}{8} = \\dfrac{1}{4}\\)` },
    ],
    qa: [
      { q: "What condition must hold before I can use \\(P(E) = \\dfrac{n(E)}{n(S)}\\)?", a: "Every outcome in the sample space must be equally likely to occur." },
      { q: "What values can a probability take?", a: "Any value from 0 (impossible) to 1 (certain), including fractions and decimals in between." },
      { q: "What must be true about the probabilities of all outcomes in a sample space?", a: "They must add up to exactly 1, since one of them is guaranteed to happen." },
      { q: "How does the complement rule save work?", a: "Instead of counting every outcome in a large or awkward event, you can find the probability of the opposite (and often simpler) event and subtract from 1." },
      { q: "What's the difference between a sample space and an event?", a: "The sample space is the full list of everything that could happen; an event is just the specific outcomes you're interested in, a subset of the sample space." },
    ],
  }),
]);

// ── 12.2 — Independent and Dependent Events ──
ch["12.2"] = L("12.2", "Independent and Dependent Events (MA.912.DP.1.2)", [
  lessonHtml({
    title: "Independent and Dependent Events",
    emoji: "🪙",
    overview: `Two events are \\(\\textbf{independent}\\) if the outcome of one has no effect on the probability of the other — like flipping a coin and then rolling a die. Two events are \\(\\textbf{dependent}\\) if one outcome changes the probability of the next, which typically happens when you draw items \\(\\textbf{without replacement}\\) (removing an item shrinks the total left to choose from). In both cases, the probability that both events happen is found by multiplying, but for dependent events the second probability must account for what already happened.`,
    toolkit: [
      `Independent events: \\(P(A \\text{ and } B) = P(A) \\cdot P(B)\\)`,
      `Dependent events: \\(P(A \\text{ and } B) = P(A) \\cdot P(B \\text{ after } A)\\), where the second probability uses the updated (smaller) totals`,
      `"With replacement" usually signals independent events; "without replacement" usually signals dependent events`,
      `Tree diagrams are a useful way to organize the branching probabilities of sequential events`,
    ],
    examples: [
      {
        h: "Independent events (coin and die)",
        p: "A coin is flipped and a die is rolled. Find \\(P(\\text{heads and rolling a } 6)\\).",
        steps: [`The coin flip has no effect on the die roll, so the events are independent.`, `\\(P(\\text{heads}) = \\dfrac{1}{2}\\), \\(P(6) = \\dfrac{1}{6}\\)`, `\\(P(\\text{heads and } 6) = \\dfrac{1}{2}\\cdot\\dfrac{1}{6} = \\dfrac{1}{12}\\)`],
        check: `\\(P = \\dfrac{1}{12}\\).`,
      },
      {
        h: "Dependent events without replacement",
        p: "Two cards are drawn without replacement from a standard 52-card deck. Find \\(P(\\text{both are aces})\\).",
        steps: [
          `\\(P(\\text{first ace}) = \\dfrac{4}{52}\\)`,
          `After removing one ace, only 3 aces remain out of 51 cards: \\(P(\\text{second ace}) = \\dfrac{3}{51}\\)`,
          `\\(P(\\text{both aces}) = \\dfrac{4}{52}\\cdot\\dfrac{3}{51} = \\dfrac{12}{2652} = \\dfrac{1}{221}\\)`,
        ],
        check: `\\(P = \\dfrac{1}{221}\\).`,
      },
      {
        h: "Dependent events with a bag of marbles",
        p: "A bag has 4 red and 6 blue marbles (10 total). Two are drawn without replacement. Find \\(P(\\text{both blue})\\).",
        steps: [
          `\\(P(\\text{first blue}) = \\dfrac{6}{10}\\)`,
          `After removing one blue marble, 5 blue remain out of 9 total: \\(P(\\text{second blue}) = \\dfrac{5}{9}\\)`,
          `\\(P(\\text{both blue}) = \\dfrac{6}{10}\\cdot\\dfrac{5}{9} = \\dfrac{30}{90} = \\dfrac{1}{3}\\)`,
        ],
        check: `\\(P = \\dfrac{1}{3}\\).`,
      },
      {
        h: "The same bag, but with replacement",
        p: "Using the same bag (4 red, 6 blue), a marble is drawn, replaced, then a second is drawn. Find \\(P(\\text{both blue})\\).",
        steps: [
          `Because the marble is replaced, the bag is identical for both draws — the events are independent.`,
          `\\(P(\\text{blue}) = \\dfrac{6}{10} = \\dfrac{3}{5}\\) each time`,
          `\\(P(\\text{both blue}) = \\dfrac{3}{5}\\cdot\\dfrac{3}{5} = \\dfrac{9}{25}\\)`,
        ],
        check: `\\(P = \\dfrac{9}{25}\\), larger than the without-replacement case.`,
      },
      {
        h: "Two independent dice rolls",
        p: "Two dice are rolled. Find \\(P(\\text{first die shows } 3 \\text{ and second die shows } 5)\\).",
        steps: [`Each die's outcome has no effect on the other, so the events are independent.`, `\\(P(\\text{first is }3) = \\dfrac{1}{6}\\), \\(P(\\text{second is }5) = \\dfrac{1}{6}\\)`, `\\(P = \\dfrac{1}{6}\\cdot\\dfrac{1}{6} = \\dfrac{1}{36}\\)`],
        check: `\\(P = \\dfrac{1}{36}\\).`,
      },
    ],
    practice: [
      { q: "A coin is flipped and a spinner with 4 equal sections is spun. Find \\(P(\\text{tails and section } 2)\\).", a: `\\(\\dfrac{1}{2}\\cdot\\dfrac{1}{4} = \\dfrac{1}{8}\\)` },
      { q: "Two cards are drawn without replacement from a 52-card deck. Find \\(P(\\text{both are kings})\\).", a: `\\(\\dfrac{4}{52}\\cdot\\dfrac{3}{51} = \\dfrac{12}{2652} = \\dfrac{1}{221}\\)` },
      { q: "A bag has 3 green and 7 orange balls (10 total). Two are drawn without replacement. Find \\(P(\\text{both green})\\).", a: `\\(\\dfrac{3}{10}\\cdot\\dfrac{2}{9} = \\dfrac{6}{90} = \\dfrac{1}{15}\\)` },
      { q: "Using the same bag (3 green, 7 orange), a ball is drawn, replaced, and drawn again. Find \\(P(\\text{both green})\\).", a: `\\(\\dfrac{3}{10}\\cdot\\dfrac{3}{10} = \\dfrac{9}{100}\\)` },
      { q: "A die is rolled twice. Find \\(P(\\text{first roll is even and second roll is a } 1)\\).", a: `\\(\\dfrac{3}{6}\\cdot\\dfrac{1}{6} = \\dfrac{1}{2}\\cdot\\dfrac{1}{6} = \\dfrac{1}{12}\\)` },
    ],
    qa: [
      { q: "What makes two events independent versus dependent?", a: "Independent events don't affect each other's probabilities at all; dependent events do, usually because something was removed or changed between them." },
      { q: "Why does drawing \"without replacement\" change the denominator on the second draw?", a: "Removing an item shrinks both the total number of items and (if it matched) the number of favorable items left, which changes the second probability." },
      { q: "How is the \"and\" rule different for independent versus dependent events?", a: "For independent events you multiply the two separate probabilities directly; for dependent events the second probability must be recalculated based on what happened first." },
      { q: "When is a tree diagram useful?", a: "When there are several sequential events (like drawing three cards in a row) — it organizes every branch and its probability so nothing gets missed." },
      { q: "Can you give a real-world example of each type?", a: "Independent: today's weather and tomorrow's coin flip. Dependent: drawing two socks from a drawer without putting the first one back changes what's left to draw." },
    ],
  }),
]);

// ── 12.3 — Conditional Probability ──
ch["12.3"] = L("12.3", "Conditional Probability (MA.912.DP.1.4)", [
  lessonHtml({
    title: "Conditional Probability",
    emoji: "📊",
    overview: `Conditional probability answers a narrower question: given that we already know \\(B\\) happened, what's the probability that \\(A\\) also happened? It's written \\(P(A \\mid B)\\), read "the probability of \\(A\\) given \\(B\\)." This is especially useful for reading two-way tables, where you can zoom in on just one row or column instead of the whole table.`,
    toolkit: [
      `\\(P(A \\mid B) = \\dfrac{P(A \\text{ and } B)}{P(B)}\\)`,
      `From a two-way table: \\(P(A\\mid B) = \\dfrac{\\text{count of } (A \\text{ and } B)}{\\text{total count of } B}\\)`,
      `\\(A\\) and \\(B\\) are independent exactly when \\(P(A\\mid B) = P(A)\\) (knowing \\(B\\) didn't change anything)`,
      `Be careful: \\(P(A\\mid B)\\) and \\(P(B\\mid A)\\) are usually different quantities`,
    ],
    examples: [
      {
        h: "Reading a two-way table",
        p: "A survey of 100 students gives: 40 boys like sports, 10 boys dislike sports, 20 girls like sports, 30 girls dislike sports. Find \\(P(\\text{likes sports} \\mid \\text{boy})\\).",
        steps: [`Restrict attention to boys only: \\(40+10 = 50\\) boys total.`, `Of those, 40 like sports.`, `\\(P(\\text{likes sports}\\mid\\text{boy}) = \\dfrac{40}{50} = \\dfrac{4}{5}\\)`],
        check: `\\(P = \\dfrac{4}{5}\\).`,
      },
      {
        h: "Reversing the condition",
        p: "Using the same table, find \\(P(\\text{boy} \\mid \\text{likes sports})\\).",
        steps: [`Restrict attention to students who like sports: \\(40+20 = 60\\) total.`, `Of those, 40 are boys.`, `\\(P(\\text{boy}\\mid\\text{likes sports}) = \\dfrac{40}{60} = \\dfrac{2}{3}\\)`],
        check: `\\(P = \\dfrac{2}{3}\\), different from the previous example.`,
      },
      {
        h: "Using the conditional probability formula directly",
        p: "\\(P(A \\text{ and } B) = 0.15\\) and \\(P(B) = 0.25\\). Find \\(P(A \\mid B)\\).",
        steps: [`\\(P(A\\mid B) = \\dfrac{P(A\\text{ and }B)}{P(B)} = \\dfrac{0.15}{0.25}\\)`, `\\(P(A\\mid B) = 0.6 = \\dfrac{3}{5}\\)`],
        check: `\\(P(A\\mid B) = \\dfrac{3}{5}\\).`,
      },
      {
        h: "Checking for independence",
        p: "\\(P(A) = 0.4\\) and \\(P(A\\mid B) = 0.4\\). Are \\(A\\) and \\(B\\) independent?",
        steps: [`Independence requires \\(P(A\\mid B) = P(A)\\).`, `Since \\(0.4 = 0.4\\), the condition holds.`],
        check: "Yes — A and B are independent, since knowing B occurred didn't change the probability of A.",
      },
      {
        h: "Conditional probability with cards",
        p: "One card is drawn from a standard deck. Find \\(P(\\text{King} \\mid \\text{face card})\\).",
        steps: [`There are 12 face cards (J, Q, K in each of 4 suits).`, `Of those, 4 are Kings.`, `\\(P(\\text{King}\\mid\\text{face card}) = \\dfrac{4}{12} = \\dfrac{1}{3}\\)`],
        check: `\\(P = \\dfrac{1}{3}\\).`,
      },
    ],
    practice: [
      { q: "In a two-way table: 30 seniors play a sport, 20 seniors do not, 25 juniors play a sport, 25 juniors do not. Find \\(P(\\text{plays a sport}\\mid\\text{senior})\\).", a: `\\(\\dfrac{30}{50} = \\dfrac{3}{5}\\)` },
      { q: "Using the same table, find \\(P(\\text{senior}\\mid\\text{plays a sport})\\).", a: `Total who play a sport: \\(30+25=55\\); \\(\\dfrac{30}{55} = \\dfrac{6}{11}\\)` },
      { q: "\\(P(A\\text{ and }B) = 0.12\\) and \\(P(B) = 0.3\\). Find \\(P(A\\mid B)\\).", a: `\\(\\dfrac{0.12}{0.3} = 0.4 = \\dfrac{2}{5}\\)` },
      { q: "\\(P(A) = 0.5\\) and \\(P(A\\mid B) = 0.5\\). Are A and B independent? Explain.", a: "Yes, since P(A|B) = P(A) — knowing B occurred did not change the probability of A." },
      { q: "One card is drawn from a standard deck. Find \\(P(\\text{a heart} \\mid \\text{a red card})\\).", a: `26 red cards, 13 of which are hearts: \\(\\dfrac{13}{26} = \\dfrac{1}{2}\\)` },
    ],
    qa: [
      { q: "What is the formula for conditional probability?", a: `\\(P(A\\mid B) = \\dfrac{P(A\\text{ and }B)}{P(B)}\\)` },
      { q: "How do I find a conditional probability from a two-way table?", a: "Restrict yourself to just the row or column named after the condition, then divide the count you want by that restricted total." },
      { q: "How is \\(P(A\\mid B)\\) different from \\(P(A\\text{ and }B)\\)?", a: "P(A and B) is out of the entire sample space, while P(A|B) is out of only the outcomes where B already happened — a smaller, more focused group." },
      { q: "How can I use conditional probability to test for independence?", a: "Compare P(A|B) to P(A). If they're equal, A and B are independent; if not, they're dependent." },
      { q: "What's a common mistake with conditional probability?", a: "Mixing up P(A|B) with P(B|A) — they usually give different answers, since they're conditioning on different information." },
    ],
  }),
]);

// ── 12.4 — Permutations and Combinations ──
ch["12.4"] = L("12.4", "Permutations and Combinations (MA.912.DP.1.3)", [
  lessonHtml({
    title: "Permutations and Combinations",
    emoji: "🔢",
    overview: `Permutations and combinations are two ways of counting how many ways a selection can be made — the difference comes down to one question: does order matter? Use a \\(\\textbf{permutation}\\) when arranging things in order (like ranking runners 1st, 2nd, 3rd), and a \\(\\textbf{combination}\\) when simply choosing a group (like picking committee members, where no one is "first"). These counts often become the numerator or denominator in a probability calculation.`,
    toolkit: [
      `Factorial: \\(n! = n\\cdot(n-1)\\cdot(n-2)\\cdots 2\\cdot 1\\), and \\(0! = 1\\) by definition`,
      `Permutation (order matters): \\(_{n}P_{r} = \\dfrac{n!}{(n-r)!}\\)`,
      `Combination (order doesn't matter): \\(_{n}C_{r} = \\dfrac{n!}{r!(n-r)!}\\)`,
      `Relationship: \\(_{n}P_{r} = {_{n}C_{r}} \\cdot r!\\), since a combination becomes a permutation once you also arrange the chosen \\(r\\) items`,
      `Ask "does swapping two chosen items create a different outcome?" — if yes, use a permutation; if no, use a combination`,
    ],
    examples: [
      {
        h: "Permutation — a race",
        p: "5 runners compete, and we want to know the number of ways 1st, 2nd, and 3rd place can be awarded. How many outcomes are possible?",
        steps: [`Order matters here (1st is different from 2nd), so use a permutation.`, `\\(_5P_3 = \\dfrac{5!}{(5-3)!} = \\dfrac{5!}{2!}\\)`, `\\(_5P_3 = \\dfrac{120}{2} = 60\\)`],
        check: `\\(_5P_3 = 60\\).`,
      },
      {
        h: "Combination — a committee",
        p: "How many ways can a committee of 3 students be chosen from a class of 8?",
        steps: [`A committee has no ranking — order doesn't matter, so use a combination.`, `\\(_8C_3 = \\dfrac{8!}{3!\\,5!}\\)`, `\\(_8C_3 = \\dfrac{8\\cdot7\\cdot6}{3\\cdot2\\cdot1} = \\dfrac{336}{6} = 56\\)`],
        check: `\\(_8C_3 = 56\\).`,
      },
      {
        h: "Permutation — arranging letters",
        p: "How many 4-letter arrangements (no repeats) can be made from the 7 letters A, B, C, D, E, F, G?",
        steps: [`The order of the letters matters, so use a permutation.`, `\\(_7P_4 = \\dfrac{7!}{(7-4)!} = \\dfrac{7!}{3!}\\)`, `\\(_7P_4 = 7\\cdot6\\cdot5\\cdot4 = 840\\)`],
        check: `\\(_7P_4 = 840\\).`,
      },
      {
        h: "Combination — pizza toppings",
        p: "A pizza shop offers 10 toppings. How many different 3-topping pizzas can be made (order of toppings doesn't matter)?",
        steps: [`Choosing toppings has no order, so use a combination.`, `\\(_{10}C_3 = \\dfrac{10!}{3!\\,7!} = \\dfrac{10\\cdot9\\cdot8}{3\\cdot2\\cdot1}\\)`, `\\(_{10}C_3 = \\dfrac{720}{6} = 120\\)`],
        check: `\\(_{10}C_3 = 120\\).`,
      },
      {
        h: "Using counting in a probability problem",
        p: "5 different books are placed on a shelf in a completely random order. Find the probability they land in one specific order (say, alphabetical).",
        steps: [`Total arrangements: \\(5! = 120\\)`, `Only 1 of those arrangements is the specific order asked for.`, `\\(P(\\text{that exact order}) = \\dfrac{1}{120}\\)`],
        check: `\\(P = \\dfrac{1}{120}\\).`,
      },
    ],
    practice: [
      { q: "How many ways can 6 people be arranged in a line for a photo?", a: `\\(6! = 720\\)` },
      { q: "How many ways can a coach choose a starting lineup of 5 players (unordered) from a team of 12?", a: `\\(_{12}C_5 = \\dfrac{12!}{5!\\,7!} = 792\\)` },
      { q: "How many ways can gold, silver, and bronze medals be awarded among 10 competitors?", a: `\\(_{10}P_3 = \\dfrac{10!}{7!} = 720\\)` },
      { q: "A student must answer any 4 of 6 essay questions on a test (order doesn't matter). How many ways can they choose which 4 to answer?", a: `\\(_6C_4 = \\dfrac{6!}{4!\\,2!} = 15\\)` },
      { q: "A password uses 3 different letters (no repeats) chosen from A–E, and order matters. How many different passwords are possible, and what's the probability of guessing the correct one on the first try?", a: `\\(_5P_3 = \\dfrac{5!}{2!} = 60\\) passwords; probability of guessing correctly \\(= \\dfrac{1}{60}\\)` },
    ],
    qa: [
      { q: "How do I decide whether a problem needs a permutation or a combination?", a: "Ask whether rearranging the chosen items would count as a different outcome. If yes (like race places), use a permutation; if no (like a committee), use a combination." },
      { q: "What does \\(n!\\) mean, and why is \\(0! = 1\\)?", a: "n! is the product of all positive integers up to n. 0! is defined as 1 so that formulas like nCr and nPr keep working correctly at the boundary cases (like choosing 0 items)." },
      { q: "How are \\(_nP_r\\) and \\(_nC_r\\) related?", a: "A permutation is a combination followed by arranging the chosen r items in order, so \\(_nP_r = {_nC_r}\\cdot r!\\)." },
      { q: "Why do permutations and combinations show up in probability problems?", a: "They're often the fastest way to count the total number of outcomes (denominator) or the number of favorable outcomes (numerator) when a direct listing would be too long." },
      { q: "Is choosing a starting lineup with assigned positions a permutation or a combination?", a: "A permutation — once each spot has a specific role (like pitcher vs. catcher), swapping two players creates a genuinely different lineup, so order matters." },
    ],
  }),
]);

// ── 12.5 — Probability Models and Real-World Applications ──
ch["12.5"] = L("12.5", "Probability Models and Real-World Applications (MA.912.DP.1.5)", [
  lessonHtml({
    title: "Probability Models and Real-World Applications",
    emoji: "📈",
    overview: `A probability model lists every possible outcome of a situation along with its probability — and those probabilities must always add up to \\(1\\). Models can come from theory (like a fair coin) or from observed data (\\(\\textbf{experimental probability}\\), found from relative frequency in real trials). Once you have a model, you can compute an \\(\\textbf{expected value}\\) — a long-run average outcome — which is a powerful tool for comparing choices and judging whether a game or decision is "fair."`,
    toolkit: [
      `A probability model assigns a probability to every outcome, and all probabilities must sum to \\(1\\)`,
      `Theoretical probability comes from reasoning about equally likely outcomes; experimental probability comes from data: \\(\\dfrac{\\text{times it happened}}{\\text{total trials}}\\)`,
      `Expected value: \\(E = \\sum (\\text{outcome value}) \\times (\\text{its probability})\\)`,
      `A game is "fair" when its expected value equals its cost — neither side is expected to gain or lose on average`,
      `With more trials, experimental probability tends to get closer to theoretical probability (the law of large numbers)`,
    ],
    examples: [
      {
        h: "Building a probability model",
        p: "A spinner has 4 equal-sized sections colored red, blue, green, and yellow. Build the probability model and confirm it's valid.",
        steps: [`Each of the 4 equally sized sections has the same chance: \\(P(\\text{each color}) = \\dfrac{1}{4}\\)`, `Check the total: \\(\\dfrac{1}{4}+\\dfrac{1}{4}+\\dfrac{1}{4}+\\dfrac{1}{4} = 1\\)`],
        check: "The model is valid since the probabilities sum to 1.",
      },
      {
        h: "Experimental probability",
        p: "A basketball player made 18 of her last 25 free throws in practice. Estimate the probability she makes her next free throw.",
        steps: [`Experimental probability \\(= \\dfrac{\\text{successes}}{\\text{trials}} = \\dfrac{18}{25}\\)`, `This fraction is already in lowest terms (gcd(18,25) = 1).`],
        check: `\\(P(\\text{make next shot}) \\approx \\dfrac{18}{25}\\).`,
      },
      {
        h: "Expected value and fairness",
        p: "A game costs $2 to play. You win $10 with probability \\(\\dfrac{1}{10}\\), and win nothing otherwise. Find the expected winnings, and decide if the game is fair.",
        steps: [
          `\\(E = 10\\left(\\dfrac{1}{10}\\right) + 0\\left(\\dfrac{9}{10}\\right)\\)`,
          `\\(E = 1 + 0 = 1\\)`,
          `The expected winnings ($1) are less than the $2 cost to play, so the game is not fair — the player is expected to lose $1 per play, on average.`,
        ],
        check: "Expected value = $1; the game is not fair (favors the house).",
      },
      {
        h: "Weighted probability model",
        p: "A weighted spinner has \\(P(\\text{red}) = 0.5\\), \\(P(\\text{blue}) = 0.3\\), and \\(P(\\text{green}) = 0.2\\). Find \\(P(\\text{not green})\\) as a fraction in lowest terms.",
        steps: [`Check the model: \\(0.5+0.3+0.2 = 1\\), so it's valid.`, `\\(P(\\text{not green}) = 1 - 0.2 = 0.8\\)`, `As a fraction: \\(0.8 = \\dfrac{8}{10} = \\dfrac{4}{5}\\)`],
        check: `\\(P(\\text{not green}) = \\dfrac{4}{5}\\).`,
      },
      {
        h: "Expected value in a real decision",
        p: "A $500 appliance has a 2% chance of needing a $500 warranty repair within a year. Is it worth buying a $15 warranty?",
        steps: [
          `Expected repair cost without warranty: \\(E = 500(0.02) + 0(0.98) = 10\\)`,
          `The expected cost of *not* buying the warranty is $10, which is less than the $15 warranty price.`,
          `On average, skipping the warranty is the better financial choice — though it does carry more risk in any single year.`,
        ],
        check: "Expected repair cost ($10) < warranty price ($15), so the warranty isn't worth it on average.",
      },
    ],
    practice: [
      { q: "A weighted coin lands heads with probability 0.6. Build the probability model for one flip and confirm it's valid.", a: "P(heads) = 0.6, P(tails) = 0.4; 0.6 + 0.4 = 1, so the model is valid." },
      { q: "A player made 21 of her last 30 serves in volleyball practice. Estimate the probability of her next serve landing in, as a fraction in lowest terms.", a: `\\(\\dfrac{21}{30} = \\dfrac{7}{10}\\)` },
      { q: "A raffle ticket costs $5. There's a \\(\\dfrac{1}{100}\\) chance of winning $300, otherwise you win nothing. Find the expected value and state whether the raffle is fair.", a: `\\(E = 300\\left(\\dfrac{1}{100}\\right) = 3\\); since $3 < $5, the raffle is not fair (it favors the organizer)` },
      { q: "A model gives \\(P(A) = 0.35\\), \\(P(B) = 0.4\\), and \\(P(C) = x\\), where A, B, and C are the only outcomes. Find \\(x\\).", a: `\\(x = 1 - 0.35 - 0.4 = 0.25\\)` },
      { q: "A $1200 laptop has a 4% chance of needing a $1200 repair this year. Would a $60 protection plan be worth it, based on expected value alone?", a: `Expected repair cost \\(= 1200(0.04) = 48\\); since $48 < $60, skipping the plan is better on average` },
    ],
    qa: [
      { q: "What must always be true of a valid probability model?", a: "The probabilities of all the listed outcomes must add up to exactly 1." },
      { q: "What's the difference between theoretical and experimental probability?", a: "Theoretical probability is calculated by reasoning about equally likely outcomes ahead of time; experimental probability is calculated after the fact, from actual observed data." },
      { q: "How do I calculate expected value?", a: "Multiply each possible outcome's value by its probability, then add all of those products together." },
      { q: "What does it mean for a game to be \"fair\"?", a: "A game is fair when its expected value exactly equals the cost to play — over many plays, neither the player nor the house is expected to come out ahead." },
      { q: "Why does experimental probability get closer to theoretical probability with more trials?", a: "This is the law of large numbers — small samples can be skewed by chance, but as the number of trials grows, random fluctuations average out and the results settle near the true theoretical probability." },
    ],
  }),
]);
