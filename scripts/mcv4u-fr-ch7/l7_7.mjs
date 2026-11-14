// MCV4U-FR 7.7 — Révision du chapitre 7 : vecteurs cartésiens dans le plan et dans l'espace, produit scalaire et ses
// applications, produit vectoriel et ses applications, avec des exercices variés et un niveau difficile
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, pol, p3, axes3, merge } from "../mcv4u-ch7/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "7.7 Révision du chapitre 7";
export const ID = lessonId(7, 7);

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 7 — Vecteurs cartésiens",
    overview: S`Cette page rassemble le chapitre avant l'évaluation. Les vecteurs cartésiens transforment la géométrie en arithmétique sur des composantes, dans le plan et dans l'espace. Deux produits font l'essentiel du travail : le produit scalaire \(\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta\) (un scalaire — angles, projections, travail) et le produit vectoriel \(\vec a\times\vec b\) (un vecteur perpendiculaire aux deux, de norme \(|\vec a||\vec b|\sin\theta\) — aires, moment de force, volume avec le produit mixte).`,
    goals: [
      "se rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "travailler avec des vecteurs sous forme de composantes dans le plan et dans l'espace;",
      "utiliser le produit scalaire pour les angles, les projections et le travail;",
      "utiliser le produit vectoriel pour les vecteurs perpendiculaires, les aires et le moment de force;",
      "choisir le bon produit pour un problème.",
    ],
    curriculum: "C1.3, C1.4, C2.1, C2.4–C2.8 (tout le chapitre)",
    prior: [
      [S`\(\vec a\cdot\vec b\) avec les composantes?`, S`\(a_1b_1+a_2b_2+a_3b_3\).`],
      [S`\(|\vec a\times\vec b|\)?`, S`\(|\vec a||\vec b|\sin\theta\).`],
      [S`Projection scalaire de \(\vec a\) sur \(\vec b\)?`, S`\(\frac{\vec a\cdot\vec b}{|\vec b|}\).`],
    ],
    words: [
      ["Composantes", "\\([a,b,c]=a\\vec i+b\\vec j+c\\vec k\\)", ""],
      ["Produit scalaire", "scalaire", "angles, projections, travail"],
      ["Produit vectoriel", "vecteur ⟂ aux deux", "aire, moment de force"],
      ["Produit mixte", "\\(\\vec a\\cdot(\\vec b\\times\\vec c)\\)", "volume, coplanarité"],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["7.1 Vecteurs cartésiens", "AB = B − A; |[a, b]| = √(a² + b²)", "[−6, 8] a une norme de 10", "le quadrant de la direction"],
    ["7.2 Produit scalaire", "a · b = |a||b| cos θ = Σ aᵢbᵢ", "a · b = 0 ⇔ ⟂", "c'est un nombre"],
    ["7.3 Applications du produit scalaire", "projection a · b / |b|; W = F · d", "travail avec un angle", "diviser par |b|"],
    ["7.4 Espace", "[a, b, c]; √(a² + b² + c²)", "angles directeurs", "somme des cos² = 1"],
    ["7.5 Produit vectoriel", "a × b ⟂ a, b; |a||b| sin θ", "i × j = k", "b × a = −a × b"],
    ["7.6 Applications des deux produits", "moment de force, aire, volume", "|a · (b × c)|", "triangle = la moitié"],
  ])),

  section("📌 Explore", S`<p>Utilise l'explorateur du produit vectoriel pour vérifier les exemples ci-dessous : entre les vecteurs, confirme les composantes de \(\vec a\times\vec b\) et lis l'aire du parallélogramme.</p>`),

  widget("crossLab", { init: { a: [1, 1, 0], b: [0, 2, 3] } }),

  section("📌 Vue d'ensemble", S`${keyIdea(S`Dans la direction → produit scalaire; en travers → produit vectoriel. Chaque réponse peut être vérifiée : un produit scalaire nul confirme que des vecteurs sont perpendiculaires, et un produit vectoriel doit être perpendiculaire à ses deux vecteurs de départ.`)}
  ${vfig(merge(V3, axes3(4.4), { polys: [{ pts: [p3(0, 0, 0), p3(2, 2, 0), p3(2, 3, 1.5), p3(0, 1, 1.5)], fill: "#ede9fe" }], arrows: [{ from: [0, 0], to: p3(2, 2, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 1, 1.5), vl: "b", color: "blue", off: -16 }, { from: [0, 0], to: p3(1.5, -1.5, 1), vl: "a×b", color: "red", off: 16 }] }), "a = [1, 1, 0] et b = [0, 2, 3] (dessinés à l'échelle ½ et 2) avec a × b = [3, −3, 2] perpendiculaire aux deux")}`),

  examples([
    ["Composantes et vecteur unitaire", S`Pour \(A(-1,4)\) et \(B(5,-4)\), trouve \(\overrightarrow{AB}\), sa norme et le vecteur unitaire de même direction.`,
      [S`\(\overrightarrow{AB}=[6,-8]\), norme 10.`, S`On divise par 10.`],
      S`\([6,-8]\), 10, \([0.6,-0.8]\)`,
      vfig({ view: { xmin: -2, xmax: 6, ymin: -5, ymax: 5 }, arrows: [{ from: [-1, 4], to: [5, -4], vl: "AB", off: 16 }], points: [{ x: -1, y: 4, label: "A", dx: -14, dy: -4 }, { x: 5, y: -4, label: "B", dx: 8, dy: 4 }] })],
    ["Un angle dans l'espace", S`Trouve l'angle entre \([1,2,-2]\) et \([4,0,3]\).`,
      [S`Produit scalaire \(4+0-6=-2\); normes 3 et 5.`, S`\(\cos\theta=-\frac{2}{15}\).`],
      S`environ \(97.66^\circ\)`],
    ["Une projection dans l'espace", S`Trouve les projections scalaire et vectorielle de \([3,1,2]\) sur \([2,-2,1]\).`,
      [S`Produit scalaire \(6-2+2=6\), \(|[2,-2,1]|=3\) : projection scalaire 2.`, S`Projection vectorielle \(\frac69[2,-2,1]\).`],
      S`2 et \(\left[\frac43,-\frac43,\frac23\right]\)`],
    ["Un produit vectoriel et une aire", S`Trouve \([1,1,0]\times[0,2,3]\) et l'aire du parallélogramme formé par les vecteurs.`,
      [S`\([1(3)-0(2),\ 0(0)-1(3),\ 1(2)-1(0)]=[3,-3,2]\).`, S`Aire \(\sqrt{9+9+4}=\sqrt{22}\).`],
      S`\([3,-3,2]\), aire \(\approx4.69\)`],
    ["Le travail avec un angle", S`Une force de 25 N tire une boîte sur 12 m, à \(40^\circ\) de la direction du mouvement. Trouve le travail.`,
      [S`\(25\times12\times\cos40^\circ\).`],
      S`environ 229.8 J`,
      vfig({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 3.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [1.4, 0], [1.4, 0.7], [0, 0.7]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [1.4, 0.35], to: pol(3.6, 40, [1.4, 0.35]), vl: "F", label: "25 N", off: -16 }, { from: [0, -0.5], to: [6, -0.5], color: "blue", label: "12 m", off: -12, w: 2 }], arcs: [{ at: [1.4, 0.35], r: 1, a: 0, b: 40, label: "40°" }] })],
  ]),

  practice([
    q("norme", S`Trouve \(|[6,-2,3]|\).`, num(7),
      "√(36 + 4 + 9).", [S`\(\sqrt{49}\).`], S`\(7\)`),
    q("produit scalaire", S`Trouve \([2,0,-1]\cdot[3,4,5]\).`, num(1),
      "6 + 0 − 5.", [S`\(1\).`], S`\(1\)`),
    q("produit vectoriel", S`Trouve la composante en y de \([1,0,0]\times[0,0,1]\).`, num(-1),
      "a₃b₁ − a₁b₃.", [S`\(0-1\).`], S`\(-1\)`),
    q("volume", S`Trouve le volume du parallélépipède construit sur \([1,1,0]\), \([0,1,1]\) et \([1,0,1]\).`, num(2),
      "Produit mixte.", [S`\([0,1,1]\times[1,0,1]=[1,1,-1]\); produit scalaire avec \([1,1,0]\).`], S`\(2\)`),
    q("signification", S`Pour des vecteurs non nuls, \(\vec a\cdot\vec b=0\) signifie que :`, choice(["les vecteurs sont perpendiculaires", "les vecteurs sont parallèles", "l'un des vecteurs est nul", "a × b = 0"], 0),
      "cos 90° = 0.", ["Produit scalaire nul."], "perpendiculaires"),
  ]),

  ...hard([
    ["Un vecteur de norme donnée perpendiculaire à deux autres", S`Trouve un vecteur de norme 6 perpendiculaire à la fois à \([1,2,0]\) et à \([0,1,1]\).`,
      [S`\([1,2,0]\times[0,1,1]=[2(1)-0(1),\ 0(0)-1(1),\ 1(1)-2(0)]=[2,-1,1]\), de norme \(\sqrt6\).`, S`On ramène la norme à 6 : \(\frac{6}{\sqrt6}[2,-1,1]=\sqrt6[2,-1,1]\).`],
      S`\(\approx[4.90,-2.45,2.45]\) (ou son opposé)`,
      vfig(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(1.5, 3, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 2, 2), vl: "b", color: "blue", off: -16 }, { from: [0, 0], to: p3(2.45, -1.22, 1.22), color: "red", label: "norme 6 (réduit)", off: 16 }] }))],
    ["Un triangle dans l'espace", S`Pour \(P(2,1,0)\), \(Q(4,3,1)\) et \(R(1,4,2)\), trouve \(\angle QPR\) et l'aire de \(\triangle PQR\).`,
      [S`\(\overrightarrow{PQ}=[2,2,1]\), \(\overrightarrow{PR}=[-1,3,2]\); produit scalaire 6, normes 3 et \(\sqrt{14}\) : \(\cos\angle P=\frac{6}{3\sqrt{14}}\), donc \(\angle P\approx57.69^\circ\).`, S`\(\overrightarrow{PQ}\times\overrightarrow{PR}=[2(2)-1(3),\ 1(-1)-2(2),\ 2(3)-2(-1)]=[1,-5,8]\); aire \(\frac12\sqrt{90}\).`],
      S`\(\angle P\approx57.69^\circ\), aire \(\approx4.74\)`,
      vfig(merge(V3, axes3(4.6), { polys: [{ pts: [p3(2, 1, 0), p3(4, 3, 1), p3(1, 4, 2)], fill: "#ede9fe", stroke: "violet" }], points: [{ x: p3(2, 1, 0)[0], y: p3(2, 1, 0)[1], label: "P", dx: -16, dy: 12 }, { x: p3(4, 3, 1)[0], y: p3(4, 3, 1)[1], label: "Q", dx: 8, dy: 8 }, { x: p3(1, 4, 2)[0], y: p3(1, 4, 2)[1], label: "R", dx: 8, dy: -6 }] }))],
  ], [
    q("difficile", S`Trouve l'angle entre \([1,1,0]\) et \([1,0,1]\) (en degrés).`, num(60),
      "cos θ = 1/2.", [S`\(\frac{1}{\sqrt2\sqrt2}\).`], S`\(60^\circ\)`),
    q("difficile", S`Trouve la projection scalaire de \([4,4,2]\) sur la direction de l'axe des z, \([0,0,1]\).`, num(2),
      "La composante en z.", [S`\(\frac{2}{1}\).`], S`\(2\)`),
    q("difficile", S`Trouve l'aire du triangle de sommets \((1,0,0)\), \((0,1,0)\) et \((0,0,1)\) (2 décimales).`, num(0.87, 0.005),
      "La moitié de |[−1,1,0] × [−1,0,1]|.", [S`\([1,1,1]\); \(\frac{\sqrt3}2\).`], S`\(0.87\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment écrire le vecteur de A à B?", "Soustrais les coordonnées : B − A, avec deux ou trois composantes."],
      ["Produit scalaire ou produit vectoriel?", "Le produit scalaire pour « dans la direction » (angles, projections, travail); le produit vectoriel pour « en travers » (vecteurs perpendiculaires, aires, moment de force)."],
      ["Comment vérifier un produit vectoriel?", "Son produit scalaire avec chacun des vecteurs de départ doit être 0."],
      ["Que mesure le produit mixte?", "Le volume du parallélépipède; s'il est nul, les vecteurs sont coplanaires."],
      ["Que sont les angles directeurs?", "Les angles avec les axes; cos α = a/|v|, et ainsi de suite, avec cos²α + cos²β + cos²γ = 1."],
    ],
    summary: [
      "Composantes : additionner, multiplier par un scalaire, Pythagore.",
      "a · b est un scalaire; a × b est un vecteur.",
      "Projections, travail : produit scalaire.",
      "Aire, moment de force, volume : produit vectoriel / produit mixte.",
    ],
    next: "Au chapitre 8, on utilise les vecteurs pour décrire des droites et des plans.",
  }),
];
