// 5.2 Completing the Square — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { parDoc, planeDoc } from "./fig.mjs";

export const E = [
  mc(`Solve $x^2=81$.`, "$x=\\pm9$", ["$x=9$", "$x=-9$", "$x=40.5$"], "Both $9$ and $-9$ square to $81$."),
  num(`Solve $x^2=144$. Enter the positive root.`, 12, "$\\sqrt{144}=12$."),
  num(`Solve $(x-5)^2=16$. Enter the larger root.`, 9, "$x-5=\\pm4$."),
  num(`Solve $(x+3)^2=25$. Enter the smaller root.`, -8, "$x+3=-5$."),
  fill(`To complete the square for $x^2+12x$, add ___.`, ["36"], "$\\left(\\frac{12}{2}\\right)^2=36$."),
  fill(`$x^2-14x+$ ___ $=(x-7)^2$`, ["49"], "$(-7)^2=49$."),
  tf(`$x^2=25$ has only the root $x=5$.`, false, "$x=-5$ is also a root."),
  mc(`How many real roots does $(x-2)^2=-9$ have?`, "none", ["one", "two", "three"], "A square can't be negative."),
  num(`How many different roots does $(x+1)^2=0$ have?`, 1, "Only $x=-1$."),
  mc(`Write $x^2+8x+16$ as a square.`, "$(x+4)^2$", ["$(x+8)^2$", "$(x-4)^2$", "$(x+16)^2$"], "$4\\cdot4=16$ and $2\\cdot4=8$."),
  num(`Solve $x^2-50=0$. Enter the positive root to two decimal places.`, 7.07, "$\\sqrt{50}\\approx7.07$.", null, 0.01),
  tf(`To solve $x^2+6x=7$ by completing the square, add $9$ to both sides.`, true, "$\\left(\\frac62\\right)^2=9$."),
  num(`Solve $(x-1)^2=36$. Enter the larger root.`, 7, "$x-1=6$."),
  mc(`Which equation has no real roots?`, "$(x+2)^2=-1$", ["$(x+2)^2=1$", "$(x+2)^2=0$", "$x^2=2$"], "A square equal to a negative number."),
  num(`Solve $2x^2=32$. Enter the positive root.`, 4, "$x^2=16$."),
  num(`Solve $(x+4)^2=1$. Enter the larger root.`, -3, "$x+4=\\pm1$: $-3$ or $-5$."),
  mc(`Completing the square on $x^2+2x-8=0$ gives…`, "$(x+1)^2=9$", ["$(x+1)^2=8$", "$(x+2)^2=8$", "$(x+1)^2=7$"], "$x^2+2x=8$; add 1."),
  tf(`$(x-3)^2=7$ gives $x=3\\pm\\sqrt7$.`, true, "Square root of both sides, with $\\pm$."),
  num(`Solve $x^2-4x=12$. Enter the larger root.`, 6, "$(x-2)^2=16$: $x=6$ or $-2$."),
  mc(`The graph of $y=(x-1)^2-4$ is shown. What are the roots of $(x-1)^2-4=0$?`, "$-1$ and $3$", ["$1$ and $-4$", "$1$ and $4$", "$-3$ and $1$"], "Read the x-intercepts.", parDoc((x) => (x - 1) ** 2 - 4, [-1, 3], { xmin: -3, xmax: 5, ymin: -5, ymax: 6 })),
];

export const M = [
  num(`Solve $x^2+6x-16=0$ by completing the square. Enter the larger root.`, 2, "$(x+3)^2=25$."),
  num(`Solve $x^2-10x+9=0$ by completing the square. Enter the smaller root.`, 1, "$(x-5)^2=16$."),
  num(`Solve $x^2+4x-1=0$. Enter the larger root to two decimal places.`, 0.24, "$(x+2)^2=5$: $x=-2+\\sqrt5$.", null, 0.01),
  mc(`Find the exact roots of $x^2-2x-4=0$.`, "$1\\pm\\sqrt5$", ["$-1\\pm\\sqrt5$", "$1\\pm\\sqrt3$", "$2\\pm\\sqrt5$"], "$(x-1)^2=5$."),
  num(`Solve $3(x-2)^2=27$. Enter the larger root.`, 5, "$(x-2)^2=9$."),
  num(`Solve $(2x-1)^2=49$. Enter the larger root.`, 4, "$2x-1=7$."),
  tf(`$x^2+6x+10=0$ has no real roots.`, true, "$(x+3)^2=-1$."),
  num(`Find the larger zero of $y=(x+4)^2-9$.`, -1, "$x+4=\\pm3$."),
  fill(`$x^2-3x+$ ___ $=(x-1.5)^2$ (decimal)`, ["2.25", "9/4"], "$1.5^2=2.25$."),
  num(`Solve $4x^2+8x-12=0$. Enter the larger root.`, 1, "Divide by 4: $(x+1)^2=4$."),
  mc(`To solve $x^2-18x=5$ by completing the square, what do you add to both sides?`, "$81$", ["$9$", "$18$", "$324$"], "$\\left(\\frac{-18}{2}\\right)^2=81$."),
  num(`Solve $x^2-8x+3=0$. Enter the smaller root to two decimal places.`, 0.39, "$(x-4)^2=13$: $4-\\sqrt{13}$.", null, 0.01),
  num(`Find the larger zero of $y=-(x-3)^2+16$.`, 7, "$(x-3)^2=16$."),
  ms(`Select all equations with no real roots.`, ["$(x-1)^2=-3$", "$x^2+4x+9=0$", "$x^2-9=0$", "$(x+5)^2=0$", "$x^2+2x+2=0$"], [0, 1, 4], "Complete the square: a negative right side means no real roots."),
  num(`What is the distance between the roots of $(x-6)^2=25$?`, 10, "Roots $1$ and $11$."),
  num(`Solve $x^2+12x+20=0$ by completing the square. Enter the smaller root.`, -10, "$(x+6)^2=16$."),
  tf(`Completing the square on $x^2+10x=-30$ gives $(x+5)^2=-5$.`, true, "$-30+25=-5$."),
  num(`Each side of a square is increased by $2$ cm, and the new area is $64$ cm$^2$. Find the original side length.`, 6, "$(s+2)^2=64\\Rightarrow s+2=8$."),
  num(`Find the midpoint of the roots of $x^2-14x+40=0$.`, 7, "$(x-7)^2=9$: roots $4$ and $10$."),
  num(`The graph of $y=2(x-1)^2-8$ is shown with its vertex. Find its positive zero.`, 3, "$(x-1)^2=4\\Rightarrow x=3$ or $-1$.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -9, ymax: 8 }, curves: [{ f: (x) => 2 * (x - 1) ** 2 - 8, color: "violet" }], points: [{ x: 1, y: -8, label: "(1, −8)", color: "blue" }], step: { x: 1, y: 2 } })),
];
