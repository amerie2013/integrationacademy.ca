// MHF4U Worksheet 4.1 — Radian Measure (teacher edition)
import { F, gridT } from "./figT.mjs";
import { UC, SECTOR } from "../trigfig.mjs";
const S = String.raw;

const EXAMPLES = [
  { title: "Degrees to radians", q: S`Convert $210^\circ$ to radians, exactly and to 2 decimals.`, fig: F(UC(210, "7π/6")),
    steps: [S`$210\times\frac{\pi}{180}=\frac{210\pi}{180}$.`, S`Divide by 30: $\frac{7\pi}6\approx3.67$.`], ans: S`$\frac{7\pi}6\approx3.67$` },
  { title: "Radians to degrees", q: S`Convert $\dfrac{11\pi}6$ to degrees.`, fig: F(UC(330, "11π/6")),
    steps: [S`$\frac{11\pi}6\times\frac{180}{\pi}$: the $\pi$ cancels.`, S`$\frac{11\times180}6=330$.`], ans: S`$330^\circ$` },
  { title: "No π in the angle", q: S`Convert $1.8$ radians to degrees, to 1 decimal.`, fig: F(UC((1.8 * 180) / Math.PI, "1.8 rad")),
    steps: [S`$1.8\times\frac{180}{\pi}=\frac{324}{\pi}$.`, S`$\approx103.1$.`], ans: S`$103.1^\circ$` },
  { title: "Arc length", q: S`Find the arc length on a circle of radius 9 cm for $\theta=\dfrac{2\pi}3$.`, fig: F(SECTOR(9, (2 * Math.PI) / 3)),
    steps: [S`$s=r\theta=9\times\frac{2\pi}3$.`, S`$=6\pi\approx18.85$ cm.`], ans: S`$6\pi\approx18.85$ cm` },
  { title: "Finding the angle", q: S`An arc of 22 cm lies on a circle of radius 8 cm. Find the angle in radians and in degrees.`, fig: F(SECTOR(8, 2.75)),
    steps: [S`$\theta=\frac{22}8=2.75$ rad.`, S`$2.75\times\frac{180}{\pi}\approx157.6^\circ$.`], ans: S`$2.75$ rad $\approx157.6^\circ$` },
  { title: "Sector area", q: S`Find the area of a sector with radius 6 m and angle $\dfrac{5\pi}6$.`, fig: F(SECTOR(6, (5 * Math.PI) / 6)),
    steps: [S`$A=\frac12r^2\theta=\frac12(36)\frac{5\pi}6$.`, S`$=15\pi\approx47.12$ m$^2$.`], ans: S`$15\pi\approx47.12$ m$^2$` },
  { title: "Angular speed", q: S`A fan turns at 1200 revolutions per minute. Find the angular speed in rad/s.`,
    steps: [S`$1200\times2\pi=2400\pi$ rad/min.`, S`$\frac{2400\pi}{60}=40\pi$ rad/s.`], ans: S`$40\pi\approx125.7$ rad/s` },
  { title: "Linear speed", q: S`A point is 0.3 m from the centre of a disc turning at $10$ rad/s. Find the speed of the point.`, fig: F(SECTOR(3, 1, "s = rθ")),
    steps: [S`In one second the angle is 10 rad.`, S`$s=r\theta=0.3\times10=3$ m.`], ans: S`3 m/s` },
  { title: "Clock hands", q: S`Find the angle in radians through which the hour hand of a clock moves in 40 minutes.`,
    steps: [S`The hour hand makes one full turn in 12 h, or 720 min.`, S`$\frac{40}{720}\times2\pi=\frac\pi9$.`], ans: S`$\frac\pi9\approx0.35$` },
];

