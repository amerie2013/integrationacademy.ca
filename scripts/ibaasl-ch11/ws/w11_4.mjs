// IB AA SL Worksheet 11.4 — The Cosine Rule and the Area of a Triangle (teacher edition)
import { svgT } from "./figT.mjs";
import { figDoc, triSAS } from "../figs11.mjs";

const S = String.raw;
const rad = (d) => (d * Math.PI) / 180, deg = (r) => (r * 180) / Math.PI;
const T = (items, w = 5.4) => svgT(figDoc({ items }), w);
const side = (a, b, C) => Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(rad(C)));
const ang = (a, b, c) => deg(Math.acos((a * a + b * b - c * c) / (2 * a * b)));
const area = (a, b, C) => 0.5 * a * b * Math.sin(rad(C));
const f2 = (v) => v.toFixed(2);

const EXAMPLES = [
  { title: "SAS", q: S`$a=12$, $b=7$, $C=58^\circ$. Find $c$.`,
    fig: T(triSAS(12, 7, 58, { sides: ["c", "12", "7"], angles: [[2, "58°"]] }).items),
    steps: [S`$c^2=144+49-168\cos58^\circ$.`], ans: S`$\approx${f2(side(12, 7, 58))}$` },
  { title: "Obtuse included angle", q: S`$a=6$, $b=10$, $C=132^\circ$. Find $c$.`,
    steps: [S`$\cos132^\circ<0$, so $c^2>a^2+b^2$.`], ans: S`$\approx${f2(side(6, 10, 132))}$` },
  { title: "SSS", q: "Sides 8, 11, 15. Find the largest angle.",
    steps: [S`$\cos C=\frac{64+121-225}{176}$.`], ans: S`$\approx${f2(ang(8, 11, 15))}^\circ$` },
  { title: "Smallest angle", q: "Sides 8, 11, 15. Find the smallest angle.",
    steps: [S`Opposite 8: $\cos\theta=\frac{121+225-64}{330}$.`], ans: S`$\approx${f2(ang(11, 15, 8))}^\circ$` },
  { title: "Area", q: S`Find the area of a triangle with sides 9 and 14 and included angle 38°.`,
    fig: T(triSAS(14, 9, 38, { sides: ["", "14", "9"], angles: [[2, "38°"]], fill: "green" }).items),
    steps: [S`$\frac12(9)(14)\sin38^\circ$.`], ans: S`$\approx${f2(area(9, 14, 38))}$` },
  { title: "Area from SSS", q: "Find the area of a triangle with sides 7, 10 and 12.",
    steps: [S`Angle opposite 12: $C\approx${f2(ang(7, 10, 12))}^\circ$.`, S`$\frac12(7)(10)\sin C$.`], ans: S`$\approx${f2(area(7, 10, ang(7, 10, 12)))}$` },
  { title: "Choosing the rule", q: S`$A=50^\circ$, $b=9$, $c=13$. Which rule finds a? Find it.`,
    steps: ["SAS → cosine rule."], ans: S`$a\approx${f2(side(9, 13, 50))}$` },
  { title: "Unknown side from area", q: S`A triangle has area 40, side 10 and included angle 55°. Find the other enclosing side.`,
    steps: [S`$40=5b\sin55^\circ$.`], ans: S`$b\approx${f2(8 / Math.sin(rad(55)))}$` },
  { title: "Parallelogram diagonal", q: "A parallelogram has sides 9 and 6 with an angle of 70°. Find the longer diagonal.",
    steps: [S`The longer diagonal is opposite the 110° angle: $d^2=81+36-108\cos110^\circ$.`], ans: S`$\approx${f2(side(9, 6, 110))}$` },
];

