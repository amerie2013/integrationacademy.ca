// MCV4U-FR Fiche d'exercices 1.1 — Taux de variation et pente d'une courbe (édition de l'enseignant)
import { F, gridT, pt } from "./figT.mjs";

const EXAMPLES = [
  { title: "Taux moyen à partir d'une table", q: String.raw`La population d'une ville est de 1200, 1450, 1800, 2300, 2950 habitants à $t=0,2,4,6,8$ ans. Trouve le taux de variation moyen sur $[0,8]$ et sur $[6,8]$.`,
    steps: [String.raw`$[0,8]$ : $\frac{2950-1200}{8}=218.75$ personnes par année.`, String.raw`$[6,8]$ : $\frac{2950-2300}{2}=325$ personnes par année.`], ans: "218.75 et 325 personnes par année : la croissance s'accélère" },
  { title: "Vitesse moyenne à partir d'une équation", q: String.raw`La distance parcourue par une voiture est $s(t)=3t^2$ m. Trouve sa vitesse moyenne sur $[2,5]$.`,
    fig: F({ view: { xmin: -0.3, xmax: 5.5, ymin: -5, ymax: 85 }, curves: [{ f: (t) => 3 * t * t, a: 0, b: 5.4 }, { f: (t) => 12 + 21 * (t - 2), color: "amber", a: 1, b: 5.5 }], points: [pt(2, 12), pt(5, 75)], step: { x: 1, y: 10 } }),
    steps: [String.raw`$\frac{s(5)-s(2)}{5-2}=\frac{75-12}{3}$.`], ans: "21 m/s" },
  { title: "Pente d'une tangente à partir d'un graphique", q: String.raw`La tangente à $y=\sqrt x$ en $x=4$ passe par $(0,1)$. Estime le taux de variation instantané en $x=4$.`,
    fig: F({ view: { xmin: -0.5, xmax: 9, ymin: -0.5, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, b: 9 }, { f: (x) => 1 + 0.25 * x, color: "green" }], points: [pt(4, 2), pt(0, 1)], step: { x: 1, y: 1 } }),
    steps: [String.raw`La tangente passe par $(0,1)$ et $(4,2)$ : pente $\frac{2-1}{4-0}$.`], ans: "0.25" },
  { title: "Des sécantes qui se rapprochent", q: String.raw`Le volume d'eau est $V(t)=t^3$ L. Estime le taux en $t=2$ à l'aide de sécantes jusqu'à $t=3, 2.5, 2.1, 2.01$.`,
    steps: [String.raw`$\frac{27-8}{1}=19$; $\frac{15.625-8}{0.5}=15.25$; $\frac{9.261-8}{0.1}=12.61$; $\frac{8.120601-8}{0.01}=12.0601$.`], ans: "≈ 12 L par unité de temps" },
  { title: "Une estimation centrée", q: String.raw`Estime le taux de variation instantané de $f(x)=2^x$ en $x=3$ à l'aide de $[2.99,3.01]$.`,
    steps: [String.raw`$\frac{2^{3.01}-2^{2.99}}{0.02}\approx\frac{8.0556-7.9447}{0.02}\approx5.545$.`], ans: "≈ 5.55" },
  { title: "Un coin", q: String.raw`Explique pourquoi $f(x)=|2x-4|$ n'a pas de tangente en $x=2$.`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.abs(2 * x - 4) }], points: [pt(2, 0)], step: { x: 1, y: 1 } }),
    steps: [String.raw`Les sécantes venant de la gauche ont une pente de $-2$; celles venant de la droite, une pente de $2$.`], ans: "les pentes à gauche et à droite sont différentes : pas de tangente" },
  { title: "Un taux avec unités", q: String.raw`Produire $n$ articles coûte $C(n)=500+12n-0.01n^2$ dollars. Trouve le taux de variation moyen de 100 à 200 articles.`,
    steps: [String.raw`$C(100)=1600$, $C(200)=2500$.`, String.raw`$\frac{2500-1600}{100}=9$.`], ans: "9 dollars par article" },
  { title: "Où le taux est-il nul?", q: String.raw`Le graphique de la température atteint un sommet à $t=6$ h. Où le taux de variation instantané est-il nul, positif, négatif?`,
    fig: F({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 22 }, curves: [{ f: (t) => -0.5 * (t - 2) * (t - 10) + 12, a: 0, b: 12 }], points: [pt(6, 20)], step: { x: 1, y: 2 } }),
    steps: [String.raw`Tangente horizontale au sommet $t=6$; la courbe monte avant et descend après.`], ans: "0 à t = 6; positif pour t < 6; négatif pour t > 6" },
  { title: "Un graphique distance-temps par parties", q: String.raw`Le graphique de la distance d'une marcheuse va de $(0,0)$ à $(10,800)$, reste horizontal jusqu'à $(15,800)$, puis atteint $(25,2000)$ (min, m). Trouve sa vitesse sur chaque partie.`,
    fig: F({ view: { xmin: -1, xmax: 27, ymin: -100, ymax: 2200 }, curves: [], segs: [{ pts: [[0, 0], [10, 800], [15, 800], [25, 2000]], color: "violet" }], points: [pt(10, 800), pt(15, 800), pt(25, 2000)], step: { x: 5, y: 400 } }),
    steps: [String.raw`$\frac{800}{10}=80$; $0$; $\frac{1200}{10}=120$ m/min.`], ans: "80, 0, 120 m/min" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Trouve la pente de la sécante qui passe par $(-2,7)$ et $(3,-8)$.`, recap: "Pente d'une sécante.", ans: "−3" },
  { level: 1, q: String.raw`Trouve le taux de variation moyen de $f(x)=x^2-1$ sur $[0,3]$.`, recap: "Taux moyen.", ans: "3" },
  { level: 1, q: String.raw`Le carburant est mesuré en litres et la distance en kilomètres. Indique les unités du taux de consommation de carburant par rapport à la distance.`, recap: "Unités.", ans: "L/km" },
  { level: 2, q: String.raw`La température de l'eau est de 20, 32, 41, 47 °C à $t=0,5,10,15$ min. Trouve le taux moyen sur $[0,15]$ et sur $[10,15]$.`, recap: "Table.", ans: "1.8 et 1.2 °C/min" },
  { level: 2, q: String.raw`Trace la tangente à $y=0.25x^2$ en $x=2$ et estime sa pente.`, recap: "Tangente à partir d'un graphique.", ans: "≈ 1",
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 0.25 * x * x }], points: [pt(2, 1)], step: { x: 1, y: 1 } }) },
  { level: 2, q: String.raw`Pour $f(x)=x^2+2$, calcule les pentes des sécantes de $x=1$ à $x=2, 1.5, 1.1, 1.01$ et estime la pente de la tangente en $x=1$.`, recap: "Sécantes de plus en plus courtes.", ans: "3, 2.5, 2.1, 2.01 → 2" },
  { level: 2, q: String.raw`La hauteur d'une balle est $h(t)=-4.9t^2+15t$ m. Estime sa vitesse à $t=1$ à l'aide de $[0.99,1.01]$.`, recap: "Estimation centrée.", ans: "5.2 m/s" },
  { level: 2, q: String.raw`Sur quels intervalles le taux de variation instantané de la fonction représentée est-il négatif?`, recap: "Signe à partir d'un graphique.", ans: String.raw`$-1\lt x\lt1$ (entre les points tournants)`,
    fig: F({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 - 3 * x }], step: { x: 0.5, y: 1 } }) },
  { level: 3, space: 5, q: String.raw`Montre que $f(x)=|x^2-1|$ n'a pas de tangente en $x=1$ en trouvant les limites à gauche et à droite des pentes des sécantes.`, recap: "Coin.", ans: "pente à gauche −2, pente à droite 2" },
  { level: 3, space: 5, q: String.raw`La vitesse moyenne d'une conductrice sur un trajet est de 60 km/h. À l'aide des sécantes et des tangentes du graphique distance-temps, explique pourquoi l'indicateur de vitesse doit afficher exactement 60 km/h à un certain moment.`, recap: "Raisonnement.", ans: "la tangente tourne sans saut, donc à un certain point elle est parallèle à la sécante (pente 60)" },
  { level: 3, space: 5, q: String.raw`Pour $f(x)=x^2$, trouve $b>1$ pour que le taux de variation moyen sur $[1,b]$ soit égal au taux instantané en $x=3$.`, recap: "Faire concorder les taux.", ans: String.raw`$1+b=6$ : $b=5$` },
  { level: 3, space: 5, q: String.raw`Un café refroidit selon $T(t)=20+60(0.9)^t$ °C. Trouve le taux moyen sur $[0,10]$ et estime le taux instantané à $t=5$. Lequel est le plus grand en valeur absolue, et pourquoi?`, recap: "Comparer des taux.", ans: "≈ −3.91 et ≈ −3.73 °C/min; le café refroidit le plus vite au début" },
  { level: 3, space: 5, q: String.raw`Esquisse un graphique lisse dont le taux de variation instantané est positif et croissant sur $[0,2]$, nul en $x=4$ et négatif sur $(4,6]$.`, recap: "Des taux à un graphique.", ans: "une montée concave vers le haut, puis une courbe qui s'infléchit jusqu'à un sommet en x = 4, puis qui descend", fig: gridT({ xmin: 0, xmax: 6, ymin: 0, ymax: 10 }, { x: 1, y: 1 }) },
];

