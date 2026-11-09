// MCF3M Worksheet 4.2 — Completing the Square (teacher edition)
import { F, pt, svgT } from "../../ws/figT.mjs";
import { areaBox } from "../../figs.mjs";
const S = String.raw;
const G = (f, view, pts, step) => F({ view, curves: [{ f, color: "violet" }], points: pts, step });

const EXAMPLES = [
  { title: "The missing corner", q: S`What must be added to $x^2+10x$ to make a perfect square? Show with an area model.`,
    fig: svgT(areaBox(["x", "+5"], ["x", "+5"], [["x²", "5x"], ["5x", "25"]], "x² + 10x + 25 = (x + 5)²"), 5.2),
    steps: [S`Split $10x$ into two strips of $5x$ on two sides of the $x^2$ square.`, S`The missing corner is $5\times5=25=\left(\frac{10}2\right)^2$.`, S`$x^2+10x+25=(x+5)^2$.`],
    ans: S`$25$` },
  { title: "a = 1", q: S`Write $y=x^2-8x+11$ in vertex form.`,
    fig: G((x) => x * x - 8 * x + 11, { xmin: 0, xmax: 8, ymin: -6, ymax: 12 }, [pt(4, -5, null, "amber"), pt(0, 11)], { x: 1, y: 2 }),
    steps: [S`$\left(\frac{-8}2\right)^2=16$: $y=x^2-8x+16-16+11$.`, S`$y=(x-4)^2-5$.`, S`\textbf{Check:} $x^2-8x+16-5$ \checkmark; vertex $(4,-5)$.`],
    ans: S`$y=(x-4)^2-5$` },
  { title: "Odd b", q: S`Write $y=x^2+3x-1$ in vertex form.`,
    fig: G((x) => x * x + 3 * x - 1, { xmin: -5, xmax: 2, ymin: -4, ymax: 6 }, [pt(-1.5, -3.25, null, "amber")], { x: 1, y: 1 }),
    steps: [S`$\left(\frac32\right)^2=\frac94$.`, S`$y=\left(x+\frac32\right)^2-\frac94-1=\left(x+\frac32\right)^2-\frac{13}4$.`, S`Vertex $(-1.5,-3.25)$ \checkmark`],
    ans: S`$y=(x+1.5)^2-3.25$` },
  { title: "a = 2", q: S`Write $y=2x^2+12x+10$ in vertex form.`,
    fig: G((x) => 2 * x * x + 12 * x + 10, { xmin: -7, xmax: 1, ymin: -10, ymax: 12 }, [pt(-3, -8, null, "amber"), pt(0, 10)], { x: 1, y: 2 }),
    steps: [S`Factor $2$ from the $x$-terms: $2(x^2+6x)+10$.`, S`$2(x^2+6x+9-9)+10=2(x+3)^2-18+10$.`, S`$y=2(x+3)^2-8$. \textbf{Check:} $2(9)-8=10$ \checkmark`],
    ans: S`$y=2(x+3)^2-8$` },
  { title: "a negative", q: S`Write $y=-x^2+10x-16$ in vertex form and give the maximum.`,
    fig: G((x) => -x * x + 10 * x - 16, { xmin: 0, xmax: 10, ymin: -17, ymax: 11 }, [pt(5, 9, null, "amber"), pt(2, 0), pt(8, 0)], { x: 1, y: 2 }),
    steps: [S`$-(x^2-10x)-16=-(x^2-10x+25-25)-16$.`, S`$=-(x-5)^2+25-16=-(x-5)^2+9$.`, S`Maximum $9$ at $x=5$.`],
    ans: S`$y=-(x-5)^2+9$; max $9$` },
  { title: "a = ½", q: S`Write $y=\tfrac12x^2-x+3$ in vertex form.`,
    fig: G((x) => 0.5 * x * x - x + 3, { xmin: -3, xmax: 5, ymin: -1, ymax: 8 }, [pt(1, 2.5, null, "amber"), pt(0, 3)], { x: 1, y: 1 }),
    steps: [S`$\tfrac12(x^2-2x)+3$ since $-1\div\tfrac12=-2$.`, S`$\tfrac12(x^2-2x+1-1)+3=\tfrac12(x-1)^2-\tfrac12+3$.`, S`$y=\tfrac12(x-1)^2+2.5$.`],
    ans: S`$y=\frac12(x-1)^2+2.5$` },
  { title: "a = 0.75", q: S`Write $y=0.75x^2+6x+10$ in vertex form.`,
    fig: G((x) => 0.75 * x * x + 6 * x + 10, { xmin: -9, xmax: 1, ymin: -3, ymax: 12 }, [pt(-4, -2, null, "amber"), pt(0, 10)], { x: 1, y: 2 }),
    steps: [S`$6\div0.75=8$: $0.75(x^2+8x)+10$.`, S`$0.75(x^2+8x+16-16)+10=0.75(x+4)^2-12+10$.`, S`$y=0.75(x+4)^2-2$.`],
    ans: S`$y=0.75(x+4)^2-2$` },
  { title: "Sketch from standard form", q: S`Sketch $y=x^2+2x-8$: vertex, intercepts, where $y>0$.`,
    fig: G((x) => x * x + 2 * x - 8, { xmin: -6, xmax: 4, ymin: -10, ymax: 8 }, [pt(-1, -9, null, "amber"), pt(-4, 0), pt(2, 0), pt(0, -8)], { x: 1, y: 2 }),
    steps: [S`$y=(x+1)^2-9$: vertex $(-1,-9)$.`, S`Zeros: $(x+1)^2=9\Rightarrow x=2,-4$; $y$-int $-8$.`, S`$y>0$ for $x<-4$ or $x>2$.`],
    ans: S`vertex $(-1,-9)$; zeros $-4$, $2$` },
  { title: "Optimal area", q: S`A pen against a wall has area $A=-2x^2+36x$. Find the maximum area.`,
    fig: G((x) => -2 * x * x + 36 * x, { xmin: -1, xmax: 19, ymin: -10, ymax: 180 }, [pt(9, 162, null, "amber")], { x: 2, y: 20 }),
    steps: [S`$-2(x^2-18x+81-81)=-2(x-9)^2+162$.`, S`Maximum $162$ m$^2$ at $x=9$ m.`, S`\textbf{Check:} $-162+324=162$ \checkmark`],
    ans: S`$162$ m$^2$ at $x=9$` },
];

