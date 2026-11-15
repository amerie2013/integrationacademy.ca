// MCR3U-FR Fiche 6.3 — Interpréter des graphiques sinusoïdaux (édition enseignant)
import { waveT, gridW, cos, f, sin } from "./sinT.mjs";
import { TITLE } from "../l6_3.mjs";

const S = String.raw;
const w1 = (t) => 17 - 15 * cos(3.6 * t);
const p4 = (t) => 9 - 7 * cos(15 * t);
// palette sous l'eau lorsque sin θ < −1/3 : θ de th (quadrant 3) à 540° − th (quadrant 4)
const th = 180 + (Math.asin(1 / 3) * 180) / Math.PI;
const underFrac = (540 - 2 * th) / 360;

const EXAMPLES = [
  { title: "Lire le graphique d'une roue", q: "Le graphique montre la hauteur d'une personne sur une grande roue. Donne le rayon, la hauteur du moyeu et la durée d'un tour.",
    fig: waveT(w1, { xmin: 0, xmax: 200, ymin: 0, ymax: 36 }, { x: 25, y: 4 }, { axis: 17, xlabel: "t (s)", ylabel: "h (m)", pts: [[50, 32, "(50, 32)"], [100, 2, "(100, 2)"]] }),
    steps: [S`\textbf{Rayon :} la moitié de l'écart des hauteurs : $\frac{32-2}2=15$ m. C'est l'amplitude.`,
      S`\textbf{Moyeu :} la hauteur du milieu : $\frac{32+2}2=17$ m. C'est l'axe.`,
      S`\textbf{Durée d'un tour :} des minimums en $t=0$ et $t=100$ : $100$ s, la période.`,
      S`\textbf{Vérification :} $17\pm15$ donne $32$ et $2$ \checkmark`],
    ans: "rayon 15 m, moyeu à 17 m, 100 s" },
  { title: "Les instants au sommet", q: "Pour la roue de période 100 s, avec embarquement en t = 0, quand la personne est-elle au sommet pendant les 200 premières secondes?",
    fig: waveT(w1, { xmin: 0, xmax: 200, ymin: 0, ymax: 36 }, { x: 25, y: 4 }, { lines: [{ m: 0, b: 32, color: "amber", dash: true }], xlabel: "t (s)", ylabel: "h (m)", pts: [[50, 32, "(50, 32)"], [150, 32, "(150, 32)"]] }),
    steps: [S`\textbf{Première fois :} un demi-tour après l'embarquement : $50$ s.`,
      S`\textbf{Répéter :} toutes les $100$ s : $150$ s.`,
      S`\textbf{Arrêter :} le suivant, à $250$ s, est trop tard.`],
    ans: "t = 50 s et 150 s" },
  { title: "Domaine et image", q: "Le tour de manège dure quatre tours de roue. Donne le domaine et l'image.",
    fig: waveT({ f: w1, a: 0, b: 400, color: "violet" }, { xmin: 0, xmax: 420, ymin: 0, ymax: 36 }, { x: 50, y: 4 }, { xlabel: "t (s)", ylabel: "h (m)", pts: [[400, 2, "(400, 2)"]] }),
    steps: [S`\textbf{Domaine :} quatre tours de $100$ s chacun : $0\le t\le400$.`,
      S`\textbf{Image :} les hauteurs vont de $2$ m à $32$ m à chaque tour.`,
      S`\textbf{Pourquoi restreindre?} La règle fonctionne pour tout $t$, mais le tour de manège ne dure que ce temps.`],
    ans: S`$0\le t\le400$; $2\le h\le32$` },
  { title: "À la hauteur du moyeu", q: "À quels instants du premier tour la personne est-elle à la hauteur du moyeu?",
    fig: waveT(w1, { xmin: 0, xmax: 110, ymin: 0, ymax: 36 }, { x: 25, y: 4 }, { axis: 17, xlabel: "t (s)", ylabel: "h (m)", pts: [[25, 17, "(25, 17)"], [75, 17, "(75, 17)"]] }),
    steps: [S`\textbf{Signification :} la hauteur est sur l'axe, $17$ m.`,
      S`\textbf{Fractions de tour :} un quart et trois quarts de tour après le bas.`,
      S`\textbf{Instants :} $\frac14(100)=25$ s et $\frac34(100)=75$ s.`],
    ans: "t = 25 s et 75 s" },
  { title: "Une roue à aubes à moitié immergée", q: "Une roue à aubes de rayon 2 m a son centre à la surface de l'eau et fait un tour toutes les 12 s. Décris le graphique de la hauteur du bout d'une palette et indique combien de temps ce bout passe sous l'eau à chaque tour.",
    fig: waveT((t) => 2 * sin(30 * t), { xmin: 0, xmax: 24, ymin: -3, ymax: 3 }, { x: 2, y: 1 }, { axis: 0, xlabel: "t (s)", ylabel: "h (m)", pts: [[6, 0, "(6, 0)"], [12, 0, "(12, 0)"]] }),
    steps: [S`\textbf{Axe :} le centre est à la surface, donc $h=0$.`,
      S`\textbf{Amplitude :} le rayon, $2$ m : image $-2\le h\le2$.`,
      S`\textbf{Sous l'eau :} $h<0$ pendant exactement la moitié de chaque cycle.`,
      S`\textbf{Durée :} $\frac12(12)=6$ s.`],
    ans: "6 s sous l'eau à chaque tour" },
  { title: "Une éolienne", q: "Le moyeu d'une éolienne est à 30 m de haut et chaque pale mesure 20 m. Une pale fait un tour toutes les 5 s. Donne le max, le min et la période de la hauteur du bout d'une pale.",
    fig: waveT((t) => 30 - 20 * cos(72 * t), { xmin: 0, xmax: 12, ymin: 0, ymax: 56 }, { x: 1, y: 10 }, { axis: 30, xlabel: "t (s)", ylabel: "h (m)", pts: [[2.5, 50, "(2.5, 50)"], [5, 10, "(5, 10)"]] }),
    steps: [S`\textbf{Maximum :} pale pointée vers le haut : $30+20=50$ m.`,
      S`\textbf{Minimum :} pale pointée vers le bas : $30-20=10$ m.`,
      S`\textbf{Période :} un tour : $5$ s.`],
    ans: "max 50 m, min 10 m, période 5 s" },
  { title: "La hauteur en fonction de la distance", q: "Un caillou est coincé dans un pneu de 60 cm de diamètre. Quelle est la période du graphique de sa hauteur en fonction de la distance parcourue?",
    fig: waveT((x) => 30 - 30 * Math.cos(x / 30), { xmin: 0, xmax: 400, ymin: 0, ymax: 70 }, { x: 50, y: 10 }, { xlabel: "distance (cm)", ylabel: "h (cm)", pts: [[60 * Math.PI, 0, "(188.5, 0)"]] }),
    steps: [S`\textbf{Réfléchir :} la variable d'entrée du graphique est la distance, et non le temps.`,
      S`\textbf{Un cycle :} un tour fait rouler le pneu d'une circonférence sur le sol.`,
      S`\textbf{Calculer :} $\pi d=60\pi\approx${f(60 * Math.PI, 1)}$ cm.`],
    ans: S`$\approx${f(60 * Math.PI, 1)}$ cm` },
  { title: "Comparer deux roues", q: "Roue A : rayon 10 m, moyeu à 12 m. Roue B : rayon 15 m, moyeu à 17 m. Les deux font un tour en 60 s. En quoi leurs graphiques diffèrent-ils?",
    fig: waveT([(t) => 12 - 10 * cos(6 * t), (t) => 17 - 15 * cos(6 * t)], { xmin: 0, xmax: 120, ymin: 0, ymax: 34 }, { x: 15, y: 4 }, { xlabel: "t (s)", ylabel: "h (m)", pts: [[30, 22, "(30, 22)"], [30, 32, "(30, 32)"]] }),
    steps: [S`\textbf{Période :} $60$ s pour les deux, donc les sommets sont alignés.`,
      S`\textbf{Amplitude :} A $10$ m, B $15$ m.`,
      S`\textbf{Axe :} A $12$ m, B $17$ m.`,
      S`\textbf{Minimum :} A : $12-10=2$; B : $17-15=2$. Dans les deux cas, on embarque à $2$ m.`],
    ans: "même période et même minimum; amplitude et axe différents" },
  { title: "Le piston d'un moteur", q: "Un piston se déplace entre 2 cm et 12 cm et fait un cycle toutes les 0.05 s. Combien de cycles fait-il par minute?",
    fig: waveT((t) => 7 - 5 * cos(7200 * t), { xmin: 0, xmax: 0.2, ymin: 0, ymax: 14 }, { x: 0.05, y: 2 }, { axis: 7, xlabel: "t (s)", ylabel: "h (cm)", pts: [[0.05, 2, "(0.05, 2)"]] }),
    steps: [S`\textbf{Période :} $0.05$ s par cycle. Ici, les hauteurs sont des renseignements superflus.`,
      S`\textbf{Unités :} $1$ minute $=60$ s.`,
      S`\textbf{Diviser :} $60\div0.05=1200$.`,
      S`\textbf{Vérification :} $1200\times0.05=60$ \checkmark`],
    ans: "1200 cycles par minute" },
];

