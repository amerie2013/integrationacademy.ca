// MCF3M Worksheet 3.3 — Solving Quadratic Equations by Factoring (teacher edition)
import { F, pt } from "../../ws/figT.mjs";
const S = String.raw;
const Z = (f, view, zeros, step) => F({ view, curves: [{ f, color: "violet" }], points: zeros.map((z) => pt(z, 0, null, "amber")), step });

const EXAMPLES = [
  { title: "Zero-product property", q: S`Solve $(x-7)(2x+3)=0$.`,
    fig: Z((x) => (x - 7) * (2 * x + 3), { xmin: -3, xmax: 9, ymin: -40, ymax: 20 }, [7, -1.5], { x: 1, y: 10 }),
    steps: [S`\textbf{Rule:} if $ab=0$ then $a=0$ or $b=0$.`, S`$x-7=0\Rightarrow x=7$; $2x+3=0\Rightarrow x=-\tfrac32$.`, S`\textbf{Verify:} each makes one factor zero \checkmark`],
    ans: S`$x=7$ or $x=-\frac32$` },
  { title: "Common factor", q: S`Solve $4x^2=20x$.`,
    fig: Z((x) => 4 * x * x - 20 * x, { xmin: -1, xmax: 6, ymin: -28, ymax: 10 }, [0, 5], { x: 1, y: 5 }),
    steps: [S`\textbf{Do not divide by $x$.} Rearrange: $4x^2-20x=0$.`, S`$4x(x-5)=0\Rightarrow x=0$ or $x=5$.`, S`\textbf{Verify:} $4(25)=100=20(5)$ \checkmark`],
    ans: S`$x=0$ or $x=5$` },
  { title: "Simple trinomial", q: S`Solve $x^2+3x=28$.`,
    fig: Z((x) => x * x + 3 * x - 28, { xmin: -9, xmax: 6, ymin: -32, ymax: 12 }, [-7, 4], { x: 1, y: 4 }),
    steps: [S`$x^2+3x-28=0$.`, S`$(x+7)(x-4)=0$.`, S`$x=-7$ or $x=4$. \textbf{Verify:} $16+12=28$ \checkmark`],
    ans: S`$x=-7$ or $x=4$` },
  { title: "Complex trinomial", q: S`Solve $3x^2-7x=6$.`,
    fig: Z((x) => 3 * x * x - 7 * x - 6, { xmin: -2, xmax: 4, ymin: -12, ymax: 10 }, [3, -2 / 3], { x: 1, y: 2 }),
    steps: [S`$3x^2-7x-6=0$; $ac=-18$, $b=-7$: $-9$ and $2$.`, S`$3x^2-9x+2x-6=3x(x-3)+2(x-3)=(x-3)(3x+2)$.`, S`$x=3$ or $x=-\tfrac23$. \textbf{Verify:} $27-21=6$ \checkmark`],
    ans: S`$x=3$ or $x=-\frac23$` },
  { title: "Difference of squares", q: S`Solve $25x^2-16=0$.`,
    fig: Z((x) => 25 * x * x - 16, { xmin: -1.5, xmax: 1.5, ymin: -18, ymax: 15 }, [0.8, -0.8], { x: 0.5, y: 5 }),
    steps: [S`$(5x-4)(5x+4)=0$.`, S`$x=\pm\tfrac45$.`, S`\textbf{Verify:} $25(0.64)=16$ \checkmark`],
    ans: S`$x=\pm0.8$` },
  { title: "Perfect square", q: S`Solve $9x^2-12x+4=0$.`,
    fig: Z((x) => (3 * x - 2) ** 2, { xmin: -0.5, xmax: 1.8, ymin: -1, ymax: 6 }, [2 / 3], { x: 0.5, y: 1 }),
    steps: [S`$(3x-2)^2=0$.`, S`$x=\tfrac23$ (double root).`, S`The graph touches the axis at $\tfrac23$ \checkmark`],
    ans: S`$x=\frac23$` },
  { title: "Product equals a number", q: S`Solve $(x+1)(x-4)=6$.`,
    fig: F({ view: { xmin: -4, xmax: 7, ymin: -8, ymax: 14 }, curves: [{ f: (x) => (x + 1) * (x - 4), color: "violet" }], lines: [{ m: 0, b: 6, color: "green", dash: true }], points: [pt(5, 6, null, "amber"), pt(-2, 6, null, "amber")], step: { x: 1, y: 2 } }),
    steps: [S`\textbf{Not zero on the right:} expand: $x^2-3x-4=6\Rightarrow x^2-3x-10=0$.`, S`$(x-5)(x+2)=0\Rightarrow x=5$ or $x=-2$.`, S`\textbf{Verify:} $(6)(1)=6$ \checkmark; $(-1)(-6)=6$ \checkmark`],
    ans: S`$x=5$ or $x=-2$` },
  { title: "Clear fractions", q: S`Solve $\tfrac14x^2-x=3$.`,
    fig: Z((x) => x * x / 4 - x - 3, { xmin: -4, xmax: 8, ymin: -5, ymax: 5 }, [6, -2]),
    steps: [S`Multiply by $4$: $x^2-4x=12\Rightarrow x^2-4x-12=0$.`, S`$(x-6)(x+2)=0$.`, S`$x=6$ or $x=-2$. \textbf{Verify:} $9-6=3$ \checkmark`],
    ans: S`$x=6$ or $x=-2$` },
  { title: "Large coefficients", q: S`Solve $50x^2=35x+15$.`,
    fig: Z((x) => 50 * x * x - 35 * x - 15, { xmin: -0.8, xmax: 1.4, ymin: -25, ymax: 20 }, [1, -0.3], { x: 0.5, y: 5 }),
    steps: [S`$50x^2-35x-15=0\Rightarrow5(10x^2-7x-3)=0$.`, S`$ac=-30$, $b=-7$: $-10$ and $3$: $(x-1)(10x+3)=0$.`, S`$x=1$ or $x=-0.3$. \textbf{Verify:} $50=35+15$ \checkmark`],
    ans: S`$x=1$ or $x=-0.3$` },
];

