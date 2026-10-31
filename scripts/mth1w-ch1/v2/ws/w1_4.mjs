// Worksheet 1.4 — Fractions: Equivalence, Comparing, Adding & Subtracting (teacher edition)
import { numberLine, fracBar, barStack, tape } from "./tikz.mjs";
import { PROBLEMS } from "./p1_4.mjs";

const fifths = ["$0$", "$\\frac15$", "$\\frac25$", "$\\frac35$", "$\\frac45$", "$1$"];

export const WS = {
  code: "1.4",
  title: "Fractions: Equivalence, Comparing, Adding & Subtracting",
  bigideas: String.raw`A fraction $\frac{a}{b}$ is $a$ pieces of a whole cut into $b$ equal pieces, and it is also a point on the number line. Multiplying top and bottom by the same number gives an \textbf{equivalent fraction}. You can only \textbf{compare, add or subtract pieces of the same size}, so first rewrite the fractions with a common denominator.`,
  goals: [
    "Interpret a fraction as part of a whole and as a point on the number line.",
    "Write equivalent fractions and simplify to lowest terms using the GCF.",
    String.raw`Convert between mixed numbers and improper fractions, including negatives ($-\frac{a}{b}=\frac{-a}{b}=\frac{a}{-b}$).`,
    "Compare and order fractions using a common denominator, benchmarks and the number line.",
    "Add and subtract fractions and mixed numbers (with regrouping) and solve measurement problems.",
  ],
  curriculum: "B3.2, B3.3, B3.4",
  vocab: [
    ["Numerator / denominator", "pieces taken / equal pieces in one whole"],
    ["Equivalent fractions", "fractions with the same value: $\\frac23=\\frac{10}{15}$"],
    ["Lowest terms", "numerator and denominator share no factor except 1"],
    ["LCD", "lowest common denominator --- the LCM of the denominators"],
    ["Mixed number", "a whole number and a proper fraction, $3\\frac14$"],
    ["Improper fraction", "numerator at least as big as denominator, $\\frac{13}{4}$"],
  ],
  hook: String.raw`Draw two chocolate bars of the same size. One is cut into $3$ pieces and Sam eats $1$; the other is cut into $4$ pieces and Ria eats $1$. Ask: “Together, did they eat $\frac{2}{7}$ of a bar?” Most students know it is more than a quarter of a bar plus a third --- so $\frac27$ (less than either!) cannot be right. The problem is that the pieces are different sizes. Re-cut both bars into $12$ pieces and the answer $\frac{4}{12}+\frac{3}{12}=\frac{7}{12}$ appears.`,
  concepts: [
    ["1. A fraction is a part of a whole and a point on a line", String.raw`${fracBar(3, 5, { label: "$\\frac35$", width: 8 })}
${numberLine({ min: 0, max: 1, step: 0.2, unit: 1.6, labels: fifths, dots: [{ at: 0.6, label: "$\\frac35$", color: "blue" }], caption: "Cut the segment from 0 to 1 into 5 equal parts and count 3 of them." })}
Fractions greater than $1$ continue past $1$ ($\frac75$ is two fifths past $1$), and negative fractions are the mirror images on the left of $0$.`],
    ["2. Equivalent fractions and lowest terms", String.raw`${barStack([{ n: 1, d: 2, label: "$\\frac12$" }, { n: 2, d: 4, label: "$\\frac24$", color: "green" }, { n: 4, d: 8, label: "$\\frac48$", color: "amber" }], { width: 8, caption: "Same amount, cut into more pieces: $\\frac12=\\frac24=\\frac48$." })}
\textbf{Build up:} multiply top and bottom by the same number, $\frac{2}{3}=\frac{2\times5}{3\times5}=\frac{10}{15}$.\quad
\textbf{Simplify:} divide top and bottom by the \textbf{GCF}, $\frac{36}{48}=\frac{36\div12}{48\div12}=\frac34$.`],
    ["3. Mixed numbers, improper fractions and negatives", String.raw`$2\frac{3}{5}=\frac{2\times5+3}{5}=\frac{13}{5}$ \qquad and \qquad $\frac{17}{4}=4\frac14$ (since $17\div4=4$ remainder $1$).\\[2pt]
A negative sign applies to the whole number: $-1\frac14=-\left(1+\frac14\right)=-\frac54$. Also $\frac{-5}{4}=\frac{5}{-4}=-\frac54$, while $\frac{-5}{-4}=\frac54$.
${numberLine({ min: -2, max: 2, step: 0.25, labelEvery: 4, unit: 0.85, dots: [{ at: -1.25, label: "$-1\\frac14$", color: "red" }, { at: 0.75, label: "$\\frac34$", color: "blue" }, { at: 1.25, label: "$1\\frac14$", color: "blue" }], caption: "$-1\\frac14$ and $1\\frac14$ are opposites." })}`],
    ["4. Comparing and ordering", String.raw`\textbf{Common denominator:} to compare $\frac23$ and $\frac35$, use $15$ths: $\frac{10}{15}>\frac{9}{15}$, so $\frac23>\frac35$.
${barStack([{ n: 10, d: 15, label: "$\\frac23=\\frac{10}{15}$" }, { n: 9, d: 15, label: "$\\frac35=\\frac{9}{15}$", color: "amber" }], { width: 9 })}
\textbf{Benchmarks:} compare with $0$, $\frac12$, $1$. $\frac{5}{11}<\frac12<\frac{7}{13}$, so no calculation is needed.\\
\textbf{Negative fractions:} the one with the \emph{larger size} is \emph{smaller}: $\frac23>\frac35$ means $-\frac23<-\frac35$.`],
    ["5. Adding and subtracting", String.raw`(1) Rewrite with the LCD. (2) Add or subtract the numerators; keep the denominator. (3) Simplify.
${barStack([{ n: 1, d: 4, label: "$\\frac14$" }, { n: 2, d: 3, label: "$\\frac23$", color: "amber" }, { n: 3, d: 12, label: "$\\frac{3}{12}$" }, { n: 8, d: 12, label: "$\\frac{8}{12}$", color: "amber" }, { n: 11, d: 12, label: "sum $\\frac{11}{12}$", color: "green" }], { width: 9, caption: "Re-cut quarters and thirds into twelfths; then the numerators add." })}
\textbf{Mixed numbers:} either change to improper fractions, or add wholes and parts separately and \textbf{regroup}: $5\frac14-2\frac34=4\frac54-2\frac34=2\frac24=2\frac12$.`],
  ],
  tips: [
    String.raw`Never add the denominators: $\frac12+\frac13\neq\frac25$. Use the chocolate-bar picture to show why.`,
    String.raw`Converting mixed numbers: $3\frac25=\frac{3\times5+2}{5}$; students often compute $\frac{3\times2+5}{5}$.`,
    String.raw`With negative mixed numbers, convert first: $-2\frac13=-\frac73$ (not $-2+\frac13$).`,
    String.raw`When ordering negatives, sketch a number line --- intuition from positives is backwards.`,
    String.raw`Simplify the final answer and state it in the form the question asks (mixed number or improper).`,
  ],
  examples: [
    { title: "Lowest terms", q: String.raw`Write $\frac{72}{90}$ in lowest terms.`, steps: [String.raw`$72=2^3\cdot3^2$ and $90=2\cdot3^2\cdot5$, so the GCF is $2\cdot9=18$.`, String.raw`$\frac{72\div18}{90\div18}=\frac45$.`], ans: String.raw`$\frac45$` },
    { title: "Building equivalent fractions", q: String.raw`Fill in the blanks: $\frac56=\frac{\square}{42}$ \quad and \quad $\frac38=\frac{15}{\square}$.`, steps: [String.raw`$6\times7=42$, so multiply the top by $7$: $\frac{35}{42}$.`, String.raw`$3\times5=15$, so multiply the bottom by $5$: $\frac{15}{40}$.`], ans: "$35$ and $40$" },
    { title: "Mixed and improper", q: String.raw`Write $\frac{23}{6}$ as a mixed number and $-2\frac37$ as an improper fraction.`, steps: [String.raw`$23\div6=3$ remainder $5$, so $3\frac56$.`, String.raw`$2\frac37=\frac{2\times7+3}{7}=\frac{17}{7}$, so $-2\frac37=-\frac{17}{7}$.`], ans: String.raw`$3\frac56$ and $-\frac{17}{7}$` },
    { title: "Comparing with bars", q: String.raw`Which is greater, $\frac79$ or $\frac45$?`,
      fig: barStack([{ n: 35, d: 45, label: "$\\frac79=\\frac{35}{45}$" }, { n: 36, d: 45, label: "$\\frac45=\\frac{36}{45}$", color: "amber" }], { width: 9 }),
      steps: [String.raw`LCD of $9$ and $5$ is $45$.`, String.raw`$\frac79=\frac{35}{45}$ and $\frac45=\frac{36}{45}$; $36>35$.`], ans: String.raw`$\frac45$ (by $\frac{1}{45}$)` },
    { title: "Ordering negative fractions", q: String.raw`Order $-\frac12,\ -\frac38,\ -\frac{5}{12}$ from least to greatest.`,
      fig: numberLine({ min: -0.625, max: -0.25, step: 1 / 24, labelEvery: 3, unit: 0.9, labels: ["$-\\frac{15}{24}$", "", "", "$-\\frac{12}{24}$", "", "", "$-\\frac{9}{24}$", "", "", "$-\\frac{6}{24}$"], dots: [{ at: -0.5, label: "$-\\frac12$", color: "red" }, { at: -5 / 12, label: "$-\\frac{5}{12}$", color: "amber", raise: 0.4 }, { at: -0.375, label: "$-\\frac38$", color: "blue" }] }),
      steps: [String.raw`LCD $24$: $-\frac{12}{24},\ -\frac{9}{24},\ -\frac{10}{24}$.`, String.raw`On the number line, $-12$ is farthest left, then $-10$, then $-9$.`], ans: String.raw`$-\frac12<-\frac{5}{12}<-\frac38$` },
    { title: "Adding with the LCD", q: String.raw`Evaluate $\frac14+\frac23$.`, steps: [String.raw`LCD $12$: $\frac{3}{12}+\frac{8}{12}$.`, String.raw`$=\frac{11}{12}$ (already in lowest terms).`], ans: String.raw`$\frac{11}{12}$` },
    { title: "A subtraction with a negative result", q: String.raw`Evaluate $\frac{7}{10}-\frac56$.`, steps: [String.raw`LCD $30$: $\frac{21}{30}-\frac{25}{30}$.`, String.raw`$=-\frac{4}{30}=-\frac{2}{15}$.`], ans: String.raw`$-\frac{2}{15}$` },
    { title: "Subtracting with regrouping", q: String.raw`A ribbon is $6\frac18$ m long. A piece $2\frac56$ m long is cut off. How much is left?`,
      fig: tape([{ n: 3, label: "cut off $2\\frac56$ m", color: "red" }, { n: 4, label: "left: ?", color: "green" }], { unit: 1.1, total: "$6\\frac18$ m" }),
      steps: [String.raw`LCD $24$: $6\frac{3}{24}-2\frac{20}{24}$.`, String.raw`$\frac{3}{24}<\frac{20}{24}$, so regroup one whole: $5\frac{27}{24}-2\frac{20}{24}$.`, String.raw`$=3\frac{7}{24}$.`], ans: String.raw`$3\frac{7}{24}$ m` },
    { title: "Finding a capacity", q: String.raw`A tank is $\frac25$ full. After $25$ L is added, it is $\frac{11}{15}$ full. Find the capacity of the tank.`, steps: [String.raw`Find the increase as a fraction: $\dfrac{11}{15}-\dfrac25=\dfrac{11}{15}-\dfrac{6}{15}=\dfrac{5}{15}=\dfrac13$ of the tank.`, String.raw`So one third of the tank is $25$ L.`, String.raw`The whole tank is $3\times25=75$ L.`], ans: "$75$ L" },
  ],
  problems: PROBLEMS,
};
