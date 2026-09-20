// MCV4U Unit 7 assignments — Lines & Planes in 3-D.
const r = String.raw;

export const U7 = {
  "7.1": {
    topic: "Equations of Lines",
    K: [
      r`Write the vector, parametric and symmetric equations of the line through $P(-2,5)$ with direction vector $(4,-3)$. Decide whether $(6,-1)$ and $(0,3)$ lie on the line.`,
      r`Find the vector and parametric equations of the line through $A(2,-1,4)$ and $B(5,3,-2)$, and find where the line crosses the $xy$-plane ($z=0$).`,
      r`The line $\dfrac{x-3}{2}=\dfrac{y+1}{-5}=\dfrac{z-4}{3}$ is given. State a point and a direction vector, write parametric equations, and find the point on the line when $t=2$.`,
    ],
    T: [
      r`Decide whether the lines $\vec r=(1,2,3)+t(2,-1,1)$ and $\vec r=(4,0,5)+s(1,3,-2)$ intersect, are parallel or are skew. Show every equation you solve.`,
      r`Find the point on the line $\vec r=(1,0,2)+t(2,1,-2)$ that is closest to the origin. (Use the fact that the vector from the origin to that point is perpendicular to the direction.)`,
    ],
    C: [
      r`Explain why a line needs a point and a direction vector, why the direction vector is not unique, and how two different equations can describe the same line.`,
      r`Explain why a line in 2-D can be written as a single scalar equation $Ax+By=C$ but a line in 3-D cannot, and what forms are used in 3-D instead.`,
    ],
    A: [
      r`An aircraft's position, in km, is $\vec r=(10,20,8)+t(300,-200,-40)$ where $t$ is in hours. (a) Find its speed. (b) Find its position after 6 minutes. (c) When does it reach the ground ($z=0$) and where?`,
      r`A plane descends toward a runway along $\vec r=(0,0,600)+t(100,0,-30)$ (metres, with the runway at $z=0$). (a) Find where the plane touches down. (b) Find the glide angle to the horizontal. (c) Find its position when it is 150 m above the ground.`,
      r`A ski-lift cable runs from $A(0,0,200)$ to $B(600,80,500)$ (metres). (a) Write parametric equations of the cable. (b) Find the length of the cable. (c) Find the point on the cable at a height of 350 m.`,
    ],
  },

  "7.2": {
    topic: "Equations of Planes",
    K: [
      r`Find the scalar equation of the plane through $P(2,-1,4)$ with normal $\vec n=(3,2,-5)$, and decide whether $(0,0,3.2)$ lies on it.`,
      r`Find the scalar equation of the plane through $A(1,2,0)$, $B(3,-1,2)$ and $C(0,4,5)$ using the cross product, and check that all three points satisfy it.`,
      r`For the plane $4x+6y+3z=24$, find the intercepts with the three axes, and decide whether $(3,1,2)$ lies on the plane.`,
    ],
    T: [
      r`Find the scalar equation of the plane that contains the line $\vec r=(1,0,2)+t(2,1,-1)$ and the point $P(0,3,1)$. Explain how you found a normal.`,
      r`Find the angle between the planes $x+2y+2z=5$ and $2x-y+2z=1$ by using their normals, and explain why this is the angle between the planes.`,
    ],
    C: [
      r`Explain why $ax+by+cz=d$ describes a plane, using the dot product of the normal with a vector lying in the plane, and what $d$ represents.`,
      r`Describe three different ways to define a plane and explain in which of them you need the cross product to find a normal vector.`,
    ],
    A: [
      r`A roof plane passes through $P(0,0,3)$, $Q(6,0,5)$ and $R(0,4,3)$ (metres). (a) Find the scalar equation of the roof plane. (b) Find the angle the roof makes with the horizontal. (c) Find the height of the roof at the point above $(3,2)$ on the ground.`,
      r`Drill holes locate a rock layer at $A(0,0,-100)$, $B(200,0,-120)$ and $C(0,150,-90)$ (metres, $z$ = height). (a) Find the equation of the plane containing the layer. (b) Find the depth of the layer below the point $(100,75)$. (c) Explain why three drill holes are enough to define the layer if it is flat.`,
      r`A hillside is modelled by the plane $2x+3y+6z=42$ (units in tens of metres). (a) Find the intercepts. (b) Find the height $z$ above the point $(6,4)$. (c) Find the angle between the hillside and the horizontal.`,
    ],
  },

  "7.3": {
    topic: "Intersections of Lines & Planes",
    K: [
      r`Find where the line $\vec r=(2,-1,3)+t(1,2,-2)$ meets the plane $3x-y+2z=17$.`,
      r`The line $\vec r=(1,1,0)+t(2,-1,-3)$ is given. Decide whether it is parallel to, lies in, or crosses each plane: (a) $x+2y=3$ (b) $x+2y=7$ (c) $x+y+z=2$.`,
      r`Find a vector equation of the line where the planes $x+y+z=7$ and $x-y+2z=5$ intersect. (Use the cross product of the normals for the direction.)`,
    ],
    T: [
      r`Solve the system $x+2y+z=7$, $2x-y+z=6$, $x-y+2z=7$ and describe geometrically what the solution means for the three planes.`,
      r`For what value of $k$ are the planes $x+2y+kz=3$ and $2x+4y+6z=7$ parallel? For that $k$, are they parallel and distinct or coincident? Explain.`,
    ],
    C: [
      r`Describe all the possible ways a line and a plane can meet, and how the dot product of the direction vector with the normal tells you which case you have.`,
      r`Describe the possible ways in which three planes can intersect (point, line, no common point) and give a short geometric picture of each.`,
    ],
    A: [
      r`A drone flies along $\vec r=(0,0,20)+t(30,10,-2)$ (metres, $t$ in seconds) toward a wall lying in the plane $x=150$ that extends from the ground up to 60 m. (a) Find when and where the drone reaches the wall. (b) Does it hit the wall? Explain. (c) Find its speed.`,
      r`A lamp is at $L(0,0,10)$ m and its light passes through the point $Q(2,1,6)$ on its way to the ground. (a) Write the equation of the light ray. (b) Find where it meets the ground plane $z=0$. (c) Explain how this is used to find the shadow of an object.`,
      r`Two mining tunnels follow the lines $\vec r_1=(0,0,0)+t(2,1,-1)$ and $\vec r_2=(6,3,1)+s(1,-1,2)$ (metres). (a) Show that the tunnels do not intersect. (b) Show they are not parallel. (c) Find the shortest distance between them using $\dfrac{|(\vec P_2-\vec P_1)\cdot(\vec d_1\times\vec d_2)|}{|\vec d_1\times\vec d_2|}$.`,
    ],
  },
};
