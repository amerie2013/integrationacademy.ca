// 3.3 Reading, Predicting & Altering Code — 20 hard questions (outputs computed)
import { mc, ms, num, fill } from "./kit.mjs";
import { codeFig, withStart, numOut, out, errOf } from "./code.mjs";

export const TOPIC = "3.3 Reading, Predicting & Altering Code";
const n = (prompt, code, feedback, tol) => num(withStart(prompt, code), numOut(code), feedback, codeFig(code), tol);

const SIMPLE = "a = 5000\nfor y in range(3):\n    a = a + 5000 * 0.08\nprint(a)";
const COMP = "a = 5000\nfor y in range(3):\n    a = a * 1.08\nprint(round(a, 2))";

export const Q = [
  n(`Trace the program. What does it print?`, "x = 2\ny = 5\nfor i in range(3):\n    x = x + y\n    y = x - 2 * y\nprint(x * 100 + y)", `x, y after each pass: (7, −3), (4, 10), (14, −6). 14 × 100 + (−6) = 1394.`),
  fill(withStart(`What is the LAST line this program prints?`, "for n in range(1, 16):\n    if n % 15 == 0:\n        print(\"fizzbuzz\")\n    elif n % 3 == 0:\n        print(\"fizz\")\n    else:\n        print(n)"), [out("for n in range(1, 16):\n    if n % 15 == 0:\n        print(\"fizzbuzz\")\n    elif n % 3 == 0:\n        print(\"fizz\")\n    else:\n        print(n)").split("\n").pop()], "The last n is 15, a multiple of 15, and that test comes first.", codeFig("for n in range(1, 16):\n    if n % 15 == 0:\n        print(\"fizzbuzz\")\n    elif n % 3 == 0:\n        print(\"fizz\")\n    else:\n        print(n)")),
  mc(withStart(`What happens when this program runs?`, "xs = [1, 2, 3]\nprint(xs[3])"), "IndexError: the positions are 0, 1 and 2", ["it prints 3", "it prints None", "a syntax error"], `Python reports: ${errOf("xs = [1, 2, 3]\nprint(xs[3])").message}. Lists start at position 0.`, codeFig("xs = [1, 2, 3]\nprint(xs[3])")),
  n(`A 30000-dollar truck depreciates. The rate was changed from 0.20 to 0.15. What does the program print?`, "value = 30000\nrate = 0.15\nyears = 0\nwhile value > 12000:\n    value = value * (1 - rate)\n    years = years + 1\nprint(years)", String.raw`$30000(0.85)^5\approx13311$ and $(0.85)^6$ gives $\approx11314$: $6$ years.`),
  n(`This prime counter has a bug. What does it print?`, "count = 0\nfor n in range(2, 20):\n    prime = True\n    for d in range(1, n):\n        if n % d == 0:\n            prime = False\n    if prime:\n        count = count + 1\nprint(count)", "Every n is divisible by d = 1, so nothing is prime: 0. The inner range should start at 2."),
  n(`What does this program print?`, "n = 0\ns = 0\nwhile s < 50 and n < 8:\n    n = n + 1\n    s = s + n * n\nprint(n)", "s: 1, 5, 14, 30, 55 — it stops when s ≥ 50, at n = 5."),
  num(withStart(`By how many dollars does compound interest beat simple interest after 3 years? (Run both programs in your head.)`, COMP), +(+out(COMP) - +out(SIMPLE)).toFixed(2), `Compound: ${out(COMP)}; simple: ${out(SIMPLE)}; difference 98.56.`, codeFig(COMP), 0.006),
  n(`What does this program print? Then think: what would it print if * were changed to +?`, "def f(n):\n    if n == 1:\n        return 1\n    return n * f(n - 1)\n\nprint(f(5))", "5 × 4 × 3 × 2 × 1 = 120. With +, it would add 5 + 4 + 3 + 2 + 1 = 15."),
  mc(`A depreciation program multiplies the value by (1 - rate) each year. Which change makes it model appreciation of 7% a year?`, "multiply by 1.07 instead", ["set rate to −0.07 and keep while value > 0", "subtract 7 each year", "change while to for"], "Appreciation means growing: multiply by 1 + 0.07."),
  n(`What does this program print?`, "n = 0\nwhile n <= 10:\n    n = n + 3\nprint(n)", "0, 3, 6, 9, 12: 9 ≤ 10 runs once more."),
  n(`What does this program print?`, "count = 0\nfor x in range(-5, 6):\n    if x * x > 4:\n        count = count + 1\nprint(count)", "x = −5, −4, −3 and 3, 4, 5."),
  ms(`For which (a, b) does for x in range(a, b): print(x) print exactly 7 numbers? Select all.`, ["(0, 7)", "(3, 10)", "(-3, 4)", "(1, 7)"], [0, 1, 2], "The count is b − a; (1, 7) gives 6."),
  fill(withStart(`What does this program print?`, "s = \"\"\nfor c in \"abc\":\n    s = c + s\nprint(s)"), [out("s = \"\"\nfor c in \"abc\":\n    s = c + s\nprint(s)")], "Each letter is put in front: a, ba, cba.", codeFig("s = \"\"\nfor c in \"abc\":\n    s = c + s\nprint(s)")),
  n(`What does this program print?`, "for n in range(1, 100):\n    if n * n > 50:\n        break\nprint(n)", "break stops the loop at the first n with n² > 50: 8."),
  n(`What does this program print?`, "total = 0\nfor n in range(1, 11):\n    if n % 3 == 0:\n        continue\n    total = total + n\nprint(total)", "continue skips 3, 6, 9: 55 − 18 = 37."),
  mc(`With x = 7, why does while x != 0: x = x - 2 never stop?`, "x goes 7, 5, 3, 1, −1, … and skips over 0", ["x never changes", "!= is not allowed in Python", "0 is not a number"], "Use while x > 0 to stop safely."),
  n(`What does this program print?`, "def tiles(n, a, b):\n    return a * n + b\n\nprint(tiles(10, 4, 3))", "4 × 10 + 3 = 43."),
  n(`What does this program print?`, "def tiles(n, a, b):\n    return a * n + b\n\nn = 1\nwhile tiles(n, 4, 3) <= 200:\n    n = n + 1\nprint(n)", String.raw`$4n+3>200$ gives $n>49.25$: $50$.`),
  n(`5000 dollars grows 4% a year. What does the program print?`, "v = 5000\nyears = 0\nwhile v <= 6000:\n    v = v * 1.04\n    years = years + 1\nprint(years)", String.raw`$1.04^4\approx1.17$, $1.04^5\approx1.217$: $5$ years.`),
  n(`What does this program print?`, "n = 123\nr = 0\nwhile n > 0:\n    r = r * 10 + n % 10\n    n = n // 10\nprint(r)", "It reverses the digits: 3, 32, 321."),
];
