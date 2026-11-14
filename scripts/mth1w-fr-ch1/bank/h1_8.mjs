// 1.8 Travailler avec des rapports et des proportions — 20 questions difficiles
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { doubleLine, tape, numberLine } from "./svg.mjs";
import { TITLE } from "../l1_8.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(String.raw`Une pâte à crêpes contient de la farine et du lait selon le rapport illustré par la double droite numérique. Combien de tasses de lait vont avec $10.5$ tasses de farine?`, 7,
    String.raw`Le rapport est $3:2$. $10.5\div3=3.5$, donc lait $=2\times3.5=7$ tasses.`, doubleLine(3, 2, 4, { top: "farine (tasses)", bottom: "lait (tasses)" })),
  mc(String.raw`$A:B=3:4$ et $B:C=6:7$. Que vaut $A:C$?`, "$9:14$", ["$3:7$", "$18:7$", "$9:12$"], String.raw`Mets à l'échelle : $A:B=9:12$ et $B:C=12:14$. Donc $A:C=9:14$.`),
  num(String.raw`Le rapport des garçons aux filles d'une école est $4:5$, et il y a $12$ filles de plus que de garçons. Combien d'élèves y a-t-il?`, 108, String.raw`La différence correspond à $1$ partie $=12$; le total de $9$ parties vaut $108$.`),
  fill(String.raw`Écris $2\frac12:3\frac34$ sous sa forme la plus simple avec des nombres entiers : ___`, ["2:3", "2 : 3"], String.raw`$\frac52:\frac{15}{4}$; multiplie par $4$ : $10:15=2:3$.`),
  ms(String.raw`Quels rapports sont équivalents à $0.8:2$? Sélectionne-les tous.`, ["$2:5$", "$4:10$", "$8:20$", "$0.4:1$", "$5:2$", "$1:2.5$"], [0, 1, 2, 3, 5], String.raw`$0.8:2=8:20=2:5$; $1:2.5=2:5$. $5:2$ est inversé.`),
  num(String.raw`L'échelle d'une carte est $1:40\,000$. Deux écoles sont à $3.2$ km l'une de l'autre. Combien de centimètres les séparent sur la carte?`, 8, String.raw`$3.2$ km $=320\,000$ cm; $320\,000\div40\,000=8$ cm.`),
  mc(String.raw`La peinture A contient $3$ parties de rouge pour $5$ parties de blanc; la peinture B contient $4$ parties de rouge pour $7$ parties de blanc. Laquelle est la plus rouge?`, "A", ["B", "Elles sont pareilles", "Impossible à déterminer"], String.raw`Fraction de rouge : A $\frac38=0.375$, B $\frac4{11}\approx0.364$.`),
  num(String.raw`Trois amis se partagent $600$ dollars selon le rapport $\frac12:\frac13:\frac16$. Combien de dollars vaut la plus grande part?`, 300, String.raw`Multiplie par $6$ : $3:2:1$; $6$ parties de $100$; la plus grande vaut $300$.`),
  tf(String.raw`Si $a:b=c:d$ (tous positifs), alors $(a+b):b=(c+d):d$.`, true, String.raw`$\frac{a+b}{b}=\frac ab+1=\frac cd+1=\frac{c+d}{d}$.`),
  num(String.raw`Les angles d'un quadrilatère sont dans le rapport $2:3:3:4$. Trouve le plus grand angle, en degrés.`, 120, String.raw`$360\div12=30$ par partie; $4\times30=120$.`),
  num(String.raw`Dans le diagramme à bandes, A et B sont dans le rapport $3:5$, et B vaut $24$ de plus que A. Que vaut A $+$ B?`, 96,
    String.raw`B $-$ A correspond à $2$ parties $=24$, donc $1$ partie $=12$; le total de $8$ parties vaut $96$.`, tape([{ n: 3, label: "A", color: "blue" }, { n: 5, label: "B", color: "amber" }], { unit: 44, total: "B vaut 24 de plus que A" })),
  fill(String.raw`Résous $(x+2):5=3:4$. ___`, ["7/4", "1.75", "1 3/4"], String.raw`$4(x+2)=15$, $x+2=3.75$, $x=1.75$.`),
  num(String.raw`Une maquette d'avion est construite à l'échelle $1:72$. L'aile de la maquette a une aire de $150$ cm$^2$. Quelle est l'aire réelle de l'aile, en m$^2$?`, 77.76, String.raw`Échelle des aires : $72^2=5184$. $150\times5184=777\,600$ cm$^2=77.76$ m$^2$.`, undefined, 0.01),
  tf(String.raw`Additionner le même nombre aux deux termes d'un rapport donne un rapport équivalent.`, false, String.raw`$1:2$ n'est pas équivalent à $2:3$ (on ajoute $1$). Seules la multiplication et la division conservent un rapport équivalent.`),
  num(String.raw`Un mélange de $15$ L d'huile et de vinaigre est dans le rapport $3:2$. Combien de litres d'huile faut-il ajouter pour obtenir le rapport $3:1$?`, 9, String.raw`Au départ : $9$ L d'huile et $6$ L de vinaigre. Pour $3:1$ avec $6$ L de vinaigre, il faut $18$ L d'huile. Ajoute $9$ L.`),
  num(String.raw`Les côtés d'un rectangle sont dans le rapport $3:5$ et son périmètre est de $64$ cm. Quelle est son aire, en cm$^2$?`, 240, String.raw`Côtés $3k$ et $5k$ : $16k=64$, $k=4$; $12\times20=240$.`),
  ms(String.raw`Quelles situations sont proportionnelles (doubler une quantité double l'autre)? Sélectionne-les toutes.`, ["le coût de pommes à 2.50 dollars le kg", "un taxi à 3.50 dollars plus 1.75 dollar par km", "les ingrédients d'une recette mise à l'échelle", "un forfait de téléphone de 40 dollars par mois, peu importe les données utilisées", "une longueur en cm comparée à la même longueur en m"], [0, 2, 4], String.raw`Des frais de départ fixes (taxi) ou un prix forfaitaire (téléphone) brisent la proportionnalité.`),
  num(String.raw`$A:B=2:3$ et $B:C=4:5$. Si $C=45$, que vaut $A$?`, 24, String.raw`Fais correspondre $B$ : $A:B=8:12$, $B:C=12:15$, donc $A:C=8:15$. $C=45$ donne $A=24$.`),
  num(String.raw`Sur cette carte, l'échelle graphique indique $2$ cm $=5$ km. Deux villes sont à $9.2$ cm l'une de l'autre sur la carte. Combien de km les séparent?`, 23,
    String.raw`$9.2\div2=4.6$ segments; $4.6\times5=23$ km.`, numberLine({ min: 0, max: 8, step: 2, labels: ["0", "5 km", "10 km", "15 km", "20 km"] })),
  num(String.raw`Une boisson est préparée selon le rapport $1:4$ de concentré à eau, avec $2$ L de concentré. Combien de litres d'eau de plus faut-il ajouter pour obtenir le rapport $1:5$?`, 2, String.raw`Il y a maintenant $8$ L d'eau; pour $1:5$, il en faut $10$ L; ajoute donc $2$ L.`),
];
