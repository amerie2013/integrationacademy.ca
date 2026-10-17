// Worksheet 3.1 problems: 3 knowledge, 5 application, 5 textbook-level (multi-part) problems.
// Every output is computed by running the code (codekit.out).
import { codeT, ct, out } from "./codekit.mjs";

const P3 = `m = 9
m = m // 2
m = m * m
print(m)`;
const P4 = `def f(x):
    return 3 * x - 8

print(f(-4), f(0))`;
const P5 = `x = 3
print(4 * x - 5 >= 2 * x + 1)`;
const P7 = `for x in range(-3, 8):
    if 5 - 2 * x > -3:
        print(x, end=" ")`;
const P9 = `def planA(m):
    return 20 + 0.10 * m

def planB(m):
    return 35 + 0.04 * m

print(planA(100), planB(100))`;
const P9b = `${P9.split("\n\nprint")[0]}

m = 0
while planB(m) >= planA(m):
    m = m + 10
print(m)`;
const P10 = `def tiles(n):
    return 6 * n - 4

n = 1
while tiles(n) <= 1000:
    n = n + 1
print(n)`;
const P11 = `for x in range(-10, 11):
    if -4 <= 3 * x + 2 < 14:
        print(x, end=" ")`;
const P12 = `a = 78
b = 85
c = 91
avg = a + b + c / 3
print(avg)`;
const P13 = `for x in range(-50, 51):
    if 5 * x - 18 == 2 * x + 9:
        print(x)`;
const P13b = P13.replace("5 * x - 18 == 2 * x + 9", "4 * (x - 3) == 2 * x + 10");

export const PROBLEMS = [
  { level: 1, q: String.raw`Predict the output of ${ct("print(4 + 6 / 2 * 3)")}.`, recap: String.raw`Output of ${ct("print(4 + 6 / 2 * 3)")}.`, ans: `${ct(out("print(4 + 6 / 2 * 3)"))}` },
  { level: 1, q: String.raw`Write one line of Python that stores $y=5x^2-2x+7$ in the variable ${ct("y")}.`, recap: String.raw`Python for $y=5x^2-2x+7$.`, ans: ct("y = 5 * x ** 2 - 2 * x + 7") },
  { level: 1, q: String.raw`Trace the program and give the output.${codeT(P3)}`, recap: String.raw`Trace ${ct("m = 9; m = m // 2; m = m * m")}.`, ans: ct(out(P3)) },
  { level: 2, q: String.raw`What does this program print?${codeT(P4)}`, recap: String.raw`${ct("f(x) = 3*x - 8")}: ${ct("f(-4), f(0)")}.`, ans: ct(out(P4)) },
  { level: 2, q: String.raw`What does this program print? What question about $4x-5\ge2x+1$ does it answer?${codeT(P5)}`, recap: String.raw`Does $x=3$ satisfy $4x-5\ge2x+1$?`, ans: String.raw`${ct(out(P5))}: $x=3$ satisfies it ($7\ge7$)` },
  { level: 2, q: String.raw`Write a function ${ct("to_f(c)")} that returns the Fahrenheit temperature $1.8c+32$, and give the value of ${ct("to_f(25)")}.`, recap: String.raw`Function ${ct("to_f(c)")}; value at $25$.`, ans: String.raw`${ct("def to_f(c): return 1.8 * c + 32")}; ${ct(out("def to_f(c):\n    return 1.8 * c + 32\nprint(to_f(25))"))}` },
  { level: 2, q: String.raw`What does this program print? Check with algebra.${codeT(P7)}`, recap: String.raw`Integers in $[-3,7]$ with $5-2x>-3$.`, ans: String.raw`${ct(out(P7).trim())} ($x<4$)` },
  { level: 2, q: String.raw`Explain why ${ct("y = x ** 2")} and ${ct("y = -x ** 2")} give different values when ${ct("x = -3")}.`, recap: String.raw`${ct("x ** 2")} vs ${ct("-x ** 2")} at $x=-3$.`, ans: String.raw`$(-3)^2=9$; ${ct("-x ** 2")} means $-(x^2)=-9$ (power before negation)` },
  { level: 3, space: 5.5,
    q: String.raw`Two phone plans are written as functions.${codeT(P9)}
(a) Predict the output.
(b) Write a ${ct("while")} loop that starts at ${ct("m = 0")}, adds $10$ minutes each pass while plan B costs at least as much as plan A, and prints ${ct("m")}. What does it print?
(c) Solve $20+0.10m=35+0.04m$ with algebra and explain why the loop's answer is a little larger.`,
    recap: "Plans A = 20 + 0.10m and B = 35 + 0.04m.",
    ans: String.raw`(a) ${ct(out(P9))} (b) ${ct(out(P9b))} (c) $0.06m=15$, $m=250$; at $250$ the plans tie, and the loop counts by $10$, so it stops at the first multiple of $10$ past $250$.` },
  { level: 3, space: 5,
    q: String.raw`Figure $n$ of a pattern has ${ct("tiles(n) = 6 * n - 4")} tiles.
(a) Make a table of values for $n=1$ to $5$.
(b) Which figure has $116$ tiles? Show the algebra.
(c) Predict the output of this program, then check with algebra.${codeT(P10)}`,
    recap: String.raw`Pattern ${ct("6 * n - 4")}.`,
    ans: String.raw`(a) $2, 8, 14, 20, 26$ (b) $6n-4=116$, $n=20$ (c) ${ct(out(P10))}: $6n-4>1000$ gives $n>167.3$` },
  { level: 3, space: 5,
    q: String.raw`(a) Solve $-4\le3x+2<14$ with algebra.
(b) Predict the output of this program.${codeT(P11)}
(c) Explain why the program cannot show the complete solution of the inequality.`,
    recap: String.raw`Compound inequality $-4\le3x+2<14$.`,
    ans: String.raw`(a) $-2\le x<4$ (b) ${ct(out(P11).trim())} (c) It tests only integers from $-10$ to $10$; decimals such as $3.5$ also satisfy the inequality.` },
  { level: 3, space: 5,
    q: String.raw`This program is meant to print the mean of three test marks.${codeT(P12)}
(a) Predict what it actually prints, and explain the error.
(b) Correct the program and give the correct mean to one decimal place.
(c) What kind of error is this: syntax, runtime or logic?`,
    recap: "Mean of 78, 85, 91 without brackets.",
    ans: String.raw`(a) ${ct(out(P12))}: only $c$ is divided by $3$ (b) ${ct("avg = (a + b + c) / 3")}; $${out("print(round((78 + 85 + 91) / 3, 1))")}$ (c) logic error — it runs but gives a wrong answer` },
  { level: 3, space: 5,
    q: String.raw`(a) Predict the output of this program.${codeT(P13)}
(b) Change the condition to test $4(x-3)=2x+10$. What is printed?
(c) If the equation were $2x=9$, what would the program print? Explain.`,
    recap: "Solving equations by searching integers.",
    ans: String.raw`(a) ${ct(out(P13))} (b) ${ct(out(P13b))} (c) Nothing: the solution $4.5$ is not an integer, so no tested value makes the condition true.` },
];
