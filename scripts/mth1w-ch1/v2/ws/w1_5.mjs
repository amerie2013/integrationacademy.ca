// Worksheet 1.5 — Fractions: Multiplying, Dividing & Reciprocals (teacher edition)
import { areaModel, tape, fracBar, raw } from "./tikz.mjs";
import { PROBLEMS } from "./p1_5.mjs";

/** "How many fit": a bar of `total` wholes cut into pieces of size 1/d, grouped in groups of g pieces. */
const fitBar = (wholes, d, g, caption) => {
  const n = wholes * d, w = Math.min(0.75, 13 / n);
  let s = "";
  for (let i = 0; i < n; i++) s += String.raw`\draw[blue!70!black,fill=blue!${Math.floor(i / g) % 2 ? 22 : 8}] (${(i * w).toFixed(2)},0) rectangle (${((i + 1) * w).toFixed(2)},0.6);`;
  for (let k = 1; k <= wholes; k++) s += String.raw`\draw[very thick] (${(k * d * w).toFixed(2)},-0.1) -- (${(k * d * w).toFixed(2)},0.7);`;
  const groups = Math.floor(n / g);
  for (let k = 0; k < groups; k++) s += String.raw`\draw[decorate,decoration={brace,amplitude=4pt},orange!85!black] (${(k * g * w).toFixed(2)},0.75) -- (${((k + 1) * g * w).toFixed(2)},0.75) node[midway,above=3pt,font=\scriptsize] {${k + 1}};`;
  return raw(s, caption);
};

