// IB AA SL Worksheet 11.1 — Distance, Volume and Surface Area in 3D (teacher edition)
import { svgT } from "./figT.mjs";
import { figDoc, prism, cylinder, cone, pyramid, sphere, cuboidDiag } from "../figs11.mjs";

const S = String.raw;
const T = (items, w = 5.6) => svgT(figDoc({ items }), w);

const EXAMPLES = [
  { title: "3D distance", q: S`Find the distance between $A(3,-1,2)$ and $B(-1,2,14)$.`,
    steps: [S`$\sqrt{4^2+3^2+12^2}=\sqrt{169}$.`], ans: "13" },
  { title: "Midpoint", q: S`Find the midpoint of $P(-4,6,1)$ and $Q(2,0,-7)$.`,
    steps: ["Average each coordinate."], ans: S`$(-1,3,-3)$` },
  { title: "Prism", q: "A triangular prism has a right-triangle cross-section with legs 6 cm and 8 cm and length 15 cm. Find its volume and surface area.",
    steps: [S`$V=\frac12(6)(8)(15)=360$.`, S`$S=2(24)+(6+8+10)(15)=48+360$.`], ans: S`$360$ cm³; $408$ cm²` },
  { title: "Cylinder", q: "A cylinder has diameter 10 cm and height 7 cm. Find its total surface area.",
    fig: T(cylinder(5, 7, { lr: "r = 5", lh: "7" })),
    steps: [S`$2\pi(25)+2\pi(5)(7)=50\pi+70\pi$.`], ans: S`$120\pi\approx377.0$ cm²` },
  { title: "Cone", q: "A cone has radius 8 cm and height 15 cm. Find its slant height and total surface area.",
    fig: T(cone(8, 15, { lr: "r = 8", lh: "h = 15", ls: "l" })),
    steps: [S`$l=\sqrt{64+225}=17$.`, S`$S=64\pi+136\pi$.`], ans: S`$l=17$; $200\pi\approx628.3$ cm²` },
  { title: "Pyramid", q: "A square pyramid has base 12 m and height 8 m. Find its volume and the height of each triangular face.",
    fig: T(pyramid(12, 8, { lb: "12", lh: "h = 8", ls: "" })),
    steps: [S`$V=\frac13(144)(8)=384$.`, S`Face height $\sqrt{6^2+8^2}=10$.`], ans: S`$384$ m³; $10$ m` },
  { title: "Sphere", q: "A sphere has volume 972π cm³. Find its radius and surface area.",
    steps: [S`$\frac43\pi r^3=972\pi\Rightarrow r^3=729$, $r=9$.`, S`$S=4\pi(81)$.`], ans: S`$r=9$; $324\pi\approx1017.9$ cm²` },
  { title: "Space diagonal", q: "Find the length of the space diagonal of a box 12 × 4 × 3.",
    fig: T(cuboidDiag(12, 4, 3)),
    steps: [S`$\sqrt{144+16+9}=\sqrt{169}$.`], ans: "13" },
  { title: "Composite", q: "An ice-cream cone of radius 3 cm and height 10 cm is topped by a hemisphere of radius 3 cm. Find the total volume.",
    steps: [S`Cone $\frac13\pi(9)(10)=30\pi$; hemisphere $\frac23\pi(27)=18\pi$.`], ans: S`$48\pi\approx150.8$ cm³` },
];

