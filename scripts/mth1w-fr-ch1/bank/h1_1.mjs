// 1.1 Ensembles de nombres — 20 questions difficiles
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, setsDiagram, rectangle } from "./svg.mjs";
import { TITLE } from "../l1_1.mjs";

export const TOPIC = TITLE;
export const Q = [
  mc(String.raw`Quel nombre appartient à exactement trois des ensembles $\mathbb{N}$, $\mathbb{W}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$?`, "$-12$", ["$0$", String.raw`$\sqrt{3}$`, String.raw`$\frac{2}{3}$`],
    String.raw`$-12$ est dans $\mathbb{Z},\mathbb{Q},\mathbb{R}$ (3 ensembles). $0$ est dans 4, $\frac23$ dans 2, $\sqrt3$ seulement dans $\mathbb{R}$.`),
  num(String.raw`Combien de ces nombres sont rationnels? $\sqrt{0.25}$, $\sqrt{12}$, $0.\overline{142857}$, $\frac{\pi}{2}$, $-\frac{22}{7}$, $\sqrt{\frac{9}{16}}$, $1.2020020002\ldots$, $0$`, 5,
    String.raw`Rationnels : $\sqrt{0.25}=0.5$, $0.\overline{142857}$, $-\frac{22}{7}$, $\sqrt{\frac9{16}}=\frac34$, $0$. Irrationnels : $\sqrt{12}$, $\frac\pi2$, $1.202002\ldots$`),
  fill(String.raw`Écris $0.\overline{36}$ sous forme de fraction irréductible : ___`, ["4/11"], String.raw`$100x-x=36$, $x=\frac{36}{99}=\frac{4}{11}$.`),
  fill(String.raw`Écris $0.4\overline{5}=0.4555\ldots$ sous forme de fraction irréductible : ___`, ["41/90"], String.raw`$100x=45.\overline{5}$ et $10x=4.\overline{5}$; $90x=41$, $x=\frac{41}{90}$.`),
  ms(String.raw`Quels nombres sont irrationnels? Sélectionne-les tous.`, [String.raw`$\sqrt{48}$`, String.raw`$\sqrt{\frac{49}{4}}$`, String.raw`$2+\sqrt{2}$`, String.raw`$\sqrt{2}\times\sqrt{8}$`, String.raw`$3.141414\ldots$ (14 se répète)`], [0, 2],
    String.raw`$\sqrt{48}$ et $2+\sqrt2$ sont irrationnels. $\sqrt{\frac{49}{4}}=\frac72$, $\sqrt2\sqrt8=\sqrt{16}=4$, et un décimal périodique est rationnel.`),
  tf(String.raw`La somme d'un nombre rationnel et d'un nombre irrationnel est toujours irrationnelle.`, true,
    String.raw`Vrai. Si $r+x=q$ avec $r,q$ rationnels, alors $x=q-r$ serait rationnel --- une contradiction.`),
  tf(String.raw`Entre deux entiers consécutifs $n$ et $n+1$, il y a un nombre irrationnel.`, true, String.raw`Vrai : $n+\frac{\sqrt2}{2}$ se trouve entre eux (car $0<\frac{\sqrt2}{2}<1$) et est irrationnel.`),
  mc(String.raw`Quel est le plus petit ensemble qui contient $\dfrac{-\sqrt{64}}{\sqrt{4}}$?`, "les entiers", ["les nombres naturels", "les nombres rationnels (mais pas entiers)", "les nombres irrationnels"], String.raw`$\frac{-8}{2}=-4$, un entier (donc aussi rationnel et réel).`),
  mc(String.raw`Quelle lettre de la droite numérique indique $\sqrt{30}$?`, "B", ["A", "C", "D"], String.raw`$25<30<36$, donc $5<\sqrt{30}<6$; $5.5^2=30.25$, donc $\sqrt{30}\approx5.48$, juste sous $5.5$ : le point B.`,
    numberLine({ min: 4, max: 7, step: 0.5, letters: [{ at: 4.6, label: "A" }, { at: 5.47, label: "B" }, { at: 5.9, label: "C" }, { at: 6.3, label: "D" }] })),
  num(String.raw`Pour combien d'entiers non négatifs $n$ la valeur de $\sqrt{n}$ se trouve-t-elle strictement entre $6$ et $7$?`, 12, String.raw`Il faut $36<n<49$ : $n=37,\dots,48$, soit $12$ nombres.`),
  mc(String.raw`Dans le diagramme, le point C se trouve dans la région « Entiers non négatifs », mais hors de « Naturels ». Quel nombre C pourrait-il être?`, "$0$", ["$1$", "$-1$", String.raw`$\frac12$`], String.raw`Le seul entier non négatif qui n'est pas naturel est $0$.`,
    setsDiagram([{ set: "N", label: "A" }, { set: "Z", label: "B" }, { set: "W", label: "C" }, { set: "I", label: "D" }])),
  num(String.raw`Le développement décimal de $\frac{5}{7}$ est périodique. Combien de chiffres compte sa période?`, 6, String.raw`$\frac57=0.\overline{714285}$ : six chiffres se répètent.`),
  mc(String.raw`Quel énoncé est toujours vrai?`, "Le produit d'un nombre rationnel non nul et d'un nombre irrationnel est irrationnel.", ["Le produit de deux nombres irrationnels est irrationnel.", "La somme de deux nombres irrationnels est irrationnelle.", "La racine carrée d'un nombre rationnel positif est irrationnelle."], String.raw`Si $rx=q$ avec $r\neq0$, alors $x=\frac qr$ serait rationnel. Contre-exemples pour les autres : $\sqrt2\sqrt2=2$, $\sqrt2+(-\sqrt2)=0$, $\sqrt{\frac14}=\frac12$.`),
  fill(String.raw`Évalue $0.\overline{18}+0.\overline{3}$ sous forme de fraction irréductible : ___`, ["17/33"], String.raw`$\frac{18}{99}=\frac{2}{11}$ et $0.\overline3=\frac13$. Puis $\frac{6}{33}+\frac{11}{33}=\frac{17}{33}$.`),
  ms(String.raw`Quels nombres se trouvent strictement entre $3$ et $4$? Sélectionne-les tous.`, [String.raw`$\sqrt{10}$`, String.raw`$\sqrt{17}$`, String.raw`$\frac{22}{7}$`, String.raw`$\pi$`, String.raw`$3.\overline{9}$`], [0, 2, 3],
    String.raw`$\sqrt{10}\approx3.16$, $\frac{22}{7}\approx3.14$, $\pi\approx3.14$. $\sqrt{17}\approx4.12$ et $3.\overline9=4$ ne sont pas strictement entre les deux.`),
  mc(String.raw`$3.2\overline{45}$ est égal à`, String.raw`$\frac{357}{110}$`, [String.raw`$\frac{36}{11}$`, String.raw`$\frac{119}{37}$`, String.raw`$\frac{649}{200}$`], String.raw`$1000x-10x=3245-32=3213$, donc $x=\frac{3213}{990}=\frac{357}{110}$.`),
  fill(String.raw`Écris $1.2\overline{7}=1.2777\ldots$ sous forme de fraction impropre irréductible : ___`, ["23/18"], String.raw`$100x-10x=127.\overline7-12.\overline7=115$, donc $x=\frac{115}{90}=\frac{23}{18}$.`),
  tf(String.raw`$\sqrt{a^2}=a$ pour tout entier $a$.`, false, String.raw`Faux : $a=-3$ donne $\sqrt{9}=3\neq-3$. En général, $\sqrt{a^2}=|a|$.`),
  mc(String.raw`Trouve l'aire du rectangle. Est-elle rationnelle?`, "$12$ m$^2$, rationnelle", ["$26$ m$^2$, rationnelle", String.raw`$\sqrt{26}$ m$^2$, irrationnelle`, String.raw`$\sqrt{144}$ m$^2$, irrationnelle`], String.raw`$\sqrt8\times\sqrt{18}=\sqrt{144}=12$. Les deux côtés sont irrationnels, mais pas l'aire.`, rectangle("√18 m", "√8 m")),
  num(String.raw`Combien d'entiers $n$ vérifient $-\sqrt{50}<n<\sqrt{90}$?`, 17, String.raw`$\sqrt{50}\approx7.07$ et $\sqrt{90}\approx9.49$, donc $n=-7,\dots,9$, soit $17$ entiers.`),
];
