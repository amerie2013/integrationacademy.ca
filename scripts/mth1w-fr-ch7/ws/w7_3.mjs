// Fiche 7.3 — Intérêts et emprunts (édition de l'enseignant). Miroir de ../../mth1w-ch7/ws/w7_3.mjs.
// L'argent en LaTeX s'écrit \$ (après le nombre); les valeurs et les points décimaux sont identiques à l'anglais.
import { planeT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Intérêt simple", q: String.raw`Trouve l'intérêt simple et le montant pour $4200$~\$ à $3.25\%$ par année pendant $5$ ans.`,
    steps: [String.raw`$I=4200\times0.0325\times5=682.50$~\$.`, String.raw`$A=4200+682.50=4882.50$~\$.`], ans: String.raw`$I=682.50$~\$, $A=4882.50$~\$` },
  { title: "Trouver le taux", q: String.raw`$1500$~\$ rapportent $135$~\$ d'intérêt simple en $2$ ans. Trouve le taux annuel.`,
    steps: [String.raw`$135=1500\times r\times2$.`, String.raw`$r=\frac{135}{3000}=0.045=4.5\%$.`], ans: "4.5\\%" },
  { title: "Trouver la durée", q: String.raw`Combien de temps faut-il pour que $800$~\$ rapportent $96$~\$ à $4\%$ d'intérêt simple?`,
    steps: [String.raw`$96=800\times0.04\times t\Rightarrow t=\frac{96}{32}=3$ ans.`], ans: "3 ans" },
  { title: "Table d'intérêt composé", q: String.raw`On investit $2000$~\$ à $6\%$ composé annuellement. Montre le solde pendant $3$ ans.`,
    steps: [String.raw`Année 1 : $2000\times1.06=2120$.`, String.raw`Année 2 : $2120\times1.06=2247.20$. Année 3 : $2382.03$.`, String.raw`Formule : $2000(1.06)^3\approx2382.03$ ✓`], ans: String.raw`$2382.03$~\$` },
  { title: "Capitalisation mensuelle", q: String.raw`On épargne $3500$~\$ à $4.8\%$ composé mensuellement pendant $4$ ans. Trouve le montant et l'intérêt.`,
    steps: [String.raw`$\frac{r}{n}=0.004$, $nt=48$.`, String.raw`$A=3500(1.004)^{48}\approx4239.22$~\$; intérêt $\approx739.22$~\$.`], ans: String.raw`$A\approx4239.22$~\$` },
  { title: "Comparer les fréquences", q: String.raw`Compare $10\,000$~\$ à $5\%$ pendant $10$ ans, composé annuellement, trimestriellement et mensuellement.`,
    steps: [String.raw`Annuellement : $10\,000(1.05)^{10}\approx16\,288.95$~\$.`, String.raw`Trimestriellement : $10\,000(1.0125)^{40}\approx16\,436.19$~\$.`, String.raw`Mensuellement : $10\,000(1+\frac{0.05}{12})^{120}\approx16\,470.09$~\$.`], ans: "une capitalisation plus fréquente rapporte un peu plus" },
  { title: "Graphique : simple ou composé", q: String.raw`Trace le graphique de $1000$~\$ à $8\%$ d'intérêt simple et composé pendant $20$ ans. Quand l'écart dépasse-t-il $500$~\$ pour la première fois?`,
    fig: planeT({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 5000 }, lines: [{ m: 80, b: 1000, color: "blue", label: "simple", lx: 15 }], curves: [{ f: (t) => 1000 * 1.08 ** t, color: "green" }], step: { x: 2, y: 500 }, xlabel: "années", ylabel: "montant" }, 5.5),
    steps: [String.raw`Année 12 : composé $2518.17$, simple $1960$ : écart de $558$~\$.`, String.raw`Année 11 : $2331.64-1880=451.64$~\$.`], ans: "à l'année 12" },
  { title: "Intérêt sur une carte de crédit", q: String.raw`Un solde de $800$~\$ porte un intérêt de $21\%$ par année, composé mensuellement. Si aucun paiement n'est fait, combien doit-on après $6$ mois?`,
    steps: [String.raw`Taux mensuel $0.21\div12=0.0175$.`, String.raw`$800(1.0175)^6\approx887.76$~\$.`], ans: String.raw`$887.76$~\$` },
  { title: "Comparer des prêts", q: String.raw`Pour emprunter $6000$~\$ pendant $3$ ans : le prêt A exige $7\%$ d'intérêt simple; le prêt B exige $6.5\%$ composé annuellement (payé à la fin). Lequel coûte le moins?`,
    steps: [String.raw`A : $6000\times0.07\times3=1260$~\$.`, String.raw`B : $6000(1.065)^3-6000\approx1247.70$~\$.`], ans: "le prêt B, d'environ 12.30 \\$" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Trouve l'intérêt simple sur $2400$~\$ à $5\%$ pendant $3$ ans.`, recap: "2400 \\$, 5\\%, 3 ans, simple.", ans: String.raw`$360$~\$` },
  { level: 1, q: String.raw`Trouve le montant lorsque $1000$~\$ sont composés annuellement à $3\%$ pendant $4$ ans.`, recap: "1000 \\$, 3\\%, 4 ans, composé.", ans: String.raw`$1125.51$~\$` },
  { level: 1, q: String.raw`Pour $6\%$ composé mensuellement pendant $5$ ans, donne $\frac{r}{n}$ et $nt$.`, recap: "r/n et nt.", ans: "0.005 et 60" },
  { level: 2, q: String.raw`$5000$~\$ rapportent $600$~\$ d'intérêt simple en $4$ ans. Trouve le taux.`, recap: "Trouver le taux simple.", ans: "3\\%" },
  { level: 2, q: String.raw`Trouve le montant : $7500$~\$ à $4\%$ composé trimestriellement pendant $6$ ans.`, recap: "7500 \\$, 4\\% trimestriel, 6 ans.", ans: String.raw`$7500(1.01)^{24}\approx9523.01$~\$` },
  { level: 2, q: String.raw`Combien de plus $3000$~\$ rapportent-ils en $10$ ans à $5\%$ composé annuellement qu'à $5\%$ d'intérêt simple?`, recap: "Composé moins simple.", ans: String.raw`$4886.68-4500=386.68$~\$` },
  { level: 2, q: String.raw`Une carte de crédit exige $19.5\%$ par année, composé mensuellement. Trouve le solde après $1$ an sur $1500$~\$ sans aucun paiement.`, recap: "Solde de carte après un an.", ans: String.raw`$1500(1.01625)^{12}\approx1820.11$~\$` },
  { level: 2, q: String.raw`Combien d'années faut-il pour que $1000$~\$ doublent à $9\%$ composé annuellement? Utilise la règle de $72$ et vérifie.`, recap: "Doubler à 9\\%.", ans: String.raw`$72\div9=8$; $1.09^8\approx1.993$ ✓` },
  { level: 3, space: 5, q: String.raw`Léna investit $3000$~\$ à l'âge de $15$ ans et Max investit $6000$~\$ à l'âge de $30$ ans, tous deux à $6\%$ composé annuellement.
(a) Trouve le montant de chacun à l'âge de $60$ ans.
(b) Explique pourquoi Léna termine avec plus d'argent même si elle a investi moins.`, recap: "Investir tôt ou tard.", ans: String.raw`(a) Léna $3000(1.06)^{45}\approx41\,293.83$~\$; Max $6000(1.06)^{30}\approx34\,460.95$~\$ (b) l'argent de Léna se compose pendant 15 ans de plus` },
  { level: 3, space: 5, q: String.raw`Un solde de carte de crédit de $2000$~\$ à $20\%$ par année (environ $1.67\%$ par mois) est remboursé à raison de $100$~\$ par mois.
(a) Trouve l'intérêt exigé le mois 1 et le solde après le premier paiement.
(b) Explique pourquoi ne payer que $35$~\$ par mois serait un mauvais choix.`, recap: "Rembourser une carte de crédit.", ans: String.raw`(a) $\approx33.33$~\$; $2000+33.33-100=1933.33$~\$ (b) $35$~\$ dépasse à peine l'intérêt, donc le solde baisse très lentement et l'intérêt total est énorme` },
  { level: 3, space: 5, q: String.raw`Un magasin offre un ensemble de meubles de $2400$~\$ avec « aucun paiement pendant 12 mois ». Si le solde n'est pas payé d'ici là, un intérêt de $29.9\%$ par année, composé mensuellement, est exigé à partir de la date d'achat.
(a) Combien devrait-on après 12 mois dans ce cas?
(b) Quel conseil donnerais-tu à un acheteur?`, recap: "Offre de paiement différé.", ans: String.raw`(a) $2400(1.02492)^{12}\approx3224.59$~\$ (b) payer le solde complet avant l'échéance ou éviter l'offre` },
  { level: 3, space: 5, q: String.raw`Compare deux comptes d'épargne pour $5000$~\$ sur $8$ ans : le compte A rapporte $4.2\%$ composé annuellement; le compte B rapporte $4.1\%$ composé mensuellement. Lequel rapporte le plus, et de combien?`, recap: "Deux comptes d'épargne.", ans: String.raw`A $\approx6948.83$~\$; B $\approx6937.07$~\$ : A, d'environ $11.76$~\$` },
  { level: 3, space: 5, q: "Explique la différence entre épargner et emprunter au même taux d'intérêt, et pourquoi on dit que l'intérêt est « le prix de l'argent ». Donne un exemple personnel de chacun.", recap: "Épargner ou emprunter.", ans: "épargner : la banque te paie pour utiliser ton argent; emprunter : tu paies pour utiliser l'argent du prêteur; les exemples varient" },
];

