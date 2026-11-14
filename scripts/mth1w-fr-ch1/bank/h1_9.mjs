// 1.9 Taux, pourcentages et variation en pourcentage — 20 questions difficiles
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { graph, percentBar } from "./svg.mjs";
import { TITLE } from "../l1_9.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(String.raw`Le graphique montre la distance parcourue par une voiture à vitesse constante. À cette vitesse, combien d'heures faut-il pour parcourir $595$ km?`, 7,
    String.raw`Vitesse $=170\div2=85$ km/h; $595\div85=7$ h.`, graph({ series: [{ pts: [[0, 0], [2, 170], [4, 340]] }], xmin: 0, xmax: 5, ymin: 0, ymax: 400, xstep: 1, ystep: 50, xlabel: "temps (h)", ylabel: "distance (km)" })),
  mc(String.raw`Quel format de jus est le meilleur achat?`, "2.5 L pour 5.39 dollars", ["750 mL pour 1.89 dollar", "1.5 L pour 3.49 dollars", "Ils coûtent tous le même prix par litre"], String.raw`Par litre : $2.52$, $\approx2.33$, $\approx2.16$ dollars.`),
  num(String.raw`Après une augmentation de $20\%$, un prix est de $54$ dollars. Quel était le prix initial, en dollars?`, 45, String.raw`$1.2p=54$, $p=45$.`),
  num(String.raw`Un manteau de $120$ dollars est à $15\%$ de rabais, puis on ajoute la TVH de $13\%$. Trouve le prix final, en dollars.`, 115.26, String.raw`$120\times0.85\times1.13=115.26$.`, undefined, 0.006),
  ms(String.raw`Lesquels sont égaux à $12.5\%$? Sélectionne-les tous.`, [String.raw`$\frac18$`, "$0.125$", String.raw`$\frac{12.5}{100}$`, String.raw`$\frac{1}{12.5}$`, "$0.0125$"], [0, 1, 2], String.raw`$12.5\%=0.125=\frac18$. $\frac1{12.5}=0.08$.`),
  num(String.raw`Un bac de $8$ L de solution contient $35\%$ d'acide. Combien de litres d'eau faut-il ajouter pour qu'il contienne $20\%$ d'acide?`, 6, String.raw`Acide : $0.35\times8=2.8$ L. Nouveau total : $2.8\div0.2=14$ L. Ajoute $6$ L.`, undefined, 0.001),
  tf(String.raw`Une augmentation de $50\%$ suivie d'une diminution de $50\%$ ramène un prix à sa valeur initiale.`, false, String.raw`$1.5\times0.5=0.75$ : le prix finit $25\%$ plus bas.`),
  num(String.raw`La barre montre le pourcentage des $240$ élèves qui prennent l'autobus. Combien d'élèves prennent l'autobus?`, 84, String.raw`$35\%$ de $240=0.35\times240=84$.`, percentBar({ pct: 35, leftLabel: "autobus : 35 %", rightLabel: "240 élèves" })),
  num(String.raw`Trouve l'augmentation en pourcentage de $64$ à $80$. (Donne le nombre de pour cent.)`, 25, String.raw`$\frac{80-64}{64}=\frac{16}{64}=25\%$.`),
  num(String.raw`Un prix monte de $10\%$, monte encore de $10\%$, puis baisse de $20\%$. Quelle est la variation globale en pourcentage? Utilise un nombre négatif pour une diminution.`, -3.2, String.raw`$1.1\times1.1\times0.8=0.968$, soit une diminution de $3.2\%$.`, undefined, 0.01),
  mc(String.raw`Lequel est le plus rapide?`, "75 km/h", ["42 km en 35 min", "1.1 km par minute", "20 m/s"], String.raw`En km/min : $1.2$, $1.25$, $1.1$, $1.2$. $75$ km/h $=1.25$ km/min est le plus rapide.`),
  num(String.raw`Après deux augmentations de $10\%$ chacune, un salaire est de $60\,500$ dollars. Quel était-il avant les augmentations?`, 50000, String.raw`$1.1\times1.1=1.21$; $60\,500\div1.21=50\,000$.`),
  num(String.raw`Un réservoir plein de $1500$ L se vide à $37.5$ L/min. Après combien de minutes est-il rempli à $25\%$?`, 30, String.raw`Il doit perdre $75\%$ de $1500=1125$ L; $1125\div37.5=30$ min.`),
  tf(String.raw`Pour annuler une diminution de $20\%$, un prix doit augmenter de $25\%$.`, true, String.raw`$0.8\times1.25=1$. La hausse est un pourcentage plus grand, car elle est calculée sur un montant plus petit.`),
  num(String.raw`Si $1$ dollar canadien $=0.73$ dollar américain, combien de dollars canadiens équivalent à $250$ dollars américains? (Arrondis au cent.)`, 342.47, String.raw`$250\div0.73\approx342.47$.`, undefined, 0.006),
  mc(String.raw`Un prix, TVH de $13\%$ comprise, est de $90.40$ dollars. Quel était le prix avant la taxe?`, "80 dollars", ["78.65 dollars", "77.40 dollars", "102.15 dollars"], String.raw`$1.13p=90.40$, $p=80$. (Soustraire $13\%$ de $90.40$ donne la mauvaise réponse $78.65$.)`),
  num(String.raw`Une coureuse parcourt $400$ m en $64$ s. Quelle est sa vitesse moyenne en km/h?`, 22.5, String.raw`$400\div64=6.25$ m/s; $6.25\times3.6=22.5$ km/h.`, undefined, 0.001),
  ms(String.raw`Quels énoncés sont vrais? Sélectionne-les tous.`, [String.raw`$150\%$ de $40$ donne $60$`, String.raw`$40$ représente $80\%$ de $50$`, String.raw`passer de $50$ à $40$ est une diminution de $25\%$`, String.raw`$\frac14\%=0.0025$`, String.raw`doubler un prix est une augmentation de $200\%$`], [0, 1, 3], String.raw`$50\to40$ est une diminution de $20\%$; doubler est une augmentation de $100\%$.`),
  num(String.raw`Un article est à $30\%$ de rabais, et on ajoute la TVH de $13\%$. Le prix final est de $110.74$ dollars. Quel était le prix initial, en dollars?`, 140, String.raw`$110.74\div1.13=98$, et $98\div0.7=140$.`, undefined, 0.01),
  num(String.raw`Le graphique montre le niveau d'eau d'un réservoir qu'on vide. Quel est le taux de variation du niveau, en cm par minute?`, -3,
    String.raw`$\frac{60-90}{10-0}=-3$ cm/min.`, graph({ series: [{ pts: [[0, 90], [5, 75], [10, 60]] }], xmin: 0, xmax: 12, ymin: 0, ymax: 100, xstep: 2, ystep: 10, xlabel: "temps (min)", ylabel: "niveau (cm)" })),
];
