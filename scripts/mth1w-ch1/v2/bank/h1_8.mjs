// 1.8 Working with Ratios and Proportions — 20 hard questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { doubleLine, tape, numberLine } from "./svg.mjs";

export const TOPIC = "1.8 Working with Ratios and Proportions";
export const Q = [
  num(String.raw`Pancake batter uses flour and milk in the ratio shown on the double number line. How many cups of milk go with $10.5$ cups of flour?`, 7,
    String.raw`The ratio is $3:2$. $10.5\div3=3.5$, so milk $=2\times3.5=7$ cups.`, doubleLine(3, 2, 4, { top: "flour (cups)", bottom: "milk (cups)" })),
  mc(String.raw`$A:B=3:4$ and $B:C=6:7$. What is $A:C$?`, "$9:14$", ["$3:7$", "$18:7$", "$9:12$"], String.raw`Scale: $A:B=9:12$ and $B:C=12:14$. So $A:C=9:14$.`),
  num(String.raw`The ratio of boys to girls in a school is $4:5$, and there are $12$ more girls than boys. How many students are there?`, 108, String.raw`The difference is $1$ part $=12$; total $9$ parts $=108$.`),
  fill(String.raw`Write $2\frac12:3\frac34$ in simplest whole-number form: ___`, ["2:3", "2 : 3"], String.raw`$\frac52:\frac{15}{4}$; multiply by $4$: $10:15=2:3$.`),
  ms(String.raw`Which ratios are equivalent to $0.8:2$? Select all.`, ["$2:5$", "$4:10$", "$8:20$", "$0.4:1$", "$5:2$", "$1:2.5$"], [0, 1, 2, 3, 5], String.raw`$0.8:2=8:20=2:5$; $1:2.5=2:5$. $5:2$ is reversed.`),
  num(String.raw`A map has scale $1:40\,000$. Two schools are $3.2$ km apart. How many centimetres apart are they on the map?`, 8, String.raw`$3.2$ km $=320\,000$ cm; $320\,000\div40\,000=8$ cm.`),
  mc(String.raw`Paint A is $3$ parts red to $5$ parts white; paint B is $4$ parts red to $7$ parts white. Which is redder?`, "A", ["B", "They are the same", "Cannot be decided"], String.raw`Red fraction: A $\frac38=0.375$, B $\frac4{11}\approx0.364$.`),
  num(String.raw`Three friends share $600$ dollars in the ratio $\frac12:\frac13:\frac16$. How many dollars does the largest share get?`, 300, String.raw`Multiply by $6$: $3:2:1$; $6$ parts of $100$; largest $300$.`),
  tf(String.raw`If $a:b=c:d$ (all positive), then $(a+b):b=(c+d):d$.`, true, String.raw`$\frac{a+b}{b}=\frac ab+1=\frac cd+1=\frac{c+d}{d}$.`),
  num(String.raw`The angles of a quadrilateral are in the ratio $2:3:3:4$. Find the largest angle in degrees.`, 120, String.raw`$360\div12=30$ per part; $4\times30=120$.`),
  num(String.raw`In the tape diagram, A and B are in the ratio $3:5$, and B is $24$ more than A. What is A $+$ B?`, 96,
    String.raw`B $-$ A is $2$ parts $=24$, so $1$ part $=12$; total $8$ parts $=96$.`, tape([{ n: 3, label: "A", color: "blue" }, { n: 5, label: "B", color: "amber" }], { unit: 44, total: "B is 24 more than A" })),
  fill(String.raw`Solve $(x+2):5=3:4$. ___`, ["7/4", "1.75", "1 3/4"], String.raw`$4(x+2)=15$, $x+2=3.75$, $x=1.75$.`),
  num(String.raw`A model airplane is built at a scale of $1:72$. The model's wing has an area of $150$ cm$^2$. What is the real wing area in m$^2$?`, 77.76, String.raw`Area scale: $72^2=5184$. $150\times5184=777\,600$ cm$^2=77.76$ m$^2$.`, undefined, 0.01),
  tf(String.raw`Adding the same number to both terms of a ratio gives an equivalent ratio.`, false, String.raw`$1:2$ is not equivalent to $2:3$ (add $1$). Only multiplying or dividing keeps a ratio equivalent.`),
  num(String.raw`A $15$ L mix of oil and vinegar has the ratio $3:2$. How many litres of oil must be added to make the ratio $3:1$?`, 9, String.raw`At first: $9$ L of oil and $6$ L of vinegar. For $3:1$ with $6$ L of vinegar, oil must be $18$ L. Add $9$ L.`),
  num(String.raw`The sides of a rectangle are in the ratio $3:5$ and its perimeter is $64$ cm. What is its area in cm$^2$?`, 240, String.raw`Sides $3k$ and $5k$: $16k=64$, $k=4$; $12\times20=240$.`),
  ms(String.raw`Which situations are proportional (doubling one quantity doubles the other)? Select all.`, ["cost of apples at 2.50 dollars per kg", "taxi fare of 3.50 dollars plus 1.75 dollars per km", "ingredients when a recipe is scaled", "a phone plan of 40 dollars per month for any amount of data", "length in cm compared with length in m"], [0, 2, 4], String.raw`A fixed starting fee (taxi) or a flat price (phone plan) breaks proportionality.`),
  num(String.raw`$A:B=2:3$ and $B:C=4:5$. If $C=45$, what is $A$?`, 24, String.raw`Make $B$ match: $A:B=8:12$, $B:C=12:15$, so $A:C=8:15$. $C=45$ gives $A=24$.`),
  num(String.raw`On this map the scale bar shows $2$ cm $=5$ km. Two cities are $9.2$ cm apart on the map. How many km apart are they?`, 23,
    String.raw`$9.2\div2=4.6$ bars; $4.6\times5=23$ km.`, numberLine({ min: 0, max: 8, step: 2, labels: ["0", "5 km", "10 km", "15 km", "20 km"] })),
  num(String.raw`A drink is mixed $1:4$ concentrate to water using $2$ L of concentrate. How many more litres of water must be added to make the ratio $1:5$?`, 2, String.raw`Water now $8$ L; for $1:5$ it needs $10$ L, so add $2$ L.`),
];
