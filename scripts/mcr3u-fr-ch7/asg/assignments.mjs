// MCR3U-FR chapitre 7 — devoirs : 12 questions chacun — Connaissance et compréhension 1-3, Habiletés de la pensée 4-5,
// Communication 6-7, Mise en application 8-10, Niveau difficile 11-12. [[clé|légende]] est remplacé par une figure (SVG).
// Miroir de ../../mcr3u-ch7/asg/assignments.mjs (mêmes figures; titres d'axes en français).
import { dotsD, barsD, pascalD, gridD } from "../bank/fig.mjs";
import { asgId } from "../../mcr3u-fr/common.mjs";
import { TITLE as T1 } from "../l7_1.mjs";
import { TITLE as T2 } from "../l7_2.mjs";
import { TITLE as T3 } from "../l7_3.mjs";
import { TITLE as T4 } from "../l7_4.mjs";
import { TITLE as T5 } from "../l7_5.mjs";
import { TITLE as T6 } from "../l7_6.mjs";
import { TITLE as T7 } from "../l7_7.mjs";

const S = String.raw;
const dv = (t) => `Devoir ${t.replace(/^(\d\.\d) /, "$1 — ")}`;
const arr = (a, d, n) => Array.from({ length: n }, (_, i) => a + i * d);
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);

