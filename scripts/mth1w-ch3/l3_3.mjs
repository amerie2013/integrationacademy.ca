// MTH1W 3.3 — Reading, Predicting & Altering Code (self-study format, Python)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, txt, choice, py, ic, out, err, shell } from "./lib.mjs";

export const TITLE = "3.3 Reading, Predicting & Altering Code";

const TRACE = `a = 3
b = 5
for i in range(3):
    a = a + b
    b = a - b
print(a, b)`;
const BUGGY = `# Goal: add the whole numbers from 1 to 10 (answer 55)
total = 0
for k in range(1, 10):
    total = total + k
print("total", total)`;
const MODEL = `# A car bought for 28000 dollars loses 18% of its value each year.
value = 28000
rate = 0.18
year = 0
while value >= 10000:
    value = value * (1 - rate)
    year = year + 1
print("below 10000 after", year, "years:", round(value, 2))`;

const E1 = `x = 1
y = 1
for i in range(5):
    z = x + y
    x = y
    y = z
print(y)`;
const E2 = `for n in range(1, 8):
    if n % 3 == 0:
        print("fizz")
    else:
        print(n)`;
const E3bad = `n = 4
if n > 3
    print("big")`;
const E4 = `count = 0
for x in range(1, 20):
    if 2 * x + 5 > 20:
        count = count + 1
print(count)`;
const E5 = `balance = 500
weeks = 0
while balance < 2000:
    balance = balance + 75
    weeks = weeks + 1
print(weeks)`;
const E5alt = E5.replace("75", "120");

const P1 = `x = 2
for i in range(4):
    x = x * 2 - 1
print(x)`;
const P2 = `total = 0
for k in range(1, 6):
    if k % 2 == 1:
        total = total + k * k
print(total)`;
const P4a = `n = 1
while 4 * n + 1 <= 100:
    n = n + 1
print(n)`;
const P4b = P4a.replace("4 * n + 1", "3 * n + 2");

