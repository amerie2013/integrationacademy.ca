const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "2.3",
  title: "Inverse Functions",
  intro: "An inverse function reverses its function. This lesson covers finding, verifying, and recognizing inverses — and when they exist.",
  lesson: [
    ["What an inverse does", R`$f^{-1}$ undoes $f$: $f\big(f^{-1}(x)\big)=x$ and $f^{-1}\big(f(x)\big)=x$. Only <b>one-to-one</b> functions (passing the horizontal-line test) have inverses.`],
    ["Finding an inverse", R`Swap $x$ and $y$, then solve for $y$. The graphs of $f$ and $f^{-1}$ are reflections across the line $y=x$; domain and range swap.`],
    ["A caution", R`$f^{-1}$ is the inverse function — it is <b>not</b> $\dfrac{1}{f}$. Always verify by composing to get $x$.`],
  ],
  examples: [
    ["Example 1: Linear inverse", R`Find the inverse of $f(x)=2x+3$.`, R`$x=2y+3\Rightarrow y=\dfrac{x-3}{2}$. So $f^{-1}(x)=\dfrac{x-3}{2}$.`],
    ["Example 2: Cube", R`Find the inverse of $f(x)=x^3$.`, R`$y=\sqrt[3]{x}$.`],
    ["Example 3: Verify", R`Verify $f(x)=2x+3$ and $f^{-1}(x)=\dfrac{x-3}{2}$.`, R`$f(f^{-1}(x))=2\cdot\dfrac{x-3}{2}+3=x$. ✓`],
    ["Example 4: Rational inverse", R`Find the inverse of $f(x)=\dfrac{x+1}{x-2}$.`, R`$x(y-2)=y+1\Rightarrow xy-2x=y+1\Rightarrow y(x-1)=2x+1\Rightarrow y=\dfrac{2x+1}{x-1}$.`],
    ["Example 5: When none exists", R`Does $f(x)=x^2$ (all reals) have an inverse?`, R`No — it fails the horizontal-line test. Restricting to $x\ge 0$ gives $f^{-1}(x)=\sqrt{x}$.`],
  ],
  questions: [
    ["Problem 1", R`Inverse of $f(x)=x+7$.`, R`$x-7$`],
    ["Problem 2", R`Inverse of $f(x)=3x$.`, R`$\dfrac{x}{3}$`],
    ["Problem 3", R`Inverse of $f(x)=x-4$.`, R`$x+4$`],
    ["Problem 4", R`Inverse of $f(x)=\dfrac{x-1}{2}$.`, R`$2x+1$`],
    ["Problem 5", R`$f$ and $f^{-1}$ are reflections across which line?`, R`$y=x$`],
    ["Problem 6", R`Does $f(x)=x^2$ over all reals have an inverse?`, R`no`],
    ["Problem 7", R`Inverse of $f(x)=2x-6$.`, R`$\dfrac{x+6}{2}$`],
    ["Problem 8", R`Is $f^{-1}(x)$ the same as $\dfrac{1}{f(x)}$?`, R`no`],
  ],
};
