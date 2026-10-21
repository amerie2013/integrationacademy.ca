// 2.3 Graphs of Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  num(S`Find the y-intercept of $y=2x^2-5x+3$.`, 3, "Put x = 0."),
  num(S`Find the larger x-intercept of $y=(x-2)(x+6)$.`, 2, "Zeros 2 and −6."),
  num(S`State the vertical asymptote of $y=\frac{4}{x-7}$ (the x-value).`, 7, "Denominator zero at x = 7."),
  num(S`State the horizontal asymptote of $y=3+\frac1x$ (the y-value).`, 3, "1/x → 0."),
  tf("A sketch of a graph should label its intercepts.", true, "Key features must be marked with coordinates."),
  mc("A local maximum is a point that is:", "higher than the points near it", ["the highest point of the whole graph", "where the graph crosses the y-axis", "where the graph has an asymptote"], "It is a turning point."),
  num(S`How many x-intercepts does $y=x^2+1$ have?`, 0, "x² + 1 ≥ 1."),
  num(S`State the horizontal asymptote of $y=2^x$ (the y-value).`, 0, "2ˣ → 0 as x → −∞."),
  num("The parabola shown has its vertex at (1, −4). What is the minimum value of the function?", -4, "The vertex is the lowest point.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => (x - 1) ** 2 - 4, color: "violet" }], points: [P(1, -4)] })),
  num("Read the x-intercept of the line shown.", 3, "It crosses at (3, 0).", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -3, ymax: 6 }, curves: [{ f: (x) => 3 - x, color: "violet" }], points: [P(3, 0)] })),
  tf(S`The graph of $y=\frac1x$ crosses the y-axis.`, false, "x = 0 is not in the domain."),
  num(S`Find the larger zero of $y=x(x-5)$.`, 5, "x = 0 or 5."),
  mc(S`The turning point of $y=(x-3)^2+2$ is:`, "(3, 2)", ["(−3, 2)", "(3, −2)", "(2, 3)"], "Vertex form a(x − h)² + k."),
  num(S`Find the y-intercept of $y=5\cdot2^x$.`, 5, "2⁰ = 1."),
  fill("A line that a graph approaches but never reaches is called an ___.", ["asymptote", "Asymptote"], "e.g. y = 0 for y = 2ˣ."),
  num(S`Find the y-intercept of $y=\frac{6}{x+2}$.`, 3, "6/2."),
  num("How many turning points does the graph of a quadratic function have?", 1, "Its vertex."),
  tf(S`The graph of $y=x^3$ has a turning point.`, false, "It always increases; (0, 0) is a point of inflection."),
  num(S`How many times do the graphs of $y=x^2$ and $y=9$ meet?`, 2, "x = ±3."),
  mc("Which graph is symmetric about the y-axis?", S`$y=x^2+3$`, [S`$y=x^3$`, S`$y=2x+1$`, S`$y=(x-1)^2$`], "f(−x) = f(x)."),
];

export const M = [
  num(S`Find the product of the zeros of $y=x^2-7x+10$.`, 10, "Zeros 2 and 5."),
  num(S`Find the y-coordinate of the vertex of $y=x^2+6x+5$.`, -4, "x = −3: 9 − 18 + 5."),
  num(S`State the horizontal asymptote of $y=\frac{2}{x+3}-1$ (the y-value).`, -1, "The fraction → 0."),
  num(S`Find the x-intercept of $y=\frac{2}{x+3}-1$.`, -1, "2/(x + 3) = 1."),
  num(S`How many x-intercepts does $y=x^3-x$ have?`, 3, "x(x − 1)(x + 1)."),
  mc(S`How many solutions does $x^2=2x+3$ have?`, "2", ["0", "1", "3"], "(x − 3)(x + 1) = 0."),
  num(S`State the horizontal asymptote of $y=4-2^{-x}$ (the y-value).`, 4, "2⁻ˣ → 0 as x → ∞."),
  num(S`Find the maximum value of $y=-x^2+8x-12$.`, 4, "x = 4: −16 + 32 − 12."),
  tf(S`$y=\frac{x+1}{x-2}$ has the vertical asymptote $x=2$.`, true, "The denominator is 0 at x = 2."),
  num(S`Find the y-intercept of $y=\frac{x+1}{x-2}$.`, -0.5, "1/(−2).", null, 1e-9),
  num("The cubic shown has three zeros. Find their sum.", 3, "Zeros −1, 1 and 3.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -6, ymax: 6 }, curves: [{ f: (x) => (x + 1) * (x - 1) * (x - 3), color: "violet" }], points: [P(-1, 0), P(1, 0), P(3, 0)] })),
  num("The graph shown has two asymptotes (dashed). What is the horizontal asymptote (the y-value)?", 2, "y = 1/(x − 1) + 2.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 7 }, curves: [{ f: (x) => 1 / (x - 1) + 2, a: -4, b: 0.9, color: "violet" }, { f: (x) => 1 / (x - 1) + 2, a: 1.1, b: 6, color: "violet" }], vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }] })),
  num(S`How many zeros does $y=x^4-10x^2+9$ have?`, 4, "(x² − 1)(x² − 9): ±1, ±3."),
  ms(S`Which are key features of $y=x^2-4$? Select all.`, ["zeros at ±2", "y-intercept −4", "vertex (0, −4)", "asymptote y = −4"], [0, 1, 2], "Quadratics have no asymptotes."),
  mc("Which function has a horizontal asymptote?", S`$y=3^x-1$`, [S`$y=x^2$`, S`$y=x^3$`, S`$y=2x$`], "3ˣ → 0 as x → −∞."),
  num(S`Solve $x^2=4x$ graphically and give the larger solution.`, 4, "x(x − 4) = 0."),
  num(S`How many times do $y=\frac1x$ and $y=x$ meet?`, 2, "x² = 1."),
  tf("A graph can cross its horizontal asymptote.", true, "The asymptote only describes behaviour as x → ±∞."),
  num(S`Find the x-coordinate of the turning point of $y=2x^2-8x+1$.`, 2, "−b/(2a) = 8/4."),
  mc(S`The graph of $y=(x-2)^2(x+1)$ touches the x-axis (without crossing) at:`, S`$x=2$`, [S`$x=-1$`, S`$x=0$`, S`$x=-2$`], "A squared factor gives a touching point."),
];
