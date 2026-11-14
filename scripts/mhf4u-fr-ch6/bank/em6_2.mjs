// 6.2 Logarithmes — 20 questions faciles + 20 moyennes (miroir de ../../mhf4u-ch6/bank/em6_2.mjs)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const G = (b, pts, view = { xmin: -1, xmax: 17, ymin: -3, ymax: 5 }) => planeDoc({ view, curves: [{ f: lg(b), a: 0.01, color: "violet" }], points: pts, step: { x: 1, y: 1 } });

export const E = [
  num(S`Évalue $\log_2 16$.`, 4, "16 = 2⁴, et un logarithme est l'exposant."),
  num(S`Évalue $\log_3 9$.`, 2, "3² = 9."),
  num(S`Évalue $\log_5 125$.`, 3, "5³ = 125."),
  num(S`Évalue $\log 10\,000$.`, 4, "log signifie la base 10, et 10⁴ = 10 000."),
  num(S`Évalue $\log_7 1$.`, 0, "7⁰ = 1 : le logarithme de 1 vaut 0 pour toute base."),
  num(S`Évalue $\log_6 6$.`, 1, "6¹ = 6."),
  num(S`Évalue $\log_2\frac12$.`, -1, "2⁻¹ = 1/2."),
  num(S`Évalue $\log 0.01$.`, -2, "10⁻² = 0.01."),
  mc(S`Quelle est la forme logarithmique de $3^4=81$?`, S`$\log_3 81=4$`, [S`$\log_4 81=3$`, S`$\log_{81}3=4$`, S`$\log_3 4=81$`], "La base reste la base; l'exposant est la valeur du logarithme."),
  mc(S`Quelle est la forme exponentielle de $\log_2 32=5$?`, S`$2^5=32$`, [S`$5^2=32$`, S`$32^5=2$`, S`$2^{32}=5$`], "log_b x = y signifie bʸ = x."),
  mc(S`Quelle est la forme exponentielle de $\log 1000=3$?`, S`$10^3=1000$`, [S`$3^{10}=1000$`, S`$1000^3=10$`, S`$10^{1000}=3$`], "Aucune base écrite signifie la base 10."),
  tf(S`$\log_2(-8)$ est défini.`, false, "2ʸ est toujours positif; il ne peut donc jamais être égal à −8."),
  tf(S`$\log_b 1=0$ pour toute base $b$ permise.`, true, "b⁰ = 1 pour tout b > 0."),
  tf(S`$\log_4 2=2$.`, false, "4² = 16, et non 2. En fait, 4^(1/2) = 2, donc log₄ 2 = 1/2."),
  fill(S`$\log_3 x=2$ signifie que $x=$ ____.`, ["9"], "3² = 9."),
  fill(S`Un logarithme sans base écrite a la base ____.`, ["10", "dix", "ten"], "log x est le logarithme décimal, en base 10."),
  mc(S`Entre quels deux entiers se trouve $\log 50$?`, "1 et 2", ["0 et 1", "2 et 3", "5 et 6"], "10¹ = 10 < 50 < 100 = 10²."),
  num(S`Évalue $3^{\log_3 8}$.`, 8, "b^(log_b x) = x : le logarithme est l'exposant qui transforme 3 en 8."),
  mc("Le graphique est celui de y = log₂ x. Que vaut log₂ 8, d'après le graphique?", "3", ["4", "2", "8"], "Le point (8, 3) est sur la courbe : 2³ = 8.", G(2, [{ x: 8, y: 3, label: "(8, 3)", color: "blue" }])),
  mc("Le graphique est celui de y = log₂ x. Quel point lui appartient?", "(1/2, −1)", ["(−1, 1/2)", "(2, 4)", "(0, 1)"], "2⁻¹ = 1/2.", G(2, [{ x: 1, y: 0, label: "(1, 0)", color: "amber" }])),
];

