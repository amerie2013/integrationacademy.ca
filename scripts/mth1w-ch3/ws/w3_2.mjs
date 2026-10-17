// Worksheet 3.2 — Building Code from Steps (teacher edition)
import { codeT, ct, out } from "./codekit.mjs";
import { raw } from "../../mth1w-ch2/ws/tikz2.mjs";
import { PROBLEMS } from "./p3_2.mjs";

const FLOW = raw(String.raw`\tikzset{b/.style={draw,rounded corners,minimum height=0.7cm,inner sep=4pt,font=\small},d/.style={draw,diamond,aspect=2.4,inner sep=1pt,font=\small}}
\node[b,fill=violet!8] (s) at (0,0) {Start};
\node[b,fill=blue!8] (i) at (0,-1.1) {pop = 5000, years = 0};
\node[d,fill=orange!12] (q) at (0,-2.5) {pop $\le$ 8000?};
\node[b,fill=blue!8] (u) at (4.6,-2.5) {pop $\times$ 1.04, years + 1};
\node[b,fill=green!10] (o) at (0,-3.9) {print(years)};
\draw[->] (s) -- (i); \draw[->] (i) -- (q); \draw[->] (q) -- node[above,font=\scriptsize]{yes} (u); \draw[->] (u) |- (0,-1.7) -- (q.north); \draw[->] (q) -- node[right,font=\scriptsize]{no} (o);`,
  "Flowchart for Example 7: the decision diamond plus the arrow back up make a while loop.");

const E1 = `marks = [72, 85, 64, 90]
total = 0
for m in marks:
    total = total + m
print(total / len(marks))`;
const E2 = `for k in range(5, 30, 5):
    print(k, end=" ")`;
const E3 = `for t in range(10, 0, -3):
    print(t, end=" ")`;
const E4 = `def ticket(age):
    if age < 12:
        return 8
    elif age >= 65:
        return 10
    else:
        return 15

print(ticket(9), ticket(40), ticket(70))`;
const E5 = `p = 1
for k in range(1, 7):
    p = p * k
print(p)`;
const E6 = `count = 0
for n in range(1, 201):
    if n % 7 == 0 and n % 2 == 1:
        count = count + 1
print(count)`;
const E7 = `pop = 5000
years = 0
while pop <= 8000:
    pop = pop * 1.04
    years = years + 1
print(years)`;
const E8 = `dose = 400
hours = 0
while dose >= 20:
    dose = dose / 2
    hours = hours + 6
print(hours, dose)`;
const E9 = `n = 1
while n * n <= 2000:
    n = n + 1
print(n)`;

