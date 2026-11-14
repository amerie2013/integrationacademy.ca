// 1.5 Fractions : multiplication, division et inverses — 20 questions difficiles
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { areaModel, tape } from "./svg.mjs";
import { TITLE } from "../l1_5.mjs";

export const TOPIC = TITLE;
export const Q = [
  mc(String.raw`Quel calcul le modèle d'aire représente-t-il? (Colonnes bleues et rangées jaunes; la partie commune verte est la réponse.)`, String.raw`$\frac35\times\frac23=\frac25$`, [String.raw`$\frac35\times\frac23=\frac58$`, String.raw`$\frac35+\frac23=\frac{19}{15}$`, String.raw`$\frac23\div\frac35=\frac{10}{9}$`],
    String.raw`$3$ colonnes sur $5$ et $2$ rangées sur $3$; la partie commune compte $6$ rectangles sur $15$ $=\frac25$.`, areaModel(3, 5, 2, 3)),
  fill(String.raw`Évalue $-\frac56\div2\frac12\times\frac34$ sous forme de fraction irréductible : ___`, ["-1/4", "−1/4"], String.raw`$-\frac56\times\frac25\times\frac34=-\frac{30}{120}=-\frac14$.`),
  num(String.raw`Combien de bouteilles de $\frac38$ L peut-on remplir avec $5\frac14$ L de jus?`, 14, String.raw`$\frac{21}{4}\div\frac38=\frac{21}{4}\times\frac83=14$.`),
  ms(String.raw`Quelles paires sont formées de deux nombres inverses l'un de l'autre? Sélectionne-les toutes.`, [String.raw`$-\frac23$ et $-\frac32$`, "$0.25$ et $4$", String.raw`$1\frac13$ et $\frac34$`, String.raw`$-5$ et $\frac15$`, String.raw`$0.6$ et $1\frac23$`], [0, 1, 2, 4], String.raw`Le produit de deux inverses est $+1$. $-5\times\frac15=-1$; cette paire ne convient donc pas (l'inverse de $-5$ est $-\frac15$).`),
  num(String.raw`Ana dépense le $\frac13$ de son argent, puis le $\frac14$ de ce qui reste, puis la $\frac12$ de ce qui reste ensuite. Il lui reste $45$ dollars. Combien de dollars avait-elle au départ?`, 180, String.raw`Fraction qui reste : $\frac23\times\frac34\times\frac12=\frac14$. Elle avait donc $4\times45=180$ dollars au départ.`),
  mc(String.raw`Évalue $2+\dfrac{1}{1+\dfrac13}$.`, String.raw`$\frac{11}{4}$`, [String.raw`$\frac73$`, String.raw`$\frac{10}{3}$`, String.raw`$\frac52$`], String.raw`$1+\frac13=\frac43$; son inverse est $\frac34$; $2+\frac34=\frac{11}{4}$.`),
  fill(String.raw`Évalue $\left(\frac12-\frac23\right)\div\left(-\frac59\right)$ sous forme de fraction irréductible : ___`, ["3/10"], String.raw`$-\frac16\times\left(-\frac95\right)=\frac{9}{30}=\frac{3}{10}$.`),
  fill(String.raw`Une recette de $24$ biscuits demande $1\frac34$ tasse de sucre. Combien de tasses faut-il pour $40$ biscuits? ___`, ["35/12", "2 11/12"], String.raw`$\frac74\times\frac{40}{24}=\frac74\times\frac53=\frac{35}{12}=2\frac{11}{12}$.`),
  tf(String.raw`Si $0<x<1$, alors $\frac1x>1$.`, true, String.raw`Par exemple, $x=\frac14$ donne $\frac1x=4$. Diviser $1$ par un nombre positif inférieur à $1$ donne plus que $1$.`),
  tf(String.raw`Pour tout nombre positif $x$, $x\div\frac12<x$.`, false, String.raw`$x\div\frac12=2x>x$.`),
  num(String.raw`Une planche de $6$ m est coupée en morceaux de $\frac23$ m, et le $\frac13$ des morceaux est peint (en ombré). Combien de morceaux sont peints?`, 3,
    String.raw`$6\div\frac23=9$ morceaux; $\frac13\times9=3$.`, tape([{ n: 3, label: "peints", color: "amber" }, { n: 6, label: "non peints", color: "blue" }], { unit: 48, total: "6 m en morceaux de 2/3 m" })),
  mc(String.raw`Un rectangle mesure $3\frac12$ m sur $2\frac27$ m. Quelle est son aire?`, "$8$ m$^2$", [String.raw`$6\frac17$ m$^2$`, String.raw`$5\frac{11}{14}$ m$^2$`, String.raw`$6\frac27$ m$^2$`], String.raw`$\frac72\times\frac{16}{7}=8$. ($6\frac17$ vient de la multiplication séparée des entiers et des parties; $5\frac{11}{14}$ est la somme.)`),
  num(String.raw`Jake lit le $\frac14$ d'un livre lundi et le $\frac13$ des pages qui restent mardi. Il reste $120$ pages. Combien de pages le livre compte-t-il?`, 240, String.raw`Après lundi, il reste les $\frac34$; mardi, il lit $\frac13\times\frac34=\frac14$; il reste la $\frac12$ du livre $=120$, donc $240$ pages.`),
  fill(String.raw`Écris l'inverse de $-2\frac37$ : ___`, ["-7/17", "−7/17"], String.raw`$-2\frac37=-\frac{17}{7}$, inverse $-\frac{7}{17}$.`),
  ms(String.raw`Quelles expressions sont égales à $-1$? Sélectionne-les toutes.`, [String.raw`$-\frac34\times\frac43$`, String.raw`$-\frac34\div\frac34$`, String.raw`$-\frac34\div\left(-\frac34\right)$`, String.raw`$\frac12\div\left(-\frac12\right)$`, String.raw`$-\frac25\times\left(-\frac52\right)$`], [0, 1, 3], String.raw`La troisième et la cinquième ont deux facteurs de même signe; elles valent donc $+1$.`),
  num(String.raw`Mia marche $2\frac14$ km en $\frac34$ d'heure. À la même vitesse, combien de minutes lui faut-il pour marcher $5\frac14$ km?`, 105, String.raw`Vitesse : $\frac94\div\frac34=3$ km/h. Temps : $\frac{21}{4}\div3=\frac74$ h $=105$ min.`),
  mc(String.raw`Évalue $\left[\frac23\div\left(-\frac49\right)\right]\times\left(1\frac35-2\right)$.`, String.raw`$\frac35$`, [String.raw`$-\frac35$`, String.raw`$\frac{12}{5}$`, String.raw`$\frac53$`], String.raw`$\frac23\times\left(-\frac94\right)=-\frac32$, et $\frac85-2=-\frac25$. Le produit est $\frac35$.`),
  num(String.raw`Les $\frac35$ d'une classe sont des filles, et les $\frac23$ des filles jouent au soccer. Si $12$ filles jouent au soccer, combien d'élèves la classe compte-t-elle?`, 30, String.raw`Les filles qui jouent au soccer représentent $\frac23\times\frac35=\frac25$ de la classe : $\frac25c=12$, $c=30$.`),
  tf(String.raw`Le produit de deux fractions comprises entre $0$ et $1$ est inférieur à chacune d'elles.`, true, String.raw`Multiplier par un nombre inférieur à $1$ rend un nombre positif plus petit, p.\ ex.\ $\frac12\times\frac13=\frac16$.`),
  num(String.raw`Quelle fraction du carré est verte? Donne un décimal.`, 0.5, String.raw`$\frac23\times\frac34=\frac{6}{12}=0.5$.`, areaModel(2, 3, 3, 4), 0.001),
];
