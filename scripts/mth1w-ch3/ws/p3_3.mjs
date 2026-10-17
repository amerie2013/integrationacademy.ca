// Worksheet 3.3 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
import { codeT, ct, out, errOf } from "./codekit.mjs";

const P1 = `a = 10
for i in range(3):
    a = a - 4
print(a)`;
const P2 = `x = 5
if x % 2 == 0:
    print("even")
else:
    print("odd")`;
const P3 = `total = 0
for k in range(1, 5)
    total = total + k`;
const P4 = `def g(x):
    if x > 0:
        return x - 3
    return x + 3

print(g(g(4)))`;
const P5 = `n = 1
s = 0
while n <= 5:
    s = s + 2 * n - 1
    n = n + 1
print(s)`;
const P6 = `for k in range(-2, 3):
    print(12 / k)`;
const P7 = `count = 0
for x in range(1, 10):
    count = count + 1
print(count)`;
const P8 = `price = 80
for year in range(3):
    price = price * 1.10
print(round(price, 2))`;
const P9 = `def f(x):
    return x * x - 2 * x

total = 0
for x in range(1, 5):
    total = total + f(x)
    print(x, f(x), total)`;
const P10 = `# Goal: print the area and perimeter of a 6 by 4 rectangle
l = 6
w = 4
area = l * W
perimeter = 2 * l + w
print(area, perimeter)`;
const P10fixed = P10.replace("l * W", "l * w").replace("2 * l + w", "2 * (l + w)");
const P11 = `balance = 2000
rate = 0.05
for year in range(1, 4):
    interest = 2000 * rate
    balance = balance + interest
    print(year, round(balance, 2))`;
const P11c = P11.replace("interest = 2000 * rate", "interest = balance * rate");
const P12 = `n = 1
while 2 * n + 3 <= 50:
    n = n + 1
print(n)`;
const P12b = P12.replace("2 * n + 3 <= 50", "5 * n - 4 <= 50");
const P12c = P12.replace("2 * n + 3 <= 50", "2 * n + 3 <= 120");
const P13 = `for d in range(-3, 4):
    print(d, 6 / d)`;
const P13fix = `for d in range(-3, 4):
    if d != 0:
        print(d, 6 / d)`;

