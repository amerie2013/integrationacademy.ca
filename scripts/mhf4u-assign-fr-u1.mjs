// MHF4U-FR Unité 1 — Travaux notés (Fonctions polynomiales).
// Chaque sujet : 3 Connaissance et compréhension, 2 Réflexion, 2 Communication, 3 Mise en application.
const r = String.raw;

export const U1 = {
  "1.1": {
    topic: "Fonctions puissance et comportement à l'infini",
    K: [
      r`Décrire le comportement à l'infini de chaque fonction puissance : (a) $f(x)=6x^5$ (b) $g(x)=-0.5x^8$ (c) $h(x)=-x^{10}$.`,
      r`Sur un même système d'axes, esquisser $y=x^3$, $y=x^5$ et $y=x^7$, puis nommer les points que les trois graphiques ont en commun.`,
      r`Pour $f(x)=-3x^7$ et $g(x)=4x^6$, indiquer si chaque fonction est paire, impaire ou ni l'une ni l'autre.`,
    ],
    T: [
      r`Soit $P(x)=x^3$ et $Q(x)=x^3+900x$. Évaluer les deux fonctions en $x=3$ et en $x=300$, comparer les résultats, puis expliquer ce que cela révèle sur le comportement près de l'origine et loin de l'origine.`,
      r`Une fonction puissance $y=ax^n$, où $n$ est un entier positif inférieur à $6$, passe par $(2,48)$ et $(-2,-48)$. Expliquer ce que le deuxième point révèle sur la parité de $n$, puis trouver tous les couples $(a,n)$ possibles.`,
    ],
    C: [
      r`Un camarade affirme : « $y=x^4$ et $y=x^6$ ont le même comportement à l'infini, donc leurs graphiques sont essentiellement identiques. » Expliquer ce qui est exact et ce qui est trompeur dans cette affirmation.`,
      r`Expliquer à un élève absent comment la parité de l'exposant et le signe du coefficient déterminent ensemble le comportement à l'infini d'une fonction puissance, avec un exemple pour chacun des quatre cas.`,
    ],
    A: [
      r`La puissance disponible d'une éolienne est $P(v)=1800v^3$ watts, où $v$ est la vitesse du vent en m/s. Trouver la puissance à $6$ m/s et à $12$ m/s, puis expliquer par quel facteur elle change quand la vitesse double.`,
      r`L'énergie cinétique d'une voiture de 1200 kg roulant à $v$ m/s est $E(v)=600v^2$ joules. Comparer l'énergie à $50$ km/h (environ $13.9$ m/s) et à $100$ km/h (environ $27.8$ m/s), et commenter le risque de rouler plus vite.`,
      r`Une entreprise utilise des caisses cubiques d'arête $s$ mètres : le volume est $V(s)=s^3$ et l'aire de matériau nécessaire est $S(s)=6s^2$. Si l'arête double, par quel facteur chacune des deux quantités change-t-elle ?`,
    ],
  },
  "1.2": {
    topic: "Caractéristiques des fonctions polynomiales",
    K: [
      r`Pour chaque polynôme, donner le degré, le nombre maximal de zéros et de points de rebroussement : (a) $f(x)=-x^8+3x^2-1$ (b) $g(x)=5x^9+x^4$ (c) $h(x)=2-x^{11}$.`,
      r`Utiliser $f(-x)$ pour déterminer si chaque fonction est paire, impaire ou ni l'une ni l'autre : (a) $f(x)=2x^6-x^4+7$ (b) $g(x)=x^5+3x^3-x$ (c) $h(x)=3x^4+2x-5$.`,
      r`Un tableau de valeurs d'un polynôme donne $f(0),\dots,f(4)=1,2,9,28,65$. Utiliser les différences finies pour trouver le degré du polynôme.`,
    ],
    T: [
      r`Un polynôme a un degré impair, un coefficient dominant négatif, exactement $4$ points de rebroussement et un seul zéro. Expliquer pourquoi son degré minimal est $5$, puis esquisser un graphique possible.`,
      r`Les différences du troisième ordre d'un polynôme, tabulées à $x=0,1,2,3,\dots$, sont constantes et égales à $12$. Déterminer le degré et le coefficient dominant de ce polynôme.`,
    ],
    C: [
      r`Expliquer pourquoi un polynôme de degré $4$ peut avoir moins de $4$ zéros, mais jamais plus de $4$, en donnant un exemple avec exactement $2$ zéros réels.`,
      r`Décrire, dans tes propres mots, comment la symétrie paire ou impaire d'une fonction se voit à la fois dans l'équation (par $f(-x)$) et sur le graphique.`,
    ],
    A: [
      r`La hauteur d'une montgolfière est modélisée par $h(t)=-t^4+8t^3-18t^2+20$, où $t$ est en heures. Combien de fois la hauteur peut-elle au maximum passer d'une augmentation à une diminution (ou l'inverse) durant le vol ?`,
      r`Le volume d'une boîte formée en découpant des carrés de côté $x$ dans une feuille de $30\text{ cm}\times20\text{ cm}$ est $V(x)=x(30-2x)(20-2x)$. Quel est le degré de $V$, et quel est le domaine réaliste de $x$ ?`,
      r`Les profits mensuels (en milliers de dollars) d'une entreprise sur $24$ mois suivent un modèle polynomial de degré $3$ dont les différences finies du troisième ordre sont constantes. Expliquer ce que cela indique sur la forme du modèle.`,
    ],
  },
  "1.3": {
    topic: "Équations et graphiques des fonctions polynomiales",
    K: [
      r`Trouver les zéros de $f(x)=-(x+1)^3(x-2)(x-5)^2$ et indiquer, pour chacun, si le graphique traverse ou touche l'axe des $x$.`,
      r`Trouver l'ordonnée à l'origine de $f(x)=-x(x+2)(x-3)$, puis déterminer les intervalles où $f(x)>0$.`,
      r`Écrire une équation possible pour un polynôme dont les zéros sont $-2$ (multiplicité $1$), $0$ (multiplicité $2$) et $3$ (multiplicité $1$).`,
    ],
    T: [
      r`Un polynôme a la forme $f(x)=x(x-2)^2(x+3)$. Trouver tous ses zéros avec leur multiplicité, puis déterminer les intervalles où $f(x)>0$.`,
      r`Une cuve a un volume donné par $V(x)=x(24-2x)(18-2x)$ pour des découpes de côté $x$. Trouver les zéros de $V$ et expliquer pourquoi seul un intervalle entre deux zéros a un sens physique.`,
    ],
    C: [
      r`Expliquer comment la multiplicité d'un zéro (paire ou impaire) détermine si le graphique traverse ou touche l'axe des $x$ à cet endroit, avec un exemple de chaque cas.`,
      r`Décrire la méthode pour construire l'équation d'un polynôme à partir de ses zéros et d'un point supplémentaire, en expliquant pourquoi ce point supplémentaire est nécessaire.`,
    ],
    A: [
      r`La population de poissons (en milliers) d'un lac suit $P(t)=0.02t(t-3)^2(t-7)$, où $t$ est en années. Trouver $P(5)$ et $P(8)$, puis interpréter le signe de chaque résultat.`,
      r`Le profit d'une entreprise (en milliers de dollars) est $P(x)=-x(x-2)(x-8)$, où $x$ est en centaines d'unités vendues. Trouver les valeurs de $x$ pour lesquelles l'entreprise est rentable.`,
      r`Un plongeur saute d'une plateforme et sa hauteur (en mètres) est $h(t)=-4.9t^2+3t+5$. Reformuler cette situation avec la forme factorisée si les zéros approximatifs sont $t\approx-0.7$ et $t\approx1.5$, et expliquer laquelle des deux valeurs a un sens physique.`,
    ],
  },
  "1.4": {
    topic: "Transformations de fonctions",
    K: [
      r`Décrire les transformations qui envoient $y=x^4$ sur $y=-2(x+3)^4-5$.`,
      r`Le point $(2,8)$ appartient à $y=x^3$. Trouver son image sur $y=2(x-1)^3+3$ à l'aide de la règle du mapping.`,
      r`Écrire l'équation de $y=x^3$ après une réflexion, un étirement vertical de $3$, une translation de $2$ vers la gauche et de $1$ vers le haut.`,
    ],
    T: [
      r`Deux transformations horizontales, $y=f(2x)$ et $y=f\big(\tfrac12x\big)$, sont appliquées à $f(x)=x^3$. Expliquer laquelle comprime le graphique et laquelle l'étire, et trouver l'image du point $(4,64)$ sous chacune.`,
      r`Montrer que $y=(2x-6)^3$ peut s'écrire comme une transformation de $y=x^3$ en factorisant l'intérieur, puis décrire complètement cette transformation.`,
    ],
    C: [
      r`Expliquer pourquoi le paramètre $d$ dans $y=a\,f(k(x-d))+c$ déplace le graphique dans la direction opposée au signe de $d$ à l'intérieur de la parenthèse.`,
      r`Un élève écrit que $y=(3x+9)^2$ est $y=x^2$ translatée de $9$ unités vers la gauche. Expliquer son erreur et donner la transformation correcte.`,
    ],
    A: [
      r`La trajectoire d'un ballon est modélisée par $y=-\tfrac1{20}(x-15)^2+11$, une transformation de $y=x^2$. Décrire la transformation et donner le sommet de la trajectoire.`,
      r`Un signal sonore de base $y=x^3$ est modifié par un amplificateur en $y=4x^3$ puis retardé pour donner $y=4(x-2)^3$. Décrire chaque étape de la transformation en une phrase.`,
      r`La température quotidienne $T(h)$ suit approximativement une transformation d'une fonction de référence $f(h)$ avec $T(h)=8f\big(\tfrac{1}{24}(h-6)\big)+15$. Décrire l'effet de chacun des quatre paramètres sur le contexte (heure du jour, température).`,
    ],
  },
};
