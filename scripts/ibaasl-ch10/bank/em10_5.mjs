// 10.5 Area Between Curves — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { areaDoc } from "../figs10.mjs";

const S = String.raw;
const d3 = (v) => Math.round(v * 1000) / 1000;

export const E = [
  mc("The area between two curves is found by integrating:", "upper curve − lower curve", ["lower − upper", "upper + lower", "upper × lower"], "The gap between them."),
  mc("The limits for the area enclosed by two curves usually come from:", "their intersection points", ["their y-intercepts", "their turning points", "x = 0 and x = 1"], "Solve f(x) = g(x)."),
  num(S`Where do $y=x^2$ and $y=4x$ meet? Give the non-zero x-value.`, 4, "x² = 4x."),
  num(S`Find the area enclosed by $y=x^2$ and $y=4x$ (3 d.p.).`, d3(32 / 3), "∫₀⁴ (4x − x²) dx.", null, 0.001),
  num(S`Find the area enclosed by $y=x^2$ and $y=1$ (3 d.p.).`, d3(4 / 3), "∫₋₁¹ (1 − x²) dx.", null, 0.001),
  num(S`Find the area between $y=x+3$ and $y=1$ from $x=0$ to $x=2$.`, 6, "∫₀² (x + 2) dx."),
  num(S`Find the area between $y=2x$ and $y=x$ from $x=0$ to $x=4$.`, 8, "∫₀⁴ x dx."),
  num(S`Find the area between $y=6$ and $y=x^2+2$ from $x=0$ to $x=2$ (3 d.p.).`, d3(16 / 3), "∫₀² (4 − x²) dx.", null, 0.001),
  tf("The area between two curves is always positive.", true, "Upper minus lower."),
  tf("The area between curves below the x-axis must be calculated differently.", false, "Upper − lower works everywhere."),
  tf("If two curves cross inside the interval, you should split the integral at the crossing.", true, "The upper curve changes."),
  fill("To find where y = f(x) and y = g(x) meet, solve f(x) = ___.", ["g(x)", "g"], "Set them equal."),
  ms("Which steps are needed to find an enclosed area? Select all.", ["find the intersections", "decide which curve is above", "integrate upper − lower", "multiply the two functions"], [0, 1, 2], "No multiplication."),
  mc("In the diagram, which curve is the upper one on the shaded interval?", "y = 2x + 3", ["y = x²", "neither", "both"], "The line is above between the intersections.", areaDoc({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 10 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => x * x }, { f: (x) => 2 * x + 3, color: "amber" }] }, [{ f: (x) => 2 * x + 3, g: (x) => x * x, a: -1, b: 3 }])),
  mc("The shaded region between y = 4 − x² and y = 0 has area:", S`$\frac{32}3$`, [S`$\frac{16}3$`, "8", "16"], "∫₋₂² (4 − x²) dx.", areaDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 5 }, step: { x: 1, y: 1 }, curves: [{ f: (x) => 4 - x * x }] }, [{ f: (x) => 4 - x * x, a: -2, b: 2 }])),
  num(S`Where do $y=x^3$ and $y=x$ meet for $x>0$?`, 1, "x³ = x."),
  num(S`Find the area enclosed by $y=x^3$ and $y=x$ for $0\le x\le1$.`, 0.25, "∫₀¹ (x − x³) dx.", null, 0.001),
  num(S`Find the area between $y=e^x$ and $y=0$ from $x=0$ to $x=1$ (3 d.p.).`, d3(Math.E - 1), "e − 1.", null, 0.001),
  mc(S`The integral $\int_0^2\left[(5-x)-(x^2-x+1)\right]dx$ gives:`, "the area between y = 5 − x and y = x² − x + 1 from 0 to 2", ["the area under y = 5 − x", "the area under y = x² − x + 1", "nothing meaningful"], "Upper minus lower."),
  num(S`Evaluate $\int_0^2\left[(5-x)-(x^2-x+1)\right]dx$ (3 d.p.).`, d3(8 - 8 / 3), "∫₀² (4 − x²) dx.", null, 0.001),
];

