const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "11.2",
  title: "Conditional Statements & Logical Equivalence",
  intro: "Conditionals and their converse, inverse, and contrapositive; logical equivalence; the biconditional; and necessary vs. sufficient conditions.",
  lesson: [
    ["Conditional statements", R`"If $p$ then $q$" ($p\to q$): $p$ is the hypothesis, $q$ the conclusion. <b>Converse</b>: $q\to p$. <b>Inverse</b>: $\lnot p\to\lnot q$. <b>Contrapositive</b>: $\lnot q\to\lnot p$.`],
    ["Logical equivalence", R`A conditional and its <b>contrapositive</b> are logically equivalent. The converse and inverse are equivalent to each other, but <b>not</b> to the original.`],
    ["Biconditional & conditions", R`"$p$ if and only if $q$" means $p\to q$ and $q\to p$. Then $p$ is <b>sufficient</b> for $q$, and $q$ is <b>necessary</b> for $p$.`],
  ],
  examples: [
    ["Example 1: Converse", R`Converse of "if it rains, the ground is wet"?`, R`"If the ground is wet, then it rains."`],
    ["Example 2: Contrapositive", R`Contrapositive of $p\to q$?`, R`$\lnot q\to\lnot p$.`],
    ["Example 3: Equivalence", R`Which statement is logically equivalent to the original conditional?`, R`Its contrapositive.`],
    ["Example 4: Inverse", R`Inverse of $p\to q$?`, R`$\lnot p\to\lnot q$.`],
    ["Example 5: Necessary/sufficient", R`In $p\to q$, how are $p$ and $q$ described?`, R`$p$ is sufficient for $q$; $q$ is necessary for $p$.`],
  ],
  questions: [
    ["Problem 1", R`Contrapositive of "if $A$ then $B$"?`, R`"if not $B$ then not $A$"`],
    ["Problem 2", R`Converse of "if $A$ then $B$"?`, R`"if $B$ then $A$"`],
    ["Problem 3", R`The statement equivalent to the original conditional is the ___.`, R`contrapositive`],
    ["Problem 4", R`The converse is equivalent to the ___.`, R`inverse`],
    ["Problem 5", R`"If and only if" is a ___.`, R`biconditional`],
    ["Problem 6", R`In $p\to q$, $p$ is ___ for $q$.`, R`sufficient`],
    ["Problem 7", R`In $p\to q$, $q$ is ___ for $p$.`, R`necessary`],
    ["Problem 8", R`Inverse of "if $A$ then $B$"?`, R`"if not $A$ then not $B$"`],
  ],
};
