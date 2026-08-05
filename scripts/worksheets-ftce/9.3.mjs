const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "9.3",
  title: "Complex Numbers",
  intro: "The imaginary unit, complex arithmetic, powers of i, and conjugates for division — extending the reals to the complex numbers.",
  lesson: [
    ["The imaginary unit", R`$i=\sqrt{-1}$, so $i^2=-1$. A complex number is $a+bi$ with real part $a$ and imaginary part $b$. The reals are complex numbers with $b=0$ ($\mathbb{R}\subset\mathbb{C}$).`],
    ["Arithmetic & powers of i", R`Add/subtract by combining real and imaginary parts; multiply using $i^2=-1$. Powers of $i$ cycle: $i,\ -1,\ -i,\ 1$.`],
    ["Conjugates & division", R`The conjugate of $a+bi$ is $a-bi$. To divide, multiply numerator and denominator by the denominator's conjugate; $(a+bi)(a-bi)=a^2+b^2$.`],
  ],
  examples: [
    ["Example 1: Add", R`$(3+2i)+(1+4i)$.`, R`$4+6i$.`],
    ["Example 2: Multiply", R`$(3+i)(2+i)$.`, R`$6+3i+2i+i^2=6+5i-1=5+5i$.`],
    ["Example 3: Powers", R`Simplify $i^2$, $i^3$, $i^4$.`, R`$i^2=-1$, $i^3=-i$, $i^4=1$.`],
    ["Example 4: Square", R`$(5-4i)^2$.`, R`$25-40i+16i^2=25-40i-16=9-40i$.`],
    ["Example 5: Solve", R`Solve $x^2+16=0$.`, R`$x^2=-16\Rightarrow x=\pm4i$.`],
  ],
  questions: [
    ["Problem 1", R`Simplify $i^2$.`, R`$-1$`],
    ["Problem 2", R`$(2+3i)+(4-i)$.`, R`$6+2i$`],
    ["Problem 3", R`$(1+i)(1-i)$.`, R`$2$`],
    ["Problem 4", R`Conjugate of $3-2i$?`, R`$3+2i$`],
    ["Problem 5", R`Solve $x^2+9=0$.`, R`$x=\pm3i$`],
    ["Problem 6", R`Simplify $i^4$.`, R`$1$`],
    ["Problem 7", R`$(2+i)^2$.`, R`$3+4i$`],
    ["Problem 8", R`Real part of $5-7i$?`, R`$5$`],
  ],
};
