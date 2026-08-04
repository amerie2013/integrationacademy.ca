const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "5.5",
  title: "Regression, Sampling & Experimental Design",
  intro: "The line of best fit and correlation coefficient, principles of sampling, and the logic of experiments — including that correlation is not causation.",
  lesson: [
    ["Regression & correlation", R`A regression line $y=a+bx$ summarizes a linear trend; the slope $b$ is the average change in $y$ per unit $x$. The correlation coefficient $r$ (from $-1$ to $1$) measures the strength and direction.`],
    ["Sampling", R`A representative sample supports inference about a population. <b>Random sampling</b> reduces bias; sampling with vs. without replacement affects independence.`],
    ["Experimental design", R`An experiment manipulates a treatment against a <b>control</b> group with <b>randomization</b>. A confounding variable can distort a relationship, and <b>correlation does not imply causation</b>.`],
  ],
  examples: [
    ["Example 1: Predict", R`A best-fit line is $y=2x+3$. Predict $y$ at $x=5$.`, R`$2(5)+3=13$.`],
    ["Example 2: Strong positive", R`What does $r=0.9$ indicate?`, R`A strong positive linear correlation.`],
    ["Example 3: Perfect negative", R`What does $r=-1$ indicate?`, R`A perfect negative linear relationship.`],
    ["Example 4: Reducing bias", R`What does random sampling reduce?`, R`Bias.`],
    ["Example 5: Causation", R`A strong correlation between two variables shows what — and does not show what?`, R`It shows association, not causation.`],
  ],
  questions: [
    ["Problem 1", R`Best-fit $y=3x-1$; predict $y$ at $x=4$.`, R`$11$`],
    ["Problem 2", R`$r$ ranges from $-1$ to ___.`, R`$1$`],
    ["Problem 3", R`$r=0$ indicates ___ linear correlation.`, R`no`],
    ["Problem 4", R`A group receiving no treatment is the ___ group.`, R`control`],
    ["Problem 5", R`Random assignment reduces ___.`, R`bias`],
    ["Problem 6", R`Does correlation imply causation?`, R`no`],
    ["Problem 7", R`$r$ near $+1$ means a ___ positive relationship.`, R`strong`],
    ["Problem 8", R`The regression slope is the average change in $y$ per unit ___.`, R`$x$`],
  ],
};