export const M = [
  num(S`Évalue $\log_3\frac1{27}$.`, -3, "1/27 = 3⁻³."),
  num(S`Évalue $\log_2\sqrt2$ (en décimale).`, 0.5, "√2 = 2^(1/2).", null, 0.001),
  num(S`Évalue $\log_5\sqrt[3]{25}$ (au millième près).`, 2 / 3, "∛25 = 5^(2/3).", null, 0.002),
  num(S`Évalue $\log_4 8$ (en décimale).`, 1.5, "4^y = 8 ⇒ 2^(2y) = 2³ ⇒ y = 3/2.", null, 0.001),
  num(S`Évalue $\log_9 27$ (en décimale).`, 1.5, "9^y = 27 ⇒ 3^(2y) = 3³ ⇒ y = 3/2.", null, 0.001),
  num(S`Évalue $\log_{1/2}8$.`, -3, "(1/2)^y = 8 ⇒ 2^(−y) = 2³ ⇒ y = −3."),
  num(S`Évalue $\log 0.0001+\log_2 64$.`, 2, "−4 + 6 = 2."),
  num(S`Trouve $x$ si $\log_x 36=2$.`, 6, "x² = 36 avec x > 0."),
  num(S`Trouve $x$ si $\log_2 x=-3$ (en décimale).`, 0.125, "x = 2⁻³ = 1/8.", null, 0.0001),
  num(S`Trouve $x$ si $\log_{x}8=\frac32$.`, 4, "x^(3/2) = 8 ⇒ x = 8^(2/3) = 4."),
  num(S`Évalue $\log 350$ au millième près.`, Math.log10(350), "Calculatrice : log 350 ≈ 2.544, entre 2 et 3.", null, 0.002),
  num(S`Évalue $\log_5 5^{-7}+\log_8 1$.`, -7, "log_b bˣ = x, et log₈ 1 = 0."),
  ms(S`Choisis toutes les expressions égales à $2$.`, [S`$\log_3 9$`, S`$\log 100$`, S`$\log_5 25$`, S`$\log_2 2$`, S`$\log_4 16$`], [0, 1, 2, 4], "Chaque argument est le carré de la base, sauf dans log₂ 2 = 1."),
  ms(S`Choisis tous les logarithmes négatifs.`, [S`$\log_2\frac14$`, S`$\log 0.5$`, S`$\log_3 3$`, S`$\log_{1/2}4$`, S`$\log_5 1$`], [0, 1, 3], "Pour b > 1, les arguments inférieurs à 1 donnent des logarithmes négatifs; pour b < 1, ce sont les arguments supérieurs à 1."),
  mc(S`Quelle valeur est la plus proche de $\log_2 100$?`, "6.6", ["50", "4.6", "10"], "2⁶ = 64 et 2⁷ = 128, donc la valeur est entre 6 et 7."),
  mc(S`Quel énoncé est équivalent à $y=\log_b x$?`, S`$b^y=x$`, [S`$x^y=b$`, S`$y^b=x$`, S`$b^x=y$`], "La définition d'un logarithme."),
  tf(S`$\log_{10}(10^{2.7})=2.7$.`, true, "log_b bˣ = x."),
  tf(S`$\log_3 15$ est entre $2$ et $3$.`, true, "3² = 9 < 15 < 27 = 3³."),
  mc("Le graphique est celui de y = log₃ x. Utilise-le pour estimer log₃ 5.", "environ 1.5", ["environ 0.5", "environ 2.5", "environ 5"], "5 est entre 3 (log 1) et 9 (log 2); la calculatrice donne 1.465.", G(3, [{ x: 3, y: 1, label: "(3, 1)", color: "blue" }, { x: 9, y: 2, label: "(9, 2)", color: "blue" }], { xmin: -1, xmax: 12, ymin: -2, ymax: 3 })),
  mc("Le graphique montre y = log_b x qui passe par (25, 2). Que vaut b?", "5", ["25", "2", "12.5"], "b² = 25 avec b > 0.", G(5, [{ x: 25, y: 2, label: "(25, 2)", color: "blue" }], { xmin: -1, xmax: 30, ymin: -2, ymax: 3 })),
];
