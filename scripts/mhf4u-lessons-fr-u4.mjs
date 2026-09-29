// MHF4U-FR Unité 4 — Fonctions exponentielles et logarithmiques.
import { mkLesson, gframe } from "./mhf4u-lessons-fr-helpers.mjs";
const r = String.raw;
export const u4 = {};

u4["4.1"] = mkLesson({
  code: "4.1", title: "Logarithmes et lois des logarithmes", emoji: "🔢",
  overview: r`Un <strong>logarithme répond à la question « quel exposant ? »</strong> Par définition \(\log_b x=y\iff b^y=x\) — le logarithme est l'<em>inverse</em> de l'exponentielle. Une fois à l'aise à passer d'une forme à l'autre, trois <strong>lois</strong> transforment des produits, des quotients et des puissances en sommes, différences et multiples.`,
  points: [
    r`<strong>Définition :</strong> \(\log_b x=y\iff b^y=x\) (avec \(b>0,\ b\ne1,\ x>0\)).`,
    r`<strong>Produit :</strong> \(\log_b(xy)=\log_b x+\log_b y\). <strong>Quotient :</strong> \(\log_b\!\frac{x}{y}=\log_b x-\log_b y\).`,
    r`<strong>Puissance :</strong> \(\log_b(x^n)=n\log_b x\). <strong>Changement de base :</strong> \(\log_b x=\dfrac{\log x}{\log b}\).`,
  ],
  graphs: [gframe(["y = 2^x"], { title: "y = 2ˣ — l'exponentielle dont l'inverse est log₂x" })],
  examples: [
    { title: "Évaluer", prompt: r`Trouver \(\log_2 8\).`, steps: [r`\(2^?=8\Rightarrow 2^3=8\).`], concl: r`\(\log_2 8=3\).` },
    { title: "Convertir en forme logarithmique", prompt: r`Écrire \(10^3=1000\) sous forme logarithmique.`, steps: [r`Base \(10\), exposant \(3\).`], concl: r`\(\log 1000=3\).` },
    { title: "Loi du produit", prompt: r`Simplifier \(\log_2(4\cdot 8)\).`, steps: [r`\(\log_2 4+\log_2 8=2+3\).`], concl: r`\(5\).` },
    { title: "Loi de la puissance", prompt: r`Simplifier \(\log_2(8^2)\).`, steps: [r`\(2\log_2 8=2\cdot3\).`], concl: r`\(6\).` },
  ],
  practice: [
    { prompt: r`Trouver \(\log_3 27\).`, answer: r`\(3\).` },
    { prompt: r`Écrire \(2^5=32\) sous forme logarithmique.`, answer: r`\(\log_2 32=5\).` },
    { prompt: r`Simplifier \(\log_5(25^3)\).`, answer: r`\(3\cdot2=6\).` },
  ],
  qa: [
    { q: "Que représente un logarithme ?", a: "L'exposant auquel il faut élever la base." },
    { q: "Comment les formes exponentielle et logarithmique sont-elles liées ?", a: r`\(\log_b x=y\iff b^y=x\).` },
    { q: "À quoi servent les lois ?", a: "À transformer produits/quotients/puissances en sommes/différences/multiples." },
  ],
});

