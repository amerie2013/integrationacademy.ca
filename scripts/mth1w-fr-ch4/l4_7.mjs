// MTH1W-FR 4.7 — Déterminer l'équation d'une droite (format autonome)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, expr } from "./lib.mjs";
import { plane } from "./figs4.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "4.7 Déterminer l'équation d'une droite";
export const ID = lessonId(4, 7);

export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Déterminer l'équation d'une droite",
    overview: String.raw`Pour écrire \(y=mx+b\), il te faut deux choses : la pente \(m\) et l'ordonnée à l'origine \(b\). Dans cette leçon, tu vas les trouver à partir d'un <strong>graphique</strong>, d'une <strong>pente et d'un point</strong>, de <strong>deux points</strong>, d'une <strong>table</strong> et d'une <strong>situation réelle</strong> avec deux données. Le même plan en trois étapes fonctionne à tout coup : trouve \(m\), remplace un point pour trouver \(b\), écris et vérifie l'équation.`,
    goals: [
      "lire m et b sur un graphique et écrire l'équation;",
      "trouver b en remplaçant un point quand m est connu;",
      String.raw`trouver la pente de la droite passant par deux points avec \(m=\dfrac{y_2-y_1}{x_2-x_1}\);`,
      "écrire l'équation à partir d'une table, y compris des tables dont les pas en x sont inégaux;",
      "modéliser une situation à partir de deux données et utiliser l'équation pour prédire.",
    ],
    curriculum: "C4.3 (déterminer l'équation d'une droite), C4.4 (résoudre des problèmes)",
    prior: [
      [String.raw`Résous \(7=-2(3)+b\).`, String.raw`\(b=13\).`],
      [String.raw`Simplifie \(\dfrac{-9}{6}\).`, String.raw`\(-\tfrac32\).`],
      [String.raw`Quelle est la pente de \(y=4-x\)?`, String.raw`\(-1\).`],
    ],
    words: [
      ["Formule de la pente", "\\(m=\\dfrac{y_2-y_1}{x_2-x_1}\\)", "\\((1,2), (3,8)\\Rightarrow m=3\\)"],
      ["Remplacer un point", "remplacer x et y par les coordonnées du point pour trouver b", ""],
      ["Point d'une droite", "un point dont les coordonnées rendent l'équation vraie", ""],
    ],
  }),

  section("📌 Le plan", String.raw`
  ${table(["Étape", "Que faire"], [["1", "Trouve la pente \\(m\\) (montée ÷ course, ou la formule de la pente)."], ["2", "Remplace un point connu \\((x,y)\\) dans \\(y=mx+b\\) et résous pour \\(b\\) (ou lis b sur le graphique)."], ["3", "Écris \\(y=mx+b\\) et vérifie avec l'autre point."]])}
  ${keyIdea(String.raw`\(m=\dfrac{y_2-y_1}{x_2-x_1}\). Soustrais dans le <strong>même ordre</strong> en haut et en bas. Ensuite, \(b=y-mx\) pour n'importe quel point de la droite.`)}
  ${watchOut([
    String.raw`Mélanger l'ordre : \(\frac{y_2-y_1}{x_1-x_2}\) donne le mauvais signe.`,
    "Des parenthèses autour des coordonnées négatives : 4 − (−2) = 6.",
    "Vérifie toujours l'équation avec le deuxième point.",
  ])}
  <p>Dans l'explorateur, déplace les deux points et suis les trois étapes.</p>`),

  widget("twoPointLine", { init: [-3, -1, 3, 3] }),

  examples([
    ["À partir d'un graphique", String.raw`Écris l'équation de la droite illustrée.`,
      [String.raw`<b>Forme.</b> \(y=mx+b\) : lis \(b\) là où la droite coupe l'axe des \(y\), et \(m=\dfrac{\text{montée}}{\text{course}}\) entre deux points du quadrillage situés sur la droite.`, String.raw`Elle coupe l'axe des y en \((0,-2)\) : \(b=-2\).`, String.raw`De \((0,-2)\) à \((3,4)\) : montée \(6\), course \(3\), \(m=2\).`, String.raw`<b>Vérification :</b> \((3,4)\) : \(2(3)-2=4\) ✓`],
      String.raw`\(y=2x-2\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -6, ymax: 8 }, lines: [{ m: 2, b: -2 }], points: [{ x: 0, y: -2, label: "(0, −2)", color: "green" }, { x: 3, y: 4, label: "(3, 4)" }], tri: { x: 0, y: -2, run: 3, rise: 6 } })],
    ["À partir d'une pente et d'un point", String.raw`Trouve l'équation de la droite de pente \(-3\) qui passe par \((2,5)\).`,
      [String.raw`<b>Méthode.</b> Mets la pente connue dans \(y=mx+b\), puis remplace le point \((x,y)=(2,5)\) — il doit rendre l'équation vraie — et résous pour \(b\).`, String.raw`\(5=-3(2)+b\Rightarrow5=-6+b\Rightarrow b=11\).`, String.raw`Vérification : \(-3(2)+11=5\) ✓`],
      String.raw`\(y=-3x+11\)`],
    ["À partir de deux points", String.raw`Trouve l'équation de la droite passant par \((-2,7)\) et \((4,-2)\).`,
      [String.raw`<b>Méthode.</b> (1) pente \(m=\dfrac{y_2-y_1}{x_2-x_1}\); (2) remplace l'un des points dans \(y=mx+b\) pour trouver \(b\); (3) vérifie avec l'autre point.`, String.raw`\(m=\dfrac{-2-7}{4-(-2)}=\dfrac{-9}{6}=-\tfrac32\).`, String.raw`\(7=-\tfrac32(-2)+b=3+b\Rightarrow b=4\).`, String.raw`Vérifie \((4,-2)\) : \(-6+4=-2\) ✓`],
      String.raw`\(y=-\tfrac32x+4\)`],
    ["À partir d'une table aux pas inégaux", String.raw`Trouve l'équation.
    ${table(["x", "2", "5", "9"], [["y", "11", "20", "32"]])}`,
      [String.raw`<b>Méthode.</b> Avec des pas en \(x\) inégaux, calcule \(\dfrac{\Delta y}{\Delta x}\) pour chaque paire; s'ils concordent, la relation est linéaire avec cette pente. Trouve ensuite \(b\) à partir d'un point.`, String.raw`\(\frac{20-11}{5-2}=3\) et \(\frac{32-20}{9-5}=3\) : linéaire, \(m=3\).`, String.raw`\(11=3(2)+b\Rightarrow b=5\).`, String.raw`<b>Vérification :</b> \(3(9)+5=32\) ✓`],
      String.raw`\(y=3x+5\)`],
    ["À partir de deux données", String.raw`Un plombier a demandé \(155\) dollars pour un travail de \(2\) heures et \(260\) dollars pour un travail de \(3.5\) heures. En supposant une relation linéaire, trouve le taux horaire, les frais de déplacement et le coût d'un travail de \(5\) heures.`,
      [String.raw`<b>Modèle.</b> coût \(=\) taux \(\times\) heures \(+\) frais, c'est-à-dire \(C=mh+b\). Les deux travaux sont deux points \((2,155)\) et \((3.5,260)\).`, String.raw`\(m=\dfrac{260-155}{3.5-2}=\dfrac{105}{1.5}=70\) dollars l'heure.`, String.raw`\(155=70(2)+b\Rightarrow b=15\) dollars.`, String.raw`\(C=70h+15\); \(5\) h : \(365\) dollars.`, String.raw`<b>Vérifie avec l'autre travail :</b> \(70(3.5)+15=245+15=260\) ✓`],
      String.raw`\(C=70h+15\); \(365\) dollars`],
  ]),

  practice([
    q("formule de la pente", String.raw`Trouve la pente de la droite passant par \((1,2)\) et \((4,11)\).`, num(3), "Variation de y sur variation de x.", [String.raw`\(\frac{11-2}{4-1}=\frac93=3\).`], String.raw`\(3\)`),
    q("pente et ordonnée à l'origine", String.raw`Écris l'équation de la droite de pente \(5\) et d'ordonnée à l'origine \(-4\).`, expr("5x-4"), "Remplace dans y = mx + b.", [String.raw`\(y=5x-4\).`], String.raw`\(y=5x-4\)`, { placeholder: "y = …" }),
    q("deux points", String.raw`Écris l'équation de la droite passant par \((2,1)\) et \((6,9)\).`, expr("2x-3"),
      "La pente d'abord, puis remplace un point.", [String.raw`\(m=\frac{8}{4}=2\).`, String.raw`\(1=2(2)+b\Rightarrow b=-3\).`], String.raw`\(y=2x-3\)`, { placeholder: "y = …" }),
    q("trouver b", String.raw`Une droite a une pente de \(-2\) et passe par \((-1,6)\). Que vaut \(b\)?`, num(4),
      "Remplace le point.", [String.raw`\(6=-2(-1)+b=2+b\Rightarrow b=4\).`], String.raw`\(4\)`),
    q("modèle", String.raw`Une bougie mesure \(18\) cm après \(2\) h et \(12\) cm après \(5\) h; elle brûle à un rythme constant. Quelle était sa hauteur au départ?`, num(22),
      "Trouve le taux, puis recule jusqu'à t = 0.", [String.raw`\(m=\frac{12-18}{5-2}=-2\) cm/h.`, String.raw`\(18=-2(2)+b\Rightarrow b=22\).`], String.raw`\(22\) cm`),
  ]),

  wrapUp({
    qas: [
      ["Quel point dois-je remplacer pour trouver b?", "L'un ou l'autre — les deux donnent le même b si la pente est juste. Utilise l'autre point pour vérifier."],
      ["Pourquoi dois-je soustraire dans le même ordre?", String.raw`\(\frac{y_2-y_1}{x_2-x_1}\) et \(\frac{y_1-y_2}{x_1-x_2}\) sont égaux, mais les mélanger (\(\frac{y_2-y_1}{x_1-x_2}\)) change le signe.`],
      ["Et si les deux points ont le même x?", "La course est 0, donc la droite est verticale : x = cette valeur (pas de forme y = mx + b)."],
      ["Puis-je laisser la pente sous forme de fraction?", String.raw`Oui — \(-\frac32\) est exacte et souvent meilleure que \(-1.5\) pour tracer (3 vers le bas, 2 vers la droite).`],
      ["Comment savoir qu'une table est linéaire avant de trouver son équation?", "Vérifie que Δy/Δx est le même pour chaque paire de points consécutifs."],
    ],
    summary: [
      "Trouve m (montée/course ou la formule de la pente), puis b = y − mx à l'aide d'un point, puis vérifie.",
      "À partir d'un graphique : lis b sur l'axe des y et compte montée/course entre des points du quadrillage.",
      "À partir de données : deux points déterminent la droite; utilise-la pour prédire.",
    ],
    next: "la leçon 4.8 écrit les droites sous la forme générale Ax + By + C = 0 et utilise les coordonnées à l'origine.",
  }),
];
