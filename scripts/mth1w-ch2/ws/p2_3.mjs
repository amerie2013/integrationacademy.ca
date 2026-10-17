// Worksheet 2.3 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
import { rectT } from "./tikz2.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Expand $7(3k-2)$.`, ans: "$21k-14$" },
  { level: 1, q: String.raw`Simplify $(4a^2b)(-5ab^3)$.`, ans: "$-20a^3b^4$" },
  { level: 1, q: String.raw`Expand $-2x(x^2-6)$.`, ans: "$-2x^3+12x$" },
  { level: 2, q: String.raw`Expand $3p(2p^2-p+5)$.`, ans: "$6p^3-3p^2+15p$" },
  { level: 2, q: String.raw`Simplify $5(2m-1)-3(m-4)$.`, ans: "$7m+7$" },
  { level: 2, q: String.raw`Simplify $x(x+4)-2(x^2-x)$.`, ans: "$-x^2+6x$" },
  { level: 2, q: String.raw`Factor completely: $12y^3-8y^2+20y$.`, ans: "$4y(3y^2-2y+5)$" },
  { level: 2, q: String.raw`Evaluate $2t(t-3)-(t^2-5t)$ for $t=-2$ twice: once before simplifying and once after.`, recap: String.raw`$2t(t-3)-(t^2-5t)$ at $t=-2$, before and after.`, ans: String.raw`$20-14=6$; simplified $t^2-t$ gives $4+2=6$` },
  { level: 3, space: 4.5,
    q: String.raw`Fill in the missing term so that each statement is true.
(a) $3x(\ \square\ -4)=6x^2-12x$ \qquad (b) $\square\,(2a+5)=8a^3+20a^2$ \qquad (c) $-5y^2(y^2+\square)=-5y^4+15y^3$
(d) Explain how you can check your answers.`,
    recap: "Missing terms in three expansions.",
    ans: String.raw`(a) $2x$ (b) $4a^2$ (c) $-3y$ (d) Expand each left side and compare with the right side.` },
  { level: 3, space: 5,
    q: String.raw`A poster is $4x$ cm wide and $3x$ cm high. It has a border $2$ cm wide all the way around.
${rectT("4x+4", "3x+4", "", { w: 5.2, h: 3.2, inner: 0.45 })}
(a) Explain why the outside dimensions are $4x+4$ and $3x+4$.
(b) Split the border into four strips and write a simplified expression for the area of the border.
(c) Find the area of the border when $x=10$, and check by subtracting the areas of the two rectangles.`,
    recap: String.raw`Poster $4x$ by $3x$ with a 2-cm border.`,
    ans: String.raw`(a) $2$ cm is added on each side (b) $2\cdot2(4x+4)+2\cdot2(3x)=28x+16$ (c) $296$ cm$^2$; $44\times34-40\times30=1496-1200=296$ ✓` },
  { level: 3, space: 5,
    q: String.raw`A school sells $3x$ adult tickets at $(2p+5)$ dollars each and $5x$ student tickets at $p$ dollars each.
(a) Write and simplify a polynomial for the total revenue.
(b) Find the revenue when $x=40$ and $p=8$.
(c) Factor your answer to (a). What does each factor mean in the situation?`,
    recap: String.raw`$3x$ adult tickets at $2p+5$, $5x$ student tickets at $p$.`,
    ans: String.raw`(a) $11px+15x$ (b) $4120$ dollars (c) $x(11p+15)$: $x$ groups of $3$ adults and $5$ students, each group paying $11p+15$ dollars.` },
  { level: 3, space: 5,
    q: String.raw`Sam simplified $15-3(2x-4)$ like this: $\ 15-3(2x-4)=12(2x-4)=24x-48$.
(a) Explain Sam's error.
(b) Simplify the expression correctly.
(c) Show with $x=1$ that Sam's answer and the original expression are not equal, but yours is.`,
    recap: String.raw`Error analysis: $15-3(2x-4)$.`,
    ans: String.raw`(a) He subtracted $15-3$ before multiplying; multiplication comes first (b) $15-6x+12=27-6x$ (c) original $21$, Sam $-24$, correct $21$ ✓` },
  { level: 3, space: 5,
    q: String.raw`Rectangle A has area $6x^2+9x$ and one side $3x$. Rectangle B has the same area and one side $x$.
(a) Find the other side of each rectangle by factoring.
(b) Write a simplified expression for each perimeter.
(c) Which rectangle has the larger perimeter for every $x>0$? By how much?`,
    recap: String.raw`Area $6x^2+9x$ with side $3x$ or side $x$.`,
    ans: String.raw`(a) A: $2x+3$; B: $6x+9$ (b) A: $10x+6$; B: $14x+18$ (c) B, by $4x+12$.` },
];