u4["4.2"] = mkLesson({
  code: "4.2", title: "Graphiques des fonctions logarithmiques", emoji: "📈",
  overview: r`Le graphique de \(y=\log_b x\) est la <strong>réflexion de \(y=b^x\) par rapport à la droite \(y=x\)</strong> — ce sont des fonctions inverses. L'asymptote horizontale de l'exponentielle devient donc l'<strong>asymptote verticale</strong> du logarithme en \(x=0\). Le graphique du log a pour domaine \(x>0\), son image est tous les réels, et il passe toujours par \((1,0)\).`,
  points: [
    r`<strong>Asymptote verticale :</strong> \(x=0\) (l'axe des \(y\)). <strong>Domaine :</strong> \(x>0\) ; <strong>image :</strong> tous les réels.`,
    r`Passe par \((1,0)\) ; croissante si \(b>1\).`,
    r`<strong>Transformations :</strong> \(y=\log_b(x-d)\) déplace l'AV en \(x=d\) ; \(+c\) déplace vers le haut.`,
  ],
  graphs: [gframe(["y = 2^x", "y = ln(x)/ln(2)"], { title: "y = 2ˣ et son inverse y = log₂x — images miroir par rapport à y = x" })],
  examples: [
    { title: "Lire toutes les caractéristiques", prompt: r`Pour \(y=\log x\), donner le domaine, l'image, l'asymptote verticale, un point clé, et si la fonction est croissante.`,
      steps: [r`Argument \(>0\) ⇒ domaine \(x>0\) ; quand \(x\to0^+,\ y\to-\infty\) ⇒ AV \(x=0\).`, r`La sortie n'est bornée dans aucune direction ⇒ image tous les réels ; \(\log 1=0\) ⇒ passe par \((1,0)\) ; base \(10>1\) ⇒ croissante.`],
      concl: r`domaine \(x>0\), image \(\mathbb{R}\), AV \(x=0\), passe par \((1,0)\), croissante.`, extra: gframe(["y = log(x)"], { title: "y=log x : domaine x>0, asymptote verticale x=0, passe par (1,0), croissante" }) },
    { title: "Transformer — suivre toutes les caractéristiques", prompt: r`Décrire \(y=\log(x-2)+1\) : donner son asymptote verticale et l'image du point \((1,0)\).`,
      steps: [r`\(x-2>0\Rightarrow x>2\), donc l'AV se déplace en \(x=2\).`, r`Droite \(2\), haut \(1\) envoie \((1,0)\to(3,1)\).`],
      concl: r`AV \(x=2\), domaine \(x>2\), passe par \((3,1)\).`, extra: gframe(["y = log(x-2) + 1"], { title: "log(x−2)+1 : le log de base déplacé droite 2 et haut 1 — AV en x=2, passe par (3,1)" }) },
    { title: "Inverse d'une exponentielle", prompt: r`Trouver l'inverse de \(y=2^x\) et décrire la relation entre les deux graphiques.`,
      steps: [r`Échanger \(x\) et \(y\) : \(x=2^y\Rightarrow y=\log_2 x\).`], concl: r`\(y=\log_2 x\) — la réflexion de \(y=2^x\) par rapport à la droite \(y=x\).` },
  ],
  practice: [
    { prompt: r`Quel est le domaine de \(y=\log_2 x\) ?`, answer: r`\(x>0\).` },
    { prompt: r`Quelle est l'AV de \(y=\log(x+3)\) ?`, answer: r`\(x=-3\).` },
    { prompt: r`\(y=\log_2 x\) est-elle croissante ou décroissante ?`, answer: r`Croissante (\(b>1\)).` },
  ],
  qa: [
    { q: "Comment le graphique du log est-il lié à l'exponentielle ?", a: "C'est la réflexion par rapport à y=x — ce sont des fonctions inverses." },
    { q: "Où se trouve l'asymptote verticale ?", a: r`En \(x=0\), déplacée par toute translation horizontale.` },
    { q: "Quel point se trouve toujours sur le graphique ?", a: r`\((1,0)\).` },
  ],
});

u4["4.3"] = mkLesson({
  code: "4.3", title: "Résolution d'équations exponentielles et logarithmiques", emoji: "🧩",
  overview: r`Deux stratégies principales. Si les deux côtés peuvent s'écrire avec la <strong>même base</strong>, égaler les exposants. Sinon, <strong>prendre le logarithme des deux côtés</strong> et utiliser la loi de la puissance pour faire descendre l'exposant. Pour une équation <strong>logarithmique</strong>, réécrire sous forme exponentielle (ou combiner les logs d'abord), puis toujours <strong>vérifier</strong> que chaque argument reste positif.`,
  points: [
    r`<strong>Même base :</strong> \(b^{f(x)}=b^{g(x)}\Rightarrow f(x)=g(x)\).`,
    r`<strong>Prendre les logs :</strong> \(b^x=c\Rightarrow x=\dfrac{\log c}{\log b}\).`,
    r`<strong>Équation logarithmique :</strong> \(\log_b x=k\Rightarrow x=b^k\) ; rejeter tout argument non positif.`,
  ],
  graphs: [gframe(["y = 2^x"], { title: "Résoudre 2ˣ = c revient à lire à la hauteur c" })],
  examples: [
    { title: "Même base", prompt: r`Résoudre \(2^x=8\).`, steps: [r`\(2^x=2^3\).`], concl: r`\(x=3\).` },
    { title: "Récrire les deux côtés avec une base commune", prompt: r`Résoudre \(4^x=8\).`,
      steps: [r`Écrire chaque côté comme une puissance de \(2\) : \((2^2)^x=2^3\Rightarrow 2^{2x}=2^3\).`, r`Égaler les exposants : \(2x=3\).`], concl: r`\(x=\tfrac32\).` },
    { title: "Prendre les logs", prompt: r`Résoudre \(2^x=10\).`, steps: [r`\(x=\dfrac{\log 10}{\log 2}\approx3.32\).`], concl: r`\(x\approx3.32\).`, extra: gframe(["y = 2^x", "y = 10"], { title: "2ˣ=10 là où la courbe croise la droite y=10 — en x≈3.32" }) },
    { title: "Équation logarithmique", prompt: r`Résoudre \(\log_2 x=5\).`, steps: [r`\(x=2^5\).`], concl: r`\(x=32\).` },
  ],
  practice: [
    { prompt: r`Résoudre \(2^x=16\).`, answer: r`\(x=4\).` },
    { prompt: r`Résoudre \(5^x=125\).`, answer: r`\(x=3\).` },
    { prompt: r`Résoudre \(\log_3 x=4\).`, answer: r`\(x=81\).` },
  ],
  qa: [
    { q: "Quand peut-on égaler les exposants ?", a: "Quand les deux côtés partagent la même base." },
    { q: "Que faire si les bases diffèrent ?", a: "Prendre les logs et utiliser la loi de la puissance." },
    { q: "Comment défaire un logarithme ?", a: r`Réécrire sous forme exponentielle : \(\log_b x=k\Rightarrow x=b^k\).` },
  ],
});

