const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "3.4",
  title: "Applications & Special Cases of Systems",
  intro: "Word problems often hide a system: a count relationship plus a value relationship. This worksheet practises setting them up and interpreting the special cases.",
  lesson: [
    ["Set up a system", "Define two variables, write two equations from the sentences (a count equation and a value equation is common), then solve."],
    ["Count the solutions", "One intersection = one solution; parallel lines = none; the same line = infinitely many."],
    ["Recognize special cases", R`If the variables cancel to a false statement ($0 = 5$) there is no solution; to a true one ($0 = 0$) there are infinitely many.`],
  ],
  examples: [
    ["Example 1: Sum and difference", R`Two numbers sum to $20$ and differ by $4$. Find the larger.`, R`$x + y = 20$, $x - y = 4$. Add: $2x = 24 \Rightarrow x = 12$. The larger is $12$.`],
    ["Example 2: Tickets", R`$20$ tickets sold for $\$130$; adult $\$8$, child $\$5$. How many adults?`, R`$a + c = 20$, $8a + 5c = 130$. Sub $c = 20 - a$: $3a + 100 = 130 \Rightarrow a = 10$.`],
    ["Example 3: Two purchases", R`$3$ coffees and $2$ muffins cost $\$13$; $1$ coffee and $2$ muffins cost $\$7$. Coffee price?`, R`Subtract: $2c = 6 \Rightarrow c = \$3$.`],
    ["Example 4: Parallel — none", R`How many solutions has $y = 2x + 1$, $y = 2x - 3$?`, R`Equal slopes, different intercepts — parallel. <b>No solution</b>.`],
    ["Example 5: Same line — infinite", R`How many solutions has $2x + y = 4$, $4x + 2y = 8$?`, R`The second is twice the first — same line. <b>Infinitely many</b>.`],
    ["Example 6: Coins", R`$15$ coins (dimes and quarters) total $\$2.55$. How many quarters?`, R`$d + q = 15$, $10d + 25q = 255$. Sub $d = 15 - q$: $150 + 15q = 255 \Rightarrow q = 7$.`],
  ],
  questions: [
    ["Problem 1", R`Two numbers sum to $30$ and differ by $6$. The larger is?`, R`$18$`],
    ["Problem 2", R`$12$ tickets cost $\$96$; adult $\$10$, child $\$6$. How many adults?`, R`$6$`],
    ["Problem 3", R`$2$ shirts $+ 1$ hat $= \$35$; $1$ shirt $+ 1$ hat $= \$23$. Shirt price?`, R`$\$12$`],
    ["Problem 4", R`How many solutions has $y = 3x + 2$, $y = 3x - 5$?`, R`None`],
    ["Problem 5", R`How many solutions has $x - y = 2$, $2x - 2y = 4$?`, R`Infinitely many`],
    ["Problem 6", R`$3$ pens $+ 2$ pencils $= \$13$; $1$ pen $+ 2$ pencils $= \$7$. Pen price?`, R`$\$3$`],
    ["Problem 7", R`Two numbers sum to $25$ and differ by $9$. The smaller is?`, R`$8$`],
    ["Problem 8", R`$10$ coins (nickels and dimes) total $\$0.80$. How many dimes?`, R`$6$`],
    ["Problem 9", R`If the variables cancel to $0 = 7$, how many solutions?`, R`None`],
    ["Problem 10", R`If the variables cancel to $0 = 0$, how many solutions?`, R`Infinitely many`],
    ["Problem 11", R`$b + c = 15$ and $b - c = 10$. Find $b$.`, R`$12.5$`],
    ["Problem 12", R`One number is $4$ more than another; they sum to $30$. The larger is?`, R`$17$`],
  ],
};
