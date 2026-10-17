// Worksheet 3.3 — Reading, Predicting & Altering Code (teacher edition)
import { codeT, ct, out, errOf } from "./codekit.mjs";
import { PROBLEMS } from "./p3_3.mjs";

const E1 = `p = 1
for i in range(1, 5):
    p = p * i + 1
print(p)`;
const E2 = `for n in range(10, 16):
    if n % 2 == 0 and n % 3 == 0:
        print("both")
    elif n % 2 == 0:
        print("even")
    else:
        print(n)`;
const E3 = `def h(x):
    if x < 0:
        return -x
    return 2 * x

print(h(-5) + h(3))`;
const E4bad = `for i in range(3):
print(i)`;
const E5 = `for k in range(-2, 3):
    print(12 / k)`;
const E6 = `# Goal: mean of 70, 80 and 90
mean = 70 + 80 + 90 / 3
print(mean)`;
const E7 = `n = 0
while n < 10:
    n = n + 2
print(n)`;
const E8 = `amount = 1000
for year in range(1, 4):
    amount = amount + 1000 * 0.06
print(round(amount, 2))`;
const E8c = E8.replace("1000 * 0.06", "amount * 0.06");
const E9 = `money = 120
weeks = 0
while weeks < 52:
    money = money + 15
    weeks = weeks + 1
print(money)`;

