// 3.2 Building Code from Steps — 20 easy + 20 medium questions (outputs computed by running the code)
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { codeFig, withStart, numOut, out } from "./code.mjs";

const n = (prompt, code, feedback, tol) => num(withStart(prompt, code), numOut(code), feedback, codeFig(code), tol);
const count = (prompt, code, feedback) => num(withStart(prompt, code), out(code).split("\n").length, feedback, codeFig(code));
const last = (prompt, code, feedback) => num(withStart(prompt, code), Number(out(code).split("\n").pop()), feedback, codeFig(code));

export const E = [
  count(`How many numbers does this program print?`, "for i in range(3, 9):\n    print(i)", "3, 4, 5, 6, 7, 8: the range stops before 9."),
  last(`What is the last number printed?`, "for k in range(0, 20, 4):\n    print(k)", "0, 4, 8, 12, 16: 20 is not included."),
  n(`What does this program print?`, "total = 0\nfor k in range(1, 6):\n    total = total + k\nprint(total)", "1 + 2 + 3 + 4 + 5 = 15."),
  fill(`x = 7, then: if x > 5: print("big") else: print("small"). The program displays ___.`, ["big"], "7 > 5 is True."),
  mc(`Which loop runs exactly 4 times?`, "for i in range(4):", ["for i in range(1, 4):", "for i in range(0, 4, 2):", "for i in range(4, 0):"], "range(4) gives 0, 1, 2, 3."),
  tf(`range(1, 10) includes the number 10.`, false, "A range stops before its end value."),
  n(`What does this program print?`, "count = 0\nfor n in range(1, 11):\n    if n % 2 == 0:\n        count = count + 1\nprint(count)", "Even numbers 2, 4, 6, 8, 10."),
  n(`What does this program print?`, "n = 1\nwhile n < 20:\n    n = n * 2\nprint(n)", "1, 2, 4, 8, 16, 32: the loop stops when n is 32."),
  mc(`An if / else structure is an example of…`, "selection", ["repetition", "sequence", "a function"], "if / else chooses between paths."),
  n(`What does this program print?`, "p = 1\nfor k in range(1, 5):\n    p = p * k\nprint(p)", "1 × 2 × 3 × 4 = 24."),
  count(`How many times is "hi" printed?`, `for k in range(3):\n    print("hi")`, "range(3) has three values."),
  tf(`A while loop whose condition never becomes False runs forever.`, true, "This is an infinite loop."),
  n(`What does this program print?`, "total = 0\nfor k in range(2, 11, 2):\n    total = total + k\nprint(total)", "2 + 4 + 6 + 8 + 10 = 30."),
  mc(`What is the first step in decomposing a problem?`, "identify the inputs, the process and the outputs", ["type the code", "run the program", "choose variable names"], "Plan before coding."),
  n(`What does this program print?`, "x = 10\nwhile x > 0:\n    x = x - 3\nprint(x)", "10, 7, 4, 1, −2: the loop stops when x is −2."),
  n(`What does this program print?`, "count = 0\nfor n in range(1, 21):\n    if n % 2 == 1:\n        count = count + 1\nprint(count)", "There are 10 odd numbers from 1 to 20."),
  mc(`What does elif mean in Python?`, "else if: another condition, checked only when the earlier ones are false", ["end the if", "repeat the if", "run both branches"], "Python checks elif conditions in order."),
  n(`What does this program print?`, "def fee(h):\n    if h <= 3:\n        return 6\n    else:\n        return 6 + 2 * (h - 3)\n\nprint(fee(5))", "5 > 3: 6 + 2 × 2 = 10."),
  count(`How many numbers does this program print?`, "for i in range(10, 0, -2):\n    print(i)", "10, 8, 6, 4, 2."),
  tf(`In an if / elif / else chain, more than one branch can run.`, false, "Only the first branch whose condition is True runs."),
];

