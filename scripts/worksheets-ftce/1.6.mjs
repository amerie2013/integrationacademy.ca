const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "1.6",
  title: "Systems of Linear Equations",
  intro: "Solving systems by graphing, substitution, and elimination — including 3×3 systems and recognizing consistent, inconsistent, and dependent systems.",
  lesson: [
    ["Three methods", R`<b>Graphing</b> reads the intersection; <b>substitution</b> replaces one variable; <b>elimination</b> adds multiples of the equations to cancel a variable. All give the same solution.`],
    ["Classifying a system", R`One intersection → <b>consistent &amp; independent</b> (one solution); parallel lines → <b>inconsistent</b> (none); the same line → <b>dependent</b> (infinitely many). A <b>homogeneous</b> system ($=0$) always has the trivial solution.`],
    ["Three unknowns", R`Eliminate one variable from two different pairs to reduce to a $2\times2$ system, solve it, then back-substitute for the third.`],
  ],
  examples: [
    ["Example 1: Elimination", R`Solve $\begin{cases}x+y=7\\x-y=1\end{cases}$.`, R`Add: $2x=8\Rightarrow x=4$, then $y=3$. Solution $(4,3)$.`],
    ["Example 2: Classify", R`Classify $\begin{cases}2x+3y=6\\4x+6y=7\end{cases}$.`, R`The left side of the second is twice the first, but $12\ne 7$ — parallel lines. <b>Inconsistent</b>: no solution.`],
    ["Example 3: Substitution", R`Solve $\begin{cases}y=2x\\3x+y=10\end{cases}$.`, R`$3x+2x=10\Rightarrow x=2$, $y=4$. Solution $(2,4)$.`],
    ["Example 4: 3×3", R`Solve $\begin{cases}x+y+z=6\\x-y+z=2\\2x+y-z=1\end{cases}$.`, R`Eq1$-$Eq2: $2y=4\Rightarrow y=2$. Then Eq1: $x+z=4$; Eq3: $2x-z=-1$. Add: $3x=3\Rightarrow x=1$, $z=3$. Solution $(1,2,3)$.`],
    ["Example 5: Elimination with scaling", R`Solve $\begin{cases}2x+3y=7\\3x-y=5\end{cases}$.`, R`Multiply the second by $3$: $9x-3y=15$; add to the first: $11x=22\Rightarrow x=2$, $y=1$.`],
  ],
  questions: [
    ["Problem 1", R`Solve $\begin{cases}x+y=5\\x-y=3\end{cases}$.`, R`$(4,1)$`],
    ["Problem 2", R`Solve $\begin{cases}2x+y=7\\x-y=2\end{cases}$.`, R`$(3,1)$`],
    ["Problem 3", R`Classify $\begin{cases}x-2y=3\\2x-4y=6\end{cases}$.`, R`dependent (infinitely many)`],
    ["Problem 4", R`Classify $\begin{cases}x+y=1\\x+y=4\end{cases}$.`, R`inconsistent (no solution)`],
    ["Problem 5", R`Solve $\begin{cases}y=x-1\\2x+y=8\end{cases}$.`, R`$(3,2)$`],
    ["Problem 6", R`Solve $\begin{cases}x+y=3\\y+z=5\\x+z=4\end{cases}$.`, R`$(1,2,3)$`],
    ["Problem 7", R`Solve the homogeneous system $\begin{cases}2x+3y=0\\x-y=0\end{cases}$.`, R`$(0,0)$ (trivial)`],
    ["Problem 8", R`For what $k$ is $\begin{cases}2x+3y=5\\4x+6y=k\end{cases}$ dependent?`, R`$k=10$`],
  ],
};
