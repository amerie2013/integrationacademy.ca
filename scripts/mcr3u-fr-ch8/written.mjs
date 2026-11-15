// MCR3U-FR chapitre 8 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C),
// chacune avec une figure. Miroir de ../mcr3u-ch8/written-data.mjs (mêmes figures, étiquettes en français).
//   node scripts/mcr3u-fr-ch8/written.mjs           -> essai à blanc
//   node scripts/mcr3u-fr-ch8/written.mjs --apply   -> téléverse les figures et insère les lignes absentes
import { growthD, barsD, timelineD, fv, pv, annFV, annPV, payPV, payFV, balance, periodsTo, paymentsToRepay, m } from "./bank/fig.mjs";
import { runWritten } from "../mcr3u-fr/written-run.mjs";
import { TITLE as T1 } from "./l8_1.mjs";
import { TITLE as T2 } from "./l8_2.mjs";
import { TITLE as T3 } from "./l8_3.mjs";
import { TITLE as T4 } from "./l8_4.mjs";
import { TITLE as T5 } from "./l8_5.mjs";
import { TITLE as T6 } from "./l8_6.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const gapYr = (() => { let t = 1; while (fv(5000, 0.06, t) - 5000 * (1 + 0.06 * t) <= 1000) t++; return t; })();
const Rm = payPV(240000, 0.0045, 300), extraN = paymentsToRepay(240000, Rm + 250, 0.0045);
const extraInt = (() => { let b = 240000, t = 0; while (b > 0.005) { const i = b * 0.0045; t += i; b = b + i - Math.min(Rm + 250, b + i); } return t; })();

