// MTH1W 3.4 — Chapter 3 Review (NEW lesson, placed after 3.3)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, txt, choice, py, ic, out, shell } from "./lib.mjs";

export const TITLE = "3.4 Chapter 3 Review";
export const NEW = { id: "3c4e7c1a-0a34-4d1e-9c34-c3a9f0000304", position: 21 };

const W = `# Mixed challenge: tiles in a pattern, and the first figure over a limit
def tiles(n):
    return 5 * n - 2

for n in range(1, 6):
    print("figure", n, ":", tiles(n))

n = 1
while tiles(n) <= 200:
    n = n + 1
print("first figure with more than 200 tiles:", n)`;

const E1 = `def h(t):
    return 80 - 5 * t ** 2

for t in range(0, 5):
    print(t, h(t))`;
const E2 = `price = 120
discount = 0.25
sale = price * (1 - discount)
final = sale * 1.13
print(round(final, 2))`;
const E3 = `n = 0
total = 0
while total < 100:
    n = n + 1
    total = total + n
print(n, total)`;
const E4 = `def shipping(kg):
    if kg <= 1:
        return 8
    elif kg <= 5:
        return 8 + 2.5 * (kg - 1)
    else:
        return 18 + 2 * (kg - 5)

print(shipping(0.5), shipping(3), shipping(9))`;
const E5 = `for x in range(-10, 11):
    if 4 * x - 7 >= 2 * x + 5 and x < 9:
        print(x, end=" ")`;

