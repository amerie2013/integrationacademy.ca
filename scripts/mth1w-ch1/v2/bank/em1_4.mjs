// 1.4 Fractions: Equivalence, Comparing, Adding & Subtracting — 20 easy + 20 medium questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, bars } from "./svg.mjs";

export const E = [
  fill(String.raw`Write $\frac{12}{16}$ in lowest terms: ___`, ["3/4"], String.raw`Divide by $4$.`),
  fill(String.raw`Fill in the blank: $\frac{2}{5}=\frac{\_\_\_}{20}$`, ["8"], String.raw`$5\times4=20$, so $2\times4=8$.`),
  mc(String.raw`Which fraction is equivalent to $\frac34$?`, String.raw`$\frac{9}{12}$`, [String.raw`$\frac{6}{12}$`, String.raw`$\frac{4}{3}$`, String.raw`$\frac{7}{8}$`], String.raw`$\frac{3\times3}{4\times3}=\frac{9}{12}$.`),
  fill(String.raw`Evaluate $\frac{2}{9}+\frac{5}{9}$: ___`, ["7/9"], "Same denominator: add the numerators."),
  fill(String.raw`Evaluate $\frac{7}{10}-\frac{3}{10}$ in lowest terms: ___`, ["2/5"], String.raw`$\frac{4}{10}=\frac25$.`),
  mc(String.raw`Which is larger: $\frac23$ or $\frac35$?`, String.raw`$\frac23$`, [String.raw`$\frac35$`, "They are equal", "Cannot tell"], String.raw`$\frac{10}{15}>\frac{9}{15}$.`),
  fill(String.raw`Write $2\frac14$ as an improper fraction: ___`, ["9/4"], String.raw`$\frac{2\times4+1}{4}$.`),
  fill(String.raw`Write $\frac{11}{3}$ as a mixed number: ___`, ["3 2/3"], String.raw`$11\div3=3$ R $2$.`),
  mc("What fraction of the bar is shaded?", String.raw`$\frac38$`, [String.raw`$\frac58$`, String.raw`$\frac35$`, String.raw`$\frac83$`], "3 of 8 equal parts.", bars([{ n: 3, d: 8, label: "" }])),
  tf(String.raw`$\frac12+\frac13=\frac25$`, false, String.raw`$\frac36+\frac26=\frac56$; never add denominators.`),
  fill(String.raw`Evaluate $\frac12+\frac14$: ___`, ["3/4"], String.raw`$\frac24+\frac14=\frac34$.`),
  mc(String.raw`What is the lowest common denominator of $\frac16$ and $\frac14$?`, "$12$", ["$24$", "$10$", "$4$"], "The LCM of 6 and 4 is 12."),
  tf(String.raw`$-\frac35=\frac{-3}{5}$`, true, "The negative sign can go in front or on the numerator."),
  mc(String.raw`Which point shows $\frac34$?`, "C", ["A", "B", "D"], "Three of four equal parts from 0 to 1.", numberLine({ min: 0, max: 1, step: 0.25, labels: ["0", "", "", "", "1"], letters: [{ at: 0.25, label: "A" }, { at: 0.5, label: "B" }, { at: 0.75, label: "C" }, { at: 1, label: "D" }] })),
  fill(String.raw`Evaluate $1-\frac38$: ___`, ["5/8"], String.raw`$\frac88-\frac38=\frac58$.`),
  ms(String.raw`Which fractions equal $\frac12$? Select all.`, [String.raw`$\frac{4}{8}$`, String.raw`$\frac{5}{10}$`, String.raw`$\frac{3}{5}$`, String.raw`$\frac{7}{14}$`], [0, 1, 3], String.raw`$\frac35$ is more than one half.`),
  mc(String.raw`Which is smaller: $-\frac14$ or $-\frac34$?`, String.raw`$-\frac34$`, [String.raw`$-\frac14$`, "They are equal", "Cannot tell"], String.raw`$-\frac34$ is farther left on the number line.`),
  num(String.raw`Evaluate $\frac35+\frac25$.`, 1, String.raw`$\frac55=1$.`),
  fill(String.raw`Evaluate $\frac56-\frac12$ in lowest terms: ___`, ["1/3"], String.raw`$\frac56-\frac36=\frac26=\frac13$.`),
  tf(String.raw`$\frac{6}{8}$ and $\frac{9}{12}$ are equivalent.`, true, String.raw`Both simplify to $\frac34$.`),
];

