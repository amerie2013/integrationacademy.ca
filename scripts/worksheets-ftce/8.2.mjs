const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "8.2",
  title: "Continuity",
  intro: "The definition of continuity at a point, the types of discontinuity, and which functions are continuous.",
  lesson: [
    ["Definition", R`$f$ is continuous at $a$ if (1) $f(a)$ is defined, (2) $\displaystyle\lim_{x\to a}f(x)$ exists, and (3) the two are equal. Graphically, there is no break, hole, or jump.`],
    ["Types of discontinuity", R`<b>Removable</b> (a hole), <b>jump</b> (left and right limits differ), and <b>infinite</b> (a vertical asymptote).`],
    ["Continuous functions", R`Polynomials are continuous everywhere; rational functions are continuous except where the denominator is zero; $\sqrt{x}$ is continuous on its domain.`],
  ],
  examples: [
    ["Example 1: Polynomial", R`Is $f(x)=x^2$ continuous at $x=3$?`, R`Yes — polynomials are continuous everywhere.`],
    ["Example 2: Infinite", R`Where is $f(x)=\dfrac1{x-2}$ discontinuous?`, R`At $x=2$ (an infinite discontinuity).`],
    ["Example 3: Removable", R`Classify the discontinuity of $f(x)=\dfrac{x^2-1}{x-1}$ at $x=1$.`, R`Removable — a hole (the factor $x-1$ cancels).`],
    ["Example 4: Jump", R`When does a piecewise function have a jump at $a$?`, R`When the left-hand and right-hand limits at $a$ differ.`],
    ["Example 5: Polynomials", R`Where are polynomials continuous?`, R`Everywhere (all real numbers).`],
  ],
  questions: [
    ["Problem 1", R`Are polynomials continuous everywhere?`, R`yes`],
    ["Problem 2", R`Where is $f(x)=\dfrac1x$ discontinuous?`, R`$x=0$`],
    ["Problem 3", R`The discontinuity at a vertical asymptote is ___.`, R`infinite`],
    ["Problem 4", R`A hole is a ___ discontinuity.`, R`removable`],
    ["Problem 5", R`Continuity at $a$ requires $f(a)$ to be ___.`, R`defined`],
    ["Problem 6", R`Where is $f(x)=\dfrac1{x-5}$ discontinuous?`, R`$x=5$`],
    ["Problem 7", R`Is $\sqrt{x}$ continuous at $x=4$?`, R`yes`],
    ["Problem 8", R`If the left and right limits differ, the discontinuity is ___.`, R`jump`],
  ],
};
