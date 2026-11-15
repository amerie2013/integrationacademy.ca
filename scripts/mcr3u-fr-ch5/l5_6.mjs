// MCR3U-FR 5.6 — La trigonométrie en trois dimensions : décomposer une situation 3-D en un triangle horizontal et un
// triangle vertical, hauteurs au-delà d'obstacles, diagonales de prismes, angles entre droites et plans.
// Miroir de ../mcr3u-ch5/l5_6.mjs (mêmes nombres, mêmes figures).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "5.6 La trigonométrie en trois dimensions";
export const ID = lessonId(5, 6);
const S = String.raw;
const r = (d) => (d * Math.PI) / 180, dg = (x) => (x * 180) / Math.PI;
const sin = (d) => Math.sin(r(d)), cos = (d) => Math.cos(r(d)), tan = (d) => Math.tan(r(d));
const f = (v, k = 2) => (Math.round(v * 10 ** k) / 10 ** k).toFixed(k);
// projection oblique : (x, y, z) -> 2-D, y « entre dans la page » vers le haut à droite
const P = (x, y, z) => [x + 0.5 * y, z + 0.5 * y];
const box = (L, W, H, extra = [], pts = []) => {
  const v = [[0, 0, 0], [L, 0, 0], [L, W, 0], [0, W, 0], [0, 0, H], [L, 0, H], [L, W, H], [0, W, H]].map((p) => P(...p));
  const E = [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]];
  return plane({ bare: true, view: { xmin: -1, xmax: L + 0.5 * W + 1, ymin: -1, ymax: H + 0.5 * W + 1 }, segs: [...E.map(([a, b]) => ({ pts: [v[a], v[b]], color: "gray" })), ...extra.map((e) => ({ pts: e.pts.map((p) => P(...p)), color: e.color }))], points: pts.map((p) => ({ x: P(...p.at)[0], y: P(...p.at)[1], label: p.label })), step: { x: 2, y: 2 } });
};
// Exemple 1 : tour de l'autre côté d'une rivière (AAC au sol, puis tangente)
const e1AC = (90 * sin(64)) / sin(180 - 48 - 64), e1h = e1AC * tan(31);
// Exemple 2 : diagonale d'un prisme
const e2base = Math.hypot(8, 6), e2d = Math.hypot(e2base, 5), e2ang = dg(Math.atan(5 / e2base));
// Exemple 3 : deux observateurs, mât au nord / à l'est
const e3h = 40 * tan(35), e3dB = e3h / tan(28), e3AB = Math.hypot(40, e3dB);
// Exemple 4 : montgolfière, loi des cosinus au sol
const e4g1 = 300 / tan(40), e4g2 = 300 / tan(25), e4d = Math.sqrt(e4g1 ** 2 + e4g2 ** 2 - 2 * e4g1 * e4g2 * cos(70));
// Exemple 5 : angle d'une rampe
const e5 = dg(Math.atan(3 / 4));
// Défi 1 : pyramide
const hpHalfDiag = (10 * Math.SQRT2) / 2, hpSlant = Math.hypot(hpHalfDiag, 12), hpAng = dg(Math.atan(12 / hpHalfDiag));
// Défi 2 : falaise, deux bateaux
const hBC = (60 * tan(30)) / tan(40), hAB = Math.sqrt(3600 + hBC ** 2 - 120 * hBC * cos(80));
const hcA = 80 / tan(22), hcB = 80 / tan(15), hcD = Math.sqrt(hcA ** 2 + hcB ** 2 - 2 * hcA * hcB * cos(54));

