// Worksheet 2.2 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
import { tiles, polyT } from "./tikz2.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Classify $4a^3b-2ab+9$ by its number of terms and state its degree.`, recap: String.raw`Type and degree of $4a^3b-2ab+9$.`, ans: "trinomial, degree $4$" },
  { level: 1, q: String.raw`Simplify $6x-2-9x+7$.`, ans: "$-3x+5$" },
  { level: 1, q: String.raw`Simplify $(2y^2+3y)+(5y^2-8y)$.`, ans: "$7y^2-5y$" },
  { level: 2, q: String.raw`Simplify $3m^2-4mn+2n^2-m^2+7mn-5n^2$.`, ans: "$2m^2+3mn-3n^2$" },
  { level: 2, q: String.raw`Simplify $(4x^2-3x+7)-(x^2-5x+9)$.`, ans: "$3x^2+2x-2$" },
  { level: 2, q: String.raw`Simplify $\frac12a+\frac23b-\frac34a+\frac16b$.`, ans: String.raw`$-\frac14a+\frac56b$` },
  { level: 2, q: String.raw`Kim says $4-(x-1)$ is equivalent to $3-x$. Test with $x=2$, then simplify correctly.`, recap: String.raw`Is $4-(x-1)$ equivalent to $3-x$?`, ans: String.raw`No: $3\ne1$ at $x=2$; $4-(x-1)=5-x$` },
  { level: 2, q: String.raw`Write the polynomial modelled by the two rows of tiles, combined, and simplify.
${tiles([{ label: "", x2: 2, x: -3, c: 4 }, { label: "", x2: -1, x: 1, c: -2 }], "")}`, recap: String.raw`Tiles: $2x^2-3x+4$ and $-x^2+x-2$ combined.`, ans: "$x^2-2x+2$" },
  { level: 3, space: 4.5,
    q: String.raw`(a) What polynomial must be added to $3x^2-5x+2$ to get $x^2+4x-6$?
(b) What polynomial must be subtracted from $2a^2-ab$ to get $5a^2+3ab-b^2$?
(c) Check each answer by adding or subtracting.`,
    recap: "Missing polynomials: add to get / subtract to get.",
    ans: String.raw`(a) $-2x^2+9x-8$ (b) $-3a^2-4ab+b^2$ (c) e.g. $(3x^2-5x+2)+(-2x^2+9x-8)=x^2+4x-6$ ✓` },
  { level: 3, space: 5,
    q: String.raw`Lena tutors for $18.50$ dollars per hour and gets a $12$-dollar travel allowance each day. Omar tutors for $21$ dollars per hour but pays $8$ dollars a day for parking. Each works $h$ hours a day.
(a) Write a polynomial for each person's daily earnings.
(b) Write one simplified polynomial for their combined daily earnings.
(c) Find the combined earnings when each works $6.5$ hours.
(d) One day Lena works $7$ h and Omar works $5$ h. Can you use (b)? Find their combined earnings that day.`,
    recap: "Lena 18.50/h + 12; Omar 21/h − 8.",
    ans: String.raw`(a) $18.5h+12$; $21h-8$ (b) $39.5h+4$ (c) $260.75$ dollars (d) No, (b) needs the same $h$: $141.50+97=238.50$ dollars.` },
  { level: 3, space: 4.5,
    q: String.raw`Create two trinomials in $x$ whose sum is
(a) a binomial; (b) a monomial; (c) a trinomial of degree $3$.
Show the addition each time.`,
    recap: "Two trinomials whose sum is a binomial / monomial / cubic trinomial.",
    ans: String.raw`Sample: (a) $(x^2+2x+1)+(-x^2+3x+4)=5x+5$ (b) $(x^2+x+1)+(-x^2-x+2)=3$ (c) $(x^3+2x+1)+(x^2-2x+3)=x^3+x^2+4$.` },
  { level: 3, space: 5,
    q: String.raw`State whether each statement is always, sometimes or never true. Give an example (or counter-example) for each.
(a) The sum of two binomials is a binomial.
(b) The sum of two polynomials of degree $2$ has degree $2$.
(c) A polynomial minus itself is $0$.`,
    recap: "Always / sometimes / never: sums of polynomials.",
    ans: String.raw`(a) Sometimes: $(x+1)+(x+2)=2x+3$; but $(x+1)+(x-1)=2x$ (b) Sometimes: $(x^2+1)+(-x^2+x)=x+1$ has degree $1$ (c) Always: every term meets its opposite.` },
  { level: 3, space: 5,
    q: String.raw`A garden bed is a pentagon with sides (in metres) as shown.
${polyT([[0, 0], [4.4, 0], [5.4, 2.2], [2.2, 3.8], [-0.8, 2]], ["2x-5", "x+4", "3x", "x-1", "2x+3"], "")}
(a) Write a simplified expression for the perimeter.
(b) The perimeter is $64$ m. Show that $x=7$ and find every side length.
(c) What is the smallest whole-number value of $x$ that gives a real pentagon (every side positive)?`,
    recap: String.raw`Pentagon sides $2x-5$, $x+4$, $3x$, $x-1$, $2x+3$.`,
    ans: String.raw`(a) $9x+1$ (b) $9(7)+1=64$; sides $9, 11, 21, 6, 17$ m (c) $2x-5>0$ needs $x>2.5$, so $x=3$.` },
];
