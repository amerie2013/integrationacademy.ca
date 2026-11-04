// Worksheet 1.1 — Number Sets & Their Subsets (teacher edition, one PDF with answer key)
import { numberSets, numberLine, raw } from "./tikz.mjs";
import { PROBLEMS } from "./p1_1.mjs";

const ROOTS = numberLine({ min: 0, max: 10, dots: [
  { at: Math.sqrt(2), label: "$\\sqrt2$", color: "red" }, { at: Math.sqrt(10), label: "$\\sqrt{10}$", color: "red" },
  { at: Math.sqrt(30), label: "$\\sqrt{30}$", color: "red" }, { at: 7, label: "$\\sqrt{49}$", color: "blue" }, { at: Math.sqrt(85), label: "$\\sqrt{85}$", color: "red" }], unit: 1.5,
  caption: "Perfect-square roots (blue) land on integers; the others (red) fall between two integers." });

const TIMELINE = raw(String.raw`\draw[thick,->] (0,0) -- (15.5,0);
\foreach \x/\yr/\t/\c in {0.6/{c.\ 300 BCE}/{Babylon: a placeholder mark for an empty place}/orange!85!black, 4.2/{c.\ 200 BCE--200 CE}/{China, \emph{Nine Chapters}: red and black rods for gains and debts}/red!75!black, 8.3/{c.\ 4th century CE}/{Maya: a shell symbol for zero}/green!50!black, 11.6/{628 CE}/{India, Brahmagupta: rules for zero and negatives}/blue!70!black, 14.4/{1600s}/{Europe finally accepts negatives}/violet!80!black}
{\fill[\c] (\x,0) circle (3pt); \node[above,font=\scriptsize\bfseries,\c] at (\x,0.15) {\yr}; \node[below,font=\tiny,text width=2.9cm,align=center] at (\x,-0.15) {\t};}`,
  "Zero and negative numbers came from different cultures over two thousand years.");

