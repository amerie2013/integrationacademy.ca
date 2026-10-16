// 1.8 Working with Ratios and Proportions — 20 easy + 20 medium questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { tape, doubleLine } from "./svg.mjs";

const R = (a, b) => [`${a}:${b}`, `${a} : ${b}`, `${a} to ${b}`];

export const E = [
  fill(String.raw`Write $10:15$ in simplest form: ___`, R(2, 3), "Divide both terms by 5."),
  fill(String.raw`Write $24:8$ in simplest form: ___`, R(3, 1), "Divide both terms by 8."),
  mc(String.raw`A box has $4$ red and $7$ blue pens. What is the ratio of red to blue?`, "$4:7$", ["$7:4$", "$4:11$", "$7:11$"], "Order matters: red first."),
  mc(String.raw`A box has $4$ red and $7$ blue pens. What is the ratio of red pens to all pens?`, "$4:11$", ["$4:7$", "$7:11$", "$11:4$"], String.raw`Total $=11$.`),
  tf(String.raw`$3:5$ and $6:10$ are equivalent ratios.`, true, "Multiply both terms by 2."),
  tf(String.raw`$2:3$ and $3:4$ are equivalent ratios.`, false, String.raw`$\frac23\neq\frac34$.`),
  num(String.raw`Solve $\frac{x}{8}=\frac{3}{4}$.`, 6, String.raw`$4\times2=8$, so $x=3\times2=6$.`),
  num(String.raw`Solve $5:2=x:10$.`, 25, "Scale factor 5."),
  ms(String.raw`Which ratios are equivalent to $1:4$? Select all.`, ["$2:8$", "$3:12$", "$4:1$", "$5:20$"], [0, 1, 3], String.raw`$4:1$ is reversed.`),
  num(String.raw`Share $30$ in the ratio $1:2$. What is the larger share?`, 20, String.raw`$3$ parts of $10$.`),
  mc(String.raw`A recipe uses $2$ eggs for $3$ cups of flour. How many eggs for $9$ cups?`, "$6$", ["$5$", "$4$", "$8$"], "Scale factor 3."),
  num(String.raw`On a map, $1$ cm represents $5$ km. Two towns are $4$ cm apart. How many km is that?`, 20, String.raw`$4\times5=20$.`),
  fill(String.raw`Write $0.5:2$ in simplest whole-number form: ___`, R(1, 4), String.raw`$\times2$: $1:4$.`),
  num(String.raw`The tape diagram shows a ratio of boys to girls. If there are $12$ boys, how many girls are there?`, 20, String.raw`$3$ parts $=12$, so one part is $4$; girls $=5\times4=20$.`, tape([{ n: 3, label: "boys", color: "blue" }, { n: 5, label: "girls", color: "amber" }], { unit: 40 })),
  tf("A ratio comparing two parts can be written as a fraction.", true, String.raw`$3:5$ can be written $\frac35$ (part to part).`),
  num(String.raw`Solve $\frac{2}{7}=\frac{10}{x}$.`, 35, "Scale factor 5."),
  mc(String.raw`Simplify $18:12:6$.`, "$3:2:1$", ["$9:6:3$", "$6:4:2$", "$1:2:3$"], "Divide every term by 6."),
  num(String.raw`A punch is $1$ part juice to $3$ parts soda. How many litres of soda go with $2$ L of juice?`, 6, "Scale factor 2."),
  fill(String.raw`Write $50$ cm $:2$ m in simplest form: ___`, R(1, 4), String.raw`$50:200=1:4$ (same units first).`),
  mc("Which ratio is in simplest form?", "$5:9$", ["$6:9$", "$4:10$", "$12:8$"], String.raw`$5$ and $9$ share no factor except $1$.`),
];

