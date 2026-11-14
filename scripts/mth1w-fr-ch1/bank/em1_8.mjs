// 1.8 Travailler avec des rapports et des proportions — 20 questions faciles + 20 moyennes
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { tape, doubleLine } from "./svg.mjs";

// accepted typed forms: the English ones (a:b, a : b, a to b) plus the French « a pour b »
const R = (a, b) => [`${a}:${b}`, `${a} : ${b}`, `${a} to ${b}`, `${a} pour ${b}`];

export const E = [
  fill(String.raw`Écris $10:15$ sous sa forme la plus simple : ___`, R(2, 3), "Divise les deux termes par 5."),
  fill(String.raw`Écris $24:8$ sous sa forme la plus simple : ___`, R(3, 1), "Divise les deux termes par 8."),
  mc(String.raw`Une boîte contient $4$ stylos rouges et $7$ stylos bleus. Quel est le rapport des rouges aux bleus?`, "$4:7$", ["$7:4$", "$4:11$", "$7:11$"], "L'ordre compte : les rouges d'abord."),
  mc(String.raw`Une boîte contient $4$ stylos rouges et $7$ stylos bleus. Quel est le rapport des stylos rouges à l'ensemble des stylos?`, "$4:11$", ["$4:7$", "$7:11$", "$11:4$"], String.raw`Total $=11$.`),
  tf(String.raw`$3:5$ et $6:10$ sont des rapports équivalents.`, true, "Multiplie les deux termes par 2."),
  tf(String.raw`$2:3$ et $3:4$ sont des rapports équivalents.`, false, String.raw`$\frac23\neq\frac34$.`),
  num(String.raw`Résous $\frac{x}{8}=\frac{3}{4}$.`, 6, String.raw`$4\times2=8$, donc $x=3\times2=6$.`),
  num(String.raw`Résous $5:2=x:10$.`, 25, "Facteur d'échelle 5."),
  ms(String.raw`Quels rapports sont équivalents à $1:4$? Sélectionne-les tous.`, ["$2:8$", "$3:12$", "$4:1$", "$5:20$"], [0, 1, 3], String.raw`$4:1$ est inversé.`),
  num(String.raw`Partage $30$ selon le rapport $1:2$. Quelle est la plus grande part?`, 20, String.raw`$3$ parties de $10$.`),
  mc(String.raw`Une recette demande $2$ œufs pour $3$ tasses de farine. Combien d'œufs faut-il pour $9$ tasses?`, "$6$", ["$5$", "$4$", "$8$"], "Facteur d'échelle 3."),
  num(String.raw`Sur une carte, $1$ cm représente $5$ km. Deux villes sont à $4$ cm l'une de l'autre. Combien de km cela représente-t-il?`, 20, String.raw`$4\times5=20$.`),
  fill(String.raw`Écris $0.5:2$ sous sa forme la plus simple avec des nombres entiers : ___`, R(1, 4), String.raw`$\times2$ : $1:4$.`),
  num(String.raw`Le diagramme à bandes montre un rapport des garçons aux filles. S'il y a $12$ garçons, combien y a-t-il de filles?`, 20, String.raw`$3$ parties $=12$, donc une partie vaut $4$; filles $=5\times4=20$.`, tape([{ n: 3, label: "garçons", color: "blue" }, { n: 5, label: "filles", color: "amber" }], { unit: 40 })),
  tf("Un rapport qui compare deux parties peut s'écrire sous forme de fraction.", true, String.raw`$3:5$ peut s'écrire $\frac35$ (partie à partie).`),
  num(String.raw`Résous $\frac{2}{7}=\frac{10}{x}$.`, 35, "Facteur d'échelle 5."),
  mc(String.raw`Simplifie $18:12:6$.`, "$3:2:1$", ["$9:6:3$", "$6:4:2$", "$1:2:3$"], "Divise chaque terme par 6."),
  num(String.raw`Un punch contient $1$ partie de jus pour $3$ parties de boisson gazeuse. Combien de litres de boisson gazeuse vont avec $2$ L de jus?`, 6, "Facteur d'échelle 2."),
  fill(String.raw`Écris $50$ cm $:2$ m sous sa forme la plus simple : ___`, R(1, 4), String.raw`$50:200=1:4$ (d'abord les mêmes unités).`),
  mc("Quel rapport est sous sa forme la plus simple?", "$5:9$", ["$6:9$", "$4:10$", "$12:8$"], String.raw`$5$ et $9$ n'ont aucun facteur commun autre que $1$.`),
];

