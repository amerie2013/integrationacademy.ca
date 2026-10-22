// IB AA SL chapter 11 written-response (long_answer) questions for printed chapter tests (Part C), each with a figure.
import { figDoc, cone, cuboidDiag, rightT, elevation, triSAS, tri, journey, pyramid, cylinder } from "./figs11.mjs";

const T = { 1: "11.1 Distance, Volume and Surface Area in 3D", 2: "11.2 Right-Angled Triangle Trigonometry", 3: "11.3 The Sine Rule", 4: "11.4 The Cosine Rule and the Area of a Triangle", 5: "11.5 Applications: Bearings, Elevation and 3D Angles" };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const r = (d) => (d * Math.PI) / 180, g = (x) => (x * 180) / Math.PI, f = (v, d = 2) => String(Math.round(v * 10 ** d) / 10 ** d);
const side = (a, b, C) => Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(r(C)));
const ang = (a, b, c) => g(Math.acos((a * a + b * b - c * c) / (2 * a * b)));
const trip = (b1, a, b2, b) => { const x = a * Math.sin(r(b1)) + b * Math.sin(r(b2)), y = a * Math.cos(r(b1)) + b * Math.cos(r(b2)); let br = g(Math.atan2(x, y)); if (br < 0) br += 360; return { d: Math.hypot(x, y), b: br }; };

