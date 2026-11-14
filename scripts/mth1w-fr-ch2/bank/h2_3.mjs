// 2.3 Simplifier des expressions — 20 questions difficiles (miroir de ../../mth1w-ch2/bank/h2_3.mjs)
import { mc, ms, num, tf, mx } from "../../mth1w-ch2/bank/kit.mjs";
import { areaGrid, rectFig } from "../../mth1w-ch2/bank/svg2.mjs";

export const TOPIC = "2.3 Simplifier des expressions";
export const Q = [
  mx(String.raw`Simplifie $2x(3x^2-x+4)-3x^2(2x-5)+x(x-8)$.`, "14*x^2", String.raw`$6x^3-2x^2+8x-6x^3+15x^2+x^2-8x=14x^2$.`),
  num(String.raw`Trouve $k$ si $3x(x+k)-x(3x-2)=17x$ pour tout $x$.`, 5, String.raw`$3x^2+3kx-3x^2+2x=(3k+2)x$, donc $3k+2=17$, $k=5$.`),
  mc(String.raw`Jo a écrit $8-2(x-3)=6(x-3)=6x-18$. Quelle est la bonne simplification?`, "$14-2x$", ["$6x-18$", "$2-2x$", "$8-2x-6$"], String.raw`Multiplie d'abord : $8-2x+6=14-2x$. Jo a calculé $8-2$ avant de multiplier.`),
  mx(String.raw`Une image de $5x$ cm sur $3x$ cm a un cadre de $3$ cm de largeur tout autour. Découpe le cadre en bandes et écris une expression simplifiée pour son aire.`, "48*x+36", String.raw`Haut et bas : $2\times3(5x+6)=30x+36$. Côtés : $2\times3(3x)=18x$. Total $48x+36$.`, rectFig("5x + 6", "3x + 6", { inner: { pad: 16, label: "5x sur 3x" }, w: 240, h: 130 })),
  num(String.raw`Simplifie $4a(a-b)-b(2a-b)$, puis évalue pour $a=-2$, $b=3$.`, 61, String.raw`$4a^2-6ab+b^2$; $16+36+9=61$.`),
  mx(String.raw`Factorise complètement : $-12x^3+18x^2-6x$.`, "-6*x*(2*x^2-3*x+1)", String.raw`PGFC $-6x$ (ou $6x$) : $-6x(2x^2-3x+1)$.`),
  ms(String.raw`Lesquelles sont bien factorisées? Choisis toutes les bonnes réponses.`, ["$9x^2-6x=3x(3x-2)$", "$4a+8=4(a+8)$", "$5m^2n-10mn^2=5mn(m-2n)$", "$7y+7=7y$", "$2x^3-x^2=x^2(2x-1)$"], [0, 2, 4], String.raw`$4(a+8)=4a+32$; $7y+7=7(y+1)$.`),
  num(String.raw`Un rectangle a une aire de $12x^2+20x$ et une largeur de $4x$. Trouve sa longueur lorsque $x=3$.`, 14, String.raw`Longueur $=\frac{12x^2+20x}{4x}=3x+5=14$.`),
  mx(String.raw`Une boîte mesure $x$ sur $2x$ sur $(x+3)$. Écris son volume sous forme de polynôme.`, "2*x^3+6*x^2", String.raw`$2x^2(x+3)=2x^3+6x^2$.`),
  mc(String.raw`$(-2a^2b)^3=$`, "$-8a^6b^3$", ["$-6a^6b^3$", "$-8a^5b^3$", "$8a^6b^3$"], String.raw`$(-2)^3=-8$, $(a^2)^3=a^6$, $b^3$.`),
  num(String.raw`Un club commande $x$ pizzas à $(2c+3)$ dollars chacune et $3x$ boissons à $c$ dollars chacune. Simplifie le coût total et évalue-le pour $x=20$ et $c=4$.`, 460, String.raw`$x(2c+3)+3xc=5cx+3x$; $400+60=460$.`),
  tf(String.raw`$x(x+1)-x^2$ est impair pour tout nombre entier $x$.`, false, String.raw`L'expression se simplifie en $x$, qui est pair quand $x$ est pair.`),
  mx(String.raw`Un plancher en forme de L est formé d'un rectangle de $2x$ sur $5x$ et d'un rectangle de $x$ sur $(2x+3)$. Écris son aire totale.`, "12*x^2+3*x", String.raw`$10x^2+2x^2+3x=12x^2+3x$.`),
  num(String.raw`Simplifie $\dfrac{6x^3-9x^2}{3x}$, puis évalue pour $x=5$.`, 35, String.raw`Divise chaque terme : $2x^2-3x$; $50-15=35$.`),
  num(String.raw`Quelle est la somme des coefficients (constante comprise) du développement de $-4x(x^2-3x+5)$? (Indice : substitue $x=1$.)`, -12, String.raw`$-4x^3+12x^2-20x$ : $-4+12-20=-12$.`),
  ms(String.raw`Lesquelles sont équivalentes à $6x^2-15x$? Choisis toutes les bonnes réponses.`, ["$3x(2x-5)$", "$3(2x^2-5x)$", "$x(6x-15)$", "$3x(2x-15)$", "$6x(x-15)$"], [0, 1, 2], "Développe chacune pour vérifier; seulement trois donnent 6x² − 15x."),
  mx(String.raw`Simplifie $5(2x-3)-3[x-2(x+1)]$.`, "13*x-9", String.raw`La parenthèse intérieure d'abord : $x-2x-2=-x-2$. Puis $10x-15+3x+6=13x-9$.`),
  num(String.raw`On découpe un carré de côté $x$ dans un coin d'un rectangle de $3x$ sur $(2x+1)$. Trouve le périmètre de la nouvelle figure lorsque $x=4$.`, 42, String.raw`Découper un carré dans un coin enlève deux côtés de longueur $x$, mais ajoute deux nouveaux côtés de longueur $x$ : le périmètre reste $2(3x+2x+1)=10x+2=42$.`),
  mx(String.raw`Trouve le facteur manquant : $2a^2(\ \square\ )=6a^5-4a^3+2a^2$.`, "3*a^3-2*a+1", String.raw`Divise chaque terme par $2a^2$ : $3a^3-2a+1$.`),
  num(String.raw`Complète le modèle d'aire de $-5a(2a^2-3a+1)$. Quelle est la somme des trois cases lorsque $a=-1$?`, 30, String.raw`Cases $-10a^3$, $15a^2$, $-5a$. Pour $a=-1$ : $10+15+5=30$.`, areaGrid("−5a", ["2a²", "−3a", "1"], ["?", "?", "?"])),
];
