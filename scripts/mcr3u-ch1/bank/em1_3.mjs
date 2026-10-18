// 1.3 Parent Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P, PAR } from "./fig.mjs";

const V5 = { xmin: -5, xmax: 5, ymin: -5, ymax: 5 };
const one = (k) => planeDoc({ view: V5, curves: [{ ...PAR[k], color: "violet" }] });
const opts = [String.raw`$y=x^2$`, String.raw`$y=\sqrt x$`, String.raw`$y=\frac1x$`, String.raw`$y=|x|$`];
const pick = (i) => [opts[i], opts.filter((_, j) => j !== i)];

export const E = [
  mc("Which parent function is graphed?", ...pick(0), "A U-shaped parabola through the origin.", one("x2")),
  mc("Name the parent function shown.", ...pick(1), "Starts at the origin and grows to the right only.", one("sqrt")),
  mc("Which parent function has this graph?", ...pick(2), "Two branches with asymptotes on the axes.", one("recip")),
  mc("Identify the parent function in the graph.", ...pick(3), "A V with its vertex at the origin.", one("abs")),
  num(String.raw`Evaluate $\sqrt x$ at $x=49$.`, 7, "7² = 49."),
  num(String.raw`Evaluate $\frac1x$ at $x=0.2$.`, 5, "1 ÷ 0.2."),
  num(String.raw`Evaluate $|x|$ at $x=-8$.`, 8, "Distance from 0."),
  tf(String.raw`The domain of $f(x)=x^2$ is all real numbers.`, true, "Any number can be squared."),
  tf(String.raw`The range of $f(x)=\sqrt x$ includes $-1$.`, false, "√x is never negative."),
  mc(String.raw`Which parent has range $\{y\in\mathbb R\mid y\ne0\}$?`, String.raw`$\frac1x$`, [String.raw`$x^2$`, String.raw`$|x|$`, String.raw`$\sqrt x$`], "1/x is never 0."),
  fill(String.raw`As $x$ gets very large, $\frac1x$ approaches the line $y=$ ___.`, ["0"], "1/1000 = 0.001."),
  tf(String.raw`$x^2$ and $|x|$ have the same range.`, true, "Both: y ≥ 0."),
  num(String.raw`Evaluate $x^2$ at $x=1.5$.`, 2.25, "1.5 × 1.5.", null, 0.001),
  mc(String.raw`Which parent passes through $(4,2)$?`, String.raw`$\sqrt x$`, [String.raw`$x^2$`, String.raw`$\frac1x$`, String.raw`$|x|$`], "√4 = 2."),
  mc(String.raw`Which parent passes through $(2,0.5)$?`, String.raw`$\frac1x$`, [String.raw`$\sqrt x$`, String.raw`$x^2$`, String.raw`$|x|$`], "1/2 = 0.5."),
  tf(String.raw`$\sqrt x$ is defined at $x=0$.`, true, "√0 = 0."),
  mc("Which parent function is V-shaped?", String.raw`$|x|$`, [String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$x$`], "Two straight pieces meeting at the origin."),
  num(String.raw`Evaluate $f(x)=x$ at $x=-7.5$.`, -7.5, "The output equals the input.", null, 0.001),
  tf(String.raw`The graph of $\frac1x$ has a y-intercept.`, false, "x = 0 is not in the domain."),
  mc(String.raw`What is the domain of $\sqrt x$?`, String.raw`$x\ge0$`, [String.raw`$x>0$`, String.raw`$x\in\mathbb R$`, String.raw`$x\ne0$`], "√0 is allowed; negatives are not."),
];

export const M = [
  ms("Which parents have domain all real numbers? Select all.", [String.raw`$x$`, String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$\frac1x$`, String.raw`$|x|$`], [0, 1, 4], "√x needs x ≥ 0; 1/x needs x ≠ 0."),
  ms(String.raw`Which parents are even, $f(-x)=f(x)$? Select all.`, [String.raw`$x$`, String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$\frac1x$`, String.raw`$|x|$`], [1, 4], "Mirror images in the y-axis."),
  num(String.raw`Apart from $x=0$, where do $y=x$ and $y=\sqrt x$ meet?`, 1, "x = √x → x² = x."),
  mc(String.raw`For $0<x<1$, which is largest?`, String.raw`$\sqrt x$`, [String.raw`$x$`, String.raw`$x^2$`, "they are equal"], "e.g. x = 0.25: 0.5 > 0.25 > 0.0625."),
  num(String.raw`Evaluate $\frac1x$ at $x=-0.125$.`, -8, "1 ÷ (−0.125)."),
  mc(String.raw`$x$: $1,4,9,16$; $y$: $1,2,3,4$. Which parent?`, String.raw`$\sqrt x$`, [String.raw`$x^2$`, String.raw`$\frac1x$`, String.raw`$|x|$`], "Each y squared gives x."),
  mc(String.raw`$x$: $-2,-1,1,2$; $y$: $-0.5,-1,1,0.5$. Which parent?`, String.raw`$\frac1x$`, [String.raw`$x$`, String.raw`$|x|$`, String.raw`$\sqrt x$`], "y = 1/x."),
  tf(String.raw`$|x|=\sqrt{x^2}$ for every real $x$.`, true, "The positive root of x² is |x|."),
  num("How many of the five parent functions pass through the origin?", 4, "All except 1/x."),
  mc(String.raw`Which parent is decreasing for $x>0$?`, String.raw`$\frac1x$`, [String.raw`$\sqrt x$`, String.raw`$x^2$`, String.raw`$|x|$`], "Larger x, smaller 1/x."),
  num(String.raw`At $x=0.4$, how much larger is $|x|$ than $x^2$?`, 0.24, "0.4 − 0.16.", null, 0.001),
  num("How many points do y = x² and y = |x| share?", 3, "(−1, 1), (0, 0), (1, 1).", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 4 }, curves: [PAR.x2, PAR.abs] })),
  mc("A 300 km trip takes t hours at v km/h. Which parent describes t as a function of v?", String.raw`$\frac1x$ (reciprocal)`, [String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$|x|$`], "t = 300/v."),
  mc("Which parent gives the side of a square from its area?", String.raw`$\sqrt x$`, [String.raw`$x^2$`, String.raw`$\frac1x$`, String.raw`$x$`], "s = √A."),
  num("A square has side 2.5 m. What is its area (m²)?", 6.25, "A = s².", null, 0.001),
  tf(String.raw`$\frac1x$ is odd: $f(-x)=-f(x)$.`, true, "1/(−x) = −1/x."),
  num(String.raw`Evaluate $\frac1x$ at $x=0.004$.`, 250, "Very close to 0 gives a very large output."),
  ms(String.raw`Which parents are increasing for $x>0$? Select all.`, [String.raw`$x$`, String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$\frac1x$`, String.raw`$|x|$`], [0, 1, 2, 4], "Only 1/x decreases."),
  mc("Which parent has no symmetry?", String.raw`$\sqrt x$`, [String.raw`$x^2$`, String.raw`$|x|$`, String.raw`$\frac1x$`], "It exists only for x ≥ 0."),
  num("The point (k, 5) is on the graph of y = √x. Find k.", 25, "√k = 5.", planeDoc({ view: { xmin: -2, xmax: 30, ymin: -1, ymax: 7 }, curves: [PAR.sqrt], points: [P(25, 5, "(k, 5)")], step: { x: 5, y: 1 } })),
];
