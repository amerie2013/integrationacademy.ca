// MCV4U-FR Fiche 2.6 — Problèmes de taux de variation (édition enseignant)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Coût marginal", q: S`$C(x)=3000+25x+0.01x^2$ dollars. Trouve $C'(200)$ et le coût réel du 201e article.`,
    steps: [S`$C'(x)=25+0.02x\Rightarrow C'(200)=29$.`, S`$C(201)-C(200)=25+0.01(201^2-200^2)=25+4.01$.`], ans: "environ 29 dollars par article; le 201e article coûte 29.01 dollars" },
  { title: "Coût moyen et coût marginal", q: S`$C(x)=400+6x+0.04x^2$. Compare le coût moyen et le coût marginal à $x=100$.`,
    fig: F({ view: { xmin: 0, xmax: 250, ymin: 0, ymax: 40 }, curves: [{ f: (x) => 400 / x + 6 + 0.04 * x, a: 15, b: 250 }, { f: (x) => 6 + 0.08 * x, color: "blue", a: 0, b: 250 }], points: [pt(100, 14)], step: { x: 50, y: 5 } }),
    steps: [S`$\frac{C(100)}{100}=\frac{400+600+400}{100}=14$.`, S`$C'(x)=6+0.08x\Rightarrow C'(100)=14$.`], ans: "les deux valent 14 dollars par article : le coût moyen est le plus bas là où il est égal au coût marginal" },
  { title: "Revenu à partir de la demande", q: S`La demande est $p=80-0.5x$ dollars. Trouve $R'(60)$ et le prix qui maximise le revenu.`,
    steps: [S`$R=80x-0.5x^2$, $R'=80-x$; $R'(60)=20$.`, S`$R'=0\Rightarrow x=80$, $p=40$, $R=3200$.`], ans: "R′(60) = 20 dollars par article; prix de 40 dollars, revenu de 3200 dollars" },
  { title: "Profit", q: S`$R(x)=30x$ et $C(x)=200+10x+0.05x^2$. Trouve $P'(100)$ et le profit maximal.`,
    fig: F({ view: { xmin: 0, xmax: 400, ymin: -400, ymax: 2000 }, curves: [{ f: (x) => -200 + 20 * x - 0.05 * x * x, a: 0, b: 400 }], points: [pt(200, 1800)], step: { x: 50, y: 400 } }),
    steps: [S`$P=-200+20x-0.05x^2$, $P'=20-0.1x$; $P'(100)=10$.`, S`$P'=0$ en $x=200$ : $P=1800$.`], ans: "10 dollars par article; maximum de 1800 dollars à 200 articles" },
  { title: "Population", q: S`Une ville compte $P(t)=12000+400t+15t^2$ habitants $t$ années après 2025. À quel rythme croît-elle en 2030?`,
    steps: [S`$P'(t)=400+30t$; $t=5$.`], ans: "550 habitants par année" },
  { title: "Vidange d'un réservoir", q: S`Un réservoir contient $V(t)=50(10-t)^2$ L après $t$ min ($0\le t\le10$). À quel rythme se vide-t-il à $t=4$?`,
    fig: F({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 5000 }, curves: [{ f: (t) => 50 * (10 - t) ** 2, a: 0, b: 10 }, { f: (t) => 1800 - 600 * (t - 4), color: "green", a: 1, b: 7 }], points: [pt(4, 1800)], step: { x: 1, y: 500 } }),
    steps: [S`$V'(t)=100(10-t)(-1)$; $V'(4)=-600$.`], ans: "il se vide à raison de 600 L par minute" },
  { title: "Courant électrique", q: S`La charge qui traverse un fil est $Q(t)=t^3-2t^2+5t$ coulombs. Le courant est $I=Q'(t)$ (ampères). Trouve $I(2)$.`,
    steps: [S`$I=3t^2-4t+5$; $I(2)=12-8+5$.`], ans: "9 A" },
  { title: "Une sphère", q: S`Trouve le taux de variation du volume $V=\frac43\pi r^3$ d'une sphère par rapport à son rayon lorsque $r=10$ cm.`,
    steps: [S`$\frac{dV}{dr}=4\pi r^2=400\pi$.`], ans: S`$400\pi\approx1256.6$ cm³ par cm (l'aire de la surface)` },
  { title: "Force et distance", q: S`L'attraction entre deux objets est $F(r)=\frac{4000}{r^2}$ N à une distance de $r$ m. Trouve $F'(20)$ et interprète-le.`,
    fig: F({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 40 }, curves: [{ f: (r) => 4000 / (r * r), a: 10, b: 50 }], points: [pt(20, 10)], step: { x: 5, y: 5 } }),
    steps: [S`$F'(r)=-8000r^{-3}$; $F'(20)=-\frac{8000}{8000}$.`], ans: "−1 N par m : la force diminue d'environ 1 N par mètre supplémentaire" },
];

