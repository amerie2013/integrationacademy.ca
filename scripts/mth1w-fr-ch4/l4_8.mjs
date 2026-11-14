// MTH1W-FR 4.8 — Forme générale et forme fonctionnelle (format autonome)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "./figs4.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "4.8 Forme générale et forme fonctionnelle";
export const ID = lessonId(4, 8);

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Forme générale et forme fonctionnelle",
    overview: String.raw`Une même droite peut s'écrire sous différentes formes. La <strong>forme fonctionnelle</strong> \(y=mx+b\) montre la pente et l'ordonnée à l'origine d'un coup d'œil. La <strong>forme générale</strong> \(Ax+By+C=0\) (avec des coefficients entiers et \(A\ge0\)) apparaît naturellement dans des situations comme les budgets et c'est la forme la plus pratique pour trouver <strong>les deux coordonnées à l'origine</strong>. Dans cette leçon, tu vas passer d'une forme à l'autre, tracer une droite à partir de ses coordonnées à l'origine et décider quelle forme convient à un problème.`,
    goals: [
      "écrire une droite sous la forme générale \\(Ax+By+C=0\\) avec des entiers et \\(A\\ge0\\);",
      "réarranger la forme générale en forme fonctionnelle et lire m et b;",
      "trouver l'abscisse et l'ordonnée à l'origine et tracer une droite à partir de celles-ci;",
      "utiliser \\(m=-\\frac AB\\) et \\(b=-\\frac CB\\) comme raccourcis et expliquer pourquoi ils fonctionnent;",
      "modéliser une situation par la forme générale et interpréter ses coordonnées à l'origine.",
    ],
    curriculum: "C4.2, C4.3 (formes des relations linéaires)",
    prior: [
      [String.raw`Résous \(3x-4y=12\) pour \(y\).`, String.raw`\(y=\tfrac34x-3\).`],
      [String.raw`Multiplie \(\tfrac23x-4=y\) par \(3\).`, String.raw`\(2x-12=3y\).`],
      [String.raw`Où une droite coupe-t-elle l'axe des x?`, String.raw`Là où \(y=0\).`],
    ],
    words: [
      ["Forme fonctionnelle", "y = mx + b", "\\(y=-2x+5\\)"],
      ["Forme générale", "Ax + By + C = 0 avec A, B, C entiers et A ≥ 0", "\\(2x+y-5=0\\)"],
      ["Abscisse à l'origine", "là où la droite coupe l'axe des x (y = 0)", "\\((2.5,0)\\)"],
      ["Ordonnée à l'origine", "là où la droite coupe l'axe des y (x = 0)", "\\((0,5)\\)"],
    ],
  }),

  section("📌 Passer d'une forme à l'autre", String.raw`
  ${table(["Sens", "Étapes", "Exemple"], [
    ["fonctionnelle → générale", "amène tous les termes d'un même côté; élimine les fractions; rends A positif", "\\(y=\\tfrac23x-4\\Rightarrow3y=2x-12\\Rightarrow2x-3y-12=0\\)"],
    ["générale → fonctionnelle", "isole y : déplace le terme en x et la constante, divise par B", "\\(4x+2y-10=0\\Rightarrow2y=-4x+10\\Rightarrow y=-2x+5\\)"],
  ])}
  ${keyIdea(String.raw`À partir de \(Ax+By+C=0\) : \(y=-\tfrac ABx-\tfrac CB\), donc \(m=-\dfrac AB\) et \(b=-\dfrac CB\).`)}
  ${watchOut([
    "Quand tu divises par B, divise chaque terme et garde les signes.",
    "La forme générale exige des entiers : multiplie par le PPCD pour éliminer les fractions.",
    "Rends A positif en multipliant toute l'équation par −1 au besoin.",
  ])}`),

  section("📌 Tracer à l'aide des coordonnées à l'origine", String.raw`
  ${plane({ view: { xmin: -10, xmax: 4, ymin: -2, ymax: 8 }, lines: [{ m: 0.75, b: 6, label: "3x − 4y + 24 = 0", lx: -9 }], points: [{ x: -8, y: 0, label: "(−8, 0)", color: "green" }, { x: 0, y: 6, label: "(0, 6)", color: "green" }] }, "Pose y = 0 pour l'abscisse à l'origine et x = 0 pour l'ordonnée à l'origine, puis relie-les.")}
  <p>Pour \(3x-4y+24=0\) : \(y=0\Rightarrow3x=-24\Rightarrow x=-8\); \(x=0\Rightarrow-4y=-24\Rightarrow y=6\). Deux points suffisent pour tracer la droite. Dans l'explorateur, chaque droite est affichée sous les deux formes.</p>`),

  widget("twoPointLine", { init: [-4, 0, 0, 3] }),

  examples([
    ["De la forme fonctionnelle à la forme générale", String.raw`Écris \(y=\tfrac23x-4\) sous la forme générale.`,
      [String.raw`<b>Forme générale.</b> \[Ax+By+C=0\] avec \(A,B,C\) entiers et \(A>0\). Élimine d'abord la fraction (multiplie chaque terme par \(3\)), puis amène tous les termes d'un même côté.`, String.raw`Multiplie par \(3\) : \(3y=2x-12\).`, String.raw`Amène tous les termes à droite : \(0=2x-3y-12\).`, String.raw`<b>Vérifie un point :</b> \((3,-2)\) est sur \(y=\tfrac23x-4\); sous la forme générale, \(2(3)-3(-2)-12=6+6-12=0\) ✓`],
      String.raw`\(2x-3y-12=0\)`],
    ["De la forme générale à la forme fonctionnelle", String.raw`Écris \(4x+2y-10=0\) sous la forme fonctionnelle; donne m et b.`,
      [String.raw`<b>But.</b> Isole \(y\) : déplace le terme en \(x\) et la constante de l'autre côté, puis divise chaque terme par le coefficient de \(y\).`, String.raw`\(2y=-4x+10\).`, String.raw`\(y=-2x+5\).`, String.raw`<b>Vérifie un point :</b> \((1,3)\) : \(4(1)+2(3)-10=0\) ✓ et \(-2(1)+5=3\) ✓`],
      String.raw`\(y=-2x+5\) : \(m=-2\), \(b=5\)`],
    ["Coordonnées à l'origine", String.raw`Trouve les coordonnées à l'origine de \(5x-2y+20=0\) et trace la droite.`,
      [String.raw`<b>Définitions.</b> L'abscisse à l'origine est l'endroit où la droite rencontre l'axe des \(x\), donc \(y=0\) à cet endroit; l'ordonnée à l'origine a \(x=0\). Deux points suffisent pour tracer une droite.`, String.raw`\(y=0\) : \(5x+20=0\Rightarrow x=-4\).`, String.raw`\(x=0\) : \(-2y+20=0\Rightarrow y=10\).`],
      String.raw`\((-4,0)\) et \((0,10)\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -2, ymax: 12 }, lines: [{ m: 2.5, b: 10, label: "5x − 2y + 20 = 0", lx: -5.8 }], points: [{ x: -4, y: 0, label: "(−4, 0)", color: "green" }, { x: 0, y: 10, label: "(0, 10)", color: "green" }], step: { x: 1, y: 2 } })],
    ["Un budget sous la forme générale", String.raw`Une école vend des billets pour adultes à \(15\) dollars et des billets pour élèves à \(10\) dollars, et doit amasser \(600\) dollars. Écris une équation, trouve les coordonnées à l'origine et explique-les.`,
      [String.raw`<b>Modèle.</b> argent amassé \(=15\times\)(billets pour adultes) \(+10\times\)(billets pour élèves), et il doit être égal à \(600\). Diviser chaque terme par \(5\) donne des coefficients plus simples.`, String.raw`\(15a+10s=600\), c'est-à-dire \(15a+10s-600=0\) (ou \(3a+2s-120=0\)).`, String.raw`\(s=0\) : \(a=40\); \(a=0\) : \(s=60\).`, "40 billets pour adultes seulement, ou 60 billets pour élèves seulement, rapportent exactement 600 dollars; les autres combinaisons se trouvent sur la droite entre les deux.", String.raw`<b>Vérifie un point mixte :</b> \(20\) adultes et \(30\) élèves : \(3(20)+2(30)-120=0\) ✓ (\(300+300=600\) dollars).`],
      String.raw`\(3a+2s-120=0\); coordonnées à l'origine \(40\) et \(60\)`],
    ["Les raccourcis", String.raw`Trouve la pente et l'ordonnée à l'origine de \(5x-2y+8=0\) sans réarranger, puis vérifie en réarrangeant.`,
      [String.raw`<b>D'où viennent les raccourcis.</b> À partir de \(Ax+By+C=0\) : \(By=-Ax-C\), donc \(y=-\tfrac AB x-\tfrac CB\). Ainsi, \(m=-\tfrac AB\) et \(b=-\tfrac CB\). Ici \(A=5,\ B=-2,\ C=8\).`, String.raw`\(m=-\frac AB=-\frac{5}{-2}=\frac52\); \(b=-\frac CB=-\frac{8}{-2}=4\).`, String.raw`Vérification : \(-2y=-5x-8\Rightarrow y=\tfrac52x+4\) ✓`],
      String.raw`\(m=\tfrac52\), \(b=4\)`],
  ]),

  practice([
    q("pente", String.raw`Quelle est la pente de \(6x+3y-9=0\)?`, num(-2), "Isole y, ou utilise −A/B.", [String.raw`\(3y=-6x+9\Rightarrow y=-2x+3\).`], String.raw`\(-2\)`),
    q("abscisse à l'origine", String.raw`Quelle est l'abscisse à l'origine de \(2x-5y-10=0\)?`, num(5), "Pose y = 0.", [String.raw`\(2x-10=0\Rightarrow x=5\).`], String.raw`\(5\)`),
    q("ordonnée à l'origine", String.raw`Quelle est l'ordonnée à l'origine de \(2x-5y-10=0\)?`, num(-2), "Pose x = 0.", [String.raw`\(-5y-10=0\Rightarrow y=-2\).`], String.raw`\(-2\)`),
    q("vers la forme générale", String.raw`Laquelle est \(y=-\tfrac34x+2\) sous la forme générale?`, choice([String.raw`\(3x+4y-8=0\)`, String.raw`\(3x-4y+8=0\)`, String.raw`\(-3x+4y-8=0\)`, String.raw`\(3x+4y+8=0\)`], 0),
      "Multiplie par 4, puis amène les termes à gauche.", [String.raw`\(4y=-3x+8\Rightarrow3x+4y-8=0\).`], String.raw`\(3x+4y-8=0\)`),
    q("situation", String.raw`Les stylos coûtent \(4\) dollars et les reliures \(6\) dollars; \(4x+6y=72\) décrit une dépense d'exactement \(72\) dollars. Combien de reliures peut-on acheter sans stylos?`, num(12),
      "C'est la coordonnée à l'origine sur l'axe des reliures (x = 0).", [String.raw`\(6y=72\Rightarrow y=12\).`], String.raw`\(12\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi avoir deux formes?", "La forme fonctionnelle montre m et b immédiatement; la forme générale utilise des entiers (pas de fractions) et rend les coordonnées à l'origine faciles à trouver. Les situations où deux quantités partagent un total (budgets, mélanges) donnent souvent la forme générale."],
      ["Pourquoi A doit-il être positif dans la forme générale?", "C'est une convention, pour que chaque droite ait une seule façon standard de s'écrire; multiplier par −1 ne change pas la droite."],
      ["Comment trouver rapidement les coordonnées à l'origine?", "Cache le terme en y et résous pour x (abscisse à l'origine); cache le terme en x et résous pour y (ordonnée à l'origine)."],
      ["Toute droite peut-elle s'écrire sous la forme fonctionnelle?", String.raw`Toutes sauf les droites verticales. \(x=3\) s'écrit \(x-3=0\) sous la forme générale (B = 0), mais n'a pas de forme fonctionnelle.`],
      ["Quand les coordonnées à l'origine ont-elles du sens dans une histoire?", "Quand zéro d'une quantité est possible : zéro billet pour adultes, zéro stylo. Elles montrent les cas extrêmes de la situation."],
    ],
    summary: [
      "Forme générale Ax + By + C = 0 (entiers, A ≥ 0); forme fonctionnelle y = mx + b.",
      "On passe de l'une à l'autre en réarrangeant; m = −A/B et b = −C/B.",
      "Coordonnées à l'origine : pose y = 0 pour l'abscisse à l'origine, x = 0 pour l'ordonnée à l'origine.",
    ],
    next: "la leçon 4.9 utilise les pentes pour reconnaître des droites parallèles et perpendiculaires.",
  }),
];
