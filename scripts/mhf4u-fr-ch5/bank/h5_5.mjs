import { FIG } from "./fig.mjs";
// 5.5 Modèles trigonométriques et taux de variation — 20 questions difficiles
// Notation française : y = a sin(k(t − c)) + d (c = déphasage, d = translation verticale / axe).
import { mc, num, tf, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG } from "../trigfig.mjs";
const S = String.raw;
const P = Math.PI;
const tide = (t) => 3.6 * Math.cos(((2 * P) / 12.4) * (t - 4)) + 5.2;
const VT = { xmin: -0.5, xmax: 25, ymin: 0, ymax: 10 };
const OT = { step: { x: 2, y: 1 }, xlabel: "t (h)" };

export const TOPIC = "5.5 Modèles trigonométriques et taux de variation";
export const Q = [
  mc("Marée haute de 8.8 m à 4 h 00, marée basse suivante de 1.6 m à 10 h 12. Quel modèle convient (t en heures après minuit) ?", S`$d=3.6\cos\left(\frac{2\pi}{12.4}(t-4)\right)+5.2$`, [S`$d=3.6\cos\left(\frac{2\pi}{6.2}(t-4)\right)+5.2$`, S`$d=7.2\cos\left(\frac{2\pi}{12.4}(t-4)\right)+5.2$`, S`$d=3.6\sin\left(\frac{2\pi}{12.4}(t-4)\right)+5.2$`], "a = (8.8 − 1.6)/2, axe (8.8 + 1.6)/2; une demi-période de 6.2 h donne une période de 12.4 h; le cosinus atteint son sommet en t = 4 (c = 4).", FIG.tide88),
  num("Marée haute de 8.8 m à 4 h 00, marée basse suivante de 1.6 m à 10 h 12. À l'aide d'un modèle sinusoïdal (t en heures après minuit), trouve la profondeur à midi (t = 12), à une décimale près.", tide(12), "d(12) = 3.6 cos(2π·8/12.4) + 5.2 ≈ 3.0 m.", FIG.tide88, 0.06),
  num("Marée haute de 8.8 m à 4 h 00, marée basse suivante de 1.6 m à 10 h 12. À l'aide d'un modèle sinusoïdal, trouve l'heure de la deuxième marée haute après minuit, en heures (une décimale).", 16.4, "Les marées hautes sont espacées d'une période : 4 + 12.4 = 16.4.", FIG.tide88, 0.05),
  mc("Un navire a besoin d'au moins 4 m d'eau. À l'aide du graphique de la marée, quel intervalle est le plus proche du premier intervalle après minuit où ce n'est PAS sécuritaire ?", "d'environ 7.8 h à 12.6 h", ["d'environ 4 h à 10.2 h", "d'environ 0 h à 4 h", "d'environ 10.2 h à 16.4 h"], "Résous 3.6cos(...) + 5.2 = 4 : cos(...) = −1/3, ce qui donne t ≈ 7.8 et t ≈ 12.6.", planeDoc(TG([[tide, "violet"], [() => 4, "blue"]], VT, [], OT))),
  num(S`Une roue de $15$ m de rayon fait un tour toutes les $60$ s. Quelle est la plus grande vitesse verticale d'un passager, en m/s (trois décimales) ?`, (15 * 2 * P) / 60, "Plus grand taux = a·k = 15 · 2π/60 = π/2 ≈ 1.571.", null, 0.002),
  num(S`Pour $h=-15\cos\left(\frac\pi{30}t\right)+17$, trouve le taux de variation moyen de $t=20$ à $t=40$.`, 0, "h(20) = −15cos(2π/3) + 17 = 24.5 et h(40) = −15cos(4π/3) + 17 = 24.5, donc la variation est 0."),
  num(S`Pour $h=-15\cos\left(\frac\pi{30}t\right)+17$, trouve le taux de variation moyen de $t=10$ à $t=20$.`, 1.5, "h(10) = 9.5, h(20) = 24.5 : 15/10 = 1.5 m/s."),
  mc(S`Pour une sinusoïde $y=a\sin(k(t-c))+d$ avec $a,k>0$, où le taux de variation instantané est-il le plus grand ?`, S`en $t=c$ (traversée de l'axe en montant)`, [S`au maximum`, S`au minimum`, S`toujours en $t=0$`], "La traversée de l'axe en montant du sinus se trouve au début de son cycle."),
  ms("Sélectionne toutes les affirmations vraies au sujet de h = −10cos(πt/20) + 12.", ["Le taux vaut 0 en t = 20.", "Le taux est le plus grand en t = 10.", "Le taux moyen sur [0, 40] vaut 0.", "Le taux est négatif sur (0, 20)."], [0, 1, 2], "t = 20 est le haut; t = 10 est la traversée de l'axe en montant; une période complète ramène au départ; sur (0, 20), le passager monte."),
  num(S`L'angle d'un pendule est $\theta=12\cos\left(\frac{5\pi}4t\right)$ degrés. Combien de temps dure un aller-retour (en secondes, une décimale) ?`, 1.6, "Période = 2π/(5π/4) = 8/5 = 1.6 s."),
  num(S`Pour $\theta=12\cos\left(\frac{5\pi}4t\right)$, trouve le premier instant $t>0$ où $\theta=-6$ (en secondes, trois décimales).`, (2 / 3) * (4 / 5), "cos(5πt/4) = −1/2 : 5πt/4 = 2π/3, donc t = 8/15 ≈ 0.533.", null, 0.002),
  mc("La durée du jour (en heures) est D = 4 sin(2π(t − 80)/365) + 12. Pendant combien de jours la durée du jour dépasse-t-elle 14 h ?", "environ 122 jours", ["environ 61 jours", "environ 183 jours", "environ 91 jours"], "sin(...) > 1/2 pendant un tiers de chaque cycle (de π/6 à 5π/6) : 365/3 ≈ 122."),
  tf("Si deux modèles sinusoïdaux ont la même amplitude, mais que l'un a une période deux fois plus longue, son plus grand taux de variation est deux fois plus petit.", true, "Plus grand taux = a·k, et doubler la période divise k par deux."),
  tf("Le taux de variation instantané de y = sin t en t = π vaut 1.", false, "En t = π, le sinus traverse son axe en descendant : le taux vaut −1."),
  num(S`Estime le taux de variation instantané de $y=10\sin\left(\frac\pi4t\right)$ en $t=2$ à l'aide d'un intervalle symétrique de largeur $0.002$.`, 0, "t = 2 est un maximum (π/4·2 = π/2), donc la pente vaut 0."),
  mc("Le graphique montre la hauteur d'un passager. Quel est le modèle ?", S`$h=-9\cos\left(\frac\pi{25}t\right)+11$`, [S`$h=9\cos\left(\frac\pi{25}t\right)+11$`, S`$h=-11\cos\left(\frac\pi{25}t\right)+9$`, S`$h=-9\cos\left(\frac\pi{50}t\right)+11$`], "Min 2, max 20 : a = 9, d = 11; période 50 s donc k = π/25; départ en bas.", planeDoc(TG([[(t) => -9 * Math.cos((P / 25) * t) + 11, "violet"]], { xmin: -2, xmax: 105, ymin: 0, ymax: 22 }, [], { step: { x: 10, y: 2 }, xlabel: "t (s)" }))),
  mc("Le graphique montre la hauteur d'un passager. À quel instant la vitesse de descente est-elle la plus grande ?", "t = 37.5 s", ["t = 25 s", "t = 12.5 s", "t = 50 s"], "Descente à travers l'axe : aux trois quarts de la période de 50 s.", planeDoc(TG([[(t) => -9 * Math.cos((P / 25) * t) + 11, "violet"]], { xmin: -2, xmax: 55, ymin: 0, ymax: 22 }, [], { step: { x: 5, y: 2 }, xlabel: "t (s)" }))),
  mc("Le graphique montre la marée et la droite d = 7. Pendant les 12 premières heures, à peu près quand la profondeur dépasse-t-elle 7 m ?", "d'environ 1.9 h à 6.1 h", ["d'environ 6.1 h à 13.7 h", "de 0 h à 4 h", "d'environ 4 h à 10.2 h"], "cos(2π(t − 4)/12.4) > 0.5 quand |t − 4| < 12.4/6 ≈ 2.07.", planeDoc(TG([[tide, "violet"], [() => 7, "blue"]], VT, [], OT))),
  num(S`Marée haute de 8.8 m à 4 h 00, marée basse suivante de 1.6 m à 10 h 12. À l'aide d'un modèle sinusoïdal, pendant combien d'heures par cycle la profondeur dépasse-t-elle $7$ m (deux décimales) ?`, 12.4 / 3, "Un tiers de la période de 12.4 h : 4.13 h.", FIG.tide88, 0.02),
  mc("On utilise un modèle sinusoïdal pour prédire la marée dans 3 mois. Quelle est la principale faiblesse ?", "de petites erreurs sur la période s'accumulent sur de nombreux cycles", ["l'amplitude doit valoir 0", "les sinusoïdes ne peuvent pas modéliser les marées", "le taux de variation vaut toujours 0"], "Une erreur de quelques minutes par cycle décale les heures prédites de plusieurs heures après de nombreux cycles."),
];
