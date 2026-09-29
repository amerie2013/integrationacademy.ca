// MHF4U-FR Unité 2 — Travaux notés (Équations et inégalités polynomiales).
const r = String.raw;

export const U2 = {
  "2.1": {
    topic: "Division de polynômes",
    K: [
      r`Diviser $2x^3+3x^2-5x+6$ par $x+3$ par division longue et donner l'énoncé de division.`,
      r`Diviser $6x^3+x^2-10x+4$ par $x-2$ par division synthétique.`,
      r`Sans diviser, utiliser le théorème du reste pour trouver le reste de $x^4-3x^2+x+5$ divisé par $x+1$.`,
    ],
    T: [
      r`Écrire l'énoncé de division pour $P(x)=(x-2)Q(x)+R$ où $P(x)=x^3+2x^2-5x-6$ et le diviseur est $x-2$, puis vérifier le résultat en substituant une valeur de $x$.`,
      r`Un polynôme $V(x)=x^3+6x^2+11x+6$ représente un volume. Diviser $V(x)$ par $(x+2)$ et interpréter le quotient comme l'aire d'une base.`,
    ],
    C: [
      r`Expliquer la différence entre la division longue et la division synthétique, et dans quels cas chacune est utile.`,
      r`Décrire, étape par étape, comment on vérifie qu'une division polynomiale est correcte à l'aide de l'énoncé $P(x)=D(x)Q(x)+R(x)$.`,
    ],
    A: [
      r`Le volume d'une boîte rectangulaire est $V(x)=x^3+4x^2-x-6$, où $x-1$ est une des dimensions. Trouver les deux autres dimensions en divisant.`,
      r`Le coût total de production de $x$ unités est $R(x)=6x^3+19x^2+19x+6$ et le coût fixe correspond au facteur $(2x+3)$. Trouver l'autre facteur.`,
      r`Un ingénieur modélise la résistance d'une poutre par $P(x)=x^3-7x-6$. Diviser $P(x)$ par $(x+1)$ pour trouver un facteur restant et discuter ce que cela révèle sur les zéros du modèle.`,
    ],
  },
  "2.2": {
    topic: "Théorèmes du reste et du facteur",
    K: [
      r`Utiliser le théorème du reste pour trouver le reste de $P(x)=x^4-3x^2+2x-5$ divisé par $x-1$.`,
      r`Déterminer si $(x+2)$ est un facteur de $x^3-6x^2+11x-6$.`,
      r`Trouver tous les zéros rationnels candidats de $P(x)=2x^3-3x^2-11x+6$ à l'aide du théorème des racines rationnelles.`,
    ],
    T: [
      r`Trouver la valeur de $k$ pour que $(x-3)$ soit un facteur de $P(x)=x^3+kx^2-9$, puis factoriser complètement le polynôme obtenu.`,
      r`Un polynôme $P(x)=x^3+ax^2+bx-6$ a $(x-1)$ et $(x+2)$ comme facteurs. Trouver $a$ et $b$.`,
    ],
    C: [
      r`Expliquer pourquoi le théorème du facteur est un cas particulier du théorème du reste, en utilisant $P(a)=0$.`,
      r`Décrire une stratégie efficace pour factoriser un polynôme de degré $3$ ou plus, en expliquant le rôle du théorème des racines rationnelles.`,
    ],
    A: [
      r`La hauteur d'une fusée modèle est $h(t)=t^3-7t^2+14t-8$ mètres. Vérifier que $t=1$ est un zéro, puis factoriser pour trouver tous les instants où la fusée touche le sol.`,
      r`Le profit d'une entreprise est $P(x)=x^3-8x^2+19x-12$ en milliers de dollars, où $x$ est en centaines d'unités. Factoriser complètement pour trouver les niveaux de production où le profit est nul.`,
      r`Un réservoir a un volume $V(x)=x^3-2x^2-2x+4$. Vérifier si $x=2$ correspond à un zéro et interpréter ce que cela signifie pour les dimensions possibles du réservoir.`,
    ],
  },
  "2.3": {
    topic: "Résolution d'équations polynomiales",
    K: [
      r`Résoudre $x^3-25x=0$ en factorisant.`,
      r`Résoudre $x^3+2x^2-5x-6=0$ sachant que $x=-1$ est une racine.`,
      r`Résoudre $x^4-10x^2+9=0$ en la traitant comme une équation quadratique en $x^2$.`,
    ],
    T: [
      r`Résoudre $x^3-3x^2-4x+12=0$ en essayant d'abord le groupement, puis en vérifiant la réponse par substitution.`,
      r`Un cube de glace fond de façon à ce que son volume suive $V(x)=x^3-36x$, où $x$ est en centimètres. Trouver toutes les valeurs de $x$ pour lesquelles $V(x)=0$, puis expliquer laquelle a un sens physique.`,
    ],
    C: [
      r`Expliquer pourquoi une équation polynomiale de degré $4$ peut avoir seulement $2$ solutions réelles, en donnant un exemple.`,
      r`Décrire la stratégie complète pour résoudre une équation polynomiale de degré $3$ ou plus : quand factoriser directement, quand grouper, et quand utiliser le théorème du facteur.`,
    ],
    A: [
      r`Une boîte ouverte est formée en découpant des carrés de côté $x$ dans une feuille de carton de $30\text{ cm}\times24\text{ cm}$. Si le volume doit être $h(x)=x(30-2x)(24-2x)=1000\text{ cm}^3$, écrire l'équation à résoudre.`,
      r`La hauteur d'un objet lancé est $h(t)=-5t^3+20t^2$ (approximation) où $t\ge0$. Résoudre $h(t)=0$ pour trouver les instants où l'objet est au sol.`,
      r`Le nombre de bactéries (en milliers) dans une culture après $t$ heures suit $N(t)=t^3-13t^2+36t$. Résoudre $N(t)=0$ et expliquer ce que chaque solution représente.`,
    ],
  },
  "2.4": {
    topic: "Inégalités polynomiales",
    K: [
      r`Résoudre $(x+4)(x-1)>0$ à l'aide d'un tableau de signes.`,
      r`Résoudre $x^2-2x-8\le0$.`,
      r`Résoudre $(x+2)(x-1)(x-4)<0$.`,
    ],
    T: [
      r`Résoudre $(x+2)^2(x-5)\le0$, en expliquant pourquoi le facteur au carré ne change pas le signe autour de son zéro.`,
      r`Résoudre $x^3\ge9x$ en ramenant d'abord tous les termes d'un côté et en factorisant complètement.`,
    ],
    C: [
      r`Expliquer pourquoi il ne faut jamais diviser les deux côtés d'une inégalité par une expression contenant $x$ sans connaître son signe.`,
      r`Décrire comment un tableau de signes permet de résoudre n'importe quelle inégalité polynomiale factorisée, en expliquant le rôle de chaque zéro.`,
    ],
    A: [
      r`La hauteur d'une balle est $h(t)=-5t^2+20t$ mètres. Résoudre $h(t)>0$ pour trouver l'intervalle de temps où la balle est au-dessus du sol.`,
      r`Le profit d'une entreprise est $h(t)=t^3-8t^2+12t$ en milliers de dollars sur $0\le t\le8$ ans. Résoudre $h(t)>0$ pour trouver les années rentables.`,
      r`Une entreprise veut que l'aire d'un terrain rectangulaire $y=x^2-25$ (en centaines de m²) soit positive. Résoudre l'inégalité et interpréter le résultat en fonction de $x$.`,
    ],
  },
};
