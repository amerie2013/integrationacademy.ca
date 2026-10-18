// 1.2 Characteristics of Polynomial Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, graph, P } from "./fig.mjs";

export const TOPIC = "1.2 Characteristics of Polynomial Functions";
export const Q = [
  num(String.raw`A polynomial has constant third differences of $-18$ (step 1). Find its leading coefficient.`, -3, "a·3! = −18."),
  num(String.raw`For $x=0,\ldots,4$ a quadratic has values $3, 0, -1, 0, 3$. Find $f(5)$.`, 8, "Second differences 2, so the next first difference is 5: 3 + 5 = 8 (f = (x − 2)² − 1)."),
  num(String.raw`For $x=0,\ldots,4$ a cubic has values $1, 0, 3, 16, 45$. Find $f(5)$.`, 96, "Differences −1, 3, 13, 29; 4, 10, 16; 6, 6. Next: 22, 51, so 45 + 51 = 96."),
  num(String.raw`A quadratic has constant second differences of 6 (step 1), $f(0)=-1$ and $f(1)=4$. Find $f(2)$.`, 15, "First difference 5, then 5 + 6 = 11: 4 + 11 = 15."),
  ms(String.raw`A polynomial has degree 6 and $a<0$. Which must be true? Select all.`, ["it has a maximum value", "it has at most 5 turning points", "it has at least one zero", "its range is all real numbers"], [0, 1], "Both ends go down, so there is a highest point; zeros are not guaranteed."),
  mc("The graph rises at both ends, has 5 turning points and touches the x-axis twice without crossing. What is the least possible degree?", "6", ["5", "4", "7"], "5 turning points → degree ≥ 6; same-direction ends → even.", graph((x) => 0.06 * (x * x - 9) * (x * x - 1) ** 2, { xmin: -3.5, xmax: 3.5, ymin: -6, ymax: 3 })),
  num(String.raw`A cubic $y=ax^3+bx^2+cx+d$ has third differences of 30 (step 1). Find $a$.`, 5, "6a = 30."),
  tf(String.raw`If $f$ is an odd polynomial function, then $f(0)=0$.`, true, "f(0) = −f(0) → f(0) = 0."),
  tf(String.raw`A polynomial function can be both even and odd.`, true, "f(x) = 0 satisfies both."),
  num(String.raw`$f(x)=x^4+kx^3-2x^2$ is even. Find $k$.`, 0, "An even polynomial has no odd powers."),
  num(String.raw`$g(x)=3x^5+(m-2)x^2+x$ is odd. Find $m$.`, 2, "The x² term must vanish."),
  mc("The graph shows a polynomial. Which is the most likely equation?", String.raw`$y=-x(x-2)(x+2)(x-3)(x+3)/20$`, [String.raw`$y=x(x-2)(x+2)(x-3)(x+3)/20$`, String.raw`$y=-(x-2)(x+2)(x-3)(x+3)/20$`, String.raw`$y=-x(x-2)(x+2)/4$`], "5 zeros, Q2 → Q4: degree 5 with a < 0.", graph((x) => -x * (x * x - 4) * (x * x - 9) / 20, { xmin: -3.5, xmax: 3.5, ymin: -3, ymax: 3 })),
  num(String.raw`A polynomial of degree $n$ has exactly 7 turning points and falls at both ends. What is the least possible $n$?`, 8, "n ≥ 8 and n even."),
  mc("Two polynomials are graphed. The blue one has degree 3. What is the least possible degree of the red one?", "4", ["3", "5", "2"], "Red has 3 turning points and both ends up.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 0.5 * x * (x * x - 4), color: "blue" }, { f: (x) => 0.4 * (x * x - 1) * (x * x - 5) - 1, color: "red" }], step: { x: 1, y: 1 } })),
  num(String.raw`For x-values with step $0.5$, the cubic $y=4x^3$ has constant third differences. Find them.`, 3, "a·3!·h³ = 4·6·0.125."),
  ms(String.raw`Which tables could come from a polynomial of degree 2? (x = 0, 1, 2, 3, 4) Select all.`, ["1, 4, 9, 16, 25", "0, 1, 8, 27, 64", "5, 3, 3, 5, 9", "1, 2, 4, 8, 16"], [0, 2], "Constant second differences: 2 and 2. The others are cubic and exponential."),
  num(String.raw`The graph of a quartic shown has four zeros. If its leading coefficient is $\tfrac14$, what are its constant fourth differences (step 1)?`, 6, "¼·24 = 6.", graph((x) => 0.25 * (x + 3) * (x + 1) * (x - 1) * (x - 2), { xmin: -3.5, xmax: 2.5, ymin: -3, ymax: 3 }, [P(-3, 0), P(-1, 0), P(1, 0), P(2, 0)])),
  tf(String.raw`A degree-4 polynomial can have exactly 2 distinct real zeros and 3 turning points.`, true, "e.g. a W shape whose middle peak stays below the axis."),
  mc(String.raw`A polynomial $p$ is odd and has a zero at $x=3$. Which must also be a zero?`, String.raw`$x=-3$ and $x=0$`, [String.raw`only $x=-3$`, String.raw`only $x=0$`, String.raw`$x=\tfrac13$`], "p(−3) = −p(3) = 0, and every odd polynomial has p(0) = 0."),
  num(String.raw`An even quartic has zeros at $x=1$ and $x=4$ (and only those positive zeros) and $f(0)=8$. Find $f(2)$.`, -18, "Even with zeros ±1, ±4: f = a(x² − 1)(x² − 16). f(0) = 16a = 8 → a = ½. f(2) = ½(3)(−12) = −18."),
];
