// 2.3 Vitesse, accélération et dérivées secondes — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  num(S`Un objet a pour position $s(t)=3t^2$ m. Trouve $v(2)$ en m/s.`, 12, "v = 6t."),
  num(S`Pour $s(t)=t^3$, trouve l'accélération à $t=1$.`, 6, "a = 6t."),
  mc("La vitesse est la dérivée de quelle quantité?", "la position", ["l'accélération", "le module de la vitesse", "le temps"], "v = s′(t)."),
  tf("L'accélération est la dérivée de la vitesse.", true, "a = v′(t)."),
  num(S`Pour $s(t)=10t-t^2$, trouve la vitesse initiale $v(0)$.`, 10, "v = 10 − 2t."),
  num(S`Pour $f(x)=x^4$, trouve $f''(1)$.`, 12, "f″ = 12x²."),
  mx(S`Trouve $f''(x)$ pour $f(x)=x^3$.`, "6*x", "3x² → 6x."),
  num(S`Quand un objet tel que $s(t)=t^2-14t$ est-il au repos?`, 7, "2t − 14 = 0."),
  fill("Le module de la vitesse est la valeur ___ de la vitesse.", ["absolue", "absolute"], "Module = |v|."),
  num(S`Pour $s(t)=5t+2$, quelle est l'accélération?`, 0, "v = 5 est constante."),
  num(S`La hauteur d'une balle est $h(t)=-5t^2+30t$ m. Trouve sa vitesse à $t=2$ s.`, 10, "−10t + 30."),
  tf("Si la vitesse est négative, l'objet se déplace dans le sens négatif.", true, "Le signe de v donne le sens du mouvement."),
  num(S`Pour $s(t)=2t^3$, trouve $v(1)$.`, 6, "6t²."),
  mc("Un objet a v > 0 et a < 0. Il :", "ralentit", ["accélère", "est au repos", "recule"], "Signes contraires."),
  num(S`Pour $f(x)=x^5$, trouve $f''(1)$.`, 20, "f″ = 20x³."),
  num(S`Pour $s(t)=t^2+6t$, trouve l'accélération.`, 2, "v = 2t + 6, a = 2."),
  num("Le graphique de la position s(t) = t² − 2t est illustré. À quel moment l'objet est-il au repos?", 1, "v = 2t − 2 = 0.", graph((t) => t * t - 2 * t, { xmin: 0, xmax: 3, ymin: -2, ymax: 4 }, [P(1, -1)], { a: 0, b: 3 })),
  num(S`Pour $s(t)=4t^3-t$, trouve $v(1)$.`, 11, "12t² − 1."),
  mc("Quelles sont les unités de l'accélération si s est en mètres et t en secondes?", "m/s²", ["m/s", "m", "s/m"], "Variation de la vitesse par seconde."),
  num("Le graphique de la vitesse v(t) = 3 − t est illustré. À quel moment l'objet est-il au repos?", 3, "v = 0.", graph((t) => 3 - t, { xmin: 0, xmax: 5, ymin: -3, ymax: 4 }, [P(3, 0)], { a: 0, b: 5 })),
];

export const M = [
  num(S`Pour $s(t)=t^3-3t^2+5$, trouve $a(2)$.`, 6, "a = 6t − 6."),
  num(S`Pour $s(t)=t^3-27t$, à quel moment positif l'objet est-il au repos?`, 3, "3t² − 27 = 0."),
  num(S`Pour $s(t)=2t^2-12t+1$, à quel moment l'objet change-t-il de sens?`, 3, "v = 4t − 12 = 0."),
  num(S`La hauteur d'une balle est $h(t)=-4.9t^2+9.8t+10$ m. Trouve sa hauteur maximale.`, 14.9, "v = 0 à t = 1 : −4.9 + 9.8 + 10.", null, 0.001),
  num(S`Pour $s(t)=t^3-6t^2+12t$, quand l'accélération est-elle nulle?`, 2, "6t − 12 = 0."),
  num(S`Pour $f(x)=\frac1{x^2}$, trouve $f''(1)$.`, 6, "f′ = −2x⁻³, f″ = 6x⁻⁴."),
  num(S`Pour $f(x)=\sqrt x$, trouve $f''(1)$.`, -0.25, "f″ = −¼x^(−3/2).", null, 0.0001),
  mc("Un objet a v = −3 m/s et a = −2 m/s². Il :", "accélère", ["ralentit", "est au repos", "avance"], "Mêmes signes."),
  num(S`Pour $s(t)=t^3-9t$, trouve le module de la vitesse à $t=1$.`, 6, "v(1) = 3 − 9 = −6; module 6."),
  num(S`Pour $s(t)=t^2-6t+8$ m, trouve le déplacement de $t=0$ à $t=5$.`, -5, "s(5) − s(0) = 3 − 8."),
  num(S`Pour $s(t)=t^2-6t+8$ m, trouve la distance totale parcourue de $t=0$ à $t=5$.`, 13, "Demi-tour à t = 3 : |−1 − 8| + |3 − (−1)| = 9 + 4."),
  tf("Si l'accélération est nulle, l'objet est au repos.", false, "a = 0 signifie une vitesse constante."),
  num("Le graphique de la vitesse v(t) = t² − 5t + 4 est illustré. À quel premier moment l'objet est-il au repos?", 1, "(t − 1)(t − 4) = 0.", graph((t) => t * t - 5 * t + 4, { xmin: 0, xmax: 5, ymin: -3, ymax: 5 }, [P(1, 0), P(4, 0)], { a: 0, b: 5 })),
  num(S`Pour $s(t)=-t^3+6t^2$, à quel moment la vitesse est-elle la plus grande?`, 2, "a = −6t + 12 = 0."),
  num(S`Pour $f(x)=x^4-x^3$, trouve $f''(2)$.`, 36, "12x² − 6x en 2."),
  num(S`Une pierre lâchée d'une hauteur de 45 m a pour hauteur $h(t)=45-5t^2$. Trouve le module de sa vitesse quand elle touche le sol (m/s).`, 30, "t = 3; |v| = 10t."),
  num(S`Pour $s(t)=2t^3-3t^2-12t$, à quel moment positif l'objet est-il au repos?`, 2, "6(t − 2)(t + 1) = 0."),
  num(S`Pour $s(t)=(t-2)^3$, trouve $a(3)$.`, 6, "a = 6(t − 2)."),
  num("Le graphique de la position s(t) = t³ − 12t est illustré. À quel moment positif l'objet est-il au repos?", 2, "3t² − 12 = 0.", graph((t) => t ** 3 - 12 * t, { xmin: 0, xmax: 4, ymin: -18, ymax: 18 }, [P(2, -16)], { a: 0, b: 4, step: { x: 0.5, y: 4 } })),
  mx(S`Trouve $f''(x)$ pour $f(x)=x^4-3x^2$.`, "12*x^2-6", "4x³ − 6x → 12x² − 6."),
];
