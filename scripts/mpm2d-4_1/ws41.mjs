// MPM2D 4.1 worksheet content (consumed by scripts/mpm2d-worksheets/build.mjs via content/u4.mjs) + the Concept Spotlight text.
// Tables and graphs are generated from functions so every number is consistent.
import { poly, diffs, classify, diffTableTex } from "./lib41.mjs";

const r = String.raw;
const fm = (n) => (n < 0 ? `-${-n}` : `${n}`);
const range = (a, b, s = 1) => { const o = []; for (let x = a; x <= b + 1e-9; x += s) o.push(Math.round(x * 1e6) / 1e6); return o; };
const T = (xs, ys, o = {}) => diffTableTex({ xs, ys, ...o });

/** A pgfplots graph with a curve, points on it (green, labelled), and optional "off the curve" points (red). */
function G({ fn, dom, bounds, on = [], off = [], xt = 1, yt = 1, label = true, letters = null, opens = "up" }) {
  const an = opens === "down" ? "south west" : "north west";
  const [x0, x1, y0, y1] = bounds;
  const dots = on.length ? `\\addplot[only marks,mark=*,mark size=2pt,green!45!black]coordinates{${on.map(([x, y]) => `(${x},${y})`).join("")}};` : "";
  const offDots = off.length ? `\\addplot[only marks,mark=x,mark size=3.5pt,very thick,red!75!black]coordinates{${off.map(([x, y]) => `(${x},${y})`).join("")}};` : "";
  const names = (label ? on.map(([x, y], i) => `\\node[font=\\tiny,anchor=${an},green!35!black] at (axis cs:${x},${y}){${letters ? `$${letters[i]}$` : `$(${fm(x)},${fm(y)})$`}};`) : []).join("");
  const offNames = off.map(([x, y], i) => `\\node[font=\\tiny,anchor=${an},red!70!black] at (axis cs:${x},${y}){$(${fm(x)},${fm(y)})$};`).join("");
  return r`\begin{center}\begin{tikzpicture}\begin{axis}[width=8.6cm,height=5.6cm,axis lines=middle,xlabel={\scriptsize$x$},ylabel={\scriptsize$y$},grid=both,grid style={gray!16},xmin=${x0},xmax=${x1},ymin=${y0},ymax=${y1},xtick distance=${xt},ytick distance=${yt},tick label style={font=\tiny},axis line style={-}]
\addplot[exblue,very thick,domain=${dom[0]}:${dom[1]},samples=90]{${fn}};${dots}${offDots}${names}${offNames}
\end{axis}\end{tikzpicture}\end{center}`;
}

// ───────── data ─────────
const f1 = poly(1, 2, -3), xs1 = range(-3, 1);
const fb = poly(-1, 0, 4);
const f4 = poly(2, -1, 1), xs4 = range(0, 4);
const f5 = poly(2, -1, 5), xs5 = range(0, 3);
const f6 = poly(-2, 8, -3), xs6 = range(0, 4);
const f7 = poly(2, 0, 0), xs7 = range(0, 9, 3);
const f8 = (w) => w * (20 - w), xs8 = range(0, 20, 5);
const f9 = poly(1, 0, 2), xs9 = range(0, 4), ys9bad = [2, 3, 6, 11, 20];

