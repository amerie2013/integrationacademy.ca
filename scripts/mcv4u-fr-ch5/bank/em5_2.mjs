// 5.2 Le logarithme naturel et sa dérivée — 20 questions faciles + 20 moyennes (miroir de ../../mcv4u-ch5/bank/em5_2.mjs)
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const easy = [
  mx(S`Dérive $y=\ln\frac x4$.`, "1/x", "ln x − ln 4; la constante disparaît."),
  num(S`Évalue $e^{\ln6}$.`, 6, "eˣ et ln x s'annulent l'une l'autre."),
  num(S`Quelle est la pente de $y=\ln x$ en $x=4$?`, 0.25, "1/x.", null, 0.0001),
  mx(S`Dérive $y=\ln(x^4)$, $x\gt0$.`, "4/x", "4 ln x."),
  tf(S`$\ln(ab)=\ln a+\ln b$ pour $a,b\gt0$.`, true, "Loi du produit des logarithmes."),
  num(S`Résous $e^x=20$ (4 décimales).`, 2.9957, "x = ln 20.", null, 0.0005),
  mc(S`Que vaut $\frac{d}{dx}\ln x$?`, S`$\frac1x$`, [S`$\ln x$`, S`$e^x$`, S`$\frac1{\ln x}$`], "La fonction inverse 1/x."),
  num(S`Résous $\ln x=2$ (3 décimales).`, 7.389, "x = e².", null, 0.002),
  mx(S`Dérive $y=\ln(x+3)$.`, "1/(x+3)", "Dérivation en chaîne avec une dérivée intérieure de 1."),
  tf(S`$\frac{d}{dx}\ln x=\frac1{\ln x}$.`, false, "Elle vaut 1/x."),
  num("La tangente à y = ln x en x = 2 est tracée. Quelle est sa pente?", 0.5, "1/2.", graph(Math.log, { xmin: -0.5, xmax: 5, ymin: -2.5, ymax: 2.5 }, [P(2, Math.log(2))], { a: 0.05, more: [{ f: (x) => Math.log(2) + (x - 2) / 2, color: "green", a: 0.3, b: 4.5 }], step: { x: 0.5, y: 0.5 } }), 0.0001),
  num(S`Évalue $\ln1$.`, 0, "e⁰ = 1."),
  mx(S`Dérive $y=\ln(4x-1)$.`, "4/(4*x-1)", "Dérivée intérieure 4."),
  mc(S`Quel est le domaine de $y=\ln x$?`, S`$x\gt0$`, [S`$x\ge0$`, "tous les nombres réels x", S`$x\ne0$`], "Seuls les nombres positifs ont un logarithme."),
  num(S`Quelle est la pente de $y=\log_{10}x$ en $x=1$ (4 décimales)?`, 0.4343, "1/ln 10.", null, 0.0005),
  fill(S`$y=\ln x$ et $y=e^x$ sont des fonctions ___ l'une de l'autre.`, ["réciproques", "réciproque", "inverses", "inverse"], "Réflexions l'une de l'autre par rapport à y = x."),
  num(S`Quelle est la pente de $y=\ln x$ en $x=0.2$?`, 5, "1/0.2."),
  tf(S`$y=\ln x$ est croissante sur tout son domaine.`, true, "1/x > 0 pour x > 0."),
  num("Le graphique de y = ln x est illustré. En quel x sa pente vaut-elle 1/3?", 3, "1/x = 1/3.", graph(Math.log, { xmin: -0.5, xmax: 6, ymin: -2.5, ymax: 2.5 }, [P(3, Math.log(3))], { a: 0.05, more: [{ f: (x) => Math.log(3) + (x - 3) / 3, color: "green", a: 0.5, b: 5.8 }], step: { x: 0.5, y: 0.5 } })),
  mx(S`Dérive $y=3\ln x$.`, "3/x", "Multiple constant."),
];
const medium = [
  mx(S`Dérive $y=\ln(x^2+5x)$.`, "(2*x+5)/(x^2+5*x)", "u′/u."),
  mx(S`Dérive $y=\ln\sqrt x$.`, "1/(2*x)", "½ ln x."),
  num(S`Pour $y=\ln(x^2-3)$, trouve $y'(2)$.`, 4, "2x/(x² − 3) = 4/1."),
  mx(S`Dérive $y=x^3\ln x$.`, "3*x^2*ln(x)+x^2", "Règle du produit."),
  mx(S`Dérive $y=\frac{\ln x}{x^2}$.`, "(1-2*ln(x))/x^3", "Règle du quotient, puis simplification par x."),
  num(S`Trouve l'ordonnée à l'origine de la tangente à $y=\ln x$ en $x=4$ (4 décimales).`, 0.3863, "y = ln 4 + (x − 4)/4.", null, 0.0005),
  num(S`Résous $\ln(2x-1)=3$ (4 décimales).`, 10.5428, "2x − 1 = e³.", null, 0.0005),
  mx(S`Dérive $y=\log_3x$.`, "1/(x*ln(3))", "Changement de base : ln x / ln 3."),
  num(S`Pour $y=\ln(5-x)$, trouve $y'(1)$.`, -0.25, "−1/(5 − x).", null, 0.0001),
  tf(S`Pour tout $x\ne0$, $\frac{d}{dx}\ln(x^4)=\frac4x$.`, true, "4x³/x⁴, valable aussi pour x négatif."),
  num("Le graphique de y = x − 2 ln x est illustré. Trouve sa valeur minimale (4 décimales).", 0.6137, "y′ = 1 − 2/x = 0 en x = 2; 2 − 2 ln 2.", graph((x) => x - 2 * Math.log(x), { xmin: -0.5, xmax: 7, ymin: -0.5, ymax: 4 }, [P(2, 2 - 2 * Math.log(2))], { a: 0.1, step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`Pour $y=(\ln x)^3$, trouve $y'(e)$ (4 décimales).`, 1.1036, "3(ln x)²/x = 3/e.", null, 0.0005),
  mc(S`Décris la concavité de $y=\ln x$.`, "concave vers le bas partout", ["concave vers le haut partout", "concave vers le haut pour x > 1", "elle a un point d'inflexion en x = 1"], "y″ = −1/x² < 0."),
  num(S`Pour $y=\ln(\ln x)$, trouve $y'(e)$ (4 décimales).`, 0.3679, "1/(x ln x) = 1/e.", null, 0.0005),
  mx(S`Dérive $y=\ln\left((2x+1)^3\right)$.`, "6/(2*x+1)", "3 ln(2x + 1)."),
  num(S`En quel $x$ la tangente à $y=\ln x$ a-t-elle une pente de 2?`, 0.5, "1/x = 2.", null, 0.0001),
  num(S`Pour $y=\ln(x^2+x+1)$, trouve $y'(1)$.`, 1, "(2x + 1)/(x² + x + 1) = 3/3."),
  num("Le graphique de y = ln(3 − x) est illustré. Quelle est sa pente à l'endroit où il coupe l'axe des x?", -1, "Il coupe l'axe en x = 2; pente −1/(3 − x).", graph((x) => Math.log(3 - x), { xmin: -2, xmax: 3.5, ymin: -2.5, ymax: 2 }, [P(2, 0)], { b: 2.95, more: [{ f: (x) => 2 - x, color: "green", a: 0.8, b: 3.2 }], step: { x: 0.5, y: 0.5 } })),
  mx(S`Dérive $y=\ln(xe^x)$, $x\gt0$.`, "1/x+1", "ln x + x."),
  num(S`Trouve le taux de variation moyen de $y=\ln x$ sur $[1,e]$ (4 décimales).`, 0.582, "1/(e − 1).", null, 0.0005),
];
export { easy as E, medium as M };
