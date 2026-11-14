import { FIG } from "../../mhf4u-bank-figures/figs.mjs";
// 1.3 Équations et graphiques des fonctions polynomiales — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const TOPIC = "1.3 Équations et graphiques des fonctions polynomiales";
export const Q = [
  num(String.raw`Combien d'entiers $x$ tels que $-5\le x\le5$ vérifient $(x+2)(x-1)(x-4)<0$?`, 5, "Ensemble solution x < −2 ou 1 < x < 4 : −5, −4, −3, 2, 3."),
  num(String.raw`Une fonction quartique a un zéro d'ordre 2 en $-1$, des zéros en 2 et en 4, et passe par $(0,16)$. Trouve $f(1)$.`, 24, "a(1)(−2)(−4) = 8a = 16 → a = 2; f(1) = 2(4)(−1)(−3) = 24."),
  num(String.raw`$f(x)=(x-1)(x-2)(x-k)$ a une ordonnée à l'origine de $-12$. Trouve $k$.`, 6, "(−1)(−2)(−k) = −2k = −12."),
  num(String.raw`La fonction cubique illustrée coupe l'axe des x en $-2$, le touche en 3 et a une ordonnée à l'origine de 9. Trouve $f(4)$.`, 3, "f = a(x + 2)(x − 3)²; 18a = 9 → a = ½; f(4) = ½(6)(1) = 3.", graph((x) => 0.5 * (x + 2) * (x - 3) ** 2, { xmin: -3, xmax: 4.5, ymin: -5, ymax: 12 }, [P(-2, 0), P(3, 0), P(0, 9)], { step: { x: 1, y: 2 } })),
  ms(String.raw`Où $f(x)=(x+3)(x-1)^2(x-4)$ est-elle négative? Choisis toutes les bonnes réponses.`, [String.raw`$x<-3$`, String.raw`$-3<x<1$`, String.raw`$1<x<4$`, String.raw`$x>4$`], [1, 2], "f(0) = −12 < 0; le signe ne change pas au zéro double 1."),
  num(String.raw`Combien d'entiers vérifient $x^2(x-3)(x+2)\le0$?`, 6, "−2 ≤ x ≤ 3 : −2, −1, 0, 1, 2, 3."),
  num("Le graphique montre un polynôme de plus petit degré qui touche l'axe des x en −1 et le traverse en s'aplatissant en 2. Quel est son degré?", 5, "Ordre 2 en −1 et ordre 3 en 2 : 2 + 3.", graph((x) => 0.1 * (x + 1) ** 2 * (x - 2) ** 3, { xmin: -2.5, xmax: 3.2, ymin: -3, ymax: 3 }, [P(-1, 0), P(2, 0)])),
  tf(String.raw`Un polynôme n'a des zéros qu'en 1 et en 4. Si $f(0)>0$ et $f(2)<0$, alors le zéro en 1 est d'ordre impair.`, true, "Le signe change en passant par x = 1."),
  num(String.raw`$f(x)=(x-1)(x+2)(x-k)$ a une ordonnée à l'origine de 10. Trouve $k$.`, 5, "(−1)(2)(−k) = 2k = 10."),
  num(String.raw`Une boîte sans couvercle fabriquée à partir d'une feuille de 10 sur 16 a un volume $V=x(10-2x)(16-2x)$. Trouve $V(2)$.`, 144, "2 · 6 · 12.", FIG.sheet),
  mc(String.raw`Quelle fonction cubique a un zéro en $-1$, un zéro double en 2, et passe par $(1,-8)$?`, String.raw`$y=-4(x+1)(x-2)^2$`, [String.raw`$y=4(x+1)(x-2)^2$`, String.raw`$y=-4(x-1)(x+2)^2$`, String.raw`$y=-2(x+1)(x-2)^2$`], "a(2)(1) = 2a = −8 → a = −4."),
  num(String.raw`Trouve la somme des zéros de $f(x)=2x^3-8x^2-10x$.`, 4, "2x(x − 5)(x + 1) : 0 + 5 − 1."),
  num(String.raw`La fonction quartique illustrée est symétrique par rapport à l'axe des y, a pour zéros $\pm1$ et $\pm3$, et a une ordonnée à l'origine de 4.5. Trouve $f(2)$.`, -7.5, "f = a(x² − 1)(x² − 9); 9a = 4.5 → a = ½; f(2) = ½(3)(−5).", graph((x) => 0.5 * (x * x - 1) * (x * x - 9), { xmin: -3.5, xmax: 3.5, ymin: -9, ymax: 6 }, [P(0, 4.5)], { step: { x: 1, y: 1 } }), 0.001),
  mc(String.raw`Une fonction quartique a un zéro d'ordre 3 en 2, un zéro en $-1$, et $f(0)=8$. Décris son comportement à l'infini.`, "descend aux deux extrémités", ["monte aux deux extrémités", "Q3 → Q1", "Q2 → Q4"], "a(−2)³(1) = −8a = 8 → a = −1."),
  num(String.raw`Combien de zéros réels distincts $f(x)=x^4-5x^2+4$ a-t-elle?`, 4, "(x² − 1)(x² − 4) : ±1, ±2."),
  num(String.raw`Quel est le plus petit entier positif $x$ tel que $x^3>4x$?`, 3, "x(x − 2)(x + 2) > 0 pour x > 2."),
  tf(String.raw`$f(x)=-x^3(x-2)^2$ est positive pour tout $x<0$.`, true, "−(négatif)(positif) = positif."),
  mc("Quelle équation produit le graphique illustré?", String.raw`$y=0.2(x+2)^2(x-1)(x-3)$`, [String.raw`$y=0.2(x-2)^2(x+1)(x+3)$`, String.raw`$y=-0.2(x+2)^2(x-1)(x-3)$`, String.raw`$y=0.2(x+2)(x-1)(x-3)$`], "Touche en −2, traverse en 1 et en 3, monte aux deux extrémités; f(0) = 0.2·4·3 = 2.4.", graph((x) => 0.2 * (x + 2) ** 2 * (x - 1) * (x - 3), { xmin: -3, xmax: 3.8, ymin: -5, ymax: 6 }, [P(0, 2.4)])),
  num(String.raw`$f(x)=a(x-1)(x+1)(x-3)$ passe par $(2,6)$. Trouve $f(0)$.`, -6, "a(1)(3)(−1) = −3a = 6 → a = −2; f(0) = −2(−1)(1)(−3) = −6."),
  num(String.raw`$f(x)=(x-a)(x-b)(x-c)$ a trois zéros entiers positifs consécutifs et une ordonnée à l'origine de $-6$. Trouve le plus grand zéro.`, 3, "abc = 6 avec des entiers consécutifs : 1, 2, 3."),
];
