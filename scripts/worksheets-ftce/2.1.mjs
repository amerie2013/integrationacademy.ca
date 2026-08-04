const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "2.1",
  title: "Functions: Domain & Range",
  intro: "A function pairs each input with exactly one output. This lesson covers function notation and the two most-tested skills: finding domain and range.",
  lesson: [
    ["Definition & notation", R`A function assigns each input in its <b>domain</b> exactly one output in its <b>range</b>. The vertical-line test confirms this graphically. $f(x)$ denotes the output at input $x$.`],
    ["Finding the domain", R`Begin with all real numbers, then exclude inputs that make a denominator zero or an even-root radicand negative. For $\sqrt{\;}$ require the inside $\ge 0$; for $\tfrac{1}{\;}$ exclude zeros of the denominator.`],
    ["Finding the range", R`The set of achievable outputs. Read it from the graph or reason algebraically: $x^2\ge 0$, a vertical shift moves the range, a reflection flips it.`],
  ],
  examples: [
    ["Example 1: Evaluate", R`For $f(x)=7x^2+3$, find $f(2)$.`, R`$7(4)+3=31$.`],
    ["Example 2: Domain (rational)", R`Domain of $f(x)=\dfrac{x+1}{x-3}$.`, R`Exclude $x=3$: $(-\infty,3)\cup(3,\infty)$.`],
    ["Example 3: Domain (radical)", R`Domain of $y=\sqrt{-x+1}+5$.`, R`Require $-x+1\ge 0\Rightarrow x\le 1$.`],
    ["Example 4: Range", R`Range of $f(x)=x^2-4$.`, R`$x^2\ge 0$, so $f\ge -4$: range $y\ge -4$.`],
    ["Example 5: Combined", R`Domain of $f(x)=\dfrac{\sqrt{x}}{x-2}$.`, R`Need $x\ge 0$ and $x\ne 2$: $[0,2)\cup(2,\infty)$.`],
  ],
  questions: [
    ["Problem 1", R`For $f(x)=3x-5$, find $f(4)$.`, R`$7$`],
    ["Problem 2", R`For $f(x)=x^2+1$, find $f(-3)$.`, R`$10$`],
    ["Problem 3", R`Domain of $f(x)=\dfrac{1}{x+2}$.`, R`$x\ne -2$`],
    ["Problem 4", R`Domain of $\sqrt{x-5}$.`, R`$x\ge 5$`],
    ["Problem 5", R`Range of $f(x)=x^2$.`, R`$y\ge 0$`],
    ["Problem 6", R`Range of $f(x)=-x^2+3$.`, R`$y\le 3$`],
    ["Problem 7", R`Domain of $\dfrac{x}{x^2-9}$.`, R`$x\ne \pm 3$`],
    ["Problem 8", R`Does a vertical line represent a function?`, R`no`],
  ],
};
