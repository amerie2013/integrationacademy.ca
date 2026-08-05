import { L, lessonHtml } from "./_helpers.mjs";

export const ch = {};

ch["5.1"] = L("5.1", "Dilations on the Coordinate Plane (MA.912.GR.2.2)", [
  lessonHtml({
    title: "Dilations on the Coordinate Plane",
    emoji: "🔍",
    overview: `A dilation is a transformation that produces an image the same shape as the original figure, scaled from a fixed <strong>center</strong> point by a <strong>scale factor</strong> \\(k\\). Unlike translations, reflections, and rotations, dilations are <em>not</em> rigid motions — they preserve angle measure and shape, but not distance, unless \\(k=\\pm1\\). On the coordinate plane, dilations centered at the origin are especially simple to compute.`,
    toolkit: [
      `Dilation centered at the origin with scale factor \\(k\\): \\((x,y)\\mapsto(kx,ky)\\).`,
      `If \\(|k|>1\\), the image is an <strong>enlargement</strong>; if \\(0<|k|<1\\), the image is a <strong>reduction</strong>; if \\(k=1\\), the image coincides with the original figure.`,
      `Dilations preserve angle measure and shape (similarity) but scale every distance by a factor of \\(|k|\\); a dilation is an isometry only when \\(k=\\pm1\\).`,
      `For a dilation centered at a point \\(P(a,b)\\) other than the origin: subtract the center, scale, then add the center back: \\((x,y)\\mapsto(a+k(x-a),\\,b+k(y-b))\\).`,
    ],
    examples: [
      { h: "Dilate a point from the origin", p: `Find the image of \\(A(3,-2)\\) under a dilation centered at the origin with scale factor \\(k=2\\).`, steps: [
        `<strong>Step 1 — apply the rule:</strong> \\((x,y)\\mapsto(2x,2y)\\).`,
        `<strong>Step 2 — substitute:</strong> \\(A'(2\\cdot3,\\,2\\cdot(-2))=A'(6,-4)\\).`,
      ] },
      { h: "Dilate a triangle and classify the image", p: `\\(\\triangle ABC\\) has vertices \\(A(2,4)\\), \\(B(6,4)\\), \\(C(6,-2)\\). Find the image under a dilation centered at the origin with scale factor \\(k=\\dfrac{1}{2}\\), and state whether the image is an enlargement or reduction.`, steps: [
        `<strong>Step 1 — apply the rule to each vertex:</strong> \\((x,y)\\mapsto\\left(\\dfrac{1}{2}x,\\dfrac{1}{2}y\\right)\\).`,
        `<strong>Step 2 — compute the images:</strong> \\(A'(1,2)\\), \\(B'(3,2)\\), \\(C'(3,-1)\\).`,
        `<strong>Step 3 — classify:</strong> since \\(0<k<1\\), the image is a <strong>reduction</strong> — smaller than the original.`,
      ] },
      { h: "Find the scale factor from a point and its image", p: `Under a dilation centered at the origin, \\(P(4,6)\\) maps to \\(P'(10,15)\\). Find the scale factor \\(k\\).`, steps: [
        `<strong>Step 1 — compare corresponding coordinates:</strong> \\(k=\\dfrac{x'}{x}=\\dfrac{10}{4}\\), or \\(k=\\dfrac{y'}{y}=\\dfrac{15}{6}\\).`,
        `<strong>Step 2 — simplify:</strong> both ratios reduce to \\(k=\\dfrac{5}{2}\\).`,
      ] },
      { h: "Dilate about a center other than the origin", p: `Find the image of \\(Q(5,3)\\) under a dilation centered at \\(P(1,1)\\) with scale factor \\(k=3\\).`, steps: [
        `<strong>Step 1 — subtract the center:</strong> \\((5-1,\\,3-1)=(4,2)\\).`,
        `<strong>Step 2 — scale by k:</strong> \\(3(4,2)=(12,6)\\).`,
        `<strong>Step 3 — add the center back:</strong> \\((12+1,\\,6+1)=(13,7)\\).`,
      ], check: `So \\(Q'(13,7)\\).` },
      { h: "Use the distance-scaling property", p: `\\(\\overline{MN}\\) has length \\(8\\). After a dilation centered at the origin with scale factor \\(k=-1.5\\), what is the length of the image \\(\\overline{M'N'}\\), and what does the negative sign indicate?`, steps: [
        `<strong>Step 1 — scale the length by \\(|k|\\):</strong> \\(M'N'=|{-1.5}|\\times8=12\\).`,
        `<strong>Step 2 — interpret the sign of k:</strong> a negative scale factor produces an image on the opposite side of the center from the original figure (like a \\(180^\\circ\\) rotation combined with the scaling).`,
      ] },
    ],
    practice: [
      { q: `Find the image of \\(B(-4,5)\\) under a dilation centered at the origin with scale factor \\(k=3\\).`, a: `\\(B'(-12,15)\\).` },
      { q: `\\(\\triangle DEF\\) has vertices \\(D(0,0)\\), \\(E(4,0)\\), \\(F(0,6)\\). Find the vertices of the image under a dilation centered at the origin with \\(k=\\dfrac{1}{2}\\).`, a: `\\(D'(0,0)\\), \\(E'(2,0)\\), \\(F'(0,3)\\).` },
      { q: `Under a dilation centered at the origin, \\(R(6,9)\\) maps to \\(R'(2,3)\\). Find the scale factor.`, a: `\\(k=\\dfrac{2}{6}=\\dfrac{1}{3}\\).` },
      { q: `Find the image of \\(S(2,4)\\) under a dilation centered at \\(P(2,0)\\) with scale factor \\(k=2\\).`, a: `Subtract the center: \\((0,4)\\); scale: \\((0,8)\\); add the center back: \\(S'(2,8)\\).` },
      { q: `A segment of length \\(10\\) is dilated with scale factor \\(k=0.4\\). Find the length of the image, and state whether this is an enlargement or reduction.`, a: `Length \\(=0.4\\times10=4\\); since \\(0<k<1\\), it is a <strong>reduction</strong>.` },
    ],
    qa: [
      { q: `Are dilations rigid motions?`, a: `No. Dilations preserve shape (angle measures) but not size, unless \\(k=\\pm1\\) — so they are not isometries in general.` },
      { q: `What does a scale factor between \\(0\\) and \\(1\\) mean?`, a: `The image is smaller than the original — a reduction — but similar to it and on the same side of the center.` },
      { q: `What happens to the center of dilation itself?`, a: `It maps to itself — the center is always a fixed point of the dilation.` },
      { q: `How does a negative scale factor affect the image?`, a: `The image is scaled by \\(|k|\\) but ends up on the opposite side of the center, as if rotated \\(180^\\circ\\) about the center in addition to being resized.` },
      { q: `Why is the origin-centered rule \\((x,y)\\mapsto(kx,ky)\\) so much simpler than the general formula?`, a: `Because the center's coordinates are \\((0,0)\\), so "subtract the center, scale, add it back" reduces to just scaling — the subtract/add steps do nothing.` },
    ],
  }),
]);