export const M = [
  n(`This program adds squares. What total does it print?`, "total = 0\nfor k in range(1, 6):\n    total = total + k * k\nprint(total)", "1 + 4 + 9 + 16 + 25 = 55."),
  n(`What does this program print?`, "count = 0\nfor n in range(1, 51):\n    if n % 3 == 0:\n        count = count + 1\nprint(count)", "3, 6, …, 48: 16 multiples."),
  n(`Savings start at 100 dollars and grow by 45 a week. What does the program print?`, "s = 100\nw = 0\nwhile s < 400:\n    s = s + 45\n    w = w + 1\nprint(w)", String.raw`$100+45w\ge400$ needs $w\ge6.7$: $7$ weeks.`),
  n(`What does this program print?`, "def ticket(age):\n    if age < 12:\n        return 6\n    elif age < 65:\n        return 12\n    else:\n        return 8\n\nprint(ticket(5) + ticket(30) + ticket(70))", "6 + 12 + 8 = 26."),
  n(`What does this program print?`, "count = 0\nfor x in range(1, 31):\n    if x % 2 == 0 or x % 5 == 0:\n        count = count + 1\nprint(count)", "15 even + 6 multiples of 5 − 3 multiples of 10 = 18."),
  last(`What is the last number printed?`, "for k in range(5, 50, 7):\n    print(k)", "5, 12, 19, 26, 33, 40, 47."),
  n(`A 20000-dollar car loses 20% a year. What does the program print?`, "value = 20000\nyears = 0\nwhile value >= 10000:\n    value = value * 0.8\n    years = years + 1\nprint(years)", "16000, 12800, 10240, 8192: below 10000 after 4 years."),
  n(`Bacteria double every 20 minutes, starting at 30. What does the program print?`, "b = 30\nminutes = 0\nwhile b <= 1000:\n    b = b * 2\n    minutes = minutes + 20\nprint(minutes)", "30 → 1920 takes 6 doublings: 120 minutes."),
  ms(`Which loops print exactly 1, 3, 5, 7? Select all.`, ["for i in range(1, 8, 2):", "for i in range(1, 9, 2):", "for i in range(1, 7, 2):", "for i in range(0, 8, 2):"], [0, 1], "range(1, 7, 2) stops at 5; range(0, 8, 2) gives even numbers."),
  mc(`Which structure best answers “how many years until an investment doubles?”`, "a while loop", ["a for loop over range(10)", "a single if / else", "a print statement"], "You repeat until a condition is met, without knowing the count in advance."),
  n(`What does this program print?`, "p = 1\nfor i in range(10):\n    p = p * 2\nprint(p)", String.raw`$2^{10}=1024$.`),
  n(`What does this program print?`, "count = 0\nfor n in range(1, 101):\n    if n * n < 50:\n        count = count + 1\nprint(count)", "1² to 7² are below 50 (7² = 49)."),
  n(`What does this program print?`, "marks = [70, 84, 91, 63]\ntotal = 0\nfor m in marks:\n    total = total + m\nprint(total / len(marks))", "308 ÷ 4 = 77.0."),
  n(`What does this program print?`, "n = 0\nwhile 3 ** n <= 1000:\n    n = n + 1\nprint(n)", String.raw`$3^6=729$, $3^7=2187$: the first power over $1000$ is $n=7$.`),
  tf(`for i in range(5): runs its body with i = 1, 2, 3, 4, 5.`, false, "It runs with i = 0, 1, 2, 3, 4."),
  n(`What does this program print?`, "count = 0\nfor n in range(1, 21):\n    if n % 4 == 0:\n        count = count + 1\nprint(count)", "4, 8, 12, 16, 20."),
  n(`What does this program print?`, "n = 100\ncount = 0\nwhile n > 1:\n    n = n // 2\n    count = count + 1\nprint(count)", "100 → 50 → 25 → 12 → 6 → 3 → 1: six halvings."),
  n(`What does this program print?`, "total = 0\nfor k in range(1, 101):\n    total = total + k\nprint(total)", String.raw`$\frac{100(101)}{2}=5050$.`),
  n(`Income tax is 15% up to 50000 dollars, plus 20.5% of the amount over 50000. What does the program print?`, "def tax(income):\n    if income <= 50000:\n        return income * 0.15\n    return 7500 + (income - 50000) * 0.205\n\nprint(tax(60000))", "7500 + 10000 × 0.205 = 9550."),
  mc(`A flowchart has a decision diamond with an arrow that goes back up to the diamond. Which code matches it?`, "a while loop", ["a single if", "a function call", "a print statement"], "Going back to the same decision means repetition."),
];
