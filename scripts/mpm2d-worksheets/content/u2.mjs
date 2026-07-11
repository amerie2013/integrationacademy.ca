// MPM2D Unit 2 — Analytic Geometry (worksheets 2.1–2.6)
const r = String.raw;

export default [
{
  code: "2.1", unit: "2: Analytic Geometry", title: "Midpoint of a Line Segment",
  intro: r`The \textbf{midpoint} of a segment is the average of the endpoints' coordinates: $M=\left(\dfrac{x_1+x_2}{2},\dfrac{y_1+y_2}{2}\right)$.`,
  ideas: [
    r`Average the $x$'s and average the $y$'s.`,
    r`The midpoint is the centre of a segment (and of a diameter).`,
    r`To find a missing endpoint, use $x_2=2M_x-x_1$ and $y_2=2M_y-y_1$.`,
    r`Negatives matter --- keep signs when averaging.`,
  ],
  examples: [
    { t: "Basic midpoint", body: r`Find the midpoint of $(2,4)$ and $(6,10)$.
\soln $M=\left(\tfrac{2+6}{2},\tfrac{4+10}{2}\right)=(4,7).$` },
    { t: "With negatives", body: r`Find the midpoint of $(-3,5)$ and $(7,-1)$.
\soln $M=\left(\tfrac{-3+7}{2},\tfrac{5-1}{2}\right)=(2,2).$` },
    { t: "Through the origin", body: r`Find the midpoint of $(0,0)$ and $(8,-6)$.
\soln $M=(4,-3).$` },
    { t: "Fractional result", body: r`Find the midpoint of $(1,2)$ and $(4,5)$.
\soln $M=\left(\tfrac{5}{2},\tfrac{7}{2}\right)=(2.5,3.5).$` },
    { t: "Finding an endpoint", body: r`$M=(3,4)$ is the midpoint and one endpoint is $(1,2)$. Find the other.
\soln $x_2=2(3)-1=5$, $y_2=2(4)-2=6$. The other endpoint is $(5,6)$.` },
    { t: "Larger spread", body: r`Find the midpoint of $(-5,-2)$ and $(3,8)$.
\soln $M=\left(\tfrac{-2}{2},\tfrac{6}{2}\right)=(-1,3).$` },
    { t: "Centre of a diameter", body: r`A circle has a diameter from $(2,3)$ to $(8,11)$. Find its centre.
\soln The centre is the midpoint: $M=(5,7).$` },
    { t: "Midpoint on a graph", body: r`Find the midpoint of $(-4,-2)$ and $(2,6)$.
\soln $M=(-1,2).$
\plot{-6}{4}{-4}{8}{\addplot[exblue,very thick,domain=-4:2,samples=2]{(4/3)*x+10/3};\addplot[mark=*,only marks,black]coordinates{(-4,-2)(2,6)};\addplot[mark=square*,only marks,qorange]coordinates{(-1,2)};}` },
    { t: "Midpoints of midpoints (harder)", body: r`For $\triangle ABC$ with $A(-2,1)$, $B(4,3)$, $C(0,-5)$, find the midpoint of the segment joining the midpoints of $AB$ and $AC$.
\soln Midpoint of $AB=(1,2)$; midpoint of $AC=(-1,-2)$. Their midpoint is $\left(\tfrac{1-1}{2},\tfrac{2-2}{2}\right)=(0,0).$` },
  ],
  questions: [
    { ask: r`Find the midpoint of $(2,6)$ and $(8,2)$.`, ws: "2.0cm" },
    { ask: r`Find the midpoint of $(-4,3)$ and $(6,-7)$.`, ws: "2.0cm" },
    { ask: r`Find the midpoint of $(0,5)$ and $(10,5)$.`, ws: "2.0cm" },
    { ask: r`Find the midpoint of $(1,1)$ and $(4,8)$.`, ws: "2.0cm" },
    { ask: r`Plot $(-3,-1)$ and $(5,3)$ and mark their midpoint.`, grid: true },
    { ask: r`$M=(2,5)$ is a midpoint and one endpoint is $(-1,3)$. Find the other endpoint.`, ws: "2.4cm" },
    { ask: r`A diameter runs from $(-6,2)$ to $(4,8)$. Find the circle's centre.`, ws: "2.0cm" },
    { ask: r`Find the midpoint of $(-7,-3)$ and $(-1,5)$.`, ws: "2.0cm" },
    { ask: r`$M=(0,0)$ is the midpoint and one endpoint is $(3,-4)$. Find the other.`, ws: "2.2cm" },
    { ask: r`Find the midpoint of $\left(\tfrac12,2\right)$ and $\left(\tfrac72,6\right)$.`, ws: "2.2cm" },
    { ask: r`For $\triangle ABC$ with $A(0,0)$, $B(6,0)$, $C(0,8)$, find the midpoint of each side.`, ws: "2.8cm" },
    { ask: r`Find the midpoint of $(2.5,-1.5)$ and $(3.5,4.5)$.`, ws: "2.0cm" },
    { ask: r`The midpoint of $PQ$ is $(4,1)$ and $P=(1,-2)$. Find $Q$, then the length of $PQ$.`, ws: "3.0cm", challenge: true },
  ],
  answers: [
    r`$(5,4)$.`, r`$(1,-2)$.`, r`$(5,5)$.`, r`$(2.5,4.5)$.`,
    r`Midpoint $(1,1)$.`,
    r`$(2(2)-(-1),\,2(5)-3)=(5,7)$.`,
    r`$(-1,5)$.`,
    r`$(-4,1)$.`,
    r`$(2(0)-3,\,2(0)-(-4))=(-3,4)$.`,
    r`$\left(2,4\right)$.`,
    r`$AB:(3,0)$, $AC:(0,4)$, $BC:(3,4)$.`,
    r`$(3,1.5)$.`,
    r`$Q=(7,4)$; $PQ=\sqrt{6^2+6^2}=\sqrt{72}=6\sqrt2$.`,
  ],
},
{
  code: "2.2", unit: "2: Analytic Geometry", title: "Length of a Line Segment",
  intro: r`The \textbf{distance} between two points comes from the Pythagorean theorem: $d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$.`,
  ideas: [
    r`Subtract the $x$'s and the $y$'s, square, add, then take the square root.`,
    r`Order of subtraction doesn't matter --- the squares remove the sign.`,
    r`Leave answers as exact radicals (e.g. $\sqrt{20}=2\sqrt5$) unless a decimal is asked.`,
    r`Horizontal/vertical segments: just count the change in one coordinate.`,
  ],
  examples: [
    { t: "A 3-4-5 triangle", body: r`Find the distance between $(0,0)$ and $(3,4)$.
\soln $d=\sqrt{3^2+4^2}=\sqrt{25}=5.$` },
    { t: "Shifted 3-4-5", body: r`Find the distance between $(1,2)$ and $(4,6)$.
\soln $d=\sqrt{3^2+4^2}=\sqrt{25}=5.$` },
    { t: "With negatives", body: r`Find the distance between $(-2,1)$ and $(2,4)$.
\soln $d=\sqrt{4^2+3^2}=\sqrt{25}=5.$` },
    { t: "Another", body: r`Find the distance between $(-1,-1)$ and $(2,3)$.
\soln $d=\sqrt{3^2+4^2}=5.$` },
    { t: "Vertical segment", body: r`Find the length of the segment from $(2,5)$ to $(2,-3)$.
\soln Same $x$, so $d=|5-(-3)|=8.$` },
    { t: "Exact radical", body: r`Find the distance between $(1,1)$ and $(4,3)$.
\soln $d=\sqrt{3^2+2^2}=\sqrt{13}.$` },
    { t: "Simplifying a radical", body: r`Find the distance between $(-3,2)$ and $(1,-2)$.
\soln $d=\sqrt{4^2+(-4)^2}=\sqrt{32}=4\sqrt2.$` },
    { t: "Perimeter of a triangle", body: r`Find the perimeter of the triangle with vertices $(0,0)$, $(4,0)$, $(4,3)$.
\soln Sides: $4$, $3$, and $\sqrt{4^2+3^2}=5$. Perimeter $=4+3+5=12.$
\plot{-1}{6}{-1}{5}{\addplot[exblue,very thick]coordinates{(0,0)(4,0)(4,3)(0,0)};\addplot[mark=*,only marks,black]coordinates{(0,0)(4,0)(4,3)};}` },
    { t: "Proving isosceles (harder)", body: r`Show that $\triangle ABC$ with $A(1,1)$, $B(5,1)$, $C(3,5)$ is isosceles.
\soln $AB=\sqrt{4^2+0^2}=4$; $AC=\sqrt{2^2+4^2}=\sqrt{20}$; $BC=\sqrt{(-2)^2+4^2}=\sqrt{20}$. Since $AC=BC$, the triangle is isosceles.` },
  ],
  questions: [
    { ask: r`Find the distance between $(0,0)$ and $(6,8)$.`, ws: "2.2cm" },
    { ask: r`Find the distance between $(2,3)$ and $(5,7)$.`, ws: "2.2cm" },
    { ask: r`Find the distance between $(-1,2)$ and $(3,-1)$.`, ws: "2.2cm" },
    { ask: r`Find the length of the segment from $(-4,1)$ to $(2,1)$.`, ws: "2.0cm" },
    { ask: r`Find the distance between $(0,-3)$ and $(0,4)$.`, ws: "2.0cm" },
    { ask: r`Find the exact distance between $(2,1)$ and $(5,3)$.`, ws: "2.2cm" },
    { ask: r`Find and simplify the distance between $(-2,-2)$ and $(2,2)$.`, ws: "2.4cm" },
    { ask: r`Find the distance between $(-5,4)$ and $(7,-1)$.`, ws: "2.4cm" },
    { ask: r`Plot $(1,1)$ and $(4,5)$, then find the segment's length.`, grid: true },
    { ask: r`Find the perimeter of the triangle with vertices $(0,0)$, $(6,0)$, $(0,8)$.`, ws: "2.6cm" },
    { ask: r`Is the triangle $(2,1)$, $(5,1)$, $(2,5)$ a right triangle? Use side lengths.`, ws: "2.8cm" },
    { ask: r`Which point is closer to the origin: $(3,4)$ or $(-5,1)$?`, ws: "2.4cm" },
    { ask: r`Show that $A(0,0)$, $B(4,2)$, $C(2,6)$, $D(-2,4)$ has all four sides equal (a rhombus).`, ws: "3.2cm", challenge: true },
  ],
  answers: [
    r`$\sqrt{36+64}=\sqrt{100}=10$.`,
    r`$\sqrt{9+16}=5$.`,
    r`$\sqrt{16+9}=5$.`,
    r`$|2-(-4)|=6$.`,
    r`$|4-(-3)|=7$.`,
    r`$\sqrt{9+4}=\sqrt{13}$.`,
    r`$\sqrt{16+16}=\sqrt{32}=4\sqrt2$.`,
    r`$\sqrt{12^2+(-5)^2}=\sqrt{169}=13$.`,
    r`$\sqrt{3^2+4^2}=5$.`,
    r`$6+8+10=24$.`,
    r`Sides $3,4,5$; $3^2+4^2=5^2$, so yes (right triangle).`,
    r`$(3,4)$: $\sqrt{25}=5$ vs $\sqrt{26}$ --- $(3,4)$ is closer.`,
    r`$AB=BC=CD=DA=\sqrt{16+4}=\sqrt{20}$ --- all sides equal.`,
  ],
},
{
  code: "2.3", unit: "2: Analytic Geometry", title: "Equation of a Circle (centre at the origin)",
  intro: r`A circle centred at the origin with radius $r$ has equation $x^2+y^2=r^2$.`,
  ideas: [
    r`$r^2$ is the right side; the radius is $r=\sqrt{r^2}$.`,
    r`A point $(x,y)$ is \textbf{on} the circle if $x^2+y^2=r^2$, \textbf{inside} if $<r^2$, \textbf{outside} if $>r^2$.`,
    r`If a point is on the circle, $r^2=x^2+y^2$ gives the equation directly.`,
    r`The radius equals the distance from the origin to any point on the circle.`,
  ],
  examples: [
    { t: "From the radius", body: r`Write the equation of the circle centred at the origin with radius $5$.
\soln $x^2+y^2=25.$` },
    { t: "Smaller radius", body: r`Write the equation with radius $3$.
\soln $x^2+y^2=9.$` },
    { t: "Through a point", body: r`A circle centred at the origin passes through $(3,4)$. Find its equation.
\soln $r^2=3^2+4^2=25$, so $x^2+y^2=25.$` },
    { t: "Radius from equation", body: r`State the radius of $x^2+y^2=49$.
\soln $r=\sqrt{49}=7.$` },
    { t: "Point on the circle?", body: r`Is $(2,3)$ on $x^2+y^2=13$?
\soln $2^2+3^2=13$, which equals $13$, so \textbf{yes}, it is on the circle.` },
    { t: "Inside or outside?", body: r`Is $(1,2)$ inside or outside $x^2+y^2=16$?
\soln $1^2+2^2=5<16$, so the point is \textbf{inside}.` },
    { t: "Through a negative point", body: r`A circle centred at the origin passes through $(-6,8)$. Find its equation.
\soln $r^2=(-6)^2+8^2=100$, so $x^2+y^2=100$ (radius $10$).` },
    { t: "Graphing a circle", body: r`Graph $x^2+y^2=16$.
\soln Radius $4$, centred at the origin.
\plot{-6}{6}{-6}{6}{\addplot[exblue,very thick,domain=0:360,samples=100]({4*cos(x)},{4*sin(x)});\addplot[mark=*,only marks,black]coordinates{(4,0)(0,4)(-4,0)(0,-4)};}` },
    { t: "Full problem (harder)", body: r`A circle centred at the origin passes through $(5,12)$. Find its radius and equation, and check whether $(-13,0)$ is on it.
\soln $r=\sqrt{5^2+12^2}=\sqrt{169}=13$, so $x^2+y^2=169$. For $(-13,0)$: $(-13)^2+0^2=169\ \checkmark$ --- yes, it is on the circle.` },
  ],
  questions: [
    { ask: r`Write the equation of the circle centred at the origin with radius $6$.`, ws: "2.0cm" },
    { ask: r`Write the equation with radius $10$.`, ws: "2.0cm" },
    { ask: r`State the radius of $x^2+y^2=36$.`, ws: "2.0cm" },
    { ask: r`State the radius of $x^2+y^2=20$ (exact value).`, ws: "2.0cm" },
    { ask: r`A circle centred at the origin passes through $(8,6)$. Find its equation.`, ws: "2.2cm" },
    { ask: r`Is $(3,-4)$ on $x^2+y^2=25$?`, ws: "2.0cm" },
    { ask: r`Is $(2,2)$ inside or outside $x^2+y^2=9$?`, ws: "2.2cm" },
    { ask: r`A circle centred at the origin passes through $(-7,0)$. Find its equation.`, ws: "2.0cm" },
    { ask: r`Graph $x^2+y^2=9$ and label the four axis-intercepts.`, grid: true },
    { ask: r`Does the point $(1,3)$ lie inside, on, or outside $x^2+y^2=10$?`, ws: "2.2cm" },
    { ask: r`Find the equation of the circle (centre origin) whose diameter has endpoints $(0,-5)$ and $(0,5)$.`, ws: "2.4cm" },
    { ask: r`A circle is $x^2+y^2=100$. Find the $y$-coordinates of the points where $x=6$.`, ws: "2.6cm" },
    { ask: r`A circle centred at the origin passes through $(9,40)$. Find its radius and check whether $(41,0)$ is on it.`, ws: "3.0cm", challenge: true },
  ],
  answers: [
    r`$x^2+y^2=36$.`, r`$x^2+y^2=100$.`, r`$r=6$.`, r`$r=\sqrt{20}=2\sqrt5$.`,
    r`$r^2=64+36=100$: $x^2+y^2=100$.`,
    r`$9+16=25\ \checkmark$ --- yes.`,
    r`$4+4=8<9$ --- inside.`,
    r`$x^2+y^2=49$.`,
    r`Radius $3$; intercepts $(\pm3,0),(0,\pm3)$.`,
    r`$1+9=10$ --- on the circle.`,
    r`$x^2+y^2=25$.`,
    r`$36+y^2=100\Rightarrow y^2=64\Rightarrow y=\pm8$.`,
    r`$r=\sqrt{81+1600}=\sqrt{1681}=41$; $(41,0)$: $41^2=1681\ \checkmark$ --- on it.`,
  ],
},
{
  code: "2.4", unit: "2: Analytic Geometry", title: "Medians, Right Bisectors \\& Altitudes",
  intro: r`Three special lines in a triangle: a \textbf{median} joins a vertex to the midpoint of the opposite side; a \textbf{right (perpendicular) bisector} passes through a side's midpoint at $90^\circ$; an \textbf{altitude} runs from a vertex perpendicular to the opposite side.`,
  ideas: [
    r`\textbf{Median:} find the opposite side's midpoint, then the line through it and the vertex.`,
    r`\textbf{Right bisector:} find the side's midpoint and the \emph{negative reciprocal} of the side's slope.`,
    r`\textbf{Altitude:} use the \emph{negative reciprocal} of the opposite side's slope, through the vertex.`,
    r`Horizontal side $\Rightarrow$ vertical perpendicular ($x=$const), and vice-versa.`,
  ],
  examples: [
    { t: "Median through the origin", body: r`Find the median from $A(0,0)$ in $\triangle ABC$ with $B(4,2)$, $C(2,6)$.
\soln Midpoint of $BC=(3,4)$. Slope $=\tfrac{4}{3}$, through the origin: $y=\tfrac43x.$` },
    { t: "Median (general)", body: r`Find the median from $A(2,1)$, where $B(6,3)$, $C(0,5)$.
\soln Midpoint $BC=(3,4)$. Slope $=\tfrac{4-1}{3-2}=3$: $y-1=3(x-2)\Rightarrow y=3x-5.$` },
    { t: "Right bisector", body: r`Find the right bisector of $AB$ with $A(1,2)$, $B(5,6)$.
\soln Midpoint $(3,4)$; slope $AB=1$, so perpendicular slope $=-1$: $y-4=-1(x-3)\Rightarrow y=-x+7.$` },
    { t: "Right bisector (fractions)", body: r`Find the right bisector of $AB$ with $A(-2,1)$, $B(4,3)$.
\soln Midpoint $(1,2)$; slope $AB=\tfrac{2}{6}=\tfrac13$, perpendicular $=-3$: $y-2=-3(x-1)\Rightarrow y=-3x+5.$` },
    { t: "Altitude to a horizontal side", body: r`Find the altitude from $A(0,5)$ to $BC$, where $B(-2,1)$, $C(4,1)$.
\soln $BC$ is horizontal ($y=1$), so the altitude is vertical through $A$: $x=0.$` },
    { t: "Altitude (general)", body: r`Find the altitude from $A(1,6)$ to $BC$, where $B(0,0)$, $C(4,2)$.
\soln Slope $BC=\tfrac12$, so altitude slope $=-2$: $y-6=-2(x-1)\Rightarrow y=-2x+8.$` },
    { t: "Length of a median", body: r`Find the length of the median from $A(1,1)$ in $\triangle ABC$, $B(5,1)$, $C(3,7)$.
\soln Midpoint $BC=(4,4)$; length $=\sqrt{3^2+3^2}=\sqrt{18}=3\sqrt2.$` },
    { t: "Right bisector of a vertical side", body: r`Find the right bisector of the segment from $(2,-1)$ to $(2,5)$.
\soln The segment is vertical; midpoint $(2,2)$. The perpendicular is horizontal: $y=2.$` },
    { t: "Two cevians at once (harder)", body: r`For $\triangle PQR$ with $P(-2,2)$, $Q(4,2)$, $R(1,7)$, find the median from $R$ and the altitude from $R$.
\soln Midpoint $PQ=(1,2)$, so the median from $R(1,7)$ is the vertical line $x=1$. Since $PQ$ is horizontal, the altitude from $R$ is also vertical: $x=1$ (the triangle is isosceles).` },
  ],
  questions: [
    { ask: r`Find the median from $A(0,0)$, where $B(2,6)$, $C(6,2)$.`, ws: "2.6cm" },
    { ask: r`Find the median from $A(1,1)$, where $B(7,3)$, $C(3,5)$.`, ws: "2.6cm" },
    { ask: r`Find the right bisector of $AB$ with $A(0,0)$, $B(6,4)$.`, ws: "2.6cm" },
    { ask: r`Find the right bisector of $AB$ with $A(-1,2)$, $B(3,4)$.`, ws: "2.6cm" },
    { ask: r`Find the altitude from $A(2,6)$ to $BC$, where $B(-1,1)$, $C(5,1)$.`, ws: "2.4cm" },
    { ask: r`Find the altitude from $A(0,4)$ to $BC$, where $B(1,1)$, $C(5,3)$.`, ws: "2.6cm" },
    { ask: r`Find the length of the median from $A(2,2)$, where $B(8,2)$, $C(4,8)$.`, ws: "2.6cm" },
    { ask: r`Find the right bisector of the segment from $(3,2)$ to $(3,-4)$.`, ws: "2.4cm" },
    { ask: r`Find the median from $C(0,6)$, where $A(-4,0)$, $B(4,0)$.`, ws: "2.4cm" },
    { ask: r`Find the equation of the altitude from $B(4,5)$ to $AC$, where $A(0,0)$, $C(6,0)$.`, ws: "2.4cm" },
    { ask: r`Find the right bisector of $AB$ with $A(2,1)$, $B(6,9)$.`, ws: "2.6cm" },
    { ask: r`A median from $A(1,2)$ goes to the midpoint of $BC$. If $B(3,6)$ and $C(7,0)$, find the median's equation.`, ws: "2.6cm" },
    { ask: r`For $\triangle ABC$ with $A(0,0)$, $B(6,0)$, $C(2,4)$, find the right bisector of $AB$ and show it passes through $(3,2)$.`, ws: "3.0cm", challenge: true },
  ],
  answers: [
    r`Mid $BC=(4,4)$; $y=x$.`,
    r`Mid $BC=(5,4)$; slope $\tfrac34$: $y=\tfrac34x+\tfrac14$.`,
    r`Mid $(3,2)$, slope $AB=\tfrac23$, perp $-\tfrac32$: $y=-\tfrac32x+\tfrac{13}{2}$.`,
    r`Mid $(1,3)$, slope $\tfrac12$, perp $-2$: $y=-2x+5$.`,
    r`$BC$ horizontal; altitude $x=2$.`,
    r`Slope $BC=\tfrac12$, perp $-2$: $y=-2x+4$.`,
    r`Mid $BC=(6,5)$; $\sqrt{4^2+3^2}=5$.`,
    r`Mid $(3,-1)$, segment vertical; $y=-1$.`,
    r`Mid $AB=(0,0)$; $x=0$ (vertical).`,
    r`$AC$ horizontal; altitude $x=4$.`,
    r`Mid $(4,5)$, slope $2$, perp $-\tfrac12$: $y=-\tfrac12x+7$.`,
    r`Mid $BC=(5,3)$; slope $\tfrac14$: $y=\tfrac14x+\tfrac74$.`,
    r`Mid $AB=(3,0)$, $AB$ horizontal, perp $x=3$; $(3,2)$ has $x=3\ \checkmark$.`,
  ],
},
{
  code: "2.5", unit: "2: Analytic Geometry", title: "Verifying Geometric Properties",
  intro: r`Use \textbf{slope}, \textbf{length}, and \textbf{midpoint} to prove facts about figures on the coordinate plane.`,
  ideas: [
    r`\textbf{Parallel} sides $\Rightarrow$ equal slopes; \textbf{perpendicular} $\Rightarrow$ slopes multiply to $-1$.`,
    r`\textbf{Equal lengths} prove isosceles/equilateral/rhombus; \textbf{$90^\circ$} proves right angles/rectangles.`,
    r`A \textbf{parallelogram} has both pairs of opposite sides parallel \emph{or} diagonals that bisect each other.`,
    r`State the property, do the calculation, then write a concluding sentence.`,
  ],
  examples: [
    { t: "Right triangle by slopes", body: r`Show $\triangle ABC$ with $A(1,1)$, $B(4,1)$, $C(4,5)$ is right-angled.
\soln Slope $AB=0$ (horizontal); slope $BC$ is undefined (vertical). Horizontal $\perp$ vertical, so the angle at $B$ is $90^\circ$ --- a right triangle.` },
    { t: "Isosceles by lengths", body: r`Show $\triangle ABC$ with $A(0,0)$, $B(6,0)$, $C(3,4)$ is isosceles.
\soln $AB=6$; $AC=\sqrt{9+16}=5$; $BC=\sqrt{9+16}=5$. Since $AC=BC$, it is isosceles.` },
    { t: "Parallelogram by slopes", body: r`Show $ABCD$ with $A(0,0)$, $B(4,0)$, $C(5,3)$, $D(1,3)$ is a parallelogram.
\soln Slope $AB=0=$ slope $DC$; slope $AD=3=$ slope $BC$. Both pairs of opposite sides are parallel.` },
    { t: "Diagonals bisect each other", body: r`Show the diagonals of $ABCD$ with $A(0,0)$, $B(4,1)$, $C(6,5)$, $D(2,4)$ bisect each other.
\soln Midpoint of $AC=(3,2.5)$; midpoint of $BD=(3,2.5)$. They share a midpoint, so the diagonals bisect each other (a parallelogram).` },
    { t: "Right angle test", body: r`Show $\triangle ABC$ with $A(0,0)$, $B(2,4)$, $C(6,2)$ has a right angle at $B$.
\soln Slope $AB=2$; slope $BC=\tfrac{2-4}{6-2}=-\tfrac12$. Product $=2\cdot(-\tfrac12)=-1$, so $AB\perp BC$: right angle at $B$.` },
    { t: "Classify a triangle", body: r`Classify $\triangle ABC$ with $A(2,1)$, $B(5,1)$, $C(2,5)$.
\soln $AB=3$, $AC=4$, $BC=5$. Different lengths (scalene) and $3^2+4^2=5^2$, so it is a right scalene triangle.` },
    { t: "Midsegment property", body: r`In $\triangle ABC$ with $A(0,0)$, $B(8,0)$, $C(2,6)$, show the segment joining the midpoints of $AC$ and $BC$ is parallel to $AB$ and half its length.
\soln Midpoints: $AC\to(1,3)$, $BC\to(5,3)$. The midsegment has slope $0=$ slope $AB$ (parallel) and length $4=\tfrac12(8)$.` },
    { t: "Square check", body: r`Show $ABCD$ with $A(0,0)$, $B(3,0)$, $C(3,3)$, $D(0,3)$ is a square.
\soln All sides $=3$; slope $AB=0\perp$ slope $BC$ (undefined). Four equal sides and a right angle $\Rightarrow$ square.` },
    { t: "Rectangle proof (harder)", body: r`Show $ABCD$ with $A(1,2)$, $B(5,4)$, $C(3,8)$, $D(-1,6)$ is a rectangle.
\soln Slope $AB=\tfrac12=$ slope $DC$; slope $AD=-2=$ slope $BC$ (parallelogram). Also $AB\cdot AD=\tfrac12\cdot(-2)=-1$, a right angle. A parallelogram with a right angle is a rectangle.` },
  ],
  questions: [
    { ask: r`Show $\triangle ABC$ with $A(0,0)$, $B(5,0)$, $C(0,5)$ is a right isosceles triangle.`, ws: "2.8cm" },
    { ask: r`Show $\triangle ABC$ with $A(-3,0)$, $B(3,0)$, $C(0,4)$ is isosceles.`, ws: "2.6cm" },
    { ask: r`Determine whether $A(1,1)$, $B(4,2)$, $C(3,5)$, $D(0,4)$ is a parallelogram (use slopes).`, ws: "2.8cm" },
    { ask: r`Show the diagonals of $A(0,0)$, $B(6,2)$, $C(8,6)$, $D(2,4)$ bisect each other.`, ws: "2.8cm" },
    { ask: r`Is $\triangle ABC$ with $A(0,0)$, $B(4,2)$, $C(2,-4)$ right-angled at $A$? Use slopes.`, ws: "2.8cm" },
    { ask: r`Classify $\triangle ABC$ with $A(1,1)$, $B(4,1)$, $C(4,5)$ by side lengths.`, ws: "2.6cm" },
    { ask: r`Show $A(0,0)$, $B(4,0)$, $C(4,4)$, $D(0,4)$ is a square.`, ws: "2.6cm" },
    { ask: r`Show $A(-1,-1)$, $B(2,0)$, $C(1,3)$, $D(-2,2)$ has four equal sides (rhombus).`, ws: "2.8cm" },
    { ask: r`In $\triangle ABC$, $A(0,0)$, $B(6,0)$, $C(0,6)$, show the midsegment joining midpoints of $AC$ and $BC$ is parallel to $AB$.`, ws: "3.0cm" },
    { ask: r`Verify $(3,4)$ is equidistant from $(0,0)$ and $(6,0)$ (i.e. on the right bisector of that segment).`, ws: "2.6cm" },
    { ask: r`Determine whether $A(0,0)$, $B(3,1)$, $C(4,4)$, $D(1,3)$ is a parallelogram.`, ws: "2.6cm" },
    { ask: r`Is $\triangle ABC$ with $A(1,2)$, $B(4,2)$, $C(1,6)$ scalene, isosceles, or equilateral?`, ws: "2.6cm" },
    { ask: r`Show $A(0,0)$, $B(4,2)$, $C(6,6)$, $D(2,4)$ is a rectangle (parallelogram with a right angle).`, ws: "3.2cm", challenge: true },
  ],
  answers: [
    r`$AB=AC=5$ (equal), and $AB\perp AC$ (slopes $0$ and undefined): right isosceles.`,
    r`$AC=\sqrt{9+16}=5=BC$ --- isosceles.`,
    r`Slope $AB=\tfrac13=$ slope $DC$; slope $AD=3=$ slope $BC$: yes, parallelogram.`,
    r`Mid $AC=(4,3)=$ mid $BD$ --- diagonals bisect each other.`,
    r`Slope $AB=\tfrac12$, slope $AC=-2$; product $-1$: yes, right angle at $A$.`,
    r`$3,4,5$ --- right scalene.`,
    r`All sides $4$; $AB\perp BC$: square.`,
    r`Each side $=\sqrt{9+1}=\sqrt{10}$: rhombus.`,
    r`Midpoints $(0,3),(3,3)$; slope $0=$ slope $AB$: parallel.`,
    r`Distance to each $=\sqrt{9+16}=5$ --- equidistant.`,
    r`Slope $AB=\tfrac13=$ slope $DC$; slope $AD=3=$ slope $BC$: parallelogram.`,
    r`$AB=3$, $AC=4$, $BC=5$: scalene (also right).`,
    r`Slopes give parallelogram; $AB\cdot AD=\tfrac12\cdot(-2)=-1$: rectangle.`,
  ],
},
{
  code: "2.6", unit: "2: Analytic Geometry", title: "Problems Involving Lines \\& Line Segments",
  intro: r`Combine midpoint, length, and slope tools to solve multi-step geometry problems.`,
  ideas: [
    r`The \textbf{centroid} (intersection of medians) is the average of all three vertices.`,
    r`A point on a \textbf{right bisector} is equidistant from the segment's two endpoints.`,
    r`Break each problem into known steps: midpoint, slope, equation, intersection.`,
    r`Sketch the situation first --- it reveals which tool you need.`,
  ],
  examples: [
    { t: "Centroid", body: r`Find the centroid of $\triangle ABC$ with $A(0,0)$, $B(6,0)$, $C(3,9)$.
\soln Average the vertices: $\left(\tfrac{0+6+3}{3},\tfrac{0+0+9}{3}\right)=(3,3).$` },
    { t: "Parallel line", body: r`Find the line through $(1,2)$ parallel to $2x+y=5$.
\soln $2x+y=5\Rightarrow y=-2x+5$ (slope $-2$). Through $(1,2)$: $y-2=-2(x-1)\Rightarrow y=-2x+4.$` },
    { t: "Perpendicular bisector + intercept", body: r`Find the perpendicular bisector of $A(2,3)$, $B(8,7)$ and its $y$-intercept.
\soln Midpoint $(5,5)$; slope $AB=\tfrac{4}{6}=\tfrac23$, perpendicular $-\tfrac32$: $y-5=-\tfrac32(x-5)\Rightarrow y=-\tfrac32x+\tfrac{25}{2}$. The $y$-intercept is $\tfrac{25}{2}=12.5.$` },
    { t: "Equidistant point on an axis", body: r`Find the point on the $x$-axis equidistant from $A(1,2)$ and $B(5,4)$.
\soln Let the point be $(x,0)$: $(x-1)^2+4=(x-5)^2+16\Rightarrow -2x+5=-10x+41\Rightarrow 8x=36\Rightarrow x=4.5$. The point is $(4.5,0).$` },
    { t: "Length of a median", body: r`In $\triangle ABC$ with $A(-2,0)$, $B(4,0)$, $C(1,6)$, find the length of the median from $C$.
\soln Midpoint $AB=(1,0)$; length from $C(1,6)$ is $\sqrt{0^2+6^2}=6.$` },
    { t: "Altitude through the origin", body: r`Find the altitude from $A(0,0)$ to $BC$, where $B(2,4)$, $C(6,0)$.
\soln Slope $BC=\tfrac{0-4}{6-2}=-1$, so altitude slope $=1$ through the origin: $y=x.$` },
    { t: "Right-bisector check", body: r`Verify that $(3,2)$ lies on the right bisector of $A(1,0)$, $B(5,4)$.
\soln Distance to $A=\sqrt{4+4}=\sqrt8$; distance to $B=\sqrt{4+4}=\sqrt8$. Equal, so $(3,2)$ is on the right bisector.` },
    { t: "Circle through a midpoint", body: r`Find the equation of the circle (centre origin) through the midpoint of $(6,0)$ and $(0,8)$.
\soln Midpoint $(3,4)$; $r^2=9+16=25$, so $x^2+y^2=25.$` },
    { t: "Full triangle analysis (harder)", body: r`For $\triangle ABC$ with $A(0,0)$, $B(6,0)$, $C(0,8)$, find (a) the perimeter, (b) the median from $C$, (c) the centroid.
\soln (a) $AB=6$, $AC=8$, $BC=\sqrt{36+64}=10$; perimeter $=24$. (b) Midpoint $AB=(3,0)$; slope from $C(0,8)$ is $\tfrac{0-8}{3-0}=-\tfrac83$: $y=-\tfrac83x+8$. (c) Centroid $=\left(\tfrac{0+6+0}{3},\tfrac{0+0+8}{3}\right)=\left(2,\tfrac83\right).$` },
  ],
  questions: [
    { ask: r`Find the centroid of $\triangle ABC$ with $A(0,0)$, $B(9,0)$, $C(3,6)$.`, ws: "2.4cm" },
    { ask: r`Find the line through $(2,-1)$ parallel to $y=3x+4$.`, ws: "2.2cm" },
    { ask: r`Find the line through $(0,4)$ perpendicular to $y=\tfrac12x-2$.`, ws: "2.4cm" },
    { ask: r`Find the perpendicular bisector of $A(0,0)$, $B(4,6)$.`, ws: "2.6cm" },
    { ask: r`Find the point on the $x$-axis equidistant from $(0,3)$ and $(6,1)$.`, ws: "2.8cm" },
    { ask: r`In $\triangle ABC$ with $A(0,0)$, $B(8,0)$, $C(4,6)$, find the length of the median from $C$.`, ws: "2.6cm" },
    { ask: r`Find the altitude from $A(0,0)$ to $BC$, where $B(1,3)$, $C(5,1)$.`, ws: "2.6cm" },
    { ask: r`Verify that $(2,2)$ lies on the right bisector of $A(0,0)$, $B(4,4)$.`, ws: "2.6cm" },
    { ask: r`Find the equation of the circle (centre origin) through the midpoint of $(8,0)$ and $(0,6)$.`, ws: "2.6cm" },
    { ask: r`Find where the line $y=2x-1$ meets the line $y=-x+5$.`, ws: "2.4cm" },
    { ask: r`A triangle has vertices $A(0,0)$, $B(4,0)$, $C(4,3)$. Find its perimeter and centroid.`, ws: "2.8cm" },
    { ask: r`Find the point on the $y$-axis equidistant from $(3,0)$ and $(-1,4)$.`, ws: "2.8cm" },
    { ask: r`For $\triangle ABC$ with $A(-3,0)$, $B(3,0)$, $C(0,9)$, find the perimeter, the median from $C$, and the centroid.`, ws: "3.4cm", challenge: true },
  ],
  answers: [
    r`$\left(\tfrac{0+9+3}{3},\tfrac{0+0+6}{3}\right)=(4,2)$.`,
    r`$y=3x-7$.`,
    r`Slope $-2$: $y=-2x+4$.`,
    r`Mid $(2,3)$, slope $AB=\tfrac32$, perp $-\tfrac23$: $y=-\tfrac23x+\tfrac{13}{3}$.`,
    r`$(x-0)^2+9=(x-6)^2+1\Rightarrow x=\tfrac{28}{12}=\tfrac73$: $\left(\tfrac73,0\right)$.`,
    r`Mid $AB=(4,0)$; length $=6$.`,
    r`Slope $BC=-\tfrac12$, perp $2$: $y=2x$.`,
    r`Distance to each $=\sqrt8$ --- yes, equidistant.`,
    r`Mid $(4,3)$; $r^2=25$: $x^2+y^2=25$.`,
    r`$2x-1=-x+5\Rightarrow x=2$, $y=3$: $(2,3)$.`,
    r`Perimeter $3+4+5=12$; centroid $\left(\tfrac83,1\right)$.`,
    r`$(0,y)$: $9+y^2=1+(y-4)^2\Rightarrow 9=17-8y\Rightarrow y=1$: $(0,1)$.`,
    r`$AC=BC=\sqrt{9+81}=\sqrt{90}=3\sqrt{10}$, $AB=6$; perimeter $6+6\sqrt{10}$; median from $C$: $x=0$; centroid $(0,3)$.`,
  ],
},
];
