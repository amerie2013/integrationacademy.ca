const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "6.4",
  title: "Applying Counting to Probability",
  intro: "Combining the counting techniques with the probability definition — favorable counts over total counts using permutations and combinations.",
  lesson: [
    ["Counting-based probability", R`$P=\dfrac{\text{favorable count}}{\text{total count}}$, where both counts are found with permutations or combinations.`],
    ["Selecting groups", R`Use combinations to count committees or hands; multiply independent selections (a choice from one group AND another).`],
    ["Arrangements", R`Use permutations for ordered arrangements and their probabilities.`],
  ],
  examples: [
    ["Example 1: AND of selections", R`Choose $2$ of $5$ freshmen AND $3$ of $4$ sophomores. How many ways?`, R`$C(5,2)\cdot C(4,3)=10\cdot4=40$.`],
    ["Example 2: Line up", R`From $8$ elephants, choose $3$ and line them up. How many ways?`, R`$P(8,3)=336$.`],
    ["Example 3: Committee", R`How many committees of $3$ from $10$ people?`, R`$C(10,3)=120$.`],
    ["Example 4: Probability", R`A bag has $3$ red, $2$ blue. Draw $2$ (no replacement); find $P(\text{both red})$.`, R`$\dfrac{C(3,2)}{C(5,2)}=\dfrac{3}{10}$.`],
    ["Example 5: Lottery count", R`How many ways to choose $6$ numbers from $49$?`, R`$C(49,6)$.`],
  ],
  questions: [
    ["Problem 1", R`Evaluate $C(5,2)\cdot C(4,3)$.`, R`$40$`],
    ["Problem 2", R`How many committees of $2$ from $6$?`, R`$15$`],
    ["Problem 3", R`Ways to arrange $4$ books on a shelf?`, R`$24$`],
    ["Problem 4", R`Draw $2$ cards (no replacement); $P(\text{both aces})$?`, R`$\dfrac{1}{221}$`],
    ["Problem 5", R`How many ways to choose $3$ from $7$?`, R`$35$`],
    ["Problem 6", R`Ways to line up $5$ people?`, R`$120$`],
    ["Problem 7", R`Ways to pick a president and VP from $8$ (order matters)?`, R`$56$`],
    ["Problem 8", R`From $4$ red and $2$ white, choose $3$; $P(\text{all red})$?`, R`$\dfrac15$`],
  ],
};
