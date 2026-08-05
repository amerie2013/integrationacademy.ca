import { L, lessonHtml } from "./_helpers.mjs";

export const ch = {};

ch["4.1"] = L("4.1", "Classifying Triangles and Triangle Angle-Sum Theorem (MA.912.GR.1.1)", [
  lessonHtml({
    title: "Classifying Triangles and Triangle Angle-Sum Theorem",
    emoji: "🔺",
    overview: `A triangle can be classified two independent ways — by its <strong>sides</strong> (scalene, isosceles, equilateral) and by its <strong>angles</strong> (acute, right, obtuse, equiangular). Every triangle, no matter how it is classified, obeys the same fundamental rule: its three interior angles always sum to \\(180^\\circ\\). This single fact — the Triangle Angle-Sum Theorem — combined with its close relative, the Exterior Angle Theorem, lets you find any missing angle in a triangle, or in a triangle attached to a straight line.`,
    toolkit: [
      `By sides: <strong>scalene</strong> (no sides congruent), <strong>isosceles</strong> (at least two sides congruent), <strong>equilateral</strong> (all three sides congruent).`,
      `By angles: <strong>acute</strong> (all angles \\(<90^\\circ\\)), <strong>right</strong> (one angle \\(=90^\\circ\\)), <strong>obtuse</strong> (one angle \\(>90^\\circ\\)), <strong>equiangular</strong> (all angles congruent, each \\(60^\\circ\\)).`,
      `Triangle Angle-Sum Theorem: the three interior angles of any triangle sum to \\(180^\\circ\\).`,
      `Exterior Angle Theorem: an exterior angle of a triangle equals the sum of the two remote (non-adjacent) interior angles.`,
    ],
    examples: [
      { h: "Classify a triangle by its sides", p: `A triangle has sides \\(7\\text{ cm}\\), \\(7\\text{ cm}\\), and \\(7\\text{ cm}\\). Classify it by sides, and state what this implies about its angles.`, steps: [
        `<strong>Step 1 — compare the side lengths:</strong> all three sides are congruent (\\(7=7=7\\)).`,
        `<strong>Step 2 — classify by sides:</strong> a triangle with all sides congruent is <strong>equilateral</strong>.`,
        `<strong>Step 3 — connect to angles:</strong> every equilateral triangle is also <strong>equiangular</strong>, so each angle measures \\(\\dfrac{180^\\circ}{3}=60^\\circ\\).`,
      ], check: `An equilateral triangle is automatically isosceles too, since it has at least two congruent sides.` },
      { h: "Classify a triangle by its angles", p: `A triangle has angles measuring \\(40^\\circ\\), \\(90^\\circ\\), and \\(50^\\circ\\). Classify it by angles.`, steps: [
        `<strong>Step 1 — check the sum:</strong> \\(40^\\circ+90^\\circ+50^\\circ=180^\\circ\\), so these could be the angles of a triangle.`,
        `<strong>Step 2 — look for a right angle:</strong> one angle equals \\(90^\\circ\\).`,
        `<strong>Step 3 — classify:</strong> a triangle with one \\(90^\\circ\\) angle is a <strong>right triangle</strong>. Since all three angles are different, it is also scalene.`,
      ] },
      { h: "Find a missing angle with the Angle-Sum Theorem", p: `Two angles of a triangle measure \\(55^\\circ\\) and \\(65^\\circ\\). Find the third angle and classify the triangle.`, steps: [
        `<strong>Step 1 — set up the sum:</strong> \\(55^\\circ+65^\\circ+x=180^\\circ\\).`,
        `<strong>Step 2 — solve:</strong> \\(x=180^\\circ-120^\\circ=60^\\circ\\).`,
        `<strong>Step 3 — classify:</strong> all three angles (\\(55^\\circ,60^\\circ,65^\\circ\\)) are less than \\(90^\\circ\\), so the triangle is <strong>acute</strong> (and scalene, since no two angles match).`,
      ] },
      { h: "Solve for angles given in terms of x", p: `The angles of a triangle measure \\(x^\\circ\\), \\(2x^\\circ\\), and \\(3x^\\circ\\). Find the measure of each angle and classify the triangle.`, steps: [
        `<strong>Step 1 — write the angle-sum equation:</strong> \\(x+2x+3x=180\\).`,
        `<strong>Step 2 — solve for x:</strong> \\(6x=180\\), so \\(x=30\\).`,
        `<strong>Step 3 — evaluate each angle:</strong> the angles are \\(30^\\circ\\), \\(60^\\circ\\), and \\(90^\\circ\\).`,
        `<strong>Step 4 — classify:</strong> one angle is \\(90^\\circ\\), so this is a <strong>right</strong> (and scalene) triangle.`,
      ] },
      { h: "Use the Exterior Angle Theorem", p: `An exterior angle of a triangle measures \\(130^\\circ\\). The two remote interior angles measure \\(3x^\\circ\\) and \\(2x^\\circ\\). Find \\(x\\), the two remote angles, and the third interior angle.`, steps: [
        `<strong>Step 1 — apply the Exterior Angle Theorem:</strong> \\(3x+2x=130\\).`,
        `<strong>Step 2 — solve for x:</strong> \\(5x=130\\), so \\(x=26\\).`,
        `<strong>Step 3 — find the remote angles:</strong> \\(3(26)^\\circ=78^\\circ\\) and \\(2(26)^\\circ=52^\\circ\\).`,
        `<strong>Step 4 — find the third interior angle:</strong> it is supplementary to the \\(130^\\circ\\) exterior angle, so \\(180^\\circ-130^\\circ=50^\\circ\\).`,
      ], check: `Check the full triangle: \\(78^\\circ+52^\\circ+50^\\circ=180^\\circ\\). ✓` },
    ],
    practice: [
      { q: `Classify a triangle with sides \\(6\\), \\(9\\), and \\(6\\).`, a: `Two sides are congruent (\\(6=6\\)) and one differs, so the triangle is <strong>isosceles</strong>.` },
      { q: `Find the missing angle in a triangle whose other two angles measure \\(72^\\circ\\) and \\(43^\\circ\\).`, a: `\\(180^\\circ-72^\\circ-43^\\circ=65^\\circ\\).` },
      { q: `The angles of a triangle are in the ratio \\(2:3:4\\). Find the measure of each angle.`, a: `The ratio parts sum to \\(9\\), so each part is \\(180^\\circ\\div9=20^\\circ\\). The angles are \\(40^\\circ\\), \\(60^\\circ\\), and \\(80^\\circ\\).` },
      { q: `An exterior angle of a triangle measures \\(100^\\circ\\). One remote interior angle measures \\(35^\\circ\\). Find the other remote interior angle.`, a: `\\(100^\\circ-35^\\circ=65^\\circ\\).` },
      { q: `A triangle has angles measuring \\(x^\\circ\\), \\((x+10)^\\circ\\), and \\((x+20)^\\circ\\). Solve for \\(x\\) and classify the triangle by its angles.`, a: `\\(3x+30=180\\), so \\(x=50\\); the angles are \\(50^\\circ,60^\\circ,70^\\circ\\), all less than \\(90^\\circ\\), so the triangle is <strong>acute</strong>.` },
    ],
    qa: [
      { q: `Can a triangle have two right angles?`, a: `No. Two \\(90^\\circ\\) angles would already total \\(180^\\circ\\), leaving \\(0^\\circ\\) for the third angle — impossible for an actual triangle.` },
      { q: `Is an equilateral triangle also isosceles?`, a: `Yes. "Isosceles" only requires at least two congruent sides, and an equilateral triangle has three, so every equilateral triangle satisfies the isosceles definition.` },
      { q: `Which interior angles count as "remote" for a given exterior angle?`, a: `The two interior angles that are <strong>not</strong> adjacent to that exterior angle — i.e., the angles at the other two vertices of the triangle.` },
      { q: `How can I tell a triangle is obtuse without a protractor?`, a: `Find or compute all three interior angles. If any one of them is greater than \\(90^\\circ\\), the triangle is obtuse.` },
      { q: `Why do interior angles always add to exactly \\(180^\\circ\\)?`, a: `Draw a line through one vertex parallel to the opposite side. The alternate interior angles formed show that the triangle's three angles fit together to form a straight angle — \\(180^\\circ\\).` },
    ],
  }),
]);