export const M = [
  num(String.raw`Solve $\frac{9}{x}=\frac{6}{10}$.`, 15, String.raw`$6x=90$.`),
  num(String.raw`Solve $\frac{x}{14}=\frac{5}{8}$. Give a decimal.`, 8.75, String.raw`$8x=70$.`, undefined, 0.001),
  fill(String.raw`Write $\frac23:\frac56$ in simplest whole-number form: ___`, R(4, 5), "Multiply both by 6."),
  fill(String.raw`Write $1.2:0.9$ in simplest whole-number form: ___`, R(4, 3), String.raw`$12:9=4:3$.`),
  num(String.raw`Share $420$ dollars in the ratio $3:4$. What is the smaller share, in dollars?`, 180, String.raw`$7$ parts of $60$.`),
  num(String.raw`Share $360$ in the ratio $1:3:5$. What is the largest share?`, 200, String.raw`$9$ parts of $40$.`),
  num(String.raw`The ratio of cats to dogs is $3:4$, and there are $24$ dogs. How many cats are there?`, 18, String.raw`One part $=6$.`),
  num(String.raw`A map scale is $1:25\,000$. Two points are $8$ cm apart on the map. How many km apart are they?`, 2, String.raw`$8\times25\,000=200\,000$ cm $=2$ km.`),
  num(String.raw`Use the double number line: how many km does the car travel on $10$ L of fuel?`, 125, String.raw`$25$ km per $2$ L, so $10$ L gives $5\times25=125$ km.`, doubleLine(2, 25, 5, { top: "fuel (L)", bottom: "distance (km)", blank: { bottom: 5 } })),
  tf(String.raw`If the ratio of red to blue is $2:3$, then $\frac25$ of the marbles are red.`, true, String.raw`Part-to-whole: $2$ out of $2+3=5$.`),
  mc(String.raw`Concrete mix is cement : sand $=1:3$. How much cement is in $20$ kg of the mix?`, "$5$ kg", ["$6.7$ kg", "$15$ kg", "$4$ kg"], String.raw`$4$ parts of $5$ kg.`),
  ms(String.raw`Which pairs form a proportion? Select all.`, [String.raw`$\frac{3}{4},\ \frac{12}{16}$`, String.raw`$\frac{5}{6},\ \frac{15}{20}$`, String.raw`$\frac{2}{9},\ \frac{8}{36}$`, String.raw`$\frac{7}{3},\ \frac{21}{9}$`], [0, 2, 3], String.raw`$\frac56\neq\frac{15}{20}=\frac34$.`),
  num(String.raw`A photo $8$ cm wide and $10$ cm tall is enlarged to $20$ cm wide. How tall is it now, in cm?`, 25, "Scale factor 2.5."),
  num(String.raw`Two numbers are in the ratio $2:7$ and their sum is $63$. What is the larger number?`, 49, String.raw`$9$ parts of $7$.`),
  mc(String.raw`Which recipe is the strongest lemonade (most lemon per water)?`, String.raw`$3$ lemon : $8$ water`, [String.raw`$2$ lemon : $7$ water`, String.raw`$1$ lemon : $4$ water`, String.raw`$4$ lemon : $15$ water`], String.raw`Lemon per water: $0.375$, $0.286$, $0.25$, $0.267$.`),
  num(String.raw`A model car is built at a scale of $1:18$. The real car is $4.5$ m long. How long is the model in cm?`, 25, String.raw`$450\div18=25$ cm.`),
  fill(String.raw`Simplify $45:75:30$: ___`, ["3:5:2", "3 : 5 : 2"], "Divide every term by 15."),
  tf("Multiplying both terms of a ratio by the same number gives an equivalent ratio.", true, "The comparison stays the same."),
  num(String.raw`In a class the ratio of students with pets to without is $5:3$. There are $32$ students. How many have pets?`, 20, String.raw`$8$ parts of $4$.`),
  num(String.raw`A tape diagram shows $A:B=4:5$, and $B$ is $15$. What is $A$?`, 12, String.raw`One part $=3$; $A=4\times3=12$.`, tape([{ n: 4, label: "A", color: "blue" }, { n: 5, label: "B = 15", color: "amber" }], { unit: 40 })),
];
