// Worksheet 1.2 — Adding & Subtracting Integers (teacher edition, one PDF with answer key)
import { numberLine, chips, thermometer, barChart } from "./tikz.mjs";
import { PROBLEMS } from "./p1_2.mjs";

export const WS = {
  code: "1.2",
  title: "Adding & Subtracting Integers",
  bigideas: String.raw`Integers describe direction and change: up/down, gain/loss, above/below zero. \textbf{Adding} a positive moves right on the number line and adding a negative moves left. \textbf{Subtracting means adding the opposite}: $a-b=a+(-b)$. Two pictures --- the number line and zero pairs --- explain every rule.`,
  goals: [
    "Find opposites and absolute values, and order integers on a number line.",
    "Add integers using a number line, zero-pair chips, and the same-sign / different-sign rules.",
    String.raw`Subtract integers by adding the opposite, and explain why $a-(-b)=a+b$.`,
    "Evaluate expressions with several integer terms.",
    "Solve problems involving temperature, elevation, money and scores, including distances between values.",
  ],
  curriculum: "B3.1",
  vocab: [
    ["Opposites", "numbers the same distance from $0$ on opposite sides; they add to $0$ ($7$ and $-7$)"],
    ["Absolute value", "distance from $0$, never negative: $|-7|=7$"],
    ["Zero pair", "one positive and one negative unit; together they equal $0$"],
    ["Sum / difference", "the result of adding / subtracting"],
  ],
  hook: String.raw`Show a weather forecast: “Tonight $-12\,^\circ$C, tomorrow afternoon $5\,^\circ$C.” Ask: \emph{How many degrees warmer is tomorrow afternoon?} Many students say $7$ (they subtract $12-5$). Draw a vertical thermometer: from $-12$ up to $0$ is $12$ degrees and from $0$ up to $5$ is $5$ more, so the rise is $17$. Then write $5-(-12)=17$. The rest of the lesson explains why subtracting a negative adds.`,
  concepts: [
    ["1. Opposites and absolute value", String.raw`Every integer has an \textbf{opposite} the same distance from $0$. The \textbf{absolute value} is that distance, so it is never negative.
${numberLine({ min: -8, max: 8, dots: [{ at: -5, label: "$-5$", color: "red" }, { at: 5, label: "$5$", color: "blue" }], arrows: [{ from: 0, to: -5, label: "5 units", color: "red" }, { from: 0, to: 5, label: "5 units", color: "blue" }], unit: 0.85, caption: "$|-5|=|5|=5$: both are 5 units from 0." })}
\textbf{Ordering:} on a horizontal number line, the number farther \emph{right} is greater: $-2>-9$ even though $9>2$.`],
    ["2. Adding integers: two models and two rules", String.raw`\textbf{Number line.} Start at the first number. Add a positive: move right. Add a negative: move left.
${numberLine({ min: -6, max: 6, arrows: [{ from: 0, to: 4, label: "start at $4$", color: "gray", lane: 0 }, { from: 4, to: -3, label: "add $-7$: move 7 left", color: "red", lane: 1 }], dots: [{ at: -3, label: "$-3$", color: "green" }], unit: 0.95, caption: "$4+(-7)=-3$" })}
\textbf{Zero pairs.} A $+$ chip and a $-$ chip cancel. Whatever is left after cancelling is the answer.
${chips(4, 7, "$4+(-7)$: four zero pairs cancel, three negative chips remain, so the sum is $-3$.")}
\textbf{Rules.} \emph{Same signs:} add the absolute values and keep the sign, $(-8)+(-5)=-13$. \emph{Different signs:} subtract the absolute values and keep the sign of the number farther from $0$, $(-8)+5=-3$.`],
    ["3. Subtracting: add the opposite", String.raw`A pattern shows why subtracting a negative makes the answer bigger:
\begin{center}\begin{tabular}{rcl}
$5-2$ & $=$ & $3$\\ $5-1$ & $=$ & $4$\\ $5-0$ & $=$ & $5$\\ $5-(-1)$ & $=$ & $6$\\ $5-(-2)$ & $=$ & $7$
\end{tabular}\qquad
\begin{minipage}{7.5cm}Each time we subtract one less, the answer goes up by one. So $5-(-2)=7=5+2$.\\[4pt]
\textbf{Rule:} $a-b=a+(-b)$. Change subtraction to addition and change the sign of the second number.\\[4pt]
\textbf{Meaning:} $a-b$ is how far it is \emph{from $b$ to $a$}.\end{minipage}\end{center}
${thermometer({ lo: -15, hi: 10, step: 5, marks: [{ at: 5, label: "tomorrow $5^\\circ$", color: "red" }, { at: -12, label: "tonight $-12^\\circ$", color: "blue" }], caption: "Rise from $-12$ to $5$: $5-(-12)=17$ degrees." })}`],
    ["4. Several terms", String.raw`Rewrite every subtraction as adding the opposite, then group: add all the positives, add all the negatives, and combine.
\[-4-9+15-(-6)=-4+(-9)+15+6=(-13)+21=8\]
Teach students to \textbf{estimate the sign first}: are the positives or the negatives “heavier”? Here $21>13$, so the answer is positive.`],
  ],
  tips: [
    String.raw`“Two negatives make a positive” is a \emph{multiplying} rule, not an adding rule: $(-3)+(-4)=-7$.`,
    String.raw`The minus sign has two jobs (subtract / negative). Writing $3-8$ as $3+(-8)$ separates them.`,
    String.raw`Order matters in subtraction: $2-9=-7$ but $9-2=7$.`,
    String.raw`For distance between two values, always do \emph{higher minus lower}; the answer is positive.`,
    String.raw`Let students use chips or a number line until the rules are automatic --- models first, rules second.`,
  ],
  examples: [
    { title: "Adding on a number line", q: String.raw`Evaluate $(-3)+8$.`,
      fig: numberLine({ min: -4, max: 6, arrows: [{ from: -3, to: 5, label: "$+8$", color: "blue" }], dots: [{ at: -3, label: "$-3$", color: "gray" }, { at: 5, label: "$5$", color: "green" }], unit: 1 }),
      steps: [String.raw`Start at $-3$.`, String.raw`Adding $8$ means moving $8$ units right: $-3\to5$.`], ans: "$5$" },
    { title: "Same signs with chips", q: String.raw`Evaluate $(-5)+(-3)$.`, fig: chips(0, 8, "Five negative chips and three more negative chips: eight negatives, no zero pairs."),
      steps: [String.raw`Both are negative: no zero pairs can form.`, String.raw`Add the sizes $5+3=8$ and keep the negative sign.`], ans: "$-8$" },
    { title: "Different signs with chips", q: String.raw`Evaluate $7+(-11)$.`, fig: chips(7, 11, "Seven zero pairs cancel; four negative chips remain."),
      steps: [String.raw`Make zero pairs: $7$ pairs cancel.`, String.raw`$4$ negative chips are left. Rule check: $11-7=4$, and $-11$ is farther from $0$.`], ans: "$-4$" },
    { title: "Subtracting a positive", q: String.raw`Evaluate $-2-9$.`,
      steps: [String.raw`Add the opposite: $-2+(-9)$.`, String.raw`Same signs: $2+9=11$, keep the negative.`], ans: "$-11$" },
    { title: "Subtracting a negative", q: String.raw`Evaluate $3-(-8)$ and explain using a number line.`,
      fig: numberLine({ min: -9, max: 12, arrows: [{ from: -8, to: 3, label: "distance from $-8$ to $3$ is $11$", color: "blue" }], dots: [{ at: -8, label: "$-8$", color: "gray" }, { at: 3, label: "$3$", color: "green" }], unit: 0.7 }),
      steps: [String.raw`$3-(-8)=3+8=11$.`, String.raw`Meaning: the distance from $-8$ up to $3$ is $8+3=11$ units.`], ans: "$11$" },
    { title: "Negative minus negative", q: String.raw`Evaluate $-10-(-4)$.`,
      steps: [String.raw`Add the opposite: $-10+4$.`, String.raw`Different signs: $10-4=6$, and $-10$ is farther from $0$, so negative.`], ans: "$-6$" },
    { title: "A long expression", q: String.raw`Evaluate $12-(-5)+(-20)-7$.`,
      steps: [String.raw`Rewrite: $12+5+(-20)+(-7)$.`, String.raw`Positives: $12+5=17$. Negatives: $-20+(-7)=-27$.`, String.raw`Combine: $17+(-27)=-10$.`], ans: "$-10$" },
    { title: "Temperature through the day", q: String.raw`In Winnipeg it is $-17\,^\circ$C at 7 a.m. By noon it rises $11$ degrees, and by 9 p.m.\ it falls $8$ degrees from the noon value. Find the 9 p.m.\ temperature.`,
      fig: thermometer({ lo: -20, hi: 0, step: 5, marks: [{ at: -17, label: "7 a.m.", color: "blue" }, { at: -6, label: "noon", color: "green" }, { at: -14, label: "9 p.m.", color: "red" }] }),
      steps: [String.raw`Noon: $-17+11=-6$.`, String.raw`9 p.m.: $-6-8=-6+(-8)=-14$.`], ans: String.raw`$-14\,^\circ$C` },
    { title: "Distance between elevations", q: String.raw`The lowest point in North America (Death Valley) is about $-86$ m and the highest point in Canada (Mount Logan) is about $5959$ m. How far apart are they vertically?`,
      steps: [String.raw`Distance $=$ higher $-$ lower $=5959-(-86)$.`, String.raw`$=5959+86=6045$.`], ans: "about $6045$ m" },
  ],
  problems: PROBLEMS,
};
