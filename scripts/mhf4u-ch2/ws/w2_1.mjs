// MHF4U Worksheet 2.1 — Dividing Polynomials and the Remainder Theorem (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Long division", q: String.raw`Divide $x^3+2x^2-5x+7$ by $x-2$.`,
    steps: [String.raw`$x^3\div x=x^2$; subtract $x^3-2x^2$: $4x^2-5x$. Then $4x$; subtract $4x^2-8x$: $3x+7$.`, String.raw`Then $3$; subtract $3x-6$: remainder $13$.`], ans: String.raw`$x^3+2x^2-5x+7=(x-2)(x^2+4x+3)+13$` },
  { title: "Synthetic division with a missing term", q: String.raw`Divide $3x^3-4x+1$ by $x+1$.`,
    steps: [String.raw`Coefficients $3, 0, -4, 1$; $b=-1$.`, String.raw`$3;\ 0-3=-3;\ -4+3=-1;\ 1+1=2$.`], ans: String.raw`$Q=3x^2-3x-1$, $R=2$` },
  { title: "Dividing by a quadratic", q: String.raw`Divide $x^3+x^2-3x+5$ by $x^2+2x-1$.`,
    steps: [String.raw`$x$: subtract $x^3+2x^2-x$ → $-x^2-2x+5$.`, String.raw`$-1$: subtract $-x^2-2x+1$ → $4$.`], ans: String.raw`$Q=x-1$, $R=4$` },
  { title: "Remainder theorem", q: String.raw`Find the remainder when $2x^4-x^3+3$ is divided by $x-1$.`,
    steps: [String.raw`$P(1)=2-1+3=4$.`], ans: "4" },
  { title: "Divisor ax + b", q: String.raw`Find the remainder when $4x^3+2x^2-x+3$ is divided by $2x+1$.`,
    steps: [String.raw`$2x+1=0\Rightarrow x=-\tfrac12$.`, String.raw`$4\left(-\tfrac18\right)+2\left(\tfrac14\right)+\tfrac12+3=-\tfrac12+\tfrac12+\tfrac12+3=3.5$.`], ans: String.raw`$\tfrac72$` },
  { title: "Unknown coefficient", q: String.raw`$kx^3-2x^2+x-4$ leaves remainder $-30$ when divided by $x+2$. Find $k$.`,
    steps: [String.raw`$P(-2)=-8k-8-2-4=-8k-14$.`, String.raw`$-8k-14=-30\Rightarrow k=2$.`], ans: "k = 2" },
  { title: "Rebuild the dividend", q: String.raw`Dividing $P(x)$ by $x+3$ gives quotient $x^2-x+2$ and remainder $5$. Find $P(x)$.`,
    steps: [String.raw`$P(x)=(x+3)(x^2-x+2)+5=x^3-x^2+2x+3x^2-3x+6+5$.`], ans: String.raw`$P(x)=x^3+2x^2-x+11$` },
  { title: "Remainder on the graph", q: String.raw`For $P(x)=x^3-2x^2-x+4$, find the remainder on division by $x-2$ and mark it on the graph.`,
    fig: F({ view: { xmin: -2, xmax: 3, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 2 * x * x - x + 4 }], points: [pt(2, 2)], step: { x: 1, y: 1 } }),
    steps: [String.raw`$P(2)=8-8-2+4=2$.`], ans: "remainder 2: the point (2, 2)" },
  { title: "Synthetic division by 2x − 3", q: String.raw`Divide $2x^3-3x^2+4x-5$ by $2x-3$.`,
    steps: [String.raw`Use $b=\tfrac32$: $2;\ -3+3=0;\ 4+0=4;\ -5+6=1$. Quotient for $x-\tfrac32$: $2x^2+4$.`, String.raw`Divide that quotient by 2 for the divisor $2x-3$: $x^2+2$.`], ans: String.raw`$2x^3-3x^2+4x-5=(2x-3)(x^2+2)+1$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the remainder when $x^3-x^2+2x-3$ is divided by $x-1$.`, recap: "Remainder theorem.", ans: "−1" },
  { level: 1, q: String.raw`Use synthetic division: $(x^2-3x-10)\div(x-5)$.`, recap: "Synthetic division.", ans: String.raw`$x+2$, remainder 0` },
  { level: 1, q: String.raw`In $P(x)=(x-4)(x^2+1)+3$, name the divisor, quotient and remainder, and find $P(4)$.`, recap: "Division statement.", ans: String.raw`$x-4$; $x^2+1$; $3$; $P(4)=3$` },
  { level: 2, q: String.raw`Divide $2x^3+5x^2-x+6$ by $x+3$.`, recap: "Synthetic division.", ans: String.raw`$Q=2x^2-x+2$, $R=0$` },
  { level: 2, q: String.raw`Divide $x^4-3x^3+2x-1$ by $x-2$.`, recap: "Missing term.", ans: String.raw`$Q=x^3-x^2-2x-2$, $R=-5$` },
  { level: 2, q: String.raw`Find the remainder when $6x^3+x^2-5x+2$ is divided by $3x-1$.`, recap: "Divisor ax − b.", ans: String.raw`$P(\tfrac13)=\tfrac23$` },
  { level: 2, q: String.raw`$x^3+kx^2+x-2$ leaves remainder 3 when divided by $x-1$. Find $k$.`, recap: "Unknown coefficient.", ans: "k = 3" },
  { level: 2, q: String.raw`Use the graph of $y=P(x)$ to find the remainder when $P(x)$ is divided by $x+1$.`, recap: "Read the remainder.", ans: "P(−1) = −3",
    fig: F({ view: { xmin: -2.5, xmax: 2.5, ymin: -8, ymax: 4 }, curves: [{ f: (x) => x ** 3 + x * x - 2 * x - 5 }], points: [pt(-1, -3)], step: { x: 1, y: 1 } }) },
  { level: 3, space: 5, q: String.raw`$P(x)=x^3+ax^2+bx+2$ leaves remainder 6 when divided by $x-1$ and remainder 0 when divided by $x+2$. Find $a$ and $b$.`, recap: "Two conditions.", ans: String.raw`$a+b=3$, $2a-b=3$: $a=2$, $b=1$` },
  { level: 3, space: 5, q: String.raw`$P(1)=2$ and $P(3)=8$. Find the remainder when $P(x)$ is divided by $(x-1)(x-3)$.`, recap: "Quadratic divisor.", ans: String.raw`$mx+n$: $m+n=2$, $3m+n=8$: $3x-1$` },
  { level: 3, space: 5, q: String.raw`Explain why $x^n-1$ is divisible by $x-1$ for every whole number $n$, and find the remainder of $x^n+1$ divided by $x+1$ for odd and even $n$.`, recap: "General n.", ans: "P(1) = 0 always; x + 1 leaves (−1)ⁿ + 1: 0 for odd n, 2 for even n" },
  { level: 3, space: 5, q: String.raw`Use synthetic division to divide $x^3-1$ by $x-1$ and $x^3+8$ by $x+2$. What patterns do the quotients show?`, recap: "Cubes.", ans: String.raw`$x^2+x+1$ and $x^2-2x+4$: $a^3\mp b^3=(a\mp b)(a^2\pm ab+b^2)$` },
  { level: 3, space: 5, q: String.raw`A box has volume $V(x)=2x^3+7x^2+2x-3$ and length $x+3$. Find expressions for the other two dimensions and sketch $V$ for $x>\tfrac12$.`, recap: "Box dimensions.", ans: String.raw`$V\div(x+3)=2x^2+x-1=(2x-1)(x+1)$`, fig: gridT({ xmin: 0, xmax: 3, ymin: 0, ymax: 120 }, { x: 0.5, y: 20 }) },
];

