// MCR3U-FR chapitre 3 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C), chacune avec une figure.
// Miroir de ../mcr3u-ch3/written-data.mjs (mêmes figures, étiquettes en français).
import { planeDoc, P } from "../mcr3u-ch3/bank/fig.mjs";
import { TITLE as T1 } from "./l3_1.mjs";
import { TITLE as T2 } from "./l3_2.mjs";
import { TITLE as T3 } from "./l3_3.mjs";
import { TITLE as T4 } from "./l3_4.mjs";
import { TITLE as T5 } from "./l3_5.mjs";
import { TITLE as T6 } from "./l3_6.mjs";
import { TITLE as T7 } from "./l3_7.mjs";
import { TITLE as T8 } from "./l3_8.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6, 7: T7, 8: T8 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;

export const WRITTEN = [
  W(1, "medium", 4, S`Pour $y=-\tfrac12(x+4)(x-2)$ (graphique ci-contre) : (a) donne les zéros et l'axe de symétrie; (b) trouve le sommet et la valeur maximale; (c) donne l'ordonnée à l'origine, le domaine et l'image.`,
    S`(a) $-4$ et $2$; $x=-1$. (b) $y(-1)=-\tfrac12(3)(-3)=4.5$ : sommet $(-1,4.5)$, maximum 4.5. (c) $y(0)=-\tfrac12(4)(-2)=4$; domaine : tous les nombres réels; image $y\le4.5$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 4, ymin: -6, ymax: 6 }, curves: [{ f: (x) => -0.5 * (x + 4) * (x - 2), color: "violet" }], points: [P(-4, 0), P(2, 0)] })),
  W(1, "hard", 4, S`Le jet d'une fontaine suit $h(x)=-0.8(x-2.5)^2+6$, où $h$ est la hauteur (m) à la distance horizontale $x$ (m) de la buse. (a) À quelle hauteur est la buse? (b) Quelle est la plus grande hauteur, et à quel endroit? (c) À quelle distance de la buse l'eau retombe-t-elle (au centième)? (d) Donne un domaine et une image raisonnables.`,
    S`(a) $h(0)=-0.8(6.25)+6=1$ m. (b) 6 m en $x=2.5$ m. (c) $(x-2.5)^2=7.5\Rightarrow x=2.5+\sqrt{7.5}\approx5.24$ m. (d) $0\le x\le5.24$, $0\le h\le6$. [1, 1, 1, 1.]`,
    planeDoc({ view: { xmin: -0.5, xmax: 6, ymin: -0.5, ymax: 7 }, curves: [{ f: (x) => -0.8 * (x - 2.5) ** 2 + 6, a: 0, b: 2.5 + Math.sqrt(7.5), color: "violet" }], points: [P(0, 1)], step: { x: 1, y: 1 }, xlabel: "x (m)", ylabel: "h (m)" })),
  W(2, "hard", 5, S`Une parabole a le sommet $(1,8)$ et passe par $(5,0)$ (ci-contre). (a) Écris son équation sous forme canonique. (b) Trouve les deux zéros et écris-la sous forme factorisée. (c) Écris-la sous forme générale et utilise $x=-\frac{b}{2a}$ pour vérifier le sommet.`,
    S`(a) $16a+8=0\Rightarrow a=-\tfrac12$ : $y=-\tfrac12(x-1)^2+8$. (b) $(x-1)^2=16\Rightarrow x=-3$ ou $5$ : $y=-\tfrac12(x+3)(x-5)$. (c) $y=-\tfrac12x^2+x+7.5$; $-\frac{1}{2(-0.5)}=1$ ✓. [2, 2, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 7, ymin: -4, ymax: 10 }, curves: [{ f: (x) => -0.5 * (x - 1) ** 2 + 8, color: "violet" }], points: [P(1, 8), P(5, 0)] })),
  W(3, "medium", 4, S`Un polygone à $n$ côtés a $d$ diagonales : $n=4,5,6,7$ donne $d=2,5,9,14$ (points tracés). (a) Montre que la relation est du second degré. (b) Trouve $d(n)$. (c) Combien de diagonales un polygone à 20 côtés a-t-il?`,
    S`(a) premières différences 3, 4, 5; deuxièmes différences 1 (constantes). (b) $a=\tfrac12$; $8+4b+c=2$ et $12.5+5b+c=5\Rightarrow b=-1.5$, $c=0$ : $d=\tfrac12n^2-1.5n$. (c) $d(20)=200-30=170$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 9, ymin: -1, ymax: 22 }, points: [[4, 2], [5, 5], [6, 9], [7, 14]].map(([x, y]) => P(x, y)), step: { x: 1, y: 2 }, xlabel: "n", ylabel: "d" })),
  W(2, "medium", 4, S`La parabole ci-contre a les zéros $-1$ et $5$ et passe par $(0,-5)$. (a) Écris son équation sous forme factorisée. (b) Écris-la sous forme canonique et sous forme générale. (c) Donne son image.`,
    S`(a) $a(1)(-5)=-5\Rightarrow a=1$ : $y=(x+1)(x-5)$. (b) axe $x=2$, $y(2)=-9$ : $y=(x-2)^2-9=x^2-4x-5$. (c) $y\ge-9$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 7, ymin: -10, ymax: 6 }, curves: [{ f: (x) => (x + 1) * (x - 5), color: "violet" }], points: [P(-1, 0), P(5, 0), P(0, -5)] })),
  W(3, "hard", 4, S`La table montre une relation du second degré : $x=0,1,2,3,4$ et $y=-3,1,9,21,37$ (points tracés). (a) Utilise les différences pour trouver l'équation. (b) Trouve le sommet. (c) Trouve les zéros de façon exacte.`,
    S`(a) deuxièmes différences 4 : $a=2$; $c=-3$; $2+b-3=1\Rightarrow b=2$ : $y=2x^2+2x-3$. (b) $x=-\tfrac12$ : $y=-3.5$. (c) $x=\frac{-2\pm\sqrt{28}}{4}=\frac{-1\pm\sqrt7}{2}$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 5, ymin: -5, ymax: 40 }, points: [[0, -3], [1, 1], [2, 9], [3, 21], [4, 37]].map(([x, y]) => P(x, y)), step: { x: 1, y: 5 } })),
  W(4, "medium", 4, S`Une visite en autobus coûte 60 dollars et 80 personnes s'inscrivent. Chaque hausse de 5 dollars fait perdre 4 personnes. (a) Écris la fonction revenu. (b) Trouve le prix qui maximise le revenu et le revenu maximal. (c) Explique comment le graphique le montre.`,
    S`(a) $R(x)=(60+5x)(80-4x)$. (b) zéros $-12$ et $20$; $x=4$ : prix de 80 dollars, 64 personnes, 5120 dollars. (c) le sommet est à mi-chemin entre les zéros. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -14, xmax: 22, ymin: 0, ymax: 5600 }, curves: [{ f: (x) => (60 + 5 * x) * (80 - 4 * x), a: -12, b: 20, color: "violet" }], step: { x: 2, y: 500 }, xlabel: "hausses x", ylabel: "R" })),
  W(4, "hard", 5, S`Le prix qui permet de vendre $x$ centaines d'unités est $p=40-0.5x$ dollars, et le coût est $C(x)=8x+300$ centaines de dollars. (a) Écris les fonctions revenu et profit. (b) Trouve le profit maximal et le prix qui le donne. (c) Trouve les quantités au seuil de rentabilité, à l'unité près.`,
    S`(a) $R=40x-0.5x^2$, $P=-0.5x^2+32x-300$. (b) $x=32$ : $P=212$ centaines de dollars, prix de 24 dollars. (c) $x^2-64x+600=0$ : $x=32\pm\sqrt{424}\approx11.41,\ 52.59$ centaines d'unités (environ 1141 et 5259). [1, 2, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 60, ymin: -300, ymax: 300 }, curves: [{ f: (x) => -0.5 * x * x + 32 * x - 300, color: "violet" }], step: { x: 5, y: 50 }, xlabel: "x (centaines)", ylabel: "P" })),
  W(5, "medium", 4, S`La hauteur d'un ballon est $h(t)=-4.9t^2+14.7t+1.5$ m. (a) Trouve sa hauteur maximale. (b) Quand touche-t-il le sol? (c) Pendant combien de temps est-il au-dessus de 10 m?`,
    S`(a) $t=1.5$ : $12.525$ m. (b) $t=\frac{14.7+\sqrt{245.49}}{9.8}\approx3.10$ s. (c) $-4.9t^2+14.7t-8.5=0$ : $t\approx0.78$ et $2.22$ : environ 1.44 s. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 3.5, ymin: 0, ymax: 14 }, curves: [{ f: (t) => -4.9 * t * t + 14.7 * t + 1.5, a: 0, color: "violet" }], lines: [{ m: 0, b: 10, color: "amber", dash: true }], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })),
  W(5, "hard", 4, S`Un jardin de 15 m sur 10 m est entouré d'une bordure de largeur uniforme. La bordure a la même aire que le jardin. (a) Écris une équation pour la largeur $x$. (b) Résous-la de façon exacte et rejette toute racine inadmissible. (c) Vérifie ta réponse.`,
    S`(a) $(15+2x)(10+2x)=300$. (b) $4x^2+50x-150=0\Rightarrow2x^2+25x-75=0\Rightarrow x=\frac{-25\pm35}{4}$ : $x=2.5$ (rejette $-15$). (c) $20\times15=300$ ✓. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 21, ymin: -1, ymax: 16 }, segs: [{ pts: [[0, 0], [20, 0], [20, 15], [0, 15], [0, 0]], color: "amber" }, { pts: [[2.5, 2.5], [17.5, 2.5], [17.5, 12.5], [2.5, 12.5], [2.5, 2.5]], color: "green" }], step: { x: 2, y: 2 } })),
  W(6, "medium", 4, S`Pour $y=2x^2+kx+8$ : (a) trouve $k$ pour que le graphique ait exactement un zéro; (b) donne les valeurs de $k$ qui donnent deux zéros et aucun zéro; (c) esquisse le graphique pour la valeur positive de $k$ trouvée en (a).`,
    S`(a) $D=k^2-64=0$ : $k=\pm8$. (b) deux : $k<-8$ ou $k>8$; aucun : $-8<k<8$. (c) $k=8$ : $y=2(x+2)^2$, sommet $(-2,0)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 4, ymin: -2, ymax: 10 } })),
  W(6, "hard", 4, S`(a) Montre que $x^2-(k+3)x+k=0$ a deux racines réelles pour toute valeur de $k$ (le graphique de son discriminant est ci-contre). (b) Pour quelle valeur de $k$ une des racines est-elle 0, et quelle est alors l'autre racine?`,
    S`(a) $D=(k+3)^2-4k=k^2+2k+9=(k+1)^2+8\ge8>0$. (b) $k=0$ : $x^2-3x=0$, autre racine 3. [3, 1.]`,
    planeDoc({ view: { xmin: -5, xmax: 3, ymin: 0, ymax: 20 }, curves: [{ f: (k) => k * k + 2 * k + 9, color: "violet" }], points: [P(-1, 8)], step: { x: 1, y: 2 }, xlabel: "k", ylabel: "D" })),
  W(7, "medium", 4, S`Une arche parabolique mesure 18 m de largeur au sol et 12 m de hauteur. (a) Écris une équation en plaçant l'origine à un des pieds. (b) Trouve la hauteur à 3 m d'un pied. (c) Une charge de 6 m de largeur et de 9 m de hauteur peut-elle passer au milieu? Justifie ta réponse.`,
    S`(a) $y=ax(x-18)$, $12=a(9)(-9)\Rightarrow a=-\tfrac4{27}$. (b) $\tfrac4{27}(3)(15)\approx6.67$ m. (c) bords en $x=6,12$ : $\tfrac4{27}(6)(12)\approx10.67$ m $>9$ : oui. [1, 1, 2.]`,
    planeDoc({ view: { xmin: -1, xmax: 19, ymin: -1, ymax: 14 }, curves: [{ f: (x) => (-4 / 27) * x * (x - 18), a: 0, b: 18, color: "violet" }], segs: [{ pts: [[6, 0], [6, 9], [12, 9], [12, 0]], color: "blue" }], step: { x: 2, y: 2 } })),
  W(7, "hard", 4, S`Une fonction du second degré a les zéros $3\pm\sqrt5$ et passe par $(1,2)$. (a) Trouve son équation sous forme générale. (b) Trouve son sommet. (c) Esquisse deux autres membres de sa famille.`,
    S`(a) $a[(x-3)^2-5]$ : en $x=1$, $-a=2$ : $y=-2x^2+12x-8$. (b) $(3,10)$. (c) n'importe quelle $y=a(x^2-6x+4)$; toutes passent par $3\pm\sqrt5\approx0.76,\ 5.24$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -1, xmax: 7, ymin: -6, ymax: 12 }, points: [P(3 - Math.sqrt(5), 0, false), P(3 + Math.sqrt(5), 0, false), P(1, 2)], step: { x: 1, y: 2 } })),
  W(8, "medium", 4, S`(a) Résous algébriquement le système $y=x^2-2x-3$ et $y=x+1$. (b) Vérifie ta réponse sur le graphique. (c) Pour quelle valeur de $k$ la droite $y=x+k$ est-elle tangente à la parabole?`,
    S`(a) $x^2-3x-4=0$ : $(4,5)$ et $(-1,0)$. (b) la droite coupe la parabole en ces points. (c) $x^2-3x-3-k=0$ : $9+4(3+k)=0\Rightarrow k=-5.25$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 6, ymin: -5, ymax: 7 }, curves: [{ f: (x) => x * x - 2 * x - 3, color: "violet" }], lines: [{ m: 1, b: 1, color: "blue" }] })),
  W(8, "hard", 5, S`Le réservoir A contient $3(t-12)^2$ L pour $0\le t\le12$ min pendant qu'il se vide. Le réservoir B contient 12 L au départ et se remplit à raison de 24 L/min. (a) Quand contiennent-ils la même quantité? (b) Explique pourquoi une racine est rejetée. (c) Quelle quantité d'eau chacun contient-il alors?`,
    S`(a) $3t^2-72t+432=24t+12\Rightarrow t^2-32t+140=0\Rightarrow t=5$ ou $28$. (b) $t=28$ est hors de $0\le t\le12$. (c) $24(5)+12=132$ L. [2, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 13, ymin: 0, ymax: 450 }, curves: [{ f: (t) => 3 * (t - 12) ** 2, a: 0, b: 12, color: "violet" }], lines: [{ m: 24, b: 12, color: "blue" }], step: { x: 1, y: 50 }, xlabel: "t (min)", ylabel: "V (L)" })),
  W(8, "hard", 4, S`Trouve les équations des droites qui passent par $(0,-1)$ et qui sont tangentes à $y=2x^2+1$, ainsi que les points de contact.`,
    S`$y=mx-1$ : $2x^2-mx+2=0$, $D=m^2-16=0\Rightarrow m=\pm4$; contact en $x=\frac m4=\pm1$ : $(1,3)$, $(-1,3)$. [2, 2.]`,
    planeDoc({ view: { xmin: -3, xmax: 3, ymin: -2, ymax: 8 }, curves: [{ f: (x) => 2 * x * x + 1, color: "violet" }], points: [P(0, -1)] })),
];
