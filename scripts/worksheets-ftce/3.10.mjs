const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "3.10",
  title: "Conic Sections",
  intro: "The four conics — parabola, circle, ellipse, and hyperbola — their standard equations and key features.",
  lesson: [
    ["Parabola", R`$y=ax^2+bx+c$ opens up ($a>0$) or down ($a<0$); axis of symmetry $x=-\dfrac{b}{2a}$, with the vertex on it. (A parabola $x=ay^2$ opens sideways.)`],
    ["Circle & ellipse", R`Circle $(x-h)^2+(y-k)^2=r^2$: center $(h,k)$, radius $r$. Ellipse $\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1$ (center origin) with intercepts $(\pm a,0),(0,\pm b)$; it reduces to a circle when $a=b$.`],
    ["Hyperbola", R`$\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1$ opens left/right with asymptotes $y=\pm\dfrac{b}{a}x$, guided by the fundamental rectangle.`],
  ],
  examples: [
    ["Example 1: Parabola vertex", R`Find the vertex of $y=x^2-4x+3$.`, R`$x=-\dfrac{-4}{2}=2$, $y=4-8+3=-1$: $(2,-1)$.`],
    ["Example 2: Circle", R`Center and radius of $(x-2)^2+(y+3)^2=25$.`, R`Center $(2,-3)$, radius $5$.`],
    ["Example 3: Ellipse", R`Intercepts of $\dfrac{x^2}{9}+\dfrac{y^2}{4}=1$.`, R`$a=3,b=2$: $(\pm3,0)$ and $(0,\pm2)$.`],
    ["Example 4: Hyperbola asymptotes", R`Asymptotes of $\dfrac{x^2}{4}-\dfrac{y^2}{9}=1$.`, R`$y=\pm\dfrac{3}{2}x$.`],
    ["Example 5: Circle at origin", R`Describe $x^2+y^2=16$.`, R`Circle, center $(0,0)$, radius $4$.`],
  ],
  questions: [
    ["Problem 1", R`Axis of symmetry of $y=x^2-6x+5$?`, R`$x=3$`],
    ["Problem 2", R`Center of $(x+1)^2+(y-2)^2=9$?`, R`$(-1,2)$`],
    ["Problem 3", R`Radius of $x^2+y^2=49$?`, R`$7$`],
    ["Problem 4", R`$x$-intercepts of $\dfrac{x^2}{25}+\dfrac{y^2}{16}=1$?`, R`$(\pm5,0)$`],
    ["Problem 5", R`Vertex of $y=x^2+2x$?`, R`$(-1,-1)$`],
    ["Problem 6", R`Asymptotes of $\dfrac{x^2}{9}-\dfrac{y^2}{16}=1$?`, R`$y=\pm\dfrac{4}{3}x$`],
    ["Problem 7", R`Does $\dfrac{x^2}{4}+\dfrac{y^2}{4}=1$ represent a circle?`, R`yes (radius $2$)`],
    ["Problem 8", R`Does $y=-2x^2+1$ open up or down?`, R`down`],
  ],
};
