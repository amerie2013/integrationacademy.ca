// 1.10 Densité, infini et limite — 20 questions difficiles
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { graph, numberLine } from "./svg.mjs";
import { TITLE } from "../l1_10.mjs";

export const TOPIC = TITLE;
export const Q = [
  mc(String.raw`Quel nombre se trouve strictement entre $\frac79$ et $\frac45$?`, String.raw`$\frac{71}{90}$`, [String.raw`$\frac34$`, String.raw`$\frac56$`, String.raw`$\frac{8}{10}$`], String.raw`$\frac79=\frac{70}{90}$ et $\frac45=\frac{72}{90}$, donc $\frac{71}{90}$ est entre les deux. $\frac8{10}=\frac45$ n'est pas strictement entre.`),
  num(String.raw`Pars de $0$ et avance à répétition de la moitié de la distance qui te sépare de $1$ : $\frac12,\frac34,\frac78,\dots$ Quel est le plus petit nombre de déplacements qui te place à moins de $0.002$ de $1$?`, 9, String.raw`Après $n$ déplacements, l'écart est $\frac{1}{2^n}$. Il faut $2^n>500$ : $2^8=256$ et $2^9=512$, donc $n=9$.`),
  fill(String.raw`Trouve le point milieu de $\frac16$ et de $\frac14$ sous forme de fraction : ___`, ["5/24"], String.raw`$\frac{2}{12}+\frac{3}{12}=\frac{5}{12}$; la moitié est $\frac{5}{24}$.`),
  ms(String.raw`Quels ensembles sont denses (toujours un autre élément entre deux éléments quelconques)? Sélectionne-les tous.`, ["les nombres rationnels", "les nombres entiers", "les nombres réels", "les entiers non négatifs", "les nombres irrationnels"], [0, 2, 4], String.raw`Les entiers et les entiers non négatifs ont des écarts (rien entre $3$ et $4$). Les rationnels, les réels et les irrationnels sont tous denses.`),
  num(String.raw`De quelle valeur les termes de $\dfrac{2n+1}{n}$ s'approchent-ils quand $n$ devient très grand?`, 2, String.raw`$\frac{2n+1}{n}=2+\frac1n$, et $\frac1n\to0$.`),
  num(String.raw`Le graphique montre les premiers termes de la suite $a_n=4-\frac{2}{n}$. Quelle est sa limite?`, 4, String.raw`$\frac2n\to0$, donc $a_n\to4$ (par en dessous).`,
    graph({ series: [{ pts: [1, 2, 3, 4, 5, 6, 7, 8].map((n) => [n, +(4 - 2 / n).toFixed(3)]), join: false }], xmin: 0, xmax: 9, ymin: 0, ymax: 5, xstep: 1, ystep: 1, xlabel: "n", ylabel: "a_n" })),
  tf(String.raw`Il y a une infinité de fractions entre $0.99$ et $1$.`, true, String.raw`On peut prendre des points milieux encore et encore : $0.995$, $0.9975,\dots$`),
  tf(String.raw`$0.\overline{9}<1$`, false, String.raw`$0.\overline{9}=1$ exactement : il n'y a aucun nombre entre les deux.`),
  fill(String.raw`Les sommes $\frac{3}{10}$, $\frac{3}{10}+\frac{3}{100}$, $\frac{3}{10}+\frac{3}{100}+\frac{3}{1000},\dots$ s'approchent de quelle fraction? ___`, ["1/3"], String.raw`Elles valent $0.3$, $0.33$, $0.333,\dots$, qui s'approchent de $0.\overline3=\frac13$.`),
  num(String.raw`La somme $\frac12+\frac14+\frac18+\cdots$ de $n$ termes est égale à $1-\frac{1}{2^n}$. Quel est le plus petit $n$ pour lequel la somme dépasse $0.99$?`, 7, String.raw`Il faut $\frac1{2^n}<0.01$, c.-à-d.\ $2^n>100$ : $2^6=64$, $2^7=128$, donc $n=7$.`),
  mc(String.raw`De quelle valeur $5+\left(-\frac23\right)^n$ s'approche-t-il quand $n$ augmente?`, "$5$", ["$0$", String.raw`$\frac{13}{3}$`, "Il n'a pas de limite, car les termes changent de signe."], String.raw`$\left(-\frac23\right)^n$ change de signe, mais diminue vers $0$; les termes s'approchent donc de $5$.`),
  num(String.raw`Combien de fractions de dénominateur $20$ se trouvent strictement entre $\frac14$ et $\frac35$?`, 6, String.raw`$\frac14=\frac{5}{20}$, $\frac35=\frac{12}{20}$ : numérateurs $6,7,8,9,10,11$.`),
  num(String.raw`Évalue $0.\overline{9}+3\times0.\overline{3}$.`, 2, String.raw`$0.\overline9=1$ et $3\times\frac13=1$. Le total est $2$.`),
  mc(String.raw`Quel point de la droite numérique agrandie pourrait être $0.255$?`, "A", ["B", "C", "D"], String.raw`$0.255$ est à mi-chemin entre $0.25$ et $0.26$.`,
    numberLine({ min: 0.2, max: 0.3, step: 0.01, labelEvery: 5, letters: [{ at: 0.255, label: "A" }, { at: 0.205, label: "B" }, { at: 0.235, label: "C" }, { at: 0.275, label: "D" }] })),
  num(String.raw`On laisse tomber une balle de $10$ m, et chaque rebond atteint la moitié de la hauteur précédente. En mètres, de quelle valeur la distance totale parcourue s'approche-t-elle?`, 30, String.raw`Les hauteurs des rebonds $5+2.5+\cdots$ s'approchent de $10$. Montée et descente donnent $20$ m. En ajoutant la première chute, on obtient $30$ m.`),
  tf(String.raw`Entre deux nombres irrationnels différents, il y a un nombre rationnel.`, true, String.raw`Les rationnels sont denses dans les réels : p.\ ex.\ entre $\sqrt2\approx1.414$ et $\sqrt3\approx1.732$ se trouve $1.5$.`),
  ms(String.raw`Quelles suites s'approchent de $0$? Sélectionne-les toutes.`, [String.raw`$\frac1n$`, String.raw`$\left(-\frac12\right)^n$`, String.raw`$\frac{n}{n+1}$`, String.raw`$\frac{1}{n^2}$`, "$2^n$"], [0, 1, 3], String.raw`$\frac{n}{n+1}\to1$ et $2^n$ croît sans limite.`),
  num(String.raw`Quel est le plus petit entier positif $n$ tel que $\frac1n<0.003$?`, 334, String.raw`$n>\frac{1}{0.003}=333.\overline3$, donc $n=334$.`),
  mc(String.raw`Quel énoncé sur $\frac13$ et $0.333$ est vrai?`, String.raw`$0.333$ est inférieur à $\frac13$ de $\frac{1}{3000}$`, [String.raw`$0.333=\frac13$ exactement`, String.raw`$0.333$ est supérieur à $\frac13$`, String.raw`$0.333$ est inférieur à $\frac13$ de $0.003$`], String.raw`$\frac13-0.333=\frac{1000-999}{3000}=\frac1{3000}$.`),
  num(String.raw`Le graphique montre $a_n=1+\left(-\frac12\right)^n$. Les termes sautent au-dessus et au-dessous d'une valeur. Quelle est la limite?`, 1, String.raw`$\left(-\frac12\right)^n\to0$ en changeant de signe, donc $a_n\to1$.`,
    graph({ series: [{ pts: [1, 2, 3, 4, 5, 6, 7].map((n) => [n, +(1 + (-0.5) ** n).toFixed(4)]) }], xmin: 0, xmax: 8, ymin: 0, ymax: 1.5, xstep: 1, ystep: 0.25, xlabel: "n", ylabel: "a_n" })),
];
