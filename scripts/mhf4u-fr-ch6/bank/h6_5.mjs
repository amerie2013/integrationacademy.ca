// 6.5 Échelles logarithmiques — 20 questions difficiles (miroir de ../../mhf4u-ch6/bank/h6_5.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;
const scale = (pts, xmin, xmax) => planeDoc({ view: { xmin, xmax, ymin: -1, ymax: 1.5 }, points: pts.map(([x, label, color = "blue"]) => ({ x, y: 0, label, color })), step: { x: 1, y: 1 } });

export const TOPIC = "6.5 Échelles logarithmiques";
export const Q = [
  num(S`Une solution de pH $3.4$ est diluée de sorte que sa $[\text{H}^+]$ est divisée par $20$. Trouve le nouveau pH (au centième près).`, 3.4 + L(20), "Diviser [H⁺] par 20 augmente le pH de log 20 ≈ 1.30.", null, 0.01),
  num(S`Quelle fraction des ions hydrogène faut-il enlever pour faire passer le pH de $4$ à $4.5$? Donne la fraction qui reste (au millième près).`, 10 ** -0.5, "[H⁺] est multipliée par 10^(−0.5) ≈ 0.316.", null, 0.002),
  num(S`Trois machines identiques produisent ensemble $85$ dB. Combien une seule machine produit-elle? (au dixième près)`, 85 - 10 * L(3), "Tripler ajoute 10 log 3 ≈ 4.8 dB, donc une machine produit 80.2 dB.", null, 0.1),
  num(S`Combien de sources identiques de $60$ dB faut-il pour obtenir ensemble $70$ dB?`, 10, "+10 dB signifie 10 fois l'intensité, donc 10 sources."),
  num(S`Un séisme de magnitude $7.8$ libère combien de fois l'intensité de deux séismes de magnitude $6.8$ réunis?`, 5, "Un séisme de 7.8 vaut 10 fois un séisme de 6.8; deux séismes de 6.8 valent 2 fois un séisme de 6.8 : 10/2 = 5."),
  num(S`Il faut réduire un son de $96$ dB à $85$ dB. Par quel facteur faut-il diviser l'intensité? (au dixième près)`, 10 ** 1.1, "10^(11/10) ≈ 12.6.", null, 0.1),
  num(S`Magnitude des étoiles : $m_1-m_2=-2.5\log\frac{b_1}{b_2}$. Combien de fois une étoile de magnitude $-1.5$ est-elle plus brillante qu'une étoile de magnitude $2$? (au dixième près)`, 10 ** (3.5 / 2.5), "b₁/b₂ = 10^(3.5/2.5) = 10^1.4 ≈ 25.1.", null, 0.1),
  num(S`Trouve la magnitude d'un séisme $5000$ fois plus intense qu'un séisme de magnitude $2.5$ (au dixième près).`, 2.5 + L(5000), "2.5 + log 5000 ≈ 6.2.", null, 0.05),
  num(S`Un pH-mètre indique $6.2$. Un deuxième échantillon a $4$ fois la $[\text{H}^+]$. Trouve son pH (au centième près).`, 6.2 - L(4), "Le pH diminue de log 4 ≈ 0.60.", null, 0.01),
  num(S`Sur une échelle où chaque unité est un facteur $2$ (et non $10$), les lectures $3$ et $8$ diffèrent de quel facteur?`, 32, "2^(8 − 3) = 2⁵."),
  mc("Quel changement a le plus grand effet sur l'intensité?", "un séisme qui passe de la magnitude 5 à 7", ["un son qui passe de 60 dB à 70 dB", "un pH qui passe de 6 à 7 (changement de [H⁺])", "un son qui passe de 40 dB à 55 dB"], "Facteurs : 100; 10; 10; ≈ 31.6."),
  mc("L'intensité d'un son diminue de moitié. Son niveau…", "baisse d'environ 3 dB", ["baisse de moitié", "baisse de 10 dB", "baisse de 50 dB"], "10 log ½ ≈ −3.01 dB."),
  tf("Si un séisme est 1000 fois plus intense qu'un autre, leurs magnitudes diffèrent de 3.", true, "log 1000 = 3."),
  tf(S`Un pH de $0$ est impossible parce que le $\log$ d'une concentration n'est jamais $0$.`, false, "Un pH de 0 signifie [H⁺] = 10⁰ = 1 mol/L, ce que les acides très forts atteignent."),
  ms("Choisis toutes les paires dont les intensités diffèrent d'un facteur 100.", ["50 dB et 70 dB", "magnitude 3 et magnitude 5", "pH 4 et pH 6", "40 dB et 42 dB"], [0, 1, 2], "20 dB, 2 magnitudes et 2 unités de pH signifient chacun ×100; 2 dB ne représentent qu'environ 1.6."),
  mc(S`Une échelle logarithmique est définie par $R=\log\frac{A}{A_0}$. Si $A$ double, $R$…`, S`augmente de $\log2\approx0.301$`, ["double", "augmente de 2", "augmente de 1"], "log(2A/A₀) = log 2 + log(A/A₀)."),
  mc("Sur l'échelle illustrée, combien de fois A est-il plus acide que B?", "environ 2000", ["environ 3", "environ 200", "environ 20 000"], "10^(6.4 − 3.1) = 10^3.3 ≈ 1995.", scale([[3.1, "A 3.1", "red"], [6.4, "B 6.4"]], -0.5, 14.5)),
  mc("Sur l'échelle illustrée, le séisme P a une magnitude de 7.5. Le séisme Q est 50 fois moins intense. Où se trouve Q?", "environ 5.8", ["environ 2.5", "environ 7.0", "environ 4.5"], "7.5 − log 50 ≈ 7.5 − 1.70.", scale([[7.5, "P 7.5", "red"], [5.8, "Q ?", "blue"]], 0, 10)),
  mc("Le graphique montre le pH en fonction de [H⁺] (en unités de 10⁻⁵). Quel énoncé est vrai?", "le pH diminue quand [H⁺] augmente, plus rapidement pour les petites valeurs de [H⁺]", ["le pH augmente avec [H⁺]", "le pH est une droite", "le pH est constant"], "pH = −log[H⁺] est une courbe logarithmique décroissante.", planeDoc({ view: { xmin: -0.5, xmax: 10.5, ymin: 3.5, ymax: 6.5 }, curves: [{ f: (x) => -L(x * 1e-5), a: 0.1, color: "violet" }], step: { x: 1, y: 0.5 } })),
  num(S`Un chuchotement fait $30$ dB et un moteur à réaction, $140$ dB. Combien de puissances de $10$ séparent leurs intensités?`, 11, "(140 − 30)/10 = 11.", planeDoc({ view: { xmin: -5, xmax: 150, ymin: -1, ymax: 1.5 }, points: [{ x: 30, y: 0, label: "chuchotement 30", color: "blue" }, { x: 140, y: 0, label: "réacteur 140", color: "red" }], step: { x: 10, y: 1 } })),
];
