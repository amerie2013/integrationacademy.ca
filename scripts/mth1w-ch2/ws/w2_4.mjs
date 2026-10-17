// Worksheet 2.4 — Creating & Solving Equations (teacher edition)
import { balance, flowT, lineT } from "./tikz2.mjs";
import { PROBLEMS } from "./p2_4.mjs";

export const WS = {
  code: "2.4",
  title: "Creating & Solving Equations",
  bigideas: String.raw`An \textbf{equation} states that two expressions are equal; its \textbf{solution} is the value that makes it true. Like a balance, an equation stays true when we do the same thing to both sides. To isolate the variable, \textbf{undo the operations in reverse order} (inverse operations). Equations model real situations: from words, from a formula, or from a linear relation, where solving is the same as reading a point on its graph.`,
  goals: [
    "Distinguish expressions from equations and verify a solution by substitution.",
    "Solve one- and two-step equations with integer, fraction and decimal coefficients.",
    "Explain each step using the balance model and inverse operations; solve by working backward.",
    "Write and solve equations for word problems and linear relations; answer in context.",
    "Estimate solutions from a graph or table and confirm them algebraically.",
  ],
  curriculum: "C1.5 (with C3 link to linear relations)",
  vocab: [
    ["Equation", "two expressions joined by $=$"],
    ["Solution / root", "a value of the variable that makes the equation true"],
    ["Inverse operations", String.raw`operations that undo each other: $+$/$-$, $\times$/$\div$`],
    ["Isolate", "get the variable alone on one side"],
    ["Verify", "substitute the solution into the original equation"],
  ],
  hook: String.raw`Bring (or draw) a pan balance. Put $3$ identical mystery bags and $4$ cubes on the left, $19$ cubes on the right. “How many cubes are in each bag?” Students will remove $4$ cubes from each side, then share $15$ among $3$ bags. Write each move as an equation: $3x+4=19\to3x=15\to x=5$. They have just solved an equation the way al-Khwārizmī described it.`,
  concepts: [
    ["1. Equations and solutions", String.raw`$4x-3$ is an expression; $4x-3=17$ is an equation. A solution must be \textbf{verified in the original}: $x=5$ gives $4(5)-3=17$ ✓. Guess-and-check works for easy whole-number answers but is slow and fails for answers like $x=-\frac72$.`],
    ["2. The balance and inverse operations", String.raw`${balance("2x+7", "-5", "Subtract 7 from both pans, then halve both sides: x = −6.")}
${flowT("x", [String.raw`\times2`, "+7"], "-5", "Building 2x + 7 from x (top) and undoing it (bottom).", ["-5", "-7", String.raw`\div2`, "x=-6"])}
Undo addition/subtraction first, then multiplication/division --- the reverse of BEDMAS. Each line is an \textbf{equivalent equation}.`],
    ["3. Fractions and decimals", String.raw`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item $\frac{x}{3}=-4$: multiply both sides by $3$: $x=-12$.
\item $\frac34w=15$: multiply by the reciprocal $\frac43$: $w=20$.
\item $\frac{x+4}{2}=7$: multiply by $2$ first ($x+4=14$), then subtract: $x=10$.
\item $0.5k-1.2=2.3$: $0.5k=3.5$, $k=7$ (or multiply every term by $10$ first).
\end{itemize}`],
    ["4. Modelling with equations", String.raw`(1) Define the variable (“Let $n$ be \ldots”). (2) Write the equation from the words. (3) Solve. (4) Verify \emph{in the story}. (5) Answer with a sentence and units. Common structures: fixed amount + rate$\times$quantity $=$ total; perimeter; consecutive numbers; working backward through a chain of operations.`],
    ["5. Equations, tables and graphs", String.raw`For the relation $C=20+15h$ (a $20$-dollar call-out plus $15$ dollars per hour), the equation $20+15h=110$ asks “where does the line reach $C=110$?”
${lineT({ m: 15, b: 20, c: 110, xmax: 8, ymax: 140, xlabel: "hours $h$", ylabel: "cost $C$", xtick: "0,1,...,8", ytick: "0,20,...,140", width: 8, height: 5 }, "Across from 110, down to h = 6. Algebra: 15h = 90, h = 6.")}`],
  ],
  tips: [
    String.raw`Students divide first in $3x+4=19$; ask what was done \emph{last} to $x$.`,
    String.raw`Keep the sign with the term: $11-3k=26$ means $-3k=15$, $k=-5$.`,
    String.raw`With $\frac{x+4}{2}$, the whole numerator is divided; multiply by $2$ before subtracting.`,
    "Insist on verification in the original equation, written as a line of work.",
    "Word problems: the answer is a sentence with units, not just “x = 7”.",
  ],
  examples: [
    { title: "Verifying a solution", q: String.raw`Is $y=4$ a solution of $3y-7=2y-3$?`,
      steps: [String.raw`Left: $3(4)-7=5$. Right: $2(4)-3=5$.`], ans: "yes" },
    { title: "One-step equations", q: String.raw`Solve (a) $-8+n=-3$ (b) $-6w=42$.`,
      steps: [String.raw`(a) Add $8$: $n=5$.`, String.raw`(b) Divide by $-6$: $w=-7$.`], ans: String.raw`$n=5$; $w=-7$` },
    { title: "Two-step with a balance", q: String.raw`Solve $5x-12=18$.`, fig: balance("5x-12", "18", ""),
      steps: [String.raw`Add $12$: $5x=30$.`, String.raw`Divide by $5$: $x=6$. Verify: $30-12=18$ ✓`], ans: "$x=6$" },
    { title: "Negative coefficient", q: String.raw`Solve $11-3k=26$.`,
      steps: [String.raw`Subtract $11$: $-3k=15$.`, String.raw`Divide by $-3$: $k=-5$. Verify: $11+15=26$ ✓`], ans: "$k=-5$" },
    { title: "Fraction coefficient", q: String.raw`Solve $\frac{3a}{4}-2=7$.`,
      steps: [String.raw`Add $2$: $\frac{3a}{4}=9$.`, String.raw`Multiply by $\frac43$: $a=12$.`], ans: "$a=12$" },
    { title: "A whole numerator", q: String.raw`Solve $\frac{x+6}{5}=-2$.`,
      steps: [String.raw`Multiply by $5$: $x+6=-10$.`, String.raw`Subtract $6$: $x=-16$.`], ans: "$x=-16$" },
    { title: "Decimals", q: String.raw`Solve $2.4p+1.3=8.5$.`,
      steps: [String.raw`Subtract $1.3$: $2.4p=7.2$.`, String.raw`Divide: $p=3$.`], ans: "$p=3$" },
    { title: "Working backward", q: String.raw`A number is divided by $4$, then $9$ is added. The result is $2$. Find the number.`,
      fig: flowT("n", [String.raw`\div4`, "+9"], "2", "", ["2", "-9", String.raw`\times4`, "n=-28"]),
      steps: [String.raw`$\frac n4+9=2$.`, String.raw`$\frac n4=-7$, so $n=-28$.`], ans: "$-28$" },
    { title: "A linear relation", q: String.raw`A tank holds $600$ L and drains at $45$ L/min: $V=600-45t$. When does it hold $150$ L?`,
      fig: lineT({ m: -45, b: 600, c: 150, xmax: 14, ymax: 650, xlabel: "time $t$ (min)", ylabel: "volume $V$ (L)", xtick: "0,2,...,14", ytick: "0,100,...,600", width: 8, height: 4.8 }, ""),
      steps: [String.raw`$600-45t=150$.`, String.raw`$-45t=-450$, so $t=10$.`], ans: "after $10$ min" },
  ],
  problems: PROBLEMS,
};
