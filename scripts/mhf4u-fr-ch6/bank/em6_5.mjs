// 6.5 Échelles logarithmiques — 20 questions faciles + 20 moyennes (miroir de ../../mhf4u-ch6/bank/em6_5.mjs)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;
const scale = (pts, xmin, xmax) => planeDoc({ view: { xmin, xmax, ymin: -1, ymax: 1.5 }, points: pts.map(([x, label, color = "blue"]) => ({ x, y: 0, label, color })), step: { x: 1, y: 1 } });

export const E = [
  mc(S`Quelle formule donne le pH?`, S`$\text{pH}=-\log[\text{H}^+]$`, [S`$\text{pH}=\log[\text{H}^+]$`, S`$\text{pH}=10^{-[\text{H}^+]}$`, S`$\text{pH}=\frac1{[\text{H}^+]}$`], "Le signe moins rend le pH positif pour les petites concentrations."),
  num(S`Trouve le pH lorsque $[\text{H}^+]=10^{-3}$ mol/L.`, 3, "−log 10⁻³ = 3."),
  num(S`Trouve le pH lorsque $[\text{H}^+]=10^{-12}$ mol/L.`, 12, "−log 10⁻¹² = 12."),
  mc("Un pH de 7 est…", "neutre", ["acide", "basique", "impossible"], "L'eau pure a un pH de 7."),
  mc("Un pH de 2 est…", "acide", ["neutre", "basique", "impossible"], "Sous 7, c'est acide."),
  num(S`Combien de fois un pH de $3$ est-il plus acide qu'un pH de $4$?`, 10, "Une différence de 1 correspond à un facteur 10."),
  num(S`Combien de fois un pH de $2$ est-il plus acide qu'un pH de $5$?`, 1000, "10³."),
  num(S`Trouve le niveau sonore d'un son $10^{6}$ fois plus intense que le seuil d'audibilité.`, 60, "10 log 10⁶ = 60 dB."),
  num(S`Un son plus fort de $10$ dB est combien de fois plus intense?`, 10, "10^(10/10)."),
  num(S`Un son plus fort de $20$ dB est combien de fois plus intense?`, 100, "10^(20/10)."),
  num(S`Un séisme d'une magnitude de plus est combien de fois plus intense?`, 10, "10¹."),
  num(S`Combien de fois un séisme de magnitude $7$ est-il plus intense qu'un séisme de magnitude $4$?`, 1000, "10³."),
  tf("Sur une échelle logarithmique, des pas égaux correspondent à des rapports égaux.", true, "Chaque pas de 1 multiplie par 10."),
  tf("Un pH de 4 est deux fois plus acide qu'un pH de 8.", false, "Il est 10⁴ = 10 000 fois plus acide."),
  tf("Un pH plus élevé signifie une concentration en ions hydrogène plus élevée.", false, "pH = −log[H⁺] : plus de H⁺ donne un pH plus bas."),
  fill(S`$[\text{H}^+]=10^{-\text{pH}}$ : pour un pH de $6$, $[\text{H}^+]=10^{\square}$. Complète la case.`, ["-6", "−6"], "10^(−pH)."),
  fill(S`Le seuil d'audibilité $I_0$ a un niveau de ____ dB.`, ["0"], "10 log(I₀/I₀) = 10 log 1 = 0."),
  mc("Pourquoi utilise-t-on des échelles logarithmiques?", "les quantités s'étendent sur plusieurs puissances de 10", ["les nombres sont toujours négatifs", "les logarithmes sont toujours des nombres entiers", "elles rendent toute quantité linéaire"], "Prendre le logarithme transforme un immense intervalle en un intervalle court."),
  mc("Sur l'échelle de pH illustrée, quel liquide est le plus acide?", "citron", ["eau", "lait", "savon"], "Le pH le plus bas est le plus acide.", scale([[2.2, "citron"], [6.6, "lait"], [7, "eau", "green"], [10, "savon", "violet"]], -0.5, 14.5)),
  mc("Sur l'échelle illustrée, combien de fois le séisme de 6.0 est-il plus intense que celui de 4.0?", "100", ["2", "20", "1.5"], "10^(6 − 4).", scale([[4, "4.0"], [6, "6.0", "red"]], 0, 10)),
];

