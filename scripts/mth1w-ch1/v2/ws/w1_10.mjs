// Worksheet 1.10 — Density, Infinity & Limit (teacher edition)
import { numberLine, pointsGraph, raw } from "./tikz.mjs";
import { PROBLEMS } from "./p1_10.mjs";

const ZOOM = raw(String.raw`\draw[thick,<->] (0,2) -- (12,2); \foreach \x/\l in {1/{0},6/{\frac12},11/{1}} {\draw (\x,1.9) -- (\x,2.1) node[above,font=\small] {$\l$};}
\draw[thick,<->] (0,0) -- (12,0); \foreach \x/\l in {1/{\frac12},3.5/{\frac{9}{16}},6/{\frac58},8.5/{\frac{11}{16}},11/{\frac34}} {\draw (\x,-0.1) -- (\x,0.1) node[below=4pt,font=\small] {$\l$};}
\fill[violet!80!black] (3.5,0) circle (2.5pt) (6,0) circle (2.5pt) (8.5,0) circle (2.5pt);
\draw[black!40,dashed] (6,1.9) -- (1,0.1); \draw[black!40,dashed] (8.5,1.9) -- (11,0.1); \draw[red!70!black,very thick] (6,2) -- (8.5,2);
\fill[red!70!black] (8.5,2) circle (2pt); \node[above,font=\small,red!70!black] at (8.5,2.1) {$\frac34$};`,
  "Zoom in on the gap from $\\frac12$ to $\\frac34$: midpoints keep appearing, however far you zoom.");

const SQUARES = raw(String.raw`\draw[thick] (0,0) rectangle (4,4);
\fill[blue!25] (0,0) rectangle (2,4); \node at (1,2) {$\frac12$};
\fill[green!25] (2,0) rectangle (4,2); \node at (3,1) {$\frac14$};
\fill[orange!30] (2,2) rectangle (3,4); \node at (2.5,3) {$\frac18$};
\fill[violet!25] (3,2) rectangle (4,3); \node[font=\small] at (3.5,2.5) {$\frac1{16}$};
\fill[red!25] (3,3) rectangle (3.5,4); \fill[yellow!40] (3.5,3) rectangle (4,3.5);
\draw (2,0) -- (2,4) (2,2) -- (4,2) (3,2) -- (3,4) (3,3) -- (4,3) (3.5,3) -- (3.5,4) (3.5,3.5) -- (4,3.5);`,
  "$\\frac12+\\frac14+\\frac18+\\frac1{16}+\\dots$ fills the whole unit square: the sum has limit $1$.");

