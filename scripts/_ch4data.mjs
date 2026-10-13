// Higher-than-HTML content for MTH1W chapter 4 PDF worksheets (Tectonic theme).
const R = String.raw;
const GRID = (x=6,y=6) => R`\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,grid=both,grid style={gray!16},xmin=-${x},xmax=${x},ymin=-${y},ymax=${y},xtick distance=2,ytick distance=2,tick label style={font=\tiny}]\end{axis}\end{tikzpicture}\end{center}`;

export const TOPICS = [
// ===================== 4.1 =====================
{
  code:"4.1", title:"Relations", unit:"Unit 4: Linear Relations",
  bigideas:R`A \textbf{relation} describes how two quantities change together, and it can be shown four ways --- in \textbf{words}, a \textbf{table of values}, a \textbf{graph}, and an \textbf{equation}. The input you choose is the \textbf{independent} variable (horizontal axis); the output that responds is the \textbf{dependent} variable (vertical axis).`,
  concepts:[
    ["Independent vs dependent",R`Ask which one depends on the other? The independent variable is the input (left column of a table, horizontal axis); the dependent variable is the calculated output (right column, vertical axis).`],
    ["Discrete or continuous",R`If only separate, countable inputs make sense (people, tickets, laps), the relation is \textbf{discrete} --- plot points. If every in-between value is possible (time, distance, mass), it is \textbf{continuous} --- draw a line.`],
  ],
  examples:[
    ["Name the variables",R`A phone's battery level drops the longer you stream video. Which quantity is independent and which is dependent?`,R`You control the streaming \emph{time}, so \textbf{time} is independent; the \textbf{battery level} responds, so it is dependent.`],
    ["Words to a table (with a base fee)",R`A gym charges a \$20 membership plus \$5 per class. Build a table of total cost for $n:0,1,2,3,4$ classes.`,R`Cost $=5n+20$:
\begin{center}
\begin{tabular}{c|ccccc}
Classes $n$ & 0 & 1 & 2 & 3 & 4\\ \hline
Cost (\$) & 20 & 25 & 30 & 35 & 40
\end{tabular}
\end{center}`],
    ["Table to a graph (discrete)",R`A tricycle has $3$ wheels. Plot the relation for $1,2,3,4$ tricycles and decide discrete or continuous.`,R`Points $(1,3),(2,6),(3,9),(4,12)$; you cannot have part of a tricycle, so the relation is \textbf{discrete} --- plot separate points.
\plot{-0.5}{5}{-1}{14}{\addplot[only marks,mark=*,ex2,mark size=2pt]coordinates{(1,3)(2,6)(3,9)(4,12)};}`],
    ["Words to an equation (continuous)",R`A car starts a trip with $60$ L of fuel and uses $0.08$ L per km. Write $V$ vs distance $d$; is the relation continuous?`,R`$V=60-0.08d$. Distance can take any value, so the relation is \textbf{continuous} (a solid line).`],
    ["Reading a table --- find the rule",R`A table shows $x:0,1,2,3$, $y:7,10,13,16$. Find the starting value, the rate of change, and the equation.`,R`At $x=0$, $y=7$ (start); the output rises $3$ each step (rate $3$); so $y=3x+7$.`],
    ["Equation to a table",R`For $y=-2x+5$, complete a table for $x:0,1,2,3$.`,R`Substitute each input:
\begin{center}
\begin{tabular}{c|cccc}
$x$ & 0 & 1 & 2 & 3\\ \hline
$y=-2x+5$ & 5 & 3 & 1 & $-1$
\end{tabular}
\end{center}`],
    ["Verify a point",R`Does the point $(7,22)$ lie on the relation $y=3x+1$?`,R`Substitute: $3(7)+1=22$. It matches, so \textbf{yes}, the point is on the relation.`],
    ["Which axis?",R`You graph litres of water used vs.\ number of showers. Which variable goes on each axis?`,R`The number of showers (the input you choose) goes on the horizontal axis; litres of water (the output) goes on the vertical axis.`],
    ["Classify each relation",R`Classify as discrete or continuous: (a) the mass of sugar poured from a bag; (b) the number of players on a field.`,R`(a) mass changes smoothly $\Rightarrow$ \textbf{continuous}; (b) whole players only $\Rightarrow$ \textbf{discrete}.`],
  ],
  problems:[
    ["Problem 1",R`The amount a spring stretches depends on the mass hung on it. Name the independent and dependent variables.`,4.0],
    ["Problem 2",R`A taxi charges \$4 plus \$2 per km. Make a table of cost for $d=0,1,2,3$ km.`,4.6],
    ["Problem 3",R`Is the number of houses on a street discrete or continuous? Explain.`,4.0],
    ["Problem 4",R`Is the height of a growing sunflower over several days discrete or continuous? Explain.`,4.0],
    ["Problem 5",R`A candle $30$ cm tall burns $2.5$ cm per hour. Write an equation for its height $h$ after $t$ hours.`,4.4],
    ["Problem 6",R`For $y=4x-3$, complete a table for $x=0,1,2,3$.`,4.6],
    ["Problem 7",R`A table has $x:0,1,2,3\to y:2,7,12,17$. Find the rate of change and the equation.`,4.6],
    ["Problem 8",R`Does the point $(4,15)$ lie on $y=3x+2$? Show your check.`,4.2],
    ["Problem 9",R`Plot $(-1,-1),(0,1),(1,3),(2,5)$ and find the equation of the line through them.`,GRID(6,6)],
    ["Problem 10",R`A tank holds $80$ L and drains $8$ L per minute. Write $V$ vs time $t$ and find when the tank is empty.`,4.8],
    ["Problem 11",R`For earnings vs hours worked at \$16/h: name the variables, say which axis each uses, and write the equation.`,4.8],
    ["Problem 12",R`Which needs separate points: (a) the number of buses for a trip, or (b) the distance a cyclist rides? Explain each.`,4.6],
    ["Problem 13 --- Challenge",R`A relation is start at $100$ and subtract $15$ each step. Write the equation for step $n$ (from $n=0$), make a table for $n=0,1,2,3$, and state whether it is discrete or continuous.`,5.4],
  ],
  answers:[
    R`Independent $=$ mass; dependent $=$ stretch.`,
    R`$C=2d+4$: $4,\,6,\,8,\,10$.`,
    R`Discrete --- you can only have a whole number of houses.`,
    R`Continuous --- height changes smoothly over time.`,
    R`$h=30-2.5t$.`,
    R`$-3,\,1,\,5,\,9$.`,
    R`Rate $5$; $y=5x+2$.`,
    R`$3(4)+2=14\neq15$, so no --- the point is not on the line.`,
    R`Linear: $y=2x+1$.`,
    R`$V=80-8t$; empty when $t=10$ min.`,
    R`Hours independent (horizontal), earnings dependent (vertical); $E=16h$.`,
    R`(a) discrete (separate points); (b) continuous (solid line).`,
    R`$y=100-15n$; table $100,\,85,\,70,\,55$; discrete (the step number is a whole number).`,
  ],
},

// ===================== 4.2 =====================
{
  code:"4.2", title:"Linear vs Non-Linear Relations", unit:"Unit 4: Linear Relations",
  bigideas:R`The surest way to classify a relation from its \textbf{table of values} is with \textbf{first and second differences}. Make sure $x$ steps up evenly, then: \textbf{constant first differences} $\Rightarrow$ \textbf{linear}; if not, \textbf{constant second differences} $\Rightarrow$ \textbf{quadratic} (non-linear); if neither is constant $\Rightarrow$ \textbf{neither}. The equation's degree and the graph's shape confirm the same answer.`,
  concepts:[
    ["First differences --- the linear test",R`Subtract consecutive $y$-values. If they are constant, the relation is \textbf{linear} and that constant, divided by the $x$-step, is the rate of change (slope).`],
    ["Second differences --- the quadratic test",R`If the first differences vary, difference them again. Constant \emph{second} differences $\Rightarrow$ \textbf{quadratic}. Cross-check: a degree-1 equation and a straight-line graph are linear; an $x^2$ term and a curved graph are quadratic/non-linear.`],
  ],
  examples:[
    ["Context: constant first differences",R`A skydiver's altitude (m) each second is $x:0,1,2,3,4$ with $y:1200,1140,1080,1020,960$. Classify the relation and give the rate of change with units.`,R`The first differences are constant, so it is \textbf{linear}; rate $-60$ m/s (falling).
\begin{center}
\begin{tabular}{c|c|c}
$x$ & $y$ & 1st diff\\ \hline
0 & 1200 & ---\\
1 & 1140 & $-60$\\
2 & 1080 & $-60$\\
3 & 1020 & $-60$\\
4 & 960 & $-60$\\
\end{tabular}
\end{center}`],
    ["Constant second differences",R`Classify the table below.`,R`First differences change, but the second differences are all $+2$ $\Rightarrow$ \textbf{quadratic}, $y=x^2+2x+3$.
\begin{center}
\begin{tabular}{c|c|c|c}
$x$ & $y$ & 1st diff & 2nd diff\\ \hline
0 & 3 & --- & ---\\
1 & 6 & $+3$ & ---\\
2 & 11 & $+5$ & $+2$\\
3 & 18 & $+7$ & $+2$\\
4 & 27 & $+9$ & $+2$\\
5 & 38 & $+11$ & $+2$\\
\end{tabular}
\end{center}`],
    ["Neither (a geometric pattern)",R`Classify $x:0,1,2,3$, $y:1,3,9,27$.`,R`Both the first differences $2,6,18$ and the second differences $4,12$ are non-constant $\Rightarrow$ \textbf{neither} (each $y$ triples).
\begin{center}
\begin{tabular}{c|c|c|c}
$x$ & $y$ & 1st diff & 2nd diff\\ \hline
0 & 1 & --- & ---\\
1 & 3 & $+2$ & ---\\
2 & 9 & $+6$ & $+4$\\
3 & 27 & $+18$ & $+12$\\
\end{tabular}
\end{center}`],
    ["Even $x$-steps with a negative rate",R`Classify $x:2,5,8,11$, $y:7,4,1,-2$ (note $x$ steps by $3$).`,R`First differences $-3,-3,-3$ are constant $\Rightarrow$ \textbf{linear}; rate $\frac{-3}{3}=-1$.
\begin{center}
\begin{tabular}{c|c|c}
$x$ & $y$ & 1st diff\\ \hline
2 & 7 & ---\\
5 & 4 & $-3$\\
8 & 1 & $-3$\\
11 & $-2$ & $-3$\\
\end{tabular}
\end{center}`],
    ["Find the missing value (linear)",R`$x:0,1,2,3$, $y:4,7,\ ?\ ,13$ is linear. Find the missing $y$.`,R`Linear means the first difference is constant $(+3)$, so the missing value is $7+3=10$.
\begin{center}
\begin{tabular}{c|c|c}
$x$ & $y$ & 1st diff\\ \hline
0 & 4 & ---\\
1 & 7 & $+3$\\
2 & \textbf{10} & $+3$\\
3 & 13 & $+3$\\
\end{tabular}
\end{center}`],
    ["Find the missing value (quadratic)",R`$x:0,1,2,3$, $y:1,3,7,\ ?$ has constant second differences. Find the next $y$.`,R`The second difference is $2$, so the first differences run $2,4,6$: the next value is $7+6=13$.
\begin{center}
\begin{tabular}{c|c|c|c}
$x$ & $y$ & 1st diff & 2nd diff\\ \hline
0 & 1 & --- & ---\\
1 & 3 & $+2$ & ---\\
2 & 7 & $+4$ & $+2$\\
3 & \textbf{13} & $+6$ & $+2$\\
\end{tabular}
\end{center}`],
    ["A cubic is neither",R`Is $y=x^3$ linear, quadratic, or neither? Look at its differences over $x:0,1,2,3$.`,R`The first differences $1,7,19$ and second differences $6,12$ are not constant, so it is \textbf{neither} (the \emph{third} differences are constant).
\begin{center}
\begin{tabular}{c|c|c|c}
$x$ & $y$ & 1st diff & 2nd diff\\ \hline
0 & 0 & --- & ---\\
1 & 1 & $+1$ & ---\\
2 & 8 & $+7$ & $+6$\\
3 & 27 & $+19$ & $+12$\\
\end{tabular}
\end{center}`],
    ["Context: differences to an equation",R`A car rental costs a flat \$25 plus \$45 per day. Build the table, then write the equation and find the cost for $6$ days.`,R`The constant first difference $45$ means linear, and $\$25$ at $x=0$ is the start: $C=45x+25$. At $x=6$: $C=\$295$.
\begin{center}
\begin{tabular}{c|c|c}
Days $x$ & Cost $C$ & 1st diff\\ \hline
0 & 25 & ---\\
1 & 70 & $+45$\\
2 & 115 & $+45$\\
3 & 160 & $+45$\\
\end{tabular}
\end{center}`],
    ["Challenge --- recover $a$ from the second difference",R`For $y=ax^2$ the second differences all equal $2a$. A table of $y=ax^2$ (through the origin) has second differences all $8$. Find $a$ and the equation.`,R`$2a=8\Rightarrow a=4$, so $y=4x^2$; the table confirms the constant second difference of $8$.
\begin{center}
\begin{tabular}{c|c|c|c}
$x$ & $y$ & 1st diff & 2nd diff\\ \hline
0 & 0 & --- & ---\\
1 & 4 & $+4$ & ---\\
2 & 16 & $+12$ & $+8$\\
3 & 36 & $+20$ & $+8$\\
\end{tabular}
\end{center}`],
  ],
  problems:[
    ["Problem 1",R`Classify $x:0,1,2,3\to y:1,5,9,13$ using first differences; give the rate if linear.`,4.4],
    ["Problem 2",R`Use first and second differences to classify $x:0,1,2,3,4\to y:3,4,7,12,19$.`,4.8],
    ["Problem 3",R`Classify $x:0,1,2,3\to y:2,6,18,54$.`,4.2],
    ["Problem 4",R`$x:0,3,6,9\to y:1,7,13,19$ (even step $3$). Linear? Give the rate of change.`,4.4],
    ["Problem 5",R`Build the first-difference column for $x:0,1,2,3,4\to y:5,8,11,14,17$ and classify.`,4.6],
    ["Problem 6",R`Use second differences to classify $x:0,1,2,3\to y:0,1,4,9$.`,4.6],
    ["Problem 7",R`A linear table has constant first difference $5$ and $y=-1$ at $x=0$. Write the equation.`,4.4],
    ["Problem 8",R`Find the missing value: $x:0,1,2,3\to y:2,\ ?\ ,14,20$ is linear.`,4.2],
    ["Problem 9",R`Classify $x:0,1,2,3,4\to y:16,12,8,4,0$ and give the rate of change.`,4.4],
    ["Problem 10",R`The second differences of a relation are all $0$. Is it linear or quadratic? Explain.`,4.2],
    ["Problem 11",R`Make a difference table for $y=x^2+2x$ over $x:0,1,2,3$ and classify it.`,4.8],
    ["Problem 12",R`Is $y=\dfrac{12}{x}$ linear, quadratic, or neither? Explain.`,4.2],
    ["Problem 13 --- Challenge",R`A quadratic relation has $y$-values $2,5,10,17,26$. Use differences to find the next two values.`,5.4],
  ],
  answers:[
    R`First diffs $4,4,4$ $\Rightarrow$ linear, rate $4$ ($y=4x+1$).`,
    R`First diffs $1,3,5,7$; second diffs $2,2,2$ $\Rightarrow$ quadratic.`,
    R`First diffs $4,12,36$; second diffs vary $\Rightarrow$ neither ($\times3$ each step).`,
    R`First diffs $6,6,6$ $\Rightarrow$ linear, rate $\frac{6}{3}=2$.`,
    R`First diffs $3,3,3,3$ $\Rightarrow$ linear ($y=3x+5$).`,
    R`First diffs $1,3,5$; second diffs $2,2$ $\Rightarrow$ quadratic.`,
    R`$y=5x-1$.`,
    R`Missing value $8$ (constant first difference $6$).`,
    R`First diffs $-4$ each $\Rightarrow$ linear, rate $-4$.`,
    R`Linear --- zero second differences mean the first differences are already constant.`,
    R`$y:0,3,8,15$; first diffs $3,5,7$; second diffs $2,2$ $\Rightarrow$ quadratic.`,
    R`Neither --- $x$ in the denominator (a curve).`,
    R`First diffs $3,5,7,9$; second diff $2$; next first diffs $11,13$: values $37$ and $50$.`,
  ],
},
// ===================== 4.3 =====================
{
  code:"4.3", title:"Representing Linear and Non-Linear Relations", unit:"Unit 4: Linear Relations",
  bigideas:R`Every linear relation is captured by $y=mx+b$: $m$ is the \textbf{slope} (rate of change $=\frac{\Delta y}{\Delta x}=\frac{\text{rise}}{\text{run}}$) and $b$ is the \textbf{$y$-intercept} (the output when $x=0$). Words, tables, graphs, and this equation are interchangeable --- fluency means moving between them quickly, even with fractions and real contexts. A \textbf{non-linear} relation (e.g.\ a quadratic like $y=x^2$) is represented the same four ways, but its table has \textbf{non-constant} differences and its graph is a \textbf{curve}, not a straight line.`,
  concepts:[
    ["Slope from two points",R`$m=\dfrac{y_2-y_1}{x_2-x_1}$. Then find $b$ by substituting one point into $y=mx+b$.`],
    ["Meaning in context",R`In an application, the slope is a \emph{rate} (with units, e.g.\ dollars per km) and the intercept is a \emph{starting value} (a flat fee, an initial amount).`],
  ],
  examples:[
    ["From two points",R`Find the equation of the line through $(2,3)$ and $(6,11)$.`,R`Label the points $(x_1,y_1)=(2,3)$ and $(x_2,y_2)=(6,11)$. The slope is the change in $y$ over the change in $x$: $m=\dfrac{y_2-y_1}{x_2-x_1}=\dfrac{11-3}{6-2}=\dfrac{8}{4}=2$. Now use the slope-intercept form $y=mx+b$ and substitute $m=2$ with one point, say $(2,3)$: $3=2(2)+b$, so $b=3-4=-1$. Therefore $\boxed{y=2x-1}$.`],
    ["Fractional slope",R`Find the equation of the line through $(0,4)$ and $(3,2)$.`,R`Label $(x_1,y_1)=(0,4)$ and $(x_2,y_2)=(3,2)$. The slope is $m=\dfrac{y_2-y_1}{x_2-x_1}=\dfrac{2-4}{3-0}=\dfrac{-2}{3}=-\dfrac{2}{3}$. Because $(0,4)$ has $x=0$, it \emph{is} the $y$-intercept, so $b=4$ with no extra work. Therefore $\boxed{y=-\tfrac{2}{3}x+4}$.`],
    ["Application: a fixed fee plus a rate",R`A print shop charges \$40 setup plus \$3 per booklet. Write the cost $C$ for $n$ booklets, then find the cost of $25$ booklets.`,R`Split the cost into its fixed part and its changing part. The \$40 setup does not depend on how many booklets you print, so it is the constant term (the $y$-intercept, $b=40$). The \$3 per booklet is the rate of change (the slope, $m=3$). In the form $C=mn+b$ this gives $C=3n+40$. For $n=25$: $C=3(25)+40=75+40=\$115$.`],
    ["From a table of values",R`The table $x:0,2,4,6$, $y:1,7,13,19$ is linear. Find its equation.`,R`In a table the slope is the change in $y$ divided by the matching change in $x$. From $x=0$ to $x=2$, $y$ rises from $1$ to $7$: $m=\dfrac{\Delta y}{\Delta x}=\dfrac{7-1}{2-0}=\dfrac{6}{2}=3$ (and every step gives $3$, confirming it is linear). The $y$-value when $x=0$ is the $y$-intercept, so $b=1$. Therefore $\boxed{y=3x+1}$.`],
    ["Representing a non-linear relation",R`The table $x:-2,-1,0,1,2$, $y:4,1,0,1,4$ represents a relation. Graph it and give its equation.`,R`Plotting the five points shows a symmetric curve that dips down to $(0,0)$ and rises back up on both sides --- a \textbf{parabola}, not a straight line, so the relation is \textbf{non-linear}. Checking the pattern, each $y$-value equals the square of its $x$-value: $y=x^2$.`],
    ["Both intercepts",R`Find the $x$- and $y$-intercepts of $y=2x-8$.`,R`An intercept is where the line meets an axis. The \textbf{$y$-intercept} is where $x=0$: $y=2(0)-8=-8$, giving the point $(0,-8)$. The \textbf{$x$-intercept} is where $y=0$: set $0=2x-8$, so $2x=8$ and $x=4$, giving the point $(4,0)$.`],
    ["Reading a line off a graph",R`A line passes through $(-2,0)$ and $(0,3)$. Find its equation.`,R`Read two points off the graph and label them $(x_1,y_1)=(-2,0)$ and $(x_2,y_2)=(0,3)$. The slope is $m=\dfrac{y_2-y_1}{x_2-x_1}=\dfrac{3-0}{0-(-2)}=\dfrac{3}{2}$. The point $(0,3)$ sits on the $y$-axis, so it is the $y$-intercept: $b=3$. Therefore $\boxed{y=\tfrac{3}{2}x+3}$.`],
    ["Interpreting a model",R`A plant's height follows $h=1.5x+10$ (cm, where $x$ is weeks). Explain $1.5$ and $10$, find the height at week $6$, and find when it is $25$ cm.`,R`Compare $h=1.5x+10$ with $y=mx+b$. The slope $m=1.5$ is the \textbf{rate of change}: the plant grows $1.5$ cm each week. The constant $b=10$ is the \textbf{starting value}: it was $10$ cm tall at week $0$. For week $6$, substitute $x=6$: $h=1.5(6)+10=9+10=19$ cm. To find when $h=25$, set $25=1.5x+10$, so $1.5x=15$ and $x=10$ weeks.`],
    ["Representing a non-linear context",R`A ball is thrown and its height follows $h=-5t^2+20t$ (m, $t$ in seconds). Make a table for $t=0,1,2,3,4$ and describe the shape of the graph.`,R`Substitute each $t$: $h(0)=0$, $h(1)=15$, $h(2)=20$, $h(3)=15$, $h(4)=0$. The height rises then falls back to $0$, tracing a \textbf{curve} (a parabola), not a straight line --- because $t$ is squared, the relation is \textbf{non-linear}.
\begin{center}
\begin{tabular}{c|ccccc}
$t$ & 0 & 1 & 2 & 3 & 4\\ \hline
$h$ & 0 & 15 & 20 & 15 & 0
\end{tabular}
\end{center}`],
  ],
  problems:[
    ["Problem 1",R`Find the equation of the line through $(1,2)$ and $(4,11)$.`,4.4],
    ["Problem 2",R`Line through $(0,-3)$ and $(2,1)$: give $y=mx+b$.`,4.4],
    ["Problem 3",R`A gym charges \$25 to join plus \$12/visit. Write $C$ vs visits $v$; find $C$ for $9$ visits.`,4.4],
    ["Problem 4",R`$x:0,3,6,9\to y:2,8,14,20$. Find the equation.`,4.2],
    ["Problem 5",R`Make a table for $y=x^2-3$ using $x=-2,-1,0,1,2$, then state whether the relation is linear or non-linear.`,4.4],
    ["Problem 6",R`Find both intercepts of $y=-\tfrac{1}{2}x+4$.`,4.2],
    ["Problem 7",R`A line passes through $(-3,0)$ and $(0,6)$. Find its equation.`,4.2],
    ["Problem 8",R`A candle model is $h=-2t+18$. Interpret both numbers and find when $h=0$.`,4.4],
    ["Problem 9",R`Plot $y=\tfrac{2}{3}x-2$ using its intercepts.`,GRID(8,6)],
    ["Problem 10",R`Line through $(1,-1)$ and $(5,7)$: equation and $y$-intercept.`,4.4],
    ["Problem 11",R`A pool fills so that $V=15t+40$ (L). Meaning of $15$ and $40$? Volume at $t=6$ min?`,4.4],
    ["Problem 12",R`A ball's height follows $h=-5t^2+15t$. Find $h$ at $t=1$ and $t=2$, and state whether height vs.\ time is linear.`,4.0],
    ["Problem 13 --- Challenge",R`A line crosses the $x$-axis at $(6,0)$ and the $y$-axis at $(0,-4)$. Find its equation.`,5.0],
  ],
  answers:[
    R`$y=3x-1$.`, R`$y=2x-3$.`, R`$C=12v+25$; \$133.`, R`$y=2x+2$.`,
    R`$y:1,-2,-3,-2,1$; non-linear (a curve, not constant differences).`, R`$x$-int $(8,0)$, $y$-int $(0,4)$.`,
    R`$y=2x+6$.`, R`Start $18$, drop $2$/unit; $h=0$ at $t=9$.`, R`Intercepts $(3,0),(0,-2)$; straight line.`,
    R`$y=2x-3$; $y$-int $(0,-3)$.`, R`Rate $15$ L/min, start $40$ L; $V=130$ L.`, R`$h(1)=10$, $h(2)=10$; non-linear ($t$ is squared).`,
    R`$m=\tfrac{2}{3}$, $b=-4$: $y=\tfrac{2}{3}x-4$.`,
  ],
},
// ===================== 4.4 =====================
{
  code:"4.4", title:"Comparing Lines", unit:"Unit 4: Linear Relations",
  bigideas:R`Comparing two linear relations means comparing their \textbf{slopes} (rates/steepness) and \textbf{intercepts} (starting values), and finding where they \textbf{intersect}. In context the intersection is a \emph{break-even} or \emph{catch-up} point: solve the two equations equal to each other.`,
  concepts:[
    ["Steeper and parallel",R`The larger $|m|$ is, the steeper the line. Equal slopes ($m_1=m_2$) with different intercepts never meet --- they are parallel.`],
    ["Intersection = solve",R`Set the expressions equal: $m_1x+b_1=m_2x+b_2$, solve for $x$, then back-substitute for $y$.`],
  ],
  examples:[
    ["Break-even",R`Plan A: $C=0.10t+20$; Plan B: $C=0.15t+10$. When are they equal, and who is cheaper for few texts?`,R`Two plans cost the same when $C_A=C_B$, so set the expressions equal: $0.10t+20=0.15t+10$. Subtract $0.10t$ from both sides: $20=0.05t+10$. Subtract $10$: $10=0.05t$, so $t=\dfrac{10}{0.05}=200$ texts. To see who is cheaper for few texts, check $t=0$: Plan A costs \$20, Plan B costs \$10 --- so \textbf{Plan B} is cheaper below $200$ texts.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$t$},ylabel={\scriptsize$C$},grid=both,grid style={gray!16},xmin=0,xmax=250,ymin=0,ymax=40,xtick distance=50,ytick distance=10,tick label style={font=\tiny},axis line style={-}]\addplot[domain=0:250,samples=2,ex0,thick]{0.10*x+20};\addplot[domain=0:250,samples=2,ex3,thick]{0.15*x+10};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(200,30)};\end{axis}\end{tikzpicture}\end{center}`],
    ["Order by steepness",R`Order from steepest to flattest: $y=\tfrac34x+2$, $\ y=-2x$, $\ y=\tfrac52x-1$.`,R`Steepness is measured by the \emph{size} of the slope, $|m|$ --- the larger $|m|$, the steeper the line, regardless of sign. The slopes have sizes $\tfrac34=0.75$, $\ |-2|=2$, and $\tfrac52=2.5$. Ordering largest to smallest: $2.5>2>0.75$. Steepest $\to$ flattest: $y=\tfrac52x-1$, then $y=-2x$, then $y=\tfrac34x+2$.
\plot{-3}{3}{-9}{7}{\addplot[domain=-3:3,samples=2,ex1,thick]{0.75*x+2};\addplot[domain=-3:3,samples=2,ex3,thick]{-2*x};\addplot[domain=-3:3,samples=2,ex0,thick]{2.5*x-1};}`],
    ["Parallel?",R`Are $y=2x+3$ and $4x-2y=1$ parallel?`,R`Parallel lines have \textbf{equal slopes}, so first write both in $y=mx+b$ form. The first is already $y=2x+3$ (slope $2$). For the second, $4x-2y=1$: isolate $y$, giving $-2y=-4x+1$, so $y=2x-\tfrac12$ (slope $2$). The slopes are both $2$ and the intercepts differ, so the lines are \textbf{parallel}.
\plot{-3}{2}{-7}{8}{\addplot[domain=-3:2,samples=2,ex0,thick]{2*x+3};\addplot[domain=-3:2,samples=2,ex3,thick]{2*x-0.5};}`],
    ["Intersection",R`Where do $y=x+1$ and $y=-2x+7$ meet?`,R`The intersection is the point that satisfies both equations, so set the right sides equal: $x+1=-2x+7$. Add $2x$ to both sides: $3x+1=7$; subtract $1$: $3x=6$; so $x=2$. Substitute back into either equation: $y=2+1=3$. They meet at $(2,3)$.
\plot{-1}{4}{-1}{9}{\addplot[domain=-1:4,samples=2,ex0,thick]{x+1};\addplot[domain=-1:4,samples=2,ex3,thick]{-2*x+7};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(2,3)};}`],
    ["Two runners",R`$A:\,d=6t$, $B:\,d=4t+10$. Who starts ahead? When does $A$ catch up?`,R`Each equation gives distance as a function of time. At $t=0$: $A$ is at $d=6(0)=0$ and $B$ is at $d=4(0)+10=10$, so \textbf{$B$ starts $10$ m ahead}. $A$ catches up when the distances are equal: $6t=4t+10$; subtract $4t$: $2t=10$; so $t=5$ s. At that moment $d=6(5)=30$ m.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$t$},ylabel={\scriptsize$d$},grid=both,grid style={gray!16},xmin=0,xmax=7,ymin=0,ymax=45,xtick distance=1,ytick distance=10,tick label style={font=\tiny},axis line style={-}]\addplot[domain=0:7,samples=2,ex0,thick]{6*x};\addplot[domain=0:7,samples=2,ex3,thick]{4*x+10};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(5,30)};\end{axis}\end{tikzpicture}\end{center}`],
    ["Intersection with fractions",R`Where do $y=\tfrac32x-4$ and $y=-x+6$ meet?`,R`Set the right sides equal: $\tfrac32x-4=-x+6$. Add $x$ to both sides: $\tfrac52x-4=6$; add $4$: $\tfrac52x=10$; multiply both sides by $\tfrac25$: $x=4$. Substitute back: $y=-4+6=2$. They meet at $(4,2)$.
\plot{-1}{6}{-6}{8}{\addplot[domain=-1:6,samples=2,ex0,thick]{1.5*x-4};\addplot[domain=-1:6,samples=2,ex3,thick]{-x+6};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(4,2)};}`],
    ["Application --- which is ahead?",R`Savings plans (dollars after $t$ weeks): $A:\,25t+50$ and $B:\,40t+20$. Which has more after $3$ weeks, and when are they equal?`,R`Evaluate each plan at $t=3$: Plan A $=25(3)+50=75+50=\$125$; Plan B $=40(3)+20=120+20=\$140$. So \textbf{$B$ has more} after $3$ weeks. They are equal when $25t+50=40t+20$: subtract $25t$: $50=15t+20$; subtract $20$: $30=15t$; so $t=2$ weeks.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$t$},ylabel={\scriptsize\$},grid=both,grid style={gray!16},xmin=0,xmax=4,ymin=0,ymax=200,xtick distance=1,ytick distance=50,tick label style={font=\tiny},axis line style={-}]\addplot[domain=0:4,samples=2,ex0,thick]{25*x+50};\addplot[domain=0:4,samples=2,ex3,thick]{40*x+20};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(2,100)};\end{axis}\end{tikzpicture}\end{center}`],
    ["Graph and read",R`Graph $y=x-2$ and $y=-x+4$; state the intersection.`,R`To find where the graphs cross, set the expressions equal: $x-2=-x+4$. Add $x$: $2x-2=4$; add $2$: $2x=6$; so $x=3$, and $y=3-2=1$. Plotting each line from its intercept and slope confirms they cross at $(3,1)$.
\plot{-1}{5}{-3}{5}{\addplot[domain=-1:5,samples=2,ex0,thick]{x-2};\addplot[domain=-1:5,samples=2,ex3,thick]{-x+4};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(3,1)};}`],
    ["Challenge",R`For what $m$ does $y=mx+2$ pass through the intersection of $y=2x-1$ and $y=-x+5$?`,R`First locate the fixed intersection of the two given lines: $2x-1=-x+5$, so $3x=6$ and $x=2$, giving $y=2(2)-1=3$; the point is $(2,3)$. For $y=mx+2$ to pass through $(2,3)$, substitute the point: $3=m(2)+2$, so $2m=1$ and $m=\tfrac12$.
\plot{-1}{4}{-3}{7}{\addplot[domain=-1:4,samples=2,ex0,thick]{2*x-1};\addplot[domain=-1:4,samples=2,ex3,thick]{-x+5};\addplot[domain=-1:4,samples=2,ex1,thick]{0.5*x+2};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(2,3)};}`],
  ],
  problems:[
    ["Problem 1",R`Plan A: $C=0.20t+15$; Plan B: $C=0.30t+9$. Find the break-even number of texts.`,4.4],
    ["Problem 2",R`Which is steeper: $y=-5x+1$ or $y=4x-2$? Explain.`,4.0],
    ["Problem 3",R`Are $y=3x-2$ and $6x-2y=7$ parallel? Justify.`,4.2],
    ["Problem 4",R`Find the intersection of $y=2x-3$ and $y=-x+6$.`,4.6],
    ["Problem 5",R`Runner $A:\,d=8t$; Runner $B:\,d=5t+12$. When does $A$ catch $B$, and where?`,4.6],
    ["Problem 6",R`Two lines share the $y$-intercept $(0,-2)$ with slopes $3$ and $-1$. Where do they meet?`,4.0],
    ["Problem 7",R`At $x=4$, which is greater: $y=3x-2$ or $y=x+7$?`,4.0],
    ["Problem 8",R`Job A pays \$40 + \$15/h; Job B pays \$25/h. After how many hours do they pay the same?`,4.6],
    ["Problem 9",R`Graph $y=x+1$ and $y=-2x+7$ and mark the intersection.`,GRID(8,8)],
    ["Problem 10",R`Are $y=\tfrac12 x+3$ and $x-2y=8$ parallel? Justify.`,4.2],
    ["Problem 11",R`Find where $y=4x-5$ meets $y=x+4$.`,4.4],
    ["Problem 12",R`Line $P$ has slope $2$; line $Q$ passes through $(0,1),(4,3)$. Which is steeper?`,4.2],
    ["Problem 13 --- Challenge",R`For what $b$ does $y=3x+b$ intersect $y=-x+8$ on the $x$-axis?`,5.2],
  ],
  answers:[
    R`$0.20t+15=0.30t+9\Rightarrow t=60$ texts.`, R`$y=-5x+1$ ($|-5|>4$).`, R`Yes; both slope $3$.`,
    R`$(3,3)$.`, R`$8t=5t+12\Rightarrow t=4$ s, $d=32$ m.`, R`$(0,-2)$.`, R`$3(4)-2=10$ vs $11$: $y=x+7$.`,
    R`$40+15h=25h\Rightarrow h=4$ h.`, R`Cross at $(2,3)$.`, R`$x-2y=8\Rightarrow y=\tfrac12x-4$; same slope $\tfrac12$: parallel.`,
    R`$(3,7)$.`, R`$Q$ has slope $\tfrac12<2$, so $P$ is steeper.`, R`$x$-axis point of second is $(8,0)$; $0=3(8)+b\Rightarrow b=-24$.`,
  ],
},
// ===================== 4.5 =====================
{
  code:"4.5", title:"Graphing Special Lines", unit:"Unit 4: Linear Relations",
  bigideas:R`Some lines are special: \textbf{horizontal} lines $y=c$ have slope $0$; \textbf{vertical} lines $x=c$ have an \textbf{undefined} slope; and lines through the \textbf{origin} $y=mx$ have intercept $0$. Recognising them from a point or a picture saves work.`,
  concepts:[
    ["Slope $0$ vs undefined",R`Horizontal $y=c$: every point has the same $y$, so rise $=0$ and slope $=0$. Vertical $x=c$: run $=0$, so slope is undefined (division by zero).`],
    ["Through the origin",R`$y=mx$ passes through $(0,0)$; e.g.\ $y=\frac23x$ also passes through $(3,2)$.`],
  ],
  examples:[
    ["Horizontal line",R`Find the equation of the horizontal line through $(3,-2)$.`,R`A horizontal line has the same $y$-value at every point, so its equation is $y=(\text{that value})$. The point $(3,-2)$ has $y=-2$, so the line is $y=-2$. Its slope is $0$ (there is no rise).
\plot{-2}{6}{-5}{3}{\addplot[domain=-2:6,samples=2,ex0,thick]{-2};\addplot[only marks,mark=*,ex3,mark size=2pt]coordinates{(3,-2)};}`],
    ["Vertical line",R`Find the equation of the vertical line through $(4,7)$, and state its slope.`,R`A vertical line has the same $x$-value everywhere, so its equation is $x=(\text{that value})$. The point $(4,7)$ has $x=4$, so the line is $x=4$. Its slope is \textbf{undefined}: the run is $0$, and we cannot divide by $0$.
\plot{-1}{8}{-1}{9}{\draw[ex0,thick](axis cs:4,-1)--(axis cs:4,9);\addplot[only marks,mark=*,ex3,mark size=2pt]coordinates{(4,7)};}`],
    ["Compare",R`Describe and compare $y=-3$ and $x=-3$.`,R`$y=-3$ fixes the output at $-3$ for every $x$, so it is a \textbf{horizontal} line with slope $0$. $x=-3$ fixes the input at $-3$ for every $y$, so it is a \textbf{vertical} line with undefined slope. The two lines cross at $(-3,-3)$.
\plot{-6}{2}{-6}{2}{\addplot[domain=-6:2,samples=2,ex0,thick]{-3};\draw[ex1,thick](axis cs:-3,-6)--(axis cs:-3,2);\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(-3,-3)};}`],
    ["Through the origin",R`Find the line through the origin with slope $\tfrac23$.`,R`A line through the origin has $y$-intercept $0$, so $b=0$ and the equation is $y=mx$. With $m=\tfrac23$: $y=\tfrac23x$. Check: from $(0,0)$, a rise of $2$ over a run of $3$ also lands on $(3,2)$.
\plot{-3}{6}{-4}{5}{\addplot[domain=-3:6,samples=2,ex0,thick]{2/3*x};\addplot[only marks,mark=*,ex3,mark size=2pt]coordinates{(0,0)(3,2)};}`],
    ["Meet a vertical line",R`Where does $x=5$ meet $y=2x-1$?`,R`The line $x=5$ contains every point whose $x$-coordinate is $5$, so substitute $x=5$ into $y=2x-1$: $y=2(5)-1=9$. They meet at $(5,9)$.
\plot{-1}{7}{-3}{11}{\draw[ex1,thick](axis cs:5,-3)--(axis cs:5,11);\addplot[domain=-1:7,samples=2,ex0,thick]{2*x-1};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(5,9)};}`],
    ["Parallel to an axis",R`Find the line parallel to the $x$-axis through $(-1,6)$.`,R`A line parallel to the $x$-axis is horizontal, so it has the form $y=(\text{constant})$. Through $(-1,6)$ the constant is the $y$-value $6$, so the line is $y=6$.
\plot{-4}{4}{0}{9}{\addplot[domain=-4:4,samples=2,ex0,thick]{6};\addplot[only marks,mark=*,ex3,mark size=2pt]coordinates{(-1,6)};}`],
    ["The axes",R`What are the equations of the $x$-axis and the $y$-axis?`,R`The $x$-axis is the horizontal line on which every point has $y=0$, so its equation is $y=0$. The $y$-axis is the vertical line on which every point has $x=0$, so its equation is $x=0$.`],
    ["Distance between lines",R`How far apart are $y=2$ and $y=-3$?`,R`Both lines are horizontal, so the distance between them is simply the difference of their $y$-values: $|2-(-3)|=|5|=5$ units.
\plot{-2}{4}{-5}{4}{\addplot[domain=-2:4,samples=2,ex0,thick]{2};\addplot[domain=-2:4,samples=2,ex3,thick]{-3};}`],
    ["Challenge --- sides of a square",R`A square has vertices $(1,1),(5,1),(5,5),(1,5)$. Give the equations of its four sides.`,R`Opposite sides of this square are horizontal and vertical. The bottom side joins $(1,1)$ and $(5,1)$ --- constant $y=1$; the top side joins $(1,5),(5,5)$ --- $y=5$. The left side joins $(1,1),(1,5)$ --- constant $x=1$; the right side --- $x=5$.
\plot{-1}{7}{-1}{7}{\draw[ex0,thick](axis cs:1,1)--(axis cs:5,1)--(axis cs:5,5)--(axis cs:1,5)--cycle;\addplot[only marks,mark=*,black,mark size=1.6pt]coordinates{(1,1)(5,1)(5,5)(1,5)};}`],
  ],
  problems:[
    ["Problem 1",R`Equation of the horizontal line through $(-2,4)$.`,3.6],
    ["Problem 2",R`Equation and slope of the vertical line through $(6,-1)$.`,3.6],
    ["Problem 3",R`Describe the graph of $y=5$ and of $x=5$.`,4.0],
    ["Problem 4",R`Write the line through the origin with slope $-\tfrac34$; give another point on it.`,4.2],
    ["Problem 5",R`Where does $x=-2$ meet $y=3x+4$?`,4.0],
    ["Problem 6",R`Which line has slope $0$: $y=-7$ or $x=-7$? Which is undefined?`,3.8],
    ["Problem 7",R`Give the equation of the line parallel to the $y$-axis through $(3,-5)$.`,3.6],
    ["Problem 8",R`How far apart are the horizontal lines $y=-4$ and $y=6$?`,3.8],
    ["Problem 9",R`Graph $y=-2$ and $x=3$ and mark their intersection.`,GRID(6,6)],
    ["Problem 10",R`A line through the origin passes through $(4,-6)$. Find its equation.`,4.2],
    ["Problem 11",R`At what point does $y=0$ (the $x$-axis) meet $y=2x-8$?`,4.0],
    ["Problem 12",R`Give equations for the two vertical sides of the rectangle with corners $(-2,0),(3,0),(3,4),(-2,4)$.`,4.0],
    ["Problem 13 --- Challenge",R`Lines $y=1$, $y=5$, $x=0$, $x=6$ enclose a region. Find its area.`,5.0],
  ],
  answers:[
    R`$y=4$.`, R`$x=6$; slope undefined.`, R`$y=5$ horizontal; $x=5$ vertical.`, R`$y=-\tfrac34x$; e.g.\ $(4,-3)$.`,
    R`$(-2,-2)$.`, R`$y=-7$ has slope $0$; $x=-7$ is undefined.`, R`$x=3$.`, R`$10$ units.`,
    R`Cross at $(3,-2)$.`, R`$y=-\tfrac32x$.`, R`$(4,0)$.`, R`$x=-2$ and $x=3$.`,
    R`$4\times6=24$ square units.`,
  ],
},
// ===================== 4.6 =====================
{
  code:"4.6", title:"Transformations of Lines", unit:"Unit 4: Linear Relations",
  bigideas:R`Starting from the base line $y=x$, changing $m$ and $b$ \textbf{transforms} the graph: $b$ shifts it \textbf{up/down}, $|m|$ makes it \textbf{steeper/flatter}, and a negative $m$ \textbf{reflects} it (flips the direction). Reading a transformation lets you write the new equation instantly.`,
  concepts:[
    ["Effect of $b$ and $m$",R`$y=x+b$ slides $y=x$ vertically by $b$. $y=mx$ scales the steepness by $m$; if $m<0$ the line is reflected (now falling).`],
    ["Reflections",R`Reflecting $y=mx+b$ in the $y$-axis replaces $x$ with $-x$: the slope flips sign. Reflecting in the $x$-axis replaces $y$ with $-y$: both slope and intercept flip sign.`],
  ],
  examples:[
    ["Translate a steeper line",R`Describe how to obtain $y=2x+5$ from $y=2x-1$.`,R`Compare the two equations. Both have slope $2$, so the line is not tilted or reflected --- only shifted vertically. The $y$-intercept changes from $-1$ to $5$, an increase of $5-(-1)=6$. So $y=2x+5$ is $y=2x-1$ \textbf{shifted up $6$ units}.
\plot{-3}{3}{-8}{12}{\addplot[domain=-3:3,samples=2,ex0,thick]{2*x-1};\addplot[domain=-3:3,samples=2,ex3,thick]{2*x+5};}`],
    ["Flatten a line",R`$y=3x$ is made one-third as steep. Give the new equation.`,R`Making a line one-third as steep multiplies its slope by $\tfrac13$. The starting slope is $3$, so the new slope is $3\times\tfrac13=1$, and the line still passes through the origin. The new equation is $y=x$.
\plot{-3}{3}{-9}{9}{\addplot[domain=-3:3,samples=2,ex0,thick]{3*x};\addplot[domain=-3:3,samples=2,ex3,thick]{x};}`],
    ["Reflect in the $x$-axis",R`Reflect $y=\tfrac12x-3$ in the $x$-axis. Give the new equation.`,R`Reflecting in the $x$-axis sends every point $(x,y)$ to $(x,-y)$, which replaces $y$ with $-y$ --- i.e.\ negate the whole right side. From $y=\tfrac12x-3$: $y=-\left(\tfrac12x-3\right)=-\tfrac12x+3$.
\plot{-4}{6}{-6}{6}{\addplot[domain=-4:6,samples=2,ex0,thick]{0.5*x-3};\addplot[domain=-4:6,samples=2,ex3,thick]{-0.5*x+3};}`],
    ["Shift a line",R`From $y=2x+1$ to $y=2x-3$: what changed?`,R`Both equations have slope $2$, so the line keeps its tilt --- only the intercept changes, from $+1$ to $-3$. That is a decrease of $4$, so the graph is \textbf{shifted down $4$ units}.
\plot{-3}{3}{-9}{8}{\addplot[domain=-3:3,samples=2,ex0,thick]{2*x+1};\addplot[domain=-3:3,samples=2,ex3,thick]{2*x-3};}`],
    ["Combine",R`Describe the change from $y=x$ to $y=-2x+5$.`,R`Read the changes from $y=x$ (slope $1$, intercept $0$). The slope goes from $1$ to $-2$: the negative sign is a \textbf{reflection} (the line now falls), and the size $2$ makes it \textbf{twice as steep}. The intercept goes from $0$ to $5$: a \textbf{shift up $5$}.
\plot{-2}{4}{-4}{10}{\addplot[domain=-2:4,samples=2,ex0,thick]{x};\addplot[domain=-2:4,samples=2,ex3,thick]{-2*x+5};}`],
    ["Translate and read",R`$y=\tfrac12x$ is shifted down $2$. Give the new equation and its $x$-intercept.`,R`Shifting down $2$ subtracts $2$ from the output: $y=\tfrac12x-2$. For the $x$-intercept, set $y=0$: $0=\tfrac12x-2$, so $\tfrac12x=2$ and $x=4$. The $x$-intercept is $(4,0)$.
\plot{-2}{8}{-3}{5}{\addplot[domain=-2:8,samples=2,ex0,thick]{0.5*x};\addplot[domain=-2:8,samples=2,ex3,thick]{0.5*x-2};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(4,0)};}`],
    ["A family of lines",R`How do the graphs of $y=2x+b$ change as $b$ grows from $-3$ to $3$?`,R`In $y=2x+b$ the slope is fixed at $2$, so every line has the same steepness --- they are all \textbf{parallel}. Increasing $b$ from $-3$ to $3$ raises the $y$-intercept, sliding each line \textbf{upward}.
\plot{-3}{3}{-9}{9}{\addplot[domain=-3:3,samples=2,ex1,thick]{2*x-3};\addplot[domain=-3:3,samples=2,ex0,thick]{2*x};\addplot[domain=-3:3,samples=2,ex3,thick]{2*x+3};}`],
    ["Graph a pair",R`Graph $y=x$ and $y=-x+3$; describe the second as a transformation of the first.`,R`$y=x$ has slope $1$ through the origin. For $y=-x+3$, the slope changes from $1$ to $-1$ (a \textbf{reflection} that makes it fall) and the intercept from $0$ to $3$ (a \textbf{shift up $3$}). So the second is $y=x$ reflected in the $x$-axis, then shifted up $3$.
\plot{-2}{5}{-3}{6}{\addplot[domain=-2:5,samples=2,ex0,thick]{x};\addplot[domain=-2:5,samples=2,ex3,thick]{-x+3};}`],
    ["Challenge --- reflect in the $y$-axis",R`Reflect $y=3x-2$ in the $y$-axis. Give the slope and intercept.`,R`Reflecting in the $y$-axis sends $(x,y)$ to $(-x,y)$, which replaces $x$ with $-x$. From $y=3x-2$: $y=3(-x)-2=-3x-2$. The slope becomes $-3$; the $y$-intercept stays $-2$ (it sits on the mirror line, so it does not move).
\plot{-3}{3}{-12}{8}{\addplot[domain=-3:3,samples=2,ex0,thick]{3*x-2};\addplot[domain=-3:3,samples=2,ex3,thick]{-3*x-2};}`],
  ],
  problems:[
    ["Problem 1",R`Describe the transformation from $y=x$ to $y=x-5$.`,4.0],
    ["Problem 2",R`Write the equation for $y=x$ made $4$ times as steep.`,3.8],
    ["Problem 3",R`Describe $y=x\to y=-x+2$ as a sequence of transformations.`,4.2],
    ["Problem 4",R`$y=3x+2$ is shifted down $7$. Give the new equation.`,4.0],
    ["Problem 5",R`Describe $y=x\to y=\tfrac12x-4$.`,4.2],
    ["Problem 6",R`Starting from $y=-x$, shift up $6$. Give the equation and its $x$-intercept.`,4.4],
    ["Problem 7",R`Write three members of the family $y=-3x+b$ and say how their graphs relate.`,4.4],
    ["Problem 8",R`$y=4x-1$ is reflected in the $x$-axis. Give the new equation.`,4.2],
    ["Problem 9",R`Graph $y=x$ and $y=2x-3$ and describe the change.`,GRID(6,8)],
    ["Problem 10",R`Reflect $y=-2x+5$ in the $y$-axis. Give the result.`,4.2],
    ["Problem 11",R`Which transformation turns $y=x+1$ into $y=x+6$?`,3.8],
    ["Problem 12",R`Make $y=x$ half as steep and shift it up $3$. Equation?`,4.0],
    ["Problem 13 --- Challenge",R`A line is reflected in the $x$-axis and then shifted up $4$, giving $y=-2x+4$. What was the original line?`,5.2],
  ],
  answers:[
    R`Shift down $5$.`, R`$y=4x$.`, R`Reflect (falling), then shift up $2$.`, R`$y=3x-5$.`,
    R`Half as steep and shifted down $4$.`, R`$y=-x+6$; $x$-int $(6,0)$.`, R`e.g.\ $b=-2,0,2$ --- parallel lines sliding up.`,
    R`$y=-4x+1$.`, R`Twice as steep, shifted down $3$.`, R`$y=2x+5$.`, R`Shift up $5$.`, R`$y=\tfrac12x+3$.`,
    R`Undo: subtract $4$ then reflect in $x$-axis $\Rightarrow y=2x$.`,
  ],
},
// ===================== 4.7 =====================
{
  code:"4.7", title:"Finding the Equation of a Line", unit:"Unit 4: Linear Relations",
  bigideas:R`To pin down a line you need its \textbf{slope} and one \textbf{point} (or two points, which give the slope). Compute $m$, then solve $y=mx+b$ for $b$ using a known point. This works for fractional slopes, contexts, and parallel-through-a-point problems.`,
  concepts:[
    ["Slope + point",R`With slope $m$ and point $(x_1,y_1)$: substitute to get $b=y_1-mx_1$, then write $y=mx+b$.`],
    ["Two points / parallel",R`Two points give $m$ first. A line \emph{parallel} to a given line copies its slope, then uses the point to find $b$.`],
  ],
  examples:[
    ["Slope and a point",R`Find the equation of the line with slope $4$ through $(2,3)$.`,R`We are given the slope $m=4$ and one point $(x_1,y_1)=(2,3)$. Put them into $y=mx+b$ to find the intercept: $3=4(2)+b$, so $3=8+b$ and $b=-5$. Therefore $\boxed{y=4x-5}$.
\plot{-1}{3}{-10}{8}{\addplot[domain=-1:3,samples=2,ex0,thick]{4*x-5};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(2,3)};}`],
    ["Two points",R`Find the equation of the line through $(-1,2)$ and $(3,-6)$.`,R`Label $(x_1,y_1)=(-1,2)$ and $(x_2,y_2)=(3,-6)$. The slope is $m=\dfrac{y_2-y_1}{x_2-x_1}=\dfrac{-6-2}{3-(-1)}=\dfrac{-8}{4}=-2$. Substitute $m=-2$ and $(-1,2)$ into $y=mx+b$: $2=-2(-1)+b=2+b$, so $b=0$. Therefore $\boxed{y=-2x}$.
\plot{-2}{4}{-9}{5}{\addplot[domain=-2:4,samples=2,ex0,thick]{-2*x};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(-1,2)(3,-6)};}`],
    ["Fractional slope",R`Find the line through $(0,-5)$ with slope $\tfrac34$.`,R`The point $(0,-5)$ has $x=0$, so it is the $y$-intercept: $b=-5$ with no extra work. With slope $m=\tfrac34$, the equation is $y=\tfrac34x-5$.
\plot{-4}{6}{-9}{1}{\addplot[domain=-4:6,samples=2,ex0,thick]{0.75*x-5};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,-5)};}`],
    ["Drain model",R`A pool has $300$ L at $t=0$ and $250$ L at $t=5$ min. Find $V(t)$ and when it empties.`,R`Treat volume $V$ as a linear function of time $t$, with data points $(t,V)=(0,300)$ and $(5,250)$. Slope: $m=\dfrac{250-300}{5-0}=\dfrac{-50}{5}=-10$ (L/min). At $t=0$, $V=300$, so $b=300$: $V=-10t+300$. It empties when $V=0$: $0=-10t+300$, giving $t=30$ min.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$t$},ylabel={\scriptsize$V$},grid=both,grid style={gray!16},xmin=0,xmax=30,ymin=0,ymax=320,xtick distance=5,ytick distance=50,tick label style={font=\tiny},axis line style={-}]\addplot[domain=0:30,samples=2,ex0,thick]{-10*x+300};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,300)(5,250)(30,0)};\end{axis}\end{tikzpicture}\end{center}`],
    ["Horizontal",R`Find the line through $(2,7)$ with slope $0$.`,R`A slope of $0$ means the line is horizontal, so $y$ never changes from its value at the given point. Through $(2,7)$, the equation is $y=7$.
\plot{-2}{6}{0}{10}{\addplot[domain=-2:6,samples=2,ex0,thick]{7};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(2,7)};}`],
    ["Fractions both ways",R`Find the line through $(1,1)$ and $(4,3)$.`,R`Label $(x_1,y_1)=(1,1)$ and $(x_2,y_2)=(4,3)$. Slope: $m=\dfrac{3-1}{4-1}=\dfrac{2}{3}$. Substitute into $y=mx+b$ with $(1,1)$: $1=\tfrac23(1)+b$, so $b=1-\tfrac23=\tfrac13$. Therefore $\boxed{y=\tfrac23x+\tfrac13}$.
\plot{-2}{6}{-2}{5}{\addplot[domain=-2:6,samples=2,ex0,thick]{(2/3)*x+1/3};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(1,1)(4,3)};}`],
    ["Parallel through a point",R`Find the line through $(1,2)$ parallel to $y=3x+4$.`,R`Parallel lines share the same slope, so copy the slope of $y=3x+4$: $m=3$. Now use the point $(1,2)$ in $y=3x+b$: $2=3(1)+b$, so $b=-1$. Therefore $\boxed{y=3x-1}$.
\plot{-2}{2}{-8}{11}{\addplot[domain=-2:2,samples=2,ex1,thick]{3*x+4};\addplot[domain=-2:2,samples=2,ex0,thick]{3*x-1};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(1,2)};}`],
    ["From a graph",R`A line is marked through $(-2,-1)$ and $(2,7)$. Find its equation.`,R`Read the two marked points and label them $(x_1,y_1)=(-2,-1)$ and $(x_2,y_2)=(2,7)$. Slope: $m=\dfrac{7-(-1)}{2-(-2)}=\dfrac{8}{4}=2$. Substitute $(2,7)$ into $y=2x+b$: $7=2(2)+b=4+b$, so $b=3$. Therefore $\boxed{y=2x+3}$.
\plot{-3}{3}{-4}{10}{\addplot[domain=-3:3,samples=2,ex0,thick]{2*x+3};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(-2,-1)(2,7)};}`],
    ["Challenge",R`Find the line through $(-2,1)$ parallel to the segment from $(0,0)$ to $(3,-6)$.`,R`First find the slope of the segment from $(0,0)$ to $(3,-6)$: $m=\dfrac{-6-0}{3-0}=-2$. A parallel line has the same slope $-2$. Use the point $(-2,1)$ in $y=-2x+b$: $1=-2(-2)+b=4+b$, so $b=-3$. Therefore $\boxed{y=-2x-3}$.
\plot{-3}{3}{-10}{7}{\addplot[domain=-3:3,samples=2,ex1,thick]{-2*x};\addplot[domain=-3:3,samples=2,ex0,thick]{-2*x-3};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(-2,1)};}`],
  ],
  problems:[
    ["Problem 1",R`Find the line with slope $5$ through $(1,-2)$.`,4.2],
    ["Problem 2",R`Find the line through $(-2,5)$ and $(2,-3)$.`,4.4],
    ["Problem 3",R`Line through $(0,7)$ with slope $-\tfrac23$.`,4.0],
    ["Problem 4",R`A tank has $80$ L at $t=0$ and $20$ L at $t=4$ min. Find $V(t)$ and when it empties.`,4.8],
    ["Problem 5",R`Find the line through $(3,3)$ and $(6,9)$.`,4.4],
    ["Problem 6",R`Line through $(2,-1)$ parallel to $y=\tfrac12x+4$.`,4.4],
    ["Problem 7",R`Horizontal line through $(-4,9)$; then vertical line through $(-4,9)$.`,4.2],
    ["Problem 8",R`Find the line through $(1,1)$ and $(5,4)$ (leave fractions exact).`,4.6],
    ["Problem 9",R`A line marked through $(-3,2)$ and $(3,-2)$: find its equation.`,GRID(6,6)],
    ["Problem 10",R`Line through $(-1,4)$ parallel to $y=-3x+1$.`,4.4],
    ["Problem 11",R`A phone plan costs \$45 after $100$ min and \$65 after $300$ min. Find cost vs minutes.`,4.8],
    ["Problem 12",R`Find the line with slope $-1$ through $(6,2)$; give both intercepts.`,4.4],
    ["Problem 13 --- Challenge",R`Find the line through $(4,-1)$ parallel to the segment joining $(-2,3)$ and $(2,-5)$.`,5.2],
  ],
  answers:[
    R`$y=5x-7$.`, R`$m=-2$: $y=-2x+1$.`, R`$y=-\tfrac23x+7$.`, R`$m=-15$: $V=-15t+80$; empty at $t=\tfrac{16}{3}\approx5.3$ min.`,
    R`$y=2x-3$.`, R`$y=\tfrac12x-2$.`, R`Horizontal $y=9$; vertical $x=-4$.`, R`$m=\tfrac34$: $y=\tfrac34x+\tfrac14$.`,
    R`$m=-\tfrac23$: $y=-\tfrac23x$.`, R`$y=-3x+1$.`, R`$m=\tfrac{20}{200}=0.10$: $C=0.10t+35$.`,
    R`$y=-x+8$; intercepts $(8,0),(0,8)$.`, R`Segment slope $-2$: $y=-2x+7$.`,
  ],
},
// ===================== 4.8 =====================
{
  code:"4.8", title:"General Form vs Slope-Intercept Form", unit:"Unit 4: Linear Relations",
  bigideas:R`\textbf{General form} $Ax+By+C=0$ uses integer coefficients and no fractions; \textbf{slope-intercept form} $y=mx+b$ is best for reading slope/intercepts and for graphing. Its slope is $-\frac{A}{B}$, and its intercepts come from setting $y=0$ (for $x$) and $x=0$ (for $y$). Converting cleanly between the two, and picking the handy one for the job, is the key skill.`,
  concepts:[
    ["Convert both ways",R`From $y=mx+b$: move everything to one side and clear denominators. From $Ax+By+C=0$: solve for $y$ to read slope and intercept, or read slope directly as $m=-\frac{A}{B}$.`],
    ["Choose the form",R`Need slope/intercept or a quick graph? Use $y=mx+b$. Need tidy integers or a standard comparison (e.g.\ testing parallel lines)? Use $Ax+By+C=0$.`],
  ],
  examples:[
    ["To general form",R`Write $y=\tfrac23x-4$ in general form.`,R`General form is $Ax+By+C=0$ with integer coefficients and $0$ on the right. Start with $y=\tfrac23x-4$ and clear the fraction by multiplying every term by $3$: $3y=2x-12$. Now move all terms to one side: $0=2x-3y-12$, i.e.\ $\boxed{2x-3y-12=0}$.
\plot{-3}{6}{-7}{1}{\addplot[domain=-3:6,samples=2,ex0,thick]{(2/3)*x-4};}`],
    ["To slope-intercept",R`Convert $3x-4y+8=0$ to slope-intercept form.`,R`Slope-intercept form is $y=mx+b$, so isolate $y$. From $3x-4y+8=0$, move the other terms across: $-4y=-3x-8$. Divide every term by $-4$: $y=\tfrac34x+2$.
\plot{-4}{4}{-2}{6}{\addplot[domain=-4:4,samples=2,ex0,thick]{0.75*x+2};}`],
    ["Slope directly",R`State the slope of $5x+2y-7=0$.`,R`In general form $Ax+By+C=0$ the slope is $m=-\dfrac{A}{B}$, so no rearranging is needed. Here $A=5$ and $B=2$, giving $m=-\dfrac{5}{2}$.
\plot{-2}{3}{-5}{9}{\addplot[domain=-2:3,samples=2,ex0,thick]{-2.5*x+3.5};}`],
    ["Intercepts",R`Find both intercepts of $3x-4y-24=0$.`,R`For the $x$-intercept set $y=0$: $3x-24=0$, so $x=8$, giving $(8,0)$. For the $y$-intercept set $x=0$: $-4y-24=0$, so $y=-6$, giving $(0,-6)$.
\plot{-2}{10}{-8}{2}{\addplot[domain=-2:10,samples=2,ex0,thick]{0.75*x-6};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(8,0)(0,-6)};}`],
    ["Clear fractions",R`Write $y=-\tfrac12x+\tfrac34$ in general form.`,R`Multiply every term by the common denominator $4$ to clear the fractions: $4y=-2x+3$. Now move all terms to one side: $2x+4y-3=0$.
\plot{-4}{4}{-2}{3}{\addplot[domain=-4:4,samples=2,ex0,thick]{-0.5*x+0.75};}`],
    ["Same line?",R`Show that $6x-3y-9=0$ and $y=2x-3$ are the same line.`,R`Convert the general form to slope-intercept and compare. From $6x-3y-9=0$: $-3y=-6x+9$, so dividing by $-3$ gives $y=2x-3$. This is identical to the given $y=2x-3$, so they are the \textbf{same line}.
\plot{-3}{5}{-10}{8}{\addplot[domain=-3:5,samples=2,ex0,thick]{2*x-3};\addplot[domain=-3:5,samples=2,ex3,dashed,thick]{2*x-3};}`],
    ["Read from general",R`From $4x+y-8=0$, state the slope and both intercepts.`,R`Isolate $y$: from $4x+y-8=0$, $y=-4x+8$. So the slope is $-4$ and the $y$-intercept is $(0,8)$. For the $x$-intercept set $y=0$: $4x-8=0$, so $x=2$, i.e.\ $(2,0)$.
\plot{-1}{3}{-5}{13}{\addplot[domain=-1:3,samples=2,ex0,thick]{-4*x+8};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,8)(2,0)};}`],
    ["Parallel across forms",R`Are $y=2x+1$ and $2x-y+5=0$ parallel?`,R`Put both in slope-intercept form. The first is $y=2x+1$ (slope $2$). The second, $2x-y+5=0$, gives $y=2x+5$ (slope $2$). Equal slopes and different intercepts, so they are \textbf{parallel}.
\plot{-3}{2}{-6}{10}{\addplot[domain=-3:2,samples=2,ex0,thick]{2*x+1};\addplot[domain=-3:2,samples=2,ex3,thick]{2*x+5};}`],
    ["Context --- coins",R`Nickels ($x$) and dimes ($y$) total \$1: $5x+10y=100$ (in cents). Solve for $y$ and give the intercepts.`,R`Solve for $y$: $10y=100-5x$, so $y=-\tfrac12x+10$. The $x$-intercept ($y=0$) is $x=20$ --- all nickels. The $y$-intercept ($x=0$) is $y=10$ --- all dimes.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,xlabel={\scriptsize$x$},ylabel={\scriptsize$y$},grid=both,grid style={gray!16},xmin=0,xmax=22,ymin=0,ymax=12,xtick distance=5,ytick distance=2,tick label style={font=\tiny},axis line style={-}]\addplot[domain=0:20,samples=2,ex0,thick]{-0.5*x+10};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(20,0)(0,10)};\end{axis}\end{tikzpicture}\end{center}`],
  ],
  problems:[
    ["Problem 1",R`Write $y=\tfrac34x-2$ in general form (integer coefficients).`,4.2],
    ["Problem 2",R`Convert $2x+5y-10=0$ to slope-intercept form.`,4.2],
    ["Problem 3",R`State the slope of $7x-3y+2=0$ directly.`,3.8],
    ["Problem 4",R`Find both intercepts of $4x+3y-12=0$.`,4.2],
    ["Problem 5",R`Convert $y=-\tfrac47x+3$ to general form.`,4.2],
    ["Problem 6",R`Are $3x-y+4=0$ and $6x-2y-5=0$ parallel? Justify.`,4.2],
    ["Problem 7",R`From $3x+y-9=0$, state slope, $y$-intercept, and $x$-intercept.`,4.4],
    ["Problem 8",R`Quarters ($x$) and loonies ($y$) total \$5: $25x+100y=500$. Solve for $y$; give intercepts.`,4.8],
    ["Problem 9",R`Graph $2x-3y-6=0$ using its intercepts.`,GRID(8,6)],
    ["Problem 10",R`Show $4x-2y-6=0$ and $y=2x-3$ are the same line.`,4.4],
    ["Problem 11",R`Write the line with slope $-\tfrac13$ and $y$-intercept $2$ in general form.`,4.2],
    ["Problem 12",R`Which form best shows the $y$-intercept: general or slope-intercept? Give the $y$-intercept of $x-4y+8=0$.`,4.2],
    ["Problem 13 --- Challenge",R`A line in general form has slope $-\tfrac23$ and passes through $(3,0)$. Find $A,B,C$ (integers).`,5.2],
  ],
  answers:[
    R`$3x-4y-8=0$.`, R`$y=-\tfrac25x+2$.`, R`$\tfrac73$.`, R`$(3,0),(0,4)$.`, R`$4x+7y-21=0$.`,
    R`Both slope $3$: parallel.`, R`$y=-3x+9$; slope $-3$, $(0,9)$, $(3,0)$.`, R`$y=-\tfrac14x+5$; $(20,0),(0,5)$.`,
    R`Intercepts $(3,0),(0,-2)$.`, R`$4x-2y-6=0\Rightarrow y=2x-3$: same.`, R`$x+3y-6=0$.`, R`Slope-intercept; $y$-int $(0,2)$.`,
    R`$y=-\tfrac23x+2\Rightarrow 2x+3y-6=0$.`,
  ],
},
// ===================== 4.9 =====================
{
  code:"4.9", title:"Parallel and Perpendicular Lines", unit:"Unit 4: Linear Relations",
  bigideas:R`\textbf{Parallel} lines have \textbf{equal slopes} ($m_1=m_2$). \textbf{Perpendicular} lines have slopes that are \textbf{negative reciprocals} ($m_1\cdot m_2=-1$). Combine these rules with through a given point to nail down a specific line, and use them to test angles in geometry.`,
  concepts:[
    ["The two rules",R`Parallel: $m_1=m_2$. Perpendicular: $m_2=-\dfrac{1}{m_1}$ (their product is $-1$). Special case: a horizontal line ($m=0$) is perpendicular to a vertical line (undefined slope).`],
    ["Through a point",R`Copy the required slope (equal, or negative reciprocal), then solve $y=mx+b$ with the given point to find $b$.`],
  ],
  examples:[
    ["Parallel through a point",R`Find the line through $(1,2)$ parallel to $y=3x-4$.`,R`Parallel lines have \textbf{equal} slopes, so copy the slope of $y=3x-4$: $m=3$. Use the point $(1,2)$ in $y=3x+b$: $2=3(1)+b$, so $b=-1$. Therefore $\boxed{y=3x-1}$.
\plot{-1}{3}{-8}{9}{\addplot[domain=-1:3,samples=2,ex1,thick]{3*x-4};\addplot[domain=-1:3,samples=2,ex0,thick]{3*x-1};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(1,2)};}`],
    ["Perpendicular through a point",R`Find the line through $(1,2)$ perpendicular to $y=3x-4$.`,R`Perpendicular slopes are \textbf{negative reciprocals}: flip $3$ to $\tfrac13$ and change the sign, giving $m=-\tfrac13$. Use $(1,2)$ in $y=-\tfrac13x+b$: $2=-\tfrac13(1)+b$, so $b=2+\tfrac13=\tfrac73$. Therefore $\boxed{y=-\tfrac13x+\tfrac73}$.
\plot{-2}{3}{-11}{6}{\addplot[domain=-2:3,samples=2,ex1,thick]{3*x-4};\addplot[domain=-2:3,samples=2,ex0,thick]{(-1/3)*x+7/3};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(1,2)};}`],
    ["Test perpendicular",R`Are $y=\tfrac23x+1$ and $y=-\tfrac32x-4$ perpendicular?`,R`Two lines are perpendicular when the \textbf{product of their slopes is $-1$}. The slopes are $\tfrac23$ and $-\tfrac32$. Their product is $\tfrac23\times\left(-\tfrac32\right)=-1$, so \textbf{yes}, they are perpendicular.
\plot{-3}{3}{-9}{4}{\addplot[domain=-3:3,samples=2,ex0,thick]{(2/3)*x+1};\addplot[domain=-3:3,samples=2,ex3,thick]{(-3/2)*x-4};}`],
    ["From general form",R`Is $2x-y+1=0$ parallel to $4x-2y-3=0$?`,R`Find each slope with $m=-\dfrac{A}{B}$. First, $2x-y+1=0$: $m=-\dfrac{2}{-1}=2$. Second, $4x-2y-3=0$: $m=-\dfrac{4}{-2}=2$. Equal slopes, so the lines are \textbf{parallel}.
\plot{-3}{3}{-6}{8}{\addplot[domain=-3:3,samples=2,ex0,thick]{2*x+1};\addplot[domain=-3:3,samples=2,ex3,thick]{2*x+1.5};}`],
    ["Perpendicular through the origin",R`Find the line through the origin perpendicular to $y=\tfrac12x$.`,R`The given line has slope $\tfrac12$; the perpendicular slope is its negative reciprocal, $-2$. A line through the origin has intercept $0$, so the equation is $y=-2x$.
\plot{-3}{3}{-7}{7}{\addplot[domain=-3:3,samples=2,ex1,thick]{0.5*x};\addplot[domain=-3:3,samples=2,ex0,thick]{-2*x};}`],
    ["Right angle by slopes",R`Does $\triangle$ with $A(0,0),\,B(4,2),\,C(1,-2)$ have a right angle at $A$?`,R`A right angle at $A$ means $AB$ and $AC$ are perpendicular, so their slopes must multiply to $-1$. Slope of $AB=\dfrac{2-0}{4-0}=\tfrac12$; slope of $AC=\dfrac{-2-0}{1-0}=-2$. Their product is $\tfrac12\times(-2)=-1$, so \textbf{yes}, there is a right angle at $A$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,grid=both,grid style={gray!16},xmin=-2,xmax=5,ymin=-3,ymax=4,xtick distance=1,ytick distance=1,tick label style={font=\tiny},axis line style={-}]\addplot[ex0,thick] coordinates{(0,0)(4,2)};\addplot[ex3,thick] coordinates{(0,0)(1,-2)};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,0)(4,2)(1,-2)};\end{axis}\end{tikzpicture}\end{center}`],
    ["Axis lines",R`Give the line perpendicular to the $x$-axis through $(5,-3)$, and the one parallel to it.`,R`A line perpendicular to the $x$-axis is \textbf{vertical}: through $(5,-3)$ it is $x=5$. A line parallel to the $x$-axis is \textbf{horizontal}: through $(5,-3)$ it is $y=-3$.
\begin{center}\begin{tikzpicture}\begin{axis}[width=8.4cm,height=6cm,axis lines=middle,grid=both,grid style={gray!16},xmin=-2,xmax=9,ymin=-6,ymax=3,xtick distance=2,ytick distance=1,tick label style={font=\tiny},axis line style={-}]\addplot[domain=-2:9,samples=2,ex0,thick]{-3};\draw[ex3,thick] (axis cs:5,-6) -- (axis cs:5,3);\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(5,-3)};\end{axis}\end{tikzpicture}\end{center}`],
    ["Parallel in general form",R`Find the line through $(-2,4)$ parallel to $3x+y-5=0$.`,R`Find the slope of $3x+y-5=0$ with $m=-\dfrac{A}{B}=-\dfrac{3}{1}=-3$. A parallel line has slope $-3$. Use $(-2,4)$ in $y=-3x+b$: $4=-3(-2)+b=6+b$, so $b=-2$. Therefore $\boxed{y=-3x-2}$.
\plot{-2}{3}{-12}{12}{\addplot[domain=-2:3,samples=2,ex1,thick]{-3*x+5};\addplot[domain=-2:3,samples=2,ex0,thick]{-3*x-2};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(-2,4)};}`],
    ["Challenge",R`Find $k$ so that $y=kx+1$ is perpendicular to the line through $(0,0)$ and $(2,6)$.`,R`First find the slope of the line through $(0,0)$ and $(2,6)$: $m=\dfrac{6-0}{2-0}=3$. Perpendicular to it means the slope is the negative reciprocal, $-\tfrac13$. Since $y=kx+1$ has slope $k$, we need $k=-\tfrac13$.
\plot{-3}{3}{-10}{10}{\addplot[domain=-3:3,samples=2,ex1,thick]{3*x};\addplot[domain=-3:3,samples=2,ex0,thick]{(-1/3)*x+1};\addplot[only marks,mark=*,black,mark size=2pt]coordinates{(0,0)(2,6)};}`],
  ],
  problems:[
    ["Problem 1",R`Line through $(2,1)$ parallel to $y=4x-3$.`,4.4],
    ["Problem 2",R`Line through $(2,1)$ perpendicular to $y=4x-3$.`,4.6],
    ["Problem 3",R`Are $y=\tfrac34x+2$ and $y=-\tfrac43x-1$ perpendicular? Justify.`,4.2],
    ["Problem 4",R`Are $3x-y+2=0$ and $6x-2y-7=0$ parallel? Justify.`,4.2],
    ["Problem 5",R`Line through the origin perpendicular to $y=\tfrac25x$.`,4.2],
    ["Problem 6",R`Line through $(-1,3)$ parallel to $y=-2x+5$.`,4.4],
    ["Problem 7",R`Give the line perpendicular to the $x$-axis through $(-4,2)$, and the one parallel to it.`,4.2],
    ["Problem 8",R`Through $(3,-2)$ parallel to $x+2y-6=0$.`,4.6],
    ["Problem 9",R`Do $A(0,0),B(3,1),C(1,-3)$ form a right angle at $A$? Use slopes.`,GRID(6,6)],
    ["Problem 10",R`Through $(0,5)$ perpendicular to $y=-\tfrac12x+1$.`,4.4],
    ["Problem 11",R`Find $k$ so $y=kx-2$ is parallel to $y=\tfrac53x+1$.`,4.0],
    ["Problem 12",R`Line through $(4,4)$ perpendicular to the line joining $(0,0),(2,4)$.`,4.6],
    ["Problem 13 --- Challenge",R`Find $k$ so $2x+ky-6=0$ is perpendicular to $y=\tfrac13x+2$.`,5.2],
  ],
  answers:[
    R`$y=4x-7$.`, R`$m=-\tfrac14$: $y=-\tfrac14x+\tfrac32$.`, R`Product $\tfrac34\cdot(-\tfrac43)=-1$: yes.`,
    R`Both slope $3$: parallel.`, R`$y=-\tfrac52x$.`, R`$y=-2x+1$.`, R`Perpendicular $x=-4$; parallel $y=2$.`,
    R`Slope $-\tfrac12$: $y=-\tfrac12x-\tfrac12$.`, R`$AB$ slope $\tfrac13$, $AC$ slope $-3$; product $-1$: yes.`,
    R`$m=2$: $y=2x+5$.`, R`$k=\tfrac53$.`, R`Line slope $2$; perp $-\tfrac12$: $y=-\tfrac12x+6$.`,
    R`Slope $-\tfrac{2}{k}=-3\Rightarrow k=\tfrac23$.`,
  ],
},
];