const PROBLEMS = [
  { level: 1, q: S`Convert $300^\circ$ to radians, exactly.`, ans: S`$\frac{5\pi}3$` },
  { level: 1, q: S`Convert $\dfrac{3\pi}5$ to degrees.`, ans: S`$108^\circ$` },
  { level: 1, q: S`Find the arc length for $r=5$ and $\theta=1.4$.`, ans: S`$7$` },
  { level: 2, q: S`Convert $3.2$ rad to degrees, to 1 decimal.`, ans: S`$183.3^\circ$` },
  { level: 2, q: S`An arc of 14 m lies on a circle of radius 4 m. Find the angle in radians.`, ans: S`$3.5$` },
  { level: 2, q: S`Find the area of a sector with radius 10 cm and angle $\dfrac{3\pi}5$.`, fig: gridT({ xmin: -11, xmax: 11, ymin: -11, ymax: 11 }, { x: 2, y: 2 }), ans: S`$30\pi\approx94.25$ cm$^2$` },
  { level: 2, q: S`A wheel turns at 90 revolutions per minute. Find its angular speed in rad/s.`, ans: S`$3\pi\approx9.42$` },
  { level: 2, q: S`A pendulum 50 cm long swings through $\frac\pi6$. How far does the bob travel on one swing?`, ans: S`$\frac{25\pi}3\approx26.18$ cm` },
  { level: 3, space: 5, q: S`The minute hand of a clock is 15 cm long. How far does its tip travel in 35 minutes? Give exact and decimal values.`, ans: S`$\frac{35\pi}2\approx54.98$ cm` },
  { level: 3, space: 5, q: S`A belt joins pulleys of radii 8 cm and 20 cm. The large pulley turns through 3 rad. Find the angle through which the small one turns, and the length of belt that passes.`, ans: S`$7.5$ rad; 60 cm` },
  { level: 3, space: 5, q: S`A sector has perimeter 30 cm and radius 10 cm. Find the angle and the area.`, fig: gridT({ xmin: -11, xmax: 11, ymin: -11, ymax: 11 }, { x: 2, y: 2 }), ans: S`$\theta=1$; $50$ cm$^2$` },
  { level: 3, space: 5, q: S`A satellite moves in a circular orbit of radius 7000 km and completes one orbit in 100 min. Find its speed in km/min.`, ans: S`$140\pi\approx439.8$ km/min` },
  { level: 3, space: 5, q: S`Explain why $s=r\theta$ needs radians, starting from the fraction of the circumference that the arc represents. Then find the corresponding formula if $\theta$ is in degrees.`, ans: S`$s=\frac{\theta}{2\pi}\cdot2\pi r=r\theta$; in degrees $s=\frac{\pi r\theta}{180}$` },
];

export const WS = {
  code: "4.1",
  title: "Radian Measure",
  bigideas: S`A radian measures an angle by arc length: $\theta=\frac sr$. One radian cuts off an arc equal to the radius. A full circle has circumference $2\pi r$, so a full turn is $2\pi$ radians, and $\pi$ rad $=180^\circ$. With radians, arc length and sector area have simple formulas: $s=r\theta$ and $A=\frac12r^2\theta$.`,
  goals: ["Define a radian using arc length.", "Convert between degrees and radians.", "Use $s=r\\theta$ and $A=\\frac12r^2\\theta$.", "Solve problems with angular speed."],
  curriculum: "B1.1, B1.2",
  vocab: [["Radian", "the angle whose arc equals the radius"], ["Arc length", "the distance along the circle, $s=r\\theta$"], ["Sector", "the region between two radii and an arc"], ["Angular speed", "the angle turned per unit of time"]],
  hook: S`Wrap a piece of string as long as a circle's radius around its edge. Join the ends to the centre. How many of those string lengths fit around the whole circle? Why is the answer not a whole number?`,
  concepts: [
    ["1. What a radian is", S`For an arc of length $s$ on a circle of radius $r$, the angle in radians is $\theta=\frac sr$. A radian is a ratio of two lengths, so it has no unit.
${F(SECTOR(4, 1, "s = r"), 6.5, "One radian: the arc equals the radius.")}`],
    ["2. Converting", S`Since $\pi$ rad $=180^\circ$: degrees to radians, multiply by $\frac{\pi}{180}$; radians to degrees, multiply by $\frac{180}{\pi}$. One radian is about $57.3^\circ$.
\begin{center}\begin{tabular}{@{}lccccccc@{}}\textbf{Degrees} & $0^\circ$ & $30^\circ$ & $45^\circ$ & $60^\circ$ & $90^\circ$ & $180^\circ$ & $360^\circ$\\ \textbf{Radians} & $0$ & $\frac\pi6$ & $\frac\pi4$ & $\frac\pi3$ & $\frac\pi2$ & $\pi$ & $2\pi$\end{tabular}\end{center}`],
    ["3. Arc length and sector area", S`The arc is the fraction $\frac{\theta}{2\pi}$ of the circle. So $s=\frac{\theta}{2\pi}(2\pi r)=r\theta$ and $A=\frac{\theta}{2\pi}(\pi r^2)=\frac12r^2\theta$. Both need $\theta$ in radians.`],
    ["4. Angular speed", S`Angular speed $\omega$ is the angle turned per unit of time. One revolution is $2\pi$ rad. A point at distance $r$ from the centre moves at speed $v=r\omega$.`],
  ],
  tips: ["Check the calculator mode: with no degree symbol, the angle is in radians.", "Convert to radians before using $s=r\\theta$.", "Leave answers in terms of $\\pi$ unless a decimal is asked for.", "Convert revolutions per minute with $2\\pi$ and 60.", "$\\pi$ does not mean $180$: $\\pi$ is a number, about 3.14; $\\pi$ radians is $180^\\circ$."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
