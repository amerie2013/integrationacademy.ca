// MCR3U-FR Fiche 8.6 — Prêts, amortissement et conditions changeantes (édition enseignant).
// Miroir de ../../mcr3u-ch8/ws/w8_6.mjs.
import { growthT, barsT } from "./finT.mjs";
import { payPV, annFV, balance, paymentsToRepay, m } from "../fin.mjs";
import { tvT } from "../../mcr3u-extables.mjs";

const S = String.raw;
// Tableau de l'exemple 1 : 6000 dollars à 9%/a mensuel sur 1 an
const R1 = payPV(6000, 0.0075, 12);
const rows = []; { let b = 6000; for (let k = 1; k <= 12; k++) { const int = b * 0.0075; b = b + int - R1; rows.push([k, int, R1 - int, b]); } }
const tex = rows.slice(0, 4).map(([k, int, pr, b]) => `${k} & ${m(R1)} & ${m(int)} & ${m(pr)} & ${m(Math.max(0, b))}\\\\`).join("\n");
const cmpRate = [3, 6, 9].map((r) => payPV(25000, r / 1200, 60));
const cmpTerm = [3, 5, 7].map((y) => payPV(25000, 0.005, 12 * y));
const extraN = paymentsToRepay(18000, payPV(18000, 0.005, 60) + 75, 0.005);

