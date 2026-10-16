// Worksheet 1.8 — Working with Ratios and Proportions (teacher edition)
import { tape, doubleLine, mapScale } from "./tikz.mjs";

export const WS = {
  code: "1.8",
  title: "Working with Ratios and Proportions",
  bigideas: String.raw`A \textbf{ratio} compares quantities in the \emph{same} unit; order matters. Multiplying or dividing every term by the same number gives an \textbf{equivalent ratio} --- the “recipe” stays the same. An equation between two ratios is a \textbf{proportion}; solve it with a scale factor, a unit amount, or cross-multiplication.`,
  goals: [
    "Write ratios in three forms and distinguish part-to-part from part-to-whole.",
    "Simplify ratios, including three-term ratios and ratios of decimals or fractions.",
    "Use ratio tables and double number lines to find equivalent ratios.",
    "Solve proportions by scale factor, unit amount and cross-multiplication.",
    "Share quantities in a given ratio and solve map and scale-drawing problems.",
  ],
  curriculum: "B3.5",
  book: "Nelson Principles of Mathematics 9, Ch. 1 (proportional reasoning)",
  vocab: [
    ["Ratio", "a comparison of quantities in the same unit: $a:b$, $a$ to $b$, $\\frac ab$"],
    ["Part-to-part / part-to-whole", "compares two parts / compares one part with the total"],
    ["Equivalent ratios", "ratios that compare in the same way: $3:4=9:12$"],
    ["Proportion", "an equation of two ratios: $\\frac{x}{15}=\\frac{2}{5}$"],
    ["Scale", "the ratio of a drawing length to the real length, e.g. $1:50\\,000$"],
  ],
  hook: String.raw`Mix two glasses of orange drink in front of the class: glass A with $2$ scoops of powder in $3$ cups of water, glass B with $3$ scoops in $5$ cups. Ask “Which is stronger?” Students argue: “B has more powder!” “A has less water!” Rewrite both as scoops per cup ($0.67$ vs $0.6$) or with a common term ($10:15$ vs $9:15$). Comparing ratios needs equivalent ratios --- that is today's lesson.`,
  concepts: [
    ["1. Writing ratios", String.raw`${tape([{ n: 3, label: "3 red", color: "red" }, { n: 5, label: "5 blue", color: "blue" }], { unit: 0.9, total: "8 marbles in total" })}
\textbf{Part-to-part:} red : blue $=3:5$. \quad \textbf{Part-to-whole:} red : all $=3:8$, so $\frac38$ of the marbles are red.\\
Order matters: blue : red is $5:3$. Units must match: $40$ cm to $2$ m is $40:200=1:5$.`],
    ["2. Equivalent ratios and simplest form", String.raw`Multiply or divide \emph{every} term by the same non-zero number.
\[24:36:60=2:3:5\ (\div12)\qquad 1.5:0.6=15:6=5:2\ (\times10,\ \div3)\qquad \tfrac12:\tfrac23=3:4\ (\times6)\]
A ratio is in simplest form when its terms are whole numbers with no common factor except $1$.`],
    ["3. Ratio tables and double number lines", String.raw`A paint colour is mixed $3$ cans blue to $4$ cans white.
\begin{center}\begin{tabular}{c|cccccc}blue & 3 & 6 & 9 & 12 & 15 & 18\\\hline white & 4 & 8 & 12 & 16 & 20 & 24\end{tabular}\end{center}
${doubleLine(3, 4, 6, { top: "blue cans", bottom: "white cans", mark: 4, caption: "Matching marks line up: 12 blue cans go with 16 white cans." })}`],
    ["4. Solving proportions", String.raw`To solve $\frac{x}{14}=\frac{9}{21}$:
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \textbf{Simplify then scale:} $\frac{9}{21}=\frac37$, and $7\times2=14$, so $x=3\times2=6$.
\item \textbf{Cross-multiply:} $21x=9\times14=126$, so $x=6$. Always works, even with decimals.
\item \textbf{Unit amount:} find the value for $1$ part, then multiply.
\end{itemize}
Check by substituting: $\frac{6}{14}=\frac37$ \checkmark`],
    ["5. Sharing in a ratio", String.raw`To share an amount in the ratio $a:b$: find the total number of parts, the value of one part, then each share.
${tape([{ n: 2, label: "Ali: 2 parts", color: "blue" }, { n: 5, label: "Bea: 5 parts", color: "amber" }], { unit: 1.1, total: "$140$ dollars $\\div7$ parts $=20$ dollars per part" })}
Ali gets $2\times20=40$ dollars and Bea gets $5\times20=100$ dollars.`],
    ["6. Scale drawings and maps", String.raw`A scale $1:200\,000$ means $1$ cm on the map is $200\,000$ cm $=2$ km in real life.
${mapScale({ cm: 7, scaleText: "$1:200\\,000$", from: "Town A", to: "Town B", caption: "7 cm on the map $\\times200\\,000=1\\,400\\,000$ cm $=14$ km." })}`],
  ],
  tips: [
    String.raw`Keep the order consistent in a proportion: if the first ratio is boys/girls, so is the second.`,
    String.raw`In sharing problems, the total is the \emph{sum} of the parts ($2+5=7$), not the difference.`,
    String.raw`Ratios are about multiplication, not addition: $2:3$ and $4:5$ both “differ by $1$” but are not equivalent.`,
    String.raw`Convert to the same unit before writing a ratio; then the ratio itself has no units.`,
    String.raw`For map scales, convert centimetres to kilometres last ($100\,000$ cm $=1$ km).`,
  ],
  examples: [
    { title: "Part-to-part and part-to-whole", q: String.raw`A bag has $9$ green and $15$ yellow candies. Write green : yellow and green : total in simplest form.`,
      fig: tape([{ n: 3, label: "green: 3 groups of 3", color: "green" }, { n: 5, label: "yellow: 5 groups of 3", color: "amber" }], { unit: 0.9 }),
      steps: [String.raw`$9:15$, divide by $3$: $3:5$.`, String.raw`Total $24$; $9:24=3:8$.`], ans: String.raw`$3:5$ and $3:8$` },
    { title: "Three-term ratio", q: String.raw`Simplify $48:36:60$.`, steps: [String.raw`GCF of $48,36,60$ is $12$.`, String.raw`$4:3:5$.`], ans: "$4:3:5$" },
    { title: "Decimals and fractions", q: String.raw`Simplify $0.6:1.5$ and $\frac34:\frac16$.`, steps: [String.raw`$\times10$: $6:15=2:5$.`, String.raw`$\times12$ (LCD): $9:2$.`], ans: String.raw`$2:5$ and $9:2$` },
    { title: "Using a double number line", q: String.raw`Paint is mixed $3$ cans blue : $4$ cans white. How many cans of white go with $12$ cans of blue?`,
      fig: doubleLine(3, 4, 5, { top: "blue", bottom: "white", mark: 4 }), steps: [String.raw`$12=3\times4$, so the scale factor is $4$.`, String.raw`White: $4\times4=16$.`], ans: "$16$ cans" },
    { title: "Proportion by scale factor", q: String.raw`Solve $\dfrac{7}{x}=\dfrac{21}{30}$.`, steps: [String.raw`$7\times3=21$, so $x\times3=30$.`, String.raw`$x=10$. Check $\frac{7}{10}=\frac{21}{30}$.`], ans: "$x=10$" },
    { title: "Proportion by cross-multiplying", q: String.raw`Solve $5:8=x:20$.`, steps: [String.raw`$\frac58=\frac{x}{20}$, so $8x=100$.`, String.raw`$x=12.5$.`], ans: "$x=12.5$" },
    { title: "Sharing money", q: String.raw`Share $168$ dollars in the ratio $2:5$.`, fig: tape([{ n: 2, label: "2 parts", color: "blue" }, { n: 5, label: "5 parts", color: "amber" }], { unit: 1, total: "$168$ dollars" }),
      steps: [String.raw`$7$ parts; one part $=168\div7=24$.`, String.raw`$2\times24=48$ and $5\times24=120$. Check: $48+120=168$.`], ans: "$48$ dollars and $120$ dollars" },
    { title: "Map distance", q: String.raw`On a map with scale $1:250\,000$, two lakes are $6.4$ cm apart. How far apart are they in km?`, fig: mapScale({ cm: 6.4, scaleText: "$1:250\\,000$", from: "Lake 1", to: "Lake 2" }),
      steps: [String.raw`$6.4\times250\,000=1\,600\,000$ cm.`, String.raw`$\div100\,000$: $16$ km.`], ans: "$16$ km" },
    { title: "Using the total", q: String.raw`Two numbers are in the ratio $4:9$ and their sum is $104$. Find them.`, steps: [String.raw`$4+9=13$ parts; one part $=104\div13=8$.`, String.raw`$4\times8=32$ and $9\times8=72$.`], ans: "$32$ and $72$" },
  ],
  problems: [
    { level: 1, q: String.raw`Simplify $42:56$.`, ans: "$3:4$", sol: String.raw`GCF $14$: $3:4$.` },
    { level: 1, q: String.raw`A team won $10$ games and lost $6$ (no ties). Write wins : losses and wins : games played in simplest form.`, ans: "$5:3$ and $5:8$", sol: String.raw`$10:6=5:3$; games $=16$, $10:16=5:8$.` },
    { level: 1, q: String.raw`Are $6:15$ and $10:25$ equivalent? Show how you know.`, ans: "yes", sol: String.raw`Both simplify to $2:5$.` },
    { level: 1, q: String.raw`Solve $x:18=5:6$.`, ans: "$x=15$", sol: String.raw`$6\times3=18$, so $x=5\times3=15$.` },
    { level: 1, q: String.raw`Simplify $1.2:2$.`, ans: "$3:5$", sol: String.raw`$\times10$: $12:20=3:5$.` },
    { level: 2, q: String.raw`Solve $\dfrac{9}{x}=\dfrac{12}{20}$.`, ans: "$x=15$", sol: String.raw`$12x=180$, $x=15$. Or $\frac{12}{20}=\frac35$ and $\frac{9}{15}=\frac35$.` },
    { level: 2, q: String.raw`Lemonade is mixed $2$ parts concentrate to $7$ parts water. How much concentrate is needed for $3.5$ L of water?`, ans: "$1$ L", sol: String.raw`$\frac{2}{7}=\frac{c}{3.5}$, so $7c=7$, $c=1$ L.` },
    { level: 2, q: String.raw`Share $350$ dollars in the ratio $3:4$.`, ans: "$150$ and $200$ dollars", sol: String.raw`$7$ parts of $50$: $150$ and $200$.` },
    { level: 2, q: String.raw`On a map with scale $1:50\,000$, a trail is $7.2$ cm long. How long is the real trail in km?`, ans: "$3.6$ km", sol: String.raw`$7.2\times50\,000=360\,000$ cm $=3.6$ km.` },
    { level: 2, q: String.raw`Flour and sugar are mixed $5:2$. Complete the ratio table: \quad flour $10,\ \square,\ 25$; \quad sugar $\square,\ 6,\ \square$.`, ans: "sugar $4$; flour $15$; sugar $10$", sol: String.raw`$10=5\times2\Rightarrow$ sugar $4$; $6=2\times3\Rightarrow$ flour $15$; $25=5\times5\Rightarrow$ sugar $10$.` },
    { level: 3, q: String.raw`The angles of a triangle are in the ratio $3:4:5$. Find each angle. (The angles of a triangle add to $180^\circ$.)`, ans: String.raw`$45^\circ,\ 60^\circ,\ 75^\circ$`, sol: String.raw`$12$ parts; one part $=180^\circ\div12=15^\circ$; angles $3\times15=45^\circ$, $4\times15=60^\circ$, $5\times15=75^\circ$.` },
    { level: 3, q: String.raw`A class of $36$ has boys and girls in the ratio $5:4$. Four more girls join. What is the new ratio of boys to girls?`, ans: "$1:1$", sol: String.raw`$9$ parts of $4$: $20$ boys, $16$ girls. After: $20:20=1:1$.` },
    { level: 3, q: String.raw`Store A sells $3$ kg of rice for $7.50$ dollars; store B sells $5$ kg for $12$ dollars. Are the prices proportional? Which is the better buy?`, ans: "no; store B", sol: String.raw`A: $7.50\div3=2.50$ per kg; B: $12\div5=2.40$ per kg. Different unit prices, so not proportional; B is cheaper.` },
    { level: 3, q: String.raw`A $10$ cm by $15$ cm photo is enlarged so its width becomes $24$ cm (same shape). What is the new height? Show the proportion.`, ans: "$36$ cm", sol: String.raw`$\frac{10}{15}=\frac{24}{h}$, $10h=360$, $h=36$ cm (scale factor $2.4$).` },
    { level: 3, q: String.raw`Jordan says $2:3$ and $4:5$ are equivalent because “both differ by $1$”. Explain why he is wrong.`, ans: "equivalent ratios come from multiplying, not adding", sol: String.raw`$\frac23\approx0.667$ but $\frac45=0.8$. Equivalent ratios come from multiplying both terms by the same number ($2:3=4:6$), not adding the same number.` },
  ],
};