const PROBLEMS = [
  { level: 1, q: S`$C(x)=500+8x$ dollars. Quel est le coût marginal?`, recap: "Coût linéaire.", ans: "8 dollars par article" },
  { level: 1, q: S`$R(x)=15x-0.02x^2$. Trouve $R'(100)$.`, recap: "R′ = 15 − 0.04x.", ans: "11 dollars par article" },
  { level: 1, q: S`La charge est $Q(t)=2t^2+t$ C. Trouve le courant à $t=3$ s.`, recap: "I = Q′.", ans: "13 A" },
  { level: 2, q: S`$C(x)=1200+30x-0.02x^2+0.0001x^3$. Trouve le coût marginal à $x=100$.`, recap: "C′ = 30 − 0.04x + 0.0003x².", ans: "29 dollars par article" },
  { level: 2, q: S`$R(x)=45x$ et $C(x)=500+5x+0.1x^2$. Trouve le profit marginal à $x=150$.`, recap: "P′ = R′ − C′.", ans: "10 dollars par article" },
  { level: 2, q: S`La demande est $p=50-0.25x$. Trouve la quantité, le prix et le revenu qui maximisent le revenu.`, recap: "R = xp, R′ = 0.", ans: "100 articles à 25 dollars; 2500 dollars" },
  { level: 2, q: S`La température d'un four est $T(t)=20+15t-0.25t^2$ °C après $t$ min. Trouve $T'(10)$.`, recap: "Unités : °C par minute.", ans: "10 °C par minute" },
  { level: 2, q: S`Une colonie compte $P(t)=900-\frac{600}{t+1}$ insectes. Trouve $P'(4)$ et esquisse $P$.`, recap: "P′ = 600/(t + 1)².", ans: "24 insectes par jour", fig: gridT({ xmin: 0, xmax: 20, ymin: 0, ymax: 1000 }, { x: 2, y: 100 }) },
  { level: 3, space: 5, q: S`$C(x)=900+4x+0.01x^2$. Trouve le niveau de production qui minimise le coût moyen, et montre qu'à ce niveau le coût moyen et le coût marginal sont égaux.`, recap: "A(x) = C(x)/x, A′ = 0.", ans: S`$x=300$; $A(300)=10=C'(300)$` },
  { level: 3, space: 5, q: S`La quantité vendue au prix $p$ est $x=1000-20p$. Écris le revenu en fonction de $p$, trouve $\frac{dR}{dp}$ à $p=20$, et le prix qui maximise le revenu.`, recap: "R(p) = p(1000 − 20p).", ans: S`$R'(p)=1000-40p$; $200$ dollars par dollar; $p=25$` },
  { level: 3, space: 5, q: S`Un cylindre a une hauteur de 10 cm. Trouve le taux de variation de son volume par rapport à son rayon à $r=3$ cm, et explique le résultat géométriquement.`, recap: "V = 10πr².", ans: S`$60\pi\approx188.5$ cm³ par cm : l'aire de la surface latérale` },
  { level: 3, space: 5, q: S`Un réservoir contient $V(t)=2000\left(1-\frac{t}{40}\right)^2$ L. Trouve le rythme de vidange à $t=10$ min, et le moment où il se vide à raison de 50 L par minute.`, recap: "Règle de dérivation en chaîne sur le carré.", ans: S`$-75$ L par min; $t=20$ min` },
  { level: 3, space: 5, q: S`Le profit d'une entreprise est $P(x)=-0.02x^2+12x-800$. Trouve les quantités au seuil de rentabilité, le profit maximal, et esquisse $P$.`, recap: "P = 0 et P′ = 0.", ans: S`$x\approx76.4$ et $523.6$; maximum de 1000 dollars à $x=300$`, fig: gridT({ xmin: 0, xmax: 600, ymin: -1000, ymax: 1200 }, { x: 50, y: 200 }) },
];

export const WS = {
  code: "2.6",
  title: "Problèmes de taux de variation",
  bigideas: S`Une dérivée est un taux avec des unités : unités de sortie par unité d'entrée. En économie, $C'(x)$ (coût marginal) estime le coût de l'article suivant, $R'(x)$ est le revenu marginal et $P'(x)=R'(x)-C'(x)$ est le profit marginal; le revenu $R=xp$ utilise la fonction de demande $p(x)$. En sciences, les dérivées donnent des taux de croissance, des rythmes de vidange, des courants et des forces. Un taux nul indique souvent un maximum ou un minimum. Donne toujours le nombre, ses unités et sa signification.`,
  goals: ["Interpréter les dérivées avec leurs unités.", "Utiliser le coût, le revenu et le profit marginaux.", "Construire le revenu à partir d'une fonction de demande.", "Appliquer les dérivées à des modèles scientifiques."],
  curriculum: "A3.5",
  vocab: [["Coût marginal", "$C'(x)\\approx C(x+1)-C(x)$"], ["Fonction de demande", "le prix en fonction de la quantité"], ["Coût moyen", "$\\frac{C(x)}{x}$"]],
  hook: S`Le coût de fabrication de $x$ pains dans une boulangerie est $C(x)$. Quel nombre aide à décider s'il faut cuire un pain de plus : $C(100)$, $\frac{C(100)}{100}$ ou $C'(100)$?`,
  concepts: [
    ["1. La tangente estime l'unité suivante", S`$C(x)=500+20x+0.05x^2$ avec sa tangente en $x=100$ (pente $C'(100)=30$) :
${F({ view: { xmin: 0, xmax: 200, ymin: 0, ymax: 7000 }, curves: [{ f: (x) => 500 + 20 * x + 0.05 * x * x, a: 0, b: 200 }, { f: (x) => 3000 + 30 * (x - 100), color: "green", a: 20, b: 180 }], points: [pt(100, 3000)], step: { x: 25, y: 1000 } })}`],
    ["2. Profit", S`$P=R-C$, donc $P'=R'-C'$; le profit est maximal là où $R'=C'$.`],
    ["3. Interpréter", S`Nombre $+$ unités $+$ signification, p. ex. « $-5$ °C par min : refroidit de 5 degrés par minute ».`],
  ],
  tips: ["Un taux n'est pas un total.", "Les coûts fixes disparaissent dans C′.", "Le revenu est maximal là où R′ = 0, et non là où R = 0.", "Un taux négatif signifie une diminution : dis-le.", "Garde les réponses dans le domaine réaliste."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
