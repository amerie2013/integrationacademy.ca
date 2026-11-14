// MCV4U-FR Fiche 2.2 — La règle du produit (édition enseignant)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Deux polynômes", q: S`Dérive $y=(4x-1)(x^2+2)$.`,
    steps: [S`$u'v+uv'=4(x^2+2)+(4x-1)(2x)$.`, S`$=4x^2+8+8x^2-2x$.`], ans: S`$y'=12x^2-2x+8$` },
  { title: "Une puissance fois un binôme", q: S`Dérive $y=x^4(3-x)$.`,
    steps: [S`$4x^3(3-x)+x^4(-1)=12x^3-4x^3-x^4$.`], ans: S`$y'=12x^3-5x^4$` },
  { title: "Un facteur racine", q: S`Dérive $y=\sqrt x\,(x+6)$ avec la règle du produit.`,
    steps: [S`$\frac1{2\sqrt x}(x+6)+\sqrt x\cdot1$.`, S`Dénominateur commun : $\frac{x+6+2x}{2\sqrt x}$.`], ans: S`$y'=\frac{3x+6}{2\sqrt x}$` },
  { title: "À partir d'un tableau", q: S`$f(1)=-2$, $f'(1)=4$, $g(1)=5$, $g'(1)=-3$. Trouve $(fg)'(1)$.`,
    steps: [S`$f'(1)g(1)+f(1)g'(1)=4(5)+(-2)(-3)$.`], ans: "26" },
  { title: "Une tangente", q: S`Trouve la tangente à $y=(x-2)(x^2+1)$ en $x=0$.`,
    fig: F({ view: { xmin: -2, xmax: 3, ymin: -8, ymax: 4 }, curves: [{ f: (x) => (x - 2) * (x * x + 1) }, { f: (x) => x - 2, color: "green" }], points: [pt(0, -2)], step: { x: 1, y: 1 } }),
    steps: [S`$y(0)=-2$.`, S`$y'=(x^2+1)+(x-2)(2x)$, donc $y'(0)=1$.`], ans: S`$y=x-2$` },
  { title: "Tangentes horizontales", q: S`Trouve les points où $y=x^2(x-3)$ a une tangente horizontale.`,
    fig: F({ view: { xmin: -1.5, xmax: 4, ymin: -6, ymax: 3 }, curves: [{ f: (x) => x * x * (x - 3) }], points: [pt(0, 0), pt(2, -4)], step: { x: 1, y: 1 } }),
    steps: [S`$y'=2x(x-3)+x^2=3x^2-6x=3x(x-2)$.`], ans: "(0, 0) et (2, −4)" },
  { title: "Trois facteurs", q: S`Pour $y=(x+1)(x+2)(x-3)$, trouve $y'(1)$.`,
    steps: [S`$y'=(x+2)(x-3)+(x+1)(x-3)+(x+1)(x+2)$.`, S`En 1 : $3(-2)+2(-2)+2(3)=-6-4+6$.`], ans: "−4" },
  { title: "Un rectangle qui grandit", q: S`Un rectangle a une longueur $L=10+2t$ cm et une largeur $W=6+t$ cm après $t$ s. À quel rythme son aire varie-t-elle à $t=3$?`,
    fig: F({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 300 }, curves: [{ f: (t) => (10 + 2 * t) * (6 + t), a: 0, b: 8 }, { f: (t) => 144 + 34 * (t - 3), color: "green" }], points: [pt(3, 144)], step: { x: 1, y: 50 } }),
    steps: [S`$A'=L'W+LW'$; à $t=3$ : $L=16$, $W=9$.`, S`$A'=2(9)+16(1)$.`], ans: "34 cm² par seconde" },
  { title: "Le carré d'une fonction", q: S`Utilise la règle du produit sur $f\cdot f$ pour dériver $y=(x^2+3x)^2$, puis trouve $y'(1)$.`,
    steps: [S`$(f\cdot f)'=f'f+ff'=2ff'$.`, S`$y'=2(x^2+3x)(2x+3)$; $y'(1)=2(4)(5)$.`], ans: S`$y'=2(x^2+3x)(2x+3)$; $y'(1)=40$` },
];

