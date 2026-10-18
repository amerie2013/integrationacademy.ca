// 5.3 The Quadratic Formula — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, frameDoc } from "./fig.mjs";

export const TOPIC = "5.3 The Quadratic Formula";
export const Q = [
  num(`Solve $3x^2-7x-5=0$. Enter the larger root to two decimal places.`, 2.91, "$b^2-4ac=109$: $x=\\frac{7+\\sqrt{109}}{6}$.", null, 0.01),
  mc(`Find the exact roots of $2x^2-4x-3=0$.`, "$\\dfrac{2\\pm\\sqrt{10}}{2}$", ["$\\dfrac{-2\\pm\\sqrt{10}}{2}$", "$2\\pm\\sqrt{10}$", "$\\dfrac{4\\pm\\sqrt{10}}{4}$"], "$x=\\frac{4\\pm\\sqrt{40}}{4}=\\frac{4\\pm2\\sqrt{10}}{4}$."),
  num(`$x=2$ is a root of $3x^2+bx-2=0$. Find $b$.`, -5, "$12+2b-2=0$."),
  num(`A rectangle's length is $3$ m more than its width and its area is $50$ m$^2$. Find the width to two decimal places.`, 5.73, "$w^2+3w-50=0$: $w=\\frac{-3+\\sqrt{209}}{2}$.", null, 0.01),
  num(`A ball's height is $h=-4.9t^2+20t+1.5$. At what later time is it $10$ m high (to two decimal places)?`, 3.6, "$-4.9t^2+20t-8.5=0$: $t=\\frac{-20-\\sqrt{233.4}}{-9.8}$.", null, 0.01),
  num(`A ball's height is $h=-4.9t^2+20t+1.5$. At what earlier time is it $10$ m high (to two decimal places)?`, 0.48, "$t=\\frac{-20+\\sqrt{233.4}}{-9.8}$.", null, 0.01),
  num(`Solve $\\frac12x^2-x-3=0$. Enter the larger root to two decimal places.`, 3.65, "Multiply by 2: $x^2-2x-6=0$, $x=1+\\sqrt7$.", null, 0.01),
  tf(`If $a$ and $c$ have opposite signs, the formula always gives two real roots.`, true, "$-4ac>0$, so $b^2-4ac>0$."),
  num(`Solve $1.5x^2+2.4x-0.9=0$. Enter the positive root to two decimal places.`, 0.31, "$b^2-4ac=5.76+5.4=11.16$: $x=\\frac{-2.4+\\sqrt{11.16}}{3}$.", null, 0.01),
  num(`A number plus its square equals $10$. Find the positive number to two decimal places.`, 2.7, "$x^2+x-10=0$: $x=\\frac{-1+\\sqrt{41}}{2}$.", null, 0.01),
  ms(`Select all true statements about $x=\\dfrac{-b\\pm\\sqrt{b^2-4ac}}{2a}$.`, ["the two roots are symmetric about $x=-\\frac{b}{2a}$", "if $b^2-4ac=0$ there is one root", "it works only for integer coefficients", "$a$ cannot be $0$", "it gives the y-coordinate of the vertex"], [0, 1, 3], "The roots are $-\\frac b{2a}\\pm\\frac{\\sqrt D}{2a}$."),
  num(`Find the distance between the roots of $x^2-4x-1=0$ to two decimal places.`, 4.47, "Roots $2\\pm\\sqrt5$; distance $2\\sqrt5$.", null, 0.01),
  num(`A $20$ cm by $30$ cm picture has a border of uniform width $x$. Picture and border cover $1000$ cm$^2$. Find $x$ to two decimal places.`, 3.51, "$(20+2x)(30+2x)=1000\\Rightarrow x^2+25x-100=0$.", frameDoc("30 cm", "20 cm", "x", "picture"), 0.01),
  mc(`Which equation has the roots $\\dfrac{3\\pm\\sqrt5}{2}$?`, "$x^2-3x+1=0$", ["$x^2+3x+1=0$", "$x^2-3x-1=0$", "$2x^2-3x+1=0$"], "Need $-b=3$, $2a=2$ and $b^2-4ac=5$."),
  num(`A kicked ball follows $h=-0.02x^2+0.8x+1.6$ ($x$ and $h$ in metres). How far away does it land (to two decimal places)?`, 41.91, "$x=\\frac{-0.8-\\sqrt{0.768}}{-0.04}$.", null, 0.01),
  num(`Solve $(2x+1)^2=3x+4$. Enter the larger root.`, 0.75, "$4x^2+x-3=0$: $b^2-4ac=49$, $x=\\frac{-1+7}{8}$."),
  tf(`The roots of $x^2+6x+4=0$ add to $6$.`, false, "They are $-3\\pm\\sqrt5$, which add to $-6$."),
  num(`$x^2-2x+k=0$ has the roots $1\\pm\\sqrt3$. Find $k$.`, -2, "$(x-1)^2=3\\Rightarrow x^2-2x-2=0$."),
  num(`A rectangle has perimeter $20$ m and a diagonal of $8$ m. Find the longer side to two decimal places.`, 7.65, "$w^2+(10-w)^2=64\\Rightarrow w^2-10w+18=0$: $w=5+\\sqrt7$.", null, 0.01),
  num(`A ball's path is $h=-0.5x^2+3x+2$, shown. Find where it lands to two decimal places.`, 6.61, "$x=\\frac{-3-\\sqrt{13}}{-1}$.", planeDoc({ view: { xmin: -1, xmax: 8, ymin: -1, ymax: 8 }, curves: [{ f: (x) => -0.5 * x * x + 3 * x + 2, a: 0, b: 6.6, color: "blue" }], points: [{ x: 0, y: 2, label: "(0, 2)", color: "green" }], xlabel: "x (m)", ylabel: "h (m)" }), 0.01),
];
