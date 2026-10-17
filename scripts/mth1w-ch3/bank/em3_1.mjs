// 3.1 Coding Algebraic Concepts — 20 easy + 20 medium questions (outputs computed by running the code)
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { codeFig, withStart, numOut, out } from "./code.mjs";

const n = (prompt, code, feedback) => num(withStart(prompt, code), numOut(code), feedback, codeFig(code));
const line = (code) => numOut(code); // one-line programs shown in the prompt itself

export const E = [
  num(`What does print(7 + 3 * 2) display?`, line("print(7 + 3 * 2)"), "Multiply first: 7 + 6."),
  num(`What does print(2 ** 5) display?`, line("print(2 ** 5)"), String.raw`$2^5=32$.`),
  num(`What does print(17 // 3) display?`, line("print(17 // 3)"), String.raw`$17=3\times5+2$: the whole-number quotient is $5$.`),
  num(`What does print(17 % 3) display?`, line("print(17 % 3)"), String.raw`The remainder of $17\div3$ is $2$.`),
  mc(String.raw`Which Python line computes $y=4x^2$?`, "y = 4 * x ** 2", ["y = 4x^2", "y = 4 * x ^ 2", "y = (4 * x) ** 2"], "Write the * and use ** for powers. (4 * x) ** 2 would be 16x²."),
  tf(`In Python, a single = compares two values.`, false, "A single = stores a value; == compares."),
  n(`What does this program print?`, "x = 4\nx = x + 6\nprint(x)", "x becomes 4 + 6 = 10."),
  mc(`What does print(10 / 4) display?`, "2.5", ["2", "2.0", "3"], "/ gives a decimal: 2.5."),
  n(`What does this program print?`, "a = 3\nb = a * 2\nprint(a + b)", "b = 6, so a + b = 9."),
  tf(`print(3 * 4 == 12) displays True.`, true, "3 * 4 is 12, so the comparison is True."),
  mc(`In def area(l, w): return l * w, what are the parameters?`, "l and w", ["area", "l * w", "return"], "Parameters are the input names in brackets."),
  n(`What does this program print?`, "def f(x):\n    return 2 * x + 1\n\nprint(f(5))", "f(5) = 2(5) + 1 = 11."),
  fill(`print(9 > 4) displays ___.`, ["True", "true"], "9 > 4 is a true comparison."),
  num(`What does print(-3 ** 2) display?`, line("print(-3 ** 2)"), "The power is done first: −(3²) = −9."),
  mc(`Which Python operator means “is not equal to”?`, "!=", ["<>", "=/=", "~="], "!= means not equal."),
  num(`What does print((2 + 3) * 4) display?`, line("print((2 + 3) * 4)"), "Brackets first: 5 × 4."),
  tf(`x = x + 1 is a valid Python statement when x already has a value.`, true, "It adds 1 to the value stored in x."),
  n(`What does this program print?`, "n = 10\nn = n * n\nprint(n)", "10 × 10 = 100."),
  mc(String.raw`Which Python expression means $3\le x$?`, "3 <= x", ["3 =< x", "3 => x", "x => 3"], "The operator is <= (less than or equal)."),
  num(`What number does print(20 - 8 / 2) display? (Python shows it as a decimal.)`, line("print(20 - 8 / 2)"), "Divide first: 20 − 4.0 = 16.0."),
];

export const M = [
  n(`What does this program print?`, "price = 40\ntax = price * 0.13\nprint(price + tax)", "Tax 5.2; total 45.2."),
  num(`What does print(2 + 3 * 4 ** 2 // 5) display?`, line("print(2 + 3 * 4 ** 2 // 5)"), "4² = 16; 3 × 16 = 48; 48 // 5 = 9; 2 + 9 = 11."),
  n(`What does this program print?`, "def g(a, b):\n    return a * a - b\n\nprint(g(4, 7))", "16 − 7 = 9."),
  mc(`What does print(5 / 2, 5 // 2) display?`, "2.5 2", ["2.5 2.5", "2 2", "2.0 2"], "/ gives 2.5; // gives the whole-number part, 2."),
  n(`What does this program print?`, "x = 2\ny = x ** 3\nx = y - x\nprint(x + y)", "y = 8, then x = 8 − 2 = 6; 6 + 8 = 14."),
  ms(`Which comparisons are True when x = 4? Select all.`, ["x * 2 == 8", "x > 4", "x >= 4", "x != 4", "x % 2 == 0"], [0, 2, 4], "4 > 4 is False; 4 != 4 is False; 4 % 2 is 0."),
  n(`How many numbers does this program count?`, "count = 0\nfor x in range(1, 6):\n    if 3 * x - 2 > 7:\n        count = count + 1\nprint(count)", "3x − 2 > 7 means x > 3: x = 4 and 5."),
  num(`What number does print(4 * 2.5) display?`, line("print(4 * 2.5)"), "10.0 (a decimal, because 2.5 is a decimal)."),
  mc(String.raw`Which line checks whether x is a solution of $5x-3=12$?`, "print(5 * x - 3 == 12)", ["print(5 * x - 3 = 12)", "print(5x - 3 == 12)", "5 * x - 3 = 12"], "Use == to compare; write the multiplication."),
  num(`What does print(int(7.9) + round(2.5)) display?`, line("print(int(7.9) + round(2.5))"), "int(7.9) = 7 (cuts off the decimal); round(2.5) = 2 (rounds half to even); 7 + 2 = 9."),
  num(`What is the LAST number this program prints?`, Number(out("for x in range(-2, 3):\n    print(x ** 2 - 5)").split("\n").pop()), "The last x is 2: 4 − 5 = −1.", codeFig("for x in range(-2, 3):\n    print(x ** 2 - 5)")),
  tf(`print(2 * 3 ** 2) displays 36.`, false, "Power first: 3² = 9, then 2 × 9 = 18."),
  n(`What does this program print?`, "a = 5\na += 3\na *= 2\nprint(a)", "5 + 3 = 8, then 8 × 2 = 16."),
  mc(`Which function returns the area of a circle (use 3.14 for π)?`, "def A(r): return 3.14 * r ** 2", ["def A(r): return 3.14 * r * 2", "def A(r): return (3.14 * r) ** 2", "def A(r): return 3.14r^2"], "Area = πr²: the power applies to r only."),
  n(`How many integers does this program count?`, "count = 0\nfor x in range(-5, 6):\n    if 2 * x + 1 < -3:\n        count = count + 1\nprint(count)", "2x + 1 < −3 means x < −2: −5, −4, −3."),
  fill(`print(14 % 4 == 2) displays ___.`, ["True", "true"], "14 = 4 × 3 + 2, so the remainder is 2."),
  num(`What does this display? x = 6 then print(x // 4 + x % 4)`, line("x = 6\nprint(x // 4 + x % 4)"), "6 // 4 = 1 and 6 % 4 = 2."),
  mc(`In def cost(n, rate, fee): return fee + rate * n, which word is NOT a parameter?`, "cost", ["n", "rate", "fee"], "cost is the function's name."),
  n(`What does this program print?`, "def f(x):\n    return 3 * x - 7\n\nprint(f(f(4)))", "f(4) = 5, then f(5) = 8."),
  ms(`Which conditions mean “x is between 2 and 9, inclusive”? Select all.`, ["2 <= x <= 9", "x >= 2 and x <= 9", "2 < x < 9", "x >= 2 or x <= 9"], [0, 1], "Inclusive needs <=; “or” is true for every x."),
];
