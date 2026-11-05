// 3.5 Rational Function Models — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";
const S = String.raw;

export const E = [
  num(S`A trip of 150 km at speed $v$ takes $t=\dfrac{150}v$ h. Find $t$ at $v=50$.`, 3, "150/50."),
  num(S`A trip of 480 km takes 6 h. What is the average speed in km/h?`, 80, "480/6."),
  num(S`Average cost is $A(x)=\dfrac{600+4x}x$ dollars. Find $A(100)$.`, 10, "1000/100."),
  mc(S`What does the horizontal asymptote of $A(x)=\dfrac{600+4x}x$ represent?`, "the cost per item for very large orders", ["the fixed cost", "the total cost", "the number of items"], "A = 4 + 600/x approaches 4."),
  num(S`What is the horizontal asymptote value of $A(x)=\dfrac{900+12x}x$?`, 12, "12 + 900/x."),
  mc("In a model of time against speed, why is v = 0 excluded?", "the trip would never end", ["speed is always negative", "distance is 0", "time is 0"], "Division by 0."),
  num(S`Intensity is $I=\dfrac{36}{d^2}$. Find $I$ at $d=2$.`, 9, "36/4."),
  num(S`Intensity is $I=\dfrac{50}{d^2}$. Find $I$ at $d=5$.`, 2, "50/25."),
  tf(S`If $I=\dfrac{k}{d^2}$, doubling the distance divides the intensity by 4.`, true, "2² = 4."),
  fill("If pipe A fills a tank in 5 h, it fills ___ of the tank per hour (write as a fraction).", ["1/5", "0.2"], "One job in 5 h."),
  num(S`A worker finishes a job in 8 h. What fraction of the job, as a decimal, is done in 2 h?`, 0.25, "2/8.", null, 0.001),
  num(S`Concentration is $C=\dfrac{\text{salt}}{\text{volume}}$. Find $C$ in g/L for 30 g in 60 L.`, 0.5, "30/60.", null, 0.001),
  num(S`A tank has $C(t)=\dfrac{2t}{10+t}$ g/L. Find $C(10)$.`, 1, "20/20."),
  num(S`For $C(t)=\dfrac{2t}{10+t}$, what value does $C$ approach for large $t$?`, 2, "Ratio of the leading coefficients."),
  tf("Time cannot be negative, so a negative root of a model equation is rejected.", true, "The context restricts the domain."),
  num(S`A population is $P(t)=\dfrac{80t+40}{t+2}$ thousand. Find $P(0)$.`, 20, "40/2."),
  num(S`For $P(t)=\dfrac{80t+40}{t+2}$, what is the long-run value?`, 80, "80/1."),
  mc("Read the long-run value from the graph.", "10", ["0", "5", "20"], "The dashed horizontal asymptote.", planeDoc({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 14 }, curves: [{ f: (t) => 10 * t / (t + 5), a: 0, b: 40, color: "violet" }], lines: [{ m: 0, b: 10, color: "red", dash: true }], step: { x: 5, y: 2 } })),
  mc("From the graph, at what speed does the trip take 4 h?", "50 km/h", ["25 km/h", "100 km/h", "4 km/h"], "The curve passes through (50, 4).", planeDoc({ view: { xmin: 0, xmax: 120, ymin: 0, ymax: 12 }, curves: [{ f: (v) => 200 / v, a: 17, b: 120, color: "violet" }], points: [P(50, 4)], step: { x: 20, y: 2 } })),
  num(S`Two pipes fill a tank at $\tfrac16$ and $\tfrac13$ tank per hour. How many hours do they take together?`, 2, "1/6 + 1/3 = 1/2."),
];

