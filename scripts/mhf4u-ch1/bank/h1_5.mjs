// 1.5 Slopes of Secants and Average Rate of Change — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const TOPIC = "1.5 Slopes of Secants and Average Rate of Change";
export const Q = [
  num(String.raw`The average rate of change of $f(x)=x^2+bx$ on $[1,3]$ is 10. Find $b$.`, 6, "(9 + 3b − 1 − b) ÷ 2 = 4 + b."),
  num(String.raw`The average rate of change of $f(x)=x^3$ on $[1,b]$ is 7, with $b>1$. Find $b$.`, 2, "(b³ − 1)/(b − 1) = b² + b + 1 = 7."),
  num(String.raw`The average rate of change of $f(x)=x^2$ on $[a,a+2]$ is 10. Find $a$.`, 4, "((a + 2)² − a²) ÷ 2 = 2a + 2."),
  num(String.raw`The average rate of change of $f(x)=ax^2$ on $[1,3]$ is 12. Find $a$.`, 3, "8a ÷ 2 = 4a."),
  ms(String.raw`On which intervals is the average rate of change of $f(x)=x^3-9x$ equal to 0? Select all.`, [String.raw`$[-3,3]$`, String.raw`$[0,3]$`, String.raw`$[-3,0]$`, String.raw`$[1,2]$`], [0, 1, 2], "f(−3) = f(0) = f(3) = 0; f(1) = −8, f(2) = −10.", graph((x) => x ** 3 - 9 * x, { xmin: -4, xmax: 4, ymin: -12, ymax: 12 }, [], { step: { x: 1, y: 2 } })),
  num(String.raw`A ball has height $h(t)=-4.9t^2+19.6t+1$ m. Find its average velocity on $[0,4]$.`, 0, "h(0) = h(4) = 1."),
  num(String.raw`Find the average rate of change of $f(x)=2^x$ on $[1,4]$ (2 decimals).`, 4.6667, "(16 − 2) ÷ 3.", null, 0.006),
  num("A tank drains so that V(t) = 40(5 − t)² L after t min. Find the average rate of change on [1, 3].", -240, "V(1) = 640, V(3) = 160: −480 ÷ 2.", graph((x) => 40 * (5 - x) ** 2, { xmin: 0, xmax: 5.5, ymin: 0, ymax: 1100 }, [P(1, 640), P(3, 160)], { a: 0, b: 5, step: { x: 1, y: 100 } })),
  tf(String.raw`If the average rate of change of $f$ is 3 on $[0,2]$ and 5 on $[2,4]$, then it is 4 on $[0,4]$.`, true, "Total change 6 + 10 = 16 over 4 units."),
  num(String.raw`The average rate of change of $f$ is 3 on $[0,2]$ and $-1$ on $[2,6]$. Find it on $[0,6]$ (2 decimals).`, 0.3333, "Total change 6 − 4 = 2 over 6 units.", null, 0.006),
  mc(String.raw`For $f(x)=x^2$, the average rate of change on $[a,b]$ simplifies to:`, String.raw`$a+b$`, [String.raw`$b-a$`, String.raw`$2b$`, String.raw`$ab$`], "(b² − a²)/(b − a) = a + b."),
  num(String.raw`The average rate of change of $f(x)=x^2$ on $[-3,b]$ is $-1$. Find $b$.`, 2, "−3 + b = −1."),
  num("Find the average rate of change of y = x³ − 6x² + 9x on [0, 4].", 1, "f(0) = 0, f(4) = 4.", graph((x) => x ** 3 - 6 * x * x + 9 * x, { xmin: -0.5, xmax: 4.5, ymin: -1, ymax: 6 }, [P(0, 0), P(4, 4)])),
  num(String.raw`An investment doubles every 8 years: $A(t)=1000(2)^{t/8}$. Find the average rate of change on $[8,16]$ in dollars per year.`, 250, "(4000 − 2000) ÷ 8."),
  mc(String.raw`On which interval is the average rate of change of $f(x)=x^3$ equal to 3?`, String.raw`$[-1,2]$`, [String.raw`$[0,3]$`, String.raw`$[1,2]$`, String.raw`$[0,1]$`], "(8 − (−1)) ÷ 3 = 3."),
  num(String.raw`The secant to $f(x)=x^2-4x+5$ through $x=1$ and $x=3$ meets the y-axis at what y-value?`, 2, "f(1) = f(3) = 2: the secant is y = 2."),
  num(String.raw`Find the y-intercept of the secant to $y=x^3$ through $x=-1$ and $x=2$.`, 2, "Slope (8 + 1) ÷ 3 = 3 through (−1, −1): y = 3x + 2."),
  tf(String.raw`For every $a>0$, the average rate of change of $y=x^3$ on $[-a,a]$ is positive.`, true, "(a³ − (−a³)) ÷ 2a = a² > 0."),
  num("An object's distance is d(t) = 0.5t³ m. Find its average speed on [2, 4].", 14, "(32 − 4) ÷ 2.", graph((x) => 0.5 * x ** 3, { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 34 }, [P(2, 4), P(4, 32)], { a: 0, step: { x: 1, y: 4 } })),
  num(String.raw`The cost of $x$ items is $C(x)=0.02x^2+3x+100$ dollars. Find the average rate of change from 50 to 150 items.`, 7, "C(50) = 300, C(150) = 1000: 700 ÷ 100."),
];
