const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "5.6",
  title: "Completing the Square & The Quadratic Formula",
  intro: "When a quadratic won't factor nicely, completing the square and the quadratic formula always work. This worksheet practises both, plus the discriminant.",
  lesson: [
    ["Completing the square", R`To solve $x^2 + bx = c$, add $\left(\dfrac{b}{2}\right)^2$ to both sides to form a perfect square.`],
    ["The quadratic formula", R`$x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$ solves any $ax^2 + bx + c = 0$.`],
    ["The discriminant", R`$b^2 - 4ac$: positive → two real roots, zero → one, negative → none.`],
  ],
  examples: [
    ["Example 1: Complete the square", R`Solve $x^2 + 6x = 7$.`, R`Add $9$: $(x + 3)^2 = 16 \Rightarrow x + 3 = \pm 4 \Rightarrow x = 1$ or $x = -7$.`],
    ["Example 2: Formula", R`Solve $x^2 + 4x - 5 = 0$.`, R`Disc $= 16 + 20 = 36$: $x = \dfrac{-4 \pm 6}{2} \Rightarrow x = 1$ or $x = -5$.`],
    ["Example 3: Irrational roots", R`Solve $x^2 - 2x - 1 = 0$.`, R`Disc $= 4 + 4 = 8$: $x = \dfrac{2 \pm 2\sqrt{2}}{2} = 1 \pm \sqrt{2}$.`],
    ["Example 4: Leading coefficient", R`Solve $2x^2 + 3x - 2 = 0$.`, R`Disc $= 9 + 16 = 25$: $x = \dfrac{-3 \pm 5}{4} \Rightarrow x = \dfrac{1}{2}$ or $x = -2$.`],
    ["Example 5: No real roots", R`How many real roots has $x^2 + x + 1 = 0$?`, R`Disc $= 1 - 4 = -3 < 0$: none.`],
    ["Example 6: Completing constant", R`What completes the square for $x^2 + 8x$?`, R`$\left(\dfrac{8}{2}\right)^2 = 16$.`],
  ],
  questions: [
    ["Problem 1", R`What completes the square for $x^2 + 10x$?`, R`$25$`],
    ["Problem 2", R`Solve $x^2 + 6x + 8 = 0$.`, R`$x = -2$ or $x = -4$`],
    ["Problem 3", R`Solve $x^2 - 4x + 3 = 0$.`, R`$x = 1$ or $x = 3$`],
    ["Problem 4", R`Find the discriminant of $x^2 - 5x + 6$.`, R`$1$`],
    ["Problem 5", R`Solve $x^2 + 2x - 3 = 0$.`, R`$x = 1$ or $x = -3$`],
    ["Problem 6", R`How many real roots has $x^2 + x + 5 = 0$?`, R`None`],
    ["Problem 7", R`Solve $x^2 = 6x - 9$.`, R`$x = 3$`],
    ["Problem 8", R`Solve $2x^2 - 5x + 2 = 0$.`, R`$x = 2$ or $x = \dfrac{1}{2}$`],
    ["Problem 9", R`Write the quadratic formula for $ax^2 + bx + c = 0$.`, R`$x = \dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a}$`],
    ["Problem 10", R`Solve $x^2 - 2x - 8 = 0$.`, R`$x = 4$ or $x = -2$`],
    ["Problem 11", R`How many real roots if the discriminant is $0$?`, R`One`],
    ["Problem 12", R`Solve $x^2 + 4x + 1 = 0$.`, R`$x = -2 \pm \sqrt{3}$`],
  ],
};