ch["5.2"] = L("5.2", "Proving Similarity: AA, SAS, and SSS Similarity Theorems (MA.912.GR.1.2)", [
  lessonHtml({
    title: "Proving Similarity: AA, SAS, and SSS Similarity Theorems",
    emoji: "🎯",
    overview: `Similar triangles have the same shape but not necessarily the same size — corresponding angles are congruent and corresponding sides are proportional. Just as with congruence, you don't need to check every angle and side pair to prove two triangles similar. Three shortcut theorems — AA, SAS Similarity, and SSS Similarity — let you establish similarity from limited information, unlocking every other proportional relationship in the figure.`,
    toolkit: [
      `AA Similarity: if two angles of one triangle are congruent to two angles of another, the triangles are similar.`,
      `SAS Similarity: if two pairs of corresponding sides are proportional and the included angles are congruent, the triangles are similar.`,
      `SSS Similarity: if all three pairs of corresponding sides are proportional, the triangles are similar.`,
      `Similarity statement \\(\\triangle ABC\\sim\\triangle DEF\\) means \\(\\angle A\\cong\\angle D\\), \\(\\angle B\\cong\\angle E\\), \\(\\angle C\\cong\\angle F\\), and \\(\\dfrac{AB}{DE}=\\dfrac{BC}{EF}=\\dfrac{CA}{FD}\\).`,
    ],
    examples: [
      { h: "Prove similarity with AA", p: `\\(\\angle A=50^\\circ\\), \\(\\angle B=70^\\circ\\) in \\(\\triangle ABC\\); \\(\\angle D=50^\\circ\\), \\(\\angle E=70^\\circ\\) in \\(\\triangle DEF\\). Prove the triangles are similar.`, steps: [
        `<strong>Step 1 — compare the angles:</strong> \\(\\angle A\\cong\\angle D\\) (both \\(50^\\circ\\)) and \\(\\angle B\\cong\\angle E\\) (both \\(70^\\circ\\)).`,
        `<strong>Step 2 — apply AA:</strong> two pairs of congruent angles are enough.`,
        `<strong>Step 3 — conclude:</strong> \\(\\triangle ABC\\sim\\triangle DEF\\).`,
      ], check: `The third angle pair is automatically congruent too, since \\(180^\\circ-50^\\circ-70^\\circ=60^\\circ\\) in both triangles.` },
      { h: "Prove similarity with SSS Similarity", p: `\\(\\triangle GHI\\) has sides \\(6,8,10\\); \\(\\triangle JKL\\) has sides \\(9,12,15\\). Prove the triangles are similar.`, steps: [
        `<strong>Step 1 — order the sides and form ratios:</strong> \\(\\dfrac{9}{6}=\\dfrac{3}{2}\\), \\(\\dfrac{12}{8}=\\dfrac{3}{2}\\), \\(\\dfrac{15}{10}=\\dfrac{3}{2}\\).`,
        `<strong>Step 2 — confirm all three ratios are equal:</strong> every pair of corresponding sides has the same ratio \\(\\dfrac{3}{2}\\).`,
        `<strong>Step 3 — apply SSS Similarity:</strong> \\(\\triangle JKL\\sim\\triangle GHI\\) with scale factor \\(\\dfrac{3}{2}\\).`,
      ] },
      { h: "Prove similarity with SAS Similarity", p: `In \\(\\triangle MNP\\), \\(MN=4\\), \\(MP=6\\), \\(\\angle M=40^\\circ\\). In \\(\\triangle QRS\\), \\(QR=6\\), \\(QS=9\\), \\(\\angle Q=40^\\circ\\). Prove the triangles are similar.`, steps: [
        `<strong>Step 1 — check the included angle:</strong> \\(\\angle M\\cong\\angle Q\\) (both \\(40^\\circ\\)), and each is between the two given sides.`,
        `<strong>Step 2 — compare the side ratios:</strong> \\(\\dfrac{QR}{MN}=\\dfrac{6}{4}=\\dfrac{3}{2}\\) and \\(\\dfrac{QS}{MP}=\\dfrac{9}{6}=\\dfrac{3}{2}\\).`,
        `<strong>Step 3 — apply SAS Similarity:</strong> the ratios match and the included angles are congruent, so \\(\\triangle QRS\\sim\\triangle MNP\\).`,
      ] },
      { h: "Use similarity to find a missing side", p: `\\(\\triangle ABC\\sim\\triangle DEF\\), with \\(AB=8\\), \\(DE=12\\), and \\(BC=10\\). Find \\(EF\\).`, steps: [
        `<strong>Step 1 — set up a proportion:</strong> \\(\\dfrac{AB}{DE}=\\dfrac{BC}{EF}\\).`,
        `<strong>Step 2 — substitute:</strong> \\(\\dfrac{8}{12}=\\dfrac{10}{EF}\\).`,
        `<strong>Step 3 — cross-multiply and solve:</strong> \\(8\\cdot EF=120\\), so \\(EF=15\\).`,
      ] },
      { h: "Combine AA with algebra", p: `\\(\\overline{BC}\\parallel\\overline{DE}\\) in the diagram, so \\(\\triangle ABC\\sim\\triangle ADE\\). If \\(AB=6\\), \\(BD=4\\) (so \\(AD=10\\)), and \\(BC=9\\), find \\(DE\\).`, steps: [
        `<strong>Step 1 — justify the similarity:</strong> \\(\\overline{BC}\\parallel\\overline{DE}\\) creates congruent corresponding angles at the transversal crossings, and \\(\\angle A\\) is shared — AA gives \\(\\triangle ABC\\sim\\triangle ADE\\).`,
        `<strong>Step 2 — set up the proportion:</strong> \\(\\dfrac{AB}{AD}=\\dfrac{BC}{DE}\\).`,
        `<strong>Step 3 — substitute:</strong> \\(\\dfrac{6}{10}=\\dfrac{9}{DE}\\).`,
        `<strong>Step 4 — solve:</strong> \\(6\\cdot DE=90\\), so \\(DE=15\\).`,
      ] },
    ],
    practice: [
      { q: `Two triangles have angle pairs \\(65^\\circ,\\,45^\\circ\\) and \\(65^\\circ,\\,45^\\circ\\). Which theorem proves them similar?`, a: `AA Similarity.` },
      { q: `\\(\\triangle ABC\\) has sides \\(5,12,13\\); \\(\\triangle DEF\\) has sides \\(10,24,26\\). Are the triangles similar? Explain.`, a: `Yes — every ratio (\\(\\dfrac{10}{5}=\\dfrac{24}{12}=\\dfrac{26}{13}=2\\)) is equal, so SSS Similarity applies.` },
      { q: `In \\(\\triangle PQR\\), \\(PQ=3\\), \\(PR=5\\), \\(\\angle P=60^\\circ\\). In \\(\\triangle STU\\), \\(ST=9\\), \\(SU=15\\), \\(\\angle S=60^\\circ\\). Are they similar? Which theorem applies?`, a: `Yes; the sides are proportional (\\(\\dfrac{9}{3}=\\dfrac{15}{5}=3\\)) and the included angles are congruent, so SAS Similarity applies.` },
      { q: `\\(\\triangle XYZ\\sim\\triangle LMN\\), with \\(XY=9\\), \\(LM=6\\), and \\(YZ=12\\). Find \\(MN\\).`, a: `\\(\\dfrac{9}{6}=\\dfrac{12}{MN}\\Rightarrow MN=8\\).` },
      { q: `\\(\\overline{DE}\\parallel\\overline{BC}\\) in \\(\\triangle ABC\\), with \\(AD=4\\), \\(AB=10\\), and \\(DE=6\\). Find \\(BC\\).`, a: `\\(\\triangle ADE\\sim\\triangle ABC\\) by AA; \\(\\dfrac{4}{10}=\\dfrac{6}{BC}\\Rightarrow BC=15\\).` },
    ],
    qa: [
      { q: `Why is AA enough, when SSS and SAS Similarity need extra ratio checks?`, a: `Two known angles force the third angle to match too (angle sum \\(=180^\\circ\\)), and matching all three angles is already sufficient to guarantee proportional sides — so no side information is needed.` },
      { q: `What is the difference between SAS Congruence and SAS Similarity?`, a: `SAS Congruence requires the two sides to be exactly equal; SAS Similarity only requires the two sides to be <em>proportional</em> (in the same ratio), with the included angle still exactly congruent.` },
      { q: `Do the sides have to be listed in the same order to compare ratios?`, a: `Yes — always match the longest side of one triangle with the longest side of the other, the shortest with the shortest, and so on, before forming ratios.` },
      { q: `Once similarity is proven, how do I find missing sides?`, a: `Set up a proportion between corresponding sides using the similarity statement, then cross-multiply and solve.` },
      { q: `Is AAA an additional similarity shortcut beyond AA?`, a: `Not really — since any two angles determine the third, AAA and AA are logically the same condition; we just call it AA because only two comparisons are ever needed.` },
    ],
  }),
]);

