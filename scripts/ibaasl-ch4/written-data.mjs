// IB AA SL chapter 4 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { planeDoc, P } from "../mcr3u-ch1/bank/fig.mjs";

const T = { 1: "4.1 The Reciprocal Function", 2: "4.2 Transforming the Reciprocal Function", 3: "4.3 Rational Functions" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const hyp = (f, h, xmin, xmax, color = "violet") => [{ f, a: xmin, b: h - 0.02, color }, { f, a: h + 0.02, b: xmax, color }];
const ASY = (h, k) => ({ vlines: [{ x: h, color: "red", dash: true }], lines: [{ m: 0, b: k, color: "red", dash: true }] });

export const WRITTEN = [
  W(1, "medium", 4, S`The graph of $y=\frac kx$ passes through $(3,-5)$ (shown). (a) Find $k$. (b) State the asymptotes, domain and range. (c) Find where the graph meets $y=-x$.`,
    S`(a) $k=-15$. (b) $x=0$, $y=0$; $x\ne0$, $y\ne0$. (c) $-\frac{15}{x}=-x\Rightarrow x=\pm\sqrt{15}$: $(\sqrt{15},-\sqrt{15})$, $(-\sqrt{15},\sqrt{15})$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -8, xmax: 8, ymin: -8, ymax: 8 }, curves: [...hyp((x) => -15 / x, 0, -8, 8), { f: (x) => -x, color: "gray" }], ...ASY(0, 0), points: [P(3, -5)] })),
  W(1, "hard", 5, S`The time $t$ hours for a group of $n$ volunteers to clear a beach varies inversely with $n$; 8 volunteers take 4.5 hours (graphed). (a) Find the model. (b) Find the time for 12 volunteers. (c) How many volunteers are needed to finish in under 2 hours? (d) Explain why only one branch of the hyperbola is used.`,
    S`(a) $t=\frac{36}{n}$. (b) 3 h. (c) $\frac{36}{n}<2\Rightarrow n>18$: 19 volunteers. (d) $n$ and $t$ must be positive. [1, 1, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 26, ymin: -0.5, ymax: 10 }, curves: [{ f: (n) => 36 / n, a: 3.7, b: 26 }], points: [P(8, 4.5), P(12, 3)], step: { x: 2, y: 1 }, xlabel: "n", ylabel: "t" })),
  W(2, "medium", 4, S`$f(x)=\frac{4}{x+2}-1$ is shown. (a) State its asymptotes. (b) Find its intercepts. (c) Describe the transformations from $y=\frac1x$.`,
    S`(a) $x=-2$, $y=-1$. (b) $(0,1)$; $\frac{4}{x+2}=1\Rightarrow x=2$: $(2,0)$. (c) vertical stretch ×4, translation 2 left and 1 down. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -7, xmax: 5, ymin: -6, ymax: 5 }, curves: hyp((x) => 4 / (x + 2) - 1, -2, -7, 5), ...ASY(-2, -1), points: [P(0, 1), P(2, 0)] })),
  W(2, "hard", 5, S`A graph $y=\frac{a}{x-h}+k$ has asymptotes $x=2$ and $y=-1$ and passes through $(4,0)$ (shown). (a) Find $a$, $h$ and $k$. (b) Find the y-intercept. (c) Find the inverse function and its asymptotes.`,
    S`(a) $h=2$, $k=-1$, $\frac a2-1=0\Rightarrow a=2$. (b) $-1-1=-2$. (c) $x+1=\frac{2}{y-2}\Rightarrow f^{-1}(x)=\frac{2}{x+1}+2$; asymptotes $x=-1$, $y=2$. [2, 1, 2.]`,
    planeDoc({ view: { xmin: -3, xmax: 8, ymin: -6, ymax: 4 }, curves: hyp((x) => 2 / (x - 2) - 1, 2, -3, 8), ...ASY(2, -1), points: [P(4, 0), P(0, -2)] })),
  W(3, "medium", 4, S`$f(x)=\frac{3x-4}{x-2}$ is shown. (a) State its asymptotes. (b) Find its intercepts. (c) Write $f(x)$ in the form $\frac{A}{x-h}+k$.`,
    S`(a) $x=2$, $y=3$. (b) $(\frac43,0)$ and $(0,2)$. (c) $3x-4=3(x-2)+2$: $\frac{2}{x-2}+3$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 7, ymin: -3, ymax: 9 }, curves: hyp((x) => (3 * x - 4) / (x - 2), 2, -4, 7), ...ASY(2, 3), points: [P(4 / 3, 0), P(0, 2)] })),
  W(3, "hard", 5, S`A charity's cost to run $n$ meals is $C=2500+4n$. (a) Write the average cost $A(n)$ as a rational function and state its horizontal asymptote. (b) Interpret the asymptote. (c) Find the number of meals for an average cost of 5. (d) Find the inverse of $A$ and explain what it gives.`,
    S`(a) $A=\frac{2500+4n}{n}=4+\frac{2500}{n}$; $A=4$. (b) the cost of each extra meal, approached for large $n$. (c) $\frac{2500}{n}=1\Rightarrow n=2500$. (d) $n=\frac{2500}{A-4}$: the number of meals for a given average cost. [1, 1, 1, 2.]`,
    planeDoc({ view: { xmin: -50, xmax: 5200, ymin: -1, ymax: 22 }, curves: [{ f: (n) => 4 + 2500 / n, a: 140, b: 5200 }], lines: [{ m: 0, b: 4, color: "red", dash: true }], points: [P(2500, 5)], step: { x: 500, y: 2 }, xlabel: "n", ylabel: "A" })),
];
