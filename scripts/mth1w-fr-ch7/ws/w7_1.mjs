// Fiche 7.1 — Prendre des décisions financières (édition de l'enseignant). Miroir de ../../mth1w-ch7/ws/w7_1.mjs.
// L'argent en LaTeX s'écrit \$ (après le nombre, à la française); les valeurs et les points décimaux sont identiques.
import { planeT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Prix unitaire avec conversion d'unités", q: String.raw`Riz : un sac de $900$ g coûte $3.69$~\$; un sac de $2.5$ kg coûte $8.99$~\$. Lequel est le meilleur achat?`,
    steps: [String.raw`Petit : $3.69\div0.9=4.10$~\$/kg.`, String.raw`Grand : $8.99\div2.5\approx3.60$~\$/kg.`], ans: "le sac de 2.5 kg (environ 50 cents de moins par kg)" },
  { title: "Deux rabais de suite", q: String.raw`Un magasin accorde $20\%$ de rabais sur un vélo de $250$~\$, puis encore $10\%$ sur le prix soldé à la caisse. Est-ce la même chose que $30\%$ de rabais? Trouve le prix final avec la TVH.`,
    steps: [String.raw`Facteurs : $0.80\times0.90=0.72$, c'est-à-dire $28\%$ de rabais — et non $30\%$.`, String.raw`$250\times0.72=180$~\$; avec la TVH, $180\times1.13=203.40$~\$.`], ans: String.raw`$203.40$~\$ (un rabais total de $28\%$)` },
  { title: "Remonter à partir d'un prix final", q: String.raw`Un reçu indique $79.10$~\$, TVH de $13\%$ incluse. Quel était le prix avant taxe?`,
    steps: [String.raw`$P\times1.13=79.10$.`, String.raw`$P=79.10\div1.13=70.00$~\$.`], ans: String.raw`$70.00$~\$` },
  { title: "Seuil de rentabilité avec un graphique", q: String.raw`Forfait de diffusion A : $8$~\$ par mois plus $2$~\$ par location de film. Forfait B : $18$~\$ par mois, toutes les locations comprises. Trace les deux et trouve le seuil de rentabilité.`,
    fig: planeT({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 30 }, lines: [{ m: 2, b: 8, color: "blue", label: "A", lx: 8 }, { m: 0, b: 18, color: "red", label: "B", lx: 1 }], points: [{ x: 5, y: 18, label: "(5, 18)", color: "green" }], step: { x: 1, y: 5 }, xlabel: "locations", ylabel: "coût" }, 5.5),
    steps: [String.raw`$8+2n=18\Rightarrow n=5$.`, "Moins de 5 locations : A est moins cher; plus de 5 : B."], ans: "5 locations (18 \\$ chacun)" },
  { title: "Comparaison de trois options", q: String.raw`Locations d'auto pour une journée : X : $39$~\$ + $0.25$~\$/km; Y : $55$~\$ + $0.15$~\$/km; Z : $95$~\$ kilométrage illimité. Laquelle est la moins chère pour $120$ km? Pour $300$ km?`,
    steps: [String.raw`$120$ km : X $69$~\$, Y $73$~\$, Z $95$~\$ → X.`, String.raw`$300$ km : X $114$~\$, Y $100$~\$, Z $95$~\$ → Z.`], ans: "X pour 120 km; Z pour 300 km" },
  { title: "Coût d'un plan de versements", q: String.raw`Un portable de $1299$~\$ peut être payé en $18$ versements mensuels de $82.40$~\$. Trouve le coût supplémentaire et le pourcentage supplémentaire.`,
    steps: [String.raw`$18\times82.40=1483.20$~\$.`, String.raw`Supplément $=184.20$~\$; $\frac{184.20}{1299}\approx14.2\%$.`], ans: String.raw`$184.20$~\$ de plus ($\approx14.2\%$)` },
  { title: "L'inflation vers l'avant et vers l'arrière", q: String.raw`Un billet de cinéma coûte $15$~\$ aujourd'hui. (a) Avec une inflation de $2.8\%$, combien coûtera-t-il dans $10$ ans? (b) Combien coûtait-il il y a $10$ ans si l'inflation était la même?`,
    steps: [String.raw`(a) $15(1.028)^{10}\approx19.77$~\$.`, String.raw`(b) $15\div1.028^{10}\approx11.38$~\$.`], ans: String.raw`(a) $\approx19.77$~\$ (b) $\approx11.38$~\$` },
  { title: "Le pouvoir d'achat", q: String.raw`Si les prix augmentent de $25\%$ en plusieurs années, quel pourcentage de son ancien pouvoir d'achat un dollar conserve-t-il?`,
    steps: [String.raw`$\frac{1}{1.25}=0.80$.`, String.raw`Le dollar conserve $80\%$ de son pouvoir d'achat (une perte de $20\%$, et non de $25\%$).`], ans: "80\\%" },
  { title: "Repérer une fraude", q: "Un courriel t'annonce que tu as gagné une carte-cadeau de 1000 \\$ et que tu dois payer des frais de traitement de 25 \\$ en cryptomonnaie d'ici 2 heures. Nomme trois signes avant-coureurs et la bonne réaction.",
    steps: ["Tu n'as participé à aucun concours.", "Paiement en cryptomonnaie et frais à payer pour réclamer un prix.", "Pression extrême sur le temps.", "Réaction : ne paie rien et ne clique sur aucun lien; supprime ou signale le message."], ans: "une fraude classique avec paiement à l'avance" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Trouve le prix unitaire de chacun et choisis le meilleur achat : $500$ mL de shampooing pour $6.49$~\$ ou $750$ mL pour $8.99$~\$.`, recap: "Shampooing 500 mL ou 750 mL.", ans: String.raw`$12.98$~\$/L contre $11.99$~\$/L : $750$ mL` },
  { level: 1, q: String.raw`Trouve le coût total d'un chandail de $45$~\$ avec la TVH de $13\%$.`, recap: "Chandail de 45 \\$ + TVH.", ans: String.raw`$50.85$~\$` },
  { level: 1, q: String.raw`Une planche à roulettes de $220$~\$ est à $35\%$ de rabais. Trouve le prix soldé avant taxe.`, recap: "35\\% de rabais sur 220 \\$.", ans: String.raw`$143$~\$` },
  { level: 2, q: String.raw`Trouve le prix final d'un téléphone de $480$~\$ avec $15\%$ de rabais et la TVH de $13\%$.`, recap: "Téléphone de 480 \\$, 15\\% de rabais, TVH.", ans: String.raw`$461.04$~\$` },
  { level: 2, q: String.raw`Le total d'un reçu est de $146.90$~\$, TVH incluse. Quel était le prix avant taxe?`, recap: "Retirer la TVH de 146.90 \\$.", ans: String.raw`$130.00$~\$` },
  { level: 2, q: String.raw`Forfait de téléphone A : $35$~\$ pour $10$ Go plus $5$~\$ par Go supplémentaire. Forfait B : $60$~\$ illimité. Pour combien de Go au total coûtent-ils la même chose?`, recap: "Forfaits de téléphone A et B.", ans: String.raw`$35+5(g-10)=60\Rightarrow g=15$ Go` },
  { level: 2, q: String.raw`Un canapé coûte $1450$~\$ comptant ou $24$ versements de $69$~\$. Trouve le coût supplémentaire du plan de paiement.`, recap: "Plan de paiement du canapé.", ans: String.raw`$24\times69=1656$; $206$~\$ de plus` },
  { level: 2, q: String.raw`Avec une inflation de $3\%$, combien coûtera un café de $4.50$~\$ dans $8$ ans?`, recap: "Café avec une inflation de 3\\%.", ans: String.raw`$4.50(1.03)^8\approx5.70$~\$` },
  { level: 3, space: 5, q: String.raw`Deux centres de conditionnement physique : le centre A demande $120$~\$ d'inscription plus $25$~\$ par mois; le centre B ne demande pas de frais d'inscription, mais $40$~\$ par mois.
(a) Écris une équation du coût total de chacun après $m$ mois.
(b) Trouve le seuil de rentabilité.
(c) Quel centre est le moins cher pour un abonnement d'un an? De combien?`, recap: "Deux centres sur m mois.", ans: String.raw`(a) $C=25m+120$; $C=40m$ (b) $m=8$ ($320$~\$) (c) 12 mois : A $420$~\$, B $480$~\$ : A, de $60$~\$` },
  { level: 3, space: 5, q: String.raw`Un magasin annonce « Achète-en 2, obtiens le 3\textsuperscript{e} à moitié prix » sur des chemises à $24$~\$. Un autre magasin vend la même chemise $19.99$~\$ chacune.
(a) Trouve le prix par chemise pour 3 chemises dans chaque magasin.
(b) Quelle offre est la meilleure, et la taxe change-t-elle ta réponse?`, recap: "Offres de chemises.", ans: String.raw`(a) $(24+24+12)\div3=20$~\$ contre $19.99$~\$ (b) le deuxième magasin, de 1 cent par chemise; la taxe multiplie les deux par $1.13$, donc l'ordre ne change pas` },
  { level: 3, space: 5, q: String.raw`En 2015, les prix représentaient environ $83\%$ des prix de 2025.
(a) Combien coûtait en 2015 un article qui coûte $60$~\$ en 2025?
(b) Trouve le taux d'inflation annuel moyen sur ces 10 années.`, recap: "Niveau des prix 2015 et 2025.", ans: String.raw`(a) $60\times0.83=49.80$~\$ (b) $(1+r)^{10}=\frac{1}{0.83}\approx1.2048$ : $r\approx1.9\%$` },
  { level: 3, space: 5, q: String.raw`Tu as besoin d'un portable pour l'école. Option 1 : l'acheter neuf pour $1100$~\$ plus la TVH. Option 2 : le louer pour $45$~\$ par mois pendant $24$ mois (taxe incluse), puis le rendre. Option 3 : l'acheter remis à neuf pour $720$~\$ plus la TVH. Compare les options et recommandes-en une en donnant au moins deux raisons.`, recap: "Portable : acheter, louer ou remis à neuf.", ans: String.raw`neuf $1243$~\$; location $1080$~\$ et tu ne possèdes rien; remis à neuf $813.60$~\$ : le remis à neuf est le moins cher s'il est fiable ou garanti (les réponses varient selon les raisons)` },
  { level: 3, space: 5, q: "Décris deux fraudes courantes qui ciblent les élèves (par exemple de fausses offres d'emploi, des dépôts de location, des textos d'hameçonnage). Pour chacune, donne deux signes avant-coureurs et une façon de te protéger.", recap: "Fraudes qui ciblent les élèves.", ans: "les réponses varient : les faux emplois demandent des frais à l'avance ou des renseignements bancaires; les fraudes de location demandent un dépôt avant la visite; se protéger : vérifier de façon indépendante, ne jamais envoyer d'argent ni de cartes-cadeaux, utiliser les coordonnées officielles" },
];

