// 3.4 Maximum and Minimum Values — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { P, graph } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  num(String.raw`What is the minimum value of $y=(x+2)^2-7$?`, -7, "Vertex (−2, −7)."),
  num(String.raw`What is the maximum value of $y=-(x-1)^2+3$?`, 3, "Vertex (1, 3)."),
  num(String.raw`What number completes the square $x^2+12x+\square$?`, 36, "(12/2)²."),
  num(String.raw`What is the x-coordinate of the vertex of $y=x^2-14x+1$?`, 7, "−b/(2a)."),
  num(String.raw`What is the minimum value of $y=x^2+4x$?`, -4, "x = −2."),
  num(String.raw`What is the maximum value of $y=-x^2+10x$?`, 25, "x = 5."),
  tf(String.raw`If $a>0$, the vertex of $y=ax^2+bx+c$ is a minimum.`, true, "It opens up."),
  mc("Revenue equals…", "price × quantity sold", ["price − cost", "quantity − price", "profit × cost"], "Money taken in."),
  num("Revenue is 500 dollars and cost is 320 dollars. What is the profit?", 180, "500 − 320."),
  num(String.raw`What is the maximum value of $y=-2x^2+8$?`, 8, "Vertex (0, 8)."),
  num(String.raw`What is the x-coordinate of the vertex of $y=3x^2-6x+2$?`, 1, "6/6."),
  mc(String.raw`Which is $x^2-6x+4$ in vertex form?`, String.raw`$(x-3)^2-5$`, [String.raw`$(x-3)^2+4$`, String.raw`$(x+3)^2-5$`, String.raw`$(x-6)^2+4$`], "Add and subtract 9."),
  num(String.raw`A ball's height is $h(t)=-5t^2+30t$. What is its maximum height?`, 45, "t = 3."),
  num("Two numbers add to 20. What is their largest possible product?", 100, "10 × 10."),
  num("A rectangle has perimeter 40 m. What is its largest possible area (m²)?", 100, "A square, 10 by 10."),
  num(String.raw`Where is the vertex of $y=(x-3)(x-11)$? Enter the x-value.`, 7, "Average of the zeros."),
  tf(String.raw`The maximum of $y=-4(x-2)^2+9$ occurs at $x=-2$.`, false, "At x = 2."),
  num("Read the graph: what is the maximum value?", 6, "Vertex (3, 6).", graph((x) => -((x - 3) ** 2) + 6, V8, [P(3, 6)])),
  num("Read the graph: what is the minimum value?", -4, "Vertex (−2, −4).", graph((x) => (x + 2) ** 2 - 4, V8, [P(-2, -4)])),
  mx(String.raw`Write $x^2+8x+3$ in vertex form.`, "(x+4)^2-13", "Add and subtract 16."),
];

export const M = [
  num(String.raw`What is the minimum value of $y=2x^2-8x+3$?`, -5, "x = 2."),
  num(String.raw`What is the maximum value of $y=-3x^2-12x+1$?`, 13, "x = −2."),
  num(String.raw`What is the minimum value of $y=x^2+3x+1$?`, -1.25, "(x + 1.5)² − 1.25.", null, 0.001),
  num(String.raw`Use partial factoring: what is the x-coordinate of the vertex of $y=5x^2-20x+7$?`, 2, "5x(x − 4) + 7."),
  num(String.raw`What is the maximum value of $y=-x^2+5x-2$?`, 4.25, "x = 2.5: −6.25 + 12.5 − 2.", null, 0.001),
  num(String.raw`Revenue is $R(x)=(20+x)(300-10x)$. For which $x$ is it greatest?`, 5, "Zeros −20 and 30."),
  num(String.raw`What is the greatest value of $R(x)=(20+x)(300-10x)$?`, 6250, "25 × 250."),
  num(String.raw`What is the maximum profit if $P(x)=-x^2+16x-39$ (thousands)?`, 25, "x = 8."),
  num("A rectangular field is fenced on three sides (a river on the fourth) with 120 m of fence. What is the largest area (m²)?", 1800, "A = w(120 − 2w): w = 30."),
  num(String.raw`A rocket's height is $h(t)=-4.9t^2+49t$. What is its maximum height?`, 122.5, "t = 5.", null, 0.001),
  num("Two numbers differ by 12. What is their smallest possible product?", -36, "x(x + 12) at x = −6."),
  mx(String.raw`Write $2x^2+12x+5$ in vertex form.`, "2*(x+3)^2-13", "2(x² + 6x + 9) − 18 + 5."),
  tf(String.raw`To complete the square for $3x^2+6x+1$, first factor 3 from $3x^2+6x$.`, true, "3(x² + 2x) + 1."),
  num(String.raw`$R(x)=-2x^2+40x$ and $C(x)=8x+50$. What is the maximum profit?`, 78, "P = −2x² + 32x − 50 at x = 8."),
  num(String.raw`Revenue is $R(x)=x(50-2x)$ hundred dollars. What is the maximum revenue (hundreds)?`, 312.5, "x = 12.5.", null, 0.001),
  ms(String.raw`Which methods find the vertex of $y=x^2+5x+2$? Select all.`, ["completing the square", "partial factoring", "averaging two integer zeros", String.raw`$x=-\frac b{2a}$`], [0, 1, 3], "Its zeros are irrational."),
  num("The revenue graph has zeros 0 and 40. At what x is revenue greatest?", 20, "Halfway.", graph((x) => x * (40 - x), { xmin: -2, xmax: 42, ymin: -20, ymax: 450 }, [P(0, 0), P(40, 0), P(20, 400)], { step: { x: 5, y: 50 } })),
  num(String.raw`What is the minimum value of $y=(x-1)(x-5)$?`, -4, "x = 3: (2)(−2)."),
  num(String.raw`What is the minimum value of $y=x^2-6x$?`, -9, "x = 3."),
  num("The graph shows area A = w(100 − 2w) for a pen against a wall. What is the maximum area?", 1250, "w = 25: 25 × 50.", graph((w) => w * (100 - 2 * w), { xmin: -2, xmax: 52, ymin: -50, ymax: 1400 }, [P(25, 1250)], { a: 0, b: 50, step: { x: 5, y: 200 } })),
];
