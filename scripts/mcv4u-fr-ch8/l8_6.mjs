// MCV4U-FR 8.6 — Intersections de plans : deux plans (une droite, parallèles, confondus), trois plans résolus par
// élimination, les configurations géométriques (point, droite, plan, aucune), le produit mixte des normales et la
// distance entre deux plans parallèles
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3, patch3 } from "../mcv4u-ch8/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "8.6 Intersections de plans";
export const ID = lessonId(8, 6);

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6, color = "black") => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy, color }; };
export const blocks = () => [
  intro({
    icon: "🧱",
    title: "Intersections de plans",
    overview: S`Deux plans qui ne sont pas parallèles se coupent selon une droite; des plans parallèles ne se rencontrent jamais; des plans confondus ont tous leurs points en commun. Avec trois plans, la situation est plus riche : ils peuvent se rencontrer en un seul point (comme le coin d'une pièce), le long d'une droite commune (comme les pages d'un livre), ou pas du tout — trois plans parallèles, deux plans parallèles coupés par un troisième, ou trois plans formant les faces d'un prisme triangulaire. Algébriquement, trouver l'intersection revient à résoudre un système d'équations linéaires; géométriquement, les normales indiquent dans quel cas on se trouve.`,
    goals: [
      "trouver la droite d'intersection de deux plans;",
      "reconnaître des plans parallèles et des plans confondus;",
      "résoudre un système de trois plans par élimination;",
      "associer chaque issue algébrique à une configuration géométrique;",
      "utiliser le produit mixte des normales pour prévoir un point unique.",
    ],
    curriculum: "C3.2, C3.3 (solutions d'équations linéaires dans l'espace à trois dimensions; positions relatives de droites et de plans); C4.4 (intersection de trois plans par la résolution d'un système)",
    prior: [
      [S`\([2,1,1]\times[1,-1,2]\)?`, S`\([3,-3,-3]\).`],
      [S`Résous \(2x+y=9,\ x-y=3\).`, S`\(x=4,\ y=1\).`],
      [S`\([1,2,-1]\cdot([2,-1,1]\times[0,1,0])\)?`, S`\(-3\).`],
    ],
    words: [
      ["Droite d'intersection", "deux plans non parallèles", "direction \\(\\vec n_1\\times\\vec n_2\\)"],
      ["Système compatible", "au moins une solution", ""],
      ["Faisceau de plans", "trois plans passant par une même droite", ""],
      ["Prisme triangulaire", "trois plans qui se coupent deux à deux, sans point commun", ""],
    ],
  }),

  section("📌 Configurations", S`
  ${table(["Trois plans", "Solutions", "Normales"], [
    ["se rencontrent en un point", "exactement une", "\\(\\vec n_1\\cdot(\\vec n_2\\times\\vec n_3)\\ne0\\)"],
    ["ont une droite commune (faisceau)", "une infinité (un paramètre)", "normales coplanaires"],
    ["sont confondus", "une infinité (deux paramètres)", "toutes parallèles"],
    ["prisme triangulaire", "aucune", "coplanaires, non parallèles"],
    ["deux ou trois plans parallèles", "aucune", "deux normales parallèles ou plus"],
  ])}
  ${vfig(merge(V3, axes3(4.6), { polys: [patch3([1.5, 1.5, 1.5], [1, 0, 0], [0, 1, 0], 1.6, "#dbeafe", "blue", 0.45), patch3([1.5, 1.5, 1.5], [1, 0, 0], [0, 0, 1], 1.6, "#dcfce7", "green", 0.45), patch3([1.5, 1.5, 1.5], [0, 1, 0], [0, 0, 1], 1.6, "#fee2e2", "red", 0.45)] }, { points: [pt(1.5, 1.5, 1.5, "un point", 8, -6, "black")] }), "Trois plans dont les normales sont indépendantes se rencontrent en exactement un point")}
  ${keyIdea(S`Deux plans non parallèles se coupent selon la droite de direction \(\vec n_1\times\vec n_2\) passant par n'importe quel point qui satisfait les deux équations. Pour trois plans, \(\vec n_1\cdot(\vec n_2\times\vec n_3)\ne0\) garantit exactement un point; lorsque ce produit vaut 0, il y a une droite, un plan ou rien du tout — l'élimination permet de trancher.`)}`),

  section("📌 Explorer", S`<p>Choisis une configuration et fais pivoter la vue pour voir comment les trois plans sont disposés. L'affichage montre leurs équations et le produit mixte de leurs normales : il est non nul seulement lorsque les plans se rencontrent en un seul point.</p>`),

  widget("planesLab", { init: { config: "point" } }),

  section("📌 Résoudre par élimination", S`
  <p>Élimine une variable dans deux paires d'équations pour obtenir un système à deux variables, résous-le, puis fais une substitution à rebours. Si l'élimination donne \(0=0\), il y a une infinité de solutions — introduis un paramètre. Si elle donne \(0=\) un nombre non nul, il n'y a aucune solution; examine les normales pour nommer la configuration.</p>
  ${watchOut([
    "Normales parallèles avec des constantes différentes : plans parallèles, aucun point commun.",
    "0 = 0 après l'élimination signifie une infinité de solutions, pas zéro.",
    "Vérifie la réponse finale dans les trois équations de départ.",
    "Des normales coplanaires ne signifient pas à elles seules qu'il n'y a aucune solution — un faisceau est aussi possible.",
    "La direction de la droite d'intersection est n₁ × n₂, et non n₁ + n₂.",
  ])}`),

  examples([
    ["Deux plans, une droite", S`Trouve la droite d'intersection de \(2x+y+z=9\) et \(x-y+2z=3\).`,
      [S`Direction \(\vec n_1\times\vec n_2=[2,1,1]\times[1,-1,2]=[3,-3,-3]\), ou plus simplement \([1,-1,-1]\).`, S`Un point : pose \(z=0\) : \(2x+y=9\), \(x-y=3\Rightarrow x=4,\ y=1\).`],
      S`\(\vec r=[4,1,0]+t[1,-1,-1]\)`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([3, 2, 1], [1, -2, 0], [0, 1, -1], 1.1, "#dbeafe", "blue", 0.5), patch3([3, 2, 1], [1, 1, 0], [2, 0, -1], 1.1, "#dcfce7", "green", 0.5)] }, { segs: [line3([4, 1, 0], [1, -1, -1], -2.4, 0.6, "red", 3)] }))],
    ["Parallèles ou confondus?", S`Compare \(2x-y+z=4\) avec \(-4x+2y-2z=3\), puis avec \(-4x+2y-2z=-8\).`,
      [S`Les deux derniers plans ont pour normale \([-4,2,-2]=-2[2,-1,1]\) : normales parallèles.`, S`\(-8=-2(4)\); la troisième équation est donc \(-2\) fois la première; \(3\ne-2(4)\).`],
      S`la première paire est formée de plans parallèles distincts; la deuxième, de plans confondus`],
    ["Trois plans, un point", S`Résous \(x+y+z=6\), \(2x-y+z=3\), \(x+2y-z=2\).`,
      [S`Additionne la première et la troisième : \(2x+3y=8\). Additionne la deuxième et la troisième : \(3x+y=5\).`, S`\(y=5-3x\Rightarrow2x+15-9x=8\Rightarrow x=1\), \(y=2\), puis \(z=3\).`],
      S`le point unique \((1,2,3)\)`],
    ["Trois plans, une droite", S`Résous \(x+y+z=2\), \(x-y+z=0\), \(2x+2z=2\).`,
      [S`La troisième équation est la somme des deux premières; elle n'apporte donc rien de nouveau.`, S`Soustrais les deux premières : \(2y=2\Rightarrow y=1\); puis \(x+z=1\). Pose \(z=t\).`],
      S`\(\vec r=[1,1,0]+t[-1,0,1]\) : les plans ont une droite commune`],
    ["Trois plans, aucun point", S`Montre que \(x+y+z=2\), \(x-y+z=0\), \(2x+2z=5\) n'ont aucun point commun, et décris la configuration.`,
      [S`L'addition des deux premières donne \(2x+2z=2\), ce qui contredit \(2x+2z=5\).`, S`Aucune paire de normales n'est parallèle, mais \([2,0,2]=[1,1,1]+[1,-1,1]\) : les normales sont coplanaires. Chaque paire de plans se coupe selon une droite, et les trois droites sont parallèles.`],
      S`aucune solution : les plans forment un prisme triangulaire`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([1.5, 0, 0], [1, 0, 0], [0, 1.4, 0], 1.6, "#dbeafe", "blue", 0.45), patch3([1.5, 1, 1], [1, 0, 0], [0, 0.7, -0.7], 1.6, "#dcfce7", "green", 0.45), patch3([1.5, -1, 1], [1, 0, 0], [0, 0.7, 0.7], 1.6, "#fee2e2", "red", 0.45)] }, { texts: [{ x: 3.4, y: 4.4, t: "un prisme triangulaire", color: "gray" }] }))],
  ]),

  practice([
    q("point", S`Trouve la cote (coordonnée z) du point commun à \(x=1\), \(y=2\) et \(x+y+z=6\).`, num(3),
      "1 + 2 + z = 6.", [S`\(z=3\).`], S`\(3\)`),
    q("produit mixte", S`Si \(\vec n_1\cdot(\vec n_2\times\vec n_3)\ne0\), trois plans :`, choice(["se rencontrent en exactement un point", "ont une droite commune", "n'ont aucun point commun", "sont confondus"], 0),
      "Les normales sont indépendantes.", ["Comme les murs et le plancher d'une pièce."], "se rencontrent en un point"),
    q("parallèles", S`Combien de points communs ont deux plans parallèles distincts?`, num(0),
      "Ils ne se rencontrent jamais.", ["Même normale, constante différente."], S`\(0\)`),
    q("résolution", S`Trouve l'ordonnée (coordonnée y) de la solution de \(x+y=3\), \(y+z=5\), \(x+z=4\).`, num(2),
      "Additionne les trois : x + y + z = 6.", [S`\(y=6-4\).`], S`\(2\)`),
    q("deux plans", S`Deux plans non parallèles se coupent toujours selon :`, choice(["une droite", "un point", "rien", "un plan"], 0),
      "Direction n₁ × n₂.", ["Ils se coupent selon une droite."], "une droite"),
  ]),

  ...hard([
    ["Quand n'y a-t-il pas de point unique?", S`Pour quelle valeur de \(k\) les plans \(x+y+z=1\), \(x-y+z=0\), \(x+y+kz=3\) ne se rencontrent-ils pas en un seul point? Décris ce cas.`,
      [S`\(\vec n_1\cdot(\vec n_2\times\vec n_3)=\det\begin{bmatrix}1&1&1\\1&-1&1\\1&1&k\end{bmatrix}=2-2k\), qui vaut zéro lorsque \(k=1\).`, S`Le troisième plan est alors \(x+y+z=3\), parallèle au premier : aucun point commun, et le deuxième plan coupe les deux autres.`],
      S`\(k=1\) : deux plans parallèles coupés par un troisième — aucune solution`,
      vfig(merge(V3, axes3(4.6), { polys: [patch3([0.3, 0.3, 0.4], [1, -1, 0], [1, 0, -1], 1.5, "#dbeafe", "blue", 0.45), patch3([1, 1, 1], [1, -1, 0], [1, 0, -1], 1.5, "#dbeafe", "blue", 0.45), patch3([1, 0.75, 0.5], [1, 0, -1], [1, 1, 0], 1.2, "#dcfce7", "green", 0.45)] }))],
    ["Choisir un troisième plan", S`On donne les plans \(x+2y-z=3\) et \(2x-y+z=1\). Montre que le plan \(y=1\) les rencontre en un seul point, et trouve ce point.`,
      [S`\([1,2,-1]\cdot([2,-1,1]\times[0,1,0])=[1,2,-1]\cdot[-1,0,2]=-3\ne0\) : un seul point.`, S`Avec \(y=1\) : \(x-z=1\) et \(2x+z=2\Rightarrow3x=3\); donc \(x=1\), \(z=0\).`],
      S`le point unique \((1,1,0)\)`,
      vfig(merge(V3, axes3(4.6), { polys: [{ ...patch3([1, 1, 0], [1, 0, 0], [0, 0, 1], 1.8), fill: "#fee2e2", stroke: "red" }] }, { points: [pt(1, 1, 0, "(1, 1, 0)", 8, 14)] }))],
  ], [
    q("difficile", S`Trouve la cote (coordonnée z) du point commun à \(x+y+z=3\), \(x-y=0\), \(z=2x\).`, num(1.5, 0.001),
      "x = y et z = 2x donnent 4x = 3.", [S`\(x=0.75\), \(z=1.5\).`], S`\(1.5\)`),
    q("difficile", S`Trouve \(k\) pour que les normales de \(2x+y-z=1\), \(x-y+2z=3\), \(3x+kz=4\) soient coplanaires.`, num(1),
      "Produit mixte 3 − 3k = 0.", [S`\(\det=-2k-k+6-3\).`], S`\(1\)`),
    q("difficile", S`Trouve la distance entre les plans parallèles \(x+2y+2z=3\) et \(x+2y+2z=12\).`, num(3),
      "|12 − 3| / 3.", [S`\(\frac93\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment deux plans se rencontrent-ils?", "Selon une droite (s'ils ne sont pas parallèles), pas du tout (parallèles) ou partout (confondus)."],
      ["Comment trouver la droite d'intersection?", "Direction n₁ × n₂; trouve un point en posant une variable égale à 0 et en résolvant les deux équations."],
      ["Comment trois plans se rencontrent-ils?", "En un point, selon une droite, dans un plan entier, ou pas du tout (plans parallèles ou prisme triangulaire)."],
      ["Que m'apprend le produit mixte des normales?", "Non nul : exactement un point commun. Nul : une droite, un plan ou aucun point commun."],
      ["Que signifie 0 = 5 pendant l'élimination?", "Le système est incompatible : les plans n'ont aucun point commun."],
    ],
    summary: [
      "Deux plans : une droite selon n₁ × n₂, ou plans parallèles ou confondus.",
      "Trois plans : résous par élimination.",
      "n₁ · (n₂ × n₃) ≠ 0 ⇔ un point.",
      "0 = 0 : une infinité de solutions; 0 = c : aucune.",
    ],
    next: "En 8.7, on révise le chapitre.",
  }),
];
