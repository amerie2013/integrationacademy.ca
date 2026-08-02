const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "2.1",
  title: "Function Notation, Domain, and Range",
  intro: "Function notation names a rule and its input. This worksheet practises evaluating functions, solving for an input, and finding domain and range.",
  lesson: [
    ["Function notation", R`$f(x)$ names a rule with input $x$; $f(3)$ means "use the rule at $x=3$." It does <b>not</b> mean $f \times x$.`],
    ["Domain and range", "The <b>domain</b> is the set of allowed inputs; the <b>range</b> is the set of outputs. A plain line has all real numbers for both; a real-world context can restrict them."],
    ["Reading a graph", "Domain = how far the graph reaches left–right; range = how far up–down. The vertical-line test checks whether a graph is a function."],
  ],
  examples: [
    ["Example 1: Evaluate", R`If $f(x) = 2x + 1$, find $f(3)$.`, R`Substitute $x = 3$: $2(3) + 1 = 7$.`],
    ["Example 2: Evaluate a quadratic", R`If $g(x) = x^2 - 4$, find $g(-2)$.`, R`$(-2)^2 - 4 = 4 - 4 = 0$.`],
    ["Example 3: Solve for the input", R`If $f(x) = 3x - 5$, for what $x$ is $f(x) = 7$?`, R`$3x - 5 = 7 \Rightarrow 3x = 12 \Rightarrow x = 4$.`],
    ["Example 4: Domain of a line", R`State the domain of $f(x) = 2x - 1$.`, R`A line accepts any input, so the domain is all real numbers.`],
    ["Example 5: Range of a parabola", R`State the range of $f(x) = x^2$.`, R`Squares are never negative, so the range is $y \ge 0$.`],
    ["Example 6: Restricted domain", R`A rental costs $C(h) = 20 + 15h$ for $0 \le h \le 8$ hours. State the domain.`, R`Only $0$ to $8$ hours make sense, so the domain is $[0, 8]$.`],
  ],
  questions: [
    ["Problem 1", R`If $f(x) = 4x - 3$, find $f(2)$.`, R`$5$`],
    ["Problem 2", R`If $g(x) = x^2 + 1$, find $g(3)$.`, R`$10$`],
    ["Problem 3", R`If $f(x) = x^2 - 2x$, find $f(-1)$.`, R`$3$`],
    ["Problem 4", R`If $f(x) = 5x$, for what $x$ is $f(x) = 35$?`, R`$x = 7$`],
    ["Problem 5", R`If $f(x) = 2x + 9$, find $f(0)$.`, R`$9$`],
    ["Problem 6", R`State the domain of $f(x) = 3x + 2$.`, R`All real numbers`],
    ["Problem 7", R`State the range of $f(x) = x^2 + 3$.`, R`$y \ge 3$`],
    ["Problem 8", R`State the domain of $f(x) = \sqrt{x}$.`, R`$x \ge 0$`],
    ["Problem 9", R`A tank $V(t) = 50 - 5t$ empties at $t = 10$. State the domain.`, R`$0 \le t \le 10$`],
    ["Problem 10", R`If $f(x) = 6 - x^2$, find $f(2)$.`, R`$2$`],
    ["Problem 11", R`If $f(x) = 2x - 1$, find $f(a + 1)$.`, R`$2a + 1$`],
    ["Problem 12", R`Is $x = y^2$ a function of $x$? Why?`, R`No — it fails the vertical-line test.`],
  ],
};
