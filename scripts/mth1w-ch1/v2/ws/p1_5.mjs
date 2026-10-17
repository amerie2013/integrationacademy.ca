// Worksheet 1.5 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
export const PROBLEMS = [
  { level: 1, q: String.raw`Evaluate $\frac34\times\frac27$.`, ans: String.raw`$\frac{3}{14}$` },
  { level: 1, q: String.raw`Find $\frac56$ of $42$.`, ans: "$35$" },
  { level: 1, q: String.raw`Write the reciprocal of $-\frac{3}{11}$ and of $2\frac12$.`, recap: String.raw`Reciprocals of $-\frac3{11}$ and $2\frac12$.`, ans: String.raw`$-\frac{11}{3}$; $\frac25$` },
  { level: 2, q: String.raw`Evaluate $-\frac{7}{12}\times\frac{18}{35}$.`, ans: String.raw`$-\frac{3}{10}$` },
  { level: 2, q: String.raw`Evaluate $3\frac13\times1\frac45$.`, ans: "$6$" },
  { level: 2, q: String.raw`Evaluate $-0.75\times1\frac13-(-2.5)$. Estimate first.`, ans: "$1.5$" },
  { level: 2, q: String.raw`Evaluate $4\frac12\div1\frac18$.`, ans: "$4$" },
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
  { level: 3, space: 4.5,
    q: String.raw`Which whole numbers can replace $\square$ so that $3\frac34\times\square$ is greater than $25$ but less than $40$? Explain your method.`,
    recap: String.raw`Whole numbers with $25<3\frac34\times\square<40$.`,
    ans: String.raw`$7,8,9,10$ (since $25\div3.75\approx6.7$ and $40\div3.75\approx10.7$).` },
  { level: 3, space: 5,
    q: String.raw`(a) Show that dividing $6$ by $\frac45$ gives the same answer as multiplying $6$ by $\frac54$. Explain why using “how many fit”.
(b) Explain why dividing any number by $\frac12$ doubles it.
(c) Find every number whose reciprocal is equal to itself.`,
    recap: String.raw`Dividing by $\frac45$ vs multiplying by $\frac54$; dividing by $\frac12$; self-reciprocal numbers.`,
    ans: String.raw`(a) both $7\frac12$: each whole holds $\frac54$ groups of $\frac45$ (b) each whole holds two halves (c) $1$ and $-1$.` },
  { level: 3, space: 5,
    q: String.raw`Find the number represented by $\triangle$ in each equation.
(a) $2\frac35\times\triangle=1$ \quad (b) $-1\frac16\times\triangle=1$ \quad (c) $\frac{9}{4}\div\triangle=1$
(d) Describe the connection between each given number and $\triangle$, and create a similar equation of your own.`,
    recap: String.raw`Find $\triangle$: $2\frac35\triangle=1$, $-1\frac16\triangle=1$, $\frac94\div\triangle=1$.`,
    ans: String.raw`(a) $\frac{5}{13}$ (b) $-\frac67$ (c) $\frac94$ (d) (a),(b): reciprocals; (c): the number itself.` },
];
