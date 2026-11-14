// MCV4U-FR chapitre 3 — devoirs : 12 questions chacun — Connaissance et compréhension 1-3, Habiletés de la pensée 4-5,
// Communication 6-7, Mise en application 8-10, Niveau difficile 11-12. [[clé|légende]] est remplacé par une figure (SVG).
// Miroir de ../../mcv4u-ch3/asg/assignments.mjs (mêmes figures; titres d'axes en français).
import { planeDoc, P } from "../../mcv4u-ch3/bank/fig.mjs";
import { asgId } from "../../mcv4u-fr/common.mjs";
import { TITLE as T1 } from "../l3_1.mjs";
import { TITLE as T2 } from "../l3_2.mjs";
import { TITLE as T3 } from "../l3_3.mjs";
import { TITLE as T4 } from "../l3_4.mjs";
import { TITLE as T5 } from "../l3_5.mjs";
import { TITLE as T6 } from "../l3_6.mjs";

const S = String.raw;
const dv = (t) => `Devoir ${t.replace(/^(\d\.\d) /, "$1 — ")}`;
const grid = (view, step) => planeDoc({ view, ...(step ? { step } : {}) });
/** courbe rationnelle coupée à ses asymptotes verticales */
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const VR = { xmin: -6, xmax: 5, ymin: -6, ymax: 10 };

