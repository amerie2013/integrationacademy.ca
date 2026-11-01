// LINALG1 chapter 2 assignments (homework): 12 questions each — Knowledge 1-3, Thinking 4-5, Communication 6-7,
// Application 8-10, Hard Level 11-12. [[key|caption]] in a line is replaced by a figure (uploaded SVG) when published.
// Every assignment is a new row with a fixed id (publish.mjs NEWID). Systems and matrices here appear nowhere else
// in the course (lessons, worksheets and bank use their own).
import { vdoc } from "../vecfig.mjs";
import { linesSvg, planesSvg, stairSvg, matSvg } from "../ws/fig2.mjs";
import { networkSvg, circuitSvg, plateSvg, curveSvg } from "../bank/app27.mjs";
import { am, sys } from "../bank/la.mjs";

const S = String.raw;
const grid = (view) => vdoc({ view, step: 1 });
const sysT = (rows, names) => S`\left\{${sys(rows, names)}\right.`;

export const ASSIGNMENTS = [
  { code: "2.1", title: "Assignment 2.1 — Systems of Linear Equations", figs: {
      g: grid({ xmin: -4, xmax: 6, ymin: -4, ymax: 6 }),
      p: planesSvg([[1, 0, 0, 1], [0, 1, 0, 1], [1, 1, 0, 3]], { center: [1, 1, 0.5], size: 1.3, len: 3 }) }, lines: [
    "Knowledge & Understanding",
    S`1. Which are linear equations in \(x_1,x_2,x_3\)? Explain each: (a) \(\sqrt2\,x_1-x_3=\pi\); (b) \(x_1^2+x_2=1\); (c) \(3x_1=x_2-4x_3+7\); (d) \(x_1\sin x_2=0\); (e) \(\frac{x_1+x_2}{5}=x_3\).`,
    S`2. Determine whether \((1,-2,3)\) and \((4,0,-1)\) are solutions of \(${sysT([[2, 1, 1, 3], [1, -1, 2, 9], [0, 3, 1, -3]])}\).`,
    S`3. Solve by back substitution: \(x_1-2x_2+x_3-x_4=1\), \(x_2+3x_3+x_4=10\), \(2x_3-x_4=3\), \(4x_4=4\).`,
    "Thinking",
    S`4. For which values of \(a\) and \(b\) does \(ax_1+2x_2=4\), \(3x_1+6x_2=b\) have no solution, exactly one solution, infinitely many solutions?`,
    S`5. The three planes \(x_1=1\), \(x_2=1\), \(x_1+x_2=3\) in \(\mathbb R^3\) are shown. Do they have a common point? Describe how they sit relative to each other. [[p|The three planes]]`,
    "Communication",
    S`6. Explain why a linear system can never have exactly two solutions. (Hint: if \(\vec p\) and \(\vec q\) are solutions, look at \(\vec p+t(\vec q-\vec p)\).)`,
    S`7. Solve \(2x_1+x_2=5\), \(x_1-x_2=-2\) and draw both lines on the grid. Explain how the picture shows the number of solutions. [[g|Grid for your sketch]]`,
    "Application",
    S`8. A theatre sold 400 tickets: adult tickets at 15 dollars and student tickets at 9 dollars, for 5040 dollars in total. Write a system and find how many of each were sold.`,
    S`9. A boat travels 36 km downstream in 2 hours and the same 36 km back upstream in 3 hours. Write a linear system for the boat's speed in still water and the current's speed, and solve it.`,
    S`10. The angles of a triangle satisfy: the largest is 30° more than the sum of the other two, and the smallest is half the middle one. Find the three angles.`,
    "Hard Level",
    S`11. Find all \(k\) for which \(x_1+kx_2=1\), \(kx_1+4x_2=2\) has (a) no solution, (b) infinitely many solutions. For the case of infinitely many, describe the solution set as a line in vector form.`,
    S`12. Two different systems in two unknowns have exactly the same solution set, the line \(x_1+x_2=2\). Must their equations be multiples of each other? Prove your answer or give a counterexample (consider systems of different sizes).`,
  ] },

  { code: "2.2", title: "Assignment 2.2 — Augmented Matrices and Row Operations", figs: {
      m: matSvg([[2, 0, -1, 3, 4], [0, 5, 1, 0, -2], [1, -1, 0, 2, 6]]),
      l: linesSvg([[1, 3, 7], [2, -1, 0]], { xmin: -2, xmax: 5, ymin: -1, ymax: 5 }, [1, 2]) }, lines: [
    "Knowledge & Understanding",
    S`1. Write the system whose augmented matrix is shown, using unknowns \(x_1,\dots,x_4\). [[m|An augmented matrix]]`,
    S`2. Write the augmented matrix of \(5x_2-x_1=3\), \(x_3+2x_1=0\), \(x_1-x_2+x_3=-4\). (Watch the order of the unknowns.)`,
    S`3. Apply, in order, \(R_1\leftrightarrow R_3\), \(R_2\to R_2-2R_1\), \(R_3\to\tfrac12R_3\) to \(${am([[2, 4, 0, 6], [2, 1, 3, 5], [1, -1, 2, 0]])}\), showing the whole matrix after each operation.`,
    "Thinking",
    S`4. Show that \(R_1\leftrightarrow R_2\) can be produced by a sequence of operations of the other two types (scaling and replacement). Write the sequence and show the matrices for a general \(2\times n\) matrix.`,
    S`5. Is \(${am([[1, 2], [3, 4]], false)}\) row equivalent to \(${am([[1, 2], [0, 0]], false)}\)? Justify using what row operations preserve.`,
    "Communication",
    S`6. A student "simplifies" a system with the step \(R_2\to 3R_1\). Explain carefully what goes wrong, using the system \(x_1+x_2=3\), \(x_1-x_2=1\) as an example.`,
    S`7. The figure shows \(x_1+3x_2=7\) and \(2x_1-x_2=0\). Perform \(R_2\to R_2-2R_1\) and explain, with a sketch of the new line, why the intersection point does not move. [[l|The two lines]]`,
    "Application",
    S`8. Solve \(${sysT([[1, 1, 1, 2], [2, 3, 1, -1], [1, -1, 4, 15]])}\) using row operations on the augmented matrix, showing every matrix.`,
    S`9. Decide whether \(${sysT([[1, 2, 1, 3], [3, 5, 4, 7], [1, 1, 2, 4]])}\) is consistent. Show every step.`,
    S`10. A bakery uses flour, sugar and butter (kg) for three products. One batch of bread uses (2, 0.5, 0.5), a cake (1, 1, 1), cookies (1, 1, 0.5). It has exactly 9 kg flour, 4.5 kg sugar and 3.5 kg butter. Set up the augmented matrix (clear decimals first) and find how many batches of each use everything.`,
    "Hard Level",
    S`11. For which \(h\) and \(k\) is the system with augmented matrix \(${am([[1, -2, 1, "h"], [2, -3, 4, 1], [1, -1, "k", 0]])}\) consistent? When is the solution unique?`,
    S`12. Row operations turn \([A\mid\vec b]\) into \([A\mid\vec c]\) (the same left part \(A\)). Prove that if \(A\vec x=\vec b\) is consistent, then \(\vec b=\vec c\). Then give an example with \(\vec b\ne\vec c\) where the system is inconsistent.`,
  ] },

  { code: "2.3", title: "Assignment 2.3 — Row Echelon Form and RREF", figs: {
      s: stairSvg([["1", "*", "0", "*", "0", "*"], ["0", "0", "1", "*", "0", "*"], ["0", "0", "0", "0", "1", "*"]]),
      t: stairSvg([["?", "?", "?", "?"], ["?", "?", "?", "?"], ["?", "?", "?", "?"]]) }, lines: [
    "Knowledge & Understanding",
    S`1. Classify as RREF, REF only, or neither, and give the reason: \(${am([[0, 1, 4, 0], [0, 0, 0, 1], [0, 0, 0, 0]], false)}\), \(${am([[1, 0, 2], [0, 3, 1], [0, 0, 0]], false)}\), \(${am([[1, 2, 0], [0, 0, 0], [0, 0, 1]], false)}\).`,
    S`2. The shape of an RREF is shown (\(*\) = any number). Name the pivot columns, the basic variables and the free variables of the system in \(x_1,\dots,x_5\). [[s|The RREF pattern]]`,
    S`3. Reduce \(${am([[2, 6, -2, 8], [1, 4, 1, 7], [0, 1, 2, 3]])}\) to RREF, showing every matrix, and read off the solution set.`,
    "Thinking",
    S`4. List every possible RREF pattern of a \(3\times3\) matrix of rank 2 (use \(*\) for arbitrary entries). How many are there?`,
    S`5. Find a \(3\times4\) augmented matrix in RREF whose system has exactly the solutions \((2,0,-1)+t(1,1,0)\). Is it unique? Explain.`,
    "Communication",
    S`6. Explain why the RREF of a matrix is unique but an REF is not. Illustrate with two different REFs of \(${am([[2, 2, 4], [1, 3, 5]])}\).`,
    S`7. Explain how to tell from the RREF of \([A\mid\vec b]\) whether a system has no solution, one solution or infinitely many. Sketch one \(3\times4\) pattern of each kind on the template. [[t|Template]]`,
    "Application",
    S`8. Find the RREF of \(${am([[1, -1, 2, 1, 3], [2, -2, 5, 4, 7], [1, -1, 3, 3, 4]])}\) and write the general solution in vector form.`,
    S`9. A small farm feeds three mixes A, B, C with (protein, fibre) in kg per bag of (2, 1), (1, 1), (3, 2). It needs exactly 13 kg protein and 8 kg fibre. Find all possible numbers of bags (allow any real numbers first, then list the whole-number solutions).`,
    S`10. Reduce \(${am([[3, 0, 6, 9], [1, 2, 0, 5], [0, 1, -1, 1]])}\) to RREF. What does the result say about the three planes in \(\mathbb R^3\)?`,
    "Hard Level",
    S`11. For which \(a\) is the RREF of \(${am([[1, "a", 1], ["a", 1, 1], [1, 1, "a"]], false)}\) the identity matrix? Find the RREF for each remaining value of \(a\).`,
    S`12. Suppose \(R\) is the RREF of \(A\) and has a zero last row. Prove that some row of \(A\) is a linear combination of the other rows. (Hint: row operations combine rows.)`,
  ] },

  { code: "2.4", title: "Assignment 2.4 — Gaussian and Gauss–Jordan Elimination", figs: {
      p: planesSvg([[1, 2, -1, 2], [2, 1, 1, 7], [1, -1, 2, 5]], { center: [2, 1, 2], size: 1, len: 3.5 }),
      g: grid({ xmin: -1, xmax: 3, ymin: -1, ymax: 3 }) }, lines: [
    "Knowledge & Understanding",
    S`1. Solve \(${sysT([[1, 2, 1, 5], [2, 5, 3, 13], [1, 3, 3, 10]])}\) by Gaussian elimination and back substitution, showing every matrix.`,
    S`2. Solve the same system by Gauss–Jordan elimination (all the way to RREF) and compare the two methods: which needs fewer arithmetic steps here?`,
    S`3. With partial pivoting, which row is used first for \(${am([[1, 3, 2], [-4, 1, 0], [2, 2, 5]], false)}\)? Carry out the first elimination step.`,
    "Thinking",
    S`4. The three planes \(x_1+2x_2-x_3=2\), \(2x_1+x_2+x_3=7\), \(x_1-x_2+2x_3=5\) are shown. Use elimination to describe their intersection exactly. [[p|The three planes]]`,
    S`5. For which \(k\) and \(h\) does \(${sysT([[1, 1, 2, 1], [2, 3, 3, 4], [1, 2, "k", "h"]])}\) have one solution, none, or infinitely many?`,
    "Communication",
    S`6. Explain the difference between the forward phase and the backward phase of Gauss–Jordan elimination, and why the forward phase alone already tells you how many solutions there are.`,
    S`7. Explain why choosing a pivot of 1 (or swapping to get one) avoids fractions, using \(${am([[4, 2, 6], [1, 3, 4]])}\) as your example.`,
    "Application",
    S`8. Solve the \(4\times4\) system \(${sysT([[1, 1, 0, 1, 4], [0, 1, 1, 1, 3], [1, 0, 1, 1, 2], [1, 1, 1, 0, 3]])}\), showing every matrix.`,
    S`9. A company makes three products using machine hours on machines I, II, III: product A needs (1, 2, 1) hours per unit, B (2, 1, 1), C (1, 1, 2). Machines have 40, 50 and 46 hours available. How many units of each use all the hours?`,
    S`10. Solve \(0.003x_1+x_2=1\), \(x_1+x_2=2\) using 3-significant-digit arithmetic with and without partial pivoting, and compare with the exact answer. Mark the exact solution on the grid. [[g|Grid]]`,
    "Hard Level",
    S`11. Count the number of multiplications/divisions needed by Gaussian elimination (forward phase only) on an \(n\times(n+1)\) augmented matrix, and show it grows like \(\tfrac13n^3\).`,
    S`12. For which \(a\) does \(${sysT([[1, 1, "a", 1], [1, "a", 1, 1], ["a", 1, 1, -2]])}\) have no solution, exactly one, or infinitely many? Give the solutions in each consistent case.`,
  ] },

  { code: "2.5", title: "Assignment 2.5 — Rank and the Number of Solutions", figs: {
      r: matSvg([[1, 2, 0, 3], [0, 0, 1, 4], [0, 0, 0, 0]], [[0, 0], [1, 2]], false),
      l: linesSvg([[1, -1, 0], [1, 1, 4], [2, 1, 6]], { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, [2, 2]) }, lines: [
    "Knowledge & Understanding",
    S`1. Find the rank of \(${am([[1, 3, -1, 2], [2, 6, 1, 1], [3, 9, 0, 3], [1, 3, 2, -1]], false)}\), showing the elimination.`,
    S`2. The REF of a coefficient matrix \(A\) is shown. What is \(\operatorname{rank}A\)? If \(A\vec x=\vec b\) is consistent, how many parameters does the solution have? [[r|An echelon form of A]]`,
    S`3. A system has 5 equations and 3 unknowns, with \(\operatorname{rank}A=3\) and \(\operatorname{rank}[A\mid\vec b]=4\). How many solutions? Explain with ranks.`,
    "Thinking",
    S`4. Find the condition on \(b_1,b_2,b_3\) for \(${am([[1, 2, 1], [2, 5, 3], [1, 3, 2]], false)}\vec x=\vec b\) to be consistent, and describe the set of such \(\vec b\) geometrically.`,
    S`5. Can a \(4\times6\) matrix have rank 5? Can a \(6\times4\) system be consistent for every \(\vec b\)? Explain both answers with pivots.`,
    "Communication",
    S`6. Write the rank theorem for \(A\vec x=\vec b\) (\(A\) is \(m\times n\)) as a decision tree covering all cases, and give a \(2\times2\) example for each leaf.`,
    S`7. The lines \(x_1-x_2=0\), \(x_1+x_2=4\), \(2x_1+x_2=6\) are shown. Use ranks of the \(3\times2\) coefficient matrix and the \(3\times3\) augmented matrix to explain the picture. [[l|Three lines]]`,
    "Application",
    S`8. For which \(t\) does \(${am([[1, 2, "t"], [2, "t", 4], ["t", 4, 4]], false)}\) have rank 1, 2, 3?`,
    S`9. A recipe system for 4 ingredients and 3 nutrients has coefficient matrix of rank 3. Can every nutrient target be met exactly (allowing negative amounts)? How many free choices remain? Explain.`,
    S`10. Classify with ranks and then solve: \(${sysT([[1, -2, 1, 1, 2], [2, -4, 3, 0, 5], [-1, 2, 1, -5, 0]])}\).`,
    "Hard Level",
    S`11. Prove that \(\operatorname{rank}A\le\min(m,n)\) and that \(\operatorname{rank}[A\mid\vec b]\in\{\operatorname{rank}A,\ \operatorname{rank}A+1\}\).`,
    S`12. For which \(a,b\) does \(${sysT([[1, 1, 1, 1], [1, 2, "a", 2], [1, 4, "a^2", "b"]])}\) have exactly one solution, none, infinitely many? (Treat \(a=2\) and \(a\ne2\) separately.)`,
  ] },

  { code: "2.6", title: "Assignment 2.6 — Homogeneous Systems", figs: {
      p: planesSvg([[1, 1, -1, 0], [1, -1, 1, 0]], { center: [0, 0, 0], size: 1.3, len: 2.8, line: { p: [0, 0, 0], d: [0, 1, 1], t0: -1, t1: 1 } }),
      n: networkSvg({ A: [0, 3], B: [4, 3], C: [2, 0] }, [["A", "B", "x₁"], ["B", "C", "x₂"], ["C", "A", "x₃"]], [], { xmin: -1, xmax: 5, ymin: -0.8, ymax: 3.8 }) }, lines: [
    "Knowledge & Understanding",
    S`1. Solve the homogeneous system with coefficient matrix \(${am([[1, 2, -1, 3], [2, 4, 1, 0]], false)}\) and give spanning vectors for its solution set.`,
    S`2. Does \(${sysT([[1, 1, 1, 0], [1, 2, 4, 0], [1, 3, 9, 0]])}\) have nontrivial solutions? Decide using rank, without solving completely.`,
    S`3. The planes \(x_1+x_2-x_3=0\) and \(x_1-x_2+x_3=0\) are shown. Find their line of intersection. [[p|Two planes through the origin]]`,
    "Thinking",
    S`4. For which \(c\) does \(${am([[1, "c", 1], ["c", 1, 1], [1, 1, "c"]], false)}\vec x=\vec 0\) have nontrivial solutions? Find them for each such \(c\).`,
    S`5. \(\vec p=(1,2,-1)\) solves \(A\vec x=\vec b\), and the solutions of \(A\vec x=\vec 0\) are \(t(1,0,1)\). Which of \((3,2,1)\), \((1,2,0)\), \((0,2,-2)\) solve \(A\vec x=\vec b\)? Explain.`,
    "Communication",
    S`6. Explain why the solution set of \(A\vec x=\vec 0\) always passes through the origin, while that of \(A\vec x=\vec b\) (\(\vec b\ne\vec 0\)) never does. Illustrate with a pair of parallel lines in \(\mathbb R^2\).`,
    S`7. Explain the statement "general solution = particular solution + homogeneous solutions", and verify it for \(x_1+x_2-x_3=2\), \(x_1-x_2+x_3=0\).`,
    "Application",
    S`8. In the closed one-way triangle shown no traffic enters or leaves. Write the node equations and find all possible flows. [[n|A closed triangle of one-way streets]]`,
    S`9. Find all vectors in \(\mathbb R^4\) orthogonal to \((1,1,0,1)\), \((0,1,1,0)\) and \((1,0,1,1)\).`,
    S`10. Balance \(x_1\,\mathrm{NH_3}+x_2\,\mathrm{O_2}\to x_3\,\mathrm{NO}+x_4\,\mathrm{H_2O}\) by solving a homogeneous system, showing every matrix.`,
    "Hard Level",
    S`11. Prove: a homogeneous system with more unknowns than equations has infinitely many solutions. Then show that a homogeneous system with more equations than unknowns may still have nontrivial solutions.`,
    S`12. Suppose \(A\vec x=\vec b\) has the solutions \((1,1,0,2)\), \((2,0,1,3)\) and \((0,3,-1,1)\). Find three solutions of \(A\vec x=\vec 0\), and decide whether the homogeneous solution set must contain a plane.`,
  ] },

  { code: "2.7", title: "Assignment 2.7 — Applications of Linear Systems", figs: {
      n: networkSvg({ A: [0, 3], B: [4, 3], C: [4, 0], D: [0, 0] }, [["A", "B", "x₁"], ["C", "B", "x₂"], ["D", "C", "x₃"], ["A", "D", "x₄"]], [["A", -1.4, 0, "250", true], ["B", 1.4, 0, "300", false], ["C", 1.4, 0, "100", true], ["D", -1.4, 0, "50", false]], { xmin: -2, xmax: 6, ymin: -0.9, ymax: 3.9 }),
      c: circuitSvg(30, 5, 10, 10),
      t: plateSvg(60, 20, 20, 60),
      q: curveSvg((x) => 2 + x - x * x, [[-1, 0], [1, 2], [2, 0]], { xmin: -2, xmax: 3, ymin: -3, ymax: 4 }) }, lines: [
    "Knowledge & Understanding",
    S`1. Find the quadratic through the three points shown and check it at each point. [[q|Three points on a parabola]]`,
    S`2. Balance \(x_1\,\mathrm{C_4H_{10}}+x_2\,\mathrm{O_2}\to x_3\,\mathrm{CO_2}+x_4\,\mathrm{H_2O}\), showing the system and its reduction.`,
    S`3. Write Kirchhoff's two laws and use them to set up (not yet solve) the equations for the circuit shown. [[c|A two-loop circuit]]`,
    "Thinking",
    S`4. Solve the circuit of question 3 and check that the power delivered by the source equals the total power used by the resistors (\(P=RI^2\)).`,
    S`5. Explain why a quadratic through four given points usually does not exist, and find a condition on \(c\) for the points \((0,1)\), \((1,2)\), \((2,5)\), \((3,c)\) to lie on one.`,
    "Communication",
    S`6. Describe the four steps of building a linear model (unknowns, equations, solve, interpret), and illustrate each with the traffic network of question 8.`,
    S`7. Explain the averaging rule for steady-state temperatures and why it leads to a linear system. Write the system for the plate shown. [[t|A plate with four interior points]]`,
    "Application",
    S`8. Find all flows in the network shown (cars per hour, one-way streets), and the smallest and largest possible values of \(x_4\). [[n|A traffic network]]`,
    S`9. Solve the plate system of question 7 and check one of the four averages.`,
    S`10. A nutritionist combines three foods with (calories, protein in g) per serving of (200, 10), (100, 15) and (150, 5), plus a fixed condition that the number of servings of food 1 equals that of food 3. Find the servings that give exactly 900 calories and 60 g of protein.`,
    "Hard Level",
    S`11. Find the circle through \((1,2)\), \((5,2)\) and \((3,4)\) by solving a linear system for \(D,E,F\) in \(x^2+y^2+Dx+Ey+F=0\). Give its centre and radius, and explain why the method fails for three collinear points.`,
    S`12. In a three-sector economy each unit of output of sector \(j\) uses \(c_{ij}\) units of sector \(i\): \(C=${am([["0.2", "0.1", "0.1"], ["0.1", "0.3", "0.2"], ["0.1", "0.1", "0.2"]], false)}\). The outside demand is \((60,40,60)\). Set up \((I-C)\vec x=\vec d\) and solve it (clear decimals first).`,
  ] },
];
