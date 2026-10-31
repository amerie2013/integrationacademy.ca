// Chapter 1 written-response (long_answer) bank questions for printed chapter tests (Part C).
// Teacher-marked: `points` are the marks, `feedback` is the model solution + marking notes printed
// in the answer key. Self-practice and auto-built online tests skip long_answer questions.
//   node scripts/mth1w-ch1/v2/written.mjs             -> dry run (lists what would be added)
//   node scripts/mth1w-ch1/v2/written.mjs --preview   -> LOCAL ONLY: .lesson-preview/bank-<courseId>.json for npm run dev
//   node scripts/mth1w-ch1/v2/written.mjs --apply     -> inserts rows not already in the bank (matched by prompt)
// Bank text conventions: math in $...$, money written as "dollars" (never \$).
import { createClient } from "@supabase/supabase-js";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { randomUUID } from "crypto";

const T = {
  1: "1.1 Number Sets & Their Subsets",
  2: "1.2 Adding & Subtracting Integers",
  3: "1.3 Multiplying & Dividing Integers",
  4: "1.4 Fractions: Equivalence, Comparing, Adding & Subtracting",
  5: "1.5 Fractions: Multiplying, Dividing & Reciprocals",
  6: "1.6 Powers: Zero & Negative Exponents",
  7: "1.7 Exponent Laws & Scientific Notation",
  8: "1.8 Working with Ratios and Proportions",
  9: "1.9 Rates, Percentages & Percent Change",
  10: "1.10 Density, Infinity & Limit",
};
const W = (t, difficulty, points, prompt, feedback) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null });