const PROBLEMS = [
  { level: 1, q: S`What number completes the square for $x^2-12x$?`, ans: S`$36$` },
  { level: 1, q: S`Write $y=x^2+4x+9$ in vertex form.`, ans: S`$(x+2)^2+5$` },
  { level: 1, q: S`Write $y=x^2-6x-2$ in vertex form.`, ans: S`$(x-3)^2-11$` },
  { level: 2, q: S`Write $y=3x^2-6x+8$ in vertex form.`, ans: S`$3(x-1)^2+5$` },
  { level: 2, q: S`Write $y=-2x^2-8x+1$ in vertex form and give the maximum.`, ans: S`$-2(x+2)^2+9$; $9$` },
  { level: 2, q: S`Write $y=x^2+5x+4$ in vertex form.`, ans: S`$(x+2.5)^2-2.25$` },
  { level: 2, q: S`Write $y=\frac12x^2+2x-1$ in vertex form.`, ans: S`$\frac12(x+2)^2-3$` },
  { level: 2, q: S`Sketch $y=x^2-2x-3$ after completing the square, labelling vertex and zeros.`, fig: F({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 6 } }), ans: S`$(x-1)^2-4$; zeros $-1$, $3$` },
  { level: 3, space: 5, q: S`Write $y=0.25x^2-2x+7$ in vertex form and state the range.`, ans: S`$0.25(x-4)^2+3$; $y\ge3$` },
  { level: 3, space: 5, q: S`Write $y=-\frac13x^2+2x+1$ in vertex form.`, ans: S`$-\frac13(x-3)^2+4$` },
  { level: 3, space: 5, q: S`A ball's height is $h=-5t^2+15t+2$. Complete the square to find its maximum height and when it occurs.`, ans: S`$-5(t-1.5)^2+13.25$: $13.25$ m at $1.5$ s` },
  { level: 3, space: 5, q: S`Find $c$ so that $y=2x^2-8x+c$ has minimum value $3$.`, ans: S`$2(x-2)^2+c-8$: $c=11$` },
  { level: 3, space: 5, q: S`Complete the square on $ax^2+bx$ in general and show that the vertex is at $x=-\frac b{2a}$.`, ans: S`$a\left(x+\frac b{2a}\right)^2-\frac{b^2}{4a}$` },
];

export const WS = {
  code: "4.2",
  title: "Completing the Square",
  bigideas: S`Completing the square turns standard form into vertex form by building a perfect square. For $x^2+bx$, add and subtract $\left(\frac b2\right)^2$. If $a\ne1$, factor $a$ from the $x$-terms first and multiply the subtracted number by $a$ as it leaves the bracket. Vertex form then shows the vertex, the maximum or minimum, and the range.`,
  goals: ["Explain $(b/2)^2$.", "Complete the square for $a=1$ and $a\\ne1$ (including fractions).", "Sketch from standard form.", "Find optimal values."],
  curriculum: "A2.8, A2.11",
  vocab: [["Perfect square", "$(x+p)^2$"], ["Complete the square", "add and subtract $(b/2)^2$"], ["Vertex form", "$a(x-h)^2+k$"], ["Optimal value", "max or min"]],
  hook: S`Use algebra tiles: one $x^2$ tile and six $x$ tiles. How many unit tiles complete a square? What is its side?`,
  concepts: [
    ["1. The idea", S`$x^2+bx+\left(\frac b2\right)^2=\left(x+\frac b2\right)^2$. Adding and subtracting keeps the value the same.
${svgT(areaBox(["x", "+3"], ["x", "+3"], [["x²", "3x"], ["3x", "9"]], "x² + 6x + 9"), 5)}`],
    ["2. Steps for $a\\ne1$", S`(1) $a(x^2+\frac bax)+c$. (2) Inside, add and subtract $\left(\frac b{2a}\right)^2$. (3) Move the subtracted term out, multiplied by $a$. (4) Simplify. (5) Expand to check.`],
  ],
  tips: ["Halve then square.", "Watch the sign inside the bracket.", "Always check by expanding."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