export const M = [
  num(S`$A(x)=\dfrac{1500+20x}x$. How many items give an average cost of 50 dollars?`, 50, "1500 = 30x."),
  num(S`$A(x)=\dfrac{4000+25x}x$. How many items give an average cost of 35 dollars?`, 400, "4000 = 10x."),
  mc(S`$A(x)=\dfrac{800+10x}x$. For which $x$ is $A\lt14$?`, S`$x>200$`, [S`$x\lt200$`, S`$x>80$`, S`$x>14$`], "800 < 4x."),
  num(S`A 400 L tank holds 40 g of salt. Brine with 2 g/L enters at 10 L/min. Find $C(40)$ in g/L.`, 1.05, "C(t) = (40 + 20t)/(400 + 10t), and 840/800 = 1.05.", null, 0.001),
  num(S`For the tank $C(t)=\dfrac{40+20t}{400+10t}$ g/L, find the long-run value.`, 2, "20/10."),
  num(S`For $C(t)=\dfrac{3t}{20+t}$ g/L, when is $C=1$?`, 10, "3t = 20 + t."),
  num(S`Pipe A fills a tank in 6 h and pipe B in 3 h. How many hours together?`, 2, "1/6 + 1/3 = 1/2."),
  num(S`Worker A takes 10 h. Together with B they take 6 h. How many hours would B take alone?`, 15, "1/B = 1/6 − 1/10 = 1/15."),
  num(S`A drain empties a tank in 12 h while a pipe fills it in 4 h. How many hours to fill with both open?`, 6, "1/4 − 1/12 = 1/6."),
  num(S`A boat travels at 20 km/h in still water with a 5 km/h current. How many hours for 75 km downstream?`, 3, "75/25."),
  num(S`A boat travels at 20 km/h in still water with a 5 km/h current. How many hours for 75 km upstream?`, 5, "75/15."),
  num(S`Find the average rate of change of $t=\dfrac{120}v$ from $v=40$ to $v=60$ (decimal).`, -0.05, "(2 − 3)/20.", null, 0.001),
  num(S`Find the average rate of change of $I=\dfrac{100}{d^2}$ on $[2,5]$.`, -7, "(4 − 25)/3."),
  num(S`Estimate the instantaneous rate of change of $I=\dfrac{16}{d^2}$ at $d=2$.`, -4, "−32/d³ = −4.", null, 0.05),
  num(S`For $C(t)=\dfrac{12t}{t^2+4}$, find $C(2)$.`, 3, "24/8."),
  mc(S`For $C(t)=\dfrac{12t}{t^2+4}$, when is $C\ge2.4$?`, S`$1\le t\le4$`, [S`$0\le t\le4$`, S`$t\ge1$`, S`$2\le t\le4$`], "t² − 5t + 4 ≤ 0."),
  mc("The graph shows C(t). During which times is C at least 2?", S`$1\le t\le4$`, [S`$0\le t\le2$`, S`$t\ge4$`, S`$2\le t\le4$`], "C(t) = 10t/(t² + 4) meets y = 2 at t = 1 and t = 4.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 4 }, curves: [{ f: (t) => 10 * t / (t * t + 4), a: 0, b: 8, color: "violet" }, { f: () => 2, color: "green" }], points: [P(1, 2), P(4, 2)], step: { x: 1, y: 1 } })),
  mc("From the graph of average cost, what is the fixed cost if A(x) = (F + 3x)/x?", "300 dollars", ["3 dollars", "100 dollars", "6 dollars"], "At x = 100, A = 6: F + 300 = 600.", planeDoc({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 14 }, curves: [{ f: (x) => (300 + 3 * x) / x, a: 25, b: 300, color: "violet" }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [P(100, 6)], step: { x: 50, y: 2 } })),
  tf(S`For $A(x)=\dfrac{F+vx}x$ with $F>0$, the average cost is always above $v$.`, true, "A = v + F/x and F/x > 0."),
  num(S`A rectangle has area 64 m². Its perimeter is $P(x)=2x+\dfrac{128}x$. Find $P(8)$.`, 32, "16 + 16."),
];
