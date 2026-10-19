// 3.3 Concavity and the Second Derivative Test — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  mc(S`If $f''(x)\gt0$ on an interval, the graph is:`, "concave up", ["concave down", "decreasing", "linear"], "Slopes increase: a cup."),
  tf("A point of inflection is a point where the concavity changes.", true, "Definition."),
  num(S`At what $x$ does $f(x)=x^3-12x^2$ have an inflection point?`, 4, "f″ = 6x − 24."),
  num(S`For $f(x)=2x^4$, find $f''(1)$.`, 24, "f″ = 24x²."),
  mc(S`Describe the concavity of $f(x)=x^2$.`, "concave up everywhere", ["concave down everywhere", "changes at 0", "none"], "f″ = 2."),
  mc(S`Describe the concavity of $f(x)=-3x^2+x$.`, "concave down everywhere", ["concave up everywhere", "changes at x = 1/6", "none"], "f″ = −6."),
  num(S`$f''(x)=6x-18$. At what $x$ is the inflection point?`, 3, "f″ changes sign at 3."),
  tf(S`If $f''(c)=0$, the graph has an inflection point at $c$.`, false, "x⁴ at 0: no sign change."),
  fill(S`Classifying a critical point by the sign of $f''(c)$ is called the second derivative ___.`, ["test"], "The second derivative test."),
  mc(S`$f'(2)=0$ and $f''(2)=5$. At $x=2$, $f$ has:`, "a local minimum", ["a local maximum", "an inflection point", "no conclusion"], "Concave up at a horizontal tangent."),
  num(S`$f(x)=x^3+3x^2$ is concave up for $x\gt a$. Find $a$.`, -1, "f″ = 6x + 6."),
  num("The graph of f(x) = (x − 1)³ + 1 is shown. At what x is the inflection point?", 1, "Concavity changes at x = 1.", graph((x) => (x - 1) ** 3 + 1, { xmin: -1, xmax: 3, ymin: -3, ymax: 5 }, [P(1, 1)])),
  tf("A concave down graph lies below its tangent lines.", true, "Caps sit under their tangents."),
  num(S`For $f(x)=x^3-9x^2+2x$, find $f''(0)$.`, -18, "f″ = 6x − 18."),
  mc(S`$f'(c)=0$ and $f''(c)=0$. The second derivative test:`, "gives no conclusion", ["shows a maximum", "shows a minimum", "shows an inflection point"], "Use the first derivative test."),
  num(S`At what positive $x$ does $f(x)=x^4-54x^2$ have an inflection point?`, 3, "12x² − 108 = 0."),
  num(S`$f(x)=x^3+15x^2$ is concave down for $x\lt a$. Find $a$.`, -5, "f″ = 6x + 30."),
  mc(S`On an interval where $f'$ is increasing, $f$ is:`, "concave up", ["concave down", "decreasing", "constant"], "f″ > 0."),
  num("The graph of f′(x) = x² − 2x is shown. At what x does f have an inflection point?", 1, "f′ has its minimum at x = 1, so f″ changes sign there.", graph((x) => x * x - 2 * x, { xmin: -1.5, xmax: 3.5, ymin: -2, ymax: 4 }, [P(1, -1)])),
  tf(S`$f(x)=x+5$ has an inflection point.`, false, "f″ = 0 everywhere: no change of concavity."),
];

export const M = [
  num(S`Find the y-coordinate of the inflection point of $f(x)=x^3-3x^2+4$.`, 2, "x = 1: 1 − 3 + 4."),
  num(S`How many inflection points does $f(x)=x^4-4x^3+10$ have?`, 2, "f″ = 12x(x − 2)."),
  num(S`Use the second derivative test to find the local maximum value of $f(x)=x^3-12x^2+36x$.`, 32, "f′ = 3(x − 2)(x − 6); f″(2) = −12: max f(2) = 32."),
  mc(S`Does $f(x)=x^{1/3}$ have an inflection point at 0?`, "yes: f″ changes sign there (vertical tangent)", ["no: f″ does not exist there", "no: f′ does not exist there", "yes: f″(0) = 0"], "f″ = −(2/9)x^(−5/3) changes sign."),
  mc(S`Describe the concavity of $f(x)=\frac1{x^2}$.`, "concave up on both sides of 0", ["concave down on both sides", "up for x > 0 only", "changes at 0"], "f″ = 6/x⁴ > 0."),
  num(S`$f(x)=x^4+x^3$ has inflection points at $0$ and at one negative $x$. Find it.`, -0.5, "f″ = 6x(2x + 1).", null, 0.0001),
  num(S`At what $x$ does $f(x)=(x-2)^5+1$ have an inflection point?`, 2, "f″ = 20(x − 2)³ changes sign."),
  num("Sales are S(t) = −t³ + 6t² + 50 (graph shown). At what time are they growing fastest?", 2, "S″ = −6t + 12 = 0.", graph((t) => -(t ** 3) + 6 * t * t + 50, { xmin: 0, xmax: 5, ymin: 40, ymax: 90 }, [P(2, 66)], { a: 0, b: 5, step: { x: 1, y: 10 } })),
  tf(S`If $f''\gt0$ on an interval, then $f'$ is increasing there.`, true, "f″ is the derivative of f′."),
  num(S`$f(x)=x^3+ax^2+2$ has an inflection point at $x=1$. Find $a$.`, -3, "6 + 2a = 0."),
  num(S`For $f(x)=x^{3/2}$, find $f''(4)$.`, 0.375, "f″ = (3/4)x^(−1/2).", null, 0.0001),
  mc(S`$f'(x)=(x-1)(x-4)$. Where is $f$ concave up?`, S`$x\gt2.5$`, [S`$x\lt2.5$`, S`$1\lt x\lt4$`, S`everywhere`], "f″ = 2x − 5."),
  num(S`$f(x)=x^5-5x^4$ has exactly one inflection point. At what $x$?`, 3, "f″ = 20x²(x − 3): no change at 0."),
  num(S`Use the second derivative test to find the local minimum value of $f(x)=x^3-75x$.`, -250, "f″(5) = 30 > 0; f(5) = 125 − 375."),
  num("The graph of f″(x) = x − 2 is shown. f is concave up for x > a. Find a.", 2, "f″ > 0 right of 2.", graph((x) => x - 2, { xmin: -1, xmax: 5, ymin: -3, ymax: 3 }, [P(2, 0)])),
  num(S`How many inflection points does $f(x)=3x^5-10x^3$ have?`, 3, "f″ = 60x(x² − 1)."),
  tf("A graph can be concave up and decreasing on the same interval.", true, "1/x for x > 0."),
  num(S`At what $x$ does $f(x)=x^2-\frac1x$ have an inflection point?`, 1, "f″ = 2 − 2/x³."),
  num(S`At what positive $x$ does $f(x)=-x^4+6x^2$ have an inflection point?`, 1, "f″ = −12x² + 12."),
  mc("The point of diminishing returns on a growth curve is:", "its inflection point, where the growth rate is greatest", ["its maximum point", "its y-intercept", "where the growth rate is zero"], "After it, growth slows."),
];
