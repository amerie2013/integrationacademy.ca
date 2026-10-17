// Worksheet 4.1 worked examples (separate from the lesson's examples).
import { planeT } from "./plotT.mjs";

export const EXAMPLES = [
  { title: "Variables", q: String.raw`A kettle's water temperature is recorded every $30$ s. Identify the variables; discrete or continuous?`, steps: ["Time is controlled; temperature responds.", "Both can take any value in between."], ans: "time (independent), temperature (dependent); continuous" },
  { title: "Words to equation and table", q: String.raw`A climbing gym charges $25$ dollars for shoes plus $18$ per visit. Equation and table for $0$--$4$ visits.`, steps: [String.raw`$C=25+18v$.`, String.raw`$25, 43, 61, 79, 97$.`], ans: String.raw`$C=25+18v$ (discrete points)` },
  { title: "A continuous relation", q: String.raw`A rain barrel holds $30$ L and fills at $12$ L/h during a storm. Write and graph the relation.`,
    fig: planeT({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 160 }, lines: [{ m: 12, b: 30, color: "green" }], xlabel: "time (h)", ylabel: "volume (L)", step: { x: 1, y: 20 } }, 6),
    steps: [String.raw`$V=30+12t$; time is continuous: draw a line.`], ans: String.raw`$V=30+12t$` },
  { title: "Reading a story", q: String.raw`Priya walks $1.2$ km in $15$ min, waits $10$ min, then jogs back in $8$ min. Speeds?`, steps: [String.raw`Out: $1.2\div15=0.08$ km/min $=4.8$ km/h.`, String.raw`Back: $1.2\div8=0.15$ km/min $=9$ km/h.`], ans: "4.8 km/h out, 9 km/h back" },
  { title: "Sketching from words", q: "A dog runs quickly away from its owner, stops to sniff, then trots slowly back. Sketch distance from the owner vs time.", steps: ["Steep rise, flat, gentle fall to 0."], ans: "steep rise → flat → gentle fall" },
  { title: "Interpolation", q: String.raw`A seedling is $3$ cm on day $4$ and $9$ cm on day $10$, growing steadily. Estimate day $7$.`, steps: [String.raw`$1$ cm/day; day $7$: $6$ cm.`], ans: "$6$ cm" },
  { title: "Extrapolation", q: String.raw`Predict the seedling's height on day $90$. Comment.`, steps: [String.raw`$3+1(86)=89$ cm.`, "Far beyond the data — real growth slows; unreliable."], ans: "$89$ cm (unreliable)" },
  { title: "Discrete or continuous?", q: "Classify: (a) a car's speed during a trip (b) number of texts per day (c) mass of a puppy as it grows.", steps: ["(a) and (c) are measurements; (b) is a count."], ans: "(a) continuous (b) discrete (c) continuous" },
  { title: "Choosing the axes", q: String.raw`“The time to cook a turkey depends on its mass.” Which variable goes on which axis?`, steps: ["Mass is given; cooking time depends on it."], ans: "mass horizontal, time vertical" },
];
