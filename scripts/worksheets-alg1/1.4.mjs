const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "1.4",
  title: "Absolute Value Equations & Inequalities",
  intro: "Absolute value measures distance from zero, so it is never negative. This worksheet practises solving absolute-value equations (two cases) and inequalities ('between' and 'beyond').",
  lesson: [
    ["Absolute value is distance", R`$|x|$ is the distance of $x$ from $0$, so $|x| \ge 0$ always. $|x| = 5$ means $x$ is $5$ units from $0$, giving $x = 5$ or $x = -5$.`],
    ["Equations — two cases", R`$|ax + b| = c$ with $c \ge 0$ splits into $ax + b = c$ <b>or</b> $ax + b = -c$. If $c < 0$, there is <b>no solution</b> (distance can't be negative).`],
    ["Inequalities — between vs beyond", R`$|ax+b| < c$ means $-c < ax+b < c$ (<b>between</b>). $|ax+b| > c$ means $ax+b > c$ <b>or</b> $ax+b < -c$ (<b>beyond</b>).`],
  ],
  examples: [
    ["Example 1: Basic equation", R`Solve $|x| = 7$.`, R`$x$ is $7$ from $0$: $x = 7$ or $x = -7$.`],
    ["Example 2: Shifted", R`Solve $|x - 3| = 5$.`, R`Two cases: $x - 3 = 5$ gives $x = 8$; $x - 3 = -5$ gives $x = -2$.`],
    ["Example 3: With a coefficient", R`Solve $|2x + 1| = 9$.`, R`$2x + 1 = 9 \Rightarrow x = 4$; or $2x + 1 = -9 \Rightarrow x = -5$.`],
    ["Example 4: No solution", R`Solve $|x + 2| = -3$.`, R`An absolute value can't equal a negative number, so there is <b>no solution</b>.`],
    ["Example 5: 'Between' inequality", R`Solve $|x| < 4$.`, R`Within $4$ of $0$: $-4 < x < 4$, i.e. $(-4, 4)$.`],
    ["Example 6: 'Beyond' inequality", R`Solve $|x - 1| \ge 3$.`, R`Split: $x - 1 \ge 3$ gives $x \ge 4$; or $x - 1 \le -3$ gives $x \le -2$. Answer: $x \le -2$ or $x \ge 4$.`],
  ],
  questions: [
    ["Problem 1", R`Solve $|x| = 12$.`, R`$x = \pm 12$`],
    ["Problem 2", R`Solve $|x + 4| = 6$.`, R`$x = 2$ or $x = -10$`],
    ["Problem 3", R`Solve $|3x| = 15$.`, R`$x = \pm 5$`],
    ["Problem 4", R`Solve $|x - 5| = 0$.`, R`$x = 5$`],
    ["Problem 5", R`Solve $|2x - 4| = 10$.`, R`$x = 7$ or $x = -3$`],
    ["Problem 6", R`How many solutions has $|x| = -2$?`, R`None`],
    ["Problem 7", R`Solve $|x| \le 3$.`, R`$-3 \le x \le 3$`],
    ["Problem 8", R`Solve $|x| > 5$.`, R`$x > 5$ or $x < -5$`],
    ["Problem 9", R`Solve $|x - 2| < 1$.`, R`$1 < x < 3$`],
    ["Problem 10", R`Solve $|x + 1| \ge 2$.`, R`$x \ge 1$ or $x \le -3$`],
    ["Problem 11", R`Solve $|5x| = 20$.`, R`$x = \pm 4$`],
    ["Problem 12", R`Solve $|x - 3| = 4$.`, R`$x = 7$ or $x = -1$`],
  ],
};
