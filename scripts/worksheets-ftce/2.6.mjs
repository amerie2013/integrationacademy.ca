const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "2.6",
  title: "Graphing, Symmetry & Asymptotes",
  intro: "Reading a graph's key features — intercepts, symmetry, and asymptotes — and using them to sketch functions, especially rationals.",
  lesson: [
    ["Symmetry tests", R`<b>$y$-axis</b> symmetry if replacing $x$ with $-x$ leaves the equation unchanged (even). <b>Origin</b> symmetry if replacing $(x,y)$ with $(-x,-y)$ is unchanged (odd). <b>$x$-axis</b> symmetry if replacing $y$ with $-y$ is unchanged (not a function).`],
    ["Asymptotes of rationals", R`A <b>vertical</b> asymptote occurs where the denominator is zero (numerator nonzero). A <b>horizontal</b> asymptote comes from comparing degrees: equal → ratio of leading coefficients; numerator degree smaller → $y=0$.`],
    ["Intercepts", R`$x$-intercepts where $y=0$ (numerator zero); the $y$-intercept where $x=0$. Combine intercepts, symmetry, and asymptotes to sketch.`],
  ],
  examples: [
    ["Example 1: Vertical asymptote", R`Find the vertical asymptote of $f(x)=\dfrac{1}{x-3}$.`, R`Denominator zero at $x=3$: vertical asymptote $x=3$.`],
    ["Example 2: Horizontal (equal degrees)", R`Horizontal asymptote of $\dfrac{2x}{x+1}$.`, R`Degrees equal; ratio of leading coefficients $\tfrac{2}{1}$: $y=2$.`],
    ["Example 3: Horizontal ($y=0$)", R`Horizontal asymptote of $\dfrac{x}{x^2+1}$.`, R`Numerator degree $<$ denominator degree: $y=0$.`],
    ["Example 4: Symmetry (even)", R`Describe the symmetry of $y=x^2$.`, R`$(-x)^2=x^2$: symmetric about the $y$-axis.`],
    ["Example 5: Symmetry (odd)", R`Describe the symmetry of $y=\dfrac1x$.`, R`Replacing $(x,y)$ with $(-x,-y)$ is unchanged: symmetric about the origin.`],
  ],
  questions: [
    ["Problem 1", R`Vertical asymptote of $\dfrac{1}{x+4}$.`, R`$x=-4$`],
    ["Problem 2", R`Horizontal asymptote of $\dfrac{3x}{x-2}$.`, R`$y=3$`],
    ["Problem 3", R`Horizontal asymptote of $\dfrac{5}{x^2+1}$.`, R`$y=0$`],
    ["Problem 4", R`$y$-intercept of $f(x)=\dfrac{x-1}{x+2}$.`, R`$(0,-\tfrac12)$`],
    ["Problem 5", R`$y=x^3$ is symmetric about the ___.`, R`origin`],
    ["Problem 6", R`$y=x^4$ is symmetric about the ___.`, R`$y$-axis`],
    ["Problem 7", R`Vertical asymptotes of $\dfrac{x+1}{x^2-4}$.`, R`$x=\pm 2$`],
    ["Problem 8", R`$x$-intercept of $f(x)=\dfrac{x-5}{x+1}$.`, R`$(5,0)$`],
  ],
};
