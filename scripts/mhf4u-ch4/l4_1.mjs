// MHF4U 4.1 — Radian Measure: arc length definition, converting between degrees and radians, arc length,
// sector area and angular speed
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, hard, plane } from "./lib.mjs";
import { UC, SECTOR } from "./trigfig.mjs";

export const TITLE = "4.1 Radian Measure";
export const ID = "e0e1ae1d-3ec5-494f-b3bf-842af96b42b3";

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📐",
    title: "Radian Measure",
    overview: S`A degree is an arbitrary slice of a circle. A <strong>radian</strong> comes from the circle itself: one radian is the angle at the centre that cuts off an arc equal in length to the radius. Since a full circle has circumference \(2\pi r\), a full turn is \(2\pi\) radians. From now on, trigonometric functions take radians as their input, which is what makes the formulas of later mathematics so clean.`,
    goals: [
      "define a radian using arc length;",
      "convert between degrees and radians, exactly and approximately;",
      "use \\(s=r\\theta\\) to find arc length, radius or angle;",
      "use \\(A=\\tfrac12r^2\\theta\\) for the area of a sector;",
      "solve problems with angular speed.",
    ],
    curriculum: "B1.1 (radian measure from arc length on a unit circle), B1.2 (convert between radians and degrees)",
    prior: [
      [S`Circumference of a circle of radius 3?`, S`\(6\pi\).`],
      [S`What fraction of a full turn is \(90^\circ\)?`, S`\(\frac14\).`],
      [S`Simplify \(\frac{150}{180}\).`, S`\(\frac56\).`],
    ],
    words: [
      ["Radian", "the angle with arc length equal to the radius", "\\(\\pi\\ \\text{rad}=180^\\circ\\)"],
      ["Arc length", "distance along the circle", "\\(s=r\\theta\\)"],
      ["Sector", "a pizza-slice region of a circle", "\\(A=\\tfrac12r^2\\theta\\)"],
      ["Angular speed", "angle turned per unit of time", "rad/s"],
    ],
  }),

  section("📌 From arc length to radians", S`
  <p>For an arc of length \(s\) on a circle of radius \(r\), the angle in radians is \(\theta=\dfrac sr\). A radian is a ratio of two lengths, so it has no units; writing "rad" is optional.</p>
  ${plane(SECTOR(4, 1, "s = r when θ = 1"), "One radian: the arc is as long as the radius.")}
  ${table(["Degrees", "0°", "30°", "45°", "60°", "90°", "180°", "270°", "360°"], [
    ["Radians", "0", "π/6", "π/4", "π/3", "π/2", "π", "3π/2", "2π"],
    ["Approx.", "0", "0.52", "0.79", "1.05", "1.57", "3.14", "4.71", "6.28"],
  ])}
  ${keyIdea(S`Since \(\pi\) rad \(=180^\circ\): to change degrees to radians multiply by \(\dfrac{\pi}{180}\); to change radians to degrees multiply by \(\dfrac{180}{\pi}\).`)}`),

  section("📌 Explore", S`<p>Move the angle and the radius. Keep the radius fixed and double the angle: the arc and the sector area double too. Then fix the angle and double the radius: the arc doubles but the area becomes four times as large.</p>`),

  widget("ibRadian", { init: [100, 6] }),

  section("📌 Using radians", S`
  <p>The formulas \(s=r\theta\) and \(A=\frac12r^2\theta\) work only when \(\theta\) is in radians. They come from taking a fraction \(\frac{\theta}{2\pi}\) of the full circumference and area.</p>
  ${plane(UC(120, "θ = 2π/3"), "On the unit circle, r = 1, so the arc length is the angle.")}
  ${watchOut([
    "Set your calculator to radian mode before you evaluate sin 2 or cos 1.5.",
    "s = rθ needs θ in radians. Convert first.",
    "An angle with no degree symbol is in radians: sin 2 means 2 radians, not 2°.",
    "π is about 3.14, so π/6 is about 0.52, not 3.14/6 written as a fraction of degrees.",
    "Give exact answers in terms of π unless a decimal is requested.",
  ])}`),

  examples([
    ["Degrees to radians", S`Convert \(150^\circ\) to radians, exactly and to 2 decimals.`,
      [S`\(150\times\dfrac{\pi}{180}=\dfrac{150\pi}{180}\).`, S`Divide the top and bottom by 30: \(\dfrac{5\pi}{6}\approx2.62\).`],
      S`\(\dfrac{5\pi}6\approx2.62\)`,
      plane(UC(150, "5π/6"))],
    ["Radians to degrees", S`Convert \(\dfrac{7\pi}4\) to degrees.`,
      [S`\(\dfrac{7\pi}4\times\dfrac{180}{\pi}\): the \(\pi\) cancels.`, S`\(\dfrac{7\times180}4=315\).`],
      S`\(315^\circ\)`,
      plane(UC(315, "7π/4"))],
    ["A radian measure without π", S`Convert \(2.5\) radians to degrees, to 1 decimal.`,
      [S`\(2.5\times\dfrac{180}{\pi}=\dfrac{450}{\pi}\).`, S`\(\approx143.2\).`],
      S`\(143.2^\circ\)`],
    ["Arc length", S`Find the length of the arc of a circle with radius 8 cm subtended by \(\dfrac{3\pi}4\).`,
      [S`\(s=r\theta=8\times\dfrac{3\pi}4\).`, S`\(=6\pi\approx18.85\) cm.`],
      S`\(6\pi\approx18.85\) cm`,
      plane(SECTOR(8, (3 * Math.PI) / 4))],
    ["Angular speed", S`A wheel turns at 45 revolutions per minute. Find its angular speed in radians per second.`,
      [S`One revolution is \(2\pi\) rad: \(45\times2\pi=90\pi\) rad/min.`, S`Divide by 60: \(\dfrac{90\pi}{60}=\dfrac{3\pi}2\) rad/s.`],
      S`\(\dfrac{3\pi}2\approx4.71\) rad/s`],
  ]),

  practice([
    q("degrees to radians", S`Convert \(240^\circ\) to radians (2 decimals).`, num(4.19, 0.01),
      "Multiply by π/180.", [S`\(\frac{240\pi}{180}=\frac{4\pi}3\approx4.19\).`], S`\(4.19\)`),
    q("radians to degrees", S`Convert \(\dfrac{5\pi}9\) to degrees.`, num(100),
      "Multiply by 180/π.", [S`\(\frac{5\times180}{9}=100\).`], S`\(100\)`),
    q("arc length", S`A circle has radius 10 m. Find the arc length for \(\theta=1.2\) rad, in metres.`, num(12),
      "s = rθ.", [S`\(10\times1.2=12\).`], S`\(12\)`),
    q("angle from arc", S`An arc of length 15 cm lies on a circle of radius 6 cm. Find the central angle in radians.`, num(2.5),
      "θ = s/r.", [S`\(\frac{15}6=2.5\).`], S`\(2.5\)`),
    q("angular speed", S`A disc turns at 30 revolutions per minute. Find its angular speed in rad/s (2 decimals).`, num(3.14, 0.01),
      "One revolution is 2π rad; divide by 60.", [S`\(\frac{30\times2\pi}{60}=\pi\).`], S`\(3.14\)`),
  ]),

  ...hard([
    ["A clock", S`The minute hand of a clock is 12 cm long. How far does its tip travel in 25 minutes? Give an exact answer and a decimal.`,
      [S`In 60 minutes the hand turns \(2\pi\) rad, so in 25 minutes it turns \(\frac{25}{60}\times2\pi=\frac{5\pi}6\).`, S`\(s=r\theta=12\times\frac{5\pi}6=10\pi\).`],
      S`\(10\pi\approx31.4\) cm`,
      plane(SECTOR(12, (5 * Math.PI) / 6))],
    ["The turning Earth", S`The radius of the Earth at the equator is about 6378 km. Find the speed, in km/h, of a point on the equator due to the Earth's rotation.`,
      [S`The Earth turns \(2\pi\) rad in 24 h: \(\omega=\frac{2\pi}{24}=\frac{\pi}{12}\) rad/h.`, S`Arc per hour: \(v=r\omega=6378\times\frac{\pi}{12}\approx1670\) km/h.`],
      S`about \(1670\) km/h`],
  ], [
    q("hard", S`A belt joins pulleys of radii 5 cm and 15 cm. The small pulley turns through 6 rad. Through how many radians does the large pulley turn?`, num(2),
      "The belt moves the same arc length on each.", [S`\(s=5\times6=30\); \(\theta=\frac{30}{15}=2\).`], S`\(2\)`),
    q("hard", S`A sector has radius 4 cm and angle 2 rad. Find its perimeter in cm.`, num(16),
      "Two radii plus the arc.", [S`\(4+4+4\times2=16\).`], S`\(16\)`),
    q("hard", S`Find the angle between the hands of a clock at 3:30, in radians (2 decimals).`, num(1.31, 0.01),
      "The hour hand has moved past the 3.", [S`The hour hand is at \(105^\circ\), the minute hand at \(180^\circ\): \(75^\circ=\frac{5\pi}{12}\approx1.31\).`], S`\(1.31\)`),
  ]),

  wrapUp({
    qas: [
      ["Why use radians at all?", "A radian is built from the circle, so formulas lose their conversion factors: s = rθ has no 180 or 360 in it. In calculus, this is what makes the rate of change of sin x equal cos x."],
      ["Does a radian have a unit?", "No. It is the ratio of two lengths, arc over radius, so the length units cancel."],
      ["How big is one radian?", "About 57.3°, because 180/π ≈ 57.3."],
      ["Why does s = rθ fail with degrees?", "It comes from s = (θ/2π)(2πr), which assumes a full turn is 2π."],
      ["How do I know which mode to use?", "If the angle has no degree symbol, treat it as radians and set radian mode."],
    ],
    summary: [
      "π rad = 180°.",
      "Degrees → radians: × π/180. Radians → degrees: × 180/π.",
      "Arc length s = rθ; sector area A = ½r²θ, with θ in radians.",
      "Angular speed is the angle per unit of time.",
    ],
    next: "4.2 finds exact values of the trigonometric ratios at special angles in radians.",
  }),
];
