// 1.2 Function Notation — 20 easy + 20 medium questions (answers computed from the rules)
import { mc, ms, num, tf, fill, mx } from "../../bank/kit.mjs";
import { planeDoc } from "../../figs.mjs";
const S = String.raw;
const f1 = (x) => 3 * x - 5, g1 = (x) => x * x + 2 * x, h1 = (x) => -2 * x * x + 7;

export const E = [
  num(S`$f(x)=3x-5$. Find $f(4)$.`, f1(4), "3(4) − 5."),
  num(S`$f(x)=3x-5$. Find $f(-2)$.`, f1(-2), "3(−2) − 5."),
  num(S`$f(x)=3x-5$. Find $f(0)$.`, f1(0), "The y-intercept."),
  num(S`$g(x)=x^2+2x$. Find $g(3)$.`, g1(3), "9 + 6."),
  num(S`$g(x)=x^2+2x$. Find $g(-4)$.`, g1(-4), "(−4)² + 2(−4) = 16 − 8."),
  num(S`$h(x)=-2x^2+7$. Find $h(1)$.`, h1(1), "−2 + 7."),
  num(S`$h(x)=-2x^2+7$. Find $h(-3)$.`, h1(-3), "−2(9) + 7."),
  mc(S`What does $f(5)=12$ mean?`, "When the input is 5, the output is 12", ["f times 5 equals 12", "When the input is 12, the output is 5", "The slope is 12/5"], "f(input) = output."),
  mc(S`If $f(2)=-3$, which point is on the graph of $f$?`, S`$(2,\,-3)$`, [S`$(-3,\,2)$`, S`$(2,\,3)$`, S`$(-2,\,-3)$`], "(input, output)."),
  tf(S`For $f(x)=x^2$, $f(-3)=-9$.`, false, "(−3)² = 9."),
  tf(S`$f(x)$ means $f$ multiplied by $x$.`, false, "f(x) is the output of f at x."),
  num(S`$p(x)=10-x$. Find $p(10)$.`, 0, "10 − 10."),
  num(S`$f(x)=\tfrac12x+4$. Find $f(6)$.`, 7, "3 + 4."),
  num(S`$f(x)=4x+1$. Solve $f(x)=21$.`, 5, "4x = 20."),
  num(S`$f(x)=-x+8$. Solve $f(x)=3$.`, 5, "−x = −5."),
  mc("The graph of y = f(x) is shown. What is f(2)?", "3", ["2", "0", "−1"], "Go up from x = 2 to the graph.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -2, ymax: 6 }, curves: [{ f: (x) => -(x * x) + 4 * x - 1, color: "violet" }], points: [{ x: 2, y: 3, label: "(2, 3)", color: "amber" }] })),
  mc("The graph of y = g(x) is a line through the points shown. What is g(0)?", "−2", ["0", "1", "2"], "The y-intercept.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -4, ymax: 5 }, lines: [{ m: 1.5, b: -2, color: "violet" }], points: [{ x: 0, y: -2, label: "(0, −2)" }, { x: 2, y: 1, label: "(2, 1)" }] })),
  fill(S`$C(n)$ is the cost of $n$ tickets. $C(4)=60$ means 4 tickets cost ____ dollars.`, ["60"], "Output = cost."),
  num(S`$f(x)=x^2-1$. Find $f(1)+f(2)$.`, 0 + 3, "0 + 3."),
  num(S`$A(r)=3r^2$. Find $A(10)$.`, 300, "3(100)."),
];

const f2 = (x) => 2 * x * x - 3 * x + 4;
export const M = [
  num(S`$f(x)=2x^2-3x+4$. Find $f(-1)$.`, f2(-1), "2 + 3 + 4."),
  num(S`$f(x)=2x^2-3x+4$. Find $f(\tfrac12)$.`, f2(0.5), "0.5 − 1.5 + 4.", null, 1e-9),
  mx(S`$f(x)=x^2-3x$. Simplify $f(a+2)$ (use $a$).`, "a^2+a-2", "(a + 2)² − 3(a + 2) = a² + 4a + 4 − 3a − 6."),
  mx(S`$g(x)=5-2x$. Simplify $g(3a)$.`, "5-6*a", "Replace x by 3a."),
  mc(S`For $f(x)=x^2$, which is equal to $f(3)+2$?`, "11", ["25", "36", "18"], "9 + 2."),
  mc(S`For $f(x)=x^2$, which is equal to $f(3+2)$?`, "25", ["11", "13", "10"], "f(5) = 25."),
  mc(S`For $f(x)=x^2+1$, which is $2f(3)$?`, "20", ["37", "19", "10"], "2(10)."),
  num(S`$f(x)=x^2-6$. Enter the positive solution of $f(x)=30$.`, 6, "x² = 36."),
  num(S`$f(x)=x^2+4$. How many real solutions does $f(x)=1$ have?`, 0, "x² = −3 has none."),
  num(S`$f(x)=-3x+12$ and $f(a)=0$. Enter $a$.`, 4, "−3a + 12 = 0."),
  num(S`$H(t)=-5t^2+20t$ m. Find $H(1)$.`, 15, "−5 + 20."),
  num(S`$H(t)=-5t^2+20t$ m. Enter the time (other than $t=0$) when $H(t)=0$.`, 4, "−5t(t − 4) = 0."),
  mc("The graph of y = f(x) is shown. Which values of x give f(x) = 3?", "x = 0 and x = 4", ["x = 3 only", "x = 1 and x = 3", "x = −1 and x = 5"], "Read across from y = 3.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -3, ymax: 6 }, curves: [{ f: (x) => (x - 2) ** 2 - 1, color: "violet" }], lines: [{ m: 0, b: 3, color: "green", dash: true }], points: [{ x: 0, y: 3, label: "(0, 3)", color: "green" }, { x: 4, y: 3, label: "(4, 3)", color: "green" }] })),
  mc("The graph of y = g(x) is shown. Which value is g(−1)?", "4", ["−1", "0", "2"], "Go up from x = −1.", planeDoc({ view: { xmin: -4, xmax: 3, ymin: -2, ymax: 6 }, curves: [{ f: (x) => -(x * x) - 2 * x + 3, color: "violet" }], points: [{ x: -1, y: 4, label: "(−1, 4)", color: "amber" }] })),
  num(S`$C(n)=0.8n+15$ dollars. For how many items is $C(n)=47$?`, 40, "0.8n = 32."),
  tf(S`For $f(x)=3x$, $f(2x)=2f(x)$.`, true, "f(2x) = 6x = 2(3x)."),
  tf(S`For $f(x)=x^2$, $f(2x)=2f(x)$.`, false, "f(2x) = 4x², but 2f(x) = 2x²."),
  num(S`$f(x)=x^2-2x$, $g(x)=x+4$. Enter the positive solution of $f(x)=g(x)$.`, 4, "x² − 3x − 4 = 0 ⇒ (x − 4)(x + 1) = 0."),
  num(S`$P(x)=-x^2+10x-16$ (thousands of dollars). Find $P(5)$.`, 9, "−25 + 50 − 16."),
  fill(S`$f(x)=2x+b$ and $f(3)=1$. Then $b=$ ____.`, ["-5", "−5"], "6 + b = 1."),
];
