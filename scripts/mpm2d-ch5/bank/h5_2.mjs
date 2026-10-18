// 5.2 Completing the Square — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const TOPIC = "5.2 Completing the Square";
export const Q = [
  num(`Solve $2x^2-12x+10=0$ by completing the square. Enter the larger root.`, 5, "$x^2-6x+5=0\\Rightarrow(x-3)^2=4$."),
  num(`$x^2-6x+c=0$ has the roots $3\\pm2$. Find $c$.`, 5, "$(x-3)^2=4\\Rightarrow x^2-6x+5=0$."),
  num(`$(x+k)^2=9$ has the root $x=1$, and $k>0$. Find $k$.`, 2, "$1+k=3$."),
  mc(`Find the exact roots of $x^2+2x-11=0$.`, "$-1\\pm2\\sqrt3$", ["$1\\pm2\\sqrt3$", "$-1\\pm\\sqrt{11}$", "$-2\\pm2\\sqrt3$"], "$(x+1)^2=12$, $\\sqrt{12}=2\\sqrt3$."),
  num(`For which value of $c$ does $x^2+8x+c=0$ have exactly one root?`, 16, "$(x+4)^2=16-c$; one root when $16-c=0$."),
  num(`What is the largest value of $c$ for which $x^2-10x+c=0$ has real roots?`, 25, "$(x-5)^2=25-c\\ge0$."),
  tf(`If $(x-h)^2=k$ has two roots, their average is $h$.`, true, "The roots are $h\\pm\\sqrt k$."),
  num(`A ball's height is $h=-5(t-1.5)^2+31.25$ metres. When does it land?`, 4, "$(t-1.5)^2=6.25\\Rightarrow t-1.5=2.5$."),
  num(`Find the larger zero of $y=3(x+2)^2-75$.`, 3, "$(x+2)^2=25$."),
  num(`When each side of a square is increased by $4$ m, its area triples. Find the original side length to two decimal places.`, 5.46, "$(s+4)^2=3s^2\\Rightarrow s^2-4s-8=0\\Rightarrow(s-2)^2=12$: $s=2+\\sqrt{12}$.", null, 0.01),
  num(`Solve $x^2-2x=1$. Enter the larger root to two decimal places.`, 2.41, "$(x-1)^2=2$.", null, 0.01),
  mc(`Completing the square on $x^2+bx=c$ gives…`, "$\\left(x+\\frac b2\\right)^2=c+\\frac{b^2}{4}$", ["$\\left(x+\\frac b2\\right)^2=c-\\frac{b^2}{4}$", "$(x+b)^2=c+b^2$", "$\\left(x+\\frac b2\\right)^2=c$"], "Add $\\left(\\frac b2\\right)^2$ to both sides."),
  num(`Find the distance between the roots of $x^2+6x-3=0$ to two decimal places.`, 6.93, "$(x+3)^2=12$: roots $-3\\pm\\sqrt{12}$, distance $2\\sqrt{12}$.", null, 0.01),
  num(`Find the sum of the zeros of $y=-2(x-5)^2+18$.`, 10, "$(x-5)^2=9$: zeros $2$ and $8$."),
  ms(`Select all statements that are true about $(x-4)^2=9$.`, ["its roots are $1$ and $7$", "the roots are symmetric about $x=4$", "it is equivalent to $x^2-8x+7=0$", "it has no real roots", "it is equivalent to $x-4=3$"], [0, 1, 2], "$x-4=\\pm3$ — both signs."),
  num(`A rectangle's length is $8$ m more than its width and its area is $20$ m$^2$. Solve by completing the square to find the width.`, 2, "$w^2+8w=20\\Rightarrow(w+4)^2=36$."),
  num(`Find the positive value of $k$ that makes $x^2+kx+49$ a perfect square.`, 14, "$(x+7)^2=x^2+14x+49$."),
  num(`Solve $(x-3)^2=2(x-3)+8$. Enter the larger root.`, 7, "Let $u=x-3$: $u^2-2u-8=0$, $u=4$ or $-2$."),
  tf(`$x^2+4x+5=0$ and $x^2+4x+3=0$ have parabolas with the same axis, but only one of the equations has real roots.`, true, "$(x+2)^2=-1$ and $(x+2)^2=1$."),
  num(`The parabola $y=x^2-6x+c$ has the vertex shown. Find its larger zero to two decimal places.`, 5.24, "$(x-3)^2=5$: $x=3+\\sqrt5$.", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -6, ymax: 6 }, curves: [{ f: (x) => (x - 3) ** 2 - 5, color: "violet" }], points: [{ x: 3, y: -5, label: "(3, −5)", color: "blue" }], step: { x: 1, y: 1 } }), 0.01),
];
