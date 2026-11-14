// MCV4U-FR chapitre 2 — devoirs : 12 questions chacun — Connaissance et compréhension 1-3, Habiletés de la pensée 4-5,
// Communication 6-7, Mise en application 8-10, Niveau difficile 11-12. [[clé|légende]] est remplacé par une figure (SVG).
// Miroir de ../../mcv4u-ch2/asg/assignments.mjs; seuls les titres d'axes des figures de 2.6 contiennent des mots.
import { planeDoc, P } from "../bank/fig.mjs";
import { asgId } from "../../mcv4u-fr/common.mjs";
import { TITLE as T1 } from "../l2_1.mjs";
import { TITLE as T2 } from "../l2_2.mjs";
import { TITLE as T3 } from "../l2_3.mjs";
import { TITLE as T4 } from "../l2_4.mjs";
import { TITLE as T5 } from "../l2_5.mjs";
import { TITLE as T6 } from "../l2_6.mjs";

const S = String.raw;
const dv = (t) => `Devoir ${t.replace(/^(\d\.\d) /, "$1 — ")}`;
const grid = (view, step) => planeDoc({ view, ...(step ? { step } : {}) });
/** courbe rationnelle coupée à ses asymptotes verticales */
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};

export const ASSIGNMENTS = [
  { code: "2.1", id: asgId(2, 1), title: dv(T1), figs: {
      tan: planeDoc({ view: { xmin: -1.5, xmax: 3, ymin: -3, ymax: 14 }, curves: [{ f: (x) => 2 * x ** 3 - x * x, color: "violet" }], points: [P(2, 12)], step: { x: 0.5, y: 2 } }),
      sk: planeDoc({ view: { xmin: -1.5, xmax: 3.5, ymin: -2, ymax: 6 }, curves: [{ f: (x) => -(x ** 3) + 3 * x * x, color: "violet" }], points: [P(0, 0), P(2, 4)], step: { x: 0.5, y: 1 } }),
      gridD: grid({ xmin: -1.5, xmax: 3.5, ymin: -6, ymax: 4 }, { x: 0.5, y: 1 }) }, lines: [
    "Connaissance et compréhension",
    S`1. Dérive \(f(x)=6x^5-4x^3+9x-11\).`,
    S`2. Dérive \(y=\dfrac{5}{x^4}-3\sqrt x\). Récris d'abord sous forme de puissances.`,
    S`3. Trouve la pente de la tangente à \(y=2x^3-x^2\) au point indiqué \(x=2\), puis écris l'équation de la tangente. [[tan|Graphique de la question 3]]`,
    "Habiletés de la pensée",
    S`4. Trouve tous les points de \(y=x^3-9x^2+15x+4\) où la tangente est horizontale.`,
    S`5. Trouve \(k\) pour que la droite \(y=4x+k\) soit tangente à la parabole \(y=x^2\). Explique chaque étape.`,
    "Communication",
    S`6. Explique pourquoi \(\frac{d}{dx}\left(cx^n\right)=cnx^{n-1}\), et pourquoi \(\frac{d}{dx}\left(x^3\cdot x^4\right)\ne3x^2\cdot4x^3\).`,
    S`7. Voici le graphique de \(f(x)=-x^3+3x^2\). Sur la grille vide, esquisse \(f'\) et explique comment ses zéros et ses signes correspondent au graphique de \(f\). [[sk|Graphique de f pour la question 7]] [[gridD|Grille pour ton esquisse de f′]]`,
    "Mise en application",
    S`8. Une pierre lâchée d'un pont tombe de \(d(t)=4.9t^2\) m en \(t\) s. Trouve sa vitesse après 2 s et après 3.5 s.`,
    S`9. Un cube a une arête de \(x\) cm. Trouve le taux de variation de son volume par rapport à \(x\) lorsque \(x=5\), et explique la signification de ce nombre.`,
    S`10. La population d'une ville sera \(P(t)=0.2t^3-3t^2+20t+500\) dans \(t\) années. Trouve \(P'(5)\) et \(P'(10)\), puis interprète les deux valeurs.`,
    "Niveau difficile",
    S`11. Trouve les équations de toutes les tangentes à \(y=x^3-3x^2\) qui sont parallèles à la droite \(y=9x\).`,
    S`12. Montre que chaque tangente à \(y=\dfrac1x\) (\(x\gt0\)) forme avec les axes un triangle d'aire 2.`,
  ] },
  { code: "2.2", id: asgId(2, 2), title: dv(T2), figs: {
      g: planeDoc({ view: { xmin: -2, xmax: 3.5, ymin: -2, ymax: 6 }, curves: [{ f: (x) => (x + 1) * (x - 2) ** 2, color: "violet" }], step: { x: 0.5, y: 1 } }),
      rect: planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 5 }, segs: [{ pts: [[0.5, 0.5], [4, 0.5], [4, 3], [0.5, 3], [0.5, 0.5]], color: "blue" }, { pts: [[4, 0.5], [5, 0.5], [5, 3.8], [0.5, 3.8], [0.5, 3]], color: "green" }, { pts: [[4, 3], [4, 3.8]], color: "gray" }, { pts: [[4, 3], [5, 3]], color: "gray" }], step: { x: 1, y: 1 } }) }, lines: [
    "Connaissance et compréhension",
    S`1. Utilise la règle du produit pour dériver \(y=(3x+2)(x^2-5)\). Vérifie en développant.`,
    S`2. Dérive \(y=x^5(2x-7)\) et simplifie.`,
    S`3. \(f(4)=-2\), \(f'(4)=3\), \(g(4)=5\), \(g'(4)=1\). Trouve \((fg)'(4)\).`,
    "Habiletés de la pensée",
    S`4. Voici le graphique de \(y=(x+1)(x-2)^2\). Utilise la règle du produit pour trouver les points où la tangente est horizontale, puis vérifie-les sur le graphique. [[g|Graphique de la question 4]]`,
    S`5. Trouve \(y'(0)\) pour \(y=(x+1)(x-1)(2x+3)\) à l'aide de la règle du produit à trois facteurs.`,
    "Communication",
    S`6. Un rectangle de côtés \(u\) et \(v\) s'agrandit jusqu'à des côtés \(u+\Delta u\) et \(v+\Delta v\) (en vert). Utilise l'illustration pour expliquer pourquoi \((uv)'=u'v+uv'\). [[rect|Rectangle de la question 6]]`,
    S`7. Un élève écrit \(\frac{d}{dx}\left[(x^2+1)x^3\right]=2x\cdot3x^2\). Explique l'erreur et donne la bonne dérivée.`,
    "Mise en application",
    S`8. Un jardin mesure \(15+0.5t\) m de longueur et \(8+0.2t\) m de largeur après \(t\) jours. À quel rythme son aire varie-t-elle en \(t=10\)?`,
    S`9. Un théâtre demande 18 dollars par billet et augmente le prix de 0.25 dollar par semaine, alors que l'assistance est de 1200 personnes et diminue de 10 par semaine. À quel rythme le revenu hebdomadaire varie-t-il?`,
    S`10. Un dépôt contiendra \(n(t)=500+20t\) barils de pétrole valant chacun \(p(t)=70-0.4t\) dollars dans \(t\) jours. Trouve le taux de variation de la valeur totale en \(t=5\).`,
    "Niveau difficile",
    S`11. \(f(x)=x\,g(x)\), où \(g(3)=-2\) et où \(g\) a une tangente horizontale en \(x=3\). Trouve l'équation de la tangente à \(f\) en \(x=3\).`,
    S`12. Utilise deux fois la règle du produit pour montrer que \(\frac{d}{dx}\left[f(x)\right]^3=3\left[f(x)\right]^2f'(x)\). Utilise ce résultat pour dériver \((x^2+1)^3\) en \(x=1\).`,
  ] },
  { code: "2.3", id: asgId(2, 3), title: dv(T3), figs: {
      s: planeDoc({ view: { xmin: 0, xmax: 4.3, ymin: -1, ymax: 5 }, curves: [{ f: (t) => -(t ** 3) + 6 * t * t - 9 * t + 4, a: 0, b: 4.3, color: "violet" }], step: { x: 0.5, y: 1 }, xlabel: "t (s)", ylabel: "s (m)" }),
      v: planeDoc({ view: { xmin: 0, xmax: 7, ymin: -3, ymax: 11 }, curves: [{ f: (t) => t * t - 7 * t + 10, a: 0, b: 7, color: "blue" }], step: { x: 1, y: 1 }, xlabel: "t (s)", ylabel: "v (m/s)" }) }, lines: [
    "Connaissance et compréhension",
    S`1. Pour \(s(t)=t^3-4t^2+2t\) m, trouve \(v(t)\), \(a(t)\), \(v(2)\) et \(a(2)\).`,
    S`2. Trouve \(f''(x)\) pour \(f(x)=2x^4-5x^3+x\), puis évalue \(f''(-1)\).`,
    S`3. Voici le graphique de la position d'un objet. Indique quand il est au repos et quand il se déplace dans le sens positif. [[s|Graphique de la position pour la question 3]]`,
    "Habiletés de la pensée",
    S`4. Pour \(s(t)=t^3-7.5t^2+12t\), trouve les intervalles où l'objet accélère (le module de sa vitesse augmente) et ceux où il ralentit.`,
    S`5. On lance une balle d'une hauteur de 1.5 m, avec \(h(t)=-4.9t^2+14.7t+1.5\). Trouve sa hauteur maximale et sa vitesse au moment où elle touche le sol.`,
    "Communication",
    "6. Explique la différence entre la vitesse et le module de la vitesse, et entre le déplacement et la distance parcourue, en prenant comme exemple un aller-retour à pied à l'école.",
    S`7. Voici le graphique de la vitesse \(v(t)=t^2-7t+10\). Décris le mouvement : le sens, les moments où l'objet s'arrête, et quand il accélère ou ralentit. [[v|Graphique de la vitesse pour la question 7]]`,
    "Mise en application",
    S`8. Une voiture qui freine parcourt \(s(t)=30t-3t^2\) m après le début du freinage. Quand s'arrête-t-elle, et quelle distance parcourt-elle?`,
    S`9. Un plongeur de falaise se trouve à \(h(t)=28-4.9t^2\) m au-dessus de l'eau. Trouve le temps qu'il met pour atteindre l'eau et sa vitesse à l'entrée dans l'eau.`,
    S`10. Pour \(s(t)=t^4-8t^3+18t^2\), trouve les instants où l'accélération est nulle et la vitesse à chacun de ces instants.`,
    "Niveau difficile",
    S`11. Pour \(s(t)=t^3-9t^2+15t+3\) m, trouve la distance totale parcourue de \(t=0\) à \(t=6\).`,
    S`12. Trouve la dérivée \(n\)-ième de \(x^n\). Explique pourquoi la dérivée \((n+1)\)-ième de tout polynôme de degré \(n\) est 0.`,
  ] },
  { code: "2.4", id: asgId(2, 4), title: dv(T4), figs: {
      t: planeDoc({ view: { xmin: -3, xmax: 3, ymin: -40, ymax: 20 }, curves: [{ f: (x) => (x * x - 5) ** 3, color: "violet" }], points: [P(2, -1)], step: { x: 0.5, y: 10 } }),
      h: planeDoc({ view: { xmin: -1, xmax: 5.5, ymin: -32, ymax: 12 }, curves: [{ f: (x) => x * (x - 4) ** 3, color: "violet" }], step: { x: 0.5, y: 4 } }) }, lines: [
    "Connaissance et compréhension",
    S`1. Dérive \(y=(4x-3)^5\).`,
    S`2. Dérive \(y=\sqrt{x^3+2}\) et \(y=\dfrac{1}{(5-x)^2}\).`,
    S`3. \(y=u^4\) et \(u=x^2-x\). Trouve \(\frac{dy}{dx}\) en \(x=2\) à l'aide de la notation de Leibniz.`,
    "Habiletés de la pensée",
    S`4. Trouve l'équation de la tangente à \(y=(x^2-5)^3\) au point indiqué \(x=2\). [[t|Graphique de la question 4]]`,
    S`5. \(f(2)=1\), \(f'(2)=4\), \(g(1)=2\), \(g'(1)=-3\). Trouve \((f\circ g)'(1)\) et \((g\circ f)'(2)\).`,
    "Communication",
    "6. Un avion monte à un rythme constant, et la température de l'air diminue à mesure que l'altitude augmente. Utilise cette situation pour expliquer pourquoi les taux se multiplient dans la règle de dérivation en chaîne.",
    S`7. Un élève écrit \(\frac{d}{dx}(x^2+1)^5=5(2x)^4\). Explique les deux erreurs et donne la bonne dérivée.`,
    "Mise en application",
    S`8. Le rayon d'une nappe de pétrole circulaire est \(r=2t+1\) m après \(t\) h. À quel rythme son aire augmente-t-elle en \(t=3\)?`,
    S`9. La température de l'air est \(T=20-0.0065h\) °C à l'altitude \(h\) m, et un avion monte selon \(h=150t\) (\(t\) en s). Trouve \(\frac{dT}{dt}\) et explique sa signification.`,
    S`10. Le coût de production de \(x\) unités est \(C(x)=50\sqrt{x^2+900}\) dollars. Trouve le coût marginal en \(x=40\).`,
    "Niveau difficile",
    S`11. Voici le graphique de \(y=x(x-4)^3\). Trouve tous les points où la tangente est horizontale et explique le comportement différent en chacun d'eux. [[h|Graphique de la question 11]]`,
    S`12. Montre que \(\frac{d}{dx}\sqrt{f(x)}=\dfrac{f'(x)}{2\sqrt{f(x)}}\). Utilise ce résultat pour trouver la tangente à \(y=\sqrt{x^2+x+2}\) en \(x=1\).`,
  ] },
  { code: "2.5", id: asgId(2, 5), title: dv(T5), figs: {
      r: planeDoc({ view: { xmin: -5, xmax: 12, ymin: -10, ymax: 24 }, curves: rat((x) => (x * x + 7) / (x - 3), [3], { xmin: -5, xmax: 12 }), vlines: [{ x: 3, color: "red", dash: true }], step: { x: 1, y: 2 } }),
      d: planeDoc({ view: { xmin: -5, xmax: 7, ymin: -8, ymax: 10 }, curves: rat((x) => (x + 5) / (x - 1), [1], { xmin: -5, xmax: 7 }), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], step: { x: 1, y: 2 } }) }, lines: [
    "Connaissance et compréhension",
    S`1. Dérive \(y=\dfrac{5x-1}{x+2}\).`,
    S`2. Dérive \(y=\dfrac{x^2}{x^2+3}\) à l'aide de la règle du quotient, et \(y=\dfrac{x+1}{\sqrt x}\) en la récrivant d'abord.`,
    S`3. \(f(1)=3\), \(f'(1)=-2\), \(g(1)=-1\), \(g'(1)=4\). Trouve \(\left(\frac fg\right)'(1)\).`,
    "Habiletés de la pensée",
    S`4. Voici le graphique de \(y=\dfrac{x^2+7}{x-3}\). Trouve les points où la tangente est horizontale et vérifie-les sur le graphique. [[r|Graphique de la question 4]]`,
    S`5. Trouve l'équation de la tangente à \(y=\dfrac{3x}{x^2+1}\) en \(x=2\).`,
    "Communication",
    S`6. Explique comment la règle du quotient découle de l'écriture \(\frac uv=u\cdot v^{-1}\) et de l'utilisation de la règle du produit et de la règle de dérivation en chaîne.`,
    S`7. Voici le graphique de \(y=\dfrac{x+5}{x-1}\). Utilise sa dérivée pour expliquer pourquoi la fonction est décroissante de chaque côté de \(x=1\), et pourquoi il est tout de même faux de dire qu'elle est « décroissante partout ». [[d|Graphique de la question 7]]`,
    "Mise en application",
    S`8. La concentration d'un médicament est \(C(t)=\dfrac{6t}{t^2+16}\) mg/L après \(t\) h. Trouve \(C'(2)\), ainsi que le moment et la valeur de la concentration la plus élevée.`,
    S`9. La production de \(x\) articles coûte \(800+2x+0.02x^2\) dollars. Trouve le nombre d'articles qui minimise le coût moyen, ainsi que ce minimum.`,
    S`10. Une population de poissons est \(P(t)=\dfrac{500+250t}{1+0.1t}\). Trouve \(P'(10)\) et décris ce qui arrive à \(P\) à long terme.`,
    "Niveau difficile",
    S`11. Trouve les points de \(y=\dfrac{2x}{x+3}\) où la tangente est parallèle à la droite \(y=\frac23x\).`,
    S`12. Pour \(f(x)=\dfrac{ax+b}{cx+d}\), montre que \(f'(x)=\dfrac{ad-bc}{(cx+d)^2}\). Quand \(f\) est-elle croissante sur chaque partie de son domaine?`,
  ] },
  { code: "2.6", id: asgId(2, 6), title: dv(T6), figs: {
      c: planeDoc({ view: { xmin: 0, xmax: 100, ymin: 0, ymax: 2600 }, curves: [{ f: (x) => 600 + 8 * x + 0.12 * x * x, a: 0, b: 100, color: "violet" }], points: [P(50, 1300)], step: { x: 10, y: 250 }, xlabel: "x (articles)", ylabel: "C (dollars)" }),
      p: planeDoc({ view: { xmin: 0, xmax: 1200, ymin: -4, ymax: 18 }, curves: [{ f: (x) => (60 * x - 0.05 * x * x - 2000) / 1000, a: 0, b: 1200, color: "violet" }], step: { x: 100, y: 2 }, xlabel: "x (articles)", ylabel: "P (milliers de dollars)" }) }, lines: [
    "Connaissance et compréhension",
    S`1. \(C(x)=1200+25x+0.03x^2\) dollars. Trouve le coût marginal en \(x=200\) et le coût réel du 201e article.`,
    S`2. \(R(x)=75x-0.15x^2\) dollars. Trouve \(R'(100)\) et le nombre d'articles pour lequel \(R'(x)=0\).`,
    S`3. Voici le graphique du coût \(C(x)=600+8x+0.12x^2\). Trace la tangente en \(x=50\), estime sa pente, puis vérifie à l'aide de \(C'(50)\). [[c|Graphique du coût pour la question 3]]`,
    "Habiletés de la pensée",
    S`4. \(R(x)=90x\) et \(C(x)=2000+30x+0.05x^2\). Trouve la fonction profit marginal et le profit maximal. Le graphique du profit est fourni. [[p|Graphique du profit pour la question 4]]`,
    S`5. La demande pour un produit est \(p=150-0.6x\) dollars. Trouve la quantité, le prix et le revenu qui maximisent le revenu.`,
    "Communication",
    "6. Explique, à l'aide d'une esquisse d'une courbe de coût et de sa tangente, pourquoi le coût marginal est proche du coût de production d'un article de plus.",
    "7. Explique pourquoi le coût fixe n'a aucun effet sur le coût marginal, mais qu'il influe sur le coût moyen.",
    "Mise en application",
    S`8. Un réservoir contient \(V(t)=40(12-t)^2\) L après \(t\) min. Trouve \(V'(4)\), ainsi que le moment où l'eau s'écoule à raison de 400 L par minute.`,
    S`9. La population d'une ville est \(P(t)=25000+800t-20t^2\). Trouve son taux de croissance en \(t=5\) ans, ainsi que le moment où la population atteint son maximum.`,
    S`10. La charge qui traverse un circuit est \(Q(t)=0.5t^3-2t^2+6t\) C. Trouve le courant \(I=Q'(t)\), ainsi que le moment où le courant est le plus faible.`,
    "Niveau difficile",
    S`11. \(C(x)=1000+5x+0.1x^2\). Trouve le niveau de production qui minimise le coût moyen, et montre qu'à ce niveau, le coût marginal est égal au coût moyen.`,
    S`12. Pour un gaz, \(P=\dfrac{800}{V}\) kPa. Le volume diminue de 4 L/min. À quel rythme la pression varie-t-elle lorsque \(V=20\) L?`,
  ] },
];
