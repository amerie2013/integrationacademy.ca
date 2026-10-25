// MDM4U 3.2 — Expected Value: E(X) = Σ x·P(X = x), the weighted mean, fair games, expected profit and payouts,
// insurance and lotteries, and how adding a constant or multiplying every value changes E(X)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, fig, barsSvg, spinnerSvg, tableSvg } from "./lib.mjs";
import { r3, ev } from "../mdm4u/count.mjs";

export const TITLE = "3.2 Expected Value";
export const ID = "f445142c-fe9c-4266-9bba-362f43f74776";
const S = String.raw;

// six cases: three hold 1 dollar, two hold 1000, one holds 100 000 (curriculum-style)
const cases = [[1, 3 / 6], [1000, 2 / 6], [100000, 1 / 6]];
const Ecases = ev(cases);

export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Expected Value",
    overview: S`The <strong>expected value</strong> of a discrete random variable is the long-run average value over many repetitions: \[E(X)=\sum x\,P(X=x)=x_1P(x_1)+x_2P(x_2)+\cdots.\] It is a <strong>weighted mean</strong> of the values, each weighted by its probability. A game is <strong>fair</strong> when the expected net gain is 0. Changing every value changes the expected value in a predictable way: \(E(X+c)=E(X)+c\) and \(E(kX)=k\,E(X)\).`,
    goals: [
      "calculate the expected value of a probability distribution;",
      "interpret E(X) as a long-run average, not a single outcome;",
      "connect expected value with the weighted mean;",
      "decide whether a game is fair and find a fair price;",
      "predict how adding a constant or multiplying each value changes E(X).",
    ],
    curriculum: "B1.2 (calculate the expected value E(X) = Σ x P(X = x), interpret it in applications, and connect it to the weighted mean)",
    prior: [
      ["Find the mean of 2, 4, 4, 10.", "5."],
      ["Find 0.2(50) + 0.8(10).", "18."],
      ["A die is rolled. What is P(6)?", "1/6."],
    ],
    words: [
      ["Expected value E(X)", "Σ x·P(X = x): the long-run average", "a die: 3.5"],
      ["Weighted mean", "each value counted by its weight", "Σ wx / Σ w"],
      ["Fair game", "expected net gain 0", "pay 1 dollar to win 2 on heads"],
      ["Net gain", "winnings minus the cost to play", "win 5 − pay 2 = +3"],
    ],
  }),

  section("📌 The long-run average", S`
  <p>A fair die: \(E(X)=1\cdot\frac16+2\cdot\frac16+\cdots+6\cdot\frac16=\frac{21}{6}=3.5\). You can never roll 3.5, but the average of many rolls approaches it.</p>
  <p>Six closed cases: three hold 1 dollar, two hold 1000 dollars and one holds 100 000 dollars. One is chosen at random:</p>
  ${table(["x (dollars)", "1", "1000", "100 000"], [["P(X = x)", "3/6", "2/6", "1/6"], ["x·P(X = x)", "0.50", `${r3(2000 / 6, 2)}`, `${r3(100000 / 6, 2)}`]])}
  <p>\(E(X)=${r3(Ecases, 2)}\) dollars. Most players win 1 dollar; the rare large prize pulls the average up.</p>
  ${fig(barsSvg([3 / 6, 2 / 6, 1 / 6], { labels: ["$1", "$1000", "$100 000"], top: ["3/6", "2/6", "1/6"], ylabel: "probability" }), "most likely outcome: 1 dollar; expected value: about 17 000 dollars")}
  ${keyIdea(S`The expected value is a weighted mean: \(\frac{3(1)+2(1000)+1(100\,000)}{6}\) is the same calculation.`)}`),

  section("📌 Changing every value", S`
  ${table(["Change", "New values", "New expected value"], [["add c to every value", "\\(x+c\\)", "\\(E(X)+c\\)"], ["multiply every value by k", "\\(kx\\)", "\\(k\\,E(X)\\)"], ["both", "\\(kx+c\\)", "\\(k\\,E(X)+c\\)"]])}
  <p>Adding 10 000 dollars to each case gives \(E=${r3(Ecases + 10000, 2)}\); multiplying each amount by 10 gives \(E=${r3(10 * Ecases, 2)}\).</p>
  ${keyIdea(S`A game with cost \(c\) is fair when \(E(\text{winnings})=c\), i.e. expected net gain \(=0\).`)}`),

  section("📌 Explore", S`<p>Design a game: set three prizes, their probabilities and a cost to play. Find the cost that makes the game fair, then try “add $50” and “double” to see how E(X) changes.</p>`),

  widget("expectedGame", { init: [100, 10, 0] }),

  section("📌 Watch out", watchOut([
    "Use net values (winnings minus cost) when asked for expected profit or gain.",
    "The expected value need not be a possible outcome.",
    "Check that the probabilities add to 1 before calculating.",
    "A negative expected gain means the player loses money in the long run.",
  ])),

  examples([
    ["A spinner", "A spinner pays 10 dollars with probability 0.1, 4 dollars with probability 0.3 and nothing otherwise. Find the expected payout.",
      [S`\(E=10(0.1)+4(0.3)+0(0.6)=1+1.2\).`],
      "2.20 dollars",
      fig(spinnerSvg([["$10", 0.1, "green"], ["$4", 0.3, "blue"], ["$0", 0.6, "gray"]], { r: 60 }))],
    ["Fair price", "For the spinner above, what price per spin makes the game fair?",
      [S`Fair when the price equals the expected payout.`],
      "2.20 dollars"],
    ["Expected profit", "A raffle sells 500 tickets at 5 dollars each for one prize worth 1500 dollars. Find the expected net gain for a ticket.",
      [S`Net: win \(1500-5=1495\) with \(\frac1{500}\); lose \(-5\) with \(\frac{499}{500}\).`, S`\(E=1495\cdot\frac1{500}-5\cdot\frac{499}{500}=2.99-4.99\).`],
      "−2.00 dollars per ticket"],
    ["Insurance", "An insurer sells a one-year policy for 400 dollars. With probability 0.002 it pays 100 000 dollars, with probability 0.01 it pays 5000 dollars. Find the insurer's expected profit per policy.",
      [S`Expected payout: \(100\,000(0.002)+5000(0.01)=200+50=250\).`, S`Profit \(=400-250\).`],
      "150 dollars"],
    ["From a table", "Use the table to find the expected number of goals per game for a hockey team.",
      [S`\(0(0.15)+1(0.3)+2(0.3)+3(0.15)+4(0.1)=0.3+0.6+0.45+0.4\).`],
      "1.75 goals",
      fig(tableSvg([["goals x", "0", "1", "2", "3", "4"], ["P(X = x)", "0.15", "0.3", "0.3", "0.15", "0.1"]], { rowHead: true }))],
  ]),

  practice([
    q("die", "What is the expected value of a roll of a fair 8-sided die (1 to 8)?", num(4.5), "Sum ÷ 8.", [S`\(\frac{36}8\).`], "4.5"),
    q("table", "P(X = 0) = 0.5, P(X = 2) = 0.3, P(X = 5) = 0.2. Find E(X).", num(1.6), "Σ x·P.", [S`\(0+0.6+1\).`], "1.6"),
    q("game", "A game pays 6 dollars if a die shows 6 and nothing otherwise. What is the expected payout (dollars)?", num(1), "6 × 1/6.", [S`\(1\).`], "1"),
    q("shift", "E(X) = 12. What is E(X + 5)?", num(17), "Add 5.", [S`\(12+5\).`], "17"),
    q("fair", "A game has expected net gain −0.40 dollars. Is it fair?", choice(["no, it favours the organizer", "yes", "no, it favours the player", "cannot tell"], 0), "Fair means 0.", ["−0.40 < 0."], "no"),
  ]),

  ...hard([
    ["Making a game fair", "A player pays 2 dollars to roll two dice. A sum of 12 pays k dollars, a sum of 7 pays 5 dollars, anything else pays nothing. Find k so the game is fair.",
      [S`Expected payout \(=k\cdot\frac1{36}+5\cdot\frac6{36}=\frac{k+30}{36}\).`, S`Fair: \(\frac{k+30}{36}=2\Rightarrow k=42\).`],
      "k = 42 dollars"],
    ["Scaling and shifting", "A game's winnings X have E(X) = 3.5 dollars. A new version pays 2X + 1 dollars and costs 9 dollars. Is the new version fair?",
      [S`\(E(2X+1)=2(3.5)+1=8\).`, S`Net \(=8-9=-1\): not fair; the player loses 1 dollar per game on average.`],
      "no: expected net −1 dollar",
      fig(barsSvg([3.5, 8, 9], { labels: ["E(X)", "E(2X + 1)", "cost"], top: true, hl: [2], fmt: (v) => v.toFixed(1), ylabel: "dollars" }))],
  ], [
    q("hard", "A lottery ticket costs 3 dollars. Prizes: 10 000 dollars (P = 0.0001), 100 dollars (P = 0.002), 5 dollars (P = 0.05). Find the expected net gain (dollars).", num(1 + 0.2 + 0.25 - 3), "Expected winnings − 3.", [S`\(1+0.2+0.25-3\).`], "−1.55"),
    q("hard", "X takes values 1, 2, 3 with P(1) = 0.2, P(2) = a, P(3) = b and E(X) = 2.3. Find b.", num(0.5), "a + b = 0.8 and 0.2 + 2a + 3b = 2.3.", [S`\(2a+3b=2.1\), \(2a+2b=1.6\Rightarrow b=0.5\).`], "0.5"),
    q("hard", "Two dice are rolled. A player wins the larger number in dollars. What is the expected win (dollars, 2 decimals)?", num(r3(161 / 36, 2), 0.01), "P(max = k) = (2k − 1)/36.", [S`\(\frac{1+6+15+28+45+66}{36}=\frac{161}{36}\).`], "4.47"),
  ]),

  wrapUp({
    qas: [
      ["Can the expected value be an impossible outcome?", "Yes — a die's expected value is 3.5. It is a long-run average, not a prediction of one roll."],
      ["How is E(X) a weighted mean?", "Each value is weighted by its probability; with frequencies, Σfx/Σf gives the same idea."],
      ["How do I find a fair price?", "Set the price equal to the expected winnings."],
      ["What does adding a bonus to every prize do?", "It adds the same amount to E(X); doubling every prize doubles E(X)."],
      ["Why do casinos and insurers profit?", "Their expected profit per bet or policy is positive, so over many customers they gain."],
    ],
    summary: [
      "E(X) = Σ x·P(X = x).",
      "Fair game: expected net gain 0.",
      "E(X + c) = E(X) + c; E(kX) = kE(X).",
      "Expected value is a long-run average.",
    ],
    next: "3.3 studies the simplest distribution: every value equally likely.",
  }),
];
