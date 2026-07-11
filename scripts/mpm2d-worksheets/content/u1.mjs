// MPM2D Unit 1 — Linear Systems (worksheets 1.2–1.6)
const r = String.raw;

export default [
{
  code: "1.2", unit: "1: Linear Systems", title: "Solving Linear Systems by Graphing",
  intro: r`A \textbf{linear system} is two lines considered together; its \textbf{solution} is the point $(x,y)$ that lies on \emph{both} lines --- the point of intersection (POI).`,
  ideas: [
    r`Put each line in $y=mx+b$, graph both, and read off the intersection point.`,
    r`The POI must satisfy \emph{both} equations --- always \textbf{check} by substituting back.`,
    r`\textbf{One solution:} the lines cross once (different slopes).`,
    r`\textbf{No solution:} parallel lines (equal slopes, different $y$-intercepts).`,
    r`\textbf{Infinitely many:} the same line (equal slopes \emph{and} intercepts).`,
  ],
  examples: [
    { t: "Checking a solution", body: r`Verify that $(2,1)$ solves the system $y=x-1$ and $y=-x+3$.
\soln Substitute: $2-1=1\ \checkmark$ and $-2+3=1\ \checkmark$. It satisfies both, so $(2,1)$ is the solution.
\plot{-2}{6}{-2}{6}{\addplot[exblue,very thick,domain=-2:6,samples=2]{x-1};\addplot[qorange,very thick,domain=-2:6,samples=2]{-x+3};\addplot[mark=*,only marks,black]coordinates{(2,1)};}` },
    { t: "Graphing a simple system", body: r`Solve by graphing: $y=x+1$ and $y=-x+5$.
\soln Graph both lines; they cross at $(2,3)$. Check: $2+1=3$ and $-2+5=3$. Solution $(2,3)$.
\plot{-2}{7}{-2}{7}{\addplot[exblue,very thick,domain=-2:6,samples=2]{x+1};\addplot[qorange,very thick,domain=-2:6,samples=2]{-x+5};\addplot[mark=*,only marks,black]coordinates{(2,3)};}` },
    { t: "Steeper lines", body: r`Solve by graphing: $y=2x-3$ and $y=-x+3$.
\soln Set equal: $2x-3=-x+3\Rightarrow 3x=6\Rightarrow x=2$, so $y=1$. Solution $(2,1)$.
\plot{-2}{6}{-4}{6}{\addplot[exblue,very thick,domain=-1:4,samples=2]{2*x-3};\addplot[qorange,very thick,domain=-2:5,samples=2]{-x+3};\addplot[mark=*,only marks,black]coordinates{(2,1)};}` },
    { t: "One equation in standard form", body: r`Solve by graphing: $x+y=4$ and $y=2x-2$.
\soln Rewrite $x+y=4$ as $y=-x+4$. Then $-x+4=2x-2\Rightarrow 6=3x\Rightarrow x=2$, $y=2$. Solution $(2,2)$.
\plot{-2}{6}{-3}{6}{\addplot[exblue,very thick,domain=-1:4,samples=2]{-x+4};\addplot[qorange,very thick,domain=-1:4,samples=2]{2*x-2};\addplot[mark=*,only marks,black]coordinates{(2,2)};}` },
    { t: "Both in standard form", body: r`Solve by graphing: $2x+y=5$ and $x-y=1$.
\soln Rewrite as $y=-2x+5$ and $y=x-1$. Then $-2x+5=x-1\Rightarrow 6=3x\Rightarrow x=2$, $y=1$. Solution $(2,1)$.
\plot{-2}{6}{-4}{6}{\addplot[exblue,very thick,domain=-1:4,samples=2]{-2*x+5};\addplot[qorange,very thick,domain=-2:5,samples=2]{x-1};\addplot[mark=*,only marks,black]coordinates{(2,1)};}` },
    { t: "Parallel lines (no solution)", body: r`Solve by graphing: $y=2x+1$ and $y=2x-3$.
\soln Both have slope $2$ but different $y$-intercepts, so the lines are parallel and never meet --- \textbf{no solution}.
\plot{-4}{4}{-6}{6}{\addplot[exblue,very thick,domain=-4:2,samples=2]{2*x+1};\addplot[qorange,very thick,domain=-2:4,samples=2]{2*x-3};}` },
    { t: "Same line (infinitely many)", body: r`Solve: $y=x+2$ and $2x-2y=-4$.
\soln Rearrange $2x-2y=-4\Rightarrow -2y=-2x-4\Rightarrow y=x+2$. This is the \emph{same} line, so there are \textbf{infinitely many solutions}.` },
    { t: "An application", body: r`Gym A charges \$5 per visit: $C=5v$. Gym B charges \$4 plus \$3 per visit: $C=3v+4$. When is the cost equal?
\soln $5v=3v+4\Rightarrow 2v=4\Rightarrow v=2$ visits, and $C=\$10$.
\plot{0}{6}{0}{26}{\addplot[exblue,very thick,domain=0:5,samples=2]{5*x};\addplot[qorange,very thick,domain=0:5,samples=2]{3*x+4};\addplot[mark=*,only marks,black]coordinates{(2,10)};}` },
    { t: "Solve and classify (harder)", body: r`Solve and classify: $3x-2y=6$ and $y=\tfrac32x-3$.
\soln Rearrange the first: $3x-2y=6\Rightarrow -2y=-3x+6\Rightarrow y=\tfrac32x-3$. It is identical to the second equation, so the system has \textbf{infinitely many solutions} (coincident lines).` },
  ],
  questions: [
    { ask: r`Verify whether $(1,4)$ is the solution of $y=2x+2$ and $y=-x+5$.`, ws: "2.4cm" },
    { ask: r`Solve by graphing: $y=x-2$ and $y=-x+4$.`, grid: true },
    { ask: r`Solve by graphing: $y=2x+1$ and $y=-x-2$.`, grid: true },
    { ask: r`Solve by graphing: $y=\tfrac12x+1$ and $y=-x+4$.`, grid: true },
    { ask: r`Rewrite $x+y=6$ and $y=2x$ in $y=mx+b$ form, then solve by graphing.`, grid: true },
    { ask: r`Solve by graphing: $2x+y=3$ and $x-y=3$.`, grid: true },
    { ask: r`How many solutions does the system $y=3x-1$, $y=3x+4$ have? Explain.`, ws: "2.4cm" },
    { ask: r`How many solutions does $y=-x+2$, $3x+3y=6$ have? Explain.`, ws: "2.4cm" },
    { ask: r`Solve by graphing: $y=-2x+5$ and $y=x-1$.`, grid: true },
    { ask: r`A taxi charges \$3 plus \$2/km: $C=2d+3$. Another charges \$5/km: $C=5d$. When is the cost equal?`, ws: "2.6cm" },
    { ask: r`Without graphing, decide whether $(4,1)$ is the solution of $x+y=5$ and $2x-y=7$.`, ws: "2.4cm" },
    { ask: r`Solve by graphing: $y=4$ and $y=2x-2$.`, grid: true },
    { ask: r`Two lines both have slope $2$. One passes through $(0,1)$; describe the number of solutions if the other passes through (a)~$(0,1)$ and (b)~$(0,5)$.`, ws: "2.8cm", challenge: true },
  ],
  answers: [
    r`$2(1)+2=4\ \checkmark$, $-1+5=4\ \checkmark$ --- yes, $(1,4)$ is the solution.`,
    r`$(3,1)$.`,
    r`$(-1,-1)$.`,
    r`$\tfrac12x+1=-x+4\Rightarrow \tfrac32x=3\Rightarrow x=2$, $y=2$: $(2,2)$.`,
    r`$y=-x+6$, $y=2x$; $2x=-x+6\Rightarrow x=2$, $y=4$: $(2,4)$.`,
    r`$y=-2x+3$, $y=x-3$; $x=2$, $y=-1$: $(2,-1)$.`,
    r`None --- equal slopes, different intercepts (parallel).`,
    r`Infinitely many --- $3x+3y=6$ simplifies to $y=-x+2$ (same line).`,
    r`$-2x+5=x-1\Rightarrow x=2$, $y=1$: $(2,1)$.`,
    r`$2d+3=5d\Rightarrow d=1$ km, cost $\$5$.`,
    r`$4+1=5\ \checkmark$, $2(4)-1=7\ \checkmark$ --- yes.`,
    r`$2x-2=4\Rightarrow x=3$: $(3,4)$.`,
    r`(a)~same line $\Rightarrow$ infinitely many; (b)~parallel $\Rightarrow$ no solution.`,
  ],
},
{
  code: "1.3", unit: "1: Linear Systems", title: "Solving by Substitution",
  intro: r`\textbf{Substitution} solves a system algebraically: isolate one variable, then replace it in the other equation.`,
  ideas: [
    r`\textbf{Isolate} one variable (easiest when a coefficient is $1$).`,
    r`\textbf{Substitute} that expression into the \emph{other} equation and solve for one variable.`,
    r`\textbf{Back-substitute} to find the other variable; write the answer as $(x,y)$.`,
    r`A true statement like $2=2$ means \textbf{infinitely many} solutions; a false one like $0=3$ means \textbf{none}.`,
  ],
  examples: [
    { t: "A variable already isolated", body: r`Solve: $y=2x$ and $x+y=9$.
\soln Substitute $y=2x$: $x+2x=9\Rightarrow 3x=9\Rightarrow x=3$, so $y=6$. Solution $(3,6)$.` },
    { t: "Substitute and simplify", body: r`Solve: $y=x+1$ and $2x+y=7$.
\soln $2x+(x+1)=7\Rightarrow 3x+1=7\Rightarrow x=2$, $y=3$. Solution $(2,3)$.` },
    { t: "Isolating from $x=$", body: r`Solve: $x=y-2$ and $3x+y=10$.
\soln $3(y-2)+y=10\Rightarrow 4y-6=10\Rightarrow y=4$, $x=2$. Solution $(2,4)$.` },
    { t: "Isolate first", body: r`Solve: $x+y=5$ and $2x-y=4$.
\soln From the first, $y=5-x$. Then $2x-(5-x)=4\Rightarrow 3x-5=4\Rightarrow x=3$, $y=2$. Solution $(3,2)$.` },
    { t: "Larger coefficients", body: r`Solve: $2x+y=7$ and $3x-2y=0$.
\soln $y=7-2x$. Then $3x-2(7-2x)=0\Rightarrow 3x-14+4x=0\Rightarrow 7x=14\Rightarrow x=2$, $y=3$. Solution $(2,3)$.` },
    { t: "Infinitely many", body: r`Solve: $y=2x-1$ and $4x-2y=2$.
\soln $4x-2(2x-1)=2\Rightarrow 4x-4x+2=2\Rightarrow 2=2$. Always true $\Rightarrow$ \textbf{infinitely many solutions}.` },
    { t: "No solution", body: r`Solve: $y=3x+2$ and $6x-2y=1$.
\soln $6x-2(3x+2)=1\Rightarrow 6x-6x-4=1\Rightarrow -4=1$. False $\Rightarrow$ \textbf{no solution}.` },
    { t: "Word problem", body: r`Two numbers have a sum of $20$ and a difference of $4$. Find them.
\soln $x+y=20$, $x-y=4$. From the second, $x=y+4$; then $(y+4)+y=20\Rightarrow 2y=16\Rightarrow y=8$, $x=12$. The numbers are $12$ and $8$.` },
    { t: "Multi-step with check (harder)", body: r`Solve: $x-3y=1$ and $2x+y=9$.
\soln $x=1+3y$. Then $2(1+3y)+y=9\Rightarrow 2+7y=9\Rightarrow y=1$, $x=4$. Check: $4-3(1)=1\ \checkmark$, $2(4)+1=9\ \checkmark$. Solution $(4,1)$.` },
  ],
  questions: [
    { ask: r`Solve by substitution: $y=3x$ and $x+y=8$.`, ws: "2.4cm" },
    { ask: r`Solve by substitution: $y=x-3$ and $x+y=7$.`, ws: "2.4cm" },
    { ask: r`Solve by substitution: $x=2y$ and $3x-y=10$.`, ws: "2.4cm" },
    { ask: r`Solve by substitution: $x+y=10$ and $y=x+2$.`, ws: "2.4cm" },
    { ask: r`Solve by substitution: $2x+y=5$ and $y=x-1$.`, ws: "2.4cm" },
    { ask: r`Solve by substitution: $x-y=3$ and $2x+y=9$.`, ws: "2.6cm" },
    { ask: r`Solve by substitution: $y=2x+1$ and $3x+y=11$.`, ws: "2.4cm" },
    { ask: r`Solve: $y=4-x$ and $2x+2y=8$. How many solutions?`, ws: "2.4cm" },
    { ask: r`Solve: $y=2x$ and $4x-2y=3$. How many solutions?`, ws: "2.4cm" },
    { ask: r`Two numbers have a sum of $30$, and one is twice the other. Find them.`, ws: "2.6cm" },
    { ask: r`Solve by substitution: $3x-y=7$ and $y=x+1$.`, ws: "2.4cm" },
    { ask: r`Solve by substitution: $x+2y=8$ and $x=y+2$.`, ws: "2.6cm" },
    { ask: r`A jar of $12$ coins (dimes and quarters) is worth \$2.10. How many of each?`, ws: "3.2cm", challenge: true },
  ],
  answers: [
    r`$x+3x=8\Rightarrow x=2$, $y=6$: $(2,6)$.`,
    r`$2x-3=7\Rightarrow x=5$, $y=2$: $(5,2)$.`,
    r`$6y-y=10\Rightarrow y=2$, $x=4$: $(4,2)$.`,
    r`$2x+2=10\Rightarrow x=4$, $y=6$: $(4,6)$.`,
    r`$2x+x-1=5\Rightarrow x=2$, $y=1$: $(2,1)$.`,
    r`$x=y+3$; $2(y+3)+y=9\Rightarrow y=1$, $x=4$: $(4,1)$.`,
    r`$5x+1=11\Rightarrow x=2$, $y=5$: $(2,5)$.`,
    r`$2x+2(4-x)=8\Rightarrow 8=8$: infinitely many.`,
    r`$4x-4x=3\Rightarrow 0=3$: no solution.`,
    r`$x=2y$, $x+y=30\Rightarrow 3y=30\Rightarrow y=10$, $x=20$.`,
    r`$3x-(x+1)=7\Rightarrow x=4$, $y=5$: $(4,5)$.`,
    r`$(y+2)+2y=8\Rightarrow y=2$, $x=4$: $(4,2)$.`,
    r`$d+q=12$, $0.10d+0.25q=2.10\Rightarrow 0.15q=0.90\Rightarrow q=6$, $d=6$.`,
  ],
},
{
  code: "1.4", unit: "1: Linear Systems", title: "Solving by Elimination",
  intro: r`\textbf{Elimination} adds or subtracts the equations so that one variable cancels.`,
  ideas: [
    r`Line the equations up as $Ax+By=C$.`,
    r`If a variable's coefficients are \emph{opposites}, \textbf{add}; if they are \emph{equal}, \textbf{subtract}.`,
    r`If neither matches, \textbf{multiply} one (or both) equations to create a matching pair first.`,
    r`Solve for the remaining variable, then back-substitute.`,
  ],
  examples: [
    { t: "Add to eliminate", body: r`Solve: $x+y=10$ and $x-y=4$.
\soln Add: $2x=14\Rightarrow x=7$; then $7+y=10\Rightarrow y=3$. Solution $(7,3)$.` },
    { t: "Add (opposite $y$)", body: r`Solve: $2x+y=7$ and $x-y=2$.
\soln Add: $3x=9\Rightarrow x=3$; then $3-y=2\Rightarrow y=1$. Solution $(3,1)$.` },
    { t: "Opposite coefficients", body: r`Solve: $3x+2y=12$ and $3x-2y=0$.
\soln Add: $6x=12\Rightarrow x=2$; then $6+2y=12\Rightarrow y=3$. Solution $(2,3)$.` },
    { t: "Multiply one equation", body: r`Solve: $2x+y=5$ and $x+3y=10$.
\soln Multiply the first by $3$: $6x+3y=15$. Subtract the second: $5x=5\Rightarrow x=1$; then $y=3$. Solution $(1,3)$.` },
    { t: "Multiply both equations", body: r`Solve: $2x+3y=7$ and $3x+2y=8$.
\soln $\times3$ and $\times2$: $6x+9y=21$ and $6x+4y=16$. Subtract: $5y=5\Rightarrow y=1$; then $x=2$. Solution $(2,1)$.` },
    { t: "Infinitely many", body: r`Solve: $4x-2y=2$ and $2x-y=1$.
\soln Multiply the second by $2$: $4x-2y=2$ --- identical to the first. \textbf{Infinitely many solutions}.` },
    { t: "No solution", body: r`Solve: $x+y=3$ and $2x+2y=8$.
\soln Multiply the first by $2$: $2x+2y=6$, but the second says $2x+2y=8$. Since $6\neq8$, \textbf{no solution}.` },
    { t: "Word problem", body: r`Two adults and three children pay \$31; one adult and two children pay \$18. Find each price.
\soln $2a+3c=31$, $a+2c=18$. Multiply the second by $2$: $2a+4c=36$. Subtract the first: $c=5$, then $a=8$. Adult \$8, child \$5.` },
    { t: "Multiply both (harder)", body: r`Solve: $3x+2y=4$ and $2x+5y=-1$.
\soln $\times5$ and $\times2$: $15x+10y=20$ and $4x+10y=-2$. Subtract: $11x=22\Rightarrow x=2$; then $6+2y=4\Rightarrow y=-1$. Solution $(2,-1)$.` },
  ],
  questions: [
    { ask: r`Solve by elimination: $x+y=8$ and $x-y=2$.`, ws: "2.4cm" },
    { ask: r`Solve by elimination: $2x+y=9$ and $x-y=0$.`, ws: "2.4cm" },
    { ask: r`Solve by elimination: $x+2y=7$ and $x-2y=1$.`, ws: "2.4cm" },
    { ask: r`Solve by elimination: $3x+y=10$ and $x+y=4$.`, ws: "2.4cm" },
    { ask: r`Solve by elimination: $2x+3y=12$ and $2x-y=4$.`, ws: "2.6cm" },
    { ask: r`Solve by elimination: $x+3y=9$ and $2x+y=8$.`, ws: "2.6cm" },
    { ask: r`Solve by elimination: $3x+2y=7$ and $5x+2y=11$.`, ws: "2.4cm" },
    { ask: r`Solve by elimination: $2x+5y=1$ and $3x-5y=14$.`, ws: "2.4cm" },
    { ask: r`Solve: $2x-y=3$ and $4x-2y=6$. How many solutions?`, ws: "2.4cm" },
    { ask: r`Solve: $x+y=5$ and $2x+2y=12$. How many solutions?`, ws: "2.4cm" },
    { ask: r`Three pens and two erasers cost \$13; one pen and two erasers cost \$7. Find each price.`, ws: "2.8cm" },
    { ask: r`Solve by elimination: $4x+3y=10$ and $2x+y=4$.`, ws: "2.6cm" },
    { ask: r`Solve by elimination: $3x+4y=5$ and $2x+3y=4$.`, ws: "3.0cm", challenge: true },
  ],
  answers: [
    r`Add: $2x=10\Rightarrow x=5$, $y=3$: $(5,3)$.`,
    r`Add: $3x=9\Rightarrow x=3$, $y=3$: $(3,3)$.`,
    r`Add: $2x=8\Rightarrow x=4$, $y=1.5$: $(4,1.5)$.`,
    r`Subtract: $2x=6\Rightarrow x=3$, $y=1$: $(3,1)$.`,
    r`Subtract: $4y=8\Rightarrow y=2$, $x=3$: $(3,2)$.`,
    r`$\times2$ first, subtract: $5y=10\Rightarrow y=2$, $x=3$: $(3,2)$.`,
    r`Subtract: $2x=4\Rightarrow x=2$, $y=0.5$: $(2,0.5)$.`,
    r`Add: $5x=15\Rightarrow x=3$, $y=-1$: $(3,-1)$.`,
    r`Infinitely many (second $=2\times$ first).`,
    r`No solution ($2x+2y$ can't equal both $10$ and $12$).`,
    r`Subtract: $2\text{ pens}=6\Rightarrow$ pen \$3, eraser \$2.`,
    r`$\times2$ second, subtract: $y=2$, $x=1$: $(1,2)$.`,
    r`$\times3,\times4$: $9x+12y=15$, $8x+12y=16$; subtract $x=-1$, $y=2$: $(-1,2)$.`,
  ],
},
{
  code: "1.5", unit: "1: Linear Systems", title: "Solving Problems with Linear Systems",
  intro: r`Real problems become systems once you \textbf{define two variables} and write \textbf{two equations}.`,
  ideas: [
    r`Let each unknown be a variable; state clearly what each represents.`,
    r`Translate the two conditions into two equations.`,
    r`Solve by substitution or elimination --- whichever is cleaner.`,
    r`\textbf{Answer in words} and check the numbers against the problem.`,
  ],
  examples: [
    { t: "Sum and difference", body: r`Two numbers have a sum of $25$ and a difference of $7$. Find them.
\soln $x+y=25$, $x-y=7$. Add: $2x=32\Rightarrow x=16$, $y=9$. The numbers are $16$ and $9$.` },
    { t: "Tickets", body: r`Adult tickets cost \$10, child \$6. $200$ tickets sold for \$1640. How many of each?
\soln $a+c=200$, $10a+6c=1640$. From the first $c=200-a$: $10a+6(200-a)=1640\Rightarrow 4a=440\Rightarrow a=110$, $c=90$.` },
    { t: "Coins", body: r`A box of $20$ coins (dimes and quarters) is worth \$3.65. How many of each?
\soln $d+q=20$, $0.10d+0.25q=3.65$. Sub $d=20-q$: $0.10(20-q)+0.25q=3.65\Rightarrow 0.15q=1.65\Rightarrow q=11$, $d=9$.` },
    { t: "Rectangle", body: r`A rectangle's length is $3$ more than its width and its perimeter is $26$. Find its dimensions.
\soln $l=w+3$, $2(l+w)=26\Rightarrow l+w=13$. Then $(w+3)+w=13\Rightarrow w=5$, $l=8$.` },
    { t: "Meal deal", body: r`Two burgers and three fries cost \$12; three burgers and one fry cost \$11. Find each price.
\soln $2b+3f=12$, $3b+f=11\Rightarrow f=11-3b$. Then $2b+3(11-3b)=12\Rightarrow -7b=-21\Rightarrow b=3$, $f=2$.` },
    { t: "Mixture", body: r`How much $40\%$ and $70\%$ acid makes $30$ L of $50\%$ acid?
\soln $x+y=30$, $0.40x+0.70y=15$. Sub $x=30-y$: $0.40(30-y)+0.70y=15\Rightarrow 0.30y=3\Rightarrow y=10$, $x=20$. ($20$ L of $40\%$, $10$ L of $70\%$.)` },
    { t: "Ages", body: r`Maria is four times as old as her son. In $5$ years she will be three times as old. Find their ages.
\soln $m=4s$ and $m+5=3(s+5)$. So $4s+5=3s+15\Rightarrow s=10$, $m=40$.` },
    { t: "Current", body: r`A canoe goes $12$ km downstream in $2$ h and $12$ km upstream in $3$ h. Find the canoe's speed and the current.
\soln Downstream speed $=6=c+w$; upstream $=4=c-w$. Add: $2c=10\Rightarrow c=5$ km/h, $w=1$ km/h.` },
    { t: "Revenue (harder)", body: r`A theatre charges \$12 (adult) and \$8 (student). One night $500$ people paid \$5200 total. How many of each?
\soln $a+s=500$, $12a+8s=5200$. Sub $s=500-a$: $12a+8(500-a)=5200\Rightarrow 4a=1200\Rightarrow a=300$, $s=200$.` },
  ],
  questions: [
    { ask: r`Two numbers have a sum of $40$ and a difference of $6$. Find them.`, ws: "2.6cm" },
    { ask: r`Adult tickets cost \$9 and child \$5. $150$ tickets sold for \$1090. How many of each?`, ws: "2.8cm" },
    { ask: r`A box of $25$ dimes and nickels is worth \$1.85. How many of each?`, ws: "2.8cm" },
    { ask: r`A rectangle's length is twice its width and its perimeter is $36$. Find its dimensions.`, ws: "2.6cm" },
    { ask: r`Three coffees and two muffins cost \$13; one coffee and two muffins cost \$7. Find each price.`, ws: "2.8cm" },
    { ask: r`How much $20\%$ and $50\%$ solution makes $60$ L of $30\%$ solution?`, ws: "3.0cm" },
    { ask: r`A father is three times as old as his daughter; in $10$ years he will be twice as old. Find their ages.`, ws: "2.8cm" },
    { ask: r`A plane flies $600$ km with the wind in $2$ h and $600$ km against it in $3$ h. Find the plane's speed and the wind.`, ws: "3.0cm" },
    { ask: r`The sum of two numbers is $50$; the larger is $8$ more than the smaller. Find them.`, ws: "2.4cm" },
    { ask: r`At a sale, $4$ shirts and $2$ hats cost \$70; $2$ shirts and $2$ hats cost \$50. Find each price.`, ws: "2.8cm" },
    { ask: r`A test has $20$ questions worth $1$ or $3$ marks each, totalling $46$ marks. How many of each?`, ws: "2.8cm" },
    { ask: r`Two angles are complementary (sum $90^\circ$) and one is $30^\circ$ larger. Find them.`, ws: "2.4cm" },
    { ask: r`A \$5000 investment is split between accounts paying $3\%$ and $5\%$, earning \$210 in interest. How much in each?`, ws: "3.2cm", challenge: true },
  ],
  answers: [
    r`$x+y=40$, $x-y=6\Rightarrow x=23$, $y=17$.`,
    r`$a+c=150$, $9a+5c=1090\Rightarrow a=85$, $c=65$.`,
    r`$d+n=25$, $0.10d+0.05n=1.85\Rightarrow d=12$, $n=13$.`,
    r`$l=2w$, $2(l+w)=36\Rightarrow w=6$, $l=12$.`,
    r`Subtract: $2$ coffees $=6\Rightarrow$ coffee \$3, muffin \$2.`,
    r`$x+y=60$, $0.2x+0.5y=18\Rightarrow y=20$ (50\%), $x=40$ (20\%).`,
    r`$f=3d$, $f+10=2(d+10)\Rightarrow d=10$, $f=30$.`,
    r`$p+w=300$, $p-w=200\Rightarrow p=250$ km/h, $w=50$ km/h.`,
    r`$x+y=50$, $x-y=8\Rightarrow x=29$, $y=21$.`,
    r`Subtract: $2$ shirts $=20\Rightarrow$ shirt \$10, hat \$15.`,
    r`$x+y=20$, $x+3y=46\Rightarrow y=13$ (3-mark), $x=7$ (1-mark).`,
    r`$x+y=90$, $x-y=30\Rightarrow x=60^\circ$, $y=30^\circ$.`,
    r`$x+y=5000$, $0.03x+0.05y=210\Rightarrow y=3000$ (5\%), $x=2000$ (3\%).`,
  ],
},
{
  code: "1.6", unit: "1: Linear Systems", title: "Number of Solutions",
  intro: r`A linear system has \textbf{one}, \textbf{no}, or \textbf{infinitely many} solutions --- you can tell which by comparing slopes and intercepts.`,
  ideas: [
    r`\textbf{Different slopes} $\Rightarrow$ exactly \textbf{one} solution (lines cross once).`,
    r`\textbf{Same slope, different intercept} $\Rightarrow$ \textbf{no} solution (parallel).`,
    r`\textbf{Same slope and same intercept} $\Rightarrow$ \textbf{infinitely many} (one line).`,
    r`For $Ax+By=C$ form, compare the ratios $\tfrac{A_1}{A_2}$, $\tfrac{B_1}{B_2}$, $\tfrac{C_1}{C_2}$.`,
  ],
  examples: [
    { t: "Different slopes", body: r`How many solutions: $y=2x+1$ and $y=3x-2$?
\soln Slopes $2$ and $3$ differ, so the lines cross once --- \textbf{one solution}.` },
    { t: "Parallel", body: r`How many solutions: $y=2x+1$ and $y=2x-4$?
\soln Equal slope ($2$), different intercepts $\Rightarrow$ parallel $\Rightarrow$ \textbf{no solution}.` },
    { t: "Coincident", body: r`How many solutions: $y=2x+1$ and $4x-2y=-2$?
\soln Rearrange the second: $4x-2y=-2\Rightarrow y=2x+1$ --- the same line $\Rightarrow$ \textbf{infinitely many}.` },
    { t: "Comparing ratios", body: r`How many solutions: $2x+3y=6$ and $4x+6y=12$?
\soln $\tfrac{2}{4}=\tfrac{3}{6}=\tfrac{6}{12}=\tfrac12$: all ratios match $\Rightarrow$ same line $\Rightarrow$ \textbf{infinitely many}.` },
    { t: "Equal A,B ratios but not C", body: r`How many solutions: $2x+3y=6$ and $4x+6y=7$?
\soln $\tfrac{2}{4}=\tfrac{3}{6}=\tfrac12$ but $\tfrac{6}{7}\neq\tfrac12$ $\Rightarrow$ parallel $\Rightarrow$ \textbf{no solution}.` },
    { t: "One solution (standard form)", body: r`How many solutions: $x-y=1$ and $x+y=5$? Solve it.
\soln Slopes $1$ and $-1$ differ $\Rightarrow$ one solution. Add: $2x=6\Rightarrow x=3$, $y=2$: $(3,2)$.` },
    { t: "Find $k$ for no solution", body: r`For what $k$ does $y=kx+2$ and $y=3x-1$ have no solution?
\soln Parallel (no solution) needs equal slopes and different intercepts: $k=3$ (intercepts $2\neq-1$).` },
    { t: "Condition for one solution", body: r`For what $k$ does $2x+ky=4$ and $x+2y=3$ have exactly one solution?
\soln Slopes are $-\tfrac{2}{k}$ and $-\tfrac12$. They differ unless $-\tfrac{2}{k}=-\tfrac12\Rightarrow k=4$. So \textbf{one solution for every $k\neq4$}.` },
    { t: "Full analysis (harder)", body: r`For what value of $k$ does $kx+3y=6$ and $2x+y=4$ have no solution?
\soln Line 2 has slope $-2$; line 1 has slope $-\tfrac{k}{3}$. Parallel when $-\tfrac{k}{3}=-2\Rightarrow k=6$. Check $k=6$: $6x+3y=6\Rightarrow 2x+y=2$, different from $2x+y=4$, so truly parallel. \textbf{No solution when $k=6$}; one solution otherwise.` },
  ],
  questions: [
    { ask: r`How many solutions: $y=4x-1$ and $y=2x+3$? Explain.`, ws: "2.2cm" },
    { ask: r`How many solutions: $y=-x+5$ and $y=-x+1$? Explain.`, ws: "2.2cm" },
    { ask: r`How many solutions: $y=3x-2$ and $6x-2y=4$? Explain.`, ws: "2.4cm" },
    { ask: r`How many solutions: $x+2y=4$ and $2x+4y=8$? Explain.`, ws: "2.4cm" },
    { ask: r`How many solutions: $x+2y=4$ and $2x+4y=10$? Explain.`, ws: "2.4cm" },
    { ask: r`How many solutions: $3x-y=2$ and $x+y=6$? Solve if possible.`, ws: "2.6cm" },
    { ask: r`For what value of $k$ is $y=kx-3$ parallel to $y=5x+1$ (no solution)?`, ws: "2.2cm" },
    { ask: r`For what value of $k$ does $y=kx+4$ and $y=2x+4$ have infinitely many solutions?`, ws: "2.2cm" },
    { ask: r`Classify (one/none/infinite): $2x+y=3$ and $4x+2y=6$.`, ws: "2.2cm" },
    { ask: r`Classify: $5x+2y=10$ and $5x+2y=4$.`, ws: "2.2cm" },
    { ask: r`A system of two lines has slopes $-3$ and $-3$ and the same $y$-intercept. How many solutions?`, ws: "2.2cm" },
    { ask: r`Write a system that has exactly one solution at $(1,2)$.`, ws: "2.6cm" },
    { ask: r`For what value of $k$ does $kx+2y=8$ and $3x+y=5$ have no solution?`, ws: "3.0cm", challenge: true },
  ],
  answers: [
    r`One --- slopes $4$ and $2$ differ.`,
    r`None --- same slope $-1$, different intercepts (parallel).`,
    r`Infinitely many --- $6x-2y=4$ simplifies to $y=3x-2$.`,
    r`Infinitely many --- second is $2\times$ first (same line).`,
    r`None --- same slope but $8\times2=16\neq10$ (parallel).`,
    r`One; add to get $4x=8\Rightarrow x=2$, $y=4$: $(2,4)$.`,
    r`$k=5$.`,
    r`$k=2$.`,
    r`Infinitely many (second $=2\times$ first).`,
    r`None (parallel, different constants).`,
    r`Infinitely many (identical line).`,
    r`e.g. $x+y=3$ and $x-y=-1$ (any two lines crossing at $(1,2)$).`,
    r`Slope of line 2 is $-3$; parallel needs $-\tfrac{k}{2}=-3\Rightarrow k=6$ (then lines differ): no solution when $k=6$.`,
  ],
},
];
