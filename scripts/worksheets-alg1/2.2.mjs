const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "2.2",
  title: "Intercepts, Slope, and Rate of Change",
  intro: "Slope measures a line's steepness and direction; intercepts show where it crosses the axes. This worksheet practises finding both and reading slope as a rate of change.",
  lesson: [
    ["Slope", R`Slope $m = \dfrac{\text{rise}}{\text{run}} = \dfrac{y_2 - y_1}{x_2 - x_1}$. Positive rises, negative falls, $0$ is flat, and a vertical line's slope is undefined.`],
    ["Intercepts", R`The $y$-intercept is where the line meets the $y$-axis (set $x = 0$); the $x$-intercept is where it meets the $x$-axis (set $y = 0$).`],
    ["Rate of change", "In context the slope is a rate — dollars per month, km per hour — showing how fast the output changes for each unit of input."],
  ],
  examples: [
    ["Example 1: Slope from two points", R`Find the slope through $(1, 2)$ and $(4, 11)$.`, R`$m = \dfrac{11 - 2}{4 - 1} = \dfrac{9}{3} = 3$.`],
    ["Example 2: Slope from an equation", R`State the slope of $y = 3x + 5$.`, R`It's in $y = mx + b$ form, so $m = 3$.`],
    ["Example 3: y-intercept", R`Find the $y$-intercept of $y = 2x - 7$.`, R`Set $x = 0$: $y = -7$, so $(0, -7)$.`],
    ["Example 4: Intercepts of standard form", R`Find both intercepts of $2x + 3y = 12$.`, R`$y = 0$: $x = 6$ → $(6, 0)$. $x = 0$: $y = 4$ → $(0, 4)$.`],
    ["Example 5: Slope from standard form", R`Find the slope of $3x - y = 6$.`, R`Solve for $y$: $y = 3x - 6$, so $m = 3$.`],
    ["Example 6: Rate of change", R`A pool fills as $V = 100 + 20t$ (litres, minutes). What is the fill rate?`, R`The slope is $20$, so it fills at $20$ litres per minute.`],
  ],
  questions: [
    ["Problem 1", R`Find the slope through $(0, -3)$ and $(4, 5)$.`, R`$2$`],
    ["Problem 2", R`State the slope of $y = -4x + 1$.`, R`$-4$`],
    ["Problem 3", R`Find the $y$-intercept of $y = 5x - 6$.`, R`$(0, -6)$`],
    ["Problem 4", R`Find the $x$-intercept of $y = 2x - 8$.`, R`$x = 4$`],
    ["Problem 5", R`What is the slope of a horizontal line?`, R`$0$`],
    ["Problem 6", R`What is the slope of a vertical line?`, R`Undefined`],
    ["Problem 7", R`Find both intercepts of $3x + 2y = 12$.`, R`$(4, 0)$ and $(0, 6)$`],
    ["Problem 8", R`Find the slope of $2x + 4y = 8$.`, R`$-\dfrac{1}{2}$`],
    ["Problem 9", R`A candle burns from $20$ cm at $4$ cm/hour. What is the rate of change?`, R`$-4$ cm per hour`],
    ["Problem 10", R`Find the slope through $(-2, 3)$ and $(2, 11)$.`, R`$2$`],
    ["Problem 11", R`As $x$ increases by $1$, how does $y = -3x + 2$ change?`, R`Decreases by $3$`],
    ["Problem 12", R`Find the $y$-intercept of $y = -x + 9$.`, R`$(0, 9)$`],
  ],
};
