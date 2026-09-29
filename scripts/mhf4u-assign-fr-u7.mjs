// MHF4U-FR Unité 7 — Travaux notés (Taux de variation et combinaison de fonctions).
const r = String.raw;

export const U7 = {
  "7.1": {
    topic: "Taux de variation moyen et instantané",
    K: [
      r`Trouver le taux de variation moyen de $f(x)=x^2-3x$ sur l'intervalle $[1,4]$, et expliquer ce que représente cette valeur sur le graphique.`,
      r`Estimer le taux de variation instantané de $f(x)=x^3$ en $x=2$ à l'aide des intervalles $[2,2.01]$ et $[1.99,2]$.`,
      r`Un tableau donne la distance $d$ (en mètres) parcourue par un chariot après $t$ secondes : $t$ : $0,2,4,6,8$ et $d$ : $0,6,20,42,72$. Trouver le taux de variation moyen sur $[0,4]$ et sur $[4,8]$.`,
    ],
    T: [
      r`Pour $f(x)=x^2+3x$, trouver le taux de variation moyen sur $[1,1+h]$ comme une expression simplifiée en $h$, puis l'évaluer pour $h=1,\ 0.1,\ 0.01$.`,
      r`Le taux de variation moyen d'une fonction sur un intervalle peut-il être $0$ même si la fonction n'est jamais constante ? Donner un exemple et le calculer.`,
    ],
    C: [
      r`Expliquer la différence entre la pente d'une sécante et la pente d'une tangente, et comment le fait de réduire l'intervalle relie les deux.`,
      r`Décrire comment estimer le taux de variation instantané en un point à partir d'un graphique et à partir d'un tableau de valeurs, en indiquant une limite de chaque méthode.`,
    ],
    A: [
      r`La distance d'un cycliste depuis le départ après $t$ secondes est $d(t)=0.5t^2+2t$ mètres. Trouver la vitesse moyenne de $t=2$ à $t=6$, puis estimer la vitesse instantanée à $t=4$ avec l'intervalle $[4,4.1]$.`,
      r`Le nombre de bactéries dans une culture après $t$ heures est $N(t)=200(1.5)^t$. Trouver le taux de variation moyen sur $[4,4.01]$ pour estimer le taux instantané.`,
      r`La température d'une tasse de café suit $T(t)=20+70(0.9)^t$, où $t$ est en minutes. Trouver le taux de variation moyen sur $[0,5]$ et interpréter le signe du résultat.`,
    ],
  },
  "7.2": {
    topic: "Combinaison de fonctions",
    K: [
      r`Pour $f(x)=x^2-x-6$ et $g(x)=x-3$, trouver $(f+g)(x)$, $(f-g)(x)$ et le domaine de chacune.`,
      r`Pour $f(x)=\sqrt{x+3}$ et $g(x)=\dfrac{1}{x-1}$, trouver le domaine de $(f+g)(x)$.`,
      r`Si $(f+g)(x)=3x^2+x$ et $f(x)=x^2$, trouver $g(x)$.`,
    ],
    T: [
      r`Les revenus et les coûts d'une entreprise sont $R(x)=60x-0.5x^2$ et $C(x)=200+12x$. Trouver la fonction de profit $P(x)=R(x)-C(x)$ et expliquer ce que représente chaque terme.`,
      r`Pour $f(x)=\dfrac1x$ et $g(x)=\dfrac1x$, trouver $(fg)(x)$ et son domaine, puis expliquer pourquoi le domaine de $(fg)$ n'est pas plus grand que celui de $f$ ou de $g$ séparément.`,
    ],
    C: [
      r`Expliquer pourquoi le domaine de $(f+g)(x)$ est l'intersection des domaines de $f$ et de $g$, avec un exemple où les deux domaines diffèrent.`,
      r`Décrire pourquoi il faut exclure les zéros du dénominateur en plus des restrictions habituelles quand on forme $\left(\dfrac fg\right)(x)$.`,
    ],
    A: [
      r`Une entreprise a des revenus $A(t)=12\,000+400t$ et une deuxième entreprise a $B(t)=8000+700t$, en dollars après $t$ mois. Trouver $(A-B)(t)$ et expliquer ce que cette fonction représente.`,
      r`Un signal électrique combine deux ondes $f(t)=0.8t+12$ (tendance) et $g(t)=4\sin(2\pi t)$ (oscillation). Trouver $(f+g)(t)$ et décrire le comportement du signal combiné.`,
      r`Le coût total d'un voyage est la somme du coût de l'essence $E(d)=0.12d$ et des frais fixes $F(d)=45$, où $d$ est la distance en km. Trouver $(E+F)(d)$ et évaluer le coût pour $d=300$.`,
    ],
  },
  "7.3": {
    topic: "Composition de fonctions",
    K: [
      r`Pour $f(x)=2x-3$ et $g(x)=x^2+1$, trouver $f(g(x))$, $g(f(x))$, $f(g(2))$ et $g(f(2))$.`,
      r`Trouver le domaine de $f(g(x))$ pour $f(x)=\sqrt x$ et $g(x)=6-2x$.`,
      r`Décomposer chaque fonction sous la forme $f(g(x))$ : (a) $h(x)=(3x-1)^4$ (b) $h(x)=\sqrt{x^2+9}$.`,
    ],
    T: [
      r`Étant donné $f(x)=x+3$, trouver toutes les fonctions linéaires $g(x)=ax+b$ pour lesquelles $f(g(x))=g(f(x))$.`,
      r`Si $g(x)=x+3$ et $f(g(x))=x^2+6x+5$, trouver $f(x)$ en vérifiant la réponse par substitution.`,
    ],
    C: [
      r`Expliquer pourquoi $f(g(x))\ne g(f(x))$ en général, à l'aide d'un exemple précis et en expliquant l'ordre d'application des fonctions.`,
      r`Expliquer comment trouver le domaine d'une fonction composée en deux étapes, avec un exemple où le domaine de $f(g(x))$ est plus restreint que celui de sa forme simplifiée.`,
    ],
    A: [
      r`Au Canada, une taxe de $13\%$ s'ajoute à un prix $p$, donc $t(p)=1.13p$. Un magasin offre aussi un coupon de 10 dollars, donc $c(p)=p-10$. Trouver $t(c(p))$ et $c(t(p))$, puis déterminer lequel est le plus avantageux pour un article à 60 dollars.`,
      r`Le rayon d'une tache d'huile qui s'étend croît selon $r(t)=3t$ centimètres après $t$ secondes, et l'aire d'un cercle est $A(r)=\pi r^2$. Trouver $A(r(t))$ et l'aire après $4$ secondes.`,
      r`La température en degrés Celsius est $C=K-273.15$, et en degrés Fahrenheit $F=1.8C+32$. Écrire $F$ en fonction de $K$ par composition, puis trouver $F$ pour l'eau bouillante à $373.15$ K.`,
    ],
  },
};
