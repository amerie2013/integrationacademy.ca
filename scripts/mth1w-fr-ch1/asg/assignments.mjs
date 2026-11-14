// Devoirs du chapitre 1 : 10 questions chacun — Connaissance et compréhension 1-3, Habiletés de la pensée 4-5,
// Communication 6-7, Mise en application 8-10. Miroir de ../../mth1w-ch1/v2/asg/assignments.mjs.
// [[clé|légende]] dans une ligne est remplacé par une figure (SVG téléversé) à la publication.
import { numberLine, setsDiagram, barChart, chips, thermometer, graph, bars, tape, areaModel, tiles, doubleLine, percentBar, cube } from "../bank/svg.mjs";
import { asgId } from "../../mth1w-fr/common.mjs";
import { TITLE as T1 } from "../l1_1.mjs";
import { TITLE as T2 } from "../l1_2.mjs";
import { TITLE as T3 } from "../l1_3.mjs";
import { TITLE as T4 } from "../l1_4.mjs";
import { TITLE as T5 } from "../l1_5.mjs";
import { TITLE as T6 } from "../l1_6.mjs";
import { TITLE as T7 } from "../l1_7.mjs";
import { TITLE as T8 } from "../l1_8.mjs";
import { TITLE as T9 } from "../l1_9.mjs";
import { TITLE as T10 } from "../l1_10.mjs";

/** "Devoir 1.k — <titre de la leçon sans le numéro>" */
const title = (T) => `Devoir ${T.split(" ")[0]} — ${T.split(" ").slice(1).join(" ")}`;
const K = "Connaissance et compréhension", H = "Habiletés de la pensée", C = "Communication", A = "Mise en application";

