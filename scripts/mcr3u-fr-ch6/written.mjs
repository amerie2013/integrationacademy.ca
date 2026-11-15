// MCR3U-FR chapitre 6 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mcr3u-ch6/written-data.mjs (mêmes figures, étiquettes en français; notation y = a sin(k(x − c)) + d).
//   node scripts/mcr3u-fr-ch6/written.mjs           -> essai à blanc
//   node scripts/mcr3u-fr-ch6/written.mjs --apply   -> téléverse les figures et insère les lignes absentes
import { waveD, cos, sin, acos, rd } from "./bank/fig.mjs";
import { runWritten } from "../mcr3u-fr/written-run.mjs";
import { TITLE as T1 } from "./l6_1.mjs";
import { TITLE as T2 } from "./l6_2.mjs";
import { TITLE as T3 } from "./l6_3.mjs";
import { TITLE as T4 } from "./l6_4.mjs";
import { TITLE as T5 } from "./l6_5.mjs";
import { TITLE as T6 } from "./l6_6.mjs";
import { TITLE as T7 } from "./l6_7.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6, 7: T7 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const TS = { xlabel: "t (s)", ylabel: "h (m)" };
const above = (360 - 2 * acos(-0.4)) / 4; // roue W(7) : −15cos(4t)+17 ≥ 23

