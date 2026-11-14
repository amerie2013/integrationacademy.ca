// 7.1 Prendre des décisions financières — 20 questions faciles + 20 moyennes (miroir de ../../mth1w-ch7/bank/em7_1.mjs;
// l'argent s'écrit en « dollars », jamais avec \$)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  num(`Une bouteille de jus de 2 L coûte 3.80 dollars. Quel est le prix unitaire en dollars par litre?`, 1.9, "3.80 ÷ 2."),
  num(`Trouve le prix d'un article de 40 dollars après un rabais de 25 % (en dollars).`, 30, "40 × 0.75."),
  num(`Trouve le coût total d'un article de 20 dollars avec la TVH de 13 % (en dollars).`, 22.6, "20 × 1.13."),
  mc(`Lequel est le meilleur achat?`, "6 bagels pour 3.60 dollars", ["4 bagels pour 2.60 dollars", "ils coûtent la même chose par bagel", "impossible à dire"], "0.60 contre 0.65 par bagel."),
  mc(`En Ontario, le taux de la TVH est de…`, "13 %", ["5 %", "8 %", "15 %"], "Taxe de vente harmonisée."),
  mc(`Un coût qui reste le même peu importe la quantité utilisée est un…`, "coût fixe", ["coût variable", "prix unitaire", "rabais"], "p. ex. des frais mensuels."),
  mc(`Des frais de 0.10 dollar par texto sont un…`, "coût variable", ["coût fixe", "taxe", "seuil de rentabilité"], "Ils dépendent de l'utilisation."),
  num(`Le forfait A coûte 30 dollars. Le forfait B coûte 10 dollars plus 2 dollars par Go. Pour combien de Go coûtent-ils la même chose?`, 10, "10 + 2g = 30."),
  tf(`Retirer 20 % puis ajouter la taxe de 13 % donne le même prix qu'ajouter d'abord la taxe puis retirer 20 %.`, true, "On peut effectuer les multiplications dans n'importe quel ordre."),
  num(`Quel multiplicateur donne un rabais de 30 %?`, 0.7, "1 − 0.30."),
  mc(`La hausse générale des prix avec le temps s'appelle…`, "l'inflation", ["la dépréciation", "l'intérêt", "un budget"], "Elle est mesurée par l'indice des prix à la consommation."),
  num(`Un article coûte 100 dollars aujourd'hui. Avec une inflation de 2 %, combien coûtera-t-il dans un an (en dollars)?`, 102, "100 × 1.02."),
  tf(`Une vraie banque peut t'envoyer un texto pour te demander ton NIP afin de « confirmer ton compte ».`, false, "Les banques ne demandent jamais de NIP par texto — c'est une fraude."),
  mc(`Quelle demande de paiement est un signe important de fraude?`, "payer avec des cartes-cadeaux immédiatement", ["payer à la caisse du magasin", "payer une facture dans l'application de ta banque", "payer par chèque à une entreprise connue"], "Les cartes-cadeaux sont impossibles à retracer."),
  num(`Un paquet de 8 stylos coûte 6.00 dollars. Quel est le coût par stylo (en dollars)?`, 0.75, "6 ÷ 8."),
  num(`Un jeu de 60 dollars est en solde avec 15 dollars de rabais. Quel est le pourcentage de rabais?`, 25, "15 ÷ 60."),
  mc(`Le seuil de rentabilité de deux forfaits est le point où…`, "ils coûtent la même chose", ["un forfait est gratuit", "les deux forfaits sont les moins chers", "les coûts fixes sont égaux"], "Égale les deux coûts."),
  num(`Un téléphone coûte 600 dollars comptant ou 24 versements de 30 dollars. Combien le plan de paiement coûte-t-il de plus (en dollars)?`, 120, "720 − 600."),
  tf(`Le plus gros emballage a toujours le prix unitaire le plus bas.`, false, "Vérifie le prix unitaire — parfois, le plus petit est moins cher."),
  num(`Écris la TVH de 13 % sous forme de multiplicateur du prix total.`, 1.13, "1 + 0.13."),
];

