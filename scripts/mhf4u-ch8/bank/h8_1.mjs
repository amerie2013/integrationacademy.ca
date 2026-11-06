// 8.1 Sums and Differences of Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "8.1 Sums and Differences of Functions";
export const Q = [
  num(S`$R(x)=30x-0.02x^2$ and $C(x)=6x+4000$. Find the maximum profit.`, 3200, "P = −0.02x² + 24x − 4000; vertex x = 600; P = 3200."),
  num(S`For $P(x)=-0.02x^2+24x-4000$, find the smaller break-even quantity (nearest whole).`, 600 - Math.sqrt(160000), "x² − 1200x + 200 000 = 0 ⇒ x = 600 ± 400.", null, 0.5),
  num(S`Find the number of zeros of $\cos x+\cos2x$ on $0\le x\le2\pi$.`, 3, "2c² + c − 1 = 0 ⇒ c = 1/2 or −1 ⇒ π/3, π, 5π/3."),
  num(S`Find the smallest positive zero of $\sin x-\sin2x$.`, Math.PI / 3, "sin x(1 − 2cos x) = 0 ⇒ cos x = 1/2.", null, 0.01),
  num(S`$f(x)=\sqrt{x+6}$, $g(x)=\sqrt{10-x}$. Find the largest value of $f+g$ on its domain.`, Math.sqrt(32), "By symmetry the maximum is at x = 2: 2√8 ≈ 5.66.", null, 0.01),
  num(S`$h(x)=2^x+2^{-x}$. Find $h(3)$.`, 8.125, "8 + 1/8."),
  num(S`Find the minimum value of $h(x)=x+\frac9x$ for $x>0$.`, 6, "(√x − 3/√x)² ≥ 0 ⇒ x + 9/x ≥ 6, at x = 3."),
  num(S`$f(x)=\log(x+4)$ and $g(x)=\log(4-x)$. Find $(f+g)(0)$ to three decimals.`, 2 * Math.log10(4), "2 log 4.", null, 0.002),
  mc(S`The domain of $\log(x+4)+\log(4-x)$ is…`, S`$-4<x<4$`, [S`$-4\le x\le4$`, S`$x>-4$`, S`all real $x$`], "Both arguments positive."),
  mc(S`$f$ is even and $g$ is odd, both nonzero. Then $f+g$ is…`, "neither, unless one of them is zero", ["even", "odd", "always both"], "Even + odd is neither in general."),
  mc(S`Every function $h$ can be written as $E+O$ with $E$ even and $O$ odd. For $h(x)=2^x$, $E(x)=$…`, S`$\frac{2^x+2^{-x}}2$`, [S`$\frac{2^x-2^{-x}}2$`, S`$2^{x^2}$`, S`$2^{|x|}$`], "E(x) = (h(x) + h(−x))/2."),
  ms(S`Select every true statement for $h(x)=x^2-2^x$.`, ["h(2) = 0", "h(4) = 0", "h has a negative zero", "h(x) > 0 for all x > 4"], [0, 1, 2], "For x > 4, 2ˣ > x², so h < 0."),
  tf(S`If $f$ and $g$ are both increasing, then $f+g$ is increasing.`, true, "Each output rises, so their sum rises."),
  tf(S`If $f$ and $g$ are both increasing, then $f-g$ is increasing.`, false, "Example: f(x) = x, g(x) = 2x gives f − g = −x."),
  num(S`Revenue $R(x)=x(50-0.5x)$ and cost $C(x)=10x+200$. For what $x$ is profit maximum?`, 40, "P = −0.5x² + 40x − 200; vertex x = 40."),
  num(S`For the same $R$ and $C$, find the maximum profit.`, 600, "P(40) = −800 + 1600 − 200."),
  mc("The graph shows f (blue) and g (gray). Where is (f − g)(x) > 0?", "x < −1 or x > 2", ["−1 < x < 2", "x > 2 only", "x < −1 only"], "f is above g outside the crossings.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 8 }, curves: [{ f: (x) => x * x, color: "blue" }], lines: [{ m: 1, b: 2, color: "gray" }], points: [{ x: -1, y: 1, label: "(−1, 1)", color: "amber" }, { x: 2, y: 4, label: "(2, 4)", color: "amber" }], step: { x: 1, y: 1 } })),
  mc("The violet curve is the sum of the two dashed curves. Which pair is it?", "y = x and y = sin x", ["y = x and y = cos x", "y = 1 and y = sin x", "y = x² and y = sin x"], "The curve passes through the origin and wobbles about y = x.", planeDoc({ view: { xmin: -7, xmax: 7, ymin: -8, ymax: 8 }, curves: [{ f: (x) => x + Math.sin(x), color: "violet" }], step: { x: 1, y: 1 } })),
  mc("The graph shows y = sin x + sin 2x on [0, 2π]. How many zeros are there in that interval?", "5", ["3", "4", "2"], "0, 2π/3, π, 4π/3, 2π.", planeDoc({ view: { xmin: -0.3, xmax: 6.6, ymin: -2.2, ymax: 2.2 }, curves: [{ f: (x) => Math.sin(x) + Math.sin(2 * x), a: 0, b: 2 * Math.PI, color: "violet" }], step: { x: 0.5, y: 0.5 } })),
  mc("The graph shows a profit function P = R − C. Between which quantities is the company profitable?", "about 58.6 and 341.4", ["0 and 200", "200 and 400", "above 341.4"], "P > 0 between the break-even points.", planeDoc({ view: { xmin: -10, xmax: 420, ymin: -1200, ymax: 1300 }, curves: [{ f: (x) => -0.05 * x * x + 20 * x - 1000, color: "violet" }], step: { x: 50, y: 250 } })),
];
