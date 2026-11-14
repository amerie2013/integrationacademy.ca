// MCV4U-FR Fiche 2.3 — Vitesse, accélération et dérivées secondes (édition enseignant)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Vitesse et accélération", q: S`Un objet se déplace selon $s(t)=t^3-12t+4$ m. Trouve $v(1)$, $a(1)$ et le moment où il est au repos.`,
    steps: [S`$v=3t^2-12$, $a=6t$.`, S`$v(1)=-9$ m/s, $a(1)=6$ m/s².`, S`$v=0\Rightarrow t=2$ s ($t\ge0$).`], ans: "−9 m/s; 6 m/s²; au repos à t = 2 s" },
  { title: "Sens du mouvement", q: S`Pour $s(t)=t^2-8t+3$, $t\ge0$, quand l'objet se déplace-t-il dans le sens négatif?`,
    steps: [S`$v=2t-8\lt0$ pour $t\lt4$.`], ans: S`pour $0\le t\lt4$; sens positif après $t=4$` },
  { title: "Accélère ou ralentit", q: S`Pour $s(t)=t^3-9t^2+15t$, trouve quand l'objet accélère.`,
    fig: F({ view: { xmin: 0, xmax: 6.5, ymin: -30, ymax: 25 }, curves: [{ f: (t) => t ** 3 - 9 * t * t + 15 * t, a: 0, b: 6.5 }, { f: (t) => 3 * t * t - 18 * t + 15, color: "blue", a: 0, b: 6.5 }], points: [pt(1, 7), pt(5, -25)], step: { x: 1, y: 5 } }),
    steps: [S`$v=3(t-1)(t-5)$, $a=6t-18$.`, S`Mêmes signes : $1\lt t\lt3$ (les deux négatives) et $t\gt5$ (les deux positives).`], ans: S`il accélère sur $(1,3)$ et pour $t\gt5$; il ralentit sur $(0,1)$ et $(3,5)$` },
  { title: "Une dérivée seconde", q: S`Trouve $f''(1)$ pour $f(x)=3x^5-x^3+2x$.`,
    steps: [S`$f'=15x^4-3x^2+2$, $f''=60x^3-6x$.`], ans: "54" },
  { title: "Dérivée seconde d'un inverse", q: S`Trouve $y''$ pour $y=\frac1x$ et évalue-la en $x=2$.`,
    steps: [S`$y=x^{-1}$, $y'=-x^{-2}$, $y''=2x^{-3}$.`], ans: S`$y''=\frac2{x^3}$; $\frac14$` },
  { title: "Un projectile", q: S`La hauteur d'une balle est $h(t)=-5t^2+40t+1.5$ m. Trouve sa hauteur maximale et sa vitesse quand elle touche le sol.`,
    fig: F({ view: { xmin: 0, xmax: 9, ymin: 0, ymax: 90 }, curves: [{ f: (t) => -5 * t * t + 40 * t + 1.5, a: 0, b: 8.04 }], points: [pt(4, 81.5)], step: { x: 1, y: 10 } }),
    steps: [S`$v=-10t+40=0\Rightarrow t=4$; $h(4)=81.5$ m.`, S`$h=0$ : $t=\frac{40+\sqrt{1630}}{10}\approx8.04$ s; $v\approx-40.4$ m/s.`], ans: "81.5 m; environ −40.4 m/s" },
  { title: "Déplacement et distance", q: S`Pour $s(t)=t^3-3t$ m sur $0\le t\le2$, trouve le déplacement et la distance totale.`,
    steps: [S`$v=3t^2-3=0$ à $t=1$ : l'objet y fait demi-tour.`, S`$s(0)=0$, $s(1)=-2$, $s(2)=2$.`, S`Déplacement $2-0=2$; distance $2+4=6$.`], ans: "déplacement 2 m; distance 6 m" },
  { title: "Lire un graphique de la vitesse", q: S`La vitesse d'un chariot est $v(t)=t^2-4t+3$ m/s. Quand est-il au repos, quand recule-t-il, et quelle est son accélération à $t=1$?`,
    fig: F({ view: { xmin: 0, xmax: 4.5, ymin: -2, ymax: 4 }, curves: [{ f: (t) => t * t - 4 * t + 3, a: 0, b: 4.5, color: "blue" }], points: [pt(1, 0), pt(3, 0)], step: { x: 1, y: 1 } }),
    steps: [S`$v=(t-1)(t-3)=0$ à $t=1,3$.`, S`$v\lt0$ sur $(1,3)$ : il recule.`, S`$a=2t-4\Rightarrow a(1)=-2$.`], ans: "repos à 1 s et à 3 s; recule sur (1, 3); a(1) = −2 m/s²" },
  { title: "Quand l'accélération est nulle", q: S`Pour $s(t)=t^4-4t^3$, trouve la vitesse au moment où l'accélération est nulle ($t\gt0$).`,
    steps: [S`$v=4t^3-12t^2$, $a=12t^2-24t=12t(t-2)$.`, S`$a=0$ à $t=2$ : $v(2)=32-48$.`], ans: "−16 m/s" },
];

