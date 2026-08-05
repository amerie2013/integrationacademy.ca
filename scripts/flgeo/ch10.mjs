import { L, lessonHtml } from "./_helpers.mjs";
import {
  fig, translationFig, reflectionFig, rotationFig, compositionFig, symmetryFig,
  triangleTypes, isoscelesFig, sssMarks, sasMarks, asaMarks, hlFig, overlappingFig,
  dilationFig, similarTriangles, shadowMeasure, proportionalityFig,
  pythagoreanFig, special4545, special3060, sohcahtoa, elevationFig,
  polygonAngles, parallelogramFig, specialQuads, trapezoidFig, kiteFig,
  distanceMidpoint, weightedAvgFig, areaFig, dilationScale,
  centralAngleFig, inscribedAngleFig, tangentFig, sectorFig, cyclicQuad,
  prismNet, cylinderFig, crossSectionFig, solidRevolution, scale3d,
  copyAngleFig, bisectFig, incenterFig, circumcenterFig,
  sampleSpaceFig, treeDiagram, twoWayTable, permuteCombine,
} from "./figures2.mjs";

export const ch = {};

// ── 10.1 — Surface Area of Prisms, Pyramids, Cylinders, Cones, and Spheres ──
ch["10.1"] = L("10.1", "Surface Area of Prisms, Pyramids, Cylinders, Cones, and Spheres (MA.912.GR.4.6)", [
  lessonHtml({
    title: "Surface Area of Prisms, Pyramids, Cylinders, Cones, and Spheres",
    emoji: "📦",
    overview: `Surface area is the total area of every face that covers the outside of a solid — think of it as how much wrapping paper you'd need. Each family of solids has its own formula, but they all boil down to the same idea: add up the areas of the flat or curved pieces that make up the "skin" of the shape. For pyramids and cones, the tricky part is that the slanted faces use the \\(\\textbf{slant height}\\) \\(\\ell\\) (the distance up the slanted surface), not the solid's actual height \\(h\\) — if \\(\\ell\\) isn't given, you can find it with the Pythagorean theorem.`,
    toolkit: [
      `Prism: \\(SA = 2B + Ph\\), where \\(B\\) is the area of one base and \\(P\\) is the base's perimeter`,
      `Pyramid: \\(SA = B + \\dfrac{1}{2}P\\ell\\), where \\(\\ell\\) is the slant height`,
      `Cylinder: \\(SA = 2\\pi r^2 + 2\\pi rh = 2\\pi r(r+h)\\)`,
      `Cone: \\(SA = \\pi r^2 + \\pi r\\ell\\) (a circular base plus the curved lateral surface)`,
      `Sphere: \\(SA = 4\\pi r^2\\) — no separate lateral/base pieces, since the whole surface is curved`,
      `Missing slant height? Use the Pythagorean theorem: \\(\\ell^2 = r^2 + h^2\\) (cone) or \\(\\ell^2 = h^2 + \\left(\\tfrac{s}{2}\\right)^2\\) (regular pyramid, \\(s\\) = base edge)`,
    ],
    figure: fig(prismNet(), "Surface area adds the areas of all faces."),
    examples: [
      {
        h: "Rectangular prism",
        p: "Find the surface area of a rectangular prism with length 8 in, width 5 in, and height 6 in.",
        fig: prismNet(),
        steps: [
          `A rectangular prism has three pairs of congruent rectangular faces: \\(lw\\), \\(lh\\), and \\(wh\\).`,
          `\\(SA = 2(lw + lh + wh) = 2\\big((8)(5) + (8)(6) + (5)(6)\\big)\\)`,
          `\\(SA = 2(40 + 48 + 30) = 2(118) = 236\\)`,
        ],
        check: "SA = 236 in².",
      },
      {
        h: "Cylinder",
        p: "A can (cylinder) has radius 4 cm and height 9 cm. Find its total surface area.",
        steps: [
          `\\(SA = 2\\pi r(r+h) = 2\\pi(4)(4+9)\\)`,
          `\\(SA = 2\\pi(4)(13) = 104\\pi\\)`,
          `\\(SA \\approx 326.7\\) cm² (using \\(\\pi \\approx 3.14159\\))`,
        ],
        check: "SA = 104π ≈ 326.7 cm².",
      },
      {
        h: "Square pyramid",
        p: "A square pyramid has a base edge of 10 m and a slant height of 13 m. Find its surface area.",
        steps: [
          `Base area \\(B = 10^2 = 100\\); perimeter \\(P = 4(10) = 40\\)`,
          `\\(SA = B + \\dfrac{1}{2}P\\ell = 100 + \\dfrac{1}{2}(40)(13)\\)`,
          `\\(SA = 100 + 260 = 360\\)`,
        ],
        check: "SA = 360 m².",
      },
      {
        h: "Cone (finding slant height first)",
        p: "A cone has radius 5 in and height 12 in. The slant height isn't given — find the total surface area.",
        steps: [
          `Since \\(r\\), \\(h\\), and \\(\\ell\\) form a right triangle: \\(\\ell = \\sqrt{r^2+h^2} = \\sqrt{25+144} = \\sqrt{169} = 13\\)`,
          `\\(SA = \\pi r^2 + \\pi r\\ell = \\pi(25) + \\pi(5)(13)\\)`,
          `\\(SA = 25\\pi + 65\\pi = 90\\pi \\approx 282.7\\)`,
        ],
        check: "SA = 90π ≈ 282.7 in².",
      },
      {
        h: "Sphere",
        p: "A basketball has a diameter of 18 in. Find its surface area.",
        steps: [
          `Radius \\(r = \\dfrac{18}{2} = 9\\)`,
          `\\(SA = 4\\pi r^2 = 4\\pi(81) = 324\\pi\\)`,
          `\\(SA \\approx 1017.9\\) in²`,
        ],
        check: "SA = 324π ≈ 1017.9 in².",
      },
    ],
    practice: [
      { q: "Find the surface area of a rectangular prism with length 7, width 4, and height 3 (units).", a: `\\(SA = 2(28+21+12) = 2(61) = 122\\) units²` },
      { q: "Find the surface area of a cylinder with radius 6 cm and height 10 cm.", a: `\\(SA = 2\\pi(6)(16) = 192\\pi \\approx 603.2\\) cm²` },
      { q: "A square pyramid has base edge 8 m and slant height 9 m. Find its surface area.", a: `\\(B=64\\), \\(SA = 64 + \\dfrac{1}{2}(32)(9) = 64+144 = 208\\) m²` },
      { q: "A cone has radius 6 in and slant height 10 in. Find its surface area.", a: `\\(SA = \\pi(36) + \\pi(6)(10) = 36\\pi+60\\pi = 96\\pi \\approx 301.6\\) in²` },
      { q: "A sphere has radius 3.5 ft. Find its surface area.", a: `\\(SA = 4\\pi(3.5)^2 = 4\\pi(12.25) = 49\\pi \\approx 153.9\\) ft²` },
    ],
    qa: [
      { q: "What's the difference between lateral surface area and total surface area?", a: "Lateral area only counts the side (slanted or curved) faces. Total surface area adds the area of the base(s) as well." },
      { q: "Why can't I plug a pyramid or cone's height directly into the surface-area formula?", a: "The formula needs the slant height \\(\\ell\\), measured up the slanted face, not the perpendicular height. If it isn't given, find it with the Pythagorean theorem." },
      { q: "Why does a sphere have just one formula instead of separate lateral and base pieces?", a: "A sphere has no flat faces or edges at all — its entire surface is one continuous curve, so \\(4\\pi r^2\\) covers the whole thing." },
      { q: "What units go with surface area?", a: "Always square units (in², cm², m², etc.), since surface area measures a two-dimensional quantity." },
      { q: "How do I find the surface area of a composite solid, like a cylinder with a cone on top?", a: "Add the areas of only the faces that are actually on the outside of the combined solid — skip the flat circle where the two pieces meet, since it's hidden inside." },
    ],
  }),
]);

