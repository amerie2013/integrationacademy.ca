// 1.5 Pente des sécantes et taux de variation moyen — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const TOPIC = "1.5 Pente des sécantes et taux de variation moyen";
export const Q = [
  num(String.raw`Le taux de variation moyen de $f(x)=x^2+bx$ sur $[1,3]$ est 10. Trouve $b$.`, 6, "(9 + 3b − 1 − b) ÷ 2 = 4 + b."),
  num(String.raw`Le taux de variation moyen de $f(x)=x^3$ sur $[1,b]$ est 7, avec $b>1$. Trouve $b$.`, 2, "(b³ − 1)/(b − 1) = b² + b + 1 = 7."),
  num(String.raw`Le taux de variation moyen de $f(x)=x^2$ sur $[a,a+2]$ est 10. Trouve $a$.`, 4, "((a + 2)² − a²) ÷ 2 = 2a + 2."),
  num(String.raw`Le taux de variation moyen de $f(x)=ax^2$ sur $[1,3]$ est 12. Trouve $a$.`, 3, "8a ÷ 2 = 4a."),
  ms(String.raw`Sur quels intervalles le taux de variation moyen de $f(x)=x^3-9x$ est-il égal à 0? Choisis toutes les bonnes réponses.`, [String.raw`$[-3,3]$`, String.raw`$[0,3]$`, String.raw`$[-3,0]$`, String.raw`$[1,2]$`], [0, 1, 2], "f(−3) = f(0) = f(3) = 0; f(1) = −8, f(2) = −10.", graph((x) => x ** 3 - 9 * x, { xmin: -4, xmax: 4, ymin: -12, ymax: 12 }, [], { step: { x: 1, y: 2 } })),
  num(String.raw`Une balle a une hauteur $h(t)=-4.9t^2+19.6t+1$ m. Trouve sa vitesse moyenne sur $[0,4]$.`, 0, "h(0) = h(4) = 1."),
  num(String.raw`Trouve le taux de variation moyen de $f(x)=2^x$ sur $[1,4]$ (2 décimales).`, 4.6667, "(16 − 2) ÷ 3.", null, 0.006),
  num("Un réservoir se vide de sorte qu'il contient V(t) = 40(5 − t)² L après t min. Trouve le taux de variation moyen sur [1, 3].", -240, "V(1) = 640, V(3) = 160 : −480 ÷ 2.", graph((x) => 40 * (5 - x) ** 2, { xmin: 0, xmax: 5.5, ymin: 0, ymax: 1100 }, [P(1, 640), P(3, 160)], { a: 0, b: 5, step: { x: 1, y: 100 } })),
  tf(String.raw`Si le taux de variation moyen de $f$ est 3 sur $[0,2]$ et 5 sur $[2,4]$, alors il est 4 sur $[0,4]$.`, true, "Variation totale 6 + 10 = 16 sur 4 unités."),
  num(String.raw`Le taux de variation moyen de $f$ est 3 sur $[0,2]$ et $-1$ sur $[2,6]$. Trouve-le sur $[0,6]$ (2 décimales).`, 0.3333, "Variation totale 6 − 4 = 2 sur 6 unités.", null, 0.006),
  mc(String.raw`Pour $f(x)=x^2$, le taux de variation moyen sur $[a,b]$ se simplifie en :`, String.raw`$a+b$`, [String.raw`$b-a$`, String.raw`$2b$`, String.raw`$ab$`], "(b² − a²)/(b − a) = a + b."),
  num(String.raw`Le taux de variation moyen de $f(x)=x^2$ sur $[-3,b]$ est $-1$. Trouve $b$.`, 2, "−3 + b = −1."),
  num("Trouve le taux de variation moyen de y = x³ − 6x² + 9x sur [0, 4].", 1, "f(0) = 0, f(4) = 4.", graph((x) => x ** 3 - 6 * x * x + 9 * x, { xmin: -0.5, xmax: 4.5, ymin: -1, ymax: 6 }, [P(0, 0), P(4, 4)])),
  num(String.raw`Un placement double tous les 8 ans : $A(t)=1000(2)^{t/8}$. Trouve le taux de variation moyen sur $[8,16]$ en dollars par année.`, 250, "(4000 − 2000) ÷ 8."),
  mc(String.raw`Sur quel intervalle le taux de variation moyen de $f(x)=x^3$ est-il égal à 3?`, String.raw`$[-1,2]$`, [String.raw`$[0,3]$`, String.raw`$[1,2]$`, String.raw`$[0,1]$`], "(8 − (−1)) ÷ 3 = 3."),
  num(String.raw`La sécante à $f(x)=x^2-4x+5$ qui passe par $x=1$ et $x=3$ coupe l'axe des y en quelle valeur de y?`, 2, "f(1) = f(3) = 2 : la sécante est y = 2."),
  num(String.raw`Trouve l'ordonnée à l'origine de la sécante à $y=x^3$ qui passe par $x=-1$ et $x=2$.`, 2, "Pente (8 + 1) ÷ 3 = 3 par (−1, −1) : y = 3x + 2."),
  tf(String.raw`Pour tout $a>0$, le taux de variation moyen de $y=x^3$ sur $[-a,a]$ est positif.`, true, "(a³ − (−a³)) ÷ 2a = a² > 0."),
  num("La distance parcourue par un objet est d(t) = 0.5t³ m. Trouve sa vitesse moyenne sur [2, 4].", 14, "(32 − 4) ÷ 2.", graph((x) => 0.5 * x ** 3, { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 34 }, [P(2, 4), P(4, 32)], { a: 0, step: { x: 1, y: 4 } })),
  num(String.raw`Le coût de $x$ articles est $C(x)=0.02x^2+3x+100$ dollars. Trouve le taux de variation moyen de 50 à 150 articles.`, 7, "C(50) = 300, C(150) = 1000 : 700 ÷ 100."),
];
