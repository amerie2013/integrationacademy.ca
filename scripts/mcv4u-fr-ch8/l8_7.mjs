// MCV4U-FR 8.7 — Révision du chapitre 8 : équations de droites et de plans, normales, intersections de droites, de droites
// et de plans, et de plans, et distances, avec des exercices variés et un niveau difficile
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3, patch3 } from "../mcv4u-ch8/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "8.7 Révision du chapitre 8";
export const ID = lessonId(8, 7);

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6, color = "black") => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy, color }; };
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 8 — Droites et plans",
    overview: S`Cette page rassemble le chapitre avant l'évaluation. Les droites sont décrites par un point et une direction; les plans, par un point et soit deux directions, soit une normale. Les intersections s'obtiennent en résolvant des équations : substituer une droite dans un plan, égaler les équations paramétriques de deux droites, ou procéder par élimination dans les équations de plans. Les distances utilisent des projections sur une normale ou sur un produit vectoriel.`,
    goals: [
      "te rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "écrire les équations de droites et de plans sous toutes leurs formes;",
      "trouver les intersections de droites, de droites et de plans, et de plans;",
      "trouver des angles entre des droites et des plans;",
      "trouver la distance d'un point à un plan et la distance entre deux droites gauches.",
    ],
    curriculum: "C3.1–C3.3, C4.1–C4.7 (tout le chapitre)",
    prior: [
      [S`Normale de \(2x-y+4z=7\)?`, S`\([2,-1,4]\).`],
      [S`Direction de la droite d'intersection de deux plans?`, S`\(\vec n_1\times\vec n_2\).`],
      [S`Distance de \((x_0,y_0,z_0)\) au plan \(Ax+By+Cz+D=0\)?`, S`\(\frac{|Ax_0+By_0+Cz_0+D|}{\sqrt{A^2+B^2+C^2}}\).`],
    ],
    words: [
      ["Droite", "\\(\\vec r=\\vec r_0+t\\vec m\\)", ""],
      ["Plan", "\\(\\vec r=\\vec r_0+s\\vec a+t\\vec b\\) ou \\(Ax+By+Cz+D=0\\)", ""],
      ["Droites gauches", "non parallèles, sans point commun", ""],
      ["Test du produit mixte", "\\(\\vec n_1\\cdot(\\vec n_2\\times\\vec n_3)\\ne0\\)", "un point"],
    ],
  }),

  section("📌 Le chapitre en une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["8.1 Droites", "r = r₀ + t m; en 2D, forme cartésienne Ax + By + C = 0", "normale [A, B] ⟂ m", "aucune équation cartésienne de droite en 3D"],
    ["8.2 Plans (forme vectorielle)", "r = r₀ + s a + t b", "trois points : AB, AC", "directions non parallèles"],
    ["8.3 Plans (normale)", "Ax + By + Cz + D = 0", "n = a × b", "angle à l'aide des normales"],
    ["8.4 Deux droites", "résoudre pour s et t", "droites gauches en 3D", "vérifier chaque coordonnée"],
    ["8.5 Droite et plan", "substituer la droite", "pied de la perpendiculaire", "0t = c ou 0t = 0"],
    ["8.6 Plans", "élimination; n₁ × n₂", "prisme, faisceau, point", "test du produit mixte"],
  ])),

  section("📌 Explorer", S`<p>Utilise l'explorateur droite-plan pour vérifier les exemples de révision : choisis une direction, lis l'équation en \(t\) et observe quand la droite traverse le plan, le manque ou y est contenue.</p>`),

  widget("linePlaneLab", { init: { m: [1, 2, 1] } }),

  section("📌 Vue d'ensemble", S`${keyIdea(S`Chaque question se ramène à des notions vectorielles que tu connais déjà : directions et normales, produits scalaires pour la perpendicularité et les angles, produits vectoriels pour les normales et les distances, et substitution ou élimination pour les intersections.`)}
  ${vfig(merge(V3, axes3(4.6), { polys: [patch3([2, 2, 1.5], [1, -1, 0], [1, 0, -1], 1.6)] }, { segs: [line3([0, 0, 1], [1, 2, 1], -0.5, 2.4, "red", 2.8)] }, { points: [pt(2, 4, 3, "(2, 4, 3)", 8, -4, "red")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }), "Une droite qui rencontre un plan en un point")}`),

  examples([
    ["Une droite passant par deux points", S`Écris une équation vectorielle de la droite passant par \(A(2,0,-1)\) et \(B(5,4,-1)\), et trouve \(|AB|\).`,
      [S`\(\overrightarrow{AB}=[3,4,0]\) : \(\vec r=[2,0,-1]+t[3,4,0]\).`, S`\(|AB|=5\).`],
      S`\(\vec r=[2,0,-1]+t[3,4,0]\); longueur 5`],
    ["Un plan passant par trois points", S`Trouve une équation cartésienne du plan passant par \(A(1,0,0)\), \(B(0,1,0)\), \(C(1,1,1)\).`,
      [S`\(\overrightarrow{AB}=[-1,1,0]\), \(\overrightarrow{AC}=[0,1,1]\); \(\vec n=[1,1,-1]\).`, S`\(x+y-z=1+0-0=1\).`],
      S`\(x+y-z=1\)`,
      vfig(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 0, 0), p3(0, 1, 0), p3(1, 1, 1)], fill: "#dbeafe", stroke: "blue" }], points: [pt(1, 0, 0, "A", -14, 16), pt(0, 1, 0, "B", 2, 18), pt(1, 1, 1, "C")] }))],
    ["Une droite qui rencontre un plan", S`Trouve où \(\vec r=[0,0,1]+t[1,2,1]\) rencontre \(x+y+z=9\).`,
      [S`\(t+2t+1+t=9\Rightarrow t=2\).`],
      S`\((2,4,3)\)`],
    ["Distance d'un point à un plan", S`Trouve la distance de \((1,-2,3)\) au plan \(2x+y+2z=1\).`,
      [S`\(\frac{|2-2+6-1|}{3}\).`],
      S`\(\frac53\approx1.67\)`],
    ["Deux plans", S`Trouve la droite d'intersection de \(x+z=2\) et \(y-z=1\).`,
      [S`Direction \([1,0,1]\times[0,1,-1]=[-1,1,1]\).`, S`Point avec \(z=0\) : \((2,1,0)\).`],
      S`\(\vec r=[2,1,0]+t[-1,1,1]\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1, 1, 1], [0, 1, 0], [1, 0, -1], 1.4, "#dbeafe", "blue", 0.5), patch3([1, 1.5, 0.5], [1, 0, 0], [0, 1, 1], 1.4, "#dcfce7", "green", 0.5)] }, { segs: [line3([2, 1, 0], [-1, 1, 1], -1, 2.4, "red", 3)] }))],
  ]),

  practice([
    q("cote à l'origine", S`Trouve la cote à l'origine (point d'intersection avec l'axe des z) de \(x+2y+4z=8\).`, num(2),
      "x = y = 0.", [S`\(4z=8\).`], S`\(2\)`),
    q("t", S`Où \(\vec r=[1,2,3]+t[1,1,1]\) rencontre-t-elle le plan \(z=6\)? Donne \(t\).`, num(3),
      "3 + t = 6.", [S`\(t=3\).`], S`\(3\)`),
    q("gauches", S`Deux droites de l'espace à trois dimensions qui ne se rencontrent pas et ne sont pas parallèles sont :`, choice(["gauches", "confondues", "perpendiculaires", "coplanaires"], 0),
      "Possible seulement dans l'espace à trois dimensions.", ["Elles ne se rencontrent jamais."], "gauches"),
    q("distance", S`Trouve la distance de l'origine au plan \(3x+4z=20\).`, num(4),
      "20 / 5.", [S`\(\frac{20}{\sqrt{9+16}}\).`], S`\(4\)`),
    q("angle", S`Trouve l'angle entre les plans \(x=0\) et \(y=0\) (en degrés).`, num(90),
      "Normales i et j.", [S`\(\vec i\cdot\vec j=0\).`], S`\(90^\circ\)`),
  ]),

  ...hard([
    ["Distance d'un point à une droite", S`Trouve le point de la droite \(\vec r=t[1,1,1]\) le plus proche de \(P(5,1,0)\), ainsi que la distance.`,
      [S`Le point le plus proche rend \(\overrightarrow{XP}\perp[1,1,1]\) : \(([5,1,0]-t[1,1,1])\cdot[1,1,1]=0\Rightarrow6-3t=0\), \(t=2\).`, S`Point le plus proche \((2,2,2)\); distance \(|[3,-1,-2]|=\sqrt{14}\).`],
      S`\((2,2,2)\); \(\sqrt{14}\approx3.74\)`,
      vfig(merge(V3, axes3(4.6), { segs: [line3([0, 0, 0], [1, 1, 1], -0.4, 3.2, "violet", 2.8), { pts: [p3(5, 1, 0), p3(2, 2, 2)], color: "red", dash: true, w: 2 }] }, { points: [pt(5, 1, 0, "P(5, 1, 0)", -40, 16), pt(2, 2, 2, "(2, 2, 2)")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 } }))],
    ["Classer trois plans", S`Décris l'intersection de \(x+y+z=4\), \(2x+2y+2z=8\) et \(x-y=0\).`,
      [S`La deuxième équation est le double de la première : ces deux plans sont confondus.`, S`Le troisième plan les coupe selon une droite : \(x=y\), \(2x+z=4\); avec \(x=t\) : \(\vec r=[0,0,4]+t[1,1,-2]\).`],
      S`la droite \(\vec r=[0,0,4]+t[1,1,-2]\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1.3, 1.3, 1.4], [1, -1, 0], [1, 0, -1], 1.6, "#dbeafe", "blue", 0.5), patch3([1, 1, 2], [1, 1, 0], [0, 0, 1], 1.6, "#dcfce7", "green", 0.5)] }, { segs: [line3([0, 0, 4], [1, 1, -2], -0.2, 2.2, "red", 3)] }))],
  ], [
    q("difficile", S`Trouve la distance entre les droites gauches \(\vec r=s[1,1,0]\) et \(\vec r=[0,0,2]+t[1,-1,0]\).`, num(2),
      "m₁ × m₂ = [0, 0, −2].", [S`\(\frac{|[0,0,2]\cdot[0,0,-2]|}{2}\).`], S`\(2\)`),
    q("difficile", S`Trouve \(k\) pour que le plan \(kx+y+z=0\) soit perpendiculaire à la droite de direction \([2,1,1]\).`, num(2),
      "La normale doit être parallèle à la direction.", [S`\([k,1,1]\parallel[2,1,1]\).`], S`\(2\)`),
    q("difficile", S`Trouve l'ordonnée (coordonnée y) du point où la droite \(x=t,\ y=2t,\ z=3t\) rencontre \(x+y+z=12\).`, num(4),
      "6t = 12.", [S`\(t=2\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment écrire l'équation d'un plan passant par trois points?", "Utilise AB et AC comme directions; leur produit vectoriel donne une normale pour l'équation cartésienne."],
      ["Comment trouver où une droite rencontre un plan?", "Substitue les équations paramétriques de la droite dans l'équation du plan et résous pour t."],
      ["Comment savoir si deux droites de l'espace se rencontrent?", "Résous deux équations de coordonnées pour trouver les paramètres et vérifie la troisième; un échec avec des directions non parallèles signifie que les droites sont gauches."],
      ["Comment trois plans se rencontrent-ils?", "Résous par élimination; le produit mixte des normales indique s'il y a exactement un point."],
      ["De quelles formules de distance ai-je besoin?", "D'un point à un plan : |Ax₀ + By₀ + Cz₀ + D| / |n|. Entre deux droites gauches : |P₁P₂ · (m₁ × m₂)| / |m₁ × m₂|."],
    ],
    summary: [
      "Droites : point + direction.",
      "Plans : point + deux directions, ou normale.",
      "Intersections : substitution ou élimination.",
      "Distances : projection sur n ou sur m₁ × m₂.",
    ],
    next: "Ceci termine le cours MCV4U : révise le calcul différentiel et les vecteurs ensemble en vue de l'examen final.",
  }),
];