export const blocks = () => [
  intro({
    icon: "🔎",
    title: "Reading, Predicting &amp; Altering Code",
    overview: String.raw`Most programming is reading code — your own from last week or someone else's — and changing it. In this lesson you will <strong>trace</strong> programs with a trace table, <strong>predict</strong> their output before running them, find and fix the three kinds of <strong>errors</strong> (syntax, runtime and logic), and <strong>alter</strong> a program's parameters and conditions so that it models a new situation. These are the skills you will use whenever you meet code in later courses, science labs and spreadsheets.`,
    goals: [
      "trace a program line by line with a trace table and predict its output;",
      "explain what a loop or condition does to the variables;",
      "recognise syntax errors, runtime errors and logic errors, and fix them;",
      "find and fix off-by-one errors in ranges;",
      "alter parameters, constraints and conditions so that code models a similar or new situation, and predict the effect.",
    ],
    curriculum: "C2.3 (read code to predict outcomes; alter code to adjust constraints, parameters and outcomes)",
    prior: [
      [String.raw`What does ${ic("range(2, 8, 2)")} produce?`, String.raw`\(2, 4, 6\).`],
      [String.raw`After ${ic("a = 3")}, ${ic("a = a * a")}, what is ${ic("a")}?`, String.raw`\(9\).`],
      [String.raw`A value loses \(18\%\) each year. What is the yearly multiplier?`, String.raw`\(0.82\).`],
    ],
    words: [
      ["Trace", "follow a program line by line, recording every variable", "a trace table"],
      ["Trace table", "a table with one column per variable and one row per step", ""],
      ["Syntax error", "the code breaks Python's grammar, so it cannot run", "missing colon"],
      ["Runtime error", "the code starts but crashes on a line", ic("ZeroDivisionError")],
      ["Logic error", "the code runs but gives the wrong answer", ic("range(1, 10)") + " instead of " + ic("range(1, 11)")],
      ["Off-by-one error", "a loop runs one time too many or too few", ""],
    ],
  }),

  section("📌 Tracing with a trace table", String.raw`
  <p>To predict output, make a table: one column per variable, one row each time a variable changes. Here is a trace of this program:</p>
  ${py(TRACE)}
  ${table(["after", "i", "a", "b"], [["start", "—", "3", "5"], ["pass 1", "0", "8", "3"], ["pass 2", "1", "11", "8"], ["pass 3", "2", "19", "11"]])}
  ${shell(out(TRACE))}
  ${keyIdea(String.raw`Inside a loop, each line uses the values <strong>at that moment</strong>. In pass 1, ${ic("b = a - b")} uses the <em>new</em> \(a=8\): \(8-5=3\).`)}`),

  section("📌 Three kinds of errors", String.raw`
  ${table(["Kind", "When you notice", "Example", "Python says"], [
    ["Syntax", "before anything runs", "missing colon after if", ic(err(E3bad).message)],
    ["Runtime", "the program crashes part-way", ic("print(10 / (5 - 5))"), ic(err("print(10 / (5 - 5))").message)],
    ["Logic", "never — the output is just wrong", "adding 1 to 9 instead of 1 to 10", "nothing!"],
  ])}
  ${watchOut([
    String.raw`Logic errors are the hardest: always check output against a quick estimate or a hand calculation.`,
    String.raw`Off-by-one: ${ic("range(1, n)")} stops at \(n-1\).`,
    String.raw`Using a variable before it is assigned gives a ${ic("NameError")}; check spelling — ${ic("Total")} and ${ic("total")} are different names.`,
  ])}
  <p>The program below has a logic error. Run it, compare with the goal, then press <em>Edit code</em> and fix it.</p>`),

  widget("codeTracer", { code: BUGGY, title: "Find and fix the logic error", task: "The output should be 55. Find the mistake and fix it with one change. Then alter the program to add the even numbers from 2 to 100." }),

  section("📌 Altering code to model a new situation", String.raw`
  <p>Good programs keep the numbers that describe a situation — the <strong>parameters</strong> — in clearly named variables. To model a different car or a different depreciation rate, change those lines only. To ask a different question, change the <strong>condition</strong>.</p>`),

  widget("codeTracer", { code: MODEL, title: "Alter a depreciation model", task: String.raw`(1) Predict, then run. (2) Change the rate to 0.12 — does it take longer or shorter? (3) Make the model show <em>appreciation</em> of a collector's item worth 5000 that gains 7% a year until it is worth 10000.` }),

  examples([
    ["A trace table with three variables", String.raw`Trace the program and give the output.${py(E1)}`,
      [String.raw`Each pass: \(z=x+y\), then shift: \(x\) takes the old \(y\), \(y\) takes \(z\).`, String.raw`\(y\) goes \(2, 3, 5, 8, 13\) over the five passes (the Fibonacci numbers).`],
      ic(out(E1))],
    ["Predicting output with a condition", String.raw`Predict every line of output.${py(E2)}`,
      [String.raw`\(n\) runs from \(1\) to \(7\).`, String.raw`Multiples of \(3\) (\(3\) and \(6\)) print ${ic("fizz")}; the others print the number.`],
      shell(out(E2))],
    ["Finding a syntax error", String.raw`Why does this program not run, and how do you fix it?${py(E3bad)}`,
      [String.raw`Python reports: ${ic(err(E3bad).message)} on line ${err(E3bad).line}.`, String.raw`Every ${ic("if")}, ${ic("for")}, ${ic("while")} and ${ic("def")} line must end with a colon: ${ic("if n > 3:")}`],
      String.raw`add the colon; then it prints ${ic(out(E3bad.replace("n > 3", "n > 3:")))}`],
    ["Reading an inequality in code", String.raw`What does the program print, and which inequality does it represent?${py(E4)}`,
      [String.raw`It counts integers \(x\) from \(1\) to \(19\) with \(2x+5>20\), i.e. \(x>7.5\).`, String.raw`Those are \(8, 9, \dots, 19\): \(12\) values.`],
      ic(out(E4))],
    ["Altering a parameter", String.raw`The program finds how many weeks it takes to grow \(500\) dollars to \(2000\) dollars by saving \(75\) per week. Predict the output, then predict it again if \(75\) is changed to \(120\).${py(E5)}`,
      [String.raw`\(500+75w\ge2000\) gives \(w\ge20\): output \(${out(E5)}\).`, String.raw`With \(120\): \(120w\ge1500\), \(w\ge12.5\), so \(13\) weeks (a loop counts whole weeks).`],
      String.raw`\(${out(E5)}\) weeks, then \(${out(E5alt)}\) weeks`],
  ]),

  practice([
    q("trace", String.raw`What does this program print?${py(P1)}`, num(Number(out(P1))),
      "Make a trace table for x over four passes.", [String.raw`\(2\to3\to5\to9\to17\) (each pass: double, then subtract 1).`], String.raw`\(${out(P1)}\)`),
    q("predict", String.raw`What does this program print?${py(P2)}`, num(Number(out(P2))),
      String.raw`Only odd \(k\) are used, and each adds \(k^2\).`, [String.raw`\(k=1,3,5\): \(1+9+25=35\).`], String.raw`\(${out(P2)}\)`),
    q("errors", String.raw`Which kind of error does this program have?${py(`print(score)\nscore = 90`)}`, choice(["a runtime error (NameError)", "a syntax error", "a logic error", "no error"], 0),
      "Is score assigned before it is used?", [String.raw`Line 1 uses ${ic("score")} before line 2 creates it: ${ic(err(`print(score)\nscore = 90`).message)}.`], "a runtime error (NameError)"),
    q("alter", String.raw`This program prints the first figure number \(n\) whose figure has more than \(100\) tiles when Figure \(n\) has \(4n+1\) tiles.${py(P4a)}If the pattern is changed to \(3n+2\) tiles, what is printed?`, num(Number(out(P4b))),
      String.raw`Find the first \(n\) with \(3n+2>100\).`, [String.raw`\(3n>98\), \(n>32.7\), so \(n=33\) (\(3(33)+2=101\)).`], String.raw`\(${out(P4b)}\)`),
    q("off-by-one", String.raw`How many numbers does ${ic("for i in range(0, 10, 2): print(i)")} print?`, num(out(`for i in range(0, 10, 2):\n    print(i)`).split("\n").length),
      "List them; the range stops before 10.", [String.raw`\(0, 2, 4, 6, 8\).`], String.raw`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["Why trace by hand if the computer can run the code?", "Tracing shows you why the output is what it is. It is how you find logic errors, how you check a program before trusting it, and it is exactly what tests ask you to do without a computer."],
      ["How do I find a logic error?", "Predict the answer another way (algebra, an estimate, a small case by hand), then trace the program on a small input and compare row by row. The first row where they disagree points to the bug."],
      ["What makes code easy to alter?", String.raw`Clear variable names and parameters stored at the top (${ic("rate = 0.18")}), not numbers buried in formulas. Then a new situation means changing one line.`],
      [String.raw`What does an error message like ${ic("line 2: NameError")} tell me?`, String.raw`The line where Python noticed the problem and the kind of problem. The real cause is sometimes on an earlier line (for example, a misspelled variable name).`],
      ["Is changing a parameter the same as changing a constraint?", String.raw`Parameters are the numbers that describe the situation (start value, rate). Constraints are the conditions that control the code (the loop's stopping condition, the range limits, an ${ic("if")} test). Altering either changes the outcome.`],
    ],
    summary: [
      "Trace with a table: one column per variable, one row per change.",
      "Syntax errors stop the program from starting; runtime errors crash it; logic errors give wrong answers silently.",
      String.raw`Watch for off-by-one errors with ${ic("range")}.`,
      "Alter parameters and conditions to model new situations, and predict the effect before running.",
    ],
    next: "3.4 reviews the whole chapter with mixed problems.",
  }),
];
