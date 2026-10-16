// Worksheet 1.1 — Number Sets & Their Subsets (teacher edition, one PDF with answer key)
import { numberSets, numberLine, raw } from "./tikz.mjs";

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
  book: "Nelson Principles of Mathematics 9, §1.4",
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
      steps: [String.raw`$15$ is a counting number, so it is natural --- and therefore whole, integer, rational and real.`, String.raw`$-9$ is negative, so not natural or whole; it is an integer, rational ($\frac{-9}{1}$) and real.`, String.raw`$0$ is whole but not natural; it is also an integer, rational and real.`],
      ans: String.raw`$15$: $\mathbb{N},\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$; \ $-9$: $\mathbb{Z},\mathbb{Q},\mathbb{R}$; \ $0$: $\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$` },
    { title: "Simplify before you classify", q: String.raw`Classify $\dfrac{\sqrt{81}}{3}$, \ $-\sqrt{49}$ \ and \ $\dfrac{28}{7}$.`,
      steps: [String.raw`$\frac{\sqrt{81}}{3}=\frac{9}{3}=3$ --- natural (so also whole, integer, rational, real).`, String.raw`$-\sqrt{49}=-7$ --- integer, rational, real.`, String.raw`$\frac{28}{7}=4$ --- natural, whole, integer, rational, real.`],
      ans: String.raw`all three are rational; $3$ and $4$ are natural, $-7$ is an integer` },
    { title: "Terminating decimals as fractions", q: String.raw`Write $0.625$ and $-1.35$ as fractions in lowest terms.`,
      steps: [String.raw`$0.625$ ends in the thousandths place: $\frac{625}{1000}$. Divide by $125$: $\frac{5}{8}$.`, String.raw`$-1.35=-\frac{135}{100}$. Divide by $5$: $-\frac{27}{20}$.`],
      ans: String.raw`$0.625=\frac58$, \ $-1.35=-\frac{27}{20}$` },
    { title: "One repeating digit", q: String.raw`Write $0.\overline{4}$ and $2.\overline{3}$ as fractions.`,
      steps: [String.raw`$x=0.\overline{4}$, $10x=4.\overline{4}$, so $9x=4$ and $x=\frac49$.`, String.raw`$y=2.\overline{3}$, $10y=23.\overline{3}$, so $9y=21$ and $y=\frac{21}{9}=\frac73$.`, String.raw`Check: $7\div3=2.333\ldots$ \checkmark`],
      ans: String.raw`$\frac49$ and $\frac73$` },
    { title: "Two repeating digits", q: String.raw`Show that $0.\overline{18}$ is rational.`,
      steps: [String.raw`Two digits repeat, so multiply by $100$: $x=0.\overline{18}$, $100x=18.\overline{18}$.`, String.raw`Subtract: $99x=18$, so $x=\frac{18}{99}=\frac{2}{11}$.`],
      ans: String.raw`$0.\overline{18}=\frac{2}{11}$, a quotient of integers, so it is rational` },
    { title: "A delayed repeat (extension)", q: String.raw`Write $0.1\overline{6}=0.1666\ldots$ as a fraction.`,
      steps: [String.raw`Move the decimal so the repeat starts right after it: $10x=1.\overline{6}$.`, String.raw`Move one repeat further: $100x=16.\overline{6}$.`, String.raw`Subtract: $100x-10x=15$, so $90x=15$ and $x=\frac{15}{90}=\frac16$.`],
      ans: String.raw`$0.1\overline{6}=\frac16$` },
    { title: "Locating an irrational root", q: String.raw`Between which two consecutive integers is $\sqrt{50}$? Estimate it to one decimal place.`,
      fig: numberLine({ min: 6, max: 9, step: 0.5, labelEvery: 2, unit: 1.6, dots: [{ at: 7, label: "$\\sqrt{49}$", color: "blue" }, { at: Math.sqrt(50), label: "$\\sqrt{50}$", color: "red", raise: 0.42 }, { at: 8, label: "$\\sqrt{64}$", color: "blue" }] }),
      steps: [String.raw`Perfect squares around $50$: $49=7^2$ and $64=8^2$, so $7<\sqrt{50}<8$.`, String.raw`$50$ is just above $49$, so $\sqrt{50}$ is just above $7$. Test: $7.1^2=50.41$, slightly too big; $7.0^2=49$.`],
      ans: String.raw`$7<\sqrt{50}<8$; \ $\sqrt{50}\approx7.1$` },
    { title: "True or false?", q: String.raw`Decide whether each statement is true or false. Justify. (a) Every integer is a whole number. (b) Every whole number is a rational number.`,
      steps: [String.raw`(a) False. Counterexample: $-3$ is an integer but not a whole number.`, String.raw`(b) True. Any whole number $w$ can be written $\frac{w}{1}$, a quotient of integers.`],
      ans: "(a) false; (b) true" },
    { title: "Placing numbers in the diagram", q: String.raw`Place $\ 6,\ -2,\ 0,\ \frac{7}{3},\ -1.4,\ \sqrt{5},\ \sqrt{100},\ 0.\overline{9}\ $ in the nested diagram.`,
      fig: numberSets([{ set: "N", label: "$6$" }, { set: "N", label: "$\\sqrt{100}$" }, { set: "N", label: "$0.\\overline{9}$" }, { set: "W", label: "$0$" }, { set: "Z", label: "$-2$" }, { set: "Q", label: "$\\frac73$" }, { set: "Q", label: "$-1.4$" }, { set: "I", label: "$\\sqrt5$" }]),
      steps: [String.raw`Simplify: $\sqrt{100}=10$ and $0.\overline{9}=1$ (both natural).`, String.raw`$0$ is whole; $-2$ is an integer; $\frac73$ and $-1.4=-\frac75$ are rational but not integers; $\sqrt5$ is irrational.`],
      ans: "see the diagram" },
  ],
  problems: [
    { level: 1, q: String.raw`List every set that $23$, $-23$ and $0$ belong to.`, space: 2.6, ans: String.raw`$23$: $\mathbb{N},\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$; $-23$: $\mathbb{Z},\mathbb{Q},\mathbb{R}$; $0$: $\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$`,
      sol: String.raw`$23$ is a counting number. $-23$ is the opposite of a counting number (an integer, not whole). $0$ is whole but not natural. All three are rational and real.` },
    { level: 1, q: String.raw`Simplify, then classify: (a) $\frac{14}{2}$ \quad (b) $-\frac{24}{6}$ \quad (c) $\sqrt{121}$`, space: 2.6, ans: String.raw`(a) $7$: natural; (b) $-4$: integer; (c) $11$: natural (each is also rational and real)`,
      sol: String.raw`(a) $14\div2=7$. (b) $-24\div6=-4$. (c) $11^2=121$, so $\sqrt{121}=11$.` },
    { level: 1, q: String.raw`Write $0.875$ as a fraction in lowest terms.`, space: 2.4, ans: String.raw`$\frac78$`,
      sol: String.raw`$0.875=\frac{875}{1000}$. The GCF of $875$ and $1000$ is $125$: $\frac{875\div125}{1000\div125}=\frac78$.` },
    { level: 1, q: String.raw`Which of these are irrational? \ $\sqrt{50}$, \ $\sqrt{49}$, \ $1.010010001\ldots$ (one more zero each time), \ $0.\overline{5}$`, space: 2.6, ans: String.raw`$\sqrt{50}$ and $1.010010001\ldots$`,
      sol: String.raw`$\sqrt{49}=7$ is rational; $0.\overline{5}=\frac59$ is rational. $50$ is not a perfect square, so $\sqrt{50}$ is irrational. $1.010010001\ldots$ never ends and its pattern never repeats as a block, so it is irrational.` },
    { level: 1, q: String.raw`Explain why $-\frac{3}{8}$ is a rational number but not an integer.`, space: 2.4, ans: "it is a quotient of integers, but it is not a whole number or its opposite",
      sol: String.raw`$-\frac38=\frac{-3}{8}$ is a quotient of the integers $-3$ and $8$, so it is rational. It lies between $-1$ and $0$ on the number line, where there are no integers.` },
    { level: 2, q: String.raw`Write $0.\overline{6}$ as a fraction in lowest terms. Show the algebra.`, space: 3, ans: String.raw`$\frac23$`,
      sol: String.raw`$x=0.\overline{6}$; $10x=6.\overline{6}$; $10x-x=6$; $9x=6$; $x=\frac69=\frac23$.` },
    { level: 2, q: String.raw`Write $0.\overline{54}$ as a fraction in lowest terms.`, space: 3, ans: String.raw`$\frac{6}{11}$`,
      sol: String.raw`Two digits repeat: $100x=54.\overline{54}$, so $99x=54$ and $x=\frac{54}{99}=\frac{6}{11}$.` },
    { level: 2, q: String.raw`Write $1.\overline{2}$ as an improper fraction.`, space: 3, ans: String.raw`$\frac{11}{9}$`,
      sol: String.raw`$x=1.\overline{2}$; $10x=12.\overline{2}$; $9x=11$; $x=\frac{11}{9}$. Check: $11\div9=1.222\ldots$` },
    { level: 2, q: String.raw`Between which two consecutive integers does $\sqrt{90}$ lie? Estimate it to one decimal place and mark it on the number line.`,
      fig: numberLine({ min: 8, max: 11, step: 0.5, labelEvery: 2, unit: 1.6 }), space: 2.4, ans: String.raw`$9<\sqrt{90}<10$; \ $\sqrt{90}\approx9.5$`,
      sol: String.raw`$81<90<100$, so $9<\sqrt{90}<10$. $90$ is about halfway between $81$ and $100$; $9.5^2=90.25$, so $\sqrt{90}\approx9.5$ (it is $9.487\ldots$).` },
    { level: 2, q: String.raw`Order from least to greatest: \ $\sqrt{15}$, \ $3.9$, \ $4$, \ $\frac{15}{4}$. Show them on a number line.`,
      fig: numberLine({ min: 3.5, max: 4.25, step: 0.05, labelEvery: 5, unit: 0.9 }), space: 2.4, ans: String.raw`$\frac{15}{4}<\sqrt{15}<3.9<4$`,
      sol: String.raw`$\frac{15}{4}=3.75$; $\sqrt{15}\approx3.873$ (since $3.87^2\approx14.98$); $3.9$; $4$. So $3.75<3.873<3.9<4$.` },
    { level: 3, q: String.raw`Write $0.2\overline{3}=0.2333\ldots$ as a fraction in lowest terms.`, space: 3.4, ans: String.raw`$\frac{7}{30}$`,
      sol: String.raw`$10x=2.\overline{3}$ and $100x=23.\overline{3}$. Subtract: $90x=21$, so $x=\frac{21}{90}=\frac{7}{30}$.` },
    { level: 3, q: String.raw`True or false: “The product of two irrational numbers is always irrational.” Justify your answer.`, space: 3, ans: String.raw`false, e.g.\ $\sqrt2\times\sqrt2=2$`,
      sol: String.raw`One counterexample is enough: $\sqrt{2}$ is irrational, but $\sqrt2\times\sqrt2=2$ is rational (natural, even). (Other examples: $\sqrt3\times\sqrt{12}=6$.)` },
    { level: 3, q: String.raw`Use division to explain why every fraction with denominator $8$ has a terminating decimal, but $\frac13$ and $\frac{2}{3}$ repeat.`, space: 3.6, ans: String.raw`$8=2^3$ divides a power of $10$; $3$ never does`,
      sol: String.raw`$\frac{a}{8}=\frac{125a}{1000}$ because $8\times125=1000$, so the decimal stops after at most three places. No power of $10$ is divisible by $3$ ($10,100,1000,\dots$ leave remainder $1$ when divided by $3$), so long division of $1\div3$ gives remainder $1$ forever and the digit $3$ repeats.` },
    { level: 3, q: String.raw`Find one rational number and one irrational number between $3$ and $3.1$. Explain how you know each is the type you claim.`, space: 3, ans: String.raw`e.g.\ rational $3.05$; irrational $\sqrt{9.3}$ or $3.0101001000\ldots$`,
      sol: String.raw`$3.05=\frac{61}{20}$ terminates, so it is rational. $\sqrt{9.3}$: $3^2=9<9.3<9.61=3.1^2$, so $3<\sqrt{9.3}<3.1$, and $9.3=\frac{93}{10}$ is not the square of a fraction, so $\sqrt{9.3}$ is irrational. (Any non-repeating, non-terminating decimal such as $3.0101001000\ldots$ also works.)` },
    { level: 3, q: String.raw`(B1.1) Describe one way negative numbers were represented in ancient China, and give two ways negative numbers are used in Canada today.`, space: 3.6, ans: "red/black counting rods for gains and debts; temperatures, bank balances, elevations, golf scores",
      sol: String.raw`In \emph{The Nine Chapters on the Mathematical Art}, calculators used red rods for positive amounts (gains) and black rods for negative amounts (debts), with rules for combining them. Today: winter temperatures below $0\,^\circ$C, an overdrawn bank account, elevations below sea level, a golf score under par, a loss on a business statement. (Accept any two correct, explained uses.)` },
  ],
};
