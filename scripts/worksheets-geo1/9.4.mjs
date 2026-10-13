import { fig, coordCircle } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "9.4",
  title: "Circle Equations",
  intro: "A circle is the set of points a fixed distance $r$ from a center $(h,k)$. Applying the distance formula to a general point $(x,y)$ on the circle gives $\\sqrt{(x-h)^2+(y-k)^2}=r$, and squaring both sides produces the <b>standard form</b>: $(x-h)^2+(y-k)^2=r^2$. If an equation is given in expanded form ($x^2+y^2+Dx+Ey+F=0$), <b>completing the square</b> on the $x$-terms and the $y$-terms separately converts it back to standard form, revealing the center and radius. Once you have standard form, you can test whether a point is inside, on, or outside the circle by comparing $(x-h)^2+(y-k)^2$ to $r^2$: less than means inside, equal means on, greater means outside. This worksheet also finds where a circle crosses the axes and includes a coverage-radius application.",
  examples: [
    ["Example 1: Write the equation from center and radius",
      "Write the equation of the circle with center $(3,-2)$ and radius $5$.",
      fig(coordCircle(3, -2, 5), "Center $(3,-2)$, radius $5$.") +
      "$(x-h)^2+(y-k)^2=r^2$ with $h=3$, $k=-2$, $r=5$:<br>" +
      "$(x-3)^2+(y+2)^2=25$.<br>" +
      "<b>Answer:</b> $(x-3)^2+(y+2)^2=25$."],

    ["Example 2: Read the center and radius",
      "Find the center and radius of $(x+1)^2+(y-4)^2=49$.",
      "Identify the pattern $(x-h)^2+(y-k)^2=r^2$ hiding in the equation.<br>" +
      "Rewrite $(x+1)^2$ as $(x-(-1))^2$ and $49$ as $7^2$ to match the pattern exactly:<br>" +
      "$(x-(-1))^2+(y-4)^2=7^2$.<br>" +
      "Reading off $h$, $k$, $r$ gives the center and radius.<br>" +
      "<b>Answer:</b> center $(-1,4)$, radius $7$."],

    ["Example 3: Center and a point on the circle",
      "Write the equation of the circle centered at the origin passing through $(6,8)$.",
      "The radius equals the distance from the center to the point: $r=\\sqrt{6^2+8^2}=\\sqrt{36+64}=\\sqrt{100}=10$.<br>" +
      "$x^2+y^2=10^2=100$.<br>" +
      "<b>Answer:</b> $x^2+y^2=100$."],

    ["Example 4: Complete the square",
      "Rewrite $x^2+y^2-6x+4y-12=0$ in standard form. Find the center and radius.",
      "Group and complete the square for each variable:<br>" +
      "$(x^2-6x)+(y^2+4y)=12$<br>" +
      "$(x^2-6x+9)+(y^2+4y+4)=12+9+4$<br>" +
      "$(x-3)^2+(y+2)^2=25$.<br>" +
      "<b>Answer:</b> center $(3,-2)$, radius $5$."],

    ["Example 5: Inside, on, or outside?",
      "Is the point $(2,2)$ inside, on, or outside the circle $(x-1)^2+(y-1)^2=4$?",
      "Substitute the point: $(2-1)^2+(2-1)^2=1+1=2$.<br>" +
      "Compare to $r^2=4$: since $2<4$, the point is <b>inside</b> the circle."],

    ["Example 6: Write the equation",
      "Write the equation of the circle with center $(-4,5)$ and radius $3$.",
      "Identify $h=-4$, $k=5$, $r=3$.<br>" +
      "Substitute into $(x-h)^2+(y-k)^2=r^2$:<br>" +
      "$(x-(-4))^2+(y-5)^2=3^2$<br>" +
      "$(x+4)^2+(y-5)^2=9$.<br>" +
      "<b>Answer:</b> $(x+4)^2+(y-5)^2=9$."],

    ["Example 7: Read the equation",
      "Find the center and radius of $(x-6)^2+(y+2)^2=81$.",
      "Identify the pattern $(x-h)^2+(y-k)^2=r^2$: here $h=6$, $k=-2$, and $r^2=81$.<br>" +
      "Take the square root to find the radius: $r=\\sqrt{81}=9$.<br>" +
      "<b>Answer:</b> center $(6,-2)$, radius $9$."],

    ["Example 8: Through a point",
      "An origin-centered circle passes through $(-5,12)$. Write its equation.",
      "Identify that the radius equals the distance from the center $(0,0)$ to the given point $(-5,12)$.<br>" +
      "$r=\\sqrt{(-5)^2+12^2}=\\sqrt{25+144}=\\sqrt{169}=13$.<br>" +
      "Substitute $r^2=169$ into $x^2+y^2=r^2$:<br>" +
      "$x^2+y^2=169$.<br>" +
      "<b>Answer:</b> $x^2+y^2=169$."],

    ["Example 9: Complete the square (both variables)",
      "Rewrite $x^2+y^2+8x-2y+8=0$ in standard form. Find the center and radius.",
      "$(x^2+8x)+(y^2-2y)=-8$<br>" +
      "$(x^2+8x+16)+(y^2-2y+1)=-8+16+1$<br>" +
      "$(x+4)^2+(y-1)^2=9$.<br>" +
      "<b>Answer:</b> center $(-4,1)$, radius $3$."],

    ["Example 10: Where a circle crosses the $x$-axis",
      "Find the points where the circle $(x-2)^2+(y-3)^2=25$ crosses the $x$-axis.",
      "On the $x$-axis, $y=0$. Substitute:<br>" +
      "$(x-2)^2+(0-3)^2=25$<br>" +
      "$(x-2)^2+9=25$<br>" +
      "$(x-2)^2=16$<br>" +
      "$x-2=\\pm4 \\Rightarrow x=6$ or $x=-2$.<br>" +
      "<b>Answer:</b> $(6,0)$ and $(-2,0)$."],

    ["Example 11: Application — cell tower coverage",
      "A cell tower at the origin of a map (in km) has a coverage circle of radius $8$ km: $x^2+y^2=64$. A house is located at $(5,7)$. Is the house within range?",
      "Compute the squared distance from the tower to the house: $5^2+7^2=25+49=74$.<br>" +
      "Compare to $r^2=64$: since $74>64$, the house is <b>outside</b> the coverage circle.<br>" +
      "(Actual distance $=\\sqrt{74}\\approx8.60$ km, slightly beyond the $8$ km range.)"],
  ],
  questions: [
    ["Problem 1: Write equation", "Center $(2,-5)$, radius $4$. Write the equation.", "$(x-2)^2+(y+5)^2=16$"],
    ["Problem 2: Read equation", "Find center and radius of $(x+3)^2+(y-7)^2=36$.", "Center $(-3,7)$, radius $6$"],
    ["Problem 3: Through a point", "Center $(0,0)$ through $(3,4)$. Write the equation.", "$x^2+y^2=25$"],
    ["Problem 4: Complete the square", "Rewrite $x^2+y^2-4x+6y-3=0$ in standard form.", "$(x-2)^2+(y+3)^2=16$"],
    ["Problem 5: Point test", "Is $(5,3)$ inside, on, or outside $(x-2)^2+(y+1)^2=36$?", "Inside ($25<36$)"],
    ["Problem 6: Write equation", "Center $(-1,-1)$, radius $2$. Write the equation.", "$(x+1)^2+(y+1)^2=4$"],
    ["Problem 7: Read equation", "Find center and radius of $x^2+(y-3)^2=1$.", "Center $(0,3)$, radius $1$"],
    ["Problem 8: Through a point", "Center $(1,2)$ through $(4,6)$. Write the equation.", "$(x-1)^2+(y-2)^2=25$"],
    ["Problem 9: Complete the square", "Rewrite $x^2+y^2+2x-10y+17=0$ in standard form.", "$(x+1)^2+(y-5)^2=9$"],
    ["Problem 10: Point test", "Is $(0,0)$ on $x^2+y^2=1$?", "No — inside ($0<1$)"],
    ["Problem 11: Radius from equation", "What is $r$ for $(x-5)^2+(y+4)^2=64$?", "$8$"],
    ["Problem 12: Center from equation", "What is the center of $(x+9)^2+y^2=4$?", "$(-9,0)$"],
    ["Problem 13: Point test", "Is $(3,4)$ on $x^2+y^2=25$?", "Yes (on the circle)"],
    ["Problem 14: Challenge", "Find where circle $(x-4)^2+(y-1)^2=25$ crosses the $y$-axis.", "$(0,4)$ and $(0,-2)$"],
    ["Problem 15: Challenge", "Rewrite $x^2+y^2-10x-4y+13=0$ in standard form, then determine whether $(7,6)$ is inside, on, or outside the circle.", "$(x-5)^2+(y-2)^2=16$; $(7,6)$ is outside ($20>16$)"],
  ],
};
