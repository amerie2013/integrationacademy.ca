// 3.3 Transformations of Functions — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

const fGraph = planeDoc({ view: { xmin: -4, xmax: 5, ymin: -3, ymax: 4 }, segs: [{ pts: [[-2, 0], [0, 2], [3, -1]], color: "violet" }], points: [P(-2, 0), P(0, 2), P(3, -1)] });

export const TOPIC = "3.3 Transformations of Functions";
export const Q = [
  num(S`The graph of $y=f(x)$ is shown. $g(x)=2f(x-1)$. Find $g(1)$.`, 4, "g(1) = 2f(0) = 4.", fGraph),
  num(S`For the same $f$ (shown), $h(x)=f(-x)+1$. Find $h(2)$.`, 1, "h(2) = f(−2) + 1 = 0 + 1.", fGraph),
  num(S`$(4,5)$ is on $y=f(x)$. What is the x-coordinate of its image on $y=3f\left(\frac12(x-1)\right)-2$?`, 9, "½(x − 1) = 4."),
  num(S`$(4,5)$ is on $y=f(x)$. What is the y-coordinate of its image on $y=3f\left(\frac12(x-1)\right)-2$?`, 13, "3(5) − 2."),
  mx(S`$f(x)=x^2-6x+8$ is reflected in the y-axis and then moved 2 up. Write the new function, expanded.`, "x^2+6*x+10", "f(−x) + 2 = x² + 6x + 8 + 2."),
  num(S`$y=x^2$ is translated 3 right and 1 down, then reflected in the x-axis. Find the new $y$ when $x=4$.`, 0, "y = −((x − 3)² − 1)."),
  tf(S`Reflecting $y=x^2+1$ in the x-axis and then moving it up 2 gives the same graph as moving it up 2 and then reflecting it in the x-axis.`, false, "−x² + 1 versus −x² − 3: the order matters."),
  num(S`$y=x^2-8x+19$ is $y=x^2$ translated $h$ right and $k$ up. Find $k$.`, 3, "(x − 4)² + 3."),
  num("The violet parabola has the same shape as y = x², opens down and has vertex (−1, 3). Find its y-value at x = 1.", -1, "y = −(x + 1)² + 3.", planeDoc({ view: { xmin: -5, xmax: 3, ymin: -4, ymax: 5 }, curves: [{ f: (x) => -((x + 1) ** 2) + 3 }], points: [P(-1, 3)] })),
  mc(S`The range of $f$ is $y\ge-3$. The range of $-2f(x)+1$ is:`, S`$y\le7$`, [S`$y\ge7$`, S`$y\le-5$`, S`$y\ge-5$`], "−2(−3) + 1 = 7, and the reflection turns ≥ into ≤."),
  num(S`$f$ has zeros $-1$ and $5$. Find the sum of the zeros of $f(2x)$.`, 2, "Zeros −0.5 and 2.5."),
  num(S`$f(x)=x^3-x$ and $g(x)=f(x-2)+k$ passes through $(3,4)$. Find $k$.`, 4, "g(3) = f(1) + k = 0 + k."),
  ms(S`$f(x)=x^2$. Which have the same graph as $y=4x^2$? Select all.`, [S`$f(2x)$`, S`$4f(x)$`, S`$f(4x)$`, S`$2f(\sqrt2\,x)$`], [0, 1, 3], "f(4x) = 16x²; 2f(√2 x) = 2(2x²)."),
  mc("The grey curve is y = x³. The violet curve is:", S`$y=-(x-1)^3+2$`, [S`$y=-(x+1)^3+2$`, S`$y=(x-1)^3+2$`, S`$y=-(x-1)^3-2$`], "Reflected, then centre moved to (1, 2).", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x ** 3, color: "gray" }, { f: (x) => -((x - 1) ** 3) + 2 }], points: [P(1, 2)] })),
  num(S`$(2,3)$ is on $y=f(x)$ and its image on $y=af(x)+1$ is $(2,7)$. Find $a$.`, 2, "3a + 1 = 7."),
  num(S`$(6,-4)$ is on $y=f(x)$ and its image on $y=f(kx)$ is $(2,-4)$. Find $k$.`, 3, "2k = 6."),
  num(S`$f$ has domain $-3\le x\le3$ and range $0\le y\le9$. What is the smallest value in the range of $f(x-2)-4$?`, -4, "Range 0 − 4 to 9 − 4."),
  num(S`$f(x)=2^x$. The translation $f(x+3)$ is also a vertical stretch of $f$. Find the stretch factor.`, 8, "2ˣ⁺³ = 8 × 2ˣ."),
  num(S`$g(x)=(x-a)^2+b$ passes through $(0,1)$ and $(4,1)$ and has minimum value $-3$. Find $a+b$.`, -1, "The axis is x = 2 and the vertex is (2, −3)."),
  num("The violet curve is a horizontal stretch of y = √x (grey) and passes through (16, 2). Find the stretch factor.", 4, "√(16/k) = 2 → k = 4.", planeDoc({ view: { xmin: -1, xmax: 18, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(x / 4), a: 0 }], points: [P(16, 2)], step: { x: 2, y: 1 } })),
];