ch["5.3"] = L("5.3", "Using Similar Triangles to Solve Real-World Problems (Indirect Measurement) (MA.912.GR.1.6)", [
  lessonHtml({
    title: "Using Similar Triangles to Solve Real-World Problems (Indirect Measurement)",
    emoji: "🌳",
    overview: `Indirect measurement uses similar triangles to find heights and distances that are impractical or impossible to measure directly — a tall tree, a flagpole, the width of a river. By comparing a shadow, mirror reflection, or sighting angle with a known object of known height, you can set up a proportion between corresponding sides of two similar triangles and solve for the unknown.`,
    toolkit: [
      `Shadow method: an object and its shadow form one triangle; at the same time, an object of known height and its shadow form a similar triangle (equal sun angle \\(\\Rightarrow\\) AA similarity).`,
      `Mirror method: a mirror on the ground reflects a sighted object; the angle of incidence equals the angle of reflection, creating two similar right triangles.`,
      `Set up the proportion matching corresponding parts: \\(\\dfrac{\\text{height of object}}{\\text{height of known object}}=\\dfrac{\\text{shadow (or distance) of object}}{\\text{shadow (or distance) of known object}}\\).`,
      `Always confirm both measurements were taken under matching conditions (same time of day for shadows, or a shared vertex/angle for sightings).`,
    ],
    examples: [
      { h: "Classic shadow problem", p: `A \\(6\\)-foot person casts a \\(4\\)-foot shadow at the same time a nearby flagpole casts a \\(30\\)-foot shadow. Find the height of the flagpole.`, steps: [
        `<strong>Step 1 — set up similar triangles:</strong> the person and pole are both vertical, and the sun's rays create equal angles, so the two shadow triangles are similar by AA.`,
        `<strong>Step 2 — write the proportion:</strong> \\(\\dfrac{\\text{person height}}{\\text{person shadow}}=\\dfrac{\\text{pole height}}{\\text{pole shadow}}\\), i.e. \\(\\dfrac{6}{4}=\\dfrac{h}{30}\\).`,
        `<strong>Step 3 — cross-multiply and solve:</strong> \\(4h=180\\), so \\(h=45\\) feet.`,
      ] },
      { h: "Mirror method", p: `A mirror is placed \\(2\\) meters from the base of a tree. A person whose eyes are \\(1.5\\) meters above the ground stands \\(0.8\\) meters from the mirror on the other side and sees the top of the tree reflected. Find the height of the tree.`, steps: [
        `<strong>Step 1 — identify the similar right triangles:</strong> the person's height and distance from the mirror form one triangle; the tree's height and distance from the mirror form the other. Reflection angles are equal, so the triangles are similar by AA.`,
        `<strong>Step 2 — write the proportion:</strong> \\(\\dfrac{\\text{tree height}}{\\text{tree distance}}=\\dfrac{\\text{person height}}{\\text{person distance}}\\), i.e. \\(\\dfrac{h}{2}=\\dfrac{1.5}{0.8}\\).`,
        `<strong>Step 3 — cross-multiply:</strong> \\(0.8h=3\\).`,
        `<strong>Step 4 — solve:</strong> \\(h=3.75\\) meters.`,
      ] },
      { h: "Indirect measurement of a river's width", p: `To find the width of a river, a surveyor sets up two similar right triangles on the same bank: legs of \\(12\\) m and \\(5\\) m in the larger triangle correspond to legs of \\(3\\) m and \\(w\\) (the river's width) in the smaller, similar triangle. Find \\(w\\).`, steps: [
        `<strong>Step 1 — write the proportion between corresponding legs:</strong> \\(\\dfrac{12}{3}=\\dfrac{5}{w}\\).`,
        `<strong>Step 2 — cross-multiply:</strong> \\(12w=15\\).`,
        `<strong>Step 3 — solve:</strong> \\(w=1.25\\) m.`,
      ] },
      { h: "Using an object of known length and a shared sighting angle", p: `Holding a \\(30\\)-cm ruler vertically at arm's length (\\(60\\) cm from your eye), you line up its top with the top of a building \\(150\\) m away. Assuming similar triangles from your eye, find the height of the building above eye level.`, steps: [
        `<strong>Step 1 — set up the similar triangles:</strong> the ruler-and-arm-length triangle and the building-and-distance triangle share the sighting angle at your eye, so they are similar by AA.`,
        `<strong>Step 2 — write the proportion (convert consistently to meters):</strong> \\(\\dfrac{0.30}{0.60}=\\dfrac{h}{150}\\).`,
        `<strong>Step 3 — cross-multiply and solve:</strong> \\(0.60h=45\\), so \\(h=75\\) m.`,
      ] },
      { h: "Two shadows, solve for the missing height", p: `A \\(2.4\\)-meter street sign casts a \\(3.6\\)-meter shadow. At the same time, a building's shadow measures \\(54\\) meters. How tall is the building?`, steps: [
        `<strong>Step 1 — write the proportion:</strong> \\(\\dfrac{2.4}{3.6}=\\dfrac{h}{54}\\).`,
        `<strong>Step 2 — simplify the known ratio:</strong> \\(\\dfrac{2.4}{3.6}=\\dfrac{2}{3}\\).`,
        `<strong>Step 3 — cross-multiply:</strong> \\(3h=108\\).`,
        `<strong>Step 4 — solve:</strong> \\(h=36\\) meters.`,
      ] },
    ],
    practice: [
      { q: `A \\(5\\)-foot person casts a \\(7\\)-foot shadow while a tree casts a \\(42\\)-foot shadow at the same time. Find the tree's height.`, a: `\\(\\dfrac{5}{7}=\\dfrac{h}{42}\\Rightarrow 7h=210\\Rightarrow h=30\\) ft.` },
      { q: `A mirror sits \\(3\\) m from a pole. A \\(1.8\\)-m-tall observer stands \\(1.2\\) m from the mirror and sees the top of the pole reflected. Find the pole's height.`, a: `\\(\\dfrac{h}{3}=\\dfrac{1.8}{1.2}\\Rightarrow 1.2h=5.4\\Rightarrow h=4.5\\) m.` },
      { q: `Two similar right triangles are set up to measure a pond's width: legs of \\(9\\) m and \\(4\\) m correspond to legs of \\(6\\) m and \\(w\\). Find \\(w\\).`, a: `\\(\\dfrac{9}{4}=\\dfrac{6}{w}\\Rightarrow 9w=24\\Rightarrow w=\\dfrac{8}{3}\\approx2.67\\) m.` },
      { q: `A \\(20\\)-cm ruler held \\(50\\) cm from your eye lines up with the top of a tower \\(200\\) m away. Find the tower's height above eye level.`, a: `\\(\\dfrac{0.20}{0.50}=\\dfrac{h}{200}\\Rightarrow 0.50h=40\\Rightarrow h=80\\) m.` },
      { q: `A \\(1.5\\)-m sign casts a \\(2\\)-m shadow, while a nearby building casts a \\(48\\)-m shadow. Find the building's height.`, a: `\\(\\dfrac{1.5}{2}=\\dfrac{h}{48}\\Rightarrow 2h=72\\Rightarrow h=36\\) m.` },
    ],
    qa: [
      { q: `Why must the shadow measurements be taken at the same time of day?`, a: `The sun's angle must be identical for both triangles so the AA similarity actually holds — at a different time, the sun's angle (and therefore the triangle's shape) would change.` },
      { q: `Which theorem justifies indirect measurement setups?`, a: `AA Similarity — the right angle between object and ground is shared, and the sun's ray angle (or sighting/reflection angle) is shared, giving two congruent angle pairs.` },
      { q: `Do units need to match before setting up the proportion?`, a: `Yes — convert every measurement to the same unit before cross-multiplying, or the proportion will give an incorrect answer.` },
      { q: `What if I mismatch which sides correspond in the proportion?`, a: `You'll get a reciprocal (upside-down) answer. Always match "object height over object measurement" on both sides of the proportion consistently.` },
      { q: `Can indirect measurement be used for horizontal distances, not just heights?`, a: `Yes — the same similar-triangle idea finds river widths, distances across canyons, or any inaccessible horizontal distance, as in the river-width example.` },
    ],
  }),
]);

