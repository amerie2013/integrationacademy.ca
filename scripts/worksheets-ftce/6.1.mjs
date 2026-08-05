const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "6.1",
  title: "Probability Basics & Properties",
  intro: "The definition of probability, its range and properties, the complement rule, and the classical/empirical/subjective interpretations.",
  lesson: [
    ["Definition", R`For equally likely outcomes, $P(\text{event})=\dfrac{\text{favorable outcomes}}{\text{total outcomes}}$. Every probability satisfies $0\le P\le 1$; $P=0$ is impossible, $P=1$ is certain.`],
    ["Complement", R`$P(\text{not }A)=1-P(A)$, and the probabilities of all outcomes sum to $1$.`],
    ["Types of probability", R`<b>Classical</b> (equally likely outcomes), <b>empirical</b> (from data / relative frequency), and <b>subjective</b> (informed judgment).`],
  ],
  examples: [
    ["Example 1: A die", R`Find $P(\text{rolling a }4)$ on a fair die.`, R`$\dfrac16$.`],
    ["Example 2: An event set", R`Find $P(\text{even})$ on a die.`, R`$\{2,4,6\}$: $\dfrac36=\dfrac12$.`],
    ["Example 3: Complement", R`Find $P(\text{not }6)$ on a die.`, R`$1-\dfrac16=\dfrac56$.`],
    ["Example 4: A bag", R`A bag has $3$ red and $2$ blue marbles. Find $P(\text{red})$.`, R`$\dfrac{3}{5}$.`],
    ["Example 5: Cards", R`Find $P(\text{heart})$ from a standard $52$-card deck.`, R`$\dfrac{13}{52}=\dfrac14$.`],
  ],
  questions: [
    ["Problem 1", R`$P(\text{heads})$ on a fair coin?`, R`$\dfrac12$`],
    ["Problem 2", R`$P(\text{rolling a }3)$ on a die?`, R`$\dfrac16$`],
    ["Problem 3", R`$P(\text{not heads})$ on a coin?`, R`$\dfrac12$`],
    ["Problem 4", R`What is the range of any probability?`, R`$0$ to $1$`],
    ["Problem 5", R`$P(\text{a certain event})$?`, R`$1$`],
    ["Problem 6", R`A bag has $4$ red, $6$ green; $P(\text{green})$?`, R`$\dfrac35$`],
    ["Problem 7", R`$P(\text{ace})$ from a $52$-card deck?`, R`$\dfrac{1}{13}$`],
    ["Problem 8", R`The probabilities of all outcomes sum to ___.`, R`$1$`],
  ],
};
