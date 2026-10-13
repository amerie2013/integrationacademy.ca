import { fig, elevationFig, triABC } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "5.3",
  title: "Indirect Measurement",
  intro: "Similar triangles let us find heights and distances that are impractical to measure directly. In the <b>shadow method</b>, the sun's rays are essentially parallel, so an object and its shadow form a right triangle similar to any other object-and-shadow triangle measured at the same moment (AA: both right angles, plus the shared angle of elevation to the sun). In the <b>mirror method</b>, the angle of incidence equals the angle of reflection at a mirror on the ground, creating two similar right triangles. Surveyors use the same idea to measure distances across rivers or ponds using sightlines and stakes. In every case, the key step is setting up a correct proportion that matches height-to-height and base-to-base (never height-to-base). Some problems add an extra step, such as an observer's eye height, after the proportion is solved. This worksheet practises all of these indirect-measurement setups with full multi-step solutions.",
  examples: [
    ["Example 1: Shadow method",
      "A $6$ ft person casts a $4$ ft shadow. At the same moment, a tree casts a $20$ ft shadow. Find the tree's height.",
      fig(elevationFig(), "Both the person and the tree form similar right triangles with their shadows and the sun's rays.") +
      "Identify similar triangles: the person and the tree each form a right triangle with the ground and the sun's rays; both have a right angle and share the same angle of elevation to the sun (parallel rays) $\\Rightarrow$ similar by AA.<br>" +
      "Set up the proportion (height over shadow, matched):<br>" +
      "$\\dfrac{6}{4}=\\dfrac{h}{20}$<br>" +
      "Cross-multiply: $4h=120$<br>" +
      "$h=30$.<br>" +
      "<b>Answer:</b> the tree is $30$ ft tall."],

    ["Example 2: Mirror method",
      "A mirror lies flat on the ground $8$ ft from a student and $24$ ft from a building. The student's eyes are $5$ ft above the ground, and she sees the top of the building reflected in the mirror. Find the building's height.",
      "Identify similar triangles: at the mirror, the angle of incidence equals the angle of reflection, so the student's sightline triangle and the building's triangle share a congruent angle at the mirror; both also have a right angle (heights are vertical) $\\Rightarrow$ similar by AA.<br>" +
      "Set up the proportion (height over distance to mirror):<br>" +
      "$\\dfrac{5}{8}=\\dfrac{h}{24}$<br>" +
      "Cross-multiply: $8h=120$<br>" +
      "$h=15$.<br>" +
      "<b>Answer:</b> the building is $15$ ft tall."],

    ["Example 3: Flagpole shadow with algebra",
      "A $5$ m post casts a $2$ m shadow. At the same time, a $35$ m flagpole casts a shadow of $3x+2$ m. Find $x$, and check the flagpole's shadow length.",
      "Set up the proportion using matching triangles:<br>" +
      "$\\dfrac{5}{2}=\\dfrac{35}{3x+2}$<br>" +
      "Cross-multiply: $5(3x+2)=2(35)$<br>" +
      "$15x+10=70$<br>" +
      "$15x=60 \\Rightarrow x=4$.<br>" +
      "Check: shadow $=3(4)+2=14$ m; ratio $\\dfrac{35}{14}=2.5=\\dfrac{5}{2}$ ✓.<br>" +
      "<b>Answer:</b> $x=4$; flagpole shadow $=14$ m."],

    ["Example 4: Ramp — height at a given point",
      "A skateboard ramp rises $3$ ft over a horizontal run of $12$ ft. How high is the ramp surface at a point $8$ ft along the horizontal from the base?",
      "The small right triangle up to the $8$ ft mark is similar to the full ramp triangle (same base angle, both right triangles).<br>" +
      "Set up the proportion (rise over run):<br>" +
      "$\\dfrac{3}{12}=\\dfrac{h}{8}$<br>" +
      "$h=\\dfrac{3\\times8}{12}=2$.<br>" +
      "<b>Answer:</b> the ramp is $2$ ft high at that point."],

    ["Example 5: Surveying across a river",
      "A surveyor sets up similar triangles $\\triangle ABE \\sim \\triangle CDE$ on opposite sides of a river to find its width $AB$. On the near bank she measures $AE=40$, $CE=10$, and $CD=15$. Find the river width $AB$.",
      fig(triABC(), "Sightlines from the stakes create two similar triangles across the river.") +
      "Since $\\triangle ABE \\sim \\triangle CDE$, corresponding sides are proportional:<br>" +
      "$\\dfrac{AB}{CD}=\\dfrac{AE}{CE}$<br>" +
      "$\\dfrac{AB}{15}=\\dfrac{40}{10}=4$<br>" +
      "$AB=4\\times15=60$.<br>" +
      "<b>Answer:</b> the river is $60$ units wide."],

    ["Example 6: Thales' method with decimals",
      "A $1.5$ m stick held vertically casts a $0.5$ m shadow. At the same time, a tower casts a $12$ m shadow. Find the tower's height.",
      fig(elevationFig(), "The stick and the tower cast shadows at the same angle of elevation to the sun.") +
      "Set up the proportion:<br>" +
      "$\\dfrac{1.5}{0.5}=\\dfrac{h}{12}$<br>" +
      "$\\dfrac{1.5}{0.5}=3$, so $h=3\\times12=36$.<br>" +
      "<b>Answer:</b> the tower is $36$ m tall."],

    ["Example 7: Find the missing shadow",
      "A $9$ ft statue casts a shadow at the same time a $6$ ft person casts a $4$ ft shadow. Find the length of the statue's shadow.",
      "Set up the proportion (height over shadow, same for both):<br>" +
      "$\\dfrac{6}{4}=\\dfrac{9}{s}$<br>" +
      "Cross-multiply: $6s=36$<br>" +
      "$s=6$.<br>" +
      "<b>Answer:</b> the statue's shadow is $6$ ft long."],

    ["Example 8: Scale drawing (map)",
      "On a map, $2$ cm represents $50$ m of actual distance. A hiking path measures $7$ cm on the map. Find the actual length of the path in meters, then convert to kilometers.",
      "Set up the proportion (map over actual, consistent units):<br>" +
      "$\\dfrac{2}{50}=\\dfrac{7}{L}$<br>" +
      "Cross-multiply: $2L=350$<br>" +
      "$L=175$ m.<br>" +
      "Convert: $175\\text{ m}=0.175$ km.<br>" +
      "<b>Answer:</b> $175$ m, or $0.175$ km."],

    ["Example 9: Clinometer — a compound problem",
      "A student's eyes are $5$ ft above the ground, standing $30$ ft from a flagpole. Using a clinometer, the line of sight to the top forms a right triangle similar to a reference triangle with legs $4$ (rise) and $5$ (run). Find the flagpole's total height.",
      "Find the rise from eye level to the top of the pole using the similar triangles:<br>" +
      "$\\dfrac{x}{30}=\\dfrac{4}{5}$<br>" +
      "$x=\\dfrac{4\\times30}{5}=24$ ft (this is the height <i>above eye level</i>).<br>" +
      "Add the eye height, since the clinometer sightline starts $5$ ft off the ground, not at ground level:<br>" +
      "Total height $=24+5=29$ ft.<br>" +
      "<b>Answer:</b> the flagpole is $29$ ft tall."],
  ],
  questions: [
    ["Problem 1: Shadow", "A $5$ ft student casts a $3$ ft shadow; a tree casts an $18$ ft shadow. Find the tree height.", "$30$ ft"],
    ["Problem 2: Shadow", "A $2$ m stick casts a $1.5$ m shadow; a pole casts a $9$ m shadow. Find the pole height.", "$12$ m"],
    ["Problem 3: Mirror", "Mirror is $6$ ft from you and $30$ ft from a wall. Your eye height is $5$ ft. Find the wall height.", "$25$ ft"],
    ["Problem 4: Proportion", "$\\dfrac{h}{45}=\\dfrac{8}{12}$. Find $h$.", "$30$"],
    ["Problem 5: Shadow", "A $4$ ft child casts a $5$ ft shadow; a building casts a $40$ ft shadow. Find the building height.", "$32$ ft"],
    ["Problem 6: Map scale", "On a drawing, $1$ in represents $20$ ft. A room is $3.5$ in long on the drawing. Find the real length.", "$70$ ft"],
    ["Problem 7: Missing shadow", "A $12$ m tower and a $3$ m pole cast shadows at the same time. The pole's shadow is $2$ m. Find the tower's shadow.", "$8$ m"],
    ["Problem 8: Ramp", "A ramp rises $2$ m over a $10$ m horizontal run. How high is it after $15$ m horizontally?", "$3$ m"],
    ["Problem 9: River", "Surveying proportion: $\\dfrac{d}{75}=\\dfrac{8}{10}$. Find $d$.", "$60$"],
    ["Problem 10: Mirror", "Mirror $10$ ft from a person ($5.5$ ft eye height) and $40$ ft from a statue. Find the statue height.", "$22$ ft"],
    ["Problem 11: Shadow", "Person $6$ ft tall casts an $8$ ft shadow; a tree's shadow is $28$ ft. Find the tree height.", "$21$ ft"],
    ["Problem 12: Scale drawing", "$3$ cm on a plan represents $12$ m. A wall measures $5$ cm on the plan. Find the real length.", "$20$ m"],
    ["Problem 13: Challenge — clinometer", "A student's eye height is $5$ ft, standing $40$ ft from a tower. The line of sight forms a right triangle similar to a reference triangle with legs $3$ (rise) and $4$ (run). Find the total tower height.", "$35$ ft"],
    ["Problem 14: Challenge — algebra shadow", "A pole of height $(2x+1)$ m casts a $6$ m shadow at the same time a $10$ m tower casts a $15$ m shadow. Find $x$ and the pole's height.", "$x=1.5$; pole height $=4$ m"],
    ["Problem 15: Challenge — surveying + extra distance", "To find pond width $w$, similar triangles give $\\dfrac{w}{18}=\\dfrac{24}{16}$. Find $w$, then find the total distance to a dock that is $5$ m past the far shore.", "$w=27$ m; total distance $=32$ m"],
  ],
};
