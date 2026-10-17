// MTH1W 5.1 — Geometry & Measurement Through History (self-study format)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { fig, rightTri, polygon } from "./figs5.mjs";

export const TITLE = "5.1 Geometry & Measurement Through History";

export const blocks = () => [
  intro({
    icon: "🏛️",
    title: "Geometry & Measurement Through History",
    overview: String.raw`Geometry means “earth measuring”. Long before algebra, people in Egypt, Mesopotamia, India, China, Greece and the Americas needed to lay out fields, build walls at right angles, share land fairly and track the sky. In this lesson you will meet the ideas they discovered — many of which you still use every day — and check their methods with modern mathematics.`,
    goals: [
      "describe how several cultures developed geometric and measurement ideas, and why;",
      "explain how a knotted rope can make a right angle (3-4-5) and check it with the Pythagorean relationship;",
      "convert a Babylonian base-60 number to a decimal;",
      "follow Eratosthenes' method for estimating Earth's circumference;",
      "explain how Archimedes trapped π between two polygons and compare historical values of π.",
    ],
    curriculum: "E1.1 (geometric and measurement relationships developed in various cultures)",
    prior: [
      [String.raw`Evaluate \(3^2+4^2\).`, String.raw`\(9+16=25=5^2\).`],
      [String.raw`What fraction of a full turn is \(36^\circ\)?`, String.raw`\(\frac{36}{360}=\frac{1}{10}\).`],
      [String.raw`Write \(\frac{1}{4}\) as a decimal.`, String.raw`\(0.25\).`],
    ],
    words: [
      ["Circumference", "the distance around a circle", "\\(C=\\pi d\\)"],
      ["π (pi)", "circumference ÷ diameter, the same for every circle", "\\(\\pi\\approx3.14159\\)"],
      ["Base 60 (sexagesimal)", "place values 1, 1/60, 1/3600, …", "60 min in an hour"],
      ["Approximation", "a value close to, but not exactly, the true value", "\\(\\tfrac{22}{7}\\approx\\pi\\)"],
      ["Conjecture", "a statement believed true but not yet proved", "“all right triangles…”"],
    ],
  }),

  section("📌 Right angles from a rope (Egypt, India, China)", String.raw`
  <p>Egyptian surveyors re-marked fields after each Nile flood. A rope with <strong>12 equal spaces</strong> marked by knots, pulled into a triangle with sides \(3\), \(4\) and \(5\) spaces, gives a right angle at the corner between the sides of \(3\) and \(4\). Indian builders' manuals (the <em>Śulba Sūtras</em>, for laying out fire altars) and the Chinese <em>Zhoubi Suanjing</em> (the “gougu” rule) describe the same relationship. Babylonian scribes listed whole-number triples on a clay tablet (Plimpton 322) around 1800 BCE, more than a thousand years before Pythagoras.</p>
  ${fig({ w: 300, items: rightTri(4, 3, { la: "4 spaces", lb: "3 spaces", lc: "5 spaces", fill: "amber" }) }, "12 knotted spaces pulled into 3, 4, 5 make a right angle.")}
  ${keyIdea(String.raw`If the sides satisfy \(a^2+b^2=c^2\), the angle between \(a\) and \(b\) is a right angle. Any multiple of \(3, 4, 5\) (such as \(6, 8, 10\)) works too.`)}`),

  section("📌 Base 60 and the circle (Mesopotamia)", String.raw`
  <p>Babylonian mathematicians wrote numbers in <strong>base 60</strong>. That is why an hour has \(60\) minutes, a minute has \(60\) seconds and a circle has \(360^\circ=6\times60\). The tablet YBC 7289 shows a square with its diagonal labelled \(1;24,51,10\), which means</p>
  \[1+\frac{24}{60}+\frac{51}{60^2}+\frac{10}{60^3}\approx1.414213,\]
  <p>an approximation of \(\sqrt2\approx1.414214\) correct to about six decimal places — nearly 4000 years ago.</p>
  ${table(["Place", "Value", "Like decimals'"], [["units", "1", "ones"], ["first place after ;", "\\(\\frac{1}{60}\\)", "tenths"], ["second place", "\\(\\frac{1}{3600}\\)", "hundredths"]])}`),

  section("📌 Measuring the Earth (Greece, about 240 BCE)", String.raw`
  <p>Eratosthenes knew that at noon on midsummer day the Sun shone straight down a well in Syene, while in Alexandria, about \(5000\) stadia to the north, a vertical stick cast a shadow showing the Sun was \(7.2^\circ\) from vertical. Because the Sun's rays are parallel, \(7.2^\circ\) is also the angle at Earth's centre between the two cities.</p>
  ${keyIdea(String.raw`\(\dfrac{\text{angle}}{360^\circ}=\dfrac{\text{arc length}}{\text{circumference}}\). Since \(7.2^\circ\) is \(\tfrac{1}{50}\) of \(360^\circ\), the circumference is \(50\times5000=250\,000\) stadia.`)}
  <p>Historians are not sure of the length of his stadion; with about \(160\) m it gives \(40\,000\) km — very close to the modern \(40\,075\) km at the equator.</p>`),

  section("📌 Pinning down π (Egypt, Greece, China, India)", String.raw`
  <p>Every culture that built round things needed the ratio \(\pi=\dfrac{C}{d}\). The Egyptian Rhind papyrus (about 1650 BCE) finds a circle's area by squaring \(\tfrac89\) of its diameter, which amounts to \(\pi\approx3.16\). Archimedes (Greece, about 250 BCE) drew regular polygons inside and outside a circle: the circle's perimeter must lie between theirs. With \(96\) sides he proved \(3\tfrac{10}{71}<\pi<3\tfrac17\).</p>
  ${table(["Who", "When", "Value of π", "Decimal"], [
    ["Rhind papyrus (Egypt)", "≈ 1650 BCE", "\\(\\tfrac{256}{81}\\)", "3.1605"],
    ["Archimedes (Greece)", "≈ 250 BCE", "between \\(\\tfrac{223}{71}\\) and \\(\\tfrac{22}{7}\\)", "3.1408 to 3.1429"],
    ["Zu Chongzhi (China)", "≈ 480 CE", "\\(\\tfrac{355}{113}\\)", "3.1415929"],
    ["Aryabhata (India)", "499 CE", "\\(\\tfrac{62\\,832}{20\\,000}\\)", "3.1416"],
  ])}
  <p>Use the explorer: increase the number of sides and watch the two polygons squeeze the circle.</p>`),

  widget("piPolygon"),

  section("📌 Measurement around the world", String.raw`
  <p>Early length units came from the body: the Egyptian <strong>cubit</strong> (elbow to fingertip), the hand, the foot, the pace. They differed from person to person, so rulers kept official measuring rods. The <strong>metric system</strong> (France, 1790s) based units on powers of ten, and today the metre is defined by the speed of light, so it is the same everywhere. Many Indigenous peoples of Turtle Island used body-based and natural measures too, and structures such as the tipi (a cone of poles) and the snow-block dome show practical geometry: strong shapes built from local materials.</p>
  ${watchOut([
    "A historical value of π is an approximation; π itself never ends or repeats.",
    "Base-60 places are 1/60, 1/3600, … — not tenths and hundredths.",
    "Equal knot spacing matters: the rope gives a right angle only if the spaces are equal.",
  ])}`),

  examples([
    ["The knotted rope", String.raw`A rope has \(24\) equal spaces. Can it make a right angle, and with which side lengths?`,
      [String.raw`Double the \(3, 4, 5\) triangle: \(6+8+10=24\) spaces.`, String.raw`Check: \(6^2+8^2=36+64=100=10^2\) ✓`],
      String.raw`yes: sides of \(6\), \(8\) and \(10\) spaces; the right angle is between the \(6\) and \(8\) sides`,
      fig({ w: 280, items: rightTri(8, 6, { la: "8", lb: "6", lc: "10", fill: "amber" }) })],
    ["The Egyptian circle", String.raw`The Rhind papyrus finds the area of a circle with diameter \(9\) by drawing a square with side \(\tfrac89\times9\). Compare it with \(\pi r^2\).`,
      [String.raw`Square side \(=\tfrac89\times9=8\), so the Egyptian area is \(8^2=64\).`, String.raw`Modern area: \(r=4.5\), \(\pi(4.5)^2=20.25\pi\approx63.62\).`, String.raw`Difference \(\approx0.38\), about \(0.6\%\) too big.`],
      String.raw`\(64\) compared with \(\approx63.62\): very close`],
    ["A Babylonian number", String.raw`Convert the base-60 number \(2;15\) (two units and \(15\) sixtieths) to a decimal. Then convert \(2.15\) hours to hours and minutes.`,
      [String.raw`\(2;15=2+\frac{15}{60}=2+0.25=2.25\).`, String.raw`\(2.15\) h \(=2\) h \(+\,0.15\times60\) min \(=2\) h \(9\) min — not \(2\) h \(15\) min!`],
      String.raw`\(2;15=2.25\); \(2.15\) h \(=2\) h \(9\) min`],
    ["Eratosthenes' method", String.raw`Two towns are \(600\) km apart north–south. At the same moment the Sun is \(5.4^\circ\) further from vertical in the northern town. Estimate Earth's circumference.`,
      [String.raw`Fraction of a full turn: \(\frac{5.4}{360}=0.015\).`, String.raw`\(600\) km is \(0.015\) of the circumference, so \(C=\frac{600}{0.015}=40\,000\) km.`],
      String.raw`about \(40\,000\) km`],
    ["Comparing values of π", String.raw`Write \(\tfrac{22}{7}\) and \(\tfrac{355}{113}\) as decimals. Which is closer to \(\pi=3.14159265\ldots\)?`,
      [String.raw`\(\tfrac{22}{7}\approx3.142857\): off by about \(0.00126\).`, String.raw`\(\tfrac{355}{113}\approx3.1415929\): off by about \(0.0000003\).`],
      String.raw`\(\tfrac{355}{113}\) is about \(4000\) times closer`],
  ]),

  practice([
    q("rope", String.raw`A rope with equal knots is pulled into a triangle with sides of \(5\), \(12\) and \(13\) spaces. Is there a right angle?`, choice(["yes", "no"], 0),
      String.raw`Compare \(5^2+12^2\) with \(13^2\).`, [String.raw`\(25+144=169=13^2\).`], "yes"),
    q("Egypt", String.raw`Using the Egyptian rule (square of \(\tfrac89\) of the diameter), what area does the papyrus give for a circle with diameter \(18\)?`, num(256),
      String.raw`Side of the square = \(\tfrac89\times18\).`, [String.raw`\(\tfrac89\times18=16\); \(16^2=256\).`], String.raw`\(256\)`),
    q("base 60", String.raw`Write the Babylonian number \(1;30\) (one unit and \(30\) sixtieths) as a decimal.`, num(1.5),
      String.raw`\(30\) sixtieths \(=\frac{30}{60}\).`, [String.raw`\(1+\frac{30}{60}=1.5\).`], String.raw`\(1.5\)`),
    q("Eratosthenes", String.raw`The Sun's angle differs by \(9^\circ\) between two places \(1000\) km apart on the same meridian. What circumference does this give (km)?`, num(40000),
      String.raw`\(9^\circ\) is what fraction of \(360^\circ\)?`, [String.raw`\(\frac{9}{360}=\frac1{40}\); \(40\times1000=40\,000\).`], String.raw`\(40\,000\) km`),
    q("Archimedes", String.raw`Archimedes' lower bound for π was \(\tfrac{223}{71}\). Write it as a decimal to \(4\) decimal places.`, num(3.1408, 0.00006),
      "Divide 223 by 71.", [String.raw`\(223\div71\approx3.14085\).`], String.raw`\(3.1408\)`),
  ]),

  wrapUp({
    qas: [
      ["Did Pythagoras discover the Pythagorean theorem?", "No. Babylonian, Indian and Chinese mathematicians used the relationship centuries earlier. The Greek school of Pythagoras is credited with an early general proof."],
      ["Why do we still use 360° and 60 minutes?", "They come from Babylonian base-60 astronomy. 60 and 360 have many factors (2, 3, 4, 5, 6, 10, 12, …), which makes fractions of a turn or an hour easy."],
      ["How could Eratosthenes measure the Earth without travelling around it?", "He used one angle and one distance. The angle between the cities, as a fraction of 360°, equals their distance as a fraction of the whole circumference."],
      ["Why can't we write π exactly as a fraction?", "π is irrational: its decimals never end or repeat. Fractions like 22/7 and 355/113 are only approximations."],
      ["Why did the world adopt the metric system?", "Body-based units varied. Metric units are defined precisely and convert by powers of ten, so scientists and traders everywhere get the same results."],
    ],
    summary: [
      "Many cultures used a² + b² = c² (3-4-5) to make right angles.",
      "Base 60 survives in 60 minutes and 360°.",
      "Eratosthenes: angle/360° = arc/circumference.",
      "Archimedes trapped π between inside and outside polygons; π ≈ 3.14159.",
    ],
    next: "5.2 uses triangle and circle properties to analyse and create designs.",
  }),
];