// ── 10.2 — Volume of Prisms, Pyramids, Cylinders, Cones, and Spheres ──
ch["10.2"] = L("10.2", "Volume of Prisms, Pyramids, Cylinders, Cones, and Spheres (MA.912.GR.4.5)", [
  lessonHtml({
    title: "Volume of Prisms, Pyramids, Cylinders, Cones, and Spheres",
    emoji: "🧊",
    overview: `Volume measures how much space fills the inside of a 3D solid. Prisms and cylinders "stack" a constant base shape up through a height, so their volume is simply \\(Bh\\). Pyramids and cones taper to a point, so they only hold exactly \\(\\dfrac{1}{3}\\) as much as a prism/cylinder with the same base and height. Spheres get their own formula, \\(\\dfrac{4}{3}\\pi r^3\\), built from calculus but memorized here as a fact.`,
    toolkit: [
      `Prism / cylinder: \\(V = Bh\\), where \\(B\\) is the area of the base`,
      `Pyramid / cone: \\(V = \\dfrac{1}{3}Bh\\) — always \\(\\tfrac{1}{3}\\) of the matching prism/cylinder`,
      `Sphere: \\(V = \\dfrac{4}{3}\\pi r^3\\)`,
      `\\(B\\) can be the area of any base shape: rectangle, triangle, circle, or regular polygon`,
      `For pyramids/cones, use the true height \\(h\\) (perpendicular to the base) — not the slant height`,
    ],
    figure: fig(cylinderFig(), "Volume of a cylinder: V = πr²h."),
    examples: [
      {
        h: "Rectangular prism",
        p: "Find the volume of a rectangular prism with length 8 in, width 5 in, and height 6 in.",
        steps: [`\\(V = lwh = (8)(5)(6)\\)`, `\\(V = 240\\)`],
        check: "V = 240 in³.",
      },
      {
        h: "Cylinder",
        p: "Find the volume of a cylinder with radius 4 cm and height 9 cm.",
        fig: cylinderFig(),
        steps: [`\\(V = \\pi r^2h = \\pi(16)(9)\\)`, `\\(V = 144\\pi \\approx 452.4\\)`],
        check: "V = 144π ≈ 452.4 cm³.",
      },
      {
        h: "Square pyramid",
        p: "A square pyramid has base edge 10 m and height 12 m (the true height, not slant height). Find its volume.",
        steps: [`\\(B = 10^2 = 100\\)`, `\\(V = \\dfrac{1}{3}Bh = \\dfrac{1}{3}(100)(12)\\)`, `\\(V = \\dfrac{1200}{3} = 400\\)`],
        check: "V = 400 m³.",
      },
      {
        h: "Cone",
        p: "Find the volume of a cone with radius 5 in and height 12 in.",
        steps: [`\\(V = \\dfrac{1}{3}\\pi r^2h = \\dfrac{1}{3}\\pi(25)(12)\\)`, `\\(V = \\dfrac{300\\pi}{3} = 100\\pi \\approx 314.2\\)`],
        check: "V = 100π ≈ 314.2 in³.",
      },
      {
        h: "Sphere",
        p: "Find the volume of a sphere with radius 9 ft.",
        steps: [`\\(V = \\dfrac{4}{3}\\pi r^3 = \\dfrac{4}{3}\\pi(729)\\)`, `\\(V = 972\\pi \\approx 3053.6\\)`],
        check: "V = 972π ≈ 3053.6 ft³.",
      },
    ],
    practice: [
      { q: "Find the volume of a rectangular prism with length 7, width 4, and height 3.", a: `\\(V = (7)(4)(3) = 84\\) units³` },
      { q: "Find the volume of a cylinder with radius 6 cm and height 10 cm.", a: `\\(V = \\pi(36)(10) = 360\\pi \\approx 1130.4\\) cm³` },
      { q: "A square pyramid has base edge 8 m and height 9 m. Find its volume.", a: `\\(B=64\\), \\(V = \\dfrac{1}{3}(64)(9) = 192\\) m³` },
      { q: "Find the volume of a cone with radius 6 in and height 8 in.", a: `\\(V = \\dfrac{1}{3}\\pi(36)(8) = 96\\pi \\approx 301.6\\) in³` },
      { q: "Find the volume of a sphere with radius 3 ft.", a: `\\(V = \\dfrac{4}{3}\\pi(27) = 36\\pi \\approx 113.1\\) ft³` },
    ],
    qa: [
      { q: "Why is the volume of a pyramid or cone exactly one-third of the matching prism or cylinder?", a: "Three congruent pyramids with the same base and height can be assembled to exactly fill a prism — this is a geometric fact you can verify with models, giving the factor of \\(\\tfrac{1}{3}\\)." },
      { q: "Does \\(B\\) mean the same thing in the prism formula and the pyramid formula?", a: "Yes — \\(B\\) is always the area of the base shape (rectangle, triangle, circle, etc.), whichever formula you're using." },
      { q: "For a cone or pyramid, do I use the height or the slant height in the volume formula?", a: "Always the true (perpendicular) height \\(h\\). Slant height \\(\\ell\\) is only used for surface area." },
      { q: "What units does volume use?", a: "Cubic units (in³, cm³, m³, etc.), since volume measures three-dimensional space." },
      { q: "How do I find the volume of a composite solid, like a cylinder topped with a cone?", a: "Find the volume of each individual solid using its own formula, then add the two volumes together." },
    ],
  }),
]);