export const PROBLEMS = [
  { level: 1, q: String.raw`Trace the program and give the output.${codeT(P1)}`, recap: String.raw`${ct("a = 10")}, subtract 4 three times.`, ans: ct(out(P1)) },
  { level: 1, q: String.raw`What does this program print?${codeT(P2)}`, recap: String.raw`${ct("x % 2 == 0")} with ${ct("x = 5")}.`, ans: ct(out(P2)) },
  { level: 1, q: String.raw`This program will not run. Find and fix the error.${codeT(P3)}`, recap: "Missing colon after a for header.", ans: String.raw`${errOf(P3).message.replace(/'/g, "")} (line ${errOf(P3).line}); add a colon: ${ct("for k in range(1, 5):")}` },
  { level: 2, q: String.raw`What does this program print?${codeT(P4)}`, recap: String.raw`${ct("g(g(4))")} for a piecewise ${ct("g")}.`, ans: String.raw`${ct(out(P4))} ($g(4)=1$, $g(1)=-2$)` },
  { level: 2, q: String.raw`Make a trace table for ${ct("n")} and ${ct("s")} and give the output. What pattern do you notice?${codeT(P5)}`, recap: "Sum of odd numbers with a while loop.", ans: String.raw`${ct(out(P5))}: $1+3+5+7+9=25=5^2$` },
  { level: 2, q: String.raw`What happens when this program runs? Give the output before it stops.${codeT(P6)}`, recap: String.raw`${ct("12 / k")} for $k=-2$ to $2$.`, ans: String.raw`prints ${ct("-6.0")} and ${ct("-12.0")}, then a ${ct(errOf(P6).kind)} at $k=0$ (runtime error)` },
  { level: 2, q: String.raw`The program should count the whole numbers from $1$ to $10$. What does it print? Fix it.${codeT(P7)}`, recap: "Off-by-one counting 1 to 10.", ans: String.raw`${ct(out(P7))}; use ${ct("range(1, 11)")} to get ${ct(out(P7.replace("range(1, 10)", "range(1, 11)")))}` },
  { level: 2, q: String.raw`A price rises $10\%$ a year. Predict the output, then alter the program for a $10\%$ \emph{decrease} each year and predict again.${codeT(P8)}`, recap: "Price 80 rising (then falling) 10% a year.", ans: String.raw`${ct(out(P8))}; with ${ct("0.90")}: ${ct(out(P8.replace("1.10", "0.90")))}` },
  { level: 3, space: 5.5,
    q: String.raw`${codeT(P9)}
(a) Complete a trace table with columns ${ct("x")}, ${ct("f(x)")}, ${ct("total")}.
(b) What is the final value of ${ct("total")}?
(c) Alter one line so that the program adds $f(x)$ for $x=1$ to $10$. Use your table's pattern or the program to find the new total.`,
    recap: String.raw`Accumulating $f(x)=x^2-2x$.`,
    ans: String.raw`(a) ${out(P9).split("\n").map((l) => ct(l)).join("; ")} (b) ${ct(out(P9).split("\n").pop().split(" ").pop())} (c) ${ct("range(1, 11)")}: total ${ct(out(P9.replace("range(1, 5)", "range(1, 11)").replace("    print(x, f(x), total)", "print(total)").replace(/\n+print\(total\)$/, "\nprint(total)")).split("\n").pop())}` },
  { level: 3, space: 5,
    q: String.raw`This program has two errors.${codeT(P10)}
(a) Which error stops the program? What kind of error is it?
(b) After fixing it, the program still gives a wrong perimeter. What kind of error is that? Fix it.
(c) Give the correct output.`,
    recap: "Rectangle program with a NameError and a logic error.",
    ans: String.raw`(a) ${ct(errOf(P10).message)} on line ${errOf(P10).line}: a runtime error (Python names are case-sensitive) (b) logic error: ${ct("2 * l + w")} should be ${ct("2 * (l + w)")} (c) ${ct(out(P10fixed))}` },
  { level: 3, space: 5.5,
    q: String.raw`${codeT(P11)}
(a) Predict the output. Is this simple or compound interest? How do you know?
(b) Which single change makes it compound interest (interest earned on the current balance)?
(c) Predict the output after your change, and explain why the difference grows each year.`,
    recap: "Simple vs compound interest on 2000 at 5%.",
    ans: String.raw`(a) ${out(P11).split("\n").map((l) => ct(l)).join("; ")}: simple (interest is always $5\%$ of $2000$) (b) ${ct("interest = balance * rate")} (c) ${out(P11c).split("\n").map((l) => ct(l)).join("; ")}: interest is earned on earlier interest` },
  { level: 3, space: 5,
    q: String.raw`Figure $n$ of a pattern has $2n+3$ tiles. This program finds the first figure with more than $50$ tiles.${codeT(P12)}
(a) Predict the output and check with an inequality.
(b) Alter the program for the pattern $5n-4$. Predict the output.
(c) Alter it instead to find the first figure with more than $120$ tiles of the original pattern.`,
    recap: String.raw`First $n$ with $2n+3>50$; altered rule and limit.`,
    ans: String.raw`(a) ${ct(out(P12))}: $2n+3>50$, $n>23.5$ (b) ${ct(out(P12b))}: $5n-4>50$, $n>10.8$ (c) ${ct(out(P12c))}: $n>58.5$` },
  { level: 3, space: 5,
    q: String.raw`${codeT(P13)}
(a) What is printed before the program stops? Why does it stop?
(b) Alter the program so it skips $d=0$ and finishes. Show the full output.
(c) Explain the connection with the fact that $\frac{6}{0}$ is undefined.`,
    recap: String.raw`${ct("6 / d")} for $d=-3$ to $3$.`,
    ans: String.raw`(a) ${out(P13.replace("range(-3, 4)", "range(-3, 0)")).split("\n").map((l) => ct(l)).join("; ")}, then a ${ct(errOf(P13).kind)} at $d=0$ (b) add ${ct("if d != 0:")}: ${out(P13fix).split("\n").map((l) => ct(l)).join("; ")} (c) no number times $0$ gives $6$, so Python refuses to divide by $0$.` },
];
