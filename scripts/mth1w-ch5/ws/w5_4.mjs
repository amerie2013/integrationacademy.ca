// Worksheet 5.4 — The Pythagorean Theorem (teacher edition)
import { figT, planeT } from "./figT.mjs";
import { rightTri, prism, polygon } from "../figs5.mjs";

const EXAMPLES = [
  { title: "Finding the hypotenuse", q: String.raw`A rectangular park is $72$ m by $96$ m. How much shorter is the diagonal path than walking along two sides?`,
    steps: [String.raw`$d=\sqrt{72^2+96^2}=\sqrt{5184+9216}=\sqrt{14\,400}=120$ m.`, String.raw`Along two sides: $72+96=168$ m; saving $168-120=48$ m.`], ans: String.raw`$48$ m shorter` },
  { title: "Finding a leg", q: String.raw`A $10$ m guy wire is attached to a pole $8$ m above the ground. How far from the base of the pole is it anchored?`,
    fig: figT(rightTri(6, 8, { la: "x", lb: "8 m", lc: "10 m", fill: "amber" }), 3.2),
    steps: [String.raw`$x^2+8^2=10^2$, so $x^2=100-64=36$.`, String.raw`$x=6$ m.`], ans: String.raw`$6$ m` },
  { title: "Decimal answer", q: String.raw`A square has side $15$ cm. Find the diagonal to the nearest tenth.`,
    steps: [String.raw`$d=\sqrt{15^2+15^2}=\sqrt{450}$.`, String.raw`$\sqrt{450}\approx21.2$ cm.`], ans: String.raw`$\approx21.2$ cm` },
  { title: "Is it a right triangle?", q: String.raw`Classify triangles with sides (a) $11, 60, 61$ (b) $8, 10, 13$ (c) $6, 7, 9$.`,
    steps: [String.raw`(a) $121+3600=3721=61^2$: right.`, String.raw`(b) $64+100=164<169$: obtuse.`, String.raw`(c) $36+49=85>81$: acute.`], ans: "right, obtuse, acute" },
  { title: "Isosceles triangle height", q: String.raw`An isosceles triangle has equal sides $13$ cm and base $10$ cm. Find its height and area.`,
    fig: figT([...polygon([[0, 0], [10, 0], [5, 12]], { sides: ["10", "13", "13"], fill: "green", color: "green" }), { seg: [[5, 0], [5, 12]], color: "red", dash: true }, { right: [[10, 0], [5, 0], [5, 12]] }, { text: "h", at: [5.6, 5], color: "red", bold: true }], 3.4),
    steps: [String.raw`The height splits the base into $5$ and $5$: $h=\sqrt{13^2-5^2}=\sqrt{144}=12$ cm.`, String.raw`Area $=\tfrac12(10)(12)=60$ cm$^2$.`], ans: String.raw`$h=12$ cm; $A=60$ cm$^2$` },
  { title: "Distance on a grid", q: String.raw`Find the distance between $A(-3,-2)$ and $B(5,4)$.`,
    fig: planeT({ view: { xmin: -5, xmax: 7, ymin: -4, ymax: 6 }, segs: [{ pts: [[-3, -2], [5, 4]], color: "violet" }], tri: { x: -3, y: -2, run: 8, rise: 6 }, points: [{ x: -3, y: -2, label: "A" }, { x: 5, y: 4, label: "B" }], step: { x: 1, y: 1 } }, 5),
    steps: [String.raw`Run $8$, rise $6$.`, String.raw`$d=\sqrt{64+36}=10$.`], ans: "10 units" },
  { title: "Two triangles in a row", q: String.raw`In the figure, $AB=9$, $BC=12$ and $CD=8$, with $\angle ABC=90^\circ$ and $\angle ACD=90^\circ$. ($AC$ is the hypotenuse of the first triangle and a leg of the second.) Find $AD$.`,
    fig: figT([{ poly: [[0, 9], [0, 0], [12, 0]], fill: "blue", color: "blue" }, { poly: [[0, 9], [12, 0], [16.8, 6.4]], fill: "green", color: "green" }, { right: [[0, 9], [0, 0], [12, 0]] }, { right: [[0, 9], [12, 0], [16.8, 6.4]] }, { text: "A", at: [-0.8, 9.3], bold: true }, { text: "B", at: [-0.8, -0.6], bold: true }, { text: "C", at: [12.4, -0.8], bold: true }, { text: "D", at: [17.5, 6.9], bold: true }, { text: "9", at: [-0.9, 4.5], color: "blue", bold: true }, { text: "12", at: [6, -1], color: "blue", bold: true }, { text: "8", at: [15.2, 2.6], color: "green", bold: true }], 4.6),
    steps: [String.raw`$AC=\sqrt{9^2+12^2}=15$.`, String.raw`$AD=\sqrt{15^2+8^2}=\sqrt{289}=17$.`], ans: "$AD=17$" },
  { title: "Space diagonal", q: String.raw`A room is $6$ m long, $4$ m wide and $2.5$ m high. Find the distance from one floor corner to the opposite ceiling corner.`,
    fig: figT([...prism(6, 4, 2.5, { ll: "6 m", lw: "4 m", lh: "2.5 m" }), { seg: [[0, 0], [6 + 4 * 0.45, 2.5 + 4 * 0.32]], color: "red", width: 2.2 }], 4.6),
    steps: [String.raw`Floor diagonal: $\sqrt{36+16}=\sqrt{52}$.`, String.raw`$d=\sqrt{52+2.5^2}=\sqrt{58.25}\approx7.63$ m.`], ans: String.raw`$\approx7.63$ m` },
  { title: "TV size", q: String.raw`A “$55$-inch” TV has a $16:9$ screen. Find its width and height in inches.`,
    steps: [String.raw`Width $16k$, height $9k$: $(16k)^2+(9k)^2=55^2$, so $337k^2=3025$.`, String.raw`$k^2\approx8.976$, $k\approx2.996$: width $\approx47.9$ in, height $\approx27.0$ in.`], ans: String.raw`about $47.9$ in by $27.0$ in` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Find the hypotenuse of a right triangle with legs $16$ and $30$.`, recap: "Legs 16, 30.", ans: "$34$" },
  { level: 1, q: String.raw`A right triangle has hypotenuse $41$ and one leg $9$. Find the other leg.`, recap: "c = 41, a = 9.", ans: "$40$" },
  { level: 1, q: String.raw`Do $12, 35, 37$ form a right triangle? Show the check.`, recap: "12, 35, 37.", ans: String.raw`$144+1225=1369=37^2$: yes` },
  { level: 2, q: String.raw`A $4.5$ m ladder must reach a window $4.2$ m high. How far from the wall should its foot be (nearest cm)?`, recap: "Ladder 4.5 m to 4.2 m.", ans: String.raw`$\sqrt{2.61}\approx1.62$ m` },
  { level: 2, q: String.raw`Find the distance between $(-4, 7)$ and $(2, -1)$.`, recap: "(−4, 7) to (2, −1).", ans: "$10$" },
  { level: 2, q: String.raw`A rectangle's diagonal is $26$ cm and one side is $10$ cm. Find its perimeter and area.`, recap: "Diagonal 26, side 10.", ans: String.raw`other side $24$; $P=68$ cm; $A=240$ cm$^2$` },
  { level: 2, q: String.raw`An equilateral triangle has side $8$ cm. Find its height (nearest tenth) and area.`, recap: "Equilateral, side 8.", ans: String.raw`$h=\sqrt{48}\approx6.9$ cm; $A\approx27.7$ cm$^2$` },
  { level: 2, q: String.raw`A builder measures a corner: $1.2$ m along one wall, $1.6$ m along the other, and $1.95$ m diagonally. Is the corner square? If not, is the angle more or less than $90^\circ$?`, recap: "1.2, 1.6, 1.95 corner.", ans: String.raw`$1.44+2.56=4.00$ and $1.95^2\approx3.80$; $4.00>3.80$: not square --- the angle is less than $90^\circ$` },
  { level: 3, space: 5, q: String.raw`A kite is flying on $60$ m of string. The kite is directly above a point $35$ m from the person, whose hand is $1.5$ m above the ground.
(a) Sketch the situation.
(b) How high is the kite above the ground?`, recap: "Kite on 60 m string.", ans: String.raw`(b) $\sqrt{3600-1225}=\sqrt{2375}\approx48.7$; $48.7+1.5\approx50.2$ m` },
  { level: 3, space: 5, q: String.raw`Show that the triangle with vertices $A(1,1)$, $B(4,5)$, $C(-3,4)$ is right-angled. Which vertex has the right angle?`, recap: "Right triangle on a grid.", ans: String.raw`$AB^2=25$, $AC^2=25$, $BC^2=50=25+25$: right angle at $A$` },
  { level: 3, space: 5, q: String.raw`A cereal box is $30$ cm tall, $20$ cm wide and $7$ cm deep. Will a $37$ cm straw fit inside, lying diagonally? Show your work.`, recap: "Straw in a box.", ans: String.raw`$\sqrt{900+400+49}=\sqrt{1349}\approx36.7$ cm: no, $37>36.7$` },
  { level: 3, space: 5, q: String.raw`A boat sails $9$ km east, then $5$ km north, then $3$ km east.
(a) How far is it from its start?
(b) How much shorter would a straight route have been?`, recap: "Boat 9 E, 5 N, 3 E.", ans: String.raw`(a) $\sqrt{12^2+5^2}=13$ km (b) $17-13=4$ km` },
  { level: 3, space: 5, q: String.raw`Generate Pythagorean triples using $(m^2-n^2,\ 2mn,\ m^2+n^2)$ for $(m,n)=(2,1)$, $(3,2)$ and $(4,1)$. Verify one and explain why the formula always works.`, recap: "Triple formula.", ans: String.raw`$(3,4,5)$, $(5,12,13)$, $(15,8,17)$; $(m^2-n^2)^2+(2mn)^2=m^4+2m^2n^2+n^4=(m^2+n^2)^2$` },
];

export const WS = {
  code: "5.4",
  title: "The Pythagorean Theorem",
  bigideas: String.raw`In every right triangle the squares on the legs add up to the square on the hypotenuse: $a^2+b^2=c^2$. Use it forwards to find the hypotenuse, rearranged to find a leg, and in reverse (the converse) to test whether an angle is $90^\circ$. Distances on a grid, heights of isosceles triangles, diagonals of rectangles and boxes, and slant heights are all hidden right triangles.`,
  goals: ["Identify the hypotenuse and legs.", "Find a missing hypotenuse or leg.", "Use the converse to classify triangles.", "Find distances between points.", "Solve multi-step and 3-D problems."],
  curriculum: "E1.5",
  book: "Nelson Principles of Mathematics 9, Ch. 8 Getting Started; 8.4",
  vocab: [["Hypotenuse", "side opposite the right angle; the longest"], ["Legs", "the two sides forming the right angle"], ["Pythagorean triple", "whole numbers with $a^2+b^2=c^2$"], ["Converse", "if $a^2+b^2=c^2$ then the angle is $90^\\circ$"]],
  hook: String.raw`Draw squares on the sides of a $3$-$4$-$5$ triangle on grid paper and have students count the unit squares ($9+16=25$). Then try a $2$-$3$-$4$ triangle: the squares no longer match. Ask what makes the first triangle special.`,
  concepts: [
    ["1. The theorem", String.raw`$a^2+b^2=c^2$, $c$ the hypotenuse. Hypotenuse: $c=\sqrt{a^2+b^2}$. Leg: $a=\sqrt{c^2-b^2}$.
${figT(rightTri(4, 3, { la: "a", lb: "b", lc: "c" }), 3.4)}`],
    ["2. The converse", String.raw`Longest side $c$: $a^2+b^2=c^2$ right; $>$ acute; $<$ obtuse.`],
    ["3. Hidden right triangles", String.raw`Distance between points (run, rise); height of an isosceles triangle (half the base); diagonal of a rectangle; space diagonal of a box (two steps).`],
  ],
  tips: ["Label the hypotenuse first.", "Students often add when they should subtract (finding a leg).", "$\\sqrt{a^2+b^2}\\ne a+b$.", "For 3-D, find a face diagonal first.", "Check the answer: the hypotenuse must be the longest side."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
