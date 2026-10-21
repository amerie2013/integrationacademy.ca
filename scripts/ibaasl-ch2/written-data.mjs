// IB AA SL chapter 2 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { planeDoc, P, mapDoc } from "../mcr3u-ch1/bank/fig.mjs";

const T = {
  1: "2.1 What Is a Function?", 2: "2.2 Function Notation", 3: "2.3 Graphs of Functions",
  4: "2.4 Domain and Range", 5: "2.5 Composite Functions", 6: "2.6 Inverse Functions",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const YX = { f: (x) => x, color: "gray" };

export const WRITTEN = [
  W(1, "medium", 4, S`The ellipse $\frac{x^2}{16}+\frac{y^2}{9}=1$ is shown. (a) Explain why it is not a function of $x$. (b) Write it as two functions. (c) State the domain and range of each.`,
    S`(a) e.g. $x=0$ gives $y=\pm3$. (b) $y=\pm\frac34\sqrt{16-x^2}$. (c) domain $[-4,4]$ for both; ranges $[0,3]$ and $[-3,0]$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -5, xmax: 5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 0.75 * Math.sqrt(16 - x * x), a: -4, b: 4, color: "violet" }, { f: (x) => -0.75 * Math.sqrt(16 - x * x), a: -4, b: 4, color: "violet" }] })),
  W(1, "hard", 5, S`(a) For which values of $k$ is $\{(k,1),(k+2,3),(2k,5)\}$ NOT a function? (b) For $k=1$, draw the mapping (shown), state the domain and range, and describe the type of mapping.`,
    S`(a) a repeated input: $k=2k\Rightarrow k=0$; $k+2=2k\Rightarrow k=2$ ($k=k+2$ is impossible). Not a function for $k=0$ or $2$. (b) $\{(1,1),(3,3),(2,5)\}$: domain $\{1,2,3\}$, range $\{1,3,5\}$, one-to-one. [3, 2.]`,
    mapDoc([[1, 1], [3, 3], [2, 5]])),
  W(2, "medium", 4, S`For $f(x)=x^2-5x+4$ (graphed): (a) find $f(-1)$; (b) solve $f(x)=4$; (c) find and simplify $f(x+1)$.`,
    S`(a) $1+5+4=10$. (b) $x^2-5x=0\Rightarrow x=0$ or $5$. (c) $(x+1)^2-5(x+1)+4=x^2-3x$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -2, xmax: 7, ymin: -3, ymax: 11 }, curves: [{ f: (x) => x * x - 5 * x + 4, color: "violet" }], lines: [{ m: 0, b: 4, color: "green", dash: true }], points: [P(0, 4), P(5, 4)] })),
  W(2, "hard", 5, S`A bacteria population is $P(t)=200(1.08)^t$ after $t$ hours. (a) Find $P(0)$ and $P(5)$. (b) Find when the population doubles. (c) Simplify $\frac{P(t+1)}{P(t)}$ and explain its meaning.`,
    S`(a) 200; $200(1.08)^5\approx293.87$. (b) $1.08^t=2\Rightarrow t=\frac{\ln2}{\ln1.08}\approx9.01$ h. (c) $1.08$: the population grows by 8% each hour. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 12, ymin: 0, ymax: 550 }, curves: [{ f: (t) => 200 * 1.08 ** t, a: 0, color: "violet" }], step: { x: 1, y: 50 }, xlabel: "t (h)", ylabel: "P" })),
  W(3, "medium", 4, S`For $y=\frac{x+3}{x-2}$: (a) state the asymptotes; (b) find the intercepts; (c) sketch the graph (shown for checking).`,
    S`(a) $x=2$, $y=1$. (b) $(0,-1.5)$ and $(-3,0)$. (c) two branches in opposite quadrants of the asymptotes, through the intercepts. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 8, ymin: -6, ymax: 8 }, curves: [{ f: (x) => (x + 3) / (x - 2), a: -6, b: 1.9, color: "violet" }, { f: (x) => (x + 3) / (x - 2), a: 2.1, b: 8, color: "violet" }], vlines: [{ x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [P(0, -1.5), P(-3, 0)] })),
  W(3, "hard", 5, S`For $f(x)=x^3-3x^2-9x+5$ (graphed): (a) use a GDC to find the turning points; (b) state the number of real zeros; (c) find the values of $k$ for which $f(x)=k$ has three solutions.`,
    S`(a) maximum $(-1,10)$, minimum $(3,-22)$. (b) three. (c) $-22<k<10$. [2, 1, 2.]`,
    planeDoc({ view: { xmin: -4, xmax: 6, ymin: -26, ymax: 16 }, curves: [{ f: (x) => x ** 3 - 3 * x * x - 9 * x + 5, color: "violet" }], points: [P(-1, 10), P(3, -22)], step: { x: 1, y: 4 } })),
  W(4, "medium", 4, S`$f(x)=x^2-6x+5$ with domain $0\le x\le7$ (graphed). (a) Find the vertex. (b) Find the range. (c) Explain why the minimum is not at an end point.`,
    S`(a) $(3,-4)$. (b) $f(0)=5$, $f(7)=12$: range $-4\le y\le12$. (c) the vertex lies inside the domain and the parabola opens up. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 8, ymin: -6, ymax: 14 }, curves: [{ f: (x) => x * x - 6 * x + 5, a: 0, b: 7, color: "violet" }], points: [P(0, 5), P(7, 12), P(3, -4)], step: { x: 1, y: 2 } })),
  W(4, "hard", 5, S`(a) State the domain of $g(x)=\frac{\sqrt{x-1}}{x-5}$. (b) Find the range of $h(x)=\frac{1}{x^2-2x+2}$ (graphed), justifying your answer.`,
    S`(a) $x\ge1$, $x\ne5$. (b) $x^2-2x+2=(x-1)^2+1\ge1$, so $0<h\le1$, with the maximum 1 at $x=1$ and $h\to0$ as $|x|\to\infty$. [2, 3.]`,
    planeDoc({ view: { xmin: -4, xmax: 6, ymin: -0.5, ymax: 1.5 }, curves: [{ f: (x) => 1 / (x * x - 2 * x + 2), color: "violet" }], points: [P(1, 1)], step: { x: 1, y: 0.5 } })),
  W(5, "medium", 4, S`$f(x)=2x-3$ and $g(x)=x^2+1$. (a) Find $(f\circ g)(2)$. (b) Find $(g\circ f)(x)$. (c) Solve $(f\circ g)(x)=(g\circ f)(x)$ (2 d.p.).`,
    S`(a) $f(5)=7$. (b) $(2x-3)^2+1=4x^2-12x+10$. (c) $2x^2-1=4x^2-12x+10\Rightarrow2x^2-12x+11=0\Rightarrow x\approx4.87$ or $1.13$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -1, xmax: 6, ymin: -2, ymax: 40 }, curves: [{ f: (x) => 2 * x * x - 1, color: "violet" }, { f: (x) => 4 * x * x - 12 * x + 10, color: "green" }], step: { x: 1, y: 5 } })),
  W(5, "hard", 5, S`$f(x)=\sqrt{x+3}$ and $g(x)=x^2-4$. (a) Find $(f\circ g)(x)$ and its domain. (b) Find $(g\circ f)(x)$ and its domain. (c) Solve $(f\circ g)(x)=2$.`,
    S`(a) $\sqrt{x^2-1}$, $|x|\ge1$. (b) $x+3-4=x-1$, for $x\ge-3$. (c) $x^2-1=4\Rightarrow x=\pm\sqrt5$. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(x * x - 1), a: 1, color: "violet" }, { f: (x) => Math.sqrt(x * x - 1), a: -5, b: -1, color: "violet" }, { f: (x) => x - 1, a: -3, color: "green" }] })),
  W(6, "medium", 4, S`$f(x)=(x-2)^3+1$. (a) Find $f^{-1}(x)$. (b) Find $f^{-1}(9)$. (c) Sketch $f$ and $f^{-1}$ on the same axes (shown) and describe their relationship.`,
    S`(a) $\sqrt[3]{x-1}+2$. (b) $\sqrt[3]{8}+2=4$. (c) reflections of each other in $y=x$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 7, ymin: -3, ymax: 7 }, curves: [{ f: (x) => (x - 2) ** 3 + 1, color: "violet" }, { f: (x) => Math.cbrt(x - 1) + 2, color: "green" }, YX] })),
  W(6, "hard", 5, S`$f(x)=x^2+4x+1$, $x\ge-2$. (a) Write $f$ in vertex form and find $f^{-1}(x)$ with its domain. (b) Solve $f(x)=f^{-1}(x)$ (3 d.p.), explaining why one root is rejected.`,
    S`(a) $(x+2)^2-3$; $f^{-1}(x)=-2+\sqrt{x+3}$, $x\ge-3$. (b) on $y=x$: $x^2+3x+1=0$, $x=\frac{-3\pm\sqrt5}{2}$; $x\approx-0.382$ (the root $-2.618<-2$ is outside the domain). [3, 2.]`,
    planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x * x + 4 * x + 1, a: -2, color: "violet" }, { f: (x) => -2 + Math.sqrt(x + 3), a: -3, color: "green" }, YX], points: [P(-0.382, -0.382, null, "red")] })),
];