export const WRITTEN = [
  W(1, "medium", 4, S`Une amie te prête 1500 dollars à 4%/a d'intérêt simple. (a) Trouve le montant dû après 3 ans. (b) Écris le montant dû à la fin de l'année $n$ sous forme de suite et précise son type. (c) Explique pourquoi son graphique est une droite et donne sa pente.`,
    S`(a) $1500(1+0.12)=1680$. (b) $t_n=1500+60n$ : suite arithmétique de raison $d=60$. (c) Les mêmes 60 dollars s'ajoutent chaque année : pente de 60 dollars par année. [1, 2, 1.]`,
    growthD([{ f: (t) => 1500 * (1 + 0.04 * t), color: "green" }], 10)),
  W(1, "hard", 5, `On place 5000 dollars à 6%/a, soit à intérêt simple, soit avec une capitalisation annuelle. (a) Trouve les deux montants après 10 ans. (b) Après combien d'années entières l'intérêt composé rapporte-t-il au moins 1000 dollars de plus que l'intérêt simple? (c) Utilise le graphique pour expliquer pourquoi l'écart ne cesse d'augmenter.`,
    `(a) Simple : 8000; composé : ${m(fv(5000, 0.06, 10))}. (b) À l'année ${gapYr}. (c) L'intérêt simple croît de façon linéaire; l'intérêt composé croît de façon exponentielle parce que l'intérêt rapporte de l'intérêt, donc les courbes s'écartent de plus en plus vite. [2, 2, 1.]`,
    growthD([{ f: (t) => 5000 * (1 + 0.06 * t), color: "green" }, { f: (t) => 5000 * 1.06 ** t }], 25)),
  W(2, "medium", 4, S`On place 8000 dollars pendant 6 ans à 4.8%/a. (a) Trouve le montant si l'intérêt est composé annuellement. (b) Trouve le montant s'il est composé mensuellement. (c) Explique pourquoi la capitalisation mensuelle donne plus.`,
    `(a) ${m(fv(8000, 0.048, 6))}. (b) ${m(fv(8000, 0.004, 72))}. (c) L'intérêt est ajouté plus tôt, donc il commence plus tôt à rapporter de l'intérêt. [1, 2, 1.]`,
    growthD([{ f: (t) => 8000 * 1.048 ** t }, { f: (t) => 8000 * 1.004 ** (12 * t), color: "amber" }], 6)),
  W(2, "hard", 5, S`(a) Un placement de 3000 dollars atteint ${m(fv(3000, 0.015, 24))} dollars en 6 ans avec une capitalisation trimestrielle. Trouve le taux annuel. (b) Trouve le taux annuel effectif. (c) Montre que les montants de fin d'année forment une suite géométrique et donne sa raison.`,
    S`(a) $(1+i)^{24}=\frac{${m(fv(3000, 0.015, 24))}}{3000}\Rightarrow i=0.015$ : 6%/a. (b) $1.015^4-1\approx${((1.015 ** 4 - 1) * 100).toFixed(2)}\%$. (c) Chaque année multiplie par $1.015^4\approx${(1.015 ** 4).toFixed(4)}$. [2, 1, 2.]`,
    barsD([1, 2, 3, 4, 5, 6].map((y) => fv(3000, 0.015, 4 * y)), { xlabel: "année", ylabel: "montant" })),
  W(3, "medium", 4, S`Des parents veulent 25 000 dollars pour les études de leur enfant dans 12 ans. (a) Combien devraient-ils placer maintenant à 4%/a composé semestriellement? (b) Combien de moins auraient-ils à placer à 6%/a composé semestriellement? (c) Explique pourquoi un taux plus élevé réduit la valeur actuelle.`,
    `(a) ${m(pv(25000, 0.02, 24))}. (b) ${m(pv(25000, 0.02, 24) - pv(25000, 0.03, 24))} de moins. (c) L'argent croît plus vite, donc il en faut moins maintenant pour atteindre le même objectif. [1, 2, 1.]`,
    growthD([{ f: (t) => pv(25000, 0.02, 24) * 1.02 ** (2 * t) }, { f: (t) => pv(25000, 0.03, 24) * 1.03 ** (2 * t), color: "amber" }], 12)),
  W(3, "hard", 5, S`Tu peux recevoir 10 000 dollars maintenant, 6000 dollars maintenant plus 5000 dollars dans 3 ans, ou 12 500 dollars dans 5 ans. L'argent rapporte 5%/a composé annuellement. (a) Trouve la valeur actuelle de chaque option. (b) Quelle option est la meilleure? (c) Combien d'années entières faudrait-il pour que 10 000 dollars atteignent 12 500 dollars à ce taux?`,
    `(a) 10 000; ${m(6000 + pv(5000, 0.05, 3))}; ${m(pv(12500, 0.05, 5))}. (b) La meilleure option est celle qui a la plus grande valeur actuelle. (c) ${periodsTo(1.25, 0.05)} ans. [3, 1, 1.]`,
    timelineD(5, { 3: "5000", 5: "12 500" }, "10 000 / 6000")),
  W(4, "medium", 4, S`Jordan dépose 150 dollars à la fin de chaque mois pendant 8 ans à 4.2%/a composé mensuellement. (a) Trouve la valeur future. (b) Combien a-t-il déposé et quelle partie est de l'intérêt? (c) Explique pourquoi la valeur future est la somme d'une série géométrique.`,
    `(a) ${m(annFV(150, 0.0035, 96))}. (b) Dépôts : 14 400; intérêt : ${m(annFV(150, 0.0035, 96) - 14400)}. (c) À la fin, les dépôts valent R, R(1.0035), R(1.0035)², … : raison 1.0035. [1, 2, 1.]`,
    growthD([{ f: (t) => annFV(150, 0.0035, Math.floor(12 * t)) }, { f: (t) => 150 * Math.floor(12 * t), color: "green" }], 8)),
  W(4, "hard", 5, S`Riley veut avoir 1 000 000 dollars à 65 ans. (a) Trouve le dépôt mensuel nécessaire à partir de 25 ans à 6%/a composé mensuellement. (b) Trouve le dépôt mensuel nécessaire si Riley commence à 45 ans. (c) Compare les montants totaux déposés et explique la différence.`,
    `(a) ${m(payFV(1000000, 0.005, 480))}. (b) ${m(payFV(1000000, 0.005, 240))}. (c) Totaux : ${m(payFV(1000000, 0.005, 480) * 480)} contre ${m(payFV(1000000, 0.005, 240) * 240)} : commencer tôt permet à l'intérêt de faire la plus grande partie du travail. [2, 1, 2.]`,
    growthD([{ f: (t) => annFV(payFV(1000000, 0.005, 480), 0.005, Math.floor(12 * t)) }, { f: (t) => (t < 20 ? 0 : annFV(payFV(1000000, 0.005, 240), 0.005, Math.floor(12 * (t - 20)))), color: "amber" }], 40)),
  W(5, "medium", 4, S`Un prêt auto de 22 000 dollars est remboursé mensuellement sur 5 ans à 6%/a composé mensuellement. (a) Trouve le versement mensuel. (b) Trouve l'intérêt total. (c) Explique pourquoi le montant emprunté est la valeur actuelle des versements.`,
    `(a) ${m(payPV(22000, 0.005, 60))}. (b) ${m(payPV(22000, 0.005, 60) * 60 - 22000)}. (c) Chaque versement vaut moins aujourd'hui; une fois actualisés et additionnés, les versements égalent les 22 000 reçus maintenant. [1, 1, 2.]`,
    timelineD(6, { 1: "R", 2: "R", 3: "R", 4: "…", 5: "R", 6: "R" }, "22 000")),
  W(5, "hard", 5, S`Une personne retraitée a 350 000 dollars placés à 4.8%/a composé mensuellement. (a) Quel retrait mensuel égal durera exactement 25 ans? (b) Si elle retire plutôt 2500 dollars par mois, pendant combien d'années complètes l'argent durera-t-il? (c) Explique ce qui se passe si elle retire seulement l'intérêt chaque mois.`,
    `(a) ${m(payPV(350000, 0.004, 300))}. (b) ${Math.floor(paymentsToRepay(350000, 2500, 0.004) / 12)} années complètes (${paymentsToRepay(350000, 2500, 0.004)} retraits). (c) 1400 dollars par mois; le solde ne diminue jamais. [2, 2, 1.]`,
    growthD([{ f: (t) => Math.max(0, balance(350000, payPV(350000, 0.004, 300), 0.004, 12 * t)) }, { f: (t) => Math.max(0, balance(350000, 2500, 0.004, 12 * t)), color: "amber" }], 25, { ylabel: "solde" })),
  W(6, "medium", 4, S`Un prêt de 9000 dollars à 9%/a composé mensuellement est remboursé sur 2 ans. (a) Trouve le versement. (b) Remplis les trois premières lignes du tableau d'amortissement. (c) Explique pourquoi la partie intérêts diminue.`,
    (() => { const R = payPV(9000, 0.0075, 24); let b = 9000; const rows = []; for (let k = 1; k <= 3; k++) { const i = b * 0.0075; b = b + i - R; rows.push(`ligne ${k} : intérêts ${m(i)}, capital ${m(R - i)}, solde ${m(b)}`); } return `(a) ${m(R)}. (b) ${rows.join("; ")}. (c) L'intérêt est calculé sur le solde, qui diminue chaque mois. [1, 2, 1.]`; })(),
    barsD((() => { const R = payPV(9000, 0.0075, 24); let b = 9000; const v = []; for (let k = 0; k < 24; k++) { const i = b * 0.0075; v.push(i); b = b + i - R; } return v; })(), { xlabel: "versement", ylabel: "partie intérêts" })),
  W(6, "hard", 5, S`Un prêt hypothécaire de 240 000 dollars à 5.4%/a composé mensuellement est amorti sur 25 ans. (a) Trouve le versement mensuel et l'intérêt total. (b) Si l'on paie 250 dollars de plus chaque mois, combien de versements faut-il et combien d'intérêt économise-t-on? (c) Trouve le solde après 5 ans avec le versement régulier.`,
    `(a) ${m(Rm)}; intérêt : ${m(Rm * 300 - 240000)}. (b) ${extraN} versements; économie de ${m(Rm * 300 - 240000 - extraInt)}. (c) ${m(balance(240000, Rm, 0.0045, 60))}. [2, 2, 1.]`,
    growthD([{ f: (t) => Math.max(0, balance(240000, Rm, 0.0045, 12 * t)) }, { f: (t) => Math.max(0, balance(240000, Rm + 250, 0.0045, 12 * t)), color: "amber" }], 25, { ylabel: "solde" })),
  W(6, "hard", 4, S`Compare deux façons de rembourser un prêt de 30 000 dollars à 7.2%/a composé mensuellement : (A) sur 4 ans, (B) sur 7 ans. (a) Trouve chaque versement mensuel. (b) Trouve chaque intérêt total. (c) Donne une raison pour laquelle un emprunteur pourrait quand même choisir l'option B.`,
    `(a) A : ${m(payPV(30000, 0.006, 48))}, B : ${m(payPV(30000, 0.006, 84))}. (b) A : ${m(payPV(30000, 0.006, 48) * 48 - 30000)}, B : ${m(payPV(30000, 0.006, 84) * 84 - 30000)}. (c) Le versement plus bas peut mieux convenir au budget mensuel. [2, 1, 1.]`,
    barsD([payPV(30000, 0.006, 48) * 48 - 30000, payPV(30000, 0.006, 84) * 84 - 30000], { xlabel: "4 ans · 7 ans", ylabel: "intérêt total" })),
];

await runWritten(WRITTEN, "../mcr3u-ch8/written-data.mjs", import.meta.url);