const EXAMPLES = [
  { title: "Un tableau d'amortissement", q: "Un prêt de 6000 dollars à 9%/a composé mensuellement est remboursé en 12 versements mensuels. Construis les quatre premières lignes.",
    steps: [S`\textbf{Versement :} $i=0.0075$, $n=12$ : $R=\frac{6000(0.0075)}{1-1.0075^{-12}}\approx${m(R1)}$.`,
      S`\textbf{Chaque ligne :} intérêts = solde $\times i$; capital = versement $-$ intérêts; nouveau solde = solde $-$ capital.`,
      S`\textbf{Ligne 1 :} intérêts $6000(0.0075)=45.00$; le reste du versement réduit le solde.`,
      S`\begin{tabular}{rrrrr}n\textsuperscript{o} & versement & intérêts & capital & solde\\ \hline ${tex}\end{tabular}`],
    ans: "les intérêts diminuent et le capital augmente chaque mois" },
  { title: "Intérêts et capital", q: "Représente graphiquement la partie intérêts et la partie capital de chaque versement de l'exemple 1.",
    fig: barsT(rows.map((r) => r[1]), { xlabel: "versement", ylabel: "partie intérêts" }),
    steps: [S`\textbf{Partie intérêts :} elle dépend du solde, donc elle diminue : ${m(rows[0][1])} au début, ${m(rows[11][1])} à la fin.`,
      S`\textbf{Partie capital :} versement moins intérêts, donc elle augmente du même montant.`,
      S`\textbf{Vérification :} les deux parties totalisent toujours ${m(R1)} \checkmark`],
    ans: `intérêts ${m(rows[0][1])} → ${m(rows[11][1])}` },
  { title: "Solde restant dû", q: "Combien doit-on sur le prêt de l'exemple 1 après 6 versements?",
    fig: barsT(rows.map((r) => Math.max(0, r[3])), { xlabel: "versement", ylabel: "solde" }),
    steps: [S`\textbf{Idée :} ce qu'on doit, c'est le prêt capitalisé pendant $6$ mois, moins les versements capitalisés.`,
      S`\textbf{Formule :} $6000(1.0075)^6-\frac{${m(R1)}(1.0075^6-1)}{0.0075}$.`,
      S`\textbf{Calculer :} $\approx${m(balance(6000, R1, 0.0075, 6))}$.`,
      S`\textbf{Vérification :} c'est la PV des $6$ versements restants \checkmark`],
    ans: `${m(balance(6000, R1, 0.0075, 6))} dollars` },
  { title: "Changer le taux", q: "Trouve le versement mensuel sur 25 000 dollars sur 5 ans à 3%, 6% et 9%/a (composé mensuellement).",
    fig: barsT(cmpRate, { xlabel: "3% · 6% · 9%", ylabel: "versement", labels: cmpRate.map((v) => m(v)) }),
    steps: [S`\textbf{Même formule,} avec $n=60$ et un $i$ différent.`,
      S`\textbf{Résultats :}${tvT(["taux", "versement", "intérêts"], ...cmpRate.map((v, k) => [`${[3, 6, 9][k]}\\%`, m(v), m(v * 60 - 25000)]))}`,
      S`\textbf{Régularité :} chaque hausse de $3$ points de pourcentage augmente le versement d'environ le même montant.`],
    ans: "chaque hausse de 3% ajoute environ 34 à 36 dollars par mois" },
  { title: "Changer la durée", q: "Trouve le versement mensuel sur 25 000 dollars à 6%/a sur 3, 5 et 7 ans.",
    fig: barsT(cmpTerm, { xlabel: "3 · 5 · 7 ans", ylabel: "versement", labels: cmpTerm.map((v) => m(v)) }),
    steps: [S`\textbf{Même formule,} avec $i=0.005$ et un $n$ différent.`,
      S`\textbf{Résultats :}${tvT(["durée", "versement", "intérêts"], ...cmpTerm.map((v, k) => [`${[3, 5, 7][k]} ans`, m(v), m(v * [36, 60, 84][k] - 25000)]))}`,
      S`\textbf{Compromis :} des versements plus bas durent plus longtemps, donc plus d'intérêts s'accumulent.`],
    ans: "durée plus longue : versement plus petit, plus d'intérêts" },
  { title: "Versements supplémentaires", q: "Un prêt de 18 000 dollars à 6%/a composé mensuellement est prévu sur 5 ans. Combien de versements faut-il si l'on paie 75 dollars de plus chaque mois?",
    fig: growthT([{ f: (k) => Math.max(0, balance(18000, payPV(18000, 0.005, 60), 0.005, k)) }, { f: (k) => Math.max(0, balance(18000, payPV(18000, 0.005, 60) + 75, 0.005, k)), color: "amber" }], 60, { xlabel: "mois", ylabel: "solde" }),
    steps: [S`\textbf{Versement régulier :} ${m(payPV(18000, 0.005, 60))}.`,
      S`\textbf{Nouveau versement :} ${m(payPV(18000, 0.005, 60) + 75)}.`,
      S`\textbf{Compter :} trouve $n$, ou fais diminuer le solde jusqu'à zéro : ${extraN} versements.`,
      S`\textbf{Pourquoi :} tout le supplément va au capital.`],
    ans: `${extraN} versements au lieu de 60` },
  { title: "Fréquence des versements", q: "Compare l'épargne de 2400 dollars à la fin de chaque année à celle de 200 dollars à la fin de chaque mois pendant 15 ans à 4.8%/a (capitalisation correspondante).",
    fig: barsT([annFV(2400, 0.048, 15), annFV(200, 0.004, 180)], { xlabel: "annuel · mensuel", ylabel: "valeur future", labels: [m(annFV(2400, 0.048, 15)), m(annFV(200, 0.004, 180))] }),
    steps: [S`\textbf{Mêmes dépôts :} $2400$ par année dans les deux cas.`,
      S`\textbf{Annuel :} $\frac{2400(1.048^{15}-1)}{0.048}\approx${m(annFV(2400, 0.048, 15))}$.`,
      S`\textbf{Mensuel :} $\frac{200(1.004^{180}-1)}{0.004}\approx${m(annFV(200, 0.004, 180))}$.`,
      S`\textbf{Pourquoi :} l'argent versé mensuellement est placé plus tôt dans chaque année.`],
    ans: "l'épargne mensuelle donne plus" },
  { title: "Le solde au fil du temps", q: "Représente graphiquement le solde d'un prêt hypothécaire de 200 000 dollars à 4.8%/a composé mensuellement sur 25 ans.",
    fig: growthT([{ f: (t) => Math.max(0, balance(200000, payPV(200000, 0.004, 300), 0.004, 12 * t)) }], 25, { ylabel: "solde" }),
    steps: [S`\textbf{Versement :} $i=0.004$, $n=300$ : $R\approx${m(payPV(200000, 0.004, 300))}$.`,
      S`\textbf{À mi-parcours :} à l'année $12.5$, le solde est encore de ${m(balance(200000, payPV(200000, 0.004, 300), 0.004, 150))}.`,
      S`\textbf{Pourquoi :} les premiers versements sont surtout des intérêts, donc le solde diminue lentement au début.`],
    ans: "le solde diminue lentement au début" },
  { title: "Intérêt total d'un prêt hypothécaire", q: "Trouve l'intérêt total du prêt hypothécaire de l'exemple 8.",
    fig: barsT([200000, payPV(200000, 0.004, 300) * 300], { xlabel: "emprunté · payé", ylabel: "dollars", labels: ["200 000", m(payPV(200000, 0.004, 300) * 300)] }),
    steps: [S`\textbf{Total payé :} $300\times${m(payPV(200000, 0.004, 300))}\approx${m(payPV(200000, 0.004, 300) * 300)}$.`,
      S`\textbf{Intérêts :} soustrais le prêt : ${m(payPV(200000, 0.004, 300) * 300 - 200000)}.`,
      S`\textbf{Sens :} les intérêts représentent une grande part du prêt sur $25$ ans.`],
    ans: `${m(payPV(200000, 0.004, 300) * 300 - 200000)} dollars` },
];

