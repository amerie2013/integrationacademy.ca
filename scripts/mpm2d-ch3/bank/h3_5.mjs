// 3.5 Special Products — 20 hard questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { sqDoc } from "./fig.mjs";

export const TOPIC = "3.5 Special Products";
export const Q = [
  mc(`Factor fully: $18x^2-8$.`, "$2(3x-2)(3x+2)$", ["$(9x-4)(2x+2)$", "$2(3x-2)^2$", "$(3x-2)(6x+4)$"], "$2(9x^2-4)$."),
  mc(`Factor fully: $(2x+1)^2-(x-3)^2$.`, "$(x+4)(3x-2)$", ["$(x-2)(3x+4)$", "$(x+4)(3x+2)$", "$(3x+4)(x-2)$"], "$[(2x+1)-(x-3)][(2x+1)+(x-3)]$."),
  num(`For which positive $k$ is $16x^2+kx+25$ a perfect square?`, 40, "$2\\times4x\\times5$."),
  num(`For which $c$ is $49x^2-56x+c$ a perfect square?`, 16, "$56x=2\\times7x\\times4$, so $c=4^2$."),
  mc(`Factor fully: $12x^2-36x+27$.`, "$3(2x-3)^2$", ["$3(2x+3)^2$", "$(6x-9)(2x-3)$", "$3(4x-9)(x-1)$"], "$3(4x^2-12x+9)$."),
  num(`Use a difference of squares to calculate $205\\times195$.`, 39975, "$200^2-5^2$."),
  num(`Use a perfect square to calculate $1002^2$.`, 1004004, "$(1000+2)^2=1\\,000\\,000+4000+4$."),
  tf(`Over the real numbers, $x^2-5=(x-\\sqrt5)(x+\\sqrt5)$.`, true, "$5=(\\sqrt5)^2$."),
  mc(`Factor fully: $a^2-(b+c)^2$.`, "$(a-b-c)(a+b+c)$", ["$(a-b+c)(a+b-c)$", "$(a-b-c)^2$", "$(a-b)(a+c)$"], "$[a-(b+c)][a+(b+c)]$."),
  num(`Simplify $(2x+5)^2-(2x-5)^2$. What is the coefficient of $x$?`, 40, "Difference of squares: $(10)(4x)$."),
  ms(`Select all expressions that factor over the integers.`, ["$x^2-50$", "$2x^2-50$", "$x^2+25$", "$9x^2+6x+1$", "$25-y^2$"], [1, 3, 4], "$x^2-50$ needs $\\sqrt{50}$; $x^2+25$ is a sum of squares."),
  fill(`$(x+5)^2-4=(x+3)(x+$ ___$)$`, ["7"], "$[(x+5)-2][(x+5)+2]$."),
  mc(`Factor fully: $x^2-6x+9-y^2$.`, "$(x-3-y)(x-3+y)$", ["$(x-3-y)^2$", "$(x-y-9)(x+y-1)$", "$(x-3)^2(1-y)$"], "$(x-3)^2-y^2$."),
  num(`$x^2-y^2=45$ and $x-y=5$. Find $x+y$.`, 9, "$x^2-y^2=(x-y)(x+y)$."),
  num(`$x+y=10$ and $x-y=4$. Find $x^2-y^2$.`, 40, "$10\\times4$."),
  tf(`$(x-3)^2=(3-x)^2$.`, true, "The bases are opposites; their squares are equal."),
  mc(`Factor fully: $64x^2-16x+1$.`, "$(8x-1)^2$", ["$(8x+1)^2$", "$(8x-1)(8x+1)$", "$(16x-1)(4x-1)$"], "$2\\times8x\\times1=16x$."),
  num(`Calculate $87^2-13^2$ using a difference of squares.`, 7400, "$(87-13)(87+13)=74\\times100$."),
  mc(`Factor fully: $5x^3-45x$.`, "$5x(x-3)(x+3)$", ["$5x(x-3)^2$", "$5(x^3-9x)$", "$x(5x-15)(x+3)$"], "$5x(x^2-9)$."),
  num(`The diagram shows a square of side $x+6$ with a square of side $x$ removed. Find the area of the remaining L-shape when $x=5$.`, 96, "$(x+6)^2-x^2=6(2x+6)=12x+36$; at $x=5$: $96$.", sqDoc("x + 6", "x", "L-shaped region")),
];