export const WRITTEN = [
  // 1.1
  W(1, "medium", 4, String.raw`List every set (natural, whole, integer, rational, irrational, real) that each number belongs to: $-\frac{20}{4}$, $0.\overline{12}$, $\sqrt{45}$, $3.0$.`,
    String.raw`$-\frac{20}{4}=-5$: integer, rational, real. $0.\overline{12}=\frac{12}{99}=\frac{4}{33}$: rational, real. $\sqrt{45}$: 45 is not a perfect square, so irrational, real. $3.0=3$: natural, whole, integer, rational, real. [1 mark each; the first and last need simplifying first.]`),
  W(1, "hard", 4, String.raw`Show that $0.\overline{27}=0.2727\ldots$ is a rational number by writing it as a fraction in lowest terms. Explain each step.`,
    String.raw`Let $x=0.\overline{27}$. Two digits repeat, so $100x=27.\overline{27}$. Subtract: $100x-x=27$, so $99x=27$ and $x=\frac{27}{99}=\frac{3}{11}$. A quotient of integers, so rational. [1 set up, 1 multiply by 100, 1 subtract, 1 lowest terms + conclusion.]`),
  W(1, "hard", 3, String.raw`Priya says: "Every square root is irrational." Give a counterexample to show she is wrong, then rewrite her statement so that it is true.`,
    String.raw`Counterexample: $\sqrt{25}=5$, which is rational. True statement: "The square root of a whole number that is not a perfect square is irrational." [1 counterexample, 1 explanation, 1 corrected statement.]`),
  W(1, "hard", 5, String.raw`Write $4.3\overline{18}$ as a fraction in lowest terms. Explain why this shows the number is rational.`,
    String.raw`Let $x=4.3\overline{18}$. Then $10x=43.\overline{18}$ and $1000x=4318.\overline{18}$. Subtract: $990x=4275$, so $x=\frac{4275}{990}=\frac{95}{22}$. It is a quotient of integers, so it is rational. [1 each multiple of $x$, 1 subtraction, 1 lowest terms, 1 conclusion.]`),
  W(1, "hard", 4, String.raw`Given that $x$ is irrational, explain why $5x$ must also be irrational.`,
    String.raw`Suppose $5x$ were rational, say $5x=\frac pq$ with integers $p,q$. Then $x=\frac{p}{5q}$, a quotient of integers, so $x$ would be rational. That contradicts the given fact, so $5x$ is irrational. [1 supposition, 1 equation, 1 rearranging, 1 contradiction.]`),
  // 1.2
  W(2, "medium", 3, String.raw`A submarine at $-120$ m rises $45$ m, dives $80$ m, then rises $30$ m. Write a single expression for its final position and evaluate it.`,
    String.raw`$-120+45-80+30=-125$. The submarine ends at $-125$ m (125 m below sea level). [1 expression, 1 correct signs/working, 1 answer with meaning.]`),
  W(2, "medium", 3, String.raw`Ontario's highest recorded temperature is about $42\,^\circ\text{C}$ and its lowest is about $-58\,^\circ\text{C}$. (a) Find the difference between them. (b) Explain why the calculation is a subtraction and why the answer is larger than both numbers' sizes.`,
    String.raw`(a) $42-(-58)=42+58=100\,^\circ\text{C}$. (b) A difference (distance) is higher minus lower; subtracting a negative adds its opposite, so the two distances from $0$ (42 and 58) add up. [1 setup, 1 answer, 1 explanation.]`),
  W(2, "hard", 4, String.raw`Use three different integers from $-5$ to $5$ to make $\square+\square-\square=-9$ true. Give two different solutions and describe the strategy you used.`,
    String.raw`Examples: $-5+(-2)-2=-9$; $-4+(-3)-2=-9$; $-5+(-1)-3=-9$. Strategy: the first two terms should be negative and the subtracted number positive, since every term then pushes the total down. [1 each correct solution (max 2), 2 for a clear strategy.]`),
  W(2, "hard", 4, String.raw`Find the sum of all the integers from $-60$ to $57$. Explain why you do not need to add all of them.`,
    String.raw`The integers from $-57$ to $57$ form opposite pairs that each add to $0$. The numbers left are $-60$, $-59$ and $-58$, with sum $-177$. [1 pairing idea, 1 explanation, 1 which numbers remain, 1 answer.]`),
  W(2, "hard", 4, String.raw`Find the integers $a$ and $b$ if $a+b=-6$ and $a-b=-20$. Show your reasoning and check your answer.`,
    String.raw`Adding the two statements gives $2a=-26$, so $a=-13$. Then $b=-6-(-13)=7$. Check: $-13+7=-6$ and $-13-7=-20$. [1 adding, 1 $a$, 1 $b$, 1 check.]`),
  // 1.3
  W(3, "medium", 4, String.raw`Evaluate $\dfrac{(-2)^3-4(-7)}{-15\div3}$. Show each step.`,
    String.raw`Numerator: $(-2)^3=-8$ and $-4(-7)=28$, so $-8+28=20$. Denominator: $-15\div3=-5$. Quotient: $20\div(-5)=-4$. [1 power, 1 product, 1 denominator, 1 final with correct sign.]`),
  W(3, "hard", 4, String.raw`In Iqaluit the temperature fell at a steady $3\,^\circ\text{C}$ per hour for $7$ hours and ended at $-26\,^\circ\text{C}$. What was the starting temperature? Explain using integer operations.`,
    String.raw`Total change $=7\times(-3)=-21$. Start $+(-21)=-26$, so start $=-26-(-21)=-26+21=-5\,^\circ\text{C}$. [1 total change, 1 equation/reasoning, 1 subtraction of a negative, 1 answer.]`),
  W(3, "hard", 3, String.raw`Without calculating, decide whether $(-2)^{11}\times(-5)^{4}\times(-1)^{7}$ is positive or negative. Explain your reasoning.`,
    String.raw`$(-2)^{11}$ has an odd number of negative factors: negative. $(-5)^4$ has an even number: positive. $(-1)^7$: negative. Two negative factors overall, so the product is positive. [1 per correct factor sign with reason (max 2), 1 conclusion.]`),
  W(3, "hard", 4, String.raw`Evaluate $\dfrac{(-5)^3+(-3)^4-(-2)^2}{(-1)^7(-6)}$. Show each step.`,
    String.raw`Numerator: $-125+81-4=-48$. Denominator: $(-1)(-6)=6$. Quotient: $-48\div6=-8$. [1 powers, 1 numerator, 1 denominator, 1 answer.]`),
  W(3, "hard", 4, String.raw`A $30$-question test gives $+4$ for a correct answer, $-1$ for a wrong answer and $0$ for a blank. A student left $2$ blank and scored $72$. How many answers were correct? Explain.`,
    String.raw`$28$ were answered. A perfect $28$ would give $112$, which is $40$ above $72$. Each wrong answer costs $5$, so there are $8$ wrong and $20$ correct. Check: $80-8=72$. [1 answered, 1 method, 1 answer, 1 check.]`),
  // 1.4
  W(4, "medium", 4, String.raw`Order from least to greatest and explain your method: $-\frac{3}{4}$, $\frac{5}{8}$, $-\frac{2}{3}$, $\frac{7}{12}$.`,
    String.raw`LCD 24: $-\frac{18}{24}$, $\frac{15}{24}$, $-\frac{16}{24}$, $\frac{14}{24}$. Order: $-\frac{3}{4}<-\frac{2}{3}<\frac{7}{12}<\frac{5}{8}$. [1 common denominator, 1 conversions, 1 order, 1 explanation of negatives.]`),
  W(4, "hard", 4, String.raw`A recipe needs $2\frac{1}{3}$ cups of flour. Jo has $3\frac{1}{4}$ cups but first uses $\frac{5}{6}$ cup for a sauce. Is there enough flour left for the recipe? Show your work.`,
    String.raw`$3\frac14-\frac56=\frac{39}{12}-\frac{10}{12}=\frac{29}{12}=2\frac{5}{12}$ cups left. The recipe needs $2\frac13=\frac{28}{12}$. Since $\frac{29}{12}>\frac{28}{12}$, yes — with $\frac{1}{12}$ cup to spare. [1 conversion, 1 subtraction, 1 comparison, 1 conclusion.]`),
  W(4, "hard", 3, String.raw`Evaluate $1\frac{2}{5}-\left(-\frac{3}{10}\right)+\left(-2\frac{1}{2}\right)$. Give the answer in lowest terms.`,
    String.raw`$\frac{7}{5}+\frac{3}{10}-\frac{5}{2}=\frac{14}{10}+\frac{3}{10}-\frac{25}{10}=-\frac{8}{10}=-\frac{4}{5}$. [1 improper fractions + signs, 1 LCD, 1 answer.]`),
  W(4, "hard", 5, String.raw`Evaluate $\dfrac{1}{4\times5}+\dfrac{1}{5\times6}+\cdots+\dfrac{1}{9\times10}$. Explain why most of the terms cancel.`,
    String.raw`Each term is a difference: $\frac{1}{n(n+1)}=\frac1n-\frac{1}{n+1}$. The sum is $\left(\frac14-\frac15\right)+\left(\frac15-\frac16\right)+\cdots+\left(\frac19-\frac{1}{10}\right)$. Each $-\frac1k$ cancels the next $+\frac1k$, leaving $\frac14-\frac{1}{10}=\frac{3}{20}$. [2 rewriting, 1 explanation, 1 what remains, 1 answer.]`),
  W(4, "hard", 4, String.raw`Evaluate $\left|-1\frac34+\frac12\right|-\left(-2\frac13\right)-3\frac16$. Give the answer in lowest terms.`,
    String.raw`The absolute value is $\frac54$. Then $\frac54+\frac73-\frac{19}{6}=\frac{15+28-38}{12}=\frac{5}{12}$. [1 absolute value, 1 signs, 1 LCD, 1 answer.]`),
  // 1.5
  W(5, "medium", 4, String.raw`Evaluate $-\frac{4}{5}\div1\frac{1}{3}\times\frac{5}{6}$. Show each step.`,
    String.raw`$1\frac13=\frac43$. Left to right: $-\frac45\times\frac34=-\frac35$; then $-\frac35\times\frac56=-\frac12$. [1 improper fraction, 1 reciprocal, 1 multiplication, 1 sign + lowest terms.]`),
  W(5, "hard", 4, String.raw`A board $5\frac{1}{4}$ m long is cut into pieces $\frac{7}{8}$ m long. How many pieces can be cut? Is any wood left over? Show your work.`,
    String.raw`$5\frac14\div\frac78=\frac{21}{4}\times\frac{8}{7}=\frac{168}{28}=6$. Exactly $6$ pieces, nothing left over. [1 division set-up, 1 reciprocal, 1 answer, 1 leftover statement.]`),
  W(5, "hard", 3, String.raw`Explain, using a diagram or numbers, why $3\div\frac{1}{4}$ is larger than $3$.`,
    String.raw`Dividing asks how many quarters fit in $3$. Each whole holds $4$ quarters, so $3$ wholes hold $12$: $3\div\frac14=3\times4=12$. Dividing by a number less than $1$ gives more groups than the original amount. [1 meaning of division, 1 answer, 1 general reason.]`),
  W(5, "hard", 5, String.raw`Evaluate $1-\dfrac{1}{1+\dfrac{1}{2+\dfrac13}}$. Show each step.`,
    String.raw`$2+\frac13=\frac73$, with reciprocal $\frac37$. $1+\frac37=\frac{10}{7}$, with reciprocal $\frac{7}{10}$. $1-\frac{7}{10}=\frac{3}{10}$. [1 first sum, 1 first reciprocal, 1 second sum, 1 second reciprocal, 1 answer.]`),
  W(5, "hard", 4, String.raw`Leo spends $\frac25$ of his money, then $\frac13$ of what is left. He has $20$ dollars left. How much did he start with? How much did he spend each time?`,
    String.raw`Fraction left: $\frac35\times\frac23=\frac25$. So $\frac25$ of the money is $20$ dollars, and he started with $50$ dollars. He spent $20$ dollars, then $10$ dollars. [1 fraction left, 1 set-up, 1 total, 1 amounts.]`),
  // 1.6
  W(6, "medium", 4, String.raw`Evaluate $\dfrac{2^{-2}+3^{0}}{(-2)^{3}}$. Give an exact answer.`,
    String.raw`$2^{-2}=\frac14$, $3^0=1$, so the numerator is $\frac54$. $(-2)^3=-8$. $\frac54\div(-8)=-\frac{5}{32}$. [1 negative exponent, 1 zero exponent, 1 negative base, 1 answer.]`),
  W(6, "hard", 4, String.raw`A bacteria population doubles every hour. There are $3200$ bacteria now. (a) Write an expression with a power of $2$ for the population $4$ hours ago. (b) Evaluate it. (c) Explain what the negative exponent means here.`,
    String.raw`(a) $3200\times2^{-4}$. (b) $3200\times\frac{1}{16}=200$. (c) Going back in time undoes doubling: each earlier hour divides by $2$, which a negative exponent represents. [1, 1, 2.]`),
  W(6, "hard", 3, String.raw`Order from least to greatest and explain: $(-3)^2$, $-3^2$, $3^{-2}$, $(-3)^0$.`,
    String.raw`$-3^2=-9$, $3^{-2}=\frac19$, $(-3)^0=1$, $(-3)^2=9$. Order: $-3^2<3^{-2}<(-3)^0<(-3)^2$. Brackets decide the base; a negative exponent gives a reciprocal. [1 values, 1 order, 1 explanation.]`),
  W(6, "hard", 4, String.raw`Evaluate $\left(2^{-1}-3^{-1}\right)^{-2}+(-2)^{-3}\times8$. Show each step.`,
    String.raw`$\frac12-\frac13=\frac16$, and $\left(\frac16\right)^{-2}=36$. $(-2)^{-3}=-\frac18$, and $-\frac18\times8=-1$. Total: $35$. [1 bracket, 1 flip, 1 second term, 1 answer.]`),
  W(6, "hard", 4, String.raw`A $1600$ g sample has a half-life of $5$ days. (a) When will it reach $25$ g? (b) Use a negative exponent to find its mass $10$ days ago.`,
    String.raw`(a) $1600\div25=64=2^6$: $6$ half-lives, or $30$ days. (b) $1600\times\left(\frac12\right)^{-2}=1600\times4=6400$ g. [2 and 2.]`),
  // 1.7
  W(7, "medium", 4, String.raw`Simplify $\dfrac{(2x^3)^4\cdot x^{-2}}{8x^5}$. Name each exponent law you use.`,
    String.raw`Power of a product / power of a power: $(2x^3)^4=16x^{12}$. Product law: $16x^{12}\cdot x^{-2}=16x^{10}$. Quotient law: $\frac{16x^{10}}{8x^5}=2x^5$. [1 per correct step with law named, 1 final.]`),
  W(7, "hard", 4, String.raw`Earth's mass is about $5.97\times10^{24}$ kg and the Moon's mass is about $7.35\times10^{22}$ kg. About how many times as massive as the Moon is Earth? Show your work in scientific notation.`,
    String.raw`$\frac{5.97\times10^{24}}{7.35\times10^{22}}=\frac{5.97}{7.35}\times10^{2}\approx0.812\times10^{2}=8.12\times10^{1}$. Earth is about $81$ times as massive. [1 set-up, 1 divide decimals, 1 subtract exponents, 1 answer.]`),
  W(7, "hard", 5, String.raw`Simplify $\left(\dfrac{6x^{-3}y^5z^2}{14xy^{-1}z^6}\right)^{-2}$. Write the answer with positive exponents, and show each step.`,
    String.raw`Inside: $\frac{6}{14}=\frac37$, $x^{-3-1}=x^{-4}$, $y^{5-(-1)}=y^6$, $z^{2-6}=z^{-4}$, so $\frac{3y^6}{7x^4z^4}$. The negative power flips the fraction: $\left(\frac{7x^4z^4}{3y^6}\right)^2=\frac{49x^8z^8}{9y^{12}}$. [1 coefficient, 1 exponents inside, 1 flip, 1 squaring every factor, 1 final form.]`),
  W(7, "hard", 4, String.raw`Find $n$ if $\dfrac{27^n\times9^2}{3^5}=81^3\times9$. Show how you rewrite each number.`,
    String.raw`In base $3$: the left side is $3^{3n}\times3^4\div3^5=3^{3n-1}$, and the right side is $3^{12}\times3^2=3^{14}$. Then $3n-1=14$ gives $3n=15$, so $n=5$. [1 rewriting, 1 left side, 1 right side and equation, 1 answer.]`),
  W(7, "hard", 3, String.raw`A student wrote $3^4\times3^2=9^6$. Explain the mistake and give the correct answer.`,
    String.raw`The bases were multiplied. With the same base you keep the base and add the exponents: $3^4\times3^2=3^6=729$ (not $9^6$). [1 identifies error, 1 correct law, 1 value.]`),
  // 1.8
  W(8, "medium", 3, String.raw`Concrete is mixed cement : sand : gravel $=1:2:4$ by mass. A builder needs $350$ kg of concrete. How much of each ingredient is needed?`,
    String.raw`$1+2+4=7$ parts; one part $=350\div7=50$ kg. Cement $50$ kg, sand $100$ kg, gravel $200$ kg. [1 parts, 1 one part, 1 amounts.]`),
  W(8, "hard", 4, String.raw`The ratio of boys to girls in a club is $3:5$. After $6$ more boys join (and no one leaves), the ratio becomes $1:1$. How many girls are in the club? Show your reasoning.`,
    String.raw`Let the club have $3k$ boys and $5k$ girls. Then $3k+6=5k$, so $2k=6$ and $k=3$. Girls $=15$ (boys went from $9$ to $15$). [1 representation, 1 equation, 1 solve, 1 answer with check.]`),
  W(8, "medium", 3, String.raw`A model car is built at a scale of $1:24$. The model is $18.5$ cm long. How long is the real car, in metres?`,
    String.raw`Real length $=18.5\times24=444$ cm $=4.44$ m. [1 proportion, 1 multiply, 1 unit conversion.]`),
  W(8, "hard", 4, String.raw`A $40$ L tank holds concentrate and water in the ratio $3:5$. You drain $16$ L of the mixture and refill the tank with water. Find the new ratio of concentrate to water. Show your reasoning.`,
    String.raw`At first: $15$ L and $25$ L. The $16$ L drained holds $6$ L of concentrate and $10$ L of water, leaving $9$ L and $15$ L. Adding $16$ L of water gives $9:31$. [1 start, 1 drained, 1 left, 1 answer.]`),
  W(8, "hard", 3, String.raw`$A:B=5:6$ and $B:C=4:3$. If $A+B+C=620$, find each number.`,
    String.raw`Scale: $A:B=10:12$ and $B:C=12:9$, so $10:12:9$, which is $31$ parts. One part is $20$. $A=200$, $B=240$, $C=180$. [1 linking, 1 one part, 1 answers.]`),
  // 1.9
  W(9, "medium", 4, String.raw`A phone costs $640$ dollars. It is $15\%$ off, and $13\%$ HST is charged on the sale price. (a) Find the final cost. (b) Would the cost change if the tax were added before the discount? Explain.`,
    String.raw`(a) $640\times0.85=544$; $544\times1.13=614.72$ dollars. (b) No: $640\times0.85\times1.13=640\times1.13\times0.85$ because multiplication can be done in any order. [1 discount, 1 tax, 1 answer, 1 explanation.]`),
  W(9, "hard", 4, String.raw`A $1800$ L tank drains at $45$ L/min. (a) Write the rate of change of the volume as a signed rate. (b) How long until the tank is empty? (c) How much water is left after $25$ minutes?`,
    String.raw`(a) $-45$ L/min. (b) $1800\div45=40$ min. (c) $1800+25\times(-45)=1800-1125=675$ L. [1, 1, 2.]`),
  W(9, "hard", 3, String.raw`A price rises by $25\%$ and then falls by $20\%$. Show that it returns to the original price. Then explain why a $20\%$ rise followed by a $20\%$ fall does not.`,
    String.raw`$1.25\times0.80=1$, so the price is unchanged. But $1.20\times0.80=0.96$: the fall is $20\%$ of a larger amount, so the price ends $4\%$ lower. [1 first product, 1 second product, 1 explanation.]`),
  W(9, "hard", 4, String.raw`A store marks up an item $60\%$ above its cost of $120$ dollars, then discounts it $30\%$. (a) Find the sale price. (b) Find the percent profit on the cost. (c) Explain why the two changes do not simply subtract to give $30\%$.`,
    String.raw`(a) $120\times1.6\times0.7=134.40$ dollars. (b) $1.6\times0.7=1.12$: $12\%$. (c) The $30\%$ is taken from the larger marked-up price, so the factors multiply. [1, 1, 2.]`),
  W(9, "hard", 4, String.raw`A truck leaves at $72$ km/h. A car leaves from the same place $20$ minutes later at $108$ km/h. How long after it leaves does the car catch the truck, and how far from the start are they?`,
    String.raw`Head start: $72\times\frac13=24$ km. The gap closes at $36$ km/h, so it takes $\frac{24}{36}=\frac23$ h, or $40$ minutes. Distance: $108\times\frac23=72$ km. [1 head start, 1 closing speed, 1 time, 1 distance.]`),
  // 1.10
  W(10, "medium", 3, String.raw`Find three rational numbers between $-\frac{1}{3}$ and $-\frac{1}{4}$. Show your method.`,
    String.raw`LCD 12: $-\frac{4}{12}$ and $-\frac{3}{12}$. Use 48ths: $-\frac{16}{48}$ and $-\frac{12}{48}$, so $-\frac{15}{48},-\frac{14}{48},-\frac{13}{48}$ (that is $-\frac{5}{16},-\frac{7}{24},-\frac{13}{48}$). Other correct answers accepted. [1 method, 2 three numbers.]`),
  W(10, "hard", 4, String.raw`Use algebra to show that $0.\overline{9}=1$. Then explain why no number lies between $0.\overline{9}$ and $1$.`,
    String.raw`Let $x=0.\overline{9}$; $10x=9.\overline{9}$; $10x-x=9$, so $9x=9$ and $x=1$. If some number $y$ lay between them, then $y<1$, so with enough nines $0.99\ldots9>y$ — and $0.\overline{9}$ is larger than every such decimal, so $0.\overline{9}>y$, a contradiction. No gap exists: they are the same number. [2 algebra, 2 explanation.]`),
  W(10, "hard", 4, String.raw`A ball is dropped from $2$ m and each bounce reaches half the previous height. (a) List the heights of the first $5$ bounces. (b) What value do the heights approach? (c) In this model, does the ball ever stop bouncing? Explain.`,
    String.raw`(a) $1,\ 0.5,\ 0.25,\ 0.125,\ 0.0625$ m. (b) $0$. (c) In the model every height is half the last, so it is never exactly $0$ — infinitely many bounces whose limit is $0$. A real ball stops because of energy loss the model ignores. [1, 1, 2.]`),
  W(10, "hard", 4, String.raw`The sequence $a_n=\dfrac{5n+3}{n}$. (a) Find its limit and explain. (b) Find the first $n$ for which $a_n$ is within $0.01$ of the limit.`,
    String.raw`(a) $a_n=5+\frac3n$, and $\frac3n\to0$, so the limit is $5$. (b) $\frac3n<0.01$ means $n>300$, so $n=301$. [2, 2.]`),
  W(10, "hard", 4, String.raw`A ball is dropped from $24$ m, and each bounce reaches half the previous height. Explain why the total distance travelled approaches a finite value, and find it.`,
    String.raw`The bounce heights $12+6+3+\cdots$ approach $24$, just as $\frac12+\frac14+\cdots$ approaches $1$. Each is travelled twice: $48$ m. Adding the first drop gives $72$ m. It is finite because the amounts added shrink fast enough that their sum has a limit. [1 sum of heights, 1 doubling, 1 total, 1 explanation.]`),
];