// ── 10.3 — Solving Density and Population Density Problems ──
ch["10.3"] = L("10.3", "Solving Density and Population Density Problems (MA.912.GR.4.5 connections)", [
  lessonHtml({
    title: "Solving Density and Population Density Problems",
    emoji: "⚖️",
    overview: `Density connects geometry to the real world: it tells you how tightly mass is packed into a volume, using the formula \\(\\rho = \\dfrac{m}{V}\\). Whenever the volume isn't given directly, you first compute it with the formulas from the last lesson, then divide. Population density works the exact same way, except population takes the place of mass and land area takes the place of volume: \\(D = \\dfrac{P}{A}\\).`,
    toolkit: [
      `Density: \\(\\rho = \\dfrac{m}{V}\\) — rearrange as needed: \\(m = \\rho V\\) or \\(V = \\dfrac{m}{\\rho}\\)`,
      `Population density: \\(D = \\dfrac{P}{A}\\) (population per unit of land area)`,
      `If volume or area isn't given directly, compute it first using the 3D/2D formulas you already know`,
      `Common units: g/cm³, kg/m³ for density; people/mi² or people/km² for population density`,
      `Higher density = more "stuff" packed into the same amount of space`,
    ],
    figure: fig(prismNet(), "Density = mass / volume."),
    examples: [
      {
        h: "Finding density from mass and volume",
        p: "A metal cube measures 4 cm on each edge and has a mass of 372.7 g. Find its density.",
        steps: [`\\(V = s^3 = 4^3 = 64\\) cm³`, `\\(\\rho = \\dfrac{m}{V} = \\dfrac{372.7}{64}\\)`, `\\(\\rho \\approx 5.82\\) g/cm³ (close to the density of zinc)`],
        check: "ρ ≈ 5.82 g/cm³.",
      },
      {
        h: "Finding mass from density and volume",
        p: "A cylindrical pine rod has radius 3 cm and length 20 cm. Pine has a density of about 0.5 g/cm³. Find the rod's mass.",
        steps: [`\\(V = \\pi r^2h = \\pi(9)(20) = 180\\pi \\approx 565.5\\) cm³`, `\\(m = \\rho V \\approx (0.5)(565.5)\\)`, `\\(m \\approx 282.7\\) g`],
        check: "m ≈ 282.7 g.",
      },
      {
        h: "Finding volume from density and mass",
        p: "A gold bar has a mass of 3860 g. Gold's density is 19.3 g/cm³. Find the bar's volume.",
        steps: [`\\(V = \\dfrac{m}{\\rho} = \\dfrac{3860}{19.3}\\)`, `\\(V = 200\\)`],
        check: "V = 200 cm³.",
      },
      {
        h: "Population density",
        p: "A city has a population of 250,000 people spread over 125 mi². Find the population density.",
        steps: [`\\(D = \\dfrac{P}{A} = \\dfrac{250{,}000}{125}\\)`, `\\(D = 2000\\)`],
        check: "D = 2000 people per mi².",
      },
      {
        h: "Finding population from density and area",
        p: "A rectangular county is 40 mi by 60 mi and has a population density of 350 people/mi². Find the total population.",
        steps: [`Area \\(A = 40 \\times 60 = 2400\\) mi²`, `\\(P = D \\cdot A = (350)(2400)\\)`, `\\(P = 840{,}000\\)`],
        check: "P = 840,000 people.",
      },
    ],
    practice: [
      { q: "A rectangular block of wax measures 5 cm by 4 cm by 2 cm and has a mass of 176 g. Find its density.", a: `\\(V = 40\\) cm³, \\(\\rho = \\dfrac{176}{40} = 4.4\\) g/cm³` },
      { q: "A sphere of ice (density 0.92 g/cm³) has radius 6 cm. Find its mass.", a: `\\(V = \\dfrac{4}{3}\\pi(216) = 288\\pi \\approx 904.8\\) cm³; \\(m \\approx (0.92)(904.8) \\approx 832.4\\) g` },
      { q: "A cone-shaped sand pile has density 1.5 g/cm³ and mass 942 g. If its height is 10 cm, find its radius (given \\(V=\\pi r^2 h /3\\)).", a: `\\(V = \\dfrac{m}{\\rho} = \\dfrac{942}{1.5} = 628\\) cm³; \\(628 = \\dfrac{1}{3}\\pi r^2(10) \\Rightarrow r^2 \\approx 60 \\Rightarrow r \\approx 7.75\\) cm` },
      { q: "A town of 48,000 people occupies 15 mi². Find its population density.", a: `\\(D = \\dfrac{48{,}000}{15} = 3200\\) people/mi²` },
      { q: "A rural region has population density 25 people/mi² and area 900 mi². Find the population.", a: `\\(P = (25)(900) = 22{,}500\\) people` },
    ],
    qa: [
      { q: "Why do density units always look like \"mass unit per volume unit\" (like g/cm³)?", a: "Because density is defined as a quotient, \\(\\rho=\\tfrac{m}{V}\\); dividing a mass unit by a volume unit produces that combined unit automatically." },
      { q: "How is population density similar to physical density?", a: "They use the same structure: population plays the role of \"mass,\" and land area plays the role of \"volume.\" Both measure how much of something is packed into a given amount of space." },
      { q: "Why do I usually need to compute volume or area before I can find density?", a: "The density formula needs a volume (or area) value. If the problem only gives dimensions, you must apply the correct geometric formula first, then divide." },
      { q: "If two objects have the same volume, does more mass mean a higher or lower density?", a: "Higher. Since \\(\\rho = \\tfrac{m}{V}\\) and \\(V\\) is fixed, a larger mass gives a larger density." },
      { q: "Why do city planners care about population density?", a: "It lets them compare crowding fairly between places of different sizes, and helps plan for housing, transportation, and resources." },
    ],
  }),
]);

