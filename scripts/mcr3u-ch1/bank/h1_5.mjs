// 1.5 Inverse Functions — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const YX = { m: 1, b: 0, color: "gray", dash: true };

export const TOPIC = "1.5 Inverse Functions";
export const Q = [
  mx(String.raw`Find $f^{-1}(x)$ for $f(x)=3-\frac x4$.`, "12-4*x", "x = 3 − y/4 → y = 4(3 − x)."),
  num(String.raw`$f(x)=(x-2)^2+1$, $x\ge2$. At what x-value does $f$ meet $f^{-1}$? (3 decimals)`, 3.618, "On y = x: x² − 5x + 5 = 0 → x = (5 + √5)/2 (the other root is < 2).", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 6 }, curves: [{ f: (x) => (x - 2) ** 2 + 1, a: 2, color: "blue" }, { f: (x) => 2 + Math.sqrt(x - 1), a: 1, color: "red" }], lines: [YX] }), 0.002),
  mc(String.raw`$f(x)=x^2-8x+10$. Which restriction (containing $x=6$) gives an inverse function, and what is it?`, String.raw`$x\ge4$; $f^{-1}(x)=4+\sqrt{x+6}$`, [String.raw`$x\le4$; $f^{-1}(x)=4-\sqrt{x+6}$`, String.raw`$x\ge4$; $f^{-1}(x)=4+\sqrt{x-6}$`, String.raw`$x\ge6$; $f^{-1}(x)=\sqrt{x}+6$`], "f(x) = (x − 4)² − 6."),
  num(String.raw`$f(x)=ax+b$ is its own inverse, $a\ne1$, and $f(2)=7$. Find $f(5)$.`, 4, "a = −1, b = 9."),
  num(String.raw`$f(x)=3x+1$. Find $f^{-1}(f^{-1}(25))$ (3 decimals).`, 2.333, "f⁻¹(25) = 8, f⁻¹(8) = 7/3.", null, 0.002),
  ms("The line y = f(x) is shown. Which points are on the graph of f⁻¹? Select all.", [String.raw`$(3,4)$`, String.raw`$(0,-2)$`, String.raw`$(4,3)$`, String.raw`$(2,2)$`], [0, 1, 3], "f contains (4, 3), (−2, 0), (2, 2): swap them.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 6 }, lines: [{ m: 0.5, b: 1, color: "blue" }], points: [P(4, 3), P(-2, 0), P(2, 2)] })),
  tf("If f is increasing on its domain, then f⁻¹ is increasing too.", true, "Reflecting in y = x keeps the graph rising."),
  num(String.raw`$f(x)=x^3+1$. Find $f^{-1}(28)$.`, 3, "x³ = 27."),
  num(String.raw`$f(x)=\sqrt{x+3}-1$. Find $f^{-1}(2)$.`, 6, "f⁻¹(x) = (x + 1)² − 3."),
  mc(String.raw`What is the domain of $f^{-1}$ for $f(x)=\sqrt{x+3}-1$?`, String.raw`$x\ge-1$`, [String.raw`$x\ge-3$`, String.raw`$x\ge1$`, String.raw`$x\in\mathbb R$`], "Range of f is y ≥ −1."),
  num("The blue curve is f(x) = (x + 1)² − 2 for x ≥ −1; the red curve is its inverse. Find f⁻¹(7).", 2, "(x + 1)² = 9, x ≥ −1.", planeDoc({ view: { xmin: -3, xmax: 8, ymin: -3, ymax: 8 }, curves: [{ f: (x) => (x + 1) ** 2 - 2, a: -1, color: "blue" }, { f: (x) => -1 + Math.sqrt(x + 2), a: -2, color: "red" }], lines: [YX], points: [P(-1, -2)] })),
  num(String.raw`$f(x)=\frac1{x-2}$. Find $f^{-1}(0.5)$.`, 4, "f⁻¹(x) = 1/x + 2."),
  tf("The graph of a function always meets the graph of its inverse.", false, "y = x + 1 and y = x − 1 are parallel."),
  num(String.raw`Using $F=1.8C+32$, at what temperature are the Celsius and Fahrenheit readings equal?`, -40, "C = 1.8C + 32 → C = −40."),
  mc(String.raw`Find the inverse of $f(x)=-(x-3)^2+5$, $x\ge3$.`, String.raw`$f^{-1}(x)=3+\sqrt{5-x}$`, [String.raw`$f^{-1}(x)=3-\sqrt{5-x}$`, String.raw`$f^{-1}(x)=3+\sqrt{x-5}$`, String.raw`$f^{-1}(x)=-3+\sqrt{5-x}$`], "x = −(y − 3)² + 5 → (y − 3)² = 5 − x."),
  num(String.raw`$f(x)=2x+3$ and $g(x)=\frac{x-3}{2}$. Find $f(g(11))$.`, 11, "g is the inverse of f."),
  num(String.raw`Shipping costs $C(w)=6+1.5w$ dollars for $w$ kg. What weight costs 21 dollars?`, 10, "w = (21 − 6) ÷ 1.5."),
  ms("Which functions are their own inverse? Select all.", [String.raw`$y=-x$`, String.raw`$y=\frac1x$`, String.raw`$y=6-x$`, String.raw`$y=2x$`, String.raw`$y=x^2$`], [0, 1, 2], "Each is symmetric in y = x."),
  num("The graph of y = f(x) is a line through (1, 5) and (3, 9). Find f⁻¹(15).", 6, "f(x) = 2x + 3.", planeDoc({ view: { xmin: -2, xmax: 8, ymin: -1, ymax: 16 }, lines: [{ m: 2, b: 3, color: "blue" }], points: [P(1, 5), P(3, 9)], step: { x: 1, y: 2 } })),
  num(String.raw`$f(x)=(x-a)^2+b$, $x\ge a$, and $f^{-1}$ passes through $(7,4)$ and $(3,2)$. Find $b$.`, 3, "f(4) = 7 and f(2) = 3: subtracting gives a = 2, then b = 3."),
];
