// IB AA SL Worksheet 13.3 — Applications of Derivatives (teacher edition)
import { F, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const XM = 2.028757838110434; // tan x = −x

const EXAMPLES = [
  { title: "Tangent to a log curve", q: S`Find the tangent to $y=2\ln x$ at $x=e$.`,
    fig: F({ view: { xmin: 0, xmax: 6, ymin: -3, ymax: 4 }, curves: [{ f: (x) => 2 * Math.log(x) }], lines: [{ m: 2 / Math.E, b: 0, color: "amber", dash: true }], points: [pt(Math.E, 2, false, "red")], step: { x: 1, y: 1 } }, 5.6),
    steps: [S`$y=2$; $y'=\frac2x=\frac2e$.`, S`$y-2=\frac2e(x-e)$.`], ans: S`$y=\frac{2}{e}x$ (through the origin)` },
  { title: "Normal", q: S`Find the normal to $y=e^{-x}$ at $x=0$.`,
    steps: [S`$y'(0)=-1$; normal slope 1.`], ans: S`$y=x+1$` },
  { title: "Stationary point", q: S`Find and classify the stationary point of $y=x-\ln x$.`,
    steps: [S`$y'=1-\frac1x=0\Rightarrow x=1$; $y''=\frac{1}{x^2}>0$.`], ans: S`minimum $(1,1)$` },
  { title: "Classify on an interval", q: S`Find and classify the stationary points of $y=\sin x-\frac x2$ for $0\le x\le2\pi$.`,
    fig: F({ view: { xmin: 0, xmax: 2 * PI, ymin: -4, ymax: 1 }, curves: [{ f: (x) => Math.sin(x) - x / 2 }], points: [pt(PI / 3, Math.sin(PI / 3) - PI / 6, false, "red"), pt((5 * PI) / 3, Math.sin((5 * PI) / 3) - (5 * PI) / 6, false, "red")], step: { x: PI / 2, y: 1 } }, 5.6),
    steps: [S`$y'=\cos x-\frac12=0\Rightarrow x=\frac{\pi}{3},\frac{5\pi}{3}$.`, S`$y''=-\sin x$: negative at $\frac{\pi}{3}$, positive at $\frac{5\pi}{3}$.`], ans: S`max $\left(\frac{\pi}{3},0.342\right)$; min $\left(\frac{5\pi}{3},-3.484\right)$` },
  { title: "Inflection points", q: S`Find the points of inflection of $y=e^{-x^2}$.`,
    fig: F({ view: { xmin: -2.5, xmax: 2.5, ymin: -0.2, ymax: 1.2 }, curves: [{ f: (x) => Math.exp(-x * x) }], points: [pt(Math.SQRT1_2, Math.exp(-0.5), false, "red"), pt(-Math.SQRT1_2, Math.exp(-0.5), false, "red")], step: { x: 0.5, y: 0.2 } }, 5.6),
    steps: [S`$y'=-2xe^{-x^2}$, $y''=(4x^2-2)e^{-x^2}$.`, S`$y''=0$ and changes sign at $x=\pm\frac{1}{\sqrt2}$.`], ans: S`$\left(\pm\frac{1}{\sqrt2},\ e^{-1/2}\approx0.607\right)$` },
  { title: "Triangle area", q: S`Two sides of a triangle are 8 cm with angle θ between them. Find the largest area.`,
    steps: [S`$A=32\sin\theta$; $A'=32\cos\theta=0\Rightarrow\theta=\frac{\pi}{2}$.`], ans: S`$32$ cm² at $\theta=\frac{\pi}{2}$` },
  { title: "Drug concentration", q: S`A concentration is $C=10te^{-0.5t}$ mg/L. Find the maximum.`,
    fig: F({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 8 }, curves: [{ f: (t) => 10 * t * Math.exp(-0.5 * t) }], points: [pt(2, 20 / Math.E, false, "red")], step: { x: 1, y: 1 } }, 5.6),
    steps: [S`$C'=10e^{-0.5t}(1-0.5t)=0\Rightarrow t=2$.`], ans: S`$\frac{20}{e}\approx7.358$ mg/L at $t=2$` },
  { title: "Rectangle in a semicircle", q: S`A rectangle is inscribed in a semicircle of radius 5, with top corners at angle θ: $(\pm5\cos\theta,5\sin\theta)$. Find the largest area.`,
    steps: [S`$A=2(5\cos\theta)(5\sin\theta)=25\sin2\theta$.`, S`Maximum when $2\theta=\frac{\pi}{2}$.`], ans: S`$25$ at $\theta=\frac{\pi}{4}$` },
  { title: "Using a GDC", q: S`Find the maximum of $y=x\sin x$ for $0\le x\le\pi$.`,
    fig: F({ view: { xmin: 0, xmax: PI, ymin: -0.2, ymax: 2.2 }, curves: [{ f: (x) => x * Math.sin(x) }], points: [pt(XM, XM * Math.sin(XM), false, "red")], step: { x: PI / 4, y: 0.5 } }, 5.6),
    steps: [S`$y'=\sin x+x\cos x=0\Rightarrow\tan x=-x$.`, S`GDC: $x\approx2.029$.`], ans: S`$\approx1.820$ at $x\approx2.029$` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the gradient of the tangent to $y=e^{3x}$ at $x=0$.`, recap: "y′ = 3e³ˣ.", ans: S`$3$` },
  { level: 1, q: S`Find the gradient of the normal to $y=x^2+\sin x$ at $x=0$.`, recap: "Tangent slope 1.", ans: S`$-1$` },
  { level: 1, q: S`Find the x-coordinate of the stationary point of $y=2x-e^x$.`, recap: "eˣ = 2.", ans: S`$\ln2$` },
  { level: 2, q: S`Find and classify the stationary point of $y=x^2-8\ln x$.`, recap: S`$2x-\frac8x$.`, ans: S`min $(2,\ 4-8\ln2\approx-1.545)$` },
  { level: 2, q: S`Find the tangent to $y=\cos2x$ at $x=\frac{\pi}{4}$.`, recap: "Slope −2.", ans: S`$y=-2x+\frac{\pi}{2}$` },
  { level: 2, q: S`Find the points of inflection of $y=\ln(x^2+4)$.`, recap: S`$y''=\frac{2(4-x^2)}{(x^2+4)^2}$.`, ans: S`$(\pm2,\ \ln8)$` },
  { level: 2, q: S`Find the maximum point of $y=\frac{\ln x}{x^2}$ shown.`, recap: S`$y'=\frac{1-2\ln x}{x^3}$.`, ans: S`$\left(\sqrt e,\ \frac{1}{2e}\right)\approx(1.649,0.184)$`,
    fig: F({ view: { xmin: 0, xmax: 6, ymin: -0.5, ymax: 0.3 }, curves: [{ f: (x) => Math.log(x) / (x * x) }], step: { x: 1, y: 0.1 } }, 5) },
  { level: 2, q: S`Find the tangent to $y=xe^{1-x}$ at $x=1$.`, recap: S`$y'=e^{1-x}(1-x)$.`, ans: S`$y=1$` },
  { level: 3, space: 4, q: S`Find the shortest distance from the origin to the curve $y=e^x$ (GDC).`, recap: S`minimise $x^2+e^{2x}$.`, ans: S`$\approx0.780$ at $x\approx-0.426$` },
  { level: 3, space: 4, q: S`A rod touches a corner and two walls, with length $L=\frac{3}{\sin\theta}+\frac{4}{\cos\theta}$. Find the minimum L.`, recap: S`$\tan^3\theta=\frac34$.`, ans: S`$\approx9.866$ at $\theta\approx0.738$` },
  { level: 3, space: 4, q: S`A concentration is $C=50(e^{-0.2t}-e^{-t})$. Find when it is greatest and its value.`, recap: S`$e^{-0.8t}=0.2$.`, ans: S`$t=\frac{\ln5}{0.8}\approx2.012$, $C\approx26.75$` },
  { level: 3, space: 4, q: S`Find the points of inflection of $y=\cos^22x$ for $0\le x\le\frac{\pi}{2}$.`, recap: S`$y''=-8\cos4x$.`, ans: S`$x=\frac{\pi}{8},\frac{3\pi}{8}$` },
  { level: 3, space: 4, q: S`Explain why $f''(a)=0$ does not guarantee a point of inflection, using $y=x^4$.`, recap: "Sign change needed.", ans: S`$y''=12x^2\ge0$ does not change sign at 0: a minimum` },
];