export const WS = {
  code: "7.3",
  title: "Intérêts et emprunts",
  bigideas: String.raw`L'intérêt est le prix de l'argent. L'intérêt simple, $I=Prt$, augmente du même montant chaque année (linéaire). L'intérêt composé, $A=P\left(1+\frac rn\right)^{nt}$, ajoute l'intérêt au solde, qui rapporte donc lui-même des intérêts (exponentiel). Sur de longues périodes, la capitalisation fait une énorme différence --- un avantage quand on épargne tôt, et un danger quand on traîne une dette à intérêt élevé comme un solde de carte de crédit.`,
  goals: ["Calculer l'intérêt simple, le taux et la durée.", "Calculer l'intérêt composé pour différentes périodes de capitalisation.", "Comparer la croissance simple et la croissance composée.", "Calculer le coût d'un solde de carte de crédit et comparer des prêts."],
  curriculum: "F1.3, F1.1",
  vocab: [["Capital", "somme épargnée ou empruntée"], ["Intérêt simple", "$I=Prt$"], ["Intérêt composé", "$A=P(1+\\frac rn)^{nt}$"], ["TAP", "taux annuel en pourcentage"], ["Période de capitalisation", "la fréquence à laquelle l'intérêt est ajouté"]],
  hook: String.raw`Propose un choix : « 1000 \$ par jour pendant 30 jours, ou 1 cent doublé chaque jour pendant 30 jours? » Fais voter les élèves, puis révèle que le cent qui double dépasse 5 millions de dollars le 30\textsuperscript{e} jour. C'est ça, la capitalisation.`,
  concepts: [
    ["1. L'intérêt simple", String.raw`$I=Prt$, $A=P(1+rt)$; $r$ sous forme décimale, $t$ en années (mois $\div12$). Isole $r$ ou $t$ pour les trouver.`],
    ["2. L'intérêt composé", String.raw`$A=P\left(1+\frac rn\right)^{nt}$; $n=1, 2, 4, 12$ pour une capitalisation annuelle, semestrielle, trimestrielle, mensuelle. Intérêt $=A-P$.`],
    ["3. Emprunter", String.raw`Les cartes de crédit exigent environ $20\%$ par année, composé mensuellement; les petits paiements couvrent surtout l'intérêt. Compare les prêts selon leur coût total et paie le solde des cartes au complet quand c'est possible.`],
  ],
  tips: ["Les élèves oublient de convertir les mois en années.", "Dans la formule de l'intérêt composé, divise le taux par n ET multiplie la durée par n.", "Donne l'intérêt séparément du montant.", "Les tables année par année construisent la compréhension avant la formule.", "Discute de vrais relevés de carte de crédit et des paiements minimaux."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