export const W41 = {
  code: "4.1", unit: "4: Quadratic Relations", title: "Introducing Quadratic Relations",
  intro: r`A \textbf{quadratic relation} has degree $2$ and graphs as a \textbf{parabola}. In a table with equal $x$-steps, its \textbf{second differences are constant}. Use the difference table to test a relation, find missing values, find $a$, $b$ and $c$ --- and always \textbf{check the points on the graph}.`,
  ideas: [
    r`\textcolor{exblue}{\textbf{1st differences}} $=$ differences of neighbouring $y$-values; \textcolor{qorange}{\textbf{2nd differences}} $=$ differences of those.`,
    r`Constant 1st differences $\Rightarrow$ linear. Constant (non-zero) 2nd differences $\Rightarrow$ \textbf{quadratic}.`,
    r`With $x$-steps of size $h$: 2nd difference $=2ah^2$ (so $2a$ when $h=1$). Then $c=y(0)$ and one more point gives $b$.`,
    r`A point $(x,y)$ is on the graph exactly when substituting $x$ gives $y$. A table row off the curve means a wrong value.`,
  ],
  examples: [
    { t: "Build the table and check the graph", body: r`Complete the difference table for $y=x^2+2x-3$ and decide whether it is quadratic.
${T(xs1, xs1.map(f1))}
\soln 1st differences ${diffs(xs1.map(f1)).map((d) => `$${fm(d)}$`).join(", ")}; 2nd differences ${diffs(diffs(xs1.map(f1))).map((d) => `$${fm(d)}$`).join(", ")} --- constant, so quadratic with $2a=2$, $a=1$. Check $(1,0)$: $1+2-3=0$ \checkmark.
${G({ fn: "x^2+2*x-3", dom: [-4, 2], bounds: [-4, 2, -5, 2], on: xs1.map((x) => [x, f1(x)]), xt: 1, yt: 1 })}` },
    { t: "Linear, quadratic or neither?", body: r`Use differences to classify each table.
${T(range(0, 4), range(0, 4).map((x) => 3 * x - 2), { name: "A" })}
${T(range(0, 4), range(0, 4).map((x) => x * x - 2 * x), { name: "B" })}
${T(range(0, 4), range(0, 4).map((x) => 3 ** x), { name: "C" })}
\soln \textbf{A:} 1st differences all $3$ --- linear. \textbf{B:} 1st differences $-1,1,3,5$ change, 2nd differences all $2$ --- quadratic. \textbf{C:} 1st differences $2,6,18,54$ and 2nd differences $4,12,36$ both keep changing --- neither.` },
    { t: "Is the point on the graph?", body: r`The graph is $y=-x^2+4$. Is $(3,-5)$ on it? Is $(2,1)$?
\soln For $x=3$: $y=-9+4=-5$, so $(3,-5)$ \textbf{is} on the graph. For $x=2$: $y=-4+4=0\ne1$, so $(2,1)$ is \textbf{not} (the graph passes through $(2,0)$).
${G({ opens: "down", fn: "-x^2+4", dom: [-3.2, 3.2], bounds: [-4, 4, -6, 5], on: [[-2, 0], [0, 4], [3, -5]], off: [[2, 1]], xt: 1, yt: 1 })}` },
    { t: "Find the missing value", body: r`The relation is quadratic. Find the missing $y$-value.
${T(xs4, xs4.map(f4), { blankY: [2] })}
\soln Known 1st differences: $1$ (first step) and $13$ (last step). If the 2nd difference is $d$, the last 1st difference is $1+3d=13$, so $d=4$. The 1st differences are $1,5,9,13$, so the missing value is $2+5=7$. Check: $7+9=16$ \checkmark.` },
    { t: "Find $a$, $b$ and $c$ from a table", body: r`Find the equation $y=ax^2+bx+c$ from the table.
${T(xs5, xs5.map(f5))}
\soln 2nd difference $4=2a$, so $a=2$. $c=y(0)=5$. At $x=1$: $2+b+5=6$, so $b=-1$. $y=2x^2-x+5$. Check $x=3$: $18-3+5=20$ \checkmark.` },
    { t: "A parabola that opens down", body: r`Use the table to find $a$, the direction of opening, and the maximum value.
${T(xs6, xs6.map(f6))}
\soln 2nd difference $-4$, so $a=-2<0$: opens \textbf{down}. The values rise to $5$ at $x=2$, then fall: maximum value $5$, vertex $(2,5)$.
${G({ opens: "down", fn: "-2*x^2+8*x-3", dom: [-0.4, 4.4], bounds: [-1, 5, -4, 6], on: xs6.map((x) => [x, f6(x)]), xt: 1, yt: 1 })}` },
    { t: "Steps of 3", body: r`The $x$-values go up by $3$. Find $a$ if $y=ax^2$.
${T(xs7, xs7.map(f7))}
\soln 1st differences $18,54,90$; 2nd differences $36,36$. With $h=3$: $2ah^2=18a=36$, so $a=2$. Check: $y(9)=2(81)=162$ \checkmark.` },
    { t: "Maximum area", body: r`A fence of $40$ m encloses a rectangle of width $w$, so $A=w(20-w)$. Study the table.
${T(xs8, xs8.map(f8), { name: "A" })}
\soln 2nd differences $-50$; with $h=5$: $2ah^2=50a=-50$, so $a=-1$ (opens down). The largest area is $100\ \text{m}^2$ at $w=10$ m (a square $10$ by $10$).
${G({ opens: "down", fn: "x*(20-x)", dom: [0, 20], bounds: [0, 20, 0, 110], on: xs8.map((x) => [x, f8(x)]), xt: 5, yt: 20 })}` },
    { t: "Find the error", body: r`A student says this table is quadratic. Find the mistake and the correct value.
${T(xs9, ys9bad)}
\soln 1st differences $1,3,5,9$; 2nd differences $2,2,4$ --- the last one breaks the pattern. The last 1st difference should be $7$, so the last value should be $11+7=18$, not $20$. Check on $y=x^2+2$: $y(4)=18$.
${G({ fn: "x^2+2", dom: [-0.3, 4.4], bounds: [-1, 5, 0, 22], on: [[0, 2], [1, 3], [2, 6], [3, 11]], off: [[4, 20]], xt: 1, yt: 4 })}` },
  ],
  questions: [
    { ask: r`Complete the differences for each table and decide whether it is linear, quadratic or neither.
${T(range(1, 5), range(1, 5).map((x) => x * x + 1), { blank: true, name: "A" })}
${T(range(0, 4), range(0, 4).map((x) => 4 * x - 3), { blank: true, name: "B" })}`, ws: "1.0cm" },
    { ask: r`Complete the table for $y=2x^2-3$, then fill in both difference rows.
${T(range(-2, 2), range(-2, 2).map(poly(2, 0, -3)), { blank: true, blankY: [0, 1, 2, 3, 4] })}`, ws: "1.2cm" },
    { ask: r`This relation is quadratic. Find the missing value.
${T(range(0, 5), range(0, 5).map(poly(1, -3, 4)), { blankY: [3] })}`, ws: "2.2cm" },
    { ask: r`The graph of $y=x^2-6x+7$ is shown. Which of $A(1,2)$, $B(2,-1)$, $C(4,-2)$, $D(5,3)$ lie on the graph? Correct the $y$-value of any point that does not.
${G({ fn: "x^2-6*x+7", dom: [0, 6], bounds: [0, 6, -3, 8], on: [[1, 2], [2, -1]], off: [[4, -2], [5, 3]], xt: 1, yt: 1 })}`, ws: "2.2cm" },
    { ask: r`Find the equation $y=ax^2+bx+c$ of the relation.
${T(range(0, 3), range(0, 3).map(poly(3, -2, 1)))}`, ws: "2.8cm" },
    { ask: r`Use the table to find $a$, say whether the parabola opens up or down, and give the vertex.
${T(range(0, 6), range(0, 6).map(poly(-1, 6, -4)))}`, ws: "2.8cm" },
    { ask: r`The $x$-values go up by $2$. Find the equation $y=ax^2+bx+c$.
${T(range(0, 6, 2), range(0, 6, 2).map(poly(1, 0, 1)))}`, ws: "3.0cm" },
    { ask: r`Read the points from the graph of $y=-x^2+2x+3$, complete the table and its differences, and state $a$.
${G({ opens: "down", fn: "-x^2+2*x+3", dom: [-1.4, 3.4], bounds: [-2, 4, -1, 5], on: [[-1, 0], [0, 3], [1, 4], [2, 3], [3, 0]], xt: 1, yt: 1, label: false })}
${T(range(-1, 3), range(-1, 3).map(poly(-1, 2, 3)), { blank: true, blankY: [0, 1, 2, 3, 4] })}`, ws: "1.2cm" },
    { ask: r`For $f(x)=x^2-5x+4$, find $f(-1)$ and $f(6)$. Is $(3,-2)$ on the graph of $f$? Show your substitution.`, ws: "2.6cm" },
    { ask: r`A ball's height is $h=-5t^2+30t$ (metres). Complete the table, find $a$ from the differences, the maximum height, and the time the ball is in the air.
${T(range(0, 6), range(0, 6).map(poly(-5, 30, 0)), { name: "h", blank: true, blankY: [0, 1, 2, 3, 4, 5, 6] })}`, ws: "2.4cm" },
    { ask: r`One value in this table is wrong. Find it and correct it.
${T(range(0, 4), [1, 4, 9, 17, 25])}`, ws: "2.2cm" },
    { ask: r`Show that for $y=ax^2+bx+c$ and $x=0,1,2$, the second difference is $2a$.`, ws: "3.2cm" },
    { ask: r`A quadratic relation passes through $(0,-5)$, $(1,-2)$ and $(2,5)$. Find $y$ when $x=10$, and say whether $(3,16)$ is on the graph.`, ws: "3.4cm", challenge: true },
  ],
  answers: [
    r`A: 1st $3,5,7,9$; 2nd $2,2,2$ --- quadratic. B: 1st $4,4,4,4$ --- linear.`,
    r`$y$: $5,-1,-3,-1,5$; 1st: $-6,-2,2,6$; 2nd: $4,4,4$ (so $a=2$).`,
    r`$y$-values $4,2,2,?,8,14$; 1st differences $-2,0,2,4,6$: the missing value is $2+2=4$.`,
    r`$A$ and $B$ are on the graph. $y(4)=-1$, so $C$ should be $(4,-1)$; $y(5)=2$, so $D$ should be $(5,2)$.`,
    r`2nd difference $6$, so $a=3$; $c=1$; at $x=1$: $3+b+1=2$, so $b=-2$. $y=3x^2-2x+1$.`,
    r`2nd difference $-2$, so $a=-1$ (opens down). Vertex $(3,5)$.`,
    r`2nd difference $8=2a(2)^2$, so $a=1$; $c=1$; at $x=2$: $4+2b+1=5$, so $b=0$. $y=x^2+1$.`,
    r`Table $y$: $0,3,4,3,0$; 1st: $3,1,-1,-3$; 2nd: $-2,-2,-2$; $a=-1$.`,
    r`$f(-1)=1+5+4=10$; $f(6)=36-30+4=10$; $f(3)=9-15+4=-2$, so $(3,-2)$ \textbf{is} on the graph.`,
    r`$h$: $0,25,40,45,40,25,0$; 2nd difference $-10$, so $a=-5$; maximum $45$ m at $t=3$ s; in the air $6$ s.`,
    r`2nd differences $2,3,0$ are not constant. The value $17$ should be $16$ (then 1st differences $3,5,7,9$).`,
    r`$y(0)=c$, $y(1)=a+b+c$, $y(2)=4a+2b+c$. 1st: $a+b$ and $3a+b$. 2nd: $(3a+b)-(a+b)=2a$.`,
    r`2nd difference $4$, so $a=2$; $c=-5$; $2+b-5=-2$ gives $b=1$. $y=2x^2+x-5$; $y(10)=205$. At $x=3$: $18+3-5=16$, so $(3,16)$ is on the graph.`,
  ],
};

export const LEARN41 = [
  ["Difference tables", String.raw`Subtract neighbouring $y$-values to get the \textbf{1st differences}, and subtract again for the \textbf{2nd differences}. Linear relations have constant 1st differences; \textbf{quadratic} relations have constant 2nd differences.`],
  ["From a table to the equation", String.raw`With equal $x$-steps of size $h$, the 2nd difference is $2ah^2$ (just $2a$ when $h=1$). Then $c=y(0)$, and one more point gives $b$. Check with a point you did not use.`],
  ["Check the point on the graph", String.raw`A point is on the graph exactly when substituting its $x$-value gives its $y$-value. Every table row is a point on the graph, so a row that sits off the curve is a wrong value.`],
];
