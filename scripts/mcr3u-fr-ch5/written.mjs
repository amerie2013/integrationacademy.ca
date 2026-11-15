// MCR3U-FR chapitre 5 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C),
// chacune avec une figure. Miroir de ../mcr3u-ch5/written-data.mjs (mêmes figures, étiquettes en français).
//   node scripts/mcr3u-fr-ch5/written.mjs           -> essai à blanc
//   node scripts/mcr3u-fr-ch5/written.mjs --apply   -> téléverse les figures et insère les lignes absentes
import { triD, rightD, armD, unitD, boxD, towerD, wireD, sin, cos, tan, asin, atan, lawC, angC, rd } from "./bank/fig.mjs";
import { runWritten } from "../mcr3u-fr/written-run.mjs";
import { TITLE as T1 } from "./l5_1.mjs";
import { TITLE as T2 } from "./l5_2.mjs";
import { TITLE as T3 } from "./l5_3.mjs";
import { TITLE as T4 } from "./l5_4.mjs";
import { TITLE as T5 } from "./l5_5.mjs";
import { TITLE as T6 } from "./l5_6.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
// 4 : CCA, A = 38°, a = 9, b = 13
const B4 = asin((13 * sin(38)) / 9), C4a = 180 - 38 - B4, C4b = 180 - 38 - (180 - B4);
const Cx = 13 * cos(38), Cy = 13 * sin(38), dx = Math.sqrt(81 - Cy * Cy);
// 6–7 : tour
const AC6 = (140 * sin(68)) / sin(57), h6 = AC6 * tan(21);
const cot = (d) => 1 / tan(d), h12 = 80 / Math.sqrt(cot(38) ** 2 + cot(27) ** 2);

