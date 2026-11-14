// MTH1W-FR 5.2 — Motifs créés avec les propriétés des cercles et des triangles (format autonome)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { fig, polygon } from "../mth1w-ch5/figs5.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "5.2 Motifs créés avec les propriétés des cercles et des triangles";
export const ID = lessonId(5, 2);

const P = (deg, r = 1) => [r * Math.cos((deg * Math.PI) / 180), r * Math.sin((deg * Math.PI) / 180)];
/** cercle de rayon 1 avec des points nommés aux angles donnés et une liste de cordes [i, j] (indice "O" = centre) */
function circleFig({ pts, chords = [], radii = [], right = [], arcs = [], extra = [] }, caption = "", w = 270) {
  const at = (k) => (k === "O" ? [0, 0] : P(pts[k][1]));
  const items = [{ circle: [0, 0, 1], color: "ink", fill: "#fff" }, { dot: [0, 0], r: 3 }, { text: "O", at: [-0.08, -0.1], size: 12, color: "gray" }];
  for (const [i, j] of [...chords, ...radii]) items.push({ seg: [at(i), at(j)], color: radii.some(([a, b]) => a === i && b === j) ? "blue" : "red" });
  for (const [a, b, c] of right) items.push({ right: [at(a), at(b), at(c)] });
  for (const [a, b, c, t] of arcs) items.push({ arc: [at(a), at(b), at(c)], label: t, r: 0.18, lr: 0.14 });
  pts.forEach(([name, deg]) => { items.push({ dot: P(deg), r: 3.5, color: "ink" }, { text: name, at: P(deg, 1.14), bold: true }); });
  return fig({ w, items: [...items, ...extra] }, caption);
}

