// MPM2D Worksheet 7.4 — Applications of the Sine & Cosine Laws (teacher edition)
import { atriT, sceneT, polygon } from "./figT.mjs";

const r = Math.PI / 180;
const sas = (b, c, A, l = {}) => { const C = [b * Math.cos(A * r), b * Math.sin(A * r)]; return sceneT(polygon([[0, 0], [c, 0], C], { sides: [l.c ?? "", l.a ?? "", l.b ?? ""], names: l.names ?? ["A", "B", "C"], angles: l.A ? [[0, l.A]] : [], fill: l.fill ?? "blue", color: l.color ?? "blue" }), 5.5, 340); };

const EXAMPLES = [
  { title: "Length of a lake", q: String.raw`From point $C$, the ends of a lake are $450$ m and $380$ m away, with a $64^\circ$ angle between the sightlines. How long is the lake?`,
    fig: sas(450, 380, 64, { b: "450 m", c: "380 m", a: "?", A: "64°", names: ["C", "", ""] }),
    steps: [String.raw`SAS: $d^2=450^2+380^2-2(450)(380)\cos64^\circ\approx196\,975$.`, String.raw`$d\approx443.8$.`], ans: String.raw`about $444$ m` },
  { title: "Locating a fire", q: String.raw`Ranger towers $A$ and $B$ are $15$ km apart. A fire is seen at $52^\circ$ from $A$ and $57^\circ$ from $B$ (angles to the line $AB$). How far is it from each tower?`,
    fig: atriT(52, 57, 15, { c: "15 km", A: "52°", B: "57°", names: ["A", "B", "F"], fill: "red", color: "red" }),
    steps: [String.raw`$\angle F=71^\circ$.`, String.raw`$AF=\frac{15\sin57^\circ}{\sin71^\circ}\approx13.30$; $BF=\frac{15\sin52^\circ}{\sin71^\circ}\approx12.50$.`], ans: String.raw`$13.3$ km from $A$, $12.5$ km from $B$` },
  { title: "A truss", q: String.raw`A triangular truss has sides $6$, $7$ and $8$ m. Find its angles.`,
    steps: [String.raw`Opposite $8$: $\cos\theta=\frac{36+49-64}{84}=0.25$, $\theta\approx75.5^\circ$.`, String.raw`Opposite $7$: $\approx57.9^\circ$; opposite $6$: $\approx46.6^\circ$.`], ans: String.raw`$75.5^\circ$, $57.9^\circ$, $46.6^\circ$` },
  { title: "Width of a canyon", q: String.raw`Points $A$ and $B$ on one rim are $120$ m apart. A point $C$ on the far rim makes $\angle CAB=64^\circ$ and $\angle CBA=59^\circ$. Find the width of the canyon.`,
    steps: [String.raw`$\angle C=57^\circ$; $AC=\frac{120\sin59^\circ}{\sin57^\circ}\approx122.6$.`, String.raw`Width $=AC\sin64^\circ\approx110.2$.`], ans: String.raw`about $110$ m` },
  { title: "A kite", q: String.raw`Two people $60$ m apart, on opposite sides of a kite, see it at angles of elevation of $48^\circ$ and $57^\circ$. How high is the kite?`,
    fig: atriT(48, 57, 60, { c: "60 m", A: "48°", B: "57°", names: ["P", "Q", "K"], fill: "amber", color: "amber" }),
    steps: [String.raw`$\angle K=75^\circ$; $PK=\frac{60\sin57^\circ}{\sin75^\circ}\approx52.1$.`, String.raw`Height $=52.1\sin48^\circ\approx38.7$.`], ans: String.raw`about $38.7$ m` },
  { title: "Sightings from both sides", q: String.raw`Two people $70$ m apart, on opposite sides of a tower, see its top at angles of elevation of $49^\circ$ and $58^\circ$. Find the tower's height.`,
    steps: [String.raw`Angle at the top $=180^\circ-49^\circ-58^\circ=73^\circ$; distance from the first person $=\frac{70\sin58^\circ}{\sin73^\circ}\approx62.08$.`, String.raw`Height $=62.08\sin49^\circ\approx46.9$.`], ans: String.raw`about $46.9$ m` },
  { title: "Ships", q: String.raw`Two ships leave port on courses $58^\circ$ apart and sail $25$ km and $30$ km. How far apart are they?`,
    steps: [String.raw`$d^2=625+900-1500\cos58^\circ\approx730.1$.`, String.raw`$d\approx27.0$.`], ans: String.raw`about $27.0$ km` },
  { title: "A triangular park", q: String.raw`Two sides of a triangular park are $120$ m and $95$ m with a $72^\circ$ angle between them. Find the length of fencing needed for the whole perimeter.`,
    steps: [String.raw`Third side: $\sqrt{120^2+95^2-2(120)(95)\cos72^\circ}\approx128.0$.`, String.raw`Perimeter $\approx120+95+128.0=343.0$.`], ans: String.raw`about $343$ m` },
  { title: "A hot-air balloon", q: String.raw`Two observers $500$ m apart, on opposite sides of a balloon, measure angles of elevation of $64^\circ$ and $71^\circ$. How high is the balloon?`,
    steps: [String.raw`Angle at the balloon $=45^\circ$; distance from the first observer $=\frac{500\sin71^\circ}{\sin45^\circ}\approx668.6$.`, String.raw`Height $\approx668.6\sin64^\circ\approx600.9$.`], ans: String.raw`about $601$ m` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`From a point, the ends of a pond are $280$ m and $350$ m away with $52^\circ$ between the sightlines. How long is the pond?`, recap: "Pond.", ans: String.raw`$\approx283.2$ m` },
  { level: 1, q: String.raw`Towers $9$ km apart see a fire at $55^\circ$ and $60^\circ$. How far is the fire from the tower with the $55^\circ$ angle?`, recap: "Fire.", ans: String.raw`$\frac{9\sin60^\circ}{\sin65^\circ}\approx8.6$ km` },
  { level: 1, q: String.raw`A truss has sides $3$, $4$ and $4.5$ m. Find its largest angle.`, recap: "Truss.", ans: String.raw`$\approx78.6^\circ$` },
  { level: 2, q: String.raw`A mast is supported by two guy wires anchored $18$ m apart on opposite sides. The wires make angles of $62^\circ$ and $70^\circ$ with the ground. Find the length of the first wire and the height where the wires meet.`, recap: "Guy wires.", ans: String.raw`$\frac{18\sin70^\circ}{\sin48^\circ}\approx22.8$ m; height $\approx20.1$ m`, fig: atriT(62, 70, 18, { c: "18 m", A: "62°", B: "70°", names: ["P", "Q", "top"] }) },
  { level: 2, q: String.raw`Two surveyors $85$ m apart, on opposite sides of a monument, see its top at angles of elevation of $56^\circ$ and $61^\circ$. Find the monument's height.`, recap: "Both-side sightings.", ans: String.raw`top angle $63^\circ$; height $\approx\frac{85\sin61^\circ}{\sin63^\circ}\sin56^\circ\approx69.2$ m` },
  { level: 2, q: String.raw`Two boats leave a dock on paths $66^\circ$ apart at $12$ km/h and $15$ km/h. How far apart are they after $2$ hours?`, recap: "Boats.", ans: String.raw`sides $24$ and $30$: $\approx29.7$ km` },
  { level: 2, q: String.raw`A surveyor's baseline $AB$ is $250$ m. A landmark $C$ makes $\angle A=58^\circ$ and $\angle B=66^\circ$. Find $BC$.`, recap: "Triangulation.", ans: String.raw`$\angle C=56^\circ$; $BC=\frac{250\sin58^\circ}{\sin56^\circ}\approx255.7$ m` },
  { level: 2, q: String.raw`A triangular garden has sides $14$ m, $16$ m and $18$ m. Find the angle at the corner between the $14$ m and $16$ m sides.`, recap: "Garden corner.", ans: String.raw`opposite $18$: $\approx73.4^\circ$` },
  { level: 3, space: 5.5, q: String.raw`From the top of a $60$ m building, the angle of depression to a car is $35^\circ$, and from the top of a second building across the street (same height) it is $50^\circ$. The car is between the buildings. Find the distance between the buildings.`, recap: "Two buildings.", ans: String.raw`$\frac{60}{\tan35^\circ}+\frac{60}{\tan50^\circ}\approx85.7+50.3=136.0$ m` },
  { level: 3, space: 5, q: String.raw`Plan how you could find the width of a river using only a measuring tape and a protractor, without crossing it. Include a diagram and the law you would use.`, recap: "Plan a survey.", ans: "baseline and two angles; sine law, then a right-triangle step for the width" },
  { level: 3, space: 5, q: String.raw`A plane flies $320$ km, then turns and flies $210$ km. It is now $300$ km from its start. Find the angle between the two legs at the turn.`, recap: "Find the turn angle.", ans: String.raw`$\cos\theta=\frac{320^2+210^2-300^2}{2(320)(210)}$: $\approx65.1^\circ$` },
  { level: 3, space: 5, q: String.raw`Two observers $1.2$ km apart, on opposite sides of a drone, see it at angles of elevation of $62^\circ$ and $70^\circ$. Find the drone's altitude and explain why the triangle is acute.`, recap: "Both-side sightings.", ans: String.raw`angle at drone $48^\circ$ (all angles under $90^\circ$); altitude $\approx\frac{1.2\sin70^\circ}{\sin48^\circ}\sin62^\circ\approx1.34$ km` },
  { level: 3, space: 5, q: String.raw`A triangular sail has sides $5$ m, $6$ m and $7$ m. Find the angle between the $6$ m and $7$ m sides, then the height of the sail measured to the $7$ m side.`, recap: "Sail.", ans: String.raw`$\approx44.4^\circ$; height $=6\sin44.4^\circ\approx4.2$ m` },
];

