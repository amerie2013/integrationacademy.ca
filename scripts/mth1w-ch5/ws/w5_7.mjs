// Worksheet 5.7 — Volume (teacher edition)
import { figT } from "./figT.mjs";
import { prism, triPrism, cylinder, cone, pyramid, sphere } from "../figs5.mjs";

const EXAMPLES = [
  { title: "Prism with a trapezoid base", q: String.raw`A water trough is a prism $3$ m long whose end is a trapezoid with parallel sides $0.8$ m and $0.5$ m and depth $0.4$ m. Find its capacity in litres.`,
    steps: [String.raw`Base area $=\tfrac12(0.8+0.5)(0.4)=0.26$ m$^2$.`, String.raw`$V=0.26\times3=0.78$ m$^3=780$ L.`], ans: "$780$ L" },
  { title: "Cylinder from a diameter", q: String.raw`A cylindrical rain barrel has diameter $60$ cm and height $90$ cm. How many litres does it hold?`,
    fig: figT(cylinder(3, 9, { lr: "d = 60 cm", lh: "90 cm" }), 2.6),
    steps: [String.raw`$r=30$: $V=\pi(30)^2(90)=81\,000\pi\approx254\,469$ cm$^3$.`, String.raw`$\div1000$: $\approx254.5$ L.`], ans: String.raw`$\approx254$ L` },
  { title: "Pyramid with a rectangular base", q: String.raw`A pyramid has a $12$ cm by $9$ cm base and height $15$ cm. Find its volume.`,
    steps: [String.raw`$V=\tfrac13(12\times9)(15)=\tfrac13(108)(15)=540$ cm$^3$.`], ans: String.raw`$540$ cm$^3$` },
  { title: "Cone from slant height", q: String.raw`A cone has radius $6$ cm and slant height $10$ cm. Find its volume.`,
    fig: figT(cone(6, 8, { lr: "6", lh: "h", ls: "10" }), 3),
    steps: [String.raw`Height: $h=\sqrt{10^2-6^2}=8$ cm.`, String.raw`$V=\tfrac13\pi(6)^2(8)=96\pi\approx301.6$ cm$^3$.`], ans: String.raw`$96\pi\approx301.6$ cm$^3$` },
  { title: "Sphere from a circumference", q: String.raw`A basketball has circumference $75$ cm. Find its volume.`,
    steps: [String.raw`$r=\frac{75}{2\pi}\approx11.94$ cm.`, String.raw`$V=\tfrac43\pi(11.94)^3\approx7124$ cm$^3$.`], ans: String.raw`$\approx7.1$ L` },
  { title: "Finding a missing dimension", q: String.raw`A cylindrical can must hold $1$ L and have radius $5$ cm. How tall must it be?`,
    steps: [String.raw`$1$ L $=1000$ cm$^3$: $\pi(5)^2h=1000$.`, String.raw`$h=\frac{1000}{25\pi}\approx12.7$ cm.`], ans: String.raw`$\approx12.7$ cm` },
  { title: "Composite: hollow pipe", q: String.raw`A concrete pipe is $2$ m long with outer radius $0.5$ m and inner radius $0.4$ m. Find the volume of concrete.`,
    steps: [String.raw`Outer cylinder $\pi(0.5)^2(2)=0.5\pi$; hole $\pi(0.4)^2(2)=0.32\pi$.`, String.raw`Concrete $=0.18\pi\approx0.565$ m$^3$.`], ans: String.raw`$\approx0.57$ m$^3$` },
  { title: "Changing one dimension vs all", q: String.raw`A $10\times6\times4$ box. (a) Double only the height. (b) Double every edge. Compare volumes.`,
    steps: [String.raw`Original $240$. (a) $10\times6\times8=480$: $\times2$.`, String.raw`(b) $20\times12\times8=1920$: $\times8=2^3$.`], ans: String.raw`(a) $\times2$ (b) $\times8$` },
  { title: "Scale factor from volumes", q: String.raw`Two similar statues have volumes $250$ cm$^3$ and $2000$ cm$^3$. The small one is $10$ cm tall. How tall is the large one?`,
    steps: [String.raw`$k^3=2000\div250=8$, so $k=2$.`, String.raw`Height $=2\times10=20$ cm.`], ans: "$20$ cm" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the volume of a cube with edge $4.5$ cm and of a cylinder with $r=2$ m, $h=7$ m.`, recap: "Cube 4.5; cylinder r 2, h 7.", ans: String.raw`$91.125$ cm$^3$; $28\pi\approx88.0$ m$^3$` },
  { level: 1, q: String.raw`Find the volume of a cone with radius $3$ cm and height $10$ cm, and a sphere with radius $3$ cm.`, recap: "Cone 3, 10; sphere 3.", ans: String.raw`$30\pi\approx94.2$ cm$^3$; $36\pi\approx113.1$ cm$^3$` },
  { level: 1, q: String.raw`A triangular prism has a right-triangle base with legs $5$ cm and $12$ cm and length $20$ cm. Find its volume.`, recap: "Triangular prism 5, 12, 20.", ans: String.raw`$600$ cm$^3$` },
  { level: 2, q: String.raw`A square-based pyramid has volume $400$ m$^3$ and height $12$ m. Find the side of its base.`, recap: "Pyramid V = 400, h = 12.", ans: String.raw`$b^2=100$, $b=10$ m` },
  { level: 2, q: String.raw`A swimming pool is $20$ m by $8$ m, $1$ m deep at one end and $2.5$ m at the other (sloping evenly). Find its capacity in litres.`, recap: "Sloped pool.", ans: String.raw`trapezoid end $\tfrac12(1+2.5)(20)=35$ m$^2$; $\times8=280$ m$^3=280\,000$ L` },
  { level: 2, q: String.raw`A cone and a cylinder have the same radius, $4$ cm. The cone has height $18$ cm. How tall is the cylinder if they hold the same amount?`, recap: "Equal cone and cylinder.", ans: "$6$ cm" },
  { level: 2, q: String.raw`Tennis balls of diameter $6.7$ cm come three to a cylindrical can that just fits them. What percent of the can is empty?`, recap: "Three balls in a can.", ans: String.raw`balls $\tfrac43\pi r^3\times3=4\pi r^3$; can $\pi r^2(6r)=6\pi r^3$: $\frac13\approx33.3\%$ empty` },
  { level: 2, q: String.raw`Every dimension of a model is $\frac{1}{20}$ of the real object. The model's volume is $45$ cm$^3$. Find the real volume in L.`, recap: "Model 1:20, V = 45.", ans: String.raw`$45\times8000=360\,000$ cm$^3=360$ L` },
  { level: 3, space: 5, q: String.raw`A grain silo is a cylinder of radius $4$ m and height $15$ m with a cone roof of height $3$ m.
(a) Find the total volume.
(b) Grain fills the cylinder to $80\%$ of its height. How many cubic metres of grain is that?`, recap: "Silo with cone roof.", ans: String.raw`(a) $240\pi+16\pi=256\pi\approx804.2$ m$^3$ (b) $192\pi\approx603.2$ m$^3$` },
  { level: 3, space: 5, q: String.raw`A rectangular sheet $30$ cm by $20$ cm has $x$ cm squares cut from each corner and is folded into an open box.
(a) Write $V$ in terms of $x$.
(b) Find $V$ for $x=2, 3, 4, 5$. Which is largest?`, recap: "Box from a sheet.", ans: String.raw`(a) $V=x(30-2x)(20-2x)$ (b) $832$, $1008$, $1056$, $1000$: $x=4$ is largest of these` },
  { level: 3, space: 5, q: String.raw`An ice-cream cone (cone, $r=2.5$ cm, $h=11$ cm) is filled level and topped with a hemisphere of ice cream with the same radius. If the ice cream melts, will it overflow the cone? Show your work.`, recap: "Melting ice cream.", ans: String.raw`cone $\approx72.0$ cm$^3$; ice cream $=$ cone $+$ hemisphere $\approx72.0+32.7=104.7>72.0$: yes, it overflows` },
  { level: 3, space: 5, q: String.raw`A cylinder has radius $r$ and height $h$. Explain what happens to its volume if (a) $h$ is doubled, (b) $r$ is doubled, (c) both are doubled.`, recap: "Doubling r and h.", ans: String.raw`(a) $\times2$ (b) $\times4$ (c) $\times8$` },
  { level: 3, space: 5, q: String.raw`A metal sphere of radius $6$ cm is melted and recast into a cylinder of radius $4$ cm. How tall is the cylinder?`, recap: "Recast sphere.", ans: String.raw`$288\pi=16\pi h$, $h=18$ cm` },
];

export const WS = {
  code: "5.7",
  title: "Volume",
  bigideas: String.raw`Volume counts cubic units. Every prism and cylinder has $V=(\text{area of base})\times\text{height}$; a pyramid or cone holds exactly one third of its matching prism or cylinder; a sphere has $V=\frac43\pi r^3$. Composite solids are added or subtracted. Scaling every length by $k$ multiplies volume by $k^3$, and $1$ cm$^3=1$ mL links volume to capacity.`,
  goals: ["Find volumes of prisms, cylinders, pyramids, cones and spheres.", "Find a missing dimension from a volume.", "Find volumes of composite and hollow solids.", "Use the $k^3$ rule and convert to litres."],
  curriculum: "E1.4, E1.6",
  vocab: [["Volume", "cubic units filling a solid"], ["Capacity", "how much a container holds"], ["Base area $B$", "area of the base shape"], ["Hemisphere", "half a sphere"]],
  hook: String.raw`Fill a cone with rice and pour it into a cylinder with the same base and height. Ask students to predict how many cones fill the cylinder before you try it (three).`,
  concepts: [
    ["1. Prisms and cylinders", String.raw`$V=Bh$; cylinder $V=\pi r^2h$.
${figT([...prism(4, 3, 3, { ll: "", lw: "", lh: "" }), ...triPrism(4, 3, 5, { lb: "", lt: "", lL: "", ax: 2 }).map((it) => shift(it, 7))], 5.4)}`],
    ["2. Pyramids, cones and spheres", String.raw`$V=\frac13Bh$; cone $V=\frac13\pi r^2h$; sphere $V=\frac43\pi r^3$. The height is perpendicular, not slanted.
${figT([...pyramid(4, 5, { lb: "", lh: "h" }), ...cone(2, 5, { lr: "r", lh: "h" }).map((it) => shift(it, 7.5)), ...sphere(2, { lr: "r" }).map((it) => shift(it, 13, 2))], 6)}`],
    ["3. Scaling", String.raw`Lengths $\times k$ $\Rightarrow$ volume $\times k^3$. Working back: $k=\sqrt[3]{\text{volume factor}}$.`],
  ],
  tips: ["Halve the diameter before using the formula.", "Cones and pyramids: one third — students forget it.", "Slant height is not the height; use Pythagoras.", "Convert units before multiplying (cm with m).", "Encourage leaving answers in terms of π, then rounding."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};

function shift(it, dx, dy = 0) {
  const m = (p) => [p[0] + dx, p[1] + dy];
  const o = { ...it };
  if (o.poly) o.poly = o.poly.map(m); if (o.seg) o.seg = o.seg.map(m); if (o.dot) o.dot = m(o.dot); if (o.at) o.at = m(o.at);
  if (o.circle) o.circle = [o.circle[0] + dx, o.circle[1] + dy, o.circle[2]]; if (o.ellipse) o.ellipse = [o.ellipse[0] + dx, o.ellipse[1] + dy, o.ellipse[2], o.ellipse[3]];
  if (o.right) o.right = o.right.map(m); if (o.dim) o.dim = o.dim.map(m); if (o.arc) o.arc = o.arc.map(m);
  return o;
}
