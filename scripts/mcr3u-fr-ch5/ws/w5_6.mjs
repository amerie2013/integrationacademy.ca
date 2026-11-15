// MCR3U-FR Fiche 5.6 — La trigonométrie en trois dimensions (édition enseignant).
// Miroir de ../../mcr3u-ch5/ws/w5_6.mjs : mêmes nombres, mêmes figures, texte en français.
import { boxT, wireT, polyT, sin, cos, tan, atan, acos, lawC, f } from "./trigT.mjs";

const S = String.raw;
// Exemple 2 : tour de l'autre côté d'une rivière
const e2AC = (120 * sin(72)) / sin(53), e2h = e2AC * tan(26);
// Exemple 3 : observateurs dans des directions perpendiculaires
const e3h = 50 * tan(30), e3B = e3h / tan(20), e3AB = Math.hypot(50, e3B);
// Exemple 5 : falaise et deux bateaux
const e5a = 95 / tan(19), e5b = 95 / tan(13), e5d = lawC(e5a, e5b, 48);
// Exemple 9 : drone
const e9AD = (500 * sin(65)) / sin(75), e9h = e9AD * tan(18);
// Problèmes
const p5 = (80 * sin(58)) / sin(60), p6 = p5 * tan(24);
const p9BC = (250 * sin(48)) / sin(65), p9h = p9BC * tan(15);
const p10h = 120 / Math.sqrt(1 / tan(40) ** 2 + 1 / tan(30) ** 2);
const p12 = lawC(500 / tan(35), 500 / tan(22), 120);

const tower = (AC, al, h, labels = ["A", "B", "C", "T"], AB = 120) => wireT([
  { pts: [[0, 0, 0], [AB, 0, 0], [AC * cos(al), AC * sin(al), 0], [0, 0, 0]], color: "green" },
  { pts: [[AC * cos(al), AC * sin(al), 0], [AC * cos(al), AC * sin(al), h]], color: "blue" },
  { pts: [[0, 0, 0], [AC * cos(al), AC * sin(al), h]], color: "red" },
], [[0, 0, 0, labels[0]], [AB, 0, 0, labels[1]], [AC * cos(al), AC * sin(al), 0, labels[2]], [AC * cos(al), AC * sin(al), h, labels[3]]], { cap: "triangle au sol (vert), triangle vertical (rouge et bleu)" });