const PROBLEMS = [
  { level: 1, q: "Le solde d'un prêt est de 8000 dollars à 7.2%/a composé mensuellement. Trouve l'intérêt du mois suivant.", recap: "Intérêts.", ans: "48 dollars" },
  { level: 1, q: "Suite : on fait un versement de 350 dollars. Quelle partie réduit le capital, et quel est le nouveau solde?", recap: "Capital.", ans: "302 dollars; 7698 dollars" },
  { level: 1, q: "Indique ce qui arrive à l'intérêt total quand la durée d'un prêt augmente.", recap: "Durée.", ans: "il augmente" },
  { level: 2, q: "Trouve le versement mensuel sur 12 000 dollars sur 4 ans à 5.4%/a composé mensuellement et l'intérêt du premier mois.", recap: "Versement.", ans: `${m(payPV(12000, 0.0045, 48))}; 54 dollars` },
  { level: 2, q: "Trouve le solde après 12 versements pour le prêt du problème 4.", recap: "Solde.", ans: `${m(balance(12000, payPV(12000, 0.0045, 48), 0.0045, 12))} dollars` },
  { level: 2, q: "Combien d'intérêts économise-t-on en remboursant 20 000 dollars à 7.2%/a composé mensuellement sur 3 ans plutôt que sur 5 ans?", recap: "Comparer des durées.", ans: `${m((payPV(20000, 0.006, 60) * 60 - 20000) - (payPV(20000, 0.006, 36) * 36 - 20000))} dollars` },
  { level: 2, q: "Construis les trois premières lignes du tableau d'amortissement de 3000 dollars à 12%/a composé mensuellement sur 6 mois.", recap: "Tableau.", ans: `R = ${m(payPV(3000, 0.01, 6))}; intérêts de la ligne 1 : 30.00` },
  { level: 2, q: "Le graphique montre le solde d'un prêt. Estime le solde à la moitié de la durée et explique pourquoi il dépasse la moitié du prêt.", recap: "Lire un graphique.", ans: "environ 55 à 60% : les premiers versements sont surtout des intérêts", fig: growthT([{ f: (t) => Math.max(0, balance(30000, payPV(30000, 0.006, 120), 0.006, 12 * t)) }], 10, { ylabel: "solde" }) },
  { level: 3, space: 5, q: "Un prêt hypothécaire de 250 000 dollars à 5.4%/a composé mensuellement sur 25 ans. Combien d'intérêts économise-t-on en payant 200 dollars de plus chaque mois?", recap: "Versements supplémentaires.", ans: (() => { const R = payPV(250000, 0.0045, 300), n = paymentsToRepay(250000, R + 200, 0.0045); let b = 250000, tot = 0; while (b > 0.005) { const int = b * 0.0045; tot += int; b = b + int - Math.min(R + 200, b + int); } return `intérêts réguliers ${m(R * 300 - 250000)}; avec le supplément ${m(tot)} (${n} versements)`; })() },
  { level: 3, space: 4, q: "Qu'est-ce qui fait économiser le plus d'intérêts sur 40 000 dollars sur 6 ans à 7.8%/a composé mensuellement : une baisse de taux de 1% ou un remboursement 1 an plus tôt?", recap: "Comparer.", ans: (() => { const base = payPV(40000, 0.0065, 72) * 72 - 40000, a = payPV(40000, 0.068 / 12, 72) * 72 - 40000, b = payPV(40000, 0.0065, 60) * 60 - 40000; return `la baisse de taux fait économiser ${m(base - a)}; la durée plus courte fait économiser ${m(base - b)}`; })() },
  { level: 3, space: 4, q: "Un solde de carte de crédit de 2500 dollars à 21%/a composé mensuellement est remboursé par 75 dollars par mois. Combien de versements faut-il, et combien d'intérêts paie-t-on?", recap: "Carte de crédit.", ans: (() => { const n = paymentsToRepay(2500, 75, 0.0175); let b = 2500, tot = 0; while (b > 0.005) { const int = b * 0.0175; tot += int; b = b + int - Math.min(75, b + int); } return `${n} versements; environ ${m(tot)} d'intérêts`; })() },
  { level: 3, space: 4, q: "Explique pourquoi la partie intérêts d'un versement diminue avec le temps alors que la partie capital augmente.", recap: "Expliquer.", ans: "l'intérêt est calculé sur le solde qui diminue; le versement est fixe" },
  { level: 3, space: 4, q: "À l'aide de la technologie, décris l'effet, sur un prêt de 30 000 dollars sur 5 ans, du passage de versements mensuels à des versements hebdomadaires égaux au quart du versement mensuel.", recap: "Fréquence.", ans: "le prêt est remboursé un peu plus tôt avec moins d'intérêts, parce que le capital est réduit plus tôt" },
];

