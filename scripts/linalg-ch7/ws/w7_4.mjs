// LINALG1 Worksheet 7.4 — Geometric Transformations of the Plane
// Self-contained: complete notes, 9 worked examples with figures, 13 problems with an answer key.
import { svgT } from "./figT.mjs";
import { S, def, thm } from "./wkit.mjs";
import { matPic } from "./fig3.mjs";
import { vecs2 } from "./fig5.mjs";
import { sqMap, ptMap, shapeMap } from "./fig7.mjs";
import { am } from "../bank/la.mjs";

const P = (svg, w = 4.4) => svgT(svg, w);
const M = (m) => am(m, false);
const C = (...a) => am(a.map((x) => [x]), false);
const r2 = Math.SQRT1_2, r3 = Math.sqrt(3);


const NOTES = [
  { h: "1. Rotations",
    lead: thm("rotation", S`Rotation by \(\theta\) counterclockwise about \(\vec 0\): \[R_\theta=${M([["\\cos\\theta", "-\\sin\\theta"], ["\\sin\\theta", "\\cos\\theta"]])}.\]`) + S`\pf{\(\vec e_1\) goes to \((\cos\theta,\sin\theta)\); \(\vec e_2\), at angle \(90^\circ\), goes to \((\cos(\theta+90^\circ),\sin(\theta+90^\circ))=(-\sin\theta,\cos\theta)\).}`,
    fig: sqMap([[r2, -r2], [r2, r2]], { w: 4 }), w: 0.5 },
  { h: "2. Reflections in the axes and diagonals",
    lead: S`Read off where \(\vec e_1\), \(\vec e_2\) go: \[\begin{array}{ll}x_1\text{-axis: }${M([[1, 0], [0, -1]])} & x_2\text{-axis: }${M([[-1, 0], [0, 1]])}\\[10pt] x_2=x_1\text{: }${M([[0, 1], [1, 0]])} & x_2=-x_1\text{: }${M([[0, -1], [-1, 0]])}\end{array}\] The line \(x_2=x_1\) swaps the coordinates.`,
    fig: shapeMap([[0, -1], [-1, 0]], [[1, 0], [2, 0], [2, 1], [1, 2]], { w: 4, label: "x₂ = −x₁" }), w: 0.5 },
  { h: "3. Projection onto a line",
    lead: def("projection", S`For the line \(L\) through \(\vec 0\) along a unit vector \(\vec u\), \(P\vec x=(\vec u\cdot\vec x)\vec u\) is the point of \(L\) closest to \(\vec x\).`) + thm("matrix", S`\(P=\vec u\vec u^T\). For \(x_2=mx_1\): \(P=\frac1{1+m^2}${M([[1, "m"], ["m", "m^2"]])}\), and \(P^2=P\).`) + S`\pf{\((\vec u\cdot\vec x)\vec u=\vec u(\vec u^T\vec x)=(\vec u\vec u^T)\vec x\); \(P^2=\vec u(\vec u^T\vec u)\vec u^T=\vec u\vec u^T\).}`,
    fig: vecs2([[[5, 5], "x", "blue"], [[2, 6], "Px", "violet"]], { xmin: -1, xmax: 6, ymin: -1, ymax: 7 }, { segs: [{ pts: [[-1 / 3, -1], [7 / 3, 7]], color: "green", w: 2.4 }, { pts: [[5, 5], [2, 6]], color: "gray", w: 1.2 }] }), w: 0.5 },
  { h: "4. Reflection in a line",
    lead: thm("reflection", S`The reflection in \(L\) is \(R=2P-I\). It satisfies \(R^2=I\), \(R=R^T\), and \(P\vec x\) is the midpoint of \(\vec x\) and \(R\vec x\).`) + S`\pf{\(R\vec x=\vec x+2(P\vec x-\vec x)\) moves \(\vec x\) twice the distance to \(L\). \(R^2=4P^2-4P+I=I\) since \(P^2=P\).}`,
    fig: vecs2([[[5, 5], "x", "blue"], [[-1, 7], "Rx", "red"], [[2, 6], "Px", "violet"]], { xmin: -2, xmax: 6, ymin: -1, ymax: 8 }, { segs: [{ pts: [[-1 / 3, -1], [8 / 3, 8]], color: "green", w: 2.4 }, { pts: [[5, 5], [-1, 7]], color: "gray", w: 1.2 }] }), w: 0.5 },
  { h: "5. Dilations, stretches and shears",
    lead: S`\(kI\): dilation (\(k>1\)) or contraction (\(0<k<1\)). \(\operatorname{diag}(k_1,k_2)\): stretch the axes separately (area \(\times|k_1k_2|\)). Shears \(${M([[1, "k"], [0, 1]])}\) (horizontal) and \(${M([[1, 0], ["k", 1]])}\) (vertical) slide points parallel to an axis and keep areas.`,
    fig: sqMap([[1, 0], [-1, 1]], { w: 4 }), w: 0.5 },
  { h: "6. Recognising a map",
    lead: S`Read the columns (where \(\vec e_1,\vec e_2\) go) and test: \(A^TA=I\) with \(\det A=1\) is a rotation; \(A^2=I\), \(A=A^T\), \(\det A=-1\) is a reflection; \(A^2=A\) with \(\det A=0\) is a projection; \(\det A=1\) with \(A-I\) of rank 1 and nilpotent is a shear.`,
    fig: P(matPic([["cos θ", "−sin θ"], ["sin θ", "cos θ"]], { label: "rotation: AᵀA = I, det = 1" }), 2.6), w: 0.55 },
];