ch["4.2"] = L("4.2", "Isosceles and Equilateral Triangle Theorems (MA.912.GR.1.3)", [
  lessonHtml({
    title: "Isosceles and Equilateral Triangle Theorems",
    emoji: "📐",
    overview: `An isosceles triangle has (at least) two congruent sides, called <strong>legs</strong>, meeting at the <strong>vertex angle</strong>; the third side is the <strong>base</strong>, and the two angles touching the base are the <strong>base angles</strong>. The Base Angles Theorem links sides and angles: congruent legs force congruent base angles — and its converse is just as useful for proving sides congruent from angle information. Equilateral triangles are the special case where all three sides — and therefore all three angles — are congruent.`,
    toolkit: [
      `Base Angles Theorem: if two sides of a triangle are congruent, the angles opposite them (the base angles) are congruent.`,
      `Converse of the Base Angles Theorem: if two angles of a triangle are congruent, the sides opposite them are congruent.`,
      `Corollary: a triangle is equilateral if and only if it is equiangular (each angle \\(60^\\circ\\)).`,
      `The bisector of the vertex angle of an isosceles triangle is also the median and the altitude to the base.`,
    ],
    examples: [
      { h: "Apply the Base Angles Theorem", p: `In isosceles \\(\\triangle ABC\\), \\(\\overline{AB}\\cong\\overline{AC}\\) and \\(\\angle B=50^\\circ\\). Find \\(\\angle C\\) and \\(\\angle A\\).`, steps: [
        `<strong>Step 1 — identify the base angles:</strong> since \\(\\overline{AB}\\cong\\overline{AC}\\), the base is \\(\\overline{BC}\\), so \\(\\angle B\\) and \\(\\angle C\\) are the base angles.`,
        `<strong>Step 2 — apply the Base Angles Theorem:</strong> \\(\\angle C\\cong\\angle B=50^\\circ\\).`,
        `<strong>Step 3 — find the vertex angle:</strong> \\(\\angle A=180^\\circ-50^\\circ-50^\\circ=80^\\circ\\).`,
      ] },
      { h: "Apply the converse to find a missing side", p: `In \\(\\triangle DEF\\), \\(\\angle D=\\angle E=65^\\circ\\). If \\(EF=3x-2\\) and \\(DF=x+6\\), find \\(x\\) and the length of each side.`, steps: [
        `<strong>Step 1 — identify which sides must be congruent:</strong> since \\(\\angle D\\cong\\angle E\\), the sides opposite them, \\(\\overline{EF}\\) and \\(\\overline{DF}\\), must be congruent.`,
        `<strong>Step 2 — set the expressions equal:</strong> \\(3x-2=x+6\\).`,
        `<strong>Step 3 — solve for x:</strong> \\(2x=8\\), so \\(x=4\\).`,
        `<strong>Step 4 — evaluate:</strong> \\(EF=DF=3(4)-2=10\\).`,
      ] },
      { h: "Use the equilateral/equiangular corollary", p: `\\(\\triangle GHI\\) is equilateral, with sides \\(2x+1\\), \\(x+7\\), and \\(3x-5\\). Find \\(x\\), the side length, and each angle.`, steps: [
        `<strong>Step 1 — set two expressions equal (all sides are congruent):</strong> \\(2x+1=x+7\\).`,
        `<strong>Step 2 — solve:</strong> \\(x=6\\).`,
        `<strong>Step 3 — check the third side:</strong> \\(3(6)-5=13\\), and \\(2(6)+1=13\\), \\(6+7=13\\). ✓ Every side is \\(13\\).`,
        `<strong>Step 4 — find the angles:</strong> an equilateral triangle is equiangular, so each angle is \\(60^\\circ\\).`,
      ] },
      { h: "Use the vertex bisector as an altitude", p: `Isosceles \\(\\triangle JKL\\) has legs \\(JK=JL=13\\) and base \\(KL=10\\). Find the height from \\(J\\) to the base.`, steps: [
        `<strong>Step 1 — recall the key fact:</strong> the bisector of the vertex angle \\(\\angle J\\) is also the altitude to the base, so it meets \\(\\overline{KL}\\) at its midpoint and forms a right angle.`,
        `<strong>Step 2 — find the half-base:</strong> the midpoint splits \\(KL=10\\) into two segments of \\(5\\).`,
        `<strong>Step 3 — apply the Pythagorean Theorem:</strong> \\(h=\\sqrt{13^2-5^2}=\\sqrt{169-25}=\\sqrt{144}=12\\).`,
      ] },
      { h: "Solve a system with base angles and the vertex angle", p: `In isosceles \\(\\triangle MNP\\), the vertex angle \\(\\angle M\\) measures \\(x^\\circ\\) and each base angle measures \\((2x+15)^\\circ\\). Find \\(x\\) and each angle.`, steps: [
        `<strong>Step 1 — write the angle-sum equation:</strong> \\(x+2(2x+15)=180\\).`,
        `<strong>Step 2 — simplify:</strong> \\(x+4x+30=180\\), so \\(5x=150\\).`,
        `<strong>Step 3 — solve:</strong> \\(x=30\\).`,
        `<strong>Step 4 — evaluate:</strong> \\(\\angle M=30^\\circ\\); each base angle \\(=2(30)+15=75^\\circ\\).`,
      ], check: `Check: \\(30^\\circ+75^\\circ+75^\\circ=180^\\circ\\). ✓` },
    ],
    practice: [
      { q: `An isosceles triangle has a base angle of \\(72^\\circ\\). Find the vertex angle.`, a: `\\(180^\\circ-2(72^\\circ)=36^\\circ\\).` },
      { q: `Two angles of a triangle are congruent, each measuring \\(55^\\circ\\). The side opposite one of them is \\(8\\). What is the length of the side opposite the other?`, a: `By the Converse of the Base Angles Theorem, the sides opposite congruent angles are congruent, so the other side is also \\(8\\).` },
      { q: `An equilateral triangle has a perimeter of \\(36\\). Find the side length and each angle.`, a: `Side length \\(=36\\div3=12\\); each angle \\(=60^\\circ\\).` },
      { q: `An isosceles triangle has legs of length \\(13\\) and a base of length \\(10\\). Find the height to the base.`, a: `Half the base is \\(5\\); \\(h=\\sqrt{13^2-5^2}=\\sqrt{144}=12\\).` },
      { q: `The vertex angle of an isosceles triangle is \\(40^\\circ\\). Find each base angle.`, a: `\\(\\dfrac{180^\\circ-40^\\circ}{2}=70^\\circ\\).` },
    ],
    qa: [
      { q: `What exactly are the "base angles" of an isosceles triangle?`, a: `The two angles adjacent to the base — the side that is not necessarily congruent to the other two — each formed between the base and one of the two congruent legs.` },
      { q: `Is every equilateral triangle isosceles?`, a: `Yes — having three congruent sides automatically satisfies "at least two congruent sides."` },
      { q: `Do I need to already know a triangle is isosceles to use the Base Angles Theorem?`, a: `Yes. The theorem starts from congruent sides and concludes congruent angles; if you instead start from congruent angles, use the <strong>converse</strong> to conclude congruent sides.` },
      { q: `Why does the vertex-angle bisector also act as the altitude and median?`, a: `Bisecting the vertex angle creates two triangles that are congruent by SAS (the two legs and the shared bisected angle), so the bisector must strike the base at its midpoint and at a right angle.` },
      { q: `If a triangle is scalene, can it have any congruent angles?`, a: `No. By the contrapositive of the Base Angles Theorem and its converse, no two sides congruent means no two angles congruent either.` },
    ],
  }),
]);

