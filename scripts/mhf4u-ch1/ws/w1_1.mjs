// MHF4U Worksheet 1.1 — Power Functions (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Power function or not?", q: String.raw`Classify: (a) $y=-4x^6$ (b) $y=5x^{-1}$ (c) $y=2x^3-x$ (d) $y=\left(\tfrac12\right)^x$.`,
    steps: [String.raw`(a) one term $ax^n$, $n=6$: power function. (b) exponent $-1$ is not a whole number: not a power (or polynomial) function.`, String.raw`(c) a polynomial with two terms. (d) variable in the exponent: exponential.`], ans: "only (a) is a power function; (c) is a polynomial" },
  { title: "Even degree, a > 0", q: String.raw`Describe $y=2x^6$.`,
    fig: F({ view: { xmin: -1.6, xmax: 1.6, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 2 * x ** 6 }], points: [pt(1, 2), pt(-1, 2)], step: { x: 0.5, y: 1 } }),
    steps: [String.raw`Even degree, $a>0$: Q2 → Q1.`, String.raw`$f(-x)=f(x)$: symmetric about the y-axis.`], ans: String.raw`up at both ends; $D=\mathbb R$, $R: y\ge0$` },
  { title: "Odd degree, a < 0", q: String.raw`Describe $y=-x^5$.`,
    fig: F({ view: { xmin: -1.6, xmax: 1.6, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -(x ** 5), color: "red" }], points: [pt(1, -1), pt(-1, 1)], step: { x: 0.5, y: 1 } }),
    steps: [String.raw`Odd degree, $a\lt0$: Q2 → Q4.`, String.raw`$f(-x)=-f(x)$: symmetric about the origin.`], ans: String.raw`rises left, falls right; $D=R=\mathbb R$` },
  { title: "Degree 1 is a power function", q: String.raw`Describe $y=4x$ as a power function.`,
    steps: [String.raw`$n=1$ (odd), $a=4>0$: Q3 → Q1, a line through the origin.`], ans: "odd, Q3 → Q1, slope 4" },
  { title: "Comparing odd powers", q: String.raw`Compare $y=x^3$ and $y=x^5$ at $x=0.5$ and $x=2$.`,
    fig: F({ view: { xmin: -1.8, xmax: 1.8, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 3, color: "blue" }, { f: (x) => x ** 5, color: "red" }], points: [pt(1, 1), pt(-1, -1)], step: { x: 0.5, y: 1 } }),
    steps: [String.raw`$x=0.5$: $0.125$ vs $0.03125$. $x=2$: $8$ vs $32$.`], ans: "x⁵ is flatter between −1 and 1 and steeper outside" },
  { title: "End behaviour of a polynomial", q: String.raw`Describe the end behaviour of $f(x)=-3x^5+40x^2-7$.`,
    steps: [String.raw`Leading term $-3x^5$: odd degree, negative.`], ans: "Q2 → Q4" },
  { title: "Range of an even power", q: String.raw`State the range of $y=-0.5x^4$.`,
    steps: [String.raw`$x^4\ge0$, so $-0.5x^4\le0$; maximum 0 at the origin.`], ans: String.raw`$y\le0$` },
  { title: "Which family from a table?", q: String.raw`Table A: $1, 3, 9, 27$; Table B: $0, 1, 0, -1, 0$; Table C: $0, 1, 8, 27$ (x = 0, 1, 2, 3, …). Identify each.`,
    steps: [String.raw`A: constant ratio 3: exponential. B: repeating: sinusoidal.`, String.raw`C: $x^3$; third differences constant (6): polynomial.`], ans: "A exponential, B sinusoidal, C polynomial (power)" },
  { title: "Symmetry algebraically", q: String.raw`Show that $f(x)=3x^4$ is even and $g(x)=-2x^3$ is odd.`,
    steps: [String.raw`$f(-x)=3(-x)^4=3x^4=f(x)$.`, String.raw`$g(-x)=-2(-x)^3=2x^3=-g(x)$.`], ans: "f is even, g is odd" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Give the degree and leading coefficient of $y=-6x^5$.`, recap: "Degree, a.", ans: String.raw`$5$; $-6$` },
  { level: 1, q: String.raw`Describe the end behaviour of $y=0.2x^8$.`, recap: "End behaviour.", ans: "up at both ends (Q2 → Q1)" },
  { level: 1, q: String.raw`Which is not a power function: $y=7x^2$, $y=x^9$, $y=9^x$?`, recap: "Classify.", ans: String.raw`$y=9^x$` },
  { level: 2, q: String.raw`Describe $y=-4x^3$ fully (end behaviour, symmetry, domain, range) and sketch it.`, recap: "Describe and sketch.", ans: String.raw`Q2 → Q4; odd; $D=R=\mathbb R$`, fig: gridT({ xmin: -2, xmax: 2, ymin: -8, ymax: 8 }, { x: 1, y: 2 }) },
  { level: 2, q: String.raw`For $f(x)=2x^4$, find $f(3)$ and $f(-3)$. What symmetry does this show?`, recap: "Even symmetry.", ans: String.raw`both $162$: even (y-axis symmetry)` },
  { level: 2, q: String.raw`Describe the end behaviour of $p(x)=5-2x+x^3-4x^6$.`, recap: "Leading term.", ans: String.raw`$-4x^6$: down at both ends` },
  { level: 2, q: String.raw`Order $x$, $x^2$, $x^3$ from least to greatest when $x=0.5$, and again when $x=3$.`, recap: "Compare powers.", ans: String.raw`$x^3\lt x^2\lt x$ at $0.5$; reversed at $3$` },
  { level: 2, q: String.raw`A power function $y=ax^4$ passes through $(2,48)$. Find $a$.`, recap: "Find a.", ans: "$a=3$" },
  { level: 3, space: 5, q: String.raw`$y=ax^n$ passes through $(-2,64)$ and $(1,4)$. Find $a$ and $n$.`, recap: "Find a and n.", ans: String.raw`$(-2)^n=16$: $n=4$, $a=4$` },
  { level: 3, space: 5, q: String.raw`Solve $x^5>x^3$. Use a sketch of both graphs to support your answer.`, recap: "Compare x⁵ and x³.", ans: String.raw`$x^3(x^2-1)>0$: $-1\lt x\lt0$ or $x>1$`, fig: F({ view: { xmin: -1.6, xmax: 1.6, ymin: -3, ymax: 3 }, curves: [{ f: (x) => x ** 3, color: "blue" }, { f: (x) => x ** 5, color: "red" }], step: { x: 0.5, y: 1 } }) },
  { level: 3, space: 5, q: String.raw`Explain why every polynomial function of odd degree has at least one real zero.`, recap: "Odd degree has a zero.", ans: "its ends go in opposite directions, so the continuous graph must cross the x-axis" },
  { level: 3, space: 5, q: String.raw`A cube has side $x$ cm and volume $V=x^3$. By what factor does the volume change when the side is doubled? When it is halved? Sketch $V$ for $x\ge0$.`, recap: "Volume of a cube.", ans: String.raw`$\times8$; $\times\tfrac18$`, fig: gridT({ xmin: 0, xmax: 4, ymin: 0, ymax: 64 }, { x: 1, y: 8 }) },
  { level: 3, space: 5, q: String.raw`For which whole numbers $n$ does $y=x^n$ pass through $(-1,1)$? Through $(-1,-1)$? Explain using symmetry.`, recap: "Parity and points.", ans: "(−1, 1): even n (and n = 0); (−1, −1): odd n" },
];

export const WS = {
  code: "1.1",
  title: "Power Functions",
  bigideas: String.raw`A power function is $y=ax^n$ with $n$ a whole number. Its end behaviour depends on the parity of $n$ (even: both ends the same way; odd: opposite ways) and the sign of $a$ (which way the right end goes). Even powers are symmetric about the y-axis, odd powers about the origin. A polynomial behaves like its leading term at the ends. Exponential and sinusoidal functions are not polynomials.`,
  goals: ["Classify power and polynomial functions.", "Describe end behaviour from n and a.", "State symmetry, domain and range.", "Compare powers and other function types."],
  curriculum: "C1.1–C1.4",
  vocab: [["Power function", "$y=ax^n$, $n\\in\\{0,1,2,\\ldots\\}$"], ["End behaviour", "$y$ as $x\\to\\pm\\infty$"], ["Even / odd", "$f(-x)=f(x)$ / $f(-x)=-f(x)$"]],
  hook: String.raw`Show $y=x^2$, $x^3$, $x^4$, $x^5$ on one set of axes and ask: which pairs look alike far from the origin, and why?`,
  concepts: [
    ["1. Four families", String.raw`Even/odd degree × positive/negative $a$.
${F({ view: { xmin: -2, xmax: 2, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 4, color: "blue" }, { f: (x) => -(x ** 4), color: "red" }, { f: (x) => x ** 3, color: "green" }, { f: (x) => -(x ** 3), color: "amber" }], step: { x: 1, y: 1 } })}`],
    ["2. Symmetry", String.raw`Even: y-axis. Odd: origin.`],
    ["3. Leading term", String.raw`For large $|x|$, $f(x)\approx a_nx^n$.`],
  ],
  tips: ["9ˣ is exponential, not a power function.", "(−x)⁴ = x⁴, (−x)³ = −x³.", "Degree 0 is a constant.", "Only the leading term decides end behaviour.", "Range of even powers starts at 0."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
