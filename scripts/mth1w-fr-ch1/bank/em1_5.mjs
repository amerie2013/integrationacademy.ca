// 1.5 Fractions : multiplication, division et inverses — 20 questions faciles + 20 moyennes
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { areaModel, tape } from "./svg.mjs";

export const E = [
  fill(String.raw`Évalue $\frac23\times\frac45$ : ___`, ["8/15"], "Multiplie les numérateurs et les dénominateurs."),
  fill(String.raw`Évalue $\frac35\times\frac{5}{6}$ sous forme de fraction irréductible : ___`, ["1/2"], String.raw`$\frac{15}{30}=\frac12$.`),
  num(String.raw`Trouve le $\frac14$ de $48$.`, 12, String.raw`$48\div4$.`),
  num(String.raw`Trouve les $\frac23$ de $27$.`, 18, String.raw`$27\div3\times2$.`),
  fill(String.raw`Écris l'inverse de $\frac58$ : ___`, ["8/5"], "Renverse la fraction."),
  mc(String.raw`Quel est l'inverse de $-3$?`, String.raw`$-\frac13$`, [String.raw`$\frac13$`, "$3$", "$-3$"], "L'inverse garde le même signe."),
  fill(String.raw`Évalue $\frac12\div\frac14$ : ___`, ["2"], String.raw`$\frac12\times4=2$ : deux quarts entrent dans une demie.`),
  fill(String.raw`Évalue $\frac34\div\frac38$ : ___`, ["2"], String.raw`$\frac34\times\frac83=2$.`),
  tf(String.raw`$0$ a un inverse.`, false, "Aucun nombre multiplié par 0 ne donne 1."),
  mc("Quelle multiplication le modèle d'aire représente-t-il?", String.raw`$\frac12\times\frac23=\frac13$`, [String.raw`$\frac12\times\frac23=\frac{3}{5}$`, String.raw`$\frac12+\frac23$`, String.raw`$\frac23\div\frac12$`], String.raw`Partie commune : $2$ sur $6$ $=\frac13$.`, areaModel(1, 2, 2, 3)),
  num(String.raw`Évalue $6\div\frac12$.`, 12, String.raw`Douze demies entrent dans 6.`),
  fill(String.raw`Évalue $-\frac12\times\frac34$ : ___`, ["-3/8", "−3/8"], "Signes contraires : négatif."),
  fill(String.raw`Évalue $\frac25\times10$ : ___`, ["4"], String.raw`$\frac{20}{5}=4$.`),
  tf(String.raw`Diviser par $\frac12$ revient à multiplier par $2$.`, true, String.raw`L'inverse de $\frac12$ est $2$.`),
  mc(String.raw`Quel est l'inverse de $1\frac12$?`, String.raw`$\frac23$`, [String.raw`$\frac32$`, String.raw`$1\frac21$`, String.raw`$-\frac23$`], String.raw`$1\frac12=\frac32$; renverse-la.`),
  num(String.raw`Combien de mesures de $\frac13$ de tasse y a-t-il dans $4$ tasses?`, 12, String.raw`$4\div\frac13=12$.`),
  fill(String.raw`Évalue $\frac{4}{9}\times\frac{3}{8}$ sous forme de fraction irréductible : ___`, ["1/6"], String.raw`Simplifie d'abord : $\frac{1}{3}\times\frac12$.`),
  ms(String.raw`Quels produits sont inférieurs à $\frac12$? Sélectionne-les tous.`, [String.raw`$\frac12\times\frac12$`, String.raw`$\frac12\times2$`, String.raw`$\frac12\times\frac34$`, String.raw`$\frac12\times1$`], [0, 2], "Multiplier par un nombre inférieur à 1 donne un résultat plus petit."),
  num(String.raw`Une corde est coupée en morceaux de $\frac34$ m. Combien de morceaux obtient-on avec $6$ m?`, 8, String.raw`$6\div\frac34=8$.`, tape([{ n: 8, label: "8 morceaux de 3/4 m", color: "blue" }], { unit: 40, total: "6 m" })),
  fill(String.raw`Évalue $-\frac23\div\frac13$ : ___`, ["-2", "−2"], String.raw`$-\frac23\times3=-2$.`),
];

