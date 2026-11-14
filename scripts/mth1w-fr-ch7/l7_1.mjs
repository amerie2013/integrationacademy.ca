// MTH1W-FR 7.1 — Prendre des décisions financières (miroir de ../mth1w-ch7/l7_1.mjs) : prix unitaire, rabais et taxe
// de vente, comparaison de forfaits (seuil de rentabilité), paiements échelonnés, inflation et pouvoir d'achat, fraude
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "7.1 Prendre des décisions financières";
export const ID = lessonId(7, 1);

export const blocks = () => [
  intro({
    icon: "💵",
    title: "Prendre des décisions financières",
    overview: String.raw`Chaque achat est une décision : quel format, quel forfait, comptant ou par versements mensuels, maintenant ou plus tard. Les bonnes décisions viennent de la comparaison des options à l'aide des mathématiques — les prix unitaires, le vrai prix après les rabais et la taxe, le seuil de rentabilité entre deux forfaits et le coût caché des paiements échelonnés. Tu verras aussi comment l'inflation réduit peu à peu ce que l'argent permet d'acheter, et comment reconnaître les fraudes courantes avant qu'elles ne te coûtent cher.`,
    goals: [
      "comparer des produits à l'aide des prix unitaires;",
      "calculer des prix après un rabais et la TVH de 13 % de l'Ontario;",
      "modéliser des forfaits comme un coût fixe plus un coût variable et trouver le seuil de rentabilité;",
      "trouver le coût réel d'un achat avec un plan de paiement;",
      "expliquer l'inflation et calculer son effet sur les prix et le pouvoir d'achat;",
      "reconnaître les signes avant-coureurs d'une fraude financière.",
    ],
    curriculum: "F1.1 (décisions financières; comment la connaissance de la fraude et des situations financières passées et actuelles éclaire les décisions)",
    prior: [
      [String.raw`\(25\%\) de \(80\)?`, String.raw`\(20\).`],
      [String.raw`Augmente \(60\) de \(13\%\).`, String.raw`\(60\times1.13=67.80\).`],
      [String.raw`Résous \(20+4n=50\).`, String.raw`\(n=7.5\).`],
    ],
    words: [
      ["Prix unitaire", "coût par unité (par litre, par gramme, par article)", "2.10 $/L"],
      ["TVH", "taxe de vente harmonisée : 13 % en Ontario sur la plupart des achats", "× 1.13"],
      ["Coût fixe", "le même peu importe la quantité utilisée", "frais mensuels"],
      ["Coût variable", "dépend de la quantité utilisée", "par Go, par cours"],
      ["Seuil de rentabilité", "le point où deux options coûtent la même chose", "égaler les coûts"],
      ["Inflation", "la hausse générale des prix avec le temps", "environ 2 à 3 % par année"],
    ],
  }),

  section("📌 Les prix unitaires", String.raw`
  <p>Plus gros ne veut pas toujours dire moins cher. Divise le prix par la quantité pour comparer : \(\text{prix unitaire}=\dfrac{\text{prix}}{\text{quantité}}\). Utilise les mêmes unités pour les deux produits (convertis les mL en L, les g en kg).</p>
  ${table(["Produit", "Prix", "Format", "Prix unitaire"], [["Céréales A", "4.99 $", "450 g", "\\(4.99\\div0.45\\approx11.09\\,\\$\\)/kg"], ["Céréales B", "7.49 $", "750 g", "\\(7.49\\div0.75\\approx9.99\\,\\$\\)/kg"]])}
  <p>Les céréales B sont le meilleur achat — si tu les manges vraiment avant qu'elles ne perdent leur fraîcheur. Un prix unitaire bas ne fait économiser que s'il n'y a pas de gaspillage.</p>`),

  section("📌 Les rabais et la taxe de vente", String.raw`
  ${keyIdea(String.raw`Un rabais de \(d\%\) multiplie le prix par \((1-d)\); la TVH de 13 % multiplie par \(1.13\). Prix final \(=\text{prix}\times(1-d)\times1.13\). L'ordre n'a pas d'importance, car la multiplication est commutative.`)}
  <p>Exemple : des chaussures à \(80\,\$\), à \(30\%\) de rabais : \(80\times0.70=56\,\$\); avec la taxe, \(56\times1.13=63.28\,\$\).</p>`),

  section("📌 Comparer des forfaits : coût fixe + coût variable", String.raw`
  <p>Les forfaits de téléphone, les centres de conditionnement physique et les locations d'auto demandent souvent un montant fixe plus un montant variable : \(C=(\text{taux})\times x+(\text{fixe})\). Deux forfaits de ce type sont deux droites; leur point d'intersection est le <strong>seuil de rentabilité</strong>. Avant ce point, un forfait est moins cher; après, c'est l'autre.</p>
  <p>Modifie les frais et les taux dans l'explorateur pour voir le seuil de rentabilité se déplacer.</p>`),

  widget("planCompare"),

  section("📌 Payer en plusieurs versements", String.raw`
  <p>Le financement, les formules « achetez maintenant, payez plus tard » et les plans de versements étalent un coût sur plusieurs mois. Compare toujours le <strong>total</strong> de tous les versements avec le prix comptant : la différence est le coût de l'emprunt.</p>
  ${table(["Option", "Versements", "Total payé", "Coût supplémentaire"], [["Comptant", "1200 $ maintenant", "1200 $", "—"], ["Plan de paiement", "24 × 59.50 $", "1428 $", "228 $ (19 %)"]])}`),

  section("📌 L'inflation et le pouvoir d'achat", String.raw`
  <p>Les prix ont tendance à augmenter chaque année. Statistique Canada mesure cette hausse avec l'indice des prix à la consommation (IPC), et la Banque du Canada vise à maintenir l'inflation près de \(2\%\) par année. Avec une inflation \(r\), un prix \(P\) devient \(P(1+r)^n\) après \(n\) années — et une même somme d'argent permet d'acheter moins.</p>`),

  widget("inflationCalc"),

  section("📌 Reconnaître la fraude", watchOut([
    "De la pression pour agir immédiatement (« paie maintenant ou ton compte sera fermé »).",
    "Des demandes de paiement par cartes-cadeaux, cryptomonnaie ou virement télégraphique.",
    "Des offres trop belles pour être vraies (rendements élevés garantis, prix à un concours auquel tu n'as jamais participé).",
    "Des messages qui demandent des mots de passe, des NIP ou des numéros de carte. Les vraies banques ne les demandent jamais par texto ou par courriel.",
    "En cas de doute, arrête-toi et communique avec l'organisme à l'aide d'un numéro ou d'un site Web que tu trouves toi-même.",
  ])),

  examples([
    ["Prix unitaire", String.raw`Un carton de jus de \(1.89\) L coûte \(4.29\,\$\) et une cruche de \(2.63\) L coûte \(5.49\,\$\). Lequel est le meilleur achat?`,
      [String.raw`Carton : \(4.29\div1.89\approx2.27\,\$\)/L.`, String.raw`Cruche : \(5.49\div2.63\approx2.09\,\$\)/L.`],
      String.raw`la cruche (environ \(18\) cents de moins par litre)`],
    ["Rabais et TVH", String.raw`Un manteau de \(120\,\$\) est en solde à \(25\%\) de rabais. Trouve le prix, TVH de \(13\%\) incluse.`,
      [String.raw`Prix soldé : \(120\times0.75=90\,\$\).`, String.raw`Avec la taxe : \(90\times1.13=101.70\,\$\).`],
      String.raw`\(101.70\,\$\)`],
    ["Seuil de rentabilité", String.raw`Le centre A demande \(30\,\$\) par mois plus \(5\,\$\) par cours; le centre B demande \(75\,\$\) par mois pour des cours illimités. Quand coûtent-ils la même chose, et lequel est le meilleur pour \(12\) cours par mois?`,
      [String.raw`\(30+5n=75\Rightarrow n=9\) cours.`, String.raw`Pour \(12\) cours : A coûte \(30+60=90\,\$\); B coûte \(75\,\$\).`],
      String.raw`égaux à \(9\) cours; B est moins cher pour \(12\)`],
    ["Inflation", String.raw`Un panier d'épicerie coûte \(50\,\$\) aujourd'hui. Si l'inflation est en moyenne de \(2.5\%\) par année, combien coûtera-t-il dans \(10\) ans?`,
      [String.raw`\(50(1.025)^{10}\approx50\times1.280=64.00\,\$\).`, String.raw`Les mêmes \(50\,\$\) permettraient alors d'en acheter seulement environ \(\frac{50}{64}\approx78\%\).`],
      String.raw`environ \(64.00\,\$\)`],
    ["Le coût de payer plus tard", String.raw`Un téléviseur coûte \(900\,\$\) comptant, ou \(12\) versements mensuels de \(84.50\,\$\). Combien le plan de paiement coûte-t-il de plus, en pourcentage du prix comptant?`,
      [String.raw`Total des versements : \(12\times84.50=1014\,\$\).`, String.raw`Supplément : \(1014-900=114\,\$\); \(\frac{114}{900}\approx12.7\%\).`],
      String.raw`\(114\,\$\) de plus, environ \(12.7\%\)`],
  ]),

  practice([
    q("prix unitaire", String.raw`Lequel est le meilleur achat?`, choice(["\\(12\\) œufs pour \\(4.20\\,\\$\\)", "\\(30\\) œufs pour \\(10.80\\,\\$\\)", "ils coûtent la même chose par œuf", "impossible à dire"], 0),
      "Trouve le prix par œuf.", [String.raw`\(4.20\div12=0.35\,\$\); \(10.80\div30=0.36\,\$\).`], "12 pour 4.20 $"),
    q("rabais + taxe", String.raw`Des écouteurs coûtent \(150\,\$\). Trouve le prix après un rabais de \(20\%\) et la TVH de \(13\%\) (en dollars).`, num(135.6, 0.006),
      "Multiplie par 0.80, puis par 1.13.", [String.raw`\(150\times0.8=120\); \(120\times1.13=135.60\).`], String.raw`\(135.60\,\$\)`),
    q("seuil de rentabilité", String.raw`Forfait A : \(25\,\$\) plus \(0.10\,\$\) par minute. Forfait B : \(0.25\,\$\) par minute, sans frais. Pour combien de minutes coûtent-ils la même chose?`, num(166.67, 0.01),
      "Égale les coûts.", [String.raw`\(25+0.10m=0.25m\Rightarrow0.15m=25\Rightarrow m\approx166.67\).`], String.raw`\(\approx166.67\) min`),
    q("inflation", String.raw`Un billet de concert coûte \(80\,\$\). Avec une inflation de \(3\%\) par année, combien coûtera-t-il dans \(5\) ans (au cent près)?`, num(92.74, 0.006),
      "Multiplie par 1.03 cinq fois.", [String.raw`\(80(1.03)^5\approx80\times1.15927=92.74\).`], String.raw`\(92.74\,\$\)`),
    q("fraude", "Quel message est le plus probablement une fraude?", choice(["« Ton colis est retenu. Paie des frais de 2.99 $ avec une carte-cadeau d'ici 1 heure. »", "Un reçu par courriel pour un achat que tu as fait", "Une lettre de ton école au sujet des bulletins", "L'application de ta banque qui affiche ton solde"], 0),
      "Cherche l'urgence et les modes de paiement inhabituels.", ["L'urgence combinée à un paiement par carte-cadeau sont des signes avant-coureurs classiques."], "le message du colis"),
  ]),

  wrapUp({
    qas: [
      ["Le plus gros emballage est-il toujours la meilleure affaire?", "Il a habituellement le prix unitaire le plus bas, mais pas toujours, et il ne fait économiser que si tu l'utilises au complet. Vérifie le prix unitaire et pense au gaspillage."],
      ["Pourquoi l'ordre du rabais et de la taxe n'a-t-il pas d'importance?", "Ce sont deux multiplications : 0.75 × 1.13 = 1.13 × 0.75. Peu importe l'ordre, on obtient le même prix final."],
      ["Comment choisir entre deux forfaits?", "Estime ce que tu utiliseras vraiment, trouve le seuil de rentabilité et regarde de quel côté tu te situes. Pense aussi aux changements possibles dans ton utilisation."],
      ["Acheter avec un plan de paiement est-il toujours une mauvaise idée?", "Pas toujours : un plan à 0 % payé à temps ne coûte rien de plus. Mais les paiements manqués entraînent souvent des frais et des intérêts élevés, alors lis les conditions."],
      ["Pourquoi l'inflation est-elle importante pour un élève?", "L'argent gardé sous le matelas perd de la valeur chaque année. Pour suivre, l'épargne doit rapporter des intérêts au moins égaux à l'inflation (7.3)."],
    ],
    summary: [
      "Prix unitaire = prix ÷ quantité; compare dans les mêmes unités.",
      "Prix final = prix × (1 − rabais) × 1.13 en Ontario.",
      "Forfaits : C = taux × x + fixe; seuil de rentabilité là où les coûts sont égaux.",
      "Plans de paiement : compare le total payé avec le prix comptant.",
      "Inflation : P(1 + r)ⁿ; l'argent achète moins avec le temps. Surveille les signes de fraude.",
    ],
    next: "La leçon 7.2 porte sur les biens qui prennent ou perdent de la valeur avec le temps : l'appréciation et la dépréciation.",
  }),
];