export const M = [
  num(S`Find the area enclosed by $y=x^2-3x$ and $y=x$ (3 d.p.).`, d3(32 / 3), "x² − 3x = x ⇒ 0, 4; ∫₀⁴ (4x − x²).", null, 0.001),
  num(S`Find the area enclosed by $y=12-x^2$ and $y=x^2+4$ (3 d.p.).`, d3(64 / 3), "Meet at ±2; ∫ (8 − 2x²).", null, 0.001),
  num(S`Find the area enclosed by $y=x^2$ and $y=x+6$ (3 d.p.).`, d3(125 / 6), "Meet at −2, 3.", null, 0.001),
  num(S`Find the area enclosed by $y=\sqrt x$ and $y=x$ (3 d.p.).`, d3(1 / 6), "Meet at 0, 1; ∫ (√x − x).", null, 0.001),
  num(S`Find the area enclosed by $y=x^3$ and $y=4x$ (both lobes).`, 8, "Meet at 0, ±2; 2 × 4."),
  num(S`Find the area between $y=e^x$ and $y=e^{-x}$ from $x=0$ to $x=2$ (3 d.p.).`, d3(Math.exp(2) + Math.exp(-2) - 2), "[eˣ + e⁻ˣ]₀².", null, 0.001),
  num(S`Find the area between $y=\frac2x$ and $y=1$ from $x=2$ to $x=5$ (3 d.p.).`, d3(3 - 2 * Math.log(2.5)), "∫₂⁵ (1 − 2/x) dx.", null, 0.001),
  num(S`Find the area between $y=x^2+1$ and $y=x-1$ from $x=0$ to $x=2$ (3 d.p.).`, d3(8 / 3 + 2 - 2 + 2), "∫₀² (x² − x + 2) dx = 8/3 − 2 + 4.", null, 0.001),
  mc(S`On $[0,3]$, $y=x^2$ and $y=2x$ cross at $x=2$. The total area between them is:`, S`$\int_0^2(2x-x^2)\,dx+\int_2^3(x^2-2x)\,dx$`, [S`$\int_0^3(2x-x^2)\,dx$`, S`$\int_0^3(x^2-2x)\,dx$`, S`$\int_0^2(x^2-2x)\,dx$`], "Split at the crossing."),
  num(S`Evaluate that total area (3 d.p.).`, d3(4 / 3 + 4 / 3), "4/3 + 4/3.", null, 0.001),
  tf(S`The area enclosed by $y=x^2$ and $y=k$ ($k>0$) is $\frac43k^{3/2}$.`, true, "∫ (k − x²) from −√k to √k."),
  tf(S`$\int_a^b(f-g)\,dx$ is negative if $g$ is above $f$.`, true, "Reverse the order to get the area."),
  ms("For y = x² − 4 and y = 4 − x², which are true? Select all.", ["they meet at x = ±2", "4 − x² is the upper curve on (−2, 2)", "the enclosed area is 64/3", "the enclosed area is 32/3"], [0, 1, 2], "∫ (8 − 2x²) = 64/3."),
  mc("The shaded region lies between y = x² − 2x and y = 0 on [0, 2]. Its area is:", S`$\frac43$`, [S`$-\frac43$`, S`$\frac23$`, S`$\frac83$`], "Upper y = 0, lower y = x² − 2x.", areaDoc({ view: { xmin: -0.5, xmax: 2.5, ymin: -1.5, ymax: 1 }, step: { x: 0.5, y: 0.5 }, curves: [{ f: (x) => x * x - 2 * x }] }, [{ f: () => 0, g: (x) => x * x - 2 * x, a: 0, b: 2, color: "green" }])),
  mc("The shaded region between y = 8 − x² and y = 2x has area:", "36", ["32", "18", "24"], "Meet at −4, 2: ∫ (8 − x² − 2x) = 36.", areaDoc({ view: { xmin: -5, xmax: 3, ymin: -9, ymax: 9 }, step: { x: 1, y: 2 }, curves: [{ f: (x) => 8 - x * x }, { f: (x) => 2 * x, color: "amber" }] }, [{ f: (x) => 8 - x * x, g: (x) => 2 * x, a: -4, b: 2 }])),
  num(S`The area enclosed by $y=x^2$ and $y=mx$ ($m>0$) is 36. Find $m$.`, 6, "m³/6 = 36."),
  num(S`Find the area enclosed by $y=x^2$ and $y=18-x^2$.`, 72, "Meet at ±3: ∫₋₃³ (18 − 2x²) dx = 108 − 36."),
  num(S`Find the area bounded by $y=\frac1x$, $y=x$ and $x=3$ (3 d.p.).`, d3(4 - Math.log(3)), "Meet at 1: ∫₁³ (x − 1/x) = 4 − ln 3.", null, 0.001),
  mc("To find the area between y = ln x and y = x − 2, you would most likely need:", "a GDC for the intersections", ["no limits", "only the y-intercepts", "the product rule"], "ln x = x − 2 cannot be solved exactly."),
  num(S`Find the area enclosed by $y=x(x-6)$ and $y=-x$ (3 d.p.).`, d3(125 / 6), "x² − 6x = −x ⇒ 0, 5; ∫₀⁵ (5x − x²) dx.", null, 0.001),
];