export const WS = {
  code: "3.3",
  title: "Reading, Predicting & Altering Code",
  bigideas: String.raw`To understand code, \textbf{trace} it: keep a table with one column per variable and record each change. Errors come in three kinds --- \textbf{syntax} (the code cannot start), \textbf{runtime} (it crashes on a line) and \textbf{logic} (it runs but the answer is wrong). Well-written code keeps a situation's \textbf{parameters} in named variables, so \textbf{altering} a value or a condition models a new situation; always predict the effect before running.`,
  goals: [
    "Trace programs with loops, conditions and functions using a trace table.",
    "Predict output before running code, and check predictions.",
    "Identify syntax, runtime and logic errors, and fix them.",
    "Find and fix off-by-one errors.",
    "Alter parameters, constraints and conditions to model similar or new situations.",
  ],
  curriculum: "C2.3",
  book: "Not in the Nelson text; uses relations (Ch. 4) and interest/depreciation (Ch. 7)",
  vocab: [
    ["Trace table", "columns for variables, one row per change"],
    ["Syntax error", "breaks Python's grammar; nothing runs"],
    ["Runtime error", String.raw`crash while running, e.g. ${ct("ZeroDivisionError")}`],
    ["Logic error", "runs but gives a wrong result"],
    ["Parameter / constraint", "a value describing the situation / a condition that controls the code"],
  ],
  hook: String.raw`Project a 6-line program without running it. Pairs write their prediction of the output on a mini-whiteboard; then run it. Celebrate correct predictions, and spend the most time on the wrong ones: “Which line did you read differently from the computer?” That question is the heart of today's lesson.`,
  concepts: [
    ["1. Trace tables", String.raw`${codeT(`a = 2\nb = 7\nfor i in range(3):\n    a = a + b\n    b = b - a`)}
\begin{center}\begin{tabular}{cccc}\toprule after & i & a & b\\\midrule start & --- & 2 & 7\\ pass 1 & 0 & 9 & $-2$\\ pass 2 & 1 & 7 & $-9$\\ pass 3 & 2 & $-2$ & $-7$\\\bottomrule\end{tabular}\end{center}
Each line uses the values \emph{at that moment}: in pass 1, ${ct("b = b - a")} uses the new $a=9$.`],
    ["2. Three kinds of errors", String.raw`\begin{center}\begin{tabular}{lll}\toprule Kind & Example & Python reports\\\midrule syntax & missing colon or indent & ${ct(errOf(E4bad).message)}\\ runtime & ${ct("12 / 0")}, unknown name & ${ct(errOf("print(12 / 0)").message)}\\ logic & ${ct("70 + 80 + 90 / 3")} & nothing --- wrong answer\\\bottomrule\end{tabular}\end{center}`],
    ["3. Off-by-one errors", String.raw`${ct("range(1, 10)")} has $9$ values, stopping at $9$. A while loop with ${ct("<")} versus ${ct("<=")} runs a different number of times. Fix by listing the first and last values the loop actually uses.`],
    ["4. Altering code", String.raw`Change \textbf{parameters} (start value, rate, step) to model a similar situation; change \textbf{constraints} (loop limits, conditions) to answer a different question; change the \textbf{formula} to model a new situation (simple $\to$ compound interest; depreciation $\to$ appreciation). Predict first, then run.`],
  ],
  tips: [
    "Insist on a written prediction before any code is run.",
    "Trace tables catch most logic errors; demand a row per change, not per line.",
    String.raw`Python names are case-sensitive: ${ct("Total")} and ${ct("total")} are different variables.`,
    "Error messages point to where Python noticed the problem; the cause may be a line earlier.",
    "When altering code, change one thing at a time and predict its effect.",
  ],
  examples: [
    { title: "A trace table", q: String.raw`Trace the program and give the output.${codeT(E1)}`,
      steps: [String.raw`$p$: $1\to2\to5\to16\to65$ (each pass: $p\cdot i+1$ with $i=1,2,3,4$).`], ans: ct(out(E1)) },
    { title: "Predicting with conditions", q: String.raw`Predict every line.${codeT(E2)}`,
      steps: [String.raw`$12$ is a multiple of $2$ and $3$; $10$ and $14$ are even only; odd numbers print themselves.`], ans: out(E2).split("\n").map((l) => ct(l)).join(", ") },
    { title: "Tracing a function", q: String.raw`What does this program print?${codeT(E3)}`,
      steps: [String.raw`$h(-5)$: $-5<0$, so $5$.`, String.raw`$h(3)=6$; $5+6=11$.`], ans: ct(out(E3)) },
    { title: "A syntax error", q: String.raw`Why does this program not run?${codeT(E4bad)}`,
      steps: [String.raw`Python reports ${ct(errOf(E4bad).message)} (line ${errOf(E4bad).line}).`, String.raw`The body of a loop must be indented: four spaces before ${ct("print(i)")}.`], ans: String.raw`indent line 2; output ${out(E4bad.replace("\nprint", "\n    print")).split("\n").map((l) => ct(l)).join(", ")}` },
    { title: "A runtime error", q: String.raw`What happens?${codeT(E5)}`,
      steps: [String.raw`$k=-2$: ${ct("-6.0")}; $k=-1$: ${ct("-12.0")}.`, String.raw`$k=0$: ${ct(errOf(E5).message)}; the program stops.`], ans: "two lines of output, then a crash" },
    { title: "A logic error", q: String.raw`What does this print, and why is it wrong?${codeT(E6)}`,
      steps: [String.raw`Only $90$ is divided by $3$: $70+80+30=180$.`, String.raw`Fix: ${ct("(70 + 80 + 90) / 3")} gives ${ct(out("print((70 + 80 + 90) / 3)"))}.`], ans: String.raw`${ct(out(E6))} (wrong); correct ${ct(out("print((70 + 80 + 90) / 3)"))}` },
    { title: "Off by one", q: String.raw`What does this print? What changes with ${ct("n <= 10")}?${codeT(E7)}`,
      steps: [String.raw`$n$: $0, 2, 4, 6, 8, 10$; at $10$, ${ct("10 < 10")} is False.`, String.raw`With ${ct("<=")}, one more pass: ${ct(out(E7.replace("n < 10", "n <= 10")))}.`], ans: ct(out(E7)) },
    { title: "Altering the formula", q: String.raw`Predict the output. Then change ${ct("1000 * 0.06")} to ${ct("amount * 0.06")}. What situation does each version model?${codeT(E8)}`,
      steps: [String.raw`Simple interest: $60$ each year: ${ct(out(E8))}.`, String.raw`Compound: $1000(1.06)^3$: ${ct(out(E8c))}.`], ans: "simple vs compound interest" },
    { title: "Altering a constraint", q: String.raw`What does this print? Alter it to find how many weeks it takes to reach $1000$ dollars.${codeT(E9)}`,
      steps: [String.raw`$52$ weeks: $120+52(15)$.`, String.raw`Change the condition to ${ct("money < 1000")}: ${ct(out(E9.replace("weeks < 52", "money < 1000").replace("print(money)", "print(weeks)")))} weeks ($120+15w\ge1000$).`], ans: ct(out(E9)) },
  ],
  problems: PROBLEMS,
};