export const WS = {
  code: "1.10",
  title: "Density, Infinity & Limit",
  bigideas: String.raw`Between any two rational numbers there is always another one (their \textbf{midpoint} $\frac{a+b}{2}$), so the rationals are \textbf{dense} and there is no “next” fraction. Number sets such as $\mathbb{N}$ go on forever --- they are \textbf{infinite}. A sequence can get as close as we like to a value without necessarily reaching it; that value is its \textbf{limit}.`,
  goals: [
    "Find rational numbers between any two given rationals (midpoints, larger denominators, extra decimal places).",
    "Explain why the rationals are dense and the integers are not.",
    "Explain why there is no largest number and no smallest positive rational number.",
    "Describe the limit of a sequence from a table, a graph or a diagram.",
    String.raw`Interpret repeating decimals such as $0.\overline{3}$ and $0.\overline{9}$ as limits.`,
  ],
  curriculum: "B1.3",
  book: "Nelson Principles of Mathematics 9, §1.4",
  vocab: [
    ["Dense", "between any two members of the set there is another member"],
    ["Midpoint", "the number halfway between $a$ and $b$: $\\frac{a+b}{2}$"],
    ["Infinite", "without end; it cannot be listed completely"],
    ["Sequence", "an ordered list of numbers: $1,\\frac12,\\frac14,\\dots$"],
    ["Limit", "the value the terms of a sequence approach as closely as we like"],
  ],
  hook: String.raw`Stand two metres from the classroom door and announce: “I will walk half the remaining distance each step.” Take a few steps (1 m, 50 cm, 25 cm\ldots). Ask: “Will I ever reach the door?” Some students say never, some say yes. This is Zeno's paradox from ancient Greece. The idea of a \emph{limit} resolves it: infinitely many steps can add up to a finite distance, $2$ m.`,
  concepts: [
    ["1. Density: always another number in between", String.raw`The midpoint of two rationals is rational, so we can always find another. Repeat forever:
${ZOOM}
\textbf{Three methods.} (1) Midpoint: $\frac{a+b}{2}$. (2) Larger common denominator: between $\frac25=\frac{20}{50}$ and $\frac35=\frac{30}{50}$ lie $\frac{21}{50},\dots,\frac{29}{50}$. (3) Extra decimal places: between $0.6$ and $0.61$ lie $0.601,0.602,\dots$\\
The \textbf{integers are not dense}: there is no integer between $3$ and $4$.`],
    ["2. Infinity", String.raw`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \textbf{No largest number}: for any number $N$, $N+1$ is larger.
\item \textbf{No smallest positive rational}: for any $\frac{a}{b}>0$, $\frac{a}{2b}$ is smaller and still positive.
\item \textbf{Infinitely many numbers in any interval}: between $0$ and $\frac{1}{1000}$ there are as many rationals as you like.
\end{itemize}
\textbf{Teacher note (extension):} pair each natural number $n$ with the even number $2n$: $1\leftrightarrow2$, $2\leftrightarrow4$, $3\leftrightarrow6,\dots$ Nothing is left over on either side, so there are “as many” even numbers as natural numbers --- infinity does not behave like ordinary numbers.`],
    ["3. Sequences and limits", String.raw`The terms of $\frac{1}{n}$: $1,\frac12,\frac13,\frac14,\dots$ get as close to $0$ as we like but are always positive. The limit is $0$.
${pointsGraph({ pts: [[1, 1], [2, 0.5], [3, 0.3333], [4, 0.25], [5, 0.2], [6, 0.1667], [7, 0.1429], [8, 0.125], [9, 0.1111], [10, 0.1]], xmin: 0, xmax: 10.5, ymin: 0, ymax: 1.1, xlabel: "$n$", ylabel: "$\\frac1n$", join: false, xtick: "1,2,...,10", ytick: "0,0.25,...,1", height: 4.8, caption: "The points creep toward the horizontal axis ($y=0$) but never touch it." })}
${SQUARES}`],
    ["4. Repeating decimals are limits", String.raw`$0.\overline{3}$ is the limit of $0.3,\ 0.33,\ 0.333,\dots$ The gaps to $\frac13$ are $\frac{1}{30},\frac{1}{300},\frac{1}{3000},\dots$, shrinking to $0$, so $0.\overline{3}=\frac13$ exactly. In the same way $0.\overline{9}$ is the limit of $0.9,0.99,0.999,\dots$, which is $1$.`],
  ],
  tips: [
    String.raw`Students think “$\frac12$ and $\frac34$ are next to each other” because they picture quarters. Rewrite with a larger denominator.`,
    String.raw`A limit need not be reached: the terms of $\frac1n$ are never $0$.`,
    String.raw`Infinity ($\infty$) is not a number to calculate with; it describes a process that never ends.`,
    String.raw`$0.999\ldots$ (repeating forever) equals $1$; $0.999$ (three nines) does not.`,
    String.raw`Use the doorway walk or the folded-square picture --- these ideas are best felt before they are defined.`,
  ],
  examples: [
    { title: "A number between two fractions", q: String.raw`Find a rational number between $\frac15$ and $\frac14$.`,
      fig: numberLine({ min: 0.2, max: 0.25, step: 0.0125, labelEvery: 4, unit: 2.5, labels: ["$\\frac15$", "", "", "", "$\\frac14$"], dots: [{ at: 0.225, label: "$\\frac{9}{40}$", color: "violet" }] }),
      steps: [String.raw`Midpoint: $\frac{\frac15+\frac14}{2}=\frac{\frac{9}{20}}{2}=\frac{9}{40}$.`, String.raw`Check: $\frac15=\frac{8}{40}<\frac{9}{40}<\frac{10}{40}=\frac14$.`], ans: String.raw`$\frac{9}{40}$ (one of infinitely many)` },
    { title: "Decimals that look adjacent", q: String.raw`Find three numbers between $0.6$ and $0.61$.`, steps: [String.raw`Write $0.600$ and $0.610$.`, String.raw`Any of $0.601,\dots,0.609$ works, e.g.\ $0.601,0.605,0.609$.`], ans: String.raw`$0.601,\ 0.605,\ 0.609$` },
    { title: "Between two negative fractions", q: String.raw`Find a rational number between $-\frac23$ and $-\frac35$.`, steps: [String.raw`LCD $15$: $-\frac{10}{15}$ and $-\frac{9}{15}$ --- no whole numerator between.`, String.raw`Double: $-\frac{20}{30}$ and $-\frac{18}{30}$; take $-\frac{19}{30}$.`], ans: String.raw`$-\frac{19}{30}$` },
    { title: "Integers are not dense", q: String.raw`How many integers lie strictly between $-3$ and $2$? How many rational numbers?`, steps: [String.raw`Integers: $-2,-1,0,1$ --- exactly four.`, String.raw`Rationals: infinitely many (every gap contains another midpoint).`], ans: "4 integers; infinitely many rationals" },
    { title: "No smallest positive fraction", q: String.raw`Rina says $\frac{1}{1000}$ is the smallest positive fraction. Show she is wrong, and explain why no smallest one exists.`, steps: [String.raw`$\frac{1}{2000}$ is positive and smaller.`, String.raw`For any positive fraction $\frac{a}{b}$, $\frac{a}{2b}$ is half as big and still positive, so we can always go smaller.`], ans: "no smallest positive fraction exists" },
    { title: "A limit from a graph", q: String.raw`What value do the terms of $\frac{n}{n+1}$ approach?`,
      fig: pointsGraph({ pts: [[1, 0.5], [2, 0.6667], [3, 0.75], [4, 0.8], [5, 0.8333], [6, 0.8571], [7, 0.875], [8, 0.8889]], xmin: 0, xmax: 8.5, ymin: 0, ymax: 1.1, xlabel: "$n$", ylabel: "$\\frac{n}{n+1}$", join: false, xtick: "1,2,...,8", ytick: "0,0.25,...,1", height: 4.4 }),
      steps: [String.raw`Terms: $\frac12,\frac23,\frac34,\frac45,\dots$`, String.raw`The gap to $1$ is $\frac{1}{n+1}$, which shrinks toward $0$.`], ans: "the limit is $1$" },
    { title: "Powers that shrink", q: String.raw`What does $\left(\frac13\right)^n$ approach as $n$ grows?`, steps: [String.raw`$\frac13,\frac19,\frac1{27},\frac1{81},\dots$`, String.raw`Each term is one third of the one before, so the terms approach $0$.`], ans: "$0$" },
    { title: "Adding halves of a square", q: String.raw`Find $\frac12+\frac14+\frac18+\frac1{16}$ and the limit of the sum if the pattern continues.`, fig: SQUARES,
      steps: [String.raw`$\frac{8}{16}+\frac{4}{16}+\frac{2}{16}+\frac{1}{16}=\frac{15}{16}$.`, String.raw`The unshaded part is $\frac1{16}$, then $\frac1{32}$, \ldots\ which shrinks to $0$.`], ans: String.raw`$\frac{15}{16}$; limit $1$` },
    { title: "A repeating decimal as a limit", q: String.raw`Explain why $0.\overline{3}=\frac13$ exactly.`, steps: [String.raw`$0.3,0.33,0.333,\dots$ get closer to $\frac13$.`, String.raw`The gaps are $\frac1{30},\frac1{300},\frac1{3000},\dots$, which approach $0$.`, String.raw`The infinite decimal means the limit, which is $\frac13$.`], ans: String.raw`$0.\overline{3}=\frac13$` },
  ],
  problems: PROBLEMS,
};
