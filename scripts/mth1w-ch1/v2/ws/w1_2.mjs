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
      steps: [String.raw`\textbf{Model:} adding a positive number moves \emph{right} on the number line; adding a negative moves \emph{left}.`,
        String.raw`\textbf{Start} at $-3$. \textbf{Move} $8$ units right: $3$ units reach $0$, and $5$ more reach $5$.`,
        String.raw`\textbf{Rule check (different signs):} $8-3=5$, and $8$ has the larger size, so the answer is positive: $5$.`,
        String.raw`\textbf{Check:} $5-8=-3$ \checkmark`], ans: "$5$" },
    { title: "Same signs with chips", q: String.raw`Evaluate $(-5)+(-3)$.`, fig: chips(0, 8, "Five negative chips and three more negative chips: eight negatives, no zero pairs."),
      steps: [String.raw`\textbf{Rule (same signs):} add the absolute values and keep the common sign.`,
        String.raw`\textbf{Chips:} $5$ negative chips and $3$ negative chips. There are no positive chips, so no zero pairs form.`,
        String.raw`\textbf{Count:} $5+3=8$ negative chips, so the sum is $-8$.`,
        String.raw`\textbf{Check on a number line:} from $-5$ move $3$ left: $-6,-7,-8$ \checkmark`], ans: "$-8$" },
    { title: "Different signs with chips", q: String.raw`Evaluate $7+(-11)$.`, fig: chips(7, 11, "Seven zero pairs cancel; four negative chips remain."),
      steps: [String.raw`\textbf{Zero principle:} one $+$ chip and one $-$ chip make a zero pair, worth $0$, so they can be removed.`,
        String.raw`\textbf{Make pairs:} $7$ positives pair with $7$ of the negatives; those $7$ pairs are worth $0$.`,
        String.raw`\textbf{What is left:} $11-7=4$ negative chips, so the sum is $-4$.`,
        String.raw`\textbf{Rule check:} different signs, subtract sizes $11-7=4$; $|-11|>|7|$, so negative \checkmark`], ans: "$-4$" },
    { title: "Subtracting a positive", q: String.raw`Evaluate $-2-9$.`,
      fig: numberLine({ min: -12, max: 1, arrows: [{ from: -2, to: -11, label: "$-9$", color: "red" }], dots: [{ at: -2, label: "$-2$", color: "gray" }, { at: -11, label: "$-11$", color: "green" }], unit: 0.75 }),
      steps: [String.raw`\textbf{Rule:} $a-b=a+(-b)$: subtracting is adding the opposite.`,
        String.raw`\textbf{Rewrite:} $-2-9=-2+(-9)$.`,
        String.raw`\textbf{Same signs:} $2+9=11$; keep the negative: $-11$.`,
        String.raw`\textbf{Check:} $-11+9=-2$ \checkmark`], ans: "$-11$" },
    { title: "Subtracting a negative", q: String.raw`Evaluate $3-(-8)$ and explain using a number line.`,
      fig: numberLine({ min: -9, max: 12, arrows: [{ from: -8, to: 3, label: "distance from $-8$ to $3$ is $11$", color: "blue" }], dots: [{ at: -8, label: "$-8$", color: "gray" }, { at: 3, label: "$3$", color: "green" }], unit: 0.7 }),
      steps: [String.raw`\textbf{Rule:} $a-b=a+(-b)$. The opposite of $-8$ is $+8$, so $3-(-8)=3+8=11$.`,
        String.raw`\textbf{Meaning:} $3-(-8)$ is the distance from $-8$ up to $3$: $8$ units to reach $0$, then $3$ more, $8+3=11$.`,
        String.raw`\textbf{Check:} $11+(-8)=3$ \checkmark`], ans: "$11$" },
    { title: "Negative minus negative", q: String.raw`Evaluate $-10-(-4)$.`,
      steps: [String.raw`\textbf{Rule:} add the opposite: $-10-(-4)=-10+4$.`,
        String.raw`\textbf{Different signs:} subtract sizes $10-4=6$.`,
        String.raw`\textbf{Sign:} $|-10|>|4|$, so the result is negative: $-6$.`,
        String.raw`\textbf{Chips check:} $10$ negative chips, take away $4$ negative chips, leaves $6$ negative chips \checkmark`], ans: "$-6$" },
    { title: "Temperature through the day", q: String.raw`In Winnipeg it is $-17\,^\circ$C at 7 a.m. By noon it rises $11$ degrees, and by 9 p.m.\ it falls $8$ degrees from the noon value. Find the 9 p.m.\ temperature.`,
      fig: thermometer({ lo: -20, hi: 0, step: 5, marks: [{ at: -17, label: "7 a.m.", color: "blue" }, { at: -6, label: "noon", color: "green" }, { at: -14, label: "9 p.m.", color: "red" }] }),
      steps: [String.raw`\textbf{Model:} a rise is $+$, a fall is $-$.`,
        String.raw`\textbf{Noon:} $-17+11$: different signs, $17-11=6$, sign of $-17$: $-6\,^\circ$C.`,
        String.raw`\textbf{9 p.m.:} $-6-8=-6+(-8)$: same signs, $6+8=14$: $-14\,^\circ$C.`,
        String.raw`\textbf{Check with the net change:} $+11-8=+3$, and $-17+3=-14$ \checkmark`], ans: String.raw`$-14\,^\circ$C` },
    { title: "Distance between elevations", q: String.raw`The lowest point in North America (Death Valley) is about $-86$ m and the highest point in Canada (Mount Logan) is about $5959$ m. How far apart are they vertically?`,
      fig: numberLine({ min: -1000, max: 6000, step: 1000, unit: 1.1, dots: [{ at: -86, label: "$-86$", color: "red" }, { at: 5959, label: "$5959$", color: "blue" }] }),
      steps: [String.raw`\textbf{Rule:} the distance between two values is higher $-$ lower (always positive).`,
        String.raw`\textbf{Substitute:} $5959-(-86)$.`,
        String.raw`\textbf{Add the opposite:} $5959+86=6045$.`,
        String.raw`\textbf{Meaning:} $86$ m up from Death Valley to sea level, then $5959$ m more to the summit: $86+5959=6045$ \checkmark`], ans: "about $6045$ m" },
    { title: "Absolute values and long sums", q: String.raw`(a) Evaluate $-|9-(-4)|-\left(-|-6+2|\right)+|-3-8|$. (b) Find the sum of the integers from $-18$ to $15$.`,
      steps: [String.raw`\textbf{(a) Rule:} absolute value bars act like brackets: work inside first, then take the distance from $0$.`,
        String.raw`\textbf{Inside the bars:} $9-(-4)=13$, \ $-6+2=-4$, \ $-3-8=-11$.`,
        String.raw`\textbf{Absolute values:} $|13|=13$, $|-4|=4$, $|-11|=11$. The expression is $-13-(-4)+11$.`,
        String.raw`\textbf{Finish:} $-13+4+11=2$.`,
        String.raw`\textbf{(b) Pair opposites:} every integer from $-15$ to $15$ cancels with its opposite ($-15+15=0$, \dots), and $0$ adds nothing.`,
        String.raw`\textbf{What is left:} $-18+(-17)+(-16)=-51$.`],
      ans: String.raw`(a) $2$ (b) $-51$` },
  ],
  problems: PROBLEMS,
};