ch["4.3"] = L("4.3", "Proving Congruence: SSS and SAS (MA.912.GR.1.2)", [
  lessonHtml({
    title: "Proving Congruence: SSS and SAS",
    emoji: "🧩",
    overview: `Two triangles are congruent when a rigid motion maps one exactly onto the other — but checking every corresponding side and angle is more work than necessary. The SSS and SAS postulates let you prove two triangles congruent using only three carefully chosen pieces of information. Once congruence is established, CPCTC (Corresponding Parts of Congruent Triangles are Congruent) unlocks every other side and angle in the triangle for free.`,
    toolkit: [
      `Side-Side-Side (SSS): if all three sides of one triangle are congruent to the three sides of another, the triangles are congruent.`,
      `Side-Angle-Side (SAS): if two sides and the <strong>included</strong> angle (the angle between them) of one triangle are congruent to the corresponding parts of another, the triangles are congruent.`,
      `CPCTC: once \\(\\triangle ABC\\cong\\triangle DEF\\) is established, every corresponding pair of sides and angles is also congruent.`,
      `Look for "free" congruent parts: a shared side (Reflexive Property), a shared angle, or vertical angles.`,
    ],
    examples: [
      { h: "Recognize SSS from given congruences", p: `Given \\(\\overline{AB}\\cong\\overline{DE}\\), \\(\\overline{BC}\\cong\\overline{EF}\\), and \\(\\overline{CA}\\cong\\overline{FD}\\), prove \\(\\triangle ABC\\cong\\triangle DEF\\).`, steps: [
        `<strong>Step 1 — list the given congruences:</strong> all three pairs of corresponding sides are congruent.`,
        `<strong>Step 2 — match to a postulate:</strong> three sides congruent to three sides is the <strong>SSS</strong> postulate.`,
        `<strong>Step 3 — conclude:</strong> \\(\\triangle ABC\\cong\\triangle DEF\\) by SSS.`,
      ] },
      { h: "Use a shared side to complete SSS", p: `Given \\(\\overline{AB}\\cong\\overline{CB}\\) and \\(\\overline{AD}\\cong\\overline{CD}\\), prove \\(\\triangle ABD\\cong\\triangle CBD\\).`, steps: [
        `<strong>Step 1 — mark the given congruences:</strong> \\(\\overline{AB}\\cong\\overline{CB}\\) and \\(\\overline{AD}\\cong\\overline{CD}\\).`,
        `<strong>Step 2 — find the third pair:</strong> \\(\\overline{BD}\\cong\\overline{BD}\\) by the Reflexive Property (shared side).`,
        `<strong>Step 3 — conclude:</strong> \\(\\triangle ABD\\cong\\triangle CBD\\) by SSS.`,
      ] },
      { h: "Prove congruence with SAS using an angle bisector", p: `\\(\\overline{CD}\\) bisects \\(\\angle ACB\\), and \\(\\overline{AC}\\cong\\overline{BC}\\). Prove \\(\\triangle ACD\\cong\\triangle BCD\\).`, steps: [
        `<strong>Step 1 — identify the given sides:</strong> \\(\\overline{AC}\\cong\\overline{BC}\\) (given).`,
        `<strong>Step 2 — identify the included angle:</strong> \\(\\overline{CD}\\) bisects \\(\\angle ACB\\), so \\(\\angle ACD\\cong\\angle BCD\\) — and this angle sits between sides \\(\\overline{AC}\\), \\(\\overline{CD}\\) and \\(\\overline{BC}\\), \\(\\overline{CD}\\).`,
        `<strong>Step 3 — supply the shared side:</strong> \\(\\overline{CD}\\cong\\overline{CD}\\) by the Reflexive Property.`,
        `<strong>Step 4 — conclude:</strong> \\(\\triangle ACD\\cong\\triangle BCD\\) by SAS.`,
      ] },
      { h: "Use vertical angles to set up SAS", p: `Segments \\(\\overline{AB}\\) and \\(\\overline{CD}\\) bisect each other at point \\(E\\). Prove \\(\\triangle AEC\\cong\\triangle BED\\).`, steps: [
        `<strong>Step 1 — use the definition of bisect:</strong> \\(\\overline{AE}\\cong\\overline{BE}\\) and \\(\\overline{CE}\\cong\\overline{DE}\\).`,
        `<strong>Step 2 — find the included angle:</strong> \\(\\angle AEC\\) and \\(\\angle BED\\) are vertical angles, so \\(\\angle AEC\\cong\\angle BED\\).`,
        `<strong>Step 3 — check the angle is included:</strong> it lies between the two given sides at \\(E\\) in each triangle.`,
        `<strong>Step 4 — conclude:</strong> \\(\\triangle AEC\\cong\\triangle BED\\) by SAS.`,
      ] },
      { h: "Apply CPCTC after an SSS proof", p: `Given \\(\\triangle PQR\\cong\\triangle STU\\) (already proven by SSS), with \\(\\angle P=52^\\circ\\) and \\(\\angle Q=63^\\circ\\), find \\(\\angle T\\) and \\(\\angle U\\).`, steps: [
        `<strong>Step 1 — match corresponding vertices:</strong> \\(P\\leftrightarrow S\\), \\(Q\\leftrightarrow T\\), \\(R\\leftrightarrow U\\).`,
        `<strong>Step 2 — apply CPCTC:</strong> \\(\\angle T\\cong\\angle Q=63^\\circ\\).`,
        `<strong>Step 3 — find the remaining angle:</strong> \\(\\angle U=180^\\circ-52^\\circ-63^\\circ=65^\\circ\\).`,
      ] },
    ],
    practice: [
      { q: `Given \\(\\overline{AB}\\cong\\overline{XY}\\), \\(\\overline{BC}\\cong\\overline{YZ}\\), and \\(\\overline{CA}\\cong\\overline{ZX}\\), which postulate proves \\(\\triangle ABC\\cong\\triangle XYZ\\)?`, a: `SSS — all three pairs of sides are congruent.` },
      { q: `Two triangles share a side, and one other pair of sides plus the angle between the shared side and that other side are congruent in each triangle. Which postulate applies?`, a: `SAS, since the shared side supplies one congruent side, the given side supplies the second, and the given angle between them is the included angle.` },
      { q: `In \\(\\triangle ABD\\) and \\(\\triangle CBD\\), \\(\\overline{AB}\\cong\\overline{CB}\\), \\(\\angle ABD\\cong\\angle CBD\\), and \\(\\overline{BD}\\) is shared. Name the postulate and the congruence statement.`, a: `SAS; \\(\\triangle ABD\\cong\\triangle CBD\\).` },
      { q: `Given \\(\\triangle JKL\\cong\\triangle MNP\\) by SSS, with \\(\\angle J=48^\\circ\\) and \\(\\angle K=74^\\circ\\), find \\(\\angle P\\).`, a: `\\(\\angle L=180^\\circ-48^\\circ-74^\\circ=58^\\circ\\), and by CPCTC \\(\\angle P\\cong\\angle L=58^\\circ\\).` },
      { q: `Segments \\(\\overline{AC}\\) and \\(\\overline{BD}\\) bisect each other at \\(E\\). Which postulate proves \\(\\triangle AEB\\cong\\triangle CED\\), and what supplies the included angle?`, a: `SAS; the included angle comes from the vertical angles \\(\\angle AEB\\cong\\angle CED\\).` },
    ],
    qa: [
      { q: `Why must the angle be "included" for SAS to work?`, a: `If the angle isn't between the two given sides (an "SSA" situation), the third side isn't fixed — two different triangles can share those two sides and that non-included angle, so congruence isn't guaranteed.` },
      { q: `What are the most common ways to find a "free" third congruent part?`, a: `A shared side (Reflexive Property), a shared angle, or a pair of vertical angles formed by intersecting segments.` },
      { q: `Does the order of the letters in a congruence statement matter?`, a: `Yes — \\(\\triangle ABC\\cong\\triangle DEF\\) means \\(A\\leftrightarrow D\\), \\(B\\leftrightarrow E\\), \\(C\\leftrightarrow F\\). Matching the order correctly is essential for CPCTC.` },
      { q: `Can I use CPCTC before proving the triangles congruent?`, a: `No — CPCTC is only valid <em>after</em> a congruence has been established by SSS, SAS, ASA, AAS, or HL. It can't be used to prove the congruence itself.` },
      { q: `Is SSA (two sides and a non-included angle) a valid congruence shortcut?`, a: `No. SSA does not guarantee congruence in general — it's sometimes called the "ambiguous case," since two different triangles can satisfy the same SSA information.` },
    ],
  }),
]);

