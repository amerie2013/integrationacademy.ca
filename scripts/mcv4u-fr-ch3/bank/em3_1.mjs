// 3.1 Fonctions croissantes et décroissantes — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  mc(S`Si $f'(x)\gt0$ pour tout $x$ d'un intervalle, alors sur cet intervalle, $f$ est :`, "croissante", ["décroissante", "constante", "concave vers le haut"], "Des pentes positives montent."),
  tf(S`Si $f'(x)\lt0$ sur un intervalle, $f$ y est décroissante.`, true, "Des pentes négatives descendent."),
  num(S`$f(x)=x^2-16x$ est décroissante pour $x\lt a$. Trouve $a$.`, 8, "f′ = 2x − 16."),
  num(S`$f(x)=x^2+2x$ est croissante pour $x\gt a$. Trouve $a$.`, -1, "f′ = 2x + 2."),
  num(S`Trouve le nombre critique de $f(x)=x^2-10x$.`, 5, "2x − 10 = 0."),
  mc(S`Où $f(x)=3x+1$ est-elle croissante?`, "partout", ["nulle part", "pour x > 0 seulement", "pour x < 0 seulement"], "f′ = 3 > 0."),
  num(S`$f'(x)=x-7$. Pour quelles valeurs de $x$ la fonction $f$ est-elle croissante : $x\gt\,?$`, 7, "f′ > 0."),
  tf(S`$f(x)=-2x+5$ est décroissante partout.`, true, "f′ = −2."),
  fill(S`Un nombre $c$ du domaine tel que $f'(c)=0$ ou que $f'(c)$ n'existe pas s'appelle un nombre ___.`, ["critique", "critical"], "C'est là que le signe de f′ peut changer."),
  num(S`Combien de nombres critiques $f(x)=x^3-75x$ a-t-elle?`, 2, "3x² = 75 : x = ±5."),
  mc(S`$f'(2)=-3$. Près de $x=2$, $f$ est :`, "décroissante", ["croissante", "à un maximum", "constante"], "Pente négative."),
  num("Voici le graphique de f(x) = x² − 6x + 5. f est décroissante pour x < a. Trouve a.", 3, "Le sommet est en x = 3.", graph((x) => x * x - 6 * x + 5, { xmin: -1, xmax: 7, ymin: -5, ymax: 8 }, [P(3, -4)])),
  tf("Une fonction peut être à la fois négative et croissante.", true, "C'est le sens qui compte, pas la hauteur : f(x) = x sur (−5, −1)."),
  num(S`$f(x)=16-x^2$ est croissante pour $x\lt a$. Trouve $a$.`, 0, "f′ = −2x > 0 pour x < 0."),
  mc(S`$f'(x)=(x-1)(x+2)$. Quel est le signe de $f'$ sur $(-2,1)$?`, "négatif", ["positif", "nul", "il change"], "Teste x = 0 : (−1)(2)."),
  num(S`Sur combien d'intervalles $f(x)=x^3$ est-elle décroissante?`, 0, "f′ = 3x² ≥ 0."),
  num(S`$f(x)=2x^2-12x+1$ est décroissante pour $x\lt a$. Trouve $a$.`, 3, "4x − 12 = 0."),
  tf(S`Si $f'(x)=x^2$, alors $f$ ne décroît jamais.`, true, "x² ≥ 0."),
  num("Voici le graphique de f′(x) = 2x − 4. f est croissante pour x > a. Trouve a.", 2, "f′ > 0 à droite de son zéro.", graph((x) => 2 * x - 4, { xmin: -1, xmax: 5, ymin: -5, ymax: 5 }, [P(2, 0)], { more: [] })),
  mc(S`Sur $x\gt0$, $f(x)=\frac1x$ est :`, "décroissante", ["croissante", "constante", "croissante, puis décroissante"], "f′ = −1/x² < 0."),
];