const EXAMPLES = [
  { title: "Diagonale d'un prisme", q: "Un prisme rectangulaire mesure 12 cm sur 5 cm sur 4 cm. Trouve la diagonale de l'espace et l'angle qu'elle forme avec la base.",
    fig: boxT(12, 5, 4, [{ pts: [[0, 0, 0], [12, 5, 0]], color: "amber" }, { pts: [[0, 0, 0], [12, 5, 4]], color: "red" }], [[0, 0, 0, "A"], [12, 5, 4, "G"]]),
    steps: [S`\textbf{Diagonale de la base (ambre) :} un triangle rectangle dans le plancher : $\sqrt{144+25}=13$.`,
      S`\textbf{Diagonale de l'espace (rouge) :} cathètes $13$ et $4$ : $\sqrt{169+16}=\sqrt{185}\approx${f(Math.sqrt(185))}$.`,
      S`\textbf{Angle :} entre la droite rouge et la droite ambre : $\tan^{-1}\frac4{13}\approx${f(atan(4 / 13), 1)}^\circ$.`,
      S`\textbf{Vérifie :} $\sqrt{12^2+5^2+4^2}=\sqrt{185}$ \checkmark`],
    ans: S`$\approx${f(Math.sqrt(185))}$ cm, $\approx${f(atan(4 / 13), 1)}^\circ$` },
  { title: "Une tour de l'autre côté d'une rivière", q: "A et B sont distants de 120 m sur une rive. La base C d'une tour sur la rive opposée donne ∠CAB = 55° et ∠CBA = 72°. À partir de A, l'angle d'élévation du sommet est de 26°. Trouve la hauteur.",
    fig: tower(e2AC, 55, e2h),
    steps: [S`\textbf{Plan :} $AC$ relie le triangle au sol et le triangle vertical.`,
      S`\textbf{Au sol :} $\angle C=180^\circ-55^\circ-72^\circ=53^\circ$.`,
      S`\textbf{Loi des sinus :} $AC=\frac{120\sin72^\circ}{\sin53^\circ}\approx${f(e2AC, 1)}$ m.`,
      S`\textbf{Triangle vertical :} angle droit en $C$ : $h=AC\tan26^\circ\approx${f(e2h, 1)}$ m.`],
    ans: S`$\approx${f(e2h, 1)}$ m` },
  { title: "Directions perpendiculaires", q: "L'observateur A est à 50 m plein sud d'un mât et en voit le sommet sous un angle de 30°. L'observateur B, plein est du mât, en voit le sommet sous un angle de 20°. Quelle distance sépare A et B?",
    fig: polyT([[0, 0], [0, -50], [e3B, 0]], ["mât", "A", "B"], { marks: [[0, -25, "50 m"]] }),
    steps: [S`\textbf{Hauteur :} $h=50\tan30^\circ\approx${f(e3h)}$ m.`,
      S`\textbf{Distance de B :} $\frac h{\tan20^\circ}\approx${f(e3B)}$ m.`,
      S`\textbf{Triangle au sol :} le sud et l'est sont perpendiculaires; on utilise donc Pythagore : $AB=\sqrt{50^2+${f(e3B)}^2}\approx${f(e3AB, 1)}$ m.`,
      S`\textbf{Figure :} elle montre le sol vu de haut \checkmark`],
    ans: S`$\approx${f(e3AB, 1)}$ m` },
  { title: "Pyramide à base carrée", q: "Une pyramide à base carrée a une base de 8 m de côté et une hauteur de 9 m. Trouve la longueur d'une arête latérale et l'angle qu'elle forme avec la base.",
    fig: wireT([{ pts: [[0, 0, 0], [8, 0, 0], [8, 8, 0], [0, 8, 0], [0, 0, 0]], color: "gray" }, ...[[0, 0], [8, 0], [8, 8], [0, 8]].map(([x, y]) => ({ pts: [[x, y, 0], [4, 4, 9]] })), { pts: [[4, 4, 0], [4, 4, 9]], color: "red" }, { pts: [[0, 0, 0], [4, 4, 0]], color: "amber" }], [[4, 4, 9, "sommet"]]),
    steps: [S`\textbf{Triangle rectangle :} un coin, le centre de la base (sous le sommet) et le sommet.`,
      S`\textbf{Demi-diagonale (ambre) :} la diagonale de la base mesure $8\sqrt2$, donc la moitié mesure $4\sqrt2\approx${f(4 * Math.SQRT2)}$.`,
      S`\textbf{Arête :} $\sqrt{(4\sqrt2)^2+9^2}=\sqrt{32+81}=\sqrt{113}\approx${f(Math.sqrt(113))}$ m.`,
      S`\textbf{Angle :} $\tan^{-1}\frac9{4\sqrt2}\approx${f(atan(9 / (4 * Math.SQRT2)), 1)}^\circ$.`],
    ans: S`$\approx${f(Math.sqrt(113))}$ m, $\approx${f(atan(9 / (4 * Math.SQRT2)), 1)}^\circ$` },
  { title: "Des bateaux vus d'une falaise", q: "Du haut d'une falaise de 95 m, on voit deux bateaux sous des angles de dépression de 19° et de 13°. Vues de haut, les lignes qui joignent la base de la falaise aux bateaux forment un angle de 48°. Quelle distance sépare les bateaux?",
    fig: polyT([[0, 0], [e5a, 0], [e5b * cos(48), e5b * sin(48)]], ["base 48°", "bateau 1", "bateau 2"]),
    steps: [S`\textbf{Distances :} l'angle de dépression est égal à l'angle d'élévation à partir du bateau, donc $\frac{95}{\tan19^\circ}\approx${f(e5a, 1)}$ m et $\frac{95}{\tan13^\circ}\approx${f(e5b, 1)}$ m.`,
      S`\textbf{Triangle au sol :} l'angle de $48^\circ$ est compris entre ces distances : cas CAC.`,
      S`\textbf{Loi des cosinus :} $d^2=${f(e5a, 1)}^2+${f(e5b, 1)}^2-2(${f(e5a, 1)})(${f(e5b, 1)})\cos48^\circ$, donc $d\approx${f(e5d, 0)}$ m.`],
    ans: S`$\approx${f(e5d, 0)}$ m` },
  { title: "Diagonale et arête d'un cube", q: "Trouve l'angle entre une diagonale de l'espace d'un cube et l'une des arêtes qui la rencontrent.",
    fig: boxT(1, 1, 1, [{ pts: [[0, 0, 0], [1, 1, 1]], color: "red" }, { pts: [[0, 0, 0], [1, 0, 0]], color: "amber" }], [[0, 0, 0, "A"], [1, 1, 1, "G"]]),
    steps: [S`\textbf{Échelle :} l'angle ne dépend pas de la taille; prends donc une arête de $1$.`,
      S`\textbf{Diagonale :} $\sqrt{1+1+1}=\sqrt3$.`,
      S`\textbf{Triangle rectangle :} l'arête rencontre une diagonale de face à $90^\circ$; l'arête est donc adjacente et la diagonale est l'hypoténuse.`,
      S`\textbf{Angle :} $\cos\theta=\frac1{\sqrt3}$, donc $\theta\approx${f(acos(1 / Math.sqrt(3)), 1)}^\circ$.`],
    ans: S`$\approx${f(acos(1 / Math.sqrt(3)), 1)}^\circ$` },
  { title: "Sur une pente", q: "Un sentier gravit un versant incliné à 9°. Quel gain d'altitude obtient-on sur 2.4 km de sentier?",
    fig: polyT([[0, 0], [2.4 * cos(9), 0], [2.4 * cos(9), 2.4 * sin(9)]], ["9°", "", ""], { marks: [[1.2, 0.3, "2.4 km"]] }),
    steps: [S`\textbf{Modélise :} le sentier est l'hypoténuse, et la hauteur est opposée à l'angle de $9^\circ$.`,
      S`\textbf{Pose l'équation :} $h=2.4\sin9^\circ$ km.`,
      S`\textbf{Unités :} $2400\sin9^\circ\approx${f(2400 * sin(9), 0)}$ m.`],
    ans: S`$\approx${f(2400 * sin(9), 0)}$ m` },
  { title: "Un mât sur un toit", q: "D'un point situé à 40 m d'un édifice, l'angle d'élévation de la base d'un mât installé sur le toit est de 32° et celui de son sommet est de 38°. Quelle est la longueur du mât?",
    fig: polyT([[0, 0], [40, 0], [40, 40 * tan(38)]], ["", "", "sommet"], { extra: [{ pts: [[0, 0], [40, 40 * tan(32)]], color: "red" }], marks: [[40, 40 * tan(32), "base du mât"], [20, 0, "40 m"]] }),
    steps: [S`\textbf{Deux triangles rectangles} ont la même base de $40$ m.`,
      S`\textbf{Hauteur du toit :} $40\tan32^\circ\approx${f(40 * tan(32))}$ m.`,
      S`\textbf{Hauteur du sommet :} $40\tan38^\circ\approx${f(40 * tan(38))}$ m.`,
      S`\textbf{Soustrais :} mât $\approx${f(40 * (tan(38) - tan(32)))}$ m.`],
    ans: S`$\approx${f(40 * (tan(38) - tan(32)))}$ m` },
  { title: "Un drone en vol stationnaire", q: "Les observateurs A et B sont distants de 500 m. Un drone reste immobile au-dessus du point D au sol, avec ∠DAB = 40° et ∠DBA = 65°. À partir de A, l'angle d'élévation du drone est de 18°. Trouve son altitude.",
    fig: polyT([[0, 0], [500, 0], [e9AD * cos(40), e9AD * sin(40)]], ["A 40°", "B 65°", "D"]),
    steps: [S`\textbf{Au sol :} $\angle D=180^\circ-40^\circ-65^\circ=75^\circ$.`,
      S`\textbf{Loi des sinus :} $AD=\frac{500\sin65^\circ}{\sin75^\circ}\approx${f(e9AD, 1)}$ m.`,
      S`\textbf{Triangle vertical :} $h=AD\tan18^\circ\approx${f(e9h, 1)}$ m.`,
      S`\textbf{Figure :} elle montre le triangle au sol vu de haut \checkmark`],
    ans: S`$\approx${f(e9h, 1)}$ m` },
];

