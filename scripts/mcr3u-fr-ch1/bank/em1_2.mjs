// 1.2 Notation fonctionnelle — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch1/bank/em1_2.mjs)
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

const V6 = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };

export const E = [
  num(String.raw`$f(x)=3x-5$. Trouve $f(4)$.`, 7, "12 − 5."),
  num(String.raw`$f(x)=x^2+1$. Trouve $f(-3)$.`, 10, "9 + 1."),
  num(String.raw`$g(x)=-2x+9$. Trouve $g(0)$.`, 9, "Seule la constante reste."),
  num(String.raw`$h(x)=6-x^2$. Trouve $h(2)$.`, 2, "6 − 4."),
  num(String.raw`$f(x)=4x$. Résous $f(x)=28$.`, 7, "4x = 28."),
  num(String.raw`$f(x)=2x+3$. Résous $f(x)=-7$.`, -5, "2x = −10."),
  mc(String.raw`$f(5)=12$ signifie que…`, String.raw`le point $(5,12)$ est sur le graphique de $f$`, [String.raw`le point $(12,5)$ est sur le graphique`, String.raw`$f$ fois 5 donne 12`, String.raw`$f(x)=12$ seulement en $x=0$`], "Entrée 5, sortie 12."),
  tf(String.raw`Si $f(x)=x^2$, alors $f(-4)=-16$.`, false, "(−4)² = 16."),
  num("Utilise le graphique pour trouver f(1).", 2, "La droite passe par (1, 2).", planeDoc({ view: V6, lines: [{ m: -1, b: 3, color: "violet" }], points: [P(1, 2, false)] })),
  num("Utilise le graphique de y = f(x) pour trouver la solution positive de f(x) = 0.", 2, "La parabole coupe l'axe des x en −2 et en 2.", graph((x) => x * x - 4, V6)),
  mx(String.raw`$f(x)=5x-1$. Écris $f(a)$.`, "5*a-1", "Remplace x par a."),
  mx(String.raw`$f(x)=x+7$. Écris $f(2x)$.`, "2*x+7", "Remplace x par 2x."),
  num(String.raw`Un centre sportif demande $C(n)=8n+12$ dollars pour $n$ cours. Trouve $C(5)$.`, 52, "40 + 12."),
  num(String.raw`Pour $C(n)=8n+12$, combien de cours coûtent 100 dollars?`, 11, "8n = 88."),
  tf(String.raw`$f(0)$ est l'ordonnée à l'origine du graphique de $f$.`, true, "En x = 0, le graphique coupe l'axe des y."),
  num(String.raw`$f(x)=10-3x$. Trouve $f(-2)$.`, 16, "10 + 6."),
  num(String.raw`Une table donne $x$ : $1,2,3$ et $f(x)$ : $4,9,16$. Trouve $f(2)$.`, 9, "Lis la valeur correspondant à x = 2."),
  mc(String.raw`Résoudre $f(x)=0$ permet de trouver…`, "les abscisses à l'origine (les zéros)", ["l'ordonnée à l'origine", "le sommet", "le domaine"], "Les entrées qui donnent la sortie 0."),
  num(String.raw`$f(x)=\frac x2+1$. Trouve $f(10)$.`, 6, "5 + 1."),
  num(String.raw`$f(x)=|x-6|$. Trouve $f(1)$.`, 5, "|−5|."),
];

export const M = [
  mx(String.raw`$f(x)=x^2-3x$. Simplifie $f(a+1)$.`, "a^2-a-2", "(a + 1)² − 3(a + 1) = a² + 2a + 1 − 3a − 3."),
  mx(String.raw`$g(x)=4-2x$. Écris $g(3a)$.`, "4-6*a", "4 − 2(3a)."),
  num(String.raw`$f(x)=x^2-2x$. Trouve la solution négative de $f(x)=8$.`, -2, "x² − 2x − 8 = (x − 4)(x + 2)."),
  num(String.raw`$f(x)=2x^2-x$. Trouve la solution positive de $f(x)=10$.`, 2.5, "(2x − 5)(x + 2) = 0.", null, 0.001),
  num(String.raw`$f(x)=x^2+5$. Trouve $f(3)-f(1)$.`, 8, "14 − 6."),
  num(String.raw`$f(x)=3x-1$ et $g(x)=x^2$. Trouve $f(g(2))$.`, 11, "g(2) = 4; f(4) = 11."),
  num(String.raw`$f(x)=3x-1$ et $g(x)=x^2$. Trouve $g(f(2))$.`, 25, "f(2) = 5; g(5) = 25."),
  tf(String.raw`Pour $f(x)=x^2$, $f(a+b)=f(a)+f(b)$ pour tous $a$, $b$.`, false, "(a + b)² = a² + 2ab + b²."),
  num("Le graphique représente y = f(x). Combien de valeurs de x vérifient f(x) = 3?", 2, "La droite y = 3 coupe la parabole deux fois.", graph((x) => -((x - 1) ** 2) + 4, V6, [P(1, 4)], { lines: [{ m: 0, b: 3, color: "amber", dash: true }] })),
  num("Le graphique représente y = f(x). Combien de valeurs de x vérifient f(x) = 4?", 1, "Seul le sommet (1, 4) est à la hauteur 4.", graph((x) => -((x - 1) ** 2) + 4, V6, [P(1, 4)])),
  num(String.raw`La hauteur d'une balle est $h(t)=-5t^2+20t+1$ m. Trouve $h(1)$.`, 16, "−5 + 20 + 1."),
  num(String.raw`Pour $h(t)=-5t^2+20t+1$, à quel moment $t>0$ la balle revient-elle à sa hauteur de départ?`, 4, "−5t² + 20t = 0 → t = 0 ou 4."),
  ms(String.raw`$f(x)=x^2-4x$. Quelles valeurs sont égales à 0? Choisis toutes les bonnes réponses.`, [String.raw`$f(0)$`, String.raw`$f(4)$`, String.raw`$f(2)$`, String.raw`$f(-4)$`], [0, 1], "f(2) = −4, f(−4) = 32."),
  num(String.raw`$f(x)=ax+3$ et $f(2)=11$. Trouve $a$.`, 4, "2a + 3 = 11."),
  mc(String.raw`$f(x)=x^2$. Compare $2f(3)$ et $f(6)$.`, "18 et 36", ["18 et 18", "36 et 36", "36 et 18"], "2·9 = 18; 6² = 36."),
  num(String.raw`Une table donne $x$ : $-1,0,2,5$ et $f(x)$ : $3,-2,3,0$. Combien de valeurs de la table sont solutions de $f(x)=3$?`, 2, "x = −1 et x = 2."),
  mx(String.raw`$f(x)=2x+5$. Simplifie $f(x-3)$.`, "2*x-1", "2(x − 3) + 5."),
  num(String.raw`$f(x)=\sqrt{x+7}$. Trouve $f(9)$.`, 4, "√16."),
  num(String.raw`$f(x)=\frac{1}{x-2}$. Trouve $f(2.5)$.`, 2, "1 ÷ 0.5."),
  num(String.raw`Le revenu est $R(x)=-2x^2+24x$ (en centaines de dollars). Trouve $R(6)$.`, 72, "−72 + 144."),
];