export const WS = {
  code: "8.6",
  title: "Prêts, amortissement et conditions changeantes",
  bigideas: S`Un tableau d'amortissement suit chaque versement : intérêts = solde × $i$, capital = versement − intérêts, nouveau solde = solde − capital. Un taux plus élevé ou une durée plus longue augmente l'intérêt total; des versements supplémentaires ou plus fréquents le réduisent.`,
  goals: ["Construire des tableaux d'amortissement.", "Trouver des soldes restants dus.", "Comparer des taux, des durées et des fréquences.", "Étudier l'effet des versements supplémentaires."],
  curriculum: "C2.6, C2.7",
  vocab: [["Amortissement", "le remboursement d'un prêt par des versements réguliers"], ["Solde restant dû", "le montant qu'on doit encore"], ["Durée", "la durée du prêt"]],
  hook: "Un concessionnaire automobile annonce « seulement 299 dollars par mois! » Quelles questions devrais-tu poser avant de signer?",
  concepts: [
    ["1. Une ligne", S`intérêts $=$ solde $\times i$; capital $=R-$ intérêts; nouveau solde $=$ ancien $-$ capital.`],
    ["2. Solde", S`Après $k$ versements : $PV(1+i)^k-\frac{R[(1+i)^k-1]}{i}$, ou la PV des versements restants.`],
    ["3. Et si…?", S`${barsT(cmpRate.map((v) => v * 60 - 25000), { width: 5, xlabel: "3% · 6% · 9%", ylabel: "intérêt total" })}Intérêt total sur 25 000 dollars sur 5 ans à 3%, 6% et 9%.`],
  ],
  tips: ["Intérêts sur le solde actuel.", "Le dernier versement peut être différent.", "Versement plus bas ≠ moins cher.", "Utilise un tableur.", "Compare l'intérêt total."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