export const ASSIGNMENTS = [
  { code: "3.1", id: asgId(3, 1), title: dv(T1), figs: {
      fp: planeDoc({ view: { xmin: -4, xmax: 5, ymin: -8, ymax: 8 }, curves: [{ f: (x) => x * x - x - 6, color: "blue" }], step: { x: 1, y: 1 }, ylabel: "f′" }),
      g: grid({ xmin: -4, xmax: 5, ymin: -5, ymax: 6 }, { x: 1, y: 1 }) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve les intervalles de croissance et de décroissance de \(f(x)=2x^3+9x^2-24x\).`,
    S`2. \(f'(x)=(x+3)(x-2)^2\). Dresse un tableau de signes et indique où \(f\) est croissante.`,
    S`3. Voici le graphique de \(f'\). Où \(f\) est-elle croissante, et où est-elle décroissante? [[fp|Graphique de f′ pour la question 3]]`,
    "Habiletés de la pensée",
    S`4. Montre que \(f(x)=\dfrac{x^2-4}{x+1}\) est croissante sur chaque partie de son domaine.`,
    S`5. Trouve toutes les valeurs de \(k\) pour lesquelles \(f(x)=2x^3-6x^2+kx\) est croissante pour tout \(x\).`,
    "Communication",
    "6. Explique pourquoi, pour un polynôme, le signe de f′ ne peut changer qu'en un zéro de f′. Pourquoi suffit-il de tester une seule valeur dans chaque intervalle?",
    S`7. Esquisse une fonction continue telle que \(f(0)=2\), \(f'\gt0\) pour \(x\lt-2\), \(f'\lt0\) sur \((-2,3)\) et \(f'\gt0\) pour \(x\gt3\). Explique ton raisonnement. [[g|Grille pour la question 7]]`,
    "Mise en application",
    S`8. La température d'une serre est \(T(t)=-0.1t^3+1.2t^2+18\) °C pour \(0\le t\le12\) h. Quand monte-t-elle et quand baisse-t-elle?`,
    S`9. Le coût moyen de production de \(x\) articles est \(A(x)=\dfrac{x}{10}+\dfrac{250}{x}\) dollars. Pour quels niveaux de production le coût moyen diminue-t-il?`,
    S`10. Une population est \(P(t)=\dfrac{1000(t+2)}{t^2+4}\). Trouve quand elle augmente et quand elle diminue, pour \(t\ge0\).`,
    "Niveau difficile",
    S`11. Utilise la dérivée pour montrer que \(f(x)=x^3+x-5\) est toujours croissante, et explique pourquoi \(f(x)=0\) a exactement une solution réelle.`,
    S`12. Trouve les intervalles de croissance et de décroissance de \(f(x)=x^{1/3}(x-7)^2\).`,
  ] },
  { code: "3.2", id: asgId(3, 2), title: dv(T2), figs: {
      e: planeDoc({ view: { xmin: -1.5, xmax: 3.5, ymin: -1, ymax: 6 }, curves: [{ f: (x) => -(x ** 3) + 3 * x * x + 1, a: -1, b: 3, color: "violet" }], points: [P(-1, 5), P(0, 1), P(2, 5), P(3, 1)], step: { x: 0.5, y: 1 } }),
      c: planeDoc({ view: { xmin: -2, xmax: 12, ymin: -6, ymax: 3 }, curves: [{ f: (x) => x - 3 * Math.cbrt(x * x), color: "violet" }], step: { x: 1, y: 1 } }) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve et classe les extremums relatifs de \(f(x)=x^3+6x^2+9x+3\).`,
    S`2. Trouve les extremums absolus de \(f(x)=x^2-6x+4\) sur \([0,5]\).`,
    S`3. Voici le graphique de \(f(x)=-x^3+3x^2+1\) sur \([-1,3]\). Donne ses extremums relatifs et absolus. [[e|Graphique de la question 3]]`,
    "Habiletés de la pensée",
    S`4. Trouve les extremums absolus de \(f(x)=x^4-4x^3+4\) sur \([-1,4]\).`,
    S`5. Trouve et classe les points critiques de \(f(x)=x-3x^{2/3}\), y compris ceux où \(f'\) n'existe pas. [[c|Graphique de la question 5]]`,
    "Communication",
    "6. Explique la différence entre un maximum relatif et un maximum absolu. Esquisse une fonction sur [0, 5] pour laquelle ils se trouvent à des endroits différents.",
    S`7. Explique, à l'aide du test de la dérivée première, pourquoi \(f(x)=x^3\) a un nombre critique, mais aucun extremum.`,
    "Mise en application",
    S`8. Le profit d'un théâtre est \(P(x)=-0.5x^2+40x-300\) dollars pour \(0\le x\le60\) représentations. Trouve le profit maximal.`,
    S`9. Le niveau d'une rivière est \(h(t)=t^3-18t^2+81t+10\) cm pour \(0\le t\le12\) h. Trouve les niveaux le plus haut et le plus bas, ainsi que les moments où ils se produisent.`,
    S`10. La hauteur d'une balle est \(h(t)=-4.9t^2+29.4t+1.5\) m. Trouve sa hauteur maximale.`,
    "Niveau difficile",
    S`11. Trouve \(a\), \(b\) et \(c\) pour que \(f(x)=x^3+ax^2+bx+c\) ait un maximum relatif en \((-1,10)\) et un minimum relatif en \(x=3\). Trouve la valeur du minimum relatif.`,
    S`12. Trouve les extremums absolus de \(f(x)=\dfrac{x}{x^2+x+1}\) sur \([-2,2]\).`,
  ] },
  { code: "3.3", id: asgId(3, 3), title: dv(T3), figs: {
      c: planeDoc({ view: { xmin: -3.2, xmax: 3.2, ymin: -5, ymax: 4 }, curves: [{ f: (x) => (x ** 4) / 4 - 2 * x * x, color: "violet" }], step: { x: 0.5, y: 1 } }),
      w: grid({ xmin: 0, xmax: 7, ymin: 0, ymax: 120 }, { x: 1, y: 10 }) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve les intervalles de concavité et le point d'inflexion de \(f(x)=x^3-12x^2+20x\).`,
    S`2. Trouve \(f''(x)\) pour \(f(x)=x^5-3x^3+x\), puis évalue \(f''(-1)\).`,
    S`3. Voici le graphique de \(f(x)=\frac14x^4-2x^2\). Estime où il est concave vers le haut et où se trouvent ses points d'inflexion, puis vérifie à l'aide de \(f''\). [[c|Graphique de la question 3]]`,
    "Habiletés de la pensée",
    S`4. Utilise le test de la dérivée seconde pour classer les points critiques de \(f(x)=-x^4+8x^2\).`,
    S`5. Trouve les points d'inflexion de \(f(x)=x^{7/3}-7x^{1/3}\).`,
    "Communication",
    "6. Explique, à l'aide d'une esquisse, pourquoi un graphique concave vers le haut est situé au-dessus de ses tangentes.",
    S`7. Explique pourquoi le test de la dérivée seconde ne donne aucune réponse pour \(f(x)=x^4\) en \(x=0\), et comment classer ce point autrement.`,
    "Mise en application",
    S`8. Une élève apprend \(W(t)=-2t^3+18t^2\) mots après \(t\) heures d'étude (\(0\le t\le6\)). Quand le rythme d'apprentissage est-il le plus grand? Esquisse \(W\). [[w|Grille pour la question 8]]`,
    S`9. La position d'une voiture est \(s(t)=t^3-12t^2+36t\) m. Quand le graphique de \(s\) est-il concave vers le bas, et qu'est-ce que cela indique sur la vitesse de la voiture?`,
    S`10. Le coût de production de \(x\) unités est \(C(x)=x^3-24x^2+200x+500\). Trouve le niveau de production pour lequel le coût marginal est le plus bas.`,
    "Niveau difficile",
    S`11. Trouve \(a\) et \(b\) pour que \(f(x)=ax^4+bx^3\) ait un point d'inflexion en \((1,-1)\).`,
    S`12. Démontre que le point d'inflexion de toute fonction cubique ayant deux nombres critiques se trouve exactement à mi-chemin (en x) entre le maximum relatif et le minimum relatif.`,
  ] },
  { code: "3.4", id: asgId(3, 4), title: dv(T4), figs: {
      r: planeDoc({ view: VR, curves: rat((x) => (2 * x - 4) / (x + 1), [-1], VR), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], step: { x: 1, y: 1 } }),
      s: grid({ xmin: -6, xmax: 6, ymin: -5, ymax: 6 }, { x: 1, y: 1 }) }, lines: [
    "Connaissance et compréhension",
    S`1. Trouve les asymptotes et les coordonnées à l'origine de \(f(x)=\dfrac{4x-2}{x+3}\).`,
    S`2. Trouve l'asymptote verticale, le trou et l'asymptote horizontale de \(f(x)=\dfrac{x^2-x-6}{x^2-9}\).`,
    S`3. Lis les asymptotes et les coordonnées à l'origine sur le graphique ci-contre, puis propose une équation pour ce graphique. [[r|Graphique de la question 3]]`,
    "Habiletés de la pensée",
    S`4. Trouve l'asymptote oblique et les extremums relatifs de \(f(x)=\dfrac{x^2+1}{x-2}\) (2 décimales).`,
    S`5. Décris le comportement de \(f(x)=\dfrac{x+5}{x^2-4}\) de chaque côté de chaque asymptote verticale.`,
    "Communication",
    "6. Explique comment la comparaison des degrés du numérateur et du dénominateur détermine le comportement d'une fonction rationnelle aux extrémités. Donne un exemple de chaque cas.",
    S`7. Explique la différence entre les graphiques de \(\dfrac{x^2-1}{x-1}\) et de \(\dfrac{1}{x-1}\) en \(x=1\).`,
    "Mise en application",
    S`8. La production de \(x\) articles coûte \(1200+6x\) dollars. Décris le coût moyen \(A(x)=\dfrac{1200+6x}{x}\), et trouve quand il devient inférieur à 10 dollars par article.`,
    S`9. La concentration d'un médicament est \(C(t)=\dfrac{20t}{t^2+16}\) mg/L. Trouve la concentration la plus élevée et décris le comportement à long terme.`,
    S`10. Une population est \(P(t)=\dfrac{5000t+3000}{t+5}\). Trouve sa valeur à long terme et \(P'(5)\).`,
    "Niveau difficile",
    S`11. Esquisse \(f(x)=\dfrac{x^2-1}{x^2-4}\) avec ses asymptotes, ses coordonnées à l'origine, son extremum et sa concavité. [[s|Grille pour la question 11]]`,
    S`12. Écris une fonction rationnelle ayant les asymptotes verticales \(x=\pm1\), l'asymptote horizontale \(y=0\) et \(f(0)=2\). Esquisse-la.`,
  ] },
  { code: "3.5", id: asgId(3, 5), title: dv(T5), figs: {
      fp: planeDoc({ view: { xmin: -3.5, xmax: 3.5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 4, color: "blue" }], step: { x: 1, y: 1 }, ylabel: "f′" }),
      m: planeDoc({ view: { xmin: -1, xmax: 5, ymin: -6, ymax: 10 }, curves: [{ f: (x) => x ** 3 - 6 * x * x + 8 * x, color: "violet" }, { f: (x) => 3 * x * x - 12 * x + 8, color: "blue" }, { f: (x) => 6 * x - 12, color: "amber" }], step: { x: 1, y: 2 } }),
      g: grid({ xmin: -5, xmax: 7, ymin: -5, ymax: 7 }, { x: 1, y: 1 }) }, lines: [
    "Connaissance et compréhension",
    S`1. Décris le comportement aux extrémités et les coordonnées à l'origine de \(f(x)=-x(x+2)^2(x-3)\), en indiquant où le graphique touche l'axe des x et où il le traverse.`,
    S`2. Classe chaque fonction comme paire, impaire ou ni l'une ni l'autre : \(x^5-3x^3\), \(x^4+\dfrac1{x^2}\), \(x^3+1\).`,
    S`3. Voici le graphique de \(f'\). Trouve les valeurs de x des extremums relatifs et du point d'inflexion de \(f\). [[fp|Graphique de f′ pour la question 3]]`,
    "Habiletés de la pensée",
    S`4. Esquisse \(f(x)=-2x^3+9x^2-12x+6\), en indiquant les extremums et le point d'inflexion.`,
    S`5. Esquisse \(f(x)=(x^2-2)^2\), en indiquant les extremums et les points d'inflexion.`,
    "Communication",
    "6. Décris dans tes propres mots l'algorithme d'esquisse de courbes, et explique pourquoi il faut trouver les asymptotes avant les nombres critiques.",
    S`7. Les graphiques de \(f\), \(f'\) et \(f''\) sont tracés en violet, en bleu et en ambre. Explique le lien entre chaque paire de graphiques. [[m|Graphiques de la question 7]]`,
    "Mise en application",
    S`8. La profondeur de l'eau dans un réservoir est \(d(t)=t^3-15t^2+72t+10\) cm pour \(0\le t\le10\) jours. Esquisse \(d\) et décris quand le niveau monte et quand il baisse.`,
    S`9. La concentration d'un médicament est \(C(t)=\dfrac{6t}{t^2+25}\). Esquisse-la pour \(t\ge0\), en indiquant le maximum et le point d'inflexion.`,
    S`10. Esquisse une fonction ayant une asymptote verticale \(x=2\), une asymptote horizontale \(y=-1\), \(f'\gt0\) partout où elle est définie, et \(f(0)=0\). [[g|Grille pour la question 10]]`,
    "Niveau difficile",
    S`11. Esquisse \(f(x)=x^{2/3}(6-x)\), y compris le point de rebroussement et le maximum relatif.`,
    S`12. Esquisse \(f(x)=\dfrac{x^3}{x^2+3}\) : montre qu'elle est toujours croissante, puis trouve son asymptote oblique et ses points d'inflexion.`,
  ] },
  { code: "3.6", id: asgId(3, 6), title: dv(T6), figs: {
      a: planeDoc({ view: { xmin: 0, xmax: 52, ymin: 0, ymax: 1400 }, curves: [{ f: (x) => x * (100 - 2 * x), a: 0, b: 50, color: "violet" }], step: { x: 5, y: 100 }, xlabel: "x (m)", ylabel: "A (m²)" }),
      r: grid({ xmin: 0, xmax: 1300, ymin: 0, ymax: 400 }, { x: 100, y: 50 }) }, lines: [
    "Connaissance et compréhension",
    "1. La somme de deux nombres est 24. Trouve le plus grand produit possible.",
    "2. Un rectangle a une aire de 400 m². Trouve le plus petit périmètre possible.",
    S`3. L'aire d'un enclos est \(A(x)=x(100-2x)\) (graphique ci-contre). Estime la meilleure valeur de x à l'aide du graphique, puis trouve-la exactement. [[a|Graphique de la question 3]]`,
    "Habiletés de la pensée",
    "4. Une boîte fermée à base carrée doit contenir 1000 cm³. Trouve les dimensions qui utilisent le moins de matériau.",
    S`5. Trouve le point de la courbe \(y=2x^2\) le plus proche de \((9,0)\).`,
    "Communication",
    "6. Résous un problème de clôture de ton choix, en nommant chaque étape de la méthode d'optimisation et en expliquant pourquoi elle est nécessaire.",
    "7. Explique pourquoi il est valide de minimiser le carré d'une distance au lieu de la distance elle-même.",
    "Mise en application",
    "8. Une canette doit contenir 330 mL. Trouve le rayon et la hauteur qui utilisent le moins de métal.",
    "9. Un agriculteur dispose de 2400 m de clôture pour enclore un champ le long d'une rivière, divisé en trois parcelles par des clôtures perpendiculaires à la rivière. Trouve la plus grande aire totale.",
    "10. Une boulangerie vend 600 pains par jour à 3 dollars; chaque hausse de 10 cents fait perdre 15 ventes. Quel prix maximise le revenu?",
    "Niveau difficile",
    S`11. Un câble va d'une centrale électrique située sur une rive d'une rivière de 300 m de largeur jusqu'à une usine située sur l'autre rive, 1200 m en aval. Le câble coûte 50 dollars le mètre sous l'eau et 30 dollars le mètre sur terre. Trouve le trajet le moins coûteux. [[r|Grille pour un schéma]]`,
    "12. Trouve le plus grand volume d'un cylindre inscrit dans un cône de 5 cm de rayon et de 15 cm de hauteur.",
  ] },
];
