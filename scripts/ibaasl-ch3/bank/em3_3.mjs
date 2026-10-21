// 3.3 Transformations of Functions — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill, mx } from "./kit.mjs";
import { planeDoc, P } from "../../mcr3u-ch1/bank/fig.mjs";

const S = String.raw;

export const E = [
  mc(S`The graph of $y=f(x)+3$ is the graph of $y=f(x)$ moved:`, "up 3", ["down 3", "left 3", "right 3"], "Adding outside changes y."),
  mc(S`The graph of $y=f(x-2)$ is the graph of $y=f(x)$ moved:`, "right 2", ["left 2", "up 2", "down 2"], "Inside changes x, the opposite way."),
  mc(S`$y=-f(x)$ is a reflection of $y=f(x)$ in:`, "the x-axis", ["the y-axis", "the line y = x", "the origin"], "Every y changes sign."),
  mc(S`$y=f(-x)$ is a reflection of $y=f(x)$ in:`, "the y-axis", ["the x-axis", "the line y = x", "the line y = −x"], "Every x changes sign."),
  mc(S`$y=2f(x)$ is:`, "a vertical stretch, factor 2", ["a horizontal stretch, factor 2", "a vertical stretch, factor ½", "a translation up 2"], "Every y is doubled."),
  mc(S`$y=f(3x)$ is:`, S`a horizontal stretch, factor $\frac13$`, ["a horizontal stretch, factor 3", "a vertical stretch, factor 3", S`a vertical stretch, factor $\frac13$`], "Every x is divided by 3."),
  num(S`$(4,1)$ is on $y=f(x)$. What is the y-coordinate of its image on $y=f(x)+5$?`, 6, "(4, 6)."),
  num(S`$(4,1)$ is on $y=f(x)$. What is the x-coordinate of its image on $y=f(x+3)$?`, 1, "Left 3: (1, 1)."),
  num(S`$(2,-5)$ is on $y=f(x)$. What is the y-coordinate of its image on $y=-f(x)$?`, 5, "(2, 5)."),
  num(S`$(2,-5)$ is on $y=f(x)$. What is the x-coordinate of its image on $y=f(-x)$?`, -2, "(−2, −5)."),
  mc(S`The grey curve is $y=x^2$. The violet curve is a translation of it. Its equation is:`, S`$y=(x-3)^2-2$`, [S`$y=(x+3)^2-2$`, S`$y=(x-3)^2+2$`, S`$y=(x+2)^2-3$`], "Vertex (3, −2).", planeDoc({ view: { xmin: -3, xmax: 6, ymin: -3, ymax: 6 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => (x - 3) ** 2 - 2 }], points: [P(3, -2)] })),
  tf(S`$y=f(x)-4$ is the graph of $y=f(x)$ moved down 4.`, true, "Every y decreases by 4."),
  mx(S`$y=x^2$ is translated 5 units left. Write the new $y$ in terms of $x$.`, "(x+5)^2", "Replace x by x + 5."),
  mx(S`$y=\sqrt x$ is translated 1 right and 2 up. Write the new $y$ in terms of $x$.`, "sqrt(x-1)+2", "Replace x by x − 1, then add 2."),
  num(S`$f(x)=x^2$ and $g(x)=f(x)+7$. Find $g(2)$.`, 11, "4 + 7."),
  num(S`$f(x)=3x+1$ and $g(x)=f(x-2)$. Find $g(5)$.`, 10, "f(3) = 10."),
  fill(S`$y=f(x)+k$ is a ___ translation.`, ["vertical", "Vertical"], "Up when k > 0, down when k < 0."),
  mc("The grey curve is y = f(x). The violet curve is:", S`$y=-f(x)$`, [S`$y=f(-x)$`, S`$y=f(x)-2$`, S`$y=2f(x)$`], "It is flipped upside down.", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => (x - 1) * (x - 1) + 0.5, color: "gray", a: -1, b: 3 }, { f: (x) => -((x - 1) * (x - 1) + 0.5), a: -1, b: 3 }] })),
  num(S`$(6,8)$ is on $y=f(x)$. What is the y-coordinate of its image on $y=\frac12f(x)$?`, 4, "Halve y."),
  num(S`$(6,8)$ is on $y=f(x)$. What is the x-coordinate of its image on $y=f(2x)$?`, 3, "Halve x."),
];