ch["4.4"] = L("4.4", "Proving Congruence: ASA and AAS (MA.912.GR.1.2)", [
  lessonHtml({
    title: "Proving Congruence: ASA and AAS",
    emoji: "🔗",
    overview: `Two more shortcuts complete the toolkit for proving triangles congruent without checking all six corresponding parts. ASA (Angle-Side-Angle) uses two angles and the included side; AAS (Angle-Angle-Side) uses two angles and a non-included side. Because any two angles of a triangle determine the third (the Angle-Sum Theorem), AAS is really just ASA in disguise — but it is convenient to state separately since it matches many diagrams directly.`,
    toolkit: [
      `Angle-Side-Angle (ASA): if two angles and the <strong>included</strong> side (the side between them) of one triangle are congruent to the corresponding parts of another, the triangles are congruent.`,
      `Angle-Angle-Side (AAS): if two angles and a <strong>non-included</strong> side are congruent to the corresponding parts of another triangle, the triangles are congruent.`,
      `Why AAS works: knowing two angles gives you the third (angles sum to \\(180^\\circ\\)), which turns the given non-included side into an included side for ASA.`,
      `Read the diagram carefully to decide whether the given side sits between the two marked angles (ASA) or outside them (AAS).`,
    ],
    examples: [
      { h: "Recognize ASA from a diagram", p: `In \\(\\triangle ABC\\) and \\(\\triangle DEF\\), \\(\\angle A\\cong\\angle D\\), \\(\\overline{AB}\\cong\\overline{DE}\\), and \\(\\angle B\\cong\\angle E\\). Prove the triangles congruent.`, steps: [
        `<strong>Step 1 — check where the side falls:</strong> \\(\\overline{AB}\\) lies directly between \\(\\angle A\\) and \\(\\angle B\\), so it is the included side.`,
        `<strong>Step 2 — match to a postulate:</strong> two angles and the included side is <strong>ASA</strong>.`,
        `<strong>Step 3 — conclude:</strong> \\(\\triangle ABC\\cong\\triangle DEF\\) by ASA.`,
      ] },
      { h: "Recognize AAS from a diagram", p: `In \\(\\triangle GHI\\) and \\(\\triangle JKL\\), \\(\\angle G\\cong\\angle J\\), \\(\\angle H\\cong\\angle K\\), and \\(\\overline{HI}\\cong\\overline{KL}\\). Prove the triangles congruent.`, steps: [
        `<strong>Step 1 — check where the side falls:</strong> \\(\\overline{HI}\\) is opposite \\(\\angle G\\)/\\(\\angle J\\), not between the two marked angles \\(\\angle G\\) and \\(\\angle H\\).`,
        `<strong>Step 2 — match to a postulate:</strong> two angles and a non-included side is <strong>AAS</strong>.`,
        `<strong>Step 3 — conclude:</strong> \\(\\triangle GHI\\cong\\triangle JKL\\) by AAS.`,
      ] },
      { h: "Use a shared side for ASA", p: `In the diagram, \\(\\overline{BD}\\) is a shared side, \\(\\angle ABD\\cong\\angle CDB\\), and \\(\\angle ADB\\cong\\angle CBD\\). Prove \\(\\triangle ABD\\cong\\triangle CDB\\).`, steps: [
        `<strong>Step 1 — locate the shared side:</strong> \\(\\overline{BD}\\cong\\overline{DB}\\) by the Reflexive Property.`,
        `<strong>Step 2 — check the side is included:</strong> \\(\\overline{BD}\\) lies between \\(\\angle ABD\\)/\\(\\angle ADB\\) in the first triangle and between \\(\\angle CDB\\)/\\(\\angle CBD\\) in the second.`,
        `<strong>Step 3 — conclude:</strong> \\(\\triangle ABD\\cong\\triangle CDB\\) by ASA.`,
      ] },
      { h: "Use base angles and a shared side for AAS", p: `In isosceles \\(\\triangle JKL\\) with \\(\\overline{JK}\\cong\\overline{JL}\\), altitude \\(\\overline{JM}\\) is drawn to base \\(\\overline{KL}\\) (\\(M\\) is on \\(\\overline{KL}\\)). Prove \\(\\triangle JKM\\cong\\triangle JLM\\).`, steps: [
        `<strong>Step 1 — get a pair of congruent angles:</strong> since \\(\\overline{JK}\\cong\\overline{JL}\\), \\(\\angle K\\cong\\angle L\\) by the Base Angles Theorem.`,
        `<strong>Step 2 — get a second pair:</strong> \\(\\overline{JM}\\) is an altitude, so \\(\\angle JMK\\cong\\angle JML\\) (both right angles).`,
        `<strong>Step 3 — supply the shared side:</strong> \\(\\overline{JM}\\cong\\overline{JM}\\) by the Reflexive Property — this side is opposite \\(\\angle K\\) and \\(\\angle L\\), so it is non-included.`,
        `<strong>Step 4 — conclude:</strong> \\(\\triangle JKM\\cong\\triangle JLM\\) by AAS.`,
      ] },
      { h: "Solve for x using ASA/AAS with algebraic sides", p: `\\(\\triangle NOP\\cong\\triangle QRS\\) by ASA, with \\(\\overline{OP}\\) corresponding to \\(\\overline{RS}\\). If \\(OP=5x-3\\) and \\(RS=2x+9\\), find \\(x\\) and the length of the included side.`, steps: [
        `<strong>Step 1 — use CPCTC:</strong> since the triangles are congruent, \\(\\overline{OP}\\cong\\overline{RS}\\).`,
        `<strong>Step 2 — set the expressions equal:</strong> \\(5x-3=2x+9\\).`,
        `<strong>Step 3 — solve:</strong> \\(3x=12\\), so \\(x=4\\).`,
        `<strong>Step 4 — evaluate:</strong> \\(OP=5(4)-3=17\\).`,
      ] },
    ],
    practice: [
      { q: `In two triangles, two pairs of angles and the side between them are congruent. Which postulate applies?`, a: `ASA.` },
      { q: `In two triangles, two pairs of angles are congruent, and a pair of sides opposite one pair of angles is congruent. Which postulate applies?`, a: `AAS.` },
      { q: `Given \\(\\angle A\\cong\\angle D\\), \\(\\angle B\\cong\\angle E\\), and \\(\\overline{BC}\\cong\\overline{EF}\\) (with \\(\\overline{BC}\\) opposite \\(\\angle A\\)), write the congruence statement and name the postulate.`, a: `\\(\\triangle ABC\\cong\\triangle DEF\\) by AAS.` },
      { q: `\\(\\triangle RST\\cong\\triangle UVW\\) by ASA, with \\(\\overline{ST}\\) corresponding to \\(\\overline{VW}\\). If \\(ST=3x+1\\) and \\(VW=19\\), find \\(x\\).`, a: `\\(3x+1=19\\Rightarrow x=6\\).` },
      { q: `Two triangles share a side that lies between one pair of congruent angles in each triangle, and the other pair of angles is also congruent. Name the postulate.`, a: `ASA (the shared side is included between the marked angles).` },
    ],
    qa: [
      { q: `What is the real difference between ASA and AAS?`, a: `In ASA the given side lies <em>between</em> the two given angles; in AAS the side is <em>opposite</em> one of the given angles (not between them).` },
      { q: `Why does AAS actually work if the side isn't included?`, a: `Two known angles determine the third angle automatically (angle sum \\(=180^\\circ\\)), which makes the "non-included" side included between two of the (now three) known angles — reducing AAS to ASA.` },
      { q: `Is AAA (three angles, no sides) a valid congruence shortcut?`, a: `No. Matching angles only guarantees similar triangles, not congruent ones — the triangles could be different sizes.` },
      { q: `How do parallel lines often supply the angles needed for ASA/AAS?`, a: `A transversal across two parallel lines creates congruent alternate interior angles, which frequently provide one or both of the required angle congruences.` },
      { q: `Once ASA or AAS proves congruence, how do I find an unknown side or angle?`, a: `Apply CPCTC — every remaining corresponding pair of sides and angles is congruent once the triangles themselves are proven congruent.` },
    ],
  }),
]);