export const blocks = () => [
  intro({
    icon: "🏗️",
    title: "La trigonométrie en trois dimensions",
    overview: S`Les problèmes réels sont rarement plats : une arpenteuse mesure des angles au sol et un angle d'élévation jusqu'au sommet d'une tour; un ingénieur a besoin de la diagonale d'un prisme. La stratégie est toujours la même — trouve les <strong>triangles situés dans un même plan</strong>, résous celui qui contient assez de données, puis transmets un côté commun au triangle suivant. Dans cette leçon, tu vas combiner les rapports de base, la loi des sinus et la loi des cosinus dans des situations à trois dimensions.`,
    goals: [
      "esquisser une situation 3-D et repérer les triangles horizontaux et verticaux;",
      "décider quel triangle résoudre en premier et quel côté relie deux triangles;",
      "trouver la hauteur d'objets qu'on ne peut pas atteindre;",
      "trouver des diagonales et des angles dans des prismes et des pyramides;",
      "résoudre des problèmes en plusieurs étapes à l'aide des lois des sinus et des cosinus.",
    ],
    curriculum: "D1.7 (formuler et résoudre des problèmes comportant des triangles rectangles et des triangles quelconques dans des situations à trois dimensions à l'aide des rapports trigonométriques de base, de la loi des cosinus et de la loi des sinus)",
    prior: [
      [S`Un rectangle de 3 sur 4 : quelle est la longueur de sa diagonale?`, S`\(5\).`],
      [S`À 50 m de distance, l'angle d'élévation d'un sommet est de 30°. Quelle est sa hauteur?`, S`\(50\tan30^\circ\approx28.87\) m.`],
      ["Quelle loi permet de résoudre le cas CAC?", "La loi des cosinus."],
    ],
    words: [
      ["Triangle horizontal", "un triangle situé au sol (ou sur un plancher)", ""],
      ["Triangle vertical", "un triangle dressé à la verticale, habituellement avec un angle droit au sol", ""],
      ["Côté de liaison", "un côté commun à deux triangles; on le trouve dans l'un et on l'utilise dans l'autre", ""],
      ["Diagonale de l'espace", "un segment qui joint deux sommets opposés d'un prisme", "\\(\\sqrt{l^2+w^2+h^2}\\)"],
    ],
  }),

  section("📌 Un plan pour tout problème 3-D", S`
  ${table(["Étape", "Que faire"], [["1", "Fais un croquis en 3-D; marque les angles droits au sol"], ["2", "Dresse la liste des triangles; colorie différemment les triangles horizontaux et verticaux"], ["3", "Trouve un triangle qui contient assez de données (3 renseignements, dont au moins un côté)"], ["4", "Résous-le pour trouver le côté de liaison"], ["5", "Passe au triangle suivant; recommence"]])}
  ${box(8, 6, 5, [{ pts: [[0, 0, 0], [8, 6, 0]], color: "amber" }, { pts: [[0, 0, 0], [8, 6, 5]], color: "red" }], [{ at: [0, 0, 0], label: "A" }, { at: [8, 6, 5], label: "G" }])}
  ${keyIdea(S`Une arête verticale forme un angle de 90° avec toute droite tracée au sol. Cet angle droit te permet d'utiliser les rapports de base dans le triangle vertical — le triangle au sol est souvent quelconque et exige la loi des sinus ou la loi des cosinus.`)}`),

  section("📌 Explore", S`<p>Deux arpenteurs, en A et en B, mesurent au sol les angles vers la base C d'une tour située de l'autre côté d'une rivière, puis mesurent l'angle d'élévation à partir de A. Modifie les mesures et suis les deux triangles.</p>`),

  widget("towerLab", { init: [120, 50, 70, 28] }),

  section("📌 Attention", watchOut([
    "Les angles d'élévation se mesurent dans un plan vertical; les angles entre des lignes de visée au sol sont dans un plan horizontal — ne les confonds pas.",
    "L'angle droit est au pied de l'objet vertical, pas à l'observateur.",
    "Garde toute la précision de la calculatrice pour le côté de liaison.",
    "Un croquis qui paraît « plat » cache souvent l'angle de 90°; refais-le au besoin.",
  ])),

  examples([
    ["Une tour de l'autre côté d'une rivière", S`Les points A et B sont distants de 90 m sur une rive. La base C d'une tour sur la rive opposée donne \(\angle CAB=48^\circ\) et \(\angle CBA=64^\circ\). À partir de A, l'angle d'élévation du sommet est de 31°. Trouve la hauteur de la tour.`,
      [S`<b>Plan.</b> Il y a deux triangles : un triangle plat au sol (\(ABC\)) et un triangle vertical (\(A\), \(C\), le sommet). Le côté \(AC\) appartient aux deux; on le trouve donc en premier.`,
        S`<b>Triangle au sol.</b> \(\angle C=180^\circ-48^\circ-64^\circ=68^\circ\).`,
        S`<b>Loi des sinus pour \(AC\).</b> \(AC\) fait face à \(\angle B=64^\circ\), et \(AB=90\) fait face à \(68^\circ\) : \(AC=\frac{90\sin64^\circ}{\sin68^\circ}\approx${f(e1AC)}\) m.`,
        S`<b>Triangle vertical.</b> Il a un angle droit en \(C\), donc \(\tan31^\circ=\frac h{AC}\). Alors \(h=AC\tan31^\circ\approx${f(e1h, 1)}\) m.`,
        S`<b>Vérifie la vraisemblance.</b> \(31^\circ<45^\circ\); la hauteur doit donc être inférieure à \(AC\) ✓`],
      S`\(h\approx${f(e1h, 1)}\) m`,
      plane({ view: { xmin: -10, xmax: 100, ymin: -10, ymax: 90 }, segs: [{ pts: [[0, 0], [90, 0], [e1AC * cos(48), e1AC * sin(48)], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "A 48°" }, { x: 90, y: 0, label: "B 64°" }, { x: e1AC * cos(48), y: e1AC * sin(48), label: "C (base de la tour)" }, { x: 45, y: 0, label: "90 m" }], step: { x: 10, y: 10 } }, "Le triangle au sol, vu de haut.")],
    ["Diagonale d'un prisme", "Un prisme rectangulaire mesure 8 cm sur 6 cm sur 5 cm. Trouve la diagonale de l'espace et l'angle qu'elle forme avec la base.",
      [S`<b>Plan.</b> Cherche des triangles rectangles à l'intérieur du prisme. La diagonale de la base est dans le plancher, et l'arête qui monte à son extrémité lui est perpendiculaire.`,
        S`<b>Diagonale de la base.</b> Dans le plancher : \(\sqrt{8^2+6^2}=\sqrt{100}=10\) cm (en ambre).`,
        S`<b>Diagonale de l'espace.</b> Le triangle a des cathètes de 10 et 5 : \(\sqrt{10^2+5^2}=\sqrt{125}\approx${f(e2d)}\) cm (en rouge).`,
        S`<b>Angle avec la base.</b> L'angle est entre la droite rouge et la droite ambre. Le côté opposé mesure 5 et le côté adjacent, 10 : \(\tan^{-1}\frac5{10}\approx${f(e2ang, 1)}^\circ\).`,
        S`<b>Vérifie.</b> En une seule étape, \(\sqrt{8^2+6^2+5^2}=\sqrt{125}\) ✓`],
      S`\(\approx${f(e2d)}\) cm, \(\approx${f(e2ang, 1)}^\circ\)`,
      box(8, 6, 5, [{ pts: [[0, 0, 0], [8, 6, 0]], color: "amber" }, { pts: [[0, 0, 0], [8, 6, 5]], color: "red" }, { pts: [[8, 6, 0], [8, 6, 5]], color: "blue" }], [{ at: [0, 0, 0], label: "A" }, { at: [8, 6, 5], label: "G" }])],
    ["Deux observateurs à angle droit", "L'observateur A est à 40 m plein sud d'un mât et en voit le sommet sous un angle de 35°. L'observateur B est plein est du mât et en voit le sommet sous un angle de 28°. Quelle distance sépare A et B?",
      [S`<b>Plan.</b> La hauteur relie les deux triangles verticaux, et le triangle au sol a un angle droit au mât, puisque le sud et l'est sont perpendiculaires.`,
        S`<b>Hauteur.</b> À partir de A : \(h=40\tan35^\circ\approx${f(e3h)}\) m.`,
        S`<b>Distance de B.</b> \(\tan28^\circ=\frac h{OB}\), donc \(OB=\frac h{\tan28^\circ}\approx${f(e3dB)}\) m. Elle est supérieure à 40 m, puisque B voit le sommet sous un angle plus petit.`,
        S`<b>Triangle au sol.</b> \(AB=\sqrt{40^2+${f(e3dB)}^2}\approx${f(e3AB, 1)}\) m.`,
        S`<b>Vérifie la vraisemblance.</b> L'hypoténuse doit être plus longue que chacune des cathètes ✓`],
      S`\(\approx${f(e3AB, 1)}\) m`,
      plane({ view: { xmin: -10, xmax: 65, ymin: -50, ymax: 10 }, segs: [{ pts: [[0, 0], [0, -40], [e3dB, 0], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "mât" }, { x: 0, y: -40, label: "A" }, { x: e3dB, y: 0, label: "B" }, { x: 0, y: -20, label: "40 m" }], step: { x: 10, y: 10 } }, "Le sol, vu de haut.")],
    ["Une montgolfière au-dessus d'un champ", "Une montgolfière se trouve à 300 m d'altitude. Deux personnes au sol la voient sous des angles d'élévation de 40° et de 25°; l'angle entre leurs lignes vers le point situé directement sous la montgolfière est de 70°. Quelle distance sépare les deux personnes?",
      [S`<b>Plan.</b> Chaque personne, la montgolfière et le point situé sous celle-ci forment un triangle rectangle. On obtient ainsi les distances au sol, puis le triangle au sol donne la réponse.`,
        S`<b>Première distance.</b> \(\tan40^\circ=\frac{300}{g_1}\), donc \(g_1\approx${f(e4g1, 1)}\) m.`,
        S`<b>Deuxième distance.</b> \(\tan25^\circ=\frac{300}{g_2}\), donc \(g_2\approx${f(e4g2, 1)}\) m.`,
        S`<b>Triangle au sol.</b> L'angle de \(70^\circ\) est compris entre \(g_1\) et \(g_2\); c'est donc le cas CAC : \(d^2=g_1^2+g_2^2-2g_1g_2\cos70^\circ\).`,
        S`<b>Résultat.</b> \(d\approx${f(e4d, 0)}\) m. Vérification : un côté d'un triangle est plus court que la somme des deux autres et plus long que leur différence ✓`],
      S`\(\approx${f(e4d, 0)}\) m`,
      plane({ view: { xmin: -30, xmax: 420, ymin: -30, ymax: 650 }, segs: [{ pts: [[0, 0], [e4g1, 0], [e4g2 * cos(70), e4g2 * sin(70)], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "sous la montgolfière, 70°" }, { x: e4g1, y: 0, label: "personne 1" }, { x: e4g2 * cos(70), y: e4g2 * sin(70), label: "personne 2" }], step: { x: 50, y: 50 } }, "Le sol, vu de haut.")],
    ["L'angle d'une rampe", "Une rampe pour fauteuil roulant s'élève de 3 m sur une distance horizontale de 4 m jusqu'à un mur. Quel angle forme-t-elle avec le sol?",
      [S`<b>Trouve le triangle rectangle.</b> La distance horizontale et la hauteur verticale se rencontrent à angle droit.`,
        S`<b>Choisis le rapport.</b> La hauteur est opposée à l'angle, et la distance horizontale lui est adjacente : \(\tan\theta=\frac34\).`,
        S`<b>Trouve l'angle.</b> \(\theta=\tan^{-1}(0.75)\approx${f(e5, 1)}^\circ\).`,
        S`<b>Vérifie.</b> La longueur de la rampe est \(\sqrt{9+16}=5\) m, et \(\sin^{-1}\frac35\approx${f(e5, 1)}^\circ\) ✓`],
      S`\(\approx${f(e5, 1)}^\circ\)`,
      plane({ view: { xmin: -0.5, xmax: 5, ymin: -0.5, ymax: 4 }, segs: [{ pts: [[0, 0], [4, 0], [4, 3], [0, 0]], color: "blue" }], points: [{ x: 0, y: 0, label: "θ" }, { x: 2, y: 0, label: "4 m" }, { x: 4, y: 1.5, label: "3 m" }, { x: 1.9, y: 1.6, label: "5 m" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("prisme", "Une pièce mesure 5 m sur 4 m sur 3 m. Trouve la diagonale de l'espace (au centième près).", num(Math.sqrt(50), 0.01),
      "√(l² + w² + h²).", [S`\(\sqrt{25+16+9}\).`], S`\(\sqrt{50}\approx7.07\) m`),
    q("hauteur", "À 60 m de distance sur un terrain plat, l'angle d'élévation du sommet d'un édifice est de 38°. Trouve sa hauteur (au dixième près).", num(60 * tan(38), 0.05),
      "tan = opp/adj.", [S`\(60\tan38^\circ\).`], S`\(\approx${f(60 * tan(38), 1)}\) m`),
    q("le sol d'abord", S`Dans le triangle au sol, \(AB=50\), \(\angle A=70^\circ\), \(\angle B=60^\circ\). Trouve \(AC\) (au centième près).`, num((50 * sin(60)) / sin(50), 0.01),
      "∠C = 50°; loi des sinus.", [S`\(\frac{50\sin60^\circ}{\sin50^\circ}\).`], S`\(\approx${f((50 * sin(60)) / sin(50))}\)`),
    q("plan", "Dans quel type de plan mesure-t-on un angle d'élévation?", choice(["un plan vertical", "un plan horizontal", "n'importe quel plan", "le plan du triangle au sol"], 0),
      "Il monte à partir du sol.", ["Vertical."], "un plan vertical"),
    q("angle", "Un cube a des arêtes de 4. Trouve l'angle entre une diagonale de l'espace et la base (au dixième près).", num(dg(Math.atan(4 / (4 * Math.SQRT2))), 0.05),
      "Hauteur 4 sur la diagonale de la base 4√2.", [S`\(\tan\theta=\frac1{\sqrt2}\).`], S`\(\approx${f(dg(Math.atan(1 / Math.SQRT2)), 1)}^\circ\)`),
  ]),

  ...hard([
    ["Une pyramide à base carrée", "Une pyramide a une base carrée de 10 m de côté et une hauteur verticale de 12 m. Trouve la longueur d'une arête latérale et l'angle qu'elle forme avec la base.",
      [S`La moitié d'une diagonale de la base : \(\frac{10\sqrt2}2\approx${f(hpHalfDiag)}\) m.`, S`Arête latérale \(=\sqrt{${f(hpHalfDiag)}^2+12^2}\approx${f(hpSlant)}\) m; angle \(\tan^{-1}\frac{12}{${f(hpHalfDiag)}}\approx${f(hpAng, 1)}^\circ\).`],
      S`\(\approx${f(hpSlant)}\) m, \(\approx${f(hpAng, 1)}^\circ\)`,
      plane({ bare: true, view: { xmin: -1, xmax: 17, ymin: -1, ymax: 14 }, segs: [{ pts: [P(0, 0, 0), P(10, 0, 0), P(10, 10, 0), P(0, 10, 0), P(0, 0, 0)], color: "gray" }, ...[[0, 0], [10, 0], [10, 10], [0, 10]].map(([x, y]) => ({ pts: [P(x, y, 0), P(5, 5, 12)], color: "blue" })), { pts: [P(5, 5, 0), P(5, 5, 12)], color: "red" }, { pts: [P(0, 0, 0), P(5, 5, 0)], color: "amber" }], points: [{ x: P(5, 5, 12)[0], y: P(5, 5, 12)[1], label: "sommet" }], step: { x: 2, y: 2 } })],
    ["Deux bateaux vus d'une falaise", "Du haut d'une falaise de 80 m, on voit deux bateaux sous des angles de dépression de 22° et de 15°. Vues de haut, les lignes qui joignent la base de la falaise aux bateaux forment un angle de 54°. Quelle distance sépare les bateaux?",
      [S`Distances au sol : \(\frac{80}{\tan22^\circ}\approx${f(hcA, 1)}\) m et \(\frac{80}{\tan15^\circ}\approx${f(hcB, 1)}\) m.`, S`Loi des cosinus sur l'eau avec l'angle de 54°.`],
      S`\(\approx${f(hcD, 0)}\) m`,
      plane({ view: { xmin: -20, xmax: 320, ymin: -20, ymax: 260 }, segs: [{ pts: [[0, 0], [hcA, 0]], color: "blue" }, { pts: [[0, 0], [hcB * cos(54), hcB * sin(54)]], color: "blue" }, { pts: [[hcA, 0], [hcB * cos(54), hcB * sin(54)]], color: "red" }], points: [{ x: 0, y: 0, label: "base de la falaise" }, { x: hcA, y: 0, label: "bateau 1" }, { x: hcB * cos(54), y: hcB * sin(54), label: "bateau 2" }], step: { x: 50, y: 50 } }, "vue de haut de l'eau")],
  ], [
    q("difficile", S`Triangle au sol : \(AB=150\) m, \(\angle A=55^\circ\), \(\angle B=75^\circ\). À partir de B, l'angle d'élévation du sommet d'une tour située en C est de 20°. Trouve la hauteur (au dixième près).`, num(((150 * sin(55)) / sin(50)) * tan(20), 0.05),
      "Trouve d'abord BC (opposé à ∠A).", [S`\(BC=\frac{150\sin55^\circ}{\sin50^\circ}\); \(h=BC\tan20^\circ\).`], S`\(\approx${f(((150 * sin(55)) / sin(50)) * tan(20), 1)}\) m`),
    q("difficile", "Un prisme mesure 12 sur 9 sur 8. Trouve l'angle entre la diagonale de l'espace et la base de 12 sur 9 (au dixième près).", num(dg(Math.atan(8 / 15)), 0.05),
      "Diagonale de la base : 15.", [S`\(\tan\theta=\frac8{15}\).`], S`\(\approx${f(dg(Math.atan(8 / 15)), 1)}^\circ\)`),
    q("difficile", "Un poteau se dresse en C. On voit son sommet sous un angle d'élévation de 30° à partir de A, situé à 60 m de C, et sous un angle d'élévation de 40° à partir de B. Au sol, ∠ACB = 80°. Quelle distance sépare A et B (au dixième près)?", num(Math.sqrt(60 ** 2 + ((60 * tan(30)) / tan(40)) ** 2 - 2 * 60 * ((60 * tan(30)) / tan(40)) * cos(80)), 0.05),
      "La hauteur à partir de A, puis BC à partir de la hauteur, puis la loi des cosinus au sol.", [S`\(h=60\tan30^\circ\); \(BC=\frac h{\tan40^\circ}\); \(AB^2=60^2+BC^2-2(60)(BC)\cos80^\circ\).`], S`\(\approx${f(hAB, 1)}\) m`),
  ]),

  wrapUp({
    qas: [
      ["Comment commencer un problème 3-D?", "Fais un croquis et trouve un triangle situé dans un même plan dont trois renseignements sont connus."],
      ["Où sont les angles droits?", "Là où un objet vertical rencontre le sol, et là où des directions perpendiculaires (nord/est) se rencontrent."],
      ["Quelle loi utiliser au sol?", "Celle qui convient aux données : la loi des sinus pour ACA/AAC/CCA, la loi des cosinus pour CAC/CCC."],
      ["Qu'est-ce qu'un côté de liaison?", "Un côté commun à deux triangles : on le trouve dans l'un, puis on l'utilise dans l'autre."],
      ["Dois-je arrondir en cours de route?", "Non — garde les valeurs complètes jusqu'à la réponse finale."],
    ],
    summary: [
      "Décompose la situation 3-D en triangles horizontaux et verticaux.",
      "Résous d'abord le triangle qui contient assez de données.",
      "Transmets le côté de liaison au triangle suivant.",
      "Diagonale de l'espace : √(l² + w² + h²).",
    ],
    next: "La leçon 5.7 fait la révision de tout le chapitre.",
  }),
];
