const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "2.2",
  title: "Function Arithmetic & Composition",
  intro: "Functions can be combined by the four operations and by composition. This lesson drills both, with attention to domains and the non-commutativity of composition.",
  lesson: [
    ["The four operations", R`$(f\pm g)(x)=f(x)\pm g(x)$, $(fg)(x)=f(x)g(x)$, and $(f/g)(x)=\dfrac{f(x)}{g(x)}$ with $g(x)\ne 0$. Domains intersect (excluding zeros of $g$ for the quotient).`],
    ["Composition", R`$(f\circ g)(x)=f\big(g(x)\big)$ — apply $g$ first, then $f$. Composition is generally <b>not</b> commutative: $f\circ g\ne g\circ f$.`],
    ["Domain of a composite", R`For $f\circ g$, the input $x$ must be in the domain of $g$, and $g(x)$ must lie in the domain of $f$.`],
  ],
  examples: [
    ["Example 1: Sum", R`For $f(x)=x^2$, $g(x)=2x-1$, find $(f+g)(x)$.`, R`$x^2+2x-1$.`],
    ["Example 2: Nested evaluation", R`For $f(x)=7x^2+3$, $g(x)=2x-9$, find $g(f(2))$.`, R`$f(2)=31$, then $g(31)=2(31)-9=53$.`],
    ["Example 3: Composition", R`For $f(x)=x^2$, $g(x)=x+3$, find $(f\circ g)(x)$.`, R`$f(g(x))=(x+3)^2$.`],
    ["Example 4: Order matters", R`With the same $f,g$, find $(g\circ f)(x)$.`, R`$g(f(x))=x^2+3\ne (x+3)^2$ — composition is not commutative.`],
    ["Example 5: Domain", R`For $f(x)=\tfrac1x$, $g(x)=x-2$, find $(f\circ g)(x)$ and its domain.`, R`$\dfrac{1}{x-2}$, domain $x\ne 2$.`],
  ],
  questions: [
    ["Problem 1", R`$f(x)=x+1$, $g(x)=x^2$: find $(f+g)(2)$.`, R`$7$`],
    ["Problem 2", R`$f(x)=2x$, $g(x)=x-3$: find $(fg)(x)$.`, R`$2x^2-6x$`],
    ["Problem 3", R`$f(x)=3x$, $g(x)=x+1$: find $(f\circ g)(x)$.`, R`$3x+3$`],
    ["Problem 4", R`$f(x)=x^2$, $g(x)=x-4$: find $(g\circ f)(x)$.`, R`$x^2-4$`],
    ["Problem 5", R`$f(x)=x^2$, $g(x)=\sqrt{x}$: find $(f\circ g)(x)$ for $x\ge 0$.`, R`$x$`],
    ["Problem 6", R`$f(x)=x-5$, $g(x)=x+5$: find $(f\circ g)(x)$.`, R`$x$`],
    ["Problem 7", R`Is $f\circ g=g\circ f$ in general?`, R`no`],
    ["Problem 8", R`$f(x)=2x+1$: find $(f\circ f)(x)$.`, R`$4x+3$`],
  ],
};
