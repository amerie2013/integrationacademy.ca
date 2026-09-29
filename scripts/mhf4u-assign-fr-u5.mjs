// MHF4U-FR Unité 5 — Travaux notés (Fonctions trigonométriques).
const r = String.raw;

export const U5 = {
  "5.1": {
    topic: "Mesure en radians",
    K: [
      r`Convertir en radians (valeurs exactes) : $150^\circ$, $315^\circ$ et $-60^\circ$.`,
      r`Un secteur a un rayon de $8$ cm et un angle central de $\dfrac{3\pi}{4}$. Trouver la longueur d'arc et l'aire du secteur.`,
      r`Donner le quadrant et l'angle de référence de $\dfrac{5\pi}{6}$, $\dfrac{4\pi}{3}$ et $\dfrac{11\pi}{6}$.`,
    ],
    T: [
      r`Expliquer pourquoi la formule $s=r\theta$ exige que $\theta$ soit en radians, et ce que deviendrait la formule si $\theta$ était en degrés.`,
      r`Trouver tous les angles coterminaux à $-\dfrac{\pi}{3}$ dans l'intervalle $[0,4\pi]$, puis écrire une expression générale pour tous les angles coterminaux.`,
    ],
    C: [
      r`Expliquer ce qu'est un radian, à l'aide d'un cercle et d'un arc dont la longueur égale le rayon.`,
      r`Expliquer pourquoi multiplier par $\dfrac{\pi}{180}$ convertit des degrés en radians, et donner une façon rapide de vérifier qu'une conversion est raisonnable.`,
    ],
    A: [
      r`Une roue de vélo a un rayon de $33$ cm et tourne de $1200^\circ$. Trouver la distance parcourue.`,
      r`La grande roue de Londres a un rayon d'environ $60$ m et fait un tour en $30$ minutes. Trouver la distance parcourue par une capsule en $10$ minutes.`,
      r`Un essuie-glace de $40$ cm de long balaie un angle de $\dfrac{2\pi}{3}$ radians. Trouver l'aire du pare-brise qu'il nettoie.`,
    ],
  },
  "5.2": {
    topic: "Rapports trigonométriques et le cercle unitaire",
    K: [
      r`Trouver la valeur exacte de (a) $\sin\dfrac{5\pi}{6}$ (b) $\cos\dfrac{4\pi}{3}$ (c) $\tan\dfrac{7\pi}{4}$.`,
      r`Le point $P\left(-\dfrac35,\dfrac45\right)$ est sur le cercle unitaire à l'angle $\theta$. Donner $\sin\theta$, $\cos\theta$ et $\tan\theta$, et nommer le quadrant.`,
      r`Résoudre sur $[0,2\pi)$, en valeurs exactes : (a) $\sin\theta=-\dfrac{\sqrt3}{2}$ (b) $\cos\theta=\dfrac{\sqrt2}{2}$.`,
    ],
    T: [
      r`Si $\cos\theta=-\dfrac{5}{13}$ et $\dfrac{\pi}{2}<\theta<\pi$, trouver $\sin\theta$ et $\tan\theta$ exactement.`,
      r`Utiliser le cercle unitaire pour expliquer pourquoi $\sin^2\theta+\cos^2\theta=1$, puis trouver $\cos\theta$ si $\sin\theta=-\dfrac{7}{25}$ et $\theta$ est dans le troisième quadrant.`,
    ],
    C: [
      r`Expliquer comment le cercle unitaire définit le sinus et le cosinus de n'importe quel angle, et comment les valeurs remarquables des angles de $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$ et $\dfrac{\pi}{3}$ proviennent de deux triangles familiers.`,
      r`Décrire la règle CAST et l'utiliser pour trouver le signe du sinus, du cosinus et de la tangente dans chaque quadrant.`,
    ],
    A: [
      r`Une grande roue a un rayon de $25$ m et son centre est à $30$ m du sol. Un passager à l'angle $\theta$ a une hauteur $h(\theta)=30+25\sin\theta$. Trouver la hauteur exacte pour $\theta=\dfrac{\pi}{6}$.`,
      r`La tension d'un circuit domestique est $v=170\sin\theta$ volts. Trouver la tension exacte à $\theta=\dfrac{\pi}{4}$ et à $\theta=\dfrac{2\pi}{3}$.`,
      r`La position d'un point sur une roue en rotation est $x(\theta)=12\cos\theta$ et $y(\theta)=12\sin\theta$. Trouver la position exacte à $\theta=\dfrac{5\pi}{4}$.`,
    ],
  },
  "5.3": {
    topic: "Graphiques des fonctions sinusoïdales",
    K: [
      r`Pour $y=-3\sin\left(2\left(x-\dfrac{\pi}{4}\right)\right)+1$, donner l'amplitude, la période, le déphasage et l'axe médian.`,
      r`Trouver la période de $y=\cos\dfrac{x}{3}$.`,
      r`Écrire l'équation d'une fonction sinusoïdale d'amplitude $5$, de période $4\pi$, d'axe médian $y=-2$ et sans déphasage.`,
    ],
    T: [
      r`Une fonction sinusoïdale a un maximum de $7$ en $x=\dfrac{\pi}{6}$ et un minimum de $-1$ en $x=\dfrac{\pi}{2}$. Trouver son amplitude, son axe médian et sa période.`,
      r`Comparer les graphiques de $y=5\sin(3x)$ et $y=5\sin(3x-\pi)$ : expliquer en quoi ils diffèrent et par combien.`,
    ],
    C: [
      r`Expliquer comment lire l'amplitude, la période, le déphasage et l'axe médian directement à partir de l'équation $y=a\sin(k(x-d))+c$.`,
      r`Décrire comment on peut, à partir d'un graphique sinusoïdal, retrouver son équation en identifiant quatre caractéristiques clés.`,
    ],
    A: [
      r`La profondeur de l'eau dans un port suit $d(t)=5.5\cos\left(\dfrac{2\pi}{12.4}(t-2.5)\right)+7.5$, où $t$ est en heures. Trouver la profondeur maximale et minimale, et la période de la marée.`,
      r`La durée du jour à une certaine latitude suit $D(t)=3.1\sin\left(\dfrac{2\pi}{365}(t-80)\right)+12.2$, où $t$ est le jour de l'année. Trouver la durée du jour maximale et le jour où elle se produit.`,
      r`La position verticale d'un point sur une roue de Ferris est $h(t)=15\sin\left(\dfrac{\pi}{20}t\right)+17$, où $t$ est en secondes. Trouver le rayon de la roue et le temps pour un tour complet.`,
    ],
  },
  "5.4": {
    topic: "Fonctions trigonométriques réciproques",
    K: [
      r`Trouver la valeur exacte de $\csc\dfrac{7\pi}{6}$, $\sec\dfrac{5\pi}{6}$ et $\cot\dfrac{3\pi}{4}$.`,
      r`Trouver le domaine de $y=3\sec(2x)$ sur $[0,\pi]$.`,
      r`Résoudre $\cot\theta=0$ sur $[0,2\pi]$.`,
    ],
    T: [
      r`Expliquer pourquoi $\csc x=\dfrac{1}{\sin x}$ n'est pas définie aux mêmes endroits que $\sec x=\dfrac{1}{\cos x}$, en identifiant précisément où chacune a une asymptote.`,
      r`Trouver toutes les valeurs de $\theta$ sur $[0,2\pi)$ où $\sec\theta$ et $\csc\theta$ sont toutes deux définies mais où $\cot\theta=1$.`,
    ],
    C: [
      r`Expliquer la relation entre chaque fonction trigonométrique réciproque et sa fonction de base, avec un exemple d'évaluation pour chacune.`,
      r`Décrire comment reconnaître, à partir d'une équation, où une fonction trigonométrique réciproque aura des asymptotes verticales.`,
    ],
    A: [
      r`La distance parcourue par la lumière d'un phare est $L(\theta)=200\sec\theta$ mètres, où $\theta$ est l'angle par rapport à la perpendiculaire au rivage. Trouver $L$ pour $\theta=\dfrac{\pi}{6}$ et $\theta=\dfrac{\pi}{3}$.`,
      r`L'ombre d'un poteau de hauteur $5$ m a une longueur $s=5\cot\theta$, où $\theta$ est l'angle d'élévation du soleil. Trouver $s$ pour $\theta=\dfrac{\pi}{4}$ et $\theta=\dfrac{\pi}{6}$.`,
      r`Une caméra de surveillance a un champ de vision qui s'élargit selon $w(\theta)=40\tan\theta$ mètres à une distance fixe, où $\theta$ est le demi-angle de vue. Trouver $w$ pour $\theta=\dfrac{\pi}{6}$.`,
    ],
  },
};
