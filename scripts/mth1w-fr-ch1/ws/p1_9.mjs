// Fiche 1.9 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis (à plusieurs parties).
export const PROBLEMS = [
  { level: 1, q: String.raw`Trouve $32\%$ de $150$.`, ans: "$48$" },
  { level: 1, q: String.raw`Écris $0.65$ et $\frac35$ en pourcentages, et $7.5\%$ en décimal.`, recap: String.raw`$0.65$, $\frac35$ en %; $7.5\%$ en décimal.`, ans: String.raw`$65\%$, $60\%$, $0.075$` },
  { level: 1, q: String.raw`$6$ kg de pommes coûtent $14.10$ dollars. Trouve le prix unitaire.`, recap: "Prix unitaire : 6 kg pour 14.10.", ans: "$2.35$ dollars/kg" },
  { level: 2, q: String.raw`$30$ représente $12\%$ de quel nombre? Que vaut $150\%$ de ce nombre?`, ans: "$250$; $375$" },
  { level: 2, q: String.raw`Le jus coûte $3.49$ dollars pour $2$ L ou $5.10$ dollars pour $3$ L. Quel est le meilleur achat?`, recap: "Meilleur achat : 2 L pour 3.49 ou 3 L pour 5.10.", ans: "3 L ($1.70$ contre $\\approx1.75$ par L)" },
  { level: 2, q: String.raw`Un prix baisse de $50$ à $42$ dollars. Trouve la variation en pourcentage.`, ans: String.raw`$-16\%$` },
  { level: 2, q: String.raw`Des chaussures coûtent $56.50$ dollars, TVH de $13\%$ comprise, après un rabais de $20\%$. Trouve le prix initial avant le rabais et la taxe.`, ans: "$62.50$ dollars" },
  { level: 2, q: String.raw`La valeur d'une voiture baisse de $28\,000$ à $19\,600$ dollars en $3$ ans. Trouve le taux de variation moyen et la diminution en pourcentage.`, recap: "Voiture 28 000 → 19 600 en 3 ans.", ans: String.raw`$-2800$ dollars/an; $30\%$` },
  { level: 3, space: 5.5,
    q: String.raw`Un magasin majore un article de $40\%$ au-dessus du coût, puis le met en solde à $25\%$ de rabais.
a) Quel pourcentage de profit le magasin réalise-t-il au prix soldé?
b) Le prix soldé est de $168$ dollars. Quel était le coût?
c) Quel est le plus grand rabais en pourcentage que le magasin peut accorder sur le prix majoré sans perdre d'argent? Arrondis au dixième.`,
    ans: String.raw`a) $1.4\times0.75=1.05$ : $5\%$ b) $168\div1.05=160$ dollars c) $1-\dfrac{1}{1.4}\approx28.6\%$.` },
  { level: 3, space: 5,
    q: String.raw`Une veste de $150$ dollars est en solde. Le magasin X accorde $30\%$ de rabais, puis $20\%$ de plus sur le prix soldé. Le magasin Y accorde $45\%$ de rabais.
a) Trouve le prix dans chaque magasin.
b) Quel magasin est le moins cher?
c) Quel rabais unique en pourcentage équivaut aux deux rabais du magasin X?`,
    recap: "Veste de 150 : 30 % puis 20 % de rabais ou 45 % de rabais.",
    ans: String.raw`a) X $84$, Y $82.50$ dollars b) Y c) $1-0.7\times0.8=44\%$.` },
  { level: 3, space: 5,
    q: String.raw`Ana marche à $4.5$ km/h. Ben roule à vélo à $18$ km/h et part du même endroit $30$ minutes après Ana, sur le même sentier.
a) Quelle avance Ana a-t-elle quand Ben part?
b) Combien de minutes après son départ Ben la rattrape-t-il?
c) À quelle distance du départ sont-ils alors?`,
    recap: "Ana à 4.5 km/h, Ben à 18 km/h, parti 30 min plus tard.",
    ans: String.raw`a) $2.25$ km b) $2.25\div13.5=\frac16$ h $=10$ min c) $3$ km.` },
  { level: 3, space: 5,
    q: String.raw`Une ville compte $24\,000$ habitants. $35\%$ ont moins de $25$ ans, et $40\%$ de ceux-ci sont aux études.
a) Combien de personnes de moins de $25$ ans sont aux études?
b) Quel pourcentage de toute la ville représentent-elles?
c) Si le groupe des moins de $25$ ans augmente de $10\%$ et que le reste de la ville ne change pas, quel pourcentage de la ville a moins de $25$ ans?`,
    recap: "Ville de 24 000 : 35 % ont moins de 25 ans; 40 % de ceux-ci aux études.",
    ans: String.raw`a) $3360$ b) $14\%$ c) $9240\div24\,840\approx37.2\%$.` },
  { level: 3, space: 5.5,
    q: String.raw`Un bac de $12$ L de boisson contient $25\%$ de jus.
a) Combien de litres de jus contient-il?
b) Quelle quantité d'eau faut-il ajouter pour qu'il contienne $15\%$ de jus?
c) Plutôt, quelle quantité de jus pur faut-il ajouter pour qu'il contienne $40\%$ de jus?
d) Pourquoi la quantité de jus reste-t-elle fixe en b), mais pas en c)?`,
    ans: String.raw`a) $3$ L b) $3\div0.15=20$ L au total : ajoute $8$ L c) $\dfrac{3+j}{12+j}=0.4$ donne $j=3$ L d) en b), on n'ajoute que de l'eau; en c), le jus et le total changent tous les deux.` },
];
