// 4.1 Introducing Quadratic Relations — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

const pts = (list, view, step = { x: 1, y: 1 }) => planeDoc({ view, points: list.map(([x, y]) => ({ x, y, color: "blue" })), step });

export const E = [
  mc(`In a quadratic relation, the highest power of $x$ is…`, "2", ["1", "3", "0"], "For example $y=3x^2-x+4$."),
  tf(`The graph of a quadratic relation is a parabola.`, true, "A U-shaped curve opening up or down."),
  num(`Find the first difference of the table $y: 3,7,11,15$ (for $x=0,1,2,3$).`, 4, "$7-3$."),
  mc(`The table $y: 2,5,8,11$ (for $x=0,1,2,3$) is…`, "linear", ["quadratic", "neither", "exponential"], "First differences are all 3."),
  mc(`The table $y: 1,4,9,16$ (for $x=1,2,3,4$) is…`, "quadratic", ["linear", "exponential", "neither"], "Second differences are all 2."),
  num(`Find the second difference of $y: 1,4,9,16,25$.`, 2, "First differences $3,5,7,9$."),
  tf(`Constant first differences show that a relation is quadratic.`, false, "Constant first differences mean linear."),
  num(`What is the second difference of $y=x^2$ for $x=0,1,2,\\ldots$?`, 2, "$2a$ with $a=1$."),
  num(`What is the second difference of $y=4x^2$ for $x=0,1,2,\\ldots$?`, 8, "$2a=8$."),
  mc(`Which relation is quadratic?`, "$y=3x^2-1$", ["$y=3x-1$", "$y=3^x$", "$y=\\frac{3}{x}$"], "Highest power 2."),
  fill(`The first differences are $2,4,6,8$. The second differences are all ___`, ["2"], "Each goes up by 2."),
  tf(`If the second differences are constant and not zero, the relation is quadratic.`, true, "That is the test."),
  num(`Find the next value: $0,1,4,9,$ ___`, 16, "Squares: $4^2$."),
  mc(`The table $y: 3,6,12,24$ (for $x=0,1,2,3$) is…`, "neither linear nor quadratic", ["linear", "quadratic", "constant"], "Each value doubles (constant ratio)."),
  num(`The second difference of a quadratic (steps of 1) is $10$. What is $a$?`, 5, "$2a=10$."),
  tf(`Finite differences can be used when the $x$-values go up in unequal steps.`, false, "The steps must be equal."),
  num(`Evaluate $y=x^2+5$ at $x=3$.`, 14, "$9+5$."),
  mc(`A parabola opening down has second differences that are…`, "negative", ["positive", "zero", "undefined"], "$a<0$ gives $2a<0$."),
  num(`For $y=x^2$, what is the first difference from $x=2$ to $x=3$?`, 5, "$9-4$."),
  mc(`The points in the graph are best described as…`, "quadratic", ["linear", "constant", "exponential"], "They fall then rise symmetrically.", pts([[-2, 4], [-1, 1], [0, 0], [1, 1], [2, 4]], { xmin: -3, xmax: 3, ymin: -1, ymax: 5 })),
];

export const M = [
  num(`A quadratic table has $y: 2,3,6,11,\\square$. Find the missing value.`, 18, "First differences $1,3,5,7$."),
  num(`A quadratic table has $y: 7,\\square,1,1$ for $x=0,1,2,3$. Find the missing value.`, 3, "With $y_1=3$: first differences $-4,-2,0$, second differences $2$."),
  num(`The table $y: 1,6,15,28$ (for $x=0,1,2,3$) is quadratic. Find $a$.`, 2, "Second difference 4, so $a=2$."),
  num(`The table $y: 1,6,15,28$ (for $x=0,1,2,3$) is $y=ax^2+bx+c$. Find $b$.`, 3, "$a=2$, $c=1$; $2+b+1=6$."),
  mc(`Which table is quadratic (for $x=0,1,2,3$)?`, "$0,3,10,21$", ["$1,3,9,27$", "$2,4,6,8$", "$5,5,5,5$"], "First differences $3,7,11$; second differences $4$."),
  num(`What is the second difference of $y=-3x^2+7x$ for $x=0,1,2,\\ldots$?`, -6, "$2a$."),
  tf(`$y=(x+1)^2$ is a quadratic relation.`, true, "It expands to $x^2+2x+1$."),
  num(`For $y=x^2$ with $x=0,2,4,6$, what is the second difference?`, 8, "Values $0,4,16,36$; differences $4,12,20$."),
  mc(`A ball's heights at equal times are $2,17,22,17,2$ m. The maximum height is…`, "22 m", ["17 m", "2 m", "41 m"], "The middle value — the data are symmetric."),
  num(`Heights $0,12,16,12,0$ are recorded at $t=0,1,2,3,4$ s. At what time is the ball highest?`, 2, "Symmetric about $t=2$."),
  fill(`A quadratic table with steps of 1 has second differences $-6$, so $a=$ ___`, ["-3"], "$2a=-6$."),
  tf(`Data with roughly constant second differences can be modelled by a parabola.`, true, "Use a curve of best fit."),
  num(`A rectangle has perimeter $16$ cm and width $3$ cm. What is its area (cm²)?`, 15, "Length $5$."),
  mc(`For rectangles with perimeter 16 cm, area as a function of width is…`, "quadratic", ["linear", "constant", "exponential"], "$A=w(8-w)$."),
  num(`What is the second difference of $y=0.5x^2+3$ for $x=0,1,2,\\ldots$?`, 1, "$2(0.5)$."),
  num(`The table $y: -4,-3,0,5$ (for $x=0,1,2,3$) is quadratic. Find $a$.`, 1, "Second difference 2."),
  mc(`A table has first differences all equal to $0$. The relation is…`, "constant (a horizontal line)", ["quadratic", "exponential", "not a function"], "Every $y$-value is the same."),
  num(`A quadratic table has $y: 1,3,9,19,33$. Find the next value.`, 51, "First differences $2,6,10,14$; next $18$."),
  tf(`The second differences of $y=2^x$ are constant.`, false, "They are $1,2,4,\\ldots$ — doubling."),
  num(`The graph shows data that look quadratic. What is the smallest $y$-value?`, 0, "The lowest point is $(2,0)$.", pts([[0, 4], [1, 1], [2, 0], [3, 1], [4, 4]], { xmin: -1, xmax: 5, ymin: -1, ymax: 5 })),
];