const PROBLEMS = [
  { level: 1, q: "Un cube a des arêtes de 5. Trouve sa diagonale de l'espace.", recap: "Diagonale du cube.", ans: S`$5\sqrt3\approx8.66$` },
  { level: 1, q: "À 35 m de distance sur un terrain plat, l'angle d'élévation du sommet d'un arbre est de 42°. Trouve sa hauteur.", recap: "Un seul angle d'élévation.", ans: S`$\approx${f(35 * tan(42))}$ m` },
  { level: 1, q: "Dans un problème de tour, quel triangle contient l'angle droit : le triangle au sol ou le triangle vertical?", recap: "Où est l'angle de 90°?", ans: "le triangle vertical (à la base de la tour)" },
  { level: 2, q: "Un prisme mesure 10 sur 6 sur 3. Trouve sa diagonale de l'espace.", recap: "Diagonale du prisme.", ans: S`$\sqrt{145}\approx${f(Math.sqrt(145))}$`, fig: boxT(10, 6, 3, [{ pts: [[0, 0, 0], [10, 6, 3]], color: "red" }], [[0, 0, 0, "A"], [10, 6, 3, "G"]]) },
  { level: 2, q: "Triangle au sol : AB = 80 m, ∠A = 62°, ∠B = 58°. Trouve AC.", recap: "Loi des sinus au sol.", ans: S`$\angle C=60^\circ$; $\approx${f(p5)}$ m` },
  { level: 2, q: "Suite du problème 5 : à partir de A, l'angle d'élévation du sommet d'un poteau situé en C est de 24°. Trouve la hauteur du poteau.", recap: "Puis la tangente.", ans: S`$\approx${f(p6)}$ m` },
  { level: 2, q: "Une tente à base carrée a une base de 6 m de côté et des arêtes latérales de 7 m. Quelle est la hauteur de la tente?", recap: "Hauteur d'une pyramide.", ans: S`$\sqrt{49-18}=\sqrt{31}\approx${f(Math.sqrt(31))}$ m` },
  { level: 2, q: "On voit le sommet d'un édifice de 45 m sous un angle d'élévation de 28°. À quelle distance se trouve l'observateur?", recap: "Distance.", ans: S`$\approx${f(45 / tan(28), 1)}$ m` },
  { level: 3, space: 5, q: "A et B sont distants de 250 m. La base C d'une tour donne ∠CAB = 48° et ∠CBA = 67°. À partir de B, l'angle d'élévation du sommet est de 15°. Trouve la hauteur.", recap: "Tour vue de B.", ans: S`$BC=\frac{250\sin48^\circ}{\sin65^\circ}\approx${f(p9BC, 1)}$; $h\approx${f(p9h, 1)}$ m`, fig: tower((250 * sin(67)) / sin(65), 48, p9h, ["A", "B", "C", "T"], 250) },
  { level: 3, space: 5, q: "L'observateur P est plein sud d'un monument et en voit le sommet sous un angle de 40°; l'observateur Q est plein ouest et le voit sous un angle de 30°. P et Q sont distants de 120 m. Trouve la hauteur du monument.", recap: "h inconnue, Pythagore.", ans: S`$h^2(\cot^2 40^\circ+\cot^2 30^\circ)=120^2$ : $h\approx${f(p10h, 1)}$ m` },
  { level: 3, space: 4, q: "Une pièce mesure 6 m sur 4 m sur 3 m. Trouve l'angle entre le plancher et une droite qui joint un coin du plancher au coin opposé du plafond.", recap: "Angle avec le plancher.", ans: S`$\tan^{-1}\frac3{\sqrt{52}}\approx${f(atan(3 / Math.sqrt(52)), 1)}^\circ$` },
  { level: 3, space: 5, q: "Une montgolfière se trouve à 500 m au-dessus du point G. À partir de A, son angle d'élévation est de 35°; à partir de B, il est de 22°; et au sol, ∠AGB = 120°. Quelle distance sépare A et B?", recap: "Deux tangentes + loi des cosinus.", ans: S`$AG\approx${f(500 / tan(35), 0)}$, $BG\approx${f(500 / tan(22), 0)}$; $AB\approx${f(p12, 0)}$ m`,
    fig: polyT([[0, 0], [500 / tan(35), 0], [(500 / tan(22)) * cos(120), (500 / tan(22)) * sin(120)]], ["G", "A", "B"], { cap: "vue de haut du sol" }) },
  { level: 3, space: 4, q: "Une pyramide à base carrée a une base de 12 de côté et des arêtes latérales de 10. Trouve sa hauteur et l'angle entre une arête latérale et la base.", recap: "Angle d'une pyramide.", ans: S`demi-diagonale $6\sqrt2$; $h=\sqrt{28}\approx${f(Math.sqrt(28))}$; angle $\cos^{-1}\frac{6\sqrt2}{10}\approx${f(acos((6 * Math.SQRT2) / 10), 1)}^\circ$` },
];

