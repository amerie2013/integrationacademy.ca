// 5.5 Quadratic Word Problems — 20 easy + 20 medium questions
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc, fenceDoc } from "./fig.mjs";

export const E = [
  num(`A ball's height is $h=-5(t-2)^2+30$ metres. What is its maximum height?`, 30, "The vertex is $(2,30)$."),
  num(`A ball's height is $h=-5(t-4)^2+80$. After how many seconds is it highest?`, 4, "The vertex is $(4,80)$."),
  num(`A ball's height is $h=-5t^2+30t+2$. At what time is it highest?`, 3, "$t=\\frac{-30}{2(-5)}$."),
  num(`A ball's height is $h=-5t^2+30t+2$. What is its maximum height (m)?`, 47, "At $t=3$: $-45+90+2$."),
  mc(`Which feature of a height–time parabola gives the maximum height?`, "the vertex", ["the y-intercept", "the zeros", "the axis of symmetry's x-intercept only"], "The highest point is the vertex."),
  mc(`To find when a thrown ball lands, you solve…`, "$h=0$", ["$t=0$", "$h=t$", "$t=-\\frac{b}{2a}$"], "Landing means height 0."),
  num(`What is the greatest area (m$^2$) of a rectangle with perimeter $40$ m?`, 100, "A $10$ by $10$ square."),
  tf(`For a fixed perimeter, the rectangle with the largest area is a square.`, true, "The vertex of $A=w(\\frac P2-w)$ is at $w=\\frac P4$."),
  num(`A ball's height is $h=-5t^2+20t$. When does it land?`, 4, "$-5t(t-4)=0$."),
  num(`Revenue is $R=x(60-x)$ dollars. What is the maximum revenue?`, 900, "Zeros $0$ and $60$; vertex $x=30$: $30\\times30$."),
  mc(`If the equation $h=H$ has no real roots, the object…`, "never reaches height $H$", ["reaches $H$ twice", "reaches $H$ at the top", "starts at height $H$"], "No time gives that height."),
  num(`A stone's height is $h=-5t^2+15t+50$. When does it land?`, 5, "$t^2-3t-10=(t-5)(t+2)=0$."),
  tf(`In a height problem, a negative value of $t$ can be rejected.`, true, "Time is measured from the launch."),
  num(`Area is $A=w(30-w)$. What is the maximum area?`, 225, "Vertex at $w=15$."),
  num(`A ball's height is $h=-5t^2+40t$. At what time (other than $0$) is it back on the ground?`, 8, "$-5t(t-8)=0$."),
  fill(`For a parabola opening down, the object is above height $H$ ___ the two roots of $h=H$.`, ["between"], "The graph is above the line between the crossings."),
  num(`Two numbers add to $14$. What is their greatest possible product?`, 49, "$x(14-x)$, vertex $x=7$."),
  mc(`For $h=-5t^2+20t+1$, at what time is the ball highest?`, "$t=2$", ["$t=1$", "$t=4$", "$t=20$"], "$t=\\frac{-20}{-10}$."),
  num(`A pen against a wall uses $40$ m of fencing on three sides. What is its maximum area (m$^2$)?`, 200, "$A=w(40-2w)$, vertex $w=10$: $10\\times20$."),
  num(`The graph shows $h=-5t^2+20t$ and the line $h=15$. For how many seconds is the ball above $15$ m?`, 2, "From $t=1$ to $t=3$.", planeDoc({ view: { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 24 }, curves: [{ f: (t) => -5 * t * t + 20 * t, a: 0, b: 4, color: "blue" }], lines: [{ m: 0, b: 15, color: "red", dash: true, label: "h = 15" }], points: [{ x: 1, y: 15, label: "1 s", color: "red" }, { x: 3, y: 15, label: "3 s", color: "red" }], xlabel: "t (s)", ylabel: "h (m)", step: { x: 0.5, y: 2 } })),
];

