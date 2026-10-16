// 1.3 Multiplying & Dividing Integers — 20 easy + 20 medium questions
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, graph } from "./svg.mjs";

export const E = [
  num(String.raw`Evaluate $(-6)(8)$.`, -48, "Different signs: negative."),
  num(String.raw`Evaluate $(-9)(-3)$.`, 27, "Same signs: positive."),
  num(String.raw`Evaluate $-56\div7$.`, -8, "Different signs: negative."),
  num(String.raw`Evaluate $-45\div(-9)$.`, 5, "Same signs: positive."),
  tf(String.raw`A negative number times a negative number is positive.`, true, "Same signs give a positive product."),
  mc(String.raw`What is the sign of $(-7)(4)(-2)$?`, "positive", ["negative", "zero", "cannot tell"], "Two negative factors (even) give a positive product."),
  num(String.raw`Evaluate $0\div(-6)$.`, 0, String.raw`$0\times(-6)=0$.`),
  mc(String.raw`$9\div0$ is`, "undefined", ["$0$", "$9$", "$-9$"], "No number times 0 gives 9."),
  num(String.raw`Evaluate $5\times(-3)+4$.`, -11, String.raw`Multiply first: $-15+4=-11$.`),
  fill(String.raw`$(-4)\times\_\_\_=36$`, ["-9", "−9"], String.raw`$(-4)(-9)=36$.`),
  num(String.raw`The diagram shows equal jumps on a number line. What multiplication does it show? Give the product.`, -10, String.raw`Five jumps of $-2$: $5\times(-2)=-10$.`, numberLine({ min: -11, max: 1, arrows: [0, 1, 2, 3, 4].map((i) => ({ from: -2 * i, to: -2 * i - 2, color: "red", lane: i % 2 })) })),
  num(String.raw`Evaluate $(-1)(-1)(-1)$.`, -1, "Three negative factors: negative."),
  num(String.raw`Evaluate $(-2)^2$.`, 4, String.raw`$(-2)(-2)=4$.`),
  num(String.raw`Evaluate $-2^2$.`, -4, String.raw`Only $2$ is squared: $-(2^2)=-4$.`),
  ms(String.raw`Which products are negative? Select all.`, [String.raw`$(-3)(5)$`, String.raw`$(-3)(-5)$`, String.raw`$(3)(-5)$`, String.raw`$(-1)(-1)(-1)$`], [0, 2, 3], "Odd number of negative factors gives a negative product."),
  num(String.raw`A freezer's temperature falls $2$ degrees every hour for $6$ hours. What is the total change?`, -12, String.raw`$6\times(-2)=-12$.`),
  tf(String.raw`$(-12)\div(-3)=-4$`, false, String.raw`Same signs: $+4$.`),
  num(String.raw`Evaluate $-30\div5\times2$.`, -12, String.raw`Left to right: $-6\times2=-12$.`),
  mc(String.raw`Which expression equals $-24$?`, String.raw`$(-6)(4)$`, [String.raw`$(-6)(-4)$`, String.raw`$-6+(-4)$`, String.raw`$6\times4$`], String.raw`Different signs: $-24$.`),
  num(String.raw`Find the mean of $-4,\ -8,\ 6$.`, -2, String.raw`$\frac{-6}{3}=-2$.`),
];

export const M = [
  num(String.raw`Evaluate $-3(4-9)+2$.`, 17, String.raw`$-3(-5)+2=15+2=17$.`),
  num(String.raw`Evaluate $(-18)\div(-3)-4\times(-2)$.`, 14, String.raw`$6-(-8)=14$.`),
  num(String.raw`Evaluate $2x^2-5x$ when $x=-3$.`, 33, String.raw`$2(9)-5(-3)=18+15=33$.`),
  num(String.raw`Evaluate $\dfrac{-48}{(-2)(-4)}$.`, -6, String.raw`$(-2)(-4)=8$; $-48\div8=-6$.`),
  mc(String.raw`Evaluate $(-2)^3\times(-1)^4$.`, "$-8$", ["$8$", "$-6$", "$6$"], String.raw`$-8\times1=-8$.`),
  fill(String.raw`Fill in the blank: $\_\_\_\div(-6)=-7$.`, ["42"], String.raw`$42\div(-6)=-7$.`),
  num(String.raw`Evaluate $-4^2+(-4)^2$.`, 0, String.raw`$-16+16=0$.`),
  tf(String.raw`$(-3)^4=-3^4$`, false, String.raw`$81$ vs $-81$.`),
  ms(String.raw`Which expressions equal $-20$? Select all.`, [String.raw`$(-4)(5)$`, String.raw`$-100\div5$`, String.raw`$(-2)(-10)$`, String.raw`$-2\times10$`, String.raw`$40\div(-2)$`], [0, 1, 3, 4], String.raw`$(-2)(-10)=20$.`),
  num(String.raw`A submarine dives at $15$ m per minute for $4$ minutes, starting at $-20$ m. Where is it now?`, -80, String.raw`$-20+4(-15)=-80$ m.`),
  num(String.raw`The graph shows a temperature falling at a steady rate. What is the change per hour?`, -4, String.raw`From $8$ to $-8$ in $4$ h: $\frac{-16}{4}=-4$.`, graph({ series: [{ pts: [[0, 8], [1, 4], [2, 0], [3, -4], [4, -8]] }], xmin: 0, xmax: 5, ymin: -10, ymax: 10, xstep: 1, ystep: 2, xlabel: "hours", ylabel: "°C" })),
  num(String.raw`Evaluate $[(-6)+2]^2\div(-8)$.`, -2, String.raw`$(-4)^2=16$; $16\div(-8)=-2$.`),
  mc(String.raw`Which has the greatest value?`, String.raw`$(-2)^4$`, [String.raw`$(-2)^3$`, String.raw`$-2^4$`, String.raw`$(-4)(2)$`], String.raw`$16$, $-8$, $-16$, $-8$.`),
  num(String.raw`Find the mean of the temperature changes $-9,\ 4,\ -7,\ -3,\ 0$.`, -3, String.raw`Sum $-15$; $-15\div5=-3$.`),
  tf(String.raw`The product of five negative numbers is negative.`, true, "An odd number of negative factors gives a negative product."),
  num(String.raw`Evaluate $ab-c$ when $a=-5$, $b=3$, $c=-4$.`, -11, String.raw`$-15-(-4)=-11$.`),
  num(String.raw`A stock loses $3$ dollars per share each day for $5$ days. Ana owns $20$ shares. What is the total change in her shares' value, in dollars?`, -300, String.raw`$20\times5\times(-3)=-300$.`),
  fill(String.raw`Fill in the blank: $(-3)(\_\_\_)(-2)=-30$.`, ["-5", "−5"], String.raw`$(-3)(-2)=6$; $6\times(-5)=-30$.`),
  mc(String.raw`Evaluate $12-3\times(-4)\div2$.`, "$18$", ["$-6$", "$6$", "$30$"], String.raw`$3\times(-4)=-12$, $\div2=-6$; $12-(-6)=18$.`),
  num(String.raw`Evaluate $(-1)^{15}\times(-6)^2$.`, -36, String.raw`$-1\times36=-36$.`),
];
