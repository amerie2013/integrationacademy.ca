// MCV4U-FR 3.1 — Fonctions croissantes et décroissantes : le signe de f′ sur des intervalles, les nombres critiques comme
// seuls endroits où le signe peut changer, tableaux de signes, lecture de f à partir du graphique de f′, fonctions
// rationnelles et modèles. Miroir de ../mcv4u-ch3/l3_1.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";
import { chart } from "./csign.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "3.1 Fonctions croissantes et décroissantes";
export const ID = lessonId(3, 1);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "📈",
    title: "Fonctions croissantes et décroissantes",
    overview: S`Une fonction est <strong>croissante</strong> sur un intervalle si son graphique monte de gauche à droite sur cet intervalle, et <strong>décroissante</strong> s'il descend. La dérivée nous dit lequel des deux : là où \(f'(x)\gt0\), chaque tangente monte, donc \(f\) croît; là où \(f'(x)\lt0\), \(f\) décroît. Pour un polynôme, \(f'\) ne peut changer de signe que là où \(f'(x)=0\); on trouve donc ces <strong>nombres critiques</strong>, on découpe la droite numérique à ces endroits et on teste une valeur dans chaque morceau. Le résultat — un <strong>tableau de signes</strong> — est la colonne vertébrale de chaque esquisse de courbe de ce chapitre.`,
    goals: [
      "relier le signe de f′ aux intervalles où f est croissante ou décroissante;",
      "trouver les nombres critiques et construire un tableau de signes de f′;",
      "énoncer les intervalles de croissance et de décroissance;",
      "décrire f à partir du graphique de f′;",
      "appliquer le test aux fonctions rationnelles et aux modèles.",
    ],
    curriculum: "B1.1 (décrire les caractéristiques clés d'une fonction polynomiale à partir de sa dérivée), B1.2 (déterminer les intervalles de croissance et de décroissance à l'aide de la dérivée première)",
    prior: [
      [S`Dérivée de \(x^3-12x\)?`, S`\(3x^2-12\).`],
      [S`Résous \(3x^2-12=0\).`, S`\(x=\pm2\).`],
      [S`\(f'(0)\) est-il positif ou négatif pour \(f'(x)=3x^2-12\)?`, S`Négatif : \(-12\).`],
    ],
    words: [
      ["Croissante", "\\(f(x_1)\\lt f(x_2)\\) chaque fois que \\(x_1\\lt x_2\\)", "le graphique monte"],
      ["Décroissante", "\\(f(x_1)\\gt f(x_2)\\) chaque fois que \\(x_1\\lt x_2\\)", "le graphique descend"],
      ["Nombre critique", "une valeur c du domaine où \\(f'(c)=0\\) ou \\(f'(c)\\) n'existe pas", ""],
      ["Tableau de signes", "une droite numérique qui montre le signe de \\(f'\\) sur chaque intervalle", ""],
    ],
  }),

  section("📌 Le signe de f′ donne la direction", S`
  ${table(["Sur un intervalle…", "le graphique de f…", "les tangentes…"], [
    ["\\(f'(x)\\gt0\\)", "croît (monte)", "montent"],
    ["\\(f'(x)\\lt0\\)", "décroît (descend)", "descendent"],
    ["\\(f'(x)=0\\) en un point", "peut tourner, ou seulement s'aplatir", "horizontale"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -18, ymax: 18 }, curves: [{ f: (x) => x ** 3 - 12 * x + 1, a: -4, b: -2, color: "green" }, { f: (x) => x ** 3 - 12 * x + 1, a: -2, b: 2, color: "red" }, { f: (x) => x ** 3 - 12 * x + 1, a: 2, b: 4, color: "green" }, { f: (x) => 3 * x * x - 12, color: "blue" }], points: [{ x: -2, y: 17, label: "(−2, 17)", color: "violet" }, { x: 2, y: -15, label: "(2, −15)", color: "violet" }], step: { x: 1, y: 3 } }, "f(x) = x³ − 12x + 1 : en vert là où f′ > 0, en rouge là où f′ < 0. Le graphique bleu est celui de f′(x) = 3x² − 12.")}
  ${keyIdea(S`Si \(f'(x)\gt0\) pour tout \(x\) d'un intervalle, \(f\) y est croissante; si \(f'(x)\lt0\), \(f\) y est décroissante. Pour trouver les intervalles : (1) trouve \(f'\); (2) résous \(f'(x)=0\) (et trouve où \(f'\) n'est pas définie); (3) teste une valeur dans chaque intervalle.`)}`),

  section("📌 Explore", S`<p>Modifie les coefficients de la fonction cubique. Le graphique devient vert là où \(f'\gt0\) et rouge là où \(f'\lt0\); la courbe bleue pointillée est \(f'\). Remarque que la couleur ne change qu'à un zéro de \(f'\) — et que certaines cubiques ne changent jamais de couleur.</p>`),

  widget("monotonicityLab", { init: [-1, 0, 3, 1] }),

  section("📌 Construire un tableau de signes", S`
  <p>Factorise \(f'\) complètement, marque ses zéros sur une droite numérique et teste chaque intervalle à l'aide d'une valeur commode. Écris les intervalles avec des parenthèses : en un nombre critique, la fonction ne monte ni ne descend.</p>
  ${watchOut([
    "Teste le signe de f′, pas celui de f : une fonction peut être négative et quand même croissante.",
    "Un zéro de f′ ne change pas toujours le signe : f′(x) = 3x² pour f = x³ n'est jamais négative.",
    "Pour les fonctions rationnelles, découpe aussi la droite numérique aux asymptotes verticales.",
    "Utilise des parenthèses et ne réunis pas avec ∪ des intervalles séparés par un nombre critique comme s'ils formaient un seul morceau.",
    "Croissante/décroissante décrit des intervalles de x, pas des valeurs de y.",
  ])}`),

  examples([
    ["Une fonction cubique", S`Trouve les intervalles de croissance et de décroissance de \(f(x)=x^3-12x+1\).`,
      [S`<b>Règle.</b> \(f\) est croissante là où \(f'(x)\gt0\) et décroissante là où \(f'(x)\lt0\). Une dérivée polynomiale \(f'\) est continue, donc elle ne peut changer de signe qu'à ses zéros. Trouve ces zéros, puis teste une valeur dans chaque intervalle.`,
        S`<b>Dérive et factorise.</b> \(f'(x)=3x^2-12=3(x^2-4)=3(x-2)(x+2)\).`,
        S`<b>Nombres critiques.</b> \(f'(x)=0\) lorsque \(x=-2\) ou \(x=2\). Ils découpent la droite numérique en trois intervalles : \(x\lt-2\), \(-2\lt x\lt2\) et \(x\gt2\).`,
        S`<b>Tableau de signes.</b> Le signe de chaque facteur dans chaque intervalle donne le signe de \(f'\). La constante 3 est toujours positive. ${chart({ cuts: [[-2, "-2"], [2, "2"]], factors: [["x+2", (x) => x + 2], ["x-2", (x) => x - 2]], d: ["f'(x)", (x) => 3 * x * x - 12] })}`,
        S`<b>Vérifie avec des valeurs de \(f\).</b> \(f(-3)=10\) et \(f(-2)=17\) : les valeurs augmentent ✓. \(f(-2)=17\), \(f(0)=1\), \(f(2)=-15\) : elles diminuent ✓. \(f(3)=-8\) est au-dessus de \(-15\) : la fonction remonte ✓`],
      S`croissante sur \((-\infty,-2)\) et \((2,\infty)\); décroissante sur \((-2,2)\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -20, ymax: 22 }, curves: [{ f: (x) => x ** 3 - 12 * x + 1, color: "violet" }, { f: (x) => 3 * x * x - 12, color: "blue" }], points: [{ x: -2, y: 17, label: "(−2, 17)", color: "red" }, { x: 2, y: -15, label: "(2, −15)", color: "red" }, { x: -2, y: 0, color: "blue" }, { x: 2, y: 0, color: "blue" }], step: { x: 1, y: 4 } }, "violet : f; bleu : f′. f monte exactement là où le graphique bleu est au-dessus de l'axe des x.")],
    ["Une fonction du quatrième degré", S`Trouve les intervalles de croissance et de décroissance de \(f(x)=x^4-8x^2\).`,
      [S`<b>Plan.</b> Trouve \(f'\), factorise-la complètement et construis un tableau de signes. Chaque changement de signe de \(f'\) est un changement de direction de \(f\).`,
        S`<b>Dérive et factorise.</b> \(f'(x)=4x^3-16x=4x(x^2-4)=4x(x-2)(x+2)\).`,
        S`<b>Nombres critiques.</b> \(x=-2\), \(x=0\) et \(x=2\) : quatre intervalles à tester.`,
        S`<b>Tableau de signes.</b> ${chart({ cuts: [[-2, "-2"], [0, "0"], [2, "2"]], factors: [["x+2", (x) => x + 2], ["x", (x) => x], ["x-2", (x) => x - 2]], d: ["f'(x)", (x) => 4 * x ** 3 - 16 * x] })}`,
        S`<b>Valeurs aux changements de direction.</b> \(f(-2)=16-32=-16\), \(f(0)=0\), \(f(2)=-16\).`,
        S`<b>Vérifie par symétrie.</b> \(f(-x)=f(x)\), donc \(f\) est paire et son graphique est symétrique par rapport à l'axe des y. La réflexion échange montée et descente, ce que montre exactement le tableau : \(-,+\) à gauche et \(-,+\) en miroir à droite ✓`],
      S`décroissante sur \((-\infty,-2)\) et \((0,2)\); croissante sur \((-2,0)\) et \((2,\infty)\)`,
      plane({ view: { xmin: -3.2, xmax: 3.2, ymin: -18, ymax: 10 }, curves: [{ f: (x) => x ** 4 - 8 * x * x, color: "violet" }], points: [{ x: -2, y: -16, label: "(−2, −16)", color: "red" }, { x: 0, y: 0, label: "(0, 0)", color: "red" }, { x: 2, y: -16, label: "(2, −16)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Lire le graphique de f′", S`Le graphique de \(f'(x)=(x+1)(x-3)\) est illustré. Où \(f\) est-elle croissante, et où \(f\) change-t-elle de direction?`,
      [S`<b>Ce que montre le graphique.</b> C'est le graphique de la <em>dérivée</em>. Sa hauteur en chaque \(x\) est la pente de \(f\) à cet endroit. Au-dessus de l'axe des x, \(f'\gt0\), donc \(f\) monte; en dessous, \(f\) descend.`,
        S`<b>Lis les zéros.</b> Le graphique bleu coupe l'axe des x en \(x=-1\) et \(x=3\). Ce sont les nombres critiques de \(f\).`,
        S`<b>Lis les signes.</b> ${chart({ cuts: [[-1, "-1"], [3, "3"]], d: ["f'(x)", (x) => (x + 1) * (x - 3)] })}`,
        S`<b>Interprète les changements de signe.</b> En \(x=-1\), \(f'\) passe de \(+\) à \(-\) : \(f\) cesse de monter et commence à descendre, donc elle a un maximum relatif. En \(x=3\), \(f'\) passe de \(-\) à \(+\) : un minimum relatif.`,
        S`<b>Vérifie avec une fonction \(f\) possible.</b> \(f(x)=\tfrac13x^3-x^2-3x\) a \(f'(x)=x^2-2x-3=(x+1)(x-3)\) ✓. Dans la figure (violet), elle atteint un sommet en \(x=-1\) et un creux en \(x=3\) ✓`],
      S`croissante sur \((-\infty,-1)\) et \((3,\infty)\); maximum relatif en \(x=-1\), minimum relatif en \(x=3\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -10, ymax: 6 }, curves: [{ f: (x) => (x + 1) * (x - 3), color: "blue" }, { f: (x) => x ** 3 / 3 - x * x - 3 * x, color: "violet" }], points: [{ x: -1, y: 0, label: "−1", color: "red" }, { x: 3, y: 0, label: "3", color: "red" }, { x: -1, y: 5 / 3, label: "max", color: "green" }, { x: 3, y: -9, label: "min", color: "green" }], step: { x: 1, y: 2 } }, "bleu : la dérivée f′ donnée; violet : une fonction f qui a cette dérivée")],
    ["Une fonction rationnelle", S`Trouve les intervalles de croissance et de décroissance de \(f(x)=\dfrac{x}{x^2+4}\).`,
      [S`<b>D'abord le domaine.</b> \(x^2+4\ge4\) n'est jamais 0, donc le domaine est l'ensemble des nombres réels et il n'y a aucune asymptote verticale où découper.`,
        S`<b>Règle du quotient.</b> \(f'(x)=\dfrac{(1)(x^2+4)-x(2x)}{(x^2+4)^2}=\dfrac{4-x^2}{(x^2+4)^2}=\dfrac{(2-x)(2+x)}{(x^2+4)^2}\).`,
        S`<b>Quelle partie décide du signe?</b> Le dénominateur est le carré d'un nombre positif, donc il est toujours positif. Le signe de \(f'\) est celui de \((2-x)(2+x)\). Nombres critiques : \(x=\pm2\).`,
        S`<b>Tableau de signes.</b> ${chart({ cuts: [[-2, "-2"], [2, "2"]], factors: [["2+x", (x) => 2 + x], ["2-x", (x) => 2 - x], ["(x^2+4)^2", (x) => (x * x + 4) ** 2]], d: ["f'(x)", (x) => (4 - x * x) / (x * x + 4) ** 2] })}`,
        S`<b>Valeurs aux changements de direction.</b> \(f(2)=\tfrac{2}{8}=\tfrac14\) et \(f(-2)=-\tfrac14\).`,
        S`<b>Vérifie.</b> \(f(1)=\tfrac15=0.2\) est entre \(f(0)=0\) et \(f(2)=0.25\) : la fonction monte ✓. \(f(4)=\tfrac{4}{20}=0.2\lt0.25\) : elle descend après 2 ✓`],
      S`croissante sur \((-2,2)\); décroissante sur \((-\infty,-2)\) et \((2,\infty)\)`,
      plane({ view: { xmin: -8, xmax: 8, ymin: -0.4, ymax: 0.4 }, curves: [{ f: (x) => x / (x * x + 4), color: "violet" }], points: [{ x: 2, y: 0.25, label: "(2, ¼)", color: "red" }, { x: -2, y: -0.25, label: "(−2, −¼)", color: "red" }, { x: 4, y: 0.2, label: "(4, 0.2)", color: "amber" }], step: { x: 1, y: 0.1 } })],
    ["Un modèle de population", S`Un troupeau compte \(P(t)=-t^3+9t^2+48t+500\) animaux après \(t\) années, \(0\le t\le12\). Quand grandit-il, et quand diminue-t-il?`,
      [S`<b>Signification.</b> \(P'(t)\) est le taux de croissance en animaux par année. Le troupeau grandit là où \(P'(t)\gt0\) et diminue là où \(P'(t)\lt0\).`,
        S`<b>Dérive et factorise.</b> \(P'(t)=-3t^2+18t+48=-3(t^2-6t-16)=-3(t-8)(t+2)\).`,
        S`<b>Utilise le domaine.</b> Les zéros sont \(t=8\) et \(t=-2\), mais \(t=-2\) est en dehors de \(0\le t\le12\). Seul \(t=8\) découpe le domaine.`,
        S`<b>Tableau de signes.</b> ${chart({ v: "t", f: "P", from: [0, "0"], to: [12, "12"], cuts: [[8, "8"]], d: ["P'(t)", (t) => -3 * t * t + 18 * t + 48] })}`,
        S`<b>Vérifie avec une table de valeurs.</b> ${tv(["\\(t\\)", "0", "4", "8", "10", "12"], ["\\(P(t)\\)", "500", "772", "948", "880", "644"])} Les valeurs augmentent jusqu'à \(t=8\) et diminuent ensuite ✓`],
      S`il grandit pour \(0\le t\lt8\) et diminue pour \(8\lt t\le12\); le plus grand troupeau compte 948 animaux en \(t=8\)`,
      plane({ view: { xmin: 0, xmax: 12.5, ymin: 400, ymax: 1100 }, curves: [{ f: (t) => -(t ** 3) + 9 * t * t + 48 * t + 500, a: 0, b: 12, color: "violet" }], points: [{ x: 8, y: 948, label: "(8, 948)", color: "red" }, { x: 0, y: 500, label: "(0, 500)", color: "amber" }, { x: 12, y: 644, label: "(12, 644)", color: "amber" }], step: { x: 1, y: 100 }, xlabel: "t", ylabel: "P" })],
  ]),

  practice([
    q("intervalle", S`\(f(x)=x^2-6x\) est décroissante pour \(x\lt a\). Trouve \(a\).`, num(3),
      "f′(x) = 2x − 6.", [S`\(2x-6\lt0\iff x\lt3\).`], S`\(3\)`),
    q("tableau de signes", S`Où \(f(x)=2x^3-6x\) est-elle croissante?`, choice([S`\(x\lt-1\) ou \(x\gt1\)`, S`\(-1\lt x\lt1\)`, S`\(x\gt0\) seulement`, S`partout`], 0),
      "f′(x) = 6x² − 6.", [S`\(6(x-1)(x+1)\gt0\) à l'extérieur de \([-1,1]\).`], S`\(x\lt-1\) ou \(x\gt1\)`),
    q("compte", S`Sur combien d'intervalles distincts \(f(x)=x^3-3x^2\) est-elle croissante?`, num(2),
      "f′(x) = 3x(x − 2).", [S`Positive sur \((-\infty,0)\) et \((2,\infty)\).`], S`\(2\)`),
    q("toujours", S`Décris \(f(x)=x^3+3x\).`, choice(["croissante partout", "décroissante partout", "croissante, puis décroissante", "décroissante, puis croissante"], 0),
      "Regarde le signe de f′.", [S`\(f'(x)=3x^2+3\gt0\) pour tout \(x\).`], "croissante partout"),
    q("changement", S`Pour quelle valeur positive de \(x\) la fonction \(f(x)=x^3-27x\) passe-t-elle de décroissante à croissante?`, num(3),
      "f′(x) = 3x² − 27.", [S`\(x^2=9\).`], S`\(3\)`),
  ]),

  ...hard([
    ["Toujours croissante", S`Pour quelles valeurs de \(k\) la fonction \(f(x)=x^3-kx^2+3x\) est-elle croissante pour tout \(x\)?`,
      [S`\(f'(x)=3x^2-2kx+3\) ne doit jamais être négative.`, S`Une fonction quadratique ouverte vers le haut n'est jamais négative lorsque son discriminant est au plus 0 : \(4k^2-36\le0\).`, S`Donc \(k^2\le9\).`],
      S`\(-3\le k\le3\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -4, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 3 * x, color: "violet" }, { f: (x) => x ** 3 - 5 * x * x + 3 * x, color: "amber" }], points: [{ x: 1, y: 1, label: "k = 3 : s'aplatit en (1, 1)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Une fonction à partir de son tableau de signes", S`Trouve une fonction cubique telle que \(f(0)=1\), \(f'\gt0\) pour \(x\lt-1\) et \(x\gt2\), et \(f'\lt0\) sur \((-1,2)\).`,
      [S`Choisis \(f'(x)=6(x+1)(x-2)=6x^2-6x-12\).`, S`Applique la règle de la puissance à l'envers : \(f(x)=2x^3-3x^2-12x+C\), et \(f(0)=1\) donne \(C=1\).`],
      S`par exemple \(f(x)=2x^3-3x^2-12x+1\)`,
      plane({ view: { xmin: -3, xmax: 4, ymin: -22, ymax: 12 }, curves: [{ f: (x) => 2 * x ** 3 - 3 * x * x - 12 * x + 1, color: "violet" }], points: [{ x: -1, y: 8, label: "(−1, 8)", color: "red" }, { x: 2, y: -19, label: "(2, −19)", color: "red" }, { x: 0, y: 1, label: "(0, 1)", color: "blue" }], step: { x: 1, y: 4 } })],
  ], [
    q("difficile", S`\(f(x)=x^4-8x^3\) est décroissante pour tout \(x\lt a\). Trouve \(a\).`, num(6),
      "f′(x) = 4x²(x − 6); le zéro en 0 ne change pas le signe.", [S`\(f'\lt0\) pour \(x\lt6\), \(x\ne0\).`], S`\(6\)`),
    q("difficile", S`\(f(x)=x+\dfrac4x\) est décroissante sur \((0,b)\). Trouve \(b\).`, num(2),
      "f′(x) = 1 − 4/x².", [S`\(1-\frac4{x^2}\lt0\iff x^2\lt4\).`], S`\(2\)`),
    q("difficile", S`Quelle est la plus grande valeur de \(k\) pour laquelle \(f(x)=x^3-kx\) est croissante pour tout \(x\)?`, num(0),
      "f′(x) = 3x² − k ≥ 0 pour tout x.", [S`Il faut \(-k\ge0\).`], S`\(0\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi tester une seule valeur par intervalle?", "Une dérivée polynomiale f′ est continue, donc elle ne peut pas changer de signe sans passer par 0; entre deux zéros consécutifs, son signe est constant."],
      ["f est-elle croissante en un nombre critique?", "On exclut les nombres critiques : les intervalles sont ouverts. En x = c, la tangente est horizontale."],
      ["f peut-elle être croissante alors que ses valeurs sont négatives?", "Oui. Croissante décrit la direction, pas la hauteur : f(x) = x sur (−5, −1) est négative et croissante."],
      ["Qu'est-ce qui change pour les fonctions rationnelles?", "Découpe aussi la droite numérique aux asymptotes verticales : le signe de f′ peut y changer même si f′ n'est jamais 0."],
      ["En quoi cela aide-t-il à esquisser?", "Le tableau de signes montre où le graphique monte, où il descend et où il tourne — le squelette de l'esquisse."],
    ],
    summary: [
      "f′ > 0 ⇒ f croissante; f′ < 0 ⇒ f décroissante.",
      "Nombres critiques : f′ = 0 ou f′ non définie.",
      "Teste une valeur dans chaque intervalle.",
      "Fonctions rationnelles : découpe aussi aux asymptotes.",
    ],
    next: "La section 3.2 utilise le tableau de signes pour trouver les maximums et les minimums.",
  }),
];