export const M = [
  num(`Une boîte de céréales de 750 g coûte 6.30 dollars. Quel est le prix par kg (en dollars)?`, 8.4, "6.30 ÷ 0.75."),
  num(`Trouve le prix final d'un vélo de 250 dollars avec 20 % de rabais et la TVH de 13 % (en dollars).`, 226, "250 × 0.8 × 1.13."),
  num(`Le total d'un reçu est de 90.40 dollars, TVH de 13 % incluse. Quel était le prix avant taxe (en dollars)?`, 80, "90.40 ÷ 1.13."),
  num(`On applique deux rabais, 20 % puis 10 %. À quel rabais unique en pourcentage cela correspond-il?`, 28, "0.8 × 0.9 = 0.72."),
  num(`Centre A : 40 dollars par mois plus 4 dollars par cours. Centre B : 80 dollars par mois, illimité. Combien de cours les rendent égaux?`, 10, "40 + 4n = 80."),
  mc(`Pour les centres (A : 40 + 4n; B : 80), lequel est le moins cher pour 14 cours par mois?`, "B", ["A", "ils sont égaux", "aucun des deux"], "A : 96, B : 80."),
  num(`Lis le graphique : pour combien de Go les deux forfaits coûtent-ils la même chose?`, 40, "Les droites se croisent en (40, 50).", planeDoc({ view: { xmin: 0, xmax: 80, ymin: 0, ymax: 80 }, lines: [{ m: 0, b: 50, color: "blue", label: "A", lx: 5 }, { m: 0.75, b: 20, color: "red", label: "B", lx: 60 }], step: { x: 10, y: 10 }, xlabel: "Go", ylabel: "coût" })),
  num(`Un canapé de 1200 dollars est acheté en 24 versements de 59 dollars. Quel est le coût supplémentaire en pourcentage du prix (1 décimale)?`, 18, "1416 − 1200 = 216; 216 ÷ 1200.", null, 0.06),
  num(`Avec une inflation de 3 % par année, combien coûtera un article de 50 dollars dans 5 ans (au cent près)?`, 57.96, "50 × 1.03⁵ ≈ 57.96.", null, 0.006),
  num(`Si les prix augmentent de 25 %, quel pourcentage de son pouvoir d'achat un dollar conserve-t-il?`, 80, "1 ÷ 1.25 = 0.8."),
  ms(`Lesquels sont des signes avant-coureurs de fraude? Choisis toutes les bonnes réponses.`, ["de la pression pour agir en quelques minutes", "un paiement par carte-cadeau ou en cryptomonnaie", "un prix pour un concours auquel tu n'as jamais participé", "un reçu pour un article que tu as acheté"], [0, 1, 2], "Un vrai reçu est normal."),
  mc(`Location d'auto X : 35 dollars + 0.30 dollar/km. Y : 60 dollars + 0.20 dollar/km. Laquelle est la moins chère pour 300 km?`, "Y", ["X", "elles sont égales", "aucune des deux"], "X : 125; Y : 120."),
  num(`Location d'auto X : 35 dollars + 0.30 dollar/km. Y : 60 dollars + 0.20 dollar/km. Pour combien de km coûtent-elles la même chose?`, 250, "0.1k = 25."),
  tf(`Un plan de financement à 0 % payé à temps coûte la même chose qu'un paiement comptant.`, true, "Sans intérêt, le total est égal au prix (vérifie s'il y a des frais)."),
  num(`Un contenant de peinture de 4 L coûte 52 dollars et un contenant de 1 L coûte 15 dollars. Combien économise-t-on par litre en achetant le contenant de 4 L (en dollars)?`, 2, "15 − 13."),
  mc(`L'inflation est de 4 % et un compte d'épargne rapporte 1.5 %. En matière de pouvoir d'achat, l'épargne…`, "perd de la valeur", ["prend de la valeur", "reste la même", "double"], "Les prix augmentent plus vite que le solde."),
  num(`Un manteau coûte 180 dollars et est à 30 % de rabais. La TVH est de 13 %. Combien paies-tu (au cent près)?`, 142.38, "180 × 0.7 × 1.13.", null, 0.006),
  num(`Un produit coûte 12 dollars aujourd'hui. Combien coûtait-il il y a 2 ans si l'inflation était de 2 % par année (au cent près)?`, 11.53, "12 ÷ 1.02² ≈ 11.53.", null, 0.006),
  mc(`La meilleure façon de vérifier un message suspect de ta banque est…`, "d'appeler la banque au numéro inscrit sur ta carte ou sur son site Web", ["de cliquer sur le lien dans le message", "de répondre avec ton numéro de compte", "de le transférer à tes amis"], "Utilise des coordonnées que tu trouves toi-même."),
  num(`Un magasin offre 3 articles pour 10 dollars sur des articles à 3.79 dollars chacun. Combien économise-t-on par article (au cent près)?`, 0.46, "3.79 − 3.33.", null, 0.006),
];
