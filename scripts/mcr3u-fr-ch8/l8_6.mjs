// MCR3U-FR 8.6 — Prêts, amortissement et conditions changeantes : tableaux d'amortissement, intérêts et capital,
// solde restant dû, effets du taux, de la durée, de la fréquence des versements et des versements supplémentaires
// (technologie). Miroir de ../mcr3u-ch8/l8_6.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { payPV, annFV, balance, paymentsToRepay, m } from "./fin.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "8.6 Prêts, amortissement et conditions changeantes";
export const ID = lessonId(8, 6);
const S = String.raw;
// Exemple 1 : 10 000 à 12%/a mensuel sur 1 an
const R1 = payPV(10000, 0.01, 12);
const rows1 = []; { let b = 10000; for (let k = 1; k <= 3; k++) { const int = b * 0.01; b = b + int - R1; rows1.push([k, m(R1), m(int), m(R1 - int), m(b)]); } }
// Exemple 2 : taux
const r4 = payPV(20000, 0.04 / 12, 60), r8 = payPV(20000, 0.08 / 12, 60);
// Exemple 3 : durées
const t3 = payPV(20000, 0.005, 36), t6 = payPV(20000, 0.005, 72);
// Exemple 4 : versement supplémentaire
const base = payPV(25000, 0.005, 60), nExtra = paymentsToRepay(25000, base + 100, 0.005);
const intBase = base * 60 - 25000;
const intExtra = (() => { let b = 25000, tot = 0; while (b > 0.005) { const int = b * 0.005; tot += int; b = b + int - Math.min(base + 100, b + int); } return tot; })();
// Exemple 5 : fréquence
const fA = annFV(1200, 0.06, 10), fM = annFV(100, 0.005, 120);
// niveau difficile
const bal24 = balance(20000, payPV(20000, 0.005, 60), 0.005, 24);
const L = 30000, rate = 0.07 / 12, nn = 72, P0 = payPV(L, rate, nn);
const lowerRate = payPV(L, 0.06 / 12, nn) * nn - L, shorter = payPV(L, rate, 60) * 60 - L, now = P0 * nn - L;

