// 1.9 Taux, pourcentages et variation en pourcentage — 20 questions faciles + 20 moyennes
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { graph, percentBar } from "./svg.mjs";

export const E = [
  num(String.raw`Trouve $10\%$ de $350$.`, 35, String.raw`$0.1\times350$.`),
  num(String.raw`Trouve $25\%$ de $80$.`, 20, String.raw`Le $\frac14$ de $80$.`),
  fill(String.raw`Écris $0.4$ sous forme de pourcentage : ___`, ["40%", "40", "40 %"], String.raw`$0.4\times100=40\%$.`),
  fill(String.raw`Écris $\frac{3}{5}$ sous forme de pourcentage : ___`, ["60%", "60", "60 %"], String.raw`$\frac35=0.6=60\%$.`),
  num(String.raw`Écris $8\%$ sous forme décimale.`, 0.08, String.raw`$8\div100$.`, undefined, 0.000001),
  num(String.raw`Une voiture parcourt $240$ km en $3$ h. Quelle est sa vitesse en km/h?`, 80, String.raw`$240\div3$.`),
  num(String.raw`$5$ pommes coûtent $3.50$ dollars. Quel est le prix d'une pomme, en dollars?`, 0.7, String.raw`$3.50\div5$.`, undefined, 0.001),
  mc("Lequel est un taux?", "60 km par heure", ["3 chats pour 5 chiens", "40 %", String.raw`les $\frac34$ d'une pizza`], "Un taux compare des quantités exprimées dans des unités différentes."),
  tf(String.raw`$150\%$ d'un nombre est plus grand que ce nombre.`, true, "150 %, c'est 1.5 fois le nombre."),
  num(String.raw`$9$ représente quel pourcentage de $36$?`, 25, String.raw`$\frac{9}{36}=0.25$.`),
  mc("Quel est le meilleur achat?", "2 kg pour 6 dollars", ["1 kg pour 3.50 dollars", "500 g pour 2 dollars", "Ils coûtent tous le même prix par kg"], "Par kg : 3.00, 3.50, 4.00."),
  num(String.raw`Une chemise coûte $40$ dollars et elle est à $20\%$ de rabais. Quel est le prix soldé, en dollars?`, 32, String.raw`$40\times0.8$.`),
  num(String.raw`Ajoute la TVH de $13\%$ à $100$ dollars. Quel est le total, en dollars?`, 113, String.raw`$100\times1.13$.`),
  num(String.raw`Quel pourcentage de la barre est ombré?`, 70, "7 des 10 sections.", percentBar({ pct: 70 })),
  tf(String.raw`Un taux de variation de $-5$ m par minute signifie que la hauteur diminue.`, true, "Un taux négatif signifie une diminution."),
  num(String.raw`Un robinet remplit un bac de $60$ L en $12$ minutes. Combien de litres par minute?`, 5, String.raw`$60\div12$.`),
  ms(String.raw`Lesquels sont égaux à $50\%$? Sélectionne-les tous.`, [String.raw`$\frac12$`, "$0.5$", String.raw`$\frac{5}{10}$`, "$0.05$"], [0, 1, 2], String.raw`$0.05=5\%$.`),
  num(String.raw`Le graphique montre la distance parcourue par une cycliste. Quelle est sa vitesse en km/h?`, 15, String.raw`$30$ km en $2$ h.`, graph({ series: [{ pts: [[0, 0], [1, 15], [2, 30]] }], xmin: 0, xmax: 3, ymin: 0, ymax: 50, xstep: 1, ystep: 10, xlabel: "temps (h)", ylabel: "km" })),
  num(String.raw`Un prix passe de $20$ dollars à $25$ dollars. Quelle est l'augmentation en pourcentage?`, 25, String.raw`$\frac{5}{20}=25\%$.`),
  fill(String.raw`Écris $1.25$ sous forme de pourcentage : ___`, ["125%", "125", "125 %"], "Multiplie par 100."),
];