export const WRITTEN = [
  W(1, "medium", 4, S`Le graphique montre le niveau de l'eau dans un réservoir qu'une pompe remplit et vide. (a) Explique pourquoi la fonction est périodique et donne sa période. (b) Donne le maximum, le minimum, l'axe et l'amplitude. (c) Prédis le niveau en $t=47$ min.`,
    S`(a) Le motif se répète exactement toutes les 8 min. (b) Max 9, min 1, axe $y=5$, amplitude 4. (c) $47=5\times8+7$ : comme en $t=7$, niveau 3. [1, 2, 1.]`,
    waveD([], { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, { x: 2, y: 1 }, { xlabel: "t (min)", ylabel: "niveau (m)", segs: [0, 8, 16].map((s) => ({ pts: [[s, 1], [s + 4, 9], [s + 8, 1]], color: "violet" })) })),
  W(2, "medium", 4, S`(a) Complète les graphiques de $y=\sin x$ et de $y=\cos x$ pour $0^\circ\le x\le360^\circ$ et énumère leurs zéros. (b) Utilise les graphiques pour expliquer pourquoi $\cos x=\sin(x+90^\circ)$. (c) Résous $\cos x=\frac12$ pour $0^\circ\le x\le720^\circ$.`,
    S`(a) sin : 0°, 180°, 360°; cos : 90°, 270°. (b) Chaque valeur du cosinus apparaît sur le graphique du sinus 90° plus loin; autrement dit, le cosinus est le sinus translaté de 90° vers la gauche. (c) 60°, 300°, 420°, 660°. [1, 1, 2.]`,
    waveD([(x) => sin(x), (x) => cos(x)], { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 45, y: 0.5 })),
  W(2, "hard", 5, S`(a) Résous $\sin x=\cos x$ pour $0^\circ\le x\le720^\circ$ et indique les solutions sur le graphique. (b) Pour quelles valeurs de $x$ dans $0^\circ\le x\le360^\circ$ a-t-on $\sin x>\cos x$? (c) Explique, à l'aide du cercle unitaire, pourquoi $\sin(-x)=-\sin x$ alors que $\cos(-x)=\cos x$.`,
    S`(a) $\tan x=1$ : 45°, 225°, 405°, 585°. (b) $45^\circ<x<225^\circ$. (c) La réflexion du point par rapport à l'axe des x change le signe de y, mais pas celui de x. [2, 2, 1.]`,
    waveD([(x) => sin(x), (x) => cos(x)], { xmin: 0, xmax: 720, ymin: -1.5, ymax: 1.5 }, { x: 90, y: 0.5 })),
  W(3, "medium", 4, S`Le graphique montre la hauteur d'une personne sur une grande roue. (a) Trouve le rayon, la hauteur du moyeu et la durée d'un tour. (b) Quand la personne est-elle au sommet pendant les 2 premières minutes? (c) Le tour de manège dure 3 tours de roue : donne le domaine et l'image.`,
    S`(a) Rayon 16 m, moyeu à 18 m, 40 s. (b) $t=20,\ 60,\ 100$ s. (c) $0\le t\le120$; $2\le h\le34$. [2, 1, 1.]`,
    waveD((t) => 18 - 16 * cos(9 * t), { xmin: 0, xmax: 120, ymin: 0, ymax: 36 }, { x: 10, y: 4 }, TS)),
  W(3, "hard", 5, S`Une roue à aubes de rayon 3 m a son centre à 1.2 m au-dessus de l'eau et fait un tour toutes les 18 s. Une palette part à la hauteur du centre, en montant. Sa hauteur est $h=1.2+3\sin(20t)$. (a) Explique chaque nombre de l'équation. (b) Trouve le point le plus bas de la palette. (c) Pendant combien de temps, à chaque tour, la palette est-elle sous l'eau?`,
    S`(a) 1.2 = hauteur du centre, 3 = rayon, 20 = 360/18 (degrés par seconde). (b) $-1.8$ m (1.8 m sous la surface). (c) Sous l'eau lorsque $\sin(20t)<-0.4$ : $20t$ de $${rd(180 + (Math.asin(0.4) * 180) / Math.PI, 1)}^\circ$ à $${rd(360 - (Math.asin(0.4) * 180) / Math.PI, 1)}^\circ$, donc $\approx${rd((180 - 2 * (Math.asin(0.4) * 180) / Math.PI) / 20, 2)}$ s. [2, 1, 2.]`,
    waveD((t) => 1.2 + 3 * sin(20 * t), { xmin: 0, xmax: 36, ymin: -3, ymax: 5 }, { x: 3, y: 1 }, { ...TS, axis: 0 })),
  W(4, "medium", 4, S`Pour $y=-3\cos(2x-60^\circ)+1$ : (a) récris la parenthèse sous la forme $k(x-c)$; (b) donne l'amplitude, la période, le déphasage et l'axe; (c) donne l'image et la valeur maximale, ainsi que l'endroit où se trouve le premier maximum après 0°.`,
    S`(a) $2(x-30^\circ)$. (b) 3 (avec réflexion), 180°, 30° vers la droite, $y=1$. (c) $-2\le y\le4$; max 4 lorsque $\cos=-1$ : $2(x-30^\circ)=180^\circ\Rightarrow x=120^\circ$. [1, 2, 1.]`,
    waveD((x) => -3 * cos(2 * x - 60) + 1, { xmin: 0, xmax: 360, ymin: -3, ymax: 5 }, { x: 30, y: 1 }, { axis: 1 })),
  W(4, "hard", 5, S`Le graphique gris est $y=\sin x$; le graphique violet en est une transformation. (a) Décris les transformations dans l'ordre. (b) Écris son équation. (c) Un ou une élève affirme que la période est de 120° « parce que k = 120 ». Explique l'erreur.`,
    S`(a) Compression horizontale de facteur $\frac13$, 15° vers la droite, étirement vertical de facteur 2, 1 vers le bas. (b) $y=2\sin(3(x-15^\circ))-1$. (c) k = 3; la période est 360°/k = 120° — l'élève a confondu k avec la période. [2, 2, 1.]`,
    waveD([{ f: (x) => sin(x), color: "gray" }, { f: (x) => 2 * sin(3 * (x - 15)) - 1, color: "violet" }], { xmin: 0, xmax: 360, ymin: -4, ymax: 2 }, { x: 15, y: 1 })),
  W(5, "medium", 4, S`(a) Énumère les cinq points clés d'un cycle de $y=\cos x$. (b) Transforme-les selon $y=2\cos(3(x+20^\circ))-1$. (c) Esquisse un cycle et donne le domaine et l'image.`,
    S`(a) (0°,1), (90°,0), (180°,−1), (270°,0), (360°,1). (b) (−20°,1), (10°,−1), (40°,−3), (70°,−1), (100°,1). (c) Domaine : tous les x réels; image $-3\le y\le1$. [1, 2, 1.]`,
    waveD((x) => 2 * cos(3 * (x + 20)) - 1, { xmin: -30, xmax: 120, ymin: -4, ymax: 2 }, { x: 15, y: 1 }, { axis: -1, pts: [[-20, 1], [10, -1], [40, -3], [70, -1], [100, 1]] })),
  W(5, "hard", 5, S`(a) Esquisse deux cycles de $y=-4\sin\left(\frac12(x-30^\circ)\right)+2$ à l'aide des points clés. (b) Trouve ses abscisses à l'origine dans le premier cycle. (c) Explique pourquoi l'ordre « diviser par k, puis ajouter c » est important lorsqu'on transforme les abscisses.`,
    S`(a) Points clés (30°,2), (210°,−2), (390°,2), (570°,6), (750°,2); période 720°. (b) $\sin(\frac12(x-30^\circ))=\frac12$ : $\frac12(x-30^\circ)=30^\circ,150^\circ\Rightarrow x=90^\circ,330^\circ$. (c) La parenthèse est $k(x-c)$ : x est translaté après avoir été étiré. [2, 2, 1.]`,
    waveD((x) => -4 * sin(0.5 * (x - 30)) + 2, { xmin: 0, xmax: 1440, ymin: -3, ymax: 7 }, { x: 180, y: 1 }, { axis: 2 })),
  W(6, "medium", 4, S`(a) Écris une équation avec cosinus pour le graphique. (b) Écris une équation avec sinus pour le même graphique. (c) Vérifie l'une de tes équations en un point que tu n'as pas utilisé.`,
    S`(a) Max (20°, 7), min (80°, 1) : $a=3$, $d=4$, période 120°, $k=3$ : $y=3\cos(3(x-20^\circ))+4$. (b) Passage par l'axe en montant à $20^\circ-30^\circ=-10^\circ$ : $y=3\sin(3(x+10^\circ))+4$. (c) p. ex. $x=50^\circ$ : $3\cos90^\circ+4=4$ ✓. [2, 1, 1.]`,
    waveD((x) => 3 * cos(3 * (x - 20)) + 4, { xmin: -30, xmax: 240, ymin: 0, ymax: 8 }, { x: 15, y: 1 }, { pts: [[20, 7], [80, 1]] })),
  W(6, "hard", 5, S`Une sinusoïde a un minimum en $(-15^\circ,-6)$ et le maximum suivant en $(45^\circ,2)$. (a) Trouve son amplitude, son axe et sa période. (b) Écris une équation avec cosinus où $a<0$. (c) Écris une équation avec cosinus où $a>0$ et explique pourquoi les deux sont correctes.`,
    S`(a) Amplitude 4, axe $y=-2$, période 120°. (b) $y=-4\cos(3(x+15^\circ))-2$. (c) $y=4\cos(3(x-45^\circ))-2$ : l'une commence au min, l'autre au max — c'est la même courbe. [2, 1, 2.]`,
    waveD((x) => -4 * cos(3 * (x + 15)) - 2, { xmin: -60, xmax: 180, ymin: -7, ymax: 3 }, { x: 15, y: 1 }, { pts: [[-15, -6], [45, 2]] })),
  W(7, "medium", 4, S`Une grande roue a un rayon de 15 m, son moyeu est à 17 m du sol et elle fait un tour toutes les 90 s. On embarque au bas de la roue. (a) Écris un modèle $h(t)$. (b) Trouve la hauteur après 1 min. (c) Pendant combien de temps, à chaque tour, une personne est-elle au-dessus de 23 m?`,
    S`(a) $h=-15\cos(4t)+17$. (b) $-15\cos240^\circ+17=24.5$ m. (c) $\cos(4t)\le-0.4$ : $4t$ de $${rd(acos(-0.4), 1)}^\circ$ à $${rd(360 - acos(-0.4), 1)}^\circ$, donc $\approx${rd(above, 1)}$ s. [1, 1, 2.]`,
    waveD((t) => -15 * cos(4 * t) + 17, { xmin: 0, xmax: 180, ymin: 0, ymax: 34 }, { x: 15, y: 4 }, { ...TS, lines: [{ m: 0, b: 23, color: "amber", dash: true }] })),
  W(7, "hard", 5, S`Une ville a 16.1 h d'ensoleillement le jour 172 et 8.3 h le jour 355. (a) Écris un modèle avec cosinus $L(t)$, t en jours. (b) Prédis la durée du jour le jour 60. (c) Pendant combien de jours par année y a-t-il au moins 13.2 h d'ensoleillement? (d) Comment le modèle changerait-il pour une ville plus au nord, où les journées d'été sont plus longues et les journées d'hiver plus courtes?`,
    S`(a) $L=3.9\cos\left(\frac{360}{365}(t-172)\right)+12.2$. (b) $\approx${rd(3.9 * cos((360 / 365) * (60 - 172)) + 12.2, 2)}$ h. (c) $3.9\cos\theta+12.2\ge13.2\Rightarrow\cos\theta\ge\frac1{3.9}\approx0.256\Rightarrow|\theta|\le${rd(acos(1 / 3.9), 1)}^\circ$; en jours, $2\times${rd(acos(1 / 3.9), 1)}\times\frac{365}{360}\approx${rd((2 * acos(1 / 3.9) * 365) / 360, 0)}$ jours. (d) Une amplitude plus grande; l'axe et la période restent à peu près les mêmes. [1, 1, 2, 1.]`,
    waveD((t) => 3.9 * cos((360 / 365) * (t - 172)) + 12.2, { xmin: 0, xmax: 365, ymin: 6, ymax: 18 }, { x: 30, y: 2 }, { xlabel: "jour", ylabel: "heures", lines: [{ m: 0, b: 13.2, color: "amber", dash: true }] })),
];

await runWritten(WRITTEN, "../mcr3u-ch6/written-data.mjs", import.meta.url);