const M1 = `a = 4
b = a ** 2 - 3 * a
print(b)`;
const M2 = `s = 0
for k in range(2, 12, 3):
    s = s + k
print(s)`;
const M3 = `v = 1000
years = 0
while v < 2000:
    v = v * 1.08
    years = years + 1
print(years)`;
const M5 = `count = 0
for x in range(-5, 6):
    if x ** 2 < 10:
        count = count + 1
print(count)`;

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 3 Review — Coding",
    overview: String.raw`This page pulls the coding chapter together: the key ideas on one screen, questions where you choose the right structure, mixed examples that combine algebra and code, a mixed challenge to run and alter, and a readiness checklist. Do it after 3.1–3.3.`,
    goals: [
      "recall the key idea, a typical example and the most common mistake of each lesson;",
      "choose between for, while and if for a situation;",
      "read, trace and alter programs that use functions, loops, conditions and inequalities;",
      "check your readiness for the chapter test.",
    ],
    curriculum: "C2.1–C2.3 (whole chapter)",
    prior: [
      [String.raw`What does ${ic("print(17 % 5)")} show?`, String.raw`\(2\).`],
      [String.raw`How many values are in ${ic("range(3, 10)")}?`, String.raw`\(7\).`],
      [String.raw`What is the difference between ${ic("=")} and ${ic("==")}?`, "= stores a value; == compares two values."],
    ],
    words: [
      ["Variable", "named storage for a value", ic("x = 5")],
      ["Function / parameter", "a reusable formula and its inputs", ic("def f(x):")],
      ["Loop", "repeat code", `${ic("for")} / ${ic("while")}`],
      ["Condition", "a True/False test", ic("4 * x - 7 >= 5")],
      ["Trace table", "record of variable values step by step", ""],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Typical code", "Watch out"], [
    ["3.1 Algebraic concepts", "variables, operators, functions with parameters, comparisons", ic("def f(x): return 2 * x ** 2 - 3"), `${ic("**")} not ${ic("^")}; write ${ic("*")}; ${ic("=")} vs ${ic("==")}`],
    ["3.2 Building from steps", "decompose; sequence, selection, repetition; accumulators", ic("while savings < 1000:"), `${ic("range")} stops before the end; loops must end`],
    ["3.3 Reading and altering", "trace tables; syntax/runtime/logic errors; change parameters", ic("rate = 0.18"), "logic errors give no message — check with an estimate"],
  ])),

  section("📌 Choose the structure", String.raw`<p>Before writing code, decide which structure each part of the problem needs.</p>
  ${keyIdea(String.raw`<strong>Known number of repeats</strong> → ${ic("for")}. <strong>Repeat until something happens</strong> → ${ic("while")}. <strong>A rule that depends on a value</strong> → ${ic("if / elif / else")}. <strong>A formula used many times</strong> → a function.`)}`),

  practice([
    q("structure", "A program must print a table of y = 3x − 2 for x = −5 to 5. Which structure fits best?", choice(["a for loop over range(-5, 6)", "a while loop that stops when y > 100", "an if / else", "a single print statement"], 0),
      "The number of values is known in advance.", [String.raw`${ic("for x in range(-5, 6): print(x, 3 * x - 2)")}`], "a for loop"),
    q("structure", "How many months until a balance that grows 2% a month doubles? Which structure fits best?", choice(["a while loop", "a for loop over range(12)", "an if / else", "a function with no loop"], 0),
      "You do not know how many passes are needed.", [String.raw`${ic("while balance < 2 * start:")}`], "a while loop"),
    q("structure", "A taxi charges one rate for the first 5 km and another after that. Which structure models this?", choice(["if / else", "a for loop", "a while loop", "a list"], 0),
      "The rule depends on the distance.", ["A piecewise rule needs a decision."], "if / else"),
    q("syntax", String.raw`Which line correctly tests whether \(x\) satisfies \(2x+3\le11\)?`, choice([ic("if 2 * x + 3 <= 11:"), ic("if 2x + 3 <= 11:"), ic("if 2 * x + 3 =< 11:"), ic("if 2 * x + 3 <= 11")], 0),
      "Write the multiplication, use <=, and end with a colon.", [String.raw`${ic("=<")} is not an operator; the last choice is missing its colon.`], ic("if 2 * x + 3 <= 11:")),
    q("errors", "A program runs and prints 45 instead of 55 for the sum 1 + 2 + … + 10. What kind of error is it most likely?", choice(["a logic (off-by-one) error in the range", "a syntax error", "a NameError", "a ZeroDivisionError"], 0),
      "It ran, so it is not a syntax or runtime error.", [String.raw`\(55-45=10\): the last number was left out — ${ic("range(1, 10)")} instead of ${ic("range(1, 11)")}.`], "a logic error"),
  ]),

  examples([
    ["A function and a table of values", String.raw`A ball is dropped from \(80\) m; its height after \(t\) seconds is \(h=80-5t^2\). What does this program print, and when does the ball hit the ground?${py(E1)}`,
      [String.raw`Substitute \(t=0,1,2,3,4\): \(80, 75, 60, 35, 0\).`, String.raw`\(h=0\) at \(t=4\): it lands after \(4\) s.`],
      shell(out(E1))],
    ["Percents in code", String.raw`What does this program print?${py(E2)}`,
      [String.raw`Sale price: \(120\times0.75=90\).`, String.raw`With \(13\%\) tax: \(90\times1.13=101.70\).`],
      String.raw`${ic(out(E2))} (Python drops the final zero)`],
    ["A while loop with an accumulator", String.raw`What does this program print? Explain what it finds.${py(E3)}`,
      [String.raw`It adds \(1+2+3+\dots\) until the total reaches at least \(100\).`, String.raw`\(1+2+\dots+13=91<100\); adding \(14\) gives \(105\).`],
      String.raw`${ic(out(E3))}: the first \(n\) with \(1+\dots+n\ge100\) is \(14\)`],
    ["A three-part rule", String.raw`A courier charges \(8\) dollars up to \(1\) kg, then \(2.50\) dollars per extra kg up to \(5\) kg, then \(2\) dollars per kg over \(5\) kg. What does this program print?${py(E4)}`,
      [String.raw`\(0.5\) kg: first branch, \(8\).`, String.raw`\(3\) kg: \(8+2.5(2)=13\).`, String.raw`\(9\) kg: \(18+2(4)=26\). (\(18\) is the cost at exactly \(5\) kg.)`],
      ic(out(E4))],
    ["Two inequalities together", String.raw`Which values are printed? Write the solution as a compound inequality.${py(E5)}`,
      [String.raw`\(4x-7\ge2x+5\Rightarrow2x\ge12\Rightarrow x\ge6\).`, String.raw`${ic("and x < 9")} adds \(x<9\). Integers with \(6\le x<9\): \(6, 7, 8\).`],
      String.raw`${ic(out(E5).trim())}: \(6\le x<9\)`],
  ]),

  section("📌 Mixed challenge", String.raw`<p>Run the program, then alter it: change the pattern to \(7n+3\), and change the limit to \(500\). Predict each output with algebra before you run it.</p>`),

  widget("codeTracer", { code: W, title: "Mixed challenge: patterns, functions and while loops", task: String.raw`Check the last line with algebra: \(5n-2>200\). Then alter the rule and the limit.` }),

  section("📌 Mixed review", String.raw`<p>Each question combines ideas from more than one lesson.</p>`),

  practice([
    q("expressions", String.raw`What is printed?${py(M1)}`, num(Number(out(M1))), String.raw`\(4^2-3(4)\).`, [String.raw`\(16-12=4\).`], String.raw`\(${out(M1)}\)`),
    q("range + accumulator", String.raw`What is printed?${py(M2)}`, num(Number(out(M2))), String.raw`List the values of ${ic("range(2, 12, 3)")}.`, [String.raw`\(2, 5, 8, 11\); sum \(26\).`], String.raw`\(${out(M2)}\)`),
    q("growth", String.raw`An investment grows \(8\%\) a year. What does the program print?${py(M3)}`, num(Number(out(M3))), String.raw`Multiply by \(1.08\) until the value reaches \(2000\).`, [String.raw`\(1.08^9\approx1.999\) (just under \(2\)); \(1.08^{10}\approx2.159\).`], String.raw`\(${out(M3)}\)`),
    q("functions", String.raw`For ${ic("def g(x): return 3 * x - x ** 2")}, what is ${ic("g(-2)")}?`, num(Number(out(`def g(x):\n    return 3 * x - x ** 2\nprint(g(-2))`))), String.raw`Substitute with brackets: \(3(-2)-(-2)^2\).`, [String.raw`\(-6-4=-10\).`], String.raw`\(${out(`def g(x):\n    return 3 * x - x ** 2\nprint(g(-2))`)}\)`),
    q("inequality", String.raw`How many integers does the program count?${py(M5)}`, num(Number(out(M5))), String.raw`Which integers from \(-5\) to \(5\) have \(x^2<10\)?`, [String.raw`\(-3,-2,\dots,3\): seven integers (\(4^2=16\) is too big).`], String.raw`\(${out(M5)}\)`),
  ]),

  section("📌 Am I ready for the test?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["3.1", "I can read and write Python expressions, functions with parameters, and comparisons for equations and inequalities."],
      ["3.2", "I can plan a program, choose for / while / if, and use accumulators and counters to solve a problem."],
      ["3.3", "I can trace code with a table, find syntax, runtime and logic errors, and alter code for a new situation."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  wrapUp({
    qas: [
      ["How should I study for the coding questions on the test?", "Practise tracing without a computer: make trace tables for the examples in 3.2 and 3.3, then check your predictions in the explorers. Most test questions ask you to predict, explain or alter code, not to type it."],
      ["What are the most common mistakes?", String.raw`Off-by-one ranges, ${ic("^")} instead of ${ic("**")}, missing ${ic("*")}, ${ic("=")} instead of ${ic("==")}, forgetting the colon, and while loops that never end.`],
      ["How does coding connect to the rest of the course?", "Functions are relations (Chapter 4), loops make tables of values and model growth and decay (Chapters 4 and 7), and searching tests solutions of equations and inequalities (Chapter 2)."],
      ["Do I need to memorise Python?", String.raw`Only the few pieces used here: ${ic("print")}, ${ic("def/return")}, ${ic("for … in range")}, ${ic("while")}, ${ic("if/elif/else")} and the operators. The thinking — decompose, trace, test — matters more than the syntax.`],
      ["Where can I keep practising?", "Every explorer in this chapter is editable: change the numbers, the conditions and the formulas, predict, then run."],
    ],
    summary: [
      "Variables, operators and functions turn algebra into code.",
      "Sequence, selection and repetition build every program.",
      "Trace, predict, debug and alter — and always check code against algebra.",
    ],
    next: "Write the Chapter 3 test. Chapter 4 studies linear and non-linear relations — many of the functions you coded here.",
  }),
];
