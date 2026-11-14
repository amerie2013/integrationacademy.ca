// 2.6 Transformer des formules — 20 questions difficiles (miroir de ../../mth1w-ch2/bank/h2_6.mjs)
import { mc, num, tf, mx } from "../../mth1w-ch2/bank/kit.mjs";
import { polyFig } from "../../mth1w-ch2/bank/svg2.mjs";

export const TOPIC = "2.6 Transformer des formules";
export const Q = [
  mx(String.raw`Isole $a$ dans $A=\frac12h(a+b)$.`, "2*A/h-b", String.raw`$2A=h(a+b)$; $\frac{2A}h=a+b$; $a=\frac{2A}{h}-b$.`, polyFig([[40, 140], [300, 140], [230, 30], [100, 30]], ["b", "", "a", ""])),
  mx(String.raw`Isole $y$ dans $5x-3y=15$.`, "(5*x-15)/3", String.raw`$-3y=15-5x$; $y=\frac{5x-15}{3}=\frac53x-5$.`),
  num(String.raw`L'aire totale d'un cylindre est $S=2\pi r^2+2\pi rh$. Isole $h$, puis trouve $h$ lorsque $S=300\pi$ cm² et $r=10$ cm.`, 5, String.raw`$h=\frac{S-2\pi r^2}{2\pi r}=\frac{300\pi-200\pi}{20\pi}=5$.`),
  mx(String.raw`Isole $x$ dans $ax+b=cx+d$ (suppose que $a\ne c$).`, "(d-b)/(a-c)", String.raw`$ax-cx=d-b$; $x(a-c)=d-b$; $x=\frac{d-b}{a-c}$.`),
  mx(String.raw`Isole $x$ dans $y=\dfrac{2x-3}{5}$.`, "(5*y+3)/2", String.raw`$5y=2x-3$; $x=\frac{5y+3}{2}$.`),
  num(String.raw`Les kelvins et les degrés Fahrenheit sont liés par $K=\frac{F-32}{1.8}+273.15$. Combien vaut $K$ lorsque $F=32$?`, 273.15, String.raw`$\frac{0}{1.8}+273.15$.`, null, 0.001),
  mx(String.raw`Isole $a$ dans $p=2(a+b)-c$.`, "(p+c)/2-b", String.raw`$p+c=2(a+b)$; $\frac{p+c}{2}=a+b$; $a=\frac{p+c}2-b$.`),
  mc(String.raw`Lin a isolé $m$ dans $y=mx+b$ et a écrit $m=y-b-x$. Quelle est la bonne réponse?`, "$m=\\frac{y-b}{x}$", ["$m=y-b-x$", "$m=\\frac yx-b$", "$m=\\frac{y+b}{x}$"], String.raw`$x$ multiplie $m$, donc on divise par $x$ (on ne le soustrait pas).`),
  num(String.raw`La moyenne de quatre notes est $A=\frac{a+b+c+d}{4}$. Isole $d$. Quelle note faut-il, avec $74$, $91$ et $68$, pour obtenir une moyenne de $80$?`, 87, String.raw`$d=4A-a-b-c=320-233=87$.`),
  mx(String.raw`Isole $h$ dans $V=\frac13\pi r^2h$. (Tape pi pour $\pi$.)`, "3*V/(pi*r^2)", String.raw`$3V=\pi r^2h$; $h=\frac{3V}{\pi r^2}$.`),
  num(String.raw`Un taxi demande $C=3.75+1.6d$ dollars. Isole $d$ et trouve la distance pour une course de $27.75$ dollars.`, 15, String.raw`$d=\frac{C-3.75}{1.6}=\frac{24}{1.6}=15$ km.`),
  mc(String.raw`Laquelle est $2x+3y=12$ où l'on a isolé $x$?`, "$x=\\frac{12-3y}{2}$", ["$x=12-\\frac{3y}{2}$", "$x=\\frac{12+3y}{2}$", "$x=6-3y$"], String.raw`$2x=12-3y$, puis divise chaque terme par $2$.`),
  num(String.raw`Quelle est la pente de la droite $3x-4y=20$? Donne un nombre décimal.`, 0.75, String.raw`$-4y=-3x+20$; $y=\frac34x-5$.`, null, 0.001),
  num(String.raw`L'indice de masse corporelle est $B=\frac{m}{h^2}$ ($m$ en kg, $h$ en m). Isole $m$ et trouve $m$ lorsque $B=22$ et $h=1.7$. Arrondis à deux décimales.`, 63.58, String.raw`$m=Bh^2=22(2.89)=63.58$.`, null, 0.006),
  mx(String.raw`Isole $x$ dans $ax+bx=c$.`, "c/(a+b)", String.raw`Factorise : $x(a+b)=c$; $x=\frac{c}{a+b}$.`),
  num(String.raw`Un placement atteint $A=P(1+rt)$. Isole $P$ et trouve le montant placé si $A=1120$ dollars, $r=0.04$ et $t=3$ ans.`, 1000, String.raw`$P=\frac{A}{1+rt}=\frac{1120}{1.12}=1000$.`),
  tf(String.raw`Si $d=vt$, alors $v=\frac td$.`, false, String.raw`$v=\frac dt$.`),
  mx(String.raw`Isole $y$ dans $\frac12(x+y)=z$.`, "2*z-x", String.raw`$x+y=2z$; $y=2z-x$.`),
  num(String.raw`Un trapèze a une aire de $40$ cm², une hauteur de $4$ cm et un côté parallèle de $6$ cm. Quelle est la longueur de l'autre côté parallèle?`, 14, String.raw`$b=\frac{2A}{h}-a=20-6=14$ cm.`),
  mc(String.raw`Quelle formule donne $r$ pour un cercle d'aire $A=\pi r^2$?`, "$r=\\sqrt{\\frac A\\pi}$", ["$r=\\frac{A}{2\\pi}$", "$r=\\frac{\\sqrt A}{\\pi^2}$", "$r=\\frac{A}{\\pi^2}$"], String.raw`$r^2=\frac A\pi$, puis prends la racine carrée.`),
];