export const ASSIGNMENTS = [
  { code: "1.1", id: asgId(1, 1), title: title(T1), figs: {
      sets: setsDiagram([{ set: "N", label: "D" }, { set: "Z", label: "C" }, { set: "Q", label: "A" }, { set: "I", label: "B" }]),
      line: numberLine({ min: 6, max: 9, step: 0.5 }) }, lines: [
    K,
    String.raw`1. Donne tous les ensembles auxquels appartient chaque nombre : \(-\dfrac{36}{9}\), \(0.\overline{81}\), \(\sqrt{144}\), \(\sqrt{20}\).`,
    String.raw`2. Écris \(1.2\overline{15}\) sous forme de fraction irréductible. Montre l'algèbre.`,
    String.raw`3. Les points A, B, C et D sont placés dans le diagramme des ensembles de nombres. Donne un nombre qui pourrait se trouver à chaque point. [[sets|A, B, C et D se trouvent dans la région la plus intérieure illustrée.]]`,
    H,
    String.raw`4. Entre quels deux entiers consécutifs se trouve \(\sqrt{55}\)? Estime-la au dixième près et place-la sur la droite numérique. [[line|Place √55 sur cette droite numérique.]]`,
    String.raw`5. Donne un contre-exemple à chaque affirmation : « le produit de deux nombres irrationnels est irrationnel » et « la somme de deux nombres irrationnels est irrationnelle ». Explique ensuite pourquoi un nombre rationnel plus un nombre irrationnel ne peut jamais être rationnel.`,
    C,
    "6. Explique la différence entre un décimal fini, un décimal périodique et un décimal infini non périodique. Donne un exemple de chacun et indique s'il est rationnel.",
    "7. Décris comment les Mayas écrivaient le zéro et explique pourquoi un symbole pour le zéro est nécessaire dans un système de numération de position.",
    A,
    String.raw`8. Un jardin rectangulaire mesure \(\sqrt{12}\) m sur \(\sqrt{27}\) m. Montre que son aire est un nombre rationnel. Estime ensuite la longueur de clôture nécessaire pour en faire le tour, au dixième de mètre près.`,
    String.raw`9. Un thermomètre numérique indique \(-7.25\,^\circ\)C. Donne tous les ensembles de nombres auxquels appartient cette lecture et explique.`,
    String.raw`10. La diagonale d'une tuile carrée de \(1\) m de côté mesure \(\sqrt{2}\) m. Explique pourquoi aucun ruban à mesurer ne peut indiquer cette longueur exactement, et donne la mesure au millimètre près.`,
  ] },
  { code: "1.2", id: asgId(1, 2), title: title(T2), figs: {
      chart: barChart([["M1", 2], ["M2", -4], ["M3", -1], ["M4", 3], ["M5", -2]], { ylabel: "différentiel de buts", min: -5, max: 4, step: 1 }),
      chips: chips(3, 8),
      thermo: thermometer({ lo: -25, hi: 10, step: 5, marks: [{ at: 6, label: "max" }, { at: -19, label: "min", color: "blue" }] }) }, lines: [
    K,
    String.raw`1. Évalue \(-17+9\).`,
    String.raw`2. Évalue \(6-(-14)\).`,
    String.raw`3. Évalue \(-|-23-(-8)|+|5-12|\).`,
    H,
    String.raw`4. Le diagramme montre le différentiel de buts d'une équipe de hockey en cinq matchs. Trouve le total, puis les deux matchs consécutifs dont le différentiel combiné est le pire. [[chart|Différentiel de buts (buts marqués moins buts accordés) par match]]`,
    String.raw`5. Deux entiers ont une somme de \(-11\) et une différence de \(25\). Trouve-les, et explique ta méthode.`,
    C,
    String.raw`6. Utilise les jetons et les paires nulles pour expliquer pourquoi \(3+(-8)=-5\). [[chips|3 jetons positifs et 8 jetons négatifs]]`,
    String.raw`7. Utilise une régularité (par exemple \(4-2,\ 4-1,\ 4-0,\ 4-(-1),\dots\)) pour expliquer pourquoi soustraire un nombre négatif revient à additionner un nombre positif.`,
    A,
    String.raw`8. Le thermomètre montre le minimum de \(-19\,^\circ\)C et le maximum de \(6\,^\circ\)C d'une journée d'hiver à Sudbury. De combien de degrés la température a-t-elle monté? [[thermo|Températures minimale et maximale]]`,
    String.raw`9. Un avion qui vole à \(9500\) m descend de \(3750\) m, puis de \(4200\) m de plus. Un sous-marin sous lui se trouve à \(-120\) m. Quelle distance verticale les sépare maintenant?`,
    String.raw`10. Un compte bancaire commence à \(-60\) dollars. Il y a un dépôt de \(145\) dollars et deux paiements de \(38\) et de \(92\) dollars. Quel est le solde final? Le compte est-il à découvert?`,
  ] },
  { code: "1.3", id: asgId(1, 3), title: title(T3), figs: {
      jumps: numberLine({ min: -14, max: 2, arrows: [{ from: 0, to: -4, lane: 0, color: "red" }, { from: -4, to: -8, lane: 1, color: "red" }, { from: -8, to: -12, lane: 0, color: "red" }] }),
      cool: graph({ series: [{ pts: [[0, 4], [1, 1], [2, -2], [3, -5]] }], xmin: 0, xmax: 9, ymin: -22, ymax: 6, xstep: 1, ystep: 4, xlabel: "heures", ylabel: "°C" }) }, lines: [
    K,
    String.raw`1. Évalue \((-12)(-7)\).`,
    String.raw`2. Évalue \(-144\div16\).`,
    String.raw`3. Évalue \((-2)^3(5)(-3)^2(-1)^5\div(-6)\). Donne le signe avant de calculer.`,
    H,
    String.raw`4. Évalue \(3x^2-4x-7\) lorsque \(x=-2\). Montre chaque étape.`,
    String.raw`5. Trouve deux entiers dont le produit est \(-96\) et la somme \(-4\). Explique comment les signes du produit et de la somme te guident.`,
    C,
    String.raw`6. Utilise les sauts sur la droite numérique pour expliquer pourquoi \(3\times(-4)=-12\). [[jumps|Trois sauts de −4]]`,
    String.raw`7. Explique pourquoi \(0\div5=0\), mais \(5\div0\) n'est pas défini.`,
    A,
    String.raw`8. Le graphique montre un congélateur qui refroidit à un taux constant. Quand atteindra-t-il \(-20\,^\circ\)C? Montre ton raisonnement à l'aide d'entiers. [[cool|Température du congélateur]]`,
    String.raw`9. La moyenne de six températures est de \(-7\,^\circ\)C. Cinq d'entre elles sont \(-6,\ -11,\ 3,\ -8,\ -3\). Trouve la sixième.`,
    String.raw`10. Un jeu-questionnaire accorde \(+3\) pour une bonne réponse et \(-1\) pour une mauvaise. Léna a répondu aux \(20\) questions et a obtenu \(32\). Combien de bonnes réponses a-t-elle eues?`,
  ] },
  { code: "1.4", id: asgId(1, 4), title: title(T4), figs: {
      bars: bars([{ n: 1, d: 3, label: "1/3" }, { n: 2, d: 5, label: "2/5", color: "amber" }]),
      tape: tape([{ n: 8, label: "vélo", color: "blue" }, { n: 5, label: "casque", color: "amber" }, { n: 7, label: "reste", color: "green" }], { unit: 24, total: "économies (20 parties égales)" }) }, lines: [
    K,
    String.raw`1. Écris \(\dfrac{54}{90}\) sous forme de fraction irréductible.`,
    String.raw`2. Évalue \(\dfrac58+\dfrac16\).`,
    String.raw`3. Évalue \(\dfrac23-\dfrac79-\left(-1\dfrac16\right)\).`,
    H,
    String.raw`4. Place dans l'ordre croissant : \(\dfrac47,\ \dfrac35,\ \dfrac{7}{12},\ 0.58\). Explique ta méthode.`,
    String.raw`5. Trouve deux fractions entre \(-\dfrac38\) et \(-\dfrac{4}{11}\). Montre comment tu sais qu'elles se trouvent entre les deux.`,
    C,
    String.raw`6. Utilise les barres de fractions pour expliquer pourquoi \(\dfrac13+\dfrac25\) n'est pas \(\dfrac38\), puis trouve la bonne somme. [[bars|1/3 et 2/5 du même tout]]`,
    String.raw`7. Explique comment écrire \(3\dfrac58\) sous forme de fraction impropre et pourquoi la méthode fonctionne.`,
    A,
    String.raw`8. Un menuisier coupe des morceaux de \(1\dfrac34\) m et de \(2\dfrac56\) m dans une planche de \(6\) m. Quelle longueur reste-t-il?`,
    String.raw`9. Ana dépense les \(\dfrac25\) de ses économies pour un vélo et le \(\dfrac14\) pour un casque. Quelle fraction lui reste-t-il? Utilise le diagramme à bandes pour vérifier. [[tape|Les économies d'Ana]]`,
    String.raw`10. Un réservoir d'eau est rempli aux \(\dfrac38\). On ajoute une quantité d'eau égale au \(\dfrac13\) de sa capacité. Puis \(14\) L de plus le remplissent exactement. Trouve la capacité du réservoir.`,
  ] },
  { code: "1.5", id: asgId(1, 5), title: title(T5), figs: { area: areaModel(3, 4, 2, 5) }, lines: [
    K,
    String.raw`1. Évalue \(\dfrac38\times\dfrac49\).`,
    String.raw`2. Évalue \(\dfrac{7}{10}\div\dfrac{14}{15}\times\left(-1\dfrac13\right)\).`,
    String.raw`3. Écris l'inverse de \(3\dfrac15\) et celui de \(-0.75\).`,
    H,
    String.raw`4. Quelle multiplication le modèle d'aire représente-t-il? Écris-la avec sa réponse sous forme de fraction irréductible. [[area|Colonnes bleues, rangées jaunes, partie commune verte]]`,
    String.raw`5. Évalue \(\left[\left(\dfrac12+\dfrac13\right)\div\left(\dfrac12-\dfrac13\right)-1\right]\times\left(-\dfrac34\right)\).`,
    C,
    String.raw`6. Dessine un diagramme pour expliquer pourquoi \(2\div\dfrac14=8\).`,
    String.raw`7. Explique pourquoi les nombres fractionnaires doivent être convertis en fractions impropres avant d'être multipliés. Utilise \(1\dfrac12\times1\dfrac12\) comme exemple.`,
    A,
    String.raw`8. Une recette pour \(8\) personnes demande \(2\dfrac14\) tasses de lait. Quelle quantité de lait faut-il pour \(12\) personnes?`,
    String.raw`9. Aya dépense le \(\dfrac14\) de son argent, puis les \(\dfrac25\) de ce qui reste. Il lui reste \(36\) dollars. Combien avait-elle au départ?`,
    String.raw`10. Une voiture consomme \(\dfrac{3}{40}\) L de carburant par kilomètre. Combien de carburant consomme-t-elle en \(2\dfrac12\) heures à \(80\) km/h?`,
  ] },
  { code: "1.6", id: asgId(1, 6), title: title(T6), figs: {
      pow: graph({ series: [{ pts: [[-3, 0.125], [-2, 0.25], [-1, 0.5], [0, 1], [1, 2], [2, 4], [3, 8]] }], xmin: -3, xmax: 3, ymin: 0, ymax: 8, xstep: 1, ystep: 1, xlabel: "n", ylabel: "2^n" }),
      med: graph({ series: [{ pts: [[0, 160], [4, 80], [8, 40]] }], xmin: 0, xmax: 16, ymin: 0, ymax: 180, xstep: 4, ystep: 20, xlabel: "heures", ylabel: "mg" }) }, lines: [
    K,
    String.raw`1. Évalue \((-3)^5\).`,
    String.raw`2. Évalue \(7^0+7^{-1}-\left(-\dfrac17\right)^{-1}\) sous forme de fraction.`,
    String.raw`3. Évalue \(\left(\dfrac35\right)^{-2}\).`,
    H,
    String.raw`4. Utilise le graphique de \(y=2^n\) pour expliquer pourquoi \(2^0=1\) et \(2^{-1}=\dfrac12\). [[pow|Le graphique de 2 à la puissance n]]`,
    String.raw`5. Trouve l'entier \(n\) tel que \(\left(\dfrac23\right)^n=\dfrac{81}{16}\).`,
    C,
    String.raw`6. Explique la différence entre \((-6)^2\) et \(-6^2\), et évalue chacun.`,
    String.raw`7. Utilise une régularité de puissances de \(10\) pour montrer que \(10^{-3}=0.001\).`,
    A,
    String.raw`8. Une boîte en forme de cube a des arêtes de \(1.5\) m. Trouve l'aire d'une face et le volume de la boîte.`,
    String.raw`9. Une culture de bactéries triple toutes les \(2\) heures. Il y a \(7290\) bactéries maintenant. Combien y en avait-il il y a \(6\) heures? Écris ton calcul avec un exposant négatif.`,
    String.raw`10. Une dose de \(160\) mg d'un médicament diminue de moitié toutes les \(4\) heures. Combien en reste-t-il après \(16\) heures? [[med|Médicament restant]]`,
  ] },
  { code: "1.7", id: asgId(1, 7), title: title(T7), figs: { tiles: tiles([{ n: 2, sym: "x" }, { n: 4, sym: "x" }]), crystal: cube("5 × 10⁻⁵ m") }, lines: [
    K,
    String.raw`1. Simplifie, puis évalue : \(\dfrac{6^4\times6^{-1}}{6^2\times6^{-2}}\).`,
    String.raw`2. Simplifie \((m^3)^4\div m^{-7}\).`,
    String.raw`3. Écris \(0.000\,34\) et \(5\,900\,000\) en notation scientifique.`,
    H,
    String.raw`4. Simplifie \(\left(\dfrac{5a^6b^{-2}c^4}{15a^2b^3c}\right)^3\). Écris la réponse avec des exposants positifs.`,
    String.raw`5. Trouve \(n\) si \(\dfrac{4^n\times8^3}{2^5}=16^4\).`,
    C,
    String.raw`6. Utilise le diagramme de tuiles pour expliquer pourquoi \(x^2\cdot x^4=x^6\), et non \(x^8\). [[tiles|x au carré fois x à la puissance quatre]]`,
    String.raw`7. Un élève a écrit \(\left(\dfrac{3x^2}{y}\right)^{-2}=-\dfrac{9x^4}{y^2}\). Explique les deux erreurs, puis écris la bonne réponse.`,
    A,
    String.raw`8. Un grain de riz a une masse d'environ \(2.5\times10^{-5}\) kg. Environ combien de grains y a-t-il dans une cargaison de \(3.2\times10^{4}\) kg? Donne ta réponse en notation scientifique.`,
    String.raw`9. À un certain point de son orbite, Mars est à environ \(2.25\times10^{8}\) km de la Terre. Une sonde voyage à \(4.5\times10^{4}\) km/h. Combien d'heures durerait le voyage? Environ combien de jours cela représente-t-il?`,
    String.raw`10. Un cristal de sel est représenté par le cube illustré. Trouve son volume en notation scientifique. Combien de ces cristaux rempliraient \(1\) cm³, soit \(1\times10^{-6}\) m³? [[crystal|Un cristal de sel représenté par un cube]]`,
  ] },
  { code: "1.8", id: asgId(1, 8), title: title(T8), figs: {
      dl: doubleLine(4, 9, 5, { top: "sable (kg)", bottom: "gravier (kg)", blank: { top: 3, bottom: 5 } }),
      tape: tape([{ n: 5, label: "premier nombre", color: "blue" }, { n: 8, label: "deuxième nombre", color: "amber" }], { unit: 30, total: "leur différence est 21" }) }, lines: [
    K,
    String.raw`1. Écris \(64:40\) sous sa forme la plus simple.`,
    String.raw`2. Résous \((x+3):14=3:7\).`,
    String.raw`3. Écris \(0.75:2\) sous sa forme la plus simple avec des nombres entiers.`,
    H,
    String.raw`4. Un refuge pour animaux compte des chats et des chiens selon le rapport \(5:7\). Après l'adoption de \(8\) chiens, il y a autant de chats que de chiens. Combien d'animaux y avait-il au départ?`,
    String.raw`5. Le sable et le gravier sont mélangés selon le rapport \(4:9\). Trouve les deux valeurs manquantes sur la double droite numérique. [[dl|Sable et gravier]]`,
    C,
    "6. Explique la différence entre un rapport partie à partie et un rapport partie au tout, en prenant comme exemple une classe d'élèves.",
    String.raw`7. Explique pourquoi \(3:4\) et \(6:7\) ne sont pas des rapports équivalents.`,
    A,
    String.raw`8. Sur une carte à l'échelle \(1:75\,000\), deux lacs sont à \(5.6\) cm l'un de l'autre. Quelle distance les sépare, en kilomètres?`,
    String.raw`9. \(A:B=2:3\) et \(B:C=4:5\). Partage \(350\) dollars entre \(A\), \(B\) et \(C\) selon ces rapports.`,
    String.raw`10. Deux nombres sont dans le rapport \(5:8\) et leur différence est \(21\). Trouve ces nombres. [[tape|Diagramme à bandes]]`,
  ] },
  { code: "1.9", id: asgId(1, 9), title: title(T9), figs: {
      car: graph({ series: [{ pts: [[0, 0], [1, 90], [2, 180], [3, 270]] }], xmin: 0, xmax: 5, ymin: 0, ymax: 450, xstep: 1, ystep: 50, xlabel: "temps (h)", ylabel: "distance (km)" }),
      pbar: percentBar({ pct: 45, leftLabel: "à pied : 45 %", rightLabel: "160 élèves" }) }, lines: [
    K,
    String.raw`1. Trouve \(18\%\) de \(350\).`,
    String.raw`2. \(39\) représente \(65\%\) de quel nombre?`,
    String.raw`3. \(5\) kg de riz coûtent \(11.25\) dollars. Trouve le prix unitaire.`,
    H,
    String.raw`4. Le graphique montre une voiture qui roule à vitesse constante. Trouve sa vitesse et le temps qu'il lui faut pour parcourir \(405\) km. [[car|Distance parcourue]]`,
    String.raw`5. Un prix monte de \(30\%\), puis baisse de \(30\%\). Trouve la variation globale en pourcentage. Quelle hausse en pourcentage faudrait-il ensuite pour revenir au prix initial? Arrondis au dixième.`,
    C,
    String.raw`6. Le volume d'un réservoir varie de \(-4\) L/min. Explique ce que signifie le signe négatif et décris le réservoir après \(10\) minutes.`,
    String.raw`7. Après un rabais de \(15\%\), une chemise coûte \(51\) dollars. Explique comment trouver le prix initial, et pourquoi calculer \(15\%\) de \(51\) ne fonctionne pas.`,
    A,
    String.raw`8. Des jeans sont à \(25\%\) de rabais, puis on ajoute la TVH de \(13\%\). Le prix final est de \(57.63\) dollars. Trouve le prix initial.`,
    String.raw`9. La barre montre le pourcentage des \(160\) élèves qui se rendent à l'école à pied. Combien d'élèves y vont à pied? [[pbar|Élèves qui vont à pied]]`,
    String.raw`10. La population d'une ville passe de \(12\,500\) à \(13\,750\) en un an. Trouve l'augmentation en pourcentage. Si ce taux se maintient, quelle sera la population deux ans plus tard?`,
  ] },
  { code: "1.10", id: asgId(1, 10), title: title(T10), figs: {
      zoom: numberLine({ min: -0.25, max: -0.2, step: 0.0125, labels: ["−1/4", "", "", "", "−1/5"] }),
      seq: graph({ series: [{ pts: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => [n, +(2 + 1 / n).toFixed(3)]), join: false }], xmin: 0, xmax: 9, ymin: 0, ymax: 3.5, xstep: 1, ystep: 0.5, xlabel: "n", ylabel: "a_n" }) }, lines: [
    K,
    String.raw`1. Trouve le point milieu de \(-\dfrac25\) et de \(\dfrac{7}{10}\). Trouve ensuite le point milieu de ce nombre et de \(\dfrac{7}{10}\).`,
    String.raw`2. Trouve un nombre entre \(0.71\) et \(0.72\).`,
    String.raw`3. De quelle valeur les termes de \(\dfrac{1}{n^2}\) s'approchent-ils quand \(n\) devient très grand?`,
    H,
    String.raw`4. Nomme trois nombres rationnels entre \(-\dfrac14\) et \(-\dfrac15\) et place-les sur la droite numérique. [[zoom|De −1/4 à −1/5]]`,
    String.raw`5. Trouve la limite de \(\dfrac{3n-1}{2n}\) quand \(n\) augmente. Pour quel premier \(n\) le terme est-il à moins de \(0.01\) de la limite? Explique.`,
    C,
    "6. Explique pourquoi il n'existe pas de plus petit nombre rationnel positif.",
    String.raw`7. Utilise \(\dfrac19=0.\overline{1}\) pour expliquer pourquoi \(0.\overline{9}=1\).`,
    A,
    String.raw`8. On laisse tomber une balle de \(9\) m, et chaque rebond atteint le \(\dfrac13\) de la hauteur précédente. Donne les quatre premières hauteurs de rebond. La somme des hauteurs s'approche de \(4.5\) m. Quelle distance totale la balle parcourt-elle dans ce modèle?`,
    String.raw`9. Le graphique montre la suite \(a_n=2+\dfrac1n\). Quelle est sa limite, et les termes l'atteignent-ils un jour? [[seq|Les premiers termes de la suite]]`,
    String.raw`10. Trouve \(\dfrac12+\dfrac14+\dots+\dfrac{1}{256}\) (huit termes). À quel point est-ce proche de \(1\)?`,
  ] },
];
