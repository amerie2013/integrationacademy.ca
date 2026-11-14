// Fiche 5.3 — Unités et conversion d'unités (édition enseignant)
import { figT } from "./figT.mjs";
import { rect, prism } from "../../mth1w-ch5/figs5.mjs";

const RULE = String.raw`\textbf{Règle :} vers une unité plus petite $\Rightarrow$ multiplie; vers une unité plus grande $\Rightarrow$ divise.`;
const EXAMPLES = [
  { title: "Une chaîne métrique", q: String.raw`Convertis $0.065$ km en cm et $3\,450$ mg en g.`,
    steps: [RULE + String.raw` Faits : $1$ km $=1000$ m, $1$ m $=100$ cm, $1$ g $=1000$ mg.`,
      String.raw`\textbf{De km à m :} $0.065\times1000=65$ m.`,
      String.raw`\textbf{De m à cm :} $65\times100=6500$ cm.`,
      String.raw`\textbf{De mg à g} (unité plus grande, on divise) : $3450\div1000=3.45$ g.`],
    ans: String.raw`$6500$ cm; $3.45$ g` },
  { title: "Longueurs impériales mixtes", q: String.raw`Une planche mesure $8$ pi $9$ po de long. Écris sa longueur en pouces, en pieds (nombre décimal) et en mètres.`,
    steps: [String.raw`\textbf{Faits :} $1$ pi $=12$ po, $1$ po $=2.54$ cm.`,
      String.raw`\textbf{Pouces :} $8\times12=96$ po, plus $9$ : $96+9=105$ po.`,
      String.raw`\textbf{Pieds en décimal :} $105\div12=8.75$ pi (les $9$ po valent $\frac{9}{12}=0.75$ pi).`,
      String.raw`\textbf{Mètres :} $105\times2.54=266.7$ cm; $266.7\div100=2.667$ m.`],
    ans: String.raw`$105$ po $=8.75$ pi $\approx2.67$ m` },
  { title: "Du métrique à l'impérial", q: String.raw`Un panneau de sentier indique $12$ km. Combien de milles cela fait-il ? Combien de pieds ?`,
    steps: [String.raw`\textbf{Milles :} $1$ mi $\approx1.609$ km; un mille est plus grand, donc on divise : $12\div1.609\approx7.46$ mi.`,
      String.raw`\textbf{Pieds :} $12$ km $=12\,000$ m et $1$ pi $=0.3048$ m : $12\,000\div0.3048\approx39\,370$ pi.`,
      String.raw`\textbf{Vérification :} $7.46\times5280\approx39\,390$ pi, c'est proche \checkmark`],
    ans: String.raw`environ $7.46$ mi, environ $39\,370$ pi` },
  { title: "Unités d'aire : des cm$^2$ aux m$^2$", q: String.raw`Une affiche mesure $84$ cm sur $59.4$ cm. Trouve son aire en cm$^2$ et en m$^2$.`,
    fig: figT(rect(8.4, 5.94, { lw: "84 cm", lh: "59.4 cm" }), 4),
    steps: [String.raw`\textbf{Formule} $A=lw$ : $84\times59.4=4989.6$ cm$^2$.`,
      String.raw`\textbf{Unités carrées :} $1$ m$^2=100$ cm $\times100$ cm $=10\,000$ cm$^2$.`,
      String.raw`\textbf{Convertir :} $4989.6\div10\,000\approx0.50$ m$^2$.`,
      String.raw`\textbf{Vérifier} en mètres d'abord : $0.84\times0.594=0.49896$ \checkmark`],
    ans: String.raw`$4989.6$ cm$^2\approx0.5$ m$^2$` },
  { title: "Des pieds carrés aux mètres carrés", q: String.raw`Un appartement est annoncé avec une superficie de $750$ pi$^2$. Convertis-la en m$^2$.`,
    fig: figT(rect(3, 3, { lw: "1 pi = 0.3048 m", lh: "1 pi" }), 2.6),
    steps: [String.raw`\textbf{Fait de longueur :} $1$ pi $=0.3048$ m.`,
      String.raw`\textbf{Élever au carré pour l'aire :} $1$ pi$^2=0.3048\times0.3048\approx0.0929$ m$^2$.`,
      String.raw`\textbf{Convertir :} $750\times0.0929\approx69.7$ m$^2$.`],
    ans: String.raw`environ $69.7$ m$^2$` },
  { title: "Unités de volume", q: String.raw`Convertis $2.4$ m$^3$ en cm$^3$ et en litres.`,
    fig: figT(prism(3, 3, 3, { ll: "100 cm", lw: "100 cm", lh: "100 cm" }), 2.8),
    steps: [String.raw`\textbf{Élever au cube :} $1$ m $=100$ cm, donc $1$ m$^3=100\times100\times100=1\,000\,000$ cm$^3$.`,
      String.raw`\textbf{Convertir :} $2.4\times1\,000\,000=2\,400\,000$ cm$^3$.`,
      String.raw`\textbf{Litres :} $1000$ cm$^3=1$ L, donc $2\,400\,000\div1000=2400$ L.`,
      String.raw`\textbf{Vérification :} $1$ m$^3=1000$ L et $2.4\times1000=2400$ \checkmark`],
    ans: String.raw`$2\,400\,000$ cm$^3=2400$ L` },
  { title: "Du béton pour un patio", q: String.raw`Une dalle de patio mesure $4$ m sur $3.5$ m et a $10$ cm d'épaisseur. Combien de mètres cubes de béton faut-il ?`,
    fig: figT(prism(4, 3.5, 0.6, { ll: "4 m", lw: "3.5 m", lh: "10 cm" }), 4.5),
    steps: [String.raw`\textbf{Les mêmes unités d'abord :} l'épaisseur est en cm. $10$ cm $=10\div100=0.1$ m.`,
      String.raw`\textbf{Formule} $V=lwh$ : $V=4\times3.5\times0.1=1.4$ m$^3$.`],
    ans: String.raw`$1.4$ m$^3$` },
  { title: "Convertir un taux", q: String.raw`Une sprinteuse court $100$ m en $10.5$ s. Trouve sa vitesse moyenne en km/h.`,
    steps: [String.raw`\textbf{Vitesse} $=\frac{\text{distance}}{\text{temps}}=\frac{100}{10.5}\approx9.524$ m/s.`,
      String.raw`\textbf{Convertir avec des fractions égales à 1 :} $9.524\times\frac{3600\ \text{s}}{1\ \text{h}}\times\frac{1\ \text{km}}{1000\ \text{m}}\approx34.3$ km/h.`,
      String.raw`\textbf{Vérification rapide :} m/s $\times3.6=$ km/h : $9.524\times3.6\approx34.3$ \checkmark`],
    ans: String.raw`environ $34.3$ km/h` },
  { title: "La consommation d'essence", q: String.raw`Une voiture consomme $7.8$ L aux $100$ km. Exprime cette consommation en milles par gallon américain.`,
    steps: [String.raw`\textbf{But :} milles par gallon $=\frac{\text{milles}}{\text{gallons}}$. Convertis chaque partie.`,
      String.raw`\textbf{Distance :} $100\div1.609\approx62.14$ mi.`,
      String.raw`\textbf{Essence :} $1$ gal $\approx3.785$ L : $7.8\div3.785\approx2.061$ gal.`,
      String.raw`\textbf{Diviser :} $62.14\div2.061\approx30.2$ mi/gal.`],
    ans: String.raw`environ $30$ mi/gal` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Convertis : (a) $5.2$ m en mm (b) $780$ cm en km (c) $0.35$ L en mL.`, recap: "5.2 m, 780 cm, 0.35 L.", ans: String.raw`(a) $5200$ mm (b) $0.0078$ km (c) $350$ mL` },
  { level: 1, q: String.raw`Convertis : (a) $4$ pi $3$ po en pouces (b) $63$ po en pieds et pouces (c) $2.5$ vg en pieds.`, recap: "Longueurs impériales.", ans: String.raw`(a) $51$ po (b) $5$ pi $3$ po (c) $7.5$ pi` },
  { level: 1, q: String.raw`Convertis $3$ m$^2$ en cm$^2$ et $45\,000$ cm$^3$ en L.`, recap: "3 m², 45 000 cm³.", ans: String.raw`$30\,000$ cm$^2$; $45$ L` },
  { level: 2, q: String.raw`Un bâton de hockey mesure $63$ po de long. Convertis cette longueur en cm et en m.`, recap: "Bâton de 63 po.", ans: String.raw`$160.02$ cm $\approx1.60$ m` },
  { level: 2, q: String.raw`Une chambre mesure $12$ pi sur $10$ pi $6$ po. Trouve l'aire du plancher en pi$^2$ et en m$^2$.`, recap: "Chambre de 12 pi × 10 pi 6 po.", ans: String.raw`$126$ pi$^2\approx11.7$ m$^2$` },
  { level: 2, q: String.raw`Une piscine mesure $25$ m de long, $12$ m de large et $1.5$ m de profondeur en moyenne. Combien de litres d'eau contient-elle ?`, recap: "Piscine de 25 × 12 × 1.5.", ans: String.raw`$450$ m$^3=450\,000$ L` },
  { level: 2, q: String.raw`Convertis $65$ mi/h en km/h et en m/s.`, recap: "65 mi/h.", ans: String.raw`$\approx104.6$ km/h $\approx29.1$ m/s` },
  { level: 2, q: String.raw`La peinture couvre $9.5$ m$^2$ par litre. Combien de litres faut-il pour un mur de $380$ cm sur $250$ cm (deux couches) ?`, recap: "Peinture en deux couches.", ans: String.raw`$9.5$ m$^2$ par couche, $19$ m$^2$ : $2$ L` },
  { level: 3, space: 5, q: String.raw`Une recette américaine utilise $2.5$ lb de farine et $3$ tasses de lait ($1$ tasse $\approx236.6$ mL).
(a) Convertis la farine en kg et le lait en L.
(b) Tu n'as que $800$ g de farine. Quelle fraction de la recette peux-tu faire, et combien de lait te faudra-t-il ?`, recap: "Recette américaine.", ans: String.raw`(a) $1.13$ kg; $0.71$ L (b) $0.8\div1.134\approx0.71$ de la recette; $\approx0.50$ L de lait` },
  { level: 3, space: 5, q: String.raw`Une terrasse mesure $16$ pi sur $12$ pi. La teinture pour terrasse est vendue en contenants de $3.78$ L qui couvrent $28$ m$^2$ chacun.
(a) Trouve l'aire de la terrasse en m$^2$.
(b) Combien de contenants faut-il pour deux couches ?`, recap: "Teinture pour terrasse.", ans: String.raw`(a) $192$ pi$^2\approx17.8$ m$^2$ (b) $35.7$ m$^2$ : $2$ contenants` },
  { level: 3, space: 5, q: String.raw`Explique pourquoi $1$ m$^3$ ne vaut pas $100$ cm$^3$. Fais un dessin ou décris une image. Convertis ensuite $0.75$ m$^3$ en cm$^3$ et en mL.`, recap: "Pourquoi 1 m³ ≠ 100 cm³.", ans: String.raw`chacune des $3$ dimensions mesure $100$ cm : $100^3=1\,000\,000$; $750\,000$ cm$^3=750\,000$ mL` },
  { level: 3, space: 5, q: String.raw`La lumière parcourt environ $300\,000$ km/s.
(a) Quelle distance parcourt-elle en une année ($365.25$ jours) ? Donne ta réponse en notation scientifique.
(b) La Lune est à environ $384\,400$ km. Combien de temps sa lumière met-elle pour nous parvenir ?`, recap: "Année-lumière.", ans: String.raw`(a) $\approx9.47\times10^{12}$ km (b) $\approx1.28$ s` },
  { level: 3, space: 5, q: String.raw`Un réservoir rectangulaire de $80$ cm sur $45$ cm sur $50$ cm est rempli par un tuyau qui débite $12$ L/min.
(a) Trouve sa capacité en litres.
(b) Combien de temps faut-il pour le remplir ? Donne la réponse en minutes et en secondes.`, recap: "Réservoir et tuyau.", ans: String.raw`(a) $180\,000$ cm$^3=180$ L (b) $15$ min` },
];

export const WS = {
  code: "5.3",
  title: "Unités et conversion d'unités",
  bigideas: String.raw`Toute mesure est un nombre \emph{et} une unité. Pour changer d'unité, multiplie par un facteur de conversion égal à $1$ --- comme $\frac{100\ \text{cm}}{1\ \text{m}}$ ou $\frac{2.54\ \text{cm}}{1\ \text{po}}$ --- avec l'unité voulue au numérateur. Les unités d'aire et de volume changent selon le carré et le cube du facteur de longueur : $1$ m$^2=10\,000$ cm$^2$ et $1$ m$^3=1\,000\,000$ cm$^3$. Le volume et la capacité se rejoignent : $1$ cm$^3=1$ mL.`,
  goals: ["Convertir à l'intérieur du système métrique.", "Convertir des longueurs impériales, et entre le système impérial et le système métrique.", "Convertir des unités d'aire et de volume.", "Relier le volume et la capacité.", "Convertir des taux comme des km/h et des m/s."],
  curriculum: "E1.3",
  vocab: [["Facteur de conversion", "une fraction égale à 1 qui change les unités"], ["Unités impériales", "po, pi, vg, mi, lb, gal"], ["Capacité", "quantité que contient un contenant (L, mL)"], ["Taux", "comparaison de quantités exprimées dans des unités différentes"]],
  hook: String.raw`Montrez l'étiquette de prix d'une pièce de bois (\$ par pied-planche), un panneau d'autoroute canadien en km et un panneau américain en milles. Demandez : « Combien font $100$ km/h en milles à l'heure ? Faites une estimation, puis calculons-le. »`,
  concepts: [
    ["1. L'échelle métrique", String.raw`k, h, da, (base), d, c, m : chaque échelon vaut $\times10$. Unité plus petite $\Rightarrow$ nombre plus grand.`],
    ["2. Les facteurs de conversion", String.raw`$5$ pi $\times\dfrac{12\ \text{po}}{1\ \text{pi}}\times\dfrac{2.54\ \text{cm}}{1\ \text{po}}=152.4$ cm. Les unités s'annulent comme des facteurs.`],
    ["3. Aire et volume", String.raw`Facteur de longueur $k$ $\Rightarrow$ facteur d'aire $k^2$, facteur de volume $k^3$. $1$ pi$^2=144$ po$^2$; $1$ m$^2=10\,000$ cm$^2$; $1$ m$^3=1000$ L.
${figT([...rect(3, 3, { lw: "1 m", lh: "1 m", fill: "#eff6ff" }), ...[1, 2].flatMap((k) => [{ seg: [[k, 0], [k, 3]], color: "#93c5fd", width: 1 }, { seg: [[0, k], [3, k]], color: "#93c5fd", width: 1 }])], 3.2)}`],
  ],
  tips: ["Demandez aux élèves d'écrire les unités sur chaque ligne.", "Surveillez la confusion « diviser ou multiplier ? » : ce sont les unités qui s'annulent qui décident.", "Les élèves utilisent souvent 100 pour passer des m² aux cm²; dessinez le quadrillage de 100 × 100.", "Convertissez dans la même unité avant de multiplier des dimensions (cm et m).", "N'arrondissez qu'à la fin."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