export const WS = {
  code: "3.2",
  title: "Building Code from Steps",
  bigideas: String.raw`An \textbf{algorithm} is an ordered list of steps. To write one, \textbf{decompose} the problem into input, processing and output, plan it in words or a flowchart, then code it with three structures: \textbf{sequence}, \textbf{selection} (${ct("if/elif/else")}) and \textbf{repetition} (${ct("for")}, ${ct("while")}). Accumulators and counters turn loops into totals and counts; while loops answer “how long until\ldots?” questions; and loops can search for solutions.`,
  goals: [
    "Decompose a problem into input, process and output; draw a flowchart.",
    String.raw`Use ${ct("if/elif/else")} for rules that change (piecewise rules).`,
    String.raw`Use ${ct("for")} with ${ct("range(start, stop, step)")} and ${ct("while")} loops.`,
    "Use accumulators (running totals, products) and counters.",
    "Model growth, decay and savings situations and search for solutions with loops.",
  ],
  curriculum: "C2.2",
  book: "Not in the Nelson text; links to patterns (Ch. 2), linear relations (Ch. 4) and growth/decay (Ch. 7)",
  vocab: [
    ["Algorithm", "ordered steps that solve a problem"],
    ["Selection", "choosing a path with a condition"],
    ["Repetition", "a loop: for (fixed count) or while (until a condition fails)"],
    ["Accumulator", String.raw`variable updated each pass: ${ct("total = total + k")}`],
    ["Counter", String.raw`variable that counts events: ${ct("count = count + 1")}`],
  ],
  hook: String.raw`Ask a volunteer to give “robot instructions” for making toast, while another student follows them \emph{literally}. Bread lands in the toaster still in its bag. Discuss: a computer does exactly what it is told, in exactly that order. Then list together the inputs, steps and outputs of a real problem: “How many weeks until I can afford a 600-dollar phone if I have 150 and save 35 a week?”`,
  concepts: [
    ["1. Decompose and plan", String.raw`\begin{center}\begin{tabular}{lll}\toprule Part & In words & In code\\\midrule Input & start amount, weekly saving, goal & ${ct("money = 150")}\\ Process & add a week until the goal is reached & ${ct("while money < 600:")}\\ Output & the number of weeks & ${ct("print(weeks)")}\\\bottomrule\end{tabular}\end{center}
${FLOW}`],
    ["2. Repetition", String.raw`\begin{center}\begin{tabular}{lll}\toprule Loop & Values / meaning & Use when\\\midrule ${ct("range(1, 6)")} & $1,2,3,4,5$ & a known count\\ ${ct("range(0, 20, 5)")} & $0,5,10,15$ & counting by a step\\ ${ct("range(9, 0, -3)")} & $9,6,3$ & counting backward\\ ${ct("while cond:")} & repeats while cond is True & “until \ldots” questions\\\bottomrule\end{tabular}\end{center}
The stop value of a range is never included. A while loop must change a variable in its condition.`],
    ["3. Selection", String.raw`Python checks conditions from the top and runs the \textbf{first} true branch only. A piecewise rule such as admission prices (child, adult, senior) needs ${ct("if")}, ${ct("elif")}, ${ct("else")}. Conditions can be combined with ${ct("and")}, ${ct("or")}, ${ct("not")}.`],
    ["4. Accumulators, counters and searching", String.raw`An accumulator starts at $0$ (sum) or $1$ (product) and is updated in every pass. A counter adds $1$ when a condition holds. A search loop tests values until one works; it finds only the values it tests.`],
  ],
  tips: [
    String.raw`Have students list the values of a range \emph{before} running the code; off-by-one errors are the most common bug.`,
    "Infinite loops: ask “what changes the variable in the condition?”",
    String.raw`In ${ct("if/elif")} chains, order matters: test ${ct("age >= 65")} before ${ct("age >= 12")}, not after.`,
    "Pair every loop answer with an algebra check (an inequality or a formula).",
    "Flowcharts are worth the time: errors in the plan are cheaper to fix than errors in code.",
  ],
  examples: [
    { title: "Mean of a list", q: String.raw`What does this program print?${codeT(E1)}`,
      steps: [String.raw`Total $72+85+64+90=311$.`, String.raw`$311\div4=77.75$.`], ans: ct(out(E1)) },
    { title: "Counting by a step", q: String.raw`What does this program print?${codeT(E2)}`,
      steps: [String.raw`Start $5$, add $5$, stop before $30$.`], ans: ct(out(E2).trim()) },
    { title: "Counting backward", q: String.raw`What does this program print?${codeT(E3)}`,
      steps: [String.raw`Start $10$, subtract $3$, stop before $0$.`], ans: ct(out(E3).trim()) },
    { title: "Three-way selection", q: String.raw`What does this program print?${codeT(E4)}`,
      steps: [String.raw`$9<12$: $8$. $40$: neither condition, so $15$. $70\ge65$: $10$.`], ans: ct(out(E4)) },
    { title: "A product accumulator", q: String.raw`What does this program print? What does it calculate?${codeT(E5)}`,
      steps: [String.raw`$p=1\times2\times3\times4\times5\times6$.`, String.raw`This is $6!$ (“6 factorial”).`], ans: ct(out(E5)) },
    { title: "A counter with two conditions", q: String.raw`How many odd multiples of $7$ are there from $1$ to $200$?${codeT(E6)}`,
      steps: [String.raw`Multiples of $7$ up to $200$: $28$ ($7\times28=196$).`, String.raw`Every second one is odd: $7, 21, 35,\dots$: $14$.`], ans: ct(out(E6)) },
    { title: "Population growth", q: String.raw`A town of $5000$ grows $4\%$ a year. How many years until it is over $8000$?${codeT(E7)}`,
      steps: [String.raw`The loop multiplies by $1.04$ each year while the population is at most $8000$.`, String.raw`$1.04^{12}\approx1.60$, so after $12$ years $5000\times1.601\approx8005$.`], ans: String.raw`${ct(out(E7))} years` },
    { title: "Halving", q: String.raw`A $400$-mg dose halves every $6$ hours. How long until less than $20$ mg remains?${codeT(E8)}`,
      steps: [String.raw`$400\to200\to100\to50\to25\to12.5$.`, String.raw`Five halvings, $5\times6=30$ hours.`], ans: ct(out(E8)) },
    { title: "Searching for a boundary", q: String.raw`Find the smallest whole number $n$ with $n^2>2000$.${codeT(E9)}`,
      steps: [String.raw`$44^2=1936$, $45^2=2025$.`], ans: ct(out(E9)) },
  ],
  problems: PROBLEMS,
};
