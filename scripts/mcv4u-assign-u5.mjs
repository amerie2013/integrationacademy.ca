// MCV4U Unit 5 assignments — Applications of Derivatives.
const r = String.raw;

export const U5 = {
  "5.1": {
    topic: "Optimization",
    K: [
      r`Two positive numbers $x$ and $y$ satisfy $x+2y=30$. Find the values that maximize the product $xy$ and state the maximum product.`,
      r`Find the point on the curve $y=\sqrt{x}$ that is closest to the point $(4,0)$, and find the minimum distance. (Minimize the square of the distance.)`,
      r`A rectangle has an area of 200 m$^2$. Find its dimensions if its perimeter is as small as possible, and find that perimeter.`,
    ],
    T: [
      r`An open-top box with a square base must hold 32 m$^3$. Find the base side and height that minimize the surface area, and the minimum area. Justify that it is a minimum.`,
      r`Prove that, of all rectangles with a fixed perimeter $P$, the square has the largest area. Let the sides be $x$ and $\tfrac P2-x$ and show each step.`,
    ],
    C: [
      r`Write a step-by-step strategy for an optimization word problem (variables, constraint, objective function, domain, derivative, verification) and explain the purpose of each step.`,
      r`Explain why endpoints must be checked when optimizing on a closed interval. Use $f(x)=x^3-3x$ on $[0,3]$ to show a case where the maximum is at an endpoint.`,
    ],
    A: [
      r`A poster must have 600 cm$^2$ of printed area, with margins of 3 cm at the top and bottom and 2 cm at each side. (a) Write the total paper area as a function of the printed width $x$. (b) Find the dimensions of the poster that use the least paper. (c) State the minimum area.`,
      r`A theatre sells 400 tickets at 20 dollars. For every 1 dollar increase in price, 10 fewer people attend. (a) Write the revenue as a function of the number $x$ of dollars added to the price. (b) Find the ticket price that maximizes revenue. (c) State the attendance and the maximum revenue.`,
      r`A cable is to run from a point $A$ on a straight shore to a point $B$ on an island 2 km from shore and 5 km along the shore from $A$. Cable costs 4 thousand dollars per km on land and 7 thousand dollars per km underwater. (a) Write the cost as a function of the distance $x$ along the shore before entering the water. (b) Find $x$ that minimizes the cost. (c) State the minimum cost.`,
    ],
  },

  "5.2": {
    topic: "Related Rates",
    K: [
      r`The edge of a cube grows at 0.5 cm/s. Find the rate of increase of the volume and of the surface area when the edge is 8 cm.`,
      r`The radius of a sphere shrinks at 2 mm/min. Find the rate of change of the surface area $S=4\pi r^2$ when $r=30$ mm.`,
      r`A rectangle's length grows at 3 cm/s while its width shrinks at 2 cm/s. When the length is 12 cm and the width is 5 cm, find the rate of change of (a) the area and (b) the length of the diagonal.`,
    ],
    T: [
      r`Sand falls at 3 m$^3$/min onto a conical pile whose height always equals its radius. Find how fast the height is rising when the pile is 2 m high. ($V=\tfrac13\pi r^2h$)`,
      r`A 1.8 m tall person walks away from a 6 m lamp post at 1.5 m/s. Use similar triangles to find how fast (a) the tip of the shadow moves and (b) the length of the shadow grows.`,
    ],
    C: [
      r`List the steps for solving a related-rates problem, and explain why you must differentiate with respect to time before substituting the values of the variables.`,
      r`Explain the difference between $\dfrac{dV}{dr}$ and $\dfrac{dV}{dt}$ for an expanding sphere, and how the chain rule connects them.`,
    ],
    A: [
      r`A helium balloon rises vertically at 3 m/s from a point 50 m from an observer. (a) Write a relation between the height $h$ and the angle of elevation $\theta$. (b) Find how fast the angle is changing when the balloon is 50 m high. (c) Explain why the angle changes more slowly as the balloon gets higher.`,
      r`Water drains from a conical tank (radius 2 m at the top, height 6 m) at 0.5 m$^3$/min. (a) Relate the water's radius to its depth. (b) Find how fast the depth is dropping when the water is 3 m deep. (c) Explain why the depth falls faster when the water is shallow.`,
      r`A plane flies horizontally at 8 km altitude at 800 km/h and passes directly over a radar station. (a) Write the distance $s$ to the radar in terms of the horizontal distance $x$. (b) Find how fast the distance is increasing when the plane is 6 km horizontally from the station. (c) Explain why the rate is less than 800 km/h.`,
    ],
  },

  "5.3": {
    topic: "Kinematics: Velocity & Acceleration",
    K: [
      r`A particle moves along a line with position $s(t)=t^3-9t^2+15t$ metres. Find $v(t)$ and $a(t)$, then $v(2)$ and $a(2)$.`,
      r`For the same particle, find the times when it is at rest and its position at each of those times.`,
      r`For the same particle, state the time intervals ($t\ge0$) in which it moves in the positive direction and in the negative direction, and decide whether it is speeding up or slowing down at $t=2$.`,
    ],
    T: [
      r`For the particle in Questions 1 to 3, find the displacement and the total distance travelled during the first 6 seconds. Explain why they differ.`,
      r`A particle has position $s(t)=t+\dfrac{4}{t+1}$, $t\ge0$. Show that it is at rest exactly once, find its position then, and show that its acceleration is always positive. What does this say about the position at that time?`,
    ],
    C: [
      r`Explain how the signs of velocity and acceleration together tell you whether an object is speeding up or slowing down, and give a real example of each case.`,
      r`Explain the difference between displacement, distance travelled and position, and why total distance requires splitting the motion at the times when the velocity is zero.`,
    ],
    A: [
      r`A car braking from 25 m/s has position $s(t)=25t-2.5t^2$ metres. (a) Find $v(t)$ and $a(t)$. (b) Find the stopping time and the stopping distance. (c) Explain why the acceleration is negative but the car is still moving forward.`,
      r`A drone's height is $h(t)=2t^3-15t^2+24t+20$ metres for $0\le t\le5$ seconds. (a) Find $v(t)$ and $a(t)$. (b) Find when the drone hovers and its heights then. (c) Is it speeding up or slowing down at $t=2$? Describe the drone's motion.`,
      r`On the Moon, a rock thrown up at 12 m/s from a height of 1.5 m has height $h(t)=-0.8t^2+12t+1.5$ metres. (a) Find its maximum height and when it occurs. (b) Find when it lands and its landing speed. (c) Compare the maximum height with the Earth value for the same throw using $g=9.8$ m/s$^2$.`,
    ],
  },
};
