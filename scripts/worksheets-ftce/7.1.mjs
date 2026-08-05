const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "7.1",
  title: "Sequences & Series",
  intro: "Arithmetic and geometric sequences, their nth-term and sum formulas, and the sum of a convergent infinite geometric series.",
  lesson: [
    ["Arithmetic sequences", R`Constant common difference $d$. The $n$th term is $a_n=a_1+(n-1)d$; the sum of $n$ terms is $S_n=\dfrac{n}{2}(a_1+a_n)=\dfrac{n}{2}\big(2a_1+(n-1)d\big)$.`],
    ["Geometric sequences", R`Constant common ratio $r$. The $n$th term is $a_n=a_1 r^{\,n-1}$; the sum of $n$ terms is $S_n=\dfrac{a_1(1-r^n)}{1-r}$.`],
    ["Infinite geometric series", R`If $|r|<1$, the infinite series converges to $S=\dfrac{a_1}{1-r}$.`],
  ],
  examples: [
    ["Example 1: Arithmetic term", R`Find $a_5$ of $3,7,11,\ldots$`, R`$d=4$: $a_5=3+4(4)=19$.`],
    ["Example 2: Arithmetic sum", R`Sum the first $10$ terms with $a_1=2$, $d=3$.`, R`$a_{10}=2+9(3)=29$; $S_{10}=\tfrac{10}{2}(2+29)=155$.`],
    ["Example 3: Geometric term", R`Find $a_4$ of $2,6,18,\ldots$`, R`$r=3$: $a_4=2\cdot3^3=54$.`],
    ["Example 4: Geometric sum", R`Sum the first $4$ terms with $a_1=3$, $r=2$.`, R`$S_4=\dfrac{3(1-16)}{1-2}=45$.`],
    ["Example 5: Infinite sum", R`Find the infinite sum with $a_1=8$, $r=\tfrac12$.`, R`$\dfrac{8}{1-\tfrac12}=16$.`],
  ],
  questions: [
    ["Problem 1", R`Common difference of $5,9,13,\ldots$?`, R`$4$`],
    ["Problem 2", R`Common ratio of $3,6,12,\ldots$?`, R`$2$`],
    ["Problem 3", R`$a_{10}$ of an arithmetic sequence with $a_1=1$, $d=2$?`, R`$19$`],
    ["Problem 4", R`$a_4$ of a geometric sequence with $a_1=1$, $r=3$?`, R`$27$`],
    ["Problem 5", R`Sum of $2,4,6,8,10$?`, R`$30$`],
    ["Problem 6", R`Infinite geometric sum with $a_1=1$, $r=\tfrac12$?`, R`$2$`],
    ["Problem 7", R`The $n$th term of an arithmetic sequence is?`, R`$a_1+(n-1)d$`],
    ["Problem 8", R`Does an infinite geometric series with $r=2$ converge?`, R`no`],
  ],
};
