// IB AA SL Worksheet 8.3 — Conditional Probability and Independence (teacher edition)
import { svgT } from "./figT.mjs";
import { vennDoc, gridDoc } from "../figs8.mjs";

const S = String.raw;
const D = [1, 2, 3, 4, 5, 6];

const EXAMPLES = [
  { title: "From the formula", q: S`$P(A\cap B)=0.24$ and $P(B)=0.6$. Find $P(A\mid B)$.`,
    steps: [S`$\frac{0.24}{0.6}$.`], ans: "0.4" },
  { title: "From a Venn diagram", q: "Find P(A | B) and P(B | A).",
    fig: svgT(vennDoc({ a: 15, both: 5, b: 10, out: 10 }), 5.5),
    steps: [S`$P(A\mid B)=\frac{5}{15}$; $P(B\mid A)=\frac{5}{20}$.`], ans: S`$\frac13$; $\frac14$` },
  { title: "From a table", q: "Of 100 people, 30 of the 40 who exercise and 20 of the 60 who do not exercise sleep well. Find P(exercises | sleeps well).",
    steps: [S`Sleep well: 50; of these 30 exercise: $\frac{30}{50}$.`], ans: "0.6" },
  { title: "Reduced sample space", q: "Two dice are rolled. Given that at least one shows a 4, find P(the sum is 7).",
    fig: svgT(gridDoc(D, D, { mark: (a, b) => a === 4 || b === 4, cell: (a, b) => a + b, rowName: "first die", colName: "second die" }), 6),
    steps: ["11 outcomes contain a 4; sum 7 among them: (4,3), (3,4)."], ans: S`$\frac{2}{11}$` },
  { title: "Multiplication rule", q: S`$P(A)=0.7$ and $P(B\mid A)=0.4$. Find $P(A\cap B)$.`,
    steps: [S`$0.7\times0.4$.`], ans: "0.28" },
  { title: "Testing independence", q: S`$P(A)=0.4$, $P(B)=0.45$, $P(A\cap B)=0.18$. Are A and B independent?`,
    steps: [S`$0.4\times0.45=0.18$.`], ans: "yes" },
  { title: "Not independent", q: S`$P(A)=0.5$, $P(B)=0.3$, $P(A\cap B)=0.2$. Are A and B independent? Find $P(A\mid B)$.`,
    steps: [S`$0.5\times0.3=0.15\ne0.2$: no.`, S`$P(A\mid B)=\frac{0.2}{0.3}$.`], ans: S`no; $\frac23$` },
  { title: "Using independence", q: S`A and B are independent with $P(A)=0.25$ and $P(B)=0.6$. Find $P(A\cup B)$.`,
    steps: [S`$0.25+0.6-0.15$.`], ans: "0.7" },
  { title: "Independent vs mutually exclusive", q: S`$P(A)=0.3$, $P(B)=0.4$ and A, B are mutually exclusive. Can they be independent?`,
    steps: [S`$P(A\cap B)=0$ but $P(A)P(B)=0.12$.`], ans: "no" },
];

const PROBLEMS = [
  { level: 1, q: S`$P(A\cap B)=0.15$, $P(B)=0.6$. Find $P(A\mid B)$.`, recap: "Formula.", ans: "0.25" },
  { level: 1, q: "In a class, 8 of the 20 girls wear glasses. Find P(glasses | girl).", recap: "Table.", ans: "0.4" },
  { level: 1, q: S`A and B are independent with $P(A)=0.7$, $P(B)=0.3$. Find $P(A\cap B)$.`, recap: "Independence.", ans: "0.21" },
  { level: 2, q: "From the Venn diagram, find P(A | B′).", recap: "Venn.", ans: S`$\frac{6}{6+9}=\frac25$`,
    fig: svgT(vennDoc({ a: 6, both: 4, b: 11, out: 9 }), 5) },
  { level: 2, q: S`$P(A)=0.6$, $P(B)=0.5$, $P(A\cap B)=0.3$. Are A and B independent?`, recap: "Test.", ans: "yes: 0.6 × 0.5 = 0.3" },
  { level: 2, q: "Two dice are rolled. Given the sum is 10, find P(a double).", recap: "Reduced space.", ans: S`$\frac13$` },
  { level: 2, q: S`$P(B)=0.75$, $P(A\mid B)=0.2$. Find $P(A\cap B)$.`, recap: "Multiplication.", ans: "0.15" },
  { level: 2, q: "A survey: 45 of 75 smokers and 30 of 125 non-smokers cough daily. Find P(smoker | coughs daily).", recap: "Table.", ans: S`$\frac{45}{75}=0.6$` },
  { level: 3, space: 4, q: S`A and B are independent, $P(A)=0.4$ and $P(A\cup B)=0.76$. Find $P(B)$.`, recap: "Independence equation.", ans: "0.6" },
  { level: 3, space: 4, q: S`$P(A\mid B)=0.3$, $P(B)=0.5$, $P(A)=0.35$. Find $P(B\mid A)$.`, recap: "Reverse.", ans: S`$\frac{0.15}{0.35}=\frac37$` },
  { level: 3, space: 4, q: "Two dice are rolled. Let A = 'first die is even', B = 'sum is 7'. Show that A and B are independent.", recap: "Prove independence.", ans: S`$P(A\cap B)=\frac{3}{36}=\frac12\cdot\frac16$` },
  { level: 3, space: 4, q: "In a school, 55% are girls; 20% of girls and 30% of boys walk to school. Find P(girl | walks).", recap: "Two-stage.", ans: S`$\frac{0.11}{0.245}\approx0.449$` },
  { level: 3, space: 4, q: S`Explain why $P(A\mid B)=P(A)$ means A and B are independent.`, recap: "Meaning.", ans: S`$\frac{P(A\cap B)}{P(B)}=P(A)\Rightarrow P(A\cap B)=P(A)P(B)$` },
];

export const WS = {
  code: "8.3",
  title: "Conditional Probability and Independence",
  bigideas: S`$P(A\mid B)=\frac{P(A\cap B)}{P(B)}$: the sample space is reduced to B (the B row or column, the B circle). Hence $P(A\cap B)=P(B)P(A\mid B)$. A and B are independent when $P(A\cap B)=P(A)P(B)$, equivalently $P(A\mid B)=P(A)$. Mutually exclusive events with positive probabilities are never independent.`,
  goals: ["Find conditional probabilities.", "Use the multiplication rule.", "Test independence.", "Distinguish independent and mutually exclusive."],
  curriculum: "SL 4.6",
  vocab: [[S`$P(A\mid B)$`, "A given B"], ["Independent", S`$P(A\cap B)=P(A)P(B)$`], ["Dependent", "one affects the other"]],
  hook: "Ask: what is the chance a random person is over 1.9 m tall? Now: what is the chance given that they are a professional basketball player?",
  concepts: [
    ["1. Given B", S`${svgT(vennDoc({ a: 15, both: 5, b: 10, out: 10 }, { shade: ["both", "b"] }), 5)} Only circle B matters.`],
    ["2. Multiplication rule", S`$P(A\cap B)=P(B)P(A\mid B)$.`],
    ["3. Independence", "Compare P(A ∩ B) with P(A)P(B)."],
  ],
  tips: ["Divide by the given event.", "P(A | B) ≠ P(B | A).", "Use the right row/column.", "Show independence numerically.", "ME ≠ independent."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
