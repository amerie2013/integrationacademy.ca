// MPM2D Unit 4 — Quadratic Relations (worksheets 4.1–4.6)
const r = String.raw;

export default [
{
  code: "4.1", unit: "4: Quadratic Relations", title: "Introducing Quadratic Relations",
  intro: r`A \textbf{quadratic relation} has degree $2$ and graphs as a \textbf{parabola}. Its second differences are constant.`,
  ideas: [
    r`Standard form $y=ax^2+bx+c$ with $a\neq0$; the base parabola is $y=x^2$.`,
    r`\textbf{First differences} change; \textbf{second differences} are constant for a quadratic.`,
    r`The constant second difference equals $2a$.`,
    r`$a>0$ opens up (minimum); $a<0$ opens down (maximum).`,
  ],
  examples: [
    { t: "Identifying quadratics", body: r`Which are quadratic: $y=x^2-3$, $\ y=2x+1$, $\ y=-4x^2$?
\soln $y=x^2-3$ and $y=-4x^2$ are quadratic (degree $2$); $y=2x+1$ is linear.` },
    { t: "Second differences", body: r`Show the relation $x:0,1,2,3$, $\ y:1,3,7,13$ is quadratic.
\soln First differences $2,4,6$; second differences $2,2$ --- constant, so it is quadratic.` },
    { t: "Evaluating", body: r`If $f(x)=x^2-2x-3$, find $f(4)$.
\soln $f(4)=16-8-3=5.$` },
    { t: "The base parabola", body: r`Graph $y=x^2$.
\soln A parabola with vertex $(0,0)$ opening up.
\plot{-4}{4}{-1}{9}{\addplot[exblue,very thick,domain=-3:3,samples=60]{x^2};\addplot[mark=*,only marks,black]coordinates{(0,0)}; }` },
    { t: "Effect of $a$", body: r`Compare $y=x^2$ and $y=2x^2$.
\soln $y=2x^2$ is narrower (vertical stretch by $2$); both share vertex $(0,0)$.
\plot{-4}{4}{-1}{9}{\addplot[exblue,very thick,domain=-3:3,samples=60]{x^2};\addplot[qorange,very thick,domain=-2.1:2.1,samples=60]{2*x^2};}` },
    { t: "Opening down", body: r`Graph $y=-x^2$.
\soln Reflection of the base parabola; vertex $(0,0)$, opens down.
\plot{-4}{4}{-9}{1}{\addplot[exblue,very thick,domain=-3:3,samples=60]{-x^2};}` },
    { t: "Evaluating with negatives", body: r`If $f(x)=2x^2-x+1$, find $f(-2)$.
\soln $f(-2)=2(4)-(-2)+1=8+2+1=11.$` },
    { t: "A height model", body: r`A ball's height is $h=-5t^2+20t$ (m). Find its height at $t=1$ and $t=2$.
\soln $h(1)=-5+20=15$ m; $h(2)=-20+40=20$ m.` },
    { t: "Using $2a$ (harder)", body: r`A relation $y=ax^2$ has a constant second difference of $6$. Find $a$ and the value at $x=3$.
\soln $2a=6\Rightarrow a=3$, so $y=3x^2$ and $y(3)=3(9)=27.$` },
  ],
  questions: [
    { ask: r`Which are quadratic: $y=x^2-7$, $\ y=4x+1$, $\ y=-3x^2$, $\ y=x^3+2$?`, ws: "2.0cm" },
    { ask: r`Use second differences to decide if $x:0,1,2,3$, $\ y:2,5,10,17$ is quadratic.`, ws: "2.4cm" },
    { ask: r`If $f(x)=x^2-3x+2$, find $f(5)$.`, ws: "1.8cm" },
    { ask: r`If $f(x)=-2x^2+4x$, find $f(-1)$.`, ws: "1.8cm" },
    { ask: r`Graph $y=x^2-1$.`, grid: true },
    { ask: r`A relation $y=ax^2$ has a constant second difference of $8$. Find $a$.`, ws: "2.0cm" },
    { ask: r`A ball's height is $h=-5t^2+30t$. Find its height at $t=2$.`, ws: "2.0cm" },
    { ask: r`Graph $y=-x^2+4$.`, grid: true },
    { ask: r`If $f(x)=2x^2-5$, find $f(0)$ and $f(3)$.`, ws: "2.0cm" },
    { ask: r`Are the second differences of a \emph{linear} relation constant? What is their value?`, ws: "2.0cm" },
    { ask: r`The points $x:1,2,3,4$, $\ y:1,4,9,16$ follow which quadratic relation?`, ws: "2.0cm" },
    { ask: r`Does $y=5-2x^2$ open up or down? Give its maximum or minimum value.`, ws: "2.0cm" },
    { ask: r`A relation $y=ax^2$ has a constant second difference of $10$. Find $a$ and the value at $x=4$.`, ws: "2.6cm", challenge: true },
  ],
  answers: [
    r`$y=x^2-7$ and $y=-3x^2$ are quadratic.`,
    r`First diffs $3,5,7$; second diffs $2,2$ --- yes, quadratic.`,
    r`$25-15+2=12$.`, r`$-2-4=-6$.`,
    r`Parabola, vertex $(0,-1)$, opens up.`,
    r`$2a=8\Rightarrow a=4$.`,
    r`$-20+60=40$.`,
    r`Parabola, vertex $(0,4)$, opens down.`,
    r`$f(0)=-5$, $f(3)=13$.`,
    r`Yes, second differences are $0$.`,
    r`$y=x^2$.`,
    r`Opens down; maximum value $5$.`,
    r`$2a=10\Rightarrow a=5$; $y(4)=5(16)=80$.`,
  ],
},
{
  code: "4.2", unit: "4: Quadratic Relations", title: "Key Features of a Parabola",
  intro: r`Every parabola has a \textbf{vertex}, an \textbf{axis of symmetry}, a \textbf{max or min}, possibly \textbf{zeros}, and a \textbf{$y$-intercept}.`,
  ideas: [
    r`\textbf{Vertex:} the turning point; the \textbf{axis of symmetry (AOS)} is $x=h$ through it.`,
    r`\textbf{Zeros} ($x$-intercepts): where $y=0$; the \textbf{$y$-intercept} is where $x=0$.`,
    r`The AOS is the midpoint of the two zeros.`,
    r`$a>0$ gives a minimum at the vertex; $a<0$ gives a maximum.`,
  ],
  examples: [
    { t: "Reading a simple parabola", body: r`State the features of $y=x^2-4$.
\soln Vertex $(0,-4)$, AOS $x=0$, minimum $-4$, zeros $\pm2$, $y$-intercept $-4$, opens up.
\plot{-4}{4}{-5}{5}{\addplot[exblue,very thick,domain=-3:3,samples=60]{x^2-4};\addplot[mark=*,only marks,black]coordinates{(-2,0)(2,0)(0,-4)};}` },
    { t: "From vertex form", body: r`State the features of $y=-(x-2)^2+9$.
\soln Vertex $(2,9)$, AOS $x=2$, maximum $9$, opens down.` },
    { t: "Finding zeros", body: r`Find the zeros of $y=x^2-9$.
\soln $x^2-9=0\Rightarrow x=\pm3.$` },
    { t: "y-intercept", body: r`Find the $y$-intercept of $y=x^2-2x-3$.
\soln Set $x=0$: $y=-3.$` },
    { t: "AOS from zeros", body: r`A parabola has zeros at $1$ and $5$. Find its axis of symmetry.
\soln AOS is the midpoint: $x=\tfrac{1+5}{2}=3.$` },
    { t: "Vertex from the AOS", body: r`Find the vertex of $y=x^2-6x+5$.
\soln AOS $x=\tfrac{6}{2}=3$; $y=9-18+5=-4$. Vertex $(3,-4)$.
\plot{-1}{7}{-5}{6}{\addplot[exblue,very thick,domain=0.2:5.8,samples=60]{x^2-6*x+5};\addplot[mark=*,only marks,black]coordinates{(1,0)(5,0)(3,-4)};}` },
    { t: "Maximum value", body: r`Find the maximum value of $y=-2(x-1)^2+8$.
\soln Maximum $8$ at $x=1$ (since $a<0$).` },
    { t: "All features (vertex form)", body: r`Describe $y=(x-3)^2-4$.
\soln Vertex $(3,-4)$, AOS $x=3$, opens up, minimum $-4$.` },
    { t: "Full analysis (harder)", body: r`For $y=x^2-4x-5$, find the vertex, zeros, and $y$-intercept.
\soln AOS $x=2$, $y=4-8-5=-9$: vertex $(2,-9)$. Factor: $(x-5)(x+1)$, zeros $5,-1$. $y$-intercept $-5$.
\plot{-3}{6}{-10}{6}{\addplot[exblue,very thick,domain=-1.5:5.5,samples=60]{x^2-4*x-5};\addplot[mark=*,only marks,black]coordinates{(-1,0)(5,0)(2,-9)};}` },
  ],
  questions: [
    { ask: r`State the vertex, AOS, and direction of $y=(x-1)^2+2$.`, ws: "2.0cm" },
    { ask: r`State the vertex and maximum of $y=-(x+3)^2+5$.`, ws: "2.0cm" },
    { ask: r`Find the zeros of $y=x^2-16$.`, ws: "1.8cm" },
    { ask: r`Find the $y$-intercept of $y=2x^2+5x-7$.`, ws: "1.8cm" },
    { ask: r`A parabola has zeros $-2$ and $6$. Find its axis of symmetry.`, ws: "2.0cm" },
    { ask: r`Find the vertex of $y=x^2-8x+12$.`, ws: "2.2cm" },
    { ask: r`Find the minimum value of $y=3(x-2)^2-4$.`, ws: "1.8cm" },
    { ask: r`Describe all features of $y=-(x+1)^2+9$.`, ws: "2.2cm" },
    { ask: r`Find the vertex and zeros of $y=x^2-2x-8$.`, ws: "2.4cm" },
    { ask: r`A parabola has AOS $x=4$ and one zero at $x=1$. Find the other zero.`, ws: "2.0cm" },
    { ask: r`Does $y=-x^2+6x-5$ have a max or min? Find it.`, ws: "2.2cm" },
    { ask: r`Find the $y$-intercept and zeros of $y=(x-3)(x+1)$.`, ws: "2.2cm" },
    { ask: r`For $y=x^2-6x+8$, find the vertex, zeros, $y$-intercept, and sketch it.`, grid: true, challenge: true },
  ],
  answers: [
    r`Vertex $(1,2)$, AOS $x=1$, opens up.`,
    r`Vertex $(-3,5)$, maximum $5$.`,
    r`$x=\pm4$.`,
    r`$y=-7$.`,
    r`$x=\tfrac{-2+6}{2}=2$.`,
    r`AOS $x=4$, $y=16-32+12=-4$: $(4,-4)$.`,
    r`Minimum $-4$ at $x=2$.`,
    r`Vertex $(-1,9)$, AOS $x=-1$, max $9$, opens down.`,
    r`Vertex $(1,-9)$; zeros $4,-2$.`,
    r`AOS midpoint $\Rightarrow$ other zero $x=7$.`,
    r`Max; AOS $x=3$, $y=4$: maximum $4$.`,
    r`$y$-intercept $-3$; zeros $3,-1$.`,
    r`Vertex $(3,-1)$, zeros $2,4$, $y$-intercept $8$.`,
  ],
},
{
  code: "4.3", unit: "4: Quadratic Relations", title: "Transformations \\& Vertex Form",
  intro: r`Vertex form $y=a(x-h)^2+k$ shows every transformation of $y=x^2$ at a glance.`,
  ideas: [
    r`$h$ shifts \textbf{horizontally} (right if $h>0$); $k$ shifts \textbf{vertically} (up if $k>0$).`,
    r`The vertex is $(h,k)$ and the AOS is $x=h$.`,
    r`$a$ stretches ($|a|>1$, narrower) or compresses ($|a|<1$, wider); $a<0$ reflects (opens down).`,
    r`To find $a$, substitute another known point and solve.`,
  ],
  examples: [
    { t: "Describe a shift", body: r`Describe how $y=(x-3)^2+2$ transforms $y=x^2$.
\soln Right $3$, up $2$ (vertex $(3,2)$).` },
    { t: "Reflection and shift", body: r`Describe $y=-(x+1)^2$.
\soln Reflected in the $x$-axis (opens down), left $1$; vertex $(-1,0)$.` },
    { t: "Vertical stretch", body: r`Describe $y=2x^2$.
\soln Vertical stretch by factor $2$ (narrower); vertex $(0,0)$.` },
    { t: "Vertical compression", body: r`Describe $y=\tfrac12x^2$.
\soln Vertical compression by factor $\tfrac12$ (wider).` },
    { t: "Two shifts", body: r`Describe $y=(x+4)^2-5$.
\soln Left $4$, down $5$; vertex $(-4,-5)$.` },
    { t: "Build from a vertex", body: r`Write the equation with vertex $(2,-3)$ and $a=1$.
\soln $y=(x-2)^2-3.$` },
    { t: "Build with reflection", body: r`Write the equation with vertex $(-1,4)$ opening down with $a=-2$.
\soln $y=-2(x+1)^2+4.$` },
    { t: "Read off features", body: r`For $y=-3(x-2)^2+5$, state the vertex, direction, and stretch.
\soln Vertex $(2,5)$, opens down, vertical stretch by $3$.` },
    { t: "Finding $a$ (harder)", body: r`A parabola has vertex $(1,2)$ and passes through $(3,10)$. Find its equation.
\soln $10=a(3-1)^2+2\Rightarrow 10=4a+2\Rightarrow a=2$, so $y=2(x-1)^2+2.$` },
  ],
  questions: [
    { ask: r`Describe how $y=(x-5)^2+1$ transforms $y=x^2$.`, ws: "2.0cm" },
    { ask: r`Describe $y=-(x-2)^2+3$.`, ws: "2.0cm" },
    { ask: r`Describe $y=3x^2-4$.`, ws: "2.0cm" },
    { ask: r`Describe $y=\tfrac14(x+1)^2$.`, ws: "2.0cm" },
    { ask: r`State the vertex and AOS of $y=2(x-3)^2-7$.`, ws: "2.0cm" },
    { ask: r`Write the equation with vertex $(0,5)$ and $a=1$.`, ws: "1.8cm" },
    { ask: r`Write the equation with vertex $(-2,1)$ and $a=-1$.`, ws: "1.8cm" },
    { ask: r`Write the equation with vertex $(4,-2)$ opening up, $a=3$.`, ws: "1.8cm" },
    { ask: r`For $y=-\tfrac12(x+3)^2+6$, state the vertex, direction, and stretch/compression.`, ws: "2.2cm" },
    { ask: r`A parabola has vertex $(0,0)$ and passes through $(2,12)$. Find $a$.`, ws: "2.2cm" },
    { ask: r`A parabola has vertex $(-1,3)$ and passes through $(1,11)$. Find its equation.`, ws: "2.4cm" },
    { ask: r`State the transformations in $y=-2(x-1)^2+4$.`, ws: "2.2cm" },
    { ask: r`A parabola has vertex $(2,-1)$ and passes through $(0,7)$. Find its equation and its $y$-intercept.`, ws: "3.0cm", challenge: true },
  ],
  answers: [
    r`Right $5$, up $1$.`,
    r`Reflect (opens down), right $2$, up $3$.`,
    r`Stretch by $3$, down $4$.`,
    r`Compression by $\tfrac14$, left $1$.`,
    r`Vertex $(3,-7)$, AOS $x=3$.`,
    r`$y=x^2+5$.`,
    r`$y=-(x+2)^2+1$.`,
    r`$y=3(x-4)^2-2$.`,
    r`Vertex $(-3,6)$, opens down, compression by $\tfrac12$.`,
    r`$12=a(2)^2\Rightarrow a=3$.`,
    r`$11=a(2)^2+3\Rightarrow a=2$: $y=2(x+1)^2+3$.`,
    r`Reflect, right $1$, up $4$, stretch by $2$.`,
    r`$7=a(0-2)^2-1\Rightarrow a=2$: $y=2(x-2)^2-1$; $y$-intercept $7$.`,
  ],
},
{
  code: "4.4", unit: "4: Quadratic Relations", title: "Graphing from Vertex Form",
  intro: r`From $y=a(x-h)^2+k$ you can graph quickly: plot the vertex, then use the step pattern and symmetry.`,
  ideas: [
    r`Plot the vertex $(h,k)$ and draw the AOS $x=h$.`,
    r`Step pattern from the vertex: over $1$/up $a$, over $2$/up $4a$ (mirror on both sides).`,
    r`Set $y=0$ and solve to find any $x$-intercepts.`,
    r`The range is $y\ge k$ (opens up) or $y\le k$ (opens down).`,
  ],
  examples: [
    { t: "Basic vertex-form graph", body: r`Graph $y=(x-2)^2-1$.
\soln Vertex $(2,-1)$, opens up.
\plot{-2}{6}{-2}{8}{\addplot[exblue,very thick,domain=-0.8:4.8,samples=60]{(x-2)^2-1};\addplot[mark=*,only marks,black]coordinates{(2,-1)(1,0)(3,0)};}` },
    { t: "Opens down", body: r`Graph $y=-(x+1)^2+4$.
\soln Vertex $(-1,4)$, opens down; zeros at $x=1,-3$.
\plot{-5}{4}{-6}{5}{\addplot[exblue,very thick,domain=-4:2,samples=60]{-(x+1)^2+4};\addplot[mark=*,only marks,black]coordinates{(-1,4)(1,0)(-3,0)};}` },
    { t: "With a stretch", body: r`Graph $y=2(x-1)^2-3$.
\soln Vertex $(1,-3)$, narrow (step $2,8,\dots$).
\plot{-3}{5}{-4}{9}{\addplot[exblue,very thick,domain=-1.2:3.2,samples=60]{2*(x-1)^2-3};\addplot[mark=*,only marks,black]coordinates{(1,-3)}; }` },
    { t: "With a compression", body: r`Graph $y=\tfrac12(x+2)^2$.
\soln Vertex $(-2,0)$, wide.
\plot{-7}{3}{-1}{9}{\addplot[exblue,very thick,domain=-6:2,samples=60]{0.5*(x+2)^2};\addplot[mark=*,only marks,black]coordinates{(-2,0)}; }` },
    { t: "Another opens-down", body: r`Graph $y=-(x-3)^2+5$.
\soln Vertex $(3,5)$, opens down.
\plot{-1}{7}{-4}{6}{\addplot[exblue,very thick,domain=0.4:5.6,samples=60]{-(x-3)^2+5};\addplot[mark=*,only marks,black]coordinates{(3,5)}; }` },
    { t: "Finding x-intercepts", body: r`Find the $x$-intercepts of $y=(x-2)^2-9$.
\soln $(x-2)^2=9\Rightarrow x-2=\pm3\Rightarrow x=5$ or $x=-1.$` },
    { t: "Zeros from vertex form", body: r`Graph $y=(x+1)^2-4$ and state its zeros.
\soln Vertex $(-1,-4)$; $(x+1)^2=4\Rightarrow x=1,-3.$
\plot{-5}{4}{-5}{6}{\addplot[exblue,very thick,domain=-3.4:1.4,samples=60]{(x+1)^2-4};\addplot[mark=*,only marks,black]coordinates{(-1,-4)(1,0)(-3,0)};}` },
    { t: "Range", body: r`State the range of $y=2(x-1)^2+3$.
\soln Minimum $3$, opens up: range $y\ge3.$` },
    { t: "Full graph (harder)", body: r`Graph $y=-2(x+2)^2+8$; give the zeros and range.
\soln Vertex $(-2,8)$, opens down. $-2(x+2)^2+8=0\Rightarrow (x+2)^2=4\Rightarrow x=0,-4$; range $y\le8.$
\plot{-6}{2}{-4}{9}{\addplot[exblue,very thick,domain=-4.5:0.5,samples=60]{-2*(x+2)^2+8};\addplot[mark=*,only marks,black]coordinates{(-2,8)(0,0)(-4,0)};}` },
  ],
  questions: [
    { ask: r`Graph $y=(x-1)^2-4$ and label the vertex.`, grid: true },
    { ask: r`Graph $y=-(x-2)^2+3$.`, grid: true },
    { ask: r`State the vertex and range of $y=3(x+1)^2-2$.`, ws: "2.0cm" },
    { ask: r`Find the $x$-intercepts of $y=(x-1)^2-16$.`, ws: "2.2cm" },
    { ask: r`Find the $x$-intercepts of $y=(x+3)^2-1$.`, ws: "2.2cm" },
    { ask: r`State the range of $y=-(x-4)^2+6$.`, ws: "1.8cm" },
    { ask: r`Graph $y=\tfrac12(x-2)^2$.`, grid: true },
    { ask: r`Find the $y$-intercept of $y=(x-3)^2+1$.`, ws: "2.0cm" },
    { ask: r`State the vertex, direction, and zeros of $y=(x+2)^2-9$.`, ws: "2.4cm" },
    { ask: r`Graph $y=-2(x-1)^2+2$.`, grid: true },
    { ask: r`Does $y=2(x+1)^2+5$ have any $x$-intercepts? Explain.`, ws: "2.2cm" },
    { ask: r`State the vertex and range of $y=-\tfrac13(x-3)^2+4$.`, ws: "2.0cm" },
    { ask: r`Graph $y=(x-2)^2-9$, giving the vertex, both zeros, and the $y$-intercept.`, grid: true, challenge: true },
  ],
  answers: [
    r`Vertex $(1,-4)$; zeros $-1,3$.`,
    r`Vertex $(2,3)$, opens down; zeros $2\pm\sqrt3$.`,
    r`Vertex $(-1,-2)$, range $y\ge-2$.`,
    r`$x=5,-3$.`,
    r`$x=-2,-4$.`,
    r`$y\le6$.`,
    r`Vertex $(2,0)$, wide, opens up.`,
    r`$y=(0-3)^2+1=10$.`,
    r`Vertex $(-2,-9)$, opens up, zeros $1,-5$.`,
    r`Vertex $(1,2)$, opens down; zeros $0,2$.`,
    r`No --- minimum $5>0$, parabola stays above the $x$-axis.`,
    r`Vertex $(3,4)$, range $y\le4$.`,
    r`Vertex $(2,-9)$, zeros $-1,5$, $y$-intercept $-5$.`,
  ],
},
{
  code: "4.5", unit: "4: Quadratic Relations", title: "Factored Form \\& the Zeros",
  intro: r`Factored form $y=a(x-r)(x-s)$ shows the \textbf{zeros} $r$ and $s$ directly.`,
  ideas: [
    r`The zeros are $x=r$ and $x=s$ (set each factor to $0$).`,
    r`The AOS is the midpoint $x=\tfrac{r+s}{2}$; substitute to get the vertex.`,
    r`$a$ controls width/direction; find it from a known point such as the $y$-intercept.`,
    r`If the quadratic isn't factored yet, factor it first.`,
  ],
  examples: [
    { t: "Read the zeros", body: r`State the zeros of $y=(x-2)(x+3)$.
\soln $x=2$ and $x=-3.$` },
    { t: "Zeros and AOS", body: r`State the zeros and AOS of $y=(x-5)(x-1)$.
\soln Zeros $5,1$; AOS $x=\tfrac{5+1}{2}=3.$` },
    { t: "Find the vertex", body: r`Find the vertex of $y=2(x+1)(x-3)$.
\soln Zeros $-1,3$, AOS $x=1$; $y=2(2)(-2)=-8$. Vertex $(1,-8)$.
\plot{-3}{5}{-9}{6}{\addplot[exblue,very thick,domain=-2:4,samples=60]{2*(x+1)*(x-3)};\addplot[mark=*,only marks,black]coordinates{(-1,0)(3,0)(1,-8)};}` },
    { t: "Build from zeros", body: r`Write a quadratic with zeros $-2$ and $4$ and $a=1$.
\soln $y=(x+2)(x-4).$` },
    { t: "Factor then read zeros", body: r`Find the zeros of $y=x^2-x-6$.
\soln $x^2-x-6=(x-3)(x+2)$, so zeros $3,-2.$` },
    { t: "Vertex via factoring", body: r`Find the vertex of $y=x^2-6x+8$.
\soln $(x-2)(x-4)$, zeros $2,4$, AOS $x=3$, $y=9-18+8=-1$: vertex $(3,-1)$.
\plot{-1}{7}{-2}{6}{\addplot[exblue,very thick,domain=0.3:5.7,samples=60]{x^2-6*x+8};\addplot[mark=*,only marks,black]coordinates{(2,0)(4,0)(3,-1)};}` },
    { t: "Find $a$ from a point", body: r`A parabola has zeros $1$ and $5$ and passes through $(3,-4)$. Find its equation.
\soln $-4=a(3-1)(3-5)=a(2)(-2)=-4a\Rightarrow a=1$, so $y=(x-1)(x-5).$` },
    { t: "Opens down", body: r`Find the vertex of $y=-(x+2)(x-4)$.
\soln Zeros $-2,4$, AOS $x=1$; $y=-(3)(-3)=9$. Vertex $(1,9)$, opens down.` },
    { t: "From intercepts (harder)", body: r`A parabola has $x$-intercepts $-3$ and $5$ and $y$-intercept $-30$. Find its equation.
\soln $y=a(x+3)(x-5)$; at $x=0$: $a(3)(-5)=-15a=-30\Rightarrow a=2$, so $y=2(x+3)(x-5).$` },
  ],
  questions: [
    { ask: r`State the zeros of $y=(x-4)(x+1)$.`, ws: "1.8cm" },
    { ask: r`State the zeros and AOS of $y=(x-6)(x-2)$.`, ws: "2.0cm" },
    { ask: r`Find the vertex of $y=(x+2)(x-4)$.`, ws: "2.2cm" },
    { ask: r`Write a quadratic with zeros $3$ and $-5$ ($a=1$).`, ws: "1.8cm" },
    { ask: r`Find the zeros of $y=x^2+2x-15$.`, ws: "2.0cm" },
    { ask: r`Find the vertex of $y=x^2-4x-5$.`, ws: "2.4cm" },
    { ask: r`State the zeros and direction of $y=-2(x-1)(x+3)$.`, ws: "2.0cm" },
    { ask: r`A parabola has zeros $0$ and $6$ and passes through $(1,-10)$. Find $a$.`, ws: "2.4cm" },
    { ask: r`Find the $y$-intercept of $y=(x-2)(x-5)$.`, ws: "1.8cm" },
    { ask: r`Find the vertex of $y=2(x-1)(x-5)$.`, ws: "2.4cm" },
    { ask: r`Write a quadratic with zeros $-4$ and $4$ and $a=3$, then expand it.`, ws: "2.2cm" },
    { ask: r`A parabola has zeros $2$ and $-2$ and $y$-intercept $-8$. Find its equation.`, ws: "2.4cm" },
    { ask: r`A parabola has $x$-intercepts $1$ and $7$ and passes through $(4,-9)$. Find its equation and vertex.`, ws: "3.2cm", challenge: true },
  ],
  answers: [
    r`$x=4,-1$.`,
    r`Zeros $6,2$; AOS $x=4$.`,
    r`Zeros $-2,4$, AOS $x=1$, $y=(3)(-3)=-9$: $(1,-9)$.`,
    r`$y=(x-3)(x+5)$.`,
    r`$(x+5)(x-3)$, zeros $-5,3$.`,
    r`$(x-5)(x+1)$, AOS $x=2$, $y=-9$: $(2,-9)$.`,
    r`Zeros $1,-3$; opens down.`,
    r`$-10=a(1)(1-6)=-5a\Rightarrow a=2$.`,
    r`$y=(0-2)(0-5)=10$.`,
    r`AOS $x=3$, $y=2(2)(-2)=-8$: $(3,-8)$.`,
    r`$y=3(x+4)(x-4)=3x^2-48$.`,
    r`$y=a(x-2)(x+2)$; $-8=a(-4)\Rightarrow a=2$: $y=2(x^2-4)$.`,
    r`$-9=a(3)(-3)=-9a\Rightarrow a=1$: $y=(x-1)(x-7)$; vertex $(4,-9)$.`,
  ],
},
{
  code: "4.6", unit: "4: Quadratic Relations", title: "Standard Form \\& Converting Between Forms",
  intro: r`Standard form $y=ax^2+bx+c$ shows the $y$-intercept; convert to \textbf{vertex} form (complete the square) or \textbf{factored} form (factor) as needed.`,
  ideas: [
    r`AOS $x=-\dfrac{b}{2a}$; substitute to get the vertex.`,
    r`The $y$-intercept is $c$.`,
    r`Standard $\to$ factored: factor the trinomial; the zeros pop out.`,
    r`Standard $\to$ vertex: complete the square, or use the AOS to find the vertex.`,
  ],
  examples: [
    { t: "Vertex from standard form", body: r`Find the vertex of $y=x^2-6x+5$.
\soln AOS $x=-\tfrac{-6}{2}=3$; $y=9-18+5=-4$. Vertex $(3,-4)$.` },
    { t: "y-intercept", body: r`State the $y$-intercept of $y=2x^2+3x-5$.
\soln $c=-5$, so $(0,-5)$.` },
    { t: "Standard to vertex", body: r`Write $y=x^2-4x+1$ in vertex form.
\soln $x^2-4x+1=(x^2-4x+4)-4+1=(x-2)^2-3.$` },
    { t: "Standard to factored", body: r`Write $y=x^2+6x+5$ in factored form.
\soln $(x+1)(x+5).$` },
    { t: "Vertex to standard", body: r`Write $y=(x-2)^2-9$ in standard form.
\soln $x^2-4x+4-9=x^2-4x-5.$` },
    { t: "Factored to standard", body: r`Write $y=(x+3)(x-1)$ in standard form.
\soln $x^2+2x-3.$` },
    { t: "Complete the square with $a\neq1$", body: r`Write $y=2x^2-8x+1$ in vertex form.
\soln $2(x^2-4x)+1=2((x-2)^2-4)+1=2(x-2)^2-7.$` },
    { t: "Zeros via factoring", body: r`Find the zeros of $y=x^2-2x-8$.
\soln $(x-4)(x+2)$, so $x=4,-2.$` },
    { t: "Full conversion (harder)", body: r`For $y=3x^2-12x+5$, find the vertex, direction, min value, $y$-intercept, and vertex form.
\soln AOS $x=2$, $y=12-24+5=-7$: vertex $(2,-7)$, opens up, min $-7$, $y$-intercept $5$. Vertex form: $3(x-2)^2-7.$` },
  ],
  questions: [
    { ask: r`Find the vertex of $y=x^2-8x+10$.`, ws: "2.2cm" },
    { ask: r`State the $y$-intercept of $y=-3x^2+4x-1$.`, ws: "1.8cm" },
    { ask: r`Write $y=x^2-6x+4$ in vertex form.`, ws: "2.2cm" },
    { ask: r`Write $y=x^2+8x+15$ in factored form.`, ws: "1.8cm" },
    { ask: r`Write $y=(x-3)^2-4$ in standard form.`, ws: "2.0cm" },
    { ask: r`Write $y=(x-2)(x+6)$ in standard form.`, ws: "2.0cm" },
    { ask: r`Find the AOS of $y=2x^2-12x+7$.`, ws: "2.0cm" },
    { ask: r`Find the zeros of $y=x^2-x-12$.`, ws: "2.0cm" },
    { ask: r`Write $y=x^2+10x+21$ in both vertex and factored form.`, ws: "2.6cm" },
    { ask: r`Find the vertex and minimum of $y=x^2+4x+1$.`, ws: "2.4cm" },
    { ask: r`Write $y=2x^2+12x+5$ in vertex form.`, ws: "2.4cm" },
    { ask: r`Does $y=x^2+2x+5$ have real zeros? (Try to factor or complete the square.)`, ws: "2.4cm" },
    { ask: r`For $y=2x^2-8x+3$, find the vertex form, vertex, min value, and $y$-intercept.`, ws: "3.2cm", challenge: true },
  ],
  answers: [
    r`AOS $x=4$, $y=-6$: $(4,-6)$.`,
    r`$y=-1$.`,
    r`$(x-3)^2-5$.`,
    r`$(x+3)(x+5)$.`,
    r`$x^2-6x+5$.`,
    r`$x^2+4x-12$.`,
    r`$x=3$.`,
    r`$(x-4)(x+3)$, zeros $4,-3$.`,
    r`$(x+5)^2-4$; $(x+3)(x+7)$.`,
    r`Vertex $(-2,-3)$, min $-3$.`,
    r`$2(x+3)^2-13$.`,
    r`No real zeros --- $(x+1)^2+4$ has minimum $4>0$.`,
    r`$2(x-2)^2-5$; vertex $(2,-5)$, min $-5$, $y$-intercept $3$.`,
  ],
},
];
