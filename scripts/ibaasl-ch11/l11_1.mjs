// IB AA SL 11.1 — Distance, Volume and Surface Area in 3D: 3D coordinates, distance and midpoint, volume and surface area of prisms, cylinders, pyramids, cones and spheres, composite solids
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { fig, prism, cylinder, cone, pyramid, sphere, cuboidDiag } from "./figs11.mjs";

export const TITLE = "11.1 Distance, Volume and Surface Area in 3D";
export const ID = "737ccd6c-d6d4-422a-b59e-1e1dc9c07117";
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🧊",
    title: "Distance, Volume and Surface Area in 3D",
    overview: S`Three-dimensional problems need a third coordinate. The distance between two points in space extends Pythagoras with a \(z\)-term, and the midpoint averages all three coordinates. In this lesson you will use these formulas, find the volume and surface area of prisms, cylinders, pyramids, cones and spheres, and combine them for composite solids.`,
    goals: [
      S`find the distance \(\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}\) and midpoint of two points in 3D;`,
      "find the volume and surface area of right prisms and cylinders;",
      "find the volume and surface area of right pyramids and cones;",
      "find the volume and surface area of spheres and hemispheres;",
      "solve problems with composite solids and unknown dimensions.",
    ],
    curriculum: "SL 3.1 (distance and midpoint in 3D; volume and surface area of 3D solids)",
    prior: [
      [S`Find the distance from \((1,2)\) to \((4,6)\).`, "5."],
      [S`Area of a circle of radius 3?`, S`\(9\pi\).`],
      [S`Volume of a cuboid 2 × 3 × 4?`, "24."],
    ],
    words: [
      ["3D coordinates", S`\((x,y,z)\)`, S`\((2,-1,5)\)`],
      ["Right prism / cylinder", "constant cross-section; V = area × height", ""],
      ["Right pyramid / cone", "apex above the centre of the base; V = ⅓ base × height", ""],
      ["Slant height", "distance from apex to the edge of the base along a face", S`\(l=\sqrt{r^2+h^2}\)`],
      ["Hemisphere", "half a sphere", ""],
    ],
  }),

  section("📌 Distance and midpoint in 3D", S`
  <p>For \(A(1,-2,3)\) and \(B(7,1,1)\): the differences are 6, 3 and −2, so \(AB=\sqrt{36+9+4}=7\), and the midpoint is \(\left(4,-\frac12,2\right)\). The formula is Pythagoras used twice: first across the floor, then up the height.</p>
  ${fig({ items: cuboidDiag(6, 3, 2, { ll: "Δx = 6", lw: "Δy = 3", lh: "Δz = 2" }) }, "The space diagonal: floor diagonal √(6² + 3²) (green dashed), then up 2: √(36 + 9 + 4) = 7")}
  ${keyIdea("d = √((Δx)² + (Δy)² + (Δz)²); midpoint = average of the coordinates.")}`),

  section("📌 Prisms and cylinders", S`
  ${table(["Solid", "Volume", "Surface area"], [
    ["right prism", "base area × height", "2 × base + perimeter × height"],
    ["cylinder", S`\(\pi r^2h\)`, S`\(2\pi r^2+2\pi rh\)`],
  ])}
  ${fig({ items: prism(7, 4, 5) }, "Cuboid 7 × 4 × 5: V = 140, S = 2(28 + 20 + 35) = 166")}
  ${fig({ items: cylinder(3, 8, { lr: "r = 3", lh: "h = 8" }) }, "Cylinder: V = 72π ≈ 226.2, S = 18π + 48π = 66π ≈ 207.3")}`),

  section("📌 Pyramids, cones and spheres", S`
  ${table(["Solid", "Volume", "Surface area"], [
    ["right pyramid", S`\(\frac13\times\text{base area}\times h\)`, "base + triangular faces"],
    ["right cone", S`\(\frac13\pi r^2h\)`, S`\(\pi r^2+\pi rl\)`],
    ["sphere", S`\(\frac43\pi r^3\)`, S`\(4\pi r^2\)`],
    ["hemisphere", S`\(\frac23\pi r^3\)`, S`\(3\pi r^2\) (curved \(2\pi r^2\) + base \(\pi r^2\))`],
  ])}
  ${fig({ items: cone(5, 12, { lr: "r = 5", lh: "h = 12", ls: "l = 13" }) }, "Cone r = 5, h = 12: slant height l = 13; V = 100π, S = 25π + 65π = 90π")}
  ${fig({ items: pyramid(8, 3, { lb: "8", lh: "h = 3", ls: "5" }) }, "Square pyramid, base 8, height 3: face height √(4² + 3²) = 5; V = 64, S = 64 + 4 × ½ × 8 × 5 = 144")}
  ${fig({ items: sphere(4, { lr: "r = 4" }) }, "Sphere r = 4: V = 256π/3 ≈ 268.1, S = 64π ≈ 201.1")}
  ${watchOut([
    "Use the perpendicular height h for volume, but the slant height for curved or triangular surface area.",
    "Check units: area in square units, volume in cubic units.",
    "A hemisphere's total surface area includes the flat circular face.",
    "Keep π exact until the end when asked for an exact answer.",
  ])}`),

  section("📌 Explore", S`<p>Choose a solid and change its dimensions. For the cuboid, watch the space diagonal and its angle with the base.</p>`),

  widget("ibSolid", { init: [2, 8, 6, 3] }),

  examples([
    ["Level 1 · Distance", S`Find the distance between \(P(-2,4,1)\) and \(Q(4,1,-1)\), and the midpoint of PQ.`,
      [S`\(\sqrt{6^2+3^2+2^2}=\sqrt{49}\).`, S`Midpoint \(\left(1,\frac52,0\right)\).`],
      S`\(7\); \(\left(1,\frac52,0\right)\)`],
    ["Level 1 · Cylinder", S`A can has radius 4 cm and height 11 cm. Find its volume and total surface area.`,
      [S`\(V=\pi(16)(11)=176\pi\).`, S`\(S=2\pi(16)+2\pi(4)(11)=32\pi+88\pi\).`],
      S`\(176\pi\approx552.9\) cm³; \(120\pi\approx377.0\) cm²`],
    ["Level 2 · Cone", S`A cone has radius 9 cm and slant height 15 cm. Find its height and volume.`,
      [S`\(h=\sqrt{15^2-9^2}=12\).`, S`\(V=\frac13\pi(81)(12)\).`],
      S`\(h=12\); \(324\pi\approx1017.9\) cm³`,
      fig({ items: cone(9, 12, { lr: "r = 9", lh: "h", ls: "15" }) })],
    ["Level 2 · Unknown dimension", S`A sphere has surface area \(196\pi\) cm². Find its volume.`,
      [S`\(4\pi r^2=196\pi\Rightarrow r=7\).`, S`\(V=\frac43\pi(343)\).`],
      S`\(\frac{1372}{3}\pi\approx1436.8\) cm³`],
    ["Level 3 · Composite solid", S`A capsule is a cylinder of radius 3 and length 10 with a hemisphere on each end. Find its volume and surface area.`,
      [S`Two hemispheres make a sphere: \(\frac43\pi(27)=36\pi\).`, S`Cylinder \(\pi(9)(10)=90\pi\); total \(126\pi\).`, S`Area: sphere \(4\pi(9)=36\pi\) plus curved cylinder \(2\pi(3)(10)=60\pi\).`],
      S`\(V=126\pi\approx395.8\); \(S=96\pi\approx301.6\)`],
  ]),

  practice([
    q("Level 1 · distance", S`Find the distance from \((0,0,0)\) to \((2,3,6)\).`, num(7),
      "√(4 + 9 + 36).", [S`\(\sqrt{49}\).`], S`\(7\)`),
    q("Level 1 · midpoint", S`The midpoint of \((3,-5,8)\) and \((7,1,-2)\) has z-coordinate:`, num(3),
      "Average.", [S`\(\frac{8-2}{2}\).`], S`\(3\)`),
    q("Level 2 · pyramid", S`A square pyramid has base side 9 and height 10. Find its volume.`, num(270),
      "⅓ × 81 × 10.", [S`\(270\).`], S`\(270\)`),
    q("Level 2 · hemisphere", S`Find the total surface area of a hemisphere of radius 5 (1 d.p.).`, num(75 * Math.PI, 0.1),
      "3πr².", [S`\(75\pi\).`], S`\(\approx235.6\)`),
    q("Level 2 · cone area", S`The curved surface area of a cone with radius 6 and slant height 10 is:`, choice([S`\(60\pi\)`, S`\(36\pi\)`, S`\(96\pi\)`, S`\(120\pi\)`], 0),
      "πrl.", [S`\(\pi(6)(10)\).`], S`\(60\pi\)`),
  ]),

  ...hard([
    ["Finding an unknown coordinate", S`The distance from \(A(2,k,1)\) to \(B(5,3,-5)\) is 9. Find the possible values of \(k\).`,
      [S`\(9+(3-k)^2+36=81\Rightarrow(3-k)^2=36\).`, S`\(3-k=\pm6\).`],
      S`\(k=-3\) or \(k=9\)`],
    ["Cone inside a cylinder", S`A cone fits exactly inside a cylinder of radius 6 and height 10 (same base and height). Find the volume of the space between them, and the ratio of the volumes.`,
      [S`Cylinder \(360\pi\); cone \(\frac13(360\pi)=120\pi\).`, S`Space \(240\pi\approx754.0\); ratio cone : cylinder \(=1:3\).`],
      S`\(240\pi\); \(1:3\)`,
      fig({ items: [...cylinder(6, 10, { lr: "r = 6", lh: "h = 10" }), ...cone(6, 10, { lr: "", lh: "", fill: "amber" })] }, "A cone in a cylinder with the same base and height")],
  ], [
    q("Level 3 · sphere from volume", S`A sphere has volume \(36\pi\). Find its surface area (as a multiple of \(\pi\)): k = ?`, num(36),
      "r³ = 27.", [S`\(r=3\); \(4\pi(9)=36\pi\).`], S`\(36\)`),
    q("Level 3 · space diagonal", S`A cube has space diagonal \(6\sqrt3\). Find its volume.`, num(216),
      "s√3 = 6√3.", [S`\(s=6\).`], S`\(216\)`),
    q("Level 3 · composite", S`A tower is a cylinder (radius 2, height 9) topped by a cone (radius 2, height 3). Find its volume (1 d.p.).`, num(40 * Math.PI, 0.1),
      "36π + 4π.", [S`\(40\pi\).`], S`\(\approx125.7\)`),
  ]),

  wrapUp({
    qas: [
      ["How is 3D distance related to Pythagoras?", "Apply it across the floor, then up the height: d² = Δx² + Δy² + Δz²."],
      ["Which height do I use for a cone's volume?", "The perpendicular height h, not the slant height."],
      ["Why ⅓ for pyramids and cones?", "Three such pyramids fill the prism with the same base and height."],
      ["What is a hemisphere's total surface area?", "2πr² curved + πr² flat = 3πr²."],
      ["How do I handle a composite solid?", "Split into standard solids; add volumes; add only the exposed surfaces."],
    ],
    summary: [
      "d = √(Δx² + Δy² + Δz²); midpoint averages coordinates.",
      "Prism/cylinder: V = base × h; cylinder S = 2πr² + 2πrh.",
      "Pyramid/cone: V = ⅓ base × h; cone S = πr² + πrl.",
      "Sphere: V = ⁴⁄₃πr³, S = 4πr².",
    ],
    next: "11.2 uses trigonometry in right-angled triangles.",
  }),
];
