// AP Calculus AB worksheets — Unit 8 (Applications of Integration).
// Original problems throughout, different from those in the lessons, the
// question bank and the online free-response questions. Written in LaTeX;
// build with ../build.mjs.
const r = String.raw;
const UNIT = "Unit 8: Applications of Integration";
const tab = (a, xs, b, ys) => r`\begin{center}\renewcommand{\arraystretch}{1.25}\begin{tabular}{|c|${"c|".repeat(xs.length)}}\hline $${a}$ & ${xs.map((x) => `$${x}$`).join(" & ")} \\ \hline $${b}$ & ${ys.map((y) => `$${y}$`).join(" & ")} \\ \hline\end{tabular}\end{center}`;
const I = (a, b, body, v = "x") => `\\displaystyle\\int_{${a}}^{${b}}${body}\\,d${v}`;
const CALC = r`\emph{A calculator may be used where a decimal answer is requested. Give decimals to three places.}`;

const sheets = [
  // ───────────── 8.1 ─────────────
  {
    code: "8.1", title: "Average Value of a Function", unit: UNIT,
    ideas: [
      r`The \textbf{average value} of $f$ on $[a,b]$ is $\dfrac{1}{b-a}${I("a", "b", "f(x)")}$.`,
      r`It is the height of the rectangle on $[a,b]$ with the same area as the region under the graph.`,
      r`If $f$ is continuous on $[a,b]$, then $f(c)$ equals the average value for at least one $c$ in the interval.`,
      r`Do not confuse it with the \textbf{average rate of change}, $\dfrac{f(b)-f(a)}{b-a}$, which is the average value of $f'$.`,
    ],
    examples: [
      { t: "A polynomial", q: r`Find the average value of $f(x)=3x^2-2x$ on $[1,4]$.`, s: r`$${I(1, 4, "(3x^2-2x)")}=\Big[x^3-x^2\Big]_1^4=48$.`, r: r`$\dfrac{48}{3}=16$.` },
      { t: "Where the average is reached", q: r`Find the value of $c$ in $[0,9]$ at which $f(x)=\sqrt{x}$ equals its average value on $[0,9]$.`, s: r`$${I(0, 9, r`\sqrt x`)}=18$, so the average is 2. Solve $\sqrt c=2$.`, r: r`$c=4$.` },
      { t: "An exponential", q: r`Find the average value of $f(x)=e^{2x}$ on $[0,1]$.`, s: r`$\dfrac{1}{1}\Big[\tfrac12e^{2x}\Big]_0^1$.`, r: r`$\dfrac{e^2-1}{2}$.` },
    ],
    core: [
      r`Find the average value of $f(x)=6x$ on $[0,4]$.`,
      r`Find the average value of $f(x)=x^3$ on $[0,2]$.`,
      r`Find the average value of $f(x)=\dfrac{1}{x^2}$ on $[1,4]$.`,
      r`Given $${I(2, 7, "f(x)")}=30$, find the average value of $f$ on $[2,7]$.`,
    ],
    exam: [
      r`Find the average value of $f(x)=x\sqrt{x^2+9}$ on $[0,4]$.`,
      r`The average value of $f$ on $[1,5]$ is 7. Find $${I(1, 5, r`\big(f(x)+2\big)`)}$.`,
      r`Find the value of $c$ in $[0,6]$ at which $f(x)=x^2+2$ equals its average value on $[0,6]$.`,
      r`The table gives the temperature $H(t)$, in $^\circ$C, at selected times $t$ hours. Use a trapezoidal sum with three subintervals to estimate the average temperature for $0\le t\le10$.` + tab("t", [0, 2, 6, 10], "H(t)", [12, 18, 20, 14]),
    ],
    fr: {
      intro: r`\emph{Calculator permitted.} The temperature in a greenhouse is $W(t)=20+15\sin\!\left(\dfrac{\pi t}{12}\right)$ degrees Celsius, for $0\le t\le12$, where $t$ is in hours.`,
      parts: [
        r`Find the average temperature for $0\le t\le12$.`,
        r`Find the average rate of change of the temperature for $0\le t\le6$. Include units.`,
        r`Find the times at which the temperature equals its average value.`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac14(48)=12$.`,
        r`$\dfrac12(4)=2$.`,
        r`$\dfrac13\left(1-\dfrac14\right)=\dfrac14$.`,
        r`$\dfrac{30}{5}=6$.`,
      ],
      exam: [
        r`$\dfrac14\Big[\tfrac13(x^2+9)^{3/2}\Big]_0^4=\dfrac14\cdot\dfrac{125-27}{3}=\dfrac{49}{6}$.`,
        r`$${I(1, 5, "f(x)")}=28$, and $${I(1, 5, "2")}=8$: total 36.`,
        r`Average $=\dfrac16(72+12)=14$; $c^2+2=14$ gives $c=2\sqrt3$.`,
        r`$\dfrac{2(12+18)}{2}+\dfrac{4(18+20)}{2}+\dfrac{4(20+14)}{2}=174$; average $\approx17.4$ $^\circ$C.`,
      ],
      fr: [
        r`$\dfrac{1}{12}${I(0, 12, "W(t)", "t")}=20+\dfrac{30}{\pi}\approx29.549$ $^\circ$C.`,
        r`$\dfrac{W(6)-W(0)}{6}=\dfrac{35-20}{6}=2.5$ $^\circ$C per hour.`,
        r`$\sin\!\left(\dfrac{\pi t}{12}\right)=\dfrac2\pi$: $t\approx2.636$ and $t\approx9.364$ hours.`,
      ],
    },
  },

  // ───────────── 8.2 ─────────────
  {
    code: "8.2", title: "Position, Velocity and Acceleration by Integration", unit: UNIT,
    ideas: [
      r`\textbf{Displacement} on $[a,b]$ is $${I("a", "b", "v(t)", "t")}$. \textbf{Position}: $x(b)=x(a)+${I("a", "b", "v(t)", "t")}$.`,
      r`\textbf{Total distance} is $${I("a", "b", r`|v(t)|`, "t")}$. Without a calculator, split the interval where $v$ changes sign.`,
      r`\textbf{Velocity}: $v(b)=v(a)+${I("a", "b", "a(t)", "t")}$.`,
      r`Speed is $|v|$. It increases when $v$ and $a$ have the same sign.`,
    ],
    examples: [
      { t: "Position", q: r`A particle has $v(t)=t^2-6t+8$ and $x(0)=1$. Find $x(6)$.`, s: r`$${I(0, 6, "(t^2-6t+8)", "t")}=\Big[\tfrac{t^3}{3}-3t^2+8t\Big]_0^6=12$.`, r: r`$x(6)=13$.` },
      { t: "Total distance", q: r`Find the total distance travelled by that particle for $0\le t\le6$.`, s: r`$v=0$ at $t=2$ and $t=4$. The displacements on the three intervals are $\dfrac{20}{3}$, $-\dfrac43$ and $\dfrac{20}{3}$.`, r: r`$\dfrac{20}{3}+\dfrac43+\dfrac{20}{3}=\dfrac{44}{3}$.` },
      { t: "From acceleration", q: r`A particle has $a(t)=6t-4$ and $v(0)=3$. Find $v(2)$.`, s: r`$v(2)=3+${I(0, 2, "(6t-4)", "t")}=3+(12-8)$.`, r: r`$v(2)=7$.` },
    ],
    core: [
      r`A particle has $v(t)=4t-6$. Find its displacement for $0\le t\le5$.`,
      r`For the particle in Question 1, find the total distance travelled for $0\le t\le5$.`,
      r`A particle has $a(t)=12t^2$ and $v(0)=-5$. Find $v(2)$.`,
      r`A particle has $x(1)=4$ and $${I(1, 6, "v(t)", "t")}=-9$. Find $x(6)$.`,
    ],
    exam: [
      r`A particle has $v(t)=6\sin(2t)$ for $0\le t\le\pi$. Find its displacement and the total distance travelled.`,
      r`A particle has $v(t)=e^{t}-3$ and $x(0)=5$. Find its position at the moment it is at rest.`,
      r`A ball is thrown upward with velocity 20 metres per second, and its acceleration is $-10$ metres per second per second. How far above its starting point does it rise?`,
      r`\emph{Calculator.} A particle has $v(t)=e^{t/2}\cos t$ for $0\le t\le4$. Find the total distance travelled, and the displacement.`,
    ],
    fr: {
      intro: r`A particle moves along the $x$-axis with velocity $v(t)=t^3-6t^2+8t$ for $0\le t\le5$. At time $t=0$ the particle is at $x=3$.`,
      parts: [
        r`Find the interval of time during which the particle is moving to the left. Justify your answer.`,
        r`Find the position of the particle at $t=4$, and the total distance it travels for $0\le t\le4$.`,
        r`Is the speed of the particle increasing or decreasing at $t=3$? Give a reason.`,
      ],
    },
    sol: {
      core: [
        r`$\Big[2t^2-6t\Big]_0^5=20$.`,
        r`$v=0$ at $t=1.5$. Displacements $-4.5$ and $24.5$: distance 29.`,
        r`$-5+\Big[4t^3\Big]_0^2=27$.`,
        r`$4+(-9)=-5$.`,
      ],
      exam: [
        r`Displacement $\Big[-3\cos(2t)\Big]_0^{\pi}=0$. Distance $2${I(0, r`\pi/2`, r`6\sin(2t)`, "t")}=12$.`,
        r`At rest when $t=\ln3$. $x=5+\Big[e^{t}-3t\Big]_0^{\ln3}=7-3\ln3$.`,
        r`$v=20-10t=0$ at $t=2$; rise $=${I(0, 2, "(20-10t)", "t")}=20$ metres.`,
        r`Distance $${I(0, 4, r`\left|e^{t/2}\cos t\right|`, "t")}\approx9.515$; displacement $\approx-6.806$.`,
      ],
      fr: [
        r`$v(t)=t(t-2)(t-4)$, which is negative for $2<t<4$. The particle moves left on that interval because $v<0$.`,
        r`With $s(t)=\dfrac{t^4}{4}-2t^3+4t^2$: displacement on $[0,2]$ is 4 and on $[2,4]$ is $-4$. Position $x(4)=3$; distance $4+4=8$.`,
        r`$v(3)=-3$ and $a(3)=3(9)-12(3)+8=-1$. Both are negative, so the speed is increasing.`,
      ],
    },
  },

  // ───────────── 8.3 ─────────────
  {
    code: "8.3", title: "Rate In, Rate Out", unit: UNIT,
    pre: CALC,
    ideas: [
      r`The integral of a rate is an amount: $${I("a", "b", "R(t)", "t")}$ is the amount that entered from $t=a$ to $t=b$.`,
      r`Amount at time $t$ $=$ starting amount $+${I(0, "t", r`\big(\text{in}-\text{out}\big)`, "x")}$.`,
      r`The amount is increasing when the rate in exceeds the rate out.`,
      r`A greatest or least amount occurs at an endpoint or where rate in $=$ rate out. Compare the amount at every candidate.`,
    ],
    examples: [
      { t: "The amount", q: r`A tank holds 50 litres. Water enters at 12 litres per minute and leaves at $2t$ litres per minute, for $0\le t\le10$. How much is in the tank at $t=10$?`, s: r`$50+${I(0, 10, "(12-2t)", "t")}=50+120-100$.`, r: r`70 litres.` },
      { t: "The greatest amount", q: r`When does that tank hold the most water, and how much?`, s: r`$12=2t$ at $t=6$; the net rate changes from positive to negative there. Amount: $50+72-36$.`, r: r`86 litres, at $t=6$.` },
      { t: "Increasing or decreasing", q: r`Is the amount of water in that tank increasing or decreasing at $t=8$?`, s: r`Net rate $12-16=-4$ litres per minute.`, r: r`Decreasing, because the rate out exceeds the rate in.` },
    ],
    core: [
      r`A tank holds 40 litres. Liquid enters at 8 litres per minute and leaves at 5 litres per minute. How much is in the tank after 10 minutes?`,
      r`$R(t)$ is the rate, in litres per hour, at which oil enters a tank. Explain the meaning of $${I(0, 6, "R(t)", "t")}$.`,
      r`Sand enters a bin at $6t$ kg per minute and leaves at $t^2$ kg per minute, for $0\le t\le10$. On what interval is the amount of sand increasing?`,
      r`The bin in Question 3 holds 10 kg at $t=0$. How much does it hold at $t=6$?`,
    ],
    exam: [
      r`Coffee beans are loaded into a hopper at $L(t)=18e^{-0.15t}$ kg per minute and used at $U(t)=4+0.5t$ kg per minute, for $0\le t\le10$. The hopper holds 25 kg at $t=0$. How many kilograms are loaded during the 10 minutes?`,
      r`Is the amount of beans in the hopper increasing or decreasing at $t=6$? Give a reason.`,
      r`Find the amount of beans in the hopper at $t=10$.`,
      r`Find the time at which the hopper holds the most beans, and that amount. Justify your answer.`,
    ],
    fr: {
      intro: r`Fuel enters a tank at the rate $F(t)=8+4\sin\!\left(\dfrac t2\right)$ litres per minute and is drawn off at the rate $D(t)=0.3t^2$ litres per minute, for $0\le t\le8$. The tank holds 30 litres at $t=0$.`,
      parts: [
        r`How many litres of fuel enter the tank for $0\le t\le8$?`,
        r`Find the rate at which the amount of fuel in the tank is changing at $t=5$. Include units.`,
        r`Find the greatest amount of fuel in the tank for $0\le t\le8$. Justify your answer.`,
      ],
    },
    sol: {
      core: [
        r`$40+10(8-5)=70$ litres.`,
        r`The number of litres of oil that enter the tank during the first 6 hours.`,
        r`$6t>t^2$ for $0<t<6$.`,
        r`$10+${I(0, 6, "(6t-t^2)", "t")}=10+108-72=46$ kg.`,
      ],
      exam: [
        r`$${I(0, 10, "L(t)", "t")}\approx93.224$ kg.`,
        r`$L(6)\approx7.318$ and $U(6)=7$. Increasing, because $L(6)>U(6)$.`,
        r`$25+${I(0, 10, r`\big(L(t)-U(t)\big)`, "t")}\approx53.224$ kg.`,
        r`$L(t)=U(t)$ at $t\approx6.201$. Amounts: 25 at $t=0$, about 63.244 at $t\approx6.201$, and 53.224 at $t=10$. The most is about 63.244 kg.`,
      ],
      fr: [
        r`$${I(0, 8, "F(t)", "t")}\approx77.229$ litres.`,
        r`$F(5)-D(5)\approx2.894$ litres per minute.`,
        r`$F(t)=D(t)$ only at $t\approx5.587$. Amounts: 30 at $t=0$, $30+${I(0, 5.587, r`\big(F(t)-D(t)\big)`, "t")}\approx72.777$ at $t\approx5.587$, and about 56.029 at $t=8$. The greatest amount is about 72.777 litres.`,
      ],
    },
  },

  // ───────────── 8.4 ─────────────
  {
    code: "8.4", title: "Area Between Curves, Slicing Vertically", unit: UNIT,
    ideas: [
      r`The area between two graphs for $a\le x\le b$ is $${I("a", "b", r`\big(\text{top}-\text{bottom}\big)`)}$.`,
      r`The limits are usually the $x$-coordinates of the points of intersection: set the two formulas equal.`,
      r`Top minus bottom is never negative, so an area found this way is positive even when the region lies below the $x$-axis.`,
      r`Sketch first. A test value between the intersections shows which graph is on top.`,
    ],
    examples: [
      { t: "A line and a parabola", q: r`Find the area enclosed by $y=x^2-4x$ and $y=2x-5$.`, s: r`$x^2-6x+5=0$ gives $x=1,5$. The line is on top: $${I(1, 5, "(-x^2+6x-5)")}$.`, r: r`$\dfrac{32}{3}$.` },
      { t: "Given limits", q: r`Find the area between $y=e^{x}$ and $y=x$ for $0\le x\le2$.`, s: r`$${I(0, 2, "(e^{x}-x)")}=\Big[e^{x}-\tfrac{x^2}{2}\Big]_0^2$.`, r: r`$e^2-3$.` },
      { t: "Finding the limits", q: r`Find the area enclosed by $y=3\sqrt{x}$ and $y=x$.`, s: r`They meet at $x=0$ and $x=9$: $${I(0, 9, r`\left(3\sqrt x-x\right)`)}=54-\dfrac{81}{2}$.`, r: r`$\dfrac{27}{2}$.` },
    ],
    core: [
      r`Write, but do not evaluate, an integral for the area enclosed by $y=x+2$ and $y=x^2$.`,
      r`Evaluate the integral in Question 1.`,
      r`Find the area enclosed by $y=x^2$ and $y=4$.`,
      r`Find the area between $y=x$ and $y=x^3$ for $0\le x\le1$.`,
    ],
    exam: [
      r`Find the area enclosed by $y=x^2$ and $y=8-x^2$.`,
      r`Find the area between $y=\cos x$ and $y=\sin x$ for $0\le x\le\dfrac\pi4$.`,
      r`Find the area between $y=e^{x}$ and $y=e^{-x}$ for $0\le x\le1$.`,
      r`\emph{Calculator.} Find the area of the region in the first quadrant enclosed by $y=3\sin x$ and $y=x$.`,
    ],
    fr: {
      intro: r`Let $f(x)=5x-x^2$ and $g(x)=x$. Let $R$ be the region enclosed by the graphs of $f$ and $g$.`,
      parts: [
        r`Find the $x$-coordinates of the points of intersection of the two graphs.`,
        r`Find the area of $R$.`,
        r`Find the value of $x$ at which the vertical distance between the two graphs within $R$ is greatest, and find that distance.`,
      ],
    },
    sol: {
      core: [
        r`$${I(-1, 2, "(x+2-x^2)")}$.`,
        r`$\dfrac92$.`,
        r`$${I(-2, 2, "(4-x^2)")}=\dfrac{32}{3}$.`,
        r`$\dfrac12-\dfrac14=\dfrac14$.`,
      ],
      exam: [
        r`They meet at $x=\pm2$: $${I(-2, 2, "(8-2x^2)")}=\dfrac{64}{3}$.`,
        r`$\Big[\sin x+\cos x\Big]_0^{\pi/4}=\sqrt2-1$.`,
        r`$\Big[e^{x}+e^{-x}\Big]_0^1=e+\dfrac1e-2$.`,
        r`They meet at $x=0$ and $x\approx2.279$: $${I(0, 2.279, r`(3\sin x-x)`)}\approx2.354$.`,
      ],
      fr: [
        r`$5x-x^2=x$ gives $x=0$ and $x=4$.`,
        r`$${I(0, 4, "(4x-x^2)")}=32-\dfrac{64}{3}=\dfrac{32}{3}$.`,
        r`The distance is $4x-x^2$, with derivative $4-2x$ changing from positive to negative at $x=2$. The greatest distance is $4$.`,
      ],
    },
  },

  // ───────────── 8.5 ─────────────
  {
    code: "8.5", title: "Area Between Curves, Slicing Horizontally", unit: UNIT,
    ideas: [
      r`When the boundaries are given as $x=\ldots$ in terms of $y$, slice horizontally: area $=${I("c", "d", r`\big(\text{right}-\text{left}\big)`, "y")}$.`,
      r`The limits are $y$-values.`,
      r`A curve $y=f(x)$ can be rewritten as $x=\ldots$ when that is easier.`,
      r`Choose the direction of slicing that needs only one integral.`,
    ],
    examples: [
      { t: "A parabola and a line", q: r`Find the area enclosed by $x=y^2$ and $x=2y+3$.`, s: r`$y^2-2y-3=0$ gives $y=-1,3$. The line is on the right: $${I(-1, 3, "(2y+3-y^2)", "y")}$.`, r: r`$\dfrac{32}{3}$.` },
      { t: "A curve and the $y$-axis", q: r`Find the area enclosed by $x=9-y^2$ and the $y$-axis.`, s: r`$${I(-3, 3, "(9-y^2)", "y")}=54-18$.`, r: r`$36$.` },
      { t: "Rewriting a curve", q: r`Find the area of the region bounded by $y=\ln x$, the $y$-axis, and the lines $y=0$ and $y=1$.`, s: r`$x=e^{y}$ is the right boundary: $${I(0, 1, "e^{y}", "y")}$.`, r: r`$e-1$.` },
    ],
    core: [
      r`Rewrite $y=x^3$ in the form $x=\ldots$`,
      r`Write, but do not evaluate, an integral in $y$ for the area enclosed by $x=y^2$ and $x=4$.`,
      r`Evaluate the integral in Question 2.`,
      r`Find the area enclosed by $x=y^2$ and $x=y$.`,
    ],
    exam: [
      r`Find the area enclosed by $x=y^2-5$ and $x=3-y^2$.`,
      r`Find the area of the region bounded by $y=\sqrt{x}$, the $y$-axis and the line $y=3$.`,
      r`Find the area of the region in the first quadrant enclosed by $x=y^3$ and $x=4y$.`,
      r`Find the area enclosed by $x=y^2-2y$ and the $y$-axis.`,
    ],
    fr: {
      intro: r`Let $R$ be the region enclosed by the parabola $x=y^2$ and the line $x=8-2y$.`,
      parts: [
        r`Find the coordinates of the two points of intersection.`,
        r`Find the area of $R$.`,
        r`Write, but do not evaluate, an expression involving integrals with respect to $x$ that gives the area of $R$.`,
      ],
    },
    sol: {
      core: [
        r`$x=\sqrt[3]{y}$.`,
        r`$${I(-2, 2, "(4-y^2)", "y")}$.`,
        r`$\dfrac{32}{3}$.`,
        r`$${I(0, 1, "(y-y^2)", "y")}=\dfrac16$.`,
      ],
      exam: [
        r`They meet at $y=\pm2$: $${I(-2, 2, "(8-2y^2)", "y")}=\dfrac{64}{3}$.`,
        r`$x=y^2$: $${I(0, 3, "y^2", "y")}=9$.`,
        r`They meet at $y=0$ and $y=2$: $${I(0, 2, "(4y-y^3)", "y")}=4$.`,
        r`The curve lies to the left of the axis for $0<y<2$: $${I(0, 2, "(2y-y^2)", "y")}=\dfrac43$.`,
      ],
      fr: [
        r`$y^2+2y-8=0$ gives $y=-4$ and $y=2$: the points $(16,-4)$ and $(4,2)$.`,
        r`$${I(-4, 2, "(8-2y-y^2)", "y")}=36$.`,
        r`$${I(0, 4, r`2\sqrt x`)}+${I(4, 16, r`\left(\dfrac{8-x}{2}+\sqrt x\right)`)}$.`,
      ],
    },
  },

  // ───────────── 8.6 ─────────────
  {
    code: "8.6", title: "Regions with More Than One Piece", unit: UNIT,
    ideas: [
      r`If the graphs cross inside the interval, the top graph changes. Split the integral at each crossing.`,
      r`In one formula: area $=${I("a", "b", r`|f(x)-g(x)|`)}$. On a calculator, enter the absolute value directly.`,
      r`$${I("a", "b", r`\big(f(x)-g(x)\big)`)}$ without the absolute value gives a \textbf{net} amount, in which pieces cancel.`,
      r`A region with a corner in its boundary also needs two integrals, one for each boundary curve.`,
    ],
    examples: [
      { t: "A cubic and a line", q: r`Find the total area enclosed by $y=x^3$ and $y=4x$.`, s: r`They meet at $x=-2,0,2$. By symmetry, $2${I(0, 2, "(4x-x^3)")}$.`, r: r`$2(8-4)=8$.` },
      { t: "Net against total", q: r`Compare $${I(0, r`\pi`, r`\cos x`)}$ with the area between $y=\cos x$ and the $x$-axis for $0\le x\le\pi$.`, s: r`The integral is 0. The area is $${I(0, r`\pi/2`, r`\cos x`).replace("\\displaystyle", "")}+\left|${I(r`\pi/2`, r`\pi`, r`\cos x`).replace("\\displaystyle", "")}\right|$.`, r: r`The integral is 0; the area is 2.` },
      { t: "Splitting at a zero", q: r`Find the area between $y=x^2-4$ and the $x$-axis for $0\le x\le3$.`, s: r`$${I(0, 2, "(4-x^2)")}=\dfrac{16}{3}$ and $${I(2, 3, "(x^2-4)")}=\dfrac73$.`, r: r`$\dfrac{23}{3}$.` },
    ],
    core: [
      r`Find the area between $y=x-1$ and the $x$-axis for $0\le x\le4$.`,
      r`At what value of $x$ in $(0,3)$ do the graphs of $y=x^2$ and $y=2x$ cross?`,
      r`Find the area between $y=x^2$ and $y=2x$ for $0\le x\le3$.`,
      r`Evaluate $${I(0, 3, "(x^2-2x)")}$, and explain the result using Question 3.`,
    ],
    exam: [
      r`Find the total area between $y=x^3-x$ and the $x$-axis for $-1\le x\le1$.`,
      r`Find the area between $y=\sin x$ and $y=\dfrac12$ for $0\le x\le\dfrac\pi2$.`,
      r`Find the area of the region in the first quadrant bounded by $y=x^2$, $y=2-x$ and the $x$-axis.`,
      r`\emph{Calculator.} Find the area between $y=\cos x$ and $y=\dfrac x2$ for $0\le x\le3$.`,
    ],
    fr: {
      intro: r`Let $f(x)=x^3-5x^2+4x$.`,
      parts: [
        r`Evaluate $${I(0, 4, "f(x)")}$.`,
        r`Find the total area between the graph of $f$ and the $x$-axis for $0\le x\le4$.`,
        r`Explain why the answers to parts (a) and (b) differ, and write a single integral that gives the area in part (b).`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac12+\dfrac92=5$.`,
        r`$x=2$.`,
        r`$${I(0, 2, "(2x-x^2)")}+${I(2, 3, "(x^2-2x)")}=\dfrac43+\dfrac43=\dfrac83$.`,
        r`$0$: the two pieces have equal area, and they cancel.`,
      ],
      exam: [
        r`$2\left(\dfrac14\right)=\dfrac12$.`,
        r`They cross at $x=\dfrac\pi6$: $\left(\dfrac{\pi}{12}-1+\dfrac{\sqrt3}{2}\right)+\left(\dfrac{\sqrt3}{2}-\dfrac\pi6\right)=\sqrt3-1-\dfrac{\pi}{12}$.`,
        r`The curves meet at $x=1$: $${I(0, 1, "x^2")}+${I(1, 2, "(2-x)")}=\dfrac13+\dfrac12=\dfrac56$.`,
        r`$${I(0, 3, r`\left|\cos x-\tfrac x2\right|`)}\approx3.293$ (the graphs cross at $x\approx1.030$).`,
      ],
      fr: [
        r`$\Big[\tfrac{x^4}{4}-\tfrac{5x^3}{3}+2x^2\Big]_0^4=-\dfrac{32}{3}$.`,
        r`$f(x)=x(x-1)(x-4)$: $${I(0, 1, "f(x)")}=\dfrac{7}{12}$ and $${I(1, 4, "f(x)")}=-\dfrac{45}{4}$. Area $=\dfrac{7}{12}+\dfrac{45}{4}=\dfrac{71}{6}$.`,
        r`Part (a) counts the piece below the axis as negative, so the pieces partly cancel. Area $=${I(0, 4, r`|f(x)|`)}$.`,
      ],
    },
  },

  // ───────────── 8.7 ─────────────
  {
    code: "8.7", title: "Volumes from Known Cross-Sections", unit: UNIT,
    ideas: [
      r`If the cross-section at $x$ has area $A(x)$, the volume is $${I("a", "b", "A(x)")}$.`,
      r`The side $s$ of each cross-section lies in the base: $s=\text{top}-\text{bottom}$.`,
      r`Square: $s^2$. \quad Semicircle of diameter $s$: $\dfrac{\pi}{8}s^2$. \quad Equilateral triangle: $\dfrac{\sqrt3}{4}s^2$.`,
      r`Isosceles right triangle with a leg in the base: $\dfrac12s^2$. \quad Rectangle of height $h$: $sh$.`,
    ],
    examples: [
      { t: "Squares", q: r`The base of a solid is bounded by $y=x+1$, the $x$-axis, $x=0$ and $x=3$. Cross-sections perpendicular to the $x$-axis are squares. Find the volume.`, s: r`$${I(0, 3, "(x+1)^2")}=\dfrac{64-1}{3}$.`, r: r`$21$.` },
      { t: "Semicircles", q: r`The base is bounded by $y=\sqrt{x}$, the $x$-axis and $x=9$. Cross-sections perpendicular to the $x$-axis are semicircles with diameter in the base. Find the volume.`, s: r`$\dfrac\pi8${I(0, 9, "x")}=\dfrac\pi8\cdot\dfrac{81}{2}$.`, r: r`$\dfrac{81\pi}{16}$.` },
      { t: "Perpendicular to the $y$-axis", q: r`The base lies in the first quadrant, bounded by $y=x^2$, the $y$-axis and $y=9$. Cross-sections perpendicular to the $y$-axis are squares. Find the volume.`, s: r`The side is $x=\sqrt y$: $${I(0, 9, "y", "y")}$.`, r: r`$\dfrac{81}{2}$.` },
    ],
    core: [
      r`Find the area of a semicircle with diameter 6.`,
      r`Find the area of an equilateral triangle with side 4.`,
      r`A solid has cross-sectional area $A(x)=3x^2$ for $0\le x\le2$. Find its volume.`,
      r`A solid has square cross-sections of side $2x$ for $0\le x\le3$. Find its volume.`,
    ],
    exam: [
      r`The base of a solid is the disc $x^2+y^2\le25$. Cross-sections perpendicular to the $x$-axis are semicircles with diameter in the base. Find the volume.`,
      r`The base is the region enclosed by $y=x$ and $y=x^2$. Cross-sections perpendicular to the $x$-axis are isosceles right triangles with a leg in the base. Find the volume.`,
      r`The base is bounded by $y=6-2x$ and the coordinate axes. Cross-sections perpendicular to the $x$-axis are equilateral triangles. Find the volume.`,
      r`\emph{Calculator.} The base is bounded by $y=\ln x$, the $x$-axis and $x=e$. Cross-sections perpendicular to the $x$-axis are squares. Find the volume to three decimal places.`,
    ],
    fr: {
      intro: r`Let $R$ be the region bounded by $y=6x-x^2$ and the $x$-axis. $R$ is the base of a solid.`,
      parts: [
        r`Find the area of $R$.`,
        r`Cross-sections of the solid perpendicular to the $x$-axis are squares. Find the volume.`,
        r`For a different solid with the same base, the cross-section at $x$ is a rectangle whose height is $x$. Find the volume.`,
      ],
    },
    sol: {
      core: [
        r`$\dfrac12\pi(3)^2=\dfrac{9\pi}{2}$.`,
        r`$\dfrac{\sqrt3}{4}(16)=4\sqrt3$.`,
        r`$\Big[x^3\Big]_0^2=8$.`,
        r`$${I(0, 3, "4x^2")}=36$.`,
      ],
      exam: [
        r`Diameter $2\sqrt{25-x^2}$: $\dfrac\pi8${I(-5, 5, "4(25-x^2)")}=\dfrac\pi2\cdot\dfrac{500}{3}=\dfrac{250\pi}{3}$ (half of a sphere of radius 5).`,
        r`$\dfrac12${I(0, 1, "(x-x^2)^2")}=\dfrac12\left(\dfrac13-\dfrac12+\dfrac15\right)=\dfrac{1}{60}$.`,
        r`$\dfrac{\sqrt3}{4}${I(0, 3, "(6-2x)^2")}=\dfrac{\sqrt3}{4}(36)=9\sqrt3$.`,
        r`$${I(1, "e", r`(\ln x)^2`)}\approx0.718$.`,
      ],
      fr: [
        r`$${I(0, 6, "(6x-x^2)")}=108-72=36$.`,
        r`$${I(0, 6, "(36x^2-12x^3+x^4)")}=2592-3888+\dfrac{7776}{5}=\dfrac{1296}{5}$.`,
        r`$${I(0, 6, "x(6x-x^2)")}=432-324=108$.`,
      ],
    },
  },

  // ───────────── 8.8 ─────────────
  {
    code: "8.8", title: "Solids of Revolution: Discs", unit: UNIT,
    ideas: [
      r`When a region that touches the axis is revolved, each slice is a disc: $V=\pi${I("a", "b", "R^2")}$.`,
      r`$R$ is the distance from the curve to the axis of revolution.`,
      r`About a horizontal line $y=k$: $R=|f(x)-k|$, and integrate in $x$.`,
      r`About the $y$-axis or a vertical line: write the curve as $x=\ldots$ and integrate in $y$.`,
    ],
    examples: [
      { t: "About the $x$-axis", q: r`The region under $y=\dfrac2x$ for $1\le x\le4$ is revolved about the $x$-axis. Find the volume.`, s: r`$\pi${I(1, 4, r`\dfrac{4}{x^2}`)}=4\pi\left(1-\dfrac14\right)$.`, r: r`$3\pi$.` },
      { t: "About the $y$-axis", q: r`The region in the first quadrant bounded by $y=x^4$, the $y$-axis and $y=1$ is revolved about the $y$-axis. Find the volume.`, s: r`$R=x=y^{1/4}$: $\pi${I(0, 1, "y^{1/2}", "y")}$.`, r: r`$\dfrac{2\pi}{3}$.` },
      { t: "About another line", q: r`The region enclosed by $y=x^2$ and $y=4$ is revolved about the line $y=4$. Find the volume.`, s: r`$R=4-x^2$: $\pi${I(-2, 2, "(4-x^2)^2")}$.`, r: r`$\dfrac{512\pi}{15}$.` },
    ],
    core: [
      r`The region under $y=3$ for $0\le x\le5$ is revolved about the $x$-axis. Find the volume.`,
      r`The region under $y=x$ for $0\le x\le3$ is revolved about the $x$-axis. Find the volume.`,
      r`The region under $y=\sqrt{x+1}$ for $0\le x\le3$ is revolved about the $x$-axis. Find the volume.`,
      r`Write, but do not evaluate, an integral for the volume when the region under $y=\cos x$ for $0\le x\le\dfrac\pi2$ is revolved about the $x$-axis.`,
    ],
    exam: [
      r`The region under $y=\sec x$ for $0\le x\le\dfrac\pi4$ is revolved about the $x$-axis. Find the volume.`,
      r`The region under $y=2\sqrt{\cos x}$ for $0\le x\le\dfrac\pi2$ is revolved about the $x$-axis. Find the volume.`,
      r`The region bounded by $y=\ln x$, the $y$-axis, $y=0$ and $y=2$ is revolved about the $y$-axis. Find the volume.`,
      r`The region bounded by $y=\sqrt{x}$, the $x$-axis and $x=4$ is revolved about the line $x=4$. Find the volume.`,
    ],
    fr: {
      intro: r`Let $R$ be the region in the first quadrant bounded by $y=\sqrt{9-x}$ and the coordinate axes.`,
      parts: [
        r`Find the area of $R$.`,
        r`Find the volume of the solid generated when $R$ is revolved about the $x$-axis.`,
        r`Find the volume of the solid generated when $R$ is revolved about the $y$-axis.`,
      ],
    },
    sol: {
      core: [
        r`A cylinder: $\pi(3)^2(5)=45\pi$.`,
        r`$\pi${I(0, 3, "x^2")}=9\pi$.`,
        r`$\pi${I(0, 3, "(x+1)")}=\dfrac{15\pi}{2}$.`,
        r`$\pi${I(0, r`\pi/2`, r`\cos^2x`)}$.`,
      ],
      exam: [
        r`$\pi\Big[\tan x\Big]_0^{\pi/4}=\pi$.`,
        r`$\pi${I(0, r`\pi/2`, r`4\cos x`)}=4\pi$.`,
        r`$x=e^{y}$: $\pi${I(0, 2, "e^{2y}", "y")}=\dfrac{\pi(e^4-1)}{2}$.`,
        r`$R=4-y^2$ for $0\le y\le2$: $\pi${I(0, 2, "(16-8y^2+y^4)", "y")}=\pi\left(32-\dfrac{64}{3}+\dfrac{32}{5}\right)=\dfrac{256\pi}{15}$.`,
      ],
      fr: [
        r`$${I(0, 9, r`\sqrt{9-x}`)}=\dfrac23(27)=18$.`,
        r`$\pi${I(0, 9, "(9-x)")}=\dfrac{81\pi}{2}$.`,
        r`$x=9-y^2$ for $0\le y\le3$: $\pi${I(0, 3, "(9-y^2)^2", "y")}=\pi\left(243-162+\dfrac{243}{5}\right)=\dfrac{648\pi}{5}$.`,
      ],
    },
  },

  // ───────────── 8.9 ─────────────
  {
    code: "8.9", title: "Solids of Revolution: Washers", unit: UNIT,
    ideas: [
      r`If the region does not touch the axis, each slice is a washer: $V=\pi${I("a", "b", r`\big(R^2-r^2\big)`)}$.`,
      r`$R$ is the distance from the axis to the \textbf{far} boundary; $r$ is the distance to the \textbf{near} boundary.`,
      r`Square each radius separately. $(R-r)^2$ is wrong.`,
      r`About $y=k$, both radii are distances from $k$: for a line below the region, $R=\text{top}-k$ and $r=\text{bottom}-k$.`,
    ],
    examples: [
      { t: "About the $x$-axis", q: r`The region enclosed by $y=2x$ and $y=x^2$ is revolved about the $x$-axis. Find the volume.`, s: r`They meet at $x=0,2$; $R=2x$, $r=x^2$: $\pi${I(0, 2, "(4x^2-x^4)")}$.`, r: r`$\dfrac{64\pi}{15}$.` },
      { t: "About the $y$-axis", q: r`The same region is revolved about the $y$-axis. Find the volume.`, s: r`$R=\sqrt y$, $r=\dfrac y2$, $0\le y\le4$: $\pi${I(0, 4, r`\left(y-\tfrac{y^2}{4}\right)`, "y")}$.`, r: r`$\dfrac{8\pi}{3}$.` },
      { t: "About a line below", q: r`The region bounded by $y=\sqrt{x}$, the $x$-axis and $x=4$ is revolved about the line $y=-1$. Find the volume.`, s: r`$R=\sqrt x+1$, $r=1$: $\pi${I(0, 4, r`(x+2\sqrt x)`)}$.`, r: r`$\dfrac{56\pi}{3}$.` },
    ],
    core: [
      r`Find the area of a washer with outer radius 5 and inner radius 3.`,
      r`The region between $y=3$ and $y=1$ for $0\le x\le2$ is revolved about the $x$-axis. Find the volume.`,
      r`Write, but do not evaluate, an integral for the volume when the region enclosed by $y=\sqrt{x}$ and $y=x$ is revolved about the $x$-axis.`,
      r`Evaluate the integral in Question 3.`,
    ],
    exam: [
      r`The region enclosed by $y=x^2$ and $y=4$ is revolved about the $x$-axis. Find the volume.`,
      r`The region in the first quadrant enclosed by $y=x^3$ and $y=x$ is revolved about the $x$-axis. Find the volume.`,
      r`The region enclosed by $y=x^2$ and $y=x$ is revolved about the line $y=3$. Find the volume.`,
      r`\emph{Calculator.} The region bounded by $y=e^{x}$, the $y$-axis and $y=3$ is revolved about the $x$-axis. Find the volume to three decimal places.`,
    ],
    fr: {
      intro: r`Let $R$ be the region enclosed by $y=x^2+1$ and $y=2x+1$.`,
      parts: [
        r`Find the area of $R$.`,
        r`Find the volume of the solid generated when $R$ is revolved about the $x$-axis.`,
        r`Write, but do not evaluate, an integral for the volume of the solid generated when $R$ is revolved about the line $y=-2$.`,
      ],
    },
    sol: {
      core: [
        r`$\pi(25-9)=16\pi$.`,
        r`$\pi(9-1)(2)=16\pi$.`,
        r`$\pi${I(0, 1, "(x-x^2)")}$.`,
        r`$\pi\left(\dfrac12-\dfrac13\right)=\dfrac\pi6$.`,
      ],
      exam: [
        r`$\pi${I(-2, 2, "(16-x^4)")}=2\pi\left(32-\dfrac{32}{5}\right)=\dfrac{256\pi}{5}$.`,
        r`$\pi${I(0, 1, "(x^2-x^6)")}=\pi\left(\dfrac13-\dfrac17\right)=\dfrac{4\pi}{21}$.`,
        r`$R=3-x^2$, $r=3-x$: $\pi${I(0, 1, "(x^4-7x^2+6x)")}=\pi\left(\dfrac15-\dfrac73+3\right)=\dfrac{13\pi}{15}$.`,
        r`$\pi${I(0, r`\ln3`, "(9-e^{2x})")}=\pi(9\ln3-4)\approx18.496$.`,
      ],
      fr: [
        r`The graphs meet at $x=0$ and $x=2$: $${I(0, 2, "(2x-x^2)")}=\dfrac43$.`,
        r`$\pi${I(0, 2, r`\big[(2x+1)^2-(x^2+1)^2\big]`)}=\pi${I(0, 2, "(-x^4+2x^2+4x)")}=\dfrac{104\pi}{15}$.`,
        r`$\pi${I(0, 2, r`\big[(2x+3)^2-(x^2+3)^2\big]`)}$.`,
      ],
    },
  },

  // ───────────── 8.10 ─────────────
  {
    code: "8.10", title: "Unit 8 Synthesis: The Area and Volume Free-Response Question", unit: UNIT,
    pre: CALC,
    ideas: [
      r`The usual parts: an area, a volume of revolution, and a volume with known cross-sections, all for one region.`,
      r`Find the points of intersection first, and store them in the calculator. Do not round until the final answer.`,
      r`Write every integral in full, with limits, before giving its value. The set-up earns most of the points.`,
      r`\textquotedblleft{}Write, but do not evaluate\textquotedblright{} means stop at the integral.`,
    ],
    examples: [
      { t: "The area", q: r`Let $R$ be the region enclosed by $y=\sqrt{x}$ and $y=\dfrac x3$. Find the area of $R$.`, s: r`They meet at $x=0$ and $x=9$: $${I(0, 9, r`\left(\sqrt x-\tfrac x3\right)`)}=18-\dfrac{27}{2}$.`, r: r`$\dfrac92$.` },
      { t: "A solid of revolution", q: r`Find the volume when $R$ is revolved about the $x$-axis.`, s: r`$\pi${I(0, 9, r`\left(x-\tfrac{x^2}{9}\right)`)}=\pi\left(\dfrac{81}{2}-27\right)$.`, r: r`$\dfrac{27\pi}{2}$.` },
      { t: "Known cross-sections", q: r`$R$ is the base of a solid whose cross-sections perpendicular to the $x$-axis are squares. Find the volume.`, s: r`$${I(0, 9, r`\left(\sqrt x-\tfrac x3\right)^2`)}=\dfrac{81}{2}-\dfrac{324}{5}+27$.`, r: r`$\dfrac{27}{10}$.` },
    ],
    core: [
      r`Let $S$ be the region enclosed by $y=x^2$ and $y=3x$. Find the area of $S$.`,
      r`Write, but do not evaluate, an integral for the volume when $S$ is revolved about the $x$-axis.`,
      r`Evaluate the integral in Question 2.`,
      r`$S$ is the base of a solid whose cross-sections perpendicular to the $x$-axis are squares. Write, but do not evaluate, an integral for the volume.`,
    ],
    exam: [
      r`Let $T$ be the region enclosed by $y=4-x^2$ and $y=e^{x}$. Find the $x$-coordinates of the two points of intersection.`,
      r`Find the area of $T$.`,
      r`Find the volume of the solid generated when $T$ is revolved about the $x$-axis.`,
      r`$T$ is the base of a solid whose cross-sections perpendicular to the $x$-axis are semicircles with diameter in the base. Find the volume.`,
    ],
    fr: {
      intro: r`Let $R$ be the region enclosed by $y=2\sqrt{x}$ and $y=x$.`,
      parts: [
        r`Find the area of $R$.`,
        r`Find the volume of the solid generated when $R$ is revolved about the $x$-axis.`,
        r`$R$ is the base of a solid whose cross-sections perpendicular to the $y$-axis are semicircles with diameter in the base. Find the volume.`,
      ],
    },
    sol: {
      core: [
        r`$${I(0, 3, "(3x-x^2)")}=\dfrac92$.`,
        r`$\pi${I(0, 3, "(9x^2-x^4)")}$.`,
        r`$\pi\left(81-\dfrac{243}{5}\right)=\dfrac{162\pi}{5}$.`,
        r`$${I(0, 3, "(3x-x^2)^2")}$.`,
      ],
      exam: [
        r`$x\approx-1.965$ and $x\approx1.058$.`,
        r`$${I(-1.965, 1.058, r`\big(4-x^2-e^{x}\big)`)}\approx6.428$.`,
        r`$\pi${I(-1.965, 1.058, r`\big[(4-x^2)^2-e^{2x}\big]`)}\approx84.705$.`,
        r`$\dfrac\pi8${I(-1.965, 1.058, r`\big(4-x^2-e^{x}\big)^2`)}\approx6.422$.`,
      ],
      fr: [
        r`They meet at $x=0$ and $x=4$: $${I(0, 4, r`(2\sqrt x-x)`)}=\dfrac{32}{3}-8=\dfrac83$.`,
        r`$\pi${I(0, 4, "(4x-x^2)")}=\pi\left(32-\dfrac{64}{3}\right)=\dfrac{32\pi}{3}$.`,
        r`At height $y$ the region runs from $x=\dfrac{y^2}{4}$ to $x=y$: $\dfrac\pi8${I(0, 4, r`\left(y-\tfrac{y^2}{4}\right)^2`, "y")}=\dfrac\pi8\cdot\dfrac{32}{15}=\dfrac{4\pi}{15}$.`,
      ],
    },
  },
];

export default sheets;
