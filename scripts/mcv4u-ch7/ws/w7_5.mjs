// MCV4U Worksheet 7.5 — The Cross Product and Its Properties (teacher edition)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, merge } from "../vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const para = (a, b) => ({ polys: [{ pts: [p3(0, 0, 0), p3(...a), p3(...add3(a, b)), p3(...b)], fill: "#ede9fe", stroke: "gray" }] });
const EXAMPLES = [
  { title: "Components", q: S`Find $[3,1,-2]\times[1,0,4]$ and check the answer.`,
    fig: VF(merge(V3, axes3(4.8), { arrows: [{ from: [0, 0], to: p3(3, 1, -2), vl: "a" }, { from: [0, 0], to: p3(1, 0, 4), vl: "b", color: "blue" }, { from: [0, 0], to: p3(1, -3.5, -0.25), vl: "a×b", color: "red" }] }), 4.5),
    steps: [S`\textbf{Formula:} $\vec a\times\vec b=[a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1]$.`,
      S`\textbf{Compute:} $[1(4)-(-2)(0),\ (-2)(1)-3(4),\ 3(0)-1(1)]=[4,-14,-1]$.`,
      S`\textbf{Check with $\vec a$:} $3(4)+1(-14)+(-2)(-1)=12-14+2=0$ \checkmark`,
      S`\textbf{Check with $\vec b$:} $1(4)+0+4(-1)=0$ \checkmark`], ans: "[4, −14, −1]" },
  { title: "Unit vectors", q: S`Find $\vec j\times\vec k$ and $\vec k\times\vec j$.`,
    fig: VF(merge(V3, axes3(4.8), { arrows: [{ from: [0, 0], to: p3(0, 2.5, 0), vl: "j", color: "blue" }, { from: [0, 0], to: p3(0, 0, 2.5), vl: "k", color: "green" }, { from: [0, 0], to: p3(2.5, 0, 0), vl: "i", color: "red" }] }), 4.5),
    steps: [S`\textbf{Compute:} $[0,1,0]\times[0,0,1]=[1\cdot1-0\cdot0,\ 0\cdot0-0\cdot1,\ 0\cdot0-1\cdot0]=[1,0,0]=\vec i$.`,
      S`\textbf{Reverse:} $\vec k\times\vec j=-(\vec j\times\vec k)=-\vec i$.`,
      S`\textbf{Cycle:} $\vec i\times\vec j=\vec k$, $\vec j\times\vec k=\vec i$, $\vec k\times\vec i=\vec j$.`,
      S`\textbf{Right-hand rule:} curl from $\vec j$ toward $\vec k$; the thumb points along $\vec i$ \checkmark`], ans: S`$\vec i$ and $-\vec i$` },
  { title: "Magnitude from the angle", q: S`$|\vec a|=7$, $|\vec b|=2$, angle $150^\circ$. Find $|\vec a\times\vec b|$.`,
    steps: [S`\textbf{Formula:} $|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta$.`,
      S`\textbf{Substitute:} $7\times2\times\sin150^\circ=14\times0.5$.`,
      S`\textbf{Result:} 7.`,
      S`\textbf{Note:} $\sin150^\circ=\sin30^\circ$, so 30° would give the same area \checkmark`], ans: "7" },
  { title: "A parallelogram", q: S`Find the area of the parallelogram spanned by $[2,2,1]$ and $[1,-1,3]$.`,
    fig: VF(merge(V3, axes3(4.2), para([2, 2, 1], [1, -1, 3]), { arrows: [{ from: [0, 0], to: p3(2, 2, 1), vl: "a", off: 16 }, { from: [0, 0], to: p3(1, -1, 3), vl: "b", color: "blue", off: -16 }] }, { view: { xmin: -4, xmax: 5, ymin: -2.8, ymax: 6 } }), 4.4),
    steps: [S`\textbf{Cross product:} $[2(3)-1(-1),\ 1(1)-2(3),\ 2(-1)-2(1)]=[7,-5,-4]$.`,
      S`\textbf{Check:} $[7,-5,-4]\cdot[2,2,1]=14-10-4=0$ \checkmark`,
      S`\textbf{Area:} $\sqrt{49+25+16}=\sqrt{90}\approx9.49$.`,
      S`\textbf{Meaning:} the cross product's length is the parallelogram's area.`], ans: "about 9.49" },
  { title: "A triangle", q: S`Find the area of the triangle with vertices $O$, $(1,2,0)$ and $(3,0,1)$.`,
    fig: VF(merge(V3, axes3(4.8), { polys: [{ pts: [p3(0, 0, 0), p3(1, 2, 0), p3(3, 0, 1)], fill: "#ede9fe", stroke: "gray" }], arrows: [{ from: [0, 0], to: p3(1, 2, 0), vl: "u" }, { from: [0, 0], to: p3(3, 0, 1), vl: "v", color: "blue" }] }), 4.5),
    steps: [S`\textbf{Sides from $O$:} $[1,2,0]$ and $[3,0,1]$.`,
      S`\textbf{Cross product:} $[2(1)-0(0),\ 0(3)-1(1),\ 1(0)-2(3)]=[2,-1,-6]$.`,
      S`\textbf{Parallelogram area:} $\sqrt{4+1+36}=\sqrt{41}$.`,
      S`\textbf{Triangle:} half: $\frac{\sqrt{41}}{2}\approx3.20$ \checkmark`], ans: "about 3.20" },
  { title: "Collinear?", q: S`Are $[1,3,-2]$ and $[-2,-6,4]$ collinear?`,
    steps: [S`\textbf{Test:} collinear exactly when the cross product is $\vec0$.`,
      S`\textbf{Compute:} $[3(4)-(-2)(-6),\ (-2)(-2)-1(4),\ 1(-6)-3(-2)]=[0,0,0]$.`,
      S`\textbf{Conclusion:} collinear.`,
      S`\textbf{Check:} $[-2,-6,4]=-2[1,3,-2]$ \checkmark`], ans: "yes: the cross product is the zero vector" },
  { title: "A unit normal", q: S`Find a unit vector perpendicular to $[1,0,1]$ and $[0,1,1]$.`,
    fig: VF(merge(V3, axes3(4.8), { arrows: [{ from: [0, 0], to: p3(2, 0, 2), vl: "a" }, { from: [0, 0], to: p3(0, 2, 2), vl: "b", color: "blue" }, { from: [0, 0], to: p3(-1.6, -1.6, 1.6), vl: "n", color: "red" }] }), 4.5),
    steps: [S`\textbf{Normal:} a vector perpendicular to both is their cross product: $[0(1)-1(1),\ 1(0)-1(1),\ 1(1)-0(0)]=[-1,-1,1]$.`,
      S`\textbf{Length:} $\sqrt3$.`,
      S`\textbf{Unit normal:} $\frac{1}{\sqrt3}[-1,-1,1]$; its opposite also works.`,
      S`\textbf{Check:} $[-1,-1,1]\cdot[1,0,1]=0$ and $\cdot[0,1,1]=0$ \checkmark`], ans: S`$\frac{1}{\sqrt3}[-1,-1,1]$ (or its opposite)` },
  { title: "Scalars factor out", q: S`If $\vec a\times\vec b=[1,-2,2]$, find $(2\vec a)\times(3\vec b)$ and $\vec b\times\vec a$.`,
    steps: [S`\textbf{Scalars factor out:} $(2\vec a)\times(3\vec b)=2\cdot3(\vec a\times\vec b)=6[1,-2,2]=[6,-12,12]$.`,
      S`\textbf{Anti-commutative:} $\vec b\times\vec a=-(\vec a\times\vec b)=[-1,2,-2]$.`,
      S`\textbf{Lengths:} $|[1,-2,2]|=3$, so $|(2\vec a)\times(3\vec b)|=18$: the parallelogram area scales by $2\times3$.`,
      S`\textbf{Check:} reversing the order flips the normal, not its length \checkmark`], ans: "[6, −12, 12] and [−1, 2, −2]" },
  { title: "Finding the angle", q: S`$|\vec a\times\vec b|=6$, $|\vec a|=3$, $|\vec b|=4$. Find the angle between $\vec a$ and $\vec b$.`,
    fig: VF({ view: { xmin: -3.8, xmax: 3.6, ymin: -0.6, ymax: 2.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [3, 0], vl: "a", label: "3", off: -16 }, { from: [0, 0], to: [2 * Math.cos(Math.PI / 6), 1], vl: "b", color: "blue" }, { from: [0, 0], to: [-2 * Math.cos(Math.PI / 6), 1], vl: "b′", color: "green" }] }, 4.5),
    steps: [S`\textbf{Formula:} $|\vec a\times\vec b|=|\vec a||\vec b|\sin\theta$.`,
      S`\textbf{Solve:} $6=3\times4\sin\theta\Rightarrow\sin\theta=\frac12$.`,
      S`\textbf{Two angles:} $\theta=30^\circ$ or $150^\circ$ (both have sine $\frac12$).`,
      S`\textbf{To decide:} you would need the sign of $\vec a\cdot\vec b$ \checkmark`], ans: "30° or 150° (the cross product alone cannot tell)" },
];

