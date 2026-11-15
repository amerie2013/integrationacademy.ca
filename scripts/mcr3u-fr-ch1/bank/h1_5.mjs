// 1.5 Réciproques — 20 questions difficiles (miroir de ../../mcr3u-ch1/bank/h1_5.mjs)
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

const YX = { m: 1, b: 0, color: "gray", dash: true };

export const TOPIC = "1.5 Réciproques";
export const Q = [
  mx(String.raw`Trouve $f^{-1}(x)$ pour $f(x)=3-\frac x4$.`, "12-4*x", "x = 3 − y/4 → y = 4(3 − x)."),
  num(String.raw`$f(x)=(x-2)^2+1$, $x\ge2$. En quelle valeur de x la fonction $f$ rencontre-t-elle $f^{-1}$? (3 décimales)`, 3.618, "Sur y = x : x² − 5x + 5 = 0 → x = (5 + √5)/2 (l'autre racine est < 2).", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -1, ymax: 6 }, curves: [{ f: (x) => (x - 2) ** 2 + 1, a: 2, color: "blue" }, { f: (x) => 2 + Math.sqrt(x - 1), a: 1, color: "red" }], lines: [YX] }), 0.002),
  mc(String.raw`$f(x)=x^2-8x+10$. Quelle restriction (contenant $x=6$) donne une réciproque qui est une fonction, et quelle est-elle?`, String.raw`$x\ge4$; $f^{-1}(x)=4+\sqrt{x+6}$`, [String.raw`$x\le4$; $f^{-1}(x)=4-\sqrt{x+6}$`, String.raw`$x\ge4$; $f^{-1}(x)=4+\sqrt{x-6}$`, String.raw`$x\ge6$; $f^{-1}(x)=\sqrt{x}+6$`], "f(x) = (x − 4)² − 6."),
  num(String.raw`$f(x)=ax+b$ est sa propre réciproque, $a\ne1$, et $f(2)=7$. Trouve $f(5)$.`, 4, "a = −1, b = 9."),
  num(String.raw`$f(x)=3x+1$. Trouve $f^{-1}(f^{-1}(25))$ (3 décimales).`, 2.333, "f⁻¹(25) = 8, f⁻¹(8) = 7/3.", null, 0.002),
  ms("La droite y = f(x) est illustrée. Quels points sont sur le graphique de f⁻¹? Choisis toutes les bonnes réponses.", [String.raw`$(3,4)$`, String.raw`$(0,-2)$`, String.raw`$(4,3)$`, String.raw`$(2,2)$`], [0, 1, 3], "f contient (4, 3), (−2, 0), (2, 2) : échange-les.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 6 }, lines: [{ m: 0.5, b: 1, color: "blue" }], points: [P(4, 3), P(-2, 0), P(2, 2)] })),
  tf("Si f est croissante sur son domaine, alors f⁻¹ est aussi croissante.", true, "La réflexion par rapport à y = x garde le graphique montant."),
  num(String.raw`$f(x)=x^3+1$. Trouve $f^{-1}(28)$.`, 3, "x³ = 27."),
  num(String.raw`$f(x)=\sqrt{x+3}-1$. Trouve $f^{-1}(2)$.`, 6, "f⁻¹(x) = (x + 1)² − 3."),
  mc(String.raw`Quel est le domaine de $f^{-1}$ pour $f(x)=\sqrt{x+3}-1$?`, String.raw`$x\ge-1$`, [String.raw`$x\ge-3$`, String.raw`$x\ge1$`, String.raw`$x\in\mathbb R$`], "L'image de f est y ≥ −1."),
  num("La courbe bleue est f(x) = (x + 1)² − 2 pour x ≥ −1; la courbe rouge est sa réciproque. Trouve f⁻¹(7).", 2, "(x + 1)² = 9, x ≥ −1.", planeDoc({ view: { xmin: -3, xmax: 8, ymin: -3, ymax: 8 }, curves: [{ f: (x) => (x + 1) ** 2 - 2, a: -1, color: "blue" }, { f: (x) => -1 + Math.sqrt(x + 2), a: -2, color: "red" }], lines: [YX], points: [P(-1, -2)] })),
  num(String.raw`$f(x)=\frac1{x-2}$. Trouve $f^{-1}(0.5)$.`, 4, "f⁻¹(x) = 1/x + 2."),
  tf("Le graphique d'une fonction rencontre toujours le graphique de sa réciproque.", false, "y = x + 1 et y = x − 1 sont parallèles."),
  num(String.raw`À l'aide de $F=1.8C+32$, à quelle température les lectures en degrés Celsius et Fahrenheit sont-elles égales?`, -40, "C = 1.8C + 32 → C = −40."),
  mc(String.raw`Trouve la réciproque de $f(x)=-(x-3)^2+5$, $x\ge3$.`, String.raw`$f^{-1}(x)=3+\sqrt{5-x}$`, [String.raw`$f^{-1}(x)=3-\sqrt{5-x}$`, String.raw`$f^{-1}(x)=3+\sqrt{x-5}$`, String.raw`$f^{-1}(x)=-3+\sqrt{5-x}$`], "x = −(y − 3)² + 5 → (y − 3)² = 5 − x."),
  num(String.raw`$f(x)=2x+3$ et $g(x)=\frac{x-3}{2}$. Trouve $f(g(11))$.`, 11, "g est la réciproque de f."),
  num(String.raw`L'expédition coûte $C(w)=6+1.5w$ dollars pour $w$ kg. Quelle masse coûte 21 dollars?`, 10, "w = (21 − 6) ÷ 1.5."),
  ms("Quelles fonctions sont leur propre réciproque? Choisis toutes les bonnes réponses.", [String.raw`$y=-x$`, String.raw`$y=\frac1x$`, String.raw`$y=6-x$`, String.raw`$y=2x$`, String.raw`$y=x^2$`], [0, 1, 2], "Chacune est symétrique par rapport à y = x."),
  num("Le graphique de y = f(x) est une droite qui passe par (1, 5) et (3, 9). Trouve f⁻¹(15).", 6, "f(x) = 2x + 3.", planeDoc({ view: { xmin: -2, xmax: 8, ymin: -1, ymax: 16 }, lines: [{ m: 2, b: 3, color: "blue" }], points: [P(1, 5), P(3, 9)], step: { x: 1, y: 2 } })),
  num(String.raw`$f(x)=(x-a)^2+b$, $x\ge a$, et $f^{-1}$ passe par $(7,4)$ et $(3,2)$. Trouve $b$.`, 3, "f(4) = 7 et f(2) = 3 : en soustrayant, on obtient a = 2, puis b = 3."),
];
