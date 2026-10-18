// 1.2 Function Notation — 20 easy + 20 medium questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

const V6 = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };

export const E = [
  num(String.raw`$f(x)=3x-5$. Find $f(4)$.`, 7, "12 − 5."),
  num(String.raw`$f(x)=x^2+1$. Find $f(-3)$.`, 10, "9 + 1."),
  num(String.raw`$g(x)=-2x+9$. Find $g(0)$.`, 9, "Only the constant remains."),
  num(String.raw`$h(x)=6-x^2$. Find $h(2)$.`, 2, "6 − 4."),
  num(String.raw`$f(x)=4x$. Solve $f(x)=28$.`, 7, "4x = 28."),
  num(String.raw`$f(x)=2x+3$. Solve $f(x)=-7$.`, -5, "2x = −10."),
  mc(String.raw`$f(5)=12$ means…`, String.raw`the point $(5,12)$ is on the graph of $f$`, [String.raw`the point $(12,5)$ is on the graph`, String.raw`$f$ times 5 is 12`, String.raw`$f(x)=12$ only at $x=0$`], "Input 5, output 12."),
  tf(String.raw`If $f(x)=x^2$, then $f(-4)=-16$.`, false, "(−4)² = 16."),
  num("Use the graph to find f(1).", 2, "The line passes through (1, 2).", planeDoc({ view: V6, lines: [{ m: -1, b: 3, color: "violet" }], points: [P(1, 2, false)] })),
  num("Use the graph of y = f(x) to find the positive solution of f(x) = 0.", 2, "The parabola crosses the x-axis at −2 and 2.", graph((x) => x * x - 4, V6)),
  mx(String.raw`$f(x)=5x-1$. Write $f(a)$.`, "5*a-1", "Replace x by a."),
  mx(String.raw`$f(x)=x+7$. Write $f(2x)$.`, "2*x+7", "Replace x by 2x."),
  num(String.raw`A gym charges $C(n)=8n+12$ dollars for $n$ classes. Find $C(5)$.`, 52, "40 + 12."),
  num(String.raw`For $C(n)=8n+12$, how many classes cost 100 dollars?`, 11, "8n = 88."),
  tf(String.raw`$f(0)$ is the y-intercept of the graph of $f$.`, true, "At x = 0 the graph meets the y-axis."),
  num(String.raw`$f(x)=10-3x$. Find $f(-2)$.`, 16, "10 + 6."),
  num(String.raw`A table gives $x$: $1,2,3$ and $f(x)$: $4,9,16$. Find $f(2)$.`, 9, "Read across from x = 2."),
  mc(String.raw`Solving $f(x)=0$ finds the…`, "x-intercepts (zeros)", ["y-intercept", "vertex", "domain"], "Inputs that give output 0."),
  num(String.raw`$f(x)=\frac x2+1$. Find $f(10)$.`, 6, "5 + 1."),
  num(String.raw`$f(x)=|x-6|$. Find $f(1)$.`, 5, "|−5|."),
];

export const M = [
  mx(String.raw`$f(x)=x^2-3x$. Simplify $f(a+1)$.`, "a^2-a-2", "(a + 1)² − 3(a + 1) = a² + 2a + 1 − 3a − 3."),
  mx(String.raw`$g(x)=4-2x$. Write $g(3a)$.`, "4-6*a", "4 − 2(3a)."),
  num(String.raw`$f(x)=x^2-2x$. Find the negative solution of $f(x)=8$.`, -2, "x² − 2x − 8 = (x − 4)(x + 2)."),
  num(String.raw`$f(x)=2x^2-x$. Find the positive solution of $f(x)=10$.`, 2.5, "(2x − 5)(x + 2) = 0.", null, 0.001),
  num(String.raw`$f(x)=x^2+5$. Find $f(3)-f(1)$.`, 8, "14 − 6."),
  num(String.raw`$f(x)=3x-1$ and $g(x)=x^2$. Find $f(g(2))$.`, 11, "g(2) = 4; f(4) = 11."),
  num(String.raw`$f(x)=3x-1$ and $g(x)=x^2$. Find $g(f(2))$.`, 25, "f(2) = 5; g(5) = 25."),
  tf(String.raw`For $f(x)=x^2$, $f(a+b)=f(a)+f(b)$ for all $a$, $b$.`, false, "(a + b)² = a² + 2ab + b²."),
  num("The graph shows y = f(x). How many x-values satisfy f(x) = 3?", 2, "The line y = 3 crosses the parabola twice.", graph((x) => -((x - 1) ** 2) + 4, V6, [P(1, 4)], { lines: [{ m: 0, b: 3, color: "amber", dash: true }] })),
  num("The graph shows y = f(x). How many x-values satisfy f(x) = 4?", 1, "Only the vertex (1, 4) has height 4.", graph((x) => -((x - 1) ** 2) + 4, V6, [P(1, 4)])),
  num(String.raw`A ball's height is $h(t)=-5t^2+20t+1$ m. Find $h(1)$.`, 16, "−5 + 20 + 1."),
  num(String.raw`For $h(t)=-5t^2+20t+1$, at what time $t>0$ is the ball back at its starting height?`, 4, "−5t² + 20t = 0 → t = 0 or 4."),
  ms(String.raw`$f(x)=x^2-4x$. Which values equal 0? Select all.`, [String.raw`$f(0)$`, String.raw`$f(4)$`, String.raw`$f(2)$`, String.raw`$f(-4)$`], [0, 1], "f(2) = −4, f(−4) = 32."),
  num(String.raw`$f(x)=ax+3$ and $f(2)=11$. Find $a$.`, 4, "2a + 3 = 11."),
  mc(String.raw`$f(x)=x^2$. Compare $2f(3)$ and $f(6)$.`, "18 and 36", ["18 and 18", "36 and 36", "36 and 18"], "2·9 = 18; 6² = 36."),
  num(String.raw`A table gives $x$: $-1,0,2,5$ and $f(x)$: $3,-2,3,0$. How many table values solve $f(x)=3$?`, 2, "x = −1 and x = 2."),
  mx(String.raw`$f(x)=2x+5$. Simplify $f(x-3)$.`, "2*x-1", "2(x − 3) + 5."),
  num(String.raw`$f(x)=\sqrt{x+7}$. Find $f(9)$.`, 4, "√16."),
  num(String.raw`$f(x)=\frac{1}{x-2}$. Find $f(2.5)$.`, 2, "1 ÷ 0.5."),
  num(String.raw`Revenue is $R(x)=-2x^2+24x$ (hundreds of dollars). Find $R(6)$.`, 72, "−72 + 144."),
];