export const M = [
  num(S`Trouve le pH lorsque $[\text{H}^+]=2.5\times10^{-4}$ mol/L (au centième près).`, -L(2.5e-4), "−log(2.5 × 10⁻⁴) ≈ 3.60.", null, 0.01),
  num(S`Trouve le pH lorsque $[\text{H}^+]=5.0\times10^{-10}$ mol/L (au centième près).`, -L(5e-10), "≈ 9.30.", null, 0.01),
  num(S`Trouve $[\text{H}^+]$ pour un pH de $4.6$, en unités de $10^{-5}$ mol/L (au centième près).`, 10 ** -4.6 / 1e-5, "10^(−4.6) ≈ 2.51 × 10⁻⁵.", null, 0.02),
  num(S`Combien de fois un pH de $3.2$ est-il plus acide qu'un pH de $5.7$? (au nombre entier près)`, Math.round(10 ** 2.5), "10^2.5 ≈ 316.", null, 1),
  num(S`Trouve le niveau sonore de $I=3\times10^{-6}$ W/m$^2$ ($I_0=10^{-12}$), au dixième près.`, 10 * L(3e6), "10 log(3 × 10⁶) ≈ 64.8 dB.", null, 0.1),
  num(S`Trouve l'intensité d'un son de $80$ dB, en unités de $10^{-4}$ W/m$^2$.`, 1, "I = 10⁻¹² × 10⁸ = 10⁻⁴."),
  num(S`Un son de $72$ dB est combien de fois plus intense qu'un son de $57$ dB? (au dixième près)`, 10 ** 1.5, "10^(15/10).", null, 0.1),
  num(S`Deux séismes ont des magnitudes de $6.1$ et de $4.6$. Combien de fois le premier est-il plus intense? (au dixième près)`, 10 ** 1.5, "10^1.5.", null, 0.1),
  num(S`Un séisme est $200$ fois plus intense qu'un séisme de magnitude $3.9$. Trouve sa magnitude (au dixième près).`, 3.9 + L(200), "3.9 + log 200 ≈ 6.2.", null, 0.05),
  num(S`De combien le niveau sonore augmente-t-il lorsque l'intensité est multipliée par $5$? (au dixième près)`, 10 * L(5), "10 log 5 ≈ 7.0 dB.", null, 0.1),
  mc("La [H⁺] d'un liquide est multipliée par 100. Son pH…", "diminue de 2", ["augmente de 2", "est multiplié par 100", "diminue de 100"], "log 100 = 2, et le signe moins inverse le changement."),
  mc("Deux haut-parleurs identiques produisent chacun 70 dB. Ensemble, ils produisent environ…", "73 dB", ["140 dB", "70 dB", "80 dB"], "Doubler l'intensité ajoute 10 log 2 ≈ 3 dB."),
  ms("Choisis tous les énoncés vrais.", ["un pH de 5 est 100 fois plus acide qu'un pH de 7", "90 dB est 1000 fois plus intense que 60 dB", "une magnitude 8 est deux fois plus intense qu'une magnitude 4", "multiplier [H⁺] par 10 abaisse le pH de 1"], [0, 1, 3], "Une magnitude 8 comparée à une magnitude 4, c'est 10⁴ fois."),
  tf(S`Si $\text{pH}=5.5$, alors $10^{-6}<[\text{H}^+]<10^{-5}$.`, true, "10^(−5.5) est entre 10⁻⁶ et 10⁻⁵."),
  tf("Additionner deux sons de 60 dB donne 120 dB.", false, "Ce sont les intensités qui s'additionnent, pas les décibels : environ 63 dB."),
  mc(S`Quelle concentration a un pH le plus près de $8$?`, S`$1.2\times10^{-8}$`, [S`$8\times10^{-1}$`, S`$1.2\times10^{-7}$`, S`$10^{8}$`], "−log(1.2 × 10⁻⁸) ≈ 7.92."),
  mc("Un son de 0 dB a une intensité de…", S`$I_0=10^{-12}$ W/m$^2$`, ["0 W/m²", S`$1$ W/m$^2$`, S`$10^{12}$ W/m$^2$`], "0 dB est le seuil d'audibilité, et non le silence."),
  mc("Sur l'échelle illustrée, combien de fois le café (5.0) est-il plus acide que l'eau de mer (8.0)?", "1000", ["3", "30", "300"], "10^(8 − 5).", scale([[5, "café 5.0", "amber"], [8, "mer 8.0", "blue"]], -0.5, 14.5)),
  mc("Le graphique montre β = 10 log(I/I₀) en fonction de I/I₀. D'après le graphique, multiplier l'intensité par 10 ajoute…", "10 dB", ["1 dB", "100 dB", "le double des dB"], "Chaque facteur 10 de I/I₀ ajoute 10 dB.", planeDoc({ view: { xmin: -0.5, xmax: 10.5, ymin: -0.5, ymax: 11 }, curves: [{ f: (x) => 10 * L(x), a: 0.01, color: "violet" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "blue" }, { x: 10, y: 10, label: "(10, 10)", color: "blue" }], step: { x: 1, y: 1 } })),
  fill(S`Si $\beta=10\log\frac I{I_0}$, alors $I=I_0\cdot10^{\square}$. Écris l'exposant (p. ex. b/10).`, ["β/10", "b/10", "beta/10", "\\beta/10"], "Divise par 10, puis annule le logarithme."),
];