const PROBLEMS = [
  { level: 1, q: "Le graphique d'une roue a un max de 32 m et un min de 4 m. Trouve le rayon.", recap: "Rayon.", ans: "14 m" },
  { level: 1, q: "Pour la même roue (max 32 m, min 4 m), trouve la hauteur du moyeu.", recap: "Moyeu.", ans: "18 m" },
  { level: 1, q: "Des maximums se produisent en t = 12 s et t = 42 s. Trouve la durée d'un tour.", recap: "Période.", ans: "30 s" },
  { level: 2, q: "Lis le rayon, la hauteur du moyeu et la durée d'un tour sur le graphique.", recap: "Lire le graphique.", ans: "rayon 7 m, moyeu à 9 m, 24 s",
    fig: waveT(p4, { xmin: 0, xmax: 72, ymin: 0, ymax: 18 }, { x: 6, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)" }) },
  { level: 2, q: "Pour la roue du problème 4, quand la personne est-elle au sommet pendant la première minute?", recap: "Instants au sommet.", ans: "t = 12, 36, 60 s" },
  { level: 2, q: "Le tour de manège du problème 4 dure 5 tours de roue. Donne le domaine et l'image.", recap: "Domaine et image.", ans: S`$0\le t\le120$; $2\le h\le16$` },
  { level: 2, q: "Une roue de vélo a un diamètre de 64 cm. Trouve la période du graphique de la hauteur d'un caillou en fonction de la distance.", recap: "Circonférence.", ans: S`$64\pi\approx${f(64 * Math.PI)}$ cm` },
  { level: 2, q: "Une roue à aubes de rayon 3 m a son centre à 1 m au-dessus de l'eau. Quel est le point le plus bas d'une palette par rapport à l'eau?", recap: "Sous l'eau.", ans: "2 m sous la surface" },
  { level: 3, space: 5, q: "Pour la roue à aubes du problème 8, quelle fraction de chaque tour une palette passe-t-elle sous l'eau? (Sa hauteur est 1 + 3 sin θ.)", recap: "Fraction sous l'eau.", ans: S`$\sin\theta<-\frac13$ : $\theta$ de ${f(th, 1)}° à ${f(540 - th, 1)}°; fraction $\approx${f(underFrac, 3)}$` },
  { level: 3, space: 5, q: S`Une roue a un rayon de 10 m, un moyeu à 13 m et fait un tour toutes les 40 s ($h=13-10\cos(9t)$). Pendant combien de temps, à chaque tour, une personne est-elle au-dessus de 18 m?`, recap: "Au-dessus d'un niveau.", ans: S`$\cos(9t)\le-\frac12$ : $9t$ de 120° à 240°, donc $\frac{120}{9}\approx13.33$ s` },
  { level: 3, space: 5, q: "Roue A : rayon 9 m, moyeu à 11 m, 36 s par tour. Roue B : rayon 12 m, moyeu à 14 m, 48 s par tour. Des personnes embarquent au bas des deux roues en t = 0. Qui est le plus haut en t = 12 s?", recap: "Comparer.", ans: S`A : $11-9\cos120^\circ=15.5$ m; B : $14-12\cos90^\circ=14$ m; A est plus haut` },
  { level: 3, space: 4, q: "On inverse le sens de rotation d'une roue, à la même vitesse. Comment le graphique hauteur-temps change-t-il? Explique.", recap: "Expliquer.", ans: "il ne change pas : la personne monte toujours du bas jusqu'au sommet en un demi-tour" },
  { level: 3, space: 5, q: "Esquisse deux tours du graphique de la hauteur pour une roue de rayon 5 m, avec un moyeu à 7 m, 20 s par tour et un embarquement au bas de la roue.", recap: "Esquisser.", ans: "min 2 en t = 0, 20, 40; max 12 en t = 10, 30; axe h = 7",
    fig: gridW({ xmin: 0, xmax: 40, ymin: 0, ymax: 14 }, { x: 5, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)" }) },
];


export const WS = {
  code: "6.3",
  title: TITLE.slice(4),
  bigideas: S`Pour un point sur une roue qui tourne : axe = hauteur du moyeu, amplitude = rayon, période = durée (ou distance) d'un tour, max = moyeu + rayon, min = moyeu − rayon. Restreins le domaine et l'image à ce qui a du sens dans la situation.`,
  goals: ["Lire des graphiques sinusoïdaux réels.", "Relier les propriétés à la situation.", "Trouver les instants du max, du min et des valeurs sur l'axe.", "Donner le domaine et l'image en contexte."],
  curriculum: "D3.2, D3.4",
  vocab: [["Moyeu", "le centre de la roue = l'axe"], ["Rayon", "= l'amplitude"], ["Période", "la durée d'un tour"]],
  hook: "Montre une courte vidéo d'une grande roue. Fais une pause lorsqu'une nacelle est au sommet; demande à quelle hauteur elle se trouve et dans combien de temps elle y sera de nouveau.",
  concepts: [
    ["1. Le dictionnaire roue-graphique", S`${waveT((t) => 6 - 4 * cos(9 * t), { xmin: 0, xmax: 80, ymin: 0, ymax: 11 }, { x: 10, y: 1 }, { axis: 6, width: 5.5, xlabel: "t", ylabel: "h" })}Rayon 4, moyeu à 6, 40 s par tour.`],
    ["2. Les instants clés", "En bas à 0, sur l'axe à ¼ de tour, au sommet à ½ tour, sur l'axe à ¾ de tour."],
    ["3. Restrictions selon le contexte", "Seulement les instants pendant le tour de manège; des hauteurs entre le min et le max."],
  ],
  tips: ["Le rayon, et non le diamètre.", "La période est une durée.", "Deux passages par l'axe à chaque tour.", "Utilise des quarts de tour.", "Indique les unités."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