const PROBLEMS = [
  { level: 1, q: S`Find $[1,0,0]\times[0,0,1]$.`, recap: S`$\vec i\times\vec k$.`, ans: "[0, −1, 0]" },
  { level: 1, q: S`Find $[2,1,0]\times[0,1,0]$.`, recap: "Only the z-component survives.", ans: "[0, 0, 2]" },
  { level: 1, q: S`$|\vec a|=3$, $|\vec b|=5$, perpendicular. Find $|\vec a\times\vec b|$.`, recap: "sin 90° = 1.", ans: "15" },
  { level: 2, q: S`Find $[1,2,3]\times[4,5,6]$.`, recap: "Use the formula; check with dot products.", ans: "[−3, 6, −3]" },
  { level: 2, q: S`Find the area of the parallelogram on $[1,1,1]$ and $[1,-1,0]$.`, recap: "Magnitude of the cross product.", ans: S`$[1,1,-2]$: $\sqrt6\approx2.45$` },
  { level: 2, q: S`Find the area of the triangle $O$, $(2,1,3)$, $(1,0,2)$.`, recap: "Half the cross product's length.", ans: S`$[2,-1,-1]$: $\frac{\sqrt6}2\approx1.22$` },
  { level: 2, q: S`Verify $\vec b\times\vec a=-(\vec a\times\vec b)$ for $\vec a=[1,0,2]$, $\vec b=[0,3,1]$.`, recap: "Compute both.", ans: "a × b = [−6, −1, 3], b × a = [6, 1, −3]" },
  { level: 2, q: S`Explain why $\vec a\times\vec a=\vec 0$ for every $\vec a$.`, recap: "The angle is 0°.", ans: "|a × a| = |a|² sin 0° = 0" },
  { level: 3, space: 5, q: S`Find $k$ so that $[k,1,2]\times[2,2,4]=\vec 0$.`, recap: "Collinear vectors.", ans: "k = 1" },
  { level: 3, space: 5, q: S`Find the area of $\triangle ABC$ for $A(1,1,1)$, $B(2,3,1)$, $C(1,2,4)$.`, recap: "AB × AC.", ans: S`$[6,-3,1]$: $\frac{\sqrt{46}}2\approx3.39$` },
  { level: 3, space: 5, q: S`Verify $\vec a\times(\vec b+\vec c)=\vec a\times\vec b+\vec a\times\vec c$ for $\vec a=[1,1,0]$, $\vec b=[0,1,1]$, $\vec c=[1,0,1]$.`, recap: "Compute both sides.", ans: "both sides equal [2, −2, 0]" },
  { level: 3, space: 5, q: S`Find a vector perpendicular to both $[2,-1,1]$ and the x-axis.`, recap: S`Cross with $\vec i$.`, ans: "[0, 1, 1] (or any multiple)" },
  { level: 3, space: 5, q: S`Use the cross product to find the angle between $[1,1,0]$ and $[1,0,0]$, and confirm with the dot product.`, recap: S`$\sin\theta=\frac{|\vec a\times\vec b|}{|\vec a||\vec b|}$.`, ans: S`$|[0,0,-1]|=1$, $\sin\theta=\frac1{\sqrt2}$; dot product gives $\cos\theta=\frac1{\sqrt2}$: $45^\circ$` },
];

