// MCV4U-FR Fiche 4.4 — Applications des fonctions sinusoïdales et de leurs dérivées (édition enseignant)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const PI = Math.PI;
const EXAMPLES = [
  { title: "Un ressort", q: S`Une masse se déplace selon $s(t)=6\sin(4t)$ cm. Trouve $v(t)$, $a(t)$, le module maximal de la vitesse et la valeur maximale de l'accélération.`,
    steps: [S`$v=24\cos(4t)$ cm/s; $a=-96\sin(4t)$ cm/s².`], ans: "module maximal de la vitesse 24 cm/s; accélération maximale 96 cm/s²" },
  { title: "Une très grande roue", q: S`Une roue de 25 m de rayon a son centre à 27 m au-dessus du sol et fait un tour toutes les 80 s. Un passager part du bas. Modélise la hauteur et trouve la vitesse verticale à $t=20$ s.`,
    fig: F({ view: { xmin: 0, xmax: 165, ymin: 0, ymax: 56 }, curves: [{ f: (t) => 27 - 25 * Math.cos((PI / 40) * t), a: 0, b: 160 }], points: [pt(20, 27)], step: { x: 20, y: 10 } }),
    steps: [S`$h(t)=27-25\cos\left(\frac{\pi}{40}t\right)$.`, S`$h'(t)=25\cdot\frac\pi{40}\sin\left(\frac\pi{40}t\right)$; $h'(20)=\frac{5\pi}8\approx1.963$ m/s.`], ans: "environ 1.96 m/s vers le haut (la montée la plus rapide, à la hauteur du centre)" },
  { title: "Les marées", q: S`La profondeur de l'eau est $d(t)=2.5\cos\left(\frac{\pi}{6.2}t\right)+6$ m, $t$ heures après la marée haute. À quelle vitesse baisse-t-elle à $t=3.1$ h ?`,
    steps: [S`$d'(t)=-2.5\cdot\frac{\pi}{6.2}\sin\left(\frac{\pi}{6.2}t\right)$.`, S`$d'(3.1)=-\frac{2.5\pi}{6.2}\approx-1.267$ m/h.`], ans: "elle baisse d'environ 1.27 m par heure" },
  { title: "La tension domestique", q: S`Une tension est $V(t)=170\sin(120\pi t)$ volts. Quel est son plus grand taux de variation ?`,
    steps: [S`$V'(t)=170\cdot120\pi\cos(120\pi t)$; plus grande valeur absolue $170\cdot120\pi$.`], ans: "environ 64 088 V/s, lorsque la tension passe par 0" },
  { title: "Un rectangle dans un quart de cercle", q: S`Un rectangle a un sommet au centre d'un quart de cercle de rayon 8 et le sommet opposé sur l'arc. Trouve la plus grande aire.`,
    fig: F({ view: { xmin: -0.5, xmax: 9, ymin: -0.5, ymax: 9 }, curves: [{ f: (x) => Math.sqrt(64 - x * x), a: 0, b: 8 }], segs: [{ pts: [[0, 5.657], [5.657, 5.657], [5.657, 0]], color: "green" }], points: [pt(5.657, 5.657)], step: { x: 1, y: 1 } }),
    steps: [S`Sommet $(8\cos\theta,8\sin\theta)$ : $A=64\sin\theta\cos\theta=32\sin2\theta$.`, S`$A'=64\cos2\theta=0\Rightarrow\theta=\frac\pi4$.`], ans: "32 unités carrées (un carré de côté 5.66)" },
  { title: "Le lancer le plus long", q: S`Une balle lancée à 20 m/s selon un angle $\theta$ parcourt $R(\theta)=\frac{400\sin2\theta}{9.8}$ m. Quel angle donne la plus grande portée ?`,
    fig: F({ view: { xmin: 0, xmax: 1.65, ymin: 0, ymax: 45 }, curves: [{ f: (t) => (400 * Math.sin(2 * t)) / 9.8, a: 0, b: PI / 2 }], points: [pt(PI / 4, 400 / 9.8)], step: { x: 0.25, y: 5 } }),
    steps: [S`$R'(\theta)=\frac{800\cos2\theta}{9.8}=0\Rightarrow\theta=\frac\pi4$.`], ans: "45°, ce qui donne environ 40.8 m" },
  { title: "Un pendule", q: S`L'angle d'un pendule est $\theta(t)=0.15\cos(3t)$ rad. Trouve sa plus grande accélération angulaire.`,
    steps: [S`$\theta''=-1.35\cos(3t)$.`], ans: "1.35 rad/s², aux extrémités de chaque oscillation" },
  { title: "Une caméra de suivi", q: S`Une caméra située à 50 m d'une route rectiligne suit une voiture qui roule à 20 m/s. À quelle vitesse la caméra tourne-t-elle lorsque la voiture est à 50 m plus loin sur la route ?`,
    steps: [S`$\tan\theta=\frac x{50}$, donc $\sec^2\theta\,\frac{d\theta}{dt}=\frac1{50}\frac{dx}{dt}$.`, S`En $x=50$ : $\theta=\frac\pi4$, $\sec^2\theta=2$ : $\frac{d\theta}{dt}=\frac{20}{50\cdot2}$.`], ans: "0.2 rad/s" },
  { title: "La pression artérielle", q: S`La pression artérielle est $P(t)=100+20\sin(2\pi t)$ mmHg, $t$ en secondes. Quel est son plus grand taux de variation ?`,
    steps: [S`$P'(t)=40\pi\cos(2\pi t)$.`], ans: S`$40\pi\approx125.7$ mmHg/s` },
];

