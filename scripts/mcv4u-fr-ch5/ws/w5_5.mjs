// MCV4U-FR Fiche 5.5 — Établir des liens : modèles exponentiels (édition de l'enseignant; miroir de ../../mcv4u-ch5/ws/w5_5.mjs)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const E = Math.E;
const EXAMPLES = [
  { title: "La croissance de levures", q: S`Des levures croissent selon $P(t)=150e^{0.42t}$ cellules par mL après $t$ heures. À quelle vitesse croissent-elles en $t=5$?`,
    steps: [S`$P'(t)=0.42\cdot150e^{0.42t}$; $P'(5)=63e^{2.1}$.`], ans: "environ 514.5 cellules par mL par heure" },
  { title: "À partir d'un temps de doublement", q: S`Une culture de 400 double toutes les 6 heures. À quelle vitesse croît-elle lorsqu'elle atteint 1600?`,
    steps: [S`$k=\frac{\ln2}{6}\approx0.1155$; $P'=kP$.`, S`$P'=0.1155\times1600$.`], ans: "environ 184.8 par heure" },
  { title: "Désintégration radioactive", q: S`Le radium a une demi-vie de 1600 ans. À quelle vitesse un échantillon de 2 g se désintègre-t-il?`,
    steps: [S`$k=-\frac{\ln2}{1600}$; $P'=kP=-\frac{2\ln2}{1600}$.`], ans: S`environ $8.66\times10^{-4}$ g par année` },
  { title: "Intérêt continu", q: S`Un montant de 8000 dollars croît selon $A(t)=8000e^{0.035t}$. À quelle vitesse croît-il après 20 ans?`,
    steps: [S`$A'(20)=0.035\cdot8000e^{0.7}$.`], ans: "environ 563.9 dollars par année" },
  { title: "Refroidissement à partir de données", q: S`Une soupe à 90 °C est dans une pièce à 22 °C; elle est à 60 °C après 10 min. En supposant $T=22+68e^{-kt}$, trouve $k$ et le taux de refroidissement en $t=10$.`,
    fig: F({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 100 }, curves: [{ f: (t) => 22 + 68 * Math.exp(-0.0582 * t), a: 0, b: 50 }, { f: () => 22, color: "gray" }], points: [pt(0, 90), pt(10, 60)], step: { x: 5, y: 10 } }),
    steps: [S`$38=68e^{-10k}\Rightarrow k=\frac{\ln(68/38)}{10}\approx0.0582$.`, S`$T'(10)=-k(T-22)=-0.0582\times38$.`], ans: "k ≈ 0.0582; refroidissement d'environ 2.21 °C par minute" },
  { title: "La pression atmosphérique", q: S`La pression atmosphérique est $P(h)=101.3e^{-0.12h}$ kPa à $h$ km d'altitude. Trouve le taux de variation en $h=2$.`,
    steps: [S`$P'(h)=-0.12\cdot101.3e^{-0.12h}$; en 2 : $-12.156e^{-0.24}$.`], ans: "environ −9.56 kPa par km" },
  { title: "Concentration maximale", q: S`La concentration d'un médicament est $C(t)=6te^{-0.25t}$ mg/L. Trouve le moment et la valeur du maximum.`,
    fig: F({ view: { xmin: 0, xmax: 25, ymin: 0, ymax: 10 }, curves: [{ f: (t) => 6 * t * Math.exp(-0.25 * t), a: 0, b: 25 }], points: [pt(4, 24 / E)], step: { x: 5, y: 1 } }),
    steps: [S`$C'=6e^{-0.25t}(1-0.25t)=0\Rightarrow t=4$.`, S`$C(4)=24e^{-1}$.`], ans: "à 4 h, environ 8.83 mg/L" },
  { title: "Propagation logistique", q: S`Une rumeur atteint $P(t)=\frac{500}{1+24e^{-0.8t}}$ élèves après $t$ jours. Quand se propage-t-elle le plus vite, et à quelle vitesse?`,
    fig: F({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 550 }, curves: [{ f: (t) => 500 / (1 + 24 * Math.exp(-0.8 * t)), a: 0, b: 10 }, { f: () => 500, color: "gray" }], points: [pt(Math.log(24) / 0.8, 250)], step: { x: 1, y: 50 } }),
    steps: [S`La plus rapide à la moitié de la limite, $P=250$ : $24e^{-0.8t}=1\Rightarrow t=\frac{\ln24}{0.8}\approx3.97$.`, S`Taux $0.8\cdot250\cdot\left(1-\frac{250}{500}\right)=100$.`], ans: "après environ 3.97 jours, 100 élèves par jour" },
  { title: "Une courbe d'apprentissage", q: S`La vitesse d'un dactylographe est $L(t)=100(1-e^{-0.2t})$ mots par minute après $t$ semaines. À quel rythme s'améliore-t-elle en $t=5$?`,
    steps: [S`$L'(t)=20e^{-0.2t}$; $L'(5)=20e^{-1}$.`], ans: "environ 7.36 mots par minute par semaine" },
];

