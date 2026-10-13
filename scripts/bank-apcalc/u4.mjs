// AP Calculus AB exam prep — Unit 4 (Derivatives in Context): question bank.
// Original questions in exam format; see u1.mjs for the conventions.
import { mc, num } from "./helpers.mjs";
import { plot, C } from "../apcalc/fig.mjs";

const r = String.raw;
const lim = (to, body, v = "x") => `\\displaystyle\\lim_{${v}\\to ${to}}${body}`;
const DNE = "does not exist";

// ── figures ──
// piecewise-linear velocity: (0,2) (2,4) (4,0) (5,-2) (7,-2) (8,0)
const figV = () => {
  const g = plot({ w: 420, h: 300, x: [-0.5, 8.5], y: [-3, 5], xName: "t", yName: "v", alt: "Piecewise-linear graph of velocity against time" });
  g.poly([[0, 2], [2, 4], [4, 0], [5, -2], [7, -2], [8, 0]]).dot(0, 2).dot(8, 0);
  return g;
};
const figLadder = () => {
  const g = plot({ w: 300, h: 330, x: [-2, 14], y: [-2, 27], grid: false, ticks: false, xName: " ", yName: " ", alt: "A ladder leaning against a vertical wall" });
  g.seg(7, 0, 0, 24, { width: 3.2 }).dot(7, 0).dot(0, 24);
  g.label(3.1, -1.5, "x", { size: 15 }).label(-1.5, 12, "y", { size: 15 }).label(4.3, 13, "25 m", { plain: true, size: 13 });
  return g;
};
const figSqrt = () => {
  const g = plot({ w: 420, h: 290, x: [-0.5, 6.5], y: [-2.5, 3.5], alt: "Graph of f with its tangent line at x = 1" });
  g.curve((x) => x - 1, -0.5, 4.4, { color: C.alt, width: 1.9 }).curve(Math.log, 0.08, 6.3, { n: 600 }).dot(1, 0);
  g.label(4.6, 1.15, "y = f(x)");
  return g;
};
const V = "A particle moves along a line. The graph of its velocity $v(t)$, which consists of line segments, is shown for $0\\le t\\le8$. ";
const X = r`A particle moves along the $x$-axis with position $x(t)=2t^{3}-15t^{2}+24t$ for $t\ge0$. `;
const LAD = "A 25 m ladder leans against a vertical wall, with its foot $x$ metres from the wall and its top $y$ metres above the ground, as shown. ";

// ── 4.1 What a Derivative Means ───────────────
function g41() {
  return [
    mc("easy", r`The cost of producing $q$ items is $C(q)$ dollars. What are the units of $C'(q)$?`, "dollars per item", ["dollars", "items per dollar", "dollars × items"], r`Output units per input unit.`),
    mc("easy", r`The depth of water in a tank is $W(t)$ centimetres at time $t$ hours. Which statement correctly interprets $W'(3)=-1.5$?`, "At $t=3$ hours, the depth of the water is decreasing at a rate of 1.5 centimetres per hour.", ["At $t=3$ hours, the depth of the water is 1.5 centimetres.", "From $t=0$ to $t=3$ hours, the depth decreased by 1.5 centimetres.", "At $t=3$ hours, the depth of the water is decreasing at a rate of $-1.5$ centimetres per hour."], r`Instant, quantity, direction in words, positive rate with units. "Decreasing at $-1.5$" is a double negative.`),
    mc("easy", r`A function $f$ gives the mass, in grams, of a crystal $t$ days after it starts to form. Given $f(5)=20$ and $f'(5)=3$, which statement describes $f'(5)$?`, "On day 5 the mass of the crystal is increasing at 3 grams per day.", ["On day 5 the mass of the crystal is 3 grams.", "On day 5 the mass of the crystal is 20 grams.", "Over the first 5 days the mass increased by 3 grams."], r`$f(5)$ is the amount; $f'(5)$ is the rate at which the amount is changing.`),
    mc("easy", r`The population of a town is $P(t)$ at time $t$ years. If $P'(4)\lt0$, then at $t=4$ the population is`, "decreasing", ["negative", "increasing", "at its minimum"], r`A negative derivative means the quantity is decreasing at that instant.`),
    mc("medium", r`Gas flows through a pipe at a rate of $G(t)$ litres per minute at time $t$ minutes. What are the units of $G'(t)$?`, "litres per minute per minute", ["litres per minute", "litres", "minutes per litre"], r`$G$ is itself a rate, so its derivative is a rate of change of a rate.`),
    mc("medium", r`Gas flows through a pipe at a rate of $G(t)$ litres per minute. Which statement correctly interprets $G'(10)=-0.2$?`, "At $t=10$ minutes, the rate at which gas flows is decreasing at 0.2 litres per minute per minute.", ["At $t=10$ minutes, the amount of gas in the pipe is decreasing at 0.2 litres per minute.", "At $t=10$ minutes, gas is flowing at 0.2 litres per minute.", "In the first 10 minutes, 0.2 litres of gas left the pipe."], r`The quantity changing is the flow rate, not an amount of gas.`),
    mc("medium", r`The temperature at a point $x$ centimetres from one end of a rod is $T(x)$ °C. Which statement correctly interprets $T'(8)=-3$?`, "At the point 8 centimetres from the end, the temperature is decreasing at 3 °C per centimetre.", ["After 8 seconds, the temperature is decreasing at 3 °C per second.", "The temperature 8 centimetres from the end is $-3$ °C.", "The temperature falls by 3 °C over the first 8 centimetres."], r`The input is distance, not time, so the rate is per centimetre.`),
    mc("medium", r`A tree's height is $h(t)$ metres at age $t$ years, with $h(10)=6$ and $h'(10)=0.4$. Which is the best estimate of the tree's height at age 12?`, "$6.8$ m", ["$6.4$ m", "$7.2$ m", "$10$ m"], r`$6+2(0.4)=6.8$.`),
    mc("medium", r`A company's revenue is $R(t)$ thousand dollars $t$ months after launch. Which statement correctly interprets $R'(6)=12$?`, "At $t=6$ months, revenue is increasing at 12 thousand dollars per month.", ["At $t=6$ months, revenue is 12 thousand dollars.", "Revenue increased by 12 thousand dollars during the first 6 months.", "At $t=6$ months, revenue is increasing at 12 dollars per month."], r`Units: thousand dollars per month.`),
    mc("medium", r`A car has used $F(x)$ litres of fuel after travelling $x$ kilometres. What are the units of $F'(x)$?`, "litres per kilometre", ["kilometres per litre", "litres per hour", "litres"], r`Litres (output) per kilometre (input).`),
    mc("hard", r`A tank's volume is $V(t)$ litres, with $V(0)=30$ and $V'(t)=-2$ for all $0\le t\le5$ (in minutes). What is $V(5)$?`, "$20$", ["$28$", "$10$", "$40$"], r`A constant rate of $-2$ litres per minute for 5 minutes removes 10 litres.`),
    mc("hard", r`The temperature of an oven is $H(t)$ °C at time $t$ minutes, with $H'(3)=2$ and $H'(8)=-1$. Which statement must be true?`, "The temperature is rising at $t=3$ and falling at $t=8$.", ["The temperature at $t=3$ is higher than at $t=8$.", "The temperature at $t=8$ is $-1$ °C.", "The temperature reaches its maximum at $t=5.5$."], r`Derivative values give direction and rate at those instants only. They say nothing about the temperatures themselves.`),
    mc("hard", r`The number of people infected by a virus is $N(t)$ at time $t$ days. Which statement correctly interprets $N''(20)=-5$?`, "At $t=20$ days, the rate at which people are becoming infected is decreasing at 5 people per day per day.", ["At $t=20$ days, the number of infected people is decreasing at 5 people per day.", "At $t=20$ days, 5 fewer people are infected than on the previous day.", "The number of infected people reaches a maximum at $t=20$ days."], r`$N''$ describes how the rate $N'$ is changing. The number infected may still be increasing.`),
    mc("hard", r`For a function $A$, $\dfrac{A(10)-A(4)}{10-4}=3$ and $A'(7)=3.2$, where $A(t)$ is an area in cm² at time $t$ seconds. Which statement interprets $A'(7)$?`, "At $t=7$ seconds, the area is increasing at 3.2 cm² per second.", ["From $t=4$ to $t=10$ seconds, the area increased at an average rate of 3.2 cm² per second.", "At $t=7$ seconds, the area is 3.2 cm².", "From $t=4$ to $t=10$ seconds, the area increased at an average rate of 3 cm² per second."], r`The last option is true but interprets the difference quotient, not $A'(7)$.`),
    mc("hard", r`Water is pumped at a rate of $P(t)$ litres per hour, with $P(2)=40$ and $P'(2)=-6$. Which is the best estimate of the pumping rate at $t=2.5$ hours?`, "$37$ litres per hour", ["$43$ litres per hour", "$25$ litres per hour", "$34$ litres per hour"], r`$40+(-6)(0.5)=37$.`),
    num("hard", r`The cost of producing $q$ items is $C(q)$ dollars, and $C'(100)=2.5$. Estimate the additional cost, in dollars, of producing 4 more items when 100 are being produced.`, 10, 0, r`About $2.5$ dollars per item for 4 items: $4\times2.5=10$.`),
  ];
}

