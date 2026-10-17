// 3.1 Coding Algebraic Concepts — 20 hard questions (outputs computed by running the code)
import { mc, ms, num, tf } from "./kit.mjs";
import { codeFig, withStart, numOut } from "./code.mjs";

export const TOPIC = "3.1 Coding Algebraic Concepts";
const n = (prompt, code, feedback) => num(withStart(prompt, code), numOut(code), feedback, codeFig(code));

export const Q = [
  n(String.raw`How many integers does the program count? Check by solving $2x^2-3x-5\le0$.`, "def f(x):\n    return 2 * x ** 2 - 3 * x - 5\n\ncount = 0\nfor x in range(-10, 11):\n    if f(x) <= 0:\n        count = count + 1\nprint(count)", String.raw`$2x^2-3x-5=(2x-5)(x+1)$ is $\le0$ for $-1\le x\le2.5$: integers $-1,0,1,2$.`),
  n(`What does the program print? Check with algebra.`, "for x in range(-100, 101):\n    if 3 * (x - 4) == 5 * x + 10:\n        print(x)", String.raw`$3x-12=5x+10$, $-22=2x$, $x=-11$.`),
  mc(String.raw`A program tests every integer from $-100$ to $100$ in $4x+1=2x+8$ and prints nothing. Why?`, "The solution, 3.5, is not an integer.", ["The equation has no solution.", "The range is too small.", "== cannot compare expressions."], String.raw`$2x=7$, $x=3.5$; the loop only tests integers.`),
  n(`What does the program print?`, "x = 7\ny = 3\nx = x + y\ny = x - y\nx = x - y\nprint(x * 10 + y)", "x = 10; y = 10 − 3 = 7; x = 10 − 7 = 3. The values are swapped: 3 × 10 + 7 = 37."),
  n(String.raw`A ball's height is $h(t)=45+20t-5t^2$. What does the program print?`, "def h(t):\n    return 45 + 20 * t - 5 * t ** 2\n\nm = 0\nfor t in range(0, 6):\n    if h(t) > m:\n        m = h(t)\nprint(m)", "Heights 45, 60, 65, 60, 45, 20: the largest is 65."),
  ms(`For which values of x does print(x ** 2 > 2 * x) display False? Select all.`, ["-1", "0", "1", "2", "3"], [1, 2, 3], String.raw`$x^2>2x$ fails for $0\le x\le2$.`),
  n(`Tickets cost 15 dollars each, with 10% off orders of more than 10. What does the program print?`, "def cost(n):\n    c = 15 * n\n    if n > 10:\n        c = c * 0.9\n    return c\n\nprint(cost(12))", "15 × 12 = 180; 10% off: 162.0."),
  num(`What does print(2 ** 3 ** 2) display? (Python evaluates ** from right to left.)`, numOut("print(2 ** 3 ** 2)"), String.raw`$3^2=9$ first, then $2^9=512$.`),
  mc(String.raw`Which program prints $3x-5$ for $x=-2,-1,0,1,2$?`, "for x in range(-2, 3): print(3 * x - 5)", ["for x in range(-2, 2): print(3 * x - 5)", "for x in range(2, -3): print(3 * x - 5)", "for x in range(-2, 3): print(3x - 5)"], "range(-2, 3) stops before 3; range(2, -3) is empty; 3x is a syntax error."),
  n(`What does the program print?`, "def g(n):\n    return n * (n + 1) // 2\n\nprint(g(100) - g(50))", String.raw`$g(n)=1+2+\dots+n$. $5050-1275=3775$: the sum of $51$ to $100$.`),
  n(`How many numbers does the program count?`, "count = 0\nfor x in range(1, 101):\n    if x % 3 == 1 and x % 4 == 1:\n        count = count + 1\nprint(count)", "Both remainders are 1 exactly when x is 1 more than a multiple of 12: 1, 13, …, 97."),
  tf(`In Python, print(0.1 + 0.2 == 0.3) displays True.`, false, "Decimals are stored in binary: 0.1 + 0.2 is 0.30000000000000004."),
  n(`What does the program print?`, "total = 0\nfor x in range(1, 11):\n    if x ** 2 % 2 == 1:\n        total = total + x ** 2\nprint(total)", "Odd squares: 1 + 9 + 25 + 49 + 81 = 165."),
  mc(`For which value of k does the program print exactly three numbers? Program: for x in range(0, 20): if 2 * x + 1 < k: print(x)`, "6", ["5", "8", "3"], String.raw`We need $x=0,1,2$ only: $5<k$ and $7\ge k$. Only $6$ works among the choices.`),
  n(`What does the program print?`, "def grow(P, r, t):\n    return P * (1 + r) ** t\n\nprint(round(grow(1000, 0.05, 3), 2))", String.raw`$1000(1.05)^3=1157.625$, rounded $1157.63$.`),
  n(String.raw`What does the program print? (What does $m$ compute?)`, "def m(a, b):\n    return (a + b + abs(a - b)) / 2\n\nprint(m(-3, 8))", "(5 + 11) / 2 = 8.0: m returns the larger of a and b."),
  ms(`Which lines display 12? Select all.`, ["print(3 * 2 ** 2)", "print((3 * 2) ** 2)", "print(24 // 2)", "print(25 % 13)", "print(2 ** 3 + 4)"], [0, 2, 3, 4], "(3 * 2) ** 2 is 36; the others are 12."),
  n(`How many integers does the program count?`, "count = 0\nfor x in range(-20, 21):\n    if x % 2 == 0 and -7 < 3 * x + 2 <= 20:\n        count = count + 1\nprint(count)", String.raw`$-7<3x+2\le20$ means $-3<x\le6$; even integers $-2,0,2,4,6$.`),
  n(`What does the program print?`, "def f(x):\n    return (x + 3) * (x - 2)\n\nprint(f(-3) + f(2) + f(0))", "f(−3) = 0, f(2) = 0, f(0) = 3 × (−2) = −6."),
  n(`What does the program print?`, "def f(x):\n    return x + 4\n\ndef g(x):\n    return 2 * x\n\nprint(f(g(3)) - g(f(3)))", "f(g(3)) = f(6) = 10; g(f(3)) = g(7) = 14; 10 − 14 = −4."),
];