u4["4.4"] = mkLesson({
  code: "4.4", title: "Applications des modèles exponentiels et logarithmiques", emoji: "🌍",
  overview: r`Les modèles exponentiels \(A=A_0\,b^{\,t/p}\) décrivent la croissance (\(b>1\)) et la décroissance (\(0<b<1\)) ; les logarithmes servent à isoler le <em>temps</em> (temps de doublement, demi-vie) et sont à la base des <strong>échelles logarithmiques</strong> comme le pH, les décibels et l'échelle de Richter, où chaque unité représente un facteur de dix.`,
  points: [
    r`<strong>Croissance/décroissance :</strong> \(A=A_0\,b^{\,t/p}\) — \(p\) est le temps de doublement ou la demi-vie.`,
    r`<strong>Résoudre pour le temps :</strong> utiliser les logs, p. ex. temps de doublement \(=\dfrac{\log 2}{\log(1+r)}\).`,
    r`<strong>Échelles logarithmiques :</strong> \(\text{pH}=-\log[\text{H}^+]\) ; chaque échelon de Richter ou de décibel est \(\times10\).`,
  ],
  graphs: [gframe(["y = 2^x", "y = 0.5^x"], { title: "Croissance (2ˣ) contre décroissance (0,5ˣ)" })],
  examples: [
    { title: "Croissance", prompt: r`Une colonie de 100 double toutes les 5 h : \(P=100\cdot2^{\,t/5}\). Trouver \(P\) à \(t=10\).`,
      steps: [r`\(P=100\cdot2^{2}=100\cdot4\).`], concl: r`\(400\).`, extra: gframe(["y = 100*2^(x/5)"], { title: "P=100·2^(t/5) : la colonie double toutes les 5 h, atteignant 400 à t=10" }) },
    { title: "Demi-vie", prompt: r`80 mg se désintègrent avec une demi-vie de 3 h : \(A=80\left(\tfrac12\right)^{t/3}\). Trouver \(A\) à \(t=6\).`,
      steps: [r`\(A=80\left(\tfrac12\right)^{2}=80\cdot\tfrac14\).`], concl: r`\(20\) mg.` },
    { title: "Résoudre pour le temps", prompt: r`Un placement croît à 5 %/an. Combien de temps pour doubler ?`,
      steps: [r`\(2=1.05^{\,t}\Rightarrow t=\dfrac{\log 2}{\log 1.05}\).`], concl: r`\(t\approx14.2\) ans.` },
    { title: "Échelle du pH", prompt: r`Trouver le pH si \([\text{H}^+]=10^{-4}\).`, steps: [r`\(\text{pH}=-\log(10^{-4})\).`], concl: r`pH \(=4\).` },
  ],
  practice: [
    { prompt: r`\(P=200\cdot2^{\,t/4}\). Trouver \(P\) à \(t=8\).`, answer: r`\(200\cdot4=800\).` },
    { prompt: r`\(A=160\left(\tfrac12\right)^{t/5}\). Trouver \(A\) à \(t=10\).`, answer: r`\(160\cdot\tfrac14=40\).` },
    { prompt: r`Quel est le pH si \([\text{H}^+]=10^{-7}\) ?`, answer: r`pH \(=7\).` },
  ],
  qa: [
    { q: "Quel est le modèle général ?", a: r`\(A=A_0\,b^{\,t/p}\) (croissance si \(b>1\), décroissance si \(0<b<1\)).` },
    { q: "Comment trouve-t-on un temps de doublement ?", a: r`En résolvant avec les logs : \(t=\dfrac{\log2}{\log(\text{facteur de croissance})}\).` },
    { q: "Qu'est-ce qu'une échelle logarithmique ?", a: "Une échelle où chaque unité représente un facteur de dix (pH, dB, Richter)." },
  ],
});