// ── 4.2 Motion Along a Line ───────────────
function g42() {
  const v = { fig: figV() };
  return [
    mc("easy", X + r`What is the velocity $v(t)$?`, r`$6t^{2}-30t+24$`, [r`$2t^{2}-15t+24$`, r`$12t-30$`, r`$6t^{2}-15t+24$`], r`$v=x'$. The option $12t-30$ is the acceleration.`),
    mc("easy", X + r`What is the acceleration $a(t)$?`, r`$12t-30$`, [r`$6t^{2}-30t+24$`, r`$12t$`, r`$12t-15$`], r`$a=v'=x''$.`),
    mc("easy", r`The speed of a particle with velocity $v(t)$ is`, r`$|v(t)|$`, [r`$v'(t)$`, r`$v(t)$`, r`$-v(t)$`], r`Speed is the magnitude of velocity and is never negative.`),
    mc("easy", X + r`At which times is the particle at rest?`, "$t=1$ and $t=4$", ["$t=2.5$ only", "$t=0$ only", "$t=1$ only"], r`$v(t)=6(t-1)(t-4)=0$. At $t=2.5$ the acceleration, not the velocity, is zero.`),
    num("easy", X + r`Find the velocity of the particle at $t=2$.`, -12, 0, r`$v(2)=24-60+24=-12$.`),
    mc("medium", X + r`On which interval is the particle moving in the negative direction?`, r`$1\lt t\lt4$`, [r`$0\lt t\lt1$`, r`$0\lt t\lt2.5$`, r`$t\gt4$`], r`$v(t)=6(t-1)(t-4)$ is negative between its zeros.`),
    mc("medium", X + r`At $t=0.5$ the particle is`, "moving right and slowing down", ["moving right and speeding up", "moving left and slowing down", "moving left and speeding up"], r`$v(0.5)=10.5\gt0$ and $a(0.5)=-24\lt0$: opposite signs.`),
    mc("medium", X + r`At $t=2$ the particle is`, "moving left and speeding up", ["moving left and slowing down", "moving right and speeding up", "moving right and slowing down"], r`$v(2)=-12$ and $a(2)=-6$: both negative, so the speed is increasing.`),
    mc("medium", X + r`What is the total distance travelled by the particle for $0\le t\le5$?`, "$49$", ["$5$", "$38$", "$27$"], r`$x(0)=0$, $x(1)=11$, $x(4)=-16$, $x(5)=-5$: $11+27+11=49$. The option 5 is the size of the displacement.`),
    mc("medium", r`A ball's height is $h(t)=40t-5t^{2}$ metres after $t$ seconds. What is its maximum height?`, "$80$ m", ["$40$ m", "$160$ m", "$75$ m"], r`$v=40-10t=0$ at $t=4$, and $h(4)=80$.`),
    mc("medium", r`A ball's height is $h(t)=40t-5t^{2}$ metres after $t$ seconds. What is its speed when it returns to the ground?`, "$40$ m/s", ["$-40$ m/s", "$0$ m/s", "$80$ m/s"], r`It lands at $t=8$ with $v(8)=-40$; speed is $|v|=40$.`),
    mc("medium", V + r`What is the acceleration of the particle at $t=3$?`, "$-2$", ["$2$", "$0$", "$-4$"], r`Acceleration is the slope of the velocity graph: from $(2,4)$ to $(4,0)$ the slope is $-2$. The option 2 is $v(3)$.`, v),
    mc("hard", V + r`At which time in $0\lt t\lt8$ does the particle change direction?`, "$t=4$ only", ["$t=2$ only", "$t=4$ and $t=8$", "$t=2$ and $t=5$"], r`The velocity changes sign only at $t=4$. At $t=2$ the velocity is at its greatest but still positive.`, v),
    mc("hard", V + r`On which of the following intervals is the speed of the particle increasing?`, r`$4\lt t\lt5$`, [r`$2\lt t\lt4$`, r`$5\lt t\lt7$`, r`$7\lt t\lt8$`], r`On $(4,5)$ the velocity is negative and its slope (the acceleration) is negative: same sign. On $(5,7)$ the speed is constant.`, v),
    mc("hard", r`A particle has position $x(t)=3\cos(2t)$. At $t=\dfrac{\pi}{6}$, the speed of the particle is`, r`increasing, because $v\lt0$ and $a\lt0$`, [r`decreasing, because $a\lt0$`, r`decreasing, because $v\lt0$ and $a\gt0$`, r`increasing, because $v\gt0$ and $a\gt0$`], r`$v=-6\sin\tfrac{\pi}{3}=-3\sqrt3$ and $a=-12\cos\tfrac{\pi}{3}=-6$: the same sign.`),
    mc("hard", r`A particle has velocity $v(t)=t^{2}-8t+12$ for $0\le t\le8$. On which intervals is its speed decreasing?`, r`$0\lt t\lt2$ and $4\lt t\lt6$`, [r`$2\lt t\lt6$`, r`$0\lt t\lt4$`, r`$2\lt t\lt4$ and $6\lt t\lt8$`], r`$v=(t-2)(t-6)$, $a=2t-8$. Opposite signs on $(0,2)$ and $(4,6)$. The last option lists where the speed is increasing.`),
    mc("hard", r`A particle has position $x(t)=e^{2t}-8t$. At what time does it change direction?`, r`$t=\ln2$`, ["$t=4$", r`$t=\ln4$`, "It never changes direction."], r`$v=2e^{2t}-8$ changes from negative to positive when $e^{2t}=4$, that is $t=\ln2$.`),
    num("hard", r`A particle has position $x(t)=t^{3}-27t$ for $t\ge0$. Find the total distance it travels for $0\le t\le4$.`, 64, 0, r`It turns at $t=3$: $x(0)=0$, $x(3)=-54$, $x(4)=-44$. Distance $=54+10$.`),
  ];
}

