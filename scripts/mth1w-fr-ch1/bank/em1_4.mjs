// 1.4 Fractions : équivalence, comparaison, addition et soustraction — 20 questions faciles + 20 moyennes
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, bars } from "./svg.mjs";

export const E = [
  fill(String.raw`Écris $\frac{12}{16}$ sous forme de fraction irréductible : ___`, ["3/4"], String.raw`Divise par $4$.`),
  fill(String.raw`Complète : $\frac{2}{5}=\frac{\_\_\_}{20}$`, ["8"], String.raw`$5\times4=20$, donc $2\times4=8$.`),
  mc(String.raw`Quelle fraction est équivalente à $\frac34$?`, String.raw`$\frac{9}{12}$`, [String.raw`$\frac{6}{12}$`, String.raw`$\frac{4}{3}$`, String.raw`$\frac{7}{8}$`], String.raw`$\frac{3\times3}{4\times3}=\frac{9}{12}$.`),
  fill(String.raw`Évalue $\frac{2}{9}+\frac{5}{9}$ : ___`, ["7/9"], "Même dénominateur : additionne les numérateurs."),
  fill(String.raw`Évalue $\frac{7}{10}-\frac{3}{10}$ sous forme de fraction irréductible : ___`, ["2/5"], String.raw`$\frac{4}{10}=\frac25$.`),
  mc(String.raw`Laquelle est la plus grande : $\frac23$ ou $\frac35$?`, String.raw`$\frac23$`, [String.raw`$\frac35$`, "Elles sont égales", "Impossible à dire"], String.raw`$\frac{10}{15}>\frac{9}{15}$.`),
  fill(String.raw`Écris $2\frac14$ sous forme de fraction impropre : ___`, ["9/4"], String.raw`$\frac{2\times4+1}{4}$.`),
  fill(String.raw`Écris $\frac{11}{3}$ sous forme de nombre fractionnaire : ___`, ["3 2/3"], String.raw`$11\div3=3$, reste $2$.`),
  mc("Quelle fraction de la barre est ombrée?", String.raw`$\frac38$`, [String.raw`$\frac58$`, String.raw`$\frac35$`, String.raw`$\frac83$`], "3 parties égales sur 8.", bars([{ n: 3, d: 8, label: "" }])),
  tf(String.raw`$\frac12+\frac13=\frac25$`, false, String.raw`$\frac36+\frac26=\frac56$; n'additionne jamais les dénominateurs.`),
  fill(String.raw`Évalue $\frac12+\frac14$ : ___`, ["3/4"], String.raw`$\frac24+\frac14=\frac34$.`),
  mc(String.raw`Quel est le plus petit commun dénominateur de $\frac16$ et de $\frac14$?`, "$12$", ["$24$", "$10$", "$4$"], "Le PPCM de 6 et de 4 est 12."),
  tf(String.raw`$-\frac35=\frac{-3}{5}$`, true, "Le signe négatif peut se placer devant la fraction ou au numérateur."),
  mc(String.raw`Quel point représente $\frac34$?`, "C", ["A", "B", "D"], "Trois des quatre parties égales de 0 à 1.", numberLine({ min: 0, max: 1, step: 0.25, labels: ["0", "", "", "", "1"], letters: [{ at: 0.25, label: "A" }, { at: 0.5, label: "B" }, { at: 0.75, label: "C" }, { at: 1, label: "D" }] })),
  fill(String.raw`Évalue $1-\frac38$ : ___`, ["5/8"], String.raw`$\frac88-\frac38=\frac58$.`),
  ms(String.raw`Quelles fractions sont égales à $\frac12$? Sélectionne-les toutes.`, [String.raw`$\frac{4}{8}$`, String.raw`$\frac{5}{10}$`, String.raw`$\frac{3}{5}$`, String.raw`$\frac{7}{14}$`], [0, 1, 3], String.raw`$\frac35$ dépasse la moitié.`),
  mc(String.raw`Laquelle est la plus petite : $-\frac14$ ou $-\frac34$?`, String.raw`$-\frac34$`, [String.raw`$-\frac14$`, "Elles sont égales", "Impossible à dire"], String.raw`$-\frac34$ est plus à gauche sur la droite numérique.`),
  num(String.raw`Évalue $\frac35+\frac25$.`, 1, String.raw`$\frac55=1$.`),
  fill(String.raw`Évalue $\frac56-\frac12$ sous forme de fraction irréductible : ___`, ["1/3"], String.raw`$\frac56-\frac36=\frac26=\frac13$.`),
  tf(String.raw`$\frac{6}{8}$ et $\frac{9}{12}$ sont équivalentes.`, true, String.raw`Les deux se simplifient en $\frac34$.`),
];

