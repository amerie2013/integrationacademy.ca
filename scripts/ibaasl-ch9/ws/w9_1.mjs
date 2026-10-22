// IB AA SL Worksheet 9.1 — Exponents and Radicals (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;

const EXAMPLES = [
  { title: "Multiplying and dividing powers", q: S`Simplify $\dfrac{8p^4q^{-1}}{2p^{-2}q^3}$.`,
    steps: [S`$8\div2=4$; $p^{4-(-2)}=p^6$; $q^{-1-3}=q^{-4}$.`], ans: S`$\dfrac{4p^6}{q^4}$` },
  { title: "Zero and negative exponents", q: S`Evaluate $7^0-3^{-2}$.`,
    steps: [S`$1-\frac19$.`], ans: S`$\frac89$` },
  { title: "Rational exponents", q: S`Evaluate $32^{4/5}$ and $\left(\frac{1}{16}\right)^{-3/4}$.`,
    steps: [S`$(\sqrt[5]{32})^4=2^4$.`, S`$16^{3/4}=2^3$.`], ans: S`$16$; $8$` },
  { title: "Powers of 3 on a graph", q: S`Use the graph of $y=3^x$ to explain why $3^{-1}=\frac13$.`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 3 ** x }], points: [pt(-1, 1 / 3, "", "red"), pt(0, 1, "", "green"), pt(2, 9)] }, 6),
    steps: ["Each step of 1 to the left divides the height by 3.", S`From $3^0=1$, one step left gives $\frac13$.`], ans: S`$3^{-1}=\frac13$` },
  { title: "Simplifying surds", q: S`Simplify $\sqrt{108}+\sqrt{48}-\sqrt{3}$.`,
    steps: [S`$6\sqrt3+4\sqrt3-\sqrt3$.`], ans: S`$9\sqrt3$` },
  { title: "Rationalising", q: S`Rationalise $\dfrac{14}{\sqrt7}$ and $\dfrac{4}{\sqrt{11}+3}$.`,
    steps: [S`$\frac{14\sqrt7}{7}=2\sqrt7$.`, S`$\frac{4(\sqrt{11}-3)}{11-9}=2(\sqrt{11}-3)$.`], ans: S`$2\sqrt7$; $2\sqrt{11}-6$` },
  { title: "Common base", q: S`Solve $8^{x}=4^{x+3}$.`,
    steps: [S`$2^{3x}=2^{2x+6}$.`, S`$3x=2x+6$.`], ans: S`$x=6$` },
  { title: "Negative and fractional powers together", q: S`Solve $27^{x}=\frac{1}{9}$.`,
    steps: [S`$3^{3x}=3^{-2}$.`, S`$3x=-2$.`], ans: S`$x=-\frac23$` },
  { title: "A hidden quadratic", q: S`Solve $4^x-10\cdot2^x+16=0$.`,
    fig: F({ view: { xmin: -1, xmax: 4, ymin: -10, ymax: 10 }, curves: [{ f: (x) => 4 ** x - 10 * 2 ** x + 16 }], points: [pt(1, 0, "", "red"), pt(3, 0, "", "red")], step: { x: 1, y: 2 } }, 6),
    steps: [S`Let $u=2^x$: $u^2-10u+16=0$, $(u-2)(u-8)=0$.`, S`$2^x=2$ or $2^x=8$.`], ans: S`$x=1$ or $x=3$` },
];

