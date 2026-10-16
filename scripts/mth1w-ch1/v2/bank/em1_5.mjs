// 1.5 Fractions: Multiplying, Dividing & Reciprocals — 20 easy + 20 medium questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { areaModel, tape } from "./svg.mjs";

export const E = [
  fill(String.raw`Evaluate $\frac23\times\frac45$: ___`, ["8/15"], "Multiply numerators and denominators."),
  fill(String.raw`Evaluate $\frac35\times\frac{5}{6}$ in lowest terms: ___`, ["1/2"], String.raw`$\frac{15}{30}=\frac12$.`),
  num(String.raw`Find $\frac14$ of $48$.`, 12, String.raw`$48\div4$.`),
  num(String.raw`Find $\frac23$ of $27$.`, 18, String.raw`$27\div3\times2$.`),
  fill(String.raw`Write the reciprocal of $\frac58$: ___`, ["8/5"], "Flip the fraction."),
  mc(String.raw`What is the reciprocal of $-3$?`, String.raw`$-\frac13$`, [String.raw`$\frac13$`, "$3$", "$-3$"], "Reciprocals keep the sign."),
  fill(String.raw`Evaluate $\frac12\div\frac14$: ___`, ["2"], String.raw`$\frac12\times4=2$: two quarters fit in a half.`),
  fill(String.raw`Evaluate $\frac34\div\frac38$: ___`, ["2"], String.raw`$\frac34\times\frac83=2$.`),
  tf(String.raw`$0$ has a reciprocal.`, false, "No number times 0 gives 1."),
  mc("What multiplication does the area model show?", String.raw`$\frac12\times\frac23=\frac13$`, [String.raw`$\frac12\times\frac23=\frac{3}{5}$`, String.raw`$\frac12+\frac23$`, String.raw`$\frac23\div\frac12$`], String.raw`Overlap: $2$ of $6$ $=\frac13$.`, areaModel(1, 2, 2, 3)),
  num(String.raw`Evaluate $6\div\frac12$.`, 12, String.raw`Twelve halves fit in 6.`),
  fill(String.raw`Evaluate $-\frac12\times\frac34$: ___`, ["-3/8", "−3/8"], "Different signs: negative."),
  fill(String.raw`Evaluate $\frac25\times10$: ___`, ["4"], String.raw`$\frac{20}{5}=4$.`),
  tf(String.raw`Dividing by $\frac12$ is the same as multiplying by $2$.`, true, String.raw`The reciprocal of $\frac12$ is $2$.`),
  mc(String.raw`Which is the reciprocal of $1\frac12$?`, String.raw`$\frac23$`, [String.raw`$\frac32$`, String.raw`$1\frac21$`, String.raw`$-\frac23$`], String.raw`$1\frac12=\frac32$; flip it.`),
  num(String.raw`How many $\frac13$-cup scoops are in $4$ cups?`, 12, String.raw`$4\div\frac13=12$.`),
  fill(String.raw`Evaluate $\frac{4}{9}\times\frac{3}{8}$ in lowest terms: ___`, ["1/6"], String.raw`Simplify first: $\frac{1}{3}\times\frac12$.`),
  ms(String.raw`Which products are less than $\frac12$? Select all.`, [String.raw`$\frac12\times\frac12$`, String.raw`$\frac12\times2$`, String.raw`$\frac12\times\frac34$`, String.raw`$\frac12\times1$`], [0, 2], "Multiplying by a number less than 1 makes it smaller."),
  num(String.raw`A rope is cut into pieces of $\frac34$ m. How many pieces come from $6$ m?`, 8, String.raw`$6\div\frac34=8$.`, tape([{ n: 8, label: "8 pieces of 3/4 m", color: "blue" }], { unit: 40, total: "6 m" })),
  fill(String.raw`Evaluate $-\frac23\div\frac13$: ___`, ["-2", "−2"], String.raw`$-\frac23\times3=-2$.`),
];