export const WS = {
  code: "2.1",
  title: "Dividing Polynomials and the Remainder Theorem",
  bigideas: String.raw`Dividing $P(x)$ by $D(x)$ gives $P(x)=D(x)Q(x)+R(x)$ with $\deg R<\deg D$. Long division works for any divisor; synthetic division is a shortcut for $x-b$ (bring down, multiply by $b$, add). The remainder theorem: dividing by $x-b$ leaves $P(b)$, and dividing by $ax-b$ leaves $P\!\left(\tfrac ba\right)$. Missing powers need zero placeholders.`,
  goals: ["Divide by long and synthetic division.", "Write the division statement.", "Use the remainder theorem.", "Find unknown coefficients."],
  curriculum: "C3.1, C3.7",
  vocab: [["Division statement", "$P(x)=D(x)Q(x)+R(x)$"], ["Remainder theorem", "remainder of $P\\div(x-b)$ is $P(b)$"], ["Synthetic division", "coefficients only, divisor $x-b$"]],
  hook: String.raw`Divide 1331 by 11 the long way. Now divide $x^3+3x^2+3x+1$ by $x+1$. What do you notice when $x=10$?`,
  concepts: [
    ["1. The remainder is a height", String.raw`$P(b)$ is the remainder, so it is the y-value at $x=b$.
${F({ view: { xmin: -3, xmax: 3, ymin: -6, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 2 * x + 1 }], points: [pt(2, 5), pt(-1, 2)], step: { x: 1, y: 1 } })}`],
    ["2. Synthetic division", String.raw`Bring down, multiply by $b$, add; the last entry is $R$.`],
    ["3. Divisor ax − b", String.raw`Use $b/a$, then divide the quotient by $a$.`],
  ],
  tips: ["x + 3 means b = −3.", "Write 0 for missing powers.", "Synthetic division adds; long division subtracts.", "Check: D·Q + R = P.", "Remainder degree < divisor degree."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