const PROBLEMS = [
  { level: 1, q: S`Simplify $m^7\times m^{-3}$.`, recap: "Product law.", ans: S`$m^4$` },
  { level: 1, q: S`Evaluate $49^{3/2}$.`, recap: "Root first.", ans: "343" },
  { level: 1, q: S`Simplify $\sqrt{63}$.`, recap: "Square factor.", ans: S`$3\sqrt7$` },
  { level: 2, q: S`Simplify $\dfrac{(3a^2b)^2}{a^{-1}b^4}$.`, recap: "Laws.", ans: S`$\dfrac{9a^5}{b^2}$` },
  { level: 2, q: S`Rationalise $\dfrac{6}{2+\sqrt3}$.`, recap: "Conjugate.", ans: S`$12-6\sqrt3$` },
  { level: 2, q: S`Solve $5^{x-2}=125$.`, recap: "Common base.", ans: S`$x=5$` },
  { level: 2, q: S`Solve $16^{x}=8^{x+1}$.`, recap: "Base 2.", ans: S`$x=3$` },
  { level: 2, q: S`Write $\dfrac{\sqrt[3]{x^2}}{x^{-1}}$ as a single power of x.`, recap: "Rational exponents.", ans: S`$x^{5/3}$` },
  { level: 3, space: 4, q: S`Solve $9^x-12\cdot3^x+27=0$.`, recap: "Hidden quadratic.", ans: S`$x=1$ or $x=2$`,
    fig: F({ view: { xmin: -1, xmax: 3, ymin: -12, ymax: 10 }, curves: [{ f: (x) => 9 ** x - 12 * 3 ** x + 27 }], step: { x: 1, y: 2 } }, 5.5) },
  { level: 3, space: 4, q: S`Solve the simultaneous equations $2^x\cdot4^y=64$ and $3^{x-y}=9$.`, recap: "Two linear equations.", ans: S`$x+2y=6$, $x-y=2$: $x=\frac{10}3$, $y=\frac43$` },
  { level: 3, space: 4, q: S`Show that $\dfrac{1}{\sqrt5-2}-\dfrac{1}{\sqrt5+2}=4$.`, recap: "Rationalise both.", ans: S`$(\sqrt5+2)-(\sqrt5-2)=4$` },
  { level: 3, space: 4, q: S`Find $x$ if $\dfrac{2^{x+1}+2^x}{3}=32$.`, recap: "Factor out the power.", ans: S`$2^x(2+1)=96\Rightarrow x=5$` },
  { level: 3, space: 4, q: S`Explain why $(-8)^{1/3}$ is defined but $(-8)^{1/2}$ is not a real number.`, recap: "Roots of negatives.", ans: S`$(-2)^3=-8$; no real number squares to $-8$` },
];

export const WS = {
  code: "9.1",
  title: "Exponents and Radicals",
  bigideas: S`The laws of exponents come from counting factors: $a^ma^n=a^{m+n}$, $a^m\div a^n=a^{m-n}$, $(a^m)^n=a^{mn}$. They define $a^0=1$, $a^{-n}=\frac1{a^n}$ and $a^{m/n}=(\sqrt[n]a)^m$. Simplify surds with square factors and rationalise with conjugates. If $a^p=a^q$ then $p=q$; watch for hidden quadratics in $a^{2x}$.`,
  goals: ["Use the laws of exponents.", "Evaluate rational exponents.", "Simplify and rationalise surds.", "Solve common-base and hidden-quadratic equations."],
  curriculum: "SL 1.5, 1.7",
  vocab: [["Exponent", S`the power $n$ in $a^n$`], ["Surd", S`an irrational root such as $\sqrt5$`], ["Conjugate", S`$a-\sqrt b$ for $a+\sqrt b$`]],
  hook: "Fold a sheet of paper in half repeatedly. How many layers after 1, 2, 3 folds? After 0 folds? What would 'minus one fold' mean?",
  concepts: [
    ["1. Laws", S`${F({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 9 }, curves: [{ f: (x) => 2 ** x }], points: [pt(0, 1, "", "green"), pt(-2, 0.25, "", "red")] }, 4.8)} $2^{-2}=\frac14$ continues the halving pattern.`],
    ["2. Surds", S`$\sqrt{ab}=\sqrt a\sqrt b$; multiply by the conjugate to rationalise.`],
    ["3. Equations", "Same base: equate exponents."],
  ],
  tips: ["Take roots before powers.", "Negative exponent = reciprocal.", "No law for a sum under a root.", "Write both sides in the smallest base.", S`Reject impossible values of $a^x$.`],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
