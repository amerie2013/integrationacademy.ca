// IB AA SL chapter 8 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { vennDoc, treeDoc, gridDoc, relFreqDoc } from "./figs8.mjs";

const T = { 1: "8.1 Theoretical and Experimental Probability", 2: "8.2 Venn Diagrams and Sample Spaces", 3: "8.3 Conditional Probability and Independence", 4: "8.4 Tree Diagrams" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const D = [1, 2, 3, 4, 5, 6];
const run = (seed, p, n) => { let s = seed, c = 0; return Array.from({ length: n }, (_, i) => { s = (s * 1103515245 + 12345) % 2147483648; if (s / 2147483648 < p) c++; return c / (i + 1); }); };

export const WRITTEN = [
  W(1, "medium", 4, S`Two fair dice are rolled and the absolute difference of the scores is recorded (grid shown). (a) Find P(difference = 0). (b) Find P(difference ≥ 4). (c) Which difference is most likely? Justify.`,
    S`(a) $\frac{6}{36}=\frac16$. (b) differences 4 and 5: $\frac{4+2}{36}=\frac16$. (c) difference 1, which occurs 10 times (more than any other). [1, 2, 1.]`,
    gridDoc(D, D, { cell: (a, b) => Math.abs(a - b), rowName: "first die", colName: "second die" })),
  W(1, "hard", 5, S`A thumbtack is dropped repeatedly and the relative frequency of 'point up' is graphed. After 200 drops it had landed point up 74 times. (a) Estimate P(point up). (b) Explain why the early relative frequencies are unreliable. (c) Find the expected number of 'point up' results in 650 drops. (d) A student claims the probability is exactly 0.37. Comment.`,
    S`(a) $\frac{74}{200}=0.37$. (b) with few trials, each result changes the proportion a lot. (c) $650\times0.37=240.5$. (d) 0.37 is only an estimate; more trials would give a more reliable value, but it can never be known exactly from an experiment. [1, 1, 1, 2.]`,
    relFreqDoc(run(613, 0.37, 200), 0.37, { label: "relative frequency of point up" })),
  W(2, "medium", 4, S`In a group of 50 students, 28 study art, 19 study music and 12 study neither. (a) Copy and complete the Venn diagram. (b) Find P(art and music). (c) Find P(exactly one of the two subjects).`,
    S`(a) art or music: 38, so both $=28+19-38=9$; art only 19, music only 10, neither 12. (b) $\frac{9}{50}$. (c) $\frac{19+10}{50}=\frac{29}{50}$. [2, 1, 1.]`,
    vennDoc({}, { names: ["Art", "Music"] })),
  W(2, "hard", 5, S`The Venn diagram shows probabilities with $P(A\cap B)=x$, $P(A\cap B')=0.3$, $P(A'\cap B)=2x$ and $P(A'\cap B')=0.4$. (a) Find $x$. (b) Find $P(A\cup B)$. (c) Show that A and B are not mutually exclusive. (d) Find $P(A'\cup B')$.`,
    S`(a) $3x+0.7=1\Rightarrow x=0.1$. (b) $0.3+0.1+0.2=0.6$. (c) $P(A\cap B)=0.1\ne0$. (d) $1-P(A\cap B)=0.9$. [1, 1, 1, 2.]`,
    vennDoc({ a: "0.3", both: "x", b: "2x", out: "0.4" })),
  W(3, "medium", 4, S`The Venn diagram shows the probabilities of events A and B. (a) Find $P(A\mid B)$. (b) Find $P(B\mid A')$. (c) Determine whether A and B are independent.`,
    S`(a) $P(B)=0.4$: $\frac{0.12}{0.4}=0.3$. (b) $P(A')=0.7$: $\frac{0.28}{0.7}=0.4$. (c) $P(A)P(B)=0.3\times0.4=0.12=P(A\cap B)$: independent. [1, 1, 2.]`,
    vennDoc({ a: "0.18", both: "0.12", b: "0.28", out: "0.42" })),
  W(3, "hard", 6, S`2% of items from a production line are faulty. A scanner flags 96% of faulty items and 4% of good items. (a) Copy and complete the tree diagram. (b) Find the probability that an item is flagged. (c) Given an item is flagged, find the probability it is faulty. (d) Comment on the usefulness of the scanner.`,
    S`(a) faulty 0.02 → flagged 0.96 / not 0.04; good 0.98 → flagged 0.04 / not 0.96. (b) $0.0192+0.0392=0.0584$. (c) $\frac{0.0192}{0.0584}\approx0.329$. (d) about two-thirds of flagged items are actually good, so flagged items need a second check, although very few faulty items are missed. [1, 2, 2, 1.]`,
    treeDoc([["F", "0.02"], ["G", "0.98"]], [[["flag", "0.96"], ["no", "0.04"]], [["flag", "0.04"], ["no", "0.96"]]])),
  W(4, "medium", 4, S`A bag has 5 purple and 4 orange balls. Two are taken without replacement. (a) Complete the tree diagram. (b) Find P(both orange). (c) Find P(at least one purple).`,
    S`(a) first: P $\frac59$, O $\frac49$; after P: P $\frac48$, O $\frac48$; after O: P $\frac58$, O $\frac38$. (b) $\frac49\cdot\frac38=\frac{12}{72}=\frac16$. (c) $1-\frac16=\frac56$. [2, 1, 1.]`,
    treeDoc([["P", "5/9"], ["O", "4/9"]], [[["P", ""], ["O", ""]], [["P", ""], ["O", ""]]], { ends: false })),
  W(4, "hard", 6, S`Raj and Kim play a match of up to three sets; the first to win two sets wins. Raj wins each set with probability 0.55, independently. (a) Draw a tree diagram for the match. (b) Find P(Raj wins in two sets). (c) Find P(Raj wins the match). (d) Given the match goes to three sets, find P(Raj wins).`,
    S`(a) tree with sets 1–2, a third set only after a split. (b) $0.55^2=0.3025$. (c) $0.3025+2(0.55)(0.45)(0.55)=0.3025+0.27225=0.57475$. (d) the third set decides it: $0.55$. [1, 1, 2, 2.]`,
    treeDoc([["R", "0.55"], ["K", "0.45"]], [[["R", "0.55"], ["K", "0.45"]], [["R", "0.55"], ["K", "0.45"]]])),
];
