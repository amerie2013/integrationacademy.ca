// MTH1W 3.1 — Coding Algebraic Concepts (self-study format, Python)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, txt, choice, py, ic, out, shell } from "./lib.mjs";

export const TITLE = "3.1 Coding Algebraic Concepts";

const E1 = `price = 24
tax = price * 0.13
total = price + tax
print(total)`;
const E2 = `x = 5
x = x + 3
x = x * 2
print(x)`;
const E3 = `print(2 + 3 * 4 ** 2)
print((2 + 3) * 4 ** 2)
print(17 // 5, 17 % 5)`;
const E4 = `def perimeter(l, w):
    return 2 * l + 2 * w

print(perimeter(7, 4))
print(perimeter(2.5, 10))`;
const E5 = `for x in range(-2, 6):
    if 3 * x - 4 > 5:
        print(x, "works")`;

const W1 = `length = 8
width = 3
area = length * width
print("area =", area)
width = width + 2
area = length * width
print("new area =", area)`;
const W2 = `def f(x):
    return 2 * x ** 2 - 3 * x + 1

for x in range(-2, 4):
    print(x, f(x))

# Which x-values make f(x) less than 10?
for x in range(-2, 4):
    if f(x) < 10:
        print(x, "satisfies the inequality")`;

const P3 = `a = 7
b = 2
c = a // b + a % b
print(c)`;
const P4 = `def cost(n):
    return 45 + 12.5 * n

print(cost(8))`;
const P5 = `count = 0
for x in range(0, 20):
    if 4 * x + 3 <= 31:
        count = count + 1
print(count)`;