// ── 10.4 — Cross-Sections of 3D Figures ──
ch["10.4"] = L("10.4", "Cross-Sections of 3D Figures (MA.912.GR.4.1)", [
  lessonHtml({
    title: "Cross-Sections of 3D Figures",
    emoji: "🔪",
    overview: `A cross-section is the flat, two-dimensional shape you see when a plane slices through a solid — like the shape revealed when you cut a loaf of bread. The resulting shape depends entirely on the solid and on the angle of the cut: the same cylinder can produce a circle, a rectangle, or an ellipse depending on how the plane slices through it.`,
    toolkit: [
      `Prism sliced parallel to its base → a shape congruent to the base`,
      `Cylinder sliced parallel to its base → a circle; sliced through its central axis → a rectangle`,
      `Cone sliced parallel to its base → a smaller circle; sliced through the apex and axis → an isosceles triangle`,
      `Sphere: every planar cross-section is a circle; the largest one (through the center) is called a great circle`,
      `Cutting a rectangular prism (box) at an angle across several faces can create triangles, pentagons, or hexagons, depending on how many faces the plane crosses`,
    ],
    figure: fig(crossSectionFig(), "A plane intersecting a solid produces a 2D cross-section."),
    examples: [
      {
        h: "Prism sliced parallel to its base",
        p: "A rectangular box is sliced by a plane parallel to its base. Describe the cross-section.",
        steps: [`A plane parallel to the base of a prism never changes shape as it moves through the solid.`, `The cross-section is a rectangle congruent to the base.`],
        check: "The cross-section is a rectangle congruent to the base.",
      },
      {
        h: "Cylinder sliced through its axis",
        p: "A cylinder with radius 3 in and height 10 in is sliced by a plane that contains its central axis. Describe and measure the cross-section.",
        steps: [`A plane through the axis cuts straight down through the circular top and bottom, producing a shape with two straight sides (the height) and two straight sides (the diameter).`, `Width = diameter \\(= 2(3) = 6\\) in; length = height \\(= 10\\) in.`],
        check: "The cross-section is a 6 in by 10 in rectangle.",
      },
      {
        h: "Cone sliced parallel to its base",
        p: "A cone with base radius 6 in is sliced by a plane parallel to the base, exactly halfway up (measuring from the base to the apex). Find the radius of the circular cross-section.",
        steps: [`By similar triangles, the cross-section's radius scales in proportion to how far up the cone you cut — halfway up gives half the radius.`, `\\(r_{\\text{cross}} = \\dfrac{1}{2}(6) = 3\\)`],
        check: "The cross-section is a circle with radius 3 in.",
      },
      {
        h: "Sphere sliced off-center",
        p: "A sphere of radius 5 cm is sliced by a plane 3 cm from its center. Find the radius of the circular cross-section.",
        steps: [`The center, the cross-section's radius, and the sphere's radius form a right triangle: \\(r_{\\text{cross}}^2 + d^2 = R^2\\)`, `\\(r_{\\text{cross}}^2 = 5^2 - 3^2 = 25-9 = 16\\)`, `\\(r_{\\text{cross}} = 4\\)`],
        check: "The cross-section is a circle with radius 4 cm.",
      },
      {
        h: "Cube sliced through a corner",
        p: "A cube is sliced by a plane through three vertices that meet at a single corner, cutting that corner off. Describe the cross-section.",
        fig: crossSectionFig(),
        steps: [`The plane crosses exactly three faces of the cube, each contributing one straight edge to the cross-section.`, `Three edges meeting pairwise form a triangle.`],
        check: "The cross-section is a triangle.",
      },
    ],
    practice: [
      { q: "A triangular prism is sliced parallel to its triangular base. Describe the cross-section.", a: "A triangle congruent to the base." },
      { q: "A cylinder with radius 5 cm and height 14 cm is sliced through its central axis. Find the dimensions of the cross-section.", a: "A 10 cm by 14 cm rectangle (diameter by height)." },
      { q: "A cone with base radius 12 in is sliced parallel to the base, one-third of the way up from the base to the apex. Find the radius of the cross-section.", a: `Two-thirds of the way remains from apex-perspective; \\(r_{\\text{cross}} = \\dfrac{2}{3}(12) = 8\\) in` },
      { q: "A sphere of radius 13 in is sliced by a plane 5 in from the center. Find the radius of the cross-section.", a: `\\(r_{\\text{cross}} = \\sqrt{13^2-5^2} = \\sqrt{169-25} = \\sqrt{144} = 12\\) in` },
      { q: "A cone is sliced by a plane through its apex and its central axis. Describe the resulting cross-section.", a: "An isosceles triangle." },
    ],
    qa: [
      { q: "Why can a cylinder's cross-section be a circle, a rectangle, or something else entirely?", a: "The cutting plane's orientation matters: parallel to the base gives a circle, through the axis gives a rectangle, and a tilted (oblique) cut gives an ellipse." },
      { q: "Why is every cross-section of a sphere a circle, no matter where you cut it?", a: "A sphere is perfectly symmetric in every direction, so any flat slice through it produces a perfectly round curve." },
      { q: "What is a \"great circle\"?", a: "The largest possible circular cross-section of a sphere — one that passes through the sphere's center." },
      { q: "How does the distance from the center affect a sphere's cross-section?", a: "The farther the cutting plane is from the center, the smaller the resulting circle; a slice right through the center gives the biggest circle possible (the great circle)." },
      { q: "Where are cross-sections used outside of math class?", a: "Architectural blueprints, manufacturing diagrams, and medical imaging (like CT scans) all show cross-sectional \"slices\" of 3D objects." },
    ],
  }),
]);