export const M = [
  fill(String.raw`Évalue $1\frac12\times2\frac13$. Donne un nombre fractionnaire : ___`, ["3 1/2", "7/2"], String.raw`$\frac32\times\frac73=\frac72$.`),
  fill(String.raw`Évalue $3\frac34\div1\frac14$ : ___`, ["3"], String.raw`$\frac{15}{4}\times\frac45=3$.`),
  fill(String.raw`Évalue $-\frac{5}{6}\times\left(-\frac{9}{10}\right)$ : ___`, ["3/4"], "Même signe : positif; simplifie 5/10 et 9/6."),
  fill(String.raw`Évalue $\frac{7}{12}\div\left(-\frac{14}{9}\right)$ : ___`, ["-3/8", "−3/8"], String.raw`$\frac{7}{12}\times\left(-\frac{9}{14}\right)=-\frac38$.`),
  num(String.raw`Une recette demande $\frac23$ de tasse de lait par fournée. Quelle quantité de lait faut-il pour $4\frac12$ fournées?`, 3, String.raw`$\frac23\times\frac92=3$ tasses.`),
  num(String.raw`Combien de verres de $\frac38$ L peut-on remplir avec $3$ L?`, 8, String.raw`$3\div\frac38=8$.`),
  mc(String.raw`Évalue $\frac35\div\frac{9}{10}$.`, String.raw`$\frac23$`, [String.raw`$\frac{27}{50}$`, String.raw`$\frac32$`, String.raw`$\frac{3}{10}$`], String.raw`$\frac35\times\frac{10}{9}=\frac{30}{45}=\frac23$.`),
  tf(String.raw`$\frac23\div\frac34$ est plus grand que $\frac23$.`, true, String.raw`Diviser par un nombre inférieur à $1$ donne un résultat plus grand : $\frac23\div\frac34=\frac23\times\frac43=\frac89$, et $\frac89>\frac23$.`),
  num(String.raw`Trouve les $\frac34$ des $\frac23$ de $60$.`, 30, String.raw`$\frac23\times60=40$; $\frac34\times40=30$.`),
  fill(String.raw`Écris l'inverse de $-2\frac25$ : ___`, ["-5/12", "−5/12"], String.raw`$-\frac{12}{5}\to-\frac{5}{12}$.`),
  mc("Le modèle d'aire représente un produit. Lequel?", String.raw`$\frac{6}{20}=\frac{3}{10}$`, [String.raw`$\frac{2}{9}$`, String.raw`$\frac{5}{9}$`, String.raw`$\frac{3}{20}$`], String.raw`$\frac34\times\frac25$ : partie commune de $6$ sur $20$.`, areaModel(3, 4, 2, 5)),
  num(String.raw`Un rectangle mesure $2\frac12$ m sur $1\frac35$ m. Trouve son aire en m$^2$.`, 4, String.raw`$\frac52\times\frac85=4$.`),
  ms(String.raw`Quelles expressions sont égales à $\frac12$? Sélectionne-les toutes.`, [String.raw`$\frac34\times\frac23$`, String.raw`$\frac14\div\frac12$`, String.raw`$\frac38\div\frac34$`, String.raw`$2\times\frac14$`, String.raw`$\frac12\div2$`], [0, 1, 2, 3], String.raw`$\frac12\div2=\frac14$.`),
  num(String.raw`Un réservoir contient $40$ L lorsqu'il est plein. Il est rempli aux $\frac58$. Combien de litres contient-il?`, 25, String.raw`$\frac58\times40=25$.`),
  fill(String.raw`Évalue $\frac12+\frac34\times\frac23$ : ___`, ["1"], String.raw`Multiplie d'abord : $\frac12$; puis $\frac12+\frac12=1$.`),
  num(String.raw`Une voiture parcourt $3\frac34$ km en $\frac14$ d'heure. Quelle est sa vitesse en km/h?`, 15, String.raw`$\frac{15}{4}\div\frac14=15$.`),
  mc(String.raw`Lequel est le plus grand?`, String.raw`$5\div\frac14$`, [String.raw`$5\times\frac14$`, String.raw`$5\div4$`, String.raw`$\frac14\div5$`], String.raw`$20$, $1.25$, $1.25$, $0.05$.`),
  fill(String.raw`Évalue $\left(-\frac32\right)\times\left(-\frac32\right)$. Donne un nombre fractionnaire : ___`, ["2 1/4", "9/4"], String.raw`$\frac94$.`),
  num(String.raw`Une planche de $2\frac14$ m est coupée en $3$ morceaux égaux. Quelle est la longueur de chaque morceau, en mètres? Donne un décimal.`, 0.75, String.raw`$\frac94\div3=\frac34=0.75$.`, undefined, 0.001),
  tf(String.raw`On peut multiplier des nombres fractionnaires en multipliant séparément les parties entières et les parties fractionnaires.`, false, String.raw`$1\frac12\times1\frac12=2\frac14$, et non $1\frac14$. Convertis en fractions impropres.`),
];
