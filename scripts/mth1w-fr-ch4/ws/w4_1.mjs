// Fiche 4.1 — Relations (édition enseignant)
import { EXAMPLES } from "./e4_1.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Nomme la variable indépendante et la variable dépendante : le temps pendant lequel une bougie brûle et sa hauteur.`, recap: "Bougie : temps et hauteur.", ans: "indépendante : le temps; dépendante : la hauteur" },
  { level: 1, q: String.raw`Chaque relation est-elle discrète ou continue? a) le nombre de voitures lavées et l'argent amassé b) le temps et la température d'un four.`, recap: "Voitures lavées / température du four.", ans: "a) discrète b) continue" },
  { level: 1, q: String.raw`Une plante mesure $4$ cm et pousse de $1.5$ cm par semaine. Construis une table pour les semaines $0$ à $4$.`, recap: "Plante 4 cm + 1.5 cm/semaine.", ans: "$4, 5.5, 7, 8.5, 10$" },
  { level: 2, q: String.raw`Écris une équation pour la plante du problème 3 et trouve sa hauteur après $10$ semaines.`, recap: "Équation de la plante; semaine 10.", ans: "$h=4+1.5w$; $19$ cm" },
  { level: 2, q: String.raw`Décris le trajet illustré (distance de la maison en km en fonction du temps en minutes), avec les vitesses.
${planeT({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 12 }, segs: [{ pts: [[0, 0], [15, 10], [35, 10], [60, 0]] }], xlabel: "temps (min)", ylabel: "distance (km)", step: { x: 10, y: 2 } }, 7)}`, recap: "Trajet : 0–15–35–60 min.", ans: String.raw`aller de $10$ km en $15$ min ($40$ km/h), arrêt de $20$ min, retour en $25$ min ($24$ km/h)` },
  { level: 2, q: String.raw`Esquisse un graphique distance-temps pour : « Léo s'éloigne de la maison en joggant pendant $10$ min, revient à mi-chemin en marchant en $10$ min, se repose $5$ min, puis rentre à la maison en marchant en $10$ min. »`, recap: "Esquisse du trajet de Léo.", ans: "montée, descente plus petite, horizontal, descente jusqu'à 0 (les deux parties à la marche ont la même inclinaison)" },
  { level: 2, q: String.raw`Un taxi demande $C=3.5+2d$. Utilise l'équation pour interpoler le coût pour $4.5$ km et extrapoler pour $40$ km. Laquelle est la moins fiable, et pourquoi?`, recap: "Taxi 3.5 + 2d : 4.5 km et 40 km.", ans: "$12.50$; $83.50$ dollars; la valeur pour 40 km suppose le même taux loin à l'extérieur des données (extrapolation)" },
  { level: 2, q: String.raw`Explique pourquoi le graphique du coût de $n$ billets de concert doit être tracé en points séparés, mais le graphique du coût de $g$ litres d'essence en droite.`, recap: "Billets et litres d'essence.", ans: "les billets se comptent (discret); les litres peuvent prendre n'importe quelle valeur (continu)" },
  { level: 3, space: 5.5,
    q: String.raw`On vide une piscine. La table montre la profondeur de l'eau.
\begin{center}\begin{tabular}{c|cccccc}temps (h) & 0 & 1 & 2 & 3 & 4 & 5\\\hline profondeur (cm) & 180 & 156 & 132 & 108 & 84 & 60\end{tabular}\end{center}
a) Identifie les variables et trace le graphique de la relation. Est-elle discrète ou continue?
b) Écris une équation de la profondeur $d$ après $t$ heures.
c) Quand la piscine sera-t-elle vide? S'agit-il d'une interpolation ou d'une extrapolation?`,
    recap: "Piscine qui se vide : 180 cm, −24 cm/h.",
    ans: String.raw`a) $t$ indépendante, $d$ dépendante; continue b) $d=180-24t$ c) $t=7.5$ h; extrapolation (au-delà des données)` },
  { level: 3, space: 5.5,
    q: String.raw`Associe chaque histoire à une forme de graphique (distance de la maison en fonction du temps), et explique.
a) « J'ai marché jusqu'à l'école à un rythme régulier. » b) « J'ai marché jusqu'à l'arrêt d'autobus, j'ai attendu, puis je me suis éloigné de la maison en autobus. » c) « J'ai couru jusqu'au coin de la rue et je suis revenu en marchant. » d) « Je suis resté à la maison. »
Formes : A : droite montante; B : montée, horizontal, montée abrupte; C : horizontal sur l'axe; D : montée abrupte puis descente plus douce jusqu'à $0$.`,
    recap: "Associer quatre histoires à des formes de graphiques.",
    ans: "a) A b) B c) D d) C — l'inclinaison est la vitesse, horizontal signifie arrêté, descendant signifie un retour" },
  { level: 3, space: 5.5,
    q: String.raw`Les distances de deux randonneurs à partir du début d'un sentier sont illustrées.
${planeT({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 16 }, lines: [{ m: 2.5, b: 0, color: "blue", label: "Ana", lx: 4.6 }, { m: 1.5, b: 4, color: "red", label: "Ben", lx: 5 }], xlabel: "temps (h)", ylabel: "distance (km)", step: { x: 1, y: 2 } }, 7)}
a) Qui est parti en avance, et de combien? b) Qui est le plus rapide? De combien?
c) Estime quand ils sont au même endroit, puis vérifie à l'aide d'équations.`,
    recap: "Ana 2.5t et Ben 4 + 1.5t.",
    ans: String.raw`a) Ben, de $4$ km b) Ana, $1$ km/h plus vite c) $2.5t=4+1.5t$, $t=4$ h ($10$ km)` },
  { level: 3, space: 5,
    q: String.raw`Un forfait de cellulaire coûte $20$ dollars par mois plus $0.05$ dollar par texto.
a) Écris la relation en mots, sous forme d'équation et sous forme de table pour $0, 100, 200, 300$ textos.
b) La relation est-elle discrète ou continue? Explique avec soin.
c) Une facture était de $41$ dollars. Combien de textos ont été envoyés?`,
    recap: "Forfait 20 + 0.05t.",
    ans: String.raw`a) $C=20+0.05t$ : $20, 25, 30, 35$ b) discrète (textos entiers), même si on trace souvent une droite pour montrer la tendance c) $420$ textos` },
  { level: 3, space: 5,
    q: String.raw`On laisse tomber une balle d'un balcon. Sa hauteur (m) est notée : $(0, 20)$, $(0.5, 18.8)$, $(1, 15.1)$, $(1.5, 9)$, $(2, 0.4)$.
a) Place les points. Dois-tu les relier par une droite ou par une courbe? Pourquoi?
b) Estime la hauteur à $1.25$ s.
c) Estime quand la balle touche le sol. Pourquoi est-ce une estimation?`,
    recap: "Hauteurs d'une balle qui tombe.",
    ans: String.raw`a) une courbe lisse : la hauteur diminue de plus en plus vite b) environ $12.3$ m c) juste après $2$ s (environ $2.02$ s); on extrapole un peu au-delà des données` },
];