export const WS = {
  code: "7.5",
  title: "The Cross Product and Its Properties",
  bigideas: S`$\vec a\times\vec b=[a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1]$ is a vector perpendicular to both $\vec a$ and $\vec b$, directed by the right-hand rule, with length $|\vec a||\vec b|\sin\theta$ — the area of their parallelogram. It is anticommutative ($\vec b\times\vec a=-\vec a\times\vec b$), distributive, and lets scalars factor out, but it is not associative. It is $\vec 0$ exactly for collinear vectors.`,
  goals: ["Compute cross products.", "Use the right-hand rule.", "Find areas.", "Use and test properties."],
  curriculum: "C2.6, C2.7",
  vocab: [["Cross product", "vector ⟂ both"], ["Magnitude", "$|\\vec a||\\vec b|\\sin\\theta$"], ["Right-hand rule", "fingers a to b"], ["Anticommutative", "$\\vec b\\times\\vec a=-\\vec a\\times\\vec b$"]],
  hook: S`You need a vector perpendicular to both $[1,0,0]$ and $[0,1,0]$. Name two. How could you find one for $[1,2,3]$ and $[4,5,6]$?`,
  concepts: [
    ["1. Direction", S`$\vec a\times\vec b$ stands perpendicular to the parallelogram:
${VF(merge(V3, axes3(4.2), para([3, 0, 0], [0, 2.5, 0]), { arrows: [{ from: [0, 0], to: p3(3, 0, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 2.5, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(0, 0, 4), vl: "a×b", color: "red", off: -18 }] }), 4.2)}`],
    ["2. Computing", S`First component skips the first column: $a_2b_3-a_3b_2$; middle: $a_3b_1-a_1b_3$.`],
    ["3. Checking", S`$(\vec a\times\vec b)\cdot\vec a=(\vec a\times\vec b)\cdot\vec b=0$.`],
  ],
  tips: ["Watch the middle component.", "Order matters.", "Check with dot products.", "Triangle area = half.", "Zero ⇔ collinear."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
