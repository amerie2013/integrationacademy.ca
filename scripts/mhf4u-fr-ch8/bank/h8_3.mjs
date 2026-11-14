// 8.3 Fonctions composées — 20 questions difficiles (miroir de ../../mhf4u-ch8/bank/h8_3.mjs)
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "8.3 Fonctions composées";
export const Q = [
  num(S`$f(x)=x^2-4$, $g(x)=x+2$. Résous $f(g(x))=12$. Entre la racine positive.`, 2, "(x + 2)² = 16 ⇒ x = 2 ou −6."),
  num(S`$f(x)=2x+1$. Détermine $f(f(f(1)))$.`, 15, "3, 7, 15."),
  num(S`$f(x)=\frac{1}{1-x}$. Détermine $f(f(f(5)))$.`, 5, "f(5) = −1/4, f(−1/4) = 4/5, f(4/5) = 5."),
  num(S`$f(x)=ax+3$ et $f(f(x))=4x+9$ avec $a>0$. Détermine $a$.`, 2, "a²x + 3a + 3 ⇒ a² = 4, 3a + 3 = 9."),
  num(S`$f(g(x))=6x-1$ et $f(x)=2x+3$. Détermine $g(5)$.`, 13, "2g(x) + 3 = 6x − 1 ⇒ g(x) = 3x − 2."),
  num(S`$f(x)=\sqrt{x}$ et $g(x)=16-x^2$. Détermine la plus grande valeur de $f(g(x))$.`, 4, "Maximale à x = 0 : √16."),
  num(S`Le rayon d'un cercle est $r(t)=4+0.5t$ cm. Détermine l'aire à $t=6$ s (au dixième près).`, Math.PI * 49, "r = 7, A = 49π.", null, 0.1),
  num(S`Euros : $E(c)=0.7c$ pour $c$ dollars; dollars avec la taxe : $c(p)=1.13p$. Détermine $E(c(200))$.`, 158.2, "0.7 × 226.", null, 0.01),
  mx(S`$f(x)=\dfrac{x-4}{3}$ est la fonction inverse de $g(x)=$ ? (entre $g(x)$)`, "3*x+4", "Résous y = (x − 4)/3 pour x."),
  mc(S`Le domaine de $f(g(x))$ pour $f(x)=\log x$ et $g(x)=x^2-2x-3$ est…`, S`$x<-1$ ou $x>3$`, [S`$-1<x<3$`, S`$x>3$`, S`tous les $x$ réels`], "(x − 3)(x + 1) > 0."),
  mc(S`$f(x)=\frac1x$ et $g(x)=\frac{1}{x-1}$. Le domaine de $f(g(x))$ est…`, S`$x\ne1$`, [S`$x\ne0,1$`, S`$x\ne0$`, S`tous les $x$ réels`], "f(g(x)) = x − 1, mais la fonction intérieure g exige x ≠ 1; g(x) n'est jamais nulle."),
  mc(S`Si $f$ et $g$ sont toutes deux impaires, alors $f\circ g$ est…`, "impaire", ["paire", "ni paire ni impaire", "constante"], "f(g(−x)) = f(−g(x)) = −f(g(x))."),
  ms(S`Choisis chaque énoncé vrai.`, [S`$\log_2(2^x)=x$ pour tous les $x$ réels`, S`$2^{\log_2x}=x$ pour tous les $x$ réels`, S`$(\sqrt x)^2=x$ pour $x\ge0$`, S`$\sqrt{x^2}=x$ pour tous les $x$ réels`], [0, 2], "2^(log₂ x) exige x > 0; √(x²) = |x|."),
  tf(S`Si $f(g(x))=x$ et $g(f(x))=x$ pour chaque $x$ de leurs domaines, alors $f$ et $g$ sont des fonctions inverses l'une de l'autre.`, true, "C'est le test de composition pour les fonctions inverses."),
  tf(S`$\sin(x^2)$ et $(\sin x)^2$ sont la même fonction.`, false, "L'ordre de composition est différent."),
  num(S`$f(x)=x^2$, $g(x)=x-3$. Combien de solutions l'équation $f(g(x))=g(f(x))$ a-t-elle?`, 1, "(x − 3)² = x² − 3 ⇒ −6x + 9 = −3 ⇒ x = 2."),
  mc("Les graphiques de f (en violet) et de g (en bleu) sont illustrés. Détermine f(g(0)).", "3", ["0", "1", "2"], "g(0) = −1, puis f(−1) = 3.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -2, ymax: 5 }, curves: [{ f: (x) => x * x + 2, color: "violet" }], lines: [{ m: 1, b: -1, color: "blue" }], points: [{ x: 0, y: -1, label: "(0, −1)", color: "blue" }, { x: -1, y: 3, label: "(−1, 3)", color: "violet" }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre y = log(9 − x²). Son domaine est…", "−3 < x < 3", ["x > 9", "−9 < x < 9", "x ≥ 0"], "9 − x² > 0.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -2, ymax: 1.5 }, curves: [{ f: (x) => Math.log10(9 - x * x), a: -2.999, b: 2.999, color: "violet" }], step: { x: 1, y: 0.5 } })),
  mc("Le graphique montre y = (x + 1)² − 2 = f(g(x)). Quelles valeurs résolvent f(g(x)) = 7?", "x = 2 ou x = −4", ["x = 3 ou x = −3", "x = 2 seulement", "x = 7"], "(x + 1)² = 9.", planeDoc({ view: { xmin: -6, xmax: 4, ymin: -3, ymax: 10 }, curves: [{ f: (x) => (x + 1) ** 2 - 2, color: "violet" }], lines: [{ m: 0, b: 7, color: "blue", dash: true }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre une fonction f et la droite y = x. Quel graphique donnerait f(f⁻¹(x))?", "la droite y = x (sur le domaine de f⁻¹)", ["une parabole", "le graphique de f", "une droite horizontale"], "Une fonction et sa fonction inverse s'annulent.", planeDoc({ view: { xmin: -3, xmax: 8, ymin: -3, ymax: 8 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], step: { x: 1, y: 1 } })),
];
