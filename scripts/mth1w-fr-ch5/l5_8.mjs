// MTH1W-FR 5.8 — L'aire totale (format autonome) : développements, prismes, cylindres, pyramides, cônes (apothème), sphères
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { fig, prism, triPrism, cone, pyramid, prismNet, cylinderNet } from "../mth1w-ch5/figs5.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "5.8 L'aire totale";
export const ID = lessonId(5, 8);

export const blocks = () => [
  intro({
    icon: "📦",
    title: "L'aire totale",
    overview: String.raw`L'aire totale est l'aire de toutes les faces d'un solide — le carton d'une boîte, l'étiquette d'une boîte de conserve, la peinture sur un mur, les bardeaux d'un toit. La méthode fiable consiste à déplier le solide en un <strong>développement</strong> et à additionner les aires de ses morceaux. Pour les pyramides et les cônes, tu auras besoin de l'<strong>apothème</strong>, qu'on obtient avec le théorème de Pythagore.`,
    goals: [
      "tracer ou imaginer le développement d'un prisme, d'un cylindre, d'une pyramide et d'un cône;",
      "trouver l'aire totale de prismes et de cylindres, y compris de contenants ouverts;",
      "trouver l'apothème d'une pyramide ou d'un cône à l'aide du théorème de Pythagore;",
      "trouver l'aire totale de pyramides, de cônes et de sphères;",
      "résoudre des problèmes sur des solides composés et expliquer pourquoi un agrandissement de facteur \\(k\\) multiplie l'aire totale par \\(k^2\\).",
    ],
    curriculum: "E1.4 (effet de la modification des dimensions sur l'aire totale), E1.6 (résoudre des problèmes portant sur l'aire totale de prismes, de pyramides, de cylindres, de cônes et de sphères)",
    prior: [
      [String.raw`Aire d'un triangle de base \(6\) et de hauteur \(5\) ?`, String.raw`\(15\).`],
      [String.raw`Circonférence d'un cercle de rayon \(4\) ?`, String.raw`\(8\pi\approx25.1\).`],
      [String.raw`Hypoténuse si les cathètes mesurent \(5\) et \(12\) ?`, String.raw`\(13\).`],
    ],
    words: [
      ["Aire totale (AT)", "aire de toutes les surfaces extérieures", "\\(\\text{cm}^2\\)"],
      ["Développement", "un patron plat qui se plie pour former le solide", ""],
      ["Aire latérale", "aire des côtés seulement (sans les bases)", "l'étiquette d'une boîte de conserve"],
      ["Apothème s", "hauteur d'une face d'une pyramide ou d'un cône, mesurée le long de la face", "\\(s=\\sqrt{h^2+r^2}\\)"],
      ["Hauteur h", "distance perpendiculaire entre la base et l'apex", "\\(h\\ne s\\)"],
    ],
  }),

  section("📌 Développements : déplier et additionner", String.raw`
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;align-items:center;">
  ${fig({ w: 300, items: prismNet(6, 3, 4) }, "Développement d'un prisme de 6 × 3 × 4 : trois paires de rectangles égaux.")}
  ${fig({ w: 220, items: cylinderNet(2, 5) }, "Développement d'un cylindre : la surface latérale se déroule en un rectangle de longueur 2πr.")}
  </div>
  ${table(["Solide", "Aire totale"], [
    ["prisme à base rectangulaire", "\\(SA=2lw+2lh+2wh\\)"],
    ["tout prisme", "2 × (aire de la base) + (périmètre de la base) × hauteur"],
    ["cylindre", "\\(SA=2\\pi r^2+2\\pi rh\\)"],
  ])}
  ${keyIdea(String.raw`L'aire totale est l'aire du développement. Pour un contenant <strong>ouvert</strong> (sans couvercle), omets une face; pour un solide posé au sol, omets ce qui est caché. Lis la question pour décider quelles faces comptent.`)}`),

  widget("netExplorer", { init: "prism" }),

  section("📌 Pyramides et cônes : l'apothème", String.raw`
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;">
  ${fig({ w: 210, items: pyramid(6, 4, { lb: "b", lh: "h", ls: "s" }) }, "s² = h² + (b/2)²")}
  ${fig({ w: 180, items: cone(3, 4, { lr: "r", lh: "h", ls: "s" }) }, "s² = h² + r²")}
  </div>
  ${keyIdea(String.raw`Pyramide à base carrée : \(SA=b^2+4\big(\tfrac12bs\big)=b^2+2bs\). Cône : \(SA=\pi r^2+\pi rs\). Sphère : \(SA=4\pi r^2\). L'apothème \(s\) est l'hypoténuse d'un triangle rectangle dont les cathètes sont la hauteur \(h\) et la moitié de la base (pyramide) ou le rayon (cône).`)}
  ${watchOut([
    "Les faces triangulaires utilisent l'apothème s, pas la hauteur h du solide.",
    "Cône : l'aire latérale πrs utilise l'apothème; la base πr² utilise le rayon.",
    "Boîte ou conserve ouverte : soustrais la face manquante.",
    "Un agrandissement de facteur k multiplie l'aire totale par k² (c'est une aire).",
  ])}`),

  widget("netExplorer", { init: "cone" }),

  examples([
    ["Une boîte-cadeau", String.raw`Quelle quantité de papier d'emballage recouvre une boîte de \(30\) cm sur \(20\) cm sur \(8\) cm, sans chevauchement ?`,
      [String.raw`<b>Idée.</b> L'aire totale est l'aire de toutes les faces (déplie la boîte en son développement). Une boîte a 6 faces rectangulaires formant 3 paires identiques.`,
        String.raw`<b>Dessus et dessous :</b> \(2(30\times20)=2(600)=1200\ \text{cm}^2\).`,
        String.raw`<b>Devant et arrière :</b> \(2(30\times8)=2(240)=480\ \text{cm}^2\).`,
        String.raw`<b>Deux extrémités :</b> \(2(20\times8)=2(160)=320\ \text{cm}^2\).`,
        String.raw`<b>Total :</b> \(1200+480+320=2000\ \text{cm}^2\).`,
        String.raw`<b>Vérifier avec la formule</b> \(SA=2(lw+lh+wh)\) : \(2(600+240+160)=2(1000)=2000\) ✓.`],
      String.raw`\(2000\ \text{cm}^2\)`,
      fig({ w: 260, items: prism(30, 20, 8, { ll: "30 cm", lw: "20 cm", lh: "8 cm" }) })],
    ["Une tente (prisme à base triangulaire)", String.raw`Les extrémités triangulaires d'une tente ont une base de \(3\) m et une hauteur de \(2\) m; les côtés inclinés mesurent \(2.5\) m; la tente mesure \(4\) m de long. Trouve la quantité de toile nécessaire, plancher compris.`,
      [String.raw`<b>Faces.</b> 2 triangles (les extrémités) et 3 rectangles (deux côtés inclinés et le plancher).`,
        String.raw`<b>Vérifier le côté incliné.</b> La hauteur partage la base en \(1.5\) et \(1.5\), donc selon Pythagore la pente mesure \(\sqrt{1.5^2+2^2}=\sqrt{6.25}=2.5\) m ✓.`,
        String.raw`<b>Deux triangles :</b> \(2\times\tfrac12(3)(2)=6\ \text{m}^2\).`,
        String.raw`<b>Trois rectangles</b>, chacun de \(4\) m de long, de largeurs \(2.5\), \(2.5\) et \(3\) : \(4\times(2.5+2.5+3)=4\times8=32\ \text{m}^2\).`,
        String.raw`<b>Total :</b> \(6+32=38\ \text{m}^2\). Sans le plancher : \(38-4\times3=38-12=26\ \text{m}^2\).`],
      String.raw`\(38\ \text{m}^2\) (\(26\ \text{m}^2\) sans le plancher)`,
      fig({ w: 260, items: triPrism(3, 2, 4, { lb: "3 m", lt: "2 m", lL: "4 m", ax: 1.5 }) })],
    ["Une boîte de conserve ouverte", String.raw`Une boîte de conserve sans couvercle a un rayon de \(4\) cm et une hauteur de \(10\) cm. Trouve l'aire du métal utilisé.`,
      [String.raw`<b>Développement d'un cylindre.</b> Deux cercles et un rectangle. La largeur du rectangle est la circonférence \(2\pi r\), parce qu'il fait une fois le tour du cercle : \[SA=2\pi r^2+2\pi rh\]`,
        String.raw`<b>Pas de couvercle</b>, donc on utilise un seul cercle : \(\pi(4)^2=16\pi\).`,
        String.raw`<b>Côté (rectangle) :</b> \(2\pi(4)\times10=8\pi\times10=80\pi\).`,
        String.raw`<b>Total :</b> \(16\pi+80\pi=96\pi\approx301.6\ \text{cm}^2\).`],
      String.raw`\(96\pi\approx301.6\ \text{cm}^2\)`,
      fig({ w: 240, items: cylinderNet(4, 10, { lr: "r = 4", lh: "10 cm", lc: "2π(4)" }) })],
    ["Une pyramide à base carrée", String.raw`Une pyramide a une base carrée de \(10\) m de côté et une hauteur de \(12\) m. Trouve son aire totale.`,
      [String.raw`<b>Faces.</b> Une base carrée et quatre triangles égaux. La hauteur de chaque triangle est l'<b>apothème</b> \(s\), pas la hauteur de la pyramide.`,
        String.raw`<b>Apothème.</b> La hauteur \(12\), la moitié de la base \(5\) et \(s\) forment un triangle rectangle : \(s=\sqrt{12^2+5^2}=\sqrt{144+25}=\sqrt{169}=13\) m.`,
        String.raw`<b>Base :</b> \(10^2=100\ \text{m}^2\).`,
        String.raw`<b>Quatre triangles :</b> \(4\times\tfrac12(10)(13)=4\times65=260\ \text{m}^2\).`,
        String.raw`<b>Total :</b> \(100+260=360\ \text{m}^2\).`],
      String.raw`\(360\ \text{m}^2\)`,
      fig({ w: 220, items: pyramid(10, 12, { lb: "10 m", lh: "12 m", ls: "s" }) })],
    ["Un cône", String.raw`Un cône a un rayon de \(5\) cm et une hauteur de \(12\) cm. Trouve son aire totale.`,
      [String.raw`<b>Formule.</b> \[SA=\pi r^2+\pi rs\] (base \(+\) surface courbe), où \(s\) est l'apothème.`,
        String.raw`<b>Apothème.</b> Le rayon, la hauteur et l'apothème forment un triangle rectangle : \(s=\sqrt{5^2+12^2}=\sqrt{25+144}=\sqrt{169}=13\) cm.`,
        String.raw`<b>Surface courbe :</b> \(\pi(5)(13)=65\pi\). <b>Base :</b> \(\pi(5)^2=25\pi\).`,
        String.raw`<b>Total :</b> \(65\pi+25\pi=90\pi\approx282.7\ \text{cm}^2\).`],
      String.raw`\(90\pi\approx282.7\ \text{cm}^2\)`,
      fig({ w: 180, items: cone(5, 12, { lr: "5 cm", lh: "12 cm", ls: "s" }) })],
  ]),

  practice([
    q("cube", String.raw`Trouve l'aire totale d'un cube d'arête \(7\) cm.`, num(294),
      "Six faces carrées égales.", [String.raw`\(6\times7^2=6\times49=294\).`], String.raw`\(294\ \text{cm}^2\)`),
    q("cylindre", String.raw`Trouve l'aire totale d'un cylindre fermé de rayon \(3\) cm et de hauteur \(10\) cm, au centième près.`, num(245.04, 0.006),
      "AT = 2πr² + 2πrh.", [String.raw`\(18\pi+60\pi=78\pi\approx245.04\).`], String.raw`\(\approx245.04\ \text{cm}^2\)`),
    q("pyramide", String.raw`Une pyramide à base carrée a une base de \(6\) m de côté et un apothème de \(5\) m. Trouve son aire totale.`, num(96),
      "Base b² plus quatre triangles ½bs.", [String.raw`\(36+4\times\tfrac12(6)(5)=36+60=96\).`], String.raw`\(96\ \text{m}^2\)`),
    q("sphère", String.raw`Trouve l'aire totale d'une sphère de rayon \(10\) cm, au centième près.`, num(1256.64, 0.006),
      "AT = 4πr².", [String.raw`\(4\pi(100)=400\pi\approx1256.64\).`], String.raw`\(\approx1256.64\ \text{cm}^2\)`),
    q("agrandissement", String.raw`On triple chaque longueur d'un solide. Par quel nombre son aire totale est-elle multipliée ?`, num(9),
      "L'aire totale est une aire : facteur k².", [String.raw`\(3^2=9\).`], String.raw`\(9\)`),
  ]),

  wrapUp({
    qas: [
      ["Quelle est la différence entre h et s ?", "h descend tout droit de l'apex jusqu'au centre de la base, à l'intérieur du solide. s descend le long du milieu d'une face jusqu'au bord de la base. s est toujours plus long, et s² = h² + (b/2)² ou s² = h² + r²."],
      ["Pourquoi la surface courbe d'un cône vaut-elle πrs ?", "Déroulée, c'est un secteur d'un cercle de rayon s. Son arc doit faire le tour de la base, donc sa longueur est 2πr; l'aire d'un secteur est ½ × arc × rayon = ½(2πr)(s) = πrs."],
      ["Quand dois-je omettre des faces ?", "Quand elles ne sont pas couvertes par le matériau : une boîte ouverte n'a pas de couvercle, une tente peut ne pas avoir de plancher, et les faces collées l'une à l'autre dans un solide composé sont cachées."],
      ["Quelle forme contient le plus avec le moins de matériau ?", "Pour un volume fixe, la sphère a la plus petite aire totale. Parmi les cylindres, le meilleur a une hauteur égale à son diamètre (h = 2r); parmi les boîtes, c'est le cube."],
      ["Si je double chaque longueur, qu'arrive-t-il à l'AT et à V ?", "L'AT est multipliée par 2² = 4 et V par 2³ = 8. Le volume augmente plus vite que l'aire totale — c'est une des raisons pour lesquelles les gros animaux perdent leur chaleur plus lentement."],
    ],
    summary: [
      "AT = aire du développement; omets les faces ouvertes ou cachées.",
      "Prisme : 2(base) + (périmètre de la base)(hauteur); cylindre 2πr² + 2πrh.",
      "Pyramide b² + 2bs; cône πr² + πrs; sphère 4πr².",
      "Apothème avec Pythagore; un agrandissement de facteur k multiplie l'AT par k².",
    ],
    next: "En 5.9, tu réviseras tout le chapitre.",
  }),
];
