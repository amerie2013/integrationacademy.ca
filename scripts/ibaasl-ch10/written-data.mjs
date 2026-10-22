// IB AA SL chapter 10 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { planeDoc, P } from "../mcr3u-ch1/bank/fig.mjs";
import { areaDoc, stripsOf } from "./figs10.mjs";

const T = { 1: "10.1 Antiderivatives and the Indefinite Integral", 2: "10.2 Integrating Exponentials, Reciprocals and Linear Composites", 3: "10.3 Area and Definite Integrals", 4: "10.4 The Fundamental Theorem of Calculus", 5: "10.5 Area Between Curves", 6: "10.6 Kinematics with Integration" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const f = (v, d = 3) => String(Math.round(v * 10 ** d) / 10 ** d);
const trap = (g, a, b, n) => { const h = (b - a) / n; let s = (g(a) + g(b)) / 2; for (let i = 1; i < n; i++) s += g(a + i * h); return s * h; };

export const WRITTEN = [
  W(1, "medium", 4, S`The gradient of a curve is $\frac{dy}{dx}=6x^2-6$. (a) Find the x-coordinates of the stationary points. (b) The curve passes through $(1,-1)$; find its equation. (c) Find the y-intercept.`,
    S`(a) $6x^2=6\Rightarrow x=\pm1$. (b) $y=2x^3-6x+C$; $-1=2-6+C\Rightarrow C=3$: $y=2x^3-6x+3$. (c) $(0,3)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 10 }, curves: [{ f: (x) => 2 * x ** 3 - 6 * x + 3 }], points: [P(1, -1, "", "red"), P(-1, 7, "", "green"), P(0, 3, "", "blue")], step: { x: 1, y: 2 } })),
  W(1, "hard", 5, S`$f''(x)=12x-6$. The graph of $f$ has a stationary point at $(1,2)$. (a) Find $f'(x)$. (b) Find $f(x)$. (c) Find the other stationary point and classify both.`,
    S`(a) $f'=6x^2-6x+C_1$; $f'(1)=0\Rightarrow C_1=0$. (b) $f=2x^3-3x^2+C_2$; $2=2-3+C_2\Rightarrow C_2=3$. (c) $f'=6x(x-1)$: $(0,3)$ max ($f''(0)=-6$), $(1,2)$ min ($f''(1)=6$). [1, 2, 2.]`,
    planeDoc({ view: { xmin: -1, xmax: 2, ymin: -2, ymax: 6 }, curves: [{ f: (x) => 2 * x ** 3 - 3 * x * x + 3 }], points: [P(0, 3, "", "green"), P(1, 2, "", "red")], step: { x: 0.5, y: 1 } })),
  W(2, "medium", 4, S`(a) Find $\int\left(e^{2x}+\frac{3}{x}\right)dx$ for $x>0$. (b) Find $\int(4x-3)^5\,dx$. (c) $f'(x)=\frac{2}{2x+1}$ and the graph of $f$ passes through $(0,4)$; find $f(x)$.`,
    S`(a) $\frac12e^{2x}+3\ln x+C$. (b) $\frac{(4x-3)^6}{24}+C$. (c) $f=\ln(2x+1)+4$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 5, ymin: 2, ymax: 7 }, curves: [{ f: (x) => Math.log(2 * x + 1) + 4, a: -0.45, b: 5 }], points: [P(0, 4, "", "red")], step: { x: 1, y: 1 } })),
  W(2, "hard", 5, S`(a) Show that $\frac{d}{dx}\ln(x^2+9)=\frac{2x}{x^2+9}$. (b) Hence find $\int\frac{x}{x^2+9}\,dx$. (c) Find the exact area under $y=\frac{x}{x^2+9}$ from $x=0$ to $x=4$ (shaded).`,
    S`(a) chain rule: $\frac{1}{x^2+9}\cdot2x$. (b) $\frac12\ln(x^2+9)+C$. (c) $\frac12\ln25-\frac12\ln9=\ln\frac53\approx${f(Math.log(5 / 3))}$. [1, 2, 2.]`,
    areaDoc({ view: { xmin: -0.5, xmax: 6, ymin: -0.05, ymax: 0.2 }, step: { x: 1, y: 0.05 }, curves: [{ f: (x) => x / (x * x + 9) }] }, [{ f: (x) => x / (x * x + 9), a: 0, b: 4 }])),
  W(3, "medium", 4, S`For $y=\sqrt{x+1}$ on $[0,3]$: (a) find the lower and upper sums with 3 strips of width 1; (b) estimate the area with the trapezoidal rule (3 strips); (c) state whether (b) is an over- or underestimate.`,
    S`(a) lower $1+\sqrt2+\sqrt3\approx${f(1 + Math.SQRT2 + Math.sqrt(3))}$; upper $\sqrt2+\sqrt3+2\approx${f(Math.SQRT2 + Math.sqrt(3) + 2)}$. (b) $\frac12[1+2(\sqrt2+\sqrt3)+2]\approx${f(trap((x) => Math.sqrt(x + 1), 0, 3, 3))}$. (c) underestimate: the curve is concave down. [2, 1, 1.]`,
    areaDoc({ view: { xmin: -0.5, xmax: 3.5, ymin: -0.3, ymax: 2.5 }, step: { x: 0.5, y: 0.5 }, curves: [{ f: (x) => Math.sqrt(x + 1), a: -1, b: 3.5 }] }, [], stripsOf((x) => Math.sqrt(x + 1), 0, 3, 3, "trap", "amber"))),
  W(3, "hard", 5, S`A tank is filled at a rate measured every 2 minutes: $t$: 0, 2, 4, 6, 8; $r$ (L/min): 5, 9, 12, 13, 11 (graphed). (a) Estimate the volume added in 8 minutes with the trapezoidal rule. (b) Find the upper and lower rectangle estimates (the rate rises then falls, so use the larger/smaller end of each strip). (c) Comment on the reliability of the estimate.`,
    S`(a) $1\cdot[5+2(9+12+13)+11]=84$ L. (b) upper $2(9+12+13+13)=94$; lower $2(5+9+12+11)=74$. (c) the true value lies between 74 and 94; more frequent readings would narrow the range. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 9, ymin: 0, ymax: 15 }, segs: [{ pts: [[0, 5], [2, 9], [4, 12], [6, 13], [8, 11]] }], points: [P(0, 5, false), P(2, 9, false), P(4, 12, false), P(6, 13, false), P(8, 11, false)], step: { x: 1, y: 1 }, xlabel: "t", ylabel: "r" })),
  W(4, "medium", 4, S`(a) Evaluate $\int_1^2(6x^2-4x)\,dx$. (b) Find the area enclosed by $y=x^2-5x+4$ and the x-axis (shaded). (c) Find $\int_0^{\ln7}e^{x}\,dx$.`,
    S`(a) $\left[2x^3-2x^2\right]_1^2=8-0=8$. (b) roots 1, 4: $\left|\int_1^4\right|=\frac92$. (c) $7-1=6$. [1, 2, 1.]`,
    areaDoc({ view: { xmin: -0.5, xmax: 5, ymin: -3, ymax: 4 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 5 * x + 4 }] }, [{ f: (x) => x * x - 5 * x + 4, a: 1, b: 4, color: "red" }])),
  W(4, "hard", 6, S`The curve $y=x^3-6x^2+8x$ is shown. (a) Find its x-intercepts. (b) Find $\int_0^4 y\,dx$. (c) Find the total area enclosed between the curve and the x-axis. (d) Explain why (b) and (c) differ.`,
    S`(a) $x(x-2)(x-4)$: 0, 2, 4. (b) $\left[\frac14x^4-2x^3+4x^2\right]_0^4=64-128+64=0$. (c) $\int_0^2=4$ and $\int_2^4=-4$: total 8. (d) the parts above and below the axis are equal and cancel in the integral. [1, 2, 2, 1.]`,
    areaDoc({ view: { xmin: -0.5, xmax: 4.5, ymin: -4, ymax: 4 }, step: { x: 0.5, y: 1 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 8 * x }] }, [{ f: (x) => x ** 3 - 6 * x * x + 8 * x, a: 0, b: 2, color: "green" }, { f: (x) => x ** 3 - 6 * x * x + 8 * x, a: 2, b: 4, color: "red" }])),
  W(5, "medium", 4, S`The region R is enclosed by $y=x^2-2x$ and $y=x+4$ (shown). (a) Find the x-coordinates of the intersections. (b) Write an integral for the area of R. (c) Find the area.`,
    S`(a) $x^2-2x=x+4\Rightarrow(x-4)(x+1)=0$: $x=-1,4$. (b) $\int_{-1}^{4}\left(4+3x-x^2\right)dx$. (c) $\left[4x+\frac32x^2-\frac13x^3\right]_{-1}^4=\frac{56}3+\frac{13}6=\frac{125}6$. [1, 1, 2.]`,
    areaDoc({ view: { xmin: -2, xmax: 5, ymin: -2, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x - 2 * x }, { f: (x) => x + 4, color: "amber" }] }, [{ f: (x) => x + 4, g: (x) => x * x - 2 * x, a: -1, b: 4 }])),
  W(5, "hard", 6, S`The curves $y=e^{x}$ and $y=4-e^{x}$ are shown with the y-axis. (a) Find where they meet. (b) Find the exact area of the region bounded by the two curves and the y-axis. (c) Find the area between the curves from their intersection to $x=1$ (3 s.f.).`,
    S`(a) $2e^x=4\Rightarrow x=\ln2$. (b) $\int_0^{\ln2}(4-2e^x)\,dx=4\ln2-2(2-1)=4\ln2-2\approx${f(4 * Math.log(2) - 2)}$. (c) $\int_{\ln2}^1(2e^x-4)\,dx=2e-4-(4-4\ln2)=2e-8+4\ln2\approx${f(2 * Math.E - 8 + 4 * Math.log(2))}$. [1, 3, 2.]`,
    areaDoc({ view: { xmin: -0.5, xmax: 1.5, ymin: -1, ymax: 5 }, step: { x: 0.5, y: 1 }, curves: [{ f: Math.exp }, { f: (x) => 4 - Math.exp(x), color: "amber" }] }, [{ f: (x) => 4 - Math.exp(x), g: Math.exp, a: 0, b: Math.log(2) }, { f: Math.exp, g: (x) => 4 - Math.exp(x), a: Math.log(2), b: 1, color: "green" }])),
  W(6, "medium", 4, S`A particle has $v(t)=3t^2-12t+9$ m/s (graphed). (a) Find when it is at rest. (b) Find its displacement from $t=0$ to $t=4$. (c) Find the distance travelled from $t=0$ to $t=4$.`,
    S`(a) $3(t-1)(t-3)=0$: $t=1,3$. (b) $\left[t^3-6t^2+9t\right]_0^4=64-96+36=4$. (c) $s(1)=4$, $s(3)=0$, $s(4)=4$: $4+4+4=12$. [1, 1, 2.]`,
    areaDoc({ view: { xmin: -0.3, xmax: 4.5, ymin: -4, ymax: 10 }, step: { x: 1, y: 2 }, curves: [{ f: (t) => 3 * t * t - 12 * t + 9 }], xlabel: "t", ylabel: "v" }, [{ f: (t) => 3 * t * t - 12 * t + 9, a: 0, b: 1, color: "green" }, { f: (t) => 3 * t * t - 12 * t + 9, a: 1, b: 3, color: "red" }, { f: (t) => 3 * t * t - 12 * t + 9, a: 3, b: 4, color: "green" }])),
  W(6, "hard", 6, S`A particle moves with $a(t)=2-\frac{8}{(t+1)^2}$ for $t\ge0$, with $v(0)=-4$ and $s(0)=0$. (a) Show that $v(t)=2t+\frac{8}{t+1}-12$. (b) Find when the particle is at rest. (c) Find the distance travelled in the first 5 seconds (use a GDC).`,
    S`(a) $v=2t+\frac{8}{t+1}+C$; $-4=8+C\Rightarrow C=-12$. (b) $2t(t+1)+8=12(t+1)\Rightarrow t^2-5t-2=0\Rightarrow t=\frac{5+\sqrt{33}}2\approx5.372$. (c) $v<0$ on $[0,5]$, so distance $=\left|\int_0^5v\,dt\right|=\left|25+8\ln6-60\right|\approx${f(Math.abs(25 + 8 * Math.log(6) - 60))}$. [2, 2, 2.]`,
    planeDoc({ view: { xmin: -0.3, xmax: 7, ymin: -6, ymax: 3 }, curves: [{ f: (t) => 2 * t + 8 / (t + 1) - 12, a: 0, b: 7 }], step: { x: 1, y: 1 }, xlabel: "t", ylabel: "v" })),
];
