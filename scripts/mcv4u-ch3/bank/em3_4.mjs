// 3.4 Simple Rational Functions — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc, graph, P, H } from "./fig.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const V1 = { xmin: -7, xmax: 4, ymin: -5, ymax: 5 };
const V2 = { xmin: -5, xmax: 6, ymin: -5, ymax: 6 };
const V3 = { xmin: -8, xmax: 5, ymin: -6, ymax: 8 };

export const E = [
  num(S`Find the vertical asymptote of $f(x)=\frac{1}{x-6}$: $x=\,?$`, 6, "Denominator zero."),
  num(S`Find the horizontal asymptote of $f(x)=\frac{3x+2}{x-1}$: $y=\,?$`, 3, "Ratio of leading coefficients."),
  num(S`Find the horizontal asymptote of $f(x)=\frac{5}{x^2+1}$: $y=\,?$`, 0, "Lower degree on top."),
  mc(S`Find the vertical asymptotes of $f(x)=\frac{x+2}{x^2-9}$.`, S`$x=\pm3$`, [S`$x=-2$`, S`$x=9$`, S`$x=3$ only`], "x² − 9 = 0."),
  tf("A graph can cross its horizontal asymptote.", true, "The asymptote only describes the ends."),
  tf("A graph can cross its vertical asymptote.", false, "f is not defined there."),
  num(S`Find the x-intercept of $f(x)=\frac{x-4}{x+1}$.`, 4, "Numerator zero."),
  num(S`Find the y-intercept of $f(x)=\frac{2x+6}{x-3}$.`, -2, "f(0) = 6/(−3)."),
  fill("When the numerator's degree is one more than the denominator's, the graph has an ___ asymptote.", ["oblique", "slant"], "Found by long division."),
  mc(S`At $x=1$, $f(x)=\frac{x^2-1}{x-1}$ has:`, "a hole", ["a vertical asymptote", "an x-intercept", "a horizontal asymptote"], "The factor x − 1 cancels."),
  num(S`How many vertical asymptotes does $f(x)=\frac{1}{x^2+4}$ have?`, 0, "x² + 4 is never 0."),
  num("The graph of y = 1/(x + 2) is shown. Its vertical asymptote is x = a. Find a.", -2, "Denominator zero at −2.", planeDoc({ view: V1, curves: rat((x) => 1 / (x + 2), [-2], V1), vlines: [{ x: -2, color: "red", dash: true }], step: { x: 1, y: 1 } })),
  mc(S`As $x\to3^+$, $f(x)=\frac{1}{x-3}$:`, S`$\to+\infty$`, [S`$\to-\infty$`, S`$\to0$`, S`$\to3$`], "Small positive denominator."),
  num(S`Find the horizontal asymptote of $f(x)=\frac{4x^2}{2x^2+1}$: $y=\,?$`, 2, "4 ÷ 2."),
  tf(S`$f(x)=\frac{x+4}{x-3}$ is decreasing on each branch.`, true, "f′ = −7/(x − 3)²."),
  num(S`Find the horizontal asymptote of $f(x)=\frac{x}{x-5}$: $y=\,?$`, 1, "Equal degrees."),
  mc(S`Near $x=-1$, $f(x)=\frac{2}{(x+1)^2}$:`, S`$\to+\infty$ on both sides`, [S`$\to-\infty$ on both sides`, S`$+\infty$ left, $-\infty$ right`, S`$\to2$`], "A square is positive."),
  num("The graph of y = (x + 1)/(x − 1) is shown. Its horizontal asymptote is y = b. Find b.", 1, "Equal degrees: 1/1.", planeDoc({ view: V2, curves: rat((x) => (x + 1) / (x - 1), [1], V2), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], step: { x: 1, y: 1 } })),
  num(S`The oblique asymptote of $f(x)=\frac{x^2+5}{x}$ is $y=mx+b$. Find $m$.`, 1, "x + 5/x."),
  mc("Which function is even (symmetric about the y-axis)?", S`$\frac{1}{x^2-1}$`, [S`$\frac{x}{x^2-1}$`, S`$\frac{1}{x-1}$`, S`$\frac{x+1}{x}$`], "f(−x) = f(x)."),
];

