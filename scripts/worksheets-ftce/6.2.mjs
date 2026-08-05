const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "6.2",
  title: "Addition & Multiplication Rules",
  intro: "The addition rule (mutually exclusive or not), the multiplication rule (independent or dependent), and conditional probability.",
  lesson: [
    ["Addition rule", R`$P(A\text{ or }B)=P(A)+P(B)-P(A\text{ and }B)$. For <b>mutually exclusive</b> events $P(A\text{ and }B)=0$, so $P(A\text{ or }B)=P(A)+P(B)$.`],
    ["Multiplication rule", R`For <b>independent</b> events $P(A\text{ and }B)=P(A)\cdot P(B)$. For <b>dependent</b> events $P(A\text{ and }B)=P(A)\cdot P(B\mid A)$.`],
    ["Conditional probability", R`$P(B\mid A)=\dfrac{P(A\text{ and }B)}{P(A)}$. Events are independent exactly when $P(B\mid A)=P(B)$.`],
  ],
  examples: [
    ["Example 1: Mutually exclusive", R`On a die, find $P(\text{even or }5)$.`, R`Disjoint: $\dfrac36+\dfrac16=\dfrac46=\dfrac23$.`],
    ["Example 2: Not mutually exclusive", R`Find $P(\text{king or heart})$ from a deck.`, R`$\dfrac{4}{52}+\dfrac{13}{52}-\dfrac{1}{52}=\dfrac{16}{52}=\dfrac{4}{13}$.`],
    ["Example 3: Independent", R`Find $P(\text{two heads})$ on two coin flips.`, R`$\dfrac12\cdot\dfrac12=\dfrac14$.`],
    ["Example 4: Dependent", R`Draw $2$ cards without replacement; find $P(\text{both aces})$.`, R`$\dfrac{4}{52}\cdot\dfrac{3}{51}=\dfrac{1}{221}$.`],
    ["Example 5: Independent product", R`$P(A)=0.5$, $P(B)=0.4$, independent. Find $P(A\text{ and }B)$.`, R`$0.5\times0.4=0.2$.`],
  ],
  questions: [
    ["Problem 1", R`Mutually exclusive with $P=0.3,\,0.4$: $P(A\text{ or }B)$?`, R`$0.7$`],
    ["Problem 2", R`Two dice: $P(\text{both }6)$?`, R`$\dfrac{1}{36}$`],
    ["Problem 3", R`Independent, $P(A)=0.5,\,P(B)=0.6$: $P(A\text{ and }B)$?`, R`$0.3$`],
    ["Problem 4", R`$P(A\text{ or }B)=P(A)+P(B)-\ ?$`, R`$P(A\text{ and }B)$`],
    ["Problem 5", R`$P(\text{red or king})$ from a deck?`, R`$\dfrac{7}{13}$`],
    ["Problem 6", R`If $A,B$ independent, $P(B\mid A)=$ ?`, R`$P(B)$`],
    ["Problem 7", R`Roll a die twice: $P(1\text{ then }2)$?`, R`$\dfrac{1}{36}$`],
    ["Problem 8", R`Two events with $P(A\text{ and }B)=0$ are ___.`, R`mutually exclusive`],
  ],
};
