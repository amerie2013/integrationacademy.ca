// MDM4U chapter 2 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
// Math uses $…$ delimiters; every probability is computed.
import { diceGridSvg, lineSvg, barsSvg, spinnerSvg, vennSvg, treeSvg, tableSvg, poolSvg, seatsSvg } from "../mdm4u/figs.mjs";
import { C, fact, r3 } from "../mdm4u/count.mjs";

const T = {
  1: "2.1 Introduction to Probability", 2: "2.2 Experimental vs Theoretical Probability", 3: "2.3 Odds & the Complement",
  4: "2.4 Mutually Exclusive Events & the Additive Rule", 5: "2.5 Independent & Dependent Events", 6: "2.6 Conditional Probability",
  7: "2.7 Tree Diagrams & Probability Tables", 8: "2.8 Counting & Probability",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const dist = Array.from({ length: 6 }, (_, d) => { let c = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (Math.abs(a - b) === d) c++; return c; });

export const WRITTEN = [
  W(1, "medium", 4, S`Two dice are rolled and the absolute difference of the numbers is recorded. (a) Complete the probability distribution of the difference. (b) Show that the probabilities add to 1. (c) Which difference is most likely?`,
    S`(a) $0:\frac6{36},\ 1:\frac{10}{36},\ 2:\frac8{36},\ 3:\frac6{36},\ 4:\frac4{36},\ 5:\frac2{36}$. (b) $\frac{36}{36}=1$. (c) a difference of 1. [2, 1, 1.]`,
    diceGridSvg(() => false, { label: (a, b) => Math.abs(a - b) })),
  W(2, "medium", 4, S`A class simulated rolling a die and recorded the relative frequency of rolling a 4 after every 25 rolls (graph). (a) State the theoretical probability. (b) Describe the trend in the graph. (c) Explain why the early values differ so much from the theoretical value.`,
    S`(a) $\frac16\approx0.167$. (b) The relative frequency varies a lot at first, then settles close to 0.167. (c) With few trials, chance variation is a large part of the total; as trials increase it becomes a small fraction (law of large numbers). [1, 2, 1.]`,
    lineSvg([0.28, 0.22, 0.2, 0.19, 0.176, 0.173, 0.169, 0.165], { p: 1 / 6, xs: [25, 50, 75, 100, 125, 150, 175, 200], ymax: 0.4, nt: 4, xlabel: "rolls", ylabel: "rel. freq. of 4" })),
  W(2, "hard", 5, S`(a) Design a simulation using random digits to estimate the probability that a basketball player who makes 75% of free throws makes at least 4 of 5 attempts. (b) Calculate the theoretical probability. (c) A simulation of 200 trials gave 128 successes. Compare and comment.`,
    S`(a) Two-digit numbers 00–74 = make; one trial = 5 numbers; success = at least 4 makes; repeat many times. (b) $0.75^5+5(0.75)^4(0.25)=${r3(0.75 ** 5 + 5 * 0.75 ** 4 * 0.25)}$. (c) $\frac{128}{200}=0.64$, close to ${r3(0.75 ** 5 + 5 * 0.75 ** 4 * 0.25)}; more trials would give a closer estimate. [2, 2, 1.]`,
    barsSvg([0.75, 0.25], { labels: ["make", "miss"], top: true, fmt: (v) => v.toFixed(2), ylabel: "probability" })),
  W(3, "medium", 4, S`The spinner is spun three times. (a) Find P(it never lands on red). (b) Find P(it lands on red at least once). (c) Give the odds in favour of landing on red at least once, and explain why the complement was useful.`,
    S`(a) $\left(\frac23\right)^3=\frac8{27}$. (b) $1-\frac8{27}=\frac{19}{27}$. (c) $19:8$; “at least once” has three cases, its complement only one. [1, 1, 2.]`,
    spinnerSvg([["R", 1 / 3, "red"], ["B", 1 / 3, "blue"], ["G", 1 / 3, "green"]], { r: 60 })),
  W(4, "medium", 4, S`In a school of 400 students, 180 play a sport, 150 are in a club and 70 do both. (a) Draw a Venn diagram. (b) Find P(a student plays a sport or is in a club). (c) Find P(exactly one of the two) and P(neither).`,
    S`(a) Only sport 110, both 70, only club 80, neither 140. (b) $\frac{260}{400}=0.65$. (c) $\frac{190}{400}=0.475$; $\frac{140}{400}=0.35$. [1, 1, 2.]`,
    vennSvg({ A: "sport", B: "club", U: "400" })),
  W(4, "hard", 5, S`A number is chosen at random from 1 to 60. Let A = “divisible by 3”, B = “divisible by 4”, C = “divisible by 5”. (a) Find P(A), P(B), P(C). (b) Find P(A ∪ B ∪ C) using inclusion–exclusion. (c) Find P(divisible by none of 3, 4, 5).`,
    S`(a) $\frac{20}{60},\frac{15}{60},\frac{12}{60}$. (b) $\frac{20+15+12-5-4-3+1}{60}=\frac{36}{60}=0.6$. (c) $0.4$. [1, 3, 1.]`,
    vennSvg({ A: "÷3", B: "÷4", C: "÷5", n: { abc: 1 }, U: "60" })),
  W(5, "medium", 4, S`A bag holds 5 red and 3 blue marbles. Two marbles are drawn. (a) Find P(both red) with replacement. (b) Find P(both red) without replacement. (c) Explain why the answers differ, using the words independent and dependent.`,
    S`(a) $\frac{25}{64}\approx${r3(25 / 64)}$. (b) $\frac58\cdot\frac47=\frac5{14}\approx${r3(5 / 14)}$. (c) With replacement the draws are independent; without replacement the first red changes the bag, so the draws are dependent. [1, 1, 2.]`,
    poolSvg([[5, "red", "red"], [3, "blue", "blue"]], { per: 8 })),
  W(5, "hard", 5, S`A security system has two alarms that work independently, with reliabilities 0.92 and 0.85. (a) Find P(both work). (b) Find P(at least one works). (c) How reliable must a third independent alarm be so that P(at least one of three works) is at least 0.999?`,
    S`(a) $0.782$. (b) $1-0.08(0.15)=0.988$. (c) $1-0.012q\ge0.999\Rightarrow q\le0.0833$: reliability at least about $0.917$. [1, 2, 2.]`,
    barsSvg([0.92, 0.85], { labels: ["alarm 1", "alarm 2"], top: true, fmt: (v) => v.toFixed(2), ylabel: "reliability" })),
  W(6, "medium", 4, S`Use the table of 250 students. (a) Find P(takes the bus | Grade 9). (b) Find P(Grade 9 | takes the bus). (c) Are “Grade 9” and “takes the bus” independent? Justify.`,
    S`(a) $\frac{48}{80}=0.6$. (b) $\frac{48}{120}=0.4$. (c) $P(\text{bus})=0.48\ne0.6$: not independent. [1, 1, 2.]`,
    tableSvg([["", "bus", "other", "total"], ["Grade 9", "48", "32", "80"], ["Grades 10–12", "72", "98", "170"], ["total", "120", "130", "250"]], { rowHead: true })),
  W(6, "hard", 5, S`A family has three children (boys and girls equally likely, independent). (a) Find P(three girls | the first child is a girl). (b) Find P(three girls | at least one girl). (c) Explain why the answers to (a) and (b) are different.`,
    S`(a) $\frac14$. (b) $\frac{1/8}{7/8}=\frac17$. (c) “First is a girl” leaves 4 equally likely outcomes; “at least one girl” leaves 7, so the reduced sample spaces differ. [1, 2, 2.]`,
    treeSvg([{ t: "G", c: [{ t: "G", c: [{ t: "G" }, { t: "B" }] }, { t: "B", c: [{ t: "G" }, { t: "B" }] }] }, { t: "B", c: [{ t: "G", c: [{ t: "G" }, { t: "B" }] }, { t: "B", c: [{ t: "G" }, { t: "B" }] }] }], { heads: ["1st", "2nd", "3rd"] })),
  W(7, "hard", 6, S`2% of a population has a condition. A screening test is positive for 96% of people with the condition and for 5% of people without it. (a) Draw a tree diagram. (b) Find P(positive). (c) Find P(condition | positive). (d) Explain why a positive result is not very convincing here, and suggest what could be done next.`,
    S`(a) Branches 0.02/0.98, then 0.96/0.04 and 0.05/0.95. (b) $0.0192+0.049=0.0682$. (c) $\frac{0.0192}{0.0682}\approx${r3(0.0192 / 0.0682)}$. (d) The condition is rare, so false positives from the large healthy group outnumber true positives; a second, more specific test would help. [1, 2, 2, 1.]`,
    treeSvg([{ t: "C", p: "0.02", c: [{ t: "+", p: "0.96" }, { t: "−", p: "0.04" }] }, { t: "C′", p: "0.98", c: [{ t: "+", p: "0.05" }, { t: "−", p: "0.95" }] }], { heads: ["condition", "test"] })),
  W(8, "medium", 4, S`A committee of 4 is chosen at random from 6 teachers and 5 students. (a) Find P(exactly 2 students). (b) Find P(at least one student). (c) Explain why combinations are used in both numerator and denominator.`,
    S`(a) $\frac{\binom52\binom62}{\binom{11}4}=\frac{150}{330}=\frac5{11}$. (b) $1-\frac{\binom64}{\binom{11}4}=1-\frac{15}{330}=\frac{21}{22}$. (c) A committee has no order, and every committee is equally likely. [2, 1, 1.]`,
    poolSvg([[6, "amber", "teachers"], [5, "blue", "students"]], { per: 11 })),
  W(8, "hard", 5, S`Eight people, including Ana and Ben, sit at random. (a) In a row: find P(Ana and Ben sit together). (b) Around a round table: find P(Ana and Ben sit together). (c) Around the table: find P(Ana and Ben sit directly opposite). (d) Explain why the answers to (a) and (b) differ.`,
    S`(a) $\frac{7!\cdot2}{8!}=\frac14$. (b) $\frac{6!\cdot2}{7!}=\frac27$. (c) Fix Ana; 1 of 7 seats: $\frac17$. (d) A row has ends: a person at an end has only one neighbour, so being together is less likely. [1, 1, 1, 2.]`,
    seatsSvg(["Ana", "", "", "", "Ben", "", "", ""], { hl: [0, 4] })),
];