export const M = [
  mc(S`As $x\to2^-$, $f(x)=\frac{x+3}{x-2}$:`, S`$\to-\infty$`, [S`$\to+\infty$`, S`$\to1$`, S`$\to0$`], "Numerator ≈ 5, denominator → 0⁻."),
  num(S`Find the maximum value of $f(x)=\frac{1}{x^2-2x+5}$.`, 0.25, "Denominator is least at x = 1: 4.", null, 0.0001),
  num(S`The oblique asymptote of $f(x)=\frac{2x^2+x}{x-1}$ is $y=2x+b$. Find $b$.`, 3, "Long division: 2x + 3 + 3/(x − 1)."),
  num(S`For $f(x)=\frac{2x-1}{x+3}$, find $f'(-2)$.`, 7, "f′ = 7/(x + 3)²."),
  mc(S`Where is the hole in the graph of $f(x)=\frac{x^2-3x}{x-3}$?`, S`$(3,3)$`, [S`$(3,0)$`, S`$(0,0)$`, S`there is none`], "f = x for x ≠ 3."),
  num(S`How many vertical asymptotes does $f(x)=\frac{x-2}{x^2-4}$ have?`, 1, "x − 2 cancels: only x = −2."),
  num(S`Find the maximum value of $f(x)=\frac{4}{x^2+2}$.`, 2, "At x = 0."),
  num("The graph of f(x) = 3x/(x² + 9) is shown. What is its maximum value?", 0.5, "Numerator of f′: 3(9 − x²): max at x = 3.", graph((x) => (3 * x) / (x * x + 9), { xmin: -10, xmax: 10, ymin: -0.7, ymax: 0.7 }, [P(3, 0.5), P(-3, -0.5)], { step: { x: 2, y: 0.1 } }), 0.0001),
  tf(S`$f(x)=\frac1{x^2+1}$ has no vertical asymptote.`, true, "The denominator is never 0."),
  num(S`Find the vertical asymptote of $f(x)=\frac{x^2-4x}{x-2}$: $x=\,?$`, 2, "x(x − 4) does not cancel x − 2."),
  num(S`$f(x)=\frac{ax+3}{2x-1}$ has horizontal asymptote $y=4$. Find $a$.`, 8, "a/2 = 4."),
  mc(S`Where is $f(x)=\frac{x^2+1}{x^2-4}$ increasing?`, S`for $x\lt0$, $x\ne-2$`, [S`for $x\gt0$, $x\ne2$`, "everywhere", "nowhere"], "f = 1 + 5/(x² − 4), f′ = −10x/(x² − 4)²."),
  num(S`At what positive $x$ does $f(x)=\frac{1}{x^2+27}$ have an inflection point?`, 3, "f″ ∝ 6x² − 54."),
  num(S`Find the local minimum value of $f(x)=\frac{x^2+8}{x+1}$.`, 4, "Numerator of f′: x² + 2x − 8: min at x = 2, f = 12/3."),
  num("The graph of y = (x − 1)/(x + 2) is shown. Find its y-intercept.", -0.5, "f(0) = −1/2.", planeDoc({ view: V3, curves: rat((x) => (x - 1) / (x + 2), [-2], V3), vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [P(0, -0.5), P(1, 0)], step: { x: 1, y: 1 } }), 0.0001),
  tf("If the degree of the numerator is less than the degree of the denominator, the horizontal asymptote is y = 0.", true, "The fraction shrinks for large |x|."),
  num(S`The oblique asymptote of $f(x)=\frac{x^2+3x}{x+1}$ is $y=x+b$. Find $b$.`, 2, "x + 2 − 2/(x + 1)."),
  num(S`How many vertical asymptotes does $f(x)=\frac1{x-1}+\frac1{x+1}$ have?`, 2, "x = ±1."),
  num(S`For $f(x)=\frac{x-2}{x+2}$, find $f'(0)$.`, 1, "f′ = 4/(x + 2)²."),
  mc(S`What does the graph of $f(x)=\frac{x^2-9}{x+3}$ look like?`, S`the line $y=x-3$ with a hole at $(-3,-6)$`, [S`two branches with an asymptote $x=-3$`, S`the line $y=x+3$`, S`a parabola`], "Factor and cancel."),
];
