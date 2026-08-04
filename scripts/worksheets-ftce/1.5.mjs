const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "1.5",
  title: "Lines: Slope & Forms",
  intro: "Slope and the equations of lines connect algebra to geometry. This lesson covers slope, all forms of a line, and parallel/perpendicular relationships.",
  lesson: [
    ["Slope", R`$m=\dfrac{y_2-y_1}{x_2-x_1}$. Horizontal lines have slope $0$; vertical lines have undefined slope. Parallel lines share a slope; perpendicular slopes are negative reciprocals ($m_1 m_2=-1$).`],
    ["Forms of a line", R`Slope-intercept $y=mx+b$; point-slope $y-y_1=m(x-x_1)$; standard $Ax+By=C$. Choose the form that fits the given information, then convert as needed.`],
    ["Intercepts & graphing", R`Set $y=0$ for the $x$-intercept and $x=0$ for the $y$-intercept; two intercepts graph a line quickly. From standard form the slope is $-\tfrac{A}{B}$.`],
  ],
  examples: [
    ["Example 1: Slope", R`Find the slope through $(1,2)$ and $(5,10)$.`, R`$m=\dfrac{10-2}{5-1}=\dfrac{8}{4}=2$.`],
    ["Example 2: Point-slope → slope-intercept", R`Write $y-3=2(x-1)$ in slope-intercept form.`, R`$y=2x-2+3=2x+1$.`],
    ["Example 3: Perpendicular slope", R`What slope is perpendicular to $y=\tfrac{2}{3}x+1$?`, R`Negative reciprocal of $\tfrac23$: $-\tfrac{3}{2}$.`],
    ["Example 4: Build a perpendicular line", R`Line through $(2,-1)$ perpendicular to $2x+y=7$.`, R`$2x+y=7$ has slope $-2$, so the perpendicular slope is $\tfrac12$: $y+1=\tfrac12(x-2)\Rightarrow y=\tfrac12 x-2$.`],
    ["Example 5: Intercepts", R`Find the intercepts of $3x-4y=12$.`, R`$y=0\Rightarrow x=4$: $(4,0)$. $x=0\Rightarrow y=-3$: $(0,-3)$.`],
  ],
  questions: [
    ["Problem 1", R`Find the slope through $(-1,2)$ and $(3,10)$.`, R`$2$`],
    ["Problem 2", R`Find the slope of $5x-2y=8$.`, R`$\dfrac{5}{2}$`],
    ["Problem 3", R`Write the line through $(0,4)$ with slope $-3$.`, R`$y=-3x+4$`],
    ["Problem 4", R`Are $y=2x+1$ and $y=-\tfrac12 x$ parallel, perpendicular, or neither?`, R`perpendicular`],
    ["Problem 5", R`Standard form of the line through $(1,4)$ and $(3,10)$.`, R`$3x-y=-1$`],
    ["Problem 6", R`What slope is perpendicular to a vertical line?`, R`$0$ (horizontal)`],
    ["Problem 7", R`Find the $y$-intercept of $2x+3y=12$.`, R`$(0,4)$`],
    ["Problem 8", R`Describe the line through $(2,3)$ and $(2,-5)$.`, R`vertical line $x=2$ (undefined slope)`],
  ],
};