export const M = [
  num(S`$(3,4)$ is on $y=f(x)$. What is the y-coordinate of its image on $y=2f(x)-1$?`, 7, "2(4) − 1."),
  num(S`$(-2,5)$ is on $y=f(x)$. What is the x-coordinate of its image on $y=f(x+4)-3$?`, -6, "(−6, 2)."),
  num(S`$(8,-2)$ is on $y=f(x)$. What is the x-coordinate of its image on $y=-f(\frac12x)$?`, 16, "Double x: (16, 2)."),
  num(S`$y=x^2$ is stretched vertically by 3, then moved 1 right and 4 up. What is the y-coordinate of the image of $(2,4)$?`, 16, "(2, 12) → (3, 12) → (3, 16)."),
  mx(S`$f(x)=x^2-2x$ and $g(x)=f(x+1)$. Write $g(x)$ in expanded form.`, "x^2-1", "(x + 1)² − 2(x + 1)."),
  mx(S`$f(x)=2x+3$ and $g(x)=f(-x)$. Write $g(x)$.`, "-2*x+3", "Replace x by −x."),
  num(S`$f(x)=x^2+x$ and $g(x)=-f(x)+1$. Find $g(2)$.`, -5, "−6 + 1."),
  num(S`The range of $f$ is $-1\le y\le4$. What is the largest value in the range of $2f(x)+3$?`, 11, "2(4) + 3."),
  num(S`The domain of $f$ is $0\le x\le6$. What is the largest value in the domain of $f(2x)$?`, 3, "2x ≤ 6."),
  num(S`The domain of $f$ is $0\le x\le6$. What is the smallest value in the domain of $f(x+2)$?`, -2, "x + 2 ≥ 0."),
  tf(S`$f(x)=x^3$ satisfies $f(-x)=-f(x)$, so reflecting it in the y-axis gives the same graph as reflecting it in the x-axis.`, true, "(−x)³ = −x³."),
  ms(S`Which transformations of $y=x^2$ leave the point $(0,0)$ where it is? Select all.`, [S`$y=3x^2$`, S`$y=(2x)^2$`, S`$y=(x-1)^2$`, S`$y=-x^2$`], [0, 1, 3], "Only the translation moves it."),
  mc("The grey graph is y = |x|. The violet graph is:", S`$y=|x-2|+1$`, [S`$y=|x+2|+1$`, S`$y=|x-1|+2$`, S`$y=|x+1|-2$`], "The corner moves to (2, 1).", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.abs(x), color: "gray" }, { f: (x) => Math.abs(x - 2) + 1 }], points: [P(2, 1)] })),
  num(S`The violet curve is a vertical stretch of $y=\sqrt x$ (grey) and passes through $(4,6)$. What is the stretch factor?`, 3, "√4 = 2, and 6 = 3 × 2.", planeDoc({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 9 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 3 * Math.sqrt(x), a: 0 }], points: [P(4, 6)] })),
  num(S`What is the vertical asymptote of $y=\frac{1}{x-3}+2$? Give the value of $x$.`, 3, "y = 1/x moved 3 right."),
  num(S`What is the horizontal asymptote of $y=\frac{1}{x-3}+2$? Give the value of $y$.`, 2, "y = 1/x moved 2 up."),
  mc(S`$y=f\left(\frac x3\right)$ is:`, "a horizontal stretch, factor 3", [S`a horizontal stretch, factor $\frac13$`, "a vertical stretch, factor 3", "a translation 3 right"], "Every x is multiplied by 3."),
  mc(S`Which list takes $y=x^2$ to $y=-2(x+4)^2+1$?`, "vertical stretch 2, reflect in the x-axis, left 4, up 1", ["vertical stretch 2, reflect in the x-axis, right 4, up 1", S`vertical stretch $\frac12$, reflect in the x-axis, left 4, up 1`, "vertical stretch 2, reflect in the y-axis, left 4, up 1"], "a = −2, h = −4, k = 1."),
  num(S`$f(x)=x^2$ and $g(x)=f(x-3)-5$. Find $g(0)$.`, 4, "f(−3) − 5 = 9 − 5."),
  num(S`$f(x)=\sqrt x$ and $g(x)=f(x+9)$. Find $g(16)$.`, 5, "√25."),
];
