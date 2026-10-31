// 1.4 Fractions: Equivalence, Comparing, Adding & Subtracting — 20 hard questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, bars } from "./svg.mjs";

export const TOPIC = "1.4 Fractions: Equivalence, Comparing, Adding & Subtracting";
export const Q = [
  mc(String.raw`The diagram shows two fractions of the same whole. What is their sum?`, String.raw`$1\frac{5}{12}$`, [String.raw`$\frac57$`, String.raw`$1\frac{1}{12}$`, String.raw`$\frac{5}{12}$`],
    String.raw`$\frac23+\frac34=\frac{8}{12}+\frac{9}{12}=\frac{17}{12}=1\frac{5}{12}$.`, bars([{ n: 2, d: 3, label: "A" }, { n: 3, d: 4, label: "B", color: "amber" }])),
  fill(String.raw`Evaluate $-\frac34+\frac56-\frac13$ in lowest terms: ___`, ["-1/4", "−1/4"], String.raw`LCD $12$: $\frac{-9+10-4}{12}=-\frac{3}{12}=-\frac14$.`),
  num(String.raw`A tank is $\frac25$ full. After $18$ L is added it is $\frac{7}{10}$ full. What is the capacity of the tank in litres?`, 60, String.raw`$\frac{7}{10}-\frac25=\frac{3}{10}$ of the tank is $18$ L, so the tank holds $18\div\frac3{10}=60$ L.`),
  ms(String.raw`Which numbers are greater than $\frac58$? Select all.`, [String.raw`$\frac{7}{11}$`, String.raw`$\frac{9}{16}$`, "$0.63$", String.raw`$\frac{13}{20}$`, String.raw`$-\frac{11}{16}$`], [0, 2, 3], String.raw`$\frac58=0.625$. $\frac7{11}\approx0.636$, $0.63$, $\frac{13}{20}=0.65$ are larger; $\frac9{16}=0.5625$ and the negative are smaller.`),
  mc(String.raw`Order from least to greatest: $-\frac{7}{10}$, $-\frac23$, $-\frac34$.`, String.raw`$-\frac34,\ -\frac{7}{10},\ -\frac23$`, [String.raw`$-\frac23,\ -\frac{7}{10},\ -\frac34$`, String.raw`$-\frac{7}{10},\ -\frac34,\ -\frac23$`, String.raw`$-\frac34,\ -\frac23,\ -\frac{7}{10}$`], String.raw`$-0.75<-0.7<-0.\overline{6}$: the largest size is the smallest number.`),
  fill(String.raw`Evaluate $5\frac16-2\frac34$. Write a mixed number or an improper fraction: ___`, ["29/12", "2 5/12"], String.raw`$\frac{62}{12}-\frac{33}{12}=\frac{29}{12}=2\frac{5}{12}$.`),
  tf(String.raw`For positive fractions with $\frac ab<\frac cd$, the fraction $\frac{a+c}{b+d}$ always lies between them. (Try $\frac12$ and $\frac34$.)`, true, String.raw`Example: $\frac{1+3}{2+4}=\frac46=\frac23$, which is between $\frac12$ and $\frac34$. (This “mediant” always lies between.)`),
  mc(String.raw`What number is at point P?`, String.raw`$\frac58$`, [String.raw`$\frac35$`, String.raw`$\frac56$`, String.raw`$\frac23$`], String.raw`P is halfway between $\frac12=\frac48$ and $\frac34=\frac68$, so it is $\frac58$.`,
    numberLine({ min: 0, max: 1, step: 0.25, labels: ["0", "1/4", "1/2", "3/4", "1"], letters: [{ at: 0.625, label: "P" }] })),
  num(String.raw`Evaluate $\dfrac{1}{1\times2}+\dfrac{1}{2\times3}+\cdots+\dfrac{1}{19\times20}$ as a decimal.`, 0.95, String.raw`Each term is a difference: $\frac1n-\frac{1}{n+1}$. Everything cancels except $1-\frac{1}{20}=0.95$.`, undefined, 0.001),
  fill(String.raw`What number must be added to $-2\frac13$ to get $1\frac14$? ___`, ["43/12", "3 7/12"], String.raw`$1\frac14-\left(-2\frac13\right)=\frac{15}{12}+\frac{28}{12}=\frac{43}{12}=3\frac{7}{12}$.`),
  mc(String.raw`Which fraction lies between $\frac37$ and $\frac49$?`, String.raw`$\frac{7}{16}$`, [String.raw`$\frac12$`, String.raw`$\frac25$`, String.raw`$\frac{5}{11}$`], String.raw`$\frac37\approx0.4286$, $\frac49\approx0.4444$; $\frac7{16}=0.4375$ fits. ($\frac5{11}\approx0.4545$ is too big.)`),
  fill(String.raw`Evaluate $-2\frac34+1\frac56-\left(-\frac58\right)$ in lowest terms: ___`, ["-7/24", "−7/24"], String.raw`LCD $24$: $\frac{-66+44+15}{24}=-\frac{7}{24}$.`),
  tf(String.raw`If $a,b,c,d$ are positive and $\frac ab<\frac cd$, then $\frac ba>\frac dc$.`, true, String.raw`Example: $\frac23<\frac34$ and $\frac32>\frac43$. For positive numbers, taking reciprocals reverses the order.`),
  num(String.raw`A tank is $\frac12$ full. An amount equal to $\frac13$ of its capacity is drained, then $21$ L is added. It is now $\frac34$ full. Find the capacity in litres.`, 36, String.raw`After draining: $\frac12-\frac13=\frac16$. Then $\frac34-\frac16=\frac{7}{12}$ of the tank is $21$ L, so the capacity is $36$ L.`),
  ms(String.raw`Which numbers equal the shaded part of the bar? Select all.`, [String.raw`$\frac38$`, "$0.375$", String.raw`$\frac{6}{10}$`, String.raw`$\frac{12}{32}$`, String.raw`$\frac35$`], [0, 1, 3], String.raw`$6$ of $16$ parts: $\frac{6}{16}=\frac38=0.375=\frac{12}{32}$.`, bars([{ n: 6, d: 16, label: "" }])),
  num(String.raw`A triangle has sides $2\frac12$ m, $3\frac13$ m and $4\frac16$ m. Find its perimeter in metres.`, 10, String.raw`$\frac{15}{6}+\frac{20}{6}+\frac{25}{6}=\frac{60}{6}=10$.`),
  mc(String.raw`Evaluate $-1\frac35+2\frac14-\left|-\frac12-\frac25\right|$.`, String.raw`$-\frac14$`, [String.raw`$\frac14$`, String.raw`$\frac34$`, String.raw`$\frac{11}{20}$`], String.raw`The absolute value is $\frac{9}{10}$. LCD $20$: $\frac{-32+45-18}{20}=-\frac{5}{20}=-\frac14$.`),
  num(String.raw`Sam runs $3\frac34$ km on Monday and $2\frac58$ km on Tuesday. How far must he run on Wednesday to total exactly $10$ km? Give a decimal.`, 3.625, String.raw`$3\frac34+2\frac58=6\frac38$; $10-6\frac38=3\frac58=3.625$ km.`, undefined, 0.001),
  tf(String.raw`Between any two different fractions with the same denominator there is another fraction.`, true, String.raw`Their midpoint is always between them, for example $\frac{4.5}{7}=\frac{9}{14}$ between $\frac47$ and $\frac57$.`),
  mc(String.raw`Which fraction is closest to $\frac12$?`, String.raw`$\frac{5}{11}$`, [String.raw`$\frac{7}{12}$`, String.raw`$\frac49$`, String.raw`$\frac{11}{20}$`], String.raw`Distances from $\frac12$: $\frac1{22}\approx0.045$, $\frac1{12}\approx0.083$, $\frac1{18}\approx0.056$, $\frac1{20}=0.05$.`),
];