export const WS = {
  code: "7.4",
  title: "Applications of the Sine & Cosine Laws",
  bigideas: String.raw`Real measurements usually give a baseline and two angles (sine law, after finding the third angle), two distances and the angle between them (cosine law), or three distances (cosine law). Sketch and label the triangle first. Heights and perpendicular widths need one more right-triangle step: height $=$ side $\times\sin(\text{angle})$. Two angles of elevation from points on a line make a triangle whose angle at the top is the difference of the angles.`,
  goals: ["Model situations with acute triangles.", "Choose the law.", "Solve distance, angle and height problems.", "Combine oblique and right triangles."],
  curriculum: "T3",
  vocab: [["Triangulation", "baseline + two angles"], ["Baseline", "a measured segment"], ["Perpendicular distance", "shortest distance to a line"]],
  hook: String.raw`Show a map with two fire towers and smoke between them. Ask how the rangers could pinpoint the fire using only the directions from each tower.`,
  concepts: [
    ["1. Triangulation", String.raw`Baseline + two angles → sine law.
${atriT(62, 54, 200, { c: "baseline", A: "62°", B: "54°", fill: "green", color: "green" }, 5)}`],
    ["2. Distances", String.raw`Two distances + included angle → cosine law.`],
    ["3. Heights", String.raw`Drop a perpendicular: height $=$ side $\times\sin$.`],
  ],
  tips: ["Sketch first.", "Use angles inside the triangle.", "Third angle first.", "Perpendicular for heights.", "Units in the answer."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
