// 4.4 Applications des fonctions sinusoïdales et de leurs dérivées — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;
export const E = [
  num(S`Une particule a la position $s(t)=4\sin(3t)$. Trouve $v(0)$.`, 12, "v = 12 cos(3t)."),
  num(S`Pour $s(t)=10\cos t$, quel est le module maximal de la vitesse ?`, 10, "|Aω| = 10 · 1."),
  mc("Dans un mouvement harmonique simple, le module de la vitesse est le plus grand :", "à la position d'équilibre (au centre)", ["aux points de rebroussement", "au point le plus haut seulement", "lorsque l'accélération est la plus grande"], "v est la plus grande là où s = 0."),
  num(S`Quelle est la période de $h(t)=5+3\sin\left(\frac{\pi}{10}t\right)$ ?`, 20, "2π ÷ (π/10)."),
  tf("Dans un mouvement harmonique simple, l'accélération est nulle à la position d'équilibre.", true, "a = −ω² s = 0 lorsque s = 0."),
  num(S`Quelle est la valeur de $\omega$ pour un mouvement de période 2 s (4 décimales) ?`, 3.1416, "2π/2.", null, 0.0005),
  num(S`Pour $s(t)=6\cos(5t)$, trouve $a(0)$.`, -150, "a = −150 cos(5t)."),
  num(S`Quel est le plus grand taux de variation de $y=7\sin\left(\frac t2\right)$ ?`, 3.5, "7 · ½.", null, 0.0001),
  fill(S`Un mouvement tel que $a=-\omega^2s$ s'appelle un mouvement ___ simple.`, ["harmonique", "harmonic"], "Ressorts et pendules."),
  num(S`Pour $s(t)=2\sin(5t)$, quelle est la plus grande accélération ?`, 50, "Aω² = 2 · 25."),
  num("La hauteur d'un passager est h(t) = 14 − 12 cos(πt/25) m (graphique ci-contre). Quelle est la plus grande vitesse de montée (m/s, 3 décimales) ?", 1.508, "12 · π/25.", graph((t) => 14 - 12 * Math.cos((PI / 25) * t), { xmin: 0, xmax: 105, ymin: 0, ymax: 28 }, [P(12.5, 14)], { a: 0, b: 100, step: { x: 10, y: 4 } }), 0.002),
  mc("Si h est en mètres et t en secondes, dh/dt se mesure en :", "m/s", ["m", "s/m", "m²"], "Unité de sortie par unité d'entrée."),
  num(S`Pour $s(t)=3\cos(4t)$, trouve $v\left(\frac\pi8\right)$.`, -12, "−12 sin(π/2)."),
  tf("Dans un mouvement harmonique simple, la vitesse est nulle aux points de rebroussement.", true, "La masse s'arrête avant de repartir dans l'autre sens."),
  num("Un triangle a des côtés de 5 et de 8 qui forment entre eux un angle θ. Quelle est sa plus grande aire ?", 20, "A = 20 sin θ."),
  num(S`Pour $s(t)=8\sin(\pi t)$, trouve $v(1)$ (3 décimales).`, -25.133, "8π cos π.", null, 0.002),
  mc("Dans un mouvement harmonique simple, l'accélération et le déplacement ont toujours :", "des signes opposés", ["le même signe", "la même valeur absolue", "aucun lien"], "a = −ω² s."),
  num("Le graphique de s(t) = 5 cos(2t) est représenté. En quel premier instant t > 0 la vitesse est-elle nulle ? (4 décimales)", 1.5708, "v = −10 sin(2t) = 0 en t = π/2.", graph((t) => 5 * Math.cos(2 * t), { xmin: 0, xmax: 6.5, ymin: -6, ymax: 6 }, [P(PI / 2, -5)], { a: 0, b: 6.5, step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`Quelle est la plus grande vitesse pour $s(t)=3\sin(4t)$ ?`, 12, "3 · 4."),
  num(S`Une température mensuelle est $T(t)=20+5\sin\left(\frac{2\pi}{12}t\right)$ °C. Quel est son plus grand taux de variation (°C par mois, 3 décimales) ?`, 2.618, "5 · 2π/12.", null, 0.002),
];

export const M = [
  num("Une grande roue de 15 m de rayon fait un tour toutes les 60 s. Quelle est la plus grande vitesse verticale d'un passager (m/s, 4 décimales) ?", 1.5708, "15 · 2π/60.", null, 0.0005),
  num(S`Pour $s(t)=6\sin\left(\frac\pi2t\right)$, trouve $a(1)$ (3 décimales).`, -14.804, "a = −6(π/2)² sin(πt/2).", null, 0.002),
  num(S`La profondeur de l'eau est $d(t)=1.8\cos\left(\frac\pi6t\right)+5$ m. Trouve $d'(3)$ en m/h (4 décimales).`, -0.9425, "−1.8 · π/6 · sin(π/2).", null, 0.0005),
  num("Un triangle a deux côtés de 12 cm qui forment entre eux un angle θ. Quelle est sa plus grande aire (cm²) ?", 72, "A = 72 sin θ."),
  num(S`Une balle lancée à 25 m/s a une portée $R(\theta)=\frac{625\sin2\theta}{9.8}$ m. Quelle est la plus grande portée (2 décimales) ?`, 63.78, "θ = π/4.", null, 0.01),
  mc("Quand la durée du jour varie-t-elle le plus rapidement ?", "près des équinoxes (printemps et automne)", ["près des solstices", "le jour le plus court", "le jour le plus long"], "À l'axe de la sinusoïde."),
  num(S`Pour $s(t)=4\cos(3t)+2$, quelle est la position d'équilibre (le centre) ?`, 2, "L'axe."),
  num(S`Un pendule oscille selon $\theta(t)=0.25\sin(2t)$ rad. Quelle est sa plus grande vitesse angulaire ?`, 0.5, "0.25 · 2.", null, 0.0001),
  num("L'aire d'un triangle ayant deux côtés de 6 cm est A(θ) = 18 sin θ (graphique ci-contre). Quelle est la plus grande aire ?", 18, "En θ = π/2.", graph((t) => 18 * Math.sin(t), { xmin: 0, xmax: 3.3, ymin: 0, ymax: 20 }, [P(PI / 2, 18)], { a: 0, b: PI, step: { x: 0.5, y: 2 } })),
  tf("Pour une amplitude donnée, un ω plus grand donne un module maximal de la vitesse plus grand.", true, "Module maximal de la vitesse : Aω."),
  num("Une caméra située à 40 m d'une route suit une voiture qui roule à 15 m/s. À quelle vitesse tourne-t-elle lorsque la voiture est à 40 m plus loin sur la route (rad/s) ?", 0.1875, "sec² θ dθ/dt = 15/40 avec sec² θ = 2.", null, 0.0001),
  num("Quelle est la plus grande aire d'un rectangle inscrit dans un demi-cercle de rayon 6 ?", 36, "A = 36 sin 2θ."),
  num(S`Une tension est $V(t)=120\sin(100\pi t)$. Quel est son plus grand taux de variation (V/s, à l'unité près) ?`, 37699, "120 · 100π.", null, 1),
  num(S`Quel est le plus grand déplacement de $s(t)=5\sin(2t)+5\cos(2t)$ (4 décimales) ?`, 7.0711, "5√2.", null, 0.0005),
  mc(S`Pour $s=A\cos(\omega t)$, la plus grande accélération est :`, S`$A\omega^2$`, [S`$A\omega$`, S`$A$`, S`$\omega^2$`], "a = −Aω² cos(ωt)."),
  num(S`La pression artérielle est $P(t)=90+15\sin(2\pi t)$ mmHg. Quel est son plus grand taux de variation (3 décimales) ?`, 94.248, "15 · 2π.", null, 0.002),
  num("La hauteur d'une palette est h(t) = 8 − 6 cos(πt/10) m (graphique ci-contre). Trouve h′(15) en m/s (3 décimales).", -1.885, "(6π/10) sin(1.5π).", graph((t) => 8 - 6 * Math.cos((PI / 10) * t), { xmin: 0, xmax: 42, ymin: 0, ymax: 15 }, [P(15, 8)], { a: 0, b: 40, step: { x: 5, y: 2 } }), 0.002),
  num("Quelle est la plus grande aire d'un rectangle ayant un sommet au centre d'un quart de cercle de rayon 10 et le sommet opposé sur l'arc ?", 50, "A = 50 sin 2θ."),
  num(S`Une masse a une amplitude de 3 cm et $\omega=4$ rad/s. Quel est le module de sa vitesse au passage par le centre ?`, 12, "Aω."),
  num(S`Un mouvement vérifie $a=-25s$. Quelle est sa période (4 décimales) ?`, 1.2566, "ω = 5, période 2π/5.", null, 0.0005),
];
