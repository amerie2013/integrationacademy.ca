// MHF4U-FR 1.2 — Caractéristiques des fonctions polynomiales : degré, coefficient dominant, comportement à l'infini,
// points tournants, zéros, différences finies (n-ièmes différences = a·n!) et symétrie paire/impaire
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "1.2 Caractéristiques des fonctions polynomiales";
export const ID = lessonId(1, 2);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔎",
    title: "Caractéristiques des fonctions polynomiales",
    overview: S`L'équation d'un polynôme t'en apprend beaucoup sur son graphique avant même que tu places un seul point. Le degré \(n\) limite le nombre de zéros (au plus \(n\)) et de points tournants (au plus \(n-1\)); le coefficient dominant fixe le comportement à l'infini; une table de valeurs à pas constant a des \(n\)-ièmes différences constantes égales à \(a\cdot n!\); et la symétrie paire ou impaire peut se vérifier algébriquement. Dans cette leçon, tu vas lire toutes ces caractéristiques et t'en servir pour identifier, décrire et esquisser des fonctions polynomiales.`,
    goals: [
      "donner le nombre maximal de zéros et de points tournants à partir du degré;",
      "utiliser le degré et le coefficient dominant pour décrire le comportement à l'infini;",
      "utiliser les différences finies pour trouver le degré et le coefficient dominant à partir d'une table;",
      "vérifier si une fonction polynomiale est paire, impaire ou ni l'une ni l'autre;",
      "déduire d'un graphique le plus petit degré possible et le signe de a.",
    ],
    curriculum: "C1.2, C1.3, C1.9 (comparer des représentations à l'aide des différences finies; décrire les caractéristiques clés; déterminer et comparer les propriétés des fonctions polynomiales paires et impaires)",
    prior: [
      [S`Comportement à l'infini de \(y=-2x^4\)?`, S`Descend aux deux extrémités.`],
      [S`\(4!=\)?`, S`\(24\).`],
      [S`\(y=x^2\) est-elle paire ou impaire?`, S`Paire.`],
    ],
    words: [
      ["Point tournant", "point où le graphique passe de croissant à décroissant, ou l'inverse", ""],
      ["Maximum / minimum relatif", "point tournant plus haut / plus bas que les points voisins", ""],
      ["Différences finies", "différences entre valeurs de y successives pour des pas égaux en x", ""],
      ["Fonction paire", "\\(f(-x)=f(x)\\) : symétrique par rapport à l'axe des y", ""],
      ["Fonction impaire", "\\(f(-x)=-f(x)\\) : symétrique par rapport à l'origine", ""],
    ],
  }),

  section("📌 Ce que le degré t'apprend", S`
  ${table(["Degré n", "Zéros (abscisses à l'origine)", "Points tournants", "Différences constantes"], [
    ["1 (linéaire)", "exactement 1", "0", "premières : \\(a\\)"],
    ["2 (quadratique)", "de 0 à 2", "1", "deuxièmes : \\(2a\\)"],
    ["3 (cubique)", "de 1 à 3", "0 ou 2", "troisièmes : \\(6a\\)"],
    ["4 (quartique)", "de 0 à 4", "1 ou 3", "quatrièmes : \\(24a\\)"],
    ["5 (quintique)", "de 1 à 5", "0, 2 ou 4", "cinquièmes : \\(120a\\)"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -6, ymax: 8 }, curves: [{ f: (x) => 0.25 * (x + 3) * (x + 1) * (x - 1) * (x - 3), color: "violet" }], points: [{ x: -3, y: 0, label: "", color: "red" }, { x: -1, y: 0, color: "red" }, { x: 1, y: 0, color: "red" }, { x: 3, y: 0, color: "red" }, { x: 0, y: 2.25, label: "max relatif", color: "blue" }, { x: 2.236, y: -4, label: "min relatif", color: "blue" }, { x: -2.236, y: -4, color: "blue" }], step: { x: 1, y: 2 } }, "Une fonction quartique avec le maximum possible : 4 zéros et 3 points tournants.")}
  ${keyIdea(S`Degré \(n\) : au plus \(n\) zéros et au plus \(n-1\) points tournants. Degré impair : au moins un zéro, et le nombre de points tournants est pair. Degré pair : le nombre de points tournants est impair. Pour des valeurs de x également espacées, les \(n\)-ièmes différences sont constantes et égales à \(a\cdot n!\) (multipliées par \(\Delta x^n\) si le pas n'est pas 1).`)}`),

  section("📌 Explore", S`<p>Choisis cubique ou quartique et change les coefficients. Observe le nombre de zéros et de points tournants, et vérifie que la dernière ligne de la table des différences reste constante et égale à \(a\cdot n!\).</p>`),

  widget("polyFeatures", { init: [1, 0, -4, 0, 0] }),

  section("📌 Paire et impaire", S`
  <p>Remplace \(x\) par \(-x\). Si chaque terme reste inchangé, la fonction est <strong>paire</strong> (toutes les puissances sont paires, y compris les constantes). Si chaque terme change de signe, elle est <strong>impaire</strong> (toutes les puissances sont impaires, aucune constante). Un mélange n'est <strong>ni pair ni impair</strong>.</p>
  ${watchOut([
    "« Au plus n − 1 points tournants » — une fonction cubique peut n'en avoir aucun (y = x³).",
    "Les différences finies exigent des pas égaux en x.",
    "Un terme constant empêche une fonction d'être impaire : x³ + 1 n'est ni paire ni impaire.",
    "La parité concerne la symétrie de tout le graphique, pas seulement le degré : x⁴ + x n'est ni paire ni impaire.",
    "Le plus petit degré possible d'après un graphique est (nombre de points tournants) + 1, et il doit concorder avec le comportement à l'infini.",
  ])}`),

  examples([
    ["Lire les caractéristiques", S`Pour \(f(x)=-2x^4+3x^3-x+5\), donne le degré, le coefficient dominant, le comportement à l'infini, les nombres maximaux de zéros et de points tournants, et l'ordonnée à l'origine.`,
      [S`<b>Degré et coefficient dominant.</b> La plus grande puissance est \(x^4\), donc le degré est 4. Son coefficient est \(a=-2\).`,
        S`<b>Comportement à l'infini.</b> Pour \(|x|\) grand, le terme \(-2x^4\) domine. Un degré pair avec un \(a\) négatif signifie que les deux extrémités descendent.`,
        S`<b>Zéros et points tournants.</b> Un polynôme de degré \(n\) a au plus \(n\) zéros réels et au plus \(n-1\) points tournants : ici, au plus 4 et au plus 3.`,
        S`<b>Ordonnée à l'origine.</b> En \(x=0\), tous les termes contenant \(x\) s'annulent; il reste la constante : \(f(0)=5\).`,
        S`<b>Vérification sur le graphique.</b> La courbe descend aux deux extrémités et coupe l'axe des y en 5. Elle a 2 zéros et 1 ou 3 points tournants, sans dépasser les maximums ✓`],
      S`degré 4; \(a=-2\); \(y\to-\infty\) aux deux extrémités; ≤ 4 zéros, ≤ 3 points tournants; ordonnée à l'origine 5`,
      plane({ view: { xmin: -2, xmax: 3, ymin: -8, ymax: 10 }, curves: [{ f: (x) => -2 * x ** 4 + 3 * x ** 3 - x + 5, color: "violet" }], points: [{ x: 0, y: 5, label: "(0, 5)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Le degré à partir d'une table", S`Trouve le degré et le coefficient dominant du polynôme dont les valeurs sont \(f(0)=0\), \(f(1)=1\), \(f(2)=14\), \(f(3)=51\), \(f(4)=124\), \(f(5)=245\).`,
      [S`<b>Méthode.</b> Avec des pas égaux en x, calcule les différences successives. Le degré est l'ordre de la première ligne constante, et cette constante vaut \(n!\,a\).`,
        S`<b>Différences.</b> ${tv(["\\(f\\)", "0", "1", "14", "51", "124", "245"], ["1<sup>res</sup>", "", "1", "13", "37", "73", "121"], ["2<sup>es</sup>", "", "", "12", "24", "36", "48"], ["3<sup>es</sup>", "", "", "", "12", "12", "12"])}`,
        S`<b>Degré.</b> Les troisièmes différences sont constantes, donc le degré est 3.`,
        S`<b>Coefficient dominant.</b> \(3!\,a=12\), donc \(6a=12\) et \(a=2\).`,
        S`<b>Vérification.</b> \(f(x)=2x^3-x\) convient : \(f(2)=16-2=14\) ✓ et \(f(5)=250-5=245\) ✓`],
      S`degré 3, \(a=2\) (en fait, \(f(x)=2x^3-x\))`,
      plane({ view: { xmin: -0.5, xmax: 5.5, ymin: -10, ymax: 260 }, curves: [{ f: (x) => 2 * x ** 3 - x, color: "violet", a: -0.5, b: 5.2 }], points: [[0, 0], [1, 1], [2, 14], [3, 51], [4, 124], [5, 245]].map(([x, y]) => ({ x, y, color: "red" })), step: { x: 1, y: 50 } })],
    ["Paire, impaire ou ni l'une ni l'autre", S`Classe \(f(x)=x^4-3x^2\), \(g(x)=x^3+2x\) et \(h(x)=x^3+1\).`,
      [S`<b>Tests.</b> Paire signifie \(f(-x)=f(x)\). Impaire signifie \(f(-x)=-f(x)\). Remplace par \(-x\) et compare.`,
        S`<b>\(f\).</b> \(f(-x)=(-x)^4-3(-x)^2=x^4-3x^2=f(x)\) : paire.`,
        S`<b>\(g\).</b> \(g(-x)=-x^3-2x=-(x^3+2x)=-g(x)\) : impaire.`,
        S`<b>\(h\).</b> \(h(-x)=-x^3+1\). Ce n'est pas \(h(x)\), et \(-h(x)=-x^3-1\) ne correspond pas non plus. Donc ni paire ni impaire.`,
        S`<b>Vérification rapide.</b> Uniquement des puissances paires donne une fonction paire; uniquement des puissances impaires donne une fonction impaire. La constante de \(h\) compte comme une puissance paire, mélangée à une puissance impaire ✓`],
      S`paire, impaire, ni l'une ni l'autre`,
      plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x ** 4 - 3 * x * x, color: "blue" }, { f: (x) => x ** 3 + 2 * x, color: "green" }, { f: (x) => x ** 3 + 1, color: "red" }], step: { x: 1, y: 1 } }, "bleu f (miroir par rapport à l'axe des y), vert g (demi-tour autour de l'origine), rouge h")],
    ["À partir d'une description", S`Un polynôme a un degré 5, un coefficient dominant négatif et 4 points tournants. Décris son comportement à l'infini et esquisse un graphique possible.`,
      [S`<b>Comportement à l'infini.</b> Un degré impair signifie que les extrémités vont en sens opposés. Avec \(a\lt0\), la courbe monte à gauche (Q2) et descend à droite (Q4).`,
        S`<b>Points tournants.</b> Le degré 5 permet au plus 4 points tournants : cette courbe atteint donc le maximum.`,
        S`<b>Construire la forme.</b> En partant de Q2, la courbe descend, monte, descend, monte, descend. Cela fait 4 changements de direction.`,
        S`<b>Vérification.</b> L'esquisse a 5 zéros, le maximum pour le degré 5, ce qui est cohérent avec 4 points tournants. D'autres esquisses sont possibles, puisque la question ne fixe pas les hauteurs ✓`],
      S`Q2 → Q4 avec 4 points tournants (une possibilité ci-dessous)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -0.3 * (x + 2.5) * (x + 1.2) * x * (x - 1.3) * (x - 2.4), color: "violet" }], step: { x: 1, y: 1 } })],
    ["Le plus petit degré d'après un graphique", S`Le graphique illustré a 3 points tournants et monte aux deux extrémités. Quel est le plus petit degré possible, et quel est le signe du coefficient dominant?`,
      [S`<b>D'après les points tournants.</b> Un polynôme de degré \(n\) a au plus \(n-1\) points tournants. Donc 3 points tournants exigent \(n-1\ge3\), ce qui donne \(n\ge4\).`,
        S`<b>D'après les extrémités.</b> Les deux extrémités vont dans le même sens, donc le degré est pair. Le degré 4 satisfait les deux conditions.`,
        S`<b>Signe de \(a\).</b> Les deux extrémités montent, donc \(a>0\).`,
        S`<b>Vérification.</b> La courbe de la figure, \(y=0.2(x+3)(x+1)(x-1)(x-3)+1\), est de degré 4 et \(a=0.2>0\) ✓`],
      S`plus petit degré : 4; \(a>0\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -6, ymax: 8 }, curves: [{ f: (x) => 0.2 * (x + 3) * (x + 1) * (x - 1) * (x - 3) + 1, color: "violet" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("points tournants", S`Quel est le nombre maximal de points tournants d'un polynôme de degré 5?`, num(4),
      "n − 1.", [S`\(5-1=4\).`], S`\(4\)`),
    q("différences", S`Les quatrièmes différences d'une fonction quartique (pas de 1 en x) valent toutes \(48\). Trouve le coefficient dominant.`, num(2),
      "Δ⁴ = 24a.", [S`\(24a=48\).`], S`\(2\)`),
    q("symétrie", S`\(f(x)=x^5-4x\) est-elle paire, impaire ou ni l'une ni l'autre?`, choice(["impaire", "paire", "ni l'une ni l'autre", "les deux"], 0),
      "Calcule f(−x).", [S`\(f(-x)=-x^5+4x=-f(x)\).`], "impaire"),
    q("plus petit degré", S`Un graphique a 3 points tournants. Quel est le plus petit degré possible?`, num(4),
      "Points tournants + 1.", [S`\(3+1=4\).`], S`\(4\)`),
    q("ordonnée à l'origine", S`Trouve l'ordonnée à l'origine de \(f(x)=3x^4-x+7\).`, num(7),
      "f(0).", [S`Tous les termes contenant x s'annulent.`], S`\(7\)`),
  ]),

  ...hard([
    ["Le coefficient dominant à partir des différences", S`Les valeurs d'un polynôme pour \(x=0,1,2,3,4,5\) sont \(4, 1, -14, -53, -128, -251\). Trouve son degré et son coefficient dominant.`,
      [S`Premières différences : \(-3,-15,-39,-75,-123\).`, S`Deuxièmes : \(-12,-24,-36,-48\). Troisièmes : \(-12,-12,-12\).`, S`Degré 3 avec \(6a=-12\Rightarrow a=-2\).`],
      S`degré 3, \(a=-2\)`],
    ["Les fonctions impaires passent par l'origine", S`Démontre que le graphique de toute fonction polynomiale impaire passe par \((0,0)\), et détermine si toute fonction impaire doit avoir au moins un autre zéro.`,
      [S`Impaire signifie \(f(-x)=-f(x)\) pour tout \(x\). En \(x=0\) : \(f(0)=-f(0)\), donc \(2f(0)=0\) et \(f(0)=0\).`, S`D'autres zéros ne sont pas garantis : \(f(x)=x^3+x=x(x^2+1)\) est impaire et n'a que le zéro 0.`],
      S`passe toujours par l'origine; pas nécessairement d'autre zéro`,
      plane({ view: { xmin: -2, xmax: 2, ymin: -6, ymax: 6 }, curves: [{ f: (x) => x ** 3 + x, color: "green" }], points: [{ x: 0, y: 0, label: "(0, 0)" }], step: { x: 1, y: 1 } })],
  ], [
    q("difficile", S`Une fonction quartique a des quatrièmes différences de \(72\) (pas de 1 en x). Trouve \(a\).`, num(3),
      "24a.", [S`\(72\div24\).`], S`\(3\)`),
    q("difficile", S`Une fonction quartique paire a un coefficient dominant positif et \(f(0)=-1\). Quel est le plus petit nombre d'abscisses à l'origine qu'elle peut avoir?`, num(2),
      "Elle part sous l'axe en x = 0 et les deux extrémités montent.", [S`Elle doit couper l'axe une fois de chaque côté de l'axe des y (par symétrie).`], S`\(2\)`),
    q("difficile", S`Pour \(f(x)=-x^3+4x^2+1\), que valent les troisièmes différences d'une table avec un pas de 1 en x?`, num(-6),
      "6a.", [S`\(6(-1)\).`], S`\(-6\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi un polynôme de degré n a-t-il au plus n zéros?", "Chaque zéro r donne un facteur (x − r); un polynôme de degré n ne peut pas avoir plus de n tels facteurs."],
      ["Pourquoi au plus n − 1 points tournants?", "Entre deux points tournants, le graphique doit tourner une fois; la forme d'un polynôme de degré n permet au plus n − 1 changements de direction (en calcul différentiel, la dérivée est de degré n − 1)."],
      ["D'où vient a·n!?", "Chaque calcul de différences abaisse le degré de un et multiplie le coefficient dominant par le degré : a → na → n(n−1)a → … → n!·a."],
      ["Un polynôme peut-il être à la fois pair et impair?", "Seulement f(x) = 0. Tout autre polynôme a un terme qui est soit inchangé, soit changé de signe, mais pas les deux."],
      ["Comment trouver le plus petit degré d'après un graphique?", "Compte les points tournants et ajoute 1, puis vérifie le comportement à l'infini (extrémités dans le même sens → degré pair; sens opposés → degré impair) et ajuste au besoin."],
    ],
    summary: [
      "Degré n : ≤ n zéros, ≤ n − 1 points tournants.",
      "Les n-ièmes différences sont constantes : a·n!.",
      "Paire : f(−x) = f(x); impaire : f(−x) = −f(x).",
      "Le comportement à l'infini découle du degré et du signe de a.",
    ],
    next: "La leçon 1.3 utilise la forme factorisée pour trouver les zéros et leur ordre, et pour esquisser des graphiques de polynômes.",
  }),
];
