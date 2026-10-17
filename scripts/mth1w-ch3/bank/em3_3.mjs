// 3.3 Reading, Predicting & Altering Code — 20 easy + 20 medium questions (outputs computed)
import { mc, ms, num, tf } from "./kit.mjs";
import { codeFig, withStart, numOut, out, errOf } from "./code.mjs";

const n = (prompt, code, feedback, tol) => num(withStart(prompt, code), numOut(code), feedback, codeFig(code), tol);
const count = (prompt, code, feedback) => num(withStart(prompt, code), out(code).split("\n").length, feedback, codeFig(code));
const kind = (prompt, code, correct, wrong, feedback) => mc(withStart(prompt, code), correct, wrong, feedback, codeFig(code));

export const E = [
  n(`Trace the program. What does it print?`, "a = 5\na = a * 2\na = a - 3\nprint(a)", "5 → 10 → 7."),
  kind(`What kind of error does this program have?`, "x = 4\nif x > 3\n    print(x)", "syntax error", ["runtime error", "logic error", "no error"], `Python reports: ${errOf("x = 4\nif x > 3\n    print(x)").message} — the colon is missing.`),
  kind(`What happens when this program runs?`, "print(10 / 0)", "a runtime error (ZeroDivisionError)", ["it prints 0", "it prints 10", "a syntax error"], "Dividing by zero crashes the program while it runs."),
  tf(`A logic error always produces an error message.`, false, "The program runs and gives a wrong answer with no message."),
  n(`What does this program print?`, "x = 1\nfor i in range(3):\n    x = x + i\nprint(x)", "i = 0, 1, 2: 1 + 0 + 1 + 2 = 4."),
  kind(`This program should add 1 to 10. What is wrong?`, "total = 0\nfor k in range(1, 10):\n    total = total + k\nprint(total)", "the range stops at 9 (off-by-one)", ["total should start at 1", "it should use while", "nothing is wrong"], `It prints ${out("total = 0\nfor k in range(1, 10):\n    total = total + k\nprint(total)")}; range(1, 11) gives 55.`),
  n(`Trace the program. What does it print?`, "b = 2\nfor i in range(3):\n    b = b * b\nprint(b)", "2 → 4 → 16 → 256."),
  n(`This program used to be print(5 * n). It was altered to the version shown. What does it print now?`, "n = 4\nprint(7 * n)", "7 × 4 = 28."),
  tf(`Python names are case-sensitive: score and Score are different variables.`, true, "Upper- and lower-case letters are different in names."),
  kind(`What happens when this program runs?`, "score = 90\nprint(Score)", "NameError: Score is not defined", ["it prints 90", "a syntax error", "it prints Score"], "Score (capital S) was never assigned."),
  n(`What does this program print?`, "k = 0\nwhile k < 5:\n    k = k + 2\nprint(k)", "0, 2, 4, 6: the loop stops when k is 6."),
  mc(`To make for i in range(1, 5) include the number 5, change it to…`, "range(1, 6)", ["range(0, 5)", "range(1, 5, 1)", "range(2, 6)"], "The stop value is not included."),
  n(`What does this program print?`, "def d(x):\n    return x * 2\n\nprint(d(d(3)))", "d(3) = 6, d(6) = 12."),
  tf(`A missing indent after a for line causes an error before the program runs.`, true, "Python cannot run code with bad indentation (an IndentationError, a kind of syntax error)."),
  n(`What does this program print?`, "s = 0\nfor i in range(4):\n    s = s + 3\nprint(s)", "Four passes of + 3."),
  mc(`What is a trace table?`, "a table of every variable's value after each step", ["a list of error messages", "a graph of the output", "a table of Python keywords"], "Tracing records the values as they change."),
  n(`What does this program print?`, "n = 10\nif n > 5:\n    n = n - 5\nif n > 5:\n    n = n - 5\nprint(n)", "10 → 5; then 5 > 5 is False."),
  n(`This program used to multiply by 1.1 (a 10% increase). It was altered as shown. What number does it print now?`, "v = 100\nv = v * 1.2\nprint(v)", "100 × 1.2 = 120.0: a 20% increase."),
  mc(`Which line causes a ZeroDivisionError?`, "print(8 / (4 - 4))", ["print(8 / 4 - 4)", "print(0 / 8)", "print(8 - 4 / 4)"], "Only the first divides by zero; 0 / 8 is fine."),
  count(`How many numbers does this program print?`, "n = 1\nwhile n < 10:\n    print(n)\n    n = n + 3", "1, 4, 7."),
];