const PROBLEMS = [
  { level: 1, q: S`Pour $P(t)=300e^{0.25t}$, trouve $P'(0)$.`, recap: "kP₀.", ans: "75" },
  { level: 1, q: S`Trouve la demi-vie lorsque $k=-0.1$.`, recap: "ln 2 / 0.1.", ans: "6.931" },
  { level: 1, q: S`Trouve le temps de doublement lorsque $k=0.07$.`, recap: "ln 2 / 0.07.", ans: "9.902" },
  { level: 2, q: S`Pour $A(t)=1500e^{0.045t}$, trouve $A'(10)$.`, recap: "kA.", ans: "environ 105.86 dollars par année" },
  { level: 2, q: S`Un thé refroidit selon $T(t)=21+75e^{-0.06t}$ °C. Trouve $T'(0)$.`, recap: S`$-0.06\times75$.`, ans: "−4.5 °C par minute" },
  { level: 2, q: S`Une ville de 2000 habitants double tous les 15 ans. À quelle vitesse croît-elle maintenant?`, recap: "k = ln 2 / 15.", ans: "environ 92.4 personnes par année" },
  { level: 2, q: S`80 g d'une substance dont la demi-vie est de 12 jours : à quelle vitesse se désintègre-t-elle maintenant?`, recap: "k = −ln 2 / 12.", ans: "environ −4.62 g par jour" },
  { level: 2, q: S`Esquisse $P(t)=100e^{0.3t}$ pour $0\le t\le8$ et trace sa tangente en $t=4$.`, recap: S`$P'(4)=30e^{1.2}$.`, ans: S`$P(4)\approx332$, pente $\approx99.6$`, fig: gridT({ xmin: 0, xmax: 8, ymin: 0, ymax: 1200 }, { x: 1, y: 100 }) },
  { level: 3, space: 5, q: S`Une population suit $P(t)=\frac{800}{1+7e^{-0.6t}}$. Quand croît-elle le plus vite, et à quelle vitesse?`, recap: "La plus rapide à la moitié de la limite.", ans: S`$t=\frac{\ln7}{0.6}\approx3.24$; $0.6\cdot400\cdot0.5=120$ par unité de temps` },
  { level: 3, space: 5, q: S`Lequel est le plus avantageux : 4 % composé de façon continue ou 4.1 % composé une fois par année? Explique.`, recap: S`Compare $e^{0.04}$ avec $1.041$.`, ans: S`$e^{0.04}\approx1.0408\lt1.041$ : le taux annuel de 4.1 % est légèrement meilleur` },
  { level: 3, space: 5, q: S`Un café refroidit de 95 °C à 70 °C en 5 min dans une pièce à 20 °C. Trouve $k$ dans $T=20+75e^{-kt}$ et le moment où il atteint 40 °C.`, recap: "Utilise la donnée, puis résous.", ans: S`$k=\frac{\ln1.5}5\approx0.0811$; $t=\frac{\ln3.75}{k}\approx16.3$ min` },
  { level: 3, space: 5, q: S`Une concentration est $C(t)=kte^{-t/3}$. Si la plus grande concentration est de 6 mg/L, trouve $k$.`, recap: "Maximum en t = 3.", ans: S`$3ke^{-1}=6\Rightarrow k=2e\approx5.437$` },
  { level: 3, space: 5, q: S`Un score d'habileté est $L(t)=100(1-e^{-0.3t})$. Quand s'améliore-t-il à raison de 5 points par heure? Esquisse $L$.`, recap: S`$30e^{-0.3t}=5$.`, ans: S`$t=\frac{\ln6}{0.3}\approx5.97$ h`, fig: gridT({ xmin: 0, xmax: 15, ymin: 0, ymax: 110 }, { x: 1, y: 10 }) },
];

export const WS = {
  code: "5.5",
  title: "Établir des liens : modèles exponentiels",
  bigideas: S`Si $P(t)=P_0e^{kt}$, alors $P'(t)=kP(t)$ : le taux est proportionnel à la quantité. Une croissance ($k\gt0$) double toutes les $\frac{\ln2}{k}$ unités de temps; une décroissance ($k\lt0$) diminue de moitié toutes les $\frac{\ln2}{|k|}$. L'intérêt continu, la loi du refroidissement de Newton ($T=T_s+(T_0-T_s)e^{-kt}$), la pression et les modèles de médicaments utilisent tous la même dérivée. Les modèles logistiques $P=\frac{M}{1+Ae^{-kt}}$ croissent le plus vite en $P=\frac M2$.`,
  goals: ["Utiliser P′ = kP.", "Trouver k à partir d'un temps de doublement ou d'une demi-vie.", "Modéliser l'intérêt, le refroidissement et la désintégration.", "Trouver des maximums et la croissance la plus rapide."],
  curriculum: "A3.5, B2",
  vocab: [["$P'=kP$", "taux proportionnel"], ["Demi-vie", "$\\frac{\\ln2}{|k|}$"], ["Logistique", "$\\frac{M}{1+Ae^{-kt}}$"]],
  hook: S`Une colonie de 100 bactéries double toutes les heures. Combien y en a-t-il après 10 heures? À quelle vitesse croît-elle alors, comparativement au début?`,
  concepts: [
    ["1. Croissance et décroissance", S`Croissance $100e^{0.3t}$ (violet) et décroissance $800e^{-0.2t}$ (bleu) :
${F({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 900 }, curves: [{ f: (t) => 100 * Math.exp(0.3 * t), a: 0, b: 10 }, { f: (t) => 800 * Math.exp(-0.2 * t), color: "blue", a: 0, b: 10 }], step: { x: 1, y: 100 } })}`],
    ["2. Trouver k", S`Temps de doublement $d$ : $k=\frac{\ln2}{d}$; demi-vie $h$ : $k=-\frac{\ln2}{h}$.`],
    ["3. Logistique", S`Exponentielle au début, puis stabilisation à $M$; la plus abrupte en $\frac M2$.`],
  ],
  tips: ["k < 0 pour une décroissance.", "Le temps de doublement ne dépend pas de la valeur de départ.", "Garde des unités de temps cohérentes.", "Les taux demandent des unités.", "Logistique : la plus rapide à la moitié de la limite."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