export const WS = {
  code: "1.1",
  title: "Number Sets & Their Subsets",
  bigideas: String.raw`Numbers are organised into families that sit inside one another: $\mathbb{N}\subset\mathbb{W}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$. A number is \textbf{rational} when it can be written as $\frac{a}{b}$ with integers $a,b$ ($b\neq0$) --- exactly the numbers whose decimals terminate or repeat. Every other real number is \textbf{irrational}. Always \emph{simplify before you classify}.`,
  goals: [
    String.raw`Name and describe the natural, whole, integer, rational, irrational and real numbers, and use the symbols $\mathbb{N},\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$.`,
    "Classify any number into every set it belongs to (simplifying first when needed).",
    "Convert terminating and repeating decimals to fractions to prove they are rational.",
    "Locate and estimate square roots of non-perfect squares on a number line.",
    "Use counterexamples to test statements about number sets, and tell the story of zero and negative numbers (B1.1).",
  ],
  curriculum: "B1.1, B1.2",
  vocab: [
    ["Natural $\\mathbb{N}$", "the counting numbers $1,2,3,\\dots$"],
    ["Whole $\\mathbb{W}$", "the natural numbers together with $0$"],
    ["Integer $\\mathbb{Z}$", "the whole numbers and their opposites $\\dots,-2,-1,0,1,2,\\dots$"],
    ["Rational $\\mathbb{Q}$", "any number that can be written $\\frac{a}{b}$, $a,b$ integers, $b\\neq0$; its decimal terminates or repeats"],
    ["Irrational", "a real number that is not rational; its decimal never ends and never repeats"],
    ["Subset $\\subset$", "every member of the first set is also in the second set"],
    ["Counterexample", "one example that shows a general statement is false"],
  ],
  hook: String.raw`Write four questions on the board and ask which kind of number could answer each one: \emph{How many students are in this room?} \quad \emph{What is the temperature in Thunder Bay in January?} \quad \emph{How much of the pizza is left?} \quad \emph{How long is the diagonal of a square floor tile $1$ m wide?} Students will notice they need more and more kinds of numbers --- counting numbers, negatives, fractions, and finally $\sqrt2\approx1.414\ldots$, which is not a fraction at all. That is the whole lesson in four questions.`,
  concepts: [
    ["1. The family of numbers", String.raw`Each set is built from the previous one by adding a new kind of number.
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \textbf{Natural} $\mathbb{N}=\{1,2,3,\dots\}$ --- for counting.
\item \textbf{Whole} $\mathbb{W}=\{0,1,2,\dots\}$ --- add zero.
\item \textbf{Integers} $\mathbb{Z}=\{\dots,-2,-1,0,1,2,\dots\}$ --- add the opposites.
\item \textbf{Rational} $\mathbb{Q}$ --- every quotient $\frac{a}{b}$ of integers ($b\neq0$). Every integer is rational: $-6=\frac{-6}{1}$.
\item \textbf{Irrational} --- the real numbers that are \emph{not} rational, such as $\sqrt2$, $\sqrt{13}$, $\pi$.
\item \textbf{Real} $\mathbb{R}$ --- rational and irrational together: every point on the number line.
\end{itemize}
${numberSets([{ set: "N", label: "$1$" }, { set: "N", label: "$58$" }, { set: "W", label: "$0$" }, { set: "Z", label: "$-3$" }, { set: "Z", label: "$-41$" }, { set: "Q", label: "$\\frac{2}{9}$" }, { set: "Q", label: "$-0.5$" }, { set: "Q", label: "$0.\\overline{3}$" }, { set: "I", label: "$\\sqrt{2}$" }, { set: "I", label: "$\\pi$" }, { set: "I", label: "$\\sqrt{17}$" }], "A number belongs to its own box and every box around it. Rational and irrational never overlap.")}
\textbf{Teacher note.} Ask: “Which box is the smallest one that contains $-3$?” (integers). Then: “Which other boxes is it in?” (rational, real). Students must list \emph{every} set, not just one.`],
    ["2. The decimal tells you the family", String.raw`\begin{center}\begin{tabular}{lll}\toprule
\textbf{Decimal type} & \textbf{Example} & \textbf{Rational?}\\\midrule
terminates & $0.375=\frac{375}{1000}=\frac38$ & yes\\
repeats & $0.\overline{6}=0.666\ldots=\frac23$ & yes\\
never ends, never repeats & $\sqrt3=1.7320508\ldots$ & no --- irrational\\\bottomrule\end{tabular}\end{center}
\textbf{Terminating decimal $\to$ fraction:} the last digit's place value gives the denominator: $0.48=\frac{48}{100}=\frac{12}{25}$.\\
\textbf{Repeating decimal $\to$ fraction:} let $x$ be the number. If $n$ digits repeat, multiply by $10^n$ so the repeating tails line up, then subtract:
\[x=0.\overline{72},\quad 100x=72.\overline{72},\quad 100x-x=72,\quad 99x=72,\quad x=\tfrac{72}{99}=\tfrac{8}{11}.\]
\textbf{Shortcut to explain:} a block of $n$ repeating digits sits over $n$ nines: $0.\overline{5}=\frac59$, $0.\overline{123}=\frac{123}{999}$.`],
    ["3. Square roots: perfect or not?", String.raw`$\sqrt{n}$ is rational \emph{only} when $n$ is a perfect square ($1,4,9,16,25,36,49,64,81,100,\dots$). Otherwise it is irrational --- but we can still locate it between two consecutive integers by finding the perfect squares on either side: $25<30<36$, so $5<\sqrt{30}<6$, and since $30$ is closer to $25$, $\sqrt{30}$ is a bit less than $5.5$ (it is $5.477\ldots$).
${ROOTS}`],
    ["4. Subsets, “every” statements and counterexamples", String.raw`A statement such as “every whole number is an integer” is \textbf{true} because $\mathbb{W}\subset\mathbb{Z}$. A statement such as “every rational number is an integer” is \textbf{false}: one counterexample, $\frac12$, is enough. Students should learn the two moves:
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item to show a statement is \textbf{true}, explain why it holds for \emph{every} case (use the definitions or the nested diagram);
\item to show it is \textbf{false}, give \emph{one} specific example where it fails.
\end{itemize}`],
    ["5. The story of zero and negative numbers (B1.1)", String.raw`${TIMELINE}
Negative numbers and zero were not “obvious”. Chinese mathematicians balanced debts and gains with coloured rods; Indian mathematician Brahmagupta wrote the first rules for calculating with zero and negatives (for example, “a debt minus zero is a debt”). \textbf{Today:} negatives describe temperatures, elevations and bank balances; zero makes place value work ($205$ vs.\ $25$); computers store everything with $0$s and $1$s. \emph{Classroom task:} ask each student to find one current use of a negative number or of zero and explain it in two sentences.`],
  ],
  tips: [
    String.raw`Students forget to \textbf{simplify first}: $\sqrt{64}$, $\frac{-15}{5}$ and $4.0$ are all integers.`,
    String.raw`“Zero is natural” --- no: in this course $\mathbb{N}$ starts at $1$; $0$ is the first whole number.`,
    String.raw`A long calculator display is not proof of irrationality. $\frac{1}{7}=0.142857142857\ldots$ looks random but repeats every 6 digits.`,
    String.raw`$\frac{22}{7}$ and $3.14$ are rational \emph{approximations} of $\pi$; $\pi$ itself is irrational.`,
    String.raw`Negative fractions are rational: $-\frac34=\frac{-3}{4}$. Rational does not mean positive.`,
  ],
  examples: [
    { title: "Membership table", q: String.raw`State every set that $15$, $-9$ and $0$ belong to.`,
      fig: numberSets([{ set: "N", label: "$15$" }, { set: "W", label: "$0$" }, { set: "Z", label: "$-9$" }]),
      steps: [String.raw`\textbf{Definitions:} $\mathbb{N}=\{1,2,3,\dots\}$, $\mathbb{W}=\{0,1,2,\dots\}$, $\mathbb{Z}=\{\dots,-1,0,1,\dots\}$, $\mathbb{Q}=$ quotients $\frac ab$ of integers ($b\ne0$), and $\mathbb{N}\subset\mathbb{W}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$.`,
        String.raw`\textbf{$15$:} a counting number, so $15\in\mathbb{N}$. Every set that contains $\mathbb{N}$ also contains $15$: whole, integer, rational, real.`,
        String.raw`\textbf{$-9$:} negative, so it is not in $\mathbb{N}$ or $\mathbb{W}$. It is an integer, and $-9=\frac{-9}{1}$, so it is rational and real.`,
        String.raw`\textbf{$0$:} not a counting number, so not natural; it is the first whole number, so it is in $\mathbb{W}$ and every larger set.`,
        String.raw`\textbf{Check:} each number sits in its smallest set in the diagram and in every ring around it \checkmark`],
      ans: String.raw`$15$: $\mathbb{N},\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$; \ $-9$: $\mathbb{Z},\mathbb{Q},\mathbb{R}$; \ $0$: $\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$` },
    { title: "Simplify before you classify", q: String.raw`Classify $\dfrac{\sqrt{81}}{3}$, \ $-\sqrt{49}$ \ and \ $\dfrac{28}{7}$.`,
      steps: [String.raw`\textbf{Rule:} a number is classified by its \emph{value}, so simplify first. A square root of a perfect square is a whole number.`,
        String.raw`\textbf{First:} $81=9^2$, so $\sqrt{81}=9$ and $\frac{\sqrt{81}}{3}=\frac93=3$. Natural (and so whole, integer, rational, real).`,
        String.raw`\textbf{Second:} $49=7^2$, so $-\sqrt{49}=-7$. Negative, so not natural or whole: integer, rational, real.`,
        String.raw`\textbf{Third:} $\frac{28}{7}=4$, because $4\times7=28$. Natural, whole, integer, rational, real.`,
        String.raw`\textbf{Check:} none of the three is irrational, because every root was of a perfect square \checkmark`],
      ans: String.raw`all three are rational; $3$ and $4$ are natural, $-7$ is an integer` },
    { title: "Terminating decimals as fractions", q: String.raw`Write $0.625$ and $-1.35$ as fractions in lowest terms.`,
      steps: [String.raw`\textbf{Rule:} the last decimal place gives the denominator: tenths $\to10$, hundredths $\to100$, thousandths $\to1000$. Then divide top and bottom by the GCF.`,
        String.raw`\textbf{$0.625$:} the last digit is in the thousandths place, so $0.625=\frac{625}{1000}$.`,
        String.raw`\textbf{Reduce:} the GCF of $625$ and $1000$ is $125$: $\frac{625\div125}{1000\div125}=\frac58$.`,
        String.raw`\textbf{$-1.35$:} hundredths, so $-\frac{135}{100}$. the GCF of $135$ and $100$ is $5$: $-\frac{27}{20}$.`,
        String.raw`\textbf{Check:} $5\div8=0.625$ \checkmark \ and \ $27\div20=1.35$ \checkmark`],
      ans: String.raw`$0.625=\frac58$, \ $-1.35=-\frac{27}{20}$` },
    { title: "One repeating digit", q: String.raw`Write $0.\overline{4}$ and $2.\overline{3}$ as fractions.`,
      steps: [String.raw`\textbf{Method:} call the number $x$. If one digit repeats, $10x$ has the \emph{same} repeating tail, so $10x-x$ removes it.`,
        String.raw`\textbf{$0.\overline4$:} $x=0.444\ldots$ and $10x=4.444\ldots$. Subtract: $9x=4$, so $x=\frac49$.`,
        String.raw`\textbf{$2.\overline3$:} $y=2.333\ldots$ and $10y=23.333\ldots$. Subtract: $9y=21$, so $y=\frac{21}{9}=\frac73$ (divide by $3$).`,
        String.raw`\textbf{Check:} $4\div9=0.444\ldots$ \checkmark \ and \ $7\div3=2.333\ldots$ \checkmark`],
      ans: String.raw`$\frac49$ and $\frac73$` },
    { title: "Two repeating digits", q: String.raw`Show that $0.\overline{18}$ is rational.`,
      steps: [String.raw`\textbf{Goal:} rational means it can be written $\frac ab$ with integers $a,b$. We find that fraction.`,
        String.raw`\textbf{Shift one full block:} the block \textquotedblleft{}18\textquotedblright{} has $2$ digits, so multiply by $10^2=100$: $x=0.1818\ldots$, \ $100x=18.1818\ldots$`,
        String.raw`\textbf{Subtract:} the tails match, so $100x-x=18$, i.e.\ $99x=18$.`,
        String.raw`\textbf{Solve and reduce:} $x=\frac{18}{99}$; GCF $=9$, so $x=\frac{2}{11}$.`,
        String.raw`\textbf{Check:} $2\div11=0.1818\ldots$ \checkmark`],
      ans: String.raw`$0.\overline{18}=\frac{2}{11}$, a quotient of integers, so it is rational` },
    { title: "A delayed repeat (extension)", q: String.raw`Write $0.1\overline{6}=0.1666\ldots$ as a fraction.`,
      steps: [String.raw`\textbf{Idea:} make two numbers whose decimal parts are \emph{identical}, then subtract. Here the repeat starts one place late.`,
        String.raw`\textbf{Move the repeat to just after the point:} $10x=1.666\ldots$`,
        String.raw`\textbf{Move one more repeat:} $100x=16.666\ldots$`,
        String.raw`\textbf{Subtract:} $100x-10x=16-1=15$, so $90x=15$ and $x=\frac{15}{90}=\frac16$.`,
        String.raw`\textbf{Check:} $1\div6=0.1666\ldots$ \checkmark`],
      ans: String.raw`$0.1\overline{6}=\frac16$` },
    { title: "Locating an irrational root", q: String.raw`Between which two consecutive integers is $\sqrt{50}$? Estimate it to one decimal place.`,
      fig: numberLine({ min: 6, max: 9, step: 0.5, labelEvery: 2, unit: 1.6, dots: [{ at: 7, label: "$\\sqrt{49}$", color: "blue" }, { at: Math.sqrt(50), label: "$\\sqrt{50}$", color: "red", raise: 0.42 }, { at: 8, label: "$\\sqrt{64}$", color: "blue" }] }),
      steps: [String.raw`\textbf{Rule:} if $a<n<b$ then $\sqrt a<\sqrt n<\sqrt b$. Trap $50$ between perfect squares.`,
        String.raw`\textbf{Perfect squares:} $7^2=49$ and $8^2=64$, and $49<50<64$, so $7<\sqrt{50}<8$.`,
        String.raw`\textbf{Estimate:} $50$ is only $1$ above $49$ but $14$ below $64$, so $\sqrt{50}$ is just above $7$.`,
        String.raw`\textbf{Test one decimal:} $7.1^2=50.41$ (too big), $7.0^2=49$ (too small). $50$ is much closer to $50.41$, so $\sqrt{50}\approx7.1$.`],
      ans: String.raw`$7<\sqrt{50}<8$; \ $\sqrt{50}\approx7.1$` },
    { title: "Placing numbers in the diagram", q: String.raw`Place $\ 6,\ -2,\ 0,\ \frac{7}{3},\ -1.4,\ \sqrt{5},\ \sqrt{100},\ 0.\overline{9}\ $ in the nested diagram.`,
      fig: numberSets([{ set: "N", label: "$6$" }, { set: "N", label: "$\\sqrt{100}$" }, { set: "N", label: "$0.\\overline{9}$" }, { set: "W", label: "$0$" }, { set: "Z", label: "$-2$" }, { set: "Q", label: "$\\frac73$" }, { set: "Q", label: "$-1.4$" }, { set: "I", label: "$\\sqrt5$" }]),
      steps: [String.raw`\textbf{Rule:} put each number in the \emph{smallest} set it belongs to; it then automatically lies in every set around it.`,
        String.raw`\textbf{Simplify:} $\sqrt{100}=10$. And $0.\overline9=1$: if $x=0.999\ldots$, then $10x-x=9$, so $x=1$.`,
        String.raw`\textbf{Natural:} $6,\ 10,\ 1$. \textbf{Whole only:} $0$. \textbf{Integer only:} $-2$.`,
        String.raw`\textbf{Rational, not integer:} $\frac73$ and $-1.4=-\frac{7}{5}$. \textbf{Irrational:} $\sqrt5$, since $4<5<9$ and $5$ is not a perfect square.`],
      ans: "see the diagram" },
    { title: "Reasoning about sets", q: String.raw`(a) Is $\sqrt3\times\sqrt{12}$ rational? (b) Explain why $5+\sqrt7$ is irrational. (c) Find one rational and one irrational number between $\sqrt5$ and $\sqrt6$.`,
      steps: [String.raw`\textbf{(a) Rule} $\sqrt a\times\sqrt b=\sqrt{ab}$: $\sqrt{3\times12}=\sqrt{36}=6$. Rational, even though both factors are irrational.`,
        String.raw`\textbf{(b) Proof by contradiction:} suppose $5+\sqrt7=r$ with $r$ rational. Then $\sqrt7=r-5$, a rational minus a rational, which is rational. But $\sqrt7$ is irrational ($7$ is not a perfect square). The assumption is impossible, so $5+\sqrt7$ is irrational.`,
        String.raw`\textbf{(c) Locate the ends:} $\sqrt5\approx2.236$ and $\sqrt6\approx2.449$.`,
        String.raw`\textbf{Rational:} $2.3$ (it terminates). Check: $2.3^2=5.29$, between $5$ and $6$ \checkmark`,
        String.raw`\textbf{Irrational:} $2.3010010001\ldots$ (one more zero each time) never ends and never repeats, and it is between $2.236$ and $2.449$ \checkmark`],
      ans: String.raw`(a) yes, $6$ (b) see steps (c) e.g.\ $2.3$ and $2.3010010001\ldots$` },
  ],
  problems: PROBLEMS,
};
