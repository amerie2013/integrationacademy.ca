// MCV4U Worksheet 2.3 — Velocity, Acceleration, and Second Derivatives (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Velocity and acceleration", q: S`An object moves with $s(t)=t^3-12t+4$ m. Find $v(1)$, $a(1)$, and when it is at rest.`,
    steps: [S`$v=3t^2-12$, $a=6t$.`, S`$v(1)=-9$ m/s, $a(1)=6$ m/s².`, S`$v=0\Rightarrow t=2$ s ($t\ge0$).`], ans: "−9 m/s; 6 m/s²; at rest at t = 2 s" },
  { title: "Direction of motion", q: S`For $s(t)=t^2-8t+3$, $t\ge0$, when does the object move in the negative direction?`,
    steps: [S`$v=2t-8\lt0$ for $t\lt4$.`], ans: S`for $0\le t\lt4$; positive direction after $t=4$` },
  { title: "Speeding up or slowing down", q: S`For $s(t)=t^3-9t^2+15t$, find when the object is speeding up.`,
    fig: F({ view: { xmin: 0, xmax: 6.5, ymin: -30, ymax: 25 }, curves: [{ f: (t) => t ** 3 - 9 * t * t + 15 * t, a: 0, b: 6.5 }, { f: (t) => 3 * t * t - 18 * t + 15, color: "blue", a: 0, b: 6.5 }], points: [pt(1, 7), pt(5, -25)], step: { x: 1, y: 5 } }),
    steps: [S`$v=3(t-1)(t-5)$, $a=6t-18$.`, S`Same signs: $1\lt t\lt3$ (both negative) and $t\gt5$ (both positive).`], ans: S`speeding up on $(1,3)$ and $t\gt5$; slowing down on $(0,1)$ and $(3,5)$` },
  { title: "A second derivative", q: S`Find $f''(1)$ for $f(x)=3x^5-x^3+2x$.`,
    steps: [S`$f'=15x^4-3x^2+2$, $f''=60x^3-6x$.`], ans: "54" },
  { title: "Second derivative of a reciprocal", q: S`Find $y''$ for $y=\frac1x$ and evaluate it at $x=2$.`,
    steps: [S`$y=x^{-1}$, $y'=-x^{-2}$, $y''=2x^{-3}$.`], ans: S`$y''=\frac2{x^3}$; $\frac14$` },
  { title: "A projectile", q: S`A ball's height is $h(t)=-5t^2+40t+1.5$ m. Find its maximum height and its velocity on hitting the ground.`,
    fig: F({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 90 }, curves: [{ f: (t) => -5 * t * t + 40 * t + 1.5, a: 0, b: 8.04 }], points: [pt(4, 81.5)], step: { x: 1, y: 10 } }),
    steps: [S`$v=-10t+40=0\Rightarrow t=4$; $h(4)=81.5$ m.`, S`$h=0$: $t=\frac{40+\sqrt{1630}}{10}\approx8.04$ s; $v\approx-40.4$ m/s.`], ans: "81.5 m; about −40.4 m/s" },
  { title: "Displacement and distance", q: S`For $s(t)=t^3-3t$ m on $0\le t\le2$, find the displacement and the total distance.`,
    steps: [S`$v=3t^2-3=0$ at $t=1$: it turns there.`, S`$s(0)=0$, $s(1)=-2$, $s(2)=2$.`, S`Displacement $2-0=2$; distance $2+4=6$.`], ans: "displacement 2 m; distance 6 m" },
  { title: "Reading a velocity graph", q: S`The velocity of a cart is $v(t)=t^2-4t+3$ m/s. When is it at rest, when does it move backward, and what is its acceleration at $t=1$?`,
    fig: F({ view: { xmin: 0, xmax: 4.5, ymin: -2, ymax: 4 }, curves: [{ f: (t) => t * t - 4 * t + 3, a: 0, b: 4.5, color: "blue" }], points: [pt(1, 0), pt(3, 0)], step: { x: 1, y: 1 } }),
    steps: [S`$v=(t-1)(t-3)=0$ at $t=1,3$.`, S`$v\lt0$ on $(1,3)$: backward.`, S`$a=2t-4\Rightarrow a(1)=-2$.`], ans: "rest at 1 s and 3 s; backward on (1, 3); a(1) = −2 m/s²" },
  { title: "When acceleration is zero", q: S`For $s(t)=t^4-4t^3$, find the velocity at the moment the acceleration is zero ($t\gt0$).`,
    steps: [S`$v=4t^3-12t^2$, $a=12t^2-24t=12t(t-2)$.`, S`$a=0$ at $t=2$: $v(2)=32-48$.`], ans: "−16 m/s" },
];

