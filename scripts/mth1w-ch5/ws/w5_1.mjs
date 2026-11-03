// Worksheet 5.1 — Geometry & Measurement Through History (teacher edition)
import { figT } from "./figT.mjs";
import { rightTri, polygon } from "../figs5.mjs";

const reg = (n, R = 1, rot = 90) => Array.from({ length: n }, (_, i) => [R * Math.cos(((rot + (360 * i) / n) * Math.PI) / 180), R * Math.sin(((rot + (360 * i) / n) * Math.PI) / 180)]);

const CONV = String.raw`\textbf{Rule (converse of Pythagoras):} if $a^2+b^2=c^2$, the angle opposite $c$ is $90^\circ$.`;
const EXAMPLES = [
  { title: "A 30-knot rope", q: String.raw`A rope has $30$ equal spaces between knots. Which right triangle can it form, using a multiple of $3$-$4$-$5$?`,
    fig: figT(rightTri(12, 5, { la: "12", lb: "5", lc: "13", fill: "amber" }), 3.2),
    steps: [CONV,
      String.raw`\textbf{Try $3$-$4$-$5$:} it uses $3+4+5=12$ spaces; $30\div12=2.5$, giving $7.5$, $10$, $12.5$. Knots only fall on whole spaces, so this fails.`,
      String.raw`\textbf{Try another triple} with perimeter 30: $5+12+13=30$ \checkmark`,
      String.raw`\textbf{Check the right angle:} $5^2+12^2=25+144=169=13^2$ \checkmark. It is between the $5$ and $12$ sides.`],
    ans: String.raw`sides $5$, $12$, $13$ spaces (right angle between $5$ and $12$)` },
  { title: "Plimpton 322 triples", q: String.raw`Babylonian scribes listed triples such as $(119, 120, 169)$. Show it is a Pythagorean triple.`,
    steps: [String.raw`\textbf{Rule:} $(a,b,c)$ is a Pythagorean triple when $a^2+b^2=c^2$.`,
      String.raw`\textbf{Legs:} $119^2=14\,161$ and $120^2=14\,400$; sum $=28\,561$.`,
      String.raw`\textbf{Hypotenuse:} $169^2=28\,561$.`,
      String.raw`\textbf{Compare:} equal, so it is a Pythagorean triple \checkmark`],
    ans: "yes: the squares of the legs add to the square of 169" },
  { title: "Base 60 to decimal", q: String.raw`Write the Babylonian number $3;7,30$ as a decimal.`,
    steps: [String.raw`\textbf{Place values in base 60:} units, then sixtieths ($\frac1{60}$), then $\frac1{3600}$ ($60\times60$).`,
      String.raw`\textbf{Expand:} $3;7,30=3+\frac{7}{60}+\frac{30}{3600}$.`,
      String.raw`\textbf{Common denominator:} $\frac{30}{3600}=\frac{1}{120}$ and $\frac{7}{60}=\frac{14}{120}$, so the fraction part is $\frac{15}{120}=\frac18=0.125$.`,
      String.raw`\textbf{Result:} $3+0.125=3.125$.`],
    ans: "$3.125$" },
  { title: "Decimal to base 60", q: String.raw`Write $1.75$ hours in hours and minutes, and $2.6^\circ$ in degrees and minutes.`,
    steps: [String.raw`\textbf{Facts:} $1$ h $=60$ min and $1^\circ=60'$ (minutes of arc). Keep the whole part; multiply the decimal part by 60.`,
      String.raw`\textbf{Hours:} $0.75\times60=45$, so $1.75$ h $=1$ h $45$ min.`,
      String.raw`\textbf{Degrees:} $0.6\times60=36$, so $2.6^\circ=2^\circ36'$.`,
      String.raw`\textbf{Check:} $\frac{45}{60}=0.75$ \checkmark and $\frac{36}{60}=0.6$ \checkmark`],
    ans: String.raw`$1$ h $45$ min; $2^\circ36'$` },
  { title: "Eratosthenes with modern numbers", q: String.raw`Two cities on the same meridian are $890$ km apart. At noon on the same day the Sun's angle from vertical differs by $8^\circ$. Estimate Earth's circumference and radius.`,
    steps: [String.raw`\textbf{Proportion:} the Sun's rays are parallel, so the $8^\circ$ is also the angle at Earth's centre, and $\frac{\text{arc}}{C}=\frac{\text{angle}}{360^\circ}$.`,
      String.raw`\textbf{Fraction:} $\frac{8}{360}=\frac{1}{45}$, so $890$ km is $\frac1{45}$ of $C$.`,
      String.raw`\textbf{Circumference:} $C=45\times890=40\,050$ km.`,
      String.raw`\textbf{Radius:} $C=2\pi r$, so $r=\frac{C}{2\pi}=\frac{40\,050}{2\pi}\approx6374$ km.`],
    ans: String.raw`$C\approx40\,050$ km, $r\approx6374$ km` },
  { title: "Archimedes' hexagons", q: String.raw`A circle has diameter $1$. The inside regular hexagon has side $0.5$; the outside one has side $\frac{1}{\sqrt3}\approx0.5774$. What bounds on $\pi$ do they give?`,
    fig: figT([{ circle: [0, 0, 1], color: "ink" }, { poly: reg(6, 1, 0), fill: "none", color: "blue" }, { poly: reg(6, 1 / Math.cos(Math.PI / 6), 30), fill: "none", color: "amber" }], 3.6),
    steps: [String.raw`\textbf{Idea:} the circle lies between the two hexagons, so its circumference is between their perimeters.`,
      String.raw`\textbf{Inside hexagon:} its side equals the radius $0.5$ (six equilateral triangles); perimeter $6\times0.5=3$.`,
      String.raw`\textbf{Outside hexagon:} perimeter $6\times0.5774\approx3.464$.`,
      String.raw`\textbf{Circle:} $C=\pi d=\pi\times1=\pi$, so $3<\pi<3.464$.`],
    ans: String.raw`$3<\pi<3.464$` },
  { title: "Egyptian area rule", q: String.raw`The Rhind papyrus rule squares $\frac89$ of the diameter. For a field with diameter $27$ m, compare the rule with $\pi r^2$ and find the value of $\pi$ the rule implies.`,
    steps: [String.raw`\textbf{Egyptian rule:} side $\frac89\times27=24$; area $24^2=576$ m$^2$.`,
      String.raw`\textbf{Modern formula} $A=\pi r^2$ with $r=27\div2=13.5$: $\pi(13.5)^2=182.25\pi\approx572.6$ m$^2$.`,
      String.raw`\textbf{Implied $\pi$:} the rule says $\pi r^2=576$, so $\pi=576\div182.25\approx3.1605$.`],
    ans: String.raw`$576$ vs $572.6$ m$^2$; $\pi\approx3.16$` },
  { title: "Comparing approximations", q: String.raw`Find the percent error of $3.16$ (Egypt) and $3.1416$ (Aryabhata) compared with $\pi$.`,
    steps: [String.raw`\textbf{Formula:} percent error $=\frac{|\text{approx}-\text{true}|}{\text{true}}\times100\%$, with $\pi\approx3.14159265$.`,
      String.raw`\textbf{Egypt:} $3.16-3.14159\approx0.01841$; $\frac{0.01841}{3.14159}\times100\%\approx0.59\%$.`,
      String.raw`\textbf{Aryabhata:} $3.1416-3.14159265\approx0.0000074$; $\frac{0.0000074}{3.14159}\times100\%\approx0.0002\%$.`],
    ans: String.raw`about $0.6\%$ and $0.0002\%$` },
  { title: "A cubit conversion", q: String.raw`An Egyptian royal cubit was about $52.4$ cm. The Great Pyramid's base side is about $440$ cubits. Convert to metres.`,
    steps: [String.raw`\textbf{Cubits to cm:} each cubit is $52.4$ cm, so multiply: $440\times52.4=23\,056$ cm.`,
      String.raw`\textbf{cm to m:} $1$ m $=100$ cm, so divide: $23\,056\div100=230.56$ m.`,
      String.raw`\textbf{Reasonable?} The modern measured side is about $230$ m \checkmark`],
    ans: String.raw`about $230.6$ m` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Show that a rope pulled into sides of $9$, $12$ and $15$ equal spaces makes a right angle.`, recap: "9, 12, 15 rope.", ans: String.raw`$81+144=225=15^2$ ✓` },
  { level: 1, q: String.raw`Convert the base-60 number $2;20$ to a decimal and $0.4$ hours to minutes.`, recap: "2;20 and 0.4 h.", ans: String.raw`$2.\overline{3}$; $24$ min` },
  { level: 1, q: String.raw`Write $\frac{22}{7}$ and $\frac{355}{113}$ as decimals to $5$ places. Which cultures used each?`, recap: "22/7 and 355/113.", ans: String.raw`$3.14286$ (Archimedes' upper bound, Greece); $3.14159$ (Zu Chongzhi, China)` },
  { level: 2, q: String.raw`The Sun's rays make angles differing by $6^\circ$ at two places $667$ km apart north--south. Estimate Earth's circumference.`, recap: "6° over 667 km.", ans: String.raw`$60\times667=40\,020$ km` },
  { level: 2, q: String.raw`Use the Egyptian rule to estimate the area of a circle with diameter $36$ cm. Compare with $\pi r^2$.`, recap: "Egyptian rule, d = 36.", ans: String.raw`$32^2=1024$ cm$^2$ vs $324\pi\approx1017.9$ cm$^2$` },
  { level: 2, q: String.raw`Convert the Babylonian $\sqrt2$ value $1;24,51,10$ to a decimal (6 places) and find its difference from $\sqrt2=1.414214$.`, recap: "1;24,51,10.", ans: String.raw`$1.414213$; difference about $0.000001$` },
  { level: 2, q: String.raw`A regular octagon is drawn inside a circle of diameter $10$ cm. Each side measures $3.83$ cm. What estimate of $\pi$ does its perimeter give?`, recap: "Octagon in a circle, d = 10.", ans: String.raw`$8\times3.83=30.64$; $30.64\div10\approx3.06$` },
  { level: 2, q: String.raw`Is $(20, 99, 101)$ a Pythagorean triple? Show your work.`, recap: "(20, 99, 101).", ans: String.raw`$400+9801=10\,201=101^2$: yes` },
  { level: 3, space: 5, q: String.raw`Eratosthenes measured $7.2^\circ$ over $5000$ stadia.
(a) Find his circumference in stadia.
(b) If a stadion was $157.5$ m, what is his value in km?
(c) Find the percent error compared with $40\,075$ km.`, recap: "Eratosthenes in km.", ans: String.raw`(a) $250\,000$ stadia (b) $39\,375$ km (c) about $1.7\%$ low` },
  { level: 3, space: 5, q: String.raw`Explain why a rope with $12$ equal spaces can make a right angle but a rope with $11$ equal spaces cannot make a $3$-$4$-$5$ shape. Find the smallest number of spaces, other than $12$, that can make a right triangle with whole-number sides.`, recap: "Which ropes make right angles?", ans: String.raw`3-4-5 needs $12$ spaces (or multiples); $11$ is not a multiple of a triple's perimeter. Next: $24$ ($6,8,10$); $30$ ($5,12,13$) is the next new triple` },
  { level: 3, space: 5, q: String.raw`Archimedes used a $96$-gon. For a circle of diameter $1$ the inside $96$-gon has perimeter $3.14103$ and the outside $96$-gon has perimeter $3.14271$.
(a) Write the bounds for $\pi$.
(b) Show that $3\frac{10}{71}$ and $3\frac17$ lie just outside these bounds.
(c) Why did Archimedes use fractions instead of decimals?`, recap: "Archimedes' 96-gon.", ans: String.raw`(a) $3.14103<\pi<3.14271$ (b) $3.14085<3.14103$ and $3.14286>3.14271$, so his fractions are safe (slightly wider) bounds (c) decimal notation was not yet in use` },
  { level: 3, space: 5, q: String.raw`A clock face is divided using Babylonian base 60.
(a) How many degrees does the minute hand turn in $1$ minute? The hour hand?
(b) Find the angle between the hands at $3{:}30$.`, recap: "Clock angles.", ans: String.raw`(a) $6^\circ$; $0.5^\circ$ (b) minute hand at $180^\circ$, hour hand at $105^\circ$: $75^\circ$` },
  { level: 3, space: 5, q: String.raw`Research task: choose one culture (for example Egyptian, Babylonian, Indian, Chinese, Greek, Islamic, Mayan or Indigenous peoples of Turtle Island). Describe one geometry or measurement idea it used, what problem it solved, and how it compares with the method we use today.`, recap: "Culture research.", ans: "Answers vary: e.g. Mayan calendar astronomy, Islamic geometric tiling, Śulba Sūtra altar construction, tipi cone geometry; must name the idea, the purpose and a comparison" },
];

export const WS = {
  code: "5.1",
  title: "Geometry & Measurement Through History",
  bigideas: String.raw`Geometry grew from practical needs: re-marking fields, building square corners, tracking the Sun and stars, sharing land. Many cultures discovered the same truths independently --- the $3$-$4$-$5$ right angle, the constant ratio $\pi$, base-60 angle measure --- and each improved the tools for measuring. Today's formulas are the result of thousands of years of shared work.`,
  goals: ["Describe geometry and measurement ideas from several cultures.", "Use a knotted rope and Pythagorean triples to make right angles.", "Convert between base 60 and decimals.", "Apply Eratosthenes' angle--arc method.", "Compare historical values of $\\pi$."],
  curriculum: "E1.1",
  vocab: [["Pythagorean triple", "whole numbers with $a^2+b^2=c^2$"], ["Base 60", "place values 1, 1/60, 1/3600"], ["Circumference", "distance around a circle, $C=\\pi d$"], ["Approximation", "a value close to the exact value"]],
  hook: String.raw`Hand each group a loop of string with $12$ equally spaced marks (or a strip of paper). Ask: “Without a protractor or set square, make a perfect right angle.” After a few minutes, reveal the Egyptian $3$-$4$-$5$ method and check it with a corner of a book.`,
  concepts: [
    ["1. Right angles from triples", String.raw`If $a^2+b^2=c^2$, the triangle has a right angle between $a$ and $b$. Multiples of a triple are triples: $(3,4,5)\to(6,8,10)\to(9,12,15)$.
${figT(rightTri(4, 3, { la: "4", lb: "3", lc: "5", fill: "amber" }), 4)}`],
    ["2. Base 60", String.raw`$a;b,c$ means $a+\frac{b}{60}+\frac{c}{3600}$. It survives in $60$ minutes, $60$ seconds and $360^\circ$.`],
    ["3. Eratosthenes", String.raw`$\dfrac{\text{angle}}{360^\circ}=\dfrac{\text{arc length}}{\text{circumference}}$, because parallel Sun rays make the angle at the centre equal to the shadow angle.`],
    ["4. $\\pi$ between polygons", String.raw`Perimeter of the inside polygon $<\pi d<$ perimeter of the outside polygon. More sides give tighter bounds.
${figT([{ circle: [0, 0, 1], color: "ink" }, { poly: reg(8, 1), fill: "none", color: "blue" }, { poly: reg(8, 1 / Math.cos(Math.PI / 8), 90 + 22.5), fill: "none", color: "amber" }], 3.4)}`],
  ],
  tips: ["Insist on equal spacing: unequal knots break the method.", "Base-60 digits are separated by commas; the semicolon marks the units.", "Point out that π itself is never exactly a fraction.", "Connect Eratosthenes to the proportion idea students know from ratios.", "Invite students to share measurement traditions from their own cultures."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