const PROBLEMS = [
  { level: 1, q: S`Find the distance from $(0,0,0)$ to $(4,4,7)$.`, recap: "3D distance.", ans: "9" },
  { level: 1, q: S`Find the volume of a cuboid 5 × 9 × 4.`, recap: "lwh.", ans: "180" },
  { level: 1, q: S`Find the volume of a sphere of radius 6 (exact).`, recap: S`$\frac43\pi r^3$.`, ans: S`$288\pi$` },
  { level: 2, q: S`Find the midpoint of $(2,-3,8)$ and $(10,5,-2)$, and the distance between them.`, recap: "Both formulas.", ans: S`$(6,1,3)$; $\sqrt{64+64+100}=\sqrt{228}\approx15.10$` },
  { level: 2, q: "A cylinder has volume 500π and radius 5. Find its height and curved surface area.", recap: "Rearrange.", ans: S`$h=20$; $200\pi$` },
  { level: 2, q: "A cone has slant height 13 and radius 5. Find its volume.", recap: "h first.", ans: S`$h=12$; $100\pi$` },
  { level: 2, q: "Find the total surface area of a hemisphere of radius 7 (1 d.p.).", recap: S`$3\pi r^2$.`, ans: S`$147\pi\approx461.8$` },
  { level: 2, q: "Label the solid and find its volume: square pyramid, base 6, height 10.", recap: "⅓ base × h.", ans: "120",
    fig: T(pyramid(6, 10, { lb: "6", lh: "h = 10", ls: "" }), 4.8) },
  { level: 3, space: 4, q: S`The distance from $(1,2,k)$ to $(4,6,0)$ is $\sqrt{41}$. Find $k$.`, recap: "Equation in k.", ans: S`$9+16+k^2=41\Rightarrow k=\pm4$` },
  { level: 3, space: 4, q: "A sphere and a cylinder both have radius r; the cylinder has height 2r. Show that the sphere's volume is ⅔ of the cylinder's.", recap: "Ratio.", ans: S`$\frac{4/3\pi r^3}{2\pi r^3}=\frac23$` },
  { level: 3, space: 4, q: "A solid metal sphere of radius 6 cm is melted and recast into a cone of radius 6 cm. Find the height of the cone.", recap: "Equal volumes.", ans: S`$288\pi=12\pi h\Rightarrow h=24$ cm` },
  { level: 3, space: 4, q: "A square pyramid has all eight edges of length 10. Find its height and volume.", recap: "Half-diagonal.", ans: S`$h=\sqrt{100-50}=5\sqrt2$; $V=\frac{500\sqrt2}{3}\approx235.7$` },
  { level: 3, space: 4, q: "A cylinder of radius 4 and height 9 has a cone of the same base and height removed. Find the remaining volume and total surface area.", recap: "Subtract; add exposed surfaces.", ans: S`$V=96\pi$; $S=16\pi+72\pi+4\pi\sqrt{97}\approx400.2$` },
];

export const WS = {
  code: "11.1",
  title: "Distance, Volume and Surface Area in 3D",
  bigideas: S`In 3D, $d=\sqrt{\Delta x^2+\Delta y^2+\Delta z^2}$ and the midpoint averages the coordinates. Prism/cylinder: $V=$ base area × height; cylinder $S=2\pi r^2+2\pi rh$. Pyramid/cone: $V=\frac13\times$ base area × height; cone $S=\pi r^2+\pi rl$ with slant height $l=\sqrt{r^2+h^2}$. Sphere: $V=\frac43\pi r^3$, $S=4\pi r^2$.`,
  goals: ["Find 3D distance and midpoint.", "Find volumes.", "Find surface areas.", "Handle composite solids."],
  curriculum: "SL 3.1",
  vocab: [["Slant height", S`$l=\sqrt{r^2+h^2}$`], ["Space diagonal", "corner to opposite corner"], ["Hemisphere", "half a sphere"]],
  hook: "How much wrapping paper covers a cylindrical tin, and how much soup fits inside? Which question needs area and which needs volume?",
  concepts: [
    ["1. 3D distance", S`${T(cuboidDiag(6, 3, 2), 4.6)} Pythagoras twice.`],
    ["2. Volume", "Prism-type vs pyramid-type (⅓)."],
    ["3. Surface area", "Add every exposed face."],
  ],
  tips: ["Perpendicular height for volume.", "Slant height for curved area.", "Hemisphere: include the flat face.", "Keep π exact.", "Check units."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
