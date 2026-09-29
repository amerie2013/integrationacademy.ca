// MHF4U-FR Unité 4 — Travaux notés (Fonctions exponentielles et logarithmiques).
const r = String.raw;

export const U4 = {
  "4.1": {
    topic: "Logarithmes et lois des logarithmes",
    K: [
      r`Évaluer (a) $\log_2 32$ (b) $\log_3\tfrac19$ (c) $\log_5 0.04$.`,
      r`Simplifier $\log_6 4+\log_6 9$ à l'aide des lois des logarithmes.`,
      r`Simplifier $2\log_3 6-\log_3 4$.`,
    ],
    T: [
      r`Montrer que $\log_2(x^2)=2\log_2 x$ pour $x>0$, puis expliquer pourquoi cette égalité échoue si on ne précise pas $x>0$.`,
      r`Si $\log_2 a=p$ et $\log_2 b=q$, exprimer $\log_2\left(\dfrac{a^3\sqrt b}{4}\right)$ en fonction de $p$ et $q$.`,
    ],
    C: [
      r`Expliquer pourquoi $\log_b 1=0$ et $\log_b b=1$ pour toute base valide $b$, en utilisant la définition du logarithme.`,
      r`Décrire comment la loi du produit, la loi du quotient et la loi de la puissance permettent de simplifier une expression logarithmique complexe, avec un exemple.`,
    ],
    A: [
      r`L'intensité sonore en décibels est $L=10\log\dfrac{I}{I_0}$, où $I_0=10^{-12}$ W/m². Trouver $L$ si $I=10^{-6}$ W/m².`,
      r`La magnitude apparente de deux étoiles satisfait $m_2-m_1=-2.5\log\dfrac{b_2}{b_1}$. Si $m_2-m_1=-1.46$, trouver le rapport $\dfrac{b_2}{b_1}$.`,
      r`Un fichier numérique a $2^{128}$ combinaisons possibles. Utiliser un logarithme pour estimer $\log 2^{128}$ et expliquer ce que ce nombre représente.`,
    ],
  },
  "4.2": {
    topic: "Graphiques des fonctions logarithmiques",
    K: [
      r`Pour $y=-\log_3(x+1)+2$, donner le domaine, l'image, l'asymptote verticale, l'abscisse et l'ordonnée à l'origine.`,
      r`Trouver l'inverse de $f(x)=5^x-3$ et donner son domaine, son image et son asymptote.`,
      r`Décrire les transformations qui envoient $y=\log_3 x$ sur $y=-2\log_3(x-1)+4$.`,
    ],
    T: [
      r`Une fonction logarithmique transformée $y=a\log_2(x-h)+k$ a une asymptote verticale en $x=-1$ et passe par $(0,3)$ et $(7,9)$. Déterminer $a$, $h$ et $k$.`,
      r`Comparer les graphiques de $y=\log(x^2)$ et $y=2\log x$ : donner le domaine et l'image de chacun, et expliquer pourquoi ce ne sont pas la même fonction.`,
    ],
    C: [
      r`Montrer que $\log_b(b^x)=x$ et $b^{\log_b x}=x$, puis expliquer pourquoi cela confirme que $y=b^x$ et $y=\log_b x$ sont des fonctions inverses.`,
      r`Expliquer comment la base $b$ affecte le graphique de $y=\log_b x$ selon que $b>1$ ou $0<b<1$, avec un exemple de chaque.`,
    ],
    A: [
      r`Les musiciens mesurent la hauteur d'une note en demi-tons à partir du la central (440 Hz) avec $n=12\log_2\dfrac{f}{440}$. Trouver $n$ pour $f=220$ Hz et pour $f=880$ Hz.`,
      r`Le nombre d'utilisateurs d'un réseau social après $t$ années est $N(t)=20\,000\cdot2^{t/1.5}$. Trouver la fonction inverse qui donne le temps nécessaire pour atteindre $N$ utilisateurs.`,
      r`La magnitude d'un tremblement de terre satisfait $M=\log\dfrac{A}{A_0}$. Si un séisme a une amplitude $A=1000A_0$, trouver sa magnitude $M$.`,
    ],
  },
  "4.3": {
    topic: "Résolution d'équations exponentielles et logarithmiques",
    K: [
      r`Résoudre $6^{2x-1}=216$.`,
      r`Résoudre $\left(\tfrac12\right)^x=32$.`,
      r`Résoudre $\log_2(x+3)=4$, en vérifiant que la solution respecte la restriction du domaine.`,
    ],
    T: [
      r`Résoudre $4^x-3\cdot2^x-4=0$ en posant $u=2^x$.`,
      r`Résoudre $2\log x=\log(3x+10)$, en vérifiant que la solution respecte les restrictions du domaine.`,
    ],
    C: [
      r`Expliquer pourquoi il faut toujours vérifier qu'une solution d'une équation logarithmique donne un argument positif, avec un exemple où une solution doit être rejetée.`,
      r`Décrire la stratégie pour résoudre une équation exponentielle où les deux côtés ne peuvent pas facilement s'écrire avec la même base.`,
    ],
    A: [
      r`Un placement suit $A(t)=8000\left(1+\dfrac{0.045}{4}\right)^{4t}$. Résoudre pour trouver le temps nécessaire pour que le placement atteigne 12 000 dollars.`,
      r`Une population de bactéries suit $N(t)=500\cdot3^{t/4}$. Résoudre pour trouver le temps nécessaire pour atteindre $13\,500$ bactéries.`,
      r`Le pH d'une solution est $\text{pH}=-\log[\text{H}^+]$. Résoudre pour trouver $[\text{H}^+]$ si le pH mesuré est $5.5$.`,
    ],
  },
  "4.4": {
    topic: "Applications des modèles exponentiels et logarithmiques",
    K: [
      r`Un placement de 2500 dollars croît selon $P=2500(1.06)^t$. Trouver le montant après $10$ ans.`,
      r`Une substance radioactive de demi-vie $h$ suit $A=A_0\left(\tfrac12\right)^{t/h}$. Si $h=5$ ans et $A_0=200$ g, trouver la quantité restante après $15$ ans.`,
      r`Une population croît selon $y=200(3)^{t/5}$. Trouver la population après $10$ ans, puis récrire le modèle sous la forme $y=200b^t$ en trouvant $b$.`,
    ],
    T: [
      r`La magnitude d'un séisme satisfait $M=\log\dfrac{A}{A_0}$. Si un séisme de magnitude $6.5$ a une amplitude $10^{1.5M}$ fois plus grande qu'un séisme de référence, exprimer cette amplitude et l'évaluer.`,
      r`Un modèle de population $P(t)=240\,000(1.023)^t$ est utilisé pour prédire la population d'une ville. Trouver dans combien d'années la population dépassera $500\,000$.`,
    ],
    C: [
      r`Expliquer pourquoi un modèle de demi-vie et un modèle de temps de doublement utilisent la même forme générale $A=A_0 b^{t/p}$, en identifiant ce qui change entre les deux.`,
      r`Décrire pourquoi une échelle logarithmique (comme celle du pH ou des décibels) est utile pour représenter des quantités qui varient sur plusieurs ordres de grandeur.`,
    ],
    A: [
      r`Une tasse de café à $90^\circ\text{C}$ refroidit dans une pièce à $20^\circ\text{C}$ selon $T(t)=20+70(0.9)^t$, où $t$ est en minutes. Trouver le temps nécessaire pour que la température descende à $30^\circ\text{C}$.`,
      r`La valeur d'une voiture se déprécie selon $V(t)=25\,000(0.85)^t$. Trouver dans combien d'années la valeur descendra sous 10 000 dollars.`,
      r`Le niveau sonore d'un concert est $85$ dB. Un deuxième concert mesure $100$ dB. Utiliser $L=10\log\dfrac{I}{I_0}$ pour trouver le rapport des intensités sonores entre les deux concerts.`,
    ],
  },
};