export const ASSIGNMENTS = [
  { code: "7.1", id: asgId(7, 1), title: dv(T1), figs: {
      g: dotsD(arr(-6, 5, 6), { labels: true }),
      s: dotsD(arr(48, -3.5, 7), { labels: true }) }, lines: [
    "Connaissance et compréhension",
    "1. Le graphique montre les six premiers termes d'une suite. Indique a et d, puis écris le terme général. [[g|Graphique de la question 1]]",
    S`2. Trouve \(t_{25}\) pour \(11, 17, 23,\ldots\) et pour \(-3,-7,-11,\ldots\)`,
    S`3. Écris une formule de récurrence pour \(t_n=9-4n\).`,
    "Habiletés de la pensée",
    S`4. Une suite arithmétique a \(t_6=23\) et \(t_{14}=63\). Trouve \(t_1\) et \(t_{50}\).`,
    "5. Quel est le rang du premier terme négatif de la suite du deuxième graphique? [[s|Graphique de la question 5]]",
    "Communication",
    "6. Explique le lien entre une suite arithmétique et une fonction linéaire, et pourquoi le graphique d'une suite n'est pas une ligne continue.",
    "7. Explique comment déterminer si 400 est un terme de la suite 7, 13, 19, …",
    "Mise en application",
    "8. Une carte d'autobus coûte 18 dollars à l'activation, plus 3.25 dollars par trajet. Écris le coût total après n trajets sous forme de suite et trouve le coût après 40 trajets.",
    "9. Des sièges dans une section de stade : la rangée 1 compte 22 sièges et chaque rangée en compte 2 de plus. Quelle rangée compte 80 sièges?",
    "10. Combien de nombres compris entre 100 et 500 sont des multiples de 9?",
    "Niveau difficile",
    S`11. \(x-4\), \(2x+1\) et \(4x\) sont des termes consécutifs d'une suite arithmétique. Trouve x et les deux termes suivants.`,
    "12. Deux suites arithmétiques, 4, 11, 18, … et 1, 5, 9, …, ont des termes en commun. Trouve les trois premiers termes communs et montre qu'ils forment une suite arithmétique.",
  ] },
  { code: "7.2", id: asgId(7, 2), title: dv(T2), figs: {
      g: dotsD(geo(5, 3, 5), { labels: true }),
      d: dotsD(geo(1200, 0.75, 6).map((v) => Math.round(v * 100) / 100), { labels: true, xlabel: "année", ylabel: "valeur" }) }, lines: [
    "Connaissance et compréhension",
    "1. Le graphique montre une suite géométrique. Trouve r et le terme général. [[g|Graphique de la question 1]]",
    S`2. Trouve \(t_8\) pour \(3, -6, 12,\ldots\) et pour \(1024, 256, 64,\ldots\)`,
    "3. Classe chaque suite comme arithmétique, géométrique ou ni l'une ni l'autre : 5, 10, 20, 40; 5, 10, 15, 20; 5, 10, 17, 26.",
    "Habiletés de la pensée",
    S`4. Une suite géométrique a \(t_3=48\) et \(t_6=-3072\). Trouve le terme général.`,
    "5. Quel est le rang du premier terme de 6, 12, 24, … qui est supérieur à 50 000?",
    "Communication",
    "6. Explique le lien entre une suite géométrique et une fonction exponentielle.",
    "7. Explique comment une diminution en pourcentage devient une raison, en prenant 18% comme exemple.",
    "Mise en application",
    "8. Le deuxième graphique montre la valeur d'un ordinateur portable. Trouve le pourcentage de diminution annuel et la valeur au début de l'année 9. [[d|Graphique de la question 8]]",
    "9. Une culture de 300 bactéries double toutes les 20 min. Combien y a-t-il de bactéries après 4 h?",
    "10. Une balle qu'on laisse tomber de 5 m rebondit chaque fois à 70% de sa hauteur. Quelle est la hauteur du 6e rebond?",
    "Niveau difficile",
    S`11. Trouve k si \(k+1\), \(k+7\) et \(4k+4\) sont des termes consécutifs d'une suite géométrique à termes positifs.`,
    "12. Insère quatre nombres entre 2 et 2048 de façon que les six nombres forment une suite géométrique. Y a-t-il plus d'une réponse? Justifie.",
  ] },
  { code: "7.3", id: asgId(7, 3), title: dv(T3), figs: {
      q: dotsD([2, 7, 14, 23, 34], { labels: true }),
      r: dotsD([1, 4, 13, 40, 121], { labels: true }) }, lines: [
    "Connaissance et compréhension",
    S`1. Énumère cinq termes : (a) \(t_1=4,\ t_n=t_{n-1}-6\) (b) \(t_1=1,\ t_n=3t_{n-1}+2\) (c) \(t_1=2,\ t_n=t_{n-1}+n\).`,
    S`2. Pour \(f(n)=n^2-2n\), trouve \(f(1)\) à \(f(6)\) et classe la suite.`,
    "3. Trouve les différences premières et secondes de la suite du premier graphique. [[q|Graphique des questions 3 et 4]]",
    "Habiletés de la pensée",
    "4. Trouve une règle explicite pour la suite du premier graphique et utilise-la pour trouver t₃₀.",
    "5. Le deuxième graphique montre une suite. Trouve une règle de récurrence et vérifie-la avec tous les termes illustrés. [[r|Graphique de la question 5]]",
    "Communication",
    "6. Compare les règles de récurrence et les règles explicites : laquelle convient le mieux pour trouver t₁₀₀, et laquelle pour décrire la croissance d'une régularité?",
    "7. Explique comment les différences secondes indiquent qu'une règle explicite est du second degré.",
    "Mise en application",
    "8. Une régularité d'hexagones faits de bâtonnets utilise 6, 11, 16, … bâtonnets. Écris une règle de récurrence et une règle explicite, puis trouve combien d'hexagones on peut former avec 401 bâtonnets.",
    "9. Combien de déplacements le casse-tête des disques exige-t-il pour 6 disques? Pour 15 disques?",
    S`10. Trouve une règle explicite pour \(1, 6, 15, 28, 45,\ldots\)`,
    "Niveau difficile",
    S`11. La règle \(t_n=pt_{n-1}+q\) produit 3, 8, 23, 68, … Trouve p et q, puis prédis t₇.`,
    "12. Montre que si tₙ = 2tₙ₋₁ + 1 et t₁ = 1, alors tₙ + 1 double chaque fois. Utilise ce fait pour démontrer que tₙ = 2ⁿ − 1.",
  ] },
  { code: "7.4", id: asgId(7, 4), title: dv(T4), figs: {
      f: dotsD([1, 1, 2, 3, 5, 8, 13, 21], { labels: true }),
      g: gridD(1, 1) }, lines: [
    "Connaissance et compréhension",
    "1. Prolonge la suite de Fibonacci du graphique jusqu'au 15e terme. [[f|Graphique de la question 1]]",
    S`2. Énumère sept termes de \(t_1=3,\ t_2=7,\ t_n=t_{n-1}+t_{n-2}\).`,
    S`3. Une suite suit \(t_n=t_{n-1}+t_{n-2}\) avec \(t_6=40\) et \(t_7=65\). Trouve \(t_1\) à \(t_5\).`,
    "Habiletés de la pensée",
    "4. Calcule les quotients tₙ ÷ tₙ₋₁ pour la suite de la question 2 jusqu'à n = 7. Que remarques-tu?",
    S`5. Pour \(t_n=t_{n-1}+2t_{n-2}\) avec \(t_1=t_2=1\), énumère huit termes et trouve la valeur dont les quotients se rapprochent.`,
    "Communication",
    "6. Explique pourquoi une règle qui utilise les deux termes précédents a besoin de deux valeurs de départ.",
    "7. Explique comment le problème de l'escalier (une ou deux marches à la fois) mène à la règle de Fibonacci.",
    "Mise en application",
    "8. De combien de façons peut-on monter 12 marches, une ou deux marches à la fois?",
    "9. Une allée de 2 unités de largeur est pavée avec des tuiles de 1 × 2. Trouve le nombre de pavages pour les longueurs 1 à 8. [[g|Une tuile illustrée pour donner l'échelle]]",
    "10. Trouve la somme des 12 premiers nombres de Fibonacci et compare-la avec t₁₄.",
    "Niveau difficile",
    S`11. Montre que \(t_1+t_2+\cdots+t_n=t_{n+2}-1\) pour la suite de Fibonacci quand n = 1, 2, 3, 4, 5, et explique pourquoi cela fonctionne.`,
    "12. Pour tₙ = tₙ₋₁ + tₙ₋₂ avec t₁ = a et t₂ = b, écris t₈ en fonction de a et de b. Que remarques-tu au sujet des coefficients?",
  ] },
  { code: "7.5", id: asgId(7, 5), title: dv(T5), figs: {
      b: barsD(arr(5, 3, 8)),
      l: barsD(arr(26, -2, 12), { xlabel: "rangée", ylabel: "bûches" }) }, lines: [
    "Connaissance et compréhension",
    "1. Trouve le total des bandes illustrées, d'abord en additionnant, puis à l'aide d'une formule. [[b|Diagramme à bandes de la question 1]]",
    S`2. Trouve \(S_{20}\) pour \(6+10+14+\cdots\) et pour \(30+27+24+\cdots\)`,
    "3. Trouve 9 + 16 + 23 + … + 380.",
    "Habiletés de la pensée",
    "4. Combien de termes de 2 + 9 + 16 + … donnent une somme de 1370?",
    S`5. La somme d'une série arithmétique est \(S_n=5n^2-2n\). Trouve \(t_1\), \(d\) et \(t_{12}\).`,
    "Communication",
    "6. Explique la méthode des paires pour calculer 1 + 2 + … + 100 et comment elle mène à la formule générale.",
    "7. Explique la différence entre tₙ et Sₙ à l'aide d'un exemple.",
    "Mise en application",
    "8. Un étalage de bûches compte 26 bûches dans la rangée du bas et 2 de moins dans chaque rangée au-dessus. Combien de bûches y a-t-il dans les 12 rangées illustrées? [[l|Étalage de bûches de la question 8]]",
    "9. Un élève économise 15 dollars la semaine 1 et 3 dollars de plus chaque semaine. Combien a-t-il économisé après un an (52 semaines)?",
    "10. Trouve la somme de tous les multiples de 8 compris entre 200 et 800.",
    "Niveau difficile",
    "11. Trouve la somme de tous les nombres entiers de 1 à 1000 qui ne sont pas divisibles par 5.",
    "12. Le 4e terme d'une série arithmétique est 19 et la somme des 10 premiers termes est 205. Trouve le premier terme et la raison.",
  ] },
  { code: "7.6", id: asgId(7, 6), title: dv(T6), figs: {
      b: barsD(geo(3, 2, 7)),
      p: dotsD(Array.from({ length: 8 }, (_, i) => Math.round(6 * (1 - (2 / 3) ** (i + 1)) * 3 * 100) / 100), { lines: [{ m: 0, b: 18, color: "amber", dash: true }], ylabel: "Sₙ" }) }, lines: [
    "Connaissance et compréhension",
    "1. Trouve le total des bandes illustrées à l'aide de la formule de la série géométrique. [[b|Diagramme à bandes de la question 1]]",
    S`2. Trouve \(S_7\) pour \(2+8+32+\cdots\) et \(S_6\) pour \(5-15+45-\cdots\)`,
    "3. Trouve 4 + 12 + 36 + … + 8748.",
    "Habiletés de la pensée",
    "4. Combien de termes de 3 + 6 + 12 + … faut-il pour que la somme dépasse 3000?",
    S`5. Une série géométrique a \(t_1=2\), \(r>0\) et \(S_3=42\). Trouve \(r\) et \(S_8\).`,
    "Communication",
    "6. Démontre la formule de la somme d'une série géométrique en soustrayant S de rS.",
    "7. Le graphique montre les sommes partielles de 6 + 4 + 8/3 + … Explique pourquoi elles se rapprochent de 18. [[p|Sommes partielles de la question 7]]",
    "Mise en application",
    "8. Une petite entreprise gagne 8000 dollars le mois 1 et ses gains augmentent de 5% chaque mois. Quels sont ses gains totaux pendant la première année?",
    "9. Dans une chaîne téléphonique, chaque personne en appelle 4 autres. Combien de personnes sont jointes sur 6 niveaux (y compris la première personne)?",
    "10. Une balle qu'on laisse tomber de 20 m rebondit à 60% de sa hauteur. Trouve la distance totale parcourue quand elle touche le sol pour la 6e fois.",
    "Niveau difficile",
    S`11. Une série géométrique a \(S_3=26\) et \(S_6=728\). Trouve \(a\) et \(r\).`,
    "12. On place un grain de riz sur la première case d'un échiquier, 2 sur la deuxième, 4 sur la troisième, … Montre que le total est 2⁶⁴ − 1, et estime combien d'années il faudrait pour les compter à raison d'un grain par seconde.",
  ] },
  { code: "7.7", id: asgId(7, 7), title: dv(T7), figs: {
      t: pascalD(7, [[6, 2], [7, 4]]),
      g: gridD(5, 3) }, lines: [
    "Connaissance et compréhension",
    "1. Trouve les éléments manquants du triangle et énonce la règle que tu as utilisée. [[t|Triangle de Pascal de la question 1]]",
    S`2. Développe \((a+b)^5\) et \((x-1)^4\).`,
    S`3. Combien de termes \((x+y)^{15}\) compte-t-il, et quelle est la somme des coefficients?`,
    "Habiletés de la pensée",
    S`4. Développe \((3x-2)^4\).`,
    S`5. Trouve le coefficient de \(x^5\) dans \((x+3)^8\) et celui de \(x^2\) dans \((1-2x)^9\).`,
    "Communication",
    "6. Décris trois régularités du triangle de Pascal et explique l'une d'elles.",
    "7. Explique pourquoi les signes alternent dans le développement de (x − y)ⁿ.",
    "Mise en application",
    "8. Combien y a-t-il de trajets les plus courts de A à B sur le quadrillage? [[g|Quadrillage de la question 8]]",
    S`9. Utilise \((1+0.01)^6\) pour estimer \(1.01^6\) à 5 décimales près.`,
    "10. Dans un jeu, on lance une pièce de monnaie 6 fois. Utilise la rangée 6 du triangle de Pascal pour trouver combien de résultats comptent exactement 2 faces.",
    "Niveau difficile",
    S`11. Trouve le terme constant de \(\left(2x+\frac1x\right)^6\).`,
    S`12. Dans \((x+k)^6\), le coefficient de \(x^4\) est 135 (k > 0). Trouve k et le développement complet.`,
  ] },
];