const PROBLEMS = [
  { level: 1, q: S`Pour $s(t)=3\cos(2t)$, trouve $v\left(\frac\pi4\right)$.`, recap: "v = −6 sin(2t).", ans: S`$-6$` },
  { level: 1, q: S`Quel est le plus grand taux de variation de $y=10+4\sin\left(\frac\pi6t\right)$ ?`, recap: "|Aω|.", ans: S`$\frac{2\pi}3\approx2.094$` },
  { level: 1, q: S`Quelle est la période de $s(t)=5\sin(3t)$ ?`, recap: "2π/ω.", ans: S`$\frac{2\pi}3$` },
  { level: 2, q: S`Une roue de 10 m de rayon, dont le centre est à 12 m de hauteur, fait un tour toutes les 40 s. Quand un passager qui part du bas monte-t-il le plus vite, et à quelle vitesse ?`, recap: "h = 12 − 10 cos(πt/20).", ans: S`à $t=10$ s, $\frac\pi2\approx1.571$ m/s` },
  { level: 2, q: S`Pour $s(t)=5\cos(\pi t)$ cm, trouve $a\left(\frac13\right)$ (2 décimales).`, recap: "a = −5π² cos(πt).", ans: S`$\approx-24.67$ cm/s²` },
  { level: 2, q: S`Une balle est lancée à 30 m/s. Quelle est sa plus grande portée, selon $R(\theta)=\frac{900\sin2\theta}{9.8}$ ?`, recap: "θ = π/4.", ans: "environ 91.8 m" },
  { level: 2, q: S`Une température est $T(t)=15-8\cos\left(\frac\pi{12}t\right)$ °C, $t$ heures après 4 h. À quelle vitesse monte-t-elle à $t=6$ ?`, recap: "T′ = (2π/3) sin(πt/12).", ans: S`$\approx2.09$ °C par heure` },
  { level: 2, q: S`Un triangle a des côtés de 7 cm et de 9 cm qui forment entre eux un angle $\theta$. Trouve la plus grande aire et esquisse $A(\theta)$.`, recap: "A = 31.5 sin θ.", ans: S`31.5 cm² en $\theta=\frac\pi2$`, fig: gridT({ xmin: 0, xmax: 3.3, ymin: 0, ymax: 35 }, { x: 0.25, y: 5 }) },
  { level: 3, space: 5, q: S`Une masse se déplace selon $s(t)=4\sin(5t)$. Trouve le premier instant où le module de sa vitesse est la moitié du module maximal.`, recap: "|cos 5t| = ½.", ans: S`$5t=\frac\pi3\Rightarrow t=\frac\pi{15}\approx0.209$ s` },
  { level: 3, space: 5, q: S`Explique, à l'aide des dérivées, pourquoi la vitesse verticale d'un passager d'une grande roue est la plus grande à la hauteur du centre et nulle au sommet et au bas de la roue.`, recap: "h′ est une sinusoïde décalée d'un quart de période.", ans: "h′ est la plus grande là où h traverse son axe (la hauteur du centre) et elle est nulle au maximum et au minimum de h" },
  { level: 3, space: 5, q: S`Trouve le plus grand périmètre d'un rectangle inscrit dans un cercle de rayon 4.`, recap: "P = 16(cos θ + sin θ).", ans: S`$16\sqrt2\approx22.63$ en $\theta=\frac\pi4$ (un carré)` },
  { level: 3, space: 5, q: S`Un observateur se tient à 100 m du point de décollage d'un hélicoptère. L'hélicoptère monte à 5 m/s. À quel rythme l'angle d'élévation varie-t-il lorsqu'il est à 100 m de hauteur ?`, recap: "tan θ = h/100.", ans: "0.025 rad/s" },
  { level: 3, space: 5, q: S`Trouve le plus grand déplacement de $s(t)=\sin t+\sqrt3\cos t$ et le premier instant où il se produit. Esquisse $s$.`, recap: "s′ = cos t − √3 sin t.", ans: S`2, en $t=\frac\pi6$`, fig: gridT({ xmin: 0, xmax: 6.5, ymin: -2.5, ymax: 2.5 }, { x: 0.5, y: 0.5 }) },
];

