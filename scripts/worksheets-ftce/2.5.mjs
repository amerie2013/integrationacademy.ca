const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "2.5",
  title: "Properties of Functions",
  intro: "Structural properties — one-to-one, even/odd symmetry, zeros, and periodicity — that the exam tests conceptually and graphically.",
  lesson: [
    ["One-to-one", R`A function is one-to-one if each output comes from exactly one input (horizontal-line test). The one-to-one functions are exactly those that have inverses.`],
    ["Even & odd", R`<b>Even</b>: $f(-x)=f(x)$ — symmetric about the $y$-axis (e.g. $x^2$). <b>Odd</b>: $f(-x)=-f(x)$ — symmetric about the origin (e.g. $x^3$). Many functions are neither.`],
    ["Zeros & periodicity", R`A <b>zero</b> (root) is an input with $f(x)=0$ — an $x$-intercept. A function is <b>periodic</b> with period $p$ if $f(x+p)=f(x)$; e.g. $\sin x$ has period $2\pi$.`],
  ],
  examples: [
    ["Example 1: Even", R`Is $f(x)=x^4-3x^2$ even, odd, or neither?`, R`$f(-x)=x^4-3x^2=f(x)$ — even.`],
    ["Example 2: Odd", R`Is $f(x)=x^3+x$ even, odd, or neither?`, R`$f(-x)=-x^3-x=-f(x)$ — odd.`],
    ["Example 3: Neither", R`Is $f(x)=x^2+x$ even, odd, or neither?`, R`$f(-x)=x^2-x$, which is neither $f(x)$ nor $-f(x)$ — neither.`],
    ["Example 4: Zeros", R`Find the zeros of $f(x)=x^2-5x+6$.`, R`$(x-2)(x-3)=0\Rightarrow x=2,3$.`],
    ["Example 5: Period", R`State the period of $f(x)=\sin(2x)$.`, R`$\dfrac{2\pi}{2}=\pi$.`],
  ],
  questions: [
    ["Problem 1", R`Is $f(x)=x^2$ even, odd, or neither?`, R`even`],
    ["Problem 2", R`Is $f(x)=x^3$ even, odd, or neither?`, R`odd`],
    ["Problem 3", R`Is $f(x)=x^2+1$ even, odd, or neither?`, R`even`],
    ["Problem 4", R`Is $f(x)=x^3-x$ even, odd, or neither?`, R`odd`],
    ["Problem 5", R`Zeros of $f(x)=x^2-9$.`, R`$x=\pm 3$`],
    ["Problem 6", R`A one-to-one function passes which test?`, R`the horizontal-line test`],
    ["Problem 7", R`Period of $\cos x$.`, R`$2\pi$`],
    ["Problem 8", R`Is $f(x)=|x|$ even or odd?`, R`even`],
  ],
};
