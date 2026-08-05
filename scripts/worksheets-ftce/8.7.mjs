const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "8.7",
  title: "Antiderivatives & the Definite Integral",
  intro: "Indefinite integrals (antiderivatives), the constant of integration, and the definite integral via the Fundamental Theorem of Calculus.",
  lesson: [
    ["Antiderivatives", R`$\displaystyle\int x^n\,dx=\dfrac{x^{n+1}}{n+1}+C$ ($n\ne-1$), and $\displaystyle\int\dfrac1x\,dx=\ln|x|+C$. The $+C$ is the constant of integration.`],
    ["The definite integral", R`By the Fundamental Theorem, $\displaystyle\int_a^b f(x)\,dx=F(b)-F(a)$, the net signed area under $f$ from $a$ to $b$.`],
    ["Common integrals", R`$\displaystyle\int e^x\,dx=e^x+C$; $\displaystyle\int\cos x\,dx=\sin x+C$; $\displaystyle\int\sin x\,dx=-\cos x+C$.`],
  ],
  examples: [
    ["Example 1: Power rule", R`$\displaystyle\int x^2\,dx$.`, R`$\dfrac{x^3}{3}+C$.`],
    ["Example 2: Sum", R`$\displaystyle\int(2x+1)\,dx$.`, R`$x^2+x+C$.`],
    ["Example 3: Definite", R`$\displaystyle\int_0^2 x\,dx$.`, R`$\left[\dfrac{x^2}{2}\right]_0^2=2$.`],
    ["Example 4: Definite", R`$\displaystyle\int_1^3 2x\,dx$.`, R`$\left[x^2\right]_1^3=9-1=8$.`],
    ["Example 5: Exponential", R`$\displaystyle\int e^x\,dx$.`, R`$e^x+C$.`],
  ],
  questions: [
    ["Problem 1", R`$\displaystyle\int x^3\,dx$?`, R`$\dfrac{x^4}{4}+C$`],
    ["Problem 2", R`$\displaystyle\int 2\,dx$?`, R`$2x+C$`],
    ["Problem 3", R`$\displaystyle\int_0^1 x\,dx$?`, R`$\dfrac12$`],
    ["Problem 4", R`$\displaystyle\int\cos x\,dx$?`, R`$\sin x+C$`],
    ["Problem 5", R`$\displaystyle\int_1^2 2x\,dx$?`, R`$3$`],
    ["Problem 6", R`$\displaystyle\int\dfrac1x\,dx$?`, R`$\ln|x|+C$`],
    ["Problem 7", R`$\displaystyle\int x\,dx$?`, R`$\dfrac{x^2}{2}+C$`],
    ["Problem 8", R`$\displaystyle\int_0^3 2\,dx$?`, R`$6$`],
  ],
};
