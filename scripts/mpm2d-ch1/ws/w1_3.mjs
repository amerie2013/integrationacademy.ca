// MPM2D Worksheet 1.3 — Solving by Substitution (teacher edition)
import { planeT } from "./figT.mjs";

const EXAMPLES = [
  { title: "y already isolated", q: String.raw`Solve $y=3x-5$ and $2x+y=10$.`,
    steps: [String.raw`$2x+(3x-5)=10\Rightarrow5x=15\Rightarrow x=3$.`, String.raw`$y=3(3)-5=4$. Check: $6+4=10$ ✓`], ans: "$(3,4)$" },
  { title: "x already isolated", q: String.raw`Solve $x=2y+1$ and $3x-4y=9$.`,
    steps: [String.raw`$3(2y+1)-4y=9\Rightarrow2y+3=9\Rightarrow y=3$.`, String.raw`$x=2(3)+1=7$. Check: $21-12=9$ ✓`], ans: "$(7,3)$" },
  { title: "Isolating a variable", q: String.raw`Solve $4x+y=2$ and $3x-2y=18$.`,
    steps: [String.raw`$y=2-4x$.`, String.raw`$3x-2(2-4x)=18\Rightarrow11x-4=18\Rightarrow x=2$.`, String.raw`$y=2-8=-6$. Check: $6+12=18$ ✓`], ans: "$(2,-6)$" },
  { title: "Negative coefficient", q: String.raw`Solve $5x-y=-1$ and $2x+3y=20$.`,
    steps: [String.raw`$y=5x+1$.`, String.raw`$2x+3(5x+1)=20\Rightarrow17x=17\Rightarrow x=1$; $y=6$.`, String.raw`Check: $2+18=20$ ✓`], ans: "$(1,6)$" },
  { title: "Fractional answer", q: String.raw`Solve $x+3y=4$ and $2x-y=5$.`,
    steps: [String.raw`$x=4-3y$; $2(4-3y)-y=5\Rightarrow-7y=-3\Rightarrow y=\frac37$.`, String.raw`$x=4-\frac97=\frac{19}{7}$.`, String.raw`Check: $\frac{38}{7}-\frac37=5$ ✓`], ans: String.raw`$\left(\frac{19}{7},\frac37\right)$` },
  { title: "Equations with fractions", q: String.raw`Solve $\frac{x}{4}+\frac{y}{2}=3$ and $y=x-3$.`,
    steps: [String.raw`$\times4$: $x+2y=12$.`, String.raw`$x+2(x-3)=12\Rightarrow3x=18\Rightarrow x=6$; $y=3$.`], ans: "$(6,3)$" },
  { title: "Equal expressions", q: String.raw`Solve $y=4x-7$ and $y=-2x+11$.`,
    steps: [String.raw`$4x-7=-2x+11\Rightarrow6x=18\Rightarrow x=3$; $y=5$.`], ans: "$(3,5)$" },
  { title: "Infinitely many solutions", q: String.raw`Solve $x=2-3y$ and $2x+6y=4$.`,
    steps: [String.raw`$2(2-3y)+6y=4\Rightarrow4=4$ (always true).`, "Both equations describe the same line."], ans: "infinitely many solutions" },
  { title: "A problem", q: String.raw`The sum of two numbers is $52$. The larger is $4$ more than three times the smaller. Find the numbers.`,
    steps: [String.raw`$x+y=52$, $y=3x+4$.`, String.raw`$x+3x+4=52\Rightarrow x=12$; $y=40$.`], ans: "12 and 40" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Solve $y=2x+1$ and $x+y=7$.`, recap: "y = 2x + 1, x + y = 7.", ans: "$(2,5)$" },
  { level: 1, q: String.raw`Solve $x=y-4$ and $2x+y=1$.`, recap: "x = y − 4, 2x + y = 1.", ans: "$(-1,3)$" },
  { level: 1, q: String.raw`Solve $y=-3x+2$ and $y=x-6$.`, recap: "Two expressions for y.", ans: "$(2,-4)$" },
  { level: 2, q: String.raw`Solve $3x-y=10$ and $5x+2y=13$.`, recap: "3x − y = 10, 5x + 2y = 13.", ans: "$(3,-1)$" },
  { level: 2, q: String.raw`Solve $x+4y=-2$ and $3x-2y=8$.`, recap: "x + 4y = −2, 3x − 2y = 8.", ans: String.raw`$(2,-1)$` },
  { level: 2, q: String.raw`Solve $\frac{x}{3}-\frac{y}{2}=1$ and $x-y=4$.`, recap: "Fractions with x − y = 4.", ans: String.raw`$(6,2)$` },
  { level: 2, q: String.raw`Solve $y=\frac12x+4$ and $3x-2y=4$.`, recap: "y = ½x + 4, 3x − 2y = 4.", ans: "$(6,7)$" },
  { level: 2, q: String.raw`Show that $y=2x-3$ and $4x-2y=5$ has no solution.`, recap: "No-solution system.", ans: String.raw`$4x-2(2x-3)=5\Rightarrow6=5$: false` },
  { level: 3, space: 5, q: String.raw`A rectangle's length is $3$ cm less than twice its width, and its perimeter is $54$ cm.
(a) Write a system.
(b) Solve it by substitution.
(c) Find the area.`, recap: "Rectangle perimeter 54.", ans: String.raw`(a) $l=2w-3$, $2l+2w=54$ (b) $w=10$, $l=17$ (c) $170$ cm$^2$` },
  { level: 3, space: 5, q: String.raw`Solve $\frac{x+1}{2}+\frac{y-2}{3}=4$ and $\frac{x}{4}-\frac{y}{6}=0$.`, recap: "Two fractional equations.", ans: String.raw`second: $3x=2y$; first: $3x+2y=25$; $x=\frac{25}{6}$, $y=\frac{25}{4}$` },
  { level: 3, space: 5, q: String.raw`For what value of $a$ does $y=ax+2$ and $3x+y=8$ have the solution with $x=2$? Find $y$ too.`, recap: "Find a.", ans: String.raw`$y=8-6=2$; $2=2a+2\Rightarrow a=0$` },
  { level: 3, space: 5, q: String.raw`Tickets for a game cost \$$12$ for adults and \$$5$ for children. $250$ tickets brought in \$$2230$. Use substitution to find how many of each were sold, and check.`, recap: "Game tickets.", ans: String.raw`$a+c=250$, $12a+5c=2230$: $7a=980$, $a=140$, $c=110$; check $1680+550=2230$` },
  { level: 3, space: 5, q: "Explain when substitution is the best method and when it is not. Give one system of each kind.", recap: "When to use substitution.", ans: "best when a variable is isolated or has coefficient ±1 (e.g. y = 2x + 1, 3x + y = 6); awkward when all coefficients are large (e.g. 3x + 4y = 7, 5x − 6y = 2)" },
];

export const WS = {
  code: "1.3",
  title: "Solving by Substitution",
  bigideas: String.raw`Substitution turns a system into one equation in one variable. Isolate a variable (ideally one with coefficient $\pm1$), substitute the expression --- in brackets --- into the other equation, solve, back-substitute and check. A false statement means no solution; a true statement such as $4=4$ means infinitely many.`,
  goals: ["Isolate a variable.", "Substitute and solve.", "Back-substitute and check.", "Handle fractions and special cases.", "Solve problems by substitution."],
  curriculum: "AG1",
  vocab: [["Substitute", "replace a variable by an equal expression"], ["Back-substitute", "use the first value to find the second"], ["Exact solution", "found algebraically"]],
  hook: String.raw`Write $y=2x$ and $x+y=12$ on the board. Ask: “If $y$ is always double $x$, what are they if they add to 12?” Students answer by reasoning — then formalize it as substitution.`,
  concepts: [
    ["1. The steps", String.raw`Isolate $\to$ substitute (brackets) $\to$ solve $\to$ back-substitute $\to$ check in both originals.`],
    ["2. Choosing the variable", String.raw`Pick a variable with coefficient $1$ or $-1$ to avoid fractions; if none, consider elimination.
${planeT({ view: { xmin: -2, xmax: 6, ymin: -8, ymax: 4 }, lines: [{ m: -4, b: 2, color: "blue" }, { m: 1.5, b: -9, color: "red" }], points: [{ x: 2, y: -6, label: "(2, −6)", color: "green" }], step: { x: 1, y: 2 } }, 4.5, "4x + y = 2 and 3x − 2y = 18 meet at (2, −6).")}`],
    ["3. Special cases", String.raw`False statement (e.g. $6=5$): parallel lines, no solution. True statement (e.g. $4=4$): same line, infinitely many.`],
  ],
  tips: ["Brackets around the substituted expression prevent sign errors.", "Substitute into the OTHER equation.", "Students forget to find the second variable.", "Clear fractions before isolating.", "Check in both original equations."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
