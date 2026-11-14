// MCV4U-FR 8.5 — Intersections de droites et de plans : substituer une droite dans un plan, les trois issues possibles,
// l'angle entre une droite et un plan, la distance d'un point à un plan, le pied de la perpendiculaire, et la réflexion
// d'un point par rapport à un plan
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3, patch3 } from "../mcv4u-ch8/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "8.5 Intersections de droites et de plans";
export const ID = lessonId(8, 5);

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6, color = "black") => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy, color }; };
export const blocks = () => [
  intro({
    icon: "📍",
    title: "Intersections de droites et de plans",
    overview: S`Une droite peut traverser un plan en un point, lui être parallèle sans jamais le toucher, ou être entièrement contenue dans ce plan. Pour le savoir, substitue les équations paramétriques de la droite dans l'équation cartésienne du plan. Tu obtiens une seule équation en \(t\) : une solution signifie un point, aucune solution signifie que la droite est parallèle au plan, et une identité comme \(0=0\) signifie que la droite est contenue dans le plan. La même substitution, avec une droite tracée selon la normale, donne le point du plan le plus proche d'un point donné — et donc la distance de ce point au plan.`,
    goals: [
      "trouver le point de rencontre d'une droite et d'un plan;",
      "reconnaître une droite parallèle à un plan ou contenue dans ce plan;",
      "trouver l'angle entre une droite et un plan;",
      "trouver la distance d'un point à un plan et le pied de la perpendiculaire;",
      "trouver la réflexion d'un point par rapport à un plan.",
    ],
    curriculum: "C4.7 (intersection d'une droite et d'un plan; distance d'un point à un plan)",
    prior: [
      [S`Substitue \(x=1+2t,\ y=t,\ z=3\) dans \(x+y+z=10\).`, S`\(4+3t=10\).`],
      [S`Normale de \(3x-y+2z=14\)?`, S`\([3,-1,2]\).`],
      [S`\([1,1,-1]\cdot[1,1,2]\)?`, S`\(0\).`],
    ],
    words: [
      ["Point d'intersection", "une seule valeur de t", ""],
      ["Droite parallèle", "\\(\\vec m\\cdot\\vec n=0\\), point hors du plan", "aucune solution"],
      ["Droite contenue dans le plan", "\\(\\vec m\\cdot\\vec n=0\\), point dans le plan", "toute valeur de t convient"],
      ["Pied de la perpendiculaire", "point du plan le plus proche", "droite selon \\(\\vec n\\)"],
    ],
  }),

  section("📌 Trois issues possibles", S`
  ${table(["\\(\\vec m\\cdot\\vec n\\)", "Un point de la droite est-il dans le plan?", "Résultat", "Équation en t"], [
    ["\\(\\ne0\\)", "—", "un point", "une solution"],
    ["\\(0\\)", "non", "parallèle, aucune intersection", "p. ex. \\(0t=3\\)"],
    ["\\(0\\)", "oui", "droite contenue dans le plan", "\\(0t=0\\)"],
  ])}
  ${vfig(merge(V3, axes3(4.6), { polys: [patch3([1.5, 1.5, 0.5], [1, -1, 0], [2, 0, -1], 1)] }, { segs: [line3([1, -1, 2], [2, 1, -1], -0.9, 3, "red", 2.8)] }, { points: [pt(5, 1, 0, "(5, 1, 0)", 8, 14, "red")] }, { view: { xmin: -3.8, xmax: 7, ymin: -2.8, ymax: 5.8 } }), "La droite r = [1, −1, 2] + t[2, 1, −1] rencontre 3x − y + 2z = 14 en (5, 1, 0)")}
  ${keyIdea(S`La direction de la droite raconte presque toute l'histoire : si \(\vec m\) est perpendiculaire à la normale (\(\vec m\cdot\vec n=0\)), la droite est parallèle au plan ou contenue dans celui-ci; sinon, elle le traverse une fois. L'angle \(\phi\) entre une droite et un plan vérifie \(\sin\phi=\frac{|\vec m\cdot\vec n|}{|\vec m||\vec n|}\) — il vaut \(90^\circ\) moins l'angle entre \(\vec m\) et la normale.`)}`),

  section("📌 Explorer", S`<p>Modifie la direction de la droite et son point de départ. Observe l'équation en \(t\) : elle a une solution tant que la droite traverse le plan, et aucune (ou une infinité) lorsque la direction devient perpendiculaire à la normale \([1,1,2]\) — essaie \([1,1,-1]\).</p>`),

  widget("linePlaneLab", { init: { m: [1, 1, -1] } }),

  section("📌 Distances et points les plus proches", S`
  <p>Pour trouver le point d'un plan le plus proche de \(P\), trace à partir de \(P\) une droite selon la normale, \(\vec r=\overrightarrow{OP}+t\vec n\), et trouve son intersection avec le plan. La distance est \(|t|\,|\vec n|\) — le même résultat que la formule \(\frac{|Ax_0+By_0+Cz_0+D|}{|\vec n|}\). En allant deux fois plus loin selon la normale, on obtient la réflexion de \(P\) par rapport au plan.</p>
  ${watchOut([
    "Substitue les trois équations paramétriques dans l'équation du plan — on obtient une seule équation en t.",
    "0t = un nombre non nul signifie aucune intersection; 0t = 0 signifie une infinité de points.",
    "L'angle avec un plan utilise le sinus (ou 90° moins l'angle avec la normale).",
    "Une distance n'est jamais négative : utilise les valeurs absolues.",
    "Le pied de la perpendiculaire appartient au plan — vérifie-le.",
  ])}`),

  examples([
    ["Un seul point d'intersection", S`Trouve où \(\vec r=[1,-1,2]+t[2,1,-1]\) rencontre \(3x-y+2z=14\).`,
      [S`\(3(1+2t)-(-1+t)+2(2-t)=14\Rightarrow8+3t=14\Rightarrow t=2\).`],
      S`\((5,1,0)\)`],
    ["Une droite parallèle", S`La droite \(\vec r=[0,1,2]+t[1,1,-1]\) rencontre-t-elle le plan \(x+y+2z=4\)? Sinon, quelle distance les sépare?`,
      [S`\(t+(1+t)+2(2-t)\) se simplifie en 5 pour toute valeur de \(t\), et 5 n'est pas égal à 4 : aucune solution. (En effet, \([1,1,-1]\cdot[1,1,2]=0\).)`, S`Distance de \((0,1,2)\) au plan : \(\frac{|0+1+4-4|}{\sqrt6}\).`],
      S`parallèles, distants d'environ 0.41`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1, 1, 1], [1, 1, -1], [2, 0, -1], 1)] }, { segs: [line3([0, 1, 2], [1, 1, -1], -1.2, 2.6, "red", 2.8)] }))],
    ["Une droite contenue dans un plan", S`Montre que \(\vec r=[0,1,2]+t[1,1,-1]\) est contenue dans le plan \(x+y+2z=5\).`,
      [S`\(t+(1+t)+2(2-t)=5\Rightarrow5=5\) pour toute valeur de \(t\).`],
      S`chaque point de la droite satisfait l'équation; la droite est donc contenue dans le plan`],
    ["Distance d'un point à un plan", S`Trouve la distance de \(P(2,-3,1)\) au plan \(4x-4y+2z=3\).`,
      [S`\(|\vec n|=\sqrt{16+16+4}=6\).`, S`\(\frac{|8+12+2-3|}{6}=\frac{19}6\).`],
      S`\(\approx3.17\)`],
    ["Le pied de la perpendiculaire", S`Trouve le point du plan \(x+2y+2z=1\) le plus proche de \(P(1,2,7)\), ainsi que la distance.`,
      [S`Droite selon la normale : \((1+t,\ 2+2t,\ 7+2t)\).`, S`\(1+t+4+4t+14+4t=1\Rightarrow9t=-18\), \(t=-2\) : pied \((-1,-2,3)\).`, S`Distance \(|t||\vec n|=2\times3=6\).`],
      S`pied \((-1,-2,3)\), distance 6`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([-1, -2, 3], [2, -1, 0], [0, 1, -1], 1.4)] }, { segs: [{ pts: [p3(1, 2, 7), p3(-1, -2, 3)], color: "red", dash: true, w: 2.2 }] }, { points: [pt(1, 2, 7, "P(1, 2, 7)"), pt(-1, -2, 3, "pied", -40, 14, "red")] }, { view: { xmin: -5, xmax: 6, ymin: -2.8, ymax: 8 } }))],
  ]),

  practice([
    q("t", S`Où \(\vec r=t[1,1,1]\) rencontre-t-elle \(x+y+z=6\)? Donne \(t\).`, num(2),
      "3t = 6.", [S`\(t+t+t=6\).`], S`\(2\)`),
    q("parallèle", S`Une droite est parallèle à un plan (sans y être contenue) lorsque :`, choice([S`\(\vec m\cdot\vec n=0\) et un point de la droite n'appartient pas au plan`, S`\(\vec m\times\vec n=\vec 0\)`, S`\(\vec m=\vec n\)`, S`\(\vec m\cdot\vec n\ne0\)`], 0),
      "La direction est perpendiculaire à la normale.", ["La droite ne peut alors pas traverser le plan."], "m · n = 0 et un point hors du plan"),
    q("distance", S`Trouve la distance de l'origine au plan \(x+2y+2z=9\).`, num(3),
      "|−9| / 3.", [S`\(\frac93\).`], S`\(3\)`),
    q("substitution", S`La droite \(x=1,\ y=2,\ z=t\) rencontre \(2x+y+z=10\). Trouve la cote (coordonnée z) de ce point.`, num(6),
      "2 + 2 + t = 10.", [S`\(t=6\).`], S`\(6\)`),
    q("angle", S`Trouve l'angle entre une droite de direction \([0,0,1]\) et le plan \(z=0\) (en degrés).`, num(90),
      "La droite suit la normale.", [S`\(\sin\phi=1\).`], S`\(90^\circ\)`),
  ]),

  ...hard([
    ["L'angle entre une droite et un plan", S`Trouve l'angle entre la droite de direction \([1,1,0]\) et le plan \(x-z=0\).`,
      [S`Normale \([1,0,-1]\) : \(\cos(\text{angle avec la normale})=\frac{1}{\sqrt2\sqrt2}=\frac12\); cet angle vaut donc \(60^\circ\).`, S`La droite forme avec le plan un angle de \(90^\circ-60^\circ\).`],
      S`\(30^\circ\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1.5, 1.5, 1.5], [1, 0, 1], [0, 1, 0], 1.6)] }, { arrows: [{ from: p3(1.5, 1.5, 1.5), to: p3(3, 3, 1.5), vl: "m", color: "red", off: 16 }, { from: p3(1.5, 1.5, 1.5), to: p3(2.5, 1.5, 0.5), vl: "n", color: "green", off: -16 }] }))],
    ["Réflexion d'un point par rapport à un plan", S`Trouve la réflexion de \(P(3,1,2)\) par rapport au plan \(x+y+z=3\).`,
      [S`Droite selon la normale : \((3+t,\ 1+t,\ 2+t)\); \(6+3t=3\Rightarrow t=-1\) : pied \((2,0,1)\).`, S`L'image est située aussi loin au-delà du pied : \(t=-2\), ce qui donne \((1,-1,0)\).`],
      S`\((1,-1,0)\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([2, 0, 1], [1, -1, 0], [1, 0, -1], 1.5)] }, { segs: [{ pts: [p3(3, 1, 2), p3(1, -1, 0)], color: "red", dash: true, w: 2.2 }] }, { points: [pt(3, 1, 2, "P"), pt(2, 0, 1, "pied", 8, 14, "red"), pt(1, -1, 0, "P′", -20, 14, "blue")] }, { view: { xmin: -4.4, xmax: 6, ymin: -2.8, ymax: 5.8 } }))],
  ], [
    q("difficile", S`Trouve la distance de \((1,1,1)\) au plan \(2x+y-2z=10\).`, num(3),
      "|2 + 1 − 2 − 10| / 3.", [S`\(\frac93\).`], S`\(3\)`),
    q("difficile", S`Trouve \(k\) pour que \(\vec r=[1,0,0]+t[2,k,1]\) soit parallèle au plan \(x-y+z=7\).`, num(3),
      "m · n = 0.", [S`\(2-k+1=0\).`], S`\(3\)`),
    q("difficile", S`Trouve l'abscisse du pied de la perpendiculaire abaissée de \((4,0,0)\) sur le plan \(x=1\).`, num(1),
      "Déplace-toi selon [1, 0, 0] jusqu'à x = 1.", [S`Le pied est \((1,0,0)\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment trouver le point de rencontre d'une droite et d'un plan?", "Substitue les équations paramétriques de la droite dans l'équation cartésienne du plan, puis résous pour t."],
      ["Que signifie 0t = 5?", "Aucune valeur de t ne convient : la droite est parallèle au plan et ne le rencontre jamais."],
      ["Que signifie 0t = 0?", "Toute valeur de t convient : la droite est contenue dans le plan."],
      ["Comment trouver le point du plan le plus proche de P?", "Trouve l'intersection du plan et de la droite passant par P selon la normale; ce point est le pied de la perpendiculaire."],
      ["Comment trouver l'angle entre une droite et un plan?", "Trouve l'angle entre la droite et la normale, puis soustrais-le de 90°."],
    ],
    summary: [
      "Substitue la droite dans l'équation du plan.",
      "m · n ≠ 0 : un point; = 0 : parallèle ou contenue dans le plan.",
      "Pied de la perpendiculaire : droite selon n.",
      "Angle droite–plan = 90° − angle avec la normale.",
    ],
    next: "En 8.6, on trouve l'intersection de plans.",
  }),
];
