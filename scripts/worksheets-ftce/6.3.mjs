const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "6.3",
  title: "Counting: Permutations & Combinations",
  intro: "The fundamental counting principle, factorials, and the distinction between permutations (order matters) and combinations (order doesn't).",
  lesson: [
    ["Fundamental counting principle", R`If one stage has $m$ options and a second has $n$, together there are $m\cdot n$ outcomes (extend to more stages by multiplying).`],
    ["Permutations", R`Order matters: $P(n,r)=\dfrac{n!}{(n-r)!}$ counts arrangements of $r$ from $n$.`],
    ["Combinations", R`Order does not matter: $C(n,r)=\dfrac{n!}{r!\,(n-r)!}$ counts selections of $r$ from $n$.`],
  ],
  examples: [
    ["Example 1: Counting principle", R`With $3$ shirts and $4$ pants, how many outfits?`, R`$3\times4=12$.`],
    ["Example 2: Permutation", R`Evaluate $P(5,2)$.`, R`$\dfrac{5!}{3!}=5\cdot4=20$.`],
    ["Example 3: Combination", R`Evaluate $C(5,2)$.`, R`$\dfrac{5!}{2!\,3!}=10$.`],
    ["Example 4: Line up", R`How many ways to arrange $3$ of $8$ people in a line?`, R`$P(8,3)=8\cdot7\cdot6=336$.`],
    ["Example 5: Choose", R`How many ways to choose $3$ from $4$?`, R`$C(4,3)=4$.`],
  ],
  questions: [
    ["Problem 1", R`With $4$ appetizers and $5$ mains, how many meals?`, R`$20$`],
    ["Problem 2", R`Evaluate $5!$.`, R`$120$`],
    ["Problem 3", R`Evaluate $C(6,2)$.`, R`$15$`],
    ["Problem 4", R`Evaluate $P(4,2)$.`, R`$12$`],
    ["Problem 5", R`Evaluate $C(n,n)$.`, R`$1$`],
    ["Problem 6", R`Order matters — permutation or combination?`, R`permutation`],
    ["Problem 7", R`Evaluate $C(10,1)$.`, R`$10$`],
    ["Problem 8", R`Evaluate $P(6,3)$.`, R`$120$`],
  ],
};