// ── 10.5 — Solids of Revolution ──
ch["10.5"] = L("10.5", "Solids of Revolution (Rotating 2D Shapes to Make 3D Objects) (MA.912.GR.4.2)", [
  lessonHtml({
    title: "Solids of Revolution",
    emoji: "🌀",
    overview: `Spin a flat, 2D shape all the way around a line (called the axis of revolution), and it sweeps out a 3D solid — this is exactly how a potter's wheel turns a flat lump of clay into a curved vase. Recognizing which solid a shape produces (and around which axis) connects directly back to the surface-area and volume formulas from earlier in this chapter.`,
    toolkit: [
      `Rectangle rotated \\(360^\\circ\\) about one of its sides → a cylinder (radius = the other side, height = the side of rotation)`,
      `Right triangle rotated \\(360^\\circ\\) about one leg → a cone (radius = the other leg, height = the leg of rotation)`,
      `Semicircle rotated \\(360^\\circ\\) about its diameter → a sphere (radius = the semicircle's radius)`,
      `Right trapezoid rotated \\(360^\\circ\\) about the leg perpendicular to both bases → a frustum (a cone with its tip sliced off)`,
      `Rectangle rotated \\(360^\\circ\\) about an axis that does not touch it (a gap in between) → a hollow cylinder (tube / cylindrical shell)`,
    ],
    figure: fig(solidRevolution(), "Rotating a rectangle about an axis produces a cylinder."),
    examples: [
      {
        h: "Rectangle → cylinder",
        p: "A 4 by 9 rectangle is rotated \\(360^\\circ\\) about the side of length 9. Identify the solid and find its volume.",
        fig: solidRevolution(),
        steps: [`Rotating a rectangle about one of its sides sweeps out a cylinder: the side of rotation (9) becomes the height, and the other side (4) becomes the radius.`, `\\(V = \\pi r^2h = \\pi(16)(9) = 144\\pi\\)`],
        check: "A cylinder with V = 144π ≈ 452.4 cubic units.",
      },
      {
        h: "Right triangle → cone",
        p: "A right triangle with legs 6 and 8 is rotated \\(360^\\circ\\) about the leg of length 8. Identify the solid and find its volume.",
        steps: [`Rotating a right triangle about one leg sweeps out a cone: the leg of rotation (8) becomes the height, and the other leg (6) becomes the radius.`, `\\(V = \\dfrac{1}{3}\\pi r^2h = \\dfrac{1}{3}\\pi(36)(8) = 96\\pi\\)`],
        check: "A cone with V = 96π ≈ 301.6 cubic units.",
      },
      {
        h: "Semicircle → sphere",
        p: "A semicircle with radius 7 is rotated \\(360^\\circ\\) about its diameter. Identify the solid and find its volume.",
        steps: [`Sweeping a semicircle fully around its own diameter traces out every point of a full sphere of the same radius.`, `\\(V = \\dfrac{4}{3}\\pi r^3 = \\dfrac{4}{3}\\pi(343) = \\dfrac{1372}{3}\\pi \\approx 1436.8\\)`],
        check: "A sphere with V ≈ 1436.8 cubic units.",
      },
      {
        h: "Right trapezoid → frustum",
        p: "A right trapezoid with parallel sides 4 and 9 and a perpendicular leg of 6 is rotated \\(360^\\circ\\) about that perpendicular leg. Identify the solid.",
        steps: [`The two parallel sides sweep out two circles of different radii (4 and 9), connected by a slanted surface — this is a frustum, or a cone with its tip cut off.`],
        check: "The solid is a frustum with radii 4 and 9 and height 6.",
      },
      {
        h: "Rectangle rotated with a gap → hollow cylinder",
        p: "A 3 by 5 rectangle is rotated \\(360^\\circ\\) about an axis parallel to (and 2 units away from) its nearer side. Identify the solid and find its volume.",
        steps: [`Since the rectangle doesn't touch the axis, it sweeps out a tube: an outer cylinder minus an inner cylinder.`, `Inner radius = 2 (the gap); outer radius = \\(2+3 = 5\\); height = 5`, `\\(V = \\pi(R^2-r^2)h = \\pi(25-4)(5) = 105\\pi\\)`],
        check: "A hollow cylinder with V = 105π ≈ 329.9 cubic units.",
      },
    ],
    practice: [
      { q: "A 5 by 12 rectangle is rotated about the side of length 5. Identify the solid and find its volume.", a: `Cylinder with \\(r=12\\), \\(h=5\\): \\(V = \\pi(144)(5) = 720\\pi \\approx 2261.9\\)` },
      { q: "A right triangle with legs 9 and 12 is rotated about the leg of length 9. Identify the solid and find its volume.", a: `Cone with \\(r=12\\), \\(h=9\\): \\(V = \\dfrac{1}{3}\\pi(144)(9) = 432\\pi \\approx 1357.2\\)` },
      { q: "A semicircle with radius 4 is rotated about its diameter. Identify the solid and find its volume.", a: `Sphere with \\(r=4\\): \\(V = \\dfrac{4}{3}\\pi(64) = \\dfrac{256}{3}\\pi \\approx 268.1\\)` },
      { q: "A right trapezoid with parallel sides 5 and 11 and perpendicular leg 8 is rotated about that leg. What solid results?", a: "A frustum with radii 5 and 11 and height 8." },
      { q: "A 2 by 6 rectangle is rotated about an axis 1 unit away from its nearer side. Identify the solid and find its volume.", a: `Hollow cylinder: inner radius 1, outer radius \\(1+2=3\\), height 6: \\(V = \\pi(9-1)(6) = 48\\pi \\approx 150.8\\)` },
    ],
    qa: [
      { q: "Why does the choice of axis matter so much?", a: "The same flat shape can produce completely different solids depending on which side (or line) it's spun around — the axis determines what becomes the radius and what becomes the height." },
      { q: "Why does rotating a semicircle about its diameter make a full sphere, not just half of one?", a: "As the semicircle sweeps a full \\(360^\\circ\\), it traces out every point in every direction from the axis, filling in the complete ball, not just the upper half." },
      { q: "How is a frustum related to a cone?", a: "A frustum is what's left of a cone after slicing off and removing the pointed tip with a cut parallel to the base." },
      { q: "Once I've identified the solid of revolution, how do I find its volume?", a: "Use the ordinary volume formula for that solid (cylinder, cone, sphere, or the difference of two cylinders for a hollow tube) with the radius and height you identified." },
      { q: "What if the 2D shape is rotated about an axis it doesn't touch at all?", a: "You still get a solid with a hole through the middle — the region between the axis and the shape becomes hollow, like a metal washer or a pipe." },
    ],
  }),
]);