export const WS = {
  code: "5.6",
  title: "La trigonométrie en trois dimensions",
  bigideas: S`Décompose une situation 3-D en triangles plats. Les objets verticaux rencontrent le sol à $90^\circ$; les triangles verticaux utilisent donc les rapports de base, alors que les triangles au sol sont souvent quelconques et exigent la loi des sinus ou la loi des cosinus. Résous d'abord le triangle qui contient assez de données et transmets le côté commun.`,
  goals: ["Esquisser et annoter des situations 3-D.", "Repérer les triangles horizontaux et verticaux.", "Trouver des hauteurs et des distances en plusieurs étapes.", "Trouver des diagonales et des angles dans des prismes et des pyramides."],
  curriculum: "D1.7",
  vocab: [["Côté de liaison", "un côté commun à deux triangles"], ["Diagonale de l'espace", "$\\sqrt{l^2+w^2+h^2}$"], ["Triangle horizontal / vertical", "situé au sol / dressé à la verticale"]],
  hook: "Tiens un crayon à la verticale sur un pupitre. Demande aux élèves de montrer tous les angles droits qu'ils voient entre le crayon et des droites tracées sur le pupitre.",
  concepts: [
    ["1. Deux plans", S`${boxT(8, 5, 4, [{ pts: [[0, 0, 0], [8, 5, 0]], color: "amber" }, { pts: [[0, 0, 0], [8, 5, 4]], color: "red" }, { pts: [[8, 5, 0], [8, 5, 4]], color: "blue" }], [], { width: 5 })}La diagonale de la base (ambre) et l'arête bleue sont perpendiculaires; la diagonale de l'espace (rouge) est donc l'hypoténuse d'un triangle rectangle vertical.`],
    ["2. Stratégie", S`Croquis → liste des triangles → résoudre celui qui a trois renseignements → transmettre le côté de liaison → terminer.`],
    ["3. Quel outil?", S`Triangle rectangle vertical : SOH CAH TOA. Triangle au sol : loi des sinus (paire côté–angle connue) ou loi des cosinus (CAC, CCC).`],
  ],
  tips: ["Marque les angles droits au pied des objets verticaux.", "Les angles d'élévation sont dans des plans verticaux.", "N'arrondis pas le côté de liaison.", "Redessine chaque triangle à plat.", "Vérifie les unités et la vraisemblance."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