export const M = [
  n(`Trace the program. What does it print?`, "a = 4\nb = 9\na = a + b\nb = a - b\nprint(b)", "a = 13, then b = 13 − 9 = 4."),
  n(`What does this program print?`, "total = 0\nfor n in range(1, 8):\n    if n % 2 == 0:\n        total = total + n\n    else:\n        total = total - 1\nprint(total)", "Evens add 2 + 4 + 6 = 12; four odd numbers subtract 4."),
  n(`Trace the program. What does it print?`, "p = 1\nfor i in range(1, 4):\n    p = p * i + i\nprint(p)", "i = 1: 2; i = 2: 6; i = 3: 21."),
  kind(`What kind of error does this program have?`, "for i in range(3)\n    print(i)", "syntax error", ["runtime error", "logic error", "no error"], "The for line needs a colon."),
  kind(`The program should print the mean of a and b. What kind of error does it have?`, "a = 80\nb = 90\nprint(a + b / 2)", "logic error", ["syntax error", "runtime error", "no error"], `It prints ${out("a = 80\nb = 90\nprint(a + b / 2)")}: only b is halved. Use (a + b) / 2.`),
  num(withStart(`How many numbers does this program print before it crashes?`, "for k in [2, 1, 0]:\n    print(6 // k)"), 2, "6 // 2 = 3 and 6 // 1 = 6; then 6 // 0 crashes.", codeFig("for k in [2, 1, 0]:\n    print(6 // k)")),
  n(`Figure n has 3n + 2 tiles. What does the program print?`, "n = 1\nwhile 3 * n + 2 <= 40:\n    n = n + 1\nprint(n)", String.raw`$3n+2>40$ gives $n>12.7$: $13$.`),
  n(`The limit is changed to 100. What does the program print now?`, "n = 1\nwhile 3 * n + 2 <= 100:\n    n = n + 1\nprint(n)", String.raw`$3n+2>100$ gives $n>32.7$: $33$.`),
  ms(`Which loops print 0, 2, 4, 6, 8, 10? Select all.`, ["for i in range(0, 11, 2):", "for i in range(0, 12, 2):", "for i in range(0, 10, 2):", "for i in range(2, 12, 2):"], [0, 1], "range(0, 10, 2) stops at 8; range(2, 12, 2) misses 0."),
  n(`What does this program print?`, "def f(x):\n    if x % 2 == 0:\n        return x // 2\n    return 3 * x + 1\n\nprint(f(f(f(7))))", "f(7) = 22, f(22) = 11, f(11) = 34."),
  tf(`Changing rate = 0.05 to rate = 0.08 in an interest program changes a parameter.`, true, "The rate is a value that describes the situation."),
  n(`The program should print the perimeter of a 5 by 3 rectangle. What does it actually print?`, "l = 5\nw = 3\nprint(2 * l + w)", "2 × 5 + 3 = 13 (the correct perimeter is 16)."),
  mc(`How should print(2 * l + w) be fixed to give the perimeter?`, "print(2 * (l + w))", ["print(2 * l * w)", "print(l + w)", "print(2 * l + 2)"], "Both sides are doubled: 2(l + w)."),
  n(`What does this program print?`, "amount = 1000\nfor year in range(2):\n    amount = amount * 1.10\nprint(round(amount))", "1000 × 1.1 × 1.1 = 1210."),
  n(`Trace the program. What does it print?`, "x = 3\ny = x\nx = x + 1\nprint(y)", "y copied the value 3; changing x later does not change y."),
  mc(`A program meant to add 1 to 10 prints 45. What is the most likely bug?`, "range(1, 10) instead of range(1, 11)", ["total starts at 0", "it uses + instead of *", "it should print total + 1"], "55 − 45 = 10: the last number is missing."),
  n(`What does this program print?`, "xs = [3, 8, 1, 6]\nm = xs[0]\nfor x in xs:\n    if x > m:\n        m = x\nprint(m)", "It keeps the largest value: 8."),
  n(`The > in the program above is changed to <. What does it print now?`, "xs = [3, 8, 1, 6]\nm = xs[0]\nfor x in xs:\n    if x < m:\n        m = x\nprint(m)", "It now keeps the smallest value: 1."),
  n(`What does this program print?`, "count = 0\nfor i in range(3):\n    for j in range(4):\n        count = count + 1\nprint(count)", "3 × 4 = 12 passes."),
  tf(`A runtime error can happen on the 50th pass of a loop even though the first 49 passes worked.`, true, "For example, a division by a value that becomes 0 only on pass 50."),
];
