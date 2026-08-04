const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "3.7",
  title: "Circles",
  intro: "Circle measures, the central and inscribed angle relationships, and arc length and sector area.",
  lesson: [
    ["Parts & measures", R`Radius $r$, diameter $d=2r$, circumference $C=2\pi r=\pi d$, area $A=\pi r^2$. A chord joins two points; a <b>tangent</b> touches at one point and is perpendicular to the radius there.`],
    ["Arcs & angles", R`A <b>central angle</b> equals its intercepted arc. An <b>inscribed angle</b> is half its intercepted arc. An angle inscribed in a semicircle is $90^\circ$.`],
    ["Sectors", R`For a central angle $\theta$ (degrees): arc length $=\dfrac{\theta}{360}\cdot 2\pi r$ and sector area $=\dfrac{\theta}{360}\cdot\pi r^2$.`],
  ],
  examples: [
    ["Example 1: Circumference", R`Find the circumference of a circle with radius $5$.`, R`$2\pi(5)=10\pi$.`],
    ["Example 2: Area", R`Find the area of a circle with radius $4$.`, R`$\pi(4)^2=16\pi$.`],
    ["Example 3: Inscribed angle", R`An inscribed angle intercepts an $80^\circ$ arc. Find the angle.`, R`Half the arc: $40^\circ$.`],
    ["Example 4: Arc length", R`Find the arc length of a $90^\circ$ sector with radius $6$.`, R`$\tfrac{90}{360}\cdot 2\pi(6)=3\pi$.`],
    ["Example 5: Sector area", R`Find the area of a $60^\circ$ sector with radius $6$.`, R`$\tfrac{60}{360}\cdot\pi(36)=6\pi$.`],
  ],
  questions: [
    ["Problem 1", R`Circumference of a circle with diameter $10$?`, R`$10\pi$`],
    ["Problem 2", R`Area of a circle with radius $7$?`, R`$49\pi$`],
    ["Problem 3", R`Central angle intercepting a $45^\circ$ arc?`, R`$45^\circ$`],
    ["Problem 4", R`Inscribed angle intercepting a $100^\circ$ arc?`, R`$50^\circ$`],
    ["Problem 5", R`An angle inscribed in a semicircle measures?`, R`$90^\circ$`],
    ["Problem 6", R`Diameter if the radius is $9$?`, R`$18$`],
    ["Problem 7", R`Arc length of a $180^\circ$ sector with radius $4$?`, R`$4\pi$`],
    ["Problem 8", R`A tangent meets the radius at ___.`, R`$90^\circ$`],
  ],
};
