// IB AA SL Worksheet 8.4 — Tree Diagrams (teacher edition)
import { svgT } from "./figT.mjs";
import { treeDoc } from "../figs8.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Independent stages", q: "A spinner lands on green with probability 0.35. It is spun twice. Draw a tree diagram and find P(two greens).",
    fig: svgT(treeDoc([["G", "0.35"], ["N", "0.65"]], [[["G", "0.35"], ["N", "0.65"]], [["G", "0.35"], ["N", "0.65"]]], { highlight: ["00"] }), 6),
    steps: [S`Multiply along the branch: $0.35\times0.35$.`], ans: "0.1225" },
  { title: "Adding paths", q: "Using the same spinner, find P(exactly one green).",
    steps: [S`GN + NG: $2\times0.35\times0.65$.`], ans: "0.455" },
  { title: "Without replacement", q: "A box holds 5 white and 3 black beads. Two are taken without replacement. Find P(both black).",
    fig: svgT(treeDoc([["W", "5/8"], ["B", "3/8"]], [[["W", "4/7"], ["B", "3/7"]], [["W", "5/7"], ["B", "2/7"]]], { highlight: ["11"] }), 6),
    steps: [S`$\frac38\times\frac27$.`], ans: S`$\frac{6}{56}=\frac{3}{28}$` },
  { title: "Different colours", q: "For the beads above, find P(one of each colour).",
    steps: [S`WB + BW: $\frac{15}{56}+\frac{15}{56}$.`], ans: S`$\frac{30}{56}=\frac{15}{28}$` },
  { title: "Dependent events", q: "If Sam revises, P(pass) = 0.85; if not, P(pass) = 0.4. P(Sam revises) = 0.65. Find P(Sam passes).",
    fig: svgT(treeDoc([["R", "0.65"], ["R′", "0.35"]], [[["P", "0.85"], ["P′", "0.15"]], [["P", "0.4"], ["P′", "0.6"]]], { highlight: ["00", "10"] }), 6),
    steps: [S`$0.65(0.85)+0.35(0.4)=0.5525+0.14$.`], ans: "0.6925" },
  { title: "Reverse conditional", q: "Given that Sam passed, find P(Sam revised).",
    steps: [S`$\frac{0.5525}{0.6925}$.`], ans: S`$\approx0.798$` },
  { title: "At least one", q: "Each of three independent alarms works with probability 0.9. Find P(at least one works).",
    steps: [S`$1-P(\text{none})=1-0.1^3$.`], ans: "0.999" },
  { title: "Three stages", q: "A fair coin is tossed three times. Find P(exactly two heads) using a tree.",
    steps: ["8 equally likely end points, each 1/8.", "HHT, HTH, THH."], ans: S`$\frac38$` },
  { title: "Until a success", q: "A player has at most two attempts at a jump, succeeding each time with probability 0.55. Find P(success).",
    fig: svgT(treeDoc([["S", "0.55"], ["F", "0.45"]], [[], [["S", "0.55"], ["F", "0.45"]]], { highlight: ["10"] }), 6),
    steps: [S`$0.55+0.45\times0.55=0.55+0.2475$.`], ans: "0.7975" },
];

