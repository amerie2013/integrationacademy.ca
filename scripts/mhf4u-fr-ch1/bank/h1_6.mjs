import { FIG } from "../../mhf4u-bank-figures/figs.mjs";
// 1.6 Pente des tangentes et taux de variation instantané — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const TOPIC = "1.6 Pente des tangentes et taux de variation instantané";
export const Q = [
  num(String.raw`Trouve l'ordonnée à l'origine de la tangente à $f(x)=x^2-3x$ en $x=2$.`, -4, "Pente 2(2) − 3 = 1 par (2, −2) : y = x − 4."),
  num(String.raw`En quel point de $y=x^2$ la tangente a-t-elle une pente de 10? Donne l'ordonnée.`, 25, "2a = 10 → a = 5."),
  num(String.raw`Où la tangente à $y=x^3$ en $x=1$ coupe-t-elle l'axe des x? (2 décimales)`, 0.6667, "Pente 3 par (1, 1) : y = 3x − 2.", null, 0.006),
  num(String.raw`Évalue $\dfrac{f(2+h)-f(2)}{h}$ pour $f(x)=x^3$ quand $h=0.1$.`, 12.61, "(9.261 − 8) ÷ 0.1.", null, 0.001),
  num(String.raw`La tangente à $f(x)=ax^2$ en $x=3$ a une pente de 12. Trouve $a$.`, 2, "Pente 2a·3 = 6a."),
  num(String.raw`La tangente à $f(x)=x^2+bx$ en $x=4$ est horizontale. Trouve $b$.`, -8, "Pente 2(4) + b = 0."),
  num(String.raw`Pour quelle valeur de x la tangente à $y=2x^2-8x+1$ est-elle horizontale?`, 2, "Quotient de différences 4a − 8 + 2h → 4a − 8 = 0."),
  num("La hauteur d'une balle est h(t) = −4.9t² + 14.7t + 1 m. Trouve sa vitesse exacte en t = 1 s.", 4.9, "−4.9(2 + h) + 14.7 → −9.8 + 14.7.", graph((x) => -4.9 * x * x + 14.7 * x + 1, { xmin: -0.3, xmax: 3.3, ymin: -1, ymax: 13 }, [P(1, 10.8)], { a: 0, step: { x: 0.5, y: 2 } }), 0.001),
  tf(String.raw`Si toutes les pentes des tangentes de $f$ sur $(0,3)$ sont positives, alors $f(3)>f(0)$ (pour une fonction $f$ lisse).`, true, "f est croissante sur tout l'intervalle."),
  num(String.raw`La tangente à $y=x^2$ en $x=a$ ($a>0$) passe par $(0,-9)$. Trouve $a$.`, 3, "Tangente y = 2ax − a²; ordonnée à l'origine −a² = −9."),
  num(String.raw`Sur $y=x^2$, pour quelle valeur de x la tangente est-elle parallèle à la sécante de $x=1$ à $x=7$?`, 4, "Pente de la sécante 8 = 2a.", FIG.secant),
  ms("En quels points indiqués sur y = x³ − 3x le taux de variation instantané est-il 0? Choisis toutes les bonnes réponses.", ["A", "B", "C", "D"], [0, 2], "A et C sont des points tournants; en B le graphique descend, en D il monte.", graph((x) => x ** 3 - 3 * x, { xmin: -2.5, xmax: 2.5, ymin: -3, ymax: 3 }, [P(-1, 2, "A"), P(0, 0, "B"), P(1, -2, "C"), P(2, 2, "D")])),
  num(String.raw`La position d'un objet est $s(t)=t^3$ m. Utilise $(2+h)^3$ pour trouver sa vitesse exacte en $t=2$.`, 12, "(12h + 6h² + h³)/h → 12."),
  num(String.raw`Estime le taux de variation de $A(t)=1000(1.05)^t$ en $t=10$ (2 décimales).`, 79.47, "Un court intervalle centré donne ≈ 79.47 dollars par année.", null, 0.05),
  mc(String.raw`Pour $y=x^2$, compare le taux de variation moyen sur $[1,3]$ avec le taux instantané en $x=3$.`, "le taux instantané (6) est plus grand que le taux moyen (4)", ["ils sont égaux", "le taux moyen est plus grand", "les deux valent 6"], "Moyen (9 − 1)/2 = 4; pente de la tangente 2·3 = 6."),
  num(String.raw`Les tangentes à $y=x^2$ en $x=3$ et en $x=-3$ se coupent en un point. Trouve son ordonnée.`, -9, "y = 6x − 9 et y = −6x − 9 se coupent en (0, −9)."),
  num("La droite rouge est tangente à y = 0.25x³ en (2, 2) et passe par (3, 5). Trouve l'ordonnée à l'origine de la tangente.", -4, "Pente 3 par (2, 2) : y = 3x − 4.", graph((x) => 0.25 * x ** 3, { xmin: -1, xmax: 3.5, ymin: -5, ymax: 8 }, [P(2, 2), P(3, 5)], { more: [{ f: (x) => 3 * x - 4, color: "red", a: 0, b: 3.5 }] })),
  tf(String.raw`La tangente à $y=x^4$ en $x=0$ est horizontale.`, true, "(h⁴ − 0)/h = h³ → 0."),
  num(String.raw`Estime le taux de variation instantané de $f(x)=\frac1x$ en $x=2$ (2 décimales).`, -0.25, "La pente centrée avec h = 0.01 est ≈ −0.25.", null, 0.005),
  num("Un café refroidit selon T(t) = 20 + 60(0.9)^t °C après t min. Estime son taux de variation en t = 5 (2 décimales).", -3.73, "Un court intervalle centré donne ≈ −3.73 °C/min.", graph((x) => 20 + 60 * 0.9 ** x, { xmin: -0.5, xmax: 15, ymin: 0, ymax: 90 }, [P(5, 55.43)], { a: 0, step: { x: 1, y: 10 } }), 0.02),
];
