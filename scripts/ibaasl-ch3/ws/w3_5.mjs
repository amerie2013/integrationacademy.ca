// IB AA SL Worksheet 3.5 — Factorising and Completing the Square (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "A trinomial", q: S`Solve $x^2+3x-10=0$.`,
    steps: [S`$(x+5)(x-2)=0$.`], ans: S`$x=-5$ or $2$` },
  { title: "Difference of squares", q: S`Solve $x^2-16=0$.`,
    steps: [S`$(x-4)(x+4)=0$.`], ans: S`$x=\pm4$` },
  { title: "Do not divide by x", q: S`Solve $5x^2=20x$.`,
    steps: [S`$5x^2-20x=0\Rightarrow5x(x-4)=0$.`], ans: S`$x=0$ or $4$` },
  { title: "a ≠ 1", q: S`Solve $3x^2-10x-8=0$.`,
    steps: [S`$ac=-24$: $-12$ and $2$. $3x^2-12x+2x-8=3x(x-4)+2(x-4)$.`, S`$(3x+2)(x-4)=0$.`], ans: S`$x=-\frac23$ or $4$` },
  { title: "Completing the square", q: S`Solve $x^2+4x-3=0$ by completing the square.`,
    steps: [S`$(x+2)^2-4-3=0\Rightarrow(x+2)^2=7$.`], ans: S`$x=-2\pm\sqrt7$` },
  { title: "No real roots", q: S`Write $x^2-6x+13$ in completed-square form and explain why $x^2-6x+13=0$ has no real roots.`,
    fig: F({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 14 }, curves: [{ f: (x) => x * x - 6 * x + 13 }], points: [pt(3, 4, null, "amber")] }),
    steps: [S`$(x-3)^2+4$.`, S`A square is never negative, so the expression is at least 4.`], ans: S`$(x-3)^2+4\ge4>0$` },
  { title: "Completing the square with a ≠ 1", q: S`Write $3x^2+12x+5$ in vertex form.`,
    steps: [S`$3(x^2+4x)+5=3\big((x+2)^2-4\big)+5$.`], ans: S`$3(x+2)^2-7$; vertex $(-2,-7)$` },
  { title: "Solving with a ≠ 1", q: S`Solve $2x^2-4x-5=0$ by completing the square.`,
    steps: [S`$2(x-1)^2-2-5=0\Rightarrow(x-1)^2=3.5$.`], ans: S`$x=1\pm\sqrt{3.5}$` },
  { title: "A garden path", q: S`A square garden of side $x$ m has a 2 m path all around it. The total area is 100 m². Find $x$.`,
    steps: [S`$(x+4)^2=100\Rightarrow x+4=10$ (positive).`], ans: S`$x=6$` },
];

const PROBLEMS = [
  { level: 1, q: S`Solve $x^2+7x+12=0$.`, recap: "Trinomial.", ans: S`$-3$, $-4$` },
  { level: 1, q: S`Solve $x^2-25=0$.`, recap: "Difference of squares.", ans: S`$\pm5$` },
  { level: 1, q: S`Solve $x^2+5x=0$.`, recap: "Common factor.", ans: S`$0$, $-5$` },
  { level: 2, q: S`Solve $2x^2+x-6=0$.`, recap: "a ≠ 1.", ans: S`$1.5$, $-2$` },
  { level: 2, q: S`Write $x^2-8x+3$ in the form $(x+p)^2+q$.`, recap: "Complete the square.", ans: S`$(x-4)^2-13$` },
  { level: 2, q: S`Solve $x^2-2x-4=0$ by completing the square.`, recap: "Exact roots.", ans: S`$1\pm\sqrt5$` },
  { level: 2, q: S`Solve $4x^2-9=0$.`, recap: "Difference of squares.", ans: S`$\pm1.5$` },
  { level: 2, q: S`Find the vertex of $y=x^2+5x+1$ by completing the square.`, recap: "Vertex.", ans: S`$(-2.5,-5.25)$`,
    fig: F({ view: { xmin: -6, xmax: 2, ymin: -6, ymax: 4 } }) },
  { level: 3, space: 5, q: S`Write $2x^2+12x+11$ in vertex form and solve $2x^2+12x+11=0$.`, recap: "a ≠ 1 completing the square.", ans: S`$2(x+3)^2-7$; $x=-3\pm\sqrt{3.5}$` },
  { level: 3, space: 4, q: "The product of two consecutive positive integers is 132. Find them.", recap: "Word problem.", ans: "11 and 12" },
  { level: 3, space: 4, q: S`Solve $(x-1)(x+3)=12$.`, recap: "Expand first.", ans: S`$x^2+2x-15=0$: $3$, $-5$` },
  { level: 3, space: 4, q: S`Show that $x^2-4x+9>0$ for every real $x$.`, recap: "Always positive.", ans: S`$(x-2)^2+5\ge5$`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 10 }, curves: [{ f: (x) => x * x - 4 * x + 9 }] }) },
  { level: 3, space: 4, q: S`$x^2+px+q=(x-3)^2+2$ for every $x$. Find $p$ and $q$.`, recap: "Match coefficients.", ans: S`$p=-6$, $q=11$` },
];

export const WS = {
  code: "3.5",
  title: "Factorising and Completing the Square",
  bigideas: S`Rearrange to $=0$, factorise and set each factor to zero (zero-product property). Use common factors, the difference of two squares, and splitting the middle term when $a\ne1$. Completing the square, $x^2+bx+c=\left(x+\frac b2\right)^2-\left(\frac b2\right)^2+c$, always works, gives exact roots, and reveals the vertex.`,
  goals: ["Solve by factorising.", "Use special factorisations.", "Complete the square.", "Find exact roots and vertices."],
  curriculum: "SL 2.6, SL 2.7",
  vocab: [["Zero-product property", S`$AB=0\Rightarrow A=0$ or $B=0$`], ["Difference of squares", S`$A^2-B^2=(A-B)(A+B)$`], ["Completing the square", S`add and subtract $\left(\frac b2\right)^2$`]],
  hook: "Give students algebra tiles (or a sketch) for x² + 6x and ask how many unit squares make it a perfect square.",
  concepts: [
    ["1. Factorising", S`$x^2+x-12=(x+4)(x-3)$; $3x^2-5x-2=(3x+1)(x-2)$.`],
    ["2. Completing the square", S`${F({ view: { xmin: -5, xmax: 1, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x * x + 4 * x + 1 }], points: [pt(-2, -3, null, "amber")] }, 5)} $x^2+4x+1=(x+2)^2-3$.`],
    ["3. Which method?", "Nice integer factors → factorise; otherwise complete the square or use the formula."],
  ],
  tips: ["Set = 0 first.", "Never divide by x.", "Square roots give ±.", "Factor a out first when completing the square.", "Expand to check."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
