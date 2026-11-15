// MCR3U-FR 7.3 — Créer des règles pour les suites : règles de récurrence et explicites, différences finies pour les
// suites ni arithmétiques ni géométriques, le casse-tête des disques 2ⁿ − 1, notation fonctionnelle.
// Miroir de ../mcr3u-ch7/l7_3.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "7.3 Créer des règles pour les suites";
export const ID = lessonId(7, 3);
const S = String.raw;
const pts = (g, n) => Array.from({ length: n }, (_, i) => ({ x: i + 1, y: g(i + 1) }));

export const blocks = () => [
  intro({
    icon: "🧱",
    title: "Créer des règles pour les suites",
    overview: S`Beaucoup de suites ne sont ni arithmétiques ni géométriques : les carrés parfaits, les nombres triangulaires ou le nombre de déplacements nécessaires pour résoudre un casse-tête. On peut quand même les décrire à l'aide de règles. Une règle de <strong>récurrence</strong> indique comment obtenir chaque terme à partir du précédent; une règle <strong>explicite</strong> donne \(t_n\) directement à partir de \(n\). Les différences finies aident à trouver des règles explicites : des différences secondes constantes indiquent une règle du second degré.`,
    goals: [
      "produire des termes à partir d'une formule de récurrence;",
      "écrire une formule de récurrence pour une suite donnée;",
      "utiliser les différences premières et secondes pour classer une suite;",
      "trouver une règle explicite (du second degré) quand les différences secondes sont constantes;",
      "relier les règles de récurrence et les règles explicites dans des problèmes.",
    ],
    curriculum: "C1.2 (déterminer et décrire une procédure récursive pour produire une suite à partir des termes initiaux, et déterminer des liens entre les représentations explicite et récursive), C1.4 (représenter une suite à l'aide d'une formule de récurrence, de la notation fonctionnelle ou de la formule du n-ième terme), C3.1 (déterminer si une suite est arithmétique, géométrique ou ni l'une ni l'autre)",
    prior: [
      ["Trouve les différences de 1, 4, 9, 16.", "3, 5, 7."],
      [S`Évalue \(n^2+1\) pour \(n=4\).`, "17."],
      [S`Évalue \(2^5-1\).`, "31."],
    ],
    words: [
      ["Formule de récurrence", "le ou les premiers termes et une règle qui utilise les termes précédents", "\\(t_1=1,\\ t_n=2t_{n-1}+1\\)"],
      ["Formule explicite", "une règle qui dépend seulement de n", "\\(t_n=2^n-1\\)"],
      ["Différences premières", "\\(t_{n+1}-t_n\\)", ""],
      ["Différences secondes", "les différences des différences premières", ""],
    ],
  }),

  section("📌 Classer à l'aide des différences et des quotients", S`
  ${table(["Régularité dans les termes", "Type", "La règle explicite a la forme"], [["différences premières constantes", "arithmétique (linéaire)", "\\(dn+b\\)"], ["différences secondes constantes", "du second degré", "\\(an^2+bn+c\\)"], ["quotients constants", "géométrique", "\\(ar^{n-1}\\)"], ["aucune de ces régularités", "autre", "cherche une règle de récurrence"]])}
  ${plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 40 }, points: pts((n) => n * n + 1, 6), curves: [{ f: (x) => x * x + 1, a: 0.5, b: 6.2, color: "gray" }], step: { x: 1, y: 5 }, xlabel: "n", ylabel: "tₙ" }, "2, 5, 10, 17, 26, 37 : les différences secondes valent toutes 2, donc tₙ = n² + 1")}
  ${keyIdea(S`Si les différences secondes sont une constante \(2a\), la règle explicite est du second degré, avec un coefficient dominant \(a\). Utilise ensuite deux termes pour trouver le reste.`)}`),

  section("📌 Explore", S`<p>Choisis p et q dans \(t_n=p\,t_{n-1}+q\). Quand la suite est-elle arithmétique? Géométrique? Ni l'une ni l'autre? Essaie \(t_1=1\), \(p=2\), \(q=1\).</p>`),

  widget("recursiveLab", { init: [1, 2, 1] }),

  section("📌 Attention", watchOut([
    "Une formule de récurrence a besoin d'un terme de départ — sans lui, la suite n'est pas définie.",
    "Pour obtenir t₁₀₀ à l'aide d'une règle de récurrence, il faut construire tous les termes précédents; une règle explicite est plus rapide.",
    "Calcule les différences avec soin, signes compris.",
    "Vérifie ta règle explicite avec au moins deux termes que tu n'as pas utilisés pour la construire.",
  ])),

  examples([
    ["Des termes à partir d'une règle de récurrence", S`Énumère les quatre premiers termes : \(t_1=2\), \(t_n=3t_{n-1}-1\).`,
      [S`<b>Lire la règle.</b> Chaque terme est « 3 fois le terme précédent, moins 1 ».`,
        S`<b>Deuxième terme.</b> \(t_2=3(2)-1=5\).`,
        S`<b>Troisième terme.</b> \(t_3=3(5)-1=14\).`,
        S`<b>Quatrième terme.</b> \(t_4=3(14)-1=41\).`,
        S`<b>Type.</b> Les différences sont \(3,9,27\) et les quotients ne sont pas constants; la suite n'est donc ni arithmétique ni géométrique, même si les différences elles-mêmes forment une suite géométrique ✓`],
      "2, 5, 14, 41",
      plane({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 46 }, points: [{ x: 1, y: 2, label: "(1, 2)" }, { x: 2, y: 5, label: "(2, 5)" }, { x: 3, y: 14, label: "(3, 14)" }, { x: 4, y: 41, label: "(4, 41)", color: "amber" }], step: { x: 1, y: 5 }, xlabel: "n", ylabel: "tₙ" })],
    ["Une suite du second degré", "Trouve une règle explicite pour 2, 5, 10, 17, 26, …",
      [S`<b>Différences.</b> ${tv(["\\(t_n\\)", "2", "5", "10", "17", "26"], ["premières", "", "3", "5", "7", "9"], ["secondes", "", "", "2", "2", "2"])}`,
        S`<b>Type.</b> Des différences secondes constantes indiquent une règle du second degré. Avec un pas de 1, \(2a=2\), donc le coefficient dominant est 1.`,
        S`<b>Comparer avec \(n^2\).</b> \(n^2\) donne \(1,4,9,16,25\). En soustrayant ces valeurs des termes, on obtient \(1,1,1,1,1\).`,
        S`<b>Règle.</b> \(t_n=n^2+1\).`,
        S`<b>Vérification.</b> \(t_5=25+1=26\) ✓`],
      S`\(t_n=n^2+1\)`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 40 }, curves: [{ f: (x) => x * x + 1, a: 0, color: "gray" }], points: pts((n) => n * n + 1, 6), step: { x: 1, y: 5 }, xlabel: "n", ylabel: "tₙ" })],
    ["Écrire une règle de récurrence", "Écris une formule de récurrence pour 4, 9, 19, 39, …",
      [S`<b>Essayer des régularités simples.</b> Les différences \(5,10,20\) doublent chaque fois; chaque terme fait donc probablement intervenir le double du précédent.`,
        S`<b>Tester le double.</b> \(2(4)=8\), soit 1 de moins que 9. \(2(9)=18\), soit 1 de moins que 19. \(2(19)=38\), soit 1 de moins que 39.`,
        S`<b>Règle.</b> \(t_n=2t_{n-1}+1\). Une règle de récurrence a aussi besoin d'une valeur de départ : \(t_1=4\).`,
        S`<b>Vérifier en prédisant.</b> Le terme suivant est \(2(39)+1=79\), et la différence \(40\) continue de doubler ✓`],
      S`\(t_1=4,\ t_n=2t_{n-1}+1\)`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 90 }, points: [{ x: 1, y: 4 }, { x: 2, y: 9 }, { x: 3, y: 19 }, { x: 4, y: 39, label: "(4, 39)" }, { x: 5, y: 79, label: "(5, 79)", color: "amber" }], step: { x: 1, y: 10 }, xlabel: "n", ylabel: "tₙ" })],
    ["Le casse-tête des disques", "Pour déplacer une pile de n disques d'une tige à une autre (sans jamais placer un disque plus grand sur un plus petit), on déplace n − 1 disques, puis le plus grand, puis de nouveau n − 1 disques. Écris une règle de récurrence et une règle explicite pour le nombre minimal de déplacements.",
      [S`<b>Règle de récurrence.</b> La description donne \(M_{n-1}\) déplacements, puis 1, puis de nouveau \(M_{n-1}\) : \(M_n=2M_{n-1}+1\). Un seul disque exige un déplacement : \(M_1=1\).`,
        S`<b>Énumérer des termes.</b> ${tv(["\\(n\\)", "1", "2", "3", "4", "5"], ["\\(M_n\\)", "1", "3", "7", "15", "31"], ["\\(2^n\\)", "2", "4", "8", "16", "32"])}`,
        S`<b>Repérer la régularité.</b> Chaque valeur est inférieure de 1 à une puissance de 2 : \(M_n=2^n-1\).`,
        S`<b>Vérifier qu'elle respecte la règle.</b> \(2(2^{n-1}-1)+1=2^n-2+1=2^n-1\) ✓`,
        S`<b>Exemple.</b> \(M_{10}=2^{10}-1=1023\).`],
      S`\(M_1=1,\ M_n=2M_{n-1}+1\); \(M_n=2^n-1\); par exemple, \(M_{10}=1023\) déplacements`,
      plane({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 140 }, points: pts((n) => 2 ** n - 1, 7), step: { x: 1, y: 20 }, xlabel: "disques", ylabel: "déplacements" })],
    ["Notation fonctionnelle", S`Pour \(f(n)=n^2-3n\), énumère \(f(1)\) à \(f(5)\) et classe la suite.`,
      [S`<b>Substituer.</b> ${tv(["\\(n\\)", "1", "2", "3", "4", "5"], ["\\(f(n)\\)", "\\(-2\\)", "\\(-2\\)", "0", "4", "10"])}`,
        S`<b>Différences premières.</b> \(0,2,4,6\) : elles ne sont pas constantes, donc la suite n'est pas arithmétique.`,
        S`<b>Quotients.</b> \(\frac{-2}{-2}=1\), mais ensuite \(\frac0{-2}=0\) : ils ne sont pas constants, donc la suite n'est pas géométrique.`,
        S`<b>Différences secondes.</b> \(2,2,2\) : elles sont constantes, donc la suite est du second degré, comme le prévoit le \(n^2\) de la règle ✓`],
      "du second degré (ni arithmétique ni géométrique)",
      plane({ view: { xmin: 0, xmax: 6, ymin: -4, ymax: 12 }, curves: [{ f: (x) => x * x - 3 * x, a: 0, color: "gray" }], points: pts((n) => n * n - 3 * n, 5), step: { x: 1, y: 2 }, xlabel: "n", ylabel: "f(n)" })],
  ]),

  practice([
    q("récurrence", S`\(t_1=5\), \(t_n=t_{n-1}-4\). Trouve \(t_4\).`, num(-7),
      "Soustrais 4 trois fois.", [S`\(5,1,-3,-7\).`], S`\(-7\)`),
    q("récurrence", S`\(t_1=1\), \(t_n=2t_{n-1}+3\). Trouve \(t_4\).`, num(29),
      "Construis la suite terme par terme.", [S`\(1,5,13,29\).`], S`\(29\)`),
    q("classer", "Classe la suite 1, 4, 9, 16, 25, …", choice(["ni arithmétique ni géométrique", "arithmétique", "géométrique", "les deux"], 0),
      "Vérifie les différences et les quotients.", ["Différences 3, 5, 7, 9; les quotients ne sont pas constants."], "ni l'une ni l'autre"),
    q("fonction", S`Pour \(f(n)=3n^2-1\), trouve \(f(5)\).`, num(74),
      "Substitue.", [S`\(75-1\).`], S`\(74\)`),
    q("régularité", "Trouve le terme suivant : 3, 4, 7, 12, 19, …", num(28),
      "Différences premières 1, 3, 5, 7, …", [S`Différence suivante 9 : \(19+9\).`], S`\(28\)`),
  ]),

  ...hard([
    ["Construire une règle du second degré", "Trouve une règle explicite pour 3, 8, 15, 24, 35, … et utilise-la pour trouver t₂₀.",
      ["Les différences secondes valent 2, donc la règle est de la forme n² + bn + c.", S`\(t_n-n^2\) donne 2, 4, 6, 8, …\(=2n\) : \(t_n=n^2+2n\).`],
      S`\(t_{20}=440\)`],
    ["Les nombres triangulaires", "Des points sont disposés en triangles : 1, 3, 6, 10, … Écris une règle de récurrence et une règle explicite, puis trouve le 50<sup>e</sup> nombre triangulaire.",
      [S`Chaque nouvelle rangée ajoute n points : \(t_1=1\), \(t_n=t_{n-1}+n\).`, S`Deux copies forment un rectangle de n sur (n + 1) : \(t_n=\frac{n(n+1)}2\).`],
      S`\(t_{50}=1275\)`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 25 }, points: pts((n) => (n * (n + 1)) / 2, 6), step: { x: 1, y: 5 }, xlabel: "n", ylabel: "points" })],
  ], [
    q("difficile", S`\(t_1=2\), \(t_n=(t_{n-1})^2-1\). Trouve \(t_4\).`, num(63),
      "Élève au carré, puis soustrais 1.", [S`\(2,3,8,63\).`], S`\(63\)`),
    q("difficile", "Trouve t₁₀ pour 2, 6, 12, 20, 30, …", num(110),
      "Différences secondes 2; essaie n(n + 1).", [S`\(t_n=n(n+1)\).`], S`\(110\)`),
    q("difficile", "Quel est le nombre minimal de déplacements pour le casse-tête des disques avec 7 disques?", num(127),
      "2ⁿ − 1.", [S`\(2^7-1\).`], S`\(127\)`),
  ]),

  wrapUp({
    qas: [
      ["Récurrence ou explicite : laquelle est la meilleure?", "Les règles de récurrence décrivent comment les termes évoluent; les règles explicites donnent directement n'importe quel terme."],
      ["Que m'apprennent des différences secondes constantes?", "La règle explicite est du second degré, et son coefficient dominant est la moitié de la différence seconde."],
      ["Une suite peut-elle être à la fois arithmétique et géométrique?", "Seulement une suite constante comme 5, 5, 5, … (d = 0, r = 1)."],
      ["Comment trouver une règle de récurrence?", "Compare chaque terme au précédent : additionner? multiplier? multiplier puis additionner?"],
      ["Comment vérifier une règle explicite?", "Remplace n par 1, 2, 3 et compare avec les termes."],
    ],
    summary: [
      "Récurrence : un départ + une règle à partir des termes précédents.",
      "Explicite : tₙ directement à partir de n.",
      "Différences secondes constantes → second degré.",
      "tₙ = 2tₙ₋₁ + 1 avec t₁ = 1 donne 2ⁿ − 1.",
    ],
    next: "En 7.4, on examine des suites où chaque terme dépend des deux termes qui le précèdent.",
  }),
];