// ── 4.3 Rates of Change Beyond Motion ───────────────
function g43() {
  const c = { calc: true };
  return [
    mc("easy", r`A circle has area $A=\pi r^{2}$. What is the rate of change of the area with respect to the radius when $r=7$?`, r`$14\pi$`, [r`$49\pi$`, r`$7\pi$`, r`$2\pi$`], r`$\dfrac{dA}{dr}=2\pi r$. The option $49\pi$ is the area itself.`),
    mc("easy", r`A circle has area $A$ cm² and radius $r$ cm. What are the units of $\dfrac{dA}{dr}$?`, "cm² per cm", ["cm² per second", "cm²", "cm per cm²"], r`Output units per input unit; time is not involved.`),
    mc("easy", r`A sphere has volume $V=\dfrac{4}{3}\pi r^{3}$. What is $\dfrac{dV}{dr}$ when $r=2$?`, r`$16\pi$`, [r`$\dfrac{32\pi}{3}$`, r`$8\pi$`, r`$4\pi$`], r`$\dfrac{dV}{dr}=4\pi r^2$. The option $\tfrac{32\pi}{3}$ is the volume itself.`),
    mc("easy", r`Water enters a tank at a rate of $E(t)$ litres per minute and leaves at a rate of $L(t)$ litres per minute. The rate of change of the volume of water in the tank is`, "$E(t)-L(t)$", ["$E(t)+L(t)$", "$L(t)-E(t)$", "$E'(t)-L'(t)$"], r`Net rate is rate in minus rate out.`),
    mc("medium", r`A culture contains $P(t)=300e^{0.5t}$ bacteria after $t$ hours. What is $P'(2)$?`, "$150e$", ["$300e$", "$600e$", r`$150e^{0.5}$`], r`$P'(t)=150e^{0.5t}$, and $0.5(2)=1$. The option $300e$ omits the chain factor.`),
    mc("medium", r`A tank holds $V(t)=500-12t+0.2t^{2}$ litres after $t$ minutes. How fast is the volume changing at $t=10$?`, "decreasing at 8 litres per minute", ["decreasing at 12 litres per minute", "increasing at 8 litres per minute", "decreasing at 400 litres per minute"], r`$V'(t)=-12+0.4t$, so $V'(10)=-8$. The value 400 is $V(10)$.`),
    mc("medium", r`A tank holds $V(t)=500-12t+0.2t^{2}$ litres for $0\le t\le30$. At what time does the volume stop decreasing?`, "$t=30$", ["$t=15$", "$t=12$", "$t=60$"], r`$V'(t)=-12+0.4t=0$ at $t=30$.`),
    mc("medium", r`The number of fish in a lake is $N(t)=\dfrac{1200}{2+t}$ after $t$ years. What is $N'(4)$?`, r`$-\dfrac{100}{3}$`, ["$200$", "$-200$", r`$\dfrac{100}{3}$`], r`$N'(t)=-\dfrac{1200}{(2+t)^2}=-\dfrac{1200}{36}$. The value 200 is $N(4)$.`),
    mc("medium", r`A bowl of soup has temperature $T(t)=25+50e^{-0.2t}$ °C after $t$ minutes. How fast is it cooling at $t=0$?`, "10 °C per minute", ["50 °C per minute", "0.2 °C per minute", "75 °C per minute"], r`$T'(t)=-10e^{-0.2t}$, so $T'(0)=-10$.`),
    mc("medium", r`Water enters a tank at $5\sqrt{t}$ litres per minute and leaves at 10 litres per minute. At $t=9$ the amount of water in the tank is`, "increasing at 5 litres per minute", ["decreasing at 5 litres per minute", "increasing at 15 litres per minute", "not changing"], r`Net rate $=5(3)-10=5$.`),
    mc("medium", r`Water enters a tank at $5\sqrt{t}$ litres per minute and leaves at 10 litres per minute, for $t\ge0$. The amount of water in the tank is decreasing for`, r`$0\le t\lt4$`, [r`$t\gt4$`, r`$0\le t\lt2$`, "no values of $t$"], r`$5\sqrt t\lt10$ when $t\lt4$.`),
    mc("hard", r`A firm's profit from making $q$ items is $P(q)=40q-0.1q^{2}-800$ dollars. Which statement interprets $P'(150)=10$?`, "At a production level of 150 items, profit is increasing at 10 dollars per additional item.", ["The profit from 150 items is 10 dollars.", "Each of the 150 items earns a profit of 10 dollars.", "Profit is greatest when 150 items are produced."], r`Marginal profit is a rate with respect to the number of items.`),
    mc("hard", r`A firm's profit from making $q$ items is $P(q)=40q-0.1q^{2}-800$ dollars. At what production level is the marginal profit zero?`, "$200$", ["$400$", "$150$", "$20$"], r`$P'(q)=40-0.2q=0$ at $q=200$.`),
    mc("hard", r`For a fixed mass of gas, $P=\dfrac{800}{V}$, where $P$ is pressure in kPa and $V$ is volume in litres. What is $\dfrac{dP}{dV}$ when $V=40$?`, "$-0.5$ kPa per litre", ["$20$ kPa per litre", "$0.5$ kPa per litre", "$-20$ kPa per litre"], r`$\dfrac{dP}{dV}=-\dfrac{800}{V^2}=-\dfrac{800}{1600}$.`),
    mc("hard", r`A culture contains $P(t)=300e^{0.5t}$ bacteria after $t$ hours. At what time is the population growing at 600 bacteria per hour?`, r`$t=2\ln4$`, [r`$t=2\ln2$`, r`$t=\ln4$`, r`$t=4$`], r`$150e^{0.5t}=600$ gives $0.5t=\ln4$. The option $2\ln2$ is when the population (not the rate) is 600.`),
    mc("hard", r`A bowl of soup has temperature $T(t)=25+50e^{-0.2t}$ °C after $t$ minutes. What is $T'(5)$?`, "$-3.679$", ["$43.394$", "$-10.000$", "$-0.368$"], r`$T'(5)=-10e^{-1}=-3.679$. The option 43.394 is $T(5)$.`, c),
    mc("hard", r`The amount of a drug in the bloodstream is $A(t)=80e^{-0.25t}$ mg after $t$ hours. At what rate is the amount changing at $t=4$?`, "$-7.358$ mg per hour", ["$29.430$ mg per hour", "$-20.000$ mg per hour", "$-1.839$ mg per hour"], r`$A'(t)=-20e^{-0.25t}$, so $A'(4)=-20e^{-1}=-7.358$.`, c),
    num("hard", r`The cost of producing $q$ items is $C(q)=800+10q+0.05q^{2}$ dollars. Find the marginal cost, in dollars per item, when $q=100$.`, 20, 0, r`$C'(q)=10+0.1q$, so $C'(100)=20$.`),
  ];
}