const EXAMPLES = [
  { title: "Rotation by 45°", q: S`Rotate \((2,0)\) by \(45^\circ\).`,
    fig: ptMap([[r2, -r2], [r2, r2]], [2, 0], { w: 3.8 }),
    steps: [S`\(R_{45^\circ}=\tfrac1{\sqrt2}${M([[1, -1], [1, 1]])}\).`, S`\[R_{45^\circ}${C(2, 0)}=\tfrac1{\sqrt2}${C("2-0", "2+0")}=${C("\\sqrt2", "\\sqrt2")}.\]`, S`Length check: \((\sqrt2)^2+(\sqrt2)^2=4=2^2\) ✓.`],
    ans: S`\((\sqrt2,\sqrt2)\)` },
  { title: "Rotation by 120°", q: S`Rotate \((0,2)\) by \(120^\circ\).`,
    fig: ptMap([[-0.5, -r3 / 2], [r3 / 2, -0.5]], [0, 2], { w: 3.8 }),
    steps: [S`\(\cos120^\circ=-\tfrac12\), \(\sin120^\circ=\tfrac{\sqrt3}2\): \(R=${M([["-\\tfrac12", "-\\tfrac{\\sqrt3}2"], ["\\tfrac{\\sqrt3}2", "-\\tfrac12"]])}\).`, S`\[R${C(0, 2)}=${C("0-\\sqrt3", "0-1")}=${C("-\\sqrt3", -1)}.\]`],
    ans: S`\((-\sqrt3,-1)\)` },
  { title: "Reflection in x₂ = −x₁", q: S`Reflect \((3,1)\) in the line \(x_2=-x_1\).`,
    fig: ptMap([[0, -1], [-1, 0]], [3, 1], { w: 3.8, names: ["x", "Rx"] }),
    steps: [S`\(\vec e_1\to(0,-1)\), \(\vec e_2\to(-1,0)\): \(R=${M([[0, -1], [-1, 0]])}\).`, S`\[R${C(3, 1)}=${C("0-1", "-3+0")}=${C(-1, -3)}.\]`],
    ans: S`\((-1,-3)\)` },
  { title: "Projection onto x₂ = x₁", q: S`Project \((3,1)\) onto \(x_2=x_1\).`,
    fig: vecs2([[[3, 1], "x", "blue"], [[2, 2], "Px", "violet"]], { xmin: -1, xmax: 4, ymin: -1, ymax: 3 }, { segs: [{ pts: [[-1, -1], [3, 3]], color: "green", w: 2.4 }, { pts: [[3, 1], [2, 2]], color: "gray", w: 1.2 }] }),
    steps: [S`\(m=1\): \(P=\tfrac12${M([[1, 1], [1, 1]])}\).`, S`\[P${C(3, 1)}=\tfrac12${C("3+1", "3+1")}=${C(2, 2)}.\]`, S`Check: \(${M([[1, 1]])}${C("3-2", "1-2")}=1-1=0\) ✓ (the error is perpendicular).`],
    ans: S`\((2,2)\)` },
  { title: "Projection onto x₂ = 3x₁", q: S`Project \((5,5)\) onto \(x_2=3x_1\).`,
    fig: vecs2([[[5, 5], "x", "blue"], [[2, 6], "Px", "violet"]], { xmin: -1, xmax: 6, ymin: -1, ymax: 7 }, { segs: [{ pts: [[-1 / 3, -1], [7 / 3, 7]], color: "green", w: 2.4 }, { pts: [[5, 5], [2, 6]], color: "gray", w: 1.2 }] }),
    steps: [S`\(1+m^2=10\): \(P=\tfrac1{10}${M([[1, 3], [3, 9]])}\).`, S`\[P${C(5, 5)}=\tfrac1{10}${C("5+15", "15+45")}=\tfrac1{10}${C(20, 60)}=${C(2, 6)}.\]`, S`Check: \(${M([[1, 3]])}${C("5-2", "5-6")}=3-3=0\) ✓.`],
    ans: S`\((2,6)\)` },
  { title: "Reflection in x₂ = 3x₁", q: S`Reflect \((5,5)\) in \(x_2=3x_1\).`,
    fig: vecs2([[[5, 5], "x", "blue"], [[-1, 7], "Rx", "red"]], { xmin: -2, xmax: 6, ymin: -1, ymax: 8 }, { segs: [{ pts: [[-1 / 3, -1], [8 / 3, 8]], color: "green", w: 2.4 }, { pts: [[5, 5], [-1, 7]], color: "gray", w: 1.2 }] }),
    steps: [S`\[R=2P-I=\tfrac15${M([[1, 3], [3, 9]])}-${M([[1, 0], [0, 1]])}=\tfrac15${M([["1-5", 3], [3, "9-5"]])}=\tfrac15${M([[-4, 3], [3, 4]])}.\]`, S`\[R${C(5, 5)}=\tfrac15${C("-20+15", "15+20")}=${C(-1, 7)}.\]`, S`Midpoint \(\tfrac12(${C(5, 5)}+${C(-1, 7)})=${C(2, 6)}=P\vec x\) ✓.`],
    ans: S`\((-1,7)\)` },
  { title: "A vertical shear", q: S`Apply the vertical shear \(${M([[1, 0], [-1, 1]])}\) to the unit square.`,
    fig: sqMap([[1, 0], [-1, 1]], { w: 3.8 }),
    steps: [S`\[${M([[1, 0], [-1, 1]])}${M([[0, 1, 0, 1], [0, 0, 1, 1]])}=${M([[0, 1, 0, 1], [0, "-1+0", "0+1", "-1+1"]])}=${M([[0, 1, 0, 1], [0, -1, 1, 0]])}.\]`, S`A parallelogram with vertical sides of length 1 and width 1: area 1 (\(\det=1\)).`],
    ans: S`\((0,0),(1,-1),(0,1),(1,0)\)` },
  { title: "Unequal stretches", q: S`Apply \(D=\operatorname{diag}(2,\tfrac12)\) to the square with corners \((0,0),(2,0),(2,2),(0,2)\).`,
    fig: shapeMap([[2, 0], [0, 0.5]], [[0, 0], [2, 0], [2, 2], [0, 2]], { w: 3.8 }),
    steps: [S`\[D${M([[0, 2, 2, 0], [0, 0, 2, 2]])}=${M([[2, 0], [0, "\\tfrac12"]])}${M([[0, 2, 2, 0], [0, 0, 2, 2]])}=${M([[0, 4, 4, 0], [0, 0, 1, 1]])}.\]`, S`Area: \(4\to4\times1=4\); \(\det D=2\cdot\tfrac12=1\).`],
    ans: S`rectangle \(4\times1\), same area` },
  { title: "Identifying a projection", q: S`Describe \(A=\tfrac1{25}${M([[9, 12], [12, 16]])}\).`,
    fig: P(matPic([[9, 12], [12, 16]], { label: "25A" }), 1.8),
    steps: [S`\[A^2=\tfrac1{625}${M([[9, 12], [12, 16]])}${M([[9, 12], [12, 16]])}=\tfrac1{625}${M([["81+144", "108+192"], ["108+192", "144+256"]])}=\tfrac1{625}${M([[225, 300], [300, 400]])}=A.\]`, S`\(\det A=\tfrac1{625}(144-144)=0\) and \(A=\vec u\vec u^T\) with \(\vec u=\tfrac15(3,4)\): \(\tfrac1{25}${C(3, 4)}${M([[3, 4]])}=\tfrac1{25}${M([[9, 12], [12, 16]])}\) ✓.`],
    ans: S`projection onto the line along \((3,4)\)` },
];