ch["4.5"] = L("4.5", "Proving Congruence: Hypotenuse-Leg (HL) for Right Triangles (MA.912.GR.1.2)", [
  lessonHtml({
    title: "Proving Congruence: Hypotenuse-Leg (HL) for Right Triangles",
    emoji: "📏",
    overview: `Right triangles get one extra shortcut that does not exist for general triangles: the Hypotenuse-Leg (HL) Theorem. If the hypotenuse and one leg of a right triangle are congruent to the hypotenuse and a leg of another right triangle, the triangles are congruent — even though this looks like the usually-invalid SSA pattern. HL is a special case that works only because the angle involved is a right angle, which pins down the third side by the Pythagorean Theorem.`,
    toolkit: [
      `HL Theorem: if the hypotenuse and one leg of a right triangle are congruent to the hypotenuse and a leg of another right triangle, the triangles are congruent.`,
      `HL applies <strong>only</strong> to right triangles — first confirm both triangles have a right angle before using it.`,
      `Why it works: the Pythagorean Theorem shows the third side is completely determined once the hypotenuse and one leg are fixed, so SSA becomes valid in this special right-angle case.`,
      `After identifying the right angle, look for the hypotenuse (opposite the right angle) and a leg pair that are congruent — often a shared leg.`,
    ],
    examples: [
      { h: "Recognize when HL applies", p: `\\(\\triangle ABC\\) and \\(\\triangle DEF\\) both have right angles at \\(B\\) and \\(E\\). \\(\\overline{AC}\\cong\\overline{DF}\\) (hypotenuses) and \\(\\overline{AB}\\cong\\overline{DE}\\) (legs). Prove the triangles congruent.`, steps: [
        `<strong>Step 1 — confirm right angles:</strong> \\(\\angle B\\) and \\(\\angle E\\) are both right angles, so both triangles are right triangles.`,
        `<strong>Step 2 — identify the hypotenuses:</strong> \\(\\overline{AC}\\) and \\(\\overline{DF}\\), opposite the right angles, are congruent.`,
        `<strong>Step 3 — identify the legs:</strong> \\(\\overline{AB}\\cong\\overline{DE}\\) is one pair of legs.`,
        `<strong>Step 4 — conclude:</strong> \\(\\triangle ABC\\cong\\triangle DEF\\) by HL.`,
      ] },
      { h: "Use a shared leg for HL", p: `\\(\\overline{BD}\\perp\\overline{AC}\\) at \\(D\\), with \\(\\overline{AB}\\cong\\overline{CB}\\) (the hypotenuses of the two right triangles formed). Prove \\(\\triangle ABD\\cong\\triangle CBD\\).`, steps: [
        `<strong>Step 1 — confirm right angles:</strong> \\(\\overline{BD}\\perp\\overline{AC}\\) means \\(\\angle ADB\\) and \\(\\angle CDB\\) are both right angles.`,
        `<strong>Step 2 — identify the hypotenuses:</strong> \\(\\overline{AB}\\) and \\(\\overline{CB}\\), opposite the right angles, are congruent (given).`,
        `<strong>Step 3 — supply the shared leg:</strong> \\(\\overline{BD}\\cong\\overline{BD}\\) by the Reflexive Property.`,
        `<strong>Step 4 — conclude:</strong> \\(\\triangle ABD\\cong\\triangle CBD\\) by HL.`,
      ] },
      { h: "Distinguish HL from ordinary SSA", p: `Explain why \\(\\overline{AC}\\cong\\overline{DF}\\) and \\(\\overline{BC}\\cong\\overline{EF}\\) (with right angles at \\(B\\) and \\(E\\)) is enough to prove \\(\\triangle ABC\\cong\\triangle DEF\\), while the same two-sides-and-a-non-included-angle pattern would fail without the right angle.`, steps: [
        `<strong>Step 1 — recall why plain SSA fails:</strong> in general, two sides and a non-included angle can be satisfied by two non-congruent triangles (an "ambiguous case").`,
        `<strong>Step 2 — see what the right angle fixes:</strong> once the hypotenuse and one leg are set, the Pythagorean Theorem \\(a^2+b^2=c^2\\) forces the remaining leg to a single value — no second triangle is possible.`,
        `<strong>Step 3 — conclude:</strong> the right angle removes the ambiguity, which is exactly why HL is a valid postulate only for right triangles.`,
      ] },
      { h: "Solve for x using HL and CPCTC", p: `Right triangles \\(\\triangle GHI\\) and \\(\\triangle JKL\\) have right angles at \\(H\\) and \\(K\\), congruent hypotenuses \\(\\overline{GI}\\cong\\overline{JL}\\), and legs \\(GH=4x-1\\), \\(JK=15\\). If \\(\\triangle GHI\\cong\\triangle JKL\\) by HL, find \\(x\\).`, steps: [
        `<strong>Step 1 — use CPCTC:</strong> since the triangles are congruent, \\(\\overline{GH}\\cong\\overline{JK}\\).`,
        `<strong>Step 2 — set the expressions equal:</strong> \\(4x-1=15\\).`,
        `<strong>Step 3 — solve:</strong> \\(4x=16\\), so \\(x=4\\).`,
      ] },
      { h: "Apply HL in a diagram with a common hypotenuse pair", p: `Isosceles \\(\\triangle PQR\\) has \\(\\overline{PQ}\\cong\\overline{PR}\\), and altitude \\(\\overline{PM}\\) is drawn from \\(P\\) to \\(\\overline{QR}\\). Prove \\(\\triangle PMQ\\cong\\triangle PMR\\) using HL.`, steps: [
        `<strong>Step 1 — confirm right angles:</strong> the altitude \\(\\overline{PM}\\) creates \\(\\angle PMQ\\cong\\angle PMR\\), both right angles.`,
        `<strong>Step 2 — identify the hypotenuses:</strong> \\(\\overline{PQ}\\) and \\(\\overline{PR}\\), opposite the right angles, are congruent (given).`,
        `<strong>Step 3 — supply the shared leg:</strong> \\(\\overline{PM}\\cong\\overline{PM}\\) by the Reflexive Property.`,
        `<strong>Step 4 — conclude:</strong> \\(\\triangle PMQ\\cong\\triangle PMR\\) by HL.`,
      ], check: `This also confirms \\(M\\) is the midpoint of \\(\\overline{QR}\\), by CPCTC.` },
    ],
    practice: [
      { q: `What two conditions must be verified before using HL?`, a: `Both triangles must be right triangles, and both the hypotenuses and one pair of legs must be congruent.` },
      { q: `Right triangles \\(\\triangle ABC\\) and \\(\\triangle DEF\\) have right angles at \\(C\\) and \\(F\\), with \\(\\overline{AB}\\cong\\overline{DE}\\) and \\(\\overline{BC}\\cong\\overline{EF}\\). Name the postulate that proves congruence.`, a: `HL — the hypotenuses \\(\\overline{AB}\\), \\(\\overline{DE}\\) and the legs \\(\\overline{BC}\\), \\(\\overline{EF}\\) are congruent.` },
      { q: `Why can't HL be used on two triangles that are not right triangles?`, a: `Without a right angle, the third side is not determined by the Pythagorean Theorem, so the SSA information could describe two different triangles.` },
      { q: `Right triangles \\(\\triangle STU\\) and \\(\\triangle VWX\\) have right angles at \\(T\\) and \\(W\\), congruent hypotenuses, and legs \\(TU=2x+3\\), \\(WX=13\\). If they are congruent by HL, find \\(x\\).`, a: `\\(2x+3=13\\Rightarrow x=5\\).` },
      { q: `An altitude from the vertex angle of an isosceles triangle splits it into two right triangles. Which two congruent parts allow HL to prove them congruent?`, a: `The congruent legs of the isosceles triangle (which become the hypotenuses of the two right triangles) and the shared altitude (a shared leg).` },
    ],
    qa: [
      { q: `Is HL really just a special case of SSA?`, a: `Yes — HL is the one situation where the otherwise invalid SSA pattern becomes valid, precisely because the included right angle pins down the third side via the Pythagorean Theorem.` },
      { q: `Which side is the hypotenuse in a right triangle?`, a: `The side opposite the right angle — always the longest side of the triangle.` },
      { q: `Do I have to check for right angles before using HL?`, a: `Yes, always confirm (or use given information) that both triangles have a right angle; HL cannot be applied otherwise.` },
      { q: `Can HL be combined with CPCTC?`, a: `Absolutely — once HL proves the triangles congruent, CPCTC unlocks every other corresponding side and angle, just as with SSS, SAS, ASA, and AAS.` },
      { q: `What's a common diagram where HL naturally appears?`, a: `An altitude drawn from the vertex of an isosceles triangle to its base, which creates two right triangles sharing the altitude as a leg and the isosceles triangle's legs as hypotenuses.` },
    ],
  }),
]);