// ── 4.4 Related Rates: Setting Up ───────────────
function g44() {
  return [
    mc("easy", r`If $S=4\pi r^{2}$ and $r$ is a differentiable function of time $t$, then $\dfrac{dS}{dt}=$`, r`$8\pi r\,\dfrac{dr}{dt}$`, [r`$8\pi r$`, r`$8\pi\,\dfrac{dr}{dt}$`, r`$4\pi r^{2}\,\dfrac{dr}{dt}$`], r`Chain rule: differentiate with respect to $r$, then multiply by $\dfrac{dr}{dt}$.`),
    mc("easy", r`"The volume of a sphere is decreasing at 12 cm³ per minute" is written as`, r`$\dfrac{dV}{dt}=-12$`, [r`$\dfrac{dV}{dt}=12$`, r`$V=-12$`, r`$\dfrac{dV}{dr}=-12$`], r`A decreasing quantity has a negative rate with respect to time.`),
    mc("easy", r`If $V=s^{3}$ and $s$ is a differentiable function of $t$, then $\dfrac{dV}{dt}=$`, r`$3s^{2}\,\dfrac{ds}{dt}$`, [r`$3s^{2}$`, r`$s^{3}\,\dfrac{ds}{dt}$`, r`$3\,\dfrac{ds}{dt}$`], r`Power rule, then the chain-rule factor.`),
    mc("easy", r`If $x^{2}+y^{2}=z^{2}$, where $x$, $y$ and $z$ are differentiable functions of $t$, then`, r`$2x\,\dfrac{dx}{dt}+2y\,\dfrac{dy}{dt}=2z\,\dfrac{dz}{dt}$`, [r`$2x+2y=2z$`, r`$2x\,\dfrac{dx}{dt}+2y\,\dfrac{dy}{dt}=0$`, r`$\dfrac{dx}{dt}+\dfrac{dy}{dt}=\dfrac{dz}{dt}$`], r`Every variable gets its own rate. The right side is 0 only if $z$ is constant.`),
    num("easy", r`The radius of a circle is increasing at 3 cm/s. When the radius is 10 cm, the area is increasing at $k\pi$ cm² per second. Find $k$.`, 60, 0, r`$\dfrac{dA}{dt}=2\pi r\,\dfrac{dr}{dt}=2\pi(10)(3)$.`),
    mc("medium", r`The radius of a sphere is increasing at 0.5 cm/s. How fast is its surface area $S=4\pi r^{2}$ increasing when $r=3$ cm?`, r`$12\pi$ cm²/s`, [r`$24\pi$ cm²/s`, r`$18\pi$ cm²/s`, r`$6\pi$ cm²/s`], r`$\dfrac{dS}{dt}=8\pi r\,\dfrac{dr}{dt}=8\pi(3)(0.5)$. The option $24\pi$ omits $\dfrac{dr}{dt}$.`),
    mc("medium", r`A spherical snowball melts so that its volume decreases at $36\pi$ cm³/min. How is its radius changing when $r=3$ cm?`, "decreasing at 1 cm/min", ["decreasing at 3 cm/min", "decreasing at 4 cm/min", "increasing at 1 cm/min"], r`$-36\pi=4\pi(9)\dfrac{dr}{dt}$.`),
    mc("medium", r`The volume of a cube is increasing at 24 cm³/s. How fast is its edge length increasing when the edge is 2 cm?`, "$2$ cm/s", ["$8$ cm/s", "$4$ cm/s", "$6$ cm/s"], r`$24=3(2)^2\dfrac{ds}{dt}$.`),
    mc("medium", r`The edge of a cube is 2 cm and is increasing at 2 cm/s. How fast is its surface area $S=6s^{2}$ increasing?`, "$48$ cm²/s", ["$24$ cm²/s", "$96$ cm²/s", "$12$ cm²/s"], r`$\dfrac{dS}{dt}=12s\,\dfrac{ds}{dt}=12(2)(2)$.`),
    mc("medium", r`Two quantities satisfy $xy=12$. When $x=3$, $x$ is increasing at 2 units per second. What is $\dfrac{dy}{dt}$ at that instant?`, r`$-\dfrac{8}{3}$`, [r`$\dfrac{8}{3}$`, r`$-\dfrac{3}{2}$`, r`$-6$`], r`$\dfrac{dx}{dt}y+x\dfrac{dy}{dt}=0$ with $y=4$: $8+3\dfrac{dy}{dt}=0$.`),
    mc("medium", r`A student finds the rate of change of a sphere's volume by first writing $V=\dfrac43\pi(6)^{3}=288\pi$ and then differentiating to get $\dfrac{dV}{dt}=0$. The error is`, "substituting the value of $r$ at one instant before differentiating", ["using the wrong formula for the volume", "forgetting the units", "differentiating with respect to $t$ instead of $r$"], r`$r$ is changing. Substituting $r=6$ first turns a variable into a constant.`),
    mc("medium", r`If $A=\ell w$, where both $\ell$ and $w$ are differentiable functions of $t$, then $\dfrac{dA}{dt}=$`, r`$\dfrac{d\ell}{dt}\,w+\ell\,\dfrac{dw}{dt}$`, [r`$\dfrac{d\ell}{dt}\,\dfrac{dw}{dt}$`, r`$\ell\,\dfrac{dw}{dt}$`, r`$\dfrac{d\ell}{dt}+\dfrac{dw}{dt}$`], r`Product rule, since both factors vary.`),
    mc("hard", r`A cylinder's radius is increasing at 2 cm/s while its height is decreasing at 3 cm/s. How fast is its volume $V=\pi r^{2}h$ changing when $r=4$ cm and $h=6$ cm?`, r`increasing at $48\pi$ cm³/s`, [r`increasing at $144\pi$ cm³/s`, r`decreasing at $48\pi$ cm³/s`, r`increasing at $96\pi$ cm³/s`], r`$\pi\left(2rh\dfrac{dr}{dt}+r^2\dfrac{dh}{dt}\right)=\pi(96-48)$. The option $144\pi$ uses $+3$ for the height's rate.`),
    mc("hard", r`A rectangle's length is increasing at 3 cm/s and its width is decreasing at 2 cm/s. When the length is 10 cm and the width is 6 cm, the area is`, "decreasing at 2 cm²/s", ["increasing at 38 cm²/s", "increasing at 18 cm²/s", "decreasing at 6 cm²/s"], r`$\dfrac{dA}{dt}=(3)(6)+(10)(-2)=-2$.`),
    mc("hard", r`A rectangle's length is increasing at 3 cm/s and its width is decreasing at 2 cm/s. When the length is 10 cm and the width is 6 cm, how fast is its diagonal changing?`, r`$\dfrac{9}{\sqrt{34}}$ cm/s`, [r`$\dfrac{18}{\sqrt{34}}$ cm/s`, "$1$ cm/s", r`$\dfrac{21}{\sqrt{34}}$ cm/s`], r`$D\dfrac{dD}{dt}=10(3)+6(-2)=18$ with $D=\sqrt{136}=2\sqrt{34}$.`),
    mc("hard", r`A gas satisfies $PV=600$. When $V=20$, the volume is increasing at 2 units per second. How fast is the pressure changing?`, "$-3$ units per second", ["$3$ units per second", "$-60$ units per second", r`$-\dfrac{3}{2}$ units per second`], r`$\dfrac{dP}{dt}V+P\dfrac{dV}{dt}=0$ with $P=30$: $20\dfrac{dP}{dt}=-60$.`),
    mc("hard", r`Quantities satisfy $z^{2}=x^{2}+y^{2}$ with $z\gt0$. When $x=5$ and $y=12$, $\dfrac{dx}{dt}=3$ and $\dfrac{dy}{dt}=-2$. What is $\dfrac{dz}{dt}$?`, r`$-\dfrac{9}{13}$`, ["$1$", r`$\dfrac{9}{13}$`, "$3$"], r`$z=13$, and $13\dfrac{dz}{dt}=5(3)+12(-2)=-9$.`),
    num("hard", r`The side of a square is increasing at 0.5 cm/s. Find the rate, in cm² per second, at which its area is increasing when the side is 8 cm.`, 8, 0, r`$\dfrac{dA}{dt}=2s\,\dfrac{ds}{dt}=2(8)(0.5)$.`),
  ];
}

