import { fig, coordPts, segmentMid } from "./_figs.mjs";

export default {
  grade: "Geometry (FL B.E.S.T.)",
  code: "8.1",
  title: "Distance, Midpoint, and Slope",
  intro: "Three formulas describe a segment completely on the coordinate plane. The <b>distance formula</b>, $d=\\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}$, is just the Pythagorean Theorem applied to horizontal and vertical legs. The <b>midpoint formula</b>, $M=\\left(\\dfrac{x_1+x_2}{2},\\dfrac{y_1+y_2}{2}\\right)$, averages the coordinates. The <b>slope formula</b>, $m=\\dfrac{y_2-y_1}{x_2-x_1}$, measures steepness and direction, and lets you test whether two segments are parallel (equal slopes) or perpendicular (slopes multiply to $-1$). A horizontal segment has slope $0$; a vertical segment has undefined slope. This worksheet also uses the midpoint formula in reverse to find a missing endpoint, and uses slope to test whether three points lie on the same line.",
  examples: [
    ["Example 1: Distance between two points",
      "Find the distance between $A(1,2)$ and $B(4,6)$.",
      fig(coordPts([{ x: 1, y: 2, label: "A" }, { x: 4, y: 6, label: "B" }]), "The horizontal and vertical legs are $3$ and $4$ — a $3$-$4$-$5$ right triangle.") +
      "Identify the coordinates: $(x_1,y_1)=(1,2)$ and $(x_2,y_2)=(4,6)$.<br>" +
      "Apply the distance formula:<br>" +
      "$d=\\sqrt{(4-1)^2+(6-2)^2}=\\sqrt{3^2+4^2}=\\sqrt{9+16}=\\sqrt{25}=5$.<br>" +
      "The points are $5$ units apart.<br>" +
      "<b>Answer:</b> $5$."],

    ["Example 2: Midpoint of a segment",
      "Find the midpoint of $(-3,5)$ and $(7,-1)$.",
      "Identify the coordinates: $(x_1,y_1)=(-3,5)$ and $(x_2,y_2)=(7,-1)$.<br>" +
      "Average the $x$-coordinates and the $y$-coordinates separately:<br>" +
      "$M=\\left(\\dfrac{-3+7}{2},\\dfrac{5+(-1)}{2}\\right)=\\left(\\dfrac{4}{2},\\dfrac{4}{2}\\right)=(2,2)$.<br>" +
      "This point sits exactly halfway between the two endpoints.<br>" +
      "<b>Answer:</b> $(2,2)$."],

    ["Example 3: Slope through two points",
      "Find the slope of the line through $(2,-1)$ and $(5,8)$.",
      "Identify the coordinates: $(x_1,y_1)=(2,-1)$ and $(x_2,y_2)=(5,8)$.<br>" +
      "Apply the slope formula:<br>" +
      "$m=\\dfrac{8-(-1)}{5-2}=\\dfrac{9}{3}=3$.<br>" +
      "A slope of $3$ means the line rises $3$ units for every $1$ unit it runs to the right.<br>" +
      "<b>Answer:</b> $3$."],

    ["Example 4: Find a missing endpoint",
      "$M(3,1)$ is the midpoint of $\\overline{AB}$, with $A(-1,-2)$. Find $B$.",
      fig(segmentMid(), "$M$ is exactly halfway between $A$ and $B$.") +
      "Solve the midpoint formula for the unknown endpoint: since $x_M=\\dfrac{x_A+x_B}{2}$, we get $x_B=2x_M-x_A$; likewise $y_B=2y_M-y_A$.<br>" +
      "$x_B=2(3)-(-1)=6+1=7$.<br>" +
      "$y_B=2(1)-(-2)=2+2=4$.<br>" +
      "<b>Answer:</b> $B=(7,4)$."],

    ["Example 5: Testing for parallel lines",
      "Two segments have slopes $2$ and $2$. Are the lines parallel?",
      "Two distinct lines with equal slopes never meet — they are parallel.<br>" +
      "<b>Answer:</b> Yes, the lines are parallel (assuming they are not the same line)."],

    ["Example 6: Testing for perpendicular lines",
      "Two segments have slopes $3$ and $-\\dfrac{1}{3}$. Are the lines perpendicular?",
      "Multiply the slopes: $3\\times\\left(-\\dfrac{1}{3}\\right)=-1$.<br>" +
      "A product of $-1$ confirms perpendicularity.<br>" +
      "<b>Answer:</b> Yes."],

    ["Example 7: Distance with negative coordinates",
      "Find the distance between $(-3,-2)$ and $(5,4)$.",
      "Identify the coordinates: $(x_1,y_1)=(-3,-2)$ and $(x_2,y_2)=(5,4)$.<br>" +
      "Apply the distance formula, being careful with the double negatives:<br>" +
      "$d=\\sqrt{(5-(-3))^2+(4-(-2))^2}=\\sqrt{8^2+6^2}=\\sqrt{64+36}=\\sqrt{100}=10$.<br>" +
      "The two points are $10$ units apart.<br>" +
      "<b>Answer:</b> $10$."],

    ["Example 8: Why a horizontal line has slope $0$",
      "Explain why every horizontal segment has slope $0$, using the points $(-1,4)$ and $(6,4)$.",
      "$m=\\dfrac{4-4}{6-(-1)}=\\dfrac{0}{7}=0$.<br>" +
      "The $y$-coordinates never change along a horizontal line, so the numerator of the slope formula is always $0$ — slope $0$."],

    ["Example 9: Why a vertical line has undefined slope",
      "Explain why every vertical segment has undefined slope, using the points $(3,7)$ and $(3,-2)$.",
      "$m=\\dfrac{-2-7}{3-3}=\\dfrac{-9}{0}$.<br>" +
      "Division by zero is undefined, so a vertical line's slope is undefined — it has no defined \"steepness\" because it never runs horizontally at all."],

    ["Example 10: Are three points collinear?",
      "Determine whether $A(1,1)$, $B(3,5)$, and $C(5,9)$ lie on the same line.",
      "Slope of $\\overline{AB}$: $\\dfrac{5-1}{3-1}=\\dfrac{4}{2}=2$.<br>" +
      "Slope of $\\overline{BC}$: $\\dfrac{9-5}{5-3}=\\dfrac{4}{2}=2$.<br>" +
      "Both slopes equal $2$, and the segments share point $B$, so all three points lie on the same line.<br>" +
      "<b>Answer:</b> Yes, $A$, $B$, $C$ are collinear."],

    ["Example 11: Application — cell towers on a city grid",
      "Two cell towers sit at $(2,3)$ and $(14,11)$ on a city grid measured in kilometers. Find the distance between the towers and the coordinates where a relay station should be built exactly halfway between them.",
      "Distance: $d=\\sqrt{(14-2)^2+(11-3)^2}=\\sqrt{12^2+8^2}=\\sqrt{144+64}=\\sqrt{208}=4\\sqrt{13}\\approx14.4$ km.<br>" +
      "Midpoint (relay station): $M=\\left(\\dfrac{2+14}{2},\\dfrac{3+11}{2}\\right)=(8,7)$.<br>" +
      "<b>Answer:</b> distance $=4\\sqrt{13}\\approx14.4$ km; relay station at $(8,7)$."],
  ],
  questions: [
    ["Problem 1: Distance", "Distance between $(0,0)$ and $(6,8)$.", "$10$"],
    ["Problem 2: Midpoint", "Midpoint of $(2,9)$ and $(-4,3)$.", "$(-1,6)$"],
    ["Problem 3: Slope", "Slope through $(-2,4)$ and $(3,-6)$.", "$-2$"],
    ["Problem 4: Endpoint", "Midpoint $(5,-2)$, $P=(9,1)$. Find $Q$.", "$(1,-5)$"],
    ["Problem 5: Parallel", "Slopes $2$ and $2$. Parallel?", "Yes"],
    ["Problem 6: Perpendicular", "Slopes $\\dfrac{2}{5}$ and $-\\dfrac{5}{2}$. Perpendicular?", "Yes"],
    ["Problem 7: Distance", "Between $(1,1)$ and $(4,5)$.", "$5$"],
    ["Problem 8: Midpoint", "Of $(0,0)$ and $(8,-6)$.", "$(4,-3)$"],
    ["Problem 9: Slope", "Through $(3,7)$ and $(3,-2)$.", "Undefined"],
    ["Problem 10: Slope", "Through $(-1,4)$ and $(5,4)$.", "$0$"],
    ["Problem 11: Endpoint", "Midpoint $(0,0)$, $A=(4,-2)$. Find $B$.", "$(-4,2)$"],
    ["Problem 12: Distance", "Between $(-3,2)$ and $(1,5)$.", "$5$"],
    ["Problem 13: Perpendicular", "Slopes $1$ and $1$. Perpendicular?", "No"],
    ["Problem 14: Challenge", "$\\overline{AB}$ has $A(-3,4)$ and midpoint $M(1,1)$. Find endpoint $B$, then find the length $AB$.", "$B=(5,-2)$; $AB=10$"],
    ["Problem 15: Challenge", "Show that $A(0,0)$, $B(2,4)$, $C(5,10)$ are collinear, then verify $AB+BC=AC$.", "Collinear (all slopes $=2$); $AB=2\\sqrt5$, $BC=3\\sqrt5$, $AC=5\\sqrt5$, and $2\\sqrt5+3\\sqrt5=5\\sqrt5$"],
  ],
};
