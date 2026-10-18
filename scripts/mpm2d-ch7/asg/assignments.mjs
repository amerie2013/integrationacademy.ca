// MPM2D chapter 7 assignments (homework): 10 questions each — Knowledge 1-3, Thinking 4-5, Communication 6-7, Application 8-10.
// [[key|caption]] in a line is replaced by a figure (uploaded SVG) when published. Titles match the existing rows.
// Figures show given information only. No bare $ signs.
import { figDoc, polygon, atriDoc, sasDoc, sssDoc } from "../bank/fig.mjs";

const r = Math.PI / 180;
const altFig = (A, B, c) => { const b = (c * Math.sin(B * r)) / Math.sin((180 - A - B) * r), x = b * Math.cos(A * r), h = b * Math.sin(A * r); return figDoc({ w: 340, items: [...polygon([[0, 0], [c, 0], [x, h]], { names: ["A", "B", "C"], sides: ["c", "a", "b"], angles: [[0, "A"], [1, "B"]] }), { seg: [[x, 0], [x, h]], color: "red", dash: true }, { text: "h", at: [x + 0.06 * c, h / 2], color: "red", bold: true }] }); };

export const ASSIGNMENTS = [
  { code: "7.1", title: "Assignment 7.1 — The Sine Law", figs: {
      t: atriDoc(52, 69, 14 * Math.sin(59 * r) / Math.sin(52 * r), { a: "14", b: "x", A: "52°", B: "69°" }),
      alt: altFig(60, 55, 9),
      river: atriDoc(68, 61, 140, { c: "140 m", A: "68°", B: "61°", names: ["A", "B", "C"] }) }, lines: [
    "Knowledge & Understanding",
    "1. Find x in the triangle shown, to one decimal place. [[t|Triangle for question 1]]",
    String.raw`2. In acute \(\triangle ABC\), \(\angle A=57^\circ\), \(\angle C=61^\circ\) and \(b=20\). Find a.`,
    String.raw`3. In acute \(\triangle ABC\), a = 12, b = 14 and \(\angle B=77^\circ\). Find \(\angle A\).`,
    "Thinking",
    "4. Use the altitude h in the triangle shown to develop the sine law. Explain each step. [[alt|Altitude for question 4]]",
    String.raw`5. In acute \(\triangle ABC\), \(\angle A\) is twice \(\angle B\) and \(\angle C=66^\circ\). If c = 15, find a and b.`,
    "Communication",
    "6. Explain when the sine law can be used and when it cannot. Give an example of each.",
    "7. Explain why the largest side of a triangle is opposite the largest angle, using the sine law.",
    "Application",
    "8. Points A and B are 140 m apart on a riverbank. A tree C on the far bank makes the angles shown. Find AC and the width of the river. [[river|River for question 8]]",
    "9. Two lighthouses are 22 km apart. A ship makes angles of 49° and 68° with the line joining them. How far is the ship from each lighthouse?",
    "10. Describe how a surveyor could find the distance to an island using a baseline on the shore and the sine law. Include a labelled sketch.",
  ] },
  { code: "7.2", title: "Assignment 7.2 — The Cosine Law", figs: {
      sas: sasDoc(9, 12, 56, { b: "9", c: "12", a: "x", A: "56°" }),
      sss: sssDoc(10, 12, 13, { A: "θ" }),
      dev: figDoc({ w: 340, items: [...polygon([[0, 0], [10, 0], [4, 6.5]], { names: ["A", "B", "C"], sides: ["", "a", "b"], angles: [[0, "A"]] }), { seg: [[4, 0], [4, 6.5]], color: "red", dash: true }, { text: "h", at: [4.5, 3.2], color: "red", bold: true }, { text: "x", at: [2, -0.7], color: "green", bold: true }, { text: "c − x", at: [7, -0.7], color: "green", bold: true }] }) }, lines: [
    "Knowledge & Understanding",
    "1. Find x in the triangle shown. [[sas|SAS triangle for question 1]]",
    "2. Find θ in the triangle shown. [[sss|SSS triangle for question 2]]",
    String.raw`3. In acute \(\triangle ABC\), a = 15, c = 18 and \(\angle B=62^\circ\). Find b.`,
    "Thinking",
    "4. Develop the cosine law using the altitude in the triangle shown. Explain each step. [[dev|Altitude for question 4]]",
    "5. Two sides of a triangle are 10 and 14. Find the included angle that makes the third side exactly 12.",
    "Communication",
    "6. Explain how the cosine law is related to the Pythagorean theorem. What happens when the angle is 90°?",
    String.raw`7. A classmate computes \(a^2=7^2+9^2-2(7)(9)\cos50^\circ\) by first subtracting \(130-126=4\). Explain the error and find the correct value of a.`,
    "Application",
    "8. Two hikers leave a trailhead on paths 61° apart and walk 5.4 km and 6.8 km. How far apart are they?",
    "9. A triangular garden has sides 9 m, 11 m and 14 m. Find all three angles and check that the triangle is acute.",
    "10. From a corner of a field, two fences run 260 m and 300 m with a 48° angle between them. How long a fence is needed to close the triangle?",
  ] },
  { code: "7.3", title: "Assignment 7.3 — Choosing the Right Law", figs: {
      a: atriDoc(63, 54, 16, { c: "16", A: "63°", B: "54°" }),
      b: sasDoc(11, 15, 48, { b: "11", c: "15", A: "48°" }) }, lines: [
    "Knowledge & Understanding",
    "1. For each set of information, name the law you would use first: (a) a, b, c (b) ∠A, ∠B, c (c) b, c, ∠A (d) a, ∠A, b (acute triangle).",
    "2. Solve the triangle shown completely. [[a|Triangle for question 2]]",
    "3. A right triangle has a 41° angle and hypotenuse 18. Find the side opposite the angle. Why is no law needed?",
    "Thinking",
    "4. Solve the triangle shown completely, explaining your choice of law at each step. [[b|Triangle for question 4]]",
    "5. Can a triangle be solved from three angles alone? From two sides alone? Explain with examples.",
    "Communication",
    "6. Write a decision flow chart that tells a classmate which tool to use for any triangle.",
    "7. Explain why, after using the cosine law in an SAS problem, it is safest to find the smaller remaining angle with the sine law.",
    "Application",
    String.raw`8. In acute \(\triangle PQR\), p = 17, q = 19 and r = 22. Find the largest angle and the area of the triangle.`,
    "9. A triangular roof truss has two 4.2 m rafters meeting at a 76° peak. Find the span of the truss and the angles where the rafters meet the walls.",
    "10. Make up one problem that needs the sine law and one that needs the cosine law, and solve both.",
  ] },
  { code: "7.4", title: "Assignment 7.4 — Applications of the Sine & Cosine Laws", figs: {
      fire: atriDoc(57, 64, 13, { c: "13 km", A: "57°", B: "64°", names: ["A", "B", "F"] }),
      lake: sasDoc(380, 420, 59, { b: "380 m", c: "420 m", A: "59°", names: ["C", "", ""] }) }, lines: [
    "Knowledge & Understanding",
    "1. Two ranger towers see a fire at the angles shown. How far is the fire from each tower? [[fire|Fire for question 1]]",
    "2. From point C, a surveyor measures the distances to the ends of a lake shown. Find the length of the lake. [[lake|Lake for question 2]]",
    "3. Two ships leave port on courses 56° apart and sail 17 km and 23 km. How far apart are they?",
    "Thinking",
    "4. Two people 55 m apart, on opposite sides of a tower, see its top at angles of elevation of 54° and 62°. Find the height of the tower.",
    "5. Two people 70 m apart, on opposite sides of a hot-air balloon, see it at angles of elevation of 61° and 67°. How high is the balloon?",
    "Communication",
    "6. Explain why you often need a right-triangle step after using the sine law in a surveying problem.",
    "7. Explain why a longer baseline gives a more reliable triangulation.",
    "Application",
    "8. A tunnel is planned from A to B through a hill. From C, CA = 640 m, CB = 710 m and the angle ACB is 52°. How long is the tunnel?",
    "9. A mast is held by two wires anchored 20 m apart on opposite sides. The wires make angles of 63° and 71° with the ground. Find the length of each wire and the height where they meet the mast.",
    "10. Plan and carry out (or simulate) a triangulation at school: measure a baseline and two angles to a far object, calculate its distance, and discuss your sources of error.",
  ] },
];