export const M = [
  num(String.raw`Résous $\frac{9}{x}=\frac{6}{10}$.`, 15, String.raw`$6x=90$.`),
  num(String.raw`Résous $\frac{x}{14}=\frac{5}{8}$. Donne un décimal.`, 8.75, String.raw`$8x=70$.`, undefined, 0.001),
  fill(String.raw`Écris $\frac23:\frac56$ sous sa forme la plus simple avec des nombres entiers : ___`, R(4, 5), "Multiplie les deux termes par 6."),
  fill(String.raw`Écris $1.2:0.9$ sous sa forme la plus simple avec des nombres entiers : ___`, R(4, 3), String.raw`$12:9=4:3$.`),
  num(String.raw`Partage $420$ dollars selon le rapport $3:4$. Quelle est la plus petite part, en dollars?`, 180, String.raw`$7$ parties de $60$.`),
  num(String.raw`Partage $360$ selon le rapport $1:3:5$. Quelle est la plus grande part?`, 200, String.raw`$9$ parties de $40$.`),
  num(String.raw`Le rapport des chats aux chiens est $3:4$, et il y a $24$ chiens. Combien y a-t-il de chats?`, 18, String.raw`Une partie $=6$.`),
  num(String.raw`L'échelle d'une carte est $1:25\,000$. Deux points sont à $8$ cm l'un de l'autre sur la carte. Combien de km les séparent?`, 2, String.raw`$8\times25\,000=200\,000$ cm $=2$ km.`),
  num(String.raw`Utilise la double droite numérique : combien de km la voiture parcourt-elle avec $10$ L de carburant?`, 125, String.raw`$25$ km pour $2$ L; $10$ L donnent donc $5\times25=125$ km.`, doubleLine(2, 25, 5, { top: "carburant (L)", bottom: "distance (km)", blank: { bottom: 5 } })),
  tf(String.raw`Si le rapport des billes rouges aux bleues est $2:3$, alors les $\frac25$ des billes sont rouges.`, true, String.raw`Partie au tout : $2$ sur $2+3=5$.`),
  mc(String.raw`Un mélange de béton contient ciment : sable $=1:3$. Quelle quantité de ciment y a-t-il dans $20$ kg du mélange?`, "$5$ kg", ["$6.7$ kg", "$15$ kg", "$4$ kg"], String.raw`$4$ parties de $5$ kg.`),
  ms(String.raw`Quelles paires forment une proportion? Sélectionne-les toutes.`, [String.raw`$\frac{3}{4},\ \frac{12}{16}$`, String.raw`$\frac{5}{6},\ \frac{15}{20}$`, String.raw`$\frac{2}{9},\ \frac{8}{36}$`, String.raw`$\frac{7}{3},\ \frac{21}{9}$`], [0, 2, 3], String.raw`$\frac56\neq\frac{15}{20}=\frac34$.`),
  num(String.raw`Une photo de $8$ cm de large et de $10$ cm de haut est agrandie à $20$ cm de large. Quelle est sa hauteur maintenant, en cm?`, 25, "Facteur d'échelle 2.5."),
  num(String.raw`Deux nombres sont dans le rapport $2:7$ et leur somme est $63$. Quel est le plus grand nombre?`, 49, String.raw`$9$ parties de $7$.`),
  mc(String.raw`Quelle recette donne la limonade la plus forte (le plus de citron par quantité d'eau)?`, String.raw`$3$ citron : $8$ eau`, [String.raw`$2$ citron : $7$ eau`, String.raw`$1$ citron : $4$ eau`, String.raw`$4$ citron : $15$ eau`], String.raw`Citron par eau : $0.375$, $0.286$, $0.25$, $0.267$.`),
  num(String.raw`Une voiture miniature est construite à l'échelle $1:18$. La vraie voiture mesure $4.5$ m de long. Quelle est la longueur de la miniature, en cm?`, 25, String.raw`$450\div18=25$ cm.`),
  fill(String.raw`Simplifie $45:75:30$ : ___`, ["3:5:2", "3 : 5 : 2"], "Divise chaque terme par 15."),
  tf("Multiplier les deux termes d'un rapport par le même nombre donne un rapport équivalent.", true, "La comparaison reste la même."),
  num(String.raw`Dans une classe, le rapport des élèves qui ont un animal à ceux qui n'en ont pas est $5:3$. Il y a $32$ élèves. Combien ont un animal?`, 20, String.raw`$8$ parties de $4$.`),
  num(String.raw`Un diagramme à bandes montre $A:B=4:5$, et $B$ vaut $15$. Que vaut $A$?`, 12, String.raw`Une partie $=3$; $A=4\times3=12$.`, tape([{ n: 4, label: "A", color: "blue" }, { n: 5, label: "B = 15", color: "amber" }], { unit: 40 })),
];
