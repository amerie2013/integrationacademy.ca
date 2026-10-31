// Worksheet 1.8 problems: 3 knowledge, 5 application, 5 challenge (multi-part) problems.
export const PROBLEMS = [
  { level: 1, q: String.raw`Simplify $42:56$.`, ans: "$3:4$" },
  { level: 1, q: String.raw`A team won $10$ games and lost $6$. Write wins : losses and wins : games played in simplest form.`, recap: "Wins 10, losses 6: two ratios.", ans: "$5:3$ and $5:8$" },
  { level: 1, q: String.raw`Solve $x:18=5:6$.`, ans: "$x=15$" },
  { level: 2, q: String.raw`Solve $(x+2):12=5:6$.`, ans: "$x=8$" },
  { level: 2, q: String.raw`Lemonade is $2$ parts concentrate to $7$ parts water. How much concentrate goes with $3.5$ L of water?`, recap: "Concentrate for 3.5 L water at 2:7.", ans: "$1$ L" },
  { level: 2, q: String.raw`Share $350$ dollars in the ratio $3:4$.`, ans: "$150$ and $200$ dollars" },
  { level: 2, q: String.raw`On a map with scale $1:50\,000$, a trail is $7.2$ cm long. How long is the real trail in km?`, recap: "Map 1:50 000, 7.2 cm.", ans: "$3.6$ km" },
  { level: 2, q: String.raw`Flour, sugar and butter are mixed $5:2:3$ by mass. How many grams of each are in $1.5$ kg of the mixture?`, ans: "$750$ g, $300$ g, $450$ g" },
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
  { level: 3, space: 5.5,
    q: String.raw`A $30$ L tank holds concentrate and water in the ratio $2:3$.
(a) How many litres of each does it hold?
(b) You drain $10$ L of the mixture and refill the tank with water. What is the new ratio, in simplest form?
(c) How many more litres of concentrate would you need to add to that mixture to make the ratio $1:2$?`,
    ans: String.raw`(a) $12$ L and $18$ L (b) $10$ L removed holds $4$ L and $6$ L; now $8:22=4:11$ (c) $22$ L of water needs $11$ L of concentrate, so add $3$ L.` },
  { level: 3, space: 5.5,
    q: String.raw`A model of a building is built at a scale of $1:150$.
(a) The model is $42$ cm tall. How tall is the real building, in metres?
(b) The real building is $27$ m wide. How wide is the model?
(c) The model's floor has an area of $360$ cm$^2$. Find the real floor area, in m$^2$.
(d) Explain why the area is not simply multiplied by $150$.`,
    ans: String.raw`(a) $63$ m (b) $18$ cm (c) $360\times150^2=8\,100\,000$ cm$^2=810$ m$^2$ (d) both the length and the width are multiplied by $150$, so the area is multiplied by $150^2$.` },
  { level: 3, space: 5,
    q: String.raw`Ana, Ben and Cal share $540$ dollars. Ana gets twice as much as Ben, and Cal gets $60$ dollars more than Ben.
(a) How much does each person get?
(b) Write the ratio Ana : Ben : Cal in simplest form.
(c) Explain why you could not simply share the money in a ratio at the start.`,
    recap: "540 dollars: Ana = 2 × Ben, Cal = Ben + 60.",
    ans: String.raw`(a) Ben $120$, Ana $240$, Cal $180$ (b) $4:2:3$ (c) a fixed extra amount is not a multiple of Ben's share, so the ratio is only known after solving.` },
];
