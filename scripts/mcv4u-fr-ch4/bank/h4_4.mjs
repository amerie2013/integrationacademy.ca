// 4.4 Applications des fonctions sinusoïdales et de leurs dérivées — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";
import { TITLE } from "../l4_4.mjs";

const S = String.raw;
const PI = Math.PI;
export const TOPIC = TITLE;
export const Q = [
  num("Une grande roue de 20 m de rayon, dont le centre est à 22 m de hauteur, fait un tour toutes les 90 s; un passager part du bas (graphique ci-contre). Quand le passager monte-t-il le plus vite pour la première fois ?", 22.5, "h = 22 − 20 cos(2πt/90); h′ est la plus grande après un quart de tour.", graph((t) => 22 - 20 * Math.cos(((2 * PI) / 90) * t), { xmin: 0, xmax: 185, ymin: 0, ymax: 45 }, [P(22.5, 22)], { a: 0, b: 180, step: { x: 15, y: 5 } }), 0.0001),
  num("Un phare situé à 3 km d'une côte rectiligne fait deux tours par minute (4π rad/min). À quelle vitesse son faisceau se déplace-t-il le long de la côte lorsque θ = π/3 par rapport à la perpendiculaire (km/min, 2 décimales) ?", 150.8, "x = 3 tan θ; dx/dt = 3 sec²θ · 4π = 3 · 4 · 4π.", null, 0.05),
  num("Un observateur est à 500 m du point de départ d'un ballon. Le ballon monte à 4 m/s. À quel rythme l'angle d'élévation varie-t-il lorsque le ballon est à 500 m de hauteur (rad/s) ?", 0.004, "tan θ = h/500; sec²θ = 2.", null, 0.00001),
  num("Deux côtés d'un triangle ont une somme de 20 cm et l'angle entre eux peut varier. Quelle est la plus grande aire possible ?", 50, "½ab sin θ avec a = b = 10 et θ = π/2."),
  mc(S`Pour $s=A\sin(\omega t)$, le graphique de la vitesse est le graphique de la position translaté :`, "d'un quart de période vers la gauche", ["d'une demi-période", "d'une période complète", "pas du tout"], "cos(ωt) = sin(ωt + π/2)."),
  num(S`Pour $s(t)=5\cos(2t)$, trouve le premier instant $t\gt0$ où le module de la vitesse vaut 5 (4 décimales).`, 0.2618, "|10 sin 2t| = 5 : t = π/12.", null, 0.0005),
  num(S`La profondeur est $d(t)=2\cos\left(\frac\pi6t\right)+6$ m. Pendant combien d'heures, parmi les 12 premières, l'eau baisse-t-elle plus vite que 0.5 m/h ? (2 décimales)`, 4.1, "Elle baisse lorsque (π/3) sin(πt/6) > 0.5 sur (0, 6).", null, 0.02),
  tf("Dans un mouvement harmonique simple, le module de la vitesse et la valeur absolue de l'accélération ne sont jamais maximaux au même moment.", true, "Le module de la vitesse est maximal au centre, l'accélération aux extrémités."),
  num("L'aire d'un triangle isocèle inscrit dans un cercle de rayon 5 est A(θ) = 25 sin θ (1 + cos θ) (graphique ci-contre). Trouve la plus grande aire (2 décimales).", 32.48, "A′ = 0 en θ = π/3 : le triangle est équilatéral.", graph((t) => 25 * Math.sin(t) * (1 + Math.cos(t)), { xmin: 0, xmax: 3.3, ymin: 0, ymax: 36 }, [P(PI / 3, 32.48)], { a: 0, b: PI, step: { x: 0.5, y: 5 } }), 0.01),
  num(S`La durée du jour est $D(t)=12.2+3.4\sin\left(\frac{2\pi}{365}(t-80)\right)$ heures. Quelle est la variation la plus rapide, en minutes par jour (3 décimales) ?`, 3.512, "3.4 · 2π/365 · 60.", null, 0.002),
  num(S`Deux masses se déplacent selon $s_1=2\sin t$ et $s_2=2\cos t$. Quelle est la plus grande distance entre elles (4 décimales) ?`, 2.8284, "|2 sin t − 2 cos t| ≤ 2√2.", null, 0.0005),
  mc("Si on néglige la résistance de l'air, quel angle de lancement donne la plus grande portée sur un sol horizontal ?", "45°", ["30°", "60°", "90°"], "sin 2θ est maximal lorsque 2θ = 90°."),
  num("Une fusée monte verticalement à 50 m/s, observée à 1 km de distance. À quel rythme l'angle d'élévation varie-t-il lorsqu'elle est à 1 km de hauteur (rad/s) ?", 0.025, "tan θ = h/1000, sec²θ = 2.", null, 0.0001),
  num("Le graphique de s(t) = 4 cos(πt) est représenté. À combien d'instants dans [0, 2] l'accélération est-elle nulle ?", 2, "a = −4π² cos(πt) = 0 en t = 0.5 et 1.5.", graph((t) => 4 * Math.cos(PI * t), { xmin: 0, xmax: 2.1, ymin: -5, ymax: 5 }, [P(0.5, 0), P(1.5, 0)], { a: 0, b: 2, step: { x: 0.25, y: 1 } })),
  num("Une grande roue de 10 m de rayon fait un tour toutes les 40 s. Quelle est la plus grande accélération verticale d'un passager (m/s², 4 décimales) ?", 0.2467, "Aω² = 10(π/20)².", null, 0.0005),
  tf("Si la période d'un mouvement sinusoïdal double et que l'amplitude ne change pas, le module maximal de la vitesse est divisé par deux.", true, "ω est divisé par deux."),
  num(S`Un courant est $I=10\sin(120\pi t)$. Après $t=0$, quand la valeur absolue de son taux de variation est-elle de nouveau maximale (s, 4 décimales) ?`, 0.0083, "I′ ∝ cos(120πt) : |cos| = 1 de nouveau en t = 1/120.", null, 0.0001),
  num("Deux couloirs de 3 m de largeur se rencontrent à angle droit. Quelle est la plus longue tige qu'on peut transporter horizontalement dans le coin (m, 3 décimales) ?", 8.485, "L(θ) = 3/sin θ + 3/cos θ est minimale en θ = π/4.", null, 0.002),
  num("Un point d'une roue a une hauteur h(t) = 0.4 sin(6πt) + 0.5 m (graphique ci-contre). Quelle est sa plus grande vitesse verticale (m/s, 3 décimales) ?", 7.54, "0.4 · 6π.", graph((t) => 0.4 * Math.sin(6 * PI * t) + 0.5, { xmin: 0, xmax: 0.7, ymin: 0, ymax: 1 }, [P(0, 0.5)], { a: 0, b: 0.67, step: { x: 0.1, y: 0.1 } }), 0.002),
  num(S`Quel est le plus grand module de la vitesse pour $s(t)=3\sin(2t)-4\cos(2t)$ ?`, 10, "Amplitude 5, ω = 2."),
];
