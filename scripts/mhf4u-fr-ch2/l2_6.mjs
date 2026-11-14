// MHF4U-FR 2.6 — Résolution algébrique d'inéquations polynomiales factorisables : réarranger, factoriser, valeurs
// critiques, tableaux de signes et valeurs test, zéros d'ordre supérieur, applications
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { signTable, lin } from "./sign.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "2.6 Résolution algébrique d'inéquations polynomiales factorisables";
export const ID = lessonId(2, 6);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Résolution algébrique d'inéquations polynomiales factorisables",
    overview: S`Lorsqu'un polynôme se factorise, son inéquation peut être résolue exactement — sans graphique. Place tous les termes du même côté, factorise complètement et marque les zéros sur une droite numérique. Entre deux zéros consécutifs, le polynôme garde le même signe; un <strong>tableau de signes</strong> (le signe de chaque facteur sur chaque intervalle) ou une seule valeur test par intervalle t'indique donc où l'inéquation est vérifiée.`,
    goals: [
      "réarranger et factoriser une inéquation polynomiale;",
      "construire un tableau de signes pour un polynôme factorisé;",
      "utiliser des valeurs test pour vérifier les signes;",
      "traiter les zéros d'ordre pair et les inéquations non strictes;",
      "résoudre des problèmes portant sur des inéquations polynomiales.",
    ],
    curriculum: "C4.3 (résoudre algébriquement des inéquations polynomiales factorisables de degré ≤ 4 à l'aide d'un tableau de signes ou de valeurs test, et représenter les solutions sur une droite numérique ou en notation d'intervalle)",
    prior: [
      [S`Quel est le signe de \((x-3)\) lorsque \(x=1\)?`, S`Négatif.`],
      [S`Factorise \(x^3-x^2-12x\).`, S`\(x(x-4)(x+3)\).`],
      [S`Résous \(x^2-x-6\lt0\).`, S`\(-2\lt x\lt3\).`],
    ],
    words: [
      ["Valeur critique", "un zéro du polynôme factorisé : une borne possible", ""],
      ["Tableau de signes", "le signe de chaque facteur sur chaque intervalle", ""],
      ["Valeur test", "une valeur de x dans un intervalle, utilisée pour trouver le signe sur cet intervalle", ""],
      ["Solution sur une droite numérique", "point vide = exclu, point plein = inclus", ""],
    ],
  }),

  section("📌 La méthode du tableau de signes", S`
  <p>Pour \((x+2)(x-1)(x-4)\lt0\) : les zéros \(-2, 1, 4\) partagent la droite en quatre intervalles.</p>
  ${table(["", "x < −2", "−2 < x < 1", "1 < x < 4", "x > 4"], [
    ["x + 2", "−", "+", "+", "+"],
    ["x − 1", "−", "−", "+", "+"],
    ["x − 4", "−", "−", "−", "+"],
    ["produit", "<strong>−</strong>", "+", "<strong>−</strong>", "+"],
  ])}
  ${keyIdea(S`(1) Un membre égal à 0. (2) Factorise complètement. (3) Marque les valeurs critiques. (4) Signe de chaque facteur sur chaque intervalle → signe du produit. (5) Choisis les intervalles qui conviennent; inclus les valeurs critiques pour \(\le\) et \(\ge\). Pour \((x+2)(x-1)(x-4)\lt0\) : \(x\lt-2\) ou \(1\lt x\lt4\).`)}
  ${plane({ view: { xmin: -3, xmax: 5, ymin: -20, ymax: 14 }, curves: [{ f: (x) => (x + 2) * (x - 1) * (x - 4), color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: 1, y: 0, label: "1", color: "red" }, { x: 4, y: 0, label: "4", color: "red" }], step: { x: 1, y: 2 } }, "Le graphique concorde avec le tableau de signes : sous l'axe pour x < −2 et pour 1 < x < 4.")}`),

  section("📌 Exploration", S`<p>Choisis les zéros, leurs ordres et \(a\). Le tableau de signes se remplit automatiquement; la ligne du produit correspond au graphique, et la solution de l'inéquation choisie est ombrée.</p>`),

  widget("signChart", { init: { a: 1, zeros: [[-3, 1], [0, 1], [4, 1]], op: "≥" } }),

  section("📌 Zéros d'ordre supérieur", S`
  <p>Un facteur au carré comme \((x-1)^2\) n'est jamais négatif, donc il ne change pas le signe du produit : les signes de part et d'autre de \(x=1\) sont les mêmes. Son zéro reste une valeur critique — incluse pour \(\ge\) et \(\le\), exclue pour \(>\) et \(\lt\).</p>
  ${watchOut([
    "Ne divise jamais les deux membres par une expression contenant la variable — son signe est inconnu. Factorise plutôt.",
    "Place tout du même côté avant de factoriser : x³ > 4x devient x³ − 4x > 0.",
    "Un coefficient dominant négatif inverse tous les signes de la ligne du produit; ajoute-le comme une ligne.",
    "En un zéro d'ordre pair, le signe ne change pas; le zéro lui-même peut quand même être une solution (≥, ≤).",
    "Vérifie un intervalle à l'aide d'une valeur test pour repérer les erreurs de signe.",
  ])}`),

  examples([
    ["Un tableau de signes", S`Résous \((x-2)(x+3)(x-5)\lt0\).`,
      [S`<b>Pourquoi un tableau?</b> Un produit ne peut changer de signe qu'au zéro d'un facteur. Son signe est donc constant sur chaque intervalle entre les valeurs critiques.`,
        S`<b>Valeurs critiques.</b> \(-3,2,5\) partagent la droite numérique en quatre intervalles.`,
        S`<b>Tableau de signes.</b> Le signe de chaque facteur sur chaque intervalle, puis celui du produit :${signTable([lin(1, -2), lin(1, 3), lin(1, -5)], "<")}`,
        S`<b>Lis.</b> On veut les intervalles négatifs : \(x\lt-3\) et \(2\lt x\lt5\). L'inéquation est stricte, donc les valeurs critiques sont exclues.`,
        S`<b>Vérifie.</b> \(x=3\) : \((1)(6)(-2)=-12\lt0\) ✓`],
      S`\(x\lt-3\) ou \(2\lt x\lt5\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -40, ymax: 40 }, curves: [{ f: (x) => (x - 2) * (x + 3) * (x - 5), color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "red" }, { x: 2, y: 0, label: "2", color: "red" }, { x: 5, y: 0, label: "5", color: "red" }], step: { x: 1, y: 10 } })],
    ["Factoriser d'abord", S`Résous \(x^3-x^2-12x\ge0\).`,
      [S`<b>Factorise.</b> Facteur commun \(x\) : \(x(x^2-x-12)=x(x-4)(x+3)\).`,
        S`<b>Valeurs critiques.</b> \(-3,0,4\).`,
        S`<b>Tableau de signes.</b> Teste \(x=-4\) : \((-4)(-8)(-1)=-32\), négatif, ce qui correspond à la première colonne :${signTable([lin(1, 0), lin(1, -4), lin(1, 3)], ">=")}`,
        S`<b>Lis.</b> Positif sur \((-3,0)\) et \((4,\infty)\). \(\ge\) inclut les zéros.`,
        S`<b>Vérifie.</b> \(x=-1\) : \(-1-1+12=10\ge0\) ✓`],
      S`\(x\in[-3,0]\cup[4,\infty)\)`,
      plane({ view: { xmin: -4.5, xmax: 5.5, ymin: -30, ymax: 30 }, curves: [{ f: (x) => x ** 3 - x * x - 12 * x, color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "red" }, { x: 0, y: 0, label: "0", color: "red" }, { x: 4, y: 0, label: "4", color: "red" }], step: { x: 1, y: 10 } })],
    ["Utiliser le théorème des facteurs", S`Résous \(2x^3+3x^2-11x-6\le0\).`,
      [S`<b>Trouve un zéro.</b> \(P(2)=16+12-22-6=0\).`,
        S`<b>Divise et factorise.</b> Le quotient est \(2x^2+7x+3=(2x+1)(x+3)\). Donc \((x-2)(2x+1)(x+3)\le0\).`,
        S`<b>Valeurs critiques.</b> \(-3,-\tfrac12,2\).`,
        S`<b>Tableau de signes.</b> ${signTable([lin(1, -2), lin(2, 1), lin(1, 3)], "<=")}`,
        S`<b>Vérifie.</b> \(x=0\) : \(-6\le0\) ✓, et 0 appartient à \(\left[-\tfrac12,2\right]\) ✓`],
      S`\(x\le-3\) ou \(-\tfrac12\le x\le2\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -16, ymax: 16 }, curves: [{ f: (x) => 2 * x ** 3 + 3 * x * x - 11 * x - 6, color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "red" }, { x: -0.5, y: 0, label: "−½", color: "red" }, { x: 2, y: 0, label: "2", color: "red" }], step: { x: 1, y: 4 } })],
    ["Un zéro double", S`Résous \((x-1)^2(x+4)>0\).`,
      [S`<b>Valeurs critiques.</b> \(-4\), et \(1\) d'ordre 2.`,
        S`<b>Fait essentiel.</b> Un facteur au carré n'est jamais négatif, donc le produit ne change pas de signe en 1.`,
        S`<b>Tableau de signes.</b> ${signTable([lin(1, -1, 2), lin(1, 4)], ">")}`,
        S`<b>Bornes.</b> L'inéquation est stricte et le produit vaut 0 en \(x=1\), donc cette valeur doit être retirée.`,
        S`<b>Vérifie.</b> \(x=0\) : \(1(4)=4>0\) ✓. \(x=1\) : \(0\), qui n'est pas \(>0\) ✓`],
      S`\(x>-4\), \(x\ne1\) : \((-4,1)\cup(1,\infty)\)`,
      plane({ view: { xmin: -5, xmax: 3, ymin: -8, ymax: 16 }, curves: [{ f: (x) => (x - 1) ** 2 * (x + 4), color: "violet" }], points: [{ x: -4, y: 0, label: "−4", color: "red" }, { x: 1, y: 0, label: "1 (rebond)", color: "amber" }, { x: 0, y: 4, label: "(0, 4)" }], step: { x: 1, y: 2 } })],
    ["Une condition sur le volume", S`Une boîte a pour dimensions \(x\), \(x-1\) et \(x+3\) cm. Pour quelles valeurs de \(x\) son volume est-il supérieur à \(5x\) cm³?`,
      [S`<b>Pose l'inéquation.</b> \(x(x-1)(x+3)>5x\). Place tout du même côté, et ne divise pas par \(x\) : \(x\left[(x-1)(x+3)-5\right]>0\).`,
        S`<b>Simplifie.</b> \((x-1)(x+3)-5=x^2+2x-8=(x+4)(x-2)\). Donc \(x(x+4)(x-2)>0\).`,
        S`<b>Tableau de signes.</b> ${signTable([lin(1, 0), lin(1, 4), lin(1, -2)], ">")}L'inéquation est vérifiée pour \(-4\lt x\lt0\) ou \(x>2\).`,
        S`<b>Tiens compte du contexte.</b> Chaque dimension doit être positive, donc \(x>1\). Seul \(x>2\) convient.`,
        S`<b>Vérifie.</b> \(x=3\) : volume \(3(2)(6)=36>15\) ✓`],
      S`\(x>2\)`,
      plane({ view: { xmin: 0, xmax: 4, ymin: -5, ymax: 40 }, curves: [{ f: (x) => x * (x - 1) * (x + 3), a: 1, color: "violet" }, { f: (x) => 5 * x, a: 1, color: "blue" }], points: [{ x: 2, y: 10, label: "(2, 10)", color: "amber" }], step: { x: 1, y: 5 } }, "violet : volume; bleu : 5x")],
  ]),

  practice([
    q("résous", S`Résous \((x+1)(x-3)\le0\).`, choice([S`\([-1,3]\)`, S`\((-1,3)\)`, S`\((-\infty,-1]\cup[3,\infty)\)`, S`\([-3,1]\)`], 0),
      "Une parabole ouverte vers le haut est sous l'axe entre ses zéros.", [S`Signes +, −, +; inclus les zéros.`], S`\([-1,3]\)`),
    q("dénombre", S`Combien d'entiers de \(-5\) à \(5\) vérifient \((x+3)(x-1)(x-4)\lt0\)?`, num(4),
      "Solution : x < −3 ou 1 < x < 4.", [S`\(-5,-4\) et \(2,3\).`], S`\(4\)`),
    q("résous", S`Résous \(x^3-4x>0\).`, choice([S`\((-2,0)\cup(2,\infty)\)`, S`\((-\infty,-2)\cup(0,2)\)`, S`\((2,\infty)\)`, S`\((-2,2)\)`], 0),
      "Factorise : x(x − 2)(x + 2).", [S`Signes −, +, −, +.`], S`\((-2,0)\cup(2,\infty)\)`),
    q("plus petit", S`Quel est le plus petit entier positif qui vérifie \(x^3-9x^2+14x>0\)?`, num(1),
      "x(x − 2)(x − 7).", [S`\(0\lt x\lt2\) ou \(x>7\) : \(x=1\) convient.`], S`\(1\)`),
    q("zéro double", S`Résous \((x+2)^2(x-3)\ge0\).`, choice([S`\(\{-2\}\cup[3,\infty)\)`, S`\([3,\infty)\)`, S`\([-2,3]\)`, S`\([-2,\infty)\)`], 0),
      "Le facteur au carré ne change jamais le signe.", [S`Négatif pour \(x\lt3\), sauf en \(x=-2\), où il vaut 0.`], S`\(x=-2\) ou \(x\ge3\)`),
  ]),

  ...hard([
    ["Une inéquation de degré 4 avec un zéro double", S`Résous \(x^4-3x^3-10x^2\le0\).`,
      [S`\(x^2(x^2-3x-10)=x^2(x-5)(x+2)\le0\).`, S`Valeurs critiques \(-2, 0\) (ordre 2), \(5\). Le facteur \(x^2\) n'est jamais négatif, donc il ne change jamais le signe :${signTable([lin(1, 0, 2), lin(1, -5), lin(1, 2)], "<=")}`, S`Inclus tous les zéros.`],
      S`\(x\in[-2,5]\)`,
      plane({ view: { xmin: -3, xmax: 6, ymin: -160, ymax: 60 }, curves: [{ f: (x) => x ** 4 - 3 * x ** 3 - 10 * x * x, color: "violet" }], points: [{ x: -2, y: 0, label: "−2", color: "red" }, { x: 0, y: 0, label: "0", color: "amber" }, { x: 5, y: 0, label: "5", color: "red" }], step: { x: 1, y: 20 } })],
    ["Réarranger, puis factoriser", S`Résous \(x^3+3x^2\ge4\).`,
      [S`\(x^3+3x^2-4\ge0\); \(P(1)=0\). Divise : \(x^2+4x+4=(x+2)^2\).`, S`\((x-1)(x+2)^2\ge0\) : le facteur au carré n'est jamais négatif, donc le signe est celui de \(x-1\), sauf que le produit vaut 0 en \(x=-2\).${signTable([lin(1, -1), lin(1, 2, 2)], ">=")}`],
      S`\(x\ge1\) ou \(x=-2\)`],
  ], [
    q("difficile", S`Combien d'entiers vérifient \(x^4-13x^2+36\lt0\)?`, num(0),
      "(x² − 4)(x² − 9) < 0.", [S`\(4\lt x^2\lt9\) : \(2\lt|x|\lt3\) — aucun entier.`], S`\(0\)`),
    q("difficile", S`Résous \((x-1)^3(x+2)\lt0\).`, choice([S`\(-2\lt x\lt1\)`, S`\(x\lt-2\) ou \(x>1\)`, S`\(x\lt1\)`, S`\(x>-2\)`], 0),
      "Un ordre 3 change quand même le signe.", [S`Degré 4, \(a>0\) : +, −, +.`], S`\(-2\lt x\lt1\)`),
    q("difficile", S`Quel est le plus grand entier qui vérifie \(2x^3-x^2-8x+4\lt0\)?`, num(1),
      "Groupe : x²(2x − 1) − 4(2x − 1).", [S`\((2x-1)(x-2)(x+2)\lt0\) : \(x\lt-2\) ou \(\tfrac12\lt x\lt2\).`], S`\(1\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi ne puis-je pas diviser les deux membres par x?", "Si x est négatif, le sens de l'inégalité doit changer, et si x = 0, on ne peut pas diviser du tout; la factorisation conserve tous les cas."],
      ["Ai-je besoin d'un tableau de signes complet?", "Pas toujours — une valeur test par intervalle fonctionne aussi. Le tableau de signes montre pourquoi les signes sont ce qu'ils sont."],
      ["Qu'est-ce qui change pour ≥ ou ≤?", "Les valeurs critiques elles-mêmes sont des solutions, donc utilise des points pleins et des crochets."],
      ["Comment traiter un facteur comme x² + 1?", "Il est toujours positif, donc il ne change jamais le signe; laisse-le hors du tableau (mais pas hors du raisonnement)."],
      ["Comment vérifier ma réponse?", "Choisis une valeur à l'intérieur de ta solution et une à l'extérieur; substitue-les dans l'inéquation de départ."],
    ],
    summary: [
      "Un membre égal à 0; factorise complètement.",
      "Les valeurs critiques partagent la droite numérique.",
      "Le tableau de signes ou des valeurs test donnent le signe de chaque intervalle.",
      "Les zéros d'ordre pair ne changent pas le signe.",
    ],
    next: "La leçon 2.7 révise tout le chapitre.",
  }),
];
