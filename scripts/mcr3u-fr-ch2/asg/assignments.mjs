// MCR3U-FR chapitre 2 — devoirs 2.1 à 2.5 (miroir des descriptions LIVE = ASSIGNMENT de ../../mcr3u-ch2/t2_*.mjs).
// L'anglais écrit les maths entre $…$ ; le vérificateur commun (asg-run.mjs) exige \( … \) : les mêmes formules, dans le
// même ordre, sont ici entre \( … \) (publish.mjs convertit l'anglais de la même façon pour la comparaison).
import { asgId } from "../../mcr3u-fr/common.mjs";

/** "$a$ et $b$" → "\(a\) et \(b\)" */
export const dollarsToParens = (s) => s.replace(/\$([^$]+)\$/g, (_, m) => `\\(${m}\\)`);
const build = (k, title, sections) => {
  let n = 0;
  const lines = sections.flatMap(([head, items]) => [head, ...items.map((t) => `${++n}. ${dollarsToParens(t)}`)]);
  return { code: `2.${k}`, id: asgId(2, k), title: `Devoir 2.${k} — ${title}`, figs: {}, lines };
};
const K = "Connaissance et compréhension", H = "Habiletés de la pensée", C = "Communication", A = "Mise en application";

export const ASSIGNMENTS = [
  build(1, "Addition et multiplication de polynômes", [
    [K, [
      "Simplifie $(7x^2-3x+4)-(2x^2+5x-9)$.",
      "Développe et simplifie $(3x-5)(2x+7)$.",
      "Développe $(4x-3)^2$ et indique quel produit remarquable tu as utilisé.",
    ]],
    [H, [
      "Développe et simplifie $(x+2)(x-3)(x+5)$. Donne le degré et le terme constant du produit avant de multiplier, puis confirme les deux dans ta réponse.",
      "Le produit $(x^2+kx+4)(x-3)$ n'a pas de terme en $x^2$. Trouve $k$ et écris le produit développé au complet.",
    ]],
    [C, [
      "Un élève développe $(x+6)^2$ et obtient $x^2+36$. À l'aide d'un modèle d'aire et d'une vérification numérique, explique l'erreur et donne le bon résultat.",
      "Deux expressions semblent différentes : $(x+5)^2-(x-5)^2$ et $20x$. Décris deux façons différentes de décider si elles sont équivalentes (une numérique, une algébrique), puis applique les deux.",
    ]],
    [A, [
      "Un jardin rectangulaire mesure 12 m sur 8 m. On aménage tout autour un sentier de largeur constante $x$ mètres. a) Écris et développe une expression de l'aire du jardin avec le sentier. b) Trouve l'aire du sentier seul sous forme de polynôme, puis évalue-la pour $x=1.5$. c) Montre qu'un sentier de 2 m de large a une aire de 96 mètres carrés.",
      "Un magasin vend un article au prix de $(25-x)$ dollars après un rabais de $x$ dollars, et en vend $(80+4x)$ unités. a) Écris et développe le revenu $R(x)$. b) Trouve $R(3)$ et $R(5)$. c) Explique pourquoi $R(0)$ et $R(5)$ sont égaux, et ce que cela indique sur le meilleur rabais.",
      "On découpe un carré de côté $x$ cm à chaque coin d'une feuille de carton de 40 cm sur 30 cm, puis on replie les côtés pour former une boîte ouverte. a) Écris le volume sous forme de polynôme développé. b) Trouve le volume pour $x=5$ cm et vérifie-le en multipliant directement les trois dimensions. c) Donne un domaine raisonnable pour $x$.",
    ]],
  ]),
  build(2, "Factorisation de polynômes", [
    [K, [
      "Factorise $12x^2y-18xy^2+6xy$.",
      "Factorise $x^2+2x-63$ et vérifie ta réponse en développant.",
      "Factorise $6x^2+x-35$ par décomposition. Montre comment tu as décomposé le terme du milieu.",
    ]],
    [H, [
      "Factorise complètement $2x^4-32$.",
      "Pour quels entiers $k$ l'expression $x^2+kx+20$ peut-elle être factorisée en deux binômes à coefficients entiers? Donne toutes les valeurs de $k$ et écris la factorisation pour l'une d'elles.",
    ]],
    [C, [
      "Décris l'ordre des stratégies que tu suivrais pour factoriser n'importe quel polynôme (ce que tu essaies en premier, en deuxième, en troisième), et explique pourquoi mettre le PGFC en évidence d'abord facilite les étapes suivantes. Prends $3x^3-12x$ comme exemple.",
      "Un élève factorise $x^2+7x-18$ en $(x-9)(x+2)$. Développe pour montrer que la factorisation est fausse, explique l'erreur et donne la bonne factorisation.",
    ]],
    [A, [
      "Une pelouse rectangulaire a une aire de $3x^2+14x+8$ mètres carrés et une largeur de $(x+4)$ mètres. a) Trouve une expression de sa longueur. b) Pour $x=3$, donne les dimensions et le périmètre.",
      "La hauteur d'un projectile, en mètres, est $h(t)=-5t^2+25t+30$, où $t$ est en secondes. a) Factorise $h(t)$. b) Utilise les facteurs pour trouver quand il touche le sol. c) Le maximum est à mi-chemin entre les zéros : trouve le moment et la hauteur maximale.",
      "Un théâtre vend $(600-20p)$ billets quand le prix est de $p$ dollars, donc le revenu est $R=p(600-20p)$. a) Écris $R$ sous forme factorisée en mettant $-20$ en évidence. b) À quels prix le revenu est-il nul? c) Utilise la symétrie des zéros pour trouver le meilleur prix et le revenu maximal.",
    ]],
  ]),
  build(3, "Simplification d'expressions rationnelles", [
    [K, [
      "Énonce les restrictions de $\\dfrac{x+4}{x^2-7x+12}$.",
      "Simplifie $\\dfrac{2x^2-18}{x^2+x-6}$ et énonce les restrictions.",
      "Simplifie $\\dfrac{x^2-4x-5}{x^2-1}$ et énonce les restrictions.",
    ]],
    [H, [
      "Simplifie $\\dfrac{x^2-2x-8}{x^2+3x}\\times\\dfrac{x+3}{x^2-16}$ et énonce toutes les restrictions.",
      "Trouve la valeur de $k$ pour laquelle $\\dfrac{x^2+kx-12}{x-3}$ se simplifie en un polynôme, puis écris ce polynôme.",
    ]],
    [C, [
      "Un élève simplifie $\\dfrac{x^2+5}{x+5}$ en $x$ en éliminant les 5 et les $x$. Vérifie l'affirmation pour $x=1$, explique précisément l'erreur à l'aide des mots <em>terme</em> et <em>facteur</em>, et donne la bonne forme simplifiée.",
      "Compare $\\dfrac{x^2-36}{x-6}$ et $\\dfrac{1}{x-6}$. Les deux sont non définies en $x=6$. Explique en quoi leurs graphiques diffèrent (trou ou asymptote), et comment l'algèbre permet de savoir lequel des deux se produit.",
    ]],
    [A, [
      "Un livreur parcourt $(x^2-2x-24)$ kilomètres à une vitesse moyenne de $(x-6)$ kilomètres par heure. a) Écris le temps sous forme d'expression simplifiée et énonce la restriction. b) Quelle condition $x$ doit-il respecter pour que la vitesse ait du sens? c) Trouve le temps lorsque $x=10$ et vérifie-le avec la fraction de départ.",
      "Un bloc de métal a une masse de $(6x^2+7x-3)$ grammes et un volume de $(3x-1)$ centimètres cubes. a) Écris la masse volumique sous forme d'expression simplifiée avec sa restriction. b) Trouve la masse volumique lorsque $x=2$ et vérifie-la avec les nombres de départ.",
      "Un grand carré a un côté de $(x+5)$ cm. On retire d'un coin un plus petit carré de côté $(x-2)$ cm. a) Montre que l'aire restante divisée par l'aire du grand carré est égale à $\\dfrac{7(2x+3)}{(x+5)^2}$. b) Énonce les restrictions sur $x$ et toute autre restriction nécessaire pour que la figure existe. c) Évalue ce rapport pour $x=4$ sous forme de fraction.",
    ]],
  ]),
  build(4, "Addition et soustraction d'expressions rationnelles", [
    [K, [
      "Simplifie $\\dfrac{6x+5}{x-3}-\\dfrac{2x-1}{x-3}$ et énonce la restriction.",
      "Simplifie $\\dfrac{4}{3x}+\\dfrac{5}{6x^2}$ et énonce la restriction.",
      "Simplifie $\\dfrac{3}{x+4}+\\dfrac{2}{x-1}$ et énonce les restrictions.",
    ]],
    [H, [
      "Simplifie $\\dfrac{2}{x^2-x-6}-\\dfrac{1}{x^2-9}$. Montre les dénominateurs factorisés, le PPDC et toutes les restrictions.",
      "Trouve les constantes $A$ et $B$ telles que $\\dfrac{5}{(x-1)(x+4)}=\\dfrac{A}{x-1}+\\dfrac{B}{x+4}$. Vérifie ta réponse en additionnant les deux fractions.",
    ]],
    [C, [
      "Un élève simplifie $\\dfrac{5x+2}{x-3}-\\dfrac{x-4}{x-3}$ en $\\dfrac{4x-2}{x-3}$. Trouve l'erreur, explique pourquoi elle se produit et donne la bonne réponse. Vérifie ta réponse avec $x=5$.",
      "Explique pourquoi le PPDC de $x^2-4x$ et de $x^2-16$ est $x(x-4)(x+4)$ et non le produit des deux dénominateurs. Explique ensuite ce qui arrive aux restrictions si la réponse finale se simplifie.",
    ]],
    [A, [
      "Mia peut peindre une clôture en $x$ heures et Jon peut la peindre en $(x+1)$ heures. a) Écris, sous forme d'une seule fraction, le temps qu'ils prennent ensemble. b) Si Mia prend $5$ heures, combien de temps prennent-ils ensemble? c) Vérifie ta réponse à l'aide des taux $\\tfrac15$ et $\\tfrac16$ de la clôture par heure.",
      "Un bateau peut aller à $x$ km/h en eau calme et le courant est de $2$ km/h. Il parcourt $12$ km en remontant le courant, puis $12$ km au retour en le descendant. a) Écris le temps total sous forme d'une seule fraction simplifiée. b) Trouve le temps total lorsque $x=10$ et vérifie-le en calculant chaque trajet séparément. c) Énonce les restrictions sur $x$ qui ont du sens dans cette situation.",
      "Dans un circuit électrique, deux résistances de $x$ et de $(2x+6)$ ohms sont branchées en parallèle, donc $\\dfrac1R=\\dfrac1x+\\dfrac1{2x+6}$. a) Écris $R$ sous forme d'une seule fraction. b) Trouve $R$ lorsque $x=3$ et montre qu'elle est plus petite que chacune des deux résistances.",
    ]],
  ]),
  build(5, "Radicaux et expressions équivalentes", [
    [K, [
      "Simplifie $\\sqrt{288}$.",
      "Simplifie $3\\sqrt{50}-2\\sqrt{18}+\\sqrt8$.",
      "Développe et simplifie $(4-\\sqrt3)(2+3\\sqrt3)$.",
    ]],
    [H, [
      "Rationalise le dénominateur de $\\dfrac{7}{5-\\sqrt{11}}$ et simplifie complètement ta réponse.",
      "Trouve des entiers $a$ et $b$ tels que $(a+b\\sqrt2)^2=17+12\\sqrt2$, puis écris $\\sqrt{17+12\\sqrt2}$ sous sa forme la plus simple. Vérifie à la calculatrice.",
    ]],
    [C, [
      "Un élève écrit $\\sqrt8+\\sqrt2=\\sqrt{10}$. Utilise des valeurs décimales pour montrer que l'affirmation est fausse, explique l'erreur et écris la bonne somme simplifiée.",
      "Explique ce que signifie « rationaliser un dénominateur », pourquoi multiplier le haut et le bas par le même nombre ne change pas la valeur d'une fraction, et pourquoi le conjugué fonctionne pour un dénominateur binôme. Prends $\\dfrac{6}{\\sqrt3}$ comme exemple et vérifie à la calculatrice.",
    ]],
    [A, [
      "Un écran rectangulaire mesure 20 cm sur 10 cm. a) Trouve la longueur exacte de sa diagonale sous sa forme la plus simple. b) Donne la diagonale au dixième de centimètre près. c) On dispose d'un câble de 22 cm; est-il assez long pour longer la diagonale? Justifie à l'aide de ta valeur exacte.",
      "Un rectangle a des côtés de $(3+\\sqrt2)$ cm et de $(3-\\sqrt2)$ cm. a) Montre que son aire est exactement 7 cm². b) Trouve la longueur exacte de sa diagonale. c) Trouve l'aire exacte du triangle rectangle formé par la diagonale et deux côtés.",
      "Sur une carte (unités en km), le point $A$ est en $(1,2)$ et le point $B$ est en $(7,6)$. a) Trouve la distance exacte $AB$ sous sa forme la plus simple. b) Un drone vole de $A$ à $B$ à une vitesse de $\\sqrt{13}$ km par heure; montre que le trajet dure exactement 2 heures. c) Donne la distance décimale arrondie à 2 décimales.",
    ]],
  ]),
];
