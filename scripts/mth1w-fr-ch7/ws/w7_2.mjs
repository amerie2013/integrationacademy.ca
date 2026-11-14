// Fiche 7.2 — Appréciation et dépréciation (édition de l'enseignant). Miroir de ../../mth1w-ch7/ws/w7_2.mjs.
// L'argent en LaTeX s'écrit \$ (après le nombre); les valeurs et les points décimaux sont identiques à l'anglais.
import { scatterT, planeT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Augmentation en pourcentage", q: String.raw`Une carte à collectionner rare achetée $80$~\$ vaut maintenant $116$~\$. Trouve l'augmentation en pourcentage.`,
    steps: [String.raw`Augmentation $=116-80=36$~\$.`, String.raw`$\frac{36}{80}=0.45=45\%$.`], ans: "45\\%" },
  { title: "Appréciation sur plusieurs années", q: String.raw`Un condo d'une valeur de $520\,000$~\$ s'apprécie de $3.5\%$ par année. Trouve sa valeur dans $6$ ans.`,
    steps: [String.raw`$V=520\,000(1.035)^6$.`, String.raw`$\approx520\,000\times1.22926\approx639\,213$~\$.`], ans: String.raw`environ $639\,213$~\$` },
  { title: "Table de dépréciation", q: String.raw`Une camionnette de $28\,000$~\$ se déprécie de $20\%$ par année. Fais une table de sa valeur pour les années $0$ à $3$.`,
    steps: [String.raw`Année 1 : $28\,000\times0.8=22\,400$.`, String.raw`Année 2 : $17\,920$. Année 3 : $14\,336$.`, "La perte de chaque année est plus petite : 5600, 4480, 3584."], ans: String.raw`$28\,000$~\$, $22\,400$~\$, $17\,920$~\$, $14\,336$~\$` },
  { title: "Dépréciation linéaire", q: String.raw`Des meubles de bureau qui ont coûté $6000$~\$ se déprécient de façon linéaire jusqu'à $0$~\$ sur $8$ ans. Écris un modèle et trouve leur valeur après $5$ ans.`,
    steps: [String.raw`Perte annuelle $=6000\div8=750$~\$; $V=6000-750n$.`, String.raw`$V(5)=6000-3750=2250$~\$.`], ans: String.raw`$2250$~\$` },
  { title: "Comparer les deux méthodes", q: String.raw`Pour une machine de $10\,000$~\$, compare une dépréciation linéaire de $1500$~\$ par année avec une dépréciation de $20\%$ par année sur $4$ ans.`,
    fig: scatterT({ pts: [[0, 10000], [1, 8000], [2, 6400], [3, 5120], [4, 4096]], view: { xmin: 0, xmax: 5, ymin: 0, ymax: 11000 }, step: { x: 1, y: 2000 }, xlabel: "années", ylabel: "valeur", line: { m: -1500, b: 10000, dash: true } }, 5.5),
    steps: [String.raw`Linéaire : $10\,000-4(1500)=4000$~\$.`, String.raw`En pourcentage : $10\,000(0.8)^4=4096$~\$.`, "Résultats semblables après 4 ans, mais la courbe en pourcentage perd plus au début et moins par la suite."], ans: String.raw`$4000$~\$ contre $4096$~\$` },
  { title: "Trouver le taux", q: String.raw`Une auto achetée $25\,000$~\$ vaut $16\,000$~\$ deux ans plus tard. Trouve le taux annuel de dépréciation constant.`,
    steps: [String.raw`$25\,000(1-r)^2=16\,000\Rightarrow(1-r)^2=0.64$.`, String.raw`$1-r=0.8\Rightarrow r=20\%$.`], ans: "20\\% par année" },
  { title: "Une hausse puis une baisse", q: String.raw`Le cours d'une action monte de $25\%$, puis baisse de $20\%$. Quelle est la variation globale?`,
    steps: [String.raw`$1.25\times0.80=1.00$.`, "Aucune variation globale — la baisse de 20 % est calculée sur une valeur plus grande."], ans: "0\\% (retour au point de départ)" },
  { title: "Temps de doublement", q: String.raw`Un objet de collection s'apprécie de $8\%$ par année. Dans combien d'années environ sa valeur doublera-t-elle? Vérifie avec la règle de $72$.`,
    steps: [String.raw`$1.08^9\approx1.999$, donc environ $9$ ans.`, String.raw`Règle de 72 : $72\div8=9$ ans.`], ans: "environ 9 ans" },
  { title: "Facteurs et décisions", q: "Explique pourquoi une auto neuve perd de la valeur plus vite qu'une auto de collection, et comment cela devrait influencer une décision d'achat.",
    steps: ["Les autos neuves se déprécient vite : nouveaux modèles, kilométrage, usure; la prime « neuf » est perdue dès l'achat.", "Les autos de collection rares en bon état peuvent s'apprécier, car l'offre est fixe et les collectionneurs les recherchent.", "Acheter une auto de 2 ou 3 ans évite la dépréciation la plus forte."], ans: "la dépréciation est la plus forte au début; envisager d'acheter usagé" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Écris le facteur de croissance ou de décroissance pour (a) une augmentation de $7\%$ (b) une diminution de $7\%$ (c) une diminution de $35\%$.`, recap: "Facteurs pour +7\\%, −7\\%, −35\\%.", ans: "(a) 1.07 (b) 0.93 (c) 0.65" },
  { level: 1, q: String.raw`Un téléphone de $900$~\$ perd $30\%$ de sa valeur la première année. Combien vaut-il après un an?`, recap: "Téléphone de 900 \\$, −30\\%.", ans: String.raw`$630$~\$` },
  { level: 1, q: String.raw`Un tableau de $2000$~\$ s'apprécie de $5\%$ par année. Trouve sa valeur après $2$ ans.`, recap: "Tableau de 2000 \\$, +5\\%.", ans: String.raw`$2205$~\$` },
  { level: 2, q: String.raw`Une auto de $35\,000$~\$ se déprécie de $16\%$ par année. Trouve sa valeur après $5$ ans.`, recap: "Auto de 35 000 \\$, −16\\%, 5 ans.", ans: String.raw`$\approx14\,637.42$~\$` },
  { level: 2, q: String.raw`Une maison achetée $350\,000$~\$ vaut $385\,875$~\$ deux ans plus tard. Trouve le taux annuel d'appréciation.`, recap: "Taux d'une maison à partir de deux valeurs.", ans: String.raw`$(1+r)^2=1.1025$ : $5\%$` },
  { level: 2, q: String.raw`De l'équipement d'une valeur de $12\,000$~\$ se déprécie de façon linéaire de $1600$~\$ par année. Quand vaudra-t-il $4000$~\$?`, recap: "Dépréciation linéaire jusqu'à 4000 \\$.", ans: "après 5 ans" },
  { level: 2, q: String.raw`Un vélo se déprécie de $25\%$ par année. Après combien d'années complètes vaut-il moins de la moitié de son prix?`, recap: "Quand sous la moitié.", ans: String.raw`$0.75^2=0.5625$, $0.75^3\approx0.42$ : après $3$ ans` },
  { level: 2, q: String.raw`Une valeur baisse de $40\%$, puis augmente de $40\%$. Trouve la variation globale en pourcentage.`, recap: "−40\\% puis +40\\%.", ans: String.raw`$0.6\times1.4=0.84$ : $-16\%$` },
  { level: 3, space: 5, q: String.raw`Un portable de $1500$~\$ peut se déprécier de $300$~\$ par année (linéaire) ou de $30\%$ par année.
(a) Fais une table de valeurs pour les années $0$ à $5$ pour les deux modèles.
(b) En quelle année la valeur linéaire devient-elle plus basse pour la première fois?
(c) Quel modèle convient le mieux aux portables? Explique.`, recap: "Portable : deux modèles de dépréciation.", ans: String.raw`(a) linéaire : $1500, 1200, 900, 600, 300, 0$; % : $1500, 1050, 735, 514.50, 360.15, 252.10$ (b) l'année 4 ($300<360.15$; avant, la valeur linéaire est plus élevée) (c) en pourcentage : la valeur n'atteint jamais zéro et baisse le plus vite au début` },
  { level: 3, space: 5, q: String.raw`Deux placements de $5000$~\$ : A s'apprécie de $6\%$ par année; B s'apprécie de $350$~\$ par année.
(a) Écris un modèle pour chacun.
(b) Lequel vaut le plus après $5$ ans? Après $15$ ans?
(c) Explique pourquoi la réponse change.`, recap: "Appréciation en pourcentage ou fixe.", ans: String.raw`(a) $A=5000(1.06)^t$; $B=5000+350t$ (b) 5 ans : A $6691.13$~\$, B $6750$~\$; 15 ans : A $11\,982.79$~\$, B $10\,250$~\$ (c) les gains de A augmentent chaque année (effet composé)` },
  { level: 3, space: 5, q: String.raw`Une auto perd $15\%$ de sa valeur chaque année. Sam peut l'acheter neuve pour $40\,000$~\$ ou à l'âge de $3$ ans.
(a) Combien vaut l'auto de 3 ans?
(b) Combien de dépréciation Sam évite-t-il en achetant usagé?
(c) Donne une raison pour laquelle une personne pourrait quand même acheter neuf.`, recap: "Auto neuve ou de 3 ans.", ans: String.raw`(a) $40\,000(0.85)^3=24\,565$~\$ (b) $15\,435$~\$ (c) garantie, fiabilité, dispositifs de sécurité récents, choix des options` },
  { level: 3, space: 5, q: String.raw`Un tableau s'est apprécié de $1200$~\$ à $2400$~\$ en $12$ ans à un taux constant.
(a) Utilise la règle de $72$ pour estimer le taux.
(b) Vérifie en calculant $1.06^{12}$.
(c) Prédis sa valeur $6$ ans plus tard.`, recap: "Tableau qui double en 12 ans.", ans: String.raw`(a) $72\div12=6\%$ (b) $1.06^{12}\approx2.012$ ✓ (c) $2400(1.06)^6\approx3404.45$~\$` },
  { level: 3, space: 5, q: "Choisis un article que tu possèdes ou que tu veux (téléphone, vélo, console de jeux, espadrilles). Recherche ou estime son prix neuf et sa valeur de revente après un ou deux ans. Trouve le taux de dépréciation annuel et décris les facteurs qui l'ont causé.", recap: "Ta propre étude de dépréciation.", ans: "les réponses varient; il faut calculer un taux à partir de deux valeurs et nommer des facteurs (nouveaux modèles, état, demande)" },
];

