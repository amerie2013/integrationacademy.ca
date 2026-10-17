// MPM2D chapter 2 assignments (homework): 10 questions each — Knowledge 1-3, Thinking 4-5, Communication 6-7, Application 8-10.
// [[key|caption]] in a line is replaced by a figure (uploaded SVG) when published. Titles match the existing rows.
// Money and math never use bare $ signs (the assignment checker rejects them).
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";

const lab = (x, y, l = "") => `${l}(${x}, ${y})`.replace(/-/g, "−");
const poly = (pts, names, view) => planeDoc({ view, segs: [{ pts: [...pts, pts[0]], color: "green" }], points: pts.map(([x, y], i) => ({ x, y, label: lab(x, y, names[i]) })), step: { x: 1, y: 1 } });
const circ = (r) => [{ f: (x) => Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color: "violet" }, { f: (x) => -Math.sqrt(Math.max(0, r * r - x * x)), a: -r, b: r, color: "violet" }];

export const ASSIGNMENTS = [
  { code: "2.1", title: "Assignment 2.1 — Midpoint of a Line Segment", figs: {
      par: planeDoc({ view: { xmin: -6, xmax: 7, ymin: -5, ymax: 5 }, segs: [{ pts: [[-4, -3], [3, -2], [5, 3]], color: "green" }], points: [[-4, -3, "A"], [3, -2, "B"], [5, 3, "C"]].map(([x, y, l]) => ({ x, y, label: lab(x, y, l) })), step: { x: 1, y: 1 } }) }, lines: [
    "Knowledge & Understanding",
    String.raw`1. Find the midpoint of \((-9,4)\) and \((3,-6)\).`,
    String.raw`2. Find the midpoint of \((5,-2)\) and \((-2,7)\).`,
    String.raw`3. \(M(2,-3)\) is the midpoint of \(AB\), where \(A(-4,1)\). Find \(B\) and check your answer.`,
    "Thinking",
    "4. A, B and C are three vertices of parallelogram ABCD. Find D, then verify that the diagonals bisect each other. [[par|Parallelogram for question 4]]",
    String.raw`5. The midpoint of \((2a,b)\) and \((b,4)\) is \((5,3)\). Find \(a\) and \(b\).`,
    "Communication",
    "6. Explain, with your own example, how to find a missing endpoint when you know the midpoint and the other endpoint.",
    "7. Explain why the centre of a circle is the midpoint of any of its diameters.",
    "Application",
    String.raw`8. Two hikers are at \((-6,4)\) and \((10,-8)\) on a map grid (km). They agree to meet halfway. Where do they meet?`,
    String.raw`9. A circular pond has a diameter with endpoints \((-5,-3)\) and \((7,2)\) (metres). Find the centre of the pond and its radius.`,
    String.raw`10. Find the three points that divide the segment from \((-7,-5)\) to \((9,7)\) into four equal parts.`,
  ] },
  { code: "2.2", title: "Assignment 2.2 — Length of a Line Segment", figs: {
      tri: poly([[-4, -1], [2, -3], [0, 3]], "ABC", { xmin: -6, xmax: 4, ymin: -5, ymax: 5 }) }, lines: [
    "Knowledge & Understanding",
    String.raw`1. Find the length of the segment from \((-5,1)\) to \((7,6)\).`,
    String.raw`2. Find the length of the segment from \((2,-3)\) to \((-4,5)\).`,
    String.raw`3. Find the length of the segment from \((1,-2)\) to \((4,4)\), exactly and to two decimal places.`,
    "Thinking",
    "4. Classify the triangle shown by its side lengths, and decide whether it has a right angle. [[tri|Triangle for question 4]]",
    String.raw`5. Find all points on the \(x\)-axis that are \(10\) units from \((-2,6)\).`,
    "Communication",
    "6. Explain how the length formula comes from the Pythagorean theorem. Include a sketch.",
    "7. When should you leave a length as a square root, and when should you give a decimal? Give an example of each.",
    "Application",
    String.raw`8. On a park map each unit is 10 m. A path runs straight from the gate at \((0,0)\) to the fountain at \((9,12)\). How long is the path in metres?`,
    String.raw`9. Show that the triangle with vertices \((-2,-3)\), \((4,5)\) and \((-6,0)\) is a right triangle.`,
    String.raw`10. Your home is at \(H(1,2)\). Store 1 is at \((7,-6)\) and store 2 is at \((-8,5)\). Which store is closer, and by how much?`,
  ] },
  { code: "2.3", title: "Assignment 2.3 — Equation of a Circle (centre at the origin)", figs: {
      c13: planeDoc({ view: { xmin: -15, xmax: 15, ymin: -15, ymax: 15 }, curves: circ(13), points: [{ x: 5, y: -12, label: "(5, −12)", color: "red" }], step: { x: 5, y: 5 } }) }, lines: [
    "Knowledge & Understanding",
    String.raw`1. Write the equation of the circle with centre \((0,0)\) and radius \(8\).`,
    String.raw`2. State the radius of \(x^2+y^2=75\), exactly and to two decimal places.`,
    String.raw`3. Is \((-7,24)\) on the circle \(x^2+y^2=625\)? Show your check.`,
    "Thinking",
    String.raw`4. The circle shown is centred at the origin. Write its equation, then decide whether \((-13,0)\) and \((12,5)\) are on it. [[c13|Circle for question 4]]`,
    String.raw`5. Find the points on \(x^2+y^2=58\) with \(y=3\).`,
    "Communication",
    String.raw`6. Explain how the equation \(x^2+y^2=r^2\) is developed from the length formula.`,
    "7. Explain how to decide whether a point is inside, on or outside a circle centred at the origin, with an example of each.",
    "Application",
    String.raw`8. A sprinkler at the origin waters a circle of radius 8 m. Which of these points get water: \((5,6)\), \((-7,5)\), \((0,-8)\)? Explain.`,
    String.raw`9. A circular running track is modelled by \(x^2+y^2=1600\) (metres). A runner is at a point with \(x=24\). Where could the runner be?`,
    String.raw`10. A tunnel opening is the top half of \(x^2+y^2=36\) (metres). Can a truck 4 m wide and 4.5 m tall drive through the middle of the tunnel? Explain.`,
  ] },
  { code: "2.4", title: "Assignment 2.4 — Medians, Right Bisectors & Altitudes", figs: {
      tri: poly([[-4, -2], [6, 0], [0, 6]], "ABC", { xmin: -6, xmax: 8, ymin: -4, ymax: 8 }) }, lines: [
    "Knowledge & Understanding",
    String.raw`1. For \(\triangle ABC\) with \(A(-4,-2)\), \(B(6,0)\), \(C(0,6)\), find the midpoint of \(BC\).`,
    "2. Find the slope of the altitude from A to BC.",
    "3. Describe a right bisector of a side of a triangle in your own words.",
    "Thinking",
    "4. Find the equations of the medians from A and from C, and use them to find the centroid. Check with the average of the vertices. [[tri|Triangle for questions 1 to 10]]",
    "5. Find the orthocentre of the triangle, and check it with the third altitude.",
    "Communication",
    "6. Explain the difference between a median and an altitude. Can they ever be the same line?",
    "7. Explain why you only need two altitudes to find the orthocentre.",
    "Application",
    "8. Find the circumcentre of the triangle.",
    "9. Show that the circumcentre, centroid and orthocentre of this triangle all lie on one line.",
    "10. A park designer wants a fountain the same distance from three benches at A, B and C (units in metres). Where should it go, and how far is it from each bench?",
  ] },
  { code: "2.5", title: "Assignment 2.5 — Verifying Geometric Properties", figs: {
      sq: poly([[-3, -2], [3, -4], [5, 2], [-1, 4]], "ABCD", { xmin: -5, xmax: 7, ymin: -6, ymax: 6 }) }, lines: [
    "Knowledge & Understanding",
    String.raw`1. Are lines with slopes \(\frac43\) and \(-\frac34\) perpendicular? Explain.`,
    String.raw`2. Are \(AB\) with \(A(1,1)\), \(B(4,5)\) and \(CD\) with \(C(0,0)\), \(D(3,-4)\) the same length?`,
    "3. Name the quadrilateral whose diagonals bisect each other and are equal but are not perpendicular.",
    "Thinking",
    "4. Classify ABCD as precisely as possible. Show all the slopes and lengths you use. [[sq|Quadrilateral for question 4]]",
    String.raw`5. \(A(1,1)\), \(B(5,3)\) and \(C(k,7)\) form a triangle with a right angle at \(B\). Find \(k\).`,
    "Communication",
    "6. Describe two different ways to prove that a quadrilateral on a grid is a parallelogram.",
    "7. Explain how you would show, using coordinates, that a rhombus is not a square.",
    "Application",
    String.raw`8. In the triangle with vertices \((-5,-1)\), \((3,7)\) and \((5,-3)\), show that the segment joining the midpoints of the two sides that meet at \((-5,-1)\) is parallel to the third side and half as long.`,
    String.raw`9. Show that \((0,6)\), \((3,2)\), \((0,-4)\), \((-3,2)\) form a kite, and that its diagonals are perpendicular.`,
    String.raw`10. A tiler says the tile with corners \((0,0)\), \((4,1)\), \((5,5)\), \((1,4)\) is a square. Is the tiler right? Explain.`,
  ] },
  { code: "2.6", title: "Assignment 2.6 — Problems Involving Lines & Line Segments", figs: {
      pl: planeDoc({ view: { xmin: -3, xmax: 7, ymin: -2, ymax: 8 }, lines: [{ m: 1, b: 3, color: "violet" }], points: [{ x: 5, y: 0, label: "P(5, 0)", color: "red" }], step: { x: 1, y: 1 } }) }, lines: [
    "Knowledge & Understanding",
    String.raw`1. Find the shortest distance from \((-4,3)\) to the line \(y=-2\).`,
    String.raw`2. Write the equation of the line through \((3,4)\) perpendicular to \(y=-3x+2\).`,
    String.raw`3. Find the shortest distance from \((6,-1)\) to the line \(x=1\).`,
    "Thinking",
    String.raw`4. Find the shortest distance from P to the line \(y=x+3\) shown. Give the foot of the perpendicular and the distance. [[pl|Point and line for question 4]]`,
    String.raw`5. Find the point on the \(y\)-axis that is the same distance from \((1,5)\) and \((7,-1)\).`,
    "Communication",
    "6. List the four steps for finding the shortest distance from a point to a line, and explain why each is needed.",
    "7. Explain why every point that is the same distance from A and B lies on the right bisector of AB.",
    "Application",
    String.raw`8. A cabin is at \((-2,8)\) and a straight road follows \(y=2x+2\) (units in km). How long is the shortest new driveway from the cabin to the road, and where does it meet the road?`,
    String.raw`9. Find the length of the chord of \(x^2+y^2=169\) that lies on the line \(y=-5\).`,
    String.raw`10. Find the distance between the parallel lines \(y=3x+2\) and \(y=3x-8\).`,
  ] },
];
