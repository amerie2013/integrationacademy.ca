// 1.1 Ensembles de nombres — 20 questions faciles + 20 moyennes
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, setsDiagram } from "./svg.mjs";

export const E = [
  mc(String.raw`Quel nombre est un nombre naturel?`, "$9$", ["$0$", "$-2$", String.raw`$\frac12$`], "Les nombres naturels sont les nombres qui servent à compter : 1, 2, 3, …"),
  mc(String.raw`Quel nombre est un entier non négatif, mais PAS un nombre naturel?`, "$0$", ["$1$", "$-1$", "$0.5$"], "Les entiers non négatifs comprennent 0; les nombres naturels commencent à 1."),
  tf(String.raw`$-5$ est un nombre entier.`, true, "Les entiers sont les entiers non négatifs et leurs opposés."),
  tf(String.raw`$0.25$ est irrationnel.`, false, String.raw`$0.25=\frac14$, un décimal fini; il est donc rationnel.`),
  mc(String.raw`Quel est le plus petit ensemble qui contient $-10$?`, "les entiers", ["les nombres naturels", "les entiers non négatifs", "les nombres irrationnels"], "Les valeurs entières négatives apparaissent d'abord dans les entiers."),
  ms(String.raw`Quels nombres sont rationnels? Sélectionne-les tous.`, [String.raw`$\frac34$`, "$-6$", "$0.2$", String.raw`$\sqrt5$`, String.raw`$\pi$`], [0, 1, 2], String.raw`$\sqrt5$ et $\pi$ ne peuvent pas s'écrire sous forme de fractions d'entiers.`),
  fill(String.raw`$\sqrt{36}=$ ___`, ["6"], String.raw`$6\times6=36$.`),
  mc(String.raw`Quel nombre est irrationnel?`, String.raw`$\sqrt{11}$`, [String.raw`$\sqrt{9}$`, "$0.5$", String.raw`$\frac13$`], String.raw`$11$ n'est pas un carré parfait, donc $\sqrt{11}$ est irrationnel.`),
  tf("Tout nombre naturel est aussi un entier non négatif.", true, String.raw`$\mathbb{N}\subset\mathbb{W}$.`),
  num(String.raw`Combien de nombres de cette liste sont des entiers? $\ 4,\ -2.5,\ 0,\ -7,\ \frac32,\ 10$`, 4, String.raw`$4,\ 0,\ -7,\ 10$.`),
  mc(String.raw`Le point A se trouve dans la région « Naturels » du diagramme. Quel nombre A pourrait-il être?`, "$12$", ["$-12$", "$1.2$", "$0$"], "Seul un nombre qui sert à compter peut se trouver dans la région des naturels.", setsDiagram([{ set: "N", label: "A" }])),
  fill(String.raw`Écris $0.7$ sous forme de fraction : ___`, ["7/10"], String.raw`Sept dixièmes : $\frac{7}{10}$.`),
  tf(String.raw`$\pi$ est un nombre rationnel.`, false, String.raw`$\pi=3.14159\ldots$ ne se termine jamais et ne se répète jamais.`),
  mc(String.raw`Le décimal périodique $0.555\ldots$ est`, "rationnel", ["irrationnel", "un entier", "un nombre naturel"], String.raw`Les décimaux périodiques sont rationnels : $0.\overline5=\frac59$.`),
  num(String.raw`Évalue $\sqrt{100}$.`, 10, String.raw`$10^2=100$.`),
  ms(String.raw`Quels nombres sont des entiers? Sélectionne-les tous.`, ["$-3$", "$8$", "$0$", "$2.5$", String.raw`$-\frac12$`], [0, 1, 2], "Les entiers n'ont pas de partie fractionnaire."),
  mc("Quel décimal est fini?", "$0.375$", [String.raw`$0.\overline{3}$`, String.raw`$0.1\overline{6}$`, String.raw`$3.14159\ldots$ ($\pi$)`], String.raw`$0.375$ se termine; il vaut $\frac38$.`),
  tf(String.raw`$-\frac12$ est un nombre rationnel.`, true, "Les nombres rationnels peuvent être négatifs."),
  num(String.raw`Évalue $\sqrt{16}+\sqrt{25}$.`, 9, String.raw`$4+5=9$.`),
  mc(String.raw`Quel est le plus petit ensemble qui contient le nombre au point P?`, "les entiers", ["les nombres naturels", "les entiers non négatifs", "les nombres irrationnels"], String.raw`P est à $-3$, un entier négatif.`, numberLine({ min: -5, max: 5, letters: [{ at: -3, label: "P" }] })),
];

