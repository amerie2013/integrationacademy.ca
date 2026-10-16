// Worksheet 2.1 — From Words to Algebraic Expressions (teacher edition)
import { patternT, rectT, raw } from "./tikz2.mjs";
import { PROBLEMS } from "./p2_1.mjs";

const TIMELINE = raw(String.raw`\draw[thick] (0,0) -- (15,0);
\foreach \x/\y/\n/\p in {0.8/c.\,250/Diophantus/Alexandria,4.1/628/Brahmagupta/India,7.4/c.\,820/al-Khw\={a}rizm\={\i}/Baghdad,10.7/1591/Vi\`{e}te/France,14/1637/Descartes/France}
{\fill[violet!80!black] (\x,0) circle (3pt); \node[above,font=\scriptsize\bfseries,violet!80!black] at (\x,0.1) {\y}; \node[below,font=\scriptsize] at (\x,-0.1) {\n}; \node[below,font=\tiny,black!60] at (\x,-0.45) {\p};}`,
  "From rhetorical (words) through syncopated (abbreviations) to symbolic algebra.");

export const WS = {
  code: "2.1",
  title: "From Words to Algebraic Expressions",
  bigideas: String.raw`Algebra uses letters (\textbf{variables}) to describe numbers that change or are unknown. An \textbf{algebraic expression} combines numbers, variables and operations, with no equals sign. Expressions let us translate situations into symbols, \textbf{evaluate} by substitution, and describe every figure of a growing pattern with one rule. The notation itself took about 1400 years to develop.`,
  goals: [
    "Describe the development of algebraic notation (rhetorical, syncopated, symbolic) and name key contributors.",
    "Identify terms, coefficients, variable parts and constant terms.",
    String.raw`Translate between words and expressions, including “less than”, products of sums and consecutive integers.`,
    "Evaluate expressions and formulas by substituting integers, fractions and decimals.",
    String.raw`Write an expression for the $n$th figure of a linear pattern and for a real situation (fixed cost + rate).`,
  ],
  curriculum: "C1.1, C1.2, C1.3",
  book: "Nelson Principles of Mathematics 9, Ch. 2 Getting Started, §2.4; §4.1",
  vocab: [
    ["Variable", "a letter representing a number that can vary or is unknown"],
    ["Term", String.raw`a part of an expression separated by $+$ or $-$, sign included`],
    ["Coefficient", String.raw`the numerical factor of a term ($-1$ in $-x$)`],
    ["Constant term", "a term with no variable"],
    ["Evaluate", "substitute values for the variables and calculate"],
  ],
  hook: String.raw`Write on the board: “A thing and its seventh, added together, make $19$.” (Rhind papyrus, Egypt, about 1650 BCE.) Ask students to solve it, then to \emph{write it down} in the shortest possible way. Compare their versions with $x+\frac{x}{7}=19$. Ask: “Why did mathematicians need about 3000 years to agree on this way of writing?” This leads into the history and into why symbols are so powerful.`,
  concepts: [
    ["1. A short history of algebraic notation (C1.1)", String.raw`${TIMELINE}
\textbf{Rhetorical} (Babylon, Egypt): problems and solutions written entirely in words. \textbf{Syncopated} (Diophantus, \emph{Arithmetica}): abbreviations for the unknown and its powers. Brahmagupta (India, 628) gave rules for zero and negative numbers and solved equations with several unknowns. \textbf{al-jabr} (“restoring”), in the title of al-Khw\={a}rizm\={\i}'s book, gave us the word \emph{algebra}; his name gave us \emph{algorithm}. \textbf{Symbolic}: Vi\`{e}te used letters for unknowns and for known quantities; Descartes chose $x, y, z$ for unknowns.\\
\textbf{Teacher note.} Ask students to research one contributor (culture, problem solved, notation used) --- this addresses C1.1 and connects to culturally responsive teaching.`],
    ["2. The parts of an expression", String.raw`In $4x^2-x+7$: terms $4x^2$, $-x$, $7$; coefficients $4$ and $-1$; constant term $7$. A term carries the sign in front of it. Multiplication signs are omitted ($4x^2=4\times x\times x$), and a fraction bar groups ($\frac{n+1}{2}=(n+1)\div2$).`],
    ["3. Translating words and symbols", String.raw`\begin{tabular}{@{}lll@{}}\toprule Words & Expression & Note\\\midrule
$6$ more than $n$ & $n+6$ & order does not matter\\ $6$ less than $n$ & $n-6$ & order \textbf{reverses}\\ $6$ decreased by $n$ & $6-n$ & \\ triple the sum of $n$ and $4$ & $3(n+4)$ & brackets group the sum\\ triple $n$, plus $4$ & $3n+4$ & \\ consecutive integers & $n, n+1, n+2$ & even/odd: $n, n+2, n+4$\\\bottomrule\end{tabular}`],
    ["4. Evaluating by substitution", String.raw`Replace each variable by its value \textbf{in brackets}, then use BEDMAS. With $a=-2$: $3a^2=3(-2)^2=12$, while typing $3\times-2^2$ gives $-12$. A formula is a named expression: $P=2l+2w$, $A=\frac12bh$, $I=Prt$.`],
    ["5. Growing patterns", String.raw`${patternT(3, 2, "Figure n has 3n + 2 tiles: 3 new tiles per figure, 2 fixed.")}
\textbf{Rule:} (constant difference)$\times n$ + (value at $n=0$). Verify with two known figures. The rule answers questions about far figures (Figure $100$: $302$ tiles) and reverse questions (which figure has $47$ tiles? $3n+2=47$, $n=15$).`],
  ],
  tips: [
    String.raw`“Less than” reverses order: “$5$ less than $x$” is $x-5$. Test with a number.`,
    String.raw`Students often write $2n+5$ for “twice the sum of $n$ and $5$”. Ask: what is added first?`,
    String.raw`Always bracket substituted negatives and fractions: $x^2$ at $x=-3$ is $(-3)^2=9$.`,
    String.raw`For patterns, the coefficient is the \emph{difference}, not the first term: $5, 8, 11$ is $3n+2$, not $5n+3$.`,
    "History is part of the curriculum (C1.1): even five minutes on al-Khwārizmī or Brahmagupta counts.",
  ],
  examples: [
    { title: "Translating phrases", q: String.raw`Write an expression for (a) the sum of a number and $12$; (b) $4$ less than the square of a number; (c) the quotient of a number and $7$, decreased by $2$; (d) twice the difference of a number and $9$.`,
      steps: [String.raw`(a) $n+12$ \quad (b) $n^2-4$`, String.raw`(c) $\frac{n}{7}-2$ \quad (d) $2(n-9)$ --- the difference is found first, so it needs brackets.`], ans: String.raw`$n+12$, $n^2-4$, $\frac n7-2$, $2(n-9)$` },
    { title: "Parts of an expression", q: String.raw`For $6a^3-a^2+5a-8$, list the terms, the coefficients and the constant term.`,
      steps: [String.raw`Terms: $6a^3,\ -a^2,\ 5a,\ -8$ (four terms).`, String.raw`Coefficients: $6,\ -1,\ 5$. Constant: $-8$.`], ans: String.raw`coefficients $6,-1,5$; constant $-8$` },
    { title: "Expressions into words", q: String.raw`Describe $3(x+5)$ and $3x+5$ in words, and show they are different by evaluating both at $x=2$.`,
      steps: [String.raw`$3(x+5)$: three times the sum of a number and five. $3x+5$: five more than three times a number.`, String.raw`At $x=2$: $3(7)=21$ and $6+5=11$.`], ans: "different expressions ($21\\ne11$)" },
    { title: "Evaluating with a negative", q: String.raw`Evaluate $4m^2-3m+1$ when $m=-2$.`,
      steps: [String.raw`$4(-2)^2-3(-2)+1$.`, String.raw`$=4(4)+6+1=23$.`], ans: "$23$" },
    { title: "A fraction expression", q: String.raw`Evaluate $\dfrac{a+b}{a-b}$ when $a=-3$ and $b=5$.`,
      steps: [String.raw`Numerator: $-3+5=2$. Denominator: $-3-5=-8$.`, String.raw`$\frac{2}{-8}=-\frac14$.`], ans: String.raw`$-\frac14$` },
    { title: "Using a formula", q: String.raw`Simple interest is $I=Prt$. Find the interest on $1200$ dollars at $3.5\%$ per year for $4$ years.`,
      steps: [String.raw`$P=1200$, $r=0.035$, $t=4$.`, String.raw`$I=1200(0.035)(4)=168$.`], ans: "$168$ dollars" },
    { title: "A number pattern", q: String.raw`Find a rule for $3, 7, 11, 15,\dots$ and the $50$th term.`,
      steps: [String.raw`Difference $4$; value at $n=0$: $3-4=-1$. Rule $4n-1$.`, String.raw`Check $n=4$: $15$ ✓. $n=50$: $199$.`], ans: String.raw`$4n-1$; $199$` },
    { title: "Squares in a row", q: String.raw`Squares made of toothpicks are joined in a row. $1$ square uses $4$ toothpicks, $2$ use $7$, $3$ use $10$. Write a rule and find the toothpicks for $25$ squares.`,
      fig: patternT(3, 1, "Each new square adds 3 toothpicks; 1 is there from the start (shown as tiles)."),
      steps: [String.raw`Difference $3$, value at $n=0$: $1$. Rule $T=3n+1$.`, String.raw`$T=3(25)+1=76$.`], ans: "$3n+1$; $76$" },
    { title: "Fixed cost plus rate", q: String.raw`A gym charges a $45$-dollar sign-up fee and $32$ dollars per month. Write an expression for the cost of $m$ months and find the cost of one year.`,
      steps: [String.raw`Cost $=45+32m$.`, String.raw`$m=12$: $45+384=429$.`], ans: "$45+32m$; $429$ dollars" },
  ],
  problems: PROBLEMS,
};
