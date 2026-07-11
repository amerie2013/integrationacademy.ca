// MPM2D Unit 5 — Quadratic Equations (worksheets 5.1–5.6)
const r = String.raw;

export default [
{
  code: "5.1", unit: "5: Quadratic Equations", title: "Solving Quadratic Equations by Factoring",
  intro: r`If a product is zero, one of its factors is zero. So set the equation to $0$, factor, and solve each factor.`,
  ideas: [
    r`Rearrange to $ax^2+bx+c=0$ first.`,
    r`Factor fully, then apply the \textbf{zero product property}: if $PQ=0$ then $P=0$ or $Q=0$.`,
    r`A repeated factor gives a \textbf{double root}.`,
    r`The solutions are the $x$-intercepts of the parabola.`,
  ],
  examples: [
    { t: "Simple trinomial", body: r`Solve $x^2-5x+6=0$.
\soln $(x-2)(x-3)=0\Rightarrow x=2$ or $x=3.$
\plot{-1}{6}{-1}{6}{\addplot[exblue,very thick,domain=0.3:5.2,samples=60]{x^2-5*x+6};\addplot[mark=*,only marks,black]coordinates{(2,0)(3,0)};}` },
    { t: "Negative constant", body: r`Solve $x^2+x-12=0$.
\soln $(x+4)(x-3)=0\Rightarrow x=-4$ or $x=3.$` },
    { t: "Difference of squares", body: r`Solve $x^2-9=0$.
\soln $(x-3)(x+3)=0\Rightarrow x=\pm3.$` },
    { t: "Common factor", body: r`Solve $x^2-4x=0$.
\soln $x(x-4)=0\Rightarrow x=0$ or $x=4.$` },
    { t: "Leading coefficient", body: r`Solve $2x^2+5x-3=0$.
\soln $(2x-1)(x+3)=0\Rightarrow x=\tfrac12$ or $x=-3.$` },
    { t: "Rearrange first", body: r`Solve $x^2=2x+8$.
\soln $x^2-2x-8=0\Rightarrow (x-4)(x+2)=0\Rightarrow x=4$ or $x=-2.$` },
    { t: "Factor out first", body: r`Solve $3x^2=12x$.
\soln $3x^2-12x=0\Rightarrow 3x(x-4)=0\Rightarrow x=0$ or $x=4.$` },
    { t: "Double root", body: r`Solve $x^2-6x+9=0$.
\soln $(x-3)^2=0\Rightarrow x=3$ (double root).` },
    { t: "Expand then solve (harder)", body: r`Solve $(x-1)(x+2)=4$.
\soln $x^2+x-2=4\Rightarrow x^2+x-6=0\Rightarrow (x+3)(x-2)=0\Rightarrow x=-3$ or $x=2.$` },
  ],
  questions: [
    { ask: r`Solve $x^2-7x+10=0$.`, ws: "2.0cm" },
    { ask: r`Solve $x^2+2x-8=0$.`, ws: "2.0cm" },
    { ask: r`Solve $x^2-16=0$.`, ws: "1.8cm" },
    { ask: r`Solve $x^2-5x=0$.`, ws: "1.8cm" },
    { ask: r`Solve $x^2+6x+9=0$.`, ws: "1.8cm" },
    { ask: r`Solve $2x^2-5x-3=0$.`, ws: "2.2cm" },
    { ask: r`Solve $3x^2+x-2=0$.`, ws: "2.2cm" },
    { ask: r`Solve $x^2=3x+4$.`, ws: "2.0cm" },
    { ask: r`Solve $5x^2=20x$.`, ws: "1.8cm" },
    { ask: r`Solve $x^2-2x-15=0$.`, ws: "2.0cm" },
    { ask: r`Solve $(x+1)(x-2)=4$.`, ws: "2.4cm" },
    { ask: r`Solve $4x^2-9=0$.`, ws: "2.0cm" },
    { ask: r`Solve $2x^2+x-15=0$.`, ws: "2.4cm", challenge: true },
  ],
  answers: [
    r`$x=2,5$.`, r`$x=-4,2$.`, r`$x=\pm4$.`, r`$x=0,5$.`, r`$x=-3$ (double).`,
    r`$x=\tfrac12,-3$.`, r`$x=\tfrac23,-1$.`, r`$x=4,-1$.`, r`$x=0,4$.`, r`$x=5,-3$.`,
    r`$x^2-x-6=0\Rightarrow x=3,-2$.`, r`$x=\pm\tfrac32$.`, r`$(2x-5)(x+3)=0\Rightarrow x=\tfrac52,-3$.`,
  ],
},
{
  code: "5.2", unit: "5: Quadratic Equations", title: "Completing the Square",
  intro: r`\textbf{Completing the square} turns $x^2+bx$ into a perfect square, letting you solve any quadratic with a square root.`,
  ideas: [
    r`Make the leading coefficient $1$ (divide if needed) and move the constant to the right.`,
    r`Add $\left(\tfrac{b}{2}\right)^2$ to \emph{both} sides to form $(x+\tfrac{b}{2})^2$.`,
    r`Take the square root of both sides --- remember the $\pm$.`,
    r`The same steps written without "$=0$" give \textbf{vertex form}.`,
  ],
  examples: [
    { t: "Perfect outcome", body: r`Solve $x^2+6x+5=0$ by completing the square.
\soln $x^2+6x=-5\Rightarrow x^2+6x+9=4\Rightarrow (x+3)^2=4\Rightarrow x+3=\pm2\Rightarrow x=-1,-5.$` },
    { t: "Irrational roots", body: r`Solve $x^2-4x-1=0$.
\soln $x^2-4x=1\Rightarrow (x-2)^2=5\Rightarrow x=2\pm\sqrt5.$` },
    { t: "Another irrational", body: r`Solve $x^2+2x-5=0$.
\soln $(x+1)^2=6\Rightarrow x=-1\pm\sqrt6.$` },
    { t: "Nice roots", body: r`Solve $x^2-8x+12=0$.
\soln $(x-4)^2=4\Rightarrow x=4\pm2\Rightarrow x=6,2.$` },
    { t: "Larger numbers", body: r`Solve $x^2+10x+9=0$.
\soln $(x+5)^2=16\Rightarrow x=-5\pm4\Rightarrow x=-1,-9.$` },
    { t: "Divide first", body: r`Solve $2x^2-12x+10=0$.
\soln Divide by $2$: $x^2-6x+5=0\Rightarrow (x-3)^2=4\Rightarrow x=5,1.$` },
    { t: "Irrational again", body: r`Solve $x^2-2x-2=0$.
\soln $(x-1)^2=3\Rightarrow x=1\pm\sqrt3.$` },
    { t: "To vertex form", body: r`Write $y=x^2+4x+1$ in vertex form by completing the square.
\soln $(x^2+4x+4)-4+1=(x+2)^2-3$; vertex $(-2,-3)$.` },
    { t: "Irrational roots (harder)", body: r`Solve $x^2-6x+7=0$.
\soln $x^2-6x=-7\Rightarrow (x-3)^2=2\Rightarrow x=3\pm\sqrt2.$` },
  ],
  questions: [
    { ask: r`Solve $x^2+4x+3=0$ by completing the square.`, ws: "2.4cm" },
    { ask: r`Solve $x^2-6x+8=0$.`, ws: "2.4cm" },
    { ask: r`Solve $x^2+2x-3=0$.`, ws: "2.4cm" },
    { ask: r`Solve $x^2-2x-4=0$.`, ws: "2.4cm" },
    { ask: r`Solve $x^2+8x+7=0$.`, ws: "2.4cm" },
    { ask: r`Solve $x^2-10x+21=0$.`, ws: "2.4cm" },
    { ask: r`Solve $x^2+6x+2=0$.`, ws: "2.4cm" },
    { ask: r`Solve $x^2-4x+1=0$.`, ws: "2.4cm" },
    { ask: r`Write $y=x^2+6x+5$ in vertex form.`, ws: "2.2cm" },
    { ask: r`Solve $2x^2-8x+6=0$.`, ws: "2.4cm" },
    { ask: r`Solve $x^2-2x-2=0$.`, ws: "2.4cm" },
    { ask: r`Solve $x^2+10x+18=0$.`, ws: "2.4cm" },
    { ask: r`Solve $3x^2-12x+9=0$ by completing the square.`, ws: "2.8cm", challenge: true },
  ],
  answers: [
    r`$(x+2)^2=1\Rightarrow x=-1,-3$.`,
    r`$(x-3)^2=1\Rightarrow x=4,2$.`,
    r`$(x+1)^2=4\Rightarrow x=1,-3$.`,
    r`$(x-1)^2=5\Rightarrow x=1\pm\sqrt5$.`,
    r`$(x+4)^2=9\Rightarrow x=-1,-7$.`,
    r`$(x-5)^2=4\Rightarrow x=7,3$.`,
    r`$(x+3)^2=7\Rightarrow x=-3\pm\sqrt7$.`,
    r`$(x-2)^2=3\Rightarrow x=2\pm\sqrt3$.`,
    r`$(x+3)^2-4$.`,
    r`$x^2-4x+3=0\Rightarrow (x-2)^2=1\Rightarrow x=3,1$.`,
    r`$(x-1)^2=3\Rightarrow x=1\pm\sqrt3$.`,
    r`$(x+5)^2=7\Rightarrow x=-5\pm\sqrt7$.`,
    r`$x^2-4x+3=0\Rightarrow (x-2)^2=1\Rightarrow x=3,1$.`,
  ],
},
{
  code: "5.3", unit: "5: Quadratic Equations", title: "The Quadratic Formula",
  intro: r`The quadratic formula solves \emph{any} $ax^2+bx+c=0$: $x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$.`,
  ideas: [
    r`Identify $a$, $b$, $c$ from $ax^2+bx+c=0$ (watch the signs).`,
    r`Compute the discriminant $b^2-4ac$ first.`,
    r`Simplify the radical; leave exact answers unless a decimal is asked.`,
    r`A discriminant of $0$ gives one (double) root.`,
  ],
  examples: [
    { t: "Rational roots", body: r`Solve $x^2-5x+6=0$.
\soln $x=\dfrac{5\pm\sqrt{25-24}}{2}=\dfrac{5\pm1}{2}=3,2.$` },
    { t: "Mixed signs", body: r`Solve $x^2+3x-10=0$.
\soln $x=\dfrac{-3\pm\sqrt{9+40}}{2}=\dfrac{-3\pm7}{2}=2,-5.$` },
    { t: "Leading coefficient", body: r`Solve $2x^2-7x+3=0$.
\soln $x=\dfrac{7\pm\sqrt{49-24}}{4}=\dfrac{7\pm5}{4}=3,\tfrac12.$` },
    { t: "Irrational roots", body: r`Solve $x^2-2x-1=0$.
\soln $x=\dfrac{2\pm\sqrt{8}}{2}=1\pm\sqrt2.$` },
    { t: "Another with $a\neq1$", body: r`Solve $3x^2+5x-2=0$.
\soln $x=\dfrac{-5\pm\sqrt{25+24}}{6}=\dfrac{-5\pm7}{6}=\tfrac13,-2.$` },
    { t: "Simplify the radical", body: r`Solve $x^2+4x+1=0$.
\soln $x=\dfrac{-4\pm\sqrt{12}}{2}=-2\pm\sqrt3.$` },
    { t: "Leave exact", body: r`Solve $2x^2+3x-1=0$.
\soln $x=\dfrac{-3\pm\sqrt{17}}{4}.$` },
    { t: "Double root", body: r`Solve $x^2-6x+9=0$.
\soln $x=\dfrac{6\pm\sqrt{0}}{2}=3$ (double).` },
    { t: "Irrational (harder)", body: r`Solve $5x^2-3x-1=0$.
\soln $x=\dfrac{3\pm\sqrt{9+20}}{10}=\dfrac{3\pm\sqrt{29}}{10}.$` },
  ],
  questions: [
    { ask: r`Solve $x^2-3x+2=0$.`, ws: "2.2cm" },
    { ask: r`Solve $x^2+5x+6=0$.`, ws: "2.2cm" },
    { ask: r`Solve $2x^2-5x+2=0$.`, ws: "2.4cm" },
    { ask: r`Solve $x^2-4x+2=0$.`, ws: "2.4cm" },
    { ask: r`Solve $3x^2-2x-1=0$.`, ws: "2.4cm" },
    { ask: r`Solve $x^2+2x-2=0$.`, ws: "2.4cm" },
    { ask: r`Solve $2x^2+5x+1=0$ (exact).`, ws: "2.4cm" },
    { ask: r`Solve $x^2-6x+9=0$.`, ws: "2.0cm" },
    { ask: r`Solve $x^2+x-1=0$ (exact).`, ws: "2.4cm" },
    { ask: r`Solve $4x^2-4x+1=0$.`, ws: "2.2cm" },
    { ask: r`Solve $2x^2-3x-2=0$.`, ws: "2.4cm" },
    { ask: r`Solve $x^2-2x-5=0$.`, ws: "2.4cm" },
    { ask: r`Solve $3x^2+4x-2=0$ (exact, simplified).`, ws: "2.8cm", challenge: true },
  ],
  answers: [
    r`$x=2,1$.`, r`$x=-2,-3$.`, r`$x=2,\tfrac12$.`, r`$x=2\pm\sqrt2$.`,
    r`$x=1,-\tfrac13$.`, r`$x=-1\pm\sqrt3$.`, r`$x=\dfrac{-5\pm\sqrt{17}}{4}$.`, r`$x=3$.`,
    r`$x=\dfrac{-1\pm\sqrt5}{2}$.`, r`$x=\tfrac12$.`, r`$x=2,-\tfrac12$.`, r`$x=1\pm\sqrt6$.`,
    r`$x=\dfrac{-4\pm\sqrt{40}}{6}=\dfrac{-2\pm\sqrt{10}}{3}$.`,
  ],
},
{
  code: "5.4", unit: "5: Quadratic Equations", title: "The Discriminant \\& the Number of Roots",
  intro: r`The \textbf{discriminant} $D=b^2-4ac$ tells how many real roots a quadratic has --- without solving it.`,
  ideas: [
    r`$D>0$: two distinct real roots; if $D$ is a perfect square they are rational.`,
    r`$D=0$: exactly one (double) real root.`,
    r`$D<0$: no real roots.`,
    r`Set $D$ to the right condition to find an unknown coefficient.`,
  ],
  examples: [
    { t: "Two roots", body: r`How many real roots does $x^2-5x+6=0$ have?
\soln $D=25-24=1>0$ --- two real roots (rational, since $1$ is a perfect square).` },
    { t: "One root", body: r`How many real roots does $x^2-4x+4=0$ have?
\soln $D=16-16=0$ --- exactly one (double) root.` },
    { t: "No roots", body: r`How many real roots does $x^2+x+1=0$ have?
\soln $D=1-4=-3<0$ --- no real roots.` },
    { t: "Rational vs irrational", body: r`Describe the roots of $2x^2-3x-5=0$.
\soln $D=9+40=49$, a perfect square $\Rightarrow$ two \emph{rational} roots.` },
    { t: "Irrational roots", body: r`Describe the roots of $x^2-2x-1=0$.
\soln $D=4+4=8>0$ but not a perfect square $\Rightarrow$ two \emph{irrational} roots.` },
    { t: "Solve for $k$ (one root)", body: r`Find $k$ so $x^2+kx+9=0$ has exactly one root.
\soln $D=k^2-36=0\Rightarrow k=\pm6.$` },
    { t: "Solve for $k$ (two roots)", body: r`Find $k$ so $x^2-4x+k=0$ has two real roots.
\soln $D=16-4k>0\Rightarrow k<4.$` },
    { t: "Solve for $k$ (no roots)", body: r`Find $k$ so $x^2+2x+k=0$ has no real roots.
\soln $D=4-4k<0\Rightarrow k>1.$` },
    { t: "One root with $a\neq1$ (harder)", body: r`Find $k$ so $2x^2+kx+8=0$ has exactly one root.
\soln $D=k^2-4(2)(8)=k^2-64=0\Rightarrow k=\pm8.$` },
  ],
  questions: [
    { ask: r`How many real roots does $x^2-6x+5=0$ have?`, ws: "2.0cm" },
    { ask: r`How many real roots does $x^2-4x+4=0$ have?`, ws: "2.0cm" },
    { ask: r`How many real roots does $x^2+2x+5=0$ have?`, ws: "2.0cm" },
    { ask: r`Describe the roots of $2x^2-7x+3=0$.`, ws: "2.0cm" },
    { ask: r`Describe the roots of $x^2-2x-2=0$.`, ws: "2.0cm" },
    { ask: r`Find $k$ so $x^2+kx+4=0$ has exactly one root.`, ws: "2.2cm" },
    { ask: r`Find $k$ so $x^2-6x+k=0$ has two real roots.`, ws: "2.2cm" },
    { ask: r`Find $k$ so $x^2+4x+k=0$ has no real roots.`, ws: "2.2cm" },
    { ask: r`How many real roots does $3x^2+x+1=0$ have?`, ws: "2.0cm" },
    { ask: r`How many real roots does $9x^2-12x+4=0$ have?`, ws: "2.0cm" },
    { ask: r`Find $k$ so $2x^2+8x+k=0$ has exactly one root.`, ws: "2.2cm" },
    { ask: r`Does $x^2+3x-1=0$ have real roots? How many?`, ws: "2.0cm" },
    { ask: r`Find all $k$ so $x^2+kx+9=0$ has exactly one root, and state that root.`, ws: "2.8cm", challenge: true },
  ],
  answers: [
    r`$D=16>0$: two real roots.`,
    r`$D=0$: one (double) root.`,
    r`$D=-16<0$: no real roots.`,
    r`$D=25$ (perfect square): two rational roots.`,
    r`$D=12$: two irrational roots.`,
    r`$k^2=16\Rightarrow k=\pm4$.`,
    r`$36-4k>0\Rightarrow k<9$.`,
    r`$16-4k<0\Rightarrow k>4$.`,
    r`$D=1-12<0$: no real roots.`,
    r`$D=0$: one root.`,
    r`$64-8k=0\Rightarrow k=8$.`,
    r`$D=13>0$: yes, two real roots.`,
    r`$k=\pm6$; the root is $x=-\tfrac{k}{2}=\mp3$.`,
  ],
},
{
  code: "5.5", unit: "5: Quadratic Equations", title: "Quadratic Word Problems",
  intro: r`Many problems --- areas, numbers, projectiles --- lead to a quadratic equation. Set it to $0$ and solve.`,
  ideas: [
    r`Define a variable, write an equation, and rearrange to $ax^2+bx+c=0$.`,
    r`Solve by factoring or the quadratic formula.`,
    r`\textbf{Projectiles:} ground level means height $=0$; max height is at the vertex.`,
    r`Reject answers that don't fit (e.g. negative lengths or times).`,
  ],
  examples: [
    { t: "Rectangle area", body: r`A rectangle's length is $3$ m more than its width and its area is $40$ m$^2$. Find its dimensions.
\soln $w(w+3)=40\Rightarrow w^2+3w-40=0\Rightarrow (w+8)(w-5)=0$. Take $w=5$, so length $8$ m.` },
    { t: "Consecutive integers", body: r`Two consecutive integers have a product of $56$. Find them.
\soln $n(n+1)=56\Rightarrow n^2+n-56=0\Rightarrow (n+8)(n-7)=0\Rightarrow n=7$, giving $7$ and $8$.` },
    { t: "Projectile hits the ground", body: r`A ball's height is $h=-5t^2+20t$. When does it land?
\soln $-5t^2+20t=0\Rightarrow -5t(t-4)=0\Rightarrow t=0$ or $t=4$. It lands at $t=4$ s.` },
    { t: "Maximum height", body: r`For $h=-5t^2+20t$, find the maximum height.
\soln Vertex at $t=2$: $h=-20+40=20$ m.` },
    { t: "Number puzzle", body: r`A number plus its square is $30$. Find it.
\soln $x^2+x=30\Rightarrow x^2+x-30=0\Rightarrow (x+6)(x-5)=0\Rightarrow x=5$ or $x=-6.$` },
    { t: "Projectile from a height", body: r`A ball is thrown so $h=-5t^2+20t+25$. When does it land?
\soln $-5t^2+20t+25=0\Rightarrow t^2-4t-5=0\Rightarrow (t-5)(t+1)=0\Rightarrow t=5$ s.` },
    { t: "Product with a difference", body: r`Two numbers differ by $4$ and have a product of $45$. Find them.
\soln $x(x+4)=45\Rightarrow x^2+4x-45=0\Rightarrow (x+9)(x-5)=0\Rightarrow x=5$, giving $5$ and $9.$` },
    { t: "Right triangle", body: r`The legs of a right triangle differ by $7$ and the hypotenuse is $17$. Find the legs.
\soln $a^2+(a+7)^2=289\Rightarrow 2a^2+14a-240=0\Rightarrow a^2+7a-120=0\Rightarrow (a+15)(a-8)=0$. So legs $8$ and $15.$` },
    { t: "Full projectile (harder)", body: r`For $h=-5t^2+25t+30$, find when the ball lands and its maximum height.
\soln Land: $-5t^2+25t+30=0\Rightarrow t^2-5t-6=0\Rightarrow (t-6)(t+1)=0\Rightarrow t=6$ s. Max at $t=2.5$: $h=-31.25+62.5+30=61.25$ m.` },
  ],
  questions: [
    { ask: r`A rectangle's length is $2$ cm more than its width; its area is $35$ cm$^2$. Find its dimensions.`, ws: "2.6cm" },
    { ask: r`Two consecutive integers have a product of $72$. Find them.`, ws: "2.4cm" },
    { ask: r`A ball's height is $h=-5t^2+15t$. When does it land?`, ws: "2.4cm" },
    { ask: r`Find the maximum height of $h=-5t^2+20t$.`, ws: "2.2cm" },
    { ask: r`A number plus its square is $30$. Find the number(s).`, ws: "2.4cm" },
    { ask: r`A ball is thrown so $h=-5t^2+20t+25$. When does it land?`, ws: "2.6cm" },
    { ask: r`Two numbers differ by $4$ and have a product of $45$. Find them.`, ws: "2.6cm" },
    { ask: r`The legs of a right triangle differ by $7$ and the hypotenuse is $17$. Find the legs.`, ws: "2.8cm" },
    { ask: r`A square garden has an area of $144$ m$^2$. Find its side length.`, ws: "2.2cm" },
    { ask: r`Two consecutive even integers have a product of $48$. Find them.`, ws: "2.4cm" },
    { ask: r`For $h=-5t^2+30t$, find the time of and value of the maximum height.`, ws: "2.6cm" },
    { ask: r`A rectangle's length is three times its width; its area is $48$ m$^2$. Find its dimensions.`, ws: "2.6cm" },
    { ask: r`For $h=-5t^2+25t+30$, find when the ball lands and its maximum height.`, ws: "3.2cm", challenge: true },
  ],
  answers: [
    r`$w^2+2w-35=0\Rightarrow w=5$, length $7$ cm.`,
    r`$n^2+n-72=0\Rightarrow n=8$: $8$ and $9$.`,
    r`$-5t(t-3)=0\Rightarrow t=3$ s.`,
    r`Vertex $t=2$, $h=20$ m.`,
    r`$(x+6)(x-5)=0\Rightarrow x=5$ or $-6$.`,
    r`$t^2-4t-5=0\Rightarrow t=5$ s.`,
    r`$x^2+4x-45=0\Rightarrow x=5$: $5$ and $9$.`,
    r`$a^2+7a-120=0\Rightarrow a=8$: legs $8$ and $15$.`,
    r`$s^2=144\Rightarrow s=12$ m.`,
    r`$n(n+2)=48\Rightarrow n=6$: $6$ and $8$.`,
    r`Vertex $t=3$, $h=45$ m.`,
    r`$3w^2=48\Rightarrow w=4$, length $12$ m.`,
    r`$t^2-5t-6=0\Rightarrow t=6$ s; max at $t=2.5$, $h=61.25$ m.`,
  ],
},
{
  code: "5.6", unit: "5: Quadratic Equations", title: "Linear--Quadratic Systems",
  intro: r`A line and a parabola can meet at $2$, $1$, or $0$ points. Solve by substitution and a quadratic equation.`,
  ideas: [
    r`Set the expressions equal (substitute the line into the parabola).`,
    r`Solve the resulting quadratic; each solution is an $x$ of an intersection point.`,
    r`Find each $y$ by substituting back into either equation.`,
    r`The discriminant tells you whether the line is a secant ($2$), tangent ($1$), or misses ($0$).`,
  ],
  examples: [
    { t: "Two intersections", body: r`Solve the system $y=x^2$ and $y=x+2$.
\soln $x^2=x+2\Rightarrow x^2-x-2=0\Rightarrow (x-2)(x+1)=0\Rightarrow x=2,-1$. Points $(2,4)$ and $(-1,1)$.
\plot{-3}{4}{-1}{8}{\addplot[exblue,very thick,domain=-2.6:2.6,samples=60]{x^2};\addplot[qorange,very thick,domain=-3:3,samples=2]{x+2};\addplot[mark=*,only marks,black]coordinates{(2,4)(-1,1)};}` },
    { t: "Tangent line", body: r`Solve $y=x^2$ and $y=2x-1$.
\soln $x^2=2x-1\Rightarrow x^2-2x+1=0\Rightarrow (x-1)^2=0\Rightarrow x=1$ (tangent). Point $(1,1)$.` },
    { t: "Shifted parabola", body: r`Solve $y=x^2-4$ and $y=x-2$.
\soln $x^2-4=x-2\Rightarrow x^2-x-2=0\Rightarrow (x-2)(x+1)=0\Rightarrow x=2,-1$. Points $(2,0)$ and $(-1,-3)$.` },
    { t: "Negative slope line", body: r`Solve $y=x^2+1$ and $y=-x+3$.
\soln $x^2+1=-x+3\Rightarrow x^2+x-2=0\Rightarrow (x+2)(x-1)=0\Rightarrow x=-2,1$. Points $(-2,5)$ and $(1,2)$.` },
    { t: "No intersection", body: r`Solve $y=x^2+2$ and $y=x-1$.
\soln $x^2+2=x-1\Rightarrow x^2-x+3=0$; $D=1-12<0$, so there is \textbf{no intersection}.` },
    { t: "Parabola with stretch", body: r`Solve $y=2x^2$ and $y=x+1$.
\soln $2x^2=x+1\Rightarrow 2x^2-x-1=0\Rightarrow (2x+1)(x-1)=0\Rightarrow x=-\tfrac12,1$. Points $\left(-\tfrac12,\tfrac12\right)$ and $(1,2)$.` },
    { t: "Horizontal line", body: r`Solve $y=x^2-2x$ and $y=3$.
\soln $x^2-2x=3\Rightarrow x^2-2x-3=0\Rightarrow (x-3)(x+1)=0\Rightarrow x=3,-1$. Points $(3,3)$ and $(-1,3)$.` },
    { t: "Finding a tangent point", body: r`Show $y=-x-1$ is tangent to $y=x^2+x$ and find the point.
\soln $x^2+x=-x-1\Rightarrow x^2+2x+1=0\Rightarrow (x+1)^2=0\Rightarrow x=-1$ (one solution). Point $(-1,0)$.` },
    { t: "Full system (harder)", body: r`Solve $y=x^2-3x+2$ and $y=x-1$.
\soln $x^2-3x+2=x-1\Rightarrow x^2-4x+3=0\Rightarrow (x-1)(x-3)=0\Rightarrow x=1,3$. Points $(1,0)$ and $(3,2)$.
\plot{-1}{5}{-2}{6}{\addplot[exblue,very thick,domain=-0.3:4,samples=60]{x^2-3*x+2};\addplot[qorange,very thick,domain=-1:5,samples=2]{x-1};\addplot[mark=*,only marks,black]coordinates{(1,0)(3,2)};}` },
  ],
  questions: [
    { ask: r`Solve $y=x^2$ and $y=x+6$.`, ws: "2.4cm" },
    { ask: r`Solve $y=x^2-2$ and $y=x$.`, ws: "2.4cm" },
    { ask: r`Solve $y=x^2+1$ and $y=2x$. (Tangent?)`, ws: "2.4cm" },
    { ask: r`Solve $y=x^2$ and $y=4$.`, ws: "2.2cm" },
    { ask: r`Solve $y=x^2-4x$ and $y=-3$.`, ws: "2.4cm" },
    { ask: r`Solve $y=x^2+2$ and $y=x-1$. How many intersections?`, ws: "2.4cm" },
    { ask: r`Solve $y=2x^2$ and $y=x+3$.`, ws: "2.6cm" },
    { ask: r`Solve $y=x^2+3x$ and $y=-2$.`, ws: "2.4cm" },
    { ask: r`Solve $y=x^2-1$ and $y=3x-3$.`, ws: "2.4cm" },
    { ask: r`Solve $y=-x^2+4$ and $y=x+2$.`, ws: "2.6cm" },
    { ask: r`How many times do $y=x^2+5$ and $y=x$ meet? Explain.`, ws: "2.2cm" },
    { ask: r`Solve $y=x^2-2x+1$ and $y=x-1$.`, ws: "2.4cm" },
    { ask: r`For what value of $k$ is $y=kx$ tangent to $y=x^2+2$?`, ws: "2.8cm", challenge: true },
  ],
  answers: [
    r`$x^2-x-6=0\Rightarrow (3,9),(-2,4)$.`,
    r`$x^2-x-2=0\Rightarrow (2,2),(-1,-1)$.`,
    r`$(x-1)^2=0\Rightarrow (1,2)$ --- tangent.`,
    r`$x=\pm2$: $(2,4),(-2,4)$.`,
    r`$x^2-4x+3=0\Rightarrow (1,-3),(3,-3)$.`,
    r`$x^2-x+3=0$, $D<0$: no intersection.`,
    r`$2x^2-x-3=0\Rightarrow \left(\tfrac32,\tfrac92\right),(-1,2)$.`,
    r`$x^2+3x+2=0\Rightarrow (-1,-2),(-2,-2)$.`,
    r`$x^2-3x+2=0\Rightarrow (1,0),(2,3)$.`,
    r`$x^2+x-2=0\Rightarrow (-2,0),(1,3)$.`,
    r`$x^2-x+5=0$, $D=1-20<0$: never.`,
    r`$x^2-3x+2=0\Rightarrow (1,0),(2,1)$.`,
    r`$x^2-kx+2=0$ tangent $\Rightarrow k^2-8=0\Rightarrow k=\pm2\sqrt2$.`,
  ],
},
];