ch["4.6"] = L("4.6", "Triangle Proofs with Overlapping Triangles and Medians/Altitudes (MA.912.GR.1.3)", [
  lessonHtml({
    title: "Triangle Proofs with Overlapping Triangles and Medians/Altitudes",
    emoji: "🧭",
    overview: `Some of the trickiest congruence proofs involve triangles that overlap or share parts of each other — the same segment might be a side of one triangle and part of a side of another. The key skill is untangling the diagram: separate each triangle mentally (or on a sketch), track which segments and angles are shared, and use the definitions of medians, altitudes, and angle bisectors to generate the congruent parts you need.`,
    toolkit: [
      `Median: a segment from a vertex to the midpoint of the opposite side — it creates two segments of equal length.`,
      `Altitude: a segment from a vertex perpendicular to the opposite side (or its extension) — it creates right angles.`,
      `Angle bisector: a ray that splits an angle into two congruent angles.`,
      `For overlapping triangles, isolate each triangle mentally and use the Reflexive Property, Segment/Angle Addition Postulates, or subtraction of congruent pieces to find shared or hidden congruent parts.`,
    ],
    examples: [
      { h: "Untangle an overlapping-triangle diagram", p: `\\(\\overline{AD}\\) and \\(\\overline{BC}\\) intersect at \\(E\\), with \\(\\overline{AB}\\cong\\overline{DC}\\) and \\(\\overline{AE}\\cong\\overline{DE}\\). Prove \\(\\triangle ABE\\cong\\triangle DCE\\).`, steps: [
        `<strong>Step 1 — separate the two triangles mentally:</strong> \\(\\triangle ABE\\) uses vertices \\(A,B,E\\); \\(\\triangle DCE\\) uses \\(D,C,E\\) — they overlap only at point \\(E\\).`,
        `<strong>Step 2 — list the given congruent sides:</strong> \\(\\overline{AB}\\cong\\overline{DC}\\) and \\(\\overline{AE}\\cong\\overline{DE}\\).`,
        `<strong>Step 3 — find the included angle:</strong> \\(\\angle AEB\\) and \\(\\angle DEC\\) are vertical angles, so they are congruent.`,
        `<strong>Step 4 — conclude:</strong> \\(\\triangle ABE\\cong\\triangle DCE\\) by SAS.`,
      ] },
      { h: "Use the Segment Addition Postulate on a shared segment", p: `Points \\(A, B, C, D\\) lie on a line in that order, with \\(\\overline{AB}\\cong\\overline{CD}\\). Prove \\(\\overline{AC}\\cong\\overline{BD}\\).`, steps: [
        `<strong>Step 1 — apply Segment Addition:</strong> \\(AC=AB+BC\\) and \\(BD=BC+CD\\).`,
        `<strong>Step 2 — substitute the given congruence:</strong> since \\(AB=CD\\), the two sums become \\(AC=CD+BC\\) and \\(BD=BC+CD\\).`,
        `<strong>Step 3 — compare the two sums:</strong> both equal \\(BC+CD\\) (addition is commutative).`,
        `<strong>Step 4 — conclude:</strong> \\(AC=BD\\), so \\(\\overline{AC}\\cong\\overline{BD}\\). This "shared middle piece" trick is common in overlapping-triangle proofs.`,
      ] },
      { h: "Prove two medians create congruent segments", p: `In \\(\\triangle ABC\\), \\(\\overline{AB}\\cong\\overline{AC}\\), and \\(\\overline{BM}\\), \\(\\overline{CN}\\) are the medians to sides \\(\\overline{AC}\\) and \\(\\overline{AB}\\) (so \\(M\\), \\(N\\) are midpoints). Prove \\(\\overline{BM}\\cong\\overline{CN}\\).`, steps: [
        `<strong>Step 1 — use the midpoint definition:</strong> \\(M\\) is the midpoint of \\(\\overline{AC}\\), so \\(AM=\\dfrac{1}{2}AC\\); \\(N\\) is the midpoint of \\(\\overline{AB}\\), so \\(AN=\\dfrac{1}{2}AB\\). Since \\(AB\\cong AC\\), \\(\\overline{AM}\\cong\\overline{AN}\\).`,
        `<strong>Step 2 — find a shared angle:</strong> \\(\\angle A\\) is common to \\(\\triangle ABM\\) and \\(\\triangle ACN\\).`,
        `<strong>Step 3 — use the isosceles hypothesis again:</strong> \\(\\overline{AB}\\cong\\overline{AC}\\) directly gives the second pair of sides.`,
        `<strong>Step 4 — apply SAS:</strong> \\(\\triangle ABM\\cong\\triangle ACN\\) (sides \\(\\overline{AB}\\cong\\overline{AC}\\), angle \\(A\\) shared, sides \\(\\overline{AM}\\cong\\overline{AN}\\)), so by CPCTC \\(\\overline{BM}\\cong\\overline{CN}\\).`,
      ] },
      { h: "Use two altitudes in an isosceles triangle", p: `In isosceles \\(\\triangle ABC\\) with \\(\\overline{AB}\\cong\\overline{AC}\\), altitudes \\(\\overline{BD}\\) and \\(\\overline{CE}\\) are drawn to sides \\(\\overline{AC}\\) and \\(\\overline{AB}\\). Prove \\(\\overline{BD}\\cong\\overline{CE}\\).`, steps: [
        `<strong>Step 1 — identify the right angles:</strong> \\(\\angle ADB\\) and \\(\\angle AEC\\) are right angles (definition of altitude).`,
        `<strong>Step 2 — find a shared angle:</strong> \\(\\angle A\\) is common to \\(\\triangle ADB\\) and \\(\\triangle AEC\\).`,
        `<strong>Step 3 — use the isosceles hypothesis:</strong> \\(\\overline{AB}\\cong\\overline{AC}\\) are the hypotenuses of the two right triangles.`,
        `<strong>Step 4 — conclude:</strong> \\(\\triangle ADB\\cong\\triangle AEC\\) by AAS (\\(\\angle A\\), right angle, hypotenuse), so \\(\\overline{BD}\\cong\\overline{CE}\\) by CPCTC.`,
      ] },
      { h: "Multi-step overlapping proof with angle addition", p: `Rays \\(\\overrightarrow{BA}\\), \\(\\overrightarrow{BD}\\), \\(\\overrightarrow{BC}\\), \\(\\overrightarrow{BE}\\) are drawn in that order around vertex \\(B\\), so \\(\\overrightarrow{BD}\\) lies inside \\(\\angle ABC\\) and \\(\\overrightarrow{BC}\\) lies inside \\(\\angle DBE\\). Given \\(\\angle ABD\\cong\\angle CBE\\), prove \\(\\angle ABC\\cong\\angle DBE\\).`, steps: [
        `<strong>Step 1 — apply the Angle Addition Postulate to each large angle:</strong> \\(\\angle ABC=\\angle ABD+\\angle DBC\\) and \\(\\angle DBE=\\angle DBC+\\angle CBE\\).`,
        `<strong>Step 2 — substitute the given congruence:</strong> since \\(\\angle ABD\\cong\\angle CBE\\), replace \\(\\angle ABD\\) with \\(\\angle CBE\\) in the first equation: \\(\\angle ABC=\\angle CBE+\\angle DBC\\).`,
        `<strong>Step 3 — compare the two sums:</strong> \\(\\angle ABC=\\angle DBC+\\angle CBE\\), which is exactly the expression for \\(\\angle DBE\\).`,
        `<strong>Step 4 — conclude:</strong> \\(\\angle ABC\\cong\\angle DBE\\). The shared angle \\(\\angle DBC\\) is the "overlap" both totals have in common.`,
      ] },
    ],
    practice: [
      { q: `What is the defining property of a median of a triangle?`, a: `It connects a vertex to the midpoint of the opposite side, so it divides that side into two congruent segments.` },
      { q: `What is the defining property of an altitude of a triangle?`, a: `It connects a vertex to the opposite side (or its extension) and meets it at a right angle.` },
      { q: `Points \\(A,B,C,D\\) lie on a line in that order with \\(\\overline{AB}\\cong\\overline{CD}\\). What overlapping segment do \\(\\overline{AC}\\) and \\(\\overline{BD}\\) share, and what does this let you conclude?`, a: `They share \\(\\overline{BC}\\); adding it to each of the given congruent pieces shows \\(\\overline{AC}\\cong\\overline{BD}\\).` },
      { q: `In isosceles \\(\\triangle ABC\\) (\\(\\overline{AB}\\cong\\overline{AC}\\)), why are the two medians drawn to the legs congruent?`, a: `Each median's length depends on half of a leg, the shared vertex angle, and the equal legs — by SAS the two small triangles formed are congruent, so by CPCTC the medians are congruent.` },
      { q: `When two angles overlap and share a common piece, what postulate lets you add or subtract that shared piece to compare the whole angles?`, a: `The Angle Addition Postulate (paired with substitution or subtraction of the congruent shared angle).` },
    ],
    qa: [
      { q: `What is the best strategy for a confusing overlapping-triangle diagram?`, a: `Sketch each triangle separately (or trace over it in a different color), listing only the vertices, sides, and angles that belong to that one triangle.` },
      { q: `How do medians and altitudes generate "extra" congruent parts in a proof?`, a: `Their definitions do the work: a median guarantees congruent half-sides (midpoint), and an altitude guarantees right angles — both are usable as one of the three parts in SSS, SAS, ASA, AAS, or HL.` },
      { q: `What is the "overlap" trick with Segment or Angle Addition?`, a: `When two segments (or angles) share a common middle piece, adding that shared piece to two other congruent pieces shows the two <em>totals</em> are also congruent — or, in reverse, subtracting a shared piece from congruent totals shows the remaining pieces are congruent.` },
      { q: `Can the same segment serve as a side in two different triangles in one proof?`, a: `Yes — this is exactly what makes triangles "overlapping." That segment is congruent to itself by the Reflexive Property and can be used as a shared side in both triangles.` },
      { q: `Why do proofs with overlapping triangles often need more steps than simple ones?`, a: `Because the shared parts must first be justified using definitions (midpoint, perpendicular, bisector) or postulates (Segment/Angle Addition) before the triangle congruence postulate can be applied.` },
    ],
  }),
]);
