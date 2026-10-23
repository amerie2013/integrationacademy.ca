// IB AA SL chapter 13 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { planeDoc } from "../mcr3u-ch1/bank/fig.mjs";
import { areaDoc } from "./figs13.mjs";

const T = { 1: "13.1 The Chain, Product and Quotient Rules", 2: "13.2 Derivatives of Trigonometric Functions", 3: "13.3 Applications of Derivatives", 4: "13.4 Integrating Trigonometric and Exponential Functions", 5: "13.5 Integration by Substitution", 6: "13.6 Kinematics and Accumulating Change" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const PI = Math.PI, f = (v, d = 2) => String(Math.round(v * 10 ** d) / 10 ** d);
const plot = (view, step, curves, extra = {}) => planeDoc({ view, step, curves, ...extra });
const AC = Math.acos(1 / Math.sqrt(3));

export const WRITTEN = [
  W(1, "medium", 4, S`The graph of $y=x^2e^{-2x}$ is shown. (a) Show that $\frac{dy}{dx}=2xe^{-2x}(1-x)$. (b) Find the coordinates of the stationary points. (c) State the nature of each.`,
    S`(a) $2xe^{-2x}-2x^2e^{-2x}=2xe^{-2x}(1-x)$. (b) $(0,0)$ and $(1,e^{-2})\approx(1,${f(Math.exp(-2), 3)})$. (c) minimum at the origin, maximum at $x=1$ (sign of $y'$ changes − to + and + to −). [1, 2, 1.]`,
    plot({ xmin: -0.5, xmax: 4, ymin: -0.05, ymax: 0.2 }, { x: 0.5, y: 0.05 }, [{ f: (x) => x * x * Math.exp(-2 * x) }])),
  W(1, "hard", 6, S`Consider $y=\frac{x}{\sqrt{x^2+3}}$, shown with its horizontal asymptotes. (a) Show that $\frac{dy}{dx}=\frac{3}{(x^2+3)^{3/2}}$. (b) Find the gradient at $x=1$. (c) Find the equation of the tangent at $x=1$. (d) Explain why the curve is always increasing and why it approaches $y=\pm1$.`,
    S`(a) Quotient rule: $\frac{\sqrt{x^2+3}-\frac{x^2}{\sqrt{x^2+3}}}{x^2+3}=\frac{3}{(x^2+3)^{3/2}}$. (b) $\frac38$. (c) $y-\frac12=\frac38(x-1)$. (d) $y'>0$ for all x; for large $|x|$, $\sqrt{x^2+3}\approx|x|$ so $y\to\pm1$. [2, 1, 1, 2.]`,
    plot({ xmin: -6, xmax: 6, ymin: -1.4, ymax: 1.4 }, { x: 1, y: 0.5 }, [{ f: (x) => x / Math.sqrt(x * x + 3) }], { lines: [{ m: 0, b: 1, color: "amber", dash: true }, { m: 0, b: -1, color: "amber", dash: true }] })),
  W(2, "medium", 4, S`The graph of $y=3\sin x+4\cos x$ for $0\le x\le2\pi$ is shown. (a) Find $\frac{dy}{dx}$. (b) Find the x-coordinates of the stationary points (3 d.p.). (c) Find the equation of the tangent at $x=0$.`,
    S`(a) $3\cos x-4\sin x$. (b) $\tan x=\frac34$: $x\approx${f(Math.atan(0.75), 3)}$ (max, y = 5) and $x\approx${f(Math.atan(0.75) + PI, 3)}$ (min, y = −5). (c) $y=3x+4$. [1, 2, 1.]`,
    plot({ xmin: 0, xmax: 2 * PI, ymin: -5.5, ymax: 5.5 }, { x: PI / 2, y: 1 }, [{ f: (x) => 3 * Math.sin(x) + 4 * Math.cos(x) }])),
  W(2, "hard", 6, S`Let $y=\sin^2x\cos x$ for $0\le x\le\pi$ (shown). (a) Show that $\frac{dy}{dx}=\sin x(3\cos^2x-1)$. (b) Find the x-coordinates of the stationary points. (c) Find the greatest value of y exactly.`,
    S`(a) $2\sin x\cos^2x-\sin^3x=\sin x(2\cos^2x-\sin^2x)=\sin x(3\cos^2x-1)$. (b) $x=0,\pi$, and $\cos x=\pm\frac{1}{\sqrt3}$: $x\approx${f(AC, 3)}$ or $${f(PI - AC, 3)}$. (c) At $\cos x=\frac{1}{\sqrt3}$: $\frac23\cdot\frac{1}{\sqrt3}=\frac{2}{3\sqrt3}\approx${f((2 / 3) / Math.sqrt(3), 3)}$. [2, 2, 2.]`,
    plot({ xmin: 0, xmax: PI, ymin: -0.5, ymax: 0.5 }, { x: PI / 4, y: 0.1 }, [{ f: (x) => Math.sin(x) ** 2 * Math.cos(x) }])),
  W(3, "medium", 4, S`The curve $y=e^{x/2}$ is shown. (a) Find the equation of the tangent at $x=2$. (b) Show that this tangent passes through the origin. (c) Find where the normal at $x=2$ meets the x-axis.`,
    S`(a) $y=e$, slope $\frac e2$: $y-e=\frac e2(x-2)$, i.e. $y=\frac e2x$. (b) $x=0\Rightarrow y=0$. (c) Normal slope $-\frac2e$: $0-e=-\frac2e(x-2)\Rightarrow x=2+\frac{e^2}{2}\approx${f(2 + Math.E ** 2 / 2)}$. [1, 1, 2.]`,
    plot({ xmin: -1, xmax: 6, ymin: -1, ymax: 6 }, { x: 1, y: 1 }, [{ f: (x) => Math.exp(x / 2) }], { lines: [{ m: Math.E / 2, b: 0, color: "amber", dash: true }] })),
  W(3, "hard", 6, S`A firm's profit from selling at price x is $P=1000(x-20)e^{-0.05x}$ (shown). (a) Show that $P'=1000e^{-0.05x}(2-0.05x)$. (b) Find the price that maximises profit. (c) Find the maximum profit. (d) Justify that it is a maximum.`,
    S`(a) $1000\left[e^{-0.05x}-0.05(x-20)e^{-0.05x}\right]=1000e^{-0.05x}(2-0.05x)$. (b) $x=40$. (c) $P=20000e^{-2}\approx${f(20000 * Math.exp(-2), 1)}$. (d) $P'>0$ for $x<40$ and $P'<0$ for $x>40$. [2, 1, 1, 2.]`,
    plot({ xmin: 0, xmax: 120, ymin: -500, ymax: 3200 }, { x: 10, y: 500 }, [{ f: (x) => 1000 * (x - 20) * Math.exp(-0.05 * x) }])),
  W(4, "medium", 4, S`(a) Evaluate $\int_0^{\pi/3}(2\sin x+\cos2x)\,dx$. (b) Find the shaded area under $y=1+\sin2x$ from 0 to π.`,
    S`(a) $\left[-2\cos x+\frac12\sin2x\right]_0^{\pi/3}=-1+\frac{\sqrt3}{4}+2\approx${f(1 + Math.sqrt(3) / 4, 3)}$. (b) $\left[x-\frac12\cos2x\right]_0^{\pi}=\pi$. [2, 2.]`,
    areaDoc({ view: { xmin: 0, xmax: PI, ymin: -0.2, ymax: 2.2 }, step: { x: PI / 4, y: 0.5 }, curves: [{ f: (x) => 1 + Math.sin(2 * x), color: "violet" }] }, [{ f: (x) => 1 + Math.sin(2 * x), a: 0, b: PI, color: "green" }])),
  W(4, "hard", 5, S`The graphs of $y=\cos x$ and $y=\cos3x$ for $0\le x\le\frac{\pi}{2}$ are shown. (a) Show that they meet at $x=0$ and $x=\frac{\pi}{2}$. (b) Explain which curve is above between them. (c) Find the shaded area.`,
    S`(a) Both equal 1 at 0 and 0 at $\frac{\pi}{2}$. (b) $\cos x-\cos3x=2\sin2x\sin x\ge0$ there, so $\cos x$ is above. (c) $\left[\sin x-\frac13\sin3x\right]_0^{\pi/2}=1+\frac13=\frac43$. [1, 2, 2.]`,
    areaDoc({ view: { xmin: 0, xmax: PI / 2, ymin: -1.1, ymax: 1.1 }, step: { x: PI / 8, y: 0.5 }, curves: [{ f: Math.cos, color: "violet" }, { f: (x) => Math.cos(3 * x), color: "amber" }] }, [{ f: Math.cos, g: (x) => Math.cos(3 * x), a: 0, b: PI / 2, color: "green" }])),
  W(5, "medium", 4, S`(a) Use $u=x^2+2$ to find $\int\frac{x}{(x^2+2)^2}dx$. (b) Hence find the shaded area under $y=\frac{x}{(x^2+2)^2}$ from 0 to $\sqrt2$.`,
    S`(a) $\frac12\int u^{-2}du=-\frac{1}{2(x^2+2)}+C$. (b) $-\frac18+\frac14=\frac18$. [2, 2.]`,
    areaDoc({ view: { xmin: -0.1, xmax: 3, ymin: -0.02, ymax: 0.2 }, step: { x: 0.5, y: 0.05 }, curves: [{ f: (x) => x / (x * x + 2) ** 2, color: "violet" }] }, [{ f: (x) => x / (x * x + 2) ** 2, a: 0, b: Math.SQRT2, color: "green" }])),
  W(5, "hard", 5, S`(a) Show that if $u=1+\cos^2x$ then $du=-\sin2x\,dx$. (b) Hence evaluate $\int_0^{\pi/2}\frac{\sin2x}{1+\cos^2x}dx$, the shaded area. (c) Explain why the limits become 2 and 1.`,
    S`(a) $\frac{du}{dx}=-2\cos x\sin x=-\sin2x$. (b) $\int_2^1-\frac{du}{u}=\ln2\approx0.693$. (c) At $x=0$, $u=2$; at $x=\frac{\pi}{2}$, $u=1$. [1, 3, 1.]`,
    areaDoc({ view: { xmin: 0, xmax: PI / 2, ymin: -0.05, ymax: 0.8 }, step: { x: PI / 8, y: 0.1 }, curves: [{ f: (x) => Math.sin(2 * x) / (1 + Math.cos(x) ** 2), color: "violet" }] }, [{ f: (x) => Math.sin(2 * x) / (1 + Math.cos(x) ** 2), a: 0, b: PI / 2, color: "green" }])),
  W(6, "medium", 4, S`A particle has velocity $v=3\cos2t$ m/s for $0\le t\le\frac{\pi}{2}$ (shown). (a) Find when it is at rest. (b) Find its displacement. (c) Find the distance travelled.`,
    S`(a) $t=\frac{\pi}{4}$. (b) $\left[\frac32\sin2t\right]_0^{\pi/2}=0$. (c) $\frac32+\frac32=3$ m. [1, 1, 2.]`,
    areaDoc({ view: { xmin: 0, xmax: PI / 2, ymin: -3.3, ymax: 3.3 }, step: { x: PI / 8, y: 1 }, curves: [{ f: (t) => 3 * Math.cos(2 * t), color: "violet" }] }, [{ f: (t) => Math.max(0, 3 * Math.cos(2 * t)), a: 0, b: PI / 2, color: "green" }, { f: (t) => Math.min(0, 3 * Math.cos(2 * t)), a: 0, b: PI / 2, color: "red" }])),
  W(6, "hard", 6, S`A 100 L tank has inflow $4+2\cos\frac{\pi t}{6}$ L/min and outflow 5 L/min. The graph shows the net rate. (a) Write the net rate of change of volume. (b) Find when the volume is greatest in $0\le t\le12$. (c) Find that greatest volume. (d) Find the volume at $t=12$.`,
    S`(a) $V'=-1+2\cos\frac{\pi t}{6}$. (b) $V'=0$ at $t=2$ and changes + to −. (c) $100+\int_0^2V'dt=98+\frac{12}{\pi}\sin\frac{\pi}{3}\approx${f(98 + (12 / PI) * Math.sin(PI / 3))}$ L. (d) $100-12+0=88$ L. [1, 2, 2, 1.]`,
    plot({ xmin: 0, xmax: 12, ymin: -3.5, ymax: 1.5 }, { x: 1, y: 0.5 }, [{ f: (t) => -1 + 2 * Math.cos((PI * t) / 6) }])),
];
