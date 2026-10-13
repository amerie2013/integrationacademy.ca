// MCV4U Unit 7 worksheets — Lines & Planes.
const r = String.raw;
const U = "7: Lines and Planes";

export default [
  {
    code: "7.1", unit: U, title: "Equations of Lines",
    intro: r`A line needs a point and a direction vector $\vec d$. Vector: $\vec r=\vec r_0+t\vec d$; parametric: $x=x_0+ta,\dots$; symmetric: $\tfrac{x-x_0}{a}=\tfrac{y-y_0}{b}$.`,
    ideas: [r`Vector: $\vec r=\vec r_0+t\vec d$.`, r`Parametric: $x=x_0+ta,\ y=y_0+tb\ (,z=z_0+tc)$.`, r`Direction through two points: $\vec d=B-A$.`],
    examples: [
      { t: "Vector equation", body: r`Line through $(1,2)$ with direction $(3,4)$.\soln
\textbf{Step 1 (recall the vector-equation form):} $\vec r=\vec r_0+t\vec d$, using a point $\vec r_0$ and direction $\vec d$.\\[3pt]
\textbf{Step 2 (substitute the given point and direction):} $\vec r_0=(1,2)$, $\vec d=(3,4)$.\\[3pt]
\textbf{Conclusion:} $\vec r=(1,2)+t(3,4)$.` },
      { t: "Parametric", body: r`Parametric form of that line.\soln
\textbf{Step 1 (split the vector equation into components):} $\vec r=(1,2)+t(3,4)$ means $x=1+3t$ and $y=2+4t$ separately.\\[3pt]
\textbf{Conclusion:} $x=1+3t,\ y=2+4t$.` },
      { t: "Through two points", body: r`Vector equation through $A(1,0,2),B(4,6,8)$.\soln
\textbf{Step 1 (find a direction vector by subtracting the points):} $\vec d=B-A=(4-1,\,6-0,\,8-2)=(3,6,6)$.\\[3pt]
\textbf{Step 2 (pick either point, e.g.\ $A$, and write the equation):} $\vec r=A+t\vec d$.\\[3pt]
\textbf{Conclusion:} $\vec r=(1,0,2)+t(3,6,6)$.` },
      { t: "Symmetric", body: r`Symmetric equation through $(1,2)$ with direction $(3,4)$.\soln
\textbf{Step 1 (start from the parametric form):} $x=1+3t\Rightarrow t=\dfrac{x-1}3$; $y=2+4t\Rightarrow t=\dfrac{y-2}4$.\\[3pt]
\textbf{Step 2 (set the two expressions for $t$ equal, eliminating the parameter):} $\dfrac{x-1}3=\dfrac{y-2}4$.\\[3pt]
\textbf{Conclusion:} $\dfrac{x-1}{3}=\dfrac{y-2}{4}$.` },
      { t: "Point on the line?", body: r`Is $(4,6)$ on $\vec r=(1,2)+t(3,4)$?\soln
\textbf{Step 1 (use the $x$-equation to solve for $t$):} $4=1+3t\Rightarrow t=1$.\\[3pt]
\textbf{Step 2 (check the same $t$ in the $y$-equation):} $2+4(1)=6$, which matches the given $y=6$.\\[3pt]
\textbf{Conclusion:} yes, $(4,6)$ is on the line (at $t=1$).` },
      { t: "Vector equation", body: r`Line through $(0,1)$ with direction $(2,5)$.\soln
\textbf{Step 1 (apply $\vec r=\vec r_0+t\vec d$):} $\vec r_0=(0,1)$, $\vec d=(2,5)$.\\[3pt]
\textbf{Conclusion:} $\vec r=(0,1)+t(2,5)$.` },
      { t: "Parametric", body: r`Parametric form of $\vec r=(3,-1)+t(1,2)$.\soln
\textbf{Step 1 (split into components):} $x=3+t$, $y=-1+2t$.\\[3pt]
\textbf{Conclusion:} $x=3+t,\ y=-1+2t$.` },
      { t: "Direction vector", body: r`Direction through $A(2,1,0),B(5,7,6)$.\soln
\textbf{Step 1 (subtract $A$ from $B$):} $(5-2,\,7-1,\,6-0)$.\\[3pt]
\textbf{Conclusion:} $(3,6,6)$.` },
      { t: "Point on the line?", body: r`Is $(7,11)$ on $\vec r=(1,2)+t(3,3)$?\soln
\textbf{Step 1 (solve for $t$ using the $x$-equation):} $7=1+3t\Rightarrow t=2$.\\[3pt]
\textbf{Step 2 (check the same $t$ in the $y$-equation):} $2+3(2)=8$, but the given $y$-value is $11$.\\[3pt]
\textbf{Conclusion:} $8\ne11$, so no --- $(7,11)$ is not on the line.` },
    ],
    questions: [
      { ask: r`Vector equation through $(0,1)$ with direction $(2,5)$.` },
      { ask: r`Parametric form of $\vec r=(3,-1)+t(1,2)$.` },
      { ask: r`Direction vector through $A(2,1,0),B(5,7,6)$.` },
      { ask: r`Symmetric equation through $(0,0)$ with direction $(1,3)$.` },
      { ask: r`Is $(7,11)$ on $\vec r=(1,2)+t(3,3)$?` },
      { ask: r`Vector equation through $(2,3)$ with direction $(1,-1)$.` },
      { ask: r`Parametric form through $(1,1,1)$ with direction $(2,0,3)$.` },
      { ask: r`Direction vector through $A(0,0,0),B(3,4,12)$.` },
      { ask: r`Is $(5,8)$ on $\vec r=(1,2)+t(2,3)$?` },
      { ask: r`Symmetric equation through $(2,1)$ with direction $(4,2)$.` },
      { ask: r`Vector equation of the $x$-axis.` },
      { ask: r`Is $(2,4,6)$ on $\vec r=(0,0,0)+t(1,2,3)$?` },
      { ask: r`Write the line through $A(1,2,3)$ and $B(4,8,9)$ in vector and parametric form.`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$\vec r=(0,1)+t(2,5)$`, r`$x=3+t,\ y=-1+2t$`, r`$(3,6,6)$`, r`$\dfrac{x}{1}=\dfrac{y}{3}$`, r`no`, r`$\vec r=(2,3)+t(1,-1)$`, r`$x=1+2t,\ y=1,\ z=1+3t$`, r`$(3,4,12)$`, r`$5=1+2t\Rightarrow t=2$; $2+6=8=8$ ✓ yes`, r`$\dfrac{x-2}{4}=\dfrac{y-1}{2}$`, r`$\vec r=(0,0,0)+t(1,0,0)$`, r`$t=2$ throughout ✓ yes`, r`$\vec d=(3,6,6)$; $\vec r=(1,2,3)+t(3,6,6)$; $x=1+3t,y=2+6t,z=3+6t$`],
  },
  {
    code: "7.2", unit: U, title: "Equations of Planes",
    intro: r`A plane needs a point and a normal $\vec n=(A,B,C)$. Scalar: $Ax+By+Cz=D$ (the coefficients are the normal). Get a normal from two directions via the cross product.`,
    ideas: [r`Scalar: $Ax+By+Cz=D$, normal $(A,B,C)$.`, r`$A(x-x_0)+B(y-y_0)+C(z-z_0)=0$.`, r`Normal from directions: $\vec n=\vec u\times\vec v$.`],
    examples: [
      { t: "From point & normal", body: r`Plane through $(1,2,3)$ with normal $(2,1,-1)$.\soln
\textbf{Step 1 (apply $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$):} with $(A,B,C)=(2,1,-1)$ and $(x_0,y_0,z_0)=(1,2,3)$: $2(x-1)+1(y-2)-1(z-3)=0$.\\[3pt]
\textbf{Step 2 (expand):} $2x-2+y-2-z+3=0$.\\[3pt]
\textbf{Step 3 (simplify and isolate the constant):} $2x+y-z-1=0\Rightarrow2x+y-z=1$.\\[3pt]
\textbf{Conclusion:} $2x+y-z=1$.` },
      { t: "Read the normal", body: r`Normal of $2x+y-z=5$.\soln
\textbf{Step 1 (recall that in $Ax+By+Cz=D$, the coefficients form the normal):} $(A,B,C)$.\\[3pt]
\textbf{Conclusion:} normal $=(2,1,-1)$.` },
      { t: "Point on the plane?", body: r`Is $(1,1,1)$ on $2x+y-z=2$?\soln
\textbf{Step 1 (substitute the point into the plane's equation):} $2(1)+1-1$.\\[3pt]
\textbf{Step 2 (compare to the right side):} $2+1-1=2$, matching the required value of $2$.\\[3pt]
\textbf{Conclusion:} yes, $(1,1,1)$ is on the plane.` },
      { t: "Normal from directions", body: r`Plane contains $\vec u=(1,0,0),\vec v=(0,1,0)$. Find a normal.\soln
\textbf{Step 1 (recall that a normal is perpendicular to both in-plane directions, found via the cross product):} $\vec n=\vec u\times\vec v$.\\[3pt]
\textbf{Step 2 (compute the cross product):} $(0\cdot0-0\cdot1,\,0\cdot0-1\cdot0,\,1\cdot1-0\cdot0)=(0,0,1)$.\\[3pt]
\textbf{Conclusion:} $\vec n=(0,0,1)$.` },
      { t: "Through three points", body: r`Plane through $A(0,0,0),B(1,0,0),C(0,1,0)$.\soln
\textbf{Step 1 (build two in-plane direction vectors from the points):} $\vec{AB}=(1,0,0)$, $\vec{AC}=(0,1,0)$.\\[3pt]
\textbf{Step 2 (find the normal via the cross product):} $\vec{AB}\times\vec{AC}=(0,0,1)$.\\[3pt]
\textbf{Step 3 (write the equation using $A(0,0,0)$ as the point):} $0(x-0)+0(y-0)+1(z-0)=0$.\\[3pt]
\textbf{Conclusion:} $z=0$.` },
      { t: "From point & normal", body: r`Plane through $(0,0,0)$ with normal $(1,2,3)$.\soln
\textbf{Step 1 (apply $A(x-x_0)+B(y-y_0)+C(z-z_0)=0$ with the origin as the point):} $1(x-0)+2(y-0)+3(z-0)=0$.\\[3pt]
\textbf{Conclusion:} $x+2y+3z=0$.` },
      { t: "Read the normal", body: r`Normal of $3x-y+4z=7$.\soln
\textbf{Step 1 (read the coefficients of $x,y,z$ directly):} $(3,-1,4)$.\\[3pt]
\textbf{Conclusion:} normal $=(3,-1,4)$.` },
      { t: "Point on the plane?", body: r`Is $(2,0,1)$ on $x+y+z=3$?\soln
\textbf{Step 1 (substitute the point):} $2+0+1$.\\[3pt]
\textbf{Step 2 (compare to $3$):} $2+0+1=3$, matches.\\[3pt]
\textbf{Conclusion:} yes.` },
      { t: "Vertical plane", body: r`Plane through $(2,0,0)$ with normal $(1,0,0)$.\soln
\textbf{Step 1 (apply the point-normal formula):} $1(x-2)+0(y-0)+0(z-0)=0$.\\[3pt]
\textbf{Step 2 (simplify):} $x-2=0$.\\[3pt]
\textbf{Conclusion:} $x=2$.` },
    ],
    questions: [
      { ask: r`Scalar equation through $(0,0,0)$ with normal $(1,2,3)$.` },
      { ask: r`Normal vector of $3x-y+4z=7$.` },
      { ask: r`Is $(2,0,1)$ on $x+y+z=3$?` },
      { ask: r`Normal of the plane containing $(1,0,0)$ and $(0,0,1)$.` },
      { ask: r`Scalar equation through $(2,0,0)$ with normal $(1,0,0)$.` },
      { ask: r`Scalar equation through $(1,1,1)$ with normal $(1,1,1)$.` },
      { ask: r`Normal vector of $x-2y+5z=0$.` },
      { ask: r`Is $(0,3,0)$ on $2x+y-z=3$?` },
      { ask: r`Equation of the plane $z=0$'s normal.` },
      { ask: r`Scalar equation through $(0,0,4)$ with normal $(0,0,1)$.` },
      { ask: r`Normal of the plane through $A(0,0,0),B(2,0,0),C(0,3,0)$.` },
      { ask: r`Is $(1,2,3)$ on $x+y+z=6$?` },
      { ask: r`Find the scalar equation of the plane through $A(1,0,0),B(0,1,0),C(0,0,1)$.`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$x+2y+3z=0$`, r`$(3,-1,4)$`, r`yes ($3=3$)`, r`$(0,-1,0)$`, r`$x=2$`, r`$x+y+z=3$`, r`$(1,-2,5)$`, r`yes ($3=3$)`, r`$(0,0,1)$`, r`$z=4$`, r`$(0,0,6)$ or $(0,0,1)$`, r`yes ($6=6$)`, r`$\vec n=\vec{AB}\times\vec{AC}=(1,1,1)$; $x+y+z=1$`],
  },
  {
    code: "7.3", unit: U, title: "Intersections of Lines & Planes",
    intro: r`Line–plane: substitute the line into the plane and solve for $t$. Compare directions/normals to detect parallel, skew, or coincident.`,
    ideas: [r`Line–plane: substitute $x,y,z$; solve for $t$; back-substitute.`, r`Line $\parallel$ plane when $\vec d\cdot\vec n=0$.`, r`Planes $\parallel$ when normals are parallel.`],
    examples: [
      { t: "Line meets a plane", body: r`Where does $\vec r=(1,0,0)+t(0,0,1)$ meet $z=5$?\soln
\textbf{Step 1 (write the line's $z$-component):} $z=0+t\cdot1=t$.\\[3pt]
\textbf{Step 2 (set it equal to the plane's condition $z=5$ and solve):} $t=5$.\\[3pt]
\textbf{Step 3 (substitute $t=5$ into all three components):} $x=1$, $y=0$, $z=5$.\\[3pt]
\textbf{Conclusion:} they meet at $(1,0,5)$.` },
      { t: "Substitute into the plane", body: r`Where does $x=t,y=t,z=t$ meet $x+y+z=6$?\soln
\textbf{Step 1 (substitute the line's components into the plane's equation):} $t+t+t=6$.\\[3pt]
\textbf{Step 2 (solve for $t$):} $3t=6\Rightarrow t=2$.\\[3pt]
\textbf{Step 3 (substitute back):} $x=y=z=2$.\\[3pt]
\textbf{Conclusion:} they meet at $(2,2,2)$.` },
      { t: "Line parallel to a plane", body: r`Is $\vec r=(0,0,1)+t(1,1,0)$ parallel to $z=5$?\soln
\textbf{Step 1 (identify the line's direction and the plane's normal):} $\vec d=(1,1,0)$; the plane $z=5$ has normal $(0,0,1)$.\\[3pt]
\textbf{Step 2 (test parallelism, $\vec d\cdot\vec n=0$):} $(1,1,0)\cdot(0,0,1)=0+0+0=0$.\\[3pt]
\textbf{Step 3 (rule out the line lying in the plane):} the given point $(0,0,1)$ does not satisfy $z=5$.\\[3pt]
\textbf{Conclusion:} parallel (and not contained in the plane).` },
      { t: "Parallel lines", body: r`Are $\vec r=(0,0)+t(2,4)$ and $\vec r=(1,1)+s(1,2)$ parallel?\soln
\textbf{Step 1 (compare the direction vectors):} $(2,4)$ and $(1,2)$.\\[3pt]
\textbf{Step 2 (check if one is a scalar multiple of the other):} $(2,4)=2\cdot(1,2)$.\\[3pt]
\textbf{Conclusion:} yes, parallel (the directions are scalar multiples).` },
      { t: "Parallel planes", body: r`Are $2x+y-z=1$ and $4x+2y-2z=9$ parallel?\soln
\textbf{Step 1 (read off both normals):} $(2,1,-1)$ and $(4,2,-2)$.\\[3pt]
\textbf{Step 2 (check if one normal is a scalar multiple of the other):} $(4,2,-2)=2\cdot(2,1,-1)$ --- yes, so the planes are parallel.\\[3pt]
\textbf{Step 3 (check if they're actually the same plane by scaling the first equation):} $2\times(2x+y-z=1)$ gives $4x+2y-2z=2$, which does \emph{not} match the given $=9$.\\[3pt]
\textbf{Conclusion:} parallel and distinct (not the same plane).` },
      { t: "Line meets a plane", body: r`Where does $x=t,y=2t,z=0$ meet $z=0$?\soln
\textbf{Step 1 (compare the line's $z$-component to the plane's condition):} the line always has $z=0$, exactly matching the plane $z=0$.\\[3pt]
\textbf{Step 2 (interpret):} the condition holds for every value of $t$, not just one.\\[3pt]
\textbf{Conclusion:} the line lies entirely in the plane --- every point on the line is an intersection point.` },
      { t: "Substitute", body: r`Where does $x=t,y=t,z=t$ meet $x+y+z=9$?\soln
\textbf{Step 1 (substitute into the plane's equation):} $t+t+t=9$.\\[3pt]
\textbf{Step 2 (solve):} $3t=9\Rightarrow t=3$.\\[3pt]
\textbf{Conclusion:} they meet at $(3,3,3)$.` },
      { t: "Line crosses a plane", body: r`Is direction $(1,1,1)$ parallel to $x+y+z=4$?\soln
\textbf{Step 1 (identify the plane's normal):} $(1,1,1)$.\\[3pt]
\textbf{Step 2 (test $\vec d\cdot\vec n=0$):} $(1,1,1)\cdot(1,1,1)=1+1+1=3$.\\[3pt]
\textbf{Step 3 (interpret):} since the dot product isn't $0$, the direction isn't perpendicular to the normal.\\[3pt]
\textbf{Conclusion:} no, not parallel --- the line crosses the plane.` },
      { t: "Simple plane", body: r`Where does $\vec r=(0,0,0)+t(1,0,0)$ meet $x=4$?\soln
\textbf{Step 1 (write the line's $x$-component):} $x=0+t=t$.\\[3pt]
\textbf{Step 2 (set equal to $4$ and solve):} $t=4$.\\[3pt]
\textbf{Step 3 (substitute back):} $y=0$, $z=0$.\\[3pt]
\textbf{Conclusion:} they meet at $(4,0,0)$.` },
    ],
    questions: [
      { ask: r`Where does $x=t,y=t,z=t$ meet $x+y+z=9$?` },
      { ask: r`Are the planes $x+y+z=1$ and $2x+2y+2z=5$ parallel?` },
      { ask: r`Is the line with direction $(1,1,1)$ parallel to $x+y+z=4$?` },
      { ask: r`Where does $\vec r=(0,0,0)+t(1,0,0)$ meet $x=4$?` },
      { ask: r`Are $\vec r=(0,0)+t(2,4)$ and $\vec r=(1,1)+s(1,2)$ parallel?` },
      { ask: r`Where does $x=t,y=0,z=0$ meet $x=7$?` },
      { ask: r`Are the planes $x-y+z=0$ and $2x-2y+2z=3$ parallel?` },
      { ask: r`Is direction $(1,0,0)$ parallel to the plane $y=5$?` },
      { ask: r`Where does $x=2t,y=t,z=t$ meet $x+y+z=8$?` },
      { ask: r`Are $\vec r=(0,0)+t(1,2)$ and $\vec r=(0,0)+s(2,1)$ parallel?` },
      { ask: r`Where does $\vec r=(0,0,1)+t(0,0,1)$ meet $z=10$?` },
      { ask: r`Two planes have normals $(1,2,3)$ and $(2,4,6)$. Parallel?` },
      { ask: r`Find where the line $x=1+t,\ y=2+t,\ z=3+t$ meets the plane $x+y+z=12$.`, challenge: true, ws: "3.5cm" },
    ],
    answers: [r`$(3,3,3)$`, r`parallel and distinct`, r`no ($\vec d\cdot\vec n=3$)`, r`$(4,0,0)$`, r`yes`, r`$(7,0,0)$`, r`parallel and distinct`, r`yes ($\vec d\cdot\vec n=0$, $(1,0,0)$)`, r`$4t=8\Rightarrow t=2$: $(4,2,2)$`, r`no (not scalar multiples)`, r`$(0,0,10)$`, r`yes (normals are multiples)`, r`$(1+t)+(2+t)+(3+t)=12\Rightarrow 6+3t=12\Rightarrow t=2$: $(3,4,5)$`],
  },
];
