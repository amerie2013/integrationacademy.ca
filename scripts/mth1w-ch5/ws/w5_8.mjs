// Worksheet 5.8 — Surface Area (teacher edition)
import { figT } from "./figT.mjs";
import { prism, triPrism, cone, pyramid, prismNet, cylinderNet } from "../figs5.mjs";

const EXAMPLES = [
  { title: "Prism from its net", q: String.raw`Find the surface area of a $12$ cm by $5$ cm by $3$ cm box.`,
    fig: figT(prismNet(12, 3, 5), 5.2),
    steps: [String.raw`Faces: $2(12\times5)+2(12\times3)+2(5\times3)$.`, String.raw`$=120+72+30=222$ cm$^2$.`], ans: String.raw`$222$ cm$^2$` },
  { title: "Triangular prism", q: String.raw`A ramp is a triangular prism: right-triangle ends with a horizontal leg of $1.2$ m and a vertical leg of $0.5$ m, and a width of $2$ m. Find its total surface area.`,
    steps: [String.raw`Hypotenuse $=\sqrt{1.2^2+0.5^2}=1.3$ m.`, String.raw`Two triangles: $2\times\tfrac12(1.2)(0.5)=0.6$ m$^2$.`, String.raw`Rectangles: $2\times(1.2+0.5+1.3)=6$ m$^2$; total $6.6$ m$^2$.`], ans: String.raw`$6.6$ m$^2$` },
  { title: "Cylinder label", q: String.raw`A can has diameter $7.5$ cm and height $11$ cm. Find the area of its paper label (the curved surface) and of the whole can.`,
    fig: figT(cylinderNet(3.75, 11, { lr: "r = 3.75", lh: "11 cm", lc: "2πr" }), 3.4),
    steps: [String.raw`Label: $2\pi(3.75)(11)=82.5\pi\approx259.2$ cm$^2$.`, String.raw`Ends: $2\pi(3.75)^2=28.125\pi\approx88.4$ cm$^2$; total $\approx347.5$ cm$^2$.`], ans: String.raw`label $\approx259.2$ cm$^2$; can $\approx347.5$ cm$^2$` },
  { title: "Pyramid from its height", q: String.raw`A square pyramid has base side $16$ m and height $6$ m. Find its surface area.`,
    fig: figT(pyramid(16, 6, { lb: "16 m", lh: "6 m", ls: "s" }), 3.6),
    steps: [String.raw`$s=\sqrt{6^2+8^2}=10$ m.`, String.raw`$SA=16^2+4\times\tfrac12(16)(10)=256+320=576$ m$^2$.`], ans: String.raw`$576$ m$^2$` },
  { title: "Cone", q: String.raw`A party hat (no base) is a cone with radius $8$ cm and height $15$ cm. How much paper is needed?`,
    steps: [String.raw`$s=\sqrt{8^2+15^2}=17$ cm.`, String.raw`Lateral area $=\pi(8)(17)=136\pi\approx427.3$ cm$^2$.`], ans: String.raw`$\approx427$ cm$^2$` },
  { title: "Sphere", q: String.raw`Find the leather needed to cover a ball of diameter $22$ cm.`,
    steps: [String.raw`$r=11$: $SA=4\pi(11)^2=484\pi\approx1520.5$ cm$^2$.`], ans: String.raw`$\approx1520.5$ cm$^2$` },
  { title: "Composite: hidden faces", q: String.raw`A $2$ m cube sits centred on top of a $4$ m by $4$ m by $1$ m block. Find the exposed surface area (the bottom of the block is on the ground).`,
    steps: [String.raw`Block: top $16$ + four sides $4\times(4\times1)=16$; total $32$, minus the $4$ m$^2$ covered by the cube $=28$.`, String.raw`Cube: $5$ faces $\times4=20$ (its bottom is hidden).`, String.raw`Total $28+20=48$ m$^2$.`], ans: String.raw`$48$ m$^2$` },
  { title: "Scaling surface area", q: String.raw`A model ship is built at scale $1:50$. Its painted surface is $240$ cm$^2$. Find the real painted area in m$^2$.`,
    steps: [String.raw`Area factor $50^2=2500$: $240\times2500=600\,000$ cm$^2$.`, String.raw`$\div10\,000$: $60$ m$^2$.`], ans: String.raw`$60$ m$^2$` },
  { title: "Comparing designs", q: String.raw`Two containers each hold about $1$ L: a cube of edge $10$ cm and a cylinder with $r=5.42$ cm, $h=10.84$ cm. Which uses less material?`,
    steps: [String.raw`Cube: $6\times100=600$ cm$^2$.`, String.raw`Cylinder: $2\pi(5.42)^2+2\pi(5.42)(10.84)\approx184.6+369.2=553.8$ cm$^2$.`], ans: String.raw`the cylinder ($h=2r$ is the best cylinder)` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the surface area of a $9$ cm by $4$ cm by $2$ cm rectangular prism.`, recap: "Prism 9 × 4 × 2.", ans: String.raw`$124$ cm$^2$` },
  { level: 1, q: String.raw`Find the surface area of a closed cylinder with $r=5$ m and $h=12$ m (nearest tenth).`, recap: "Cylinder r 5, h 12.", ans: String.raw`$170\pi\approx534.1$ m$^2$` },
  { level: 1, q: String.raw`Find the surface area of a sphere with radius $4$ cm.`, recap: "Sphere r = 4.", ans: String.raw`$64\pi\approx201.1$ cm$^2$` },
  { level: 2, q: String.raw`A square pyramid has base $10$ cm and height $12$ cm. Find the slant height and the surface area.`, recap: "Pyramid b 10, h 12.", ans: String.raw`$s=13$; $SA=100+260=360$ cm$^2$` },
  { level: 2, q: String.raw`A cone has radius $9$ cm and height $12$ cm. Find its total surface area.`, recap: "Cone r 9, h 12.", ans: String.raw`$s=15$; $81\pi+135\pi=216\pi\approx678.6$ cm$^2$` },
  { level: 2, q: String.raw`An open-top fish tank is $60$ cm by $30$ cm by $35$ cm tall. How much glass is used?`, recap: "Open tank.", ans: String.raw`$1800+2(2100)+2(1050)=8100$ cm$^2$` },
  { level: 2, q: String.raw`A tent (triangular prism) has isosceles ends with base $2.4$ m and sloping sides $2$ m, and is $3$ m long. Find the fabric for the ends and roof (no floor).`, recap: "Tent, no floor.", ans: String.raw`height $1.6$ m; ends $2\times1.92=3.84$; roof $2\times6=12$; $15.84$ m$^2$` },
  { level: 2, q: String.raw`The surface area of a cube is $150$ cm$^2$. Find its edge and volume.`, recap: "Cube SA 150.", ans: String.raw`$s=5$ cm; $125$ cm$^3$` },
  { level: 3, space: 5, q: String.raw`A silo is a cylinder ($r=3$ m, $h=12$ m) with a hemisphere roof. Paint costs $4.50$ dollars per m$^2$. Find the cost to paint the curved wall and the roof.`, recap: "Painting a silo.", ans: String.raw`wall $72\pi$, roof $18\pi$: $90\pi\approx282.7$ m$^2$; $\approx1272$ dollars` },
  { level: 3, space: 5, q: String.raw`A cylinder has $r=4$ cm and $h=10$ cm. (a) Find its surface area. (b) Find the surface area if the radius is doubled. (c) Explain why the surface area did not simply double or quadruple.`, recap: "Double the radius.", ans: String.raw`(a) $112\pi$ (b) $128\pi+160\pi=288\pi$ (c) the ends grew $\times4$ but the side only $\times2$: overall $\times\frac{288}{112}\approx2.57$` },
  { level: 3, space: 5, q: String.raw`Design two closed boxes with a square base that each hold $1000$ cm$^3$: one $10\times10\times10$ and one $20\times20\times2.5$. Compare their surface areas and explain which is cheaper to make.`, recap: "Two 1000 cm³ boxes.", ans: String.raw`$600$ vs $800+200=1000$ cm$^2$: the cube uses less` },
  { level: 3, space: 5, q: String.raw`A cone and a cylinder each have radius $6$ cm and height $8$ cm. Find the ratio of their surface areas (both closed).`, recap: "Cone vs cylinder SA.", ans: String.raw`cone $36\pi+60\pi=96\pi$; cylinder $72\pi+96\pi=168\pi$; ratio $4:7$` },
  { level: 3, space: 5, q: String.raw`Explain why the surface area of a cone's curved part is $\pi rs$, using its net (a sector of a circle of radius $s$ whose arc wraps around the base).`, recap: "Why πrs?", ans: String.raw`the sector is $\frac{2\pi r}{2\pi s}=\frac rs$ of a circle of area $\pi s^2$: $\frac rs\pi s^2=\pi rs$` },
];

export const WS = {
  code: "5.8",
  title: "Surface Area",
  bigideas: String.raw`Surface area is the total area of the faces of a solid --- the area of its net. Prisms: two bases plus a band of rectangles; cylinders: two circles plus a rectangle $2\pi r$ long. Pyramids and cones need the \emph{slant height} $s$, from the Pythagorean theorem. Leave out faces that are open or hidden. Scaling every length by $k$ multiplies surface area by $k^2$.`,
  goals: ["Find surface areas of prisms and cylinders from nets.", "Find slant heights with Pythagoras.", "Find surface areas of pyramids, cones and spheres.", "Handle open and composite solids.", "Compare designs that use less material."],
  curriculum: "E1.4, E1.6",
  vocab: [["Net", "flat pattern that folds into a solid"], ["Lateral area", "area of the sides only"], ["Slant height $s$", "along a face from apex to base edge"], ["Surface area", "total area of all faces"]],
  hook: String.raw`Give groups a cereal box to cut open along its edges. Ask: “How much cardboard is used? Which faces are the same size?” Then show a can and ask how to unroll its side.`,
  concepts: [
    ["1. Prisms and cylinders", String.raw`Prism: $2B+(\text{perimeter of base})\times h$. Cylinder: $2\pi r^2+2\pi rh$.
${figT(cylinderNet(2, 4), 3.2)}`],
    ["2. Pyramids, cones, spheres", String.raw`Square pyramid: $b^2+2bs$ with $s^2=h^2+(\tfrac b2)^2$. Cone: $\pi r^2+\pi rs$ with $s^2=h^2+r^2$. Sphere: $4\pi r^2$.
${figT(cone(3, 4, { lr: "r", lh: "h", ls: "s" }), 2.8)}`],
    ["3. Composite and scaling", String.raw`Add the visible faces only. Scaling by $k$: surface area $\times k^2$, volume $\times k^3$.`],
  ],
  tips: ["Students often use h instead of s for faces.", "Open containers: subtract the missing face.", "Composite solids: subtract hidden overlaps from both pieces.", "Have students sketch the net before calculating.", "Units are squared."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
