// Fiche 3.2 — problèmes : 3 de connaissance, 5 d'application, 5 problèmes difficiles (à plusieurs parties).
import { codeT, ct, out } from "./codekit.mjs";

const P1 = `for i in range(4, 20, 5):
    print(i, end=" ")`;
const P2 = `total = 0
for k in range(1, 21):
    total = total + k
print(total)`;
const P3 = `temp = -4
if temp < 0:
    print("gel")
elif temp < 15:
    print("frais")
else:
    print("chaud")`;
const P4 = `compteur = 0
for n in range(1, 61):
    if n % 4 == 0 or n % 6 == 0:
        compteur = compteur + 1
print(compteur)`;
const P5 = `bacteries = 50
heures = 0
while bacteries <= 10000:
    bacteries = bacteries * 2
    heures = heures + 1
print(heures, bacteries)`;
const P6 = `def livraison(kg):
    if kg <= 2:
        return 7
    else:
        return 7 + 1.5 * (kg - 2)

print(livraison(1.5), livraison(6))`;
const P8 = `notes = [64, 81, 77, 90, 58]
total = 0
for m in notes:
    total = total + m
print(total / len(notes))`;
const P9 = `ana = 300
ben = 900
semaines = 0
while ana < ben:
    ana = ana + 25
    ben = ben - 35
    semaines = semaines + 1
print(semaines, ana, ben)`;
const P10 = `valeur = 1600
annees = 0
while valeur >= 400:
    valeur = valeur * 0.70
    annees = annees + 1
print(annees, round(valeur, 2))`;
const P10b = P10.replace("0.70", "0.75");
const P11 = `def forfait(go):
    if go <= 5:
        return 30
    elif go <= 10:
        return 30 + 8 * (go - 5)
    else:
        return 70 + 5 * (go - 10)

print(forfait(3), forfait(8), forfait(14))`;
const P12 = `n = 0
t = 0
while t <= 500:
    n = n + 1
    t = t + n
print(n, t)`;
const P13 = `x = 0
while x * x <= 30:
    x = round(x + 0.1, 1)
print(x)`;