export const M = [
  num(`A ball's height is $h=-5t^2+30t+35$. When does it land?`, 7, "$t^2-6t-7=(t-7)(t+1)=0$."),
  num(`A ball's height is $h=-5t^2+24t+3$. Find its maximum height (m).`, 31.8, "At $t=2.4$: $-28.8+57.6+3$."),
  num(`A ball's height is $h=-5t^2+25t$. For how many seconds is it at least $20$ m high?`, 3, "$t^2-5t+4=0$: from $1$ s to $4$ s."),
  num(`A rocket's height is $h=-5t^2+40t$. At what earlier time is it $35$ m high?`, 1, "$t^2-8t+7=(t-1)(t-7)=0$."),
  num(`A pen along a barn uses $100$ m of fencing on three sides. Find the maximum area (m$^2$).`, 1250, "$A=w(100-2w)$, $w=25$: $25\\times50$."),
  num(`At $4$ dollars a club sells $500$ snacks. Each $1$ dollar increase sells $50$ fewer. What price (dollars) gives the most revenue?`, 7, "$R=(4+x)(500-50x)$: zeros $-4$, $10$; vertex $x=3$."),
  num(`At $4$ dollars a club sells $500$ snacks; each $1$ dollar increase sells $50$ fewer. What is the maximum revenue (dollars)?`, 2450, "$x=3$: $7\\times350$."),
  num(`A $12$ cm by $8$ cm photo has a frame of uniform width. Photo and frame cover $140$ cm$^2$. How wide is the frame (cm)?`, 1, "$(12+2x)(8+2x)=140\\Rightarrow x^2+10x-11=0$."),
  num(`The squares of two consecutive positive integers add to $85$. Find the smaller integer.`, 6, "$n^2+(n+1)^2=85\\Rightarrow n^2+n-42=0$."),
  tf(`If $h=-5t^2+35t$, the ball is above $50$ m between $t=2$ and $t=5$.`, true, "$t^2-7t+10=0$."),
  num(`A ball's height is $h=-4.9t^2+15t+1$. Find its maximum height to two decimal places.`, 12.48, "At $t=\\frac{15}{9.8}$: $1+\\frac{225}{19.6}$.", null, 0.01),
  num(`A ball's height is $h=-4.9t^2+15t+1$. When does it land (to two decimal places)?`, 3.13, "$t=\\frac{-15-\\sqrt{244.6}}{-9.8}$.", null, 0.01),
  mc(`Which question is answered by solving $h=0$?`, "When does the ball hit the ground?", ["How high does the ball go?", "When is the ball highest?", "How high was the ball thrown from?"], "Ground level is $h=0$."),
  num(`What is the least possible product of two numbers that differ by $10$?`, -25, "$x(x+10)$ has vertex at $x=-5$: $(-5)(5)$."),
  num(`A field along a river uses $200$ m of fencing on three sides and has area $4800$ m$^2$. Find the smaller possible width (sides at right angles to the river).`, 40, "$w(200-2w)=4800\\Rightarrow(w-40)(w-60)=0$."),
  ms(`Select all roots you would reject in context.`, ["$t=-2$ for a time after launch", "$w=-5$ for a width", "$x=-3$ for a temperature in °C", "$n=-7$ for a number of people", "$x=-4$ for a coordinate"], [0, 1, 3], "Temperatures and coordinates can be negative."),
  num(`A ball's height is $h=-4.9t^2+20t$. For how long is it above $15$ m (to two decimal places)?`, 2.1, "Roots of $-4.9t^2+20t-15=0$ differ by $\\frac{\\sqrt{106}}{4.9}$.", null, 0.01),
  tf(`The vertex of $h=-5t^2+30t+2$ tells you when the ball lands.`, false, "It tells you when it is highest."),
  num(`A garden is $3$ m longer than it is wide. A $1$ m path around it makes the total area $70$ m$^2$. Find the garden's width.`, 5, "$(w+2)(w+5)=70\\Rightarrow(w+12)(w-5)=0$."),
  num(`A pen against a barn uses $64$ m of fencing on three sides, as shown. Find the maximum area (m$^2$).`, 512, "$A=w(64-2w)$, $w=16$: $16\\times32$.", fenceDoc("w", "64 − 2w", "barn")),
];