export const WRITTEN = [
  W(1, "medium", 4, S`La figure montre un triangle 30°–60°–90° formé par la moitié d'un triangle équilatéral de côté 2. a) Trouve la valeur exacte du côté manquant. b) Utilise le triangle pour écrire les valeurs exactes de $\sin60^\circ$, $\cos60^\circ$ et $\tan30^\circ$. c) Évalue $\sin^2 60^\circ-\cos^2 60^\circ$ de façon exacte.`,
    S`a) $\sqrt{4-1}=\sqrt3$. b) $\frac{\sqrt3}2$, $\frac12$, $\frac1{\sqrt3}$. c) $\frac34-\frac14=\frac12$. [1, 2, 1.]`,
    triD([[0, 0], [1, 0], [1, Math.sqrt(3)]], ["60°", "", "30°"], { marks: [[0.5, 0, "1"], [0.35, 0.95, "2"], [1, 0.85, "?"]] })),
  W(1, "hard", 5, S`Du toit d'un édifice de 36 m, l'angle d'élévation du sommet d'une tour plus haute est de 24° et l'angle de dépression de sa base est de 38°. a) Dessine un schéma annoté. b) Trouve la distance horizontale entre les deux constructions. c) Trouve la hauteur de la tour. d) Explique pourquoi l'angle de dépression est égal à l'angle d'élévation de la base de la tour jusqu'au toit.`,
    S`b) $d=\frac{36}{\tan38^\circ}\approx${rd(36 / tan(38), 1)}$ m. c) $36+d\tan24^\circ\approx${rd(36 + (36 / tan(38)) * tan(24), 1)}$ m. d) Angles alternes-internes entre des horizontales parallèles. [1, 1, 2, 1.]`,
    triD([[0, 0], [0, 36], [36 / tan(38), 36 + (36 / tan(38)) * tan(24)], [36 / tan(38), 0]], ["", "toit", "sommet", "base"], { open: true, extra: [{ pts: [[0, 0], [36 / tan(38), 0]], color: "green" }, { pts: [[0, 36], [36 / tan(38), 36]], color: "gray" }, { pts: [[0, 36], [36 / tan(38), 0]], color: "red" }] })),
  W(2, "medium", 4, S`Le point $(-8,15)$ est sur le côté terminal de θ. a) Trouve $r$ et les trois rapports de base. b) Trouve l'angle de référence et θ, au dixième près. c) Trouve l'autre angle entre 0° et 360° qui a le même sinus.`,
    S`a) $r=17$; $\sin\theta=\frac{15}{17}$, $\cos\theta=-\frac8{17}$, $\tan\theta=-\frac{15}8$. b) $\beta\approx${rd(atan(15 / 8), 1)}^\circ$, $\theta\approx${rd(180 - atan(15 / 8), 1)}^\circ$. c) $\beta\approx${rd(atan(15 / 8), 1)}^\circ$. [2, 1, 1.]`,
    armD(-8, 15, "(−8, 15)")),
  W(2, "hard", 5, S`a) Résous $2\cos^2\theta+3\cos\theta+1=0$ pour $0^\circ\le\theta\le360^\circ$. b) Représente les solutions sur le cercle unité de la figure. c) Explique pourquoi $\sin\theta=1.2$ n'a aucune solution.`,
    S`a) $(2\cos\theta+1)(\cos\theta+1)=0$ : $\cos\theta=-\frac12$ donne $120^\circ,240^\circ$; $\cos\theta=-1$ donne $180^\circ$. b) Trois points sur la moitié gauche du cercle. c) Sur le cercle unité, $-1\le y\le1$. [3, 1, 1.]`,
    unitD([[120, "120°"], [180, "180°"], [240, "240°"]], { vlines: [{ x: -0.5, color: "amber", dash: true }] })),
  W(3, "medium", 4, S`$\cos\theta=-\frac{20}{29}$ et θ est dans le quadrant 3. a) Esquisse θ et indique un point de son côté terminal. b) Trouve les cinq autres rapports trigonométriques. c) Trouve θ, au dixième près.`,
    S`a) $(-20,-21)$, $r=29$. b) $\sin\theta=-\frac{21}{29}$, $\tan\theta=\frac{21}{20}$, $\csc\theta=-\frac{29}{21}$, $\sec\theta=-\frac{29}{20}$, $\cot\theta=\frac{20}{21}$. c) $180^\circ+${rd(atan(21 / 20), 1)}^\circ=${rd(180 + atan(21 / 20), 1)}^\circ$. [1, 2, 1.]`,
    armD(-20, -21, "(−20, −21)")),
  W(3, "hard", 5, S`a) Démontre que $\dfrac{\tan\theta}{\sec\theta-1}=\dfrac{\sec\theta+1}{\tan\theta}$. b) Démontre que $\sin^2\theta\tan^2\theta=\tan^2\theta-\sin^2\theta$. c) Le triangle rectangle de la figure a une hypoténuse de 1. Utilise-le pour expliquer pourquoi $1+\tan^2\theta=\sec^2\theta$.`,
    S`a) Après le produit croisé, les deux membres donnent $\sec^2\theta-1=\tan^2\theta$; ou multiplie le MG par $\frac{\sec\theta+1}{\sec\theta+1}$. b) MD $=\frac{\sin^2\theta}{\cos^2\theta}-\sin^2\theta=\frac{\sin^2\theta(1-\cos^2\theta)}{\cos^2\theta}=$ MG. c) Divise $\sin^2\theta+\cos^2\theta=1$ par $\cos^2\theta$. [2, 2, 1.]`,
    rightD(cos(32), sin(32), ["θ", "", ""], [[cos(32) / 2, 0, "cos θ"], [cos(32), sin(32) / 2, "sin θ"], [0.36, 0.33, "1"]])),
  W(4, "medium", 4, S`Dans $\triangle ABC$, $\angle A=38^\circ$, $a=9$ et $b=13$. a) Calcule $h=b\sin A$ et utilise cette valeur pour expliquer combien de triangles sont possibles. b) Trouve les deux mesures possibles de ∠B. c) Trouve les deux mesures possibles de ∠C.`,
    S`a) $h\approx${rd(13 * sin(38))}$; $h<a<b$ : deux triangles. b) $B\approx${rd(B4, 1)}^\circ$ ou $${rd(180 - B4, 1)}^\circ$. c) $C\approx${rd(C4a, 1)}^\circ$ ou $${rd(C4b, 1)}^\circ$. [1, 2, 1.]`,
    triD([[0, 0], [Cx + dx, 0], [Cx, Cy]], ["A 38°", "B₁", "C"], { extra: [{ pts: [[Cx, Cy], [Cx - dx, 0]], color: "red" }, { pts: [[Cx, Cy], [Cx, 0]], color: "gray" }], marks: [[Cx - dx, 0, "B₂"], [Cx, Cy / 2, "h"]] })),
  W(4, "hard", 5, S`Deux phares A et B sont distants de 25 km sur une côte rectiligne. Un navire S est aperçu de A à 41° et de B à 63° par rapport à la côte. a) Trouve la distance de A au navire. b) Trouve la plus courte distance du navire à la côte. c) Le navire navigue parallèlement à la côte. Explique pourquoi l'angle en A change, mais pas la réponse à b).`,
    S`a) $\angle S=76^\circ$; $AS=\frac{25\sin63^\circ}{\sin76^\circ}\approx${rd((25 * sin(63)) / sin(76))}$ km. b) $AS\sin41^\circ\approx${rd(((25 * sin(63)) / sin(76)) * sin(41))}$ km. c) Sa distance perpendiculaire reste constante. [2, 2, 1.]`,
    triD([[0, 0], [25, 0], [((25 * sin(63)) / sin(76)) * cos(41), ((25 * sin(63)) / sin(76)) * sin(41)]], ["A", "B", "S"], { extra: [{ pts: [[((25 * sin(63)) / sin(76)) * cos(41), ((25 * sin(63)) / sin(76)) * sin(41)], [((25 * sin(63)) / sin(76)) * cos(41), 0]], color: "red" }], marks: [[12.5, 0, "25 km"]] })),
  W(5, "medium", 4, S`Un jardin triangulaire a des côtés de 9 m, 12 m et 16 m. a) Sans calculatrice, détermine si son plus grand angle est aigu, droit ou obtus. b) Trouve le plus grand angle. c) Trouve l'aire du jardin.`,
    S`a) $81+144=225<256$ : obtus. b) $\cos\theta=\frac{225-256}{216}$ : $\theta\approx${rd(angC(16, 9, 12), 1)}^\circ$. c) $\frac12(9)(12)\sin\theta\approx${rd(0.5 * 9 * 12 * sin(angC(16, 9, 12)), 1)}$ m². [1, 2, 1.]`,
    triD([[0, 0], [16, 0], [12 * cos(angC(9, 12, 16)), 12 * sin(angC(9, 12, 16))]], ["", "", ""], { marks: [[8, 0, "16"], [6 * cos(angC(9, 12, 16)) - 0.6, 6 * sin(angC(9, 12, 16)) + 0.4, "12"], [(16 + 12 * cos(angC(9, 12, 16))) / 2 + 0.6, 6 * sin(angC(9, 12, 16)), "9"]] })),
  W(5, "hard", 5, S`Un navire quitte le port et parcourt 40 km. Il tourne ensuite de 50° vers la droite et parcourt 65 km. a) Explique pourquoi l'angle intérieur du triangle au point du virage mesure 130°. b) Trouve la distance entre le navire et le port. c) Trouve l'angle au port entre le premier trajet et la ligne directe vers le navire. d) Explique pourquoi l'utilisation de la loi des sinus en c) est sûre ici.`,
    S`a) Angles sur une droite : $180^\circ-50^\circ$. b) $d=\sqrt{40^2+65^2-2(40)(65)\cos130^\circ}\approx${rd(lawC(40, 65, 130), 1)}$ km. c) $\sin\theta=\frac{65\sin130^\circ}{d}$ : $\theta\approx${rd(asin((65 * sin(130)) / lawC(40, 65, 130)), 1)}^\circ$. d) Le triangle a déjà un angle obtus; les autres sont donc aigus. [1, 2, 1, 1.]`,
    triD([[0, 0], [40, 0], [40 + 65 * cos(-50), 65 * sin(-50)]], ["port", "virage", "navire"], { marks: [[20, 0, "40 km"]] })),
  W(6, "medium", 4, S`A et B sont distants de 140 m sur un terrain plat. Un point C à la base d'une tour donne $\angle CAB=55^\circ$ et $\angle CBA=68^\circ$. À partir de A, l'angle d'élévation du sommet T est de 21°. a) Repère le triangle horizontal et le triangle vertical. b) Trouve AC. c) Trouve la hauteur CT.`,
    S`a) ABC au sol; ACT vertical, rectangle en C. b) $\angle C=57^\circ$; $AC=\frac{140\sin68^\circ}{\sin57^\circ}\approx${rd(AC6, 1)}$ m. c) $CT=AC\tan21^\circ\approx${rd(h6, 1)}$ m. [1, 2, 1.]`,
    towerD(140, 55, AC6, h6)),
  W(6, "hard", 5, S`L'observateur P est plein sud d'un mât radio et en voit le sommet sous un angle de 38°. L'observateur Q est plein ouest du mât et en voit le sommet sous un angle de 27°. P et Q sont distants de 80 m. a) Explique pourquoi le triangle PCQ au sol (C étant la base du mât) a un angle droit. b) Écris PC et QC en fonction de la hauteur h. c) Trouve h.`,
    S`a) Le sud et l'ouest sont perpendiculaires. b) $PC=h\cot38^\circ$, $QC=h\cot27^\circ$. c) $h^2(\cot^2 38^\circ+\cot^2 27^\circ)=80^2$ : $h\approx${rd(h12, 1)}$ m. [1, 2, 2.]`,
    wireD([{ pts: [[0, 0, 0], [0, 0, 60]], color: "blue" }, { pts: [[0, 0, 60], [h12 / tan(38) * 1.6, 0, 0]], color: "red" }, { pts: [[0, 0, 60], [0, -h12 / tan(27) * 1.6, 0]], color: "red" }, { pts: [[h12 / tan(38) * 1.6, 0, 0], [0, 0, 0], [0, -h12 / tan(27) * 1.6, 0]], color: "green" }], [[0, 0, 60, "sommet"], [0, 0, 0, "C"], [h12 / tan(38) * 1.6, 0, 0, "P"], [0, -h12 / tan(27) * 1.6, 0, "Q"]])),
  W(6, "hard", 4, S`Une caisse de rangement mesure 20 cm sur 15 cm sur 12 cm. a) Trouve la diagonale de la base de 20 sur 15. b) Trouve la diagonale de l'espace. c) Trouve l'angle que forme la diagonale de l'espace avec la base, et explique quel triangle rectangle tu as utilisé.`,
    S`a) $25$ cm. b) $\sqrt{625+144}=\sqrt{769}\approx${rd(Math.sqrt(769))}$ cm. c) $\tan^{-1}\frac{12}{25}\approx${rd(atan(12 / 25), 1)}^\circ$, à l'aide du triangle vertical de cathètes 25 et 12. [1, 1, 2.]`,
    boxD(20, 15, 12, [{ pts: [[0, 0, 0], [20, 15, 0]], color: "amber" }, { pts: [[0, 0, 0], [20, 15, 12]], color: "red" }, { pts: [[20, 15, 0], [20, 15, 12]], color: "blue" }], [[0, 0, 0, "A"], [20, 15, 12, "G"]])),
];

await runWritten(WRITTEN, "../mcr3u-ch5/written-data.mjs", import.meta.url);