// ── 4.5 Related Rates: Solving ───────────────
function g45() {
  const l = { fig: figLadder() };
  return [
    mc("easy", LAD + r`Which equation relates $x$ and $y$ at every instant?`, r`$x^{2}+y^{2}=625$`, [r`$x+y=25$`, r`$x^{2}+y^{2}=25$`, r`$xy=25$`], r`The ladder is the hypotenuse of a right triangle and has constant length 25.`, l),
    mc("medium", LAD + r`The foot of the ladder is pulled away from the wall at 2 m/s. When $x=7$, what is $\dfrac{dy}{dt}$?`, r`$-\dfrac{7}{12}$ m/s`, [r`$\dfrac{7}{12}$ m/s`, r`$-\dfrac{48}{7}$ m/s`, r`$-2$ m/s`], r`$x\dfrac{dx}{dt}+y\dfrac{dy}{dt}=0$ with $y=24$: $14+24\dfrac{dy}{dt}=0$.`, l),
    mc("medium", r`Water is poured into an inverted cone of height 10 cm and top radius 5 cm at 4 cm³/s. How fast is the water level rising when the water is 2 cm deep?`, r`$\dfrac{4}{\pi}$ cm/s`, [r`$\dfrac{1}{\pi}$ cm/s`, r`$\dfrac{16}{\pi}$ cm/s`, r`$\dfrac{4}{25\pi}$ cm/s`], r`$r=\dfrac h2$, so $V=\dfrac{\pi h^3}{12}$ and $4=\dfrac{\pi(4)}{4}\dfrac{dh}{dt}$. The last option uses the radius of the whole cone.`),
    mc("medium", r`A spherical balloon is inflated at $32\pi$ cm³/s. How fast is its radius increasing when $r=2$ cm?`, "$2$ cm/s", ["$8$ cm/s", "$4$ cm/s", r`$\dfrac{1}{2}$ cm/s`], r`$32\pi=4\pi(4)\dfrac{dr}{dt}$.`),
    mc("medium", r`The top of a 5 m ladder slides down a wall at 0.4 m/s. How fast is the foot moving away from the wall when the top is 3 m above the ground?`, "$0.3$ m/s", ["$0.4$ m/s", "$0.533$ m/s", "$0.24$ m/s"], r`$x=4$, and $4\dfrac{dx}{dt}+3(-0.4)=0$.`),
    mc("medium", r`A person 2 m tall walks away from a lamp post 5 m high at 1.5 m/s. How fast is the length of the person's shadow increasing?`, "$1$ m/s", ["$2.5$ m/s", "$0.6$ m/s", "$1.5$ m/s"], r`Similar triangles give $\dfrac{x+s}{5}=\dfrac s2$, so $s=\dfrac{2x}{3}$ and $\dfrac{ds}{dt}=1$. The value 2.5 is the speed of the shadow's tip.`),
    mc("medium", r`Sand falls onto a conical pile at 3 m³/min. The height of the pile always equals its diameter. How fast is the height increasing when the pile is 2 m high?`, r`$\dfrac{3}{\pi}$ m/min`, [r`$\dfrac{3}{4\pi}$ m/min`, r`$\dfrac{9}{4\pi}$ m/min`, r`$\dfrac{12}{\pi}$ m/min`], r`$r=\dfrac h2$, $V=\dfrac{\pi h^3}{12}$, so $3=\dfrac{\pi(4)}{4}\dfrac{dh}{dt}$.`),
    mc("medium", r`Water is pumped into a cylindrical tank of radius 2 m at 3 m³/min. How fast is the water level rising?`, r`$\dfrac{3}{4\pi}$ m/min`, [r`$\dfrac{3}{2\pi}$ m/min`, r`$12\pi$ m/min`, r`$\dfrac{3}{4}$ m/min`], r`$V=4\pi h$, so $3=4\pi\dfrac{dh}{dt}$. The radius is constant.`),
    mc("hard", r`Ship A is 50 km north of a port and sails south toward it at 10 km/h. At the same moment ship B leaves the port sailing east at 20 km/h. How fast is the distance between the ships changing after 2 hours?`, "increasing at 10 km/h", ["increasing at 22 km/h", "decreasing at 10 km/h", "increasing at 30 km/h"], r`$y=30$, $x=40$, $D=50$: $50\dfrac{dD}{dt}=40(20)+30(-10)=500$. The option 22 uses $+10$ for ship A.`),
    mc("hard", r`For the two ships described above (A starts 50 km north, sailing south at 10 km/h; B sails east from the port at 20 km/h), how fast is the distance between them changing after 1 hour?`, "It is not changing at that instant.", ["increasing at 10 km/h", "decreasing at 10 km/h", "increasing at 20 km/h"], r`$y=40$, $x=20$: $D\dfrac{dD}{dt}=20(20)+40(-10)=0$.`),
    mc("hard", r`A drone rises vertically at 2 m/s from a point on level ground 30 m from an observer. How fast is the angle of elevation of the drone changing when the drone is 40 m high?`, "$0.024$ rad/s", ["$0.067$ rad/s", "$0.185$ rad/s", "$0.040$ rad/s"], r`$\sec^2\theta\,\dfrac{d\theta}{dt}=\dfrac{2}{30}$ with $\sec^2\theta=\dfrac{25}{9}$. The option 0.067 omits $\sec^2\theta$.`),
    mc("hard", r`Two sides of a triangle have fixed lengths 8 cm and 10 cm, and the angle between them is increasing at 0.1 rad/s. How fast is the area changing when the angle is $\dfrac{\pi}{3}$?`, "$2$ cm²/s", [r`$2\sqrt3$ cm²/s`, "$4$ cm²/s", "$20$ cm²/s"], r`$A=40\sin\theta$, so $\dfrac{dA}{dt}=40\cos\theta\,(0.1)=40\cdot\tfrac12\cdot0.1$.`),
    mc("hard", r`A point moves along the curve $y=x^{3}$ with $\dfrac{dx}{dt}=2$. What is $\dfrac{dy}{dt}$ when $x=1$?`, "$6$", ["$3$", "$2$", "$12$"], r`$\dfrac{dy}{dt}=3x^2\,\dfrac{dx}{dt}=3(1)(2)$.`),
    mc("hard", r`In a problem about water filling an inverted cone, the relation $r=\dfrac{h}{2}$ from similar triangles is substituted before differentiating, but the value $h=2$ is not. Why?`, r`$r=\dfrac{h}{2}$ holds at every instant, whereas $h=2$ holds only at one instant.`, [r`Because $r$ is constant and $h$ is not.`, r`Because $h=2$ is not needed to find the rate.`, r`Because substitution is never allowed before differentiating.`], r`A relation true for all time can be used at any stage. A value true at one moment must wait until after differentiation.`),
    mc("hard", r`A circular ripple spreads so that its radius increases at 0.5 m/s. How fast is the enclosed area increasing at the instant the circumference is $10\pi$ m?`, r`$5\pi$ m²/s`, [r`$10\pi$ m²/s`, r`$2.5\pi$ m²/s`, r`$25\pi$ m²/s`], r`Circumference $10\pi$ means $r=5$. $\dfrac{dA}{dt}=2\pi(5)(0.5)$.`),
    num("hard", r`A 25 m ladder leans against a wall. Its foot is pulled away from the wall at 2 m/s. Find $\dfrac{dy}{dt}$, in m/s to three decimal places, for the height $y$ of the top when the foot is 24 m from the wall.`, -6.857, 0.001, r`$y=7$, and $24(2)+7\dfrac{dy}{dt}=0$, so $\dfrac{dy}{dt}=-\dfrac{48}{7}$.`),
  ];
}

