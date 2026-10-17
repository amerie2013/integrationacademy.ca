// Worksheet 2.5 — Solving Multi-Step Equations (teacher edition)
import { balance, angleLine, rectT } from "./tikz2.mjs";
import { PROBLEMS } from "./p2_5.mjs";

export const WS = {
  code: "2.5",
  title: "Solving Multi-Step Equations",
  bigideas: String.raw`Any linear equation can be solved with the same plan: \textbf{expand} brackets, \textbf{clear fractions} by multiplying every term by the LCD, \textbf{collect} the variable terms on one side and the constants on the other, then \textbf{divide}. If the variable disappears and a false statement is left, there is \textbf{no solution}; if a true statement is left, \textbf{every} number is a solution. Multi-step equations model perimeter, angle, age, coin and rate problems.`,
  goals: [
    "Solve equations with brackets, including a negative factor in front of a bracket.",
    "Solve equations with the variable on both sides.",
    "Clear fractions using the LCD, including binomial numerators.",
    "Recognise equations with no solution and identities.",
    "Model and solve geometry, consecutive-number, age, coin and rate problems; verify in context.",
  ],
  curriculum: "C1.5",
  vocab: [
    ["LCD", "lowest common denominator of all fractions in the equation"],
    ["Collect", "move terms to one side by adding or subtracting on both sides"],
    ["No solution", String.raw`variable cancels leaving a false statement ($0=5$)`],
    ["Identity", String.raw`variable cancels leaving a true statement ($-6=-6$); every value works`],
    ["Supplementary", String.raw`two angles adding to $180^\circ$`],
  ],
  hook: String.raw`Pose: “I'm thinking of a number. Three times the number, minus $8$, gives the same answer as the number plus $12$.” Let students guess and check ($10$ works). Then ask: “What if the numbers were $3x-8=x+13$?” Guessing gets hard ($x=10.5$). Model the balance with $x$-bags on both pans: remove one bag from each side first. That is the key new move today.`,
  concepts: [
    ["1. A plan for every linear equation", String.raw`\begin{enumerate}[leftmargin=*,itemsep=1pt]
\item Expand brackets; multiply every term by the LCD to clear fractions.
\item Simplify each side.
\item Collect variable terms on the side with the larger coefficient (keeps it positive).
\item Collect constants on the other side, then divide.
\item Verify in the \emph{original} equation.
\end{enumerate}`],
    ["2. Variables on both sides", String.raw`${balance("4x-3", "x+9", "Remove x from both pans: 3x − 3 = 9, so 3x = 12 and x = 4.")}`],
    ["3. Clearing fractions", String.raw`Multiply \textbf{every term} on both sides by the LCD. Bracket numerators with two terms:
\[\frac{x-2}{3}-\frac{x}{4}=1\ \xrightarrow{\times12}\ 4(x-2)-3x=12\ \Rightarrow\ 4x-8-3x=12\ \Rightarrow\ x=20.\]
Check: $\frac{18}{3}-\frac{20}{4}=6-5=1$ ✓.`],
    ["4. No solution and identities", String.raw`\begin{tabular}{@{}lll@{}}\toprule Equation & Simplifies to & Meaning\\\midrule $5(x+1)=5x+2$ & $5=2$ & no solution\\ $2(x-3)+x=3x-6$ & $-6=-6$ & every number works\\ $7x+1=x+1$ & $6x=0$ & one solution, $x=0$\\\bottomrule\end{tabular}`],
    ["5. Modelling", String.raw`\textbf{Angles:} on a line $180^\circ$; in a triangle $180^\circ$; around a point $360^\circ$.
${angleLine(["(4x+5)^\\circ", "(x+15)^\\circ", "(2x-2)^\\circ"], "7x + 18 = 180 gives x = 162/7 ≈ 23.1 — answers need not be whole numbers.")}
\textbf{Ages:} add the same number of years to every person. \textbf{Coins:} number $\times$ value. \textbf{Rates:} distance $=$ rate $\times$ time; for objects moving toward each other the distances add. \textbf{Work:} a job done in $6$ h means $\frac16$ of the job per hour.`],
  ],
  tips: [
    String.raw`$-2(x-3)=-2x+6$: the most common error in this lesson. Have students circle the sign in front of each bracket.`,
    String.raw`When clearing fractions, every term is multiplied --- including whole numbers on either side.`,
    String.raw`“Moving” a term changes its sign only because the same term is subtracted from both sides; say it that way.`,
    String.raw`$x=0$ is a solution, not “no solution”.`,
    "For word problems, insist on a “Let …” statement and a check in the story, not just in the equation.",
  ],
  examples: [
    { title: "Brackets first", q: String.raw`Solve $2(4x-1)+3=25$.`,
      steps: [String.raw`$8x-2+3=25$, so $8x+1=25$.`, String.raw`$8x=24$, $x=3$.`], ans: "$x=3$" },
    { title: "A negative in front of a bracket", q: String.raw`Solve $7-3(2-y)=16$.`,
      steps: [String.raw`$7-6+3y=16$.`, String.raw`$1+3y=16$, so $3y=15$, $y=5$.`], ans: "$y=5$" },
    { title: "Variables on both sides", q: String.raw`Solve $9k+4=5k-12$.`,
      steps: [String.raw`Subtract $5k$: $4k+4=-12$.`, String.raw`$4k=-16$, $k=-4$. Verify: $-32$ and $-32$ ✓`], ans: "$k=-4$" },
    { title: "Brackets on both sides", q: String.raw`Solve $3(2a+1)=4(a-2)+5$.`,
      steps: [String.raw`$6a+3=4a-3$.`, String.raw`$2a=-6$, $a=-3$.`], ans: "$a=-3$" },
    { title: "Clearing fractions", q: String.raw`Solve $\frac x2+\frac x3=15$.`,
      steps: [String.raw`$\times6$: $3x+2x=90$.`, String.raw`$5x=90$, $x=18$.`], ans: "$x=18$" },
    { title: "Binomial numerators", q: String.raw`Solve $\dfrac{2x-1}{3}=\dfrac{x+4}{2}$.`,
      steps: [String.raw`$\times6$: $2(2x-1)=3(x+4)$.`, String.raw`$4x-2=3x+12$, $x=14$.`, String.raw`Check: $\frac{27}{3}=9$, $\frac{18}{2}=9$ ✓`], ans: "$x=14$" },
    { title: "No solution or every number?", q: String.raw`Solve (a) $4(x-2)=4x-3$; (b) $2(3x+1)-x=5x+2$.`,
      steps: [String.raw`(a) $4x-8=4x-3$ gives $-8=-3$: false.`, String.raw`(b) $5x+2=5x+2$: always true.`], ans: "(a) no solution (b) every number" },
    { title: "Consecutive even integers", q: String.raw`Three consecutive even integers add to $78$. Find them.`,
      steps: [String.raw`$n+(n+2)+(n+4)=78$, so $3n+6=78$.`, String.raw`$n=24$.`], ans: "$24, 26, 28$" },
    { title: "Supplementary angles", q: String.raw`Angles $(3x+12)^\circ$ and $(5x-4)^\circ$ are supplementary. Find each angle.`,
      fig: angleLine(["(3x+12)^\\circ", "(5x-4)^\\circ"], ""),
      steps: [String.raw`$8x+8=180$, so $x=21.5$.`, String.raw`$3(21.5)+12=76.5$ and $5(21.5)-4=103.5$; sum $180$ ✓`], ans: String.raw`$76.5^\circ$ and $103.5^\circ$` },
  ],
  problems: PROBLEMS,
};
