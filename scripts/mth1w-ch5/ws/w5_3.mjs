// Worksheet 5.3 — Units & Unit Conversion (teacher edition)
import { figT } from "./figT.mjs";
import { rect, prism } from "../figs5.mjs";

const EXAMPLES = [
  { title: "Metric chain", q: String.raw`Convert $0.065$ km to cm and $3\,450$ mg to g.`,
    steps: [String.raw`$0.065\times1000=65$ m; $65\times100=6500$ cm.`, String.raw`$3450\div1000=3.45$ g.`], ans: String.raw`$6500$ cm; $3.45$ g` },
  { title: "Mixed imperial lengths", q: String.raw`A board is $8$ ft $9$ in long. Write its length in inches, in feet (decimal) and in metres.`,
    steps: [String.raw`$8\times12+9=105$ in.`, String.raw`$105\div12=8.75$ ft.`, String.raw`$105\times2.54=266.7$ cm $=2.667$ m.`], ans: String.raw`$105$ in $=8.75$ ft $\approx2.67$ m` },
  { title: "Metric to imperial", q: String.raw`A trail sign says $12$ km. How many miles is that? How many feet?`,
    steps: [String.raw`$12\div1.609\approx7.46$ mi.`, String.raw`$7.46\times5280\approx39\,370$ ft.`], ans: String.raw`about $7.46$ mi, about $39\,370$ ft` },
  { title: "Area units: cm$^2$ to m$^2$", q: String.raw`A poster is $84$ cm by $59.4$ cm. Find its area in cm$^2$ and in m$^2$.`,
    fig: figT(rect(8.4, 5.94, { lw: "84 cm", lh: "59.4 cm" }), 4),
    steps: [String.raw`$84\times59.4=4989.6$ cm$^2$.`, String.raw`$1$ m$^2=10\,000$ cm$^2$: $4989.6\div10\,000\approx0.50$ m$^2$.`], ans: String.raw`$4989.6$ cm$^2\approx0.5$ m$^2$` },
  { title: "Square feet to square metres", q: String.raw`An apartment is advertised as $750$ ft$^2$. Convert to m$^2$.`,
    steps: [String.raw`$1$ ft $=0.3048$ m, so $1$ ft$^2=0.3048^2\approx0.0929$ m$^2$.`, String.raw`$750\times0.0929\approx69.7$ m$^2$.`], ans: String.raw`about $69.7$ m$^2$` },
  { title: "Volume units", q: String.raw`Convert $2.4$ m$^3$ to cm$^3$ and to litres.`,
    steps: [String.raw`$1$ m$^3=100^3=1\,000\,000$ cm$^3$: $2\,400\,000$ cm$^3$.`, String.raw`$1000$ cm$^3=1$ L: $2400$ L.`], ans: String.raw`$2\,400\,000$ cm$^3=2400$ L` },
  { title: "Concrete for a patio", q: String.raw`A patio slab is $4$ m by $3.5$ m and $10$ cm thick. How many cubic metres of concrete are needed?`,
    fig: figT(prism(4, 3.5, 0.6, { ll: "4 m", lw: "3.5 m", lh: "10 cm" }), 4.5),
    steps: [String.raw`Same units first: $10$ cm $=0.1$ m.`, String.raw`$V=4\times3.5\times0.1=1.4$ m$^3$.`], ans: String.raw`$1.4$ m$^3$` },
  { title: "Rate conversion", q: String.raw`A sprinter runs $100$ m in $10.5$ s. Find the average speed in km/h.`,
    steps: [String.raw`$\frac{100}{10.5}\approx9.524$ m/s.`, String.raw`$9.524\times\frac{3600\ \text{s}}{1\ \text{h}}\times\frac{1\ \text{km}}{1000\ \text{m}}\approx34.3$ km/h.`], ans: String.raw`about $34.3$ km/h` },
  { title: "Fuel economy", q: String.raw`A car uses $7.8$ L per $100$ km. Express this in miles per US gallon.`,
    steps: [String.raw`$100$ km $\approx62.14$ mi; $7.8$ L $\approx2.061$ gal.`, String.raw`$62.14\div2.061\approx30.2$ mi/gal.`], ans: String.raw`about $30$ mpg` },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Convert: (a) $5.2$ m to mm (b) $780$ cm to km (c) $0.35$ L to mL.`, recap: "5.2 m, 780 cm, 0.35 L.", ans: String.raw`(a) $5200$ mm (b) $0.0078$ km (c) $350$ mL` },
  { level: 1, q: String.raw`Convert: (a) $4$ ft $3$ in to inches (b) $63$ in to feet and inches (c) $2.5$ yd to feet.`, recap: "Imperial lengths.", ans: String.raw`(a) $51$ in (b) $5$ ft $3$ in (c) $7.5$ ft` },
  { level: 1, q: String.raw`Convert $3$ m$^2$ to cm$^2$ and $45\,000$ cm$^3$ to L.`, recap: "3 m², 45 000 cm³.", ans: String.raw`$30\,000$ cm$^2$; $45$ L` },
  { level: 2, q: String.raw`A hockey stick is $63$ in long. Convert to cm and to m.`, recap: "63 in stick.", ans: String.raw`$160.02$ cm $\approx1.60$ m` },
  { level: 2, q: String.raw`A bedroom is $12$ ft by $10$ ft $6$ in. Find the floor area in ft$^2$ and in m$^2$.`, recap: "Bedroom 12 ft × 10 ft 6 in.", ans: String.raw`$126$ ft$^2\approx11.7$ m$^2$` },
  { level: 2, q: String.raw`A pool is $25$ m long, $12$ m wide and $1.5$ m deep on average. How many litres of water does it hold?`, recap: "Pool 25 × 12 × 1.5.", ans: String.raw`$450$ m$^3=450\,000$ L` },
  { level: 2, q: String.raw`Convert $65$ mi/h to km/h and to m/s.`, recap: "65 mi/h.", ans: String.raw`$\approx104.6$ km/h $\approx29.1$ m/s` },
  { level: 2, q: String.raw`Paint covers $9.5$ m$^2$ per litre. How many litres are needed for a wall $380$ cm by $250$ cm (two coats)?`, recap: "Paint two coats.", ans: String.raw`$9.5$ m$^2$ per coat, $19$ m$^2$: $2$ L` },
  { level: 3, space: 5, q: String.raw`A recipe from the United States uses $2.5$ lb of flour and $3$ cups of milk ($1$ cup $\approx236.6$ mL).
(a) Convert the flour to kg and the milk to L.
(b) You only have $800$ g of flour. What fraction of the recipe can you make, and how much milk will you need?`, recap: "US recipe.", ans: String.raw`(a) $1.13$ kg; $0.71$ L (b) $0.8\div1.134\approx0.71$ of the recipe; $\approx0.50$ L milk` },
  { level: 3, space: 5, q: String.raw`A deck is $16$ ft by $12$ ft. Deck stain is sold in $3.78$ L cans covering $28$ m$^2$ per can.
(a) Find the deck area in m$^2$.
(b) How many cans are needed for two coats?`, recap: "Deck stain.", ans: String.raw`(a) $192$ ft$^2\approx17.8$ m$^2$ (b) $35.7$ m$^2$: $2$ cans` },
  { level: 3, space: 5, q: String.raw`Explain why $1$ m$^3$ is not $100$ cm$^3$. Draw or describe a picture. Then convert $0.75$ m$^3$ to cm$^3$ and to mL.`, recap: "Why 1 m³ ≠ 100 cm³.", ans: String.raw`each of $3$ dimensions is $100$ cm: $100^3=1\,000\,000$; $750\,000$ cm$^3=750\,000$ mL` },
  { level: 3, space: 5, q: String.raw`Light travels about $300\,000$ km/s.
(a) How far does it travel in one year ($365.25$ days)? Give your answer in scientific notation.
(b) The Moon is about $384\,400$ km away. How long does its light take to reach us?`, recap: "Light-year.", ans: String.raw`(a) $\approx9.47\times10^{12}$ km (b) $\approx1.28$ s` },
  { level: 3, space: 5, q: String.raw`A rectangular tank $80$ cm by $45$ cm by $50$ cm is filled by a hose delivering $12$ L/min.
(a) Find the capacity in litres.
(b) How long does it take to fill? Give minutes and seconds.`, recap: "Tank and hose.", ans: String.raw`(a) $180\,000$ cm$^3=180$ L (b) $15$ min` },
];

export const WS = {
  code: "5.3",
  title: "Units & Unit Conversion",
  bigideas: String.raw`Every measurement is a number \emph{and} a unit. To change units, multiply by a conversion factor equal to $1$ --- such as $\frac{100\ \text{cm}}{1\ \text{m}}$ or $\frac{2.54\ \text{cm}}{1\ \text{in}}$ --- with the wanted unit on top. Area and volume units change by the square and cube of the length factor: $1$ m$^2=10\,000$ cm$^2$ and $1$ m$^3=1\,000\,000$ cm$^3$. Volume and capacity meet at $1$ cm$^3=1$ mL.`,
  goals: ["Convert within the metric system.", "Convert imperial lengths and between imperial and metric.", "Convert area and volume units.", "Relate volume and capacity.", "Convert rates such as km/h and m/s."],
  curriculum: "E1.3",
  vocab: [["Conversion factor", "a fraction equal to 1 that changes units"], ["Imperial units", "in, ft, yd, mi, lb, gal"], ["Capacity", "amount a container holds (L, mL)"], ["Rate", "comparison of quantities with different units"]],
  hook: String.raw`Show a lumber price tag (\$ per board foot), a Canadian highway sign in km and a U.S. sign in miles. Ask: “How fast is $100$ km/h in miles per hour? Make a guess, then let's work it out.”`,
  concepts: [
    ["1. The metric ladder", String.raw`k, h, da, (base), d, c, m: each step is $\times10$. Smaller unit $\Rightarrow$ bigger number.`],
    ["2. Unit factors", String.raw`$5$ ft $\times\dfrac{12\ \text{in}}{1\ \text{ft}}\times\dfrac{2.54\ \text{cm}}{1\ \text{in}}=152.4$ cm. Units cancel like factors.`],
    ["3. Area and volume", String.raw`Length factor $k$ $\Rightarrow$ area factor $k^2$, volume factor $k^3$. $1$ ft$^2=144$ in$^2$; $1$ m$^2=10\,000$ cm$^2$; $1$ m$^3=1000$ L.
${figT([...rect(3, 3, { lw: "1 m", lh: "1 m", fill: "#eff6ff" }), ...[1, 2].flatMap((k) => [{ seg: [[k, 0], [k, 3]], color: "#93c5fd", width: 1 }, { seg: [[0, k], [3, k]], color: "#93c5fd", width: 1 }])], 3.2)}`],
  ],
  tips: ["Have students write units on every line.", "Watch for “divide or multiply?” confusion: the cancelling units decide.", "Students often use 100 for m² → cm²; draw the 100 × 100 grid.", "Convert to the same unit before multiplying dimensions (cm with m).", "Round only at the end."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
