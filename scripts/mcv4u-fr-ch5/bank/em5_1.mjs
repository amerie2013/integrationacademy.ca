// 5.1 Taux de variation et le nombre e — 20 questions faciles + 20 moyennes (miroir de ../../mcv4u-ch5/bank/em5_1.mjs)
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const easy = [
  num(S`Quelle est la pente de $y=e^x$ en $x=3$ (2 décimales)?`, 20.09, "(eˣ)′ = eˣ.", null, 0.01),
  num(S`Évalue $e^0$.`, 1, "Toute base non nulle à la puissance 0."),
  mc(S`Quelle valeur est la plus proche de $e$?`, "2.718", ["3.142", "1.414", "2.236"], "e ≈ 2.71828."),
  tf(S`$\frac{d}{dx}e^x=e^x$.`, true, "Définition de e."),
  num(S`Quelle est la pente de $y=e^x$ en $x=-1$ (4 décimales)?`, 0.3679, "e^(−1).", null, 0.0005),
  mc(S`Quelle fonction a une pente inférieure à 1 en $x=0$?`, S`$y=2^x$`, [S`$y=3^x$`, S`$y=4^x$`, S`$y=10^x$`], "Seulement les bases plus petites que e."),
  num(S`Évalue $\left(1+\frac1{20}\right)^{20}$ (4 décimales).`, 2.6533, "On s'approche de e.", null, 0.0005),
  tf(S`La pente de $y=2^x$ en $x=0$ vaut 1.`, false, "Elle vaut environ 0.693."),
  fill(S`La base dont l'exponentielle a une pente de 1 en $x=0$ est ___.`, ["e"], "La base naturelle."),
  num(S`Donne $e$ à 3 décimales près.`, 2.718, "2.71828…", null, 0.0005),
  num("La tangente à y = eˣ en x = 0.5 est tracée. Quelle est sa pente (4 décimales)?", 1.6487, "e^0.5.", graph(Math.exp, { xmin: -2, xmax: 2, ymin: -0.5, ymax: 6 }, [P(0.5, Math.exp(0.5))], { more: [{ f: (x) => Math.exp(0.5) * (1 + x - 0.5), color: "green", a: -0.8, b: 1.6 }], step: { x: 0.5, y: 1 } }), 0.0005),
  mc(S`La pente de $y=b^x$ est proportionnelle à :`, S`$b^x$`, [S`$x$`, S`$b$`, S`$x^b$`], "Pente = (pente en 0) × hauteur."),
  num(S`Estime la pente de $y=6^x$ en $x=0$ (3 décimales).`, 1.792, "ln 6.", null, 0.002),
  tf(S`$e^x\gt0$ pour tout $x$.`, true, "Les exponentielles sont toujours positives."),
  num(S`Quelle est la pente de $y=7e^x$ en $x=0$?`, 7, "7e⁰."),
  mc(S`Quelle est la pente de $y=e^x$ en $x=\ln3$?`, "3", ["ln 3", "1/3", "e"], "Pente = hauteur = e^(ln 3)."),
  num("Un montant de 250 dollars rapporte 100 % d'intérêt composé de façon continue pendant un an. Que devient-il (2 décimales)?", 679.57, "250e.", null, 0.01),
  num("Le graphique de y = (1/3)ˣ est illustré. Estime sa pente en x = 0 (3 décimales).", -1.099, "−ln 3.", graph((x) => (1 / 3) ** x, { xmin: -2, xmax: 2, ymin: -0.5, ymax: 9 }, [P(0, 1)], { more: [{ f: (x) => 1 - 1.0986 * x, color: "green", a: -1, b: 0.9 }], step: { x: 0.5, y: 1 } }), 0.002),
  tf(S`$e$ est un nombre rationnel.`, false, "Il est irrationnel."),
  num(S`Sur $y=e^x$, quelle est la pente au point où la hauteur vaut 4?`, 4, "La pente est égale à la hauteur."),
];
const medium = [
  num(S`Quelle est la pente de $y=3^x$ en $x=1$ (3 décimales)?`, 3.296, "3 ln 3.", null, 0.002),
  num(S`Évalue $\frac{2^{0.0001}-1}{0.0001}$ (4 décimales).`, 0.6932, "Proche de ln 2.", null, 0.0005),
  num(S`En quel $x$ la fonction $y=e^x$ a-t-elle une pente de 10 (4 décimales)?`, 2.3026, "eˣ = 10.", null, 0.0005),
  num(S`Où la tangente à $y=e^x$ en $x=0$ coupe-t-elle l'axe des x?`, -1, "y = x + 1."),
  num(S`Quelle est la pente de $y=0.5^x$ en $x=1$ (4 décimales)?`, -0.3466, "0.5 · ln 0.5.", null, 0.0005),
  mc(S`La pente de $2^x$ en 0, environ 0.693, est égale à :`, S`$\ln2$`, [S`$\log2$`, S`$\frac12$`, S`$e^2$`], "Logarithme naturel."),
  num(S`Évalue $\lim_{n\to\infty}\left(1+\frac{0.05}n\right)^n$ (4 décimales).`, 1.0513, "e^0.05.", null, 0.0005),
  num(S`Quelle est la pente de $y=e^x$ en $x=\ln7$?`, 7, "Pente = hauteur."),
  tf(S`Toute tangente à $y=e^x$ se trouve sous la courbe.`, true, "La courbe est concave vers le haut."),
  num("Le graphique de y = 4ˣ est illustré. Quelle est sa pente en x = 1 (3 décimales)?", 5.545, "4 ln 4.", graph((x) => 4 ** x, { xmin: -1.5, xmax: 1.6, ymin: -0.5, ymax: 9 }, [P(1, 4)], { more: [{ f: (x) => 4 + 5.545 * (x - 1), color: "green", a: 0.4, b: 1.6 }], step: { x: 0.5, y: 1 } }), 0.002),
  num(S`Trouve le taux de variation moyen de $y=e^x$ sur $[0,1]$ (4 décimales).`, 1.7183, "e − 1.", null, 0.0005),
  mc(S`Lequel est le plus grand?`, S`$e^\pi$`, [S`$\pi^e$`, "ils sont égaux", "cela dépend"], "e^π ≈ 23.14, π^e ≈ 22.46."),
  num(S`Pour quelle base $b$ la pente de $b^x$ en 0 vaut-elle 0.5 (4 décimales)?`, 1.6487, "ln b = 0.5.", null, 0.0005),
  num(S`Trouve l'ordonnée à l'origine de la tangente à $y=e^x$ en $x=3$ (3 décimales).`, -40.171, "y = e³(x − 2).", null, 0.002),
  num(S`Pour $y=1.5^x$, que vaut le rapport pente ÷ hauteur (4 décimales)?`, 0.4055, "ln 1.5.", null, 0.0005),
  tf(S`Si $0\lt b\lt1$, la pente de $b^x$ en 0 est négative.`, true, "La fonction décroît."),
  num(S`Évalue $\left(1+\frac1{500}\right)^{500}$ (4 décimales).`, 2.7156, "Proche de e.", null, 0.0005),
  num("La tangente à y = eˣ en x = −2 est tracée. Trouve son ordonnée à l'origine (3 décimales).", 0.406, "y = e^(−2)(x + 3).", graph(Math.exp, { xmin: -4, xmax: 1, ymin: -0.2, ymax: 2.5 }, [P(-2, Math.exp(-2))], { more: [{ f: (x) => Math.exp(-2) * (x + 3), color: "green", a: -3.5, b: 0.8 }], step: { x: 0.5, y: 0.5 } }), 0.002),
  num(S`Une colonie compte $N(t)=50\cdot3^t$. Trouve son taux de croissance en $t=2$ (2 décimales).`, 494.38, "450 ln 3.", null, 0.01),
  mc(S`Quelle expression s'approche de $e$?`, S`$\left(1+\frac1n\right)^n$`, [S`$1+\frac1n$`, S`$\left(1+\frac1n\right)^{1/n}$`, S`$n^{1/n}$`], "Capitalisation continue."),
];
export { easy as E, medium as M };
