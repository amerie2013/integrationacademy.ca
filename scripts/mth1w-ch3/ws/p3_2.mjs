// Worksheet 3.2 problems: 3 knowledge, 5 application, 5 textbook-level (multi-part) problems.
import { codeT, ct, out } from "./codekit.mjs";

const P1 = `for i in range(4, 20, 5):
    print(i, end=" ")`;
const P2 = `total = 0
for k in range(1, 21):
    total = total + k
print(total)`;
const P3 = `temp = -4
if temp < 0:
    print("freezing")
elif temp < 15:
    print("cool")
else:
    print("warm")`;
const P4 = `count = 0
for n in range(1, 61):
    if n % 4 == 0 or n % 6 == 0:
        count = count + 1
print(count)`;
const P5 = `bacteria = 50
hours = 0
while bacteria <= 10000:
    bacteria = bacteria * 2
    hours = hours + 1
print(hours, bacteria)`;
const P6 = `def ship(kg):
    if kg <= 2:
        return 7
    else:
        return 7 + 1.5 * (kg - 2)

print(ship(1.5), ship(6))`;
const P8 = `marks = [64, 81, 77, 90, 58]
total = 0
for m in marks:
    total = total + m
print(total / len(marks))`;
const P9 = `ana = 300
ben = 900
weeks = 0
while ana < ben:
    ana = ana + 25
    ben = ben - 35
    weeks = weeks + 1
print(weeks, ana, ben)`;
const P10 = `value = 1600
years = 0
while value >= 400:
    value = value * 0.70
    years = years + 1
print(years, round(value, 2))`;
const P10b = P10.replace("0.70", "0.75");
const P11 = `def plan(gb):
    if gb <= 5:
        return 30
    elif gb <= 10:
        return 30 + 8 * (gb - 5)
    else:
        return 70 + 5 * (gb - 10)

print(plan(3), plan(8), plan(14))`;
const P12 = `n = 0
t = 0
while t <= 500:
    n = n + 1
    t = t + n
print(n, t)`;
const P13 = `x = 0
while x * x <= 30:
    x = round(x + 0.1, 1)
print(x)`;

export const PROBLEMS = [
  { level: 1, q: String.raw`What does this program print?${codeT(P1)}`, recap: String.raw`${ct("range(4, 20, 5)")}`, ans: ct(out(P1).trim()) },
  { level: 1, q: String.raw`What does this program print? What does it calculate?${codeT(P2)}`, recap: String.raw`Sum of ${ct("range(1, 21)")}.`, ans: String.raw`${ct(out(P2))}: $1+2+\dots+20$` },
  { level: 1, q: String.raw`What does this program print?${codeT(P3)}`, recap: String.raw`if/elif/else with ${ct("temp = -4")}.`, ans: ct(out(P3)) },
  { level: 2, q: String.raw`What does this program print? Check by counting multiples.${codeT(P4)}`, recap: "Multiples of 4 or 6 from 1 to 60.", ans: String.raw`${ct(out(P4))} ($15+10-5$)` },
  { level: 2, q: String.raw`A culture of $50$ bacteria doubles every hour. What does this program print?${codeT(P5)}`, recap: "Bacteria 50 doubling until over 10000.", ans: ct(out(P5)) },
  { level: 2, q: String.raw`What does this program print?${codeT(P6)}`, recap: String.raw`${ct("ship(1.5), ship(6)")}`, ans: ct(out(P6)) },
  { level: 2, q: String.raw`Write a program that prints the $7$ times table from $7\times1$ to $7\times12$, one product per line.`, recap: "7 times table with a loop.", ans: String.raw`${ct("for k in range(1, 13): print(7 * k)")}` },
  { level: 2, q: String.raw`What does this program print? Describe its input, process and output.${codeT(P8)}`, recap: "Mean of a list of marks.", ans: String.raw`${ct(out(P8))}; input: the marks; process: total them, divide by the count; output: the mean` },
  { level: 3, space: 5.5,
    q: String.raw`Ana has $300$ dollars and saves $25$ dollars a week. Ben has $900$ dollars and spends $35$ dollars a week.${codeT(P9)}
(a) Predict the output.
(b) Write and solve an inequality that gives the same number of weeks.
(c) Alter the program so that Ben spends $45$ dollars a week. Predict the new number of weeks.`,
    recap: "Ana 300 + 25/week vs Ben 900 − 35/week.",
    ans: String.raw`(a) ${ct(out(P9))} (b) $300+25w\ge900-35w$, $60w\ge600$, $w\ge10$ (c) ${ct(out(P9.replace("35", "45")).split(" ")[0])} weeks ($70w\ge600$, $w\ge8.6$)` },
  { level: 3, space: 5,
    q: String.raw`A $1600$-dollar laptop loses $30\%$ of its value each year.${codeT(P10)}
(a) Predict the output. Show the values year by year.
(b) Alter the program for a loss of $25\%$ per year. Predict the output.
(c) Which line(s) did you change? Why is it useful to store the rate in its own variable?`,
    recap: "Laptop 1600 losing 30% (then 25%) a year.",
    ans: String.raw`(a) $1120, 784, 548.8, 384.16$: ${ct(out(P10))} (b) ${ct(out(P10b))} (c) Only the multiplier; with ${ct("rate = 0.30")} on its own line, a new situation means changing one value.` },
  { level: 3, space: 5,
    q: String.raw`A data plan costs $30$ dollars for up to $5$ GB, $8$ dollars per GB from $5$ to $10$ GB, and $5$ dollars per GB over $10$ GB.${codeT(P11)}
(a) Predict the output.
(b) Explain where the number $70$ comes from.
(c) Draw a flowchart for the function.`,
    recap: "Three-tier data plan.",
    ans: String.raw`(a) ${ct(out(P11))} (b) the cost of exactly $10$ GB: $30+8(5)=70$ (c) two decisions: $gb\le5$? then $gb\le10$?` },
  { level: 3, space: 5,
    q: String.raw`The triangular numbers are $1, 3, 6, 10, 15,\dots$ (add $1$, then $2$, then $3$, \ldots).${codeT(P12)}
(a) What do the variables ${ct("n")} and ${ct("t")} represent?
(b) Predict the output.
(c) Check using the formula $T=\frac{n(n+1)}{2}$.`,
    recap: "First triangular number over 500.",
    ans: String.raw`(a) $n$: position; $t$: the $n$th triangular number (b) ${ct(out(P12))} (c) $\frac{32(33)}{2}=528>500$ and $\frac{31(32)}{2}=496\le500$` },
  { level: 3, space: 5,
    q: String.raw`This program searches in steps of $0.1$.${codeT(P13)}
(a) What does it find? Predict the output.
(b) Why is ${ct("round(..., 1)")} used? (Hint: try adding $0.1$ ten times by hand on a calculator that shows many digits.)
(c) Alter the program to find the smallest $x$ (to $0.1$) with $x^2>50$.`,
    recap: String.raw`Smallest $x$ (step $0.1$) with $x^2>30$.`,
    ans: String.raw`(a) ${ct(out(P13))}: $5.4^2=29.16$, $5.5^2=30.25$ (b) decimals like $0.1$ are stored inexactly, so repeated adding drifts (e.g. $0.30000000000000004$) (c) ${ct(out(P13.replace("30", "50")))}` },
];
