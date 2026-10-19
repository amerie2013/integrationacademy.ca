// MCV4U Worksheet 4.4 — Applications of Sinusoidal Functions and Their Derivatives (teacher edition)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const EXAMPLES = [
  { title: "A spring", q: S`A mass moves with $s(t)=6\sin(4t)$ cm. Find $v(t)$, $a(t)$, the maximum speed and the maximum acceleration.`,
    steps: [S`$v=24\cos(4t)$ cm/s; $a=-96\sin(4t)$ cm/s².`], ans: "maximum speed 24 cm/s; maximum acceleration 96 cm/s²" },
  { title: "A large Ferris wheel", q: S`A wheel of radius 25 m has its centre 27 m above the ground and turns once every 80 s. A rider starts at the bottom. Model the height and find the vertical speed at $t=20$ s.`,
    fig: F({ view: { xmin: 0, xmax: 165, ymin: 0, ymax: 56 }, curves: [{ f: (t) => 27 - 25 * Math.cos((PI / 40) * t), a: 0, b: 160 }], points: [pt(20, 27)], step: { x: 20, y: 10 } }),
    steps: [S`$h(t)=27-25\cos\left(\frac{\pi}{40}t\right)$.`, S`$h'(t)=25\cdot\frac\pi{40}\sin\left(\frac\pi{40}t\right)$; $h'(20)=\frac{5\pi}8\approx1.963$ m/s.`], ans: "about 1.96 m/s upward (the fastest climb, at the centre height)" },
  { title: "Tides", q: S`Water depth is $d(t)=2.5\cos\left(\frac{\pi}{6.2}t\right)+6$ m, $t$ hours after high tide. How fast is it falling at $t=3.1$ h?`,
    steps: [S`$d'(t)=-2.5\cdot\frac{\pi}{6.2}\sin\left(\frac{\pi}{6.2}t\right)$.`, S`$d'(3.1)=-\frac{2.5\pi}{6.2}\approx-1.267$ m/h.`], ans: "falling at about 1.27 m per hour" },
  { title: "Household voltage", q: S`A voltage is $V(t)=170\sin(120\pi t)$ volts. What is its greatest rate of change?`,
    steps: [S`$V'(t)=170\cdot120\pi\cos(120\pi t)$; greatest size $170\cdot120\pi$.`], ans: "about 64 088 V/s, when the voltage crosses 0" },
  { title: "A rectangle in a quarter circle", q: S`A rectangle has one corner at the centre of a quarter circle of radius 8 and the opposite corner on the arc. Find the largest area.`,
    fig: F({ view: { xmin: -0.5, xmax: 9, ymin: -0.5, ymax: 9 }, curves: [{ f: (x) => Math.sqrt(64 - x * x), a: 0, b: 8 }], segs: [{ pts: [[0, 5.657], [5.657, 5.657], [5.657, 0]], color: "green" }], points: [pt(5.657, 5.657)], step: { x: 1, y: 1 } }),
    steps: [S`Corner $(8\cos\theta,8\sin\theta)$: $A=64\sin\theta\cos\theta=32\sin2\theta$.`, S`$A'=64\cos2\theta=0\Rightarrow\theta=\frac\pi4$.`], ans: "32 square units (a square of side 5.66)" },
  { title: "The longest throw", q: S`A ball launched at 20 m/s at angle $\theta$ travels $R(\theta)=\frac{400\sin2\theta}{9.8}$ m. Which angle gives the greatest range?`,
    fig: F({ view: { xmin: 0, xmax: 1.65, ymin: 0, ymax: 45 }, curves: [{ f: (t) => (400 * Math.sin(2 * t)) / 9.8, a: 0, b: PI / 2 }], points: [pt(PI / 4, 400 / 9.8)], step: { x: 0.25, y: 5 } }),
    steps: [S`$R'(\theta)=\frac{800\cos2\theta}{9.8}=0\Rightarrow\theta=\frac\pi4$.`], ans: "45°, giving about 40.8 m" },
  { title: "A pendulum", q: S`A pendulum's angle is $\theta(t)=0.15\cos(3t)$ rad. Find its greatest angular acceleration.`,
    steps: [S`$\theta''=-1.35\cos(3t)$.`], ans: "1.35 rad/s², at the ends of each swing" },
  { title: "A tracking camera", q: S`A camera 50 m from a straight road follows a car moving at 20 m/s. How fast does the camera turn when the car is 50 m down the road?`,
    steps: [S`$\tan\theta=\frac x{50}$, so $\sec^2\theta\,\frac{d\theta}{dt}=\frac1{50}\frac{dx}{dt}$.`, S`At $x=50$: $\theta=\frac\pi4$, $\sec^2\theta=2$: $\frac{d\theta}{dt}=\frac{20}{50\cdot2}$.`], ans: "0.2 rad/s" },
  { title: "Blood pressure", q: S`Blood pressure is $P(t)=100+20\sin(2\pi t)$ mmHg, $t$ in seconds. What is its greatest rate of change?`,
    steps: [S`$P'(t)=40\pi\cos(2\pi t)$.`], ans: S`$40\pi\approx125.7$ mmHg/s` },
];

