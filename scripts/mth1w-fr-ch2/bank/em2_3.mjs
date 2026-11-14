// 2.3 Simplifier des expressions — 20 questions faciles + 20 moyennes (miroir de ../../mth1w-ch2/bank/em2_3.mjs)
import { mc, ms, num, tf, mx } from "../../mth1w-ch2/bank/kit.mjs";
import { areaGrid } from "../../mth1w-ch2/bank/svg2.mjs";

export const E = [
  mx(String.raw`Développe $3(x+5)$.`, "3*x+15", String.raw`$3x+15$.`),
  mx(String.raw`Développe $-2(y-4)$.`, "-2*y+8", String.raw`$-2y+8$.`),
  mx(String.raw`Simplifie $(3a)(4a)$.`, "12*a^2", String.raw`$12a^2$.`),
  mx(String.raw`Développe $x(x+7)$.`, "x^2+7*x", String.raw`$x^2+7x$.`),
  mx(String.raw`Développe $5(2m-3)$.`, "10*m-15", String.raw`$10m-15$.`),
  mc(String.raw`$4(x+3)=$`, "$4x+12$", ["$4x+3$", "$4x+7$", "$x+12$"], "Multiplie les deux termes par 4."),
  mx(String.raw`Simplifie $(2x^2)(5x^3)$.`, "10*x^5", String.raw`$10x^{2+3}=10x^5$.`),
  tf(String.raw`$-(a-6)=-a+6$`, true, String.raw`Le signe moins change le signe des deux termes.`),
  mx(String.raw`Écris l'expression développée représentée par le modèle d'aire.`, "4*x+8", String.raw`$4x+8$.`, areaGrid("4", ["x", "2"], ["4x", "8"])),
  num(String.raw`Quel est le plus grand facteur commun de $12$ et de $18$?`, 6, String.raw`$6$ divise les deux.`),
  mx(String.raw`Factorise $5x+15$.`, "5*(x+3)", String.raw`PGFC $5$ : $5(x+3)$.`),
  mx(String.raw`Simplifie $2(x+1)+3x$.`, "5*x+2", String.raw`$2x+2+3x$.`),
  mx(String.raw`Simplifie $(-3m)(2n)$.`, "-6*m*n", String.raw`$-6mn$.`),
  mc(String.raw`$x^3\cdot x^4=$`, "$x^7$", ["$x^{12}$", "$2x^7$", "$x$"], "Même base : additionne les exposants."),
  mx(String.raw`Simplifie $6-(x+2)$.`, "4-x", String.raw`$6-x-2=4-x$.`),
  num(String.raw`Évalue $3(2x-1)$ lorsque $x=4$.`, 21, String.raw`$3(7)=21$.`),
  tf(String.raw`$2(3x)=6x$, mais $2(3+x)=6+2x$.`, true, String.raw`Dans le deuxième cas, $2$ multiplie les deux termes.`),
  mx(String.raw`Développe $3a(a-2)$.`, "3*a^2-6*a", String.raw`$3a^2-6a$.`),
  mx(String.raw`Factorise $8y-12$.`, "4*(2*y-3)", String.raw`PGFC $4$.`),
  mc(String.raw`Quel est le PGFC de $6x^2$ et de $9x$?`, "$3x$", ["$3$", "$x$", "$18x^2$"], String.raw`Le PGFC de $6$ et de $9$ est $3$; la plus petite puissance de $x$ est $x$.`),
];

export const M = [
  mx(String.raw`Développe $4x(2x^2-3x+1)$.`, "8*x^3-12*x^2+4*x", String.raw`$8x^3-12x^2+4x$.`),
  mx(String.raw`Développe $-3y^2(y^2-2y+5)$.`, "-3*y^4+6*y^3-15*y^2", String.raw`$-3y^4+6y^3-15y^2$.`),
  mx(String.raw`Simplifie $3(2x-1)-2(x+4)$.`, "4*x-11", String.raw`$6x-3-2x-8$.`),
  mx(String.raw`Simplifie $5a-2(3a-4)$.`, "-a+8", String.raw`$5a-6a+8$.`),
  mx(String.raw`Simplifie $(-2ab^2)(3a^2b)$.`, "-6*a^3*b^3", String.raw`$-6a^3b^3$.`),
  mx(String.raw`Simplifie $(-2x^3)^2$.`, "4*x^6", String.raw`$(-2)^2x^{6}=4x^6$.`),
  mx(String.raw`Simplifie $2x(x-3)+x(4-x)$.`, "x^2-2*x", String.raw`$2x^2-6x+4x-x^2$.`),
  mx(String.raw`Factorise complètement : $6x^3-9x^2+3x$.`, "3*x*(2*x^2-3*x+1)", String.raw`PGFC $3x$.`),
  mx(String.raw`Factorise complètement : $10a^2b-15ab^2$.`, "5*a*b*(2*a-3*b)", String.raw`PGFC $5ab$.`),
  num(String.raw`Simplifie $x(2x+3)-2x^2$, puis évalue pour $x=7$.`, 21, String.raw`$3x$; $21$.`),
  mc(String.raw`Quel produit ce modèle d'aire représente-t-il?`, "$-6x^2+12x$", ["$-6x^2-12x$", "$6x^2+12x$", "$-6x-12x$"], String.raw`$-3x\cdot2x=-6x^2$; $-3x\cdot(-4)=12x$.`, areaGrid("−3x", ["2x", "−4"], ["?", "?"])),
  ms(String.raw`Lesquelles sont équivalentes à $2(3x-6)$? Choisis toutes les bonnes réponses.`, ["$6x-12$", "$6(x-2)$", "$3(2x-4)$", "$6x-6$", "$2\\cdot3x-6$"], [0, 1, 2], String.raw`Les trois se simplifient en $6x-12$.`),
  tf(String.raw`$15-5(x-2)=10(x-2)$`, false, String.raw`Multiplie d'abord : $15-5x+10=25-5x$.`),
  mx(String.raw`Simplifie $7-3(2-y)+y$.`, "1+4*y", String.raw`$7-6+3y+y$.`),
  num(String.raw`On découpe un carré de côté $x$ dans un rectangle de $2x$ sur $(x+4)$. Simplifie l'aire restante, puis évalue-la pour $x=5$.`, 65, String.raw`$2x^2+8x-x^2=x^2+8x$; $25+40=65$.`),
  mx(String.raw`Écris une expression pour l'aire d'un rectangle dont les côtés mesurent $3x$ et $x^2-2x+4$.`, "3*x^3-6*x^2+12*x", String.raw`$3x^3-6x^2+12x$.`),
  mc(String.raw`Trouve le facteur manquant : $\square(3x-2)=12x^2-8x$`, "$4x$", ["$4$", "$4x^2$", "$9x$"], String.raw`$12x^2\div3x=4x$.`),
  num(String.raw`Simplifie $m^2(m-1)-m(m^2-m)$. Quel est le résultat?`, 0, String.raw`$m^3-m^2-m^3+m^2=0$.`),
  mx(String.raw`Simplifie $4(x^2-3)-(x^2-5x+2)$.`, "3*x^2+5*x-14", String.raw`$4x^2-12-x^2+5x-2$.`),
  num(String.raw`Un rectangle a une longueur de $3(x+2)$ et une largeur de $2(x-1)$. Trouve le périmètre lorsque $x=4$.`, 48, String.raw`$2(3x+6+2x-2)=10x+8$; $48$.`),
];
