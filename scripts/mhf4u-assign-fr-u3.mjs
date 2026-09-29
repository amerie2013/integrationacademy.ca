// MHF4U-FR Unité 3 — Travaux notés (Fonctions rationnelles).
const r = String.raw;

export const U3 = {
  "3.1": {
    topic: "Fonctions réciproques et rationnelles",
    K: [
      r`Trouver l'asymptote verticale, l'asymptote horizontale et le domaine de $y=\dfrac{1}{x+4}-2$.`,
      r`Trouver le domaine et toute asymptote de $f(x)=\dfrac{x^2-16}{x^2+x-12}$, en vérifiant d'abord s'il y a un trou.`,
      r`Trouver l'asymptote horizontale de $y=\dfrac{3x^2+1}{x^2-4}$.`,
    ],
    T: [
      r`Pour $y=\dfrac{2x-1}{x^2+1}$, expliquer pourquoi il n'y a aucune asymptote verticale, puis trouver l'asymptote horizontale.`,
      r`Un modèle de coût moyen est $A(x)=\dfrac{500+20x}{x}$, où $x$ est le nombre d'unités produites. Trouver l'asymptote horizontale et l'interpréter dans le contexte du coût moyen à long terme.`,
    ],
    C: [
      r`Expliquer la différence entre une asymptote verticale et un trou dans le graphique d'une fonction rationnelle, avec un exemple de chaque.`,
      r`Décrire comment le degré du numérateur par rapport à celui du dénominateur détermine l'asymptote horizontale (ou son absence) d'une fonction rationnelle.`,
    ],
    A: [
      r`Le temps de trajet moyen est $T(v)=\dfrac{240}{v+0.5}$ heures, où $v$ est la vitesse en km/h. Trouver $T(80)$ et $T(120)$, et expliquer pourquoi $T(v)\to0$ quand $v$ augmente.`,
      r`Le coût moyen par article est $S(n)=\dfrac{90n}{n+3}$ dollars, où $n$ est le nombre d'articles commandés. Trouver l'asymptote horizontale et l'interpréter dans le contexte.`,
      r`La concentration d'un médicament dans le sang est $C(t)=\dfrac{6t}{t^2+4}$, où $t$ est en heures. Trouver le domaine réaliste et expliquer pourquoi $C(t)\to0$ quand $t\to\infty$.`,
    ],
  },
  "3.2": {
    topic: "Graphiques des fonctions rationnelles",
    K: [
      r`Trouver les abscisses, l'ordonnée à l'origine et les asymptotes de $y=\dfrac{x-2}{x^2-4}$, en identifiant d'abord tout trou.`,
      r`Esquisser $y=\dfrac{2x+1}{x-3}$ en indiquant les intercepts et les asymptotes.`,
      r`Trouver la limite de $y=\dfrac{x^2+1}{x^2-1}$ quand $x\to\infty$.`,
    ],
    T: [
      r`Une fonction rationnelle a une asymptote verticale en $x=1$, une asymptote horizontale $y=2$, et passe par $(0,3)$. Écrire une équation possible sous la forme $y=\dfrac{ax+b}{x-1}$.`,
      r`Pour $y=\dfrac{x^2+1}{x^2-1}$, expliquer pourquoi le graphique ne traverse jamais son asymptote horizontale, en testant une grande valeur de $x$.`,
    ],
    C: [
      r`Expliquer les étapes pour esquisser le graphique d'une fonction rationnelle à partir de son équation, sans utiliser de calculatrice graphique.`,
      r`Décrire ce qui arrive au graphique d'une fonction rationnelle de chaque côté d'une asymptote verticale, et pourquoi ce comportement peut différer d'un côté à l'autre.`,
    ],
    A: [
      r`La concentration d'un polluant est $C(t)=\dfrac{6t}{t^2+4}$ mg/L. Trouver le domaine, l'ordonnée à l'origine, et décrire ce qui arrive à $C(t)$ à long terme.`,
      r`Le coût moyen de production est $R(x)=\dfrac{6x}{6+x}$ milliers de dollars. Trouver l'asymptote horizontale et interpréter sa signification économique.`,
      r`Le rendement d'une culture agricole est $W(\rho)=\dfrac{2\rho}{1-\rho}$ pour $0\le\rho<1$, où $\rho$ est la densité de plantation. Décrire ce qui arrive au rendement quand $\rho\to1^-$ et interpréter cela.`,
    ],
  },
  "3.3": {
    topic: "Résolution d'équations et inégalités rationnelles",
    K: [
      r`Résoudre $\dfrac{2}{x+1}=\dfrac{3}{x-2}$ et vérifier qu'aucune racine n'est étrangère.`,
      r`Résoudre $\dfrac{5}{x-2}-\dfrac{3}{x+2}=\dfrac{2}{x^2-4}$.`,
      r`Résoudre l'inégalité $\dfrac{2x-1}{x+3}<0$.`,
    ],
    T: [
      r`Résoudre $\dfrac{x-1}{x+3}\ge2$ en ramenant d'abord tous les termes d'un même côté, sans jamais multiplier par une expression contenant $x$.`,
      r`Résoudre $\dfrac{1}{x-1}>2$ et expliquer pourquoi multiplier directement par $(x-1)$ serait une erreur.`,
    ],
    C: [
      r`Expliquer pourquoi il faut toujours vérifier les restrictions du domaine avant de conclure la solution d'une équation rationnelle.`,
      r`Décrire la méthode complète pour résoudre une inégalité rationnelle, du début (ramener à zéro) jusqu'à la fin (tableau de signes et restrictions).`,
    ],
    A: [
      r`Le temps d'attente moyen à un guichet est $\dfrac{1}{x-1}$ minutes de plus que le temps normal, où $x$ est le nombre de guichets ouverts. Résoudre pour trouver combien de guichets réduisent ce délai supplémentaire à moins de $2$ minutes.`,
      r`La vitesse d'un courant est $v$ km/h et le temps total pour un aller-retour de $20$ km est $\dfrac{20}{5+v}+\dfrac{20}{5-v}$ heures. Résoudre pour $v$ si ce temps total est de $9$ heures.`,
      r`Un mélange chimique a une concentration $\dfrac{3x}{x+1}\%$. Résoudre l'inégalité pour trouver les valeurs de $x$ (en litres ajoutés) pour lesquelles la concentration dépasse $2\%$.`,
    ],
  },
};
