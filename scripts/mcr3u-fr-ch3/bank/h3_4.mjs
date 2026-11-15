// 3.4 Valeurs maximales et minimales — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { P, graph, planeDoc } from "./fig.mjs";
import { TITLE } from "../l3_4.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(String.raw`Quelle est la plus petite valeur de $x^2+7x+10.25$?`, -2, "(x + 3.5)² − 12.25 + 10.25."),
  num("Un théâtre vend 600 places à 15 dollars. Chaque hausse de 0.50 dollar fait perdre 15 places. Quel est le revenu maximal?", 9187.5, "(15 + 0.5x)(600 − 15x) : zéros −30, 40, x = 5 : 17.5 × 525.", graph((x) => (15 + 0.5 * x) * (600 - 15 * x), { xmin: -32, xmax: 42, ymin: -500, ymax: 10500 }, [P(-30, 0), P(40, 0)], { step: { x: 10, y: 1000 } }), 0.01),
  num("Un théâtre vend 600 places à 15 dollars. Chaque hausse de 0.50 dollar fait perdre 15 places. Quel prix du billet maximise le revenu?", 17.5, "(15 + 0.5x)(600 − 15x) est le plus grand pour x = 5 hausses.", null, 0.001),
  num(String.raw`Au prix $p=-0.25x+20$ dollars, on vend $x$ milliers d'articles; le coût est $C=4x+120$ milliers de dollars. Quel est le profit maximal (en milliers)?`, 136, "P = −0.25x² + 16x − 120 en x = 32."),
  num("160 m de clôture forment un rectangle divisé en 3 enclos par 2 clôtures parallèles à la largeur. Quelle est la plus grande aire totale (m²)?", 800, "4w + 2L = 160 : A = w(80 − 2w), w = 20."),
  num(String.raw`Quelle est la valeur minimale de $2x^2-12x+25$?`, 7, "2(x − 3)² + 7."),
  num("Une cour rectangulaire adossée à une grange utilise 200 m de clôture sur les trois autres côtés, mais une ouverture de 10 m pour une barrière, dans le côté opposé à la grange, ne nécessite pas de clôture. Quelle est la plus grande aire (m²)?", 5512.5, "2w + (L − 10) = 200 → A = w(210 − 2w), w = 52.5.", null, 0.01),
  num(String.raw`Deux nombres vérifient $x+2y=24$. Quelle est la plus grande valeur possible de $xy$?`, 72, "y(24 − 2y) en y = 6."),
  num("Un rectangle a un sommet à l'origine et le sommet opposé sur y = 10 − 2x. Quelle est sa plus grande aire?", 12.5, "x(10 − 2x) en x = 2.5.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 11 }, lines: [{ m: -2, b: 10, color: "violet" }], segs: [{ pts: [[0, 0], [2, 0], [2, 6], [0, 6], [0, 0]], color: "green" }], points: [P(2, 6, "(x, y)")] }), 0.001),
  num("Deux nombres ont une somme de 14. Quelle est la plus petite somme possible de leurs carrés?", 98, "x² + (14 − x)² est la plus petite en x = 7."),
  mc("Quelle fonction a la plus grande valeur maximale?", String.raw`$y=-x^2+6x$`, [String.raw`$y=-2x^2+8x$`, String.raw`$y=-\tfrac12x^2+4x$`, String.raw`$y=-x^2+4x+4$`], "Maximums 9, 8, 8, 8."),
  num(String.raw`Pour quelle valeur de $c$ la fonction $y=x^2-6x+c$ a-t-elle une valeur minimale de 0?`, 9, "(x − 3)² + c − 9."),
  num("Le graphique montre h(t) = −5t² + 20t + 25. À quel instant la hauteur est-elle la plus grande?", 2, "−20/(−10).", graph((t) => -5 * t * t + 20 * t + 25, { xmin: 0, xmax: 5.5, ymin: 0, ymax: 50 }, [P(2, 45)], { a: 0, step: { x: 0.5, y: 5 } })),
  num(String.raw`Quelle est la plus grande hauteur atteinte par $h(t)=-5t^2+20t+25$?`, 45, "h(2)."),
  num("Un cinéma vend 400 billets à 12 dollars. Chaque baisse de 1 dollar ajoute 40 clients. Quel est le revenu maximal?", 4840, "(12 − x)(400 + 40x) : zéros 12, −10 → x = 1 : 11 × 440."),
  num(String.raw`Le coût de production de $x$ centaines d'unités est $C(x)=0.5x^2-30x+600$. Quel est le coût minimal?`, 150, "x = 30."),
  tf("Le profit maximal est toujours atteint pour la même quantité que le revenu maximal.", false, "Les coûts déplacent le sommet."),
  num("Le graphique du profit a les seuils de rentabilité 2 et 14 et est de la forme P(x) = −(x − 2)(x − 14). Quel est le profit maximal?", 36, "En x = 8 : −(6)(−6).", graph((x) => -(x - 2) * (x - 14), { xmin: 0, xmax: 16, ymin: -10, ymax: 40 }, [P(2, 0), P(14, 0), P(8, 36)], { step: { x: 2, y: 5 } })),
  num(String.raw`$y=a(x-3)^2+k$ a une valeur maximale de 8 et passe par $(5,0)$. Trouve son ordonnée à l'origine.`, -10, "4a + 8 = 0 → a = −2; −18 + 8."),
  num(String.raw`Si $x+y=10$, quelle est la plus petite valeur de $x^2+3y^2$?`, 75, "4x² − 60x + 300 en x = 7.5."),
];
