// 2.3 Vitesse, accélération et dérivées secondes — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "2.3 Vitesse, accélération et dérivées secondes";
export const Q = [
  num("Un objet se déplace selon s(t) = 2t³ − 21t² + 60t m (graphique illustré). Trouve la distance totale parcourue de t = 0 à t = 6.", 90, "Demi-tours à t = 2 et 5 : s = 0, 52, 25, 36; 52 + 27 + 11.", graph((t) => 2 * t ** 3 - 21 * t * t + 60 * t, { xmin: 0, xmax: 6.5, ymin: 0, ymax: 60 }, [P(2, 52), P(5, 25), P(6, 36)], { a: 0, b: 6.5, step: { x: 1, y: 10 } })),
  mc(S`Pour $s(t)=t^3-12t^2+45t$, quand l'objet accélère-t-il?`, S`$3\lt t\lt4$ et $t\gt5$`, [S`$0\lt t\lt3$ seulement`, S`$3\lt t\lt5$`, S`$t\gt4$ seulement`], "v = 3(t − 3)(t − 5), a = 6t − 24 : mêmes signes sur (3, 4) et pour t > 5."),
  num(S`Pour $s(t)=t^4-8t^2$, à quel moment positif l'objet est-il au repos?`, 2, "4t(t² − 4) = 0."),
  num(S`La hauteur d'une balle est $h(t)=-4.9t^2+24.5t+3$ m. Trouve sa hauteur maximale (3 décimales).`, 33.625, "v = 0 à t = 2.5.", null, 0.001),
  num("Une balle lancée vers le haut a pour hauteur h(t) = −5t² + v₀t et atteint une hauteur maximale de 45 m. Trouve v₀ (m/s).", 30, "Sommet à t = v₀/10, hauteur v₀²/20 = 45."),
  num(S`Pour $s(t)=t^3-6t^2+5t$, trouve la vitesse au moment où l'accélération est nulle.`, -7, "a = 6t − 12 = 0 à t = 2; v = 12 − 24 + 5."),
  num(S`Pour $f(x)=x^5$, trouve $f'''(1)$.`, 60, "5x⁴ → 20x³ → 60x²."),
  tf("Un objet accélère exactement quand sa vitesse et son accélération ont le même signe.", true, "Alors |v| augmente."),
  num(S`Trouve la dérivée quatrième de $f(x)=x^4$.`, 24, "4 · 3 · 2 · 1."),
  num("Pour s(t) = t² − 8t + 15 m (graphique illustré), trouve la distance totale parcourue de t = 0 à t = 6.", 20, "Demi-tour à t = 4 : |−1 − 15| + |3 − (−1)|.", graph((t) => t * t - 8 * t + 15, { xmin: 0, xmax: 6.5, ymin: -2, ymax: 16 }, [P(0, 15), P(4, -1), P(6, 3)], { a: 0, b: 6.5, step: { x: 1, y: 2 } })),
  num("Le graphique de la vitesse v(t) = t² − 6t + 8 est illustré. Pendant combien de secondes l'objet recule-t-il?", 2, "v < 0 sur (2, 4).", graph((t) => t * t - 6 * t + 8, { xmin: 0, xmax: 5.5, ymin: -2, ymax: 8 }, [P(2, 0), P(4, 0)], { a: 0, b: 5.5 })),
  num(S`Pour $s(t)=t^3-3t^2-9t+5$, trouve le module de la vitesse quand l'accélération est nulle.`, 12, "a = 0 à t = 1; v = 3 − 6 − 9 = −12."),
  mc("Le graphique d'une vitesse est sous l'axe des t et monte. L'objet :", "recule et ralentit", ["avance et accélère", "recule et accélère", "est au repos"], "v < 0, a > 0 : signes contraires."),
  num(S`Pour $f(x)=x^3-6x^2$, où a-t-on $f''(x)=0$?`, 2, "6x − 12 = 0."),
  num("Une pierre tombe d'une falaise de 80 m : h(t) = 80 − 4.9t² (graphique illustré). Trouve le module de sa vitesse à l'impact (2 décimales).", 39.6, "t = √(80/4.9) ≈ 4.04 s; module 9.8t ≈ 39.60 m/s.", graph((t) => 80 - 4.9 * t * t, { xmin: 0, xmax: 4.5, ymin: 0, ymax: 90 }, [P(4.04, 0)], { a: 0, b: Math.sqrt(80 / 4.9), step: { x: 0.5, y: 10 } }), 0.01),
  num(S`Un objet a pour position $s(t)=pt^2+qt$ avec $v(0)=6$ et une accélération constante de $-4$. À quel moment est-il au repos?`, 1.5, "q = 6, p = −2 : v = −4t + 6.", null, 0.0001),
  num(S`Pour $f(x)=\frac1x$, trouve $f''(-1)$.`, -2, "2x⁻³ en −1."),
  num("Le graphique de la position s(t) = t³ − 3t² + 3t est illustré. À quel moment l'objet est-il momentanément au repos?", 1, "v = 3(t − 1)² ≥ 0 : il ne fait jamais demi-tour.", graph((t) => t ** 3 - 3 * t * t + 3 * t, { xmin: 0, xmax: 2.2, ymin: 0, ymax: 3 }, [P(1, 1)], { a: 0, b: 2.2, step: { x: 0.5, y: 0.5 } })),
  num(S`Une voiture qui freine a pour position $s(t)=20t-2t^2$ m. Quelle distance parcourt-elle avant de s'arrêter?`, 50, "v = 20 − 4t = 0 à t = 5; s(5) = 50."),
  num(S`Pour $s(t)=t^4$, trouve la dérivée troisième à $t=1$.`, 24, "4t³ → 12t² → 24t."),
];