export const M = [
  fill(String.raw`Evaluate $1\frac12\times2\frac13$. Give a mixed number: ___`, ["3 1/2", "7/2"], String.raw`$\frac32\times\frac73=\frac72$.`),
  fill(String.raw`Evaluate $3\frac34\div1\frac14$: ___`, ["3"], String.raw`$\frac{15}{4}\times\frac45=3$.`),
  fill(String.raw`Evaluate $-\frac{5}{6}\times\left(-\frac{9}{10}\right)$: ___`, ["3/4"], "Same signs: positive; simplify 5/10 and 9/6."),
  fill(String.raw`Evaluate $\frac{7}{12}\div\left(-\frac{14}{9}\right)$: ___`, ["-3/8", "−3/8"], String.raw`$\frac{7}{12}\times\left(-\frac{9}{14}\right)=-\frac38$.`),
  num(String.raw`A recipe uses $\frac23$ cup of milk per batch. How much milk is needed for $4\frac12$ batches?`, 3, String.raw`$\frac23\times\frac92=3$ cups.`),
  num(String.raw`How many $\frac38$-L glasses can be filled from $3$ L?`, 8, String.raw`$3\div\frac38=8$.`),
  mc(String.raw`Evaluate $\frac35\div\frac{9}{10}$.`, String.raw`$\frac23$`, [String.raw`$\frac{27}{50}$`, String.raw`$\frac32$`, String.raw`$\frac{3}{10}$`], String.raw`$\frac35\times\frac{10}{9}=\frac{30}{45}=\frac23$.`),
  tf(String.raw`$\frac23\div\frac34$ is greater than $\frac23$.`, true, String.raw`Dividing by a number less than $1$ makes the result bigger: $\frac23\div\frac34=\frac23\times\frac43=\frac89$, and $\frac89>\frac23$.`),
  num(String.raw`Find $\frac34$ of $\frac23$ of $60$.`, 30, String.raw`$\frac23\times60=40$; $\frac34\times40=30$.`),
  fill(String.raw`Write the reciprocal of $-2\frac25$: ___`, ["-5/12", "−5/12"], String.raw`$-\frac{12}{5}\to-\frac{5}{12}$.`),
  mc("The area model shows a product. What is it?", String.raw`$\frac{6}{20}=\frac{3}{10}$`, [String.raw`$\frac{2}{9}$`, String.raw`$\frac{5}{9}$`, String.raw`$\frac{3}{20}$`], String.raw`$\frac34\times\frac25$: overlap $6$ of $20$.`, areaModel(3, 4, 2, 5)),
  num(String.raw`A rectangle is $2\frac12$ m by $1\frac35$ m. Find its area in m$^2$.`, 4, String.raw`$\frac52\times\frac85=4$.`),
  ms(String.raw`Which expressions equal $\frac12$? Select all.`, [String.raw`$\frac34\times\frac23$`, String.raw`$\frac14\div\frac12$`, String.raw`$\frac38\div\frac34$`, String.raw`$2\times\frac14$`, String.raw`$\frac12\div2$`], [0, 1, 2, 3], String.raw`$\frac12\div2=\frac14$.`),
  num(String.raw`A tank holds $40$ L. It is $\frac58$ full. How many litres are in it?`, 25, String.raw`$\frac58\times40=25$.`),
  fill(String.raw`Evaluate $\frac12+\frac34\times\frac23$: ___`, ["1"], String.raw`Multiply first: $\frac12$; then $\frac12+\frac12=1$.`),
  num(String.raw`A car travels $3\frac34$ km in $\frac14$ of an hour. What is its speed in km/h?`, 15, String.raw`$\frac{15}{4}\div\frac14=15$.`),
  mc(String.raw`Which is greatest?`, String.raw`$5\div\frac14$`, [String.raw`$5\times\frac14$`, String.raw`$5\div4$`, String.raw`$\frac14\div5$`], String.raw`$20$, $1.25$, $1.25$, $0.05$.`),
  fill(String.raw`Evaluate $\left(-\frac32\right)\times\left(-\frac32\right)$. Give a mixed number: ___`, ["2 1/4", "9/4"], String.raw`$\frac94$.`),
  num(String.raw`A $2\frac14$ m board is cut into $3$ equal pieces. How long is each piece, in metres? Give a decimal.`, 0.75, String.raw`$\frac94\div3=\frac34=0.75$.`, undefined, 0.001),
  tf(String.raw`Mixed numbers can be multiplied by multiplying the whole parts and the fraction parts separately.`, false, String.raw`$1\frac12\times1\frac12=2\frac14$, not $1\frac14$. Convert to improper fractions.`),
];
