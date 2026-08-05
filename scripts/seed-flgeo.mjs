// Seeds the Geometry (FL B.E.S.T.) course — Grade 10 Math for Florida students.
// 12 chapters, 63 lessons. Scaffolds in this file are overwritten by full
// authored content from flgeo-lessons.mjs (overview + toolkit + Examples ×5 /
// Practice ×5 / Q&A), same design as Algebra 1 (FL B.E.S.T.).
// Usage: node scripts/seed-flgeo.mjs
import { createClient } from "@supabase/supabase-js";
import { teacherPassword } from "./_teacher-secret.mjs";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { sk } from "./seed-mpm2d.mjs";
import { authored } from "./flgeo-lessons.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = {};
for (const line of readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m) env[m[1]] = m[2].trim();
}
const db = createClient(env.NEXT_PUBLIC_SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const TEACHER_EMAIL = "teacher@integrationacademy.ca";
const COURSE_TITLE = "Geometry (FL B.E.S.T.)";
const CODE = "GEO1";
const DESC = "Grade 10 Geometry aligned to Florida's B.E.S.T. standards. Interactive lessons build fluency with foundations and proofs, parallel and perpendicular lines, transformations and congruence, triangle similarity and trigonometry, polygons and circles, coordinate measurement, three-dimensional figures, constructions, and probability.";

async function getTeacherId() {
  const { data: created } = await db.auth.admin.createUser({
    email: TEACHER_EMAIL, password: teacherPassword(env), email_confirm: true,
    user_metadata: { full_name: "Integration Academy", role: "admin" },
  });
  if (created?.user) {
    await db.from("profiles").upsert({ id: created.user.id, full_name: "Integration Academy", role: "admin" });
    return created.user.id;
  }
  const { data: list } = await db.auth.admin.listUsers({ perPage: 1000 });
  const found = list.users.find((u) => u.email === TEACHER_EMAIL);
  if (!found) throw new Error("Could not create or find teacher.");
  await db.from("profiles").upsert({ id: found.id, full_name: "Integration Academy", role: "admin" });
  return found.id;
}

// ── 63 lessons across 12 chapters (scaffolds only) ──
const subjects = [
  // CHAPTER 1 — Foundations of Geometry
  sk("1.1", "Points, Lines, and Planes",
    "Establish the basic building blocks of geometry: points, lines, rays, segments, and planes — and the undefined terms and postulates that describe how they relate.",
    ["Undefined terms: point, line, and plane", "Rays, opposite rays, segments, and collinear / coplanar points", "Basic postulates about points, lines, and planes"]),
  sk("1.2", "Measuring and Constructing Segments",
    "Measure segment length, use the Segment Addition Postulate, and construct congruent segments with compass and straightedge.",
    ["Distance and congruence of segments", "The Segment Addition Postulate and midpoints", "Copying a segment with compass and straightedge"]),
  sk("1.3", "Measuring and Constructing Angles",
    "Measure angles in degrees, classify them, apply the Angle Addition Postulate, and construct congruent angles.",
    ["Degree measure and classifying angles", "The Angle Addition Postulate and angle bisectors", "Copying an angle with compass and straightedge"]),
  sk("1.4", "Pairs of Angles (Complementary, Supplementary, Vertical, Adjacent)",
    "Identify and use relationships between pairs of angles that share a vertex or add to a right or straight angle.",
    ["Adjacent and vertical angles", "Complementary ($90^\\circ$) and supplementary ($180^\\circ$) pairs", "Using angle-pair relationships to find missing measures"]),
  sk("1.5", "Conditional Statements and Logical Reasoning (If-Then, Converse, Inverse, Contrapositive)",
    "Write if-then statements and form their converse, inverse, and contrapositive — the language of geometric proofs.",
    ["Writing conditional (if-then) statements", "Converse, inverse, and contrapositive", "Truth value and logical equivalence of related conditionals"]),
  sk("1.6", "Introduction to Proofs (Paragraph, Flowchart, and Two-Column Proofs)",
    "Meet the three common proof formats and write short proofs from definitions, postulates, and properties of equality.",
    ["Paragraph, flowchart, and two-column proof formats", "Given / prove structure and justified steps", "Using definitions, postulates, and properties of equality"]),

  // CHAPTER 2 — Parallel and Perpendicular Lines
  sk("2.1", "Lines and Angles (Parallel, Skew, Transversal)",
    "Distinguish parallel, intersecting, and skew lines, and name the angle pairs formed when a transversal cuts two lines.",
    ["Parallel, perpendicular, intersecting, and skew lines", "Transversals and the angles they form", "Corresponding, alternate interior / exterior, and same-side interior angles"]),
  sk("2.2", "Proving Theorems about Parallel Lines (Corresponding, Alternate Interior/Exterior, Same-Side Interior)",
    "Prove and apply the theorems that relate angle pairs when lines are parallel, and use converses to prove lines parallel.",
    ["Theorems when lines are parallel", "Converses that prove lines are parallel", "Writing short proofs with transversal angle relationships"]),
  sk("2.3", "Proving Theorems about Perpendicular Lines",
    "Prove theorems about perpendicular lines and right angles, including relationships with parallel lines.",
    ["Perpendicular lines and right angles", "Theorems relating perpendicular and parallel lines", "Writing proofs that use perpendicular relationships"]),
  sk("2.4", "Equations of Parallel and Perpendicular Lines (in the Coordinate Plane)",
    "Use slope to write equations of lines that are parallel or perpendicular to a given line through a given point.",
    ["Equal slopes ↔ parallel; negative-reciprocal slopes ↔ perpendicular", "Writing equations from a point and a slope condition", "Classifying lines from their equations"]),
  sk("2.5", "Constructions: Parallel and Perpendicular Lines (MA.912.GR.5.1, MA.912.GR.5.2)",
    "Construct a line parallel to a given line through a point, and a perpendicular to a line through a point on or off the line.",
    ["Constructing a parallel through a given point", "Constructing a perpendicular through a point on the line", "Constructing a perpendicular through a point not on the line"]),

  // CHAPTER 3 — Transformations and Symmetry
  sk("3.1", "Translations on the Coordinate Plane (MA.912.GR.2.1)",
    "Translate figures on the coordinate plane using vectors or $(x,y)\\mapsto(x+a,y+b)$, and describe the image.",
    ["Translation as a rigid motion (isometry)", "Writing and applying a translation rule", "Finding the image of a polygon under a translation"]),
  sk("3.2", "Reflections on the Coordinate Plane (MA.912.GR.2.1)",
    "Reflect figures across the axes, $y=x$, $y=-x$, and other horizontal or vertical lines.",
    ["Reflection as a rigid motion", "Rules for reflections across common lines", "Finding images and describing the reflection line"]),
  sk("3.3", "Rotations on the Coordinate Plane (MA.912.GR.2.1)",
    "Rotate figures about the origin (and other points) by $90^\\circ$, $180^\\circ$, and $270^\\circ$.",
    ["Rotation as a rigid motion about a center", "Rules for $90^\\circ$, $180^\\circ$, and $270^\\circ$ about the origin", "Finding the image of a figure under a rotation"]),
  sk("3.4", "Compositions of Transformations (MA.912.GR.2.3)",
    "Perform and describe compositions of rigid motions, including glide reflections.",
    ["Performing two or more transformations in order", "Recognizing equivalent single transformations", "Glide reflections and other common compositions"]),
  sk("3.5", "Line and Rotational Symmetry (MA.912.GR.2.4)",
    "Identify lines of symmetry and orders of rotational symmetry for plane figures.",
    ["Line (reflection) symmetry", "Rotational symmetry and order", "Connecting symmetry to transformations"]),
  sk("3.6", "Using Transformations to Prove Congruence (MA.912.GR.2.6)",
    "Show that two figures are congruent by exhibiting a sequence of rigid motions that maps one onto the other.",
    ["Congruence as the existence of a rigid-motion mapping", "Describing a transformation sequence that proves congruence", "Connecting transformation congruence to corresponding parts"]),

  // CHAPTER 4 — Triangle Congruence
  sk("4.1", "Classifying Triangles and Triangle Angle-Sum Theorem (MA.912.GR.1.1)",
    "Classify triangles by sides and angles, and use the Triangle Angle-Sum and Exterior Angle Theorems.",
    ["Classifying by sides (scalene, isosceles, equilateral) and by angles", "Interior angles sum to $180^\\circ$", "The Exterior Angle Theorem"]),
  sk("4.2", "Isosceles and Equilateral Triangle Theorems (MA.912.GR.1.3)",
    "Prove and apply base-angle theorems for isosceles triangles and properties of equilateral triangles.",
    ["Base angles of an isosceles triangle are congruent", "The converse: congruent base angles imply congruent legs", "Equilateral ↔ equiangular"]),
  sk("4.3", "Proving Congruence: SSS and SAS (MA.912.GR.1.2)",
    "Prove triangles congruent using Side-Side-Side and Side-Angle-Side, then transfer corresponding parts.",
    ["SSS congruence criterion", "SAS congruence criterion (included angle)", "CPCTC: corresponding parts of congruent triangles are congruent"]),
  sk("4.4", "Proving Congruence: ASA and AAS (MA.912.GR.1.2)",
    "Prove triangles congruent using Angle-Side-Angle and Angle-Angle-Side.",
    ["ASA congruence criterion", "AAS congruence criterion", "Choosing SSS, SAS, ASA, or AAS from a diagram"]),
  sk("4.5", "Proving Congruence: Hypotenuse-Leg (HL) for Right Triangles (MA.912.GR.1.2)",
    "Prove right triangles congruent with the Hypotenuse-Leg criterion.",
    ["Why HL works for right triangles", "Using HL in proofs", "Distinguishing HL from SSA (not a valid criterion in general)"]),
  sk("4.6", "Triangle Proofs with Overlapping Triangles and Medians/Altitudes (MA.912.GR.1.3)",
    "Write congruence proofs when triangles overlap, and use medians, altitudes, and midsegments as given information.",
    ["Identifying overlapping congruent triangles", "Medians, altitudes, and angle bisectors in proofs", "Organizing multi-step two-column proofs"]),

  // CHAPTER 5 — Triangle Similarity and Proportionality
  sk("5.1", "Dilations on the Coordinate Plane (MA.912.GR.2.2)",
    "Dilate figures about a center with scale factor $k$, and describe how lengths and coordinates change.",
    ["Scale factor $k$ and center of dilation", "Dilations about the origin: $(x,y)\\mapsto(kx,ky)$", "Effects of $|k|>1$, $0<|k|<1$, and $k<0$"]),
  sk("5.2", "Proving Similarity: AA, SAS, and SSS Similarity Theorems (MA.912.GR.1.2)",
    "Prove triangles similar using AA, SAS similarity, and SSS similarity, then set up proportions for corresponding sides.",
    ["AA similarity", "SAS and SSS similarity criteria", "Writing proportions from similar triangles"]),
  sk("5.3", "Using Similar Triangles to Solve Real-World Problems (Indirect Measurement) (MA.912.GR.1.6)",
    "Use similar triangles for indirect measurement — heights, distances, and scale drawings.",
    ["Setting up a similarity from a real-world sketch", "Solving proportions for unknown lengths", "Checking that the answer makes sense in context"]),
  sk("5.4", "Triangle Proportionality Theorem and its Converse (MA.912.GR.1.3)",
    "Apply the Triangle Proportionality (Basic Proportionality) Theorem and its converse to find missing lengths.",
    ["A line parallel to one side divides the other two proportionally", "The converse: proportional segments imply a parallel", "Related midsegment and angle-bisector length results"]),
  sk("5.5", "Using Transformations to Prove Similarity (MA.912.GR.2.8)",
    "Show similarity by a composition of rigid motions and a dilation that maps one figure onto the other.",
    ["Similarity as rigid motions plus a dilation", "Describing the transformation sequence", "Connecting transformation similarity to AA / SAS / SSS"]),

  // CHAPTER 6 — Right Triangles and Trigonometry
  sk("6.1", "The Pythagorean Theorem and its Converse",
    "Use $a^{2}+b^{2}=c^{2}$ to find missing side lengths, and use the converse to classify triangles as acute, right, or obtuse.",
    ["Pythagorean Theorem for right triangles", "The converse and triangle classification", "Pythagorean triples and applications"]),
  sk("6.2", "Special Right Triangles (45-45-90 and 30-60-90)",
    "Memorize and apply the side ratios of $45$-$45$-$90$ and $30$-$60$-$90$ triangles.",
    ["$45$-$45$-$90$: legs $x$, hypotenuse $x\\sqrt{2}$", "$30$-$60$-$90$: sides $x$, $x\\sqrt{3}$, $2x$", "Finding missing sides without a calculator"]),
  sk("6.3", "The Sine, Cosine, and Tangent Ratios (MA.912.T.1.2)",
    "Define $\\sin$, $\\cos$, and $\\tan$ as ratios of sides in a right triangle (SOH-CAH-TOA).",
    ["Identifying opposite, adjacent, and hypotenuse relative to an acute angle", "Writing $\\sin$, $\\cos$, and $\\tan$ ratios", "Finding a missing side given an acute angle and one side"]),
  sk("6.4", "Solving Right Triangles Using Trigonometry",
    "Find all unknown sides and acute angles of a right triangle using trig ratios and inverse trig.",
    ["Choosing the right ratio for the given information", "Using inverse sine, cosine, and tangent for angles", "Solving a right triangle completely"]),
  sk("6.5", "Real-World Applications: Angles of Elevation and Depression (MA.912.T.1.2)",
    "Model angles of elevation and depression and solve height-and-distance problems with trigonometry.",
    ["Angles of elevation and depression from horizontal", "Drawing and labeling a right-triangle model", "Solving and interpreting the answer in context"]),

  // CHAPTER 7 — Quadrilaterals and Other Polygons
  sk("7.1", "Interior and Exterior Angle Sums of Polygons (MA.912.GR.1.1)",
    "Find the sum of interior angles of an $n$-gon, each interior angle of a regular polygon, and exterior-angle sums.",
    ["Interior angle sum $(n-2)180^\\circ$", "Each interior angle of a regular $n$-gon", "Exterior angles of a polygon sum to $360^\\circ$"]),
  sk("7.2", "Properties of Parallelograms and Proving Theorems (MA.912.GR.1.4)",
    "Prove and apply properties of parallelograms: opposite sides and angles, consecutive angles, and diagonals.",
    ["Definition and properties of a parallelogram", "Converses that prove a quadrilateral is a parallelogram", "Writing parallelogram proofs"]),
  sk("7.3", "Properties of Rectangles, Rhombi, and Squares (MA.912.GR.1.4)",
    "Use the special properties of rectangles, rhombi, and squares, and place them in the parallelogram hierarchy.",
    ["Rectangle: right angles and congruent diagonals", "Rhombus: congruent sides and perpendicular diagonals", "Square as both rectangle and rhombus"]),
  sk("7.4", "Properties of Trapezoids and Kites (Including Midsegment Theorem) (MA.912.GR.1.5)",
    "Apply properties of trapezoids (including isosceles) and kites, and use the trapezoid midsegment theorem.",
    ["Bases, legs, and base angles of a trapezoid", "Isosceles trapezoid properties", "Kite properties and the trapezoid midsegment"]),
  sk("7.5", "Coordinate Geometry Proofs for Quadrilaterals (Using Slope, Distance, and Midpoint) (MA.912.GR.3.2)",
    "Prove a quadrilateral is a parallelogram, rectangle, rhombus, square, or trapezoid using slope, distance, and midpoint.",
    ["Using slope for parallel / perpendicular sides", "Using distance for congruent sides or diagonals", "Organizing a coordinate proof"]),

  // CHAPTER 8 — Coordinate Geometry and Measurement
  sk("8.1", "The Distance, Midpoint, and Slope Formulas (Review and Application)",
    "Review and apply the distance, midpoint, and slope formulas to segments and figures in the plane.",
    ["Distance formula $d=\\sqrt{(x_2-x_1)^{2}+(y_2-y_1)^{2}}$", "Midpoint formula", "Slope and its geometric meaning"]),
  sk("8.2", "Weighted Average of Points on a Line (MA.912.GR.3.1 — New B.E.S.T. Topic)",
    "Find a point that divides a segment in a given ratio using a weighted average (section formula).",
    ["Weighted average of two points on a line", "Dividing a segment in the ratio $m:n$", "Applications to midpoints and other partition points"]),
  sk("8.3", "Area of 2D Figures (Triangles, Quadrilaterals, Regular Polygons) (MA.912.GR.4.4)",
    "Compute areas of triangles, special quadrilaterals, and regular polygons.",
    ["Area formulas for triangles and special quadrilaterals", "Area of a regular polygon using apothem", "Choosing an efficient decomposition"]),
  sk("8.4", "Perimeter and Area in the Coordinate Plane (MA.912.GR.3.4)",
    "Find perimeter and area of polygons given coordinates, using distance and geometric formulas.",
    ["Perimeter from successive distances", "Area on the coordinate plane (including shoelace when useful)", "Composite figures on a grid"]),
  sk("8.5", "How Dilations Affect Perimeter and Area (MA.912.GR.4.3)",
    "Relate scale factor $k$ to changes in perimeter ($\\times|k|$) and area ($\\times k^{2}$).",
    ["Linear measures scale by $|k|$", "Area scales by $k^{2}$", "Predicting perimeter and area of dilated figures"]),

  // CHAPTER 9 — Circles
  sk("9.1", "Circle Vocabulary and Central Angles (MA.912.GR.6.2)",
    "Use circle vocabulary — radius, chord, diameter, arc — and relate central angles to intercepted arcs.",
    ["Radius, chord, diameter, arc, and semicircle", "Central angle measure equals intercepted arc measure", "Minor arcs, major arcs, and adjacent arcs"]),
  sk("9.2", "Inscribed Angles and Intercepted Arcs (MA.912.GR.6.2)",
    "Relate inscribed angles to intercepted arcs, including angles in a semicircle and angles that intercept the same arc.",
    ["Inscribed angle $=\\tfrac{1}{2}$ intercepted arc", "Angles that intercept the same arc are congruent", "An angle inscribed in a semicircle is a right angle"]),
  sk("9.3", "Chords, Tangents, and Secants (Lengths and Angle Measures) (MA.912.GR.6.1)",
    "Apply theorems about chord lengths, tangent segments, and angles formed by chords, tangents, and secants.",
    ["Perpendicular from center to a chord; congruent chords ↔ congruent arcs", "Tangent ⊥ radius; two tangents from an external point", "Intersecting chords, tangent–secant, and two-secant angle / length theorems"]),
  sk("9.4", "Circles in the Coordinate Plane: Equation $(x-h)^{2}+(y-k)^{2}=r^{2}$ (MA.912.GR.7.2, MA.912.GR.7.3)",
    "Write and graph the standard equation of a circle, and convert between center-radius and general form.",
    ["Standard form $(x-h)^{2}+(y-k)^{2}=r^{2}$", "Finding center and radius from an equation", "Completing the square to rewrite general form"]),
  sk("9.5", "Arc Length and Sector Area (MA.912.GR.6.4)",
    "Compute arc length and sector area as fractional parts of circumference and area of the circle.",
    ["Arc length $=\\dfrac{\\theta}{360}\\cdot 2\\pi r$ (degrees) or $r\\theta$ (radians)", "Sector area $=\\dfrac{\\theta}{360}\\cdot\\pi r^{2}$", "Solving for radius, angle, or area from given information"]),
  sk("9.6", "Triangles and Quadrilaterals Inscribed in Circles (MA.912.GR.6.3)",
    "Apply theorems about triangles and cyclic quadrilaterals inscribed in a circle.",
    ["Cyclic quadrilaterals: opposite angles sum to $180^\\circ$", "Inscribed triangles and related arc measures", "Using inscribed-figure theorems in proofs and calculations"]),

  // CHAPTER 10 — Three-Dimensional Figures
  sk("10.1", "Surface Area of Prisms, Pyramids, Cylinders, Cones, and Spheres (MA.912.GR.4.6)",
    "Find lateral and total surface area of common solids.",
    ["Nets and surface-area formulas for prisms and pyramids", "Cylinders and cones", "Sphere surface area $4\\pi r^{2}$"]),
  sk("10.2", "Volume of Prisms, Pyramids, Cylinders, Cones, and Spheres (MA.912.GR.4.5)",
    "Find volumes of prisms, pyramids, cylinders, cones, and spheres.",
    ["$V=Bh$ for prisms and cylinders", "$V=\\tfrac{1}{3}Bh$ for pyramids and cones", "Sphere volume $\\tfrac{4}{3}\\pi r^{3}$"]),
  sk("10.3", "Solving Density and Population Density Problems (MA.912.GR.4.5 connections)",
    "Solve density problems that connect mass, volume, area, and population to geometric measures.",
    ["Density = mass / volume", "Population density = population / area", "Using volume and area formulas inside density problems"]),
  sk("10.4", "Cross-Sections of 3D Figures (MA.912.GR.4.1)",
    "Describe the 2D figure formed when a plane intersects a solid (prism, pyramid, cylinder, cone, sphere).",
    ["Horizontal, vertical, and oblique slices", "Predicting cross-sections of common solids", "Matching a solid to a given cross-section"]),
  sk("10.5", "Solids of Revolution (Rotating 2D Shapes to Make 3D Objects) (MA.912.GR.4.2)",
    "Visualize and identify the solid generated by rotating a 2D region about an axis.",
    ["Rotating a rectangle, triangle, or semicircle about an axis", "Identifying cylinders, cones, spheres, and related solids of revolution", "Connecting the generating shape to surface area and volume"]),
  sk("10.6", "How Dilations Affect Surface Area and Volume (MA.912.GR.4.3)",
    "Relate scale factor $k$ to changes in surface area ($\\times k^{2}$) and volume ($\\times k^{3}$).",
    ["Surface area scales by $k^{2}$", "Volume scales by $k^{3}$", "Comparing similar solids"]),

  // CHAPTER 11 — Constructions
  sk("11.1", "Copying Segments and Angles (MA.912.GR.5.1)",
    "Construct a congruent copy of a given segment or angle using compass and straightedge.",
    ["Copying a segment", "Copying an angle", "Justifying why the construction works"]),
  sk("11.2", "Bisecting Segments and Angles (MA.912.GR.5.2)",
    "Construct the midpoint / perpendicular bisector of a segment and the bisector of an angle.",
    ["Perpendicular bisector of a segment", "Angle bisector construction", "Properties that follow from these constructions"]),
  sk("11.3", "Constructing Inscribed and Circumscribed Circles of a Triangle (MA.912.GR.5.3)",
    "Construct the incenter and incircle, and the circumcenter and circumcircle, of a triangle.",
    ["Incenter as intersection of angle bisectors; inscribed circle", "Circumcenter as intersection of perpendicular bisectors; circumscribed circle", "Locating the circumcenter for acute, right, and obtuse triangles"]),

  // CHAPTER 12 — Probability
  sk("12.1", "Introduction to Probability and Sample Spaces (MA.912.DP.1.1)",
    "Define probability, list sample spaces, and compute simple probabilities for equally likely outcomes.",
    ["Sample space and events", "Theoretical probability $P(E)=\\dfrac{n(E)}{n(S)}$", "Complementary events: $P(E')=1-P(E)$"]),
  sk("12.2", "Independent and Dependent Events (MA.912.DP.1.2)",
    "Distinguish independent from dependent events and compute compound probabilities with and without replacement.",
    ["Independent events: $P(A\\text{ and }B)=P(A)P(B)$", "Dependent events and without-replacement situations", "Tree diagrams for compound events"]),
  sk("12.3", "Conditional Probability (MA.912.DP.1.4)",
    "Compute and interpret conditional probability $P(A\\mid B)$, including from two-way tables.",
    ["Definition $P(A\\mid B)=\\dfrac{P(A\\text{ and }B)}{P(B)}$", "Reading conditional probability from a two-way table", "Recognizing independence from conditional probabilities"]),
  sk("12.4", "Permutations and Combinations (MA.912.DP.1.3)",
    "Count arrangements and selections using permutations and combinations, then use them in probability.",
    ["Permutations: order matters ($nP_{r}$)", "Combinations: order does not matter ($nC_{r}$)", "Choosing the right counting tool for a probability problem"]),
  sk("12.5", "Probability Models and Real-World Applications (MA.912.DP.1.5)",
    "Build and use probability models for real-world situations, and interpret results in context.",
    ["Building a probability model from a description or data", "Expected value in simple contexts", "Interpreting probability results for decision-making"]),
];

// Splice fully-authored lessons over their scaffolds.
for (let i = 0; i < subjects.length; i++) {
  const a = authored[subjects[i].code];
  if (a) subjects[i] = a;
}

async function run() {
  const teacherId = await getTeacherId();
  let course;
  const existing = await db.from("courses").select("id").eq("teacher_id", teacherId).eq("title", COURSE_TITLE).maybeSingle();
  if (existing.data) {
    course = existing.data;
    await db.from("courses").update({ code: CODE, description: DESC, level: "10", published: true }).eq("id", course.id);
  } else {
    const ins = await db.from("courses").insert({ teacher_id: teacherId, code: CODE, title: COURSE_TITLE, description: DESC, level: "10", published: true }).select("id").single();
    if (ins.error) throw ins.error;
    course = ins.data;
  }
  console.log("Course:", course.id);

  await db.from("lessons").delete().eq("course_id", course.id);
  let pos = 0;
  for (const s of subjects) {
    const { error } = await db.from("lessons").insert({ course_id: course.id, title: `${s.code} ${s.title}`, blocks: s.blocks, position: pos++, published: true });
    if (error) throw error;
    console.log(`  ${s.code} ${s.title}`);
  }
  console.log(`\nSeeded ${subjects.length} ${CODE} lessons (${Object.keys(authored).length} fully authored).`);
}

run().catch((e) => { console.error(e); process.exit(1); });
