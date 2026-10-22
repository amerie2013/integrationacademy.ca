// IB AA SL 11.5 — Applications: bearings, two-leg journeys with the cosine and sine rules, angles of elevation in three dimensions, the angle between a line and a plane, angles inside solids
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, journey, cuboidDiag, pyramid, elevation } from "./figs11.mjs";

export const TITLE = "11.5 Applications: Bearings, Elevation and 3D Angles";
export const ID = "1baa0011-0001-4001-8001-000000001105";
const S = String.raw;
const rad = (d) => (d * Math.PI) / 180, deg = (r) => (r * 180) / Math.PI;
/** return distance and bearing for a two-leg journey */
const trip = (b1, d1, b2, d2) => { const x = d1 * Math.sin(rad(b1)) + d2 * Math.sin(rad(b2)), y = d1 * Math.cos(rad(b1)) + d2 * Math.cos(rad(b2)); let b = deg(Math.atan2(x, y)); if (b < 0) b += 360; return { d: Math.hypot(x, y), b }; };
const T1 = trip(70, 12, 160, 9), T2 = trip(30, 20, 110, 15);

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Applications: Bearings, Elevation and 3D Angles",
    overview: S`Navigation, surveying and design combine everything in this chapter. A bearing gives a direction as an angle clockwise from north; a journey of two legs forms a triangle that the cosine and sine rules can solve. In three dimensions, the angle between a line and a plane is found from a right-angled triangle. In this lesson you will solve multi-step bearing problems and find angles inside solids.`,
    goals: [
      "use three-figure bearings measured clockwise from north;",
      "find the included angle in a two-leg journey and the return distance;",
      "find a return bearing with the sine rule;",
      "find the angle between a line and a plane;",
      "solve elevation problems in three dimensions.",
    ],
    curriculum: "SL 3.3 (applications of right and non-right angled trigonometry, including bearings, angles of elevation and depression; angle between two intersecting lines and between a line and a plane)",
    prior: [
      ["What bearing is due west?", "270°."],
      ["Back-bearing of 065°?", "245°."],
      ["Space diagonal of a 2 × 3 × 6 box?", "7."],
    ],
    words: [
      ["Bearing", "angle clockwise from north, three figures", "035°"],
      ["Back-bearing", "add or subtract 180°", ""],
      ["Included angle", "the angle between the two legs at the turning point", ""],
      ["Line and plane", "the angle between the line and its projection onto the plane", ""],
      ["Projection", "the shadow of the line on the plane", ""],
    ],
  }),

  section("📌 Two-leg journeys", S`
  <p>A boat sails 12 km on a bearing of 070°, then 9 km on 160°. At the turning point P the north lines are parallel, so the angle between the back-bearing to O (250°) and the new leg (160°) is 90°. Here the triangle is right-angled: \(OQ=\sqrt{12^2+9^2}=15\) km.</p>
  ${fig({ items: journey(70, 12, 160, 9, { l1: "12 km", l2: "9 km" }).items }, "070° then 160°: the legs meet at 90°, so OQ = 15 km")}
  <p>In general use the cosine rule for the return distance, then the sine rule for the angle at O, and add it to the first bearing. For 20 km on 030° then 15 km on 110°: the included angle is \(180^\circ-80^\circ=100^\circ\), \(OQ^2=400+225-600\cos100^\circ\), so \(OQ\approx${T2.d.toFixed(2)}\) km, and the bearing of Q from O is about \(${T2.b.toFixed(1)}^\circ\).</p>
  ${fig({ items: journey(30, 20, 110, 15, { l1: "20 km", l2: "15 km" }).items }, `Included angle 100°: OQ ≈ ${T2.d.toFixed(1)} km on a bearing of about ${T2.b.toFixed(0).padStart(3, "0")}°`)}
  ${keyIdea("Draw north lines at every point. Included angle = 180° − (change of direction). Cosine rule for distance, sine rule for the angle, then convert to a bearing.")}`),

  section("📌 Angles in three dimensions", S`
  <p>The angle between a line and a plane is the angle between the line and its projection on the plane. For a cuboid 8 × 4 × 3, the space diagonal makes angle θ with the base, where the floor diagonal is \(\sqrt{8^2+4^2}=\sqrt{80}\) and \(\tan\theta=\frac{3}{\sqrt{80}}\), so \(\theta\approx18.54^\circ\).</p>
  ${fig({ items: cuboidDiag(8, 4, 3, { angle: "θ" }) }, "The space diagonal (red), its projection on the base (green dashed) and the vertical edge form a right triangle")}
  <p>For a square pyramid with base 10 and height 12, the angle between a sloping edge and the base uses half the base diagonal \(5\sqrt2\approx7.07\): \(\tan\theta=\frac{12}{7.07}\), so \(\theta\approx59.49^\circ\).</p>
  ${fig({ items: pyramid(10, 12, { lb: "10", lh: "h = 12", ls: "" }) }, "Edge, height and half-diagonal form the right triangle")}
  ${watchOut([
    "Bearings are measured clockwise from north and written with three figures.",
    "Find the included angle from the bearings; draw a diagram with north lines.",
    "In 3D, identify the right-angled triangle before using trigonometry.",
    "Angle with the base uses the projection onto the base, not an edge of the base.",
  ])}`),

  section("📌 Explore", S`<p>Set two bearings and distances. Watch the included angle, the return distance and the bearing of Q from O.</p>`),

  widget("ibBearing", { init: [40, 9, 125, 7] }),

  examples([
    ["Level 1 · Components", S`A plane flies 240 km on a bearing of 145°. How far east and how far south of its start is it?`,
      [S`East \(240\sin145^\circ\approx137.7\); south \(240\cos35^\circ\approx196.6\).`],
      S`\(\approx137.7\) km E, \(\approx196.6\) km S`],
    ["Level 1 · Back-bearing", S`The bearing of B from A is 312°. Find the bearing of A from B.`,
      [S`\(312^\circ-180^\circ\).`],
      S`\(132^\circ\)`],
    ["Level 2 · Return distance", S`A hiker walks 6 km on 050° then 8 km on 170°. Find the distance back to the start.`,
      [S`Included angle \(180^\circ-120^\circ=60^\circ\).`, S`\(d^2=36+64-96\cos60^\circ=52\).`],
      S`\(\sqrt{52}\approx7.21\) km`,
      fig({ items: journey(50, 6, 170, 8, { l1: "6 km", l2: "8 km" }).items })],
    ["Level 2 · Line and plane", S`A cuboid is 12 cm long, 5 cm wide and 9 cm high. Find the angle between a space diagonal and the base.`,
      [S`Floor diagonal \(13\).`, S`\(\tan\theta=\frac9{13}\).`],
      S`\(\approx34.70^\circ\)`],
    ["Level 3 · Elevation from two directions", S`A mast stands at point M. From A, due south of M, the angle of elevation of the top is 28°; from B, due east of M, it is 35°. If AB = 150 m, find the height of the mast.`,
      [S`\(AM=\frac{h}{\tan28^\circ}\), \(BM=\frac{h}{\tan35^\circ}\), and \(AM^2+BM^2=150^2\).`, S`\(h^2\left(\frac1{\tan^228^\circ}+\frac1{\tan^235^\circ}\right)=22500\).`],
      S`\(h\approx${(150 / Math.sqrt(1 / Math.tan(rad(28)) ** 2 + 1 / Math.tan(rad(35)) ** 2)).toFixed(1)}\) m`],
  ]),

  practice([
    q("Level 1 · back-bearing", S`The bearing of Q from P is 075°. Find the bearing of P from Q.`, num(255),
      "Add 180°.", ["255°."], S`\(255^\circ\)`),
    q("Level 1 · east", S`A ship sails 30 km on 060°. How far east has it travelled (2 d.p.)?`, num(30 * Math.sin(rad(60)), 0.01),
      "30 sin 60°.", [S`\(15\sqrt3\).`], S`\(\approx25.98\) km`),
    q("Level 2 · included angle", S`A walker goes on 040° then turns to 115°. The included angle at the turn is:`, choice(["105°", "75°", "155°", "65°"], 0),
      "180° − 75°.", [S`Change of direction 75°.`], S`\(105^\circ\)`),
    q("Level 2 · return", S`5 km on 020°, then 7 km on 110°. Distance back to start (2 d.p.)?`, num(Math.sqrt(74), 0.01),
      "Included angle 90°.", [S`\(\sqrt{25+49}\).`], S`\(\approx8.60\) km`),
    q("Level 2 · cube", S`Find the angle between a space diagonal of a cube and its base (2 d.p.).`, num(deg(Math.atan(1 / Math.SQRT2)), 0.01),
      "tan θ = s/(s√2).", [S`\(\tan^{-1}\frac{1}{\sqrt2}\).`], S`\(\approx35.26^\circ\)`),
  ]),

  ...hard([
    ["Bearing back to port", S`A ship leaves port O and sails 18 km on 055°, then 25 km on 140°. Find the distance and bearing of the port from the ship.`,
      [S`Included angle \(180^\circ-85^\circ=95^\circ\); \(d^2=324+625-900\cos95^\circ\), \(d\approx${trip(55, 18, 140, 25).d.toFixed(2)}\).`, S`Bearing of the ship from O \(\approx${trip(55, 18, 140, 25).b.toFixed(1)}^\circ\); back-bearing \(\approx${((trip(55, 18, 140, 25).b + 180) % 360).toFixed(1)}^\circ\).`],
      S`\(\approx${trip(55, 18, 140, 25).d.toFixed(1)}\) km on \(\approx${((trip(55, 18, 140, 25).b + 180) % 360).toFixed(0)}^\circ\)`,
      fig({ items: journey(55, 18, 140, 25, { l1: "18 km", l2: "25 km" }).items }, "Find OQ, then the angle at O, then convert")],
    ["Angle between a face and the base", S`A square pyramid has base 8 m and sloping edges 9 m. Find its height and the angle between a triangular face and the base.`,
      [S`Half-diagonal \(4\sqrt2\); height \(\sqrt{81-32}=7\).`, S`The face angle uses the midpoint of a base edge: \(\tan\phi=\frac74\), \(\phi\approx60.26^\circ\).`],
      S`\(h=7\) m; \(\approx60.26^\circ\)`,
      fig({ items: pyramid(8, 7, { lb: "8", lh: "h = 7", ls: "9" }) })],
  ], [
    q("Level 3 · bearing", S`From O, A is 10 km on 000° and B is 10 km on 090°. Find the bearing of B from A.`, num(135),
      "Right isosceles triangle.", ["SE: 135°."], S`\(135^\circ\)`),
    q("Level 3 · 3D", S`A cuboid is 6 × 6 × 4. Find the angle between a space diagonal and the base (2 d.p.).`, num(deg(Math.atan(4 / Math.sqrt(72))), 0.01),
      "tan θ = 4/√72.", [S`\(\approx25.24^\circ\).`], S`\(\approx25.24^\circ\)`),
    q("Level 3 · return distance", S`9 km on 300°, then 12 km on 030°. Find the return distance.`, num(15),
      "Included angle 90°.", [S`\(\sqrt{81+144}\).`], S`\(15\) km`),
  ]),

  wrapUp({
    qas: [
      ["How do I find the included angle?", "Draw north lines; included angle = 180° − change of direction (or use alternate angles)."],
      ["How do I find a bearing from a triangle?", "Find the angle at the start with the sine rule and add it to (or subtract it from) the first bearing."],
      ["What is the angle between a line and a plane?", "The angle between the line and its projection onto the plane."],
      ["How do I find angles in a pyramid?", "Use half the base diagonal (for an edge) or half the base side (for a face) with the height."],
      ["How can I check a bearing answer?", "Make sure it is between 000° and 360° and matches the direction on the diagram."],
    ],
    summary: [
      "Bearings clockwise from north, three figures.",
      "Two legs: cosine rule for distance, sine rule for angles.",
      "Line–plane angle: right triangle with the projection.",
      "Always draw a labelled diagram.",
    ],
    next: "11.6 reviews geometry and trigonometry.",
  }),
];
