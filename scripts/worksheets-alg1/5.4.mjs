const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "5.4",
  title: "Features of Parabolas",
  intro: "A parabola's direction, vertex, axis of symmetry, and intercepts all come straight from y = ax² + bx + c. This worksheet practises reading each one.",
  lesson: [
    ["Axis of symmetry", R`For $y = ax^2 + bx + c$, the axis of symmetry is $x = -\dfrac{b}{2a}$; the vertex lies on it.`],
    ["Direction and intercepts", R`$a > 0$ opens up (minimum); $a < 0$ opens down (maximum). The $y$-intercept is $c$; $x$-intercepts come from $y = 0$.`],
    ["Vertex y-value", "Substitute the axis-of-symmetry x-value back into the equation to get the vertex's y-coordinate."],
  ],
  examples: [
    ["Example 1: Axis of symmetry", R`Find the axis of symmetry of $y = x^2 - 4x + 3$.`, R`$x = -\dfrac{-4}{2(1)} = 2$.`],
    ["Example 2: Vertex", R`Find the vertex of $y = x^2 - 4x + 3$.`, R`$x = 2$, $y = 4 - 8 + 3 = -1$: vertex $(2, -1)$.`],
    ["Example 3: Direction and y-intercept", R`Describe $y = -2x^2 + 3$.`, R`$a < 0$ opens down; $y$-intercept $3$.`],
    ["Example 4: x-intercepts", R`Find the $x$-intercepts of $y = x^2 - 9$.`, R`$x^2 = 9 \Rightarrow x = \pm 3$: $(3, 0)$ and $(-3, 0)$.`],
    ["Example 5: Vertex", R`Find the vertex of $y = x^2 + 6x + 5$.`, R`$x = -3$, $y = 9 - 18 + 5 = -4$: vertex $(-3, -4)$.`],
    ["Example 6: Maximum", R`Find the maximum of $y = -x^2 + 4x$.`, R`Opens down; $x = 2$, $y = -4 + 8 = 4$: maximum value $4$.`],
  ],
  questions: [
    ["Problem 1", R`Axis of symmetry of $y = x^2 - 6x + 1$?`, R`$x = 3$`],
    ["Problem 2", R`$y$-intercept of $y = x^2 + 2x - 5$?`, R`$-5$`],
    ["Problem 3", R`Does $y = 3x^2 - 1$ open up or down?`, R`Up`],
    ["Problem 4", R`Does $y = -x^2 + 2$ open up or down?`, R`Down`],
    ["Problem 5", R`Vertex of $y = x^2 - 2x - 3$?`, R`$(1, -4)$`],
    ["Problem 6", R`$x$-intercepts of $y = x^2 - 4$?`, R`$(2, 0)$ and $(-2, 0)$`],
    ["Problem 7", R`Axis of symmetry of $y = 2x^2 + 8x$?`, R`$x = -2$`],
    ["Problem 8", R`Vertex of $y = x^2 + 4x + 4$?`, R`$(-2, 0)$`],
    ["Problem 9", R`Is the vertex of $y = -x^2 + 6x$ a max or min?`, R`Maximum`],
    ["Problem 10", R`$y$-intercept of $y = -3x^2 + 5x - 2$?`, R`$-2$`],
    ["Problem 11", R`Vertex of $y = x^2 - 8x + 12$?`, R`$(4, -4)$`],
    ["Problem 12", R`Axis of symmetry of $y = x^2 + 10x + 7$?`, R`$x = -5$`],
  ],
};