export const M = [
  fill(String.raw`Écris $0.\overline{4}$ sous forme de fraction : ___`, ["4/9"], String.raw`$10x-x=4$, $x=\frac49$.`),
  fill(String.raw`Écris $0.125$ sous forme de fraction irréductible : ___`, ["1/8"], String.raw`$\frac{125}{1000}=\frac18$.`),
  mc(String.raw`$\sqrt{\frac{4}{25}}=$`, String.raw`$\frac25$`, [String.raw`$\frac{2}{25}$`, String.raw`$\frac45$`, String.raw`$\frac15$`], String.raw`$\left(\frac25\right)^2=\frac{4}{25}$.`),
  num(String.raw`$\sqrt{50}$ se trouve entre $7$ et quel entier?`, 8, String.raw`$49<50<64$, donc $7<\sqrt{50}<8$.`),
  ms(String.raw`Quels nombres sont des nombres naturels? Sélectionne-les tous.`, ["$5$", "$0$", "$-5$", String.raw`$\sqrt{49}$`, String.raw`$\frac63$`], [0, 3, 4], String.raw`$\sqrt{49}=7$ et $\frac63=2$; $0$ et $-5$ ne sont pas naturels.`),
  tf("Tout entier est un entier non négatif.", false, String.raw`$-3$ est un entier, mais pas un entier non négatif.`),
  mc("Quel nombre se trouve entre 4 et 5?", String.raw`$\sqrt{20}$`, [String.raw`$\sqrt{30}$`, String.raw`$\sqrt{15}$`, String.raw`$\sqrt{26}$`], String.raw`$16<20<25$.`),
  num("Combien y a-t-il de carrés parfaits de 1 à 50 (inclusivement)?", 7, String.raw`$1,4,9,16,25,36,49$.`),
  mc(String.raw`$0.\overline{27}$ écrit sous forme de fraction donne`, String.raw`$\frac{3}{11}$`, [String.raw`$\frac{27}{100}$`, String.raw`$\frac{27}{90}$`, String.raw`$\frac27$`], String.raw`$\frac{27}{99}=\frac{3}{11}$.`),
  tf("Le produit de deux nombres rationnels est toujours rationnel.", true, String.raw`$\frac ab\cdot\frac cd=\frac{ac}{bd}$, toujours un quotient d'entiers.`),
  mc("Quelle liste est dans l'ordre croissant?", String.raw`$-\sqrt4,\ -1.5,\ 0,\ \sqrt2$`, [String.raw`$-1.5,\ -\sqrt4,\ 0,\ \sqrt2$`, String.raw`$0,\ -1.5,\ -\sqrt4,\ \sqrt2$`, String.raw`$-\sqrt4,\ 0,\ -1.5,\ \sqrt2$`], String.raw`$-2<-1.5<0<1.41$.`),
  fill(String.raw`Simplifie : $-\sqrt{64}=$ ___`, ["-8", "−8"], String.raw`$\sqrt{64}=8$, donc $-\sqrt{64}=-8$ (un entier).`),
  num(String.raw`Estime $\sqrt{70}$ au dixième près.`, 8.4, String.raw`$8.4^2=70.56$ et $8.3^2=68.89$; $\sqrt{70}\approx8.37$.`, undefined, 0.05),
  ms("Sélectionne tous les nombres irrationnels de la liste.", [String.raw`$\sqrt3$`, String.raw`$\sqrt{\frac14}$`, String.raw`$0.1010010001\ldots$`, String.raw`$\frac{22}{7}$`, String.raw`$\sqrt{50}$`], [0, 2, 4], String.raw`$\sqrt{\frac14}=\frac12$ et $\frac{22}{7}$ sont rationnels.`),
  mc(String.raw`Quelle lettre indique $\sqrt{12}$?`, "B", ["A", "C", "D"], String.raw`$\sqrt{12}\approx3.46$.`, numberLine({ min: 2, max: 5, step: 0.5, letters: [{ at: 2.8, label: "A" }, { at: 3.46, label: "B" }, { at: 3.9, label: "C" }, { at: 4.25, label: "D" }] })),
  num(String.raw`Évalue exactement $0.\overline{3}+0.\overline{6}$.`, 1, String.raw`$\frac13+\frac23=1$.`),
  tf(String.raw`$1.4142$ est irrationnel.`, false, String.raw`Il se termine; il est donc rationnel (ce n'est qu'une approximation de $\sqrt2$).`),
  mc("Quel énoncé est vrai?", "Tout nombre rationnel est un nombre réel.", ["Tout nombre réel est rationnel.", "Zéro est un nombre naturel.", String.raw`$\sqrt2$ est rationnel.`], String.raw`$\mathbb{Q}\subset\mathbb{R}$.`),
  num(String.raw`Un carré a une aire de $64$ m$^2$. Quelle est la longueur de chaque côté, en mètres?`, 8, String.raw`$\sqrt{64}=8$.`),
  mc(String.raw`Le point B se trouve dans la région « Irrationnels ». Quel nombre B pourrait-il être?`, String.raw`$\sqrt7$`, [String.raw`$\sqrt{49}$`, "$-7$", String.raw`$\frac72$`], String.raw`$7$ n'est pas un carré parfait, donc $\sqrt7$ est irrationnel.`, setsDiagram([{ set: "I", label: "B" }])),
];