export const WS = {
  code: "4.1",
  title: "Relations",
  bigideas: String.raw`Une \textbf{relation} relie deux variables : la variable \textbf{indépendante} (choisie, axe horizontal) et la variable \textbf{dépendante} (qui réagit, axe vertical). On peut représenter les relations par des mots, des tables, des graphiques et des équations. Les données \textbf{discrètes} se représentent par des points; les données \textbf{continues} par une droite ou une courbe. Sur un graphique distance--temps, l'inclinaison est la vitesse, horizontal signifie arrêté et descendant signifie un retour. Les graphiques permettent d'\textbf{interpoler} et (avec prudence) d'\textbf{extrapoler}.`,
  goals: [
    "Identifier la variable indépendante et la variable dépendante.",
    "Passer des mots aux tables, aux graphiques et aux équations.",
    "Décider si des données sont discrètes ou continues et les représenter correctement.",
    "Interpréter et esquisser des graphiques distance-temps.",
    "Interpoler et extrapoler, et juger de la fiabilité.",
  ],
  curriculum: "C3.1, C4.1",
  vocab: [
    ["Variable indépendante", "la variable que tu contrôles; axe horizontal"],
    ["Variable dépendante", "la variable qui réagit; axe vertical"],
    ["Discrète / continue", "seulement des valeurs séparées / n'importe quelle valeur d'un intervalle"],
    ["Interpoler", "estimer entre des données"],
    ["Extrapoler", "prédire au-delà des données"],
  ],
  hook: String.raw`Traverse l'avant de la classe pendant qu'un élève te chronomètre : lentement en t'éloignant du tableau, arrêt, puis retour rapide. Demande à la classe d'esquisser « ma distance au tableau en fonction du temps » sur de petits tableaux blancs. Comparez les esquisses : quelles parties sont abruptes, horizontales, descendantes? C'est toute la leçon en une minute.`,
  concepts: [
    ["1. Variables et représentations", String.raw`Billets de concert : $C=15n+5$. Mots : $5$ dollars plus $15$ par billet. Table : $n=1,2,3,4\to20,35,50,65$. Graphique : des points séparés (les billets se comptent).
${planeT({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 80 }, points: [1, 2, 3, 4].map((n) => ({ x: n, y: 15 * n + 5, color: "blue" })), xlabel: "billets n", ylabel: "coût C", step: { x: 1, y: 10 } }, 6, "Discrète : place les points, ne les relie pas.")}`],
    ["2. Discrète et continue", String.raw`Les dénombrements (personnes, billets, figures) sont discrets. Les mesures (temps, longueur, volume, température) sont continues. Une baignoire qui se remplit, $V=50+45t$, se représente par une droite pleine.`],
    ["3. Graphiques distance--temps", String.raw`${planeT({ view: { xmin: 0, xmax: 45, ymin: 0, ymax: 8 }, segs: [{ pts: [[0, 0], [20, 6], [30, 6], [40, 0]] }], xlabel: "temps (min)", ylabel: "distance (km)", step: { x: 5, y: 1 } }, 6.5, "Aller à 0.3 km/min, arrêt de 10 min, retour à 0.6 km/min.")}
Plus abrupt = plus rapide; horizontal = arrêté; descendant = retour vers le départ.`],
    ["4. Interpolation et extrapolation", String.raw`Interpoler (entre les données) est habituellement fiable; extrapoler (au-delà des données) suppose que la tendance se maintient, ce qui peut être faux (la croissance ralentit, les prix changent).`],
  ],
  tips: [
    "Demande « qui dépend de qui? » pour placer les variables sur les axes.",
    "Les élèves relient souvent des points discrets; demande si 2.5 billets ont du sens.",
    "Sur un graphique distance-temps, un segment descendant ne signifie pas « descendre une pente » — il signifie revenir.",
    "Exige les unités sur les deux axes.",
    "Les réponses d'extrapolation devraient comprendre une phrase sur la fiabilité.",
  ],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
