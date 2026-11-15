// MCR3U-FR 8.4 — Annuités : valeur future. Annuités simples de fin de période, droites de temps,
// FV = R[(1 + i)ⁿ − 1]/i comme série géométrique, trouver le versement périodique, intérêt gagné, commencer tôt.
// Miroir de ../mcr3u-ch8/l8_4.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { annFV, payFV, paymentsTo, fv, m } from "./fin.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "8.4 Annuités : valeur future";
export const ID = lessonId(8, 4);
const S = String.raw;
const tl = [500 * 1.04 ** 3, 500 * 1.04 ** 2, 500 * 1.04, 500];
const early = annFV(2000, 0.06, 40), late = annFV(4000, 0.06, 20);
const nNeed = paymentsTo(20000, 300, 0.005);

export const blocks = () => [
  intro({
    icon: "🏦",
    title: "Annuités : valeur future",
    overview: S`Une <strong>annuité</strong> (ou rente) est une suite de versements égaux faits à intervalles réguliers. Dans une <strong>annuité simple de fin de période</strong>, les versements sont faits à la fin de chaque période et la période de capitalisation est la même que la période de versement. Chaque versement rapporte de l'intérêt composé jusqu'à la fin, donc la valeur future est une série géométrique : \(FV=R+R(1+i)+\cdots+R(1+i)^{n-1}=\frac{R\left[(1+i)^n-1\right]}{i}\). Dans cette leçon, tu vas utiliser des droites de temps, calculer des valeurs futures et trouver le versement nécessaire pour atteindre un objectif.`,
    goals: [
      "décrire une annuité simple de fin de période et tracer sa droite de temps;",
      "expliquer pourquoi sa valeur future est une série géométrique;",
      "calculer FV = R[(1 + i)ⁿ − 1]/i;",
      "trouver le versement périodique nécessaire pour un objectif d'épargne;",
      "comparer le total des dépôts à l'intérêt gagné.",
    ],
    curriculum: "C2.5 (expliquer le sens du terme annuité et déterminer les liens entre les annuités simples de fin de période, les séries géométriques et la croissance exponentielle), C2.7 (résoudre des problèmes, à l'aide de la technologie, portant sur le montant, la valeur actuelle et le versement périodique d'une annuité simple de fin de période)",
    prior: [
      [S`Trouve \(1+2+4+\cdots+2^7\).`, "255."],
      [S`Évalue \(\frac{1.05^{10}-1}{0.05}\) à 4 décimales.`, "12.5779."],
      ["Combien y a-t-il de mois en 4 ans?", "48."],
    ],
    words: [
      ["Annuité", "des versements égaux à intervalles réguliers", ""],
      ["Annuité simple de fin de période", "versements à la fin de chaque période; période de versement = période de capitalisation", ""],
      ["Versement périodique R", "le montant de chaque versement", ""],
      ["Valeur future FV", "la valeur totale à la fin, intérêt compris", ""],
    ],
  }),

  section("📌 La droite de temps", S`
  ${table(["Versement", "Payé à la fin de la période", "Rapporte de l'intérêt pendant", "Valeur à la fin"], [["1", "1", "n − 1 périodes", "\\(R(1+i)^{n-1}\\)"], ["2", "2", "n − 2 périodes", "\\(R(1+i)^{n-2}\\)"], ["…", "…", "…", "…"], ["n", "n", "0 période", "\\(R\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 650 }, segs: tl.map((v, k) => ({ pts: [[k + 0.7, 0], [k + 0.7, v], [k + 1.3, v], [k + 1.3, 0]], color: "violet" })), points: tl.map((v, k) => ({ x: k + 1, y: v, label: m(v) })), step: { x: 1, y: 100 }, xlabel: "numéro du versement", ylabel: "valeur à la fin" }, "quatre versements de 500 dollars à 4% : le premier a le plus augmenté")}
  ${keyIdea(S`Lis les valeurs du dernier versement jusqu'au premier : \(R, R(1+i), R(1+i)^2,\ldots\) — une série géométrique de raison \(1+i\). La formule de la somme donne \(FV=\frac{R[(1+i)^n-1]}{i}\).`)}`),

  section("📌 Explorer", S`<p>Modifie le versement, le taux et le nombre de versements. Chaque barre représente la valeur d'un versement à la fin; l'affichage les additionne.</p>`),

  widget("annuityFV", { init: [1000, 5, 10] }),

  section("📌 Attention", watchOut([
    "Le dernier versement ne rapporte aucun intérêt — il est fait tout à la fin.",
    "Utilise i par période de versement et n = nombre de versements.",
    "Total des dépôts = R × n; intérêt = FV − Rn.",
    "Pour trouver R, isole-le : R = FV·i / [(1 + i)ⁿ − 1].",
  ])),

  examples([
    ["Dépôts annuels", "On dépose 1000 dollars à la fin de chaque année pendant 10 ans à 5%/a composé annuellement. Trouve la valeur future.",
      [S`<b>Sens.</b> Une annuité est une suite de versements égaux faits à des moments réguliers. Chaque versement augmente pendant une durée différente, donc ensemble ils forment une série géométrique.`,
        S`<b>Formule.</b> \(FV=\dfrac{R\left[(1+i)^n-1\right]}{i}\).`,
        S`<b>Identifier.</b> \(R=1000\), \(i=0.05\), \(n=10\).`,
        S`<b>Calculer.</b> \(1.05^{10}\approx1.628895\), donc \(FV\approx\frac{1000(0.628895)}{0.05}\approx${m(annFV(1000, 0.05, 10))}\).`,
        S`<b>Vérifier la vraisemblance.</b> Les dépôts totalisent 10 000, donc le reste, ${m(annFV(1000, 0.05, 10) - 10000)}, est de l'intérêt ✓`],
      `${m(annFV(1000, 0.05, 10))} dollars`,
      plane({ view: { xmin: 0, xmax: 11, ymin: 0, ymax: 14000 }, points: Array.from({ length: 10 }, (_, k) => ({ x: k + 1, y: annFV(1000, 0.05, k + 1), label: k === 9 ? `(10, ${m(annFV(1000, 0.05, 10))})` : undefined, color: k === 9 ? "amber" : "blue" })), lines: [{ m: 1000, b: 0, color: "gray", dash: true }], step: { x: 1, y: 2000 }, xlabel: "année", ylabel: "solde" }, "pointillé : les dépôts seuls")],
    ["Additionner la série directement", "On fait quatre versements de 500 dollars à la fin de chaque année à 4%/a composé annuellement. Trouve la valeur future en additionnant la valeur de chaque versement.",
      [S`<b>Pendant combien de temps chaque versement augmente-t-il?</b> Le premier versement est fait après l'année 1, donc il augmente pendant 3 ans. Le dernier ne rapporte rien.`,
        S`<b>Valeur de chacun à la fin.</b> ${tv(["versement", "1<sup>er</sup>", "2<sup>e</sup>", "3<sup>e</sup>", "4<sup>e</sup>"], ["années de croissance", "3", "2", "1", "0"], ["valeur", m(tl[0]), m(tl[1]), m(tl[2]), m(tl[3])])}`,
        S`<b>Additionner.</b> \(${m(tl[3])}+${m(tl[2])}+${m(tl[1])}+${m(tl[0])}\approx${m(annFV(500, 0.04, 4))}\).`,
        S`<b>Vérifier avec la formule.</b> \(\frac{500(1.04^4-1)}{0.04}\approx${m(annFV(500, 0.04, 4))}\) ✓`],
      `${m(annFV(500, 0.04, 4))} dollars`,
      plane({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 650 }, segs: [tl[3], tl[2], tl[1], tl[0]].map((v, k) => ({ pts: [[k + 0.7, 0], [k + 0.7, v], [k + 1.3, v], [k + 1.3, 0]], color: "violet" })), points: [tl[3], tl[2], tl[1], tl[0]].map((v, k) => ({ x: k + 1, y: v, label: m(v) })), step: { x: 1, y: 100 }, xlabel: "années de croissance + 1", ylabel: "valeur" })],
    ["Dépôts mensuels", "On dépose 200 dollars à la fin de chaque mois pendant 5 ans à 3.6%/a composé mensuellement. Trouve la valeur future.",
      [S`<b>Convertir.</b> \(i=\frac{0.036}{12}=0.003\) et \(n=5\times12=60\). Les versements et la capitalisation sont tous deux mensuels.`,
        S`<b>Formule.</b> \(FV=\frac{200(1.003^{60}-1)}{0.003}\).`,
        S`<b>Calculer.</b> \(1.003^{60}\approx1.19691\), donc \(FV\approx\frac{200(0.19691)}{0.003}\approx${m(annFV(200, 0.003, 60))}\).`,
        S`<b>Vérifier la vraisemblance.</b> C'est un peu plus que les \(200\times60=12\,000\) déposés ✓`],
      `${m(annFV(200, 0.003, 60))} dollars`,
      plane({ view: { xmin: 0, xmax: 66, ymin: 0, ymax: 15000 }, curves: [{ f: (t) => annFV(200, 0.003, t), a: 1, color: "violet" }], lines: [{ m: 200, b: 0, color: "gray", dash: true }], points: [{ x: 60, y: annFV(200, 0.003, 60), label: `(60, ${m(annFV(200, 0.003, 60))})`, color: "amber" }], step: { x: 6, y: 2000 }, xlabel: "mois", ylabel: "solde" }, "pointillé : les dépôts seuls")],
    ["Le versement pour un objectif", "Quel dépôt trimestriel, à 4.4%/a composé trimestriellement, atteint 20 000 dollars en 8 ans?",
      [S`<b>Convertir.</b> \(i=\frac{0.044}4=0.011\) et \(n=8\times4=32\).`,
        S`<b>Isoler.</b> À partir de \(FV=\frac{R\left[(1+i)^n-1\right]}i\), on obtient \(R=\frac{FV\cdot i}{(1+i)^n-1}\).`,
        S`<b>Substituer.</b> \(R=\frac{20\,000(0.011)}{1.011^{32}-1}\).`,
        S`<b>Calculer.</b> \(R\approx${m(payFV(20000, 0.011, 32))}\).`,
        S`<b>Vérifier.</b> \(\frac{${m(payFV(20000, 0.011, 32))}(1.011^{32}-1)}{0.011}\approx20\,000\) ✓`],
      `${m(payFV(20000, 0.011, 32))} dollars par trimestre`,
      plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 22000 }, curves: [{ f: (t) => annFV(payFV(20000, 0.011, 32), 0.011, 4 * t), a: 0.25, b: 8, color: "violet" }], lines: [{ m: 0, b: 20000, color: "amber", dash: true }], points: [{ x: 8, y: 20000, label: "(8, 20 000)", color: "amber" }], step: { x: 1, y: 2000 }, xlabel: "années", ylabel: "solde" })],
    ["Dépôts et intérêt", "Pour 200 dollars à la fin de chaque mois pendant 5 ans à 3.6%/a composé mensuellement, combien a-t-on déposé et combien d'intérêt a-t-on gagné?",
      [S`<b>Dépôts.</b> \(200\times60=12\,000\).`,
        S`<b>Valeur future.</b> D'après la formule, elle est d'environ ${m(annFV(200, 0.003, 60))} dollars.`,
        S`<b>Intérêt.</b> Tout ce qui dépasse les dépôts est de l'intérêt : \(${m(annFV(200, 0.003, 60))}-12\,000\approx${m(annFV(200, 0.003, 60) - 12000)}\).`,
        S`<b>Interpréter.</b> Sur le graphique, l'intérêt est l'écart entre la courbe et la droite pointillée des dépôts. L'écart augmente avec le temps ✓`],
      `${m(annFV(200, 0.003, 60) - 12000)} dollars d'intérêt`,
      plane({ view: { xmin: 0, xmax: 66, ymin: 0, ymax: 15000 }, curves: [{ f: (t) => annFV(200, 0.003, t), a: 1, color: "violet" }], lines: [{ m: 200, b: 0, color: "gray", dash: true }], points: [{ x: 60, y: 12000, label: "dépôts 12 000" }, { x: 60, y: annFV(200, 0.003, 60), label: "avec intérêt", color: "amber" }], step: { x: 6, y: 2000 }, xlabel: "mois", ylabel: "dollars" })],
  ]),

  practice([
    q("FV", "Trouve la valeur future de 500 dollars déposés à la fin de chaque année pendant 8 ans à 6%/a composé annuellement (en dollars).", num(+m(annFV(500, 0.06, 8)), 0.02),
      "R[(1 + i)ⁿ − 1]/i.", [S`\(\frac{500(1.06^8-1)}{0.06}\).`], m(annFV(500, 0.06, 8))),
    q("FV", "Trouve la valeur future de 100 dollars déposés à la fin de chaque mois pendant 2 ans à 6%/a composé mensuellement (en dollars).", num(+m(annFV(100, 0.005, 24)), 0.02),
      "i = 0.005, n = 24.", [S`\(\frac{100(1.005^{24}-1)}{0.005}\).`], m(annFV(100, 0.005, 24))),
    q("dépôts", "Combien dépose-t-on au total en versant 150 dollars par mois pendant 4 ans (en dollars)?", num(7200),
      "R × n.", [S`\(150\times48\).`], "7200"),
    q("versement", "Quel dépôt annuel à 5%/a composé annuellement atteint 10 000 dollars en 5 ans (en dollars)?", num(+m(payFV(10000, 0.05, 5)), 0.02),
      "R = FV·i/[(1 + i)ⁿ − 1].", [S`\(\frac{10000(0.05)}{1.05^5-1}\).`], m(payFV(10000, 0.05, 5))),
    q("définition", "Dans une annuité simple de fin de période, …", choice(["les versements sont faits à la fin de chaque période et la période de versement est égale à la période de capitalisation", "les versements sont faits au début de chaque période", "les versements changent à chaque période", "l'intérêt est simple et non composé"], 0),
      "Fin de période = versement à la fin; simple = périodes identiques.", ["Définition."], "fin de période, périodes identiques"),
  ]),

  ...hard([
    ["Commencer tôt", "Ana épargne 2000 dollars par année pendant 40 ans; Benoît épargne 4000 dollars par année pendant 20 ans. Les deux obtiennent 6%/a composé annuellement et arrêtent au même âge. Qui a le plus d'argent?",
      [`Ana : 2000(1.06⁴⁰ − 1)/0.06 ≈ ${m(early)}.`, `Benoît : 4000(1.06²⁰ − 1)/0.06 ≈ ${m(late)}.`, "Les deux ont déposé 80 000 dollars."],
      `Ana, d'environ ${m(early - late)} dollars`,
      plane({ view: { xmin: 0, xmax: 41, ymin: 0, ymax: 340000 }, curves: [{ f: (t) => annFV(2000, 0.06, t), a: 0, b: 40, color: "violet" }, { f: (t) => (t <= 20 ? 0 : annFV(4000, 0.06, t - 20)), a: 0, b: 40, color: "amber" }], step: { x: 5, y: 50000 }, xlabel: "années", ylabel: "épargne" })],
    ["Combien de versements?", "Combien de dépôts mensuels de 300 dollars à 6%/a composé mensuellement faut-il pour atteindre 20 000 dollars?",
      [S`Trouve le premier n tel que \(\frac{300(1.005^n-1)}{0.005}\ge20000\).`, `Essais successifs : n = ${nNeed}.`],
      `${nNeed} dépôts`],
  ], [
    q("difficile", "Trouve la valeur future de 250 dollars déposés tous les 3 mois pendant 10 ans à 5%/a composé trimestriellement (en dollars).", num(+m(annFV(250, 0.0125, 40)), 0.02),
      "i = 0.0125, n = 40.", [S`\(\frac{250(1.0125^{40}-1)}{0.0125}\).`], m(annFV(250, 0.0125, 40))),
    q("difficile", "Quel dépôt mensuel à 4.8%/a composé mensuellement atteint 50 000 dollars en 10 ans (en dollars)?", num(+m(payFV(50000, 0.004, 120)), 0.02),
      "i = 0.004, n = 120.", [S`\(\frac{50000(0.004)}{1.004^{120}-1}\).`], m(payFV(50000, 0.004, 120))),
    q("difficile", "Combien de dépôts annuels de 1000 dollars à 8%/a composé annuellement faut-il pour que le total dépasse 25 000 dollars?", num(paymentsTo(25000.01, 1000, 0.08)),
      "Essais successifs pour n.", ["Compare FV pour des valeurs consécutives de n."], String(paymentsTo(25000.01, 1000, 0.08))),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi la valeur future est-elle une série géométrique?", "Chaque versement augmente pendant une période de moins que le précédent, donc les valeurs diffèrent d'un facteur 1 + i."],
      ["Pourquoi le dernier versement ne rapporte-t-il pas d'intérêt?", "Il est fait à la fin de la dernière période, exactement au moment où l'on mesure la valeur."],
      ["Comment trouver le versement pour un objectif?", "Isole R dans la formule : R = FV·i / [(1 + i)ⁿ − 1]."],
      ["Pourquoi est-il si important de commencer tôt?", "Les premiers versements ont beaucoup plus de périodes pour se capitaliser."],
      ["La période de versement et la période de capitalisation doivent-elles être identiques?", "Dans ce cours, oui — c'est le sens du mot « simple » dans annuité simple."],
    ],
    summary: [
      "FV = R[(1 + i)ⁿ − 1]/i.",
      "Série géométrique de raison 1 + i.",
      "Intérêt = FV − Rn.",
      "R = FV·i/[(1 + i)ⁿ − 1].",
    ],
    next: "La leçon 8.5 trouve la valeur actuelle d'une annuité.",
  }),
];
