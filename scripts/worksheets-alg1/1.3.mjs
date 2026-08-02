const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "1.3",
  title: "Compound Inequalities & Set Notation",
  intro: "A compound inequality joins two inequalities with 'and' or 'or'. This worksheet practises solving them and writing answers in interval and set-builder notation.",
  lesson: [
    ["Compound inequalities", R`Two inequalities joined by <b>and</b> (both must hold) or <b>or</b> (either holds). $-2 \le x < 5$ is shorthand for $x \ge -2$ <b>and</b> $x < 5$.`],
    ["Solving — watch the sign flip", "Solve each part with the same balancing rules. Multiplying or dividing by a <b>negative</b> reverses the inequality sign."],
    ["Writing the answer", R`Interval notation uses $[\,]$ for included endpoints and $(\,)$ for excluded: $[-2, 5)$. Set-builder: $\{x \mid -2 \le x < 5\}$.`],
  ],
  examples: [
    ["Example 1: Solve a three-part inequality", R`Solve $-2 \le x + 1 < 4$.`, R`Subtract $1$ from all three parts: $-3 \le x < 3$. In interval notation, $[-3, 3)$.`],
    ["Example 2: An 'and' inequality", R`Solve $3x - 2 > 7$ and $x < 5$.`, R`First: $3x > 9$, so $x > 3$. Combined with $x < 5$: $3 < x < 5$, i.e. $(3, 5)$.`],
    ["Example 3: An 'or' inequality", R`Solve $2x + 1 < -3$ or $x - 2 > 1$.`, R`First: $x < -2$. Second: $x > 3$. Answer: $x < -2$ or $x > 3$, i.e. $(-\infty, -2) \cup (3, \infty)$.`],
    ["Example 4: Flip on a negative", R`Solve $-2x \le 6$.`, R`Divide by $-2$ and flip the sign: $x \ge -3$, i.e. $[-3, \infty)$.`],
    ["Example 5: Both bounds at once", R`Solve $1 < 2x - 3 \le 7$.`, R`Add $3$: $4 < 2x \le 10$. Divide by $2$: $2 < x \le 5$, i.e. $(2, 5]$.`],
    ["Example 6: Set-builder notation", R`Write the solution of $x \ge 4$ in set-builder notation.`, R`$\{x \mid x \ge 4\}$ — "all $x$ such that $x$ is at least $4$."`],
  ],
  questions: [
    ["Problem 1", R`Solve $x + 3 > 5$.`, R`$x > 2$`],
    ["Problem 2", R`Solve $-3x < 12$.`, R`$x > -4$ (sign flips)`],
    ["Problem 3", R`Solve $-1 \le 2x + 1 \le 9$.`, R`$-1 \le x \le 4$`],
    ["Problem 4", R`Write $[2, 7)$ in set-builder notation.`, R`$\{x \mid 2 \le x < 7\}$`],
    ["Problem 5", R`Solve $4 < x - 2$.`, R`$x > 6$`],
    ["Problem 6", R`Solve $2x - 5 \ge 1$ and $x \le 6$.`, R`$3 \le x \le 6$`],
    ["Problem 7", R`Solve $x + 1 < 0$ or $x - 4 > 0$.`, R`$x < -1$ or $x > 4$`],
    ["Problem 8", R`Solve $-\dfrac{x}{2} > 3$.`, R`$x < -6$ (sign flips)`],
    ["Problem 9", R`Write $x > -3$ in interval notation.`, R`$(-3, \infty)$`],
    ["Problem 10", R`Solve $0 \le 3x \le 15$.`, R`$0 \le x \le 5$`],
    ["Problem 11", R`Solve $5 - x \le 2$.`, R`$x \ge 3$`],
    ["Problem 12", R`Is $x = 4$ a solution of $-2 \le x < 4$?`, R`No — $4$ is excluded.`],
  ],
};
