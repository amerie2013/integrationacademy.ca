// Worksheet 2.6 — Rearranging Formulas (teacher edition)
import { flowT, polyT } from "./tikz2.mjs";
import { PROBLEMS } from "./p2_6.mjs";

export const WS = {
  code: "2.6",
  title: "Rearranging Formulas",
  bigideas: String.raw`A formula can be \textbf{rearranged} to make any of its variables the subject, using exactly the inverse operations used to solve equations: list what is done to the target variable, and undo it in \textbf{reverse order} on both sides. Rearranging once is efficient when the same unknown is needed many times (tables, spreadsheets, code), and it turns a linear relation such as $Ax+By=C$ into $y=mx+b$.`,
  goals: [
    "Identify the operations applied to a variable in a formula, in order.",
    "Isolate any variable in a formula by undoing those operations in reverse order.",
    String.raw`Rearrange $Ax+By=C$ into $y=mx+b$ and interpret the slope and intercept.`,
    "Decide when to rearrange first and when to substitute first.",
    "Use rearranged formulas from measurement, science and finance.",
  ],
  curriculum: "C1.5",
  book: "Nelson Principles of Mathematics 9, §4.4",
  vocab: [
    ["Subject", String.raw`the variable alone on one side: $A$ in $A=lw$`],
    ["Rearrange", "make a different variable the subject"],
    ["Literal equation", "an equation containing several letters"],
    ["Standard form", "$Ax+By=C$"],
    ["Slope-intercept form", "$y=mx+b$"],
  ],
  hook: String.raw`Give pairs a list of ten Fahrenheit temperatures from a U.S. weather site and ask them to convert all ten to Celsius using $F=1.8C+32$. Most will solve ten separate equations. After a few minutes, ask: “Is there a faster way?” Someone suggests flipping the formula once. Time both methods --- that is the point of today's lesson.`,
  concepts: [
    ["1. Same moves, letters instead of numbers", String.raw`\begin{tabular}{@{}ll@{}}\toprule Solve $5x-8=27$ & Solve $ax-b=c$ for $x$\\\midrule $5x=27+8$ & $ax=c+b$\\ $x=\frac{35}{5}=7$ & $x=\frac{c+b}{a}$ \quad ($a\neq0$)\\\bottomrule\end{tabular}`],
    ["2. Undo in reverse order", String.raw`${flowT("C", [String.raw`\times1.8`, "+32"], "F", "", ["F", "-32", String.raw`\div1.8`, "C"])}
$F=1.8C+32\ \Rightarrow\ F-32=1.8C\ \Rightarrow\ C=\frac{F-32}{1.8}$.`],
    ["3. Standard form to slope-intercept form", String.raw`$5x+2y=14\ \Rightarrow\ 2y=-5x+14\ \Rightarrow\ y=-\frac52x+7$: slope $-\frac52$, $y$-intercept $7$. Divide \textbf{every} term by the coefficient of $y$.`],
    ["4. Substitute first, or rearrange first?", String.raw`One calculation: either way works (substituting first gives simpler arithmetic). Many calculations, a spreadsheet column or a program: rearrange once. Always check a rearranged formula with one set of numbers.`],
  ],
  tips: [
    String.raw`From $2w=P-2l$, students write $w=P-l$: they divide only one term. Write $w=\frac{P-2l}{2}$ first.`,
    String.raw`$h(a+b)$: $h$ multiplies the bracket, so divide by $h$; never subtract it.`,
    String.raw`Keep grouping brackets: $\frac59(F-32)$ is not $\frac59F-32$.`,
    "A negative coefficient keeps its sign when you divide by it.",
    "State restrictions when you divide by a variable (it cannot be 0).",
  ],
  examples: [
    { title: "One step", q: String.raw`Solve $A=lw$ for $l$, then find $l$ when $A=84$ and $w=7$.`,
      steps: [String.raw`Divide both sides by $w$: $l=\frac Aw$.`, String.raw`$l=\frac{84}{7}=12$.`], ans: String.raw`$l=\frac Aw$; $12$` },
    { title: "Radius from circumference", q: String.raw`Solve $C=2\pi r$ for $r$ and find $r$ when $C=50$ cm.`,
      steps: [String.raw`$r=\frac{C}{2\pi}$.`, String.raw`$r=\frac{50}{2\pi}\approx7.96$ cm.`], ans: String.raw`$r=\frac{C}{2\pi}\approx7.96$ cm` },
    { title: "A line", q: String.raw`Solve $y=3x-7$ for $x$.`,
      steps: [String.raw`Add $7$: $y+7=3x$.`, String.raw`Divide by $3$: $x=\frac{y+7}{3}$.`], ans: String.raw`$x=\frac{y+7}{3}$` },
    { title: "Simple interest rate", q: String.raw`Solve $I=Prt$ for $r$. What rate earns $90$ dollars on $1500$ dollars in $2$ years?`,
      steps: [String.raw`$r=\frac{I}{Pt}$.`, String.raw`$r=\frac{90}{3000}=0.03$.`], ans: String.raw`$r=\frac I{Pt}$; $3\%$` },
    { title: "Standard form", q: String.raw`Write $2x+5y=20$ as $y=mx+b$.`,
      steps: [String.raw`$5y=-2x+20$.`, String.raw`$y=-\frac25x+4$.`], ans: String.raw`$y=-\frac25x+4$` },
    { title: "Decimal temperature formula", q: String.raw`Solve $F=1.8C+32$ for $C$ and convert $104\,^\circ$F.`,
      steps: [String.raw`$C=\frac{F-32}{1.8}$.`, String.raw`$\frac{72}{1.8}=40$.`], ans: String.raw`$40\,^\circ$C` },
    { title: "Triangle base", q: String.raw`Solve $A=\frac12bh$ for $b$; find $b$ when $A=36$ and $h=8$.`,
      fig: polyT([[0, 0], [4, 0], [1.2, 2.4]], ["b", "", ""], ""),
      steps: [String.raw`$\times2$: $2A=bh$. $\div h$: $b=\frac{2A}{h}$.`, String.raw`$b=\frac{72}{8}=9$.`], ans: String.raw`$b=\frac{2A}h$; $9$` },
    { title: "Cone height", q: String.raw`Solve $V=\frac13\pi r^2h$ for $h$. Find $h$ when $r=3$ and $V=60\pi$.`,
      steps: [String.raw`$\times3$: $3V=\pi r^2h$. $\div\pi r^2$: $h=\frac{3V}{\pi r^2}$.`, String.raw`$h=\frac{180\pi}{9\pi}=20$.`], ans: String.raw`$h=\frac{3V}{\pi r^2}$; $20$` },
    { title: "The mark you need", q: String.raw`The mean of three tests is $A=\frac{a+b+c}{3}$. Solve for $c$. Ali scored $72$ and $85$; what does he need on the third test for a mean of $80$?`,
      steps: [String.raw`$3A=a+b+c$, so $c=3A-a-b$.`, String.raw`$c=240-72-85=83$.`], ans: "$c=3A-a-b$; $83$" },
  ],
  problems: PROBLEMS,
};