// ── 4.6 Tangent-Line Approximation ───────────────
function g46() {
  const s = { fig: figSqrt() };
  return [
    mc("easy", r`The tangent-line approximation of $f$ near $x=a$ is $L(x)=$`, r`$f(a)+f'(a)(x-a)$`, [r`$f(a)+f'(x)(x-a)$`, r`$f'(a)+f(a)(x-a)$`, r`$f(a)(x-a)$`], r`Start value plus fixed slope times distance moved.`),
    mc("easy", r`Using the tangent line to $f(x)=\sqrt{x}$ at $x=9$, the approximation of $\sqrt{9.3}$ is`, "$3.05$", ["$3.1$", "$3.3$", "$3.025$"], r`$3+\dfrac16(0.3)$.`),
    mc("easy", r`A differentiable function $f$ has $f(2)=5$ and $f'(2)=-3$. The tangent-line approximation of $f(2.2)$ is`, "$4.4$", ["$5.6$", "$4.94$", "$-1.6$"], r`$5+(-3)(0.2)$.`),
    mc("easy", r`If $f''(x)\gt0$ on an interval containing $a$, then a tangent-line approximation at $a$ gives, for other points in that interval,`, "an underestimate, because the tangent line lies below the graph", ["an overestimate, because the tangent line lies above the graph", "the exact value", "an overestimate, because $f$ is increasing"], r`Concave up means the curve bends away above its tangent.`),
    num("easy", r`A function has $f(3)=7$ and $f'(3)=2$. Use the tangent line at $x=3$ to approximate $f(2.9)$.`, 6.8, 0.001, r`$7+2(-0.1)$.`),
    mc("medium", r`Using the tangent line to $f(x)=\ln x$ at $x=1$, the approximation of $\ln(1.05)$ is`, "$0.05$", ["$1.05$", "$0.95$", "$0.5$"], r`$f(1)=0$ and $f'(1)=1$.`),
    mc("medium", r`The tangent line to $f(x)=\ln x$ at $x=1$ is used to approximate $\ln(1.2)$. The approximation is`, "$0.2$, an overestimate", ["$0.2$, an underestimate", "$1.2$, an overestimate", "$0.02$, an overestimate"], r`$0+1(0.2)$; $f''=-\dfrac{1}{x^2}\lt0$, so the tangent lies above the graph.`),
    mc("medium", r`Using a tangent line at $x=1$, the approximation of $(1.02)^{5}$ is`, "$1.1$", ["$1.02$", "$1.5$", "$1.04$"], r`$f(x)=x^5$: $1+5(0.02)$.`),
    mc("medium", r`Using a tangent line at $x=2$, the approximation of $\dfrac{1}{2.01}$ is`, "$0.4975$", ["$0.5025$", "$0.495$", "$0.49$"], r`$f(x)=\dfrac1x$: $\dfrac12-\dfrac14(0.01)$.`),
    mc("medium", r`Using a tangent line to $f(x)=x^{5}$ at $x=1$, the approximation of $(1.02)^{5}$ is`, "$1.10$", ["$1.02$", "$1.05$", "$1.104$"], r`$f(1)=1$ and $f'(1)=5$: $1+5(0.02)$.`),
    mc("medium", "The graph of $f(x)=\\ln x$ and its tangent line at $x=1$ are shown. " + r`The tangent line is used to approximate $f(2)$. The approximation is`, "greater than $f(2)$, because the graph of $f$ is concave down", ["less than $f(2)$, because the graph of $f$ is concave down", "greater than $f(2)$, because $f$ is increasing", "equal to $f(2)$"], r`The tangent line lies above a concave-down graph.`, s),
    mc("medium", r`The tangent line to $f(x)=\sin x$ at $x=0$ gives $\sin(0.1)\approx0.1$. This approximation is`, "an overestimate, because $f''(x)=-\\sin x\\lt0$ on $(0,0.1)$", ["an underestimate, because $f''(x)=-\\sin x\\lt0$ on $(0,0.1)$", "an overestimate, because $f'(0)\\gt0$", "exact"], r`Concave down on the interval, so the tangent lies above the graph.`),
    mc("hard", r`A function $f$ satisfies $f(1)=5$ and $f'(x)=\sqrt{x^{2}+8}$. The tangent-line approximation of $f(1.2)$ is`, "$5.6$", ["$5.2$", "$5.06$", "$8.6$"], r`$f'(1)=3$, so $5+3(0.2)$.`),
    mc("hard", r`A function $f$ satisfies $f(1)=5$ and $f'(x)=\sqrt{x^{2}+8}$. The tangent-line approximation of $f(1.2)$, which is $5.6$, is an`, "underestimate, because $f''(x)\\gt0$ for $1\\le x\\le1.2$", ["overestimate, because $f''(x)\\gt0$ for $1\\le x\\le1.2$", "underestimate, because $f'(x)\\gt0$ for $1\\le x\\le1.2$", "overestimate, because $f'(x)\\gt0$ for $1\\le x\\le1.2$"], r`$f''(x)=\dfrac{x}{\sqrt{x^2+8}}\gt0$: concave up, tangent below. The sign of $f'$ is irrelevant.`),
    mc("hard", r`The point $(1,1)$ lies on the curve $x^{2}+xy+y^{2}=3$, where $\dfrac{dy}{dx}=-\dfrac{2x+y}{x+2y}$. Using the tangent line at $(1,1)$, the $y$-coordinate of the point on the curve with $x=1.1$ is approximately`, "$0.9$", ["$1.1$", "$0.7$", "$1.0$"], r`The slope at $(1,1)$ is $-1$, so $y\approx1-1(0.1)$.`),
    mc("hard", r`Using a tangent line at $x=8$, the approximation of $\sqrt[3]{8.06}$ is`, "$2.005$", ["$2.02$", "$2.0025$", "$2.06$"], r`$f'(x)=\tfrac13x^{-2/3}$, so $f'(8)=\tfrac1{12}$ and $2+\tfrac{0.06}{12}=2.005$.`),
    mc("hard", r`A function $y$ satisfies $\dfrac{dy}{dx}=2x+y$ with $y(0)=3$. The tangent-line approximation of $y(0.1)$ is`, "$3.3$", ["$3.1$", "$3.03$", "$2.7$"], r`The slope at $(0,3)$ is $3$: $3+3(0.1)$.`),
    mc("hard", r`A function $f$ has $f(1)=3$, $f'(1)=4$ and $f''(x)\lt0$ for all $x$. Which could be the value of $f(1.5)$?`, "$4.8$", ["$5$", "$5.2$", "$6$"], r`The tangent line gives 5. Concave down means the graph lies below the tangent, so $f(1.5)\lt5$.`),
    num("hard", r`Use a tangent line at $x=25$ to approximate $\sqrt{25.4}$.`, 5.04, 0.0005, r`$5+\dfrac{1}{10}(0.4)$.`),
  ];
}

