const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "4.2",
  title: "Operations with Radical Expressions",
  intro: "Radicals simplify by pulling out perfect squares, and they add only when 'like'. This worksheet practises simplifying, combining, multiplying, and rationalizing.",
  lesson: [
    ["Simplify radicals", R`Factor out perfect squares: $\sqrt{ab} = \sqrt{a}\,\sqrt{b}$, so $\sqrt{50} = \sqrt{25}\,\sqrt{2} = 5\sqrt{2}$.`],
    ["Add or subtract like radicals", R`Only like radicals combine: $3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2}$.`],
    ["Multiply and rationalize", R`$\sqrt{a}\cdot\sqrt{b} = \sqrt{ab}$; clear a denominator radical by multiplying top and bottom, e.g. $\dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$.`],
  ],
  examples: [
    ["Example 1: Simplify", R`Simplify $\sqrt{50}$.`, R`$\sqrt{25}\,\sqrt{2} = 5\sqrt{2}$.`],
    ["Example 2: Larger square factor", R`Simplify $\sqrt{72}$.`, R`$\sqrt{36}\,\sqrt{2} = 6\sqrt{2}$.`],
    ["Example 3: Add like radicals", R`Simplify $3\sqrt{5} + 4\sqrt{5}$.`, R`$7\sqrt{5}$.`],
    ["Example 4: Multiply to a whole number", R`Simplify $\sqrt{3}\cdot\sqrt{12}$.`, R`$\sqrt{36} = 6$.`],
    ["Example 5: Multiply with coefficients", R`Simplify $2\sqrt{6}\cdot 3\sqrt{2}$.`, R`$6\sqrt{12} = 6 \cdot 2\sqrt{3} = 12\sqrt{3}$.`],
    ["Example 6: Rationalize", R`Rationalize $\dfrac{1}{\sqrt{3}}$.`, R`Multiply by $\dfrac{\sqrt{3}}{\sqrt{3}}$: $\dfrac{\sqrt{3}}{3}$.`],
  ],
  questions: [
    ["Problem 1", R`Simplify $\sqrt{18}$.`, R`$3\sqrt{2}$`],
    ["Problem 2", R`Simplify $\sqrt{48}$.`, R`$4\sqrt{3}$`],
    ["Problem 3", R`Simplify $2\sqrt{7} + 5\sqrt{7}$.`, R`$7\sqrt{7}$`],
    ["Problem 4", R`Simplify $6\sqrt{3} - \sqrt{3}$.`, R`$5\sqrt{3}$`],
    ["Problem 5", R`Simplify $\sqrt{2}\cdot\sqrt{8}$.`, R`$4$`],
    ["Problem 6", R`Simplify $\sqrt{5}\cdot\sqrt{5}$.`, R`$5$`],
    ["Problem 7", R`Simplify $\sqrt{100}$.`, R`$10$`],
    ["Problem 8", R`Simplify $\sqrt{20} + \sqrt{5}$.`, R`$3\sqrt{5}$`],
    ["Problem 9", R`Rationalize $\dfrac{1}{\sqrt{5}}$.`, R`$\dfrac{\sqrt{5}}{5}$`],
    ["Problem 10", R`Simplify $3\sqrt{2}\cdot\sqrt{2}$.`, R`$6$`],
    ["Problem 11", R`Simplify $\sqrt{75}$.`, R`$5\sqrt{3}$`],
    ["Problem 12", R`Simplify $\sqrt{9x^2}$ for $x \ge 0$.`, R`$3x$`],
  ],
};