const PROBLEMS = [
  { level: 1, q: S`Pour $s(t)=5t^2+2t$ m, trouve $v(3)$.`, recap: "v = s′.", ans: "32 m/s" },
  { level: 1, q: S`Pour $s(t)=t^3+t$, trouve $a(2)$.`, recap: "a est la dérivée seconde de s.", ans: "12" },
  { level: 1, q: S`Trouve $f''(x)$ pour $f(x)=x^6$.`, recap: "Dérive deux fois.", ans: S`$30x^4$` },
  { level: 2, q: S`Quand un objet tel que $s(t)=t^2-10t+7$ est-il au repos?`, recap: "v = 0.", ans: "t = 5" },
  { level: 2, q: S`Pour $s(t)=2t^3-5t^2$, trouve $a(2)$.`, recap: "a = 12t − 10.", ans: "14" },
  { level: 2, q: S`Pour $y=\sqrt x$, trouve $y''(4)$.`, recap: S`Puissances : $x^{1/2}\to x^{-3/2}$.`, ans: S`$-\frac1{32}$` },
  { level: 2, q: S`Une balle est lancée à partir du sol selon $h(t)=-4.9t^2+14.7t$ m. Trouve sa hauteur maximale.`, recap: "v = 0 au sommet.", ans: "11.025 m à t = 1.5 s" },
  { level: 2, q: S`Pour $s(t)=4t-t^2$, $t\ge0$, quand l'objet se déplace-t-il dans le sens positif? Esquisse $s$.`, recap: "v > 0.", ans: S`$0\le t\lt2$`, fig: gridT({ xmin: 0, xmax: 5, ymin: -6, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Pour $s(t)=t^3-12t^2+36t$ m, $0\le t\le8$, trouve la distance totale parcourue.`, recap: "Trouve d'abord les moments de demi-tour.", ans: S`demi-tours à $t=2,6$; $s=0,32,0,32$; distance 96 m` },
  { level: 3, space: 5, q: S`Pour $s(t)=t^3-6t^2$, $t\gt0$, trouve quand l'objet accélère et quand il ralentit.`, recap: "Compare les signes de v et de a.", ans: S`il accélère sur $(0,2)$ et pour $t\gt4$; il ralentit sur $(2,4)$` },
  { level: 3, space: 5, q: S`Trouve $a$ et $b$ pour que $s(t)=at^3+bt^2$ ait $v(1)=0$ et $a(1)=6$.`, recap: "Deux équations.", ans: S`$3a+2b=0$, $6a+2b=6$ : $a=2$, $b=-3$` },
  { level: 3, space: 5, q: S`Sur la Lune, une balle lancée vers le haut à 16 m/s a pour hauteur $h(t)=-0.8t^2+16t$; sur la Terre, $h(t)=-4.9t^2+16t$. Compare les hauteurs maximales et les temps pour les atteindre. Esquisse les deux.`, recap: "v = 0 pour chacune.", ans: S`Lune : 80 m à 10 s; Terre : environ 13.06 m à 1.63 s`, fig: gridT({ xmin: 0, xmax: 20, ymin: 0, ymax: 90 }, { x: 2, y: 10 }) },
  { level: 3, space: 5, q: S`Trouve $f'$, $f''$, $f'''$ et $f^{(4)}$ pour $f(x)=\frac1x$, et écris une formule pour $f^{(n)}(x)$.`, recap: "Suis le signe et le coefficient qui grandit.", ans: S`$-x^{-2}$, $2x^{-3}$, $-6x^{-4}$, $24x^{-5}$; $f^{(n)}=(-1)^n\,n!\,x^{-(n+1)}$` },
];

export const WS = {
  code: "2.3",
  title: "Vitesse, accélération et dérivées secondes",
  bigideas: S`Pour une position $s(t)$, la vitesse est $v=s'(t)$ et l'accélération est $a=v'(t)=s''(t)$. Le signe de $v$ donne le sens du mouvement; $v=0$ avec un changement de signe signifie que l'objet fait demi-tour. Un objet accélère quand $v$ et $a$ ont le même signe et ralentit quand ils sont de signes contraires. La distance totale exige les points de demi-tour : additionne les longueurs de chaque partie. La dérivée seconde $f''$ est la dérivée de $f'$, et les dérivées d'ordre supérieur s'obtiennent de la même façon.`,
  goals: ["Trouver la vitesse et l'accélération à partir de la position.", "Déterminer le sens du mouvement, le repos et les demi-tours.", "Déterminer quand un objet accélère ou ralentit.", "Trouver des dérivées secondes et d'ordre supérieur."],
  curriculum: "A2.4, A3.1, A3.2",
  vocab: [["Vitesse", "$v=s'(t)$"], ["Accélération", "$a=s''(t)$"], ["Module de la vitesse", "$|v|$"]],
  hook: S`L'odomètre d'une voiture indique $s(t)$. Qu'affiche l'indicateur de vitesse, et que change le fait d'appuyer sur le frein?`,
  concepts: [
    ["1. Position, vitesse, accélération", S`Chacune est la dérivée de la précédente. Ici $s=t^3-6t^2+8t$ (violet) et $v=3t^2-12t+8$ (bleu) :
${F({ view: { xmin: 0, xmax: 4.5, ymin: -4, ymax: 10 }, curves: [{ f: (t) => t ** 3 - 6 * t * t + 8 * t, a: 0, b: 4.5 }, { f: (t) => 3 * t * t - 12 * t + 8, a: 0, b: 4.5, color: "blue" }], step: { x: 1, y: 2 } })}`],
    ["2. Accélérer", S`$v$ et $a$ de même signe : accélère. Signes contraires : ralentit.`],
    ["3. Distance", S`Découpe l'intervalle aux moments de demi-tour et additionne $|\Delta s|$ pour chaque partie.`],
  ],
  tips: ["La vitesse peut être négative; son module ne peut pas l'être.", "Au repos signifie v = 0, et non a = 0.", "Distance ≠ déplacement quand l'objet fait demi-tour.", "Vérifie que les temps sont dans le domaine (t ≥ 0).", "Unités : m/s pour v, m/s² pour a."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
