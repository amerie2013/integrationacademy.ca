// MCV4U-FR 8.3 — Propriétés des plans : le vecteur normal, l'équation cartésienne Ax + By + Cz + D = 0, le passage de la
// forme vectorielle à la forme cartésienne, les plans parallèles et perpendiculaires, l'angle entre deux plans, les
// points d'intersection avec les axes et la distance d'un point à un plan
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3, patch3, tri3 } from "../mcv4u-ch8/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "8.3 Propriétés des plans";
export const ID = lessonId(8, 3);

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6, color = "black") => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy, color }; };
export const blocks = () => [
  intro({
    icon: "⬆️",
    title: "Propriétés des plans",
    overview: S`Un plan peut aussi être déterminé par un seul vecteur qui en sort perpendiculairement — une <strong>normale</strong> \(\vec n\). Un point \(P(x,y,z)\) appartient au plan passant par \(P_0\) exactement lorsque \(\overrightarrow{P_0P}\) est perpendiculaire à \(\vec n\), c'est-à-dire lorsque \(\vec n\cdot\overrightarrow{P_0P}=0\). En développant, on obtient l'<strong>équation cartésienne</strong> \(Ax+By+Cz+D=0\), dont les trois premiers coefficients forment la normale \([A,B,C]\). Les normales permettent de comparer facilement des plans : des plans parallèles ont des normales parallèles, des plans perpendiculaires ont des normales perpendiculaires, et l'angle entre deux plans est l'angle entre leurs normales.`,
    goals: [
      "écrire l'équation cartésienne d'un plan à partir d'un point et d'une normale;",
      "transformer une équation vectorielle d'un plan en équation cartésienne;",
      "déterminer si des plans sont parallèles, confondus ou perpendiculaires;",
      "trouver l'angle entre deux plans et les points d'intersection d'un plan avec les axes;",
      "trouver la distance d'un point à un plan.",
    ],
    curriculum: "C4.3 (reconnaître une normale à un plan et étudier les propriétés des plans); C4.4, C4.6 (équation cartésienne d'un plan; passage d'une forme à l'autre); C4.7 (distance d'un point à un plan)",
    prior: [
      [S`\([1,2,0]\times[0,1,3]\)?`, S`\([6,-3,1]\).`],
      [S`\([2,-1,3]\) est-il perpendiculaire à \([1,5,1]\)?`, S`Oui : \(2-5+3=0\).`],
      [S`\(\cos^{-1}\frac{1}{\sqrt3}\)?`, S`\(\approx54.74^\circ\).`],
    ],
    words: [
      ["Vecteur normal", "perpendiculaire au plan", "\\(\\vec n=[A,B,C]\\)"],
      ["Équation cartésienne", "\\(Ax+By+Cz+D=0\\)", ""],
      ["Plans parallèles", "normales parallèles", "\\(\\vec n_2=k\\vec n_1\\)"],
      ["Distance à un plan", "\\(\\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}\\)", ""],
    ],
  }),

  section("📌 La normale fait le travail", S`
  ${vfig(merge(V3, axes3(4.8), { polys: [tri3(4, 3, 2)] }, { arrows: [{ from: p3(4 / 3, 1, 2 / 3), to: p3(4 / 3 + 0.9, 1 + 1.2, 2 / 3 + 1.8), vl: "n", color: "green", off: -16, w: 3.2 }] }, { points: [pt(4, 0, 0, "4", -16, 6, "red"), pt(0, 3, 0, "3", 4, 18, "red"), pt(0, 0, 2, "2", 8, 0, "red")] }), "3x + 4y + 6z = 12 a pour normale [3, 4, 6] et coupe les axes en 4, 3 et 2")}
  ${table(["Plans \\(\\pi_1\\), \\(\\pi_2\\) de normales \\(\\vec n_1\\), \\(\\vec n_2\\)", "Test"], [
    ["parallèles (distincts)", "\\(\\vec n_2=k\\vec n_1\\), équations non proportionnelles"],
    ["confondus", "les équations complètes sont proportionnelles"],
    ["perpendiculaires", "\\(\\vec n_1\\cdot\\vec n_2=0\\)"],
    ["angle entre les plans", "\\(\\cos\\theta=\\frac{|\\vec n_1\\cdot\\vec n_2|}{|\\vec n_1||\\vec n_2|}\\)"],
  ])}
  ${keyIdea(S`À partir d'une équation vectorielle \(\vec r=\vec r_0+s\vec a+t\vec b\), une normale est \(\vec n=\vec a\times\vec b\); substitue \(\vec r_0\) pour trouver \(D\). Tout multiple d'une normale est aussi une normale; la direction normale d'un plan ne change donc jamais. La distance de \(P_0(x_0,y_0,z_0)\) au plan \(Ax+By+Cz+D=0\) est \(\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}\).`)}`),

  section("📌 Explorer", S`<p>Choisis la normale \([A,B,C]\) et la constante \(D\). La normale verte sort toujours perpendiculairement du plan bleu. Modifie seulement \(D\) pour faire glisser le plan parallèlement à lui-même; lis les points d'intersection avec les axes et la distance à l'origine.</p>`),

  widget("planeLab", { init: { a: 3, b: 4, c: 6, d: 12 } }),

  section("📌 Écrire et comparer des équations cartésiennes", S`
  <p>Écris \(A(x-x_0)+B(y-y_0)+C(z-z_0)=0\) et développe. Pour comparer des plans, compare d'abord leurs normales. Pour les points d'intersection avec les axes, pose deux variables égales à 0. Pour une distance, substitue le point dans le membre de gauche de \(Ax+By+Cz+D=0\) et divise par la norme de la normale.</p>
  ${watchOut([
    "La normale provient des coefficients de x, y, z — pas de D.",
    "Le produit vectoriel des deux vecteurs directeurs donne une normale; vérifie-la à l'aide de produits scalaires.",
    "Des normales parallèles avec des D non proportionnels donnent des plans parallèles distincts.",
    "Utilise l'angle aigu entre les plans (valeur absolue du produit scalaire).",
    "Dans la formule de la distance, ramène tout d'un même côté (… + D = 0) avant de substituer.",
  ])}`),

  examples([
    ["À partir d'un point et d'une normale", S`Trouve l'équation cartésienne du plan passant par \(P(2,-1,3)\) de normale \([4,1,-2]\).`,
      [S`\(4(x-2)+1(y+1)-2(z-3)=0\).`, S`\(4x+y-2z-8+1+6=0\).`],
      S`\(4x+y-2z-1=0\)`],
    ["De la forme vectorielle à la forme cartésienne", S`Trouve une équation cartésienne du plan \(\vec r=[1,0,2]+s[1,2,0]+t[0,1,3]\).`,
      [S`\(\vec n=[1,2,0]\times[0,1,3]=[6,-3,1]\).`, S`\(6x-3y+z=6(1)-3(0)+2=8\).`],
      S`\(6x-3y+z-8=0\)`],
    ["Parallèles ou perpendiculaires?", S`Compare \(2x-y+3z=5\) avec \(-4x+2y-6z=1\), puis avec \(x+5y+z=0\).`,
      [S`\([-4,2,-6]=-2[2,-1,3]\), mais \(1\ne-2(5)\) : parallèles et distincts.`, S`\([2,-1,3]\cdot[1,5,1]=2-5+3=0\) : perpendiculaires.`],
      S`la première paire est formée de plans parallèles; la deuxième, de plans perpendiculaires`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1, 1, 2], [1, 2, 0], [0, 3, 1], 0.8, "#dbeafe", "blue", 0.55), patch3([2, 2, 3.3], [1, 2, 0], [0, 3, 1], 0.8, "#dcfce7", "green", 0.55)] }, { texts: [{ x: 4.2, y: 4.6, t: "plans parallèles", color: "gray" }] }))],
    ["L'angle entre deux plans", S`Trouve l'angle entre \(x+y+z=1\) et \(2x-y+2z=7\).`,
      [S`\(\cos\theta=\frac{|2-1+2|}{\sqrt3\times3}=\frac{3}{3\sqrt3}\).`],
      S`environ \(54.74^\circ\)`],
    ["Points d'intersection avec les axes et esquisse", S`Trouve les points d'intersection de \(3x+4y+6z=12\) avec les axes, et esquisse la partie du plan située dans le premier octant.`,
      [S`Abscisse à l'origine : \(\frac{12}3=4\); ordonnée à l'origine : \(\frac{12}4=3\); cote à l'origine : \(\frac{12}6=2\).`, S`Relie \((4,0,0)\), \((0,3,0)\), \((0,0,2)\).`],
      S`le plan coupe les axes en 4, 3 et 2 : un triangle dans le premier octant`,
      vfig(merge(V3, axes3(4.8), { polys: [tri3(4, 3, 2)] }, { points: [pt(4, 0, 0, "(4, 0, 0)", -70, 14), pt(0, 3, 0, "(0, 3, 0)", 0, 18), pt(0, 0, 2, "(0, 0, 2)")] }))],
  ]),

  practice([
    q("D", S`Le plan de normale \([1,2,3]\) passant par \((1,1,1)\) est \(x+2y+3z=D\). Trouve \(D\).`, num(6),
      "Substitue le point.", [S`\(1+2+3\).`], S`\(6\)`),
    q("normale", S`Lequel est une normale à \(5x-z=2\)?`, choice([S`\([5,0,-1]\)`, S`\([5,-1,0]\)`, S`\([5,-1,2]\)`, S`\([0,5,-1]\)`], 0),
      "Coefficients de x, y, z.", ["Il n'y a pas de terme en y : son coefficient est 0."], S`\([5,0,-1]\)`),
    q("cote à l'origine", S`Trouve la cote à l'origine (point d'intersection avec l'axe des z) de \(2x+3y+4z=20\).`, num(5),
      "Pose x = y = 0.", [S`\(\frac{20}4\).`], S`\(5\)`),
    q("perpendiculaires", S`Trouve \(k\) pour que \(kx+2y-z=0\) soit perpendiculaire à \(x+y+2z=3\).`, num(0),
      "Le produit scalaire des normales vaut 0.", [S`\(k+2-2=0\).`], S`\(0\)`),
    q("angle", S`Trouve l'angle entre les plans \(z=0\) et \(x+z=0\) (en degrés).`, num(45),
      "Normales [0, 0, 1] et [1, 0, 1].", [S`\(\cos\theta=\frac1{\sqrt2}\).`], S`\(45^\circ\)`),
  ]),

  ...hard([
    ["Un plan perpendiculaire à une droite", S`Trouve l'équation cartésienne du plan passant par \(A(1,2,0)\) et perpendiculaire à la droite \(\vec r=[0,0,1]+t[2,-1,3]\).`,
      [S`La direction de la droite est une normale au plan : \(\vec n=[2,-1,3]\).`, S`\(2x-y+3z=2(1)-2+0=0\).`],
      S`\(2x-y+3z=0\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1, 2, 0], [1, 2, 0], [0, 3, 1], 0.9)] }, { segs: [line3([0, 0, 1], [2, -1, 3], -0.7, 1.2, "red", 2.8)] }, { points: [pt(1, 2, 0, "A", 8, 14)] }, { view: { xmin: -4, xmax: 6, ymin: -2.8, ymax: 6 } }))],
    ["Distance d'un point à un plan", S`Trouve la distance du point \(P(3,1,-2)\) au plan \(2x-2y+z=9\).`,
      [S`Écris-le sous la forme \(2x-2y+z-9=0\); \(|\vec n|=\sqrt{4+4+1}=3\).`, S`\(\frac{|2(3)-2(1)+(-2)-9|}{3}=\frac{7}{3}\).`],
      S`\(\frac73\approx2.33\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([3 + 14 / 9, 1 - 14 / 9, -2 + 7 / 9], [1, 1, 0], [0, 1, 2], 1.3)] }, { segs: [{ pts: [p3(3, 1, -2), p3(3 + 14 / 9, 1 - 14 / 9, -2 + 7 / 9)], color: "red", dash: true, w: 2.4 }] }, { points: [pt(3, 1, -2, "P(3, 1, −2)", 8, 12), pt(3 + 14 / 9, 1 - 14 / 9, -2 + 7 / 9, "pied", -36, 16, "red")] }, { view: { xmin: -6.4, xmax: 5, ymin: -6, ymax: 5.4 } }))],
  ], [
    q("difficile", S`Trouve la distance de l'origine au plan \(2x+3y+6z=14\).`, num(2),
      "|−14| / √49.", [S`\(\frac{14}{7}\).`], S`\(2\)`),
    q("difficile", S`Trouve l'angle entre \(x+2y+2z=1\) et \(2x+2y+z=0\) (en degrés, au centième près).`, num(27.27, 0.01),
      "cos θ = 8/9.", [S`\(\frac{2+4+2}{3\times3}\).`], S`\(27.27^\circ\)`),
    q("difficile", S`Trouve \(D\gt0\) pour que le plan \(x-2y+2z=D\) soit à 3 unités de l'origine.`, num(9),
      "D / 3 = 3.", [S`\(|\vec n|=3\).`], S`\(9\)`),
  ]),

  wrapUp({
    qas: [
      ["Qu'est-ce qu'une normale à un plan?", "Un vecteur non nul perpendiculaire à tous les vecteurs situés dans le plan."],
      ["Comment lire la normale dans une équation cartésienne?", "Prends les coefficients de x, de y et de z : Ax + By + Cz + D = 0 a pour normale [A, B, C]."],
      ["Comment obtenir une équation cartésienne à partir d'une équation vectorielle?", "Fais le produit vectoriel des deux vecteurs directeurs pour obtenir une normale, puis substitue le point connu pour trouver D."],
      ["Comment savoir si deux plans sont parallèles ou perpendiculaires?", "Parallèles : les normales sont des multiples l'une de l'autre. Perpendiculaires : le produit scalaire des normales vaut 0."],
      ["Comment trouver la distance d'un point à un plan?", "|Ax₀ + By₀ + Cz₀ + D| / √(A² + B² + C²)."],
    ],
    summary: [
      "n · (r − r₀) = 0 ⇒ Ax + By + Cz + D = 0.",
      "Normale à partir d'une équation vectorielle : a × b.",
      "Compare les plans à l'aide de leurs normales.",
      "Distance = |Ax₀ + By₀ + Cz₀ + D| / |n|.",
    ],
    next: "En 8.4, on trouve le point d'intersection de deux droites.",
  }),
];
