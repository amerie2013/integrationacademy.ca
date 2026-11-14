// MTH1W-FR 5.4 — Le théorème de Pythagore (format autonome) : hypoténuse, cathètes, réciproque, distance, diagonales en 3D
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { fig, rightTri, prism } from "../mth1w-ch5/figs5.mjs";
import { plane } from "./figs4fr.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "5.4 Le théorème de Pythagore";
export const ID = lessonId(5, 4);

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Le théorème de Pythagore",
    overview: String.raw`Dans un triangle rectangle, les trois côtés sont liés par une seule équation : \(a^2+b^2=c^2\). Grâce à elle, tu peux trouver un côté manquant à partir des deux autres, vérifier si un coin est d'équerre, trouver la distance entre deux points d'un quadrillage et même la plus longue tige qui entre dans une boîte. Tu verras pourquoi elle fonctionne, tu t'exerceras dans les deux sens (hypoténuse et cathète) et tu utiliseras la réciproque pour vérifier des angles droits.`,
    goals: [
      "reconnaître l'hypoténuse et les cathètes d'un triangle rectangle;",
      "utiliser \\(a^2+b^2=c^2\\) pour trouver l'hypoténuse, et transformer l'équation pour trouver une cathète;",
      "utiliser la réciproque pour déterminer si un triangle est rectangle, acutangle ou obtusangle;",
      "trouver la distance entre deux points d'un plan cartésien;",
      "résoudre des problèmes à plusieurs étapes, y compris les diagonales de rectangles et de boîtes.",
    ],
    curriculum: "E1.5 (résoudre des problèmes à l'aide du théorème de Pythagore)",
    prior: [
      [String.raw`Évalue \(\sqrt{169}\).`, String.raw`\(13\).`],
      [String.raw`Entre quels deux nombres entiers se trouve \(\sqrt{50}\) ?`, String.raw`\(7\) et \(8\) (\(49<50<64\)).`],
      [String.raw`Résous \(x^2=81\), \(x>0\).`, String.raw`\(x=9\).`],
    ],
    words: [
      ["Hypoténuse", "le plus long côté, opposé à l'angle droit", "\\(c\\)"],
      ["Cathètes", "les deux côtés qui forment l'angle droit", "\\(a, b\\)"],
      ["Triplet de Pythagore", "trois nombres entiers tels que \\(a^2+b^2=c^2\\)", "3, 4, 5; 5, 12, 13"],
      ["Réciproque", "l'énoncé inversé : si \\(a^2+b^2=c^2\\), l'angle mesure 90°", ""],
      ["Distance entre deux points", "l'hypoténuse du triangle formé par la course et la montée", "\\(\\sqrt{\\Delta x^2+\\Delta y^2}\\)"],
    ],
  }),

  section("📌 Le théorème", String.raw`
  ${fig({ w: 300, items: rightTri(4, 3, { la: "a (cathète)", lb: "b (cathète)", lc: "c (hypoténuse)" }) })}
  ${keyIdea(String.raw`Dans un triangle rectangle de cathètes \(a\), \(b\) et d'hypoténuse \(c\) : \(\;a^2+b^2=c^2\). L'hypoténuse est toujours le plus long côté et elle est toujours seule d'un côté de l'équation.`)}
  <p><strong>Pourquoi ça fonctionne.</strong> Place quatre copies du triangle dans un carré de côté \(a+b\). Le trou au milieu est un carré de côté \(c\). En réarrangeant les quatre triangles, il reste deux trous, des carrés de côtés \(a\) et \(b\). Il reste le même espace les deux fois, donc \(c^2=a^2+b^2\).</p>
  ${table(["Trouver", "Formule", "À retenir"], [
    ["l'hypoténuse", "\\(c=\\sqrt{a^2+b^2}\\)", "additionne les carrés"],
    ["une cathète", "\\(a=\\sqrt{c^2-b^2}\\)", "soustrais du carré de l'hypoténuse"],
  ])}`),

  widget("pythagoras"),

  section("📌 La réciproque : le coin est-il d'équerre ?", String.raw`
  <p>Soit \(c\) le plus long côté. Compare \(a^2+b^2\) avec \(c^2\) :</p>
  ${table(["Résultat", "Triangle", "Angle opposé à c"], [["\\(a^2+b^2=c^2\\)", "rectangle", "exactement 90°"], ["\\(a^2+b^2>c^2\\)", "acutangle", "moins de 90°"], ["\\(a^2+b^2<c^2\\)", "obtusangle", "plus de 90°"]])}
  <p>Les constructeurs s'en servent pour vérifier un coin : mesure \(3\) pi le long d'un mur, \(4\) pi le long de l'autre, et la diagonale doit mesurer exactement \(5\) pi.</p>`),

  section("📌 La distance dans un plan cartésien", String.raw`
  <p>Le segment qui relie deux points est l'hypoténuse d'un triangle rectangle dont les cathètes sont la course \(\Delta x\) et la montée \(\Delta y\).</p>
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -1, ymax: 10 }, segs: [{ pts: [[-2, 1], [4, 9]], color: "violet" }], tri: { x: -2, y: 1, run: 6, rise: 8 }, points: [{ x: -2, y: 1, label: "(−2, 1)" }, { x: 4, y: 9, label: "(4, 9)" }], step: { x: 1, y: 1 } }, "Course de 6, montée de 8, donc la distance est √(36 + 64) = 10.")}
  ${watchOut([
    "Additionne les carrés seulement pour trouver l'hypoténuse; soustrais pour trouver une cathète.",
    String.raw`\(\sqrt{a^2+b^2}\) n'est <strong>pas</strong> \(a+b\) : \(\sqrt{9+16}=5\), pas \(7\).`,
    "Le théorème fonctionne seulement dans les triangles rectangles.",
    "Vérifie : l'hypoténuse doit être plus longue que chaque cathète.",
  ])}`),

  examples([
    ["Une échelle (trouver une cathète)", String.raw`Une échelle de \(6.5\) m est appuyée contre un mur, son pied étant à \(2.5\) m du mur. À quelle hauteur atteint-elle le mur ?`,
      [String.raw`<b>Théorème de Pythagore.</b> \[a^2+b^2=c^2\] où \(c\) est l'hypoténuse, le côté opposé à l'angle droit.`,
        String.raw`<b>Associer les côtés.</b> Le mur rencontre le sol à angle droit. L'échelle est opposée à cet angle, donc \(c=6.5\). Les cathètes sont \(a=2.5\) et \(b=h\).`,
        String.raw`<b>Substituer :</b> \(2.5^2+h^2=6.5^2\), donc \(6.25+h^2=42.25\).`,
        String.raw`<b>Isoler \(h^2\) :</b> \(h^2=42.25-6.25=36\).`,
        String.raw`<b>Racine carrée</b> (une longueur est positive) : \(h=\sqrt{36}=6\) m.`,
        String.raw`<b>Vérification :</b> \(2.5^2+6^2=6.25+36=42.25=6.5^2\) ✓.`],
      String.raw`\(6\) m`,
      fig({ w: 220, items: rightTri(2.5, 6, { la: "2.5 m", lb: "h", lc: "6.5 m", fill: "amber" }) })],
    ["Un écran de télé (trouver l'hypoténuse)", String.raw`Un écran mesure \(104\) cm de largeur et \(58.5\) cm de hauteur. Les télés sont vendues selon leur diagonale en pouces. Trouve la diagonale en cm et en pouces.`,
      [String.raw`<b>Théorème de Pythagore</b> \(a^2+b^2=c^2\). La diagonale \(d\) est opposée au coin à angle droit, donc \(c=d\), \(a=104\), \(b=58.5\).`,
        String.raw`<b>Substituer :</b> \(d^2=104^2+58.5^2=10\,816+3422.25=14\,238.25\).`,
        String.raw`<b>Racine carrée :</b> \(d=\sqrt{14\,238.25}\approx119.3\) cm.`,
        String.raw`<b>Convertir.</b> \(1\) po \(=2.54\) cm, donc \(119.3\div2.54\approx47.0\) po.`,
        String.raw`<b>Est-ce raisonnable ?</b> La diagonale doit être plus longue que chaque côté (\(119.3>104\)), mais plus courte que les deux côtés ensemble (\(119.3<162.5\)) ✓.`],
      String.raw`environ \(119\) cm, une télé de \(47\) pouces`,
      fig({ w: 280, items: rightTri(10.4, 5.85, { la: "104 cm", lb: "58.5 cm", lc: "d", fill: "blue" }) })],
    ["La réciproque", String.raw`Une menuisière mesure les côtés de deux cadres triangulaires : a) \(9, 12, 15\) et b) \(7, 9, 12\). Quel cadre a un angle droit ?`,
      [String.raw`<b>Règle.</b> Soit \(c\) le plus long côté; compare \(a^2+b^2\) avec \(c^2\) : \[=\ \text{rectangle},\qquad<\ \text{obtusangle},\qquad>\ \text{acutangle}\]`,
        String.raw`<b>a)</b> \(9^2+12^2=81+144=225\) et \(15^2=225\). Égaux, donc le cadre a) a un angle droit.`,
        String.raw`<b>b)</b> \(7^2+9^2=49+81=130\) et \(12^2=144\). \(130<144\) : le plus long côté est trop long pour un angle droit, donc le triangle est obtusangle.`],
      "a) a un angle droit; b) est obtusangle"],
    ["La distance entre deux points", String.raw`Trouve la distance entre \((-2, 1)\) et \((4, 9)\).`,
      [String.raw`<b>Idée.</b> Trace un triangle rectangle : les distances horizontale et verticale sont les cathètes et le segment est l'hypoténuse.`,
        String.raw`<b>Course</b> (cathète horizontale) : \(4-(-2)=6\). <b>Montée</b> (cathète verticale) : \(9-1=8\).`,
        String.raw`<b>Théorème de Pythagore :</b> \(d^2=6^2+8^2=36+64=100\).`,
        String.raw`<b>Racine carrée :</b> \(d=\sqrt{100}=10\).`],
      String.raw`\(10\) unités`,
      fig({ w: 220, items: rightTri(6, 8, { la: "course 6", lb: "montée 8", lc: "d", fill: "violet" }) })],
    ["La plus longue tige dans une boîte", String.raw`Une boîte mesure \(3\) cm sur \(4\) cm sur \(12\) cm. Trouve la longueur de la plus longue tige droite qui entre à l'intérieur (d'un coin au coin opposé).`,
      [String.raw`<b>Plan.</b> Utilise le théorème de Pythagore deux fois : d'abord en travers de la base, puis jusqu'au coin opposé en haut.`,
        String.raw`<b>Triangle 1 (la base).</b> Cathètes \(3\) et \(4\) : diagonale de la base \(=\sqrt{3^2+4^2}=\sqrt{25}=5\) cm.`,
        String.raw`<b>Triangle 2 (debout).</b> La hauteur \(12\) est perpendiculaire à la base, donc la diagonale de la base \(5\) et la hauteur \(12\) sont les cathètes : tige \(=\sqrt{5^2+12^2}=\sqrt{169}=13\) cm.`,
        String.raw`<b>Vérifier avec la formule en 3D</b> \(\sqrt{l^2+w^2+h^2}\) : \(\sqrt{9+16+144}=\sqrt{169}=13\) ✓.`],
      String.raw`\(13\) cm`,
      fig({ w: 260, items: [...prism(4, 3, 12, { ll: "4", lw: "3", lh: "12" }), { seg: [[0, 0], [4 + 3 * 0.45, 12 + 3 * 0.32]], color: "red", width: 2.4 }] })],
  ]),

  practice([
    q("hypoténuse", String.raw`Les cathètes d'un triangle rectangle mesurent \(9\) et \(40\). Trouve l'hypoténuse.`, num(41),
      "Additionne les carrés, puis prends la racine carrée.", [String.raw`\(81+1600=1681\); \(\sqrt{1681}=41\).`], String.raw`\(41\)`),
    q("cathète", String.raw`Un triangle rectangle a une hypoténuse de \(25\) et une cathète de \(7\). Trouve l'autre cathète.`, num(24),
      "Soustrais : c² − a².", [String.raw`\(625-49=576\); \(\sqrt{576}=24\).`], String.raw`\(24\)`),
    q("rampe", String.raw`Une rampe pour fauteuil roulant monte de \(0.4\) m sur une distance horizontale de \(4.8\) m. Quelle est la longueur de la surface de la rampe (au centième de mètre près) ?`, num(4.82, 0.006),
      "La rampe est l'hypoténuse.", [String.raw`\(\sqrt{4.8^2+0.4^2}=\sqrt{23.2}\approx4.817\).`], String.raw`\(\approx4.82\) m`),
    q("réciproque", String.raw`Les longueurs \(20\), \(21\) et \(29\) forment-elles un triangle rectangle ?`, choice(["oui", "non — acutangle", "non — obtusangle"], 0),
      "Compare 20² + 21² avec 29².", [String.raw`\(400+441=841=29^2\).`], "oui"),
    q("diagonale", String.raw`Trouve la longueur d'une diagonale d'un rectangle de \(8\) cm sur \(15\) cm.`, num(17),
      "La diagonale est l'hypoténuse d'un triangle rectangle de cathètes 8 et 15.", [String.raw`\(64+225=289\); \(\sqrt{289}=17\).`], String.raw`\(17\) cm`),
  ]),

  wrapUp({
    qas: [
      ["Comment savoir quel côté est l'hypoténuse ?", "Elle est opposée à l'angle droit et c'est toujours le plus long côté. Dans un problème écrit, c'est habituellement l'objet incliné : l'échelle, la rampe, la diagonale."],
      ["Pourquoi ne puis-je pas simplement additionner les cathètes ?", "Parce que l'élévation au carré n'est pas linéaire. Ce sont les carrés qui s'additionnent, pas les longueurs : des cathètes de 3 et 4 donnent une hypoténuse de 5, pas de 7."],
      ["Et si la réponse n'est pas un nombre entier ?", "Laisse-la sous forme de racine carrée pour une réponse exacte (√50), ou arrondis à un nombre raisonnable de décimales pour une mesure (7.07)."],
      ["Le théorème fonctionne-t-il pour n'importe quel triangle ?", "Seulement pour les triangles rectangles. Pour les autres triangles, a² + b² est plus grand (acutangle) ou plus petit (obtusangle) que c²."],
      ["Où apparaît-il ailleurs dans ce chapitre ?", "Les apothèmes des cônes et des pyramides (5.8), les diagonales dans les figures composées et les distances dans un plan cartésien."],
    ],
    summary: [
      "a² + b² = c², où c est l'hypoténuse (le plus long côté).",
      "Hypoténuse : additionne les carrés. Cathète : soustrais de c².",
      "Réciproque : a² + b² = c² ⇒ angle droit; > acutangle; < obtusangle.",
      "Distance entre deux points : √(course² + montée²).",
    ],
    next: "En 5.5, tu examineras comment la modification des dimensions change le périmètre.",
  }),
];