export const WS = {
  code: "4.4",
  title: "Applications des fonctions sinusoïdales et de leurs dérivées",
  bigideas: S`Pour un modèle sinusoïdal $y=A\sin(\omega t+c)+d$ ou $A\cos(\omega t+c)+d$, la dérivée donne le taux de variation; sa plus grande valeur absolue est $|A\omega|$, atteinte lorsque $y$ traverse son axe. Pour une position $s(t)$, $v=s'$ et $a=s''$; dans un mouvement harmonique simple, $a=-\omega^2s$. Un angle peut servir de variable en optimisation, et les taux liés avec $\tan\theta$ décrivent les caméras et les faisceaux qui tournent.`,
  goals: ["Modéliser des situations périodiques.", "Trouver la vitesse et l'accélération.", "Trouver les plus grands taux de variation.", "Optimiser avec un angle."],
  curriculum: "A3.5, B2",
  vocab: [["$\\omega$", "$2\\pi\\div$ période"], ["Taux maximal", "$|A\\omega|$"], ["MHS", "$a=-\\omega^2s$"]],
  hook: S`Sur une grande roue, à quel endroit du trajet montes-tu le plus vite ? Quand ne montes-tu pas du tout ?`,
  concepts: [
    ["1. Les taux dans les modèles périodiques", S`$h(t)=27-25\cos\left(\frac\pi{40}t\right)$ (violet) et $10\,h'(t)$ (bleu) : la montée la plus rapide se produit à la hauteur du centre :
${F({ view: { xmin: 0, xmax: 165, ymin: -22, ymax: 56 }, curves: [{ f: (t) => 27 - 25 * Math.cos((PI / 40) * t), a: 0, b: 160 }, { f: (t) => 10 * ((25 * PI) / 40) * Math.sin((PI / 40) * t), color: "blue", a: 0, b: 160 }], step: { x: 20, y: 10 } })}`],
    ["2. Le mouvement", S`$s=A\cos\omega t$, $v=-A\omega\sin\omega t$, $a=-\omega^2s$.`],
    ["3. Les angles", S`Écris les aires ou les longueurs avec $\sin\theta$ et $\cos\theta$, puis dérive par rapport à $\theta$.`],
  ],
  tips: ["ω = 2π/période.", "Mode radians.", "La variation est la plus rapide à l'axe.", "Le module de la vitesse est |v|.", "Indique les unités."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
