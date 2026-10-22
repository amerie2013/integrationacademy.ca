// IB AA SL chapter 9 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { planeDoc, P } from "../mcr3u-ch1/bank/fig.mjs";

const T = { 1: "9.1 Exponents and Radicals", 2: "9.2 Exponential Functions and the Number e", 3: "9.3 Logarithms and Their Graphs", 4: "9.4 Laws of Logarithms", 5: "9.5 Solving Exponential Equations", 6: "9.6 Derivatives of Exponential and Logarithmic Functions" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const f = (v, d = 3) => String(Math.round(v * 10 ** d) / 10 ** d);

export const WRITTEN = [
  W(1, "medium", 4, S`(a) Simplify $\dfrac{(2x^3)^4}{8x^{-2}}$. (b) Evaluate $81^{-3/4}$. (c) Solve $16^{x}=8^{x+2}$ (the exponents of 2 are graphed).`,
    S`(a) $\frac{16x^{12}}{8x^{-2}}=2x^{14}$. (b) $\frac{1}{27}$. (c) $2^{4x}=2^{3x+6}\Rightarrow x=6$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 30 }, lines: [{ m: 4, b: 0 }, { m: 3, b: 6, color: "amber" }], points: [P(6, 24, "", "red")], step: { x: 1, y: 5 } })),
  W(1, "hard", 5, S`The graph shows $y=9^{x}-10\cdot3^{x+1}+81$. (a) Show that the equation $y=0$ can be written as $u^2-30u+81=0$ with $u=3^x$. (b) Solve it. (c) Hence state the x-intercepts.`,
    S`(a) $9^x=(3^x)^2$ and $10\cdot3^{x+1}=30\cdot3^x$. (b) $(u-3)(u-27)=0$. (c) $3^x=3\Rightarrow x=1$; $3^x=27\Rightarrow x=3$. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 4, ymin: -150, ymax: 100 }, curves: [{ f: (x) => 9 ** x - 30 * 3 ** x + 81 }], points: [P(1, 0, "", "red"), P(3, 0, "", "red")], step: { x: 1, y: 50 } })),
  W(2, "medium", 4, S`The graph shows $y=a\cdot2^{x}+k$ with asymptote $y=-3$, passing through $(1,3)$. (a) State $k$. (b) Find $a$. (c) Find the y-intercept and the x-intercept.`,
    S`(a) $k=-3$. (b) $2a-3=3\Rightarrow a=3$. (c) $y(0)=0$, so the graph passes through the origin; x-intercept $(0,0)$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -4, xmax: 3, ymin: -5, ymax: 10 }, curves: [{ f: (x) => 3 * 2 ** x - 3 }], lines: [{ m: 0, b: -3, color: "red", dash: true }], points: [P(1, 3, "", "red")], step: { x: 1, y: 1 } })),
  W(2, "hard", 5, S`4000 dollars is invested for 10 years. Option A pays 4.5% compounded monthly; option B pays 4.4% compounded continuously (both graphed). (a) Find the value of each option. (b) Which is better and by how much? (c) Find the continuous rate that would match option A exactly.`,
    S`(a) A: $4000(1.00375)^{120}\approx${f(4000 * (1 + 0.045 / 12) ** 120, 2)}$; B: $4000e^{0.44}\approx${f(4000 * Math.exp(0.44), 2)}$. (b) A by $\approx${f(4000 * (1 + 0.045 / 12) ** 120 - 4000 * Math.exp(0.44), 2)}$ dollars. (c) $e^{r}=(1.00375)^{12}\Rightarrow r=12\ln1.00375\approx${f(12 * Math.log(1.00375), 5)}$ (4.49%). [2, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 10, ymin: 3500, ymax: 6500 }, curves: [{ f: (t) => 4000 * (1 + 0.045 / 12) ** (12 * t), a: 0, b: 10 }, { f: (t) => 4000 * Math.exp(0.044 * t), a: 0, b: 10, color: "amber" }], step: { x: 1, y: 500 } })),
  W(3, "medium", 4, S`The graph shows $y=\log_2(x+4)-1$. (a) State the domain and the equation of the asymptote. (b) Find the x-intercept and the y-intercept. (c) Find the inverse function.`,
    S`(a) $x>-4$; $x=-4$. (b) $\log_2(x+4)=1\Rightarrow x=-2$; $y=\log_24-1=1$. (c) $f^{-1}(x)=2^{x+1}-4$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 8, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.log2(x + 4) - 1, a: -3.999, b: 8 }], vlines: [{ x: -4, color: "red", dash: true }], points: [P(-2, 0, "", "green"), P(0, 1, "", "blue")], step: { x: 1, y: 1 } })),
  W(3, "hard", 5, S`The graph of $y=\log_b(x-h)$ has asymptote $x=3$ and passes through $(28,2)$. (a) Find $h$ and $b$. (b) Find the x-intercept. (c) Find the value of $x$ where $y=-1$. (d) Describe the transformation from $y=\log_b x$.`,
    S`(a) $h=3$; $b^2=25\Rightarrow b=5$. (b) $x-3=1\Rightarrow(4,0)$. (c) $x-3=5^{-1}\Rightarrow x=3.2$. (d) translation 3 units right. [2, 1, 1, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 30, ymin: -3, ymax: 3 }, curves: [{ f: (x) => Math.log(x - 3) / Math.log(5), a: 3.001, b: 30 }], vlines: [{ x: 3, color: "red", dash: true }], points: [P(28, 2, "", "red")], step: { x: 5, y: 1 } })),
  W(4, "medium", 4, S`(a) Write $3\log_2 6-\log_2 27$ as a single number. (b) Given $\log_b 3=p$ and $\log_b 4=q$, express $\log_b 48$ in terms of $p$ and $q$. (c) Solve $\log_3 x+\log_3(x-8)=2$ and check with the graph.`,
    S`(a) $\log_2\frac{216}{27}=\log_28=3$. (b) $48=3\cdot4^2$: $p+2q$. (c) $x^2-8x-9=0\Rightarrow(x-9)(x+1)=0$; reject $-1$: $x=9$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 8, xmax: 13, ymin: -2, ymax: 4 }, curves: [{ f: (x) => (Math.log(x) + Math.log(x - 8)) / Math.log(3), a: 8.02, b: 13 }], lines: [{ m: 0, b: 2, color: "amber", dash: true }], points: [P(9, 2, "", "red")], step: { x: 1, y: 1 } })),
  W(4, "hard", 6, S`(a) Show that $\log_9 x=\frac12\log_3 x$. (b) Hence solve $\log_3 x+\log_9 x=6$. (c) Solve $(\log_3 x)^2-\log_3 x^3=-2$. (d) The graph shows $y=\log_3 x+\log_9 x$; use it to check (b).`,
    S`(a) $\log_9x=\frac{\log_3x}{\log_39}=\frac{\log_3x}{2}$. (b) $\frac32\log_3x=6\Rightarrow\log_3x=4\Rightarrow x=81$. (c) $u^2-3u+2=0$: $u=1,2$; $x=3$ or $9$. (d) the curve reaches 6 at $x=81$. [1, 2, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 100, ymin: -2, ymax: 8 }, curves: [{ f: (x) => 1.5 * Math.log(x) / Math.log(3), a: 0.1, b: 100 }], lines: [{ m: 0, b: 6, color: "amber", dash: true }], points: [P(81, 6, "", "red")], step: { x: 10, y: 1 } })),
  W(5, "medium", 4, S`A population of insects follows $N=300e^{kt}$ (graphed), reaching 750 after 4 weeks. (a) Find $k$. (b) Find the doubling time. (c) When will the population reach 2000?`,
    S`(a) $e^{4k}=2.5\Rightarrow k=\frac{\ln2.5}{4}\approx${f(Math.log(2.5) / 4, 4)}$. (b) $\frac{\ln2}{k}\approx${f(Math.log(2) / (Math.log(2.5) / 4), 2)}$ weeks. (c) $t=\frac{\ln(20/3)}{k}\approx${f(Math.log(20 / 3) / (Math.log(2.5) / 4), 2)}$ weeks. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 2500 }, curves: [{ f: (t) => 300 * Math.exp((Math.log(2.5) / 4) * t), a: 0, b: 10 }], points: [P(4, 750, "", "red")], step: { x: 1, y: 250 } })),
  W(5, "hard", 6, S`Solve, showing all working: (a) $5^{x}=2^{x+3}$; (b) $e^{2x}-7e^{x}+10=0$; (c) $2e^{x}=3+5e^{-x}$. (d) The graph shows $y=e^{2x}-7e^x+10$; explain how it confirms (b).`,
    S`(a) $x\ln5=(x+3)\ln2\Rightarrow x=\frac{3\ln2}{\ln2.5}\approx${f(3 * Math.log(2) / Math.log(2.5))}$. (b) $(e^x-2)(e^x-5)=0$: $x=\ln2,\ \ln5$. (c) $2e^{2x}-3e^x-5=0\Rightarrow(2e^x-5)(e^x+1)=0$: $x=\ln2.5$. (d) zeros at $\ln2\approx0.693$ and $\ln5\approx1.609$. [2, 1, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 2.2, ymin: -4, ymax: 8 }, curves: [{ f: (x) => Math.exp(2 * x) - 7 * Math.exp(x) + 10 }], points: [P(Math.log(2), 0, "", "red"), P(Math.log(5), 0, "", "red")], step: { x: 0.5, y: 2 } })),
  W(6, "medium", 4, S`For $f(x)=e^{x}-6x$ (graphed): (a) find $f'(x)$; (b) find the stationary point exactly; (c) show it is a minimum.`,
    S`(a) $e^x-6$. (b) $e^x=6\Rightarrow x=\ln6$; $f(\ln6)=6-6\ln6$. (c) $f''(x)=e^x>0$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 3, ymin: -6, ymax: 10 }, curves: [{ f: (x) => Math.exp(x) - 6 * x }], points: [P(Math.log(6), 6 - 6 * Math.log(6), "", "red")], step: { x: 0.5, y: 2 } })),
  W(6, "hard", 6, S`The curve $y=x\,e^{-3x}$ is shown. (a) Use the product rule to find $\frac{dy}{dx}$. (b) Find the maximum point. (c) Find the equation of the tangent at $x=0$. (d) Find the equation of the normal at the maximum point.`,
    S`(a) $(1-3x)e^{-3x}$. (b) $x=\frac13$: $\left(\frac13,\frac1{3e}\right)$. (c) gradient 1: $y=x$. (d) the tangent is horizontal, so the normal is the vertical line $x=\frac13$. [2, 1, 1, 2.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 2.5, ymin: -0.3, ymax: 0.4 }, curves: [{ f: (x) => x * Math.exp(-3 * x) }], lines: [{ m: 1, b: 0, color: "red", dash: true }], points: [P(1 / 3, Math.exp(-1) / 3, "", "red")], step: { x: 0.5, y: 0.1 } })),
];