export const WS = {
  code: "7.1",
  title: "Prendre des décisions financières",
  bigideas: String.raw`Les décisions financières sont des comparaisons. Les prix unitaires comparent les formats; les multiplicateurs servent pour les rabais ($\times(1-d)$) et pour la TVH de $13\%$ de l'Ontario ($\times1.13$); les modèles linéaires (coût fixe $+$ coût variable) et leurs seuils de rentabilité comparent les forfaits; le total de tous les versements révèle le coût réel des plans de paiement. L'inflation, $P(1+r)^n$, signifie que l'argent achète moins avec le temps, et la connaissance de la fraude te protège contre une perte totale de ton argent.`,
  goals: ["Comparer des produits à l'aide des prix unitaires.", "Appliquer des rabais et la TVH, vers l'avant et vers l'arrière.", "Modéliser et comparer des forfaits; trouver des seuils de rentabilité.", "Trouver le coût des plans de paiement.", "Calculer l'inflation et le pouvoir d'achat.", "Reconnaître la fraude."],
  curriculum: "F1.1",
  vocab: [["Prix unitaire", "prix par unité de quantité"], ["TVH", "taxe de vente harmonisée de 13\\% en Ontario"], ["Seuil de rentabilité", "le point où deux options coûtent la même chose"], ["Inflation", "la hausse générale des prix; mesurée par l'IPC"], ["Pouvoir d'achat", "ce qu'une somme d'argent fixe permet d'acheter"]],
  hook: String.raw`Apporte (ou projette) deux formats du même produit avec leurs étiquettes de tablette. Demande : « Lequel est la meilleure affaire? » Beaucoup d'élèves choisissent le plus gros; vérifie avec les prix unitaires --- parfois, le plus petit est moins cher par gramme.`,
  concepts: [
    ["1. Prix unitaires, rabais et taxe", String.raw`Prix unitaire $=\frac{\text{prix}}{\text{quantité}}$. Prix final $=P(1-d)(1.13)$. Pour retirer la taxe : divise par $1.13$. Les rabais successifs se multiplient : $20\%$ puis $10\%$ de rabais donnent $\times0.72$.`],
    ["2. Comparer des forfaits", String.raw`$C=(\text{taux})x+(\text{fixe})$. Seuil de rentabilité : égale les coûts et résous; puis teste une valeur de chaque côté.
${planeT({ view: { xmin: 0, xmax: 80, ymin: 0, ymax: 60 }, lines: [{ m: 0, b: 40, color: "blue", label: "forfaitaire", lx: 5 }, { m: 0.5, b: 15, color: "red", label: "15 + 0.5x", lx: 55 }], points: [{ x: 50, y: 40, color: "green" }], step: { x: 10, y: 10 }, xlabel: "Go", ylabel: "coût" }, 5)}`],
    ["3. Payer plus tard, inflation et fraude", String.raw`Compare le total des versements avec le prix comptant. Inflation : $P(1+r)^n$; pouvoir d'achat $\frac{1}{(1+r)^n}$. Signes avant-coureurs de fraude : urgence, modes de paiement inhabituels, demandes de renseignements personnels, offres trop belles pour être vraies.`],
  ],
  tips: ["Les élèves additionnent souvent les rabais (20\\% + 10\\% = 30\\%) : il faut multiplier les facteurs.", "Pour retirer la taxe : diviser par 1.13; soustraire 13\\% est une erreur.", "Teste toujours une valeur de chaque côté d'un seuil de rentabilité.", "Discute des vrais forfaits de téléphone et de transport en commun que les élèves utilisent.", "Demande aux élèves d'apporter un texto ou un courriel frauduleux (sans renseignements personnels) pour l'analyser."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
