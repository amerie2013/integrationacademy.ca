const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "8.4",
  title: "Differentiation Rules",
  intro: "The power, constant-multiple, sum, product, quotient, and chain rules — the toolkit for differentiating algebraic functions.",
  lesson: [
    ["Power rule", R`$\dfrac{d}{dx}x^n=n\,x^{n-1}$. The constant-multiple and sum rules apply termwise.`],
    ["Product & quotient", R`$(fg)'=f'g+fg'$ and $\left(\dfrac{f}{g}\right)'=\dfrac{f'g-fg'}{g^2}$.`],
    ["Chain rule", R`$\dfrac{d}{dx}f\big(g(x)\big)=f'\big(g(x)\big)\cdot g'(x)$ — differentiate the outside, keep the inside, times the inside's derivative.`],
  ],
  examples: [
    ["Example 1: Power rule", R`Differentiate $x^5$.`, R`$5x^4$.`],
    ["Example 2: Polynomial", R`Differentiate $3x^4-2x+1$.`, R`$12x^3-2$.`],
    ["Example 3: Product", R`Differentiate $x^2(x+1)$.`, R`$2x(x+1)+x^2(1)=3x^2+2x$.`],
    ["Example 4: Chain rule", R`Differentiate $(2x+1)^3$.`, R`$3(2x+1)^2\cdot 2=6(2x+1)^2$.`],
    ["Example 5: Quotient", R`Differentiate $\dfrac{x}{x+1}$.`, R`$\dfrac{(1)(x+1)-x(1)}{(x+1)^2}=\dfrac{1}{(x+1)^2}$.`],
  ],
  questions: [
    ["Problem 1", R`Differentiate $x^7$.`, R`$7x^6$`],
    ["Problem 2", R`Differentiate $x^3-4x$.`, R`$3x^2-4$`],
    ["Problem 3", R`Differentiate $5x^2$.`, R`$10x$`],
    ["Problem 4", R`Differentiate $(2x+1)^4$.`, R`$8(2x+1)^3$`],
    ["Problem 5", R`State the product rule $(fg)'$.`, R`$f'g+fg'$`],
    ["Problem 6", R`Differentiate $x^{1/2}$.`, R`$\tfrac12 x^{-1/2}$`],
    ["Problem 7", R`Differentiate $(x^2+3)^5$.`, R`$10x(x^2+3)^4$`],
    ["Problem 8", R`Differentiate $7$ (a constant).`, R`$0$`],
  ],
};
