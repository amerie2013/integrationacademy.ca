const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "1.7",
  title: "Quadratic Equations",
  intro: "Every method for solving quadratics — factoring, square roots, completing the square, and the quadratic formula — plus the discriminant and root–coefficient relationships.",
  lesson: [
    ["Factoring & square roots", R`If a quadratic factors, set each factor to zero (zero-product property). For $x^2=k$ ($k\ge 0$), $x=\pm\sqrt{k}$.`],
    ["Completing the square & the formula", R`Completing the square rewrites $ax^2+bx+c=0$ as a perfect square; carrying it out in general yields the <b>quadratic formula</b> $x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$.`],
    ["Discriminant & roots", R`The discriminant $b^2-4ac$ gives two real roots ($>0$), one ($=0$), or two complex conjugate roots ($<0$). Also, sum of roots $=-\tfrac{b}{a}$ and product $=\tfrac{c}{a}$.`],
  ],
  examples: [
    ["Example 1: Factoring", R`Solve $x^2-5x+6=0$.`, R`$(x-2)(x-3)=0\Rightarrow x=2,3$.`],
    ["Example 2: Square roots", R`Solve $x^2=49$.`, R`$x=\pm 7$.`],
    ["Example 3: Quadratic formula", R`Solve $x^2+4x-1=0$.`, R`$x=\dfrac{-4\pm\sqrt{16+4}}{2}=\dfrac{-4\pm2\sqrt5}{2}=-2\pm\sqrt5$.`],
    ["Example 4: Completing the square", R`Solve $2x^2+3x-2=0$.`, R`Divide by $2$: $x^2+\tfrac32x=1$. Add $(\tfrac34)^2=\tfrac{9}{16}$: $(x+\tfrac34)^2=\tfrac{25}{16}$, so $x+\tfrac34=\pm\tfrac54\Rightarrow x=\tfrac12$ or $-2$.`],
    ["Example 5: Discriminant", R`Describe the roots of $2x^2-3x+5=0$.`, R`$b^2-4ac=9-40=-31<0$: two complex conjugate roots.`],
  ],
  questions: [
    ["Problem 1", R`Solve $x^2-7x+12=0$.`, R`$x=3,4$`],
    ["Problem 2", R`Solve $x^2=25$.`, R`$x=\pm 5$`],
    ["Problem 3", R`Solve $x^2+2x-8=0$.`, R`$x=-4,2$`],
    ["Problem 4", R`Solve $x^2-6x+9=0$.`, R`$x=3$ (double root)`],
    ["Problem 5", R`Solve $2x^2-5x+2=0$.`, R`$x=\tfrac12,2$`],
    ["Problem 6", R`Find the discriminant of $x^2+x+1$.`, R`$-3$ (no real roots)`],
    ["Problem 7", R`Solve $x^2-4x+13=0$.`, R`$x=2\pm 3i$`],
    ["Problem 8", R`State the sum and product of the roots of $x^2-5x+6=0$.`, R`sum $5$, product $6$`],
  ],
};
