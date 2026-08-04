const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "1.3",
  title: "Rational Expressions",
  intro: "A rational expression is a ratio of polynomials. This lesson covers simplifying, the four operations, restrictions, and complex fractions.",
  lesson: [
    ["Simplify & restrict", R`Factor numerator and denominator and cancel common factors. State <b>restrictions</b> ($\text{denominator}\ne 0$) from the ORIGINAL expression — cancelling can hide an excluded value.`],
    ["Multiply, divide, add, subtract", R`Multiply across (factor and cancel first); divide by multiplying by the reciprocal. To add or subtract, use the <b>least common denominator</b>, then combine numerators.`],
    ["Complex fractions", R`A fraction of fractions: either multiply top and bottom by the overall LCD, or simplify top and bottom separately and invert-and-multiply.`],
  ],
  examples: [
    ["Example 1: Simplify", R`Simplify $\dfrac{x^2-4}{x^2-x-6}$.`, R`$\dfrac{(x-2)(x+2)}{(x-3)(x+2)}=\dfrac{x-2}{x-3}$, with $x\ne -2,3$.`],
    ["Example 2: Multiply", R`Simplify $\dfrac{x}{x+1}\cdot\dfrac{x^2-1}{x^2}$.`, R`$\dfrac{x(x-1)(x+1)}{(x+1)x^2}=\dfrac{x-1}{x}$.`],
    ["Example 3: Add", R`Add $\dfrac{1}{x}+\dfrac{1}{x+1}$.`, R`LCD $x(x+1)$: $\dfrac{(x+1)+x}{x(x+1)}=\dfrac{2x+1}{x(x+1)}$.`],
    ["Example 4: Complex fraction", R`Simplify $\dfrac{\frac{1}{x}-\frac{1}{y}}{\frac{1}{x}+\frac{1}{y}}$.`, R`Multiply top and bottom by $xy$: $\dfrac{y-x}{y+x}$.`],
    ["Example 5: Divide", R`Simplify $\dfrac{x^2-9}{x+2}\div\dfrac{x-3}{x^2-4}$.`, R`$\dfrac{(x-3)(x+3)}{x+2}\cdot\dfrac{(x-2)(x+2)}{x-3}=(x+3)(x-2)$.`],
  ],
  questions: [
    ["Problem 1", R`Simplify $\dfrac{x^2-1}{x^2+2x+1}$.`, R`$\dfrac{x-1}{x+1}$`],
    ["Problem 2", R`State the restrictions on $\dfrac{3}{x^2-4}$.`, R`$x\ne 2,\ x\ne -2$`],
    ["Problem 3", R`Add $\dfrac{2}{x}+\dfrac{3}{x^2}$.`, R`$\dfrac{2x+3}{x^2}$`],
    ["Problem 4", R`Simplify $\dfrac{x+1}{x}\cdot\dfrac{x^2}{x^2-1}$.`, R`$\dfrac{x}{x-1}$`],
    ["Problem 5", R`Subtract $\dfrac{2}{x-3}-\dfrac{1}{x+2}$.`, R`$\dfrac{x+7}{(x-3)(x+2)}$`],
    ["Problem 6", R`Divide $\dfrac{6}{x^2}\div\dfrac{3}{x}$.`, R`$\dfrac{2}{x}$`],
    ["Problem 7", R`Simplify $\dfrac{1-\frac{1}{x}}{1-\frac{1}{x^2}}$.`, R`$\dfrac{x}{x+1}$`],
    ["Problem 8", R`Simplify $\dfrac{x-2}{2-x}$.`, R`$-1$`],
  ],
};
