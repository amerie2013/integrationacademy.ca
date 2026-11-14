// 1.2 Caractéristiques des fonctions polynomiales — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, graph, P } from "./fig.mjs";

export const TOPIC = "1.2 Caractéristiques des fonctions polynomiales";
export const Q = [
  num(String.raw`Un polynôme a des troisièmes différences constantes de $-18$ (pas de 1). Trouve son coefficient dominant.`, -3, "a·3! = −18."),
  num(String.raw`Pour $x=0,\ldots,4$, une fonction quadratique prend les valeurs $3, 0, -1, 0, 3$. Trouve $f(5)$.`, 8, "Deuxièmes différences 2, donc la première différence suivante est 5 : 3 + 5 = 8 (f = (x − 2)² − 1)."),
  num(String.raw`Pour $x=0,\ldots,4$, une fonction cubique prend les valeurs $1, 0, 3, 16, 45$. Trouve $f(5)$.`, 96, "Différences −1, 3, 13, 29; 4, 10, 16; 6, 6. Suivantes : 22, 51, donc 45 + 51 = 96."),
  num(String.raw`Une fonction quadratique a des deuxièmes différences constantes de 6 (pas de 1), $f(0)=-1$ et $f(1)=4$. Trouve $f(2)$.`, 15, "Première différence 5, puis 5 + 6 = 11 : 4 + 11 = 15."),
  ms(String.raw`Un polynôme est de degré 6 et $a<0$. Qu'est-ce qui est forcément vrai? Choisis toutes les bonnes réponses.`, ["il a une valeur maximale", "il a au plus 5 points tournants", "il a au moins un zéro", "son image est l'ensemble des nombres réels"], [0, 1], "Les deux extrémités descendent, donc il y a un point le plus haut; les zéros ne sont pas garantis."),
  mc("Le graphique monte aux deux extrémités, a 5 points tournants et touche l'axe des x deux fois sans le traverser. Quel est le plus petit degré possible?", "6", ["5", "4", "7"], "5 points tournants → degré ≥ 6; extrémités dans le même sens → degré pair.", graph((x) => 0.06 * (x * x - 9) * (x * x - 1) ** 2, { xmin: -3.5, xmax: 3.5, ymin: -6, ymax: 3 })),
  num(String.raw`Une fonction cubique $y=ax^3+bx^2+cx+d$ a des troisièmes différences de 30 (pas de 1). Trouve $a$.`, 5, "6a = 30."),
  tf(String.raw`Si $f$ est une fonction polynomiale impaire, alors $f(0)=0$.`, true, "f(0) = −f(0) → f(0) = 0."),
  tf(String.raw`Une fonction polynomiale peut être à la fois paire et impaire.`, true, "f(x) = 0 vérifie les deux."),
  num(String.raw`$f(x)=x^4+kx^3-2x^2$ est paire. Trouve $k$.`, 0, "Un polynôme pair n'a aucune puissance impaire."),
  num(String.raw`$g(x)=3x^5+(m-2)x^2+x$ est impaire. Trouve $m$.`, 2, "Le terme en x² doit s'annuler."),
  mc("Le graphique montre un polynôme. Quelle est l'équation la plus probable?", String.raw`$y=-x(x-2)(x+2)(x-3)(x+3)/20$`, [String.raw`$y=x(x-2)(x+2)(x-3)(x+3)/20$`, String.raw`$y=-(x-2)(x+2)(x-3)(x+3)/20$`, String.raw`$y=-x(x-2)(x+2)/4$`], "5 zéros, Q2 → Q4 : degré 5 avec a < 0.", graph((x) => -x * (x * x - 4) * (x * x - 9) / 20, { xmin: -3.5, xmax: 3.5, ymin: -3, ymax: 3 })),
  num(String.raw`Un polynôme de degré $n$ a exactement 7 points tournants et descend aux deux extrémités. Quel est le plus petit $n$ possible?`, 8, "n ≥ 8 et n pair."),
  mc("Deux polynômes sont représentés. Le bleu est de degré 3. Quel est le plus petit degré possible du rouge?", "4", ["3", "5", "2"], "Le rouge a 3 points tournants et ses deux extrémités montent.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 0.5 * x * (x * x - 4), color: "blue" }, { f: (x) => 0.4 * (x * x - 1) * (x * x - 5) - 1, color: "red" }], step: { x: 1, y: 1 } })),
  num(String.raw`Pour des valeurs de x avec un pas de $0.5$, la fonction cubique $y=4x^3$ a des troisièmes différences constantes. Trouve-les.`, 3, "a·3!·h³ = 4·6·0.125."),
  ms(String.raw`Quelles tables pourraient provenir d'un polynôme de degré 2? (x = 0, 1, 2, 3, 4) Choisis toutes les bonnes réponses.`, ["1, 4, 9, 16, 25", "0, 1, 8, 27, 64", "5, 3, 3, 5, 9", "1, 2, 4, 8, 16"], [0, 2], "Deuxièmes différences constantes : 2 et 2. Les autres sont cubique et exponentielle."),
  num(String.raw`Le graphique de la fonction quartique illustrée a quatre zéros. Si son coefficient dominant est $\tfrac14$, que valent ses quatrièmes différences constantes (pas de 1)?`, 6, "¼·24 = 6.", graph((x) => 0.25 * (x + 3) * (x + 1) * (x - 1) * (x - 2), { xmin: -3.5, xmax: 2.5, ymin: -3, ymax: 3 }, [P(-3, 0), P(-1, 0), P(1, 0), P(2, 0)])),
  tf(String.raw`Un polynôme de degré 4 peut avoir exactement 2 zéros réels distincts et 3 points tournants.`, true, "p. ex. une forme en W dont le sommet du milieu reste sous l'axe."),
  mc(String.raw`Un polynôme $p$ est impair et a un zéro en $x=3$. Lequel doit aussi être un zéro?`, String.raw`$x=-3$ et $x=0$`, [String.raw`seulement $x=-3$`, String.raw`seulement $x=0$`, String.raw`$x=\tfrac13$`], "p(−3) = −p(3) = 0, et tout polynôme impair vérifie p(0) = 0."),
  num(String.raw`Une fonction quartique paire a des zéros en $x=1$ et $x=4$ (ce sont ses seuls zéros positifs) et $f(0)=8$. Trouve $f(2)$.`, -18, "Paire avec les zéros ±1, ±4 : f = a(x² − 1)(x² − 16). f(0) = 16a = 8 → a = ½. f(2) = ½(3)(−12) = −18."),
];
