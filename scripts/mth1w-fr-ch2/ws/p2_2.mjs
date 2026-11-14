// Fiche 2.2 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis. Miroir de ../../mth1w-ch2/ws/p2_2.mjs
import { tiles, polyT } from "../../mth1w-ch2/ws/tikz2.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Classe $4a^3b-2ab+9$ selon son nombre de termes et donne son degré.`, recap: String.raw`Type et degré de $4a^3b-2ab+9$.`, ans: "trinôme, degré $4$" },
  { level: 1, q: String.raw`Simplifie $6x-2-9x+7$.`, ans: "$-3x+5$" },
  { level: 1, q: String.raw`Simplifie $(2y^2+3y)+(5y^2-8y)$.`, ans: "$7y^2-5y$" },
  { level: 2, q: String.raw`Simplifie $3m^2-4mn+2n^2-m^2+7mn-5n^2$.`, ans: "$2m^2+3mn-3n^2$" },
  { level: 2, q: String.raw`Simplifie $(4x^2-3x+7)-(x^2-5x+9)$.`, ans: "$3x^2+2x-2$" },
  { level: 2, q: String.raw`Simplifie $\frac12a+\frac23b-\frac34a+\frac16b$.`, ans: String.raw`$-\frac14a+\frac56b$` },
  { level: 2, q: String.raw`Kim affirme que $4-(x-1)$ est équivalente à $3-x$. Teste avec $x=2$, puis simplifie correctement.`, recap: String.raw`$4-(x-1)$ est-elle équivalente à $3-x$?`, ans: String.raw`Non : $3\ne1$ pour $x=2$; $4-(x-1)=5-x$` },
  { level: 2, q: String.raw`Écris le polynôme représenté par les deux rangées de tuiles réunies, et simplifie-le.
${tiles([{ label: "", x2: 2, x: -3, c: 4 }, { label: "", x2: -1, x: 1, c: -2 }], "")}`, recap: String.raw`Tuiles : $2x^2-3x+4$ et $-x^2+x-2$ réunies.`, ans: "$x^2-2x+2$" },
  { level: 3, space: 4.5,
    q: String.raw`a) Quel polynôme faut-il additionner à $3x^2-5x+2$ pour obtenir $x^2+4x-6$?
b) Quel polynôme faut-il soustraire de $2a^2-ab$ pour obtenir $5a^2+3ab-b^2$?
c) Vérifie chaque réponse en additionnant ou en soustrayant.`,
    recap: "Polynômes manquants : additionner pour obtenir / soustraire pour obtenir.",
    ans: String.raw`a) $-2x^2+9x-8$ b) $-3a^2-4ab+b^2$ c) p. ex. $(3x^2-5x+2)+(-2x^2+9x-8)=x^2+4x-6$ ✓` },
  { level: 3, space: 5,
    q: String.raw`Lena donne des cours particuliers à $18.50$ dollars l'heure et reçoit une allocation de déplacement de $12$ dollars par jour. Omar donne des cours à $21$ dollars l'heure, mais paie $8$ dollars par jour pour le stationnement. Chacun travaille $h$ heures par jour.
a) Écris un polynôme pour le revenu quotidien de chaque personne.
b) Écris un seul polynôme simplifié pour leur revenu quotidien combiné.
c) Trouve le revenu combiné quand chacun travaille $6.5$ heures.
d) Un jour, Lena travaille $7$ h et Omar travaille $5$ h. Peux-tu utiliser b)? Trouve leur revenu combiné ce jour-là.`,
    recap: "Lena 18.50/h + 12; Omar 21/h − 8.",
    ans: String.raw`a) $18.5h+12$; $21h-8$ b) $39.5h+4$ c) $260.75$ dollars d) Non, b) exige le même $h$ : $141.50+97=238.50$ dollars.` },
  { level: 3, space: 4.5,
    q: String.raw`Crée deux trinômes en $x$ dont la somme est
a) un binôme; b) un monôme; c) un trinôme de degré $3$.
Montre l'addition chaque fois.`,
    recap: "Deux trinômes dont la somme est un binôme / un monôme / un trinôme du troisième degré.",
    ans: String.raw`Exemple : a) $(x^2+2x+1)+(-x^2+3x+4)=5x+5$ b) $(x^2+x+1)+(-x^2-x+2)=3$ c) $(x^3+2x+1)+(x^2-2x+3)=x^3+x^2+4$.` },
  { level: 3, space: 5,
    q: String.raw`Indique si chaque énoncé est toujours, parfois ou jamais vrai. Donne un exemple (ou un contre-exemple) pour chacun.
a) La somme de deux binômes est un binôme.
b) La somme de deux polynômes de degré $2$ est de degré $2$.
c) Un polynôme moins lui-même donne $0$.`,
    recap: "Toujours / parfois / jamais : sommes de polynômes.",
    ans: String.raw`a) Parfois : $(x+1)+(x+2)=2x+3$; mais $(x+1)+(x-1)=2x$ b) Parfois : $(x^2+1)+(-x^2+x)=x+1$ est de degré $1$ c) Toujours : chaque terme rencontre son opposé.` },
  { level: 3, space: 5,
    q: String.raw`Une plate-bande a la forme d'un pentagone dont les côtés (en mètres) sont illustrés.
${polyT([[0, 0], [4.4, 0], [5.4, 2.2], [2.2, 3.8], [-0.8, 2]], ["2x-5", "x+4", "3x", "x-1", "2x+3"], "")}
a) Écris une expression simplifiée pour le périmètre.
b) Le périmètre est de $64$ m. Montre que $x=7$ et trouve la longueur de chaque côté.
c) Quelle est la plus petite valeur entière de $x$ qui donne un vrai pentagone (chaque côté positif)?`,
    recap: String.raw`Pentagone de côtés $2x-5$, $x+4$, $3x$, $x-1$, $2x+3$.`,
    ans: String.raw`a) $9x+1$ b) $9(7)+1=64$; côtés de $9, 11, 21, 6, 17$ m c) $2x-5>0$ exige $x>2.5$, donc $x=3$.` },
];
