// 8.1 Sommes et différences de fonctions — 20 questions difficiles (miroir de ../../mhf4u-ch8/bank/h8_1.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "8.1 Sommes et différences de fonctions";
export const Q = [
  num(S`$R(x)=30x-0.02x^2$ et $C(x)=6x+4000$. Détermine le profit maximal.`, 3200, "P = −0.02x² + 24x − 4000; sommet à x = 600; P = 3200."),
  num(S`Pour $P(x)=-0.02x^2+24x-4000$, détermine la plus petite quantité correspondant à un seuil de rentabilité (à l'unité près).`, 600 - Math.sqrt(160000), "x² − 1200x + 200 000 = 0 ⇒ x = 600 ± 400.", null, 0.5),
  num(S`Détermine le nombre de zéros de $\cos x+\cos2x$ sur $0\le x\le2\pi$.`, 3, "2c² + c − 1 = 0 ⇒ c = 1/2 ou −1 ⇒ π/3, π, 5π/3."),
  num(S`Détermine le plus petit zéro positif de $\sin x-\sin2x$.`, Math.PI / 3, "sin x(1 − 2cos x) = 0 ⇒ cos x = 1/2.", null, 0.01),
  num(S`$f(x)=\sqrt{x+6}$, $g(x)=\sqrt{10-x}$. Détermine la plus grande valeur de $f+g$ sur son domaine.`, Math.sqrt(32), "Par symétrie, le maximum est à x = 2 : 2√8 ≈ 5.66.", null, 0.01),
  num(S`$h(x)=2^x+2^{-x}$. Détermine $h(3)$.`, 8.125, "8 + 1/8."),
  num(S`Détermine la valeur minimale de $h(x)=x+\frac9x$ pour $x>0$.`, 6, "(√x − 3/√x)² ≥ 0 ⇒ x + 9/x ≥ 6, à x = 3."),
  num(S`$f(x)=\log(x+4)$ et $g(x)=\log(4-x)$. Détermine $(f+g)(0)$ au millième près.`, 2 * Math.log10(4), "2 log 4.", null, 0.002),
  mc(S`Le domaine de $\log(x+4)+\log(4-x)$ est…`, S`$-4<x<4$`, [S`$-4\le x\le4$`, S`$x>-4$`, S`tous les $x$ réels`], "Les deux arguments doivent être positifs."),
  mc(S`$f$ est paire et $g$ est impaire, et aucune des deux n'est nulle. Alors $f+g$ est…`, "ni paire ni impaire, à moins que l'une d'elles soit nulle", ["paire", "impaire", "toujours les deux"], "Paire + impaire ne donne en général ni l'une ni l'autre."),
  mc(S`Toute fonction $h$ peut s'écrire $E+O$, où $E$ est paire et $O$ est impaire. Pour $h(x)=2^x$, $E(x)=$…`, S`$\frac{2^x+2^{-x}}2$`, [S`$\frac{2^x-2^{-x}}2$`, S`$2^{x^2}$`, S`$2^{|x|}$`], "E(x) = (h(x) + h(−x))/2."),
  ms(S`Choisis chaque énoncé vrai pour $h(x)=x^2-2^x$.`, ["h(2) = 0", "h(4) = 0", "h a un zéro négatif", "h(x) > 0 pour tout x > 4"], [0, 1, 2], "Pour x > 4, 2ˣ > x², donc h < 0."),
  tf(S`Si $f$ et $g$ sont toutes deux croissantes, alors $f+g$ est croissante.`, true, "Chaque valeur augmente; leur somme augmente donc."),
  tf(S`Si $f$ et $g$ sont toutes deux croissantes, alors $f-g$ est croissante.`, false, "Exemple : f(x) = x, g(x) = 2x donne f − g = −x."),
  num(S`Le revenu est $R(x)=x(50-0.5x)$ et le coût est $C(x)=10x+200$. Pour quelle valeur de $x$ le profit est-il maximal?`, 40, "P = −0.5x² + 40x − 200; sommet à x = 40."),
  num(S`Pour les mêmes $R$ et $C$, détermine le profit maximal.`, 600, "P(40) = −800 + 1600 − 200."),
  mc("Le graphique montre f (en bleu) et g (en gris). Où a-t-on (f − g)(x) > 0?", "x < −1 ou x > 2", ["−1 < x < 2", "x > 2 seulement", "x < −1 seulement"], "f est au-dessus de g à l'extérieur des points de croisement.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 8 }, curves: [{ f: (x) => x * x, color: "blue" }], lines: [{ m: 1, b: 2, color: "gray" }], points: [{ x: -1, y: 1, label: "(−1, 1)", color: "amber" }, { x: 2, y: 4, label: "(2, 4)", color: "amber" }], step: { x: 1, y: 1 } })),
  mc("La courbe violette est la somme de deux courbes. De quelle paire s'agit-il?", "y = x et y = sin x", ["y = x et y = cos x", "y = 1 et y = sin x", "y = x² et y = sin x"], "La courbe passe par l'origine et ondule autour de y = x.", planeDoc({ view: { xmin: -7, xmax: 7, ymin: -8, ymax: 8 }, curves: [{ f: (x) => x + Math.sin(x), color: "violet" }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre y = sin x + sin 2x sur [0, 2π]. Combien de zéros y a-t-il dans cet intervalle?", "5", ["3", "4", "2"], "0, 2π/3, π, 4π/3, 2π.", planeDoc({ view: { xmin: -0.3, xmax: 6.6, ymin: -2.2, ymax: 2.2 }, curves: [{ f: (x) => Math.sin(x) + Math.sin(2 * x), a: 0, b: 2 * Math.PI, color: "violet" }], step: { x: 0.5, y: 0.5 } })),
  mc("Le graphique montre une fonction profit P = R − C. Entre quelles quantités l'entreprise est-elle rentable?", "environ 58.6 et 341.4", ["0 et 200", "200 et 400", "au-dessus de 341.4"], "P > 0 entre les seuils de rentabilité.", planeDoc({ view: { xmin: -10, xmax: 420, ymin: -1200, ymax: 1300 }, curves: [{ f: (x) => -0.05 * x * x + 20 * x - 1000, color: "violet" }], step: { x: 50, y: 250 } })),
];