export const blocks = () => [
  intro({
    icon: "💻",
    title: "Coding Algebraic Concepts",
    overview: String.raw`Programs and algebra use the same ideas: <strong>variables</strong> that hold numbers, <strong>expressions</strong> built with operations, <strong>formulas</strong> with inputs, and <strong>equations and inequalities</strong> that are true or false. In this lesson you will write and read short <strong>Python</strong> programs (Python is the language most Ontario schools use) and run them right in the page. You will see that a function in code is a formula with <strong>parameters</strong>, and that a computer can test thousands of values of \(x\) in an inequality in a fraction of a second.`,
    goals: [
      String.raw`use variables and assignment, and explain why ${ic("x = x + 3")} makes sense in code but not in algebra;`,
      String.raw`write expressions with ${ic("+ - * / // % **")} and predict their value using the order of operations;`,
      "write a function with parameters to represent a formula, and use it to build a table of values;",
      String.raw`use ${ic("==")}, ${ic("<")}, ${ic(">")}, ${ic("<=")}, ${ic(">=")} to check whether a value solves an equation or satisfies an inequality;`,
      "use a loop to find every integer in a range that satisfies an inequality.",
    ],
    curriculum: "C2.1 (variables, parameters, equations and inequalities in code)",
    book: "Not in the Nelson text (coding is new in the 2021 MTH1W curriculum); links to Ch. 2 expressions and Ch. 4 equations",
    prior: [
      [String.raw`Evaluate \(3x^2-2x\) when \(x=4\).`, String.raw`\(48-8=40\).`],
      [String.raw`Is \(x=2\) a solution of \(5x-3=7\)?`, String.raw`Yes: \(10-3=7\).`],
      [String.raw`Which integers from \(0\) to \(5\) satisfy \(2x+1>6\)?`, String.raw`\(3, 4, 5\) (\(2x>5\) means \(x>2.5\)).`],
    ],
    words: [
      ["Variable (code)", "a named storage place for a value; it can change while the program runs", ic("total = 0")],
      ["Assignment", "store the value of the right side in the variable on the left", ic("x = x + 3")],
      ["Expression", "a calculation that produces a value", ic("2 * x ** 2 - 3")],
      ["Function", "a named block of code that takes inputs and returns an output", ic("def f(x):")],
      ["Parameter", "an input name in a function definition", "<code>l</code>, <code>w</code> in <code>perimeter(l, w)</code>"],
      ["Boolean", "the value True or False, produced by a comparison", ic("3 * 4 - 5 == 7")],
    ],
  }),

  section("📌 Variables and assignment", String.raw`
  <p>In Python, ${ic("=")} means <strong>“store”</strong>, not “equals”. The computer works out the right side first, then puts the result into the variable on the left.</p>
  ${table(["Line", "What happens", "x afterwards"], [
    [ic("x = 5"), "store 5 in x", "5"],
    [ic("x = x + 3"), "work out 5 + 3 = 8, store it in x", "8"],
    [ic("x = x * 2"), "work out 8 × 2 = 16, store it in x", "16"],
  ])}
  <p>In algebra, \(x=x+3\) has no solution. In code it is a normal instruction: “increase \(x\) by \(3\)”. Python also has a shortcut: ${ic("x += 3")}.</p>
  ${keyIdea(String.raw`A variable in code holds <strong>one value at a time</strong>. A variable in algebra stands for an unknown or for every value in a domain. Both are names for numbers, and both let us write general rules.`)}
  <p>Run the program below one step at a time and watch the <em>Variables</em> box. Then press <em>Edit code</em> and change the width.</p>`),

  widget("codeTracer", { code: W1, title: "Variables change as the program runs", task: "Predict both printed areas before you press Run. Then change <code>width + 2</code> to <code>width * 2</code> and predict again." }),

  section("📌 Operators and the order of operations", String.raw`
  ${table(["Python", "Math", "Example", "Result"], [
    [ic("+  -  *"), "\\(+\\ \\ -\\ \\ \\times\\)", ic("6 * 7"), out("print(6 * 7)")],
    [ic("/"), "\\(\\div\\) (always gives a decimal)", ic("7 / 2"), out("print(7 / 2)")],
    [ic("//"), "whole-number quotient", ic("17 // 5"), out("print(17 // 5)")],
    [ic("%"), "remainder", ic("17 % 5"), out("print(17 % 5)")],
    [ic("**"), "power, \\(a^b\\)", ic("2 ** 5"), out("print(2 ** 5)")],
  ])}
  <p>Python uses the same order as BEDMAS: brackets, then ${ic("**")}, then ${ic("* / // %")} left to right, then ${ic("+ -")} left to right.</p>
  ${watchOut([
    String.raw`Write every multiplication: \(3x\) is ${ic("3 * x")}, not ${ic("3x")}.`,
    String.raw`${ic("^")} is <strong>not</strong> a power in Python; use ${ic("**")}: \(x^2\) is ${ic("x ** 2")}.`,
    String.raw`${ic("-3 ** 2")} is \(-9\), just like \(-3^2\) in math. Write ${ic("(-3) ** 2")} for \(9\).`,
    String.raw`A fraction bar groups: \(\dfrac{a+b}{2}\) must be typed ${ic("(a + b) / 2")}.`,
  ])}`),

  section("📌 Formulas as functions with parameters", String.raw`
  <p>A <strong>function</strong> packages a formula. The names in brackets are <strong>parameters</strong>; the numbers you pass in when you <em>call</em> the function are <strong>arguments</strong>.</p>
  ${py(`def area(l, w):      # l and w are parameters
    return l * w

print(area(8, 3))    # 8 and 3 are arguments`)}
  ${shell(out(`def area(l, w):\n    return l * w\nprint(area(8, 3))`))}
  <p>Calling a function inside a loop builds a <strong>table of values</strong> — exactly like substituting \(x=-2,-1,0,1,\dots\) by hand.</p>`),

  section("📌 Equations and inequalities in code", String.raw`
  <p>A comparison gives a <strong>Boolean</strong>: ${ic("True")} or ${ic("False")}. Note the double equals sign ${ic("==")} — it <em>asks</em> whether two values are equal (a single ${ic("=")} stores a value).</p>
  ${py(`print(3 * 4 - 5 == 7)     # is x = 4 a solution of 3x - 5 = 7 ?
print(3 * 4 - 5 > 9)      # does x = 4 satisfy 3x - 5 > 9 ?`)}
  ${shell(out(`print(3 * 4 - 5 == 7)\nprint(3 * 4 - 5 > 9)`))}
  ${table(["Math", "\\(=\\)", "\\(\\ne\\)", "\\(<\\)", "\\(\\le\\)", "\\(>\\)", "\\(\\ge\\)"], [["Python", ic("=="), ic("!="), ic("<"), ic("<="), ic(">"), ic(">=")]])}
  <p>With a loop and an ${ic("if")}, the computer can test every integer in a range. The explorer below makes a table of values of \(f(x)=2x^2-3x+1\) and then lists the \(x\)-values that satisfy \(f(x)<10\).</p>`),

  widget("codeTracer", { code: W2, title: "A function, a table of values and an inequality", task: String.raw`Change the inequality to <code>f(x) &gt;= 3</code> and predict the new list. Then widen the range to <code>range(-5, 6)</code>.` }),

  examples([
    ["Variables in a formula", String.raw`What does this program print?${py(E1)}`,
      [String.raw`${ic("tax")} \(=24\times0.13=3.12\).`, String.raw`${ic("total")} \(=24+3.12=27.12\).`, "The computer prints the value of total."],
      String.raw`${ic(out(E1))}`],
    ["Reassignment", String.raw`Trace the program and give the final value of ${ic("x")}.${py(E2)}`,
      [String.raw`Line 1: \(x=5\).`, String.raw`Line 2: \(5+3=8\), so \(x=8\).`, String.raw`Line 3: \(8\times2=16\), so \(x=16\).`],
      String.raw`${ic(out(E2))}`],
    ["Order of operations", String.raw`Predict all three lines of output.${py(E3)}`,
      [String.raw`\(4^2=16\), \(3\times16=48\), \(2+48=50\).`, String.raw`Brackets first: \(5\times16=80\).`, String.raw`\(17=5\times3+2\): ${ic("17 // 5")} is \(3\) and ${ic("17 % 5")} is \(2\).`],
      String.raw`${shell(out(E3))}`],
    ["A function with parameters", String.raw`What does this program print?${py(E4)}`,
      [String.raw`${ic("perimeter(7, 4)")}: \(l=7\), \(w=4\), \(2(7)+2(4)=22\).`, String.raw`${ic("perimeter(2.5, 10)")}: \(5+20=25\). Because \(2.5\) is a decimal, Python prints a decimal.`],
      String.raw`${shell(out(E4))}`],
    ["An inequality by search", String.raw`Which values does this program print? Check with algebra.${py(E5)}`,
      [String.raw`The program tests \(x=-2,-1,\dots,5\) (a range stops <em>before</em> its end value).`, String.raw`Algebra: \(3x-4>5\Rightarrow3x>9\Rightarrow x>3\).`, String.raw`So only \(4\) and \(5\) are printed.`],
      String.raw`${shell(out(E5))}`],
  ]),

  practice([
    q("assignment", String.raw`What is printed?${py(`n = 10\nn = n - 4\nn = n * n\nprint(n)`)}`, num(Number(out(`n = 10\nn = n - 4\nn = n * n\nprint(n)`))),
      "Work line by line; each line uses the value stored by the line before.", [String.raw`\(n=10\), then \(10-4=6\), then \(6\times6=36\).`], String.raw`\(${out(`n = 10\nn = n - 4\nn = n * n\nprint(n)`)}\)`),
    q("Python syntax", String.raw`Which line correctly computes \(y=3x^2-5\) in Python?`, choice([ic("y = 3 * x ** 2 - 5"), ic("y = 3x^2 - 5"), ic("y = 3 * x ^ 2 - 5"), ic("y = (3 * x) ** 2 - 5")], 0),
      String.raw`Multiplication must be written, and the power operator is ${ic("**")}.`, [String.raw`${ic("^")} is not a power in Python; ${ic("(3 * x) ** 2")} squares \(3x\), which is \(9x^2\).`], ic("y = 3 * x ** 2 - 5")),
    q("// and %", String.raw`What is printed?${py(P3)}`, num(Number(out(P3))),
      String.raw`${ic("//")} is the whole-number quotient and ${ic("%")} the remainder.`, [String.raw`\(7=2\times3+1\): quotient \(3\), remainder \(1\).`, String.raw`\(3+1=4\).`], String.raw`\(${out(P3)}\)`),
    q("function", String.raw`A bike rental costs \(45\) dollars plus \(12.50\) dollars per hour. What does this program print?${py(P4)}`, num(Number(out(P4))),
      String.raw`Substitute \(n=8\) into \(45+12.5n\).`, [String.raw`\(45+12.5(8)=45+100=145\). Python prints it as a decimal because \(12.5\) is a decimal.`], String.raw`${ic(out(P4))}`),
    q("inequality", String.raw`How many integers does this program count?${py(P5)}`, num(Number(out(P5))),
      String.raw`Solve \(4x+3\le31\), then count the integers from \(0\) up to the answer.`, [String.raw`\(4x\le28\Rightarrow x\le7\).`, String.raw`Integers \(0,1,\dots,7\): eight of them.`], String.raw`\(${out(P5)}\)`),
  ]),

  wrapUp({
    qas: [
      [String.raw`Why is ${ic("x = x + 1")} allowed in code?`, String.raw`Because ${ic("=")} means “store”. The computer calculates \(x+1\) with the old value of \(x\), then stores the answer back in \(x\). In algebra \(x=x+1\) would be a false statement.`],
      [String.raw`What is the difference between ${ic("=")} and ${ic("==")}?`, String.raw`${ic("=")} stores a value in a variable. ${ic("==")} compares two values and gives ${ic("True")} or ${ic("False")} — it is the one you use to check a solution of an equation.`],
      [String.raw`Why did ${ic("print(7 / 2)")} show ${ic("3.5")} but ${ic("print(4 / 2)")} shows ${ic("2.0")}?`, String.raw`In Python, ${ic("/")} always produces a decimal (a “float”). Use ${ic("//")} when you want the whole-number part only.`],
      ["What is the difference between a parameter and an argument?", String.raw`A parameter is the name in the definition (${ic("l")} in ${ic("def area(l, w)")}); an argument is the actual value you pass in when you call it (${ic("8")} in ${ic("area(8, 3)")}). It is like a formula and the numbers you substitute.`],
      ["Is searching with a loop as good as solving an inequality with algebra?", String.raw`A loop only checks the values you give it (often integers in a range), so it can miss decimals or values outside the range. Algebra gives the complete answer (\(x>3\)). Code is excellent for checking algebra and for problems that are hard to solve by hand.`],
    ],
    summary: [
      String.raw`${ic("=")} stores; ${ic("==")} compares. ${ic("x = x + 3")} updates a variable.`,
      String.raw`Operators: ${ic("+ - * / // % **")}; Python follows BEDMAS. Always write ${ic("*")}; powers use ${ic("**")}.`,
      "A function is a formula with parameters; calling it in a loop builds a table of values.",
      "Comparisons give True/False; a loop with an if tests which values satisfy an equation or inequality.",
    ],
    next: "3.2 breaks bigger problems into steps and uses loops and decisions to solve them.",
  }),
];