const PROBLEMS = [
  { level: 1, q: S`For $s(t)=5t^2+2t$ m, find $v(3)$.`, recap: "v = s′.", ans: "32 m/s" },
  { level: 1, q: S`For $s(t)=t^3+t$, find $a(2)$.`, recap: "a is the second derivative of s.", ans: "12" },
  { level: 1, q: S`Find $f''(x)$ for $f(x)=x^6$.`, recap: "Differentiate twice.", ans: S`$30x^4$` },
  { level: 2, q: S`When is an object with $s(t)=t^2-10t+7$ at rest?`, recap: "v = 0.", ans: "t = 5" },
  { level: 2, q: S`For $s(t)=2t^3-5t^2$, find $a(2)$.`, recap: "a = 12t − 10.", ans: "14" },
  { level: 2, q: S`For $y=\sqrt x$, find $y''(4)$.`, recap: S`Powers: $x^{1/2}\to x^{-3/2}$.`, ans: S`$-\frac1{32}$` },
  { level: 2, q: S`A ball is thrown from the ground with $h(t)=-4.9t^2+14.7t$ m. Find its maximum height.`, recap: "v = 0 at the top.", ans: "11.025 m at t = 1.5 s" },
  { level: 2, q: S`For $s(t)=4t-t^2$, $t\ge0$, when does the object move in the positive direction? Sketch $s$.`, recap: "v > 0.", ans: S`$0\le t\lt2$`, fig: gridT({ xmin: 0, xmax: 5, ymin: -6, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`For $s(t)=t^3-12t^2+36t$ m, $0\le t\le8$, find the total distance travelled.`, recap: "Find the turning times first.", ans: S`turns at $t=2,6$; $s=0,32,0,32$; distance 96 m` },
  { level: 3, space: 5, q: S`For $s(t)=t^3-6t^2$, $t\gt0$, find when the object is speeding up and when it is slowing down.`, recap: "Compare the signs of v and a.", ans: S`speeding up on $(0,2)$ and $t\gt4$; slowing down on $(2,4)$` },
  { level: 3, space: 5, q: S`Find $a$ and $b$ so that $s(t)=at^3+bt^2$ has $v(1)=0$ and $a(1)=6$.`, recap: "Two equations.", ans: S`$3a+2b=0$, $6a+2b=6$: $a=2$, $b=-3$` },
  { level: 3, space: 5, q: S`On the Moon a ball thrown upward at 16 m/s has $h(t)=-0.8t^2+16t$; on Earth, $h(t)=-4.9t^2+16t$. Compare the maximum heights and the times to reach them. Sketch both.`, recap: "v = 0 on each.", ans: S`Moon: 80 m at 10 s; Earth: about 13.06 m at 1.63 s`, fig: gridT({ xmin: 0, xmax: 20, ymin: 0, ymax: 90 }, { x: 2, y: 10 }) },
  { level: 3, space: 5, q: S`Find $f'$, $f''$, $f'''$ and $f^{(4)}$ for $f(x)=\frac1x$, and write a formula for $f^{(n)}(x)$.`, recap: "Track the sign and the growing coefficient.", ans: S`$-x^{-2}$, $2x^{-3}$, $-6x^{-4}$, $24x^{-5}$; $f^{(n)}=(-1)^n\,n!\,x^{-(n+1)}$` },
];

export const WS = {
  code: "2.3",
  title: "Velocity, Acceleration, and Second Derivatives",
  bigideas: S`For position $s(t)$, velocity is $v=s'(t)$ and acceleration is $a=v'(t)=s''(t)$. The sign of $v$ gives the direction; $v=0$ with a sign change means the object turns around. An object speeds up when $v$ and $a$ have the same sign and slows down when they have opposite signs. Total distance needs the turning points: add the lengths of each piece. The second derivative $f''$ is the derivative of $f'$, and higher derivatives follow the same way.`,
  goals: ["Find velocity and acceleration from position.", "Decide direction, rest and turning points.", "Decide when an object speeds up or slows down.", "Find second and higher derivatives."],
  curriculum: "A2.4, A3.1, A3.2",
  vocab: [["Velocity", "$v=s'(t)$"], ["Acceleration", "$a=s''(t)$"], ["Speed", "$|v|$"]],
  hook: S`A car's odometer reads $s(t)$. What does the speedometer show, and what does pressing the brake change?`,
  concepts: [
    ["1. Position, velocity, acceleration", S`Each is the derivative of the one before. Here $s=t^3-6t^2+8t$ (violet) and $v=3t^2-12t+8$ (blue):
${F({ view: { xmin: 0, xmax: 4.5, ymin: -4, ymax: 10 }, curves: [{ f: (t) => t ** 3 - 6 * t * t + 8 * t, a: 0, b: 4.5 }, { f: (t) => 3 * t * t - 12 * t + 8, a: 0, b: 4.5, color: "blue" }], step: { x: 1, y: 2 } })}`],
    ["2. Speeding up", S`$v$ and $a$ same sign: speeding up. Opposite signs: slowing down.`],
    ["3. Distance", S`Split the interval at the turning times and add $|\Delta s|$ for each piece.`],
  ],
  tips: ["Velocity can be negative; speed cannot.", "At rest means v = 0, not a = 0.", "Distance ≠ displacement when the object turns.", "Check that times are in the domain (t ≥ 0).", "Units: m/s for v, m/s² for a."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