export const PROBLEMS = [
  { level: 1, q: String.raw`Qu'affiche ce programme?${codeT(P1)}`, recap: String.raw`${ct("range(4, 20, 5)")}`, ans: ct(out(P1).trim()) },
  { level: 1, q: String.raw`Qu'affiche ce programme? Que calcule-t-il?${codeT(P2)}`, recap: String.raw`Somme de ${ct("range(1, 21)")}.`, ans: String.raw`${ct(out(P2))} : $1+2+\dots+20$` },
  { level: 1, q: String.raw`Qu'affiche ce programme?${codeT(P3)}`, recap: String.raw`if/elif/else avec ${ct("temp = -4")}.`, ans: ct(out(P3)) },
  { level: 2, q: String.raw`Qu'affiche ce programme? Vérifie en comptant les multiples.${codeT(P4)}`, recap: "Multiples de 4 ou de 6 de 1 à 60.", ans: String.raw`${ct(out(P4))} ($15+10-5$)` },
  { level: 2, q: String.raw`Une culture de $50$ bactéries double chaque heure. Qu'affiche ce programme?${codeT(P5)}`, recap: "50 bactéries qui doublent jusqu'à dépasser 10000.", ans: ct(out(P5)) },
  { level: 2, q: String.raw`Qu'affiche ce programme?${codeT(P6)}`, recap: String.raw`${ct("livraison(1.5), livraison(6)")}`, ans: ct(out(P6)) },
  { level: 2, q: String.raw`Écris un programme qui affiche la table de multiplication de $7$, de $7\times1$ à $7\times12$, un produit par ligne.`, recap: "Table de 7 avec une boucle.", ans: String.raw`${ct("for k in range(1, 13): print(7 * k)")}` },
  { level: 2, q: String.raw`Qu'affiche ce programme? Décris son entrée, son traitement et sa sortie.${codeT(P8)}`, recap: "Moyenne d'une liste de notes.", ans: String.raw`${ct(out(P8))}; entrée : les notes; traitement : les additionner, diviser par leur nombre; sortie : la moyenne` },
  { level: 3, space: 5.5,
    q: String.raw`Ana a $300$ \$ et épargne $25$ \$ par semaine. Ben a $900$ \$ et dépense $35$ \$ par semaine.${codeT(P9)}
(a) Prédis la sortie.
(b) Écris et résous une inéquation qui donne le même nombre de semaines.
(c) Modifie le programme pour que Ben dépense $45$ \$ par semaine. Prédis le nouveau nombre de semaines.`,
    recap: "Ana 300 + 25/semaine contre Ben 900 − 35/semaine.",
    ans: String.raw`(a) ${ct(out(P9))} (b) $300+25w\ge900-35w$, $60w\ge600$, $w\ge10$ (c) ${ct(out(P9.replace("35", "45")).split(" ")[0])} semaines ($70w\ge600$, $w\ge8.6$)` },
  { level: 3, space: 5,
    q: String.raw`Un ordinateur portable de $1600$ \$ perd $30\%$ de sa valeur chaque année.${codeT(P10)}
(a) Prédis la sortie. Montre les valeurs année par année.
(b) Modifie le programme pour une perte de $25\%$ par année. Prédis la sortie.
(c) Quelle(s) ligne(s) as-tu changée(s)? Pourquoi est-il utile de ranger le taux dans sa propre variable?`,
    recap: "Ordinateur de 1600 qui perd 30 % (puis 25 %) par année.",
    ans: String.raw`(a) $1120, 784, 548.8, 384.16$ : ${ct(out(P10))} (b) ${ct(out(P10b))} (c) Seulement le multiplicateur; avec ${ct("taux = 0.30")} sur sa propre ligne, une nouvelle situation demande de changer une seule valeur.` },
  { level: 3, space: 5,
    q: String.raw`Un forfait de données coûte $30$ \$ jusqu'à $5$ Go, $8$ \$ par Go de $5$ à $10$ Go, et $5$ \$ par Go au-delà de $10$ Go.${codeT(P11)}
(a) Prédis la sortie.
(b) Explique d'où vient le nombre $70$.
(c) Trace un organigramme pour la fonction.`,
    recap: "Forfait de données à trois paliers.",
    ans: String.raw`(a) ${ct(out(P11))} (b) le coût pour exactement $10$ Go : $30+8(5)=70$ (c) deux décisions : $go\le5$? puis $go\le10$?` },
  { level: 3, space: 5,
    q: String.raw`Les nombres triangulaires sont $1, 3, 6, 10, 15,\dots$ (ajoute $1$, puis $2$, puis $3$, \ldots).${codeT(P12)}
(a) Que représentent les variables ${ct("n")} et ${ct("t")}?
(b) Prédis la sortie.
(c) Vérifie à l'aide de la formule $T=\frac{n(n+1)}{2}$.`,
    recap: "Premier nombre triangulaire supérieur à 500.",
    ans: String.raw`(a) $n$ : le rang; $t$ : le $n$\textsuperscript{e} nombre triangulaire (b) ${ct(out(P12))} (c) $\frac{32(33)}{2}=528>500$ et $\frac{31(32)}{2}=496\le500$` },
  { level: 3, space: 5,
    q: String.raw`Ce programme cherche par bonds de $0.1$.${codeT(P13)}
(a) Que trouve-t-il? Prédis la sortie.
(b) Pourquoi utilise-t-on ${ct("round(..., 1)")}? (Indice : essaie d'additionner $0.1$ dix fois à la main sur une calculatrice qui montre beaucoup de chiffres.)
(c) Modifie le programme pour trouver le plus petit $x$ (au dixième près) tel que $x^2>50$.`,
    recap: String.raw`Plus petit $x$ (bonds de $0.1$) tel que $x^2>30$.`,
    ans: String.raw`(a) ${ct(out(P13))} : $5.4^2=29.16$, $5.5^2=30.25$ (b) les nombres décimaux comme $0.1$ sont rangés de façon inexacte, donc des additions répétées dérivent (p. ex. $0.30000000000000004$) (c) ${ct(out(P13.replace("30", "50")))}` },
];
