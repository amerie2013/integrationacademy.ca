const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "1.5",
  title: "Modeling Real-World Contexts with Linear Constraints",
  intro: "Real situations become math when you name a variable and translate the words into an equation or inequality. This worksheet practises setting up, solving, and interpreting linear models.",
  lesson: [
    ["From words to math", R`Define a variable for the unknown, then translate: 'is/equals' $\to =$, 'at least' $\to \ge$, 'at most' $\to \le$, 'more than' $\to >$, and 'per/each' becomes a rate (a coefficient).`],
    ["Set it up, solve, interpret", "Write the equation or inequality, solve it, then answer in the words of the problem — with units — and check the result makes sense."],
    ["Constraints are inequalities", R`Budgets ('at most \$50'), minimums ('at least 3'), and capacities are inequalities: the solution is a whole <b>range</b> of allowed values, not a single number.`],
  ],
  examples: [
    ["Example 1: Translate and solve", R`A number tripled, plus $4$, is $19$. Find the number.`, R`Let the number be $x$: $3x + 4 = 19$. Subtract $4$: $3x = 15$, so $x = 5$.`],
    ["Example 2: A cost model", R`A gym charges \$20 to join plus \$15 per month. After how many months is the total \$95?`, R`Total $= 20 + 15m$. Set $20 + 15m = 95$: $15m = 75$, so $m = 5$ months.`],
    ["Example 3: A budget ('at most')", R`A taxi costs \$3 plus \$2 per km. With \$25, how far can you ride?`, R`$3 + 2k \le 25$. Subtract $3$: $2k \le 22$, so $k \le 11$ km.`],
    ["Example 4: Perimeter", R`A rectangle's length is $3$ more than its width and its perimeter is $26$. Find the width.`, R`$2(w + 3) + 2w = 26 \Rightarrow 4w + 6 = 26 \Rightarrow 4w = 20$, so $w = 5$.`],
    ["Example 5: A minimum ('at least')", R`You earn \$12 per hour and want to make at least \$180. How many hours must you work?`, R`$12h \ge 180$, so $h \ge 15$ hours.`],
    ["Example 6: Compare two plans", R`Plan A costs \$30 flat. Plan B costs \$10 plus \$4 per unit. When is Plan B cheaper?`, R`$10 + 4u < 30 \Rightarrow 4u < 20 \Rightarrow u < 5$ units.`],
  ],
  questions: [
    ["Problem 1", R`Five more than twice a number is $17$. Find the number.`, R`$2x + 5 = 17 \Rightarrow x = 6$`],
    ["Problem 2", R`A phone plan is \$25 plus \$0.10 per minute. What is the total for $200$ minutes?`, R`$25 + 0.10(200) = 45$, so \$45.`],
    ["Problem 3", R`A saver has \$40 and adds \$8 per week. After how many weeks will they have \$120?`, R`$40 + 8w = 120 \Rightarrow w = 10$ weeks`],
    ["Problem 4", R`Renting skates costs \$12 plus \$6 per hour, budget at most \$60. Max hours?`, R`$12 + 6h \le 60 \Rightarrow h \le 8$`],
    ["Problem 5", R`A rectangle's length is twice its width and its perimeter is $30$. Find the width.`, R`$6w = 30 \Rightarrow w = 5$`],
    ["Problem 6", R`You need at least \$200, earning \$16 per hour. How many hours?`, R`$16h \ge 200 \Rightarrow h \ge 12.5$`],
    ["Problem 7", R`Two consecutive integers sum to $45$. Find the smaller one.`, R`$x + (x+1) = 45 \Rightarrow x = 22$`],
    ["Problem 8", R`A pool holds $500$ L and drains $25$ L per minute. When is it empty?`, R`$500 - 25t = 0 \Rightarrow t = 20$ min`],
    ["Problem 9", R`Adult tickets are \$8 (children free) with a \$50 budget. Max adult tickets?`, R`$8a \le 50 \Rightarrow a \le 6$`],
    ["Problem 10", R`Three times a number, decreased by $7$, is at least $8$.`, R`$3x - 7 \ge 8 \Rightarrow x \ge 5$`],
    ["Problem 11", R`Plan A is \$50 flat; Plan B is \$20 plus \$5 per class. When is A cheaper?`, R`$50 < 20 + 5c \Rightarrow c > 6$`],
    ["Problem 12", R`A number increased by $9$ equals four times the number. Find it.`, R`$x + 9 = 4x \Rightarrow x = 3$`],
  ],
};