export const WS = {
  code: "1.5",
  title: "Fractions: Multiplying, Dividing & Reciprocals",
  bigideas: String.raw`To multiply fractions, multiply the numerators and multiply the denominators --- the area model shows why, and no common denominator is needed. Two numbers are \textbf{reciprocals} if their product is $1$. Dividing asks “how many groups of the divisor fit?”, and it is the same as \textbf{multiplying by the reciprocal}: $\frac ab\div\frac cd=\frac ab\times\frac dc$.`,
  goals: [
    "Find a fraction of a quantity and multiply fractions and mixed numbers, simplifying first.",
    "Explain multiplication with an area model and division with a “how many fit” model.",
    String.raw`Find reciprocals of fractions, integers, mixed numbers and decimals; explain why $0$ has none.`,
    "Divide fractions and mixed numbers, including negatives, and simplify complex fractions.",
    "Choose multiplication or division correctly in word problems (recipes, lengths, rates).",
  ],
  curriculum: "B3.3, B3.4",
  book: "Nelson Principles of Mathematics 9, §1.2, §1.5",
  vocab: [
    ["“of”", "in fraction problems, “of” means multiply: $\\frac34$ of $20$ is $\\frac34\\times20=15$"],
    ["Reciprocal", "the number you multiply by to get $1$; flip the fraction: $\\frac25\\to\\frac52$"],
    ["Cross-simplify", "divide a numerator and a (different) denominator by a common factor before multiplying"],
    ["Complex fraction", "a fraction with fractions in its numerator or denominator"],
  ],
  hook: String.raw`Hold up a measuring cup. “A recipe needs $\frac34$ cup of milk, but I want to make only half the recipe. How much milk?” (half of $\frac34$ is $\frac38$ --- multiplication). Then: “I have $3$ cups of milk. How many $\frac34$-cup servings can I pour?” Fill the cup four times --- $3\div\frac34=4$. Students see that dividing by a number less than $1$ gives a \emph{bigger} answer.`,
  concepts: [
    ["1. Multiplying: the area model", String.raw`$\frac23\times\frac45$ means $\frac23$ \emph{of} $\frac45$. Shade $\frac23$ of a square in columns and $\frac45$ in rows; the overlap is $2\times4=8$ of $3\times5=15$ small rectangles.
${areaModel(2, 3, 4, 5, "$\\frac23\\times\\frac45=\\frac{2\\times4}{3\\times5}=\\frac{8}{15}$")}
\textbf{Rule:} $\frac ab\times\frac cd=\frac{a\times c}{b\times d}$. Multiplying by a fraction less than $1$ makes the result \emph{smaller}.`],
    ["2. Simplify first; mixed numbers", String.raw`Divide any numerator and any denominator by a common factor \emph{before} multiplying --- smaller numbers, same answer:
\[\frac{9}{14}\times\frac{7}{12}=\frac{\cancel{9}^{\,3}}{\cancel{14}_{\,2}}\times\frac{\cancel{7}^{\,1}}{\cancel{12}_{\,4}}=\frac{3}{8}\]
\textbf{Mixed numbers must become improper fractions first}: $1\frac12\times2\frac23=\frac32\times\frac83=4$. (Multiplying wholes and parts separately gives the wrong answer $2\frac13$.)`],
    ["3. Reciprocals", String.raw`\begin{center}\begin{tabular}{lllll}\toprule
Number & $\frac{3}{7}$ & $-5$ & $2\frac14$ & $0.2$\\ As a fraction & $\frac37$ & $\frac{-5}{1}$ & $\frac94$ & $\frac15$\\ Reciprocal & $\frac73$ & $-\frac15$ & $\frac49$ & $5$\\\bottomrule\end{tabular}\end{center}
A reciprocal keeps the same sign (the product must be $+1$). \textbf{Zero has no reciprocal}: $0\times$ anything $=0\neq1$.`],
    ["4. Dividing: how many fit?", String.raw`$2\div\frac25$ asks “how many $\frac25$'s fit in $2$?” Cut each whole into fifths ($10$ fifths) and group them in twos:
${fitBar(2, 5, 2, "Five groups of $\\frac25$ fit into $2$: $2\\div\\frac25=5$.")}
The shortcut gives the same answer: $2\div\frac25=2\times\frac52=5$. \textbf{Keep} the first number, \textbf{change} $\div$ to $\times$, \textbf{flip} the divisor. Signs follow the integer rules.`],
    ["5. Order of operations and complex fractions", String.raw`BEDMAS applies to fractions too. A complex fraction is a division:
\[\frac{\ \frac56\ }{\ \frac{10}{9}\ }=\frac56\div\frac{10}{9}=\frac56\times\frac{9}{10}=\frac34.\]
Teach students to \textbf{estimate first}: $\frac56\approx1$ and $\frac{10}{9}\approx1$, so the answer should be near $1$.`],
    ["6. All rational numbers: decimals and fractions together", String.raw`Integers, fractions, mixed numbers and decimals are all rational, so the \textbf{same sign rules and BEDMAS} apply when they are mixed.
\begin{center}\begin{tabular}{llll}\toprule Expression & Sign & Size & Answer\\\midrule
$-1.8\times2.5$ & different $\Rightarrow-$ & $4.5$ & $-4.5$\\ $-0.9\div\left(-\frac35\right)$ & same $\Rightarrow+$ & $0.9\times\frac53=1.5$ & $1.5$\\ $-2.25-\left(-\frac34\right)$ & add the opposite & $-2.25+0.75$ & $-1.5$\\\bottomrule\end{tabular}\end{center}
\textbf{Choose the easier form:} use decimals when the fractions convert neatly ($\frac34=0.75$); use fractions when a decimal would repeat ($0.2\times\frac13=\frac15\times\frac13=\frac{1}{15}$, exact).\\
\textbf{Teacher note.} Insist on an estimate first: $-1.8\times2.5\approx-2\times2.5=-5$, so $-4.5$ is sensible and $+4.5$ or $-45$ is not. This is Nelson §1.5 (rational number operations) and curriculum B3.3.`],
  ],
  tips: [
    String.raw`Flip the \emph{divisor} (second number), never the first one.`,
    String.raw`Change mixed numbers to improper fractions \emph{before} finding a reciprocal: the reciprocal of $2\frac13$ is $\frac37$.`,
    String.raw`Cross-simplifying is only allowed in multiplication (or after a division has been rewritten as multiplication) --- never in addition.`,
    String.raw`Word problems: “of / part of” $\to$ multiply; “how many fit / how many pieces” $\to$ divide.`,
    String.raw`Check reasonableness: dividing by a number less than $1$ must give a bigger answer.`,
  ],
  examples: [
    { title: "A fraction of a fraction", q: String.raw`Use an area model to find $\frac23$ of $\frac45$.`, fig: areaModel(2, 3, 4, 5),
      steps: [String.raw`Columns: thirds, shade $2$. Rows: fifths, shade $4$.`, String.raw`Overlap: $8$ of the $15$ rectangles.`], ans: String.raw`$\frac{8}{15}$` },
    { title: "A fraction of a quantity", q: String.raw`A bag holds $35$ kg of sand. What is $\frac35$ of the bag?`,
      fig: tape([{ n: 3, label: "$\\frac35$", color: "amber" }, { n: 2, label: "", color: "blue" }], { unit: 1.4, total: "35 kg: each fifth is 7 kg" }),
      steps: [String.raw`One fifth: $35\div5=7$ kg.`, String.raw`Three fifths: $3\times7=21$ kg. (Or $\frac35\times35=21$.)`], ans: "$21$ kg" },
    { title: "Simplify before multiplying", q: String.raw`Evaluate $\frac{8}{15}\times\frac{25}{12}$.`,
      steps: [String.raw`$8$ and $12$ share $4$: $\frac{2}{15}\times\frac{25}{3}$.`, String.raw`$25$ and $15$ share $5$: $\frac23\times\frac53$.`, String.raw`$=\frac{10}{9}=1\frac19$.`], ans: String.raw`$1\frac19$` },
    { title: "Multiplying mixed numbers", q: String.raw`Evaluate $1\frac23\times2\frac14$.`,
      steps: [String.raw`Improper: $\frac53\times\frac94$.`, String.raw`Simplify $9$ with $3$: $\frac51\times\frac34=\frac{15}{4}$.`, String.raw`$=3\frac34$.`], ans: String.raw`$3\frac34$` },
    { title: "Reciprocals", q: String.raw`Find the reciprocal of $\frac59$, $-8$, $1\frac16$ and $0.4$.`,
      steps: [String.raw`$\frac59\to\frac95$; \ $-8=\frac{-8}{1}\to-\frac18$.`, String.raw`$1\frac16=\frac76\to\frac67$; \ $0.4=\frac25\to\frac52$.`], ans: String.raw`$\frac95,\ -\frac18,\ \frac67,\ \frac52$` },
    { title: "How many fit?", q: String.raw`Use a diagram to evaluate $3\div\frac34$.`, fig: fitBar(3, 4, 3),
      steps: [String.raw`Three wholes make $12$ quarters.`, String.raw`Groups of $3$ quarters: $12\div3=4$ groups.`, String.raw`Check: $3\times\frac43=4$.`], ans: "$4$" },
    { title: "Quarter cups", q: String.raw`How many $\frac14$-cup scoops are in $\frac78$ of a cup?`,
      steps: [String.raw`“How many fit” $\Rightarrow$ divide: $\frac78\div\frac14$.`, String.raw`$=\frac78\times\frac41=\frac{28}{8}=\frac72$.`], ans: String.raw`$3\frac12$ scoops` },
    { title: "Mixing decimals and fractions", q: String.raw`Evaluate $-3.5\times0.4+\left(-\frac14\right)\div0.5$.`,
      steps: [String.raw`Estimate: about $-1.5+(-0.5)=-2$.`, String.raw`$-3.5\times0.4=-1.4$ (different signs).`, String.raw`$-\frac14\div0.5=-0.25\div0.5=-0.5$.`, String.raw`$-1.4+(-0.5)=-1.9$ --- close to the estimate.`], ans: "$-1.9$" },
    { title: "Order of operations", q: String.raw`Evaluate $\frac12+\frac23\times\left(-\frac34\right)$.`,
      steps: [String.raw`Multiply first: $\frac23\times\left(-\frac34\right)=-\frac{6}{12}=-\frac12$.`, String.raw`$\frac12+\left(-\frac12\right)=0$.`], ans: "$0$" },
  ],
  problems: PROBLEMS,
};
