// 2.5 Composite Functions — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "../../mcr3u-ch1/bank/fig.mjs";
import { chainDoc } from "../l2_5.mjs";

const S = String.raw;

export const TOPIC = "2.5 Composite Functions";
export const Q = [
  num(S`$f(x)=ax+b$ with $a>0$ and $(f\circ f)(x)=4x-9$. Find $b$.`, -3, "a² = 4, so a = 2; ab + b = 3b = −9."),
  num(S`$f(x)=x^2$, $g(x)=x+k$ with $k>0$, and $(f\circ g)(1)=16$. Find $k$.`, 3, "(1 + k)² = 16."),
  num(S`$f(x)=2x+1$ and $g(x)=\frac{x-1}{2}$. Find $(f\circ g)(7)$.`, 7, "g undoes f, so f(g(x)) = x."),
  num(S`$f(x)=x^2-4$, $g(x)=\sqrt x$. What is the smallest positive $x$ in the domain of $g\circ f$?`, 2, "x² − 4 ≥ 0."),
  num(S`For $f(x)=x^2$, $g(x)=x-2$, the graphs of $f\circ g$ (violet) and $g\circ f$ (green) are shown. Where do they meet? Give $x$.`, 1.5, "(x − 2)² = x² − 2 → −4x + 4 = −2.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -3, ymax: 8 }, curves: [{ f: (x) => (x - 2) ** 2, color: "violet" }, { f: (x) => x * x - 2, color: "green" }] }), 1e-9),
  num(S`$f(x)=x+3$, $g(x)=x^2$. Solve $(g\circ f)(x)=2(f\circ g)(x)$ and give the larger solution (3 d.p.).`, 6.464, "x² − 6x − 3 = 0: x = 3 + √12.", null, 0.001),
  tf("If f and g are both one-to-one, then f∘g is one-to-one.", true, "Different inputs stay different through both functions."),
  num(S`$f(x)=\frac{1}{1-x}$. Given that $f(f(f(x)))=x$, find $f(f(f(5)))$.`, 5, "Applying f three times returns x."),
  num(S`$f(x)=\frac{1}{1-x}$. Find $(f\circ f)(2)$.`, 0.5, "f(2) = −1, f(−1) = 0.5.", null, 1e-9),
  num("The chain shows x → g(x) = x + 1 → f(g(x)) with f(x) = x². Find f(g(4)).", 25, "g(4) = 5, f(5) = 25.", chainDoc([0, 1, 2], (x) => x + 1, (x) => x * x)),
  ms(S`For $f(x)=x^2$, which expressions equal $(f\circ f)(x)$? Select all.`, [S`$x^4$`, S`$(x^2)^2$`, S`$2x^2$`, S`$x^2\cdot x$`], [0, 1], "f(x²) = (x²)²."),
  num(S`$f(x)=2^x$, $g(x)=x+3$. Find $(f\circ g)(1)\div f(1)$.`, 8, "2⁴ ÷ 2 = 8."),
  num(S`$f(x)=3x+1$, $g(x)=x^2-2$. How many real solutions does $(f\circ g)(x)=(g\circ f)(x)$ have?`, 0, "6x² + 6x + 4 = 0 has a negative discriminant."),
  num(S`$f(x)=\sqrt{x-1}$, $g(x)=x^2+1$, so $(f\circ g)(x)=|x|$ (shown). Find $(f\circ g)(-3)$.`, 3, "√(9 + 1 − 1) = 3.", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.abs(x), color: "violet" }] })),
  num("The chain diagram uses g(x) = 2x and then f(x) = x − 3. Find (f∘g)(10).", 17, "g(10) = 20, f(20) = 17.", chainDoc([1, 2, 3], (x) => 2 * x, (x) => x - 3)),
  mc(S`Which decomposition gives $h(x)=\frac{1}{(2x-5)^2}=f(g(x))$?`, S`$g(x)=2x-5$, $f(x)=\frac{1}{x^2}$`, [S`$g(x)=\frac1x$, $f(x)=(2x-5)^2$`, S`$g(x)=x^2$, $f(x)=\frac{1}{2x-5}$`, S`$g(x)=2x$, $f(x)=\frac1{x^2}-5$`], "The inside is 2x − 5."),
  num(S`$f(x)=x^2+2x$, $g(x)=x-1$. Find $(f\circ g)(4)$.`, 15, "g(4) = 3, f(3) = 15."),
  tf(S`Composition is associative: $f\circ(g\circ h)=(f\circ g)\circ h$.`, true, "Both mean f(g(h(x)))."),
  num(S`A discount gives $D(p)=0.9p$ and tax gives $T(p)=1.13p$. Find $T(D(200))$.`, 203.4, "D(200) = 180, T(180) = 203.4.", null, 1e-9),
  num(S`$f(x)=x-3$, $g(x)=x^2$. Solve $(g\circ f)(x)=0$.`, 3, "(x − 3)² = 0."),
];
