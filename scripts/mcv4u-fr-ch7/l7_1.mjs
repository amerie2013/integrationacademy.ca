// MCV4U-FR 7.1 — Vecteurs cartésiens : vecteurs position, composantes et vecteurs unitaires i et j, vecteurs entre
// deux points, opérations sur les composantes, norme, direction et vecteurs unitaires, et passage de la forme
// norme-direction à la forme en composantes
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig } from "../mcv4u-ch7/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "7.1 Vecteurs cartésiens";
export const ID = lessonId(7, 1);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📍",
    title: "Vecteurs cartésiens",
    overview: S`Place un vecteur sur un quadrillage, avec son origine à l'origine du plan : sa pointe arrive sur un point \((a,b)\). On écrit alors le vecteur \([a,b]\) — « \(a\) unités horizontalement, \(b\) unités verticalement » — ou \(a\vec i+b\vec j\), où \(\vec i=[1,0]\) et \(\vec j=[0,1]\) sont les vecteurs unitaires le long des axes. Sous cette forme, chaque opération du chapitre 6 devient de l'arithmétique sur les composantes : on additionne les composantes pour additionner des vecteurs, on les multiplie pour multiplier par un scalaire, et on utilise le théorème de Pythagore pour la norme.`,
    goals: [
      "écrire des vecteurs position et des vecteurs entre deux points sous forme de composantes;",
      "utiliser les vecteurs unitaires i et j;",
      "additionner, soustraire et multiplier des vecteurs par un scalaire à l'aide des composantes;",
      "trouver des normes, des angles de direction et des vecteurs unitaires;",
      "passer de la forme norme-direction à la forme en composantes, et inversement.",
    ],
    curriculum: "C1.3 (représenter un vecteur dans le plan de façon géométrique et algébrique, et passer d'une forme à l'autre); C2.1 (opérations sur les vecteurs cartésiens)",
    prior: [
      [S`\(\sqrt{5^2+12^2}\)?`, S`\(13\).`],
      [S`\(\cos150^\circ\)?`, S`\(-\frac{\sqrt3}2\approx-0.866\).`],
      [S`Point milieu de \((0,0)\) et \((4,6)\)?`, S`\((2,3)\).`],
    ],
    words: [
      ["Vecteur position", "de l'origine jusqu'à un point", "\\(\\overrightarrow{OP}=[a,b]\\)"],
      ["Composantes", "la partie horizontale et la partie verticale", "\\([a,b]=a\\vec i+b\\vec j\\)"],
      ["\\(\\vec i,\\ \\vec j\\)", "vecteurs unitaires le long des axes", "\\([1,0],\\ [0,1]\\)"],
      ["Vecteur unitaire", "norme 1", "\\(\\frac{1}{|\\vec v|}\\vec v\\)"],
    ],
  }),

  section("📌 Les composantes sur un quadrillage", S`
  ${vfig({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 5 }, arrows: [{ from: [0, 0], to: [5, 0], color: "blue", label: "5i", off: 14 }, { from: [5, 0], to: [5, 4], color: "red", label: "4j", off: -16 }, { from: [0, 0], to: [5, 4], vl: "v", off: -16 }, { from: [0, 0], to: [1, 0], color: "green", w: 2.4 }, { from: [0, 0], to: [0, 1], color: "green", w: 2.4 }], texts: [{ x: 0.5, y: -0.5, t: "i", color: "green" }, { x: -0.4, y: 0.5, t: "j", color: "green" }], points: [{ x: 5, y: 4, label: "P(5, 4)", dx: 8, dy: -4 }] }, "v = [5, 4] = 5i + 4j, le vecteur position de P(5, 4)")}
  ${table(["Tâche", "Règle pour \\(\\vec u=[a,b]\\), \\(\\vec v=[c,d]\\)"], [
    ["vecteur de \\(A(x_1,y_1)\\) à \\(B(x_2,y_2)\\)", "\\(\\overrightarrow{AB}=[x_2-x_1,\\ y_2-y_1]\\)"],
    ["somme, différence, multiple", "\\([a+c,\\ b+d]\\), \\([a-c,\\ b-d]\\), \\([ka,\\ kb]\\)"],
    ["norme", "\\(|\\vec u|=\\sqrt{a^2+b^2}\\)"],
    ["à partir de la norme \\(m\\) et de l'angle \\(\\theta\\)", "\\([m\\cos\\theta,\\ m\\sin\\theta]\\)"],
  ])}
  ${keyIdea(S`Pointe moins origine : \(\overrightarrow{AB}=\overrightarrow{OB}-\overrightarrow{OA}\). Deux vecteurs cartésiens sont égaux exactement lorsque leurs composantes sont égales, et ils sont colinéaires exactement lorsqu'une liste de composantes est un multiple de l'autre.`)}`),

  section("📌 Explore", S`<p>Choisis les composantes de \(\vec u\) et lis sa norme, sa direction et son vecteur unitaire. Passe ensuite à \(\vec u+\vec v\) ou à \(\vec u-\vec v\) : les composantes du résultat rouge sont simplement les sommes ou les différences des composantes.</p>`),

  widget("cartesianLab", { init: { a: 3, b: 2, c: -1, d: 3 } }),

  section("📌 Travailler avec les composantes", S`
  <p>Pour la direction, trouve l'angle de référence \(\tan^{-1}\left|\frac ba\right|\), puis place-le dans le bon quadrant à l'aide des signes de \(a\) et de \(b\). Pour construire un vecteur à partir de sa norme et de sa direction, multiplie la norme par \(\cos\theta\) et par \(\sin\theta\).</p>
  ${watchOut([
    "AB, c'est la pointe moins l'origine : B − A, et non A − B.",
    "tan⁻¹ seul donne le mauvais quadrant pour les vecteurs qui pointent vers la gauche.",
    "Pour un vecteur unitaire, il faut diviser chaque composante par la norme.",
    "[a, b] est un vecteur; (a, b) est un point.",
    "On ne combine que des composantes semblables : x avec x, y avec y.",
  ])}`),

  examples([
    ["Un vecteur position", S`Écris le vecteur position de \(P(-3,5)\) sous les deux formes et trouve sa norme.`,
      [S`\(\overrightarrow{OP}=[-3,5]=-3\vec i+5\vec j\).`, S`\(|\overrightarrow{OP}|=\sqrt{9+25}=\sqrt{34}\).`],
      S`\([-3,5]\), norme \(\sqrt{34}\approx5.83\)`,
      vfig({ view: { xmin: -4, xmax: 2, ymin: -1, ymax: 6 }, arrows: [{ from: [0, 0], to: [-3, 5], vl: "OP", off: -18 }], segs: [{ pts: [[0, 0], [-3, 0], [-3, 5]], dash: true }], points: [{ x: -3, y: 5, label: "P(−3, 5)", dx: 6, dy: -6 }] })],
    ["Entre deux points", S`Trouve \(\overrightarrow{AB}\), sa norme et sa direction pour \(A(4,-1)\) et \(B(-2,7)\).`,
      [S`\(\overrightarrow{AB}=[-2-4,\ 7-(-1)]=[-6,8]\), \(|\overrightarrow{AB}|=10\).`, S`Angle de référence \(\tan^{-1}\frac86\approx53.13^\circ\); le vecteur pointe vers la gauche et vers le haut (quadrant II) : \(180^\circ-53.13^\circ\).`],
      S`\([-6,8]\), norme 10, à \(126.87^\circ\) de l'axe des x positifs`,
      vfig({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 8 }, arrows: [{ from: [4, -1], to: [-2, 7], vl: "AB", off: -18 }], segs: [{ pts: [[4, -1], [-2, -1], [-2, 7]], dash: true }], texts: [{ x: 1, y: -1.5, t: "−6" }, { x: -2.5, y: 3, t: "8" }], points: [{ x: 4, y: -1, label: "A", dx: 8, dy: 4 }, { x: -2, y: 7, label: "B", dx: 8, dy: -4 }] })],
    ["Combiner des vecteurs", S`Pour \(\vec u=[2,-3]\) et \(\vec v=[-1,4]\), trouve \(3\vec u-2\vec v\) et sa norme.`,
      [S`\(3\vec u=[6,-9]\), \(2\vec v=[-2,8]\).`, S`\(3\vec u-2\vec v=[8,-17]\); \(\sqrt{64+289}=\sqrt{353}\).`],
      S`\([8,-17]\), norme \(\approx18.79\)`],
    ["À partir de la norme et de la direction", S`Écris sous forme de composantes un vecteur de norme 12 qui fait un angle de \(150^\circ\) avec l'axe des x positifs.`,
      [S`\([12\cos150^\circ,\ 12\sin150^\circ]\).`, S`\(=[-6\sqrt3,\ 6]\).`],
      S`\(\approx[-10.39,\ 6]\)`,
      vfig({ view: { xmin: -11.5, xmax: 2, ymin: -1, ymax: 7 }, arrows: [{ from: [0, 0], to: [-10.39, 6], vl: "v", label: "12", off: -16 }, { from: [0, 0], to: [-10.39, 0], color: "blue", label: "−10.39", off: 14 }, { from: [-10.39, 0], to: [-10.39, 6], color: "red", label: "6", off: 16 }], arcs: [{ at: [0, 0], r: 1.3, a: 0, b: 150, label: "150°" }] })],
    ["Un vecteur unitaire", S`Trouve le vecteur unitaire de même direction que \(\vec w=[5,-12]\), puis le vecteur de norme 39 dans cette direction.`,
      [S`\(|\vec w|=13\), donc le vecteur unitaire est \(\left[\frac5{13},-\frac{12}{13}\right]\).`, S`Norme 39 : on multiplie par 39 : \([15,-36]\).`],
      S`\(\left[\frac5{13},-\frac{12}{13}\right]\) et \([15,-36]\)`],
  ]),

  practice([
    q("norme", S`Trouve \(|[-7,24]|\).`, num(25),
      "Pythagore.", [S`\(\sqrt{49+576}\).`], S`\(25\)`),
    q("entre deux points", S`Pour \(A(3,8)\) et \(B(-1,2)\), trouve la composante en x de \(\overrightarrow{AB}\).`, num(-4),
      "Pointe moins origine.", [S`\(-1-3\).`], S`\(-4\)`),
    q("parallèles", S`Trouve \(k\) pour que \([k,6]\) soit parallèle à \([2,3]\).`, num(4),
      "Les composantes sont dans le même rapport.", [S`\([k,6]=2[2,3]\).`], S`\(4\)`),
    q("notation", S`\(4\vec i-\vec j=\)`, choice([S`\([4,-1]\)`, S`\([-1,4]\)`, S`\([4,1]\)`, S`\((4,-1)\) en tant que point`], 0),
      "Les coefficients de i et de j.", ["i donne la première composante."], S`\([4,-1]\)`),
    q("direction", S`Quel angle \([-3,-3]\) fait-il avec l'axe des x positifs (en degrés)?`, num(225),
      "Quadrant III, angle de référence 45°.", [S`\(180^\circ+45^\circ\).`], S`\(225^\circ\)`),
  ]),

  ...hard([
    ["Compléter un parallélogramme", S`\(A(1,2)\), \(B(6,3)\) et \(C(8,7)\) sont trois sommets du parallélogramme \(ABCD\). Trouve \(D\).`,
      [S`Dans un parallélogramme, \(\overrightarrow{AD}=\overrightarrow{BC}=[8-6,\ 7-3]=[2,4]\).`, S`\(\overrightarrow{OD}=\overrightarrow{OA}+\overrightarrow{AD}=[1,2]+[2,4]\).`],
      S`\(D(3,6)\)`,
      vfig({ view: { xmin: -0.5, xmax: 9, ymin: -0.5, ymax: 8 }, segs: [{ pts: [[1, 2], [6, 3], [8, 7], [3, 6], [1, 2]], color: "gray" }], arrows: [{ from: [6, 3], to: [8, 7], color: "blue", label: "[2, 4]", off: 18 }, { from: [1, 2], to: [3, 6], color: "red", label: "[2, 4]", off: -18 }], points: [{ x: 1, y: 2, label: "A", dx: -14, dy: 14 }, { x: 6, y: 3, label: "B", dx: 6, dy: 16 }, { x: 8, y: 7, label: "C", dx: 8, dy: 0 }, { x: 3, y: 6, label: "D?", dx: -24, dy: -6 }] })],
    ["Construire un vecteur à partir de deux autres", S`Trouve les scalaires \(a\) et \(b\) tels que \(a[1,2]+b[3,-1]=[11,1]\).`,
      [S`Composantes : \(a+3b=11\) et \(2a-b=1\).`, S`De la deuxième équation, \(b=2a-1\); alors \(a+6a-3=11\Rightarrow a=2\), \(b=3\).`],
      S`\(a=2\), \(b=3\) : \(2[1,2]+3[3,-1]=[11,1]\)`,
      vfig({ view: { xmin: -0.5, xmax: 12, ymin: -2, ymax: 5 }, arrows: [{ from: [0, 0], to: [2, 4], label: "2[1, 2]", off: -18 }, { from: [2, 4], to: [11, 1], color: "blue", label: "3[3, −1]", off: -16 }, { from: [0, 0], to: [11, 1], color: "red", label: "[11, 1]", off: 14 }] })],
  ], [
    q("difficile", S`Trouve \(|\vec u+\vec v|\) pour \(\vec u=[3,-2]\) et \(\vec v=[-7,5]\).`, num(5),
      "Additionne d'abord.", [S`\([-4,3]\).`], S`\(5\)`),
    q("difficile", S`Trouve \(k\gt0\) tel que \(|[k,\ k+1]|=5\).`, num(3),
      "Élève les deux membres au carré.", [S`\(2k^2+2k+1=25\Rightarrow k^2+k-12=0\).`], S`\(3\)`),
    q("difficile", S`\(M\) est le point milieu de \(A(-2,5)\) et de \(B(6,-1)\). Trouve la composante en y de \(\overrightarrow{OM}\).`, num(2),
      "Fais la moyenne des coordonnées.", [S`\(\frac{5+(-1)}2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Que signifie [a, b]?", "Le vecteur qui avance de a unités horizontalement et de b unités verticalement : a i + b j."],
      ["Comment trouver le vecteur de A à B?", "Soustrais les coordonnées de A de celles de B : la pointe moins l'origine."],
      ["Comment additionner ou multiplier par un scalaire des vecteurs cartésiens?", "Travaille composante par composante : [a + c, b + d] et [ka, kb]."],
      ["Comment obtenir la direction?", "tan⁻¹ de |b/a| donne l'angle de référence; les signes de a et de b indiquent le quadrant."],
      ["Comment construire un vecteur unitaire?", "Divise chaque composante par la norme."],
    ],
    summary: [
      "[a, b] = a i + b j.",
      "AB = B − A.",
      "|[a, b]| = √(a² + b²).",
      "[m cos θ, m sin θ] à partir de la norme et de l'angle.",
    ],
    next: "En 7.2, on multiplie des vecteurs avec le produit scalaire.",
  }),
];
