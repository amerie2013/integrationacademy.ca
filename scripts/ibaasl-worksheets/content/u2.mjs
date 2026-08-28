// IB AA SL worksheets — Unit 2: Functions. Original problems.
// 9 worked examples + 13 practice questions per worksheet.
const r = String.raw;
const U = "2: Functions";

export default [
  {
    code: "2.1", unit: U, title: "Function Basics: Domain, Range and Notation",
    intro: r`A function assigns exactly one output to every input; its domain and range describe what inputs and outputs are possible.`,
    ideas: [
      r`Domain restrictions: avoid division by zero and square roots of negatives.`,
      r`Vertical line test: a graph is a function iff no vertical line crosses it more than once.`,
      r`Range: think about the smallest and largest outputs the function can actually reach.`,
    ],
    examples: [
      { t: "Evaluate a function", body: r`Given $f(x)=3x^2-4x+1$, find $f(-2)$.\soln
$3(4)-4(-2)+1=12+8+1$.\\[3pt]\textbf{Conclusion:} $f(-2)=21$.` },
      { t: "Domain with a root", body: r`Find the domain of $f(x)=\sqrt{2x-8}$.\soln
$2x-8\geq0\Rightarrow x\geq4$.\\[3pt]\textbf{Conclusion:} domain is $x\geq4$.` },
      { t: "Domain with a fraction", body: r`Find the domain of $f(x)=\dfrac{5}{x^2-9}$.\soln
$x^2-9\neq0\Rightarrow x\neq\pm3$.\\[3pt]\textbf{Conclusion:} all real $x$ except $3$ and $-3$.` },
      { t: "Range from a transformed root", body: r`Find the range of $f(x)=-\sqrt{x-2}+5$.\soln
Domain is $x\geq2$; at $x=2$, $f=5$ (largest value, since $-\sqrt{\phantom x}$ falls as $x$ grows).\\[3pt]\textbf{Conclusion:} range is $f(x)\leq5$.` },
      { t: "Combined domain restrictions", body: r`Find the domain of $f(x)=\dfrac{\sqrt{x+2}}{x-3}$.\soln
Need $x+2\geq0\Rightarrow x\geq-2$, and also $x-3\neq0\Rightarrow x\neq3$.\\[3pt]\textbf{Conclusion:} domain is $x\geq-2$, $x\neq3$.` },
      { t: "Range on a restricted domain", body: r`Find the range of $f(x)=x^2-4x+3$ for $0\leq x\leq5$.\soln
\textbf{Step 1:} Vertex at $x=2$ (inside the domain): $f(2)=4-8+3=-1$ (minimum).\\[3pt]
\textbf{Step 2:} Check endpoints: $f(0)=3$, $f(5)=25-20+3=8$.\\[3pt]\textbf{Conclusion:} range is $-1\leq f(x)\leq8$.` },
      { t: "Application --- domain from a real constraint", body: r`A rectangle's area is $A(x)=x(20-x)$, where $x$ is one side and $20-x$ is the other (from a fixed perimeter). State the domain that makes physical sense.\soln
Both sides must be positive: $x>0$ and $20-x>0$.\\[3pt]\textbf{Conclusion:} domain is $0<x<20$.` },
      { t: "Testing a set of ordered pairs", body: r`Determine whether $\{(1,2),(2,3),(1,5)\}$ represents a function.\soln
The input $x=1$ appears twice, with two different outputs ($2$ and $5$).\\[3pt]\textbf{Conclusion:} not a function --- one input must give exactly one output.` },
      { t: "Range of a semicircle function", body: r`Find the range of $f(x)=-\sqrt{16-x^2}$ (domain $-4\leq x\leq4$).\soln
This is the lower half of a circle of radius 4; $f$ ranges from $-4$ (at $x=0$) up to $0$ (at $x=\pm4$).\\[3pt]\textbf{Conclusion:} range is $-4\leq f(x)\leq0$.` },
    ],
    questions: [
      { ask: r`Given $f(x)=2x^2+5x-1$, find $f(3)$.` },
      { ask: r`Find the domain of $f(x)=\sqrt{5-x}$.` },
      { ask: r`Find the domain of $f(x)=\dfrac{4}{2x+6}$.` },
      { ask: r`Find the domain of $f(x)=\dfrac{1}{\sqrt{x-1}}$ (careful: the root cannot be zero either).` },
      { ask: r`Find the range of $f(x)=\sqrt{x+3}-1$.` },
      { ask: r`Determine whether $x^2+y^2=25$ passes the vertical line test, and explain your reasoning.` },
      { ask: r`Find the domain of $f(x)=\dfrac{x+2}{x^2-4}$ (factor the denominator first).` },
      { ask: r`Find the domain of $f(x)=\dfrac{\sqrt{x-1}}{x-5}$.` },
      { ask: r`Find the range of $f(x)=x^2+2x-3$ for $-3\leq x\leq2$.` },
      { ask: r`Determine whether $\{(2,4),(3,4),(2,7)\}$ represents a function, and explain.` },
      { ask: r`Find the range of $f(x)=-2\sqrt{x}+7$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Find the range of $f(x)=\sqrt{25-x^2}$.`, challenge: true, ws: "3.2cm" },
      { ask: r`A tank's volume model is $V(t)=100-4t$ litres for a draining tank starting at 100 L; state the domain that makes physical sense.`, challenge: true, ws: "3cm" },
    ],
    answers: [
      r`$18+15-1=32$`, r`$x\leq5$`, r`$x\neq-3$`, r`$x>1$`, r`$f(x)\geq-1$`,
      r`Fails: a vertical line at $x=0$ meets the circle at both $y=5$ and $y=-5$`,
      r`$x^2-4=(x-2)(x+2)$; domain is all real $x$ except $2$ and $-2$`,
      r`need $x\geq1$ and $x\neq5$: domain is $x\geq1,x\neq5$`,
      r`vertex at $x=-1$ (inside domain): $f(-1)=-4$ (min); endpoints $f(-3)=0$, $f(2)=5$; range $-4\leq f(x)\leq5$`,
      r`Not a function --- $x=2$ gives two different outputs, $4$ and $7$`,
      r`domain $x\geq0$; at $x=0$, $f=7$ (max); as $x$ grows, $f\to-\infty$: range $f(x)\leq7$`,
      r`upper half of a circle radius 5; range $0\leq f(x)\leq5$`,
      r`tank can't hold negative volume or run past empty: $0\leq t\leq25$`,
    ],
  },
  {
    code: "2.2", unit: U, title: "Transformations of Functions",
    intro: r`Every transformed graph is a parent function shifted, stretched, or reflected.`,
    ideas: [
      r`$y=f(x)+k$ shifts vertically; $y=f(x+k)$ shifts horizontally (opposite the sign).`,
      r`$y=af(x)$ stretches vertically by $a$; $y=f(bx)$ stretches horizontally by $\tfrac1b$.`,
      r`$y=-f(x)$ reflects in the $x$-axis; $y=f(-x)$ reflects in the $y$-axis.`,
    ],
    examples: [
      { t: "Describe a transformation", body: r`Describe the transformation from $y=x^2$ to $y=(x+4)^2-6$.\soln
Shift left 4, down 6; new vertex $(-4,-6)$.\\[3pt]\textbf{Conclusion:} left 4, down 6.` },
      { t: "Vertical stretch and reflection", body: r`Describe $y=-3x^2$ as a transformation of $y=x^2$.\soln
Factor $3$ stretches vertically; negative sign reflects in the $x$-axis.\\[3pt]\textbf{Conclusion:} vertically stretched by 3, reflected in the x-axis.` },
      { t: "Root function shift", body: r`Describe the transformation from $y=\sqrt x$ to $y=\sqrt{x-5}+2$.\soln
Right 5, up 2.\\[3pt]\textbf{Conclusion:} right 5, up 2.` },
      { t: "Horizontal compression", body: r`Given $f(x)=x^2$, describe $y=f(3x)$.\soln
$y=(3x)^2=9x^2$ --- horizontal compression by $\tfrac13$ (equivalently vertical stretch by 9).\\[3pt]\textbf{Conclusion:} compressed horizontally by $\tfrac13$.` },
      { t: "Combining a stretch, shift, and reflection", body: r`Describe $y=-2(x-3)^2+5$ as transformations of $y=x^2$, in order.\soln
Stretch vertically by 2, reflect in the $x$-axis, then shift right 3 and up 5.\\[3pt]\textbf{Conclusion:} reflected, stretched by 2, shifted right 3 up 5; vertex $(3,5)$.` },
      { t: "Transformation of a root function with compression", body: r`Given $f(x)=\sqrt x$, describe $y=f(4x)-3$.\soln
$y=\sqrt{4x}-3=2\sqrt x-3$ --- equivalent to a vertical stretch by 2 combined with a shift down 3.\\[3pt]\textbf{Conclusion:} vertical stretch by 2 (from the horizontal compression), shifted down 3.` },
      { t: "Tracking an intercept through transformations", body: r`A graph $y=f(x)$ has an $x$-intercept at $x=5$. Find the $x$-intercept of $y=f(2x-4)$ (factor the input first: $f(2(x-2))$).\soln
The transformation is a horizontal compression by $\tfrac12$ then a shift right 2. The original root at $x=5$ maps: first compress ($x=2.5$), then shift right 2.\\[3pt]\textbf{Conclusion:} new root at $x=4.5$.` },
      { t: "Application --- modelling a shifted signal", body: r`A sensor's baseline reading is $y=f(t)$. A second, recalibrated sensor reads $3$ units higher and lags behind by $2$ seconds. Write its model in terms of $f$.\soln
"Lags behind by 2 seconds" means the same reading happens 2 seconds later --- a shift right by 2. "3 units higher" is a vertical shift up 3.\\[3pt]\textbf{Conclusion:} the second sensor's model is $y=f(t-2)+3$.` },
      { t: "Reversing a transformation to find the original function", body: r`A graph $y=2f(x+1)-4$ has a maximum at $(3,6)$. Find the coordinates of the corresponding maximum on $y=f(x)$.\soln
\textbf{Step 1:} Undo the vertical stretch/shift: original $y$-value satisfies $6=2y-4\Rightarrow y=5$.\\[3pt]
\textbf{Step 2:} Undo the horizontal shift: $x+1=3\Rightarrow x=2$.\\[3pt]\textbf{Conclusion:} the maximum on $y=f(x)$ is at $(2,5)$. ✓` },
    ],
    questions: [
      { ask: r`Describe the transformation from $y=x^2$ to $y=(x-3)^2+7$.` },
      { ask: r`Describe $y=\tfrac12x^2$ as a transformation of $y=x^2$.` },
      { ask: r`Describe $y=\sqrt{-x}$ as a transformation of $y=\sqrt x$.` },
      { ask: r`Describe $y=-x^2-5$ as two transformations of $y=x^2$.` },
      { ask: r`Given $f(x)=x^2$, sketch and describe $y=f(2x)$.`, grid: true },
      { ask: r`A graph $y=f(x)$ has a minimum at $(3,-2)$. State the minimum point of $y=f(x-1)+4$.` },
      { ask: r`A graph $y=f(x)$ has a root at $x=6$. State the corresponding root of $y=f(x+2)$.` },
      { ask: r`Describe $y=3(x+2)^2-4$ as transformations of $y=x^2$, in order.` },
      { ask: r`A graph $y=f(x)$ has a root at $x=8$. Find the root of $y=f(3x-6)$ (factor first).` },
      { ask: r`A graph $y=3f(x-2)+1$ has a minimum at $(5,10)$. Find the corresponding minimum on $y=f(x)$.` },
      { ask: r`A graph $y=f(x)$ has a maximum at $(2,5)$. State the coordinates of the corresponding point on $y=-2f(x-3)$.`, challenge: true, ws: "3.2cm" },
      { ask: r`A city's rainfall model is $y=f(m)$ by month. A neighbouring city gets 20\% more rain and its wet season arrives 1 month later. Write its model in terms of $f$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Given $f(x)=\sqrt x$, describe $y=f(9x)+2$ as a single vertical stretch plus a shift.`, challenge: true, ws: "3cm" },
    ],
    answers: [
      r`right 3, up 7`, r`vertical compression by $\tfrac12$`, r`reflection in the y-axis`,
      r`reflected in the x-axis, then shifted down 5`,
      r`$y=(2x)^2=4x^2$, horizontal compression by $\tfrac12$`,
      r`$(4,2)$`, r`$x=4$`,
      r`stretched vertically by 3, shifted left 2 and down 4; vertex $(-2,-4)$`,
      r`compress horizontally by $\tfrac13$ then shift right 2: root at $x=8/3+2=14/3$`,
      r`undo stretch/shift: $10=3y+1\Rightarrow y=3$; undo horizontal shift: $x-2=5\Rightarrow x=7$; point $(7,3)$`,
      r`Shift right 3: $x=5$; reflect and stretch by 2: $y=-2(5)=-10$: point $(5,-10)$`,
      r`$y=1.2f(m-1)$`,
      r`$y=\sqrt{9x}+2=3\sqrt x+2$: vertical stretch by 3, shifted up 2`,
    ],
  },
  {
    code: "2.3", unit: U, title: "Composite and Inverse Functions",
    intro: r`Composite functions chain two functions; inverse functions undo a function completely.`,
    ideas: [
      r`$(f\circ g)(x)=f(g(x))$ --- evaluate the inside function first.`,
      r`To find $f^{-1}$: swap $x$ and $y$ in $y=f(x)$, then solve for $y$.`,
      r`$f$ and $f^{-1}$ are reflections of each other in $y=x$; $f$ needs a restricted domain to have an inverse if it fails the horizontal line test.`,
    ],
    examples: [
      { t: "Evaluate a composite", body: r`Given $f(x)=3x-2$, $g(x)=x^2+1$, find $f(g(-1))$.\soln
$g(-1)=1+1=2$. $f(2)=3(2)-2$.\\[3pt]\textbf{Conclusion:} $f(g(-1))=4$.` },
      { t: "Find a composite expression", body: r`Given $f(x)=3x-2$, $g(x)=x^2+1$, find $(f\circ g)(x)$.\soln
$f(g(x))=3(x^2+1)-2=3x^2+3-2$.\\[3pt]\textbf{Conclusion:} $(f\circ g)(x)=3x^2+1$.` },
      { t: "Find an inverse", body: r`Find the inverse of $f(x)=4x+7$.\soln
$y=4x+7$; swap: $x=4y+7\Rightarrow y=\dfrac{x-7}{4}$.\\[3pt]\textbf{Conclusion:} $f^{-1}(x)=\dfrac{x-7}{4}$.` },
      { t: "Inverse of a restricted quadratic", body: r`Find the inverse of $f(x)=x^2-3$, restricted to $x\geq0$.\soln
$y=x^2-3$; swap: $x=y^2-3\Rightarrow y^2=x+3\Rightarrow y=\sqrt{x+3}$ (positive root, matching the restriction).\\[3pt]\textbf{Conclusion:} $f^{-1}(x)=\sqrt{x+3}$.` },
      { t: "Composite requiring domain awareness", body: r`Given $f(x)=\sqrt x$, $g(x)=x-5$, find the domain of $(f\circ g)(x)$.\soln
$(f\circ g)(x)=\sqrt{x-5}$, which requires $x-5\geq0$.\\[3pt]\textbf{Conclusion:} domain is $x\geq5$.` },
      { t: "Finding a function given its composite", body: r`Given $g(x)=2x+1$ and $(f\circ g)(x)=4x^2+4x+3$, find $f(x)$.\soln
Since $(f\circ g)(x)=f(2x+1)$, let $u=2x+1\Rightarrow x=\dfrac{u-1}2$. Substitute into $4x^2+4x+3$: after simplifying, this equals $u^2+2$.\\[3pt]\textbf{Conclusion:} $f(x)=x^2+2$. (Check: $f(2x+1)=(2x+1)^2+2=4x^2+4x+1+2=4x^2+4x+3$ ✓)` },
      { t: "Inverse of a rational function", body: r`Find the inverse of $f(x)=\dfrac{2x+1}{x-3}$.\soln
$y=\dfrac{2x+1}{x-3}$; swap: $x=\dfrac{2y+1}{y-3}\Rightarrow x(y-3)=2y+1\Rightarrow xy-3x=2y+1$.\\[3pt]
$xy-2y=3x+1\Rightarrow y(x-2)=3x+1\Rightarrow y=\dfrac{3x+1}{x-2}$.\\[3pt]\textbf{Conclusion:} $f^{-1}(x)=\dfrac{3x+1}{x-2}$.` },
      { t: "Composing a function with its own inverse", body: r`Given $f(x)=\dfrac{x-4}{2}$, verify that $f(f^{-1}(10))=10$ without finding $f^{-1}$'s formula.\soln
By definition, applying $f$ after $f^{-1}$ always returns the original input.\\[3pt]\textbf{Conclusion:} $f(f^{-1}(10))=10$ directly, no formula needed. ✓` },
      { t: "Domain restriction needed for an inverse to exist", body: r`Explain why $f(x)=(x-2)^2+1$ needs a restricted domain to have an inverse that is a function, and state a valid restriction.\soln
Without restriction, $f$ fails the horizontal line test (e.g.\ $f(1)=f(3)=2$).\\[3pt]\textbf{Conclusion:} restricting to $x\geq2$ (or $x\leq2$) makes $f$ one-to-one, so its inverse is then a function.` },
    ],
    questions: [
      { ask: r`Given $f(x)=x+6$, $g(x)=2x$, find $g(f(2))$.` },
      { ask: r`Given $f(x)=x+6$, $g(x)=2x$, find $(g\circ f)(x)$.` },
      { ask: r`Find the inverse of $f(x)=5x-3$.` },
      { ask: r`Find the inverse of $f(x)=\dfrac{x+4}{3}$.` },
      { ask: r`Find the inverse of $f(x)=x^2+2$, restricted to $x\leq0$.` },
      { ask: r`Verify that $f(x)=2x+6$ and $g(x)=\dfrac{x-6}{2}$ are inverses by computing both compositions.` },
      { ask: r`Given $f(x)=x-1$, $g(x)=x^2$, find $(g\circ f)(3)$ and $(f\circ g)(3)$, and note they differ.` },
      { ask: r`Given $f(x)=\sqrt{x}$, $g(x)=x+8$, find the domain of $(f\circ g)(x)$.` },
      { ask: r`Find the inverse of $f(x)=\dfrac{3x-2}{x+1}$.` },
      { ask: r`Explain why $f(x)=x^2-6x+5$ needs a restricted domain to have a function inverse, and state a valid restriction.` },
      { ask: r`Given $f(x)=2x-5$, find $f^{-1}(f(8))$ without computing $f^{-1}$'s formula, and explain why your shortcut works.`, challenge: true, ws: "3cm" },
      { ask: r`Given $g(x)=3x-2$ and $(f\circ g)(x)=9x^2-12x+7$, find $f(x)$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Given $f(x)=\dfrac{x}{x-1}$, find $f^{-1}(x)$ and verify $f^{-1}$ has the same rule as $f$ (i.e.\ $f$ is its own inverse).`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$f(2)=8$, $g(8)=16$`, r`$g(x+6)=2x+12$`, r`$f^{-1}(x)=\dfrac{x+3}{5}$`, r`$f^{-1}(x)=3x-4$`,
      r`$y=-\sqrt{x-2}$ (negative root, matching $x\leq0$)`,
      r`$f(g(x))=2\left(\tfrac{x-6}{2}\right)+6=x$; $g(f(x))=\tfrac{(2x+6)-6}{2}=x$: both confirm they're inverses`,
      r`$(g\circ f)(3)=g(2)=4$; $(f\circ g)(3)=f(9)=8$ --- different, showing composition order matters`,
      r`$\sqrt{x+8}$ requires $x+8\geq0$: domain $x\geq-8$`,
      r`$x(y+1)=3y-2\Rightarrow xy+x=3y-2\Rightarrow y(x-3)=-x-2\Rightarrow y=\dfrac{-x-2}{x-3}=\dfrac{x+2}{3-x}$`,
      r`vertex at $x=3$; $f$ fails the horizontal line test around it; restrict to $x\geq3$ (or $x\leq3$)`,
      r`$f^{-1}(f(8))=8$, since applying a function then its inverse always returns the original input`,
      r`let $u=3x-2\Rightarrow x=\tfrac{u+2}3$; substitute into $9x^2-12x+7$, simplifies to $u^2+3$: $f(x)=x^2+3$`,
      r`$y=\dfrac{x}{x-1}$; swap: $x=\dfrac{y}{y-1}\Rightarrow x(y-1)=y\Rightarrow xy-x=y\Rightarrow y(x-1)=x\Rightarrow y=\dfrac{x}{x-1}$ --- same rule, so $f=f^{-1}$`,
    ],
  },
  {
    code: "2.4", unit: U, title: "Linear and Quadratic Functions",
    intro: r`Vertex form reveals a parabola's turning point immediately.`,
    ideas: [
      r`Line through two points: $m=\dfrac{y_2-y_1}{x_2-x_1}$, then $y-y_1=m(x-x_1)$.`,
      r`Vertex form: $y=a(x-h)^2+k$, vertex $(h,k)$.`,
      r`Complete the square to convert $y=ax^2+bx+c$ into vertex form.`,
    ],
    examples: [
      { t: "Equation of a line", body: r`Find the equation of the line through $(-1,3)$ and $(4,18)$.\soln
$m=\dfrac{18-3}{4-(-1)}=\dfrac{15}{5}=3$. $y-3=3(x+1)\Rightarrow y=3x+6$.\\[3pt]\textbf{Conclusion:} $y=3x+6$.` },
      { t: "Complete the square", body: r`Convert $y=x^2-10x+18$ to vertex form.\soln
Half of $-10$ squared is $25$: $y=(x^2-10x+25)-25+18=(x-5)^2-7$.\\[3pt]\textbf{Conclusion:} $y=(x-5)^2-7$, vertex $(5,-7)$.` },
      { t: "Vertex form when $a\neq1$", body: r`Convert $y=2x^2+8x+3$ to vertex form.\soln
Factor 2 from the first two terms: $y=2(x^2+4x)+3=2(x^2+4x+4-4)+3=2(x+2)^2-8+3$.\\[3pt]\textbf{Conclusion:} $y=2(x+2)^2-5$.` },
      { t: "Build a quadratic from vertex and a point", body: r`Find the equation of a parabola with vertex $(-2,5)$ through $(1,-13)$.\soln
$y=a(x+2)^2+5$. Substitute $(1,-13)$: $-13=a(9)+5\Rightarrow a=-2$.\\[3pt]\textbf{Conclusion:} $y=-2(x+2)^2+5$.` },
      { t: "Line through vertex and a root", body: r`A parabola has vertex $(3,-4)$ and an $x$-intercept at $x=5$. Find its equation.\soln
$y=a(x-3)^2-4$. Substitute $(5,0)$: $0=a(4)-4\Rightarrow a=1$.\\[3pt]\textbf{Conclusion:} $y=(x-3)^2-4$.` },
      { t: "Finding where a line meets a parabola", body: r`Find the intersection point(s) of $y=x+1$ and $y=x^2-2x-3$.\soln
Set equal: $x+1=x^2-2x-3\Rightarrow x^2-3x-4=0\Rightarrow(x-4)(x+1)=0\Rightarrow x=4$ or $x=-1$.\\[3pt]\textbf{Conclusion:} intersections at $(4,5)$ and $(-1,0)$.` },
      { t: "Perpendicular line through a parabola's vertex", body: r`Find the equation of the line perpendicular to $y=2x+1$ passing through the vertex of $y=(x-3)^2+5$.\soln
Vertex is $(3,5)$. Perpendicular slope: $-\tfrac12$. Line: $y-5=-\tfrac12(x-3)$.\\[3pt]\textbf{Conclusion:} $y=-\tfrac12x+6.5$.` },
      { t: "Application --- maximizing revenue", body: r`A shop's weekly revenue is $R(p)=-4p^2+120p$, where $p$ is the price in dollars. Convert to vertex form and find the price that maximizes revenue.\soln
$R(p)=-4(p^2-30p)=-4(p^2-30p+225-225)=-4(p-15)^2+900$.\\[3pt]\textbf{Conclusion:} vertex $(15,900)$: maximum revenue \$900 at price \$15.` },
      { t: "Finding a quadratic from three points (via a system)", body: r`Find the equation $y=ax^2+bx+c$ of the parabola through $(0,1)$, $(1,4)$, $(2,11)$.\soln
\textbf{Step 1:} $(0,1)$ gives $c=1$.\\[3pt]
\textbf{Step 2:} $(1,4)$: $a+b+1=4\Rightarrow a+b=3$. $(2,11)$: $4a+2b+1=11\Rightarrow4a+2b=10\Rightarrow2a+b=5$.\\[3pt]
\textbf{Step 3:} Subtract: $a=2$, so $b=1$.\\[3pt]\textbf{Conclusion:} $y=2x^2+x+1$.` },
    ],
    questions: [
      { ask: r`Find the equation of the line through $(2,-1)$ and $(6,11)$.` },
      { ask: r`Convert $y=x^2+6x+2$ to vertex form.` },
      { ask: r`Convert $y=3x^2-12x+7$ to vertex form.` },
      { ask: r`State the vertex and direction of opening of $y=-\tfrac12(x-4)^2+9$.` },
      { ask: r`Find the equation of a parabola with vertex $(1,-4)$ through $(3,4)$.` },
      { ask: r`A ball's height is $h(t)=-4.9(t-1.5)^2+11.5$; find its maximum height and when it occurs.` },
      { ask: r`Convert $y=-2x^2+4x+1$ to vertex form.`, challenge: true, ws: "3cm" },
      { ask: r`Find the intersection point(s) of $y=2x-3$ and $y=x^2-4$.` },
      { ask: r`A parabola has vertex $(2,3)$ and an $x$-intercept at $x=5$. Find its equation.` },
      { ask: r`A company's profit is $P(x)=-3x^2+90x$ for $x$ units sold (in hundreds); convert to vertex form and find the maximizing quantity and max profit.` },
      { ask: r`Find the equation $y=ax^2+bx+c$ through $(0,2)$, $(1,7)$, $(2,16)$.`, challenge: true, ws: "3.4cm" },
      { ask: r`A parabola has $x$-intercepts at $x=2$ and $x=8$ and passes through $(5,-9)$. Find its equation in factored form, then convert to vertex form.`, challenge: true, ws: "3.4cm" },
      { ask: r`Find the equation of the line perpendicular to $y=-3x+2$ passing through the vertex of $y=(x+1)^2-6$.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$m=3$, $y=3x-7$`, r`$y=(x+3)^2-7$`, r`$y=3(x-2)^2-5$`, r`vertex $(4,9)$, opens downward`,
      r`$4=a(4)-4\Rightarrow a=2$: $y=2(x-1)^2-4$`, r`max height $11.5$ m at $t=1.5$ s`,
      r`$y=-2(x^2-2x)+1=-2(x-1)^2+2+1=-2(x-1)^2+3$`,
      r`$2x-3=x^2-4\Rightarrow x^2-2x-1=0\Rightarrow x=1\pm\sqrt2$; points $(1+\sqrt2,2\sqrt2-1)$ and $(1-\sqrt2,-2\sqrt2-1)$`,
      r`$0=a(3)^2+3\Rightarrow a=-\tfrac13$: $y=-\tfrac13(x-2)^2+3$`,
      r`$P(x)=-3(x-15)^2+675$: max profit \$675 (hundred-dollar units) at $x=15$`,
      r`$c=2$; $a+b=5$, $4a+2b=14\Rightarrow2a+b=7$; subtract: $a=2,b=3$: $y=2x^2+3x+2$`,
      r`$y=a(x-2)(x-8)$; at $x=5$: $-9=a(3)(-3)=-9a\Rightarrow a=1$: $y=(x-2)(x-8)=x^2-10x+16=(x-5)^2-9$`,
      r`vertex $(-1,-6)$; perpendicular slope $\tfrac13$; $y+6=\tfrac13(x+1)\Rightarrow y=\tfrac13x-\tfrac{17}3$`,
    ],
  },
  {
    code: "2.5", unit: U, title: "The Quadratic Formula and Discriminant",
    intro: r`The discriminant predicts how many real solutions a quadratic has before you finish solving it.`,
    ideas: [
      r`$x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$.`,
      r`$\Delta=b^2-4ac$: $\Delta>0$ two real roots, $\Delta=0$ one repeated root, $\Delta<0$ no real roots.`,
    ],
    examples: [
      { t: "Solve with the formula", body: r`Solve $3x^2-x-4=0$.\soln
$a=3,b=-1,c=-4$: $\Delta=1+48=49$. $x=\dfrac{1\pm7}{6}$.\\[3pt]\textbf{Conclusion:} $x=\dfrac43$ or $x=-1$.` },
      { t: "Nature of the roots", body: r`Determine the nature of the roots of $2x^2+3x+5=0$.\soln
$\Delta=9-40=-31<0$.\\[3pt]\textbf{Conclusion:} no real roots.` },
      { t: "Repeated root condition", body: r`Find $k$ so that $x^2-8x+k=0$ has a repeated root.\soln
$\Delta=0$: $64-4k=0\Rightarrow k=16$.\\[3pt]\textbf{Conclusion:} $k=16$.` },
      { t: "Application", body: r`A ball's height is $h(t)=-5t^2+18t+1$. Determine whether it ever reaches 20 m.\soln
Set $-5t^2+18t+1=20\Rightarrow-5t^2+18t-19=0$. $\Delta=324-380=-56<0$.\\[3pt]\textbf{Conclusion:} no real solution, so it never reaches 20 m.` },
      { t: "Solving using the discriminant to predict, then confirm", body: r`Show that $x^2-6x+9=0$ has a repeated root, and find it.\soln
$\Delta=36-36=0$, confirming a repeated root. $x=\dfrac{6\pm0}{2}=3$.\\[3pt]\textbf{Conclusion:} repeated root at $x=3$.` },
      { t: "Two-parameter repeated-root condition", body: r`Find both values of $m$ so that $x^2+mx+25=0$ has a repeated root.\soln
$\Delta=0$: $m^2-100=0\Rightarrow m=\pm10$.\\[3pt]\textbf{Conclusion:} $m=10$ or $m=-10$.` },
      { t: "Discriminant with a parameter inside a real scenario", body: r`A rectangle's area is $x^2+kx+9=25$ for side length $x$. Find the value(s) of $k$ for which exactly one value of $x$ solves this.\soln
Rearranged: $x^2+kx-16=0$. Exactly one solution requires $\Delta=0$: $k^2+64=0$ --- impossible for real $k$ (since $k^2\geq0$, $k^2+64>0$ always).\\[3pt]\textbf{Conclusion:} no real value of $k$ gives exactly one solution --- this equation always has two distinct real roots (one positive, one negative, since the constant term is negative). ✓` },
      { t: "Comparing two quadratics via discriminants", body: r`Determine which of $x^2-4x+5=0$ and $x^2-4x+3=0$ has real roots.\soln
First: $\Delta=16-20=-4<0$ (no real roots). Second: $\Delta=16-12=4>0$ (two real roots).\\[3pt]\textbf{Conclusion:} only the second equation has real roots.` },
      { t: "Application --- break-even analysis", body: r`A company's profit is $P(x)=-2x^2+40x-150$ (in \$1000s), for $x$ hundred units sold. Determine, using the discriminant, whether the company can ever break even ($P=0$).\soln
$\Delta=1600-1200=400>0$.\\[3pt]\textbf{Conclusion:} yes --- two real break-even points exist (solve $-2x^2+40x-150=0$ to find $x=5$ or $x=15$).` },
    ],
    questions: [
      { ask: r`Solve $x^2-3x-10=0$ using the quadratic formula.` },
      { ask: r`Find the discriminant of $4x^2+4x+1=0$ and describe the roots.` },
      { ask: r`Find the discriminant of $x^2+2x+6=0$ and describe the roots.` },
      { ask: r`Find $k>0$ so that $2x^2+kx+8=0$ has a repeated root.` },
      { ask: r`For what values of $k$ does $x^2-4x+k=0$ have two distinct real roots?` },
      { ask: r`Solve $5x^2+2x-3=0$ using the quadratic formula.` },
      { ask: r`A rectangle has perimeter 40 m and area 91 m$^2$; set up and solve a quadratic to find its dimensions.` },
      { ask: r`Find both values of $m$ so that $x^2+mx+36=0$ has a repeated root.` },
      { ask: r`Determine which of $2x^2+3x+7=0$ and $2x^2+9x+7=0$ has real roots.` },
      { ask: r`A company's profit is $P(x)=-x^2+18x-32$ (\$1000s); determine using the discriminant whether it can break even, then find the break-even points.` },
      { ask: r`Find the value(s) of $m$ so that the line $y=mx$ is tangent to the parabola $y=x^2+4$ (hint: set them equal and require $\Delta=0$).`, challenge: true, ws: "3.4cm" },
      { ask: r`Find the value(s) of $k$ so that the line $y=2x+k$ is tangent to $y=x^2$.`, challenge: true, ws: "3.4cm" },
      { ask: r`For what values of $k$ does $kx^2-4x+1=0$ (with $k\neq0$) have no real roots?`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$x=\dfrac{3\pm7}{2}$: $x=5$ or $x=-2$`, r`$\Delta=0$: one repeated root ($x=-\tfrac12$)`,
      r`$\Delta=4-24=-20<0$: no real roots`, r`$k^2=64\Rightarrow k=8$`, r`$16-4k>0\Rightarrow k<4$`,
      r`$\Delta=4+60=64$; $x=\dfrac{-2\pm8}{10}$: $x=\tfrac35$ or $x=-1$`,
      r`$x+y=20$, $xy=91$; $x^2-20x+91=0\Rightarrow(x-7)(x-13)=0$: dimensions $7$ m by $13$ m`,
      r`$m^2=144\Rightarrow m=\pm12$`,
      r`first: $\Delta=9-56=-47<0$ (no real roots); second: $\Delta=81-56=25>0$ (real roots) --- only the second has real roots`,
      r`$\Delta=324-128=196>0$: yes; $x=\dfrac{18\pm14}{2}$: $x=16$ or $x=2$`,
      r`$x^2+4=mx\Rightarrow x^2-mx+4=0$; $\Delta=m^2-16=0\Rightarrow m=\pm4$`,
      r`$x^2=2x+k\Rightarrow x^2-2x-k=0$; $\Delta=4+4k=0\Rightarrow k=-1$`,
      r`$\Delta=16-4k<0\Rightarrow16<4k\Rightarrow k>4$`,
    ],
  },
  {
    code: "2.6", unit: U, title: "Rational Functions",
    intro: r`Rational functions built from $\dfrac{a}{x-h}+k$ have asymptotes you can read straight from the equation.`,
    ideas: [
      r`$y=\dfrac1x$ has asymptotes $x=0$ and $y=0$.`,
      r`$y=\dfrac{a}{x-h}+k$: vertical asymptote $x=h$, horizontal asymptote $y=k$.`,
    ],
    examples: [
      { t: "Reciprocal transformation", body: r`State the asymptotes of $y=\dfrac{4}{x-3}+2$.\soln
Vertical: $x=3$. Horizontal: $y=2$.\\[3pt]\textbf{Conclusion:} $x=3$, $y=2$.` },
      { t: "Reciprocal transformation with reflection", body: r`Sketch $y=\dfrac{-2}{x+1}-3$ as a transformation of $y=\dfrac1x$.\soln
Reflected in $x$-axis and stretched by 2; shifted left 1 and down 3.\\[3pt]\textbf{Conclusion:} asymptotes $x=-1$, $y=-3$.`, },
      { t: "Domain of a general rational function", body: r`Find the domain and vertical asymptote of $y=\dfrac{2x-1}{x+5}$.\soln
Denominator zero at $x=-5$.\\[3pt]\textbf{Conclusion:} domain all real $x$ except $-5$; vertical asymptote $x=-5$.` },
      { t: "Application", body: r`A club's average cost per member is $C(n)=\dfrac{600}{n}+15$ dollars, for $n$ members. Interpret both asymptotes in context.\soln
Vertical asymptote $n=0$: the model breaks down with zero members. Horizontal asymptote $y=15$: as membership grows, the average cost per member settles near \$15 (the per-person variable cost).\\[3pt]\textbf{Conclusion:} \$15 is the cost floor once fixed costs are spread thin.` },
      { t: "Finding the equation from asymptotes and a point", body: r`A function $y=\dfrac{a}{x-h}+k$ has vertical asymptote $x=-4$, horizontal asymptote $y=-1$, and passes through $(-2,3)$. Find its equation.\soln
$y=\dfrac{a}{x+4}-1$. Substitute $(-2,3)$: $3=\dfrac a2-1\Rightarrow a=8$.\\[3pt]\textbf{Conclusion:} $y=\dfrac{8}{x+4}-1$.` },
      { t: "Simplifying a rational function with a common factor", body: r`Simplify $y=\dfrac{x^2-9}{x-3}$ and state what happens at $x=3$.\soln
$\dfrac{(x-3)(x+3)}{x-3}=x+3$ for $x\neq3$.\\[3pt]\textbf{Conclusion:} the function simplifies to $y=x+3$, but has a hole (not an asymptote) at $x=3$, since that factor cancels.` },
      { t: "Finding the $x$-intercept of a shifted reciprocal", body: r`Find the $x$-intercept of $y=\dfrac{5}{x-2}-1$.\soln
Set $y=0$: $\dfrac{5}{x-2}=1\Rightarrow x-2=5\Rightarrow x=7$.\\[3pt]\textbf{Conclusion:} $x$-intercept at $x=7$.` },
      { t: "Comparing two rational functions' asymptotes", body: r`State whether $y=\dfrac{3}{x-1}+4$ and $y=\dfrac{-3}{x-1}+4$ share the same asymptotes.\soln
Both have the same $h=1$ (vertical asymptote $x=1$) and $k=4$ (horizontal asymptote $y=4$) --- only the sign of $a$ differs, affecting which quadrants the branches sit in.\\[3pt]\textbf{Conclusion:} yes, identical asymptotes; only the branch orientation differs.` },
      { t: "Application --- concentration approaching a limit", body: r`A drug's blood concentration is modelled by $C(t)=\dfrac{50t}{t+2}$ mg/L for $t\geq0$. Rewrite in the form $\dfrac a{t-h}+k$ and interpret the horizontal asymptote.\soln
$C(t)=\dfrac{50t}{t+2}=\dfrac{50(t+2)-100}{t+2}=50-\dfrac{100}{t+2}$.\\[3pt]\textbf{Conclusion:} horizontal asymptote $y=50$: the concentration approaches (but never reaches) 50 mg/L as time grows large.` },
    ],
    questions: [
      { ask: r`State the asymptotes of $y=\dfrac{1}{x+7}$.` },
      { ask: r`State the asymptotes of $y=\dfrac{5}{x}-4$.` },
      { ask: r`State the asymptotes of $y=\dfrac{-3}{x-2}+6$.` },
      { ask: r`Find the domain of $y=\dfrac{x-1}{x+9}$.` },
      { ask: r`A function $y=\dfrac{a}{x-h}+k$ has asymptotes $x=5$, $y=1$, and passes through $(6,4)$. Find $a$.` },
      { ask: r`Sketch $y=\dfrac{3}{x+2}-1$, labelling both asymptotes.`, grid: true },
      { ask: r`A gas's pressure is modelled by $P(v)=\dfrac{200}{v}$ for volume $v>0$; explain what the vertical asymptote at $v=0$ means physically.` },
      { ask: r`Simplify $y=\dfrac{x^2-16}{x-4}$ and state what happens at $x=4$.` },
      { ask: r`Find the $x$-intercept of $y=\dfrac{6}{x+1}-2$.` },
      { ask: r`A function $y=\dfrac{a}{x-h}+k$ has vertical asymptote $x=3$, horizontal asymptote $y=2$, and passes through $(5,5)$. Find its equation.` },
      { ask: r`A function $y=\dfrac{a}{x-h}+k$ has asymptotes $x=-3$ and $y=2$, and passes through $(-1,5)$. Find $a$, then find the $x$-intercept.`, challenge: true, ws: "3.4cm" },
      { ask: r`Rewrite $C(t)=\dfrac{80t}{t+4}$ in the form $k-\dfrac a{t+4}$ and state the horizontal asymptote.`, challenge: true, ws: "3.2cm" },
      { ask: r`A function $y=\dfrac{a}{x-h}+k$ passes through $(0,5)$ and $(4,9)$ with vertical asymptote $x=2$; find $a,k$.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$x=-7$, $y=0$`, r`$x=0$, $y=-4$`, r`$x=2$, $y=6$`, r`all real $x$ except $-9$`,
      r`$4=\dfrac{a}{1}+1\Rightarrow a=3$`,
      r`asymptotes $x=-2$, $y=-1$`,
      r`As volume approaches 0, pressure would grow without bound --- physically, a gas cannot be compressed to zero volume`,
      r`$=x+4$ for $x\neq4$; hole (not asymptote) at $x=4$`,
      r`$\dfrac{6}{x+1}=2\Rightarrow x+1=3\Rightarrow x=2$`,
      r`$5=\dfrac a2+2\Rightarrow a=6$: $y=\dfrac6{x-3}+2$`,
      r`$5=\dfrac{a}{2}+2\Rightarrow a=6$; intercept: $0=\dfrac{6}{x+3}+2\Rightarrow x+3=-3\Rightarrow x=-6$`,
      r`$C(t)=80-\dfrac{320}{t+4}$; horizontal asymptote $y=80$`,
      r`$5=\dfrac{a}{-2}+k$ and $9=\dfrac a2+k$; subtract: $4=a\Rightarrow a=4$; then $9=2+k\Rightarrow k=7$`,
    ],
  },
];
