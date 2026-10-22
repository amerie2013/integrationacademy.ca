// IB AA SL 11.6 — Chapter 11 Review: 3D distance and solids, right-angled trigonometry, sine rule and ambiguous case, cosine rule and area, bearings and 3D angles
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, hard } from "./lib.mjs";
import { fig, triSAS, cone, journey, cuboidDiag, elevation } from "./figs11.mjs";

export const TITLE = "11.6 Chapter 11 Review";
export const ID = "1baa0011-0001-4001-8001-000000001106";
const S = String.raw;
const rad = (d) => (d * Math.PI) / 180, deg = (r) => (r * 180) / Math.PI;

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Chapter 11 Review",
    overview: S`This review connects the chapter: distance and solids in three dimensions, right-angled trigonometry, the sine and cosine rules, the area of a triangle, bearings and angles in solids. The examples combine these as exam questions do.`,
    goals: [
      "find 3D distances, volumes and surface areas;",
      "solve right-angled triangles, including elevation and depression;",
      "use the sine rule, including the ambiguous case;",
      "use the cosine rule and ½ab sin C;",
      "solve bearing and 3D-angle problems.",
    ],
    curriculum: "SL 3.1–3.3 (geometry and trigonometry)",
    prior: [
      ["Volume of a cone?", S`\(\frac13\pi r^2h\).`],
      ["When is SSA ambiguous?", S`When \(b\sin A<a<b\) with A acute.`],
      ["Area of a triangle from two sides and the included angle?", S`\(\frac12ab\sin C\).`],
    ],
    words: [
      ["11.1", "3D distance, volume, surface area", ""],
      ["11.2", "SOH CAH TOA, elevation", ""],
      ["11.3", "sine rule, ambiguous case", ""],
      ["11.4", "cosine rule, area", ""],
      ["11.5", "bearings, 3D angles", ""],
    ],
  }),

  section("📌 The chapter on one page", S`
  ${table(["Situation", "Tool"], [
    ["two points in space", S`\(d=\sqrt{\Delta x^2+\Delta y^2+\Delta z^2}\)`],
    ["solid", S`prism \(V=Ah\); pyramid/cone \(\frac13Ah\); sphere \(\frac43\pi r^3\), \(4\pi r^2\)`],
    ["right angle", "SOH CAH TOA"],
    ["side + opposite angle", "sine rule (check the ambiguous case)"],
    ["SAS or SSS", "cosine rule; area ½ab sin C"],
    ["navigation", "bearings, included angle, then the rules"],
  ])}
  ${fig({ items: triSAS(11, 8, 72, { sides: ["c", "11", "8"], angles: [[2, "72°"]] }).items }, "Example 3: two sides and the included angle")}
  ${keyIdea("Identify what you know — a right angle, a side with its opposite angle, SAS, or SSS — and the right rule follows.")}`),

  section("📌 Explore", S`<p>Use the explorer to check the cosine-rule example.</p>`),

  widget("ibCosineRule", { init: [11, 8, 72] }),

  examples([
    ["Level 1 · Solid", S`A cone has height 8 and slant height 10. Find its volume and curved surface area.`,
      [S`\(r=6\).`, S`\(V=\frac13\pi(36)(8)=96\pi\); curved area \(\pi(6)(10)=60\pi\).`],
      S`\(96\pi\approx301.6\); \(60\pi\approx188.5\)`,
      fig({ items: cone(6, 8, { lr: "r", lh: "h = 8", ls: "10" }) })],
    ["Level 2 · Elevation", S`From the top of a 35 m building, the angle of depression of a car is 22°. How far is the car from the base?`,
      [S`\(d=\frac{35}{\tan22^\circ}\).`],
      S`\(\approx86.6\) m`],
    ["Level 2 · Cosine rule and area", S`In triangle ABC, a = 11, b = 8 and C = 72°. Find c and the area.`,
      [S`\(c^2=121+64-176\cos72^\circ\Rightarrow c\approx11.43\).`, S`Area \(=\frac12(11)(8)\sin72^\circ\approx41.85\).`],
      S`\(c\approx11.43\); area \(\approx41.85\)`],
    ["Level 2 · Ambiguous case", S`A = 40°, a = 7, b = 10. Find both possible values of B.`,
      [S`\(\sin B=\frac{10\sin40^\circ}{7}\approx0.9183\).`, S`\(B\approx66.67^\circ\) or \(113.33^\circ\); both valid.`],
      S`\(\approx66.67^\circ\) or \(\approx113.33^\circ\)`],
    ["Level 3 · 3D angle", S`A cuboid is 10 cm by 6 cm by 5 cm. Find the length of the space diagonal and its angle with the base.`,
      [S`\(d=\sqrt{100+36+25}=\sqrt{161}\approx12.69\).`, S`\(\tan\theta=\frac5{\sqrt{136}}\Rightarrow\theta\approx23.21^\circ\).`],
      S`\(\approx12.69\) cm; \(\approx23.21^\circ\)`,
      fig({ items: cuboidDiag(10, 6, 5, { angle: "θ" }) })],
  ]),

  practice([
    q("Level 1 · distance", S`Find the distance from \((1,2,3)\) to \((3,5,9)\).`, num(7),
      "√(4 + 9 + 36).", [S`\(7\).`], S`\(7\)`),
    q("Level 1 · sphere", S`Find the surface area of a sphere of radius 3 (1 d.p.).`, num(36 * Math.PI, 0.1),
      "4πr².", [S`\(36\pi\).`], S`\(\approx113.1\)`),
    q("Level 2 · sine rule", S`A = 55°, B = 70°, a = 9. Find b (2 d.p.).`, num((9 * Math.sin(rad(70))) / Math.sin(rad(55)), 0.01),
      "9 sin 70°/sin 55°.", [S`\(\approx10.32\).`], S`\(\approx10.32\)`),
    q("Level 2 · angle", S`Sides 6, 7 and 12. Find the largest angle (2 d.p.).`, num(deg(Math.acos((36 + 49 - 144) / 84)), 0.01),
      "Opposite 12.", [S`\(\cos C=\frac{36+49-144}{84}\).`], S`\(\approx134.62^\circ\)`),
    q("Level 2 · bearing", S`The bearing of A from B is 210°. Find the bearing of B from A.`, num(30),
      "210° − 180°.", ["030°."], S`\(030^\circ\)`),
  ]),

  ...hard([
    ["Journey and area", S`A yacht sails 15 km on 080° and then 11 km on 200°. Find the distance back to the start and the area of the triangle formed.`,
      [S`Included angle \(180^\circ-120^\circ=60^\circ\).`, S`\(d^2=225+121-330\cos60^\circ=181\Rightarrow d\approx13.45\).`, S`Area \(=\frac12(15)(11)\sin60^\circ\approx71.45\) km².`],
      S`\(\approx13.45\) km; \(\approx71.45\) km²`,
      fig({ items: journey(80, 15, 200, 11, { l1: "15 km", l2: "11 km" }).items })],
    ["Elevation with the sine rule", S`From A, the angle of elevation of a tower top T is 31°. From B, 40 m closer, it is 47°. Find AT with the sine rule and then the height.`,
      [S`In triangle ABT: angle at B = 133°, angle at T = 16°.`, S`\(AT=\frac{40\sin133^\circ}{\sin16^\circ}\approx106.13\).`, S`Height \(=AT\sin31^\circ\approx54.66\) m.`],
      S`\(AT\approx106.1\) m; height \(\approx54.7\) m`,
      fig({ items: elevation(91, 54.66, { ld: "", angle: "31°" }) })],
  ], [
    q("Level 3 · composite", S`A hemisphere of radius 6 sits on a cylinder of radius 6 and height 10. Find the volume (1 d.p.).`, num(Math.PI * (360 + 144), 0.1),
      "360π + 144π.", [S`\(504\pi\).`], S`\(\approx1583.4\)`),
    q("Level 3 · area to side", S`A triangle has area 50, sides b = 10 and included angle 30°. Find side a.`, num(20),
      "50 = ½ × a × 10 × ½.", ["20."], S`\(20\)`),
    q("Level 3 · ambiguous", S`A = 36°, b = 15. For which smallest whole-number value of a is there exactly one triangle with a ≥ b?`, num(15),
      "a ≥ b gives one triangle.", ["15."], S`\(15\)`),
  ]),

  wrapUp({
    qas: [
      ["How do I decide which rule?", "Right angle → SOH CAH TOA; side + opposite angle → sine rule; SAS/SSS → cosine rule."],
      ["How do I avoid ambiguous-case errors?", "Always test 180° − θ and check the angle sum."],
      ["Which height for cones and pyramids?", "Perpendicular height for volume; slant height for curved/face area."],
      ["How do I set up bearing problems?", "Draw north lines at each point and find the included angle."],
      ["How do I find angles in solids?", "Find the right-angled triangle with the projection onto the plane."],
    ],
    summary: [
      "3D: d² = Δx² + Δy² + Δz²; standard volume and area formulas.",
      "Right triangles: SOH CAH TOA.",
      "Sine rule (ambiguous case); cosine rule; ½ab sin C.",
      "Bearings and 3D angles combine these.",
    ],
    next: "Chapter 12 studies periodic functions and radian measure.",
  }),
];