export const blocks = () => [
  intro({
    icon: "🧾",
    title: "Prêts, amortissement et conditions changeantes",
    overview: S`Un <strong>tableau d'amortissement</strong> montre, versement par versement, comment un prêt est remboursé : chaque versement couvre d'abord les intérêts sur le solde, et le reste réduit le capital. Les tableurs et les calculatrices financières rendent ces tableaux faciles à produire, ce qui permet de se demander « et si…? » : Et si le taux change? Et si la durée est plus courte? Et si je paie un peu plus? Dans cette leçon, tu vas construire des tableaux d'amortissement, trouver des soldes restants dus et étudier comment des conditions changeantes influent sur les versements et l'intérêt total.`,
    goals: [
      "construire les premières lignes d'un tableau d'amortissement;",
      "expliquer comment chaque versement se répartit entre intérêts et capital;",
      "trouver le solde restant dû après un certain nombre de versements;",
      "étudier l'effet du taux, de la durée et de la fréquence des versements;",
      "constater comment des versements supplémentaires raccourcissent un prêt et réduisent l'intérêt.",
    ],
    curriculum: "C2.6 (déterminer, au moyen d'une exploration à l'aide de la technologie, les effets de la modification des conditions — les versements, la fréquence des versements, le taux d'intérêt, la période de capitalisation — d'annuités simples de fin de période comme des plans d'épargne à long terme et des prêts), C2.7",
    prior: [
      ["Trouve l'intérêt pour un mois sur 10 000 dollars à 12%/a composé mensuellement.", "100 dollars."],
      [S`Trouve le versement d'un prêt de 5000 dollars, 12 versements mensuels à 1% par mois.`, `${m(payPV(5000, 0.01, 12))} dollars.`],
      ["Combien font 25 000 × 0.005?", "125."],
    ],
    words: [
      ["Amortissement", "le remboursement d'un prêt par des versements réguliers", ""],
      ["Tableau d'amortissement", "versement, intérêts, capital et solde pour chaque période", ""],
      ["Solde restant dû", "ce qu'on doit encore après un certain nombre de versements", ""],
      ["Durée (terme)", "le temps prévu pour rembourser le prêt", ""],
    ],
  }),

  section("📌 Une ligne du tableau", S`
  ${table(["Colonne", "Comment la calculer"], [["intérêts", "solde × i"], ["capital", "versement − intérêts"], ["nouveau solde", "ancien solde − capital"]])}
  ${table(["n°", "versement", "intérêts", "capital", "solde"], rows1)}
  ${keyIdea(S`Les premiers versements sont surtout des intérêts; les derniers sont surtout du capital, parce que l'intérêt est calculé sur un solde qui ne cesse de diminuer.`)}`),

  section("📌 Explorer", S`<p>Modifie le prêt, le taux, la durée et la fréquence des versements, et ajoute un montant supplémentaire à chaque versement. Observe le versement, le nombre de versements et l'intérêt total.</p>`),

  widget("amortLab", { init: [25000, 6, 5] }),

  section("📌 Attention", watchOut([
    "L'intérêt de chaque période est calculé sur le solde actuel, pas sur le prêt initial.",
    "Le dernier versement est souvent un peu différent à cause de l'arrondi.",
    "Un versement plus bas signifie habituellement plus d'intérêt total, pas moins.",
    "Compare les prêts selon l'intérêt total aussi bien que selon le versement.",
  ])),

  examples([
    ["Les trois premières lignes", "Un prêt de 10 000 dollars à 12%/a composé mensuellement est remboursé par 12 versements mensuels. Construis les trois premières lignes de son tableau d'amortissement.",
      [S`<b>Versement.</b> \(i=0.01\), \(n=12\) : \(R=\frac{10\,000(0.01)}{1-1.01^{-12}}\approx${m(R1)}\).`,
        S`<b>Méthode pour chaque ligne.</b> Intérêts = solde × \(i\). Capital = versement − intérêts. Nouveau solde = ancien solde − capital.`,
        S`<b>Ligne 1.</b> Intérêts \(10\,000(0.01)=100.00\). Capital \(${m(R1)}-100=${rows1[0][3]}\). Solde \(10\,000-${rows1[0][3]}=${rows1[0][4]}\).`,
        S`<b>Tableau.</b> ${tv(["versement", "montant", "intérêts", "capital", "solde"], ...rows1.map((row) => row.map(String)))}`,
        S`<b>Régularité.</b> Le versement reste le même, mais les intérêts diminuent à mesure que le solde diminue. Une plus grande partie de chaque versement va donc au capital ✓`],
      `versement ${m(R1)} dollars; solde après 3 versements ${rows1[2][4]} dollars`,
      plane({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 11000 }, points: Array.from({ length: 13 }, (_, k) => ({ x: k, y: Math.max(0, balance(10000, R1, 0.01, k)), color: k >= 1 && k <= 3 ? "amber" : "blue" })), step: { x: 1, y: 1000 }, xlabel: "versement", ylabel: "solde" })],
    ["Changer le taux", "Compare le versement mensuel et l'intérêt total d'un prêt de 20 000 dollars sur 5 ans à 4%/a et à 8%/a (composé mensuellement).",
      [S`<b>Mise en place.</b> \(n=60\). Les taux par mois sont \(\frac{0.04}{12}\) et \(\frac{0.08}{12}\).`,
        S`<b>Versements et intérêts.</b> Intérêts = \(60R-20\,000\). ${tv(["taux", "versement \\(R\\)", "total payé", "intérêts"], ["4%", m(r4), m(r4 * 60), m(r4 * 60 - 20000)], ["8%", m(r8), m(r8 * 60), m(r8 * 60 - 20000)])}`,
        S`<b>Comparer.</b> Les intérêts du prêt à 8% sont \(\frac{${m(r8 * 60 - 20000)}}{${m(r4 * 60 - 20000)}}\approx${(((r8 * 60 - 20000) / (r4 * 60 - 20000))).toFixed(2)}\) fois plus élevés.`,
        S`<b>Pourquoi plus du double?</b> Le versement plus élevé réduit le solde un peu plus lentement au début, donc l'intérêt s'applique à un solde plus grand pendant plus longtemps.`],
      "doubler le taux fait plus que doubler l'intérêt",
      plane({ view: { xmin: 0, xmax: 3, ymin: 0, ymax: 5500 }, segs: [[1, r4 * 60 - 20000], [2, r8 * 60 - 20000]].map(([x, v]) => ({ pts: [[x - 0.3, 0], [x - 0.3, v], [x + 0.3, v], [x + 0.3, 0]], color: "violet" })), points: [{ x: 1, y: r4 * 60 - 20000, label: `4% : ${m(r4 * 60 - 20000)}` }, { x: 2, y: r8 * 60 - 20000, label: `8% : ${m(r8 * 60 - 20000)}` }], step: { x: 1, y: 500 }, ylabel: "intérêt total" })],
    ["Changer la durée", "Compare un prêt de 20 000 dollars à 6%/a composé mensuellement sur 3 ans et sur 6 ans.",
      [S`<b>Mise en place.</b> \(i=0.005\); \(n=36\) et \(n=72\).`,
        S`<b>Résultats.</b> ${tv(["durée", "versement", "total payé", "intérêts"], ["3 ans", m(t3), m(t3 * 36), m(t3 * 36 - 20000)], ["6 ans", m(t6), m(t6 * 72), m(t6 * 72 - 20000)])}`,
        S`<b>Compromis.</b> La durée plus longue réduit le versement, mais le solde reste élevé plus longtemps, donc plus d'intérêt s'accumule.`,
        S`<b>Vérifier sur le graphique.</b> Le solde ambre (6 ans) diminue plus lentement que le violet (3 ans) ✓`],
      "durée plus longue : versement plus bas, plus d'intérêt",
      plane({ view: { xmin: 0, xmax: 7, ymin: 0, ymax: 21000 }, curves: [{ f: (t) => Math.max(0, balance(20000, t3, 0.005, 12 * t)), a: 0, b: 3, color: "violet" }, { f: (t) => Math.max(0, balance(20000, t6, 0.005, 12 * t)), a: 0, b: 6, color: "amber" }], step: { x: 1, y: 2000 }, xlabel: "années", ylabel: "solde" })],
    ["Payer davantage", "Un prêt de 25 000 dollars à 6%/a composé mensuellement est prévu sur 5 ans. Quel est l'effet d'un versement supplémentaire de 100 dollars chaque mois?",
      [S`<b>Plan régulier.</b> \(R=\frac{25\,000(0.005)}{1-1.005^{-60}}\approx${m(base)}\), pour 60 versements. Intérêts \(\approx${m(intBase)}\).`,
        S`<b>Plan avec supplément.</b> Le versement est de ${m(base + 100)} dollars. En cherchant le nombre de versements, on obtient ${nExtra}, le dernier étant plus petit.`,
        S`<b>Intérêts du plan avec supplément.</b> Prolonge le tableau jusqu'à ce que le solde atteigne 0 : intérêts \(\approx${m(intExtra)}\).`,
        S`<b>Comparer.</b> On économise ${m(intBase - intExtra)} dollars d'intérêts et ${60 - nExtra} versements.`,
        S`<b>Pourquoi ça fonctionne.</b> Les 100 dollars supplémentaires vont entièrement au capital, donc chaque intérêt calculé par la suite est plus petit ✓`],
      `économise environ ${m(intBase - intExtra)} dollars et ${60 - nExtra} versements`,
      plane({ view: { xmin: 0, xmax: 66, ymin: 0, ymax: 27000 }, curves: [{ f: (k) => Math.max(0, balance(25000, base, 0.005, k)), a: 0, b: 60, color: "violet" }, { f: (k) => Math.max(0, balance(25000, base + 100, 0.005, k)), a: 0, b: nExtra, color: "amber" }], points: [{ x: nExtra, y: 0, label: `${nExtra} versements`, color: "amber" }, { x: 60, y: 0, label: "60" }], step: { x: 6, y: 3000 }, xlabel: "mois", ylabel: "solde" }, "violet : régulier; ambre : avec les 100 dollars supplémentaires")],
    ["Changer la fréquence de l'épargne", "Compare l'épargne de 1200 dollars à la fin de chaque année à celle de 100 dollars à la fin de chaque mois pendant 10 ans à 6%/a (capitalisation correspondante).",
      [S`<b>Même total.</b> Les deux déposent 1200 dollars par année, soit 12 000 en tout.`,
        S`<b>Annuel.</b> \(i=0.06\), \(n=10\) : \(FV=\frac{1200(1.06^{10}-1)}{0.06}\approx${m(fA)}\).`,
        S`<b>Mensuel.</b> \(i=0.005\), \(n=120\) : \(FV=\frac{100(1.005^{120}-1)}{0.005}\approx${m(fM)}\).`,
        S`<b>Comparer.</b> L'épargne mensuelle termine avec ${m(fM - fA)} dollars de plus.`,
        S`<b>Pourquoi.</b> L'argent déposé plus tôt dans chaque année a plus de temps pour rapporter de l'intérêt, et il se capitalise plus souvent ✓`],
      "l'épargne mensuelle termine avec plus, car l'argent est déposé plus tôt",
      plane({ view: { xmin: 0, xmax: 3, ymin: 0, ymax: 19000 }, segs: [[1, fA], [2, fM]].map(([x, v]) => ({ pts: [[x - 0.3, 0], [x - 0.3, v], [x + 0.3, v], [x + 0.3, 0]], color: "violet" })), points: [{ x: 1, y: fA, label: `annuel ${m(fA)}` }, { x: 2, y: fM, label: `mensuel ${m(fM)}` }], step: { x: 1, y: 2000 }, ylabel: "valeur future" })],
  ]),

  practice([
    q("versement", "Trouve le versement mensuel d'un prêt de 5000 dollars sur 2 ans à 9%/a composé mensuellement (en dollars).", num(+m(payPV(5000, 0.0075, 24)), 0.02),
      "i = 0.0075, n = 24.", [S`\(\frac{5000(0.0075)}{1-1.0075^{-24}}\).`], m(payPV(5000, 0.0075, 24))),
    q("intérêts", "Le solde d'un prêt est de 15 000 dollars à 6%/a composé mensuellement. Combien d'intérêts sont facturés le mois suivant (en dollars)?", num(75),
      "Solde × i.", [S`\(15000(0.005)\).`], "75"),
    q("solde", "Suite : on fait un versement de 500 dollars. Quel est le nouveau solde (en dollars)?", num(14575),
      "Solde + intérêts − versement.", [S`\(15000+75-500\).`], "14 575"),
    q("effets", "Que se passe-t-il quand on augmente chaque versement d'un prêt?", choice(["le prêt est remboursé plus tôt et on paie moins d'intérêts", "le prêt dure plus longtemps", "l'intérêt total augmente", "rien ne change"], 0),
      "Une plus grande partie du capital est remboursée à chaque fois.", ["Le solde diminue plus vite."], "plus tôt, moins d'intérêts"),
    q("intérêt total", "Trouve l'intérêt total d'un prêt de 8000 dollars remboursé mensuellement sur 3 ans à 6%/a composé mensuellement (en dollars).", num(+m(payPV(8000, 0.005, 36) * 36 - 8000), 0.5),
      "Rn − PV.", ["Trouve R, multiplie par 36, soustrais 8000."], m(payPV(8000, 0.005, 36) * 36 - 8000)),
  ]),

  ...hard([
    ["Solde restant dû", "Un prêt de 20 000 dollars à 6%/a composé mensuellement est remboursé sur 5 ans. Combien doit-on encore après 2 ans?",
      [S`Le solde est la valeur actuelle des 36 versements restants, ou \(20000(1.005)^{24}-FV\) des 24 versements déjà faits.`],
      `${m(bal24)} dollars`],
    ["Quel changement fait économiser le plus?", "Un prêt de 30 000 dollars à 7%/a composé mensuellement sur 6 ans : qu'est-ce qui fait économiser le plus d'intérêts — un taux inférieur de 1% ou une durée plus courte de 1 an?",
      [`Actuellement : intérêts ≈ ${m(now)}.`, `Taux de 6% : ≈ ${m(lowerRate)} (économie de ${m(now - lowerRate)}).`, `Durée de 5 ans : ≈ ${m(shorter)} (économie de ${m(now - shorter)}).`],
      now - lowerRate > now - shorter ? "le taux plus bas" : "la durée plus courte",
      plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 7500 }, segs: [[1, now], [2, lowerRate], [3, shorter]].map(([x, v]) => ({ pts: [[x - 0.3, 0], [x - 0.3, v], [x + 0.3, v], [x + 0.3, 0]], color: "violet" })), points: [[1, now, "actuel"], [2, lowerRate, "6%"], [3, shorter, "5 ans"]].map(([x, y, label]) => ({ x, y, label })), step: { x: 1, y: 1000 }, ylabel: "intérêt total" })],
  ], [
    q("difficile", "Un prêt de 15 000 dollars à 8%/a composé mensuellement est remboursé sur 4 ans. Trouve le solde dû après 24 versements (en dollars).", num(+m(balance(15000, payPV(15000, 0.08 / 12, 48), 0.08 / 12, 24)), 0.05),
      "PV des 24 versements restants.", ["Trouve d'abord R."], m(balance(15000, payPV(15000, 0.08 / 12, 48), 0.08 / 12, 24))),
    q("difficile", "Un solde de carte de crédit de 3000 dollars à 19.2%/a composé mensuellement est remboursé par 150 dollars par mois. Combien de versements faut-il?", num(paymentsToRepay(3000, 150, 0.016)),
      "i = 0.016; essais successifs.", ["Trouve n tel que la PV des versements ≥ 3000."], String(paymentsToRepay(3000, 150, 0.016))),
    q("difficile", "Combien d'intérêts de plus paie-t-on sur un prêt de 30 000 dollars sur 5 ans à 7%/a plutôt qu'à 4%/a (les deux composés mensuellement)? (en dollars)", num(+m((payPV(30000, 0.07 / 12, 60) - payPV(30000, 0.04 / 12, 60)) * 60), 0.5),
      "Compare Rn − PV.", ["Trouve les deux versements."], m((payPV(30000, 0.07 / 12, 60) - payPV(30000, 0.04 / 12, 60)) * 60)),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi un premier versement est-il surtout de l'intérêt?", "L'intérêt est calculé sur le solde, qui est le plus élevé au début."],
      ["Comment trouver ce qu'on doit encore?", "Trouve la valeur actuelle des versements restants."],
      ["Une durée plus longue est-elle une bonne idée?", "Elle réduit chaque versement, mais augmente l'intérêt total."],
      ["Pourquoi les versements supplémentaires aident-ils autant?", "Chaque dollar supplémentaire réduit le solde, donc on facture moins d'intérêts à partir de ce moment."],
      ["Pourquoi utiliser la technologie ici?", "Des tableaux de dizaines de lignes et de nombreuses comparaisons « et si…? » se font rapidement dans un tableur."],
    ],
    summary: [
      "Intérêts = solde × i; capital = R − intérêts.",
      "Solde = PV des versements restants.",
      "Taux plus élevé ou durée plus longue → plus d'intérêts.",
      "Versements supplémentaires → prêt plus court, moins d'intérêts.",
    ],
    next: "La leçon 8.7 révise le chapitre.",
  }),
];
