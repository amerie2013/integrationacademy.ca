// Worksheet 3.1 — Coding Algebraic Concepts (teacher edition)
import { codeT, ct, out, errOf } from "./codekit.mjs";
import { PROBLEMS } from "./p3_1.mjs";

const E1 = `a = 7
b = a - 2
a = a + b
print(a, b)`;
const E2 = `print(23 // 4, 23 % 4, -2 ** 4)`;
const E3 = `a = 6
b = 10
h = 4
A = (a + b) * h / 2
print(A)`;
const E4 = `def interest(P, r, t):
    return P * r * t

print(interest(1500, 0.04, 3))`;
const E5 = `def f(x):
    return x ** 2 - 4 * x

for x in range(0, 5):
    print(x, f(x))`;
const E6 = `x = -2
print(5 * x + 3 == -7)
print(x ** 2 - x == 6)`;
const E7 = `for x in range(-3, 4):
    print(x, 2 * x - 1 < 3)`;
const E8 = `for x in range(-5, 10):
    if 3 <= 2 * x + 1 < 11:
        print(x, end=" ")`;
const E9bad = `x = 4
y = 3x + 1
print(y)`;

export const WS = {
  code: "3.1",
  title: "Coding Algebraic Concepts",
  bigideas: String.raw`Code and algebra share the same ideas. A \textbf{variable} stores a value (and ${ct("=")} means \emph{store}); an \textbf{expression} combines values with operators that follow BEDMAS; a \textbf{function} is a formula whose inputs are \textbf{parameters}; and a \textbf{comparison} such as ${ct("3 * x - 5 == 7")} is True or False, so code can check solutions of equations and search for values that satisfy inequalities.`,
  goals: [
    String.raw`Use variables and assignment; explain ${ct("x = x + 3")}.`,
    String.raw`Write and evaluate expressions with ${ct("+ - * / // % **")}, following BEDMAS.`,
    "Represent formulas as functions with parameters and build tables of values.",
    String.raw`Use ${ct("== != < <= > >=")} to test solutions of equations and inequalities.`,
    "Use a loop to list the integers in a range that satisfy an inequality.",
  ],
  curriculum: "C2.1",
  vocab: [
    ["Assignment", String.raw`${ct("name = expression")}: evaluate the right side, store it on the left`],
    ["Function", String.raw`${ct("def name(parameters):")} \ldots ${ct("return value")}`],
    ["Parameter / argument", "the input name in the definition / the value passed in a call"],
    ["Boolean", String.raw`${ct("True")} or ${ct("False")}, the result of a comparison`],
    ["Float / int", String.raw`a decimal value (${ct("3.5")}) / a whole-number value (${ct("3")})`],
  ],
  hook: String.raw`Write on the board: $x=x+5$. Ask: “Is this true? For which $x$?” (Never, in algebra.) Then type ${ct("x = 2")}, ${ct("x = x + 5")}, ${ct("print(x)")} into Python (or the lesson explorer) and run it: it prints $7$. Discuss: in code, ${ct("=")} is an instruction (“store”), not a statement of equality. That one idea unlocks the whole chapter.`,
  concepts: [
    ["1. Variables and assignment", String.raw`Python evaluates the right side first, then stores the result:
\begin{center}\begin{tabular}{lll}\toprule Line & Work & Stored \\\midrule ${ct("p = 12")} & --- & $p=12$\\ ${ct("p = p - 5")} & $12-5$ & $p=7$\\ ${ct("p = p * p")} & $7\times7$ & $p=49$\\\bottomrule\end{tabular}\end{center}
A variable holds one value at a time; the old value is replaced.`],
    ["2. Operators and order of operations", String.raw`\begin{center}\begin{tabular}{llll}\toprule Python & Meaning & Example & Result\\\midrule ${ct("/")} & divide (gives a decimal) & ${ct("9 / 2")} & ${ct(out("print(9 / 2)"))}\\ ${ct("//")} & whole-number quotient & ${ct("9 // 2")} & ${ct(out("print(9 // 2)"))}\\ ${ct("%")} & remainder & ${ct("9 % 2")} & ${ct(out("print(9 % 2)"))}\\ ${ct("**")} & power & ${ct("3 ** 4")} & ${ct(out("print(3 ** 4)"))}\\\bottomrule\end{tabular}\end{center}
Order: brackets, ${ct("**")}, then ${ct("* / // %")}, then ${ct("+ -")}, left to right. Every multiplication must be written: $3x$ is ${ct("3 * x")}.`],
    ["3. Functions are formulas with parameters", String.raw`${codeT(`def area_triangle(b, h):\n    return b * h / 2\n\nprint(area_triangle(9, 4))`)}
${ct("b")} and ${ct("h")} are parameters; ${ct("9")} and ${ct("4")} are arguments. Output: ${ct(out(`def area_triangle(b, h):\n    return b * h / 2\nprint(area_triangle(9, 4))`))}. Calling a function in a ${ct("for")} loop makes a table of values.`],
    ["4. Equations and inequalities", String.raw`${ct("==")} \emph{asks} whether two values are equal; ${ct("=")} \emph{stores}. A comparison is True or False, so ${ct("print(2 * 5 - 3 == 7)")} prints ${ct(out("print(2 * 5 - 3 == 7)"))}. Python allows chained comparisons like algebra: ${ct("0 <= x < 5")} means $0\le x<5$. A loop with an ${ct("if")} lists every integer in a range that makes the condition true.`],
  ],
  tips: [
    String.raw`Students type ${ct("3x")} or ${ct("x^2")}: show the error message, then ${ct("3 * x")} and ${ct("x ** 2")}.`,
    String.raw`${ct("-3 ** 2")} is $-9$ in Python, exactly as $-3^2$ in math; bracket negative bases.`,
    String.raw`${ct("/")} always gives a decimal (${ct("4 / 2")} is ${ct("2.0")}); use ${ct("//")} for whole-number division.`,
    String.raw`${ct("range(a, b)")} excludes $b$ --- ask students to list the values before running.`,
    "A loop finds only the integers it tests; always connect the search to the algebraic solution.",
  ],
  examples: [
    { title: "Reassignment", q: String.raw`Trace the program and give the output.${codeT(E1)}`,
      steps: [String.raw`\textbf{Rule:} lines run top to bottom; in an assignment the right side is computed with the \emph{current} values, then stored in the variable on the left (replacing its old value).`, String.raw`$a=7$; $b=7-2=5$.`, String.raw`$a=7+5=12$ (uses the current $b$).`, String.raw`\textbf{Check:} the final $a$ is the old $a$ plus the new $b$: $7+5=12$ \checkmark`], ans: ct(out(E1)) },
    { title: "Integer division, remainder, powers", q: String.raw`Predict the output.${codeT(E2)}`,
      steps: [String.raw`\textbf{Operators:} ${ct("//")} gives the whole-number quotient, ${ct("%")} the remainder ($a=b\cdot q+r$), and ${ct("**")} is a power, done before the minus sign in front.`, String.raw`$23=4\times5+3$: quotient $5$, remainder $3$.`, String.raw`${ct("-2 ** 4")} is $-(2^4)=-16$.`, String.raw`\textbf{Check:} $4\times5+3=23$ \checkmark; and $(-2)^4=16$ would need brackets: ${ct("(-2) ** 4")}.`], ans: ct(out(E2)) },
    { title: "A formula in code", q: String.raw`Write code for the trapezoid area $A=\frac{(a+b)h}{2}$ and evaluate it.${codeT(E3)}`,
      steps: [String.raw`\textbf{Rule:} Python follows BEDMAS and has no fraction bar, so anything the bar groups must go in brackets.`, String.raw`The fraction bar groups $(a+b)h$, so brackets are needed around $a+b$.`, String.raw`$(16)(4)/2=32$; ${ct("/")} gives a decimal.`, String.raw`\textbf{Check by hand:} $\frac{(a+b)h}{2}$ with the program's values gives $\frac{16\times4}{2}=32$ \checkmark`], ans: ct(out(E3)) },
    { title: "A function with three parameters", q: String.raw`Predict the output.${codeT(E4)}`,
      steps: [String.raw`\textbf{Rule:} arguments are matched to parameters in order; the function then evaluates $I=Prt$ with those values ($4\%=0.04$).`, String.raw`$P=1500$, $r=0.04$, $t=3$.`, String.raw`$1500(0.04)(3)=180$.`, String.raw`\textbf{Check:} one year earns $1500\times0.04=60$, and $3\times60=180$ \checkmark`], ans: ct(out(E4)) },
    { title: "A table of values", q: String.raw`Predict every line.${codeT(E5)}`,
      steps: [String.raw`\textbf{Method:} the loop substitutes each $x$ into $f(x)=x^2-4x$; work the power first, then subtract.`, String.raw`$f(x)=x^2-4x$ for $x=0$ to $4$.`, String.raw`$0, -3, -4, -3, 0$: the table is symmetric about $x=2$.`, String.raw`\textbf{Check one row:} $f(3)=9-12=-3$ \checkmark`], ans: out(E5).split("\n").map((l) => ct(l)).join("; ") },
    { title: "Checking solutions", q: String.raw`Is $x=-2$ a solution of $5x+3=-7$? of $x^2-x=6$?${codeT(E6)}`,
      steps: [String.raw`\textbf{Definition:} a value is a solution if both sides of the equation are equal after substituting. ${ct("==")} tests equality and prints True or False.`, String.raw`$5(-2)+3=-7$ ✓.`, String.raw`$(-2)^2-(-2)=4+2=6$ ✓.`], ans: out(E6).split("\n").map((l) => ct(l)).join(", ") },
    { title: "An inequality as True/False", q: String.raw`Predict the output.${codeT(E7)}`,
      steps: [String.raw`\textbf{Solve first:} $2x-1<3\Rightarrow2x<4\Rightarrow x<2$; the program prints True exactly for the tested $x$ below $2$.`, String.raw`$2x-1<3$ means $x<2$.`, String.raw`True for $-3,\dots,1$; False for $2, 3$.`, String.raw`\textbf{Boundary check:} $x=2$: $2(2)-1=3$, and $3<3$ is False \checkmark`], ans: String.raw`True for $x\le1$, False for $x=2,3$` },
    { title: "A compound inequality", q: String.raw`Which integers are printed?${codeT(E8)}`,
      steps: [String.raw`\textbf{Rule:} for a compound inequality, do the same operation to all three parts: subtract $1$, then divide by $2$.`, String.raw`$3\le2x+1<11\Rightarrow2\le2x<10\Rightarrow1\le x<5$.`, String.raw`\textbf{Check the ends:} $x=1$: $2(1)+1=3$, and $3\le3$ \checkmark; $x=5$: $11<11$ is False, so $5$ is not printed \checkmark`], ans: ct(out(E8).trim()) },
    { title: "A syntax error", q: String.raw`Why does this program fail?${codeT(E9bad)}`,
      steps: [String.raw`\textbf{Rule:} in algebra $3x$ means $3\times x$, but Python needs every multiplication written with ${ct("*")}; ${ct("3x")} breaks the grammar, so the program does not run.`, String.raw`Python reports “${errOf(E9bad).message}” on line ${errOf(E9bad).line}.`, String.raw`${ct("3x")} must be written ${ct("3 * x")}; then the output is ${ct(out(E9bad.replace("3x", "3 * x")))}.`], ans: String.raw`write ${ct("y = 3 * x + 1")}` },
  ],
  problems: PROBLEMS,
};
