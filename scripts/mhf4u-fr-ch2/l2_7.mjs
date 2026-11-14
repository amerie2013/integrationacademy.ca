// MHF4U-FR 2.7 — Révision du chapitre 2 : division et théorème du reste, théorème des facteurs, équations
// polynomiales, familles de polynômes, inéquations polynomiales (graphiques et algébriques)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, roots, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "2.7 Révision du chapitre 2";
export const ID = lessonId(2, 7);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 2 — Équations et inéquations polynomiales",
    overview: S`Cette page rassemble le chapitre avant l'évaluation : l'idée clé de chaque leçon sur un seul écran, des exemples en plusieurs étapes qui combinent plusieurs habiletés, une pratique variée, une liste de vérification et un niveau difficile. Fais les exemples avant de lire les solutions, et utilise l'outil d'exploration pour vérifier tes tableaux de signes.`,
    goals: [
      "te rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "diviser des polynômes et utiliser les théorèmes du reste et des facteurs;",
      "résoudre des équations polynomiales par factorisation;",
      "écrire des équations de familles de polynômes et choisir un membre;",
      "résoudre des inéquations polynomiales graphiquement et algébriquement.",
    ],
    curriculum: "C1.7, C1.8, C3.1–C3.7, C4.1–C4.3 (tout le chapitre)",
    prior: [
      [S`Quel est le reste de \(x^3+1\) divisé par \(x-2\)?`, S`\(9\).`],
      [S`\(x+1\) est-il un facteur de \(x^3+1\)?`, S`Oui : \((-1)^3+1=0\).`],
      [S`Résous \(x(x-3)\lt0\).`, S`\(0\lt x\lt3\).`],
    ],
    words: [
      ["Théorème du reste", "le reste de \\(P\\div(x-b)\\) est \\(P(b)\\)", ""],
      ["Théorème des facteurs", "\\(x-b\\) est un facteur ⇔ \\(P(b)=0\\)", ""],
      ["Famille", "\\(y=k(x-r_1)\\cdots\\), une valeur de k par membre", ""],
      ["Tableau de signes", "les signes des facteurs sur les intervalles entre les zéros", ""],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["2.1 Division", "P = DQ + R; reste P(b)", "\\(x^3+1\\div(x-2)\\) : R = 9", "coefficients nuls; x + 3 → b = −3"],
    ["2.2 Théorème des facteurs", "P(b) = 0 ⇔ (x − b) est un facteur", "candidats ±p/q", "zéro 3/2 → (2x − 3)"],
    ["2.3 Équations", "factoriser complètement, chaque facteur = 0", "\\(8x^3-27=0\\to x=\\tfrac32\\)", "ne jamais diviser par x"],
    ["2.4 Familles", "zéros + un point → k", "k(x + 1)(x − 2) passant par (0, 4) : k = −2", "un point situé à un zéro ne peut pas fixer k"],
    ["2.5 Graphique", "au-dessus / au-dessous de l'axe ou de l'autre graphique", "\\(x^3\\ge4x\\)", "( ) en ±∞"],
    ["2.6 Algébrique", "tableau de signes entre les valeurs critiques", "\\((x-1)^2(x+4)>0\\)", "ordre pair : aucun changement de signe"],
  ])),

  section("📌 Exploration", S`<p>Utilise l'outil d'exploration des tableaux de signes pour vérifier les exemples d'inéquations et le niveau difficile.</p>`),

  widget("signChart", { init: { a: 1, zeros: [[-4, 1], [-2, 1], [1, 1]], op: "≥" } }),

  section("📌 Vue d'ensemble", keyIdea(S`La division et le théorème des facteurs transforment un polynôme en facteurs; les facteurs donnent les zéros; les zéros (avec leurs ordres) donnent le graphique et le tableau de signes; le tableau de signes résout les inéquations; et les zéros avec un point de plus donnent l'équation d'un polynôme.`)),

  examples([
    ["Diviser et interpréter", S`Divise \(3x^3-5x^2+2x-8\) par \(x-2\). Que t'apprend le reste?`,
      [S`<b>Division synthétique.</b> ${tv(["coefficients", "3", "\\(-5\\)", "2", "\\(-8\\)"], ["multiplier par 2", "", "6", "2", "8"], ["additionner", "3", "1", "4", "0"])}`,
        S`<b>Lis.</b> Le quotient est \(3x^2+x+4\), et le reste est 0.`,
        S`<b>Interprète.</b> Un reste de 0 signifie que \(x-2\) est un facteur et que \(x=2\) est un zéro.`,
        S`<b>Plus de renseignements.</b> \(3x^2+x+4\) a un discriminant de \(1-48\lt0\), donc 2 est le seul zéro réel. Le graphique coupe l'axe une seule fois ✓`],
      S`\(3x^3-5x^2+2x-8=(x-2)(3x^2+x+4)\) : \(x-2\) est un facteur et \(x=2\) est un zéro`,
      plane({ view: { xmin: -1.5, xmax: 3, ymin: -16, ymax: 10 }, curves: [{ f: (x) => 3 * x ** 3 - 5 * x * x + 2 * x - 8, color: "violet" }], points: [{ x: 2, y: 0, label: "(2, 0)", color: "red" }], step: { x: 0.5, y: 2 } })],
    ["Factoriser complètement", S`Factorise \(x^3+4x^2+x-6\).`,
      [S`<b>Candidats.</b> Les diviseurs de 6 : \(\pm1,\pm2,\pm3,\pm6\).`,
        S`<b>Teste.</b> \(P(1)=1+4+1-6=0\) ✓`,
        S`<b>Divise.</b> La division par \(x-1\) donne \(x^2+5x+6\).`,
        S`<b>Factorise.</b> \((x+2)(x+3)\).`,
        S`<b>Vérifie.</b> \(x=0\) : \((-1)(2)(3)=-6\) ✓`],
      S`\((x-1)(x+2)(x+3)\)`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -8, ymax: 6 }, curves: [{ f: (x) => x ** 3 + 4 * x * x + x - 6, color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "red" }, { x: -2, y: 0, label: "−2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }], step: { x: 1, y: 2 } })],
    ["Résoudre avec des racines irrationnelles", S`Résous \(x^3-5x^2+3x+1=0\).`,
      [S`<b>Trouve un zéro.</b> \(P(1)=1-5+3+1=0\).`,
        S`<b>Divise.</b> Le quotient est \(x^2-4x-1\), qui n'a pas de facteurs entiers.`,
        S`<b>Formule quadratique.</b> \(x=\dfrac{4\pm\sqrt{16+4}}{2}=\dfrac{4\pm2\sqrt5}{2}=2\pm\sqrt5\).`,
        S`<b>Vérifie.</b> La somme des racines doit être \(-\frac ba=5\) : \(1+4=5\) ✓`],
      S`\(x=1\), \(2+\sqrt5\approx4.24\), \(2-\sqrt5\approx-0.24\)`,
      plane({ view: { xmin: -1, xmax: 5, ymin: -10, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 5 * x * x + 3 * x + 1, color: "violet" }], points: [{ x: 2 - Math.sqrt(5), y: 0, color: "red" }, { x: 1, y: 0, color: "red" }, { x: 2 + Math.sqrt(5), y: 0, color: "red" }], step: { x: 1, y: 2 } })],
    ["Choisir un membre", S`Une fonction de degré 3 a pour zéros \(0\), \(2\) et \(-3\) et passe par \((1,-8)\). Trouve son équation.`,
      [S`<b>Famille.</b> Le zéro 0 donne le facteur \(x\) : \(y=kx(x-2)(x+3)\).`,
        S`<b>Utilise le point.</b> \(-8=k(1)(-1)(4)=-4k\).`,
        S`<b>Résous.</b> \(k=2\).`,
        S`<b>Vérifie.</b> \(2(1)(-1)(4)=-8\) ✓`],
      S`\(y=2x(x-2)(x+3)\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -12, ymax: 22 }, curves: [{ f: (x) => 2 * x * (x - 2) * (x + 3), color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "red" }, { x: 0, y: 0, label: "0", color: "red" }, { x: 2, y: 0, label: "2", color: "red" }, { x: 1, y: -8, label: "(1, −8)", color: "amber" }], step: { x: 1, y: 4 } })],
    ["Résoudre une inéquation", S`Résous \(x^3-2x^2-3x\ge0\).`,
      [S`<b>Factorise.</b> \(x(x^2-2x-3)=x(x-3)(x+1)\).`,
        S`<b>Valeurs critiques.</b> \(-1,0,3\).`,
        S`<b>Tableau de signes.</b> ${tv(["intervalle", "\\(x\\lt-1\\)", "\\((-1,0)\\)", "\\((0,3)\\)", "\\(x>3\\)"], ["\\(x\\) test", "\\(-2\\)", "\\(-0.5\\)", "1", "4"], ["signe", "−", "+", "−", "+"])}`,
        S`<b>Lis.</b> On veut \(\ge0\), donc les intervalles + avec leurs zéros inclus.`,
        S`<b>Vérifie.</b> \(x=1\) : \(1-2-3=-4\lt0\), non inclus ✓`],
      S`\(x\in[-1,0]\cup[3,\infty)\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -8, ymax: 8 }, curves: [{ f: (x) => x ** 3 - 2 * x * x - 3 * x, color: "violet" }], points: [{ x: -1, y: 0, label: "−1", color: "red" }, { x: 0, y: 0, label: "0", color: "red" }, { x: 3, y: 0, label: "3", color: "red" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("reste", S`Trouve le reste lorsque \(x^3-2x+5\) est divisé par \(x+2\).`, num(1),
      "Évalue en −2.", [S`\(-8+4+5=1\).`], S`\(1\)`),
    q("théorème des facteurs", S`Trouve \(k\) pour que \(x-3\) soit un facteur de \(x^3-2x^2+kx-6\).`, num(-1),
      "P(3) = 0.", [S`\(27-18+3k-6=0\Rightarrow3k=-3\).`], S`\(-1\)`),
    q("résous", S`Résous \(x^3-x^2-4x+4=0\).`, roots(1, 2, -2),
      "Groupe.", [S`\(x^2(x-1)-4(x-1)=(x-1)(x-2)(x+2)\).`], S`\(1, \pm2\)`),
    q("famille", S`\(y=k(x-1)(x+2)(x-3)\) passe par \((0,12)\). Trouve \(k\).`, num(2),
      "Substitue x = 0.", [S`\(k(-1)(2)(-3)=6k=12\).`], S`\(2\)`),
    q("inéquation", S`Résous \((x+4)(x-1)^2\lt0\).`, choice([S`\(x\lt-4\)`, S`\(-4\lt x\lt1\)`, S`\(x>1\)`, S`\(x\lt1\)`], 0),
      "Le facteur au carré ne change jamais le signe.", [S`Le signe est celui de \(x+4\), et le produit vaut 0 en \(x=1\).`], S`\(x\lt-4\)`),
  ]),

  section("📌 Suis-je prêt pour l'évaluation?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["2.1", "Je peux diviser par division longue et par division synthétique, et utiliser le théorème du reste."],
      ["2.2", "Je peux factoriser des polynômes de degré 3 et 4 à l'aide du théorème des facteurs et du groupement."],
      ["2.3", "Je peux résoudre des équations polynomiales, y compris avec des cubes et des équations de forme quadratique."],
      ["2.4", "Je peux écrire une famille de polynômes et trouver le membre qui passe par un point."],
      ["2.5", "Je peux lire la solution d'une inéquation sur un graphique."],
      ["2.6", "Je peux résoudre des inéquations factorisables à l'aide d'un tableau de signes."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["Deux facteurs, puis une inéquation", S`Trouve \(a\) et \(b\) pour que \(P(x)=x^3+ax^2+bx-8\) soit divisible à la fois par \(x-1\) et par \(x+2\). Résous ensuite \(P(x)\ge0\).`,
      [S`\(P(1)=1+a+b-8=0\Rightarrow a+b=7\). \(P(-2)=-8+4a-2b-8=0\Rightarrow2a-b=8\).`, S`Additionne : \(3a=15\Rightarrow a=5\), \(b=2\). \(P(x)=x^3+5x^2+2x-8=(x-1)(x+2)(x+4)\).`, S`Signes : −, +, −, + : \(P(x)\ge0\) sur \([-4,-2]\cup[1,\infty)\).`],
      S`\(a=5\), \(b=2\); \(x\in[-4,-2]\cup[1,\infty)\)`,
      plane({ view: { xmin: -5, xmax: 2, ymin: -12, ymax: 10 }, curves: [{ f: (x) => x ** 3 + 5 * x * x + 2 * x - 8, color: "violet" }], points: [{ x: -4, y: 0, label: "−4", color: "red" }, { x: -2, y: 0, label: "−2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }], step: { x: 1, y: 2 } })],
    ["Un volume suffisant", S`On fabrique une boîte sans couvercle à partir d'une feuille de 30 cm sur 20 cm en découpant des carrés de côté \(x\) dans les coins. Pour quelles valeurs de \(x\) le volume est-il d'au moins 1000 cm³?`,
      [S`\(V=x(30-2x)(20-2x)=4x(15-x)(10-x)\ge1000\Rightarrow x^3-25x^2+150x-250\ge0\).`, S`\(x=5\) convient : \((x-5)(x^2-20x+50)\ge0\); \(x=10\pm\sqrt{50}\approx2.93\) ou \(17.07\).`, S`Domaine \(0\lt x\lt10\) : signes sur \((0,2.93)\) : −, \((2.93,5)\) : +, \((5,10)\) : −.`],
      S`\(10-\sqrt{50}\le x\le5\), environ \(2.93\le x\le5\)`],
  ], [
    q("difficile", S`Trouve le reste lorsque \(x^{100}-1\) est divisé par \(x+1\).`, num(0),
      "Évalue en −1.", [S`\((-1)^{100}-1=0\).`], S`\(0\)`),
    q("difficile", S`Trouve la racine réelle de \(x^3+8=0\).`, roots(-2),
      "Somme de cubes.", [S`\((x+2)(x^2-2x+4)=0\).`], S`\(-2\)`),
    q("difficile", S`Combien d'entiers vérifient \((x-2)^2(x+1)(x-4)\lt0\)?`, num(3),
      "Résous, puis exclus le zéro double.", [S`\(-1\lt x\lt4\), \(x\ne2\) : \(0, 1, 3\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment étudier pour cette évaluation?", "Fais la pratique variée et le niveau difficile sans tes notes. Pour chaque erreur, retourne à l'outil d'exploration et à la série d'exercices de la leçon correspondante."],
      ["Quelles sont les erreurs les plus fréquentes?", "Utiliser b = 3 pour x + 3, oublier les coefficients nuls, diviser les deux membres d'une inéquation par x et se tromper de crochets aux bornes incluses."],
      ["Quelle démarche dois-je montrer?", "Montre la division synthétique ou l'évaluation P(b), la factorisation complète, les valeurs critiques et un tableau de signes ou des valeurs test."],
      ["Quelle est la façon la plus rapide de résoudre une inéquation?", "Factorise, marque les zéros, utilise le comportement à l'infini pour obtenir le signe tout à droite, puis avance vers la gauche en changeant de signe aux zéros d'ordre impair."],
      ["Comment ce chapitre mène-t-il au chapitre 3?", "Le chapitre 3 divise par des polynômes d'une nouvelle façon : les fonctions rationnelles, où les zéros du dénominateur créent des asymptotes."],
    ],
    summary: [
      "Reste P(b); facteur si P(b) = 0.",
      "Factorise complètement pour résoudre P(x) = 0.",
      "y = k(x − r₁)… : les zéros et un point.",
      "Les tableaux de signes résolvent les inéquations.",
    ],
    next: "Fais l'évaluation du chapitre 2. Le chapitre 3 porte sur les fonctions rationnelles.",
  }),
];
