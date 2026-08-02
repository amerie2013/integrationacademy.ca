const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "6.1",
  title: "Exponential Growth and Decay Models",
  intro: "Exponential models multiply by a constant factor each period. This worksheet practises writing models from a rate and evaluating them.",
  lesson: [
    ["The model", R`$y = a(b)^x$: $a$ is the starting amount, $b$ is the growth factor. $b > 1$ grows; $0 < b < 1$ decays.`],
    ["Rate to factor", R`Growth of $r$ → $b = 1 + r$; decay of $r$ → $b = 1 - r$ (as decimals). E.g. $10\%$ growth → $b = 1.10$.`],
    ["Evaluate", "Substitute the number of periods for $x$ and compute."],
  ],
  examples: [
    ["Example 1: Growth model", R`A population starts at $200$ and grows $10\%$ per year. Write the model.`, R`$y = 200(1.10)^x$.`],
    ["Example 2: Decay model", R`A car worth $\$20{,}000$ loses $15\%$ per year. Write the model.`, R`$y = 20000(0.85)^x$.`],
    ["Example 3: Growth or decay", R`Does $y = 5(1.4)^x$ grow or decay?`, R`$b = 1.4 > 1$, so it grows.`],
    ["Example 4: Growth or decay", R`Does $y = 100(0.9)^x$ grow or decay?`, R`$b = 0.9 < 1$, so it decays.`],
    ["Example 5: Starting value", R`What is the starting value of $y = 300(1.05)^x$?`, R`$300$ (the value at $x = 0$).`],
    ["Example 6: Evaluate", R`Evaluate $y = 2(3)^x$ at $x = 2$.`, R`$2 \cdot 3^2 = 2 \cdot 9 = 18$.`],
  ],
  questions: [
    ["Problem 1", R`Starting value of $y = 500(1.2)^x$?`, R`$500$`],
    ["Problem 2", R`Growth or decay: $y = 8(1.5)^x$?`, R`Growth`],
    ["Problem 3", R`Growth or decay: $y = 40(0.75)^x$?`, R`Decay`],
    ["Problem 4", R`Growth factor for $25\%$ growth?`, R`$1.25$`],
    ["Problem 5", R`Growth factor for $30\%$ decay?`, R`$0.70$`],
    ["Problem 6", R`Model: start $1000$, grow $4\%$/yr.`, R`$y = 1000(1.04)^x$`],
    ["Problem 7", R`Model: start $800$, decay $20\%$/yr.`, R`$y = 800(0.80)^x$`],
    ["Problem 8", R`Evaluate $y = 3(2)^x$ at $x = 3$.`, R`$24$`],
    ["Problem 9", R`Evaluate $y = 100(0.5)^x$ at $x = 2$.`, R`$25$`],
    ["Problem 10", R`Is $b = 1$ growth, decay, or constant?`, R`Constant`],
    ["Problem 11", R`Evaluate $y = 5(2)^x$ at $x = 0$.`, R`$5$`],
    ["Problem 12", R`Growth factor for doubling ($100\%$ growth)?`, R`$2$`],
  ],
};