// ── 4.7 L'Hôpital's Rule ───────────────
function g47() {
  return [
    mc("easy", r`L'Hôpital's Rule may be applied to $${lim("a", r`\dfrac{f(x)}{g(x)}`)}$ when`, r`$f(x)$ and $g(x)$ both tend to $0$, or both tend to $\pm\infty$, as $x\to a$`, [r`$g(x)$ tends to $0$ as $x\to a$`, r`$f$ and $g$ are differentiable`, r`the limit does not exist`], r`The rule is for the indeterminate forms $\tfrac00$ and $\tfrac\infty\infty$ only.`),
    mc("easy", r`Evaluate $${lim("0", r`\dfrac{\ln(1+x)}{\sin x}`)}$.`, "$1$", ["$0$", DNE, "$e$"], r`Form $\tfrac00$: $${lim("0", r`\dfrac{1/(1+x)}{\cos x}`)}=1$.`),
    mc("easy", r`Evaluate $${lim("1", r`\dfrac{\ln x}{x^{3}-1}`)}$.`, r`$\dfrac{1}{3}$`, ["$0$", "$1$", "$3$"], r`Form $\tfrac00$: $${lim("1", r`\dfrac{1/x}{3x^2}`)}=\dfrac13$.`),
    mc("easy", r`Evaluate $${lim("0", r`\dfrac{\sin(3x)}{2x}`)}$.`, r`$\dfrac{3}{2}$`, [r`$\dfrac{1}{2}$`, r`$\dfrac{2}{3}$`, "$0$"], r`$${lim("0", r`\dfrac{3\cos(3x)}{2}`)}=\dfrac32$.`),
    num("easy", r`Evaluate $${lim("3", r`\dfrac{x^{3}-27}{x^{2}-9}`)}$.`, 4.5, 0, r`$${lim("3", r`\dfrac{3x^2}{2x}`)}=\dfrac{27}{6}$.`),
    mc("medium", r`Evaluate $${lim(r`\infty`, r`\dfrac{x^{3}}{e^{2x}}`)}$.`, "$0$", [r`$\infty$`, "$1$", r`$\dfrac{3}{4}$`], r`Apply the rule three times: $\dfrac{3x^2}{2e^{2x}}$, $\dfrac{6x}{4e^{2x}}$, then $\dfrac{6}{8e^{2x}}\to0$.`),
    mc("medium", r`Evaluate $${lim("0", r`\dfrac{1-\cos x}{x^{2}}`)}$.`, r`$\dfrac{1}{2}$`, ["$0$", "$1$", DNE], r`$\dfrac{\sin x}{2x}$, then $\dfrac{\cos x}{2}\to\dfrac12$.`),
    mc("medium", r`A differentiable function $f$ has $f(3)=0$ and $f'(3)=4$, and $f'$ is continuous. What is $${lim("3", r`\dfrac{f(x)}{x^{2}-9}`)}$?`, r`$\dfrac{2}{3}$`, ["$4$", r`$\dfrac{4}{3}$`, "$0$"], r`Both tend to 0, so the limit is $\dfrac{f'(3)}{2(3)}$.`),
    mc("medium", r`Evaluate $${lim("1", r`\dfrac{x^{2}+1}{x+1}`)}$.`, "$1$", ["$2$", "$0$", DNE], r`This is not indeterminate: substitution gives $\tfrac22$. Misapplying L'Hôpital's Rule gives the wrong answer 2.`),
    mc("medium", r`Evaluate $${lim(r`\infty`, r`\dfrac{\ln x}{\sqrt{x}}`)}$.`, "$0$", [r`$\infty$`, "$1$", "$2$"], r`$\dfrac{1/x}{1/(2\sqrt x)}=\dfrac{2}{\sqrt x}\to0$.`),
    mc("medium", r`Evaluate $${lim("0", r`\dfrac{e^{3x}-1-3x}{x^{2}}`)}$.`, r`$\dfrac{9}{2}$`, ["$3$", "$9$", "$0$"], r`$\dfrac{3e^{3x}-3}{2x}$, then $\dfrac{9e^{3x}}{2}\to\dfrac92$.`),
    mc("medium", r`Which is a complete justification for evaluating $${lim("0", r`\dfrac{\ln(1+x)}{\sin x}`)}$?`, r`Since $${lim("0", r`\ln(1+x)`)}=0$ and $${lim("0", r`\sin x`)}=0$, L'Hôpital's Rule gives $${lim("0", r`\dfrac{1/(1+x)}{\cos x}`)}=1$.`, [r`$${lim("0", r`\dfrac{\ln(1+x)}{\sin x}`)}=\dfrac{0}{0}=${lim("0", r`\dfrac{1/(1+x)}{\cos x}`)}=1$`, r`$\dfrac{1/(1+x)}{\cos x}=1$`, r`By the quotient rule, the limit is $1$.`], r`The two limits are stated separately, the rule is named, and limit notation is kept. Writing "$=\tfrac00$" is penalised.`),
    mc("hard", r`Evaluate $${lim("0^{+}", r`x\ln x`)}$.`, "$0$", [r`$-\infty$`, "$1$", "$-1$"], r`Rewrite as $\dfrac{\ln x}{1/x}$: $\dfrac{1/x}{-1/x^2}=-x\to0$.`),
    mc("hard", r`Evaluate $${lim("0", r`\dfrac{x-\sin x}{x^{3}}`)}$.`, r`$\dfrac{1}{6}$`, ["$0$", r`$\dfrac{1}{3}$`, "$1$"], r`$\dfrac{1-\cos x}{3x^2}$, then $\dfrac{\sin x}{6x}\to\dfrac16$.`),
    mc("hard", r`A differentiable function $g$ has $g(1)=0$ and $g'(1)=6$, and $g'$ is continuous. What is $${lim("1", r`\dfrac{g(x)}{\ln x}`)}$?`, "$6$", ["$0$", r`$\dfrac{1}{6}$`, "$1$"], r`Both tend to 0: $\dfrac{g'(1)}{1/1}=6$.`),
    mc("hard", r`For what value of $k$ is $${lim("0", r`\dfrac{\sin(kx)}{e^{4x}-1}`)}=2$?`, "$8$", ["$2$", r`$\dfrac{1}{2}$`, "$4$"], r`The limit is $\dfrac{k}{4}$.`),
    mc("hard", r`Evaluate $${lim("0", r`\dfrac{\cos x-1+\frac{x^{2}}{2}}{x^{4}}`)}$.`, r`$\dfrac{1}{24}$`, ["$0$", r`$\dfrac{1}{12}$`, r`$\dfrac{1}{4}$`], r`Four applications: $\dfrac{-\sin x+x}{4x^3}$, $\dfrac{-\cos x+1}{12x^2}$, $\dfrac{\sin x}{24x}$, $\dfrac{\cos x}{24}$.`),
    mc("hard", r`A function $f$ is twice differentiable with $f(0)=0$, $f'(0)=0$ and $f''(0)=6$, and $f''$ is continuous. What is $${lim("0", r`\dfrac{f(x)}{x^{2}}`)}$?`, "$3$", ["$6$", "$0$", "$12$"], r`$\dfrac{f'(x)}{2x}$ is still $\tfrac00$; then $\dfrac{f''(x)}{2}\to3$.`),
    num("hard", r`Evaluate $${lim("0", r`\dfrac{\sqrt{1+x}-1-\frac{x}{2}}{x^{2}}`)}$ as a decimal.`, -0.125, 0.0005, r`$\dfrac{\frac12(1+x)^{-1/2}-\frac12}{2x}$, then $\dfrac{-\frac14(1+x)^{-3/2}}{2}\to-\dfrac18$.`),
  ];
}

export default [
  { code: "4.1", gen: g41 },
  { code: "4.2", gen: g42 },
  { code: "4.3", gen: g43 },
  { code: "4.4", gen: g44 },
  { code: "4.5", gen: g45 },
  { code: "4.6", gen: g46 },
  { code: "4.7", gen: g47 },
];
