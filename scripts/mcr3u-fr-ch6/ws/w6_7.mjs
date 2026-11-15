// MCR3U-FR Fiche 6.7 — Résoudre des problèmes à l'aide de modèles sinusoïdaux (édition enseignant)
// Notation française : y = a cos(k(t − c)) + d (c = déphasage, d = axe).
import { waveT, gridW, cos, acos, f, sin } from "./sinT.mjs";
import { TITLE } from "../l6_7.mjs";

const S = String.raw;
const w = (t) => -20 * cos(3 * t) + 22;
const k2 = 360 / 12.4, tide = (t) => 3 * cos(k2 * (t - 4)) + 5;
const day = (t) => 4 * cos((360 / 365) * (t - 172)) + 12.2;
const tideBelow = (360 - 2 * acos(-0.5)) / k2;
const p6 = (t) => 3.2 * cos(28.8 * (t - 1)) + 4.2;
const p7 = (t) => 16 * cos((360 / 365) * (t - 200)) + 12;
const p10 = (2 * acos(1.8 / 3.2)) / 28.8;

const EXAMPLES = [
  { title: "Un modèle de grande roue", q: "Une roue de rayon 20 m a son moyeu à 22 m de haut et fait un tour toutes les 120 s. On embarque au bas de la roue. Écris un modèle et trouve la hauteur en t = 40 s.",
    fig: waveT(w, { xmin: 0, xmax: 240, ymin: 0, ymax: 45 }, { x: 30, y: 5 }, { axis: 22, xlabel: "t (s)", ylabel: "h (m)", pts: [[40, w(40), "t = 40"]] }),
    steps: [S`\textbf{Paramètres :} $a=20$, $d=22$, $k=\frac{360}{120}=3$.`,
      S`\textbf{Départ en bas :} utilise un cosinus négatif : $h=-20\cos(3t)+22$.`,
      S`\textbf{Évaluer :} $h(40)=-20\cos120^\circ+22=-20\left(-\frac12\right)+22=32$.`,
      S`\textbf{Vérification :} $h(0)=2$ m, soit le moyeu moins le rayon \checkmark`],
    ans: "32 m" },
  { title: "Un modèle de marée", q: "La marée haute est de 8 m à 4 h 00; la marée basse suivante est de 2 m à 10 h 12. Écris un modèle et trouve la profondeur à 7 h 00.",
    fig: waveT(tide, { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, { x: 2, y: 1 }, { axis: 5, xlabel: "t (h)", ylabel: "D (m)", pts: [[4, 8, "4 h 00"], [10.2, 2, "10 h 12"], [7, tide(7), "7 h 00"]] }),
    steps: [S`\textbf{Taille :} $a=\frac{8-2}2=3$; $d=\frac{8+2}2=5$.`,
      S`\textbf{Période :} de la marée haute à la marée basse, il y a $6.2$ h; la période est donc de $12.4$ h et $k=\frac{360}{12.4}\approx${f(k2)}$.`,
      S`\textbf{Modèle :} la marée haute en $t=4$ donne $D=3\cos(${f(k2)}(t-4))+5$.`,
      S`\textbf{Évaluer :} en $t=7$ : $D\approx${f(tide(7))}$ m. La marée descend et se trouve près du milieu \checkmark`],
    ans: S`$\approx${f(tide(7))}$ m` },
  { title: "La durée du jour", q: "La durée du jour varie de 16.2 h (jour 172) à 8.2 h. Écris un modèle avec cosinus et trouve la durée du jour le jour 30.",
    fig: waveT(day, { xmin: 0, xmax: 365, ymin: 6, ymax: 18 }, { x: 50, y: 2 }, { axis: 12.2, xlabel: "jour", ylabel: "L (h)", pts: [[172, 16.2, "jour 172"], [30, day(30), "jour 30"]] }),
    steps: [S`\textbf{Taille :} $a=\frac{16.2-8.2}2=4$; $d=\frac{16.2+8.2}2=12.2$.`,
      S`\textbf{Période :} $365$ jours : $k=\frac{360}{365}$.`,
      S`\textbf{Translation :} max le jour $172$ : $c=172$.`,
      S`\textbf{Évaluer :} $L(30)=4\cos\left(\frac{360}{365}(30-172)\right)+12.2\approx${f(day(30))}$ h.`],
    ans: S`$\approx${f(day(30))}$ h` },
  { title: "Un thermostat", q: "La température d'une pièce varie entre 19°C et 23°C selon un cycle de 2 heures, et elle est maximale en t = 0.5 h. Écris un modèle.",
    fig: waveT((t) => 2 * cos(180 * (t - 0.5)) + 21, { xmin: 0, xmax: 5, ymin: 18, ymax: 24 }, { x: 0.5, y: 1 }, { axis: 21, xlabel: "t (h)", ylabel: "T", pts: [[0.5, 23, "(0.5, 23)"], [1.5, 19, "(1.5, 19)"]] }),
    steps: [S`\textbf{Taille :} $a=\frac{23-19}2=2$; $d=21$.`,
      S`\textbf{$k$ :} $\frac{360}2=180$.`,
      S`\textbf{Translation :} maximum à $0.5$ h : $c=0.5$.`,
      S`\textbf{Vérification :} $t=1.5$ : $2\cos180^\circ+21=19$ \checkmark`],
    ans: S`$T=2\cos(180(t-0.5))+21$` },
  { title: "Modifier les conditions", q: "La roue de l'exemple 1 est modifiée pour faire un tour toutes les 90 s, et son moyeu est abaissé de 1 m. Écris le nouveau modèle.",
    fig: waveT([w, (t) => -20 * cos(4 * t) + 21], { xmin: 0, xmax: 180, ymin: 0, ymax: 45 }, { x: 30, y: 5 }, { xlabel: "t (s)", ylabel: "h (m)", pts: [[45, 41, "(45, 41)"]], cap: "violet l'ancien modèle, ambre le nouveau" }),
    steps: [S`\textbf{Vitesse :} $k=\frac{360}{90}=4$.`,
      S`\textbf{Moyeu :} $d=22-1=21$.`,
      S`\textbf{Rayon :} inchangé, donc $a$ reste $-20$.`,
      S`\textbf{Vérification :} sommet en $t=45$ : $20+21=41$ m \checkmark`],
    ans: S`$h=-20\cos(4t)+21$` },
  { title: "Au-dessus d'un niveau", q: "Dans l'exemple 1, pendant combien de temps, à chaque tour, la personne est-elle au-dessus de 32 m?",
    fig: waveT(w, { xmin: 0, xmax: 130, ymin: 0, ymax: 45 }, { x: 20, y: 5 }, { lines: [{ m: 0, b: 32, color: "amber", dash: true }], xlabel: "t (s)", ylabel: "h (m)", pts: [[40, 32, "(40, 32)"], [80, 32, "(80, 32)"]] }),
    steps: [S`\textbf{Poser l'inéquation :} $-20\cos(3t)+22\ge32$, donc $\cos(3t)\le-\frac12$ (le sens de l'inégalité change).`,
      S`\textbf{Angles :} $3t$ va de $120^\circ$ à $240^\circ$.`,
      S`\textbf{Instants :} $t$ va de $40$ s à $80$ s.`,
      S`\textbf{Durée :} $40$ s, le tiers du tour \checkmark`],
    ans: "40 s par tour" },
  { title: "Au-dessous d'un niveau", q: "Dans l'exemple 2, pendant combien de temps, à chaque cycle, la profondeur est-elle inférieure à 3.5 m?",
    fig: waveT(tide, { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, { x: 2, y: 1 }, { lines: [{ m: 0, b: 3.5, color: "amber", dash: true }], xlabel: "t (h)", ylabel: "D (m)" }),
    steps: [S`\textbf{Poser l'inéquation :} si $\theta$ est l'angle, $3\cos\theta+5<3.5$, donc $\cos\theta<-\frac12$.`,
      S`\textbf{Angles :} $\theta$ va de $120^\circ$ à $240^\circ$, une largeur de $120^\circ$.`,
      S`\textbf{Durée :} divise par $k$ : $\frac{120}{${f(k2)}}\approx${f(tideBelow)}$ h.`,
      S`\textbf{Vérification :} c'est le tiers du cycle de $12.4$ h \checkmark`],
    ans: S`$\approx${f(tideBelow)}$ h` },
  { title: "Vérifier l'ajustement", q: "Dans l'exemple 3, la durée du jour mesurée le jour 355 était de 8.3 h. Le modèle est-il proche?",
    fig: waveT(day, { xmin: 0, xmax: 365, ymin: 6, ymax: 18 }, { x: 50, y: 2 }, { xlabel: "jour", ylabel: "L (h)", pts: [[355, 8.3, "(355, 8.3)"]] }),
    steps: [S`\textbf{Évaluer :} $L(355)=4\cos\left(\frac{360}{365}(183)\right)+12.2\approx${f(day(355))}$.`,
      S`\textbf{Comparer :} la valeur mesurée est de $8.3$ h.`,
      S`\textbf{Conclure :} une différence d'environ $0.1$ h; l'ajustement est donc bon près du minimum.`],
    ans: "à environ 0.1 h près" },
  { title: "Prédictions éloignées", q: "Utilise l'exemple 3 pour prédire la durée du jour le jour 400 (l'année suivante).",
    fig: waveT(day, { xmin: 0, xmax: 420, ymin: 6, ymax: 18 }, { x: 50, y: 2 }, { xlabel: "jour", ylabel: "L (h)", pts: [[35, day(35), "jour 35"], [400, day(35), "jour 400"]] }),
    steps: [S`\textbf{Période :} le motif se répète tous les $365$ jours.`,
      S`\textbf{Retirer une période :} $400-365=35$, donc le jour $400$ correspond au jour $35$.`,
      S`\textbf{Évaluer :} $L(35)\approx${f(day(35))}$ h.`],
    ans: S`$\approx${f(day(35))}$ h` },
];

const PROBLEMS = [
  { level: 1, q: S`Trouve le maximum de $y=6\sin(20t)+9$.`, recap: "Max.", ans: "15" },
  { level: 1, q: S`Trouve la période de $y=2\cos(12t)$.`, recap: "Période.", ans: "30" },
  { level: 1, q: S`Évalue $y=-5\cos(60t)+8$ en $t=3$.`, recap: "Évaluer.", ans: "13" },
  { level: 2, q: "Une roue a un rayon de 9 m, un moyeu à 11 m et fait un tour toutes les 36 s; on embarque au bas de la roue. Écris un modèle et trouve h(9).", recap: "Modèle.", ans: S`$h=-9\cos(10t)+11$; $h(9)=11$ m` },
  { level: 2, q: "Pour la roue du problème 4, trouve h(24).", recap: "Évaluer.", ans: S`$-9\cos240^\circ+11=15.5$ m` },
  { level: 2, q: "La marée haute est de 7.4 m à 1 h 00 et la marée basse suivante est de 1.0 m à 7 h 15. Écris un modèle et trouve la profondeur à 10 h 00.", recap: "Marée.", ans: S`$D=3.2\cos(28.8(t-1))+4.2$; $D(10)\approx${f(p6(10))}$ m` },
  { level: 2, q: "Les températures maximales quotidiennes varient de 28°C (jour 200) à −4°C. Écris un modèle et estime la température maximale le jour 100.", recap: "Température.", ans: S`$T=16\cos\left(\frac{360}{365}(t-200)\right)+12$; $\approx${f(p7(100), 1)}$°C` },
  { level: 2, q: "Dans un modèle de grande roue, quel paramètre change si le rayon augmente? Explique.", recap: "Conditions.", ans: "a (l'amplitude) — et d aussi si la hauteur d'embarquement doit rester la même" },
  { level: 3, space: 4, q: "Pour la roue du problème 4, pendant combien de temps, à chaque tour, la personne est-elle au-dessus de 15.5 m?", recap: "Au-dessus d'un niveau.", ans: S`$\cos(10t)\le-\frac12$ : de 120° à 240°, 12 s` },
  { level: 3, space: 5, q: "Pour la marée du problème 6, pendant combien d'heures par cycle la profondeur est-elle d'au moins 6 m?", recap: "Au-dessus d'un niveau.", ans: S`$\cos\theta\ge0.5625$ : $\approx${f(p10)}$ h`,
    fig: waveT(p6, { xmin: 0, xmax: 24, ymin: 0, ymax: 9 }, { x: 2, y: 1 }, { lines: [{ m: 0, b: 6, color: "amber", dash: true }], xlabel: "t (h)", ylabel: "D (m)" }) },
  { level: 3, space: 5, q: "Un ressort se déplace entre 8 cm et 20 cm au-dessus d'une table, avec une période de 2 s, en partant du bas. Écris un modèle et trouve la hauteur en t = 1.25 s.", recap: "Ressort.", ans: S`$h=-6\cos(180t)+14$; $h(1.25)\approx${f(-6 * cos(225) + 14)}$ cm` },
  { level: 3, space: 4, q: "Explique pourquoi un modèle de la durée du jour utilise une période de 365 (jours) et non de 12.", recap: "Unités.", ans: "t est mesuré en jours; un cycle correspond à un an = 365 jours" },
  { level: 3, space: 5, q: "Conçois un modèle pour une grande roue qui fait un tour en 3 min, avec une hauteur maximale de 40 m et minimale de 2 m, et un embarquement au bas de la roue (t en secondes). Esquisse deux tours.", recap: "Concevoir.", ans: S`$h=-19\cos(2t)+21$`,
    fig: gridW({ xmin: 0, xmax: 360, ymin: 0, ymax: 45 }, { x: 30, y: 5 }, { xlabel: "t (s)", ylabel: "h (m)" }) },
];

export const WS = {
  code: "6.7",
  title: TITLE.slice(4),
  bigideas: S`Construis un modèle à partir du max, du min, de la période et d'un point de départ : $a$ et $d$ à partir du max et du min, $k=\frac{360}{\text{période}}$, un cosinus à partir d'un max, $-a\cos$ pour un départ en bas. Utilise-le pour prédire, pour voir comment des conditions modifiées changent les paramètres et pour trouver quand il est au-dessus ou au-dessous d'un niveau.`,
  goals: ["Écrire des modèles à partir de descriptions.", "Prédire des valeurs.", "Expliquer les changements de paramètres.", "Résoudre des problèmes de niveau."],
  curriculum: "D3.1, D3.3, D3.4",
  vocab: [["Modèle", "une équation pour une situation réelle"], ["Seuil", "un niveau qui nous intéresse"], ["Ajustement", "dans quelle mesure le modèle est proche des données"]],
  hook: "Montre une table des marées pour un port. Demande à quel moment un bateau qui a besoin de 3 m d'eau peut partir en toute sécurité.",
  concepts: [
    ["1. Des mots à un modèle", S`${waveT((t) => -6 * cos(12 * t) + 8, { xmin: 0, xmax: 60, ymin: 0, ymax: 16 }, { x: 5, y: 2 }, { axis: 8, width: 5.5, xlabel: "t", ylabel: "h" })}Rayon 6, moyeu à 8, 30 s par tour, départ en bas.`],
    ["2. Problèmes de niveau", "Pose modèle = niveau, résous pour l'angle sur un cycle, convertis en temps."],
    ["3. Modifier les conditions", "Plus vite → k; plus grand → a; plus haut → d; départ plus tard → c."],
  ],
  tips: ["k = 360/période.", "Départ en bas → −a cos.", "Convertis les heures de l'horloge en heures écoulées.", "Deux points d'intersection par cycle.", "Compare aux données."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