const APPLY = process.argv.includes("--apply");
const PREVIEW = process.argv.includes("--preview");
if (process.argv[1] && import.meta.url.endsWith(process.argv[1].replace(/\\/g, "/").split("/").pop())) {
  const env = {};
  for (const line of readFileSync(".env.local", "utf8").split("\n")) { const m = line.match(/^([A-Z0-9_]+)=(.*)$/); if (m) env[m[1]] = m[2].trim(); }
  const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });
  const cid = (await db.from("courses").select("id").eq("code", "MTH1W").single()).data.id;
  const { data: lessons } = await db.from("lessons").select("id, title").eq("course_id", cid);
  const { data: existing } = await db.from("bank_questions").select("prompt").eq("course_id", cid).eq("kind", "long_answer");
  const have = new Set((existing ?? []).map((r) => r.prompt));
  const rows = WRITTEN.map((w) => ({ ...w, course_id: cid, lesson_id: lessons.find((l) => l.title === w.topic)?.id ?? null }));
  const missingLesson = rows.filter((r) => !r.lesson_id).map((r) => r.topic);
  if (missingLesson.length) console.log("WARNING: no lesson with title:", [...new Set(missingLesson)]);
  const todo = rows.filter((r) => !have.has(r.prompt));
  console.log(`${WRITTEN.length} written questions; ${todo.length} not yet in the bank; ${rows.reduce((s, r) => s + r.points, 0)} marks in total`);
  if (PREVIEW) {
    mkdirSync(".lesson-preview", { recursive: true });
    writeFileSync(`.lesson-preview/bank-${cid}.json`, JSON.stringify({ rows: rows.map((r) => ({ id: randomUUID(), ...r })) }));
    console.log(`preview written: .lesson-preview/bank-${cid}.json (dev server only)`);
  } else if (APPLY) {
    if (todo.length) { const r = await db.from("bank_questions").insert(todo); if (r.error) throw r.error; }
    console.log(`inserted ${todo.length}`);
  } else console.log("Dry run — use --preview (local) or --apply (database).");
}
