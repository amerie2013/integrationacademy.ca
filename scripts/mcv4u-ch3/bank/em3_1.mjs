// 3.1 Increasing and Decreasing Functions — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  mc(S`If $f'(x)\gt0$ for every $x$ in an interval, then on that interval $f$ is:`, "increasing", ["decreasing", "constant", "concave up"], "Positive slopes rise."),
  tf(S`If $f'(x)\lt0$ on an interval, $f$ is decreasing there.`, true, "Negative slopes fall."),
  num(S`$f(x)=x^2-16x$ is decreasing for $x\lt a$. Find $a$.`, 8, "f′ = 2x − 16."),
  num(S`$f(x)=x^2+2x$ is increasing for $x\gt a$. Find $a$.`, -1, "f′ = 2x + 2."),
  num(S`Find the critical number of $f(x)=x^2-10x$.`, 5, "2x − 10 = 0."),
  mc(S`Where is $f(x)=3x+1$ increasing?`, "everywhere", ["nowhere", "for x > 0 only", "for x < 0 only"], "f′ = 3 > 0."),
  num(S`$f'(x)=x-7$. For which $x$ values is $f$ increasing: $x\gt\,?$`, 7, "f′ > 0."),
  tf(S`$f(x)=-2x+5$ is decreasing everywhere.`, true, "f′ = −2."),
  fill(S`A number $c$ in the domain where $f'(c)=0$ or $f'(c)$ does not exist is called a ___ number.`, ["critical"], "Where the sign of f′ can change."),
  num(S`How many critical numbers does $f(x)=x^3-75x$ have?`, 2, "3x² = 75: x = ±5."),
  mc(S`$f'(2)=-3$. Near $x=2$, $f$ is:`, "decreasing", ["increasing", "at a maximum", "constant"], "Negative slope."),
  num("The graph of f(x) = x² − 6x + 5 is shown. f is decreasing for x < a. Find a.", 3, "Vertex at x = 3.", graph((x) => x * x - 6 * x + 5, { xmin: -1, xmax: 7, ymin: -5, ymax: 8 }, [P(3, -4)])),
  tf("A function can be negative and increasing at the same time.", true, "Direction, not height: f(x) = x on (−5, −1)."),
  num(S`$f(x)=16-x^2$ is increasing for $x\lt a$. Find $a$.`, 0, "f′ = −2x > 0 for x < 0."),
  mc(S`$f'(x)=(x-1)(x+2)$. What is the sign of $f'$ on $(-2,1)$?`, "negative", ["positive", "zero", "it changes"], "Test x = 0: (−1)(2)."),
  num(S`On how many intervals is $f(x)=x^3$ decreasing?`, 0, "f′ = 3x² ≥ 0."),
  num(S`$f(x)=2x^2-12x+1$ is decreasing for $x\lt a$. Find $a$.`, 3, "4x − 12 = 0."),
  tf(S`If $f'(x)=x^2$, then $f$ never decreases.`, true, "x² ≥ 0."),
  num("The graph of f′(x) = 2x − 4 is shown. f is increasing for x > a. Find a.", 2, "f′ > 0 right of its zero.", graph((x) => 2 * x - 4, { xmin: -1, xmax: 5, ymin: -5, ymax: 5 }, [P(2, 0)], { more: [] })),
  mc(S`On $x\gt0$, $f(x)=\frac1x$ is:`, "decreasing", ["increasing", "constant", "increasing then decreasing"], "f′ = −1/x² < 0."),
];

export const M = [
  num(S`$f(x)=x^3-27x+2$ is decreasing on $(-a,a)$. Find $a$.`, 3, "3x² − 27 < 0."),
  num(S`$f(x)=2x^3-24x$ is increasing for $x\gt a$ (and for $x\lt-a$). Find $a$.`, 2, "6x² − 24 = 0."),
  mc(S`Where is $f(x)=x^3+12x^2$ decreasing?`, S`$(-8,0)$`, [S`$(0,8)$`, S`$(-\infty,-8)$`, S`$(-12,0)$`], "f′ = 3x(x + 8)."),
  num(S`On how many separate intervals is $f(x)=x^4-50x^2$ increasing?`, 2, "f′ = 4x(x − 5)(x + 5): (−5, 0) and (5, ∞)."),
  num(S`$f(x)=x+\frac1x$ is decreasing on $(0,b)$. Find $b$.`, 1, "1 − 1/x² < 0 ⇔ x² < 1."),
  mc(S`Describe $f(x)=\frac{x}{x+1}$.`, "increasing on each part of its domain", ["decreasing on each part", "increasing, then decreasing", "constant"], "f′ = 1/(x + 1)² > 0."),
  num(S`$f(x)=x^3-9x^2+15x$ is decreasing on $(1,b)$. Find $b$.`, 5, "f′ = 3(x − 1)(x − 5)."),
  num("The graph of f′(x) = (x + 2)(x − 1) is shown. At what x does f change from increasing to decreasing?", -2, "f′ goes from + to − at x = −2.", graph((x) => (x + 2) * (x - 1), { xmin: -4, xmax: 3, ymin: -3, ymax: 5 }, [P(-2, 0), P(1, 0)])),
  num(S`$f(x)=\sqrt x-x$ is decreasing for $x\gt a$. Find $a$.`, 0.25, "1/(2√x) − 1 < 0 ⇔ √x > ½.", null, 0.0001),
  tf(S`If $f'(x)\ge0$ on an interval and $f'(x)=0$ only at isolated points, $f$ is increasing there.`, true, "Like x³ through 0."),
  num(S`$f(x)=x^4-4x$ is decreasing for $x\lt a$. Find $a$.`, 1, "4x³ − 4 < 0."),
  num(S`$f(x)=-x^3+12x$ is increasing on $(-a,a)$. Find $a$.`, 2, "−3x² + 12 > 0."),
  mc(S`A population is $P(t)=-t^2+10t+50$, $t\ge0$. When is it growing?`, S`$0\le t\lt5$`, [S`$t\gt5$`, S`$0\le t\lt10$`, S`always`], "P′ = −2t + 10."),
  num(S`$f(x)=x^2(x-6)$ is decreasing on $(0,b)$. Find $b$.`, 4, "f′ = 3x² − 12x = 3x(x − 4)."),
  num(S`$f(x)=(x-3)^2(x+1)$ is decreasing on $\left(\tfrac13,b\right)$. Find $b$.`, 3, "f′ = (x − 3)(3x − 1)."),
  num("The graph of f(x) = x³ + 3x² − 9x is shown. f decreases on (a, 1). Find a.", -3, "f′ = 3(x + 3)(x − 1).", graph((x) => x ** 3 + 3 * x * x - 9 * x, { xmin: -5, xmax: 3, ymin: -10, ymax: 30 }, [P(-3, 27), P(1, -5)], { step: { x: 1, y: 5 } })),
  mc(S`Where is $f(x)=\frac{1}{x^2+1}$ increasing?`, S`$x\lt0$`, [S`$x\gt0$`, S`everywhere`, S`nowhere`], "f′ = −2x/(x² + 1)²."),
  num(S`$f(x)=x^5-80x$ is decreasing on $(-a,a)$. Find $a$.`, 2, "5x⁴ = 80."),
  num(S`$f(x)=x^2+kx$ is decreasing exactly for $x\lt3$. Find $k$.`, -6, "f′ = 2x + k = 0 at x = 3."),
  tf(S`A continuous function increasing on $(0,2]$ and on $[2,4)$ is increasing on $(0,4)$.`, true, "The two pieces join without a drop."),
];