export const M = [
  num(S`$f(x)=x^3-27x+2$ est décroissante sur $(-a,a)$. Trouve $a$.`, 3, "3x² − 27 < 0."),
  num(S`$f(x)=2x^3-24x$ est croissante pour $x\gt a$ (et pour $x\lt-a$). Trouve $a$.`, 2, "6x² − 24 = 0."),
  mc(S`Où $f(x)=x^3+12x^2$ est-elle décroissante?`, S`$(-8,0)$`, [S`$(0,8)$`, S`$(-\infty,-8)$`, S`$(-12,0)$`], "f′ = 3x(x + 8)."),
  num(S`Sur combien d'intervalles distincts $f(x)=x^4-50x^2$ est-elle croissante?`, 2, "f′ = 4x(x − 5)(x + 5) : (−5, 0) et (5, ∞)."),
  num(S`$f(x)=x+\frac1x$ est décroissante sur $(0,b)$. Trouve $b$.`, 1, "1 − 1/x² < 0 ⇔ x² < 1."),
  mc(S`Décris $f(x)=\frac{x}{x+1}$.`, "croissante sur chaque partie de son domaine", ["décroissante sur chaque partie", "croissante, puis décroissante", "constante"], "f′ = 1/(x + 1)² > 0."),
  num(S`$f(x)=x^3-9x^2+15x$ est décroissante sur $(1,b)$. Trouve $b$.`, 5, "f′ = 3(x − 1)(x − 5)."),
  num("Voici le graphique de f′(x) = (x + 2)(x − 1). Pour quelle valeur de x la fonction f passe-t-elle de croissante à décroissante?", -2, "f′ passe de + à − en x = −2.", graph((x) => (x + 2) * (x - 1), { xmin: -4, xmax: 3, ymin: -3, ymax: 5 }, [P(-2, 0), P(1, 0)])),
  num(S`$f(x)=\sqrt x-x$ est décroissante pour $x\gt a$. Trouve $a$.`, 0.25, "1/(2√x) − 1 < 0 ⇔ √x > ½.", null, 0.0001),
  tf(S`Si $f'(x)\ge0$ sur un intervalle et que $f'(x)=0$ seulement en des points isolés, $f$ y est croissante.`, true, "Comme x³ en 0."),
  num(S`$f(x)=x^4-4x$ est décroissante pour $x\lt a$. Trouve $a$.`, 1, "4x³ − 4 < 0."),
  num(S`$f(x)=-x^3+12x$ est croissante sur $(-a,a)$. Trouve $a$.`, 2, "−3x² + 12 > 0."),
  mc(S`Une population est $P(t)=-t^2+10t+50$, $t\ge0$. Quand augmente-t-elle?`, S`$0\le t\lt5$`, [S`$t\gt5$`, S`$0\le t\lt10$`, S`toujours`], "P′ = −2t + 10."),
  num(S`$f(x)=x^2(x-6)$ est décroissante sur $(0,b)$. Trouve $b$.`, 4, "f′ = 3x² − 12x = 3x(x − 4)."),
  num(S`$f(x)=(x-3)^2(x+1)$ est décroissante sur $\left(\tfrac13,b\right)$. Trouve $b$.`, 3, "f′ = (x − 3)(3x − 1)."),
  num("Voici le graphique de f(x) = x³ + 3x² − 9x. f est décroissante sur (a, 1). Trouve a.", -3, "f′ = 3(x + 3)(x − 1).", graph((x) => x ** 3 + 3 * x * x - 9 * x, { xmin: -5, xmax: 3, ymin: -10, ymax: 30 }, [P(-3, 27), P(1, -5)], { step: { x: 1, y: 5 } })),
  mc(S`Où $f(x)=\frac{1}{x^2+1}$ est-elle croissante?`, S`$x\lt0$`, [S`$x\gt0$`, S`partout`, S`nulle part`], "f′ = −2x/(x² + 1)²."),
  num(S`$f(x)=x^5-80x$ est décroissante sur $(-a,a)$. Trouve $a$.`, 2, "5x⁴ = 80."),
  num(S`$f(x)=x^2+kx$ est décroissante exactement pour $x\lt3$. Trouve $k$.`, -6, "f′ = 2x + k = 0 en x = 3."),
  tf(S`Une fonction continue croissante sur $(0,2]$ et sur $[2,4)$ est croissante sur $(0,4)$.`, true, "Les deux parties se raccordent sans chute."),
];