export const WRITTEN = [
  W(1, "medium", 4, S`The cone shown has radius 8 cm and slant height 17 cm. (a) Find its height. (b) Find its volume. (c) Find its total surface area.`,
    S`(a) $\sqrt{289-64}=15$. (b) $\frac13\pi(64)(15)=320\pi\approx1005.3$ cm³. (c) $64\pi+136\pi=200\pi\approx628.3$ cm². [1, 1, 2.]`,
    figDoc({ items: cone(8, 15, { lr: "r = 8", lh: "h", ls: "17" }) })),
  W(1, "hard", 5, S`A capsule is a cylinder of radius $r$ and length 10 cm with a hemisphere on each end. (a) Write its volume in terms of $r$. (b) Show that $r=2$ gives a volume of $\frac{152}{3}\pi$ cm³. (c) Find the surface area when $r=2$.`,
    S`(a) $V=10\pi r^2+\frac43\pi r^3$. (b) $40\pi+\frac{32}3\pi=\frac{152}{3}\pi$. (c) $S=4\pi r^2+2\pi r(10)=16\pi+40\pi=56\pi\approx175.9$ cm². [1, 2, 2.]`,
    figDoc({ items: cylinder(2, 10, { lr: "r", lh: "10" }) })),
  W(2, "medium", 4, S`From a point 60 m from the base of a building, the angle of elevation of the top is 36° (shown). (a) Find the height of the building. (b) Find the distance from the point to the top. (c) Find the angle of depression from the top to a car 25 m beyond the point.`,
    S`(a) $60\tan36^\circ\approx${f(60 * Math.tan(r(36)))}$ m. (b) $\frac{60}{\cos36^\circ}\approx${f(60 / Math.cos(r(36)))}$ m. (c) $\tan^{-1}\frac{${f(60 * Math.tan(r(36)))}}{85}\approx${f(g(Math.atan((60 * Math.tan(r(36))) / 85)))}^\circ$. [1, 1, 2.]`,
    figDoc({ items: elevation(60, 60 * Math.tan(r(36)), { ld: "60 m", lh: "h", angle: "36°" }) })),
  W(2, "hard", 5, S`From A the angle of elevation of the top of a tower is 21°. Moving 80 m closer to B, the angle is 37° (shown). (a) Write expressions for the height in terms of the distance x from B to the tower. (b) Find x. (c) Find the height of the tower.`,
    (() => { const x = (80 * Math.tan(r(21))) / (Math.tan(r(37)) - Math.tan(r(21))); return S`(a) $h=x\tan37^\circ=(x+80)\tan21^\circ$. (b) $x=\frac{80\tan21^\circ}{\tan37^\circ-\tan21^\circ}\approx${f(x)}$ m. (c) $h\approx${f(x * Math.tan(r(37)))}$ m. [2, 2, 1.]`; })(),
    figDoc({ items: [{ seg: [[-80, 0], [83.1, 0]], color: "gray" }, { poly: [[-80, 0], [83.1, 0], [83.1, 62.6]], fill: "none", color: "violet" }, { seg: [[0, 0], [83.1, 62.6]], color: "blue" }, { seg: [[83.1, 0], [83.1, 62.6]], color: "ink", width: 3 }, { arc: [[0, 0], [-80, 0], [83.1, 62.6]], label: "21°" }, { arc: [[40, 0], [0, 0], [83.1, 62.6]], label: "37°" }, { dim: [[-80, 0], [0, 0]], label: "80 m", off: 8 }, { text: "A", at: [-80, -8], bold: true }, { text: "B", at: [0, -8], bold: true }, { text: "x", at: [41.5, -8], bold: true }] })),
  W(3, "medium", 4, S`In triangle ABC (shown), $A=52^\circ$, $B=74^\circ$ and $a=18$ cm. (a) Find C. (b) Find b. (c) Find c.`,
    S`(a) $54^\circ$. (b) $\frac{18\sin74^\circ}{\sin52^\circ}\approx${f((18 * Math.sin(r(74))) / Math.sin(r(52)))}$ cm. (c) $\frac{18\sin54^\circ}{\sin52^\circ}\approx${f((18 * Math.sin(r(54))) / Math.sin(r(52)))}$ cm. [1, 1, 2.]`,
    figDoc({ items: tri([0, 0], [(18 * Math.sin(r(54))) / Math.sin(r(52)), 0], [((18 * Math.sin(r(74))) / Math.sin(r(52))) * Math.cos(r(52)), ((18 * Math.sin(r(74))) / Math.sin(r(52))) * Math.sin(r(52))], { sides: ["c", "a = 18", "b"], names: ["A", "B", "C"], angles: [[0, "52°"], [1, "74°"]] }) })),
  W(3, "hard", 6, S`In triangle ABC, $A=38^\circ$, $a=10$ and $b=15$. (a) Show that there are two possible triangles. (b) Find both values of B. (c) Find both values of c. (d) Find the difference between the two areas.`,
    (() => { const B1 = g(Math.asin((15 * Math.sin(r(38))) / 10)), c1 = (10 * Math.sin(r(142 - B1))) / Math.sin(r(38)), c2 = (10 * Math.sin(r(B1 - 38))) / Math.sin(r(38)); return S`(a) $b\sin A\approx9.23<10<15$. (b) $B\approx${f(B1)}^\circ$ or $${f(180 - B1)}^\circ$. (c) $c\approx${f(c1)}$ or $${f(c2)}$. (d) $\frac12(15)(c_1-c_2)\sin38^\circ\approx${f(0.5 * 15 * (c1 - c2) * Math.sin(r(38)))}$. [1, 2, 2, 1.]`; })(),
    figDoc({ items: [{ seg: [[0, 0], [20, 0]], color: "gray" }, { seg: [[0, 0], [15 * Math.cos(r(38)), 15 * Math.sin(r(38))]], color: "green", width: 2.6 }, { circle: [15 * Math.cos(r(38)), 15 * Math.sin(r(38)), 10], color: "red", dash: true }, { arc: [[5, 0], [0, 0], [11.8, 9.2]], label: "38°" }, { text: "A", at: [-0.8, -0.8], bold: true }, { text: "C", at: [11.8, 10.2], bold: true }, { text: "b = 15", at: [4.5, 5], bold: true }] })),
  W(4, "medium", 4, S`In triangle PQR (shown), $PQ=11$, $PR=8$ and angle $P=64^\circ$. (a) Find QR. (b) Find the area of the triangle. (c) Find angle Q.`,
    (() => { const qr = side(11, 8, 64); return S`(a) $QR^2=121+64-176\cos64^\circ\Rightarrow QR\approx${f(qr)}$. (b) $\frac12(11)(8)\sin64^\circ\approx${f(44 * Math.sin(r(64)))}$. (c) $\cos Q=\frac{11^2+${f(qr)}^2-8^2}{2(11)(${f(qr)})}\Rightarrow Q\approx${f(ang(11, qr, 8))}^\circ$. [2, 1, 1.]`; })(),
    figDoc({ items: triSAS(11, 8, 64, { sides: ["QR", "11", "8"], names: ["R", "Q", "P"], angles: [[2, "64°"]] }).items })),
  W(4, "hard", 6, S`A triangular plot has sides 120 m, 95 m and 150 m (shown). (a) Find the largest angle. (b) Find the area of the plot. (c) Find the shortest distance from the largest angle's vertex to the opposite side.`,
    (() => { const C = ang(120, 95, 150), A = 0.5 * 120 * 95 * Math.sin(r(C)); return S`(a) $\cos C=\frac{120^2+95^2-150^2}{2(120)(95)}\Rightarrow C\approx${f(C)}^\circ$. (b) $\frac12(120)(95)\sin C\approx${f(A, 1)}$ m². (c) $h=\frac{2A}{150}\approx${f((2 * A) / 150)}$ m. [2, 2, 2.]`; })(),
    figDoc({ items: tri([0, 0], [150, 0], [120 * Math.cos(r(ang(150, 120, 95))), 120 * Math.sin(r(ang(150, 120, 95)))], { sides: ["150 m", "95 m", "120 m"] }) })),
  W(5, "medium", 4, S`A boat sails 16 km on 050° and then 12 km on 140° (shown). (a) Find the angle at the turning point. (b) Find the distance from the start. (c) Find the bearing of the boat from the start.`,
    (() => { const J = trip(50, 16, 140, 12); return S`(a) $90^\circ$ (change of direction 90°). (b) $\sqrt{256+144}=20$ km. (c) $50^\circ+\tan^{-1}\frac{12}{16}\approx${f(J.b, 1)}^\circ$. [1, 1, 2.]`; })(),
    figDoc({ items: journey(50, 16, 140, 12, { l1: "16 km", l2: "12 km" }).items })),
  W(5, "hard", 6, S`A square-based pyramid has base 16 m and vertical height 15 m (shown). (a) Find the length of a sloping edge. (b) Find the angle between a sloping edge and the base. (c) Find the angle between a triangular face and the base. (d) Find the total surface area.`,
    (() => { const hd = 8 * Math.SQRT2, e = Math.sqrt(225 + 128); return S`(a) $\sqrt{15^2+(8\sqrt2)^2}=\sqrt{353}\approx${f(e)}$ m. (b) $\tan^{-1}\frac{15}{8\sqrt2}\approx${f(g(Math.atan(15 / hd)))}^\circ$. (c) $\tan^{-1}\frac{15}{8}\approx${f(g(Math.atan(15 / 8)))}^\circ$. (d) face height 17: $256+4\cdot\frac12\cdot16\cdot17=800$ m². [1, 2, 2, 1.]`; })(),
    figDoc({ items: pyramid(16, 15, { lb: "16", lh: "h = 15", ls: "" }) })),
];
