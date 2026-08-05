const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "8.3",
  title: "The Derivative",
  intro: "The derivative as a limit of the difference quotient, its interpretation as the slope of the tangent line and instantaneous rate of change.",
  lesson: [
    ["Definition", R`$f'(x)=\displaystyle\lim_{h\to0}\dfrac{f(x+h)-f(x)}{h}$ — the instantaneous rate of change and the slope of the tangent line.`],
    ["Interpretations", R`$f'(a)$ is the slope of the tangent at $x=a$. For a position function $s(t)$, $s'(t)$ is the velocity.`],
    ["Notation", R`$f'(x)$, $\dfrac{dy}{dx}$, $\dfrac{d}{dx}$. The derivative of a constant is $0$.`],
  ],
  examples: [
    ["Example 1: From the definition", R`Find $f'(x)$ for $f(x)=x^2$.`, R`$\lim_{h\to0}\dfrac{(x+h)^2-x^2}{h}=\lim_{h\to0}(2x+h)=2x$.`],
    ["Example 2: Slope at a point", R`For $f(x)=x^2$, find the tangent slope at $x=3$.`, R`$f'(x)=2x\Rightarrow f'(3)=6$.`],
    ["Example 3: Constant", R`Find the derivative of $f(x)=5$.`, R`$0$.`],
    ["Example 4: Slope at a point", R`For $f(x)=x^2$, find the tangent slope at $x=1$.`, R`$f'(1)=2$.`],
    ["Example 5: Velocity", R`If $s(t)=t^2$, find the velocity at $t=3$.`, R`$s'(t)=2t\Rightarrow s'(3)=6$.`],
  ],
  questions: [
    ["Problem 1", R`Derivative of $f(x)=x^2$?`, R`$2x$`],
    ["Problem 2", R`Tangent slope to $f(x)=x^2$ at $x=2$?`, R`$4$`],
    ["Problem 3", R`Derivative of a constant?`, R`$0$`],
    ["Problem 4", R`$f'(x)$ gives the slope of the ___.`, R`tangent line`],
    ["Problem 5", R`If $s(t)=t^3$, then $s'(t)=$ ?`, R`$3t^2$`],
    ["Problem 6", R`The derivative is the limit of a ___.`, R`difference quotient`],
    ["Problem 7", R`Derivative of $f(x)=3x$?`, R`$3$`],
    ["Problem 8", R`The instantaneous rate of change is the ___.`, R`derivative`],
  ],
};