export const blocks = () => [
  intro({
    icon: "⭕",
    title: "Motifs créés avec les propriétés des cercles et des triangles",
    overview: String.raw`Les logos, les courtepointes, les vitraux, les roues et les fermes de toit sont construits à partir de triangles et de cercles. Quelques propriétés fiables des angles te permettent de trouver chaque angle inconnu dans un tel motif — et de créer tes propres motifs dont les pièces s'ajustent parfaitement. Cette leçon rassemble les propriétés des triangles, des polygones et des cercles dont tu as besoin, et montre comment les enchaîner.`,
    goals: [
      "utiliser la somme des angles d'un triangle (180°) et la propriété de l'angle extérieur;",
      "utiliser les propriétés des triangles isocèles et équilatéraux;",
      "trouver les angles intérieurs et extérieurs des polygones réguliers;",
      "utiliser les propriétés du cercle : angles inscrits et angles au centre, l'angle inscrit dans un demi-cercle, et la tangente qui rencontre un rayon à 90°;",
      "analyser et concevoir des figures formées de triangles, de polygones et de cercles.",
    ],
    curriculum: "E1.2 (créer et analyser des motifs à l'aide des propriétés des cercles et des triangles)",
    prior: [
      [String.raw`Les angles sur une droite ont une somme de… ?`, String.raw`\(180^\circ\).`],
      [String.raw`Les angles autour d'un point ont une somme de… ?`, String.raw`\(360^\circ\).`],
      [String.raw`Quel est le rayon d'un cercle de diamètre \(14\) ?`, String.raw`\(7\).`],
    ],
    words: [
      ["Angle extérieur", "angle entre un côté et le prolongement du côté suivant", "\\(115^\\circ\\)"],
      ["Triangle isocèle", "deux côtés égaux; les angles opposés à ces côtés sont égaux", "angles à la base"],
      ["Polygone régulier", "tous les côtés égaux et tous les angles égaux", "panneau d'arrêt (octogone)"],
      ["Angle au centre", "angle dont le sommet est au centre d'un cercle", "\\(\\angle AOB\\)"],
      ["Angle inscrit", "angle dont le sommet est sur le cercle", "\\(\\angle APB\\)"],
      ["Tangente", "une droite qui touche un cercle en un seul point", ""],
    ],
  }),

  section("📌 Propriétés des triangles", String.raw`
  ${table(["Propriété", "Énoncé", "En symboles"], [
    ["Somme des angles", "les angles intérieurs de tout triangle ont une somme de 180°", "\\(a+b+c=180^\\circ\\)"],
    ["Angle extérieur", "un angle extérieur est égal à la somme des deux angles intérieurs opposés", "\\(e=a+b\\)"],
    ["Isocèle", "deux côtés égaux ⇔ les deux angles à la base sont égaux", "\\(b=c\\)"],
    ["Équilatéral", "trois côtés égaux ⇔ chaque angle mesure 60°", "\\(60^\\circ\\)"],
  ])}
  <p>Pourquoi la propriété de l'angle extérieur fonctionne : l'angle extérieur et \(c\) forment un angle plat, donc \(e=180^\circ-c\); et \(a+b=180^\circ-c\) aussi.</p>`),

  widget("triangleAngles"),

  section("📌 Les polygones", String.raw`
  <p>Trace les diagonales à partir d'un sommet d'un polygone à \(n\) côtés : elles le divisent en \(n-2\) triangles, chacun ayant \(180^\circ\).</p>
  ${fig({ w: 300, items: [...polygon([[0, 0], [4, 0], [5.2, 2.6], [3, 4.4], [-0.6, 2.8]], { fill: "violet", color: "violet" }), { seg: [[0, 0], [5.2, 2.6]], color: "violet", dash: true }, { seg: [[0, 0], [3, 4.4]], color: "violet", dash: true }, { text: "1", at: [3.1, 0.9], bold: true }, { text: "2", at: [2.8, 2.5], bold: true }, { text: "3", at: [0.9, 2.5], bold: true }] }, "Un pentagone se divise en 3 triangles : 3 × 180° = 540°.")}
  ${keyIdea(String.raw`Somme des angles intérieurs \(=(n-2)\times180^\circ\). Pour un polygone régulier, chaque angle intérieur mesure \(\dfrac{(n-2)\times180^\circ}{n}\). Les angles extérieurs de tout polygone convexe ont une somme de \(360^\circ\), donc chaque angle extérieur d'un polygone régulier mesure \(\dfrac{360^\circ}{n}\).`)}
  ${table(["Polygone", "n", "Somme des angles", "Chaque angle (régulier)", "Chaque angle extérieur"], [
    ["triangle", "3", "180°", "60°", "120°"], ["carré", "4", "360°", "90°", "90°"], ["pentagone", "5", "540°", "108°", "72°"], ["hexagone", "6", "720°", "120°", "60°"], ["octogone", "8", "1080°", "135°", "45°"],
  ])}`),

  section("📌 Propriétés du cercle", String.raw`
  <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;">
  ${circleFig({ pts: [["A", 210], ["B", 330], ["P", 100]], radii: [["O", 0], ["O", 1]], chords: [[0, 2], [1, 2]], arcs: [[0, "O", 1, ""], [0, 2, 1, ""]] }, "L'angle inscrit ∠APB = ½ de l'angle au centre ∠AOB.", 230)}
  ${circleFig({ pts: [["A", 180], ["B", 0], ["P", 60]], chords: [[0, 2], [1, 2], [0, 1]], right: [[0, 2, 1]] }, "AB est un diamètre, donc ∠APB = 90°.", 230)}
  ${circleFig({ pts: [["T", 270]], radii: [["O", 0]], extra: [{ seg: [[-1.2, -1], [1.2, -1]], color: "green" }, { right: [[0, 0], [0, -1], [1, -1]] }] }, "Une tangente est perpendiculaire au rayon.", 230)}
  </div>
  ${table(["Propriété", "Énoncé"], [
    ["Angle inscrit", "un angle inscrit est la moitié de l'angle au centre qui intercepte le même arc; les angles inscrits qui interceptent le même arc sont égaux"],
    ["Angle inscrit dans un demi-cercle", "un angle inscrit dans un demi-cercle (qui intercepte un diamètre) mesure 90°"],
    ["Tangente et rayon", "une tangente est perpendiculaire au rayon tracé jusqu'au point de contact"],
    ["Rayons", "tous les rayons sont égaux, donc un triangle dont deux côtés sont des rayons est isocèle"],
    ["Polygone régulier inscrit dans un cercle", "les n sommets divisent 360° en n angles au centre égaux de 360°/n"],
  ])}
  <p>Déplace P sur le cercle et change l'arc. L'angle inscrit reste la moitié de l'angle au centre.</p>`),

  widget("circleAngles"),

  section("📌 Analyser un motif", String.raw`
  <p>Pour trouver un angle inconnu dans un motif, note ce que tu sais, nomme la propriété utilisée à chaque étape et vérifie que la somme des angles de chaque triangle est \(180^\circ\).</p>
  ${watchOut([
    "L'angle inscrit doit intercepter le même arc que l'angle au centre.",
    "Dans un triangle isocèle, les angles égaux sont opposés aux côtés égaux — pas nécessairement en bas.",
    "Deux rayons forment un triangle isocèle : utilise-le !",
    "Les angles extérieurs d'un polygone ont une somme de 360° seulement si tu en prends un à chaque sommet.",
  ])}`),

  examples([
    ["L'angle extérieur", String.raw`Dans \(\triangle ABC\), \(\angle A=48^\circ\) et l'angle extérieur en \(C\) mesure \(115^\circ\). Trouve \(\angle B\) et \(\angle ACB\).`,
      [String.raw`<b>Règle (propriété de l'angle extérieur).</b> \[\text{angle extérieur}=\text{somme des deux angles intérieurs opposés}\] En \(C\), les angles intérieurs opposés sont \(\angle A\) et \(\angle B\).`,
        String.raw`<b>Trouver \(\angle B\) :</b> \(48^\circ+\angle B=115^\circ\), donc \(\angle B=115^\circ-48^\circ=67^\circ\).`,
        String.raw`<b>Trouver \(\angle ACB\).</b> Les angles intérieur et extérieur en \(C\) forment un angle plat, donc leur somme est \(180^\circ\) : \(\angle ACB=180^\circ-115^\circ=65^\circ\).`,
        String.raw`<b>Vérifier avec la somme des angles :</b> \(48+67+65=180\) ✓.`],
      String.raw`\(\angle B=67^\circ\), \(\angle ACB=65^\circ\)`,
      fig({ w: 320, items: [...polygon([[0, 0], [7, 0], [2.6, 4]], { names: ["A", "C", "B"], fill: "blue", color: "blue", angles: [[0, "48°"]] }), { seg: [[7, 0], [10, 0]], color: "blue", dash: true }, { text: "115°", at: [7.9, 0.6], color: "red", bold: true, size: 12 }] })],
    ["Une ferme de toit", String.raw`Une ferme de toit est un triangle isocèle dont les chevrons sont égaux. L'angle au sommet mesure \(110^\circ\). Quel angle chaque chevron forme-t-il avec la poutre horizontale ?`,
      [String.raw`<b>Règle.</b> Dans un triangle isocèle, les angles opposés aux côtés égaux (les angles à la base) sont égaux. Appelle chacun d'eux \(x\).`,
        String.raw`<b>Somme des angles d'un triangle :</b> \(x+x+110=180\), donc \(2x+110=180\).`,
        String.raw`<b>Résoudre :</b> soustrais 110 : \(2x=70\); divise par 2 : \(x=35\).`,
        String.raw`<b>Vérification :</b> \(35+35+110=180\) ✓.`],
      String.raw`\(35^\circ\) chacun`,
      fig({ w: 300, items: polygon([[0, 0], [8, 0], [4, 1.4]], { fill: "amber", color: "amber", angles: [[2, "110°"], [0, "x"], [1, "x"]] }) })],
    ["Un panneau d'arrêt", String.raw`Trouve chaque angle intérieur et chaque angle extérieur d'un octogone régulier (un panneau d'arrêt).`,
      [String.raw`<b>Règles.</b> \[\text{somme des angles intérieurs}=(n-2)\times180^\circ,\qquad\text{somme des angles extérieurs}=360^\circ\]`,
        String.raw`<b>Somme intérieure</b> pour \(n=8\) : \((8-2)\times180^\circ=6\times180^\circ=1080^\circ\).`,
        String.raw`<b>Chaque angle intérieur.</b> Régulier signifie que tous les angles sont égaux : \(1080^\circ\div8=135^\circ\).`,
        String.raw`<b>Chaque angle extérieur :</b> \(360^\circ\div8=45^\circ\).`,
        String.raw`<b>Vérification :</b> un angle intérieur et un angle extérieur forment un angle plat : \(135+45=180\) ✓.`],
      String.raw`\(135^\circ\) à l'intérieur, \(45^\circ\) à l'extérieur`,
      fig({ w: 200, items: polygon([0, 1, 2, 3, 4, 5, 6, 7].map((k) => P(22.5 + 45 * k, 4)), { fill: "red", color: "red" }) })],
    ["L'angle inscrit dans un demi-cercle", String.raw`\(AB\) est un diamètre d'un cercle et \(P\) est sur le cercle. Si \(\angle PAB=34^\circ\), trouve \(\angle PBA\).`,
      [String.raw`<b>Règle (angle inscrit dans un demi-cercle).</b> Un angle tracé à partir des extrémités d'un diamètre jusqu'à un point du cercle est un angle droit.`,
        String.raw`<b>L'appliquer :</b> \(AB\) est un diamètre, donc \(\angle APB=90^\circ\).`,
        String.raw`<b>Somme des angles dans \(\triangle APB\) :</b> \(\angle PBA=180^\circ-90^\circ-34^\circ=56^\circ\).`,
        String.raw`<b>Vérification :</b> \(34+56+90=180\) ✓.`],
      String.raw`\(56^\circ\)`,
      circleFig({ pts: [["A", 180], ["B", 0], ["P", 112]], chords: [[0, 2], [1, 2], [0, 1]], right: [[0, 2, 1]] })],
    ["Un logo hexagonal", String.raw`Un logo est un hexagone régulier tracé à l'intérieur d'un cercle de rayon \(5\) cm, chaque sommet étant relié au centre. Trouve les angles au centre, les angles de chaque petit triangle et le périmètre de l'hexagone.`,
      [String.raw`<b>Angles au centre.</b> Les six angles au centre forment un tour complet : \(360^\circ\div6=60^\circ\) chacun.`,
        String.raw`<b>Chaque petit triangle est isocèle.</b> Deux de ses côtés sont des rayons, donc ils sont égaux (\(5\) cm), et ses angles à la base sont égaux.`,
        String.raw`<b>Angles à la base :</b> \((180^\circ-60^\circ)\div2=60^\circ\). Les trois angles mesurent \(60^\circ\), donc chaque triangle est équilatéral.`,
        String.raw`<b>Côté de l'hexagone.</b> Équilatéral signifie que tous les côtés sont égaux, donc chaque côté de l'hexagone est égal au rayon, \(5\) cm.`,
        String.raw`<b>Périmètre :</b> \(6\times5=30\) cm.`],
      String.raw`six angles au centre de \(60^\circ\); des triangles équilatéraux; périmètre de \(30\) cm`,
      fig({ w: 240, items: [{ circle: [0, 0, 5], color: "gray" }, { poly: [0, 1, 2, 3, 4, 5].map((k) => P(60 * k, 5)), fill: "blue", color: "blue" }, ...[0, 1, 2, 3, 4, 5].map((k) => ({ seg: [[0, 0], P(60 * k, 5)], color: "blue", width: 1.5 })), { text: "5 cm", at: [2.9, 0.75], color: "red", bold: true, size: 12 }] })],
  ]),

  practice([
    q("troisième angle", String.raw`Deux angles d'un triangle mesurent \(29^\circ\) et \(104^\circ\). Trouve le troisième angle (en degrés).`, num(47),
      "La somme des trois angles est 180°.", [String.raw`\(180-29-104=47\).`], String.raw`\(47^\circ\)`),
    q("angle extérieur", String.raw`Les deux angles intérieurs opposés à un angle extérieur mesurent \(55^\circ\) et \(72^\circ\). Trouve l'angle extérieur.`, num(127),
      "Angle extérieur = somme des deux angles intérieurs opposés.", [String.raw`\(55+72=127\).`], String.raw`\(127^\circ\)`),
    q("polygone régulier", String.raw`Trouve chaque angle intérieur d'un décagone régulier (\(10\) côtés).`, num(144),
      "Somme des angles (n − 2) × 180°, puis divise par n.", [String.raw`\((10-2)\times180=1440\); \(1440\div10=144\).`], String.raw`\(144^\circ\)`),
    q("angle inscrit", String.raw`Un angle au centre mesure \(136^\circ\). Trouve un angle inscrit qui intercepte le même arc.`, num(68),
      "Angle inscrit = la moitié de l'angle au centre.", [String.raw`\(136\div2=68\).`], String.raw`\(68^\circ\)`),
    q("tangente", String.raw`Une tangente touche en \(A\) un cercle de centre \(O\). Le point \(T\) est sur la tangente et \(\angle AOT=52^\circ\). Trouve \(\angle ATO\).`, num(38),
      "La tangente rencontre le rayon OA à 90°.", [String.raw`\(\angle OAT=90^\circ\); \(180-90-52=38\).`], String.raw`\(38^\circ\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment savoir quelle propriété utiliser ?", "Regarde où se trouve le sommet de l'angle inconnu. Au centre : propriétés de l'angle au centre. Sur le cercle : angle inscrit ou demi-cercle. Là où une droite touche le cercle : tangente ⟂ rayon. Dans un triangle : somme des angles et angle extérieur."],
      ["Pourquoi l'angle inscrit dans un demi-cercle mesure-t-il toujours 90° ?", "Son angle au centre est un angle plat, 180°. Un angle inscrit en est la moitié : 90°."],
      ["Comment les graphistes tracent-ils un polygone régulier ?", "Ils tracent un cercle et divisent 360° par le nombre de côtés pour obtenir des angles au centre égaux. Ils marquent les points où les rayons rencontrent le cercle, puis les relient."],
      ["Pourquoi un hexagone régulier peut-il paver un plancher, mais pas un pentagone régulier ?", "Les tuiles qui se rencontrent en un point doivent totaliser 360°. Trois angles d'hexagone (3 × 120°) font 360°; les angles de 108° du pentagone ne le peuvent pas (3 × 108 = 324, 4 × 108 = 432)."],
      ["L'angle extérieur d'un triangle est-il toujours obtus ?", "Non. Il est obtus seulement quand l'angle intérieur voisin est aigu. À côté d'un angle intérieur obtus, l'angle extérieur est aigu."],
    ],
    summary: [
      "Triangle : a + b + c = 180°; angle extérieur = somme des deux angles intérieurs opposés.",
      "Polygone : somme des angles (n − 2) × 180°; les angles extérieurs totalisent 360°.",
      "Cercle : angle inscrit = ½ de l'angle au centre; angle inscrit dans un demi-cercle = 90°; tangente ⟂ rayon.",
      "Deux rayons forment un triangle isocèle.",
    ],
    next: "En 5.3, tu convertiras des mesures d'une unité à l'autre et d'un système à l'autre.",
  }),
];
