// 3.2 Maximums et minimums — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  mc(S`$f'$ passe du positif au négatif en $c$. Alors $f$ a :`, S`un maximum relatif en $c$`, [S`un minimum relatif en $c$`, S`un point d'inflexion en $c$`, "aucun extremum"], "Elle monte, puis descend."),
  tf("Chaque nombre critique donne un maximum ou un minimum relatif.", false, "x³ en 0 est un contre-exemple."),
  num(S`Pour quelle valeur de $x$ la fonction $f(x)=x^2-12x$ a-t-elle un minimum relatif?`, 6, "2x − 12 = 0."),
  num(S`Trouve la valeur du maximum relatif de $f(x)=-x^2+4x+1$.`, 5, "x = 2 : −4 + 8 + 1."),
  num(S`Trouve le maximum absolu de $f(x)=x^2$ sur $[-3,2]$.`, 9, "f(−3) = 9 est plus grand que f(2) = 4."),
  num(S`Trouve le minimum absolu de $f(x)=x^2$ sur $[1,4]$.`, 1, "Croissante sur l'intervalle : f(1)."),
  mc("Sur un intervalle fermé, les candidats aux extremums absolus sont :", "les nombres critiques à l'intérieur de l'intervalle et les extrémités", ["seulement les nombres critiques", "seulement les extrémités", "les zéros de f"], "Compare-les tous."),
  num(S`Trouve le nombre critique de $f(x)=x^2+6x$.`, -3, "2x + 6 = 0."),
  tf(S`$f(x)=x^3$ a un extremum relatif en $x=0$.`, false, "f′ = 3x² ne change pas de signe."),
  num(S`Trouve le maximum absolu de $f(x)=3x-1$ sur $[0,4]$.`, 11, "Droite croissante : f(4)."),
  num("Voici le graphique de f(x) = −x² + 2x + 3. Quelle est sa valeur maximale?", 4, "Le sommet est en x = 1.", graph((x) => -x * x + 2 * x + 3, { xmin: -2, xmax: 4, ymin: -3, ymax: 5 }, [P(1, 4)])),
  fill("La plus grande valeur de f sur tout son intervalle s'appelle le maximum ___.", ["absolu", "global", "absolute"], "Par opposition à relatif."),
  num(S`Trouve le maximum absolu de $f(x)=x^2-2x$ sur $[-1,4]$.`, 8, "f(−1) = 3, f(1) = −1, f(4) = 8."),
  mc(S`En $x=0$, $f(x)=|x|$ a :`, "un minimum relatif (et absolu) où f′ n'existe pas", ["un maximum relatif", "aucun extremum", "une tangente horizontale"], "Un point anguleux."),
  num(S`Trouve la valeur du maximum relatif de $f(x)=x^3-300x$.`, 2000, "x = −10 : −1000 + 3000."),
  tf("Une extrémité d'un intervalle fermé peut être un extremum absolu.", true, "Vérifie toujours les extrémités."),
  num(S`Trouve le minimum absolu de $f(x)=x^2-8x+20$ sur $[0,10]$.`, 4, "x = 4 : 16 − 32 + 20."),
  num("Voici le graphique de f(x) = 2x³ − 24x. Quelle est la valeur de son maximum relatif?", 32, "f′ = 6x² − 24 : maximum en x = −2.", graph((x) => 2 * x ** 3 - 24 * x, { xmin: -4, xmax: 4, ymin: -40, ymax: 40 }, [P(-2, 32), P(2, -32)], { step: { x: 1, y: 10 } })),
  num(S`Combien de nombres critiques $f(x)=x^3+12x$ a-t-elle?`, 0, "3x² + 12 > 0."),
  mc(S`$f$ a un maximum relatif en $c$ et $f'(c)$ existe. Alors :`, S`$f'(c)=0$`, [S`$f'(c)\gt0$`, S`$f'(c)\lt0$`, S`$f''(c)=0$`], "Tangente horizontale à un sommet lisse."),
];

