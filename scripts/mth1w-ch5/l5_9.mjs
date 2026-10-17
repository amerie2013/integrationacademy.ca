// MTH1W 5.9 — Chapter 5 Review (NEW lesson, placed after 5.8)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice } from "./lib.mjs";
import { fig, cylinder, cone, polygon } from "./figs5.mjs";

export const TITLE = "5.9 Chapter 5 Review";
export const NEW = { id: "5c5e7c1a-0a59-4d1e-9c59-c5a9f0000509", position: 40 };

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Chapter 5 Review — Geometry & Measurement",
    overview: String.raw`This page pulls the chapter together before the test: each lesson's key idea on one screen, questions where you must choose the right formula, multi-step textbook-level examples, mixed practice and a readiness checklist. Work through it after 5.1–5.8 and go back to any lesson where you get stuck.`,
    goals: [
      "recall the key idea, a typical example and the common mistake of each lesson;",
      "choose the correct property or formula for a geometry or measurement problem;",
      "solve multi-step problems combining units, Pythagoras, area, volume and surface area;",
      "check your readiness for the chapter test.",
    ],
    curriculum: "E1.1–E1.6 (whole strand E1)",
    prior: [
      [String.raw`Each interior angle of a regular hexagon?`, String.raw`\(720^\circ\div6=120^\circ\).`],
      [String.raw`\(1\ \text{m}^3\) in litres?`, String.raw`\(1000\) L.`],
      [String.raw`Volume of a cone with \(r=3\), \(h=5\)?`, String.raw`\(\tfrac13\pi(9)(5)=15\pi\).`],
    ],
    words: [
      ["Length factor k", "multiplies perimeter by k", "\\(P\\times k\\)"],
      ["Area factor", "k²", "\\(A\\times k^2\\)"],
      ["Volume factor", "k³", "\\(V\\times k^3\\)"],
      ["Slant height", "from Pythagoras: \\(s=\\sqrt{h^2+r^2}\\)", "cone, pyramid"],
    ],
  }),

  section("📌 The chapter on one page", table(["Lesson", "Key idea", "Typical example", "Watch out"], [
    ["5.1 History", "3-4-5 right angles, base 60, Eratosthenes, π between polygons", "angle/360° = arc/circumference", "historical π values are approximations"],
    ["5.2 Circles & triangles", "180° in a triangle; exterior angle; (n − 2)·180°; inscribed = ½ central; tangent ⟂ radius", "semicircle angle = 90°", "same arc for inscribed/central"],
    ["5.3 Units", "unit factors; area ×100 per metric step, volume ×1000; 1 in = 2.54 cm", "1 m² = 10 000 cm²", "square/cube the length factor"],
    ["5.4 Pythagoras", "a² + b² = c²; converse; distance", "\\(\\sqrt{6^2+8^2}=10\\)", "subtract to find a leg"],
    ["5.5 Perimeter", "scale k → P × k; least P for area A: square", "64 m² → 8 × 8", "one side +x → P + 2x"],
    ["5.6 Area", "scale k → A × k²; max A for perimeter P: square; wall → l = 2w", "60 m + wall → 15 × 30", "use perpendicular height"],
    ["5.7 Volume", "Bh; ⅓Bh; ⁴⁄₃πr³; scale → k³", "cone = ⅓ cylinder", "radius, not diameter"],
    ["5.8 Surface area", "area of the net; slant height from Pythagoras; scale → k²", "πr² + πrs", "s ≠ h; open faces"],
  ])),

  section("📌 Which formula?", keyIdea(String.raw`<strong>Boundary or edging?</strong> perimeter. <strong>Covering a flat region?</strong> area. <strong>Wrapping or painting a solid?</strong> surface area. <strong>Filling a solid?</strong> volume/capacity. <strong>Missing side of a right triangle?</strong> Pythagoras. <strong>Missing angle?</strong> triangle, polygon or circle properties.`)),

  practice([
    q("which measure", "How much paint is needed for the outside of a water tower shaped like a sphere? You need its…", choice(["surface area", "volume", "circumference", "radius only"], 0),
      "Paint covers a surface.", ["Covering the outside of a solid: surface area."], "surface area"),
    q("which measure", "How much water fills a cylindrical tank? You need its…", choice(["volume", "surface area", "lateral area", "perimeter"], 0),
      "Filling = space inside.", ["Volume (then convert to litres)."], "volume"),
    q("which property", "The vertex of an unknown angle is on a circle and its arms end at the ends of a diameter. The angle is found by…", choice(["the angle in a semicircle is 90°", "the exterior angle property", "(n − 2) × 180°", "tangent ⟂ radius"], 0),
      "The angle stands on a diameter.", ["Angle in a semicircle = 90°."], "90° rule"),
    q("which tool", String.raw`To find the slant height of a cone with \(r=6\) and \(h=8\) you use…`, choice(["the Pythagorean theorem", "the area of a circle", "the exterior angle property", "a unit factor"], 0),
      "r, h and s form a right triangle.", [String.raw`\(s=\sqrt{36+64}=10\).`], "Pythagoras"),
    q("scaling", "Every dimension of a model is multiplied by 4. Which quantity is multiplied by 64?", choice(["volume", "surface area", "perimeter", "height"], 0),
      "Which measure has three dimensions?", [String.raw`\(4^3=64\).`], "volume"),
  ]),

  examples([
    ["Angles in a design", String.raw`A pentagon \(ABCDE\) is regular. Find \(\angle EAB\) and \(\angle ABE\) (the diagonal \(BE\) makes an isosceles triangle with \(AB\) and \(AE\)).`,
      [String.raw`Each interior angle: \((5-2)\times180^\circ\div5=108^\circ\), so \(\angle EAB=108^\circ\).`, String.raw`\(AB=AE\), so \(\triangle ABE\) is isosceles: \(\angle ABE=(180^\circ-108^\circ)\div2=36^\circ\).`],
      String.raw`\(108^\circ\) and \(36^\circ\)`,
      fig({ w: 240, items: [...polygon([0, 1, 2, 3, 4].map((k) => [Math.cos(((90 + 72 * k) * Math.PI) / 180), Math.sin(((90 + 72 * k) * Math.PI) / 180)]), { names: ["A", "B", "C", "D", "E"], fill: "violet", color: "violet" }), { seg: [[Math.cos((162 * Math.PI) / 180), Math.sin((162 * Math.PI) / 180)], [Math.cos((18 * Math.PI) / 180), Math.sin((18 * Math.PI) / 180)]], color: "red", dash: true }] })],
    ["Units and Pythagoras", String.raw`A rectangular lot is \(120\) ft by \(50\) ft. How long is a diagonal path across it, in metres?`,
      [String.raw`\(d=\sqrt{120^2+50^2}=\sqrt{16\,900}=130\) ft.`, String.raw`\(130\times12=1560\) in; \(1560\times2.54=3962.4\) cm \(\approx39.6\) m.`],
      String.raw`\(130\) ft \(\approx39.6\) m`],
    ["Optimization", String.raw`A rectangular pen against a barn uses \(36\) m of fence on three sides. Find the dimensions with the greatest area, and the area.`,
      [String.raw`Best: side along the barn is twice the width: \(w=36\div4=9\), \(l=36\div2=18\).`, String.raw`Check \(2(9)+18=36\). Area \(9\times18=162\ \text{m}^2\).`],
      String.raw`\(9\) m by \(18\) m, area \(162\ \text{m}^2\)`],
    ["Volume and capacity", String.raw`A cylindrical water tank has diameter \(1.2\) m and height \(1.5\) m. How many litres does it hold?`,
      [String.raw`\(r=0.6\): \(V=\pi(0.6)^2(1.5)=0.54\pi\approx1.696\ \text{m}^3\).`, String.raw`\(1\ \text{m}^3=1000\) L, so about \(1696\) L.`],
      String.raw`about \(1700\) L`,
      fig({ w: 160, items: cylinder(0.6, 1.5, { lr: "0.6 m", lh: "1.5 m" }) })],
    ["Surface area with a slant height", String.raw`A conical roof has radius \(4\) m and height \(3\) m. Shingles cost \(28\) dollars per square metre. Find the cost to shingle the roof (curved surface only).`,
      [String.raw`\(s=\sqrt{4^2+3^2}=5\) m.`, String.raw`Lateral area \(\pi(4)(5)=20\pi\approx62.83\ \text{m}^2\).`, String.raw`Cost \(\approx62.83\times28\approx1759\) dollars.`],
      "about 1759 dollars",
      fig({ w: 200, items: cone(4, 3, { lr: "4 m", lh: "3 m", ls: "s" }) })],
  ]),

  section("📌 Mixed review", String.raw`<p>Each question uses more than one lesson.</p>`),

  practice([
    q("polygon + circle", String.raw`A regular \(9\)-sided polygon is drawn in a circle. Find each central angle (degrees).`, num(40),
      "360° shared equally.", [String.raw`\(360\div9=40\).`], String.raw`\(40^\circ\)`),
    q("units", String.raw`A box is \(0.5\) m by \(0.4\) m by \(0.3\) m. How many litres does it hold?`, num(60),
      "Find m³, then 1 m³ = 1000 L.", [String.raw`\(0.5\times0.4\times0.3=0.06\ \text{m}^3\); \(0.06\times1000=60\).`], String.raw`\(60\) L`),
    q("Pythagoras", String.raw`A square pyramid has base side \(16\) cm and height \(15\) cm. Find its slant height.`, num(17),
      "Legs: the height and half the base.", [String.raw`\(\sqrt{15^2+8^2}=\sqrt{289}=17\).`], String.raw`\(17\) cm`),
    q("scaling", String.raw`A model car is built at scale \(1:20\). The model's paint covers \(150\ \text{cm}^2\). What area does the real car's paint cover, in \(\text{m}^2\)?`, num(6),
      "Area factor 20² = 400; then convert cm² to m².", [String.raw`\(150\times400=60\,000\ \text{cm}^2\); \(60\,000\div10\,000=6\).`], String.raw`\(6\ \text{m}^2\)`),
    q("composite volume", String.raw`A silo is a cylinder (radius \(3\) m, height \(10\) m) with a hemisphere on top. Find its volume to the nearest cubic metre.`, num(339, 0.6),
      "Cylinder πr²h plus half of ⁴⁄₃πr³.", [String.raw`\(90\pi+18\pi=108\pi\approx339.3\).`], String.raw`\(\approx339\ \text{m}^3\)`),
  ]),

  section("📌 Am I ready for the test?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["5.1", "I can describe how different cultures developed geometry and measurement ideas, and use Eratosthenes' and Archimedes' methods."],
      ["5.2", "I can find unknown angles using triangle, polygon and circle properties, and analyse designs."],
      ["5.3", "I can convert lengths, areas, volumes and rates within and between metric and imperial units."],
      ["5.4", "I can find missing sides, test for right angles and find distances with the Pythagorean theorem."],
      ["5.5", "I can find composite perimeters, predict the effect of changing dimensions, and minimize perimeter."],
      ["5.6", "I can find composite areas, use the k² rule, and maximize area for a fixed perimeter."],
      ["5.7", "I can find volumes of prisms, cylinders, pyramids, cones, spheres and composite solids."],
      ["5.8", "I can find surface areas using nets and slant heights."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("solidVolume", { init: "sphere" }),

  wrapUp({
    qas: [
      ["How should I study for this test?", "Do the mixed review without notes. For each mistake, return to that lesson's explorer and practice set, then try the Level 3 worksheet problems for your two weakest lessons."],
      ["What are the most common mistakes?", "Using the diameter instead of the radius, using h instead of the slant height, forgetting the ⅓ for cones and pyramids, converting area or volume units with the length factor, and adding legs instead of squares."],
      ["Which formulas must I memorize?", "Perimeter, circumference and the area formulas, a² + b² = c², V = Bh and ⅓Bh, and the idea of a net. A formula sheet usually gives the sphere and cone formulas — check with your teacher."],
      ["How do I check an answer is reasonable?", "Estimate first (π ≈ 3, round the dimensions), check the units (cm, cm², cm³), and make sure a hypotenuse is the longest side."],
      ["How does this chapter connect to later work?", "Pythagoras becomes the distance formula in Grade 10 analytic geometry; similar triangles and trigonometry extend the angle work; scale factors return in similar figures."],
    ],
    summary: [
      "Angles: triangle 180°, polygon (n − 2)·180°, inscribed = ½ central, semicircle 90°, tangent ⟂ radius.",
      "Units: square for area, cube for volume; 1 in = 2.54 cm; 1 cm³ = 1 mL.",
      "a² + b² = c²; slant heights come from it.",
      "Scale by k: P × k, A and SA × k², V × k³; a square is the optimal rectangle.",
    ],
    next: "Write the Chapter 5 test. Chapter 6 turns to data.",
  }),
];
