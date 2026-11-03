// MTH1W 5.7 — Volume (self-study format): prisms, cylinders, pyramids, cones, spheres, composite solids, k³
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { fig, prism, triPrism, cylinder, cone, pyramid, sphere } from "./figs5.mjs";

export const TITLE = "5.7 Volume";

const shift = (items, dx, dy = 0) => items.map((it) => {
  const m = (p) => [p[0] + dx, p[1] + dy];
  const o = { ...it };
  if (o.poly) o.poly = o.poly.map(m); if (o.seg) o.seg = o.seg.map(m); if (o.dot) o.dot = m(o.dot); if (o.at) o.at = m(o.at);
  if (o.circle) o.circle = [o.circle[0] + dx, o.circle[1] + dy, o.circle[2]]; if (o.ellipse) o.ellipse = [o.ellipse[0] + dx, o.ellipse[1] + dy, o.ellipse[2], o.ellipse[3]];
  if (o.right) o.right = o.right.map(m); if (o.dim) o.dim = o.dim.map(m); if (o.arc) o.arc = o.arc.map(m);
  return o;
});

export const blocks = () => [
  intro({
    icon: "🧊",
    title: "Volume",
    overview: String.raw`Volume is the amount of space a solid takes up — the concrete in a foundation, the water in a pool, the cereal in a box. One idea covers every prism and cylinder: area of the base times the height. Pyramids and cones hold exactly one third of that, and a sphere has its own formula. You will use these, combine them for composite solids, and see why doubling every length makes the volume eight times as big.`,
    goals: [
      "find the volume of any prism or cylinder as (area of base) × height;",
      "find the volume of pyramids and cones as one third of the matching prism or cylinder;",
      "find the volume of a sphere;",
      "find volumes of composite solids and convert to capacity (mL, L);",
      "explain why scaling every length by \\(k\\) multiplies the volume by \\(k^3\\).",
    ],
    curriculum: "E1.4 (how changing dimensions affects volume), E1.6 (solve problems involving volume of prisms, pyramids, cylinders, cones and spheres)",
    prior: [
      [String.raw`Area of a circle with radius \(3\)?`, String.raw`\(9\pi\approx28.3\).`],
      [String.raw`\(\tfrac13\times27=?\)`, String.raw`\(9\).`],
      [String.raw`How many mL are in \(1\ \text{cm}^3\)?`, String.raw`\(1\) mL.`],
    ],
    words: [
      ["Volume", "number of unit cubes that fill a solid", "\\(\\text{cm}^3\\)"],
      ["Prism", "solid with two identical parallel bases joined by rectangles", "triangular prism"],
      ["Cylinder", "prism-like solid with circular bases", "a can"],
      ["Pyramid / cone", "solid that narrows from a base to a single point (apex)", "\\(\\tfrac13Bh\\)"],
      ["Sphere", "all points at distance r from a centre", "\\(\\tfrac43\\pi r^3\\)"],
    ],
  }),

  section("📌 Prisms and cylinders: base × height", String.raw`
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;">
  ${fig({ w: 200, items: prism(5, 3, 4, { ll: "l", lw: "w", lh: "h" }) }, "V = lwh")}
  ${fig({ w: 200, items: triPrism(4, 3, 6, { lb: "b", lt: "t", lL: "L" }) }, "V = (½bt) × L")}
  ${fig({ w: 150, items: cylinder(2, 5, { lr: "r", lh: "h" }) }, "V = πr²h")}
  </div>
  ${keyIdea(String.raw`For every prism and cylinder: \(V=(\text{area of base})\times(\text{height})\). Stack identical layers shaped like the base, one unit thick, up to the height. The “height” is the distance between the two bases — for a lying-down prism it may be horizontal.`)}`),

  section("📌 Pyramids, cones and spheres", String.raw`
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px;">
  ${fig({ w: 190, items: pyramid(4, 5, { lb: "b", lh: "h" }) }, "V = ⅓ b²h")}
  ${fig({ w: 160, items: cone(2, 5, { lr: "r", lh: "h" }) }, "V = ⅓ πr²h")}
  ${fig({ w: 160, items: sphere(2, { lr: "r" }) }, "V = ⁴⁄₃ πr³")}
  </div>
  ${keyIdea(String.raw`A pyramid or cone holds exactly \(\tfrac13\) of the prism or cylinder with the same base and height: \(V=\tfrac13(\text{area of base})h\). Fill a cone with water three times to fill the matching cylinder. A sphere holds \(\tfrac23\) of the cylinder that just fits around it: \(\tfrac23\pi r^2(2r)=\tfrac43\pi r^3\).`)}
  ${table(["Solid", "Volume"], [["rectangular prism", "\\(V=lwh\\)"], ["any prism", "\\(V=Bh\\) (B = area of base)"], ["cylinder", "\\(V=\\pi r^2h\\)"], ["pyramid", "\\(V=\\tfrac13Bh\\)"], ["cone", "\\(V=\\tfrac13\\pi r^2h\\)"], ["sphere", "\\(V=\\tfrac43\\pi r^3\\)"]])}`),

  widget("solidVolume", { init: "cone" }),

  section("📌 Scaling: volume grows by k³", String.raw`
  <p>Double every edge of a \(1\times1\times1\) cube: it becomes \(2\times2\times2\) and holds \(8\) of the original cubes.</p>
  ${fig({ w: 300, items: [...prism(1, 1, 1, { ll: "1", lw: "", lh: "" }), ...shift(prism(2, 2, 2, { ll: "2", lw: "", lh: "" }), 2.2)] }, "k = 2: volume × 2³ = 8.")}
  ${keyIdea(String.raw`Scaling every length by \(k\) multiplies the volume by \(k^3\). Changing only one dimension (say the height) by a factor multiplies the volume by that factor once.`)}
  ${watchOut([
    "Use the radius: if you are given the diameter, halve it first.",
    "The height of a pyramid or cone is perpendicular to the base — not the slant height.",
    "Cones and pyramids: don't forget the ⅓.",
    "Volume units are cubed: cm³, m³. 1 cm³ = 1 mL.",
  ])}`),

  examples([
    ["A tent (triangular prism)", String.raw`A tent is a triangular prism. Its triangular end has base \(3\) m and height \(2\) m, and the tent is \(4\) m long. Find the volume of air inside.`,
      [String.raw`<b>Formula for any prism.</b> \[V=(\text{area of the base})\times(\text{length})\] The base is the shape that repeats along the prism: here the triangle.`,
        String.raw`<b>Area of the base:</b> \(A=\tfrac12bh=\tfrac12(3)(2)=3\ \text{m}^2\).`,
        String.raw`<b>Volume:</b> \(V=3\times4=12\ \text{m}^3\).`,
        String.raw`<b>Check.</b> The tent is half of a \(3\times2\times4\) box: \(\tfrac12(24)=12\) ✓.`],
      String.raw`\(12\ \text{m}^3\)`,
      fig({ w: 260, items: triPrism(3, 2, 4, { lb: "3 m", lt: "2 m", lL: "4 m", ax: 1.5 }) })],
    ["A soup can (cylinder)", String.raw`A can has radius \(3.5\) cm and height \(11\) cm. How many millilitres does it hold?`,
      [String.raw`<b>Formula.</b> A cylinder is a prism with a circular base: \[V=\pi r^2h\]`,
        String.raw`<b>Base area:</b> \(\pi(3.5)^2=12.25\pi\ \text{cm}^2\).`,
        String.raw`<b>Volume:</b> \(12.25\pi\times11=134.75\pi\approx423.3\ \text{cm}^3\).`,
        String.raw`<b>Capacity.</b> \(1\ \text{cm}^3=1\) mL, so the can holds about \(423\) mL.`],
      String.raw`about \(423\) mL`,
      fig({ w: 150, items: cylinder(3.5, 11, { lr: "3.5 cm", lh: "11 cm" }) })],
    ["The Great Pyramid", String.raw`The Great Pyramid of Giza had a square base about \(230\) m on each side and a height of about \(146\) m. Estimate its volume.`,
      [String.raw`<b>Formula.</b> A pyramid is one third of the prism with the same base and height: \[V=\tfrac13(\text{base area})(h)\]`,
        String.raw`<b>Base area</b> (a square): \(230^2=52\,900\ \text{m}^2\).`,
        String.raw`<b>Multiply by the height:</b> \(52\,900\times146=7\,723\,400\).`,
        String.raw`<b>Take one third:</b> \(7\,723\,400\div3\approx2\,574\,467\ \text{m}^3\).`],
      String.raw`about \(2.6\) million \(\text{m}^3\)`,
      fig({ w: 240, items: pyramid(10, 6.3, { lb: "230 m", lh: "146 m" }) })],
    ["Cone vs cylinder", String.raw`A paper cone cup has radius \(4\) cm and height \(9\) cm. A cylindrical glass has the same radius and height. How many cupfuls fill the glass?`,
      [String.raw`<b>Formulas.</b> \[V_{\text{cylinder}}=\pi r^2h,\qquad V_{\text{cone}}=\tfrac13\pi r^2h\]`,
        String.raw`<b>Cone:</b> \(\tfrac13\pi(4)^2(9)=\tfrac13\pi(16)(9)=48\pi\approx150.8\ \text{cm}^3\).`,
        String.raw`<b>Cylinder:</b> \(\pi(4)^2(9)=144\pi\approx452.4\ \text{cm}^3\).`,
        String.raw`<b>Compare:</b> \(144\pi\div48\pi=3\).`,
        String.raw`<b>Why exactly 3?</b> The cone formula is the cylinder formula times \(\tfrac13\), so any cone holds exactly one third of the matching cylinder.`],
      "exactly 3 cupfuls",
      fig({ w: 260, items: [...cylinder(4, 9, { lr: "4 cm", lh: "9 cm" }), ...shift(cone(4, 9, { lr: "4 cm", lh: "9 cm" }), 12)] })],
    ["Composite: ice-cream cone", String.raw`A cone with radius \(3\) cm and height \(12\) cm is filled with ice cream and topped with a hemisphere of the same radius. Find the total volume of ice cream.`,
      [String.raw`<b>Plan.</b> Composite solid \(=\) cone \(+\) hemisphere (half a sphere).`,
        String.raw`<b>Cone:</b> \(V=\tfrac13\pi r^2h=\tfrac13\pi(3)^2(12)=\tfrac13\pi(9)(12)=36\pi\).`,
        String.raw`<b>Hemisphere.</b> Sphere: \(V=\tfrac43\pi r^3\); half of it: \(\tfrac12\cdot\tfrac43\pi(3)^3=\tfrac23\pi(27)=18\pi\).`,
        String.raw`<b>Total:</b> \(36\pi+18\pi=54\pi\approx169.6\ \text{cm}^3\).`],
      String.raw`\(54\pi\approx169.6\ \text{cm}^3\)`,
      fig({ w: 160, items: [
        { poly: Array.from({ length: 31 }, (_, i) => [3 * Math.cos((Math.PI * i) / 30), 12 + 3 * Math.sin((Math.PI * i) / 30)]), fill: "#fce7f3", color: "red" },
        { poly: [[-3, 12], [0, 0], [3, 12]], fill: "amber", color: "amber" },
        { ellipse: [0, 12, 3, 0.9], fill: "#fde68a", color: "amber", width: 1.5 },
        { seg: [[0, 12], [3, 12]], color: "red", width: 1.6 }, { text: "3 cm", at: [1.5, 12.9], color: "red", bold: true, size: 12 },
        { seg: [[0, 0], [0, 12]], color: "gray", dash: true, width: 1.3 }, { text: "12 cm", at: [0.4, 5], color: "gray", bold: true, anchor: "start", size: 12 },
      ] })],
  ]),

  practice([
    q("prism", String.raw`Find the volume of a rectangular prism \(2.5\) cm by \(4\) cm by \(6\) cm.`, num(60),
      "V = lwh.", [String.raw`\(2.5\times4\times6=60\).`], String.raw`\(60\ \text{cm}^3\)`),
    q("cylinder", String.raw`Find the volume of a cylinder with radius \(5\) m and height \(8\) m, to the nearest tenth.`, num(628.3, 0.06),
      "V = πr²h.", [String.raw`\(\pi(25)(8)=200\pi\approx628.32\).`], String.raw`\(\approx628.3\ \text{m}^3\)`),
    q("pyramid", String.raw`A pyramid has a \(9\) cm by \(9\) cm square base and height \(10\) cm. Find its volume.`, num(270),
      "V = ⅓ × area of base × height.", [String.raw`\(\tfrac13(81)(10)=270\).`], String.raw`\(270\ \text{cm}^3\)`),
    q("sphere", String.raw`Find the volume of a sphere with radius \(6\) cm, to the nearest tenth.`, num(904.8, 0.06),
      "V = ⁴⁄₃πr³.", [String.raw`\(\tfrac43\pi(216)=288\pi\approx904.78\).`], String.raw`\(\approx904.8\ \text{cm}^3\)`),
    q("scaling", String.raw`Every edge of a box is doubled. By what number is the volume multiplied?`, num(8),
      "Volume factor = k³.", [String.raw`\(2^3=8\).`], String.raw`\(8\)`),
  ]),

  wrapUp({
    qas: [
      ["Why is a cone exactly one third of a cylinder?", "It can be shown by filling experiments and proved with more advanced math (calculus). For pyramids, three identical pyramids can be fitted together to make a cube."],
      ["What counts as the base of a prism?", "The two identical parallel faces. A triangular prism's base is a triangle even when the prism lies on a rectangular face."],
      ["Why does volume grow by k³?", "Volume has three dimensions — length, width and height — and each is multiplied by k, so the volume is multiplied by k × k × k."],
      ["How do I handle a composite solid?", "Split it into solids you know, find each volume, then add (or subtract a hole). Make sure the pieces don't overlap."],
      ["How do I turn a volume into litres?", "In cm³: divide by 1000 to get litres (1000 cm³ = 1 L). In m³: multiply by 1000 (1 m³ = 1000 L)."],
    ],
    summary: [
      "Prism or cylinder: V = (area of base) × height; cylinder V = πr²h.",
      "Pyramid or cone: V = ⅓ (area of base) × height.",
      "Sphere: V = ⁴⁄₃πr³.",
      "Scaling by k multiplies volume by k³; 1 cm³ = 1 mL.",
    ],
    next: "5.8 finds the surface area of the same solids.",
  }),
];
