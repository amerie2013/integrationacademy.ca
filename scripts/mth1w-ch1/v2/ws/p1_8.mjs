// Worksheet 1.8 problems: 3 knowledge, 5 application, 5 textbook-level (multi-part) problems.
export const PROBLEMS = [
  { level: 1, q: String.raw`Simplify $42:56$.`, ans: "$3:4$" },
  { level: 1, q: String.raw`A team won $10$ games and lost $6$. Write wins : losses and wins : games played in simplest form.`, recap: "Wins 10, losses 6: two ratios.", ans: "$5:3$ and $5:8$" },
  { level: 1, q: String.raw`Solve $x:18=5:6$.`, ans: "$x=15$" },
  { level: 2, q: String.raw`Solve $\dfrac{9}{x}=\dfrac{12}{20}$.`, ans: "$x=15$" },
  { level: 2, q: String.raw`Lemonade is $2$ parts concentrate to $7$ parts water. How much concentrate goes with $3.5$ L of water?`, recap: "Concentrate for 3.5 L water at 2:7.", ans: "$1$ L" },
  { level: 2, q: String.raw`Share $350$ dollars in the ratio $3:4$.`, ans: "$150$ and $200$ dollars" },
  { level: 2, q: String.raw`On a map with scale $1:50\,000$, a trail is $7.2$ cm long. How long is the real trail in km?`, recap: "Map 1:50 000, 7.2 cm.", ans: "$3.6$ km" },
  { level: 2, q: String.raw`Flour and sugar are mixed $5:2$. Complete: flour $10,\ \square,\ 25$; sugar $\square,\ 6,\ \square$.`, recap: "Ratio table 5:2.", ans: "sugar $4$; flour $15$; sugar $10$" },
  { level: 3, space: 5,
    q: String.raw`A bicycle's front gear has $48$ teeth and its back gear has $16$ teeth.
(a) Write the gear ratio front : back in simplest form.
(b) If the rider pedals $60$ turns per minute, how many turns per minute does the back wheel make?
(c) The wheel travels $2.1$ m per turn. What is the bike's speed in km/h?`,
    recap: "Gears 48 : 16; pedalling 60 rpm; wheel 2.1 m per turn.",
    ans: String.raw`(a) $3:1$ (b) $180$ (c) $180\times2.1=378$ m/min $=22.68$ km/h.` },
  { level: 3, space: 5,
    q: String.raw`In a class the ratio of boys to girls is $3:4$. Then $3$ boys leave and $2$ girls join, and the ratio becomes $1:2$.
(a) Let the class have $3k$ boys and $4k$ girls. Write an equation for the new ratio.
(b) Solve it and find how many students were in the class at first.
(c) Check your answer.`,
    recap: "Boys : girls 3 : 4 becomes 1 : 2 after changes.",
    ans: String.raw`(a) $\frac{3k-3}{4k+2}=\frac12$ (b) $k=4$: $12$ boys, $16$ girls, $28$ students (c) $9:18=1:2$ \checkmark` },
  { level: 3, space: 5,
    q: String.raw`Green paint is mixed blue : yellow $=2:3$. You have $5$ L of blue and $6$ L of yellow.
(a) What is the most green paint you can make? Which colour runs out first?
(b) How much of the other colour is left over?
(c) How much more yellow would you need to use all of the blue?`,
    recap: "Green paint 2 : 3 with 5 L blue, 6 L yellow.",
    ans: String.raw`(a) $10$ L (yellow runs out; needs $4$ L blue) (b) $1$ L blue (c) $7.5-6=1.5$ L.` },
  { level: 3, space: 5,
    q: String.raw`A model of a building is built at a scale of $1:150$.
(a) The model is $42$ cm tall. How tall is the real building, in metres?
(b) The real building is $27$ m wide. How wide is the model?
(c) A model of a second building, at a scale of $1:200$, is also $42$ cm tall. Which real building is taller, and by how much?`,
    recap: "Models at 1:150 and 1:200, both 42 cm tall.",
    ans: String.raw`(a) $63$ m (b) $18$ cm (c) the second ($84$ m), by $21$ m.` },
  { level: 3, space: 5,
    q: String.raw`Ana, Ben and Cal share $540$ dollars. Ana gets twice as much as Ben, and Cal gets $60$ dollars more than Ben.
(a) How much does each person get?
(b) Write the ratio Ana : Ben : Cal in simplest form.
(c) Explain why you could not simply share the money in a ratio at the start.`,
    recap: "540 dollars: Ana = 2 × Ben, Cal = Ben + 60.",
    ans: String.raw`(a) Ben $120$, Ana $240$, Cal $180$ (b) $4:2:3$ (c) a fixed extra amount is not a multiple of Ben's share, so the ratio is only known after solving.` },
];
