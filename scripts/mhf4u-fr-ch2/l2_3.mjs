// MHF4U-FR 2.3 — Équations polynomiales : résolution par factorisation (théorème des facteurs, groupement, formes
// quadratiques, somme et différence de cubes), cas irrationnels et non réels, lecture graphique, applications
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, roots, hard, plane } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "2.3 Équations polynomiales";
export const ID = lessonId(2, 3);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🎯",
    title: "Équations polynomiales",
    overview: S`Les racines réelles de \(P(x)=0\) sont les abscisses à l'origine de \(y=P(x)\). Pour les trouver exactement, factorise \(P(x)\) complètement — à l'aide du théorème des facteurs, du groupement ou de formes particulières comme la somme et la différence de cubes — puis pose chaque facteur égal à 0. Un facteur du second degré qui ne se factorise pas facilement se résout avec la formule quadratique; si son discriminant est négatif, il ne donne aucune racine réelle. Lorsqu'un polynôme ne se factorise pas du tout, un graphique donne les racines approximativement.`,
    goals: [
      "résoudre des équations polynomiales en factorisant complètement;",
      "utiliser la somme et la différence de cubes;",
      "appliquer la formule quadratique à un facteur du second degré, y compris dans les cas irrationnels et non réels;",
      "relier les racines de P(x) = 0 aux abscisses à l'origine de y = P(x), et résoudre P(x) = k graphiquement;",
      "résoudre des problèmes modélisés par des équations polynomiales.",
    ],
    curriculum: "C3.3 (établir des liens entre les racines de P(x) = 0, les abscisses à l'origine de y = P(x) et les facteurs), C3.4 (résoudre des équations polynomiales en choisissant une stratégie appropriée), C3.7 (résoudre des problèmes)",
    prior: [
      [S`Résous \(x^2-5x+6=0\).`, S`\(x=2\) ou \(3\).`],
      [S`Quel est le discriminant de \(x^2+2x+5\)?`, S`\(4-20=-16\lt0\) : aucune racine réelle.`],
      [S`Factorise \(x^3+2x^2-5x-6\).`, S`\((x+1)(x+3)(x-2)\).`],
    ],
    words: [
      ["Racine", "une solution de \\(P(x)=0\\)", ""],
      ["Somme de cubes", "\\(a^3+b^3=(a+b)(a^2-ab+b^2)\\)", ""],
      ["Différence de cubes", "\\(a^3-b^3=(a-b)(a^2+ab+b^2)\\)", ""],
      ["Forme quadratique", "une équation comme \\(x^4-13x^2+36=0\\), qui est du second degré en \\(x^2\\)", ""],
    ],
  }),

  section("📌 Stratégies", S`
  ${table(["Forme de P(x)", "Stratégie", "Exemple"], [
    ["facteur commun", "le mettre en évidence d'abord", "\\(2x^3-8x=2x(x-2)(x+2)\\)"],
    ["quatre termes en paires correspondantes", "groupement", "\\(x^3+x^2-4x-4\\)"],
    ["\\(a^3\\pm b^3\\)", "somme ou différence de cubes", "\\(8x^3-27\\)"],
    ["du second degré en \\(x^2\\)", "poser \\(u=x^2\\)", "\\(x^4-13x^2+36\\)"],
    ["tout autre cas", "théorème des facteurs, puis formule quadratique", "\\(x^3-3x^2+x+1\\)"],
  ])}
  ${keyIdea(S`Une équation de degré \(n\) a au plus \(n\) racines réelles. Chaque racine réelle est une abscisse à l'origine; un facteur du second degré dont le discriminant est négatif ne donne aucune abscisse à l'origine. Place toujours tous les termes du même côté avant de factoriser.`)}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -10, ymax: 14 }, curves: [{ f: (x) => x ** 3 - 7 * x, color: "violet" }], lines: [{ m: 0, b: 6, color: "green", label: "y = 6" }], points: [{ x: -2, y: 6, label: "−2", color: "red" }, { x: -1, y: 6, label: "−1", color: "red" }, { x: 3, y: 6, label: "3", color: "red" }], step: { x: 1, y: 2 } }, "x³ − 7x = 6 là où le polynôme de degré 3 rencontre y = 6 : x = −2, −1, 3, les racines de (x + 2)(x + 1)(x − 3) = 0.")}`),

  section("📌 Exploration", S`<p>Choisis le polynôme et la valeur \(k\). Les solutions de \(f(x)=k\) sont les points où la courbe rencontre la droite pointillée; observe le nombre de solutions changer lorsque \(k\) dépasse un point tournant.</p>`),

  widget("rootSolver", { init: { cs: [1, -3, -4, 12], k: 0 } }),

  section("📌 Somme et différence de cubes", S`
  <p>\(a^3-b^3=(a-b)(a^2+ab+b^2)\) et \(a^3+b^3=(a+b)(a^2-ab+b^2)\). Le facteur du second degré n'a jamais de racines réelles (son discriminant est \(-3b^2\)), donc \(a^3\pm b^3=0\) a exactement une racine réelle.</p>
  ${watchOut([
    "Ne divise pas les deux membres par x — tu perdrais la racine x = 0. Mets plutôt x en évidence.",
    "Place d'abord tout du même côté : x³ = 4x devient x³ − 4x = 0.",
    "Dans a³ + b³, le signe du milieu du facteur du second degré est MOINS.",
    "Un discriminant négatif signifie qu'il n'y a aucune racine réelle provenant de ce facteur, et non « aucune solution » pour toute l'équation.",
    "Vérifie que tes racines ont du sens dans un problème appliqué (les longueurs doivent être positives).",
  ])}`),

  examples([
    ["Théorème des facteurs, puis factorisation", S`Résous \(x^3-4x^2-7x+10=0\).`,
      [S`<b>Plan.</b> Il n'existe pas de formule simple pour ce polynôme de degré 3. Trouve donc un zéro, divise, et résous le trinôme qui reste.`,
        S`<b>Trouve un zéro.</b> Les candidats divisent 10. \(P(1)=1-4-7+10=0\), donc \(x-1\) est un facteur.`,
        S`<b>Divise.</b> Le quotient est \(x^2-3x-10\), qui se factorise en \((x-5)(x+2)\).`,
        S`<b>Produit nul.</b> \((x-1)(x-5)(x+2)=0\) donne \(x=1,5,-2\).`,
        S`<b>Vérifie.</b> \(P(5)=125-100-35+10=0\) ✓ et \(P(-2)=-8-16+14+10=0\) ✓`],
      S`\(x=1,\ 5,\ -2\)`,
      plane({ view: { xmin: -3, xmax: 6, ymin: -40, ymax: 20 }, curves: [{ f: (x) => x ** 3 - 4 * x * x - 7 * x + 10, color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }, { x: 5, y: 0, label: "5", color: "red" }], step: { x: 1, y: 10 } })],
    ["Groupement", S`Résous \(2x^3+x^2-8x-4=0\).`,
      [S`<b>Groupe.</b> \(x^2(2x+1)-4(2x+1)\). Les parenthèses sont identiques.`,
        S`<b>Facteur commun.</b> \((2x+1)(x^2-4)\).`,
        S`<b>Différence de carrés.</b> \((2x+1)(x-2)(x+2)=0\).`,
        S`<b>Résous chaque facteur.</b> \(x=-\tfrac12\), \(x=2\), \(x=-2\).`,
        S`<b>Vérifie.</b> \(x=-\tfrac12\) : \(-\tfrac14+\tfrac14+4-4=0\) ✓`],
      S`\(x=-\tfrac12,\ 2,\ -2\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -8, ymax: 8 }, curves: [{ f: (x) => 2 * x ** 3 + x * x - 8 * x - 4, color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: -0.5, y: 0, label: "−½", color: "red" }, { x: 2, y: 0, label: "2", color: "red" }], step: { x: 1, y: 2 } })],
    ["Racines irrationnelles", S`Résous \(x^3-3x^2+x+1=0\).`,
      [S`<b>Trouve un zéro.</b> \(P(1)=1-3+1+1=0\).`,
        S`<b>Divise.</b> La division par \(x-1\) donne \(x^2-2x-1\). Ce trinôme ne se factorise pas avec des entiers.`,
        S`<b>Formule quadratique.</b> \(x=\dfrac{2\pm\sqrt{4+4}}{2}=\dfrac{2\pm2\sqrt2}{2}=1\pm\sqrt2\).`,
        S`<b>Vérifie.</b> La somme des racines doit être \(-\frac ba=3\) : \(1+(1+\sqrt2)+(1-\sqrt2)=3\) ✓`],
      S`\(x=1\), \(x=1+\sqrt2\approx2.41\), \(x=1-\sqrt2\approx-0.41\)`,
      plane({ view: { xmin: -1.5, xmax: 3.5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + x + 1, color: "violet" }], points: [{ x: 1 - Math.SQRT2, y: 0, label: "1 − √2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }, { x: 1 + Math.SQRT2, y: 0, label: "1 + √2", color: "red" }], step: { x: 0.5, y: 1 } })],
    ["Différence de cubes", S`Résous \(8x^3-27=0\).`,
      [S`<b>Forme.</b> \(8x^3=(2x)^3\) et \(27=3^3\). Utilise \(a^3-b^3=(a-b)(a^2+ab+b^2)\).`,
        S`<b>Factorise.</b> \((2x-3)(4x^2+6x+9)=0\).`,
        S`<b>Facteur linéaire.</b> \(x=\tfrac32\).`,
        S`<b>Facteur du second degré.</b> Son discriminant est \(36-144=-108\lt0\), donc il n'a aucune racine réelle.`,
        S`<b>Vérifie.</b> \(8\left(\tfrac{27}8\right)-27=0\) ✓. Le graphique coupe l'axe une seule fois.`],
      S`\(x=\tfrac32\) (la seule racine réelle)`,
      plane({ view: { xmin: -1, xmax: 2.5, ymin: -30, ymax: 50 }, curves: [{ f: (x) => 8 * x ** 3 - 27, color: "violet" }], points: [{ x: 1.5, y: 0, label: "3/2", color: "red" }], step: { x: 0.5, y: 10 } })],
    ["Une boîte", S`Une boîte mesure \(x\) sur \(x+2\) sur \(x+5\) cm et a un volume de \(56\) cm³. Trouve ses dimensions.`,
      [S`<b>Modèle.</b> Le volume est le produit des dimensions : \(x(x+2)(x+5)=56\).`,
        S`<b>Forme standard.</b> Développe et regroupe : \(x^3+7x^2+10x-56=0\).`,
        S`<b>Trouve un zéro.</b> \(P(2)=8+28+20-56=0\).`,
        S`<b>Autres racines.</b> La division donne \(x^2+9x+28\). Son discriminant \(81-112\lt0\), donc il n'y a pas d'autre racine réelle.`,
        S`<b>Vérifie.</b> \(2\times4\times7=56\) ✓`],
      S`\(2\) cm sur \(4\) cm sur \(7\) cm`,
      plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 120 }, curves: [{ f: (x) => x * (x + 2) * (x + 5), a: 0, color: "violet" }], lines: [{ m: 0, b: 56, color: "amber", dash: true }], points: [{ x: 2, y: 56, label: "(2, 56)", color: "red" }], step: { x: 1, y: 20 }, xlabel: "x (cm)", ylabel: "V (cm³)" })],
  ]),

  practice([
    q("résous", S`Résous \(x^3-6x^2+11x-6=0\).`, roots(1, 2, 3),
      "Essaie x = 1.", [S`\((x-1)(x-2)(x-3)=0\).`], S`\(1, 2, 3\)`),
    q("résous", S`Résous \(x^3-9x=0\).`, roots(0, 3, -3),
      "Facteur commun x.", [S`\(x(x-3)(x+3)=0\).`], S`\(0, \pm3\)`),
    q("cubes", S`Trouve la racine réelle de \(x^3+27=0\).`, roots(-3),
      "Somme de cubes.", [S`\((x+3)(x^2-3x+9)=0\); le trinôme n'a aucune racine réelle.`], S`\(-3\)`),
    q("forme quadratique", S`Résous \(x^4-13x^2+36=0\).`, roots(-3, -2, 2, 3),
      "Pose u = x².", [S`\((x^2-4)(x^2-9)=0\).`], S`\(\pm2, \pm3\)`),
    q("résous", S`Résous \(2x^3-3x^2-2x=0\).`, roots(0, -0.5, 2),
      "Mets d'abord x en évidence.", [S`\(x(2x+1)(x-2)=0\).`], S`\(0, -\tfrac12, 2\)`),
  ]),

  ...hard([
    ["Une équation de degré 4 en deux étapes", S`Résous \(x^4+x^3-7x^2-x+6=0\).`,
      [S`\(P(1)=1+1-7-1+6=0\) : divise par \(x-1\) → \(x^3+2x^2-5x-6\).`, S`Ce polynôme de degré 3 a \(P(-1)=-1+2+5-6=0\) : divise par \(x+1\) → \(x^2+x-6=(x+3)(x-2)\).`, S`\((x-1)(x+1)(x+3)(x-2)=0\).`],
      S`\(x=1,\ -1,\ -3,\ 2\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -20, ymax: 16 }, curves: [{ f: (x) => x ** 4 + x ** 3 - 7 * x * x - x + 6, color: "violet" }], points: [{ x: -3, y: 0, color: "red" }, { x: -1, y: 0, color: "red" }, { x: 1, y: 0, color: "red" }, { x: 2, y: 0, color: "red" }], step: { x: 1, y: 4 } })],
    ["Entiers consécutifs", S`Le produit de trois entiers consécutifs est 504. Trouve-les et montre qu'il n'existe aucun autre ensemble.`,
      [S`\(n(n+1)(n+2)=504\Rightarrow n^3+3n^2+2n-504=0\).`, S`Comme \(8^3\approx504\), essaie \(n=7\) : \(343+147+14-504=0\) ✓.`, S`Divise : \(n^2+10n+72\), discriminant \(100-288\lt0\) : aucune autre racine réelle.`],
      S`7, 8, 9`],
  ], [
    q("difficile", S`Résous \(x^3-2x^2-5x+6=0\).`, roots(1, -2, 3),
      "P(1) = 0.", [S`\((x-1)(x^2-x-6)=(x-1)(x-3)(x+2)\).`], S`\(1, -2, 3\)`),
    q("difficile", S`Combien de racines réelles \(x^3+x^2+x+1=0\) a-t-elle?`, num(1),
      "Groupe.", [S`\(x^2(x+1)+(x+1)=(x+1)(x^2+1)\).`], S`\(1\)`),
    q("difficile", S`Résous \(64x^3+1=0\).`, roots(-0.25),
      "Somme de cubes : (4x)³ + 1³.", [S`\((4x+1)(16x^2-4x+1)=0\); le trinôme n'a aucune racine réelle.`], S`\(-\tfrac14\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi un des membres doit-il être 0 avant de factoriser?", "La propriété du produit nul ne s'applique qu'à un produit égal à 0 : si ab = 0, alors a = 0 ou b = 0. Elle ne dit rien sur ab = 6."],
      ["Combien de racines une équation de degré 3 peut-elle avoir?", "1, 2 ou 3 racines réelles distinctes (2 lorsqu'une racine est double); elle en a toujours au moins une."],
      ["À quoi ressemblent les racines non réelles sur le graphique?", "Elles n'apparaissent pas : un facteur du second degré dont le discriminant est négatif n'ajoute aucune abscisse à l'origine."],
      ["Quand dois-je plutôt utiliser un graphique?", "Lorsqu'aucun candidat rationnel ne fonctionne — le graphique (ou une calculatrice) donne des racines approximatives."],
      ["Comment retenir les formules des cubes?", "Le même signe dans le binôme que dans l'expression de départ, le signe opposé au milieu du trinôme, et le dernier terme toujours positif."],
    ],
    summary: [
      "Place les termes du même côté; factorise complètement.",
      "Chaque facteur égal à 0 donne une racine.",
      "a³ ± b³ = (a ± b)(a² ∓ ab + b²).",
      "Les racines de P(x) = 0 sont les abscisses à l'origine de y = P(x).",
    ],
    next: "La leçon 2.4 construit des polynômes à partir de leurs zéros : les familles de fonctions polynomiales.",
  }),
];
