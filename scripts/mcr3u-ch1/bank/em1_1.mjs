// 1.1 Relations and Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, P, sideways, circ, mapDoc, graph, PAR } from "./fig.mjs";

const V6 = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };

export const E = [
  tf(String.raw`$\{(1,2),(2,2),(3,2)\}$ is a function.`, true, "Each input has one output; sharing an output is allowed."),
  tf(String.raw`$\{(4,1),(4,-1),(5,0)\}$ is a function.`, false, "The input 4 has two outputs."),
  mc("Which test checks whether a graph is a function?", "the vertical-line test", ["the horizontal-line test", "the slope test", "the y-intercept test"], "A vertical line is one input."),
  num(String.raw`How many elements are in the domain of $\{(-5,0),(-2,8),(3,8),(9,1)\}$?`, 4, "Inputs: −5, −2, 3, 9."),
  num(String.raw`How many elements are in the range of $\{(-5,0),(-2,8),(3,8),(9,1)\}$?`, 3, "Outputs: 0, 8, 1 (8 counted once)."),
  mc("Which equation defines a function?", String.raw`$y=7x-2$`, [String.raw`$x=y^2$`, String.raw`$x^2+y^2=1$`, String.raw`$x=4$`], "Only the line gives one y for each x."),
  tf(String.raw`The vertical line $x=-3$ is a function.`, false, "One input, infinitely many outputs."),
  tf(String.raw`The horizontal line $y=-3$ is a function.`, true, "Every input gives −3."),
  mc("Classify the relation in the mapping diagram.", "a many-to-one function", ["a one-to-one function", "not a function", "impossible to tell"], "Each input has one arrow; 2 and 4 share the output 5.", mapDoc([[2, 5], [4, 5], [6, 7]])),
  mc("Is this circle the graph of a function?", "no — some vertical lines meet it twice", ["yes — it is a closed curve", "yes — it passes the horizontal-line test", "no — it has no y-intercept"], "A circle fails the vertical-line test.", planeDoc({ view: V6, curves: circ(3, 1, -1) })),
  num(String.raw`How many outputs does the input $3$ have in $\{(3,0),(3,6),(5,6)\}$?`, 2, "Outputs 0 and 6."),
  mc("Which function is one-to-one?", String.raw`$y=2x+1$`, [String.raw`$y=x^2$`, String.raw`$y=|x|$`, String.raw`$y=5$`], "Different inputs always give different outputs only for the slanted line."),
  tf("A function can have two different inputs with the same output.", true, "That is a many-to-one function."),
  fill("The set of all inputs of a relation is called the ___.", ["domain", "the domain"], "Domain = inputs."),
  fill("The set of all outputs of a relation is called the ___.", ["range", "the range"], "Range = outputs."),
  num(String.raw`For $x=y^2$, how many y-values go with $x=25$?`, 2, "y = 5 or y = −5."),
  mc("Is this parabola the graph of a function?", "yes, many-to-one", ["yes, one-to-one", "no", "only for x > 0"], "Vertical lines meet it once; symmetric points share outputs.", graph((x) => -x * x + 2, V6, [P(-1, 1, false), P(1, 1, false)])),
  tf("Every function is a relation.", true, "A function is a special kind of relation."),
  tf("Every relation is a function.", false, "A relation can give one input two outputs."),
  mc("“Each car → its licence plate” is…", "a one-to-one function", ["a many-to-one function", "not a function", "a vertical line"], "Each car has one plate, and no two cars share one."),
];

