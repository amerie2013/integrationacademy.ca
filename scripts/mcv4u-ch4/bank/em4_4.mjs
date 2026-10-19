// 4.4 Applications of Sinusoidal Functions and Their Derivatives — 20 easy + 20 medium questions
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;
export const E = [
  num(S`A particle has $s(t)=4\sin(3t)$. Find $v(0)$.`, 12, "v = 12 cos(3t)."),
  num(S`For $s(t)=10\cos t$, what is the maximum speed?`, 10, "|Aω| = 10 · 1."),
  mc("In simple harmonic motion, the speed is greatest:", "at the equilibrium (centre) position", ["at the turning points", "at the highest point only", "when the acceleration is largest"], "v is largest where s = 0."),
  num(S`What is the period of $h(t)=5+3\sin\left(\frac{\pi}{10}t\right)$?`, 20, "2π ÷ (π/10)."),
  tf("In simple harmonic motion, the acceleration is zero at the equilibrium position.", true, "a = −ω² s = 0 when s = 0."),
  num(S`What is $\omega$ for motion with period 2 s (4 decimals)?`, 3.1416, "2π/2.", null, 0.0005),
  num(S`For $s(t)=6\cos(5t)$, find $a(0)$.`, -150, "a = −150 cos(5t)."),
  num(S`What is the greatest rate of change of $y=7\sin\left(\frac t2\right)$?`, 3.5, "7 · ½.", null, 0.0001),
  fill(S`Motion with $a=-\omega^2s$ is called simple ___ motion.`, ["harmonic"], "Springs and pendulums."),
  num(S`For $s(t)=2\sin(5t)$, what is the greatest acceleration?`, 50, "Aω² = 2 · 25."),
  num("A rider's height is h(t) = 14 − 12 cos(πt/25) m (graph shown). What is the fastest rate of climb (m/s, 3 decimals)?", 1.508, "12 · π/25.", graph((t) => 14 - 12 * Math.cos((PI / 25) * t), { xmin: 0, xmax: 105, ymin: 0, ymax: 28 }, [P(12.5, 14)], { a: 0, b: 100, step: { x: 10, y: 4 } }), 0.002),
  mc("If h is in metres and t in seconds, dh/dt is measured in:", "m/s", ["m", "s/m", "m²"], "Output per input."),
  num(S`For $s(t)=3\cos(4t)$, find $v\left(\frac\pi8\right)$.`, -12, "−12 sin(π/2)."),
  tf("In simple harmonic motion, the velocity is zero at the turning points.", true, "The mass stops before reversing."),
  num("A triangle has sides 5 and 8 with angle θ between them. What is its largest area?", 20, "A = 20 sin θ."),
  num(S`For $s(t)=8\sin(\pi t)$, find $v(1)$ (3 decimals).`, -25.133, "8π cos π.", null, 0.002),
  mc("In simple harmonic motion, the acceleration and the displacement always have:", "opposite signs", ["the same sign", "equal size", "no relationship"], "a = −ω² s."),
  num("The graph of s(t) = 5 cos(2t) is shown. At what first t > 0 is the velocity 0? (4 decimals)", 1.5708, "v = −10 sin(2t) = 0 at t = π/2.", graph((t) => 5 * Math.cos(2 * t), { xmin: 0, xmax: 6.5, ymin: -6, ymax: 6 }, [P(PI / 2, -5)], { a: 0, b: 6.5, step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`What is the largest velocity for $s(t)=3\sin(4t)$?`, 12, "3 · 4."),
  num(S`A monthly temperature is $T(t)=20+5\sin\left(\frac{2\pi}{12}t\right)$ °C. What is its fastest rate of change (°C per month, 3 decimals)?`, 2.618, "5 · 2π/12.", null, 0.002),
];

export const M = [
  num("A Ferris wheel of radius 15 m turns once every 60 s. What is a rider's greatest vertical speed (m/s, 4 decimals)?", 1.5708, "15 · 2π/60.", null, 0.0005),
  num(S`For $s(t)=6\sin\left(\frac\pi2t\right)$, find $a(1)$ (3 decimals).`, -14.804, "a = −6(π/2)² sin(πt/2).", null, 0.002),
  num(S`Water depth is $d(t)=1.8\cos\left(\frac\pi6t\right)+5$ m. Find $d'(3)$ in m/h (4 decimals).`, -0.9425, "−1.8 · π/6 · sin(π/2).", null, 0.0005),
  num("A triangle has two sides of 12 cm with angle θ between them. What is its largest area (cm²)?", 72, "A = 72 sin θ."),
  num(S`A ball launched at 25 m/s has range $R(\theta)=\frac{625\sin2\theta}{9.8}$ m. What is the greatest range (2 decimals)?`, 63.78, "θ = π/4.", null, 0.01),
  mc("When is the number of daylight hours changing fastest?", "near the equinoxes (spring and fall)", ["near the solstices", "at the shortest day", "at the longest day"], "Midline of the sinusoid."),
  num(S`For $s(t)=4\cos(3t)+2$, what is the equilibrium (centre) position?`, 2, "The midline."),
  num(S`A pendulum swings with $\theta(t)=0.25\sin(2t)$ rad. What is its greatest angular speed?`, 0.5, "0.25 · 2.", null, 0.0001),
  num("The area of a triangle with two 6 cm sides is A(θ) = 18 sin θ (graph shown). What is the largest area?", 18, "At θ = π/2.", graph((t) => 18 * Math.sin(t), { xmin: 0, xmax: 3.3, ymin: 0, ymax: 20 }, [P(PI / 2, 18)], { a: 0, b: PI, step: { x: 0.5, y: 2 } })),
  tf("For a fixed amplitude, a larger ω gives a larger maximum speed.", true, "Maximum speed Aω."),
  num("A camera 40 m from a road follows a car moving at 15 m/s. How fast does it turn when the car is 40 m down the road (rad/s)?", 0.1875, "sec² θ dθ/dt = 15/40 with sec² θ = 2.", null, 0.0001),
  num("What is the largest area of a rectangle inscribed in a semicircle of radius 6?", 36, "A = 36 sin 2θ."),
  num(S`A voltage is $V(t)=120\sin(100\pi t)$. What is its greatest rate of change (V/s, nearest whole)?`, 37699, "120 · 100π.", null, 1),
  num(S`What is the greatest displacement of $s(t)=5\sin(2t)+5\cos(2t)$ (4 decimals)?`, 7.0711, "5√2.", null, 0.0005),
  mc(S`For $s=A\cos(\omega t)$, the greatest acceleration is:`, S`$A\omega^2$`, [S`$A\omega$`, S`$A$`, S`$\omega^2$`], "a = −Aω² cos(ωt)."),
  num(S`Blood pressure is $P(t)=90+15\sin(2\pi t)$ mmHg. What is its greatest rate of change (3 decimals)?`, 94.248, "15 · 2π.", null, 0.002),
  num("A paddle's height is h(t) = 8 − 6 cos(πt/10) m (graph shown). Find h′(15) in m/s (3 decimals).", -1.885, "(6π/10) sin(1.5π).", graph((t) => 8 - 6 * Math.cos((PI / 10) * t), { xmin: 0, xmax: 42, ymin: 0, ymax: 15 }, [P(15, 8)], { a: 0, b: 40, step: { x: 5, y: 2 } }), 0.002),
  num("What is the largest area of a rectangle with one corner at the centre of a quarter circle of radius 10 and the opposite corner on the arc?", 50, "A = 50 sin 2θ."),
  num(S`A mass has amplitude 3 cm and $\omega=4$ rad/s. What is its speed as it passes the centre?`, 12, "Aω."),
  num(S`A motion satisfies $a=-25s$. What is its period (4 decimals)?`, 1.2566, "ω = 5, period 2π/5.", null, 0.0005),
];
