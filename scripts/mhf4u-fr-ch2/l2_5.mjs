// MHF4U-FR 2.5 — Résolution graphique d'inéquations polynomiales : notation d'inéquation et d'intervalle, lecture de
// f(x) > 0 et f(x) > g(x) sur des graphiques, bornes approximatives à l'aide de la technologie, applications
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "2.5 Résolution graphique d'inéquations polynomiales";
export const ID = lessonId(2, 5);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Résolution graphique d'inéquations polynomiales",
    overview: S`Une inéquation comme \(f(x)>0\) demande : pour quelles valeurs de \(x\) le graphique est-il <em>au-dessus</em> de l'axe des x? Et \(f(x)\le g(x)\) demande où le graphique de \(f\) est sur le graphique de \(g\) ou en dessous. Les bornes de la solution sont les abscisses à l'origine (ou les points d'intersection), et la réponse est un ensemble d'intervalles. Un graphique — tracé à la main à partir de la forme factorisée ou à l'aide de la technologie — montre la solution d'un coup d'œil, même lorsque les bornes ne sont pas des nombres simples.`,
    goals: [
      "écrire des solutions à l'aide d'inégalités et de la notation d'intervalle;",
      "résoudre f(x) > 0, f(x) ≥ 0, f(x) < 0 et f(x) ≤ 0 à partir d'un graphique;",
      "résoudre f(x) > g(x) en comparant deux graphiques;",
      "utiliser des points d'intersection approximatifs obtenus à l'aide de la technologie;",
      "résoudre des problèmes portant sur des inéquations polynomiales.",
    ],
    curriculum: "C4.1 (expliquer la différence entre la solution d'une équation et celle d'une inéquation), C4.2 (déterminer les solutions d'inéquations polynomiales à l'aide d'un graphique ou de la technologie, et les interpréter selon le contexte)",
    prior: [
      [S`Où \(y=x^2-4\) est-elle sous l'axe des x?`, S`\(-2\lt x\lt2\).`],
      [S`Écris \(-1\le x\lt3\) en notation d'intervalle.`, S`\([-1,3)\).`],
      [S`Quels sont les zéros de \((x+1)(x-2)(x-5)\)?`, S`\(-1, 2, 5\).`],
    ],
    words: [
      ["Notation d'intervalle", "( ) exclut une borne, [ ] l'inclut", "\\([2,5)\\)"],
      ["Union \\(\\cup\\)", "réunit des intervalles séparés", "\\((-\\infty,-1)\\cup(2,\\infty)\\)"],
      ["Inéquation stricte", "\\(\\lt\\) ou \\(>\\) : bornes exclues", ""],
      ["Inéquation non stricte", "\\(\\le\\) ou \\(\\ge\\) : bornes incluses", ""],
    ],
  }),

  section("📌 Lire le graphique", S`
  ${plane({ view: { xmin: -3, xmax: 4, ymin: -12, ymax: 12 }, curves: [{ f: (x) => (x + 2) * (x - 1) * (x - 3), color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }, { x: 3, y: 0, label: "3", color: "red" }], step: { x: 1, y: 2 } }, "f(x) = (x + 2)(x − 1)(x − 3) : au-dessus de l'axe sur (−2, 1) et (3, ∞); en dessous sur (−∞, −2) et (1, 3).")}
  ${table(["Inéquation", "Cherche…", "Bornes"], [
    ["f(x) > 0", "le graphique au-dessus de l'axe des x", "exclues ( )"],
    ["f(x) ≥ 0", "sur l'axe des x ou au-dessus", "incluses [ ]"],
    ["f(x) < 0", "le graphique sous l'axe des x", "exclues ( )"],
    ["f(x) > g(x)", "le graphique de f au-dessus de celui de g", "abscisses des points d'intersection"],
  ])}
  ${keyIdea(S`Une équation a quelques solutions (des points); une inéquation en a habituellement une infinité (des intervalles). Trouve d'abord les abscisses des bornes, puis détermine quels intervalles vérifient l'inéquation. \(\infty\) prend toujours une parenthèse.`)}`),

  section("📌 Exploration", S`<p>Choisis le polynôme de degré 3 et la droite \(y=g(x)\). Choisis l'inéquation : les bandes ombrées sont les valeurs de x qui la vérifient, et la solution est écrite en notation d'intervalle. Pose la droite \(y=0\) pour comparer avec l'axe des x.</p>`),

  widget("inequalityGraph", { init: { cs: [1, 0, -4, 0], m: 0, b: 0, op: "≥" } }),

  section("📌 Inéquations et technologie", S`
  <p>Lorsque les bornes ne sont pas des entiers, utilise la fonction « zéro » ou « intersection » d'un outil graphique et arrondis de façon raisonnable (habituellement à 2 décimales). Réécrire \(f(x)>g(x)\) sous la forme \(f(x)-g(x)>0\) donne un seul graphique à lire au lieu de deux.</p>
  ${watchOut([
    "Utilise ( ) pour < et >, [ ] pour ≤ et ≥ — et toujours ( ) à côté de ±∞.",
    "f(x) > g(x) porte sur le graphique qui est le plus HAUT, et non sur le signe de l'un ou l'autre graphique.",
    "N'oublie pas les intervalles extérieurs qui vont jusqu'à −∞ ou ∞.",
    "Les bornes arrondies sont approximatives : écris ≈.",
    "En contexte, limite-toi aux valeurs qui ont du sens (p. ex. des longueurs > 0).",
  ])}`),

  examples([
    ["Au-dessus de l'axe", S`Utilise le graphique de \(f(x)=(x+2)(x-1)(x-3)\) pour résoudre \(f(x)>0\).`,
      [S`<b>Signification.</b> \(f(x)>0\) demande où le graphique est au-dessus de l'axe des x. On lit des valeurs de x, et non des valeurs de y.`,
        S`<b>Zéros.</b> Le graphique rencontre l'axe en \(-2,1,3\). Ce sont les bornes.`,
        S`<b>Lis le graphique.</b> Il est au-dessus de l'axe entre \(-2\) et \(1\), et à droite de 3.`,
        S`<b>Bornes.</b> L'inéquation est stricte, donc les zéros sont exclus.`,
        S`<b>Vérifie.</b> \(f(0)=6>0\) ✓ et \(f(2)=(4)(1)(-1)=-4\lt0\) ✓`],
      S`\(x\in(-2,1)\cup(3,\infty)\)`,
      plane({ view: { xmin: -4, xmax: 5, ymin: -12, ymax: 12 }, curves: [{ f: (x) => (x + 2) * (x - 1) * (x - 3), color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }, { x: 3, y: 0, label: "3", color: "red" }, { x: 0, y: 6, label: "(0, 6)" }], step: { x: 1, y: 2 } })],
    ["Sur l'axe ou en dessous", S`Résous \(x^4-5x^2+4\le0\) à partir de son graphique.`,
      [S`<b>Factorise pour obtenir les zéros.</b> C'est un trinôme du second degré en \(x^2\) : \((x^2-1)(x^2-4)\). Les zéros sont \(\pm1,\pm2\).`,
        S`<b>Lis le graphique.</b> La forme en W descend sous l'axe sur \((-2,-1)\) et sur \((1,2)\).`,
        S`<b>Bornes.</b> \(\le\) inclut les zéros.`,
        S`<b>Vérifie.</b> \(x=1.5\) : \(5.0625-11.25+4=-2.1875\le0\) ✓. \(x=0\) : \(4>0\), donc 0 n'est pas inclus ✓`],
      S`\(x\in[-2,-1]\cup[1,2]\)`,
      plane({ view: { xmin: -2.7, xmax: 2.7, ymin: -3, ymax: 6 }, curves: [{ f: (x) => x ** 4 - 5 * x * x + 4, color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: -1, y: 0, label: "−1", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }, { x: 2, y: 0, label: "2", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Comparer deux graphiques", S`Résous \(x^3\ge4x\) graphiquement.`,
      [S`<b>Signification.</b> Trouve où le polynôme de degré 3 est sur la droite \(y=4x\) ou au-dessus.`,
        S`<b>Points de rencontre.</b> \(x^3=4x\) donne \(x(x-2)(x+2)=0\), donc \(x=-2,0,2\). Ne divise pas par \(x\), car tu perdrais une racine.`,
        S`<b>Lis le graphique.</b> Le polynôme de degré 3 est au-dessus de la droite pour \(-2\lt x\lt0\) et pour \(x>2\).`,
        S`<b>Vérifie.</b> \(x=-1\) : \(-1\ge-4\) ✓. \(x=1\) : \(1\ge4\) est faux ✓`],
      S`\(x\in[-2,0]\cup[2,\infty)\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -12, ymax: 12 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => 4 * x, color: "green" }], points: [{ x: -2, y: -8, label: "(−2, −8)", color: "red" }, { x: 0, y: 0, color: "red" }, { x: 2, y: 8, label: "(2, 8)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Des bornes obtenues par la technologie", S`Résous \(x^3-3x+1\lt0\). Arrondis les bornes à 2 décimales.`,
      [S`<b>Essaie des zéros exacts.</b> Les candidats sont \(\pm1\), mais \(P(1)=-1\) et \(P(-1)=3\). Il n'y a donc aucun zéro rationnel, et on utilise la technologie.`,
        S`<b>Zéros.</b> La fonction « zéro » donne \(x\approx-1.88\), \(0.35\), \(1.53\).`,
        S`<b>Signes.</b> Un degré 3 avec \(a>0\) commence négatif : \(-,+,-,+\).`,
        S`<b>Vérifie.</b> \(x=1\) : \(-1\lt0\) ✓. \(x=0\) : \(1>0\) ✓`],
      S`\(x\lt-1.88\) ou \(0.35\lt x\lt1.53\) (approximativement)`,
      plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 5 }, curves: [{ f: (x) => x ** 3 - 3 * x + 1, color: "violet" }], points: [{ x: -1.879, y: 0, label: "≈ −1.88", color: "red" }, { x: 0.347, y: 0, label: "≈ 0.35", color: "red" }, { x: 1.532, y: 0, label: "≈ 1.53", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Quand y a-t-il un profit?", S`Le profit d'une entreprise est \(P(x)=-x^3+12x^2-20x\) milliers de dollars pour \(x\) centaines d'articles (\(x\ge0\)). Quand a-t-on \(P(x)>0\)?`,
      [S`<b>Factorise.</b> \(P(x)=-x(x^2-12x+20)=-x(x-2)(x-10)\). Les zéros sont 0, 2 et 10.`,
        S`<b>Signes pour \(x\ge0\).</b> ${tv(["intervalle", "\\(0\\lt x\\lt2\\)", "\\(2\\lt x\\lt10\\)", "\\(x>10\\)"], ["\\(x\\) test", "1", "5", "11"], ["\\(P(x)\\)", "\\(-9\\)", "\\(75\\)", "\\(-99\\)"])}`,
        S`<b>Conclus.</b> Il y a un profit seulement pour \(2\lt x\lt10\).`,
        S`<b>Interprète.</b> \(x\) est en centaines, donc cela signifie entre 200 et 1000 articles.`],
      S`profit pour \(200\lt\) articles \(\lt1000\), c.-à-d. \(2\lt x\lt10\)`,
      plane({ view: { xmin: -0.5, xmax: 11, ymin: -20, ymax: 110 }, curves: [{ f: (x) => -(x ** 3) + 12 * x * x - 20 * x, color: "violet", a: 0, b: 10.8 }], points: [{ x: 2, y: 0, label: "2", color: "red" }, { x: 10, y: 0, label: "10", color: "red" }], step: { x: 1, y: 10 } })],
  ]),

  practice([
    q("lire un graphique", S`Résous \((x+3)(x-1)(x-4)\lt0\).`, choice([S`\(x\lt-3\) ou \(1\lt x\lt4\)`, S`\(-3\lt x\lt1\) ou \(x>4\)`, S`\(1\lt x\lt4\)`, S`\(x\lt4\)`], 0),
      "Degré 3 avec a > 0 : commence sous l'axe.", [S`Signes : −, +, −, +.`], S`\(x\lt-3\) ou \(1\lt x\lt4\)`),
    q("notation", S`Écris \(-2\le x\lt5\) en notation d'intervalle.`, choice([S`\([-2,5)\)`, S`\((-2,5]\)`, S`\([-2,5]\)`, S`\((-2,5)\)`], 0),
      "Crochet = inclus.", ["−2 inclus, 5 exclu."], S`\([-2,5)\)`),
    q("compter les intervalles", S`Combien d'intervalles séparés forment la solution de \(x^4-10x^2+9>0\)?`, num(3),
      "Zéros ±1 et ±3; forme en W.", [S`\((x^2-1)(x^2-9)>0\) : \(x\lt-3\), \(-1\lt x\lt1\), \(x>3\).`], S`\(3\)`),
    q("plus grand entier", S`Quel est le plus grand entier qui vérifie \(x^3\lt8\)?`, num(1),
      "x³ < 8 ⇔ x < 2.", [S`\(x\lt2\), donc \(1\).`], S`\(1\)`),
    q("technologie", S`Le plus petit zéro positif de \(x^3-3x+1\) vaut environ? (2 décimales)`, num(0.35, 0.01),
      "Utilise la fonction « zéro » ou des valeurs test.", [S`\(f(0.3)\approx0.13\), \(f(0.4)\approx-0.14\) : environ \(0.35\).`], S`\(\approx0.35\)`),
  ]),

  ...hard([
    ["Graphiquement et algébriquement", S`Résous \(x^3-2x^2>x-2\).`,
      [S`Réarrange : \(x^3-2x^2-x+2>0\). Groupe : \(x^2(x-2)-(x-2)=(x-2)(x-1)(x+1)\).`, S`Zéros \(-1, 1, 2\); le polynôme de degré 3 (a > 0) est au-dessus de l'axe sur \((-1,1)\) et \((2,\infty)\).`],
      S`\(x\in(-1,1)\cup(2,\infty)\)`,
      plane({ view: { xmin: -2, xmax: 3, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 2 * x * x, color: "violet" }, { f: (x) => x - 2, color: "green" }], points: [{ x: -1, y: -3, label: "(−1, −3)", color: "red" }, { x: 1, y: -1, label: "(1, −1)", color: "red" }, { x: 2, y: 0, label: "(2, 0)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Une boîte assez volumineuse", S`On fabrique une boîte sans couvercle à partir d'une feuille carrée de 20 cm en découpant des carrés de côté \(x\) dans les coins : \(V(x)=x(20-2x)^2\). Pour quelles valeurs de \(x\) a-t-on \(V\ge512\) cm³?`,
      [S`\(4x(10-x)^2=512\Rightarrow x(10-x)^2=128\Rightarrow x^3-20x^2+100x-128=0\).`, S`\(x=2\) convient : \((x-2)(x^2-18x+64)=0\Rightarrow x=9\pm\sqrt{17}\approx4.88\) ou \(13.12\).`, S`Domaine \(0\lt x\lt10\); le graphique est sur la droite 512 ou au-dessus entre \(2\) et \(4.88\).`],
      S`\(2\le x\le9-\sqrt{17}\approx4.88\)`,
      plane({ view: { xmin: -0.3, xmax: 10.3, ymin: -20, ymax: 640 }, curves: [{ f: (x) => x * (20 - 2 * x) ** 2, color: "violet", a: 0, b: 10 }, { f: () => 512, color: "green" }], points: [{ x: 2, y: 512, label: "(2, 512)", color: "red" }, { x: 9 - Math.sqrt(17), y: 512, label: "(4.88, 512)", color: "red" }], step: { x: 1, y: 100 } })],
  ], [
    q("difficile", S`Combien d'entiers vérifient \(x^4-5x^2+4\le0\)?`, num(4),
      "Utilise le graphique en forme de W.", [S`\([-2,-1]\cup[1,2]\) : \(-2,-1,1,2\).`], S`\(4\)`),
    q("difficile", S`Quel est le plus petit entier qui vérifie \(x^3-x^2-4x+4>0\)?`, num(-1),
      "Groupe pour factoriser.", [S`\((x-1)(x-2)(x+2)>0\) : \(-2\lt x\lt1\) ou \(x>2\).`], S`\(-1\)`),
    q("difficile", S`Résous \(x^3\le x\).`, choice([S`\((-\infty,-1]\cup[0,1]\)`, S`\([-1,0]\cup[1,\infty)\)`, S`\([-1,1]\)`, S`\((-\infty,1]\)`], 0),
      "Compare y = x³ avec y = x.", [S`\(x(x-1)(x+1)\le0\).`], S`\((-\infty,-1]\cup[0,1]\)`),
  ]),

  wrapUp({
    qas: [
      ["En quoi la résolution d'une inéquation diffère-t-elle de celle d'une équation?", "Une équation demande où f(x) = 0 (des points); une inéquation demande où f(x) est positive ou négative (les intervalles entre ces points)."],
      ["Pourquoi les abscisses à l'origine sont-elles si importantes?", "Un graphique continu ne peut changer de signe qu'en traversant l'axe des x, donc chaque intervalle entre deux abscisses à l'origine a un seul signe."],
      ["Comment traiter f(x) > g(x)?", "Trouve où les graphiques se rencontrent, puis regarde quel graphique est au-dessus dans chaque intervalle — ou trace f − g et compare avec 0."],
      ["Que se passe-t-il si le graphique touche l'axe?", "En un zéro où le graphique touche l'axe (ordre pair), le signe ne change pas; avec ≥ ou ≤, le point de contact est quand même inclus."],
      ["Quelle précision faut-il pour des bornes approximatives?", "Habituellement deux décimales, écrites avec ≈, à moins que le contexte n'en exige davantage."],
    ],
    summary: [
      "f(x) > 0 : au-dessus de l'axe; f(x) < 0 : en dessous.",
      "Bornes : zéros ou points d'intersection.",
      "( ) stricte, [ ] incluse, ( ) en ±∞.",
      "Ramène tout d'un même côté pour n'avoir qu'un graphique.",
    ],
    next: "La leçon 2.6 résout exactement les inéquations factorisables à l'aide de tableaux de signes.",
  }),
];