export const M = [
  num(String.raw`For $x^2+y^2=100$, what is the positive y-value when $x=6$?`, 8, "y² = 64."),
  ms("Which equations define y as a function of x? Select all.", [String.raw`$y=3-x^2$`, String.raw`$x=y^2+1$`, String.raw`$y=|x+2|$`, String.raw`$x^2+y^2=9$`, String.raw`$2x+5y=10$`], [0, 2, 4], "The others give ± when solved for y."),
  mc("Is this curve the graph of a function?", "no — it is a sideways parabola", ["yes — every x has an output", "yes — it is a parabola", "no — it has no vertex"], "x = 0 meets it twice.", planeDoc({ view: V6, curves: sideways(-1, 2) })),
  num(String.raw`How many points does the line $x=3$ share with $x=y^2-1$?`, 2, "y² = 4."),
  mc(String.raw`For which values of $a$ is $\{(0,a),(1,3),(a,5)\}$ NOT a function?`, "a = 0 or a = 1", ["a = 3 or a = 5", "only a = 0", "every value of a"], "a = 0 gives (0, 0) and (0, 5); a = 1 gives (1, 3) and (1, 5)."),
  tf(String.raw`The graph of $y=\frac1x$ passes the vertical-line test.`, true, "Each x ≠ 0 has one output.", planeDoc({ view: V6, curves: [PAR.recip] })),
  mc(String.raw`Is $x=|y|$ a function?`, "no — x = 2 gives y = 2 or y = −2", ["yes — absolute value is a function", "yes — it is a V shape", "only for y > 0"], "Solve: y = ±x."),
  num(String.raw`The pairs $(t,t^2)$ are formed for $t=-2,-1,0,1,2$. How many elements are in the range?`, 3, "Outputs 4, 1, 0."),
  ms("Which are functions? Select all.", ["each student → their homeroom", "each teacher → a student they teach", "each country → its capital city", "each positive number → its square roots"], [0, 2], "A teacher teaches many students; a positive number has two square roots."),
  mc(String.raw`How can $x^2+y^2=49$ be turned into a function?`, String.raw`keep only $y=\sqrt{49-x^2}$`, [String.raw`replace $y^2$ by $y$`, "remove the x-axis", String.raw`keep only $x\ge0$`], "Taking one half of the circle (upper or lower) gives one output per input."),
  num(String.raw`For $x=y^2-6y$, how many y-values go with $x=-9$?`, 1, "y² − 6y + 9 = 0 → y = 3 (a double root)."),
  tf("If a graph fails the horizontal-line test, it is not a function.", false, "It is still a function — just not one-to-one."),
  mc(String.raw`The table lists $x$: $1,2,3,2$ and $y$: $4,5,6,5$. Is it a function?`, "yes — (2, 5) is just listed twice", ["no — x = 2 is repeated", "no — the outputs increase", "yes — but only one-to-one"], "A repeated pair is the same pair; the input 2 still has one output."),
  num(String.raw`How many ordered pairs satisfy $y^2=x$ with $x\in\{0,1,4\}$?`, 5, "(0, 0), (1, ±1), (4, ±2)."),
  mc("How would you classify the graph?", "a many-to-one function", ["a one-to-one function", "not a function", "a relation with no range"], "Vertical lines meet it once; x = −1 and x = 1 share an output.", graph((x) => 2 * Math.abs(x) - 3, V6, [P(-1, -1, false), P(1, -1, false)])),
  tf(String.raw`$y=x^3$ is one-to-one.`, true, "Different inputs have different cubes."),
  num(String.raw`For $x^2+(y-1)^2=25$, what is the largest y-value when $x=3$?`, 5, "(y − 1)² = 16 → y = 5 or −3."),
  mc(String.raw`Which vertical line meets $x=(y+1)^2+2$ exactly once?`, String.raw`$x=2$`, [String.raw`$x=-1$`, String.raw`$x=0$`, String.raw`$x=3$`], "Only at the vertex (2, −1)."),
  ms("Which graphs pass the vertical-line test? Select all.", ["a horizontal line", "a vertical line", "a circle", "a parabola opening up", "a parabola opening right"], [0, 3], "The other three have inputs with two outputs."),
  mc("A weather station records the temperature at each time of day. Is time → temperature a function?", "yes — one temperature at each moment", ["no — temperatures repeat", "no — time is continuous", "only if temperatures increase"], "Repeated outputs are allowed."),
];