const PROBLEMS = [
  { level: 1, q: S`Reflect \((4,-3)\) in the \(x_1\)-axis.`, ans: S`\((4,3)\)` },
  { level: 1, q: S`Rotate \((0,5)\) by \(90^\circ\).`, ans: S`\((-5,0)\)`, fig: ptMap([[0, -1], [1, 0]], [0, 5], { w: 3.4 }) },
  { level: 1, q: S`Apply the dilation \(3I\) to \((1,-2)\).`, ans: S`\((3,-6)\)` },
  { level: 2, q: S`Write \(R_{30^\circ}\) exactly.`, ans: S`\(${M([["\\tfrac{\\sqrt3}2", "-\\tfrac12"], ["\\tfrac12", "\\tfrac{\\sqrt3}2"]])}\)` },
  { level: 2, q: S`Find the matrix of the projection onto \(x_2=-x_1\).`, ans: S`\(\tfrac12${M([[1, -1], [-1, 1]])}\)`, fig: vecs2([[[1, -1], "u", "violet"]], { xmin: -2, xmax: 2, ymin: -2, ymax: 2 }, { segs: [{ pts: [[-2, 2], [2, -2]], color: "green", w: 2.4 }] }) },
  { level: 2, q: S`Reflect \((0,5)\) in the line \(x_2=\tfrac12x_1\).`, ans: S`\((4,-3)\) (\(R=\tfrac15${M([[3, 4], [4, -3]])}\))`, fig: vecs2([[[0, 5], "x", "blue"]], { xmin: -1, xmax: 5, ymin: -4, ymax: 6 }, { segs: [{ pts: [[-1, -0.5], [5, 2.5]], color: "green", w: 2.4 }] }) },
  { level: 2, q: S`Apply the horizontal shear \(${M([[1, -2], [0, 1]])}\) to \((1,3)\).`, ans: S`\((-5,3)\)` },
  { level: 2, q: S`Describe \(${M([[-1, 0], [0, -1]])}\) in two ways.`, ans: S`rotation by \(180^\circ\); reflection through the origin` },
  { level: 3, space: 5, q: S`Prove \(R_\theta^TR_\theta=I\) and deduce that rotations keep lengths.`, ans: S`entries \(\cos^2+\sin^2=1\), off-diagonal 0; \(|R\vec x|^2=\vec x^TR^TR\vec x=|\vec x|^2\)` },
  { level: 3, space: 5, q: S`Prove \(R^2=I\) for \(R=2P-I\) with \(P^2=P\).`, ans: S`\(4P^2-4P+I=I\)` },
  { level: 3, space: 5, q: S`Show that \(R_\alpha R_\beta=R_\beta R_\alpha\).`, ans: S`both equal \(R_{\alpha+\beta}\)` },
  { level: 3, space: 5, q: S`Show every shear \(${M([[1, "k"], [0, 1]])}\) keeps areas, and find its inverse.`, ans: S`\(\det=1\); inverse \(${M([[1, "-k"], [0, 1]])}\)`, fig: sqMap([[1, 1.5], [0, 1]], { w: 3.4 }) },
  { level: 3, space: 5, q: S`Find the matrix of the reflection in the line through \(\vec 0\) at angle \(30^\circ\).`, ans: S`\(${M([["\\tfrac12", "\\tfrac{\\sqrt3}2"], ["\\tfrac{\\sqrt3}2", "-\\tfrac12"]])}\)` },
];