const PROBLEMS = [
  { level: 1, q: S`Dérive $y=x(x+5)$ avec la règle du produit.`, recap: "u = x, v = x + 5.", ans: S`$2x+5$` },
  { level: 1, q: S`Dérive $y=x^3(x-2)$.`, recap: "u′v + uv′.", ans: S`$4x^3-6x^2$` },
  { level: 1, q: S`$f(0)=2$, $f'(0)=-1$, $g(0)=3$, $g'(0)=4$. Trouve $(fg)'(0)$.`, recap: "Substitue dans la règle.", ans: "5" },
  { level: 2, q: S`Pour $y=(2x^2-1)(x+3)$, trouve $y'(1)$.`, recap: "Dérive, puis substitue.", ans: "17" },
  { level: 2, q: S`Dérive et simplifie $y=(5-x)(x^2+x)$.`, recap: "Attention au signe de u′.", ans: S`$-3x^2+8x+5$` },
  { level: 2, q: S`Pour $y=(\sqrt x+1)(x-4)$, trouve $y'(4)$.`, recap: "Un des termes s'annule en x = 4.", ans: "3" },
  { level: 2, q: S`Trouve la tangente à $y=(x+1)(x-3)$ en $x=2$ et trace-la.`, recap: "Point et pente.", ans: S`$y=2x-7$`, fig: gridT({ xmin: -2, xmax: 4, ymin: -5, ymax: 4 }, { x: 1, y: 1 }) },
  { level: 2, q: S`Un billet coûte 20 dollars et son prix baisse de 0.50 dollar par semaine, tandis que l'assistance est de 900 personnes et augmente de 30 par semaine. À quel rythme le revenu varie-t-il?`, recap: "R = pq, R′ = p′q + pq′.", ans: "il augmente de 150 dollars par semaine" },
  { level: 3, space: 5, q: S`Trouve tous les points où $y=(x^2-1)(x^2-4)$ a une tangente horizontale, et esquisse la courbe.`, recap: "Factorise y′.", ans: S`$y'=2x(2x^2-5)$ : $(0,4)$, $(\pm1.58,-2.25)$`, fig: gridT({ xmin: -3, xmax: 3, ymin: -3, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Montre que $(uvw)'=u'vw+uv'w+uvw'$ en regroupant $u\cdot(vw)$. Utilise ce résultat pour trouver $y'(2)$ pour $y=x(x-1)(x+4)$.`, recap: "La règle du produit deux fois.", ans: S`$6+12+2=20$` },
  { level: 3, space: 5, q: S`Soit $f(x)=(x-2)^2g(x)$, où $g$ est dérivable. Montre que $f'(2)=0$. Qu'est-ce que cela indique au sujet du graphique en une racine double?`, recap: "Les deux termes de f′ contiennent (x − 2).", ans: S`$f'=2(x-2)g+(x-2)^2g'$, les deux sont nuls en $x=2$; le graphique est tangent à l'axe des x` },
  { level: 3, space: 5, q: S`Trouve $k$ pour que la tangente à $y=(x+k)(x^2-1)$ en $x=1$ ait une pente de 6.`, recap: "Écris y′(1) en fonction de k.", ans: S`$2(1+k)=6\Rightarrow k=2$` },
  { level: 3, space: 5, q: S`La longueur d'un rectangle est $20-0.5t$ cm et sa largeur, $8+0.3t$ cm. Trouve le taux de variation de son aire à $t=0$, et le moment où l'aire cesse d'augmenter.`, recap: "A′ = L′W + LW′, égale à 0.", ans: S`$2$ cm² par s; $A'=2-0.3t=0$ à $t\approx6.67$ s` },
];

export const WS = {
  code: "2.2",
  title: "La règle du produit",
  bigideas: S`La dérivée d'un produit n'est pas le produit des dérivées. Pour $y=uv$, $y'=u'v+uv'$ : pense à l'aire d'un rectangle de côtés $u$ et $v$, qui gagne deux bandes quand les deux côtés augmentent. Pour trois facteurs, $(uvw)'=u'vw+uv'w+uvw'$. La règle est nécessaire chaque fois que le développement est long ou impossible (racines, puissances élevées), et pour les taux de variation de produits comme revenu $=$ prix $\times$ quantité. Factorise $y'$ avant de résoudre $y'=0$.`,
  goals: ["Appliquer (uv)′ = u′v + uv′.", "Dériver des produits de trois facteurs.", "Trouver les tangentes et les tangentes horizontales de produits.", "Utiliser la règle pour les taux de variation de produits."],
  curriculum: "A3.3, A3.5",
  vocab: [["Règle du produit", "$(uv)'=u'v+uv'$"], ["Revenu", "prix $\\times$ quantité"], ["Racine double", "un facteur $(x-a)^2$"]],
  hook: S`Est-ce que $\frac{d}{dx}(x^2\cdot x^3)$ est égal à $2x\cdot3x^2$? Développe d'abord $x^2\cdot x^3$ et compare.`,
  concepts: [
    ["1. Le modèle d'aire", S`Un rectangle $u\times v$ grandit des bandes $v\,\Delta u$ et $u\,\Delta v$; le coin $\Delta u\,\Delta v$ disparaît à la limite. La courbe $y=x(x-2)^2$ et sa dérivée :
${F({ view: { xmin: -1, xmax: 3.5, ymin: -3, ymax: 5 }, curves: [{ f: (x) => x * (x - 2) ** 2 }, { f: (x) => (x - 2) ** 2 + 2 * x * (x - 2), color: "blue" }], points: [pt(2 / 3, (2 / 3) * (4 / 3) ** 2), pt(2, 0)], step: { x: 1, y: 1 } })}`],
    ["2. S'organiser", S`Dresse la liste de $u$, $u'$, $v$, $v'$, puis combine et simplifie.`],
    ["3. Taux de variation de produits", S`$R=pq\Rightarrow R'=p'q+pq'$ : les deux variations comptent.`],
  ],
  tips: ["(uv)′ ≠ u′v′.", "Garde les parenthèses en substituant.", "Factorise la dérivée avant de l'égaler à 0.", "Un facteur constant ne demande pas la règle du produit.", "Vérifie les réponses polynomiales en développant."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
