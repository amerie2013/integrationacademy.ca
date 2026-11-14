// MHF4U-FR 2.1 — Division de polynômes et théorème du reste : division longue et division synthétique, l'énoncé de
// la division, le théorème du reste pour (x − b) et (ax − b), et coefficients inconnus à partir de restes donnés
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, expr, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "2.1 Division de polynômes et théorème du reste";
export const ID = lessonId(2, 1);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "➗",
    title: "Division de polynômes et théorème du reste",
    overview: S`Diviser un polynôme par un autre fonctionne comme la division longue avec des nombres : on obtient un quotient et un reste. La division synthétique est un raccourci rapide lorsque le diviseur est \(x-b\). Le reste a une signification surprenante : quand on divise \(P(x)\) par \(x-b\), le reste est exactement \(P(b)\) — la hauteur du graphique en \(x=b\). Ce <strong>théorème du reste</strong> te permet de trouver des restes sans diviser et de trouver des coefficients inconnus à partir d'un reste connu.`,
    goals: [
      "diviser un polynôme par un binôme à l'aide de la division longue et de la division synthétique;",
      "écrire l'énoncé de la division \\(P(x)=D(x)Q(x)+R\\);",
      "utiliser le théorème du reste pour les diviseurs \\(x-b\\) et \\(ax-b\\);",
      "trouver un coefficient inconnu à partir d'un reste donné;",
      "relier le reste à un point du graphique.",
    ],
    curriculum: "C3.1 (déterminer, par exploration, le lien entre le reste et P(b) lorsqu'on divise par x − b), C3.7 (résoudre des problèmes portant sur des expressions polynomiales)",
    prior: [
      [S`Divise \(437\) par \(12\) et donne le quotient et le reste.`, S`\(437=12(36)+5\).`],
      [S`Évalue \(P(x)=x^3-2x+1\) en \(x=-2\).`, S`\(-8+4+1=-3\).`],
      [S`Développe \((x-3)(x^2+2x-1)\).`, S`\(x^3-x^2-7x+3\).`],
    ],
    words: [
      ["Dividende", "le polynôme que l'on divise, \\(P(x)\\)", ""],
      ["Diviseur", "ce par quoi on divise, \\(D(x)\\)", "\\(x-2\\)"],
      ["Quotient / reste", "\\(Q(x)\\) et \\(R\\) dans \\(P=DQ+R\\)", ""],
      ["Division synthétique", "une méthode qui n'utilise que les coefficients, pour les diviseurs \\(x-b\\)", ""],
    ],
  }),

  section("📌 L'énoncé de la division", S`
  <p>Diviser \(P(x)\) par un diviseur \(D(x)\) donne un quotient \(Q(x)\) et un reste \(R(x)\) dont le degré est inférieur à celui du diviseur :</p>
  <div style="text-align:center;font-size:1.15em;margin:8px 0;">\(P(x)=D(x)\,Q(x)+R(x)\)</div>
  ${table(["Étape (division longue)", "Division synthétique avec b", "Pourquoi"], [
    ["Divise les termes dominants", "Abaisse le premier coefficient", "donne le terme suivant du quotient"],
    ["Multiplie le diviseur par ce terme", "Multiplie par b", "même produit, les signes sont intégrés"],
    ["Soustrais", "Additionne (car b = −(−b))", "le nouveau terme dominant s'annule"],
    ["Recommence jusqu'à ce que le degré soit trop petit", "Le dernier nombre est le reste", "R est de degré inférieur à x − b"],
  ])}
  ${keyIdea(S`<strong>Théorème du reste.</strong> Quand on divise \(P(x)\) par \(x-b\), le reste est \(P(b)\). Quand on le divise par \(ax-b\), le reste est \(P\!\left(\tfrac ba\right)\). Écris des coefficients nuls pour les puissances manquantes avant de diviser.`)}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -12, ymax: 14 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 4, color: "violet" }], points: [{ x: 3, y: 4, label: "(3, 4) : reste 4", color: "red" }, { x: -1, y: 0, label: "(−1, 0) : reste 0", color: "green" }], step: { x: 1, y: 2 } }, "P(x) = x³ − 3x² + 4 : la division par x − 3 laisse 4 = P(3); la division par x + 1 laisse 0 = P(−1).")}`),

  section("📌 Exploration", S`<p>Modifie les coefficients et le diviseur. Suis les trois lignes de la division synthétique et vérifie que le reste est égal à la hauteur du graphique en \(x=b\).</p>`),

  widget("syntheticDivide", { init: { cs: [1, -3, 0, 4], b: 3 } }),

  section("📌 Utiliser le théorème du reste", S`
  <p>Le théorème du reste transforme une question de division en une évaluation, et une évaluation en une équation lorsqu'un coefficient est inconnu.</p>
  ${watchOut([
    "Diviser par x + 3 signifie b = −3, et non 3.",
    "Écris 0 pour chaque puissance manquante : x⁴ − 5x² + 2 a pour coefficients 1, 0, −5, 0, 2.",
    "Dans la division synthétique, on ADDITIONNE chaque colonne; dans la division longue, on SOUSTRAIT.",
    "Pour un diviseur 2x − 1, évalue P(½), et non P(1) ni P(2).",
    "Le quotient est de degré inférieur d'une unité à celui du dividende lorsqu'on divise par un facteur linéaire.",
  ])}`),

  examples([
    ["Division longue", S`Divise \(2x^3+3x^2-8x+5\) par \(x+3\). Écris l'énoncé de la division.`,
      [S`<b>Méthode.</b> Divise les termes dominants, multiplie, soustrais, et recommence jusqu'à ce que le degré soit inférieur à celui du diviseur.`,
        S`<b>Premier terme.</b> \(2x^3\div x=2x^2\). Soustrais \(2x^2(x+3)=2x^3+6x^2\), ce qui laisse \(-3x^2-8x\).`,
        S`<b>Deuxième terme.</b> \(-3x^2\div x=-3x\). Soustrais \(-3x(x+3)=-3x^2-9x\), ce qui laisse \(x+5\).`,
        S`<b>Troisième terme.</b> \(x\div x=1\). Soustrais \(x+3\), ce qui laisse le reste \(2\).`,
        S`<b>Vérifie avec le théorème du reste.</b> \(P(-3)=-54+27+24+5=2\) ✓. Le graphique a une hauteur de 2 en \(x=-3\).`],
      S`\(2x^3+3x^2-8x+5=(x+3)(2x^2-3x+1)+2\)`,
      plane({ view: { xmin: -4.5, xmax: 2.5, ymin: -8, ymax: 26 }, curves: [{ f: (x) => 2 * x ** 3 + 3 * x * x - 8 * x + 5, color: "violet" }], points: [{ x: -3, y: 2, label: "(−3, 2)", color: "red" }], step: { x: 1, y: 4 } })],
    ["Division synthétique avec un terme manquant", S`Divise \(x^4-5x^2+2x-7\) par \(x-2\).`,
      [S`<b>Disposition.</b> Écris tous les coefficients, avec un 0 pour le terme en \(x^3\) qui manque : \(1,\ 0,\ -5,\ 2,\ -7\). Le diviseur \(x-2\) donne \(b=2\).`,
        S`<b>Multiplie et additionne.</b> ${tv(["coefficients", "1", "0", "\\(-5\\)", "2", "\\(-7\\)"], ["multiplier par 2", "", "2", "4", "\\(-2\\)", "0"], ["additionner", "1", "2", "\\(-1\\)", "0", "\\(-7\\)"])}`,
        S`<b>Lis le résultat.</b> La dernière valeur est le reste. Les autres forment le quotient, de degré inférieur d'une unité : \(x^3+2x^2-x+0\).`,
        S`<b>Vérifie.</b> \(P(2)=16-20+4-7=-7\) ✓, ce qui correspond au point \((2,-7)\) du graphique.`],
      S`\(Q(x)=x^3+2x^2-x\), \(R=-7\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -16, ymax: 6 }, curves: [{ f: (x) => x ** 4 - 5 * x * x + 2 * x - 7, color: "violet" }], points: [{ x: 2, y: -7, label: "(2, −7)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Le reste sans diviser", S`Trouve le reste lorsque \(x^3-4x^2+x+9\) est divisé par \(x+1\).`,
      [S`<b>Théorème du reste.</b> Diviser \(P(x)\) par \(x-b\) laisse le reste \(P(b)\), car \(P(x)=(x-b)Q(x)+R\) et la première partie s'annule en \(x=b\).`,
        S`<b>Trouve \(b\).</b> \(x+1=x-(-1)\), donc \(b=-1\).`,
        S`<b>Évalue.</b> \(P(-1)=-1-4-1+9=3\).`,
        S`<b>Vérifie par division synthétique.</b> \(1,\ -5,\ 6,\ 3\) : la dernière valeur est 3 ✓`],
      S`reste \(3\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -6, ymax: 14 }, curves: [{ f: (x) => x ** 3 - 4 * x * x + x + 9, color: "violet" }], points: [{ x: -1, y: 3, label: "(−1, 3)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Un diviseur de la forme ax − b", S`Trouve le reste lorsque \(6x^3-x^2+4x+1\) est divisé par \(2x-1\).`,
      [S`<b>Règle.</b> Le reste est la valeur de \(P\) là où le diviseur vaut 0.`,
        S`<b>Trouve la valeur de x.</b> \(2x-1=0\) donne \(x=\tfrac12\).`,
        S`<b>Évalue.</b> \(P\!\left(\tfrac12\right)=6\cdot\tfrac18-\tfrac14+4\cdot\tfrac12+1=\tfrac34-\tfrac14+2+1\).`,
        S`<b>Simplifie.</b> \(\tfrac12+3=\tfrac72\).`,
        S`<b>Vérifie sur le graphique.</b> Le point \(\left(\tfrac12,3.5\right)\) est sur la courbe ✓`],
      S`reste \(\tfrac72\)`,
      plane({ view: { xmin: -1.5, xmax: 1.5, ymin: -8, ymax: 12 }, curves: [{ f: (x) => 6 * x ** 3 - x * x + 4 * x + 1, color: "violet" }], points: [{ x: 0.5, y: 3.5, label: "(½, 3.5)", color: "red" }], step: { x: 0.5, y: 2 } })],
    ["Trouver le coefficient inconnu", S`Lorsque \(x^3+kx^2-3x+4\) est divisé par \(x-2\), le reste est \(10\). Trouve \(k\).`,
      [S`<b>Traduis.</b> Le théorème du reste dit que \(P(2)=10\). Cela donne une équation en \(k\).`,
        S`<b>Évalue.</b> \(P(2)=8+4k-6+4=6+4k\).`,
        S`<b>Résous.</b> \(6+4k=10\), donc \(4k=4\) et \(k=1\).`,
        S`<b>Vérifie.</b> Avec \(k=1\) : \(8+4-6+4=10\) ✓`],
      S`\(k=1\)`,
      plane({ view: { xmin: -3.5, xmax: 3, ymin: -6, ymax: 16 }, curves: [{ f: (x) => x ** 3 + x * x - 3 * x + 4, color: "violet" }], points: [{ x: 2, y: 10, label: "(2, 10)", color: "red" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("reste", S`Trouve le reste lorsque \(x^3+2x^2-5x+1\) est divisé par \(x-1\).`, num(-1),
      "Évalue P(1).", [S`\(1+2-5+1=-1\).`], S`\(-1\)`),
    q("quotient", S`Trouve le quotient de \((x^2+7x+12)\div(x+4)\).`, expr("x+3"),
      "Division synthétique avec b = −4, ou factorise.", [S`\(x^2+7x+12=(x+4)(x+3)\).`], S`\(x+3\)`),
    q("reste", S`Trouve le reste lorsque \(2x^3-x+4\) est divisé par \(x+2\).`, num(-10),
      "b = −2.", [S`\(2(-8)+2+4=-10\).`], S`\(-10\)`),
    q("énoncé", S`\(P(x)=(x-3)(x^2+1)+4\). Que vaut \(P(3)\)?`, num(4),
      "Le premier produit vaut 0 en x = 3.", [S`\(0\cdot10+4=4\).`], S`\(4\)`),
    q("ax − b", S`Trouve le reste lorsque \(4x^2-4x+5\) est divisé par \(2x-1\).`, num(4),
      "Évalue en x = ½.", [S`\(1-2+5=4\).`], S`\(4\)`),
  ]),

  ...hard([
    ["Deux restes, deux inconnues", S`\(P(x)=x^3+ax^2+bx-6\) laisse un reste de \(2\) lorsqu'il est divisé par \(x-1\) et de \(-28\) lorsqu'il est divisé par \(x+2\). Trouve \(a\) et \(b\).`,
      [S`\(P(1)=1+a+b-6=2\Rightarrow a+b=7\).`, S`\(P(-2)=-8+4a-2b-6=-28\Rightarrow 4a-2b=-14\Rightarrow 2a-b=-7\).`, S`Additionne : \(3a=0\Rightarrow a=0\), donc \(b=7\).`],
      S`\(a=0\), \(b=7\) : \(P(x)=x^3+7x-6\)`,
      plane({ view: { xmin: -3, xmax: 2.5, ymin: -32, ymax: 12 }, curves: [{ f: (x) => x ** 3 + 7 * x - 6, color: "violet" }], points: [{ x: 1, y: 2, label: "(1, 2)", color: "red" }, { x: -2, y: -28, label: "(−2, −28)", color: "red" }], step: { x: 1, y: 4 } })],
    ["Diviser par un trinôme du second degré", S`Lorsque \(P(x)\) est divisé par \(x-1\), le reste est \(4\), et lorsqu'il est divisé par \(x+1\), le reste est \(-2\). Trouve le reste lorsque \(P(x)\) est divisé par \(x^2-1\).`,
      [S`Diviser par un polynôme du second degré laisse un reste de degré au plus 1 : \(P(x)=(x^2-1)Q(x)+mx+n\).`, S`\(x=1\) : \(m+n=4\). \(x=-1\) : \(-m+n=-2\).`, S`Donc \(n=1\), \(m=3\).`],
      S`reste \(3x+1\)`],
  ], [
    q("difficile", S`Le reste lorsque \(2x^3-kx^2+x-3\) est divisé par \(x-2\) est \(7\). Trouve \(k\).`, num(2),
      "P(2) = 7.", [S`\(16-4k+2-3=15-4k=7\).`], S`\(2\)`),
    q("difficile", S`Trouve le reste lorsque \(x^{50}-x^3+2\) est divisé par \(x+1\).`, num(4),
      "Évalue en x = −1.", [S`\(1-(-1)+2=4\).`], S`\(4\)`),
    q("difficile", S`Trouve le reste lorsque \(3x^3+2x^2-x+5\) est divisé par \(3x+2\). (Donne une valeur décimale à 3 décimales.)`, num(17 / 3, 0.001),
      "Évalue en x = −2/3.", [S`\(3\left(-\tfrac{8}{27}\right)+2\cdot\tfrac49+\tfrac23+5=-\tfrac89+\tfrac89+\tfrac23+5=\tfrac{17}{3}\).`], S`\(\tfrac{17}{3}\approx5.667\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi le reste est-il égal à P(b)?", "Remplace x par b dans P(x) = (x − b)Q(x) + R : le premier terme devient 0, il reste P(b) = R."],
      ["Quand puis-je utiliser la division synthétique?", "Lorsque le diviseur est linéaire. Pour x − b, utilise b; pour ax − b, divise ensuite par a (ou utilise b/a et divise le quotient par a)."],
      ["Pourquoi additionner au lieu de soustraire dans la division synthétique?", "La division synthétique utilise b au lieu de −b, donc chaque soustraction devient une addition."],
      ["Quel degré le reste peut-il avoir?", "Inférieur à celui du diviseur : une constante pour un diviseur linéaire, au plus linéaire pour un diviseur du second degré."],
      ["Comment vérifier une division?", "Multiplie le diviseur par le quotient et ajoute le reste; tu dois retrouver le dividende."],
    ],
    summary: [
      "P(x) = D(x)Q(x) + R(x), deg R < deg D.",
      "Division synthétique : abaisse, multiplie par b, additionne.",
      "Le reste de P ÷ (x − b) est P(b); celui de P ÷ (ax − b) est P(b/a).",
      "Les coefficients nuls tiennent la place des puissances manquantes.",
    ],
    next: "La leçon 2.2 utilise un reste de 0 : le théorème des facteurs.",
  }),
];
