// MHF4U-FR Unité 6 — Travaux notés (Identités et équations trigonométriques).
const r = String.raw;

export const U6 = {
  "6.1": {
    topic: "Formules d'angles composés",
    K: [
      r`Trouver la valeur exacte de $\cos165^\circ$ en écrivant $165^\circ=120^\circ+45^\circ$.`,
      r`Trouver la valeur exacte de $\sin\dfrac{17\pi}{12}$ en écrivant $\dfrac{17\pi}{12}=\dfrac{7\pi}{6}+\dfrac{\pi}{4}$.`,
      r`Simplifier $\sin47^\circ\cos13^\circ+\cos47^\circ\sin13^\circ$.`,
    ],
    T: [
      r`Si $\sin A=\dfrac{5}{13}$ (QI) et $\cos B=\dfrac35$ (QI), trouver $\cos(A+B)$ exactement.`,
      r`Montrer que $\cos(A+B)+\cos(A-B)=2\cos A\cos B$ en développant les deux côtés, puis vérifier avec $A=60^\circ,\ B=30^\circ$.`,
    ],
    C: [
      r`Expliquer comment écrire un angle comme $75^\circ$ ou $15^\circ$ en une somme ou différence de deux angles remarquables, et pourquoi ce choix n'est pas unique.`,
      r`Expliquer la différence entre les formules de $\sin(A+B)$ et de $\cos(A+B)$ (le changement de signe), avec un exemple qui montre l'erreur si on les confond.`,
    ],
    A: [
      r`Deux ondes sonores sont $v_1=3\sin\theta$ et $v_2=4\cos\theta$. Trouver leur somme $v_1+v_2$ sous la forme $R\sin(\theta+\phi)$ approximativement, en utilisant les formules d'angles composés comme point de départ.`,
      r`Une antenne reçoit deux signaux $\sin(2\pi\cdot440t)$ et $\sin(2\pi\cdot444t)$. Utiliser une formule d'angle composé pour réécrire leur somme comme un produit.`,
      r`Un triangle a des angles $A$ et $B$ avec $\tan A=\dfrac{8}{d}$ et $\tan B=\dfrac{2}{d}$. Utiliser la formule de $\tan(A-B)$ pour exprimer $\tan(A-B)$ en fonction de $d$.`,
    ],
  },
  "6.2": {
    topic: "Formules de l'angle double",
    K: [
      r`Trouver la valeur exacte de $2\sin15^\circ\cos15^\circ$.`,
      r`Trouver la valeur exacte de $\cos^2\dfrac{\pi}{8}-\sin^2\dfrac{\pi}{8}$.`,
      r`Si $\sin\theta=-\dfrac35$ et $\theta$ est dans le quatrième quadrant, trouver $\sin2\theta$ et $\cos2\theta$ exactement.`,
    ],
    T: [
      r`Prouver que $\tan2\theta=\dfrac{2\tan\theta}{1-\tan^2\theta}$ à partir de $\tan2\theta=\dfrac{\sin2\theta}{\cos2\theta}$, puis évaluer $\tan2\theta$ si $\tan\theta=\dfrac13$.`,
      r`Dériver une formule pour $\cos3\theta$ en fonction de $\cos\theta$ en écrivant $3\theta=2\theta+\theta$ et en utilisant les formules d'angle composé et d'angle double.`,
    ],
    C: [
      r`Expliquer comment décider laquelle des trois formes de $\cos2\theta$ utiliser selon l'information donnée dans un problème.`,
      r`Expliquer comment les formules de l'angle double découlent des formules d'angle composé en posant $B=A$.`,
    ],
    A: [
      r`Un ballon frappé à la vitesse $v$ selon un angle $\theta$ parcourt une distance horizontale $R=\dfrac{v^2}{g}\sin2\theta$. Pour $v=20$ m/s et $g=9.8$ m/s², trouver la portée pour $\theta=30^\circ$ et $\theta=45^\circ$.`,
      r`Un radiateur de $10$ ohms est branché sur un circuit domestique où $v=170\sin(120\pi t)$ volts, et sa puissance est $P=\dfrac{v^2}{10}$ watts. Réécrire $P(t)$ à l'aide d'une identité d'angle double.`,
      r`L'aire d'un triangle isocèle avec deux côtés égaux de longueur $4$ et un angle $2\theta$ entre eux est $A=8\sin2\theta$. Réécrire $A$ en fonction de $\sin\theta$ et $\cos\theta$ seulement.`,
    ],
  },
  "6.3": {
    topic: "Preuve d'identités trigonométriques",
    K: [
      r`Prouver que $\sin x(\csc x-\sin x)=\cos^2 x$.`,
      r`Prouver que $(\sin x+\cos x)^2=1+\sin2x$.`,
      r`Prouver que $\dfrac{\cos2x}{1+\sin2x}=\dfrac{\cos x-\sin x}{\cos x+\sin x}$.`,
    ],
    T: [
      r`Prouver que $\sin^4 x-\cos^4 x=\sin^2x-\cos^2x$, en factorisant le côté gauche comme une différence de carrés.`,
      r`L'intensité transmise par un polariseur est $I=I_0\cos^2\theta$. Réécrire cette expression à l'aide de l'identité $\cos^2\theta=\dfrac{1+\cos2\theta}{2}$ et interpréter le résultat.`,
    ],
    C: [
      r`Décrire une stratégie générale pour prouver une identité trigonométrique quand les deux côtés semblent très différents au premier regard.`,
      r`Expliquer pourquoi on ne doit jamais traiter les deux côtés d'une identité non prouvée comme une équation à résoudre (par exemple, en additionnant la même chose des deux côtés).`,
    ],
    A: [
      r`La longueur d'ombre d'un objet incliné est $h=\ell(1-\cos\theta)$. Montrer que cela équivaut à $h=2\ell\sin^2\dfrac{\theta}{2}$, puis évaluer $h$ pour $\ell=1.5$ m et $\theta=60^\circ$.`,
      r`La puissance dissipée dans un circuit est $L(\theta)=\csc\theta+2\sec\theta$. Réécrire $L(\theta)$ comme une seule fraction $\dfrac{\cos\theta+2\sin\theta}{\sin\theta\cos\theta}$ et vérifier l'identité.`,
      r`L'intensité de la lumière traversant deux polariseurs à un angle $\theta$ l'un de l'autre est $I=I_0\cos^4\theta$. Utiliser $\cos^2\theta=\dfrac{1+\cos2\theta}{2}$ pour montrer que $I=I_0\dfrac{(1+\cos2\theta)^2}{4}$.`,
    ],
  },
  "6.4": {
    topic: "Résolution d'équations trigonométriques",
    K: [
      r`Résoudre $2\sin\theta+\sqrt3=0$ sur $[0,2\pi)$.`,
      r`Résoudre $\tan^2\theta=3$ sur $[0,2\pi)$.`,
      r`Résoudre $2\sin^2\theta+\sin\theta-1=0$ sur $[0,2\pi)$ en factorisant.`,
    ],
    T: [
      r`Résoudre $\cos2\theta=\dfrac12$ sur $[0,2\pi)$, en trouvant d'abord toutes les valeurs de $2\theta$ puis en divisant par $2$.`,
      r`Résoudre $\cos2\theta+3\sin\theta-2=0$ sur $[0,2\pi)$ en réécrivant $\cos2\theta$ en fonction de $\sin\theta$ seulement.`,
    ],
    C: [
      r`Expliquer pourquoi résoudre $\cos2\theta=k$ demande de considérer un intervalle deux fois plus grand pour $2\theta$ avant de revenir à $\theta$.`,
      r`Décrire les étapes pour résoudre une équation trigonométrique qui devient quadratique après substitution, en donnant un exemple.`,
    ],
    A: [
      r`La profondeur de l'eau dans un port suit $d(t)=5.5\cos\left(\dfrac{2\pi}{12.4}(t-2.5)\right)+7.5$. Résoudre pour trouver les instants où $d(t)=10$ m sur un cycle de $12.4$ heures.`,
      r`La durée du jour suit $D(t)=3.1\sin\left(\dfrac{2\pi}{365}(t-80)\right)+12.2$. Résoudre pour trouver les jours de l'année où $D(t)=13$ heures.`,
      r`La position d'un piston est $x(t)=10\cos\left(\dfrac{2\pi}{1.5}t\right)$ sur $[0,1.5]$ secondes. Résoudre pour trouver les instants où $x(t)=5$.`,
    ],
  },
};