export const M = [
  fill(String.raw`Evaluate $\frac23+\frac14$: ___`, ["11/12"], String.raw`$\frac{8}{12}+\frac{3}{12}$.`),
  fill(String.raw`Evaluate $\frac35-\frac34$: ___`, ["-3/20", "−3/20"], String.raw`$\frac{12}{20}-\frac{15}{20}=-\frac{3}{20}$.`),
  fill(String.raw`Evaluate $1\frac12+2\frac23$. Give a mixed number: ___`, ["4 1/6", "25/6"], String.raw`$3+\frac36+\frac46=3+\frac76=4\frac16$.`),
  fill(String.raw`Evaluate $4\frac15-1\frac12$: ___`, ["2 7/10", "27/10"], String.raw`$\frac{42}{10}-\frac{15}{10}=\frac{27}{10}$.`),
  mc(String.raw`Order from least to greatest: $\frac58,\ \frac23,\ \frac{7}{12}$.`, String.raw`$\frac{7}{12},\ \frac58,\ \frac23$`, [String.raw`$\frac58,\ \frac{7}{12},\ \frac23$`, String.raw`$\frac23,\ \frac58,\ \frac{7}{12}$`, String.raw`$\frac{7}{12},\ \frac23,\ \frac58$`], String.raw`LCD 24: $\frac{14}{24},\frac{15}{24},\frac{16}{24}$.`),
  fill(String.raw`Evaluate $-\frac12+\frac56$: ___`, ["1/3"], String.raw`$-\frac36+\frac56=\frac26=\frac13$.`),
  fill(String.raw`Write $\frac{56}{84}$ in lowest terms: ___`, ["2/3"], "GCF 28."),
  num(String.raw`Ali has $3\frac14$ cups of flour and uses $1\frac34$ cups. How many cups are left? Give a decimal.`, 1.5, String.raw`$\frac{13}{4}-\frac74=\frac64=1.5$.`, undefined, 0.001),
  mc("The bars show two fractions of the same whole. What is the difference (top minus bottom)?", String.raw`$\frac{1}{12}$`, [String.raw`$\frac{1}{7}$`, String.raw`$\frac{1}{1}$`, String.raw`$\frac{7}{12}$`], String.raw`$\frac34-\frac23=\frac{9}{12}-\frac{8}{12}=\frac1{12}$.`, bars([{ n: 3, d: 4, label: "top" }, { n: 2, d: 3, label: "bottom", color: "amber" }])),
  tf(String.raw`$-\frac25>-\frac12$`, true, String.raw`$-0.4>-0.5$.`),
  ms(String.raw`Which are greater than $\frac12$? Select all.`, [String.raw`$\frac{5}{9}$`, String.raw`$\frac{4}{9}$`, String.raw`$\frac{7}{13}$`, String.raw`$\frac{6}{13}$`, String.raw`$\frac{11}{20}$`], [0, 2, 4], "Compare the numerator with half the denominator."),
  fill(String.raw`Evaluate $\frac56-\frac13+\frac14$: ___`, ["3/4"], String.raw`$\frac{10}{12}-\frac{4}{12}+\frac{3}{12}=\frac{9}{12}=\frac34$.`),
  num(String.raw`A ribbon is $5\frac12$ m long. Two pieces of $1\frac34$ m are cut off. How many metres are left? Give a decimal.`, 2, String.raw`$5.5-3.5=2$.`),
  mc(String.raw`Which number is halfway between $\frac14$ and $\frac34$?`, String.raw`$\frac12$`, [String.raw`$\frac38$`, String.raw`$\frac58$`, String.raw`$\frac13$`], String.raw`$\frac{\frac14+\frac34}{2}=\frac12$.`),
  fill(String.raw`Write $-2\frac35$ as an improper fraction: ___`, ["-13/5", "−13/5"], String.raw`$-\frac{2\times5+3}{5}$.`),
  num(String.raw`What fraction of the bar is NOT shaded? Give a decimal.`, 0.6, String.raw`$6$ of $10$ parts: $0.6$.`, bars([{ n: 4, d: 10, label: "" }]), 0.001),
  mc(String.raw`What must be added to $\frac38$ to make $1$?`, String.raw`$\frac58$`, [String.raw`$\frac38$`, String.raw`$\frac68$`, String.raw`$\frac12$`], String.raw`$1-\frac38=\frac58$.`),
  tf(String.raw`A fraction whose numerator is greater than its denominator is less than $1$.`, false, "It is greater than 1 (an improper fraction)."),
  fill(String.raw`Evaluate $2\frac13-3\frac12$: ___`, ["-1 1/6", "-7/6", "−7/6"], String.raw`$\frac{14}{6}-\frac{21}{6}=-\frac76$.`),
  num(String.raw`Over three days a tank loses $\frac16$, $\frac14$ and $\frac13$ of its water. What fraction is lost in total? Give a decimal.`, 0.75, String.raw`$\frac{2}{12}+\frac{3}{12}+\frac{4}{12}=\frac{9}{12}=0.75$.`, undefined, 0.001),
];
