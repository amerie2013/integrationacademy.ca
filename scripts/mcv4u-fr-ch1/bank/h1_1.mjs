// 1.1 Taux de variation et pente d'une courbe — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "1.1 Taux de variation et pente d'une courbe";
export const Q = [
  num(String.raw`Le taux de variation moyen de $x^2$ sur $[2,b]$ est 9. Trouve $b$.`, 7, "(b² − 4)/(b − 2) = b + 2."),
  num(String.raw`Le taux de variation moyen de $x^3$ sur $[1,b]$ est 21, avec $b>1$. Trouve $b$.`, 4, "b² + b + 1 = 21."),
  num(String.raw`Le taux de variation moyen de $f(x)=x^2+kx$ sur $[1,3]$ est 10. Trouve $k$.`, 6, "(9 + 3k − 1 − k) ÷ 2 = 4 + k."),
  mc("Pour quelles valeurs de x le graphique de y = |x² − 4| n'a-t-il pas de tangente?", String.raw`$x=\pm2$`, [String.raw`$x=0$`, String.raw`$x=\pm4$`, String.raw`$x=2$ seulement`], "Des coins là où x² − 4 change de signe.", graph((x) => Math.abs(x * x - 4), { xmin: -3.5, xmax: 3.5, ymin: -1, ymax: 6 })),
  num(String.raw`Estime le taux de variation instantané de $f(x)=x^3-x$ en $x=1$.`, 2, "Les pentes centrées s'approchent de 3 − 1.", null, 0.01),
  num(String.raw`Pour $y=x^2$, la pente de la sécante sur $[a,a+h]$ est $2a+h$. Trouve-la pour $a=3$, $h=0.5$.`, 6.5, "6 + 0.5.", null, 0.0001),
  tf("À un coin, les pentes des sécantes venant de la gauche et de la droite s'approchent de valeurs différentes.", true, "C'est pourquoi il n'existe pas de tangente."),
  num("La tangente à y = −½x² + 4x en x = 2 est tracée et passe par (2, 6) et (4, 10). Quelle est sa pente?", 2, "4 ÷ 2.", graph((x) => -0.5 * x * x + 4 * x, { xmin: -1, xmax: 8, ymin: -1, ymax: 12 }, [P(2, 6), P(4, 10)], { more: [{ f: (x) => 2 * x + 2, color: "green" }] })),
  num(String.raw`Estime la vitesse à $t=3$ pour $s(t)=2t^2+t$ m.`, 13, "Pente centrée : 4(3) + 1.", null, 0.01),
  num(String.raw`Une population est $P(t)=1000(2)^{t/5}$. Trouve le taux de variation moyen sur $[0,10]$.`, 300, "(4000 − 1000) ÷ 10."),
  mc("Quelle fonction a une tangente en chaque point?", String.raw`$y=x^2$`, [String.raw`$y=|x|$`, String.raw`$y=|x-3|+1$`, String.raw`$y=|x^2-1|$`], "Aucun coin."),
  num("Le graphique de la distance d'une marcheuse est représenté (minutes, km). Trouve sa vitesse sur le dernier segment en km/min.", 4, "(10 − 6) ÷ (6 − 5).", planeDoc({ view: { xmin: -0.3, xmax: 6.5, ymin: -0.5, ymax: 11 }, segs: [{ pts: [[0, 0], [2, 6], [5, 6], [6, 10]], color: "violet" }], points: [P(2, 6), P(5, 6), P(6, 10)], step: { x: 1, y: 1 } })),
  num(String.raw`Trouve le taux de variation moyen de $\sqrt x$ sur $[4,4.01]$ (4 décimales).`, 0.2498, "(√4.01 − 2) ÷ 0.01.", null, 0.0005),
  num(String.raw`Un réservoir contient $V(t)=1000\left(1-\frac{t}{40}\right)^2$ L. Trouve le taux de variation moyen sur $[0,10]$.`, -43.75, "V(10) = 562.5.", null, 0.001),
  num(String.raw`Sur $y=x^2$, la sécante de $x=1$ à $x=a$ a une pente de 5. Trouve $a$.`, 4, "1 + a = 5."),
  tf("Un taux de variation moyen peut être 0 même si la fonction varie entre les deux extrémités.", true, "p. ex. x² sur [−1, 1]."),
  num(String.raw`Estime le taux de variation instantané de $\frac1x$ en $x=2$ (4 décimales).`, -0.25, "Pente centrée ≈ −0.25.", null, 0.0005),
  num(String.raw`Pour $f(x)=x^2-6x$, pour quelle valeur de $x$ le taux instantané est-il égal au taux moyen sur $[0,4]$?`, 2, "Taux moyen −2; 2x − 6 = −2."),
  mc("La parabole est symétrique par rapport à x = 3. Quel est son taux de variation moyen sur [2, 4]?", "0", ["positif", "négatif", "on ne peut pas le trouver"], "f(2) = f(4).", graph((x) => -((x - 3) ** 2) + 5, { xmin: 0, xmax: 6, ymin: -1, ymax: 6 }, [P(2, 4), P(4, 4)])),
  num(String.raw`La hauteur d'une balle est $h(t)=-5t^2+30t$. À quel moment son taux de variation instantané est-il 0?`, 3, "Au sommet : taux 30 − 10t = 0."),
];
