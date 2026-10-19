// MCV4U 4.4 — Applications of Sinusoidal Functions and Their Derivatives (NEW lesson): simple harmonic motion,
// Ferris wheels, daylight models, maximum rates, optimization with angles, and a rotating beam (related rates)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";

export const TITLE = "4.4 Applications of Sinusoidal Functions and Their Derivatives";
export const ID = "6d4fc004-0001-4001-8001-000000000404";

const S = String.raw;
const PI = Math.PI;
export const blocks = () => [
  intro({
    icon: "🎡",
    title: "Applications of Sinusoidal Functions and Their Derivatives",
    overview: S`Many motions repeat: a mass bobbing on a spring, a rider on a Ferris wheel, the hours of daylight through the year. When position is a sinusoidal function of time, its derivative gives the velocity and its second derivative the acceleration. For \(s(t)=A\cos(\omega t)\) we get \(v=-A\omega\sin(\omega t)\) and \(a=-A\omega^2\cos(\omega t)=-\omega^2s\): the acceleration always points back toward the centre — the signature of <strong>simple harmonic motion</strong>. Derivatives also find the fastest moment of change and the angle that makes an area as large as possible.`,
    goals: [
      "find velocity and acceleration for sinusoidal motion;",
      "recognize simple harmonic motion: a = −ω² s;",
      "find when and how fast a periodic quantity changes most rapidly;",
      "solve optimization problems with an angle as the variable;",
      "interpret derivatives of periodic models with units.",
    ],
    curriculum: "A3.5, B2.1–B2.5 (solve problems involving rates of change and optimization of sinusoidal models arising from real-world applications)",
    prior: [
      [S`\(\frac{d}{dt}\cos(3t)\)?`, S`\(-3\sin(3t)\).`],
      [S`Velocity from position?`, S`\(v=s'(t)\).`],
      [S`Period of \(\cos\left(\frac{\pi}{30}t\right)\)?`, S`60.`],
    ],
    words: [
      ["Simple harmonic motion", "motion with \\(a=-\\omega^2s\\)", "spring, pendulum"],
      ["Amplitude", "half the distance from minimum to maximum", "A"],
      ["Angular frequency", "\\(\\omega=\\frac{2\\pi}{\\text{period}}\\)", "radians per second"],
      ["Maximum rate", "largest \\(|f'|\\), at the midline", "\\(|A\\omega|\\)"],
    ],
  }),

  section("📌 Position, velocity, acceleration", S`
  ${table(["Quantity", "Formula", "Largest size", "Where"], [
    ["position \\(s\\)", "\\(A\\cos(\\omega t)\\)", "\\(A\\)", "turning points"],
    ["velocity \\(v\\)", "\\(-A\\omega\\sin(\\omega t)\\)", "\\(A\\omega\\)", "passing the centre"],
    ["acceleration \\(a\\)", "\\(-A\\omega^2\\cos(\\omega t)\\)", "\\(A\\omega^2\\)", "turning points"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 4.2, ymin: -80, ymax: 80 }, curves: [{ f: (t) => 8 * Math.cos(3 * t), a: 0, b: 4.2, color: "violet" }, { f: (t) => -24 * Math.sin(3 * t), a: 0, b: 4.2, color: "blue" }, { f: (t) => -72 * Math.cos(3 * t), a: 0, b: 4.2, color: "amber" }], step: { x: 0.5, y: 10 } }, "s = 8 cos 3t (violet), v = −24 sin 3t (blue), a = −72 cos 3t (amber): a is always opposite to s.")}
  ${keyIdea(S`For a sinusoidal model, differentiate with the chain rule, then use the meaning: the derivative is largest in size where the original crosses its midline, and zero at its maximum and minimum. In simple harmonic motion \(a=-\omega^2s\).`)}`),

  section("📌 Explore", S`<p>Change the amplitude and \(\omega\), then move through time. Watch the mass: it moves fastest as it passes the green rest line and stops for an instant at each turning point, exactly where the acceleration (amber) is largest.</p>`),

  widget("springLab", { init: { A: 10, w: 2, t: 0.5 } }),

  section("📌 Setting up periodic models", S`
  <p>Identify the amplitude (half the range), the midline (the average), and \(\omega=\frac{2\pi}{\text{period}}\). Check units: if \(t\) is in seconds, \(\omega\) is in radians per second and the rate is in units per second.</p>
  ${watchOut([
    "ω = 2π / period, not the period itself.",
    "Keep the calculator in radians.",
    "Maximum speed is |Aω|, reached at the midline, not at the top.",
    "Velocity can be negative; speed is its size.",
    "Answer with units: m/s, h per day, cm²/rad.",
  ])}`),

  examples([
    ["A mass on a spring", S`A mass moves with \(s(t)=8\cos(3t)\) cm. Find \(v(t)\), \(a(t)\), the maximum speed, and show that \(a=-9s\).`,
      [S`\(v=-24\sin(3t)\) cm/s; \(a=-72\cos(3t)\) cm/s².`, S`Maximum speed 24 cm/s (when \(\sin3t=\pm1\), i.e. as it passes \(s=0\)).`, S`\(a=-9\cdot8\cos(3t)=-9s\).`],
      S`maximum speed 24 cm/s; \(a=-9s\): simple harmonic motion with \(\omega=3\)`],
    ["A Ferris wheel", S`A rider's height is \(h(t)=20-18\cos\left(\frac{\pi}{30}t\right)\) m after \(t\) s. How fast is the rider rising at \(t=15\) s, and when is the rider rising fastest?`,
      [S`\(h'(t)=18\cdot\frac\pi{30}\sin\left(\frac\pi{30}t\right)=\frac{3\pi}5\sin\left(\frac\pi{30}t\right)\).`, S`\(h'(15)=\frac{3\pi}5\sin\frac\pi2\approx1.885\) m/s — the largest value, at the midline height 20 m.`],
      S`about 1.885 m/s at \(t=15\) s; fastest rising at \(t=15\) s (then every 60 s)`,
      plane({ view: { xmin: 0, xmax: 125, ymin: 0, ymax: 42 }, curves: [{ f: (t) => 20 - 18 * Math.cos((PI / 30) * t), a: 0, b: 120, color: "violet" }, { f: (t) => 20 + 1.885 * (t - 15), a: 5, b: 25, color: "green" }], points: [{ x: 15, y: 20, label: "(15, 20)", color: "red" }], step: { x: 10, y: 5 } })],
    ["Hours of daylight", S`Daylight in a city is \(D(t)=12+3\sin\left(\frac{2\pi}{365}(t-80)\right)\) hours on day \(t\). How fast is it changing on day 80, in minutes per day?`,
      [S`\(D'(t)=3\cdot\frac{2\pi}{365}\cos\left(\frac{2\pi}{365}(t-80)\right)\).`, S`\(D'(80)=\frac{6\pi}{365}\approx0.0516\) h/day \(\approx3.1\) min/day.`],
      S`increasing by about 3.1 minutes per day (the fastest change of the year)`,
      plane({ view: { xmin: 0, xmax: 370, ymin: 7, ymax: 16 }, curves: [{ f: (t) => 12 + 3 * Math.sin(((2 * PI) / 365) * (t - 80)), a: 0, b: 365, color: "violet" }], points: [{ x: 80, y: 12, label: "day 80", color: "red" }, { x: 171.25, y: 15, label: "longest day", color: "blue" }], step: { x: 30, y: 1 } })],
    ["The largest triangle", S`A triangle has two sides of 10 cm with angle \(\theta\) between them. Which angle gives the largest area?`,
      [S`\(A(\theta)=\frac12(10)(10)\sin\theta=50\sin\theta\), \(0\lt\theta\lt\pi\).`, S`\(A'(\theta)=50\cos\theta=0\Rightarrow\theta=\frac\pi2\); \(A''=-50\sin\theta\lt0\).`],
      S`a right angle, \(\theta=\frac\pi2\), giving 50 cm²`,
      plane({ view: { xmin: 0, xmax: 3.3, ymin: 0, ymax: 60 }, curves: [{ f: (t) => 50 * Math.sin(t), a: 0, b: PI, color: "violet" }], points: [{ x: PI / 2, y: 50, label: "(π/2, 50)", color: "red" }], step: { x: 0.5, y: 10 } })],
    ["A swinging pendulum", S`A pendulum's angle is \(\theta(t)=0.2\cos(2t)\) rad. Find its angular velocity and when it is greatest in size.`,
      [S`\(\theta'(t)=-0.4\sin(2t)\) rad/s.`, S`Largest size 0.4 rad/s when \(\sin2t=\pm1\): \(t=\frac\pi4,\frac{3\pi}4,\ldots\) — as the pendulum passes the vertical.`],
      S`\(\theta'=-0.4\sin(2t)\); greatest speed 0.4 rad/s at \(t=\frac\pi4+\frac{k\pi}2\)`],
  ]),

  practice([
    q("velocity", S`A particle has \(s(t)=5\sin(2t)\) m. Find \(v(0)\).`, num(10),
      "v = 10 cos(2t).", [S`\(10\cos0\).`], S`\(10\)`),
    q("acceleration", S`For \(s(t)=4\cos(\pi t)\) cm, find \(a(0)\) (2 decimals).`, num(-39.48, 0.01),
      "a = −4π² cos(πt).", [S`\(-4\pi^2\).`], S`\(-39.48\)`),
    q("maximum rate", S`A Ferris wheel rider has \(h(t)=15-12\cos\left(\frac{\pi}{20}t\right)\) m. What is the fastest rate of climb (m/s, 3 decimals)?`, num(1.885, 0.002),
      "|Aω| = 12 · π/20.", [S`\(\frac{3\pi}{5}\).`], S`\(1.885\)`),
    q("SHM", S`In simple harmonic motion, the acceleration is proportional to:`, choice(["the negative of the position", "the velocity", "the time", "the square of the position"], 0),
      "a = −ω² s.", ["It always points back to the centre."], "−position"),
    q("optimize", S`A triangle has sides 6 and 8 with angle \(\theta\) between them. What is its largest possible area?`, num(24),
      "A = 24 sin θ.", [S`\(\theta=\frac\pi2\).`], S`\(24\)`),
  ]),

  ...hard([
    ["A rotating beam", S`A lighthouse 2 km from a straight shore turns once per minute (\(2\pi\) rad/min). How fast does the spot of light move along the shore when the beam makes an angle \(\theta=\frac\pi4\) with the perpendicular to the shore?`,
      [S`Distance along the shore: \(x=2\tan\theta\).`, S`\(\frac{dx}{dt}=2\sec^2\theta\cdot\frac{d\theta}{dt}=2\sec^2\theta\cdot2\pi\).`, S`At \(\frac\pi4\): \(\sec^2\frac\pi4=2\), so \(\frac{dx}{dt}=8\pi\approx25.1\) km/min.`],
      S`about 25.1 km per minute`,
      plane({ view: { xmin: -0.5, xmax: 4, ymin: -0.5, ymax: 3 }, segs: [{ pts: [[0, 0], [0, 2]], color: "gray" }, { pts: [[0, 2], [2, 0]], color: "amber" }, { pts: [[-0.5, 0], [4, 0]], color: "blue" }], points: [{ x: 0, y: 2, label: "lighthouse", color: "red" }, { x: 2, y: 0, label: "x = 2 tan θ", color: "amber" }], step: { x: 0.5, y: 0.5 } })],
    ["A rectangle in a semicircle", S`A rectangle is inscribed in a semicircle of radius 5, its base on the diameter. Use the angle \(\theta\) to the upper right corner to find the largest area.`,
      [S`Corner \((5\cos\theta,5\sin\theta)\): \(A=2(5\cos\theta)(5\sin\theta)=25\sin2\theta\), \(0\lt\theta\lt\frac\pi2\).`, S`\(A'=50\cos2\theta=0\Rightarrow\theta=\frac\pi4\).`],
      S`\(\theta=\frac\pi4\): a 7.07 by 3.54 rectangle with area 25`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -0.5, ymax: 6 }, curves: [{ f: (x) => Math.sqrt(25 - x * x), a: -5, b: 5, color: "violet" }], segs: [{ pts: [[-3.536, 0], [-3.536, 3.536], [3.536, 3.536], [3.536, 0]], color: "green" }, { pts: [[0, 0], [3.536, 3.536]], color: "amber" }], points: [{ x: 3.536, y: 3.536, label: "(5cos θ, 5sin θ)", color: "red" }], step: { x: 1, y: 1 } })],
  ], [
    q("hard", S`For the daylight model \(D(t)=12+3\sin\left(\frac{2\pi}{365}(t-80)\right)\), what is the greatest rate of change in hours per day (4 decimals)?`, num(0.0516, 0.0002),
      "|Aω| = 3 · 2π/365.", [S`\(\frac{6\pi}{365}\).`], S`\(0.0516\)`),
    q("hard", S`For \(s(t)=3\sin t+4\cos t\), what is the greatest displacement?`, num(5),
      "s′ = 3cos t − 4 sin t = 0 ⇒ tan t = 3/4.", [S`\(3\cdot\frac35+4\cdot\frac45=5\).`], S`\(5\)`),
    q("hard", S`A pendulum swings with \(\theta(t)=0.3\sin(4t)\) rad. What is its greatest angular speed (rad/s)?`, num(1.2),
      "|Aω|.", [S`\(0.3\times4\).`], S`\(1.2\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is the speed greatest at the centre?", "The derivative of a sinusoid is largest where the curve crosses its midline — the equilibrium position."],
      ["What does a = −ω²s mean physically?", "The farther the mass is from the centre, the harder it is pulled back, always toward the centre."],
      ["How do I find ω?", "ω = 2π/period. A wheel that turns once every 60 s has ω = π/30 rad/s."],
      ["Why use an angle as the variable?", "When a shape is fixed by a length and an angle, writing the area with sin θ or cos θ makes the derivative simple."],
      ["What units does dx/dt have for a beam?", "Distance per time, e.g. km/min — the angle rate must be in radians per minute."],
    ],
    summary: [
      "v = s′, a = s″ for sinusoidal motion.",
      "SHM: a = −ω² s.",
      "Maximum rate |Aω| at the midline.",
      "Angles work as optimization variables.",
    ],
    next: "4.5 reviews the chapter.",
  }),
];
