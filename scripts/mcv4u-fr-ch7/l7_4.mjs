// MCV4U-FR 7.4 — Vecteurs dans l'espace : axes des x, des y et des z et octants, représentation de points, vecteurs
// position et i, j, k, norme et distance, opérations et produit scalaire dans l'espace, et angles directeurs
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, box3, merge } from "../mcv4u-ch7/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "7.4 Vecteurs dans l'espace";
export const ID = lessonId(7, 4);

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
export const blocks = () => [
  intro({
    icon: "🧊",
    title: "Vecteurs dans l'espace",
    overview: S`Ajoute un troisième axe, perpendiculaire aux deux autres, et chaque point de l'espace reçoit trois coordonnées \((x,y,z)\). Les vecteurs gagnent une troisième composante : \([a,b,c]=a\vec i+b\vec j+c\vec k\), où \(\vec k\) est le vecteur unitaire de l'axe des z. Tout ce que tu as vu dans le plan reste valable avec un terme de plus — la norme \(\sqrt{a^2+b^2+c^2}\), l'addition composante par composante et le produit scalaire \(a_1b_1+a_2b_2+a_3b_3\). Une nouvelle idée apparaît aussi : les angles directeurs qu'un vecteur forme avec chacun des trois axes.`,
    goals: [
      "représenter des points dans l'espace et reconnaître les octants;",
      "écrire des vecteurs position et des vecteurs entre deux points avec i, j, k;",
      "trouver des normes et des distances entre des points;",
      "additionner, multiplier par un scalaire et calculer le produit scalaire de vecteurs dans l'espace;",
      "trouver les angles directeurs et les cosinus directeurs.",
    ],
    curriculum: "C1.4 (représenter des points et des vecteurs dans l'espace à l'aide de coordonnées cartésiennes; distance et norme); C2.1, C2.4 (opérations et produit scalaire dans l'espace)",
    prior: [
      [S`\(|[3,4]|\)?`, S`\(5\).`],
      [S`\([2,1]\cdot[3,-4]\)?`, S`\(2\).`],
      [S`\(\cos^{-1}0\)?`, S`\(90^\circ\).`],
    ],
    words: [
      ["Espace à trois dimensions", "points \\((x,y,z)\\)", "trois axes perpendiculaires"],
      ["\\(\\vec k\\)", "vecteur unitaire de l'axe des z", "\\([0,0,1]\\)"],
      ["Octant", "l'une des 8 régions de l'espace", "déterminé par les signes de x, y, z"],
      ["Angles directeurs", "\\(\\alpha,\\beta,\\gamma\\) avec les axes", "\\(\\cos^2\\alpha+\\cos^2\\beta+\\cos^2\\gamma=1\\)"],
    ],
  }),

  section("📌 Points et vecteurs dans l'espace", S`
  ${vfig(merge(V3, axes3(4.8), { segs: box3(3, 4, 2) }, { arrows: [{ from: [0, 0], to: p3(3, 4, 2), vl: "OP", color: "red", off: -16 }], points: [pt(3, 4, 2, "P(3, 4, 2)")] }), "Pour représenter P(3, 4, 2) : 3 le long de l'axe des x, 4 le long de l'axe des y, puis 2 vers le haut — un coin de la boîte en pointillé")}
  ${table(["Tâche", "Règle pour \\(\\vec u=[u_1,u_2,u_3]\\), \\(\\vec v=[v_1,v_2,v_3]\\)"], [
    ["vecteur de \\(A\\) à \\(B\\)", "\\([x_2-x_1,\\ y_2-y_1,\\ z_2-z_1]\\)"],
    ["norme", "\\(\\sqrt{u_1^2+u_2^2+u_3^2}\\)"],
    ["produit scalaire", "\\(u_1v_1+u_2v_2+u_3v_3\\)"],
    ["cosinus directeurs", "\\(\\cos\\alpha=\\frac{u_1}{|\\vec u|},\\ \\cos\\beta=\\frac{u_2}{|\\vec u|},\\ \\cos\\gamma=\\frac{u_3}{|\\vec u|}\\)"],
  ])}
  ${keyIdea(S`Les axes forment un système de main droite : enroule les doigts de ta main droite de l'axe des x vers l'axe des y, et ton pouce pointe dans le sens de l'axe des z. La distance entre deux points est la norme du vecteur qui les relie.`)}`),

  section("📌 Explore", S`<p>Déplace le point avec les curseurs x, y et z et observe sa boîte de repère. Fais tourner et incline la vue pour voir la boîte sous différents angles; la norme et les angles directeurs se mettent à jour au fur et à mesure.</p>`),

  widget("space3Lab", { init: { x: 3, y: 4, z: 2 } }),

  section("📌 Travailler dans l'espace", S`
  <p>Pour représenter un point, avance le long de l'axe des x, puis parallèlement à l'axe des y, puis parallèlement à l'axe des z. Chaque règle du plan gagne un troisième terme. Pour les angles directeurs, divise chaque composante par la norme et prends l'inverse du cosinus.</p>
  ${watchOut([
    "Dans le croquis habituel, l'axe des x vient vers toi — ne le confonds pas avec l'axe des y.",
    "Élève les trois composantes au carré pour la norme.",
    "Les angles directeurs se mesurent avec les axes positifs et sont compris entre 0° et 180°.",
    "La somme des trois angles directeurs ne vaut pas 180°; c'est la somme des carrés de leurs cosinus qui vaut 1.",
    "Un point de l'espace a besoin de ses trois coordonnées, même si l'une d'elles vaut 0.",
  ])}`),

  examples([
    ["Représenter un point", S`Représente \(P(2,3,4)\) et trouve \(|\overrightarrow{OP}|\).`,
      [S`Avance de 2 le long de l'axe des x, de 3 parallèlement à l'axe des y, puis de 4 vers le haut.`, S`\(|\overrightarrow{OP}|=\sqrt{4+9+16}=\sqrt{29}\).`],
      S`\(\sqrt{29}\approx5.39\)`,
      vfig(merge(V3, axes3(4.8), { segs: box3(2, 3, 4) }, { arrows: [{ from: [0, 0], to: p3(2, 3, 4), vl: "OP", color: "red", off: -16 }], points: [pt(2, 3, 4, "P(2, 3, 4)")] }))],
    ["Distance entre deux points", S`Trouve \(\overrightarrow{AB}\) et \(|\overrightarrow{AB}|\) pour \(A(1,-2,3)\) et \(B(4,2,-9)\).`,
      [S`\(\overrightarrow{AB}=[3,4,-12]\).`, S`\(\sqrt{9+16+144}=\sqrt{169}\).`],
      S`\([3,4,-12]\), norme 13`],
    ["Opérations", S`Pour \(\vec u=[1,-2,2]\) et \(\vec v=[3,0,-4]\), trouve \(2\vec u-\vec v\), sa norme et \(\vec u\cdot\vec v\).`,
      [S`\(2\vec u-\vec v=[2-3,\ -4-0,\ 4+4]=[-1,-4,8]\); norme \(\sqrt{1+16+64}=9\).`, S`\(\vec u\cdot\vec v=3+0-8=-5\).`],
      S`\([-1,-4,8]\), norme 9; \(\vec u\cdot\vec v=-5\)`],
    ["Angle entre deux vecteurs de l'espace", S`Trouve l'angle entre \(\vec a=[2,1,-2]\) et \(\vec b=[1,-1,4]\).`,
      [S`\(\vec a\cdot\vec b=2-1-8=-7\); \(|\vec a|=3\), \(|\vec b|=\sqrt{18}\).`, S`\(\cos\theta=\frac{-7}{3\sqrt{18}}\approx-0.5500\).`],
      S`environ \(123.37^\circ\)`,
      vfig(merge(V3, axes3(4.2), { arrows: [{ from: [0, 0], to: p3(2, 1, -2), vl: "a", off: 16 }, { from: [0, 0], to: p3(1, -1, 4), vl: "b", color: "blue", off: -16 }] }, { view: { xmin: -3.8, xmax: 5, ymin: -3.6, ymax: 5 } }))],
    ["Angles directeurs", S`Trouve les angles directeurs de \(\vec v=[2,-3,6]\) et vérifie que la somme des carrés de leurs cosinus vaut 1.`,
      [S`\(|\vec v|=\sqrt{4+9+36}=7\).`, S`\(\alpha=\cos^{-1}\frac27\approx73.40^\circ\), \(\beta=\cos^{-1}\left(-\frac37\right)\approx115.38^\circ\), \(\gamma=\cos^{-1}\frac67\approx31.00^\circ\).`, S`\(\frac{4+9+36}{49}=1\).`],
      S`\(73.40^\circ\), \(115.38^\circ\), \(31.00^\circ\)`,
      vfig(merge(V3, axes3(4.6), { arrows: [{ from: [0, 0], to: p3(2 * 0.6, -3 * 0.6, 6 * 0.6), vl: "v", color: "red", off: -16 }], texts: [{ x: 0.9, y: 2.6, t: "γ ≈ 31° avec z", color: "red" }] }))],
  ]),

  practice([
    q("norme", S`Trouve \(|[1,4,-8]|\).`, num(9),
      "Élève au carré, additionne, prends la racine.", [S`\(\sqrt{1+16+64}\).`], S`\(9\)`),
    q("distance", S`Trouve la distance entre \((2,-1,5)\) et \((-4,1,2)\).`, num(7),
      "La norme du vecteur qui relie les points.", [S`\(\sqrt{36+4+9}\).`], S`\(7\)`),
    q("produit scalaire", S`Trouve \([3,-1,2]\cdot[2,5,1]\).`, num(3),
      "Trois produits.", [S`\(6-5+2\).`], S`\(3\)`),
    q("octant", S`Quels signes décrivent le point \((-1,2,-3)\)?`, choice(["x négatif, y positif, z négatif", "x positif, y positif, z négatif", "tous négatifs", "x négatif, y négatif, z positif"], 0),
      "Lis les signes.", ["Un signe par coordonnée."], "x −, y +, z −"),
    q("perpendiculaires", S`Trouve \(k\) pour que \([2,k,-1]\perp[4,1,3]\).`, num(-5),
      "Produit scalaire nul.", [S`\(8+k-3=0\).`], S`\(-5\)`),
  ]),

  ...hard([
    ["Un triangle rectangle dans l'espace", S`Montre que \(A(1,2,3)\), \(B(3,3,5)\) et \(C(2,4,1)\) forment un triangle rectangle, et trouve son aire.`,
      [S`\(\overrightarrow{AB}=[2,1,2]\), \(\overrightarrow{AC}=[1,2,-2]\).`, S`\(\overrightarrow{AB}\cdot\overrightarrow{AC}=2+2-4=0\) : angle droit en \(A\).`, S`Les deux cathètes mesurent 3, donc l'aire est \(\frac12(3)(3)\).`],
      S`rectangle en \(A\); aire 4.5`,
      vfig(merge(V3, axes3(4.8), { segs: [{ pts: [p3(1, 2, 3), p3(3, 3, 5), p3(2, 4, 1), p3(1, 2, 3)], color: "gray" }], arrows: [{ from: p3(1, 2, 3), to: p3(3, 3, 5), color: "violet" }, { from: p3(1, 2, 3), to: p3(2, 4, 1), color: "blue" }], points: [pt(1, 2, 3, "A", -16, -4), pt(3, 3, 5, "B"), pt(2, 4, 1, "C", 8, 14)] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))],
    ["Le troisième angle directeur", S`Un vecteur forme un angle de \(60^\circ\) avec l'axe des x et de \(45^\circ\) avec l'axe des y. Quel angle peut-il former avec l'axe des z?`,
      [S`\(\cos^2\gamma=1-\cos^260^\circ-\cos^245^\circ=1-\frac14-\frac12=\frac14\).`, S`\(\cos\gamma=\pm\frac12\).`],
      S`\(\gamma=60^\circ\) ou \(120^\circ\)`,
      vfig(merge(V3, axes3(4.6), { arrows: [{ from: [0, 0], to: p3(2, 2.83, 2), color: "red", label: "γ = 60°", off: -16 }, { from: [0, 0], to: p3(2, 2.83, -2), color: "blue", label: "γ = 120°", off: 16 }] }, { view: { xmin: -3.8, xmax: 6, ymin: -3.6, ymax: 5.8 } }))],
  ], [
    q("difficile", S`Trouve la composante en z du vecteur unitaire de même direction que \([4,-4,2]\) (3 décimales).`, num(0.333, 0.001),
      "Divise par la norme, 6.", [S`\(\frac26\).`], S`\(0.333\)`),
    q("difficile", S`Trouve \(c\gt0\) tel que \(|[2,3,c]|=7\).`, num(6),
      "4 + 9 + c² = 49.", [S`\(c^2=36\).`], S`\(6\)`),
    q("difficile", S`Trouve l'angle entre \([1,1,1]\) et l'axe des z (en degrés, 2 décimales).`, num(54.74, 0.01),
      "cos γ = 1/√3.", [S`\(\cos^{-1}\frac1{\sqrt3}\).`], S`\(54.74^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment représenter (x, y, z)?", "Avance de x le long de l'axe des x, puis de y parallèlement à l'axe des y, puis de z parallèlement à l'axe des z."],
      ["Qu'est-ce que k?", "Le vecteur unitaire [0, 0, 1] de l'axe des z; [a, b, c] = a i + b j + c k."],
      ["Comment trouver une distance dans l'espace?", "Trouve le vecteur entre les points et calcule √(a² + b² + c²)."],
      ["Le produit scalaire change-t-il dans l'espace?", "Seulement d'un terme de plus : a₁b₁ + a₂b₂ + a₃b₃. Sa signification géométrique reste la même."],
      ["Que sont les angles directeurs?", "Les angles qu'un vecteur forme avec les axes des x, des y et des z positifs; leurs cosinus sont les composantes divisées par la norme."],
    ],
    summary: [
      "[a, b, c] = a i + b j + c k.",
      "|v| = √(a² + b² + c²).",
      "a · b = a₁b₁ + a₂b₂ + a₃b₃.",
      "cos²α + cos²β + cos²γ = 1.",
    ],
    next: "En 7.5, on présente le produit vectoriel.",
  }),
];