// ── 10.6 — How Dilations Affect Surface Area and Volume ──
ch["10.6"] = L("10.6", "How Dilations Affect Surface Area and Volume (MA.912.GR.4.3)", [
  lessonHtml({
    title: "How Dilations Affect Surface Area and Volume",
    emoji: "🔎",
    overview: `When a 3D solid is dilated by a scale factor \\(k\\), every linear measurement (edges, radii, heights) is multiplied by \\(k\\). But area and volume don't scale the same way as length — because surface area is built from two dimensions, it scales by \\(k^2\\), and because volume is built from three dimensions, it scales by \\(k^3\\). This single idea explains why doubling a package's size takes far more than double the cardboard and far more than double the packing material.`,
    toolkit: [
      `Linear measures (edges, radii, heights, perimeters) scale by \\(k\\)`,
      `Surface area scales by \\(k^2\\)`,
      `Volume scales by \\(k^3\\)`,
      `Given an area ratio, find the scale factor with \\(k = \\sqrt{\\text{area ratio}}\\)`,
      `Given a volume ratio, find the scale factor with \\(k = \\sqrt[3]{\\text{volume ratio}}\\)`,
      `These relationships hold for any pair of similar solids, not just cubes or spheres`,
    ],
    figure: fig(scale3d(), "Similar solids: SA scales by k², volume by k³."),
    examples: [
      {
        h: "Applying a known scale factor",
        p: "A cube has edge length 4 cm. A similar cube is created using a scale factor of \\(k=3\\). Find the new surface area and volume.",
        fig: scale3d(),
        steps: [
          `Original: \\(SA = 6(4)^2 = 96\\); \\(V = 4^3 = 64\\)`,
          `New surface area: \\(96 \\times k^2 = 96 \\times 9 = 864\\)`,
          `New volume: \\(64 \\times k^3 = 64 \\times 27 = 1728\\)`,
        ],
        check: "New SA = 864 cm²; new V = 1728 cm³.",
      },
      {
        h: "Scaling a given surface area",
        p: "Two similar cylinders have radii 5 and 15. The smaller cylinder has a surface area of \\(200\\pi\\). Find the larger cylinder's surface area.",
        steps: [
          `Scale factor: \\(k = \\dfrac{15}{5} = 3\\)`,
          `Surface area scales by \\(k^2 = 9\\)`,
          `New \\(SA = 200\\pi \\times 9 = 1800\\pi\\)`,
        ],
        check: "New SA = 1800π.",
      },
      {
        h: "Finding scale factor from a volume ratio",
        p: "Two similar spheres have volumes \\(36\\pi\\) and \\(288\\pi\\). Find the scale factor from the smaller to the larger.",
        steps: [
          `Volume ratio \\(= \\dfrac{288\\pi}{36\\pi} = 8\\)`,
          `\\(k = \\sqrt[3]{8} = 2\\)`,
        ],
        check: "k = 2.",
      },
      {
        h: "Scaling down",
        p: "A pyramid has volume 480 cm³. A similar, smaller pyramid is made with scale factor \\(k=\\dfrac{1}{2}\\). Find its volume.",
        steps: [
          `New volume \\(= 480 \\times k^3 = 480 \\times \\dfrac{1}{8}\\)`,
          `New volume \\(= 60\\)`,
        ],
        check: "New V = 60 cm³.",
      },
      {
        h: "Going from a surface-area ratio to a volume ratio",
        p: "Two similar cones have surface areas 50 and 200. Find the scale factor, then the ratio of their volumes.",
        steps: [
          `Area ratio \\(= \\dfrac{200}{50} = 4\\), so \\(k = \\sqrt{4} = 2\\)`,
          `Volume ratio \\(= k^3 = 2^3 = 8\\)`,
        ],
        check: "k = 2; volume ratio = 8 : 1.",
      },
    ],
    practice: [
      { q: "A cylinder with surface area 60π is dilated by a scale factor of 4. Find the new surface area.", a: `\\(60\\pi \\times 4^2 = 960\\pi\\)` },
      { q: "A cone with volume 90 cm³ is dilated by a scale factor of 5. Find the new volume.", a: `\\(90 \\times 5^3 = 11{,}250\\) cm³` },
      { q: "Two similar prisms have surface areas 45 and 320. Find the scale factor from the smaller to the larger.", a: `Ratio \\(= \\dfrac{320}{45} = \\dfrac{64}{9}\\); \\(k=\\sqrt{\\tfrac{64}{9}} = \\dfrac{8}{3}\\)` },
      { q: "Two similar spheres have volumes 27 and 1728 (cm³). Find the ratio of their surface areas.", a: `Volume ratio \\(= \\dfrac{1728}{27}=64\\); \\(k=\\sqrt[3]{64}=4\\); surface-area ratio \\(=k^2=16\\)` },
      { q: "A box has volume 200 in³. A similar box, dilated by \\(k=\\tfrac{3}{2}\\), is built. Find its volume.", a: `\\(200 \\times \\left(\\dfrac{3}{2}\\right)^3 = 200 \\times \\dfrac{27}{8} = 675\\) in³` },
    ],
    qa: [
      { q: "Why does surface area scale by \\(k^2\\) but volume scale by \\(k^3\\)?", a: "Surface area is a two-dimensional quantity (length × length), so both factors of \\(k\\) apply; volume is three-dimensional (length × length × length), so all three factors apply." },
      { q: "If I double every dimension of a solid, how much more material do I need?", a: "About \\(2^2 = 4\\) times as much surface material and \\(2^3 = 8\\) times as much volume/filling." },
      { q: "What's a common mistake to avoid here?", a: "Multiplying area or volume directly by \\(k\\) instead of \\(k^2\\) or \\(k^3\\) — always square the scale factor for area and cube it for volume." },
      { q: "How do I get the scale factor if I'm only given a volume ratio?", a: "Take the cube root of the volume ratio: \\(k = \\sqrt[3]{\\text{volume ratio}}\\)." },
      { q: "Why doesn't doubling a shipping box's dimensions just double its cost?", a: "The box uses about 4 times as much cardboard (surface area) and holds about 8 times as much product (volume), so both material and capacity scale much faster than the linear size." },
    ],
  }),
]);
