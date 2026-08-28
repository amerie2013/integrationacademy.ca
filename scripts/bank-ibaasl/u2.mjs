// IB AA SL Unit 2 — Functions: question bank.
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";

// ── 2.1 Function Basics: Domain, Range & Notation ───────────────
function g21() {
  const q = [];
  q.push(mc("easy", "A function assigns:", ["exactly one output to every input", "two outputs to every input", "one input to every output", "no outputs"], 0));
  q.push(mc("easy", "Given $f(x)=2x+3$, find $f(4)$.", ["11", "10", "9", "14"], 0));
  q.push(mc("easy", "The domain of $f(x)=\\sqrt{x-5}$ is:", ["$x\\geq5$", "$x\\leq5$", "$x>5$", "all real $x$"], 0));
  q.push(mc("easy", "The domain of $f(x)=\\dfrac{2}{x-3}$ excludes:", ["$x=3$", "$x=0$", "$x=-3$", "$x=2$"], 0));
  q.push(mc("easy", "The vertical line test checks whether a graph is a:", ["function", "line", "circle", "parabola"], 0));
  q.push(ms("easy", "True facts about functions:", ["a function has exactly one output per input", "a circle fails the vertical line test", "domain restrictions come from division by 0 or roots of negatives", "every relation is a function"], [0, 1, 2]));
  q.push(tf("easy", "$y=x^2$ is a function.", true));
  q.push(tf("easy", "$x^2+y^2=1$ is a function of $x$.", false));
  q.push(fill("easy", "Given $f(x)=x^2-1$, find $f(3)$.", ["8"]));
  q.push(num("easy", "Given $f(x)=5x-2$, find $f(0)$.", -2, 0));
  q.push(mc("medium", "Find the domain of $f(x)=\\sqrt{4-2x}$.", ["$x\\leq2$", "$x\\geq2$", "$x\\leq4$", "$x\\geq-2$"], 0));
  q.push(mc("medium", "Find the domain of $f(x)=\\dfrac{3}{x^2-9}$.", ["all real $x$ except $\\pm3$", "$x\\geq3$", "$x\\leq-3$", "all real $x$ except $9$"], 0));
  q.push(mc("medium", "Find the range of $f(x)=\\sqrt{x+2}-3$.", ["$f(x)\\geq-3$", "$f(x)\\leq-3$", "$f(x)\\geq2$", "all real numbers"], 0));
  q.push(ms("medium", "For $f(x)=\\dfrac{1}{\\sqrt{x-1}}$:", ["domain requires $x-1>0$", "domain is $x>1$", "the root cannot equal 0", "$x=1$ is included"], [0, 1, 2]));
  q.push(tf("medium", "The range of $f(x)=\\sqrt{x+2}-3$ is $f(x)\\geq-3$.", true));
  q.push(fill("medium", "Find the domain of $f(x)=\\dfrac{1}{\\sqrt{x-4}}$.", ["x>4"]));
  q.push(num("medium", "Given $f(x)=3x^2-2x+1$, find $f(-2)$.", 17, 0));
  q.push(num("medium", "Find the range's lower bound of $f(x)=\\sqrt{x-3}+5$.", 5, 0));
  q.push(match("medium", "Match each function to its domain.", ["$\\sqrt{x-7}$", "$\\dfrac1{x+2}$", "$\\sqrt{10-x}$"], ["$x\\geq7$", "$x\\neq-2$", "$x\\leq10$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find the domain of $f(x)=\\sqrt{9-3x}$.", ["Require $9-3x\\geq0$", "Solve: $-3x\\geq-9$", "Flip inequality on division by negative: $x\\leq3$", "State domain: $x\\leq3$"]));
  q.push(mc("hard", "Find the range of $f(x)=-2\\sqrt{x}+7$.", ["$f(x)\\leq7$", "$f(x)\\geq7$", "$f(x)\\leq0$", "all real numbers"], 0));
  q.push(mc("hard", "Find the domain of $f(x)=\\dfrac{x+3}{x^2-x-6}$ (factor first).", ["all real $x$ except $3,-2$", "all real $x$ except $-3$", "all real $x$ except $6$", "$x\\geq-3$"], 0));
  q.push(mc("hard", "A tank drains via $V(t)=\\sqrt{80-4t}$; find the domain of $t$ that makes physical sense.", ["$0\\leq t\\leq20$", "$t\\geq20$", "$t\\leq0$", "all real $t$"], 0));
  q.push(ms("hard", "For $f(x)=\\dfrac{x+3}{x^2-x-6}$:", ["$x^2-x-6=(x-3)(x+2)$", "excluded values are $3,-2$", "domain is all reals except those two", "the numerator matters for domain"], [0, 1, 2]));
  q.push(tf("hard", "The range of $f(x)=-2\\sqrt{x}+7$ is $f(x)\\leq7$.", true));
  q.push(fill("hard", "Find the domain of $f(x)=\\dfrac{1}{x^2-16}$.", ["x≠4,-4"]));
  q.push(num("hard", "Find the range's upper bound of $f(x)=-\\sqrt{x+1}+10$.", 10, 0));
  q.push(order("hard", "Order the steps to find the range of $f(x)=-3\\sqrt{x-2}+8$.", ["Domain is $x\\geq2$", "At $x=2$, $f(2)=8$ (maximum, since $-3\\sqrt{\\phantom x}$ falls)", "As $x$ grows, $f(x)\\to-\\infty$", "Range: $f(x)\\leq8$"]));
  q.push(match("hard", "Match each domain restriction reason to an example.", ["division by zero", "root of a negative", "both combined"], ["$\\frac1{x-2}$", "$\\sqrt{x-2}$", "$\\frac1{\\sqrt{x-2}}$"], [0, 1, 2]));
  return q;
}

// ── 2.2 Transformations of Functions ───────────────
function g22() {
  const q = [];
  q.push(mc("easy", "$y=f(x)+k$ shifts the graph:", ["vertically by $k$", "horizontally by $k$", "reflects it", "stretches it"], 0));
  q.push(mc("easy", "$y=f(x+k)$ shifts the graph horizontally by:", ["$-k$", "$k$", "$k^2$", "no shift"], 0));
  q.push(mc("easy", "$y=af(x)$ with $a>1$ stretches the graph:", ["vertically", "horizontally", "not at all", "diagonally"], 0));
  q.push(mc("easy", "$y=-f(x)$ reflects the graph in the:", ["$x$-axis", "$y$-axis", "line $y=x$", "origin only"], 0));
  q.push(mc("easy", "$y=f(-x)$ reflects the graph in the:", ["$y$-axis", "$x$-axis", "origin", "line $y=-x$"], 0));
  q.push(ms("easy", "True facts about transformations:", ["$y=f(x)+k$ is a vertical shift", "$y=f(x+k)$ is a horizontal shift", "$y=-f(x)$ reflects in the $x$-axis", "$y=af(x)$ always shifts horizontally"], [0, 1, 2]));
  q.push(tf("easy", "$y=f(x-3)$ shifts the graph right 3 units.", true));
  q.push(tf("easy", "$y=f(x)-5$ shifts the graph right 5 units.", false));
  q.push(fill("easy", "$y=(x-2)^2$ is $y=x^2$ shifted ___ (direction) 2 units.", ["right"]));
  q.push(num("easy", "The vertex of $y=x^2$ shifted to $y=(x-4)^2+1$ has $x$-coordinate:", 4, 0));
  q.push(mc("medium", "Describe $y=(x+3)^2-5$ as a transformation of $y=x^2$.", ["left 3, down 5", "right 3, up 5", "left 3, up 5", "right 3, down 5"], 0));
  q.push(mc("medium", "Describe $y=-2x^2$ as a transformation of $y=x^2$.", ["vertical stretch by 2, reflected in x-axis", "vertical compression by 2", "horizontal stretch by 2", "reflected in y-axis"], 0));
  q.push(mc("medium", "$f(x)=x^2$; describe $y=f(2x)$.", ["horizontal compression by 1/2", "horizontal stretch by 2", "vertical stretch by 2", "vertical compression by 1/2"], 0));
  q.push(ms("medium", "For $y=\\sqrt{x+4}-1$ (transformation of $y=\\sqrt x$):", ["shifted left 4", "shifted down 1", "shifted right 4", "shifted up 1"], [0, 1]));
  q.push(tf("medium", "$y=-2x^2$ is $y=x^2$ stretched by 2 and reflected in the x-axis.", true));
  q.push(fill("medium", "A minimum point at $(3,-2)$ on $y=f(x)$ moves to ___ on $y=f(x-1)+4$ (as an ordered pair).", ["(4,2)"]));
  q.push(num("medium", "A graph $y=f(x)$ has a root at $x=6$; find the root of $y=f(x+2)$.", 4, 0));
  q.push(num("medium", "A maximum at $(2,5)$ on $y=f(x)$; find the $y$-coordinate on $y=3f(x)$.", 15, 0));
  q.push(match("medium", "Match each equation to its transformation of $y=x^2$.", ["$y=(x-5)^2$", "$y=x^2+5$", "$y=5x^2$"], ["right 5", "up 5", "vertical stretch by 5"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to describe $y=-(x+2)^2+6$ as transformations of $y=x^2$.", ["Identify horizontal shift: left 2", "Identify reflection: in the x-axis", "Identify vertical shift: up 6", "Combine: reflected, shifted left 2, up 6"]));
  q.push(mc("hard", "A graph $y=f(x)$ has a maximum at $(2,5)$. Find the point on $y=-2f(x-3)$.", ["$(5,-10)$", "$(2,-10)$", "$(5,10)$", "$(-1,-10)$"], 0));
  q.push(mc("hard", "$f(x)=x^2$; describe $y=f(3x-6)$ (factor first: $f(3(x-2))$).", ["horizontal compression by 1/3, then right 2", "right 6, compression by 3", "left 2, compression by 1/3", "right 2, stretch by 3"], 0));
  q.push(mc("hard", "A city's temperature model $T(d)=f(d)$ is 4°C cooler and shifted 15 days later for a nearby city. Its model is:", ["$f(d-15)-4$", "$f(d+15)-4$", "$f(d-15)+4$", "$f(d)-4-15$"], 0));
  q.push(ms("hard", "For a maximum at $(2,5)$ under $y=-2f(x-3)$:", ["shift right 3 first: $x=5$", "reflect and stretch the $y$-value: $-2(5)=-10$", "the point becomes $(5,-10)$", "the point becomes $(2,-10)$"], [0, 1, 2]));
  q.push(tf("hard", "For $y=-2f(x-3)$, a maximum on $f$ becomes a minimum on the transformed graph.", true));
  q.push(fill("hard", "A root at $x=-3$ on $y=f(x)$; find the root of $y=f(2x)$ (as a value of $x$).", ["-1.5"]));
  q.push(num("hard", "A graph $y=f(x)$ passes through $(4,-2)$; find the $y$-value of the corresponding point on $y=3f(x)+5$.", -1, 0));
  q.push(order("hard", "Order the steps to find the new location of a minimum $(-1,3)$ on $y=2f(x+4)-6$.", ["Horizontal shift: left 4, so $x=-5$", "Vertical stretch by 2: $y=2(3)=6$", "Vertical shift down 6: $y=6-6=0$", "New point: $(-5,0)$"]));
  q.push(match("hard", "Match each transformed function to the base function's key feature moved.", ["$y=f(x-2)+3$", "$y=-f(x)$", "$y=f(3x)$"], ["shift right/up", "reflect vertically", "compress horizontally"], [0, 1, 2]));
  return q;
}

// ── 2.3 Composite & Inverse Functions ───────────────
function g23() {
  const q = [];
  q.push(mc("easy", "$(f\\circ g)(x)$ means:", ["$f(g(x))$", "$g(f(x))$", "$f(x)\\cdot g(x)$", "$f(x)+g(x)$"], 0));
  q.push(mc("easy", "Given $f(x)=x+3$, $g(x)=2x$, find $f(g(1))$.", ["5", "8", "2", "4"], 0));
  q.push(mc("easy", "The inverse of $f(x)=x+5$ is:", ["$f^{-1}(x)=x-5$", "$f^{-1}(x)=x+5$", "$f^{-1}(x)=-x-5$", "$f^{-1}(x)=5-x$"], 0));
  q.push(mc("easy", "The graph of $f^{-1}$ is the reflection of $f$'s graph in the line:", ["$y=x$", "$y=0$", "$x=0$", "$y=-x$"], 0));
  q.push(mc("easy", "$f^{-1}(f(x))$ equals:", ["$x$", "$f(x)$", "$1$", "$0$"], 0));
  q.push(ms("easy", "True facts about inverses:", ["$f^{-1}$ reflects $f$ in $y=x$", "$f(f^{-1}(x))=x$", "every function has an inverse that is itself a function", "to find $f^{-1}$, swap $x$ and $y$ then solve"], [0, 1, 3]));
  q.push(tf("easy", "$(f\\circ g)(x)$ evaluates $g$ first, then $f$.", true));
  q.push(tf("easy", "Every function has an inverse function.", false));
  q.push(fill("easy", "Given $f(x)=x-4$, find $f^{-1}(x)$.", ["x+4"]));
  q.push(num("easy", "Given $f(x)=2x+1$, $g(x)=x-3$, find $f(g(5))$.", 5, 0));
  q.push(mc("medium", "Given $f(x)=x-4$, $g(x)=x^2$, find $(g\\circ f)(x)$.", ["$(x-4)^2$", "$x^2-4$", "$x^2-4x$", "$x-4^2$"], 0));
  q.push(mc("medium", "Find the inverse of $f(x)=3x-6$.", ["$\\dfrac{x+6}{3}$", "$\\dfrac{x-6}{3}$", "$3x+6$", "$\\dfrac{x}{3}-6$"], 0));
  q.push(mc("medium", "Find the inverse of $f(x)=\\dfrac{x-2}{5}$.", ["$5x+2$", "$5x-2$", "$\\dfrac{x+2}{5}$", "$\\dfrac{x}{5}+2$"], 0));
  q.push(ms("medium", "For $f(x)=x^2+3$ restricted to $x\\geq0$:", ["$f^{-1}(x)=\\sqrt{x-3}$", "the restriction ensures the inverse is a function", "without restriction it fails the horizontal line test", "$f^{-1}(x)=\\sqrt{x+3}$"], [0, 1, 2]));
  q.push(tf("medium", "The inverse of $f(x)=3x-6$ is $\\dfrac{x+6}{3}$.", true));
  q.push(fill("medium", "Given $f(x)=x+2$, $g(x)=3x$, find $(f\\circ g)(x)$.", ["3x+2"]));
  q.push(num("medium", "Given $f(x)=5x-3$, find $f^{-1}(7)$.", 2, 0));
  q.push(num("medium", "Given $f(x)=x^2-1$ ($x\\geq0$), find $f^{-1}(8)$.", 3, 0));
  q.push(match("medium", "Match each function to its inverse.", ["$f(x)=4x$", "$f(x)=x-7$", "$f(x)=x/2+1$"], ["$x/4$", "$x+7$", "$2x-2$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find the inverse of $f(x)=2x+5$.", ["Write $y=2x+5$", "Swap $x,y$: $x=2y+5$", "Solve for $y$: $y=\\dfrac{x-5}{2}$", "State $f^{-1}(x)=\\dfrac{x-5}{2}$"]));
  q.push(mc("hard", "Given $f(x)=2x-1$, find $f^{-1}(f(9))$ without computing $f^{-1}$'s formula.", ["9", "17", "8", "18"], 0));
  q.push(mc("hard", "Verify $f(x)=4x-8$ and $g(x)=x/4+2$ are inverses: $f(g(x))$ simplifies to:", ["$x$", "$4x$", "$x-8$", "$x+2$"], 0));
  q.push(mc("hard", "Find the inverse of $f(x)=x^2-6x$ restricted to $x\\geq3$ (complete the square first).", ["$3+\\sqrt{x+9}$", "$3-\\sqrt{x+9}$", "$\\sqrt{x+9}-3$", "$\\sqrt{x-9}+3$"], 0));
  q.push(ms("hard", "For $f(x)=x^2-6x$ ($x\\geq3$):", ["complete the square: $(x-3)^2-9$", "swap and solve: $x=(y-3)^2-9$", "$f^{-1}(x)=3+\\sqrt{x+9}$", "$f^{-1}(x)=3-\\sqrt{x+9}$"], [0, 1, 2]));
  q.push(tf("hard", "$f^{-1}(f(x))=x$ for every $x$ in the domain of $f$.", true));
  q.push(fill("hard", "Given $f(x)=x-1$, $g(x)=x^2$, find $(g\\circ f)(4)$ and $(f\\circ g)(4)$; state whether they are equal (yes/no).", ["no"]));
  q.push(num("hard", "Given $f(x)=3x+2$, find $f^{-1}(f(-5))$.", -5, 0));
  q.push(order("hard", "Order the steps to verify $f(x)=\\dfrac{x-5}{2}$ and $g(x)=2x+5$ are inverses.", ["Compute $f(g(x))=\\dfrac{(2x+5)-5}{2}$", "Simplify: $=\\dfrac{2x}{2}=x$", "Compute $g(f(x))=2\\left(\\dfrac{x-5}{2}\\right)+5$", "Simplify: $=(x-5)+5=x$, confirming inverses"]));
  q.push(match("hard", "Match each restricted function to its correctly-restricted inverse.", ["$f(x)=x^2$, $x\\geq0$", "$f(x)=x^2$, $x\\leq0$", "$f(x)=(x-1)^2$, $x\\geq1$"], ["$\\sqrt x$", "$-\\sqrt x$", "$1+\\sqrt x$"], [0, 1, 2]));
  return q;
}

// ── 2.4 Linear & Quadratic Functions ───────────────
function g24() {
  const q = [];
  q.push(mc("easy", "The slope-intercept form of a line is:", ["$y=mx+b$", "$y=a(x-h)^2+k$", "$ax+by=c$", "$y=x^2+bx+c$"], 0));
  q.push(mc("easy", "In vertex form $y=a(x-h)^2+k$, the vertex is:", ["$(h,k)$", "$(k,h)$", "$(-h,k)$", "$(h,-k)$"], 0));
  q.push(mc("easy", "Find the slope through $(1,2)$ and $(3,8)$.", ["3", "2", "4", "6"], 0));
  q.push(mc("easy", "The vertex of $y=(x-3)^2+4$ is:", ["$(3,4)$", "$(-3,4)$", "$(3,-4)$", "$(4,3)$"], 0));
  q.push(mc("easy", "If $a<0$ in $y=a(x-h)^2+k$, the parabola opens:", ["downward", "upward", "sideways", "it doesn't open"], 0));
  q.push(ms("easy", "True facts about vertex form:", ["reveals the vertex directly", "the sign of $a$ tells opening direction", "$|a|$ affects the width", "$h$ is always positive"], [0, 1, 2]));
  q.push(tf("easy", "The vertex of $y=(x+2)^2-5$ is $(-2,-5)$.", true));
  q.push(tf("easy", "$a>0$ in vertex form means the parabola opens downward.", false));
  q.push(fill("easy", "Find the slope of the line through $(0,1)$ and $(4,9)$.", ["2"]));
  q.push(num("easy", "State the $y$-coordinate of the vertex of $y=2(x-1)^2+7$.", 7, 0));
  q.push(mc("medium", "Convert $y=x^2-8x+10$ to vertex form.", ["$(x-4)^2-6$", "$(x-4)^2+6$", "$(x-8)^2-6$", "$(x+4)^2-6$"], 0));
  q.push(mc("medium", "Convert $y=2x^2+8x+3$ to vertex form.", ["$2(x+2)^2-5$", "$2(x-2)^2-5$", "$2(x+2)^2+5$", "$2(x+4)^2-5$"], 0));
  q.push(mc("medium", "Find the equation of the line through $(-1,4)$ and $(3,16)$.", ["$y=3x+7$", "$y=3x+4$", "$y=4x+7$", "$y=3x-7$"], 0));
  q.push(ms("medium", "For $y=x^2-8x+10$ converted to vertex form:", ["complete the square with $(-4)^2=16$", "$y=(x-4)^2-16+10$", "vertex form is $(x-4)^2-6$", "vertex is $(4,-6)$"], [0, 1, 2, 3]));
  q.push(tf("medium", "$y=2x^2+8x+3$ converts to $2(x+2)^2-5$.", true));
  q.push(fill("medium", "Find the equation of a parabola with vertex $(2,-3)$ and $a=1$ (in vertex form).", ["(x-2)^2-3"]));
  q.push(num("medium", "A ball's height is $h(t)=-4.9(t-2)^2+22$; find the maximum height.", 22, 0));
  q.push(num("medium", "Find the vertex $x$-coordinate of $y=3x^2-18x+5$.", 3, 0));
  q.push(match("medium", "Match each standard-form quadratic to its vertex form.", ["$x^2+6x+11$", "$x^2-4x+1$", "$x^2+2x-3$"], ["$(x+3)^2+2$", "$(x-2)^2-3$", "$(x+1)^2-4$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to convert $y=-2x^2+8x-3$ to vertex form.", ["Factor $-2$ from first two terms: $-2(x^2-4x)-3$", "Complete the square inside: $-2(x^2-4x+4-4)-3$", "Distribute: $-2(x-2)^2+8-3$", "Result: $-2(x-2)^2+5$"]));
  q.push(mc("hard", "Find the equation of a parabola with vertex $(-1,2)$ through $(2,20)$.", ["$y=2(x+1)^2+2$", "$y=3(x+1)^2+2$", "$y=2(x-1)^2+2$", "$y=(x+1)^2+2$"], 0));
  q.push(mc("hard", "A parabola has $x$-intercepts $2$ and $10$ and passes through $(6,-16)$. Find its equation in vertex form.", ["$y=(x-6)^2-16$", "$y=-(x-6)^2+16$", "$y=(x-6)^2+16$", "$y=2(x-6)^2-16$"], 0));
  q.push(mc("hard", "A line has slope $-2$ and passes through the vertex of $y=(x-3)^2+7$. Its equation is:", ["$y=-2x+13$", "$y=-2x+7$", "$y=-2x-13$", "$y=-2x+1$"], 0));
  q.push(ms("hard", "For a parabola with $x$-intercepts $2,10$ through $(6,-16)$:", ["axis of symmetry is $x=6$", "factored form is $a(x-2)(x-10)$", "$a=1$ found by substituting $(6,-16)$", "$a=-1$"], [0, 1, 2]));
  q.push(tf("hard", "A parabola with vertex $(-1,2)$ through $(2,20)$ has $a=2$.", true));
  q.push(fill("hard", "Convert $y=3x^2-6x+8$ to vertex form.", ["3(x-1)^2+5"]));
  q.push(num("hard", "A projectile's height is $h(t)=-5(t-3)^2+50$; find $h$ at $t=5$.", 30, 0));
  q.push(order("hard", "Order the steps to find a parabola's equation given vertex $(4,-2)$ through $(6,10)$.", ["Start with $y=a(x-4)^2-2$", "Substitute $(6,10)$: $10=a(4)-2$", "Solve: $12=4a\\Rightarrow a=3$", "Final equation: $y=3(x-4)^2-2$"]));
  q.push(match("hard", "Match each quadratic feature to how it's found.", ["vertex", "$x$-intercepts", "axis of symmetry"], ["complete the square", "factor or quadratic formula", "$x$-coordinate of the vertex"], [0, 1, 2]));
  return q;
}

// ── 2.5 The Quadratic Formula & Discriminant ───────────────
function g25() {
  const q = [];
  q.push(mc("easy", "The quadratic formula is:", ["$x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$", "$x=\\dfrac{b\\pm\\sqrt{b^2-4ac}}{2a}$", "$x=\\dfrac{-b\\pm\\sqrt{b^2+4ac}}{2a}$", "$x=-b\\pm\\sqrt{b^2-4ac}$"], 0));
  q.push(mc("easy", "The discriminant is:", ["$b^2-4ac$", "$b^2+4ac$", "$4ac-b^2$", "$2a$"], 0));
  q.push(mc("easy", "$\\Delta>0$ means the quadratic has:", ["two distinct real roots", "one repeated root", "no real roots", "three roots"], 0));
  q.push(mc("easy", "$\\Delta<0$ means the quadratic has:", ["no real roots", "two real roots", "one repeated root", "infinite roots"], 0));
  q.push(mc("easy", "$\\Delta=0$ means the quadratic has:", ["one repeated real root", "two distinct roots", "no real roots", "undefined roots"], 0));
  q.push(ms("easy", "True facts about the discriminant:", ["$\\Delta=b^2-4ac$", "$\\Delta>0$ gives two real roots", "$\\Delta<0$ gives no real roots", "$\\Delta$ is always positive"], [0, 1, 2]));
  q.push(tf("easy", "A negative discriminant means no real solutions.", true));
  q.push(tf("easy", "$\\Delta=0$ means the parabola crosses the x-axis twice.", false));
  q.push(fill("easy", "Find the discriminant of $x^2+2x+1=0$.", ["0"]));
  q.push(num("easy", "Find the discriminant of $x^2-5x+6=0$.", 1, 0));
  q.push(mc("medium", "Solve $x^2-7x+12=0$.", ["$x=3,4$", "$x=-3,-4$", "$x=3,-4$", "$x=2,6$"], 0));
  q.push(mc("medium", "Find the discriminant of $2x^2+3x+5=0$ and describe the roots.", ["$\\Delta=-31$, no real roots", "$\\Delta=31$, two real roots", "$\\Delta=0$, one root", "$\\Delta=-9$, no real roots"], 0));
  q.push(mc("medium", "Find $k$ so $x^2-6x+k=0$ has a repeated root.", ["9", "6", "3", "12"], 0));
  q.push(ms("medium", "For $2x^2+3x+5=0$:", ["$\\Delta=9-40=-31$", "$\\Delta<0$", "no real solutions", "two real solutions"], [0, 1, 2]));
  q.push(tf("medium", "$x^2-6x+9=0$ has a repeated root at $x=3$.", true));
  q.push(fill("medium", "Solve $2x^2-x-6=0$ (larger root).", ["2"]));
  q.push(num("medium", "For what value of $k$ does $x^2+kx+16=0$ have a repeated root ($k>0$)?", 8, 0));
  q.push(num("medium", "For what values of $k$ does $x^2-4x+k=0$ have two distinct roots? Find the boundary value of $k$.", 4, 0));
  q.push(match("medium", "Match each quadratic's discriminant sign to its root description.", ["$x^2+x+5=0$", "$x^2-2x+1=0$", "$x^2-5x+2=0$"], ["no real roots", "one repeated root", "two distinct roots"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to solve $3x^2+2x-5=0$ using the quadratic formula.", ["Identify $a=3,b=2,c=-5$", "Compute $\\Delta=4+60=64$", "Apply formula: $x=\\dfrac{-2\\pm8}{6}$", "Solutions: $x=1$ or $x=-5/3$"]));
  q.push(mc("hard", "A ball's height is $h(t)=-5t^2+18t+2$. Determine if it ever reaches 20 m using the discriminant.", ["No; $\\Delta<0$", "Yes; $\\Delta>0$", "Exactly once; $\\Delta=0$", "Cannot determine"], 0));
  q.push(mc("hard", "Find $k$ so that $2x^2+kx+8=0$ has a repeated root ($k>0$).", ["8", "4", "16", "6"], 0));
  q.push(mc("hard", "A rectangle has perimeter 36 m and area 77 m$^2$; find its dimensions using a quadratic.", ["7 m by 11 m", "8 m by 10 m", "6 m by 12 m", "9 m by 9 m"], 0));
  q.push(ms("hard", "For $h(t)=-5t^2+18t+2=20$:", ["rearranges to $-5t^2+18t-18=0$", "$\\Delta=324-360=-36$", "no real solution", "the ball reaches 20 m"], [0, 1, 2]));
  q.push(tf("hard", "For what values of $k$ does $x^2-4x+k=0$ have two distinct real roots: the answer is $k<4$.", true));
  q.push(fill("hard", "Find the value(s) of $m$ so the line $y=mx+1$ is tangent to $y=x^2+3$ (positive value).", ["4"]));
  q.push(num("hard", "A rectangle has perimeter 40 m and area 96 m$^2$; find the longer side.", 12, 0));
  q.push(order("hard", "Order the steps to find $m$ so $y=mx$ is tangent to $y=x^2+9$.", ["Set equal: $x^2+9=mx$", "Rearrange: $x^2-mx+9=0$", "Require $\\Delta=0$: $m^2-36=0$", "Solve: $m=\\pm6$"]));
  q.push(match("hard", "Match each discriminant scenario to its real-world meaning (for a height model set equal to a target).", ["$\\Delta>0$", "$\\Delta=0$", "$\\Delta<0$"], ["reaches the height twice", "just barely reaches it", "never reaches it"], [0, 1, 2]));
  return q;
}

// ── 2.6 Rational Functions ───────────────
function g26() {
  const q = [];
  q.push(mc("easy", "$y=1/x$ has a vertical asymptote at:", ["$x=0$", "$y=0$", "$x=1$", "no asymptote"], 0));
  q.push(mc("easy", "$y=1/x$ has a horizontal asymptote at:", ["$y=0$", "$x=0$", "$y=1$", "no asymptote"], 0));
  q.push(mc("easy", "For $y=\\dfrac{a}{x-h}+k$, the vertical asymptote is:", ["$x=h$", "$x=k$", "$y=h$", "$y=k$"], 0));
  q.push(mc("easy", "For $y=\\dfrac{a}{x-h}+k$, the horizontal asymptote is:", ["$y=k$", "$y=h$", "$x=k$", "$x=h$"], 0));
  q.push(mc("easy", "State the vertical asymptote of $y=\\dfrac1{x+3}$.", ["$x=-3$", "$x=3$", "$y=-3$", "$x=0$"], 0));
  q.push(ms("easy", "True facts about $y=\\dfrac{a}{x-h}+k$:", ["vertical asymptote is $x=h$", "horizontal asymptote is $y=k$", "the graph never touches its asymptotes", "$a$ affects the domain"], [0, 1, 2]));
  q.push(tf("easy", "An asymptote is a line the graph approaches but never reaches.", true));
  q.push(tf("easy", "$y=\\dfrac1{x-2}$ has vertical asymptote $x=2$.", true));
  q.push(fill("easy", "State the horizontal asymptote of $y=\\dfrac2x+5$.", ["y=5"]));
  q.push(num("easy", "State the vertical asymptote's $x$-value for $y=\\dfrac{3}{x-7}$.", 7, 0));
  q.push(mc("medium", "State the asymptotes of $y=\\dfrac{4}{x+2}-3$.", ["$x=-2,y=-3$", "$x=2,y=-3$", "$x=-2,y=3$", "$x=-3,y=-2$"], 0));
  q.push(mc("medium", "Find the domain of $y=\\dfrac{x-1}{x+5}$.", ["all real $x$ except $-5$", "all real $x$ except $1$", "all real $x$ except $5$", "$x\\geq-5$"], 0));
  q.push(mc("medium", "A function $y=\\dfrac{a}{x-h}+k$ has asymptotes $x=3,y=2$ and passes through $(4,5)$. Find $a$.", ["3", "2", "4", "5"], 0));
  q.push(ms("medium", "For $y=\\dfrac{4}{x+2}-3$:", ["vertical asymptote $x=-2$", "horizontal asymptote $y=-3$", "vertical asymptote $x=2$", "the function is undefined at $x=-2$"], [0, 1, 3]));
  q.push(tf("medium", "$y=\\dfrac{-3}{x-2}+6$ has asymptotes $x=2,y=6$.", true));
  q.push(fill("medium", "State the vertical asymptote of $y=\\dfrac{2x-1}{x+9}$.", ["x=-9"]));
  q.push(num("medium", "Find $a$ if $y=\\dfrac{a}{x-1}+3$ passes through $(2,7)$.", 4, 0));
  q.push(num("medium", "Find the $y$-value of the horizontal asymptote for $y=\\dfrac{-6}{x+4}+9$.", 9, 0));
  q.push(match("medium", "Match each function to its vertical asymptote.", ["$\\dfrac2{x-5}$", "$\\dfrac{-1}{x+8}$", "$\\dfrac{x}{x-3}$"], ["$x=5$", "$x=-8$", "$x=3$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find $a$ for $y=\\dfrac{a}{x+1}-2$ through $(0,3)$.", ["Substitute $x=0,y=3$", "Write $3=\\dfrac a1-2$", "Solve: $a=5$", "State the function: $y=\\dfrac5{x+1}-2$"]));
  q.push(mc("hard", "A drug's concentration is $C(t)=\\dfrac{40}{t+2}$ mg/L; interpret the horizontal asymptote $y=0$.", ["concentration approaches 0 as time grows large", "concentration is always 0", "the drug never dissolves", "concentration is constant"], 0));
  q.push(mc("hard", "A function $y=\\dfrac a{x-h}+k$ has asymptotes $x=-2,y=5$ and passes through $(0,9)$. Find its $x$-intercept.", ["$x=-2.8$", "$x=-1$", "$x=0.8$", "$x=-3.6$"], 0));
  q.push(mc("hard", "Find the domain and vertical asymptote of $y=\\dfrac{x+4}{x^2-16}$ (factor first).", ["domain excludes $\\pm4$; asymptote at $x=4$ (the $x=-4$ factor cancels)", "domain excludes $4$ only", "asymptote at $x=-4$ only", "no asymptotes"], 0));
  q.push(ms("hard", "For $y=\\dfrac a{x+2}+5$ through $(0,9)$:", ["$9=\\dfrac a2+5$", "$a=8$", "x-intercept solves $0=\\dfrac8{x+2}+5$", "x-intercept is $x=-2.8$"], [0, 1, 2, 3]));
  q.push(tf("hard", "$y=\\dfrac{x+4}{x^2-16}$ simplifies so the factor $(x+4)$ cancels, leaving only a hole (not asymptote) at $x=-4$, and a true vertical asymptote at $x=4$.", true));
  q.push(fill("hard", "A function $y=\\dfrac a{x-3}-1$ passes through $(5,3)$; find $a$.", ["8"]));
  q.push(num("hard", "A cost function is $C(x)=\\dfrac{800}{x}+12$; find the horizontal asymptote's $y$-value (the cost floor).", 12, 0));
  q.push(order("hard", "Order the steps to sketch $y=\\dfrac{-2}{x-4}+3$ as a transformation of $y=1/x$.", ["Stretch vertically by 2 and reflect (negative sign)", "Shift right 4", "Shift up 3", "Asymptotes are $x=4,y=3$"]));
  q.push(match("hard", "Match each rational function context to its asymptote's meaning.", ["cost per unit as production grows", "concentration as time grows", "population as time grows (logistic-like reciprocal model)"], ["approaches a floor cost", "approaches zero", "approaches a carrying capacity"], [0, 1, 2]));
  return q;
}

export default [
  { code: "2.1", gen: g21 },
  { code: "2.2", gen: g22 },
  { code: "2.3", gen: g23 },
  { code: "2.4", gen: g24 },
  { code: "2.5", gen: g25 },
  { code: "2.6", gen: g26 },
];