const PROBLEMS = [
  { level: 1, q: S`For $s(t)=3\cos(2t)$, find $v\left(\frac\pi4\right)$.`, recap: "v = −6 sin(2t).", ans: S`$-6$` },
  { level: 1, q: S`What is the greatest rate of change of $y=10+4\sin\left(\frac\pi6t\right)$?`, recap: "|Aω|.", ans: S`$\frac{2\pi}3\approx2.094$` },
  { level: 1, q: S`What is the period of $s(t)=5\sin(3t)$?`, recap: "2π/ω.", ans: S`$\frac{2\pi}3$` },
  { level: 2, q: S`A wheel of radius 10 m, centre 12 m high, turns once every 40 s. When is a rider who starts at the bottom rising fastest, and how fast?`, recap: "h = 12 − 10 cos(πt/20).", ans: S`at $t=10$ s, $\frac\pi2\approx1.571$ m/s` },
  { level: 2, q: S`For $s(t)=5\cos(\pi t)$ cm, find $a\left(\frac13\right)$ (2 decimals).`, recap: "a = −5π² cos(πt).", ans: S`$\approx-24.67$ cm/s²` },
  { level: 2, q: S`A ball is launched at 30 m/s. What is its greatest range, using $R(\theta)=\frac{900\sin2\theta}{9.8}$?`, recap: "θ = π/4.", ans: "about 91.8 m" },
  { level: 2, q: S`A temperature is $T(t)=15-8\cos\left(\frac\pi{12}t\right)$ °C, $t$ hours after 4 a.m. How fast is it rising at $t=6$?`, recap: "T′ = (2π/3) sin(πt/12).", ans: S`$\approx2.09$ °C per hour` },
  { level: 2, q: S`A triangle has sides 7 cm and 9 cm with angle $\theta$ between them. Find the largest area and sketch $A(\theta)$.`, recap: "A = 31.5 sin θ.", ans: S`31.5 cm² at $\theta=\frac\pi2$`, fig: gridT({ xmin: 0, xmax: 3.3, ymin: 0, ymax: 35 }, { x: 0.25, y: 5 }) },
  { level: 3, space: 5, q: S`A mass moves with $s(t)=4\sin(5t)$. Find the first time when its speed is half the maximum speed.`, recap: "|cos 5t| = ½.", ans: S`$5t=\frac\pi3\Rightarrow t=\frac\pi{15}\approx0.209$ s` },
  { level: 3, space: 5, q: S`Explain, using derivatives, why a Ferris wheel rider's vertical speed is greatest at the height of the centre and zero at the top and bottom.`, recap: "h′ is a sinusoid shifted by a quarter period.", ans: "h′ is largest where h crosses its midline (the centre height) and zero at the maximum and minimum of h" },
  { level: 3, space: 5, q: S`Find the largest perimeter of a rectangle inscribed in a circle of radius 4.`, recap: "P = 16(cos θ + sin θ).", ans: S`$16\sqrt2\approx22.63$ at $\theta=\frac\pi4$ (a square)` },
  { level: 3, space: 5, q: S`An observer stands 100 m from a helicopter's launch point. The helicopter rises at 5 m/s. How fast is the angle of elevation changing when it is 100 m up?`, recap: "tan θ = h/100.", ans: "0.025 rad/s" },
  { level: 3, space: 5, q: S`Find the greatest displacement of $s(t)=\sin t+\sqrt3\cos t$ and when it first occurs. Sketch $s$.`, recap: "s′ = cos t − √3 sin t.", ans: S`2, at $t=\frac\pi6$`, fig: gridT({ xmin: 0, xmax: 6.5, ymin: -2.5, ymax: 2.5 }, { x: 0.5, y: 0.5 }) },
];

export const WS = {
  code: "4.4",
  title: "Applications of Sinusoidal Functions and Their Derivatives",
  bigideas: S`For a sinusoidal model $y=A\sin(\omega t+c)+d$ or $A\cos(\omega t+c)+d$, the derivative gives the rate of change; its largest size is $|A\omega|$, reached when $y$ crosses its midline. For position $s(t)$, $v=s'$ and $a=s''$; in simple harmonic motion $a=-\omega^2s$. Angles can serve as the variable in optimization, and related rates with $\tan\theta$ describe turning cameras and beams.`,
  goals: ["Model periodic situations.", "Find velocity and acceleration.", "Find greatest rates of change.", "Optimize with an angle."],
  curriculum: "A3.5, B2",
  vocab: [["$\\omega$", "$2\\pi\\div$ period"], ["Maximum rate", "$|A\\omega|$"], ["SHM", "$a=-\\omega^2s$"]],
  hook: S`On a Ferris wheel, at which point of the ride do you rise fastest? When are you not rising at all?`,
  concepts: [
    ["1. Rates in periodic models", S`$h(t)=27-25\cos\left(\frac\pi{40}t\right)$ (violet) and $10\,h'(t)$ (blue): fastest climb at the centre height:
${F({ view: { xmin: 0, xmax: 165, ymin: -22, ymax: 56 }, curves: [{ f: (t) => 27 - 25 * Math.cos((PI / 40) * t), a: 0, b: 160 }, { f: (t) => 10 * ((25 * PI) / 40) * Math.sin((PI / 40) * t), color: "blue", a: 0, b: 160 }], step: { x: 20, y: 10 } })}`],
    ["2. Motion", S`$s=A\cos\omega t$, $v=-A\omega\sin\omega t$, $a=-\omega^2s$.`],
    ["3. Angles", S`Write areas or lengths with $\sin\theta$ and $\cos\theta$, then differentiate in $\theta$.`],
  ],
  tips: ["ω = 2π/period.", "Radian mode.", "Fastest change at the midline.", "Speed is |v|.", "State units."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
