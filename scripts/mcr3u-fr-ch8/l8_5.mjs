// MCR3U-FR 8.5 — Annuités : valeur actuelle. PV = R[1 − (1 + i)⁻ⁿ]/i, financer des retraits, versements d'un prêt,
// intérêt total d'un prêt, comparer une somme forfaitaire à une suite de versements. Miroir de ../mcr3u-ch8/l8_5.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { annPV, payPV, paymentsToRepay, pv, m } from "./fin.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "8.5 Annuités : valeur actuelle";
export const ID = lessonId(8, 5);
const S = String.raw;
const carR = payPV(18000, 0.0055, 60);
const lotto = annPV(60000, 0.045, 25);
const retire = annPV(3000, 0.004, 240);
const nLoan = paymentsToRepay(10000, 300, 0.0075);

export const blocks = () => [
  intro({
    icon: "🎓",
    title: "Annuités : valeur actuelle",
    overview: S`La <strong>valeur actuelle d'une annuité</strong> est le montant unique qui, placé aujourd'hui, peut financer une suite de versements égaux — ou, pour un prêt, le montant emprunté que des versements égaux remboursent. L'addition des valeurs actuelles de tous les versements donne une série géométrique : \(PV=R(1+i)^{-1}+R(1+i)^{-2}+\cdots+R(1+i)^{-n}=\frac{R\left[1-(1+i)^{-n}\right]}{i}\). Dans cette leçon, tu vas financer des retraits, trouver les versements d'un prêt et l'intérêt total, et comparer une somme forfaitaire à une suite de versements.`,
    goals: [
      "expliquer la valeur actuelle d'une annuité comme une somme de valeurs actuelles;",
      "calculer PV = R[1 − (1 + i)⁻ⁿ]/i;",
      "trouver le versement périodique d'un prêt;",
      "trouver l'intérêt total payé sur un prêt;",
      "comparer une somme forfaitaire à des versements réguliers.",
    ],
    curriculum: "C2.5 (déterminer les liens entre les annuités simples de fin de période, les séries géométriques et la croissance exponentielle), C2.7 (résoudre des problèmes, à l'aide de la technologie, portant sur le montant, la valeur actuelle et le versement périodique d'une annuité simple de fin de période)",
    prior: [
      [S`Trouve la valeur actuelle de 1000 dollars payables dans 3 ans à 5%/a composé annuellement.`, "863.84."],
      [S`Évalue \(\frac{1-1.06^{-5}}{0.06}\) à 4 décimales.`, "4.2124."],
      ["Combien de versements mensuels fait-on en 5 ans?", "60."],
    ],
    words: [
      ["Valeur actuelle d'une annuité", "somme forfaitaire aujourd'hui qui équivaut à tous les versements", ""],
      ["Capital du prêt", "le montant emprunté = PV des versements", ""],
      ["Versement périodique", "\\(R=\\frac{PV\\cdot i}{1-(1+i)^{-n}}\\)", ""],
      ["Intérêt total", "\\(Rn-PV\\)", ""],
    ],
  }),

  section("📌 Valeur future et valeur actuelle d'une annuité", S`
  ${table(["Question", "Utiliser"], [["Quelle somme les dépôts réguliers atteindront-ils?", "\\(FV=\\frac{R[(1+i)^n-1]}{i}\\)"], ["Combien faut-il maintenant pour financer des retraits réguliers?", "\\(PV=\\frac{R[1-(1+i)^{-n}]}{i}\\)"], ["Quel versement rembourse un prêt?", "\\(R=\\frac{PV\\cdot i}{1-(1+i)^{-n}}\\)"]])}
  ${plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 900 }, segs: [1, 2, 3, 4, 5, 6].map((k) => ({ pts: [[k - 0.3, 0], [k - 0.3, pv(800, 0.05, k)], [k + 0.3, pv(800, 0.05, k)], [k + 0.3, 0]], color: "violet" })), points: [1, 6].map((k) => ({ x: k, y: pv(800, 0.05, k), label: m(pv(800, 0.05, k)) })), step: { x: 1, y: 100 }, xlabel: "numéro du versement", ylabel: "valeur aujourd'hui" }, "plus un versement de 800 dollars arrive tard, moins il vaut aujourd'hui")}
  ${keyIdea(S`Un prêt est une annuité vue du côté du prêteur : le montant emprunté est la valeur actuelle de tous les versements.`)}`),

  section("📌 Explorer", S`<p>Fixe le retrait (ou le versement du prêt), le taux et la durée. Le solde tombe à zéro exactement au dernier versement.</p>`),

  widget("annuityPV", { init: [500, 6, 5] }),

  section("📌 Attention", watchOut([
    "La PV d'une annuité utilise un exposant négatif : (1 + i)⁻ⁿ.",
    "Le total des versements est supérieur à la PV — la différence est de l'intérêt.",
    "Utilise le taux par période de versement et le nombre de versements.",
    "Arrondis le versement au cent près seulement à la fin.",
  ])),

  examples([
    ["Financer des retraits", "Combien faut-il placer maintenant à 5%/a composé annuellement pour retirer 800 dollars à la fin de chaque année pendant 6 ans?",
      [S`<b>Sens.</b> Le fonds doit contenir assez d'argent aujourd'hui pour que, avec l'intérêt, il paie les six retraits et finisse à 0. C'est la valeur actuelle d'une annuité.`,
        S`<b>Formule.</b> \(PV=\dfrac{R\left[1-(1+i)^{-n}\right]}{i}\).`,
        S`<b>Substituer.</b> \(PV=\frac{800(1-1.05^{-6})}{0.05}\).`,
        S`<b>Calculer.</b> \(1.05^{-6}\approx0.746215\), donc \(PV\approx\frac{800(0.253785)}{0.05}\approx${m(annPV(800, 0.05, 6))}\).`,
        S`<b>Vérifier la vraisemblance.</b> C'est moins que \(6\times800=4800\), puisque l'argent rapporte de l'intérêt en attendant ✓`],
      `${m(annPV(800, 0.05, 6))} dollars`,
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 4600 }, points: [0, 1, 2, 3, 4, 5, 6].map((k) => ({ x: k, y: Math.max(0, annPV(800, 0.05, 6 - k)), label: k === 0 ? m(annPV(800, 0.05, 6)) : undefined, color: k === 0 ? "amber" : "blue" })), step: { x: 1, y: 500 }, xlabel: "année", ylabel: "solde" }, "Le solde du fonds tombe à 0 après le dernier retrait.")],
    ["Une bourse d'études", "Un fonds versera 2500 dollars tous les 6 mois pendant 4 ans, à partir de dans 6 mois. L'argent rapporte 4%/a composé semestriellement. Combien le fonds doit-il contenir aujourd'hui?",
      [S`<b>Convertir.</b> \(i=\frac{0.04}2=0.02\). Versements : \(n=4\times2=8\).`,
        S`<b>Vérifier le type.</b> Le premier versement est dans une période, et les périodes de versement et de capitalisation sont les mêmes. La formule s'applique donc directement.`,
        S`<b>Substituer.</b> \(PV=\frac{2500(1-1.02^{-8})}{0.02}\).`,
        S`<b>Calculer.</b> \(PV\approx${m(annPV(2500, 0.02, 8))}\).`,
        S`<b>Vérifier la vraisemblance.</b> Les versements totalisent 20 000, et la PV est un peu moins élevée ✓`],
      `${m(annPV(2500, 0.02, 8))} dollars`,
      plane({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 20000 }, points: [0, 1, 2, 3, 4, 5, 6, 7, 8].map((k) => ({ x: k, y: Math.max(0, annPV(2500, 0.02, 8 - k)), label: k === 0 ? m(annPV(2500, 0.02, 8)) : undefined, color: k === 0 ? "amber" : "blue" })), step: { x: 1, y: 2000 }, xlabel: "périodes de 6 mois", ylabel: "solde" })],
    ["Un prêt auto", "Un prêt auto de 18 000 dollars est remboursé mensuellement sur 5 ans à 6.6%/a composé mensuellement. Trouve le versement mensuel.",
      [S`<b>Modèle.</b> Le montant emprunté est la valeur actuelle de tous les versements.`,
        S`<b>Convertir.</b> \(i=\frac{0.066}{12}=0.0055\) et \(n=60\).`,
        S`<b>Isoler.</b> \(R=\frac{PV\cdot i}{1-(1+i)^{-n}}\).`,
        S`<b>Substituer.</b> \(R=\frac{18\,000(0.0055)}{1-1.0055^{-60}}\approx${m(carR)}\).`,
        S`<b>Vérifier la vraisemblance.</b> Sans intérêt, ce serait \(\frac{18\,000}{60}=300\). Le versement doit être un peu plus élevé ✓`],
      `${m(carR)} dollars par mois`,
      plane({ view: { xmin: 0, xmax: 66, ymin: 0, ymax: 20000 }, curves: [{ f: (k) => Math.max(0, annPV(carR, 0.0055, 60 - k)), a: 0, b: 60, color: "violet" }], points: [{ x: 0, y: 18000, label: "(0, 18 000)" }, { x: 60, y: 0, label: "(60, 0)", color: "amber" }], step: { x: 6, y: 2000 }, xlabel: "mois", ylabel: "solde" })],
    ["Intérêt total", "Pour le prêt auto de 18 000 dollars remboursé par 60 versements du montant ci-dessus, combien d'intérêt paie-t-on au total?",
      [S`<b>Total payé.</b> \(${m(carR)}\times60\approx${m(carR * 60)}\).`,
        S`<b>Pourquoi soustraire?</b> Chaque versement rembourse une partie du prêt et paie de l'intérêt. Sur toute la durée du prêt, les 18 000 sont remboursés une fois, et le reste est de l'intérêt.`,
        S`<b>Intérêt.</b> \(${m(carR * 60)}-18\,000=${m(carR * 60 - 18000)}\).`,
        S`<b>Vérifier la vraisemblance.</b> C'est environ ${Math.round(((carR * 60 - 18000) / 18000) * 100)}% du prêt, ce qui est raisonnable pour 5 ans à 6.6% sur un solde qui diminue ✓`],
      `${m(carR * 60 - 18000)} dollars`,
      plane({ view: { xmin: 0, xmax: 3, ymin: 0, ymax: 24000 }, segs: [[1, 18000], [2, carR * 60]].map(([x, v]) => ({ pts: [[x - 0.3, 0], [x - 0.3, v], [x + 0.3, v], [x + 0.3, 0]], color: "violet" })), points: [{ x: 1, y: 18000, label: "emprunté" }, { x: 2, y: carR * 60, label: "total payé" }], step: { x: 1, y: 4000 }, ylabel: "dollars" })],
    ["Somme forfaitaire ou versements?", "Un prix offre 1 000 000 dollars maintenant ou 60 000 dollars à la fin de chaque année pendant 25 ans. L'argent rapporte 4.5%/a composé annuellement. Quelle option vaut le plus aujourd'hui?",
      [S`<b>Principe.</b> Ramène tout au même moment. La somme forfaitaire est déjà en dollars d'aujourd'hui.`,
        S`<b>Pourquoi ne pas simplement additionner?</b> \(25\times60\,000=1\,500\,000\) semble plus grand, mais les dollars futurs valent moins aujourd'hui.`,
        S`<b>Valeur actuelle.</b> \(PV=\frac{60\,000(1-1.045^{-25})}{0.045}\approx${m(lotto)}\).`,
        S`<b>Comparer.</b> \(${m(lotto)}\) est ${lotto > 1e6 ? "supérieur" : "inférieur"} à 1 000 000.`,
        S`<b>Remarque.</b> La décision dépend du taux d'intérêt. Un taux plus bas augmente la PV des versements.`],
      `${lotto > 1e6 ? "les versements annuels" : "le 1 000 000 dollars maintenant"}`,
      plane({ view: { xmin: 0, xmax: 3, ymin: 0, ymax: 1200000 }, segs: [[1, 1e6], [2, lotto]].map(([x, v]) => ({ pts: [[x - 0.3, 0], [x - 0.3, v], [x + 0.3, v], [x + 0.3, 0]], color: "violet" })), points: [{ x: 1, y: 1e6, label: "somme forfaitaire" }, { x: 2, y: lotto, label: `PV ${m(lotto)}` }], step: { x: 1, y: 200000 }, ylabel: "valeur aujourd'hui" })],
  ]),

  practice([
    q("PV", "Trouve la valeur actuelle de 1000 dollars versés à la fin de chaque année pendant 4 ans à 8%/a composé annuellement (en dollars).", num(+m(annPV(1000, 0.08, 4)), 0.02),
      "R[1 − (1 + i)⁻ⁿ]/i.", [S`\(\frac{1000(1-1.08^{-4})}{0.08}\).`], m(annPV(1000, 0.08, 4))),
    q("PV", "Trouve la valeur actuelle de 250 dollars versés à la fin de chaque mois pendant 3 ans à 6%/a composé mensuellement (en dollars).", num(+m(annPV(250, 0.005, 36)), 0.02),
      "i = 0.005, n = 36.", [S`\(\frac{250(1-1.005^{-36})}{0.005}\).`], m(annPV(250, 0.005, 36))),
    q("versement", "Trouve le versement mensuel d'un prêt de 12 000 dollars sur 4 ans à 7.2%/a composé mensuellement (en dollars).", num(+m(payPV(12000, 0.006, 48)), 0.02),
      "i = 0.006, n = 48.", [S`\(\frac{12000(0.006)}{1-1.006^{-48}}\).`], m(payPV(12000, 0.006, 48))),
    q("total", "Pour ce prêt, combien paie-t-on au total sur les 4 ans (en dollars)?", num(+m(payPV(12000, 0.006, 48) * 48), 0.5),
      "R × 48.", ["Multiplie le versement par 48."], m(payPV(12000, 0.006, 48) * 48)),
    q("comparer", "Pourquoi la valeur actuelle d'une annuité est-elle inférieure au total de ses versements?", choice(["les versements futurs valent moins aujourd'hui parce que l'argent peut rapporter de l'intérêt", "la banque garde des frais", "le dernier versement est sauté", "les versements sont faits au début"], 0),
      "Pense à l'actualisation de chaque versement.", ["Chaque versement est divisé par (1 + i)ᵏ."], "actualisation"),
  ]),

  ...hard([
    ["Planifier la retraite", "Combien faut-il avoir épargné à la retraite pour retirer 3000 dollars à la fin de chaque mois pendant 20 ans, à 4.8%/a composé mensuellement?",
      [S`\(i=0.004\), \(n=240\) : \(PV=\frac{3000(1-1.004^{-240})}{0.004}\).`],
      `${m(retire)} dollars`],
    ["Combien de versements?", "Un prêt de 10 000 dollars à 9%/a composé mensuellement est remboursé par des versements de 300 dollars par mois. Combien de versements faut-il (le dernier peut être plus petit)?",
      [S`\(i=0.0075\). Trouve n tel que \(\frac{300(1-1.0075^{-n})}{0.0075}\ge10000\).`, `Essais successifs (ou un tableau) : n = ${nLoan}.`],
      `${nLoan} versements`,
      plane({ view: { xmin: 0, xmax: nLoan + 2, ymin: 0, ymax: 10500 }, curves: [{ f: (k) => Math.max(0, 10000 * 1.0075 ** k - (300 * (1.0075 ** k - 1)) / 0.0075), a: 0, b: nLoan, color: "violet" }], step: { x: 5, y: 1000 }, xlabel: "versements", ylabel: "solde" })],
  ], [
    q("difficile", "Trouve la valeur actuelle de 400 dollars versés chaque trimestre pendant 6 ans à 6%/a composé trimestriellement (en dollars).", num(+m(annPV(400, 0.015, 24)), 0.02),
      "i = 0.015, n = 24.", [S`\(\frac{400(1-1.015^{-24})}{0.015}\).`], m(annPV(400, 0.015, 24))),
    q("difficile", "Trouve le versement mensuel d'un prêt hypothécaire de 250 000 dollars sur 25 ans à 5.4%/a composé mensuellement (en dollars).", num(+m(payPV(250000, 0.0045, 300)), 0.02),
      "i = 0.0045, n = 300.", [S`\(\frac{250000(0.0045)}{1-1.0045^{-300}}\).`], m(payPV(250000, 0.0045, 300))),
    q("difficile", "Combien de versements mensuels de 500 dollars remboursent un prêt de 20 000 dollars à 6%/a composé mensuellement (le dernier peut être plus petit)?", num(paymentsToRepay(20000, 500, 0.005)),
      "Essais successifs pour n.", ["Trouve n tel que la PV des versements ≥ 20 000."], String(paymentsToRepay(20000, 500, 0.005))),
  ]),

  wrapUp({
    qas: [
      ["Quand utiliser la formule de la PV plutôt que celle de la FV?", "La PV pour « combien maintenant » (prêts, financement de retraits); la FV pour « combien plus tard » (épargne)."],
      ["Pourquoi un prêt est-il une annuité?", "Tu reçois le capital maintenant et tu le rembourses par des versements égaux qui comprennent de l'intérêt."],
      ["Combien d'intérêt un prêt coûte-t-il?", "Le total des versements moins le montant emprunté : Rn − PV."],
      ["Comment comparer une somme forfaitaire à des versements?", "Trouve la PV des versements et compare-la à la somme forfaitaire."],
      ["Comment payer moins d'intérêt?", "Emprunte moins, raccourcis la durée ou paie davantage à chaque période (8.6)."],
    ],
    summary: [
      "PV = R[1 − (1 + i)⁻ⁿ]/i.",
      "R = PV·i / [1 − (1 + i)⁻ⁿ].",
      "Intérêt sur un prêt = Rn − PV.",
      "Compare les offres à l'aide de la valeur actuelle.",
    ],
    next: "La leçon 8.6 analyse les prêts à l'aide de tableaux d'amortissement et de conditions qui changent.",
  }),
];
