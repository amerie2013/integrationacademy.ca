// MCV4U-FR 3.7 — Révision du chapitre 3 : croissance/décroissance, extremums, concavité, fonctions rationnelles,
// esquisses complètes et optimisation, avec des exemples en plusieurs étapes, des exercices variés, une liste de
// vérification et un niveau difficile. Miroir de ../mcv4u-ch3/l3_7.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, hard, plane, rat } from "./lib.mjs";
import { chart } from "./csign.mjs";
import { dia, field, box, can, poster } from "./diagrams.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "3.7 Révision du chapitre 3";
export const ID = lessonId(3, 7);

const S = String.raw;
const VQ = { xmin: -6, xmax: 6, ymin: -6, ymax: 10 };
export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 3 — Esquisse de courbes",
    overview: S`Cette page rassemble le chapitre avant l'évaluation. La dérivée première indique où un graphique monte, où il descend et où il change de direction; la dérivée seconde indique comment il se courbe; les asymptotes et les intersections avec les axes fixent sa position; et les mêmes outils trouvent la meilleure valeur dans un problème d'optimisation. Chaque exemple ci-dessous combine plusieurs de ces idées — essaie-le avant de lire la solution, et utilise l'explorateur pour reconstruire les esquisses étape par étape.`,
    goals: [
      "te rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "trouver ensemble les intervalles, les extremums, la concavité et les points d'inflexion;",
      "trouver les extremums absolus sur un intervalle fermé;",
      "esquisser des fonctions polynomiales et rationnelles à partir de leurs caractéristiques;",
      "poser et résoudre des problèmes d'optimisation.",
    ],
    curriculum: "B1.1–B1.5, B2.4, B2.5 (tout le chapitre)",
    prior: [
      [S`\(f'\gt0\) sur un intervalle signifie…`, S`\(f\) y est croissante.`],
      [S`\(f''\lt0\) signifie…`, S`concave vers le bas.`],
      [S`Où sont les asymptotes verticales d'une fonction rationnelle?`, S`Aux zéros du dénominateur (qui ne s'annulent pas avec le numérateur).`],
    ],
    words: [
      ["Nombre critique", "\\(f'(c)=0\\) ou \\(f'(c)\\) n'existe pas", ""],
      ["Point d'inflexion", "là où la concavité change", "\\(f''\\) change de signe"],
      ["Extremum absolu", "la plus grande ou la plus petite valeur sur le domaine", "vérifier les bornes"],
      ["Contrainte", "la condition qui relie les variables", "aire fixe, volume fixe"],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple", "Attention"], [
    ["3.1 Croissante/décroissante", "signe de f′ sur des intervalles", "x³ − 27x : décroît sur (−3, 3)", "teste f′, pas f"],
    ["3.2 Maximums et minimums", "test de la dérivée première; bornes", "x² − 2x sur [0, 3] : max 3", "f′(c) = 0 ne suffit pas"],
    ["3.3 Concavité", "signe de f″; test de la dérivée seconde", "x³ : inflexion en 0", "f″(c) = 0 ne suffit pas"],
    ["3.4 Fonctions rationnelles", "asymptotes + f′ + f″", "(x + 2)/(x − 1) : x = 1, y = 1", "découpe aux asymptotes"],
    ["3.5 Esquisses complètes", "un seul tableau pour tous les signes", "étiquette chaque point clé", "vérifie le comportement aux extrémités"],
    ["3.6 Optimisation", "une variable, un domaine, une justification", "périmètre 40 : 10 × 10", "réponds à la question posée"],
  ])),

  section("📌 Explore", S`<p>Utilise l'outil d'esquisse de courbes pour reconstruire des esquisses étape par étape : déplace le curseur des étapes des intersections avec les axes jusqu'à la courbe finale, et vérifie chaque couche avec ton propre travail.</p>`),

  widget("curveSketcher", { init: { cs: [1, -2, -1, 2, 0], step: 2 } }),

  section("📌 La vue d'ensemble", keyIdea(S`\(f\) donne les points, \(f'\) donne la direction (monte, descend, change de direction), \(f''\) donne la courbure (tasse, chapeau, inflexion). Les asymptotes et le comportement aux extrémités encadrent l'image. L'optimisation, c'est la même analyse appliquée à une fonction construite à partir d'une situation réelle.`)),

  examples([
    ["Intervalles, extremums et inflexion ensemble", S`Pour \(f(x)=x^3-9x^2+24x-10\), trouve les intervalles de croissance et de décroissance, les extremums relatifs, la concavité et le point d'inflexion.`,
      [S`<b>Dérivée première.</b> \(f'(x)=3x^2-18x+24=3(x^2-6x+8)=3(x-2)(x-4)\). Nombres critiques 2 et 4. ${chart({ cuts: [[2, "2"], [4, "4"]], d: ["f'(x)", (x) => 3 * x * x - 18 * x + 24] })}`,
        S`<b>Valeurs extrêmes.</b> \(f(2)=8-36+48-10=10\) (max. relatif) et \(f(4)=64-144+96-10=6\) (min. relatif).`,
        S`<b>Dérivée seconde.</b> \(f''(x)=6x-18=6(x-3)\). ${chart({ kind: "conc", cuts: [[3, "3"]], d: ["f''(x)", (x) => 6 * x - 18] })}`,
        S`<b>Point d'inflexion.</b> \(f(3)=27-81+72-10=8\), donc \((3,8)\).`,
        S`<b>Vérifie.</b> Pour une fonction cubique, le point d'inflexion est le point milieu du max et du min : \(\left(\tfrac{2+4}{2},\tfrac{10+6}{2}\right)=(3,8)\) ✓. De plus, \(f''(2)=-6\lt0\) (chapeau au max) et \(f''(4)=6\gt0\) (tasse au min) ✓`],
      S`croissante sur \((-\infty,2)\) et \((4,\infty)\), décroissante sur \((2,4)\); max \((2,10)\), min \((4,6)\); concave vers le bas pour \(x\lt3\), vers le haut pour \(x\gt3\); inflexion \((3,8)\)`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 16 }, curves: [{ f: (x) => x ** 3 - 9 * x * x + 24 * x - 10, color: "violet" }], points: [{ x: 2, y: 10, label: "max (2, 10)", color: "red" }, { x: 4, y: 6, label: "min (4, 6)", color: "blue" }, { x: 3, y: 8, label: "inflexion (3, 8)", color: "violet" }], step: { x: 0.5, y: 2 } })],
    ["Extremums absolus", S`Trouve les extremums absolus de \(f(x)=x^4-18x^2\) sur \([-1,4]\).`,
      [S`<b>Méthode.</b> \(f\) est continue sur l'intervalle fermé \([-1,4]\); compare donc \(f\) aux bornes et aux nombres critiques à l'intérieur de l'intervalle.`,
        S`<b>Nombres critiques.</b> \(f'(x)=4x^3-36x=4x(x^2-9)=4x(x-3)(x+3)\) : \(x=0,\ \pm3\). Seuls \(0\) et \(3\) sont dans \([-1,4]\); \(-3\) est exclu.`,
        S`<b>Évalue les candidats.</b> ${tv(["\\(x\\)", "\\(-1\\) (borne)", "\\(0\\) (critique)", "\\(3\\) (critique)", "\\(4\\) (borne)"], ["\\(f(x)\\)", "\\(1-18=-17\\)", "\\(0\\)", "\\(81-162=-81\\)", "\\(256-288=-32\\)"])}`,
        S`<b>Compare.</b> La plus grande : 0 en \(x=0\). La plus petite : \(-81\) en \(x=3\).`,
        S`<b>Vérifie.</b> Entre les candidats, \(f\) varie dans un seul sens; par exemple, sur \((0,3)\), \(f'(1)=-32\lt0\), donc \(f\) descend de 0 à \(-81\) et ne peut pas sortir de cet intervalle de valeurs ✓`],
      S`maximum absolu 0 en \(x=0\); minimum absolu \(-81\) en \(x=3\)`,
      plane({ view: { xmin: -1.5, xmax: 4.5, ymin: -90, ymax: 15 }, curves: [{ f: (x) => x ** 4 - 18 * x * x, a: -1, b: 4, color: "violet" }], points: [{ x: -1, y: -17, label: "(−1, −17)", color: "amber" }, { x: 0, y: 0, label: "max (0, 0)", color: "green" }, { x: 3, y: -81, label: "min (3, −81)", color: "red" }, { x: 4, y: -32, label: "(4, −32)", color: "amber" }], step: { x: 1, y: 10 } }, "Seule la partie sur [−1, 4] est tracée.")],
    ["Une esquisse de fonction rationnelle", S`Esquisse \(f(x)=\dfrac{3x^2}{x^2-4}\).`,
      [S`<b>Asymptotes, symétrie, intersection.</b> \(x^2-4=0\) en \(x=\pm2\) (numérateur \(12\ne0\)) : asymptotes verticales. Degrés égaux : \(y=\tfrac31=3\). \(f(-x)=f(x)\) : paire. \(f(0)=0\).`,
        S`<b>Dérivée.</b> \(f'(x)=\dfrac{6x(x^2-4)-3x^2(2x)}{(x^2-4)^2}=\dfrac{-24x}{(x^2-4)^2}\).`,
        S`<b>Tableau de signes.</b> ${chart({ cuts: [[-2, "-2"], [0, "0"], [2, "2"]], undef: [-2, 2], d: ["f'(x)", (x) => (-24 * x) / (x * x - 4) ** 2], tests: [-3, -1, 1, 3] })} Maximum relatif \((0,0)\).`,
        S`<b>Où se trouvent les branches.</b> \(f(1)=\tfrac{3}{-3}=-1\) : la branche du milieu est sous l'axe des x et plonge vers \(-\infty\) aux deux asymptotes. \(f(3)=\tfrac{27}{5}=5.4\gt3\) : les branches extérieures descendent de \(+\infty\) vers \(y=3\) par le haut.`,
        S`<b>Vérifie.</b> \(f(10)=\tfrac{300}{96}=3.125\), juste au-dessus de 3 ✓. Symétrie : \(f(-3)=f(3)=5.4\) ✓`],
      S`asymptotes \(x=\pm2\), \(y=3\); maximum relatif \((0,0)\); branches extérieures au-dessus de \(y=3\), branche du milieu sous 0`,
      plane({ view: VQ, curves: rat((x) => (3 * x * x) / (x * x - 4), [-2, 2], VQ), vlines: [{ x: -2, color: "red", dash: true }, { x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [{ x: 0, y: 0, label: "max (0, 0)", color: "green" }, { x: 3, y: 5.4, label: "(3, 5.4)", color: "amber" }, { x: 1, y: -1, label: "(1, −1)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Quand le test de la dérivée seconde échoue", S`Classe les points critiques de \(f(x)=x^4-8x^3+18x^2\) et trouve ses points d'inflexion.`,
      [S`<b>Nombres critiques.</b> \(f'(x)=4x^3-24x^2+36x=4x(x^2-6x+9)=4x(x-3)^2\) : \(x=0\) et \(x=3\).`,
        S`<b>Test de la dérivée seconde.</b> \(f''(x)=12x^2-48x+36=12(x-1)(x-3)\). ${tv(["\\(c\\)", "\\(f''(c)\\)", "verdict"], ["0", "36 > 0", "min. relatif"], ["3", "0", "le test échoue"])}`,
        S`<b>Test de la dérivée première en 3.</b> ${chart({ cuts: [[0, "0"], [3, "3"]], factors: [["x", (x) => x], ["(x-3)^2", (x) => (x - 3) ** 2]], d: ["f'(x)", (x) => 4 * x * (x - 3) ** 2] })} Le facteur au carré garde \(f'\gt0\) des deux côtés de 3 : aucun extremum à cet endroit.`,
        S`<b>Points d'inflexion.</b> ${chart({ kind: "conc", cuts: [[1, "1"], [3, "3"]], d: ["f''(x)", (x) => 12 * x * x - 48 * x + 36] })} \(f(1)=1-8+18=11\) et \(f(3)=81-216+162=27\).`,
        S`<b>Vérifie.</b> \(f(0)=0\) et \(f(x)=x^2(x^2-8x+18)=x^2\left((x-4)^2+2\right)\ge0\), donc \((0,0)\) est en fait le point le plus bas ✓. En \((3,27)\), la tangente est horizontale et la concavité change : un point d'inflexion à tangente horizontale.`],
      S`minimum \((0,0)\); aucun extremum en \(x=3\); points d'inflexion \((1,11)\) et \((3,27)\) (le second à tangente horizontale)`,
      plane({ view: { xmin: -1, xmax: 4.5, ymin: -3, ymax: 40 }, curves: [{ f: (x) => x ** 4 - 8 * x ** 3 + 18 * x * x, color: "violet" }], points: [{ x: 0, y: 0, label: "min (0, 0)", color: "blue" }, { x: 1, y: 11, label: "(1, 11)", color: "violet" }, { x: 3, y: 27, label: "inflexion à tangente horizontale (3, 27)", color: "violet" }], lines: [{ m: 0, b: 27, color: "gray", dash: true }], step: { x: 0.5, y: 5 } })],
    ["Une affiche avec des marges", S`Une affiche a des marges de 6 cm en haut et en bas et de 4 cm sur les côtés, autour de 384 cm² de zone imprimée. Trouve les dimensions de la plus petite affiche.`,
      [S`<b>Fais un schéma et nomme les variables.</b> Soit \(x\) la largeur de la zone imprimée. Sa hauteur est \(\tfrac{384}{x}\), car l'aire imprimée est 384. ${dia(poster(), "L'affiche ajoute 4 + 4 = 8 cm à la largeur et 6 + 6 = 12 cm à la hauteur.")}`,
        S`<b>Objectif.</b> Aire de l'affiche \(A(x)=(x+8)\left(\tfrac{384}{x}+12\right)=384+12x+\tfrac{3072}{x}+96=480+12x+\tfrac{3072}{x}\), \(x\gt0\).`,
        S`<b>Nombre critique.</b> \(A'(x)=12-\tfrac{3072}{x^2}=0\Rightarrow x^2=256\Rightarrow x=16\).`,
        S`<b>Minimum?</b> \(A''(x)=\tfrac{6144}{x^3}\gt0\) pour \(x\gt0\) : une tasse, donc \(x=16\) est le minimum absolu.`,
        S`<b>Dimensions.</b> Zone imprimée \(16\times\tfrac{384}{16}=16\times24\); affiche \((16+8)\times(24+12)=24\times36\), aire 864 cm².`,
        S`<b>Vérifie.</b> \(A(12)=480+144+256=880\) et \(A(20)=480+240+153.6=873.6\), toutes deux supérieures à 864 ✓`],
      S`24 cm de largeur sur 36 cm de hauteur`,
      plane({ view: { xmin: 0, xmax: 50, ymin: 600, ymax: 1400 }, curves: [{ f: (x) => 480 + 12 * x + 3072 / x, a: 4, b: 50, color: "violet" }], points: [{ x: 16, y: 864, label: "min (16, 864)", color: "red" }], step: { x: 5, y: 100 }, xlabel: "x (cm)", ylabel: "A (cm²)" })],
  ]),

  practice([
    q("décroissante", S`\(f(x)=x^2-10x+1\) est décroissante pour \(x\lt a\). Trouve \(a\).`, num(5),
      "f′(x) = 2x − 10.", [S`\(x\lt5\).`], S`\(5\)`),
    q("min. relatif", S`Trouve la valeur du minimum relatif de \(f(x)=x^3-3x+1\).`, num(-1),
      "f′ = 3x² − 3 : min en x = 1.", [S`\(f(1)=1-3+1\).`], S`\(-1\)`),
    q("inflexion", S`En quelle valeur de \(x\) la fonction \(f(x)=2x^3-12x^2\) a-t-elle un point d'inflexion?`, num(2),
      "f″(x) = 12x − 24.", [S`\(x=2\).`], S`\(2\)`),
    q("asymptote", S`Trouve l'asymptote horizontale de \(f(x)=\dfrac{5x^2+1}{x^2-3}\) : \(y=\,?\)`, num(5),
      "Degrés égaux.", [S`\(\frac51\).`], S`\(5\)`),
    q("optimisation", S`Deux nombres positifs ont un produit de 64. Trouve la plus petite somme possible.`, num(16),
      "S = x + 64/x.", [S`\(x=8\) : \(8+8\).`], S`\(16\)`),
  ]),

  section("📌 Suis-je prêt ou prête pour l'évaluation?", S`<ul style="list-style:none;padding-left:0;">
    ${[
      ["3.1", "Je peux trouver les intervalles de croissance et de décroissance à partir d'un tableau de signes de f′."],
      ["3.2", "Je peux classer les points critiques et trouver les extremums absolus sur un intervalle fermé."],
      ["3.3", "Je peux trouver les intervalles de concavité et les points d'inflexion, et utiliser le test de la dérivée seconde."],
      ["3.4", "Je peux trouver les asymptotes d'une fonction rationnelle et l'esquisser."],
      ["3.5", "Je peux produire une esquisse de courbe complète et étiquetée, et associer f, f′ et f″."],
      ["3.6", "Je peux poser, résoudre et justifier un problème d'optimisation."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["Un point de rebroussement et une tangente verticale",S`Esquisse \(f(x)=x^{1/3}(x-4)\).`,
      [S`\(f(x)=x^{4/3}-4x^{1/3}\); \(f'(x)=\tfrac43x^{1/3}-\tfrac43x^{-2/3}=\dfrac{4(x-1)}{3x^{2/3}}\) : nombres critiques 1 (\(f'=0\)) et 0 (\(f'\) n'existe pas).`, S`\(f'\lt0\) pour \(x\lt1\) (sauf en 0), \(f'\gt0\) pour \(x\gt1\) : minimum \((1,-3)\); en 0, une tangente verticale, aucun extremum.`, S`\(f''(x)=\tfrac49x^{-2/3}+\tfrac89x^{-5/3}=\dfrac{4(x+2)}{9x^{5/3}}\) : changements de signe en \(-2\) et en 0, points d'inflexion \((-2,\approx7.56)\) et \((0,0)\).`],
      S`minimum \((1,-3)\); points d'inflexion \((-2,7.56)\) et \((0,0)\), le second à tangente verticale`,
      plane({ view: { xmin: -5, xmax: 6, ymin: -5, ymax: 12 }, curves: [{ f: (x) => Math.cbrt(x) * (x - 4), color: "violet" }], points: [{ x: 1, y: -3, label: "min (1, −3)", color: "blue" }, { x: -2, y: 7.56, label: "inflexion (−2, 7.56)", color: "violet" }, { x: 0, y: 0, label: "(0, 0)", color: "violet" }], step: { x: 1, y: 2 } })],
    ["Le plus grand cylindre dans une sphère", S`Trouve le plus grand volume d'un cylindre qui tient à l'intérieur d'une sphère de rayon 6 cm.`,
      [S`Avec la hauteur \(h\) et le rayon \(r\) : \(r^2+\left(\tfrac h2\right)^2=36\), donc \(V=\pi r^2h=\pi\left(36h-\tfrac{h^3}{4}\right)\), \(0\le h\le12\).`, S`\(V'(h)=\pi\left(36-\tfrac34h^2\right)=0\Rightarrow h=\sqrt{48}\approx6.93\), \(r^2=24\).`, S`\(V=\pi(24)(6.93)\approx522.4\) cm³; les bornes donnent 0.`],
      S`hauteur d'environ 6.93 cm, rayon d'environ 4.90 cm, volume d'environ 522.4 cm³`,
      plane({ view: { xmin: 0, xmax: 12.5, ymin: 0, ymax: 600 }, curves: [{ f: (h) => Math.PI * (36 * h - (h ** 3) / 4), a: 0, b: 12, color: "violet" }], points: [{ x: Math.sqrt(48), y: 522.4, label: "max (6.93, 522.4)", color: "red" }], step: { x: 1, y: 100 } })],
  ], [
    q("difficile", S`\(f(x)=x^3+ax^2+bx\) a les nombres critiques \(x=1\) et \(x=3\). Trouve \(a\).`, num(-6),
      "f′(x) = 3(x − 1)(x − 3) = 3x² − 12x + 9.", [S`\(2a=-12\).`], S`\(-6\)`),
    q("difficile", S`Trouve la valeur minimale de \(A(x)=x^2+\dfrac{250}{x}\) pour \(x\gt0\).`, num(75),
      "2x − 250/x² = 0.", [S`\(x=5\) : \(25+50\).`], S`\(75\)`),
    q("difficile", S`Combien de points d'inflexion \(f(x)=x^4-4x^3+6\) a-t-elle?`, num(2),
      "f″(x) = 12x(x − 2).", [S`Changements de signe en 0 et en 2.`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment étudier pour cette évaluation?", "Fais les exercices variés et le niveau difficile sans notes, puis reconstruis une esquisse complète avec l'explorateur et compare."],
      ["Quelles sont les erreurs les plus fréquentes?", "Croire que f′(c) = 0 ou f″(c) = 0 règle la question, oublier les bornes, ne pas découper aux asymptotes, et laisser une réponse d'optimisation sous la forme d'un simple x."],
      ["Que dois-je montrer dans une question d'esquisse?", "Les dérivées, les nombres critiques et les nombres d'inflexion factorisés, un tableau récapitulatif et un graphique étiqueté."],
      ["Comment justifier une réponse d'optimisation?", "Compare la valeur critique avec les bornes, ou utilise un test de la dérivée sur un domaine ouvert."],
      ["Comment cela mène-t-il au chapitre 4?", "Le chapitre 4 dérive le sinus et le cosinus, et tous ces outils d'esquisse et d'optimisation s'appliquent aussi aux modèles périodiques."],
    ],
    summary: [
      "f′ : direction et points où la fonction change de direction.",
      "f″ : concavité et inflexion.",
      "Les asymptotes et le comportement aux extrémités encadrent l'esquisse.",
      "Optimisation : modèle, domaine, dérivée, justification.",
    ],
    next: "Passe l'évaluation du chapitre 3. Le chapitre 4 dérive les fonctions sinusoïdales.",
  }),
];
