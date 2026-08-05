const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "8.1",
  title: "Limits",
  intro: "The limit concept, evaluating limits (including the 0/0 case), and limits at infinity for rational functions.",
  lesson: [
    ["What a limit is", R`$\displaystyle\lim_{x\to a}f(x)=L$ means $f(x)$ approaches $L$ as $x$ approaches $a$. The limit can exist even where $f(a)$ is undefined.`],
    ["Evaluating limits", R`Use direct substitution where $f$ is continuous. For an indeterminate $\tfrac00$, factor and cancel (or rationalize). One-sided limits from the left and right must agree for the limit to exist.`],
    ["Limits at infinity", R`For a rational function compare degrees: numerator smaller $\to 0$; equal $\to$ ratio of leading coefficients; numerator larger $\to \pm\infty$.`],
  ],
  examples: [
    ["Example 1: Substitution", R`Evaluate $\displaystyle\lim_{x\to2}(x^2+1)$.`, R`$2^2+1=5$.`],
    ["Example 2: Factor and cancel", R`Evaluate $\displaystyle\lim_{x\to3}\dfrac{x^2-9}{x-3}$.`, R`$\dfrac{(x-3)(x+3)}{x-3}=x+3\to 6$.`],
    ["Example 3: A standard limit", R`Evaluate $\displaystyle\lim_{x\to0}\dfrac{\sin x}{x}$.`, R`$1$.`],
    ["Example 4: At infinity (equal degrees)", R`Evaluate $\displaystyle\lim_{x\to\infty}\dfrac{2x+1}{x-3}$.`, R`Ratio of leading coefficients: $2$.`],
    ["Example 5: At infinity ($\\to 0$)", R`Evaluate $\displaystyle\lim_{x\to\infty}\dfrac1x$.`, R`$0$.`],
  ],
  questions: [
    ["Problem 1", R`$\displaystyle\lim_{x\to1}(3x+2)$?`, R`$5$`],
    ["Problem 2", R`$\displaystyle\lim_{x\to0}(x^2-4)$?`, R`$-4$`],
    ["Problem 3", R`$\displaystyle\lim_{x\to2}\dfrac{x^2-4}{x-2}$?`, R`$4$`],
    ["Problem 4", R`$\displaystyle\lim_{x\to\infty}\dfrac5x$?`, R`$0$`],
    ["Problem 5", R`$\displaystyle\lim_{x\to\infty}\dfrac{3x}{x+1}$?`, R`$3$`],
    ["Problem 6", R`$\displaystyle\lim_{x\to0}\dfrac{\sin x}{x}$?`, R`$1$`],
    ["Problem 7", R`$\displaystyle\lim_{x\to4}(x+6)$?`, R`$10$`],
    ["Problem 8", R`$\displaystyle\lim_{x\to\infty}\dfrac{x^2}{x}$?`, R`$\infty$ (does not exist)`],
  ],
};
