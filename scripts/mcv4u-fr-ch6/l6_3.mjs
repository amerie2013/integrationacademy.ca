// MCV4U-FR 6.3 — Multiplication d'un vecteur par un scalaire : norme et direction de kv, vecteurs unitaires,
// vecteurs et points colinéaires, lois de distributivité et d'associativité, combinaisons linéaires, et preuves
// géométriques simples (points milieux, division d'un segment selon un rapport)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard } from "./lib.mjs";
import { vfig, brg } from "../mcv4u-ch6/vecfig.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "6.3 Multiplication d'un vecteur par un scalaire";
export const ID = lessonId(6, 3);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Multiplication d'un vecteur par un scalaire",
    overview: S`Doubler une vitesse double son module et conserve sa direction; l'inverser conserve son module et la fait pointer dans l'autre sens. Multiplier un vecteur \(\vec v\) par un nombre réel \(k\) donne \(k\vec v\) : sa norme est \(|k|\,|\vec v|\), et il pointe dans le même sens que \(\vec v\) lorsque \(k\gt0\) et dans le sens opposé lorsque \(k\lt0\). Les multiples scalaires sont toujours parallèles (colinéaires), ce qui en fait un outil puissant pour démontrer des propriétés de droites et de figures.`,
    goals: [
      "trouver la norme et la direction de kv;",
      "écrire un vecteur unitaire dans la direction d'un vecteur donné;",
      "simplifier des expressions comme 3(2u − v) − 2(u + 4v);",
      "déterminer si des vecteurs ou des points sont colinéaires;",
      "utiliser des vecteurs pour démontrer des résultats géométriques.",
    ],
    curriculum: "C2.1 (effectuer la multiplication par un scalaire sur des vecteurs géométriques); C2.2 (résoudre des problèmes à l'aide des opérations sur les vecteurs)",
    prior: [
      [S`\(|-3|\)?`, S`\(3\).`],
      [S`Développe \(3(2a-b)\).`, S`\(6a-3b\).`],
      [S`Le point milieu d'un segment le divise selon quel rapport?`, S`\(1:1\).`],
    ],
    words: [
      ["Multiple scalaire", "\\(k\\vec v\\)", "longueur \\(|k||\\vec v|\\)"],
      ["Vecteurs colinéaires", "parallèles : l'un est un multiple de l'autre", "\\(\\vec u=k\\vec v\\)"],
      ["Vecteur unitaire", "norme 1", "\\(\\hat v=\\frac{\\vec v}{|\\vec v|}\\)"],
      ["Combinaison linéaire", "\\(s\\vec u+t\\vec v\\)", "scalaires s, t"],
    ],
  }),

  section("📌 L'effet de k sur v", S`
  ${vfig({ view: { xmin: -5, xmax: 7, ymin: -3, ymax: 5.2 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [2, 1], vl: "v", off: -16 }, { from: [0, 2.2], to: [5, 4.7], color: "red", label: "2.5v" }, { from: [0, -0.6], to: [-4, -2.6], color: "blue", label: "−2v", off: -16 }], segs: [{ pts: [[-5, -2.5], [7, 3.5]], dash: true, color: "gray" }] }, "2.5v est plus long que v et parallèle à v; −2v est deux fois plus long et pointe dans le sens opposé")}
  ${table(["k", "norme de kv", "direction de kv"], [
    ["\\(k\\gt1\\)", "étiré", "même sens que \\(\\vec v\\)"],
    ["\\(0\\lt k\\lt1\\)", "rétréci", "même sens que \\(\\vec v\\)"],
    ["\\(k=0\\)", "0", "le vecteur nul"],
    ["\\(k\\lt0\\)", "\\(|k||\\vec v|\\)", "sens opposé à \\(\\vec v\\)"],
  ])}
  ${keyIdea(S`\(|k\vec v|=|k|\,|\vec v|\). Deux vecteurs non nuls sont colinéaires exactement lorsque l'un est un multiple scalaire de l'autre. Les scalaires obéissent aux règles habituelles de l'algèbre : \(k(\vec u+\vec v)=k\vec u+k\vec v\), \((a+b)\vec v=a\vec v+b\vec v\), \(a(b\vec v)=(ab)\vec v\).`)}`),

  section("📌 Explore", S`<p>Fais glisser \(k\) et observe \(k\vec u\) s'étirer, rétrécir et changer de sens — toujours le long de la même droite pointillée. Passe ensuite à \(s\vec u+t\vec v\) : en choisissant \(s\) et \(t\), tu peux faire pointer le vecteur rouge n'importe où dans le plan.</p>`),

  widget("scalarLab", { init: { k: 2, s: 1, t: 1 } }),

  section("📌 Utiliser les multiples scalaires", S`
  <p>Pour montrer que trois points \(A\), \(B\), \(C\) sont sur une même droite, montre que \(\overrightarrow{AB}\) est un multiple de \(\overrightarrow{BC}\) (ou de \(\overrightarrow{AC}\)). Pour trouver un vecteur unitaire, divise par la norme. Dans les preuves géométriques, exprime chaque vecteur en fonction de deux vecteurs « de base » non colinéaires, simplifie et compare.</p>
  ${watchOut([
    "Un scalaire négatif inverse le sens; la norme utilise |k|.",
    "Des vecteurs colinéaires peuvent pointer dans des sens opposés.",
    "Diviser par la norme donne une longueur de 1 — seulement pour un vecteur non nul.",
    "Des vecteurs colinéaires qui ont un point commun donnent des points colinéaires.",
    "Regroupe les termes semblables : seuls les multiples d'un même vecteur se combinent.",
  ])}`),

  examples([
    ["Décrire −2u", S`\(\vec u\) a une norme de 3 et un relèvement vrai de \(050^\circ\). Décris \(-2\vec u\).`,
      [S`\(|-2\vec u|=2\times3=6\).`, S`Le scalaire négatif inverse le sens : \(50^\circ+180^\circ=230^\circ\).`],
      S`norme 6, relèvement \(230^\circ\)`,
      vfig({ view: { xmin: -5.5, xmax: 3.5, ymin: -4.5, ymax: 2.8 }, north: [0, 0, 2.6], arrows: [{ from: [0, 0], to: brg(3, 50), vl: "u", label: "3" }, { from: [0, 0], to: brg(6, 230), color: "red", vl: "−2u", label: "6", off: -16 }], arcs: [{ at: [0, 0], r: 1, a: 40, b: 90, label: "50°" }] })],
    ["Vecteurs unitaires", S`\(|\vec v|=8\). Écris le vecteur unitaire dans la direction de \(\vec v\) et le vecteur unitaire opposé à \(\vec v\).`,
      [S`Divise par la norme : \(\frac18\vec v\) a une longueur de \(\frac18\times8=1\).`, S`Le vecteur unitaire opposé est \(-\frac18\vec v\).`],
      S`\(\frac18\vec v\) et \(-\frac18\vec v\)`],
    ["Simplifier", S`Simplifie \(3(2\vec u-\vec v)-2(\vec u+4\vec v)\).`,
      [S`Développe : \(6\vec u-3\vec v-2\vec u-8\vec v\).`, S`Regroupe : \((6-2)\vec u+(-3-8)\vec v\).`],
      S`\(4\vec u-11\vec v\)`],
    ["Points colinéaires", S`\(\overrightarrow{AB}=2\vec a-\vec b\) et \(\overrightarrow{BC}=6\vec a-3\vec b\). Montre que \(A\), \(B\), \(C\) sont colinéaires et trouve \(AB:BC\).`,
      [S`\(\overrightarrow{BC}=3(2\vec a-\vec b)=3\overrightarrow{AB}\), donc les deux vecteurs sont parallèles.`, S`Ils ont le point \(B\) en commun, donc les points sont sur une même droite, avec \(BC=3AB\).`],
      S`colinéaires, \(AB:BC=1:3\)`,
      vfig({ view: { xmin: -0.5, xmax: 9, ymin: -0.8, ymax: 3.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [2, 0.75], vl: "AB" }, { from: [2, 0.75], to: [8, 3], color: "blue", label: "BC = 3AB", off: -16 }], points: [{ x: 0, y: 0, label: "A", dx: -6, dy: 18 }, { x: 2, y: 0.75, label: "B", dx: 2, dy: 20 }, { x: 8, y: 3, label: "C", dx: 8, dy: 4 }] })],
    ["Le théorème des points milieux", S`Dans \(\triangle ABC\), \(M\) et \(N\) sont les points milieux de \(AB\) et de \(AC\). Démontre que \(MN\parallel BC\) et que \(MN=\frac12BC\).`,
      [S`Pose \(\overrightarrow{AB}=\vec b\), \(\overrightarrow{AC}=\vec c\). Alors \(\overrightarrow{AM}=\frac12\vec b\), \(\overrightarrow{AN}=\frac12\vec c\).`, S`\(\overrightarrow{MN}=\overrightarrow{AN}-\overrightarrow{AM}=\frac12(\vec c-\vec b)\), et \(\overrightarrow{BC}=\vec c-\vec b\).`, S`Donc \(\overrightarrow{MN}=\frac12\overrightarrow{BC}\) : parallèle et deux fois plus court.`],
      S`\(\overrightarrow{MN}=\frac12\overrightarrow{BC}\)`,
      vfig({ view: { xmin: -0.5, xmax: 8.5, ymin: -0.8, ymax: 5.2 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [8, 0], [3, 4.8], [0, 0]], color: "gray" }], arrows: [{ from: [1.5, 2.4], to: [5.5, 2.4], color: "red", label: "MN", off: 14 }, { from: [0, 0], to: [8, 0], color: "blue", label: "BC", off: -14 }], points: [{ x: 3, y: 4.8, label: "A", dx: -4, dy: -8 }, { x: 0, y: 0, label: "B", dx: -14, dy: 14 }, { x: 8, y: 0, label: "C", dx: 6, dy: 14 }, { x: 1.5, y: 2.4, label: "M", dx: -18, dy: 0 }, { x: 5.5, y: 2.4, label: "N", dx: 8, dy: 0 }] })],
  ]),

  practice([
    q("norme", S`\(|\vec u|=2.5\). Trouve \(|-4\vec u|\).`, num(10),
      "|k| fois |u|.", [S`\(4\times2.5\).`], S`\(10\)`),
    q("colinéaires", S`Quelle paire de vecteurs est toujours colinéaire?`, choice([S`\(2\vec u\) et \(-3\vec u\)`, S`\(\vec u\) et \(\vec u+\vec v\)`, S`\(\vec u+\vec v\) et \(\vec u-\vec v\)`, S`\(\vec u\) et \(\vec v\)`], 0),
      "Les deux sont des multiples de u.", ["Cherche des multiples d'un même vecteur."], S`\(2\vec u\) et \(-3\vec u\)`),
    q("unitaire", S`\(|\vec u|=0.2\). Pour quelle valeur positive de \(k\) le vecteur \(k\vec u\) est-il unitaire?`, num(5),
      "k · 0.2 = 1.", [S`\(k=\frac1{0.2}\).`], S`\(5\)`),
    q("résoudre", S`Trouve \(x\) si \(4(\vec u-2\vec v)+x\vec v=4\vec u\).`, num(8),
      "Les termes en v doivent s'annuler.", [S`\(-8+x=0\).`], S`\(8\)`),
    q("direction", S`\(\frac{\vec v}{|\vec v|}\) est :`, choice([S`un vecteur unitaire dans la direction de \(\vec v\)`, "la norme de v", "le vecteur nul", S`un vecteur opposé à \(\vec v\)`], 0),
      "Diviser par la longueur donne une longueur de 1.", ["Même direction, longueur 1."], "un vecteur unitaire dans la direction de v"),
  ]),

  ...hard([
    ["Diviser un segment", S`\(P\) est sur le segment \(AB\), avec \(AP:PB=2:1\). Montre que \(\overrightarrow{OP}=\frac13\overrightarrow{OA}+\frac23\overrightarrow{OB}\) pour tout point \(O\).`,
      [S`\(\overrightarrow{AP}=\frac23\overrightarrow{AB}=\frac23(\overrightarrow{OB}-\overrightarrow{OA})\).`, S`\(\overrightarrow{OP}=\overrightarrow{OA}+\overrightarrow{AP}=\overrightarrow{OA}+\frac23\overrightarrow{OB}-\frac23\overrightarrow{OA}\).`],
      S`\(\overrightarrow{OP}=\frac13\overrightarrow{OA}+\frac23\overrightarrow{OB}\) (la somme des coefficients est 1)`,
      vfig({ view: { xmin: -0.6, xmax: 8.5, ymin: -0.8, ymax: 4.8 }, grid: false, axes: false, segs: [{ pts: [[1, 4], [7.5, 1.5]], color: "gray" }], arrows: [{ from: [0, 0], to: [1, 4], vl: "a" }, { from: [0, 0], to: [7.5, 1.5], vl: "b", color: "blue", off: -16 }, { from: [0, 0], to: [1 + (2 / 3) * 6.5, 4 - (2 / 3) * 2.5], color: "red", label: "OP" }], points: [{ x: 0, y: 0, label: "O", dx: -14, dy: 14 }, { x: 1, y: 4, label: "A", dx: -6, dy: -8 }, { x: 7.5, y: 1.5, label: "B", dx: 8, dy: 4 }, { x: 1 + (2 / 3) * 6.5, y: 4 - (2 / 3) * 2.5, label: "P", dx: 4, dy: -10 }] })],
    ["Les diagonales se coupent en leur milieu", S`Utilise des vecteurs pour démontrer que les diagonales d'un parallélogramme se coupent en leur milieu.`,
      [S`Pose \(\overrightarrow{AB}=\vec u\), \(\overrightarrow{AD}=\vec v\), donc \(\overrightarrow{AC}=\vec u+\vec v\).`, S`Le point milieu \(M\) de \(AC\) vérifie \(\overrightarrow{AM}=\frac12(\vec u+\vec v)\).`, S`Le point milieu \(N\) de \(BD\) vérifie \(\overrightarrow{AN}=\overrightarrow{AB}+\frac12\overrightarrow{BD}=\vec u+\frac12(\vec v-\vec u)=\frac12(\vec u+\vec v)\).`],
      S`\(\overrightarrow{AM}=\overrightarrow{AN}\), donc \(M=N\) : les diagonales se rencontrent en leur point milieu`,
      vfig({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 3.8 }, grid: false, axes: false, segs: [{ pts: [[0, 0], [4.5, 0], [6.3, 3], [1.8, 3], [0, 0]], color: "gray" }, { pts: [[0, 0], [6.3, 3]], color: "red", dash: true }, { pts: [[4.5, 0], [1.8, 3]], color: "blue", dash: true }], arrows: [{ from: [0, 0], to: [4.5, 0], vl: "u", off: -16 }, { from: [0, 0], to: [1.8, 3], vl: "v", color: "blue" }], points: [{ x: 3.15, y: 1.5, label: "M = N", dx: 8, dy: -6, color: "red" }, { x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 4.5, y: 0, label: "B", dx: 6, dy: 16 }, { x: 6.3, y: 3, label: "C", dx: 8, dy: -4 }, { x: 1.8, y: 3, label: "D", dx: -16, dy: -4 }] })],
  ], [
    q("difficile", S`\(P\) divise \(AB\) de sorte que \(AP:PB=3:1\) et \(\overrightarrow{OP}=s\overrightarrow{OA}+t\overrightarrow{OB}\). Trouve \(t\).`, num(0.75, 0.001),
      "P se trouve aux trois quarts du chemin à partir de A.", [S`\(\overrightarrow{OP}=\frac14\overrightarrow{OA}+\frac34\overrightarrow{OB}\).`], S`\(0.75\)`),
    q("difficile", S`\(|\vec u|=4\), \(|\vec v|=3\) et \(\vec u\perp\vec v\). Trouve \(|2\vec u-3\vec v|\) (au millième près).`, num(12.042, 0.002),
      "2u et −3v sont aussi perpendiculaires.", [S`\(\sqrt{8^2+9^2}=\sqrt{145}\).`], S`\(12.042\)`),
    q("difficile", S`\(\vec u\) et \(\vec v\) ne sont pas colinéaires et \((k-2)\vec u+(k+t)\vec v=\vec 0\). Trouve \(t\).`, num(-2),
      "Les deux coefficients doivent être nuls.", [S`\(k=2\) et \(2+t=0\).`], S`\(-2\)`),
  ]),

  wrapUp({
    qas: [
      ["Quel est l'effet d'une multiplication par k?", "La longueur est multipliée par |k|; le sens est conservé si k > 0 et inversé si k < 0."],
      ["Comment obtenir un vecteur unitaire?", "Divise le vecteur par sa norme : v/|v| a une longueur de 1 et la même direction."],
      ["Comment savoir si des vecteurs sont colinéaires?", "L'un est un multiple scalaire de l'autre."],
      ["Comment démontrer que des points sont colinéaires?", "Montre que deux vecteurs qui les relient sont multiples l'un de l'autre et ont un point commun."],
      ["Pourquoi les vecteurs sont-ils utiles dans les preuves géométriques?", "Exprimer tout en fonction de deux vecteurs non colinéaires transforme un énoncé géométrique en algèbre que tu peux vérifier."],
    ],
    summary: [
      "|kv| = |k||v|; k < 0 inverse le sens.",
      "Vecteur unitaire : v/|v|.",
      "Colinéaires ⇔ multiples scalaires.",
      "Les lois de distributivité permettent de simplifier comme en algèbre.",
    ],
    next: "La leçon 6.4 applique l'addition de vecteurs aux forces et à la navigation.",
  }),
];