export const WS = {
  code: "1.1",
  title: "Taux de variation et pente d'une courbe",
  bigideas: String.raw`Un taux de variation compare la variation d'une quantité à la variation d'une autre. Le taux moyen sur $[a,b]$ est la pente de la sécante : $\frac{f(b)-f(a)}{b-a}$. Le taux instantané en $x=a$ est la pente de la tangente; on peut l'estimer à partir d'une tangente tracée ou à l'aide de sécantes dont le deuxième point s'approche de $a$ (un intervalle centré est souvent le meilleur choix). À un coin, les pentes à gauche et à droite sont différentes : il n'existe donc pas de tangente.`,
  goals: ["Calculer des taux moyens comme pentes de sécantes.", "Estimer des taux instantanés à partir de tangentes.", "Utiliser des sécantes qui se rapprochent et des intervalles centrés.", "Reconnaître les points sans tangente."],
  curriculum: "A1.1–A1.3",
  vocab: [["Sécante", "droite qui passe par deux points d'une courbe"], ["Tangente", "droite qui suit la direction de la courbe en un point"], ["Taux moyen", "$\\frac{\\Delta y}{\\Delta x}$"]],
  hook: String.raw`Ton téléphone affiche une vitesse moyenne de 48 km/h pour un trajet en voiture. As-tu déjà roulé à exactement 48 km/h? À 80 km/h?`,
  concepts: [
    ["1. De la sécante à la tangente", String.raw`Quand $B$ s'approche de $A$, la sécante devient la tangente.
${F({ view: { xmin: -0.5, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 0.6 * x * x }, { f: (x) => 0.6 + 2.4 * (x - 1), color: "amber" }, { f: (x) => 0.6 + 1.2 * (x - 1), color: "green" }], points: [pt(1, 0.6, "A"), pt(3, 5.4, "B")], step: { x: 1, y: 1 } })}`],
    ["2. Unités", String.raw`Unités de sortie par unité d'entrée.`],
    ["3. Courbe lisse", String.raw`Pas de coins ni de discontinuités → une tangente existe.`],
  ],
  tips: ["Soustrais dans le même ordre.", "Lis la pente d'une tangente à partir de points éloignés.", "Les intervalles centrés sont plus précis.", "Indique les unités.", "Les coins n'ont pas de tangente."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
