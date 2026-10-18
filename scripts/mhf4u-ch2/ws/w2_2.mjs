// MHF4U Worksheet 2.2 — The Factor Theorem (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Test a binomial", q: String.raw`Is $x+2$ a factor of $x^3+x^2-4x-4$?`,
    steps: [String.raw`$P(-2)=-8+4+8-4=0$: yes.`], ans: "yes" },
  { title: "Integer candidates", q: String.raw`List the possible integer zeros of $x^3-4x^2+x+6$ and factor it.`,
    steps: [String.raw`Factors of 6: $\pm1,\pm2,\pm3,\pm6$.`, String.raw`$P(-1)=-1-4-1+6=0$; divide: $x^2-5x+6=(x-2)(x-3)$.`], ans: String.raw`$(x+1)(x-2)(x-3)$` },
  { title: "A rational zero", q: String.raw`Factor $3x^3+2x^2-7x+2$.`,
    steps: [String.raw`$P(1)=3+2-7+2=0$: divide → $3x^2+5x-2$.`, String.raw`$3x^2+5x-2=(3x-1)(x+2)$.`], ans: String.raw`$(x-1)(3x-1)(x+2)$` },
  { title: "Grouping", q: String.raw`Factor $x^3+3x^2-4x-12$.`,
    steps: [String.raw`$x^2(x+3)-4(x+3)=(x+3)(x^2-4)$.`], ans: String.raw`$(x+3)(x-2)(x+2)$` },
  { title: "A quartic", q: String.raw`Factor $x^4-x^3-7x^2+x+6$.`,
    fig: F({ view: { xmin: -3, xmax: 4, ymin: -14, ymax: 10 }, curves: [{ f: (x) => x ** 4 - x ** 3 - 7 * x * x + x + 6 }], points: [pt(-2, 0), pt(-1, 0), pt(1, 0), pt(3, 0)], step: { x: 1, y: 2 } }),
    steps: [String.raw`$P(1)=1-1-7+1+6=0$ → $x^3-7x-6$.`, String.raw`That has $P(-1)=-1+7-6=0$ → $x^2-x-6=(x-3)(x+2)$.`], ans: String.raw`$(x-1)(x+1)(x-3)(x+2)$` },
  { title: "Unknown coefficient", q: String.raw`Find $k$ so that $x-3$ is a factor of $2x^3-5x^2+kx-3$.`,
    steps: [String.raw`$P(3)=54-45+3k-3=6+3k=0$.`], ans: "k = −2" },
  { title: "No rational zeros", q: String.raw`Show that $x^3-2x-2$ has no rational zeros.`,
    steps: [String.raw`Candidates $\pm1,\pm2$: $P(1)=-3$, $P(-1)=-1$, $P(2)=2$, $P(-2)=-6$.`, String.raw`None is 0, so there is no rational zero (the real zero lies between 1 and 2).`], ans: "no rational zeros" },
  { title: "Difference of squares inside", q: String.raw`Factor $x^4-10x^2+9$.`,
    steps: [String.raw`$(x^2-1)(x^2-9)$, then each difference of squares.`], ans: String.raw`$(x-1)(x+1)(x-3)(x+3)$` },
  { title: "From the graph to the factors", q: String.raw`The graph of a cubic with leading coefficient 2 crosses the x-axis at $-1$, $\tfrac12$ and $2$. Write it in factored form.`,
    fig: F({ view: { xmin: -2, xmax: 3, ymin: -6, ymax: 6 }, curves: [{ f: (x) => (x + 1) * (2 * x - 1) * (x - 2), color: "violet" }], points: [pt(-1, 0), pt(0.5, 0), pt(2, 0)], step: { x: 0.5, y: 1 } }),
    steps: [String.raw`Zero $\tfrac12$ gives the factor $2x-1$, which already supplies the 2.`], ans: String.raw`$(x+1)(2x-1)(x-2)$` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Is $x-1$ a factor of $x^3-6x^2+11x-6$?`, recap: "Factor theorem.", ans: "yes: P(1) = 0" },
  { level: 1, q: String.raw`List the possible integer zeros of $x^3+2x^2-x-10$.`, recap: "Integral zero theorem.", ans: String.raw`$\pm1,\pm2,\pm5,\pm10$` },
  { level: 1, q: String.raw`Which of $\pm1,\pm2$ are zeros of $x^3-3x+2$?`, recap: "Test values.", ans: "1 and −2" },
  { level: 2, q: String.raw`Factor $x^3-2x^2-5x+6$.`, recap: "Factor a cubic.", ans: String.raw`$(x-1)(x-3)(x+2)$` },
  { level: 2, q: String.raw`Factor $2x^3+x^2-13x+6$.`, recap: "Rational zero.", ans: String.raw`$(x-2)(2x-1)(x+3)$` },
  { level: 2, q: String.raw`Factor $x^3-5x^2-4x+20$ by grouping.`, recap: "Grouping.", ans: String.raw`$(x-5)(x-2)(x+2)$` },
  { level: 2, q: String.raw`Find $k$ so that $x+2$ is a factor of $x^3+kx^2-x-2$.`, recap: "Unknown coefficient.", ans: String.raw`$-8+4k+2-2=0$: $k=2$` },
  { level: 2, q: String.raw`Write a cubic in factored form for the graph shown (leading coefficient 1).`, recap: "Graph to factors.", ans: String.raw`$(x+3)(x-1)(x-2)$`,
    fig: F({ view: { xmin: -4, xmax: 3, ymin: -6, ymax: 12 }, curves: [{ f: (x) => (x + 3) * (x - 1) * (x - 2) }], step: { x: 1, y: 2 } }) },
  { level: 3, space: 5, q: String.raw`Factor $x^4+2x^3-13x^2-14x+24$ completely.`, recap: "Quartic.", ans: String.raw`$(x-1)(x+2)(x-3)(x+4)$` },
  { level: 3, space: 5, q: String.raw`Find $a$ and $b$ so that $x^2+x-6$ is a factor of $x^3+ax^2+bx+18$.`, recap: "Two factors.", ans: String.raw`$P(2)=0$, $P(-3)=0$: $a=-2$, $b=-9$ ($(x-2)(x+3)(x-3)$)` },
  { level: 3, space: 5, q: String.raw`Explain how the rational zero theorem limits the candidates for $4x^3-x+15$, and list them.`, recap: "Rational zero theorem.", ans: String.raw`$\pm\frac{1,3,5,15}{1,2,4}$: 24 candidates` },
  { level: 3, space: 5, q: String.raw`When $x^3+px+q$ is divided by $x-1$ and by $x+1$, the remainders are $5$ and $-1$. Find $p$ and $q$, then decide whether $x-2$ is a factor.`, recap: "Combine theorems.", ans: String.raw`$1+p+q=5$, $-1-p+q=-1$: $p=2$, $q=2$; $P(2)=14\ne0$, no` },
  { level: 3, space: 5, q: String.raw`Factor $x^3-27$ and $x^3+64$, and sketch $y=x^3-27$ showing its only x-intercept.`, recap: "Cubes.", ans: String.raw`$(x-3)(x^2+3x+9)$; $(x+4)(x^2-4x+16)$`, fig: gridT({ xmin: -2, xmax: 5, ymin: -30, ymax: 40 }, { x: 1, y: 10 }) },
];

export const WS = {
  code: "2.2",
  title: "The Factor Theorem",
  bigideas: String.raw`$x-b$ is a factor of $P(x)$ exactly when $P(b)=0$; $ax-b$ is a factor when $P\!\left(\tfrac ba\right)=0$. Integer zeros divide the constant term; rational zeros $\tfrac pq$ have $p$ dividing the constant term and $q$ dividing the leading coefficient. Factor a cubic by finding one zero, dividing, and factoring the quadratic quotient. Grouping and special products often save time.`,
  goals: ["Use the factor theorem.", "List integer and rational candidates.", "Factor cubics and quartics completely.", "Find unknown coefficients from factors."],
  curriculum: "C3.1, C3.2",
  vocab: [["Factor theorem", "$x-b$ is a factor ⇔ $P(b)=0$"], ["Rational zero", "$\\tfrac pq$ with $p\\mid$ constant, $q\\mid$ leading coefficient"], ["Grouping", "pair terms with a common binomial"]],
  hook: String.raw`Without dividing, decide whether 7 is a factor of 343 + 1. Now decide whether $x+1$ is a factor of $x^3+1$.`,
  concepts: [
    ["1. Zeros give factors", String.raw`Every x-intercept $b$ gives a factor $x-b$.
${F({ view: { xmin: -3, xmax: 4, ymin: -8, ymax: 8 }, curves: [{ f: (x) => (x + 2) * (x - 1) * (x - 3) }], points: [pt(-2, 0), pt(1, 0), pt(3, 0)], step: { x: 1, y: 2 } })}`],
    ["2. Candidates", String.raw`$\pm\dfrac{\text{factors of the constant}}{\text{factors of the leading coefficient}}$.`],
    ["3. Strategy", String.raw`Common factor → grouping → factor theorem → quadratic.`],
  ],
  tips: ["Zero −3 ↔ factor (x + 3).", "Zero 2/3 ↔ factor (3x − 2).", "Test ±1 first.", "Factor the quotient again.", "No candidate works → no rational zeros."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