ch["5.4"] = L("5.4", "Triangle Proportionality Theorem and its Converse (MA.912.GR.1.3)", [
  lessonHtml({
    title: "Triangle Proportionality Theorem and its Converse",
    emoji: "➗",
    overview: `The Triangle Proportionality Theorem connects parallel lines to proportional segments: if a line parallel to one side of a triangle intersects the other two sides, it divides them proportionally. Its converse works in reverse — proportional segments guarantee the line is parallel. Together with corollaries about midsegments and three or more parallel lines, this theorem is a powerful tool for finding missing lengths without ever computing an angle.`,
    toolkit: [
      `Triangle Proportionality Theorem: if \\(\\overline{DE}\\parallel\\overline{BC}\\) in \\(\\triangle ABC\\) (with \\(D\\) on \\(\\overline{AB}\\) and \\(E\\) on \\(\\overline{AC}\\)), then \\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\).`,
      `Converse: if \\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\), then \\(\\overline{DE}\\parallel\\overline{BC}\\).`,
      `Corollary (three parallel lines): if three or more parallel lines cut two transversals, they divide the transversals proportionally.`,
      `Midsegment Theorem (special case): a segment joining the midpoints of two sides of a triangle is parallel to the third side and half its length.`,
    ],
    examples: [
      { h: "Apply the Triangle Proportionality Theorem", p: `In \\(\\triangle ABC\\), \\(\\overline{DE}\\parallel\\overline{BC}\\) with \\(D\\) on \\(\\overline{AB}\\) and \\(E\\) on \\(\\overline{AC}\\). If \\(AD=6\\), \\(DB=9\\), and \\(AE=8\\), find \\(EC\\).`, steps: [
        `<strong>Step 1 — set up the proportion:</strong> \\(\\dfrac{AD}{DB}=\\dfrac{AE}{EC}\\).`,
        `<strong>Step 2 — substitute:</strong> \\(\\dfrac{6}{9}=\\dfrac{8}{EC}\\).`,
        `<strong>Step 3 — cross-multiply:</strong> \\(6\\cdot EC=72\\).`,
        `<strong>Step 4 — solve:</strong> \\(EC=12\\).`,
      ] },
      { h: "Use whole-side ratios instead", p: `In \\(\\triangle ABC\\), \\(\\overline{DE}\\parallel\\overline{BC}\\), \\(AD=4\\), \\(AB=10\\), and \\(AC=15\\). Find \\(AE\\).`, steps: [
        `<strong>Step 1 — recognize the equivalent whole-to-part proportion:</strong> \\(\\dfrac{AD}{AB}=\\dfrac{AE}{AC}\\) (this follows from the theorem by adding \\(1\\) to both sides of the part-to-part ratio).`,
        `<strong>Step 2 — substitute:</strong> \\(\\dfrac{4}{10}=\\dfrac{AE}{15}\\).`,
        `<strong>Step 3 — cross-multiply and solve:</strong> \\(10\\cdot AE=60\\), so \\(AE=6\\).`,
      ] },
      { h: "Prove lines parallel using the Converse", p: `In \\(\\triangle PQR\\), \\(S\\) is on \\(\\overline{PQ}\\) with \\(PS=6\\), \\(SQ=8\\); \\(T\\) is on \\(\\overline{PR}\\) with \\(PT=9\\), \\(TR=12\\). Determine whether \\(\\overline{ST}\\parallel\\overline{QR}\\).`, steps: [
        `<strong>Step 1 — form both ratios:</strong> \\(\\dfrac{PS}{SQ}=\\dfrac{6}{8}=\\dfrac{3}{4}\\) and \\(\\dfrac{PT}{TR}=\\dfrac{9}{12}=\\dfrac{3}{4}\\).`,
        `<strong>Step 2 — compare:</strong> the ratios are equal.`,
        `<strong>Step 3 — apply the Converse:</strong> since \\(\\dfrac{PS}{SQ}=\\dfrac{PT}{TR}\\), \\(\\overline{ST}\\parallel\\overline{QR}\\).`,
      ] },
      { h: "Apply the Midsegment Theorem", p: `\\(M\\) and \\(N\\) are the midpoints of \\(\\overline{AB}\\) and \\(\\overline{AC}\\) in \\(\\triangle ABC\\), where \\(BC=18\\). Find \\(MN\\) and describe the relationship between \\(\\overline{MN}\\) and \\(\\overline{BC}\\).`, steps: [
        `<strong>Step 1 — apply the Midsegment Theorem:</strong> the segment joining two midpoints is parallel to the third side and half its length.`,
        `<strong>Step 2 — compute:</strong> \\(MN=\\dfrac{1}{2}(18)=9\\).`,
        `<strong>Step 3 — state the relationship:</strong> \\(\\overline{MN}\\parallel\\overline{BC}\\) and \\(MN=9\\).`,
      ] },
      { h: "Three parallel lines cutting two transversals", p: `Three parallel lines cut transversal 1 into segments of \\(5\\) and \\(7\\), and cut transversal 2 into corresponding segments of \\(x\\) and \\(10.5\\). Find \\(x\\).`, steps: [
        `<strong>Step 1 — set up the proportion (parallel lines divide transversals proportionally):</strong> \\(\\dfrac{5}{7}=\\dfrac{x}{10.5}\\).`,
        `<strong>Step 2 — cross-multiply:</strong> \\(7x=52.5\\).`,
        `<strong>Step 3 — solve:</strong> \\(x=7.5\\).`,
      ] },
    ],
    practice: [
      { q: `In \\(\\triangle ABC\\), \\(\\overline{DE}\\parallel\\overline{BC}\\), \\(AD=5\\), \\(DB=10\\), \\(AE=4\\). Find \\(EC\\).`, a: `\\(\\dfrac{5}{10}=\\dfrac{4}{EC}\\Rightarrow EC=8\\).` },
      { q: `In \\(\\triangle ABC\\), \\(\\overline{DE}\\parallel\\overline{BC}\\), \\(AD=3\\), \\(AB=12\\), \\(AC=20\\). Find \\(AE\\).`, a: `\\(\\dfrac{3}{12}=\\dfrac{AE}{20}\\Rightarrow AE=5\\).` },
      { q: `In \\(\\triangle PQR\\), \\(S\\) is on \\(\\overline{PQ}\\) with \\(PS=4\\), \\(SQ=6\\); \\(T\\) is on \\(\\overline{PR}\\) with \\(PT=6\\), \\(TR=9\\). Is \\(\\overline{ST}\\parallel\\overline{QR}\\)?`, a: `Yes; both ratios equal \\(\\dfrac{2}{3}\\), so by the Converse, \\(\\overline{ST}\\parallel\\overline{QR}\\).` },
      { q: `\\(M\\) and \\(N\\) are midpoints of two sides of a triangle whose third side measures \\(26\\). Find \\(MN\\).`, a: `\\(MN=\\dfrac{1}{2}(26)=13\\).` },
      { q: `Three parallel lines cut one transversal into segments of \\(4\\) and \\(9\\), and a second transversal into corresponding segments of \\(6\\) and \\(y\\). Find \\(y\\).`, a: `\\(\\dfrac{4}{9}=\\dfrac{6}{y}\\Rightarrow 4y=54\\Rightarrow y=13.5\\).` },
    ],
    qa: [
      { q: `What is the key hypothesis needed before using the Triangle Proportionality Theorem?`, a: `A line must be drawn parallel to one side of the triangle, intersecting the other two sides (or their extensions).` },
      { q: `What's the difference between the "part-to-part" and "part-to-whole" versions of the proportion?`, a: `Part-to-part compares \\(\\dfrac{AD}{DB}\\) to \\(\\dfrac{AE}{EC}\\); part-to-whole compares \\(\\dfrac{AD}{AB}\\) to \\(\\dfrac{AE}{AC}\\). Both are algebraically equivalent — adding \\(1\\) to each side of a part-to-part proportion produces the part-to-whole version.` },
      { q: `How is the Midsegment Theorem related to the Triangle Proportionality Theorem?`, a: `It is a special case where the parallel segment cuts both sides exactly in half (a \\(1:1\\) ratio), which also forces the parallel segment's length to be exactly half of the third side.` },
      { q: `Can the Converse be used to prove three or more lines parallel at once?`, a: `The two-side converse only directly proves one line parallel to one side; for multiple parallel lines cutting transversals, use the "three parallel lines" corollary instead.` },
      { q: `Does the theorem work if the parallel segment doesn't touch the triangle's vertex?`, a: `Yes — as long as the segment is parallel to one side and its endpoints lie on (or as extensions of) the other two sides, the proportional relationship still holds.` },
    ],
  }),
]);