const PROBLEMS = [
  { level: 1, q: "A biased coin has P(H) = 0.7. It is tossed twice. Find P(two tails).", recap: "Multiply along.", ans: "0.09" },
  { level: 1, q: "A bag has 2 yellow and 3 purple balls. One is taken, replaced, then another taken. Find P(both yellow).", recap: "With replacement.", ans: S`$\frac{4}{25}$` },
  { level: 1, q: "Complete the tree: P(A) = 0.45. Write P(A′) on the other first branch.", recap: "Branches sum to 1.", ans: "0.55",
    fig: svgT(treeDoc([["A", "0.45"], ["A′", "?"]], [[["B", "0.3"], ["B′", "0.7"]], [["B", "0.6"], ["B′", "0.4"]]], { ends: false }), 5) },
  { level: 2, q: "Using the completed tree above, find P(B).", recap: "Add the B paths.", ans: S`$0.135+0.33=0.465$` },
  { level: 2, q: "A box has 6 good and 2 broken pencils. Two are chosen without replacement. Find P(at least one broken).", recap: "1 − none.", ans: S`$1-\frac{30}{56}=\frac{13}{28}$` },
  { level: 2, q: "Ali wins a game with probability 0.6 and Bea with 0.45, independently. Find P(exactly one of them wins).", recap: "Two paths.", ans: S`$0.6(0.55)+0.4(0.45)=0.51$` },
  { level: 2, q: "Two cards are drawn without replacement from a standard pack. Find P(both are aces).", recap: "Dependent.", ans: S`$\frac{4}{52}\cdot\frac{3}{51}=\frac{1}{221}$` },
  { level: 2, q: "P(bus late) = 0.15. If late, P(Jo late for work) = 0.8; if not, 0.05. Find P(Jo late for work).", recap: "Two-stage.", ans: S`$0.12+0.0425=0.1625$` },
  { level: 3, space: 4, q: "For the bus problem, given Jo is late for work, find P(the bus was late).", recap: "Reverse.", ans: S`$\frac{0.12}{0.1625}\approx0.738$` },
  { level: 3, space: 4, q: "A bag has n red and 4 green sweets. Two are eaten. P(both green) = 2/15. Find n.", recap: "Equation.", ans: S`$\frac{4\cdot3}{(n+4)(n+3)}=\frac{2}{15}\Rightarrow n=6$` },
  { level: 3, space: 4, q: "A test is passed with probability 0.3 at each independent attempt. How many attempts are needed so that P(at least one pass) > 0.95?", recap: "Inequality.", ans: S`$1-0.7^n>0.95\Rightarrow n=9$` },
  { level: 3, space: 4, q: "Three cards are taken without replacement from 5 red and 5 black. Find P(all the same colour).", recap: "Three stages.", ans: S`$2\cdot\frac{5}{10}\cdot\frac49\cdot\frac38=\frac16$` },
  { level: 3, space: 4, q: "A and B take turns throwing a die, A first; the first to throw a 6 wins. Find P(A wins on A's second throw).", recap: "Longer path.", ans: S`$\left(\frac56\right)^3\frac16=\frac{125}{1296}$` },
];

export const WS = {
  code: "8.4",
  title: "Tree Diagrams",
  bigideas: S`A tree diagram shows events in stages. Write probabilities on the branches; each set of branches from one point adds to 1. Multiply along a path for 'and'; add the paths for 'or'. Without replacement, the second-stage probabilities change. Conditional probabilities sit on the second branches, so $P(A\mid B)=\frac{P(A\cap B)}{P(B)}$ uses the paths that end in B. 'At least one' $=1-P(\text{none})$.`,
  goals: ["Draw tree diagrams.", "Multiply along and add between paths.", "Handle without replacement.", "Find reverse conditional probabilities."],
  curriculum: "SL 4.6",
  vocab: [["Branch", "one outcome at one stage"], ["Path", "a sequence of branches"], ["Without replacement", "second probabilities change"]],
  hook: "Two penalties: the striker scores 80% of the time. Ask the class to guess P(scores both), then draw the tree to check.",
  concepts: [
    ["1. Building a tree", S`${svgT(treeDoc([["G", "0.35"], ["N", "0.65"]], [[["G", "0.35"], ["N", "0.65"]], [["G", "0.35"], ["N", "0.65"]]]), 5)} Each pair of branches sums to 1.`],
    ["2. And / or", "Multiply along a path; add different paths."],
    ["3. Conditional", "Second branches are conditional probabilities."],
  ],
  tips: ["Label every branch.", "Check sums to 1.", "Change the denominators without replacement.", "Use 1 − none for at least one.", "Divide by the given total."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
