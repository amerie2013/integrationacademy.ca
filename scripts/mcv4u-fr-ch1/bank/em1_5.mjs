// 1.5 Introduction aux dérivées — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const E = [
  num(String.raw`Combien vaut $f'(x)$ pour $f(x)=5x-2$?`, 5, "La pente d'une droite."),
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=x^2$.`, "2*x", "La limite de 2x + h."),
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=x^3$.`, "3*x^2", "La limite de 3x² + 3xh + h²."),
  num(String.raw`Pour $f(x)=x^2$, trouve $f'(3)$.`, 6, "2(3)."),
  tf("f′(a) est la pente de la tangente à y = f(x) en x = a.", true, "C'est la définition."),
  mc(String.raw`Que signifie $\frac{dy}{dx}$?`, "le taux de variation de y par rapport à x", ["y divisé par x", "l'aire sous la courbe", "l'ordonnée à l'origine"], "Notation de Leibniz."),
  num(String.raw`Quelle est la dérivée de la fonction constante $f(x)=7$?`, 0, "Une droite horizontale."),
  mc("Le graphique montre que f est croissante. Quel est le signe de f′ à cet endroit?", "positif", ["négatif", "nul", "non défini"], "Les tangentes montent.", graph((x) => 0.2 * x ** 3 + x, { xmin: -2.5, xmax: 2.5, ymin: -6, ymax: 6 })),
  tf(String.raw`$f(x)=|x|$ est dérivable en $x=0$.`, false, "Un coin."),
  num(String.raw`Pour $f(x)=x^2$, trouve $f'(-1)$.`, -2, "2(−1)."),
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=3x^2$.`, "6*x", "3 fois 2x."),
  mc("La dérivée d'une fonction du second degré est :", "affine", ["du second degré", "constante", "cubique"], "Le degré diminue de 1."),
  num(String.raw`Pour $f(x)=x^3$, trouve $f'(0)$.`, 0, "3(0)²."),
  mc("À un point tournant d'un graphique lisse, f′ vaut :", "0", ["1", "−1", "elle n'existe pas"], "Une tangente horizontale."),
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=x^2+x$.`, "2*x+1", "2x + h + 1."),
  tf("Toute fonction continue est dérivable.", false, "Les coins sont continus."),
  num(String.raw`Pour $f(x)=4x^2$, trouve $f'(2)$.`, 16, "8(2)."),
  mc("Quel est le signe de f′ sur la partie du graphique représentée?", "négatif", ["positif", "nul", "il change"], "Le graphique descend.", graph((x) => 6 - x * x, { xmin: 0, xmax: 2.4, ymin: 0, ymax: 7 }, [], { a: 0 })),
  num(String.raw`Trouve la pente de la tangente à $y=x^2-3x$ en $x=1$.`, -1, "2(1) − 3."),
  fill("Trouver f′ à l'aide de la définition par une limite s'appelle dériver à partir des premiers ___.", ["principes", "principles"], "Les premiers principes."),
];

export const M = [
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=x^2-5x$.`, "2*x-5", "2x + h − 5."),
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=2x^3$.`, "6*x^2", "2 fois 3x²."),
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=\frac1x$.`, "-1/x^2", "−1/(x(x + h))."),
  num(String.raw`Pour $f(x)=\sqrt x$, trouve $f'(4)$.`, 0.25, "1/(2√x).", null, 0.0001),
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=x^3-x^2$.`, "3*x^2-2*x", "3x² − 2x."),
  num(String.raw`Pour quelle valeur de $x$ a-t-on $f'(x)=0$ si $f(x)=x^2+6x$?`, -3, "2x + 6 = 0."),
  mc("Le graphique de f est une parabole ouverte vers le haut dont le sommet est en x = 1. Qu'est-ce qui décrit f′?", "une droite de pente positive qui coupe zéro en x = 1", ["une droite de pente négative qui coupe zéro en x = 1", "une parabole", "une droite horizontale"], "f descend, puis monte.", graph((x) => (x - 1) ** 2 - 1, { xmin: -2, xmax: 4, ymin: -2, ymax: 6 })),
  num(String.raw`Pour $f(x)=x^3-4x$, trouve $f'(2)$.`, 8, "3(4) − 4."),
  num(String.raw`Trouve l'ordonnée à l'origine de la tangente à $y=x^2$ en $x=1$.`, -1, "y = 2x − 1."),
  tf("Si f′(x) = 0 pour tout x, alors f est constante.", true, "Aucune variation nulle part."),
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=(x+1)^2$.`, "2*x+2", "Développe : x² + 2x + 1."),
  num(String.raw`Pour $f(x)=\frac1x$, trouve $f'(-2)$.`, -0.25, "−1/4.", null, 0.0001),
  mc(String.raw`Où $f(x)=|x+3|$ n'est-elle pas dérivable?`, String.raw`$x=-3$`, [String.raw`$x=3$`, String.raw`$x=0$`, "nulle part"], "Le coin."),
  num(String.raw`Pour $f(x)=x^4$, trouve $f'(2)$.`, 32, "4(8)."),
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=5-3x^2$.`, "-6*x", "−3 fois 2x."),
  num(String.raw`Trouve la pente de la tangente à $y=\frac2x$ en $x=1$.`, -2, "−2/x²."),
  mc("Le graphique de f a des points tournants en x = −1 et x = 1. Où a-t-on f′(x) = 0?", "x = −1 et x = 1", ["x = 0", "x = ±2", "nulle part"], "Des tangentes horizontales.", graph((x) => x ** 3 - 3 * x, { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 })),
  num(String.raw`Pour $f(x)=\sqrt x$, trouve $f'(9)$ (4 décimales).`, 0.1667, "1/6.", null, 0.0005),
  num(String.raw`La position d'un objet est $s(t)=t^3$ m. Trouve sa vitesse à $t=2$.`, 12, "3t²."),
  num(String.raw`Pour quelle valeur positive de $x$ a-t-on $f'(x)=0$ si $f(x)=x^3-3x$?`, 1, "3x² − 3 = 0."),
];
