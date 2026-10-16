// Worksheet 1.5 — Fractions: Multiplying, Dividing & Reciprocals (teacher edition)
import { areaModel, tape, fracBar, raw } from "./tikz.mjs";

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
  problems: [
    { level: 1, q: String.raw`Evaluate $\frac34\times\frac27$.`, ans: String.raw`$\frac{3}{14}$`, sol: String.raw`Simplify $2$ with $4$: $\frac32\cdot\frac17$ gives $\frac{3}{14}$.` },
    { level: 1, q: String.raw`Find $\frac56$ of $42$.`, ans: "$35$", sol: String.raw`$42\div6=7$; $5\times7=35$.` },
    { level: 1, q: String.raw`Write the reciprocal of $-\frac{3}{11}$ and of $2\frac12$.`, ans: String.raw`$-\frac{11}{3}$ and $\frac25$`, sol: String.raw`Flip, keep the sign. $2\frac12=\frac52\to\frac25$.` },
    { level: 1, q: String.raw`Evaluate $\frac45\div\frac{2}{15}$.`, ans: "$6$", sol: String.raw`$\frac45\times\frac{15}{2}=\frac{60}{10}=6$.` },
    { level: 1, q: String.raw`Evaluate $\frac{9}{10}\times\frac56$.`, ans: String.raw`$\frac34$`, sol: String.raw`Simplify $9$/$6$ by $3$ and $5$/$10$ by $5$: $\frac32\times\frac12=\frac34$.` },
    { level: 2, q: String.raw`Evaluate $-\frac{7}{12}\times\frac{18}{35}$.`, ans: String.raw`$-\frac{3}{10}$`, sol: String.raw`Simplify $7$/$35$ by $7$ and $18$/$12$ by $6$: $-\frac{1}{2}\times\frac{3}{5}=-\frac{3}{10}$.` },
    { level: 2, q: String.raw`Evaluate $3\frac13\times1\frac45$.`, ans: "$6$", sol: String.raw`$\frac{10}{3}\times\frac95=\frac{2}{1}\times\frac31=6$.` },
    { level: 2, q: String.raw`Evaluate $-0.75\times1\frac13-(-2.5)$. Estimate first.`, ans: "$1.5$", sol: String.raw`Estimate: $-1+2.5=1.5$. Exactly: $-\frac34\times\frac43=-1$; $-1-(-2.5)=-1+2.5=1.5$.` },
    { level: 2, q: String.raw`Evaluate $4\frac12\div1\frac18$.`, ans: "$4$", sol: String.raw`$\frac92\div\frac98=\frac92\times\frac89=4$.` },
    { level: 2, q: String.raw`A recipe uses $\frac34$ cup of sugar per batch. How much sugar is needed for $2\frac13$ batches?`, ans: String.raw`$1\frac34$ cups`, sol: String.raw`“Of” $\Rightarrow$ multiply: $\frac34\times\frac73=\frac{7}{4}=1\frac34$.` },
    { level: 3, q: String.raw`Draw an area model to show that $\frac34\times\frac23=\frac12$.`, space: 4.4, ans: String.raw`$6$ of $12$ rectangles $=\frac12$`, sol: String.raw`A $4$-by-$3$ grid: shade $3$ of $4$ columns and $2$ of $3$ rows. The overlap is $6$ of $12$ rectangles, $\frac{6}{12}=\frac12$.` },
    { level: 3, q: String.raw`A $12$ m rope is cut into pieces $\frac35$ m long. (a) How many pieces are there? (b) If $\frac14$ of the pieces are used, how many metres of rope are used?`, ans: "(a) $20$ (b) $3$ m", sol: String.raw`(a) $12\div\frac35=12\times\frac53=20$. (b) $\frac14\times20=5$ pieces; $5\times\frac35=3$ m (or $\frac14$ of $12$ m).` },
    { level: 3, q: String.raw`Evaluate $\left(\frac23-\frac56\right)\div\left(\frac14+\frac{1}{12}\right)$.`, ans: String.raw`$-\frac12$`, sol: String.raw`First bracket: $\frac46-\frac56=-\frac16$. Second: $\frac{3}{12}+\frac{1}{12}=\frac13$. $-\frac16\div\frac13=-\frac16\times3=-\frac12$.` },
    { level: 3, q: String.raw`Without calculating exactly, which is greater: $5\div\frac23$ or $5\times\frac23$? Explain, then check.`, ans: String.raw`$5\div\frac23$ ($7\frac12$ vs $3\frac13$)`, sol: String.raw`Multiplying by $\frac23<1$ shrinks $5$; dividing by $\frac23<1$ enlarges it. Check: $5\div\frac23=\frac{15}{2}=7\frac12$ and $5\times\frac23=\frac{10}{3}=3\frac13$.` },
    { level: 3, q: String.raw`A cyclist rides $5\frac14$ km in $\frac38$ of an hour. What is her speed in km per hour?`, ans: "$14$ km/h", sol: String.raw`Speed $=$ distance $\div$ time $=\frac{21}{4}\div\frac38=\frac{21}{4}\times\frac83=14$ km/h.` },
  ],
};