const PROBLEMS = [
  { level: 1, q: S`$a=8$, $b=15$, $C=60^\circ$. Find $c$.`, recap: "SAS.", ans: "13" },
  { level: 1, q: S`Find the area of a triangle with sides 6 and 10 and included angle 150°.`, recap: S`$\sin150^\circ=\frac12$.`, ans: "15" },
  { level: 1, q: "Sides 3, 5, 7. Find the largest angle.", recap: "SSS.", ans: S`$120^\circ$` },
  { level: 2, q: S`$a=14$, $b=9$, $C=28^\circ$. Find $c$.`, recap: "Cosine rule.", ans: S`$\approx${f2(side(14, 9, 28))}$` },
  { level: 2, q: "Sides 9, 10, 17. Find the obtuse angle.", recap: "Largest side.", ans: S`$\approx${f2(ang(9, 10, 17))}^\circ$` },
  { level: 2, q: S`Find the area of a triangle with sides 11 and 13 and included angle 72°.`, recap: "½ab sin C.", ans: S`$\approx${f2(area(11, 13, 72))}$` },
  { level: 2, q: "A triangle has sides 5, 12, 13. Show it is right-angled using the cosine rule.", recap: "cos C = 0.", ans: S`$\cos C=\frac{25+144-169}{120}=0$` },
  { level: 2, q: "Label the triangle and find its area.", recap: "Included angle.", ans: S`$\frac12(8)(12)\sin45^\circ=24\sqrt2\approx33.94$`,
    fig: T(triSAS(12, 8, 45, { sides: ["", "12", "8"], angles: [[2, "45°"]] }).items, 4.8) },
  { level: 3, space: 4, q: S`$a=x$, $b=2x$, $c=12$, $C=60^\circ$. Find $x$.`, recap: "Equation.", ans: S`$144=x^2+4x^2-2x^2=3x^2\Rightarrow x=4\sqrt3$` },
  { level: 3, space: 4, q: "A triangular plot has sides 40 m, 55 m and 70 m. Find its area.", recap: "Angle then area.", ans: S`$\approx${area(40, 55, ang(40, 55, 70)).toFixed(1)}$ m²` },
  { level: 3, space: 4, q: S`Find the largest area of a triangle with sides 7 and 9, and the included angle that gives it.`, recap: "sin C ≤ 1.", ans: S`$31.5$ at $90^\circ$` },
  { level: 3, space: 4, q: "A regular pentagon has side 10. Find the length of a diagonal.", recap: "Interior angle 108°.", ans: S`$\approx${f2(side(10, 10, 108))}$` },
  { level: 3, space: 4, q: S`Show that the cosine rule becomes Pythagoras when $C=90^\circ$, and explain the sign of the correction term for obtuse C.`, recap: "cos C.", ans: S`$\cos90^\circ=0$; for obtuse C, $\cos C<0$, so $c^2>a^2+b^2$` },
];

export const WS = {
  code: "11.4",
  title: "The Cosine Rule and the Area of a Triangle",
  bigideas: S`$c^2=a^2+b^2-2ab\cos C$ finds a side from SAS; $\cos C=\frac{a^2+b^2-c^2}{2ab}$ finds an angle from SSS (start with the largest). The area of any triangle is $\frac12ab\sin C$ with C the included angle. Choose: right angle → SOH CAH TOA; side with opposite angle → sine rule; SAS/SSS → cosine rule.`,
  goals: ["Use the cosine rule for sides.", "Use it for angles.", "Find areas.", "Choose the right rule."],
  curriculum: "SL 3.3",
  vocab: [["Cosine rule", S`$c^2=a^2+b^2-2ab\cos C$`], ["Included angle", "between the known sides"], ["Area", S`$\frac12ab\sin C$`]],
  hook: "A garden is triangular with sides 6 m, 8 m and 11 m. How much turf is needed? No right angle — so how?",
  concepts: [
    ["1. Cosine rule", S`${T(triSAS(9, 6, 48, { sides: ["c", "9", "6"], angles: [[2, "48°"]] }).items, 4.6)} Pythagoras with a correction.`],
    ["2. Angles", "Largest angle first."],
    ["3. Area", "½ab sin C."],
  ],
  tips: ["C is between a and b.", "Largest angle opposite largest side.", "cos of obtuse < 0.", "Keep accuracy.", "Area needs the included angle."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
