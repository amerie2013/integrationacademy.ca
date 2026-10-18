// 7.1 The Sine Law — 20 hard questions (values computed, rounded as asked)
import { mc, ms, num, tf } from "./kit.mjs";
import { atriDoc, sceneDoc } from "./fig.mjs";

const D = Math.PI / 180, G = 180 / Math.PI, sin = (d) => Math.sin(d * D), asin = (x) => Math.asin(x) * G;
const r1 = (x) => Math.round(x * 10) / 10;
const n1 = (p, v, fb, fig) => num(`${p} Round to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}$.`, fig, 0.06);
const a1 = (p, v, fb, fig) => num(`${p} Give the angle to one decimal place.`, r1(v), `${fb} $\\approx${r1(v)}^\\circ$.`, fig, 0.06);
const side = (a, A, B) => (a * sin(B)) / sin(A);
const ang = (a, A, b) => asin((b * sin(A)) / a);

export const TOPIC = "7.1 The Sine Law";
export const Q = [
  n1(`In acute $\\triangle ABC$, $\\angle A=2\\angle B$, $\\angle C=60^\\circ$ and $c=10$. Find $a$.`, side(10, 60, 80), "$3\\angle B=120^\\circ$: $B=40^\\circ$, $A=80^\\circ$; $a=\\frac{10\\sin80^\\circ}{\\sin60^\\circ}$"),
  n1(`Two people $40$ m apart, on opposite sides of a tower, see its top at angles of elevation of $48^\\circ$ and $61^\\circ$. Find the tower's height (m).`, side(40, 71, 61) * sin(48), "Angle at the top $71^\\circ$; distance $\\frac{40\\sin61^\\circ}{\\sin71^\\circ}$; height $\\times\\sin48^\\circ$"),
  a1(`In acute $\\triangle ABC$, $a=24$, $b=20$ and $\\angle A=82^\\circ$. Find $\\angle C$.`, 180 - 82 - ang(24, 82, 20), "$\\angle B=\\sin^{-1}\\frac{20\\sin82^\\circ}{24}$, then $\\angle C=180^\\circ-82^\\circ-\\angle B$"),
  n1(`In acute $\\triangle ABC$, $\\angle A=50^\\circ$, $\\angle B=60^\\circ$ and $c=12$. Find the perimeter.`, 12 + side(12, 70, 50) + side(12, 70, 60), "$\\angle C=70^\\circ$; add $a=\\frac{12\\sin50^\\circ}{\\sin70^\\circ}$ and $b=\\frac{12\\sin60^\\circ}{\\sin70^\\circ}$ to $12$"),
  n1(`Lighthouses $A$ and $B$ are $15$ km apart. A ship makes angles of $48^\\circ$ at $A$ and $72^\\circ$ at $B$ with the line $AB$. How far is the ship from $B$ (km)?`, side(15, 60, 48), "Angle at the ship $60^\\circ$; $\\frac{15\\sin48^\\circ}{\\sin60^\\circ}$"),
  tf(`If every side of a triangle is doubled, the ratio $\\frac a{\\sin A}$ doubles.`, true, "The angles stay the same, the sides double."),
  n1(`In acute $\\triangle ABC$, $\\angle A=55^\\circ$, $\\angle B=65^\\circ$ and $c=20$. Find the altitude from $C$ to $AB$.`, side(20, 60, 65) * sin(55), "$b=\\frac{20\\sin65^\\circ}{\\sin60^\\circ}$; altitude $=b\\sin55^\\circ$"),
  mc(`In acute $\\triangle ABC$, $\\angle A=70^\\circ$, $\\angle B=40^\\circ$ and $b=12$. Which expression gives $a$?`, "$\\frac{12\\sin70^\\circ}{\\sin40^\\circ}$", ["$\\frac{12\\sin40^\\circ}{\\sin70^\\circ}$", "$12\\sin70^\\circ\\sin40^\\circ$", "$\\frac{\\sin70^\\circ}{12\\sin40^\\circ}$"], "$\\frac a{\\sin70^\\circ}=\\frac{12}{\\sin40^\\circ}$."),
  n1(`A triangle has angles $50^\\circ$, $60^\\circ$ and $70^\\circ$ and perimeter $30$. Find its shortest side.`, (30 * sin(50)) / (sin(50) + sin(60) + sin(70)), "Sides are proportional to the sines: $30\\cdot\\frac{\\sin50^\\circ}{\\sin50^\\circ+\\sin60^\\circ+\\sin70^\\circ}$"),
  a1(`In acute $\\triangle ABC$, $a=13$, $c=15$ and $\\angle C=77^\\circ$. Find $\\angle A$.`, ang(15, 77, 13), "$\\sin A=\\frac{13\\sin77^\\circ}{15}$"),
  ms(`Select everything a surveyor needs to locate a far point $C$ by triangulation from a baseline $AB$.`, ["the length of $AB$", "the angle at $A$", "the angle at $B$", "the distance $AC$", "the third angle, found by subtraction"], [0, 1, 2, 4], "The distances are what the sine law finds."),
  n1(`In $\\triangle ABC$, $\\angle A=\\angle B=70^\\circ$ and $c=8$. Find $a$.`, side(8, 40, 70), "$\\angle C=40^\\circ$; $a=\\frac{8\\sin70^\\circ}{\\sin40^\\circ}$"),
  n1(`In a triangle, $\\frac a{\\sin A}=25$ and $\\angle B=48^\\circ$. Find $b$.`, 25 * sin(48), "$b=25\\sin48^\\circ$"),
  tf(`$\\frac{\\sin A}a=\\frac{\\sin B}b$ is also a correct form of the sine law.`, true, "It is the reciprocal of each ratio."),
  n1(`Towers $A$ and $B$ are $12$ km apart. A fire makes angles of $70^\\circ$ at $A$ and $65^\\circ$ at $B$ with $AB$. How far is the fire from the line $AB$ (km)?`, side(12, 45, 65) * sin(70), "$AF=\\frac{12\\sin65^\\circ}{\\sin45^\\circ}$; distance $=AF\\sin70^\\circ$"),
  a1(`In acute $\\triangle ABC$, $b=11$, $\\angle B=72^\\circ$ and $a=10$. Find $\\angle A$.`, ang(11, 72, 10), "$\\sin A=\\frac{10\\sin72^\\circ}{11}$"),
  n1(`Two people $30$ m apart, on opposite sides of a flagpole, see its top at angles of elevation of $53^\\circ$ and $66^\\circ$. How tall is the flagpole (m)?`, side(30, 61, 66) * sin(53), "Angle at the top $61^\\circ$; distance $\\frac{30\\sin66^\\circ}{\\sin61^\\circ}$; height $\\times\\sin53^\\circ$"),
  mc(`In an acute triangle, $\\sin A=0.5$. What is $\\angle A$?`, "$30^\\circ$", ["$60^\\circ$", "$150^\\circ$", "$45^\\circ$"], "An acute angle with sine 0.5."),
  n1(`An isosceles triangle has equal sides of $12$ and base angles of $68^\\circ$. Find the base.`, side(12, 68, 44), "Vertex angle $44^\\circ$: $\\frac{12\\sin44^\\circ}{\\sin68^\\circ}$"),
  n1(`Use the triangle shown to find $AC$.`, side(150, 55, 57), "$\\angle C=55^\\circ$; $AC=\\frac{150\\sin57^\\circ}{\\sin55^\\circ}$", atriDoc(68, 57, 150, { c: "150 m", A: "68°", B: "57°", names: ["A", "B", "C"] })),
];
void sceneDoc;
