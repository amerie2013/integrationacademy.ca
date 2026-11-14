// MCV4U-FR 8.4 — Intersections de droites dans l'espace à deux et à trois dimensions : résolution à l'aide des paramètres,
// droites parallèles et confondues, droites sécantes et droites gauches dans l'espace, angle entre deux droites et
// distance entre deux droites gauches
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, p3, axes3, merge, line3 } from "../mcv4u-ch8/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "8.4 Intersections de droites dans l'espace à deux et à trois dimensions";
export const ID = lessonId(8, 4);

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6, color = "black") => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy, color }; };
const L2 = (p, m, t0, t1, color = "violet", dash = false) => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4, dash });
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Intersections de droites dans l'espace à deux et à trois dimensions",
    overview: S`Là où deux droites se rencontrent, leurs équations donnent le même point. Avec des équations paramétriques, il s'agit de trouver une valeur de chaque paramètre qui produit les mêmes coordonnées. En deux dimensions, il n'y a que trois possibilités : un point, aucun point (droites parallèles) ou tous les points (droites confondues). L'espace à trois dimensions en ajoute une quatrième : des droites qui ne sont pas parallèles et qui ne se rencontrent pourtant jamais — des droites <strong>gauches</strong>. Pour des droites gauches, la question naturelle devient « à quelle distance minimale passent-elles l'une de l'autre? », et le produit vectoriel y répond.`,
    goals: [
      "trouver le point d'intersection de deux droites en résolvant pour les paramètres;",
      "reconnaître des droites parallèles et des droites confondues;",
      "déterminer si des droites de l'espace sont sécantes ou gauches;",
      "trouver l'angle entre deux droites;",
      "trouver la distance entre deux droites gauches.",
    ],
    curriculum: "C3.1, C3.3 (positions relatives de droites); C4.7 (intersection de deux droites; distance entre deux droites gauches)",
    prior: [
      [S`Résous \(1+3s=-2+t\) et \(2-s=t\).`, S`\(s=-0.25,\ t=2.25\).`],
      [S`\([2,-4]\) et \([-1,2]\) sont-ils parallèles?`, S`Oui.`],
      [S`\([1,2,1]\times[2,1,0]\)?`, S`\([-1,2,-3]\).`],
    ],
    words: [
      ["Sécantes", "exactement un point commun", ""],
      ["Parallèles", "même direction, aucun point commun", ""],
      ["Confondues", "la même droite", "une infinité de points"],
      ["Gauches", "espace à trois dimensions seulement : non parallèles et sans point commun", ""],
    ],
  }),

  section("📌 Les possibilités", S`
  ${table(["Directions", "Point commun?", "Deux dimensions", "Trois dimensions"], [
    ["non parallèles", "oui", "sécantes en un point", "sécantes en un point"],
    ["non parallèles", "non", "impossible", "gauches"],
    ["parallèles", "non", "parallèles distinctes", "parallèles distinctes"],
    ["parallèles", "oui", "confondues", "confondues"],
  ])}
  ${vfig(merge(V3, axes3(4.6), { segs: [line3([-1, 1, 0], [1, 0, 0], -2.5, 4.5, "violet", 2.8), line3([1, -1, 2], [0, 1, 0], -2, 4.5, "blue", 2.8), { pts: [p3(1, 1, 0), p3(1, 1, 2)], color: "red", dash: true, w: 2 }] }, { texts: [{ x: 3.9, y: 0.4, t: "droite 1", color: "violet" }, { x: 4.3, y: 2.1, t: "droite 2", color: "blue" }] }), "Droites gauches : l'une suit l'axe des x, l'autre suit l'axe des y deux unités plus haut — elles ne se rencontrent jamais")}
  ${keyIdea(S`Égale les équations paramétriques, coordonnée par coordonnée. En deux dimensions, résous les deux équations; en trois dimensions, résous-en deux sur trois et vérifie la troisième — si elle n'est pas vérifiée, les droites sont gauches (ou parallèles). La plus courte distance entre les droites gauches \(\vec r=\vec p_1+s\vec m_1\) et \(\vec r=\vec p_2+t\vec m_2\) est \(\frac{|\overrightarrow{P_1P_2}\cdot(\vec m_1\times\vec m_2)|}{|\vec m_1\times\vec m_2|}\).`)}`),

  section("📌 Explorer", S`<p>En deux dimensions, fais tourner les deux droites et déplace la deuxième vers le haut ou vers le bas : elles se rencontrent une fois, sauf si leurs directions sont identiques. Passe en trois dimensions et élève la droite 2 au-dessus de la droite 1 — les droites ne se rencontrent plus, et le segment en pointillé montre la plus courte distance entre elles.</p>`),

  widget("linesMeetLab", { init: { mode: "2d" } }),

  section("📌 Résoudre de façon systématique", S`
  <p>Utilise des lettres différentes pour les deux paramètres. Compare d'abord les directions : si elles sont parallèles, vérifie si un point d'une droite appartient à l'autre pour distinguer les droites parallèles des droites confondues. Sinon, résous pour trouver les paramètres et, en trois dimensions, confirme avec l'équation restante.</p>
  ${watchOut([
    "Utilise des paramètres différents (s et t) pour les deux droites.",
    "En trois dimensions, on peut toujours résoudre deux équations — vérifie toujours la troisième.",
    "Directions parallèles : vérifie un point pour distinguer droites parallèles et droites confondues.",
    "Les droites gauches n'existent que dans l'espace à trois dimensions.",
    "Pour l'angle entre deux droites, utilise les directions et donne l'angle aigu.",
  ])}`),

  examples([
    ["Deux droites en deux dimensions", S`Trouve le point d'intersection de \(\vec r=[1,2]+s[3,-1]\) et de \(\vec r=[-2,0]+t[1,1]\).`,
      [S`\(1+3s=-2+t\) et \(2-s=t\).`, S`Substitue : \(1+3s=-2+2-s\Rightarrow4s=-1\), \(s=-0.25\), \(t=2.25\).`, S`Point : \((1-0.75,\ 2+0.25)\).`],
      S`\((0.25,\ 2.25)\)`,
      vfig({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 4 }, segs: [L2([1, 2], [3, -1], -1.3, 1.3), L2([-2, 0], [1, 1], -0.6, 3.6, "blue")], points: [{ x: 0.25, y: 2.25, label: "(0.25, 2.25)", dx: 8, dy: -8, color: "red" }] })],
    ["Parallèles ou confondues?", S`Compare \(\vec r=[1,2]+s[2,-4]\) et \(\vec r=[3,-2]+t[-1,2]\).`,
      [S`\([2,-4]=-2[-1,2]\) : directions parallèles.`, S`Le point \((3,-2)\) appartient-il à la première droite? \(1+2s=3\Rightarrow s=1\), et \(2-4(1)=-2\). ✓`],
      S`confondues — c'est la même droite`],
    ["Droites sécantes dans l'espace", S`Trouve le point d'intersection de \(L_1:\ \vec r=[1,0,2]+s[1,1,-1]\) et de \(L_2:\ \vec r=[2,4,4]+t[0,-1,-1]\).`,
      [S`\(x\) : \(1+s=2\Rightarrow s=1\). \(y\) : \(s=4-t\Rightarrow t=3\).`, S`Vérifie \(z\) : \(2-s=1\) et \(4-t=1\). ✓`],
      S`\((2,1,1)\)`,
      vfig(merge(V3, axes3(4.6), { segs: [line3([1, 0, 2], [1, 1, -1], -1, 2.6, "violet", 2.8), line3([2, 4, 4], [0, -1, -1], -0.5, 4.2, "blue", 2.8)] }, { points: [pt(2, 1, 1, "(2, 1, 1)", 8, 14, "red")] }, { view: { xmin: -3.8, xmax: 6.4, ymin: -2.8, ymax: 6 } }))],
    ["Droites gauches et distance entre elles", S`Montre que \(L_1:\ \vec r=s[1,2,1]\) et \(L_2:\ \vec r=[1,0,3]+t[2,1,0]\) sont gauches, et trouve la distance entre elles.`,
      [S`Non parallèles. \(x\) : \(s=1+2t\); \(y\) : \(2s=t\) donnent \(t=-\frac23\), \(s=-\frac13\); \(z\) : \(-\frac13\ne3\). Gauches.`, S`\(\vec n=[1,2,1]\times[2,1,0]=[-1,2,-3]\); \(\overrightarrow{P_1P_2}=[1,0,3]\).`, S`Distance \(\frac{|-1+0-9|}{\sqrt{14}}=\frac{10}{\sqrt{14}}\).`],
      S`gauches; distantes d'environ 2.67`],
    ["L'angle entre deux droites", S`Trouve l'angle entre des droites de directions \([1,2,2]\) et \([0,3,4]\).`,
      [S`\(\cos\theta=\frac{0+6+8}{3\times5}=\frac{14}{15}\).`],
      S`environ \(21.04^\circ\)`],
  ]),

  practice([
    q("deux dimensions", S`Trouve l'abscisse du point où \(y=2x\) rencontre la droite \(\vec r=[0,3]+t[1,0]\).`, num(1.5, 0.001),
      "La deuxième droite est y = 3.", [S`\(2x=3\).`], S`\(1.5\)`),
    q("parallèles", S`Des droites de directions \([1,2,3]\) et \([2,4,6]\) sont :`, choice(["parallèles ou confondues", "gauches", "perpendiculaires", "toujours sécantes en un point"], 0),
      "Les directions sont des multiples l'une de l'autre.", ["Vérifie un point pour trancher."], "parallèles ou confondues"),
    q("gauches", S`Combien de points communs ont deux droites gauches?`, num(0),
      "Des droites gauches ne se rencontrent jamais.", ["Elles ne sont pas parallèles, et pourtant elles ne se rencontrent jamais."], S`\(0\)`),
    q("paramètre", S`\(\vec r=[1,1,1]+t[1,0,0]\) rencontre \(\vec r=[4,0,1]+s[0,1,0]\). Trouve \(t\).`, num(3),
      "Égale les x : 1 + t = 4.", [S`\(t=3\) (et \(s=1\)).`], S`\(3\)`),
    q("définition", S`Des droites gauches sont des droites qui :`, choice(["ne sont pas parallèles et ne se coupent pas", "sont parallèles", "se coupent à angle droit", "sont confondues"], 0),
      "Possible seulement dans l'espace à trois dimensions.", ["Ni parallèles, ni sécantes."], "non parallèles, non sécantes"),
  ]),

  ...hard([
    ["À quelle distance minimale passent-elles?", S`Trouve la plus courte distance entre \(L_1:\ \vec r=[1,0,0]+s[0,1,1]\) et \(L_2:\ \vec r=[0,1,3]+t[1,0,1]\).`,
      [S`\(\vec n=[0,1,1]\times[1,0,1]=[1,1,-1]\); \(\overrightarrow{P_1P_2}=[-1,1,3]\).`, S`Distance \(\frac{|-1+1-3|}{\sqrt3}=\frac{3}{\sqrt3}=\sqrt3\).`],
      S`\(\sqrt3\approx1.73\)`,
      vfig(merge(V3, axes3(4.6), { segs: [line3([1, 0, 0], [0, 1, 1], -1, 3.4, "violet", 2.8), line3([0, 1, 3], [1, 0, 1], -1, 2.4, "blue", 2.8)] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 7 } }))],
    ["Choisir k pour qu'elles se rencontrent", S`Trouve \(k\) pour que \(\vec r=[1,2,3]+s[1,-1,2]\) et \(\vec r=[3,k,5]+t[1,1,0]\) se coupent, et trouve le point d'intersection.`,
      [S`\(z\) : \(3+2s=5\Rightarrow s=1\). \(x\) : \(1+s=3+t\Rightarrow t=-1\).`, S`\(y\) : \(2-s=k+t\Rightarrow1=k-1\Rightarrow k=2\). Point : \((2,1,5)\).`],
      S`\(k=2\); elles se coupent en \((2,1,5)\)`,
      vfig(merge(V3, axes3(4.6), { segs: [line3([1, 2, 3], [1, -1, 2], -1.4, 1.4, "violet", 2.8), line3([3, 2, 5], [1, 1, 0], -3, 1.5, "blue", 2.8)] }, { points: [pt(2, 1, 5, "(2, 1, 5)", 8, -4, "red")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 7.4 } }))],
  ], [
    q("difficile", S`Trouve la distance entre les droites parallèles \(y=2x+1\) et \(y=2x+6\) (au centième près).`, num(2.24, 0.01),
      "Distance d'un point de l'une à l'autre : |6 − 1| / √5.", [S`\(\frac{5}{\sqrt5}=\sqrt5\).`], S`\(2.24\)`),
    q("difficile", S`Dans le deuxième défi ci-dessus, quelle est la valeur de \(s\) au point d'intersection?`, num(1),
      "À partir de l'équation en z.", [S`\(3+2s=5\).`], S`\(1\)`),
    q("difficile", S`Trouve la distance entre \(\vec r=s[1,0,0]\) et \(\vec r=[0,0,4]+t[0,1,0]\).`, num(4),
      "n = [0, 0, 1].", [S`\(\frac{|[0,0,4]\cdot[0,0,1]|}{1}\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment trouver le point de rencontre de deux droites?", "Égale les équations paramétriques (avec des paramètres différents) et résous; en trois dimensions, vérifie l'équation restante."],
      ["Comment distinguer des droites parallèles de droites confondues?", "Les directions sont des multiples l'une de l'autre; vérifie si un point d'une droite appartient à l'autre."],
      ["Que sont des droites gauches?", "Des droites de l'espace à trois dimensions qui ne sont pas parallèles et qui ne se rencontrent jamais."],
      ["Comment trouver la distance entre deux droites gauches?", "Projette le vecteur qui relie un point de chaque droite sur m₁ × m₂ : |P₁P₂ · (m₁ × m₂)| / |m₁ × m₂|."],
      ["Comment trouver l'angle entre deux droites?", "Utilise le produit scalaire des vecteurs directeurs et prends l'angle aigu."],
    ],
    summary: [
      "Résous pour les paramètres; vérifie chaque coordonnée.",
      "Directions parallèles : droites parallèles ou confondues.",
      "Trois dimensions : sécantes, parallèles, confondues ou gauches.",
      "Distance entre droites gauches : |P₁P₂ · (m₁ × m₂)| / |m₁ × m₂|.",
    ],
    next: "En 8.5, on trouve où des droites rencontrent des plans.",
  }),
];