ch["5.5"] = L("5.5", "Using Transformations to Prove Similarity (MA.912.GR.2.8)", [
  lessonHtml({
    title: "Using Transformations to Prove Similarity",
    emoji: "🔄",
    overview: `Similarity can be defined directly through transformations: two figures are similar exactly when a sequence of rigid motions (translations, reflections, rotations) followed by a dilation maps one onto the other. This transformational definition connects the coordinate-plane skills from earlier chapters — translations, reflections, rotations, and dilations — into a single, powerful way to prove two figures similar without measuring a single angle or side by hand.`,
    toolkit: [
      `Similarity transformation definition: \\(\\triangle ABC\\sim\\triangle DEF\\) if and only if there exists a sequence of rigid motions and a dilation mapping \\(\\triangle ABC\\) onto \\(\\triangle DEF\\).`,
      `Strategy: first find the dilation (matching scale factor) that makes the two figures the same size, then find the rigid motion(s) that complete the mapping (matching position and orientation).`,
      `The scale factor of the required dilation equals the ratio of any pair of corresponding side lengths.`,
      `A valid sequence must end with every vertex of the pre-image landing exactly on the corresponding vertex of the image.`,
    ],
    examples: [
      { h: "Find the dilation scale factor between two similar figures", p: `\\(\\triangle ABC\\) has vertices \\(A(0,0)\\), \\(B(2,0)\\), \\(C(0,3)\\). \\(\\triangle DEF\\) has vertices \\(D(0,0)\\), \\(E(6,0)\\), \\(F(0,9)\\). Describe a similarity transformation mapping \\(\\triangle ABC\\) to \\(\\triangle DEF\\).`, steps: [
        `<strong>Step 1 — compare corresponding sides:</strong> \\(AB=2\\), \\(DE=6\\); \\(AC=3\\), \\(DF=9\\); both ratios equal \\(3\\).`,
        `<strong>Step 2 — find the scale factor:</strong> \\(k=3\\).`,
        `<strong>Step 3 — apply the dilation centered at the origin (a shared vertex, \\(A=D\\)):</strong> \\((x,y)\\mapsto(3x,3y)\\) sends \\(A\\to D\\), \\(B(2,0)\\to(6,0)=E\\), \\(C(0,3)\\to(0,9)=F\\).`,
        `<strong>Step 4 — conclude:</strong> a single dilation (no additional rigid motion needed) maps \\(\\triangle ABC\\) onto \\(\\triangle DEF\\), so \\(\\triangle ABC\\sim\\triangle DEF\\).`,
      ] },
      { h: "Combine a dilation with a translation", p: `\\(\\triangle GHI\\) has vertices \\(G(0,0)\\), \\(H(4,0)\\), \\(I(0,2)\\). \\(\\triangle JKL\\) has vertices \\(J(5,1)\\), \\(K(7,1)\\), \\(L(5,2)\\). Describe a sequence of transformations proving \\(\\triangle GHI\\sim\\triangle JKL\\).`, steps: [
        `<strong>Step 1 — find the scale factor:</strong> \\(GH=4\\), \\(JK=2\\), giving ratio \\(\\dfrac{1}{2}\\); check \\(GI=2\\), \\(JL=1\\), the same ratio \\(\\dfrac{1}{2}\\).`,
        `<strong>Step 2 — dilate \\(\\triangle GHI\\) by \\(k=\\dfrac{1}{2}\\) centered at the origin:</strong> \\(G\\to(0,0)\\), \\(H(4,0)\\to(2,0)\\), \\(I(0,2)\\to(0,1)\\).`,
        `<strong>Step 3 — translate the dilated image to match \\(\\triangle JKL\\):</strong> shift every point by \\((5,1)\\): \\((0,0)\\to(5,1)=J\\), \\((2,0)\\to(7,1)=K\\), \\((0,1)\\to(5,2)=L\\).`,
        `<strong>Step 4 — conclude:</strong> the dilation followed by the translation maps \\(\\triangle GHI\\) exactly onto \\(\\triangle JKL\\), so \\(\\triangle GHI\\sim\\triangle JKL\\).`,
      ] },
      { h: "Combine a dilation with a reflection", p: `\\(\\triangle MNO\\) has vertices \\(M(0,0)\\), \\(N(3,0)\\), \\(O(0,1)\\). \\(\\triangle PQR\\) has vertices \\(P(0,0)\\), \\(Q(-6,0)\\), \\(R(0,2)\\). Describe a sequence of transformations proving \\(\\triangle MNO\\sim\\triangle PQR\\).`, steps: [
        `<strong>Step 1 — find the scale factor:</strong> \\(MN=3\\), \\(PQ=6\\), giving ratio \\(2\\); check \\(MO=1\\), \\(PR=2\\), the same ratio \\(2\\).`,
        `<strong>Step 2 — dilate by \\(k=2\\) centered at the origin:</strong> \\(M\\to(0,0)\\), \\(N(3,0)\\to(6,0)\\), \\(O(0,1)\\to(0,2)\\).`,
        `<strong>Step 3 — reflect across the \\(y\\)-axis to flip the sign of the x-coordinates:</strong> \\((0,0)\\to(0,0)\\), \\((6,0)\\to(-6,0)=Q\\), \\((0,2)\\to(0,2)=R\\).`,
        `<strong>Step 4 — conclude:</strong> a dilation followed by a reflection maps \\(\\triangle MNO\\) exactly onto \\(\\triangle PQR\\), so \\(\\triangle MNO\\sim\\triangle PQR\\).`,
      ] },
      { h: "Verify a claimed similarity transformation", p: `A student claims that rotating \\(\\triangle ABC\\) \\(90^\\circ\\) about the origin and then dilating by \\(k=\\dfrac{3}{2}\\) maps it onto \\(\\triangle DEF\\). \\(\\triangle ABC\\) has \\(A(0,0)\\), \\(B(2,0)\\), \\(C(0,2)\\); \\(\\triangle DEF\\) has \\(D(0,0)\\), \\(E(0,3)\\), \\(F(-3,0)\\). Verify the claim.`, steps: [
        `<strong>Step 1 — apply the \\(90^\\circ\\) rotation rule \\((x,y)\\mapsto(-y,x)\\):</strong> \\(A(0,0)\\to(0,0)\\), \\(B(2,0)\\to(0,2)\\), \\(C(0,2)\\to(-2,0)\\).`,
        `<strong>Step 2 — apply the dilation \\((x,y)\\mapsto\\left(\\dfrac{3}{2}x,\\dfrac{3}{2}y\\right)\\):</strong> \\((0,0)\\to(0,0)\\), \\((0,2)\\to(0,3)\\), \\((-2,0)\\to(-3,0)\\).`,
        `<strong>Step 3 — compare to \\(\\triangle DEF\\):</strong> the results \\((0,0)\\), \\((0,3)\\), \\((-3,0)\\) exactly match \\(D\\), \\(E\\), \\(F\\).`,
        `<strong>Step 4 — conclude:</strong> the claim is verified — \\(\\triangle ABC\\sim\\triangle DEF\\) by this rotation-then-dilation.`,
      ] },
      { h: "Determine the scale factor from a perimeter ratio", p: `\\(\\triangle ABC\\sim\\triangle DEF\\) via some sequence of rigid motions and a dilation. If the perimeter of \\(\\triangle ABC\\) is \\(15\\) and the perimeter of \\(\\triangle DEF\\) is \\(45\\), what is the scale factor of the dilation used in the sequence?`, steps: [
        `<strong>Step 1 — recall that a dilation scales every length (including perimeter) by the same factor \\(k\\):</strong> the perimeter ratio equals \\(k\\).`,
        `<strong>Step 2 — compute the ratio:</strong> \\(k=\\dfrac{45}{15}=3\\).`,
        `<strong>Step 3 — state the conclusion:</strong> the dilation in the similarity sequence has scale factor \\(3\\) (any rigid motions included do not change lengths, so they do not affect this ratio).`,
      ] },
    ],
    practice: [
      { q: `\\(\\triangle ABC\\) has \\(A(0,0)\\), \\(B(3,0)\\), \\(C(0,1)\\); \\(\\triangle DEF\\) has \\(D(0,0)\\), \\(E(9,0)\\), \\(F(0,3)\\). Find the scale factor of the dilation mapping \\(\\triangle ABC\\) to \\(\\triangle DEF\\).`, a: `\\(k=\\dfrac{9}{3}=3\\) (check: \\(\\dfrac{3}{1}=3\\) also).` },
      { q: `After dilating \\(\\triangle GHI\\) by \\(k=\\dfrac{1}{2}\\) centered at the origin, what translation would move the image's vertex at \\((2,0)\\) to land on \\((5,1)\\)?`, a: `Translate by \\((3,1)\\), since \\((2+3,\\,0+1)=(5,1)\\).` },
      { q: `Two triangles are similar with a scale factor of \\(4\\). If one side of the smaller triangle is \\(3.5\\), find the corresponding side of the larger triangle.`, a: `\\(3.5\\times4=14\\).` },
      { q: `If the perimeters of two similar triangles are \\(20\\) and \\(50\\), what is the scale factor of the dilation from the smaller to the larger?`, a: `\\(k=\\dfrac{50}{20}=2.5\\).` },
      { q: `Describe, in general terms, the two-part strategy for proving two triangles similar using transformations.`, a: `First apply a dilation with scale factor equal to the ratio of corresponding sides to make the triangles the same size, then apply rigid motion(s) — translations, reflections, and/or rotations — to slide, flip, or turn the dilated image exactly onto the target triangle.` },
    ],
    qa: [
      { q: `How is this transformational definition of similarity different from the AA/SAS/SSS Similarity theorems?`, a: `The theorems test similarity using measured angles and side ratios; the transformational definition instead requires exhibiting an actual sequence of a dilation and rigid motions that maps one figure onto the other — both describe the same relationship from different angles.` },
      { q: `Does the order of the dilation and rigid motions matter?`, a: `The specific order can vary, but a valid sequence must still end with every vertex of the pre-image landing exactly on its corresponding vertex in the image — the composition, not the order, is what is checked.` },
      { q: `What single number tells you the required dilation's scale factor?`, a: `The ratio of any two corresponding side lengths (or the ratio of the perimeters) between the two similar figures.` },
      { q: `Can a similarity transformation ever use only rigid motions, with no dilation?`, a: `Yes — that is exactly the case where the scale factor is \\(1\\); the figures are actually congruent, a special case of similar.` },
      { q: `Why don't rigid motions affect the scale factor calculation?`, a: `Translations, reflections, and rotations are isometries — they preserve every distance exactly, so they never change any length ratio between figures.` },
    ],
  }),
]);
