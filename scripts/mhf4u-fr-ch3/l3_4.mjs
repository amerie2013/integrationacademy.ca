// MHF4U-FR 3.4 — Résolution d'équations et d'inéquations rationnelles : restrictions, élimination des dénominateurs,
// racines étrangères, inéquation réécrite en une seule fraction comparée à 0, tableaux de signes avec valeurs exclues,
// vérification graphique. (Les c, d du widget sont des coefficients de (ax + b)/(cx + d) : aucune permutation.)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, roots, hard, plane, rat } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "3.4 Résolution d'équations et d'inéquations rationnelles";
export const ID = lessonId(3, 4);

const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Résolution d'équations et d'inéquations rationnelles",
    overview: S`Pour résoudre une équation rationnelle, note d'abord les <strong>restrictions</strong> (les valeurs qui annulent un dénominateur), puis multiplie les deux membres par le dénominateur commun pour obtenir une équation polynomiale. Toute solution qui est une valeur interdite est <strong>étrangère</strong> et doit être rejetée. Les inéquations demandent plus de soin : tu ne peux pas multiplier par une expression dont tu ne connais pas le signe. Place plutôt tous les termes d'un même côté, regroupe-les en une seule fraction et utilise un tableau de signes dont les valeurs critiques sont les zéros du numérateur <em>et</em> du dénominateur — ces derniers ne sont jamais inclus.`,
    goals: [
      "donner les restrictions d'une équation ou d'une inéquation rationnelle;",
      "résoudre des équations rationnelles en multipliant par le dénominateur commun;",
      "repérer et rejeter les racines étrangères;",
      "résoudre des inéquations rationnelles à l'aide d'un tableau de signes, en excluant les zéros du dénominateur;",
      "confirmer les solutions à l'aide d'un graphique.",
    ],
    curriculum: "C3.5 (résoudre algébriquement des équations rationnelles simples et vérifier à l'aide de la technologie), C3.6 (résoudre des problèmes comportant des équations rationnelles), C4.1, C4.2 (résoudre des inéquations rationnelles, graphiquement et algébriquement)",
    prior: [
      [S`Résous \(\frac x3=4\).`, S`\(x=12\).`],
      [S`Restriction de \(\frac1{x-2}\)?`, S`\(x\ne2\).`],
      [S`Résous \((x-1)(x+3)\lt0\).`, S`\(-3\lt x\lt1\).`],
    ],
    words: [
      ["Restriction", "une valeur qui annule un dénominateur", "\\(x\\ne2\\)"],
      ["Dénominateur commun", "un multiple de chaque dénominateur", "\\((x-1)(x+2)\\)"],
      ["Racine étrangère", "une solution de l'équation sans dénominateur qui ne vérifie pas l'équation initiale", ""],
      ["Valeur critique", "un zéro du numérateur ou du dénominateur", ""],
    ],
  }),

  section("📌 Équations ou inéquations", S`
  ${table(["Étape", "Équation rationnelle", "Inéquation rationnelle"], [
    ["1", "donner les restrictions", "donner les restrictions"],
    ["2", "multiplier par le dénominateur commun", "placer tous les termes d'un même côté (NE PAS multiplier)"],
    ["3", "résoudre l'équation polynomiale", "regrouper en une seule fraction"],
    ["4", "rejeter les valeurs interdites", "tableau de signes : zéros du numérateur et du dénominateur"],
    ["5", "vérifier", "les zéros du dénominateur sont toujours exclus"],
  ])}
  ${plane({ view: V, curves: [...rat((x) => (x - 4) / (x + 2), [-2], V)], vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: 4, y: 0, label: "(4, 0)", color: "blue" }], step: { x: 1, y: 1 } }, "(x − 4)/(x + 2) ≥ 0 : positive pour x < −2 et x > 4, nulle en x = 4, non définie en x = −2.")}
  ${keyIdea(S`Une expression rationnelle ne peut changer de signe que là où son numérateur vaut 0 (elle traverse l'axe) ou son dénominateur vaut 0 (elle saute de l'autre côté d'une asymptote). Ces valeurs critiques partagent la droite numérique en intervalles de signe constant.`)}`),

  section("📌 Explore", S`<p>Choisis \(f(x)=\frac{ax+b}{cx+d}\) et la valeur \(k\). Choisis = ou une inégalité : la solution est ombrée et écrite. L'asymptote est toujours exclue.</p>`),

  widget("rationalSolver", { init: { a: 2, b: -1, c: 1, d: 1, k: 1, op: "≤" } }),

  section("📌 Pourquoi ne pas multiplier les deux membres?", S`
  <p>Multiplier \(\frac{2x+1}{x-1}\lt3\) par \(x-1\) ne fonctionne que si \(x-1>0\); si \(x-1\lt0\), le sens de l'inégalité doit être inversé. Réécrire l'inéquation sous la forme \(\frac{-x+4}{x-1}\lt0\) traite les deux cas à la fois.</p>
  ${watchOut([
    "Donne toujours les restrictions en premier — elles déterminent quelles racines sont étrangères.",
    "Multiplie CHAQUE terme par le dénominateur commun, y compris les termes entiers.",
    "N'inclus jamais un zéro du dénominateur, même avec ≤ ou ≥.",
    "Quand tu soustrais des fractions, mets le numérateur entre parenthèses : −(x − 2) = −x + 2.",
    "Vérifie les réponses dans l'équation INITIALE, pas dans celle sans dénominateur.",
  ])}`),

  examples([
    ["Une équation en une étape", S`Résous \(\dfrac3{x-2}=6\).`,
      [S`<b>Restriction.</b> \(x\ne2\), puisque le dénominateur ne peut pas valoir 0.`,
        S`<b>Élimine le dénominateur.</b> Multiplie les deux membres par \(x-2\) : \(3=6(x-2)\).`,
        S`<b>Résous.</b> \(x-2=\frac12\), donc \(x=2.5\).`,
        S`<b>Vérification.</b> \(\frac3{0.5}=6\) ✓, et \(2.5\ne2\) ✓`],
      S`\(x=2.5\)`,
      plane({ view: V, curves: rat((x) => 3 / (x - 2), [2], V), lines: [{ m: 0, b: 6, color: "green" }], vlines: [{ x: 2, color: "red", dash: true }], points: [{ x: 2.5, y: 6, label: "(2.5, 6)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Le produit croisé", S`Résous \(\dfrac{x+1}{x-3}=\dfrac{x-2}{x+1}\).`,
      [S`<b>Restrictions.</b> \(x\ne3\) et \(x\ne-1\).`,
        S`<b>Produit croisé.</b> \((x+1)^2=(x-2)(x-3)\).`,
        S`<b>Développe.</b> \(x^2+2x+1=x^2-5x+6\). Les termes en \(x^2\) s'annulent, ce qui laisse une équation du premier degré.`,
        S`<b>Résous.</b> \(7x=5\), donc \(x=\frac57\). Cette valeur est permise.`,
        S`<b>Vérification.</b> Membre de gauche : \(\frac{12/7}{-16/7}=-\frac34\). Membre de droite : \(\frac{-9/7}{12/7}=-\frac34\) ✓`],
      S`\(x=\tfrac57\)`,
      plane({ view: V, curves: [...rat((x) => (x + 1) / (x - 3), [3], V), ...rat((x) => (x - 2) / (x + 1), [-1], V).map((c) => ({ ...c, color: "blue" }))], points: [{ x: 5 / 7, y: -0.75, label: "(5/7, −3/4)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Une équation quadratique après simplification", S`Résous \(x+\dfrac6x=5\).`,
      [S`<b>Restriction.</b> \(x\ne0\).`,
        S`<b>Élimine le dénominateur.</b> Multiplie chaque terme par \(x\) : \(x^2+6=5x\).`,
        S`<b>Forme générale.</b> \(x^2-5x+6=0\).`,
        S`<b>Factorise.</b> \((x-2)(x-3)=0\), donc \(x=2\) ou \(x=3\).`,
        S`<b>Vérification.</b> \(2+3=5\) ✓ et \(3+2=5\) ✓. La courbe rencontre la droite \(y=5\) en ces deux points.`],
      S`\(x=2\) ou \(x=3\)`,
      plane({ view: { xmin: -2, xmax: 7, ymin: -2, ymax: 10 }, curves: [...rat((x) => x + 6 / x, [0], { xmin: -2, xmax: 7 }), { f: () => 5, color: "green" }], vlines: [{ x: 0, color: "red", dash: true }], points: [{ x: 2, y: 5, label: "(2, 5)", color: "blue" }, { x: 3, y: 5, label: "(3, 5)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Un tableau de signes", S`Résous \(\dfrac{x-4}{x+2}\ge0\).`,
      [S`<b>Valeurs critiques.</b> Le zéro du numérateur est 4, qui est inclus parce que la fraction y vaut 0. Le zéro du dénominateur est \(-2\), qui est toujours exclu.`,
        S`<b>Tableau.</b> ${tv(["intervalle", "\\(x\\lt-2\\)", "\\(-2\\lt x\\lt4\\)", "\\(x>4\\)"], ["\\(x-4\\)", "−", "−", "+"], ["\\(x+2\\)", "−", "+", "+"], ["quotient", "+", "−", "+"])}`,
        S`<b>Lecture.</b> On veut positif ou nul : \(x\lt-2\) ou \(x\ge4\).`,
        S`<b>Pourquoi ne pas multiplier?</b> Multiplier par \(x+2\) exigerait d'inverser le sens selon la valeur de \(x\). Le tableau évite ce problème.`,
        S`<b>Vérification.</b> \(x=0\) : \(\frac{-4}2=-2\lt0\), exclu ✓`],
      S`\(x\lt-2\) ou \(x\ge4\)`,
      plane({ view: V, curves: rat((x) => (x - 4) / (x + 2), [-2], V), vlines: [{ x: -2, color: "red", dash: true }], points: [{ x: 4, y: 0, label: "(4, 0)", color: "amber" }, { x: 0, y: -2, label: "(0, −2)" }], step: { x: 1, y: 1 } })],
    ["Réécrire en une seule fraction", S`Résous \(\dfrac{2x+1}{x-1}\lt3\).`,
      [S`<b>Un membre nul.</b> \(\dfrac{2x+1}{x-1}-3\lt0\).`,
        S`<b>Dénominateur commun.</b> \(\dfrac{2x+1-3(x-1)}{x-1}=\dfrac{-x+4}{x-1}\lt0\).`,
        S`<b>Simplifie.</b> Multiplie par \(-1\) en inversant le sens : \(\dfrac{x-4}{x-1}>0\).`,
        S`<b>Tableau.</b> Les valeurs critiques 1 et 4 donnent les signes \(+,-,+\). Donc \(x\lt1\) ou \(x>4\).`,
        S`<b>Vérification.</b> \(x=2\) : \(5\lt3\) est faux ✓. \(x=5\) : \(2.75\lt3\) ✓. \(x=0\) : \(-1\lt3\) ✓`],
      S`\(x\lt1\) ou \(x>4\)`,
      plane({ view: V, curves: [...rat((x) => (2 * x + 1) / (x - 1), [1], V), { f: () => 3, color: "green" }], vlines: [{ x: 1, color: "red", dash: true }], points: [{ x: 4, y: 3, label: "(4, 3)", color: "blue" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("équation", S`Résous \(\dfrac4{x+1}=2\).`, num(1),
      "4 = 2(x + 1).", [S`\(x+1=2\).`], S`\(1\)`),
    q("équation", S`Résous \(\dfrac{x+3}{x-1}=2\).`, num(5),
      "x + 3 = 2(x − 1).", [S`\(x+3=2x-2\).`], S`\(5\)`),
    q("équation", S`Résous \(x-\dfrac8x=2\).`, roots(4, -2),
      "Multiplie par x.", [S`\(x^2-2x-8=0\Rightarrow(x-4)(x+2)=0\).`], S`\(4, -2\)`),
    q("inéquation", S`Résous \(\dfrac{x-1}{x+3}\lt0\).`, choice([S`\(-3\lt x\lt1\)`, S`\(x\lt-3\) ou \(x>1\)`, S`\(-3\le x\le1\)`, S`\(x\lt1\)`], 0),
      "Valeurs critiques −3 et 1.", ["Signes +, −, +."], S`\(-3\lt x\lt1\)`),
    q("inéquation", S`Résous \(\dfrac{x+2}{x-5}\ge1\).`, choice([S`\(x>5\)`, S`\(x\ge5\)`, S`\(x\lt5\)`, S`tout \(x\ne5\)`], 0),
      "Soustrais 1 et regroupe.", [S`\(\frac{7}{x-5}\ge0\) — positive exactement quand \(x>5\).`], S`\(x>5\)`),
  ]),

  ...hard([
    ["Deux fractions", S`Résous \(\dfrac1{x-1}+\dfrac2{x+2}=1\).`,
      [S`Restrictions \(x\ne1, -2\). Multiplie par \((x-1)(x+2)\) : \((x+2)+2(x-1)=(x-1)(x+2)\).`, S`\(3x=x^2+x-2\Rightarrow x^2-2x-2=0\Rightarrow x=1\pm\sqrt3\).`, S`Aucune n'est une valeur interdite.`],
      S`\(x=1+\sqrt3\approx2.73\) ou \(x=1-\sqrt3\approx-0.73\)`],
    ["Une quadratique sur une linéaire", S`Résous \(\dfrac{x^2-9}{x-1}\le0\).`,
      [S`\(\dfrac{(x-3)(x+3)}{x-1}\le0\); valeurs critiques \(-3, 1, 3\) (1 exclue).`, S`Signes : \(x\lt-3\) : −; \((-3,1)\) : +; \((1,3)\) : −; \(x>3\) : +.`],
      S`\(x\le-3\) ou \(1\lt x\le3\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -12, ymax: 12 }, curves: rat((x) => (x * x - 9) / (x - 1), [1], { xmin: -6, xmax: 6 }), vlines: [{ x: 1, color: "red", dash: true }], points: [{ x: -3, y: 0, label: "−3", color: "blue" }, { x: 3, y: 0, label: "3", color: "blue" }], step: { x: 1, y: 2 } })],
  ], [
    q("difficile", S`Résous \(\dfrac2x+\dfrac3{x+1}=2\).`, roots(2, -0.5),
      "Multiplie par x(x + 1).", [S`\(2(x+1)+3x=2x(x+1)\Rightarrow2x^2-3x-2=0\Rightarrow(2x+1)(x-2)=0\).`], S`\(2, -\tfrac12\)`),
    q("difficile", S`Combien d'entiers vérifient \(\dfrac{x+1}{x-4}\le0\)?`, num(5),
      "−1 ≤ x < 4.", [S`\(-1,0,1,2,3\).`], S`\(5\)`),
    q("difficile", S`Résous \(\dfrac1x\lt2\).`, choice([S`\(x\lt0\) ou \(x>\tfrac12\)`, S`\(x>\tfrac12\)`, S`\(0\lt x\lt\tfrac12\)`, S`\(x\lt\tfrac12\)`], 0),
      "1/x − 2 < 0 → (1 − 2x)/x < 0.", [S`Valeurs critiques 0 et ½ : signes −, +, −.`], S`\(x\lt0\) ou \(x>\tfrac12\)`),
  ]),

  wrapUp({
    qas: [
      ["Qu'est-ce qu'une racine étrangère?", "Une valeur qui résout l'équation polynomiale obtenue après l'élimination des dénominateurs, mais qui annule un dénominateur de l'équation initiale. Elle doit être rejetée."],
      ["Pourquoi ne puis-je pas faire le produit croisé dans une inéquation?", "Le dénominateur pourrait être négatif, ce qui inverserait le sens de l'inégalité. Regrouper en une seule fraction et utiliser un tableau de signes évite de deviner."],
      ["Pourquoi les zéros du dénominateur ne sont-ils jamais inclus?", "L'expression n'y est pas définie, donc elle ne peut vérifier aucune inéquation."],
      ["Comment vérifier avec un graphique?", "Trace y = f(x) et y = k; la solution de f(x) > k est l'endroit où la courbe est au-dessus de la droite, en dehors de l'asymptote."],
      ["Et si le numérateur est une constante?", "Alors seul le dénominateur change le signe; par exemple, 7/(x − 5) ≥ 0 exactement quand x > 5."],
    ],
    summary: [
      "Les restrictions d'abord.",
      "Équations : multiplier par le dénominateur commun, rejeter les racines étrangères.",
      "Inéquations : un membre nul, une seule fraction, tableau de signes.",
      "Les zéros du dénominateur sont toujours exclus.",
    ],
    next: "La section 3.5 utilise les fonctions rationnelles comme modèles.",
  }),
];
