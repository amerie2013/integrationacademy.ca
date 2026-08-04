const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "1.4",
  title: "Linear & Radical Equations",
  intro: "Solving equations in one unknown — linear, fractional, and radical — with careful attention to extraneous solutions from squaring.",
  lesson: [
    ["Linear equations", R`Collect the variable on one side and constants on the other, then divide. An equation true for all $x$ (e.g. $2(x+1)=2x+2$) is an <b>identity</b>; one true for no $x$ is a <b>contradiction</b>.`],
    ["Fractional equations", R`Clear denominators by multiplying through by the LCD (or cross-multiply a single proportion). Exclude any value that makes a denominator zero.`],
    ["Radical equations", R`Isolate the radical and square both sides. Squaring can create <b>extraneous</b> roots, so every candidate must be checked in the original equation.`],
  ],
  examples: [
    ["Example 1: Linear", R`Solve $3x-7=2x+5$.`, R`$3x-2x=5+7\Rightarrow x=12$.`],
    ["Example 2: Fractional", R`Solve $\dfrac{x}{2}+\dfrac{x}{3}=5$.`, R`Multiply by $6$: $3x+2x=30\Rightarrow 5x=30\Rightarrow x=6$.`],
    ["Example 3: Cross-multiply", R`Solve $\dfrac{2}{x}=\dfrac{5}{x+3}$.`, R`$2(x+3)=5x\Rightarrow 2x+6=5x\Rightarrow x=2$.`],
    ["Example 4: Radical (check!)", R`Solve $\sqrt{2x+1}=x-1$.`, R`Square: $2x+1=x^2-2x+1\Rightarrow x^2-4x=0\Rightarrow x=0,4$. Check: $x=0$ gives $1\ne-1$ (reject); $x=4$ gives $3=3$. So $x=4$.`],
    ["Example 5: Radical", R`Solve $\sqrt{x+3}=4$.`, R`Square: $x+3=16\Rightarrow x=13$.`],
  ],
  questions: [
    ["Problem 1", R`Solve $5x+3=2x-9$.`, R`$x=-4$`],
    ["Problem 2", R`Solve $2(x-3)=4x+2$.`, R`$x=-4$`],
    ["Problem 3", R`Solve $\dfrac{x}{4}-\dfrac{x}{6}=1$.`, R`$x=12$`],
    ["Problem 4", R`Solve $\dfrac{3}{x-1}=\dfrac{2}{x}$.`, R`$x=-2$`],
    ["Problem 5", R`Solve $\sqrt{x-2}=3$.`, R`$x=11$`],
    ["Problem 6", R`Solve $\sqrt{3x+1}=x-1$ (check).`, R`$x=5$`],
    ["Problem 7", R`Solve $\dfrac{x}{2}+3=\dfrac{x}{5}+9$.`, R`$x=20$`],
    ["Problem 8", R`Is $2(x+1)=2x+2$ an identity or conditional?`, R`identity (true for all $x$)`],
  ],
};
