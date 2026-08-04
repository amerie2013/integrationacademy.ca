const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "3.1",
  title: "Angles & Angle Relationships",
  intro: "The vocabulary and relationships of angles — complementary, supplementary, vertical, and the angle pairs formed when parallel lines are cut by a transversal.",
  lesson: [
    ["Angle types", R`Acute ($<90^\circ$), right ($90^\circ$), obtuse ($>90^\circ$), straight ($180^\circ$). <b>Complementary</b> angles sum to $90^\circ$; <b>supplementary</b> angles sum to $180^\circ$.`],
    ["Angle pairs", R`Adjacent angles share a vertex and a side. <b>Vertical angles</b> (opposite, at an intersection) are congruent. A <b>linear pair</b> is supplementary.`],
    ["Parallel lines & a transversal", R`Corresponding angles are equal; alternate interior angles are equal; co-interior (same-side interior) angles are supplementary.`],
  ],
  examples: [
    ["Example 1: Complement", R`Find the complement of $35^\circ$.`, R`$90-35=55^\circ$.`],
    ["Example 2: Supplement", R`Find the supplement of $110^\circ$.`, R`$180-110=70^\circ$.`],
    ["Example 3: Vertical angles", R`One of two vertical angles is $40^\circ$. Find the other.`, R`Vertical angles are congruent: $40^\circ$.`],
    ["Example 4: Set up an equation", R`Two complementary angles: one is twice the other. Find them.`, R`$x+2x=90\Rightarrow x=30$: $30^\circ$ and $60^\circ$.`],
    ["Example 5: Alternate interior", R`Parallel lines are cut by a transversal; an alternate interior angle to a $65^\circ$ angle measures?`, R`$65^\circ$ (equal).`],
  ],
  questions: [
    ["Problem 1", R`Complement of $20^\circ$?`, R`$70^\circ$`],
    ["Problem 2", R`Supplement of $45^\circ$?`, R`$135^\circ$`],
    ["Problem 3", R`Measure of a right angle?`, R`$90^\circ$`],
    ["Problem 4", R`Vertical angle of $72^\circ$?`, R`$72^\circ$`],
    ["Problem 5", R`Linear pair with $130^\circ$?`, R`$50^\circ$`],
    ["Problem 6", R`Two supplementary angles, one three times the other. Find them.`, R`$45^\circ$ and $135^\circ$`],
    ["Problem 7", R`Corresponding angle to $55^\circ$ (parallel lines)?`, R`$55^\circ$`],
    ["Problem 8", R`Co-interior (same-side interior) angle to $70^\circ$?`, R`$110^\circ$`],
  ],
};
