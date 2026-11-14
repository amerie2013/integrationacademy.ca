// 1.2 Taux de variation à partir d'équations — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const E = [
  num(String.raw`Évalue $\frac{f(1+h)-f(1)}{h}$ pour $f(x)=x^2$ et $h=1$.`, 3, "(4 − 1) ÷ 1."),
  num(String.raw`Évalue $\frac{f(2+h)-f(2)}{h}$ pour $f(x)=x^2$ et $h=0.1$.`, 4.1, "(4.41 − 4) ÷ 0.1.", null, 0.0001),
  mc(String.raw`Que représente $\frac{f(a+h)-f(a)}{h}$?`, "la pente d'une sécante", ["la pente de la tangente", "l'ordonnée à l'origine", "l'aire sous la courbe"], "Variation verticale sur variation horizontale entre deux points."),
  num(String.raw`Pour $f(x)=x^2$ en $a=3$, le quotient simplifié est $6+h$. Quel est le taux instantané?`, 6, "Fais tendre h vers 0."),
  num(String.raw`Quel est le taux de variation instantané de $f(x)=5x+1$ en $x=2$?`, 5, "La pente de la droite."),
  tf("On peut remplacer h par 0 dans le quotient de différence avant de le simplifier.", false, "Cela donne 0/0."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=x^2$ en $x=-2$.`, -4, "Taux 2a."),
  mc(String.raw`Pour $f(x)=x^2$, combien vaut $f(2+h)$?`, String.raw`$4+4h+h^2$`, [String.raw`$4+h$`, String.raw`$4+h^2$`, String.raw`$2+h^2$`], "(2 + h)²."),
  num(String.raw`Pour $f(x)=3x$, le quotient de différence est égal à quel nombre pour tout $h\ne0$?`, 3, "3h ÷ h."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=x^2+1$ en $x=1$.`, 2, "Le +1 ne change pas les pentes.", graph((x) => x * x + 1, { xmin: -2, xmax: 3, ymin: -1, ymax: 8 }, [P(1, 2)])),
  mc(String.raw`Que devrais-tu faire avec $\sqrt{a+h}-\sqrt a$ dans un quotient de différence?`, "multiplier par le conjugué", ["l'élever au carré", "poser h = 0 immédiatement", "mettre h en évidence directement"], "Rationalise le numérateur."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=x^3$ en $x=0$.`, 0, "3h² + h³ … sur h → 0."),
  tf("h peut être négatif dans le quotient de différence.", true, "Cela donne une sécante vers la gauche."),
  num(String.raw`Évalue $\frac{f(1+h)-f(1)}{h}$ pour $f(x)=2x^2$ et $h=0.5$.`, 5, "(4.5 − 2) ÷ 0.5."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=2x^2$ en $x=1$.`, 4, "4 + 2h → 4."),
  mc("Quelle est l'équation point-pente de la tangente en (a, f(a)) de pente m?", String.raw`$y-f(a)=m(x-a)$`, [String.raw`$y=mx+a$`, String.raw`$y-a=m(x-f(a))$`, String.raw`$y=f(a)x+m$`], "Forme point-pente."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=7-x$ en $x=3$.`, -1, "Pente −1."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=x^2$ en $x=0.5$.`, 1, "2(0.5)."),
  num("La sécante à y = x² à partir de a = 1 avec h = 1 est tracée. Quelle est sa pente?", 3, "(4 − 1) ÷ 1.", graph((x) => x * x, { xmin: -1, xmax: 3, ymin: -1, ymax: 6 }, [P(1, 1), P(2, 4)], { more: [{ f: (x) => 3 * x - 2, color: "amber" }] })),
  fill("La limite du quotient de différence quand h → 0 est le taux de variation ___.", ["instantané", "instantane", "instantaneous"], "La pente de la tangente."),
];

export const M = [
  num(String.raw`Trouve le taux de variation instantané de $f(x)=x^2-3x$ en $x=4$.`, 5, "2(4) − 3."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=x^3$ en $x=-2$.`, 12, "3(4)."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=\frac1x$ en $x=1$.`, -1, "−1/(1)(1 + h) → −1."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=\sqrt x$ en $x=1$.`, 0.5, "1/(√(1 + h) + 1) → ½.", null, 0.0001),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=4x^2+x$ en $x=0$.`, 1, "4h + 1 → 1."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=x^2+2x$ en $x=-1$.`, 0, "2(−1) + 2."),
  mc(String.raw`Quelle droite est tangente à $y=x^2$ en $(2,4)$?`, String.raw`$y=4x-4$`, [String.raw`$y=2x$`, String.raw`$y=4x+4$`, String.raw`$y=2x+4$`], "Pente 4, passant par (2, 4).", graph((x) => x * x, { xmin: -1, xmax: 4, ymin: -2, ymax: 10 }, [P(2, 4)])),
  num(String.raw`La position d'un objet est $s(t)=t^2+3t$ m. Trouve sa vitesse à $t=2$.`, 7, "2(2) + 3."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=\frac2x$ en $x=2$.`, -0.5, "−2/x².", null, 0.0001),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=-x^2$ en $x=3$.`, -6, "−2(3)."),
  num(String.raw`Évalue $\frac{f(1+h)-f(1)}{h}$ pour $f(x)=x^3$ et $h=0.1$.`, 3.31, "(1.331 − 1) ÷ 0.1.", null, 0.0001),
  tf("Simplifier le quotient de différence prouve le taux exact; une table de valeurs ne fait que le suggérer.", true, "Les tables ne peuvent pas atteindre h = 0."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=(x+1)^2$ en $x=1$.`, 4, "2(x + 1) en 1."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=\sqrt x$ en $x=25$.`, 0.1, "1/(2·5).", null, 0.0001),
  num(String.raw`Pour quelle valeur de x la tangente à $y=x^2-10x$ est-elle horizontale?`, 5, "2a − 10 = 0."),
  num(String.raw`Trouve l'ordonnée à l'origine de la tangente à $y=x^2$ en $x=3$.`, -9, "y = 6x − 9."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=3x^2-2x$ en $x=1$.`, 4, "6(1) − 2."),
  num(String.raw`La hauteur d'une balle est $h(t)=-5t^2+20t$ m. Trouve sa vitesse à $t=1$.`, 10, "20 − 10(1)."),
  num("La tangente à y = ½x² en x = −2 est tracée. Quelle est sa pente?", -2, "Le taux de ½x² en a est a.", graph((x) => 0.5 * x * x, { xmin: -4, xmax: 2, ymin: -3, ymax: 6 }, [P(-2, 2)], { more: [{ f: (x) => -2 * x - 2, color: "green" }] })),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=x^3+x$ en $x=1$.`, 4, "3 + 1."),
];
