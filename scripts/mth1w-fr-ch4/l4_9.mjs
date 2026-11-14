// MTH1W-FR 4.9 — Droites parallèles et perpendiculaires (format autonome)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr } from "./lib.mjs";
import { plane } from "./figs4.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "4.9 Droites parallèles et perpendiculaires";
export const ID = lessonId(4, 9);

export const blocks = () => [
  intro({
    icon: "⊥",
    title: "Droites parallèles et perpendiculaires",
    overview: String.raw`Les pentes t'indiquent la position de deux droites l'une par rapport à l'autre. Des droites <strong>parallèles</strong> ont des <strong>pentes égales</strong>. Des droites <strong>perpendiculaires</strong> (qui se rencontrent à \(90^\circ\)) ont des pentes <strong>opposées et inverses</strong> : leur produit est \(-1\). Dans cette leçon, tu vas tester des paires de droites, écrire l'équation d'une droite parallèle ou perpendiculaire à une droite donnée et passant par un point donné, et utiliser les pentes pour vérifier si des figures géométriques ont des angles droits.`,
    goals: [
      "décider à partir de leurs équations si deux droites sont parallèles, perpendiculaires ou ni l'un ni l'autre;",
      "trouver l'opposé de l'inverse d'une pente;",
      "écrire l'équation d'une droite parallèle à une droite donnée passant par un point donné;",
      "écrire l'équation d'une droite perpendiculaire à une droite donnée passant par un point donné;",
      "utiliser les pentes pour montrer qu'un triangle a un angle droit ou qu'une figure est un rectangle.",
    ],
    curriculum: "C4.2, C4.4 (liens entre les équations et les graphiques; résoudre des problèmes)",
    prior: [
      [String.raw`Quel est l'inverse de \(\tfrac25\)?`, String.raw`\(\tfrac52\).`],
      [String.raw`Quelle est la pente de \(2x+y-7=0\)?`, String.raw`\(-2\).`],
      [String.raw`Trouve \(b\) si \(y=3x+b\) passe par \((1,5)\).`, String.raw`\(b=2\).`],
    ],
    words: [
      ["Parallèles", "ne se rencontrent jamais; même pente", "\\(y=2x+1,\\ y=2x-3\\)"],
      ["Perpendiculaires", "se rencontrent à angle droit; le produit des pentes est −1", "\\(m=2,\\ m=-\\tfrac12\\)"],
      ["Opposé de l'inverse", "renverse la fraction et change le signe", "\\(\\tfrac34\\to-\\tfrac43\\)"],
    ],
  }),

  section("📌 Les tests des pentes", String.raw`
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2, b: 1, color: "blue", label: "y = 2x + 1", lx: 1.5 }, { m: 2, b: -3, color: "blue", label: "y = 2x − 3", lx: 3.5 }, { m: -0.5, b: 1, color: "red", label: "y = −½x + 1", lx: -5 }] }, "Les droites bleues sont parallèles (pente 2). La droite rouge est perpendiculaire aux deux (pente −½; 2 × (−½) = −1).")}
  ${table(["Relation", "Pentes", "Exemple"], [
    ["parallèles", "\\(m_1=m_2\\)", "\\(2\\) et \\(2\\)"],
    ["perpendiculaires", "\\(m_1\\cdot m_2=-1\\) (opposées et inverses)", "\\(2\\) et \\(-\\tfrac12\\); \\(-\\tfrac35\\) et \\(\\tfrac53\\)"],
    ["cas particulier", "horizontale (\\(m=0\\)) ⟂ verticale (pente non définie)", "\\(y=4\\) et \\(x=-1\\)"],
  ])}
  ${keyIdea(String.raw`Opposé de l'inverse : <strong>renverse</strong> la fraction et <strong>change le signe</strong>. \(m=-\tfrac25\Rightarrow m_\perp=\tfrac52\). Vérification : \(-\tfrac25\times\tfrac52=-1\).`)}
  ${watchOut([
    "Mets les deux équations sous la forme y = mx + b (ou utilise −A/B) avant de comparer les pentes.",
    "Perpendiculaire exige À LA FOIS le renversement et le changement de signe : la pente perpendiculaire à 3 est −1/3, pas 1/3 ni −3.",
    "Des droites parallèles doivent avoir des ordonnées à l'origine différentes; des pentes égales et des ordonnées à l'origine égales signifient la même droite.",
  ])}
  <p>Dans l'explorateur, règle \(m_1=2\) et \(m_2=-0.5\) pour voir des droites perpendiculaires; rends-les égales pour des droites parallèles.</p>`),

  widget("linePair", { init: [2, 1, -0.5, -3] }),

  examples([
    ["Tester une paire", String.raw`Les droites \(y=3x-2\) et \(6x-2y+5=0\) sont-elles parallèles, perpendiculaires ou ni l'un ni l'autre?`,
      [String.raw`<b>Règles.</b> Des droites parallèles ont des pentes <b>égales</b> (\(m_1=m_2\)); des droites perpendiculaires ont des pentes dont le produit est \(-1\) (\(m_1m_2=-1\)). Mets les deux droites sous la forme \(y=mx+b\) pour les comparer.`, String.raw`Deuxième droite : \(2y=6x+5\Rightarrow y=3x+2.5\), pente \(3\).`, "Pentes égales, ordonnées à l'origine différentes : parallèles.", String.raw`<b>Pourquoi ce n'est pas la même droite :</b> les ordonnées à l'origine \(-2\) et \(2.5\) sont différentes, donc les droites ne se rencontrent jamais ✓`],
      "parallèles"],
    ["L'opposé de l'inverse", String.raw`Trouve la pente perpendiculaire à \(m=-\tfrac25\) et vérifie.`,
      [String.raw`<b>Règle.</b> La pente perpendiculaire est l'<b>opposé de l'inverse</b> : \(m_\perp=-\dfrac1m\), car alors \(m\cdot m_\perp=-1\).`, String.raw`Renverse : \(-\tfrac52\); change le signe : \(\tfrac52\).`, String.raw`\(-\tfrac25\times\tfrac52=-1\) ✓`],
      String.raw`\(\tfrac52\)`],
    ["Une droite parallèle passant par un point", String.raw`Trouve l'équation de la droite parallèle à \(y=-4x+1\) qui passe par \((2,3)\).`,
      [String.raw`<b>Méthode.</b> Une droite parallèle a la même pente; remplace ensuite le point dans \(y=mx+b\) pour trouver \(b\).`, String.raw`Parallèle : \(m=-4\).`, String.raw`\(3=-4(2)+b\Rightarrow b=11\).`, String.raw`<b>Vérification :</b> \(-4(2)+11=3\), donc \((2,3)\) est sur la droite ✓`],
      String.raw`\(y=-4x+11\)`],
    ["Une droite perpendiculaire passant par un point", String.raw`Trouve l'équation de la droite perpendiculaire à \(2x+3y-6=0\) qui passe par \((4,-1)\).`,
      [String.raw`<b>Méthode.</b> (1) Trouve la pente donnée avec \(m=-\tfrac AB=-\tfrac23\). (2) Prends l'opposé de l'inverse. (3) Remplace le point pour trouver \(b\).`, String.raw`Pente donnée : \(-\tfrac23\). Pente perpendiculaire : \(\tfrac32\).`, String.raw`\(-1=\tfrac32(4)+b=6+b\Rightarrow b=-7\).`, String.raw`Vérification : \(-\tfrac23\times\tfrac32=-1\) ✓`, String.raw`<b>Vérifie le point :</b> \(\tfrac32(4)-7=6-7=-1\) ✓`],
      String.raw`\(y=\tfrac32x-7\)`],
    ["Un triangle rectangle", String.raw`Montre que le triangle de sommets \(A(0,0)\), \(B(2,4)\), \(C(6,2)\) a un angle droit. Où se trouve-t-il?`,
      [String.raw`<b>Méthode.</b> Un angle droit signifie que deux côtés sont perpendiculaires. Trouve la pente de chaque côté avec \(m=\dfrac{y_2-y_1}{x_2-x_1}\) et cherche une paire dont le produit est \(-1\).`, String.raw`\(m_{AB}=\frac42=2\); \(m_{BC}=\frac{2-4}{6-2}=-\tfrac12\); \(m_{AC}=\frac26=\tfrac13\).`, String.raw`\(m_{AB}\cdot m_{BC}=2\times(-\tfrac12)=-1\) : \(AB\perp BC\).`, String.raw`<b>Autres paires :</b> \(2\times\tfrac13=\tfrac23\) et \(-\tfrac12\times\tfrac13=-\tfrac16\), donc le seul angle droit est là où \(AB\) rencontre \(BC\), en \(B\) ✓`],
      "angle droit en B",
      plane({ view: { xmin: -1, xmax: 7, ymin: -1, ymax: 5 }, segs: [{ pts: [[0, 0], [2, 4], [6, 2], [0, 0]], color: "violet" }], points: [{ x: 0, y: 0, label: "A", color: "blue" }, { x: 2, y: 4, label: "B", color: "red" }, { x: 6, y: 2, label: "C", color: "blue" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("opposé de l'inverse", String.raw`Quelle pente est perpendiculaire à \(\tfrac34\)?`, choice([String.raw`\(-\tfrac43\)`, String.raw`\(\tfrac43\)`, String.raw`\(-\tfrac34\)`, String.raw`\(\tfrac34\)`], 0), "Renverse et change le signe.", [String.raw`\(\tfrac34\times(-\tfrac43)=-1\).`], String.raw`\(-\tfrac43\)`),
    q("classer", String.raw`\(y=\tfrac12x+3\) et \(y=-2x-1\) sont…`, choice(["perpendiculaires", "parallèles", "ni l'un ni l'autre", "la même droite"], 0), "Multiplie les pentes.", [String.raw`\(\tfrac12\times(-2)=-1\).`], "perpendiculaires"),
    q("droite parallèle", String.raw`La droite parallèle à \(y=5x-2\) qui passe par \((1,9)\) est \(y=5x+b\). Que vaut \(b\)?`, num(4), "Remplace le point.", [String.raw`\(9=5(1)+b\Rightarrow b=4\).`], String.raw`\(4\)`),
    q("pente perpendiculaire", String.raw`Quelle est la pente d'une droite perpendiculaire à \(y=-5x+2\)? Donne un nombre décimal.`, num(0.2), "L'opposé de l'inverse de −5.", [String.raw`\(-5\to\tfrac15=0.2\).`], String.raw`\(0.2\)`),
    q("droite perpendiculaire", String.raw`Écris l'équation de la droite perpendiculaire à \(y=2x+7\) qui passe par \((4,1)\).`, expr("-0.5x+3"),
      "Pente −½, puis trouve b.", [String.raw`\(1=-\tfrac12(4)+b\Rightarrow b=3\).`], String.raw`\(y=-\tfrac12x+3\)`, { placeholder: "y = …" }),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi des droites parallèles ont-elles des pentes égales?", "Elles montent de la même quantité pour chaque pas vers la droite, donc elles restent à la même distance l'une de l'autre et ne se rencontrent jamais."],
      ["Pourquoi le produit de pentes perpendiculaires est-il −1?", "Faire pivoter de 90° un triangle de pente (course a, montée b) donne un triangle de course b et de montée −a : pente −a/b. Multiplie : (b/a)(−a/b) = −1."],
      ["y = 4 et x = −1 sont-elles perpendiculaires?", "Oui : l'une est horizontale, l'autre verticale. La règle du produit ne s'applique pas parce que la pente verticale n'est pas définie, mais elles se rencontrent à 90°."],
      ["Comment les pentes peuvent-elles prouver qu'une figure est un rectangle?", "Côtés opposés parallèles (pentes égales) et côtés adjacents perpendiculaires (produit −1)."],
      ["Quelle est l'erreur la plus fréquente?", "Utiliser l'inverse sans changer le signe (ou changer le signe sans renverser)."],
    ],
    summary: [
      "Parallèles : pentes égales (ordonnées à l'origine différentes).",
      "Perpendiculaires : pentes opposées et inverses, produit −1; horizontale ⟂ verticale.",
      "Pour écrire une droite parallèle ou perpendiculaire passant par un point : trouve la bonne pente, puis b = y − mx.",
    ],
    next: "la leçon 4.10 fait la révision de tout le chapitre.",
  }),
];
