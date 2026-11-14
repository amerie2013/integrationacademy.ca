// 2.2 Expressions équivalentes — 20 questions difficiles (miroir de ../../mth1w-ch2/bank/h2_2.mjs)
import { mc, ms, num, tf, mx } from "../../mth1w-ch2/bank/kit.mjs";
import { algTiles, polyFig, rectFig } from "../../mth1w-ch2/bank/svg2.mjs";

export const TOPIC = "2.2 Expressions équivalentes";
export const Q = [
  mx(String.raw`Quel polynôme faut-il soustraire de $4m^2-2m+7$ pour obtenir $m^2+3m-1$?`, "3*m^2-5*m+8", String.raw`$(4m^2-2m+7)-(m^2+3m-1)=3m^2-5m+8$. Vérification : $4m^2-2m+7-(3m^2-5m+8)=m^2+3m-1$ ✓`),
  num(String.raw`Quel est le degré de $(x^3+2x^2-1)+(-x^3+x-4)$?`, 2, String.raw`Les termes en $x^3$ s'annulent : $2x^2+x-5$.`),
  ms(String.raw`Quels énoncés sont toujours vrais? Choisis toutes les bonnes réponses.`, ["Un polynôme moins lui-même donne 0.", "La somme de deux binômes a deux termes.", "Des termes semblables ont le même coefficient.", "Le degré d'une somme n'est jamais plus grand que le plus grand des deux degrés.", "Un polynôme à une variable de degré 3 a un terme en x³."], [0, 3, 4], String.raw`$(x+1)+(x-1)=2x$ a un seul terme; les termes semblables doivent avoir la même partie variable, pas le même coefficient.`),
  mx(String.raw`Écris une expression simplifiée pour le périmètre du pentagone.`, "7*a+5*b", String.raw`$a$ : $2+1+3+1=7$; $b$ : $1-1+2+3=5$.`, polyFig([[0, 160], [230, 160], [280, 70], [140, 10], [-30, 80]], ["2a + b", "a − b", "3a", "2b", "a + 3b"])),
  mx(String.raw`Un rectangle a un périmètre de $10x+6$ et un côté de $3x+1$. Écris une expression pour l'autre côté.`, "2*x+2", String.raw`La moitié du périmètre est $5x+3$; $5x+3-(3x+1)=2x+2$.`),
  mx(String.raw`Simplifie $(2x^2y-3xy^2+y^3)-(-x^2y+xy^2-2y^3)$.`, "3*x^2*y-4*x*y^2+3*y^3", String.raw`$x^2y$ : $3$; $xy^2$ : $-4$; $y^3$ : $3$.`),
  mc(String.raw`Kim teste $x=0$ et $x=1$ et affirme que $x^3$ et $x$ sont équivalentes. Quelle est la meilleure réponse?`, "Teste x = 2 : 8 ≠ 2, donc elles ne sont pas équivalentes.", ["Elle a raison : deux tests suffisent.", "Teste x = −1 : −1 = −1, donc elle a raison.", "Elles sont équivalentes parce que les deux n'ont qu'un terme."], String.raw`$0$, $1$ et $-1$ concordent tous, mais un seul contre-exemple ($x=2$) réfute l'équivalence.`),
  num(String.raw`Pour quelle valeur de $k$ la somme $(3x^2+kx-4)+(x^2-5x+k)$ n'a-t-elle aucun terme en $x$?`, 5, String.raw`Coefficient de $x$ : $k-5=0$, donc $k=5$. La somme est $4x^2+1$.`),
  mx(String.raw`Simplifie $\left(\frac12x^2-\frac23x+\frac14\right)-\left(\frac14x^2+\frac13x-\frac34\right)$.`, "(1/4)*x^2-x+1", String.raw`$x^2$ : $\frac14$; $x$ : $-\frac23-\frac13=-1$; constantes : $\frac14+\frac34=1$.`),
  num(String.raw`Une planche mesure $(12x+7)$ cm. On en coupe des morceaux de $(3x-2)$ cm et de $(5x+4)$ cm. Quelle est la longueur du morceau restant lorsque $x=6.5$?`, 31, String.raw`$(12x+7)-(8x+2)=4x+5$; $26+5=31$ cm.`),
  mc(String.raw`Quelle expression n'est PAS équivalente aux autres?`, "$6-4x$", ["$3(x-2)+x$", "$2(2x-3)$", "$4(x-1)-2$"], String.raw`Les trois autres se simplifient toutes en $4x-6$.`),
  num(String.raw`Le serveur A gagne $18$ dollars par table et paie $140$ dollars par semaine pour le logement et les repas. Le serveur B gagne $23$ dollars par table et paie $165$ dollars. Chacun sert $t$ tables. Quel est leur revenu net combiné lorsque $t=12$?`, 187, String.raw`$(18t-140)+(23t-165)=41t-305$; $492-305=187$.`),
  mx(String.raw`Un rectangle a des côtés de $x^2+3x$ et de $2x^2-x$. Écris une expression simplifiée pour son périmètre.`, "6*x^2+4*x", String.raw`$2(x^2+3x)+2(2x^2-x)=6x^2+4x$.`, rectFig("2x² − x", "x² + 3x")),
  tf(String.raw`Si deux polynômes ont les mêmes valeurs pour $x=1$, $x=2$ et $x=3$, ils sont forcément équivalents.`, false, String.raw`$(x-1)(x-2)(x-3)$ et $0$ concordent pour ces trois valeurs, mais diffèrent pour $x=4$ ($6\ne0$).`),
  num(String.raw`Quelle est la somme des coefficients (constante comprise) de la forme simplifiée de $(3x^2-5x+2)-(x^2-2x-6)$? (Indice : substitue $x=1$.)`, 7, String.raw`$2x^2-3x+8$; $2-3+8=7$. Ou, pour $x=1$ : $0-(-7)=7$.`),
  ms(String.raw`Quelles paires sont des termes semblables? Choisis toutes les bonnes réponses.`, ["$3x^2y$ et $-yx^2$", "$4ab$ et $4a^2b^2$", "$-m$ et $5m$", "$2xy^2$ et $2x^2y$", "$7$ et $-0.5$"], [0, 2, 4], "Mêmes variables avec les mêmes exposants (les constantes sont des termes semblables)."),
  mx(String.raw`Un triangle a un périmètre de $9x+4$. Deux côtés mesurent $2x+3$ et $4x-1$. Trouve le troisième côté.`, "3*x+2", String.raw`$9x+4-(6x+2)=3x+2$.`),
  num(String.raw`On réunit les tuiles des deux rangées et on retire toutes les paires nulles. Combien de tuiles reste-t-il?`, 6, String.raw`$x^2$ : $3-1=2$; $x$ : $-4+5=1$; unités : $2-5=-3$. $2+1+3=6$ tuiles.`, algTiles([{ x2: 3, x: -4, c: 2 }, { x2: -1, x: 5, c: -5 }])),
  mc(String.raw`Quel est le degré de $(a^2b^3-ab)-(a^2b^3+4a^3)$?`, "3", ["5", "2", "6"], String.raw`Les termes en $a^2b^3$ s'annulent : $-ab-4a^3$; le plus haut degré est $3$.`),
  num(String.raw`Soit $P=2x^2-3x+1$ et $Q=x^2+x-2$. Trouve la valeur de $P-2Q$ lorsque $x=-3$.`, 20, String.raw`$P-2Q=-5x+5$; $15+5=20$.`),
];
