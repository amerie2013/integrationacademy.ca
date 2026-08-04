const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "2.4",
  title: "Exponential & Logarithmic Functions",
  intro: "Exponential and logarithmic functions are inverses of each other. This lesson covers their graphs, converting between forms, and the laws of logarithms.",
  lesson: [
    ["Exponential functions", R`$y=b^x$ (with $b>0,\ b\ne 1$) has domain all reals, range $y>0$, horizontal asymptote $y=0$, and passes through $(0,1)$. It grows if $b>1$ and decays if $0<b<1$.`],
    ["Logarithm as inverse", R`$y=\log_b x \iff x=b^y$, with domain $x>0$. For example $\log_2 8=3$ because $2^3=8$.`],
    ["Laws of logarithms", R`$\log_b(MN)=\log_b M+\log_b N$; $\log_b\!\frac{M}{N}=\log_b M-\log_b N$; $\log_b(M^p)=p\log_b M$; $\log_b b=1$, $\log_b 1=0$; change of base $\log_b x=\dfrac{\ln x}{\ln b}$.`],
  ],
  examples: [
    ["Example 1: Evaluate a log", R`Evaluate $\log_2 16$.`, R`$2^4=16$, so $\log_2 16=4$.`],
    ["Example 2: Convert to log form", R`Write $3^4=81$ in logarithmic form.`, R`$\log_3 81=4$.`],
    ["Example 3: Solve for the base", R`Solve $\log_x 64=3$.`, R`$x^3=64\Rightarrow x=4$.`],
    ["Example 4: Expand", R`Expand $\log\!\dfrac{x^2 y}{z}$.`, R`$2\log x+\log y-\log z$.`],
    ["Example 5: Condense", R`Condense $2\log a+\log b-3\log c$.`, R`$\log\dfrac{a^2 b}{c^3}$.`],
  ],
  questions: [
    ["Problem 1", R`Evaluate $\log_3 9$.`, R`$2$`],
    ["Problem 2", R`Evaluate $\log_5 125$.`, R`$3$`],
    ["Problem 3", R`Write $2^5=32$ in logarithmic form.`, R`$\log_2 32=5$`],
    ["Problem 4", R`Evaluate $\log_b 1$.`, R`$0$`],
    ["Problem 5", R`Evaluate $\log_2 8+\log_2 4$.`, R`$5$`],
    ["Problem 6", R`Solve $\log_2 x=5$.`, R`$32$`],
    ["Problem 7", R`State the range of $y=b^x$.`, R`$y>0$`],
    ["Problem 8", R`State the domain of $y=\log x$.`, R`$x>0$`],
  ],
};
