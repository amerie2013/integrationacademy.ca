// 2.3 Simplifying Expressions — 20 hard questions
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { areaGrid, rectFig } from "./svg2.mjs";

export const TOPIC = "2.3 Simplifying Expressions";
export const Q = [
  mx(String.raw`Simplify $2x(3x^2-x+4)-3x^2(2x-5)+x(x-8)$.`, "14*x^2", String.raw`$6x^3-2x^2+8x-6x^3+15x^2+x^2-8x=14x^2$.`),
  num(String.raw`Find $k$ if $3x(x+k)-x(3x-2)=17x$ for every $x$.`, 5, String.raw`$3x^2+3kx-3x^2+2x=(3k+2)x$, so $3k+2=17$, $k=5$.`),
  mc(String.raw`Jo wrote $8-2(x-3)=6(x-3)=6x-18$. What is the correct simplification?`, "$14-2x$", ["$6x-18$", "$2-2x$", "$8-2x-6$"], String.raw`Multiply first: $8-2x+6=14-2x$. Jo subtracted $8-2$ before multiplying.`),
  mx(String.raw`A picture $5x$ cm by $3x$ cm has a frame $3$ cm wide all around. Split the frame into strips and write a simplified expression for its area.`, "48*x+36", String.raw`Top and bottom: $2\times3(5x+6)=30x+36$. Sides: $2\times3(3x)=18x$. Total $48x+36$.`, rectFig("5x + 6", "3x + 6", { inner: { pad: 16, label: "5x by 3x" }, w: 240, h: 130 })),
  num(String.raw`Simplify $4a(a-b)-b(2a-b)$, then evaluate at $a=-2$, $b=3$.`, 61, String.raw`$4a^2-6ab+b^2$; $16+36+9=61$.`),
  mx(String.raw`Factor completely: $-12x^3+18x^2-6x$.`, "-6*x*(2*x^2-3*x+1)", String.raw`GCF $-6x$ (or $6x$): $-6x(2x^2-3x+1)$.`),
  ms(String.raw`Which are factored correctly? Select all.`, ["$9x^2-6x=3x(3x-2)$", "$4a+8=4(a+8)$", "$5m^2n-10mn^2=5mn(m-2n)$", "$7y+7=7y$", "$2x^3-x^2=x^2(2x-1)$"], [0, 2, 4], String.raw`$4(a+8)=4a+32$; $7y+7=7(y+1)$.`),
  num(String.raw`A rectangle has area $12x^2+20x$ and width $4x$. Find its length when $x=3$.`, 14, String.raw`Length $=\frac{12x^2+20x}{4x}=3x+5=14$.`),
  mx(String.raw`A box measures $x$ by $2x$ by $(x+3)$. Write its volume as a polynomial.`, "2*x^3+6*x^2", String.raw`$2x^2(x+3)=2x^3+6x^2$.`),
  mc(String.raw`$(-2a^2b)^3=$`, "$-8a^6b^3$", ["$-6a^6b^3$", "$-8a^5b^3$", "$8a^6b^3$"], String.raw`$(-2)^3=-8$, $(a^2)^3=a^6$, $b^3$.`),
  num(String.raw`A club orders $x$ pizzas at $(2c+3)$ dollars each and $3x$ drinks at $c$ dollars each. Simplify the total cost and evaluate it for $x=20$ and $c=4$.`, 460, String.raw`$x(2c+3)+3xc=5cx+3x$; $400+60=460$.`),
  tf(String.raw`$x(x+1)-x^2$ is odd for every integer $x$.`, false, String.raw`It simplifies to $x$, which is even when $x$ is even.`),
  mx(String.raw`An L-shaped floor is made of a $2x$ by $5x$ rectangle and an $x$ by $(2x+3)$ rectangle. Write its total area.`, "12*x^2+3*x", String.raw`$10x^2+2x^2+3x=12x^2+3x$.`),
  num(String.raw`Simplify $\dfrac{6x^3-9x^2}{3x}$, then evaluate at $x=5$.`, 35, String.raw`Divide each term: $2x^2-3x$; $50-15=35$.`),
  num(String.raw`What is the sum of the coefficients (including the constant) of the expansion of $-4x(x^2-3x+5)$? (Hint: substitute $x=1$.)`, -12, String.raw`$-4x^3+12x^2-20x$: $-4+12-20=-12$.`),
  ms(String.raw`Which are equivalent to $6x^2-15x$? Select all.`, ["$3x(2x-5)$", "$3(2x^2-5x)$", "$x(6x-15)$", "$3x(2x-15)$", "$6x(x-15)$"], [0, 1, 2], "Expand each to check; only three give 6x² − 15x."),
  mx(String.raw`Simplify $5(2x-3)-3[x-2(x+1)]$.`, "13*x-9", String.raw`Inner bracket first: $x-2x-2=-x-2$. Then $10x-15+3x+6=13x-9$.`),
  num(String.raw`A square of side $x$ is cut from one corner of a $3x$ by $(2x+1)$ rectangle. Find the perimeter of the new shape when $x=4$.`, 42, String.raw`Cutting a corner square removes two edges of length $x$ but adds two new edges of length $x$: the perimeter stays $2(3x+2x+1)=10x+2=42$.`),
  mx(String.raw`Find the missing factor: $2a^2(\ \square\ )=6a^5-4a^3+2a^2$.`, "3*a^3-2*a+1", String.raw`Divide each term by $2a^2$: $3a^3-2a+1$.`),
  num(String.raw`Complete the area model for $-5a(2a^2-3a+1)$. What is the sum of the three cells when $a=-1$?`, 30, String.raw`Cells $-10a^3$, $15a^2$, $-5a$. At $a=-1$: $10+15+5=30$.`, areaGrid("−5a", ["2a²", "−3a", "1"], ["?", "?", "?"])),
];
