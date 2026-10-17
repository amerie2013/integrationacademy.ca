// 3.2 Building Code from Steps — 20 hard questions (outputs computed by running the code)
import { mc, ms, num } from "./kit.mjs";
import { codeFig, withStart, numOut, out } from "./code.mjs";

export const TOPIC = "3.2 Building Code from Steps";
const n = (prompt, code, feedback, tol) => num(withStart(prompt, code), numOut(code), feedback, codeFig(code), tol);

export const Q = [
  n(`Ana has 200 dollars and saves 30 a week; Ben has 1000 and spends 50 a week. What does the program print?`, "a = 200\nb = 1000\nw = 0\nwhile a < b:\n    a = a + 30\n    b = b - 50\n    w = w + 1\nprint(w)", String.raw`$200+30w\ge1000-50w$ gives $80w\ge800$, $w=10$.`),
  n(`An investment grows 6% a year. What does the program print?`, "v = 1000\ny = 0\nwhile v < 2000:\n    v = v * 1.06\n    y = y + 1\nprint(y)", String.raw`$1.06^{11}\approx1.90$ and $1.06^{12}\approx2.01$: $12$ years.`),
  n(`What does the program print?`, "n = 0\nt = 0\nwhile t <= 1000:\n    n = n + 1\n    t = t + n\nprint(n)", String.raw`Triangular numbers: $T_{44}=990$, $T_{45}=1035$.`),
  n(`This loop applies the Collatz rule. What does the program print?`, "n = 6\nsteps = 0\nwhile n != 1:\n    if n % 2 == 0:\n        n = n // 2\n    else:\n        n = 3 * n + 1\n    steps = steps + 1\nprint(steps)", "6, 3, 10, 5, 16, 8, 4, 2, 1: eight steps."),
  n(`What does the program print?`, "count = 0\nfor k in range(1, 1001):\n    if k % 3 == 0 and k % 9 != 0:\n        count = count + 1\nprint(count)", "333 multiples of 3, minus 111 multiples of 9."),
  n(`What does the program print?`, "def ship(kg):\n    if kg <= 1:\n        return 9\n    elif kg <= 5:\n        return 9 + 3 * (kg - 1)\n    return 21 + 2 * (kg - 5)\n\nprint(ship(0.5) + ship(4) + ship(8))", "9 + 18 + 27 = 54."),
  n(`What does the program print?`, "k = 0\ns = 0\nwhile s <= 500:\n    k = k + 1\n    s = s + k\nprint(k)", String.raw`$1+\dots+31=496$; adding $32$ gives $528>500$.`),
  n(String.raw`How many pairs of whole numbers $(x,y)$ satisfy $2x+3y=24$? The program counts them.`, "count = 0\nfor x in range(0, 13):\n    for y in range(0, 9):\n        if 2 * x + 3 * y == 24:\n            count = count + 1\nprint(count)", "y must be even: (12,0), (9,2), (6,4), (3,6), (0,8)."),
  n(`What does the program print?`, "n = 4721\ns = 0\nwhile n > 0:\n    s = s + n % 10\n    n = n // 10\nprint(s)", "It adds the digits: 1 + 2 + 7 + 4 = 14."),
  n(`What does the program print? (It is Euclid's algorithm.)`, "a = 84\nb = 36\nwhile b != 0:\n    r = a % b\n    a = b\n    b = r\nprint(a)", "84 = 36·2 + 12; 36 = 12·3 + 0: the greatest common factor is 12."),
  n(`What does the program print?`, "count = 0\nfor n in range(2, 30):\n    prime = True\n    for d in range(2, n):\n        if n % d == 0:\n            prime = False\n    if prime:\n        count = count + 1\nprint(count)", "Primes below 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29."),
  n(`A rabbit population of 2000 grows 15% a year, then 100 are moved away. What does the program print?`, "p = 2000\nyears = 0\nwhile p <= 4000:\n    p = p * 1.15 - 100\n    years = years + 1\nprint(years)", "2200, 2430, 2694.5, 2998.7, 3348.5, 3750.8, 4213.4: seven years."),
  ms(`Which lines print 15? Select all.`, ["print(1 + 2 + 3 + 4 + 5)", "print(sum([4, 5, 6]))", "print(2 ** 4 - 1)", "print(45 // 3)", "print(16 % 5)"], [0, 1, 2, 3], "16 % 5 is the remainder 1; the other four lines each print 15."),
  mc(`Which while loop never stops?`, "n = 1; while n != 10: n = n + 2", ["n = 0; while n != 10: n = n + 2", "n = 1; while n < 10: n = n + 2", "n = 20; while n > 10: n = n - 3"], "Starting at 1 and adding 2 gives only odd numbers, so n is never 10."),
  n(`What does the program print?`, "total = 0\nk = 1\nwhile k * k < 200:\n    if k % 2 == 1:\n        total = total + k * k\n    k = k + 1\nprint(total)", "Odd squares below 200: 1 + 9 + 25 + 49 + 81 + 121 + 169 = 455."),
  n(`What does the program print?`, "a = 1\nb = 1\nwhile b <= 500:\n    c = a + b\n    a = b\n    b = c\nprint(b)", "Fibonacci: …, 233, 377, 610: the first term over 500 is 610."),
  n(String.raw`How many terms of $\frac12+\frac14+\frac18+\dots$ are needed for the sum to exceed $0.99$?`, "s = 0\nterm = 0.5\nk = 0\nwhile s <= 0.99:\n    s = s + term\n    term = term / 2\n    k = k + 1\nprint(k)", String.raw`After $k$ terms the sum is $1-\frac1{2^k}$; $\frac1{2^7}<0.01$.`),
  n(`What does the program print?`, "count = 0\nfor x in range(0, 7):\n    for y in range(0, 7):\n        if x + y == 7:\n            count = count + 1\nprint(count)", "x = 1 to 6 (then y = 6 to 1); x = 0 would need y = 7, which is outside the range."),
  n(`Pay is 20 dollars per hour, and 1.5 times that for hours over 40. What does the program print?`, "def pay(h):\n    if h <= 40:\n        return 20 * h\n    return 800 + 30 * (h - 40)\n\nprint(pay(45))", "800 + 5 × 30 = 950."),
  n(`The list ends with −1, a signal to stop. What does the program print? (Give two decimal places.)`, "values = [12, 7, 9, -1]\ni = 0\ntotal = 0\nwhile values[i] >= 0:\n    total = total + values[i]\n    i = i + 1\nprint(total / i)", "28 ÷ 3 ≈ 9.33: the −1 is not included.", 0.006),
];
