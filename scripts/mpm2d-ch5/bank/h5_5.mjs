// 5.5 Quadratic Word Problems — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { frameDoc } from "./fig.mjs";

export const TOPIC = "5.5 Quadratic Word Problems";
export const Q = [
  num(`A ball's height is $h=-4.9t^2+24t+1.2$. For how long is it above $20$ m (to two decimal places)?`, 2.94, "$-4.9t^2+24t-18.8=0$: roots differ by $\\frac{\\sqrt{207.52}}{4.9}$.", null, 0.01),
  num(`A rocket's height is $h=-5t^2+60t$. For how many seconds is it above $100$ m?`, 8, "$t^2-12t+20=(t-2)(t-10)=0$."),
  num(`$400$ m of fencing encloses a rectangle split into three equal pens by two fences parallel to the width. Find the maximum total area (m$^2$).`, 5000, "$4w+2l=400$: $A=w(200-2w)$, $w=50$, $l=100$."),
  num(`A theatre sells $600$ seats at $15$ dollars. Each $1$ dollar increase sells $30$ fewer. What price (dollars) maximizes revenue?`, 17.5, "$R=(15+x)(600-30x)$: zeros $-15$, $20$; vertex $x=2.5$."),
  num(`A theatre sells $600$ seats at $15$ dollars; each $1$ dollar increase sells $30$ fewer. What is the maximum revenue (dollars)?`, 9187.5, "$17.5\\times525$."),
  num(`An arch is $y=-0.1x^2+2x$ (metres). How wide is the arch at a height of $4$ m (to two decimal places)?`, 15.49, "$x^2-20x+40=0$: roots differ by $\\sqrt{240}$.", null, 0.01),
  num(`A diver's height is $h=-4.9t^2+4t+10$. When does she reach the water (to two decimal places)?`, 1.89, "$t=\\frac{-4-\\sqrt{212}}{-9.8}$.", null, 0.01),
  tf(`A ball with $h=-5t^2+40t+5$ reaches $85$ m exactly once.`, true, "$t^2-8t+16=0$: $D=0$ (the maximum is $85$ m)."),
  num(`The product of two consecutive positive even integers is $224$. Find the larger one.`, 16, "$n(n+2)=224\\Rightarrow(n+16)(n-14)=0$."),
  mc(`A farmer has $60$ m of fencing for a garden against a wall. Which dimensions give the largest area?`, "$15$ m by $30$ m (the $30$ m side parallel to the wall)", ["$20$ m by $20$ m", "$10$ m by $40$ m", "$15$ m by $15$ m"], "$A=w(60-2w)$, $w=15$."),
  num(`The legs of a right triangle add to $14$ cm. What is the greatest possible area (cm$^2$)?`, 24.5, "$A=\\frac12x(14-x)$, vertex $x=7$."),
  num(`A ball's height is $h=-5t^2+30t+10$. For how many seconds is it at least $50$ m high?`, 2, "$t^2-6t+8=0$: from $2$ s to $4$ s."),
  num(`Squares of side $x$ cm are cut from the corners of a $20$ cm by $20$ cm sheet to fold a box with base area $144$ cm$^2$. Find $x$.`, 4, "$(20-2x)^2=144\\Rightarrow20-2x=12$."),
  ms(`Select all true statements about $h=-5t^2+20t+25$.`, ["the maximum height is $45$ m", "it lands after $5$ s", "it is above $40$ m from $1$ s to $3$ s", "it is highest at $3$ s", "it starts at $25$ m"], [0, 1, 2, 4], "Vertex $(2,45)$; $t^2-4t-5=0$; $t^2-4t+3=0$."),
  num(`A bridge cable hangs as $y=0.01x^2-2x+120$ for $0\\le x\\le200$ (metres). What is its lowest height?`, 20, "Vertex $x=100$: $100-200+120$."),
  num(`Profit is $P=-2x^2+120x-1000$ (hundreds of dollars), for $x$ hundred items. Find the smaller break-even value of $x$.`, 10, "$x^2-60x+500=(x-10)(x-50)=0$."),
  num(`Profit is $P=-2x^2+120x-1000$. What is the maximum profit?`, 800, "Vertex $x=30$: $-1800+3600-1000$."),
  tf(`If $h=H$ has two roots $t_1<t_2$, the object passes height $H$ on the way up at $t_1$.`, true, "It goes up, passes $H$, peaks, and comes down through $H$ again."),
  num(`A ball's height is $h=-4.9t^2+9.8t+1.8$. How long is it in the air (to two decimal places)?`, 2.17, "$t=\\frac{-9.8-\\sqrt{131.32}}{-9.8}$.", null, 0.01),
  num(`A $10$ m by $5$ m pool gets a deck of uniform width $x$, shown. The deck alone has the same area as the pool. Find $x$ to two decimal places.`, 1.4, "$(10+2x)(5+2x)-50=50\\Rightarrow2x^2+15x-25=0$.", frameDoc("10 m", "5 m", "x", "pool"), 0.01),
];