export const M = [
  fill(String.raw`Évalue $\frac23+\frac14$ : ___`, ["11/12"], String.raw`$\frac{8}{12}+\frac{3}{12}$.`),
  fill(String.raw`Évalue $\frac35-\frac34$ : ___`, ["-3/20", "−3/20"], String.raw`$\frac{12}{20}-\frac{15}{20}=-\frac{3}{20}$.`),
  fill(String.raw`Évalue $1\frac12+2\frac23$. Donne un nombre fractionnaire : ___`, ["4 1/6", "25/6"], String.raw`$3+\frac36+\frac46=3+\frac76=4\frac16$.`),
  fill(String.raw`Évalue $4\frac15-1\frac12$ : ___`, ["2 7/10", "27/10"], String.raw`$\frac{42}{10}-\frac{15}{10}=\frac{27}{10}$.`),
  mc(String.raw`Place dans l'ordre croissant : $\frac58,\ \frac23,\ \frac{7}{12}$.`, String.raw`$\frac{7}{12},\ \frac58,\ \frac23$`, [String.raw`$\frac58,\ \frac{7}{12},\ \frac23$`, String.raw`$\frac23,\ \frac58,\ \frac{7}{12}$`, String.raw`$\frac{7}{12},\ \frac23,\ \frac58$`], String.raw`PPCD 24 : $\frac{14}{24},\frac{15}{24},\frac{16}{24}$.`),
  fill(String.raw`Évalue $-\frac12+\frac56$ : ___`, ["1/3"], String.raw`$-\frac36+\frac56=\frac26=\frac13$.`),
  fill(String.raw`Écris $\frac{56}{84}$ sous forme de fraction irréductible : ___`, ["2/3"], "PGCD 28."),
  num(String.raw`Ali a $3\frac14$ tasses de farine et en utilise $1\frac34$ tasse. Combien de tasses reste-t-il? Donne un décimal.`, 1.5, String.raw`$\frac{13}{4}-\frac74=\frac64=1.5$.`, undefined, 0.001),
  mc("Les barres représentent deux fractions du même tout. Quelle est la différence (haut moins bas)?", String.raw`$\frac{1}{12}$`, [String.raw`$\frac{1}{7}$`, String.raw`$\frac{1}{1}$`, String.raw`$\frac{7}{12}$`], String.raw`$\frac34-\frac23=\frac{9}{12}-\frac{8}{12}=\frac1{12}$.`, bars([{ n: 3, d: 4, label: "haut" }, { n: 2, d: 3, label: "bas", color: "amber" }])),
  tf(String.raw`$-\frac25>-\frac12$`, true, String.raw`$-0.4>-0.5$.`),
  ms(String.raw`Lesquelles sont plus grandes que $\frac12$? Sélectionne-les toutes.`, [String.raw`$\frac{5}{9}$`, String.raw`$\frac{4}{9}$`, String.raw`$\frac{7}{13}$`, String.raw`$\frac{6}{13}$`, String.raw`$\frac{11}{20}$`], [0, 2, 4], "Compare le numérateur avec la moitié du dénominateur."),
  fill(String.raw`Évalue $\frac56-\frac13+\frac14$ : ___`, ["3/4"], String.raw`$\frac{10}{12}-\frac{4}{12}+\frac{3}{12}=\frac{9}{12}=\frac34$.`),
  num(String.raw`Un ruban mesure $5\frac12$ m. On en coupe deux morceaux de $1\frac34$ m. Combien de mètres reste-t-il? Donne un décimal.`, 2, String.raw`$5.5-3.5=2$.`),
  mc(String.raw`Quel nombre se trouve à mi-chemin entre $\frac14$ et $\frac34$?`, String.raw`$\frac12$`, [String.raw`$\frac38$`, String.raw`$\frac58$`, String.raw`$\frac13$`], String.raw`$\frac{\frac14+\frac34}{2}=\frac12$.`),
  fill(String.raw`Écris $-2\frac35$ sous forme de fraction impropre : ___`, ["-13/5", "−13/5"], String.raw`$-\frac{2\times5+3}{5}$.`),
  num(String.raw`Quelle fraction de la barre N'est PAS ombrée? Donne un décimal.`, 0.6, String.raw`$6$ parties sur $10$ : $0.6$.`, bars([{ n: 4, d: 10, label: "" }]), 0.001),
  mc(String.raw`Que faut-il ajouter à $\frac38$ pour obtenir $1$?`, String.raw`$\frac58$`, [String.raw`$\frac38$`, String.raw`$\frac68$`, String.raw`$\frac12$`], String.raw`$1-\frac38=\frac58$.`),
  tf(String.raw`Une fraction dont le numérateur est plus grand que le dénominateur est inférieure à $1$.`, false, "Elle est supérieure à 1 (c'est une fraction impropre)."),
  fill(String.raw`Évalue $2\frac13-3\frac12$ : ___`, ["-1 1/6", "-7/6", "−7/6"], String.raw`$\frac{14}{6}-\frac{21}{6}=-\frac76$.`),
  num(String.raw`En trois jours, un réservoir perd $\frac16$, $\frac14$ et $\frac13$ de son eau. Quelle fraction est perdue au total? Donne un décimal.`, 0.75, String.raw`$\frac{2}{12}+\frac{3}{12}+\frac{4}{12}=\frac{9}{12}=0.75$.`, undefined, 0.001),
];