export const WS = {
  code: "13.3",
  title: "Applications of Derivatives",
  bigideas: S`Tangent slope $f'(a)$, normal slope $-\frac{1}{f'(a)}$. Stationary points satisfy $f'(x)=0$; $f''<0$ gives a maximum, $f''>0$ a minimum. Points of inflection need $f''$ to change sign. Optimisation: write the quantity as a function of one variable, differentiate, solve, and justify the maximum or minimum (using a GDC when the equation has no exact solution).`,
  goals: ["Find tangents and normals.", "Classify stationary points.", "Find points of inflection.", "Optimise trigonometric and exponential models."],
  curriculum: "SL 5.4, 5.7, 5.8",
  vocab: [["Normal", "perpendicular to the tangent"], ["Inflection", "f″ changes sign"], ["Optimise", "find greatest or least value"]],
  hook: "At what angle should a gutter's sides be bent to carry the most water?",
  concepts: [
    ["1. Tangent and normal", S`${F({ view: { xmin: -1, xmax: 3, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.exp(x / 2) }], lines: [{ m: 0.5, b: 1, color: "amber", dash: true }, { m: -2, b: 1, color: "green", dash: true }], step: { x: 1, y: 1 } }, 4.6)} Perpendicular slopes multiply to −1.`],
    ["2. Nature", "Second-derivative test."],
    ["3. Optimisation", "Model, differentiate, solve, justify."],
  ],
  tips: ["Normal slope = −1/m.", "Check endpoints.", "Use radians.", "Inflection needs a sign change.", "GDC for hard roots."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
