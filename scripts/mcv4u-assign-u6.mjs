// MCV4U Unit 6 assignments — Geometry & Algebra of Vectors.
const r = String.raw;

export const U6 = {
  "6.1": {
    topic: "Introduction to Vectors",
    K: [
      r`Classify each quantity as a vector or a scalar and give a reason: momentum, work, weight, distance, the velocity of the wind, pressure.`,
      r`Convert between bearing forms: (a) a boat sails on a bearing of $250^\circ$ (write it in S–W form) (b) $S35^\circ E$ (true bearing) (c) $N80^\circ W$ (true bearing).`,
      r`In parallelogram $ABCD$, name the vectors equal to $\vec{AB}$ and to $\vec{AD}$, and name two different vectors that are opposite to $\vec{BC}$.`,
    ],
    T: [
      r`A hiker walks 3 km north and then 4 km east. State the distance walked and the magnitude of the displacement. Explain why they differ and which one is a vector.`,
      r`The weather report says "a northwest wind at 40 km/h". In which direction is the air actually moving? Give that direction as a true bearing, and explain the difference between the direction a wind comes from and the direction of its velocity vector.`,
    ],
    C: [
      r`Explain what makes a vector different from a scalar, using three examples of each, and explain why two vectors with the same length are not necessarily equal.`,
      r`Explain how bearings and the N/S–E/W notation describe the same direction, and describe a reliable method for converting between them.`,
    ],
    A: [
      r`A plane's airspeed is 300 km/h heading north and the wind blows at 50 km/h toward the east. (a) Classify airspeed, wind velocity, ground speed and the heading as vector or scalar. (b) State the true bearing of the wind's direction. (c) Explain why the plane's ground velocity differs from its air velocity.`,
      r`A ship sees a lighthouse on a bearing of $215^\circ$. (a) Write this bearing in S–W form. (b) What is the bearing of the ship as seen from the lighthouse? (c) Explain the relationship between the two bearings using opposite vectors.`,
      r`A 5 kg box rests on a table. Its weight is 49 N downward and the table pushes up with a force of 49 N. (a) Are these two forces equal vectors? Explain. (b) How are the two vectors related? (c) Explain what this means for the box's motion.`,
    ],
  },

  "6.2": {
    topic: "Vector Operations (Geometric)",
    K: [
      r`In parallelogram $OABC$, let $\vec{OA}=\vec a$ and $\vec{OC}=\vec c$. Express $\vec{OB}$, $\vec{AC}$ and $\vec{OM}$ in terms of $\vec a$ and $\vec c$, where $M$ is the midpoint of $OB$.`,
      r`Two forces of 7 N and 10 N act on a point with an angle of $60^\circ$ between them (tail to tail). Use the parallelogram law and the cosine law to find the magnitude of the resultant, and its direction relative to the 10 N force.`,
      r`If $|\vec a|=6$, find $|3\vec a|$, $|-2.5\vec a|$ and write the unit vector in the direction of $\vec a$ in terms of $\vec a$. Describe the direction of each.`,
    ],
    T: [
      r`Use vectors to prove that the midpoints of the sides of any quadrilateral $ABCD$ are the vertices of a parallelogram. (Use position vectors $\vec a,\vec b,\vec c,\vec d$.)`,
      r`Three vectors satisfy $\vec a+\vec b+\vec c=\vec 0$ and have magnitudes 5, 12 and 13. Explain why they can be drawn tip-to-tail as a closed triangle and show that this triangle has a right angle.`,
    ],
    C: [
      r`Explain why the triangle law (tip-to-tail) and the parallelogram law (tail-to-tail) give the same sum, and when each is more convenient.`,
      r`Explain why $\vec a-\vec b$ is the same as $\vec a+(-\vec b)$ and how it is drawn as the vector from the tip of $\vec b$ to the tip of $\vec a$ when both start at the same point.`,
    ],
    A: [
      r`A boat heads directly across a 200 m wide river at 5 m/s relative to the water, while the current flows at 3 m/s downstream. (a) Find the boat's speed relative to the ground and the angle of its path from its heading. (b) Find the time to cross. (c) How far downstream does it land?`,
      r`Two tugboats pull a barge with forces of 5000 N and 4000 N, with ropes making an angle of $50^\circ$ with each other. (a) Find the magnitude of the resultant force. (b) Find the angle the resultant makes with the 5000 N rope. (c) Explain what the barge does.`,
      r`A 200 N sign hangs at rest from two cables that each make an angle of $40^\circ$ with the vertical. (a) Draw the triangle of forces and explain why the two tensions and the weight form a closed triangle. (b) Find the tension in each cable. (c) What happens to the tension if the angle increases?`,
    ],
  },

  "6.3": {
    topic: "Cartesian Vectors in 2-D & 3-D",
    K: [
      r`Find the magnitude of (a) $\vec u=(-8,15)$ (b) $\vec v=(4,-4,7)$. Then find a unit vector in the direction of $\vec v$.`,
      r`Given $\vec u=(2,-1,3)$ and $\vec v=(-1,4,0)$, find $3\vec u-2\vec v$, $|\vec u+\vec v|$ and the unit vector in the direction of $\vec u$ (exact values).`,
      r`For $A(-2,5)$ and $B(4,-3)$, find $\vec{AB}$, $|\vec{AB}|$, the midpoint of $AB$, and the point $C$ for which $\vec{AC}=2\vec{AB}$.`,
    ],
    T: [
      r`Find a vector of length 14 that points in the direction opposite to $(2,-3,6)$. Show how you use the magnitude of the given vector.`,
      r`Show that $A(1,2,-1)$, $B(3,6,3)$ and $C(-1,-2,-5)$ are collinear by comparing $\vec{AB}$ and $\vec{AC}$, and describe the position of $A$ relative to $B$ and $C$.`,
    ],
    C: [
      r`Explain how the magnitude formula for a 3-D vector comes from applying the Pythagorean theorem twice.`,
      r`Explain the difference between a position vector and the vector between two points, and why a unit vector is useful when you only care about direction.`,
    ],
    A: [
      r`A drone leaves its base at the origin and flies to $P(120,50,30)$ m (east, north, height), then to $Q(200,-40,10)$ m. (a) Find the distance of each leg. (b) Find the total distance flown. (c) Find the straight-line distance from the base to $Q$ and compare.`,
      r`Two aircraft are at $A(4,-3,5)$ km and $B(-2,5,1)$ km. (a) Find the distance between them. (b) A third aircraft $C$ is two thirds of the way from $A$ to $B$ on the line joining them; find its position. (c) Is $C$ farther from $A$ or from $B$, and by how much?`,
      r`A sailboat's velocity is $(12,-5)$ km/h (east, north) and it starts at $(2,3)$ km. (a) Find its speed and a unit vector in its direction of travel. (b) Find its displacement after 3 hours. (c) Find its position after 3 hours.`,
    ],
  },

  "6.4": {
    topic: "The Dot Product",
    K: [
      r`Compute: (a) $(4,-2)\cdot(-3,5)$ (b) $(2,-3,1)\cdot(4,1,-5)$ and state what the result in (b) tells you about the two vectors (c) $|\vec u|$ for $\vec u=(3,-4,12)$ using $\vec u\cdot\vec u$.`,
      r`Find the angle between $\vec a=(1,2,2)$ and $\vec b=(2,-1,2)$ to the nearest tenth of a degree.`,
      r`Find $k$ so that $(k,2)$ is perpendicular to $(3,-6)$, and find the angle between $(2,1)$ and $(1,3)$.`,
    ],
    T: [
      r`Find the scalar projection and the vector projection of $\vec a=(3,4,0)$ onto $\vec b=(1,2,2)$, and show that $\vec a$ minus its projection is perpendicular to $\vec b$.`,
      r`Use the dot product to prove that the diagonals of a rhombus are perpendicular. (Let the sides be $\vec a$ and $\vec b$ with $|\vec a|=|\vec b|$ and use $\vec a+\vec b$ and $\vec a-\vec b$.)`,
    ],
    C: [
      r`Explain the geometric meaning of the dot product, including what a positive, zero and negative result tell you about the angle between two vectors.`,
      r`Explain why $\vec a\cdot\vec b=0$ does not mean $\vec a=\vec 0$ or $\vec b=\vec 0$, and explain why $\vec a\cdot\vec b=\vec a\cdot\vec c$ does not mean $\vec b=\vec c$.`,
    ],
    A: [
      r`A person pulls a wagon with a force of 60 N at $35^\circ$ above the horizontal for 25 m. (a) Find the work done. (b) Find the work if the force were horizontal. (c) Explain why the horizontal component is what does the work.`,
      r`A camera at $C(0,0,10)$ m films two points on the ground, $P(30,0,0)$ and $Q(0,40,0)$. (a) Write the vectors $\vec{CP}$ and $\vec{CQ}$. (b) Find the angle between the lines of sight. (c) Explain how the height of the camera affects the angle.`,
      r`A tow truck pulls with force $\vec F=(500,300)$ N while the car moves along $\vec d=(40,10)$ m. (a) Find the work done. (b) Find the angle between the force and the displacement. (c) Find the component of the force along the displacement.`,
    ],
  },

  "6.5": {
    topic: "The Cross Product",
    K: [
      r`Compute $(2,-1,3)\times(1,4,-2)$ and verify that the result is perpendicular to both vectors using the dot product.`,
      r`Find the area of the parallelogram determined by $\vec u=(3,1,2)$ and $\vec v=(1,-2,4)$.`,
      r`Find the area of the triangle with vertices $A(1,0,2)$, $B(3,1,5)$ and $C(2,4,3)$.`,
    ],
    T: [
      r`Find a vector of length 15 that is perpendicular to both $(1,2,2)$ and $(2,1,-2)$. Explain how the cross product gives the direction and how you fix the length.`,
      r`For $\vec a=(1,2,0)$ and $\vec b=(3,-1,2)$, verify that $|\vec a\times\vec b|^2+(\vec a\cdot\vec b)^2=|\vec a|^2|\vec b|^2$, and explain why this identity is true using the angle $\theta$ between the vectors.`,
    ],
    C: [
      r`Explain the geometric meaning of $\vec a\times\vec b$ (direction by the right-hand rule and magnitude as an area), and why $\vec a\times\vec b=-\,\vec b\times\vec a$.`,
      r`Compare the dot product and the cross product: what kind of quantity does each produce, what does each measure geometrically, and when would you use each?`,
    ],
    A: [
      r`A wrench has $\vec r=(0.3,0,0)$ m and a force $\vec F=(40,0,69.28)$ N is applied at its end. (a) Find the torque $\vec\tau=\vec r\times\vec F$. (b) Find its magnitude and direction. (c) Explain why the same force applied along the wrench would produce no torque.`,
      r`A triangular plot of sloping land has corners $A(0,0,0)$, $B(40,0,5)$ and $C(10,30,8)$ (metres). (a) Find the area of the sloping surface using the cross product. (b) Find the area of the flat map view (ignoring heights) and compare. (c) Explain why the two areas differ.`,
      r`A proton with charge $q=1.6\times10^{-19}$ C moves with velocity $\vec v=(2\times10^{5},0,0)$ m/s in a magnetic field $\vec B=(0,0.5,0)$ T. (a) Find $\vec v\times\vec B$. (b) Find the force $\vec F=q\,\vec v\times\vec B$. (c) Explain why the force is perpendicular to both the velocity and the field.`,
    ],
  },
};
