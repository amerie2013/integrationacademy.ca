// IB AA SL worksheets — Unit 2: Functions. Original problems.
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
    ],
    questions: [
      { ask: r`Given $f(x)=2x^2+5x-1$, find $f(3)$.` },
      { ask: r`Find the domain of $f(x)=\sqrt{5-x}$.` },
      { ask: r`Find the domain of $f(x)=\dfrac{4}{2x+6}$.` },
      { ask: r`Find the domain of $f(x)=\dfrac{1}{\sqrt{x-1}}$ (careful: the root cannot be zero either).` },
      { ask: r`Find the range of $f(x)=\sqrt{x+3}-1$.` },
      { ask: r`Determine whether $x^2+y^2=25$ passes the vertical line test, and explain your reasoning.` },
      { ask: r`Find the domain of $f(x)=\dfrac{x+2}{x^2-4}$ (factor the denominator first).` },
      { ask: r`Find the range of $f(x)=-2\sqrt{x}+7$.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$18+15-1=32$`, r`$x\leq5$`, r`$x\neq-3$`, r`$x>1$`, r`$f(x)\geq-1$`,
      r`Fails: a vertical line at $x=0$ meets the circle at both $y=5$ and $y=-5$`,
      r`$x^2-4=(x-2)(x+2)$; domain is all real $x$ except $2$ and $-2$`,
      r`Domain $x\geq0$; at $x=0$, $f=7$ (max); as $x$ grows, $f\to-\infty$: range $f(x)\leq7$`,
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
    ],
    questions: [
      { ask: r`Describe the transformation from $y=x^2$ to $y=(x-3)^2+7$.` },
      { ask: r`Describe $y=\tfrac12x^2$ as a transformation of $y=x^2$.` },
      { ask: r`Describe $y=\sqrt{-x}$ as a transformation of $y=\sqrt x$.` },
      { ask: r`Describe $y=-x^2-5$ as two transformations of $y=x^2$.` },
      { ask: r`Given $f(x)=x^2$, sketch and describe $y=f(2x)$.`, grid: true },
      { ask: r`A graph $y=f(x)$ has a minimum at $(3,-2)$. State the minimum point of $y=f(x-1)+4$.` },
      { ask: r`A graph $y=f(x)$ has a root at $x=6$. State the corresponding root of $y=f(x+2)$.` },
      { ask: r`A graph $y=f(x)$ has a maximum at $(2,5)$. State the coordinates of the corresponding point on $y=-2f(x-3)$.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`right 3, up 7`, r`vertical compression by $\tfrac12$`, r`reflection in the y-axis`,
      r`reflected in the x-axis, then shifted down 5`,
      r`$y=(2x)^2=4x^2$, horizontal compression by $\tfrac12$`,
      r`$(4,2)$`, r`$x=4$`,
      r`Shift right 3: $x=5$; reflect and stretch by 2: $y=-2(5)=-10$: point $(5,-10)$`,
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
    ],
    questions: [
      { ask: r`Given $f(x)=x+6$, $g(x)=2x$, find $g(f(2))$.` },
      { ask: r`Given $f(x)=x+6$, $g(x)=2x$, find $(g\circ f)(x)$.` },
      { ask: r`Find the inverse of $f(x)=5x-3$.` },
      { ask: r`Find the inverse of $f(x)=\dfrac{x+4}{3}$.` },
      { ask: r`Find the inverse of $f(x)=x^2+2$, restricted to $x\leq0$.` },
      { ask: r`Verify that $f(x)=2x+6$ and $g(x)=\dfrac{x-6}{2}$ are inverses by computing both compositions.` },
      { ask: r`Given $f(x)=x-1$, $g(x)=x^2$, find $(g\circ f)(3)$ and $(f\circ g)(3)$, and note they differ.` },
      { ask: r`Given $f(x)=2x-5$, find $f^{-1}(f(8))$ without computing $f^{-1}$'s formula, and explain why your shortcut works.`, challenge: true, ws: "3cm" },
    ],
    answers: [
      r`$f(2)=8$, $g(8)=16$`, r`$g(x+6)=2x+12$`, r`$f^{-1}(x)=\dfrac{x+3}{5}$`, r`$f^{-1}(x)=3x-4$`,
      r`$y=-\sqrt{x-2}$ (negative root, matching $x\leq0$)`,
      r`$f(g(x))=2\left(\tfrac{x-6}{2}\right)+6=x$; $g(f(x))=\tfrac{(2x+6)-6}{2}=x$: both confirm they're inverses`,
      r`$(g\circ f)(3)=g(2)=4$; $(f\circ g)(3)=f(9)=8$ --- different, showing composition order matters`,
      r`$f^{-1}(f(8))=8$, since applying a function then its inverse always returns the original input`,
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
    ],
    questions: [
      { ask: r`Find the equation of the line through $(2,-1)$ and $(6,11)$.` },
      { ask: r`Convert $y=x^2+6x+2$ to vertex form.` },
      { ask: r`Convert $y=3x^2-12x+7$ to vertex form.` },
      { ask: r`State the vertex and direction of opening of $y=-\tfrac12(x-4)^2+9$.` },
      { ask: r`Find the equation of a parabola with vertex $(1,-4)$ through $(3,4)$.` },
      { ask: r`A ball's height is $h(t)=-4.9(t-1.5)^2+11.5$; find its maximum height and when it occurs.` },
      { ask: r`Convert $y=-2x^2+4x+1$ to vertex form.`, challenge: true, ws: "3cm" },
      { ask: r`A parabola has $x$-intercepts at $x=2$ and $x=8$ and passes through $(5,-9)$. Find its equation in factored form, then convert to vertex form.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$m=3$, $y=3x-7$`, r`$y=(x+3)^2-7$`, r`$y=3(x-2)^2-5$`, r`vertex $(4,9)$, opens downward`,
      r`$4=a(4)-4\Rightarrow a=2$: $y=2(x-1)^2-4$`, r`max height $11.5$ m at $t=1.5$ s`,
      r`$y=-2(x^2-2x)+1=-2(x-1)^2+2+1=-2(x-1)^2+3$`,
      r`$y=a(x-2)(x-8)$; at $x=5$: $-9=a(3)(-3)=-9a\Rightarrow a=1$: $y=(x-2)(x-8)=x^2-10x+16=(x-5)^2-9$`,
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
    ],
    questions: [
      { ask: r`Solve $x^2-3x-10=0$ using the quadratic formula.` },
      { ask: r`Find the discriminant of $4x^2+4x+1=0$ and describe the roots.` },
      { ask: r`Find the discriminant of $x^2+2x+6=0$ and describe the roots.` },
      { ask: r`Find $k>0$ so that $2x^2+kx+8=0$ has a repeated root.` },
      { ask: r`For what values of $k$ does $x^2-4x+k=0$ have two distinct real roots?` },
      { ask: r`Solve $5x^2+2x-3=0$ using the quadratic formula.` },
      { ask: r`A rectangle has perimeter 40 m and area 91 m$^2$; set up and solve a quadratic to find its dimensions.` },
      { ask: r`Find the value(s) of $m$ so that the line $y=mx$ is tangent to the parabola $y=x^2+4$ (hint: set them equal and require $\Delta=0$).`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$x=\dfrac{3\pm7}{2}$: $x=5$ or $x=-2$`, r`$\Delta=0$: one repeated root ($x=-\tfrac12$)`,
      r`$\Delta=4-24=-20<0$: no real roots`, r`$k^2=64\Rightarrow k=8$`, r`$16-4k>0\Rightarrow k<4$`,
      r`$\Delta=4+60=64$; $x=\dfrac{-2\pm8}{10}$: $x=\tfrac35$ or $x=-1$`,
      r`$x+y=20$, $xy=91$; $x^2-20x+91=0\Rightarrow(x-7)(x-13)=0$: dimensions $7$ m by $13$ m`,
      r`$x^2+4=mx\Rightarrow x^2-mx+4=0$; $\Delta=m^2-16=0\Rightarrow m=\pm4$`,
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
    ],
    questions: [
      { ask: r`State the asymptotes of $y=\dfrac{1}{x+7}$.` },
      { ask: r`State the asymptotes of $y=\dfrac{5}{x}-4$.` },
      { ask: r`State the asymptotes of $y=\dfrac{-3}{x-2}+6$.` },
      { ask: r`Find the domain of $y=\dfrac{x-1}{x+9}$.` },
      { ask: r`A function $y=\dfrac{a}{x-h}+k$ has asymptotes $x=5$, $y=1$, and passes through $(6,4)$. Find $a$.` },
      { ask: r`Sketch $y=\dfrac{3}{x+2}-1$, labelling both asymptotes.`, grid: true },
      { ask: r`A gas's pressure is modelled by $P(v)=\dfrac{200}{v}$ for volume $v>0$; explain what the vertical asymptote at $v=0$ means physically.` },
      { ask: r`A function $y=\dfrac{a}{x-h}+k$ has asymptotes $x=-3$ and $y=2$, and passes through $(-1,5)$. Find $a$, then find the $x$-intercept.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$x=-7$, $y=0$`, r`$x=0$, $y=-4$`, r`$x=2$, $y=6$`, r`all real $x$ except $-9$`,
      r`$4=\dfrac{a}{1}+1\Rightarrow a=3$`,
      r`asymptotes $x=-2$, $y=-1$`,
      r`As volume approaches 0, pressure would grow without bound --- physically, a gas cannot be compressed to zero volume`,
      r`$5=\dfrac{a}{2}+2\Rightarrow a=6$; intercept: $0=\dfrac{6}{x+3}+2\Rightarrow x+3=-3\Rightarrow x=-6$`,
    ],
  },
];