export const WS = {
  code: "7.2",
  title: "Appréciation et dépréciation",
  bigideas: String.raw`Les valeurs qui changent d'un pourcentage à chaque période se modélisent par des multiplications répétées : appréciation $V=V_0(1+r)^n$ et dépréciation $V=V_0(1-r)^n$. Comme le pourcentage s'applique à la valeur actuelle, les gains augmentent et les pertes diminuent avec le temps --- contrairement à la dépréciation linéaire, qui retire le même montant chaque année. L'offre, la demande, l'état, l'âge et la technologie expliquent pourquoi certains biens s'apprécient et d'autres se déprécient.`,
  goals: ["Calculer une augmentation et une diminution en pourcentage.", "Utiliser les facteurs de croissance et de décroissance.", "Comparer la dépréciation linéaire et la dépréciation en pourcentage.", "Trouver un taux à partir de deux valeurs.", "Expliquer les facteurs qui font changer la valeur."],
  curriculum: "F1.2",
  vocab: [["Appréciation", "augmentation de la valeur"], ["Dépréciation", "diminution de la valeur"], ["Facteur de croissance", "$1+r$"], ["Facteur de décroissance", "$1-r$"], ["Linéaire", "la même perte en dollars chaque année"]],
  hook: String.raw`Montre le prix d'un téléphone neuf et le prix du même modèle sur un site de revente un an plus tard. Demande : « Quel pourcentage a-t-il perdu? Perdra-t-il le même montant en dollars l'an prochain? »`,
  concepts: [
    ["1. Les facteurs", String.raw`Augmenter de $r$ : $\times(1+r)$; diminuer de $r$ : $\times(1-r)$; sur $n$ années, élève le facteur à la puissance $n$. Les variations en pourcentage ne s'annulent pas : $+20\%$ puis $-20\%$ donne $\times0.96$.`],
    ["2. Deux modèles de dépréciation", String.raw`Linéaire $V=V_0-dn$ (une droite, atteint zéro). En pourcentage $V=V_0(1-r)^n$ (une courbe, jamais zéro).
${planeT({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 22000 }, lines: [{ m: -2500, b: 20000, color: "gray", dash: true }], curves: [{ f: (t) => 20000 * 0.8 ** t, color: "red" }], step: { x: 1, y: 4000 }, xlabel: "années", ylabel: "valeur" }, 5.5)}`],
    ["3. Taux et doublement", String.raw`À partir de deux valeurs : $(1\pm r)^n=\frac{V}{V_0}$. Temps de doublement $\approx\frac{72}{\text{taux en }\%}$ années (règle de 72).`],
  ],
  tips: ["Les élèves utilisent 0.2 au lieu de 0.8 pour une perte de 20\\% — exige qu'ils écrivent le facteur.", "Montre une table pour rendre visible la perte annuelle qui diminue.", "Discute de la raison pour laquelle « +50\\% puis −50\\% » fait perdre de l'argent.", "Utilise les prix locaux des maisons ou des autos comme contexte.", "Fais le lien avec les relations exponentielles du chapitre 6."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