const PROBLEMS = [
  { level: 1, q: S`Solve $(x+9)(x-2)=0$.`, ans: S`$-9$, $2$` },
  { level: 1, q: S`Solve $x^2-8x=0$.`, ans: S`$0$, $8$` },
  { level: 1, q: S`Solve $x^2+11x+30=0$.`, ans: S`$-5$, $-6$` },
  { level: 2, q: S`Solve $x^2=5x+24$.`, ans: S`$8$, $-3$` },
  { level: 2, q: S`Solve $2x^2+7x+3=0$.`, ans: S`$-\frac12$, $-3$` },
  { level: 2, q: S`Solve $16x^2=9$.`, ans: S`$\pm\frac34$` },
  { level: 2, q: S`Solve $x(x-5)=14$.`, ans: S`$7$, $-2$` },
  { level: 2, q: S`Solve $4x^2+4x+1=0$.`, ans: S`$-\frac12$` },
  { level: 3, space: 5, q: S`Solve $6x^2=x+15$.`, ans: S`$\frac53$, $-\frac32$` },
  { level: 3, space: 5, q: S`Solve $\frac12x^2+x=12$.`, ans: S`$4$, $-6$` },
  { level: 3, space: 5, q: S`One root of $x^2+bx-36=0$ is $4$. Find $b$ and the other root.`, ans: S`$b=5$; $-9$` },
  { level: 3, space: 5, q: S`Solve $x^4-5x^2+4=0$ and sketch $y=x^4-5x^2+4$ to show the roots.`, fig: F({ view: { xmin: -3, xmax: 3, ymin: -3, ymax: 6 } }), ans: S`$\pm1$, $\pm2$` },
  { level: 3, space: 5, q: S`A student solves $x^2=7x$ by dividing by $x$ and gets $x=7$. Explain the mistake and solve correctly.`, ans: S`division loses $x=0$; $x(x-7)=0$: $0$, $7$` },
];

export const WS = {
  code: "3.3",
  title: "Solving Quadratic Equations by Factoring",
  bigideas: S`If a product equals zero, one of its factors must be zero. So to solve a quadratic equation, rearrange it to $ax^2+bx+c=0$, factor the left side completely, and set each factor equal to zero. The roots are the $x$-intercepts of the graph, and every root should be verified in the original equation.`,
  goals: ["Use the zero-product property.", "Rearrange and factor before solving.", "Solve with every factoring type.", "Verify roots."],
  curriculum: "A1.4, A1.5, A1.8",
  vocab: [["Zero-product property", "$ab=0\\Rightarrow a=0$ or $b=0$"], ["Root", "solution"], ["Double root", "a repeated root"], ["Verify", "substitute into the original"]],
  hook: S`If $a\times b=0$, what can you say about $a$ and $b$? If $a\times b=12$, can you say the same?`,
  concepts: [
    ["1. The method", S`(1) Rearrange so one side is $0$. (2) Factor completely. (3) Set each factor with a variable to $0$. (4) Solve. (5) Verify.
${Z((x) => x * x - x - 12, { xmin: -5, xmax: 6, ymin: -14, ymax: 8 }, [-3, 4], { x: 1, y: 2 })}`],
    ["2. Pitfalls", S`Never divide by $x$ (a root is lost). A product equal to a non-zero number must be expanded and rearranged first. Constant factors are never zero.`],
  ],
  tips: ["Ask for the verification step every time.", "Show the graph alongside to connect roots and intercepts.", "Use the curriculum example $100x^2=115x+35$ as a class challenge."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
