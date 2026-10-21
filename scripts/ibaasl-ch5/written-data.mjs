// IB AA SL chapter 5 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { planeDoc, P } from "../mcr3u-ch1/bank/fig.mjs";

const T = {
  1: "5.1 Limits and Convergence", 2: "5.2 The Derivative Function", 3: "5.3 Differentiation Rules",
  4: "5.4 First and Second Derivatives and Graphs", 5: "5.5 Optimisation", 6: "5.6 Kinematics and Rates of Change",
};
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const O = (x, y) => ({ x, y, color: "violet", open: true });

export const WRITTEN = [
  W(1, "medium", 4, S`$f(x)=\frac{x^2+x-12}{x-3}$ (graphed). (a) Explain why $f(3)$ is not defined. (b) Find $\lim_{x\to3}f(x)$. (c) Find $\lim_{x\to\infty}\frac{f(x)}{x}$.`,
    S`(a) The denominator is 0 at $x=3$. (b) $\frac{(x-3)(x+4)}{x-3}=x+4\to7$. (c) $\frac{x+4}{x}=1+\frac4x\to1$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 6, ymin: -3, ymax: 11 }, curves: [{ f: (x) => x + 4, a: -6, b: 2.95 }, { f: (x) => x + 4, a: 3.05, b: 6 }], points: [O(3, 7)] })),
  W(1, "hard", 5, S`A ball is dropped from 8 m; after each bounce it rises to $\frac34$ of its previous height (heights shown). (a) Write the height after the $n$th bounce. (b) Show that the heights converge and state the limit. (c) Find the limit of the total distance travelled.`,
    S`(a) $8\left(\frac34\right)^n$. (b) $\left|\frac34\right|<1$, so $\left(\frac34\right)^n\to0$: the limit is 0. (c) down 8, then up and down each bounce: $8+2\cdot\frac{6}{1-0.75}=8+48=56$ m. [1, 2, 2.]`,
    planeDoc({ view: { xmin: -0.3, xmax: 8, ymin: -0.5, ymax: 9 }, points: [0, 1, 2, 3, 4, 5, 6, 7].map((n) => ({ x: n, y: 8 * 0.75 ** n, color: "blue" })), step: { x: 1, y: 1 } })),
  W(2, "medium", 4, S`For $f(x)=3x^2-5x$ (graphed): (a) use first principles to find $f'(x)$; (b) find the gradient at $x=2$; (c) find the x-coordinate of the vertex using $f'$.`,
    S`(a) $\frac{6xh+3h^2-5h}{h}=6x+3h-5\to6x-5$. (b) $7$. (c) $6x-5=0\Rightarrow x=\frac56$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 4, ymin: -4, ymax: 14 }, curves: [{ f: (x) => 3 * x * x - 5 * x }, { f: (x) => 7 * (x - 2) + 2, color: "red" }], points: [P(2, 2), P(5 / 6, -25 / 12)] })),
  W(2, "hard", 5, S`The graph of $f$ is shown, with turning points at $x=-2$ and $x=1$. (a) Sketch the graph of $f'$, explaining its key features. (b) Given $f(x)=\frac{x^3}{3}+\frac{x^2}{2}-2x$, find $f'(x)$ from first principles and confirm your sketch.`,
    S`(a) $f'$ is zero at $-2$ and $1$, positive for $x<-2$ and $x>1$, negative between: an upward parabola. (b) $\frac{f(x+h)-f(x)}{h}=x^2+xh+\frac{h^2}{3}+x+\frac h2-2\to x^2+x-2=(x+2)(x-1)$. [2, 3.]`,
    planeDoc({ view: { xmin: -4, xmax: 3, ymin: -3, ymax: 5 }, curves: [{ f: (x) => x ** 3 / 3 + x * x / 2 - 2 * x }], points: [P(-2, 10 / 3), P(1, -7 / 6)] })),
  W(3, "medium", 4, S`$y=x^3-4x^2+5$ (graphed). (a) Find $\frac{dy}{dx}$. (b) Find the equation of the tangent at $x=2$. (c) Find the equation of the normal at $x=2$.`,
    S`(a) $3x^2-8x$. (b) point $(2,-3)$, gradient $-4$: $y=-4x+5$. (c) gradient $\frac14$: $y=\frac14x-3.5$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 5, ymin: -8, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 4 * x * x + 5 }, { f: (x) => -4 * x + 5, color: "red" }, { f: (x) => 0.25 * x - 3.5, color: "green" }], points: [P(2, -3)] })),
  W(3, "hard", 5, S`$y=x^2-2x+3$ (graphed). (a) Find the points where the tangent passes through the origin. (b) Find the equations of these tangents. (c) Find the product of their gradients and decide whether the tangents are perpendicular.`,
    S`(a) Tangent at $a$: $y=(2a-2)(x-a)+a^2-2a+3$; through $(0,0)$: $-a^2+3=0\Rightarrow a=\pm\sqrt3$. (b) $y=(2\sqrt3-2)x$ and $y=(-2\sqrt3-2)x$. (c) $(2\sqrt3-2)(-2\sqrt3-2)=4-12=-8\ne-1$: not perpendicular. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 14 }, curves: [{ f: (x) => x * x - 2 * x + 3 }, { f: (x) => (2 * Math.sqrt(3) - 2) * x, color: "red" }, { f: (x) => (-2 * Math.sqrt(3) - 2) * x, color: "red" }], points: [P(0, 0)] })),
  W(4, "medium", 4, S`$f(x)=2x^3-3x^2-12x+4$ (graphed). (a) Find the stationary points. (b) Classify them using $f''$. (c) Find the point of inflection.`,
    S`(a) $6x^2-6x-12=6(x-2)(x+1)=0$: $(-1,11)$, $(2,-16)$. (b) $f''=12x-6$: $f''(-1)<0$ max, $f''(2)>0$ min. (c) $x=\frac12$: $\left(\frac12,-2.5\right)$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 4, ymin: -20, ymax: 14 }, curves: [{ f: (x) => 2 * x ** 3 - 3 * x * x - 12 * x + 4 }], points: [P(-1, 11), P(2, -16), P(0.5, -2.5)], step: { x: 1, y: 4 } })),
  W(4, "hard", 5, S`The graph of $f'$ is shown, where $f'(x)=x^3-3x^2$. (a) Find and classify the stationary points of $f$. (b) Find the x-coordinates of the points of inflection of $f$. (c) Describe the concavity of $f$.`,
    S`(a) $x^2(x-3)=0$: $x=0$ (no sign change: horizontal inflection), $x=3$ (− to +: minimum). (b) $f''=3x^2-6x=0\Rightarrow x=0,2$. (c) concave up for $x<0$ and $x>2$, down for $0<x<2$. [2, 1, 2.]`,
    planeDoc({ view: { xmin: -2, xmax: 4, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 3 * x * x, color: "amber" }], points: [P(0, 0), P(3, 0), P(2, -4)] })),
  W(5, "medium", 4, S`An open box with a square base of side $x$ cm has volume 4000 cm³ (surface area graphed). (a) Show $A=x^2+\frac{16000}{x}$. (b) Find $x$ for the least surface area. (c) Justify that it is a minimum and find the least area.`,
    S`(a) height $\frac{4000}{x^2}$; $A=x^2+4x\cdot\frac{4000}{x^2}$. (b) $2x-\frac{16000}{x^2}=0\Rightarrow x^3=8000\Rightarrow x=20$. (c) $A''=2+\frac{32000}{x^3}>0$; $A=400+800=1200$ cm². [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 45, ymin: -50, ymax: 3200 }, curves: [{ f: (x) => x * x + 16000 / x, a: 5, b: 45 }], points: [P(20, 1200)], step: { x: 5, y: 400 } })),
  W(5, "hard", 5, S`A rectangle is inscribed under $y=27-x^2$ with its base on the x-axis and symmetric about the y-axis (shown). (a) Write the area $A$ in terms of $x$, stating the domain. (b) Find the maximum area. (c) Justify that it is a maximum.`,
    S`(a) $A=2x(27-x^2)=54x-2x^3$, $0<x<\sqrt{27}$. (b) $54-6x^2=0\Rightarrow x=3$; $A=6\times18=108$. (c) $A''=-12x<0$ at $x=3$. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 6, ymin: -2, ymax: 30 }, curves: [{ f: (x) => 27 - x * x }], segs: [{ pts: [[-3, 0], [-3, 18], [3, 18], [3, 0]], color: "red" }], points: [P(3, 18)], step: { x: 1, y: 4 } })),
  W(6, "medium", 4, S`$s=t^3-6t^2-15t$ m for $t\ge0$ (graphed). (a) Find $v$ and $a$. (b) Find when the particle is at rest. (c) Find the total distance travelled in the first 6 s.`,
    S`(a) $v=3t^2-12t-15$, $a=6t-12$. (b) $3(t-5)(t+1)=0$: $t=5$. (c) $s(0)=0$, $s(5)=-100$, $s(6)=-90$: $100+10=110$ m. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -0.2, xmax: 6.5, ymin: -110, ymax: 10 }, curves: [{ f: (t) => t ** 3 - 6 * t * t - 15 * t, a: 0, b: 6.3 }], points: [P(5, -100), P(6, -90)], step: { x: 0.5, y: 10 } })),
  W(6, "hard", 5, S`A stone is thrown upwards from a 30 m cliff with $h=30+25t-5t^2$ (graphed). (a) Find the maximum height. (b) Find when it hits the sea (3 s.f.). (c) Find its speed on impact. (d) Find when it is moving downwards at 10 m/s.`,
    S`(a) $v=25-10t=0\Rightarrow t=2.5$; $h=61.25$ m. (b) $t^2-5t-6=0\Rightarrow t=6$ s. (c) $|v(6)|=35$ m/s. (d) $25-10t=-10\Rightarrow t=3.5$ s. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: -0.2, xmax: 6.5, ymin: -3, ymax: 66 }, curves: [{ f: (t) => 30 + 25 * t - 5 * t * t, a: 0, b: 6 }], points: [P(2.5, 61.25), P(6, 0)], step: { x: 0.5, y: 10 } })),
];
