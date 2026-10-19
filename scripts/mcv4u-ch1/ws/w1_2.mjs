// MCV4U Worksheet 1.2 — Rates of Change Using Equations (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "A quadratic", q: String.raw`Find the instantaneous rate of change of $f(x)=2x^2+x$ at $x=3$.`,
    steps: [String.raw`$f(3+h)=2(9+6h+h^2)+3+h=21+13h+2h^2$; $f(3)=21$.`, String.raw`$\frac{13h+2h^2}{h}=13+2h\to13$.`], ans: "13" },
  { title: "A cubic", q: String.raw`Find the instantaneous rate of change of $f(x)=x^3-x$ at $x=2$.`,
    steps: [String.raw`$f(2+h)=8+12h+6h^2+h^3-2-h$; $f(2)=6$.`, String.raw`$\frac{11h+6h^2+h^3}{h}=11+6h+h^2\to11$.`], ans: "11" },
  { title: "Numbers before algebra", q: String.raw`For $f(x)=\sqrt x$ at $a=1$, evaluate the quotient for $h=0.1, 0.01, 0.001$.`,
    steps: [String.raw`$0.488$, $0.4988$, $0.49988$.`], ans: "the values approach 0.5" },
  { title: "A reciprocal", q: String.raw`Find the instantaneous rate of change of $f(x)=\frac5x$ at $x=-1$.`,
    steps: [String.raw`$\frac{\frac5{-1+h}+5}{h}=\frac{5+5(-1+h)}{h(-1+h)}=\frac{5}{h-1}$.`, String.raw`As $h\to0$: $-5$.`], ans: "−5" },
  { title: "A root", q: String.raw`Find the instantaneous rate of change of $f(x)=\sqrt{x+5}$ at $x=4$.`,
    steps: [String.raw`$\frac{\sqrt{9+h}-3}{h}\cdot\frac{\sqrt{9+h}+3}{\sqrt{9+h}+3}=\frac1{\sqrt{9+h}+3}$.`, String.raw`As $h\to0$: $\frac16$.`], ans: String.raw`$\frac16$` },
  { title: "A velocity", q: String.raw`An object's position is $s(t)=t^2-6t$ m. Find its velocity at $t=5$.`,
    steps: [String.raw`$\frac{(5+h)^2-6(5+h)-(-5)}{h}=\frac{4h+h^2}{h}=4+h\to4$.`], ans: "4 m/s" },
  { title: "Tangent line", q: String.raw`Find the tangent to $f(x)=x^2-x$ at $x=3$.`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 14 }, curves: [{ f: (x) => x * x - x }, { f: (x) => 5 * x - 9, color: "green" }], points: [pt(3, 6)], step: { x: 1, y: 2 } }),
    steps: [String.raw`Rate: $\frac{(3+h)^2-(3+h)-6}{h}=5+h\to5$.`, String.raw`$y-6=5(x-3)$.`], ans: String.raw`$y=5x-9$` },
  { title: "A general point", q: String.raw`For $f(x)=3x^2$, find the rate at $x=a$ and evaluate it at $a=-2$.`,
    steps: [String.raw`$\frac{3(a+h)^2-3a^2}{h}=6a+3h\to6a$.`], ans: String.raw`$6a$; $-12$` },
  { title: "A horizontal tangent", q: String.raw`Where is the tangent to $f(x)=x^2+8x$ horizontal?`,
    fig: F({ view: { xmin: -9, xmax: 1, ymin: -18, ymax: 4 }, curves: [{ f: (x) => x * x + 8 * x }, { f: () => -16, color: "green" }], points: [pt(-4, -16)], step: { x: 1, y: 2 } }),
    steps: [String.raw`Rate at $a$: $2a+8$. $2a+8=0\Rightarrow a=-4$.`], ans: "(−4, −16)" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Evaluate $\frac{f(2+h)-f(2)}{h}$ for $f(x)=x^2$ and $h=0.5$.`, recap: "Quotient.", ans: "4.5" },
  { level: 1, q: String.raw`State the instantaneous rate of change of $f(x)=7x+2$ at any $x$.`, recap: "Linear.", ans: "7" },
  { level: 1, q: String.raw`The rate of $x^2$ at $x=a$ is $2a$. Find it at $a=-3$.`, recap: "Evaluate.", ans: "−6" },
  { level: 2, q: String.raw`Find the instantaneous rate of change of $f(x)=4x^2-3$ at $x=1$.`, recap: "Quadratic.", ans: "8" },
  { level: 2, q: String.raw`Find the instantaneous rate of change of $f(x)=x^3$ at $x=-1$.`, recap: "Cubic.", ans: "3" },
  { level: 2, q: String.raw`Find the instantaneous rate of change of $f(x)=\frac1x$ at $x=2$.`, recap: "Reciprocal.", ans: String.raw`$-\frac14$` },
  { level: 2, q: String.raw`Find the instantaneous rate of change of $f(x)=\sqrt x$ at $x=16$.`, recap: "Root.", ans: String.raw`$\frac18$` },
  { level: 2, q: String.raw`Find the tangent to $y=2x^2$ at $x=1$ and draw it.`, recap: "Tangent.", ans: String.raw`$y=4x-2$`, fig: gridT({ xmin: -2, xmax: 3, ymin: -2, ymax: 10 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: String.raw`The rate of change of $f(x)=x^2+bx$ at $x=2$ is 7. Find $b$.`, recap: "Unknown coefficient.", ans: "b = 3" },
  { level: 3, space: 5, q: String.raw`Find the instantaneous rate of change of $f(x)=\frac1{2x+1}$ at $x=0$.`, recap: "Rational.", ans: String.raw`$\frac{-2}{1+2h}\to-2$` },
  { level: 3, space: 5, q: String.raw`For $f(x)=x^4$ at $a=1$, compute the quotient for $h=0.1, 0.01, 0.001$, then simplify it. Which method proves the exact rate?`, recap: "Numbers vs algebra.", ans: String.raw`4.641, 4.0604, 4.006; $4+6h+4h^2+h^3\to4$` },
  { level: 3, space: 5, q: String.raw`Find every point on $y=x^3$ where the tangent has slope 12.`, recap: "Rate at a general point.", ans: "(2, 8) and (−2, −8)" },
  { level: 3, space: 5, q: String.raw`A ball's height is $h(t)=-5t^2+30t+2$ m. Find its velocity at $t=a$, the time when it stops rising, and its maximum height. Sketch $h$.`, recap: "Velocity zero at the top.", ans: String.raw`$30-10a$; $t=3$; 47 m`, fig: gridT({ xmin: 0, xmax: 6.5, ymin: 0, ymax: 50 }, { x: 1, y: 5 }) },
];