export const M = [
  num(String.raw`$24$ représente $15\%$ de quel nombre?`, 160, String.raw`$0.15n=24$.`),
  num(String.raw`Une veste de $64$ dollars est à $25\%$ de rabais, puis on ajoute la TVH de $13\%$. Quel est le prix final, en dollars?`, 54.24, String.raw`$64\times0.75\times1.13=54.24$.`, undefined, 0.006),
  num(String.raw`Une population passe de $1250$ à $1000$. Quelle est la diminution en pourcentage?`, 20, String.raw`$\frac{250}{1250}=20\%$.`),
  mc("Lequel est le moins cher par 100 g?", "750 g pour 4.50 dollars", ["500 g pour 3.25 dollars", "250 g pour 1.75 dollar", "1 kg pour 6.20 dollars"], "Par 100 g : 0.60, 0.65, 0.70, 0.62."),
  num(String.raw`La température passe de $9\,^\circ$C à $-6\,^\circ$C en $5$ heures. Quel est le taux de variation en $^\circ$C par heure?`, -3, String.raw`$\frac{-6-9}{5}=-3$.`),
  num(String.raw`Une travailleuse gagne $18.50$ dollars l'heure. Combien gagne-t-elle pour $7.5$ heures, en dollars?`, 138.75, String.raw`$18.50\times7.5$.`, undefined, 0.006),
  tf(String.raw`Une augmentation de $20\%$ suivie d'une diminution de $20\%$ ramène au prix initial.`, false, String.raw`$1.2\times0.8=0.96$.`),
  num(String.raw`Après une augmentation de $12\%$, un salaire est de $28$ dollars l'heure. Quel était-il avant, en dollars?`, 25, String.raw`$1.12w=28$.`),
  fill(String.raw`Écris $\frac{7}{20}$ sous forme de pourcentage : ___`, ["35%", "35", "35 %"], String.raw`$\frac{35}{100}$.`),
  num(String.raw`Une imprimante imprime $45$ pages en $1.5$ minute. Combien de pages imprime-t-elle en $8$ minutes?`, 240, String.raw`$30$ pages par minute.`),
  mc(String.raw`Quel multiplicateur augmente un prix de $7\%$?`, "$1.07$", ["$0.07$", "$1.7$", "$0.93$"], String.raw`$100\%+7\%=107\%$.`),
  num(String.raw`Le graphique montre le niveau d'eau d'une piscine qu'on vide. Quel est le taux de variation en cm par heure?`, -4, String.raw`$\frac{80-100}{5}=-4$.`, graph({ series: [{ pts: [[0, 100], [5, 80], [10, 60]] }], xmin: 0, xmax: 12, ymin: 0, ymax: 110, xstep: 2, ystep: 10, xlabel: "heures", ylabel: "cm" })),
  ms("Lesquels sont vrais? Sélectionne-les tous.", [String.raw`$40\%$ de $90$ donne $36$`, String.raw`$12$ représente $30\%$ de $40$`, String.raw`$0.5\%=0.5$`, String.raw`$200\%$ de $15$ donne $30$`], [0, 1, 3], String.raw`$0.5\%=0.005$.`),
  num(String.raw`Un magasin majore de $40\%$ un article de $30$ dollars. Quel est le prix de vente, en dollars?`, 42, String.raw`$30\times1.4$.`),
  num(String.raw`Quel pourcentage des élèves de la barre se rendent à l'école à pied?`, 45, "4.5 des 10 sections sont ombrées.", percentBar({ pct: 45, leftLabel: "à pied", rightLabel: "tous les élèves" })),
  num(String.raw`Une voiture consomme $7$ L de carburant aux $100$ km. Combien de carburant lui faut-il pour $350$ km, en litres?`, 24.5, String.raw`$7\times3.5$.`, undefined, 0.001),
  mc(String.raw`Un jeu de $90$ dollars est en solde à $72$ dollars. Quel est le rabais en pourcentage?`, "$20\\%$", ["$18\\%$", "$25\\%$", "$80\\%$"], String.raw`$\frac{18}{90}=20\%$.`),
  num(String.raw`Une ville de $8000$ habitants croît de $5\%$ par année. Quelle est sa population après un an?`, 8400, String.raw`$8000\times1.05$.`),
  tf(String.raw`Pour trouver le prix initial après un rabais de $25\%$, on divise le prix soldé par $0.75$.`, true, String.raw`soldé $=0.75\times$initial.`),
  num(String.raw`Une coureuse parcourt $5$ km en $25$ minutes. Quelle est sa vitesse en km/h?`, 12, String.raw`$5$ km en $\frac{5}{12}$ h $=12$ km/h.`),
];