export const M = [
  num(S`Trouve la valeur du minimum relatif de $f(x)=x^3+3x^2-45x$.`, -81, "f′ = 3(x + 5)(x − 3) : minimum en 3."),
  num(S`Trouve le maximum absolu de $f(x)=x^3-147x$ sur $[-8,8]$.`, 686, "f(−8) = 664, f(−7) = 686, f(7) = −686, f(8) = −664."),
  num(S`Trouve le minimum absolu de $f(x)=x^4-32x^2$ sur $[-1,5]$.`, -256, "f(−1) = −31, f(0) = 0, f(4) = −256, f(5) = −175."),
  num(S`Trouve le minimum absolu de $f(x)=x+\frac{25}{x}$ sur $[1,10]$.`, 10, "1 − 25/x² = 0 en x = 5."),
  mc(S`Classe $x=0$ pour $f(x)=x^4$.`, "minimum absolu", ["maximum relatif", "point d'inflexion", "aucun extremum"], "f′ = 4x³ passe de − à +."),
  num(S`Trouve la valeur du minimum relatif de $f(x)=x^2(x-3)$.`, -4, "f′ = 3x² − 6x : minimum en x = 2."),
  num(S`Trouve la valeur du minimum absolu de $f(x)=|x-3|+2$.`, 2, "Au point anguleux x = 3."),
  num("Voici le graphique de f(x) = −x³ + 3x² + 9x. Quelle est la valeur de son maximum relatif?", 27, "f′ = −3(x − 3)(x + 1) : maximum en x = 3.", graph((x) => -(x ** 3) + 3 * x * x + 9 * x, { xmin: -2.5, xmax: 5, ymin: -10, ymax: 32 }, [P(3, 27), P(-1, -5)], { step: { x: 1, y: 5 } })),
  tf("Une fonction continue sur un intervalle fermé a toujours un maximum absolu et un minimum absolu.", true, "Le théorème des valeurs extrêmes."),
  num(S`Trouve le maximum absolu de $f(x)=\frac{x}{x^2+36}$ sur $[0,10]$ (4 décimales).`, 0.0833, "Maximum en x = 6 : 6/72.", null, 0.0005),
  num(S`Trouve le maximum absolu de $f(x)=\sqrt x\,(4-x)$ sur $[0,4]$ (3 décimales).`, 3.079, "f′ = 0 en x = 4/3.", null, 0.001),
  num(S`$f(x)=x^2+ax$ atteint son minimum en $x=3$. Trouve $a$.`, -6, "2(3) + a = 0."),
  mc(S`$f'(x)=(x-2)^2(x+1)$. En $x=2$, $f$ a :`, "ni maximum ni minimum", ["un maximum relatif", "un minimum relatif", "un minimum absolu"], "f′ ≥ 0 des deux côtés de 2."),
  num(S`Trouve le maximum absolu de $f(x)=x^3-9x^2+27x$ sur $[0,4]$.`, 28, "f′ = 3(x − 3)² ≥ 0 : croissante, donc f(4)."),
  num(S`Un profit est $P(x)=-2x^2+80x-300$ dollars. Trouve le profit maximal.`, 500, "x = 20."),
  num("Voici le graphique de g(x) = (x − 1)²(x + 2). Quelle est la valeur de son maximum relatif?", 4, "g′ = 3(x − 1)(x + 1) : maximum en x = −1.", graph((x) => (x - 1) ** 2 * (x + 2), { xmin: -3, xmax: 2.5, ymin: -3, ymax: 6 }, [P(-1, 4), P(1, 0)])),
  num(S`Trouve le maximum absolu de $f(x)=2x^3-3x^2+1$ sur $[-1,2]$.`, 5, "f(−1) = −4, f(0) = 1, f(1) = 0, f(2) = 5."),
  num(S`Trouve la valeur du maximum relatif de $f(x)=\frac{2x}{x^2+4}$.`, 0.5, "En x = 2 : 4/8.", null, 0.0001),
  num(S`Combien d'extremums relatifs $f(x)=x^5-5x^4$ a-t-elle?`, 2, "f′ = 5x³(x − 4)."),
  tf("Une fonction peut atteindre son maximum absolu en deux valeurs de x différentes.", true, "Par exemple x⁴ − 2x² sur [−2, 2], en ±2."),
];
