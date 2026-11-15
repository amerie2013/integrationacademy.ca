// MCR3U-FR 8.3 — Intérêt composé : valeur actuelle. VA = A(1 + i)⁻ⁿ, comparer des offres, trouver le nombre de
// périodes par essais successifs, temps de doublement. Miroir de ../mcr3u-ch8/l8_3.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { pv, fv, m, pct, periodsTo } from "./fin.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "8.3 Intérêt composé : valeur actuelle";
export const ID = lessonId(8, 3);
const S = String.raw;
const debt = pv(3000, 0.06, 2) + pv(4000, 0.06, 5);
const qN = periodsTo(2000 / 1500, 0.012);

export const blocks = () => [
  intro({
    icon: "⏪",
    title: "Intérêt composé : valeur actuelle",
    overview: S`La <strong>valeur actuelle</strong> d'un montant futur est le capital qu'il faudrait placer aujourd'hui, à un taux composé donné, pour atteindre ce montant. Isoler \(P\) dans \(A=P(1+i)^n\) donne \(PV=\frac{A}{(1+i)^n}=A(1+i)^{-n}\). Dans cette leçon, tu vas trouver des valeurs actuelles, comparer des offres de paiement faites à des moments différents et trouver combien de périodes de capitalisation il faut pour atteindre un objectif — par essais successifs, avec un tableau ou avec un graphique.`,
    goals: [
      "calculer la valeur actuelle PV = A(1 + i)⁻ⁿ;",
      "expliquer pourquoi la valeur actuelle est inférieure à la valeur future;",
      "comparer des montants payés à des moments différents;",
      "trouver le nombre de périodes de capitalisation n par essais successifs ou à l'aide d'un graphique;",
      "estimer le temps de doublement.",
    ],
    curriculum: "C2.3 (résoudre des problèmes portant sur le capital P à l'aide de A = P(1 + i)ⁿ), C2.4 (déterminer le nombre de périodes de capitalisation n à l'aide de A = P(1 + i)ⁿ, décrire des stratégies comme les essais successifs, la loi de la puissance d'une puissance ou les graphiques, et résoudre des problèmes connexes)",
    prior: [
      [S`Évalue \(5000\div1.05^3\) au cent près.`, "4319.19."],
      [S`Résous \(2^n=64\).`, "n = 6."],
      [S`Écris \(\frac1{x^4}\) avec un exposant négatif.`, S`\(x^{-4}\).`],
    ],
    words: [
      ["Valeur actuelle PV", "le montant nécessaire maintenant", ""],
      ["Valeur future FV (ou A)", "le montant à un moment ultérieur", ""],
      ["Actualisation", "ramener un montant dans le temps : diviser par (1 + i)ⁿ", ""],
      ["Temps de doublement", "le temps nécessaire pour qu'un placement double", ""],
    ],
  }),

  section("📌 Déplacer l'argent dans le temps", S`
  ${table(["Sens", "Opération", "Formule"], [["vers l'avant (valeur future)", "multiplier par \\((1+i)^n\\)", "\\(FV=PV(1+i)^n\\)"], ["vers l'arrière (valeur actuelle)", "diviser par \\((1+i)^n\\)", "\\(PV=FV(1+i)^{-n}\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 9000 }, curves: [{ f: (t) => pv(8000, 0.04, 5) * 1.04 ** t, a: 0, b: 5, color: "violet" }], points: [{ x: 0, y: pv(8000, 0.04, 5), label: `PV ${m(pv(8000, 0.04, 5))}` }, { x: 5, y: 8000, label: "FV 8000" }], step: { x: 1, y: 1000 }, xlabel: "années", ylabel: "valeur" }, "pour avoir 8000 dollars dans 5 ans à 4%/a, place environ 6575 maintenant")}
  ${keyIdea(S`Pour comparer des montants payés à des moments différents, ramène-les tous à la même date — habituellement aujourd'hui — à l'aide de la valeur actuelle.`)}`),

  section("📌 Explorer", S`<p>Fixe un objectif, un taux et une durée. Observe la valeur actuelle diminuer quand le taux ou la durée augmente.</p>`),

  widget("presentValueLab", { init: [10000, 5, 8] }),

  section("📌 Attention", watchOut([
    "Utilise le taux par période et le nombre de périodes, comme pour la valeur future.",
    "La valeur actuelle est toujours inférieure à la valeur future (pour un taux positif).",
    "Quand tu cherches n, la réponse est habituellement arrondie VERS LE HAUT à la période entière suivante.",
    "Garde (1 + i)ⁿ sans l'arrondir jusqu'à la réponse finale.",
  ])),

  examples([
    ["Valeur actuelle, capitalisation annuelle", "Combien faut-il placer maintenant à 4%/a composé annuellement pour avoir 8000 dollars dans 5 ans?",
      [S`<b>Idée.</b> La valeur actuelle fait la capitalisation à rebours. On connaît le montant futur et on cherche le montant de départ.`,
        S`<b>Isoler.</b> \(A=P(1+i)^n\) donne \(PV=A(1+i)^{-n}\).`,
        S`<b>Substituer.</b> \(PV=8000(1.04)^{-5}\).`,
        S`<b>Calculer.</b> \((1.04)^{-5}\approx0.821927\), donc \(PV\approx${m(pv(8000, 0.04, 5))}\).`,
        S`<b>Vérifier vers l'avant.</b> \(${m(pv(8000, 0.04, 5))}(1.04)^5\approx8000\) ✓`],
      `${m(pv(8000, 0.04, 5))} dollars`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 6000, ymax: 8600 }, curves: [{ f: (t) => pv(8000, 0.04, 5) * 1.04 ** t, a: 0, b: 5, color: "violet" }], points: [{ x: 0, y: pv(8000, 0.04, 5), label: `PV ${m(pv(8000, 0.04, 5))}`, color: "amber" }, { x: 5, y: 8000, label: "(5, 8000)" }], step: { x: 1, y: 400 }, xlabel: "années", ylabel: "valeur" })],
    ["Valeur actuelle, capitalisation mensuelle", "Combien faut-il placer maintenant à 6%/a composé mensuellement pour avoir 12 000 dollars dans 3 ans?",
      [S`<b>Convertir.</b> \(i=\frac{0.06}{12}=0.005\) et \(n=3\times12=36\).`,
        S`<b>Substituer.</b> \(PV=12\,000(1.005)^{-36}\).`,
        S`<b>Calculer.</b> \((1.005)^{-36}\approx0.835645\), donc \(PV\approx${m(pv(12000, 0.005, 36))}\).`,
        S`<b>Interpréter.</b> L'intérêt gagné sera de \(12\,000-${m(pv(12000, 0.005, 36))}=${m(12000 - pv(12000, 0.005, 36))}\) dollars.`,
        S`<b>Vérifier.</b> La valeur actuelle est inférieure à l'objectif, comme il se doit ✓`],
      `${m(pv(12000, 0.005, 36))} dollars`,
      plane({ view: { xmin: 0, xmax: 4, ymin: 9000, ymax: 12800 }, curves: [{ f: (t) => pv(12000, 0.005, 36) * 1.005 ** (12 * t), a: 0, b: 3, color: "violet" }], points: [{ x: 0, y: pv(12000, 0.005, 36), label: `PV ${m(pv(12000, 0.005, 36))}`, color: "amber" }, { x: 3, y: 12000, label: "(3, 12 000)" }], step: { x: 1, y: 500 }, xlabel: "années", ylabel: "valeur" })],
    ["Trouver n par essais successifs", "Combien d'années faut-il pour que 2500 dollars atteignent 4000 dollars à 5%/a composé annuellement?",
      [S`<b>Poser l'inéquation.</b> \(2500(1.05)^n\ge4000\). Divise par 2500 : \(1.05^n\ge1.6\).`,
        S`<b>Pourquoi des essais?</b> Nous n'avons pas encore d'outil algébrique pour isoler un exposant, alors nous testons des valeurs.`,
        S`<b>Tester.</b> ${tv(["\\(n\\)", "8", "9", "10"], ["\\(1.05^n\\)", "1.477", "1.551", "1.629"], ["montant", "3693.64", "3878.32", "4072.24"])}`,
        S`<b>Décider.</b> Après 9 ans, l'objectif n'est pas atteint. Après 10 ans, il l'est. Donc 10 ans.`],
      "10 ans",
      plane({ view: { xmin: 0, xmax: 12, ymin: 2300, ymax: 4800 }, curves: [{ f: (t) => 2500 * 1.05 ** t, a: 0, color: "violet" }], lines: [{ m: 0, b: 4000, color: "amber", dash: true }], points: [{ x: 9, y: 2500 * 1.05 ** 9 }, { x: 10, y: 2500 * 1.05 ** 10, label: "(10, 4072.24)", color: "amber" }], step: { x: 1, y: 250 }, xlabel: "années", ylabel: "A" })],
    ["Temps de doublement", "Environ combien de temps faut-il pour que l'argent double à 7.2%/a composé annuellement?",
      [S`<b>Poser l'équation.</b> Le capital s'annule. \(P(1.072)^n=2P\) donne \(1.072^n=2\), donc la réponse ne dépend pas de \(P\).`,
        S`<b>Tester.</b> \(1.072^9\approx1.87\), ce qui est trop petit. \(1.072^{10}\approx2.004\), ce qui suffit tout juste.`,
        S`<b>Réponse.</b> Environ 10 ans.`,
        S`<b>Vérifier avec la règle de 72.</b> Une estimation rapide est \(72\div\text{taux}\) : \(72\div7.2=10\) ✓`],
      "environ 10 ans",
      plane({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 2.4 }, curves: [{ f: (t) => 1.072 ** t, a: 0, color: "violet" }], lines: [{ m: 0, b: 2, color: "amber", dash: true }], points: [{ x: 10, y: 1.072 ** 10, label: "(10, 2.004)", color: "amber" }], step: { x: 1, y: 0.4 }, xlabel: "années", ylabel: "facteur de croissance" })],
    ["Comparer des offres", "Tu peux recevoir 5000 dollars maintenant ou 6000 dollars dans 3 ans. L'argent rapporte 5%/a composé annuellement. Quelle offre vaut le plus?",
      [S`<b>Principe.</b> On ne peut comparer des montants à des moments différents qu'à une même date, donc on les ramène tous deux à aujourd'hui.`,
        S`<b>Valeur d'aujourd'hui de 6000.</b> \(PV=6000(1.05)^{-3}\approx${m(pv(6000, 0.05, 3))}\).`,
        S`<b>Comparer.</b> \(${m(pv(6000, 0.05, 3))}>5000\), donc le paiement ultérieur vaut plus.`,
        S`<b>Vérifier dans l'autre sens.</b> 5000 maintenant deviennent \(5000(1.05)^3=${m(fv(5000, 0.05, 3))}\), ce qui est moins que 6000 ✓`],
      "les 6000 dollars dans 3 ans (ils valent plus aujourd'hui)",
      plane({ view: { xmin: 0, xmax: 4, ymin: 4500, ymax: 6300 }, curves: [{ f: (t) => 5000 * 1.05 ** t, a: 0, b: 3, color: "blue" }, { f: (t) => pv(6000, 0.05, 3) * 1.05 ** t, a: 0, b: 3, color: "violet" }], points: [{ x: 0, y: 5000, label: "5000" }, { x: 3, y: 6000, label: "6000", color: "violet" }, { x: 3, y: fv(5000, 0.05, 3), label: m(fv(5000, 0.05, 3)) }], step: { x: 1, y: 200 }, xlabel: "années", ylabel: "valeur" })],
  ]),

  practice([
    q("PV", "Trouve la valeur actuelle de 5000 dollars payables dans 4 ans à 3%/a composé annuellement (en dollars).", num(+m(pv(5000, 0.03, 4)), 0.02),
      "5000(1.03)⁻⁴.", [S`\(\div1.03^4\).`], m(pv(5000, 0.03, 4))),
    q("PV", "Trouve la valeur actuelle de 10 000 dollars payables dans 10 ans à 6%/a composé semestriellement (en dollars).", num(+m(pv(10000, 0.03, 20)), 0.02),
      "i = 0.03, n = 20.", [S`\(10000(1.03)^{-20}\).`], m(pv(10000, 0.03, 20))),
    q("doublement", "Combien d'années entières faut-il pour que l'argent double à 9%/a composé annuellement?", num(periodsTo(2, 0.09)),
      "Trouve le premier n tel que 1.09ⁿ ≥ 2.", [S`\(1.09^8\approx1.99\), \(1.09^9\approx2.17\).`], String(periodsTo(2, 0.09))),
    q("comparer", "Pour un taux d'intérêt positif, la valeur actuelle d'un montant futur est …", choice(["inférieure au montant futur", "supérieure au montant futur", "égale au montant futur", "toujours la moitié du montant futur"], 0),
      "On ajoute de l'intérêt pour atteindre le montant futur.", ["PV = FV ÷ (1 + i)ⁿ, et (1 + i)ⁿ > 1."], "inférieure"),
    q("PV", "Trouve la valeur actuelle de 2000 dollars payables dans 2 ans à 12%/a composé mensuellement (en dollars).", num(+m(pv(2000, 0.01, 24)), 0.02),
      "i = 0.01, n = 24.", [S`\(2000(1.01)^{-24}\).`], m(pv(2000, 0.01, 24))),
  ]),

  ...hard([
    ["Rembourser deux dettes à l'avance", "Tu dois 3000 dollars dans 2 ans et 4000 dollars dans 5 ans. L'argent rapporte 6%/a composé annuellement. Quel paiement unique aujourd'hui règle les deux dettes?",
      [S`\(3000(1.06)^{-2}+4000(1.06)^{-5}\).`],
      `${m(debt)} dollars`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 4500 }, points: [{ x: 0, y: debt, label: `aujourd'hui ${m(debt)}` }, { x: 2, y: 3000, label: "3000" }, { x: 5, y: 4000, label: "4000" }], step: { x: 1, y: 500 }, xlabel: "années", ylabel: "dollars" })],
    ["Des trimestres jusqu'à l'objectif", "Combien de temps faut-il pour que 1500 dollars atteignent 2000 dollars à 4.8%/a composé trimestriellement?",
      [S`\(i=0.012\) : il faut \(1.012^n\ge\frac43\).`, `Essais successifs : n = ${qN}.`],
      `${qN} trimestres (${(qN / 4).toFixed(2)} ans)`],
  ], [
    q("difficile", "Combien faut-il placer maintenant à 4.2%/a composé mensuellement pour avoir 25 000 dollars dans 18 ans (en dollars)?", num(+m(pv(25000, 0.0035, 216)), 0.02),
      "i = 0.0035, n = 216.", [S`\(25000(1.0035)^{-216}\).`], m(pv(25000, 0.0035, 216))),
    q("difficile", "Combien de trimestres faut-il pour que l'argent triple à 6%/a composé trimestriellement?", num(periodsTo(3, 0.015)),
      "1.015ⁿ ≥ 3.", ["Essais successifs."], String(periodsTo(3, 0.015))),
    q("difficile", "4000 dollars deviennent 5000 dollars en 5 ans avec une capitalisation annuelle. Trouve le taux annuel (%, 2 décimales).", num(+pct(1.25 ** 0.2 - 1), 0.01),
      "1.25^(1/5) − 1.", [S`\(1.25^{0.2}\approx1.0456\).`], pct(1.25 ** 0.2 - 1)),
  ]),

  wrapUp({
    qas: [
      ["Que signifie la valeur actuelle?", "Le montant qui, placé aujourd'hui au taux donné, atteint le montant futur."],
      ["Pourquoi diviser par (1 + i)ⁿ?", "Cela annule n périodes de croissance."],
      ["Comment comparer des paiements faits à des moments différents?", "Ramène-les à la même date à l'aide de la valeur actuelle, puis compare."],
      ["Comment trouver n sans logarithmes?", "Par essais successifs avec des puissances de (1 + i), à l'aide d'un tableau ou en lisant un graphique."],
      ["Qu'est-ce que la règle de 72?", "Temps de doublement ≈ 72 ÷ (taux annuel en %) pour une capitalisation annuelle."],
    ],
    summary: [
      "PV = A(1 + i)⁻ⁿ.",
      "PV < FV pour un taux positif.",
      "Compare les offres à la même date.",
      "Trouve n par essais successifs; arrondis vers le haut.",
    ],
    next: "La leçon 8.4 étudie les versements réguliers : la valeur future d'une annuité.",
  }),
];
