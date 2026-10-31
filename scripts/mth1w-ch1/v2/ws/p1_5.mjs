// Worksheet 1.5 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
export const PROBLEMS = [
  { level: 1, q: String.raw`Evaluate $\frac34\times\frac27$.`, ans: String.raw`$\frac{3}{14}$` },
  { level: 1, q: String.raw`Find $\frac56$ of $42$.`, ans: "$35$" },
  { level: 1, q: String.raw`Write the reciprocal of $-\frac{3}{11}$ and of $2\frac12$.`, recap: String.raw`Reciprocals of $-\frac3{11}$ and $2\frac12$.`, ans: String.raw`$-\frac{11}{3}$; $\frac25$` },
  { level: 2, q: String.raw`Evaluate $-\dfrac{7}{12}\times\dfrac{18}{35}\div\left(-\dfrac{9}{10}\right)$.`, ans: String.raw`$\dfrac13$` },
  { level: 2, q: String.raw`Evaluate $3\frac13\times1\frac45$.`, ans: "$6$" },
  { level: 2, q: String.raw`Evaluate $-0.75\times1\frac13-(-2.5)$. Estimate first.`, ans: "$1.5$" },
  { level: 2, q: String.raw`Evaluate $4\dfrac12\div1\dfrac18-2\dfrac23\times\dfrac34$.`, ans: "$2$" },
  { level: 2, q: String.raw`A recipe uses $\frac34$ cup of sugar per batch. How much sugar is needed for $2\frac13$ batches?`, recap: String.raw`Sugar: $\frac34$ cup $\times2\frac13$ batches.`, ans: String.raw`$1\frac34$ cups` },
  { level: 3, space: 5,
    q: String.raw`A farmer builds a square chicken coop with sides $6\frac12$ m long.
(a) Find the perimeter of the coop.
(b) Find its area.
(c) Fencing costs $12.50$ dollars per metre. How much does the fencing cost?
(d) The farmer wants at least $1\frac34$ m$^2$ per chicken. How many chickens can the coop hold?`,
    recap: String.raw`Square coop, side $6\frac12$ m: perimeter, area, fencing cost, chickens.`,
    ans: String.raw`(a) $26$ m (b) $42\frac14$ m$^2$ (c) $325$ dollars (d) $42\frac14\div1\frac34=24\frac17$, so $24$ chickens.` },
  { level: 3, space: 5,
    q: String.raw`Gavin's rectangular patio is made of square blocks $1\frac12$ ft by $1\frac12$ ft. The patio has area $175\frac12$ ft$^2$ and length $19\frac12$ ft.
(a) Find the width of the patio.
(b) How many blocks did he use?
(c) Blocks cost $4.25$ dollars each. Find the total cost.`,
    recap: String.raw`Patio $175\frac12$ ft$^2$, length $19\frac12$ ft, blocks $1\frac12$ ft.`,
    ans: String.raw`(a) $9$ ft (b) $13\times6=78$ (c) $331.50$ dollars.` },
  { level: 3, space: 5.5,
    q: String.raw`Maya spends $\dfrac13$ of her money on a game, then $\dfrac35$ of what is left on shoes, then $\dfrac14$ of what is left after that on lunch. She has $18$ dollars left.
(a) What fraction of her original money is left?
(b) How much did she start with?
(c) How much did she spend on each item?
(d) What fraction of her original money went to shoes?`,
    ans: String.raw`(a) $\dfrac23\times\dfrac25\times\dfrac34=\dfrac15$ (b) $90$ dollars (c) game $30$, shoes $36$, lunch $6$ (d) $\dfrac25$.` },
  { level: 3, space: 5,
    q: String.raw`(a) Show that dividing $6$ by $\frac45$ gives the same answer as multiplying $6$ by $\frac54$. Explain why using “how many fit”.
(b) Explain why dividing any number by $\frac12$ doubles it.
(c) Find every number whose reciprocal is equal to itself.`,
    recap: String.raw`Dividing by $\frac45$ vs multiplying by $\frac54$; dividing by $\frac12$; self-reciprocal numbers.`,
    ans: String.raw`(a) both $7\frac12$: each whole holds $\frac54$ groups of $\frac45$ (b) each whole holds two halves (c) $1$ and $-1$.` },
  { level: 3, space: 6,
    q: String.raw`A sequence starts with $a_1=2$. Each later term is $1+\dfrac{1}{\text{previous term}}$.
(a) Find $a_2$, $a_3$, $a_4$ and $a_5$ as fractions.
(b) Describe the pattern in the numerators and denominators.
(c) Use the pattern to write $a_6$, and check it with the rule.
(d) Write $a_6$ as a decimal to three places.`,
    ans: String.raw`(a) $\dfrac32,\ \dfrac53,\ \dfrac85,\ \dfrac{13}{8}$ (b) each number is the sum of the two before it (c) $\dfrac{21}{13}$; $1+\dfrac{8}{13}=\dfrac{21}{13}$ (d) $1.615$.` },
];
