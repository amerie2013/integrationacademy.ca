// MCV4U-FR 8.1 — Équations de droites dans l'espace à deux et à trois dimensions : équations vectorielle, paramétriques
// et cartésienne en deux dimensions et les liens entre elles; équations vectorielle et paramétriques en trois dimensions,
// droite passant par deux points, vérification d'un point, et pourquoi une droite de l'espace n'a pas d'équation cartésienne unique
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3 } from "../mcv4u-ch8/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "8.1 Équations de droites dans l'espace à deux et à trois dimensions";
export const ID = lessonId(8, 1);

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0 = -4, t1 = 4, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
export const blocks = () => [
  intro({
    icon: "📏",
    title: "Équations de droites dans l'espace à deux et à trois dimensions",
    overview: S`Une droite est déterminée par un de ses points et une direction. Sous forme vectorielle, cela s'écrit \(\vec r=\vec r_0+t\vec m\) : on part du vecteur position \(\vec r_0\) et on se déplace d'un multiple quelconque \(t\) du vecteur directeur \(\vec m\). En écrivant les composantes, on obtient les <strong>équations paramétriques</strong>. En deux dimensions, une droite a aussi une <strong>équation cartésienne</strong> \(Ax+By+C=0\), dont les coefficients forment un vecteur <em>normal</em> (perpendiculaire) \([A,B]\). En trois dimensions, une droite n'a pas d'équation cartésienne unique — mais les formes vectorielle et paramétriques fonctionnent exactement de la même façon.`,
    goals: [
      "écrire les équations vectorielle et paramétriques d'une droite à partir d'un point et d'une direction, ou à partir de deux points;",
      "passer d'une forme à l'autre (vectorielle, paramétriques, cartésienne) en deux dimensions;",
      "déterminer si un point appartient à une droite;",
      "écrire les équations de droites dans l'espace à trois dimensions;",
      "trouver l'angle entre deux droites.",
    ],
    curriculum: "C4.1 (équations cartésienne, vectorielle et paramétriques d'une droite dans l'espace à deux dimensions); C4.2 (équations vectorielle et paramétriques d'une droite dans l'espace à trois dimensions)",
    prior: [
      [S`Vecteur de \(A(1,2)\) à \(B(4,6)\)?`, S`\([3,4]\).`],
      [S`Un vecteur perpendiculaire à \([3,4]\)?`, S`\([4,-3]\).`],
      [S`Pente de la droite passant par \((0,1)\) de direction \([2,6]\)?`, S`\(3\).`],
    ],
    words: [
      ["Vecteur directeur", "parallèle à la droite", "\\(\\vec m\\)"],
      ["Équation vectorielle", "\\(\\vec r=\\vec r_0+t\\vec m\\)", "t est le paramètre"],
      ["Équations paramétriques", "une équation par coordonnée", "\\(x=x_0+tm_1,\\ \\dots\\)"],
      ["Normale (deux dimensions)", "perpendiculaire à la droite", "\\([A,B]\\) dans \\(Ax+By+C=0\\)"],
    ],
  }),

  section("📌 Un point et une direction", S`
  ${vfig({ view: { xmin: -3, xmax: 8, ymin: -3, ymax: 5 }, segs: [L2([2, -1], [3, 4], -1.2, 1.4)], arrows: [{ from: [0, 0], to: [2, -1], vl: "r₀", color: "blue", off: 16 }, { from: [2, -1], to: [5, 3], vl: "m", color: "green", off: 16, w: 3.4 }, { from: [0, 0], to: [6.5, 5], color: "red", w: 1.8, dash: true, label: "r pour t = 1.5", off: -14 }], points: [{ x: 2, y: -1, label: "(2, −1)", dx: 8, dy: 14 }] }, "r = [2, −1] + t[3, 4] : chaque point de la droite est r₀ plus un multiple de m")}
  ${table(["Forme", "Deux dimensions", "Trois dimensions"], [
    ["vectorielle", "\\(\\vec r=[x_0,y_0]+t[m_1,m_2]\\)", "\\(\\vec r=[x_0,y_0,z_0]+t[m_1,m_2,m_3]\\)"],
    ["paramétriques", "\\(x=x_0+tm_1,\\ y=y_0+tm_2\\)", "\\(x=x_0+tm_1,\\ y=y_0+tm_2,\\ z=z_0+tm_3\\)"],
    ["cartésienne", "\\(Ax+By+C=0\\), normale \\([A,B]\\)", "aucune — une droite exige deux équations cartésiennes (deux plans)"],
  ])}
  ${keyIdea(S`N'importe quel point de la droite et n'importe quel multiple non nul de la direction donnent une équation tout aussi valable; une droite a donc plusieurs équations vectorielles. En deux dimensions, la normale \([A,B]\) est perpendiculaire à la direction : à partir de \(\vec m=[m_1,m_2]\), prends \([A,B]=[m_2,-m_1]\).`)}`),

  section("📌 Explorer",S`<p>Déplace le point \(\vec r_0\) et modifie la direction \(\vec m\); fais glisser \(t\) pour voir le point rouge parcourir la droite. L'affichage montre ensemble les équations vectorielle, paramétriques et cartésienne. Passe en trois dimensions et fais pivoter la vue pour voir une droite dans l'espace.</p>`),

  widget("lineLab", { init: { mode: "2d" } }),

  section("📌 Travailler avec les équations de droites", S`
  <p>Pour une droite passant par deux points, utilise un des points comme \(\vec r_0\) et le vecteur qui les relie comme \(\vec m\). Pour vérifier un point, résous une équation paramétrique pour trouver \(t\), puis vérifie que la même valeur de \(t\) satisfait les autres. Pour passer d'une équation cartésienne à une équation vectorielle, lis la normale, transforme-la en direction, puis trouve un point qui satisfait l'équation.</p>
  ${watchOut([
    "Le vecteur directeur est parallèle à la droite; la normale [A, B] lui est perpendiculaire.",
    "Un point appartient à une droite seulement si une même valeur de t fonctionne pour chaque coordonnée.",
    "Plusieurs équations vectorielles différentes décrivent la même droite.",
    "Une droite de l'espace à trois dimensions n'a pas d'équation cartésienne unique de la forme Ax + By + Cz + D = 0 — cette équation décrit un plan.",
    "L'angle entre deux droites se trouve à partir de leurs vecteurs directeurs (ou normaux); donne l'angle aigu.",
  ])}`),

  examples([
    ["Les trois formes en deux dimensions", S`Écris les équations vectorielle, paramétriques et cartésienne de la droite passant par \(A(2,-1)\) de direction \([3,4]\).`,
      [S`Vectorielle : \(\vec r=[2,-1]+t[3,4]\). Paramétriques : \(x=2+3t,\ y=-1+4t\).`, S`Une normale est \([4,-3]\) : \(4x-3y+C=0\); en substituant \((2,-1)\) : \(8+3+C=0\Rightarrow C=-11\).`],
      S`\(\vec r=[2,-1]+t[3,4]\); \(x=2+3t,\ y=-1+4t\); \(4x-3y-11=0\)`],
    ["Par deux points", S`Trouve une équation vectorielle de la droite passant par \(P(-3,5)\) et \(Q(1,-1)\), et détermine si \((5,-7)\) appartient à cette droite.`,
      [S`\(\overrightarrow{PQ}=[4,-6]\), ou la direction plus simple \([2,-3]\) : \(\vec r=[-3,5]+t[2,-3]\).`, S`\(x\) : \(-3+2t=5\Rightarrow t=4\); \(y\) : \(5-3(4)=-7\). ✓`],
      S`\(\vec r=[-3,5]+t[2,-3]\); oui, \((5,-7)\) est le point obtenu avec \(t=4\)`,
      vfig({ view: { xmin: -4, xmax: 6, ymin: -8, ymax: 6 }, segs: [L2([-3, 5], [2, -3], -0.6, 4.6)], points: [{ x: -3, y: 5, label: "P", dx: 8, dy: -4 }, { x: 1, y: -1, label: "Q", dx: 8, dy: 4 }, { x: 5, y: -7, label: "(5, −7)", dx: -60, dy: 4, color: "red" }] })],
    ["De la forme cartésienne à la forme vectorielle", S`Écris une équation vectorielle de la droite \(2x+5y-10=0\).`,
      [S`La normale est \([2,5]\); une direction est donc \([5,-2]\).`, S`Un point : \(y=0\Rightarrow x=5\).`],
      S`\(\vec r=[5,0]+t[5,-2]\)`,
      vfig({ view: { xmin: -2, xmax: 9, ymin: -2, ymax: 4 }, segs: [L2([5, 0], [5, -2], -1, 0.7)], arrows: [{ from: [5, 0], to: [6, 2.5], color: "green", vl: "n", off: -16 }, { from: [5, 0], to: [7.5, -1], color: "red", vl: "m", off: 16 }], points: [{ x: 5, y: 0, label: "(5, 0)", dx: 6, dy: 18 }] })],
    ["Une droite dans l'espace à trois dimensions", S`Écris les équations vectorielle et paramétriques de la droite passant par \(A(1,-2,4)\) et \(B(3,1,0)\), et trouve le point obtenu avec \(t=-1\).`,
      [S`\(\vec m=\overrightarrow{AB}=[2,3,-4]\) : \(\vec r=[1,-2,4]+t[2,3,-4]\).`, S`\(x=1+2t,\ y=-2+3t,\ z=4-4t\); pour \(t=-1\) : \((-1,-5,8)\).`],
      S`\(\vec r=[1,-2,4]+t[2,3,-4]\); le point \((-1,-5,8)\)`],
    ["Sur la droite? À travers un plan?", S`Pour \(x=2+t,\ y=-1+3t,\ z=4-2t\) : le point \((5,8,-2)\) appartient-il à la droite, et où la droite traverse-t-elle le plan xy?`,
      [S`\(x\) : \(t=3\); alors \(y=8\) ✓ et \(z=-2\) ✓.`, S`Le plan xy est \(z=0\) : \(4-2t=0\Rightarrow t=2\), ce qui donne \((4,5,0)\).`],
      S`oui (\(t=3\)); elle traverse le plan xy en \((4,5,0)\)`,
      vfig(merge(V3, axes3(4.8), { segs: [line3([2, -1, 4], [1, 3, -2], -0.6, 2.4, "violet")] }, { points: [{ x: p3(4, 5, 0)[0], y: p3(4, 5, 0)[1], label: "(4, 5, 0)", dx: 8, dy: 4 }, { x: p3(2, -1, 4)[0], y: p3(2, -1, 4)[1], label: "(2, −1, 4)", dx: 8, dy: -4 }] }, { view: { xmin: -3.8, xmax: 6.4, ymin: -2.8, ymax: 6 } }))],
  ]),

  practice([
    q("paramétriques", S`Pour \(\vec r=[1,4]+t[2,-1]\), trouve l'ordonnée du point obtenu avec \(t=3\).`, num(1),
      "4 + 3(−1).", [S`\(y=4-3\).`], S`\(1\)`),
    q("pente", S`Une droite a pour direction \([3,6]\). Quelle est sa pente?`, num(2),
      "Montée sur course.", [S`\(\frac63\).`], S`\(2\)`),
    q("direction", S`Lequel est un vecteur directeur de \(3x-y+7=0\)?`, choice([S`\([1,3]\)`, S`\([3,-1]\)`, S`\([3,1]\)`, S`\([-3,1]\)`], 0),
      "Perpendiculaire à la normale [3, −1].", ["Échange les composantes de la normale et change un des signes."], S`\([1,3]\)`),
    q("sur la droite", S`Pour \(\vec r=[2,0,1]+t[1,2,-1]\), quelle valeur de \(t\) donne le point \((5,6,-2)\)?`, num(3),
      "Utilise une coordonnée, puis vérifie les autres.", [S`\(2+t=5\).`], S`\(3\)`),
    q("traversée", S`La droite \(x=1+2t,\ y=3-t,\ z=2t\) traverse le plan xz (\(y=0\)). Trouve la cote (coordonnée z) de ce point.`, num(6),
      "y = 0 donne t = 3.", [S`\(z=2(3)\).`], S`\(6\)`),
  ]),

  ...hard([
    ["L'angle entre deux droites", S`Trouve l'angle aigu entre les droites \(4x+y=6\) et \(x+2y=2\).`,
      [S`Normales \([4,1]\) et \([1,2]\); l'angle entre les droites est égal à l'angle entre leurs normales.`, S`\(\cos\theta=\frac{4+2}{\sqrt{17}\sqrt5}\approx0.6508\).`],
      S`environ \(49.40^\circ\)`,
      vfig({ view: { xmin: -2, xmax: 5, ymin: -3, ymax: 4 }, segs: [{ pts: [[0.25, 5], [2.25, -3]], color: "violet", w: 2.4 }, { pts: [[-2, 2], [5, -1.5]], color: "blue", w: 2.4 }], points: [{ x: 10 / 7, y: 2 / 7, label: "49.4°", dx: 10, dy: -8, color: "red" }] })],
    ["Une droite de l'espace comme intersection de deux plans", S`Trouve une équation vectorielle de la droite passant par \((4,-1,2)\) et \((1,-1,5)\), et décris-la comme l'intersection de deux plans.`,
      [S`Direction \([-3,0,3]\), ou \([-1,0,1]\) : \(\vec r=[4,-1,2]+t[-1,0,1]\).`, S`Paramétriques : \(x=4-t,\ y=-1,\ z=2+t\). Donc \(y=-1\) en tout temps et, en additionnant, \(x+z=6\).`],
      S`\(\vec r=[4,-1,2]+t[-1,0,1]\); les plans \(y=-1\) et \(x+z=6\)`,
      vfig(merge(V3, axes3(4.8, 2.4), { segs: [line3([4, -1, 2], [-1, 0, 1], -0.8, 3.5, "red", 3)] }, { points: [{ x: p3(4, -1, 2)[0], y: p3(4, -1, 2)[1], label: "(4, −1, 2)", dx: -70, dy: 14 }, { x: p3(1, -1, 5)[0], y: p3(1, -1, 5)[1], label: "(1, −1, 5)", dx: 8, dy: -4 }] }, { view: { xmin: -5, xmax: 5, ymin: -2.8, ymax: 7 } }))],
  ], [
    q("difficile", S`Trouve l'angle aigu entre les droites \(x-y=0\) et \(y=0\) (en degrés).`, num(45),
      "Directions [1, 1] et [1, 0].", [S`\(\cos\theta=\frac1{\sqrt2}\).`], S`\(45^\circ\)`),
    q("difficile", S`Trouve la distance entre \((3,4)\) et la droite \(3x+4y-10=0\).`, num(3),
      "|Ax₀ + By₀ + C| / √(A² + B²).", [S`\(\frac{|9+16-10|}{5}\).`], S`\(3\)`),
    q("difficile", S`Trouve \(k\) pour qu'une droite de direction \([2,k,1]\) soit perpendiculaire à une droite de direction \([1,1,-4]\).`, num(2),
      "Le produit scalaire des directions vaut 0.", [S`\(2+k-4=0\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["De quoi ai-je besoin pour écrire l'équation d'une droite?", "D'un point de la droite et d'un vecteur directeur (ou de deux points, qui donnent une direction)."],
      ["Qu'est-ce que le paramètre t?", "Un nombre réel qui désigne un point de la droite : chaque valeur de t donne un point."],
      ["Quel lien y a-t-il entre la forme vectorielle et la forme cartésienne en deux dimensions?", "La normale [A, B] est perpendiculaire à la direction : [A, B] = [m₂, −m₁], à un multiple près."],
      ["Pourquoi une droite de l'espace à trois dimensions n'a-t-elle pas d'équation cartésienne?", "Une seule équation Ax + By + Cz + D = 0 décrit un plan; une droite exige deux équations de ce type."],
      ["Comment vérifier si un point appartient à une droite?", "Trouve t à partir d'une coordonnée, puis vérifie que cette valeur fonctionne pour toutes les autres."],
    ],
    summary: [
      "r = r₀ + t m.",
      "Paramétriques : une équation par coordonnée.",
      "Forme cartésienne en deux dimensions : Ax + By + C = 0, normale [A, B].",
      "Droites de l'espace à trois dimensions : formes vectorielle ou paramétriques seulement.",
    ],
    next: "En 8.2, on écrit les équations de plans.",
  }),
];
