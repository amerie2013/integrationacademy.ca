import { fig } from "./_figs.mjs";

function verticalAnglesFig() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Vertical angles">
  <line x1="20" y1="170" x2="180" y2="30" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="20" y1="40" x2="180" y2="160" stroke="#0f172a" stroke-width="2.5"/>
  <text x="100" y="58" font-size="13" fill="#9a3412" font-family="Georgia,serif" text-anchor="middle">1</text>
  <text x="145" y="102" font-size="13" fill="#1d4ed8" font-family="Georgia,serif" text-anchor="middle">2</text>
  <text x="100" y="148" font-size="13" fill="#9a3412" font-family="Georgia,serif" text-anchor="middle">3</text>
  <text x="55" y="102" font-size="13" fill="#1d4ed8" font-family="Georgia,serif" text-anchor="middle">4</text>
</svg>`;
}

function linearPairFig() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 120" width="220" style="display:block;margin:4px auto;max-width:100%" role="img" aria-label="Linear pair">
  <line x1="20" y1="100" x2="200" y2="100" stroke="#0f172a" stroke-width="2.5"/>
  <line x1="110" y1="100" x2="150" y2="20" stroke="#0f172a" stroke-width="2.5"/>
  <path d="M70,100 A40,40 0 0 1 100,72" fill="none" stroke="#ea580c" stroke-width="2"/>
  <path d="M150,100 A40,40 0 0 0 122,74" fill="none" stroke="#15803d" stroke-width="2"/>
  <circle cx="110" cy="100" r="4" fill="#0f172a"/>
</svg>`;
}

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "1.4",
  title: "Pairs of Angles",
  intro: "Complementary, supplementary, vertical, and linear-pair angles are the building blocks behind almost every later angle proof, including parallel-line theorems in Chapter 2. The key upgrade here is recognizing that these relationships are theorems and postulates you can name and chain together — for instance, two angles vertical to the same angle must be congruent to each other, not just each congruent to the middle one. Expect algebra with the unknown inside the angle expressions, and at least one problem where you must find all four angles at an intersection from a single given value.",
  examples: [
    ["Example 1: Complementary angles",
      "Two angles are complementary. One measures $35^\\circ$. Find the other.",
      "Definition: complementary angles sum to $90^\\circ$ (they do not need to be adjacent).<br>" +
      "Let the unknown angle be $x$: $35^\\circ + x = 90^\\circ$.<br>" +
      "<b>Answer:</b> $x = 55^\\circ$."],

    ["Example 2: Supplementary angles",
      "Two angles are supplementary. One measures $110^\\circ$. Find the other.",
      "Definition: supplementary angles sum to $180^\\circ$.<br>" +
      "Let the unknown angle be $x$: $110^\\circ + x = 180^\\circ$.<br>" +
      "<b>Answer:</b> $x = 70^\\circ$."],

    ["Example 3: Vertical angles",
      "Vertical angles measure $2x + 10$ and $3x - 5$. Find $x$.",
      fig(verticalAnglesFig(), "$\\angle 1$ and $\\angle 3$ are vertical, as are $\\angle 2$ and $\\angle 4$.") +
      "Vertical Angles Theorem: angles opposite each other at an intersection are congruent, so their measures are equal.<br>" +
      "$2x + 10 = 3x - 5$<br>" +
      "$15 = x$.<br>" +
      "<b>Check:</b> both angles equal $2(15)+10 = 40^\\circ$. ✓"],

    ["Example 4: Linear pair",
      "Angles in a linear pair measure $4x$ and $2x + 30$. Find $x$.",
      fig(linearPairFig(), "The two angles share a vertex and side, and their outer sides form a straight line.") +
      "Linear Pair Postulate: since the non-shared sides of the two angles form a straight line, the angles are supplementary.<br>" +
      "$4x + (2x + 30) = 180$<br>" +
      "$6x + 30 = 180 \\Rightarrow 6x = 150 \\Rightarrow x = 25$.<br>" +
      "<b>Check:</b> $4(25)=100^\\circ$ and $2(25)+30=80^\\circ$; $100^\\circ+80^\\circ=180^\\circ$. ✓"],

    ["Example 5: Adjacent vs. complementary",
      "Are complementary angles always adjacent? Give a counterexample if not.",
      "Definitions: adjacent angles must share a vertex and a side and must not overlap; complementary angles need only sum to $90^\\circ$ — no sharing is required.<br>" +
      "Counterexample: a $30^\\circ$ angle in one corner of a room and a separate $60^\\circ$ angle across the room are complementary ($30^\\circ+60^\\circ=90^\\circ$) but share no vertex or side.<br>" +
      "<b>Answer:</b> No — complementary (and supplementary) angles are not required to be adjacent."],

    ["Example 6: Why vertical angles are congruent",
      "If vertical angles measure $x$ and $72^\\circ$, find $x$, and briefly explain <i>why</i> vertical angles are always congruent.",
      "Proof idea: each of the two vertical angles forms a linear pair with the <i>same</i> adjacent angle, so each is supplementary to it.<br>" +
      "By the Congruent Supplements Theorem, two angles supplementary to the same angle must be congruent to each other — so the vertical angles are congruent.<br>" +
      "<b>Answer:</b> $x = 72^\\circ$."],

    ["Example 7: Complementary algebra",
      "Complementary angles: $3x + 5$ and $2x + 15$. Find $x$.",
      "Write the definition as an equation: the two measures sum to $90^\\circ$.<br>" +
      "$(3x + 5) + (2x + 15) = 90$<br>" +
      "$5x + 20 = 90 \\Rightarrow 5x = 70 \\Rightarrow x = 14$.<br>" +
      "<b>Check:</b> $3(14)+5=47^\\circ$, $2(14)+15=43^\\circ$, sum $=90^\\circ$. ✓"],

    ["Example 8: Supplementary algebra",
      "Supplementary angles: $5x$ and $4x + 9$. Find both measures.",
      "Write the definition as an equation: the two measures sum to $180^\\circ$.<br>" +
      "$5x + (4x + 9) = 180 \\Rightarrow 9x + 9 = 180 \\Rightarrow 9x = 171 \\Rightarrow x = 19$.<br>" +
      "Substitute back: $5(19) = 95^\\circ$ and $4(19)+9 = 85^\\circ$.<br>" +
      "<b>Answer:</b> $95^\\circ$ and $85^\\circ$ (check: $95+85=180$). ✓"],

    ["Example 9: Identify the pair",
      "Two angles share a side and a vertex, and their non-shared sides form a straight line. What pair of angles are they, and what does that tell you about their measures?",
      "Match the description to the definition: sharing a vertex and side, with non-shared sides forming a line, is exactly the definition of a <b>linear pair</b>.<br>" +
      "By the Linear Pair Postulate, linear-pair angles are always supplementary.<br>" +
      "<b>Answer:</b> A linear pair — the angles are adjacent <i>and</i> supplementary."],

    ["Example 10: All four angles from one intersection",
      "Two lines intersect, forming four angles labeled $1$, $2$, $3$, $4$ in order around the intersection. If $m\\angle 1 = 55^\\circ$, find the other three measures and state which pairs are vertical and which are linear pairs.",
      fig(verticalAnglesFig(), "Angles 1 and 3 are vertical; angles 2 and 4 are vertical; consecutive angles form linear pairs.") +
      "$\\angle 1$ and $\\angle 3$ are vertical (directly across the intersection), so by the Vertical Angles Theorem $m\\angle 3 = 55^\\circ$.<br>" +
      "$\\angle 1$ and $\\angle 2$ are a linear pair (adjacent, sides forming a line), so they are supplementary: $m\\angle 2 = 180^\\circ - 55^\\circ = 125^\\circ$.<br>" +
      "$\\angle 4$ is vertical to $\\angle 2$, so $m\\angle 4 = 125^\\circ$.<br>" +
      "<b>Answer:</b> $m\\angle1=55^\\circ$, $m\\angle2=125^\\circ$, $m\\angle3=55^\\circ$, $m\\angle4=125^\\circ$. Vertical pairs: $(1,3)$, $(2,4)$; linear pairs: $(1,2),(2,3),(3,4),(4,1)$."],
  ],
  questions: [
    ["Problem 1: Complementary", "Complement of $42^\\circ$?", "$48^\\circ$"],
    ["Problem 2: Supplementary", "Supplement of $125^\\circ$?", "$55^\\circ$"],
    ["Problem 3: Vertical angles", "$2x$ and $x + 30$ are vertical. Find $x$.", "$x = 30$"],
    ["Problem 4: Linear pair", "$3x$ and $x + 40$ form a linear pair. Find $x$.", "$x = 35$"],
    ["Problem 5: Complementary algebra", "$x + 20$ and $2x + 10$ complementary. Find $x$.", "$x = 20$"],
    ["Problem 6: Vertical measure", "Vertical to $68^\\circ$?", "$68^\\circ$"],
    ["Problem 7: Supplementary algebra", "$7x$ and $2x + 9$ supplementary. Find $x$.", "$x = 19$"],
    ["Problem 8: Complement", "Complement of $15^\\circ$?", "$75^\\circ$"],
    ["Problem 9: Supplement", "Supplement of $90^\\circ$?", "$90^\\circ$"],
    ["Problem 10: Linear pair", "$5x - 10$ and $3x + 30$ linear pair. Find $x$.", "$x = 20$"],
    ["Problem 11: Vertical algebra", "$4x + 8$ and $6x - 12$ vertical. Find $x$.", "$x = 10$"],
    ["Problem 12: Complementary", "$4x$ and $5x + 9$ complementary. Find $x$.", "$x = 9$"],
    ["Problem 13: Identify", "Angles that share a vertex and side but do not overlap are called what?", "Adjacent"],
    ["Problem 14: Challenge — all four angles", "Two lines intersect. One angle is $(3x+10)^\\circ$ and its vertical angle is $(5x-30)^\\circ$. Find $x$, then find the measure of all four angles formed.", "$x=20$; angles are $70^\\circ, 110^\\circ, 70^\\circ, 110^\\circ$"],
    ["Problem 15: Challenge — supplementary word problem", "Two angles are supplementary. The larger angle is $10^\\circ$ less than $4$ times the smaller. Find both measures.", "$38^\\circ$ and $142^\\circ$"],
  ],
};
