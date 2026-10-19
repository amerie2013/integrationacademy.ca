// 3.2 Maxima and Minima — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  mc(S`$f'$ changes from positive to negative at $c$. Then $f$ has:`, S`a local maximum at $c$`, [S`a local minimum at $c$`, S`an inflection point at $c$`, "no extremum"], "Rising, then falling."),
  tf("Every critical number gives a local maximum or minimum.", false, "x³ at 0 is a counterexample."),
  num(S`At what $x$ does $f(x)=x^2-12x$ have a local minimum?`, 6, "2x − 12 = 0."),
  num(S`Find the local maximum value of $f(x)=-x^2+4x+1$.`, 5, "x = 2: −4 + 8 + 1."),
  num(S`Find the absolute maximum of $f(x)=x^2$ on $[-3,2]$.`, 9, "f(−3) = 9 beats f(2) = 4."),
  num(S`Find the absolute minimum of $f(x)=x^2$ on $[1,4]$.`, 1, "Increasing on the interval: f(1)."),
  mc("On a closed interval, the candidates for absolute extrema are:", "the critical numbers inside the interval and the endpoints", ["only the critical numbers", "only the endpoints", "the zeros of f"], "Compare them all."),
  num(S`Find the critical number of $f(x)=x^2+6x$.`, -3, "2x + 6 = 0."),
  tf(S`$f(x)=x^3$ has a local extremum at $x=0$.`, false, "f′ = 3x² does not change sign."),
  num(S`Find the absolute maximum of $f(x)=3x-1$ on $[0,4]$.`, 11, "Increasing line: f(4)."),
  num("The graph of f(x) = −x² + 2x + 3 is shown. What is its maximum value?", 4, "Vertex at x = 1.", graph((x) => -x * x + 2 * x + 3, { xmin: -2, xmax: 4, ymin: -3, ymax: 5 }, [P(1, 4)])),
  fill("The highest value of f on its whole interval is called the ___ maximum.", ["absolute", "global"], "As opposed to local."),
  num(S`Find the absolute maximum of $f(x)=x^2-2x$ on $[-1,4]$.`, 8, "f(−1) = 3, f(1) = −1, f(4) = 8."),
  mc(S`$f(x)=|x|$ at $x=0$ has:`, "a local (and absolute) minimum where f′ does not exist", ["a local maximum", "no extremum", "a horizontal tangent"], "A corner."),
  num(S`Find the local maximum value of $f(x)=x^3-300x$.`, 2000, "x = −10: −1000 + 3000."),
  tf("An endpoint of a closed interval can be an absolute extremum.", true, "Check endpoints always."),
  num(S`Find the absolute minimum of $f(x)=x^2-8x+20$ on $[0,10]$.`, 4, "x = 4: 16 − 32 + 20."),
  num("The graph of f(x) = 2x³ − 24x is shown. What is its local maximum value?", 32, "f′ = 6x² − 24: max at x = −2.", graph((x) => 2 * x ** 3 - 24 * x, { xmin: -4, xmax: 4, ymin: -40, ymax: 40 }, [P(-2, 32), P(2, -32)], { step: { x: 1, y: 10 } })),
  num(S`How many critical numbers does $f(x)=x^3+12x$ have?`, 0, "3x² + 12 > 0."),
  mc(S`$f$ has a local maximum at $c$ and $f'(c)$ exists. Then:`, S`$f'(c)=0$`, [S`$f'(c)\gt0$`, S`$f'(c)\lt0$`, S`$f''(c)=0$`], "Horizontal tangent at a smooth peak."),
];

export const M = [
  num(S`Find the local minimum value of $f(x)=x^3+3x^2-45x$.`, -81, "f′ = 3(x + 5)(x − 3): min at 3."),
  num(S`Find the absolute maximum of $f(x)=x^3-147x$ on $[-8,8]$.`, 686, "f(−8) = 664, f(−7) = 686, f(7) = −686, f(8) = −664."),
  num(S`Find the absolute minimum of $f(x)=x^4-32x^2$ on $[-1,5]$.`, -256, "f(−1) = −31, f(0) = 0, f(4) = −256, f(5) = −175."),
  num(S`Find the absolute minimum of $f(x)=x+\frac{25}{x}$ on $[1,10]$.`, 10, "1 − 25/x² = 0 at x = 5."),
  mc(S`Classify $x=0$ for $f(x)=x^4$.`, "absolute minimum", ["local maximum", "inflection point", "no extremum"], "f′ = 4x³ goes − to +."),
  num(S`Find the local minimum value of $f(x)=x^2(x-3)$.`, -4, "f′ = 3x² − 6x: min at x = 2."),
  num(S`Find the absolute minimum value of $f(x)=|x-3|+2$.`, 2, "At the corner x = 3."),
  num("The graph of f(x) = −x³ + 3x² + 9x is shown. What is its local maximum value?", 27, "f′ = −3(x − 3)(x + 1): max at x = 3.", graph((x) => -(x ** 3) + 3 * x * x + 9 * x, { xmin: -2.5, xmax: 5, ymin: -10, ymax: 32 }, [P(3, 27), P(-1, -5)], { step: { x: 1, y: 5 } })),
  tf("A continuous function on a closed interval always has an absolute maximum and an absolute minimum.", true, "The Extreme Value Theorem."),
  num(S`Find the absolute maximum of $f(x)=\frac{x}{x^2+36}$ on $[0,10]$ (4 decimals).`, 0.0833, "Max at x = 6: 6/72.", null, 0.0005),
  num(S`Find the absolute maximum of $f(x)=\sqrt x\,(4-x)$ on $[0,4]$ (3 decimals).`, 3.079, "f′ = 0 at x = 4/3.", null, 0.001),
  num(S`$f(x)=x^2+ax$ has its minimum at $x=3$. Find $a$.`, -6, "2(3) + a = 0."),
  mc(S`$f'(x)=(x-2)^2(x+1)$. At $x=2$, $f$ has:`, "neither a maximum nor a minimum", ["a local maximum", "a local minimum", "an absolute minimum"], "f′ ≥ 0 on both sides of 2."),
  num(S`Find the absolute maximum of $f(x)=x^3-9x^2+27x$ on $[0,4]$.`, 28, "f′ = 3(x − 3)² ≥ 0: increasing, so f(4)."),
  num(S`A profit is $P(x)=-2x^2+80x-300$ dollars. Find the maximum profit.`, 500, "x = 20."),
  num("The graph of g(x) = (x − 1)²(x + 2) is shown. What is its local maximum value?", 4, "g′ = 3(x − 1)(x + 1): max at x = −1.", graph((x) => (x - 1) ** 2 * (x + 2), { xmin: -3, xmax: 2.5, ymin: -3, ymax: 6 }, [P(-1, 4), P(1, 0)])),
  num(S`Find the absolute maximum of $f(x)=2x^3-3x^2+1$ on $[-1,2]$.`, 5, "f(−1) = −4, f(0) = 1, f(1) = 0, f(2) = 5."),
  num(S`Find the local maximum value of $f(x)=\frac{2x}{x^2+4}$.`, 0.5, "At x = 2: 4/8.", null, 0.0001),
  num(S`How many local extrema does $f(x)=x^5-5x^4$ have?`, 2, "f′ = 5x³(x − 4)."),
  tf("A function can reach its absolute maximum at two different x-values.", true, "For example x⁴ − 2x² on [−2, 2] at ±2."),
];