export const WS = {
  code: "7.4",
  title: "Geometric Transformations of the Plane",
  bigideas: S`Rotations, reflections, projections, stretches and shears of the plane are linear, so each is a \(2\times2\) matrix whose columns are the images of \(\vec e_1\), \(\vec e_2\). The catalogue \(R_\theta\), \(P=\vec u\vec u^T\), \(R=2P-I\), \(kI\) and the shears covers the basic moves.`,
  goals: ["Write \\(R_\\theta\\).", "Reflect in axes, diagonals and any line.", "Project onto a line with \\(\\vec u\\vec u^T\\).", "Use stretches and shears.", "Identify a map from its matrix."],
  curriculum: "Linear transformations — geometric maps of the plane",
  vocab: [["\\(R_\\theta\\)", "rotation"], ["\\(P=\\vec u\\vec u^T\\)", "projection, \\(P^2=P\\)"], ["\\(R=2P-I\\)", "reflection, \\(R^2=I\\)"], ["Shear", "slides along an axis"], ["\\(kI\\)", "dilation/contraction"]],
  hook: S`Every computer-graphics engine moves shapes with a handful of matrices. Which matrix turns, which flips, which flattens?`,
  concepts: NOTES,
  summary: [
    S`\(R_\theta=${M([["\\cos\\theta", "-\\sin\\theta"], ["\\sin\\theta", "\\cos\\theta"]])}\).`,
    S`Projection onto \(x_2=mx_1\): \(\tfrac1{1+m^2}${M([[1, "m"], ["m", "m^2"]])}\).`,
    S`Reflection \(R=2P-I\).`,
    S`Shears and \(\operatorname{diag}(k_1,k_2)\) stretch or slide.`,
    S`Identify by columns, \(A^2\), \(A^TA\), \(\det A\).`,
  ],
  tips: ["The minus sign in the rotation matrix is in the top right.", "Divide by 1 + m² for P.", "Px is the midpoint of x and Rx.", "Check rotations by length.", "Shears keep area."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