export const WS = {
  code: "1.2",
  title: "Rates of Change Using Equations",
  bigideas: String.raw`The difference quotient $\frac{f(a+h)-f(a)}{h}$ is the slope of the secant from $a$ to $a+h$. Substituting small $h$ estimates the instantaneous rate; simplifying until $h$ cancels, then letting $h\to0$, gives the exact rate $\lim_{h\to0}\frac{f(a+h)-f(a)}{h}$. Expand polynomials, combine fractions for rational functions, and rationalize roots. The tangent line is $y-f(a)=m(x-a)$.`,
  goals: ["Write the difference quotient.", "Estimate with small h.", "Simplify and take the limit.", "Write tangent lines."],
  curriculum: "A1.3, A1.5, A1.6",
  vocab: [["Difference quotient", "$\\frac{f(a+h)-f(a)}{h}$"], ["Rationalize", "multiply by the conjugate"], ["Tangent line", "$y-f(a)=m(x-a)$"]],
  hook: String.raw`Plug $h=0$ into $\frac{(2+h)^2-4}{h}$. What goes wrong? Now expand first.`,
  concepts: [
    ["1. Quotient as secant", String.raw`Slope from $(a,f(a))$ to $(a+h,f(a+h))$.
${F({ view: { xmin: -0.5, xmax: 3.5, ymin: -1, ymax: 10 }, curves: [{ f: (x) => x * x }, { f: (x) => 1 + 3.5 * (x - 1), color: "amber" }], points: [pt(1, 1, "a"), pt(2.5, 6.25, "a+h")], step: { x: 0.5, y: 1 } })}`],
    ["2. Simplify", String.raw`Cancel the factor $h$, then substitute $h=0$.`],
    ["3. Tools", String.raw`Expand · combine fractions · conjugate.`],
  ],
  tips: ["f(a + h): replace every x.", "Bracket f(a) when subtracting.", "Cancel h only when it is a factor.", "Don't set h = 0 too early.", "Tangent needs the point too."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
